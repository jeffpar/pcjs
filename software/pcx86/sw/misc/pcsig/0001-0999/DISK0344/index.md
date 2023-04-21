---
layout: page
title: "PC-SIG Diskette Library (Disk #344)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0344/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0344"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-KEY DRAW 1 OF 4 (ALSO 345,1032,1124)"

    PC-KEY DRAW combines the features of CAD, paint, slide show, and desktop
    publishing programs into one powerful and flexible drawing package.
    
    Create a wide variety of graphics such as:
    
    ~ Mechanical design
    
    ~ Country quilt design
    
    ~ Landscape architecture
    
    ~ Graphics game development
    
    ~ Business presentations
    
    ~ Graphic art
    
    Fast and easy to use, with or without a mouse.
    
    Drawing features include:
    
    ~ Lines -- parallel, spoke
    
    ~ Circles -- arcs, pie slices, ellipse
    
    ~ Curves -- sine, rose, spiral
    
    ~ Others -- dots, vectors, polygon, fillets and arrows
    
    Paint features include:
    
    ~ Spray paint
    
    ~ Shading
    
    ~ 29 colors
    
    ~ Modify color
    
    ~ 64 fill patterns
    
    ~ Fade/shift/strip colors
    
    ~ Reverse video
    
    Maximum drawing size is 55120 x 1600 with 64 layers.  Thirty-six text
    fonts are included in the registered version, four fonts in the
    shareware version, with the ability to create your own.  It can read and
    write HP soft fonts.  Text can be placed at the cursor location,
    justified, moved, rotated, and imported a an ASCII file.  Screen
    modification includes all standard options and a few unusual ones.
    
    Additional features include object area calculation, animation,
    templates, banner/poster printing, macro language, and powerful
    slide-show system.
    
    The newest version of PC-KEY-DRAW also includes HYPERDRAW.  HYPERDRAW
    provides a means to link related screens of information together in a
    database structure that is ideal for a variety of tasks such as teaching
    aids, interactive slide shows, image organization, drawing detailing,
    project scheduling, cataloging, process diagraming, and much more.
    There is also a full interactive tutorial that uses the linked screens
    of HYPERDRAW to teach the basic drawing commands of PC-KEY DRAW.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0344.TXT

{% raw %}
```
Disk No:  344
Disk Title: PC-Key Draw 1 of 4 (also 345,1032,1124)
PC-SIG Version: S3.9

Program Title: PC-Key-Draw
Author Version: 3.76
Author Registration: $100.00
Special Requirements: Two floppy drives and CGA.

PC-KEY DRAW combines the features of CAD, paint, slide show, and desktop
publishing programs into one powerful and flexible drawing package.

Create a wide variety of graphics such as:

~ Mechanical design

~ Country quilt design

~ Landscape architecture

~ Graphics game development

~ Business presentations

~ Graphic art

Fast and easy to use, with or without a mouse.

Drawing features include:

~ Lines -- parallel, spoke

~ Circles -- arcs, pie slices, ellipse

~ Curves -- sine, rose, spiral

~ Others -- dots, vectors, polygon, fillets and arrows

Paint features include:

~ Spray paint

~ Shading

~ 29 colors

~ Modify color

~ 64 fill patterns

~ Fade/shift/strip colors

~ Reverse video

Twenty-six text fonts are included in the registered version, four fonts
the shareware copy with the ability to create your own.  Text can be
placed at the cursor location, justified, moved, rotated, and imported a
an ASCII file.  Screen modification includes all standard options and a
few unusual ones.

Additional features include object area calculation, animation,
templates, banner/poster printing, macro language, and powerful
slide-show system.

The newest version of PC-KEY-DRAW also includes HYPERDRAW.  HYPERDRAW
provides a means to link related screens of information together in a
database structure that is ideal for a variety of tasks such as teaching
aids, interactive slide shows, image organization, drawing detailing,
project scheduling, cataloging, process diagraming, and much more.
There is also a full interactive tutorial that uses the linked screens
of HYPERDRAW to teach the basic drawing commands of PC-KEY DRAW.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.
```
{% endraw %}

## HYPERDRW.TXT

