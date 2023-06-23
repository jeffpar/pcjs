---
layout: page
title: "PC-SIG Diskette Library (Disk #3276)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3276/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3276"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## 2COL.DOC

{% raw %}
```
                                 2col

                         Shareware Version 3.4

                      A Compressed Print Utility

                            Copyright 1992
                                  by

                          ARCaine Technology
                            960 Neilson St
                           Albany, CA 94706
                            (510) 527-9859

                          All Rights Reserved




YE OLDE DISCLAIMER

  This software and manual are sold "as is" and without warranties
  as to performance or merchantability or any other warranties
  whether expressed or implied. Because of the various hardware and
  software environments into which this program may be put, no
  warranty of fitness for a particular purpose is offered. The user
  must assume the entire risk of using and evaluating this program.
  Any liability of the seller will be limited exclusively to product
  replacement or refund of purchase price.



Introduction

  2col prints an ASCII text file in two columns,each up to 80
  characters wide, on standard width paper. It eliminates
  consecutive blank lines and prints at 20 characters/inch.

  2col is designed to be extremely easy to use. The default settings
  will accommodate most printing needs. On most  9-pin printers
  you can print a document by simply typing: 2COL [filename] <enter>
  For example, to print this manual type:2COL 2COL.DOC <enter>
  On 24-pin printers you must also include -Q on the command line.
  To see a demonstration of 2COL's many print modes you can
  type: DEMO2COL [9 or 24] <enter>

  2col is intended to greatly reduce the huge volume of paper that
  results from printing reference manuals and text files. Regular
  use of this program should cut your paper bill by 60 to 70
  percent. It provides excellent readability (unlike other
  compressed print programs) while compressing an average of
  four pages of source material onto one side of a sheet of
  paper. By using its even/odd alternate side print feature eight
  pages of text can be printed using both sides of a page. Since the
  normal draft mode of printing is used it is also much faster than
  those programs which rely on nonstandard print modes.

  By reducing the volume of paper, 2col also reduces storage
  requirements and the bulk one has to carry around when traveling.
  It can also save you money when faxing or mailing documents.

  As a side benefit, many 2col users actually find it easier and
  faster to read the compressed versions than the originals because
  they can take in more words at one time without having to scan
  across the page.

  2col will optionally print in subscript mode - doubling the amount
  of text contained on a single sheet to a total of sixteen pages -
  with a significant loss in legibility and printing speed. This
  mode is intended mainly for archival use not for documents that
  will be read frequently.

  This program will work on most Epson-compatible dot-matrix
  printers which provide 17 characters/inch compressed printing but
  is especially intended for newer printers which have a
  compressed/elite mode (20 char/in) allowing two complete 80
  character lines to be printed across the page. Printers which
  support 20 char/inch include:KXP1180, KXP1124, FX86, 200GX,
  LQ-series, etc. If you have a 17 char/inch printer see the
  registration section below about obtaining a word-wrap utility.

  Since most printers do not show the 20 char/inch mode on the front
  panel, you should check the manual or just try printing with 2col.
  If your printer supports 20 char/in but does not operate properly
  with 2col, contact me, and I will let you know if it is possible
  to provide you with an updated version that is compatible with
  your printer.


IMPORTANT!

  The 20 char/in mode on many printers cannot be accessed by
  software if the DIP switches inside the printer are set for IBM
  mode. The printer MUST be set for the Epson/Standard mode. 2col
  will optionally supply the control characters to cause the full
  IBM character set to print. Also, your printer should have the
  auto linefeed switch turned off. If your printer has a front panel
  pitch control, it should be set to program mode. On most printers
  it is okay to set a specific font from the front panel as long as
  the pitch is left in program mode.


Registration

  I will keep improving the program if I know enough people are
  finding it useful.

  My registration policy is very flexible. The nominal fee is $20 US
  If you don't feel you will get $20 worth of use out of 2COL, send
  whatever it is worth to you. If you are impoverished and can't
  afford to pay anything, enclose a stamped self-addressed envelope
  and I will send you a registration.

  This is not freeware or public domain. Shareware is simply a means
  of marketing commercial software. You are required to register if
  you intend to use this program after a reasonable trial period.

  When registering, please tell me the version number you have, your
  printer model, and where you obtained your copy of 2col.
  Registration checks should be made payable to "Tony Caine".

  2col should be registered for the maximum number of copies that
  can be used simultaneously at your site. Site fees for commercial
  users can be negotiated.

  If you register for the full $20 fee and include a $3.95 Shipping
  and Handling fee I will send you the latest versions of 2COL and
  JETCOL (for lasers). JETCOL requires a separate registration fee
  if you decide to use it after a trial period. I will also send a
  shareware word wrap program (by another author) which can be used
  to expand or contract the column width of documents before
  printing. This is particularly useful for those with 17 char/inch
  printers which cannot print two full 80 character columns. The
  word wrap program requires a $10 registration fee if used past 30
  days.

  ATTENTION CURRENTLY REGISTERED USERS:
  The new customized default settings required that I change over to
  individualized registration numbers. This means that currently
  registered users will need to upgrade ($10 fee) to use this new
  version.

Registered version features



* Custom default settings

   2COL's default settings can be modified by the user. This
   eliminates the need for the user to enter a string of options
   whenever they run the program. They need only enter the filename.


* Automargin

   The automargin option is extremely useful for those who need to
   punch holes for binding. 2col scans the entire document before
   printing and, in effect, moves all the available "white space"
   from the center (and, if necessary,from the right margin) of the
   document to the left margin.

   To get an idea of how Automargin operates, type: 2COL 2COL.DOC
   <enter>. This will print with the default settings of 2col. Then
   type: 2COL 2COL.DOC -K -U8 <enter>. This will print a one page
   demo using automargin.


* Multiple document names

   Multiple document names and wildcards can be entered on the
   command line.


* Append

   When specifying multiple documents to print, registered users
   have the choice of starting each file at the beginning of a page
   or treating all documents as one continuous file without breaks.


* Redirection of output

   Registered users can choose to send the output to a disk file for
   later printing in background (while running other programs) or
   they can send to LPT2, COM1, COM2, etc.


* Pagefix

   Prints a specified number of pages per column retaining original
   line spacing and page breaks.


* The registration screen is eliminated, of course.



Terminology

  Since several pages from the original source file are combined
  onto a single page of printer output, there may be some confusion
  about the word "page." We will always refer to the original
  document pages as "source pages." What is actually printed will
  simply be called "pages."



Usage:

  2col  [options] path\filename [options] [path\filename]...


  Options (except -Yx) may be specified in any order before and/or
  after the file name(s). Options MUST be separated from each other
  by spaces and preceded by a "-". Upper and lower case are
  interchangeable.




  Options are defined as follows:

   -Lxx = Each column will be xx lines long
   -Cxx = No more than xx consecutive blank lines will be printed
   -Sxx = Skip xx pages before starting to print
   -O   = Print only odd # pages
   -E   = Print only even # pages
   -Wxx = column width (number of characters in each column)
   -P   = Pause before printing each page.
   -N   = Prints filename and page # at lower left corner
   -D   = Delimit each (source) page with a line and page #
   -T   = Truncate long lines instead of wrap.
   -G   = Enable full IBM graphics set.
   -Fx  = Put a margin of x blank lines at the top of each page.
   -K   = Print a one page demo in registered mode.
 * -Mx  = Set left margin.(CAUTION:READ INSTRUCTIONS BEFORE USING)*
   -?   = 2COL will ask for filenames to print.
   -Q   = 24-pin printer line spacing
   ?    = (no dash) Prints help screen. Must be the only option.

                *Options for registered users only*

   -A   = Append multiple files.
   -Z   = Route output to disk.
   -Ux  = Scans file before printing and sets margins automatically.
   -Xx  = Print x pages/column preserving page breaks & format
   -Yx  = Customize 2COL default settings.


  When more than 102 lines/page requested,shifts to subscript
  (half-height) mode. When column width is less than 69 chars,uses
  compressed mode (17 char/in.) When column width is greater than
  68 uses compressed/elite (20 char/in.)

  Defaults: 80 characters/column;88 lines/page;1 consecutive blank
           line; no pause before printing page; do not number pages;
           wrap (not truncate) long lines;4 blank lines at top of
           page.


Description of options


   -Lxxx

      Each column will contain xxx lines of data. Line spacing will
      be automatically adjusted to approximately fill the page.
      Characters will be normal (pica) height until more than 102
      lines/column are specified; printer will then shift to
      subscript mode allowing up to 220 lines/column. Default value
      is 88.


    -Cxx

      Pages of text frequently contain many blank lines of data.
      Experience has shown that most of these can be discarded
      without sacrificing readability. This option specifies that
      when there are more than xx consecutive blank lines, the
      excess will be discarded. If you set xx=66, 2col will print
      each page in its original format without discarding any blank
      lines. The default value is 1.


    -Sxx

      This feature is useful if you have a paper jam or decide to
      print part now and part later. Using this option will cause xx
      pages to be skipped before printing begins. For example,
      specifying "-S2" will cause printing to begin with page 3.


    -O

      This and the -E option allow you to print on both sides of
      each sheet of paper. By specifying "-O", only the odd numbered
      pages will be printed. When printing is complete,reload the
      first page back into the printer with the blank side facing
      the print head and rerun 2col using the -E option.

      Alternatively, 2COL will ask you whether you want to print the
      even pages after it has finished printing the odd. Respond "Y"
      after the paper has been reloaded or type "X" to terminate.

    -E

      Prints only even numbered pages. When using this option after
      the -O option be sure to shift the paper about 1/2 inch to the
      right before starting to print, to allow space for hole
      punching or other binding requirements.


    -Wxx

      This option specifies how wide each column will be. Wrapping
      or truncating will begin at this position. It also determines
      the print density. If xx is 68 or less, the printer will use
      compressed mode (137 characters across the page). If xx is 69
      or larger the printer will use compressed/elite (160
      characters/line). If your printer does not support
      compressed/elite and you try to use it, you will end up with a
      mess. You should then specify xx as 68 and decide whether you
      want to truncate long lines or wrap them. Since 2COL wraps
      in mid-word you might want to obtain a shareware word wrapping
      program. I can supply several when you register. See the
      "registration" section of this document for details.


    -P

      Program will pause before printing each page. Hit any key to
      print a page. This option is useful if you are feeding single
      sheets to the printer.


    -N

      This will cause the filename and page number to be printed in
      the lower left-hand corner of each sheet. To avoid confusion
      when using the -S, -O and -E options the page numbering is not
      reset for each document when multiple documents are specified
      on the command line(registered version only).


    -D

      If you need to keep track of each source page, this option
      will print a dashed line with a page number in the middle
      whenever a form feed is encountered or after 66 lines of data.
      Experience has shown that this option will be rarely used
      because most documents either number their own pages or it is
      just not important to keep track of original page breaks.


    -T

      Normally when lines longer than the specified column width are
      encountered, 2col will wrap the data to the next line. If you
      prefer to truncate or discard excess characters on a line, you
      should invoke this option.



    -G

      Sends control codes to enable full IBM graphics set (ASCII
      128-255). The graphics set includes line drawing characters
      and foreign alphabets.




    -Fx

      2col will insert x blank lines at the top of each page before
      printing. The default is 4.


    -Mx

      CAUTION: IMPROPER USE OF THIS OPTION WILL CAUSE YOUR PRINTER
      TO PRINT PAST THE BOTTOM OF THE PAGE.

      This command sets the left margin x spaces from the edge of
      the page. Default is 0. Use this option with caution! Most
      standard width printers only have 160 print positions across
      the page. If you insert spaces with a margin command, the
      printer will wrap characters that go past the 160th print
      position to the left side of the page, causing  extra lines
      to be inserted. If you use a left margin of 5, for example,
      you might have to set the column width to -W77 to prevent
      wraparound (this is only necessary if printable characters
      would be pushed past the 160th column- blanks don't matter).

      The easiest way to achieve a left margin without having to
      worry about characters wrapping is to use the Automargin
      option (-Ux) described below.

      Given the limitations of standard width printers, it is
      suggested that you permanently shift your paper several spaces
      to the left. You can adjust your word processor margin
      settings to compensate, so that normal printing will be
      unaffected.


    -K

      Including this option on the command line allows any
      registered option listed below to be used, but only for a
      one page demo. This option allows you to explore the
      options available to registered users.


    -?

      Instructs 2COL to ask for files to print once it is running.
      You can specify files both on the command line and when 2COL
      asks for filenames. Separate the file names with spaces. This
      option is useful when 2COL is run from a menu or a Windows
      icon.


    -Q

      Adjusts line spacing for 24-pin printers. If you have a 24-pin
      printer and do not use this option, pages will print too long.



      ***Options below are only in the registered version of 2col***



    -Yx

      The -Y option allows you to modify 2COL's default settings.
      This MUST always be the first option on the command line
      whenever you use it.

      Typing "2COL -Y1 <enter>" will cause 2COL to display all
      current default settings.

      Typing "2COL -Y2 [options....] <enter>" will cause 2COL to
      permanently remember those options by modifying the 2COL.EXE
      program itself. Your personal registration code MUST be one of
      the options specified. All option settings not specified on the
      command line will be reset to the standard defaults. The next
      time you run 2COL the options you specified will automatically
      be used.

      For example, if you want to set the number of lines/page to
      102 and print the page numbers at the bottom, you would type:
      2COL -Y2 -L102 -N registration code# <enter>. The next time
      you type 2COL [filename] <enter> It would be as though you had
      typed: 2COL -L102 -N registration code [filename].

      If there are several different option profiles you wish to
      use, you can create different copies of 2COL.EXE with
      different names, such as 2COL1.EXE, 2COL2.EXE, etc. The -Y2
      option only modifies the EXE file having the same name and
      path that you type on the command line.

      All defaults with an 'x' value can be temporarily overridden
      with a different value on the commmand line. Any option
      without an 'x' value can be activated from the command line.
      To temporarily deactivate an option set as a permanent
      default, type a minus after the option. For example, to
      temporarily deactivate the N option, you would put -N- on the
      command line: 2COL -N- [filename]

      THIS FUNCTION WILL NOT WORK ON .EXE FILES THAT HAVE BEEN
      COMPRESSED WITH PKLITE. You must first decompress, use the -Y2
      option and then recompress.


    -A

      When multiple files are specified on the command line
      (registered version only) you have the option of either
      starting a new page for each file (default) or appending them
      as though they were one continuous file. The -A option causes
      them to be appended.


    -Ux

      The aUtomargin function allows you to obtain as much margin as
      possible according to the format of the document. 2col scans
      the entire document before printing and adjusts the column
      width to gain as much space on the print line as possible.
      The space obtained is allocated to the left margin until the x
      value you entered is reached. The remaining space, if any, is
      then added to the right margin.

      If you have specified the -E option (to print on the reverse
      side of the page), the first available space is used to create
      a right margin (for binding) rather than a left margin.


    -Zfilename

      Allows output to be routed to a file instead of to the
      printer. The file can then be printed in background while
      running other programs. For example, to send output to a file
      called PRINT.TXT, you should include -ZPRINT.TXT on the
      command line.If PRINT.TXT does not exist, it will be created.
      If PRINT.TXT already exists, 2col output will be appended to
      the end of the file. This command is only active in the
      registered version of 2col. This option can also be used to
      redirect output to LPT2, COM1, COM2, etc.


   -Xx

      Prints exactly x pages in each column preserving original page
      breaks and not suppressing consecutive blank lines. Thus the
      original page formatting is maintained. Allowed range of x
      is 1-3.
                         -X option page formats:

             x=1                  x=2               x=3

           111 222              111 333           111 444
           111 222              111 333           111 444
           111 222              111 333
           111 222                                222 555
           111 222                                222 555
           111 222              222 444
           111 222              222 444           333 666
           111 222              222 444           333 666



Examples:

2COL 2COL.DOC -L102 <enter>  will print 102 lines/column

2COL 2COL.DOC -L102 -N will print 102 lines/column and number pages.

2COL 2COL.DOC -G -N  will number pages and enable IBM graphics set.




Using 2COL with a word processor

    2COL will not work with most word processor documents in their
    original form; but most word processors have what is called an
    ASCII output or DOS output mode which 2COL will work with.

    For example, with WordPerfect, you can create a 2COL usable
    file with the sequence: Control-F5,1,Save.



Distribution

    Permission is hereby given to copy and distribute this program
    as long as no fee other than a minimal ( <$10 ) handling cost is
    charged. It must be made clear to the buyer that this is only a
    handling charge and not a registration fee.Please include all
    files in their original unmodified form when distributing this
    program. Permission to distribute may be revoked by the author
    at any time for any reason.

    YOU MUST NOT DISTRIBUTE ANY COPY WHICH HAS BEEN BRANDED WITH
    A REGISTRATION CODE. A program can be unbranded by typing
    2COL -Y2 <enter>.



                                                     -Tony Caine-

GEnie mail:A.CAINE
```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
                             2COL34 REGISTRATION


