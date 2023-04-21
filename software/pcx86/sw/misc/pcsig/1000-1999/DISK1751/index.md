---
layout: page
title: "PC-SIG Diskette Library (Disk #1751)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1751/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1751"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-UTIL"

    PC-UTIL is an archived cornucopia of utility programs that can save
    programmers and serious computer users thousands of hours.
    
    It includes:
    
    ~  CAT -- Concatenate files
    
    ~  FILES -- Extract a list of files from a disk
    
    ~  PINDEX -- Print a disk file index
    
    ~  SEE -- Display files containing nonprintable characters and make
    modifications to create a file usable by most text editors
    
    ~  MLABEL -- Print labels in five different character sizes and pitches.
    Automatically incremented serial numbers of up to 9 characters can be
    included on each label
    
    ~  LPR -- Print ASCII files with page headings, numbers, and more
    
    ~  BSAVE -- Save a byte image of the screen buffer
    
    ~  BLOAD -- Write a saved image back to the screen buffer
    
    ~  CP -- Copy, move, or delete files individually or in tagged groups
    for directory listings sorted by name, extension, size or date
    
    ~  DR -- Integrated file management facilities for sorting, renaming,
    deleting, and moving files to another directory
    
    ~  KEYPRESS -- Branch in a batch file to select and execute user options
    
    ~  REPEATS - Search all drive subdirectories and list filename
    duplications with their directories
    
    ~  RN -- Create, remove, rename, hide and unhide files, and change
    directories. Set and reset read-only and archive bits in all files
    within a directory. Report file count and space allocated
    
    ~  SWEEP -- Cause a command to be successively executed in every
    subdirectory on a hard disk
    
    ~  MENU -- Modify batch files so each program will run without the user
    needing to remember where it and its related files are located
    
    ~  M_MS-DOS -- A mouse pop-up menu
    
    ~  WHEREIS -- Search for specified files through all directories and
    list matching files with their directories and subdirectories
    
    ~  FINDEX -- Generate an alphabetical list of hard and floppy disk files
    
    ~  ECHO2 -- Control screen display attributes such as bold, underline,
    blink, reverse video, color and cursor position by generating ANSI
    escape sequences
    
    ~  BRACE -- Display C source programs for error-checking
    
    ~  HEX -- Convert numeric value and ASCII characters to various
    equivalent decimal, octal, hex and ASCII values
    
    ~  BEEP -- Add sound to batch files so a variety of tunes can indicate
    the status of batch operations
    
    ~  EDMCAMC - An editor of WordPerfect macro files.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BEEP.DOC

{% raw %}
```


          BEEP Version 1.3                                     July 8, 1988

                                   COPYRIGHT 1988
                                         by
                               ABACUS Computer Service
                                 Donald J. Jackowski
                                    16 Green Road
                            Mine Hill, New Jersey  07801
                                   (201) 584-8201
                                 All Rights Reserved

          INTRODUCTION
               The BEEP  program is intended to be used to add sound to the
          operation of BATCH files.  In addition to  the traditional "beep"
          sound this  program provides a variety of tunes that can indicate
          the status of a BATCH operation.

          USAGE
               Command line syntax is:
                    BEEP [?]  [string]

          MENU
               When BEEP is invoked with a string consisting  of the single
          character '?'  (question mark),  the following short menu will be
          displayed on the screen.

          BEEP version 1.3
          Copyright 1987 by ABACUS Computer Service, Mine Hill, NJ  07801
          Usage: BEEP [arg]
            Where arg can be one or more of:

            @ - Beep.                       ? - This MENU.
            ----------------------------------------------------------
            A - AOK, Correct.               N - Navy, Anchors a Weigh.
            B - Bad, Raspberries.           O - Oh say can you see.
            C - Chimes, big ben.            P - Police Siren.
            D - beep.                       Q - beep.
            E - Everything is beautiful.    R - Ave Maria.
            F - Funeral march.              S - beep.
            G - Glory, My eyes have seen.   T - Taps, the end.
            H - Hail to the Chief.          U - beep.
            I - I left my heart in S. F.    V - Vaya Con Dios.
            J - Joy to the world.           W - We are in the money.
            K - beep.                       X - Gong, hour.
            L - Mary had a Little Lamb.     Y - Good Year.
            M - beep.                       Z - Scale, DO-RE-MI....

          DESCRIPTION 

               The "space" character can  be  used  to  introduce  a slight
          pause between the sounds thus:
                    BEEP CXXX
          sounds different than:
                    BEEP C X X X







          Copyright 1988 (C) by ABACUS Computer Service         Page 1 of 2

          BEEP Version 1.3                                     July 8, 1988

          USER LICENSE
               If you  find this program useful you are requested to send a
          $10 registration and  license  fee  to  ABACUS  Computer Service.
          This  fee  will  entitle  you  to  continue that use with a clear
          conscience.  Please pass a copy to a friend!  It is NOT necessary
          to be a licensed user to distribute copies.  All registered users
          will receive notice of the first update that is made  after their
          registration. 

          ILLUSTRATION FILES
               The BEEP  program is  distributed along with a BAT file that
          can be used to test and illustrate the various BEEP  sounds.  The
          file is BEEP-TST.BAT.














































          Copyright 1988 (C) by ABACUS Computer Service         Page 2 of 2
```
{% endraw %}

## ECHO2.DOC

{% raw %}
```


          ECHO2 Version 1.4                                    July 9, 1988

                                   COPYRIGHT 1988
                                         by
                               ABACUS Computer Service
                                 Donald J. Jackowski
                                    16 Green Road
                            Mine Hill, New Jersey  07801
                                   (201) 584-8201
                                 All Rights Reserved

          INTRODUCTION
               The ECHO2  program is  similar to  the ECHO program supplied
          with MS-DOS, except ECHO2 allows  a  user  to  generate  the full
          range of ASCII values 0 through 255.  The ability to generate the
          full range of ASCII means ANSI escape sequences  can be generated
          to control screen display attributes like bold, underline, blink,
          reverse video, color, and position the cursor, if the ANSI driver
          has been  installed.   Since ASCII values greater than 127 can be
          easily generated,  the special  graphic characters  in that range
          can easily   generated.   In addition 16 different functions that
          generate the current Date and Time are provided. 

          USAGE
               Command line syntax is:
                    ECHO2 string

          MENU
               When ECHO2 is invoked with a string consisting of the single
          character '?'  (question mark),  the following short menu will be
          displayed on the screen.

          ECHO2 version 1.4
          Copyright 1987 by ABACUS Computer Service, Mine Hill, NJ 07801

                  $ at EOL = skip CR              $l = <
                  $*### = Repeat                  $M = Minute: 00-59
                  $### = CHR$(N)                  $m = Month: 01-12
                  $$ = $                          $n = Drive
                  $- = CR/LF                      $p = Directory
                  $? = This Menu                  $q = =
                  $a = Day: Sun-Sat               $r = am/pm
                  $b = |                          $S = Second: 00-59
                  $D = Date: mm/dd/yy             $s = SPACE
                  $d = Day: 01-31                 $T = hh:MM:SS am/pm
                  $e = ESCape                     $t = HH:MM:SS
                  $g = >                          $U = UNIX style date
                  $H = Hour: 00-23                $v = DOS version
                  $h = Hour: 00-12                $w = DOW: Sun=0
                  $j = Month: Jan-Dec             $Y = Year 4 digits
                  $k = Back Space                 $y = Year 2 digits

          NOTE: The ### represents 1 to 3 numeric digits.








          Copyright 1988 (C) by ABACUS Computer Service         Page 1 of 3

          ECHO2 Version 1.4                                    July 9, 1988

          DESCRIPTION 
               All the special ECHO2 functions are invoked by an occurrence
          of the '$' character in the command line "string".  In most cases
          the  '$'  character  is  followed  by  a  single  character  that
          represents the  ECHO2 function.  The first three functions listed
          in the MENU are exceptions that merit additional details:

               $ at EOL =  skip CR  - When  the '$'  character is  the last
                    character in  the command line "string" the final CR/LF
                    sequence is omitted.    This  allows  joining  the next
                    output to the previous line. 

               $*### =  Repeat -  The ### represents 1 to 3 numeric digits,
                    that in  turn  represent  a  value  that  specifies the
                    number of  times the  next character is to be repeated.
                    EXAMPLE: $*0063  Will output six '3' characters.

               $### = CHR$(N) - This method of entering  special characters
                    is  similar  to  the  BASIC  notation shown.  The given
                    value is simply output  as  a  single  ASCII character.
                    EXAMPLE:  $1  will  output  the  special  "happy  face"
                    character.    And  combining  this  with  the  'Repeat'
                    function:   $*7$1   will   output  seven  "happy  face"
                    characters.

               All the other ECHO2 functions are single characters preceded
          by the '$' character.  This set of functions very closely matches
          the character assignments of the MS-DOS PROMPT command, plus some
          Date and  Time functions that are similar to the options found in
          the UNIX "date" command.


          USER LICENSE
               If you find this program useful you are requested to  send a
          $10  registration  and  license  fee  to ABACUS Computer Service.
          This fee will entitle you  to  continue  that  use  with  a clear
          conscience.  Please pass a copy to a friend!  It is NOT necessary
          to be a licensed user to distribute copies.  All registered users
          will receive  notice of the first update that is made after their
          registration. 

          ILLUSTRATION FILES
               The ECHO2 program is  distributed along  with two  BAT files
          that test  and illustrate  the various  ECHO2 functions.  The two
          files are  ECHO-TST.BAT  and  ECHO-SPL.BAT.    The  ECHO-TST file
          exercises  almost  all  of  the ECHO2 functions, and the ECHO-SPL
          file shows all of the special characters.

          BOX CHARACTERS
               For reference here are the characters required to draw a box
          both in  double and single outline graphic characters.  The ECHO-
          SPL.BAT file generates all of these characters.
                         DOUBLE                        SINGLE
                    $201 $205 $187                $218 $196 $191
                    $186      $186                $179      $179
                    $200 $205 $188                $192 $196 $217



          Copyright 1988 (C) by ABACUS Computer Service         Page 2 of 3

          ECHO2 Version 1.4                                    July 9, 1988

          ANSI ESCAPE SEQUENCES
               Some of the  ANSI  escape  sequences  that  can  be  used to
          control  screen   attributes,  when  the  ANSI  driver  has  been
          installed, are given here for reference.   The  ECHO-TST.BAT file
          contains examples of most of the following:

               $e[0m - All attributes OFF
               $e[1m - Bold ON
               $e[4m - Underline ON, (Monochrome ONLY)

               $e[5m - Blink ON
               $e[7m - Reverse video ON
               $e[37;44m - White foreground, Blue background

               $e[24;1f - move cursor to line 24 col 1

               COLORS:
                     Foreground:         Background:
                    Black     30                  40
                    Yellow    31                  41
                    Green     32                  42

                    Red       33                  43 
                    Blue      34                  44
                    Magenta   35                  45

                    Cyan      36                  46
                    White     37                  47

          CUTE APPLICATION
               Sometimes it  would be nice if you could save a reference to
          the current directory, so that you can easily return to it later.
          A simple file HERE.BAT containing:

                    ECHO2 CD $p >\bin\utl\THERE.BAT

          will create  a THERE.BAT  file.  Before leaving the directory you
          want to return to,  run HERE  then CD  to anywhere  and run THERE
          when you  want to  return.   The directory you use to place these
          files in should be in your PATH specification.  This is extremely
          simple but sometimes the simple things can be very handy.


















          Copyright 1988 (C) by ABACUS Computer Service         Page 3 of 3
```
{% endraw %}

## BRACE.DOC

{% raw %}
```


        BRACE Version 1.1                                       July 7, 1987

                                 COPYRIGHT 1987
                                       by
                             ABACUS Computer Service
                               Donald J. Jackowski
                                  16 Green Road
                              Mine Hill, NJ  07801
                                 (201) 584-8201
                               All Rights Reserved

        INTRODUCTION
             BRACE  is a utility that will display a C source program  on 
        the screen,  showing the nesting level of the {} "curly brackets" 
        (BRACEs).   Each  left  brace '{' will cause the level number  to 
        increase  by  one and each right brace '}' will cause  the  level 
        number to decrease by one.  This makes it easy to spot a class of 
        errors that drive most C compilers insane!

        OPTION
             The -n option will cause line numbers to be displayed.

        OPEN QUOTE LINES
             BRACE  also reports any line containing an "open" double  or 
        single QUOTE phrase,  that is a line where the number of  "quote" 
        characters  is  out  of balance.   Depending  on  the  particular 
        compiler this may or may not be an error.

        USER LICENSE
             If  you find this program useful you are requested to send a 
        $5 registration and license fee to ABACUS Computer Service.  This 
        fee  will  entitle  you  to  continue  that  use  with  a   clear 
        conscience.   Please  pass  a copy to a friend!   All  registered 
        users will receive notice of the first update that is made  after 
        their registration. 


























        Copyright 1987 (C) by ABACUS Computer Service            Page 1 of 1


```
{% endraw %}

## HEX.DOC

{% raw %}
```


        HEX Version 5.3                                         July 7, 1987

                                 COPYRIGHT 1987
                                       by
                             ABACUS Computer Service
                               Donald J. Jackowski
                                  16 Green Road
                              Mine Hill, NJ  07801
                                 (201) 584-8201
                               All Rights Reserved

        INTRODUCTION
             HEX  converts  numeric  values and ASCII characters  to  the 
        various equivalent Decimal,  Octal,  Hex,  and ASCII values.   It 
        will accept input from the command line or interactively when the 
        -i option is given or when no arguments were given on the command 
        line.   If  an illegal option or the -?  option is given  on  the 
        command  line,  or if the first character of an interactive input 
        line is the '?' character a short menu is displayed.

        INPUT VALUES
             Input values that begin with 0 (zero) are taken to be  Octal 
        values and input values that begin with 0X or that end with H are 
        taken  to  be Hex values.   Input that begins with the '  (single 
        quote) character is taken to be a character string.

        OUTPUT DISPLAY
             All three forms of the value are displayed on output, and if 
        the value is less than 127 the ASCII character is also displayed.

        USER LICENSE
             If you find this program useful you are requested to send  a 
        $5 registration and license fee to ABACUS Computer Service.  This 
        fee   will  entitle  you  to  continue  that  use  with  a  clear 
        conscience.   Please  pass a copy to a  friend!   All  registered 
        users  will receive notice of the first update that is made after 
        their registration. 
























        Copyright 1987 (C) by ABACUS Computer Service            Page 1 of 1


```
{% endraw %}

## CONTENTS.TXT

{% raw %}
```

		CONTENTS of PC-UTIL 2.1				 July 12, 1988

	BATCH11.ARC - BATCH file utilities.
		BEEP-TST.BAT - Test driver for BEEP.COM
		BEEP.COM - Generates a variety of tunes.
		BEEP.DOC - BEEP program documentation.
		ECHO-SPL.BAT - Shows special characters generated by ECHO2.
		ECHO-TST.BAT - Test driver for ECHO2
		ECHO2.COM - Output options not possible with DOS ECHO
		ECHO2.DOC - ECHO2 program documentation.

	BRACE11.ARC - Programmer Utilities.
		BRACE.DOC - BRACE program documentation.
		BRACE.EXE - Shows Brace nesting level, for C programs.
		HEX.DOC - HEX program documentation.
		HEX.EXE - Converts numeric values to/from dec, oct and hex.

	EDMAC12.ARC - Macro file editor for WordPerfect macros.
		EDMAC.DOC - EDMAC program documentation.
		EDMAC.EXE - An editor for WordPerfect macro files.

	FINDEX26.ARC - Makes & prints an index of files, floppy or hard disks.
		CAT.EXE - Concatenates files.
		FILES.EXE - Extracts a list of files from a disk.
		FINDEX.DOC - Overall documentation.
		GO.BAT - Sample, run method file.
		PINDEX.EXE - Prints an INDEX file.
		INDEX.TXT - A sample index file.
		SORTX.BAT - Calls the SORT program to create an INDEX file.
		SORTF217.COM - Fast ASCII file sorter handles large files.
		SORTF217.DOC - SORTF program documentation.

	HARD10.ARC - Hard disk utilities.
		BLOAD.COM - Utility for MENU
		BSAVE.COM - Utility for MENU
		BSAVE.DOC - Documentation for BSAVE and BLOAD.
		CO.COM - PCM utility.
		CO.DOC - CO documentation.
		DR.COM - PCM utility.
		DR.DOC - DR documentation.
		HARD.DOC - Overview documentation.
		KEYPRESS.COM - Utility for MENU
		KEYPRESS.DOC - KEYPRESS documentation.
		MEN-CASE.BAT - Part of MENU
		MENU.BAT - Hard disk MENU program.
		MENU.DOC - MENU documentation.
		MX-SCR.DAT - MENU screen display data.
		M_MS-DOS.COM - Mouse POP-UP menu.
		M_MS-DOS.MSC - Mouse POP-UP menu, source code.
		REPEATS.COM - PCM utility.
		REPEATS.DOC - REPEATS documentation.
		RN.COM - PCM utility.
		RN.DOC - RN documentation.
		WHEREIS.COM - Handy utility.
		WHEREIS.DOC - WHEREIS documentation.

	LPR45.ARC - Prints ASCII files to printer
		LPR.EXE - Line PRinter program.
		LPR.DOC - LPR program documentation.

	MLABEL16.ARC - Prints standard size labels in a variety of styles.
		MLABEL.DOC - MLABEL program documentation.
		MLABEL.EXE - Prints labels in a variety of styles.
		TEST.TXT - Sample input files for MLABEL

	SEE17.ARC - Shows and/or strip control chars including printer controls.
		SEE.DOC - SEE program documentation.
		SEE.EXE - Display characters, plus non-printables from a file.

```
{% endraw %}

## EDMAC.DOC

