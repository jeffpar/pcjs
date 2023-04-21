---
layout: page
title: "PC-SIG Diskette Library (Disk #841)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0841/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0841"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MANDELBROT MAGIC"

    Fractal geometry has been used in the past to create images of many
    different subjects.  From three-dimensional pictures of landscapes to
    an accurate cross section of the heart, fractals are the wave of the
    future.
    
    MANDELBROT MAGIC generates color displays of the Mandelbrot Set, a
    famous group of mathematical structures also known as fractals.
    Fractal geometry is a complicated field in mathematics, but this
    program is easy to use and will automatically create the fractal slides
    according to your specifications.
    
    With this program you can create a new slide, or recreate a slide from
    an already existing one.  A set of fractal slides will display a portion
    of the former slide in greater detail.  Generating a slide is an
    intensive computational task and can easily take from three to 16 hours,
    but an 8087 math coprocessor will reduce the generation time by a factor
    of 10.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0841.TXT

{% raw %}
```
Disk No:  841
Program Title:  MANDELBROT MAGIC  version 3.1
PC-SIG version:  2.1

MANDELBROT MAGIC generates color displays of the Mandelbrot Set; a
famous group of mathematical structures known as fractals.  Fractal
geometry is a complicated field in mathematics, but this program is
easy-to-use and will automatically create the fractal slides according
to your specifications.  With this program, you can create a new slide,
or create a slide from an existing one.  A set of fractal slides will
display a portion of the former slide in greater detail.  One of the
unique things about fractals is that they reveal more and more detail
the closer you get, and the small-scale details are similar to the
large-scale details.  Generating a slide is an intensive computational
task and can take from 3 to 16 hours, but an 8087 math co-processor will
reduce the generation time by a factor of 3 to 5. A 15-minute
demonstration program is included on this disk.

Usage:  Graphics.

Special Requirements:  CGA, EGA, or VGA graphics.

How to Start:  Type GO (press enter).

Suggested Registration:  $15.00

File Descriptions:

??????   PIC  Sample slides (13 files).
CHANGES  !!!  Update information.
MM       DOC  Documentation.
MM       EXE  Main program.
PRINTDOC BAT  Batch file to print documentation.

PC-SIG
1030D E Duane Avenue
Sunnyvale, CA 94086
(408) 730-9291
(c) Copyright 1987,89 PC-SIG, Inc.

```
{% endraw %}

## MM.DOC

