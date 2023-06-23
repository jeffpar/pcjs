---
layout: page
title: "PC-SIG Diskette Library (Disk #2683)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2683/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2683"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2683.TXT

{% raw %}
```
Disk No: 2683
Disk Title: HXED
PC-SIG Version: S1

Program Title: HXED
Author Version: 2.00
Author Registration: $15.00
Special Requirements: None.

HXED is a fast and easy-to-use editor for binary files that can be
customized for your video and processing preferences.  By using disk and
memory very efficiently, HXED consumes less than 30K of memory and it
can edit files of up to two megabytes in less than 100K of memory.  HXED
supports Insert and Overwrite modes and character delete, as well as
Search and Replace functions.  File data is displayed in a hexadecimal
format: addresses on the left, hexadecimal representation in the middle,
and character representation (ASCII) on the right.  The current location
in the file is marked by a pair of cursors, one for the hexadecimal data
and one for the character data.

HXED provides on-screen Help, always available with a single keystroke.

A DOS shell is also available, returning to HXED using the standard EXIT
command.  Customize the way HXED operates by specifying command line
options.  Set cursor and text colors, specify fill characters and
display characters for unprintable character values, set the number of
memory buffers to use, and specify video BIOS instead of direct video
access for speed improvement.

HXED is unique because it comes with the complete source code.  See how
file editors are constructed and perhaps even create one of your own.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1991 PC-SIG, Inc.
```
{% endraw %}

## HXED.DOC

