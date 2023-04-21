---
layout: page
title: "PC-SIG Diskette Library (Disk #2217)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2217/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2217"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FRACTAL GRAFICS"

    FRACTAL GRAFICS is an easy, intuitive fractal drawing program that
    anybody can use. You don't need to know math or even be good at art,
    although both skills can be used to make state-of-the-art motion
    picture special effects.  Create your own models of systems like
    rivers, trees, mountains, and natural disasters.
    
    Use with the keyboard or a mouse.  On-line Help and many examples will
    get you started quickly.  Begin to explore the world of with a new and
    fascinating fractal-drawing program!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2217.TXT

{% raw %}
```
Disk No: 2217                                                           
Disk Title: Fractal Graphics                                            
PC-SIG Version: 1.12                                                    
                                                                        
Program Title: Fractal Grafics                                          
Author Version: 1.0S2                                                   
Author Registration: $79.00                                             
Special Requirements: 384K RAM and CGA.                                 
                                                                        
FRACTAL GRAFICS is an easy and intuitive fractal drawing program        
anybody can use. You don't need to know math, or even be good at art,   
although both skills can be utilized to make state-of-the-art motion    
picture special effects, or to create your own models of natural systems
like rivers, trees, mountains, and natural disasters.                   
                                                                        
The program can be used with the keyboard or a mouse.  It has on-line   
help and many examples to get you started.  Begin to explore the world  
of with a new and fascinating fractal/drawing program!                  
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## INSTALL.TXT

{% raw %}
```






INSTALLATION INSTRUCTIONS for Fractal Grafics, Version 1.0

   Copyright, 1990 by Cedar Software, Morrisville, VT 05661-5140

To install and run Fractal Grafics:

1. Back up the Fractal Grafics disk (see the manual if you need help).

2. Make sure your DOS prompt says A> and you have a copy of the Fractal
   Grafics PROGRAM disk in drive A.  (Type A: and press the Enter key.)

   NOTE: If, for some reason, you can't install Fractal Grafics from drive A,
   you can do it from another drive.  (For example, to install from drive B,
   you would type B: and press Enter.)

3. Type the name of your graphics adapter (CGA, EGA, or VGA), and
   press the Enter key.  This will prepare the start-up and sample pictures.
   Nothing will be written to your hard disk yet.

4. More instructions will appear if you've done the first three steps right!

```
{% endraw %}

## INSTALL2.TXT

{% raw %}
```

If you will be running Fractal Grafics from a floppy disk, the installation is
now complete, and you can run the program by typing FG and pressing Enter.
(IMPORTANT: Be sure to read the README file on this disk first!)

If you wish to copy Fractal Grafics to a hard disk, type HARDDISK now and
press Enter.   The HARDDISK batch file will do the following automatically:

  1. Create a directory on drive C: named \FRACTAL
  2. Copy the Fractal Grafics program and library of fractals to that directory
  3. Create a sub-directory within \FRACTAL called \FRACTAL\HELP
  4. Copy the on-line help files to that sub-directory

No other files or directories will be altered.

NOTE: If you want Fractal Grafics installed to a different drive or directory
   than C:\FRACTAL, just type a space after HARDDISK, followed by the drive
   and directory you want, and press Enter. (Example: HARDDISK C:\FRACGRAF)

 
```
{% endraw %}

## INSTALL3.TXT

{% raw %}
```
Installation to the hard disk is now complete.	To run Fractal Grafics,
type the following commands, pressing Enter after each line:

   C:           (This changes to drive C.)
   CD \FRACTAL  (This gets you into the FRACTAL directory.)
   FG           (This runs the Fractal Grafics program.)

NOTE: If you specified a different drive and/or directory, type them instead!

For instructions on running Fractal Grafics in different video modes or
specifying start-up files, refer to your manual.  If you wish to use a
mouse be sure the mouse driver is installed before running Fractal Grafics!

If you haven't done so already, please insert the PROGRAM disk,
type README, and press Enter now.  This will display important
last-minute documentation not in your manual.
```
{% endraw %}

## MANUAL.TXT

{% raw %}
```

                                  T H E

                       F R A C T A L   G R A F I C S

                              O N - D I S K

                               M A N U A L


                      Copyright, 1990 by Dick Oliver
                Cedar Software, Morrisville, VT  05661-9605
                              (802) 888-5275

                          Version 1.0, May, 1990


Compatibility:

Required: * IBM-PC, XT, AT, PS/2, or compatible
          * DOS version 2.0 or higher
          * CGA, EGA, or VGA graphics adapter
          * Minimum of 384K of memory

