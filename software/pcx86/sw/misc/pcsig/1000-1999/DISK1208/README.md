---
layout: page
title: "PC-SIG Diskette Library (Disk #1208)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1208/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1208"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "GOSPEL CONCORDANCE"

    GOSPEL CONCORDANCE lists every word of the four gospels of the Bible in
    alphabetical order and the passages where each is found. Of interest to
    Bible students and ministers, this research tool helps with word
    studies, finding a particular passage, and comparing the accounts of the
    four gospels. When unarchived, the GOSPEL CONCORDANCE occupies a total
    of three floppy disks.
    
    An included program, LIST.COM, allows you to directly view the
    concordance text files on your screen or you can use any standard
    wordprocessor. All of the files pertaining to the GOSPEL CONCORDANCE
    are simply text files that you can view or print. Also on this disk is
    a catalog which lists other program study aids for the Bible.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## LICENSE.DOC

{% raw %}
```

        GOSPEL CONCORDANCE  is  supplied  for  personal,  private  use.
        Feel free to distribute GOSPEL CONCORDANCE given these restrictions:

          *  the program  shall be supplied in its original,  unmodified
             form, which includes this documentation;

          *  my purpose in getting this to you as shareware is to let you know
             what I have available which is over 500 disks of Bible related
             software and Bible studies at $2.00 a disk.

          *  no fee is charged;

          *  for-profit use without a license is prohibited;

          *  the program may not be included -  or bundled - with  other
             goods or services.  Exceptions may be granted upon  written
             request only. This applies to clubs and distributors, too.


        If you are  using GOSPEL CONCORDANCE and  find it of  value, your gift  in any
        amount ($6.00 for all three disks) will be greatly  appreciated. Please make
        checks payable in U.S. dollars to Biblesoft Co. Att: Raymond Hamilton
        P. O. Box  308  Greenleaf, Idaho  83626

```
{% endraw %}

## FILE1208.TXT

{% raw %}
```
Disk No: 1208
Program Title:  GOSPEL CONCORDANCE
PC-SIG version 1

GOSPEL CONCORDANCE lists every word of the four gospels of the Bible
in alphabetical order and the passages where each one is found.  Of
interest to bible students and ministers, this research tool helps
with word studies, finding a particular passage, and comparing the
accounts of the four gospels.  When unarchived the GOSPEL CONCORDANCE
will occupy a total of three floppy disks.

An included program, LIST.COM, allows you to directly view the
concordance text files on your screen or you can use any standard word
processor.  All of the files pertaining to the GOSPEL CONCORDANCE are
simply text files that you can view or print.  Also on this disk is a
catalog which lists other program study aids for the Bible.

Usage:  Bible Study Aid.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $9.00

File Descriptions:

GO       BAT  Batch file that lists README.NOW.
README   NOW  Instructions for unarchiving files.
LIST     COM  Program to view concordance files.
PKXARC   COM  Program to unarchive files.
LISTDOC  ARC  Archive containing instructions for LIST.COM.
BIBLSOFT ARC  Archive containing a program catalogue.
GOSPEL3  ARC  Archive containing the Gospel Concordance.
GOSPEL1  ARC  Archive containing the Gospel Concordance.
GOSPEL2  ARC  Archive containing the Gospel Concordance.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1988 PC-SIG, Inc.

```
{% endraw %}

## LIST62A.DOC

