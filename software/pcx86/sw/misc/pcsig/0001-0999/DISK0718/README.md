---
layout: page
title: "PC-SIG Diskette Library (Disk #718)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0718/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0718"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LQ PRINTER UTILITY"

    So you want letter quality, but you're stuck with that old nine-pin dot
    matrix printer?  Don't just resign, join the club; discover LQ PRINTER
    UTILITY!  It is an impressive printer utility program that lets you use
    your inexpensive dot matrix printer to print a variety of fonts in
    near-letter quality.  It can be loaded as a memory-resident program to
    filter the data from your wordprocessor or other programs, or it can be
    used alone to process individual files.  But if you have the 80K or so
    of RAM, the memory-resident mode is the most convenient way to use this
    program.
    
    LQ PRINTER UTILITY includes pre-defined fonts of Courier, Greek,
    Helvetica, Roman, and many others (italics for each font are included).
    A character editor is also provided to let you modify or create your
    own font sets.  Each font character is 10 by 24 dots so there is enough
    resolution to make some fairly decent fonts.
    
    Like all programs of this sort, LQ PRINTER UTILITY uses a graphics mode
    for your beautiful new fonts and printing takes longer -- but it's worth
    the wait.  It also provides a print spooler, and this optimizes graphics
    printing.
    
    Included is the program BIGPRINT, which lets you print large-
    letter banners (using any of the same fonts that LQ uses).  If your
    printer is an Epson (or compatible), the banner letters are made using
    the block graphics characters; otherwise, they are created with
    asterisks.  (Just make sure you don't have LQ loaded when you run
    BIGPRINT, or your printer will be running forever.)
    
    A new feature of LQ is a program that lets you create and edit your own
    letterheads.  LETHEAD is a graphics editor that works with LQ to
    produce high-resolution letterheads consisting of 1" x 1" pictures and
    up to four lines of accompanying text.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## LETHEAD.DOC