{% raw %}
```
                    HYPERDRAW and HYPERSHELL

Introduction

Welcome to the world of HyperDraw, HyperShell, and PC-KEY-DRAW
Version 3.6*.  The following information is provided to aid users
of PC-KEY-DRAW in using the features of HyperDraw and HyperShell.
First a little background information on how HyperDraw came to be
a part of PC-KEY-DRAW, then a quick look at the terminology,
followed by information on using hypertext stacks, including a
discussion of two stacks supplied with PC-KEY-DRAW, and finally a
look at creating your own HyperDraw stacks.  It's easier than you
may think. For more information on HyperDraw, hypertext, and
hypermedia see the October 1988 issue of BYTE magazine and the
October 3, 1988 issue of Newsweek.  There are also numerous books
written on HyperCard for the Macintosh.

The discussion of HyperDraw is followed by a discussion of
HyperShell which first became available in Version 3.6 and
compliments HyperDraw quite nicely.  HyperShell allows
PC-KEY-DRAW to run other programs or perform DOS operations from
within the program.

The addition of HyperDraw makes PC-KEY-DRAW a brand new program
in many ways and as far as I know without equal in the IBM PC
shareware world.  HyperShell and the other additions of 3.6
extended the range of PC-KEY-DRAW significantly.  I would
appreciate any comments or suggestions.


                            HyperDraw
Background

Many new features were added to Version 3.5, but perhaps the most
significant improvement and definitely the most exciting is the
addition of HyperDraw capability to PC-KEY-DRAW. PC-KEY-DRAW can
now be used as a graphic based data base.  It lets you link
screens together so that the user can easily flow from one screen
to the next.  This is a great way for organizing many different
types of information that includes pictures and text.  HyperDraw
is very similar to the HyperCard capability of the Mac.  Creating
linked databases in PC-KEY-DRAW is easy and using them is simple.
The tutorial disk is my first attempt at using HyperDraw.  It
provides an interactive tutorial for PC-KEY-DRAW that can lead
the beginner through all of the basic functions of the program.
See Using Stacks for more information on the tutorial disk.

To say the least, I am very excited about HyperDraw.  I see
tremendous potential with a wide range of uses.  It is ideal for
interactive slide shows, for education, for picture databases,
family trees, scheduling diagrams, drawing detailing and so much
more.
HyperDraw works by creating tags on the screen.  A tag is a
section of the screen with associated action.  Currently the
actions included run a macro (1), load a screen (2), or load a

partial screen (3).  Only screens have tags and any screen can
have up to eight tags in Version 3.5* or eighteen tags in Version
3.6*. Each tagged screen can have eight/eighteen tags and so on,
so there is no limit.  Additional tags and tag types will
probably be added in future versions.  The eighteen tags per
screen provided in Version 3.6 should be more than sufficient for
most applications.

You might find the history of HyperDraw interesting.  Ever since
I first put macros in the program I have wanted to have a way to
tag areas of the screen so that the user could define actions to
take place when the tagged area was selected with the cursor.  I
never could figure out a way I liked for doing it.  In the spring
of 1988, I saw HyperCard demonstrated on the Mac and I again got
interested in the idea, but once again was not happy with any
approach to the problem I could think of.  Several weeks later, I
received a letter from a long time user of PC-KEY-DRAW
complaining about the .DAT files that accompanied the .SCN files.
They contained the scale information for a drawing, but tended to
waste a lot of disk space.  I decided to encode the scale
information in the .SCN file.  Several days later I saw the movie
BIG in which the main character develops an interactive comic
book, which I realized was basically HyperCard and I realized the
technique used for the scale information could be used for saving
tag information, giving PC-KEY-DRAW HyperCard features.  A couple
of long days later and PC-KEY-DRAW had its own database
structure.

Several months after Version 3.51 started shipping, BYTE magazine
arrived in the mail with several excellent articles on hypertext.
I was surprised to find out that the concept of hypertext goes
back to 1945.  It has been a long time in coming to the PC world,
but the wait may have been worth it.  In Byte, Janet Fiderio,
points out that as a minimum, hypertext "is a DBMS that lets you
connect screens of information using associative links.", while
at its maximum "hypertext is a software environment for
collaborative work, communication, and knowledge acquisition."
She goes on to say that "Hypertext products mimic the brain's
ability to store and retrieve information by referential links
for quick intuitive access."


Terminology

The terminology of HyperDraw is simple, but there are several
terms that must be understood.  In many ways using hypertext to
organize data is like using a stack of 3X5 file cards.  Each card
contains a portion of the information contained in the entire
stack. Card and screen are used interchangeably, while the term
"stack" is used for a group of HyperDraw screens linked to each
other.  Linking of individual screens in HyperDraw to other
screens in a stack is accomplished by tagging a portion of the
screen with the name of screen, picture or macro to link to.  A

"tag" is the name, type, and button location used to link to the
next screen in the stack. The tag information is encoded in the
screen file. (SCN extension files)  Starting with Version 3.6, 18
tags per screen are allowed per individual screen. The term
"button" is used to describe the portion of the screen that
activates a particular tag by clicking on that area with the
cursor.  Buttons may be as small as a dot or as large as the
entire screen, they may also be visible and invisible.  Buttons
are created on the screen by using any of the programs drawing
functions.  Sets of buttons can be saved to disk and retrieved as
symbols.  A button might say "Push Here", "Click On This", or
simply give the name or icon of the appropriate action.  Anything
on the screen can be a button. Invisible buttons are simply areas
on the screen that have been tagged but not delimited by a
picture, icon, or word.


Using Stacks

Using HyperDraw stacks couldn't be easier.  Once a stack has been
created anyone can move through the stack simply by "clicking" on
the desired button.  To click on a button, move the cursor into
the area designated on the screen using the cursor pad, joystick
or mouse.  Hit the <ENTER> key, the trigger, or the first mouse
button to activate the tag the cursor is on.  Tagged areas are
always rectangular, even if the visible button is not. If nothing
happens, you are probably not inside of the tagged area. When an
area is clicked on the appropriate action is taken, either a
macro is run, a screen is called up to replace the current
screen, or a picture is overlaid onto the screen. Cursor movement
with the keyboard or a mouse is fine for most uses, but a short
cut is provided with the keyboard and the <J>ump command.
Selecting <J> from Cursor Mode will provide a chance to jump to
one of the eight possible tags.  Enter the desired tag number and
the cursor will instantly jump to the top left corner of the
tagged area.  Hitting <ENTER> will then activate the tag.

Once you enter a stack the words "Home" and "Back will appear in
the bottom left and right corners of the screen.  "Home" and
"Back" are both buttons.  "Home" will take you back to the very
beginning, where you entered the stack. "Back" will back up
through the stack, one step at a time, until you reach the place
you entered a stack.  The <Back Space> key can be used instead of
moving over "Back" and clicking.  No key equivalent is provided
for "Home".

How you move through a stack depends on the how it was created.
Some stacks will be essentially sequential in design, while
others will take a hierarchical form resembling the branches of a
tree.  In a sequential stack the user starts at the beginning and
moves to each subsequent screen in sequence.  This is how you
would read a novel.  In a stack set up like branches in a tree
the user can move down the desired path from one branch to the
next, occasionally backing up to go down a different branch. This
is how you would use a reference book.

The disk drive to save drawings on must be set to the drive:\path
that contains a given stack.  A drive cannot be specified in the
tag name.

The following discusses two rather different stacks that have
been created in PC-KEY-DRAW using HyperDraw.  The first is the
tutorial stack created to provide an interactive lesson in
learning and using PC-KEY-DRAW.  The second stack is a 3-D maze
game that is created primarily for fun.  Other stacks are in the
works.

Tutorial Stack

The tutorial disk for PC-KEY-DRAW is the first in a hopefully
long line of applications for HyperDraw.  It provides an
interactive tutorial for PC-KEY-DRAW that can lead the beginner
through all of the basic functions of the program.  The user
proceeds at his own rate and in any order desired. The tutorial
disk should go a long way in helping the novice get started with
PC-KEY-DRAW. To use the tutorial put disk T-1 in the drive for
drawings and run the TUTORIAL macro with <Alt-k r>. Just follow
the on screen prompts and click on the desired action with the
cursor, mouse or joystick.


Maze Stack

In the September, 1988 issue of Scientific American, A.K. Dewdney
discusses three dimensional mazes and presents a 3-D maze based
on the legend of Daedalus' Labyrinth.  The discussion of three
dimensional mazes is fascinating and inspired me to create a
computer version of the maze using the HyperDraw capability of
PC-KEY-DRAW.

MAZE.ARC contains a number of screen files for PC-KEY-DRAW, Ver
sion 3.50 or later, that form a 3-D maze.  You can move through
the various levels of the maze by moving the cursor with a key
board, mouse, or joystick and clicking to go up or down in the
maze to another level.  A map of the entire level is available by
clicking outside of an up or down button.  A thread back to the
surface is provided by the <Back Space> command.

To use the maze start by creating a subdirectory on your hard
disk.  Unarc MAZE.ARC into the subdirectory, about 800K will be
needed.  Run PC-KEY-DRAW, Version 3.5 or later.  Set "Drive for
Completed Drawings" as the drive and subdirectory that contains
the unarced files of MAZE.ARC by using the Status Screen
<Ctrl-s>.  Load the first screen using <F8 o START(Cr) y>, where
(Cr) stands for <ENTER> or <Return>.  Click on START. Follow on
screen instructions.

To learn more about this and other three dimensional mazes, check
out Scientific American, Computer Recreations, September, 1988.
Enjoy the maze and PC-KEY-DRAW.  Good luck in finding a solution.


Creating Stacks

Many users will be content with using stacks created by others,
but sooner or later you will want to try your hand at it.
Creating a stack is actually very simple. The screens used in a
stack are created using any or all of the programs
drawing/painting functions or they can be captured from other
programs.  Once the individual screens are created they are
linked to other screens, macros, or overlays by tagging a portion
of the screen and specifying the action to take.  The tagged
portion of the screen generally corresponds to a visible button
on the screen created as if it where a part of the screen.  The
actual tag can be smaller or larger than the visible button.

To start a tagging operation move to one corner of the tag
rectangle and select <Alt-k t>.  The program will prompt you to
mark the opposite corner by moving the cursor and forming the
desired rectangle and then hitting <ENTER>.  The current tag list
for the screen is displayed in the top left corner of the screen
and the program will prompt for the tag number to use.  Select an
empty tag or replace an existing tag. When a user clicks on a
tag, the program will use the first tag it finds that matches the
screen coordinates of the cursor. This allows tags to be within
other tags. Only the first tag is activated. The tutorial stack
uses this in the first screen to provide help information when a
user is unsure where to start.  The same technique is used in the
MAZE game to bring up a map of the level.

Next the program asks for the tag type.  Versions 3.5* and 3.6*
has three types of tags that can be activated.  Future versions
will have additional tag types for more power.

Type two (2) is the most common type as it calls another screen
(SCN extension) in much the same way as calling a screen with <F8
o>ld.  Each screen can have its own eighteen tags.  This is the
primary method of linking screens of information.  The other two
types are used to supplement screen files.

Type three (3) loads a picture file (PIC extension) over the top
of the current screen.  It is an ideal way of providing
additional information or providing help.  The picture file will
load so that the top left corner of the picture matches the top
left corner of the tag. Picture files do not have their own tags
and thus the existing screen tags remain unchanged. In Version
3.6, when a partial screen tag is clicked on the partial screen
will appear.  Clicking a second time in the same tag area will
cause the program to look for a second tag.

Type one (1) runs a macro file (MCR extension), thus allowing
any PC-KEY-DRAW function to be called from a tag.  The macro will
start as if the cursor was in the top left corner of the tagged
area. There are many uses of the macro command, including

animation to illustrate a point.  Screens and pictures can also
be loaded using a macro, but it is generally desirable to load
them as type 2 and type 3 tags.  Version 3.6 allows macros
execution to include BATch file type commands in HyperShell.
This allows PC-KEY-DRAW to run other programs simply by clicking
on a HyperDraw tag, thus PC-KEY-DRAW can now be used as a
graphics based DOS menu program.

A tag type zero can also be entered, which will cause the current
tag entry for the specified tag number to be erased.  To simply
view a list of the tag names select <Alt-k t ENTER Esc>.

Finally, the name of the tag must be specified.  This is the name
of the appropriate macro (type 1), screen (type 2), or picture
(type 3). The program does not check if the appropriate file is
available on the drawing disk until the tag is activated.  It is
good practice to save the screen file to disk, before activating
a tag to test it out.

That is all it takes to create your own stack.  Once a stack is
created it can be added to or changed just as easily.  Since the
tag information is contained in each screen file, relationships
need only to be set up once.  For example, a screen contains
several tags and an animation sequence.  When that screen is
called by a new screen, all of the tag information comes along.


                           HyperShell

Version 3.6 adds the ability to run other programs or preform DOS
commands from inside of PC-KEY-DRAW.  There are many uses for
this, but one of the more exciting uses is to combine the shell
capability with the HyperDraw capability, allowing a program to
be run by clicking on a button in a card.  This can be set up so
that PC-KEY-DRAW becomes a graphics based DOS menu program for
organizing the programs on a hard disk.

Background

Generally, a program that shells to DOS leaves behind a large
portion of the program in memory, so it can return to where you
left off when the shell is exited.  PC-KEY-DRAW uses a simple
trick, so that virtually all memory is return for use by DOS or
the called program, only 100 bytes are lost.  HyperShell operates
by creating a BATch file with the sequence of DOS commands to be
executed.  The second to last line in the BATch file returns to
the directory containing PC-KEY-DRAW and the last line calls
PC-KEY-DRAW.  These last two lines are automatically added to the
BATch file you created during the shell process.

For the BATch file trick to work, PC-KEY-DRAW must be called from
KD.BAT.  Executing KD_DRAW.EXE directly will not allow the use
of HyperShell.  KD.BAT contains several extra commands that could
be placed in a similar BATch file for a custom application.  If

KD.BAT is called initially with a MaCRo name specified on the
command line, that same MaCRo will be used to reload PC-KEY-DRAW.
This is how a menu system would operate or how one would set up
when using virtual page operation.  If a MaCRo name is not
specified initially, PC-KEY-DRAW is reloaded with the last screen
being worked on, ready for continuing operation.

Using HyperShell

HyperShell is easy to use.  Always be sure to call PC-KEY-DRAW
from KD.BAT.  The shell is reached with <F8 Alt-e> alternate
exit.  PC-KEY-DRAW may first save the workspace screen and then
provides an input screen for putting in the DOS commands.  Enter
commands exactly as you would in a BATch file.  Entering a blank
lines signifies completion of command input and causes the
entered commands to be executed.  Once entered, a command cannot
be edited directly.  If the command to be executed is an EXE or
COM file, simply enter the name of the file and it will be run.
You may need to proceed running the file with a change in path or
drive, if required.  If the command is another BATch file it is
necessary to call the BATch file rather than run it directly.  If
a BATch file is run directly, control is turned over to it and
you will never return to PC-KEY-DRAW.  In DOS 3.3 use CALL
followed by the name of the BATch file to run and control will
return on completion.  In earlier versions of DOS you must use
COMMAND /C followed by the BATch file name.  This causes a second
copy of DOS to be loaded and takes up RAM memory that will not be
available to the called program.

If the command is one that you will want to use again, such as
part of HyperDraw, record the command sequence as a MaCRo using
<Alt-k c>reate.  Each time that MaCRo is run it will create the
BATch file and perform the specified action.  Once a MaCRo is
created, it can be assigned as a hypertext tag for any screen. A
menu application would consist of a menu screen and a number of
MaCRos tagged to the screen that would load and run the
appropriate program.

```
{% endraw %}

