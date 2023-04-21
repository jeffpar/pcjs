---
layout: page
title: "PC-SIG Diskette Library (Disk #3694)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3694/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3694"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## BPOP.DOC

{% raw %}
```

BPOP - A TSR Magnifying Glass
Part of the B-WARE family
Copyright Hexagon Products 1989

Version 2.0                                             December, 1989

BPOPTable of Contents
Page Subject
   BPOP Basics
1  Introduction
2  Quick Start (F1 Help)
4  Fonts and Character Sizes (F2 Zoom)
7  Moving Around with Arrow keys (F3 and F4)

   Searches
9  F6 - Search for Attribute
12 F7 - GOTO Cursor
12 F8 - GOTO Location
12 F9 - Search for Text
13 F10 - Do it Again

   Command Line Options
14 -K Changing the Hot Key
18 -S Changing the Size
18 -V Changing the Video Mode

   Final Notes
19 Technical Specifications
20 A Word about TesSeRact(TM)
21 Disk Vendors, BBS's, Users Groups
22 An Ad for BEDIT
23 Other Products and Prices
24 BPOP 2.0 Registration Form

BPOP - A TSR Magnifying Glass
Part of the B-WARE family
Copyright Hexagon Products 1989

Version 2.0                                             December, 1989

Introduction
BPOP serves as a memory-resident magnifying glass.  It pops up over
text mode screens of other software and enlarges them, making them
easier to read.   BPOP is part of the B-WARE family which includes
BEDIT, BTYPE, BLOOK, and BDIR.  BPOP was written for vision impaired
users, but can be used in any situation where it is hard to see
the computer screen, such as enlarging faint letters on a laptop
or making a computer demonstration visible to people in the back of
a conference room or classroom.

Version 2.0 of BPOP now gives you a choice of magnification.  On a CGA
display for example, you can get an enlargement of 10, 20, 26, 40, or 53
characters per line.  Version 2.0 also has all the functionality previously
contained in BPOP Deluxe, including your choice of hotkey, and search
capabilities.  BPOP is shareware and costs $27.  See the last page of this
file for information on how to pay for BPOP.

BPOP draws characters on your screen based on character maps or fonts
embedded within BPOP.  BPOP uses one of three different fonts: 8-bit,
12-bit, or 16-bit.  Usually, you will settle on one of these fonts and
have no use for the others.  Because of that, and to save memory, several
versions of BPOP are provided on the diskette.  They differ only in what
fonts they contain.  For example, BPOP12.EXE contains the 12-bit font, 
whereas BPOP16.EXE contains the 16-bit font.  If you want both at the
same time, you can use BPOP1216.  This is described further in the section
on fonts.

BPOP is a TSR.  You load it at the DOS command line, and it Terminates,
but Stays Resident (TSR).  After that, it lurks in the background, waiting
to be popped up when you press a certain combination of keys (hot keys).
When you call up BPOP, it reads whatever is currently displayed on your
screen, and redisplays a portion of it using larger characters.  Use the
arrow keys to scroll around to other parts of the display.  When done,
press any other key to return you to where you left off.  BPOP uses 
TesSeRact(TM) to make it work with other TSRs.

Quick Start
You run BPOP by entering the BPOP command at the DOS prompt.  Choose 
BPOP12 or BPOP16 to start out with.  Later, you can experiment with the
different versions to decide which one to use regularly.  The programs
differ only in the character font they contain.  When BPOP is loaded,
it displays a short message, and then returns control to DOS.  It looks
as if BPOP has terminated, but in fact, it is still resident in your
computer's memory.  If you had done a DOS CHKDSK immediately before
and after running BPOP, you would have noticed that the memory available
has shrunk by about 40K.  This is memory that BPOP is using.

You can now enter any DOS command or program.  For example, enter the DOS
DIR command to get a listing of your files as usual.  Now, hold down the
Left Shift key and the ALT key and press the letter A all at the same time.
If everything is correct, BPOP will read the DIR display off your screen,
and replace it with a portion of the screen blown up with larger characters.

BPOP is now active, and will remain in control until you are done with
it. You can see another portion of the display by pressing any of the arrow
keys, including the 4 single arrow keys, HOME, END, PGDN, or PGUP. These
keys cause BPOP to scroll over the underlying data, displaying a different
portion each time.  The top line of the BPOP display always shows the row
and column of the underlying data that is currently displayed.

F1 - Help
While BPOP is active, the function keys have special meaning.  If you 
press F1 for Help, you get a list of the function key definitions.
If you are running BPOP on a graphics screen, you can change the
magnification by pressing F2.  Pressing any key other than a function
key causes BPOP to restore the original screen image and return control.

While BPOP is active, the F5 key makes BPOP not only release control of
the screen, but also removes BPOP from your machine completely.
After this, you won't be able to call BPOP with the hot keys again until
you reload it.  If you haven't loaded any other programs on top of BPOP,
the memory BPOP was using will be returned for other use.

The function keys F6 through F10 serve to search the underlying text
for contents or position.  For example, you can change the BPOP screen
to locate and enlarge the area around the word ERROR, or data with the
attribute of Red on White.

If you press any other key while BPOP is active, BPOP will release control
of the screen and "go back to sleep" waiting to be "awakened" by the
press of its hot keys.

Fonts and Character Sizes
F2 - Zoom
BPOP can use the greatest enlargement, where a screen is filled up with
only 6 lines of 10 characters, on all video hardware.  When BPOP is used
with video cards that support graphics, such as CGA or Hercules, BPOP
gives you a range of character sizes used to make up the display.  You
can cycle among all modes supported for your display when BPOP is active
by pressing the F2 key.

The number of characters displayed by BPOP is a function of the size of
each character and the resolution of your video card and monitor.  BPOP uses
three fonts, an 8-bit, 12-bit, and 16-bit.  In 640x200 graphics mode, a
16-bit font yields 40 (640/16) characters across, and 12 (200/16) lines
down.  Each font contains a pattern to make up all 256 possible characters.
For example, the 8-bit entry for the letter 'A' might look like this:

       ..XX....
       .XXXX...
       XX..XX..
       XX..XX..
       XXXXXX..
       XX..XX..
       XX..XX..
       ........ 

where the dots are 0's and the X's are 1's.  The only inter-character
spacing done in BPOP is provided for in the font itself.  Thus,
the A has an empty row along the bottom and two empty columns along
the right hand side.  The first row is 0011 0000 or 30 in hexadecimal.
In hex, the entire entry for an 'A' would be "30 78 CC CC FC CC CC 00".

Each entry takes up eight bytes, so for all 256 characters 8*256 = 2048 bytes
are required.  For the 16-bit font, each row takes up two bytes, and 16 rows
are required.  For 256 characters, 2*16*256 = 8192 bytes are required.

For the 12-bit font, each row still takes up two bytes, but only the
first 12 bits in the row are displayed.  The 12-bit font uses 14 rows,
so the 12-bit font takes up 2*14*256 or 7168 bytes.  The 12-bit font
used in BPOP is provided courtesy of Kim Kokkonen of TurboPower Software.
It was developed for use in BigEd, a large character word processor.  

The fonts are resident in memory with BPOP, and as such, take memory away
from your application.   BPOP1216.EXE contains all the BPOP fonts.  You
can use this program if you want to keep all your enlargement options open.
However, it is more likely that you will decide upon a single enlargement
and find that the extra fonts just get in the way and take up overhead. 
To solve this problem, there are several BPOP programs, differing only in
what fonts they contain, and consequently, in what size characters they
can produce.

BPOP8.EXE contains the 8-bit font which is used for the largest block
mode enlargement.  It takes up the least amount of overhead but provides
the fewest enlargement options.  The other BPOPs also contain the 8-bit
font in addition to another font.  BPOP12.EXE contains the 12-bit font;
BPOP16.EXE contains the 16-bit font; and BPOP1216.EXE contains all the fonts.

The combination of characters available to you with the a given BPOP font
can be determined by looking at the table below.  Find the desired
enlargement for your hardware, determine the font needed to produce it,
and run the appropriate BPOP program that contains that font.




    Video       Display
    Hardware    Mode        Font    Yield

    Mono        80x25       8-bit   10x6

    CGA         80x25       8-bit   10x6
                320x200     16-bit  20x12
                320x200     12-bit  26x14
                640x200     16-bit  40x12
                640x200     12-bit  53x14

    Hercules    80x25       8-bit   10x6
    Monochrome  720x348     16-bit  22x10
    Graphics    720x348     12-bit  30x12
                720x348     16-bit  45x19
                720x348     12-bit  60x24

    EGA         80x25       8-bit   10x6
                320x200     16-bit  20x12
                640x350     12-bit  26x14
                640x200     16-bit  40x12
                640x200     12-bit  53x12



Number of rows and columns produced on various video cards given
the resolution and font size.

If you find the need to modify the characters used by BPOP yourself,
a font editor is available upon request.  You might choose to modify
the letters to exagerate the differences between an H, M, and W, for
example.  Again, upon request, a customization program is available
to make BPOP use any font with the extension .F8 from the Ultravision
package from Personics or any font suitable for use with BigEd from Kim 
Kokkonen.  Eventually, the font editor and customization program will
be made public and will work on BPOP, BEDIT, and the rest of the
B-Ware utilities.

Moving Around with Arrow Keys
F3 - Page Left
F4 - Page Right
BPOP can only display a portion of the underlying data that was on the 
screen when BPOP was called up.  When using the largest block characters,
each underlying character which occupied one column and one row will be
enlarged by BPOP to take up 8 columns and 4 rows.  The underlying data
can only be fully displayed by BPOP if you look at 8 pages across and
4 pages down.  Since each BPOP screen covers only about 1/32 of the
underlying data it is important to be able to move the BPOP display
to other portions of the data.

The simplest way to do this is by using the arrow keys.  The four arrow 
keys cause BPOP to move one character in the given direction.  UP and 
DOWN move one row, while LEFT and RIGHT move one column.  These arrow
keys are useful for fine adjustments.  If you see most of what you are
looking for on the current BPOP display, you can use the arrow keys to 
see what is just off the edge of the BPOP display.

If you get to the edge of the underlying data, the arrow keys cause BPOP
to wrap the display.  For example, if you are displaying the top row of
the underlying data, and you press the UP arrow, since BPOP can't display
any further up, it will wrap down to the last row of the previous column.

This is analogous to how you read.  If you are at the rightmost edge and
you press the RIGHT arrow, BPOP will go down a page and back over to the 
left margin.  Whenever BPOP wraps like this, it will issue a short low
beep to alert you to the situation.  The top line of the display can
always be examined to determine exactly what portion of the underlying
display is being shown at any given time.

There are also paging keys which will change the display a page at a time.
A page is defined as what can be shown on the BPOP screen at once.  For
example, with an 80 by 25 display, a BPOP page consists of 10 columns of
5 rows.  If you press the PgUp key, BPOP will display the data that is
5 rows above what you are looking at.  Again, if the top row is already
on the display, BPOP will wrap to the last row of the previous page.
The PgUp and PgDn keys move the display one page up or down.  The TAB key
moves the display one page to the right, and the back tab key, or Shift
TAB, moves the display one page to the left.  If you prefer, the F3 and F4
keys also move the display one page to the left and right.

In addition, two other keys can be used, HOME and END.  HOME changes the
display to show the first column and first row of the underlying data.
Sometimes if you get confused about where you are in the display, you
can press HOME to take you to the top left to get your bearings, then
use the other paging keys to move around again.  The END key takes you
to the bottom row of the underlying data but leaves the column unchanged.

                    Distance
    1 Character     1 Page          To the Edge
    UP arrow        PGUP            HOME        
    DOWN arrow      PGDN            END     
    LEFT arrow      ShiftTab (F3)
    RIGHT arrow     Tab (F4)

BPOP also lets you search for particular characters or attributes
of the underlying data.
All searches proceed across and then down until the entire underlying text
has been examined or until the search succeeds.

F6 - Search for Attribute
BPOP can only display a portion of the underlying data that was on the 
screen when BPOP was called up.  You can move the BPOP display to another
portion of the underlying data with the arrow keys, but BPOP also lets
you identify certain areas of the underlying data by characteristic.
For example, after you have called BPOP up, you can press the F6 function
key to tell BPOP to search the underlying data for any field that was
displayed in a certain color, or with a certain attribute.

Every character displayed on the screen is given its own attribute.  The
attribute controls whether the character will be displayed in bright or
normal intensity, whether or not it will be blinking, and on color screens,
what color it will be.  Monochrome screens are limited in the number of
different attributes they distinguish.

For example, if your word processor displays error messages in Red on White,
you can use the F6 key to go directly to any error message.  When you press
F6, a screen is displayed that asks you what foreground color you are seeking.
The color choices are listed.  Enter a number from 0 to 7 indicating which
color.  For this example, enter a 4 for Red.  Then you are asked what 
background color you are interested in.  In this case, enter 7 for White.  
If there is any Red on White text on the underlying screen, the BPOP display
will show it.  If not, a short beep will let you know that BPOP could not
find any such attribute.

There are actually more attributes available than these.  Add eight to the
foreground attribute and you get the same color in high intensity.  Add eight
to the background attribute and you get blinking.  Not all video monitors
and adapters differentiate combinations such as black from bright black.

The complete table of attributes for color displays is as follows:

                        Foreground          Background               
            Color            Bright               Blink

            Black       0       8           0       8
            Blue        1       9           1       9
            Green       2       A           2       A
            Cyan        3       B           3       B
            Red         4       C           4       C
            Magenta     5       D           5       D
            Brown       6       E           6       E
            White       7       F           7       F
         

For monochrome screens, although a full attribute byte is reserved for
each character, meaning there are a possible 256 attribute combinations,
most are not supported by the hardware.  The common monochrome attributes 
are: White on Black (Foreground 7, background 0), Underlined (1,0), and
Black on White (0,7).   There are bright and blinking versions of these
three also.  To choose the blinking, add 8 to the background number
and to choose bright, add 8 to the foreground number (hexadecimal).

If you enter a value  in the range 0 through 7, BPOP will search for any
match regardless of the blinking or brightness settings.  If you want to
specifically look for a blinking or brightness setting, you can enter
the attribute in the range of 8 through F.     

There are some programs available that will change the colors displayed
on your screen for a given attribute, and sometimes it is just very
difficult to determine what color you are looking for.  As an example,
I wanted to search for the blinking WAIT message that Lotus 1-2-3 displays
in the upper right corner.  It looked like White on Red to me, but BPOP
couldn't find any White on Red text on the screen.

To solve this problem, you can answer the BPOP prompt for attribute with
a question mark.  If you do so, BPOP will ask what column and row you are
interested in.  In my case, the blinking WAIT message is in column 77 of
row 1.  When I entered that, BPOP came back and said the attribute of that
column and row had a foreground of B and a background of C.  This is Bright
Cyan on Blinking Red.  That explains why BPOP didn't return anything for a
search of White on Red.  Now, I can search for the B an C attributes when
I am in 1-2-3.

You can repeat the last search you performed by pressing the function key
F10.  This will look for the next area on the screen with the same attribute.

When a blank is displayed on the screen, it doesn't matter if the attribute
calls for red on black or white on black, all you see is black.  For this
reason, when you search for attribute, areas on the screen with nothing
but blanks in them are skipped.

F7 - GOTO Cursor
F8 - GOTO Location
Each display screen has a cursor position associated with it.  If you 
press the F7 function key while BPOP is active, it will change the BPOP
display to show the page around the underlying data pointed to by the 
cursor.  Note that not all software uses the cursor position in a meaningful
way.  Some programs use their own cursor made up of a reverse video 
display.  They move the actual cursor to off the display screen.  F7
will just display the area of the actual cursor.  In these cases, you may
be better off searching for attribute.

If you know what area on the screen you are interested in, you can use
function key F8 to go there directly.  When you enter F8, BPOP prompts you
for the column and row you are interested in.  The column and row numbers
start at 1.  BPOP will change the display to show the appropriate 
underlying data.

F9 - Search for Text
BPOP can only display a portion of the underlying data that was on the 
screen when BPOP was called up.  You can move the BPOP display to another
portion of the underlying data with the arrow keys, but BPOP also lets
you identify certain areas of the underlying data by contents.
For example, after you have called BPOP up, you can press the F9 function
key to tell BPOP to search the underlying data for a given string of
characters.

For example, you might want to search a spreadsheet screen for any field
that involved money.  To do this, you can bring up the BPOP screen and press
the F9 function key.  BPOP will prompt you for what text you want to search 
for.  Then enter a dollar sign ($).  BPOP will search the underlying data
for a matching dollar sign, and change the BPOP display to show the new
area.  You can repeat the search, looking for the next dollar sign, by
pressing the F10 key.

Wild cards which are used in DOS text searchs, such as * and ?, have
no special meaning in BPOP text searches.  If you search for a ?, BPOP
will look for a ? in the underlying text.

F10 - Do it Again
You can repeat the last search you performed by pressing the function key
F10.  This will look for the next area that matches your criteria: matching
attribute if the last search was F7, matching text for F9.

Command Line Options
BPOP has several options which can be specified on the command line
when you invoke BPOP.  Each option is preceded by a dash (-) and a single
letter.  An example of an option is the Size option, -S.  To use a size
of 5000, you would enter BPOP as follows:

            BPOP -S5000

There is no space between the option letter and the value.  It does
not matter whether you enter the option letter in upper or lower case.
If you have to use two options, it doesn't matter in what order you enter
them.  For normal usage, you need not enter any options.        

-K Changing the Hot Key
By default, BPOP can be invoked by pressing the hot key combination of
ALT, Left Shift, and A.  If this is not a convenient combination to 
use, or if it conflicts with another TSR program you are running, you
can change the hot key combination with the -K option.

If you want to change the hot key combination that is used to invoke
BPOP, you can do so by using the -K parameter on the DOS command line
when you first start BPOP.  For example:

           BPOP -K0A1E

would give you the same hot key you get by default.  The first two characters
after the K (in the example, 0A) indicate what shift keys must be pressed
for the hot key to be recognized.  There are 4 shift keys: the CTRL key, the
ALT key, and the Left and Right Shift keys.  In this example, the 0A means
the ALT and Left Shift keys must be pressed together.  

The last two characters after the K (in the example, 1E) indicate what
letter or number key must be pressed for the hot key.  In this case, the
1E means the letter A.  You can choose from any of the letter keys, number
keys, or function keys.  

It is important that you choose a shift and key combination that do not
interfere with other software that you run.  For example, Lotus 1-2-3
uses the F1 key for Help.  You could tell BPOP to pop up whenever the F1
key was pressed, but if you did that, you would never be able to get
Help from 1-2-3. 

In addition to any normal software you use, such as
spreadsheets, databases, or word processors, you have to make sure that
the BPOP hot key doesn't interfere with any other TSR programs you may 
also be running.

If you make a mistake, and BPOP turns up where you don't want it, you 
can remove BPOP from memory by pressing the F5 key.  Then you can enter
keys directly to your other application.


The following is a list of Shift Key combinations you can
use with the -K parameter:

        -K Code     Shift Key Meaning

        00  No shift keys needed
        01  RightShift
        02              LeftShift
        03  RightShift+ LeftShift
        04                          Ctrl
        05  RightShift+             Ctrl
        06              LeftShift+  Ctrl
        07  RightShift+ LeftShift+  Ctrl

        08                                  Alt
        09  RightShift+                     Alt
        0A              LeftShift+          Alt
        0B  RightShift+ LeftShift+          Alt
        0C                          Ctrl+   Alt
        0D  RightShift+             Ctrl+   Alt
        0E              LeftShift+  Ctrl+   Alt
        0F  RightShift+ LeftShift+  Ctrl+   Alt


The following is a list of character codes you can use with the 
-K parameter:

    Char    -K Code     Char    -K Code     Char    -K Code
    A       1E          J       24          S       1F
    B       30          K       25          T       14
    C       2E          L       26          U       16
    D       20          M       32          V       2F
    E       12          N       31          W       11
    F       21          O       18          X       2D
    G       22          P       19          Y       15
    H       23          Q       10          Z       2C
    I       17          R       13

    Char    -K Code     Char    -K Code     Char    -K Code
    1       02          F1      3B          F11     57
    2       03          F2      3C          F12     58
    3       04          F3      3D
    4       05          F4      3E
    5       06          F5      3F
    6       07          F6      40
    7       08          F7      41
    8       09          F8      42
    9       0A          F9      43
    0       0B          F10     44

The last two codes, F11 and F12, will not work on all machines.  Try
them out if you are interested.

The default hot key combination for BPOP is Left Shift-Alt-A.  To set
such a value, find the Left Shift-Alt line in the top table.  It is 
opposite code 0A.  Then find the code for the letter A in the next table.
It is code 1E.  Placing these two next to each other gives -K0A1E.  If
you ran BPOP with this combination, you would get the default setting.

-S Changing the Size
When invoked, BPOP reads the text screen into a buffer.  It then enlarges
a portion of it and eventually restores it upon exit.  By default, BPOP
provides a buffer large enough to hold 25 rows of 80 characters, the normal
DOS screen size.  If you are using BPOP with more rows or columns than
this, you can increase the size of the buffer BPOP uses to hold the
text screen.

By default, BPOP uses a buffer large enough to hold 2000 characters
(80x25).  You can increase this by specifying the size of the text
screen with the -S option.  Follow the S with the number of characters
on the text screen you will be using.  For example, on a screen with
43 rows of 80 characters, or 3440 characters in all, use:

           BPOP -S3440

-V Changing the Video Mode
When you use BPOP on a graphics screen, you can get a number of different
display sizes.  You can cycle through them using the F2 key when BPOP
is active.  The chosen video mode will be used on subsequent invocations
of BPOP.  If you prefer, you can instruct BPOP to use a particular video
mode when it is initially brought up by using the -V option.  Follow
the -V with the number of times you would normally press the F2 key to
obtain the size you prefer.  For example:

           BPOP -V2

is the equivalent of entering BPOP without the -V option, then pressing
the F2 key twice.  

Technical Specifications
BPOP is a TSR written according to the TesSeRact(TM) specifications.  It
should work on any IBM compatible PC running under DOS 2.2 or later.  It
will run on any monochrome or color screen when they are in text mode. 
BPOP8 requires 35K, BPOP12 and BPOP16 require 40K, and BPOP1216 takes up
45K.  To run BPOP on screens in greater than 25 line mode use the -S option.

BPOP will not pop up over a graphics mode screen, or when DOS is in the
middle of executing a task.  If you try to invoke BPOP at these times,
BPOP will just produce a cascading series of beeps instead of popping up.
A Word about TesSeRact(TM)
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


Disk Vendors, BBS's, Users Groups
BPOP is shareware.  You may distribute BPOP as long as the following
guidelines are met:

Distribute all files that make up the program essentially
unchanged.

Charge less than $10 for distribution of the program.

Be sure your customers know the program is not free but
is shareware, and that payment for your distribution is not payment
to the author.

Forward copies of problems or complaints about this program 
to the author.  In return, the author will make an attempt to answer
such problems or complaints.

Distribute the latest version of the program when it is
made available to you. 


Other Products and Prices

Prices are fixed through 12/91.  After that, check.

Product             Price   Latest Version
B-Edit                $39     2.0
BIG for 1-2-3         $39     1.0
BIG for WP            $39     1.0
B-Pop                 $27     2.0

$9 discount on each of second and subsequent items in a single order.

Documentation for all programs is provided in large, easy-to-read,
18-point type.  In addition, all of the following large-character
utility programs are included with any purchase at no extra cost:

B-Type, B-Dir, and B-Print
are large-character replacements for the related DOS commands.
B-Print prints text files  in large characters on Epson-compatible
dot-matrix printers.

B-Look
is a text file browser.  Scroll with arrow keys.

B-Font and B-Apply 
modify the character shapes used in the above
B-Ware products.

Registration
    contact:         Hexagon Products
    Bill Arendt      P.O. Box 1295
    (708) 692-3355   Park Ridge, IL  60068-1295
    

BPOP 2.0 Registration Form
When you register, please include the following:

Name: _________________________________________________________________________

Company: ______________________________________________________________________

Address: ______________________________________________________________________

City: ___________________________ State: ______________________________________

Zip: _____________ Phone: _____________________________________________________

Optional information:

Using on: Laptop  Desktop

Display:  VGA     EGA     CGA     Herc    Mono    Dual

Oper.Sys: DOS     OS/2

Preferred Input Device: Mouse   Keyboard

Preferred character size?   10  20  26  40  53  58  Other _____________________

Suggestions for improving BPOP? _______________________________________________

_______________________________________________________________________________

Where did you find BPOP? ______________________________________________________

If you have speech synthesis hardware, what kind? _____________________________

```
{% endraw %}