{% raw %}
```


          EDMAC Version 1.2                                 October 9, 1987

                                   COPYRIGHT 1987
                                         by
                               ABACUS Computer Service
                                 Donald J. Jackowski
                                    16 Green Road
                                Mine Hill, NJ  07801
                                   (201) 584-8201
                                 All Rights Reserved

          INTRODUCTION
               EDMAC is  a utility program that will allow a user to EDit a
          WordPerfect MACro  file using  the WordPerfect  key strokes which
          are translated into human readable form.  It can also be used via
          the -s option to simply display the contents  of a  macro file in
          human readable  form.   The numeric  values will  be displayed in
          addition to  the human  readable description  when the  -d or -dd
          option is given.

          USAGE
               The EDMAC program usage is:
                    EDMAC [-sndd] file ...
               Where:
                    -s  = Show file contents ONLY. (No Edit)
                    -n  = add line Numbers to the -s output.
                    -d  = Debug, show Decimal numeric values.
                    -dd = Debug, show Decimal, Hex, and Octal values.

               When  EDMAC  is  invoked  with  no  arguments  or if invalid
          options are given, a short menu  is  displayed.    When  EDMAC is
          invoked with  filenames, each  file name,  file date  and time is
          displayed on a header line, which is immediately  followed by the
          first ten lines of the file followed by the editing status/prompt
          line or if the -s option was given entire contents of the file is
          displayed.

          EDITING MACRO FILES
               Edit mode  is the  default mode of EDMAC, that is if  the -s
          option is not given, edit mode is assumed.  This editor is a line
          editor in  that it  deals with  the macro file in units of lines,
          strings of characters ending  with  a  10  (^J)  character  or in
          Wordperfect  parlance  the  [HRt]  character.  Both the [HRt] and
          [SRt] characters are recognized as End-Of-Line  characters, as is
          the  End-Of-File  condition  since  some  macros simply terminate
          without an ending EOL character.

               The first  operation of  the editor  is to  rename the input
          file with  a .BAK  file type.   It then opens a new file with the
          original file name, this file becomes the output file.

               At initial start up EDMAC displays the first 10 lines of the
          input  file,  which  are  also  copied into the edit buffer.  The
          first line in the edit buffer becomes the current line, that line
          is then displayed along with the status/prompt line:

               (FILE.MAC 1 More) A,I,C,D,+,-,S,L,R,W,Q,?:

          Where it  waits for  keyboard input.   The left hand part of this
          line is the "status" portion  and  contains  the  file  name, the

          Copyright 1987 (C) by ABACUS Computer Service         Page 1 of 4

          EDMAC Version 1.2                                 October 9, 1987

          current line  number and  a "More/EOF"  flag to indicate when the
          last block from the  input file  has been  read.   The right hand
          part  of  the  line  is  the  "prompt"  portion,  which shows the
          commands that the user can select here.

               A warning message is displayed before the status/prompt line
          whenever the free space in the edit buffer is less than 50 bytes.

          MENU
               The "?"  command or any illegal command key will produce the
          following short menu of commands:

               EDMAC Edit MENU
                    A = Append Line AFTER current line.
                    I = Insert Line BEFORE current line.
                    C = Change current line.
                    D = Delete current line.
                    + = Move current line Forward.
                    - = Move current line Backward.
                    S = Substitute String in current line.
                    L = List (display) entire buffer.
                    R = Read next line from input file, into end  (bottom) 
                        of buffer.
                    W = Write first (top) line of buffer to output file.
                    Q = Quit, write ALL buffer lines to output file.

          EDMAC COMMANDS
               Each of  the Edit commands and command aliases (command keys
          that are taken as equivalent)  will be discussed below:

          A -  Append a new line AFTER the current line, a second prompt is
               displayed and then it waits for key board input, as with all
               EDMAC input the actual  WordPerfect  key  strokes  should be
               used.    The  human  readable  description, identical to the
               output produced  by  the  -s  option  will  be  displayed in
               response to  each key stroke.  Input mode is terminated with
               the RETURN/ENTER key or the Alt-9 key.  (Alias: A, a).

          I -  Insert a new line BEFORE the  current line,  a second prompt
               is displayed and the operation is otherwise identical to the
               Append operation.  (Alias: I, i, "Ins")

          C -  Change current line,  is  really  a  Delete  followed  by an
               Insert.   It is included here for user convenience.  (Alias:
               C, c)

          D -  Delete current  line,  removes  the  current  line  from the
               buffer.     Causes  the   line  numbers   to  be  renumbered
               appropriately.  (Alias: D, d, "Del")

          + -  Move the current line Forward.    Selects  as  the "current"
               line the  next higher line.  If the current line is the last
               line in the buffer a message to that effect is displayed and
               the current line remains unchanged.  The Q command should be
               used  to  get  to  additional  lines  from  the  input file.
               (Alias: +, F, f, "DownArrow", RETURN/ENTER)



          Copyright 1987 (C) by ABACUS Computer Service         Page 2 of 4

          EDMAC Version 1.2                                 October 9, 1987


          - -  Move the  current line  Backward.   Selects as the "current"
               line the next lower line.  If the current line  is the first
               line in the buffer a message to that effect is displayed and
               the current  line  remains  unchanged.    (Alias:  -,  B, b,
               "UpArrow")

          S -  Substitute  String  in  current  line.    This  operation is
               similar to the UNIX "ed" command of the same name, i.e.
                         /old string/new string/
               The current  line  is  scanned  for  an  occurrence  of "old
               string", if  it is  not found a message is displayed and the
               operation is  aborted.   When "old  string" is  found in the
               current line  it is replaced by "new string".  (Alias: /, S,
               s)

          L -  List (display) the entire buffer.  Each line  in the current
               buffer  is  displayed  along  with  a line number.  The line
               numbers are the numbers you would expect to see from the -sn
               option.  (Alias: L, l)

          R -  Read next line from input file, into end (bottom) of buffer.
               The R  and  W  commands  together  provide  a  mechanism for
               controlling the  size of  the current buffer, and the length
               of the L command listing.  (Alias: R, r)

          W -  Write first (top) line  of  buffer  to  output  file.   This
               command  is  similar  to  the  Q command except this command
               writes a SINGLE line to the output file. (Alias: W, w)

          Q -  Quit, write All buffer  lines to  the output  file, and read
               the next 10 lines from the input file.  When the last buffer
               is read from the input file  the status  line "More" changes
               to "-EOF-".  (Alias: Q, q)

          KEYBOARD INPUT
               The key  strokes used  as input to the buffer, namely the A,
          I, C, and S  commands, should  be those  key strokes  required by
          WordPerfect  NOT  the  characters  displayed  on the screen.  For
          example the display:  <A6 Flush right>   is the  description of a
          single  character,  the  character  produced  by  the  Alt-F6 key
          stroke.  See the discussion  of  the  "description  string" under
          OPERATION below for more details.

               The Alt-0  (Alt-ZERO) key  stroke can  be used  to input the
          NULL character.

          LINE NUMBERS
               The line numbers  shown  in  the  list  displayed  by  the L
          command   and   the   current   line   number  displayed  in  the
          status/prompt line are the numbers you would see if the file were
          displayed using the -sn option.  The line numbers are dynamically
          adjusted to reflect inserted and deleted lines.

          OPERATION
               EDMAC expects to find the full range of values from 0 to 255
          in the  macro files.   The  range of values from 0 through 31 are
          CONTROL characters,  with the  exception of  9 the  "tab", 10 the

          Copyright 1987 (C) by ABACUS Computer Service         Page 3 of 4

          EDMAC Version 1.2                                 October 9, 1987

          "newline", and  13 the  "return" characters.  The range of values
          32 through 126 are the printable ASCII characters.  And the range
          of values 127 through 255 are GRAPHIC characters.

               The WordPerfect function keys and other operational keys are
          represented in the macro  files  as  values  in  the  CONTROL and
          GRAPHIC   character   ranges,   printable  ASCII  characters  are
          represented as values in the usual 32 through  126 range  and are
          displayed by EDMAC as regular ASCII characters.

               Values  in  the  CONTROL  and  GRAPHIC ranges cause EDMAC to
          display  a  "description  string"  except  for  cases  where  the
          WordPerfect  function   is  not  known,  in  which  case  the  ^A
          convention for CONTROL characters,  or  the  three  digit decimal
          numeric value for GRAPHIC characters is displayed.

               The  WordPerfect  function/operation keys (the non-printable
          CONTROL and GRAPHIC characters) are single byte values  and since
          EDMAC   displays   a   variable   number  of  characters  in  the
          "description  string",   the  description   is  ALWAYS  displayed
          surrounded by a pair of <> characters.

               The "description  string" consists  of two parts.  The first
          part identifies the keyboard key that produced the character when
          the macro  was created.   The FUNCTION keys all get two character
          descriptions,  where  the  first  character  is:  C=Ctrl, S=Shft,
          A=Alt, and F=Function.  The second character is the numeric value
          of the function key.  None  of the  key descriptions  contain the
          'space' character.   The  second part is a WordPerfect functional
          description.  The first part is  separated from  the second  by a
          single 'space' character.  Thus, if the Alt-F6 key were used in a
          macro the EDMAC "description string" would be:
                    <A6 Flush right>

               If the -d option was given the same Alt-F6 key would produce
          the "description string":
                    <{181}A6 Flush right>
          and the -dd option would produce:
                    <{181, B5, 265}A6 Flush right>

          TRADEMARKS
               WordPerfect is a registered trademark of WordPerfect
               Corporation.

               UNIX is a trademark of AT&T Bell Laboratories.

          USER LICENSE
               If you  find this program useful you are requested to send a
          $10 registration and  license  fee  to  ABACUS  Computer Service.
          This  fee  will  entitle  you  to  continue that use with a clear
          conscience.  If you don't use it, please pass a copy to  a friend
          who might!  All registered users will receive notice of the first
          update that is made after their registration. 






          Copyright 1987 (C) by ABACUS Computer Service         Page 4 of 4
```
{% endraw %}

## FILE1751.TXT

{% raw %}
```
Disk No: 1751                                                           
Disk Title: PC-Util                                                     
PC-SIG Version: S1                                                      
                                                                        
Program Title: PC-Util                                                  
Author Version: 2.1                                                     
Author Registration: $40.00                                             
Special Requirements: None.                                             
                                                                        
PC-UTIL is an archived cornucopia of utility programs that can save     
programmers and serious computer users thousands of hours.              
                                                                        
It includes:                                                            
                                                                        
~  CAT - Concatenate files.                                             
                                                                        
~  FILES - Extract a list of files from a disk.                         
                                                                        
~  PINDEX - Print a disk file index.                                    
                                                                        
~  SEE - Display files containing nonprintable characters and make      
         modifications to create a file usable by most text editors.    
                                                                        
~  MLABEL - Print labels in five different character sizes and pitches. 
            Automatically incremented serial numbers of up to 9         
            characters can be included on each label.                   
                                                                        
~  LPR - Print ASCII files with page headings, numbers and more.        
                                                                        
~  BSAVE - Save a byte image of the screen buffer.                      
                                                                        
~  BLOAD - Write a saved image back to the screen buffer.               
                                                                        
~  CP - Copy, move or delete files individually or in tagged groups from
        directory listings sorted by name, extension, size or date.     
                                                                        
~  DR - Integrated file management facilities for sorting, renaming,    
        deleting and moving files to another directory.                 
                                                                        
~  KEYPRESS - Branch in a batch file to select and execute user options.
                                                                        
~  REPEATS - Search all drive subdirectories and list filename          
             duplications with their directories.                       
                                                                        
~  RN - Create, remove, rename, hide and unhide files, and change       
        directories.  Set and reset read-only and archive bits in all   
        files within a directory.  Report file count and space          
        allocated.                                                      
                                                                        
~  SWEEP - Cause a command to be successively executed in every         
           subdirectory on a hard disk.                                 
                                                                        
~  MENU - Modify batch files so each program will run without the user  
          needing to remember where it and its related files are        
          located.                                                      
                                                                        
~  M_MS-DOS - A mouse pop-up menu.                                      
                                                                        
~  WHEREIS - Search for specified files through all DOS 2.0 directories,
             and list matching files with their directories and sub-    
             directories.                                               
                                                                        
~  FINDEX - Generate an alphabetical list of hard and floppy disk files.
                                                                        
~  ECHO2 - Control screen display attributes such as bold, underline,   
           blink, reverse video, color and cursor position by generating
           ANSI escape sequences.                                       
                                                                        
~  BRACE - Display C source programs for error-checking.                
                                                                        
~  HEX - Convert numeric value and ASCII characters to various          
         equivalent decimal, octal, hex and ASCII values.               
                                                                        
~  BEEP - Add sound to BATCH files so a variety of tunes can indicate   
   the status of BATCH operations.                                      
                                                                        
~  EDMCAMC - An editor of WordPerfect macro files.                      
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FINDEX.DOC

{% raw %}
```


          FINDEX Version 2.6                                  July 23, 1987

                                   COPYRIGHT 1987
                                         by
                               ABACUS Computer Service
                                 Donald J. Jackowski
                                    16 Green Road
                                Mine Hill, NJ  07801
                                   (201) 584-8201
                                 All Rights Reserved

          INTRODUCTION
               FINDEX  (File  INDEX)  or  (FIND  EXecutable)  is  a  set of
          programs that will generate an alphabetical (by file name) "index
          list" of  the files  contained on  a set  of floppy disks or hard
          disks.  After the initial list  is prepared  only the  disks that
          have  changed  need  be  read  in  order to prepare a new updated
          "index list".  FINDEX is simple to operate and fast  to update an
          existing index.   The required data is extracted from each floppy
          disk in only a few seconds. 

               The main  purpose of  FINDEX is  provide an  "index list" of
          files that  can be  scanned to  find a  file when you only have a
          vague recollection of the file name and don't know what disk it's
          on.   The "index  list" can  also be  used to  determine how many
          copies of a given file name can be found in a given set of floppy
          disks or on a hard disk.

               It can  also be  used to  create a list of the contents of a
          hard disk to make reconstructing the disk a  little easier.   The
          file  directory  structure  is  maintained  if  the output is not
          sorted.

               A DiskID number must  be physically  applied to  each floppy
          disk in  order for  the "index  list" to  be useful.   The DiskID
          number may be written on the floppy disk label for disks not used
          heavily.  For very active floppy disks use small adhesive labels.

               FINDEX creates a file (the .DIR file) containing the file   
          names, file  sizes, and file dates for each file on a given disk,
          including the files in all sub-directories.  Files in directories
          other  than  the  "root"  directory  are  shown  with a marker to
          indicate they reside  in  a  sub-directory  and,  where  space is
          available  the  name  of  the parent sub-directory is shown along
          with the file name.  An option is provided to  store complete (up
          to 36  characters) path names for all sub-directories.  Each file
          is associated with the given DiskID number.  After the .DIR files
          are created  for each disk to be indexed the contents of the .DIR
          files are  sorted and  the records  stored in  the INDEX.TXT file
          from which  they are  listed on the line printer, creating a hard
          copy index of files. 

               The INDEX.TXT file is an index of DiskID numbers as  well as
          an index of files.  Each .DIR file contains a record which  shows
          the DiskID number, the Disk VOLUME  label and  the time  and date
          the  .DIR  file  was  created.    The DiskID record begins with a
          single quote  character which  positions, after  sorting, all the
          DiskID records  before the  File records  in the index list.  The
          DiskID records show which  DiskID  numbers  are  included  in the
          index as  well as the time and date the file names were extracted

          Copyright 1987 (C) by ABACUS Computer Service         Page 1 of 8

          FINDEX Version 2.6                                  July 23, 1987

          from that particular disk.  The optional sub-directory  path name
          records are  like the DiskID records.  They begin with the single
          quote character which causes them to sort to the beginning of the
          index list along with the associated DiskID record.
                  
          TYPICAL USAGE
               Since the  size of the INDEX.TXT file determines the size of
          the output listing and the time  required to  print and  sort it,
          the size  of this  file should be minimized.  This can be done by
          dividing ALL your disk files  into  several  categories  and then
          prepare an  INDEX.TXT file for each category.  A natural division
          might be "working disks", "backup disks", and "hard  disks".  The
          FINDEX system  does not  limit the size of the INDEX.TXT file but
          this file  can conceivably  grow to  fill an  entire floppy disk.
          This would,  if printed, produce a lot of paper!  Most users will
          find it best to create an  INDEX.TXT file  for each  of the three
          categories mentioned.

          DISTRIBUTION
               FINDEX is  a proprietary product of ABACUS Computer Service.
          It  is  distributed  on  a  user-supported,   "shareware"  basis.
          Copying,  redistribution   and  installation  on  Bulletin  Board
          Systems  is  permitted  and  encouraged,  provided  the following
          conditions are met:

               1.   The distributed  floppy disk  copy must include all the
                    related executable files  and  documentation, unaltered
                    in  any  way.    If individual (not ARChived) files are
                    provided the entire disk must be devoted to  the FINDEX
                    files and  the floppy disk shall be labeled to show the
                    FINDEX  name,  version  number,  and  ABACUS  copyright
                    notice.

               2.   If an  ARChive file is provided it must contain all the
                    unmodified executable and  documentation  files  and be
                    named FINDEX26.ARC.

               3.   Commercial sale of FINDEX in any manner is specifically
                    prohibited without  the  written  permission  of ABACUS
                    Computer Service.

          USER LICENSE
               If you  find this program useful you are requested to send a
          $20 registration and  license  fee  to  ABACUS  Computer Service.
          This  fee  will  entitle  you  to  continue that use with a clear
          conscience.  Please pass a copy to a friend!  It is NOT necessary
          to be a licensed user to distribute copies.  All registered users
          will receive notice of the first update that is made  after their
          registration. 










          Copyright 1987 (C) by ABACUS Computer Service         Page 2 of 8

          FINDEX Version 2.6                                  July 23, 1987

          INSTALLATION
               The files contained on the distribution ARChive are:
               FINDEX.DOC - This document

               FILES.EXE - Generates the .DIR files
               GO.BAT - Batch file that invokes FILES

               SORTX.BAT - Creates the INDEX.TXT file
               CAT.EXE - Concatenates .DIR files, called by SORTX.BAT

               PINDEX.EXE - Prints the INDEX.TXT file
               INDEX.TXT - A sample index file.

               SORTF217.COM - Fast ASCII file sorter handles large files.
               SORTF217.DOC - SORTF program documentation.

               REGISTER.FOR - Registration / License Form.

               The  first  step  in  the  installation process should be to
          place a write protect tab on  the distribution  disk, extract the
          FINDEX files with the EXTRACT -X command, onto a disk labeled:
                    FINDEX WORK

          Then format a second disk, and label it:
                    FINDEX DIR
          And copy  the files FILES.EXE and GO.BAT to the FINDEX DIR  disk.
          This FINDEX DIR disk will be used to store the  .DIR  files which
          are the "DIR" like lists of files from your disks.

          ACKNOWLEDGEMENT
               Thanks to  Vernon D.  Buerg for permission to distribute his
          SORTF program.  The SORTF  program  and  documentation  files are
          version 2.17, which is the latest available at this time.

          OPERATION GENERAL
               Each  specific   OPERATION  section   below  begins  with  a
          CONFIGURATION note which shows disk drive usage: what disk should
          be in  which drive,  and which drive should be the current drive.
          The drives shown are simply working  EXAMPLES, other combinations
          will  also  work,  and  where  a  hard drive is available you can
          simply substitute C: where ever B: is shown.

               In general options are given on  the command  line as  a '-'
          (dash) character  followed by  a single character that represents
          the selected option.  Single  character  options  can  be grouped
          after  a  single  '-'  character but options requiring additional
          input must be given at the end of a group.

               The major operations are  detailed,  along  with  an example
          below, an OVERVIEW is as follows:

               FILES  -  Collect  the  names  and descriptions of the files
                    contained on the disks to be "indexed".

               SORT - Merge the data from the FILES operation, sort it onto
                    a single INDEX.TXT file.

               PRINT - Make a paper copy of the INDEX.TXT file.

          Copyright 1987 (C) by ABACUS Computer Service         Page 3 of 8

          FINDEX Version 2.6                                  July 23, 1987

          FILES OPERATION
               CONFIGURATION: A: - Input disk.
                    B:>       B: - FINDEX DIR disk.

               The main  program for collecting the list of files from each
          disk is FILES.  It's usage is:

                    FILES [-acdfp] D12
          Where:
               -a   Automatically increment  the DiskID  number and execute
                    again.   This is handy when you are running a series of
                    disks that are in sequence.  This option  also turns on
                    option -f  for file  output.   If the initial DiskID is
                    given as three alphabetic  characters, the  last letter
                    is converted to the digit "1" for the second pass.  The
                    prompt between passes  says  "use  the  *  character to
                    STOP",   actually   ANY   character   followed  by  the
                    RETURN/ENTER character will cause termination.  It will
                    automatically  terminate  if  the  numeric  part of the
                    DiskID reaches the maximum.

               -c   Output path records  with  a  3  digit  numeric DiskID.
                    This is  particularly useful  for hard  disks where you
                    may have many sub-directories.

               -dB:  Drive to get the files from.  The  drive character can
                    be separated  from the  -d with  a single space and the
                    colon  character  is  accepted  but  is  not necessary.
                    Default: the current drive.

               -fNAME File  name to be used for the output.  Normally FILES
                    sends the output to the screen  but this  option causes
                    the output  to be  placed in  the named file.  The NAME
                    can include the drive character followed by a colon and
                    may  include  sub-directories,  but  must not exceed 80
                    characters.  Also NAME can be  simply the  drive letter
                    and  a  colon,  or  the  drive  letter, a colon, a sub-
                    directory (path) name ending with the \ character.  The
                    NAME can  be separated  from the -f with a single space
                    character.  Default: DiskID.DIR

               -p   Output Path records.   This option  produces additional
                    output but for disks containing many sub-directories it
                    provides a  way to  get the  complete path  name in the
                    output.  Default: no path records are output.

               D12  is an  example of  the DiskID number.  You will use the
                    actual DiskID  number  assigned  to  the  disk  you are
                    currently    creating  the  file list for.  This DiskID
                    number must be three  characters, usually  the first is
                    an alphabetic character (A thru Z) and the last two are
                    numeric.

               When FILES is invoked with  no  arguments  (the  DiskID must
          always be  given) or  if invalid option are given a short menu is
          displayed.



          Copyright 1987 (C) by ABACUS Computer Service         Page 4 of 8

          FINDEX Version 2.6                                  July 23, 1987

          GO OPERATION
               CONFIGURATION: A: Input Disk
                    B:>       B: FINDEX DIR disk.

               This simple batch program  reduces the  key strokes required
          to invoke  the FILES program.  Since it is intended that the user
          modify this  file to  fit the  specific requirements,  it will be
          described here.  This file contains the following:

                    if %1! == ! goto menu
                    files -ada %1
                    goto end
                    :menu
                    rem       NEED DiskID
                    :end

               The first  line just  checks that some argument was given on
          the command line, if none was typed the "NEED DiskID"  message is
          displayed and  the program  terminates.  If an argument was given
          it simply passes that argument,  the  three  character  DiskID to
          FILES on  the command  line that  invokes it.   As shown here the
          options: -ada specify Automatic mode (-a) and Drive A: (da). This
          is the setup to collect the file names from the disk in drive A:,
          and create the DiskID.DIR file  on  drive  B:,  when  the current
          drive is B: and the GO.BAT file is on drive B:.  If it is desired
          to collect files from drive B: simply change the -ada to -adb.

          SORTX OPERATION
               CONFIGURATION: A: FINDEX WORK
                    A:>       B: FINDEX DIR
               This program resides on the FINDEX WORK disk  created during
          the installation process above.  It uses the CAT.EXE file as well
          as the SORT.EXE that  is supplied  with the  MS-DOS system.   The
          SORTX program usage is:
                    SORTX -f or -h
          Where:
               -f  is to designate a Floppy drive system.
               -h  is to designate a Hard drive system.

               NOTE: The  sorting operation can take some time to complete,
                    an INDEX.TXT file  with  1300  records  takes  over ten
                    minutes.    During  this  time  nothing  appears  to be
                    happening, since the  sorting  takes  place  in memory.
                    Just be  patient!   In addition the MS-DOS SORT program
                    is limited to files less than 64K bytes.

               The SORTF program written by Vernon D. Buerg is far superior
          to the  standard SORT program.  This program or something like it
          is a must if your files grow beyond the 64K  limit.   In addition
          to the  increased file size limit it's much faster - it will sort
          a file of 101,449 bytes containing 2,650 records in 63 seconds!

               The SORTF program requires two files:  an input  file and an
          output file.   The  following two  command lines will collect all
          the .DIR file contents into a single file, TEMP, and then execute
          SORTF to sort and put the output in the file INDEX.TXT:
                    cat *.dir >temp
                    sortf temp index.txt

          Copyright 1987 (C) by ABACUS Computer Service         Page 5 of 8

          FINDEX Version 2.6                                  July 23, 1987


          PINDEX OPERATION
               CONFIGURATION: A: FINDEX WORK
                    A:>       B: FINDEX DIR

               This  program prints the contents of the INDEX.TXT file in a
          compressed print format  (132  characters  per  line),  with page
          heading and  page numbers.  The file records are printed in three
          columns and 60 lines per page or a total of 180 records per page.
          Can  also  be  used  as  an  on-line "find" tool by use of the -d
          option.

          The PINDEX program usage is:

                    PINDEX  [-hfsxkmd]
          Where:
               -h Heading string (48 char max)
               -f Input file (default: INDEX.TXT)
               -s Select  string (20 max)
               -x eXclude string (20 max) 
               -k Kill summary report
               -m Margin string (default: 4 spaces)
               -d Display output on screen.

               All strings given on the command line must be quoted if they
          contain spaces or other characters that MS-DOS considers special.
          The space character  immediately  after  an  option  character is
          optional, thus   -h"Head   string"   and  -h  "Head  string"  are
          equivalent.  If the -h  option  is  not  given  the  string "Disk
          Index" is used.

               The -f option is used to specify the input file name.  If it
          is not given "INDEX.TXT" is used. 

               Multiple select and exclude options are permitted (up  to 20
          each).   All select  and exclude  strings are  converted to UPPER
          case and  the  wild  card  characters  "?"  and  "*"  are   taken
          literally.  If neither the -s or -x options are given ALL records
          are selected.

               When there is space remaining  on  the  last  output  page a
          "Summary" report  is printed.   This  report contains  a count of
          Disk records and File records, the Input file name and  date, and
          the program name and version.   When either the -s or -x  options
          were specified on the  command line  the count  of Selected  and 
          eXcluded  records  is  also  given  along with as many Select and
          eXclude strings as will fit on a single line.  The -k option will
          suppress the entire summary report.  
                   
               The -m  option allows the user to select the style and width
          of the column separators and determines the overall printed width
          of the data lines.  The default of 4 spaces produces an output 
          line of 132 characters which is the maximum for some printers.
               EXAMPLE:
                    PINDEX -h "My Work Files" -fb:index.txt

               Will produce  a listing of all disk and file records in the 
          file INDEX.TXT in drive B: and the heading line will  include the

          Copyright 1987 (C) by ABACUS Computer Service         Page 6 of 8

          FINDEX Version 2.6                                  July 23, 1987

          string "My  Work Files".  A full (7 lines) summary report will be
          printed on the  last  page  if  there  is  otherwise  empty space
          remaining on that page.

          DISK ID NUMBERS
               The DiskID sequence is limited to three characters the first
          of  which is expected  to  be  an  alphabetic  character  and the
          second  two  characters  are  usually numeric digits.  The second
          character can be an alphabetic character which limits the numeric
          single digit to ten possibilities - zero through nine.

               If the letters 'I' and 'O' are eliminated to avoid confusion
          with the numerals '1'  and  '0',  2,376  different  disks  can be
          identified  with  a  unique  ANN  (Alpha, Numeric, Numeric) code.
          Another 5,760 disks can be identified with a unique AAN code, for
          a grand total of 8,136 different disks.

               The two  alphabetic character  (AAN) DiskID  form allows for
          576  different  combinations  of  characters,  each   capable  of
          identifying ten different disks - this is ideal if you store your
          floppy disk in the standard ten per box.

               Since  it  is  necessary  to  physically  apply  the  DiskID
          sequence  to  each  disk,  it  is  important  that  you choose an
          identification scheme that will do the job for your circumstances
          because it  is very  painful to  make changes and re mark all the
          disks.

          EXAMPLE
               I will list the steps used  to create  an index  for several
          boxes  of  floppy  disks.    For  this description I will use the
          GO.BAT file described above.
               1.   Type: b:
                    To make drive B: the current drive.

               2.   Place  the  FINDEX  DIR  disk  (Created  under install,
                    above) in drive B:

               3.   Choose a  identification scheme for the boxes of disks,
                    in  this  case  it  was  decided  to  begin   the  disk
                    identification with  DA, so the first box is labeled DA
                    and  the  enclosed  disks  are  physically  labeled DA0
                    through DA9.
               4.   Place disk DA0 in drive A:

               5.   Type: go da0

               6.   When the  prompt appears  (about 2 seconds), remove the
                    disk in drive A:  and put  the next  disk, DA1  in it's
                    place.

               7.   Repeat Step  6 until you have processed disk DA9, after
                    which the program will automatically stop.

               8.   Label the next box of disks, and goto Step 4, using the
                    appropriate DiskID i.e. db0, dc0, dd0 .....

               9.   Run SORTX  to create a sorted INDEX.TXT file.

          Copyright 1987 (C) by ABACUS Computer Service         Page 7 of 8

          FINDEX Version 2.6                                  July 23, 1987


               10.  Run PINDEX to print the INDEX.TXT file.

          SPECIAL DISKS
               Some  disks,  particularly  some "copy protected" disks will
          fail if you simply try to  do a  standard DIR  on them.   "Flight
          Simulator" is  a case in point.  The FILES program will also fail
          when it attempts to read such a disk.   The  best way  around the
          problem is  to use  your text  editor to  make an ASCII file that
          simulates the FILES output.   For  example, the  file DK7.DIR was
          created containing the following two lines:

                    'DK7 - Flight Sim  Tue Jun  9 21:52 1987
                    Flight Sim   DK7      ???  ?-??-?? ??:??

               This  will  fill  what  would  otherwise  be  a  hole in the
          INDEX.TXT  file  because  of  the  inability  to  read  the "copy
          protected" disk.   NOTE:  the use  of lower  case characters, for
          both the disk label and the filename; this  is to  call attention
          to the fact that this is a special case.

               Some  disks  have  what  would  normally  be  called illegal
          characters in the file  names, when  FILES encounters  an illegal
          character, specifically  a character with a value less than 45 or
          greater than 126, it converts it to the ? character.

          FILE SIZES
               Some statistics from an actual FINDEX  run are:  13 boxes of
          floppy  disks,  contained  129  disks,  for a total of 2,521 file
          records, produced an INDEX.TXT file  of  101,449  bytes,  took 63
          seconds for  SORTF to  sort (the  MS-DOS SORT can't handle a file
          this large), PINDEX produced 15 printed pages when  the INDEX.TXT
          file was printed.

               On floppy  disk systems the maximum number of files (111) is
          a limit that is likely to be reached before you run out of space.
          The  solution   to  both  the  number  of  files  and  the  space
          limitations is another floppy disk.





















          Copyright 1987 (C) by ABACUS Computer Service         Page 8 of 8
