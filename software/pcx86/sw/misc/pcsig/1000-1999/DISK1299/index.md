---
layout: page
title: "PC-SIG Diskette Library (Disk #1299)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1299/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1299"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "UTILITIES GALORE"

    Make your printer serve you better with this collection of utilities.
    There's even a game thrown in for fun!
    
    DIRPRN prints a disk directory sorted in various ways to make it easy to
    find a file.  ENVPRN turns your computer into an electric typewriter for
    quickly dashing off addresses on an envelope in a variety of fonts.
    LABPRN works similarly but is specifically formatted to handle labels,
    such as for binders/drawers.  MERPRN merges several separate text files
    into one formatted printed text.  SETPRN sets the printer parameters
    prior to using a print spooler.  XTRPRN extracts and prints call
    declarations and comments from Turbo Pascal source files.
    
    All the programs let you select the print quality, text style, margin
    width, page numbering, printer port, and line spacing.  They can be
    added as batch files to run whenever needed.
    
    COLORE lets you choose the colors your monitor will display when
    your system first boots-up.  You can select from 16 different colors for
    the foreground, background, and border of your monitor.
    
    SURVIVAL is a game that requires quick reflexes.  With a boxing glove
    you must punch monsters before they descend to the bottom of the screen,
    sending them back to the top.
    
    LABEL computerizes your personal address/telephone directory for easy
    reference and printing of reports and labels.  Menu options let you
    print: address labels (using standard 15/16" x 3-1/2" wide labels),
    list of all records (done with two entries side-by-side on 8-1/2" x 11"
    paper), telephone list (only those records with a telephone number are
    printed), and individual records you select.  Handles both three and
    four line addresses, automatically suppressing blank lines.
    
    DOCFORM lets you add printing instructions to any text file to
    specify boldface print, underlined print, margins, double or triple
    spacing, headers, and footers -- which then print correctly on
    almost every printer.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COMMENT.DOC

{% raw %}
```
     DOCFORM Comment Form                                                                Scott Pakin



                              ____________________                              DOCFORM                                           DOCFORM COMMENT FORM
     
     
     This form is provided to make it easy for you to voice your thoughts
           DOCFORM                                                            about DOCFORM.  Please feel free to attach additional pages or write
     a letter on a separate sheet of paper.
     
     
     Your city and state: _________________________________________________
     
     What type of system do you use?
     
             Computer:       PC     XT     AT    jr.    PS/2 (model? _____)
     
             Manufacturer:      _______________________________________
     
             Operating system:  _______________________________________
     
             Video board:    MDA     CGA     EGA     VGA    Other: ________
     
     
                                        DOCFORM                         Where did you receive your copy of DOCFORM?  Be as specific as
     possible (e.g.  The Joe Bloggs BBS, (123) 456-7890)
     
          ____________________________________________________________
     
     
          DOCFORM                      Rate DOCFORM's documentation:
     
             Clarity:      ()Excellent  ()Very Good  ()Good  ()Fair  ()Poor
             Completeness: ()Excellent  ()Very Good  ()Good  ()Fair  ()Poor
     
     What, if anything, would you do to improve the documentation?
     
          ____________________________________________________________
     
     
              DOCFORM                     Rate the DOCFORM program itself:
     
             Usefulness:   ()Excellent  ()Very Good  ()Good  ()Fair  ()Poor
             Ease of use:  ()Excellent  ()Very Good  ()Good  ()Fair  ()Poor
             Power:        ()Excellent  ()Very Good  ()Good  ()Fair  ()Poor
             Look & feel:  ()Excellent  ()Very Good  ()Good  ()Fair  ()Poor
     
     
                                                DOCFORM      What, if anything, would you do to improve DOCFORM?
     
          ____________________________________________________________
     
          ____________________________________________________________
     
                                     - 1 -                                                                           
     DOCFORM Comment Form                                                                Scott Pakin




     Additional comments:
     
          ____________________________________________________________
     
          ____________________________________________________________
     
     
     Would you like a reply to this letter?    Yes    No
     
     
     Thank you for taking the time to fill out this form.  I will consider
                                             DOCFORM                all user comments in future releases of DOCFORM and, where
     applicable, in other programs I write.
     
     
     PLEASE SEND ALL COMMENTS TO:
     
     Scott Pakin
     6007 N. Sheridan Rd.
     Chicago, IL   60660






























                                     - 2 -                                                                           

```
{% endraw %}

