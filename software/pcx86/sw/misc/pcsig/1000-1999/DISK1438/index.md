---
layout: page
title: "PC-SIG Diskette Library (Disk #1438)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1438/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1438"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "AUDIO II"

    AUDIO II prints nice-looking and easy-to-read label inserts to identify
    your personal recordings on audio cassettes.  The program is designed to
    help you organize your music collection, but can also be used to neatly
    label recordings of lectures, notes, sound clips, etc.
    
    Eliminated, from this point forward, is the tedious process of writing
    on the cassette inserts supplied with the blank audio cassettes.  All
    your recordings can now have custom printed inserts that make finding
    particular selections less of an eye strain, while bringing a
    professional look of quality to your entire collection.
    
    Each cassette insert has: two title lines (for names of artists or
    groups), head A/B (for the headings on the two sides of the insert),
    date A/B (the current date is used or you can change it), and songs (a
    list for each side of the cassette).
    
    AUDIO II is menu-driven with on-line help to answer your questions.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## AUDIO.DOC

{% raw %}
```

























                             A   U   D   I   O     I   I

                                     Version 2.1

                                  S h a r e w a r e

                          Copyright (c) 1988 by Rod Whisnant

                           Version Date:  December 20, 1988








                                    USER'S MANUAL 































                                       Preface    
                                       -------

               AUDIO II version 2.1 is primarily a program designed to
          print cassette inserts on an IBM PC/XT/AT PS/2 or compatible
          computer using a dot matrix printer.  It was designed to
          eliminate the tedious process of writing on the cassette inserts
          supplied by the manufacturers of blank cassettes.  AUDIO II
          prints a visually appealing insert to make it easy for the user
          to locate cassettes and songs.

               AUDIO II is a Shareware program.  This means that program
          distribution depends on people sharing software.  People who
          "use" the program are encouraged to make a donation to the
          author.  Whether you keep this program or not, I encourage you to
          copy and share this program with others.

               If you try AUDIO II and find it useful to you, please
          support the development of the program by sending your contribu-
          tion.  I suggest $10.00 but you can decide what it is worth to
          you.  I don't believe $10.00 is too much to ask for a program of
          this type.  It's hard to find a good commercial program for
          $10.00.  Contributors will receive notice of upgrades and fixes
          and will receive the next version when available.       

               I thank you your support, and would appreciate any comments,
          suggestions and contributions.  Send all correspondence to the
          following address:

               Rod Whisnant
               7501 Donal Avenue
               Liberty, MO  64048


                                      Disclaimer

               I offer this program as is, with no warranty.  I guarantee
          no compatibility with your system and will not be responsible for
          damages resulting for the use or inability to use this program.

                                      Trademarks

               IBM PC/XT/AT and PS/2 are registered trademarks of
          International Business Machines.  






















          Introduction
          ------------

               I started designing AUDIO II because I was tired of writing
          cassette inserts every time I made a tape.  And with my
          handwriting, most of the time, the inserts were unreadable or
          simply didn't look appealing.  Typing the inserts was a pos-
          sibility but, why should I type them when I have a $5000.00
          machine sitting on my desk that could do the same thing, only
          better.  AUDIO II has been about 13 months in development and is
          written in Turbo Pascal with some assembly language routines. 
          This version has undergone extensive testing but may not be "bug-
          free".  If you have a problem please don't hesitate to write.


          Requirements
          ------------

               An IBM PC/XT/AT PS/2 or compatible using DOS 2.1 or above,
          at least one 360K disk drive or a hard disk, and a dot matrix
          printer.  I recommend using at least 256K but, AUDIO II takes up
          only approximately 64K of RAM.  AUDIO II will work on CGA, EGA,
          VGA color or composite monitors and cards, monochrome monitors
          and cards and LCD laptop displays.  Certain other composite
          monitors and cards may also suffice.  


          What's New With AUDIO II?
          -------------------------

               Version 2.1 of AUDIO II has the following enhancements
          and/or improvements:

               -Ability to save inserts to disk
               -Ability to retrieve saved inserts
               -Improved finished cassette insert 
               -Improved configuration facility
               -More extensive on-line help 
               -New screen design
               -Input support for extended ASCII characters (128-254)
               -Improved I/O error checking
               -Faster windowing
               -Minor bug fixes 
               -All new documentation



























          Printers Supported
          ------------------

          The following printers have been tested using AUDIO II and
          appeared to work fine:

               Citizen MSP 50/55                  IBM Graphic Printer
               EPSON MX/RX/FX 80/100              NEC Pinwriter P6
               EPSON LQ-1500                      Okidata Microline 92
               IBM Proprinter                     Panasonic 1901i
               IBM Proprinter XL                  Toshiba 321SL

          Other printers are also supported but, have not been tested.  See
          your printer manual for control codes and settings.


          Starting AUDIO II
          -----------------

          The format for using AUDIO II is as follows:

               A>AUDIO {C} 

          The C option is optional and should be used only on systems with
          a composite, monochrome or LCD display. 
                 
          After you load AUDIO II from DOS the main program/data entry
          screen will appear.  The cursor will be positioned in the field
          TITLE and you're ready to begin.


          Explanation of FIELDS
          ---------------------

          The following entry fields are used in AUDIO II:

          TITLE:  There are two fields called title.  These fields can be
               used to enter the name of the artists or groups.  The fields
               will be printed in bold on separate lines one above the
               other and will be located on the end of the insert.  These
               can be used to represent the titles of side a or b, or the
               tape as a whole. 

          HEAD A/B:  These fields are used to enter the headings to be
               printed on the side face of cassette insert.  They can be
               used to represent the name of the artist's cassette.  They
               will be printed above the songs on the large insert face.

          DATE A/B:  These fields are initially set to the current system)












               date.  The dates may be edited or simply deleted although,
               deletion is not necessary to omit them from the printed
               insert (see Special Keys, Alt-P).  The dates will be printed
               on the short side of the insert below the leader bar lines,
               (if they are printed).





          SONGS:  These fields are used to enter the actual songs or works. 
               The numbers to the left are for reference purpose only
               although, they may be printed (see Special Keys, Alt-P). 
               The songs are printed in two columns one for side a and the
               other for side b.  They will be located on the large face of
               the insert. 

          The fields do not necessarily need to be used for the purpose
          they were intended.  You may create your own style of insert by
          experimenting with the options.  If in doubt about the insert
          format print one of the sample inserts.


          Editing Keys
          ------------

          Up, Down Arrows:  Moves the cursor up and down one field at a
               time.
           
          Left, Right Arrows:  Moves the cursor left or right within field.
               Note:  not left a field/right a field.

          Alt-D:  Deletes field cursor is in.

          Alt-E:  Erases all fields.  An "Erase Entire Screen?" window will
               appear as a precautionary measure.  Simply type "Y" or "N"
               for Yes or No to continue.
           
          Ctrl-Right Arrow, Tab:  Moves the cursor to the next field to the
               right.

          Ctrl-Left Arrow, Back-Tab:  Moves the cursor to the next field to
               the left.

          Enter:  Moves the cursor to the next logical field.

          Del:  Deletes character under cursor.

          Backspace:  Deletes one character before cursor and moves the
               cursor back one space.































          Special Keys
          ------------

          Alt-P:  Used to print the cassette insert with the 
          following options:

               EPSON non-ASCII Leader Bars:  Used for Epson printers not
               supporting extended ASCII character set (128-254).  The two
               leader bar lines will be printed using bit-image mode. 

               ASCII Line Characters & Bars:  For printers supporting the
               upper-ASCII character set you may use this option to print
               an insert which uses the line-drawing characters to produce
               the insert dividers.  This option is recommended for
               printers that support it.

               Include Date on Insert:  If you wish to have the date
               printed on the leading flap use this option.  Dates for side
               A and B will be printed beneath the leader bars (if
               printed).

               Number Song Titles:  Use this option is you wish to have
               songs preceded by their placement number

               Eject Paper After Printing:  Used to send a form  feed to
               the printer after the insert is printed.

               All options may be temporarily changed by entering "Y" for
               Yes and "N" for No.  The options may be moved through by
               using the cursor and enter keys.  After the desired options
               are set the insert may be printed by pressing the End key. 
               If the printer is not ready an error message will be shown. 
               Simply press a key if this occurs to return to print window
               and check your printer to make sure it is on line.  Pressing
               ESC while in the print window will abort to the main editing
               screen. 


          Alt-C:  Used to configure the printer codes and set default












          printing options using the following fields:

               Printer Initialization String
               Printer Normal Font String
               Printer Condensed Font String
               Printer Enable Bold String
               Printer Disable Bold String

               Default EPSON non-ASCII Leader Bars
               Default ASCII Line Characters & Bars
               Default Include Date on Insert
               Default Number Song Titles
               Default Eject After Printing

               Program/Help/Configuration Directory
               File Retrieve/Save Directory 




          The printer strings may be changed to support your printer by
          enclosing any control code numbers in the <> symbols.  Example: 
          Use <27> for control code number 27, ESC.  All control code
          numbers must be two digits for proper operation.  Example:  Use
          <09> instead of <9>.  Non-numeric control codes are entered
          without any enclosures.  Example:  A complete string to setup for
          international character set 0 and normal print on an Epson RX-80
          would be <27>R<00><18>.  See your printer manual for control code
          information specific to your printer. 

          The default settings may be changed by entering a "Y" for Yes and
          a "N" for No.  

          The save/retrieve and program/help/config directories are entered
          in the following format:

               [drive]:\[directory]\[sub-directory]...

          The paths must be valid or and error message will appear when any
          file operation is executed.  

          The settings can be saved to the file AUDIO.CNF by pressing the
          End key. When you start AUDIO II again the settings will be as
          you specified so there is no need to change them each time.

          If the configuration file is not in the default directory at run-
          time the configuration will change to the initial default and the
          configuration file will be unchanged.  A configuration will only
          activate if it is in the default directory.  


          Alt-H:  Used to bring up the On-Line Help window.  To use the
          help select the help topic from the bottom bar use the arrow keys
          and the enter key.  Help is available for configuration, editing,












          file operations, and printing.  Within the topic you may press
          PgDn to bring additional screens of help or PgUp to go to the
          previous screen.  Pressing ESC from the top menu will return you
          to the main editing window.


          ESC:  Used to exit AUDIO II and return to DOS.  Enter "Y" for Yes
          to return to DOS or "N" for No to continue on with AUDIO II. 


          Alt-R:  Use to retrieve an already saved insert file.  If you
          know then name of the saved file enter it at the first window
          saying "Filename:".  If you do not know the name or wish to see
          what files are available press Alt-R again to bring up a screen
          of insert files along with the two respective titles.  Use to
          cursor keys to select the desired file and press enter.  This
          will retrieve the file and return you to the editing screen with
          the information in place.  You may then directly print the insert
          or alter the information.  Pressing ESC form either retrieve
          window will return you to the main editing screen.





          Alt-S:  Used to save a cassette insert.  A window will appear in
          which you may enter an eight character file name.  Pressing ESC
          will abort this operation and return you to the main editing
          window.

          The DOS filename of the insert will have an extension of ".ADF"
          and be located in the File Save/Retrieve Directory.  It is
          advisable to have this directory different from the main program
          directory for ease-of-use.


          Final Notes
          -----------

               When you are finished printing your insert simply cut along
          the dotted outside lines and fold along the first two horizontal
          lines.  Then either put it in place of the cardboard insert
          supplied with the cassette or place it over it.  That's all there
          is to it!  


          About The Author
          ----------------

          My name is Rod Whisnant and I am a recent college graduate from
          Central Missouri State University with a B.S. in Computer Science
          and Mathematics.  I have been programming for approximately 6
          years. I enjoy music and have a wide variety of musical tastes
          and began writing this program as a way to combine my musical and












          computer interests.  It has taken many hours but, I feel the
          effort is worth it.  I hope you enjoy this program as much as I
          did writing it.


          Field Lengths
          -------------

          The following is a list of field lengths that may be helpful in
          determining input.

               TITLE               30 characters
               HEAD A              28 characters
               HEAD B              29 characters
               DATE                 8 digits (only 6 editable)
               SONGS (A)           30 characters
               SONGS (B)           29 characters
               PRINTER STRINGS     34 characters
               DEFAULT SETTINGS     3 characters (only 1 editable)
               DIRECTORIES         34 characters










                        AUDIO II Version 2.1 REGISTRATION FORM
                        --------------------------------------


          Mail To:    Rod Whisnant
                      7501 Donal Avenue
                      Liberty, MO  64068


          SERIAL Number of AUDIO II Version 2.1:  _______________
          (found in left hand corner of main screen)

          Registration for AUDIO II    _____ x $10.00 per copy  = _______
          (includes next version when available)

          Copies of AUDIO II ver. 2.1  _____ x $5.00 per copy   = _______ 
          (non-registered)

                                                          TOTAL = _______
           

          NOTE:  Make all checks payable to Rod Whisnant.














          Thank you for your support of AUDIO II.  If you have any
          questions, comments or suggestions feel free to write them below.
          -----------------------------------------------------------------
























































```
{% endraw %}