Due to popular request, I am now providing a registration form to make
life easier for those wishing to register. I resisted doing this in the past
because I enjoyed receiving and responding to the free form registrations that
came with comments and other personal notes. I encourage everyone not to treat
this document in too businesslike a fashion.Feel free to put suggestions,
messages, drawings, your dog's pawprint, or whatever you wish at the bottom of
the page :-)

The nominal registration fee of 2COL is $20 US. The registration fee is on a
sliding scale. Read 2COL.DOC and the opening screen of 2COL to get a better idea
of what this means. If in doubt, just pay $20. You can't go wrong by doing that.

If you want to receive the latest version of 2COL, you must register for the
full $20 and also include a Shipping and Handling fee of $3.95.

The upgrade fee for curently registered users is $10.


Name______________________________________


Address___________________________________


Address___________________________________


City,State,Zip____________________________


Phone_____________________________________


I obtained 2COL from___________________________


My printer is a ___________________________


Number of copies of 2COL_________ X Reg. Fee$__________  =$_____________

Please register for the maximum number of copies that can be used simultaneously
at your site. In other words, treat it like a book.

Make check payable to Tony Caine and mail to:

ARCaine Technology
960 Neilson Street
Albany, CA 94706

Thank you for registering 2COL.

This is where you get to put notes, comments, whatever.
(use other side if necessary)
```
{% endraw %}

## CDROM.TXT

{% raw %}
```
        T h e  P C - S I G  L i b r a r y  o n  C D - R O M


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