## BPRINT.DOC

{% raw %}
```
.pn
.co no
.cs 2
B-Print

Large Character Print Formatting
Copyright Hexagon Products 1990
.cs 1
.co on

B-Print prints ASCII text files on dot matrix printers using large
characters.  B-Print is a free sample of large character software 
available from Hexagon Products.  See the last page of this document
for further information.

In its simplest form, B-Print works just like the DOS PRINT command.
The simplest form is:

    BPRINT filename

B-Print also has a few command line options to control the printing.
Each option consists of a dash and a letter, such as -D for device.
The order is unimportant, as is capitalization.  For example, if your
printer is attached as Device COM1, you would use the following command:

    BPRINT bprint.doc -Dcom1

In addition to options given on the DOS command line, you can embed 
B-Print commands within your document file.  Each command consists
of dot ('.') in the first column followed by a two character command.
For example, if you want to skip to the top of a new page in your document,
you can embed a page eject command (PA) in your document:
    .PA

This document contains many embedded commands to format the document.
Print it with the command BPRINT BPRINT.DOC.

.pa
.cs 2
Options
.cs 1
The command line options are given on the DOS command line when you first
execute B-Print.  Each is preceded by a dash ('-'), such as:
    BPRINT bprint.doc -Dcom1

.cs 2
Device (-D)
.cs 1
By default, B-Print writes to device LPT1.  If your printer is attached
as LPT2 or COM1, etc., use the Device option to direct B-Print output to
your printer.  You can alternatively use a filename instead of a device name.
If so, B-Print writew output to a disk file.  You can later print 
this file with the DOS command: COPY /B FILE LPT1.  The Device option is:
    -Ddevice   COM1, COM2, LPT1, etc.
    -Dfilename any disk filename

.cs 2
Printer Type (-P)
.cs 1
By default, B-Print formats output for an Epson dot matrix printer.  For
a different type of printer, use the Printer option.  The Printer option is:
    -P0 Printer type is HP
    -P1 Printer type is Epson

.cs 2
Character Set (-C)
.cs 1
B-Print starts with character set 2, which has 16-dot characters.
Use the Character set option (-C) to change this.  The character
sets differ in size and shape.  This option only names the starting
character set.  You can override it for a portion of any document with
the .CS command described later.  The Character set option is:
    -CS 0 a tiny 8-bit character set
    -CS 1 a small 12-bit character set
    -CS 2 a medium 16-bit character set 
    -CS 3 a medium 24-bit font
    -CS 4 a large san-serif font
    -CS 5 a large serif font
    -CS 6 a large  bold font

.pa
.cs 2
Commands
.cs 1
Several print control commands are supported by B-Print.  The commands
must be embedded within the document to be printed.  Each consists of a
dot ('.') in the first column followed by a two character command.
    .PA     eject to a new page
    .PN n   set page number
    .PW n   set paper width in dots
    .PL n   set paper length in dots
    .CO n   set combine ON or OFF
    .CS n   select character set
    .LD n   set leading
    
.cs 2
PA Command
.cs 1
By default, B-Print fills each page with text.  If your document contains
a new section to be set off by itself, precede that text with a Page eject
command, and that section will start at the top of a new page.  For example,
the section "Commands" in this document was preceded by a PA command.
 
.cs 2
PN Command
.cs 1
By default, B-Print does not number pages of text.  If you want pages to 
be numbered, use the PN command.  After that, B-Print will display the number
of each page in the center of the bottom margin.  B-Print will start with
page number 1 unless you give a different value on the PN command.

If, for example, you are only printing out the second section of a document,
you can use PN to start with an appropriate page number.
.pa
.cs 2
PW Command
.cs 1
The print width of each printer B-Print supports is coded within B-Print.
However you may want to override it.  You can do so with the PW command.
For example, if your printer works like an Epson, but handles paper that
is twelve inches wide, you will have to override the print width.

The argument to print width is in dots.  So, for example, if your printer
prints 60 dots per inch and supports a 12 inch print width, use the command
    
    .PW 720

You can use the PW command with a smaller than default value to create a
larger right margin.

.cs 2
PL Command
.cs 1
The print length of each printer B-Print supports is coded within B-Print.
However you may want to override it.  You can do so with the PL command.
For example, if your printer works like an Epson, but your paper is 14 
inches long, you will have to override the print length.

The argument to print length is in dots.  So, for example, if your printer
prints 60 dots per inch and supports a 14 inch print length, use the command

    .PL 840

You can use the PW command with a smaller than default value to create a
larger bottom margin.  You can use the PL command to set a large print
length and the page commands PA and PN to avoid printing page number on a 
particular page, maybe that of a diagram in a document.
.pa
.cs 2
CO Command
.cs 1
By default, B-Print breaks up lines so they will fit on your printer.  When
it gets to the end of a line, it COncatenates or COmbines the next line
and continues printing.  If you want to format lines yourself, you can turn
concatenation on or off yourself.  The arguments are either ON or OFF.

For example, you don't want the heading of a letter to be concatenated,
place .CO commands before and after the block of text like this:
    .co off
    Hexagon Products
    P.O.Box 1295
    Park Ridge, IL  60068
    .co on

.cs 2
CS Command
.cs 1
By default, B-Print uses characters that fit in a dot matrix 16 high and 
16 wide.  On a printer that prints 80 dots per inch, this results in
characters that are a fifth (16/80) of an inch high and wide, or about
14 points (72*16/80).  These characters are approximately the shape of the
characters used on a standard video display.

You can override the character set used with the -C command when you run
B-Print from DOS.  However, you can also change the size used by B-Print
in the middle of a document with the CS command.  The argument is a number
indicating the character set, the same as used with the -C option.

For example, you might want headings of section printed in a larger character 
size than the body of a document.  The heading of this document are produced
with the following three lines:
    .cs 2
    CS Command
    .cs 1
    
.cs 2
LD Command
.cs 1
Leading (pronounced "ledding") is a printer's term referring to the amount of
space left between lines.  (Historically small pieces of lead were placed
between rows of type to separate them.)  A good leading value results in
text that is easier to read.

By default, B-Print sets the leading at one quarter the size of the text 
characters.  If you change the character size with the CS command, B-Print 
automatically adjusts the leading.  

You can override the leading with the LD command.  Follow the LD command with
the leading value in dots.  For example, the default leading value for the 16 
dot character size is one quarter of 16, or 4 dots.  Get a larger leading 
value with a command such as:
    .ld 5
.pa
I'm currently taking requests for B-Print improvements.  Let me know
what suggestions for improvements you have.  I'm specifically interested
in:
 * What other dot matrix printers need to be supported.
 * What other character sizes or styles you want.
 * If you are interested in proportionally spaced fonts.
 * If you are interested in text that is aligned on both sides.
 * If you have suggestions for more embedded commands.

.cs 2
Other Products
.cs 1
B-Print is a free sample of large character software from Hexagon Products.
Other products provide large character displays on your monitor making
software easier to read.  They include:
.co no
Free B's:
B-Type  - like DOS's TYPE command
B-Dir   - like DOS's DIR command
B-Look  - ASCII file browser
B-Print - ASCII file printer

Low-Priced Products:
B-Edit          - text editor
B-Pop           - memory resident text enlarger
BIG for 1-2-3   - enlarger only for 1-2-3
BIG for WP      - enlarger for WordPerfect

Call or write for further information:

Hexagon Products
P.O. Box 1295
Park Ridge, IL  60068-1295

1-708-692-3355
76064,1776


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3694

     Volume in drive A has no label
     Directory of A:\

    BPOP     DOC     30876   2-14-91   2:54p
    BPOP12   EXE     19196   2-16-90  10:54a
    BPOP1216 EXE     22428   2-16-90  10:55a
    BPOP16   EXE     20268   2-16-90  10:55a
    BPOP8    EXE     16988   2-16-90  10:54a
    BTYPE    EXE     18828  12-18-89  11:27a
    BDIR     EXE     16988  12-18-89  12:42p
    BLOOK    EXE     22239  12-18-89  11:28a
    BPRINT   DOC      8772   1-07-91   9:51a
    BPRINT   EXE     24748   1-05-91   9:32a
    BWARE    DOC     30624   2-20-91  11:29a
           11 file(s)     231955 bytes
                           86016 bytes free