Optional: * Microsoft compatible mouse
          * Math co-processor


For file compatibility, this product uses the PCX Programmer's Toolkit,
Copyright 1989 by Genus Microprogramming, Inc.  Other products mentioned
are trademarks of their respective companies.



CONTENTS
--------

     I. What is Fractal Grafics?
    II. What Can I Do With It?
   III. Getting Started
    IV. The Fractal Grafics Guidebook
     V. Installation
    VI. Running the Program
   VII. Alternate Video Modes
  VIII. Start-up Files
    IX. The Juliman Program
     X. Tips on File Management
    XI. Features and Frustrations
   XII. Registration

I. WHAT IS FRACTAL GRAFICS?
---------------------------


Fractal Grafics is a drawing program.  As with any drawing program, you use
the mouse and keyboard to create pictures on the screen from dots and
lines, with full control over coloring and shading.  The images you design
are limited only by your artistic skill and imagination.

Fractal Grafics gives you a new, powerful drawing tool called a "fractal
template".  You use the template to create complex shapes with rich detail,
and assemble these shapes into eye-catching, colorful images.  With
practice, you will be able to make pictures more realistic than anything
you've ever created on a computer (or, more than likely, on paper).  Many
of the most difficult things to draw with other programs (like plants,
landscapes, and other flowing natural forms) can be drawn in great detail
in seconds with a single "imprint" of a fractal template.

But realism is only half the story.  Even before you build your drawing
skills enough to mimic the "real" world, you'll embark on a breathtaking
journey into the fantastic world of fractal geometry.  The easiest shapes
to create are spiraling vortexes, other-worldly plants, enchanting galaxies
of color, and dazzling portraits of infinity.

Fractal Grafics is designed to be intuitive and easy to use for anyone: you
don't need to know any mathematics, or be any good at art--though you'll
find plenty of chances to use both skills if you have them!  The mission of
Fractal Grafics is to let YOU get creative with the geometry that has
revitalized both science and art, from the prediction of earthquakes to
state-of-the-art motion picture special effects.

II. WHAT CAN I DO WITH IT?
--------------------------


Fractals are beautiful and fascinating, and you're sure to get a great deal
of entertainment from using Fractal Grafics.  You can also do some very
practical things with it:


     --You will learn through hands-on exploration about fractal geometry
and "chaos" theory, which are revolutionizing many fields of science.  Here
are just a few examples:

     * See with your own eyes why traditional linear systems go belly up
     when applied to most natural phenomena.

     * "Grow" plants on the screen by designing your own geometric genetic
     codes, and learn to reconstruct the genetics of real plants.

     * Learn to create visual graphs and models of non-linear dynamical
     data.


     --You can also create spectacular artwork and graphics designs.  A