{% raw %}
```
     
     HXED, Version 2.00, a Hexadecimal Editor for Binary Files,
     Copyright 1991 Anthony F. Stuart, All rights reserved.
     
     
     1.  Description
     
         HXED is a fast and easy to use editor for binary files. It 
     supports insert and overtype modes, character delete, and search
     and replace. Command line options let you customize it for your
     video hardware and processing preferences. HXED uses memory
     and disk very efficiently. The executable file itself consumes
     less than 30 kb and it can edit files up to two megabytes in less
     than 100 kb of memory. 
     
         HXED uses the popular hexadecimal dump display, with address
     on the left, hexadecimal representation in the middle and character
     representation on the right. The current location in the file is
     marked by a pair of cursors, one for the hexadecimal representation
     and one for the character representation. The arrow keys, page up,
     page down, home and end select the current location in the file.
     There is also a goto command to select a specific address.
     
         Text can be inserted or overtyped as either hexadecimal or
     character codes. A single key combination switches between modes. In
     hexadecimal mode the hexadecimal cursor is active and lets you enter
     a one or two digit hex value. In character mode the character cursor
     is active and lets you enter a character. Characters can also be
     entered using decimal code by holding down the Alt key and entering
     the decimal code on the numeric keypad.
         
         HXED makes an ideal binary file pager. The search and goto
     commands, and current address display field, let you quickly locate
     an address without having to count bytes.
     
     2.  Use
     
         To invoke HXED with default display and processing options
     just type the command followed by an existing filename:
     
                   HXED file
     
         HXED will display its header and footer lines and the first page
     of the file. The current location is set to the first byte of the file.
     The header line contains the current address, file size, insert/
     overtype indicator and hex/ascii indicator. The footer line contains
     the file name, time and date last modified and original file size.
     
         Press function key F1 for a help display that summarizes the
     interactive commands. This display is also produced if you enter an
     invalid function or Alt key sequence. The help display is cleared by
     pressing any key.
     
         The cursor positioning keys move the cursor around the file
     in the usual way. The home key selects the beginning of the file and
     the end key selects the end of the file. Page up and page down move
     one page backward or forward.
     
         The delete key deletes the current character, and all following
     characters shift up one. The insert key toggles insert/overtype mode.
     The default mode is overtype mode. In overtype mode each character that
     is entered replaces the character that was previously there. In insert
     mode each character that is entered is inserted at the current location
     and the following characters are shifted down one. The current mode
     is indicated on the header line.
     
         HXED recognizes a variety of Alt key sequences:
     
         Alt-D (Dos Suspend) suspends the current editing session and
         enters the DOS command processor. Return to HXED by typing
         exit at the DOS prompt. Caution: while suspended do not delete
         or modify the file you are editing or any "hxedtmp" files.
     
         Alt-G (Goto Address) prompts for an address and makes it the
         new current location. The address can be entered in octal,
         decimal or hexadecimal format. Octal addresses must be preceded
         by a 0 and hexadecimal addresses must be preceded by a 0x. For
         example, the octal address 010770 and the hexadecimal address
         0x11f8 are equivalent to the decimal address 4600.
     
         Alt-H (Toggle Hex/Character Mode) controls which cursor is
         active for inserting or overtyping. In hexadecimal mode the
         hexadecimal cursor is active and you can enter any of the
         digits 0123456789abcdef. In character mode you can enter any
         character that can be typed from the keyboard. Remember that
         text lines in DOS are terminated by a carriage return, line
         feed combination. This can be entered using Ctrl-M, Ctrl-J. Also
         note that most PC BIOS's support decimal entry by holding down
         the Alt key and entering a decimal code on the numeric keypad.
     
         Alt-Q (Quit) exits the editor. First you are prompted for 
         whether you really want to quit or not. Then, if you have made
         changes, you are prompted for whether you want to save them. 
         Note that at this point it is only possible to write the changes
         back to the original file. If you want to write the changes to
         a different file use the Write command before quitting.
     
         Alt-R (Replace) prompts for a search pattern and a replace
         string and then interactively asks you whether you would like
         to replace each occurence of the pattern. A NO response skips to
         the next occurence. A YES response replaces the current occurence.
         An ALL response replaces all remaining occurences (to the end of
         the file). A STOP response terminates the search and replace
         operation. See the search command for a description of patterns.
     
         Alt-S (Search) prompts for a search pattern and locates the
         first occurence of it following the current location. A search
         pattern consists of a sequence of one or more characters, escape
         sequences and/or wildcards. Escape sequences are described below.
         Wildcards consist of the question mark character (?) which
         matches any one character and the asterisk character (*) which
         matches zero or more characters. The asterisk will match the
         shortest string that satisfies the remainder of the pattern. 
         
         Alt-W (Write) writes the current editing session to a file. First
         you are prompted for whether or not you really want to write to
         a file. Then you are prompted for the name of a file. The editing
         session is then written to the file. If you have specified the
         original file as the output file then the time and date modified
         and original file size fields of the footer line will be updated.
     
         As mentioned above, text for the search and replace commands can
     be entered as a sequence of characters and/or escape sequences. The
     escape sequences use the common convention of a backslash followed
     by a mnemonic:
     
         Sequence    Description            ASCII Code or Comment
         --------    -----------            ---------------------
         \a          audible alert          BEL
         \b          backspace              BS
         \f          formfeed               FF
         \n          newline (linefeed)     LF
         \r          carriage return        CR
         \t          horizontal tab         HT
         \v          vertical tab           VT
         \?          question mark          negates wildcard function
         \*          asterisk               negates wildcard function
         \\          backslash              negates escape function
         \0nnn       octal code nnn         e.g. \033 is an ASCII ESC
         \dnnn       decimal code nnn       e.g. \d27 is an ASCII ESC
         \xnn        hexadecimal code nn    e.g. \x1b is an ASCII ESC
         
         The escape sequences can be intermixed with text as long as the
     end of an octal, decimal or hexadecimal sequence is not ambiguous.
     
         When entering text for the search, replace or file commands, use
     the backspace key to delete the previous character and the escape key
     to delete the entire line. You can also cancel any of these commands
     by pressing escape followed by return.

     3.  Limits and Error Recovery
     
         HXED creates a temporary file that is uses to keep track of
     changes you make. The file you are editing is not updated until you
     write the changes back to it or quit and save the changes. In fact,
     the write operation first writes the changes to another temporary file
     and then renames the temporary file to the name you specified. This 
     way if anything goes wrong you will not lose your original file.
     
         Keep in mind that HXED uses temporary files and that they
     require disk space. A good rule of thumb is to only use HXED on
     disks that have at least 2-3 times as much free space as the size of the
     file you are editing. Also keep in mind that HXED should not be used
     to edit files over two megabytes (hex 200000). If you run out of memory
     or disk space for temporary files the editor aborts and your changes
     are lost.
     
     4.  Defaults and Command Line Options
     
         HXED lets you customize the way it operates by specifying
     command line options. If you want to use certain options every time
     you edit, create a batch file that invokes HXED with the desired
     options. The following list summarizes the command line options. You
     can get a summary of this list by specifying the HXED command without
     a filename. Note that command line options should be entered in lower
     case. Also, for options that require a parameter, there should be no
     space between the option and the parameter.
     
         -b     creates a backup file before writing changes. The backup
                file uses the same base name and a .bak suffix. Caution: the
                new backup file will replace any existing file with the same
                name.
     
         -c<c>  specifies the color to use for the cursor and help 
                display. The method for specifying colors is described
                below. The default is -ckw for both monochrome and color.
     
         -d<d>  specifies the display character to use for characters
                outside the printable ASCII character set. This character
                can be represented using the escape sequence notation
                described above. If no character is specified then the
                character from the PC character set is displayed. The
                default is -d\xfa for the centered dot.
     
         -e<f>  specifies the fill character to use when characters are
                added beyond the end of the file. The default is -e\x0, i.e.
                fill from end of file to the current location with zeros.
     
         -f<c>  specifies the color to use for the footer line. The default
                is -fkw for monochrome and -fyr for color.
     
         -h<c>  specifies the color to use for the header line. The default
                is -hkw for monochrome and -fyr for color.
     
         -m<c>  specifies the color to use for the message line. The default
                is -mwk for both monochrome and color.
     
         -s     specifies silent mode. Invalid keys are ignored. The default
                is to produce a tone when an invalid key is entered.
     
         -t<c>  specifies the color to use for the text area. The default
                is -twk for monochrome and -tck for color.
     
         -u<n>  specifies the number of memory buffers to use. Specifying
                a large number makes editing faster but limits editing to
                smaller files. Specifying a small number slows down editing
                but lets you edit larger files. The default is -u8. The
                minimum is -u4.
     
         -v     specifies use of the video BIOS instead of direct video 
                access. Use this option if you have any problems with the
                display. The video BIOS is slower than direct access.
     
         Colors are specified as a two character sequence. The first 
     character represents the foreground color. The second character
     represents the background color. Colors are abbreviated:
     
                b = blue,    g = green,  c = cyan,  r = red,
                m = magenta, y = yellow, w = white, k = black
     
     For example, to specify a text area of white on black, use -twk.
     
     5.  Distribution

          HXED is shareware. Registration costs $15.00. In addition
     to supporting the development of HXED and other quality programs,
     this fee entitles you to unlimited use of the HXED source code in
     projects that you develop, provided the amount of source code you
     develop is at least as great as the amount you derive from HXED.
     In addition, if you register you will receive the next release of
     HXED when it becomes available.

          Registration is easy. Just send a note saying that you wish
     to register HXED, Version 2.00, along with a check or money order
     for $15.00 to:
     
                     Anthony F. Stuart
                     21042 Thoreau Court
                     Sterling, VA 22170

         HXED is distributed as-is with no warranties, for use at
     your own risk. Every effort has been made to produce a robust and
     reliable program, but there are undoubtedly some bugs left in it. If
     you find a bug, try to reduce it to its simplest case and send me a
     description. I would also like to hear general comments and 
     suggestions for new features. 
 

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2683

     Volume in drive A has no label
     Directory of A:\

    DOS      C        8204   2-10-91   4:00p
    FILE     C       18272   2-10-91   4:00p
    INPUT    C       10279   2-10-91   4:00p
    MAIN     C       15380   2-10-91   4:00p
    OUTPUT   C        8296   2-10-91   4:00p
    SEARCH   C        7166   2-10-91   4:00p
    UNIX     C        5405   2-10-91   4:00p
    UTIL     C        2974   2-10-91   4:00p
    HXED     DOC     14057   2-10-91   4:00p
    HXED     EXE     28555   2-10-91   4:00p
    DCL      H        2546   2-10-91   4:00p
    DEF      H        2857   2-10-91   4:00p
    DOSDEF   H        1464   2-10-91   4:00p
    EXT      H        1057   2-10-91   4:00p
    FILE     H        8397   2-10-91   4:00p
    FMT      H        2300   2-10-91   4:00p
    HELP     H        3008   2-10-91   4:00p
    MCB      H        1345   2-10-91   4:00p
    PROTO    H         887   2-10-91   4:00p
    SD       H         783   2-10-91   4:00p
    UNIXDEF  H        1368   2-10-91   4:00p
    USAGE    H        1825   2-10-91   4:00p
    DOS      MK        501   2-10-91   4:00p
    UNIX     MK        433   2-10-91   4:00p
    PREVIEW  EXE      7347   4-18-91   1:15p
    FILE2683 TXT      1557   7-24-91   1:32a
    GO       BAT        99   7-24-91   1:22a
           27 file(s)     156362 bytes
                          151552 bytes free
