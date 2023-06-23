---
layout: page
title: "PC-SIG Diskette Library (Disk #3219)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3219/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3219"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## BGIUSER.DOC

{% raw %}
```
***********************************************************
*                                                         *
*  Save icon in Borland Graphical Interface (BGI) format  *
*                                                         *
***********************************************************


Hit Alt+F for File in main menu, then hit S for Save
and F for Format.  Choose Borland graphic image in the
button menu.  Any decent file name may be used here.


The Save Format normally defaults to the type of icon
loaded into VICON.  Icons that are not externally loaded
automatically defaults to VICON's Native File Format.





****************************************************************
*                                                              *
* Import and export icons in Borland Graphical Interface (BGI) *
*                using TURBO PASCAL, C and C++                 *
*                                                              *
****************************************************************

Procedure RetrieveImage(FileName : PathStr;    var P : Pointer);

{ This routine retrieves an image stored in a disk file within
  your own application.  Call PutImage(X, Y, P^, COPYput) later
  to show the image at (X, Y) on screen.

  Turbo C and C++ user should have no problem in translating this.}

var
  F : File;
  Size : Word;

begin
  Assign(F, FileName);
  Reset(F);
  Size := FileSize(F);
  Reset(F, Size);
  GetMem(P, Size);
  BlockRead(F, P^, 1)
  Close(F)
end;  {RetrieveImage}



Procedure SaveImage(FileName: PathStr;    X1, Y1, X2, Y2 : Word);

{ This routine saves an image in a disk file within your own
  application.  If you later run VICON and see only part of the
  image, select Resize in the main menu to clip the image to the
  size you desire.

  If the image is larger than 64 X 64 pixels, VICON will truncate
  it automatically when it is read from the file.  However, this
  file is not altered until you choose to overwrite it later,
  so that you are free to retrieve and edit any BGI-compatible
  images with VICON. }

var
  F : File;
  P : Pointer;
  Size : Word;

begin
  Size := ImageSize(X1, Y1, X2, Y2);
  GetMem(P, Size);
  GetImage(X1, Y1, X2, Y2, P^);
  Assign(F, FileName);
  Rewrite(F, Size);
  BlockWrite(F, P^, 1);
  Close(F)
end;  {SaveImage}



P.S.  Vicon is capable of extracting icons from those files
      containing multiple BGI images.



+++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Please read ReadMe.DOC, Register.DOC, Licence.DOC +
+++++++++++++++++++++++++++++++++++++++++++++++++++++

```
{% endraw %}

## LICENCE.DOC