{% raw %}
```








                         LIST Version 6.2a
                (c) Copyright  Vernon D. Buerg 1987
                        All rights reserved

                             May 7, 1987








                         Table of Contents
                         -----------------

                Description of use ...............  1

                Keys and commands ................  3
                  Function keys ..................  4
                  Alt- keys ......................  5

                Positioning to lines .............  6

                Displaying multiple files ........  6

                Extracting/marking lines .........  7

                Display format ...................  8
                  Status line ....................  8
                  Command line ...................  9

                Screen colors .................... 10

                Cloning procedure ................ 11
                  DEBUG information .............. 12

                Searching for text................ 13

                Filtering ........................ 14

                Exotic functions ................. 15
                  File sharing ................... 15
                  Invoking DOS commands .......... 15
                  Screen saving .................. 15

                Restrictions ..................... 16





                                                        LIST     Page 1
                          Description of Use
                          ------------------

   Command  LIST
   -------------


   Purpose:
           You use LIST to display  files on your monitor, line  by line
        with the aid of scrolling, positioning and filtering commands.


   Format:
                 LIST  [d:][path]filename[.ext]


   Remarks:
           You may rename the program file to any convenient name,  such
        as  L.COM,  READ.COM,  or LIST.COM.

           Using LIST is fairly straight forward.  You type the  command
        LIST at the DOS  prompt, followed by the  name of the file  that
        you want to see.  For example: LIST CONFIG.SYS would display the
        file CONFIG.SYS.

           Once the file  is displayed on  your screen, you  may use the
        cursor positioning keys to  move around and see  different parts
        of the file.  For example,  when LIST first starts, you  see the
        first 23 lines of the file.  To see the next 23 lines, or  page,
        press the PgDn key.   The PgUp key moves  you back one page  and
        shows you the  previous 23 lines.   The up-arrow and  down-arrow
        keys move it  one line at a time.  When you are finished,  press
        the ESCape key and you are returned to the DOS prompt.

           The "filename" is optional.  If omitted, you are prompted  to
        enter  a filename.   You  may  include  drive,  path,  and  wild
        cards in the file name.   The first file which matches that name
        is displayed.  After  the file is displayed, the next file which
        matches the "filename" may be displayed, too.

           You may also use LIST  to display piped or redirected  files.
        If you are unfamiliar with these, you may skip to the next page.

        To display a redirected file, use a < (less than symbol)  before
        the name  of the  file  and  add the  /S parameter  to the  LIST
        command.  For example:

                dir a: >xyz
                list <xyz /s

        To display a piped file,  omit the filename,  but supply the /S.
                dir a: | list /s

        Or, to LIST a file within an ARC archive:
                arc /p arcname.arc filename.ext | list /s
                                - or -
                arce arcname filename.ext /p | list /S


LIST     Page 2

                         Description of Use (cont'd)
                         ------------------

           Because  files  contain  different  kinds  of data, there are
        several commands  to tell  LIST how  to display  the data.   The
        process that LIST uses to make the file data readable is  called
        filtering.  The filters in LIST can:

            o  replace non-text and control characters with blanks
            o  expand TAB characters
            o  display line drawing characters
            o  change 8-bit (W*) data to readable 7-bit text
            o  display the hexidecimal values for each character
            o  remove "junk", such as control codes and backspaces

           LIST was  designed to  display ASCII  files.  That  is, files
        which  contain  text, and  not  binary  or  control codes.  Text
        characters usually  range from  a value  of 32  to 127.  To view
        binary  files  (COM,  EXE,  etc),  the  alt-H (hex dump display)
        command is available.


           Characters  below  32  (a  blank)  are  replaced with a funny
        character to indicate that a non-displayable character has  been
        encountered.  This  character is  an upside-down  question mark.
        Characters above 127 may be valid graphic characters, and may be
        displayed  if  the  '8'  command  is  in effect.  To insure that
        characters above ASCII value 127 are not displayed, use the  '7'
        command.


           The top  line of  the display  gives the  file name,  current
        right  scroll  offset,  and  the  FILE's creation date and time.
        Optionally, a ruler  may be displayed  on the top  line by using
        the alt-R keys.

           The  file  is  displayed  with  one  logical  record  on each
        80-column display line.   A logical record  ends in a  linefeed.
        The maximum logical record may  be 256 characters long.  If  the
        record exceeds 80  characters, you may  view the portion  beyond
        the 80 columns  by using the  scroll right command,  or by using
        the  Wrap  feature.   The  Wrap  command  toggles  ON or OFF the
        wrapping  of  lines  longer  than  80 characters.  With Wrap on,
        lines are displayed in their entirety, 80 characters per display
        line.  The scroll -left  and -right functions are  disabled when
        Wrap is ON.

           The file may  be PRINTed as  it it displayed.   The P command
        toggles  the  printer  on  or  off.   When  first entered, the P
        command causes the current screen  to be printed.  As new  lines
        are displayed, they too are printed.  Printing may be stopped by
        entering another P command.  The PrtSc key may also be used, but
        the title and prompt lines will be printed with the lines of the
        file.  Empty lines  cause a line  to be skipped  on the printer.
|       The letter P  is displayed on the bottom command     line  while
|       printing. See the section on extracting lines for other methods.


                                                        LIST     Page 3

                        Commands and Keys
                        -----------------

        Control key   Function
        -----------   -----------------------------------------------
|       left arrow    scroll left 10 columns
|       right arrow   scroll right 10 columns
        up arrow      up one (previous) line
        down arrow    down one (next) line

        Enter         continue to next page
        END           position to end of file (bottom)
|       ESCape        Exit program unconditionally
        HOME          restart from first line (top)
        PgUp          scroll up one page, 23 lines
        PgDn          scroll down one page, 23 lines


        Letter(s)     Default   Function
        ---------     -------   ----------------------------------------
        A                       find next occurance of 'text' (Again)
        B                       skip to end of file (Bottom)
        C               off     toggles Closing of files, also alt-S
        D                       scroll Down one page
        F                       Find 'text' regardless of case
        G                       Get new filename/filespec (also alt-F)
        H or ?                  Help, show command list
        K               off     toggle Keyboard flush; if on, commands
                                may be queued up by holding a key down
|       L                       scroll Left 10 columns
        M               on      toggle test for display retrace, if on
                                the display is faster but may flicker;
                                not applicable to monochrome monitors
        N                       down one (Next) line
        P               off     toggle Printer on or off
|       Q                       Quit, display next file, or exit if only
|                               one file is being viewed
|       R                       scroll Right 10 columns
        S                       Scan for exact text match, case dependent
        T                       restart from first line (Top)
        U                       scroll Up one page (23 lines)
        W               off     toggle Wrap of lines over 80 chars
        X                       terminate, clear screen and eXit to DOS

        7               off     turn off high bit (non-graphics only)
        8               on      leave high bit on (graphics)
        *               off     toggles special * document filtering

        +                       position a given number of lines forwards
        -                       position a given number of lines backwards

        \text                   Find any case 'text' going forwards
        /text                   Scan exact case 'text' going forwards

|       `                       Find any case 'text' going backwards
|       '                       Find exact case 'text' going backwards