{% raw %}
```






















                                  MANDELBROT MAGIC
                                    Version 3.1


                                    USER'S MANUAL



                                 Left Coast Software
                                   P.O. Box 160601
                              Cupertino, CA 95016-0601
                                   (408) 996-3130




                                   June 1, 1989






                         Copyright 1989 Left Coast Software.
                                All rights reserved.

























                             SOFTWARE LICENSE AGREEMENT 

      Mandelbrot Magic is distributed as a shareware program.  It is NOT a
      public domain program!  However, we encourage you to copy the program
      for trial purposes.  The program and all associated files can be
      freely copied and shared to allow others to try Mandelbrot Magic. 
      You may upload this program and all associated files to any bulletin
      board system (BBS) or on-line computer service.  You may not charge
      more than $10 to distribute Mandelbrot Magic in any form.   

      If you try Mandelbrot Magic and decide to use it, you must register
      your copy.  If you do not register your copy, you are not authorized
      to use the program beyond an initial evaluation period of thirty (30)
      days.

      By registering, Left Coast Software grants you a license to use the
      copyrighted computer program Mandelbrot Magic on a single computer,
      subject to the terms and conditions of this license.  You agree not
      to (a) modify, disassemble, or decompile the program or (b) use this
      program on more than one terminal of a network, on a multi-user
      computer, on a time-sharing system, on a service bureau, or on any
      other system on which the program could be used (other than for trial
      purposes) by more than one person at a time.  

      The registration fee for Mandelbrot Magic is $15.  When you register,
      you will receive the most recent version of the program and will be
      placed on our mailing list to receive information on future upgrades
      to the program.  In addition, you'll receive a copy of BackMAGIC, a
      memory resident program which generates fractal slides in the
      background while you work with other programs.  BackMAGIC IS NOT A
      SHAREWARE PROGRAM!  The only way you can obtain a legal copy of
      BackMAGIC is to register as a user of Mandelbrot Magic.   To register
      for Mandelbrot Magic, send your checks to:

                               LEFT COAST SOFTWARE
                                 P.O. BOX 160601
                            CUPERTINO, CA 95016-0601
                                 (408) 996-3130

      Users located outside the U.S. please send international money orders
      denominated in U.S. dollars.  You may also register or order by
      phone.  We accept VISA and MasterCard.  A registration/order form is
      included at the end of this manual.

      THE PROGRAM ON THIS DISKETTE IS PROVIDED "AS IS".  LEFT COAST 
      SOFTWARE DISCLAIMS ALL WARRANTIES, EITHER EXPRESS OR IMPLIED, AS TO 
      THE PROGRAM OR ITS PERFORMANCE OR QUALITY, INCLUDING BUT NOT LIMITED 
      TO IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
      PURPOSE.  IN NO EVENT WILL LEFT COAST SOFTWARE BE LIABLE FOR ANY 
      DAMAGES, INCLUDING WITHOUT LIMITATION DIRECT, INDIRECT, INCIDENTAL, 
      SPECIAL OR CONSEQUENTIAL DAMAGES, LOST PROFITS OR LOST DATA, 
      RESULTING FROM THE USE OF OR INABILITY TO USE THE PROGRAM. 














                           A WORD TO VERSION 2.0 USERS

      Although the name is the same as Mandelbrot Magic Version 2.0 and the
      program looks familiar, Mandelbrot Version 3.1 is essentially a
      completely new program.  It has been completely rewritten to provide
      a host of new features and much greater performance.  Our goal was to
      create the best program for creating, displaying and manipulating
      slides of the Mandelbrot and Julia Sets on an IBM PC.  We think we
      have succeeded.

      Rather than list all of the changes, we suggest that you read the
      Version 3.1 manual in its entirety.  It's not that long and this is
      the best way to understand all of the changes and new features.

      Unfortunately, the vast number of changes incorporated into Version
      3.1 made it impractical to maintain compatibility with Version 2.0
      files.   Version 2.0 files will not work with Version 3.1; if you
      attempt to load a Version 2.0, you will get a critical error message,
      just as if you attempted to load a spreadsheet file into the program.

      We recognize that this incompatibility will cause grief for some
      users, especially those who have CGA adapters since you cannot use
      the new higher graphics resolutions provided in Version 3.1.  We
      understand that recreating your favorite slides to work with Version
      3.1 is a time consuming process and we apologize for the
      inconvenience.

      Fortunately, we have recently created BackMAGIC, a memory resident
      program which can generate slides in the background, while you use
      your computer for other purposes.  Please refer to the manual for
      details on BackMAGIC.





































                         MANDELBROT MAGIC USER'S MANUAL

                                TABLE OF CONTENTS


             SECTION                                        PAGE
             -------                                        ----

      1.   INTRODUCTION.......................................1

      2.   SYSTEM REQUIREMENTS................................2
           2.1  GRAPHICS ADAPTERS.............................2
           2.2  MEMORY REQUIREMENTS...........................3
           2.3  COMPUTATIONAL SPEED...........................3

      3.   A BRIEF INTRODUCTION TO FRACTALS...................4
           3.1 THE MANDELBROT SET.............................4
           3.2 JULIA SETS.....................................5
           3.3 SUGGESTED READINGS.............................6
           3.4 VIDEOS.........................................6

      4.  USING MANDELBROT MAGIC..............................7
          4.1  STARTING MANDELBROT MAGIC......................7
          4.2  CONTROL PANEL..................................8
          4.3  MESSAGES AND PROMPTS...........................8
          4.4  LOADING A SLIDE................................8
          4.5  DISPLAYING A SLIDE.............................8
               4.5.1  Color Mode..............................9
                      4.5.1.1 Cyclic..........................9
                      4.5.1.2 Sectional.......................9
                      4.5.1.3 Equal Areas....................10
                      4.5.1.4 Assigned.......................10
               4.5.2  Number of Regions (Size of Color Band).10
               4.5.3  Number of Colors.......................10
               4.5.4  Use Black as Color.....................11
               4.5.5  Show Coordinates.......................11
          4.6  CONTROLLING THE SLIDE DISPLAY.................11
               4.6.1  Assigning Colors.......................12
               4.6.2  Changing Palettes......................14
          4.7  ANIMATING A SLIDE.............................15
          4.8  CREATING NEW SLIDES...........................16
               4.8.1  File/Pathname..........................16
               4.8.2  Slide Type.............................16
               4.8.3  Compressed.............................16
               4.8.4  X (Real) and Y (Imaginary).............17
               4.8.5  C Value (Julia)........................17
               4.8.6  Slide Size.............................17
               4.8.7  Number of Iterations...................18
               4.8.8  Graphics Mode..........................19
               4.8.9  Show Coordinates.......................19
               4.8.10 The Grid Method........................20
          4.9  ZOOMING IN ON A SLIDE.........................21












          4.10 CALCULATING PARAMETERS........................22
          4.11 CREATING A SLIDESHOW..........................22
          4.12 PRESENTING A SLIDESHOW........................23
          4.13 QUITTING......................................24
          4.14 PRINTING SLIDES...............................24
               SUGGESTED SLIDE PARAMETERS....................25
                      MANDELBROT SET.........................25
                      JULIA SETS.............................26
               CUSTOMER SERVICE..............................27
               OTHER LEFT COAST PROGRAMS.....................28
                      EXCHEQUER..............................28
                      PC-AREACODE............................29
                      BackMAGIC..............................29
               ORDER/REGISTRATION FORM.......................30
               COMMAND SUMMARY...............................31



















































      1.  INTRODUCTION

      Mandelbrot Magic generates color displays ("slides") of the
      Mandelbrot Set and Julia Sets on IBM PC-compatible computers with
      color graphics adapters.  The Mandelbrot Set is perhaps the most
      famous of a fascinating group of mathematical structures known as
      fractals.   Fractal geometry is a complicated mathematical field, but
      Mandelbrot Magic is easy to use and will automatically create
      spectacular slides when you specify a few simple parameters.

      With Mandelbrot Magic, you can create a new slide or load and view an
      existing slide from disk.  The program runs on virtually any color
      graphics adapter and supports four different color modes from CGA
      (320 x 200 x 4 colors) to VGA (640 x 480 x 16 colors), depending on
      which adapter you use.  Although the program offers three automatic
      coloring algorithms, the user has complete control over the color of
      any point as well as the color palette.  Several different
      preprogrammed palettes are also provided.  The program also features
      different "animation" techniques which make the features in the slide
      appear to move.

      One of the unique things about fractals is that they reveal more and
      more detail the closer you get and the small-scale details are
      similar to the large-scale details.  With Mandelbrot Magic, you can
      graphically select any part of the slide to magnify.  You can "zoom"
      in on various features of the fractal and reveal more detail.  You
      can also create slideshows consisting of a sequence of up to 20
      existing slides.  

      This manual includes a list of suggested parameters for interesting
      slides and a list of suggested readings for those who want to explore
      the theoretical foundations of fractals in greater detail.


























                                      1







      2. SYSTEM REQUIREMENTS

      Mandelbrot Magic runs on any IBM PC or PS/2-compatible computer with
      a minimum of 256k of memory, a color graphics adapter, a color
      monitor and a single floppy disk.  A hard disk is not required but is
      recommended because the files used by this program are quite large
      (up to 310 k).  A hard disk also reduces the time required to load
      existing slides from memory.   Although an 80*87 math coprocessor is
      not required, it is recommended.  Mandelbrot Magic automatically
      detects and uses the coprocessor if one is installed.  

      2.1 GRAPHICS ADAPTERS

      Mandelbrot Magic supports the CGA, MCGA, EGA or VGA graphics adapters
      and offers the following four standard graphics modes:

                         Number of     Number of     Number of
             Mode        X pixels      Y pixels       Colors
             -------------------------------------------------
             CGA            320           200            4

             EGA Low        640           200           16

             EGA High       640           350           16

             VGA            640           480           16
             -------------------------------------------------


      Mandelbrot Magic does not currently support any 256-color normal or
      extended mode on VGA adapters.

      Not all graphics adapters support all four standard graphics modes. 
      The following chart show which modes are available on which adapters:

                                Graphics Adapter
                        --------------------------------------
             Mode       CGA   MCGA   EGA (64k)   EGA   VGA  
             -------------------------------------------------
             CGA         X      X        X        X     X

             EGA Low                     X        X     X        

             EGA High                             X     X

             VGA                                        X
             -------------------------------------------------

      If you try to generate or display a slide in a mode not supported by
      your machine, Mandelbrot Magic will display an error message.

      Mandelbrot Magic also supports the extended EGA mode (640 by 480
      pixels) of the Paradise Autoswitch 480 EGA card.  You must have a
      Autoswitch 480 card to use this mode.  WARNING: IF YOU TRY TO




                                      2







      GENERATE OR DISPLAY A SLIDE IN THIS MODE ON ANY OTHER EGA CARD, YOUR
      SYSTEM WILL CRASH!!!  Slides generated in Paradise mode can be
      viewed on a computer with a VGA adapter but not vice versa.  

      2.2 MEMORY REQUIREMENTS

      Mandelbrot Magic itself requires approximately 120 K of RAM while
      running.  However, additional memory is required to hold the slide. 
      The amount of additional memory needed depends upon the number of
      pixels used in the slide which is a function of the graphics mode and
      the slide size.  The total memory needed to run Mandelbrot Magic and
      to produce a full-size slide in each mode is:

                                       K-Bytes of
                        Mode           RAM Memory 
                        -------------------------
                        CGA               190 K

                        EGA Low           250 K

                        EGA High          350 K

                        VGA               430 K

                        Paradise EGA      430 K
                        -------------------------

      2.3 COMPUTATIONAL SPEED

      Generating a fractal slide is an intensive computational task and
      will often take three or four hours on a standard PC.  Some slides,
      however, can take up to 25 hours to generate.  There are several ways
      to reduce the calculation time:

      o   Use an 80*87 math coprocessor. Using a coprocessor will reduce
          the generation time by a factor of 3 to 5.  

      o   Buy a faster computer!  

      o   Reduce the size of the slide.  Since Mandelbrot Magic must
          generate each point (pixel) in the slide, reducing the number of
          pixels in the slide reduces generation time proportionately. 
          This is especially useful when exploring a particular area of the
          Mandelbrot or Julia Sets for the first time.

      o   Use a lower graphics resolution.  

      Mandelbrot Magic has several features which help reduce computing
      requirements.  In addition to 80*87 support, the program takes
      advantage of certain symmetries in the Mandelbrot and Julia sets to
      reduce computation.  You can also stop work on a slide then resume
      generation at a later time.  Most importantly, registered users
      receive a copy of BackMAGIC, a memory resident program that generates
      Mandelbrot Magic slides while you run other programs!  




                                      3








      3. A BRIEF INTRODUCTION TO FRACTALS

      Fractal geometry is one of the newest and most exciting fields of
      mathematics.  It was essentially invented by Benoit Mandelbrot, an
      IBM research fellow.  Fractal geometry has been used to create images
      and models of many different areas.  From threedimensional landscapes
      in movies to accurate cross-sectional models of the heart, fractals
      are at the leading edge of research in many fields.

      One of the unique characteristics of fractals is that they reveal
      more and more detail the closer you get.  Furthermore, the small
      scale details are similar to the large scale details.

      For example, consider a map of the coast of California with its
      jagged irregularities.  If you look at a map of a smaller area such
      as a bay, you find that the edge of the bay has the same kind of
      shapes and irregularities as the California coast.  Move closer to
      examine a one foot section of the shore and you again find that it
      has the same kind of shapes and irregularities.

      Although we will try to explain the basic concepts underlying the
      Mandelbrot and Julia Sets, we cannot begin to fully explain them.  If
      you are interested in fractal theory (or just want to look at pretty
      pictures), please refer to the publications listed in Section 3.3.

      3.1 THE MANDELBROT SET

      The Mandelbrot Set is perhaps the most famous of all fractals.  It
      has been called "the most complicated object in mathematics."  It was
      discovered by Benoit Mandelbrot during his work in fractal geometry. 

      The Mandelbrot Set exhibits the same kind of repetitive detail at
      smaller and smaller scale unique to fractls.   As you explore the
      Set, you will find innumerable miniature copies of the Set.  Although
      many of these copies appear to be totally separate from the main Set,
      they are not. One interesting feature of the Set is that every point
      in the Set is connected.  Each of these miniature sets is connected
      to the main body of the Set by a "thread" of points which are also in
      the Set.  The Mandelbrot Set also includes an infinite number of
      kaleidescopic whirls and curlicues along the edge of the Set.  

      The slides created by this program represent the plane of "complex"
      numbers.  A complex number is made up of a real part and an imaginary
      part.  An example of a complex number is 5 + 7i.  The "5" is the real
      part and the "7i" is the imaginary part.  The "i" in "7i" stands for
      the square root of -1.  The term "imaginary" comes from the fact that
      the square root of -1 does not exist.  Points which lie in the
      Mandelbrot Set have a real part between 0.50 and -2.00 and an
      imaginary part between 1.25 and -1.25.

      Each point (or pixel) on the slide represents a complex number.  The
      real component of the number corresponds to the X dimension while the
      imaginary component lies along the Y dimension.




                                      4








      The Mandelbrot Set is generated by repeatedly performing a
      mathematical process on each point in the plane of complex numbers. 
      A good description of this process appears in an article written by
      A.K. Dewdney which appeared in the August, 1985 issue of Scientific
      American:

      "Begin with the algebraic expression z2 [z squared] + c, where z is a
      complex number that is allowed to vary and c is [the complex number
      represented by a specific point].  Set z initially to be equal to the
      complex number 0.  The square of z is then 0 and the result of adding
      c to z2 is just c.  Now substitute this result for z in the
      expression z2 + c.  The new sum is c2 [c squared] + c.  Again
      substitute for z.  The next sum is (c2 + c)2 + c.  Continue the
      process, always making the output of the last step the input for the
      next one."

      After each iteration, the "size" of the resulting complex number is
      determined.  The size can be thought of as simply the distance from
      the origin of the plane of complex numbers to the point which
      represents that complex number.  The size is therefore equal to the
      square root of the sum of the squares of the real and imaginary parts
      of the complex number. (Got that?)

      As Dewdney describes: "The Mandelbrot set is the set of all complex
      numbers c for which the size of z2 + c is finite even after an
      indefinitely large number of iterations....A straightforward result
      in the theory of complex-number iterations guarantees that the
      iterations will drive z to infinity if and only if at some stage z
      reaches a size of 2 or greater."  As a default, this program assumes
      that a specific point is in the Mandelbrot Set if the size is less
      than 2 after 1000 iterations.  The color of each pixel reflects the
      number of iterations required for the size of z2 + c to reach 2. 

      3.2 JULIA SETS

      Benoit Mandelbrot discovered the Mandelbrot Set while investigating
      Julia Sets (named for the French mathematician Gaston Julia).  Unlike
      the unique Mandelbrot Set, however, there are an infinite number of
      Julia Sets of many different types. 

      Julia Sets are generated using essentially the same mathematical
      procedures as are used to generate the Mandelbrot Set.  The only
      difference is that c is set to a constant and z is the value of the 
      the complex number represented by a specific point in the display. 

      Here's the fascinating part!  The value of c determines what the
      associated Julia Set looks like.  Mandelbrot discovered that the
      general shape of the Julia Set depends upon where c is in relation to
      the Mandelbrot Set.  When c is far from the edge of the Mandelbrot
      Set, the result is much different than if c lies inside the Set.  
      The most interesting Sets are produced when c lies very near the edge
      of the Mandelbrot Set.  Mandelbrot Magic provides a very easy way to
      select these points and generate slides of interesting Julia Sets.




                                      5








      3.3  SUGGESTED READINGS

      If you are interested in the theory of fractals, the following books
      and articles are especially informative.  The Dewdney article is the
      best introduction to the theory of fractals while Gleick's book is a
      readable account of the history of fractals and how they relate to
      the fascinating new field of chaos.  Gleick's book is available in
      paperback in all serious bookstores.  The Peitgen books can usually
      be found in large bookstores near major universities.

          Barnsley, Michael.  Fractals Everywhere.  San Diego: Academic
          Press, 1988.

          Dewdney, A.K.  "Computer Recreations: A computer microscope zooms
          in for a look at the most complex object in mathematics",
          Scientific American (August 1985), pp. 16-20. 

          Dewdney, A.K.  "Computer Recreations: Of fractal mountains,
          graftal plants and other computer graphics at Pixar," Scientific
          American (November, 1987), pp. 14-20.

          Gleick, J.  Chaos, Making a New Science.  New York: Viking, 1987.

          Mandelbrot, Benoit B.  The Fractal Geometry of Nature.  New York:
          Freemant & Co., 1983.

          Peitgen, H.O. & Richter, P.H.  The Beauty of Fractals.  New York:
          Springer-Verlag, 1985.

          Peitgen, H.O. & Saupe, D.  The Science of Fractal Images.  New
          York: Springer-Verlag, 1988.

      If your theoretical interest in fractals and chaos is very strong,
      you should also contact Clifford Pickover of IBM and request
      information on the Journal of Chaos and Graphics.  He will send you
      information on how to obtain back copies along with issues of other
      papers.  Many of these are available for free from IBM.  His address:

              Clifford A. Pickover
              IBM Thomas J. Watson Research Center
              Yorktown Heights, NY 10598

      3.4  VIDEOS 

      Media Magic sells three interesting videotapes with fractal images --
      "Fractal Fantasy", "Frontiers of Chaos" and "Nothing But Zooms" --
      along with books, calendars and other assorted fractal-related items.
      Their address:

              Media Magic
              P.O. Box 2069
              Mill Valley, CA 94942
              (415) 381-4224




                                      6








      4.  USING MANDELBROT MAGIC

      Before using Mandelbrot Magic, be sure to make at least one backup
      copy on a floppy diskette and store it in a safe place.  If you want
      to run Mandelbrot Magic off of your hard disk, copy all of the
      program files to an appropriate directory.  If you want to be able to
      run Mandelbrot Magic from any directory, make sure that you add the
      name of the directory containing MM.EXE to your DOS path.  Refer to
      the DOS manual for details on the PATH command if you are unfamiliar
      with how to do this.

      So where do you start with Mandelbrot Magic and just what the heck do
      you do with it?  Well, there are several slides on the distribution
      diskette.  Three of these slides (M1*.PIC) show the entire Mandelbrot
      Set at three different resolutions (i.e. graphics modes).  You will
      undoubtedly want to explore the Mandelbrot Set by magnifying certain
      parts of this slide.  Working from these slides, you can use the
      program's Zoom function to select areas or you can enter the
      coordinates of the area directly (there is a list of some interesting
      values at the end of this manual).  Then you make slides of the new
      areas and zoom in on them, etc, etc...

      Although there is only one Mandelbrot Set, there are an infinite
      number of Julia Sets.  So you can approach the exploration of this
      type of fractal in two ways: (1) you can produce large-scale pictures
      of lots and lots of Julia Sets or (2) you can zoom in on slides of
      interesting Julia Sets and explore their features in greater detail. 
      In practice, you will undoubtedly do both.

      This program comes with several sample slides.  Two of these 
      (M1_CGA.PIC and M1_EGA.PIC) are complete and can be displayed
      immediately.  The others are incomplete; you can finish them by
      loading the appropriate file into the program (F9), then pressing F8
      to finish creating them.

      4.1 STARTING MANDELBROT MAGIC

      To run Mandelbrot Magic, move to the directory with MM.EXE and type:

              MM

      then hit <Return>.  Assuming you have the proper graphics adapter,
      the title screen will be displayed.  Next, a shareware information
      screen will be displayed.  When you press a key, this disappears and
      the main Control Panel appears. If you do not have an acceptable
      graphics adapter, the program will refuse to run.

      If you want, you can avoid the title screen and shareware information
      screen by starting Mandelbrot Magic by typing either:

              MM Q  or MM /Q

      then pressing <Return>.  You can enter an upper or lower case "Q".  




                                      7








      4.2 CONTROL PANEL

      The Control Panel is used to enter all of the parameters used while
      creating or displaying slides.  The parameters for each slide are
      stored with that slide.  Specific functions such as loading files,
      displaying slides or creating new slides are invoked by pressing the
      Function keys (F1 through F10).

      The Control Panel is divided into two sections -- a parameters 
      section on top and a function key menu on the bottom.  The top
      section contains two types of fields -- data fields where you will
      enter values for use in generating and displaying slides and status
      fields which just display information.

      The arrow keys, Home, End and <Return> can be used to move among the
      data fields.  When entering data, pressing <Backspace> will delete
      the last character or digit.  Each of the fields is described below.

      4.3 MESSAGES AND PROMPTS

      Error messages and prompts appear in boxes in the middle of the
      screen.  Most messages and prompts can be cancelled by pressing
      <Esc>.  Prompts which require a Yes or No answer have a default value
      which are shown in brackets [ ] after the prompt.  When a default
      value is shown, pressing any key except the opposite of the default
      will use the default value.  For example, if the default is "Y" then
      you must press "N" or "n" to override the default.

      4.4 LOADING A SLIDE

      You can load an existing slide by simply typing the name of the file
      containing the slide in the Filename field, then pressing F9. 
      Mandelbrot Magic verifies that the slide exists, checks that the
      slide can be displayed on your computer, then loads the slide into
      memory and displays its parameters on the Control Panel.  The time
      required to load a file depends upon both the size of the file (as
      determined by its resolution and its size) and whether the file was
      compressed during creation (See Section 4.8.3). 

      4.5 DISPLAYING A SLIDE

      Once you have loaded a slide (or created a new one), you can display
      it by pressing F10.  You can also display a slide by pressing F1, F5,
      F6 or F7.  If you press on of these other keys, the slide will be
      displayed just as if you pressed F10.  However, the function
      associated with these keys (as described below) is invoked
      immediately once the slide is displayed.

      When you press F10, the screen will be cleared and Mandelbrot Magic
      will display the slide.  Since each pixel must be drawn individually,
      displaying a slide can take as long as 20 seconds.  The time required
      to display a slide depends upon the number of pixels (as determined
      by graphics mode and slide size) and the speed of your computer.




                                      8








      You can control how the slide is displayed by entering appropriate
      values for the following parameters:

      4.5.1 Color Mode

      Mandelbrot Magic provides complete control over the colors of your
      slide by allowing you to modify the color assignments (i.e. which
      color number is assigned to which pixel) and the color palette (i.e.
      which actual color is assigned to each color number).  As described
      in Section 3, the color of each point is based upon the number of
      iterations required for the size of the point to exceed a certain
      limit.  Of course, all pixels which have identical values (i.e.
      number of iterations) will be the same color at all times.   

      Mandelbrot Magic provides four separate mechanisms for assigning
      colors to individual pixels in a slide.  Select a color mode by
      highlighting the color mode field on the Control Panel and pressing
      the <Space> bar to cycle through these four choices.  Once the slide
      is displayed, you can redisplay the slide with a different color mode
      by pressing F10 in conjunction with another key.  The key combination
      for each mode is listed after the name of the color mode in the
      following descriptions:

      4.5.1.1 Cyclic  (Ctrl-F10)

      If you select the Cyclic color mode, Mandelbrot Magic will assign
      color numbers to various iteration values according to a regular
      cycle.  For example, pixels with values of 1 will be colored with
      color number 1, pixels with values of 2 will be colored with color
      number 2,... pixels with values of 15 will be colored with color
      number 15, etc.  When Mandelbrot Magic runs out of colors, it simply
      starts over again.

      When you select this mode, you should also input the number of colors
      to be used in the slide and the width of the color band.   In the
      preceding example, the color band width is 1.  If you set the band
      width to 3, then pixels with values of 1, 2 or 3 will be colored with
      color number 1, pixels with values of 4, 5, or 6 will be color with
      color number 2, etc.

      4.5.1.2 Sectional  (Shift-F10)

      When you select the Sectional color mode, Mandelbrot Magic divides
      the total range of possible pixel values (from 1 to the maximum
      number of iterations) and divides into equal sections.  All pixels
      within a certain range would then be colored with the same color. 

      For example, if you have a slide with a maximum iteration count of
      1000 and divide it into 50 sections, then all pixels with values from
      1 to 20 will be colored with color number 1, all pixels from 21 to 40
      will be colored with color number 2, etc.  When you select this color
      mode, you must also input the number of color regions since this
      controls how many sections are used.




                                      9








      Although the Sectional and Cyclic color modes are conceptually
      different, they can usually be used to produce identical results. 
      For example, if you have a slide with a maximum iteration count and
      divide it into 50 sections using the Sectional mode, you can achieve
      the same result by using the Cyclic mode with a bandwidth of 20 (1000
      divided by 50).

      4.5.1.3 Equal Areas  (F10)

      When the Equal Areas mode is chosen, Mandelbrot Magic will divide the
      slide into separate color regions of approximately equal size.  You
      must therefore enter the number of color regions on the Control Panel
      when you select this mode.

      This mode often produces the best visual results.  Since most slides
      have areas where the pixel values vary widely, the Cyclic and
      Sectional mode will make these areas appear very speckled.  In some
      cases, virtually all detail is lost.  The Equal Areas mode can avoid
      this problem.

      4.5.1.4 Assigned  (Alt-F10)

      Mandelbrot Magic also allows you to assign any color to any pixel
      value by pressing F5.  The mechanism for doing this is described in
      detail in Section 4.6.1 -  Assigning Colors.  If you select this
      mode, Mandelbrot Magic will first display the slide using the
      Sectional color mode.  You can then assign colors as you choose.

      Although the Assigned mode requires the most work, it is extremely
      useful precisely because it allows you to assign colors on a point by
      point basis.  Thus, you have complete control over how the slide will
      look.

      4.5.2 Number of Regions (Size of Color Band)

      This parameter controls how many separate color regions will appear
      on the slide.  The maximum number of regions is 99 and the minimum
      number is 1.  Depending upon the Color Mode and the characteristics
      of the slide itself, the actual number of color regions you see at
      any give time may be less than the number you entered.

      In the Cyclic mode, this field is used to input the size of the color
      band rather than the number of regions.  For example, if you enter
      "5" then the color will change every 5 steps.

      4.5.3 Number of Colors

      This parameter selects how many different colors will be used in the
      slide.  The maximum is determined by the graphics mode selected while
      generating the slide.  For the CGA mode, the maximum number of colors
      is 4 while it is 16 in EGA and VGA modes.  






                                      10







      4.5.4 Use Black As Color

      This value controls whether Mandelbrot Magic will use the background
      color (which is black by default but can be changed) in displaying
      the slide.  The background color is ALWAYS used to color the
      Mandelbrot Set or Julia Set itself (i.e. those points which have
      values equal to the maximum number of iterations).  If you set this
      parameter to YES, then the background color will appear in other
      places in the slide as well.  The default value is NO.  The practical
      effect of using black as a color is to insert bands of black into the
      slide.  

      4.5.5 Show Coordinates

      If this parameter is set to YES when displaying a slide, then maximum
      and minimum X and Y coordinates will be shown on the slide.  If it is
      set to YES while creating a slide, then Mandelbrot Magic will also
      display the elapsed time since the slide was started in hours and
      minutes (e.g. 3:17) and the percent of the slide that is complete.

      When you are done viewing the slide, press <Esc> to return to the
      Control Panel (you will be prompted to confirm this step).

      You cannot display a slide with a graphics mode different from the
      one used when it was created.  The mode (and thus the resolution) is
      determined during the creation of the slide.  If you enter a
      different mode, Mandelbrot Magic just ignores the information.

      4.6 CONTROLLING THE SLIDE DISPLAY

      Once you have displayed a slide, you can control many aspects of the
      display.  As discussed above, you can redisplay the slide with a
      different color mode (without returning to the Control Panel) by
      pressing one of the following keys:

      F10           Redisplays the slide using the Equal Areas color mode.

      Ctrl-F10      Redisplays the slide using the Cyclic color mode.

      Shift-F10     Redisplays the slide using the Sectional color mode.

      Alt-F10       Redisplays the slide using the Assigned color mode.

      Prior to redisplaying a slide, you can change the number of regions
      (or width of the colorband with the Cyclic method) without returning
      to the Control Panel by pressing Alt-N.  A data input box will pop up
      on the screen; simply enter the new number and press <Return>.  Press
      <Esc> if you decide not to change this number.

      You can also control the palette by pressing the following keys:

      B or b    Cycles the background color (which is used to color the
                Mandelbrot or Julia Set itself) through all possible
                combinations.




                                      11








      P or p    In EGA or VGA mode, cycles through 10 predefined color
                palettes.  In CGA mode, cycles through four predefined
                palettes.

      Home      Restores the palette to the default values.

      End       In EGA or VGA mode, generates a random palette out of all
                possible colors.  In CGA mode, selects a new background
                color at random.

      Up        "Rotates" the palette upward (i.e. the colors shift toward
                higher pixel values).

      Down      "Rotates" the palette downward (i.e. the colors shift
                toward lower pixel values).

      PgUp      Continuously rotates the palette upward.  This is similar
                to holding the Up Arrow key down continuously.

      PgDn      Continuously rotates the palette downward.  This is similar
                to holding the Down Arrow key down continuously.

      +         Increases the delay between successive rotations of the
                palette when either PgUp or PgDn is pressed.  In other
                words, it slows down the display.  

      -         Decrease the delay between successive rotations of the
                palette when either PgUp or PgDn is pressed.  In other
                words, it speeds up the display.  

      After pressing "+" or "-", you must press PgUp or PgDn again to
      restart the palette rotation.

      4.6.1  Assigning Colors

      When you select the Assigned color mode, Mandelbrot Magic will
      display the slide using the colors you choose.  To make the actual
      color assignments, press F5 while a slide is displayed.  A Color
      Window will appear at the bottom of the slide.  If you press F5 from
      the Control Panel, the slide will first be displayed, then the Color
      Window will appear.  You can also access the Color Window from the
      Palette Window directly by pressing F5 (See following Section).

      The Color Window displays a relative frequency graph for the slide.
      The X axis of the graph shows all of the pixel values from 1 to 250
      (see Section 4.8.7 for a more complete discussion of pixel values). 
      The pixel value is simply the number of iterations required before a
      pixel exceeds the limit for inclusion in either a the Mandelbrot or a
      Julia Set.

      The Y axis of the chart plots the number of pixels in the slide which
      have the corresponding pixel value.  The range of the Y axis is from
      0 to 1.0, where 1.0 represents the maximum number of pixels for any




                                      12







      single pixel value (excluding the limit value).  If there are no
      points with a specific pixel value, then no line is plotted for that
      point.  Note that there is a minimum plot height for any value which
      has a non-zero number of pixels.  Thus, a value with 1 pixel might
      appear to be the same as a value with 100 pixels.  This is done to
      improve the readability of the chart and has little practical impact
      upon the chart.

      At the bottom of the graph is an arrow which points to the current
      pixel value.  You can move the arrow using the following keys:

      Left Arrow    Moves the Arrow one pixel to the left.

      Right Arrow   Moves the arrow one pixel to the right.

      Home          Moves the arrow to the left hand edge of the chart
                    (i.e. a pixel value of 1).

      End           Moves the arrow to the right hand edge of the chart
                    (i.e. a pixel value of 250).

      Once you have selected a specific pixel value, you can change its
      value with the following keys:

      Up Arrow      Increases the color number of that pixel value by 1.
      <Return>
      <Space>
      +

      Down Arrow    Decreases the color number of that pixel value by 1. 
      -

      Finally, you can "paint" adjacent areas of the graph by using the
      Left and Right Arrow keys in combination with the Ctrl Key:

      Ctrl-Right    Moves the Arrow one pixel to the right and "drags" the
                    current color to the new pixel.

      Ctrl-Left     Moves the Arrow one pixel to the left and "drags" the
                    current color to the new pixel.

      Note that this window can only be used to assign colors, not
      palettes.  For example, if you keep pressing the up arrow, you will
      cycle through the 16 current colors in the palette rather than the
      maximum of 64 colors which is available on an EGA or VGA.  You can,
      however, go directly to the Palette Window (see following Section) by
      pressing F6.  You can return to the Color Window by pressing F5.

      Press <Esc> to close the Color Window and return to the slide.

      In addition to assigning colors, the relative frequency graph also
      provides useful information for generating slides.  Specifically, it
      will show you how many pixels were close to the limit on iterations
      for that slide.  If there is a large mass of pixels at the right hand




                                      13







      end of the graph, this suggests that you should use a larger number
      of iterations to reveal more detail.  Conversely, you should use
      fewer iteration (and save time) if most of the points are at the left
      hand side of the graph.

      4.6.2  Changing Palettes

      Although the EGA and VGA adapters can only display 16 colors at a
      time, these colors can be chosen from a total of 64 different colors.
      The current selection of 16 colors out of these 64 options is called
      the current palette.  (In EGA low resolution mode of 640 x 200
      pixels, there are only 16 possible colors.  The current palette can
      thus include all available colors, although this is not mandatory).

      Mandelbrot Magic provides several ways to alter the current palette. 
      Changes to the palette are reflected immediately on the slide.

      You can change the color palette by pressing B, P, Home and End as
      discussed in Section 4.6.  In addition, you can achieve total control
      over the color palette by pressing F6 while a slide is displayed. A
      Palette Window will appear at the top of the slide.  If you press F6
      from the Control Panel, the slide will first be displayed, then the
      Palette Window will appear.  You can also access the Palette Window
      from the Color Window by pressing F6 (see preceding section).

      Please note that because of the CGA's design, you cannot change the
      color palette when displaying a slide generated at CGA resolution
      (even if you have an EGA or VGA).  You can only cycle through the
      four pre-programmed palettes by pressing "P".

      The Palette Window displays 16 color blocks which represent the 16
      current colors in the palette.  The leftmost block shows color number
      0 while the rightmost block shows color 15.  (Color 0 is the
      background color).  Below the color blocks is an arrow which points
      to the current color.  You can move the arrow to select a different
      color by using the following keys:

      Left Arrow    Moves the Arrow one block to the left.

      Right Arrow   Moves the arrow one block to the right.

      Home          Moves the arrow to the first color (0).

      End           Moves the arrow to the last color (15).

      Once you have selected a specific color, you can change its value
      with the following keys: 

      Up Arrow      Increments the current color by 1.
      <Return>
      <Space>
      +

      PgUp          Increments the current color by 8.




                                      14








      Down Arrow    Decrements the current color by 1.
      -

      PgDn          Decrements the current color by 8.

      Mandelbrot Magic's color spectrum does not correspond to the sequence
      of the EGA's default palette or to the octal numbers often used to
      refer to its colors.  All of the available colors are arranged a
      crude, linear spectrum which runs from black to gray to purple to
      blue to green to yellow to red to white.  When you change one of the
      palette colors, you are moving through this linear sequence.  When
      you reach one end, you automatically start over at the other end.
      This spectrum groups all similar colors together and makes it easy to
      find the color you want.

      You can also access the Color Window from the Palette Window by
      pressing F5.  Pressing F6 again returns you to the Palette Window.
      Press <Esc> to return to the slide display.

      4.7 ANIMATING A SLIDE

      Pressing F7 while a slide is displayed "animates" the slide so that
      it is redisplayed continuously.  After each pass, the color "map"
      which Mandelbrot Magic uses to determine the color of each pixel is
      modified.  As a result, different areas of the slide will appear to
      "grow".  This effect is most interesting on fast computers, at lower
      resolutions, and with a relatively small number of color regions
      (less than 8).  It is also interesting to let the animation run for
      an hour or two and check it occasionally since you will see a wide
      range of color assignments.

      You can control the animation with the following keys:

      Up        Animates the slide in the "up" direction, i.e. colors
                move toward higher pixel values.

      Down      Animates the slide in the "down" direction, i.e. colors
                move toward lower pixel values.

      +         Increases the delay between slide displays, thus slowing
                the animation down.

      -         Decreases the delay between slide displays, thus speeding
                the animation up.

      <Esc>     Stops the animation.

      Unless you have an incredibly fast computer, you will almost
      certainly not want to slow down the animation process.  As a default,
      Mandelbrot Magic runs the animation at the fastest possible speed. 
      Finally, when you press <Esc>, the animation stops immediately.  You
      will probably want to redisplay the slide by pressing one of the F10
      key combinations.




                                      15







      4.8  CREATING NEW SLIDES

      This is the heart of Mandelbrot Magic.  Unfortunately, generating a
      slide is an extremely intensive computational task.  Even a CGA-mode
      slide contains 64,000 pixels, each of which must be calculated
      independently.  A VGA-mode slide contains over 300,000 pixels! 
      Furthermore, the calculations required to produce a slide utilize
      floating point arithmetic which greatly increases the computation
      time.  It can take up to 25 hours to generate a reasonably complex
      slide on a standard IBM PC without a math coprocessor.

      There are two ways to minimize the inconvenience of long processing
      times.  First, you can create the slides at night or during some
      other time when you do not need your computer, then display them at a
      later time.  Alternatively, you can register for Mandelbrot Magic and
      get a copy of BackMAGIC, our memory resident program that generates
      slides in the background while you use your computer for other
      purposes.  

      (Note: Mandelbrot Magic, like many graphics programs, is incompatible
      with many screen blankers.  Once the screen is blanked, your system
      may freeze.  This is generally not a problem while viewing a slide
      since you will probably press a key often enough to keep the screen
      blanker from clearing the screen.  It is a problem while generating 
      slides, however, so you should deactivate any screen blanker while
      creating a slide).  

      You can create a new slide by entering the following parameters, then
      pressing F8 or Alt-F8 (See Section 4.8.10):

      4.8.1  File/Pathname

      This is simply the name of the file which will store the values used
      in the slide.  Any DOS-acceptable filename can be used and you can
      use any extension.  If you want to store the slide in a directory/
      disk different from the current disk/directory, simply enter the
      complete pathname (i.e. a:\fractals\slide1.pic). 

      4.8.2  Slide Type

      There are two different Slide Types: Mandelbrot and Julia Set.  Press
      the <Space> bar to toggle between these two values.

      4.8.3  Compressed

      Since Mandelbrot Magic must store a separate value for each pixel in
      the slide, the slide files can become quite large.  For example, a
      VGA mode slide (640 by 480 pixels) uses over 307 K of disk space. If
      you want, Mandelbrot Magic will automatically compress this data as
      it generates the slide.  Press <Space> to select the option you want.

      You can typically reduce the size of the file by 40 to 70 percent. 
      In addition, compressed files often load faster than uncompressed
      files.   Once you set this parameter, you cannot change the type of




                                         16







      the slide file.  Once a slide is compressed, it must remain
      compressed and vice versa.

      Mandelbrot Magic uses a proprietary data compression scheme tailored
      to the unique characteristics of its slide files.  You can also use a
      commerical data compression program to compress a slide files (even
      if it is already compressed using Mandelbrot Magic).  If you use a
      standalone compression program, you must first decompress the file
      before you can load it into Mandelbrot Magic.

      4.8.4  X (Real) and Y (Imaginary)

      The maximum and minimum values for X and Y determine the part of the
      Mandelbrot or Julia Set which will be displayed on the slide.  As
      discussed in Section 3, X refers to the real component of the complex
      number plane and Y refers to the imaginary component of the complex
      number plan.  

      The maximum acceptable value is 9.9999... while the minimum value is
      -9.9999....  The entire Mandelbrot Set lies within the range of X
      equals -2.5 to 1.0 and Y equals -1.5 to 1.5.  These are essentially
      the default values for the program which appear when you first start
      Mandelbrot Magic.  Similary, the range of X equals -2.0 to 2.0 and Y
      equals -1.5 to 1.5 will usually display all of a Julia Set. 
      Mandelbrot Magic provides a way to enter these values automatically
      (See Section 4.10).

      When you enter values for X and Y, the difference between the maximum
      and minimum values will be displayed on the Control Panel.  This is
      designed as an aid to help you enter appropriate values.

      Mandelbrot Magic also provides two other functions to aid in the
      selection of proper X and Y parameters.  These are the Zoom function
      (See Section 4.4.9) and the Calculate Parameters function (See
      Section 4.10).

      4.8.5 C Value (Julia)

      If you want to create a slide of a Julia Set, you must also enter a
      seed value (C) for the Set.  This seed value has both a real (X) and
      imaginary (Y) component since it represents a point in the complex
      number plane.  When creating a Mandelbrot Set slide, Mandelbrot Magic
      ignores these parameters.

      4.8.6 Slide Size

      Mandelbrot Magic usually creates a slide which fills the entire
      display screen.  You can create smaller slides by changing the X and
      Y dimensions of the slide.  To change the slide size, enter the size
      of each dimension (in percent) in the appropriate field.  Do not
      enter the number of pixels; Mandelbrot Magic automatically determines
      how many pixels will be in the slide.  The values you enter for X and
      Y cannot be used to set the slide size; Mandelbrot Magic always uses
      the slide size parameters to set slide size and then automatically




                                         17







      centers the area which you specified with the X and Y values in the
      middle of the slide.

      Why would you want to make a slide that didn't fill the entire
      screen?  A smaller slide takes less time to calculate, which can be
      handy when you are just looking for interesting areas.  Or you might
      want to create a small slide first to verify that all your other
      parameters are correct before generating a full size slide.  Or you
      might want to focus on a particular feature in a Set which has a much
      different aspect ratio than your screen.

      4.8.7 Number of Iterations

      As discussed in Section 3, points lie in the Mandelbrot set or a
      Julia set only if their "size" does not exceed a preset limit after a
      certain number of iterations.  This data field determines how many
      times the program will perform the mathematical process described in
      Section 3.

      The maximum number of iterations is the default value of 1000.  This
      is a rather arbitrary number; theoretically, the calculation should
      be performed an infinite number of times.  This is impractical,
      however, and using a smaller number can cut processing time
      significantly.  This is especially important if large sections of
      your slide are in the Set.  We recommend that you start with an
      iteration count of 100 and increase it only as warranted.

      Although a small number of iterations can increase processing time
      significantly, a value which is too small creates other problems. 
      Specifically, many points which are not actually in the Set will be
      treated as though they are in the Set.  If there are too many such
      points, the resolution of the slide deteriorates and you begin to
      lose features.  

      There are two easy ways to tell if you are using too few iterations. 
      First, there will be more black areas (i.e. points that are in the
      Set) on the slide than you would expect.  Second, you can view the
      relative frequency graph in the Colors Window (see Section 4.6.1). 
      If most of the pixels are near the right hand side of the graph, you
      probably need to increase the number of iterations.

      Although Mandelbrot Magic can calculate up to 1000 iterations, 
      Mandelbrot Magic does not store values higher than 250.  It
      automatically scales the resulting pixel values (1 to 1000) into the
      range of 1 to 250.  For example, if you use 750 iterations, all of
      the resulting pixel values will be divided by 3 before they are
      stored.  In practice, you shouldn't notice the scaling if you choose
      the number of iterations wisely.  For example, you should not choose
      iteration values which are slightly higher than 250, 500 or 750 since
      these are the scaling cutoffs and you will lose a lot of resolution.








                                         18







      4.8.8 Graphics Mode

      Mandelbrot Magic supports five different graphics mode as discussed
      in Section 2.  To select one of these modes, highlight this field on
      the Control Panel and press the <Space> bar repeatedly until you see
      that mode.  Once a slide is generated, its graphics mode cannot be
      changed.  When it is displayed, it will automatically be displayed in
      the proper mode.

      4.8.9 Show Coordinates

      When this parameter is toggled to YES, the X and Y coordinates for
      the slide will be displayed.  During generation, the elapsed time and
      the percentage of slide saved to disk will also be displayed after
      each column of pixels is displayed.  Unfortunately, there is no
      direct correlation between the elapsed time, the percentage of pixels
      already calculated, and the total generation time.  

      When you press F8 after entering the preceding parameters, Mandelbrot
      Magic verifies that your computer supports the graphics mode
      selected, that there is sufficient RAM to generate the slide, that
      the file does not already exist, and that there is sufficient disk
      space to store the slide.  Since Mandelbrot Magic cannot determine
      how large a compressed slide file will be in advance, it assumes that
      the slide file will not be compressed when it checks for disk space.

      As Mandelbrot Magic generates a slide, it displays each pixel as it
      finishes calculating that pixel.  You can therefore see the status of
      the slide at any time.  The slide will originally be displayed with
      an arbitrary color mapping.  Depending on the area you are viewing,
      this original display may not be particularly appealing.

      Mandelbrot Magic also takes advantage of certain symmetries in the
      Mandelbrot and Julia Sets to reduce the calculation time. 
      Consequently, certain parts of a slide may be displayed almost
      instantaneously.

      When a slide is finished, you can return to the Control Panel by
      pressing <Esc> or you can display the slide immediately by pressing
      one of the F10 combination keys.  You cannot utilize any of the
      display functions until you redisplay the slide.

      Mandelbrot Magic allows you to stop generating a slide at any time by
      pressing <Esc>.  You will be asked to confirm that you want to quit. 
      When you halt a slide, only the data for current column is lost and
      you can restart the slide at a later time.

      If you want Mandelbrot Magic to work on a partially completed slide,
      simply load that slide file (by entering the filename and pressing
      F9), then press F8.  Mandelbrot Magic will restore all of the
      parameters used when you started the slide and will start generating
      the slide where it stopped.






                                         19







      A number of incomplete slide files are included with this program. 
      These files all have the extension ".PIC".  To complete them, simply
      enter their names, press F9 to load, then press F8.

      4.8.10 The Grid Method

      With Version 3.1, we have implemented a new slide generation
      algorithm which can GREATLY reduce calculation times, especially if
      you do not have a math coprocessor.  This algorithm is based upon the
      following concept:  If you enclose an area of a slide with points
      have the same iteration value, then every point within that area has
      the same value.  Although we do not know if this has been proved
      mathematically yet, it makes sense intuitively and it generates
      slides correctly (at least during our tests).

      The new algorithm works by overlaying a series of successively
      smaller grids on the slide.  After each grid is produced, each square
      of the grid is check to see if all the points on its perimeter are
      equal.  If so, then the entire square is filled with that value. 
      When the last grid is produced, Mandelbrot Magic starts generating
      the slide with the normal algorithm.

      This method can substantially reduce the time required to produce a
      slide.  Furthermore, the time savings are exponential; the longer it
      takes to produce a slide, the greater the percentage savings.  Our
      tests indicate that this method does not save much time on slides
      which can be generated in less than 20 minutes (on an XT with an
      8087).  On most slides, the new method saves 20 to 40 percent.  On
      really complex slides, the savings can be astounding.  One slide
      which took 27 hours to produce (with an 8087) with the standard
      method took just 5 hours with the new method!  Likewise, the savings
      when NOT using an 8087 are impressive (often 50 to 80 percent).

      To use this grid method, create the slide by pressing Alt-F8.  To
      bypass the new method and create a slide with the normal algorithm,
      just press F8.  If you want to stop a slide, press ESC.  If you are
      using the new method, Mandelbrot Magic will start generating the
      slide with the old method.  Press ESC again if you want to stop the
      slide entirely and return to the Control Panel.  Note that the two
      methods are interchangeable -- you can start a slide with one method,
      stop it, then resume calculation with the other method.

      There is one disadvantage to this new method.  Mandelbrot Magic does
      not save any of the slide data to disk while it is using the new
      method.  No data is saved until the grid process is completed and
      Mandelbrot Magic starts generating the slide one row at a time.   The
      percent complete indicator on the screen represents the percentage of
      the slide which has been saved to disk, not the percentage that has
      been calculated.  Consequently, you should probably not use this new
      method if you know that you will not be able to finish the slide or
      at least complete a large part of it.







                                         20







      4.9  ZOOMING IN ON A SLIDE

      The best part of using Mandelbrot Magic is simply exploring the
      various sets.  When you display a Set at large scale, you will
      invariably see an area of the slide that you would like to "zoom" in
      on or enlarge.  Mandelbrot Magic provides a very convenient way to do
      this via its Zoom function.

      The Zoom function is invoked by pressing F1 whenever you see a slide
      or from the Control Panel (in which case the slide will first be
      displayed).  When F1 is pressed, a cursor appears in the middle of
      the slide.  With certain color combinations, the cursor does not
      stand out too well, but it is there.  To use the Zoom function, you
      move the cursor to one corner of the area you want to enlarge, and
      press <Return> to select that location as one corner of the area.

      When you move the cursor again, a "rubberband" Zoom box appears.  
      You can stretch this box with the arrow keys to enclose exactly the
      area you want to enlarge, then press <Return> again to select the
      area within the box for zooming.  After you have selected one corner
      of the zoom box, you can make any other corner of the box the
      "active" corner by pressing Home, End, PgUp or PgDn.  For example,
      pressing Home makes the upper-left corner of the box the active
      corner.  Pressing the arrow keys will move this corner.

      The following keys move the cursor:

      Arrow Keys           Moves the cursor one pixel in the appropriate
                           direction.

      Shift-Arrow Keys     Moves the cursor twenty (20) pixels (10 in CGA
                           mode) in the appropriate direction.  

      Home                 When the crosshair cursor is displayed, these  
      End                  keys move the cursor to the corresponding corner
      PgUp                 of the slide (e.g. Home moves to upper-left 
      PgDn                 corner).  When a zoom box is displayed, these
                           keys make the corresponding corner of the zoom
                           box the "active" corner.

      If you decide you would rather zoom in on different area of the
      slide, repeat the process.  Press <Esc> to cancel the zoom function.

      As you move the cursor around the slide, you will notice a number on
      the left hand side of the screen.  This number is simply the value of
      the pixel which is at the center of the cursor.  Thus, the Zoom
      function can also be used simply to understand the slide better.

      If you want to generate a slide of the zoom area, simply return to
      the Control Panel, supply a new filename and other appropriate
      parameters, then press F8 or Alt-F8 to create the slide.  You do not
      need to worry about whether the area you selected with the Zoom
      function fits the slide size.  Mandelbrot Magic automatically centers
      the area you selected within the new slide and calculates appropriate




                                         21







      X and Y values so you never lose any of the Zoom area.

      The Zoom function can also be used to select C values for generating
      Julia Sets.  When you are zooming in on a slide of the Mandelbrot
      Set, the first location you select with the cursor is also used as
      the C value on the Control Panel.

      The value of C has a significant impact upon the shape and complexity
      of the corresponding Julia Set.  The most interesting Julia Sets are
      generated when you select a C value which is very near the edge of
      the Mandelbrot Set.  Thus, you can display a slide of the Mandelbrot
      Set, select a C value with the Zoom function, then return to the
      Control Panel and generate a slide of a Julia Set which uses that C
      value.  However, the X and Y parameters selected off of the
      Mandelbrot Set slide will almost certainly be inappropriate for the
      Julia Set slide.  The Calculate Parameters function (see next
      section) can help with this problem.

      4.10 CALCULATING PARAMETERS

      After slide generation time, the biggest headache in producing slides
      is entering accurate X and Y values.  The Zoom function, along with
      Mandelbrot Magic's ability to automatically center a zoom area within
      a new slide, can minimize this problem.  

      However, there will be times when you need help with calculating 
      parameters and Mandelbrot Magic provides that help via the F2 key.  
      The Calculate Parameters function is used by highlighting a specific
      field on the Control Panel, then pressing F2. The result varies with
      the location of the cursor.

      If one of the X or Y values is highlighted, Mandelbrot Magic will
      automatically recalculate that value using the three other X and Y
      values as well as the slide size parameters.

      If one of the slide size fields is highlighted, Mandelbrot Magic will
      automatically calculate the correct slide size using the maximum and
      minimum X and Y values already entered.  This allows you to have a
      slide contain just the area which you selected with the Zoom
      function.  Although the program first tries to adjust the highlighted
      parameter, it will sometimes adjust both slide dimensions if
      necessary to fit the X and Y values which were entered.

      If the Type of Slide field is highlighted, pressing the F2 key will
      reset the X and Y parameters to the default values for that type of
      slide (Mandelbrot or Julia).  The default values will produce a slide
      which contains the entire set.  This is especially useful when
      generating a slide of a new Julia Set for the first time.

      4.11  CREATING A SLIDESHOW

      With Mandelbrot Magic, you can create a "slideshow" of up to 20
      existing slides.  If you press F3, you will be prompted for the name
      of the slideshow file.  This can be any DOS-acceptable file/pathname.




                                         22








      When you enter a filename and press <Return>, Mandelbrot Magic first
      checks to see if this file already exists.  If it does, that file
      will be loaded so you can edit it.  Otherwise, a new slideshow file
      is created.

      A new screen appears which is used to enter the names of up to 20
      existing slide files.  In addition to the filename, enter the other
      parameters which you want to be used when the slide is displayed such
      as number of color regions, number of colors, the color mode, and
      whether you want to use black as a color.  You may use the arrow keys
      to move around the input screen.  The Home, End, PgUp and PgDn keys
      also move the cursor around the screen.

      When you are done entering data, press <Esc> to return to the Control
      Panel.  The updated/new slideshow will automatically be stored in the
      slideshow file.  You can then run the slideshow at any time in the
      future by pressing the F4 function key.

      Three sample slideshows are included with this program.  These
      slideshows have the name "DEMO.*" where "*" is either CGA, E64, or
      EGA (for the applicable adapters).  You can run these slideshows
      directly.  However, some of the slides included in the slideshows
      have not been finished yet.  If you run the slideshow with an
      incomplete slide, Mandelbrot Magic will not load the slide and will
      sound a beep.

      4.12 PRESENTING A SLIDESHOW

      Pressing the F4 function key presents a previously created slideshow.
      When you press F4, you will be prompted for the name of the slideshow
      file you want to present.  If the file exists, the program will then
      load and display the first slide listed in the slideshow file.

      This slide will originally be displayed using the parameters stored
      for it in the slideshow file.  Once displayed, however, you can
      manipulate colors and palettes freely or redisplay the slide using
      one of the F10 key combinations (F10, Ctrl-F10, Alt-F10, Shift-F10). 
      In short, you can do anything you can do when you display a single
      slide.

      When you are finished with a slide, press <Esc> to load and view the
      next slide immediately.  Mandelbrot Magic will ask you to confirm
      that you want to advance before it destroys the current slide. 
      Continue advancing through the slideshow until it is complete.  When
      the slideshow is finished, you will be returned to the main screen.

      You can also end the slideshow and return to the main screen at any
      time by pressing Alt-Q.

      If Mandelbrot Magic cannot load one of the slide files, the program
      will sound a beep.  Simply press <Esc> to continue.






                                         23







      4.13 QUITTING

      You can only quit Mandelbrot Magic from the main Control Panel.  If
      you press <Esc>, you will exit from the program and return to DOS.
      You will be asked to confirm that you do, in fact, want to quit. 

      If you want to quit while a slide is displayed, first return to the
      Control Panel by pressing <Esc> and confirming that you want to end
      the display.   Then press <Esc> again.

      4.14 PRINTING SLIDES

      Mandelbrot Magic currently has no built-in capability to print copies
      of a slide.  However, a rudimentary printout can be obtained of
      slides by using the GRAPHICS.COM program provided with DOS.  This
      program can be loaded as part of your AUTOEXEC.BAT file.  Once
      loaded, slides can be printed by pressing <SHIFT> and <Prt Sc>
      simultaneously.  

      The GRAPHICS.COM program supplied as part of DOS 4.x will produce
      printouts of slides in any graphics mode (CGA, EGA, VGA).  Earlier
      versions of GRAPHICS.COM do not work with EGA or VGA mode slides and
      will only produce printouts of CGA mode slides.

      The DOS 4.x version of GRAPHICS.COM does not normally work with
      earlier versions of DOS.  This is a problem for users who purchased
      DOS 4.x but have decided (for whatever reason) not to use it. 
      However, you can allegedly patch the new version of GRAPHICS.COM so
      it will work with earlier DOS versions.  See PC Magazine, April 25,
      1989, page 315 for details.  Left Coast has not tested this patch and
      assumes no responsibility for the results if you try it.



























                                         24








                           SUGGESTED SLIDE PARAMETERS

      Almost any part of the Mandelbrot or Julia Sets can produce
      innumerable interesting slides.  As you explore these sets, you will
      undoubtedly discover areas that interest you and merit further
      exploration.  The Sets are so complicated and Mandelbrot Magic can
      zoom in so close that in all probability, you'll soon be looking at a
      part of the set that literally no one else has discovered.  However,
      here are some parameters for interesting areas to explore.  

      Depending upon how you obtained Mandelbrot Magic, slide files for all
      or some of these combinations of parameters may be included with the
      program.  Many of the slides have been started but are not complete. 
      To complete a slide, enter its name, press F9 to load the file, then
      press F8 to complete the slide.  The actual parameters for a specific
      slide may vary from those listed below because of Mandelbrot Magic's
      automatic centering algorithms.

      Most of the slide files distributed with the program are for EGA
      adapters/modes.  To create slides for different graphics modes, load
      the appropriate file, give the file a new name, change the
      appropriate parameters, then press F8 to create a new slide.

      MANDELBROT SETS

      The first set of parameters will display the entire Mandelbrot Set.

      Name        X (Minimum)     X (Maximum)    Y (Maximum)    Y (Minimum)
      =====================================================================

      M1.PIC      -2.00000000     0.50000000     1.25000000     -1.25000000 

      M2.PIC      -0.25000000     0.05000000     1.10000000      0.80000000 

      M3.PIC      -0.17500000    -0.14500000     1.05000000      1.02000000 

      M4.PIC      -1.25800000    -1.24850000     0.03000000      0.02050000 

      M5.PIC      -0.95000000    -0.88333000     0.30000000      0.23333000 

      M6.PIC      -0.71300000    -0.40820000     0.71429000      0.40949000 

      M7.PIC      -0.75104000    -0.74080000     0.11536000      0.10511000 

      M8.PIC      -0.74553800    -0.74505400     0.11323600      0.11275200 

      M9.PIC      -0.74543560    -0.74542150     0.11301390      0.11299980 

      M10.PIC     -1.25402400    -1.25286100     0.04712500      0.04596200 








                                         25







      JULIA SETS

      This list shows the C values for interesting Julia Sets.  To display
      an entire set, use the following values for X and Y. To enter these
      values automatically, highlight the Type of Slide field and press F2.

                                X        Y
                               ----    -----

                    Minimum:   -2.0    -1.50       

                    Maximum:    2.0     1.5


                                          C VALUES
                                   ----------------------------

                       Name            X                Y
                       =======================================

                       J1.PIC     0.27334000        0.00742000

                       J2.PIC    -1.25000000        0.00000000

                       J3.PIC    -0.11000000        0.65570000

                       J4.PIC     0.11031000       -0.67037000

                       J5.PIC    -0.19400000        0.65570000

                       J6.PIC    -0.15652000        1.03225000

                       J7.PIC    -0.74543000        0.11301000

                       J8.PIC     0.32000000        0.04300000

                       J9.PIC    -0.12375000        0.56508000

                       J10.PIC   -0.39054000        0.58679000

                       J11.PIC   -0.11000000        0.67000000

















                                         26








                                CUSTOMER SERVICE 

      Left Coast provides free technical support for Mandelbrot Magic.  If
      you require technical support, please call us at (408) 996-3130
      between 9:00 A.M. and 5:00 P.M. Pacific time (12:00 Noon to 8:00 P.M.
      Eastern time).  You may also write us at:

              Left Coast Software 
              P.O. Box 160601 
              Cupertino, CA 95016-0601

      You may also send us a message on CompuServe (71160,756).  It may
      take us a several days to respond to CompuServe messages.

      You may obtain the most recent version of the program from 
      CompuServe, the Source, or GEnie.  New versions are uploaded to these
      services almost immediately after their release.  

      The next major change to Mandelbrot Magic is not scheduled until
      early 1990.  The major anticipated change in the program will be
      support for the Super VGA mode (assuming it does become a standard)
      and other extended EGA and VGA modes.

      We thank you for supporting Mandelbrot Magic. If you have suggestions
      for how to improve the program, please write us.  We love hearing
      from our customers.































                                         27








      OTHER LEFT COAST PROGRAMS

      Left Coast Software sells other two popular programs for the PC --
      Exchequer and PC-Areacode.  We also distribute copies of BackMAGIC to
      registered users of Mandelbrot Magic.  To order any Left Coast
      product, call 408-996-3130 or use the order form on the next page. 
      We accept VISA and MasterCard.  

      EXCHEQUER (Version 2.05)

      Exchequer is an easy-to-use check writing and checkbook management
      program for IBM PC-compatible computers.  It is designed primarily
      for home users and small businesses wishing to automate and simplify
      the process of paying their bills.  In addition, it provides a number
      of reporting options.  For example, it allows the user to sort and
      print checkbook data by category or by payee.

      Exchequer provides the following features and functions:

      *  Exchequer can pay all of your regular monthly bills with as few as
         two keystrokes!

      *  Exchequer's check register looks and works just like a regular
         checkbook register.

      *  Exchequer makes balancing your checkbook easy by automatically
         finding all uncleared checks and deposits.

      *  Exchequer works with virtually all types of continuous-feed
         checks.  The user has complete control over the check layout.

      *  Exchequer supports an unlimited number of accounts.

      *  Exchequer's check register can store over 4000 transactions.  An
         archiving function saves the oldest transactions to a separate
         file (e.g. at year's end), thus making room for more transactions.

      *  Exchequer can memorize all up to 255 predefined transactions
         (checks, withdrawals, deposits, service charges, etc.)  These
         transactions can be easily recalled and used when paying bills.

      *  Exchequer can assign a transaction to 255 user-defined categories.
         Reporting functions allow the user to sort the check register by
         category, making tax preparation a breeze!

      *  Exchequer can split any transaction amount up to 10 ways and
         assign it to separate categories.

      *  Exchequer offers a wide variety of reports which facilitate record
         keeping and expense analysis.  Reports can be sent to the printer,
         the screen or to a file.






                                         28







      Exchequer runs on any IBM PC, XT, AT or PS/2 compatible computer
      running MS-DOS or PC-DOS Version 2.0 or higher.  It works with any
      graphics adapter.  Exchequer requires approximately 200 K of
      available memory (after installation of any memory-resident
      programs).  Exchequer can be operated quite easily with just one
      floppy-disk drive.  The program will work with any printer which
      handles continuous-feed checks. 

      Exchequer is just $49.95 plus $3.00 shipping and handling. 
      California residents please add sales tax.

      PC-AREACODE

      PC-Areacode is a useful utility program which can find the areacode
      for virtually any city in the U.S. and Canada in less than two
      seconds on a 4.77 Mhz PC and a floppy drive.  It contains almost
      15,000 city names in its built-in database.  You can either browse
      through the cities in its database or type in the name of a city you
      want to locate.  You can even type in an areacode and PC-Areacode
      will tell you what state it serves.  PC-Areacode can run as either a
      standalone program or as a memory-resident utility.

      PC-Areacode runs on any IBM PC, XT, AT or PS/2 compatible computer
      running DOS 2.0 or higher.  PC-Areacode is just $49.95 plus $3.00
      shipping and handling.  California residents please add sales tax.

      BackMAGIC

      BackMAGIC is a memory resident program which can be used to calculate
      fractal images for viewing with Mandelbrot Magic in the background
      while you run other programs on your computer.  BackMAGIC solves the
      major problem encountered when exploring the Mandelbrot and Julia
      Sets -- the long calculation times required to generate images.
      BackMAGIC is compatible with virtually all other standalone and
      memory resident programs.

      Unlike Mandelbrot Magic, BackMAGIC does not require a specific
      graphics adapter.  BackMAGIC will work with any video adapter,
      including all monochrome adapters.  Thus, you can generate slides on
      virtually any machine for later viewing on the machine of your
      choice.

      BackMAGIC is a complementary program to Mandelbrot Magic and you must
      have a copy of Mandelbrot Magic to use BackMAGIC.  Although
      Mandelbrot Magic is a shareware program, BackMAGIC is not a shareware
      program.  The only way to get a legal copy of BackMAGIC is to
      register as a user of Mandelbrot Magic.











                                         29







                            ORDER/REGISTRATION FORM 

      If you want to register for Mandelbrot Magic, simply order the appro-
      priate number of copies of the program. You may also order/register
      by phone by calling (408) 996-3130.  

       Ship to:                          Bill to (if different): 

          _________________________          ___________________________ 

          _________________________          ___________________________ 

          _________________________          ___________________________ 

          _________________________          ___________________________ 

       Payment Method (please circle one):   VISA    MC    Check     COD   

       Credit Card Number:_________________     Expiration Date: _______ 

       Name on card (if different): ____________________________________ 

       Signature (if using credit card): _______________________________ 

       PLEASE SHIP ME THE FOLLOWING: 

       _____ copies of Mandelbrot Magic at $15.00 = ____________________ 
             (includes BackMAGIC)

       _____ copies of Exchequer at $49.95        = ____________________ 

       _____ copies of PC-Areacode at $49.95      = ____________________ 

       California Residents Add Sales Tax = ____________________________ 

            Shipping/Handling (per order)                     3.00 

       Add $11.00 for Federal Express       ____________________________ 

                                   TOTAL:   ____________________________ 

       Send form to:
                Left Coast Software
                P.O. Box 160601
                Cupertino, CA 95016-0601













                                         30








                               COMMAND SUMMARY

      Commands available at the Control Panel level are flush left.
      Available sub-commands for each major command are indented.

      +------------------------------------------------------------------+
      |                                                                  |
      |   F1                      Selects a ZOOM area (or C Value).      |
      |                                                                  |
      |        Arrow Keys         Move the cursor/corner 1 pixel.        |
      |                                                                  |
      |        Shift-Arrow Keys   Move the cursor/corner 20 pixels.      |
      |                                                                  |
      |        <Return>           Sets current location as corner of     |
      |                           zoom box.                              |
      |                                                                  |
      |        <Esc>              Cancels the zoom function.             |
      |                                                                  |
      |        Home               When the crosshair cursor is           |
      |        End                displayed, these keys move the cursor  |
      |        PgUp               to the corresponding corner of the     |
      |        PgDn               slide (e.g. Home moves to upper-left   |
      |                           corner).  When a zoom box is           |
      |                           displayed, these keys make the         |
      |                           corresponding corner of the zoom box   |
      |                           the "active" corner.                   |
      |                                                                  |
      +------------------------------------------------------------------+
      |                                                                  |
      |   F2                      CALCULATES parameters                  |
      |                                                                  |
      +------------------------------------------------------------------+
      |                                                                  |
      |   F3                      CREATES (or edits) a slideshow file    |
      |                                                                  |
      |        Arrow Keys         Move cursor one column or row.         |
      |                                                                  |
      |        Home               Moves cursor to upper lefthand field.  |
      |                                                                  |
      |        End                Moves cursor to lower righthand field. |
      |                                                                  |
      |        PgUp               Moves cursor to top row of column.     |
      |                                                                  |
      |        PgDn               Moves cursor to bottom row of column.  |
      |                                                                  |
      |        <Return>           Advances cursor.                       |
      |                                                                  |
      |        <Backspace>        Deletes last character in data field.  |
      |                                                                  |
      |        <Esc>              Saves the slideshow file.              |
      |                                                                  |
      +------------------------------------------------------------------+





                                         31








      +------------------------------------------------------------------+
      |                                                                  |
      |   F4                      PRESENTS an existing slideshow file.   |
      |                                                                  |
      |                           All display commands are active.       |
      |                                                                  |
      |        Alt-Q              Cancels the slideshow and returns to   |
      |                           Control Panel.                         |
      |                                                                  |
      +------------------------------------------------------------------+
      |                                                                  |
      |   F5                      Activates COLORS Window                |
      |                                                                  |
      |        Left Arrow         Move the arrow one space left.         |
      |                                                                  |
      |        Right Arrow        Moves the arrow one space right.       |
      |                                                                  |
      |        Home               Moves the arrow to far left edge.      |
      |                                                                  |
      |        End                Moves the arrow to far right edge.     |
      |                                                                  |
      |        Up Arrow           Increases the color number of current  |
      |        <Return>           pixel value by 1.                      |
      |        <Space>,'+'                                               |
      |                                                                  |
      |        Down Arrow         Decreases the color number of current  |
      |        -                  pixel value by 1.                      |
      |                                                                  |
      |        Ctrl-Right         Drags the current color to the right.  |
      |                                                                  |
      |        Ctrl-Left          Drags the current color to the left.   |
      |                                                                  |
      |        F6                 Activates Palette Window.              |
      |                                                                  |
      |        <Esc>              Closes the Colors Window.              |
      |                                                                  |
      +------------------------------------------------------------------+
      |                                                                  |
      |   F6                      Activates PALETTE Window               |
      |                                                                  |
      |        Left Arrow         Moves the arrow one block left.        |
      |                                                                  |
      |        Right Arrow        Moves the arrow one block right.       |
      |                                                                  |
      |        Home               Moves the arrow to the first color.    |
      |                                                                  |
      |        End                Moves the arrow to the last color.     |
      |                                                                  |
      |        Up Arrow           Increments the current color by 1.     |
      |        <Return>                                                  |
      |        <Space>,'+'                                               |
      |                                                                  |
      +------------------------------------------------------------------+




                                         32








      +------------------------------------------------------------------+
      |                                                                  |
      |   F6 (continued)                                                 |
      |                                                                  |
      |        PgUp               Increments the current color by 8.     |
      |                                                                  |
      |        Down Arrow         Decrements the current color by 1.     |
      |        -                                                         |
      |                                                                  |
      |        PgDn               Decrements the current color by 8.     |
      |                                                                  |
      |        P,p                Cycles through predefined Palettes.    |
      |                                                                  |
      |        F5                 Actives COLORS Window.                 |
      |                                                                  |
      |        <Esc>              Closes PALETTE Window.                 |
      |                                                                  |
      +------------------------------------------------------------------+
      |                                                                  |
      |   F7                      ANIMATES an existing slide             |
      |                                                                  |
      |        Up Arrow           Animates the slide in up direction.    |
      |                                                                  |
      |        Down Arrow         Animates the slide in down direction.  |
      |                                                                  |
      |        +                  Increases the delay between displays.  |
      |                                                                  |
      |        -                  Decreases the delay between displays.  |
      |                                                                  |
      |        <Esc>              Stops the animation.                   |
      |                                                                  |
      +------------------------------------------------------------------+
      |                                                                  |
      |   F8                      CREATES a new slide                    |
      |                                                                  |
      |        <Esc>              Cancels slide generation process.      |
      |                                                                  |
      |   Alt-F8                  CREATES a new slide using the Grid     |
      |                           Method.                                |
      |                                                                  |
      |        <Esc>              Cancels the Grid Method.               |
      |                                                                  |
      +------------------------------------------------------------------+
      |                                                                  |
      |   F9                      LOADS an existing slide                |
      |                                                                  |
      +------------------------------------------------------------------+










                                         33








      +------------------------------------------------------------------+
      |                                                                  |
      |   F10                     DISPLAYS an existing slide             |
      |                                                                  |
      |        F1                 Activates ZOOM function.               |
      |                                                                  |
      |        F5                 Activates COLORS Window.               |
      |                                                                  |
      |        F6                 Activates PALETTE Window.              |
      |                                                                  |
      |        F7                 Animates the slide.                    |
      |                                                                  |
      |        F10                Redisplays using Equal Areas mode.     |
      |                                                                  |
      |        Ctrl-F10           Redisplays using Cyclic mode.          |
      |                                                                  |
      |        Shift-F10          Redisplays using Sectional mode.       |
      |                                                                  |
      |        Alt-F10            Redisplays using Assigned mode.        |
      |                                                                  |
      |        Alt-N              Pops up input window to change         |
      |                           Number of Color Regions.               |
      |                                                                  |
      |        P or p             Cycles through predefined palettes.    |
      |                                                                  |
      |        Home               Restores the default palette.          |
      |                                                                  |
      |        End                Generates random palette.              |
      |                                                                  |
      |        Up                 Rotates the palette upward.            |
      |                                                                  |
      |        Down               Rotates the palette downward.          |
      |                                                                  |
      |        PgUp               Continuously rotates palette upward.   |
      |                                                                  |
      |        PgDn               Continuously rotates palette downward. |
      |                                                                  |
      |        +                  Increases the delay between            |
      |                           successive rotations of palette.       |
      |                                                                  |
      |        -                  Decreases the delay between            |
      |                           successive rotations of palette.       |
      |                                                                  |
      |        <Esc>              Cancels the display and returns to     |
      |                           Control Panel.                         |
      |                                                                  |
      +------------------------------------------------------------------+
      |                                                                  |
      |   <Esc>                   Exits Mandelbrot Magic and returns to  |
      |                           DOS.                                   |
      |                                                                  |
      +------------------------------------------------------------------+





                                         34

































































                                         35

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0841

     Volume in drive A has no label
     Directory of A:\

    CHANGES  !!!     12747   5-30-89  12:36p
    GO       BAT        38   7-08-87  12:19a
    J1       PIC      1260   5-30-89  12:36p
    J1_CGA   PIC      1260   5-30-89  12:36p
    J2       PIC      1260   5-30-89  12:36p
    J3       PIC      1260   5-30-89  12:36p
    J4       PIC      1260   5-30-89  12:36p
    J5       PIC      1260   5-30-89  12:36p
    J5_CGA   PIC      1260   5-30-89  12:36p
    M1_CGA   PIC     13974   5-30-89  12:36p
    M1_EGA   PIC     32016   5-30-89  12:36p
    M2       PIC      1260   5-30-89  12:36p
    M3       PIC      1260   5-30-89  12:36p
    M4       PIC      1260   5-30-89  12:36p
    M7       PIC      1260   5-30-89  12:36p
    MM       DOC    104594   5-30-89  12:36p
    MM       EXE    100224   5-30-89  12:36p
    PRINTDOC BAT       527   5-30-89  12:36p
    FILE0841 TXT      1443   7-14-89  10:54a
    GO       TXT       617   1-04-80  12:24a
           20 file(s)     280040 bytes
                           28672 bytes free
