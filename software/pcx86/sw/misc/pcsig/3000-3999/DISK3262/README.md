---
layout: page
title: "PC-SIG Diskette Library (Disk #3262)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3262/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3262"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  PC-SIG Disk #3262 MICROTEXT  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To print the documentation, type:  COPY MICROTXT.DOC PRN  (Enter)      ║
║                                                                         ║
║  To start the program, type:  MICROTXT  (press Enter)                   ║
║                                                                         ║
║  To print the order form, type:  ORDER  (press Enter)                   ║
║                                                                         ║
║                                                                         ║
║                                        (c) Copyright 1993, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MICROTXT.DOC

{% raw %}
```
                         MicroText
               The Premium Document Cruncher
                        Version 4.5

                             by
                       George Campbell



INTRODUCTION
============

Save a tree or two!

MicroText lets you print up to 4 pages worth of text on a
single sheet of paper. It does this by tricking your printer
into using a tiny (3 to 4 point) font. Before printing, the
program reformats the text into a temporary file. Your
original remains unchanged.

When re-formatting, MicroText automatically wraps lines
which are too long, but never breaks words. If a document
has large blank spaces in it, caused by excess blank lines,
MicroText removes them, saving even more space. It leaves
one blank line for easy readability.

Your printouts include MicroText's own page numbering, with
the filename included in a header on each of the four pages
on the sheet.

You have complete control over the process. You can add a
left margin, decide whether you want to print graphics
characters, or select one or two columns. You can also set
custom line widths and page lengths to match your particular
needs. There's even more you can do with MicroText.

You can also create a special configuration file which loads
when MicroText runs. This file contains information on all
aspects of the print format, and allows you to set the
program up as you like it. It will start that way each
time, unless you delete the configuration file.

You can run MicroText from the command line, by simply
adding a filename to the command. MicroText will then
automatically crunch and print the file, using the default
settings, or those you've set in your configuration file.

You can also use DOS environment variables to control
MicroText, setting line width, lines per page, and the path
for MicroText's data files. This is especially useful if you
use the program in command-line mode.

More information on each of these options is provided below.

This program is almost 4 years old, and is now in Version
4.5, which has a new, streamlined interface, complete with
intelligent drop-down menus, and mouse support. 
Many other features are new to this version of MicroText, 
so if you have used a previous version, be sure to read this 
file completely, or you might miss something.


HARDWARE REQUIREMENTS
---------------------
MicroText requires DOS 3.0 or later, 256K of RAM, and CGA,
EGA, or VGA (ONLY for the page preview). If you have a
monochrome system and try to use the page preview feature,
you'll see an error message.

MicroText supports Epson-compatible and HP LaserJet-compatible 
printers. HP DeskJet and PostScript printers are NOT supported.

COPYRIGHT NOTICE
----------------

MicroText is protected under the copyright laws of the
United States. The program and this document are Copyright,
1992, by the author, George Campbell. All rights reserved.


LICENSE NOTICE
--------------
MicroText is not in the public domain. It is shareware. If
you use it beyond a reasonable trial period (30 days), you 
MUST register your copy. Registration costs just $15.

There are three ways to register this program:

1. Send a check or money order for the registration fee, written on 
a U.S. bank and made payable to:
 
OsoSoft
1472 Sixth Street
Los Osos, CA  93402

2. If you use CompuServe, you can register online. Log on to CIS and
give the command "GO SWREG." Use the CompuServe menus to locate and 
register the program by name. CompuServe will bill your account for 
the amount of the registration fee, and I'll ship the program to you 
immediately.

3. If you prefer to order by MasterCard, Visa, American Express, or 
Discover card, contact Public (software) Library. You may call 
(800) 242-4775 or (713) 524-6394 for voice registration. Or FAX your 
order to (713) 524-6398. Or send an Email message on CompuServe at
71355,470. For FAX or Email orders, remember to include the name of 
the program, your credit card number, and expiration date. NOTE: 
THIS SERVICE IS FOR ORDERS ONLY. DO NOT CALL PsL FOR INFORMATION OR 
SUPPORT. Credit card orders include a $4 charge for shipping and 
handling.

All orders will be shipped within one week.

Registered users receive the latest version of the program, 
without shareware registration screens, and are entitled to full 
support. Unregistered users do not receive support from the
author under any circumstances.

The latest shareware version of this program is always available on
the OsoSoft BBS. Call (805) 528-3753, 300-2400 bps, 8/N/1.

George Campbell
1472 Sixth St.
Los Osos, CA  93402
(805) 528-3753 (BBS)
CompuServe ID: 71571,222


INSTALLATION
============

To install MicroText, copy all the files on this disk to a
floppy disk or (better yet) to a directory on your hard
disk. If possible, copy the files into a directory named in
the PATH statement in your AUTOEXEC.BAT file. This, combined
with other features I'll describe later, will allow you to
run the program from any system prompt. For more information
on the PATH statement, see your DOS manual.

WARNING: if you use MicroText on a floppy disk-only computer, 
you MUST copy COMMAND.COM onto the floppy which contains
the MicroText files.

MicroText Files:

COLOR.DAT    -- Screen color data (created by program)
MICROTXT.CFG -- Configuration file (created by MicroText)
MICROTXT.DOC -- Manual (try crunching this one first)
MICROTXT.EXE -- Main program
MTMAN.COM    -- MicroText help file (view inside program)
*.MTP        -- Printer drivers. (created by MicroText)
PROGRAMS.COM -- Information on other products

RUNNING MICROTEXT
=================
Normally, you should run MicroText from it's own directory.
Change to the directory holding the MicroText files, then
start the program with this command:

MICROTXT <Enter>

You'll first see an error message, telling you that the
printer driver is missing. Just press a key. Next, you'll
see a message telling you to turn your printer on.

NOTE: Due to all the different types of printers available,
you MUST have your printer on at all times when running
MicroText. If not, you may have unexpected results. This is
especially true with HP laserjet printers. MicroText will
detect that the printer is disconnected, but it takes about
a minute to discover that error. Hence this message.

Next, you'll be asked to choose a printer from a list.
Choose the closest match for your printer. If you have a 9-
pin dot-matrix printer, try either selection no. 1 or 2. 24-
pin dot matrix printer should try selection no. 3. Hewlett-
Packard LaserJet-compatible users should try no. 4.
Selection number 5 takes you to a special printer setup
menu that allows you to enter the codes needed for your printer.
This should not be needed 99% of the time.

NOTE: Microtext does not currently support the HP DeskJet or
any variety of PostScript printer.

Once you choose a printer, installation is complete, and the
program begins. From now on you won't see that screen.

THE MICROTEXT INTERFACE
=======================

MicroText, Version 4.0, uses a simple drop-down menu system
which is always on the screen. The top row indicates the
overall function of its submenus. A box drops down from each
of the main menu selections, offering additional choices.

You can select a menu choice by pressing a cursor key to
move the highlight bar to your selection, or by clicking
either mouse button on a command. If you use cursor keys,
press <Enter> to carry out the command.

As an alternative, you can also press the first letter of a
main menu option, or the number for a submenu option. 

If a menu command requires input from you, an input box will
pop up on the lower part of the screen. Read the box, then
supply the information requested.


Menu Intelligence
=================

MicroText always tries to anticipate your next action, moving
the highlight bar to the most logical operation. It doesn't
always get it right, but you'll find that it guesses pretty
well.


MENU DETAILS
============

FILE MENU CHOICES

1. Select file mask [*.*]

Here, you can specify the type of files you want to display
with the command above. For example, to see .DOC files, type
in *.DOC in the input box. To see only files with the
filename LETTER, use LETTER.*

2. Change Directory

Use this command to move to a different directory. In the
input box, type in the directory information. It will then
appear in item 1 above. You can use the trailing backslash
or not. Examples:  C:\DOS   D:\WP\LETTERS\
NOTE: MicroText always returns you to the original directory
when you exit the program.

3. Select a file for crunching []

This command will ask you for a filename of the document you
want crunched. You'll see a screen, listing the files which
match your file specification. If there are too many files to
fit on the screen, look at the ones displayed. If the file you
want is there, press "y" or click [Yes]. If not, press "n" or 
click [NO] to see more files. After you say 'yes', click on your 
file, then click yes. If you have no mouse, just press a key,
then type the name of the file and press <Enter>. NOTE: if you
enter filenames manually, you must name a file in the current
directory. If you need a file from another directory, use the 
"Change Directory" command before selecting a file.

4. Shell to DOS

If you give this command, MicroText will allow you to give
normal DOS commands, within the available memory. You can
give as many commands as you like. To return to MicroText,
give this command:

EXIT <Enter>

NOTE: If you run an actual program with this command, you'll
see an [OK] button on the screen after the program runs. Click 
the button, or press any key.

5. Quit program

Exactly that. HP LaserJet users will be asked if they want
to reset the printer. This removes the TINY3 font and ejects
the page. If you don't do this, your later printing may be
unusual.

PRINTER MENU CHOICES

1. Print current crunched file

This command sends your crunched document to the printer.
Use it only after crunching your file from the Crunch menu.
While printing proceeds, you can abort at any time by
pressing <F10>.

2. Send Formfeed to printer

Ejects a page from the printer, or advances the paper for
tear-off.

3. Preview first page

This command presents a graphical preview of your crunched
document, more or less as it will appear on paper. Margins
and line lengths are included. (Requires a CGA, EGA, or VGA
display)  Monochrome users will see an error message.

5. Create custom printer driver

MicroText allows you to create a file containing codes for
other printers not supported internally. If you give this
command, you'll see an explanation of the codes. See the
PRINTER CUSTOMIZING section at the end of this document.

6. Load custom printer driver

If you've created a special driver, this command loads it
into MicroText.


LAYOUT MENU OPTIONS

1. *One or two columns [2-COL]

This command is a toggle. Each time you press it, you change
from one-column to two-column mode and vice-versa. Two-
column mode is the default and produces 4 pages on one sheet
of paper. This value can be saved in a configuration file.

2. *Print graphic characters [ON]

This toggle determines whether you print the extended ASCII
characters in a document. When it's [ON], MicroText prints
all graphics characters. If it's [OFF], it replaces them
with asterisks (*). Not all printers can handle the
extended characters. Set this toggle the way you like.
NOTE: the TINY3 font for the HP LaserJet has no graphics
characters. This toggle is ignored.

This value can be saved in a configuration file. See info on
Setup menu.

3. Add left margin [OFF]

This toggle adds a margin to the left of the page. The
margin width is fixed, and varies from printer to printer,
but allows for hole punching. It's fairly small, to allow as
much text as possible on the page. This entry can be saved in 
a configuration file. See info on Setup menu.


SETUP MENU OPTIONS

1. *Choose Printer

Use this option if you get a new printer, or just need to
change your selection. You'll see the same menu you saw when
you first ran MicroText.

2. *Set wrap point

You probably won't need this option. It allows you to
customize the width of each column. If your printouts look
like they could hold a few more letters on each line, you
might want to change this value. If you make it too large, 
however, your text will spill off the edge of the page. 
Experiment with this value for the best results.

3. *Set Maximum lines per mini-page

As above, this figure lets you choose a customized number of
lines on each page of your printout. Use it if your printer
doesn't paginate properly, or if you're using non-standard
paper. Set this number to match the number of total lines on 
each mini-page.

4. *Set screen colors

MicroText can display any colors you like. If you have a
color monitor, use this command to set it up for your
favorites. Just follow the screen instructions. You can 
click on choices with the mouse or type in a number. At the end
of the color-setting routine, you can save your choice in a
file, and MicroText will always start with those colors,
unless you change them here.

5. *Set path for MicroText data files

MicroText normally looks for its data files in the directory
from which you started the program. You can change that
directory here, if you like.

6. Save configuration (becomes default)

Under normal circumstances, you won't need this command. Use
it only if you need to alter the MicroText defaults. This
creates a file (MICROTXT.CFG) containing information on:

1. Wrap point (see 2. above)
2. Lines per page (see 3. above)
3. Data path (see 5. above)
4. Number of columns (1 or 2)
5. Margin setting
6. Graphic character toggle
7. Path for data files

MicroText looks for this file each time it runs and, if
found, makes those values the defaults. Use this feature to
customize the program. NOTE: you must manually set EACH of
the first three values before saving a configuration.

NOTE: See also the section below on Environment Variables.

7. Delete old configuration file

Use this command if you've made a mistake in your
configuration, or if you want to revert to the MicroText
defaults. Also, if you use environment variables, you should
delete the file. If you change configuration, then re-save
it, the old file will automatically be replaced.


CRUNCH MENU OPTIONS

1. Crunch current file []

This command is at the heart of MicroText. Once you've
selected an input file, this command reformats it for
printing. The current filename appears in the brackets. As
crunching proceeds, you'll see a count of the lines
processed. On completion, a report will appear with
information on pages saved, etc.

NOTE: If you change parameters for crunching, after
crunching a file, you must give this command again to re-
crunch your file.

2. Delete temporary file [MICROTXT.TMP]

This command deletes MicroText's temporary file. Normally,
you won't need this command, since MicroText deletes the 
file after printing. If you want to exit the program 
without printing, however, use this command to get rid of 
the file. If you re-crunch a file, MicroText automatically 
over-writes the temporary file.

3. View input file

This command lets you look inside the file you're planning
to crunch. You'll see the file on the screen, one screen at
a time. Press any key to view more of the file. Press <Esc>
to return to the main menu. This viewing utility only moves
forward in the file.


HELP MENU OPTIONS

1. Read Manual

This command lets you browse through a condensed version of
this manual. Use it whenever you have a question about 
operating MicroText.


2. Information on other products

I offer a number of other shareware programs. This command,
which calls the file PROGRAMS.COM, will give you detailed
information on those programs. Just follow the screen
prompts.

3. Print order form

Prints a handy order form to let you register MicroText or order
any other OsoSoft product.


OTHER MICROTEXT FEATURES
========================

Those are just the basic features in MicroText. It can do
much more than you'd think, though, and there are many other
options available. Here are just a few:

ENVIRONMENT VARIABLES

MicroText recognizes three DOS environment variables:

MICROTXT

Tells the program where to find its data files.

MTLENGTH

Tells the program the maximum length of a line for re-
formatting.

MTLINE

Tells the program the maximum number of lines per page

MicroText checks your DOS environment each time it runs. If
these variables are found there, it sets the figures in the
variable as the defaults.

To place the variables in the environment, use the SET
command. Here are examples:

NOTE: Do not add any spaces before or after the equal (=)
sign.

SET MICROTXT=C:\MT

This tells MicroText to always look for data files in the
C:\MT directory. Substitute your own directory information.

SET MTLINE=65

Tells MicroText to wrap lines at the 65th character when
reformatting. Of course, the wrapping is intelligent and
never breaks a word.

SET MTLENGTH=55

Tells MicroText to start a new mini-page after 55 lines.
Be careful with this one, since too large a number will
cause lines to bleed to the next page, destroying
pagination. Experiment with this figure.

You can use one or more of these variables. You can include
these commands in your AUTOEXEC.BAT file or in a batch file
which starts MicroText. Here's a sample batch file.
Naturally, you'll substitute your own data.


MT.BAT
=================================
SET MICROTXT=C:\MT
SET MTLENGTH=65
SET MTLINE=55
CD C:\MT
MICROTXT
=================================


NON-ASCII DOCUMENTS

MicroText can also crunch many non-ASCII documents. It can
handle files created by Microsoft WORD, WordStar, and many
other word processors. You may see some asterisks in the
file, but the text will be there. Naturally, without the 
program itself documents won't have normal formatting, but
you can get a look at them.

Unfortunately, MicroText can't cope with WordPerfect files, 
unless you use the <Ctrl>-<F5> (Text In/Out) command.

It can also print DBASE files, but doesn't format them
neatly. Spreadsheets are another specialty. Just tell your
spreadsheet to print to a file, instead of to the printer.
MicroText can print these files, in single-column mode, up
to 180 columns. Again, formatting won't be perfect.

Source code files from programming languages are another
good use of MicroText. By choosing one-column mode, you can
see long lines of code without breaks. Just crunch the
source code file and print.

Print all your shareware documentation with MicroText. Set
the margin on and you can put the printouts in a three-ring
binder. Just imagine how much paper and space you'll save.

Consider using MicroText to print archival copies of all
kinds of documents. If you have a collection of short
documents, you can combine them into a single file and
create a crunched printout. Use the DOS COPY command to
merge your files. Here's a good example:

COPY/A filename1 + filename2 + filename3 +.... MERGE.DOC

Then just load MERGE.DOC into MicroText and print away.

HINTS
-----
1. Since MicroText creates a scratch file, you must have
enough disk space to hold that file. Typically, it will be
somewhat larger than the original text file. Allow for it.

2. If you're designing printer drivers, test them with
short files. It saves lots of time.

3. Any time you're testing MicroText, work with short files to
avoid long print times.

4. Whenever you make changes in your MicroText environment, 
test the changes with a short text file before committing to
printing a long file.

Working With Print Enhancers:
-----------------------------
Various programs are available to enhance print quality for
most Epson-compatible 9-pin printers. MicroText interfaces
perfectly with these program. My favorite is "The Image
Printing Utilities."  LETTRIX is another good bet. Using
one of these programs, you can produce near-laser quality
printing.

USING MicroText with Laser Printers:
------------------------------------
HP LaserJet, Series II printers use some special techniques
for printing with MicroText. A soft font, TINY3.SFP is
downloaded by MicroText to your printer. It remains in the
printer until you shut the printer off. In order not to
conflict with other soft fonts, this font uses the font
number, 1333, as an identifier. You can even specify that
font number for other printing chores, if your software can
handle soft fonts.

The font, TINY3.SFP is a fixed-space font at 3.8 points,
with 21.5 characters per inch. It has only the normal
keyboard characters, ASCII 33 to ASCII 127, and takes up
very little memory. As used in MicroText, line spacing is
set at 12 lines per inch. NOTE: since TINY3 doesn't have
any graphics characters, MicroText turns graphics filtering
OFF automatically if you choose the HP printer.

You may download the font to your printer outside of
MicroText for other uses. Use the command:

     COPY /B TINY3.SFP LPT1: <Enter>

The font number, 1333, is built into the font itself, as is
the 12 lpi line spacing. To access the font in an external
document, just include a line in your document containing
the following HP printer control information:

Esc(1333X

Where you see "Esc," include the actual ASCII character 27.
In most editors, you do this by holding down the <Alt> key
while you type 27 on the NUMBER PAD on your keyboard. The
command above makes TINY3 the primary font. Send EscE to
the printer to reset it when you're done printing with
TINY3.

I just wanted to add that information for LaserJet junkies.



```
{% endraw %}