LIST     Page 4

                        Commands and Keys (cont'd)
                        -----------------



    Control key      Function
    -----------     ---------------------------------------------------
    ctl-HOME        positions to a specific line number
|   ctl-PgUp        display previous file (review)
|   ctl-PgDn        display next file (or exit if only one file)
    ctl-left-arrow  reset horizontal scroll position to column 1



    Function key     Function
    ------------     ---------------------------------------------------

     F1              Help - display summary of commands

     F3              Find next occurrance of text after Scan or Find

     F9              Find previous occurrance of text after Scan or Find

     F10             Exit to DOS with clear screen and cursor last line


     F2              change background color for Find/Scan text
     F4              change foreground color for Find/Scan text

     F5              change background color for main body of display
     F6              change foreground color for main body of display

     F7              change background color for top and bottom lines
     F8              change foreground color for top and bottom lines
























                                                        LIST     Page 5

                        Commands and Keys (cont'd)
                        -----------------

    alt- letter      Function
    -----------      ---------------------------------------------------

     alt-A           toggle Apxcore(on), DesqView/DoubleDos(off-default) use

     alt-B           mark bottom line

     alt-C           clone LIST.COM, change colors or options permanently,
                     in a new copy of the LIST.COM program file

|    alt-D           toggle dump mode: if no lines are marked, the current
|                    screen only is written to the specified file; if lines
|                    are marked, they are written to the dump file.

     alt-E           toggle 25/43 line display (does test for EGA). If the
                     actual EGA lines is not 25 or 43, don't use alt-E

     alt-F           prompt for new Filespec or filename to display
                     entering a leading asterisk (*) may be obscured
                     by some console enhancers or utilities, so enter
                     two asterisks, e.g. **.doc
     alt-G           Shell to DOS, invoke COMMAND.COM, requires 96k or more.
                     Use the DOS EXIT comand to return to LIST.

     alt-H           toggles hex dump formatted display

     alt-J           toggle adding line feed to lone carriage returns
                     and remove backspaces, overlaying previous characters

     alt-L           toggle preloading of files, default is OFF
                     When the file is pre-loaded, the ending line
                     line number becomes known.

|    alt-M           mark top line; marked lines may be printed or written
|                    to the alt-D dump file.

     alt-R           toggles display of a ruler on the top line

     alt-S           toggles file Sharing option, when off
                     files remain open until program termination

     alt-T           toggles expansion of TAB control characters, the
                     tab columns are a multiple of 8, i.e. 1,9,17, etc.
|                    The default is to expand TABs. See DEBUG section.

|    alt-U           unmark lines; line marks are removed

     alt-W           toggles split screen; when ON, the top half of
                     the screen is frozen. Further scrolling occurs
                     only in the bottom half of the screen (window)
                     until the alt-W keys are used again.

     alt-X           exits to DOS and displays the original screen
                     (unless screen saving has been disabled)

LIST     Page 6

                        Positioning to Lines
                        --------------------

           Each displayable line of the file is assigned a line  number.
        The first line is assigned line number 1.  The highest allowable
        line  number  is  65535.   In  order  to determine the last line
        number, the  entire file  must be  read.  For  this reason,  the
        first time that the END (bottom) command is issued, it will take
        longer  to  process.   This  is  not  necessary  if  the file is
        preloaded using the alt-L installation option.

           If the  Wrap option  is in  effect, there  is one line number
        required for each 80 bytes of the file's records.

           If the hex dump option is in effect, there is one line number
        required for each 16 bytes of the file.

           You  may  position  to  a  specific  line number by using the
        c-Home, Ctrl key  and Home key,  or the #  key.  When c-Home  is
        entered, you are prompted for the line number.  Enter the 1 to 5
        digit line number.   The display will  now begin with  that line
        number at the top of the screen.

           To position forward or backward, you may use the + (plus), or
        - (minus) keys.  You are  prompted to enter the number  of lines
        to be skipped.  The display resumes at the line number shown  on
        the top (status)  line, plus or  minus the number  of lines that
        you specified.

           When  you  change  a  filter  option,  such as Wrap, the line
        numbering changes.  An attempt is  made to retain the same  file
        position.


                        Displaying multiple files
                         -------------------------

           You can display more than one file by supplying wildcards  in
        the file name.  For example,  LIST *.DOC will display all  files
        with an extension of DOC.

|          To display the next file, you use the Q or ctrl-PgDn command.
        When the last file has been displayed,  you  can  exit  LIST  by
        using the  X,  F10,  ESCape, or alt-X commands, depending on how
        you want the screen to look when LIST ends.

           To display the previous file, you use the ctrl-PgUp  (control
|       and PgUp keys together).  LIST can keep track of up to 20  files
        at once.

           Another way to LIST  more than one file  is to use the  alt-F
        command.  Alt-F asks you for a new file name, and you may  enter
        a simple file name, or one that includes wild cards.  These  new
        file names are added to the table of filenames that LIST  keeps.
        Thus, you can use alt-F for several different filenames, and use
|       the ctrl-PgDn and ctrl-PgUp commands to move among them.

                                                       LIST     Page 7


                        Marking and Extracting Lines
                        ----------------------------

           There are two ways that lines can be extracted from a file:

              o  with the P (print) command, and
              o  with the alt-D (dump data) command.

           The lines to be extracted are either the current lines on the
        screen, or lines that you  have marked with the alt-M  and alt-B
        commands.

           To mark lines,  you use either  the alt-M or  alt-B commands.
        The alt-M command  marks the top  line on the  screen, and alt-B
        marks the bottom line on the screen.  You can use either or both
        commands to mark the starting and ending lines (in the range  of
        lines  to  be  extracted).   The  marked  lines are displayed in
        reverse video.

           After you have marked a range of lines, you use the P (print)
        command to print all of the  marked lines.  Or, you can use  the
        alt-D (dump data) command to  write those lines to a  file.  The
        alt-D command asks you  for a file name.   If the file does  not
        exist, a new one is  created.  If the files already  exists, the
        extracted lines are added (appended) to the file.

           For example, you  would like to  have LIST filter  out all of
        the junk in a file, and then write a new file.  To do this,  you
        might enter the following sequence of commands:

                list TESTDATA           ... display your TESTDATA file
                alt-J                   ... filters out the junk
                alt-M                   ... marks line 1 (top line)
                END                     ... positions to end of file
                alt-B                   ... marks the bottom line
                                                     (last line)
                alt-D                   ... dumps data to a file
                TESTDATE.NEW            ... you enter the new file name
                alt-X                   ... quit and return to DOS


|          Once you have marked a range of lines, use of alt-M  or alt-B
|       does not reset the entire line range.  The  first or last marked
|       line may change, but both do not change.  Use the  alt-U command
|       to unmark lines, especially after alt-D (dump) to be sure.













LIST     Page 8



                         Display Format
                         --------------

           The monitor display is defined in terms of lines and columns.
        A typical monitor can display 25 lines of 80 columns each.  LIST
        attempts to use the number of lines and columns for the  monitor
        mode in use.  For example, if the monitor is in 40 column  mode,
        LIST displays only 40 characters per line.  And, if the  monitor
        is set for other than 25 lines, such as 35 or 43, LIST uses that
        number of lines.

|          If you use the  alt-E command  to change  EGA modes,  the EGA
|       pallette,  cursor,  and other  settings are  set to  DOS default
|       values.  LIST does not preserve fonts or pallettes.

           The top line of the  display is called  the Status line.  The
        bottom line is called the Command line.  The remaining lines are
        called the  primary  display  window,  and are usually lines two
        through 24.


                         Status Line Format
                         ------------------

        The Status line has the following format:

                LIST   lllll nnnnnnn +sss mm/dd/yy hh:mm  - filename

        where,

        'LIST'     is the name of this program

        'lllllll'  is the line number of the first line in the
                   display window (usually on line 2)

        'nnnnnnn'  is the line number of the last record, if known

        '+sss'     if displayed, this is the Scroll amount, in
|                  multiples of 10, corresponding to the number
                   of columns that the display has been shifted
                   to the right to view records longer than 80

        'mm/dd/yy' is the file's creation date (not today's date)
        'hh:mm'    is the file's creation time (not today's time)


        Note:      The date and time  shown on the top line is  NOT  the
               current date.  It is the date and time  that the file was
               created.







                                                        LIST     Page 9

                         Command Line Format
                         -------------------

        The Command line has the following format:

      command message _________ Options: hbkmpswtalj Keys: X=exit ?=Help
                                          -----------
        where,

        'command' indicates the current process:

          'Command'   you are being asked to enter a command
                       enter the letter, or press the keys for
                       the action to perform

          'Reading '   the file data is being read
          'Filter  '   the file data is being formatted for display