This may well be the greatest collection of software ever compiled.

The PC-SIG Library on CD-ROM is our premier collection of the entire
PC-SIG library. It has over 3000 different, and complete applications
for your every need.  Every shareware program we have is on one disc;
over 700 megabytes (unzipped) of software you can have immediate access
to.

Easy to use, all you have to do is insert the disc and type 'GO' at the
DOS prompt.  We've included all the tools you need for fast easy access
to the programs and their descriptions.

Whether you're interested in Accounting or Windows, there's a shareware
program for you on the PC-SIG Library on CD-ROM.

Winner of the Optical Publishing Assn's Best Consumer Product Award.

Shareware for every imaginable need: Accounting Chemistry Educational
Engineering Games Hypertext Networks Programming Spreadsheets Utilities
Word Processing

#             #             #
PC-SIG UPDATES PC-SIG LIBRARY ON CD-ROM

For Immediate Release


PC-SIG LIBRARY ON CD-ROM UPDATED TO INCLUDE A NEW USER INTERFACE AND MORE
THAN 800 MB OF PROGRAMS June 21, 1992, SUNNYVALE, CALIF. - PC-SIG, Inc.
today announced availability of The Eleventh Edition of the PC-SIG Library
on CD-ROM.  The PC-SIG Library on CD-ROM contains over 800 megabytes of
shareware and includes more than 300 new programs, 550 updated programs,
and the addition of 75 megabytes of Windows 3.x shareware.  The
user-interface has been completely re-engineered to take advantage of the
HyperWriter! hypermedia and multimedia authoring system from NTERGAID, Inc.