## DIRPRN.TXT

{% raw %}
```

                              DirPRN by JJO

     PURPOSE

     DirPRN may be invoked from the DOS prompt or from within a batch
     file (see below) to secure disk or directory files listings, sort
     them (optional) and print them (always).

     If no printer options are selected, DirPRN defaults to Epson and
     should be compatible with most printers.

     USAGE

     Syntax: DIRPRN [?][pathspec] [options]

     Parameters: [] optional and <> required, where a parameter is a
     character or a string (no spaces). Parameter sets must be separated
     by one or more spaces where so shown above.

                              Parameter List

     ? means display this file (/? is also acceptable).

     Pathspec is the disk or directory to search; e. g: a:\ or c:\DOS.
        If pathspec is omitted, the current directory is used.

     Options, one or more of (any order and case);
        /B    forces black & white display.
        /C    centers header and date.
        /D    inserts date.
        /H:c  sets header style (c = (S)tandard, (H)igh or (W)ide).
        /L:n  sets line spacing (n = 6, 4 or 8 lpi).
        /M:n  sets margin (n = 0..10).
        /N    insert page numbers.
        /P:n  chooses printer port (n = 1..2).
        /Q:c  sets print quality (c = (D)raft, (E)mphasized or (L)etter).
        /S:c  sort criteria (c = (N)ame, (E)xtension, (D)ate or (S)ize).
        /S:pc p is optional prefix for c (p = (A)ll directory entries)
              where default (no prefix) is files, only.
        /T:c  sets text style (c = (P)ica, (E)lite or (C)ompressed).
        /U:c  selects printer (c = (E)pson, (D)ataproducts or (I)BM).
              The defaults are listed first.
              If H, L, Q or T are specified for other than an Epson (or
              clone), then enter a printer code.

     NOTES

     If there are command line errors or the specified printer is
     unavailable, DirPRN halts with an error message. Error messages are
     beeped and left on the screen when DirPRN terminates.

     If a header style is specified, it only affects printing of the
     directory name (header). If centering is specified, only the header
     and date are centered.

     This file may be printed via MerPRN or by typing at the DOS prompt
     TYPE DIRPRN.TXT > PRN.


     BATCH FILE USAGE

     DirPRN is designed for execution from within a batch file. When so
     used, test for an error code returned by DirPRN and, if found, stop
     batch execution until the problem is cleared. This can be done by
     inserting a line like this after each call to DirPRN:

                          IF ERRORLEVEL 1 GOTO Error

     where "Error" can be any line(s) which cause the batch process to
     terminate. See the sample batch file DirEx.Bat.

                                      ***


```
{% endraw %}

## DOCFORM.DOC