```
{% endraw %}

## INDEX.TXT

{% raw %}
```
'DA0 -  no label   Tue Jun  9 16:06 1987
'DA1 -  no label   Tue Jun  9 16:07 1987
'DA2 - SETUP       Tue Jun  9 16:07 1987
'DA3 - BUILD       Tue Jun  9 16:07 1987
'DA4 - UTILITY     Tue Jun  9 16:07 1987
'DA5 - APPS        Tue Jun  9 16:08 1987
'DA6 - WRITE       Tue Jun  9 16:08 1987
'DA7 -  no label   Tue Jun  9 16:08 1987
'DA8 -  no label   Tue Jun  9 16:08 1987
'DA9 -  no label   Tue Jun  9 16:09 1987
'DJ0 - RWRFDLYWRE  Tue Jun  9 20:08 1987
'DJ1 - SIGNMAST SY Tue Jun  9 20:08 1987
'DJ2 - SGN MSTSAM  Thu Jun 11 20:31 1987
'DJ3 - LABELMAKER  Thu Jun 11 20:31 1987
'DJ4 - Flight Sim  Tue Jun  9 20:10 1987
'DJ5 - C-86 COMPIL Tue Jun  9 20:19 1987
'DJ6 - CROSSTALK   Tue Jun  9 20:20 1987
'DJ7 - SIDE & POP  Tue Jun  9 20:20 1987
'DJ8 - PR PRESS #1 Tue Jun  9 20:20 1987
'DJ9 - PR PRESS #2 Tue Jun  9 20:20 1987
123-2.PIF\PI DA2      369 11-15-85  5:42
123.PIF\PIF  DA2      369 11-15-85  5:42
21.002       DJ0     9984  7-21-83 12:00
7PLO0KYJ.CAR DA1     3032 12-15-85 14:37
ABC.TXT      DA5       42 11-15-85  5:42
ACCOUNTS     DJ2     1152  1-01-80  0:42
ANATOMY.001  DJ0     7680  7-21-83 12:00
ANNETTE      DJ2      640 11-07-86 23:33
ANSI.SYS     DA8     2556  9-18-85 13:09
ASSIGN.COM   DA8     1509  5-14-85  0:02
ATTRIB.EXE   DA8    15091  5-14-85  0:02
AUTOEXEC.BAT DA0        8  7-23-85  8:01
AUTOEXEC.BAT DJ0       32  7-21-83 12:00
AUTOEXEC.BAT DJ3       10  1-01-80  0:01
AUTOEXEC.BAT DJ6       15 10-03-86 21:02
AUTOEXEC.BAT DJ8        5  1-22-86 18:36
AUTOEXEC.TXT DA7       35  4-30-86  5:00
BACKUP.COM   DA8    16768  1-03-86  9:37
BAKEOFF      DJ2      640 12-02-85  8:20
BAKEOFF1     DJ2      768 12-02-85  8:37
BAKEOFF2     DJ2      768 12-03-85  8:17
BASCOM.PIF\P DA2      369 11-15-85  5:42
BASIC.COM    DA9     1612  6-18-85 10:27
BASIC.PIF\PI DA2      369 11-15-85  5:42
BASICA.COM   DA9     1612  6-18-85 10:27
BASICA.COM   DJ0    26112 10-20-83 12:00
BASICA.PIF\P DA2      369 11-15-85  5:42
BASRUN.EXE   DJ1    31744  9-20-84 12:00
BDAY.CAR     DA1     3032  1-01-80  3:45
BEACH.SIG    DA1     1516  1-01-80  1:16
BIO.002      DJ0     4390  7-21-83 12:00
BIPLANE.CAL  DA1     2178  1-01-80  0:42
BLOCK324     DJ3    18176  4-22-85  0:03
BLUECHIP.PRN DJ8      896  1-01-80  0:14
BLUECHIP.PRN DJ9      896  1-01-80  0:14
BOGGY.001    DJ0     3456  7-21-83 12:00
BORDER.MTX   DA1      256  1-01-80 22:09
BORDERS.SHP  DA1    20608  1-01-80  0:17
BORDERS1.BIC DJ8    20608  1-01-80  0:17
BORDERS1.BNM DJ8      176  1-01-80  0:11
BORDERS1.NUM DJ8      128  1-01-80  0:01
BOTTOM       DJ2      896  1-01-80  0:34
BUFERSET.COM DJ1       76  9-20-84 12:00
BUILD.LBL    DA3        7 11-15-85  5:42
BUSONE.003   DJ0    28160  7-21-83 12:00
C86S2S.LIB   DJ5   119808  1-01-80  0:25
CABLE1.EXE   DJ1     1629  9-20-84 12:00
CABLE2.EXE   DJ1     1629  9-20-84 12:00
CALC.EXE     DA5    24992 11-15-85  5:42
CALENDAR     DJ2     1152  2-03-84  1:20
CALENDAR.EXE DA5    37360 11-15-85  5:42
CARDFILE.EXE DA5    36528 11-15-85  5:42
CARDGAME.EXE DA7    39798  4-30-86  5:00
CARDGAME.HLP DA7     3424  4-30-86  5:00
CC1.EXE      DJ5    31110  1-01-80  0:19
CC2.EXE      DJ5    58457  1-01-80  0:11
CC3.EXE      DJ5    57264  1-01-80  0:15
CC4.EXE      DJ5    48983  1-01-80  0:17
CGA.DRV      DA2    13008 11-15-85  5:43
CGA.GRB      DA3     1350 11-15-85  5:42
CGA.LGO      DA3     2931 11-15-85  5:42
CGP220.PRN   DJ8     1702  3-05-86 12:30
CGP220.PRN   DJ9     1702  3-05-86 12:30
CHART.PIF\PI DA2      369 11-15-85  5:42
CHECK.003    DJ0      116  7-15-86  0:16
CHKDSK.EXE   DA8     9296  5-15-85  0:00
CHMOD.COM    DA8     6528  8-27-85 15:04
CITOH.DRV    DA4    10976 11-15-85  5:42
CLIPBRD.EXE  DA5     9696 11-15-85  5:42
CLKDVR.SYS   DA0      735  2-12-86 10:48
CLKDVR.SYS   DA8      735  2-12-86 10:48
CLKDVR.SYS   DJ6      735  2-12-86 10:48
CLKDVR.SYS   DJ8      735  2-12-86 10:48
CLOCK.EXE    DA5     7920 11-15-85  5:42
CLOUT.PIF\PI DA2      369 11-15-85  5:42
COLOR.COM    DA8      155  6-18-85 14:07
COMM.DRV     DA2     4860 11-15-85  5:43
COMMAND.COM  DA0    22677  5-15-85  0:00
COMMAND.COM  DA8    22677  5-15-85  0:00
COMMAND.COM  DJ0    17792 10-20-83 12:00
COMMAND.COM  DJ1    22677  5-15-85  0:00
COMMAND.COM  DJ6    22677  5-15-85  0:00
COMMAND.COM  DJ8    22677  5-15-85  0:00
COMP.COM     DA8     3018  9-10-85 14:40
COMPILE.BAT  DJ5      384  1-01-80  0:03
COMPUTER.FNT DA1     7424  1-01-80  0:08
COMPUTER.FNT DJ8     7424  1-01-80  0:08
CONF03.DRI   DJ1     7172  9-20-84 12:00
CONFIG.12    DA1       12  1-01-80  0:02
CONFIG.BAT   DA1       16  1-01-80  0:05
CONFIG.SYS   DA0       21  1-01-80  5:02
CONFIG.SYS   DA1       11  1-01-80  0:01
CONFIG.SYS   DA8       21  1-01-80  5:02
CONFIG.SYS   DJ6       21  1-01-80  5:02
CONFIG.SYS   DJ8       21  1-01-80  5:02
CONFIG03.DRI DJ1      256 10-19-86 20:36
CONTROL.EXE  DA5    53360 11-15-85  5:42
COURA.FON    DA4     8720 11-15-85  5:42
COURB.FON    DA4    12304 11-15-85  5:42
COURC.FON    DA4     8784 11-15-85  5:42
COURD.FON    DA4    15136 11-15-85  5:42
CRAPS.001    DJ0     7040  7-21-83 12:00
CREATE.BAT   DJ1      219  9-20-84 12:00
CREATEHD.BAT DJ1      752  9-20-84 12:00
CRYPT.LET    DA1     3032  1-01-80  0:07
CUBOLOGY     DJ2      768 11-26-85 10:13
C_ITOH.PRN   DJ8     1024  1-01-80  0:48
C_ITOH.PRN   DJ9     1024  1-01-80  0:48
DATAPROD.PRN DJ8      896 12-31-85 16:08
DATAPROD.PRN DJ9      896 12-31-85 16:08
DATESET.EXE  DJ3    21632  3-16-85  0:13
DBASE.PIF\PI DA2      369 11-15-85  5:42
DBASE2.PIF\P DA2      369 11-15-85  5:42
DBASE3.PIF\P DA2      369 11-15-85  5:42
DEBUG.EXE    DA8    15364  5-15-85  0:00
DEVILLE.FNT  DA1    15360  1-01-80  9:40
DEVILLE.FNT  DJ8    15360  1-01-80  9:40
DIAGNOSE.COM DA0    21760  6-12-86 15:12
DIPLOMA      DJ2      768  1-01-80  1:01
DISKCOMP.COM DA8     5020  2-04-86 12:20
DISKCOPY.COM DA8     5610  2-04-86 12:20
DMP105.PRN   DJ8     1024  1-02-80  2:46
DMP105.PRN   DJ9     1024  1-02-80  2:46
DMP2100.PRN  DJ8     1024  1-01-80  0:19
DMP2100.PRN  DJ9     1024  1-01-80  0:19
DMP400.PRN   DJ8     1152 12-31-85 13:49
DMP400.PRN   DJ9     1152 12-31-85 13:49
DOMINOES.002 DJ0    13056  7-21-83 12:00
DOTHIS.TXT   DA5      493 11-15-85  5:42
DRAMA.LET    DA1     3032  1-01-80  0:09
DRAW.002     DJ0     8847  7-21-83 12:00
DW2PG.PIF\PI DA2      369 11-15-85  5:42
DW3PG.PIF\PI DA2      369 11-15-85  5:42
EDITOR.FNT   DA1     1408  1-02-80  8:21
EDITOR.FNT   DJ8     1408  1-02-80  8:21
EDLIN.EXE    DA8     7122  5-15-85  0:00
EGAHIBW.DRV  DA2    13952 11-15-85  5:42
EGAHIBW.GRB  DA3       15 11-15-85  5:42
EGAHIBW.LGO  DA3        9 11-15-85  5:42
EGAHIRES.DRV DA2    17536 11-15-85  5:42
EGAHIRES.GRB DA3       15 11-15-85  5:42
EGAHIRES.LGO DA3        9 11-15-85  5:42
EGALORES.DRV DA2    15648 11-15-85  5:42
EGALORES.GRB DA3     1213 11-15-85  5:42
EGALORES.LGO DA3        9 11-15-85  5:42
EGAMONO.DRV  DA2    13952 11-15-85  5:42
EGAMONO.GRB  DA3     1061 11-15-85  5:42
EGAMONO.LGO  DA3     2930 11-15-85  5:42
ELAINE       DJ2      512 11-08-86  0:08
ELEANOR      DJ2      512 11-08-86  1:44
EMM.AT       DA2    12874  7-30-85 17:33
EMM.PC       DA2    12898  7-30-85 17:15
EN001.E      DJ3      128  1-01-80  0:22
EN002.E      DJ3      256  3-03-85  0:04
EN003.E      DJ3      128  3-03-85  0:04
EN004.E      DJ3      128  3-03-85  0:06
EN005.E      DJ3      128  1-01-80  0:16
EN006.E      DJ3      256  3-03-85  0:08
EN007.E      DJ3      128  3-03-85  0:08
EN008.E      DJ3      384  3-03-85  0:09
EN009.E      DJ3      256  3-03-85  0:08
EN010.E      DJ3      128  3-03-85  0:09
EN011.E      DJ3      256  3-03-85  0:09
EN012.E      DJ3      128  3-03-85  0:10
EN013.E      DJ3      128  3-03-85  0:10
EN014.E      DJ3      128  3-03-85  0:10
EN015.E      DJ3      256  3-03-85  0:11
EN016.E      DJ3      384  3-03-85  0:11
EN017.E      DJ3      384  3-17-85  0:28
EN018.E      DJ3      256  3-03-85  0:11
EN019.E      DJ3      128  3-03-85  0:14
EN020.E      DJ3      128  3-03-85  0:14
EN021.E      DJ3      128  3-03-85  0:14
EN022.E      DJ3      128  3-03-85  0:14
EN023.E      DJ3      128  3-03-85  0:14
EN024.E      DJ3      128  3-03-85  0:15
EN025.E      DJ3      128  3-03-85  0:19
EN026.E      DJ3      256  3-03-85  0:19
EN027.E      DJ3      128  3-03-85  0:20
EN028.E      DJ3      128  1-01-80  0:08
EN029.E      DJ3      128  1-01-80  0:10
EN030.E      DJ3      128  1-01-80  0:23
EPSON-FX.PRN DJ8      896  1-01-80  2:34
EPSON-FX.PRN DJ9      896  1-01-80  2:34
EPSON.DRV    DA4    12688 11-15-85  5:42
EXE2BIN.EXE  DA9     2816  5-15-85  0:00
EXIT.WPM     DJ6      640 11-01-82 12:02
FBPNUM       DA1      128  1-01-80  2:51
FDISK.COM    DA8     6779  2-04-86 12:19
FILE.PIF\PIF DA2      369 11-15-85  5:42
FINANCE      DJ2     1280  1-01-80  1:33
FIND.EXE     DA8     6403  5-15-85  0:00
Flight Sim   DJ4    ?????  ?-??-??  ?:??
FNTNAMES.MTX DA1      256  1-01-80  1:12
FONT1        DJ1     2944  9-20-84 12:00
FONT2        DJ1     5376  9-20-84 12:00
FONT3        DJ1     5504  9-20-84 12:00
FONT4        DJ1     7936  9-20-84 12:00
FONT5        DJ1     6272  9-20-84 12:00
FONT6        DJ1     9344  9-20-84 12:00
FONTICON.SHP DA1     4096  1-01-80 20:54
FONTS        DJ2      512  2-03-84  0:35
FONTS1.FIC   DJ8     4096  1-01-80 20:54
FONTS1.FNM   DJ8      128  1-01-80  0:08
FONTS1.FSZ   DJ8      896  1-01-80  0:51
FONTS1.NUM   DJ8      128  1-01-80  0:54
FOOTBALL.002 DJ0    12160  7-21-83 12:00
FORMAT.EXE   DA8    10351  2-04-86 12:19
FSIZES       DA1      896  1-01-80  0:31
FTG.DRV      DA2     1961 11-15-85  5:42
FW.PIF\PIF   DA2      369 11-15-85  5:42
FWC.PIF\PIF  DA2      369 11-15-85  5:42
FWT.PIF\PIF  DA2      369 11-15-85  5:42
GDI.EXE      DA3    94254 11-15-85  5:42
GEDIT.EXE    DA1    25728  1-01-80  0:49
GEDIT.EXE    DJ9    44404  2-11-86 10:28
GO.BAT       DJ1       56  9-20-84 12:00
GOLF.002     DJ0    12416  7-21-83 12:00
GPOS.MTX     DJ8       80  1-07-85 15:56
GRAFTABL.COM DA8     3337 10-22-85  9:21
GRAPH.PIF\PI DA2      369 11-15-85  5:42
GRAPHICS.COM DA8     6393 10-28-85 16:01
GRSIZE.MTX   DA1      128  1-01-80 19:25
GRSIZE.MTX   DJ8      128  1-01-80 19:25
GWBASIC.EXE  DA9    73024  2-04-86 11:36
H1.ASC       DJ8      944  1-10-85 11:20
H2.ASC       DJ8     1015  1-10-85 10:14
H3.ASC       DJ8      748  1-10-85 10:15
H4.ASC       DJ8     1301  1-10-85 10:18
H4.ASC       DJ9     1301  1-10-85 10:18
H5.ASC       DJ8      908  1-17-86 14:43
H6.ASC       DJ8      695  1-17-86 14:45
H6.ASC       DJ9      695  1-17-86 14:45
HAMPTON.FNT  DA1     6912  1-01-80  3:26
HAMPTON.FNT  DJ8     6912  1-01-80  3:26
HANGMAN.001  DJ0     6400  7-21-83 12:00
HELVA.FON    DA4     8032 11-15-85  5:42
HELVB.FON    DA4    10480 11-15-85  5:42
HELVC.FON    DA4     8656 11-15-85  5:42
HELVD.FON    DA4    12224 11-15-85  5:42
HERCULES.DRV DA2    15776 11-15-85  5:42
HERCULES.GRB DA3     1250 11-15-85  5:42
HERCULES.LGO DA3     3054 11-15-85  5:42
HIFONTS.FON  DA2     7472 11-15-85  5:42
HINTS.001    DJ0     4864  7-21-83 12:00
HISTORY.001  DJ0    15104  7-21-83 12:00
HOME.SIG     DA1     1516  1-01-80  1:44
HP747XA.DRV  DA4    21232 11-15-85  5:42
HPLASER.DRV  DA4    15600 11-15-85  5:42
HTPM.PIF\PIF DA2      369 11-15-85  5:42
IBM.PRN      DJ8      896 12-31-85 16:08
IBM.PRN      DJ9      896 12-31-85 16:08
IBMCMPCT.PRN DJ8     1664  1-01-80  7:42
IBMCMPCT.PRN DJ9     1664  1-01-80  7:42
IBMCOLOR.PRN DJ8      896  1-01-80  1:15
IBMCOLOR.PRN DJ9      896  1-01-80  1:15
IBMFILE.PIF\ DA2      369 11-15-85  5:42
IBMGRAPH.PI\ DA2      369 11-15-85  5:42
IBMGRX.DRV   DA4    11392 11-15-85  5:42
IBMREPRT.PI\ DA2      369 11-15-85  5:42
IBMWRITE.PI\ DA2      369 11-15-85  5:42
IDEAS        DJ2      512  2-03-84  0:19
IDS.PRN      DJ8     1129  1-05-86 15:51
IDS.PRN      DJ9     1129  1-05-86 15:51
INFO.003     DJ0    20715  7-21-83 12:00
INFO.BAT     DJ1      252  9-20-84 12:00
INITIAL      DJ3      128  1-01-80  0:05
INSTALL.EXE  DA7    24266  4-30-86  5:00
INSTALL.EXE\ DJ7    36736  1-21-85 23:44
JLOWE        DJ2      640 10-21-86 22:09
JOIN.EXE     DA8     8956  5-15-85  0:00
JOYMOUSE.DRV DA2     2114 11-15-85  5:42
KERNEL.EXE   DA2    33343 11-15-85  5:42
KEYBFR.COM   DA8     3248  7-15-85 15:04
KEYBGR.COM   DA8     3248  7-15-85 15:04
KEYBIT.COM   DA8     3248  7-15-85 15:04
KEYBSP.COM   DA8     3248  7-15-85 15:04
KEYBUK.COM   DA8     3248  7-15-85 15:04
KEYBUS.DRV   DA2     3335 11-15-85  5:42
LABEL.COM    DA8     4352  1-03-86  9:16
LABLMAKR.EXE DJ3    75392 10-19-85 18:13
LASTNO       DJ3      128  1-01-80  0:23
LEARNPOP.TX\ DJ7     9800  1-01-80  1:37
LINK.EXE     DA9    38422  5-15-85  0:00
LINK.EXE     DJ5    39936  3-08-83 12:00
LMOUSE.DRV   DA2     2484 11-15-85  5:42
LOFONTS.FON  DA2     5552 11-15-85  5:42
LOGO.COM     DJ0     1426  7-21-83 12:00
LOTUS.PIF\PI DA2      369 11-15-85  5:42
LOTUS2.PIF\P DA2      369 11-15-85  5:42
LPC.DRV      DA2     2438 11-15-85  5:42
LQ-1500.PRN  DJ8     1024  1-01-80  0:34
LQ-1500.PRN  DJ9     1024  1-01-80  0:34
LQ1500.DRV   DA4    12992 11-15-85  5:42
MAIN.MTX     DA1      256  1-01-80 19:25
MAIN.MTX     DJ8      256 12-03-85 12:35
MAIN.SHP     DA1    11264  1-01-80  2:15
MAIN.SHP     DJ8     8448  1-01-80  0:32
MARATHON.BAN DA1     1516  1-01-80  0:34
MASTER.001   DJ0     3712  7-21-83 12:00
MATCH.002    DJ0     8817  7-21-83 12:00
MAZE.001     DJ0     6528  7-21-83 12:00
MENU1.001    DJ0     5760  7-21-83 12:00
MENU2.002    DJ0     2176  7-21-83 12:00
MENU3.003    DJ0    23040  7-21-83 12:00
MICHELE      DJ2      640 11-08-86 11:54
MODE.COM     DA8     5179 10-11-85 12:19
MODERN.FON   DA4     9680 11-15-85  5:42
MOMICOM.XTK  DJ6     1079  1-31-85 10:05
MONO.COM     DA8      152  6-18-85 14:07
MORE.COM     DA8      266  5-15-85  0:00
MOUSE.DRV    DA2     3239 11-15-85  5:42
MOUSE.TBP    DA7      157  4-30-86  5:00
MOUSE.TXT    DA7       25  4-30-86  5:00
MOUSESYS.COM DA7     9336  4-30-86  5:00
MP.PIF\PIF   DA2      369 11-15-85  5:42
MP40.PIF\PIF DA2      369 11-15-85  5:42
MP80.PIF\PIF DA2      369 11-15-85  5:42
MPI.PRN      DJ8     1024  1-01-80  5:58
MPI.PRN      DJ9     1024  1-01-80  5:58
MSACCESS.PI\ DA2      369 11-15-85  5:42
MSC.EXE      DA7    33088  4-30-86  5:00
MSDOS.EXE    DA3    41904 11-15-85  5:42
MSDOSD.EXE   DA3     5934 11-15-85  5:42
MSMOUSE.COM  DA7     9587  4-30-86  5:00
MSMOUSE.LIB  DA7     6656  4-30-86  5:00
MSMOUSE.SYS  DA7     9235  4-30-86  5:00
MSMOUSE1.DRV DA2     1966 11-15-85  5:42
MSMOUSE2.DRV DA2     1966 11-15-85  5:42
MUSIC        DJ2      768 11-09-85 19:02
M_ACCESS.COM DA7     4819  4-30-86  5:00
M_ACCESS.MSC DA7     3127  4-30-86  5:00
M_DBASE.COM  DA7     6587  4-30-86  5:00
M_DBASE.MSC  DA7     5532  4-30-86  5:00
M_FC.COM     DA7     6853  4-30-86  5:00
M_FC.MSC     DA7     5788  4-30-86  5:00
M_FW.COM     DA7     5488  4-30-86  5:00
M_FW.MSC     DA7     4608  4-30-86  5:00
M_LOTUS.COM  DA7     3880  4-30-86  5:00
M_LOTUS.MSC  DA7     2059  4-30-86  5:00
M_MP80.COM   DA7     4161  4-30-86  5:00
M_MP80.MSC   DA7     2230  4-30-86  5:00
M_PE.COM     DA7     6140  4-30-86  5:00
M_PE.MSC     DA7     5119  4-30-86  5:00
M_PLAIN.COM  DA7     3707  4-30-86  5:00
M_PLAIN.MSC  DA7     1530  4-30-86  5:00
M_SC3.COM    DA7     6680  4-30-86  5:00
M_SC3.MSC    DA7     5376  4-30-86  5:00
M_VC80.COM   DA7     6072  4-30-86  5:00
M_VC80.MSC   DA7     4630  4-30-86  5:00
M_VW.COM     DA7     4187  4-30-86  5:00
M_VW.MSC     DA7     2177  4-30-86  5:00
M_WP.COM     DA7     7247  4-30-86  5:00
M_WP.MSC     DA7     6092  4-30-86  5:00
M_WRITE.COM  DA7     4354  4-30-86  5:00
M_WRITE.MSC  DA7     2699  4-30-86  5:00
M_WS.COM     DA7     7497  4-30-86  5:00
M_WS.MSC     DA7     6494  4-30-86  5:00
NEC3550.DRV  DA4    21536 11-15-85  5:42
NECP2.DRV    DA4    11312 11-15-85  5:42
NEWE.003     DJ0    17152  7-21-83 12:00
NEWUSER.XTK  DJ6       13  1-26-84 10:14
NEWUSER.XTS  DJ6     1717  1-26-84 10:14
NOMOUSE.DRV  DA2     1592 11-15-85  5:42
NOTEPAD.EXE  DA5    18544 11-15-85  5:42
OFFICE.FNT   DA1     7168  1-01-80 11:23
OFFICE.FNT   DJ8     7168  1-01-80 11:23
OKI-82.PRN   DJ8     1024  1-01-80  0:25
OKI-82.PRN   DJ9     1024  1-01-80  0:25
OKI-IBM.PRN  DJ8     1024  1-01-80  0:26
OKI-IBM.PRN  DJ9     1024  1-01-80  0:26
OKI-STD.PRN  DJ8     1067  1-02-86 13:35
OKI-STD.PRN  DJ9     1067  1-02-86 13:35
OKI92.DRV    DA4    11392 11-15-85  5:42
ONLINE       DJ2     1024  2-03-84  1:29
OTHELLO.002  DJ0     7040  7-21-83 12:00
OUTLINE      DJ2     1024  1-01-80  0:45
PAINT.EXE    DA5    89584 11-15-85  5:42
PALCOM1.EXE  DJ1     1565  9-20-84 12:00
PALCOM2.EXE  DJ1     1565  9-20-84 12:00
PARK.COM     DA0     1322  6-10-86 14:00
PATRICIA     DJ2      640 11-08-86 11:11
PATTERN.MTX  DA1      128  1-01-80 19:25
PATTERN.MTX  DJ8      128  1-01-80 19:25
PATTICON.SHP DA1     2432  1-01-80  5:52
PATTICON.SHP DJ8     2432  1-01-80  5:52
PC-DRAW.PIF\ DA2      369 11-15-85  5:42
PCCALC.EXE\P DJ7    37128  1-01-80  1:37
PCNOTE.EXE\P DJ7    63400  1-01-80  1:37
PDRVRES.EXE  DJ1     7329  9-20-84 12:00
PE.HLP       DA7    10603  4-30-86  5:00
PE.PIF\PIF   DA2      369 11-15-85  5:42
PE.PRO       DA7     3816  4-30-86  5:00
PEGLEAP.002  DJ0     5888  7-21-83 12:00
PFSACCES.PI\ DA2      369 11-15-85  5:42
PIFEDIT.EXE\ DA2    28464 11-15-85  5:42
PLAIN.COM    DA7      178  4-30-86  5:00
PLAN.PIF\PIF DA2      369 11-15-85  5:42
PM.BAT       DA1      134  1-01-80  5:09
PM.BAT       DJ8      137 10-08-86 19:40
PM.BAT       DJ9      140  1-22-86 18:36
PMMAIN.EXE   DA1    64768  1-01-80  0:48
PMMAIN.EXE   DJ8    51456  2-24-86 10:40
POPCORN.EXE\ DJ7    80670  1-01-80  1:37
PRACTICE.DOC DA6     2944 11-15-85  5:44
PRDATA       DA1      256  1-01-80  1:20
PRESS.BAT    DJ8       12  1-23-86 19:13
PRFLAGS      DA1        9  1-01-80  0:01
PRINT.EXE    DA8     7832  5-30-85 11:14
PRINT.XTK    DJ6     1079  1-29-85 14:17
PRNPRESS.ASC DJ9    34124  1-23-86 19:51
PRNPRESS.PRT DJ9    41623  1-18-86 13:53
PROEDIT.PIF\ DA2      369 11-15-85  5:42
PROJ.PIF\PIF DA2      369 11-15-85  5:42
PROJM.PIF\PI DA2      369 11-15-85  5:42
PROPTS.MTX   DJ8       48  1-01-80  0:03
PRTYPE.MTX   DA1      128  1-01-80  0:34
RAMDRIVE.SYS DA2     6459  7-12-85 16:42
RB5000.PIF\P DA2      369 11-15-85  5:42
RBASE.PIF\PI DA2      369 11-15-85  5:42
README.DOC   DA4     2922 11-15-85  5:42
README.DOC   DA6     2922 11-15-85  5:44
RECOVER.EXE  DA8     3895  5-15-85  0:00
RELEASE.COM  DA8       61  6-16-86 13:57
REPORT.PIF\P DA2      369 11-15-85  5:42
RESTORE.COM  DA8    16160  1-03-86  9:44
REVERSI.EXE  DA5    14816 11-15-85  5:42
RG.PIF\PIF   DA2      369 11-15-85  5:42
ROMAN.FON    DA4    27264 11-15-85  5:42
SAMPLE.PRN\S DJ7     6404  8-17-83 23:30
SB.COM       DJ6    37870  3-11-83  0:09
SB.DAT       DJ6     4224 12-01-83 19:45
SC3.PIF\PIF  DA2      369 11-15-85  5:42
SCHEDULE     DJ2     1408  2-03-84  0:57
SCOM.PIF\PIF DA2      369 11-15-85  5:42
SCOMII.PIF\P DA2      369 11-15-85  5:42
SCRIBE.FNT   DA1    16768  1-01-80 10:39
SCRIBE.FNT   DJ8    16768  1-01-80 10:39
SCRIPT.FON   DA4     5744 11-15-85  5:42
SCRNSAVE.COM DJ6      384  1-01-80  1:26
SD.COM       DJ1     3456 11-04-84  7:18
SD.COM       DJ6     3456 11-04-84  7:18
SD.COM       DJ8     3456 11-04-84  7:18
SEABAT.001   DJ0     7546  7-21-83 12:00
SELECT.COM   DA8      936  5-23-86 14:52
SET.UP       DA1       14 10-10-86 13:25
SET.UP       DJ8       25 10-08-86 19:40
SET1200B.XTK DJ6       14  1-26-84 10:14
SET1200B.XTS DJ6      163  3-01-84 12:53
SETPR.MTX    DA1      128  1-01-80 19:25
SETPR.MTX    DJ8       80  1-01-80  5:09
SETUP.EXE    DA2    33974 11-15-85  5:42
SETUP.LBL    DA2        7 11-15-85  5:42
SETUP.XTK    DJ6       11  1-26-84 10:14
SETUP.XTS    DJ6     3452  1-26-84 10:14
SG10.DRV     DA4    13264 11-15-85  5:42
SHARE.EXE    DA8     7856  5-15-85  0:00
SHIP.CAL     DA1     2178  1-01-80  0:40
SIDEWAYS.CO\ DJ7    18257 10-24-86 18:11
SIDEWAYS.DF\ DJ7       70 10-24-86 19:58
SIGN.EXE     DJ1    68125  9-20-84 12:00
SIGN2.EXE    DJ1    61133  9-27-84 12:00
SIGNCAT.TXT  DJ2      256 11-08-86 11:11
SIZE.COM     DA8     4928 10-08-85 16:42
SLIB.SDR     DA1     2048  1-01-80  0:49
SLIB.SHP     DA1    70400  1-01-80  0:37
SM.BAT       DJ1       56  9-20-84 12:00
SMCONFIG.EXE DJ1    19968  9-20-84 12:00
SORT.EXE     DA8     1664  5-30-85 11:23
SOUND.DRV    DA2     5853 11-15-85  5:42
SPELL.PIF\PI DA2      369 11-15-85  5:42
SPIKE.XTK    DJ6     1079  1-31-85 15:43
SPOOLER.EXE  DA3    13216 11-15-85  5:42
STANDARD.SDR DJ8     1952  1-01-80  2:05
STANDARD.SDR DJ9     1952  1-01-80  2:05
STANDARD.SHP DJ8    70394  1-01-80  0:04
STANDARD.SHP DJ9    70394  1-01-80  0:04
STARGEM.PRN  DJ8      896  1-01-80  0:09
STARGEM.PRN  DJ9      896  1-01-80  0:09
STATS.002    DJ0    13696  7-21-83 12:00
STD.XTK      DJ6     1072  1-25-85  0:03
STDIO.H      DJ5      896  1-01-80  0:36
SUBST.EXE    DA8     9910  5-15-85  0:00
SURVIVAL.SIG DA1     1516  2-27-91  2:46
SYMPHACC.PI\ DA2      369 11-15-85  5:42
SYMPHONY.PI\ DA2      369 11-15-85  5:42
SYS.COM      DA8     3098  2-10-86 16:03
SYSTEM.DRV   DA2     2594 11-15-85  5:42
TANDYIBM.PRN DJ8     1024  1-01-80  0:26
TANDYIBM.PRN DJ9     1024  1-01-80  0:26
TERMINAL.EXE DA5    43968 11-15-85  5:42
TEST.COM     DA7     4829  4-30-86  5:00
THINKJET.PRN DJ8      896  1-01-80  0:04
THINKJET.PRN DJ9      896  1-01-80  0:04
TI850.DRV    DA4    10704 11-15-85  5:42
TICTAC.001   DJ0     3840  7-21-83 12:00
TIMEGONE.SIG DA1     1516  1-01-80  1:03
TIMES.FNT    DA1     8576  1-01-80  0:10
TIMES.FNT    DJ8     8576  1-01-80  0:10
TMSRA.FON    DA4     8208 11-15-85  5:42
TMSRB.FON    DA4    10784 11-15-85  5:42
TMSRC.FON    DA4     8240 11-15-85  5:42
TMSRD.FON    DA4    12608 11-15-85  5:42
TOPES.XTK    DJ6     1059  9-24-84 12:43
TOSH.DRV     DA4    11520 11-15-85  5:42
TOSHIBA.PRN  DJ8     1024  1-01-80  0:19
TOSHIBA.PRN  DJ9     1024  1-01-80  0:19
TOWERS.002   DJ0     3072  7-21-83 12:00
TREE.COM     DA8     6768  8-28-85 15:17
TURBO-87.PI\ DA2      369 11-15-85  5:42
TURBO.PIF\PI DA2      369 11-15-85  5:42
TURBOBCD.PI\ DA2      369 11-15-85  5:42
ULIB.SDR     DA1       32  8-21-85 15:39
ULIB.SHP     DA1     1154  8-21-85 15:39
UNISON.LET   DA1     3032  1-01-80  0:26
UP2.BAT      DJ1      484  9-20-84 12:00
UPDATE.BAT   DJ1      300  9-20-84 12:00
UPDATE.DOC   DJ3     8861  8-26-85 19:57
USER.EXE     DA3   122400 11-15-85  5:42
UTILITY.LBL  DA4        9 11-15-85  5:42
UTOPIA.FNT   DA1     4480  1-01-80  0:12
UTOPIA.FNT   DJ8     4480  1-01-80  0:12
VDISK.SYS    DA8     2822  1-07-86 13:43
VX.PIF\PIF   DA2      369 11-15-85  5:42
V_MSCHGC.BIN DA7     2496  4-30-86  5:00
V_MSCIBM.BIN DA7     2128  4-30-86  5:00
WALTER       DJ2      640 11-08-86 10:01
WESTERN.FNT  DA1     5504  1-01-80  0:11
WESTERN.FNT  DJ8     5504  1-01-80  0:11
WILDCAT.002  DJ0     9472  7-21-83 12:00
WIN.CNF      DA3     1936 11-15-85  5:42
WIN.INI      DA3     1801 11-15-85  5:42
WINOLDAP.MOD DA3    19392 11-15-85  5:42
WLCMHOME.BAN DA1     1516  1-01-80  0:38
WORD.PIF\PIF DA2      369 11-15-85  5:42
WORDEGA.PIF\ DA2      369 11-15-85  5:42
WP.PIF\PIF   DA2      369 11-15-85  5:42
WRDPERF.PIF\ DA2      369 11-15-85  5:42
WRITE.DAT    DA2       43 11-15-85  5:42
WRITE.EXE    DA6   188464 11-15-85  5:44
WRITE.PIF\PI DA2      369 11-15-85  5:42
WS.PIF\PIF   DA2      369 11-15-85  5:42
WS2000.PIF\P DA2      369 11-15-85  5:42
XASSIGN.COM  DA8    16976 10-23-85 15:44
XTALK.EXE    DJ6    60829  3-01-84 18:07
XTALK.HLP    DJ6    34991  1-26-84 10:13
XTALK.PIF\PI DA2      369 11-15-85  5:42
XTHELP.DIR   DJ6     5184  1-26-84 10:14
XTREE.COM    DA8     7136  8-27-85 15:08
XYWRITE.PIF\ DA2      369 11-15-85  5:42
```
{% endraw %}

## SORTF217.DOC

{% raw %}
```

                              SORTF Command

                    (c) Copyright Vernon D. Buerg 1985-87
                        Version 2.17 - March 2, 1987


