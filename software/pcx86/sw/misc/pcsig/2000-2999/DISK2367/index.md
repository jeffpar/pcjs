---
layout: page
title: "PC-SIG Diskette Library (Disk #2367)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2367/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2367"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "RECURSIVE REALM"

    Experience the fascinating beauty of fractals.  Use RECURSIVE REALM to
    build and explore Mandelbrot sets, Julia sets (5 equations), Newton's
    method (13 equations), and models of magnetism from a detailed menu
    system.
    
    RECURSIVE REALM uses expanded memory where available.  Files are saved
    in .PCX format for use with many commercial and shareware packages. It
    features zooming, escape sequence tracking, easy coloring, slide show
    animation and more.  Save designs at any stage of development and
    resume building at a later time.  The program contains some sample
    pictures to get you started and help is available anytime.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## RREALM.DOC

{% raw %}
```
            RECURSIVE REALM - FRACTAL GENERATION SYSTEM
                          Version 2.0

             Copyright 1989, 1990 - All Rights Reserved
                       By Scott A. Jones
              _______
         ____|__     |               (R)
      --|       |    |-------------------
        |   ____|__  |  Association of
        |  |       |_|  Shareware
        |__|   o   |    Professionals
      -----|   |   |---------------------
           |___|___|    MEMBER

                      TABLE OF CONTENTS


   INSTALLATION AND REQUIREMENTS    ........................ 1

   PROGRAM FEATURES                 ........................ 2

   REGISTRATION                     ........................ 3

   SHAREWARE INFO                   ........................ 4

   ABOUT THE PCX FORMAT             ........................ 5

   PROGRAM HISTORY (WHAT'S NEW)     ........................ 6

   PICTURE COMPATIBILITY/CONVERSION ........................ 7
       VERSION 1.0                  ........................ 7
       VERSION 1.5                  ........................ 8
       FILE CHART                   ........................ 8

   FUNCTIONAL CHANGES IN V.2.0      ........................ 9

   STARTING RECURSIVE REALM         ........................ 10

   A QUICK LOOK (NEW USER TOUR)     ........................ 11

   OVERVIEW                         ........................ 13

   TERMINOLOGY                      ........................ 14

   USING THE INTEGRATED ENVIRONMENT ........................ 15

   THE ESCAPE-TIME ALGORITHM        ........................ 17

   MANDELBROT SET PICTURES          ........................ 18
       WARPED MANDELBROTS           ........................ 19

   JULIA SET PICTURES               ........................ 20

   NEWTON'S METHOD PICTURES         ........................ 21

   MODELS FOR MAGNETISM PICTURES    ........................ 22



   ENTERING DATA                    ........................ 23

   COLORING                         ........................ 25
       A TYPICAL COLORING SESSION   ........................ 26

   PICTURE BUILDING TIPS            ........................ 27
       ALL PICTURES                 ........................ 27
       MANDELBROT SET PICTURES      ........................ 27
       JULIA SET PICTURES           ........................ 28
       NEWTON'S METHOD PICTURES     ........................ 28
       MODELS OF MAGNETISM PICTURES ........................ 28

   APPENDIX A: HOT KEYS             ........................ 29
       MAIN MENU                    ........................ 29
       DATA-ENTRY MENU              ........................ 29
       WHILE BUILDING OR VIEWING    ........................ 30
       ZOOM MODE                    ........................ 30
       WHILE ANIMATING              ........................ 31

   APPENDIX B: MISC. INFORMATION    ........................ 32
       FILE NAMES                   ........................ 32
       SOURCES OF INFORMATION       ........................ 32
       PROGRAM SPEED                ........................ 32
       DIFFERENT RESOLUTIONS        ........................ 33
       UNATTENDED DEVELOPMENT       ........................ 33

   REFERENCES                       ........................ 34

   BIBLIOGRAPHY                     ........................ 35

   ACKNOWLEDGEMENTS                 ........................ 36

   REGISTRATION FORM                ........................ 37

                                                           Page 1
INSTALLATION AND REQUIREMENTS:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

     Program file:   1.  rr.exe

    Picture files:    any with the following extensions -

                     1.  ".rrm" or ".rrj", or ".rrn", or ".rrp"
                     2.  ".dat"

  Additional files:  1.  rrwelc.ome  (welcome screen)
                     2.  rrealm.doc  (user's guide)
                     3.  rrpics.cat  (picture catalog)

     To install Recursive Realm, copy the two files "rr.exe"
and "rrwelc.ome" into any desired directory. Copy any other
files (picture files) into the same directory or into the
directory in which you will want to build pictures.
   If you will run "rr" from outside of this directory, you will
need to set a DOS path to it. For example, if you are using
Recursive Realm on the C drive in a subdirectory called \rrealm,
place the line "set path=c:\rrealm" (without the quotes) in your
autoexec.bat file. If you're using a hard drive, it is a good
idea to make a separate directory for pictures since you may
want to build several.
     Recursive Realm can be used with any 100% IBM compatible
computer with EGA or VGA color graphics, at least 256k of
available RAM and DOS v2.0 or higher. In addition, a math
coprocessor will save you hours of picture building time but is
not absolutely necessary.
     Recursive Realm requires the system file ANSI.SYS. This
means that you must place the line "device=ansi.sys" (without
the quotes) into your config.sys file or create a new config.sys
file with this line if you don't already have one. In order
for ANSI.SYS to be loaded upon booting your computer, you must
place the file in an accessible location on the boot drive.
See the DOS manual for more information on ANSI.SYS.

                                                           Page 2
PROGRAM FEATURES:
~~~~~~~~~~~~~~~~~

   * Mandelbrot set exploration.
        - Includes "warped" Mandelbrots.
   * Julia set exploration.
        - Five functions, including sin, cos, and exponential.
        - Ability to select Julia set of Mandelbrot function
          by "pointing" to an area while viewing a Mandelbrot
          picture.

   * Newton's Method exploration.
        - Thirteen functions.
   * Models of Magnetism exploration.
   * Easy-to-use front-end menu system.
   * Unattended multiple-picture development.
   * Help screens available at every step.
   * Save pictures at any point and continue building at a later time.
   * On-screen "zooming".
   * Pictures saved in PCX format.
   * Escape sequence tracking.
   * Color while building or after completion.
   * Uses expanded memory when available.
   * Uses virtual screens for fast, efficient display.
   * Takes advantage of symmetry where applicable.
   * Slide-show animation.
   * Simple mode selection (EGA or VGA).
   * Includes catalog file of over 150 picture parameters.
   * Supported by author.

                                                           Page 3
REGISTRATION:
~~~~~~~~~~~~~

     Recursive Realm is a shareware product. It may be freely
copied and shared with others as long as no charge is made for
the program, and it is unmodified and distributed with all of
it's support files intact.

You are granted a license to try Recursive Realm for a period of
30 days. If you continue to use it after the trial period, you
must register by sending the $20.00 registration fee to:

     Before 1/1/91:                      After 1/1/91:

     Scott Jones                         Scott Jones
     P.O. Box 3282                       Rt. 3 22514 W. Gibson
     South Pasadena, Ca. 91031           Buckeye, Az. 85326

California residents please add 6.5% sales tax.

Call (818) 441-5436 (Weekends and Evenings) if you have any ques-
tions. Your registration fee entitles you to use this software
on a single computer and to make as many copies as you wish for
backup purposes or for distribution as described above.
When you register, you will receive a registration number and instruc-
tions on how to store it into your copy. Your name will then be disp-
layed on the welcome screen, and the Shareware screen displayed upon
exiting the program will be suppressed. You will also receive the
latest version of the program plus a BONUS 360k disk containing some
of my favorite pictures. Future versions will be made available to
registered users for no more than a small postage fee.

   Please send information on your computer system with your regist-
ration. A registration form is provided at the end of this guide.

                                                           Page 4
SHAREWARE INFO:
~~~~~~~~~~~~~~~

     Shareware distribution gives users a chance to try software
before buying it. If you try a Shareware program and continue using
it, you are expected to register. Individual programs differ on
details -- some request registration while others require it, some
specify a maximum trial period. With registration, you get anything
from the simple right to continue using the software to an updated
program with a printed manual.

Copyright laws apply to both Shareware and commercial software, and
the copyright holder retains all rights, with a few specific excep-
tions as stated below. Shareware authors are accomplished programmers,
just like commercial authors, and the programs are of comparable
quality. (In both cases, there are good programs and bad ones!) The
main difference is in the method of distribution. The author specif-
ically grants the right to copy and distribute the software, either
to all and sundry or to a specific group. For example, some authors
require written permission before a commercial disk vendor may copy
their Shareware.

So, Shareware is a distribution method, not a type of software. You
should find software that suits your needs and pocketbook, whether
it's commercial or Shareware. The Shareware system makes fitting your
needs easier, because you can try before you buy. And because the
overhead is low, prices are low also. Shareware has the ultimate
money-back guarantee -- if you don't use the product, you don't pay
for it.

     This program is produced by a member of the Association of
Shareware Professionals (ASP). ASP wants to make sure that the
shareware principle works for you. If you are unable to resolve
a shareware-related problem with an ASP member by contacting the
member directly, ASP may be able to help. The ASP Ombudsman can
help you resolve a dispute or problem with an ASP member but does
not provide technical support for members' products. Please write
to the ASP Ombudsman at Post Office Box 5786, Bellevue, WA 98006
or send a message via Compuserve Mail to ASP Ombudsman 70007,3536.

   If you are unable to reach the author at the address or phone
number listed in this guide, then send a SASE to the ASP at the
above address and the correct information will be forwarded to you.

                                                           Page 5
ABOUT THE PCX FORMAT:
~~~~~~~~~~~~~~~~~~~~~

     The popular PCX format was developed by the ZSoft corporation
for use with their PC Paintbrush program. There are several
good commercial as well as Shareware programs available for
doing just about anything to PCX files that you could possibly want
to do. In addition to the commercial appeal, the files are, on the
average, about 50% smaller than those in Recursive Realm version
1.0. If you have a PCX graphics program such as PC Paintbrush or
Word Perfect, then you can generate very nice printouts.

                                                           Page 6
PROGRAM HISTORY: (What's new in 2.0)
~~~~~~~~~~~~~~~~

    Version 1.0 - Released in October, 1989. Native file-saving
    ~~~~~~~~~~~   format. Pictures are not compatible with later
                  versions. If you have this version and do not
                  have the picture conversion file "old2new.exe",
                  that came with version 1.5, please let me know
                  and I'll send it to you.

    Version 1.5 - Released in February, 1990. PCX format. Added
    ~~~~~~~~~~~   F7 key.

    Version 2.0 - Released July, 1990. Expanded memory. Virtual
    ~~~~~~~~~~~   screens. Escape sequence tracking, Expanded
                  help system. Added two Julia set functions.
                  Added four Newton's method functions. Direct
                  graphics mode selection from data-entry menu.
                  Key changes (F1 to F2). Speed improvements.
                  Julia set zooming. Warped Mandelbrots.

                                                           Page 7
PICTURE COMPATIBILITY AND CONVERSION:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

     If you do not have version 1.0 or version 1.5, then skip this
section.

   VERSION 1.0:
   ~~~~~~~~~~~~

   Version 1.0 pictures are NOT compatible with later versions.

      Converting v.1.0 picture files to v.1.5+ (PCX) format -

            1.) Back up your files!!! In order to avoid "disk full"
                errors, the old picture files will be deleted
                before saving to the new format.

            2.) Copy "old2new.exe" onto a disk and/or directory
                where you can access it.

            3.) Type "old2new [path]picname.pi?" without the
                quotes, where picname is the name of your picture,
                the path (optional) is the DOS path to the picture,
                and pi? is the extension of your picture. The
                possible extensions for v.1.0 are ".pic", ".pij",
                ".pin", and ".pim".

                Conversion Example:
                ~~~~~~~~~~~~~~~~~~~

                    The following command -

                       old2new c:\rrealm\pics\nicejul.pij

                    would convert a version 1.0 picture called
                    "nicejul.pij" located in the C drive in a
                    directory called \rrealm\pics\

                                                           Page 8
   VERSION 1.5:
   ~~~~~~~~~~~~

   **IMPORTANT**

   If you have any incomplete version 1.5 pictures, complete them
before using them with version 2.0! Coloring and symmetry is
handled a little differently in v.2.0 so the picture may not con-
tinue developing correctly. The Flat Range, and Band Widths are
now entered as actual values rather than percentages! This will
be automatically adjusted for in your completed pictures, but you
will need to keep this in mind for building future pictures. You
will find that you have much more color control this way.

   COMPLETED version 1.5 pictures ARE compatible with version 2.0,
but you will find that there is an extra scan line at the bottom of
pictures created with version 1.5. To eliminate this, follow these
steps:
        1.) Back up the picture (optional, but I'm a worry-wart).
        2.) View the picture.
        3.) While viewing, press <CTRL-F> "Fix".
        4.) The picture should be resaved without the extra scan
            line. If not, repeat steps 1-3.

    Because of symmetry and color changes, do not use earlier
    versions to view version 2.0 pictures!

   FILE CHART:
   ~~~~~~~~~~~
                            VERSION 1.0        VERSIONS 1.5 & 2.0
-------------------------|-----------------|-----------------------
Mandelbrot picture files |   .pic          |     .rrm
Mandelbrot data files    |   .dat          |     .dat
Mandelbrot color files   |   .clr          |     non-existent
                         |                 |
Julia picture files      |   .pij          |     .rrj
Julia data files         |   .dat          |     .dat
Julia color files        |   .clr          |     non-existent
                         |                 |
Newton picture files     |   .pin          |     .rrn
Newton data files        |   .dat          |     .dat
Newton color files       |   .clr          |     non-existent
                         |                 |
Magnetism picture files  |   .pim          |     .rrp
Magnetism data files     |   .dat          |     .dat
Magnetism color files    |   .clr          |     non-existent
                         |                 |
   (The last letter of the picture file extension corresponds to
    the first letter of the main menu choice)

    The files "animate.exe" and "rrealm.exe" are no longer used
    in version 2.0. If you have them from earlier versions, you
    can remove them from your disk.

                                                           Page 9

FUNCTIONAL CHANGES IN VERSION 2.0:   ***IMPORTANT***
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   * Flat Range and Band Widths are entered as actual values
     rather than percentages. This allows much greater color
     control.

   * The F2 key has replaced the functions of the F1 key. F1
     is now ALWAYS used for help.

   * Graph Width will automatically be scaled to the nearest
     size evenly divisible by 80. (For example, if you enter
     130, it will be scaled up to 160.)

   * VGA or EGA mode can be chosen directly from data-entry menu.

   * Zoom mode is now available with Julia sets.

   * Escape sequence tracking (CTRL-T) is now available.

   * Newton's method pictures of the function x^3 - 1 are now
     correct. (The old versions had a bug which made these
     pictures look "fuzzy").

                                                           Page 10
STARTING RECURSIVE REALM:
~~~~~~~~~~~~~~~~~~~~~~~~~

     From the directory in which you installed Recursive Realm,
just type "rr" (without the quotes) and press enter. Another
option is to type "rr directory" where "directory" is the name
of the your picture directory. For example,

           rr c:\rrealm\pics

would start Recursive Realm in a directory on the C drive called
\rrealm\pics.
   New users should take the tour in the next section.

                                                           Page 11
A QUICK LOOK:
~~~~~~~~~~~~~

     THE <F1> KEY CAN BE PRESSED AT ANY STEP OF THE PROGRAM TO GET
     A LIST OF KEYS AVAILABLE AT THAT POINT!

     THE ESC KEY BACKS YOU OUT OF ANY STEP.

     I recommend very strongly that you read the rest of this
manual but if you're like me and you want to play first, start
the program by typing "rr" (without the quotes) in the directory
in which you installed Recursive Realm. Take note of the disk
space in the upper left corner of the menu - These pictures range
in size from about 10k - 170k depending on your graphics and the
amount of detail in the picture. An average picture is about 50k.
If you think that you need to change drives  - press <F10> to
change the drive and/or directory. For dual-floppy systems, place
the files "rr.exe" and "rrwelc.ome" on one disk and build pictures
on the other. When you're ready, use your arrow keys to move to the
type of picture that you want to produce and press <RET>. Any existing
pictures of that type will be listed on the screen. Use your
arrow keys to highlight the desired picture and <RET> to view it.
If you have no pictures or would like to build a new one, then
move to the desired picture type and press <CTRL-N>. A data-entry
screen will then be brought onto the screen. You may press <F2>
to accept the defaults or enter the data from one of the pictures
in the enclosed catalog file "rrpics.cat". See Appendix A for a
list of "hot key" functions. If this is your first time with
Recursive Realm, I would suggest the following tour:

   1.) Select "Mandelbrot Set" from the main menu.

   2.) If some picture names appear on the canvas, press <CTRL-A>
       to animate them slide-show style then go to step 4.

   3.) If no picture names appear on the canvas, press <CTRL-N> to
       get to the data-entry menu, then press <F2> to build
       the full Mandelbrot set (it will be called "mbrot" by
       default - you may change this from the data-entry
       screen).

   4.) After returning to the main menu, choose "Mandelbrot
       Set" again and look for a picture with "full" somewhere
       in the name (or "mbrot" if you performed step 3). The
       picture will probably be called "EGAFULL" and is a
       picture of the full set.

   5.) Use your arrow keys to highlight this picture and press enter.

                                                           Page 12

   6.) While viewing, press <F10> a few times to watch the colors
       change. Press <CTRL-T> "Track" to track the escape sequence
       and move the small cursor around the screen. Notice how the
       dots escape as you cross the border of the set. The best
       tracking areas are located just inside the lower or upper
       border of the full Mandelbrot set.

   7.) Press escape to stop tracking then press <CTRL-N> to bring up
       the viewport (zoom mode). Use your arrow keys to move the
       viewport and your PGUP and PGDN keys to expand or contract
       it. On the left side of the picture you will notice a long
       stem with a tiny duplicate of the full set lying within it.
       Move the viewport over to this "midget" set and expand it
       to surround the midget. Press <F2> to enter the data-entry
       menu.

   8.) While in the data-entry menu, set the FLAT RANGE LIMIT to
       0, the HIGH BAND WIDTH to 1, and the FLAT BAND WIDTH to 0.
       Set the Max iterations to 300 and the File Name to whatever
       you want. Press <F2> and watch it build the picture.

   9.) You can let it finish or press <ESC> to return to the main
       menu and play some more. The picture will be saved before
       returning. To continue building it, just select it again.
       The color keys (F7 - F10), and the rest of the fun keys
       are all available while building as well as viewing. Enjoy..

   Be aware that some of these pictures take a lot of time to build.
If you want to see a "quickie" version of the picture that you are
about to build you can set the graph width to about 80 and go from
there.

                                                           Page 13
OVERVIEW:
~~~~~~~~~

     Are you ready to take a "Recursion Excursion"? Recursive
Realm Fractal Generation System is both an educational and fun
tool for visualizing some of the amazing mathematical functions
(equations) being extensively explored by scientists on the
cutting edge of Chaos today. Sound complicated? It really isn't.
Believe it or not, most of the functions explored here are very
fundamental and don't require a strong background in math to
understand. Recursive Realm allows you to build and color the
following functions:

    * The  Mandelbrot set in its entirety or microscopic portions
      of the beautiful border areas of the set.

    * The Julia sets of 5 different functions including the
      Mandelbrot function.

    * Newton's Method for finding the roots of 13 different
      functions.

    * Models of Magnetism as defined by ref. (1) (see bibliography).

     All pictures are centered around the true center of your
screen and you may define the amount of the screen to use for the
picture. Pictures can be saved at any stage of completeness and
restarted from where previously stopped. To avoid losing your
work due to power failure, pictures are automatically saved every
25 lines. Pictures can be randomly colored at any time during or
after the building process <F10> and the palette information can be
saved with a single keystroke <F2>.
   In addition to all of the above, Recursive Realm is run from
a safe and easy to use integrated environment which allows for
easy file selection, renaming, and deletion from anywhere on your
drive(s). Help screens are available from anywhere by pressing <F1>.

                                                           Page 14
TERMINOLOGY:
~~~~~~~~~~~~

    These are my own definitions of some of the terms in this
    user's guide:

        * Function - An equation, such as x*x - 1 = 0.

        * Complex Number - A number that contains a real and
          imaginary part. For example 2 + 3i. ( "i" is defined
          as the square root of -1).

        * Recursion - The process of taking a starting number,
          plugging its value into an equation then repeatedly
          taking the answer and plugging it back into the
          equation.

        * Iteration - A single step of recursion. For example, if
          you plugged the answer (as described above) back into
          the equation 100 times, you have just performed 100
          iterations.

        * Iterative Process - The process of performing iter-
          ations until some defined limit is reached.

        * Dwell - The number of iterations required for a specific
          point to escape the set (ie. if a certain point takes
          30 iterations to reach the defined limit, it's dwell
          is 30).

        * Fractal - A mathematically defined object or system
          with a fractional dimension.

        * Root - A value that, when plugged into an equation,
          makes the equation true. For example, the roots of the
          equation x*x - 1 = 0 are 1 and -1;

        * Midget - Any of a myriad of tiny duplicates of the
          Mandelbrot set found buried within the border areas
          of the full set.

        * Main Cardiod - The large, heart-shaped main body of the
          Mandelbrot set.

        * Main Bud - The large circular region attached to the left
          of the main cardiod of the Mandelbrot set.

        * Seahorse Valley - The region within the upper or lower
          crack between the main cardiod and main bud of the Mandel-
          brot set.

                                                           Page 15
USING THE INTEGRATED ENVIRONMENT: (Main Menu)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

     To begin using Recursive Realm, just type "rr" without the
quotes. The four different picture types are represented at the
top of the screen. To change to a different drive or directory
just press <F10> and type in the new name (<F5> will entirely erase
the old directory name). Pressing <RET> on any menu choice will
fill the canvas with a list of pictures currently existing in the
selected directory. Use your arrow keys to navigate through the
pictures and select the desired one. If the picture is incom-
plete, building will resume immediately at the beginning of the
first incomplete line, otherwise the entire picture will be
brought onto the screen for viewing. At any time while viewing
or building a picture, you may press <ESC> to return to the main
menu. If the picture is incomplete, it will be saved. To color
pictures, use <F10> to select a random palette, <F9> to "white
out" all parts of the picture that are not actually in the set,
<F2> to save the current palette with the picture, <F8> to return
to the last saved palette, and <F7> to return to the last random
palette.
   To start a picture from scratch, one option is to move to the
desired main menu choice and press <CTRL-N>. A data-entry menu
will be brought up with a generic set of defaults which you may
keep or change. Another option is to choose the main menu sel-
ection, then move to the name of an already completed picture and
press <CTRL-N>. The data-entry menu will be brought up with the
defaults matching the data of the selected picture (except for
the file name). The last, but definitely not least, option for
building a new picture is to press <CTRL_N> while building or
viewing another picture. This will bring a "viewport" onto the
screen (look closely, you'll see it). You can expand or contract
the viewport with the <PgUp>, <PgDn>, <Shift-PgUp>, or <Shift-PgDn>
keys and move the viewport around the screen with the arrow keys.
When you have boxed in the portion of the current picture that
you would like to magnify, just press <F2> (or <ESC> to abort and
return to what you were doing) and you will get the data-entry
menu with the viewport parameters already filled in. Since Julia
sets of the Mandelbrot function are derived from a single point
within the Mandelbrot set, you may go into the viewport mode while
building or viewing a Mandelbrot picture and press <CTRL_J> (in-
stead of <F2>) to build a Julia set from this picture. This will
not change the picture bounds of the new Julia set but the center
point of the viewport will define the new center point from which
to derive the Julia set.

                                                           Page 16

   When you feel comfortable with the data, just press <F2> to
begin building the picture in the detected graphics mode,
<CTRL-E> to force an EGA picture, or <CTRL-V> to force a VGA
picture (don't use this if you do not have a VGA card).
If a picture of the same name exists, you will be asked to confirm.
"But what data should I enter?", you ask. There are many excellent
sources for data, some of which are listed in the bibliography of
this guide. In addition to these, I have included a catalog file
named "rrpics.cat" which contains the parameters for several of
the pictures that I have explored. There should be enough there
to keep you busy for months. A word of warning! - These pictures
are addicting and can take from a couple of minutes to several days
of building time. You may turn off your monitor and go to bed while
building them but be prepared, when you wake up the next morning and
turn your monitor back on, you may be breathless for awhile.
   Another feature of the integrated environment is "Animate". To
use this feature, move to the desired picture type and press
<CTRL-A>. All of the pictures of that type which exist in the
current directory will be brought upon the screen one at a time
and randomly colored. This feature is for viewing only (ie. no
building pictures or saving colors here).
   Before you build a picture you should take note of the disk
space listed in the upper left corner of the main menu. A very
detailed picture may need up to 170,000 bytes. Experimentation
will help you decide how much space you need.

                                                           Page 17
THE ESCAPE-TIME ALGORITHM:
~~~~~~~~~~~~~~~~~~~~~~~~~

     Recursive Realm uses an algorithm known as the "Escape-Time
Algorithm". The algorithm is very simple to understand and can be
explained with the following example:

   Given the following three items:

          1.) A function. Let's use x^2 + 5.
          2.) A starting point. Let's use -1.
          3.) A value limit. Let's use 500.

   Perform the following steps:
          1.) Plug in -1 for x. We get 6.
          2.) Plug in 6 for x. We get 41.
          3.) Plug in 41 for x. We get 1,686.
          4.) Our value limit was surpassed on the third iteration
              so we assign this starting point (-1) the third color
              from a list of colors. Choose another starting point
              then go back to step a.

Recursive Realm assigns a starting point to every pixel on the screen
depending on the picture type, function, and picture limits that you
set, then performs the above steps and assigns a color to that pixel.

                                                           Page 18
THE  MANDELBROT SET:
~~~~~~~~~~~~~~~~~~~

     Benoit B. Mandelbrot, considered to be the father of the
"fractal"(1), first described this set in 1980. The set is formally
described to be "the set of all values of 'c' in the equation
x*x + c that have connected Julia sets" (2). (See next section
for a description of  Julia sets). The  Mandelbrot set is gener-
ated by performing the escape-time algorithm on the function
x*x + c where x is a complex variable and c is a complex constant.
To show the function on the computer screen, we set the screen up
as follows:

                  |------------------------|
     (Imaginary   |                        |
         part)    |     Computer           |
                  |      Screen            |
    Y - Axis      |                        |
                  |                        |
                  |                        |
                  |------------------------|
                    X - Axis  (Real part)

   You supply the real bounds (left and right limits), the
imaginary bounds (top and bottom limits) and the real graph width
(ie. 640 pixels for a full screen picture). The screen is auto-
matically scaled so that each pixel represents one point within
the area bounded by your limits. For example, if you specified
-1.5 to 1.4 as your left and right (real) bounds and -1.2 to
1.2 as your bottom and top (imaginary) bounds, the pixel in the
upper left corner would represent the complex number -1.5 + 1.2i,
and the pixel in the lower right corner would represent the com-
plex number 1.4 - 1.2i.
   The picture is generated by taking pixels one at a time from
top left to lower right, plugging their representative "c" value
into the Mandelbrot equation, then iterating (repeatedly putting
the answer back in for x) until the answer in either its real or
imaginary part becomes larger than a given number (2.0 works well)
or until a maximum number of iterations is reached. The Mandelbrot
set is composed of all of the starting values that never escape
this iteration sequence (ie. never get larger than 2.0). When the
end of the iteration process is reached, the pixel is colored accord-
ing to the number of iterations that it took to escape, or if it
reached the maximum (ie. it is in the set) it is not colored at
all. Since border areas take longer to escape than areas away
from the set, these are the most interesting and make the most
awesome pictures when magnified a few hundred (or a few billion
times).

                                                           Page 19
   WARPED MANDELBROTS -
   ~~~~~~~~~~~~~~~~~~
      When building the real Mandelbrot set, the value of x in the
   equation x^2 + c is set to 0 before starting the escape-time
   algorithm. Recursive Realm allows you to change this and create
   some "Mandelbrot Monsters" that I call warped sets. In order to
   build these sets, while in the data-entry menu change the
   "Real Start Point" and/or the "Imag Start Point" to anything
   except 0.0. Blowups of the border areas of these sets can be
   just as weird as the sets themselves.

   You will notice that an exact duplicate (midget) of the entire
Mandelbrot set is often found in the blow-ups of the border
areas.
   The colorization of the set can be visualized as a
topographical map with the flat lands colored by the light and
dark versions of one color, the high lands colored in strips with
the next thirteen colors, and the highest land colored in the
background color (black). This highest land is the actual set
itself and can be thought of as the volcano in the center of the
mountain. (Also see COLORING).

   Remember, at any time during the building or viewing of the
picture, you may press <F10> and change the palette entirely then
press <F2> if you want to save the new palette. You may also press
<CTRL_N> to zoom in on a portion of the set and build a new
picture from it.

                                                           Page 20
THE  JULIA SET:
~~~~~~~~~~~~~~

     The  Julia set is named for French mathematician Gaston
Julia who first studied it in the early 1900's.(3) It is des-
cribed as the set of all points of a function and starting
point that are generated by the iterative process. There are
two types of Julia sets:

     1.) Values generated eventually grow towards infinity.

     2.) Values generated stay within a well-defined area.

The type 2 Julia set is often referred to as the "connected" or
"closed" Julia set(4). As described in the previous section, the
Mandelbrot set is the set of all starting values of 'c' in the
complex function x*x + c that lead to connected Julia sets(5).
In addition to the Julia sets of the Mandelbrot function, Recur-
sive Realm allows you to produce beautiful pictures of the fun-
ctions c*sin(x), c*cos(x), (e^x)/e, and c*e^x where both x and c
are complex variables. The constant e is a common mathematical
constant (2.71828....) used as the base of the natural logarighm
(ie. ln e = 1). Pictures of the sin and cos functions are
some of the most beautiful and fastest to create.
   Pictures of the Julia set are generated in a fashion similar
to those of the Mandelbrot set. The difference is that each
pixel in the Julia set represents a different starting point
for 'x' rather than for 'c' as in the Mandelbrot set.
   You will notice some differences in the data-entry menu of
the Julia set pictures. The two new entries in the data-entry
screen are the real and imaginary center points. These values
represent the real and imaginary parts of the constant 'c' in
functions 1-3 and 5. For pictures of the Julia set of the Mand-
elbrot function, the real and imaginary values of 'c' should
come from locations in and along the border of the Mandelbrot
set. For Julia sets of the sin and cos functions, the Max iter-
ations should be set at about 100 and should not really go much
higher than that. For Julia sets of the exponential functions,
the Max iterations should be set from about 25 - 100 (function 4
will automatically be set at 25 by the program).
(Also see COLORING).

Remember:
You can use the viewport option to box in a portion of the
Mandelbrot set then press <CTRL_J> to start a new Julia set from
the point that is defined from the center of the viewport. For
pictures of the sin and cos functions, the range of the right and
top bounds should be about the same as that of the Julia set of the
Mandelbrot function. The real value of 'c' should be kept at or
very near 1.0, and the imaginary value of 'c' should range from
about 0.0 to 3.0. For pictures of the exponential functions (4
and 5) try setting the real and imaginary c values as increments
of pi. As with all of these pictures, you should explore any set
of values that you feel like (if you enter a value that is out of
the range of the program, it will beep and return to that value on
the data-entry menu).

                                                           Page 21
NEWTON'S METHOD:
~~~~~~~~~~~~~~~~

    Newton's method for finding the roots of a polynomial is
probably the most well-known of the function-types represented
here. The method is described as follows:

      given the polynomial function f(x)=0,

                    f'(x)
      answer = x -  -----
                    f(x)

      where f'(x) is the first derivative of the function.
      Put this formula through the iterative process (answer
      back in for x each cycle) and eventually the answer will
      reach the value of one of the roots of the polynomial.
      (As the science of Chaos has shown, there are a few excep-
      tions to this rule that will appear as black holes in the
      picture).

   If you haven't had any Calculus and don't know what a deriv-
ative is, don't worry - all you should really understand is
that a polynomial has as many roots as its highest exponent (ref-
ferred to as the "order" of the equation). For example, the
polynomial x^3 - 2x - 1 has 3 roots.
   Recursive Realm allows you to build and explore Newton's
method for 13 different functions. You enter the left, right,
bottom, and top limits and, like the last two sections, the screen
is scaled to meet these limits. Colorization of these pictures
is different. Each pixel is placed into the above formula as a
starting point and iterated until either a root or the maximum
number of iterations is reached. Each new root is assigned a dif-
ferent color. The light and dark hues of this color are used to
color all pixels leading to this root. If a pixel never leads to
any root (ie. the max iterations are reached) then the pixel
remains black. It is interesting to note that all of these pixels
that remain black make up the Julia set of the function being
explored.(6) The maximum amount of colors used to color roots is 7
(or 14 if you count the light and dark colors of each root separ-
ately) therefore, if a polynomial has more than 7 roots, the
colors for the 8th root will be the same as the colors for the 1st
root and so on. When the picture is finished you will have a
beautiful image of the "basins of attraction"(7) for the function.

                                                           Page 22
MODELS FOR MAGNETISM: (A.K.A. PHASES FOR MAGNETISM)
~~~~~~~~~~~~~~~~~~~~~

     "Models for magnetism" is the study of the phase transition
from magnetic to non-magnetic states of a material as described
by <The Beauty of Fractals pp. 128-146>. In 1952, physicist C.N.
Yang and T.D. Lee found that for a finite number of particles,
the equation c0 + c1*x +...+cnx^n = 0 gives a finite number of
zeros in the complex plane.(8) These are referred to as Yang
and Lee zeros. It can be shown that the Julia set of the "re-
normalization transformation" function of the temperature occur-
ring during the magnetic phase transition is identical with the
set of Yang and Lee zeros(9). The function studied in Recursive
Realm is the renormalization transformation -

          (x^2 + q - 1)^2
     x -> -------------      (10)
           (2x + q - 2)^2

   The mathematics behind this section are beyond the scope of
this guide but are very well explained in <The Beauty of Fractals>.
For our purposes, just realize that we are taking the Julia set
of the above function.
   Pictures of this function are generated and colored exactly as
described in the section on Julia sets. The only difference in
the data-entry menu is that the real and imaginary center
points needed for Julia sets of the Mandelbrot function have now
become the real and imaginary q values. (Also see COLORING).

                                                           Page 23
ENTERING DATA:
~~~~~~~~~~~~~~

      Graph Width - The actual screen width. For example, a full-
      ~~~~~~~~~~~   screen picture would have a Graph Width of 640.
                    Graph Width will always be scaled to the nearest
                    number that is evenly divisible by 80.

   Max Iterations - The maximum number of iterations that is perf-
                    ormed by the escape time algorithm. In pictures
                    of the Mandelbrot set and Julia sets of the
                    Mandelbrot function, this should increase as
                    the magnification of the picture increases. For
                    the other pictures, this should generally remain
                    low (25 - 300). The examples in the enclosed cat-
                    alog file "rrpics.cat" will give you an idea of
                    how this parameter changes with picture type and
                    magnification.

       Left Bound - The lowest real bound of the picture.

      Right Bound - The highest real bound of the picture.

     Bottom Bound - The lowest imaginary bound of the picture.

        Top Bound - The highest imaginary bound of the picture.

   Real Start pnt - Mandelbrot pictures only. Set to 0 for the "true"
        and         Mandelbrot set and anything else for "warped"
   Imag Start pnt   Mandelbrot sets.

   Real Center pt - Julia pictures only. The real part of the
                    constant "c" in the listed functions.

   Imag Center pt - Julia pictures only. The imaginary part of the
                    constant "c" in the listed functions.

     Real q Value - Models of Magnetism pictures only. The real
                    part of the constant "q" in the magnetism
                    function.

     Imag q Value - Models of Magnetism pictures only. The
                    imaginary part of the constant "q" in
                    the magnetism function.

 Flat Range Limit - See COLORING.
  High Band Width - See COLORING.
  Flat Band Width - See COLORING.

                                                           Page 24

  Function Choice - Julia set and Newton's method pictures only.
                    The choice of the function that you will
                    be exploring. Possible choices are listed at
                    the right of the data-entry menu.

        File Name - The picture name. This field will always be
                    brought up with the default name ("mbrot",
                    "julia", "newton", or "magnet"). To avoid
                    accidental overwrites, if you enter the name
                    of a picture that exists, you will be warned.

                                                           Page 25
COLORING:
~~~~~~~~~

     For pictures of the Mandelbrot set, Julia sets, and Models
of Magnetism you must supply the following coloring information:

    * Flat Range Limit - This is the highest iteration number
         colored according to the flat range.
         It should generally be below 20% of the max iterations,
         but you should experiment with different values based on the
         picture that you are making.

    * Flat Band Width  - This is the number of the iterations
         within the Flat Range that you would like to see represented
         as one strip. Usually this should be small and if you
         enter 0, then each successive iteration will be rep-
         resented as one strip.

    * High Band Width  - This is the number of the iterations within
         the High Range that you would like to see represented as one
         strip. You should experiment a lot with this. Low numbers
         give more "splash" color to the picture but can mask out
         interesting features.

   If you would like to see the picture colored in all high range
colors, just enter a 0 for both the Flat Range and the Flat Band
Width. This is particularly useful when exploring the "midgets"
found along the stem of the full set.

An example of colorization follows:

    Iteration Limit = 500
    Flat Range = 40 iterations.
    Flat Band Width = 2 iterations.
    High Band Width = 5 iterations.

    0 -------------40---------------------------------------->500
      |<-- flat -->|<----------- high range ---------------->|
           range

      Flat Range represents iterations 1 - 40. Every 2 iterations
        is assigned a different hue (light or dark) version of
        the same color.

      High Range represents iterations 41 - 500. Every 5
        iterations is assigned a different one of 13 colors (when
        color 13 is reached the next set of 5 iterations starts
        over with color 1).

                                                           Page 26

  A typical coloring session while viewing or building a picture:
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

     1.) I Press the <F10> key until I see a palette of colors
         that I like.

     2.) I think that I like this sequence better than the current
         saved one but I press <F8> to get the saved one back to
         be sure.

     3.) I press <F7> then <F8> several times to compare the new
         palette to the current saved palette.

     4.) I decide that I like the new one better, press <F7> to
         display it, then press <F2> to save it with the picture.
         This new palette now becomes the "saved palette".

                                                           Page 27
PICTURE BUILDING TIPS:
~~~~~~~~~~~~~~~~~~~~~~

     ALL PICTURES:
     ~~~~~~~~~~~~~

        * If you are seeing too much "shapeless" black in the pic-
          ture, raise the iteration limit.

        * Don't make the iteration limit unnecessarily high. This
          will only slow the picture down.

        * Build small 80 or 160 width pictures to experiment with
          different color band settings, then when you feel satis-
          fied with the results, build a full-screen (640) picture.

        * Experiment with the Flat Range Limit=0, High Band Width=1
          and Low Band Width=0 combination for pictures with a low
          iteration limit (<500). If you don't think that it's
          masking out features then this often provides great results.
          (Of course, this doesn't apply to Newton pictures.)

        * Tracking the escape sequence while building a picture can
          be fun but, when you are not there, make sure that the
          tracking is toggled off because it slows down the develop-
          ment of the picture. Pressing <F10> while tracking can make
          the dots more visible. Some pictures are in areas that
          escape so fast that you will not see any dots at all when
          you track them.

        * Use the enclosed catalog of examples or other picture sources
          to build master pictures then make use of the zoom feature.


     MANDELBROT SET PICTURES:
     ~~~~~~~~~~~~~~~~~~~~~~~~

        * Use the "white-out" <F9> feature to locate tiny black
          spots in border area pictures then zoom in on these
          black spots.

        * The far outskirts of the set provide some excellent
          pictures at relatively low iteration limits. Try
          exploring the "midgets" way out at the tip of the
          stem and perched in the upper and lower branches of the
          set.

        * Tracking the escape sequence works best in pictures of
          low magnification. View the full set then track (CTRL_T)
          areas all around it.

                                                           Page 28

        * The area called "seahorse valley" (see Terminology section)
          is, in my opinion, the most difficult of all of areas to
          get the parameters just right. But, it's worth the hassle!
          When exploring this area, keep the max iterations low (150
          -300). Try the following parameters - Max iter = 160, Flat
          Range Limit = 75, High Band Width = 25, Low Band Width = 1.
          Use your "white-out" <F9> key to see if your iteration limit
          is set correctly. You should see a beautiful black seahorse-
          like pattern. If the pattern is faint (ie. too little black)
          then lower the iteration limit. If the pattern has large,
          shapeless black globs, then raise the iteration limit. Build
          several small pictures until you see what you want, then
          build the full-screen picture.

     JULIA SET PICTURES:
     ~~~~~~~~~~~~~~~~~~~

        * Make frequent use of the <CTRL-J> function while building
          or viewing Mandelbrot pictures. Explore how the set changes
          as you cross the border areas of the Mandelbrot set.

        * Tracking can be very nice in Julia sets of the Mandelbrot
          function.

        * The iteration limit for Julia sets of the Mandelbrot function
          usually works fine at only a few hundred iterations. For the
          sin and cos functions, I usually keep it at about 50 - 100.
          For the exponential functions, 25 - 100 works well. In fact,
          function 4 will always be set at 25 by the program.

        * For exponential function 5, use increments of pi for the
          real and imaginary C points. (ie. 3.14, 6.28...).

     NEWTON'S METHOD PICTURES:
     ~~~~~~~~~~~~~~~~~~~~~~~~~

        * Zoom in on convoluted borders between different basins of
          attraction (color pools).

        * The iteration limit is usually fine at about 100.


     MODELS OF MAGNETISM PICTURES:
     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        * Repeated zooming produces pictures that are very similar
          to the original picture.

        * The iteration limit usually can range from only 25 - 100.

                                                           Page 29
APPENDIX A:
~~~~~~~~~~~

   HOT KEYS:
   ~~~~~~~~~
         While in the Integrated Environment: (Main Menu)
         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

                 <ESC> - Clear canvas or exit to DOS.

                  <F1> - Help.

                 <F10> - Change drive and/or directory. (<F5>
                         clears entire string).

              <CTRL-A> - Animate all existing pictures of current
                         menu choice type.

              <CTRL-N> - Generate new picture of current menu
                         choice type. If a picture is highlighted,
                         the default values will come up as those
                         of the current highlighted picture.

              <CTRL-D> - Delete highlighted picture.

              <CTRL-R> - Rename highlighted picture.

                <HOME> - Beginning of file list.

                 <END> - End of file list.

                 To make a choice from the main menu, move to that
                 choice and press <RET> or press the first letter of
                 that choice. Use the arrow keys to move to an exist-
                 ing picture. The picture choices will be sorted
                 and pressing the first letter of the name of a
                 picture will move you to the first picture that
                 begins with that letter.

         While Entering New Picture Data: (Data-Entry Menu)
         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

                  <F1> - Help.

                 <ESC> - Exit to main menu.

                  <F2> - Accept values and create picture.
              <CTRL-E> - Accept values and create EGA picture.
              <CTRL-V> - Accept values and create VGA picture.

                  <F5> - Clear current data-entry field.

                                                           Page 30

         While Building or Viewing Picture: (not animating)
         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

                  <F1> - Help.

                 <ESC> - Exit to main menu. (This choice will
                         save if picture is not complete).

             COLOR KEYS:

                        <F10> - Randomly change color palette.

                         <F9> - "White out" all colors not in set.

                         <F8> - Return to starting palette.

                         <F7> - Return to last random palette.

                         <F2> - Save current color palette.


                <CTRL_T> - Track escape sequence. Toggles this
                           feature on or off.

                <CTRL_N> - Enter "zoom" mode..
                           (The viewport starts very small and is
                           difficult to see. Press PgUp or F10
                           until you see it.)


         While in zoom (viewport) mode:
         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

                          <F1> - Help

                         <ESC> - Return to picture.

                         <PgUp> or <Shift-PgUp> - Expand viewport.

                         <PgDn> or <Shift-PgDn> - Contract viewport.

                         <Arrow Keys> or <Shift-Arrow Keys> - Move
                                viewport around screen.

                         <F2> - Accept viewport bounds and go to
                                data-entry menu (any unsaved
                                work on the current picture will be
                                saved).

                     <CTRL_J> - Build a new Julia set from the
                                center point of the viewport. (this
                                is only available if you are view-
                                ing or building a Mandelbrot pic-
                                ture).

                        <F10> - Randomly change color palette.

                                                           Page 31

         While Animating:
         ~~~~~~~~~~~~~~~~

                  <F1> - Help.

                 <ESC> - Exit to main menu.

           <SPACE BAR> - Pause. (hit a key to resume).

                                                           Page 32
APPENDIX B:
~~~~~~~~~~~
   MISCELLANEOUS INFORMATION:
   ~~~~~~~~~~~~~~~~~~~~~~~~~
       File Names:
       ~~~~~~~~~~~

          Recursive Realm makes two different types of files for
          each picture. Each of the files has the picture name
          for the first part. The data file holds the picture
          parameters and has the extension ".dat". The picture
          file contains the actual image in PCX format and has
          the extension ".rrm" for Mandelbrot set pictures,
          ".rrj" for Julia set pictures, ".rrn" for Newton's method
          pictures, and ".rrp" for Magnetism pictures. Some com-
          mercial packages that read PCX files, require the file
          extension ".pcx". If you are using one of these packages,
          then copy or rename the recursive realm picture file
          (ie., .rrm, .rrj, .rrn, .rrp) to the proper filename.
          If you rename this file to give it the .pcx extension,
          don't forget to rename it back to it's old name and
          extension before you try to use it with Recursive Realm
          again.

       Sources of Information:
       ~~~~~~~~~~~~~~~~~~~~~~~

          It is important to mention that everything that I have
          learned about these Fractals came from the books listed
          in the bibliography of this guide. I have tried to pro-
          vide as much information as I can to help you understand
          what is actually being generated on your screen but if
          you have a strong interest in this subject, these books
          provide a wealth of information that cannot possibly be
          covered here.

       Program Speed:
       ~~~~~~~~~~~~~~

          Have patience, my friend. As previously mentioned most
          of these pictures take a long time to build. The best
          way to get the most out of your pictures is to exper-
          iment with color band widths and create small versions
          of each picture before creating the final full-screen
          version. Version 2.0 is 40% - 100%  faster than version
          1.5 in Newton's method pictures, Magnetism pictures, and
          Julia set pictures of the sin and cos functions. It is
          2% - 50% faster in Mandelbrot set pictures and Julia set
          pictures of the Mandelbrot function.

                                                           Page 33
       Different Graphics Resolutions:
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

          If the data-entry menu is called with no pictures high-
          lighted, Recursive Realm will automatically detect the
          current driver and use the mode with the highest reso-
          lution for the available driver. If you bring up the
          data-entry mode using the defaults from an existing
          picture (by pressing <CTRL-N> in the main menu while a
          picture is highlighted or by zooming another picture),
          the default mode will be the mode in which that picture
          was built. F2 will proceed to build the picture in this
          default mode. You may use <CTRL-E> or <CTRL-V> to force
          EGA or VGA modes if you wish, but don't use <CTRL-V> if
          your computer does not have a VGA card!

       Using Recursive Realm in Batch Mode: (unattended)
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

          Recursive Realm gives you the option to skip the menu,
          immediately continue building a picture, and quit when
          finished. This is useful when you would like to build
          more than one picture without returning to the main
          menu. To use this method, type (from DOS), or place in
          a batch file, the following command:

               rr [path]filename "type of picture"

               where the path is optional and the "type of picture"
               is defined as follows -

                     m - Mandelbrot pictures
                     j - Julia pictures
                     n - Newton pictures
                     p - Phases for Magnetism pictures

          For example, if you wanted to leave the computer for
          several hours (or days) and build three pictures while
          you are away, you could start each picture and immed-
          iately quit (so the picture would exist on the disk)
          then create a batch file as follows:

          (assume picture one is a Mandelbrot picture named
           "mborder", picture two is a Julia picture named "nicejul"
          and picture three is a Newton picture named "newtx4-1")

          create a batch file called "away.bat" (or any name with
          the .bat extension) containing the following three lines:

                   rr mborder m
                   rr nicejul j
                   rr newtx4-1 n

          At the DOS prompt just type "away" and leave your com-
          puter alone for awhile. You may even turn off the mon-
          itor while building pictures.

                                                           Page 34
REFERENCES:
~~~~~~~~~~~

1.) The Fractal Geometry of Nature. Inside back cover.

2.) The Mathematical Tourist. p. 159.

3.) The Mathematical Tourist. p. 157.

4.) Ibid. pp. 158-159.

5.) Ibid. p. 159.

6.) Ibid. p. 167.

7.) Ibid. p. 168.

8.) The Beauty of Fractals. p. 132

9.) Ibid. p. 133.

10.) Ibid. p. 194.

                                                           Page 35
BIBLIOGRAPHY:
~~~~~~~~~~~~~

Peitgen, H.-O. and Richter, P.H. THE BEAUTY OF FRACTALS.
Springer-Verlag Berlin Heidelberg, 1986

Peterson, Ivars THE MATHEMATICAL TOURIST.
W.H. Freeman and Company, 1988

Peitgen, H.-O. and Saupe, Dietmar. THE SCIENCE OF FRACTAL IMAGES
Springer-Verlag New York, 1988

Gleick, James CHAOS - MAKING A NEW SCIENCE
Penguin Books, 1987

Mandelbrot, B.B. THE FRACTAL GEOMETRY OF NATURE
W.H. Freeman and Company, 1977, 1982, 1983

Dettman, John W. APPLIED COMPLEX VARIABLES.
Dover Publications, inc. New York, 1965

Barnsley, Michael. FRACTALS EVERYWHERE
Academic Press, inc. 1988

Stevens, Roger T. FRACTAL PROGRAMMING IN C
M&T Publishing, inc. 1989

Briggs, John and Peat, F. David. TURBULENT MIRROR
Harper & Row Publishers, New York. 1989

Dewdney, A.K. THE ARMCHAIR UNIVERSE
W.H. Freeman and Company, 1988

Gardner, Martin - Anything and everything!

Dewdney, A.K. - "Computer Recreations" and "Mathematical
Recreations" columns in SCIENTIFIC AMERICAN magazine.

Silver, Rollo - AMYGDALA NEWSLETTER - The Newsletter of the
Mandelbrot Set. This is the best source that I know of for
information on the Mandelbrot set. Definitely not to be missed!
For more information on AMYDGALA write to: AMYGDALA, Box 219
San Cristobal, NM 87564

                                                           Page 36
ACKNOWLEDGEMENTS:
~~~~~~~~~~~~~~~~~

   Recursive Realm uses the PCX Programmer's Toolkit,
   Copyright Genus Microprogramming, Inc. 1988-90. All
   Rights Reserved.

   PC Paintbrush is a trademark of ZSoft Corporation.

   IBM is a registered trademark of International Business
   Machines.

   All other products mentioned within this manual are
   trademarks of their respective companies.

   Thanks to the Association of Shareware Professionals for
   providing the description used in the "Shareware Info"
   section of this guide (and for about a trillion other
   things!)

                                                           Page 37
                       REGISTRATION FORM


Name and Address: _________________________________________
(phone optional)  _________________________________________
                  _________________________________________
                  _________________________________________


Computer Model: ___________________________________________

Memory:         ___________________________________________

Monitor Type:   ___________________________________________

Math Coprocessor Present? YES _____   NO _____

Graphics:       EGA ______   VGA _______  Other ______
                                          _________________

Disk drive(s)   5 1/4" ____  3 1/2" ____  Fixed _____
                 Size: ____   Size: ____  Size: _____

DOS Version: _______

Recursive Realm Version: _______
(on main menu at bottom)

Where did you find Recursive Realm? ___________________________
_______________________________________________________________

Comments: ______________________________________________________
          ______________________________________________________
          ______________________________________________________
          ______________________________________________________
          ______________________________________________________


           Registration Fee $20.00 - Thank you very much
           California residents please add 6.5% sales tax.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2367

     Volume in drive A has no label
     Directory of A:\

    RREALM   ZIP    334446   6-28-90   9:06p
    READ     ME       2720   6-27-90   3:55p
    PKUNZIP  EXE     23528   3-15-90   1:10a
    GO       BAT        23  10-04-90  12:26a
            4 file(s)     360717 bytes
                               0 bytes free