sampling of your new artistic repertoire:

     * Sculpt a fractal mimicry of any existing (or imagined) image, and
     add coloring and shading highlights.  All shapes can be re-sized
     without loss of textural detail.

     * Then apply some of these effects:  Irregular or spiraling zooms,
     complex "cracks" and fragmentation, spray, blur, winding tendrils,
     fuzz, or anything you can imagine (and lots you can't)!

     * Tile any shape with copies of itself for dizzying "off to infinity"
     effects.

     * Exchange images with other "draw", "paint", and desktop publishing
     programs via built-in compatibility with the PCX file format.

III. GETTING STARTED
--------------------


What should I do to get           How long
going with Fractal Grafics?       will it take?

1. Install the program, and get   10 to 20 minutes
it running.  (The following
two sections tell you how.)

2. Follow the on-line help        1 to 2 hours
topics 0 through 9 to get
familiar with the program.
(Just run the program, press
the letter H and follow the
instructions that appear.)

3. Create some fractals!          At least an hour
Play, explore, and practice.

4. Follow the rest of the         1 to 2 hours
on-line help topics to learn
all the features of the program.

5. Practice some more.  Try to    At least an hour
imagine a shape and see if you
can create it on the screen.


If you wish to continue using the program at this point, you are asked
register your use with the author.  You will be sent a Guidebook which
picks up where the on-line tutorial leaves off.

IV. THE FRACTAL GRAFICS GUIDEBOOK
---------------------------------


When you register, you'll get a guided tour of the fractal universe, with
six educational sections and more than 150 hands-on examples.  The
following topics are covered:

1. ART

You'll master the use of fractal templates to create breathtaking
images.  Learn how to produce any design you can imagine, and a world of
shapes beyond imagination.


2. SCIENCE

Fractals have revolutionized almost every branch of science.
By modelling the natural world, you will discover the deep simplicity
behind Nature's complex face.  You'll also learn to graph fractal curves to
fit actual data.


3. MATH

Step into infinity and learn how fractals work.  If you want to
see the equations and algorithms, they're all here.  If you don't,
everything is explained visually and intuitively.


4. PHILOSOPHY

You'll discover the startling revelations of "non-linear"
thinking, and the intimate connections between fractals and Chaos theory.
Is the universe a fractal?  Are YOU?



5. HISTORY

You'll retrace the evolution of a new geometry, and find out
how "pathological" shapes which appalled their inventors have revitalized
science, mathematics, and art.



6. LITERATURE

You'll also get a complete bibliography of fractal books,
articles, software, and videos.  There's also advice on how to use Fractal
Grafics as a companion to several books.


And all the examples used in the Guidebook are indexed in the back so you
can browse through them on disk and then read about the ones that intrigue
you the most.

V. INSTALLATION
---------------


You should follow these steps before you run Fractal Grafics for the first
time:


1. Back up the Fractal Grafics disk(s).  Use the back up copy from now on,
and put the original in a safe place.  If you're not sure how to back up a
disk, here's how:

   --Insert a blank floppy disk in drive A.

   --Type FORMAT A: at the DOS prompt,
     and press Enter.  If you're sure you've
     inserted a blank disk, tell DOS by
     pressing Enter again.

   --When the formatting is done, take out the
     blank and insert the Fractal Grafics disk

   --Type DISKCOPY A: A: and press Enter

   --Follow the computer's instructions
     for inserting disks during the copy

   --Label the copy, and stash the original


2. Insert the back-up copy of the Fractal Grafics disk in drive A, type A:
(the letter A and a colon), and press the Enter key.  (The DOS prompt
should now say A>)

If, for some reason, you can't use drive A, just type the letter of the
drive you will be using, followed by a colon, and press Enter.  (Example:
To use drive B, type B:).  If you want to copy the disk to
a drive other than A (for example, drive B), use this command:

XCOPY A:*.* B: /S

NOTE: A "double-density" 3.5 inch disk holds twice as much as a "double
density" 5.25 inch disk.  Therefore, you can not backup a 3.5" disk to a
5.25" disk, unless the 5.25" disk is "high density".  You CAN copy two
5.25" disks onto one 3.5" disk if you want, though.  Just use the XCOPY
command above twice.  If this all sounds confusing, just
use one disk drive and the DISKCOPY command!


3. Type INSTALL and press Enter.  Follow the instructions that appear on
the screen.


The installation is done by several batch files which will tell you exactly
what they are doing before they do it.  If you're a DOS expert, you can
modify these batch files to suit any special need or unusual system
configuration you may have.

VI. RUNNING THE PROGRAM
-----------------------


Once you've installed Fractal Grafics (see the previous page for
installation instructions), you can run it by entering FG from the
directory where the program resides.  For example:


--To run from a floppy disk, type this (pressing Enter after each line):

A:
FG


--To run from the default hard drive directory:

C:
CD \FRACTAL
FG


--To run from another directory (if you specified one during installation):

(drive letter):
CD \(directory name)
FG


NOTE FOR MOUSE USERS: If you wish to use your Microsoft-compatible mouse
with Fractal Grafics, you must be sure to install your mouse driver before
running the program.  In many cases, the driver is installed automatically
when you start the computer, so you may not need to take any additional
steps.  See your mouse manual for more instructions.


The next page explains some advanced tricks for running Fractal Grafics.
You don't need to read it until you've used the program for a while.

VII. STARTING IN AN ALTERNATE VIDEO MODE
----------------------------------------


To force Fractal Grafics to start in a particular video mode, type one of
the following switches after the FG command.  (For example, to start a VGA
in 640 by 350 mode, enter FG /E)

If you don't specify a mode, you will get mode /C (if you have a CGA), /E
(with EGA), or /V (with VGA).

Switch:    Resolution:     Colors:

/L         320 by 200      Green/Red/Brown
/L2        320 by 200      Green/Red/Yellow
/L3        320 by 200      Cyan/Magenta/White
/C         640 by 200      Black & White
/E         640 by 350      16-Color Palette
/V         640 by 480      16-Color Palette

NOTE: There is no on-line help in /L modes, and many coloring features
require 16-color modes.

Templates can be saved in one mode and loaded in another.  Picture files,
however, may look wrong when saved and loaded in different video modes.





VIII. STARTUP FILES
-------------------


