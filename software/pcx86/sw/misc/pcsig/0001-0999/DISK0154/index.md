---
layout: page
title: "PC-SIG Diskette Library (Disk #154)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0154/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0154"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PRINTER ART"

    This PRINTER ART package is a collection of ASCII text files, that when
    sent to your printer, create many wondrous sights such as a clown,
    Schroeder of Charlie Brown fame, the Enterprise, and more.  Some of
    these sights may not be suitable for young eyes to view, so please use
    your own discretion.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES154.TXT

{% raw %}
```
Disk No:  154
Program Title: PRINTER ART & REPP version 4.00
PC-SIG version: 3.3

PRINTER ART has numerous ASCII text files, that when sent to your
printer, create many wonderous sights such as a clown, Snoopy, the
Enterprise, and more.  Some of these sights may not suitable for young
people to see, please use your own discretion.

Usage:  Printer Art.

Special Requirements:  BASIC and a printer. Some files require a CGA
card.

How to Start:  Use the UN-PQC batch file to unsqueeze the pictures and
then simply copy them to your printer.

Suggested Registration:  None

File Descriptions:

UN-PQC   BAT  Batch command file to unsqueeze .PQC pictures.
                To execute, type A>UN-PQC [destination-drive:]
ALFRED   PQC  The MAD(tm) Mascot Himself
BARDOT   PQC  Female Portrait
CLOWN    PQC  Clown
DRAGON   IMG  This file, file READMAC.IMG and SAMPLE.SHO together are a
READMAC  IMG   sample slide-show for REPP310.
ENTEP    PQC  Enterprise (from Startrek)
KIRK     PQC  The Captain Himself
LORETTA  PQC  Female Portrait
MICKEY   PQC  Famous Cartoon Character
MONA     PQC  Da Vinci's Masterpiece
MOTHER   PQC  Mother & Child
NUSQ     COM  File Unsqueeze Utility.
PANTHER  PQC  Pink Panther
PHANTOM  PQC  McDonnell Douglas F-4E Phantom II
REPP310  DOC  Information about REPP310.
REPP310  EXE  Translates .PIC and .NUD files into CGA graphics pictures!
REPPHELP DAT  Help File for REPP310.
SAMPLE   SHO  Slideshow file for REPP310.
SANTA4   PQC  Santa and 4 reindeer; ready to print or view with REPP
SANTA8   PQC  Santa and 8 reindeer; ready to print
SCHROEDR PQC  Schroeder (from Peanuts)
SHUTTL3D BAS  Shows space shuttle from any 3 angles
SHUTTLE  PQC  Challenger space shuttle
SMURF    PQC  A Little Blue Fellowe, ready to print
TIGER    PQC  Well-done Tiger
TIGER    MAC  Mac file.
TWEETY   PQC  Cat Food
UTILHELP DAT  Data file.
-------- ---  --------- Material After This Point is not for Kiddies ---------
UN-NQD   BAT  Batch command file to unsqeeze .NQD pictures.
                To execute, type A>UN-NQD [destination-drive:]
ACNUDE4  NQD  Nude
ACNUDE5  NQD  Nude
BATCHICK NQD  Nude, in crimefighting costume
BETTY    NQD  Nude
CINDY    NQD  Nude (MORGANA on some BBS's)
DRU      NQD  Nude
ELLEN    NQD  Nude
FRAN     NQD  Nude
HONEY    NQD  Nude (same as NUDE84.TXT on Disk 208)
JANE     NQD  Nude
MARIA    NQD  Nude
ROXANN   NQD  Nude
SUNNY    NQD  Nude
SUSAN    NQD  Nude
SYLVIA   NQD  Nude (improved PINUP1.NUD formerly on this disk)

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## REPP310.DOC

{% raw %}
```
+----------------------------------------------------------------------------+
|                                                                            |
|        R.E.P.P. -- 'Reverse-Engineer Printer Picture'    -- v. 3.10        |
|        ============================================================        |
|         (C) 1986 Galaxy Systems Corporation -- All Rights Reserved         |
|                                                                            |
+----------------------------------------------------------------------------+

                         QuickBASIC Runtime Modules
    (C) Copyright 1982-1988 Microsoft Corporation -- All Rights Reserved


R.E.P.P. may be given away and shared between interested parties on an AS-IS
basis only.  No liability is assumed by Galaxy Systems Corporation for any
damages, direct, indirect or consequential, which may arise out of the use
of this product or inability to use this product.  No warranty, express or
implied, including the warranties of merchantability and fitness for a
particular purpose, is offered.

The complete, entire R.E.P.P. package is now distributed by PC-SIG,
and upgrades to the package will only be available through PC-SIG.
No monies of any kind are solicited.  If you have any comments about
the package, please address them to:

>>> Galaxy Systems Corp., Box 26387, Richmond, Va. 23260-6387 <<<  --Enjoy!


Program Specifications for R.E.P.P. (REPP310.EXE):
==================================================

     Usage:          . Converts Printer Art into Graphics Images

                     . Contains a built-in version of YAMP, a ReadMAC
                       viewer optimized for display on CGA monitors.

                     . Provides a Slide-show Presentation of REPP
                       .IMG Files, standard BLoads, and ReadMACS

                     . Converts REPP .IMG files, standard BLoads & ReadMAC
                       files to/from each other (not all combinations)

                     . Provides colorization functions for BLoads,
                       .IMG and ReadMAC files

                     . Provides top/bottom & left-right inversion functions

                     . CAN BE USED AS A TEXT-SCRUBBER.  Expands blanks,
                       replaces certain control characters and premature
                       eof marks with blanks, and can remove hi-bits
                       from bytes.

                     . Has other miscellaneous capabilities

     Requirements:   . Color Graphics Adaptor card, or equivalent
                     . DOS 2.1 or later; 384K available memory (may
                       also run successfully in some smaller machines)


                                  Page 1
Introduction to REPP:
=====================

The REPP package originally consisted of two programs, REPP and
UTIL.  REPP was the original program that converted Printer Art
into graphics images.  UTIL was a separate program that provided
image conversions, colorizations, and a number of other options.

With the advent of REPP310, REPP and UTIL have been merged into
a single program.  The original REPP menu screen comes up as the
program is fired up.  The UTIL menu screen can be reached by keying
alt-M (for "alternate Menu").  ("alt-M" means hold down the Alt key
and press M, and then let go.)  Once in the utility menu, you can
go back to the REPP menu by again pressing alt-M.

Also, with the release of REPP310, a built-in ReadMAC viewer has
been added.  The viewer is YAMP, "Yet Another Mac Program", a viewer
optimized for the display of ReadMACs on CGA monitors.  It contains
Portrait and Landscape mode views, contrast settings, colorized
contrast settings, inversions and mirroring, and other options.

The ReadMAC viewer is available from either the REPP or UTIL menus.
All you have to do is select a .MAC file to view.


The documentation that follows is organized in this order:

         .  An introduction to the REPP & UTIL menus

         .  A suggested installation procedure

         .  A list of initial considerations

         .  An explanation of command-line options

         .  An explanation of the REPP menu

         .  An explanation of the UTIL menu

         .  An explanation of the YAMP options


Have fun!















                                  Page 2