Purpose:   The SORTF command reads data from an ASCII file, sorts the
           records, and writes the data to another file.

Format:
           SORTF [d:][path]fname[.ext] [d:][path]fname[.ext]
                 [/+nnn[,len]]
                 [/R]
                 [/C]

Remarks:   Records read from the input file ending with a carriage
           return and line feed are considered logical records and may
           be up to 256 characters in length.

           The records are sorted into ascending ASCII character order
           unless /R is supplied to reverse the order.

           The /C option may be added to cause SORTF to treat the key
           fields as case insensitive data. That is, lower case letters
           in the key field are treated as upper case letters.

           The key is taken from the first character position, unless
           the /+ operand is used to specify the location of the key
           within the records. The position may be a value from one
           to 255. The first 12 characters at that position are used
           as the record key unless the 'len' operand is used to
           specify the key length. The key length may be a value from
           1 to 99.

           For example, to sort a file in descending order with the
           keys in position 10:

                SORTF TEST.DAT TEST.SRT /R/+10

           Or, to sort the same file using keys with 24 characters:

                SORTF TEST.DAT TEST.SRT /R/+10,24

           Depending on the amount of memory available, up to 40000
           records, or a file up to 16-Mb, may be sorted.

           The advantages of using SORTF instead of the SORT filter are:
                - files larger than 63K may be sorted
                - less time is required

           For best results, place the input file on the fastest
           available drive, e.g. RAM disk.