Whenever you run Fractal Grafics, it automatically loads a picture file
named STARTUP.PCX and a template file named STARTUP.FRT if they exist in
the current directory.  You can save any picture and/or template under the
name STARTUP and they will come up every time you start the program.

You can specify another start-up file name on the command line.  For
example, to start Fractal Grafics in 320 by 200 mode and bring up the
picture and template named CGASTART, enter:

FG CGASTART /L

To start up without loading any files, either delete the files named
STARTUP or specify a non-existent name (example: FG NOFILE).  The picture
will come up blank and a simple triangular template will be centered on the
screen.

IX. THE JULIMAN PROGRAM
-----------------------


The JULIMAN.EXE file on this disk is a simple program to generate pictures
of the Mandelbrot Set and Julia Sets.  These are famous mathematical
fractals which are drawn by multiplying points on the "complex plane"
by themselves or each other over and over again.  Pictures of these sets
take quite a while to produce (up to several hours per picture on an "AT"
class computer).  The "Escape-Time Algorithm" used to draw these sets is
explained in the Guidebook (which you get when you register), with
illustrations and commented pseudo-code.

To use the Juliman program, install Fractal Grafics and type JULIMAN at the
DOS prompt instead of FG.  If you have VGA graphics, you may want to force
the program to run in the lower EGA resolution mode by typing JULIMAN /E.
(Images take less time to generate in the lower resolution.)

JULIMAN will ask for several numbers.  If you're not familiar with x,y
coordinates and that sort of thing, just keep pressing Enter to use the
default values.  To get you started, here are a few interesting parameters:

Mandelbrot Set:

From x =     y =         To x =      y =
--------------------------------------------
    -0.95   -0.32          -0.85    -0.22
    -0.2     1.02          -0.13     1.07
    -0.7     0.5           -0.4      0.7
    -1.78    0             -1.76     0.013

Julia Sets for the points:

   x =         y =
------------------------
   0.11031    -0.67037
   0.27334     0.00742
  -1.25        0
   0           1
  -0.39054    -0.58679

All Julia sets are from (x = -1.5, y = -1.5) to (x = 1.5, y = 1.5).
You can "zoom in" by using numbers in between, for example:
(x = -1, y = -1) to (x = -0.25, y = 0.25) zooms into the top left corner.

In most cases, 30 is a good number of iterations.
More iterations will show greater detail, less will go faster.

Control over colors and palettes is very limited in Juliman, but the
images are saved as PCX files, so you can load them into Fractal Grafics
(or another graphics program) to adjust the colors as you wish.

X. TIPS ON FILE MANAGEMENT
--------------------------


Fractal Grafics comes with many examples, and you'll create hundreds
more in no time.  Organizing so many files, and finding the ones you want
amongst the multitudes, can be a challenge.  Everyone has their own methods
of file managament, and you can use the same techniques you use with files
from other programs to keep track of fractal templates and pictures.  Here
are some suggested techniques:

    * Use DOS.  You're probably already familiar with DOS commands and
directory structure.  Fractal Grafics lets you go into DOS temporarily,
without losing your on-screen work, to change directories, delete files, etc.

    * Or use a dedicated file management program (such as PC-Tools or Norton
Commander).  You can either run these programs within Fractal Grafics from
the temporary DOS prompt, or load them as TSR's to be popped-up any time.

    * Make separate directories for various types of fractals you might
design (e.g. MD PLANTS, and store all models of plants there).  You can
then use the DOS command CD to change between them.

    * You can Load templates without paging through a directory listing
by pressing T at the main menu.  For example, if you had your plants in the
\FRACTAL\PLANTS sub-directory (and the current DOS directory was \FRACTAL),
you could Load the Template BIGTREE by pressing T and entering PLANTS\BIGTREE
for the filename.

Fractal Grafics can find on-line help from within any sub-directory of FRACTAL,
but may not be able to locate the help files from other directories or drives.

If you're new to file management, your DOS manual will provide more tips.

FEATURES AND FRUSTRATIONS
-------------------------


Fractal Grafics has been thoroughly beta-tested, and has no major bugs.
However, there's no such thing as a perfect program.  There will always
be potentially confusing features and stubborn bugs, and you should know
about them!  Planned future enchancements are also listed--expect most of
them in the next program update (which you get free when you register.)

MORE VIDEO MODES: Expect support for Hercules and super-VGA modes soon.

ENHANCED TEMPLATE MANIPULATION:  Sometimes, it would be nice to be able to
rotate all parts around the seed, or move the seed independantly of the parts.
This is easy to program, but difficult to make comprehensible in a user-
interface.  Any suggestions on how you'd like this implemented?

