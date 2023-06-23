---
layout: page
title: "PC-SIG Diskette Library (Disk #415)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0415/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0415"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "W-ED AND WORD PROCESSING PREVIEWER"

    Dash off a letter, work on your poetry, or revise your Christmas list
    with this friendly program.  W-ED is a small, fast, and intuitive
    editor and wordprocessor.
    
    Simplicity of use was a major design criteria.  The program is based
    on the premise that sequences of often-used functions are more
    productive than many obscure hard-to-remember and arbitrary commands.
    The commands are easy to remember.  Create an ASCII file that can be
    printed or re-edited.
    File Descriptions:
    
    WED      BGN  Screens describing each section of W-ED.
    INSTALL  EXE  Changes the W-ED default options.
    WED      PGM  Describes the programmable version of W-ED.
    WED      EXE  The W-ED Word-processing EDitor (executable program).
    ORDER    WED  WyndhamWare order form for W-ED.
    WED      DEF  Documentation for W-ED (10 pp).
    WED      SAL  Sales information to obtain W-ED.
    DEMO     EXE  Demonstration of W-ED, including a tutorial.
    TSTBRD   EXE  Demonstrates the programmer's version (for DEMO only).
    WED      TUT  Screens for W-ED tutorial.
    WEREAD   ME   Short description of W-ED (2 pages).
    WED-DESC ILN  One-line description of W-ED files.
    
    See what your page layout looks like before you print your document.
    Experiment with different formatting options without printing a single
    page!
    
    The WORD PROCESSING PREVIEWING SYSTEM (WPPS) gives you a picture of
    page layouts from any ASCII wordprocessor file.  WPPS draws from one to
    18 rectangular ``pages'' on your color display and then fills them with
    output to show you exactly how your document will look when printed.
    Repeating the operation, up to 18 pages at a time, is an invaluable
    tool for saving time and paper!
    
    The previewer is especially useful when dealing with documents of
    100 or more pages, and can quickly pay for itself in paper saved.
    File Descriptions:
    
    &        EXE  Word processing previewing system (executable program).
    &        CUE  Configuration file for WPPS.
    &        DOC  Documentation for WPPS (33 pp).
    &PCW     CUE  Configuration file for PC-WRITE users.
    &READ    ME   Short description of WPPS (1 pg).
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## &.DOC

