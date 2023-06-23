---
layout: page
title: "PC-SIG Diskette Library (Disk #1267)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1267/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1267"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-WRITE FONT SELECTOR/PAGEMAKER IMPORT"

    FONT SELECTOR was written for PC-Write users with Hewlett Packard
    LaserJets and compatible printers.  It enables them to select, with
    print controls within their text, the fonts built into the HP, the HP
    cartridge, and hundreds of commercially available soft fonts!  It's a
    poor man's desktop publishing.
    
    This program is a boon to graphic artists whose customers request a wide
    variety of type faces and sizes for their documents.  Firms which
    generate their own documents will find their ability to create
    custom-looking documents is greatly enhanced.
    
    FONT SELECTOR works by creating special print control files for each
    font you use.  It also creates a download batch file that copies the
    soft fonts into the printer's memory.  Simple control characters within
    PC-Write are then used to tag text.
    File Descriptions:
    
    FONT     EXE  FONT SELECTOR main program.
    FONTID   DOC  FONT SELECTOR documentation.
    FONTMAN1 DOC  FONT SELECTOR documentation.
    FONTMAN2 DOC  FONT SELECTOR documentation.
    GO       BAT  Types READ.ME and README to the screen.
    ID       EXE  FONT SELECTOR ID file.
    READ     ME   Info file for FONT SELECTOR.
    
    PC-WRITE PAGEMAKER IMPORT FILTER allows PC-Write users to transfer
    PC-Write documents into a Pagemaker environment while retaining most of
    the formatting.
    File Descriptions:
    
    GO       BAT  Types READ.ME and README to the screen.
    PAGEMAN  DOC  PC-WRITE PAGEMAKER IMPORT FILTER documentation.
    PCWFLT   WIN  Data file.
    PCWRITE  FLT  Data file.
    README        Info file for PC-WRITE PAGEMAKER IMPORT FILTER.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1267.TXT

{% raw %}
```
Disk No: 1267
Program Title:  PC-Write Font Selector & PageMaker Import Filter
PC-SIG version: 1

From Bob Wallace, the author of PC-WRITE, come two useful utilities for
one of the most popular word processors around!

FONT SELECTOR opens the door for PC-WRITE users with Hewlett Packard
LaserJets and compatible printers to directly select, with print
controls within their text, the fonts built into the HP, the HP
cartridge and hundreds of commercially available soft fonts!  It's a
"poor man's" desktop publishing.

This program is a boon to graphic artists with customers who request a
wide variety of type faces and sizes for their documents.  Firms which
generate their own documents with find their ability to create
custom-looking documents is enhanced.

FONT SELECTOR works by creating special print control files for each
font you use. It also creates a download batch file that copies the
soft fonts into the printer's memory.  Simple control characters within
PC-WRITE are then used to tag text.

The PC-WRITE PAGE MAKER IMPORT FILTER allows PC-WRITE users to transfer
PC-WRITE documents into a PageMaker environment while retaining most of
the formatting.

Usage:  PC-WRITE Laser Print/PageMaker Utilities

Special Requirements:  Hard disk, a laserJet printer, and PC-WRITE.
IMPORT FILTER requires PageMaker Program.

How to Start:  Type GO (press enter).

Suggested Registration:  $20.00 for FONT SELECTOR.

File Descriptions:

FONT     EXE  FONT SELECTOR main program.
FONTID   DOC  FONT SELECTOR documentation.
FONTMAN1 DOC  FONT SELECTOR documentation.
FONTMAN2 DOC  FONT SELECTOR documentation.
GO       BAT  Types READ.ME and README to the screen.
ID       EXE  FONT SELECTOR ID file.
PAGEMAN  DOC  PC-WRITE PAGE MAKER IMPORT FILTER documentation.
PCWFLT   WIN  Data file.
PCWRITE  FLT  Data file.
READ     ME   Info file for FONT SELECTOR.
README        Info file for PC-WRITE PAGE MAKER IMPORT FILTER.

PC-SIG
1030D E. Duane Avenue
Sunnyvale, CA 94086
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## FONTID.DOC

{% raw %}
```

                  The PC-Write Font Selector ID Utility

The ID utility converts PR.DEF files created by the Font Selector utility into 
a "call by ID" format, compatible with more non-HP soft font files.  We expect 
to make this format an option in the next release of font selector itself.

To use it, type ID at the DOS prompt. You will be prompted for an input
file, then for an output file.   MAKE SURE THE FILE NAMES ARE DIFFERENT.

ID will create a new printer definition file to use with your soft fonts.
Use the SOFTDOWN batch file just as before.

Example: In the following example PR.OLD is the PR.DEF file that has been
having problems.  PR.NEW is the new version which should work correctly:

C>ID
PR.DEF  Input File: PR.OLD
PR.DEF Output File: PR.NEW

Modifying Font Letters: [fonts letters are listed here]

Conversion completed.
```
{% endraw %}

## FONTMAN1.DOC

{% raw %}
```







                                PC-Write
                          Font Selector Guide

                                   by
                            Elizabeth Houser
                                  and
                              David Locke



                             November 1987
                  PC-Write Font Selector, Version 1.0

                    Printed and published in U.S.A.
           Copyright 1987 by Quicksoft.  All rights reserved.

                               Quicksoft
                           219 First N. #224
                           Seattle, WA 98109
                             (206) 282-0452





                           Table of Contents

Installing the Font Selector                                          6
Running the Font Selector                                             7
Understanding the Font Selector's Main Screen                         9
Assigning Soft Fonts to Font Letters                                 10
Moving Fonts from One Font Line to Another                           12
Deleting and Undeleting Fonts                                        12
Moving Between Font Lines                                            13
Editing Font File Names                                              13
Changing the Name of the Print Control File                          14
Saving the Print Control File                                        15
Exiting the Font Selector                                            15
Exiting the Font Selector Without Saving Your Changes                15
Using the Files Produced by the Font Selector                        16
A Sample Session                                                     17
Appendix A: Creating a Print Control File                            20
Appendix B: The Font Selector Menu Options                           22
Appendix C: Available Soft Fonts                                     24
Appendix D: Glossary                                                 25






LaserJet is a trademark of the Hewlett-Packard Corporation.
What's a Font?

The term font can mean many different things. In the typesetting world,
a font is a complete set of letters, numbers, symbols, and punctuation
marks at a particular size in a specific typeface. (A typeface is a
particular type design, such as Times Roman or Helvetica.) In the world
of printers, the definition varies depending on the type of printer.

Non-laser printers (dot matrix, daisy wheel, and ink-jet) usually
support only one or two typefaces with enhancements. PC-Write calls
each enhancement a font. For example, a printer may have one typeface
with enhancements such as compressed, double wide, draft quality 10
characters per inch (cpi), draft quality 12 cpi, letter quality 10 cpi,
letter quality 12 cpi, boldface, italics, superscript, subscript,
underlining, and proportional spacing. PC-Write treats each of these as
a separate font.