Introduction to the REPP Menu:
==============================

The R.E.P.P menu can be used to create bit-image graphic
equivalents of old-style, ASCII-type 'printer art'.

Further, R.E.P.P. provides you with various 'tuning' options--
horizontal & vertical orientation of the pictures, normal and
squeezed representations, contrast & color modes, and so forth.

Also, once a picture has been re-created to your liking, it can
be saved for later redisplay.  Further, REPP now permits you to
create slideshow presentations of those saved files. 

Pictures to be R.E.P.P.ed must be in printable, ASCII form.
If "COPY picname.pic LPT1" works, then R.E.P.P. will usually
work with "picname.pic".


Introduction to the UTIL Menu:
==============================

The UTIL Menu provides three major functions:

      It can "clean up" printer art text files which have "bad"
      characters in them, such as premature eof marks and errors
      generated during a modem download.  This means this function
      can also be used as a GENERAL TEXT SCRUBBER.

      It can read standard BASIC BLoad images and TRS 80 Model 4
      hi-res images, and Bloads without BASIC header bytes.  These
      images can then be colorized or inverted if desired, and
      then saved in standard .IMG form.

      Finally, if you have an Okidata 82A with OKWriter (tm) ROMs,
      or if you have an Okidata 92/93 with Okigraph (tm) ROMs,
      the UTIL menu will let you print an .IMG file.  (Users with IBM-
      compatible printers can use the DOS GRAPHICS command along
      with Shift-PrtSc instead.)

Note that the built-in ReadMAC viewer, YAMP, permits you to compose an
image for a CGA screen.  When you exit the YAMP viewer, this CGA screen
will be captured automatically, and the remainder of the functions of the
UTIL menu would then be available to modify or colorize the captured
screen.  Thereafter, the image can be saved as a .BLD or .IMG file.

Finally, the UTIL Menu provides the same slide-show feature as the
REPP Menu.










                                  Page 3
Installation Notes:
===================

1.  The R.E.P.P. package consists of the following files:

          REPP310.EXE      The printer art conversion program, now
                             with built-in utility functions and a
                             built-in ReadMAC viewer.
          REPPHELP.DAT     On-Line Help information.
          UTILHELP.DAT     On-Line Help information.
          REPP310.DOC      This documentation file.

    Various sample pictures and files are also usually included.

2.  If you have a hard drive, skip to #3.  If you will be running REPP
    from a floppy-based system, read on:

    For a single-drive system:

          Place REPP310.EXE, REPPHELP.DAT and UTILHELP.DAT onto a
          single floppy.  Copy any printer art, .IMG files (see later)
          and ReadMACs you wish to view to this same floppy, or to a
          RAM disk which you may have set up (see your DOS manual
          for details on VDISK.SYS).

    For a double-drive system:

          Place REPP310.EXE, REPPHELP.DAT and UTILHELP.DAT onto one
          floppy.  You should also have room to include the REPP310.DOC
          file and any other samples that may have come with the package,
          so you may as well keep everything together.

          Place the files of printer art, ReadMACs and .IMG files (see
          later) onto a second floppy.

          When you are ready to run the programs, run them from the
          floppy they are on, and set up the default directory to point
          to the root directory of the other drive.  (See function F1,
          later in this document.)  Note:  in version 3.10, you can
          switch to the other drive and switch directories once
          in the program also.

3.  For hard disk users, the following installation configuration is
    suggested:

          Create a directory such as \IMG.  Copy all the files from
          this package into it.  (Obviously, you won't need the .DOC
          file or the sample .PIC files to *run* the programs, so if
          you are tight on space, you can eliminate these.)









                                  Page 4