{% raw %}
```
     DOCFORM Documentation                                                                Scott Pakin



     
                       _________________________________                                                DOCFORM                        DOCUMENTATION FORMATTER (DOCFORM)
                                 ______________                                 by Scott Pakin
     
     
     DOCFORM                                                                DOCFORM is a formatter program that makes it easy to generate well
     formatted program documentation with boldface print, underlined print,
     margins, double or triple spacing, headers, and footers.
                                  DOCFORM                                    Documentation formatted with DOCFORM will print correctly on almost
     every printer.
     
     
     _____________________________     How to use these instructions
     
     <Enter> refers to the <Enter> or <Return> key on your keyboard.
     "Enter" means type the underlined text that follows and press <Enter>.
     "Ctrl-some letter" means hold down the <Ctrl> key and tap the letter
     that follows.
     
     
     __________________                DOCFORM     How to use DOCFORM
     
     First, use a text editor or a word processor that can save files in
     ASCII format to create the text file you would like formatted.  Enter
     no more than 80 characters per line, or less if you are going to have
     a left margin.  For example, this document was written with 70
     characters per line and formatted with a left margin of 5, which gives
     it a right margin of 5, for a total of 80 characters.
     
     To have a word printed in boldface, insert a Ctrl-B before the first
     and after the last character to appear in boldface.  To have a word
     underlined, do the same thing, but replace Ctrl-B with Ctrl-U.
     
     The way to enter control characters varies from editor to editor.  For
     example, with some editors, you can enter control codes directly.  In
                               SideKick                                      others, such as Borland's SideKick, you have to enter Ctrl-P before
     entering the control character.
     
                                               DOCFORM                   After you have created the text file, use DOCFORM to format it.
           _______                                                        Enter DOCFORM at the DOS prompt.  You should see a screen with a
     column of choices on the left side:
     
     +--------------------------------------------------------------------+
     |                                                                    |
     | >Files                                                             |
     |  Format                                                            |
     |  Headers                                                           |
     |  Footers                                                           |
     |  Execute                                                           |
     |                                                                    |
     +--------------------------------------------------------------------+



                                     - 1 -                                                                           
     DOCFORM Documentation                                                                Scott Pakin



     
            _____                                                         Files lets you specify the input and output files.
            ______                                                               Format lets you set the left margin and the line spacing.
            _______                                             Headers lets you set one or two headers.
            _______                                             Footers lets you set one or two footers.
            _______                                                         Execute formats the input file into the output file.
     
     The instructions at the bottom of the screen tell you how to move the
     cursor:  the up and down arrow keys move the cursor up and down;  the
     <Enter> key selects an option;  the <Esc> key moves back to the
     previous menu or exits the program from the main menu.
     
     
     ________________     DOCFORM              DOCFORM tutorial
     
                    DOCFORM                                           Practice using DOCFORM with the document DOCFORM.ASC.  Enter
     _______                                                                                            DOCFORM                                    DOCFORM at the DOS prompt.  DOCFORM starts with the cursor already
     on the Files line, so just press <Enter>.  A submenu appears beneath
     the word "Files."  Press <Enter> again.  The cursor goes to the end of
                                         ___________                      the line "Input file name:."  Enter DOCFORM.ASC.  Now, press the
     down arrow key and <Enter>.  For the output filename, enter
     ___________                                                             DOCFORM.TST.  Your screen should look something like the following:
     
     +--------------------------------------------------------------------+
     |                                                                    |
     |  Files                                                             |
     |      Input file name:  DOCFORM.ASC                                 |
     |     >Output file name: DOCFORM.TST                                 |
     |  Format                                                            |
     |  Headers                                                           |
     |  Footers                                                           |
     |  Execute                                                           |
     |                                                                    |
     +--------------------------------------------------------------------+
     
     Press <Esc> to close the Files submenu.  Move the cursor down to the
     Format line.  Press <Enter>.  The submenu that appears lets you change
                                                             _               the left margin and the spacing.  Press <Enter>.  Enter 0 (zero) to
     choose no left margin.  Your screen should look like this:
     
     +--------------------------------------------------------------------+
     |                                                                    |
     |  Files                                                             |
     |  Format                                                            |
     |     >Left margin: 0                                                |
     |      Spacing:     1                                                |
     |  Headers                                                           |
     |  Footers                                                           |
     |  Execute                                                           |
     |                                                                    |
     +--------------------------------------------------------------------+



                                     - 2 -                                                                           
     DOCFORM Documentation                                                                Scott Pakin



     
     Press <Esc> to go back to the main menu.  Move the cursor down to the
     Headers line.  Press <Enter>.  The Headers submenu lets you enter one
     or two headers that will appear on the top of every page.  Move the
     cursor down to the line that says "Message #1" and press <Enter>.
           ________________________________                                  Enter DOCFORM test by (your name here).  You needn't enter a second
     header, so just press <Esc>.
     
     +--------------------------------------------------------------------+
     |                                                                    |
     |  Files                                                             |
     |  Format                                                            |
     |  Headers                                                           |
     |      Location #1: [Left]                                           |
     |     >Message #1:  DOCFORM test by Scott Pakin                      |
     |      Location #2: [Right]                                          |
     |      Message #2:                                                   |
     |  Footers                                                           |
     |  Execute                                                           |
     |                                                                    |
     +--------------------------------------------------------------------+
     
     Move the cursor down to the Footers line and press <Enter>.  The
     Footers submenu works just like the Headers submenu.  First, change
     the location of the first footer from "Center" to "Left."  Press
     <Enter>.  The cursor is already on "Left," so just press <Enter>.
     
     +--------------------------------------------------------------------+
     |                                                                    |
     |  Files                                                             |
     |  Format                                                            |
     |  Headers                                                           |
     |  Footers                                                           |
     |      Location #1: [Center]                                         |
     |          >Left                                                     |
     |           Right                                                    |
     |           Center                                                   |
     |      Message #1:                                                   |
     |      Location #2: [Right]                                          |
     |      Message #2:                                                   |
     |  Execute                                                           |
     |                                                                    |
     +--------------------------------------------------------------------+
     
     Move the cursor down to "Message #1" and press <Enter>.  Enter the
     date.  Move the cursor down to "Message #2" and press <Enter>.  Enter
     _______                                                            Page #@.  (The "@" represents the current page number.)  Press
     <Esc>.
     


                                     - 3 -                                                                           
     DOCFORM Documentation                                                                Scott Pakin




     +--------------------------------------------------------------------+
     |                                                                    |
     |  Files                                                             |
     |  Format                                                            |
     |  Headers                                                           |
     |  Footers                                                           |
     |      Location #1: [Left]                                           |
     |      Message #1:  December 28, 1987                                |
     |      Location #2: [Right]                                          |
     |     >Message #2:  Page #@                                          |
     |  Execute                                                           |
     |                                                                    |
     +--------------------------------------------------------------------+
     
     The Execute line has no submenus.  When you press <Enter> on it, the
     computer begins formatting the document.  Move the cursor to the word
     "Execute" and press <Enter>.  A window containing the file being
     formatted appears and shows which line the computer is currently
     formatting.
     
     +--------------------------------------------------------------------+
     |                                                                    |
     |  Files                            +----------------------------+   |
     |  Format                           | DOCFORM is a formatter pro |   |
     |  Headers                          | formatted program document |   |
     |  Footers                          | margins, double or triple  |   |
     |  Execute                          +----------------------------+   |
     |                                                                    |
     +--------------------------------------------------------------------+
     
     When the file is formatted, press <Esc> to return to the main menu.
             DOCFORM                                  To exit DOCFORM, press <Esc> one final time.
     
     You should have a file called DOCFORM.TST on your disk.  This file
     contains the printable boldface, underline, etc.  To print
                                                ______________________        DOCFORM.TST, enter a print command such as COPY DOCFORM.TST LPT1: or
     _________________                        PRINT DOCFORM.TST at the DOS prompt.
     
     











                                     - 4 -                                                                           
     DOCFORM Documentation                                                                Scott Pakin




     ______________     Menu structure
     
     Here are all the lines with their submenus opened:
             Files
                 Input file name:
                 Output file name:
             Format
                 Left margin: 5
                 Spacing:     1
             Headers
                 Location #1: [Left]
                      Left
                      Right
                      Center
                 Message #1:
                 Location #2: [Right]
                      Left
                      Right
                      Center
                 Message #2:
             Footers
                 Location #1: [Center]
                      Left
                      Right
                      Center
                 Message #1:
                 Location #2: [Right]
                      Left
                      Right
                      Center
                 Message #2:
             Execute
     
     
     ____________________________     Other things you should know
     
                                           _____                           For "Output file name," you can enter LPT1: to have the output go
     directly to a printer instead of a file.
     
     Boldface and underlining can stretch across lines.  That is, an ending
     Ctrl-B, for example, can appear a few lines after a starting Ctrl-B.
     
     Words can be both boldface and underlined.  Example:
                     This is bold                      This is bold.
                     __________________                      This is underlined.
                     ________________________________                      This is both bold and underlined                      This is both bold and underlined.
     
     You can terminate document formatting prematurely by pressing <Esc>.
     You will probably have to press <Esc> a number of times in quick
     succession before it works.  The message "Execution cancelled" will



                                     - 5 -                                                                           
     DOCFORM Documentation                                                                Scott Pakin



     appear when the computer recognizes the <Esc> and stops formatting.
     Your output file will be formatted up to the point you pressed <Esc>.
     
     Hard (forced) page breaks can be entered by placing a Ctrl-L on its
                        ___                      own line or at the end of another line.
     
     Boldprint doesn't work on the HP LaserJet printers, and I suspect it
     doesn't work on most other non-impact printers, either.
     
     To make your documents as universally printable as possible, follow
     these rules:
          * Don't use tabs (ASCII code 9) because some printers, such as
            the HP LaserJet, ignore them.  Instead, space over to the
            desired position.
          * Don't use the PC's graphics characters (ASCII codes 127-255) or
            unprintable characters (ASCII codes 0-31) because most printers
            are unable to print them.  However, the following unprintable
                       are                                                       characters are legal:  Ctrl-B (bold), Ctrl-U (underline),
            Ctrl-M (carriage return), Ctrl-L (form feed), and Ctrl-H
            (backspace).
          * Don't put more than 80 characters on a line.  Most printers
            default to 80 characters per line (10-pitch pica).
     
     
     _________________         DOCFORM           How DOCFORM works
     
     DOCFORM                                                                DOCFORM is able to function properly on so many different printers
     because it uses a generic formatting technique instead of sending
     printer escape codes, which are specific to a particular printer.  To
                             DOCFORM                                       accomplish underlining, DOCFORM backspaces the printer and prints
     the underline character (ASCII code 95) over the words to be
     underlined.  Boldface is accomplished similarly.  Instead of printing
     underlines, the printer backspaces and overstrikes the original
                            DOCFORM                                         characters.  In short, DOCFORM prints boldface and underlining the
     same way a typewriter does.
     
     














                                     - 6 -                                                                           
     DOCFORM Documentation                                                                Scott Pakin




     _____________________________________                                  DOCFORM      Does it cost anything to use DOCFORM?
     
          DOCFORM                                                        No.  DOCFORM is in the Public Domain.  However, I would greatly
                                             DOCFORM                          appreciate it if you gave me credit for DOCFORM in any documents you
                                            DOCFORM                           produce using it.  Also, if you do use DOCFORM for your documents --
     and I hope you do -- please send me a friendly letter to tell me that
     my programs are being put to good use (see below).
     
     
     ____________________________________________________________________     SEND ALL QUESTIONS, COMMENTS, CONSTRUCTIVE CRITICISMS, AND KUDOS TO:
     Scott Pakin
     6007 N. Sheridan Rd.
     Chicago, IL  60660
     
     (Don't hesitate to write; I like to know that people are actually
     using my programs.)


































                                     - 7 -                                                                           

```
{% endraw %}