In the laser printer world, there are two basic kinds of fonts: bit-
mapped and outline fonts. Some laser printers, like the Hewlett-Packard
LaserJet, support bit-mapped fonts; some support outline fonts. In a
bit-mapped font, each character is made up of a number of dots; to the
computer or printer, each of these dots is represented by a bit. In an
outline font, each character is stored as an outline or a geometric
description. This means that you can produce different sizes and styles
of characters from the same outline. Outline fonts must be converted to
bit-mapped fonts at some point.

Laser printers that support bit-mapped fonts, such as the LaserJet,
take the definition of a font one step further. To this kind of laser
printer, a font encompasses:
o  typeface -- such as Times Roman or Helvetica
o  point size -- maximum height of a character
o  spacing -- fixed or proportional
o  pitch -- number of characters per inch, if fixed spacing
o  width table -- width of each character, if proportional spacing
o  stroke weight -- regular, medium, or bold
o  style -- upright or italics
o  symbol set -- characters (symbols) available
o  orientation -- portrait or landscape

An example of a font for a laser printer is: Letter Gothic, bold,
upright, 12 point, fixed spacing of 12 characters per inch, Roman-8
symbol set, portrait orientation.

If you need some further explanation of some of the terms used in this
Guide, there is a glossary of terms in Appendix D.


How Does PC-Write Treat Fonts?

When you edit a file with PC-Write, you use font letters to select the
fonts. The available font letters are B, C, D, E, F, H, I, J, L, M, O,
P, Q, R, S, U, V, W, X, Y, and Z. You select them by pressing the Alt
key and one of the font letters, or by using the <Alt-G>.R command with
a letter. See the PC-Write User's Guide for more information on these
methods.


2                                          PC-WRITE FONT SELECTOR GUIDE
PC-Write defines the meaning of each font letter for a particular
printer through a print control file. This file is created by the
WORKDISK program when you install PC-Write. WORKDISK actually runs a
program called MENULAZ to create the print control file, which it calls
by default PR.DEF. You can run MENULAZ to create a print control file;
the instructions are included in Appendix A of this Guide.

The print control file contains commands called font control lines.
Each font control line is associated with a font letter and contains
codes to activate that font on the printer. If one or more of the fonts
have proportional spacing, the print control file contains width tables
for those fonts. A width table tells PC-Write the width of each
character in the proportional font so it can justify, center, and
flush-right text.

When you print a file, the PC-Write print program processes it,
interpreting the font and dot commands and sending the output to the
printer. If the file contains a font command, the print program
retrieves the codes for that font from the appropriate font control
line in the print control file. It places the codes in the text file as
it processes it. PC-Write then sends the processed file to the printer.

Here's a diagram that illustrates what happens when you print with
PC-Write:

                       retrieving the
                        codes for the    placing         which is
         looks at        fonts from      them into       sent to
+---------+    +----------+    +---------+    +-----------+    +--------+
| the     |    | the      |    | the     |    | the       |    |        |
| PC-Write|    | PC-Write |    | print   |    | processed |    | the    |
| Print   |--->| text file|--->| control |--->| text file |--->| printer|
| Program |    | with font|    | file    |    | with      |    |        |
|         |    | commands |    | (PR.DEF)|    | font codes|    |        |
+---------+    +----------+    +---------+    +-----------+    +--------+


What is the PC-Write Font Selector?

The font selector is a program that lets you customize a PC-Write print
control file for Hewlett-Packard LaserJet printers that use
downloadable soft fonts. It can also be used for other laser printers
that emulate the LaserJet. These printers support three different types
of fonts:
o  Resident fonts that come already loaded in the printer's memory.
o  Cartridge fonts that come from cartridges inserted into the printer.
o  Soft fonts. These fonts are copied from a diskette into the
   printer's memory. This is called downloading. Soft fonts are
   available on diskette from Hewlett-Packard and other vendors. See
   Appendix C for more information about available soft fonts. Each
   soft font diskette contains a number of font files; each font file
   contains information about one specific soft font and the codes to
   be downloaded to the printer for that font.

You can use the MENULAZ program to create print control files for the
resident fonts and for all of the Hewlett-Packard cartridges. MENULAZ
can also create print control files for the most commonly used Hewlett-

PC-WRITE FONT SELECTOR GUIDE                                          3
Packard Times Roman and Helvetica soft fonts. If you choose one of
these print control files, you can use the HPDOWN.BAT program that
comes on the PC-Write utility disk to download the soft fonts to the
printer, or you can modify it with the font selector.

The font selector program can create print control files for any other
soft fonts you want to use. Each time you create a print control file
with the font selector, it also creates a download batch file that
copies (downloads) the soft fonts into the printer's memory. You run
this batch file each time you turn on your printer.


Why Use the Font Selector?

Okay, when would you use the font selector? Let's look at a short
example of when it would be appropriate to use this program.

Jean owns a company that creates documentation for small businesses.
She has a LaserJet Plus, several cartridges, and some soft fonts,
including Times Roman. On her latest project, the client asks her to
use Times Roman 10 point font for the body text, ITC Garamond 18 and 24
point for headings, and Broadway 30 point for the front cover.

She purchases the ITC Garamond and Broadway soft fonts, then uses the
PC-Write font selector to create a print control file specifically for
her current task. She assigns Times Roman 10 point to the F font,
Garamond 18 point to the P font, Garamond 24 point to the Q font, and
Broadway 30 point to the B font. The font selector creates a download
file for these fonts, so she downloads the fonts to the printer, and
she's ready to print the document.


How Does the Font Selector Work?

The font selector program has a built-in default print control file for
the basic Hewlett-Packard LaserJet with no cartridges. You can start
with this file to build your customized print control file, or you can
start with an existing print control file. If you need help creating a
print control file, read Appendix A in this Guide.

Whatever print control file you use as the basis of your customization,
many font letters will already be in use. When you run the font
selector, the screen shows you which font letters are still available.
You can assign fonts to available font letters or to ones that already
have fonts associated with them. You assign a soft font to a font
letter by typing the name of the appropriate font file on a font line.
If the font line already has a font on it, that font will be replaced.
You can also delete existing fonts and move fonts from one font letter
to another.

The program reads the font file, retrieves a description of the font,
and places it on the font line. When you exit the program, the codes
and width tables (if any) are written to the appropriate font control
lines in the print control file. In addition, the program creates a
batch file to load the soft fonts into the printer's memory.



4                                          PC-WRITE FONT SELECTOR GUIDE
Here's a diagram that shows how the various files and programs involved
in this process interact:

font files contain soft
fonts and descriptions
 +------+                            download program loads soft fonts
 | Font |               +----------+ into printer
 | Files|-------------->| Download |--------------------------------+
 +--|---+            +->| Program  | program reads                  |
+---|------+         |  +----------+ control file                   |
|          |         |                    +-----------+ text file   |
| Font     | creates |                    |  Text     | processed   |
| Selector |-------->|                    |  File     | by PC-Write |
| Program  |         |                    +-----+-----+             |
|          |         |                          v                   v
+----------+         |  +----------+      +-----+-----+      +---------+
 font selector       |  |  Print   |      |  PC-Write |      |         |
 reads               +->|  Control |----->|  Print    |----->| Printer |
 descriptions           |  File    |      |  Program  |      |         |
 from font files        +----------+      +-----------+      +---------+
                                print program reads
                                print control file




































