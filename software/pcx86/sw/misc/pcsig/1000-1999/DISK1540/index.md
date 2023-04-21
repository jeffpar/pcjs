---
layout: page
title: "PC-SIG Diskette Library (Disk #1540)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1540/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1540"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "NEAT FORMATTER"

    NEAT reads in a standard ASCII file format created by most
    wordprocessors and writes a "formatted" file in output.  Use NEAT and
    you can:
    
    ~ Print multiple copies
    
    ~ Begin and end on specified pages of a document
    
    ~ Pause for single-sheet feeding
    
    ~ Make room for your data during text formatting
    
    ~ Include other text files up to a nested level of four
    
    ~ Include merge fields from a second merge file.
    
    NEAT also has font controls for double width, boldface, double strike,
    italics, two forms of underlining, letter-quality mode, headers and
    footers for every page, automatic page numbering in header or footer,
    even/odd page margin shifting, line centering, adjustable line spacing,
    and more.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1540.TXT

{% raw %}
```
Disk No: 1540
Disk Title: Neat Formatter
PC-SIG Version: S2

Program Title: Neat Text Formatter
Author Version: 3.00
Author Registration: $15.00
Special Requirements: Printer.

NEAT reads in a standard ASCII file format created by most
wordprocessors and writes a ``formatted'' file in output.  Use NEAT and
you can:

~ Print multiple copies

~ Begin and end on specified pages of a document

~ Pause for single-sheet feeding

~ Make room for your data during text formatting

~ Include other text files up to a nested level of four

~ Include merge fields from a second merge file

NEAT also has font controls for double width, boldface, double strike,
italics, two forms of underlining, letter-quality mode, headers and
footers for every page, automatic page numbering in header or footer,
even/odd page margin shifting, line centering, adjustable line spacing,
and more.

File Descriptions:

D630     CFG  Printer configuration file.
FLYER    TXT  Other programs available from author.
IDSPRISM CFG  Printer configuration file.
LABELS   CFG  Printer congifuration file.
MX80FT   CFG  Printer configuration file.
NEAT     CFG  Printer configuration file.
NEAT     EXE  NEAT main program.
NEAT     DOC  Documentation to print with DOS command.
NEAT     MAN  Documentation already formatted to print with NEAT.
NONIBM   XLT  Data file.
NORMAL   XLT  Data file.
NULL     CFG  Printer configuration file.
OKIML84  CFG  Printer configuration file.
OKIPACE  CFG  Printer configuration file.
ORDER    FRM  Registration form.
README        Instruction on how to print the documentation.
ROMAN    CFG  Printer configuration file.
SERIF    CFG  Printer configuration file.
SPG8010  CFG  Printer configuration file.

PC-SIG
1030D East Duane Avenue
Sunnyvale, Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.
```
{% endraw %}

## FLYER.TXT

{% raw %}
```
         








         SEM  Software  is  a  growing  collection  of shareware software
         products for the MS-DOS community.  Prices are  reasonable,  and
         quality  is  high,  since  all software is created by a fulltime
         professional  software  engineer  with   a   Chicago   high-tech
         consulting firm.   Help to registered users is available through
         Compuserve, GEnie, or mail.  Orders and inquiries  are  normally
         processed within  48  hours.   Free trial copies of all software
         may be obtained  from  Compuserve  (IBMSIG),  Public  (Software)
         Library  of Houston, GEnie, and many systems around the country.
         Unless noted otherwise, all programs  operate  under  MS-DOS  or
         PC-DOS  2.1 and above, on IBM XTs, ATs, or compatibles, and will
         work on MDA, Hercules, and all color video cards.
                        FOR PRINTING AND TEXT PROCESSING:

              *****   SUPER PRINT   *****
              The ultimate in printing utilities,  SUPER  PRINT  has
              just   about  any  printing  feature  which  could  be
              desired.  SUPER PRINT will print files  with  embedded
              control   characters,   will  slash  zeros,  add  line
              numbers, add left margin space for  three-hole  paper,
              page  number, print file time and date in heading, and
              other stuff.  Recent  additions  include  page  length
              setting,  top and bottom margins, wild card filenames,
              prompted   printing,   printer   configuration   file,
              adjustable tab  expansion, and more!  This is also one
              of the few printing utilties which may be  the  target
              of piped data from another program.  Now, version 2.80
              includes  even  more enhancements, including character
              translation capabilities and front/back printing.  The
              most software you can get for only $10!

              ******   NEAT   *****
              This is a text  formatting  program  similar  to  UNIX
              nroff, except  oriented to the PC user.  Virtually any
              printer can be supported with several different  fonts
              or ribbon options.  This program also has file merging
              features for creating form letters merged with address
              lists, or other such uses.










         








         


                           FOR C LANGUAGE PROGRAMMERS:

              *****   STEVE'S TURBO-C LIBRARY   *****
              This  expansion library for Borland's Turbo-C has over
              130 functions and growing.  Although Version 2.0 of TC
              contains direct video access,  "Steve's  Library"  was
              the  FIRST  to  contain a full library of direct video
              text functions for this compiler.  Many users say that
              my functions are even better and easier  to  use  than
              Borland's.   The library includes complete source code
              in C and assembler, plus several useful header  files.
              Included  are  printer  BIOS service routines for fast
              printer access, and  async  communications  functions,
              directly  accessing  the  serial ports for fast access
              without buffering.  Up to 9600 baud is possible!
              Need to accept wildcard filenames on the command line?
              My exparg() function re-arranges (argc,  argv)  to  an
              expanded array with all wildcards expanded to matching
              filenames.
              An  installable  interrupt  handler for the 18.2 Hertz
              interrupt  is  included  so  that   simple   real-time
              applications  can  be  programmed  which will function
              properly regardless of the type of system in use.
              Functions for file opening  from  PATH  and  specified
              environment  variables make opening a file anywhere in
              the environment totally transparent to the programmer.
              And now, support  is  also  included  for  the  switch
              inputs on  the  game  port!    This 4-bit port is very
              handy for reading switches or other logic levels  from
              any outside device.
              Full  documentation  suitable for printing and placing
              in a binder is  provided,  along  with  a  utility  to
              automate the printing.
              To demonstrate various functions from STEVE'S LIBRARY,
              six utilites  with  source  code  are  included.   The
              utilities include:
              GTOD - Reports time and date in many formats
              TC - Compare two text files and report differences
              WC - Count words,  lines,  characters,  and  checksums
              files
              OKISET  -  Configure  an  Okidata  Printer  or similar
              IBM-type printer
              INPATH - Locate an executable file in current PATH
              DUMP - Unique hex dump program in COLOR, with optional
              highlighted bytes.




                           FOR AMATEUR RADIO OPERATORS




         








         


              *****   CONLOG   *****
              This is the first in what  will  become  a  series  of
              contest   logging   programs  for  the  Amateur  Radio
              Operator.  CONLOG is intended for the annual  November
              Sweepstakes.   This  package is more than one program.
              There is a logging program for use during the contest,
              and  two  support  programs  to  print  the  resulting
              logsheets, summary,  and  duplicate check sheets.  All
              forms  are  printed  with  slick  graphics  (for   IBM
              compatible  printers only), but can be also printed on
              non-IBM printers without the graphics.  The forms have
              been approved by the  ARRL  for  submission  as  valid
              contest entries.     Extra  care  has  been  taken  to
              preserve all log entries, even if there is a system or
              power failure.   The  user  can  configure  all  video
              attributes,   plus   name,   QTH,   rig,  and  section
              information.  This program is the  result  of  various
              programs  written  over  the  last seven years for the
              Sweepstakes.  No guarantees are made, but MY score has
              increased by over 25% as a result of computer logging!
              And the time saved in re-copying  the  logs  (to  make
              them readable!)  is  incredible.   My entry is usually
              ready for mailing about 30 minutes after  the  contest
              ends.   All new contest rules are supported, including
              the new West Texas section, and QRP power  precedence.
              Provisions  are  made  to  edit  or delete log entries
              during the contest, and the  program  absolutely  will
              not let  you  log a duplicate callsign!  Log size is a
              hefty 2500 entries to  cover  even  you  guys  in  the
              COLorado section.    Try  it once, and throw away your
              pencil!  And when you work  the  contest,  say  hi  to
              WA9DRE when we work!




         Corporations and clubs: Quantity discounts and/or site licensing
         agreements are   welcomed.      Send  your  requirements  for  a
         quotation.















         








```
{% endraw %}