## KD_DRAW.TXT

{% raw %}
```
<razmfvsc>
F1 Modification
rotate|revolve|screen|all colors|19
again rot/zm|both|a to 1|other|30
zoom|screen|fatbits|all colors|44
mirror|screen|
flip/compress|screen|
video-reverse|3&2|3&1|xor|47
slide|screen|power|
calculate|||mass|46
<rspao>
F2 Box & Figure
rectangle|& copy||filled|19
shaded box|& copy|
polygon|
arrow|||filled|30
outline|



<acefrstb>
F3 Curve Draw
arc|pie|
circle||center|
ellipse||center|
fillet|
rose curves|
spiral|
trig(sine)|
b-spline|
<lmdcsf>
F4 Shade & Fade
light shading|
medium shading|
dark shading|
count shading|
spray-paint|||all color|31
fade out||replace|all color|33


<pbcmfs>
F5 Paint & Ptrn
paint fill|set||alt colors|25
background|override|
color palette||monochrome|high res|46
modify color|screen|scr&alt|alt colors|50
fill-pattern|||alt file|33
strip|shift|shift all|


<dlpsctoe>
F6 Draw & Text
dot|add|
line/vector|add|
spoked lines|add|
parallel line|add|
cursor (cont)|
text|justified|animate|alt fonts|20
old vector|last|
end|save|save last|
<ecoamsrl>
F7 Copy & Move
erase area|animate|circle|clear|18
copy|save|last size|
old figure|place|
animate|shift||replace|30
move|with|over|replace|50
smear|with|over|replace|31
replicate|with|over|replace|19
line ins/del|||del|38
<dsofpwke>
F8 Files & Exit
directory|
save screen|
old screen|sequential|template|display|24
fresh screen|page/layers||display|33
print screen|zoom|part zoom|
workspace|screen 2|
kill file|rename|
exit to Dos|||shell|18

F9 Speed Toggle









F0 Color Toggle








<$[]{}+-b>
Cursor Mode $-b
$ a$pect ratio|
[ rot. ccw|
] rot. cw|
{ rot. ccw 90|
} rot. cw 90|
+ speed up|
- speed down|
background|
<cghijklm>
Cursor Mode c-m
cursor|center||type|46
grid||lines XOR|lines|34
help*|on/off||name|35
isometric|
jump|to tag|set|layer|36
keep|||keystrokes|37
layer|set|cont next|off|38
measure|switch||set|50
<pqrsuvwx>
Cursor Mode p-x
play*|prompt|music|pause|25
quality|||display|16
refresh||high res|med res
show|full|status|scroll 2|31
update|screen 2|
visual*|||horizon|47
width|
x-coord||zero set|
<rceft>
Key Macro [e]
run|
create|
end|
function|
tag|



<lrcaud>
Justify [c]
left|scroll|
right|scroll|
center|scroll|
ascii|scroll|
up|
down|


<udlrefgh>
arrow [u]
up|
down|
left|
right|
e up-right|
f down-right|
g down-left|
h up-left|
<lmdc>
shade [l]
light|
medium|
dark|
count|




1,"Center "
2,fill color
3,border color
4,number of spirals
5,Disk
6,Correct
7,line width
8,- mark corner
9,Wait for...
10,Mark opposite corner
11,Hit any key to continue
12,"Select "
13,fade steps
14,pattern then <ENTER>
15,new color
16,color to modify
17,Alt-<0-9>
18,Horiz. screen size
19,scale (units)
20,OK?[y]
21,animate - place with F7 <M>
22,"Enter text "
23,ynud[]{}a
24,Set Scale
25,CURSOR MODE S
26,Visual Horizon
27,distance
28,llfgefuu
29,llehfedd
30,grdurh
31,seconds
32,"<row,col> for time"
33,"<row,col> for date"
34,Fold line set
35,density of color
36,# of segments
37,dip angle
38,Is axis vert or horiz
39,scale factor
40,zoom factor
41,number of sides
42,view angle horiz plane
43,view angle vert plane
44,grid step
45,Set polygon size
46,Mark second endpoint
47,rotation angle
48,layer to change
49,Hid Act Vis With
50,display type
51,<PgDn PgUp ENTER Esc>
52,steps
53,Enclose area
54,Exit Function (y/[n])
55,Character?
56,word space
57,char. space
58,"Old "
59,"New "
60,"File Name "
61,"Clear Pages and "
62," symbols to use"
63,"Function halted "
64,Remove object
65," <[0] 1 2 3>  Page"
66,sine or cos rose
67,Light marked
68,XOR value
69,slide power
70,number of leaves
71,background
72,PLAY
73,x-coord.
74,y-coord.
75,size
76,Stop
77,ERROR
78,File not found
79,Out of paper -
80,Disk full or too many files
81,Bad file name
82,Dimension error
83,Printer Off
84,Write Protected
85,Disk not Ready
86,Disk media error
87,Path not found
88,Update in
89,AREA=
90,MASS=
91,of color
92,"set. Mark "
93,radius
94,endpoint/rad.
95," curve"
96,leaf size
97,points
98,Title
99,Creating BASIC Subroutine
100,20000 DIM C%(
101,):RESTORE 20001:FOR I=0 TO
102,:READ C%(I):NEXT:RETURN
103,"DATA "
104,Incorrect FONT version
105," Pan Direction "
106,@TITLE
107,Esc-exit ?-Help
108,Program in
109,Workspace in
110,DOS command
111,Drawings in
112,Screen ratio
113,jump
114,"Enter points for "
115,"Hid   "
116,Active
117,Visual
118,V-With
119,Layer  Number - Status
120,Virtual Save
121,cont
122,Tag Number
123,Tag Type
124,Tag Name
125,@NCK
126,@END
127,@INPUT
MCR
SCN
PIC
FNT
VCT
FIG
TXT
HOT
PIC
HLP
DFT
80C
40C
BAS
TBL
KD_PRNT
PAGE
WRKSPC
KD_PTRN
KD_PAINT.PIC
KD_FONT1
KDSHELL.BAT
Configure to your system and save
You must specify MaCRo name
```
{% endraw %}