PC-WRITE FONT SELECTOR GUIDE                                          5
Installing the Font Selector

The font selector works best on a computer with a hard disk. If you
don't have a hard disk and you want to use the font selector, you will
have to do quite a bit of disk switching both when you create the print
control file and when you download the soft fonts to the printer. Here
are instructions for installing the font selector on a floppy disk
system and on a hard disk system:

To install the font selector on a floppy disk system:

1. Place the font selector diskette in drive A. Place a blank,
   formatted diskette in drive B. This will be your font diskette.

2. At the A> prompt, type the following line then press the Enter key:
      COPY FONT.EXE B:

   The font selector is copied onto the font diskette.

3. Copy the files containing the soft fonts you want to use onto the
   font diskette. If they don't all fit on on the font diskette, put
   the remaining soft fonts onto a second diskette.

4. Place the font diskette in the A drive and follow the directions for
   running the font selector. If you have a second diskette with soft
   fonts, put it in drive B.

   The font selector creates a new print control file and a download
   batch file for loading the chosen soft fonts into your printer's
   memory. When the program is done, copy the customized print control
   file onto your PC-Write working diskette. Then, each time you turn
   on your printer, place the font diskette in drive A (and the second
   soft font diskette, if any, in drive B) and run the download batch
   program SOFTDOWN to load the soft fonts into the printer's memory.


To install the font selector on a hard disk system:

1. Place the font selector diskette in drive A. At the A> prompt, type
   the following line then press the Enter key:
      COPY FONT.EXE C:\subdir

   where "subdir" is the name of your PC-Write working directory. The
   font selector is copied into your PC-Write working directory.

2. Copy the files containing the soft fonts you want to use into your
   PC-Write working directory.

3. Run the font selector.

   The font selector creates a new print control file and a download
   batch file for loading the chosen soft fonts into your printer's
   memory. Now, each time you turn on your printer, run the download
   batch program SOFTDOWN to load the soft fonts into the printer's
   memory.



6                                          PC-WRITE FONT SELECTOR GUIDE
Running the Font Selector

The font selector lets you easily customize a print control file for
soft fonts. It also creates a backup of the original print control
file. Finally, it creates a download batch file named SOFTDOWN.BAT that
you can run each time you turn on your printer to load the soft fonts.

To run the font selector:

1. If you are on a floppy disk system, place your font diskette in
   drive A (and your second soft font diskette, if any, in drive B). If
   you are on a hard disk system, change to your PC-Write directory. At
   the DOS prompt, type the following, then press the Enter key:
       FONT

   The first screen of the font selector program appears. This screen
   tells you about shareware and displays this prompt on the top line:
      File to load or create (Esc:cancel):   "<Default>"

2. The font selector comes with a built-in default print control file.
   This file accesses the LaserJet resident fonts. If you want to use
   this default, press the Enter key. If you want to customize your
   current PR.DEF file or some other print control file, type the name
   of the file and press the Enter key.

3. If you are customizing an existing print control file, the top line
   says:
       Press Esc for no backup, F9 to make backup copy "filename.#ex"

   where "filename.#ex" is the name of the backup file. The backup file
   name is the same as the original file name, but it has a different
   extension. The extension is an "#" plus the first two letters of the
   original extension. If the original file name has no extension, the
   backup file name extension is just ".#".

   Press the Esc key if you don't want to make a backup of the original
   print control file. Press F9 to make a backup copy.

   The main screen now appears. The cursor is located on the first
   available font line, and the name of the print control file appears
   in the PRDEF FILE: area at the bottom of the screen.

   If you are customizing the program's built-in print control file,
   the main screen comes up and the top two lines say:
      Esc: Exit Program.
      Enter a new output print control file.

   Type the name you want to give the file when you save it and press
   the Enter key, or just press the Enter key to use the name PR.DEF.
   If the file already exists, the top line says:
      Press Esc for no backup, F9 to make backup copy "filename.#ex"

   Press the Esc key if you don't want to back up the original file or
   F9 to make a backup copy.

   Now you are ready to assign a soft font to a font letter, move a
   font to a different letter, delete a font from a font letter, or

PC-WRITE FONT SELECTOR GUIDE                                          7
   select an option from the font selector menu. In the rest of this
   Guide, we'll examine these options. You will also learn to:
   o  understand the font selector's screen
   o  move around the font selector's screen
   o  edit the font selector's screen
   o  use the files produced by the font selector

There are two important features of the font selector to keep in mind
as you use it. One is that you can exit from the program at any time
without saving the changes you have made by pressing the F9 key then
exiting with the F2 key. This is covered in more detail later in this
Guide. The other is that you can get Help at any time while running the
font selector.

To get Help while running the font selector:

o  Press the F1 key. Press the Esc key to return to the program.

REMARKS
Instead of waiting for the font selector to prompt you for a print
control file name, you can type a file name when you enter the program.
For instance, if you type:
   FONT PR.DEF

the font selector knows you want to customize PR.DEF, so it doesn't
prompt you for that information.

The default download batch filename is SOFTDOWN.BAT. If you want to
change it, you can name the download batch file when you enter the
command to run the program. If you specify the download batch file
name, you must give the print control file name first. For example, if
you type:
   FONT FONT.DEF PRDOWN.BAT

the font selector uses FONT.DEF as the print control file name and
PRDOWN.BAT as the download batch file name. Note: The name you give the
download batch file must include .BAT as the extension.

The default backup file name is the name of the original file plus an
extension composed of a "#" and the first two letters of the original
extension, or just "#" if the original file name has no extension. You
can change this by specifying a new name when you enter the FONT
command. If you change the name of the backup file, you must also
specify the names of the print control and download batch files first.
For example, if you type:
   FONT NEW.DEF DOWN1.BAT PR.BAK

the font selector uses NEW.DEF as the print control file name,
DOWN1.BAT as the download batch file name, and PR.BAK as the backup
file name.








8                                          PC-WRITE FONT SELECTOR GUIDE
Understanding the Font Selector's Main Screen

The font selector's main screen is composed of the following lines:

FONT SELECTOR MENU. This is the first line of the screen. The options
on this menu control many important functions of the program. They are
described in the body of this Guide, and there is also a summary of the
options in Appendix B.

PROGRAM MESSAGE LINE. This is the second line of the screen. It tells
you about the current operation of the font selector.

FONT LINES. These lines define the fonts associated with the PC-Write
font letters. Each line contains a font letter, an area for the name of
a file that contains a soft font, and an area for the description of
the current font.

PRINT CONTROL FILE LINE. This is the last line on the screen. It
contains an area for the name of the print control file you are saving
the changes to.

Here's an example of the font selector's main screen:

+----------------------------------------------------------------------+
| F1:HelpF2:ExitF3:SaveF4:DeleteF5:UndelF6:MoveF7:PRDefF8:DirF9:Unsave |
| Enter a file name or select a function key.                          |
| FONT  INPUT FONT FILE     DESCRIPTION                                |
|  B                        {Available}                                |
|  C                        {Available}                                |
|  D                        {Available}                                |
|  E   TR060BPN.R8P         Times  6.0 point, prop, bold. portrait.    |
|  F                        10 CPI 12P COURIER                         |
|  H                        Superscript                                |
|  I                        {Available}                                |
|  J                        {Available}                                |
|  L                        Subscript                                  |
|  M   TR060IPN.R8P         Times  6.0 point, prop, ital, portrait.    |
|  O                        Overstrike                                 |
|  P                        {Available}                                |
|  Q   HV240BPN.R8P         Helvetica 24.0 point, prop, bold, portrait.|
|  R   TR080IPN.R8P         Times  8.0 point, prop, ital, portrait.    |
|  S                        Second Strike                              |
|  U                        Underline                                  |
|  V                        Lineprinter                                |
|  W                        Double Underline                           |
|  X   HV080IPN.R8P         Helvetica  8.0 point, prop, ital, portrait.|
|  Y                        Portrait                                   |
|  Z                        Landscape                                  |
| PRDEF FILE: PR.DEF                                                   |
+----------------------------------------------------------------------+








PC-WRITE FONT SELECTOR GUIDE                                          9
 Assigning Soft Fonts to Font Letters

The main purpose of the font selector is to let you assign soft fonts
(downloadable fonts) to PC-Write font letters. You do this by typing
the names of soft font files onto font lines on the program's main
screen.

The main screen of the font selector contains a line for each PC-Write
font letter. Each of these lines has three parts:
1.  The font letter.
2.  A place for the name of the file that contains the soft font.
3.  A description of the font.

When you run the font selector, the font lines on the screen contain
information for the fonts that are currently in the print control file
you are customizing. These may be cartridge, resident, or soft fonts.
Cartridge and resident font lines will not, of course, contain font
file names, but they will contain font descriptions.

Font letters that do not have fonts associated with them say
{Available} in the description area. You can assign soft fonts to these
lines, move existing fonts to other font letters, or delete fonts from
font letters.

For example, here's the screen for the built-in default print control
file:
+----------------------------------------------------------------------+
|F1:HelpF2:ExitF3:SaveF4:DeleteF5:UndelF6:MoveF7:PRDefF8:DirF9:Unsave  |
|Enter a file name or select a function key.                           |
|FONT  INPUT FONT FILE      DESCRIPTION                                |
| B                         {Available}                                |
| C                         {Available}                                |
| D                         {Available}                                |
| E                         12 CPI 12P Courier                         |
| F                         10 CPI 12P Courier                         |
| H                         Superscript                                |
| I                         {Available}                                |
| J                         {Available}                                |
| L                         Subscript                                  |
| M                         {Available}                                |
| O                         Overstrike                                 |
| P                         {Available}                                |
| Q                         {Available}                                |
| R                         {Available}                                |
| S                         Second Strike                              |
| U                         Underline                                  |
| V                         Lineprinter                                |
| W                         Double Underline                           |
| X                         {Available}                                |
| Y                         Portrait                                   |
| Z                         Landscape                                  |
|PRDEF FILE: PR.DEF                                                    |
+----------------------------------------------------------------------+

Notice that the E, F, H, L, O, S, U, V, W, Y, and Z fonts are resident
fonts. The B, C, D, I, J, M, P, Q, R, and X fonts are available for
soft fonts, but you can also replace the resident fonts (or cartridge

10                                         PC-WRITE FONT SELECTOR GUIDE
fonts if there were any) with soft fonts or move them to different font
letters. To assign a soft font to a font letter:

1. Move the cursor to the desired font line, and type the name of the
   file that contains the soft font. You can use the Up and Down Arrow
   keys to move the cursor.

   If the font file is on a floppy diskette, include the disk drive
   specification. If it's on a hard disk, include the disk drive
   specification and the subdirectory name. For example, if you type
   B:HV080BPN.R8P, the font selector looks on the B drive for the
   HV080BPN.R8P font file. If you type C:\FONTS\HV080BPN.R8P, the font
   selector looks in the FONTS subdirectory of drive C.

2. Press the Enter key, the Tab key, or the Up or Down Arrow keys.

   The program then searches for the font file. If it finds the file
   and the file is valid, it retrieves the description of the font from
   the file and displays it in the description area of the font line.
   The program also stores the codes for the soft font and the width
   table information, if any, so that it can copy this information to
   the print control file when you exit the program. While this is
   happening, the message "Loading Font" and a count of the number of
   characters loaded appear on the message line.

   If the program doesn't find the font file, it displays the message
   "File not found. Please try again." If the file exists but is not a
   valid font file, the message line reads "Invalid font file." In
   either case, the cursor does not move off the line.

   You can type a file name on a line that already contains a font or
   on one that says {Available}. If you do it on a line that already
   contains a font, the original font will be replaced. You can also
   move fonts from one font line to another and delete fonts. When you
   type a file name on a font line, you can use any of the font
   selector editing keys. These are discussed in Editing Font File
   Names.

If you can't remember the name of a font file, you can choose it from a
directory listing. 

To choose a font file from a directory:

1. With the cursor on a font line, press the F8 key. The screen blanks
   then says:
      Search name for directory (Esc:cancel): "drive\subdir\*.*"

   where "drive\subdir\" is the current disk drive specification and
   subdirectory (if any). Now you can press the Enter key to see a
   listing of the files on the current disk or subdirectory, or type
   another disk drive specification and subdirectory, if any, then
   press the Enter key. If you type a subdirectory name, be sure to end
   it with a backslash. For instance, if you want to see the files on
   the disk in the B drive, type B:. To see the files in the FONT2
   directory of the C drive, type C:\FONT2\.



PC-WRITE FONT SELECTOR GUIDE                                         11
```
{% endraw %}

## FONTMAN2.DOC

{% raw %}
```
2. When you have the directory on the screen, you can move the cursor
   around it by using:
   o  the Arrow keys to move the cursor from file to file
   o  the End key to move to the last file on the screen
   o  the Home key to move to the first file on the screen

   If there are more files than can fit on one screen, the message
   "<PgDn: more>" appears at the bottom of the screen. Press the PgDn
   key to see the next screen, and the PgUp key to move back one
   screen. As the cursor moves, the current file is highlighted.

3. Press the Enter key to select the highlighted file. You are returned
   to the font selector screen, and the selected file name is displayed
   on the current font line. You can also press the Esc key to return
   to the program without selecting a file.

REMARKS
It's important to note that the memory of a laser printer can only hold
a finite number of fonts. This varies depending on the fonts you choose
and the amount of memory the printer has. This initial version of the
font selector will not warn you if you are over the memory limit. If
this happens, the printer may give you a message or it may just not
print some of the fonts.



Moving Fonts From One Font Line to Another

You can move fonts (including cartridge and resident fonts) from one
line to another, customizing the file exactly the way you want.