{% raw %}
```
                              LETHEAD
                A letterhead-editor to accompany LQ

                      (c) 1987 by Mark Harris
                       All rights reserved.


     LETHEAD is a graphics editor which works in conjunction with
LQ to produce high-resolution letterheads consisting of 1" x 1"
pictures and up to four lines of accompanying text.  Each picture
(23040 dot positions) is stored in the format of an LQ character
set, although the picture segments don't look like characters.
LETHEAD lets you
  edit a picture
  save a picture
  load a picture
  create a data file to be printed with the picture serving as one
    of LQ's character sets (the letterhead).
The final product can be printed with a one-line batch file.

     For example, suppose that you have edited a picture which has
been saved as MYPIC.SET (LETHEAD adds the suffix) and you have
created a datafile saved as MYDATA.  (The data file consists of
character codes for the picture and for the accompanying text.)
The picture is assumed to take the place of LQ's second character
set, so the command
  LQ F'MYDATA' C2'MYPIC'
will print the letterhead.  Better still, if this line is saved as
a text file under the name LETTER.BAT then you can produce the
letterhead simply by typing LETTER at the DOS prompt.  The
letterhead will look something like this:

XXXXXXXXXXXX    Granny's Old-Fashioned Software
XXXXXXXXXXXX
XXXXXXXXXXXX             Rt 4, Box 216
XXXXXXXXXXXX
XXXXXXXXXXXX           Boone, NC  28607
XXXXXXXXXXXX
XXXXXXXXXXXX            (704) 264-6906
XXXXXXXXXXXX

where the X's on the left show the position of the picture.  The
text on the right can be printed in up to three LQ fonts, one per
line.  (If you're willing to edit the final data file yourself you
can mix fonts within each line.)

     LETHEAD requires a graphics card with IBM Color Graphics
Adapter emulation, although a color monitor is not necessary.
If you don't have this equipment it may be worth a trip to a
friend's computer to edit a letterhead since the resulting
letterhead file can be used on your own non-CGA equipment.


       Using LETHEAD.

     After you enter LETHEAD at the DOS prompt you will see the
following menu:

       1. Edit picture.
       2. Clear picture.
       3. Load picture.
       4. Save picture.
       5. Create letterhead.
       6. Directory = A:\
       7. Exit.

       Your choice? (1 - 7)

Following is a description of each option.

1. Edit picture.
     This is the option you will always take to edit a picture
whether you are loading an old one or starting a new one.  You
will be shown the graphics screen with a summary of editing
options.  For a detailed description see 'Editing pictures' below.
Option 1 is selected by pressing either '1' or <Enter>.

2. Clear picture.
     If you have thoroughly garbled the screen and want to begin
afresh, select this option.  If have not loaded a picture and you
choose option 1, the graphics screen is cleared automatically.

3. Load picture.
     As far as LETHEAD is concerned a picture is any file with the
suffix 'SET'.  If the files PIC1.SET, PIC2.SET and COURIER.SET are
in the current directory then you will be shown the listing
  PIC1     PIC2     COURIER,
then asked for the file you wish to load.  Since COURIER is a
regular LQ character set you will not want to treat it as a
picture (although it wouldn't do any harm as long as you didn't
make and save changes).  When entering the file name you do not
need to include the 'SET' suffix.  It will take LETHEAD a few
seconds to convert the picture from character set format to the
screen representation which you will edit.

4. Save picture.
     As with 'Load picture', you are first shown a listing of all
files which have the suffix 'SET'.  If you enter the name of a
file which already exists, the old file will be overwritten with
no warning.

5. Create letterhead.
     This option is used to create the data file which LQ prints
to make a letterhead.  Included in the file are LQ control
sequences which switch between the picture font and the other
fonts used for your name, address, etc.  You will be prompted to
       enter from one to four lines of text, then you will be given the
option of printing these lines in any mix of fonts 1, 3 and 4.
Suppose you enter the two lines
  Fred Jones
  President of the Universe
and specify font number 4 for the first name and font number 3 for
the second.  If the name UNIVERSE is used for the resulting data
file then you can later enter
  LQ F'UNIVERSE' C2'PIC1'
to create a letterhead with the given text alongside the picture
PIC1; the default fonts 3 and 4 will used for the text.  To load a
different font for (say) 'Fred Jones', the command
  LQ F'UNIVERSE' C2'PIC1' C4'DIFFONT'
could be used, assuming that DIFFONT.SET is an LQ character set.
The same letterhead file can be used with more than one picture;
for example
  LQ F'UNIVERSE' C2'PIC2'
will use a different picture with the same text.

     To create a batch file LETTER.BAT which will automate the
letterhead printing, enter the following text:
COPY CON LETTER.BAT
LQ F'UNIVERSE' C2'PIC1' <CTRL Z> <ENTER>
Then simply type LETTER to print the letterhead.

6. Directory =
     Option 6 lets you change the default directory used for
loading and saving files.  When prompted, enter a path such as
A:\MYDIR, or
C:\DIR1\DIR2
The drive prefix may be omitted if the default drive is to be
used.

7. Exit.
     Press '7' or <Esc> to exit LETHEAD.  As a safeguard you will
be prompted to indicate whether you really mean it.


Text entry.

     Any time you are prompted to enter text (file names or
letterhead lines) you have certain editing functions at your
disposal.  The right- and left-arrow, home, end, backspace,
delete and insert keys work as you would expect them to.  The
<Esc> key aborts the text entry.  The F3 or <Ctrl R> keys restore
the line to its original appearance.  The <Enter> key accepts the
displayed text, regardless of the position of the cursor.


Editing pictures.

     When you select the 'Edit picture' option you are shown a
large square in which your picture will be created, with a
       graphics cursor marking the position of the next entry.  At the
right of the screen the following summary of options is displayed:

Options:

A)rc     C)ircle
D)raw    E)llipse
F)ill    L)ine
R)ect    U)ndo

F2  = Copy
Del = Cut
Ins = Paste

P)en color = white
S)tyle = 3x3

Cursor keys to move

Shifted cursor
moves faster

<Enter> accepts
change or toggles
point

<Esc> = main menu

Following is a more detailed description:

Cursor movement.
     The arrow keys move the cursor one dot in the appropriate
direction.  Pressing either shift key along with an arrow key
moves the cursor 10 dots.  The Home and End keys move to the far
left or right of the screen, and the PgUp and PgDn keys move to
the top and bottom.

Arc.
     Drawing an arc is a three-stage process.  Position the cursor
at one end of the arc and press 'A', then move to the other end
and press <Enter>.  Now as you move the cursor you will control
the arc which connects the two endpoints; when the arc looks right
press <Enter> to accept.

Circle.
     Pressing 'C' fixes the center of a circle and subsequent
cursor moves change the radius.  When the radius is correct press
<Enter>.

Draw.
     Pressing 'D' initiates the drawing mode.  The cursor keys are
then used to draw in the current pen color (black or white) and
pen style (a square of dimensions 1x1, 2x2 or 3x3).  Extended
       cursor moves (shifted arrow, Home, End, PgUp, PgDn) move the
cursor but terminate drawing mode.  <Enter> also ends drawing
mode.

Ellipse.
  The cursor marks the endpoint of an axis of an ellipse.  Press
<Enter> after the other endpoint is positioned correctly to fix
this axis.  The length of the other axis (perpendicular to the
first) is now determined by the distance of the cursor from the
first segment; press <Enter> when this is appropriate.

Fill.
     Pressing 'F' fills a region with the color white.  The region
must be completely bounded by a white border or the coloring will
'spill' into the entire screen.

Line.
     Pressing 'L' marks one endpoint of a line, then after cursor
moves <Enter> is used to mark the other endpoint and draw a line
connecting these points.

Undo.
     Pressing 'U' cancels the effect of the last operation.  For
example, if you F)ill a larger area than you intended you can
U)ndo the damage and try again.

Rectangle.
     Pressing 'R' marks one corner of rectangle, then after cursor
moves <Enter> is used to mark the diagonally opposite corner and
draw the rectangle which is thus determined.

F2.
     Pressing F2 begins a block copy operation.  As with
R)ectangle a block is marked with <Enter>.  The cursor is then
used to move a copy of this block and <Enter> fixes the copy.  As
a side effect a copy of the block remains on the 'clipboard' for
subsequent paste operations.

Del.
     'Del' is used to cut a block from the picture.  The block is
marked as with the copy operation and the marked region is removed
from the screen.  A copy of the region is retained on the
clipboard and can be pasted back to the screen.

Ins.
     'Ins' shows the block from the clipboard at the cursor
position.  The block can be moved with cursor operations and is
fixed on the screen when <Enter> is pressed.

       Pen color.
     There are only two pen colors - white (default) and black.
Pressing 'P' toggles between these values.  Note: the image is
reversed when printed, so the originally black screen corresponds
to a white sheet of paper.

Pen style.
     The Draw operation places a shape at each cursor position.
This shape is a block of dimensions 1x1, 2x2 or 3x3.  Pressing 'S'
(for style) cycles through these three values.

<Enter>.
     Pressing <Enter> generally ends a given operation.  In the
default cursor-movement mode, <Enter> toggles the color of the dot
under the cursor.

<Esc>.
     Pressing <Esc> returns you to the main menu, from which you
can load and save files or exit the program.

```
{% endraw %}