The implementation of HyperWriter! provides significant performance and
ease of use enhancements.  Programs can access and download much faster
than with previous editions.  Programs have been reorganized and indexed
for better referencing.  Users just c lick with a mouse, or point with the
cursor, on a program name to see a complete description of the program.
Downloading or copying a program is handled automatically by HyperWriter!
Addition of a preview option is especially important for anyone who uses
images, icons, or fonts.  "You can preview the whole library of images to
find the right one," according to Bruce Kent, product development manager.
"This CD finally makes it possi ble to conserve your disk space and paper,
yet still have all the information you need to make an informed decision,"
said Kent.

All new and updated programs have been reviewed and tested by PC-SIG. Every
program goes through extensive virus checking using the most recent version
of VIRUSCAN from McAfee Associates, and other anti-virus software.
According to Kent, "In the ten ye ars we've distributed shareware, we have
never had a confirmed report of a virus on any of our distributed programs
or CD-ROMs."

The PC-SIG Library on CD-ROM, Eleventh Edition has a list price of $179.

Upgrades from previous editions are available for $99.

Users of PC-SIG's Essential Home & Business Collection CD-ROM can upgrade
for $120.

PC-SIG CD-ROMs are distributed worldwide through a network of distributors
and resellers. Based in Sunnyvale, Calif., PC-SIG, Inc. markets and
supports one of the world's largest collections of shareware for IBM PCs
and compatible systems.  PC-SIG also publishes Shareware Magazine, which is
devoted solely to shareware.  The magazine is availa ble by subscription
and on newsstands nationwide.

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 640K memory, DOS 3.1 or higher and
Microsoft MS-DOS CD ROM extensions, and a hard drive. Microsoft compatible
mouse supported and VGA highly recommended.

To Order in the U.S.A.: Call 800-245-6717 and ask for Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## JETCOL.DOC