{% raw %}
```


               +++++++++++++++++++++++++++
               +******** Licence ********+
               +++++++++++++++++++++++++++


VICON is NOT public domain or free software, but is being
distributed as "shareware".

<VICON version 1.9> is copyright (C) 1991 by KHAI-WEI CHOONG.

Non-registered users of this software are granted a limited
license for a period of 30 days to make an evaluation copy
for trial use on a private, non-commercial basis, for the
purpose of determining whether VICON is suitable for their
needs.  At the end of this trial period, you should either
register your copy or discontinue using VICON.

Your registration will enable us to provide you with support
and updates, and stay alive.

A VICON registration entitles you to use the program on any
and all computers available to you, with the following
restriction:-  If other people have access to this program
or may use it, then you should purchase a site licence.
( See further information on site licences below )




               ++++++++++++++++
               + Registration +
               ++++++++++++++++

There are several excellent reasons for registering:

   1) You will receive user support by correspondence.
   2) You will be notified of significant updates.
   3) You may upgrade VICON at a discount.
   4) You will leave me tremendous incentive to improve
      VICON and other GUI software.


<<< Individual registration costs US$30 >>>
          ( or  Australian $40 )



Please specify the type of DS/DD disk in the form.

*************************************************************
*  Registration and Order form is available in the file     *
*  Register.DOC.  Alternatively, you can run VICON, select  *
*  <File> in the main menu and <Registration> in the        *
*  pulldown menu.  Then hit Alt+P or click on the <Print>   *
*  button of the text browser to print Register.DOC.        *
*************************************************************





We offer special prices/discounts on quantity orders,
multiple-user licenses, and dealer pricing.  We also
offer discounts to educational institutions, full-time
students and BBS sysops.  Contact for details.





              ********* DISCLAIMER **********

This program is provided AS IS without warranty,
expressed or implied.



            ********** SITE LICENCES **********

Corporate site licensing agreements allow duplication and
distribution of specific numbers of copies within the
licensed institution.  Duplication of multiple copies is
not allowed except through execution of a licensing agreement.
Site license fees are based upon estimated number of users.

Note that with a site license, only one copy of the program
will be sent.  You will be responsible for distributing
additional copies.

Please contact for more information.

ALL PRICES AND DISCOUNTS ARE SUBJECT TO CHANGE WITHOUT NOTICE.
Discounts are not cumulative;  they apply to single orders of
like products only.  Unit prices are the same as for
individual users.


WARNING !!  YOU MAY NOT USE VICON WITHIN YOUR ORGANIZATION
            WITHOUT A PRIOR PURCHASE OR LICENSE ARRANGEMENT.





           ********** INQUIRIES / CORRESPONDENCE ***********

Please direct all letters to:

     KHAI-WEI CHOONG
     11 RAY STREET
     WILSTON
     Queensland
     Australia  4051


Kevin Solway, the Shareware author of BREEZE text editor,
TEXTLIFE and CONTROL3, is my close friend here in Brisbane,
Australia.  I am happy to pass on any letters/documents to him.

The other Shareware program I have written is TCD version 1.0.
Feedback from you on either program will be much appreciated.






++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Please read Register.DOC, ReadMe.DOC, BGIuser.DOC, VICON.DOC +
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
```
{% endraw %}

## README.DOC