To move a font to another font line:

1. Move the cursor to the font you want to move.

2. Press the F6 key. The line is highlighted.

3. Move the cursor to the line where you want the font. This can be an
   available line or a line with a font already on it.

4. Press F6 again. The font moves to the new line. If there was already
   a font on the new line, the two fonts are swapped; that is, the
   existing font on the new line is moved to the old line.



Deleting and Undeleting Fonts

You can delete a font from a font line, making that line available for
a new font.

To delete a font:

1. Move the cursor to the font you want to delete.

2. Press the F4 key. The font is deleted and the line says {Available}.


12                                         PC-WRITE FONT SELECTOR GUIDE
If you decide that you made a mistake and didn't really want to delete
a font, you can undelete it at the original location or at a new line.

To undelete a font:

1. Move the cursor to the line where you want to undelete the font.

2. Press the F5 key. This undeletes the last deleted font. This is
   another way of moving a font.


Moving Between Font Lines

When you are customizing a print control file, you will need to move
back and forth between the font lines. There are five keys available
for moving between font lines:

Pg Up         Moves the cursor to the first font line (B).

Pg Dn         Moves the cursor to the last font line (Z).

Tab           Moves the cursor to the next {Available} font line.

Up Arrow      Moves the cursor to the next higher font line. For
              example, if the cursor is on the D line when you press
              the Up Arrow, it moves to the C line.

Down Arrow    Moves the cursor to the next lower font line.

When you type a file name on a font line then move off the line with
one of the above keys, the font selector searches for the file just as
if you had pressed the Enter key. If the file doesn't exist or is not a
valid font file, the cursor doesn't move. For example, if you type
GA100BPN.USP at the B font line, then press the Down Arrow key to move
to the C font line, the font selector first tries to read the
GA100BPN.USP font file. If it succeeds, it moves the cursor to the C
line; if not, the cursor stays at the B line and the program displays
an error message.



Editing Font File Names

As you type font file names, you can edit your entries. Here are the
keys available for editing:

Home           Moves the cursor to the beginning of a file name.

End            Moves the cursor to the end of a file name.

Right Arrow    Moves the cursor one character to the right.

Left Arrow     Moves the cursor one character to the left.

Backspace      Moves the cursor one character to the left and replaces
               it with a space.


PC-WRITE FONT SELECTOR GUIDE                                         13
Del            Deletes the character at the cursor and moves text over
               to fill the gap.

Ins            Opens up a space for text at the cursor by pushing text
               to the right.

Esc            Erases the file name and restores the old file name, if
               any.

Enter          Indicates you are done typing a file name and starts
               searching for the file.

Ctl Enter      Deletes from the cursor to the end of the file name.

Note: The font selector does not support the Pushright typing mode; it
is always in Overwrite.



Changing the Name of the Print Control File

The font selector produces a print control file with the name you
specified when you entered the program (PR.DEF by default) unless you
tell it differently.

To change the name of the print control file:

1. Press the F7 key. The cursor moves to the PRDEF FILE: area on the
   bottom line. You can press the Esc key if you don't want to change
   the file name.

2. Type the new file name and press the Enter key. If the print control
   file already exists, the top line says:
      Press Esc for no backup, F9 to make backup copy "filename.#ex"

   where "filename.#ex" is the name of the backup file. This name
   consists of the original file name plus an extension consisting of
   "#" and the first two letters of the original file name's extension.
   If the original file name has no extension, the backup file has "#"
   for an extension.

   Press the Esc key if you don't want to make a backup of the original
   print control file. Press F9 to make a backup copy.

Now when you exit or save the print control file, the changes are
written to the new file and the original file is not changed.

For example, if you want to change the name of the print control file
from PR.DEF to TR1FONTS, press the F7 key. The cursor moves to the
PRDEF FILE: area on the bottom line of the screen. Type TR1FONTS and
press the Enter key. If this file already exists, the top line says:
   Press Esc for no backup, F9 to make backup copy "TR1FONTS.#"






14                                         PC-WRITE FONT SELECTOR GUIDE
Saving the Print Control File

At any time, you can save the print control file you are working on.
When you do this, the font selector creates the print control and
download batch files and leaves you in the program.

To save the print control file:

o  Press the F3 key. This creates the print control and download batch
   files.



Exiting the Font Selector

You can exit the font selector at any time. If you have made any
changes on the screen, the font selector creates a print control file
that incorporates the changes. It also creates a download batch file
that you can use to download the selected soft fonts to the printer.

To exit the font selector:

o  Press the F2 key. This creates the print control and download batch
   files, then returns you to the DOS prompt.



Exiting the Font Selector Without Saving Your Changes

You can exit the font selector without saving the changes you have
made. This is an unsave.

To exit the font selector without saving your changes:

1. Press the F9 key to unsave. The menu on the top line says [no-save].

2. Press the F2 key to exit. The changes to the print control file are
   not saved, and the download batch file is not created.




















PC-WRITE FONT SELECTOR GUIDE                                         15
Using the Files Produced by the Font Selector

When you run the font selector, you create two output files:
o  a print control file; the default is PR.DEF.
o  a font download batch file; the default is SOFTDOWN.BAT.

The print control file contains width tables, codes (escape sequences),
and comments for soft, resident, and cartridge fonts. This file should
be on your working diskette or directory. If it's not, copy it there
now. The PC-Write print program uses this file when you print.

The font download batch file contains everything needed to
automatically download the specified soft fonts to the laser printer.

To download the soft fonts to the printer:

1. If you have a floppy disk system, place the font diskette in the A
   drive (and your second soft font diskette, if any, in the B drive).
   If you have a hard disk system, change to the PC-Write working
   directory. The soft font files and download batch file should
   already be on the font diskette or working directory.

2. At the DOS prompt, type the name of the download batch file, for
   example:
       SOFTDOWN

   and press the Enter key. The download batch program SOFTDOWN is run.
   After a short time, the printer delivers a short message and sample
   output for every font. Note: If you rename this file, it must have a
   .BAT extension or it won't work.

But what do you do if you need access to more than one set of soft
fonts? Let's say you want a set for marketing materials and a set for
normal documentation. If you're on a hard disk, there are two simple
solutions.

The first is to have two separate subdirectories, each with its own
print control file, its own SOFTDOWN.BAT, and its own font files. To do
this, first create two subdirectories. Then run the font selector in
your PC-Write working directory, creating the print control and
SOFTDOWN.BAT files for one set of soft fonts. Then copy these and the
appropriate font files into one subdirectory. Now repeat the process
for the other set of soft fonts and copy these files into the other
subdirectory. You can now edit and print text files in either
subdirectory.

The other solution is to keep all the font files in one subdirectory
but run the font selector twice, each time naming a new print control
file and a new download batch file. To learn how to give another name
to a download batch file, read the Remarks on page 8 of this Guide.
Alternatively, you can run the font selector once, giving a name to the
print control file and using the default download batch file name
SOFTDOWN.BAT. Then rename the download batch file with the DOS RENAME
command and run the font selector again, giving a new name to the print
control file and leaving the default name for the download batch file.