## FILE1299.TXT

{% raw %}
```
Disk No: 1299
Program Title: UTILITIES GALORE
PC-SIG version: 1

Make your printer serve you better with this collection of utilities.
There's even a game thrown in for fun!

DIRPRN prints a disk directory sorted in various ways to make it easy to
find a file.  ENVPRN turns your computer into an electric typewriter for
quickly dashing off addresses on an envelope in a variety of fonts.
LABPRN works similarly but is specifically formatted to handle labels,
such as for binders/drawers.  MERPRN merges several separate text files
into one formatted printed text.  SETPRN sets the printer parameters
prior to using a print spooler.  XTRPRN extracts and prints call
declarations and comments from Turbo Pascal source files.

All the programs let you select the print quality, text style, margin
width, page numbering, printer port, and line spacing.  They can be
added as batch files to run whenever needed.

COLORE lets you choose the colors your monitor will display when
your system first boots-up.  You can select from 16 different colors for
the foreground, background, and border of your monitor.

SURVIVAL is a game that requires quick reflexes.  With a boxing glove
you must punch monsters before they descend to the bottom of the screen,
sending them back to the top.

LABEL computerizes your personal address/telephone directory for easy
reference and printing of reports and labels.  Menu options let you
print: address labels (using standard 15/16" by 3-1/2" wide labels),
list of all records (done with two entries side-by-side on 8-1/2" by 11"
paper), telephone list (only those records with a telephone number are
printed), and individual records you select.  Handles both three and
four line addresses, automatically suppressing blank lines.

DOCFORM lets you add printing instructions to any text file to
specify boldface print, underlined print, margins, double or triple
spacing, headers, and footers--which then print correctly on
almost every printer.

Usage:  DOS Utilities/Entertainment.

Special Requirements:  DataProducts DP8070, Epson MX/FX, IBM Proprinter
or compatible printer, a color monitor (except DOCFORM), and a second
printer connected to the first printer port (PRN).

How to Start:  Type GO (press enter).

Suggested Registration: $20.00 for LABEL

File Descriptions:

DIREX    BAT  Sample batch file for DIRPRN.
DIRPRN   EXE  DIRPRN, main program.
DIRPRN   TXT  Documentation for DIRPRN.
ENVPRN   EXE  ENVPRN, main program.
LABPRN   EXE  LABPRN, main program.
PRNSUITE DOC  File descriptions.
MEREX    BAT  Sample batch file for MERPRN.
MERPRN   EXE  MERPRN, main program.
MERPRN   TXT  Documentation for MERPRN.
PRNSUITE BAT  Displays PRNSUITE.DOC.
SETEX    BAT  Sample batch file for SETPRN.
SETPRN   EXE  SETPRN, main program.
SETPRN   TXT  Documentation for SETPRN.
XTREX    BAT  Sample batch file for XTRPRN.
XTRPRN   EXE  XTRPRN, main program.
XTRPRN   TXT  Documentation for XTRPRN.
COLOR    BAT  Batch file to start up colors.
COLOR    DOS  Sample color file.
COLORE   EXE  Color menu.
CONFIG   SYS  Sample configuration file.
PCGREF   EXE  Run-time routines.
SURVIVAL EXE  The game SURVIVAL.
READ     ME   Documentation.
LABEL    EXE  Program file.
LABEL    FLE  Data File.
READ     ME2  Manual.
READ     ME3  Short description.
DOCFORM  DOC  Documentation, formatted by DOCFORM.
COMMENT  DOC  User comment form.
DOCFORM  COM  Main program.
DOCFORM  ASC  Documentation, unformatted.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                <<<<  Disk No 1299 Utilties Galore  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation for the programs, type:                      ║
║                                                                         ║
║             MANUAL (press enter)                                        ║
║                                                                         ║
║   To run any of the programs on this disk, simply type in the name      ║
║   of the program you wish to run then press the ENTER key. For          ║
║   example, to run LABEL you would type:                                 ║
║                                                                         ║
║             LABEL (press enter)                                         ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MERPRN.TXT

{% raw %}
```

                              MerPRN by JJO

     PURPOSE

     MerPRN may be invoked from the DOS prompt or from within a batch
     file (see below) to merge and print an unformatted text file pair: a
     base (target) file and its associated header. The header file
     typically contains descriptive text which complements the base and
     must have the same filename, with .Hdr as its extension.

     If no printer options are selected, MerPRN defaults to Epson and
     should be compatible with most printers.

     USAGE

     Syntax: MERPRN [?] <filespec> [options]

     Parameters: [] optional and <> required, where a parameter is a
     character or a string (no spaces). Parameter sets must be separated
     by one or more spaces where so shown above.

                              Parameter List

     ? means display this file (/? is also acceptable).

     Filespec is the target file (and its path); e. g: c:\Any\File.Ext.
        If a file with the same name and extension of .Hdr exists, it
        will be printed first as the header for the target file. If not
        present, the target file title is used as the header.

     Options, one or more of (any order and case);
        /B    forces black & white display.
        /C    centers header and date.
        /D    inserts date after the header.
        /H:c  sets header style (c = (S)tandard, (H)igh or (W)ide).
        /L:n  sets line spacing (n = 6, 4 or 8 lpi).
        /M:n  sets margin (n = 0..10).
        /N    causes pages to be numbered.
        /P:n  chooses printer port (n = 1..2).
        /Q:c  sets print quality (c = (D)raft, (E)mphasized or (L)etter).
        /T:c  sets type style (c = (P)ica, (E)lite or (C)ompressed).
        /U:c  selects printer (c = (E)pson, (D)ataproducts or (I)BM).
              The defaults are listed first.
              If H, L, Q or T are specified for other than an Epson (or
                 clone), then enter a printer code.

     NOTES

     If there are command line errors or the specified target file and/or
     printer is/are unavailable, MerPRN halts with an error message.
     Error messages are beeped and left on the screen when MerPRN
     terminates.

     If a header style is specified, it only affects printing of the
     header file or default header. If centering is specified, only the
     header and date are centered.

     This file may be printed with MerPRN or by typing at the DOS prompt
     TYPE MERPRN.TXT > PRN.


     BATCH FILE USAGE

     MerPRN is designed for execution from within a batch file. When so
     used, test for an error code returned by MerPRN and, if found, stop
     batch execution until the problem is cleared. This can be done by
     inserting a line like this after each call to MerPRN:

                          IF ERRORLEVEL 1 GOTO Error

     where "Error" can be any line(s) which cause the batch process to
     terminate. See the sample batch file MerEx.Bat.

                                      ***