{% raw %}
```

               *   *   *   *   *   *   *   *
             *   *   *   *   *   *   *   *   *
         ***************** VICON *****************
           *   *   *   *   *   *   *   *   *   *
             *   *   * <Version 1.9> *   *   *
               *   *   *   *   *   *   *   *
                 *   * Programmed by *   *
                   *   *   *   *   *   *
                     *Khai-Wei CHOONG*
                       *   *   *   *
                         *   *   *
                           *   *
                             *









                 ******** FEATURES ********


VICON is a powerful fully-fledged icon editor/designer
in a friendly graphical user interface.  It also comes
conveniently with File Manager and Directory Manager.
You are encouraged to make use of VICON and become a
registered user.



The major features in VICON are summarized as follows :-


  1) Draw solid or framed lines, rectangles, circles and
     ellipses.


  2) Draw rotatable, solid or framed triangles and diamonds.


  3) Each shape has its own variable color, stroke size,
     undo and redo, paint-over and paint-around operations.


  4) Remapable colors, including changing only one or all
     color(s) in a user-defined region ( circular, rectangular,
     triangular, etc ) to a specified color within the icon.


  5) Flood fill and border fill, with undo.


  6) Kaleidoscopic patterns for all shapes and paintbrushes.


  7) Four paintbrushes: Toggle, Graffiti, Potpourri and Eraser.


  8) Speed control for continuous strokes.


  9) Resizable and scalable icon, up to 64 X 64 pixels in size.


 10) A grid over the drawing area with coordinate indicator
     for accuracy and fine-tuning.


 11) Snap or Free roaming mode to ease cursor movement in grid.


 12) Protected mode can be used as a safety net so that any
     drawn portion cannot be overwritten.


 13) Global undo.


 14) Edit two icons at once by easy swapping between them.


 15) Utilize expanded memory if available.


 16) Video emulation (VGA, EGA, CGA and Mono) and Gray Scale
     with adjustable gradients.


 17) Print icons in different sizes and resolutions, using
     gray scales or colors on:

         * Epson-compatible Dot Matrix Printer
         * Hewlett-Packard LaserJet / DeskJet / InkJet Printer
           or any printer that implements the HP PCL Level III
           printer language
         * Hewlett-Packard Color Plotter or any plotter that
           supports HPGL commands

     Printing options include
         * Landscape or Portrait Orientation,
         * Parallel and COM Port Selection
         * Color Inversion


 18) Palette editor and rotator for color control and
     customization.


 19) Program customization and configuration.


 20) Printer Control: Fonts, Margins, Ports, Line Feeds, etc...
     for printing text in windows


 21) Automatic Screen Save.


 22) Commands can be performed in multiple ways ( using mouse
     and/or keyboard ) via the interactive graphical elements:-

         - Hotkeys
         - Pulldown menus
         - Popup menus
         - Icons
         - Scroll bars
         - Sliders
         - Buttons
         - Rubberbanding


 23) Printable on-line help.


 24) Powerful DOS shell offering two options

         *  Swap VICON to disk or EMS.
            Only a stub of 1616 bytes remains in memory.
         *  Use only available memory in VICON.


 25) File Manager is integrated seamlessly into VICON to let you:

         * Preview and retrieve an icon stored on disk
         * Manage directories and files:
                   Copy, Move, Erase, Rename, Sort, Print,
                   Date & Time, Attribute, View, Info,
                   Volume Label, Wildcards, Directory Tree
         * Execute any program with optional parameter(s)




          ++++++++++ Version 1.2 Updates ++++++++++

*  Improvements in the File Manager :-

     > Ability to create or copy/move files to a
       non-existent directory (and subdirectories).

   For example: if c:\vicon does not exist and you specify
                   c:\vicon\doc\vic

                then VICON will create these (sub)directories:
                   c:\vicon
                   c:\vicon\doc
                   c:\vicon\doc\vic


*  Autodetect and use numeric coprocessor





          ++++++++++ Version 1.3 Updates ++++++++++

*  More available memory in DOS shell
   Swap VICON to hard disk or EMS memory

*  A configurable 16 Gray Scales palette

*  Improved File Manager

*  Enhanced Global Undo for the continuous strokes

*  Customizable screen saver
   Select 1 of 6 fancy bouncing figures

*  Speed up retrieving icons from disk





          ++++++++++ Version 1.4 Updates ++++++++++

*  Version 1.3 insists on using EMS memory, hanging
   any machine that does not support EMS

   Version 1.4 is able to run on machines without EMS
   memory and should also run happily under 4DOS

*  Fix a minor bug in Palette Editor

*  Minor revision to the file VICON.DOC





          ++++++++++ Version 1.5 Updates ++++++++++

*  Version 1.4's buggy Save features have been removed and
   hereby apologize for any inconvenience.





          ++++++++++ Version 1.6 Updates ++++++++++

*  Improved Save features

*  Add keyboard manoeuvre for the keyboard user to operate the
   three scroll bars in the Palette Editor.
   Press 'R', 'G', 'B' to increase or 'r', 'g', 'b' to decrease
   the intensities of color components.

*  Add keyboard manoeuvre for the keyboard user to operate the
   single scroll bar in the Palette Rotator.
   Press '+' to increase or '-' to decrease the rotator speed.
   Alternatively, use the arrows to move the cursor until the
   thumb inside the scroll bar "captures" the cursor.  Then use
   the left or right arrow to move the thumb.





          ++++++++++ Version 1.7 Updates ++++++++++

*  Improved File Manager

      - Execute any program with optional parameter(s)
      - Edit volume label
      - Directory Tree Display is used to
           > Copy files
           > Move files
           > View files in a different directory





++++++++++ Version 1.8 Updates ++++++++++

* Increased the efficiency and ease of use of the File Manager

* Overall improvement in the user interface





++++++++++ Version 1.9 Updates ++++++++++

* Fix a minor bug in the File Manager





++++++++++ Version 1.9a Updates ++++++++++

* Support chracter mode printing of Hewlett-Packard
  compatible printers





            ++++++++++ Future Versions ++++++++++

*  Version 1.9 (and 1.X in later releases) supports Borland
   Graphical Interface (BGI) format for Turbo C, C++ and Pascal.

*  Future versions (2.0 or later) will also support Microsoft
   Windows' Icon and Cursor as well as DOS Graphic Cursor.
   ( These files will either have .ICO  or .CUR  extension. )

*  VICON's proprietary icon format ( *.VIC ) will be compatible
   with future versions.

*  Registered users can upgrade to future versions at a discount.






                ++++++++++ Copyright ++++++++++

VICON version 1.9a is not copy-protected.  However, the
copyright of VICON is strictly enforced.  You may not
charge a fee for this program.  You may not alter the
program or supporting items in any manner other than
those icon files ------- failing to follow this rule
may cause VICON to refuse to execute.







             ++++++++++ Important Notice ++++++++++

(1) Type VICON at the DOS command line to run the program.

(2) Do not rename or modify VICON.EXE in anyway or it will
    refuse to run.

(3) VICON uses some low level interrupt routines and may
    conflict with some memory resident programs.

(4) VICON can be launched within Microsoft Windows as a
    standard DOS application.





            ++++++++++ Using VICON effectively ++++++++++

(1) Read through the Help in VICON.

(2) The number of available commands may be misleading
    since there are only ten buttons at the left side of
    the screen.  These buttons or icons have multiple
    functions.  Different function is evoked by clicking
    the object concerned with the appropriate mouse
    button(s) or a function key (F1, F2 or F3 etc).
    The function name is displayed at the right end of
    the horizontal menu.

(3) Press F2 to toggle between the icon previewer and
    the file manager.  Alternatively, activate the Window
    button with the mouse to achieve this.



+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Please read Register.DOC, Licence.DOC, BGIuser.DOC, VICON.Doc +
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




VICON comes with over 40 files on a 360K disk:-

      VICON.EXE       Executable Program file

          *.DOC       VICON Document files

          *.CFG       VICON Configuration files

          *.PAL       VICON Palette files

          *.BGI       Video Support files

          *.VIC       Icons in VICON format

          *.IMG       Icons in BGI format



You need not keep all the .BGI files but the one appropriate to
your video graphics.  Moreover, the .BGI files need not reside
in the same directory with VICON.EXE as long as that directory
is included in the PATH command within your AUTOEXEC.BAT file.

I have made a decision not to link the BGI files into VICON.EXE
in order to keep its size small.
```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
Remit to:
           KHAI-WEI CHOONG
           11 RAY STREET
           WILSTON
           Queensland
           Australia  4051