## NEAT.DOC

{% raw %}
```
         












                            +------------------------+
                            |         NEAT           |
                            | Text Formatter Utility |
                            |      Version 3.00      |
                            |        - by -          |
                            |   Steven E. Margison   |
                            +------------------------+


                  Program and Documentation Copyright 1986 - 89
                   by Steven E. Margison -- All Rights Reserved

































         








         






                      --------- TABLE OF CONTENTS ---------


              I.    Introduction ................................. 1
              II.   Overview of Features ......................... 2
              III.  Command Line Usage............................ 3
              IV.   In Text Commands.............................. 5
              V.    On Formatting, Justification, etc............. 12
              VI.   Configuration Files........................... 17
              VII.  Using Daisy Wheel Printers.................... 20
              VIII. Character Translation ........................ 21
              IX.   Program Operation ............................ 23
              X.    "We Get Letters, Stacks & Stacks of Letters" . 24
              XI.   Shareware and Online Help .................... 27
              XII.  Warranty ..................................... 29
                    Registration Form ............................ --


































         








         




                          NEAT -- TEXT FORMATTER PROGRAM


         I. INTRODUCTION
               NEAT is  a  post-editing  word  processor  program.  It is
         called a post-editing  program  since  all  document  formatting
         takes  place after editing has been completed and the editor has
         written the file out.  This may seem more cumbersome  than  some
         word  processors,  such  as  WordStar,  PFS:Write,  and  a whole
         plethora of others, but there are definitely some advantages  in
         this  method,  since NEAT has the ability to do some things that
         word processors/editors  can't  do  easily,  if  at  all.     In
         addition, files edited for the NEAT format are portable from one
         computer  to  another,  since  they  are  standard  ASCII files,
         without the "special" characters that some other programs  leave
         behind (such  as  WordStar and PFS:Write).  NEAT files can often
         be formatted and printed out correctly (less font  controls)  on
         systems which don't even have the NEAT program!
               If this all sounds a little like the UNIX program "nroff",
         it's no coincidence, because NEAT is a work-alike to nroff, with
         features desirable  to  the  micro-computer  user.  In addition,
         almost every popular operating system has  an  nroff  work-alike
         these  days:  FORMAT for CP/M, public domain ROFF for MS-DOS (in
         about a dozen different flavors), and probably a version for OS9
         systems as well.  This is  what  makes  documents  in  the  NEAT
         format transportable.  Naturally, each system's version of nroff
         will have some differences, but they are largely the same in the
         basic  features  of headers, footers, margins, justification and
         line filling, page breaks, etc.
               To get a little historical  for  a  moment,  the  original
         nroff  for UNIX was meant to be a program for typesetting usage,
         along with a specialized version called troff.    To  this  end,
         these  programs  are  usually  supported  by configuration files
         oriented toward commercial typesetting equipment.    In  the  PC
         world,  however,  our  typesetters  are  usually  made by Epson,
         Okidata, Dataproducts, or whatever.  Many other  nroff  spinoffs
         for  the  PC  user  eliminate  font  controls, with the possible
         exception of boldfacing via overstriking.  NEAT  addresses  this
         deficiency by supporting 5 font controls, which are configurable
         to virtually  any  printer, including daisywheels.  For printers
         which don't support all types of fonts,  they  can  be  declared
         "non-existent"  and  the font command in the text file is simply
         ignored.  Or, the 5 font controls  can  be  used  (with  certain
         limitations)  to  support  other unique features, such as ribbon
         color changes.







                      NEAT Text Formatter             Page 1             








         


         II. OVERVIEW OF FEATURES
               Here  is  a  list of the goodies available with NEAT using
         either command line options or in-text commands:

              * Output redirectable in normal DOS fashion
              * Multiple copy printout
              * begin and end on specified pages of a document
              * pause for single sheet feeding
              * even/odd page printing
              * different configuration files can  be  specified  on
              command line
              *  configuration  files  are  simple  text  and can be
              edited in any manner
              * configuration files will be automatically located in
              current directory or in PATH environment  variable  --
              NEAT  and  its  support  do not have to be in the same
              directory as the file being processed.
              * text can make room  for  user-inputted  data  during
              text formatting
              * main text file can include other text files, up to a
              nesting level of 4
              *  main  text  file  allows merge fields from a second
              merge file
              * font controls for  double  width,  boldface,  double
              strike,  italics,  two  forms  of  underlining, letter
              quality mode, plus 10 special purpose codes
              * headers and footers for  every  page,  or  different
              ones for even and odd pages
              *   selectable  automatic  centering  of  headers  and
              footers
              * automatic page numbering in header or footer
              * even/odd page margin shifting
              * adjustable right, left,  top,  bottom  margins,  and
              page length
              * temporary indenting for paragraphs
              *  "squeezing"  from  both  margins  for  special text
              effects (like this section of text)
              * specification of lines which must be  kept  together
              and not separated by automatic page breaks
              *   switchable   line   filling   and   right   margin
              justification by space embedding
              * line centering
              * adjustable line spacing
              * blank page space reservation for later  addition  of
              drawings or other non-text items
              * character translation








                      NEAT Text Formatter             Page 2             








         


         III. COMMAND LINE USAGE
               NEAT is invoked as any other DOS program, except that  the
         order of  filenames  is  meaningful to the program.  The default
         output is LPT1:,  or  whatever  is  specified  in  the  optional
         configuration file.      Normal  DOS  redirection  via  the  '>'
         character will override the default output, so that  output  can
         be directed to a file or any valid DOS I/O channel.  Options can
         be  preceeded  by  a  hyphen  (-)  or  a  slash  (/), and can be
         specified at any point  in  the  command  line,  as  can  output
         redirection.   The  filenames  to process must be specified in a
         particular order:
              NEAT <sourcefile> <mergefile>
         If only one filename is specified, then no merging  is  assumed.
         If two filenames are specified, the first filename is assumed to
         be  the  master  file,  and the second is assumed to be the file
         containing the data to be merged (such as names and  addresses).
         Reversing  the order creates some very "unique" effects -- trust
         me, you don't want to try it!
               A configuration file may  be  specified  anywhere  on  the
         command line.   It  is recognized by the extension ".CFG".  Note
         that you may NOT have that extension on a source or merge  file,
         since  NEAT  will  attempt  to  use  it  as  configuration data.
         Multiple configuration files may be  used,  with  the  last  one
         specified being  the  last one to be read and used.  There is no
         real reason to use more than one configuration file at  a  time,
         but  it  is  allowed,  since  each  is  read  and  used as it is
         encountered.
               Options may be specified anywhere  on  the  command  line,
         following  a  single  hyphen  or  split  into several arguments.
         Upper or lower case is acceptable.
             NEAT filename -options >output.txt special.cfg -moreoptions
         Command line options are as follows:

         -?
         Give short  usage  message  and  exit.    Overrides  all   other
         operations.

         -P
         Pause between pages.    User  is prompted to continue.  A 'C' or
         'c' in response cancels future  pauses,  a  'Q'  or  'q'  aborts
         printout, and any other response prints next page.

         -L
         Like the  P option, except for single sheet feeding.  Line feeds
         stop after the last printed line, rather than  stepping  to  the
         top of  the  next  sheet.   In addition, the 'C' or 'c' response
         will NOT cancel future pauses.

         -B#
         Begin on page number #.  Pages prior to this one are not output.




                      NEAT Text Formatter             Page 3             








         


         -E#
         End on  page  number  #.    Printing  stops  after  this page is
         complete.  For one page of a document,  specify  begin  and  end
         pages the same.

         -S#
         Start on copy  #.  Used for multiple copies of a file.  Defaults
         to 1.

         -F#
         Finish on copy #.  Specifies last copy #  to  print.    Used  by
         itself, specifies number of copies to print.  When -S and -F are
         used  with  -B  and/or  -E,  copies  in between the Begin page #
         option and the End page # option are printed in their  entirety.
         For  instance:  -B3S1F4E5  will print from pages 3 on in copy 1,
         all of copy 2 and 3, and up to page 5 in copy 4.  Normally,  the
         S/F and B/E options are not used in combination.

         -O#
         Specifies a  page  offset  of  #  columns.  Identical to the .po
         command, described in detail in the next section.

         -XE
         Prints only even numbered pages.

         -XO
         Prints only odd numbered pages.

         -Q
         Perform all operations "quietly".  Report only fatal  errors  to
         the screen.























                      NEAT Text Formatter             Page 4             








         


         IV. IN TEXT COMMANDS
               All special text and font formatting commands  are  placed
         within  the  text  file,  as  separate  lines  beginning  with a
         "command character".   This  command  character  defaults  to  a
         period  (.)  but may be changed within the text or configuration
         file to any other printable character except a  space.    Format
         commands must always start as the first character on a line, and
         must not contain any other information in the line.  Examine the
         following section of text:

         .ce 1
         This line will be centered followed by a blank line.
         .sp 1
         This is another line of text.

         In  the  above lines, the command lines begin with a period, and
         the text lines don't.  It's that simple!  Word  of  caution:  If
         you  want  to  deliberately  begin  lines  in your text with the
         command character, you must first change the  command  character
         to  something else. (In the above example, the command character
         was first changed to a tilde '~', and then  changed  back  to  a
         period.)
               Here is a list of all the recognized commands:

              FONT CONTROLS

              .bf #     BOLDFACE
              Enable  boldface  printing  for  specified  number  of
              formatted lines.  A value of 0 disables boldfacing  at
              once.  No  value defaults to 1.  If unsure of how many
              lines to  specify,  use  a  number  much  larger  than
              necessary,  and  then explicitly disable it with .bf 0
              command.  This holds true for all formatting commands.
              To boldface a single word, use the sequence:
              .bf
              theword
              .bf 0
              This technique  can  be  employed  for  all  the  font
              commands.

              .cu #     CONTINUOUS UNDERLINE
              Enable  continuous  underlining  of  text, even across
              white space.  A value of 0 disables  underlining,  and
              no  value  defaults  to 1. (See also: .ul) Caution: Do
              not attempt to use this command for any other  printer
              feature!

              .dw #     DOUBLE WIDTH
              Enable double width characters.  Note that spaces will
              NOT  be sent as double width to the printer (see notes
              on document formatting).  A value of 0 disables double
              width, and no value defaults to 1.   Caution:  Do  not


                      NEAT Text Formatter             Page 5             








         


              attempt to use this  command  for  any  other  printer
              feature!

              .it #     ITALICS
              Enable italics  font.  A value of 0 disables font, and
              no value defaults to 1.   If  printer  does  not  have
              italics,  this  command  may be configured to select a
              different printer option.

              .ds #     DOUBLE STRIKE
              Enable double strike font.   A  value  of  0  disables
              font, and no value defaults to 1.  If printer does not
              have  double strike, this command may be configured to
              use a different font.

              .lq #     LETTER QUALITY
              Enable letter quality font.  A  value  of  0  disables
              font, and no value defaults to 1.  If printer does not
              have  a  letter  quality  mode,  this  command  may be
              configured to use a different font.

              .nu       NO UNDERLINING
              Disables all underlining.  Functionally equivalent  to
              either .cu 0 or .ul 0 commands.

              .ul #     UNDERLINE
              This   is   another  underling  command,  except  that
              underling is done only on  printable  characters,  and
              automatically  skips  all white space. (See also: .cu)
              Caution: Do not attempt to use this  command  for  any
              other printer feature!


              FORMAT CONTROLS

              .bp #     BEGIN PAGE
              Complete  formatting  on  current  line  and force new
              page.  An optional value may be given to set the  page
              number  value,  otherwise  the  current page number is
              incremented by 1.

              .br       BREAK
              Complete formatting current  line  and  print  as  is,
              forcing the start of a new line.

              .ce #     CENTER TEXT
              Center  the  specified  number  of  text lines between
              right and  left  margins.    A  value  of  0  disables
              centering and  no  value  defaults to 1.  This command
              causes a line break (see .br command).




                      NEAT Text Formatter             Page 6             








         


              .fi       FILL LINE
              This command causes current lines to be filled with as
              much text  as possible.  This is the default mode. .fi
              is provided to reverse the effects of a  .nf  command.
              This command causes a line break.

              .in #     INDENT
              This  command  causes  a  line break and then adds (or
              subtracts) the specified  value  to  the  left  margin
              value.   The  sum  of  the  left  margin  value  and a
              negative indent value must not be  allowed  to  become
              less than 0 (the start of the line).

              .ju       JUSTIFY
              This  command causes lines to be padded with spaces to
              create even right margin effect.   Since  it  defaults
              on,  this command is provided to reverse the action of
              a .nj command.  This command causes a line break.

              .lm #     LEFT MARGIN
              This command causes a line break, and then resets  the
              left margin value to the value specified.  The default
              value is 11.

              .ls #     LINE SPACING
              Changes  line spacing from default value of 1 to value
              specified.

              .m1 #     MARGIN 1
              Changes the number of lines in the  top  margin.    No
              value defaults  to  1.   If used with the .pl command,
              this command must come first.

              .m2 #     MARGIN 2
              Changes the number of lines between margin 1  and  the
              body of the  text.   Default value is 2.  This command
              must be used before a .pl command.

              .m3 #     MARGIN 3
              Changes the number of lines between the  body  of  the
              text and margin 4.   Default value is 2.  This command
              must be used before a .pl command.

              .m4 #     MARGIN 4
              Changes the number of  lines  in  the  bottom  margin.
              Default value  is 9.  This command must be used before
              a .pl command.

              .mp #     MINIMUM PARAGRAPH SPACE
              The value  supplied  to  this  command  specifies  the
              minimum  amount of space which must be available for a
              paragraph.  If space remaining on page is too  little,


                      NEAT Text Formatter             Page 7             








         


              a  page  break  is  forced  before  the  paragraph  is
              started. .ne 4

              .ne #     NEED LINES
              This  command  causes  a  line break, and then insures
              that the specified number of lines  are  available  on
              the current page.  If not, a page break is issued.

              .nf       NO FILL
              This  command  causes a line break and then stops line
              filling.  In other words, text lines will begin to  be
              printed as they exist in the source file.  Since right
              margin   justification   depends  upon  line  filling,
              justification is also disabled by this command.    Use
              .fi to restore filling operation.

              .nj       NO JUSTIFY
              This  command causes a line break, and then stops line
              padding with spaces.  If line filling is still active,
              text will continue to fill lines, but the right margin
              will not  be  justified.      Use   .ju   to   restore
              justification.

              .pg      PARAGRAPH INDENT
              This command is functionally identical to the command:
              ".ti +6".

              .pl #     PAGE LENGTH
              This  command  sets the page length, which defaults to
              66.  The minimum value for .pl is the sum  of  margins
              1, 2, 3, and 4, plus 1.

              .po #     PAGE OFFSET
              The  value specified is the number of spaces to indent
              odd pages from the right,  and  even  pages  from  the
              left.   This  is  the  same as the command line option
              -O#, and defaults to 0 if not used.

              .rm #     RIGHT MARGIN
              Changes the value of  the  right  hand  margin.    The
              default value   is   74.      Has   meaning  only  for
              justification.

              .rs #     RESERVE SPACE
              This command causes the specified number of  lines  to
              be reserved  on  the  current  page.  If there are not
              enough lines on the current  page,  a  page  break  is
              forced and  a  new  page started.  No more than 1 full
              page can be reserved with a single command.

              .sq #     SQUEEZE
              This command causes a line  break,  and  then  indents


                      NEAT Text Formatter             Page 8             








         


              both right and left margins by the specified  amounts,
              in  addition  to  the  current  right  and left margin
              settings.  This section of text is using  the  command
              .sq 5.    Using  a  minus  sign  before the value will
              subtract from the current squeeze value, and  using  a
              plus sign adds to it.  No value cancels squeezing.

              .sp #     SPACE
              This  command causes a line break, and then issues the
              specified number of line feeds.  No value defaults  to
              a single blank line.

              .ti  #     TEMPORARY INDENT
              This  command  causes  a line break, and then adds (or
              subtracts) the specified value from  the  left  margin
              for the next line only.  A minus sign before the value
              will  subtract  the  value  from the left margin. (See
              also: .pg)


              MISCELLANEOUS COMMANDS

              .bc ?     BLANK CHARACTER
              In order to keep certain words together with  a  fixed
              number  of  spaces,  a  blank  character is used which
              "fools" the formatting into thinking that  the  entire
              character   sequence  is  one  word,  but  the  output
              actually uses  a  true  blank  instead  of  the  blank
              character.   The character defaults to "@", and may be
              changed to any printable character with this  command.
              This feature is helpful to make sure that phrases like
              "Mr. Jones"  are  not  considered  as  the  end of one
              sentence and the beginning of  another.    This  would
              almost  certainly  cause  extra spaces to be inserted.
              By  entering  the  text  as  "Mr.@Jones",  the  proper
              spacing is maintained.

              .cc ?     COMMAND CHARACTER
              This  command  cause the default command character (.)
              to be changed to the indicated character.

              .cw        CHANGE WHEEL
              This is a special form of the COMMENT  command,  which
              will pause  and  allow  changing  of a daisy wheel.  A
              message of up to 40 characters may be supplied  as  an
              argument, but is not necessary.

              .ef  text     EVEN PAGE FOOTER
              The  text  is printed as a footer on all even numbered
              pages.  Omitting a text string cancels any even footer
              currently specified. .ne 4



                      NEAT Text Formatter             Page 9             








         


              .eh text     EVEN PAGE HEADER
              Like .ef, except that the text becomes a page header.

              .fo text     FOOTER
              The  specified  text  is  printed  as  a footer on all
              pages.  If no text is specified, footer  is  disabled.
              This overrides both .ef and .of commands.

              .he text     HEADER
              The  specified  text  is  printed  as  a header on all
              pages.  If no text is specified, header  is  disabled.
              This overrides both .eh and .oh commands.

              .mc ?     MERGE CHARACTER
              This changes the character to be used as a merge field
              indicator.  The default is "|".

              .of text     ODD PAGE FOOTER
              Like .ef except specifies footer for odd pages.

              .oh text     ODD PAGE HEADER
              Like .eh, except specifies header for odd pages.

              .pr text     PROMPT
              The  text  is  printed  to the console and the user is
              prompted to enter information from the keyboard.   The
              keyboard  data is read as though it were text from the
              file, until a control-Z is entered.    Note  that  the
              keyboard  is  read  through  the  DOS "standard input"
              channel, and therefore may be redirected from  a  file
              or  other  source  on  the  command  line with the '<'
              operator.  All other keyboard responses, such  as  for
              "pause"  or  "single  sheet"  modes, are read directly
              from the keyboard, and cannot be redirected.  The text
              argument is limited to 64 characters.  This feature is
              only available with the "-Q" option from  the  command
              line.

              .so filename     INCLUDE SOURCE FILE
              The  specified  file  (directories  are  supported) is
              included in the output and then  the  original  source
              file is  resumed.  Includes may be nested to four open
              source files.

              . text     COMMENT
              A line beginning with  one  command  character  and  a
              space is  printed  to the console as a comment.  Limit
              is 64 characters.

              .u1        User Code #1
              This  command  inserts  into  the  output  stream  the
              control  codes  specified in the configuration file as


                     NEAT Text Formatter             Page 10             








         


              "1=".   This  is  a "one-shot" insert, and may be used
              for things such as ribbon color changes, reverse  line
              feeds, etc.  Use caution when invoking features on the
              printer  which will alter line spacing or position, or
              character width.  NEAT has no  knowledge  of  what  is
              happening,  and  therefore cannot adjust justification
              and paging accordingly.  Note also  that  headers  and
              footers will be subjected to the last code sent.

              .u2        User  Code  #2  The  second  user specified
              code, like .u1

              .u3        User Code #3 The third user specified code,
              like .u1

              .u4 - .u0  User Code #4 - 10 The fourth through  tenth
              user codes, just like .u1

              ..         ignore
              This   allows  a  file  to  have  any  command  string
              "ignored" by simply adding an extra command character.

































                     NEAT Text Formatter             Page 11             








         


         V. ON FORMATTING, JUSTIFICATION, AND OTHER INCIDENTALS
               Although  NEAT  is very easy to use, there are some issues
         of use which may not be obvious at first glance.  It is  helpful
         in  the following discussions to have a printed copy of NEAT.DOC
         and a printed copy of NEAT.MAN which was NOT processed by  NEAT.
         This  will  give  you  a  side-by-side  look at the source which
         created this manual, and the resulting output.




                                   LINE FILLING
         The default mode of NEAT is to read source text and  attempt  to
         fill output  lines  with as many words as possible.  This can be
         turned off using the  .nf  command  and  resumed  with  the  .fi
         command.  Note that line filling does not necessarily mean right
         margin justification.




                                  JUSTIFICATION
         The  default  mode of NEAT is to justify the right margin of all
         lines by padding the line with extra spaces between words and at
         sentence endings.  For justification to  operate,  line  filling
         MUST be  enabled.   Justification may be turned off with the .nj
         command, and resumed with the .ju command.  Note that if .nf (no
         fill) is issued, justification is also disabled.  When  resuming
         line  filling,  justification will also resume if it was enabled
         before line filling was disabled.




                                HEADERS & FOOTERS
         Text up to the limit of  the  right  and  left  margins  can  be
         specified for  either  headers  or  footers.    Separate headers
         and/or footers may be specified for even or odd pages.    Or,  a
         single header or footer can be specified for all pages.  The .fo
         and  .he  commands  are  the  same as issuing .ef/.of or .eh/.oh
         commands with the same text for each.  The odd/even  header  and
         footer  commands  should  not  be  used  in conjunction with the
         .fo/.he commands.  Any font controls in effect for the  body  of
         the text are automatically switched off for headers and footers,
         which always  appear  as  normal characters.  No line filling or
         justification is used on headers and footers, but it is possible
         to center the text using fraction bar delimiters as follows:
         .fo /this footer will be centered/
         .fo this footer will be left justified
         .fo /footer with two fields/which are centered and spaced/
         The following is the most common footer:
         .fo /document name/Page #/


                     NEAT Text Formatter             Page 12             








         



         The  last  line  above  shows  another  feature: the # sign in a
         header or footer is automatically replaced by the  current  page
         number.   A  simple centered page number footer or header can be
         specified thusly:

         .fo /- # -/


                                 PAGE FORMATTING
         Page breaks are, of course, calculated automatically.   However,
         it  is often desirable to force page breaks at desired points in
         the text.  A simple page break can be done with the .bp command.
         If an argument is given, it will be used  as  the  next  current
         page number.    Otherwise,  page  numbering starts at page 1 and
         increments with each page.  Using the .ne and .mp  commands  can
         cause  automatic  page  breaks  based upon the formatting of the
         file.   The  .ne  command  is  useful  in  keeping  a  table  of
         information together on the same page.  If the table has, say 16
         lines, the command .ne 16 would cause a page break if there were
         less than  16  lines  left  on the current page.  Otherwise, the
         table goes on the current page.  This  is  extremely  handy  for
         making  sure  that certain information stays together, while the
         rest of the file may be re-edited causing layout changes.


                             FONT CONTROLS - GENERAL
         Font controls may be used anywhere.  Normally, a font is  turned
         on with its command and a value greater than 0.  The value given
         is  the  number  of formatted lines to be printed under the font
         specified.  Multiple fonts can be specified for the  same  text,
         within the  limits  of  the available printer.  Often, it is not
         known when the text is edited how many lines will be  generated.
         Therefore,  a  larger  than  necessary value can be specified to
         start the font, and a value of 0 used to finish it.   With  this
         means,  it is possible to alter fonts on individual words within
         a line, since the font control takes effect as  soon  as  it  is
         invoked, and cancelled as soon as it is satisfied or given a new
         value  of  0. (Look at NEAT.MAN to see how the previous line was
         created.)
         NEAT also provides 10 user-defined  codes,  which  do  not  have
         "on/off" features, like the other font controls.  These 10 codes
         may be defined in the configuration file to perform any function
         desired on the printer.  Note, however, that it is VERY possible
         to issue  codes  which  will  ruin  the  printout.  For example,
         setting a code which forces 8 lines per inch without  a  similar
         command  to NEAT to adjust lines per page will result in "short"
         pages.  Sending a code to force subscript printing may  cause  a
         header  or  footer  to  be  printed in subscript as well, if the
         "normal" code is not sent before a page break.   Experimentation
         is the key to using the user-defined control codes.
         NEAT  takes  care  to  print all headers and footers in "normal"


                     NEAT Text Formatter             Page 13             








         


         font.   That  is, if a header or footer is printed while another
         font is in effect, the font is turned off while  the  header  or
         footer is  printed,  and  then  restored.  This feature does not
         work with the user-defined codes, however.


                           FONT CONTROLS - UNDERLINING
         Underlining  can  be  invoked  as  either  continuous  (.cu)  or
         non--continuous (.ul).    The only difference is that continuous
         mode underlines across white space, while the  other  mode  does
         not.   Either  mode  can be cancelled by a value of 0 or the .nu
         command.  Note that it is not possible to create a line  of  all
         spaces with  underlining  (as  for a form).  To do this, use the
         .nf command to suppress formatting, and then  enter  a  line  of
         underline characters.  It may also be possible to make a line of
         "blank"  characters  with  underlining enabled, but this may not
         work with all printers, since some printers will ignore  a  line
         of all spaces.


                           FONT CONTROLS - DOUBLE WIDTH
         Double  width  font  automatically  adjusts  all  line character
         counts to allow for the fact  that  double  characters  actually
         take two normal character spaces.  However, real spaces are sent
         to the  printer  as  non-double  spaces.  This is important only
         when centering  lines.    To  overcome  this,  either  turn  off
         justification, or use the blank character to insert double-width
         spaces  where  desired.  (Refer  to  the  page  1 title block of
         NEAT.MAN for an example of this technique.) It should  be  noted
         that  some  printers  will not print the extended IBM characters
         (such as the box drawing characters) in double width.   However,
         NEAT  will  continue  to  allow  2  spaces for these characters.
         There is no fix for this discrepancy.  Just  avoid  it  if  your
         printer does not print these special characters as double width.


                          FONT CONTROLS - LETTER QUALITY
         Letter quality is actually more of a "mode" than a special font.
         Normally,  it  would be desirable to print an entire document in
         letter quality, which could be done by specifying the .lq option
         with a very large number at the beginning of the file.  However,
         any headers or footers would invoke  the  "letter  quality  off"
         code, and  therefore  print in normal quality.  Invoking some of
         the other fonts could also cause a reversion to normal  printing
         when turned  off.    To solve this, create a special CFG file in
         which all of the "off" font control strings contain the codes to
         reset the printer into LQ mode.  Now, the  printer  will  always
         remain in  LQ  mode as the "normal" mode.  It would also be wise
         to insert the LQ enabling codes in  the  printer  initialization
         string,   and   the  "normal"  printing  codes  in  the  printer
         de-initialization string.



                     NEAT Text Formatter             Page 14             








         


                             FONT CONTROLS - ITALICS
         NEAT  really  doesn't  have any idea what italics are; it merely
         responds to the command and sends an appropriate command to  the
         printer.   Therefore, this command may be set to almost anything
         supported  by  the  available  printer,  provided  the  function
         selected does  NOT  alter line length or character width.  To do
         so would give unpredictable results in the  output  format.    A
         typical  alternate  use  for  the italics mode would be a ribbon
         color change.


                                 BLANK CHARACTER
         NEAT treats true space characters as breaks between words  which
         may be padded for justification.  Periods followed by spaces are
         considered  as  sentence ends, and will be preferentially padded
         with spaces.  Sometimes, it is  not  desirable  to  allow  extra
         spaces,  especially  between  a  person's  title and their name:
         Mr. Jones.  The blank character, which defaults to  "@"  can  be
         used  to  fool  NEAT  into  thinking that the entire string is a
         single word, since the blank character is not  recognized  as  a
         space.   However,  when  the formatted line is output, the blank
         character is trapped and a true space is output  instead.    The
         blank character  may  be  changed  with the ".bc" command.  Note
         that the current blank character will always print as  a  space,
         never as  itself.    If  you want to literally print the current
         blank character, change the blank character  to  something  else
         first.


                                  MERGING FILES
         NEAT  can  be  used  as  a mail merging program, to allow a form
         document to be  printed  many  times,  with  different  data  in
         certain areas  for  each  copy.    The  merge  character  is the
         vertical bar (|) character, and becomes significant  only  if  a
         merge  file  is  open  and  the  merge  character  is  used in a
         particular manner.  The merge character may be changed with  the
         .mc command.    If  you change the merge character in the source
         file, use the modified character in the merge file as well!
         Merge information is contained in the merge file, with the merge
         character separating each field.  All information for  a  single
         source  copy  must  be  on  a  single  line of not more than 190
         characters.  One copy of the source file is  produced  for  each
         line  in  the merge file, unless the -B and -E options are used.
         A typical address line in a merge file may look like this:

         John Doe|1234 Graft Drive|Chicago, IL

         In the source file, each merge field is identified by  a  number
         between the  merge  characters:  |1| .  The number refers to the
         merge field in the associated merge line.    If  a  merge  field
         doesn't  exist  or is empty, then the resulting output will also
         be empty.  The address heading for a letter using the above line


                     NEAT Text Formatter             Page 15             








         


         would look like:

         |1|
         .br
         |2|
         .br
         |3|
         .br
         |4|
         .sp

         The  fourth field would allow for a potential fourth line in the
         address.  Any merge field can be used as often as desired in the
         source file.  The name field in this example could then be  used
         in the greeting:

         Dear Mr. |1|:

         The  number of merge fields is limited only by the length of the
         merge line.


                                    USER INPUT
         The .pr command may be inserted anywhere in a file to prompt the
         user for data from the keyboard.  All entered text is  processed
         as  though  it  were  part  of  the current source file, until a
         control-Z character is entered.  Since text is read through  the
         DOS  "standard  input"  channel,  input  redirection via the '<'
         operator on the command line is possible.  Please note that this
         feature is ONLY available when using  the  "-Q"  option  on  the
         command line.























                      NEAT Text Formatter             Page 16            








         


         VI. CONFIGURATION FILES
               Printer and port configuration is established by  optional
         configuration files.   If no file is present, the output of NEAT
         defaults to LPT1: and the printing controls default to those for
         an Epson MX/FX/RX series printer.  If no configuration  file  is
         specified  on  the  command  line,  NEAT  looks for a file named
         NEAT.CFG. The current directory is searched  first  and  if  not
         found,  the  PATH  environment  string is searched for the file.
         Normally, NEAT.EXE and NEAT.CFG should be in the same directory,
         and if that directory is in the PATH, then it will  be  possible
         to  run  NEAT with proper configuration from any other directory
         desired.  A different configuration file may be specified on the
         command line, and the same order of searching will be performed.
         However, if a command line configuration file is specified  with
         a  drive  or  directory,  then only that drive/directory will be
         searched for the file.  Any configuration item not found in  the
         file defaults  as  indicated  above.    A file named NULL.CFG is
         provided with NEAT which turns off all font controls.   This  is
         useful  to  create  a  document  file for distribution to others
         whose printer abilities are not known. (This is how NEAT.DOC was
         formatted.)
               Entries in the configuration file may be in any order, but
         only one entry can be on a line.  All printer control characters
         are entered as decimal number strings, separated by commas.   In
         addition  to  font controls, a printer initialization string and
         closing string are provided,  plus  a  default  NEAT  output  if
         different than LPT1:, and a name string which is reported to the
         display when  the  program  reads the entry.  The name string is
         for user enlightenment only; it does  not  affect  operation  of
         NEAT.  Each  control code entry consists of a series of numbers;
         the first number is the number of control  characters  to  send,
         and can  be  set to 0 to disable the feature.  Do not count this
         first number in the total.  Each control character then  follows
         in the  order  in  which  it should be sent to the printer.  All
         control character  definitions  are  separated  by  commas.    A
         maximum of 9 control characters are allowed in any field.  Extra
         characters  are  ignored,  as there is a finite amount of string
         space in the NEAT program for each entry.  Leading zeros are not
         needed.  Entries must  be  formatted  as  follows  (do  not  add
         unnecessary space characters):














                      NEAT Text Formatter             Page 17            








         


         ;Double Width ON (+) and OFF (-)
         D+=character count,first character, second character, nth character
         D-=    "          ,     "         ,      "          ,      "
         ;Underline ON (+) and OFF (-)
         U+=character count,first character, second character, nth character
         U-=    "          ,     "         ,      "          ,      "
         ;Boldface ON (+) and OFF (-)
         B+=character count,first character, second character, nth character
         B-=    "          ,     "         ,      "          ,      "
         ;Double Strike ON (+) and OFF (-)
         S+=character count,first character, second character, nth character
         S-=    "          ,     "         ,      "          ,      "
         ;Letter Quality Mode ON (+) and OFF (-)
         L+=character count,first character, second character, nth character
         L-=    "          ,     "         ,      "          ,      "
         ;Italics ON (+) and OFF(-)
         I+=character count,first character, second character, nth character
         I-=    "          ,     "         ,      "          ,      "
         ;The following are the 10 user-defined control codes
         1=     "          ,     "         ,      "          ,      "
         2=     "          ,     "         ,      "          ,      "
         3=     "          ,     "         ,      "          ,      "
         4=     "          ,     "         ,      "          ,      "
         5=     "          ,     "         ,      "          ,      "
         6=     "          ,     "         ,      "          ,      "
         7=     "          ,     "         ,      "          ,      "
         8=     "          ,     "         ,      "          ,      "
         9=     "          ,     "         ,      "          ,      "
         0=     "          ,     "         ,      "          ,      "
         ;following sets default initialization of no justification
         ;(see text which follows)
         .nj
         ;following changes default right margin to 90 chars
         .rm 90
         ;Initialization String
         O=     "          ,     "         ,      "          ,      "
         ;Closing String
         C=     "          ,     "         ,      "          ,      "
         N=Name of this configuration file
         ;Default output if different than LPT1:
         P=2
         ;Semi-Colon denotes a comment line which is ignored

         Several  configuration  files  are  included   with   the   NEAT
         distribution to  support different printers.  Rename the desired
         file to NEAT.CFG and modify it as necessary.    Notice  that  to
         disable  a  feature  not  supported  by  a  printer,  specify  a
         configuration ON/OFF value of 0 characters.
               The printer assignment defaults to  LPT1:  using  ROM-BIOS
         access, which  is  very  fast.   Changing the "P=" string in the
         configuration file to "P=2" or "P=3" will alter output to  LPT2:
         or LPT3:  respectively.   Giving the entry "P=P" will set output


                     NEAT Text Formatter             Page 18             








         


         to the  DOS  channel  PRN:.  This is somewhat slower, but allows
         access  to  serial  ports  if  the   PRN:   channel   has   been
         appropriately re-directed.    Any  command line redirection will
         override the "P=" entry in the configuration file.
               Several of the "dot commands" can also be specified in the
         configuration file, just as though they were in the text.  These
         commands will take effect at program initialization, and at  the
         beginning of  each new copy of the printout.  The "dot commands"
         allowed are:
             .nf - turn line filling off
             .nj - turn justification off
             .ls - select line spacing
             .pl - specify page length
             .lm - specify left margin
             .rm - specify right margin
             .cc - change command character
             .mc - change merge character
             .bc - change blank character
             .m1 -
             .m2 -
             .m3 -
             .m4 - set margins 1 through 4
         Each command should be specified exactly as it would  be  if  it
         were issued in the text, including any required parameters.






























                      NEAT Text Formatter             Page 19            








         


         VII. USING DAISY WHEEL PRINTERS
               NEAT is an ideal  program  to  operate  with  Daisy  Wheel
         printers, and a sample configuration file, D630.CFG, is provided
         with codes  for  Diablo  630  type codes.  If using single sheet
         paper, be sure to use the -L option  and  align  each  sheet  as
         needed.
               Changing  of  the printwheel can be done within a printout
         by the use of  the  .cw  command.    This  command,  when  used,
         suspends processing  and  waits  for any keypress.  This feature
         can be used to provide a pause in the printing for changing  the
         wheel.   When  it  is  changed,  simply  type  any key to resume
         processing.  An optional string  to  the  .cw  command  will  be
         displayed on the screen.  Unfortunately, you can't change in the
         middle of  a  line,  but  you  can  change at any line break.  A
         typical command sequence would look like this:

              some text
              some more text
              this is the end of a sentence.
              .cw Orator 90%
              The text continues on a new line here
              and here is still more text.

         When this file gets printed, the .cw command  will  display  the
         message "CHANGE WHEEL: Orator 90%" and wait for a keypress.





























                      NEAT Text Formatter             Page 20            








         


         VIII. CHARACTER TRANSLATION
               NEAT provides a character translation feature.  This means
         that any character from the input can be changed to a  different
         character when  output.    This is a handy feature when printing
         files which contain characters from the extended  IBM  character
         set  on a printer which does not support those extra characters.
         This would include almost all  daisy  wheel  printers  and  many
         dot-matrix printers   from   pre-IBM   days.      The  character
         translations are user-created and contained in a  special  file.
         Like  the  CFG configuration file, it is a plain text ASCII file
         which may be created or modified with  any  plain  text  editor.
         The distribution of NEAT contains two translation files:
                 NONIBM.XLT
                 NORMAL.XLT
         The  NONIBM.XLT  file  translates  all  characters  from the IBM
         extended set to the nearest normal ASCII character, or  in  some
         cases just  periods  and  spaces.  There is nothing sacred here;
         modify as you see fit!    The  other  file,  NORMAL.XLT,  really
         doesn't  translate  anything, since each character is translated
         to itself.  It is provided more as an  example  and  a  starting
         template for translation files of your own.
               A  translation  file  consists  of  1  or more lines, each
         translating a  single  character.    In   the   computer   world
         characters are actually numbers in the range of 0-255 (decimal).
         Numbers  0-31  are  "control  characters" and are not printable.
         This includes line feeds, carriage returns, form feeds, and many
         other specials.  Numbers 32-126 are normal letters, numbers, and
         punctuation.  Number 127 is kind of special.  Some printers will
         print it as a solid block, others will simply ignore it or print
         a space instead.   The  numbers  128-255  are  the  special  IBM
         characters,   and   contain   foreign   symbols,   line  drawing
         characters, various  shaded  block  characters,  and  the  like.
         Translation  is  a  process  of defining a character and its new
         value as follows:
              179=124
         In this example, the  single  vertical  bar  graphic  character,
         #179,  is  to  be  printed  as the ASCII broken vertical bar (|)
         character #124.  It's that simple!  Do  you  need  to  translate
         everything?  No.    All characters will be left unchanged unless
         there is a translation value.  In the above example, if that was
         the only character to translate, then  that  is  the  only  line
         required in  the translation file.  The syntax is not difficult,
         but it isn't forgiving either.  The form is nnn=nnn,  where  the
         first   number  is  the  decimal  number  of  the  character  to
         translate, and the second number is the decimal  number  of  the
         character to  substitute.  Leading zeros don't hurt, but they're
         not needed either.  Each number is separated by  ONLY  an  equal
         sign (=).   Each  number  must  be in the range of 0-255.  Other
         values are reported as errors.  Character translations may be in
         any order within the file.  They do not need to be in  numerical
         order.   Any  line  beginning  with  a semi-colon is a "comment"
         line, and may be used to add information to the file which  will


                      NEAT Text Formatter             Page 21            








         


         be ignored.  In addition, comments may be added on a translation
         line if the second number is followed by  at  least  one  space.
         This  is  even  handier for documenting what is being changed to
         what.
               All characters except carriage return  (13)  and  linefeed
         (10) may be translated.  These may be entered in the translation
         file,  but NEAT will stubbornly put them back the way they were.
         Can't play with the characters that signal the end  of  a  line!
         In  addition,  be  careful  about  the control-Z (26) character.
         This is a control character which signals the end of a text file
         to many programs, NEAT  included.    If  you  translate  another
         character  to  this  value, you will be inserting an end-of-file
         mark into your output where you probably don't want one.   There
         is  no  automatic  protection  against  changing  or  using this
         character.
               The rules for specifying a translation  file  are  exactly
         the  same  as  for specifying a "CFG" configuration file, except
         that the extension is "XLT".  Like CFG files, if no XLT file  is
         specified  on  the  command  line then the current directory and
         PATH are searched for a possible NEAT.XLT file.  No  problem  if
         it doesn't  exist.    If one isn't found, then no translation is
         done.  Or, use any other XLT name on the command line to  invoke
         a translation file.    You may use multiple files, too.  Perhaps
         one file translates all the  extended  characters,  and  another
         translates all lower case to upper case.  You could specify both
         files to  perform both translations.  Remember, the command line
         is  parsed  left-to-right,  which  means  that   the   left-most
         translation  file will be read before the right-most translation
         file.  This only  becomes  significant  if  each  file  were  to
         translate the  same character or characters.  The last file read
         (right-most file) would be the one that would actually determine
         the translation.  Also, if you want to use a special translation
         file and the default NEAT.XLT file, you must specify both on the
         command line since the automatic search for NEAT.XLT is canceled
         if any XLT file is specified on the command line.



















                     NEAT Text Formatter             Page 22             








         


         IX. PROGRAM OPERATION
               First,  understand  that there are two modes in which NEAT
         may operate; the "quiet" mode, and the  normal  mode.    If  the
         "quiet"  mode  is  selected, via the -Q option when invoking the
         program, most of the information in this  section  will  not  be
         true.  In the "quiet" mode, NEAT just sits there and attempts to
         generate  output,  and only sends messages to the console in the
         event of a prompt command (.pr) or  fatal  error.    If  the  -Q
         option is NOT used, then NEAT will present a box on the console,
         containing information  about  what  it  is  doing.    This  box
         contains the names of active files, the  page  number  currently
         printing,  the  copy  number printing (if more than 1 copy), and
         the total sheets printed so far.  Note that the page  number  in
         the  display  will match the page number used in the headers and
         footers, while the sheet number is the total  number  of  sheets
         printed.
               If  output  is  being  sent to one of the printer channels
         LPT1, 2, or 3, NEAT will constantly  check  the  status  of  the
         printer to  verify  that it is ready for data.  If an abnormally
         long time passes  without  being  ready,  an  error  message  is
         displayed in the box.  Correct the printer problem and press any
         key EXCEPT  the <ESC>ape key to continue printing.  The <ESC>ape
         key may be used to abort the processing of the file.
               At any time that NEAT is  processing  data  (except  while
         waiting  for  the  printer  to  become ready) the program may be
         interrupted with the <ESC>ape key.   You  will  be  prompted  to
         abort  the  program  with  a 'Q' key, or continue with any other
         key.   Interrupting  the  program  with   the   <Control-C>   or
         <Control-Break>  key  will immediately cancel further processing
         and exit to DOS.
               NEAT uses the standard DOS critical error handler.    This
         is  the  one  that displays the "Abort, retry, ignore" prompt on
         the console.  For technical and economic  reasons  the  decision
         has  been  made not to add a special disk error handler to NEAT.
         This means that the nice box display may get messed  up  in  the
         event of  a  critical  disk  error.   This is NOT a program bug.
         Simply reply to the error prompt  as  necessary  and  NEAT  will
         continue processing  data.  It is never a good idea to reply 'I'
         to a DOS critical error.  If you tell DOS to 'I'gnore an  error,
         garbage  data  will  be sent to NEAT and in turn be generated as
         well. (Garbage in, garbage out!)













                     NEAT Text Formatter             Page 23             








         


         X. "We get Letters, Stacks & Stacks of Letters..."
               If  you're old enough to remember Perry Como's show you're
         permitted to chuckle at this chapter's title.   Seriously,  here
         are  some  of the questions asked by users of previous versions.
         They are included here to  assist  you  in  using  NEAT  without
         having to wait for a reply from me.

         *Q.  "Just  before NEAT exits after doing its work, a commercial
         is displayed and if I hit any key other than  N  a  registration
         form is printed  out.    This  is  somewhat annoying.  Can I get
         around this?"
         *A. You sure can!  Register the program!  All registered  copies
         of NEAT have the "commercial" defeated.

         *Q.  "Your distribution disk has all the NEAT files, plus an ARC
         file as well.  The ARC file seems to have the same stuff.    Why
         is it there?"
         *A. This is explained in the "README" file on the disk.  The ARC
         file  is for uploading to your favorite BBS or sharing with your
         friends.  It is virtually the same  as  your  registered  files,
         except that it contains an unregistered version of NEAT.EXE, and
         is  already ARC'd in an acceptable format for any BBS. This is a
         convenience for you, and a help for me, since  it  prevents  too
         many registered  copies  from being posted.  Thank you for using
         this file as the "share" copy!

         *Q. "Do you accept VISA or Mastercharge?"
         *A. No, unfortunately.

         *Q. "Do you offer volume discounts or site-licensing?"
         *A. Yes.  Write me or EMail me with your requirements  and  I'll
         make you an offer you can't refuse!

         *Q.  "I  am  a school teacher and I would like to use NEAT in my
         computer classes.  Do  I  need  to  purchase  a  copy  for  each
         computer in the class, or for each student?"
         *A. Certainly  not.   If you would like a complementary copy for
         use in class, just write me on your school's letterhead.  You'll
         get a distribution disk from which you can make copies for  your
         students.   All  I  require is that you explain to your students
         (and other faculty!) what Shareware is,  and  that  they  should
         purchase  their own copy if they are going to use the program on
         their OWN computer OUTSIDE of class.  Use within a class as part
         of the course I consider to be "evaluation" use.    However,  if
         the  program  is going to be presented to the student as part of
         books or other materials for which the student is charged,  then
         you WILL  have to negotiate a site license agreement with me.  I
         have no problem with a school district using my  work  to  teach
         computer  techniques,  but  I  do have a problem with the school
         "selling" my product.




                      NEAT Text Formatter             Page 24            








         


         *Q. "I'm a minister of the First ------- Church.  Do  you  waive
         your registration fee if the program is  used  in  a  charitable
         organization?"
         *A. Does  General  Motors  give  you a free Buick?  I appreciate
         what you do for a living, but please appreciate  what  I  do  as
         well.  If  I come to your church, I'll make an offering.  If you
         use my software, I'll be expecting your check.

         *Q. "Your program is nice, but I only need it about once a month
         to print a special report that looks better with  justification.
         That isn't  using  it  often  enough  to register.  Just thought
         you'd like to know its useful, though."
         *A. You use your car only once a week to go fetch  groceries  so
         you shouldn't  have  to  pay  for it?  Have you met the minister
         from the previous question?  If you find the program of ANY use,
         you are OBLIGATED to register it.  I'll be expecting your check,
         too!

         *Q. "I want to use NEAT, but my printer is a serial  printer  on
         COM port 2.    How  can I use it?  Your options do not allow for
         serial printers."
         *A. Oh yes they do!  If you have  a  serial  printer,  you  have
         undoubtedly  used  the  DOS  "MODE"  command  to assign the PRN:
         channel to the COM port used by your printer.  So, in  all  your
         .CFG files, set the printer option:
               P=P
         to  assign  the  PRN:  channel  as  the default for the program.
         Alternatively, redirect the output of NEAT to whichever COM port
         your printer is assigned, or to PRN:.

         *Q. "Does your program work with resident spooler programs?  Are
         there any conflicts with other programs?"
         *A.    NEAT does not "chain" onto any DOS  interrupt,  so  there
         are no  known  problems  with  other  programs.  As long as your
         print spooler software traps all data assigned to one of the LPT
         channels, it will handle the output of this program very nicely.
         However, it has been tested only  with  "PRINTQ",  a  commercial
         spooling program  from another manufacturer.  Although it should
         work with any other, I can make no guarantees.  Chances are that
         if other programs which output to the  printer  work  with  your
         spooler, NEAT will too.

         *Q. "Does NEAT 'spool' files?"
         *A. No, it just prints them.  To spool files you will need other
         software or  hardware.   An excellent software program is PRINTQ
         (available everywhere) which costs around $100.    However,  for
         about  $150  you can get a hardware printer buffer of up to 128K
         bytes of  space.    A  hardware  buffer  is  by  far  a   better
         investment,  since it does not depend upon a particular computer
         or operating system, and because it doesn't attempt to make  DOS
         a multi-tasking  system.    In  other words, it runs MUCH faster
         than spooling software.


                     NEAT Text Formatter             Page 25             








         



         *Q.  "Why  don't  you have a printed and bound manual instead of
         making us print out our own?"
         *A. First, you can't post a printed manual on a BBS or  send  it
         on a  disk.  Second, many shareware programs do not have printed
         manuals for that and economic reasons.  There's no way  to  sell
         this program for $15 with a fancy printed manual.  Would you pay
         $35  for  NEAT  with  the only improvement a bound, glossy-paged
         manual?  I feel that the lower price is more attractive than the
         "glitter" of a fancy manual.  Most manuals just sit on  a  shelf
         and catch dust anyway.











































                      NEAT Text Formatter             Page 26            








         


         XI. SHAREWARE
               Shareware  is  "try-before-you-buy"  software,  reasonably
         priced and  user-supported.   This simply means that you can get
         trial copies of shareware from anyone who has a copy,  or  often
         from bulletin  board  systems.  If you use and like the program,
         then the author asks that you register  (purchase)  the  program
         for an amount usually much smaller than an equivalent commercial
         program.   By  registering you will often also receive notice of
         available upgrades or supplemental programs.  Keep in mind  that
         the  purchase  of  a program from a public domain distributor or
         payment to an online  service  (such  as  CompuServe)  does  NOT
         constitute registration of the program since the producer of the
         program does  NOT  receive one penny of that payment.  Shareware
         is NOT public domain software, and continued use  of  a  program
         carries with  it  the  OBLIGATION  to purchase the program.  The
         free  distribution  method  is  intended  only  as  a  means  of
         obtaining a copy to evaluate before purchasing.
               NEAT is  a  shareware  program.    If  you  use it, please
         complete the order form enclosed with the distribution, or allow
         NEAT to print an order form for you. (This is a feature  present
         in  unregistered  copies  only.) You will be placed on a mailing
         list for any future upgrade notices, and will be registered as a
         user of this program.  You will also receive a diskette with the
         latest version of the program and documentation.  Online help is
         available  through  CompuServe  (74435,1042)   or   GEnie   mail
         (S.MARGISON).   Sorry,  but  online  help  is  available ONLY to
         registered users.
               Help is also available by mail.  I will try to answer  all
         letters within  48  hours.   Non-registered users must include a
         SASE for a reply.  The degree of help offered to  non-registered
         users is  purely  discretionary.  No phone calls, please. (Users
         outside the U.S. cannot, of course, send a SASE. I  will  excuse
         you from this requirement.)
               NEAT may  be  freely exchanged or given away.  However, it
         may not be included or "bundled" with any software which is sold
         or is a commercial product without prior permission.  No  charge
         may  be  made for copying or transferring the files, except that
         PC Users groups and PD/Shareware distributors (such  as  PC-SIG,
         or  Houston's  Public Software Library) may charge a nominal fee
         not to exceed $6.00. (Please request a complementary copy of the
         latest release rather than use a copy from another user.    This
         insures  that you have the most accurate copy, and that you will
         be on my list for future updates.)
               NEAT and its documentation  may  not  be  transferred  nor
         exchanged in  any  modified  form.  I cannot be expected to help
         others use this program if it is not the same  as  it  was  when
         distributed.   Under  no circumstances may the copyright notices
         be altered or removed from the program or this documentation.
               If you decide not to use NEAT, then just erase it or  pass
         it on  to  someone  else.    If you do use it, please honor your
         obligation and send in your registration.  Inexpensive shareware
         cannot continue to exist if those who use it treat it as a gift,


                     NEAT Text Formatter             Page 27             








         


         rather  than  as  a  product  for  which the author must receive
         payment.  Shareware used regularly  without  payment  is  piracy
         just   as  much  as  illegally  copying  "Lotus"  or  any  other
         commercial product.  Ignore  the  claims  by  some  people  that
         shareware, because of its unique distribution method, carries no
         obligation to  the  regular  user.   These claims are false, and
         discourage many good programs from remaining as shareware.















































                     NEAT Text Formatter             Page 28             








         


         XII. WARRANTY
               Oh,   this   shouldn't  be  necessary  among  friends  and
         gentlemen, but it's really the lawyers who  run  the  world  and
         they say we gotta do this:


              ** NEAT and this documentation are copyright 1986 - 89
              by Steven E. Margison.


              ** This program and documentation are provided "as is"
              without  warranty  of  any  kind,  either expressed or
              implied, including but  not  limited  to  the  implied
              warranties   of  merchantability  and  fitness  for  a
              particular purpose.


              ** The user of this program and documentation agree to
              hold the author and/or distributor(s) of this  program
              and   documentation   harmless   for   any  direct  or
              consequential damages resulting  from  its  use.    In
              other words, "you're on your own!"


              **  IBM  is  a  registered  trademark of International
              Business Machines Corporation.


              ** All other trademarks used in this manual are hereby
              acknowledged.
























                     NEAT Text Formatter             Page 29             








         


         =======================================================================
                      SOFTWARE REGISTRATION FORM AND ORDER
         =======================================================================
         A separate form must be filled out for each product ordered or
         registered.  This form may be photocopied, printed out, or
         edited to include all information and re-printed.
         
         PRODUCT: ---------------- NEAT Text Formatter V3.00  -------------------
         
         Quantity                                                 Amount:
         
         ____   Standard non-commercial registration   $15.00     $______
         
                Shipping (outside of U.S. or Canada)              $ 2.00
         
         
         Corporations: Please inquire about multi-copy discounts
                       and site licenses.
         
         
                                          TOTAL ENCLOSED:         $______
         
              Payment must be made in U.S. Funds
         
         If you already have this program, where was it obtained?
         [ ]CompuServe  [ ]Friend  [ ]Employer  [ ]BBS:__________________
         Version___________ Serial No._______________
         
         Payment is by check[ ] or money order[ ] (Sorry - no COD or charges)
         
         NAME _______________________________________________________
         
         COMPANY ____________________________________________________
         
         ADDRESS ____________________________________________________
         
         CITY _______________________________________________________
         
         STATE___________________________ ZIP _______________________
         
         =======================================================================
         Send completed form and payment to:
                             Steven E. Margison
                              124 Sixth Street
                          Downers Grove, IL, 60515
         =======================================================================








         









```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1540

     Volume in drive A has no label
     Directory of A:\

    D630     CFG       322   8-31-89  10:07p
    FILE1540 TXT      1869  10-02-89  12:53p
    FLYER    TXT      7823   7-30-89  10:41a
    GO       BAT        14   9-28-89   8:56a
    IDSPRISM CFG       356   8-31-89   9:32p
    LABELS   CFG       175   8-31-89   9:33p
    MX80FT   CFG       180   8-31-89   9:31p
    NEAT     CFG       834   9-06-89  12:46p
    NEAT     DOC     76847   9-06-89   7:44p
    NEAT     EXE     34340   9-06-89   6:17p
    NEAT     MAN     60853   9-06-89   7:44p
    NONIBM   XLT      1471   8-09-89   9:50a
    NORMAL   XLT      2084   8-09-89   9:50a
    NULL     CFG       339   8-31-89   9:35p
    OKIML84  CFG       422   9-06-89  12:53p
    OKIPACE  CFG       393   9-06-89  12:53p
    ORDER    FRM      2010   7-30-89  10:42a
    PAGE     COM       325   1-06-87   4:21p
    README            1856   9-06-89   1:07p
    ROMAN    CFG       650   8-31-89   9:35p
    SERIF    CFG       655   8-31-89   9:35p
    SPG8010  CFG       401   9-06-89  12:53p
           22 file(s)     194219 bytes
                          115712 bytes free