## KD_UPDAT.TXT

{% raw %}
```
                 IMPROVEMENTS TO PC-KEY-DRAW Ver. 3.75 over 3.50
------------------------------------------------------------------------------
The following are additional improvements that didn't make it before the
manual for 3.5 went to print.

1. Jump to layer has been added under <Alt-j>.  Position cursor over item to
   worked on, select <Alt-j> and the program will find the correct layer.
2. The last text entered in <F6> is remembered the next time text is to be
   entered and taken as the default if <ENTER> is selected without adding new
   text.  If null text was used in a macro, it will have to be changed to a
   single space for proper operation.
3. The DAT file associated with SCN files has been eliminated.  Scale data is
   now stored in the SCN (screen) file.  Screens that don't require scale
   information can just be read as normal. Screens that do require scale
   information should be converted to the new format.  Use KD_UTIL.EXE to
   find all DAT files on a specified drive, insert scale information into the
   associated SCN file, and the delete the DAT file.
4. A complete database system similar to Hypercard for the Macintosh has been
   added.  See HYPERDRW.TXT for more information.
5. While in the fill pattern screen use <Ctrl-PgDn> and <Ctrl-PgUp> to move
   through all of the fill pattern files on the program disk (subdirectory)

1. <Ctrl-s>hift has been added to <F5> and <F5 f> to complete the possible
   color combinations.  <Ctrl-s> shifts all colors by one so that 0 becomes 1
   1 becomes 2, 2 becomes 3, and 3 becomes 0.
2. A file conversion utility has been added to convert SCN files used by
   PC-KEY-DRAW to IMG format used by GEM and a number of desktop publishing
   programs, such as Ventura Publisher.

1. In 3.52 the file naming convention for PC-KEY-DRAW has been changed to allow
   the program to be used on an Optical disk.  The "-" has been eliminated from
   all file names and replaced with "_".  For example KD-DRAW becomes KD_DRAW.
   This change allows PC-KEY-DRAW to be run on a CD-ROM using the High Sierra
   format.  PC-KEY-DRAW and HyperDraw are ideal for handling large databases
   on a CD-ROM.
2. Mouse behavior has been improved in menus, especially on fast machines.

1. 3.53 adds the ability to insert the default parameter into the command line
   to be edited.  Selecting <Ins> when asked to "Enter" or for a "File Name"
   will bring the default value (as displayed between the brackets "[]") to a
   edit line.
2. The <+> (plus) key can be used to modify the last letter of a file name by
   increasing its ASCII value by one.  This can be used with a macro to save
   a set of pages or layers under a single name.
3. <F4 f> and <F4 Alt-f> allow a fade step to be input for faster fading.

1. 3.60 corrects a minor bug with macro playback and <F6 c>, at higher "*"
   values.
2. Corrects bug with <Alt-p>ause during <F8 O>.
3. Corrects occasional bug in <F1 r>otate and <F1 Ctrl-r>.
4. Adds value step to input. When asked to enter a number, input "s" preceding
   the number to cause the valve to be a step value.  To move 10 positions to
   the right on the screen Enter <x> <s10> <ENTER> <ENTER>.
5. Adds random value to input.  When asked to enter a number, precede the value
   with an "r".  To move to a random position on the screen try, <x> <r320>
   <ENTER> <r200> <ENTER>.  Useful in recursive macros and in creating games.
6. Menu option is now provided for all input.  Use the cursor keys or mouse to
   select any item. Macro output shows value and not just <ENTER> when the
   default is taken.
7. Use "@" instead of a drive letter to force the program to look on the drive
   that PC-KEY-DRAW is AT.  When asked for a File Name to load, specify
   @:FILE to load the file "FILE" from the drive PC-KEY-DRAW is in.
8. Hyper Shell has been added to PC-KEY-DRAW allowing you to run external
   programs and then return to PC-KEY-DRAW.  Allows PC-KEY-DRAW to be used
   as a graphic DOS shell.  Hyper Shell uses only 100 bytes of memory to run.
   Hyper Shell only works when PC-KEY-DRAW is run from a BATch file like KD.
9. The mouse and joystick are no longer effected by the cursor speed when
   <Q>uality is off.
A. Vertical centering on the screen is provided by <c> for animated objects.
B. <F6 Alt-t> truncates text strings automatically at a <SPACE> when the string
   is too long for the screen, instead of in the middle of a word.
C. The last action is remembered for fast repeat.  The remembered action is
   displayed on the prompt line in brackets.  Hitting enter starts the action.
   This greatly speeds operation when drawing multiple images, like a series of
   circles or rectangles.
D. The number of sides in the last polygon drawn are retained as the default
   when <F2 p>olygon is next selected.  A two sided polygon gives a line that
   can be easily sized and rotated.
E. The number of leaves in the last rose curve drawn are retained as the
   default when <F3 r>ose is next selected.
F. The "File Name" prompt is now proceeded by "Old" or "New" for most file
   name input to differentiate on the action taking place.  When scrolling
   through a directory with <Up> or <Down>, the file extension is now shown.
G. <F8 k>ill and <F8 K> rename now operate as the other sections of the
   program, where a File Name is to be input.  Both assume the drive used for
   holding completed drawings. You cannot rename across drives or directories.
H. The Tag name now operates as the other sections of the program where a
   File Name is to be input.
I. <Alt-p>ause can be cut short by hitting <ENTER>.
J. <F8 s>ave and workspace update is 2 to 3 times faster.
K. Ten more HyperDraw tags have been added for each screen, making a total of
   18 per screen with no limit to the ultimate number of screens.
L. Cosmetic improvements of help, tag and error displays.
M. Select <?> during <F8 O> to toggle display of file name being displayed.
N. <F8 O> continues from last screen viewed instead of the first screen on the
   disk. If the directory is changed or a different disk inserted, <F8 O> will
   start with the first file on the new disk or in the new directory.

O. The music play command has been changed to play in the foreground as the
   default.  This works better when writing macros for different CPUs.
   The command syntax for <Ctrl-p> is the same as the PLAY statement in BASICA.
   Use "mb" for music background, but beware that a large chuck of memory is
   no longer available for hypertext. The last set of notes PLAYed is saved
   for fast repeat.  PLAY can be used as a way of pausing for less then a
   second by using the Tempo and Pause options in PLAY.  This is useful
   during animation.
P. The copy buffer now holds two objects.  During animation select </> for
   the alternate object.  <F7 A> will shift back and forth between the two
   objects during animation.  Almost all functions that use the F7 buffer will
   hold two images, if there is sufficient room in the buffer.
Q. <F7 Alt a> provides animation of a single object, with the object replacing
   the portion of the screen below it and restoring it as it moves.
R. Screen tags are searched in order from tag 1 to tag 18.  The first match
   is acted upon, as determined by the tag name.  With Version 3.5*, clicking
   on a tag type 3 (partial screen) displays the partial screen, clicking a
   second time causes a redisplay of the same partial screen.  With 3.6* the
   clicking a second time causes the search to continue down the list of tag
   items.
S. The AREA or MASS and center are saved to the macro file for alternate
   processing of the information.  The macro playback is not effected.
T. The CORRECTION CHECK EACH OPERATION (1-OFF, 0-ON) found on the <Ctrl-s>
   status screen has been expanded.  That line now reads CORRECT, IMMEDIATE
   (0-ON,ON 1-OFF,ON 2-ON,OFF 3-OFF,OFF).  0-ON is identical to earlier
   versions and is the setting used by all of the supplied macros. 0-ON will
   pause after completion of each action and ask if the screen appearance is
   correct or not.  Responding <y>es saves the drawing as it now appears, while
   <n>o returns to the last correct screen image. 1-OFF turns off the check and
   in earlier versions immediately takes the current screen as correct.  In
   Version 3.6 the screen is not immediately taken, allowing <Esc> to be used
   to undo the last action.  However, if HyperDraw, layers, help menu, or
   visual grids are in use the screen is immediately grabbed, as in earlier
   versions and <Esc> has no effect.  In both 0-ON,ON and 1-OFF,ON the second
   parameter is ON.  The second parameter determines how the program behaves
   when selecting action items from F1 to F7.  ON is the way PC-KEY-DRAW has
   always operated.  When the item is selected it starts immediately, ie. to
   draw a circle move to the center of the circle, select <F3 c>, size the
   circle and end the circle with <ENTER>.  If the second parameter is OFF the
   menu serves to select the next desired action when <ENTER> is hit, ie. to
   draw a circle select <F3 c>, move to the center of the circle, start the
   circle with <ENTER>, size the circle and end the circle with <ENTER>.
   2-ON,OFF has correction checking like 0-ON,ON but menu action is not
   immediate.  3-OFF,OFF turns off both the correction check and the immediate
   action.  Macros written in 3.6 save the mode as the first line of the macro
   so when the macro is run the correct mode is used by the macro. Control
   returns to the mode the program was in when the macro is finished. A macro
   can set the mode absolutely by accessing the status screen with <Ctrl-s>.
   When macros from older versions are run, a mode of 0 is assumed.  If you
   have macros written with the correction check off or mode 1 then you will
   need to add "@NCK|1" (without the quotes) to the first line of each macro.
U. When drawing lines in <F6> the lines must be ended with <F6 e> or <F6 E>.
   Version 3.6 automatically selects <e>nd if the user tries to select another
   function without ending the line drawing.

V. Mouse behavior in main menu has been improved by making it less sensitive.
W. Use <?> instead of <h> as the primary means of selecting Help.
X. The default macro playback star mode is now 2 instead of 0, when a macro
   is called from DOS, ie. *|2 is the default instead of *|0.  This stops the
   cursor and prompt line from being displayed initially.
Y. Fatbits now works on Hercules cards when an emulator like HGCIBM is used.
Z. When <j> is selected to adjust mouse or joystick sensitivity, the mouse or
   joystick is turned off.  <Esc> will return to the program leaving the mouse
   off.  Inputting a value will reset the mouse or joystick and turn it on.
   Some machines may require the mouse or joystick to be turned on several
   times before they will work.

1. Version 3.65 improves rotation control of cursor position using <[> and <]>
   by making the cursor speed setting equal to the rotation angle in degrees.
2. Vector rotation of imported object with <F6 o> or <F6 O> adds ability to
   rotate in 90 degree increments with <{> and <}>.
3. The virtual page help screen <Ctrl-Home ?> now shows the size of the
   current drawing in medium resolution.
4. Virtual screens or layers are now saved and loaded directly using all of
   the basic screen load and save of <F8>.
5. The main menus have been improved for ease of learning and use.  The
   possible key combinations are enclosed in <>, the default key when <ENTER>
   is hit is enclosed in brackets [].  The menu can be traverse bidirectionaly
   with the left and right arrow keys or the up and down arrow keys.
6. Non registered copies of PC-KEY-DRAW will pause for 10 seconds before exit.
   Registered copies can be exited directly.
7. Selecting <ENTER>, after using <F7> smear or replicate, will end the action
   and save the image.  Selecting <F7> after smear or replicate will take you
   to the F7 menu as before.
8. As with #7 above <F6 c>ursor has been modified to end when <ENTER> is
   selected avoiding the need to select <F6 e>nd.
9. Mouse operation when using the pull down help menus has been improved.
A. <F4 c>ount step has been added to <l>, <m>, and <d> shading, allowing the
   user to specify the shade step.
B. <F2 s> adds the <c>ount step option as #A above.
C. Switch to high resolution mode with <Alt-r> or medium resolution mode with
   <Ctrl-r>.
D. Enter a "@" in place of text when entering text in a macro to have the
   macro pause on replay and wait for user input.

1. 3.70 combines the separate printer files (KD_PRNT?.TBL) into a single file
   (KD_PRNT.TBL) to significantly reduce the amount of disk space required.
2. KD_DRAW.JMP has been eliminated to reduce required disk space.  The jump
   function is still retained, but the jump information is stored at the end of
   KD_DRAW.TXT.
3. The INSTALL BATch file has been improved and refined.
4. Use <Shift-Tab> during <F8 O> to toggle between medium and high resolution.
5. <F4 s> spray paint is 25% faster and is now effected by the <w> width
   command to provide various densities.
6. <F4> <l>, <m>, <d>, and <c> have been improved.
7. Use <P> to replace the normal cursor prompt with the desired wording.
   This command has been added to provide HyperDraw and HyperShell a user
   customized prompt and the ability to be used in a runtime mode.  See the
   manual for information on using PC-KEY-DRAW in a runtime mode.  See the file
   README._P1 for information on distributing PC-KEY-DRAW in a runtime mode.
8. Using <F8 d> <=X> <Esc> can now be used in macros to set a drive without
   displaying the files when <*> is set to 2 or greater.

9. KD_TRANS.EXE, MAKHOTLB.EXE, and SCN2IMG.EXE have been combined into a
   single program KD_UTIL.EXE.  KD_UTIL.EXE can be used to convert from SCN
   (screen) files to BIN (binary files) and back, to convert from SCN files
   to IMG (GEM Image format) used by Ventura etc., to convert MCR (macro) files
   to TXT (text) files for easier editing in a word processor, to create HOT
   key files and to compile HOT key files. Several BASIC programs have also
   been replaced by KD_UTIL.EXE for updating old format files.  A utility is
   also included to take an ASCII list of X and Y variables separated by a
   comma and convert into a MaCRo file that can be run in KD.  KD_UTIL can be
   run interactively, used in a BATch file or called from KD using HyperShell.
A. Two macro "@" commands have been added.  The first is @INPUT, it is used to
   stop a macro and wait for user input and then continue the macro.  This
   replaces item D from 3.65 for text and now covers all input except for
   cursor movement around the screen.  The second "@" command is @END which
   causes a macro to end execution and return control of the program to the
   user at the point where @END is inserted and not back into CURSOR MODE,
   unless of course that is what is desired.  All statements after @END are
   ignored.  "@" commands in general must be inserted in a macro via a text
   editor and cannot be put in while the macro is created.  The exception to
   this is for text entering as in item D in 3.65.  "@" commands must be
   capitalized or they will be ignored.
B. Virtual pages and layers have been improved so that blank screens are no
   longer saved to the workspace, providing more room for larger drawings that
   contain blank areas.  The image saved with <F8 s> will also not include the
   blank sections resulting in smaller file sizes.

1. 3.71 corrects several minor bugs in 3.7.
2. Macro playback during macro creation has been improved.
3. SCN files can be converted to COM files that can be run.  When run the image
   is loaded and the screen waits for a key to be hit before continuing. Use
   "/C" after file name to automatically continue without a key press.
4. KD_UTIL.EXE has also been improved by eliminating the KD_UTIL.OVL file.
5. Use Hot key <Alt-F8> to jump to KD_UTIL from within KD.
6. <F6 c> cursor drawing (freehand) is now effected by the <w>idth setting.
7. Dashed line drawing has been added for <F6> <l>ine, <s>poke, and <p>arellel,
   setting the <w>idth to a negative number corresponding to the dash size.
8. An <a>bsolute command has been added to the options when redrawing a vector
   image.

1. 3.75 Allows both layers and virtual pages to be active at the same time.
   Use <l>, <L> and <Ctrl-l> to control the layers. <Alt-l> is no longer used.
2. A zoom command has been added during animation. Select <z> and select the
   new scale factor or the zoom factor. After zooming the program remains in
   animation an the object can be zoomed again if desired.
3. <F1 z> and <F1 Alt-z> have been enhanced to provide a <f>it command when
   zooming an object.  Select <f> when asked for scale or zoom factor an a
   box will appear on the screen that can be adjusted to the desired new size
   of the object being zoomed. This is great for sizing text.
4. The font file format has been changed to allow any size character, up to the
   full screen.  Any character from 1 to 255 can be defined. The file size is
   generally much smaller, with most of the older fonts reduced to about
   half their old file size. Use KD_UTIL to update old fonts to the new format.
5. If a lowercase letter is not defined the uppercase letter is used.

6. KD_UTIL has been greatly updated with a new menu system, new features and
   plans for much more. Run KD_UTIL interactively, from a BATch file or from
   HyperShell.  To run in a batch mode enter commands on command line
   followed by the name of file to modify, as: KD_UTIL FU A:CENTURY to update
   the CENTURY font in drive A:. To update a disks worth of fonts use:
   FOR %A IN (A:*.FNT) DO KD_UTIL FU %A to update all font files in drive A:.
   Any softfont for an HP LaserJet can be converted to PC-KEY-DRAW format.
   Any PC-KEY-DRAW graphic can be saved as an HP LaserJet softfont.
7. BASIC files created in <F7 C>opy are 20% smaller.
8. The <P>rompt command has been improved. If "@TITLE" is used as the prompt
   the title line of the screen is always shown in the Cursor Mode.  This
   info is saved with a screen file.  With @TITLE it is now possible to easily
   edit the entire screen by setting the <ALT-V> the visual horizon to <199>.
   The cross hair cursor should be used for editing.  The separate title
   screen is no longer available.
9. The display of date and time is now tied to a screen file.
A. The DOS BATch files once used for menus have been replaced with a menu
   in PC-KEY-DRAW that uses HyperDraw and HyperShell.

1. 3.76 corrects several minor bugs in 3.75.
2. HOT key file headers have been changed and an editor has been added to
   KD_UTIL. Hotkey files are considerably faster.
3. Background color override has been added as <F5 B>.  A value of 0 lets each
   screen use the foreground and background color saved with the file.  A
   of 1 will override and cause all screens to have the save foreground and
   background color.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0344

     Volume in drive A has no label
     Directory of A:\

    BASRUN   EXE     31744   5-07-82  12:00p
    CAMERA   COM       208   5-16-86   8:55a
    DATEIT   EXE      2048   5-18-90   8:08a
    GEMEPSON COM       128   7-10-84  12:50a
    GO       BAT       761   2-15-90   9:04p
    HYPERDRW TXT     18927   8-04-89  11:44p
    INSTALL  BAT      1864   3-02-90  10:43a
    KD       BAT       997   2-15-90   7:15p
    KD_DRAW  EXE     72690   4-23-90   9:04p
    KD_DRAW  HLP     56576   4-07-90  11:25a
    KD_DRAW  HOT      6656   4-06-90  11:19a
    KD_DRAW  TXT      4992   4-23-90   8:54p
    KD_FONT1 FNT     11392   2-07-90  11:40a
    KD_FONT2 FNT     11392   2-07-90  11:40a
    KD_MENU  HOT     31616   4-06-90  10:55p
    KD_MENU  SCN     16391   4-06-90   4:47p
    KD_PAINT PIC       896   3-20-89  12:36a
    KD_PRNT  TBL      1009  11-02-89   1:19p
    KD_PTRN  PIC     15488   3-20-89  12:36a
    KD_UPDAT TXT     19399   4-07-90   9:55a
    KD_UTIL  EXE     24573   4-10-90   2:35p
    MENU     BAT       256   2-15-90   7:09p
    M_DOC    PIC      1920   2-23-90   8:51a
    M_EXAMP  PIC      1024   2-18-90   4:27p
    M_EXIT   PIC       512   1-21-90  10:52p
    PLAN     PIC      1792   1-29-90   3:30p
    README   _P1     12250   2-28-90   9:58p
    SAUC     PIC      1536   1-29-90   3:29p
    FILE0344 TXT      2035   7-10-90   9:36a
           29 file(s)     351072 bytes
                            1024 bytes free