*  VICON Registration .................  US$30.00

                ( or Australian $40.00 )


                Payment by:   ( ) Check    PO # ______________



      Disk is DS/DD:   [ ] 3.5"       [ ] 5.25"



Name: _______________________________________________________________

Company (if purchase is for company use):____________________________

Address: ____________________________________________________________

City: _____________________________  State: _________________________

Country: ______________________________  ZIP/Post Code ______________

Day Phone: (____)____________________  Eve: (____)___________________

Date: ___/___/___    (DD/MM/YY)


I acquired VICON v1.9 from

  [ ] - Friend                   [ ] - Software product
  [ ] - Computer Club            [ ] - Computer Store
  [ ] - Data Base Service        [ ] - Electronic BBS
  [ ] - Other: ________________________________


If you have any ideas or comments that would make VICON a better
program, then please comment below :-
_____________________________________________________________________
_____________________________________________________________________
_____________________________________________________________________
_____________________________________________________________________
_____________________________________________________________________
_____________________________________________________________________
_____________________________________________________________________

```
{% endraw %}

## VICON.DOC

{% raw %}
```


               *   *   *   *   *   *   *   *
             *   *   *   *   *   *   *   *   *
         ***************** VICON *****************
           *   *   *   *   *   *   *   *   *   *
             *   *   * <Version 1.9> *   *   *
               *   *   *   *   *   *   *   *
                 *   * Programmed by *   *
                   *   *   *   *   *   *
                     *Khai-Wei CHOONG*
                       *   *   *   *
                         *   *   *
                           *   *
                             *





This essay was written on 20th June 1991.



Correspondence Address:


      Permanent address:   11 Ray Street
                           Wilston
                           QLD  4051
                           Australia


      Current address ( valid till end of 1991 ) :
                           3/242 Carmody Road
                           St Lucia
                           QLD  4067
                           Australia


================================================================