3.  (cont'd.)

          REPP is designed to run with DOS versions that have some
          problems in providing directory information.  Therefore,
          whenever REPP310 is executed, it will assume that the
          REPPHELP.DAT and UTILHELP.DAT files are in the current
          directory unless told otherwise by the /DDIR= command-line
          option:

          C>REPP310 /DDIR=\IMG

          You could also create a .BAT file in a directory that is in
          your current PATH, and then be able to execute REPP310 
          from any point on your hard drive:

          REPP.BAT:

              REPP310 /DDIR=\datfiledirectory

          Other run-time options are also available and are discussed
          in the text that follows.


Some Initial Notes:
===================

1.  REPP310 can determine if you have a CGA-capable monitor, but it
    cannot tell if the monitor is color or black & white (monochrome).
    If you have a monochrome CGA monitor, some parts of the menus may be
    very hard to read.  Use the /BWMON option on the command line:

      C>REPP310 /BWMON

      A>REPP310 /BWMON

2.  REPP Menu:  Printer art which uses OVERPRINTING *IS* SUPPORTED, though
    in the color modes the overprinting may not work as expected.
    In the black and white modes, overprint support works quite well.

3.  Upon entry, REPP310 sets up to work with the current drive's CURRENT
    DIRECTORY.  *THIS IS DIFFERENT FROM PRIOR VERSIONS OF REPP, WHICH SET
    UP IN THE ROOT DIRECTORY.*  You can set the directory again, even
    changing the drive and giving an ambiguous file specification to
    limit the display, if you wish, once in this menu screen.
    You can also specify the Initial DIRectory and file specification
    on the command line, as in the following example:

          C>REPP310 /IDIR=\IMG\*.PIC










                                  Page 5
+--------------------+
|                    |
|  Running REPP310:  |
|  ================  |
|                    |
+--------------------+

REPP310 is invoked from the command line by typing

       d>REPP310

Several optional command-line parameters may be coded.  The
complete syntax for a REPP310 invocation is

       d>REPP310 [/BWMON] [/QUIET] [IDIR=\initialdirectory&filespec]
                                   [DDIR=\dat&helpfiledirectoryspec]
                                   [SHO=\slideshowfilespecification]

Note that the square brackets [] simply indicate OPTIONAL items
that are not required for executing REPP310.  You do not code
the [ and ] brackets themselves.

Also, since QuickBASIC replaces all lower-case letters on the command 
line with upper-case, case is not important when keying the parameters.

       /BWMON      is used to make all menu displays Black & White.
                   If you are using a composite video monitor, you
                   will appreciate this.

       /QUIET      automatically places the program into "quiet mode"
                   and bypasses the initial keypress after the signon
                   screen is displayed.

       /IDIR=      indicates to the program what the initial directory
                   is to be.  If omitted, the current directory is
                   used as the initial directory.

       /DDIR=      indicates the location of the REPPHELP.DAT and
                   UTILHELP.DAT files.  This is needed only if these
                   files are not in the directory from which REPP310
                   is being invoked.

       /SHO=       indicates a SlideShow Script file to be 
                   automatically executed by REPP310.
                   This automatically forces /QUIET.  Also, the
                   filename MUST have an extension of ".SHO".

Once the program has begun and the menu screen is showing,
F1, F2, F3 and F4 place the cursor into the associated keying
area.  To leave an entry unchanged, press RETURN or another F-key
WHENEVER the cursor is at the LEFT EDGE of the keying area.







                                  Page 6
+------------------+
|                  |
|  The REPP Menu:  |
|  ==============  |
|                  |
+------------------+


F1 (Current Drive/Directory/Ambiguous File Name Specification):
===============================================================

Note that TO ENTER A DIRECTORY, you DO NOT lead off with the
CHDIR or CD command; just enter the directory name.  Also, to
list any files, a specification (such as *.*) MUST follow the
directory.  Example:  \art\*.pic

The directory you entered will be shown once you press another
function key (or RETURN).

If you just wish to point to a directory but do not wish the files
listed, enter the directory name without any file specification,
as in
	\dir\subdir

You may also enter a drive letter and colon (:) to switch to a 
particular drive.

If you enter a drive letter and directory (for example, b:\pic) and
the drive you specify IS valid but the directory you specify IS NOT,
then REPP will switch to the new drive's CURRENT directory.


F2 (Selection of File to Graph):
================================

In this area, you key the name of the printer art file to be
translated into a graphics image.  If you do not supply an
extension, ".PIC" is assumed.

The file's existence is verified once you activate the selection
(see below) or move out of this keying area into another area,
so some disk activity may occur.

If the file does not exist, you will be beeped at and a message
will appear.


F3 (Saving a Graphed Image):
============================

Once the message <In Save Area> appears in the F2 area, a
graphics image may be saved to disk for later viewing.  Key
the name of the file to save the image to in this area.  The
file MUST NOT ALREADY EXIST, or else you will be beeped at and
a message will appear.



                                  Page 7
F3 (cont'd.)
============

File verification occurs when you activate the save (see below)
or move to another keying area.

The extension used for the file must be ".IMG", for a REPP-type
.IMG-file save, or .BLD, for a straight Bload-able file save.

If you do not specify an extension, ".IMG" will be used.

NOTE:  There exist one or more software packages that also use
       .IMG as an extension for their image files.  These files
       will likely not be in the same format as REPP-created .IMG
       files.  If you experience problems in viewing an .IMG file,
       this may be the problem.


F4 (Recalling a Saved Image or SlideShow Script):
=================================================

In this area, you key the name of the saved image file you wish
to recall.  The file must exist, or else you will be beeped at,
and a message will appear.

File verification occurs when you activate the recall or move
to a different keying area.

If you do not specify an extension, ".IMG" will be used.

It is now possible to directly load BASIC Bload files and Bload files
without the BASIC header bytes.  This function is performed automatically 
whenever the requested picture file is not recognized as an .IMG file.

It is now also possible to load and view ReadMAC files.  ReadMAC files
are image files created originally on the Apple Macintosh (TM)
computer.  These files proliferate on bulletin boards and are usually
described by the term "ReadMAC", or may have an extension of ".MAC".

Also, if you specify a filename with an extension of .SHO, it will
be assumed that you are specification a SlideShow Script.

SlideShow Scripts are standard ASCII files (nondocument mode in
WordStar(R)) which can even be created by the COPY CON filename.SHO
command.  The available commands within a SlideShow file are the
following:

      Command:                       Explanation:
      ---------------------------    ----------------------------------

      DELAY n                        "n" is a number from 0 to 99.
                                     This is the number of
                                     seconds to delay between
                                     SHOW commands ("0" means
                                     wait for a keypress before
                                     showing the next file)


                                  Page 8
F4 (cont'd.)
============

      SHOW filespecification         The name of file to show
                                     (must be .IMG or BLOADable
                                     file; CANNOT be a printer
                                     art text file).  May now
                                     also be a ReadMAC file
                                     (.MAC extension).

                                     NOTE:  If it is a ReadMAC
                                     that you are SHOWing, you can
                                     follow the filespecification
                                     with a blank and a string of
                                     YAMP directives (keystrokes).
                                     See the later discussion of
                                     YAMP for details.

      CHDIR d:\directorypath         You can change drives and/or
                                     directories to be able to
                                     SHOW files located in other
                                     places (useful if you don't
                                     want to keep keying the drive
                                     and/or the directory in the 
                                     names of files to be shown)

      ' commentary                   Lines whose first nonblank
                                     character is an apostrophe
                                     are taken as comments.

      MENU                           Return to the REPP or UTIL menu

      REPEAT                         Repeat the script from the top

      If neither MENU or REPEAT are contained in the script, then
      at the end of the script REPP310 returns either to the MENU,
      or to DOS if the script was invoked with the /SHO command line
      parameter.

      Example:

          d>\img\repp310 /sho=\img\sample.sho 

      Sample .SHO file:

          DELAY 3
          CHDIR \IMG\SHIPS
          SHOW FRIGATE.IMG
          SHOW KETCH.BLD
          SHOW ESCHER.MAC 
          CHDIR \IMG\PLANES
          DELAY 5
          SHOW X15.IMG
          ' The X-15 -- my favorite!
          ' Now we repeat until stopped with ESC or F9/F10:
          REPEAT


                                  Page 9
Activating F2, F3, or F4:
=========================

To execute an F2, F3 or F4 option after all other options have been
set or are satisfactory, press F2, F3 or F4, enter the file name, and
EITHER press RETURN or REPEAT the same F-key again.

(If the correct file name is already in the option area, you can just
press the appropriate F-key TWICE.)

UPON COMPLETION OF AN F2, F3 OR F4 FUNCTION, SOME MUSICAL NOTES
WILL PLAY.  FOR THE F2 AND F4 FUNCTIONS, THIS METHOD OF INDICATING
COMPLETION DOES NOT CLUTTER UP THE IMAGE WITH TEXT.

Note:  After a graphics image is completed, pressing any key (other
=====  than F9 or F10) will return you to the menu screen.  If you
       press F9 or F10 (see below) you will return to DOS.


F5 (Framing), F6 (Sizing), F7 (Contrast/Color Palette):
=======================================================

F5, F6 & F7 simply rotate between the available customizing options
for the generation of the graphics image.


F8 (Help):
==========

F8 displays an abbreviated version of this documentation.


F9/F10 (Exit/Interrupt Drawing):
================================

F9 quits to DOS, to the directory last in the F1 area, when pressed
with the REPP menu showing OR after the graphics image has been
completed.  F10 works the same way, except during the draw (F2)
function:

If F9 is pressed while the graphics picture is being drawn, REPP will
return to the current menu screen.  So if you do not like how a
graphics image is turning out, you do not need to wait for its
completion before adjusting the contrast and trying again, for
example.  If you use F10, REPP will return to the menu screen, but
NOT show the contents of the current directory.  (Useful if a snoop
is in the area.)











                                  Page 10
An Example:
===========

On the distribution disk is a file called PHANTOM.PIC, a picture
of an F-4 Phantom jet fighter.  The following will create an
image of this craft:

Press F2 and key 'PHANTOM'.  (The .PIC suffix is assumed.)
Press F7 enough times to bring up PALETTE 1.
Press F5 enough times to select HORIZONTAL/EXACT.

Press F2 once.  This gives you a chance to change the picture
file name.  Since it is correct, however, just press F2 -AGAIN-
to indicate so, and the PHANTOM.PIC file will be analyzed for you.

After the analysis, press RETURN (or ENTER) to begin drawing the
picture.  Note that PALETTE 0 is more becoming to living things
while PALETTE 1 works best with objects.








































                                  Page 11
+------------------+
|                  |
|  The UTIL Menu:  |
|  ==============  |
|                  |
+------------------+


                   --- Please note the following: ---

Although the interface that this Menu presents is similar to that of the
REPP Menu, only the F2 option area is an activatable area.  In other words,
the F3 and F4 entries are only data for the option you select while in
the F2 area.  (This is further explained in the text which follows.)

                          --- End of Note ---

Once this Menu has been selected and the menu screen is showing,
F1, F3 and F4 place the cursor into the associated keying
area.  To leave an entry unchanged, press RETURN or another F-key
WHENEVER the cursor is at the LEFT EDGE of the keying area.

F2 brings up a menu of available utility options.  After selecting
the desired option using the up & down arrow keys, you can activate
the option by pressing either RETURN or F2.


F1 (Current Directory/Ambiguous File Name Specification):
=========================================================

This works as in the REPP Menu.


F2 (Selection of Utility Option):
=================================

Once in the F2 area, thirteen different functions are available.
Some of these functions require that an image already have been loaded
into memory.
 
The option you desire is selected using the arrow keys and activated
with RETURN or F2.  Any other F-key can be used to get out of the
F2 function.

Beginning with REPP310, the PgUp and PgDn keys are available to
skip two options at a time.  This permits you to get up and down the
list of options more quickly.  Also, Home and End get you, respectively,
to the Top and Bottom of the list.

    The Available Functions:
 
    00: Load Image or Slideshow File.  This option takes the file
        specification located in the F4 area and, if an .IMG file
        or a supported Bload-type file, displays the image.  If a
        SlideShow script, the script is enacted.  If a ReadMAC is
        specified, it is shown.


                                  Page 12
F2 (cont'd.)
============

    01: Show Image in Save Area.  After an image has been placed
        <In Save Area>, it can be redisplayed with this function.
        NOTE:  If the last item you viewed was a ReadMAC, only the
        portion of the ReadMAC on the screen at the time you exited
        the ReadMAC viewer will be recallable using this option.
        If you wish to see the entire ReadMAC again, just leave the
        ReadMAC name in the F4 area and select Function 00 from
        this list.

    02: Save Image in .IMG Format.  This option takes the file
        specification in the F3 area and creates a .IMG file from
        the image in the Save Area.

    03: Invert Curr Image Top/Bottom.  This flips the image in
        the Save Area vertically.

    04: Invert Curr Image Left/Right.  This flips the image in
        the Save Area horizontally (makes a mirror image).
 
    05: Convert Curr Image->Palette 0.  This just displays the
        current Save Area image using Palette 0.

    06: Convert Curr Image->Palette 1.  And this displays the
        current Save Area image using Palette 1.  This is usually
        a better selection than simply using 05.

    07: Logical Cvt BW/Pal.1->Pal. 0.  This function logically
        converts the gray shadings of Black & White and Palette 0
        images into a 5-color Palette 0 image.  The image to be
        converted must be <In Save Area>.  The fifth color, black,
        is obtained by dithering red & green for the interference.
        NOTE for ReadMAC conversions:  A very nice effect is possible
        if you load a ReadMAC file, use the viewer's T option to
        bring up the old-style double-wide image mode, compose the
        image to your liking, and then use this 07 function on the
        composed image, which would now be in the Save Area.
        Try it.

    08: Convert Color Image -> B/W.  This function does a simple
        convert of a Save Area image to Black & White.  Some
        conversions may not yield particularly good results.
 
    09: Save Image as Standard BLOAD.  Instead of saving the image
        in the Save Area as a .IMG file, it is saved as a straight
        BASIC BLOAD.  This means that any color information will
        be lost.  A proper file specification must be in the F3 area.

    10: Load TRS Model 4 HiRes Image.  The TRS 80 Model 4 image is
        loaded using the file specification in the F4 area.  Each
        5th & 6th line-pair is combined to compress the 240-line
        image to 200 lines.




                                  Page 13
F2 (cont'd.)
============

    11: Print Image OKWriter/ML92-93.  This option takes the image
        in the Save Area and prints it on an Okidata(R) printer that
        supports Okigraph(R) graphics.  This is a goody for folks
        that do not have PC-compatible graphics printers.  A dip-
        switch setting in an 82A with OKWriter(TM) roms may need to
        be set to ML92/93 line-feed mode for this work properly.

    12: Clean Up Printer Art/Text.  This is the only option that
        does not work with bit-image files.  For this option, F3
        contains the name of an input file, and F4 contains the
        specification of an output file.  This function then makes
        one pass of the file in F3 to analyze it, and then converts
        it into a clean text file using the file name in F4.
 
        In other words, this functions as a general text scrubber
        with usage outside the realm of just .PIC file cleanups.

        With this option, the following conversions are ALWAYS done:

            Tabs are expanded to blanks.
            Premature ^Z (end-of-file) characters are made spaces.

        The following conversions, however, are prompted-for and
        are optional:

            Leading Blank Lines can be removed.  This can shorten
            a printer art file and cause better centering.
 
            Trailing Blank Lines can be removed.  This can save
            disk space and, for printer art, cause better centering.

            Leftmost common blanks can be removed.  If all lines in
            the F3 file have a number of leading blanks, these can
            be trimmed.  Again, this saves disk space and leads to
            better centering for printer art files.

            Lines' Trailing Blanks can be removed.  This saves
            disk space and leads to better centering of art files.

            High Bits (bit 7) can be turned off.  Useful with
            WordStar(R) files and files that have been corrupted.

            Control Characters less than 20h (i.e., space) can be
            converted to spaces.  Only BACKSPACE, TAB, LF, FF, and CR
            are permitted to remain.  Again, useful with trashed
            files or files with transmission errors.









                                  Page 14
F3 (Specifying a Save-To File):
===============================

This works just like the F3 area in the REPP Menu, except that
activation of the save requires a selection from the F2 options
list.


F4 (Recalling a Saved Image or SlideShow Script):
=================================================

This works just like the F4 area in the REPP Menu, except that
activation of the save requires a selection from the F2 options
list.


Activating F2:
==============

To execute an F2 option after all necessary data has been provided
in the F1 and/or F3 and/or F4 areas, simply press F2, select the
option with the arrow keys, PgUp, PgDn, Home or End, and then press
RETURN or F2 to activate.

UPON COMPLETION OF AN F2 FUNCTION, SOME MUSICAL NOTES WILL PLAY.
FOR GRAPHICS-DISPLAY FUNCTIONS, THIS METHOD OF INDICATING
COMPLETION DOES NOT CLUTTER UP THE IMAGE WITH TEXT.

Note:  After a graphics image is completed, pressing any key (other
=====  than F9 or F10) will return you to the menu screen.  If you
       press F9 or F10 (see below) you will return to DOS.

Note:  If you are viewing a ReadMAC, press ESC or RETURN to return
=====  to the menu screen.  Pressing F9 or F10 will return you to DOS.


F5 (Framing), F6 (Sizing), F7 (Contrast/Color Palette):
=======================================================

F5, F6 & F7 are not used in the UTIL menu.


F8 (Help):
==========

F8 displays an abbreviated version of this documentation.












                                  Page 15
F9/F10 (Exit/Interrupt Drawing):
================================

F9 quits to DOS, to the directory last in the F1 area, when pressed
with the UTIL Menu showing OR after the graphics image has been
completed.  F10 works the same way, except during a lengthy F2
function:

If F9 is pressed while the F2 function is being processed, UTIL will
return to the current menu screen.  So if you do not like how a
graphics image is turning out, you do not need to wait for its
completion before trying something else.  If you use F10, UTIL will
return to the menu screen, but NOT show the contents of the
current directory.  (Useful if a snoop is in the area.)


An Example:
===========

An Example of UTIL Menu usage:

On the distribution disk is a file called DRAGON.IMG, a picture
of a rather bored-looking dragon.  Unfortunately, the dragon is
upside down.  The following will get the .IMG file, invert the
poor dragon, and save him (or her?) in an upright position:
 
Press F4 and key DRAGON.  Hit RETURN (the .IMG suffix is supplied
automatically).  Press F3 and key DRAGON2.  Again, the file exten-
sion is supplied.

Now Press F2.  Since the selected option is already "Load Image",
just press RETURN.  DRAGON.IMG will be loaded and displayed.
After the display finishes, press any key (other than F9/F10) to
get back to the Menu.

Press F2 again, and use the arrow keys (which wrap, top/bottom,
by the way) to select "Invert Curr Image Top/Bottom".  Press
RETURN.  The Image will be inverted.

Get back to the Menu and press F2 again.  Select "Save Image in
.IMG Format" and press RETURN.  DRAGON2.IMG will be saved.
By now you get the idea.  Try re-loading DRAGON2 for practice.
















                                  Page 16
+----------------------------+
|                            |
|  The YAMP ReadMAC Viewer:  |
|  ========================  |
|                            |
+----------------------------+

REPP310 incorporates the functions of the YAMP 2.1 ReadMAC viewer.
The YAMP program ("Yet Another MAC Program") is a ReadMAC viewer which
has been painstakingly optimized for the display of ReadMACs on CGA
monitors.  If you request a .MAC file to be viewed, either in the
REPP Menu or the UTIL Menu, the YAMP viewer will be invoked.

After returning from the YAMP viewer, the last screen image displayed
will be placed <In Save Area> for further processing or re-viewing.

While in the YAMP viewer, F1 or F8 bring up a help menu.  F1 was the
original key used by YAMP; F8 was added to be consistent with the
REPP and UTIL menus.

Note that, in giving the ReadMAC viewer commands, lower-case keys
work just as well as upper-case.

The following functions are available:

    .  You can scroll the image with the Arrow Keys and PgUp and PgDn.

    .  The Home key brings you to the top of the image, and the
       End key puts you at the bottom of the image.

    .  Ctrl-Left Arrow aligns you with the left edge of the image, and
       Ctrl-Right Arrow aligns you with the right edge of the image
       (especially useful in the double-wide modes).

    .  "V" toggles between 1/2-vertical & normal modes.  Because of the
       number of vertical scan lines on the CGA display (200) as opposed
       to the number of lines on the Macintosh (350 or so), the image on
       the CGA will appear elongated.  Cutting the image in half restores
       the aspect ratio but loses you some detail.

    .  "H" toggles between enhanced-dbl-wide & normal modes.  Another way
       to get around the elongation problem is to make the ReadMAC image
       twice as wide on the CGA screen.  This means you will now have to
       scroll sideways to view the entire image, but you will not lose
       any detail.  However, the image may appear grainy.  This enhanced
       double-wide mode has been set up to reduce the graininess where
       possible.  See also the next option.

    .  "T" toggles between original-dbl-wide & normal modes.  "T" is the
       original way in which most ReadMAC viewers created a double-wide
       mode.  It is still useful with the UTIL Menu colorization options,
       as these options (especially option 07) work better with an image
       captured from a "T" double-wide mode as opposed to an "H" double-
       wide mode.




                                  Page 17
    .  "S" begins a sequence of 1/2-vertical "Smart" modes.  Keying "S"
       again & again toggles between 5 contrast settings.  These modes
       are similar to the "V" mode but use extra algorithms to enhance
       the image.  You get out of the "S"mart modes by choosing another
       mode, such as "H", "V", "P" (see below), or "N" (for normal mode).

    .  "P" begins a sequence of 1/2-vertical Palette-1 colorizations.
       Pressing "P" again & again toggles between 5 contrast settings.
       "P" modes function like the "S" modes above.  Again, get out the
       "P" modes by choosing another mode (H,V,N,S).

    .  "I" simply inverts the image top-to-bottom.

    .  "M" mirrors the image.  (Inverts left-to-right.)

    .  "L" toggles between Landscape and Portrait views of the image.
       The Portrait (or vertical) view is the normal view.  The Landscape
       (or horizontal) view is created by this option the first time
       this option is selected for a particular image.  Thereafter, access
       to the Landscape view of an image is practically instantaneous.
       Note that the Portrait and Landscape views of an image are
       independent images.  That means you can manipulate one image
       without affecting the other, and when you toggle between the
       images, you will always return to where you left off with an
       image, and return to the display mode in which you were with
       that image.

    .  "D" just reDisplays the current screen.  This is useful after the
       display of the help screen.

    .  "Z" applies a smoothing algorithm to the image.  Sometimes, after
       the creation of a Landscape version of a ReadMAC, a "striping"
       or "lined-up" effect will appear.  Smoothing will get rid of this,
       but we suggest trying the "S"mart modes on the image first.
       This is because the "Z" function actually changes the image
       in memory, and if you have both Portrait and Landscape views,
       it changes them BOTH.  There are some exiguous technical reasons
       for this, which we will omit here.  See also the next option.

    .  "R" reloads the image from disk.  If, after a smoothing function
       (the only function that actually modifies the image), you decide
       you would like the original image back, just press "R".  This keeps
       you from having to return to the REPP or UTIL menu screen to
       request a reload of the ReadMAC file.

    .  RETURN (ENTER) or ESC get you out of YAMP and return you to the
       REPP or UTIL menus.  The last view on the CGA screen will be
       captured and placed <In Save Area>.  Consistency note:  REPP, UTIL
       and YAMP were originally three different programs, so there are
       some inconsistencies in the user interface.  If you wish to use the
       same key to return to the REPP or UTIL menus after viewing any
       image, just use the RETURN (or ENTER) key.

    .  Effect of F9 and F10:  F9 and F10 work as if the image were always
       completely displayed, and return you to DOS.  This is because the
       grafting of YAMP onto REPP310 was not 100% transparent.  To hide
       the current screen on a temporary basis, see the following:

                                  Page 18

    .  "Ins" and "Del" are the "BOSS" keys for the YAMP viewer.  If you
       press these keys, they will show a normal screen on an apparently
       "hung" system.  No keystrokes will appear to work (besides Ctrl-
       Alt-Del, of course).  To get back to what you were viewing after
       the danger passes, press Ctrl-Home.

Extra note:  The smoothing routine (Z) turns out to be asymmetric in its
effect on the "S"mart and "P"alette modes.  This means that after
"smoothing" or colorizing, the "S"mart and "P"alette modes may differ
in their effect on an image that has been mirrored from one that has not
been mirrored.  Try it and see.


Slideshow Interface:
====================

If you SHOW a ReadMAC file in a slideshow script file (.SHO), the normal
action by YAMP is to pan the image in Normal Mode (the unmodified elongated
image) from top to bottom.  However, you can optionally add YAMP keystroke
commands to the SHOW command.  Just follow the file specification with
one or more blanks, and enter the keystrokes:

        SHOW ESCHER.MAC SS260-

In the above example, the second of the 5 "S"mart modes is selected, and
260 down-arrows follow.  (The 260 is a repeater count and "-" substitutes
for the down-arrow character, which cannot be easily entered into an
ASCII non-document script file.)

The following YAMP keystrokes and their slideshow equivalents are
supported:

        YAMP key       Slideshow character
        --------       -------------------

        Left Arrow             <
        Right Arrow            >
        Up Arrow               +
        Down Arrow             -
        Ctrl-Left Arrow        ^<       (use the "hat" above the "6" key)
        Ctrl-Right Arrow       ^>
        Home                   ^+
        End                    ^-
        PgUp                   '        (single quote mark, or apostrophe)
        PgDn                   ,        (comma)

        DHILMNPRSTVZ           same

        Not Applicable         W        inserts a single-second wait into
                                        the display







                                  Page 19

To repeat a command, just precede it with a replication count.  See the
following keystring:

        ss260-5w^+h>>>>260-5w

This string says: Smart Mode 2 (SS), Down Arrow 260 times (this views
a full ReadMAC 720-line image), Wait 5 seconds, go to the top of the
image (^+), go into double-wide mode (H), four Right Arrows, 260 Down
Arrows, and Wait 5 seconds.

Note that any wait you specify with the slideshow DELAY command will
also be taken at the end of the display of each image.













































                                  Page 20
+--------------------+
|                    |
|  Technical Notes:  |
|  ================  |
|                    |
+--------------------+

The Saved .IMG files were created in the following manner:

    . First, the image in screen memory was moved to an array
      using the BASIC graphic GET command.
    . Various control information is appended to the end of
      the array (options set, original name of the file, etc.).
    . Finally, a BSAVE is issued on the ARRAY (not on the
      graphics memory).  This means you cannot directly BLOAD
      a REPP-format .IMG file to the screen memory and expect
      worthwhile results.

Regarding the COLOR Palettes:

    . Palette 0 is more becoming to human beings and animate
      objects.  Palette 1 is more becoming to things.

    . In Palette 0, an alternating grid of red and green dots
      is used to simulate a dark (black) background because of
      the visual interference pattern that is created when red
      meets green.  This is not perfect, but it is about the best
      one can do with just four colors.


+-------------------+
|                   |
|  Known Problems:  |
|  ===============  |
|                   |
+-------------------+

1.  If the DELAY in a SlideShow Script is too short (say, 1 second),
    then it may be necessary to briefly HOLD DOWN the ESC key to
    break out of a REPEATed loop.


















                                  Page 21
+--------------------+
|                    |
|  Upgrade History:  |
|  ================  |
|                    |
+--------------------+

THE FOLLOWING CHANGES & IMPROVEMENTS HAVE BEEN MADE IN REPP247 OVER REPP230:

     1.  A continuous beep-loop occurred if you changed directories
         and one or more requested files were no longer available.
         This has been fixed.  Now, if a file does not exist in
         the named directory, the file name is replaced with
         "NONE.PIC" or "NONE.IMG".

     2.  Root directories could sometimes cause incorrectly-
         constructed file names.  This has been fixed.

     3.  Keying has been disabled while certain time-consuming
         functions are performed.  (Important mainly if you are
         running REPP247 under an interpreter.)

     4.  At the start of the program, you can specify a "Quiet Mode"
         of operation.  BEEPs for file name errors and the music at
         the conclusion of the drawing of a picture will not sound.

     5.  DIMension statements have been moved to the front of the
         program; this permits compilation with QUICKBASIC 2.0.
         If you are going to compile REPP with QB 2.0, the following
         options are suggested:

                qb repp247.bas /d /o /q /s /v /x;
                link repp247.obj;
                erase repp247.obj

     6.  Three utilities have been provided with REPP247:

         CVTBLOAD -- This converts a normal BSAVEd screen image
                     into a .IMG-type file viewable by REPP.

         CVTPAL1  -- This converts a Palette-1 .IMG file
                     into a Palette-0 .IMG file (i.e., from
                     cool colors into warm colors).

         CVTTABS  -- This expands tabs into spaces.  The expansion
                     occurs whether the tabs are within literals or not.
                     This is actually a general utility which can
                     be used for more than just converting printer art
                     containing tabs.









                                  Page 22
+--------------------+
|                    |
|  Upgrade History:  |
|  ================  |
|                    |
+--------------------+

THE FOLLOWING CHANGES & IMPROVEMENTS HAVE BEEN MADE IN REPP288 OVER REPP247:

01.  An invalid file specification, or a specification that returns
     no files, no longer terminates the programs.  All file names
     entered in the course of using the programs are now automatically
     uppercased.  The ability to disable the directory display by
     placing "*" in the F1 area has been removed  (this is now done
     differently--just do not follow the directory path with a file
     specification).  The ability to display the default directory by
     placing a space in the F1 area is now superfluous, and has been
     removed.

02.  The bit-translation table and help texts have been made external
     files.  This should permit more BASICA and GWBASIC interpreters
     to be able to run REPP288 and UTIL288 without running out of memory.

03.  Superfluous redisplays of the current directory have been
     reduced or eliminated.

04.  A "configuration section" now exists at the front of the source.
     .  Quiet Mode can now be made a default.
     .  The default directory for the REPPHELP.DAT, UTILHELP.DAT
             and REPPBITS.DAT files can now be specified.
     .  The initial directory for files to be displayed can now be
             made a default.
     .  If you are using a monochrome monitor, setting BWMON=YES should
             improve the display of the menu screen.
     .  The name of a .SHO-type script file can be specified on the
             command line (see later about scripts)

     If you compile the source with QuickBASIC 2.0 or later, you
     can specify the configuration information on the command line
     as follows:

        d> [path]REPP288 [/BWMON] [/QUIET] [/DDIR=reppdatpath]
                [/IDIR=initialdirectory]
                [/SHO=scriptfilespec]

     Items in square brackets indicate optional entries.  Entries,
     if coded, can be either in upper, lower or mixed case.

        For example:

                d>\img\repp288 /quiet /ddir=\img

        The /ddir= parameter is required if the REPPBITS.DAT
        and REPPHELP.DAT files are not in the ROOT directory.




                                  Page 23
05.  The missing character at position 24,80 on the menu screen has
     been POKEd.

06.  ON ERROR with RESUME has been improved so that a smaller .EXE
     module can be obtained with compilation by QuickBASIC 2.0 or later.
     The suggested compilation options are now:

          qb repp288.bas /d /e /o /s /w;
          link repp288.obj;
          erase repp288.obj

07.  In the F1, F2, F3 and F4 areas, typing the entry and then pressing
     RETURN now activates that function.  This is more intuitive than
     doubling the pressing of F2, F3 and F4.

08.  Text Error Messages have been added to the "beep" error indication.

09.  The ability to retrieve direct BSAVEd screen memory has been added.

10.  The ability to retrieve non-BASIC screen memory dumps has been added.

11.  It is now possible to set up a script file which will give
     REPP288 or UTIL288 the ability to show .IMG or BLOADable files,
     one after the other, in slide-show format.  The show can run and cycle
     in an unattended manner, or it can be interrupted or run to conclusion
     after one pass through the various images.

     Note: the script file MUST have an extension of .SHO and be
           composed of only standard ASCII characters (for example,
           using WordStar(R) in Non-Document mode)

12.  Line overprints are now supported in all modes, although
     in the color modes the overprinting may not work as expected.
     In the black and white modes, overprint support works very well.

13.  The aspect ratio for horizontal mode, non-squeezed pictures
     has been improved; the images are no longer overly wide.

14.  Tabs in picture files are now expanded "on-the-fly".  A separate
     detab conversion is no longer needed.

15.  The source for REPP288.BAS now takes up about 500-600 bytes less
     space; this should permit it to be run by more BASICA or GWBASIC
     interpreters.

16.  The functions once provided by the CVTTABS, CVTBLOAD and CVTPAL1
     utilities have been absorbed by the new program, UTIL288.EXE.
     CVTTABS, CVTBLOAD and CVTPAL1 are no longer distributed with
     the REPP package.









                                  Page 24
+--------------------+
|                    |
|  Upgrade History:  |
|  ================  |
|                    |
+--------------------+

THE FOLLOWING CHANGES & IMPROVEMENTS HAVE BEEN MADE IN REPP310 OVER REPP288:


Bug Fixes:
----------

01.  A potential system hang while processing the information in the F2 area
     has been fixed.

02.  UTIL Menu option 12 (text scrubbing) would occasionally drop lines
     in the detrashing operation.  This has been fixed.

03.  Some .PIC file widths were incorrectly calculated.  This has
     now been fixed.

04.  Certain situations which would create zero-length files have been
     eliminated.

05.  Not actually a bug, but just a note:  There exist one or more
     software packages that also use .IMG as an extension for their
     image files.  These files will likely not be in the same format
     as REPP-created .IMG files.  If you experience problems in viewing
     an .IMG file, this may be the problem.


Minor Changes:
--------------

01.  REPPBITS.DAT is no longer needed.  This information has been
     incorporated into the program.

02.  Pixel display has been accelerated.

03.  REPP now comes up in the current directory and no longer comes
     up in the root if the /IDIR= command-line parameter is not specified.

04.  A drive letter can now be attached to the CHDIR slideshow command
     and to the specification in the F1 areas of the menus.

05.  Hidden directories can be accessed by REPP.  To create the
     little triangle character, hold down the Alt key, press 127
     on the numeric keypad, and then let the Alt key up.

06.  The Palette 0 and Palette 1 color palettes have been slightly improved.
     This improvement will even be visible with existing .IMG files.






                                  Page 25
Major Changes:
--------------

01.  UTIL288 functions have now been incorporated into REPP310.  Separate
     programs no longer exist.  To toggle between the Menus, use alt-M.

02.  YAMP 2.1, a ReadMAC viewer optimized for CGA displays, has been
     incorporated into REPP310.  Further, the slideshow SHOW command
     can now contain keystrokes to be passed to YAMP if a ReadMAC
     file is specified as the file to be shown.

03.  Registration of users for REPP310 is no longer sought, and distribution
     of the sources for the programs is no longer being done.  This is
     not because the sources contain such secret techniques, but because
     this enhanced program now contains assembly-language subroutines that
     use a customized macro library, and providing an assemble-able and
     compilable source is now just too complex an issue.





































                          --- End of Document ---



                                  Page 26

```
{% endraw %}

## SHUTTL3D.BAS

{% raw %}
```bas
10 KEY OFF
20 X=0:Y=0:Z=0:X3=0:Y3=0:Z3=0:AM=0:BM=0:CM=0:DM=0:EM=0:FM=0:GM=0:HM=0:IM=0:D=0:P=0:B=0:H=0:U=0:V=0:U1=0:V1=0
30 DIM V(300,3),E(300)
40 CLS
50 READ NV
60 FOR P=1 TO NV
70 READ V(P,1),V(P,2),V(P,3)
80 V(P,1) = 0.12 * V(P,1)
90 V(P,2) = 0.12 * V(P,2)
100 V(P,3) = 0.12 * V(P,3)
110 NEXT P
120 READ NE
130 FOR E=1 TO NE
140 READ E(E)
150 NEXT E
160 SCREEN 2
170 D=120
180 LOCATE 1,1
190 INPUT"INPUT  ANY 3 ANGLES (X,Y,Z)"; P0,P1,P2
210 CLS
220 P=6.28 * P0 / 255 - 3.1416
230 B=6.28 * P2 / 255
240 H=6.28 * P1 / 255
250 GOSUB 390
260 XV = -D * CP * SH: REM ---SEE SUB.---
270 YV = -D * CP * CH
280 ZV = -D * SP
290 REM ---PROJECT NE POINTS---
300 FOR E=1 TO NE
310 X = V( ABS ( E ( E ) ), 1 )
320 Y = V( ABS ( E ( E ) ), 2 )
330 Z = V( ABS ( E ( E ) ), 3 )
340 GOSUB 520
350 IF E(E)>0 THEN LINE (U1*2+75,V1+20)-(U*2+75,V+20)
360 U1 = U: V1 = V
370 NEXT E
380 GOTO 190
390 CH = COS (H): SH = SIN (H)
400 CP = COS (P): SP = SIN (P)
410 CB = COS (B): SB = SIN (B)
420 AM = CB * CH - SH * SP * SB
430 BM = -CB * SH - SP * CH * SB
440 CM = CP * SB
450 DM = SH * CP
460 EM = CP * CH
470 FM = SP
480 GM = -CH * SB - SH * SP * CB
490 HM = SH * SB - SP * CH * CB
500 IM = CP * CB
510 RETURN
520 X = X - XV
530 Y = Y - YV
540 Z = Z - ZV
550 X3 = AM * X + BM * Y + CM * Z
560 Y3 = DM * X + EM * Y + FM * Z
570 Z3 = GM * X + HM * Y + IM * Z
580 U = 135 + 13.5 * D * X3 / Y3
590 V = 80 - 11.5 * D * Z3 / Y3
600 RETURN
610 DATA 124
620 DATA 0,-2.2,46,1.5,-2.6,46,2.2,-4.6,46,1.7,-6.5,46,0,-6.7,46
630 DATA -1.7,-6.5,46,-2.2,-4.6,46,-1.5,-2.6,46
640 DATA 0,-.8,43,2.8,-1.5,43,4,-4.5,43,3,-7.2,43,0,-8,43,-3,-7.2,43
650 DATA -4,-4.5,43,-2.8,-1.5,43
660 DATA 0,1.7,38,4.6,0,38,5.8,-4.4,38,4,-8.2,38,0,-9,38,-4,-8.2,38
670 DATA -5.8,-4.4,38,-4.6,0,38
680 DATA 0,4,32.5,4.5,1,32.5,5.8,-4.6,32.5,4,-9,32.5,0,-9.5,32.5,-4,-9,32.5
690 DATA -5.8,-4.6,32.5,-4.5,1,32.5
700 DATA 0,8,26.3,3.5,7,26.3,7.8,2,26.3,8,-7,26.3,0,-9.8,26.3,-8,-7,26.3
710 DATA -7.8,2,26.3,-3.5,7,26.3
720 DATA 0,8,21.5,3.8,7.5,21.5,8,3,21.5,8,-8,21.5,0,-9.8,21.5,-8,-8,21.5
730 DATA -8,3,21.5,-3.8,7.5,21.5
740 DATA 0,8,14,4.7,7,14,8,4,14,8,-8.7,14,0,-10,14,-8,-8.7,14,-8,4,14
750 DATA -4.7,7,14
760 DATA 0,8,4,4.7,7,4,8,4,4,8,-8.7,4,0,-10,4,-8,-8.7,4,-8,4,4
770 DATA -4.7,7,4
780 DATA 0,8,-12,4.7,7,-12,8,4,-12,8,-8.7,-12,0,-10,-12,-8,-8.7,-12,-8,4,-12
790 DATA -4.7,7,-12
800 DATA 0,8,-27.3,4.7,7,-27.3,8,4,-27.3,8,-8.7,-27.3,0,-10,-27.3,-8,-8.7,-27.3
810 DATA -8,4,-27.3,-4.7,7,-27.3
820 DATA 0,8,-35.6,4.7,7,-35.6,8,4,-35.6,8,-8.7,-35.6,0,-10,-35.6,-8,-8.7,-35.6
830 DATA -8,4,-35.6,-4.7,7,-35.6
840 DATA 0,9,-43,2,8.5,-43,8.8,1.5,-43,9,-10,-43,0,-10.8,-43,-9,-10,-43
850 DATA -8.8,1.5,-43,-2,8.5,-43
860 DATA 0,9.5,-48,2,9.3,-48,9.2,1.5,-48,10,-10,-48,0,-10.2,-48,-10,-10,-48
870 DATA -9.2,1.5,-48,-2,9.3,-48
875 DATA 8.7,-8.7,21,15,-8.7,-16,35,-10,-36,35,-10,-40
876 DATA -8.7,-8.7,21,-15,-8.7,-16,-35,-10,-36,-35,-10,-40
877 DATA 0,13,-37,0,33,-60,0,33,-69,0,14,-60
878 DATA 6,11,-43,6,11,-48,11,5,-43,11,5,-48,-6,11,-43,-6,11,-48,-11,5,-43
879 DATA -11,5,-48
880 DATA 259
890 DATA -1,2,3,4,5,6,7,8,1,-9,10,11,12,13,14,15,16,9,-17,18,19,20,21,22,23,24,17
900 DATA -25,26,27,28,29,30,31,32,25,-33,34,35,36,37,38,39,40,33
910 DATA -41,42,43,44,45,46,47,48,41,-49,50,51,52,53,54,55,56,49
920 DATA -57,58,59,60,61,62,63,64,57,-65,66,67,68,69,70,71,72,65
930 DATA -73,74,75,76,77,78,79,80,73,-81,82,83,84,85,86,87,88,81
940 DATA -89,90,91,92,93,94,95,96,89,-97,98,99,100,101,102,103,104,97
950 DATA -1,9,17,25,33,41,49,57,65,73,81,89,97
960 DATA -2,10,18,26,34,42,50,58,66,74,82,90,98
970 DATA -3,11,19,27,35,43,51,59,67,75,83,91,99
980 DATA -4,12,20,28,36,44,52,60,68,76,84,92,100
990 DATA -5,13,21,29,37,45,53,61,69,77,85,93,101
1000 DATA -6,14,22,30,38,46,54,62,70,78,86,94,102
1010 DATA -7,15,23,31,39,47,55,63,71,79,87,95,103
1020 DATA -8,16,24,32,40,48,56,64,72,80,88,96,104
1030 DATA -44,105,106,107,108,92
1040 DATA -46,109,110,111,112,94
1050 DATA -81,113,114,115,116,89
1060 DATA -82,117,118,-83,119,120
1070 DATA -87,121,122,-88,123,124
1080 DATA -117,119,-121,123,-118,120,-122,124
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0154

     Volume in drive A has no label
     Directory of A:\

    ACNUDE4  NQD      1032  10-03-87   9:06p
    ACNUDE5  NQD      3661  10-03-87   8:28p
    ALFRED   PQC      1283   9-11-86  11:55p
    BARDOT   PQC      1571   2-07-88  10:23p
    BATCHICK NQD      1665  11-16-86   2:14a
    BETTY    NQD      2139   7-19-87   5:55p
    CINDY    NQD      2540  11-16-86   3:31a
    CLOWN    PQC      1139  11-14-86   6:21p
    DRAGON   IMG     16075   2-23-89  11:51a
    DRU      NQD      2616  11-15-86   1:00p
    ELLEN    NQD      1896  11-16-86   4:01a
    ENTEP    PQC       729  11-15-86   1:21p
    FILES154 TXT      2642   3-16-89  10:43a
    FRAN     NQD      1474   7-19-87   6:51p
    HONEY    NQD      2376  11-15-86   3:23p
    JANE     NQD      2853  11-16-86   2:46a
    KIRK     PQC      3275   9-26-86  10:45p
    LORETTA  PQC      1703   1-01-88   1:17p
    MARIA    NQD      3777   9-26-86  10:40p
    MICKEY   PQC       820  11-16-86   4:15a
    MONA     PQC      6230   1-29-87  10:10p
    MOTHER   PQC      2083  10-30-87  12:16a
    NUSQ     COM      2176   5-19-84   5:31p
    PANTHER  PQC       979  11-15-86   3:40p
    PHANTOM  PQC      1407  11-15-86   3:56p
    READMAC  IMG     16076   2-07-88  10:43p
    REPP310  DOC     52864   2-16-89  11:19p
    REPP310  EXE    136683   2-23-89  12:36p
    REPPHELP DAT      4224   2-07-89  10:18p
    ROXANN   NQD      2948  11-15-86   7:02p
    SAMPLE   SHO       109   2-23-89  12:11p
    SANTA4   PQC      2199   8-03-86  12:02a
    SANTA8   PQC      3522  11-15-86  10:32p
    SCHROEDR PQC       766  10-31-83   3:13a
    SHUTTL3D BAS      3804   2-14-88  11:51a
    SHUTTLE  PQC      1213  12-25-83   6:08p
    SMURF    PQC      1551   8-28-86  11:30p
    SUNNY    NQD      1988   3-15-86  12:28a
    SUSAN    NQD      3399   7-29-86  10:12p
    SYLVIA   NQD      3065  11-15-86   5:54p
    TIGER    MAC     14010   2-15-89   8:57p
    TIGER    PQC      3209  10-30-87  12:42a
    TWEETY   PQC      1166  11-16-86   4:27a
    UN-NQD   BAT       384   2-14-88  12:02p
    UN-PQC   BAT       384   2-14-88  12:01p
    UTILHELP DAT      6656   2-07-89  10:21p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       617   3-09-89   9:59a
    MANUAL   BAT        21   6-15-88   8:47a
           49 file(s)     329037 bytes
                            6144 bytes free