{% raw %}
```
                                JETCOL

                         Shareware Version 1.5

                      A Compressed Print Utility

                            Copyright 1992
                                  by

                          ARCaine Technology
                            960 Neilson St
                           Albany, CA 94706
                            (510) 527-9859

                          All Rights Reserved



YE OLDE DISCLAIMER

  This software and manual are sold "as is" and without warranties
  as to performance or merchantability or any other warranties
  whether expressed or implied. Because of the various hardware and
  software environments into which this program may be put, no
  warranty of fitness for a particular purpose is offered. The user
  must assume the entire risk of using and evaluating this program.
  Any liability of the seller will be limited exclusively to product
  replacement or refund of purchase price.


Introduction

  JETCOL prints two columns, each up to ninety characters wide, on
  laser printers in portrait mode. It is intended to greatly
  reduce the huge volume of paper that results from printing
  reference material (such as shareware manuals), word processing
  drafts and text files. Regular use of this program should cut your
  paper bill by 60 or 70 percent. It can also save you money when
  faxing or mailing documents.

  JETCOL has been designed to be very easy to use. Its default
  settings should cover most printing needs. To print a document you
  simply type:JETCOL filename <enter>. For example, to print the
  manual type:JETCOL JETCOL.DOC <enter>.

  It provides better readability than other compressed print
  programs because it normally ignores page breaks and eliminates
  consecutive blank lines (at your option).By eliminating
  more unnecessary white space on the page JETCOL can use a
  larger,more readable, type face while printing the same number of
  average pages/sheet as other compressed print programs. It is
  designed to take maximum advantage of laserjet features to further
  enhance readability. JETCOL will print anywhere from two to ten
  pages of source material on one side of a sheet of paper. By using
  its even/odd alternate side print feature four to twenty pages of
  text can be printed using both sides of a page.

  By reducing the volume of paper, JETCOL also reduces storage
  requirements and the bulk one has to carry around when traveling.

  As a side benefit, many JETCOL users actually find it easier and
  faster to read the compressed versions than the originals because
  they can take in more words at one time without having to scan
  across the page.

  JETCOL has been tested on several brands and models of laser
  printers. If you run into difficulty with your model, please let
  me know and I will try to provide a version that is compatible
  with your printer.

  Eight different font sizes have been specially designed for
  JETCOL. These fonts are automatically selected and downloaded
  according to the degree of compression requested when you specify
  the number of lines each column should contain with the -Lxx
  option (anywhere from 50 to 240).Also at the user's option JETCOL
  will override its automatic font selection and pick either a
  larger or smaller font for a given line spacing to provide either
  more or less white space between lines.

  The font is nominally pitched at 21.5 characters/inch to allow
  adequate space for a left margin and two 80 character columns.
  When either a smaller margin is specified (-Mx) or the number of
  characters/column is reduced (-Wx) the character spacing is
  automatically expanded for further readability. The default margin
  is nine spaces and the default column width is 80 characters.

  Some users have said that they would prefer a thinner font for
  JETCOL. I have provided a new thin font in the two most often used
  sizes: Fonts 6 and 7.

  A demo mode (-K) is now available to help you explore the
  registered features. The demo mode will activate all registered
  features but will only print one page. By running the file
  DEMOJET.BAT you will see examples of the many possible printing
  modes of JETCOL.

  JETCOL may be executed via a path statement but all font files
  must be located in the same sub-directory as JETCOL.EXE if they
  are to be found by the program when it comes time to download
  them.


Suitability

  Compressed print programs are not for everyone. You should
  carefully explore how much compression you are comfortable with
  before eyestrain becomes a problem. The greater degrees of
  compresssion are intended more for archival use than for documents
  which will be frequently read.

  This program should run on any PC compatible computer with at
  least 256K of memory.


Registration

  I will keep improving the program if I know enough people are
  finding it useful.

  My registration policy is very flexible. The nominal fee is $30 US
  If you don't feel you will get $30 worth of use out of the
  program,then send whatever it is worth to you. If you wish to
  receive the latest version along with your registration you must
  register for the full amount.

  This is not freeware or public domain. Shareware is simply a
  distribution method for commercial software. You are required to
  register if you intend to use this program after a reasonable
  trial period.

  The registered version of JETCOL permits multiple document names
  and wildcards to be used on the command line and eliminates the
  registration screen. It allows output to be directed to a file
  instead of the printer. It also allows the automatic font
  selection to be overridden to customize the document appearance to
  your taste as well as selection of thinner fonts. The standard
  registered version comes with 2 thin fonts and 8 regular fonts.
  The registered version also allows customizing of default
  settings.

  Please tell me the version number you have when registering and
  where you obtained your copy of JETCOL. Registration checks should
  be made payable to "Tony Caine". JETCOL should be registered for
  the number of copies that can be used simultaneously. In other
  words, treat it like a book.

  Site fees for commercial users can be negotiated.

  JETCOL comes with a full money-back guarantee.

  ATTENTION CURRENTLY REGISTERED USERS:
  The customized default settings required that I change over to
  individualized registration numbers. This means that currently
  registered users will need to upgrade ($15 fee) to use this new
  version.


Registered version features

Most of these features are activated by the (-K) demo mode option.

*Custom default settings

   JETCOL's default settings can be modified by the user. This
   eliminates the need for the user to enter a string of options
   whenever they run the program. They need only enter the filename.


* Automargin

   The automargin option significantly improves the readability and
   appearance of your document. It scans the entire document before
   printing, determines how much blank space there is and expands
   the lines to utilize this wasted space. The result is a less
   crowded, easier to read document.

   To get an idea of what the automargin does, first type: JETCOL
   JETCOL.DOC <enter>. This prints with the default settings which
   are designed to accommodate any documents up to 80 characters
   wide. Next type: JETCOL JETCOL.DOC -K -U9 <enter>. Compare the
   two printouts for readability and appearance.


*Fixpage

   Prints an exact number of pages/column. Original pagebreaks and
   formatting retained.


*Biasfont

   Modify font selection process to give you either more or less
   white space between lines.

*Thinfont

   Selects a thinner (less bold) font.


* Multiple document names

   Multiple document names and wildcards can be entered on the
   command line.


* Append

   When specifying multiple documents to print, registered users
   have the choice of starting each file at the beginning of a page
   or treating all documents as one continuous file without breaks.


* Redirection of output

   Registered users can choose to send the output to a disk file for
   later printing in background (while running other programs) or
   send to LPT2, COM1, COM2, etc.

* The registration screen is eliminated, of course.



Terminology

  Since several pages from the original source file are combined
  onto a single page of printer output, there may be some confusion
  about the word "page." We will always refer to the original
  document pages as "source pages." What is actually printed will
  simply be called "pages."



Usage:

  JETCOL  [options] path\filename [options] [path\filename]...


  Options may be specified in any order before and/or after the file
  name(s). Options must be separated from each other by spaces and
  preceded by a "-". Upper and lower case are interchangeable. Each
  option, no matter where it is located, will affect the printing of
  all files equally.




  Options are defined as follows:

   -Lxx = Each column will be xx lines long
   -Cxx = No more than xx consecutive blank lines will be printed
   -Sxx = Skip xx pages before starting to print
   -O   = Print only odd # pages
   -E   = Print only even # pages
   -Wxx = column width (number of characters in each column)
   -P   = Pause before printing each page.
   -N   = Prints filename and page # at lower left corner
   -D   = Delimit each (source) page with a line and page #
   -T   = Truncate long lines instead of wrap.
   -Fx  = Put a margin of x blank lines at the top of each page.
   -Mx  = Set left margin x spaces from the edge.
   -Rx  = Create a right margin of x spaces.
   -K   = Activates registered options for a one page demo.
   -?   = JETCOL will ask for filenames to print
   ?    = (no dash) Prints help screen. Must be the only option.

   ***Options below are available in the registered version only***

   -A   = Append multiple files.
   -Z   = Route output to disk or another port.
   -Bx  = Biases font selection toward larger or smaller fonts.
   -Ux  = Automatic margin and column width adjustment.
   -Xx  = Print an exact number of pages/column keeping page breaks.
   -H   = Select a thin (light) font
   -Yx  = Customize default settings

  Defaults: 80 characters/column;96 lines/page;1 consecutive blank
           line; no pause before printing page; do not number pages;
           wrap (not truncate) long lines;4 blank lines at top of
           page.




Description of options


   -Lxxx

      Each column will contain xxx lines of data. Line spacing will
      be automatically adjusted to fill the page. As more lines per
      page are requested smaller fonts are automatically selected.



    -Cxx

      Pages of text frequently contain many blank lines of data.
      Experience has shown that most of these can be discarded
      without sacrificing readability. This option specifies that
      when there are more than xx consecutive blank lines, the
      excess will be discarded. The default value is 1.


    -Sxx

      This feature is useful if you have a paper jam or decide to
      print part now and part later. Using this option will cause xx
      pages to be skipped before printing begins. For example,
      specifying "-S2" will cause printing to begin with page 3.


    -O

      This and the -E option allow you to print on both sides of
      each sheet of paper. By specifying "-O", only the odd numbered
      pages will be printed. When printing is complete,reload the
      paper back into the feeder so that it will print on the blank
      side and rerun JETCOL using the -E option.

      Alternatively, JETCOL will ask you whether you want to print
      even pages after it has finished printing the odd. Respond "Y"
      after the paper has been reloaded or type "X" to terminate.

    -E

      Prints only even numbered pages. When using this option after
      the -O option be sure to use a left margin setting of 0 to
      allow space for hole punching or other binding requirements on
      the right side of the sheet (this adjustment is made
      automatically when using the automargin option).


    -Wxx

      This option specifies how many characters will print across
      each column. Wrapping or truncating will begin at this
      position. It also determines the print pitch. The more
      characters/column you specify the smaller the space between
      characters.


    -P

      Program will pause before printing each page. Hit any key to
      print a page. This option is useful if you are feeding single
      sheets to the printer.


    -N

      This will cause the filename and page number to be printed in
      the lower left-hand corner of each sheet. To avoid confusion
      when using the -S, -O and -E options the page numbering is not
      reset for each document when multiple documents are specified
      on the command line(registered version only).


    -D

      If you need to keep track of each source page, this option
      will print a dashed line with a page number in the middle
      whenever a form feed is encountered or after 66 lines of data.
      Experience has shown that this option will be rarely used
      because most documents either number their own pages or it is
      just not important to keep track of original page breaks.


    -T

      Normally when lines longer than the specified column width are
      encountered,JETCOL will wrap the data to the next line. If you
      prefer to truncate or discard excess characters on a line, you
      should invoke this option.


    -Fx

      JETCOL will insert x blank lines at the top of each page
      before printing. The default is 4.


    -Mx

      This command sets the left margin x spaces from the edge of
      the page. Default is 9. This option also affects print pitch.
      The wider the margin you request the more crowded the
      characters will be on the page.


    -Rx

      Creates a right margin x spaces wide (in addition to the 1/3"
      non-printing area already on right side).Default is 0.

    -?

      Instructs JETCOL to ask for files to print once it is running.
      You can specify files both on the command line and when 2COL
      asks for filenames. Separate the file names with spaces. This
      option is useful when JETCOL is run from a menu or a Windows
      icon.



      ***Options below are active only in the registered version***

    -A

      When multiple files are specified on the command line
      (registered version only) you have the option of either
      starting a new page for each file (default) or appending them
      as though they were one continuous file. The -A option causes
      them to be appended.


    -Zfilename

      Allows output to be routed to a file instead of to the
      printer. The file can then be printed in background while
      running other programs. For example, to send output to a file
      called PRINT.TXT, you should include -ZPRINT.TXT on the
      command line.If PRINT.TXT does not exist, it will be created.
      If PRINT.TXT already exists, JETCOL output will be appended to
      the end of the file. This command is only active in the
      registered version of JETCOL. This option can also be used to
      redirect output to LPT2, COM1, COM2, etc.


    -Bx

      This option biases the font selection to pick either a larger
      or smaller font than would ordinarily chosen by JETCOL.
      Setting x to 1 picks the next larger font. If x is set to -1,
      it picks the next smaller font. If x is set to 2, it will skip
      two font sizes larger, and so on. This option is active for
      registered users only. Examples: -B1,-B2,-B-1,-B-2...etc. (do
      not insert any spaces).(registered version only)


    -Ux

      X is the number of left margin spaces you request. JETCOL
      scans the entire document to be printed to determine its
      formatting. Leading blanks in the document are taken into
      account to give you the exact left margin you requested.
      Column width is adjusted to accommodate the widest line
      in the document. The result is that lines are fully spread
      across the page and character spacing is maximized for best
      readability. (registered version only)


      The automargin option automatically puts the margin you
      requested on the right side of the page (for binding) if you
      are printing with the -E option (on the reverse side of the
      page.)

    -H

      Selects a light (thin) font instead of the standard font. If
      the thin font in the required size is not available the
      regular, bolder, font is substituted. The only thin fonts
      supplied with the standard registered version are sizes 6 and
      7.(registered version only)


    -Xx

      Prints exactly x pages/column retaining original formatting
      and page breaks. The value of x may be from 1 to 3.(registered
      version only)

    -Yx

      The -Y option allows you to modify JETCOL's default settings.
      This MUST always be the first option on the command line
      whenever you use it.

      Typing "JETCOL -Y1 <enter>" will cause JETCOL to display all
      current default settings.

      Typing "JETCOL -Y2 [options....] <enter>" will cause JETCOL to
      permanently remember those options by modifying the JETCOL.EXE
      program itself. Your personal registration code MUST be one of
      the options specified. All option settings not specified on
      the command line will be reset to the standard defaults. The
      next time you run JETCOL the options you specified will
      automatically be used.

      For example, if you want to set the number of lines/page to
      102 and print the page numbers at the bottom, you would type:
      JETCOL -Y2 -L102 -N registration code# <enter>. The next time
      you type JETCOL [filename] <enter> It would be as though you
      had typed: JETCOL -L102 -N registration code# [filename].

      If there are several different option profiles you wish to
      use, you can create different copies of JETCOL.EXE with
      different names, such as JETCOL1.EXE, JETCOL2.EXE, etc. The
      -Y2 option only modifies the EXE file having the same name and
      path that you type on the command line.

      All defaults with an 'x' value can be temporarily overridden
      with a different value on the commmand line. Any option
      without an 'x' value can be activated from the command line.
      To temporarily deactivate an option set as a permanent
      default, type a minus after the option. For example, to
      temporarily deactivate the N option, you would put -N- on the
      command line: JETCOL -N- [filename]

      THIS FUNCTION WILL NOT WORK ON .EXE FILES THAT HAVE BEEN
      COMPRESSED WITH PKLITE. You must first decompress, use the -Y2
      option and then recompress.



Using JETCOL with a word processor

    JETCOL will not work with most word processor documents in their
    original form; but most word processors have what is called an
    ASCII output or DOS output mode which JETCOL will work with.

    For example, with WordPerfect, you can create a JETCOL usable
    file with the sequence: Control-F5,1,Save.



Distribution

    Permission is hereby given to copy and distribute this program
    as long as no fee other than a minimal ( <$10 ) handling cost is
    charged. It must be made clear to the buyer that this is only a
    handling charge and not a registration fee.Please include all
    files in their original unmodified form when distributing this
    program. Permission to distribute may be revoked by the author
    at any time for any reason.

    YOU MUST NOT DISTRIBUTE ANY COPY WHICH HAS BEEN BRANDED WITH
    A REGISTRATION CODE. A program can be unbranded by typing
    JETCOL -Y2 <enter>.

                                                     -Tony Caine-

GEnie mail:A.CAINE
```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
                             JETCOL REGISTRATION