16                                         PC-WRITE FONT SELECTOR GUIDE
A Sample Session

Here's a sample session that demonstrates how to use the font selector.
Suppose you want to create a print control file for the Hewlett-Packard
LaserJet that allows you to use the basic default resident fonts and
four larger Helvetica fonts: a 12 point regular font assigned to the C
font letter, a 14 point regular font for the D font letter, an 18 point
bold font for the P font letter, and a 24 point bold font for the S
font letter. The font selector program has a default print control
file. Use this to build on.

Let's say you have a hard disk and you've already copied the font
selector program (FONT.EXE) from the font selector diskette into your
working directory along with the appropriate soft font files. Follow
these instructions:

1. Change to your working directory. At the DOS prompt, type the
   following line then press the Enter key:
      FONT

   The font selector's initial screen is displayed and the top line
   says:
      File to load or create (Esc:cancel):  "<Default>"

2. Press the Enter key. The main screen appears with the cursor located
   on the PRDEF FILE: area of the bottom line. It looks like this:

+----------------------------------------------------------------------+
|Esc:  Exit Program.                                                   |
|Enter a new output print control file.                                |
|FONT  INPUT FONT FILE      DESCRIPTION                                |
| B                         {Available}                                |
| C                         {Available}                                |
| D                         {Available}                                |
| E                         12 CPI 12P Courier                         |
| F                         10 CPI 12P Courier                         |
| H                         Superscript                                |
| I                         {Available}                                |
| J                         {Available}                                |
| L                         Subscript                                  |
| M                         {Available}                                |
| O                         Overstrike                                 |
| P                         {Available}                                |
| Q                         {Available}                                |
| R                         {Available}                                |
| S                         Second Strike                              |
| U                         Underline                                  |
| V                         Lineprinter                                |
| W                         Double Underline                           |
| X                         {Available}                                |
| Y                         Portrait                                   |
| Z                         Landscape                                  |
|PRDEF FILE: "PR.DEF"                                                  |
+----------------------------------------------------------------------+

3. Type NEW.DEF and press the Enter key. The cursor jumps to the first
   available font line, which is B.

PC-WRITE FONT SELECTOR GUIDE                                         17
4. Press the Down Arrow key to move the cursor to the C line and type
   the name of the 12 point Helvetica font file as follows, then press
   the Enter key:
       HV120RPN.R8P

   The program looks for the font file and copies the description onto
   the font line. It also stores the codes and width tables for the
   font in memory so it can copy them to the print control file when
   you exit the program. While this is happening, the message "Loading
   Font" appears on the message line. When the program finishes, the
   font line is highlighted again.

5. Press the Tab key to move to the D font line. Type the name of the
   14 point font file as follows and press the Enter key:
      HV140RPN.R8P

6. Press the Tab key 4 times to move to the P font line. Type the name
   of the 18 point font file as follows and press the Enter key:
      HV180BPN.R8P

7. Press the Down Arrow key 3 times to get to the S line, which already
   has a font on it. Let's move this font to the R line.

8. Press the F6 key. The S line is highlighted. Press the Up Arrow key
   to move the cursor to the R line. Press the F6 key again. The font
   that was on the S line is now on the R line.

9. Press the Tab key to move the cursor back to the S line and type the
   name of the 24 point font file as follows. Press the Enter key.
      HV240BPN.R8P

   The screen now looks like this:


























18                                         PC-WRITE FONT SELECTOR GUIDE
+----------------------------------------------------------------------+
|F1:HelpF2:ExitF3:SaveF4:DeleteF5:UndelF6:MoveF7:PRDefF8:Di F9:Unsave  |
|Enter a file name or select a function key.                           |
|FONT  INPUT FONT FILE      DESCRIPTION                                |
| B                         {Available}                                |
| C    HV120RPN.R8P         Helvetica 12.0 point, prop, portrait.      |
| D    HV140RPN.R8P         Helvetica 14.0 point, prop, portrait.      |
| E                         12 CPI 12P Courier                         |
| F                         10 CPI 12P Courier                         |
| H                         Superscript                                |
| I                         {Available}                                |
| J                         {Available}                                |
| L                         Subscript                                  |
| M                         {Available}                                |
| O                         Overstrike                                 |
| P    HV180RPN.R8P         Helvetica 18.0 point, prop, bold, portrait.|
| Q                         {Available}                                |
| R                         Second Strike                              |
| S    HV240BPN.R8P         Helvetica 24.0 point, prop, bold, portrait.|
| U                         Underline                                  |
| V                         Lineprinter                                |
| W                         Double Underline                           |
| X                         {Available}                                |
| Y                         Portrait                                   |
| Z                         Landscape                                  |
|PRDEF FILE: NEW.DEF                                                   |
+----------------------------------------------------------------------+

10. Press the F2 key to exit the program. The program creates the print
   control file NEW.DEF file and the download batch file SOFTDOWN.BAT,
   then clears the screen and returns you to the DOS prompt.

11. Turn on your LaserJet printer and, at the DOS prompt, type the
   following line then press the Enter key:
      SOFTDOWN

   This runs the download batch file, which loads the font files into
   the printer's memory. When the download process is complete, the
   printer sends a message telling you that the download process was
   successful and prints a sample of each of the new fonts.

Now you can create PC-Write documents using the new font letters and
print those with the PC-Write print program. The print control file can
be used repeatedly. You need only run the font download batch file
whenever you start the printer.













PC-WRITE FONT SELECTOR GUIDE                                         19
Appendix A: Creating a Print Control File

You can customize the font selector's default print control file, or
you can change an existing file. If you don't already have a print
control file, you can create one with the MENULAZ program.

To create a print control file:

1. Copy the file MENULAZ.EXE from your PC-Write utility diskette onto
   your working diskette or directory.

2. Change to your PC-Write diskette or directory and type:
      MENULAZ  <Enter>

   The PC-Write Printer Picker Menu for laser printers appears on the
   screen.

3. Type the letter that corresponds to the type of laser printer you
   have. Another menu will appear on the bottom half of the screen.
   This menu lists the supported printer models. Type the number or
   letter next to your printer model.

For example, let's say you have a Hewlett-Packard LaserJet Plus and you
want to create a print control file for the B cartridge. At the DOS
prompt, type:
   MENULAZ

The Printer Picker Menu appears on the screen:
+----------------------------------------------------------------------+
| 1. Adobe PostScript        D.                      P.                |
| 2. Canon                   E.                      Q.                |
| 3. Corona                  F.                      R.                |
| 4. Digital (DEC)           G.                      S.                |
| 5. Hewlett-Packard         H.                      T.                |
| 6. QMS                     I.                      U.                |
| 7. Ricoh                   J.                      V.                |
| 8.                         K.                      W.                |
| 9.                         L.                      X.                |
| A.                         M.                      Y.                |
| B.                         N.                                        |
| C.                         O.                      Z.                |
+----------------------------------------------------------------------+
