```
{% endraw %}

## PRNSUITE.DOC

{% raw %}
```


                           PRNSuite by JJO Software

                                   Release 1

     PROGRAMS

     PRNSuite is a set of related print utilities with a common user
     interface. It consists of the following programs (.Exe), related
     information (.Txt) and sample batch files (.Bat):

     DirPRN (v1.2) - prints directory contents sorted (optional) in
     various ways. See DirPRN.Txt and DirEx.Bat. Type DIRPRN ? for syntax.

     EnvPRN (v1.5) - prints various type styles for addressing envelopes.
     Interactive, type ENVPRN to run.

     LabPRN (v1.3) - prints various type styles for binder/drawer labels.
     Interactive, type LABPRN to run.

     MerPRN (v1.3) - prints a merged set of related text files. See
     MerPRN.Txt and MerEx.Bat. Type MERPRN ? for syntax.

     SetPRN (v1.3) - sets a printer for print spooling. See SetPRN.Txt and
     SetEx.Bat. Type SETPRN ? for syntax.

     XtrPRN (v1.7) - extracts and prints call declarations and comments
     (optional) from Turbo Pascal source files. See XtrPRN.Txt and
     XtrEx.Bat. Type XTRPRN ? for syntax.

     The information (.Txt) files must be in the current directory or a
     \Print directory to be viewed (via ?) from within the programs. The
     interactive programs are self-contained; i.e., have no information
     files. The information files may be printed via MerPRN or by typing
     at the DOS prompt TYPE Filename.Ext > PRN.

     For best results on CGA systems with monochrome monitors, use the /B
     parameter with all of the programs to force black and white operation.


     SYSTEM REQUIREMENTS

     System: Any member of the IBM PC or PS/2 family, or compatible.

     Memory: 64 kb over and above DOS and any resident programs should be
     adequate.

     Video: XWord does not require graphics and has been run in both color
     and monochrome on IBM and Tandy VGA, EGA, CGA and MDA systems.

     Printer: DataProducts DP8070, Epson MX/FX and IBM Pro, or equivalents,
     are supported in all respects. The printer defaults are compatible
     with most Epson-like printers so no parameters need be supplied.


     UPGRADES

     Refer to documentation for the individual programs. What is to be
     implemented, if anything, will be determined via feedback from
     registered users.



     REGISTRATION

     Written communications from all users will be accepted and answered.
     However, registered users will be given a daytime phone number which
     may be used for discussing upgrades and for technical support.
     Registered users are to receive at least one upgrade, not including
     bug fixes (if needed). To register, send a $20 check or money order
     to:

                                  JJO Software
                               174 Westover Court
                                Delran, NJ 08075

                                      ***