(1) Conception



    After reading through an article in DR DOBB'S JOURNAL in

    July 1989 which presented the techniques to create simple

    icons, I could not resist the temptation of flashing out

    a much more functional icon editor. Thence I was addicted

    to these catchy little pictures even before Microsoft

    Windows 3.0 immortalized them in the PC world.


================================================================


(2) Who needs icons?



    Iconolaters cannot worship without them.  Neither can

    the modern men whose technological flair has resulted

    in the endless need to compress a thousand words into

    little pictures of instant appeal and meaning.  Icons

    have invaded our lives.  They are on the streets, in

    the courts, and now they are on our screens.  Imagine

    yourself pointing and clicking at them to switch TV

    channels ten years from now!  Or imagine using Microsoft

    Windows without them.....


================================================================


(3) The neglected BGI programmers



    Reverend Borland has provided more than 50 graphics

    routines for Turbo Pascal, C and C++ users.  As a result,
    
    we have seen a flood of graphics applications previously

    unachievable in text mode.  However, I have yet to see

    even a handful of icon-oriented programs.  This is not

    because of inability on the part of programmers, for an

    icon is a relatively simple thing in the world of OOP

    (object-oriented programming).  It is the lack of facilities

    to create icons that has stunted the growth and proliferation

    of icons in graphics applications.  Unlike many graphical

    objects, an icon is a symbolic bit map image that cannot

    be preprogrammed into an application and must be manually

    created, pixel by pixel, in advance.  Hence VICON to the

    rescue.....


================================================================


(4) How good is it?



    See for yourself.

    VICON is similar to many drawing packages in various ways,

    but strives for the much needed ease of use.  For example,

    in a few other drawing utilities, you are "locked" into the

    rubber banding mode in order to draw an object, during which

    you can only stretch the rubberband, click to anchor a pivot

    or quit.  You are not allowed to change colors, stroke

    sizes or even select a menu.  Another major problem is in

    color selection: either the color palette is not immediately

    available and has to be selected via a menu or the palette

    is far away and the user has to constantly move the mouse

    cursor across the screen to click on the desired color.

    VICON addresses these problems to alleviate the tedious

    editing, and provides additional features for special effects

    and high productivity.


================================================================


(5) Bonus Add-Ons



    Since the use of colors is so extensive and important I

    have provided several tools to enhance and coordinate it.

    These include Video Emulation, Palette Editor and Palette

    Rotator.  For those of you who like to grab your icon

    on a piece of paper, you can print out your favourite ones

    on a dot matrix printer, a LaserJet printer or a Hewlett-

    Packard Color Plotter via any parallel or COM port.  A

    word of advice:  if your mouse has been installed on

    COM port 1 and you choose to print via this port, VICON

    will oblige you, with the loss of use of your mouse

    during the printing process.  You can still respond to

    VICON via the keyboard.  The mouse will be faithfully

    restored when the printing is finished.


================================================================


(6) What?!  A file manager in an icon editor?



    Yes, I know you are probably so used to your own file

    manager that you won't even bother with it.  Nevertheless,

    if you do happen to need it, you will have to shell out,

    quit VICON or use a TSR, won't you.  Ah! speaking of TSRs,

    they don't coexist well with graphics.  If you have to use

    a TSR in VICON, be certain to run Video Emulation to

    restore the screen later.  Anyway, a handy file manager

    right at your finger tips is always great.  Moreover,

    this is one dressed in a stunning graphical user interface!


================================================================


(7) The future of VICON



    This depends on whether I get enough incentive in the form

    of constructive criticisms and user registrations.  It will

    be frustrating indeed not to receive any response or reward

    after 18 months of intense effort.  I would like people to

    be honest and trustworthy, even to the author of an icon

    editor.  I have not built in enough intelligence in VICON

    for this task.  If only VICON could read the human mind!


================================================================