20                                         PC-WRITE FONT SELECTOR GUIDE
Type "5" to select Hewlett-Packard. The Hewlett-Packard menu appears on
the bottom half of the screen:
+--------------------------------------------------------------------------+
|Printer Picker.  Press letter or digit for your printer (Esc: pick group):|
|1. LaserJet/LaserJet    D. LJ/LJ+, M cartridge  P. LJ+, soft R8 old HELVAB|
|2. LJ/LJ+, A cartridge  E. LJ/LJ+, N cartridge  Q. LJ+, soft US new HELVAC|
|3. LJ/LJ+, B cartridge  F. LJ/LJ+, P cartridge  R. LJ+, soft R8 new HELVAD|
|4. LJ/LJ+, C cartridge  G. LJ/LJ+, Q cartridge  S. LJ+, soft US old MANUAA|
|5. LJ/LJ+, D cartridge  H. LJ/LJ+, R cartridge  T. LJ+, soft R8 old MANUAB|
|6. LJ/LJ+, E cartridge  I. LJ/LJ+, T cartridge  U. LJ+, soft US new MANUAC|
|7. LJ/LJ+, F cartridge  J. LJ/LJ+, U cartridge  V. LJ+, soft R8 new MANUAD|
|8. LJ/LJ+, G cartridge  K. LJ/LJ+, V cartridge  W. LJ+, soft US old TMSRAA|
|9. LJ/LJ+, H cartridge  L. LJ/LJ+, W cartridge  X. LJ+, soft R8 old TMSRAB|
|A. LJ/LJ+, J cartridge  M. LJ/LJ+, X cartridge  Y. LJ+, soft US new TMSRAC|
|B. LJ/LJ+, K cartridge  N. LJ/LJ+, Y cartridge  Z. LJ+, soft R8 new TMSRAD|
|C. LJ/LJ+, L cartridge  O. LJ+, soft US old HELVAA                        |
+--------------------------------------------------------------------------+

Type "3" to select the B cartridge. This creates the file PR.DEF that
is the basis for your customization.






































PC-WRITE FONT SELECTOR GUIDE                                         21
Appendix B: The Font Selector Menu Options

The top line of the main screen contains a menu of the font selector's
options. Let's take a look at these.


F1: Help           To get help while using the font selector, press the
                   F1 key. A Help screen appears describing the menu
                   options.

F2: Exit           You can press the F2 key at any time to exit the
                   font selector program. If you have made any changes,
                   the font selector creates a new print control file
                   that incorporates the changes. It also creates a
                   download batch file that you can use to download the
                   selected soft fonts to the printer.

F3: Save           You can press the F3 key to create a new print
                   control file and a download batch file without
                   exiting the font selector.

F4: Delete         Pressing the F4 key deletes the current font. This
                   makes the font line available.

F5: Undelete       You can press F5 to undelete a font after you have
                   deleted it. You can undelete it at the original
                   location or at a new location, in which case the
                   font is effectively moved to a new letter.

F6: Move           You can use the F6 key to move a font from one font
                   letter to another. First, move the cursor to the
                   font letter you want moved and press the F6 key. The
                   line is highlighted. Then, move the cursor to the
                   line where you want that font and press F6 again.
                   The font is moved. If you move a font to an occupied
                   font letter, the fonts are swapped.

F7: Prdef          The font selector changes the original print control
                   file unless you tell it to place the changes in a
                   new file. In this case, it leaves the original file
                   alone. To place the changes in a different file,
                   press the F7 key when you are finished customizing.
                   The cursor moves to the PRDEF FILE field on the
                   bottom line of the screen so you can change the file
                   name. Now when you exit or save the print control
                   file, the changes are saved to the file you
                   specified.

F8:Dir             You can press the F8 key to see a listing of the
                   files on a disk or subdirectory. When you have the
                   list on the screen, you can use the Arrow keys to
                   move the cursor from file to file then select a file
                   by pressing the Enter key.





22                                         PC-WRITE FONT SELECTOR GUIDE
F9: Unsave         As soon as you begin typing, another option is
                   displayed in the menu: the Unsave. If you press the
                   F9 key and then exit, the changes to the print
                   control file are not saved and the download batch
                   file is not created. It is as if you never ran the
                   program.




















































PC-WRITE FONT SELECTOR GUIDE                                         23
Appendix C: Available Soft Fonts

The following is a partial list of third party soft fonts products,
derived from the Hewlett-Packard book LaserJet Printer Family Software
and Hardware Solutions and other sources.

ALPHABETS
   Wilkes Publishing Corp., 25251 Paseo de Alicia, #229, Laguna Hills,
   CA 92653
BALI FONTS
   Janus Associates, 94 Chestnut St., Boston, MA 02108
BIG FOOT FONTS
   Janus Associates, 94 Chestnut St., Boston, MA 02108
CONOFONTS
   Conographic Corp., 16802 Aston St., Irvine, CA 92714
DOWNLOAD FONT CONVERTER
   Prosoft, 7248 Bellaire Ave., North Hollywood, CA 91605
FLOPPY FONTS OFFICE SERIES
   The Font Factory, P.O. Box 5429, Kingwood, TX 77339
FLOPPY FONTS PROFESSIONAL SERIES
   The Font Factory, P.O. Box 5429, Kingwood, TX 77339
FONT EFFECTS
   SoftCraft, Inc., 16 N. Carroll St., Suite 500, Madison, WI 53703
FONTCENTER FONTS
   FONTCENTER, 509 Marin St., #227, Thousand Oaks, CA 91360
FONTWARE
   Bitstream, Inc., 215 First St., Cambridge, MA 02142
GLYPHIX
   SWFTE International, P.O. Box 219, Rockland, DE 19732
GPA SOFT FONT GENERATOR
   GRADCO Systems, Inc., 7 Morgan, Irvine, CA 92718
LASER FONTS
   SoftCraft, Inc., 16 N. Carroll St., Suite 500, Madison, WI 53703
LASERTEX VIRTUAL FONTS
   Network Technology Corp., 6825 Lamp Post Lane, Alexandria, VA 22306
LJ FONTS
   Weaver Graphics, Fox Pavilion Box 1132, Jenkintown, PA 19046
MAGICSERIES: MAGICFONT
   Computer Editype Systems, 509 Cathedral Parkway, 10A, New York, NY
   10025
PROFONT EDITING SYSTEMS
   FONTCENTER, 509 Marin St., #227, Thousand Oaks, CA 91360
PUBLISHER'S TYPE FOUNDRY
   Zsoft Corp., 1950 Spectrum Circle, Suite A-495, Marietta, GA 30067
SDP FONT LIBRARY
   LEXISOFT, Inc., P.O. Box 1950, Davis, CA 95617
SOFT FONT DISKS
   Computer Editype Systems, 509 Cathedral Parkway, 10A, New York, NY
   10025
SOFTCRAFT FONT EDITOR
   SOFTCRAFT, Inc., 16 N. Carroll St., Suite 500, Madison, WI 53703
STRAIGHTFORWARD ZFONTS
   15000 Halldale Ave., Suite 115, Gardena, CA 90247