|         'Looking '   the Scan/Find text is being searched for

          'Scan   '   you are being asked to enter text to locate
          'Find   '   in the file, up to 31 characters may be entered

          '# lines?'   you are being asked to enter a 1 to 5 digit
                       number that is the amount of lines to skip

          'Line #? '   you are being asked to enter a 1 to 5 digit
                       line number to which the display is to be
                       positioned


        'message' may be one of:

          '*** Text not found ***'
           the Scan/Text was not found in the file

          '   *** Top of file ***'
           the first line of the file is being displayed

          '   *** End-of-file ***'
           the last line of the file is being displayed

        St: indicate status of toggles, lower case means off:

        'H'       indicates that the hex Dump display option is in use
        'b'       indicates whether the 7-bit, 8-bit, or *-option is
                  in use
        'K'       indicates that the Keyboard flush option is in use
        'M'       indicates that tests for monitor retrace are not made
        'P'       indicates that Print is in use
        'S'       indicates that file closing (for sharing) is in use
        'W'       indicates that the Wrap mode is in effect
        'T'       indicates that TAB characters are expanded
        'A'       indicates APXCORE interface, 'a' for TV/DV/DD
        'L'       indicates that the pre-loading option is on
        'J'       indicates that line feeds are added to lone carriage
                  return control characters, and backspaces are handled