(8) Support for other graphics formats



    This is not difficult provided I know the formats.  However

    I have a hard time obtaining the information.  Meanwhile, I

    have already worked out the Microsoft Windows Icon format

    the hard way.  Anyone who is interested in seeing VICON

    support other graphics formats such as PCX, TIFF (etc.) may

    send the complete information to me by mail.  Once it is

    successfully implemented, that version of VICON will be

    sent to the person free.  Any code examples included in

    the information should preferably be written in PASCAL.

    Unless it is well commented, I do not enjoy the task of reading

    or translating C++, much less the cryptic old fashioned C.

    I am also looking for BGI drivers that cater for 256 colors

    at super VGA resolution(s).  Please advise me if you know of any.




    What about porting VICON to Microsoft Windows 3 ?  This

    will be another story.....   Remember, I am anxious to

    hear from you.  And good luck in your future graphics

    programming.  May the GUI and VICON be with you !!!


================================================================


(9) Writing text to screen in graphics mode



    From a programmer's point of view, the similarity between

    an application in text mode and another in graphics mode

    begins and ends in the way text is written to the screen.

    Programming in graphics mode is largely a different ball

    game.  Gone are all the comforts of the 80 x 25 cells

    supported by BIOS.  As soon as you leave text mode, you

    are responsible for the color and intensity of each of

    the 640 x 480 pixels you inherit from a VGA screen.

    The contemporary MS-DOS systems do not permit mapping

    the ROM-based character set(s) directly into a graphics

    display.  Since text is more important than anything

    else, Borland has supplied a few scalable fonts to

    overcome that problem.



               Writing text to a graphics screen is a laborious

    programming task.  When new text is written to the screen in

    conventional text modes, the existing text is simply written

    over, vanishing automatically as the new characters are assigned

    to each row/column position.  In graphics modes, however, text

    output is drawn rather than written.  The new text does not

    replace; rather, it overlaps with the old, confusing the text

    display.  To erase the appropriate text before writing new text

    to the screen, you would have to remove the block of graphics

    background that otherwise would interfere with the text image.

    The following prerequisites must be satisfied in order to

    accomplish this task:

         a) The text style, fonts and justification must be

            identical as when the text was originally written.

         b) The original drawing color must be in effect.

         c) The screen coordinates where the original text was

            written must be known. (This in turn may need to be

            viewport-adjusted.)

         d) The original text itself must be known.

         e) The original color and fill style of the background

            in which the text was written. (The background may

            not even have a uniform color and fill style.)



    So much for erasing text alone.  You also need to

    attend to the following when writing text to the screen:

         a) Temporarily turn off the mouse cursor if it is

            present, otherwise the refreshing of the cursor will

            destroy some portions of the text.

         b) Assuming that the text is being drawn horizontally,

            you must make sure that the starting X-coordinate is

            never less than zero, or nothing will be written to

            the screen.  This is one of the idiosyncrasies of the

            Borland Graphics Interface (BGI).



    Once you have mastered the basics, you can then pitch your

    talent against creating a fully-fledged graphics editor.

    You will need to overcome at least a few of these formidable

    barriers:

         a) Present the user with a blinking cursor so much taken for

            granted in text mode.  You will need to keep track

            of the cursor's position, and its size according to

            the font size and proportional width.

         b) The screen can not be scrolled up or down and left

            or right in the usual manner.  While it is possible

            to use GetImage() and PutImage() to move a major

            portion of the screen image, the operation is slow

            and the memory requirements can be excessive.

         c) There is no way to read a character from the screen.

            Neither is it easy to find the screen position of

            any character, especially when a proportional font

            is used.




    Essentially, you have to invent most of the features found

    in the CRT unit and many, many more to get reasonable results.

    Tough! Tough! Tough!


================================================================


(10) The Graphical User Interface (GUI)



     The subject of GUI could easily fill a thick book.

     Here, I shall show you what you should pay attention to

     as a programmer and what you should look for in a program

     with a GUI from an end user's viewpoint.



       1) An application will benefit the user if it is SAA

          compliant.  SAA stands for Systems Application

          Architecture, which is a collection of selected

          software interfaces, conventions and protocols

          that collectively provides the framework for the

          development and execution of consistent applications.

          Programmers interested in developing their own GUI

          will also reap much benefit if they follow the SAA

          guide-lines set by IBM.  Current examples of powerful

          SAA compliant environments are Microsoft Windows and

          the OS/2 Presentation Manager.  The SAA Common User

          Access (CUA) Advanced Interface Design Guide is

          available from IBM representatives or branch offices.



       2) If you are going to produce a graphics application

          armed with a decent GUI, then learn object oriented

          programming by all means.  This programming methodology

          promises to reduce the complexity of your task much

          more than the ubiquitous structured programming.



       3) The next phase is to make your application event-

          driven.  An event may be a mouse click, a mouse move

          or a key pressed that an application responses to.

          Instead of coding an event loop into every routine

          or subroutine that interacts with a user, you code

          one event manager to dispatch events to appropriate

          routines.  Hence the majority of your routines do

          not bother themselves with the repetitive tasks

          of reading user inputs or interacting with a scroll

          bar and so on....