## LQPCWRIT.DOC

{% raw %}
```
          Using LQ's proportional spacing with PC-Write.

     PC-Write is a superb Shareware word processor which can fully
exploit LQ's features.  In particular, PC-Write (version 2.6 and
later) lets you communicate the size of LQ characters in any font
or mode so that proportional spacing works in conjunction with
justification.  For example LQ's HELV font is narrower than
COURIER so more characters can be put into a given space.  PC-
Write also supports micro-justification so that white space is
evenly distributed across a line when fill-justification is used
(even when fonts and modes are mixed in the line).  To see how
nice the result can look, run LQDEMO (which prints a text file
edited with PC-Write).

     PC-Write is available from Quicksoft, 219 First N. #224,
Seattle, WA 98109, (206) 282-0452 and from many PC bulletin boards
and disk distribution centers.  Versions 2.70 and 3.0 work fine 
with LQ, but you may run into a slight problem with 2.71.  The 
print program in this version (PR.EXE) handles margins differently 
and fill-justified, micro-justified lines with leading spaces 
(past the normal left margin) may not print right.  One solution 
is to use PR.EXE 2.70 with ED.EXE 2.71; Granny's will provide the 
older program for $2 if you wish to take this route.  A better 
solution is to obtain the most recent version of PC-Write directly 
from Quicksoft. 

     You can use the LQ/PC-Write/proportional spacing combination
at a couple of different levels.  If you are content with LQ's
default fonts (COURIER, COURITAL, HELV, PALATINO) then simply
use the PR.DEF file from the LQ disk as described below.  If you
want to load other fonts you will need to create new width tables
to be included in your PR.DEF file and you'll have to get a little
more involved.  In either case a little experimentation will be
well worth the time - after a one-time modification of your PC-
Write environment you can obtain really polished printouts with no
extra effort from then on.


The PR.DEF file.

     PC-Write's print program expects to find information on font 
control commands and various printing parameters in a file called 
PR.DEF.  If you use PC-Write then you already have such a file; it 
may have been created automatically as part of PC-Write's 
installation procedure, or you may have created (or modified) this 
file yourself.  The LQ disk includes a PC-Write print control file 
called PR.LQ - by copying this to the right place under the name 
PR.DEF you can make convenient use of LQ's features.  You will 
want to keep your original PR.DEF file for draft printing; how you 
organize your files for LQ or draft printing depends on whether 
you use a hard disk or floppy disk system. 

     Floppy disk users should simply make a new work disk for LQ 
printing.  If you already have a work disk just use DISKCOPY to 
make a duplicate; otherwise run the WORKDISK program on the PC-
Write disk to create one.  Copy PR.LQ from the LQ disk to your new 
work disk under the name PR.DEF; e.g., 
  COPY A:PR.LQ B:PR.DEF
The last modification is to edit the ED.DEF file to include the
line

  !PR.DEF
(which communicates the information in the new PR.DEF to ED.EXE).
Your work disk is now ready to go - you can use it as described
below to edit and print files with LQ.

     Hard disk users should use separate subdirectories for LQ and
draft documents.  Let's assume for example that you have a
directory \PW and a subdirectory \PW\LQ.  The PC-Write program
files (ED.EXE, PR.EXE, ED.DEF, etc.) and all draft documents are
under PW, while the documents to be printed with LQ are under
PW\LQ.  (Note: there is no PR.EXE in version 3.0; this reference 
pertains only to older versions.)  Keep your old PR.DEF under PW 
and copy PR.LQ from the LQ disk to PW\LQ under the name PR.DEF.  
Put the line 
  !PR.DEF
in the ED.DEF file.  (You don't need a separate ED.DEF file under
PW\LQ.)  The last change is to put the PC-Write directory in your
your DOS path so that ED.EXE and PR.EXE can be executed from any
subdirectory.  For example if the line
  PATH \;\UTIL;\DOS;\PW;\TB;\NT;
is included in AUTOEXEC.BAT, then DOS will search first the
current directory, then the root directory, then \UTIL, then \DOS,
then \PW and so on when looking for programs to execute.  To edit
draft or LQ documents, change your working directory to \PW or
\PW\LQ, respectively.

     If you prefer to keep all your documents separate from
programs on your hard disk you can follow the above approach with
the directory structure
                             PW
                            /  \
                          LQ   DRAFT
The DRAFT subdirectory should contain the original PR.DEF.


Width tables in the print control file.

     Consider the following line from the PR.LQ file:
#F=28@A120i+27,27,49,27,27,80 (font 1, proportional spacing)
The 'F' indicates that the command <Alt F> (or <Alt G>.R:F as a
separate line) will be used to turn on the font described by this
line, and the '28' indicates which figure will show up on your
screen when you start this font.  The '@A120i' says to ED.EXE and
PR.EXE that table A in the print control file gives a list of
character widths in multiples of 1/120".  Finally,
+27,27,49,27,27,80 causes a control sequence (<Esc> <Esc> '1'
<Esc> <Esc> 'P') to be sent to LQ when the font is turned on.
       
     The '@A' prefix tells PC-Write to use the following table
which precedes the line in the print control file:
@A: 32=10,33=5,34=9,35=14,36=13,37=14,38=14,39=5,40=8,41=8
@A: 42=13,43=13,44=6,45=12,46=6,47=14,48=11,49=9,50=12,51=12
@A: etc
The table simply says that this font (LQ's default font number 1,
COURIER) has a space character (ASCII code 32) which is 10 units
wide, an '!' character which is 5 units wide, etc.  PC-Write can
now use this information to figure out how many characters will
fit in a line of text.

     There are width tables included in PR.LQ for six fonts.
Following is a list of these fonts and the associated font control
commands:

    <Alt F>  LQ font number 1, COURIER
    <Alt I>  Font 2, COURITAL
    <Alt P>  Font 3, HELV
    <Alt Q>  Font 4, PALATINO
    <Alt E>  COURIER bold
    <Alt D>  COURIER double width

(Any of these fonts can be made the default by using a '.R:' line
preceded by <Alt G>.)  Here are additional font control commands
from PR.LQ which don't use width tables:

    <Alt B>  Bold, even spacing
    <Alt H>  Superscript
    <Alt L>  Subscript
    <Alt C>  Font 1, even spacing
    <Alt J>  Font 2, even spacing
    <Alt O>  Font 3, even spacing
    <Alt V>  Font 4, even spacing
    <Alt U>  Underline
    <Alt W>  Double-width, even spacing

These are somewhat arbitrary assignments; to change them, read
'Customizing Font Control Lines' in the PC-Write User's Guide.
There is an '.R:F' line in the PR.LQ file which establishes font 1
(COURIER) with proportional spacing as the default.  Change this
to suit your taste; for example, change it to .R:C to make font 1,
even spacing the default.

     There is a limitation when changing fonts: variable-width
and even-spaced fonts may not be mixed on the same line.  If you
want to switch to an even-space font, do so at the start of a new
line.

     You may want to stop reading these instructions here.  You
should at least give PC-Write a try with the PR.LQ file provided
to see if it suits your needs.  If you want to develop more exotic
special effects later on, read the following information.
       

Adding or changing width tables.

     What if you want to use a font or mode for which a width
table is not included?  A new option has been added to the EDCHAR
program (the character editor included on the LQ disk):  pressing
'T' will bring up a window for creating a PC-Write width table for
the font which is currently loaded.  A width table can be created
for the font itself, or for the font in emphasized or double-width
mode.  Suppose you have installed (or plan to load) a new font
MYFONT.SET as LQ's third character set.  Here is a how your
session might go: First run EDCHAR and load MYFONT as the primary
character set.  Press 'T' to activate the width-table window; you
will see the following:
    PC-Write proportional spacing table.
    Write to what file?
Since the width table you generate will be merged with an existing
PR.DEF file later on, use a temporary file for the table.  Let's
suppose you type the file name TEMP.  Next you are prompted to
enter a table identifier from A to Z; this letter will be
referenced within the PC-Write print control file to link a font
control command to a width table.  The identifiers A - F are used
in PR.LQ to be associated with the font control commands F,I,P,Q,
E, and D, described above.  Since you are replacing the third font
with a new one you should stick with the 'C' identifier.  Finally,
you are asked
    Widths for which mode:
    1. Normal
    2. Bold
    3. Double-wide
    Which? (1-3)
Assuming that you want a width table for MYFONT as-is, select
option 1.  The width table is written as standard text to the file
TEMP.

     The next step is to edit PR.LQ.  Delete the existing table C
which starts as follows:
  (HELV)
  @C: 32=10,33=5,34=8,35=13,36=11,37=14,38=13,39=5,40=6,41=6
  @C: 42=12,43=11,44=6,45=9,46=5,47=9,48=11,49=7,50=11,51=11
  @C: 52=12,...
Then insert the new table saved under TEMP by using PC-Write's
<Ctrl F3> function and save the modified PR.LQ file.  That's all
there is to it!


Microjustification.

     Normally if you embed a ruler line in your document with a
'J' at the right margin, PC-Write fill-justifies the text by
inserting spaces between words until the right margins line up.
'Microjustification' describes the process of inserting fractions
       of spaces so that the gaps are evenly distributed across the line;
the result looks much better.  PC-Write supports micro-
justification if '$H' lines are included in the print control file
to tell it how to insert these fractions.  The following lines are
included in the PR.LQ file:
    $H120i=1 (LQ microjustification codes)
    $H60i=2
    $H30i=3
    $H15i=4
    $H12960u=5
    $H25920u=6
For example the first line tells PC-Write that if it sends the
ASCII code 01 to LQ, the printhead will be advanced by 1/120".
The codes 2 - 6 are also interpreted as fractional advances
(multiples 2,4,8,16,32 of 1/120").

Important note:
LQ normally filters out otherwise unrecognized ASCII codes such as
1 - 6.  You can tell LQ to recognize fractional advances in one of
two ways:
When you load LQ, add 'MJ' (which stands for mode justify) to the
command tail; e.g., LQ F'TEMP' MJ, or
send the control sequence <Esc> <Esc> 'J' in your document.
If you use the PR.LQ file you won't have to worry about this because
the line '.S:6' instructs PC-Write to start a document by sending
the line space control sequence given by
    $S06= 27,27,83,36,27,27,74
(which PC-Write uses to set 6 lines/inch).  This results in
following sequence being sent:
  <Esc> <Esc> 'S' 36 (LQ's command for setting 36/216" per line,
  <Esc> <Esc> 'J' (microjustification)


Boxing with PC-Write version 3.

     The latest version of PC-Write has a variety of options for 
manipulating text in boxes.  One of these options is to put a 
graphics border around a box.  To get the graphics box you want 
you will have to do two things: 

1. When you load LQ, use IBM1.SET and IBM2.SET as character sets 3 
   and 4; e.g. LQ C3'IBM1' C4'IBM2',
2. Change the line spacing to 1/9" before the box and back to 1/6"
   afterwards.  You do this by putting <Alt G>.S:9 on a line by 
   itself before the box and <Alt G>.S:6 after the box.  

Note that since line spacing is smaller in the box double spacing 
is probably in order.  Also, you probably won't get the desired 
results with proportional spacing - try running MENUPRT in PC-
Write and selecting an Epson MX-80 with Graftrax type III to 
generate the right PR.DEF file for LQ.  

BUG FIX: Through PC-Write version 3.02 there is a bug affecting 
proportional spacing in header lines.  In the width table for a 
font there needs to be an entry for ASCII code 250, even though 
this code is never used.  In the PR.LQ file we have added 250=5 at 
the end of each width table, but if you use EDCHAR to make new 
width tables you will have to add this entry yourself.  A quick 
look at PR.LQ will make the proper position for these entries 
clear.  (The bug should be fixed in PC-Write 3.03.)
```
{% endraw %}