## FILE1438.TXT

{% raw %}
```
Disk No: 1438
Program Title: AUDIO II version 2.1
PC-SIG version 1

AUDIO II prints nice looking and easy-to-read label inserts to identify
your personal recordings on audio cassettes.  The program is designed to
help you organize your music collection, but may also be used to neatly
label recordings of lectures, notes, sound clips, etc.

Eliminated, from this point forward, is the tedious process of writing
on the cassette inserts supplied with the blank audio cassettes.  All
your recordings will now have custom printed inserts that will make
finding particular selections less of an eye strain, while bringing a
professional look of quality to your entire collection.

Each cassette insert contains; two Title lines - for names of artists or
groups, Head A/B - these fields are used to enter the headings to be
printed on the two sides of the insert, Date A/B - the current date is
used or you can change it if you like, Songs - a list of the songs on
each side of the cassette.

AUDIO II is menu driven with on-line help to answer your questions.

Synopsis:  Print custom, professional looking label inserts to
identify recordings you've made on audio cassettes.

Usage:  Entertainment/Printer Utility/Audio Cassette Labels Inserts.

System Requirements:  Printer.

How to Start:  Type GO (press enter).

Suggested Registration:  $10.00

File Descriptions:

AUDIO    COM  Main program.
AUDIO    DOC  Documentation.
AUDIO    EPS  Documentation.
AUDIO    HLP  Help file.
AUDIO    REG  Registration form.
AUDIODOC BAT  Batch print file.
READ     ME   Small text file.
SAMPLE1  ADF  Sample files.
SAMPLE2  ADF  Sample files.
SAMPLE3  ADF  Sample files.
SAMPLE4  ADF  Sample files.

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
║                    <<<<  Disk No 1438 AUDIO II  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type AUDIO (press enter)                          ║
║                                                                         ║
║ To look at the documentation on your screen, type VIEW (press enter)    ║
║                                                                         ║
║ To copy the documentation to your printer, type AUDIODOC (press enter)  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1438

     Volume in drive A has no label
     Directory of A:\

    AUDIO    COM     57523   1-01-80   1:15a
    AUDIO    DOC     17772   1-01-80  12:10a
    AUDIO    EPS     17995   1-01-80  12:11a
    AUDIO    HLP      7690   1-01-80  12:12a
    AUDIO    REG      1030   1-01-80  12:12a
    AUDIODOC BAT      1975   1-01-80  12:12a
    FILE1438 TXT      1838   6-02-89  10:47a
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       694   6-02-89  10:49a
    PAGE     COM       325   1-06-87   4:21p
    READ     ME       1045   1-01-80  12:12a
    SAMPLE1  ADF      2430   1-01-80  12:12a
    SAMPLE2  ADF      2430   1-01-80  12:13a
    SAMPLE3  ADF      2430   1-01-80  12:13a
    SAMPLE4  ADF      2430   1-01-80  12:13a
    VIEW     BAT        37   6-02-89  10:50a
           16 file(s)     117682 bytes
                           37888 bytes free