{% raw %}
```
.po1.pl33.lp26
.mt1



                                 &
                            version 1.0
                      (formerly BLACK & WHITE)

                            User's Guide

                 Copyright 1985 by Chelsea-Skye, Inc.

                         All Rights Reserved

     This program may be copied for personal and business uses.
Copying is encouraged as long as it is not for resale.
.pa
-------------------------------------------------------------------
HARDWARE REQUIRED
     IBM PC,XT,AT or compatible, 128k RAM, 1 disk drive
     Color / Graphics board for 640 x 200 display
-------------------------------------------------------------------
STATEMENT OF PURPOSE
This program is intended to provide an overview of document
organization and format such as is normally seen only after the
document is actually printed out. The typical user of this program
would be previewing documents of sufficient length to create a
heavy load on a printer should multiple proofs be desired.
Documents 10 - 1000 pages long fall in this category.

Every attempt has been made to make the program as accurate as
possible but the actual number of combinations of commands and
sequences of commands in word processing makes it impossible to
test every situation. It is therefore advisable to keep the
documents which you wish to preview as simple as possible with
regards to formatting commands.

Non-printable characters in-line (such as bold and underline codes)
are ignored by this program. Some things are not technically
possible to show such as subscripting.  In order to by-pass
inaccuracies in translation of different word processor's text
files, a feature is provided to override margin and page breaks
while using user-set margins.

The following is an explanation of the two major questions which
this software will help you answer.
.pa
QUESTION 1: WHERE ARE THE MARGINS?
In some cases this question isn't too hard to answer. But consider
the variables. First the text itself may have leading spaces on the
left hand side. It may be one long document with no top and bottom
blank lines near the page breaks. Or it may have the blank lines
put in (as when spreadsheets and databases print their files to a
disk). Second, the word processor usually has a set of printout
controls that dissect the text and place it on the page. Additional
specifications for lines-per-page, line spacing, and pitch may
occur here. Third, the way you insert the paper into the printer
introduces further margins. Switch settings on the printer will
cause pitch changes, top and bottom margins at page breaks, and
change line spacings.  To further  complicate matters, some
margin controls overlap and a complex hierarchy of precedence
rules comes into play.
     Only after the paper is removed from the printer do you see
the sum of all these effects.  & cannot cope with all of
these situations. It can help where you have established a
consistent way of printing documents with minor variations.
.pa
QUESTION 2: WHERE ARE THE PAGE BREAKS?
If you insert page breaks into the text, you know where they are.
But suppose you have a 60 page document with a table on page 11 and
a table on page 43. No page breaks are inserted. A proof printout
shows the table on page 11 will be broken across the bottom of 11
and the top of 12. So, using your word processor, you enter a page
break right before the table to force it onto page 12. Question:
considering the extra space created by the insertion, where is the
table on page 43 going to fall? & can show this on the screen.

There are other applications, too. The screen printouts can be used
as indexes and for quick cut-and-paste planning. The structure of
complex computer programs shows up well because the printouts are
so condensed.

.pa
FIRST TIME STARTUP PROCEDURE: INTRODUCTION
-------------------------------------------------------------------

A general outline for start up is given in the diagram entitled:

     FIRST-TIME STARTUP PROCEDURE      (see figure)

Throughout this manual F1 - F10 stands for the function keys on the
left side of the keyboard. The prefix A means hold down the Alt key
and the prefix C means hold down the Ctrl key. Cursorkeys refers to
the arrow, home, end, pgup, pgdn keys on the right hand side of the
keyboard. Only certain cursor keys will cause a response, depending
on what part of the program you are in.






.pa
BACKUP THE SYSTEM DISKS
-------------------------------------------------------------------
First copy the system files to a working diskette or hard disk.
In the following example we assume you are copying to the A: drive
from the B: drive. Type:

   A>COPY B:&*.*

This copies all the files to another disk. You may erase &.DOC and
one of the .CUE files if you do not need them.
The only files that are really necessary to make this program work
are &.EXE and &.CUE
.pa
SET UP THE CUE FILE
-------------------------------------------------------------------
The cue file contains configuration commands so that you don't have
to configure the program every time you use it. (Note: if you are
using PC-WRITE, do the following before proceeding further:
     Type: RENAME &.CUE, &1.CUE
           RENAME &PCW.CUE, &.CUE
     This sets up a different cue file. Users of Wordstar work-
alikes should inspect &PCW.CUE to see how it works.)

The cue file uses two types of commands which are documented in the
file. If you do not have a listing (they are shown in this manual)
it would be good idea to list both BWPCW.CUE and BW.CUE out and
take a look at them.

WORD PROCESSOR TYPE
You can use EDLIN or any ASCII-type editor to put in the name of
your word processor and replace the default word processor type in
the cue file to make previewing faster. The id numbers for
different word processors are show below: (They are also shown in
the program under the option to select word processor type.)

     0. Wordstar, PC-WRITE, and ASCII files
     1. XYWrite
     2. Multimate            (see appendix for others)

For example: WP 0   in the cue file sets the program for Wordstar.
             WD ed.exe    will load ED when exiting B&W.

     See the appendix file listings for a complete explanation of
the cue file commands.

PRINTER ADJUSTMENT FACTORS
Determine the amount of top and left margin created by inserting
the paper into the printer. Few printers print on the very top edge
of the paper, for example. Enter these amounts into the cue file.
For example: XP 2   adds 2 lines to the top margin of each page
             XI 1   adds 1 space to the left margin
The top margin adjustment does not affect lines-per-page. Keep in
mind that these are NOT dot commands that can be inserted into your
document.
.pa
-------------------------------------------------------------------
STARTING THE PROGRAM

If you want to make printouts, before you do anything else type:

    A>GRAPHICS

(This loads the GRAPHICS.COM program supplied on the IBM DOS 2.0
 disk.)

To start the program type:

    A>&
You can also include a file name on the command line which you wish
to preview:

     A>& contract.txt

The screen should fill with rectangles or a table and a USE
DOCUMENT [] message in the lower left hand corner. If it does
not, there may be some conflict between this program and the type
of display adaptor you have or which slot it is plugged into.

The usual sequence  (with variations, of course) for previewing
is diagrammed in the figure entitled: TYPICAL USER CYCLE (see
figure)

.pa
-------------------------------------------------------------------
SELECT OPTIONS
The line which starts "000 0: ESC->Exit F1->Help...." is a menu
choice line. Some of the function keys such as F6-OPTIONS lead to
other menus. The numbers begin to increase as you go down into
the menus (such as 000 1). This numbering system is to help you
identify where you are in the menu structure. Pressing ESC always
brings you back to menu 000 0. Although confusing now, this
system will be very helpful as more items are added to the BLACK
& WHITE system.  <see figure: MENU BLOCK DIAGRAM>

-------------------------------------------------------------------
SELECT WORD PROCESSOR
If you have not done so in the cue file, select the type of word
processor you are using. Use F6 F6 and then the cursor keys to
select the name of the word processor you are using from the menu.
Incorrectly selecting the word processor type will cause all kinds
of unpredictable things to happen. If your word processor is not
listed, see the limited offer at the end of this manual.
.pa
-------------------------------------------------------------------
ENTER FILENAME and DISPLAY
For standard 8.5 x 11 inch previewing, type the filename within
the brackets and press return. The document should preview
reasonably well. If lines stick way out over the right hand margins
of the rectangles or only a few lines show up, make sure that you
have selected the correct word processor (type F6 twice). The other
possibility is that you are assuming a different pitch. In that
case, make the pages wider to adjust the effective width.
(NOTE: if you did start with a file from a different word processor
than the one selected and tried to read it, RESTART the program.)

Anytime you wish to repeat a display of the last file, just press
ENTER instead of filling in the USE DOCUMENT [] prompt.

-------------------------------------------------------------------
SAVE CHANGES TO CUE FILE
If you have made margin or configuration changes which you wish to
save, use ESC to go to the exit procedures. Select the option to
save changes to the cue file. (Note: this wipes out comments on
lines that have margin codes on them.) You can return to the
program after doing this by pressing space a few times.
.pa
-------------------------------------------------------------------
USING THE MENU OPTIONS

The following section details the options shown on the menus. A
block diagram of the major menus is shown in the diagram entitled
MENU BLOCK DIAGRAM. A more detailed diagram of the F6-OPTIONS menus
is shown in the figure entitled F6-OPTIONS BLOCK DIAGRAM.

Some changes and additions will probably be made to these menus. If
what you see on the screen is not described here, check the
appendix.





.pa
-------------------------------------------------------------------
STARTING A NEW PAGE AND PRINTING SCREEN
Lets try another. Force a new page by pressing F5, then type in
a new document name. To print this screen out, press F2. (If you
haven't loaded GRAPHICS.COM you will get a beautiful printout of
nothing but page numbers.) For those with other printers and lucky
enough to have some sort of screen dump driver, you can enter the
driver name (it should be an EXE file). (Note: When BW2 asks for a
file name to execute, type in the .exe extension, because it looks
for it on the disk before it executes it.)

-------------------------------------------------------------------
SHOWING MARGIN SETTINGS
Before we print out our next file, let's check the margin settings
currently in effect. Press F6 and then F5. This shows the status of
various margins and the page size.  You may want to note what the
page length and line per page are now before we run this file
through. This file, BW2.DOC, contains dot commands that will
change the margins. This is typical of Wordstar-type word
processors.

Now press ESC and then type in BW2.DOC at USE DOCUMENT []
to see this document displayed.
.pa
-------------------------------------------------------------------
MARGIN SETTING FROM THE PROGRAM
Being very particular about things, we decide to move the left
margin (page offset) to begin in column 9. Pressing
F6 and F6 again we can now enter a command from the list shown,
in this case po 9. After viewing a revised status list, we can
press ESC, then F5, and then ENTER to repeat the process.

Sometimes it is helpful to see what the document will look like
without the embedded margin commands. In the margin setting
process above we can choose to ignore margin commands given by
Wordstar and certain other word processors. This may not always
work for all word processors.

We can do the same with page breaks - if they are implemented as a
command embedded in the document and not as spaces in the file.

This can be a very powerful investigative tool - allowing you to
ask WHAT IF? questions about the margin settings without using the
word processor to actually change them.
.pa
-------------------------------------------------------------------
SETTING THE PAGE SIZE
If we wish to resume normal size paper, we press F6-OPTIONS
and then F9. A bracket showing the size of page currently loaded
appears along with the size in characters, centimeters, and inches.
Press the letter n (N). Normal size is now set. Of course,
if the size you want is not shown on the list you could
use the cursor keys (not all will do something) to change the size.
Too slow? Use F5 to multiply all movements by 20. Or F2 - F10.
F1 puts the multiplication back to 1.
Finally, press ENTER to load this page size. If you want to use
this size when you bring up the program next time, when prompted
during exiting of B&W save the changes to the cue file.

-------------------------------------------------------------------
STATISTICS
To count things like words and sentences, turn on RECORD STATISTICS
by pressing F7 twice. A + mark will appear at the left of the menu
line signalling that statistics are on. This slows down display
quite a bit. After previewing a document, press F7 and then F8 to
view the statistics. They will probably
vary slightly from the results obtained
from hand counting.
.pa
-------------------------------------------------------------------
DIRECTORY INFORMATION
If we forget what some of the file names are on the disk, we can
press F1 -> Help and then F2 -> Directory. Entering *.txt
shows a list of .txt files on the disk. We don't need to enter
the DIR part of the command.

Changing directories: USE DOCUMENT [CD text] changes the current
subdirectory to subdirectory <text>.

-------------------------------------------------------------------
HELP
F1 displays the Help file - the HELP file is a user-customizable
file designed for notes by the user about the operation of & in
the user's particular environment.

.pa
-------------------------------------------------------------------
EXIT
000 0: ESC-> Exits the program. At the first level of exit, you
will have the option of saving the margin commands, last file
previewed, and word processor type.
     At the second level of exit, you have the option of exiting to
your word processor without going back to DOS. Pressing SPACE in
either the first or second levels will take you back to BLACK &
WHITE. If you enter the name of your  word processor, it will
load and execute. When it finishes, B&W will be run. However, the
screen will need to be refreshed with the F4 - New Scn option.
Also, when entering the name of the program to execute, use the
extension (.exe, .com, or .bat). Entering the file name opposite
WD in the cue file will cause it to be executed when exiting
BLACK & WHITE. At present, entering this name into the cue file
must be done with an editor such as EDLIN or equivalent - it cannot
be saved to the cue file from the program like the margins can.
.pa

USING THE F6 MENU FUNCTIONS
-------------------------------------------------------------------
The following diagram entitled F6-OPTIONS BLOCK DIAGRAM details the
functions available in menus accessed by the F6 function key.

These menus operate under the same rules as the main menus. Press
ESC to move back towards the main menu when using these menus.

.pa
SET VIDEO MODE
-------------------------------------------------------------------
Under most conditions, this program will sense the type of adaptor
which you have in your PC and use either the graphics or monochrome
mode. If you have the graphics adaptor and want to see the
Monochrome Mode Information Table (MMIT) use this menu to select
it. A table will display similar to those shown in the Monochrome
Examples.

If you have a monochrome adaptor then the MMIT is all that you will
be able to see. This table is an illustration of the basic
formatting equation as it applies to the document you are
previewing. It is described in the section: Monochrome Operation
.pa
MONOCHROME OPERATION
-------------------------------------------------------------------
Monochrome operation is similar to graphics mode with the exception
that the pages do not display and the page numbers are abbreviated
to a range. Despite its obvious limitations, monochrome operation
can show some important information about your document in the
Monochrome Mode Information Table (MMIT).
The MMIT describes the major factors which affect the format of
your document. The following table is an explanation:
.tb3
PAGE NO.   Page number of the document you are previewing.
PRINT LM.  Printer left-margin adjustment factor
WP LM.     Word processor left margin (or page offset) This does
           not take into account leading spaces in the text body.
EFF. LM.   Effective left margin (sum of the first two)
LINE LENG. Length of longest line on the page.
RT. MARG.  Left margin + LINE LENG. = Right margin
RT BORDR   White space between right margin and edge of page. If
           this is 0 or minus, the printer will print off the right
           side of the page.
PAGE LENGT Length of page in lines.
PRT TOP M  Printer top-margin adjustment factor
WP TOP     Word processor top margin
LIN PER P  Lines of text actually on this page
BOT MARG   Bottom margin - actual white space at bottom of page.
WORDS      If statistics are on, words-per-page will be displayed.
TABL BK    If statistics are off, table breaks (see below) which
           occur across the bottom of this page are shown by
           number.
.pa
TABLE BREAKS:
-------------------------------------------------------------------
Table breaks are user-defined two letter codes and a number from 1
to 50 which are inserted by the user just before and after tables
or white space that should not be broken across page boundaries.
When using Wordstar they must be preceeded by a dot.
The diagram below shows an example:

.tb23
---------------------------
 IMPORTANT TABLE
Sales...........4567.00
Equity..........2234.55
----------------------------
.tb23

Whenever this table is broken across a page boundary, the number
will be displayed in the appropriate column of the MMIT.

.pa
MONOCHROME EXAMPLE 1: (Not Included in this file)
-------------------------------------------------------------------
This example shows a typical Monochrome Mode Information Table
(MMIT) for  a document 85 characters wide and 33 lines long.
Table break 12 (the number 12 was picked at random) occurs across
pages 4 - 7. A long break like this could signify the position of
a chapter or long table that you wish to keep track of. If more
than one table break is "open" at the time of a page break, only
the one with the highest number will be displayed.


MONOCHROME EXAMPLE 2: (Not included in this file)
This example shows the MMIT with the statistics mode set. The
number of words-per-page shows in the right-hand column.

.pa

-------------------------------------------------------------------
SIMULATING PITCH CHANGES
     Sometimes we would like to see documents that will be printed
out at different line spacings than 6 lines per inch and different
pitches than 10 characters per inch (all & calculations are based
on these numbers). We can simulate these different spacings as
follows. Suppose we had a document to be printed at 8 lines per
inch and a pitch of 12 characters per inch. At 8 lines per inch,
a 11" piece of paper would have 8x11=88 lines on it. At 12
characters per inch, the standard 8.5" wide paper would have 102
characters across instead of 80 (normal).
     So we go to F9->Page Size and set the paper size to 88 x 102
characters. (The inches and centimeters will show a larger paper
than 8.5" x 11".)  Returning to the  base menu 000 0 we have the
choice of either embedding in the document or setting through
F6->F6->Set Margins new margins and lines per page. Displaying
the document will allow us to see at least some indication of the
margins and page breaks as they will appear on the final product.
.pa
-------------------------------------------------------------------
PRINTER MARGINS
     By request, an adjustment command has been allowed so that
the space at the top of the page resulting from inserting the
paper into the printer can be taken into account. This is NOT A
DOT COMMAND. Rather, it can be set from the AF5 - Set Margins
menu or edited into the cue file. All top margin commands will
create top margins which are in addition to the amount of the
printer margin. This adjustment command does not affect lines per
page or other margins. The cue file command for adjusting the top
margin is XT and for adjusting the left margin is XI.
     For example: XT 3 adds 3 spaces to the top of the page.
                  XI 2 adds 2 spaces to the left margin.

-------------------------------------------------------------------
LINE LENGTH or RIGHT MARGIN
     Some files, such as Multimate, set a right margin and wrap
words that go over that margin. The line length can be set from the
AF5 - Set Margins menu or from the word processing document which
typically includes a ruler line with tabs. Wrapping algorithm
differences may cause lines per page to differ between this
program and the printout you actually get.
.pa
-------------------------------------------------------------------
INCLUDING FILES
     Since the program must re-read the file to find out where it
left off when it included another file, it can appear to have died.
Eventually, it will complete this read but the process is time
consuming and it is better to chain files together, particularly at
the end of long documents.
     Note that WORDSTAR uses .fi. If you just want to chain files
it is less-time consuming to assign this code to chain files so
that the program does not read through each time.
.pa
-------------------------------------------------------------------
                NOTES ON WORD PROCESSOR TRANSLATORS
GENERAL: Support by word processor manufacturers has varied widely.
In some cases, their technical material has been a lot of help and
in others, not much help at all. This is not a reflection of the
quality of their product, but is a consequence of the complexity of
the problems involved. Therefore, the quality of the  resulting
translate routines varies. If a translate routine fails to
operate satisfactorily, either use the word processor's built-in
translator to make an ASCII file (usually not a very satisfactory
solution) or find a programmer to write a translator program which
takes your word processor's files and converts them to ASCII. Part
of the reason for releasing & into the public domain is to
encourage people to write these translators so they may become
available for public use. The ASCII file can then be read by &
using the Wordstar (and General) option. A bit of warning: The
Multimate translator included in this program is 12 pages of C
code, reads the disk sector-by-sector, and took several weeks to
write and debug. The other translators are almost as long.
Using an external translator program means running an extra program
which diminishes the advantage of & for short documents.

.pa
-------------------------------------------------------------------
WORDSTAR  (and GENERAL)
     All lines that start with a dot (.) are counted as either
     commands or comments. Supported commands include:
     >.mt top margin
     >.mb bottom margin
     >.lp lines per page
     >.po left margin
     >.in include a file (via fi in cue file)
     >.ch chain a file (via fi in cue file)
     >.pa page advance
     >.pl page length - sets length if different than current
         page length
     Not Supported:
     > multiple line headers and footers, proportional spacing
     > Headers in general are only partially supported.
     > upper case commands, leading spaces in headers and footers
       are ignored.
     Commands are limited to 2 characters followed by either a
digit, a space or spaces, and header or include file information.
.pa
WORDSTAR (continued)

     Footers are placed 2 lines above the bottom of the page.
     Footer margin commands in your file will have no effect. If
     this is a problem, send a description of how WS figures the
     footer margin for a fix.
     Header margins are added to the printer fudge-factor.
     If the lines per page exceeds the page length, they are
     recalculated to equal: page length - bottom marg - top marg.
     If the printer fudge-factor is too big, lines will still
     show over the bottom of the page or the footer will be
     overrun. It is important to set the top and bottom margins
     before specifying a new page length and reset lines per page
     after a new page size (unless the default recalculation
     mentioned above is ok).

.pa
     The WORDSTAR module also can be used to translate standard
     ASCII files produced by editors, spreadsheets, etc. The above
     commands apply.
     Wordstar is a trademark of the MicroPro Corp.

     WORDSTAR workalikes include:

     BONNIE BLUE   (trademark of Bonnie Blue Software)
     NEW WORD   (tm of Rocky Mountain Software Systems)
     PC-WRITE   (tm of Quicksoft)
.pa
-------------------------------------------------------------------
PC-WRITE
     No separate option is included for PC-WRITE since it is so
similar to WORDSTAR. However, it is very important to include the
cue file commands to translate the : commands of PC-WRITE. This has
already been done in file BWPCW.CUE. All you need to do is rename
BW.CUE something else and rename BWPCW.CUE, BW.CUE so it will load
upon program execution.
     Supported:
     >.V:, .W: etc. (see cue file)
     >.H: only the LAST header in a multiple header is recognized.
           However, previous ones do affect the top margin but not
           lines-per-page (as they are supposed to).

     Not Supported:
     >.B: is not fully supported at this time. Varying results have
     occurred when using this in conjunction with headers. In
     summary, even though it is troublesome, I would recommend that
     you insert the page break where you want it instead of relying
     upon lines per page to do it for you when using this word
     processor.



.pa
-------------------------------------------------------------------
MULTIMATE
     Supported:
     >Tabs, rulers (right margin), page breaks, word wrap,
     indenting of paragraphs. Decimal tabs treated as
     regular tabs. Top margin.

     Not Supported:
     >Headers, footers, chain, include, propor. spacing

     Notes:
     >Be sure to set lines-per-page to about equal with page
      length or page breaks will occur where they are not supposed
      to.

     Multimate is a trademark of Multimate International.
.pa
-------------------------------------------------------------------
XYWRITE
     Supported:
           >PL multiple numbers.
           >RM LM IP FC FL PG
     Not Supported:
           >MDMN etc. (BOLD or other in-line commands)

     XYWRITE is a trademark of XYQUEST Inc.
.pa
-------------------------------------------------------------------
ACKNOWLEDGEMENTS
        Sound routine thanks to:
                            Philip A. Mongelluzzo

        Thanks to XYQUEST, MULTIMATE, and QUICKSOFT for support.

        Thanks to other word processor manufacturers not
        mentioned here for their support.

        Thanks to the many patient users of this software who have
        endured delays, who have sent in files for testing, and
        whose suggestions helped improve this product.

.pa
-------------------------------------------------------------------
                         CONTRIBUTIONS

     If you find this product useful and worthwhile, a contribution
of $40.00 is suggested. You will receive a wire-bound, typeset, and
illustrated manual.
     If you wish to order a quantity of manuals, use the following
formula to figure the total price:

     Total Price = (6 x (number of manuals)) +  34

     So 1 manual is $40, 2 manuals are $46, 11 manuals are $100.
     Over 11 manuals, the price stays a constant $9.00 apiece.

     Send contributions to:  Chelsea-Skye, Inc.
                             Box 634
                             Socorro, NM 87801

     Thank you.
-------------------------------------------------------------------

```
{% endraw %}