MOUSING FEATURES: Future releases will feature more mousing shortcuts, such
as mouse-oriented filing, second color selection on Blend Colors, etc.

MOUSING ACCURACY: Manipulating the template with the mouse is not as accurate
as I'd like, due to floating-point precision.  (Better accuracy slows down
the program a LOT.)  Use the menu with the Precision command for fine work.

TOO BIG: If you grow the template a hundred times or so, it will eventually
get too big for the program to handle.  You will NOT get a friendly message
to this effect, but the program will crash and report a math error.  (You could
never use a template that big, since it would take hours to Draw or Paint.)

CONTROL-C: If you press Ctrl-C, or Ctrl-Break, a familiar "STOP!" command,
the whole program will stop and return to DOS.  (This isn't a bug, but you
might expect it to just stop Painting instead.  Use the Esc key for that.)

PAINT AND FILL TUNING: Determining exactly how long to Paint or Fill a shape
can be tricky in some rare situations.  If Paint or Draw keeps going after a
shape is well-defined, hit Esc.  If it's too brief, do it more than once.
In most cases, Adjusting the Fill setting will work just fine.

DRAWING ORDER: The order which the Draw command builds parts on top of one
another is predictable.  Parts will be drawn in the same order you see when
browsing through them with NextPart.  In some templates, having the shapes
in a different order creates quite a different picture.  Use Insert and Delete
to control the order your parts will be drawn.  I'm working on a slower but
more dramatic routine to "grow" the shape one level at a time (like a tree).

SMUDGES: The template leaves smudges all over everything.  These can be erased
with Restore, but they can still be annoying sometimes.  They can also be
helpful, because they make it easier to see the template.  Expect anti-smudge
templates in future updates.

PICTURE SIZE: Picture size is limited to the size of your screen.  You can
use another program (like PC Paintbrush) to piece screens together into
full-page artwork.  You can even Paint the top and bottom half of a template
onto seperate screens and put them together with a page layout program. I'd
like to incorporate oversized pictures directly into Fractal Grafics, but
this will involve a major re-write of the program, and may not happen soon.

MENU HILITING: If you're in a hurry, it's easy to goof and pick the wrong menu
item with the mouse (like Delete instead of Insert--Oops).  Enhanced visual
feedback will make this easier in the future.  Until then, be careful!

BACKGROUND COLOR VS. DON'T DRAW: If you assign the background color to a part
of the template, that part will not be drawn at all; EXCEPT for the seed,
which actually draws over the picture in the background color (erasing anything
underneath).  This discrepancy was put there on purpose so you can use the
seed as an "eraser", but you can also make a template partly "transparent".

CAPTION GROUPING: Consecutive caption characters form a group, which moves
together when you Insert or Delete within it.  Spaces typed with the spacebar
are considered caption characters: they are different than "blank" areas,
because they cover up the picture underneath them.

CAPTION CURSOR DISAPPEARS: Once in a while, the caption cursor just vanishes.
Don't worry, it's still there.  Press a key, and it comes back.  I'll fix this.

FILL NOT WITHIN LINES: When you Draw, the fill pattern does not always stay
within your outline (As in the F- examples).  I'll fix this, too.

EGA COLORS: EGA cards support only 64 possible colors, which means the Red,
Green, and Blue Adjustments should move in 4 steps.  I have purposefully
allowed VGA precision in EGA mode, so the color bars must be moved quite a bit
to actually change the colors on a real EGA.  I did this so that VGA users can
work in the faster lower resolution EGA mode without losing color capabilities.

WARNING: Fractal Grafics will not warn you if you Quit without having saved
your work.  This is a bug or a feature, depending on how annoyed you get with
being warned about things all the time.

MAXIMUM NUMBER OF POINTS AND PARTS: You can have up to 19 of each.  I've
occasionally run into templates where I'd like more, but it doesn't seem
worth the extra memory you'd need to support them.

AUTOPOINTS: A new feature is in the works which automatically changes the
shape of the seed so that it approximates the finished fractal as you change
the parts around.  This should be fun and useful.

SPEED: Let's be honest: fancy graphics of any sort take a LONG TIME on an
"XT" class computer.  You may need to use the menu instead of the mouse.
Future versions will be faster, but you'll still wish you had a '386!

MOUNTAINS, STRANGE ATTRACTORS, AND MORE: I'm now writing several specialized
programs which make certain well-known fractals that Fractal Grafics can't
do (such as dramatic 3-D mountainscapes, Newton's method fractals, strange
attractors in turbulent fluids, etc.).  These will be incorporated as special
drawing tools within Fractal Grafics itself in the future.