Due to popular request, I am now providing a registration form to make to make
life easier for those wishing to register. I resisted doing this in the past
because I enjoyed receiving and responding to the free form registrations that
came with comments and other personal notes. I encourage everyone not to treat
this document in too businesslike a fashion. Feel free to put suggestions,
messages, drawings, your dog's pawprint, or whatever you wish at the bottom of
the page :-)

The registration fee of JETCOL is $30 in quantities less than five. Please
register according to the number of computers that JETCOL can run on
simultaneously at your site.

The upgrade fee for currently registered users is $15.

Name______________________________________


Address___________________________________


Address___________________________________


City,State,Zip____________________________


Phone_____________________________________


I got my copy of JETCOL from________________________


Number of copies of JETCOL_________ X Reg. Fee$__________  =$_____________

Make check payable to Tony Caine and mail to:

ARCaine Technology
960 Neilson Street
Albany, CA 94706

Thank you for registering JETCOL.

This is where you get to put notes, comments, whatever:
(use other side if necessary)

```
{% endraw %}

## PCSIG.TXT

{% raw %}
```


                            P C  -  S I G





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Welcome to the world of Shareware, state of the art software you can
actually try before you buy.

Shareware, a term coined in the early eighties, refers to the method of
distribution chosen by the software authors.  With shareware, you can
receive a program and put it through its paces without having to pay for
it. If you find the program useful, and choose to keep the program, then
you pay a modest registration fee to the author.