Notes:
        Written by Vernon Buerg for the  IBM PC using DOS 2.0 and is
        supplied for personal use. All rights reserved.

        Not for sale or hire. Commercial use is prohibited. This means
        that no fee may be charged for any copies.  Nor may SORTF be
        included (or bundled) with other goods or services. Exceptions
        may be granted upon written request only.

        If you find SORTF useful, you are encouraged to make a contribution
        to defray development costs ($10 suggested).

        For use by corporations and other institutions, contact me or
        AAI Systems for a licensing agreement.

                Vernon D. Buerg
                456 Lakeshire Drive
                Daly City, CA 94015

                BBS: (415) 994-2944
                CompuServe: 70007,1212


Version History:

        2.0, July 11, 1985.
           o  Corrects CR/LF problem. Remember, it is assumed that
              all "records" end in a carriage return (CR). Those
              that do not may appear as part of other records to
              a text editor.

        2.1, August 3, 1985
           o  Corrects a problem sorting files larger than 64K.

        2.15, December 27, 1985
           o  Corrects problems with first record of file.
           o  Adds /C option to treat keys as case insensitive data
           o  The key length may be specified on the command line

        2.17, February 25, 1987
|          o  Correct problem when maximum records exceeded
|          o  Convert to COM program


```
{% endraw %}

## BSAVE.DOC

{% raw %}
```


          BSAVE PC Magazine Vol 6 No 9, May 12, 87 - P366      July 8, 1988

                                     COMPLEMENTS
                                         of
                               ABACUS Computer Service
                                 Donald J. Jackowski
                                    16 Green Road
                            Mine Hill, New Jersey  07801


          INTRODUCTION
               This  document  covers  both  the  BSAVE and BLOAD programs.
          These two short programs, similar to their counterparts in BASIC,
          deal with screen image files.


          FORMAT
               BSAVE filespec
               BLOAD filespec

          REMARKS
               BSAVE saves  a byte  image of  the screen  buffer, and BLOAD
          writes the saves image back to the screen buffer.

               The original  PC Magazine  article also  describes two other
          very  short  programs  to  set  either LOWRES or HIGHRES graphics
          mode. These two additional programs will  permit BSAVE  and BLOAD
          to work with graphic screens.

               The BSAVE  and BLOAD  programs can be used, as is, with text
          screens.  If you have, for example, a BATCH file  that displays a
          menu with  the painfully slow ECHO command, you can add the BSAVE
          command at the end of the menu and then change the BATCH  file so
          BLOAD will  instantly load  your menu.  The two BATCH files might
          look something like this:

                    MENUSAVE.BAT
                         CLS
                         ECHO < use the current text
                         ECHO   from your menu here >
                         BSAVE menu

                    NEWMENU.BAT
                         BLOAD menu

















          Author: Michael J. Mefford                            Page 1 of 1
```
{% endraw %}

## CO.DOC

{% raw %}
```


          CO PC Magazine Vol 6 No 21, Dec 8, 87 - P397         July 8, 1988

                                     COMPLEMENTS
                                         of
                               ABACUS Computer Service
                                 Donald J. Jackowski
                                    16 Green Road
                            Mine Hill, New Jersey  07801


          INTRODUCTION
               The CO  utility provides facilities to copy, move, or delete
          files individually  or in  tagged groups  from directory listings
          sorted by name, extension, size or date.

          FORMAT
               CO [d:] [\directory] [/E] [/S] [/D] [/T] [/O]

          REMARKS
               Entered without any of its optional switches, CO presents an
          alphabetized listing of the  current  directory  with  a  menu of
          function  key  commands  on  the  right.    The  file  attributes
          (Archive,  Hidden,  Read-Only,  and  System)  are  shown  by  the
          appropriate letters  to the  right of  each listed  file.  The Up
          Down Arrow keys move the file-selection highlight bar one line at
          a time.  Ctrl-PgUp (PgUp) and ^PgDn move to the top and bottom of
          the current display page  (21 files),  while PgUp  and PgDn allow
          you to scroll through the entire directory listing.  The Home and
          End  keys  go  to   the  beginning   and  end   of  the  listing,
          respectively.   Pressing a  letter moves the highlight bar to the
          first (then subsequent) filename(s)  beginning with  that letter.
          Multiple files  are tagged for group copying, moving, or deleting
          by pressing the gray plus (+) key; the gray minus (-) key unmarks
          a mistagged file.

               The optional  /E, /S,  /D, /T,  and /O command-line switches
          sort the initial directory listing by  Extension, Size,  DaTe (/D
          and  /T  operate  identically),  or  Original DOS order.  Once on
          screen, function keys F7 (Name), F8  (Extension), F9  (Size), and
          F10 (Date)  can be used for subsequent sorts.  F1 initializes the
          Copy process for the highlighted (or marked) file(s).  F6 toggles
          the Copy  Verify option  (comparable to  COPY /V).  F2 and F3 are
          used for Move and Delete.  You are  prompted for  the appropriate
          destination  for  Copy  and  Move: different drives and paths are
          supported, as is the use of the DOS ? and * wildcards.   Renaming
          while copying is permitted.

               When  a  marked  (tagged)  file  is successfully copied, its
          marker arrow is replaced  by  an  asterisk.    If  a  floppy disk
          becomes filled,  CO automatically  attempts to  find other marked
          files that  will  fit,  but  will  then  halt  with  some file(s)
          remaining to  be copied.  Replace the full diskette with another,
          hit F1 again, reenter  the  correct  destination  drive,  and the
          remaining marked files will be copied.

               To divide  the contents  of a directory into two parts, mark
          and copy the first set of files, as above, so  that all  have the
          "copied" asterisk.  Then press F5 to mark the previously untagged
          files and repeat the copy process for the second group.


          Author: Michael J. Mefford                            Page 1 of 2

          CO PC Magazine Vol 6 No 21, Dec 8, 87 - P397         July 8, 1988


               NOTE: CO functions can  alternately  be  performed  by Ctrl-
          letter commands:  ^C (Copy), ^D (Delete), ^M (Move), ^V (Verify),
          ^N (Name), ^E (Extension), and ^T (Date).


          SEE ALSO
               RN a companion utility, PC Magazine Vol. 6  No. 16,  Sep 29,
          1987   Page 351.  Normally RN invokes DR with the F10 key, if you
          prefer using CO from the RN  menu all  you need  to do  is rename
          DR.COM to  DR1.COM and rename CO.COM to DR.COM.  The RN menu will
          still show DR but when CO is loaded it identifies its self.















































          Author: Michael J. Mefford                            Page 2 of 2
```
{% endraw %}

## DR.DOC

{% raw %}
```


          DR PC Magazine Vol 6 No 14, Aug 1987 - P437          July 8, 1988

                                     COMPLEMENTS
                                         of
                               ABACUS Computer Service
                                 Donald J. Jackowski
                                    16 Green Road
                            Mine Hill, New Jersey  07801


          INTRODUCTION
               DR.COM  provides   an  integrated  set  of  file  management
          facilities for sorting renaming,  deleting  and  moving  files to
          another directory.  The command is entered at the DOS prompt.

          FORMAT
               DR [d:] [\directory] [/E] [/S] [/D] [/T] [/O]

          REMARKS
               The default  filename display  (21 per page, to a maximum of
          721) is sorted alphabetically.   Various  switches, added  to the
          command, may be added to sort by other criteria:

                    /E (sort by Extension)
                    /S (sort by Size)
                    /D or /T (sort by DaTe)
                    /O (sort by DOS order)

               Thus for example,
                    DR \PROG /S
          sorts the  initial display  of the  PROG directory of the default
          drive by size.

               When a DR listing is on-screen, a menu  is displayed showing
          further options.   A highlight bar illuminates a single filename,
          and the Up and Down Arrow  keys move  the bar  a line  at a time.
          The PgUp  and PgDn  keys move  it a page at a time, and Ctrl-PgUp
          and Ctrl-PgDn move it to the top and bottom of  the current page.
          Home  and  End  move  to  the  beginning and end of the directory
          listing.  Pressing (and repeating) a letter moves the bar  to the
          first (and successive) filename(s) beginning with that letter.

               The highlighted file may be brought on-screen for viewing by
          pressing F1 (or Enter or Ctrl-V).  The  Up and  Down Arrows, PgUp
          and PgDn,  and Home  and End  work within the file as well.  Esc,
          Enter, or F1 returns you to the menu  and directory  listing.  At
          the menu level, Esc terminates the program.

               Within DR,  these function  keys or Ctrl-letter combinations
          are:
                    F1  Ctrl-V (or Enter)    View file.
                    F2  Ctrl-D               Delete file.
                    F3  Ctrl-R . . . . . .   Rename file.
                    F4  Ctrl-M               Move file.
                    F5  (none) . . . . . .   CONFIRM DELETE ON/OFF
                    F6  Ctrl-W               WordStar hi-bit ON/OFF
                    F7  Ctrl-N . . . . . .   Sort files by Name.
                    F8  Ctrl-E               Sort files by Extension.
                    F9  Ctrl-S . . . . . .   Sort files by Size.
                    F10 Ctrl-T               Sort files by Date

          Author: Michael J. Mefford                            Page 1 of 2

          DR PC Magazine Vol 6 No 14, Aug 1987 - P437          July 8, 1988

               Successive sorts can be  used  to  arrange  files,  e.g., in
          order of size and then, additionally, by extension.

               Files can  be renamed and may be moved from one directory to
          another within DR, but they cannot be copied from within  DR. See
          CO,  PC  Magazine  Vol.  6  No.  21,  Dec 8, 1987  Page 397 for a
          utility that will copy files.

          SEE ALSO
               RN a companion utility, PC Magazine Vol. 6  No. 16,  Sep 29,
          1987  Page 351.
















































          Author: Michael J. Mefford                            Page 2 of 2