================================================================


(11) The limitations of Borland Graphics Interface (BGI)



     BGI provides more than 50 primitives for various graphics

     driver supports, line drawing, circle, ellipse, rectangle,

     pie slice, sector, text and viewport.  On the whole, BGI

     is a rather complete and flexible graphics package for

     most general applications.  However, you need to do a great

     deal of work to create a pipeline of graphics elements such

     as buttons, scroll bars, menus and windows required by GUI.

     BGI only provides the drawing primitives.  The rest is all

     up to you.  There are also a few insurmountable obstacles

     presented by BGI.  Unless Borland further improves BGI,

     the increasing availability and acceptance of Microsoft

     Windows or even OS/2 might cast BGI to oblivion.  Hey!

     Borland, are you listening?  Here is a list of features

     absent, inadequately or incorrectly implemented in BGI,

     together with some general problems:



         a) Easier text handling and display are strongly

            recommended.

         b) Greater range of fonts, including bit-mapped,

            stroked and Adobe-type fonts are desirable.

            We would like fonts created from Bezier curves.

         c) Rotatable text is required.

         d) Multiple scrollable graphics windows or viewports

            should be implemented.

         e) Methods to extend the graphics image beyond the

            display limits are desirable.

         f) Provide an interactive program to facilitate the

            creation of customized BGI drivers.  Borland has

            already produced a font editor to create CHR files.

            An equivalent editor for the BGI files would be a

            welcome addition.

         g) VGA256.BGI is pretty useless with its 640 x 200

            resolutions.  Give us BGI drivers for SVGA, XVGA

            etc., with resolutions up to 1024 x 768 and 256

            colors.

         h) Currently only a few graphics modes support multiple

            video pages.  I have one megabytes of video memory

            to be tapped, yet only one page is supported in the

            VGA high resolution mode.

         i) FloodFill() and those palette manipulation routines

            should work in all graphics modes, including IBM8514.

         j) Fix the bug that prevents loading of any external

            font whose source file is larger than 16K bytes.

         k) PutImage() will not work if the whole image

            does not fit inside the screen.

         l) OutText() and OutTextXY() will not work if the

            starting point does not lie inside the screen.

         m) The BGI device driver routines are accessed via the

            vector table.  All but one vector in the table have

            their equivalent routines in Turbo Pascal or C.

            That unsupported vector is SYMBOL.  We would like

            to see it implemented by Borland.

         n) Lastly, but not the least, increase the speed of

            execution of all graphics routines.





     I hope that Borland will release a version of TURBO VISION

     written for BGI.  Even though TURBO VISION is a masterpiece,

     I am reluctant to use it for serious DOS applications simply

     because text mode is too restrictive.  Borland has been

     accused of neglecting the once popular TURBO PASCAL GRAPHICS

     TOOLBOX.  Let's hope that BGI will not suffer the same fate.

     To be fair, Borland has no obligation to offer follow-up

     supports for any of their products.  But then those of us who

     have invested heavily on BGI and Turbo Vision etc. are truly

     living dangerously at the mercy of Borland.  I do like Turbo

     Pascal for Windows.  However, I also want freedom of choice.

     Not everybody wants to develop graphics programs that run in

     Microsoft Windows.  BGI clearly fits the appetites of those

     who want a solid DOS-based graphics foundation to work on.


================================================================