## ORDERFRM.TXT

{% raw %}
```







                             OsoSoft Order Form
                             ==================  

          [  ] Yes! Send me the Programs I've marked below.

          [  ] No order now, but send information on checked programs


             NAME: ___________________________________________________

          ADDRESS: ___________________________________________________

                   ___________________________________________________

             CITY: ____________________________STATE: ____ZIP:________

         QUAN    DESCRIPTION                   PRICE Ea.       TOTAL

         [  ]    BurnIn 4.5                     $15.00        ________

         [  ]    MicroText 4.0                  $10.00        ________

         [  ]    Fonter 4.2                     $15.00        ________

         [  ]    MultiLabel 2.0                 $15.00        --------

         [  ]    Rockford! 2.0                  $15.00        ________

         [  ]    Rockford! Professional         $30.00        ________

         [  ]    WinClip BMP                    $15.00        ________


                                TOTAL ENCLOSED:               ________

                  [  ] 5.25" Disks    [  ] 3.5" Disks

               Send payment in U.S. dollars drawn on a U.S. bank.
                             Make payable to:

                              George Campbell
                             1472 Sixth Street
                            Los Osos, CA  93402

          Trial versions of all programs available on the OsoSoft BBS
                 Call (805) 528-3753 -- 300-2400 bps -- 8/N/1

                All programs 100% guaranteed or your money back!


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3262

     Volume in drive A has no label
     Directory of A:\

    MICROTXT EXE    137758   3-05-92   1:46p
    MTMAN    COM     18611   6-28-92   8:32p
    TINY3    SFP      4490   3-05-92   1:46p
    ORDERFRM TXT      1743   6-28-92   8:38p
    PROGRAMS COM      8194   6-28-92   8:16p
    MICROTXT DOC     22297   6-28-92   8:27p
    ORDER    BAT        24   3-05-92   1:46p
    GO       BAT        38   1-31-91  12:58a
    GO       TXT       924  12-01-92   4:41a
            9 file(s)     194079 bytes
                          122880 bytes free
