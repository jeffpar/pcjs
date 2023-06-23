---
layout: page
title: "PC-SIG Diskette Library (Disk #3693)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3693/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3693"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## BIGWP.DOC

{% raw %}
```
BIG for WordPerfect(R)
Copyright Hexagon Products September, 1991
Version 1.1 - Part of the B-Ware Family

Table of Contents

Page   Subject
 1  Introduction
 2  New with Version 1.1
 3  Distribution Diskette
 4  Getting Started 
 5  Character Sizes and Shapes
 
 6  Font Usage
 7  The -V Argument
 8  Font Customization
 
11  Sample WP Displays
11  Text Input and Ctrl-W
16  Self Control or Ctrl-X and Y
19  WP Top Level Menu
21  WP Pull Down Menus
23  Selection Lists
225  Formatted Ctrl-X, Y
27  Selection Submenus
29  Bottom Line Menus
31  Reveal Codes or Two Windows
33  File List
35  Spelling Checker
37  Miscellaneous Screens

38  Requirements
39  Trouble-Shooting 
40  A Word about TesSeRact(TM)
44  BIG for WP 1.1 Registration Form

A Note on this Document
=======================
This document is provided both on disk and in print.  The printed version
is produced on a laser printer using large, easy to read, 18-point type.
The disk copy contains no embedded form feeds, and all lines of text are
less than 80 characters.  Three characters are used in succession on screen
images to represent attribute usage of WordPerfect displays.  The three 
characters are an original character, the backspace character, and a shading
character.  When printed, this configuration results in an approximation of
display attributes.

The most sensible way to document a program like BIG is with a series of screen 
images: first, the original WordPerfect screen; second, the resulting BIG
screen.  This has been was done in the printed documentation which is sent to 
each registered user.  Unfortunately, it is impossible to provide generalized
screen images in the on-line documentation of graphic BIG screens.


BIG for WordPerfect(R) 
Copyright Hexagon Products September, 1991
Version 1.1 - Part of the B-Ware Family



Introduction
============
BIG for WP makes WordPerfect accessible to computer users who find the
standard display hard to read.  BIG is a memory-resident program that
captures WP's screen output and enlarges it.  BIG is a companion to
(and not a replacement for) WordPerfect products.  BIG is not 
manufactured, approved, or supported by WordPerfect Corporation.  You
must already own WordPerfect or LetterPerfect to make use of BIG.

You run BIG, which in turn runs WordPerfect or LetterPerfect for you.  You
type directly into WP as usual.  BIG captures the WP display and
selectively enlarges a part of it.  The BIG display changes
dynamically with any WP screen changes.

Because BIG uses larger characters, fewer of them fit, so only a portion of
the WP display can be enlarged at any one time.  Unlike a general purpose
enlarger, which usually focuses around the cursor, BIG is context-sensitive.
The area enlarged is appropriate to the activity you are performing.
For example, if you enter the Reveal Codes command to WP, BIG shows
the four parts of the WP display, each with a few less characters than
WP can display:

 the area of the document file around the cursor;
 the Reveal Codes separator line;
 the code area around the highlighted text;
 the bottom line position indicator.

BIG for WP is part of the B-Ware family.  A related but different product
is BIG for 1-2-3(R) which runs only with 1-2-3 from Lotus Development
Corp.  Other B-Ware products include B-Edit, B-Pop, B-Type, B-Look, and B-Dir.
For a list of products and prices, see the last pages of this document.

BIG, like all B-Ware products, is intended for vision impaired users, but
it can also be used in any situation where it is hard to see the computer
screen, such as enlarging faint letters on a laptop or making a computer
demonstration visible to people in the back of a conference room or classroom.

New with Version 1.1
====================
Version 1.1 has the following improvements:

 Easier-to-read with new 24 and 32 bit fonts.
 BIGWPTSR run automatically for you.
 A standard 80x25 display included with Zoom.
 A formatted scroll performed by Ctrl-X and Y.
 Set your own enlargement default with -V.
 
Distribution Diskette
=====================
The distribution diskette contains 5 files: 

BIGWP.DOC
==========
is a copy of this document.  You may find it easier to read online.  However,
it does not contain the graphics used to print BIG screens.

BIGWP.EXE
=========
is the loading program.  You run BIGWP, it runs BIGWPTSR  and WP or LP for you.

BIGWPTSR
========
is a memory-resident (TSR) component of BIG.  It is run automatically by BIGWP.
BIGWPTSR now comes in two different forms, BIGWP24.EXE and BIGWP32.EXE, which
differ only in the fonts they contain, and in the magnification they provide.
They have been separated to keep the memory requirements down.
On the distribution diskette, BIGWPTSR is the same as BIGWP32.

BIGWP24.EXE
===========
is a version of BIGWPTSR that contains 12 and 24 bit fonts.  Use it as an
alternative to BIGWPTSR by COPYing BIGWP24.EXE to BIGWPTSR.EXE.

BIGWP32.EXE
===========
is a version of BIGWPTSR that contains 16 and 32 bit fonts.  Use it as an
alternative to BIGWPTSR by COPYing BIGWP24.EXE to BIGWPTSR.EXE.

Getting Started 
===============
Since BIGWP.EXE and BIGWPTSR.EXE are always used with WP, it's simplest to 
copy them to the disk and directory which holds WP.EXE.

To run BIG, enter the BIGWP command at the DOS prompt.  BIGWP first loads
BIGWPTSR, then runs WP or LP for you.  You can only run BIGWP from a place
in DOS where you could run BIGWPTSR and  WP or LP yourself.  In other words,
BIGWPTSR.EXE and WP.EXE or LP.EXE must be in the current disk and directory,
or on the DOS PATH.  If you can't run WP, BIGWP can't run it for you.

To pass a filename or command to WP, enter it after the BIGWP command
instead.  For example:

                        BIGWP novel.ch1

When BIGWP loads WP, it passes on any WP arguments, including the filename.
When you exit WP, you automatically exit BIG too.  Before it leaves,
BIG removes BIGWPTSR from memory. 

BIG is intended to run automatically and transparently.  If you already
know WP, you should be able to ignore BIG's presence and proceed with WP
as usual.  You type directly into WP as usual, and just benefit from the
larger sized output.

Almost all keys are passed on to WP without interference; however, a few
key combinations are reserved to control BIG.  These keys are Ctrl
W, X, Y, and Z.  When any of these are pressed, they are interpreted by
BIG and are NOT passed through to WP.  The meaning of these keys is 
discussed more fully later, but briefly:

Ctrl-W
======
toggles BIG's line Wrapping facility.  Normally BIG breaks up or wraps
long WP lines into multiple BIG lines.  This minimizes any left to right
scrolling that would be needed to follow WP's cursor.

Ctrl-X and Ctrl-Y
=================
moves the focus of BIG's enlargement in the X (horizontal) or Y (vertical)
direction.  If you don't like BIG's choice of what to enlarge, you can take
control of the focus yourself.

Ctrl-Z
======
Zooms from one size enlargement to another.

Character Sizes and Shapes
==========================
BIG provides a variety of character sizes and shapes.  Choosing the right
combination makes the display easier to read.  Make sure you know all of the
combinations that are available to you.

You can use Ctrl-Z to Zoom among any sizes contained within BIGWPTSR.  You
can also use the DOS command to replace BIGWPTSR with either BIGWP24 or BIGWP32.
You can also replace the Times Roman fonts contained within BIGWP24 or BIGWP32
with Helvetica fonts using B-Apply.  Finally, you can modify any font used 
yourself with the B-Font font editor.  

These font options are described in the following section.

Font Usage
==========
BIG switches your video hardware to graphics mode and draws out large
pictures of each character.  The pictures are contained inside BIGWPTSR
in data areas called bit maps.  A collection of these character shapes
is called a font.  Fonts have different characteristics, an important
one being whether there are little serifs on the edges of letters.
For example, two versions of the letter 'T', in a square 8 bits wide
and 8 bits tall, look like this:


The more dots or bits used in the font, the finer the picture you can draw,
but the more space it takes up, and the longer it takes to draw each 
character.  With enough dots, you can provide a variety of character shapes.
BIG currently comes with 8, 12, 16, 24, and 32 bit serif fonts.  A sans serif
font is given out to all registered users.

To keep the memory required by BIGWPTSR down, it has been separated into
two versions on the distribution diskette.  BIGWP24.EXE contains an 8, 12,
and 24 bit font, whereas BIGWP32 contains an 8, 16, and 32 bit font.  To use
the 12 and 24 bit fonts, use the DOS COPY command to copy BIGWP24.EXE to
BIGWPTSR.EXE.

Both versions provide a range of magnification, the exact level depends
on what video hardware you are using.  For example, the following table
lists the number of rows and columns that comprise one screen on a VGA:

         BIGWP24     BIGWP32
         Rows Cols   Rows Cols
          7 x 13      6 x 10  
          7 x 27      6 x 20
         13 x 27     10 x 20 
         14 x 27     12 x 20 
         17 x 27     15 x 20  
         14 x 53     12 x 40  
         21 x 53     17 x 40
         25 x 80     25 x 80

When BIG is running, you can switch among character sizes with the Zoom
command (Ctrl-Z).

With version 1.1, the Zoom feature also includes a standard WP display size
of 25 rows and 80 columns.  Once you find the level of magnification you
prefer, you can tell BIG to start out using that level.  You do this
with the -V command.

The -V Argument
===============
The exact range of enlargements available depends on the video hardware and
version of BIGWPTSR you use.  When you start BIGWP, it chooses a medium
enlargment which you can modify by repeatedly pressing Ctrl-Z.  If you like,
you can tell BIGWP which enlargement to start out in, by entering the video
mode number on the BIGWP command line after the -V argument.

The standard display of 25 rows of 80 columns each, is referred to as video
mode 0.  The next size, when you press Ctrl-Z once more, is a blocky,
text-mode enlargement of 6 rows of 10 columns each.  This is video mode 1.
Each time you press the Ctrl-Z after the standard display, you increase
the video mode by 1.  

Press Ctrl-Z repeatedly until you get to the 25 row, 80 column display mode.
Then count how many Ctrl-Z's you must enter to get to your preferred 
enlargement mode.  Next time you run BIGWP, enter that number after the -V
argument.  For example, 

    BIGWP -V2

tells BIG to start out in video mode 2.  This is the enlargement mode you 
get by pressing Ctrl-Z twice after the 25x80 display.

Font Customization
==================
The fonts contained in BIG may be replaced.  By default, the character
shapes are Times-Roman serif.  For example, the capital T doesn't consist
of just two straight lines, but rests on a base and has two little serifs
coming down from each edge of the top line.  

When you pay for BIG, you also receive two extra programs, B-Font and B-Apply,
and several extra fonts, including an alternative sans-serif font called
Helvetica.  The Helvetica font contains no little serifs.  For example,
the capital T consists of just two straight lines.  You can apply these
alternative fonts to BIG with the B-Apply program.

Additionally, the fonts themselves may be modified using B-Font, a simple
font editor provided with BIG for WP.  You can use such a modified font
in BIG or in any other B-Ware program.  You can also import other fonts of a
suitable size and format.  


Sample WP Displays
==================
The most appropriate way to document BIG is to provide before and after
pictures of what BIG does.  On the following pages, images have been printed
directly from the screen monitor.  Images are taken of WP in several contexts, 
and the BIG enlarged screen is shown next to it.

Text Input and Ctrl-W
=====================
Each line on the WordPerfect display can be up to eighty
characters wide.  Since BIG uses larger characters, fewer of them fit
on each screen line.

When you are enter text, BIG breaks up each WP line into pieces small
enough to fit across the BIG screen.  This lets you type quickly into
WP without any unnecessary scrolling to distract you.  Each WP line 
starts a new BIG line, and is preceded with a triangular pointer ().
The BIG display adjusts to keep the text under the WP cursor on the display.

BIG also displays WP's bottom line status indicators showing the document,
page, line, and position.  When there is room on the BIG display, these
fields appear exactly as they do on the WP display.  However, when you use
a large magnification, the fields are compressed to fit.  For example, "Pos 1"
is first compressed to "P 1", and then to "P1" if necessary.  Every attempt
is made to convey the most information on each screen.

Other abbreviations are used on BIG's bottom line as appropriate.  For
example, the letter 'T' is used to show Typeover mode; 'BLK' is used when
a Block is active; etc.

By default, BIG breaks up wide WP lines so each fits on the BIG screen.
However, BIG also provides an alternative method of display.  In this
alternative mode, each BIG line shows a different WP line.  It is as if
a rectangular window or cutout were placed over the original WP display.
The window is moved automatically to contain an area of text around
the WP cursor.

Ctrl-W toggles between the two display modes.  If you find the display of
a certain WP screen awkward, try pressing Ctrl-W to see if it improves.

Effect of Ctrl-W
================

Repeated Ctrl-Y's
=================
Self Control or Ctrl-X and Y
============================
Every effort has been made to get BIG to enlarge an area of the WP screen
relevant to the state of WP.  But there are sure to be some cases where you
want to see something else on the screen.  Two commands, Ctrl-X and Ctrl-Y,
let you control what BIG enlarges.

Ctrl-X moves the focus to the right (X-direction).  It wraps from the
right edge to the left edge.  Ctrl-Y moves the enlargement focus down
(Y-direction), wrapping from the bottom to the top.  You can press these
keys repeatedly to move further in the specified direction.  Press any
other key to return to the normal BIG display.

In some cases, you might want to retain BIG's efforts at formatting the
WP screen, but you want to see more of a particular line.  In other 
cases, you might want to remove BIG's formatting completely and look 
at the unedited screen.  When you first press Ctrl-X or Ctrl-Y, BIG
asks if you wanted the display formatted or not.

To remove BIG's formatting, answer this question NO by pressing the N key.
If you want to retain BIG's formatting, answer YES by pressing the Y key.

In an unformatted display, BIG shows a section
of the screen that contains the WP cursor.  The column and row of the
WP character shown at the upper left corner of the BIG screen is
displayed on the bottom BIG line.

If you are not sure what you're looking at, press Ctrl-X enough times until
you arrive at the first column.  Then press Ctrl-Y enough times until you
arrive at the first row.  You can now move over the WP screen easily.

When you use either of these commands, BIG enlarges a rectangle of the WP 
screen.  Press the Ctrl-Y and BIG moves the rectangle down the WP screen
(in the Y direction).  Press the Ctrl-X and BIG moves the rectangle to the 
right (in the X direction).  These commands allow you to see every character 
of the WP screen without any editing by BIG.

WP Top Level Menu
=================
In addition to its function key commands, WordPerfect also offers pull-down
menus.  When you call up the WP menu, BIG displays the menu choices across
the screen as does WP, but each menu choice is spelled out vertically.
You can choose a menu item by pressing the highlighted letter of the desired
command.  Alternatively, you can use the left and right arrows to highlight
an entire command, then select it by pressing Enter or pull it down with
the down arrow key.

BIG's top level menu display format was chosen because it retains the sense
of moving between menu choices with the arrow keys.  For example, you can move 
from File to Search by pressing the right arrow key twice.  To pull down a
submenu, you can use the down arrow key.  

WP Pull Down Menus
==================
You can pull down a submenu from WP's top level menu by pressing Enter when
the submenu name is highlighted, or by typing in the highlighted mnemonic
character of the submenu name.

As you do so, BIG displays the submenu choices.  When there is enough room
on the BIG display, all submenu choices are displayed.  Otherwise, only as
many as fit are displayed.  You can uncover the remaining choices by
using the up or down arrow keys.  As you do so, WordPerfect highlights
other submenu choices, and the BIG screen follows along.

Unlike LetterPerfect, WordPerfect offers submenus within submenus.  When
you are in one of those circumstances, BIG maintains a list of your previous
choices above a double line, and the remaining submenu choices below it.

Selection Lists
===============
Several WP commands display the word "Selection" and a list of choices
on the bottom line of the screen.  These are an alternate form of menus.
When BIG identifies this condition, it extracts the menu
choices and displays them on the BIG screen.  You then choose among them
as you normally would in WP.

The BIG display shows the name of the selection list on the top BIG line,
the Selection line on the last BIG line, and as many choices as fit
in between.  Note that in rare cases, there are more choices than fit
in the BIG display.  You can either use the Ctrl-Y command (documented
elsewhere) to view these choices, or make a selection that is not displayed
on the BIG screen.  BIG recognizes the choice, and the Selection
Submenu display shows it correctly.

There is usually not enough room on the BIG display for you to see what
the current setting are for Selection choices.  If you want to examine 
them, select the item, and the Selection Submenu shows the current
setting.  If you don't want to change it, you can just press enter or
back out of the choice with WP's Exit key.
 
Formatted Ctrl-X, Y
===================
In the Selection List screen example, the list under Format Line had too
many entries to fit on the BIG screen with the chosen magnification.  Also,
for each entry, the present setting began too far to the right of each
entry to fit on the BIG screen.

There are a few ways to see more information.  You can press the number
key corresponding to one of the entries.  WP then isolates that entry
and BIG can devote an entire screen to the single entry.  You could also
use Ctrl-X and Ctrl-Y to move the focus of its enlargement.

Notice that the WP selection list actually is double spaced.  BIG's display
actually formats the WP display by single spacing the entries, and by 
displaying the top and bottom WP lines of information.  Even though you
want to move the focus of the enlargement, it is useful to preserve BIG's
formatting.

When you first press Ctrl-X or Ctrl-Y, you are asked if you want a Formatted
display or not.  If you respond Yes, BIG preserves its formatting.  The
display is still single spaced.  Ctrl-X moves the enlargement horizontally
so you can see the current settings for the displayed items.  Ctrl-Y moves
the enlargement vertically so you can see the remaining items that didn't fit 
on BIG's display.

Selection Submenus
==================
As soon as you choose one of the categories from a selection list, BIG
displays the category and the current setting.  The top line of the BIG
display shows the name of the Selection menu, the bottom BIG line shows
your Selection choice, while the category and current setting are displayed
in the middle of the BIG display.

You can always use this method to obtain the current setting for any
option, even if you don't intend to change the current setting.  Just
type the number or letter of the category you are interested in, and BIG
displays the category and the current setting.  If you are only using
this method to inspect the value, you can then exit without making a change
with WP's Exit key.

Bottom Line Menus
=================
A third form of WP menu is displayed entirely on the bottom line of the
WP display.  An example is the Justification option of Layout Line in 
WordPerfect.  When BIG recognizes this form, it creates a new display in
which it breaks up the bottom line into components and displays them
vertically, much like a pull-down menu.

The current or default choice is displayed to the left of a question
mark on the last line of the BIG display.

Reveal Codes or Two Windows
===========================
When you use the Reveal Codes feature of WordPerfect, or when you are using
two windows to display two documents, WP divides the screen into two parts.
When BIG  for WP recognizes this condition, it also divides the BIG screen
into two parts.  If you are using Reveal Codes, the letters "RC" are shown
in the leftmost position of the bottom status line.  

The separator line is shown in the middle of the screen.  Note that the 
characters showing margins and tab stops are kept in parallel with the text 
cursor.

File List
=========
WP presents a list of files for you to use.  When BIG recognizes the file 
list display, BIG enlarges the two bottom menu lines, and the name of the file
that is currently highlighted by the cursor.  The bottom two lines contain
all the WP file options.

Use the arrow keys, as usual in WP, to highlight any other file you are
interested in.

BIG does not display the WP file header information on this screen.  If you
want to examine it, you can do so with BIG's Ctrl-Y command, documented
elsewhere.

Spelling Checker
================
WP checks the spelling of your documents.  When it finds a questionably 
spelled word, it highlights that word in the document window, then presents a 
list of alternative spellings.  You can select a replacement by typing its
letter, or perform a variety of other actions.

BIG shows the word in question, lists the alternatives, and also enlarges the
possibles actions to be taken.  The BIG screen places the questionably 
spelled word along with the context in which it appears on the top line of
the screen.

In this example, the BIG screen is very crowded.  You could thin it out by
reducing the enlargement.  If there were more possible spellings than could
fit on a BIG screen, you can use Ctrl-Y for a formatted scroll over the 
word list.

Miscellaneous Screens
=====================
Some screens are not easy for BIG to characterize.  An example is the Base
Font screen.  Although there is a choice available in WP's bottom line, the
cursor is positioned in the top portion of the screen.  You want to move the
cursor from one entry to another before you perform the command selection.

In many of these cases, when the magnification level allows it, the BIG
display is broken up into three pieces: the WP top line, the WP bottom
line, and the WP cursor line.  Each of these areas is enlarged by BIG.
In most cases, this gives you the information necessary to perform the
activity.

In some cases, however, BIG's selection of what to enlarge may not match
what you would choose yourself.  In these cases, you can take control
of the focus of BIG's enlargement with the Ctrl-X and Ctrl-Y commands.

Requirements
============
BIG runs in graphics mode, and so requires a video card and monitor that
are capable of graphics.  These include CGA, EGA, and VGA.  BIG runs
on monochrome displays if you have a Hercules monochrome graphics card.
BIG requires a WP screen driver that produces 25 rows of 80 characters each.

BIGWP takes up about 45K of resident memory.  This is required in addition
to the memory taken up by WP.  Memory in your computer is also taken up by
other resident utilities and drivers you have installed on your machine. 
You probably cannot run BIG with WP unless you have 512K of memory.

BIG currently runs with versions 5.0 and 5.1 of WP.  BIG also runs with 
LetterPerfect version 1.0.  BIG provides some help with WP version 4.2,
but BIG is not as compatible with it.  If you have 4.2, try BIG to decide
if it provides enough support for you.

Trouble-Shooting 
================
BIGWP runs WP.EXE for you.  If you get the message "Can't find WP.EXE!",
it means you are trying to run BIGWP at a place in DOS where you couldn't
run WP.  Make sure you are in the WP directory or that WP is on the DOS PATH.

BIG only runs with WP drivers that show 25 lines of 80 columns.  If 
you are running with a different WP driver, you must modify it before
running BIGWP.

BIGWPTSR is a TSR and as such may interfere with other TSRs.  If your
machine locks up when you run BIGWPTSR, try modifying the order or number
of TSRs you run.

If your video display looks incorrect, try pressing Ctrl-Z a few times.
This command changes the magnification (Zooms), but since it also initializes
the graphics devices each time, it may recover from some video problems.

BIG does not handle WP graphics mode.  You cannot use WP commands, such as
View, which require graphics mode displays.

BIG does not handle WP Shell to DOS.  You cannot use this WP command with 
BIG.

BIG assumes the WP color choices for normal text entry and for blocked text
remain at the WP defaults.  If you have changed these, you must reset them.
BIG uses these colors to identify highlighted portions of the screen.


A Word about TesSeRact(TM)
==========================
This product uses the TesSeRact(TM) Ram-Resident Library and supports
the TesSeRact Standard for Ram-Resident Program Communication. For
information about TesSeRact, contact the TesSeRact Development Team
at:

     TesSeRact Development Team
     c/o Chip Rabinowitz
     2084 Woodlawn Avenue
     Glenside, PA 19038
     (215) 884-3373

     Compuserve: 70731,20
     MCIMAIL:    315-5415

This MCIMAIL Account has been provided to the TesSeRact Development
Team by Borland International, Inc. The TesSeRact Development Team is
in no way associated with Borland International, Inc. TesSeRact is a
trademark of the TesSeRact Development Team.

TesSeRact is Copyright 1988 TesSeRact Development Team, All Rights
Reserved.

What's Shareware?
=================
With shareware, the software author sends evaluation copies to a few central
places such as bulletin boards.  They in turn make copies available to others 
at little or no cost.  Quality software is passed on continuously, making
the software readily available to all.  Users need only pay for software that
works for them.

Since there are many shareware authors, and a large audience for quality 
shareware, some companies called disk vendors have formed to bring the two 
together.  By charging a small copying fee, they can collect catalogs of 
shareware, pay for toll-free telephone numbers, take credit charges for disk
copying fees, and make a profit.  A catalog from these vendors is the best 
survey of quality shareware available.  They usually charge $5 or less per disk
and $5 for shipping and handling. 

Shareware authors get no payment from the bulletin boards or disk vendors who
distribute the shareware.  When you pay a vendor for an evaluation copy of the 
software, the payment covers their expenses and goest to their profit.  The 
shareware authors get paid only when you pay them directly for the products
you choose after you evaluate them.

Although you can evaluate the software before paying, it is not free.  If you
continue to use the software after a reasonable evaluation period, you 
are required to pay for it.  Shareware is protected by the Copyright laws.
However, since the software author does not keep track of who is evaluating
the software, you're not going to get a bill.  Rather, you are on your honor
to pay for the software.  It is much like public supported television.

Where's My Copy?
================
If you are ready to buy the software, order it directly from Hexagon Products.
See below for the address and price list.  If you are looking for an evaluation
copy, you should find it from one of the shareware channels.

Because of the indirect method of distribution, shareware ends up in many more
places than the author ever knows about.  If you can't find Hexagon Products
sharewarre on a bulletin board or from a local users group, you can use one 
of the following sources which carry the most recent versions:

The DISABIL forum of Compuserve.

Public Brand Software in Indiana, 800-426-3475.

Public Software Library in Texas, 800-242-4775.

How Much?
Prices are fixed through 12/92 except for B-Pop whose price might be raised.
After 12/92, please ask for current prices.

Product             Price   Latest Version
B-Edit              $39     2.1
BIG for 1-2-3       $39     1.0
BIG for WP          $39     1.1
B-Pop               $27     2.1

$9 discount on each of second and subsequent items in a single order.
Upgrade from a previously registered version is $10.

Documentation for all programs is provided in large, easy-to-read,
18-point type.  In addition, all of the following large-character
utility programs are included with any purchase at no extra cost:

B-Type, B-Dir, and B-Print
==========================
are large-character replacements for the related DOS commands.
B-Print prints text files  in large characters on Epson-compatible
dot-matrix printers.

B-Look
======
is a text browser.  Scroll with arrow keys.

B-Font and B-Apply 
==================
modify the character shapes used in the above B-Ware products.

    contact:         Hexagon Products
    Bill Arendt      P.O. Box 1295
    (708) 692-3355   Park Ridge, IL  60068-1295



BIG for WP 1.1 Registration Form
================================

Please complete the following registration form and send it to:
                    Hexagon Products
                    P.O. Box 1295
                    Park Ridge, IL  60068-1295
                    (708) 692-3355

Name: _________________________________________________________________________

Company: ______________________________________________________________________

Address: ______________________________________________________________________

City: ___________________________ State: ______________________________________

Zip: _____________ Phone: _____________________________________________________

Optional information:

Using on: Laptop  Desktop

Display:    VGA     EGA     CGA     Herc    Mono    Dual

Oper.Sys:   DOS     OS/2

Diskette:   3.5     5.25    Either

Preferred Input Device: Mouse       Keyboard

Preferred Enlargement:  Largest     Medium      Least 

What programs do you want enlarged? ___________________________________________

Suggestions for improvement? __________________________________________________

Where did you find it? ________________________________________________________

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║        <<<<  PC-SIG Disk #3693 BIG FOR 1-2-3 and BIG FOR WP  >>>>       ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To print documentation for BIG FOR 1-2-3, type:                        ║
║     COPY BIG123.DOC PRN  (press Enter)                                  ║
║                                                                         ║
║  To print documentation for BIG FOR WP, type:                           ║
║     COPY BIGWP.DOC PRN  (press Enter)                                   ║
║                                                                         ║
║                                                                         ║
║ (C) Copyright 1993 PC-SIG Inc. 1030D East Duane Ave. Sunnyvale CA 94086 ║
║     For inquiries call: (408) 730-9291  For orders call: (800) 245-6717 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3693

     Volume in drive A has no label
     Directory of A:\

    BIG123   DOC     53640   1-31-91  10:11a
    BIG123   EXE     17551   3-08-90  10:51a
    BIGWP    DOC     31807  11-18-91   2:58p
    BIGWP    EXE      9243   8-28-92  10:14a
    BIGWPTSR EXE     31184   8-28-92  10:14a
    GO       BAT        31   6-04-92   2:25a
    GO       TXT      1001   5-18-93  10:09a
    BIGWP24  EXE     29808   8-28-92  10:14a
    BIGWP32  EXE     31184   8-28-92  10:14a
            9 file(s)     205449 bytes
                          110592 bytes free