XII. REGISTRATION
-----------------


This is an unregistered "shareware" copy of Fractal Grafics.
You are encouraged to copy and distribute this program freely, but it is
NOT in the public domain.  If you continue to use the software in any way,
you must "register" (i.e. buy) it by sending $59 to the author at:

     Cedar Software, Morrisville, Vermont  05661-9605

When you register, you will receive the most recent version of the program,
a 120-page printed Manual and Guidebook, and over 150 fractal template
files used as examples in the Guidebook.  The Guidebook includes in-depth
sections on fractal art, science, philosophy, math, history, and
literature.  You will also receive product support, the next update free,
future updates at the cost of distribution, and other periodic bonuses
(such as additional templates, pictures, and specialized fractal programs).

The shareware arrangement allows free information exchange while enabling
authors to focus on development and support of quality software without
huge advertising budgets, and resulting high prices.  The success of
shareware, and the freedom and benefits it offers all of us, depend on the
honesty and integrity of users, distributors, and authors alike.  Thank you
for supporting the shareware concept.

An order form/invoice is provided on the disk for your convenience. To
print it, get to the disk and directory where the FG program is, and enter
this command:

COPY ORDER.TXT PRN

Phone orders are accepted at (802) 888-5275, although you may need to leave
a message on an answering machine.  Visa, MasterCard, and P.O.s are
welcome, or you may send a check or money order for $59.  We pay shipping in
North America (add $20 overseas, and 4% tax in Vermont).



Thanks for trying Fractal Grafics.  We hope to hear from you soon!

```
{% endraw %}

## ORDER.TXT

{% raw %}
```
     INVOICE/ORDER FORM FOR FRACTAL GRAFICS COMPUTER SOFTWARE

Remit to:                        From: ________________________________

Cedar Software                         ________________________________
Morrisville, Vermont
05661-9605                             ________________________________

(802) 888-5275                         ________________________________

Check one:  ___ 5.25" disks    ___ 3.5" disk

Qty   Item                                      Price Each       Total

___   Fractal Grafics Software (Single User)       $59           _____

___   Fractal Grafics Unlimited Site License      $139           _____

___   C Language Source Code                       $39           _____

___   Program Customization/Special Services    Please call      _____

            Vermont residents add 4% sales tax    ($3.20)        _____

                 Shipping within North America                    FREE

                   Overseas orders, please add     $20           _____

                                                   Total:        _____


If ordering by Visa or MasterCard, please fill in:

Card no.:  __ __ __ __   __ __ __ __   __ __ __ __   __ __ __ __

Exp. Date: ______________   Signature: _______________________________


Note that Fractal Grafics Software has been delivered and accepted.
Upon receipt of this paid invoice, you will receive the current version
of Fractal Grafics with over 170 examples on disk along with a printed
Manual, Guidebook, and Quick Reference booklet.  You will also receive
one program update free, and future updates at the cost of distribution.

```
{% endraw %}

## README.TXT

{% raw %}
```
***************************************************************************
SHAREWARE DOCUMENTATION for Fractal Grafics, Version 1.0, May, 1990
  Copyright, 1990 by Dick Oliver, Cedar Software, Morrisville, VT  05661-9605

This is an unregistered "shareware" copy of Fractal Grafics.

You are encouraged to copy and distribute this program freely, but it is NOT
in the public domain.  If you continue to use the software in any way, you must
"register" (i.e. buy) it by sending $59 to the author at the above address.
When you register, you will receive the most recent version of the program,
a 120-page printed Manual and Guidebook, and over 150 fractal template files
used as examples in the Guidebook.  The Guidebook includes in-depth sections
on fractal art, science, philosophy, math, history, and literature.  You will
also get product support and the next update free, as well as other bonuses.

The shareware arrangement allows free information exchange while enabling
authors to focus on development and support of quality software without huge
advertising budgets, and resulting high prices.  The success of shareware, and
the freedom and benefits it offers all of us, depend on the honesty and
integrity of users, distributors, and authors alike.  Thank you for
supporting the shareware concept.

****************************************************************************
PRINTING THE MANUAL

There is a complete manual on this disk.  To type it out on your printer,
enter the following at the DOS prompt:

COPY A:MANUAL.TXT PRN

(If you aren't using drive A, or don't have a printer connected to parallel
port #1, you may need to modify this command.  See your DOS manual.)

The manual is 12 printed pages long.

If you'd like to print the README file (this one you're reading), which
has a list of example files that you might want to refer to, enter this:

COPY A:README.TXT PRN

It is 3 printed pages long.

*****************************************************************************
TO INSTALL FRACTAL GRAFICS

If you haven't already done so, type A:INSTALL (if the Fractal Grafics disk
is in drive A) and press the Enter key for instructions on installing and
running the program.

*****************************************************************************
CONTENTS OF THE DISK(S)

If there is any problem reading files during installation, or you suspect your
Fractal Grafics disk has been damaged, check the contents against this list:

6 batch files:

    README  .BAT    Types last-minute documentation
    INSTALL .BAT    Types installation instructions
    CGA     .BAT    Prepares for CGA display
    EGA     .BAT    Prepares for EGA display
    VGA     .BAT    Prepares for VGA display
    HARDDISK.BAT    Installs to hard disk

6 text files:

    README  .TXT    This last-minute documentation, typed by README.BAT
    MANUAL  .TXT    The On-disk Manual
    ORDER   .TXT    Invoice/Order Form (to print:  COPY ORDER.TXT PRN)
    INSTALL .TXT    Instructions typed by INSTALL.BAT
    INSTALL2.TXT    Instructions typed by CGA, EGA, and VGA.BAT
    INSTALL3.TXT    Instructions typed by HARDDISK.BAT

2 executable files:

    FG      .EXE    The Fractal Grafics program
    JULIMAN .EXE    The Juliman program (draws Mandelbrot and Julia Sets)

2 picture files:

    CGASTART.PCX    | One is renamed STARTUP.PCX during installation
    EGASTART.PCX    |