```
{% endraw %}

## SETPRN.TXT

{% raw %}
```

                              SetPRN by JJO

     PURPOSE

     SetPRN is intended to be called from a batch file (see below) to
     set printer parameters prior to calling a print spooler. SetPRN
     always sets the printer's perforation skip function to 5 lines.

     If no printer options are selected, SetPRN defaults to Epson and
     should be compatible with most printers.

     USAGE

     Syntax: SETPRN [?][options]

     Parameters: [] optional and <> required, where a parameter is a
     character or a string (no spaces). Parameters must be separated
     by one or more spaces where so shown above.

                              Parameter List

     ? means display this file (/? is also acceptable).

     Options, one or more of (any order and case);
        /B    forces black & white display.
        /L:n  sets line spacing (n = 6, 4 or 8 lpi).
        /M:n  sets margin (n = 0..10).
        /P:n  chooses printer port (n = 1..2).
        /Q:c  sets print quality (c = (D)raft, (E)mphasized or (L)etter).
        /T:c  sets type style (c = (P)ica, (E)lite or (C)ompressed).
        /U:c  selects printer (c = (E)pson, (D)ataproducts or (I)BM.
              The defaults are listed first.
              If M, Q or T are used for other than an Epson (or clone)
                 then enter printer code.

     NOTES

     If there are command line errors or the specified printer is
     unavailable, SetPRN will halt with an error message. Error messages
     are beeped and left on the screen when SetPRN terminates.

     Planned upgrades include automatic generation of the print spooler
     command line from file and option parameters supplied to SetPRN.

     This file amy be printed via MerPRN or by typing at the DOS prompt
     TYPE SETPRN.TXT > PRN.

     BATCH FILE USAGE

     SetPRN is designed for execution from within a batch file; hence,
     test for an error code returned by SetPRN and, if found, stop batch
     execution until the problem is cleared. This can be done by
     inserting a line like this after each call to SetPRN:

                          IF ERRORLEVEL 1 GOTO Error

     where "Error" can be any line(s) which cause the batch process to
     terminate. See the sample batch file SetEx.Bat.

                                      ***


```
{% endraw %}

## XTRPRN.TXT

{% raw %}
```

                              XtrPRN by JJO

     PURPOSE

     XtrPRN may be invoked from the DOS prompt or from within a batch
     file (see below) to extract and print subroutine calls and comments
     (optional) from Turbo Pascal source files.

     If no printer options are selected, XtrPRN defaults to Epson and
     should be compatible with most printers.

     USAGE

     Syntax: XTRPRN [?] <filespec> [options]

     Parameters: [] optional and <> required, where a parameter is a
     character or a string (no spaces). Parameter sets must be separated
     by one or more spaces where so shown above.

                              Parameter List

     ? means display this file (/? is also acceptable).

     Filespec is the target file (and its path); e. g: c:\Pascal\Test.Pas.

     Options, one or more of (any order and case);
        /B    forces black & white display.
        /C    centers header and date.
        /D    inserts date after header.
        /H:c  sets header style (c = (S)tandard, (H)igh or (W)ide).
        /L:n  sets line spacing (n = 6, 4 or 8 lpi).
        /M:n  sets margin (n = 0..10).
        /N    insert page numbers.
        /P:n  chooses printer port (n = 1..2).
        /Q:c  sets print quality (c = (D)raft, (E)mphasized or (L)etter).
        /T:c  sets type style (c = (P)ica, (E)lite or (C)ompressed).
        /U:c  selects printer (c = (E)pson, (D)ataproducts or (I)BM).
        /V    include compiler directives and comments.
              The defaults are listed first.
              If H, L, Q or T are specified for other than an Epson (or
                 clone), then enter a printer code.

     NOTES

     If there are command line errors or the specified target file and/or
     printer is/are unavailable, XtrPRN halts with an error message.
     Error messages are beeped and left on the screen when XtrPRN
     terminates.

     If a header style is specified, it only affects printing of the
     file name (header). If centering is specified, only the header and
     date are centered.

     This file may be printed via MerPRN or by typing at the DOS prompt
     TYPE XTRPRN.TXT > PRN.


     BATCH FILE USAGE

     XtrPRN is designed for execution from within a batch file. When so
     used, test for an error code returned by XtrPRN and, if found, stop
     batch execution until the problem is cleared. This can be done by
     inserting a line like this after each call to XtrPRN:

                          IF ERRORLEVEL 1 GOTO Error

     where "Error" can be any line(s) which cause the batch process to
     terminate. See the sample batch file XtrEx.Bat.

                                      ***


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1299

     Volume in drive A has no label
     Directory of A:\

    COLOR    BAT        44   2-02-88   8:15a
    COLOR    DOS       128   2-02-88   4:00p
    COLORE   EXE      3869   2-02-88   3:57p
    COMMENT  DOC      3534  12-12-87   4:36p
    CONFIG   SYS        17   2-02-88   8:10a
    DIREX    BAT       520   2-13-88   7:07p
    DIRPRN   EXE     25072   2-13-88   7:07p
    DIRPRN   TXT      2921   2-13-88   7:07p
    DOCFORM  ASC     14309  12-29-87   8:29p
    DOCFORM  COM     21419  12-12-87   4:10p
    DOCFORM  DOC     20489  12-12-87   4:12p
    ENVPRN   EXE     14768   2-13-88   7:07p
    FILE1299 TXT      3620   2-23-89  12:55p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1079   2-21-89   9:54a
    LABEL    EXE     32296   1-14-88  10:34p
    LABEL    FLE       528   1-14-88  10:34p
    LABPRN   EXE     13248   2-13-88   7:07p
    MANUAL   BAT       179   1-12-89  10:03a
    MEREX    BAT       505   2-13-88   7:07p
    MERPRN   EXE     19488   2-13-88   7:07p
    MERPRN   TXT      3087   2-13-88   7:07p
    PCGREF   EXE     31744   5-07-82  12:00p
    PRNSUITE BAT       198   2-13-88   7:07p
    PRNSUITE DOC      2994   2-13-88   7:07p
    READ     ME       1846   2-02-88   4:34p
    READ     ME2     12285   1-14-88  10:35p
    READ     ME3       971  12-12-87   5:02p
    SETEX    BAT      1015   2-13-88   7:07p
    SETPRN   EXE     18160   2-13-88   7:07p
    SETPRN   TXT      2368   2-13-88   7:07p
    SURVIVAL EXE      3629  12-05-87   4:46p
    XTREX    BAT       509   2-13-88   7:07p
    XTRPRN   EXE     20896   2-13-88   7:07p
    XTRPRN   TXT      2760   2-13-88   7:07p
           35 file(s)     280533 bytes
                           24576 bytes free