## FILES415.TXT

{% raw %}
```
--------------------------------------------------------------------------
Disk No 415   W-ED, Word Processing Previewer                        v2.1
--------------------------------------------------------------------------
Two very powerful programs can be found on this diskette.
W-ED is a small (14K) editor and word processor which is very simple
to use.  Its commands are easy to remember and it creates an ASCII
file which can be printed or re-edited.  It will work with a mono
display, but is especially nice to look at on the color screen.
 
The Word Processing Previewing System (&) gives you a picture of page
layouts from any ASCII word processor file without your having to
print a hard copy.  It draws up to 18 rectangle "pages" on your color
display, then fills them with microscopic output to show exactly how
your document will look.  Repeating the operation, up to 18 pages at
a time, it is invaluable in saving reams of paper and your time,
especially for documents with tens or hundreds of pages.
 
WED      BGN  Screens describing each section of W-ED
WED      PGM  Describes the programmable version of W-ED
INSTALL  EXE  Changes the W-ED default options, such as margins
WED      SAL  Sales information to obtain W-ED
WED      TUT  Screens for W-ED tutorial
WED      DEF  Documentation for W-ED (10 pages)
ORDER    WED  WyndhamWare order form for W-ED
WED      EXE  The W-ED Word-processing EDitor (executable program)
TSTBRD   EXE  Demonstrates the programmer's version (for DEMO only)
DEMO     EXE  Demonstration of W-ED, including a tutorial
WEREAD   ME   Short description of W-ED (2 pages)
WED-DESC 1LN  One-line description of W-ED files
--------------
&        EXE+ Word Processing Previewing System (executable program)
&        CUE  Configuration file for W.P.P.S.
&        DOC  Documentation for W.P.P.S. (33 pages -or- 10 with "type")
&PCW     CUE  Configuration file for PC-Write users
&READ    ME   Short description of W.P.P.S. (1 page)
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1986,87 PC-SIG
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                     <<<<  Disk #415 W-ED, &  >>>>                       ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To Print the documentation for W-ED Type the following command:        ║
║             COPY READ.ME LPT1  (press enter)                            ║
║                                                                         ║
║  To Start W-ED Type the following command:                              ║
║               WED   (press enter)                                       ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To Print the documentation for "&" Type the following command:          ║
║            COPY &.DOC LPT1  (press enter)                               ║
║                                                                         ║
║ To Start "&" Type the following command:                                ║
║                       &   (press enter)                                 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0415

     Volume in drive A has no label
     Directory of A:\

    WED      BGN      6656   1-01-86   1:00a
    WED      PGM      5760   1-01-86   1:00a
    INSTALL  EXE     12800   1-01-86   1:00a
    WED      SAL      1920   1-01-86   1:00a
    WED      DEF     31232   1-01-86   1:00a
    ORDER    WED      1792   1-01-86   1:00a
    TSTBRD   EXE     16384   1-01-86   1:00a
    DEMO     EXE      4608   1-01-86   1:00a
    READ     ME       3584   1-01-86   1:00a
    WED      EXE     15872   2-22-87  10:18p
    ABOVE    FIL       640   1-01-86   1:00a
    TOP      FIL       768   1-01-86   1:00a
    -------  ---         4   5-08-87   2:28p
    FILES415 TXT      2109   5-08-87   2:34p
    &        EXE     57728   5-08-87   2:29p
    &        CUE      3754   5-08-87   2:29p
    &        DOC     29300   5-08-87   2:30p
    &PCW     CUE      3154   5-08-87   2:30p
    &READ    ME        829   5-08-87   2:30p
    GO       BAT        38   5-09-87   1:05p
    GO       TXT      1156   5-09-87   1:06p
           21 file(s)     200088 bytes
                          111616 bytes free