(12) Conclusions


        (a) Icons are no longer just gimmicks and elaborations

            used to fancily dress otherwise conventional programs.

            Icons are pictures without words, conveying messages

            without unnecessarily cluttering the screen with text.

            Icons represent portholes into an application's

            internals, encapsulating latent actions with easy

            access by the user.  Icons serve as screen symbols and

            as buttons to summon or control applications or

            subprocedures.



        (b) Undoubtedly, graphics programming incurs man-months of

            efforts and exacts tremendous demand and dedication

            from the programmer.  However, through the use of

            object oriented and event driven programming, the

            results can be very rewarding indeed.



        (c) Current computer science courses in universities do

            not stress the importance of software engineering

            and user interface enough.  The upshot is many poorly

            designed applications with crummy user interface, low

            level of usability and consistency.  Moreover, since

            our education stresses engineering, few of us have

            formal and proper training in design.  Most of us

            spend hours after hours writing codes without giving

            much thought to program organization, abstraction

            and interaction.  With the advent of object oriented

            programming, which places more weight on design than

            any previous programming approaches, the problems are

            aggravated.  As a result, much of the design work

            occurs during the phase of implementation.  Many

            programmers are finding that, although they have a

            working program, they are forced to redesign and

            rewrite to truly reap the benefits of reusability,

            extensibility and consistency.


================================================================





I invite you to judge and comment on all aspects of VICON.





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Please read Register.DOC, ReadMe.DOC, BGIuser.DOC, Licence.DOC +
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3219

     Volume in drive A has no label
     Directory of A:\

    BGIUSER  DOC      2672   5-24-91   2:13a
    LICENCE  DOC      3965   1-18-92   6:34p
    VICON    DOC     20487   1-18-92   6:37p
    REGISTER DOC      1693   1-18-92   6:37p
    README   DOC      9733   2-18-92  11:29p
    2STARS   VIC      3063   5-06-91   2:34p
    BONE     VIC      3063   5-06-91   2:32p
    CROSSES  VIC      3063   5-06-91   2:34p
    FANTACY  VIC      3063   5-06-91   2:33p
    FIDDLE   VIC      3063   5-06-91   2:33p
    FLOWER   VIC      3063   5-06-91   2:35p
    FRACTAL  VIC      3063   5-06-91   2:35p
    GRID     VIC      2743   3-16-91   1:54p
    ICON     VIC      3063   5-06-91   2:36p
    IDEA     VIC      3063   5-06-91   2:37p
    MAZE     VIC      3063   5-06-91   2:38p
    MEDAL    VIC      2543   5-06-91   2:31p
    NICE     VIC      3063   5-06-91   2:38p
    PRETTY   VIC      3063   5-06-91   2:39p
    SMILE    VIC      3063   5-06-91   2:40p
    SUPER    VIC      3063   5-06-91   2:40p
    TRIANGLE VIC      3223   5-06-91   2:41p
    2STARS   IMG      1286   5-06-91   4:00p
    CROSSES  IMG      1286   5-06-91   4:02p
    FANTACY  IMG      1286   5-06-91   4:04p
    FLOWER   IMG      1286   5-06-91   4:03p
    ATT      BGI      6269   5-02-89   5:50a
    CGA      BGI      6253   5-02-89   5:50a
    EGAVGA   BGI      5363   5-02-89   5:50a
    HERC     BGI      6125   5-02-89   5:50a
    IBM8514  BGI      6665   5-02-89   5:50a
    PC3270   BGI      6029   5-02-89   5:50a
    VGA256   BGI      3289   5-31-89   1:00a
    SVGA256  BGI      3660   2-09-91   1:30a
    HARRIS   PAL        17   3-07-91   3:12p
    PALETTE  PAL        17   9-25-90   3:24a
    PINK     PAL        17   3-20-91   6:23a
    SPECIAL  PAL        17  10-02-90   9:55p
    VICON    PAL        17   9-29-90  11:53p
    VISION   PAL        17   9-29-90  11:50p
    VICON    CFG        12   5-22-91  12:27p
    VICON    EXE    163891   2-18-92  11:05p
    GO       BAT        36  10-05-92   5:38a
    SHOW     EXE      2040   9-12-88  10:48a
           44 file(s)     304819 bytes
                           36864 bytes free