For the last nine years, PC-SIG has been providing shareware and public
domain software to its customers and members.  Since 1982 PC-SIG has
developed an unprecedented library of shareware programs, constantly
updated, consistently strong in every category.  Our library of
shareware contains over 2700 titles divided into 120 logical categories.

Every program we add to the library is thoroughly reviewed and tested to
insure that each one meets the high standards of reliability and value we
insist upon and you expect.  As a result, our library doesn't contain
every shareware program available, just those that really work.

PC-SIG has grown into the premier distributor of shareware and and
shareware information by producing shareware collections on CD-ROM,
publishing an encyclopedia of shareware, and by publishing Shareware
Magazine, a bi-monthly magazine distributed world-wide.

Quality and support - guaranteed.  All of our programs are guaranteed
virus free.  We've isolated our systems and check every program
submitted to insure that no viruses make their way to your computer or
ours.

Our support staff is available by phone as well as on our BBS to help
you with questions about installation and operation of PC-SIG's
products.

Through our network of international distributors, PC- SIG strives to
bring you the most current, exciting, technically advanced software
available as shareware.

If you can't find the software you need in PC-SIG's library, it may well
not exist.

To order the latest in Shareware, in the U.S.A: Call (800) 245-6717

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
```
{% endraw %}

## SHAREMAG.TXT

{% raw %}
```
              S H A R E W A R E  M A G A Z I N E
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Shareware Magazine has distinguished itself as the only internationally
distributed periodical devoted to the use and business of shareware.
Shareware Magazine provides detailed reviews of new products,
hard-hitting comparisons of shareware programs with regular retail
software, and timely information about changes in the industry and the
latest technology.