LIST     Page 10



                         Screen Colors
                         -------------

           The screen's lines may be in any of three different colors:

                o  the 'special' color for the top status line and the
                   bottom command line
                o  the 'normal' color for the file's text windows
                o  the 'bright' color for lines with Find/Scan text,
                   and for the upside-down question mark in 7-bit mode

           There is a pair of function keys assigned to each color.  You
        may  use  these  function  keys  to  change  the  background and
        foreground  colors  temporarily.   To  make  the  color  changes
        permanent, you may use the cloning command (alt-C), or use DEBUG
        to modify the program file.

           The colors used  for displaying the  titles and main  body of
        text  may  be  changed  temporarily  or  permanently.  To make a
        permanent  change,  the  cloning  command  alt-C  is  used.   It
        requires that the LIST.COM program file be on the current  drive
        and in the current directory.

           The border is not  changed.  The foreground color  applies to
        the characters displayed.


        The color attributes may be changed by using these function keys:

          For the main body of text:

                F5 - background color
                F6 - foreground color

          For the top and bottom lines:

                F7 - background color
                F8 - foreground color

          For the line with Find/Scan text:

                F2 - background color
                F4 - foreground

           Once you  have decided  upon the  colors,  use the alt-C  key
        combination to change the LIST.COM program file.










                                                        LIST     Page 11



                         Cloning Procedure
                         -----------------

           The screen colors, the display retrace testing (M), the  file
        closing (C) and ruler (alt-R) options may be permanently set  in
        the program by using the alt-C cloning function.

           For  cloning  to  take  effect,  the  program  must be called
        LIST.COM and it must be on the current drive and in the  current
        directory.  There are two versions of the LIST COM file.  One is
        the normal  program.  The  other, which  contains an  'S' as the
        last letter of  the file name,  is a slightly  smaller file that
        excludes  the  Help  screen.   You  may  use either COM file for
        cloning.

           The clonable options (command toggles) are:

             M      =  Mono monitor, affects retrace testing,
             C      =  file(s) are shared,
             W      =  Wrap long lines
             8/7/*  =  display all 256 values, or 7-bit, or special case
             K      =  flush Keyboard each time a command is read

             alt-A  =  set on if using Apxcore, off if using Double Dos
                       or TopView, or DesqView

             alt-H  =  hex dump display, like the DEBUG format

             alt-J  =  toggle "junk" filter, add LF to CR, fix backspaces

             alt-L  =  set on to force preloading (reading) of the
                       entire file before any lines are displayed,
                       Default is OFF.

             alt-R  =  toggle columnar ruler on top line

             alt-T  =  toggle expansion of TAB characters


        Note: Be  sure you  have no  other copies  of LIST.COM which are
        accessible (because of a filepath type of utility).















LIST     Page 12

                         DEBUG Information
                         -----------------

           An alternative to cloning is  to use DEBUG to make  permanent
        changes.  Here is a list of key items and their addresses:

|          0124 - special lines 1 and 25 colors, default is 01 (blue)
                  Refer to a technical reference guide for the
                  attribute values for the colors that you want.
|          0126 - normal lines 2 thru 24 colors, default is 02 (green)
|          0128 - bright color for Find/Scan, default is 0C (bright red)
|          012A - clonable options;
|              MRSJ WHK*  M = mono, retrace testing if off, x'01'
                          R = ruler, x'02'
                          S = shared, x'04'
|                         J = add LF to lone CR, process backspaces,
|                             if on, x'08'; default is off
                          W = wrap mode, x'10'
                          H = hi-bit on, x'20'
                          K = kybd flush, x'40'
                          * = special document filtering, x'80'
|          012B - more clonable options, not all are indicated:
|              .PAT DGV.  P = Preload file if on, x'02', default is off
                          A = Apxcore if on, TV/DD/DV if off, x'04,
                              default is for Topview/Double DOS use
                          T = if on (default), expand TABs, x'08'
|                         D = hex display mode if on, x'10'
                          G = if on, alt-G goto DOS is Disabled, x'20'
                          V = if on, screen save/restore is Disabled
                              and 9K less memory is used/required, x'40'

        By  specifying  the  bit  value,  the  option  is  enabled.  For
        example, to enable  Shared and Retrace,  specify a hex  value of
        the sum, or 01+04 = 05.
|          012C - row less one at which found text is displayed,  1 byte
|                 the default is 08 which displays found text on line  9
|          012E - scroll offset value,  default is 10 (x'0A'),  one byte
|          0130 - scroll starting value, default is 0 (x'00'), one byte
|          0132 - tab increment, must be power of 2, default is 8
|          0134 - tab mask, subtract tab incr from FFFFh,default is FFF8

           When  the  Find/Scan  command  is  used,  the next line which
        contains that text is highlighted using the 'bright' color,  and
        is placed in  row 9 of  the screen.  You  can change the  row by
|       altering the byte  at location 12C  which is normally  '08', one
        less than the row.

           The letters and command keys may also be changed.  There  are
        two tables involved: WHAT and WHERE.  The WHAT table contains  a
        list of  one-byte keyboard  codes.  The  WHERE table  contains a
        list  of  two-byte  matching  addresses.   If you really want to
        change the codes, here are the DEBUG addresses:

|          035E - WHAT eye catcher
|          0362 - table of key codes,  ASCII 0-127,  then extended 0-132
|          0467 - WHERE eye catcher
|          046C - list of two byte addresses of processing routines

                                                        LIST     Page 13



                         Scanning for text
                         -----------------


           You may  use Find  (\) to  search for  text regardless of the
|       case, or you may use Scan (/) to find an exact match. The search
|       begins  at  the  top  line  displayed  and proceeds in a forward
|       direction until the end of file.  You may  start a  search  that
|       goes backwards rather than  forwards by using the ` (left quote)
|       key  instead of Find (\), or by using ' (right quote) instead of
|       Scan (/).

           To scan for a character string, type a slash (/) followed  by
        one or more (up to 31)  characters.  The Scan text, but not  the
        slash,  is  displayed  on  the  command  line.  The Scan is case
        sensitive.  That is, lower case Scan text will only match  lower
        case file text.

           While  the  program  is  searching  for  the text, the bottom
        display line  is changed  to say  "Scanning".   Pressing ANY key
        while the search  is in progress  will terminate the  search and
        display the message 'Text not found' on the bottom line.

           If the text is found, the line containing it is  displayed as
|       a high-intensity line (bright color) in the middle of the screen
|       depending on the value of the Find Row (see cloning section).

           If the text is NOT found, the command line (25) is changed to
        say '*** text not found ***', and the display remains unchanged.

           To find the next occurrance of the same text, use the  A)gain
        command, or press the F3 key.  To find the previous occurance,
        press the F9 key.

           If the  PCED keyboard  enhancement program  is installed, the
        up/down cursor keys  may be used  to recall and  edit previously
        entered Scan/Find text.

           In a shared file environment, if the file changes while being
        listed,  the  file  position  may  become invalid.  Use the HOME
        command  to  insure  proper  file  synchronization, or use the C
        or alt-S command again.

|          If  the  display  has been scrolled right or left so that the
|       "found"  text is not visible, you will see a funny symbol in the
|       first  column.  This  is  the same symbol that is displayed on a
|       blank line while changing the Find/Scan colors.  It is there  so
|       that you can tell that the line is marked.








LIST     Page 14


                         Filtering
                         ---------

           Filtering is the term used to describe the process that  LIST
        uses to  format file  data for  displaying on  a monitor.  After
        data  is  read  from  a  file,  it  is  filtered.  The method of
        filtering depends upon the options in effect.

           For a typical  ASCII text file,  the filter removes  carriage
        return and line feed characters, and expands TAB characters.


                         Hi-bit Filter
                         -------------
           The  7,  8,  and  *  (asterisk)  commands  determine  whether
        characters above ASCII-127 are displayed.  If the hi-bit  option
        is off (7  command), the filter  strips the high  order bit from
        each character.   If the  hi-bit option  is on  (8 command), all
        characters, including  graphic characters  above ASCII-127,  are
        displayed.

                         Star Filter
                         -----------

           The  star  (*  or  asterisk)  command  displays  only   ASCII
        characters below 128 (x'80'), but treats the special  characters
        x'8A'  and  x'8D'  as  line-feed  and  carriage-return   control
        characters.   Any  other  characters  above  127  are treated as
        spaces, and control codes below ASCII-26 are replaced by blanks.

           The Wrap option causes the  filtering to insure that no  line
        exceeds the width of the monitor, e.g. 80 characters.

                         Junk Filter
                         -----------

           The alt-J  command toggles  the "junk"  filter which  insures
        that carriage  returns in  the file  also result  in a new line.
        Also, backspace characters result in "backing up" the display by
        one position.  This  allows more readability  of files that  use
        backspacing to emphasize, or over-write, characters.


                         Hex Format Filter
                         -----------------

           The hex dump option (alt-H) causes the filtering to  reformat
        the file  data into  a DEBUG-like  display format.   The largest
        file that can be displayed in Hex is 1 million bytes.

           An attempt is made to retain the file position when switching
        from normal to hex-dump  display, but due to  filtering changing
        record lengths,  the hex  display may  begin before  the current
        record.

        NOTE:   The  EOF  control character is  ignored in this version.

                                                        LIST     Page 15

                        File Sharing
                        ------------

           LIST uses two techniques for allowing you to share files with
        other processes.

           The first technique is called file closing and is enabled  by
        the C or alt-S commands.   This forces LIST to close  the viewed
        file unless it needs to read from the file.  If enough memory is
        available, the entire file may be loaded once and thus leave the
        file free for exclusive access by other processes.

           The  second  technique  is  called  file  sharing.   It  is a
        function of  DOS and  requires DOS  version 3.0  or later.  LIST
        opens the viewed  files with a  DENY NONE request.   This allows
        other processes to  read and write  to the file  if they do  not
        request exclusive use of the  file.  If a file is  not available
        to  LIST  because  it  is  locked  by  another process, you will
        receive the error message "File not found" or "Acccess  denied".
        There is  no command  to enable  or disable  this method of file
        sharing.  It is implicit with the use of DOS version 3.


                        Invoking DOS Commands
                        ---------------------

           If  the  "goto  DOS"  option  is  enabled, you may invoke DOS
|       commands by using the alt-G command.  LIST reserves about 66k of
|       memory for its own use.  This  increases LIST's  memory require-
|       ments to approximately 96k when using alt-G.  The remaining mem-
|       ory is available to the DOS commands.


           After you have  finished entering DOS  commands, use the  DOS
        EXIT command to return to LIST.

           To disable  the "goto  DOS" function,  you must  use DEBUG to
        alter the option  byte described in  the section about  cloning.
        With it disabled, LIST requires less memory, about 66K.


                        Screen Saving
                        -------------

           If  the  screen  saving  option  is  enabled,  LIST saves the
        contents of the current display screen when it starts.  You  can
        restore  the  original  screen  by  exiting  LIST with the alt-X
        command.

           Screen saving requires  approximately 10k more  memory.  This
        is sufficient to save 60 lines of 80 characters (EGA 8x6  mode).
        See the section about cloning for information about enabling and
        disabling the screen saving feature.





LIST     Page 16

                        Restrictions
                        ------------

          o  The program requires 66K bytes of memory. If more memory is
             available, it is used to store more of the file in  memory.
             At least 96K is required to  use the DOS shell.  Add 9K  if
             the screen saving option is enabled (default).

          o  The line number is currently limited to 65535.

          o  The  file  size  is  limited  to 16 million bytes for ASCII
|            files, and to 1 million bytes for hex-dump files,  but only
|            the first 65535 records are processed.

          o  PC DOS Version 2.0 or later is required. DOS version 3.0
             or later is required for file sharing.

          o  ANSI.SYS is NOT required.

        APX Core, DesqView, TopView, and Double DOS, IBM,  Sigma are all
        copyrighted,  trademarked,  and all that.

        Written by Vernon Buerg for the  IBM PC using DOS 2.0 or  later,
        through DOS 3.2.  Not for sale or hire.

        LIST  is  supplied  for  personal,  private  use.   Feel free to
        distribute LIST given these restrictions:

          o  the program  shall be supplied in its original,  unmodified
             form, which includes this documentation;

          o  no fee is charged;

          o  for-profit use without a license is prohibited;

          o  the program may not be included -  or bundled - with  other
             goods or services.  Exceptions may be granted upon  written
             request only. This applies to clubs and distributors, too.


        If you are  using LIST and  find it of  value, your gift  in any
        amount ($15 suggested) will be greatly  appreciated. Please make
        checks payable in U.S. dollars to Vernon D. Buerg.

        For use by corporations and  other institutions, please  contact
        me for a licensing arrangement.  Customizing,  licensing  of the
        source,  and other special licensing are available upon request.
        Purchase orders and invoicing are acceptable.


                Vernon D. Buerg
                456 Lakeshire Drive
                Daly City, CA  94015

                Data:   (415) 994-2944    VOR 24-hour bulletin board
                Compuserve: 70007,1212 or 74375,500



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1208

     Volume in drive A has no label
     Directory of A:\

    BIBLSOFT ARC     33435   6-29-88  11:41p
    FILE1208 TXT      1549  11-22-88   4:27p
    GO       BAT        18   6-30-88  12:38a
    GOSPEL1  ARC     94083   6-29-88  11:31p
    GOSPEL2  ARC     94965   6-29-88  11:32p
    GOSPEL3  ARC     91061   6-29-88  11:33p
    LIST     COM      8191   9-25-87   2:28p
    LISTDOC  ARC     16768   6-30-88  12:30a
    PKXARC   COM     11482  12-15-86
    README   NOW      3685   6-30-88  12:46a
           10 file(s)     355237 bytes
                            3072 bytes free