```
{% endraw %}

## HARD.DOC

{% raw %}
```


          HARD Version 1.0                                     July 9, 1988

                                   COPYRIGHT 1988
                                         by
                               ABACUS Computer Service
                                 Donald J. Jackowski
                                    16 Green Road
                            Mine Hill, New Jersey  07801
                                   (201) 584-8201
                                 All Rights Reserved

          INTRODUCTION
               The purpose  of this document describe the files in the HARD
          archive and to present a couple ideas that are handy when using a
          hard disk.

               The main  program in this archive is MENU.  There are also a
          number of programs that were published in PC Magazine.   The .DOC
          files for  the PCM  programs is  text extracted from the original
          article, in most cases it is  a  verbatim  copy  of  the "manual"
          page.   The WHEREIS  program and  .DOC file  are from a different
          source.  The element that all the programs here have in common is
          their utility when using a HARD disk.

               The RN  program with  its directory "tree" structure is very
          handy simply for selecting  directories.   Because RN  blanks the
          screen when it runs, there is no visual reference remaining after
          you use RN to "Change Directory".

          JUMP.BAT
               When the visual reference is desireable  or when  you simply
          want something  different a  simple .BAT  file can be constructed
          that might contain:

                    echo off
                    rem JUMP.BAT
                    if %1! == ! goto edit
                    goto %1
               :1
                    cd \wrd\wp\doc
                    goto end
               :2
                    cd \wrd\wp\doc\pcm
                    goto end
               :x
                    cd \msc\pc-util\xxx
                    goto end
               :utl
                    cd \bin\utl
                    goto end
               :edit
                    edlin \bin\utl\jump.bat
               :end

               This file when executed with  no  argument  will  invoke the
          EDLIN  editor  on  its  self,  under the assumption that the user
          wants to  change something.   If  it is  invoked with  one of its
          labels as an argument i.e.

                    JUMP 2

          Copyright 1988 (C) by ABACUS Computer Service         Page 1 of 2

          HARD Version 1.0                                     July 9, 1988


          the "cd  \wrd\wp\doc\pcm" command  would be  executed making that
          directory the current directory.  If your PROMPT  string includes
          the $p option you will see the immediate result.

          PROMPT STRING
               The following PROMPT string:

                    prompt $e[s$e[1;50f $d    $t$h$h$h$e[u$e[D$p$g

          places the  current date and time in the top right of the screen,
          then displays the usual  prompt  characters  which  in  this case
          includes the "current directory" string.

               Since  the  prompt  is  displayed  at the completion of each
          command,  this  can  be  used  as  a  "timer"  that  records  the
          completion time  of the  last command when you are away from your
          machine.

          HERE and THERE
               Sometimes it is would be nice if you could save  a reference
          to the  current directory  so that you can return to it later.  A
          simple file HERE.BAT containing:

                    echo2 CD $p >\bin\utl\there.bat

          will create the THERE.BAT file.  Before leaving the directory you
          want to  return to,  run HERE  then CD  to anywhere and run THERE
          when you want to return.   The directory  you use  to place these
          files in should be in your PATH specification.  This is extremely
          simple but sometimes the simple things can be very handy.

          ECHO2
               This program and  its  documentation  can  be  found  on the
          ABACUS Computer Service, PC-UTIL disk in the BATCH archive file.
























          Copyright 1988 (C) by ABACUS Computer Service         Page 2 of 2
```
{% endraw %}

## KEYPRESS.DOC

{% raw %}
```


          KEYPRESS PC Magazine Vol 6 No 13, Jul 87 - P474      July 8, 1988

                                     COMPLEMENTS
                                         of
                               ABACUS Computer Service
                                 Donald J. Jackowski
                                    16 Green Road
                            Mine Hill, New Jersey  07801


          INTRODUCTION
               The KEYPRESS  program   provides the  ability to branch in a
          BATCH file.   This  program  was  published  in  the USER-TO-USER
          column of PC Magazine July 21, 1987  Page 474.

          FORMAT
               KEYPRESS list of valid characters

          REMARKS
               The argument  "list" is  a list  of one  or more displayable
          characters (optionally separated  by  one  or  more  spaces), for
          example,
                    KEYPRESS a b c d

          invokes KEYPRESS  which waits  for the  user to press a key, then
          compares that key with the "list" of valid  characters.   If it's
          in the  "list", KEYPRESS returns a DOS exit code set to the index
          of the character pressed in the "list" of valid characters; if it
          is not,  KEYPRESS returns  an exit  code of  0 (zero).  So if the
          batch file included the line in the example and the  user typed a
          C, KEYPRESS would report a 3, since "c" is the third character in
          the "list".   To  allow  greater  flexibility  KEYPRESS  does not
          distinguish between upper and lower case letters.

               A sample batch file might look like this:

                    echo off
                    :query
                         echo      Available Programs:
                         echo           a.   123
                         echo           b.   dBASE
                         echo Your choice (a/b) ?
                         KEYPRESS a b
                         if errorlevel 2 goto b
                         if errorlevel 1 goto a
                         echo Invalid reply, try again.
                         goto query
                    :a
                         123
                         goto exit
                    :b
                         dBASE
                    :exit

          NOTE: the  exit codes  returned by  KEYPRESS must be checked from
          highest  to  lowest  (right  to  left  in  the  "list"  of  valid
          characters) because  IF ERRORLEVEL  "n" succeeds if the exit code
          is greater than or equal to "n".



          Author: Louis J. Cutrona, Jr.                         Page 1 of 1
```
{% endraw %}

## MENU.DOC

{% raw %}
```


          MENU Version 2.1                                     July 9, 1988

                                   COPYRIGHT 1988
                                         by
                               ABACUS Computer Service
                                 Donald J. Jackowski
                                    16 Green Road
                            Mine Hill, New Jersey  07801
                                   (201) 584-8201
                                 All Rights Reserved

          INTRODUCTION
               The MENU program consists of a set of 3 files:
                    MENU.BAT
                    MEN-CASE.BAT
                    MX-SCR.DAT

               The operation  of MENU  involves the simple selection from a
          menu the application program  you wish  to run.   The  purpose of
          this  document  is  to  explain  how  to  modify  the BATCH files
          supplied, to fit your machine and your personal taste.   The MENU
          program will  have (after  the necessary  modifications are made)
          all that is required  to  successfully  execute  your application
          programs,  starting  with  the  directory  where  it resides, the
          directory containing the related data files,  and any preliminary
          steps  that  may  be  necessary before the application program is
          executed.  Thus once the necessary modifications are  made you no
          longer have to rely on your memory for where the program lives or
          what is necessary for it to run.

          USER LICENSE
               If you find this program useful you are requested to  send a
          $10  registration  and  license  fee  to ABACUS Computer Service.
          This fee will entitle you  to  continue  that  use  with  a clear
          conscience.  Please pass a copy to a friend!  It is NOT necessary
          to be a licensed user to distribute copies.  All registered users
          will receive  notice of the first update that is made after their
          registration. 

          DIRECTORY STRUCTURE
               It is a good idea to  organize your  hard disk  to contain a
          limited  number  of  subdirectories  in the "root" directory.  If
          this set of subdirectories is truly general purpose you will have
          a place  for everything  else you  want to  load.   The top level
          directories you might consider are:

                    \ASM - ASseMblers
                    \BAS - BASic Programs
                    \BIN - BINary Executables in PATH
                    \CMP - CoMPilers
                    \DBS - Data BaSe
                    \DSK - DeSK top
                    \GAM - GAMes
                    \GRF - GRaFics
                    \MSC - MiSCellaneous
                    \SST - Spread SheeTs
                    \WRD - WoRD Processing
                    \XXX - eXperimental stuff



          Copyright 1988 (C) by ABACUS Computer Service         Page 1 of 5

          MENU Version 2.1                                     July 9, 1988

          YOUR PATH
               The PATH definition (usually  specified in  the AUTOEXEC.BAT
          file)  can  be  a  strong  influence  on  how  you structure your
          directories, you should consider the following PATH:

                    PATH=.\BIN;..\BIN;C:\BIN\UTL;C:\BIN\SYS;C:\BIN\UNX

               The first two specifications are of interest here, the .\BIN
          says look in the current directory for a directory named BIN, and
          then  if  this  fails,  the  ..\BIN  says  look  in  the "parent"
          directory for  a directory  named BIN.   This  gives you a lot of
          flexibility in structuring the directories on your hard  disk and
          floppy disks.

          ANSI ESCAPE SEQUENCES
               The ANSI  escape sequences  that are  used to control screen
          attributes, require the ANSI driver to be installed.

          MODIFYING MENU.BAT
               This file contains 3 main sections:

                    1) Initializing the screen file.
                    2) Displaying the menu, & getting the users choice.
                    3) Executing the users selection.

               Before you modify any of the files try the command line:
                    BLOAD MX-SCR.DAT
          to see how fast the display  is  and  to  see  what  the original
          version looks like, on your machine.

          MENU.BAT - SECTION 1
               This section is not normally executed except to create a new
          version of the "screen" file, MX-SCR.DAT.   If  the -X  option is
          not  given  on  the  command  line, this section is skipped.  The
          following lines are representative  of  this  section.  NOTE: the
          line  numbers  are  for  reference  only  and are NOT part of the
          actual file, also some of the long lines are shown "folded" here:

                   1:  echo OFF
                   2:  rem MENU.BAT --- Jul 07, 1988
                   3:  rem COPYRIGHT 1988 by ABACUS Computer  Service, Mine
                              Hill, NJ 07801
                   4:  rem Author: Don Jackowski for ABACUS
                   5:  rem
                   6:  Rem make sure the current drive is C
                   7:  C:
                   8:  
                   9:  if NOT %1! == -X! goto disp
                  10:    rem  Generate  a  MENU screen to be displayed with
                              BLOAD
                  11:  cls
                  12:  echo2 $201$*75$205$187
                  13:   echo2  $186$9$9$9$e[1mABACUS  Menu$e[0m     Version
                              2.1$*27$9$186
                  14:    echo2  $186    COPYRIGHT  1988  by ABACUS Computer
                              Service, $
                  15:  echo2 Mine Hill, NJ  07801$*5$9$186
                  16:  echo2 $199$*75$196$182

          Copyright 1988 (C) by ABACUS Computer Service         Page 2 of 5

          MENU Version 2.1                                     July 9, 1988

                  17:  echo2 $186$9$e[1m 1 $e[0m= WINDOWS Desk Top$
                  18:  echo2                    $e[1m  I  $e[0m= Assembler,
                              A86$9$9$186

               Lines 17  and 18 are the first lines you may want to change.
          Line 17 is the first (top left) menu item:
                         1 = WINDOWS Desk Top
               The $186 character is the double vertical bar character, the
          $9  is  the  horizontal  TAB  character, the $e[1m characters set
          "bold" mode, the $e[0m characters restore "normal" mode,  and the
          $ at the end of the line tells ECHO2 to omit the CR LF at the end
          of its output.

               Line 18 is the top right menu item:
                    I = Assembler, A86
               The $e[1m characters set  "bold" mode  for the  I, the $e[0m
          characters  restore  "normal"  mode,  the  $9  characters are TAB
          characters to line up the right side of the border,  and the $186
          is the vertical double bar character for the right side.

               This line  pair pattern  that produces  a single line on the
          actual menu repeats to lines 51 and 52:

                  51:  echo2 $186$9$e[1m H $e[0m= xxx$
                  52:  echo2                                $e[1m  Z $e[0m=
                         xxx$*25$9$186
                  53:  echo2 $200$*75$205$188
                  54:  bsave \bin\utl\mx-scr.dat

               Line 51 is the last(bottom)  menu item in the left column:
                    H = xxx

               Line 52 is the last (bottom) menu item in the right column:
                    Z = xxx

               Both of these menu items are NULL items, place holders, they
          are positions where new applications can be inserted.

               Line 53 is the bottom of the double line border.

               Finally, line 54 actually  saves the  resulting screen image
          on the MX-SCR.DAT file.  This path name may need to be changed to
          reflect your directory structure.  The  same path  name used here
          should also be used on line 57.

          MENU.BAT - SECTION 2
               This  section   uses  the  MX-SCR.DAT  file  and  is  always
          executed:

                  56:  :disp
                  57:  bload \bin\utl\mx-scr.dat
                  58:  echo2 $e[24;1f$e[1m Which  MENU  Item  do  you want?
                         $e[0m$
                  59:  keypress 1 2 3 4 5 6 7 8 9 0 a b c d e f g h i j k l
                         m n o p q r s t u v
                  60:          if errorlevel 36 goto M36
                  61:          if errorlevel 35 goto M35
                  ........................................

          Copyright 1988 (C) by ABACUS Computer Service         Page 3 of 5

          MENU Version 2.1                                     July 9, 1988

                  94:          if errorlevel 2 goto M2
                  95:          if errorlevel 1 goto M1
                  96:          echo2 $7$e[5m$e[1mERROR$e[0m  - Not  a valid
                                   choice, try again!!!!
                  97:          goto end

               Line 57 should be changed to agree with any changes you made
          to line 54.

               Line 58 simply positions the cursor and displays  the prompt
          message.   Line 59  waits for  the user to type a singe character
          response to the menu  and prompt  display.   Lines 60  through 97
          simply branch to the appropriate program label.

          MENU.BAT - SECTION 3
               This  section   finally  calls   the  specific  application,
          although indirectly.  The  actual  code  to  actually  invoke the
          application could  be placed  here but  if you  have a mouse that
          permits you to design your  own  POP-UP  menus  you  may  find it
          advantageous to  use the  same driver  program for  both the MENU
          program and  your POP-UP  mouse menus.   See:  MOUSE MENUS below.
          Some representative lines from this section are:

                  98:  :M1
                  99:          echo 1 - WINDOWS Desk Top
                 100:          men-case m1
                 101:          goto end
                 102:  :M2
                 103:          echo 2 -
                 104:          men-case m2
                 105:          goto end
                 106:  :M3
                 ..........................
                 234:  :M35
                 235:          echo Y -
                 236:          men-case mY
                 237:          goto end
                 238:  :M36
                 239:          echo Z -
                 240:          men-case mZ
                 241:          goto end
                 242:  :end

               If you  decide to  maintain the two level structure, all you
          need to change in  this section  is the  "echo" lines  which only
          serve to confirm to the user what key was pressed.













          Copyright 1988 (C) by ABACUS Computer Service         Page 4 of 5

          MENU Version 2.1                                     July 9, 1988

          MODIFYING MEN-CASE.BAT
               This  file  is  really  a  large  branch table.  If you have
          organized your hard disk directory  structure  to  contain  a BIN
          directory  for  each  application  (something that works out very
          well!), and if each application BIN  directory contains  a GO.BAT
          file  that  contains  all  the  commands  necessary to start that
          application, then the task of modifying this file  is trivial, as
          you can  see from  the MEN-CASE.BAT  file as supplied.  The major
          task is keeping this file synchronized with the  changes you made
          to the  MENU.BAT file.   Some representative lines from this file
          are:

             15:  :m1
             16:          cd \DSK\WIN
             17:          go
             18:          goto end
             19:  :m2
             20:          echo 2 is NULL
             21:          goto end
            ............................
            163:  :mY
            164:          echo Y is NULL
            165:          goto end
            166:  :mZ
            167:          echo Z is NULL
            168:          goto end
            169:  :end
            170:  

               Line 15 is the label that  we  arrive  at  when  the command
          line:
                    MEN-CASE M1

          is executed.   This  is the  action called for in line 100 of the
          MENU.BAT  file.    Line  16  simply  "Changes  Directory"  to the
          appropriate directory  for this application; and line 17 executes
          the GO.BAT file found there.

          MOUSE MENUS
               The files M_MS-DOS.* are  files that  define a  mouse POP-UP
          menu   for   the   IMSI  OPTIMOUSE  (International  Microcomputer
          Software, Inc.  / Mouse  Systems Corporation).   The M_MS-DOS.MSC
          file contains  the source  code used to generate the M_MS-DOS.COM
          file.  This menu requires the MOUSESYS.COM, copyrighted driver to
          operate properly.   If  you have the IMSI OPTIMOUSE you should be
          able to use these files directly.

          ECHO2
               This program and  its  documentation  can  be  found  on the
          ABACUS Computer Service, PC-UTIL disk in the BATCH archive file.









          Copyright 1988 (C) by ABACUS Computer Service         Page 5 of 5
```
{% endraw %}

## REPEATS.DOC

{% raw %}
```


          REPEATS PC Magazine Vol 6 No 11, Jun 9, 87 - P377    July 9, 1988

                                     COMPLEMENTS
                                         of
                               ABACUS Computer Service
                                 Donald J. Jackowski
                                    16 Green Road
                            Mine Hill, New Jersey  07801


          INTRODUCTION
               REPEATS searches  through all  the subdirectories on a drive
          and produces a listing of all files (and  the directory  in which
          they are located) that have the same filenames.

          FORMAT
               REPEATS [d:] [/P]

          REMARKS
               The  drive  specifier  (d:)  is  not required if the current
          drive is to be searched.  If used  (as, for  example, to  check a
          directory-structured floppy  disk), the colon must be included in
          the drive specification.  The  optional  /P  printer  switch will
          echo  the  output  both  to  a  printer  and  to  the screen.  In
          addition, standard DOS redirection (>) may  be used  to store the
          output to a filename.

               If insufficient  memory is  available the program terminates
          with an error message to that effect.   Ctrl-Break will terminate
          the program manually.































          Author: Michael J. Mefford                            Page 1 of 1
```
{% endraw %}

## RN.DOC

{% raw %}
```


          RN PC Magazine Vol 6 No 16, Sep 29, 87 - P351        July 8, 1988

                                     COMPLEMENTS
                                         of
                               ABACUS Computer Service
                                 Donald J. Jackowski
                                    16 Green Road
                            Mine Hill, New Jersey  07801


          INTRODUCTION
               Simplifies  creating,  removing, renaming, hiding, unhihing,
          and changing to directories.  Also sets/resets the  read-only and
          archive  bits  of  all  files  within  a  directory,  and reports
          filecount and space allocated.  Allows  for immediate  call-up of
          DR.COM (Vol. 6 No. 14) for handling individual files.

          FORMAT
               RN [d:] [/I]

          REMARKS
               RN can  be entered either as an immediate command at the DOS
          prompt, or it can be installed  on  a  hard  disk  (using  the /I
          option) with a memory-resident data base of directory information
          that speeds up its subsequent operations.   If  no drive  (d:) is
          specified, the current drive is assumed.

               If installed,  RN should be loaded before "sidekick" and any
          other uninstallable  memory-resident  programs.    (RN  cannot be
          deinstalled without  rebooting.)   The program  requires 128K RAM
          operating room; the database, if used,  occupies 14K.   RN cannot
          be installed  from within an application with a "hot key"; it can
          be accessed only from  the DOS  prompt.   Pressing Esc terminates
          RN's operations.

               When issued, RN.COM brings up an alphabetized directory tree
          with the current  listing  highlighted  and  a  menu  listing the
          function  keys  used  for  its  various  directory services.  The
          directory highlight bar is moved one  entry at  a time  by the Up
          Arrow and  Down Arrow keys, and in larger increments by the Ctrl-
          PgUp and Ctrl-PgDn, PgUp, PgDn,  and  Home  and  End  keys.   The
          highlight bar should be placed on the directory to be affected by
          the subsequent function key.

               When renaming (F2) and  creating  (F3)  directories,  do not
          enter the  backslash (\) character but include it in figuring the
          maximum path length (63 characters).  RmDir (F4).  if you confirm
          at  its  warning  prompt,  deletes all files within the directory
          (unless  they  are   marked   read-only)   before   removing  it.
          Hide/Unhide  (F5)  affects  the  directory  name  only,  not  the
          individual files.    F6  and  F7  (mark/unmark  as  read-only and
          set/reset the  archive bit) toggle these bits on all files within
          the directory.  F8 updates the directory database  if changes are
          made  outside  RN,  and  F9  gives a file count together with the
          space allocated to a directory's files.  F10 calls DR.COM.

          NOTE
               F2 (Rename Directory) require DOS 3.x.



          Author: Michael J. Mefford                            Page 1 of 1
```
{% endraw %}

## SWEEP.DOC

{% raw %}
```


          SWEEP PC Magazine Vol 5 No ??                        July 9, 1988

                                     COMPLEMENTS
                                         of
                               ABACUS Computer Service
                                 Donald J. Jackowski
                                    16 Green Road
                            Mine Hill, New Jersey  07801


          INTRODUCTION
               The  SWEEP  program  causes  a  command  to  be successively
          executed in every subdirectory on a hard disk.

          FORMAT
               SWEEP Command [parameter(s)]

          REMARKS
               SWEEP starts from the  current directory.   In  order to use
          SWEEP to  extend the range of a command to all the subdirectories
          on a disk, use CD (if necessary) to make the  root directory your
          current directory.  From the root directory, the command

                    SWEEP DIR

          will display  the listings,  by subdirectory, of every non-hidden
          file on the disk.  To erase all the .BAK files on a disk you need
          only get into the root directory and issue the command

                    SWEEP DEL *.BAK

               SWEEP  itself  will  not  accept  parameters  other than its
          command.  Thus, if you are on drive  C: and  wish a  directory of
          all files  on drive D: to be sent to your printer, you must first
          make drive D: the current drive before you issue the command

                    SWEEP DIR > LPT1

          (In this case you would either need a copy of  SWEEP.COM on drive
          D: or else drive D: would have to be listed on your PATH.)

               SWEEP  can  execute  .BAT  file  commands  (and even non-DOS
          commands, such as LOCATE.COM).   A  useful file  called CLEAN.BAT
          might consist of the three lines

                    DEL *.BAK
                    DEL *.TMP
                    DEL *.OBJ

               From the root directory, if you then enter

                    SWEEP CLEAN

          all .BAK, .TMP, and .OBJ files will be erased from the disk.

          NOTE
               Requires DOS 2.0 or later.




          Author: Charles Petzold                               Page 1 of 1
```
{% endraw %}

## WHEREIS.DOC

{% raw %}
```


          WHEREIS SOFTALK, January 1984                       July 11, 1988

                                     COMPLEMENTS
                                         of
                               ABACUS Computer Service
                                 Donald J. Jackowski
                                    16 Green Road
                            Mine Hill, New Jersey  07801


          INTRODUCTION
               Searches   for   specified   file(s)  through  all  DOS  2.0
          directories  listing  matching   files   with   their  apropriate
          directories and sub-directories.

          FORMAT
               WHEREIS filespec

          REMARKS
               This command  is from the January 1984 issue of "Softalk for
          the IBM Personal Computer" by John Socha.  It will work correctly
          on the volume on which it is resident.  It does not automatically
          cross over onto other volumes.  Note the  absence of  an optional
          volume label  in the  format description.  The following examples
          demonstrate  proper  usage  -  where  {CR}  indicates  a carriage
          return:

                              WHEREIS myfile.txt {CR}

                              WHEREIS myfile.* {CR}

                              WHEREIS *.bas {CR}

                              WHEREIS *.* {CR}



























          Author: John Socha                                    Page 1 of 1
```
{% endraw %}

## HISTORY.TXT

{% raw %}
```
HISTORY.TXT							July 11, 1988

PC-UTIL 2.1 Mon Jul 11  9:51 1988
		Repackaged the software and modified the registration/license
		options to include a 20 percent "registration bonus".
		Eliminated the HANDY11.ARC file.
		Added the BATCH11.ARC file.
	BATCH11.ARC  :    11728  7-09-88  17:42  crc = 814C
		New set of utilities for BAT file programmers.
		Added the HARD10.ARC file.
	HARD10.ARC   :    44441  7-11-88   9:50  crc = 8795
		New set of utilities related to Hard disk operations.
	MLABEL16.ARC
		Fixed bug related to SERIAL numbers in keyboard entry mode.
		Added the -? and -?? options, to display print control menu.

PC-UTIL 1.3 Sun Oct 18, 1987
	HANDY11.ARC  :   100691 10-18-87   8:45  crc = B3FD
		Fixed bug in SCREEN.BAT to color whole screen

PC-UTIL 1.2	Fri Oct  9, 1987
	EDMAC12.ARC  :    20661 10-09-87  10:07  crc = A41B
		Fixed table to accept C-left & C-right key strokes.
	MLABEL15.ARC :    19451  9-18-87  11:43  crc = A08E
		Added SERIAL number options.
	SEE17.ARC    :    14781 10-09-87  10:11  crc = 929D
		Fixed bug in -t option.

PC-UTIL 1.1	Thu Jul 23, 1987
	BRACE11.ARC  :    19412  7-08-87  12:15  crc = 3442
	EDMAC11.ARC  :    20671  7-06-87  13:38  crc = F6C8
	FINDEX26.ARC :    52178  7-23-87  13:47  crc = 6DE4
	HANDY10.ARC  :   100679  7-08-87  12:41  crc = CEBA
	LPR45.ARC    :    15072  7-12-87  12:31  crc = 060E
	MLABEL14.ARC :    17821  7-05-87  21:50  crc = 5760
	SEE16.ARC    :    14772  7-22-87  19:03  crc = 62F4
```
{% endraw %}

## LPR.DOC

{% raw %}
```


        LPR Version 4.5                                       July 12, 1987


                                 COPYRIGHT 1987
                                       by
                             ABACUS Computer Service
                               Donald J. Jackowski
                                  16 Green Road
                              Mine Hill, NJ  07801
                                 (201) 584-8201
                               All Rights Reserved

        INTRODUCTION
             LPR is a utility program that prints ASCII files on the line 
        printer  with  page  headings  and  page  numbers.   Options  are 
        provided to alter the page heading, control page eject, fold long 
        lines,  add a left margin to the output, print line numbers, pass 
        graphics characters, expand C style comments, make otherwise non-
        printing  characters  visible,  and place the output on  a  file, 
        rather than the line printer.

        USAGE
             Command line syntax is:

                  LPR  [-h Heading]  [-elmnpcsvf]  file ...

        The  file  name  is the INPUT file and may  contain  "wild  card" 
        characters.  Output is to the line printer (LST: device).  

        MENU
        When LPR is invoked with no file name,  or with an illegal option 
        a short menu will be displayed on the screen.

        OPTIONS
             Command line options are
             -h   Page Heading (50 characters max) normally the file name 
                  and  date  is  used as the  heading.   If  the  heading 
                  contains embedded spaces (32,  20H) it must be enclosed 
                  in double quotes (34, 22H). 
         
             -e   Eject page when a FF (Form Feed,  12,  0CH) is found in 
                  input,  normally  the  FF is ignored unless  there  are 
                  fewer than 15 lines remaining on the current page.
                                                          
             -l   Fold   Long  Lines,   normally  long  lines  (over   80 
                  characters) are truncated.

             -m   Margin,  increment left Margin.   Each 'm' given in the 
                  option  list is counted.   The resulting number is  the 
                  number  of spaces to be output before each line.   Thus 
                  the  option  -mmm will produce a left margin  of  three 
                  spaces. 

             -n   Print line Numbers.

             -p   Pass  parity bit to the printer,  normally this bit  is 
                  masked out so WORDSTAR files will print correctly.

             -c   Expand  C style comments.   Lines that begin  with  the 
                  3characters  /*-  (slash,  star, minus) are expanded to 

        Copyright 1987 (C) by ABACUS Computer Service           Page 1 of 2




        LPR Version 4.5                                       July 12, 1987

                  fill the width of the page (80 char).   For example the 
                  line:
                  /*- name() -*/
                  would be expanded into:
                  /*---------------------- name() ---------------------*/
                  Such  a comment line will also cause a page eject  when 
                  fewer than 15 lines remain on the current page,  unless 
                  the first character of the name is the underline (5FH).  
                  This  feature  provides a functional separation on  the 
                  printed listing and saves disk space.   This option  is 
                  automatically  invoked  for  files with .C or  .H  file 
                  type/extension.

             -s   Silent  mode.   Normally a * character is displayed  to 
                  indicate the printing on a new page,  and LPR waits for 
                  input from the console after the last file.

             -v   Make   normally  non-printing  characters  Visible   by 
                  printing the hex and octal representation (HEX/OCT).

             -f   Put  output  on a File rather than  the  line  printer.  
                  This  option  is handy for the obvious case  where  you 
                  simply want the formatted output on a file.  It is also 
                  useful  when you want to feed the MS-DOS PRINT  command 
                  with  output as you use the machine for something  else 
                  while the files are actually printing.  The output file 
                  is  given the same basic name as the input file and the 
                  file type/extension .LPR.  It is considered an error to 
                  use  a  file name with a .LPR extension,  as  an  INPUT 
                  file.   This  option  will  automatically  set  the  -s 
                  option.

        EXAMPLES
             The command line:
                  LPR  -H "This is a HEADING"  DOSFILE
        will print the file "DOSFILE" with the heading:
                          This is a HEADING
        on each output page.
        The command line:
               LPR -mmmmnvf  ANYTHING.TXT
        will  format the file ANYTHING.TXT,  with a left margin  of  four 
        spaces,  line numbers,  make non-printing characters visible, and 
        put the output on the file ANYTHING.LPR. 

        NOTES
             TAB  characters  (9,  09H) are expanded into an  appropriate 
        number of spaces (32, 20H).  Tab stops are set every 8 columns.
             Paper  in  the line printer should be  positioned  ready  to 
        print the first page when LPR is invoked.
             Control-Q will abort the printing of the current file.

        USER LICENSE
             If  you find this program useful you are requested to send a 
        $10  registration  and license fee to  ABACUS  Computer  Service.  
        This  fee  will  entitle you to continue that use  with  a  clear 
        conscience.   If you don't use it, please pass a copy to a friend 
        who might!  All registered users will receive notice of the first 
        update that is made after their registration. 

        Copyright 1987 (C) by ABACUS Computer Service           Page 2 of 2


```
{% endraw %}

## MKLAB.TXT

{% raw %}
```
7
]^*PC-UTIL 2.1
>[&*COPYRIGHT (C) 1988 by
*ABACUS Computer Service
*ALL RIGHTS RESERVED
*SERIAL No. G0111
*REGISTERED COPY - run SERIAL
*SHAREWARE -- COPY and DISTRIBUTE
4

  PC-SIG
  1030D East Duane Avenue
  Sunnyvale, California  94086
```
{% endraw %}

## MLABEL.DOC

{% raw %}
```


          MLABEL Version 1.6                              December 12, 1987

                                   COPYRIGHT 1987
                                         by
                               ABACUS Computer Service
                                 Donald J. Jackowski
                                    16 Green Road
                                Mine Hill, NJ  07801
                                   (201) 584-8201
                                 All Rights Reserved

          INTRODUCTION
               MLABEL (Mail  LABEL) is  an MS-DOS utility program that will
          allow a user to print labels in 5 different character sizes and 5
          different  character  pitches  either  one or two across.  Serial
          numbers of one to nine digits can be included on  each label. The
          different characters  are generated  by the  line printer, MLABEL
          simply sends  the appropriate  printer control  characters to the
          printer.   The default  printer control  characters are those for
          the EPSON FX-85, in EPSON mode,  but  can  easily  be  changed to
          accommodate  other  printers  as  outlined  under  OTHER PRINTERS
          below.

               The printed output is  restricted to  fit on  the "standard"
          15/16 by  3 1/2  inch label.   This  label can normally contain a
          maximum of 5 printed lines, but by using a combination of smaller
          line spacing  and subscript  characters you can comfortably print
          as many as  9  lines  in  this  space.    A  prompt  is displayed
          requesting  user  selection  of  "paper  CUT lines" for output to
          regular paper  rather than  actual labels.   And  a second prompt
          allows the user to select either 1 or 2 labels across.

               When no  file name  is given on the command line the user is
          prompted for the label text which is entered from the keyboard.

               When a file name is given  that file  is used  to obtain the
          label text.   Since  the label  text for each label is displayed,
          before the prompt requesting the  number  of  labels,  MLABEL can
          also be used to simply scan the contents of the file.

          USAGE
               Command line syntax is:
                    MLABEL [-asNmN?] [file ...]

          The optional  file name  is the input file(s) containing the text
          for the labels.   The files  contain pure  ASCII text  and can be
          created  and  edited  with  any  ASCII  text  editor, i.e. EDLIN.
          Multiple filenames and wild card characters are permitted.

          MENU
               When MLABEL is invoked with an  invalid option  a short menu
          will be  displayed on  the screen.  Thus option -- can be thought
          of as the option that produces the menu.

          OPTIONS
               The command line options are:

               -a   Automatically print  one row  of labels  for each Label
                    Control Record (LCR) found in the input file(s).


          Copyright 1987 (C) by ABACUS Computer Service         Page 1 of 7

          MLABEL Version 1.6                              December 12, 1987

               -sN  Set the  initial SERIAL number value.  If the -s option
                    is  not  given  the  special  character  "#"  is simply
                    output, as is.

               -mN  Set   the   Maximum   SERIAL  number  value,  (default:
                    999,999,999).  When the SERIAL number value exceeds the
                    Maximum, the SERIAL number is reset to ONE.

               -?   Display Print Control Menu ONLY.

               -??  Display Print  Control Menu  for each LCR.  This option
                    is automatically turned on when no  file name  is given
                    on  the  command  line,  and  can  be toggled off/on by
                    giving "?" in response to the  "How many  LABEL ROWS to
                    print:" prompt.

          EXAMPLE
               The following command line:
                    MLABEL -s123 -m999 xyz.txt
               Will produce  labels with  serial numbers  starting with the
          value 123, setting the maximum value to 999, using the  text from
          the XYZ.TXT file.

          DISTRIBUTION
               MLABEL is  a proprietary product of ABACUS Computer Service.
          It  is  distributed  on  a  user-supported,   "shareware"  basis.
          Copying,  redistribution   and  installation  on  Bulletin  Board
          Systems  is  permitted  and  encouraged,  provided  the following
          conditions are met:

               1.   The distributed  floppy disk  copy must include all the
                    related executable files  and  documentation, unaltered
                    in  any  way.    If individual (not ARChived) files are
                    provided the entire disk must be devoted to  the MLABEL
                    files and  the floppy disk shall be labeled to show the
                    MLABEL  name,  version  number,  and  ABACUS  copyright
                    notice.

               2.   If an  ARChive file is provided it must contain all the
                    unmodified executable and  documentation  files  and be
                    named MLABEL16.ARC.

               3.   Commercial sale of MLABEL in any manner is specifically
                    prohibited without  the  written  permission  of ABACUS
                    Computer Service.

          USER LICENSE
               If you  find this program useful you are requested to send a
          $10 registration and  license  fee  to  ABACUS  Computer Service.
          This  fee  will  entitle  you  to  continue that use with a clear
          conscience.  Please pass a copy to a friend!  It is NOT necessary
          to be a licensed user to distribute copies.  All registered users
          will receive notice of the first update that is made  after their
          registration. 





          Copyright 1987 (C) by ABACUS Computer Service         Page 2 of 7

          MLABEL Version 1.6                              December 12, 1987

          LABEL CONTROL RECORD
               The Label Control Record (LCR) is that unit of data required
          to print a label.    It  consists  of  the  "Label  Style" number
          followed by  the "text  lines" for each line of the label.  Input
          files may contain any number  of  LCRs,  each  of  which  will be
          displayed, and  the user  can then select the number of labels to
          be printed for each LCR.  A response of "1" can be  used to align
          the labels  in the  printer and  a larger  number can  be used to
          actually print labels, since  MLABEL repeats  the prompt  for the
          number of  labels until it receives a response that is simply the
          RETURN/ENTER key which is taken to  mean, go  to the  next LCR in
          the current file.  If multiple files were given, the next file in
          the list  is processed  when the  End Of  File is  reached in the
          current file.

               The "Label  Style" number determines the number of lines and
          the print style used to output the "text lines".  For values of 1
          through 5  the "Label  Style" is simply the count of "text lines"
          in the  LCR.   If no  printer control  codes are  included in the
          "text line"  the given text is simply sent to the printer.  Where
          the given "Label Style" value is  less than  5, the  "text lines"
          from the LCR are followed by a number of "new line" characters to
          bring the total line count to 5 lines.

               When the "Label Style" value is 6 the first two "text lines"
          are printed  as normal  standard 10 pitch, pica characters at the
          normal 1/8  line spacing.   The  remaining four  "text lines" are
          printed in subscript mode at 1/8 line spacing.

               When the "Label Style" value is 7 all seven "text lines" are
          printed in subscript mode at 1/8 line spacing.

               When the "Label Style" value  is  8  the  first  three "text
          lines" are at 1/8 line spacing and the last five are at 7/72 line
          spacing.  All lines are in  subscript mode.   This  "Label Style"
          differs from  all the  others in  that it requires a special line
          printer control, to keep the output  lines synchronized  with the
          physical label size.

               When the  "Label Style" value is 9 all nine "text lines" are
          printed in subscript mode at 7/72 line spacing.

               In all cases, where  there  is  a  difference,    the larger
          character sizes  and larger  line spacings  are at the top of the
          label.

               If an illegal "Label Style" value is found in an  input file
          it is  arbitrarily set  to 5.   If an illegal value is given from
          the keyboard a message is displayed.










          Copyright 1987 (C) by ABACUS Computer Service         Page 3 of 7

          MLABEL Version 1.6                              December 12, 1987

          SERIAL NUMBERS
               Serial numbers will be  generated  in  the  output  when two
          conditions are met:

               1.   The -s option is given on the command line.

               2.   The current LCR contains some "#" characters.

               The actual  serial number output may contain as many as nine
          digits,  that  is  the  serial  number   can  range   from  0  to
          999,999,999.     The  position   and  number  of  contiguous  "#"
          characters in the  LCR  determines  the  position  and  number of
          serial number  digits to appear in the output.  Leading digits of
          small serial number  values  are  always  zero.    Where  the "#"
          character  is  the  character  wanted  in the output, the special
          meaning of the "#" character can be negated by preceeding it with
          a "\"  character.   The following  LCR lines  illustrate some "#"
          combinations and  the resulting  output that  should be expected,
          when the -s123 option is given on the command line:

          <-------- INPUT (LCR) -------->   <---------- OUTPUT ----------->

              One=#     Two=##  Three=###       One=3     Two=23  Three=123
          Four=#### Five=##### Six=######   Four=0123 Five=00123 Six=000123
          Too many digits --> ###########   Too many digits --> ##000000123
          R.D. \#5 Box 788   Serial: ####   R.D. #5 Box 788   Serial: 0123
          RD \#### One \# then the serial   RD #123 One # then the serial

          TEXT LINES
               Before  the  first  "text  line"  is printed, the printer is
          initialized to print in EMPHASIZED,  DOUBLE  STRIKE  mode.   Each
          "text line"  may contain  one or  more control codes that control
          the output style  of  that  line.    Multiple  control  codes are
          permitted, but  ALL control codes MUST be at the beginning of the
          "text line".  The recognized control  codes and  their meaning is
          as follows:

                    ^ - EXPAND, one line ONLY (5 CPI)

                    < - COMPRESS, DOUBLE STRIKE (17 CPI)
                    > - Compress, Double Strike OFF

                    ( - ELITE (12 CPI)
                    ) - Elite OFF

                    { - ITALIC on
                    } - Italic OFF

                    [ - SUBSCRIPT on
                    ] - Subscript OFF

                    & - Bold (EMPHASIZED, DOUBLE STRIKE)
                    $ - Lite, bold OFF

                    * - Center text in the 35 char label space.

               The control  codes can  be given in any sequence except that
          the "*" control code, when used, MUST be given last.  The control

          Copyright 1987 (C) by ABACUS Computer Service         Page 4 of 7

          MLABEL Version 1.6                              December 12, 1987

          codes  are   sent  to  the  printer  in  the  sequence  they  are
          encountered reading from left to right.

               In cases  where  the  first  character  of  the  "text line"
          happens  to  be  a  control  character the special meaning of the
          control character can be  negated  by  preceding  it  with  a "\"
          character.  Thus the "text line":
                    \(201) 123-4567
          would input  the telephone number and void the special meaning of
          the "(" character.

               MLABEL uses  the  control  codes  to  determine  the current
          Characters Per  Inch (CPI), but does not check the logical use of
          printer control  codes.   For EXAMPLE  the "<"   COMPRESS control
          code will  not put  the FX-85  into compressed mode when it is in
          EMPHASIZED mode.  The two character sequence: "$<" is required to
          override the MLABEL default to EMPHASIZED, DOUBLE STRIKE mode.

               Except for  the special case "$<(" which selects 20 CPI, the
          pitch should  be returned  to "standard"  with ">"  or ")" before
          selecting a different pitch.

               The ASCII  tab character (value 9) is not treated special by
          MLABEL, this means that  it will  probably not  work as expected.
          It's best  to use the ASCII space character (value 32) to do what
          ever line formatting that is required.

          MAXIMUM LINE LENGTHS
               The maximum number of characters that will fit on a standard
          label is a function of the character pitch selected:

                    PITCH (CPI)         MAX CHARACTERS
                          5                  17
                         10                  35
                         12                  42
                         17                  59
                         20                  70

               Lines  that  exceed  the  maximum  values above are silently
          truncated.

          SAMPLE LCR
               The following LCR is an example that can be entered from the
          keyboard or read from an input file:

                    6
                    ^*MLABEL 1.6
                    ( Copyright 1987 by ABACUS Computer Service
                    )*16 GREEN ROAD
                    *MINE HILL, NJ  07801
                    *(201) 584-8201
                    *SHAREWARE -- COPY and DISTRIBUTE

               This LCR  will print  a label,  suitable for  a floppy disk,
          with 6 lines, each of which will appear centered.  The first line
          will be  in EXPANDED  (5 CPI) characters, the second line will be
          in ELITE (12 CPI) and the last four lines will  be printed  as 10
          CPI, Subscript characters, at 1/8 line spacing.

          Copyright 1987 (C) by ABACUS Computer Service         Page 5 of 7

          MLABEL Version 1.6                              December 12, 1987


               The file TEST.TXT, which is distributed with MLABEL contains
          the above EXAMPLE and several others.  The  LCR that  begins with
          the  "text  line":  ^MAX  CHAR  TEST 56789 will demonstrate all 5
          different character pitches and since  all  the  "text  lines" in
          this LCR  exceed the  maximum number  of characters  per line, it
          also serves to illustrate how long lines are silently truncated.

               When you want to align the left margin of "text  lines" that
          contain a mixture of 5 CPI lines and 10 CPI lines it is necessary
          for the 10 CPI lines to begin with  one "space"  character.  It's
          impossible to  get "perfect"  left margin alignment between other
          pitches. 

               At the larger character  pitches (smaller  characters) it is
          sometimes desirable  to place the text for TWO labels on a single
          label.  The TEST.TXT file also  contains examples  of this usage.
          When "text lines" containing TWO labels are to be centered, it is
          sometimes  necessary  to  end  the  line   with  several  "space"
          characters.   The three  dots at  the end  of the "16 GREEN ROAD"
          line is an example of  this  condition,  only  the  "spaces" were
          changed to dots here to make them visible.

          OTHER PRINTERS
               The following information is intended as an aid to those who
          use a printer  requiring  different  control  sequences  than the
          EPSON FX-85.   All  the printer control codes are maintained in a
          single table to make  modification  easier,  each  control string
          must end  with at least one NULL byte.  The usage, the address in
          the .EXE file and the existing strings in HEX are:

                    USAGE       ADRS  STRING, NULL terminated
                    -----       ----  -----------------------
                    EXPAND ^  - 2EA9  0E 00 00 00 00
                  COMPRESS <  - 2EAE  0F 1B 47 00 00
              Compress OFF >  - 2EB3  12 1B 48 00 00
                     ELITE (  - 2EB8  1B 4D 00 00 00
                 Elite OFF )  - 2EBD  1B 50 00 00 00
                    ITALIC {  - 2EC2  1B 34 00 00 00
                Italic OFF }  - 2EC7  1B 35 00 00 00
                 SUBSCRIPT [  - 2ECC  1B 53 31 00 00
             Subscript OFF ]  - 2ED1  1B 54 00 00 00
                      Bold &  - 2ED6  1B 45 1B 47 00
                      Lite $  - 2EDB  1B 46 1B 48 00


                      NOTE 1. - 2EE0  1B 31 1B 53 31 00 00 00 00
                      NOTE 2. - 2EE9  1B 30 1B 53 31 00 00 00 00
                      NOTE 3. - 2EF2  1B 41 0A 00 00 00 00 00 00
                      NOTE 4. - 2EFB  1B 54 1B 46 1B 48 1B 32 12
                                      1B 50 1B 35 00 00 00 00 
               NOTES:

               1.   None of the NOTE strings are directly user  callable in
                    that there  is no control code that invokes them.  This
                    string is used for  "Label Style"  8 and  9 to  turn on
                    subscript mode and 7/72 line spacing.


          Copyright 1987 (C) by ABACUS Computer Service         Page 6 of 7

          MLABEL Version 1.6                              December 12, 1987

               2.   This string  it is  used for  "Label Style"  6 and 7 to
                    turn on subscript mode and 1/8 line spacing.

               3.   This string is used for "Label Style" 8 ONLY.  It is to
                    temporarily  select  10/72  line  spacing  for a single
                    line.  Otherwise the printed output  registration would
                    be short by 0.0138 (1/72) inches on each label.

               4.   This string  is used internally to reset the printer to
                    "normal".  It turns OFF, Subscripts, Emphasized, Double
                    strike, selects 1/6 line spacing, turns OFF Compressed,
                    Elite, and Italics.

               If you alter this table to accommodate a different printer I
          would appreciate  if you  would send  a copy  of your table along
          with the  printer make  and model  to: ABACUS  Computer Service. 
          Future versions  of MLABEL  will include  the data  we receive on
          other printers, and/or an "install" program.









































          Copyright 1987 (C) by ABACUS Computer Service         Page 7 of 7
```
{% endraw %}

## TEST.TXT

{% raw %}
```
6
^*MLABEL 1.6
( Copyright 1987 by ABACUS Computer Service
)*16 GREEN ROAD
*MINE HILL, NJ  07801
*(201) 584-8201
*SHAREWARE -- COPY and DISTRIBUTE
6
ABACUS Computer Service
[Donald Jackowski
16 GREEN ROAD
MINE HILL, NJ 07801
\(201) 584-8201
Let us Help you Modernize
5

^ABACUS
{ 16 GREEN ROAD
} Mine Hill, NJ 07801
\(201) 584-8201
4

$<*Donald J. Jackowski            Donald J. Jackowski
*   16 GREEN ROAD                  16 GREEN ROAD...
*MINE HILL, NJ 07101            MINE HILL, NJ 07801
9



$<(*DONALD J. JACKOWSKI            DONALD J. JACKOWSKI
*   16 GREEN ROAD                  16 GREEN ROAD...
*MINE HILL, NJ 07101            MINE HILL, NJ 07801



4

( Elaine M. Jackowski   Elaine M. Jackowski
 16 Green Road         16 Green Road
 Mine Hill, NJ 07101   Mine Hill, NJ 07801
6
^*Buda Photo Design
*Eleanor T. Buda
*R.D. #1 BOX 261
*SWEET VALLEY, PA  18656
*(717) 477-5236
*Picture us in your future
5
^MAX CHAR TEST 56789
ONE 56789 123456789 123456789 123456789
(ONE 56789 123456789 123456789 123456789 12345
)$<ONE 56789 123456789 123456789 123456789 123456789 123456789012345
$<(ONE 56789 123456789 123456789 123456789 123456789 123456789 123456789012345
7
LSTYLE 7, Line 1
 Line 2
  Line 3
   Line 4
    Line 5
     Line 6
      Line 7
8
LSTYLE 8, LINE 1
 LINE 2
  LINE 3
   LINE 4
    LINE 5
     LINE 6
      LINE 7
       LINE 8
9
LSTYLE 9, LINE 1
* LINE 2
*   LINE 3
*Line 4
* LINE 5
*  LINE 6
*   Line 7
*    LINE 8
SURPRISED? -- Think about it!
5
Serial: ######### No.
^BIG ####
^*#### Centered
$<And here is a 6 digit ###### Compressed SERIAL No.
>&(And an ELITE one digit #
5
*Too many digits ###########
12-AX-##### number with Prefix
$<[*A MINITATURE ### SERIAL line centered
&>]double ### ##### field
[*And a SUBSCRIPT ### SERIAL line
5
    One=#       Two=##   Three=###
Four=####   Five=#####  Six=######
Too many digits -> ###########
R.D. \#5 Box 788      Serial: ####
RD \#### One \# then the serial No.
```
{% endraw %}

## README.TXT

{% raw %}
```

README.TXT						July 18, 1988

	This disk contains several .ARC files, all of which are intended to
	be copied, circulated and distributed as "shareware".  It also
	contains several utility files to make it easy for the person
	receiving a copy of the disk to determine if the copy received is a
	functional copy of the original and to display, print or extract the
	.DOC files from each ARChive file, and to extract the ALL files from
	the various ARC files.

	The utility EXTRACT will perform all the functions mentioned above, and
	when EXTRACT is invoked with no arguments it will display a short menu
	of the "options" and a short description of each option.

	The CONTENTS.TXT file contains a one line description of all the files
	on this disk, including the files contained in ARChive files.

	The SERIAL.COM file is a program that will display the serial number of
	the disk as well as the name and address of the registered user.

	The MKLAB.TXT file can be used with the MLABEL program to produce a
	label suitable for any disk copies you might make.

	If you find the programs on this disk useful, don't forget to become a
	registered user as outlined in the various documentation files.  Also
	see the output of SERIAL and the REGISTER.TXT file for details about
	the "registration bonus" that you can earn.

	Thank you. Good Luck and Happy computing.

					Don Jackowski
					ABACUS Computer Service
					16 Green Road
					Mine Hill, NJ  07801
					(201) 584-8201
```
{% endraw %}

## REGISTER.TXT

{% raw %}
```







                               ABACUS Computer Service
                                 Donald J. Jackowski
                                    16 Green Road
                          Mine Hill, New Jersey  07801, USA
                                   (201) 584-8201              July 10,1988

          INTRODUCTION

               This  disk  and  all  the  files  on  this disk constitute a
          copyrighted, proprietary product of  ABACUS Computer  Service and
          is distributed  as SHAREWARE,  as the ABACUS PC-UTIL Version 2.1,
          package of software.  Users who  register for  the entire PC-UTIL
          package ($40)  receive substantial  savings in registration fees,
          compared  to  the  total  registration  fees  of  the  individual
          programs  ($100),  and  are  also  entitled  to a 20 percent ($8)
          "registration bonus" from each registration that stems from their
          personalized, serialized copy of the PC-UTIL package.  We do this
          to encourage wide distribution  and  to  reward  the  users whose
          distribution efforts are successful.

          SERIAL NUMBER

               In  order  to  make  it  possible for ABACUS to fulfill it's
          commitment to the original REGISTERED user, you are  requested to
          send  the  PC-UTIL  disk  serial  number  and  the  name  of  the
          registered user along with your registration.  The  SERIAL number
          and  name  of  the  registered  user  can be seen with the SERIAL
          command, on the PC-UTIL disk.

          REGISTER.TXT

               This file REGISTER.TXT is provided on  the PC-UTIL  disk for
          your convenience.   It can be listed on your printer to provide a
          paper registration form.
      *--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--

          TO:  ABACUS Computer Service       Date:_____________ 19_____
               16 Green Road
               Mine Hill NJ  07801, USA

          FROM NAME:___________________________________________________

          STREET: ______________________________________________________

          TOWN: ________________________________________________________

          STATE: ______________ ZIP: _____________ COUNTRY:_____________

          PHONE: (_______)______________________________________________

          Enclosed is the REGISTRATION / LICENSE fee of $__________  for

          the Program: ___________________________ Version:_____________

          The PC-UTIL disk Serial Number: ______________________________

          Registered user Name: ________________________________________

```
{% endraw %}

## SEE.DOC

{% raw %}
```


          SEE Version 1.7                                   October 9, 1987

                                   COPYRIGHT 1987
                                         by
                               ABACUS Computer Service
                                 Donald J. Jackowski
                                    16 Green Road
                                Mine Hill, NJ  07801
                                   (201) 584-8201
                                 All Rights Reserved

          INTRODUCTION
               SEE is  a utility  program that  allows a  user to display a
          file containing  non-printable  characters  and  to  make limited
          modifications  to  the  input  to  create  a  file that most text
          editors can handle.  An  option  is  provided  to  strip (Ignore)
          printer control  sequences, making it easy to create a pure ASCII
          file from one containing printer control characters.

               Non-printable characters are divided into two classes, those
          in  the  numeric  range  0  through  31  are  considered  CONTROL
          characters except for the four characters that normally  occur in
          text files  namely the  "newline" character (10, ^J, \n, NL), the
          "return" character (13, ^M, \r, CR), the "tab"  character (9, ^I,
          \t,  TAB)  and  the  "formfeed"  character (12, ^L, \f, FF).  The
          second class called GRAPHIC  characters is  comprised of  all the
          characters  in  the  numeric  range  127  through 255.  Some text
          editing programs will not operate correctly on a  file containing
          either class  of non-printable  characters and many programs take
          the control character 26 (^Z) to be an End Of  File marker.   SEE
          offers  a  mechanism  to  allow  the user to visually observe the
          characters contained in  ANY  file  and  then  make  some limited
          substitutions that  will render the output acceptable to any text
          editor.

          USAGE
               The SEE program usage is:
                    SEE [-aipstNwNiho] file ...
               Where:
                    -a  = show ALL characters.
                    -i  = Ignore ALL non-printing characters.
                    -p  = Ignore ALL Printer control sequences.
                    -s  = Substitute a 'space' for each control character.
                    -ss = Substitute a 'space' for each non-printing char.
                    -tN = Set Tab Stop value. (default 8)
                    -wN = Set output column Width. (default 78)
                    -h  = Show Hex values.
                    -o  = Show Octal values.

               When SEE is invoked with no arguments or  if invalid options
          are given,  a short  menu is displayed.  When SEE is invoked with
          one or more file names but no options  the contents  of each file
          is displayed,  all normally non-printing characters are displayed
          as a series of regular printing  characters.   CONTROL characters
          are  displayed  in  the  ^A  style  and  GRAPHIC  characters  are
          displayed as a three digit number surrounded by  the <> character
          pair.




          Copyright 1987 (C) by ABACUS Computer Service         Page 1 of 3

          SEE Version 1.7                                   October 9, 1987

          OPERATION
               The  control  characters  "new  line",  "return", "tab", and
          "form feed" are displayed  as  normal  characters  unless  the -a
          option is  given in  which case they are displayed as ^J, ^M, ^I,
          and ^L.  When the -a option is  given the  length of  each output
          line is  a result of the default column Width setting unless this
          default is changed with the -w option. 

               The -s option can be  used  to  cause  SEE  to  substitute a
          'space'  character  (decimal  32)  for  each  occurrence of a any
          control character, if used in conjunction with the  -a option the
          substitution includes  the "new line", "return", "tab", and "form
          feed" characters.  If the -ss option is given a 'space' character
          is  substituted  for  each  GRAPHIC  character"  as  well as each
          CONTROL character."

               The  -i  option  will   ignore  both   CONTROL  and  GRAPHIC
          characters and will override and disable the -s option.

               The  -p  option  will  ignore  printer control sequences and
          automatically turns on the -i option.  This  option uses  a table
          to determine  the number of bytes to ignore after an ESC (decimal
          27) character.  The default table  contains the  data appropriate
          for an  EPSON FX-85  printer but can be easily modified for other
          printers as outlined under OTHER PRINTERS.

               The SEE output (normally displayed  on  the  screen)  can be
          redirected to a file.  For example the command line:
                    SEE file >temp
          Will place the output in the file named TEMP.

               Since  SEE  does  not  actually  display  on  the screen but
          depends on the DOS to do  the actual  display the  -t option will
          NOT  affect  the  actual  display.   The -t option is intended to
          provide  tab  setting  control  when  SEE   calculates  how  many
          characters to  permit on  a line, and is generally only needed in
          conjunction with the -w option.  SEE expects  both the  -t and -w
          options to  be given with a number, the first digit of the number
          may be given  immediately  after  the  option  letter  or  may be
          separated from  the option  letter by a 'space', thus the command
          lines:
                    SEE -w45 file       and
                    SEE -w 45 file
          Are equivalent, both set the column width to 45.

          NOTE
               An interesting use of SEE is to look for message  strings in
          normally unprintable  executable files (i.e .EXE and .COM files).
          For example the command line:
                    SEE -i SEE.EXE
          Will display some random characters, some  of the  actual machine
          codes, and all of the internal messages.







          Copyright 1987 (C) by ABACUS Computer Service         Page 2 of 3

          SEE Version 1.7                                   October 9, 1987

          USER LICENSE
               If you  find this program useful you are requested to send a
          $10 registration and  license  fee  to  ABACUS  Computer Service.
          This  fee  will  entitle  you  to  continue that use with a clear
          conscience.  Please pass a copy to a friend!  It is NOT necessary
          to be a licensed user to distribute copies.  All registered users
          will receive notice of the first update that is made  after their
          registration. 

          OTHER PRINTERS
               The following information is intended as an aid to those who
          use a printer  requiring  different  control  sequences  than the
          EPSON  FX-85.    All  the  ESCAPE  sequence  byte length data are
          maintained in a single  table to  make modification  easier, this
          internal table,  used by  the -p  option, contains  the number of
          bytes to be taken as part of an ESCAPE (27) sequence is:
               /*          0    1    2    3    4    5    6    7    8    9*/
               /* -------------------------------------------------------*/
               /*  00 */   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
               /*  10 */   0,   0,   0,   0,   1,   1,   0,   0,   0,   0,
               /*  20 */   0,   0,   0,   0,   0,   2,   0,   0,   0,   0,
               /*  30 */   0,   0,   2,   2,   0,   1,   3,   2,   0,   0,
               /*  40 */   0,   0,   0,   0,   0,   2,   0,   2,   1,   1,
               /*  50 */   1,   2,   1,   1,   1,   1,   1,   1,   0,   0,
               /*  60 */   1,   1,   1,   0,   1,   2,   9,   2,   9,   1,
               /*  70 */   1,   1,   1,   2,   2,   0,   0,   1,   2,   1,
               /*  80 */   1,   2,   2,   2,   1,   2,   0,   2,   0,   0,
               /*  90 */   0,   0,   3,   0,   0,   0,   0,   2,   9,   0,
               /* 100 */   0,   0,   0,   0,   0,   2,   2,   0,   2,   0,
               /* 110 */   0,   0,   2,   0,   0,   2,   0,   0,   0,   0,
               /* 120 */   2,   0,   0,   0,   0,   0,   0,   0

               This table contains an entry for  each of  the 128 character
          values that  could be  the byte  immediately following the ESCAPE
          byte.  This table begins at 2A42H in the SEE.EXE file.   The zero
          values in  this table represent "Unexpected ESCAPE sequences", an
          error message is displayed if any  such ESCAPE  sequence is found
          in the input.  The values 1 through 8 represent the length of the
          ESCAPE sequence, excluding the ESC character.   EXAMPLE:  row 50,
          column 1  represents 51  which is  the decimal value of the ASCII
          character '3' and the printer ESCAPE sequence:
                    27   51   (n)
               The  length  of  this  ESCAPE  sequence,  excluding  the ESC
          character is two.

               The value  9 is interpreted to mean that the next NULL input
          byte marks the end of the  ESCAPE  sequence.    EXAMPLE:  row 60,
          column 8  represents 68  which is  the decimal value of the ASCII
          character 'D' and the printer ESCAPE sequence:
                    27   68   (n1) (n2) ...  0 (NULL)
               The length of this sequence is  signaled by  the terminating
          NULL (zero) byte.

               If you alter this table to accommodate a different printer I
          would appreciate if you  would send  a copy  of your  table along
          with the  printer make  and model  to: ABACUS  Computer Service. 
          Future versions of SEE will include the data we receive  on other
          printers, and/or an "install" program.

          Copyright 1987 (C) by ABACUS Computer Service         Page 3 of 3
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1751

     Volume in drive A has no label
     Directory of A:\

    SERIAL   COM      1450   8-16-88   6:28p
    MKLAB    TXT       253   8-16-88   6:28p
    SERIAL   CRC       205   8-16-88   6:28p
    BATCH11  ARC     11728   7-09-88   5:42p
    BRACE11  ARC     19077   7-09-88   6:05p
    EDMAC12  ARC     20326   7-09-88   6:06p
    FINDEX26 ARC     51843   7-09-88   6:06p
    HARD10   ARC     44441   7-11-88   9:50a
    LPR45    ARC     14737   7-09-88   6:10p
    MLABEL16 ARC     21247   7-09-88   6:07p
    SEE17    ARC     14446   7-09-88   6:03p
    EXTRACT  BAT      3093   7-13-88  10:28p
    KEYPRESS COM        96   7-04-87  12:53p
    PKXARC   COM     12242   4-27-87
    CRC      EXE     11485   7-18-88   6:55a
    CONTENTS TXT      2633   7-12-88  11:39a
    HISTORY  TXT      1499   7-11-88   9:55a
    README   TXT      1516   7-18-88   7:13a
    REGISTER TXT      2734   7-10-88   7:10a
    PC-UTIL  CRC       961   7-18-88   7:19a
    FILE1751 TXT      6143  12-19-89  11:11a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   2:17a
           23 file(s)     242733 bytes
                           67584 bytes free