## WORDPER5.DOC

{% raw %}
```
Getting LQ to work with the supplied file (EPFX80LQ.PRS) on WordPer-
fect 5.0.  

(NOTE: for WordPerfect 5.1, you will first need to update this 
file with the WordPerfect PTR.EXE program.  Follow these 
instructions:  make a COPY of EPFX80LQ.PRS to the disk or 
subdirectory containing PTR.EXE.  Type 
  PTR EPFX80LQ.PRS
You'll get the message:
  Printer file is an old version--Convert to new format? (Y/N)
Reply 'Y'.  Then press F7 to exit, and save the modified file 
under the same name.  Proceed with the WP 5.0 instructions below.)


1. Put in Printer Disk to Install Epson FX-80/100.

2. Install FX-80/100. Refer to WP manual if you need help.

3. When you select the printer, a file name is requested. Normally,
you would simply press return (enter). NOW, however, you must tell it
a different filename. The filename to enter is EPFX80LQ.PRS. After
entering the filename, press return (enter).

4. WordPerfect will now give you some hints about the printer, while
it extracts the information from the diskette master file and makes
EPFX80LQ.PRS. After viewing the "hints about printer" screen,
WordPerfect sends you to the Printer Editor screen. 

5. At the Edit Screen, change the name of the printer from Epson
FX-80/100 to Epson FX-80/LQ.

6. Exit WordPerfect.

7. Remove the WP printer diskette and insert the diskette contain-
ing the printer file from Granny named EPFX80LQ.PRS. Copy this file
to your WP directory, where your WP printer definitions are kept. For
Example:
If your WP printer files are in C:\WP, and the diskette is
in drive A: you would type:
COPY A:EPFX80LQ.PRS C:\WP

This should get you up and running. The printer driver you just
installed is set up in the following way.

In the standard (non-microspace) mode, there are three fonts:
10 CPI FONT 1
12 CPI FONT 3
12 CPI FONT 4
Since Font 2 is normally the italic of font 1, font 2 is available 
as an "automatic font change" from font 1, selecting Italic.

There are several microspace fonts. They are actually set up to be
in groups of four (since LQ can have only four fonts up at a time.) I
call them three different configurations of LQ.




Configuration 1:
Font 1: Courier (ps) Font 1
Font 2: Courier italic (ps)
Font 3: Helv (ps) Font 3
Font 4: Palatino (ps) Font 4

Configuration 2:
Font 1: Helv (ps) Font 1
Font 2: Helvital (ps) 
Font 3: Helv2 (ps) Font 3
Font 4: Palatino

Configuration 3:
Font 1: Courier (ps) Font 1
Font 2: Courier italic (ps)
Font 3: Courier2 (ps) font 3
Font 4: Palatino

I arranged the fonts like that, because I thought that I would use
each combination together the most. I find that I use Configurations
1 and 2, but rarely 3.

In addition, there is a 27 pt (which would be triple high version of
nine point) for Courier in font 1, Helv in font 3.

If you have problems with centering or indenting, look at the line of
text previous to the line you are trying to center. If the line is
short, add some spaces to make it extend to at least half of the
total line length.

The 27pt fonts put in too much leading. 

The "on screen" fonts (with the printer preview) have been made to
match the LQ fonts as close as possible. Palatino is probably the
furthest from being correct, but it is different enough to draw
attention to itself.

You can expect WordPerfect's repeat feature (holding down a key
and expecting it to repeat) not to work when LQ is in memory. I don't
know why that is, except that it must have something to do with a
conflict of interrupts between WP and LQ. Perhaps on some com-
puters that doesn't happen, but it does on mine. Also, you can't use
the drop to DOS feature in WordPerfect to load and unload LQ. I
almost always lock mine up trying. 

Some of the proportional prints have been tested, and tables are correct.
This is not true for all of them however. If you use a proportional print
with microjustification and have trouble with justification, let me
know, because the proportional space table probably has a bug in it.

Any other "quirks" you'll have to find out by experimentation. When
things don't seem to work, notify Mark Harris, and he will contact
me. I'll help where I can.

Rev. Jeffrey D. McPike

-----------------------------------------------------------------------

From Rev. McPike comes the following update:

Roman as Font 1
Roman Font 1 27pt (triple high)
Roman Italic as Font 2 (automatic font change)
Roman2 as Font 3
Hollow as Font 4

Sansser Font 1
Sansital Font 2 (through automatic font change)
Sansser2 Font 3
Sans2ita Font 4

Those are complete sets. In addition:

Computer Font 4
Gothic Font 4
Script Font 4
Deco Font 4

Since the above are all decorative fonts, I planned to put them all
in font 4. My overall scheme for fonts is as follows:

Font 1  Primary font
Font 2  Italic font of primary (font 1)
Font 3  Auxiliary font
Font 4  Decorative font


```
{% endraw %}