Intriguing columnists and regular features add to the excitement.  The
beginners section sheds light on new user's concerns regarding
everything from choosing the right operating system to alleviating the
intimidation of using on-line systems.

Educational sections focus on how low cost shareware can aid in
classroom learning, curriculum development, and as a forum for
discussing the impact of computers and technology in schools.

Graphics Gallery renders expert advice and suggestions on how to better
work with graphics, desktop publishing, CAD systems, and the Windows
environment.

Programmers benefit from others experience in developing new programs or
polishing existing ones as well as choosing the right programming
language.

And columnists provide that subjective component, sometimes
controversial, that calls for a closer look at the way we compute and
how shareware effects what we do.

Published bimonthly, Shareware Magazine is available on a subscription
or at your local newsstand or computer bookstore.  In conjunction with
PC-SIG, there are special benefits for subscribers as well as
opportunities for discount purchases from PC-SIG.


To Order, in the U.S.A.: Call 800-245-6717 and ask Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## SIGORDER.TXT

{% raw %}
```
                                      [B]

FROM:  ___________________________

       ___________________________

       ___________________________
[A]                                                                         [B]
       ___________________________


                                  PC-SIG Inc.
[A]                                                                         [B]
                            1030-D East Duane Avenue

                               Sunnyvale  California

                                     94086


























Fold - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Fold

       HOW TO USE THIS RETURN ENVELOPE

       1.  Place any other pages underneath this page.
       2.  Using the Fold lines (above) as a guide, fold this flap under.
       3.  Fold the address flap so it covers this flap.
       4.  Tape or staple the envelope at the two spots marked [A].
       5.  Slip in any other enclosures (business cards, cheques, etc.).
       6.  Tape or staple the envelope at the spots marked [B].














THANKS FOR TAKING THE TIME TO PRINT THIS FORM -*- MAIL YOUR ORDER TO:
PC-SIG Inc. 1030-D East Duane Avenue Sunnyvale CA 94086






---------------------------------------------------------------------

     Do not mail cash.   Please allow four weeks for processing.

---------------------------------------------------------------------




Check the items desired:

PC-SIG Disks - Member $2.49 for 5.25" or $2.99 for 3.5"
           Non-member $3.25 for 5.25" or $3.75 for 3.5"

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  total  ______

One year subscription to Shareware Magazine            $12.95  ______

Super Saver Membership                                 $34.95  ______
(includes a 1 year subscription to Shareware Magazine )
(also The Encyclopedia of Shareware, and 5 free disks )

The Encyclopedia of Shareware special price at         $14.95  ______

The Essential Home & Business Collection for           $59.00  ______

*** PC-SIG Library on CD-ROM 11th Edition  ***         $159.00 ______
              NEW LOWER PRICE!

Upgrade to the 11th Edition from ANY previous edition
of the PC-SIG Library on CD-ROM!                       $85.00  ______

Upgrade from ANY other shareware CD-ROM just           $99.00  ______

                                                    Subtotal   ______

If you want 3-1/2 inch disks please add .25 cents per disk     ______

Shipping and Handling                                          $4.00

                    California residents add 8.25% sales tax   ______

                                                       TOTAL   ______



      If you have any comments or suggestions, please let us know!

To order by phone with VISA or MASTERCARD call (800)245-6717
Ask for operator #2316





                                *****




              TO PRINT THIS ORDER FORM, PRESS ANY KEY AND
              THEN "Quit" ONCE TO RETURN TO THE MAIN MENU.
                     SELECT "Print Reply Form."
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3276

     Volume in drive A has no label
     Directory of A:\

    2COL34   ZIP     25393   7-17-92   2:06p
    JETCOL15 ZIP     66931   7-17-92   2:06p
    CDROM    TXT      3972   6-24-92   1:25p
    SHAREMAG TXT      1837   1-21-92   6:11a
    PCSIG    TXT      2335   1-21-92   6:09a
    GO       EXE     26022   1-10-92  12:14p
    SIGORDER TXT      3332   6-25-92   2:28p
    PKUNZIP  EXE     23528   3-15-90   1:10a
    GO-FORM  DAT      3109   6-29-92   3:26p
    GO-STRT  DAT       537  11-30-92   7:17a
           10 file(s)     156996 bytes
                            1024 bytes free