VENTURA PUBLISHER FONTS
   The Font Factory, P.O. Box 5429, Kingwood, TX 77339
VS FONTS
   VS Software, P.O. Box 6158, Little Rock, AR 72216

24                                         PC-WRITE FONT SELECTOR GUIDE
Appendix D: Glossary

BIT-MAPPED FONT. A font in which each character is made up of a number
of dots. Each of these dots is represented by a bit in the computer's
memory.

DOWNLOADING. Transferring soft fonts from a disk to the printer's
memory.

ELITE TYPE. Typewriter type that runs 12 characters to the inch.

FONT. A complete set of characters in a given typeface. This includes
capital and lowercase letters, figures, punctuation marks, and commonly
used signs and accents.

FONT CONTROL LINE. A command line in a PC-Write print control file that
contains the escape sequence that accesses a font.

FONT LETTER. A letter that represents a font in PC-Write. A font letter
may be used in conjunction with the Alt key or the <Alt-G>.R command to
access a font.

KERNING. The process of adjusting the space between characters.

LANDSCAPE ORIENTATION. Printing across the length of the page.

LEADING. The spacing between lines of text; also called line spacing.

ORIENTATION. The direction of the print on the page. Portrait
orientation is printing across the width of the page. Landscape
orientation is printing across the length of the page.

OUTLINE FONT. A font in which each character is stored as an outline or
description. The advantage of this is that you can produce different
sizes and styles of characters from the same outline; the printer then
converts the outline to bits.

PICA. One-sixth of an inch; 12 points.

PICA TYPE. Type that runs ten characters to the inch. Also called ten
pitch.

PITCH. The number of characters per horizontal inch.

POINT. The printer's basic unit of measurement -- 0.0138 inch (1/72 of
an inch).

PORTRAIT ORIENTATION. Printing across the width of the page.

PRINT CONTROL FILE. A special PC-Write file that contains the codes for
fonts, line spacing, character width, microspacing, and other printer
controls for a particular printer.

SOFT FONT. A font stored in a disk file. It can be transferred into the
printer's memory.



PC-WRITE FONT SELECTOR GUIDE                                         25
STROKE WEIGHT. The thickness of the print. Stroke weight can be light,
medium, or bold.

STYLE. For the Hewlett-Packard LaserJet, style is either upright or
italic.

SYMBOL SET. A sub-grouping of all the available characters in a font.

TYPEFACE. A named type design, produced as a complete font.

















































26                                         PC-WRITE FONT SELECTOR GUIDE

```
{% endraw %}

## PAGEMAN.DOC

{% raw %}
```

                        PC-Write / PageMaker Import Filter
                                         
                                         
                                         
     Introduction
     
     
     The PC-Write / PageMaker Import Filter allows PC-Write users to transfer
     PC-Write documents into a PageMaker environment while retaining most of
     the formatting. Due to a limited set of import tokens provided by
     PageMaker, some formatting information can be lost during transfer. The
     features that are maintained include:
     
     
     *  Font Point Size
     *  Left and Right Margins
     *  Line Spacing
     *  Print Margins
     *  Font Types (Bold, Italic, Underline)
     *  Super and Subscripting
     *  Leading
     *  Paragraph Margins
     *  Justification
     *  Centering
     *  Format Protection
     
     
     Features that are lost during transfer include:
     
     *  Top and Bottom Margins
     *  Page Breaks
     *  Headers and Footers
     *  Table of Contents and Indexes
     *  Page Number Data
     
     
     In additions some limitations exist relative to the transferable
     features. The right margin is actually implemented as an indent. As such
     it is always relative to the maximum right margin. If this changes, the
     relative indent is affected. Also text that is not aligned with the left
     margin and is not format protected will be forced to the left margin.
     












      
                                     Page 1                                      

     
     
     
     
     Transferable Command Set
     
     
     
     Commands that are successfully transfered by the PC-Write / PageMaker
     Import Filter include most font letters, most ruler data, and several dot
     commands.
     
     Font Letters
     
     Font letters are interpreted as follows:
     
     B:  Bold (point size maintained)
     C:  8 Point
     D:  10 Point
     E:  12 Point
     F:  14 Point
     H:  Higher (Superscript)
     I:  Italic (point size maintained)
     L:  Lower (Subscript)
     O:  Overstrike
     P:  18 Point
     Q:  24 Point
     V:  30 Point (.R only)
     
     
     Ruler Commands
     
     The following ruler commands are interpreted as follows:
     
     L:  Set Left Margin
     P:  Set Paragraph Margin
     R:  Set Right Margin (Ragged Right)
     C:  Set Right Margin (Centered)
     J:  Set Right Margin (Justified)
     F:  Set Right Margin (Flush Right)
     
     
     Dot Commands
     
     The following dot commands are interpreted as follows:
     
     .X: Set Extra Left Margin
     .R: Set Regular Font
     .Q: Turn off Regular Font
     .S: Set Spacing
     .M: Set Multi-Spacing
     
     Other dot commands are ignored.

      
                                     Page 2                                      

     
     
     Installing the PC-Write / PageMaker Import Filter
     
     
     To install the PC-Write / PageMaker filter perform the follwing steps:
     
     1.  Locate the WIN.INI file that exists in your PageMaker directory.
     2.  Append the PCWFLT.WIN file (included) to the end of WIN.INI.
     3.  Copy the PCWRITE.FLT file into the PageMaker directory.
     
     You are now ready to use the PC-Write / PageMaker Import filter.
     
     
     Using the PC-Write / PageMaker Import Filter
     
     
     To import a file using the PC-Write / PageMaker Import Filter just follow
     these steps:
     
     1.  Create a file in PC-Write.
     2.  Give the file a .PCW extension.
     3.  Run the PageMaker program.
     4.  Use Ctrl-D to place a file.
     5.  Select the PC-Write file.
     6.  Place the file on the page where you want it.
     
     The file will automatically be loaded into PageMaker and placed at the
     specified location. All the formatting commands described above will be
     maintained.
     
     When you save your PageMaker file the imported file will be incorporated
     and saved with the rest of the file.
     
     Note: Currently this filter works only in one direction. At some point in
     the future it may be possible to export files from PageMaker to PC-Write.
     
     
     















      
                                     Page 3         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1267

     Volume in drive A has no label
     Directory of A:\

    FILE1267 TXT      2064   2-06-89  10:47a
    FONT     EXE     97254  10-21-88   3:05p
    FONTID   DOC       869   8-09-88  12:07p
    FONTMAN1 DOC     29676   1-05-88   5:36p
    FONTMAN2 DOC     30654   1-05-88   5:37p
    GO       BAT        64   2-03-89  10:54a
    ID       EXE     26592   5-31-88   4:32p
    PAGEMAN  DOC      4464   4-22-88   1:02p
    PCWFLT   WIN        45   2-12-88  11:46a
    PCWRITE  FLT     17036   4-17-88  12:18p
    READ     ME       1062  10-17-88   5:07a
    README             697   4-25-88  12:29p
           12 file(s)     210477 bytes
                          106496 bytes free