## FILE0718.TXT

{% raw %}
```
Disk No:  718                                                           
Disk Title: LQ Printer Utility                                          
PC-SIG Version: S2.8                                                    
                                                                        
Program Title: LQ Printer Utility                                       
Author Version: 2.35                                                    
Author Registration: $35.00                                             
Special Requirements: Epson or compatible printer.                      
                                                                        
So you want letter quality, but you're stuck with that old nine-pin dot 
matrix printer?  Don't just resign, join the club; discover LQ PRINTER  
UTILITY!  It is an impressive printer utility program that lets you use 
your inexpensive dot matrix printer to print a variety of fonts in      
near-letter quality.  It can be loaded as a memory-resident program to  
filter the data from your wordprocessor or other programs, or it can be 
used alone to process individual files.  But if you have the 80K or so  
of RAM, the memory-resident mode is the most convenient way to use this 
program.                                                                
                                                                        
LQ PRINTER UTILITY includes pre-defined fonts of Courier, Greek,        
Helvetica, Roman, and many others (italics for each font are included). 
A character editor is also provided to let you modify or create your    
own font sets.  Each font character is 10 by 24 dots so there is enough 
resolution to make some fairly decent fonts.                            
                                                                        
Like all programs of this sort, LQ PRINTER UTILITY uses a graphics mode 
for your beautiful new fonts and printing takes longer -- but it's worth
the wait.  It also provides a print spooler, and this optimizes graphics
printing.                                                               
                                                                        
Included is the program BIGPRINT, which lets you print large-           
letter banners (using any of the same fonts that LQ uses).  If your     
printer is an Epson (or compatible), the banner letters are made using  
the block graphics characters; otherwise, they are created with         
asterisks.  (Just make sure you don't have LQ loaded when you run       
BIGPRINT, or your printer will be running forever.)                     
                                                                        
A new feature of LQ is a program that lets you create and edit your own 
letterheads.  LETHEAD is a graphics editor that works with LQ to        
produce high-resolution letterheads consisting of 1" x 1" pictures and  
up to four lines of accompanying text.                                  
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0718

     Volume in drive A has no label
     Directory of A:\

    ARCE     COM      7136   9-16-87   3:12a
    ASCII    PAR       899  11-27-89   6:51p
    BIGPRINT COM     13812  11-22-88  10:15a
    CITOH    PAR       876  12-30-87   8:12a
    COMPUTER SET      2944   1-05-87   9:51p
    COURIER  SET      2944   7-16-86  12:59a
    COURIER2 SET      2944   6-25-86  12:10a
    COURITAL SET      2944   6-29-86   3:42a
    DECO     SET      2944   7-27-88   9:30a
    DEMODATA 1        1352   7-09-89   3:22p
    DEMODATA 2        2093  10-06-87   8:08a
    DOC      ARC     67450   5-03-90   8:30a
    DOC      BAT       590   7-30-88   2:02p
    DUMPSET  COM       312   7-09-89   7:14p
    EDCHAR   COM     26717   5-31-88   8:42a
    EPSON    PAR      1000  12-30-87   8:12a
    GO       BAT        13  12-18-86   8:33p
    GOTHIC   SET      2944   5-16-88   2:21p
    GREEK    SET      2944   3-09-89  11:36p
    HELV     SET      2944   6-29-86   3:41a
    HELV2    SET      2944   6-11-88   1:31p
    HELVITAL SET      2944   6-27-86  12:17a
    HOLLOW   SET      2944  10-15-87   9:33a
    IBM1     SET      2944   6-08-88   6:34p
    IBM2     SET      2944  12-17-86  10:03a
    IMAGE    PAR       876   1-10-88   8:13p
    LETHEAD  COM     34472   3-10-89   6:52p
    LQ       COM     48018  10-29-89  10:12a
    LQDEMO   BAT       136   6-16-89   6:14p
    LQINST   COM     19924  10-29-89  10:12a
    LQMS     COM       457   4-01-90   9:35a
    MAIN     SET      2944   9-15-85   9:25a
    MAINITAL SET      2944   9-17-85   8:19a
    PAGE     COM       350   7-26-89   8:20a
    PALATINO SET      2944  10-18-85   8:11p
    PR       LQ       5239   8-31-89   7:49p
    PRINSETS BAT      1337   7-09-89   7:37p
    PRINTBIN EXE      9374   7-05-88  11:33a
    PROPRINT PAR       945  12-30-87   8:13a
    READ     ME      16049   4-01-90   9:34a
    ROMAN    SET      2944   9-15-85   9:26a
    ROMAN2   SET      2944   6-30-86  11:49a
    ROMANITA SET      2944   6-25-86   1:31a
    SANS2ITA SET      2944   6-25-86   2:12a
    SANSITAL SET      2944   6-27-86   9:02a
    SANSSER  SET      2944   6-27-86   1:17a
    SANSSER2 SET      2944   9-20-85   8:26p
    SCRIPT   SET      2944   5-16-88   2:21p
    SPIRAL   SET      2944   6-28-86   4:01a
    STAR     PAR       935  12-30-87   8:13a
    WORKDISK BAT        30  10-02-85   8:08a
    FILE0718 TXT      3479   7-10-90   1:44p
           52 file(s)     337471 bytes
                            8192 bytes free
