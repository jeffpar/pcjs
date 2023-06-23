---
layout: page
title: "PC-SIG Diskette Library (Disk #3692)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3692/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3692"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## BEDIT.DOC

{% raw %}
```
BEDIT - A Large Character Text Editor
Part of the B-WARE family
Copyright Hexagon Products 1989-1991

Version 2.0                                          February 1991

BEDIT Table of Contents

Page numbers refer to the printed documentation that comes
with purchases of B-Edit.

Page    Subject
 Introduction
 1      BEDIT
 4      Character Sizes
 6      BEDIT and WordStar
 7      Text Editors and Word Processors

 User's Guide
 8      Getting Started
 9      Changing the Display
 10     Moving Around
 13     Entering Data
 14     Saving Your Work
 15     Line Commands 
 16     Block Commands
 18     Search and Translate
 19     File Commands
 20     Windows
 22     Introduction to Release 2.0
 23     Spell and Suggest
 25     Soundex
 27     Abbreviated Input
 28     Case in Abbreviations
 29     Suggested Uses
 31     Macros
 33     Examples
 34     Files
 
REFERENCE
 36     ABBREVIATIONS (F7)
 36     ABOVE (ALT-A)
 36     BELOW (ALT-B)
 37     BLOCK (ALT-K)
 38     COPY (ALT-C)
 40     DELETE (ALT-D)
 40     DELETE BLOCK (CTLK-Y)
 42     EXIT (ALT-X)
 42     FILENAME (ALT-F)
 43     GOTO (ALT-G)
 44     HELP (ALT-H)
 45     INPUT (ALT-I)
 46     INSERT CONTROL (CTL-P)
 46     JOINFILE (ALT-J)
 48     LOAD FONT (ALT-L)
 49     MOVE (ALT-M)
 51     NEWFILE (ALT-N)
 51     OPTIONS (ALT-O)
 52     PRINT (ALT-P)
 52     QUIT (ALT-Q)
 53     REFORMAT (CTL-B)
 53     RESEARCH (ALT-R)
 53     SEARCH (ALT-S)
 55     SPELL (SHIFT-F10)
 56     SUGGEST (CTL-F10)
 56     TRANSLATE (ALT-T)
 57     UNDO (ALT-U)
 58     VIDEO (ALT-V)
 59     WINDOW1 (F1)
 59     WINDOW2 (F2)
 60     WRITE (ALT-W)
 61     ZOOM (ALT-Z)
 Quick Reference
 63     ALT-Letter Commands
 63     Function Keys
 64     Miscellaneous
 64     CTL-Letter Commands
 66     CTL-K-Letter Commands
 66     CTL-Q-Letter Commands

 B-Custom - to Customize B-Edit
 67     Background
 69     Specifics
 71     Colors
 74     Files
 76     SHHH Note

 77     Disk Vendors, BBS's, Users Groups
 78     Other Products and Prices
 79     BEDIT 2.0 Registration Form

B-Edit - A Large Character Text Editor
Part of the B-Ware family
Copyright Hexagon Products 1989-1991

Version 2.0                                            February 1991

Introduction
B-Edit
B-Edit is a text editor with the ability to use larger than standard
characters for its display, making it suitable for users with vision
impairments.  Version 2.0 of B-Edit now comes with a spelling checker
and can automatically expand abbreviations for you.

B-Edit is one of a family of such low-priced, large character products,
collectively known as B-Ware.  When you purchase B-Edit for $39, you
receive several of these related programs at no extra cost.  You also
receive a copy of this documentation printed in large, easy-to-read,
18-point type.  For information on how to pay for B-Edit, see the last
pages of this file.

The display characters used by B-Edit range from normal text size to
block characters so large that 60 of them will fill the entire screen.
When run on video cards and monitors that support graphics, B-Edit offers
a wide selection of display sizes. 

Although B-Edit was originally written to make a low-price editor available
to users with impaired vision, other uses have been found for it:

 in the classroom to make the display visible to students in the back of
the room;

 by hearing-impaired users for on-the-spot captioning of live conferences
where the large display is visible to everyone sitting around a table;

 on laptops, which are difficult to read.

B-Edit uses ALT-letter key combinations for most commands.  For example,
ALT-G is used for the GOTO command.  You can use this command to change
the display to show a particular line number in your text file.  To execute
this command, you press the ALT key and hold it down while you also press
the G key.  Where possible, the letter used for a command is the first
character of a word that describes the function, such as G for GOTO.  For
a quick look at the commands available in B-Edit, see the Quick Reference
section of this document. 

B-Edit has all common editing functions:
    copy, move, or delete blocks of text lines;
    read, write, or join text files;
    process one or two files in one or two windows;
    files are limited to memory;
    search and replace text strings;
    scroll with the arrow-keys;
    get online help;
    enter text in INSERT or OVERSTRIKE mode;
    reformat text a block at a time;
    get automatic word wrap on input. 

In addition to its native commands, B-Edit also accepts 50
WordStar (WS) text editing commands for users who are familiar with
that word processor from MicroPro International.  B-Edit does not have
the extensive formatting capabilities of WordStar.  Since most WS
commands consist of the CTL key and a letter or two, there is little
conflict between the two sets of commands.

In many cases, the WS commands are synonyms for native mode B-Edit
commands, so you can use whichever you prefer.  However, some new
functionality has been added including greater cursor control, and
reformatting blocks of text.  In these cases, the only way to get
the new functionality is to use the new WS commands.

Character Sizes
B-Edit gives you control over the size of the characters used to make
up the display, ranging from the very large, where a screen is filled
up with 6 lines of 10 characters; to the standard 25 lines of 80
characters (or more if you have an EGA boosted to 43 lines or 120
columns).  Intermediate display modes are available on monitors which
support graphics mode, such as CGA, EGA, or Hercules.  You can cycle
among all modes supported for your display at any time by pressing
ALT-Z (for the ZOOM command).

The number of characters displayed by B-Edit is a function of the size of
each character and the capacity of your video card and monitor.  B-Edit
uses three character sizes, one 8 bits wide, one 12 bits wide, and one
16 bits.  In 640x200 graphics mode, a 16-bit font yields 40 (640/16)
characters across, and 12 (200/16) lines down. 

The 12-bit font used in B-Edit is provided courtesy of Kim Kokkonen of
TurboPower Software.  It was developed for use in BigEd, a large character
word processor.  The combination of characters available to you with the
ZOOM command (ALT-Z) given the resolution of your hardware and the fonts
used is shown in the following table.


Video       Display     Font    Yield 
Hardware    Mode

All         80x25       1x1    80x25  
            80x25       8x4    10x6

CGA         320x200     16x16   20x12
            640x200     16x16   40x12
            640x200     12x14   53x14
            640x200     11x14   58x14

Hercules    720x348     32x34   22x10
Monochrome  720x348     16x18   45x19
Graphics    720x348     12x14   60x24

EGA         320x200     16x16   20x12
            640x200     16x16   40x12
            640x350     16x16   40x21
            640x350     12x14   53x25
            640x350     11x14   58x25           


Number of rows and columns produced on various video cards given
the resolution and font size.

B-Edit and WordStar
B-Edit is a text editor, not a word processor such as WordStar (WS) from
MicroPro International Corp.  However, for those of you familiar with WS,
B-Edit now has many WS text editing commands.

There are slight differences between B-Edit and WS commands, but there
shouldn't be any major surprises.  In many cases, the WS commands
duplicate native mode B-Edit commands; use whichever you prefer.  However,
some new functionality was added including greater cursor control, and
text formatting.  In these cases, the only way to get the new functionality
is to use the new WS commands.

The supported WS commands are listed in an appendix.  Those which
represent new functionality are marked "NEW".  Those which are synonyms
for native B-Edit commands are marked "Syn".  Even if you are not familiar
with WordStar, you should browse the list for NEW features which extend
B-Edit's capabilities, such as the following:

    CTL-A moves the cursor left 1 word
    CTL-F moves the cursor right 1 word
    CTL-B reformats text a block at a time
    CTL-W scrolls the display up
    CTL-Z scrolls the display down
    
    CTLQ-B move to top line of marked block
    CTLQ-K move to bottom line of block
    CTLQ-E move to top displayed line
    CTLQ-X move to bottom displayed line
    
Text Editors and Word Processors
B-Edit is a text editor, not a word processor.  Both text editors and
word processors are used to input text, have features to locate and
change specific occurences of text, and can save and recover files from
disk.  You can see from the list of WordStar commands supported by B-Edit
just how many functions overlap.

However, a word processor can takes more control of the arrangement
of printed output for you.  It has the facility to change fonts, print
multiple columns, merge text and graphics, produce footnotes and indexes,
etc.  

B-Edit is not a word processor.  However you can achieve some of the
same results by combining B-Edit with a text formatting program.  A
simple one called B-Print is provided for you.  You can use B-Edit
to create a document with embedded print formatting commands which
B-Print can interpret to change fonts, produce page numbers, etc.

If you need more features of a word processor, consider another
B-Ware product, BIG for WP, which enlarges the screen output for the
WordPerfect and LetterPerfect word processing programs.

User's Guide

Getting Started
B-Edit requires no installation to run.  The customization program, B-Custom,
described later in this document, is used only for convenience in setting
default editing values.

If you are confused while using B-Edit, you can use the HELP command (ALT-H)
to get a description of what the editing commands do.  After you enter
the HELP command, you are asked to enter the command you want information
on, or a question mark to get a list of commands.  For example, if you
can't remember what command is represented by ALT-D, first press ALT-H
for the HELP menu, then press ALT-D.  You will be told that ALT-D means:
"DELETE Remove the current line". 

If you want to start with an empty slate, just enter the command BEDIT.
The screen will be cleared, and the numbers 1:1 will show up on the first
line followed by some strange characters.  The 1:1 means that the B-Edit 
cursor (or current position) is in the first column of the first row.
The other characters on the top line reflect the current operating mode
of B-Edit, for example, whether B-Edit is in INSERT or OVERSTRIKE mode. 
Since there is no text in the file, the rest of the screen is empty.

To process an existing file with B-Edit, you can give the filename on the
DOS command line along with the BEDIT command.  An example is:

    BEDIT FLORIDA.LET

In this case, B-Edit would look for an existing text file called FLORIDA.LET,
and read it into memory.  If B-Edit can't find such a file, it will display
an error message "Can't find file!".  When you get this or any other error
message, B-Edit will leave the display on the screen until you press a key
indicating that you have read the message and want to proceed.  The key you
press to clear an error message will not be used for any purpose other than
clearing the screen.

If B-Edit couldn't find your file, it might be because it is on another disk
or in another directory.  On the command line, or anywhere a filename is
called for, you can specify a disk and directory, such as:

    BEDIT C:\VACATION\IDEAS\FLORIDA.LET

When B-Edit finds your file, it displays the top left part on the screen.  

Changing the Display
B-Edit starts off in block character display mode.  For standard displays, 
this will be 6 lines of 10 characters each.  At any time, you can use the
ZOOM command (ALT-Z) to cycle from one display mode to another.  You have
more choices of display modes on machines with video adapters and monitors
that have CGA or Hercules monochrome graphics capabilities.  You can also use
the VIDEO command (ALT-V) to change the display to reverse video, in case
this results in a clearer display.

B-Edit's block character display uses characters that are composed of 4 text 
lines and 8 text columns each.  In the standard text mode of 25 lines of 80
columns each, B-Edit will display 6 rows (25/4) of 10 (80/8) block characters
on each screen.  If you are using a display that is capable of more than 25
lines or 80 columns in text mode, you can set that mode before entering B-Edit,
and B-Edit will take advantage of it.  For example, if you set your EGA to 43
line mode, B-Edit will fit 10 rows (43/4) of block characters on each screen.
Using this feature outside of B-Edit gives you a greater degree of
customization.  

Moving Around
You can display a different portion of the file by using the arrow  keys to
scroll the display.  If you press the key with an arrow pointing up on it,
the B-Edit display will show you the previous line in the file.  If you are
already looking at the top line in the file, the up arrow will cause a short
beep meaning you are trying to run off the edge of the file.  The key marked 
PgUp will cause B-Edit to display the previous page in the file.  A page
consists of the number of lines that can be shown on the screen in whatever
display mode you are in.  The HOME key takes you all the way to the top line
from wherever you were in the file.

This progression of UP, PgUp, and HOME is repeated in the other directions.
However, since there aren't enough arrow keys to go around, some function
keys are used.  The following shows the scrolling commands:
                   Distance
           
1 Character     1 Page     To the Edge
UP arrow        PGUP       HOME        
DOWN arrow      PGDN       END     
LEFT arrow      F3         F5      
RIGHT arrow     F4         F6      

These commands all change B-Edit's cursor.  The position of the cursor is
always shown on the top line of the display in the form Line:Column.  The
cursor shows the position in the file where any new characters you type in
will be entered.

You can also move to a different part of the file by using some of the
editing commands.  For example, if you know what line you want the cursor
to appear on, you can use the GOTO command (ALT-G) to have B-Edit change the
display to that line number.  If you are looking for a particular string
of characters in the file, you can use the SEARCH command (ALT-S) to move
to the next line that contains those characters.  The SEARCH command is
described in another section.

Note that the left and right arrows, the BackSpace key, and the Tab
key are all different and have different effects in B-Edit.  The 
arrow keys move the cursor without affecting the data in the text file.
The BackSpace key moves the character one space to the left REMOVING
the character it backspaces over.  The BackSpace key is used to correct
mistakes; the arrow keys are used to position the cursor.  The key marked
DEL is similar.  It removes the character pointed to by the cursor, while
the BackSpace key removes the character one space to the left of the cursor.

The Tab key results in the entering of 1 or more blank characters.  Enough
are added until the current column begins a group of 4.  For example, if
you press the Tab key when the cursor is in columns 1 through 4, enough
blanks will be added to move the cursor to column 5.  If the cursor is
originally in columns 5 through 8, the cursor will end up in column 9.

A number of new cursor movement commands have been added in this 
release.  They are accessible only through the WS commands.  These
include move left or right a word at a time; scroll the display up 
or down leaving the cursor on the same character; go to the top or
bottom line of a marked block; go to the top or bottom line of the
screen display.

The WS cursor movement commands are centered around the four keys:
E, S, D, and X.  On the keyboard, these four keys form a diamond.
E is on top, so CTL-E means move the cursor up.  S is to the left,
so CTL-S means move the cursor to the left.  Similarly, CTL-D is
right, and CTL-X is down.

The keys A and F are just outside this diamond to the left and right.
CTL-A means move the cursor one Word left, CTL-F means one Word to
the right.  The keys R and C are just outside the diamond up and down.
CTL-R means move the cursor one page or screen up; CTL-C, one page
or screen down.  On the other side, CTL-W means scroll the display up
one line (leaving the cursor on the same line if possible), and CTL-Z
means scroll the display one line down.

Beyond these keys, WS has Quick movements.  These commands are entered
by pressing CTL-Q followed by one more letter.  Again, the commands
center around the E, S, D, and X diamond.  CTLQ-E moves the cursor
to the top of the screen.  CTLQ-S,D, or X moves to the other edges
of the screen.  CTLQ-C moves to the bottom right edge of the screen,
and CTLQ-R moves to the top left edge of the screen.

Two other commands are CTLQ-B which takes you to the top line of a 
marked block, and CTLQ-K which takes you to the bottom line of a
marked block.

Two differences from WS are notable.  HOME in WS is a synonym for
CTLQ-E and means top left of screen; in B-Edit, HOME is a synonym
for CTLQ-R and means top left of file.  Similarly, END in WS is a
synonym for CTLQ-X and means bottom right of screen; in B-Edit, END
is a synonym for CTLQ-C and means bottom of file.  These commands
already had a different meaning in release 1.0, and were left unchanged.  

Entering Data
You can be in one of two modes when you type in characters, INSERT mode or
OVERSTRIKE mode.  In INSERT mode, the current line is pushed apart at the
cursor, and the characters you enter are inserted into the middle.  In
OVERSTRIKE mode, the characters you enter replace the text under the cursor.
B-Edit starts off in INSERT mode.  You can change back and forth between modes
by pressing the key marked INS.  At all times, the tenth character of the top
line of the display shows what mode you are in, a hollow triangle for INSERT
mode, and a solid triangle for OVERSTRIKE mode.

Additionally, if you are in INPUT mode, when you are adding text in INSERT
mode at the end of a line, and you come to column 80, B-Edit will presume
you want to skip to the next line and continue typing.  The last word on 
the current line will be moved to the following line for you.  INPUT mode
is reflected by the character in the 8th column of the top row of the display.
It is an 'I' when you are in INPUT mode, or a blank otherwise.

Saving Your Work
After you are done with the file, you can take one of three actions.  First
of all, if you have made any changes to the file that you want to save, you
must use the WRITE command (ALT-W) to write the file back to the disk it 
came from.  Before the WRITE command saves your file, it first renames your
existing file so you always have a "backup" file available.  The WRITE
command changes the first character following the dot in the file name to 
an exclamation point.  For example:

    FLORIDA.LET becomes FLORIDA.!ET

When the filename doesn't have a dot, the exclamation point is added:

    APRIL becomes APRIL.!

Sometimes you make changes and find you like the original version
better.  In that case, just don't use the WRITE command, and your changes 
will disappear.  You can now either use B-Edit to edit a new file, or leave
the B-Edit program.  Use the NEWFILE command (ALT-N) to read in a new file
to replace the previous file you were working on, or the QUIT command (ALT-Q)
to leave B-Edit and return to DOS.  However, just to make sure you haven't
pressed a key by accident that will eliminate your work, you are asked to 
verify the action.

You are given the message: "Changes in file 1 (or 2)! W to write, A to abort,
Other key to proceed".  At this point, if you want to save the changes you
have made before you proceed, press the W key.  If you have entered the
command accidently, and don't want to QUIT or process a NEWFILE, press the
A key to abort the command.  Press any other key to continue with the command
you entered.

B-Edit also has a PRINT command (ALT-P) which lets you send a copy of your
file to the first printer attached to your system.  The PRINT command will
print your entire file unless you have a block of lines marked.  See the
section on Block Commands for further information.

Line Commands 
If you want to add a complete line of text, you can use one of two commands,
ABOVE (ALT-A) or BELOW (ALT-B).  ABOVE adds an empty line above the line
containing the cursor; BELOW adds an empty line below the line containing
the cursor.  In both cases, the cursor is moved to the empty line. Both of
these commands try to keep up your scheme of indentation, so if the current
line started with 5 blanks, the new line will start with 5 blanks also.

DELETE (ALT-D) completely removes the line the cursor is on.  If you want to 
remove a number of text lines, you can move the cursor to the top of the
group of lines and repeatedly enter the DELETE command. After each one, 
the cursor will be positioned to operate on the following line.  If you find
that you have deleted a line by mistake, you can usually recover it with
the UNDO command (ALT-U).

When lines are deleted, they are not erased from memory, but are kept in a
special UNDO buffer.  The UNDO command removes the most recent line from the
UNDO buffer and places it in your file after the line containing the cursor.
The size of the UNDO buffer is limited, so you will not be able to recover
an unlimited number of lines.  

Block Commands
You can copy, move, or delete a block of lines in the file using the
COPY (ALT-C), MOVE (ALT-M), or DELETE BLOCK (CTLK-Y) command.  In B-Edit
1.0, the command CTL-D was used to delete a block of text.  However,
B-Edit now gives CTL-D its WS meaning of move cursor right, so a new
command is needed for deleting a block of text.  The WS command CTLK-Y is
used.

In this case, the DELETE BLOCK command is available only as a WS command.
The UNDO command (ALT-U) can recover lines deleted with the DELETE
BLOCK command (CTLK-Y) and the DELETE line command (ALT-D).

Before you execute any of these block commands, you must have selected a
block of lines for them to operate on by using the BLOCK (ALT-K) command.
The BLOCK command is executed twice, once with the cursor on top of the
block of lines you want copied or moved, and once with the cursor on the
bottom line of the block.  You can move the cursor by any means you choose,
using the arrow keys or GOTO or SEARCH commands.

If you change your mind, and want to "unmark" a block of lines, just
enter the BLOCK command a third time, and it will refresh itself.  The
ninth character of the top line of the display shows the marked block
status.  If it is blank, you have no marks in the file.  If it is a
lower case 'k', you have one mark in the file, and B-Edit is waiting
for the second.  If it is an upper case 'K' you have a block marked,
and can use the COPY or MOVE command.  You can use the WS Quick commands
CTLQ-B or CTLQ-K to go to the top or bottom line of a marked block.

If you have a block of lines marked when you execute the PRINT command
(ALT-P), the PRINT command will only print those lines.  Otherwise, the
PRINT command will print the entire file.

Search and Translate
If you want the display to show lines that contain a certain string of
characters, use the SEARCH command (ALT-S) to search for those characters.
When you enter the SEARCH command, you will be asked to enter the string
of characters you are looking for.  If B-Edit can find those characters,
it will change the display to show the line.

In the search string, you can use the special characters * and ?.  These
special characters act as they do in DOS.  A ? matches any single character,
whereas the * matches any number of characters.  For example, C?T will find
the occurrence of CAT, but not COAT.  C*T will find both.  In addition to
these special characters, you can anchor searches to the first or last 
characters in a line by pressing the the F5 or F6 key any time you are 
entering a search string.  If you press F5, (which, in normal editing mode
will move the cursor to the left edge of the current line), the search 
will find only matches which begin in the first column of each line.
Similarly, F6 causes the search to be anchored to the right side of each line.

To look for the next line containing the same string, use the RE-SEARCH
command (ALT-R).  Since B-Edit already knows what you are looking for, you
won't be asked to enter the search string again.  The TRANSLATE command 
works like the SEARCH command in that it looks for a string of characters
in your text file.  However, if the TRANSLATE command finds a matching string,
it will replace it with a second string you enter.

File Commands
If you started B-Edit with a filename, B-Edit will use that filename to 
process subsequent file commands.  So, for example, after you have made
changes and enter the WRITE command (ALT-W), B-Edit will write your file to
disk using the same filename.  Sometimes you want to edit a file, make some
changes, and then write the changed file to a different file.  To do this,
enter the FILENAME command (ALT-F) before using the WRITE command.

The NEWFILE command (ALT-N) replaces the file you are editing with a new file.
If you've made changes to the current file without saving them, you will be
asked to verify that you do not want to save your changes.  The JOINFILE
command (ALT-J) joins a second text file with the file you are already
editing.  The entire second file is merged after the line containing the
cursor within the original file.  You can use the JOINFILE command to combine
several files.

WS has several multiple-operation file commands.  For example, CTLK-T
saves the current file to a differently named file.  B-Edit performs this
by executing two commands in sequence, FILENAME (ALT-F) to change the
active name of the edited file, and WRITE (ALT-W) to write the 
changes.  When you enter CTLK-T, both of these commands are performed
automatically.  However, you should be careful.  If you try to abort
the FILENAME command by entering EXIT (ALT-X or CTL-U), the WRITE 
command will still be performed.  

Windows
B-Edit supports the processing of two files simultaneously in one or two
windows on your display.  To open up the second window, enter the WINDOW2
command (F2).  This will divide the display in half horizontally, and let
you edit a second file in the lower half.  To return to the top window
for further editing, use the WINDOW1 command (F1).  If you are already
editing in the top window when you enter WINDOW1, the second window will
close up.  The second file is still available.  If you are already editing
in the bottom window when you enter WINDOW2, the second window will close 
up, and the entire screen will be taken up with the second file.  

This is hard to explain in words, but fairly easy to understand when you 
are doing it.  Remember that window commands affect only the display, and
not the contents of the files.  Since neither can cause loss of any data,
you can enter them until you get the display you want.  The following table
describes the possibilities:

1 window + F1 = beep!
1 window + F2 = 2 windows, 2nd active

2 windows, 1st active + F1 = close 2nd window
2 windows, 1st active + F2 = make 2nd active

2 windows, 2nd active + F1 = make 1st active
2 windows, 2nd active + F2 = close 1st window

An interesting consequence of this scheme is that you can easily switch
files and windows with the WINDOW2 command.  Start out with file A in the
top window, and file B in the bottom window.  Execute WINDOW2 once, making
file B current.  Execute it again, making file B be the only displayed file.
Execute it a third time, and file A is displayed in the lower window.

A complete description is maintained for each file, so you can be in 
INSERT mode in the top window, but in OVERSTRIKE mode in the bottom.
Similarly, a set of BLOCK markers is kept for both files.  When you 
enter a block command, such as COPY (ALT-C), B-Edit will first use a
block marked in the current file, but if there is none, B-Edit will 
copy from a block marked in the second file.  You can use this feature
to process lines of code between two files.

Introduction to Release 2.0
Release 2.0 has two major enhancements: it will check your spelling and
it will automatically expand your abbreviations.  The abbreviation expansion
is part of a macro facility.

Press the Spell command (Shift-F10) and B-Edit moves the cursor to the next
word in your document that is not contained in B-Edit's dictionary.  If you
like, you can then use the Suggest command (Ctrl-F10) and B-Edit will suggest
similar, correctly spelled words for you.  B-Edit comes with a 60,000 word
dictionary, and you can add or delete your own words.

B-Edit can also automatically expand abbreviations for you.  For example, 
suppose you write the word "President" a lot.  You can enter an 
abbreviation in an ABBREVES file to define "prs" as "President".  Then,
whenever you type the word "prs", B-Edit will expand that to "President"
on the spot.  Use this feature to save typing, and to make sure complex
words are spelled correctly.  If you later want to enter the word "prs",
you can turn the abbreviation facility on or off with the Abbreviation Toggle 
command (F7).

Spell and Suggest
B-Edit now has the capability to check the spelling of words used in your 
documents.  Use the new Spell command (Shift-F10) and B-Edit will search 
through your document, moving the cursor to the next word that is
questionably spelled.  B-Edit determines this by looking each word up in a
word disk-based dictionary supplied with B-Edit.

How successful B-Edit is depends on the dictionary it uses.  An unusual word
might be perfectly spelled, but if it isn't common enough to be included
in B-Edit's dictionary, B-Edit will signal it.  Likewise
it might turn out that you have a misspelled word, but your misspelling forms
a legitimate word in B-Edit's dictionary.  That misspelling won't be signalled.
And B-Edit's spelling checker won't tell you if you've used "there" instead
of "their", because both are correctly spelled.

A very large dictionary is counterproductive.  You might mistype "the" as
"teh", but that wouldn't be flagged if "teh" is a rare word.  Also, such a
dictionary takes a lot of space and time to search.  At the other extreme,
a very small dictionary won't contain many correct words.

The dictionary supplied with B-Edit contains 60,000 words, which is a 
compromise size.  It takes up 250K of disk space, can be searched in a 
reasonable amount of time, and contains most commonly used words.  The
file is called "DICTION.ARY" by default, but you can modify this
with B-Custom.

You can also supply your own dictionary for use with B-Edit.  If there are
words you use frequently which are not in B-Edit's dictionary, enter them
in your own dictionary and B-Edit will accept them.  The dictionary just
consists of a file you can create with B-Edit, one word per line.  The
file's name is "ISAWORD", although you can rename this with B-Custom.

If there are words in B-Edit's dictionary which you would never use unless
you spelled another word wrong, you can include them in a "Not-A-Word"
dictionary.  Anything found in that dictionary will always be flagged by
B-Edit.  Again, this dictionary is a simple text file named
"NOTAWORD", which can also be renamed with B-Custom.

When the Spell command (Shift-F10) finds a questionably spelled word, 
it moves the cursor to that word.  The Spell command is then finished.
You can proceed with whatever B-Edit command you like.  If you made a
simple typing mistake, you can correct the word yourself.  If you decide
to make no change to the word, you can use the Spell command again to 
move on to the next questionably spelled word.

If, however, you have made a spelling mistake and are not sure how
the word is correctly spelled, you can use the Suggest command (Ctrl-F10)
and B-Edit will make suggestions for you.  B-Edit's Suggest isn't
foolproof.  For example, if you enter "teh", you might have meant "the",
"tea", "ten", or a number of other words.

The Suggest command will present similar sounding words one at a
time, each with the message, "Change to: newword   Y-Yes N-No Q-Quit". 
If you want the new word, press Y, and the replacement will be made.
If the new word isn't what you want, press the N key to see the next
possibility.  To leave the Suggest command without choosing any word,
press the Q key (or any other non-Y, non-N key) to Quit the Suggest
command.

Although the Suggest command works nicely after the Spell command, it
can be used independently.  At any point during your editing you can use
the Suggest command for suggestions of similar sounding words to the word
under the cursor.

Soundex
The Suggest command uses the Soundex system.  Each word in the dictionary
is converted to a Soundex code.  This code groups words according to how
they sound.  The Suggest command will display all words in the dictionary
that have the same Soundex code as the word under the cursor.

In general, the Soundex system uses the first letter of the word, ignores
vowels, and groups similar consonants together.  A total of four letters
are used to represent a word.  For example, the word "represents" has a
Soundex code with the value "rprs".  

The Suggest command will suggest all words in the dictionary that have the
same Soundex code as the word you are working on.  Sometimes this leads
to strange suggestions.  For example, the following words all have the 
same soundex code ("rprs") as "represents":  "reappraising",
"rapiers", "reappears", and "rubberizing".

To see why the Soundex code for "rubberizing" is the same ("rprs") as
that for "represents", look at the following work:

     r - First letter always used, Soundex is "r";
     u - vowls are ignored
     b - sounds like p, Soundex is "rp";
     b - duplicate consonants are ignored;
     e - vowels are ignored;
     r - use the r, Soundex is "rpr";
     i - vowels are ignored;
     z - sounds like s, Soundex is "rprs";
     ing - already have 4 characters.
    
Abbreviated Input
B-Edit can automatically expand abbreviations.  This feature can be used to
provide quick and accurate typing.  The abbreviations and their expansions
are contained in an external disk file which you can change to your liking.
A sample abbreviation file is supplied for you on the distribution diskette.
The file looks like this:
 
 

The abbreviation starts in the first column.  If the first column
is blank, the line will be taken as a comment and ignored.  Upper or
lower case has no significance in the abbreviation column, but capitalize
proper words in the expansion normally.  Follow the abbreviation by one
or more blanks, then by the expansion.  The expansion may contain embedded
blanks.

When you complete a word in B-Edit by pressing the space key, or entering
a comma or period, B-Edit will look the word up in the list of abbreviations.
If the word is in the list of abbreviations, it will be replaced with the
expansion.  If you don't want to use any abbreviations, you can just erase
the abbreviation file, or use the new Abbreviation Toggle command (F7) to
toggle automatic expansion on or off.

If you want to enter an abbreviation verbatim without expansion, you may
use the F7 key to turn off the feature momentarily.  Otherwise, you have to
undo the expansion and use the arrow keys to move the cursor away from the
abbreviation without triggering the expansion.  It can be done, but F7
is easier.

If you prefer, you can get an abbreviation expanded without typing it
into the document.  This may be necessary if you don't want to follow
the abbreviation with a blank or other character that delimits a word
and triggers the expansion.  To do this, use the Macro command, Alt-Y,
and you will be prompted for an abbreviation.  Just type the characters
and they will be expanded.

Case in Abbreviations
Upper or lower case has no significance in the abbreviations as they are
listed in the file, but case has significance elsewhere.  For example,
if you have an abbreviation-expansion pair of "st street", st, St, ST,
and even sT will all match, but will be expanded slightly differently.

In this example, st, St, ST, and sT will be expanded to: street, Street,
STREET, and street.  This is done to maintain your intentions.  If you
start out a sentence with an abbreviation, capitalize the first letter 
in the abbreviation, and the first letter in the expansion will be capitalized
too.

If the first character of the abbreviation in your input is lower case,
the expansion will be taken from the file with no change.  If the entire
abbreviation is capitalized, the entire expansion will be capitalized. 

Intended Abbreviations
If you have an abbreviation of "dr dear", and want to write a letter to
your physician, you might want to type in "Dr Dr. Watson:", wanting
the first "Dr" to be expanded to "Dear", but the second to be left alone.

B-Edit will do this.  If a potential abbreviation is followed by a period,
and is capitalized, it will not be expanded.  The drawback of this method
is that an abbreviation at the end of a sentence that is closed with a
period will not be expanded if it is capitalized.

Apostrophes
Letters preceding an apostrophe will be considered for expansion, but
not those following one.  For example, with the pairs "b boy" and
"s such" then "b's" will expand to "boy's", not "boy'such".

Suggested Uses
You can use abbreviations and expansions for several reasons.  The first
and most obvious is to increase the speed of your typing.  Entering
"insf" takes much less time than entering "insufficient".

You can make up an abbreviation file that contains all the jargon or proper
names you use regularly in your business.  For example, use use an entry of
"hmg" for "Hercules monochrome graphics", or use initials for the 
name you type at the bottom of a letter.

You can also use abbreviations to correct common typing errors you make.
For example, if you frequently mistype "copy" as "coyp", use a "coyp" 
abbreviation that expands to "copy".  (Add a COYP.BAT file to your
system to invoke the COPY command, and you'll never have to change.)

Programmers can use this abbreviation feature to create prototypes of
complex statements.  For example, if you can't remember the order
of the arguments in the C library function "fread", you can use
an abbreviation "frd" that expands into a sample statement, such as:

            fread (buffer, size, count, handle);

You can then use the arrow and editing keys to replace the arguments with
the correct variable names.  If you tend to use the same variable names
in program after program, you might not even have to change those.

If you are using B-Edit for multiple purposes, such as programming and
writing documentation, you may want to maintain two different files
of abbreviations.  "regs" might mean "registers" in one set and "regards"
in another context.

Macros
Ordinarily an abbreviation expansion contains characters only.  However,
an abbreviation can also contain commands.  Commands in abbreviations
must be enclosed in braces {}.  An example is {CR} which means carriage
return or enter.  For example, when you are typing a letter, you
typically end it with the word "Sincerely," followed by four blank lines,
followed by your name.  You can do this with one abbreviation, such as:

        cls     Sincerely,{CR}{CR}{CR}{CR}Name

Other commands that are recognized in braces are:

 {CR}  means carriage return or enter;
 {BS}  means backspace key;
 {INS} means insert key;
 {DEL} means delete key;
 
 {F1} to {F10} means F1 to F10;
 {AA} to {AZ}  means Alt-A to Alt-Z;
 {CA} to {CZ}  means Ctrl-A to Ctrl-Z;
 {CQA} to {CQZ} means Ctrl-Q A to Ctrl-Q Z;
 {CKA} to {CKA} means Ctrl-K A to Ctrl-K Z;
 {AF9}          means Alt-F9;
 {AF10}         means Alt-F10;

 {UP}    up arrow
 {DOWN}  down arrow
 {LEFT}  left arrow
 {RIGHT} right arrow
 {END}   end key
 {PGUP}  page up key
 {PGDN}  page down key

 {CEND}      Ctrl-End
 {CLEFT}     Ctrl-Left
 {CPGDN}     Ctrl-PgDn
 {CHOME}     Ctrl-Home
 {CRIGHT}    Ctrl-Right
 {CPGUP}     Ctrl-PgUp



In addition to commands in braces, a few keywords will be expanded in
a varying way.  Included are:
 {?}    get keystrokes from until Enter;

 {H}    hour of the day (0 through 23);    
 {M}    minute of the hour (0 through 59);
 {S}    second of the minute (0 through 59);

 {MM}   month in digits (1 through 12);
 {DD}   day of month in digits (1 through 31);
 {YY}   two digit year (00 - 99);

 {MMM}  three character month name ("Jan");
 {DDD}  three character day name ("Mon");
 {YYY}  four character year (1991); or,
 {YYYY} four character year (1991);
 
Examples
Note that the date and time expansions can in turn be expanded.  So, even
though {MMM} will be expanded to "Jan", you can have a "Jan" abbreviation
that expands to "January".  A simple date macro to start off a letter
with the date in the form "January, 1991" would be:


The date in the form "01/19/91" would be:


The time in the form "09:30:15"  would be:

Files
B-Edit release 2.0 uses several files, including: DICTION.ARY for
the Spell and Suggest commands; ISAWORD to add words to the
dictionary; NOTAWORD to delete words from the dictionary; and
ABBREVES for the abbreviation feature.

If you don't want to use these features, you don't need to keep these
files around.  B-Edit will run without them.  The dictionary a compressed
file, but the others are ASCII text files such as created with B-Edit's
Write command (Alt-W).

By default, B-Edit uses a disk and directory (C:\BEDIT) in front of
these filenames.  If you have a hard disk with the C: designation,
you can create a BEDIT directory (CD \; MD BEDIT), and place
the word files in that directory (COPY A:DICTION.ARY C:\BEDIT).
That way, there needs to be only a single copy of the dictionary
file no matter what disk or directory is current when you are using
B-Edit.

If this is not the setup you prefer, you can change the names of any of
these files with the B-Custom program.   If the filename does not include
a DOS disk and directory as part of the name, B-Edit will look in whatever
directory is current when you execute it.  You might want to keep a 
different set of abbreviations or ISAWORD files in different directories.

Sorting Files
The ABBREVES, ISAWORD, and NOTAWORD files do not have to be kept in
order, but B-Edit will run faster if the files are sorted.  You can
sort the files with DOS's SORT program with the following commands,
where "filename" is one of ABBREVES, ISAWORD, or NOTAWORD:

    SORT  < filename      > filename.NEW
    COPY    filename        filename.OLD
    COPY    filename.NEW    filename
    
    
REFERENCE

ABBREVIATIONS (F7)
The ABBREVIATIONS command toggles the abbreviation facility on or off.
There may be times when you want to use a string of characters which
happen to be an abbreviation without having them expanded.  The simplest
way to do this is to turn the abbreviation facility off with the F7 key.
If your display has enough characters, the letter 'A' will appear on
the top line of the B-Edit screen in column 11 when abbreviations are
active, else the column will be blank.

ABOVE (ALT-A)
BELOW (ALT-B)
The ABOVE and BELOW commands are similar:  they are both used to add
an empty line to a file.  The ABOVE command adds the empty line above
the line containing the cursor while the BELOW command adds it just
below the line containing the cursor.  In fact, they don't always add
a completely empty line, because B-Edit tries to maintain your style
of indentation.  Thus, if the current line begins with 5 blank spaces,
the line being added will also begin with 5 blank spaces.  

For both commands, the cursor will be moved to the new line, and will
be positioned after any initial blank spaces.  If you are ending your
indentation, you will have to use the BACKSPACE key to return to the
left margin.  Very little can go wrong with either the ABOVE or BELOW
command.  However, if you are running out of memory, B-Edit may not be
able to fit in an extra line.  In this case, B-Edit will delete any lines
it has been saving up in case you wanted to UNDO any DELETED lines, and
warn you that you are getting low on memory.


BLOCK (ALT-K)
The BLOCK command is used to mark a block of lines for subsequent 
processing by one of the commands which acts on a block of lines.
Several B-Edit commands work on a block of lines as opposed to working 
on a single line or on the entire file.  Among these are the COPY, MOVE,
DELETE BLOCK, PRINT, and TRANSLATE commands. 

Some of these commands work differently if a block of lines is marked
than if it isn't.  For example, if a block of lines is marked, the PRINT
command will print only those lines, but if none is marked, the PRINT
command will print the entire file.

To mark a block of lines, move the cursor to the top line of the
block and enter the BLOCK command.  A lower-case k will show up on
the top line of the display.  Move the cursor to the bottom line
of the block, and enter the BLOCK command again.  (You can use any
other commands to move the cursor, including GOTO and SEARCH, or use
any of the arrow keys.)  An upper-case K will show up on the top line
of the display, indicating that you have a block marked.  You can now
use any of the block commands.

A block can consist of a single line if you like.  Just enter the BLOCK
command twice without moving the cursor off the line.  Also, it makes
no difference what order you mark the lines in.  You can mark the bottom
line before of after marking the top line of the block.

To cancel the marked block, just enter the BLOCK command again.  A
short beep will sound, indicating that the marks have been removed.  The
top line will display a blank.  There are three  marking states: nothing
marked, a single mark, and a double mark.  These states are represented
on the top line of the display by a blank, a lower-case k, and an
upper-case K.  Each window maintains its own set of block markers.

See the individual commands to see how they are affected by marked
blocks.  F8 is a synonym for the BLOCK command.  In WS, the CTLK commands
deal with blocks of text.  (The K is like the B-Edit command ALT-K.)
CTLK-B and CTLK-K can be used to mark blocks.


COPY (ALT-C)
The COPY command makes a copy of a marked block of lines from one
place in your file to another.  It can also be used to copy lines
from one file to another if you are using multiple windows.  The COPY
command first looks in the file you are editing for a block of lines
that has been marked with the BLOCK command (ALT-K).  If you have a 
block of lines marked, it will be indicated on the top line of the
display by a capital K.  

If the COPY command finds a block of lines marked in the current file,
it will use those lines as the source of the copy.  You are able to edit
two files in two windows if you use the WINDOW2 command.  If you are editing
two files, and COPY cannot find a marked block of lines in the current file,
it will look in the alternate file for a marked block of lines.  If COPY
finds a marked block of lines in the secondary file, it will use those
lines as the source of the copy.  If not, it will give you an error message
telling you to mark the source block before you execute the COPY command.

The COPY command makes a copy of the block of marked lines.  The original
lines are unaffected, and are still marked as a block for subsequent block
operations.  The newly created block of lines is placed immediately after
the line containing the cursor.  The current line cannot be anywhere within
the marked block, or you will get an error message.

If you are editing a file that is close to the capacity of the amount of
memory installed on your PC, it is possible that the COPY command will not
be able to get enough memory to complete the operation.  In that case, you
will be warned that the operation has terminated and all lines may not have
been copied.  It may be the case that only part of the marked block has been
copied.

COPY (ALT-C) tries to use a block of lines marked in the current window
first.  If no block is marked in the current window, COPY will try to use
a block of lines marked in the noncurrent window, performing an
interwindow operation.  Occasionally, you will have a block of lines
marked in both windows, and will want to perform an interwindow
operation.  To do this, you can use the noncurrent window COPY
(CTLK-A).  This operation will ignore any block of lines marked in the
current window, and will look only to the noncurrent window for a
marked block of lines.  CTLK-C is a synonym for COPY.

DELETE (ALT-D)
DELETE BLOCK (CTLK-Y)
The DELETE command removes the current line from the file.  The line
is not lost, for it can be recovered with the UNDO command.  The cursor
is moved to the next line in the file, and kept in the current column
position.  Because of this, if you want to delete a number of lines, you
can move the cursor to the top line, and enter the DELETE command repeatedly.

Alternatively, you can use the DELETE BLOCK command.  To use this command,
you must have a block of lines marked with the BLOCK command (ALT-K) in 
either the current file, or in the second file if you are using two windows
to edit two files (see the WINDOW2 command).
The DELETE BLOCK command uses the CTL key instead of the ALT key.  This
may help you avoid deleting an entire block of lines where only a single
line was intended to be deleted.  Lines deleted with the DELETE BLOCK command
are also not lost, but rather moved to an area that is never displayed, in
case you enter the UNDO command.  

Using the DELETE/UNDO commands in combination is much like the MOVE command.
You might want to use such a combination to move a single line of text.  
With the MOVE command, you would have to use the BLOCK command twice to mark 
the single line.  With the DELETE/UNDO combination, you do not have to use the
BLOCK command.  Also, unlike the BLOCK command, the UNDO buffer remains in
memory even if you change the file you are editing.  So you can use the
DELETE/UNDO combination to move lines of text between files.

One caution with doing this is that the number of lines which are kept 
around for UNDO is not unlimited.  If you run out of memory for other
commands, the UNDO area is cleared out for other usage.  If this happens,
you might not be able to UNDO the lines you need.

The function key, F9, is a synonym for the DELETE command.  It works 
completely the same, including how it affects the UNDO command.  Another
convenient command is the ALT-F9.  (You enter this command by holding down
the ALT key while pressing the F9 function key.)  The ALT-F9 command
deletes all characters from the cursor to the right end of the line.  This
is roughly equivalent to holding down the delete key, but is much quicker.
Be careful when you use this command, because the characters removed are
NOT kept in the UNDO buffer.  The WS equivalent to ALT-F9 is CTLQ-Y.


EXIT (ALT-X)
The EXIT command is synonymous with the QUIT command (ALT-Q).  Use EXIT
to leave B-Edit completely and return to DOS.  If you
just want to edit a different file, you should use the NEWFILE command
instead.  If you have made changes to the primary or secondary file and
have not saved them, you will be asked whether the file should be changed
before you quit B-Edit.  You do not have to save these changes: the message
is only to prevent you from accidently losing your work. 

The QUIT command and the EXIT command (ALT-X) are synonyms, and act 
identically.  Either of these two commands can be used to cancel most
of the prompts in B-Edit.  For example, if you mistakenly enter ALT-G (GOTO)
instead of ALT-H (HELP), you are faced with a prompt asking what line
you want to go to.  Enter the EXIT command to cancel this prompt and the
underlying command, and you can then enter the correct command.

CTL-U acts as a cancel command like EXIT (ALT-X) when entered in
response to a B-Edit prompt.  It acts as the UNDO command (ALT-U)
when entered by itself.

FILENAME (ALT-F)
A file name is associated with each file you are editing.  If you enter
B-Edit by giving a file name on the DOS command line, that is the file
name associated with the file.  That file name is used in subsequent
file operations, such as with the WRITE command.  You can use the FILENAME
command to change the NAME of the file.  Compare this to the NEWFILE command
(ALT-N), where you change the file itself by reading in a copy from disk.

You might want to change the name of the file to make trial changes while
preserving your original file intact.  Remember, however, that before the
WRITE command saves your file, it first renames your existing file so you 
always have a "backup" file available.  The WRITE command changes the first
character following the dot in the file name to an exclamation point.
For example:

    FLORIDA.LET becomes FLORIDA.!ET

When the filename doesn't have a dot, the exclamation point is added:

    APRIL becomes APRIL.!

File names can be simple names and extensions, such as BEDIT.DOC, or can
be fully qualified with the disk and directory, such as A:\BEDIT.DOC or
C:\UTILS\BEDIT.EXE.  You are limited to 65 characters.  Note that B-Edit
doesn't do any checking on the validity of the file name you enter.


GOTO (ALT-G)
The GOTO command provides a quick way of moving the cursor to a particular
line, when you know how far that line is from the top.  GOTO asks you 
what line number you want, and then displays that line.  A programmer
might use this feature when a compiler shows there is an error in a
particular line number.  

You can also use it to move the display relative to where you are now.  For
example, if you want to move three pages down, add the number of lines on
three pages to the current line, and enter it in the GOTO command.  You can
always tell what line number you are on at any time by looking at the top of
the display.  

If you choose a line number that is beyond the last line of the file 
you are editing, B-Edit will move the display to the last line of the
file and give a short beep to let you know it could not complete your
request.  When you enter the GOTO command, you are asked for a line
number.  If you change your mind about using the GOTO command, or have
entered it by accident, you can use the QUIT command (ALT-Q) or EXIT
command (ALT-X) to terminate the GOTO command.  The WS equivalent
of GOTO is CTLQ-I.


HELP (ALT-H)
The HELP command provides on-line help.  All help text (as well as all
error message text) has been tailored to fit in the fewest number of
characters B-Edit displays on one screen, which is 6 rows of 10 characters
each.  So while every attempt has been made to make the help text useful,
it is not a replacement for this documentation.  

When you enter the HELP command, you are given a choice of asking for
help on a specific command, or getting a list of commands.  Most of B-Edit's
commands are ALT-letter key combinations or function keys.  If you can't
remember what F5 does, enter the HELP command, and then press F5.  You will
get a one-SCREEN description of the command.  For F5, the message reads:
"LEFT EDGE Move cursor to the left edge. (column 0)".

Alternatively, you can get an overview of all commands by entering a question
mark after the HELP command.  This results in a one-LINE (10 characters)
description of each command.  The entry for F5 is: "LeftMost".  If you follow
the HELP command with a keystroke that doesn't represent any command, such
as ALT-Y, you will get the question mark list.


INPUT (ALT-I)
The INPUT command toggles B-Edit into and out of "input" mode.  When you 
are in input mode, the character 'I' is displayed on the top line.  You
begin B-Edit in input mode.

In input mode, when you are entering characters at the end of a line of text
and you come to column 80, B-Edit moves the current word you are entering to
the next line without your having to press the enter key.  This is also known
as wrapping the word to the next line, or word wrap.  A word is defined as
characters surrounded by blanks. 

B-Edit has no preset limit on the length of any line.  If you want to enter
data beyond column 80, you can toggle input mode off with the INPUT command.


INSERT CONTROL (CTL-P)
The WS commands using the CTL keys are coded internally by the values
1 through 26 for CTL-A through CTL-Z.  If you enter one of these
values, B-Edit will execute the associated command.  In some cases,
this might not be what you want.  For example, you might want to embed
a single character with a value 12 in your file.  When printed, this
character will cause a form feed. 

To avoid having B-Edit execute the 12 when you enter it as a CTL-L, you
must tell B-Edit you are using it as a character and not a command.  Do
this by preceding it with a CTL-P.  The single character entered after
a CTL-P will be entered as a character into your text.



JOINFILE (ALT-J)
The JOINFILE command lets you merge two complete text files.  When you 
enter the JOINFILE command, you are prompted for the name of another
text file.  That file is then read in its entirety.  All lines in the
new file are added to the present file just after the current line.

If B-Edit can't find the new file on disk, you will be given an error 
message, as you will if you run out of memory before the entire new
file can be processed.  If you don't want to join the entire file, 
you can use the WINDOW2 (F2) and COPY (ALT-C) commands to choose which
lines you are interested in.
LOAD FONT (ALT-L)
The LOAD FONT command lets you replace any of the fonts used by B-Edit.
B-Edit uses three fonts, an 8-bit, 12-bit, and 16-bit.  Each font contains
a pattern to make up all 256 possible characters.  For example, the
8-bit entry for the letter 'A' might look like this:

                                  ..XX....
                                  .XXXX...
                                  XX..XX..
                                  XX..XX..
                                  XXXXXX..
                                  XX..XX..
                                  XX..XX..
                                  ........ 
                                                

where the dots are 0's and the X's are 1's.  The only inter-character
spacing done in B-Edit must be provided for in the font itself.  Thus,
the A has an empty row along the bottom and two empty columns along
the right hand side.  The first row is 0011 0000 or 30 in hexadecimal.
In hex, the entire entry for an 'A' would be "30 78 CC CC FC CC CC
00".

Each entry takes up eight bytes, so for all 256 characters 8*256 =
2048 bytes are required.  For the 16-bit font, each row takes up two
bytes, and 16 rows are required.  For 256 characters, 2*16*256 = 8192
bytes are required.

For the 12-bit font, each row still takes up two bytes, but only the
first 12 bits in the row are displayed.  The 12-bit font uses 14 rows,
so the 12-bit font takes up 2*14*256 or 7168 bytes.

When you issue the LOAD FONT command, you are prompted for a file
name.  LOAD FONT then gets the size of the file you name.  If the file
contains 2048 bytes, LOAD FONT will replace the 8-bit font with the
file you name.  If the file contains 7168 bytes, the 12-bit
font replaced; 8192, the 16-bit font.

Without a font editor, which is not yet available, it isn't easy to
take full advantage of the LOAD FONT command unless you have some
suitable replacement fonts available from other sources.  B-Edit is
able to use unchanged any font with the extension .F8 from the
Ultravision package from Personics.  B-Edit will also use any font
suitable for use with BigEd from Kim Kokkonen.

MACRO (ALT-Y)
Normally you type an abbreviation directly in your document, and B-Edit
will expand it in place.  However, you can use the Alt-Y command as an
alternate means of triggering this B-Edit feature.  Press the Macro
command, Alt-Y, and you will be prompted for a string of characters.
If the character are an abbreviation, their expansion will be inserted
into your document.   

MOVE (ALT-M)
The MOVE command is much like the COPY command, except that when 
the MOVE command is completed, the source lines are removed from
their original positions.  

The MOVE command moves a marked block of lines from one
place in your file to another.  It can also be used to move lines
from one file to another if you are using multiple windows.  The MOVE
command first looks in the file you are editing for a block of lines
that has been marked with the BLOCK command (ALT-K).  If a block of 
lines is marked, it will be indicated on the top line of the
display by a capital K.  

If the MOVE command finds a block of lines marked in the current file,
it will use those lines as the source of the move.  If MOVE cannot
find a marked block of lines in the current file, it will look in the
secondary file, if you are using two windows to edit two files (WINDOW2),
for a marked block of lines.  If MOVE finds a marked block of lines in the
secondary file, it will use those lines as the source of the MOVE.  If not,
it will give you an error message telling you to mark the source block before
you execute the MOVE command.

The MOVE command moves the block of marked lines.  The original
lines are placed immediately after the line containing the cursor.
The current line cannot be anywhere within the marked block, or you
will get an error message.  The new lines are now marked for subsequent
block operations.

MOVE (ALT-M) tries to use a block of lines marked in the current window.
If no block is marked in the current window, MOVE will try to use a block
of lines marked in the noncurrent window, performing an interwindow 
operation.  Occasionally, you will have a block of lines marked in
both windows, and will want to perform an interwindow operation.  To
do this, you can use the noncurrent window MOVE (CTLK-G).  This operation
will ignore any block of lines marked in the current window, and will look
only to the noncurrent window for a marked block of lines.

NEWFILE (ALT-N)
The NEWFILE command brings a new file into B-Edit.  If there was a previous
file, and you have made changes to it without saving the changes, you 
will be asked if you want to save the changes first or to go ahead with the 
NEWFILE command.  

NEWFILE prompts you for the name of the file to be edited.  If you change
your mind, or have entered NEWFILE by accident, you can cancel the 
NEWFILE command by responding QUIT (ALT-Q) or EXIT (ALT-X) to the 
prompt.  If NEWFILE can't find the file you name, it will give you
an error message, then start you with an empty workspace.  The NEWFILE
command always starts you fresh:  there are no marked blocks in the new
file, there are no changes, the first column of the first line is 
displayed, etc.  

OPTIONS (ALT-O)
The OPTIONS command, ALT-O, lets you set the values for various options
used in B-Edit.  For example, when you press the tab key in input mode,
B-Edit inserts blanks until it reaches a column that is a multiple of
four.  You can use the OPTIONS command to change this figure to any 
value from 1 to 9.  Similarly, the PRINT command prints to the first
printer attached to your system.  If you have multiple printers (or 
multiple devices that are attached as printers), you may have to 
change the number of the printer.

Also, you can use the OPTIONS command to change the attributes used
by B-Edit.  B-Edit uses 4 attributes: 0 for normal text; 1 for help and
error text; 2 for prompts; and 3 for the status line.

PRINT (ALT-P)
The PRINT command lets you direct all or part of the file being edited
to the first printer attached to your system.  If you have a block
marked in the file, only that block of lines will be printed.  If there
is no block of lines marked, all lines in the file will be printed.


QUIT (ALT-Q)
Use the QUIT command to leave B-Edit completely and return to DOS.  If you
just want to edit a different file, you should use the NEWFILE command
instead.  If you have made changes to the primary or secondary file and
have not saved them, you will be asked whether the file should be saved
before you quit B-Edit.  You do not have to save these changes: the message
is only to prevent you from accidently losing your work. 

The QUIT command and the EXIT command (ALT-X) are synonyms, and act 
identically.  Either of these two commands can be used to cancel most
of the prompts in B-Edit.  For example, if you mistakenly enter ALT-G (GOTO)
instead of ALT-H (HELP), you are faced with a prompt asking what line
you want to go to.  Enter the QUIT command to cancel this prompt and the
underlying command, and you can then enter the correct command.

REFORMAT (CTL-B)
The REFORMAT command (CTL-B) works only on marked blocks.  You can, of
course, mark a single paragraph, or the whole file.  REFORMAT fills
each line up to the current line width with as many whole words on
each line as will fit.  No hyphenation is performed.  The line width
is set by the ZOOM command (ALT-Z) to match the resolution of your
display.  You can override this value with the OPTIONS command (ALT-O).
REFORMAT puts the original lines in the UNDO buffer.  If you don't
like the result of the REFORMAT, you can reclaim them with the UNDO
command (ALT-U).

RESEARCH (ALT-R)
SEARCH (ALT-S)
The SEARCH and RESEARCH (re-search) commands are related.  Both look through
the file you are editing for an occurrence of characters that matches what
you are looking for.  The SEARCH command is a way to change the display to
show a line that contains a string of characters you are interested in.  
When you enter the SEARCH command, you are prompted for the string you
want B-Edit to find.  The RESEARCH command just looks for the next occurrence
of the same string.

As an example, if you use B-Edit on the BEDIT.DOC file, you might SEARCH for
an occurrence of the character string ALT.  B-Edit would change the display
to show the next line that contains this string.  You could then read about
whatever ALT command was being described.  To find the next occurrence, 
enter the RESEARCH command.  This way, you won't have to enter the same
string, ALT, again, because B-Edit knows you want to look for the same string
as used in the last SEARCH command.

Searching is case sensitive, so a search for "ALT" will not turn up an 
occurrence of "alt".  In addition to entering the usual letters, numbers, 
and punctuation, two characters have special meaning in searches.  Those
two characters are the asterisk (*) and the question mark (?).

If a question mark is used in a search string, it will match ANY character
in the appropriate position.  Thus, the string C?T will match CAT, COT, or
even CST.  An asterisk will match any number of characters in the appropriate
position.  As an example, C*T will not only match CAT and COT, but will also
match COAT and part of "COME FLY WITH ME".  SEARCH will not match strings
that are separated by a new line, or are spread over multiple lines.

In addition to entering characters that must be matched by SEARCH, you have
the option to anchor the search to either end of the line.  If, when you are
entering the search pattern, you enter the LEFT EDGE(F5) or RIGHT EDGE(F6)
command, the search will be anchored to the appropriate edge of the line.
So, for example, if you want to find occurrences of the word "Dear", but
only when it appears at the beginning of a line, enter the LEFT EDGE command
while entering Dear as the pattern.  The prompt will show an "L" next to 
the Anchor line meaning that the search will be anchored to the Left edge
of the line.  (To correct a mistake, entering the edge command a second
time will toggle the anchor off.)

If SEARCH cannot find the string, you will get a warning message.  If you
use RESEARCH before using SEARCH, you will be prompted for a search string,
just as if you had entered SEARCH directly.  If you enter RESEARCH when there
is only one occurrence of the string in the file, RESEARCH will sound a beep
to warn you that its work is complete, but the cursor won't be changed.  Both
SEARCH and RESEARCH work from the current position to the end of the file,
then wrap around to the beginning of the file to continue their searching.
If you decide not to continue with the SEARCH operation when you are prompted
for a search pattern, you can enter the QUIT command (ALT-Q) to cancel the
SEARCH.

F10 is a synonym for the SEARCH command, and ALT-F10 is a synonym for the
RESEARCH command.  The WS equivalent of SEARCH is CTLQ-F.  The WS equivalent
of the RESEARCH command is CTL-L.

SPELL (SHIFT-F10)
The SPELL command compares words in your document against words in an
online dictionary.  Press Shift-F10, and B-Edit will move the cursor to
the next word in your document that does not appear in its word list.
This word may or may not be spelled incorrectly, it just doesn't happen
to be in a list of acceptable spellings.  The SPELL command might really
be called a "Find the Next Questionably Spelled Word" command.

After B-Edit moves the cursor, control is returned to you.  You can modify
the word, run SPELL to bypass the word and find the next such word, use the
SUGGEST command, or perform any other B-Edit operation.

The SPELL command uses the files DICTION.ARY, ISAWORD, NOTAWORD, and its
own internal word list of many common words.  You can modify the names
of these files using B-Custom, including the disk and directory that holds
them.

SUGGEST (CTL-F10)
B-Edit comes with a list of 60,000 correctly spelled words.  These words are
not in alphabetical order, but are kept in order of how they sound.  If you
use the SUGGEST command, B-Edit will suggest words that might sound like the
word under the cursor.  You can ignore the suggestions, or use them to 
automatically replace the word under the cursor with the suggested word.
SUGGEST is conveniently used after SPELL, but that is not a requirement.

TRANSLATE (ALT-T)
The TRANSLATE command is related to the SEARCH command (ALT-S) in that it
too looks for occurrences of a string of characters in the file.  However,
when TRANSLATE finds the occurrences, it replaces them with a second string.
For example, if you find after typing a letter that you misspelled Smyth
as Smith, you could TRANSLATE "Smith" to "Smyth".  

By default, the TRANSLATE command will change all occurrences of the search
pattern.  If this is too much, you can limit the action of the TRANSLATE
command to a marked block of lines.  See the BLOCK command for information
on how to mark a block of lines.  If TRANSLATE cannot find any occurrences
of the search pattern, it will warn you with a message.  The same rules
for forming the character string used in SEARCH apply to TRANSLATE, including
the use of the asterisk, question mark, and left and right anchors.  You
can use the QUIT command (ALT-Q) to cancel the TRANSLATE command at the
prompt.  The WS equivalent of TRANSLATE is CTLQ-A.

UNDO (ALT-U)
The UNDO command undoes the effect of the DELETE command (ALT-D) or DELETE 
BLOCK command (CTLK-Y).  Neither of those commands actually destroys the
contents of the lines to be deleted, but rather removes them from the file
being edited to an UNDO buffer that is not displayed.  The UNDO buffer is 
LIFO, last in first out. 

For example, if you DELETE five lines, either with the 
DELETE line command (ALT-D) or with the DELETE BLOCK command (CTLK-Y), and
enter the UNDO command, the last line deleted will be the first line
recovered.  If this is not the line you want, you can enter the UNDO
command multiple times.  In this example you can enter the UNDO command 
five times to recover all five lines.

The size of the UNDO buffer is not unlimited, so at some point, the DELETE
command will cause very old lines to be removed from memory.  Also, if you
are pressing up against the limits of memory in your PC, other commands 
might free up the UNDO buffer to get access to more space.  The UNDO command
is a safety net, but it is not foolproof.

You can use the UNDO buffer as a cut-and-paste area.  You can "cut" lines
from one place in one file with the DELETE command, and "paste" them back
into another area with the UNDO command.  Since the UNDO buffer is not cleared
when you edit a new file, you can even use this method to move data between
files.  However, it will usually be easier and safer to accomplish the same
thing with the use of the WINDOW2 command (F2) and COPY (ALT-C) or MOVE 
(ALT-M).  See the description of the DELETE command (ALT-D) for more 
information as to how UNDO interacts with DELETE.

CTL-U acts as a cancel command like EXIT (ALT-X) when entered in
response to a B-Edit prompt.  It acts as the UNDO command (ALT-U)
when entered by itself.

VIDEO (ALT-V)
The VIDEO command switches the foreground and background attributes of the
B-Edit display.  If you were getting white on black, you will get black on
white after entering the VIDEO command.  If you don't like it, enter the
VIDEO command once more to return to the original state.  The VIDEO command
is available with all ZOOM (ALT-Z) display modes to provide a more readable
display.

WINDOW1 (F1)
WINDOW2 (F2)
You can edit two files simultaneously in two horizontal windows in B-Edit,
move the cursor freely between them, and even move lines of data between them
by marking a block in one window, and copying or moving it to the other.

The WINDOW2 command means you want to do something with the second window.
If there is only one window displayed, WINDOW2 means open up the second 
window.  If there are two windows displayed, and the cursor is in the top
window, WINDOW2 means move the cursor to the bottom window.  If there are
two windows displayed, and the cursor is already in the second window, it
means "close" the top window, and expand the second window to fill the 
entire display.

When a window is "closed", it is no longer displayed, but remains intact.
To see it again, just enter the WINDOW2 command.  The cursor will be in
the same position, your changes will still be in effect, any lines marked
will remain marked, etc.  If you try to QUIT (ALT-Q) B-Edit when you have
changes in a "closed" window, you will be reminded of this and be given
an opportunity to save these changes before B-Edit relinquishes control
to DOS.

Similarly, WINDOW1 means you want to do something with the first window.
If there is only one window displayed, WINDOW1 has no effect.   If there
are two windows displayed and the cursor is in the second window, WINDOW1
means move the cursor the first window.  If there are two windows displayed,
and the cursor is already in the top window, WINDOW1 means close up the
second window and expand the first window to fill the entire display.

Some commands like COPY work on marked blocks of lines.  Each window 
maintains its own block markers.  If you are in one window, the COPY
command will try to use block markers in the file in that window.  Only
if there is no block marked in the current window will COPY look for a
block marked in the alternate window.


WRITE (ALT-W)
The WRITE command is the opposite number of the NEWFILE command (ALT-N).
The WRITE command saves the file you are editing in memory to the disk,
preserving your original file intact.  If there is a file on disk with 
the same name, B-Edit will rename it before the WRITE command saves your
file.  This can provide you with a single-level "backup" file to which
you can return should something go wrong.  The WRITE command creates a
name for the backup file by changing the first character following
the dot in the file name to an exclamation point. For example:

    FLORIDA.LET becomes FLORIDA.!ET

When the filename doesn't have a dot, the exclamation point is added:

    APRIL becomes APRIL.!

You can use the WRITE command as often as you like.  Save your work often
so you don't accidently lose any of your work.

ZOOM (ALT-Z)
The ZOOM command changes the size of the characters used in B-Edit
displays.  The largest characters take up 4 text lines and 8 columns.
In standard display mode of 25x80, B-Edit will display 6 rows of 10
characters of this size.  All Help and error messages fit in this
size display.

The ZOOM command changes the size of the display characters.  On all video
cards and monitors, B-Edit can display at least two sizes of characters, the
normal text mode, and the large block characters described above.  On CGA,
EGA, and Hercules monochrome graphics, B-Edit displays intermediate character
sizes.  The ZOOM command will cycle through all available character sizes
for your machine.  Each can be displayed "normal" or "reversed" with the
VIDEO command (ALT-V).

If you have an EGA that is capable of other text modes than the standard
25x80, you can set one of those other text modes before entering B-Edit, and
B-Edit will take advantage of it.  For example, many EGA systems can use
43-line text mode.  If B-Edit finds 43 lines, it will display 10 rows of
its largest characters (43 lines at 4 lines per character), or 43 lines
when you ZOOM to standard display mode.

Quick Reference

ALT-Letter Commands
A (ABOVE) add an empty line Above the current.
B (BELOW) add an empty line Below the current.
C (COPY) Copy a marked block of lines. 
D (DELETE) Delete the current line.
F (FILENAME) change the name of the current File. 
G (GOTO) Go to a specified line number.
H (HELP) display Help screens.
I (INPUT) toggle INPUT mode.
J (JOINFILE) add a second text file to current file.
K (BLOCK) mark a block of lines.
L (LOADFONT) load a display font.
M (MOVE) Move a marked block of lines.
N (NEWFILE) read in a New file for editing.
O (OPTIONS) display or set values for options.
P (PRINT) Print the current file or marked block.
Q (QUIT) Quit editing, return to DOS.
R (RESEARCH) after a SEARCH, look for same string.
S (SEARCH) Search the text file for a text string.
T (TRANSLATE) change one string to another.
U (UNDO) Undo the last line delete command.
V (VIDEO) change display to reverse Video.
W (WRITE) Write the file to disk.
X (EXIT) eXit B-Edit, return to DOS.
Y (MACRO) enter abbreviation to be expanded
Z (ZOOM) Zoom to a different display mode.
                        Cursor Movement
                            UP ARROW  (up 1 row)
                            PGUP (up 1 page)
                            HOME (upper edge)
 
  (left 1 col)LEFT ARROW                    RIGHT ARROW  (right 1 col)
  (left 1 Page)F3                           F4  (right 1 page)
    (left edge)F5                           F6  (right edge)

                            DOWN ARROW (down 1 row)
                            PGDN  (down 1 page)
                            END  (bottom edge)



Function Keys
F1  window 1
F2  window 2
F3  display 1 page left
F4  display 1 page right
F5  move cursor to left edge.
    with SEARCH, anchor to left edge.
F6  move cursor to right edge.  
    with SEARCH, anchor to right edge.
F7  toggle abbreviation facility.
F8  synonym for BLOCK command.
F9  synonym for DELETE line command.
ALT-F9      delete from cursor to end of line.
F10         synonym for SEARCH command.
ALT-F10     synonym for RESEARCH command.
Shift-F10   SPELL command
CTL-F10     SUGGEST command

Miscellaneous
BS      backspace (delete character to the left)
INS     toggle between INSERT and OVERSTRIKE mode.  Shown on line 1.
DEL     delete character under cursor
CR      in INSERT mode, splits line at cursor;
        in OVERSTRIKE mode, moves cursor.

CTL-Letter Commands
CTL-A(NEW)  move cursor left 1 word.
CTL-B(NEW)  reformat a marked block.
CTL-C(Syn)  move cursor 1 page down (PgDn).
CTL-D(Syn)  move cursor 1 character right.
CTL-E(Syn)  move cursor 1 row up.
CTL-F(NEW)  move cursor right 1 word.
CTL-G(Syn)  delete 1 character (DEL).
CTL-H(Syn)  backspace 1 character (BS).
CTL-I(Syn)  tab (TAB).
CTL-J(Syn)  help (ALT-H).
CTL-K       see following list.
CTL-L(Syn)  repeat previous search. (ALT-R).
CTL-N(Syn)  add new line (ALT-B).
CTL-O(Syn)  show or set options (ALT-O).
CTL-P(NEW)  embed control character in text.
CTL-Q       see following list.
CTL-R(Syn)  move cursor 1 page up (PgUp).
CTL-S(Syn)  move cursor 1 character left.
CTL-T(NEW)  delete 1 word right.
CTL-U(Syn)  undo operation (ALT-U).
CTL-V(Syn)  toggle INSERT mode (INS).
CTL-W(NEW)  scroll display 1 row up.
CTL-X(Syn)  move cursor 1 row down.
CTL-Y(Syn)  delete line (ALT-D).
CTL-Z(NEW)  scroll display 1 row down.

WordStar requires multiple keystrokes for some command groups.  Two of
these groups are also in B-Edit, the BLOCK group and the QUICK group. 
To execute a BLOCK command, you must press the keys CTL-K followed by
another key indicating which BLOCK command you want.  With B-Edit, it
doesn't matter if the second key is lower or upper case, or whether
you hold the control key down for it or not.  The BLOCK commands
supported in B-Edit follow.

In B-Edit, whenever you enter a command that requires a second character,
the top line of the display will show you that B-Edit is waiting for the
second character.  When you press CTL-K, the top line will show "CtlK - ?".
If you follow the CTL-K with any character that does not form a CTL-K
command, the CTL-K will be ignored, and the new character will be passed
on normally.

CTL-K-Letter Commands
CTLK-A(NEW) copy from noncurrent window.
CTLK-B(Syn) mark a block (ALT-K).
CTLK-C(Syn) copy a block of lines (ALT-C).
CTLK-D(Syn) write file, then edit a new file.
CTLK-E(Syn) rename a file (ALT-F).
CTLK-G(NEW) move from the noncurrent window.
CTLK-K(Syn) mark a block (ALT-K).
CTLK-P(Syn) print a marked block (ALT-P).
CTLK-Q(Syn) quit the editor (ALT-Q).
CTLK-R(Syn) read a new file, join it to the current.
CTLK-S(Syn) save the current file, write it to disk.
CTLK-T(Syn) write to a new filename (ALT-F, ALT-W).
CTLK-V(Syn) move a block of lines (ALT-M).
CTLK-X(Syn) write and exit (ALT-W, ALT-X).
CTLK-Y( * ) delete a marked block of lines.


The QUICK commands are entered by following CTL-Q with another
character. 

CTL-Q-Letter Commands
CTLQ-A(Syn) replace text (ALT-T).
CTLQ-B(NEW) goto the top line of a marked block.
CTLQ-C(Syn) move cursor to bottom right edge of file.
CTLQ-D(Syn) move the cursor to the right edge (F6).
CTLQ-E(NEW) move cursor to top left screen edge.
CTLQ-F(Syn) find text (ALT-S).
CTLQ-I(Syn) goto a new line (ALT-G).
CTLQ-K(NEW) goto the bottom line of a marked block.
CTLQ-R(Syn) move cursor to top left edge of file.
CTLQ-S(Syn) move the cursor to the left edge (F5).
CTLQ-X(NEW) move cursor to bottom right edge of screen.
CTLQ-Y(Syn) delete from cursor to right end of line.

B-Custom - Customize B-Edit
Part of the B-Ware family
Copyright Hexagon Products                  February 1991

Background
With the addition of B-Print and the dictionary necessary to check spelling,
B-Edit has gotten too large to fit on a diskette, and takes up a lot of
space on your disk.

To keep things a reasonable size, I'm now using a packing program called LZEXE
on all the executable files on the distribution diskettes.  This has resulted
in a large savings of disk space.  For example, BEDIT.EXE release 2.0 took
up 90K before compression, but only 48K after compression.

The nice thing about this compression method is that you don't have to do
anything to unpack the program.  The unpacker is built right into the new
executable file, and is executed automatically whenever you run the program.

The only drawback is that B-Custom and B-Apply won't work on these 
compressed executable program.  If you want to run B-Custom or B-Apply on
any of the B-Ware programs, you will have to unpack them first.  To do 
that, you must run the program UNLZEXE.  

UNLZEXE was written by Mitugu Kurizono and contributed to the public domain.
It is included on the diskette containing the B-Ware utility programs. 
There is no charge for this program, and there is also no need to run it
unless you want to run B-Custom or B-Apply.  

Running B-Custom is now a two-step process:

                UNLZEXE BEDIT.EXE
                BCUSTOM
                

B-Custom modifies the B-Edit program itself so you can permanently assign
your own preferences for character size and color.  B-Edit contains
a character string something like the following:

            "SETTINGS = Y Y N GREEN 2"

This tells B-Edit what values to use at startup time for various
settings.  B-Custom reads BEDIT.EXE as a file, finds this string,
and lets you modify each setting.  B-Custom then writes out a second
file, BEDIT2.EXE, with the settings you prefer.  Once you are satisfied
with your choices, execute BEDIT2 or use the DOS Rename command.

You can't go wrong executing B-Custom.  If you don't know what 
value to set for any option, just press Enter to retain the 
old setting.  If you make a mistake, just erase BEDIT2.EXE and
start over.  You can run B-Custom as often as you want.  Also, since
B-Custom only sets the startup values, you can override any setting
in any B-Edit session.

B-Edit runs on both monochrome and color, and it keeps different
settings for them.  When you run B-Custom, you are asked for settings
for both Color and Mono.  If you are only interested in one,
just press Enter to leave the other unchanged.

Specifics
The following are some of the questions asked by B-Custom and a
short explanation of what they mean.  All questions have a default
value.  If you don't want to change the existing default, or don't
understand what the question means, you can just press Enter at any
time to keep the default value.


Closing Screen
You can modify the B-Edit closing screen with any six lines of 10
characters.  Normally it shows your name and company, such as:


B-Custom will prompt you for one replacement line at a time, such as:


The old value, "B-Edit 2.0", is used as the default for the new value.
To keep the old value, just press Enter.  This continues for all 6 lines.

Character Size
B-Edit can use a variety of character sizes.  The exact number depends
on your video card and monitor.  You can cycle through all the choices
for your hardware by repeatedly pressing Alt-Z when you are in B-Edit.

Internally, the character size is referred to by an Alt-Z Count.
This means: how many times do you have to press the Alt-Z key to get
the size you want, starting from the standard display size, which is
Count 0.  For example, from this starting point, if you press the Alt-Z
once, you get the largest display of 6 lines of 10 columns.  This is
Count 1.  

To decide which Count you want, execute B-Edit.  Press Alt-Z several
times until you reach the smallest display size.  This is Count 0.  Then
press Alt-Z as many times as necessary to reach the size you prefer.
Count how many times you pressed Alt-Z, and this is your size Count.

The B-Custom prompt is "MONO Code for Character Size".  Reply with 
the Alt-Z count.  Notice that you are prompted for a size count for both
Mono and Color.  Your answers can be the same or different.

This sizing system may seem bit confusing, but you can run B-Custom
again to settle on the proper size.

Tab Key
When you are in insert mode and you press the Tab key, the cursor 
moves forward by one or more blanks until you reach a column that is
one greater than an even multiple of the Tab value.  For example, if
the Tab value is 4, the Tab key will take you to columns 1, 5, 9, 13, 
etc.  You can change this Tab value using B-Custom.


Color Codes
B-Edit uses 4 color attributes for its display.  You can set the
background and foreground color attribute for each of these four
fields for either color or monochrome displays. 

One code is used to control each of the following:

    normal text display;
    help and error messages;
    prompts asking you for information; and
    the mode display on the top line.

The values are either a single digit from '0' to '9', or a single letter
from 'A' to 'F'.  The meaning of these sixteen codes is shown in the
following table.  Note that the higher codes cause blinking when used
for the background, and cause a brightened color when used for foreground
codes.
    Foreground               Background               
        Color      Code   Color

        Black      0      Black
        Blue       1      Blue
        Green      2      Green  
Normal  Cyan       3      Cyan   Normal
        Red        4      Red
        Magenta    5      Magenta
        Brown      6      Brown
        White      7      White
         
        Black      8      Black
        Blue       9      Blue
        Green      A      Green  
Bright  Cyan       B      Cyan   Blinking
        Red        C      Red
        Magenta    D      Magenta
        Brown      E      Brown
        White      F      White
         

The colors usually used for these fields are:

        white on black  (7 on 0);
        bright red on black (C on 0);
        bright green on black (A on 0);
        bright blue on black (9 on 0).

Monochrome screens only differentiate a few of these codes. The common
monochrome attributes are White on Black (foreground 7, background 0),
Underlined (1,0), and Black on White (0,7).   There are also bright and
blinking versions of these three.
When you run B-Custom, you will be asked for background and foreground
code for both Color and Mono displays for all of the four fields.  If
you are not interested in changing any of these values, just press Enter.


Miscellaneous
There are several miscellaneous settings which follow the color selection.
Most B-Edit users will not need to change these values.  If that is the
case, you can just press Enter to leave the default value unaffected.


Printer ID
DOS allows several printers to be attached to one PC.  They are given
numbers.  When you issue the B-Edit Print command (Alt-P), B-Edit
usually writes to DOS printer number 0.  If you have multiple printers
attached to your system, you can change this value to get B-Edit to
write to a different one.


Spacing
B-Edit has the ability to double space the display for several character
sizes.  If you want the display double spaced, press a 'Y', else press 'N'.


Insert Mode
The Insert key toggles B-Edit between insert and overstrike mode.  B-Edit
usually starts out in insert mode.  If you want to start out in overstrike
mode, enter a 'N' for the Insert Mode prompt, else a 'Y'.

Auto Alt-F
If you enter the B-Edit command with no file name, you will eventually have
to give a file name if you want B-Edit to save the file.  If you enter
a 'Y' for the Auto Alt-F prompt, B-Edit will automatically execute an
Alt-F command upon startup if you haven't given a file name on the DOS
command line.


Omit Mode Line
B-Edit uses the top line of the screen as a mode display.  It shows the
current column and line number, along with several indicators.  If you
want to suppress this top line display, you can enter a 'Y' to the Omit Top
Line prompt, else enter an 'N'.  Suppressing the mode line does not give you
any more display space.

Files
Version 2.0 of B-Edit introduced the use of several external files, including
DICTION.ARY, ABBREVES, ISAWORD, and NOTAWORD.  By default, these files
are looked for in a directory called C:\BEDIT.  If you keep them on that
disk in that directory, you need only have a single copy of them to 
edit files anywhere on your disk.  You can override these file names
with B-Custom.

If B-Edit cannot find any of these files, it will proceed as best it can
without them.  The associated features, like the SUGGEST command will
produce a warning message.


A Final Note
When you finish answering the B-Custom questions, B-Custom will write
a new file to your disk, called BEDIT2.EXE.  If you are satisfied with
your choices, you can execute BEDIT2, or you can use DOS commands to 
Rename BEDIT2.EXE to BEDIT.EXE.  If you have made a mistake, you can
just erase BEDIT2.EXE and run B-Custom again.

Every option you set in B-Custom can be overridden in any single B-Edit
session.  For example, you can change the size of the characters with Alt-Z.
You can change between insert and overstrike mode by pressing the INS key.
And several options can be set using B-Edit's Option command, Alt-O.

Notice to SHHH Customers
B-Edit has been recommended for captioning use by the Self Help for Hard
of Hearing organization.  If you mentioned SHHH when you paid for B-Edit,
it will be customized with the following settings:

    Mono Size = 3
    Color Size = 4
    Double Spacing = 'Y'
    Insert Mode = 'N'
    Auto Alt-F = 'Y'
    Omit Mode Line = 'Y'

If you wanted the SHHH Version but did not mention it when you paid, you 
can set these defaults yourself with B-Custom.  Alternatively, if you
received the SHHH Version of B-Edit, but want to convert it into the
usual version, you can undo these settings.
Disk Vendors, BBS's, Users Groups
Anyone following the Association of Shareware Professional guidelines
may distribute this software.  Specifically:

Distribute all files that make up the program essentially
unchanged.

Charge less than $10 for distribution of the program.

Be sure your customers know the program is not free but is shareware,
and that payment for your distribution is not payment to the author.

Forward copies of problems or complaints about this program to the author.
In return, the author will make an attempt to answer such problems or
complaints.

Let the author know that you are distributing the program,
if possible by sending the author a copy of your catalog or literature
that mentions the program.  In return, the author will supply you 
with updates or corrections to the program.

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
    
B-Edit 2.0 Registration Form
When you register, please include the following:

Name: ______________________________________________________________
 
Company: ___________________________________________________________
 
Address: ___________________________________________________________
 
City: ___________________________ State: ___________________________
 
Zip: _____________ Phone: __________________________________________
     
Optional information:
 
Using on:       LAPTOP  DESKTOP
 
Display:        VGA     EGA     CGA     HERC    MONO    DUAL
 
Oper.Sys:       DOS     OS/2

Preferred Input Device: MOUSE   KEYBOARD

What display size would be best for you?

    # rows _____   # columns _____     REVERSE     NORMAL

Suggestions for improving B-Edit? ___________________________________

____________________________________________________________________

Where did you find B-Edit? __________________________________________

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  PC-SIG Disk #3692 B-EDIT  >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print documentation, type:  COPY BEDIT.DOC PRN  (press Enter)        ║
║                                                                         ║
║ To start the program, type:  BEDIT  (press Enter)                       ║
║                                                                         ║
║ To print information on how to install the dictionary, type:            ║
║                              COPY README PRN  (press Enter)             ║
║                                                                         ║
║                                                                         ║
║ (C) Copyright 1993 PC-SIG Inc. 1030D East Duane Ave. Sunnyvale CA 94086 ║
║     For inquiries call: (408) 730-9291  For orders call: (800) 245-6717 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3692

     Volume in drive A has no label
     Directory of A:\

    BEDIT    EXE     48558   1-17-91  11:07a
    BEDIT    DOC     98046   1-16-91   1:28p
    BEDICT   EXE    156351   1-18-91  10:16a
    README             544   2-14-91   3:30p
    ABBREVES          3463   1-23-91   9:22a
    ISWORD             221   1-05-91  10:20a
    GO       BAT        31   6-04-92   2:25a
    GO       TXT      1078   5-18-93   9:33a
            8 file(s)     308292 bytes
                            9216 bytes free