56 fractal template files:

    HELP*   .FRT    20 on-line help files named HELP1 through HELP20
    STARTUP .FRT    Fractal template loaded when FG starts up
    CGASAMPL.FRT    |
    EGASAMPL.FRT    | 3 templates used to create pictures listed above
    VGASAMPL.FRT    |  (NOTE: Any template may be used in any video mode)
    YES!    .FRT    The word YES! made up of copies of itself
    CHAOS   .FRT    The word CHAOS made up of copies of itself
    DRAGON  .FRT    Fire-breathing dragon
    OAK     .FRT    Spiraling oak tree
    FLOWER1 .FRT    2 Dr. Suess style flowers
    FLOWER2 .FRT    |
    SPAZOOM .FRT    3 fanciful abstractions
    SEAHORSE.FRT    |
    CIRCLE7 .FRT    |
    F-RACTAL.FRT    The letter F from "Fractal Grafics"

    The following templates are from the Guidebook.  These (and over 100 more!)
    are explained, along with the techniques and theories behind them.
    (You'll get the Guidebook and the rest of the examples when you register.)

    MICKEY1 .FRT    Load and Paint these 2 in order to see an old friend
    MICKEY2 .FRT    (from the Guide to Fractal ART)
    ARCHY   .FRT    |
    GOUL    .FRT    | 3 more creations from the ART guide
    FIRAL   .FRT    |
    LEAF1   .FRT    2 ways to draw...
    LEAF2   .FRT    ...the same maple leaf (from SCIENCE)
    QUAKE   .FRT    A simplified fractal earthquake graph (SCIENCE)
    MOUNTAIN.FRT    Horizon line of a mountain and lake (SCIENCE)
    BODY    .FRT    A fractal portrait of a human being (PHILOSOPHY)
    LINEAR3 .FRT    A predictable linear curve (PHILOSOPHY)
    NON-LIN1.FRT    A "chaotic" non-linear curve (PHILOSOPHY)
    CATS    .FRT    Fractal self-replicating momma cat with kittens (MATH)
    SPIN    .FRT    |
    SKEW-L  .FRT    | 3 of the 6 basic affine transformations (MATH)
    SKEW-R  .FRT    |
    KOCH    .FRT    The famous "Koch coastline" (HISTORY)
    ISLANDS .FRT    Benoit Mandelbrot's fractal islands (HISTORY)
    MONKEY  .FRT    Mandelbrot's "Monkey's Claw Maze" (HISTORY)
    RANDY   .FRT    A seemingly random "stock market" forgery (HISTORY)
    HEIGHWAY.FRT    The legendary "Heighway Dragon Curve" (LITERATURE)
    BARNSLEY.FRT    M. Barnsley's IFS-coded black spleenwort fern (LITERATURE)

(72 files total)

(end of README.TXT file)

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2217

     Volume in drive A has no label
     Directory of A:\

    README   BAT       166   4-29-90   2:15p
    INSTALL  BAT       225   3-14-90   3:25a
    CGA      BAT       301   3-14-90   3:59a
    EGA      BAT       303   3-14-90   3:59a
    VGA      BAT       357   4-29-90   5:22a
    HARDDISK BAT      1134   5-26-90   3:22p
    MANUAL   TXT     23527   7-20-90   7:26p
    ORDER    TXT      1663   7-20-90   7:22p
    INSTALL  TXT       883   5-26-90   1:56p
    INSTALL2 TXT       926   5-26-90  12:02p
    INSTALL3 TXT       782   3-10-90   7:24a
    README   TXT      5790   7-20-90   7:23p
    FG       EXE    100357   5-26-90   6:57a
    JULIMAN  EXE     52393   5-01-90   6:07a
    CGASTART PCX      6187   3-03-90   9:06a
    EGASTART PCX     42336   3-03-90  11:35a
    HELP1    FRT      2929   4-29-90   1:50a
    HELP2    FRT      2569   3-01-90   3:55p
    HELP3    FRT      2533   3-01-90   3:56p
    HELP4    FRT      2293   3-12-90  10:48a
    HELP5    FRT      1983   3-01-90   3:56p
    HELP6    FRT      2543   3-01-90   3:56p
    HELP7    FRT      2041   3-01-90   3:57p
    HELP8    FRT      2721   3-01-90   3:57p
    HELP9    FRT      2501   3-01-90   3:57p
    HELP10   FRT      2605   4-25-90   4:23a
    HELP11   FRT      2273   3-01-90   3:57p
    HELP12   FRT      2389   3-01-90   3:58p
    HELP13   FRT      2415   3-01-90   3:58p
    HELP14   FRT      2361   3-01-90   3:58p
    HELP15   FRT      2363   3-01-90   3:59p
    HELP16   FRT      3335   3-03-90   2:28p
    HELP17   FRT      3325   4-25-90   6:03a
    HELP18   FRT      2775   4-29-90   1:42a
    HELP19   FRT      2917   4-25-90   6:07a
    HELP20   FRT      3983   4-29-90   1:55a
    STARTUP  FRT       827   3-03-90  11:37a
    CGASAMPL FRT       875   3-23-90  11:09a
    EGASAMPL FRT       907   3-12-90  11:20a
    VGASAMPL FRT       931   3-12-90  11:05a
    YES!     FRT      1123   4-28-90  10:14a
    CHAOS    FRT      1243   4-28-90  10:31a
    DRAGON   FRT      1299   4-28-90  10:02a
    OAK      FRT       923   4-28-90  10:15a
    FLOWER1  FRT       867   4-28-90  10:15a
    FLOWER2  FRT       891   4-28-90  10:16a
    HOUSES   FRT       859   4-28-90  10:10a
    SPAZOOM  FRT       851   4-28-90  10:26a
    SEAHORSE FRT       819   4-28-90  10:29a
    CIRCLE7  FRT       931   5-26-90  11:53a
    F-RACTAL FRT       899   4-28-90   1:27p
    MICKEY1  FRT      1179   4-11-90   4:15a
    MICKEY2  FRT      1315   4-11-90   4:16a
    ARCHY    FRT       851   3-11-90  10:38a
    GOUL     FRT      1051   4-11-90   3:27a
    FIRAL    FRT       819   4-11-90   3:51a
    LEAF1    FRT       875   4-11-90   6:58a
    LEAF2    FRT       907   4-11-90   6:59a
    QUAKE    FRT      1459   3-11-90  12:10p
    MOUNTAIN FRT       923   3-11-90  12:09p
    BODY     FRT       995   3-23-90   9:52a
    LINEAR3  FRT      1313   3-23-90   5:25a
    NON-LIN1 FRT      1421   4-12-90   3:06a
    CATS     FRT       955   4-12-90   3:12a
    SPIN     FRT       831   4-12-90   3:24a
    SKEW-L   FRT       885   4-12-90   3:25a
    SKEW-R   FRT       859   4-12-90   3:25a
    KOCH     FRT       859   4-29-90   6:04a
    ISLANDS  FRT      1051   4-12-90  10:30a
    MONKEY   FRT      1027   4-12-90  10:25a
    RANDY    FRT       963   4-12-90  10:21a
    HEIGHWAY FRT       811   4-29-90   6:05a
    BARNSLEY FRT       875   4-12-90  10:36a
    FILE2217 TXT      1777   8-28-90   4:17p
    GO       BAT       705   1-01-80   7:12a
           75 file(s)     329135 bytes
                            1024 bytes free
