---
layout: page
title: "PC-SIG Diskette Library (Disk #1303)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1303/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1303"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SCROES AND PRN SET"

    SCRDES is a full-screen text/graphics editor designed to ease the coding
    of custom screens -- such as menu screens, data-entry forms and help
    screens -- into programs.  The editor was created for use with CGA and
    EGA, but will also function with a monochrome card, although with less
    distinctive effects.
    
    The program was designed primarily to produce binary files of the type
    ``character, attribute, character, attribute'' for inclusion in
    Assembly language programs, or to be read directly from a file to the
    screen buffer in a high-level language.  It will also produce ASCII
    text files of the form character, character, CR/LF, character,
    character, CR/LF (25 lines) suitable for use in interpreted languages
    such as BASIC or dBase III.
    
    PRNSET is a universal nonresident printer-setting program that takes its
    configuration information from a file, which you can make with any text
    editor.  This feature makes it possible to set the print control symbols
    for any printer and select and organize the instructions you want to
    have in PRNSET's repertoire.  It can operate interactively through a
    menu, from a batch file, or directly from the DOS command line.
    File Descriptions:
    
    PRNSET   EXE  The operating program.
    PRNSET   DOC  User's manual.
    PRNSET   DAT  The default data file. Set for Epson LQ-800.
    FX-80    DAT  Altenative data file for Epson FX-80 printer.
    FX-86    DAT  Data file for Epson FX-86e printer.
    IBM      DAT  Data file for IBM ``Graphics'' printer.
    LQ-800   DAT  Data file for Epson LQ-800 printer.
    OKI      DAT  Data file for Okidata 92 printer.
    XXXXXX   DAT  Other data files.  They name the printer they support.
    COUNTPGS EXE  Count the pages in a file before printing.
    COUNTPGS DOC  Documentation for COUNTPGS.
    E88      EXE  A simple ASCII text editor.
    E88      DOC  Documentation for E88.
    README        Instructions and file explanations.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COUNTPGS.DOC

{% raw %}
```

COUNTPGS                                                            v. 1.12
--------


Purpose:     Find out how many pages a file or set of files contains be-
             fore you print it out.  Also checks for badly paged files.

Format:         COUNTPGS [[d:][path]filename.ext ...] [/P] [/Lnn]

             __                      ____                      ____________             d: is the drive letter, path is the DOS path, and filename.ext
             may contain DOS's usual wildcards (* and ?).  If COUNTPGS is
             entered bare, without filenames, COUNTPGS will ask for them.

             /P anywhere in among the parameters will cause COUNTPGS to
             echo its output to the printer.

             /Lnn specifies nn lines/page if no FF's found (default is 66).

Remarks:     To find out how much paper to lay out, I once looked at the
             end of a file and found page 1105.  So, I wrote COUNTPGS.
             That turned out to be Chap. 11, p. 5, of course, & the whole
             thing ran to about 100 pp.  Whew!

             COUNTPGS can handle up to 25 filenames at a time, which may
             contain wildcards. Each must have its own drive and path des-
             ignations.  Examples:

                COUNTPGS b:xyz.txt

                COUNTPGS b:\*.doc

                COUNTPGS b:abcd.txt c:\xyz*.doc c:\foo\ab??.* /P /L55

             If you prefer to give the file specs interactively, enter just
             COUNTPGS, and you'll be asked for the filenames.  (/P and /L
             can go in like filenames.)  When you've entered as many as you
             want, a bare <Enter> tells COUNTPGS to take it away.

             Most printers will feed out the rest of the page when they en-
             counter a "form-feed" character, ASCII #12.  (On the screen,
             it shows up as either ^L or the Venus (female) sign.  If you
             have this file on the screen, you can see a form-feed charac-
             ter at the end, after the address below.)  Some files use
             form-feed characters to divide pages; some just feed out the
             proper number of lines per page.  If it finds any form-feeds
             at all, COUNTPGS expects the number form-feeds to be the num-
             ber of pages.  When there are no form-feeds, COUNTPGS calcu-
             lates the number of pages from the line count.

             Two things can go wrong: (1) the end of the file may be ragged;
             i.e., it may not come out even with the paper.  If you want to
             COPY PRN a bunch of files like that, you'll have to do some-
             thing clever.  (2) The FF's may be wrongly placed, making some
             pages longer than the piece of paper.  COUNTPGS will warn and
             do its best to explain if it finds either of these faults.

                                               ---R. N. Wisan,  April, 1988
                                           37 Clinton St, Oneonta, NY 13820
```
{% endraw %}

## E88.DOC

{% raw %}
```







                               TTTTTT    HH  HH     EEEEEE
                                 TT      HH  HH     EE
                                 TT      HHHHHH     EEEE
                                 TT      HH  HH     EE
                                 TT      HH  HH     EEEEEE

                 EEEEEEEEEEEEEE        8888888888          8888888888
                 EEEEEEEEEEEEEE      88888888888888      88888888888888
                 EEE                 888        888      888        888
                 EEE                 888        888      888        888
                 EEEEEEEEEE            8888888888          8888888888
                 EEEEEEEEEE            8888888888          8888888888
                 EEE                 888        888      888        888
                 EEE                 888        888      888        888
                 EEEEEEEEEEEEEE      88888888888888      88888888888888
                 EEEEEEEEEEEEEE        8888888888          8888888888

                         TTTTTT     EEEEEE     XX  XX     TTTTTT
                           TT       EE          X  X        TT
                           TT       EEEE         XX         TT
                           TT       EE          X  X        TT
                           TT       EEEEEE     XX  XX       TT

               EEEEEE     DDDDD      II     TTTTTT      OOOO       RRRRR
               EE         DD  DD     II       TT       OO  OO      RR  RR
               EEEE       DD  DD     II       TT       OO  OO      RRRRR
               EE         DD  DD     II       TT       OO  OO      RR  RR
               EEEEEE     DDDDD      II       TT        OOOO       RR  RR


               [Abridged E88 manual for abridged version of E88 pack-
                aged with GKAL grade processor & PrnSet printer setter]





            .----------------.
            | A ssociation of|    The author of this program is a member of
            | S hareware     |    the ASP and has agreed to abide by its
            | P rofessionals |    high standards of quality and support.
            |   ----------   |                -------------
            `-----MEMBER-----'




            (C.) Copyright 1986,87,88  Microsystems Research and Engineering
            (C.) Copyright 1986,87,88  Emery D. Wooten Jr.
            E88, M.R.E. Software, Microsystems Research and Engineering (TM)s

                                  All rights reserved
                                                                          II

                                      PREFACE



             E88 was originally designed as an editor to write assembler
        language code but has since been enhanced into a full function text
        and programming editor.  Since the shareware release of version 1.00
        the editor has been updated seven times including this version.

             E88 is short for editor in 8088 machine language.  The editor is
        written in 100% assembler language which accounts for its compact
        size and lighting fast speed.  This editor was designed and written on
        an IBM PC and is intended for use on IBM and closely compatible
        machines.

             The goal of this editor is to provide a new concept in text
        editing.  It does not use all of the complicated keyboard commands
        associated with many editors and word processors.  The result is a
        very fast, natural, logical, and easy to learn user interface.  Most
        of the editing functions of E88 are direct, one keystroke, commands.
        This editor uses the IBM keyboard the way it was intended to be
        used, not the way some "ported over" programs use it.  The function
        keys are used heavily but in a logical and easy to remember fashion.
        The numeric keypad/cursor control keys provide text control as it
        should be provided, fast, versatile, and full featured.  All complex
        file control and setup functions are accessed via a menu driven
        command window with helpful prompts, which are brief but informative.
        A help screen is also provided and can be accessed directly from edit
        mode or from the command window.  This help screen provides an
        abbreviated list of the editor's direct functions.

             E88 represents an amalgamation of user ideas forged with the
        speed and precision of machine language coding into a sleek little
        computer program whose ease of use and price/performance ratio are
        unmatched by any major commercial product.  Since E88 is shareware,
        and M.R.E. Software is a very small company, user ideas are the
        primary source of innovation and improvement in this product.
        Comments received from registering users ARE read, answered, and
        appreciated.  Good ideas are incorporated in future versions whenever
        possible.  If, after evaluating the program, you decide to register
        your copy, please feel free to send any comments or complaints (we can
        take it) that you think will improve a future version.  You WILL
        receive an answer.  E88 IS actively supported.

             If you are familiar with older versions of E88, then you will be
        pleased with this new edition.  The new features definitely make the
        program more useful than ever before.  The basic simplicity of
        operation has been retained even with the additional power.

             If you are not familiar with E88, then prepare yourself for a
        surprisingly fresh, new approach to text editing.  The speed and
        power provided by E88 is unmatched by any other editor in its class.
        You will be able to master the commands and functions of E88 in just
        a few minutes and retain this knowledge after only a couple of
        sessions.  You'll never dread loading and running a text editor again
        as long as you have E88.
                                                                         III

                                HARDWARE REQUIREMENTS


        E88 will run on the IBM PC-XT-AT-PCjr-PS/2 and all true compatibles.

        The general system requirements are outlined below.

        Memory .......... 64-640 Kb.  The edit file size is a function of free
             memory.

        Operating sys. .. MS/PC DOS version 2.00 or later.

        Video ........... Standard color graphics and monochrome display
             adapters are supported as well as the 43 line/screen mode of the
             IBM compatible EGA adapter. The display adapter is selected
             automatically on systems with only one adapter installed, but
             may be user selected using start-up options on multiple adapter
             systems.

        Disk ............ All disk I/O is controlled through standard DOS
             function calls.  Any valid path and filename may be used in
             the file specification.

        Files ........... E88 reads/produces standard ASCII text files with an
             optional tab compression mode.  Standard ASCII files are the type
             required by most assemblers and compilers.  Tab compression mode
             provides a method of compressing text files to preserve disk
             space while still retaining DOS compatibility.

        Printer ......... The printer output from E88 is standard ASCII text
             which should be acceptable to all printers.  It should also be
             noted that no filtering is done on the text when it is sent to
             the printer.  The user may specify any special codes such as
             escape codes directly on a line in the file and force the printer
             to do whatever he desires.  Some special characters in the IBM
             extended character set (above ASCII 127) as well as some control
             characters (below ASCII 32) may not be acceptable to some
             printers and could cause unusual looking printouts.
             Note that many printers may be controlled by encoding the
             desired control characters in the file by adding 128 to the basic
             ASCII code.  For example the BEL character would be ASCII 135
             instead of ASCII 7    ie. 7+128=135

        Keyboard etc. .... E88 supports both the 83 and 101 key format.  It
             uses the standard BIOS interface and starting with version 4.20
             it is able to read and display the complete IBM character set.
             Most characters may be entered using Ctrl key combinations,
             those that can't may be entered by holding down the [Alt] key,
             typing the ASCII value on the numeric keypad, and releasing
             [Alt].  WARNING: E88 will allow ALL ASCII control codes to be
             entered into a file and saved to disk.  The user is warned that
             some control codes such as EOF(26), CR(13), and LF(10) are
             essential to the file structure of ASCII files and could cause
             problems to E88 and other ASCII programs if used improperly.
             The CR(13) character (a musical note) is also used by E88 to
             indicate a line contains trailing blanks.  This feature may also
             be employed by the user to pad a line with trailing spaces.
                 E88 also provides internal translation routines to allow
             the user to redefine keyboard commands using The E88 Text Editor
             machine covered in section 4.


                              S P E C I A L    N O T I C E:


             What you have here is a version of E88.EXE which has been cut
             down to accompany GKAL (grade processor) or PrnSet (printer
             setter).  Permission of M.R.E. Software, publisher of E88 to
             make this adaptation is hereby gratefully acknowledged.

             This version, standing by itself, is an able and easily
             learned little text editor.  What you don't have (that you
             get with the full E88 package) is E8M.EXE.  That program is
             a "machine" to construct customized versions of E88.EXE.  By
             means of E8M, you can adjust the colors and put the various
             editor functions on whichever keys you like.  Thus, you can
             make E88 more like the word processor you're used to.

             The present version of E88.EXE has been set up pretty much
             as described in this manual, except that:

             1. The /W option is automatically on.  What it does is make
                the cursor keys a little less like a programming editor
                & slightly more like a word processor.  See section 3.11,
                page 6 for details.

             2. The default file suffix has been changed from E88's regular
                .ASM to blank.  This makes E88's filenames work just like
                DOS.

             If you find this E88 useful, you can probably find the regular
             version on your local BBS or you can write to the publisher:

                                   M.R.E. Software
                                  150  Jones Street
                                West Point, Ms.  39773

             Frankly, if you like what you see here, you might as well pay
             up & register at once, using the form at the end of this manual.
             For $25 you get a full registration and a copy of the full pro-
             gram disk.  Appendix D at the end of the manual has more infor-
             mation about registration.

                  The abridgement prepared and this page (only) written
                  by R. N. Wisan, 37 Clinton St, Oneonta NY 13820.

                                                                          IV

                                  C O N T E N T S

        PREFACE ......................................................... II

        HARDWARE REQUIREMENTS ........................................... III


        PART 1 *** THE E88 TEXT EDITOR

        (1.) STARTING E88.................................................. 1
               Filenames .................................................. 1
               Options .................................................... 1
               Examples ................................................... 2
                 Indirect mode ............................................ 2
                 Direct mode .............................................. 2
               Miscellaneous .............................................. 3
                 Special start/restart features ........................... 3
        (2.) THE EDIT SCREEN .............................................. 4
               Top line information ....................................... 4
               The remainder of the screen ................................ 4
               Miscellaneous .............................................. 4

        (3.) PROGRAM CONTROL .............................................. 5
               The numeric keypad ......................................... 5
                 [Up] [Dn] [Lt] [Rt] ... Cursor keys ...................... 5
                 [Pg Up] [Pg Dn]  ...... Scrolling ........................ 5
                 [Home] [End]  ......... Scroll 1 line .................... 5
                 [Ctrl] [Lt] & [Rt] .... Find previous/next word .......... 5
                 [Ctrl] [Home]  ........ Home cursor ...................... 5
                 [Ctrl] [End]  ......... Cursor to end of line ............ 5
                 [Ctrl] [Pg Up]  ....... Go to top of file ................ 5
                 [Ctrl] [Pg Dn] ........ Go to end of file ................ 5
                 [Ins] ................. Insert a character ............... 5
                 [Del] ................. Delete a character ............... 6
                 Word processing mode ..................................... 6
                 The function keys ........................................ 6
                 [F1] .................. Command window call .............. 6
                 [Shift] [F1] .......... Set the right margin ............. 6
                 [Alt] [F1] ............ Instant help ..................... 6
                 [F2] .................. Printer call ..................... 6
                 [Alt] [F2] ............ Alternate printer call ........... 7
                 [F3] [F4] [F5] [F6] [F7] [F8] ... Pagers ................. 7
                 [Alt] [F3] [F4] ....... Send printer strings ............. 7
                 [Alt] [F5] ............ Make cursor TOS .................. 7
                 [Alt] [F6] ............ Page to last active screen ....... 7
                 [Alt] [F7] ............ Rep. Load buffer ................. 7
                 [Alt] [F8] ............ Load buffer ...................... 7
                 [F9] .................. Insert a line .................... 7
                 [Shift] [F9] .......... Quick default directory .......... 8
                 [Alt] [F9] ............ Change line attribute ............ 8
                 [F10] ................. Insert a line from buffer ........ 8
                 [Alt] [F10] ........... Delete a line .................... 8
                 [Ctrl] [F1-F10] ....... Programmable characters .......... 8
                 [ENTER] ............... Record screen / Reset tab cnt. ... 8
                 [Ctrl] [Enter] ........ Toggle auto-indent mode .......... 8
                 [Tab] ................. Tab the cursor ................... 8
                 [Shift] [Tab] ......... Set the tabs ..................... 8
                 Additional information on functions ...................... 9
               Command modes .............................................. 11
                                                                            V


                 (E.) END the edit and save this file ..................... 11
                 (B.) BACKUP (create filename.bak) ........................ 11
                 (F.) FILES (directory search) ............................ 11
                 (C.) CHANGE the filename (for saving) .................... 11
                 (D.) DEFINE block operation .............................. 11
                      DELETE the marked block ............................. 12
                      MOVE the marked block ............................... 12
                      COPY the marked block ............................... 12
                      PRINT the marked block .............................. 12
                      TRANSFER marked block to disk ....................... 12
                 (H.) HELP ................................................ 12
                 (K.) KEY file saved for this directory ................... 13
                 (L.) LOAD another file (with options) .................... 13
                 (M.) MERGE data from another file ........................ 13
                 (P.) PROGRAM Ctrl. keys and def ext. ..................... 13
                      Special supplemental information about setup files .. 13
                 (S.) SEARCH and [replace] string ......................... 14
                 (T/W) TAB comp.( )/WORD wrap( )  (x)=on .................. 14
                 (Q.) QUIT * RETURN TO DOS * NO SAVE ...................... 15


        PART 2 *** THE E88 TEXT EDITOR MACHINE    (E8M.EXE)

                 This section omitted from abbreviated version

        APPENDIX A - E88 program compatibility ............................ A1
             Memory resident programs ..................................... A1
               Prokey ..................................................... A1
               Sidekick ................................................... A1
             Non resident programs ........................................ A1
               Assemblers / Compilers ..................................... A1
               Communications programs .................................... A1
               Operating system files ..................................... A2
               Data base data files ....................................... A2

        APPENDIX B - The E88 help screen .................................. B1
               A printable reproduction ................................... B1
               A note about the help screen ............................... B1

        APPENDIX C - License / Warranty / Trademarks ...................... C1
               License .................................................... C1
               Warranty ................................................... C2
               Trademarks ................................................. C2

        APPENDIX D - Registration ......................................... D1
               Why should I register ? .................................... D1
               Registration fees .......................................... D2
               The M.R.E Support BBS ...................................... D2
               Registration form ..................................... D3 & D4
                                                                           1

        >> Section 1 <<             STARTING E88



             E88 may be started either directly or indirectly from the DOS
        prompt.   There are also several options available to the user at
        run-time.  This section will discuss filenames and options needed to
        begin an editing session with E88.


        >> 1.1 <<                     FILENAMES

             Standard DOS notation is acceptable.  d: [path] filename [.ext]
        If no path is specified then E88 will use the default directory.  If
        no filename extension is specified then E88 will use its user
        definable internal default.  If the desired file to be edited does not
        have an extension then 3 blanks should be entered for an extension.


        >> 1.2 <<                      OPTIONS

             E88 supports several options which may be specified on the DOS
        command line at execution.  They are listed below.

        The /B option: (blanking)
             The /B option will eliminate "blanking" of the display when
             the screen is scrolled.  This feature is useful on machines
             which have the newer display adapters.  The user may determine
             if his computer will tolerate this feature by starting E88 using
             the /B option and looking for display "fetches" (interference)
             when the screen is scrolled.  This option only applies to color
             graphics adapters and has no effect on mono or EGA displays.

        The /C option: (color)
             The /C option will force the video output to be directed to the
             color graphics display adapter.  This option is useful when a
             system is equipped with two adapters.  See also the /M option.

        The /E option: (end the file with no EOF mark)
             The /E option will suppress the end of file marker being added
             to the end of a saved file.  Although most programs accept this
             format some may require the marker.  The /E option is
             recommended for .SYS and .BAT files.

        The /H option: (high resolution EGA)
             The /H option will direct the editor to operate in EGA 43
             line/screen mode.

        The /I option: (auto indent mode)
             The /I option will start the editor in auto-indent mode.  The
             cursor will be tabbed to the first tab stop each time <ENTER> is
             pressed.  This mode may be toggled on and off by pressing the
             key combination <Ctrl> <ENTER> while in edit mode.

        The /M option: (monochrome)
             The /M option will force the video output to be directed to the
             monochrome display adapter.  This option is useful when a system
             is equipped with two adapters.  See also the /C option.
                                                                           2


        The /T option: (tab compression)
             The /T option will cause the editor to toggle into tab
             compression mode.  Unless the mode is changed from the command
             window the loaded file will be saved tab compressed.

        The /R option: (word wrap mode)
             The /R option turns on word wrapping.  This mode may be changed
             from the command window later. 

        The /S option: (silence)
             The /S option will silence all sound effects except for error
             messages.

        The /W option: (word processor insert mode)
             The /W option will direct the editor to function in word
             processor mode.  This mode is discussed in detail later in the
             manual.  (IN THE CUT VERSION THIS SWITCH DEFAULTS TO ON.)


        >> 1.3 <<                      EXAMPLES

        >> 1.3.1 <<                  INDIRECT MODE

             To start E88 in indirect mode simply enter E88 at the DOS prompt.
        The editor will be loaded and will prompt the user for the edit
        filename.  Start-up options must be specified at the DOS prompt.

        example:   C>E88 /B
             Would execute E88 with screen blanking disabled and prompt the
             user for a filename.

        example:   C>E88 /B/C/W
             Would execute E88 with screen blanking disabled, force the video
             output to the color graphics adapter, and place the editor in
             word processing mode.  The user would then be prompted for a
             filename.

        >> 1.3.2 <<                    DIRECT MODE

             To start E88 in direct mode, the filename must be specified on
        the command line.

        example:   C>E88 MYFILE.DOC
             Would execute E88, which would then load MYFILE.DOC for editing.

        example:   C>E88 MYFILE
             Would execute E88, which would then load MYFILE.(default ext.)

        example:   C>E88 /B/W \JUNK\THAT_OLD.BAT
             Would execute E88, disable screen blanking, place the editor in
             word processing mode, and load the file THAT_OLD.BAT from the
             pathed directory JUNK.

        example:   C>E88 BBSLIST.(enter three spaces for the extension)
             Would execute E88 and load the file BBSLIST no extension, for
             editing.
                                                                          3


        >> 1.4 <<                     MISCELLANEOUS

             Start-up option letters as well as filename specifiers are NOT
        case sensitive.  e88 /m myfile.dat would work just as well as
        e88 /M MyfiLE.dAT.  The spacing and order are important however.

        CORRECT:    E88 [/option] [d:]\[path]\filename[.ext]
                       s s       s    b      b
                       p l       p    a      a
                       a a       a    c      c
                       c s       c    k      k
                       e h       e    s      s
                                      l      l
                                      a      a
                                      s      s
                                      h      h


             The /T, /R, and /I options are reversible after the editor is
        executed, all others are not.


        >> 1.4.1 <<         SPECIAL START/RESTART FEATURES

             E88 provides a pair of special features that may be used on
        start-up in indirect mode or upon a restart from within the editor.
        Although these options are mentioned on the opening screen they are
        not entirely obvious.  These options are very useful and should be
        noted by the user.

        (1.) Entering a null string at the filename prompt will terminate the
        program.

        (2.) Entering a filename which includes an asterisk (*) wildcard
        character will prompt the editor to do a directory search.  The user
        may enter any valid path and filename/wildcard combination to search
        any directory.  See the FILES command covered later in this manual
        for more information and examples.
                                                                           4

        >> Section 2 <<             THE EDIT SCREEN


             This section outlines the edit screen.  It provides information
        relating to the top line status and also provides information on
        interpreting the displayed text file

        >> 2.1 <<                TOP LINE INFORMATION

        FILENAME    LINE    COL       FREE          MODE          RtMar.=xx
        current   | text | cursor |  78 char. | current mode| the right margin
         file     | line#| column | lines free|   EDIT etc. | value setting


        The indicated line number represents the current line that the cursor
        resides on IN THE FILE being edited.  A line consist of a screen line.

        example:  > this is supposed to represent text on the E88 screen
                  > text text text text text text more text etc.. on and on
                  > new line of text across screen starts at arrow on left

        represents 3 lines of the text file
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        >> 2.2 <<          THE REMAINDER OF THE SCREEN

             The remainder of the screen contains the text file that is being
        edited and also contains a "> " ,nothing, or the letter "F " in the
        first two columns of the screen on each line.  An arrow "> "means that
        this is the beginning of a new line.  If the first two columns are
        blank, the line is an extension of the previous line.  There is no
        limit on line length.  It is the user's responsibility to insure that
        the length does not exceed that which is acceptable to the assembler
        or compiler that the text file is to be used with.  The letter "F " in
        the left two columns indicates that this line is available but not in
        use.  The appearance of the first line marked "F " is the physical end
        of file.  Although it is possible to type on these free lines, any
        text present on these lines will not be saved to disk.  This feature
        will allow the user to make notes on these lines if desired, however
        these notes will not be saved or reloaded.

        >> 2.3 <<                     MISCELLANEOUS

             Some files, such as database record files and ANSI graphics
        files, contain lines padded with spaces on the end.  E88 will include
        a carriage return character (ASCII 13 a musical note) on the display
        screen when a line such as this occurs.  This feature allows the user
        to have a visual indication of where the end of the line actually is.
        The CR character is also used by E88 to determine the end of the line
        when the file or block is to be saved to disk.  The user may also
        employ this feature to pad lines with spaces.  Use the [Alt] numeric
        keypad to enter a CR after the proper number of spaces at the end of
        a line.  Press [Alt] and type 13 on numpad then release [Alt].

             Extended lines are counted as a line when referring to E88's line
        number or free lines remaining information.  They are however saved
        to disk as being one complete line of text.

        example: > this represents a line of text on the E88 editor screen
                   which is extended ( notice no arrow ) into this line

        * 2 lines to E88 but only one long line to the disk file.
                                                                           5


        >> Section 3 <<             PROGRAM CONTROL


             This section provides information regarding program control.  It
        outlines the use of the numeric pad, function keys, tabs, enter, and
        programmable keys.

        >> 3.1 <<                  THE NUMERIC KEYPAD

             The numeric keypad provides standard cursor as well as complete
        and extended screen control.

        [Up]  [Dn]  [Lt]  [Rt] ... MOVE CURSOR
             The four arrow keys provide cursor control as expected but also
        provide screen control.  Whenever a cursor movement would cause the
        cursor to be positioned off the top or bottom of the screen an
        automatic screen scroll will occur.  This includes end wrap for the
        left and right arrows as well as simply holding the up and down arrow
        keys to force a scroll.

        [Pg Up]  [Pg Dn] ... SCROLL ENTIRE SCREEN 24 LINES
             The page up and page down keys will cause an immediate 24 line
        scroll to the preceding or following page of text.

        [Home]  [End] ... SCROLL 1 LINE AT A TIME
             The home and end keys will cause a 1 line scroll up and down.

        [Ctrl]  [Lt] & [Rt] ... FIND WORDS
             These keys will find the previous/next word in the line.

        [Ctrl]  [Home] ... HOME THE CURSOR
             The key combination of [Ctrl] [Home] will home the cursor.

        [Ctrl]  [End] ... GO TO END OF LINE
             This combination will place the cursor at the end of the current
        line plus one.

        [Ctrl]  [Pg Up] ... GO TO TOP OF FILE
             This key combination will cause the editor to instantly locate
             on Line 0, Row 1, Col 2, of the file being edited.  It is denoted
             as the Go to TOF command.

        [Ctrl]  [Pg Dn] ... GO TO END OF FILE
             This is the Go to EOF command.  The logic behind this command
             constantly keeps track of the current EOF even with changes in
             file length.  When this key combination is pressed the editor
             will locate the cursor on the end of the last line in the file
             plus one position.

        [Ins] ......... INSERT CHARACTER
             Toggles the insert mode.  The insert and delete character keys
        work exactly like they do in the BASIC program editor.  The insert key
        toggles on and off.  Insert mode is indicated by a "fat" cursor.  When
        insert is enabled, characters will be inserted into the line at the
        current cursor position while all characters to the right are moved
        and wrapped around to the next line if necessary.  The editor will
        also insert an extension onto the line if needed.  The insert mode is
        toggled off with any screen or cursor movement including tabs with the
        exception of backspace. Backspace backs up and deletes the character
        leaving the program in insert mode just like BASIC.
                                                                           6


       [Del] .......... DELETE CHARACTER
             Deletes the character at current cursor position.



        >> 3.1.1 <<             WORD PROCESSING MODE

             Word processing mode is entered by using the /W option on the
        command line.  This feature in no way magically transforms E88 into
        a word processor.  It merely changes some of the key assignments
        and functions.  These changes are outlined below.

             The insert mode becomes a true toggle.  Pressing the insert key
        will cause a "fat" cursor as described in the insert key function
        above, but the editor remains in insert mode even with cursor
        movement.  There are only two ways to exit insert mode, they are,
        press the insert key again, or position the cursor past the end of
        the current line.  This feature is similar to the insert scheme used
        by many popular word processors.

             The Ctrl. Home key also function differently.  Pressing the
        [Ctrl][Home] key will cause the cursor to move to the start of the
        current line.  This represents a change from earlier versions in which
        the [Home], [End], [Ctrl][Home], and [Ctrl][End] keys were actually
        swapped.  With the introduction of The E88 Text Editor machine these
        keystrokes may be changed by the user if desired.  The function
        assigned to [Ctrl][Home] on default will be "go to start of line" and
        not "home cursor".  Therefor the user can set up the editor to be
        completely compatible with older versions.


        >> 3.2 <<               THE FUNCTION KEYS

        [F1] .......... COMMAND CALL
             F1 calls the main command menu window, discussed in detail later.

        [Shift] [F1] .. SET RIGHT MARGIN
             Shift F1 sets the right margin value at the current cursor
             position.  The right margin is in effect when the editor is in
             word wrap mode.  This feature is useful for typing formatted
             text such as pre-written text to be uploaded in E-Mail messages.
             The default value for this setting is 74.  This is the correct
             value for using the MRE BBS system.

        [Alt] [F1] .... INSTANT HELP SCREEN
             Alt. F1 provides instant on-line help.  This method of calling
             the help screen by-passes the command window.  Help is still
             available from the command window, maintaining compatibility
             with older versions and supporting the needs of novice users.

        [F2] .......... PRINTER CALL  (standard)
             F2 calls the printer !?  Make sure the printer is on (if it isn't
             DOS will indicate the error).  Place the cursor on the line where
             the printout is to start and press [F2].  The printer will print
             lines and the cursor will move and the screen will scroll until
             any key is pressed or the end of file is reached.  The cursor
             indicates the line currently being printed.  Termination of the
             print will restore the screen and cursor to their previous
             positions.  * Extended lines will be added together and printed
             just as if they were one long line.
                                                                           7



        [Alt] [F2] ... PRINTER CALL  (with arrows printed)
             This key combination causes the same action as described above
             except that the arrows are printed.

        [F3]  [F4]  [F5]  [F6]  [F7]  [F8] ... PAGERS
            F3 through F8 are called pagers.  Pressing these keys will cause
            the text to scroll instantly to a page that has been preset by the
            user.  To preset the page for each key, simply scroll to the
            desired page, hold the shift key down, and press F3 to F8.  That
            key is then set to the displayed page and will return to that
            point from anywhere in the text.  These keys will remain set until
            reset, which can be done as often as necessary.  Upon start-up the
            pager keys are set up to split the file into equal parts.  [F3]
            points at the first page and [F8] points at the last page in the
            file with all others equally spaced in between.  This feature
            allows rapid access to any area in the file.  This feature may be
            overridden by the PGR default file however.  For more information
            about the PGR file see the setup mode section.

        [Alt] [F3] [F4] .. SEND PRINTER CONTROL STRING
            This key combination will send a pre-programmed string to the
            printer.  The default strings will form-feed and reset an Epson
            compatible printer respectively.

        [Alt] [F5] .... MAKE CURRENT LINE TOP OF SCREEN
             This combination will make the current line the new top of screen

        [Alt] [F6] .... RECOVER LAST ACTIVITY SCREEN
             This combination will recover the last screen that edit activity
        occurred on.  This feature allows the user to scroll or page all over
        the place and still instantly recover the last screen where a letter
        was typed.

        [Alt] [F7] .... LOAD BUFFER WITH SAME LINE
             This is the repeat load buffer command.  This command is
             identical to the [Alt] [F8] command below except that the cursor
             is not moved down to the next line.  Audible feedback is
             provided to verify the command was executed.  This command is
             useful when a line needs to be duplicated several times.  An
             example is the many 'DB' Pseudo-ops used in an assembly language
             data segment.

        [Alt] [F8] .... LOAD LINE INTO BUFFER  (does not delete as does F10)
            This is the load buffer command key combination. When this command
            is issued, the line that the cursor is on will be loaded into a 32
            line buffer.  The cursor will then move to the next line down,
            which, if the user desires, may also be loaded.  Up to 32 lines
            may be stored in this manner and recovered with the [F10] key.
            The use of this command in combination with the [F10] key may used
            to do a block copy of up to 32 lines at a time.  To copy more than
            32 lines at a time see the block operations section.

        [F9] .......... INSERT A LINE
             F9 will insert a line into the text directly above the line that
             the cursor is on when the key is pressed.
                                                                           8

        [Shift] [F9] .. QUICK DIRECTORY LISTING  (default drive & extension)
             Shift F9 will display a quick default directory search.  The
             default directory will be searched for all filenames ending in
             the currently defined default extension.

        [Alt] [F9] .... TOGGLE LINE ATTRIBUTE  (join or seperate lines)
             This key combination will toggle the attribute of the current
             line.  It will change an extended line into a new line or a new
             line into an extended line.  This can be used to separate or join
             lines in the file.

        [F10] ......... INSERT A LINE FROM THE BUFFER
             This key will automatically insert a line of text which has been
             saved in the 32 line buffer. The insert will occur at the current
             cursor position in the same manner that the [F9] key effects an
             insert.  Lines may be saved into the buffer by the [Alt] [F8]
             load buffer command or by the [Alt] [F10] delete line command.

        [Alt] [F10] ... DELETE CURRENT LINE  (line is placed in the buffer)
             This key combination is the delete line command.  When this
             command is used the current line will be deleted from the screen
             and the file will scroll up to fill the vacated space.  The
             deleted line is not lost forever however, it is placed in a 32
             line circular buffer.  The last 32 deleted lines may be recovered
             by simply pressing [F10] after positioning the cursor at the
             desired insert position.  Using the key sequences of [Alt] [F10]
             and [F10] in combination can be used to move a block of text (up
             to 32 lines at a time) from one place in the file to another.

        [Ctrl] [F1-F10] .. SPECIAL CHARACTERS (types user defined character)
             These key combinations print a special character which has been
             pre-programmed by the user for the particular function key.  The
             programming of these keys is discussed later in the setup window
             instructions.  The default character set for these keys is the
             set of line graphics characters.

        [ENTER]
             The enter key is used much as with any other editor.  When typing
             in text, hitting [ENTER] will cause the cursor to move to the
             start of the next line, inserting a line if it is at the end of
             file.  [ENTER] also resets the tabs and records in memory the
             current text screen.  There is one difference with this editor to
             many others including the Microsoft BASIC program editor.  It is
             NOT necessary to press [ENTER] to insure that your screen changes
             have been preserved.  The program logic automatically detects a
             screen change and records the new screen.  This prevents the old
             BASIC problem of forgetting to press [ENTER] and having to
             re-type a change.

        [Ctrl] [ENTER] .. TOGGLE AUTO INDENT
             The key combination of [Ctrl] [ENTER] will toggle the editor's
             auto-indent mode.  When in auto-indent mode the cursor is
             automatically tabbed to the first tab stop.  This process is
             essentially identical to pressing [ENTER] and [TAB] in sequence.

        [Tab]
             The tab key tabs the cursor to the user preset tabs.

        [Shift]*[Tab] .. SET TAB
             This key combination of shift and the tab key will set a tab on
             the screen.  E88 supports 20 tab positions which can be set to
             function in almost any manner imaginable.
                                                                           9

             To set the tabs:

             (1.) Press [ENTER] (this clears the tab COUNT)  *** See note 1 !
             (2.) Move the cursor to the desired tab position.
             (3.) Hold down a shift key and press the tab key.
             (4.) Tab 1 is now set and the next tab is ready to be set.
             (5.) Repeat this procedure until the speaker beeps if desired.

        More on the tab function :
        1.   To set the first tab, which is the position that the cursor will
             move to when in auto indent mode, the editor must NOT be in
             auto indent mode.  This is because the cursor will automatically
             be tabbed by the [ENTER] key and the tab count WILL NOT be
             cleared.  The tabs MAY be set when the editor is in auto-indent
             mode, however the user should be aware that the tab count will
             start with the second tab.  For more information about auto-
             indent mode see [Ctrl] [ENTER] in this section.

        2.   The speaker will beep when the 20th tab is set.  When the speaker
             beeps this indicates that the count is about to start over at the
             first tab.  The tab function on both tabbing and setting the tabs
             is a rollover procedure.  When the last tab is reached, the
             program will start over with the first tab again.  There is no
             beep during normal tabbing,

        3.   The tabs can be set in any order desired.  The cursor does not
             have to tab from left to right.  For example 38,24,36,5,10,15,38,
             24,36,71,... is a perfectly legal tab setup.  The default tab
             setup is a repeating sequence of 2,12,22,42,2,12,22,42,2,12,22,42
             and so on.

        4.   Any tab can be set at any time.  Simply clear the tab count by
             pressing [ENTER].  Tab the cursor normally with the tab key while
             counting the number of tabs.  When the desired tab is reached,
             position the cursor on the proper column and perform step 3
             above.  *** See note 1 if setting tabs in auto-indent mode.

        5.   The tab setup is saved within the setup file E88SETUP.DEF which
             is discussed later in the command mode section.  To save the tab
             setup, the user must go into setup mode. (See command mode option
             "P.")

        Alphanumeric keys:
             Type as usual.

        >> 3.2.1 <<       ADDITIONAL INFORMATION ON FUNCTIONS

             The circular buffer referred to in the previous function
             descriptions is used as temporary storage area for deleted and
             saved lines.  The buffer is always available to accept 32 new
             lines.  Circular implies that the last 32 lines either saved or
             deleted may always be recovered from the buffer.  The lines are
             stored using "last in - first out" or "STACK" logic.
                                                                           10


        Mini-Merge .... Another use for the buffer
             The circular buffer contents may be transferred from one file to
             another.  The user may load the circular buffer with information
             from a file, select the (L.) option from the command window, load
             a new file, and dump the buffer contents into the new file.  This
             feature is great for copying a small subroutine or a couple of
             paragraphs from one file to another.  For larger transfers a full
             scale file merge and a block to disk transfer are also provided.
                                                                           11


        >> 3.3 <<                    COMMAND MODES

             Pressing function key [F1] will call E88's command window.  The
        command mode will allow the user to save, backup, or exit from editing
        as well as setup some editor defaults and perform block and disk
        operations.  The following information is provided to serve as a
        guide to the command mode functions.


        [Esc]
             The escape key will return to edit mode.

        (E.) END the edit and save this file
             This command will save the file to the drive and filename
             displayed in the upper left corner of the screen.  The program
             will return to DOS when the save is complete.

        (B.) BACKUP (create filename.bak)
             This command will create a backup file using the displayed
        filename (as above) but with the extension of BAK.  This command can
        be used as often as necessary during the edit to insure that a loss of
        power or other unthinkable event would not cause a loss of data.  Note
        that no backup file is automatically produced as with EDLIN.

        (F.) FILES (directory search)
             This command allows the user to display any directory or
             specified files in any directory.  The window will display some
             help information for using the search.  One may enter any valid
             path and combination of DOS wild cards as a criterion for the
             search, at the prompt.  Simply pressing [ENTER] without any
             criteria will result in a *.* display of the current default
             directory.  The pathname(s) and filename must be separated with
             a backslash (\) for the search to work properly.  Example:
             \PROCOMM\DOWNLOAD\*.MSG would display all the files with the
             extension of .MSG in the sub-directory DOWNLOAD of the directory
             PROCOMM a sub directory of the root.  Any valid path and
             filename may be used.  Refer to your DOS manual for information
             concerning filenames, wildcards, etc.

        (C.) CHANGE filename (for saving)
             This command allows the user to save a file under a different
             name.  This is useful in cases where a standard format is used to
             set up a source file.  The user can load the standard file,
             change the name, and save the edited file without effecting the
             standard load file.  When pressed, the current file specification
             will be displayed.  The user may then press [ENTER] to return
             with no change, or enter the new file specification.

        (D.) DEFINE BLOCK operation
             This command provides access to E88's extended block operations
             menu window.  Before this command is issued a text block should
             be defined by the user.  Failure to do this will result in a
             harmless error message which includes information on how to
             define a block.  A block is defined by pressing Ctrl. B with the
             cursor on the line one desires to mark.  This procedure should
             be performed twice, thus denoting the beginning and end of the
             block.  Pressing Ctrl. C will clear all block marks.  Selecting
             the (D.) command will open a window which offers the following
             block operations:
                                                                           12

          D./ INDICATES THESE ARE DEFINE BLOCK SUB-COMMANDS

          D./(D.) DELETE the marked block.
          S       This sub-command will remove the marked block from the file.
           U      This process is executed very fast and is not reversible, so
            B     the user is advised to use this with care.  Please note that
                  the disk file is not affected unless the edited file is
                  saved, so an error may be corrected by simply reloading the
                  file.

          D./(M.) MOVE the marked block.
          S       This sub-command will delete the marked block from its
           U      current location and insert it at a new location selected
            B     by the user.  Instructions are provided "on screen" as to
                  the new location selection process.  Basically, the user is
                  returned to a pseudo edit screen which allows full operation
                  of the screen control keys including vertical cursor keys,
                  page keys, home and end keys, Ctrl. page keys, and even the
                  pagers.  When the desired position in the file is reached
                  pressing [ENTER] will execute the move command.  Pressing
                  [Esc.] will abort the command and return the user to edit
                  mode leaving the original block unchanged.

          D./(C.) COPY the marked block.
          S       The copy sub-command operation is identical to the move
           U      command (see above) with the exception that the original
            B     marked block is not deleted.  This command also provides
                  a chaining feature allowing the user to make multiple
                  copies of the block.  This chaining option is prompted for
                  in the screen window after each copy is made.  [ENTER] and
                  [Esc.] provide control over the copy command as outlined
                  above under the move command.

          D./(P.) PRINT the marked block.
          S       The print sub-command will send the marked block to the
           U      printer.  This is useful for unattended printing of a
            B     section of text or for use with a print spooler or buffered
                  printer.

          D./(T.) TRANSFER marked block to disk.
          S       The transfer sub-command provides the E88 user with the
           U      very powerful ability to build a custom file from selected
            B     bits and pieces of other files.  This command will literally
                  allow you to "pick apart" one or more files and merge the
                  pieces into one file.  This command is extremely useful
                  for building program source code from subroutine libraries
                  or selecting text data of interest from a large file to be
                  included in another file.  When this command is issued, E88
                  will either create or APPEND a file called E88DTF.(default
                  extension) in the current directory with the data from the
                  marked block.  The E88 Disk Transfer File is saved as a
                  standard ASCII file including the EOF mark.  This file may
                  later be renamed, edited, or operated on just as any other
                  ASCII file.  To create a new E88DTF any existing E88DTF file
                  with the same extension must be either renamed or erased.

        (H.) HELP
             This command provides a quick reference to most of the key
             functions as well as some very important program information.
             Press the escape key to return to editing.
                                                                           13


        (K.) KEY file saved for this edit file
             The key file command will create a file which is named for the
             edit file but given the extension of PGR.  This file will reside
             in the same directory as the edit file and will be pathed to that
             directory automatically by E88.  The PGR file is a special file
             associated only with the edit file.  It contains all of the
             information in E88SETUP.DEF and also contains the currently set
             pagers when it was saved.  The use of E88's setup files is
             described in detail in a special section that follows below.

        (L.) LOAD another file (with options)
             This command allows the user to load and edit another file
             without leaving the editor.  The current file may be saved or
             discarded. See section 3.2.1 for information about how to use the
             (L.) command to merge data between files.

        (M.) MERGE data from another file
             This command, when executed, will prompt the user for the
             filename of the file to merge with the current edit file.  The
             merged data will be appended to the current edit file.

        (P.) PROGRAM Ctrl. keys and default extension
             This command will open a new window which will prompt the user
             for new characters for the Ctrl. F1 to F10 characters and the
             default filename extension.  Pressing [ENTER] without entering
             a new value for these parameters will leave them unchanged.  When
             the setup prompts have cycled through, the user will be asked to
             optionally create an E88SETUP.DEF file.  This file contains the
             set of tabs, special characters, and the default extension that
             were in effect at the time of the save.  The use of E88's setup
             files is described in detail in a special section that follows
             below.

        >> SPECIAL SUPPLEMENTAL INFORMATION ABOUT THE SETUP FILES <<

             This information is presented to allow the user to understand the
        loading process used by E88 so that the setup files may be used to
        their maximum advantage.  Since some confusion and complaints were
        acknowledged with older versions of E88 it was felt that a complete
        description of this process should be provided.  Please note that it
        is no longer necessary to create an E88SETUP.DEF file in each sub-
        directory to get the needed color changes.  The E8M.EXE (the machine)
        program will allow the user to define all internal defaults.

             When E88 is executed it first searches the ROOT directory of the
        current drive for the file E88SETUP.DEF.  If this file is found the
        editor will set its internal parameters to those specified by this
        file.  Thus, the user may create an E88SETUP.DEF file in the root
        directory of his disk and allow that file to serve as a MASTER setup
        file.  This eliminates the need to put a setup file in each sub-
        directory just to get the various parameters set like you want.

             Next, E88 searches the CURRENT directory for the file E88SETUP.
        DEF.  If found then it sets its parameters to those specified by
        this file.  This will allow the user to create many setup files, one
        in each sub-directory, so E88 can be used to do many different tasks
        without the need to reset the tabs, colors, or default extension.
        An example would be to put a setup file in the communications
                                                                           14

        directory that makes the default extension .DOC or .DAT . You could
        also put one in the directory where "C" programming is done to set
        the tabs up for indenting lines.  There are numerous places where
        these extra setup files may be useful.

             Next the edit file is prompted for or loaded, depending on the
        start-up method used.  As a final step E88 searches for a file with
        the same name as the edit file but with the extension .PGR.  This
        file, if found will again override all the previous parameters and set
        the pagers to the values they had when the .PGR file was created.  The
        .PGR file is saved and searched for in the same directory that the
        edit file resides in.  This file is mainly used for debugging source
        code since a programmer can set the pagers to areas in the edit file
        where he is working.  After exiting E88, he may then reload the editor
        later and instantly page to these preset areas.

             If none of these files is found then E88 uses its internal
        defaults.

        * * Please note that beginning with version 4.20, MRE Software is
        including The E88 Text Editor machine to produce a customized copy
        of the editor.  Henceforth the internal defaults may be set up
        exactly to the user specs.  Although E88 will still support the .DEF
        file methodology, many users will not need a .DEF file at all.

        (S.) SEARCH and [replace] string
             When this command is selected the user will be prompted for the
             search and replace strings.  The strings may be up to sixteen
             characters in length.  Once the strings are entered the user will
             then be given the option to do a standard search or a search and
             replace.  Pressing the [+] key will cause a replace all to occur.
             The user is advised to use the replace all with caution.  The
             search will begin at the current line position in the file and
             continue until the string is found or any key is pressed.  If the
             string is found the screen containing the find will be displayed
             and the cursor will be positioned on the first character of the
             string.  The user may then press [space] to skip and continue,
             [ENTER] to replace the string and continue, [\] to "drop out" to
             edit mode leaving the screen at the current position,  or  [Esc]
             to end the search.

             Entering a null string in response to the search string prompt
             will cause the command to be terminated.  Entering a null string
             for the replace string is OK however, since replacing with a null
             string simply deletes the search string from the file.  Audible
             feedback is provided to the user during the search process and
             all information concerning the search is displayed on the top
             line.  Pressing any key while the search is in progress will end
             the search.

        (T/W) TAB comp.( )/Word wrap( )  (x)=ON
             This command toggles tab compression and word wrap modes on and
             off.  The lower-case (x) indicates that the mode is active.
             Pressing the "T" or "W" key will toggle these states and the
             current status will be indicated on the screen.

             (T) on/off
             Tab compression compresses the file by using a process of
             imaginary tab stops in the disk file.  E88 will NOT automatically
                                                                           15


             turn tab compression on and off when a file is loaded depending
			             on whether tab characters are detected in the file.  This
             represents a change from earlier versions.  This method of file
             compression is completely compatible with MS-DOS.  The  MS-DOS
             "TYPE" command will properly expand and display a tab
             compressed file for example.  One recommended use for tab
             compression is for electronic mail files.  Since most "E" mail
             and BBS programs will expand tab compressed files properly, the
             use of this mode will reduce file size, and hence, upload time.
             Since the process is reversible, E88 may be used to expand or
             compress any text file and save it in the format desired.

             WARNING: Tab compression is not recommended for program source
             code since most compilers will not expand the inserted tab
             characters in data definitions.  If you do save a source file
             using tab compression, DON'T PANIC the process may be reversed
             by reloading the file with E88, manually turning tab compression
             off and then saving the file.  All general text files may be
             saved using tab compression however, and a fair savings in disk
             space can be expected.

             (W) on/off
             Word wrapping will cause the word being typed to be picked up
             and carried around to the beginning of the next line when one
             has typed off the right margin of the screen.  A new line will
             be inserted in the file to prevent overwriting the data present
             on the next line.  If the editor is in auto indent mode the word
             will be wrapped around to the auto indent position.

        (Q.)  QUIT * RETURN TO DOS * NO SAVE
             This option allows the user to return to D.O.S. without saving
             the file.  When this option is selected the user may then press
             [Esc] to return to D.O.S or any other key to return to editing.

                                >> END OF PART 1 <<
                                                                          EM1
                                   >> PART 2 <<


        >> SECTION 4 <<        THE E88 TEXT EDITOR MACHINE

                [Since this version of E88 is not accompanied by the
                E8M machine, this section of the manual is omitted.]
                                                                           A1



        >> APPENDIX A <<        E88 PROGRAM COMPATIBILITY

             This information is provided for users who desire to use E88
        in combination with, or as a supplement to, other MS-DOS applications.
        The information provided here was compiled primarily from user input.
        M.R.E. software request that all users who discover new uses for E88
        or encounter compatibility problems when using the editor with other
        programs, please drop us a note.  Include as much data as possible
        about how the program(s) work, or don't work, together.


        >> A.1 <<                 MEMORY RESIDENT PROGRAMS

        >> A.1.1 <<                       ProKey   (R)

             If you are a ProKey user you must either suspend ProKey, so that
        all aspects of E88 will be functional, or if you desire, you can set
        up a specific macro set that allows the E88 function keys to work
        normally.  Invoking E88 can then be done from a batch file that
        initiates your desired macro set as well as E88.  Of course, when
        through with E88, your same batch file can restore your usual macro
        set.

        >> A.1.2 <<                      SideKick    (R)

             E88 works well with SideKick.  The only reported problem is a
        slight loss of speed in cursor movement and screen scrolling.  This
        is thought to be due to SideKick's sampling of the keyboard input
        in search of its calling sequence.  As one user described it, "Its
        like swapping from your warp engines back to impulse drive".


        >> A.2 <<                    NON RESIDENT PROGRAMS

        >> A.2.1 <<                 ASSEMBLERS / COMPILERS

             There have been no problems reported using E88 with any assembler
        or compiler.  Several of the more popular programs that programmers
        report using the editor with are listed below.

        Microsoft  MASM 5.00  (R)        (C) Copyright Microsoft corp.
        Microsoft  C Compiler                    "         "      "
        Microsoft  Pascal compiler               "         "      "
        Microsoft  QuickBASIC compiler (R)       "         "      "
        Borland    Turbo Pascal (R)    (C) Copyright Borland International
        Ashton Tate  Dbase III  (C) Ashton Tate (command language files only)


        >> A.2.2 <<                  COMMUNICATIONS PROGRAMS

             Because of its small size and ease of use, E88 is widely used as
        the editor to match with ProComm (C) Copyright Datastorm Technologies
        Inc.  Since the editor produces standard ASCII output it may be used
        to create and edit electronic message or text files for use with any
        communications package.  Note that the tab compressed mode may be
        used with many "E" mail and BBS systems.  The savings in file size and
        upload time could go a long way toward paying the E88 registration
        fee.
                                                                           A2



        >> A.2.3 <<                   OPERATING SYSTEM FILES

             E88 is 100% MS/PC DOS compatible.  It is excellent for creating
        and maintaining .BAT and .SYS files.  The /E option is recommended
        when creating these files because it prevents the double prompts that
        sometimes occur when a .BAT file has completed execution.

        >> A.2.4 <<                    DATA BASE DATA FILES

             DO NOT attempt to edit a data base record file with E88 without
        first making a backup.  Although E88 is fine for editing the
        programming language for most data bases it is not compatible with
        the record files.  E88 terminates a line when the last non-blank
        character occurs.  Most data base programs use FIXED LENGTH records
        and fill in the lines with blank characters.  These files should be
        edited with the data base itself, not a text editor, since a change in
        the length in only one record will render the file useless !  If you
        are in doubt about the editor being compatible with any file MAKE A
        BACKUP FIRST !!!

        >> A.2.5 <<       SPELL CHECKERS AND OTHER PROGRAMS

             E88 users report that the Turbo Lightning (TM) spell checker
        works extremely well with E88.  This is another fine BORLAND (R)
        product. The user should create an environment for E88 that does not
        use destructive backspacing.  This can be done by setting backspace =
        None.

             Several E88 users, who are also engineers, report that E88 will
        fit and work fine with AutoCAD (TM) from Autodesk Inc. (R)
                                                                           B1



        >> APPENDIX B <<             THE E88 HELP SCREEN

             This appendix contains a printable reproduction of the E88 help
        screen for version 4.20.  It may be printed out and used as a quick
        reference card.  When editing with E88 the help screen may be called
        using either [Alt] [F1] or the command window option (H.).

        >> B.1 <<                  A PRINTABLE REPRODUCTION

 |------ Plain -----|------ Ctrl ------|----- Shift ------|------- Alt ------|
 | F1 = Com. window | F1 = special chr | F1 = Set RtMar.  | F1 = Instant help|
 | F2 = Printer call| F2 = special chr | F2 = No action   | F2 = Print+arrows|
 | F3 = TOF/pager   | F3 = special chr | F3 = Set pager   | F3 = Print ctrl=1|
 | F4 = Call pager  | F4 = special chr | F4 = Set pager   | F4 = Print ctrl=2|
 | F5 = Call pager  | F5 = special chr | F5 = Set pager   | F5 = Curline=TOS |
 | F6 = Call pager  | F6 = special chr | F6 = Set pager   | F6 = Recover last|
 | F7 = Call pager  | F7 = special chr | F7 = Set pager   | F7 = Rep buf.load|
 | F8 = EOF/pager   | F8 = special chr | F8 = Set pager   | F8 = Load buffer |
 | F9 = Insert line | F9 = special chr | F9 = No action   | F9 = Toggle attr.|
 | F10= Ins. buffer | F10= special chr | F10= No action   | F10= Delete line |
 | PgU= screen up   | PgU= top of file |------------------|------------------|
 | PgD= screen down | PgD= end of file |   * E88 CUSTOM HELP SCREEN AREA *   |
 | Hm = scroll 1 up | Hm = home cursor |                                     |
 | End= scroll 1 dn | End= end of line | Use this area to add your own notes |
 | Ins= insert mode | -> = next word   | for using E88.  This area may be    |
 | Del= delete char | <- = prev word   | personalized by using the E88 Text  |
 |------------------|------------------| Editor Machine.                     |
 | Shift TAB sets tab at cursor pos.   |                                     |
 | ENTER will save screen & reset the  |        - help us help you -         |
 | tab count to zero. (1 in ^AI mode)  | S U P P O R T   S H A R E W A R E ! |
 | Ctrl. Enter will toggle auto indent.|         Register your copy.         |
 | * Press Esc. to exit this screen.   |   See the .DOC file for more info.  |
 |-------------------------------------|-------------------------------------|

        >> B.2 <<                A NOTE ABOUT THE HELP SCREEN

             This is a reproduction of the default E88 help screen.  The E88
        text editor machine has the ability to produce a dynamic help screen
        depending on changes made by the user.
                                                                           C1


        >> APPENDIX C <<                LICENSE / WARRANTY

        >> C.1 <<                       LICENSE

             E88 version 4.20 is being distributed under the "shareware" or
        user supported concept.  This software is NOT free software.  The
        use or reproduction of this software outside of the limits specified
        in this license agreement is prohibited.

             Non-registered users are granted a limited license to use this
        software for a period not to exceed thirty days.  During this period
        they should test and evaluate the software to determine if it will
        meet their needs. The use of this program beyond this limited time
        period requires registration.  Non-registered users are not allowed
        to distribute this software without the express written permission
        of Microsystems Research & Engineering.  The only exceptions to this
        distribution restriction are SYSOPS of electronic bulletin boards and
        distributors of public domain and user supported software.  SYSOPS
        and software distributors must abide by the copying restrictions
        specified below.

             Registered users are granted the right to use E88 on only one
        computer at any time.  Site licensing agreements are available for
        businesses, corporations, and government agencies.  Registered users
        are also granted the right to copy and distribute E88 subject to the
        following conditions.

             E88 must be copied in its original unmodified form with the
             exception that the serial number of the distributor may be
             be changed to the new distributor's serial number.  This
             exception only applies to registered users, SYSOPS who are not
             registered users must not alter the files in any manner.

             All of the files must be included in the copy.

             No fee or charge may be requested or paid to any licensee by the
             recipient of the copy.

             E88 may not be distributed in conjunction with any other product
             without the express written consent of MRE Software.

                                                                           C2

        >> C.2 <<                       WARRANTY


             Microsystems Research and Engineering makes no warranty of any
        kind, express or implied, including without limitation, any
        warranties of merchantability and or fitness for a particular purpose.
        Microsystems Research and Engineering shall not be liable for any
        damages, whether direct, indirect, special or consequential arising
        from a failure of this program to operate in the manner desired by the
        user.  Microsystems Research and Engineering shall not be liable for
        any damage to data or property which may be caused directly or
        indirectly by use of the program.

             IN NO EVENT WILL Microsystems Research and Engineering BE
        LIABLE TO YOU FOR ANY DAMAGES, INCLUDING ANY LOST PROFITS, LOST
        SAVINGS OR OTHER INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF
        YOUR USE OR INABILITY TO USE THE PROGRAM, OR FOR ANY CLAIM BY ANY
        OTHER PARTY.


        >> C.3 <<                       TRADEMARKS

             IBM, IBM PC-XT-AT-PCjr-PS/2 and PC-DOS are registered trademarks
        of International Business Machines Corporation.

             Microsoft, Microsoft BASIC, MS-DOS, MASM, and Microsoft Macro
        Assembler are registered trademarks of Microsoft Inc.

             ProComm is a registered trademark of Datastorm Technologies Inc.

             PC-BOARD is a registered trademark of Clark Development Co.

             Other tradenames are referenced where they occur.
                                                                           D1


        >> APPENDIX D <<                REGISTRATION



        >> D.1 <<               WHY SHOULD I REGISTER ?

             E88 is distributed under the shareware concept.  Shareware is a
        unique marketing concept born of the computer revolution.  Users are
        allowed to obtain complete working programs to freely test and
        evaluate for a limited time period.  If they find the programs useful
        then they are required to register their copy of the program.  The
        small registration fee goes to support the authors and encourage them
        to continue to improve the software.

             Shareware depends on honesty.  The computer programs are freely
        distributed as finished products.  The authors of this type of program
        depend completely on the honesty of end users for compensation for
        their work.  If you use a shareware program, any shareware program,
        please be honest and register your copy.  Shareware is not free
        software.  It requires just as much work and effort to produce as
        the highly advertised commercial products, but it usually sells for
        a small fraction of the price.

             Registering a shareware program also gives you the unique
        opportunity to do something that is virtually impossible with
        most commercial software.  When you register, your comments and ideas
        are usually communicated directly to the author of the program and the
        response you will receive is from him/her. (it is in this case)  This
        fact assures you that your ideas are heard by someone who is paying
        attention.  It is also from this pool of suggestions and ideas that
        future improvements are spawned.

             Shareware companies in general don't spend millions of dollars
        doing "market research" or advertising the heck out of their products
        in order to sell you something that you have only read about.  We
        lay it out there on the line....here it is....fully functional....you
        like it, please buy it, you don't .... erase it.  We also don't charge
        you $400.00 for our products.  Don't take this the wrong way however,
        commercial software is a necessity.  LORD knows that this program
        would not exist if it weren't for MS-DOS and MASM. (which are quality,
        reasonably priced, and supported).  Shareware that is of high quality
        at low prices does tend to keep all software prices lower and is
        therefor a necessity in its own right.  When you support shareware
        you not only receive the right to use a good program (usually with
        free updates) but you also make a statement to the entire software
        industry.  Make the free world economy work!  Register shareware.
                                                                           D2

        >> D.2 <<               REGISTRATION FEES

             The registration fee for E88 version 4.20 is only $20.00.
        This is one of the more reasonably priced editors available anywhere.
        We know of no comparable commercial product that offers so much, for
        so little, to so many!

        >> D.2.1 <<          SITE LICENSE REQUIREMENTS

             Site licenses are available for $15.00 per copy to qualified
        businesses, corporations, individuals, and government agencies.  This
        represents a $5.00 per copy or 25% savings.  A minimum of five copies
        must be registered to qualify.  Site licensed organizations will
        receive a 5.25 inch diskette which contains a current version of the
        editor.

        Future updates of the site license copy are provided as follows.
        The first update is free.   All others $20.00
        Prices are for a titled master copy and cover all charges including
        shipping.  Licensees will be informed when updates become available
        and given the option to update at will.  There is NO penalty for
        skipping updates.

        Businesses may of course register less than five copies at the
        individual copy price.


        >> D.3 <<              THE M.R.E SUPPORT BBS

             M.R.E. Software provides a support bulletin board system for
        distributing the latest versions of E88, on-line registration, and
        processing user questions and suggestions.  We are running the latest
        version of PC-BOARD and our primary SYSOP is Tom Ford.  E88 author,
        Emery Wooten may also be reached via the BBS.

        Non-Registered users:
            Will be given limited access to the BBS.  We are  currently
        running an "open" system and no delay is imposed requiring you to
        make two calls to gain access.  Non registered users will be provided
        with access to the main message base, the MRE file area, and the
        on-line registration procedure.  You will be able to download the
        latest version of E88 and a few other selected files.  Questions and
        suggestions from non-registered users will be processed as time
        permits.

        Registered users:
             Will be given complete access to the BBS with full time
        allocation.  You may access our base of selected quality shareware
        and public domain software and download the latest versions.
        Registered users will also have access to the MRE, and other
        conference areas.  The MRE conference is a lively discussion of E88
        and other MRE products and future plans.  Other conferences discuss
        the news and views of the IBM/compatible industry.  Registered users
        will be given priority support and consideration.

        Telephone: (601) 494-8078  <data>   24 hours/day   7 days/week

        You are invited!
                                                                           D3

        >> D.4 <<                  REGISTRATION FORM

             This section contains the E88 registration form.  It is meant to
        provide users with a convenient means to register.  You may fill out
        the form right on your screen and print it using E88.  Thank you for
        your support.

      * If you are filling out the form using E88, simply type over the
        underlines.  They are provided for users who prefer to write.  We
        prefer that you type or print clearly.

        To print, place the cursor on the next line and press [F2].
                                                                           D4
                                   REGISTRATION FORM   ver 4.20

        YES!  I would like to register my copy of E88.  I have read the
        information contained in appendix C and D as well as tested the
        software and would like to support the efforts of MRE software.

        Distribution point ID. number:  0101549B5D   For office use only
                                                     please do not alter.

        Name .............:
        Street Address ...:
        City .............:
        State ............:
        Zip Code .........:

        Place an X by those that apply.

        _  I am enclosing $20.00 per copy for 1 to 4 copy(s) registration.
           *  Supplied on diskette(s) for $25.00 per copy for 1 to 4 copies.
           *  Mississippi residents must add 6% sales tax.
           *  International users please send a money order in U.S. dollars

        _  Requesting site license for _______ copies at $15.00 per copy.
           *  A minimum of 5 copies is required to qualify for site license.
           *  Supplied on diskettes for $17.50 per copy for 5 or more.

        Enclosed :   - Check   - Money Order   - Company PO.

        -  I prefer to purchase using my VISA/MasterCard.

           - VISA       - MasterCard

           Card #: ____  ___  ___  ___      Expires date:    /

           Card issuing bank name: _________________________________________

           your signature ________________________________________

           You MUST sign this form if using a credit card.
         =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

        *** The following info is optional. Answer only those you wish.***

        Company/Title ............:
        Age ......................:
        Where did you obtain E88? :
        Computer type/brand ......:
        Printer ..................:
        Monitor ..................:

        What do you use E88 for ? :  _ Programming  _ General editing  _ Other

        If other please explain:


        I have the following comments / suggestions about E88:







        Send to: M.R.E. Software    150  Jones St.   West Point, Ms.  39773

```
{% endraw %}

## FILE1303.TXT

{% raw %}
```
Disk No: 1303
Program Title: SCRDES, PRNSET
PC-SIG version: 1

SCRDES is a full-screen text/graphics editor designed to ease the coding
of custom screens, such as menu screens, data-entry forms and help
screens, into programs.  The editor was created for use with CGA and
EGA, but it will also function with a monochrome card, albeit with less
distinctive effects.

The program was designed primarily to produce binary files of the type
"character, attribute, character, attribute" for inclusion in Assembly
language programs, or to be read directly from a file to the screen
buffer in a high-level language, but it will also produce ASCII text
files of the form character, character, CR/LF, character, character,
CR/LF (25 lines) suitable for use in interpreted languages such as BASIC
or dBASE III.

PRNSET is a universal printer-setting program that takes its data from a
file, which you can make with any text editor.  This feature makes it
possible to set the print control symbols for any printer and select and
organize the instructions you want to have in PRNSET's repertoire.  It
can operate interactively through a menu, from a batch file, or directly
from the DOS command line.  It is nonresident.

Usually you would use a printer setter to prepare the printer before
printing out a plain text file.  A program which sends its own printer
control instructions (like a wordprocessor) would override anything you
sent it with PRNSET.  Occasionally, however, you can set something which
your program doesn't know about.  If your program can't switch between
draft and letter quality, for instance, you may find you can set one of
these with PRNSET, and the program will leave it that way.  Everything
after PRNSET is optional.  If you enter PRNSET bare, it will use
PRNSET.DAT as the default file, take its data from that, and give you a
menu to choose from.

Usage:  Color Screen Form Designing; Printer Setter.

Special Requirements:  An EGA card and DOS 3.0 or higher.

How to Start:  Type GO (press enter).

Suggested Registration:  $15.00

File Descriptions:

SCRDES   DOC  Information and instructions.
SAMPLE   SCR  Sample file.
SAMPLE   INS  Sample file.
SCRDES   COM  Program file.
PRNSET   EXE  The operating program.
PRNSET   DOC  User's Manual.
PRNSET   DAT  The default data file for PRNSET.EXE.  As supplied,
              it's correct for an Epson LQ-800.
FX-80    DAT  Altenative data file for Epson FX-80 printer.
FX-86    DAT  Data file for Epson FX-86e printer.
IBM      DAT  Data file for IBM "Graphics" printer.
LQ-800   DAT  Data file for Epson LQ-800 printer.
OKI      DAT  Data file for Okidata 92 printer.
XXXXXX   DAT  There may be other data files.  Their names suggest
              what printers they're for.
COUNTPGS EXE  An extra utility.  Use it to count the pages in a
              File before you print it.  Instructions for it are
              in COUNTPGS.DOC.
COUNTPGS DOC  Documentation for COUNTPGS.
E88      EXE  A simple ASCII text editor.  Use it if your word
              Processor won't do straight ASCII.  Instructions for
              it are in E88.DOC.
E88      DOC  Documentation for E88.
README        Instructions and file explanations.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## PRNSET.DOC

{% raw %}
```


















                                       PrnSet                                       PrnSet
                       Universal Printer Setter (Non-Resident)

                                     Version 2.2




























                                       Programmer: R. N. Wisan, March, 1988
                                      37 Clinton Street, Oneonta, NY, 13820

                                                      Not Copyright: Enjoy.
          PrnSet 2.2                                                 Page i






                                        Contents                                        Contents




                  1  What PrnSet does  . . . . . . . . . . . . . . . 1

                  2  The Files . . . . . . . . . . . . . . . . . . . 1

                  3  Running PrnSet  . . . . . . . . . . . . . . . . 2

                     3.1  The Interactive Mode . . . . . . . . . . . 2

                     3.2  The Command Line Mode  . . . . . . . . . . 4

                  4  Making a Data File for Your Printer . . . . . . 5

                     4.1  Helpful Hints About Data Files . . . . . . 7

                  5  Screen Colors and Other Things  . . . . . . . . 8

                     5.1  Screen Colors  . . . . . . . . . . . . . . 8

                     5.2  Debugging Help . . . . . . . . . . . . . . 9

                  Appendix A:  Update History  . . . . . . . . . .  10
          PrnSet 2.2                                                 Page 1




                                 1  What PrnSet does                                 1  What PrnSet does


          Prnset is a universal printer setting program:

              - It gets its data from a data file, which you can make with
                any text editor.  This makes it possible

                  a. to set the print control symbols for any printer

                  b. to select and organize the instructions you want to
                     have in PrnSet's repertoire.

              - It can operate interactively through a menu, from a batch
                file, or directly from the DOS command line.

              - It needs DOS 2.00 or higher.

              - It is non-resident.  It lives on disk.

              You normally use a printer setter to prepare the printer be-
          fore printing out a plain text file (like this document).  A
          program which sends its own printer control instructions (like a
          word processor) would over-ride anything you sent it with PrnSet.
          Occasionally, however, you can set something which your program
          doesn't know about.  If your program can't switch between "draft"
          and "letter quality," for instance, you may find you can set one
          of these with PrnSet, and the program will leave it that way.


                                     2  The Files                                     2  The Files


              As provided: PrnSet comes in the following files:

          PRNSET.EXE   The operating program.

          PRNSET.DOC   This Manual

          PRNSET.DAT   The default data file for PRNSET.EXE.  As supplied,
                       it's correct for an Epson LQ-800.

          xxxxxx.DAT   There may be other data files.  Their names suggest
                       what printers they're for.

          COUNTPGS.EXE An extra utility.  Use it to count the pages in a
                       file before you print it.  Instructions for it are
                       in COUNTPGS.DOC.

          E88.EXE      A simple ASCII text editor.  Use it if your word
                       processor won't do straight ASCII.  Instructions for
                       it are in E88.DOC.
          PrnSet: Running PrnSet                                     Page 2


                                  3  Running PrnSet                                  3  Running PrnSet


              To run PrnSet, both PRNSET.EXE and PRNSET.DAT must be on the
          default disk or somewhere on the DOS path, where PrnSet can find
          it.  The full syntax for starting PrnSet is:

                 PRNSET [[d:][\path]datafile] [{+|-}inst[/n]]...

          Note that everything after PRNSET is optional.  If you enter
          PRNSET bare, it will use PRNSET.DAT as the default file, take its
          data from that, and give you a menu to choose from.  To use a
          different data file, enter the name of the file with, optionally,
          a drive and path designation.  If you give no suffix, PRNSET will
          default to .DAT.  (If you've set a DOS path, PrnSet will search
          all over it for your data file.  You really need to give a path
          specifier only if the file you want is NOT on the path.)

              That's enough to get you going in the interactive mode.  The
          "[{+|-}inst[/n]]..." options concern the command mode, and we can
          put off explaining it to Section 3.2.


          3.1  The Interactive Mode          3.1  The Interactive Mode


              To start PrnSet, type PRNSET and press <Enter>.  Shortly you
          should see a menu something like this:

          -------------------PrnSet for Epson LQ-800----------------------
          | F1 gets help       <Esc> gets you out.    F3 to change colors|
          |--------------------------------------------------------------|
          | Misc         || Fonts        || Style        || Format       |
          |--------------||--------------||--------------||--------------|
          |[Reset Prn   ]|| Pica         || NLQ          || LMargin      |
          | ManualStyle  || Elite        || Cond         || RMargin      |
          | VerySmall    || 15 cps       || Wide         || 8 Line/inch  |
          | Tiny         || Proportional || Underline    || 6 Line/inch  |
          |              ||              || Emph         || n/180"/Line  |
          |              ||              || Dbl Strike   || SkipOver     |
          |              ||              || Italic       ||              |
          |              ||              || SpScr        ||              |
          |              ||              || SbScr        ||              |
          |              ||              || DownLd Char  ||              |
          |              ||              ||              ||              |
          |--------------------------------------------------------------|
          | Arrows move; <Enter> turn on/off; F10 sets prn;  Del clrs;   |
          ----------------------------------------------------------------

          If anything's gone wrong, you'll see a message like "Can't find
          PRNSET.DAT" in the bottom line.  In such a case, check to make
          sure PRNSET.DAT is on the default drive or at least somewhere on
          the DOS path.  On the other hand,
          PrnSet: The Interactive Mode                               Page 3


            =====================EMERGENCY MESSAGE=======================
            | With the wrong combination of your monitor and PrnSet's   |
            | colors, you might be unable to SEE the menu.  PRESS F3.   |
            | You'll get another fuzzy screen with one readable line:   |
            |                                                           |
                If you can't read the menu above, press the spacebar.            |   If you can't read the menu above, press the spacebar.   |
            |                                                           |
            | Press the spacebar and everything will come clear.  Then  |
            | <Esc> to exit & press Y  when asked, to save the setting. |
            | To manage this, PRNSET.EXE must be in the default drive.  |
            =============================================================

              Assuming all's well, you must first specify what instructions
          you want to send the printer; then you send them.  The menu ex-
          plains itself pretty well, and you can get help by pressing F1.


          To Specify What to Send,

           1. Use the cursor pad keys to move the emphasized bar to the in-
              struction you want to give.  Then press <Enter>.  One press
              toggles the instruction ON ("Tell the printer to turn this
              feature on"), another <Enter> toggles it OFF ("Tell the
              printer to turn this off"), and a third toggles it back to
              silent ("Say nothing to the printer about this feature").
              Some instructions (like "Pica") have no OFF instruction, so
              they just toggle between ON and silent.  Some instructions
              (like "LMargin") need a number, so when you toggle it on,
              you're asked for "Number."  Type in what you want and press
              <Enter>.

                                           or,

           2. Just type the first two letters of the instruction you want
              (uppercase or lowercase doesn't matter).  "EL" for "Elite" is
              the equivalent of moving to "Elite" and pressing <Enter>.


          To Send the Instructions:

              Press F10.  As you enter instructions, the ones that are live
          are highlighted.  They aren't sent to the printer until you press
          F10.  Then, you get a solemn announcement to that effect, and you
          can press either Esc to quit or any other key to continue in
          PrnSet.  (F9, by the way, does the same thing.)

              If you send several instructions at once, they'll be sent NOT
          in the order you punched but in the order of the screen, from top
          to bottom for the left column, then top to bottom for the next
          column and so on.  Thus, if a later instruction cancels an ear-
          lier one, thats what you'll get.  For example, if you set "Pica
          ON," "Elite ON," "8 Line/inch ON," "6 Line/inch ON" from the menu
          above.  It would turn on Pica, then turn on Elite (which cancels
          Pica), then 8 lines per inch, then 6 lines per inch (canceling 8
          per inch), and you'd wind up with Elite at 6 lines per inch.
          That's why "Reset Prn" is put first, so it can clear the printer
          before anything else is sent.
          PrnSet: The Interactive Mode                               Page 4


              Unless you tell it to, PrnSet never clears the printer.  That
          means that successive sendings, even successive runs of PrnSet
          are cumulative.  If you send "Elite", quit PrnSet, run PrnSet
          again and send "Wide", you have a printer set for Wide Elite.


          If You've Made a Mess:

              You can clear PrnSet by pressing Del.  That turns all in-
          structions silent and puts the bar back at upper left.  This does
          nothing to the printer.  It just lets you start PrnSet afresh.


          To See What You've Done:

              Press F5, and PrnSet will send a test line of type to the
          printer.


          3.2  The Command Line Mode          3.2  The Command Line Mode


              When you know what's on PrnSet's menu, you may prefer to skip
          all the foofaraw and enter what you want directly at the DOS com-
          mand line.  Naturally, if you want to run PrnSet from a batch
          file, you have to use this method.  To do it, after "PRNSET " or
          "PRNSET filename ", put a "+" (to say "Turn on") or a "-" ("Turn
          off") and the name of the feature you want turned on or off.
          Thus:

                 PRNSET +ELITE

          turns on Elite without going through the menu.  If all's well,
          PrnSet will confirm what it sent to the printer.  Otherwise, you
          get an error message.  You can send several instructions at once.
          To turn on Elite, turn off italics, and set the left margin to 12
          characters, you enter:

                 PRNSET +ELITE -ITALIC +LMARGIN/12

          As a matter of fact, you need only the first two letters of the
          instruction (that's all PrnSet will notice) and they can be upper
          or lower case.  You'd get the same effect with:

                 PRNSET +EL -it +Lm/12

          Notice how the number for LMargin is entered with a slash, as
          /12.  Remember, the full syntax for starting PrnSet is:

                 PRNSET [[d:][\path]datafile] [{+|-}inst[/n]]...
          PrnSet: The Command Line Mode                              Page 5


          Here are the rules for instructions:

                                 ____              - Each instruction must begin with either + or -.

              - Each instruction that requires a number must end with /n
                (where n is the number).

              - Spaces must be used to separate instructions from each
                other.

              - There must be no spaces in the instruction.

              In the command line mode, unlike the menu mode, instructions
          are executed in the order in which they are given.  Thus:

                 PRNSET +pica +elite

          leaves the printer set for elite, while

                 PRNSET +elite +pica

          leaves it set for pica.


                        4  Making a Data File for Your Printer                        4  Making a Data File for Your Printer


              Everything PrnSet knows about your printer it gets from the
          data file.  By default, it uses file PRNSET.DAT, though you can
          tell it otherwise when you load.  If you have several printers,
          you might want to keep separate data files for them and tell
          PrnSet to use the one you want when you load it.

              To make a data file, you can use any text editor that can
          refrain from putting funny characters in the files.  (WordStar
          works, for example, but only in the nondocument mode).[1]  You
          will need to work out in advance a list of the features you want
          to control from the menu and the ASCII numbers of the symbols the
          printer must be sent to turn each of those features on and off.
          You'll need to explore your printer's manual to find these.

              Here are the rules for a PrnSet data file:

           1. Comments: semicolons and anything on a line after a semicolon
              will be ignored, so you can use semicolons to put REMarks in
              your file.  Blank lines also are ignored.


          -----------


          1. If you have nothing else, EDLIN, the silly line editor that
             comes with DOS would do.  Since I wouldn't wish EDLIN on a
             dog, I've put a simple text editor called E88 on the disk.
             Please note that E88 is not in the public domain.  It's a
             shareware program, copyright by M.R.E. Software.  If you find
             you use it, you ought to pay up the reasonable price asked.
          PrnSet: Making a Data File for Your Printer                Page 6


           2. Title: The first line is a title.  What you put here will
              appear at the top of the menu.  You can use up to 12 charac-
              ters.  Best use the name of the printer.

           3. Categories: Any line (after the first) which does not contain
              an equal sign ("=") will be taken as the name of a category.

                - The category name may have up to 12 characters.

                - You may have up to four categories, and each category may
                  have up to 17 instruction items in it.

                - Items entered after a category name will be assigned to
                  that category.  If no items are entered for a category,
                  the category is ignored.  (If you enter two category
                  names with nothing between, only the second one counts.)

           4. Items: The format for an instruction item goes like this:

                     Name= n,n,n...[#|$n] [m,m..]

              That means:

                a. There must be a name (up to 12 characters) followed by
                   an equal sign followed by at least one series of
                   numbers.

                b. The first series of numbers (n,n,n...) must be the ASCII
                   numbers (decimal) for the symbols to turn ON the in-
                                                  _______                   struction.  I say again, ASCII numbers.  You can't use
                   letters.  "Escape E" must be entered as 27,69.

                c. The numbers must be separated with commas.  There must
                   be no spaces in the string.

                d. At the end of the ON sequence, a Dollar sign with a
                   numeral ($1 to $4) or a pound sign (#) will tell PrnSet
                   to get a number from the user for the instruction (like
                   LMargin).  "#" tells PrnSet to get the number in the
                   form of a byte.  "$n" tells it to get the number in the
                   form of a string of n numerals.  If necessary, zeros
                   will be prefixed to make up the n characters: given $4,
                   PrnSet will turn the entry "23" into "0023".

                e. After the first string, you can put a space followed by
                   a second string of numbers to provide a turn-OFF in-
                   struction.  If there's no OFF string, then:

                     - If the instruction takes a number (ON string ends
                       with # or $n), PrnSet will send ON 0 for off (that
                       would work for LMargin)

                     - If it doesn't take a number, PrnSet will send no OFF
                       signal at all.  It will toggle between ON and si-
                       lent.  (That's how "Pica" and "Elite" work on
                       Epsons.)
          PrnSet: Helpful Hints About Data Files                     Page 7



          4.1  Helpful Hints About Data Files          4.1  Helpful Hints About Data Files


              To see how a file should look, see my PRNSET.DAT or any of
          the other DAT files supplied as a model.  A few hints:

              - Each category will occupy one column on the menu, and it
                can have 17 instruction lines.  If you need more than that,
                you'll have to devote a second category like "Fonts" and
                "Fonts Cont'd".

              - Remember that the order in which you put things in the data
                file is the order in which they will appear on the screen,
                and that is the order in which (in the menu mode) they'll
                go to the printer.  Consider what must be done before what.
                If you use a tab set, it may matter whether you send it
                before or after a font width change.  Put "Reset Printer"
                first.  (Pointless to send other things and then reset, but
                you may want to reset and then send.)

              - Be careful what names you use.  PrnSet recognizes only the
                first 2 characters for command line entries or keyboard
                interaction.  (It's not case-sensitive; upper and lower
                case count the same.) If you use "Superscript" and "Sub-
                script", PrnSet will treat them both as "SU" and you'll get
                whichever comes first.  That's why my PRNSET.DAT calls them
                "SperScript" and "SbScript".

              - Some Printers have a reset symbol, as Esc "@" (27,64) will
                re-initialize almost any Epson.  Some, like the IBM "Graph-
                ics" printer don't.  You can make a sort of reset instruc-
                tion by concocting a string that turns off everything you
                might have turned on.  PrnSet will accept up to 40 numbers
                per instruction.

              - It's tempting to put everything the printer can do into
                your data file.  It may be better to keep the menu clean.
                If you never use international alphabets, why clutter the
                menu with them?  It's easy to edit your data file if you
                need to expand your offering.  As a matter of fact, you
                might make several files for different purposes.  Copy the
                one you want to PRNSET.DAT or just call for what you want
                at the command line.

                The PRNSET.DAT supplied is simply what I'm using on my
                Epson LQ-800 at present.  This printer will do lots of
                things I haven't entered, but so far I'm not using them.
                Explore your printer manual.

              - You can, in a sense, create features your printer doesn't
                have by combining instructions it does have.  For instance,
                my PRNSET.DAT (for an Epson LQ-800) contains:

                    Manual Style= 27,103,27,48  27,80,27,50
                    Very Small= 27,83,0,27,80,15,27,51,16  27,50,18,27,84
                    Tiny= 27,83,0,27,77,15,27,51,16  27,50,18,27,80,27,84
          PrnSet: Helpful Hints About Data Files                     Page 8


                "Manual Style" is 15 char/inch and 8 lines/inch, which just
                puts an 8.5" x 11" pica layout onto a 5.5" x 8.5" page for
                IBM manual size binders (provided the file is paged with
                FF's).  "Very Small" and "Tiny" are both superscript at
                16/180 inches per line.  "Very Small" uses condensed pica
                at 17 characters per inch, while "Tiny" uses condensed
                elite and puts 20.  I may have overdone it.

              - If you have trouble, you can make PrnSet report exactly
                what data it's getting from your file.  See Section 5.2,
                p. 9 below.



                          5  Screen Colors and Other Things                          5  Screen Colors and Other Things


              PrnSet has a built-in reconfiguration procedure.  From its
          regular menu, press F3, and you'll get a different menu:

          -------------------------------------------------------------
          |                                                           |
          |                   Reconfiguration Menu                    |
          |                                                           |
          |                   F1   Plain text   F2                    |
          |                                                           |
          |                   F3   Emphasized   F4                    |
          |                                                           |
          |                   F5     Frame      F6                    |
          |                                                           |
          |          To adjust foregrounds use F-keys plain           |
          |          For backgrounds, use Ctrl with F-keys            |
          |                                                           |
          |               To file current data press F9               |
          |                                                           |
          |                     <Esc> gets you out                    |
          |                                                           |
          -------------------------------------------------------------

          From this menu, you can do two things.  You can adjust the color
          scheme, and you can make a record of the printer data read from
          the .DAT file to help debug a new .DAT file.



          5.1  Screen Colors          5.1  Screen Colors


              At the Reconfiguration Menu, press the indicated function
          keys and the menu will change colors to show what you've done.
          The colors cycle.  Odd-numbered keys (F1, F3, F5) take you round
          the cycle one way; even-numbered keys go around the other way.
          Pressing the keys plain adjusts foreground colors.  To adjust
          backgrounds, hold down Ctrl while you press the keys.

              You set only those three colors.  The moving cursor bar in
          PrnSet's regular display is always the reverse of "Plain text."
          PrnSet: Screen Colors                                      Page 9


          Experiment to your heart's content.  What looks best depends on
          your taste and your monitor.  Here are two settings I like:

              Plain text:      Green on Black     White on Blue
              Emphasized:      White on Black     Intense Cyan on Blue
              Frame:           Black on Brown     Cyan on Blue.

              When you like the setting, press <Esc>.  Before it lets you
          out, PrnSet will ask

                       Record this setting permanently? (Y/N)

          If you press Y, PrnSet will make the change permanent by rewrit-
          ing part of PRNSET.EXE.  This works only if PRNSET.EXE is on the
          default drive/directory, so make sure you have it there when you
          want to reconfigure.


          5.2  Debugging Help          5.2  Debugging Help


              When you're writing a printer data file, mistakes are easy to
          make and often curiously hard to spot.  For this reason, I've
          left a debugging feature in the program.

              If PrnSet is unable to load its data because of a defect in
          the .DAT file (too much data, too many categories, etc.) it will
          create a file called PRNSET.LST on the default drive/directory
          contining a record of the data it succeeded in getting.  If the
          data loads all right but the printer doesnt' seem to be doing
          what you meant, you can force PrnSet to create a PRNSET.LST by
          pressing F9 at the Reconfiguration Menu.

              PRNSET.LST should contain the title, each of your category
          names, and all the instructions.  For each instructions you see

              - its name (with the two-character key PrnSet has constructed
                for it)

              - whether it takes a number, some numeral characters or
                nothing at all

              - the numbers (decimal) of the turn-on and turn-off instruc-
                tions.

          These data should all be the same as what you've put in your data
          file, of course, but note that the numbers in PRNSET.LST are not
          just reprinted from your file.  They're reconstructed from the
          data as PrnSet absorbed it, so you can tell what's going down
          right and what isn't.
          PrnSet: Update History                                    Page 10




                             Appendix A:  Update History                             Appendix A:  Update History


          Version 1.1 December, 1986

          I'd appreciate word from people whose printers need things PrnSet
          can't give them.  Okidatas, it turns out, need some numbers (left
          margin, for instance) entered as strings.  So provided in 1.1.

          Provision made for comments in data file.


          Version 1.2 February, 1987

          Minor change: screen colors specified with typed constants.
          Colors can be jiggered with DEBUG or disk editor without source
          code or Turbo compiler.


          Version 1.3 June, 1987

          Another minor change to make recovery from off-line printer more
          graceful.  A minor cost for this is giving up the option to
          redirect output to a file by changing a constant in the source.


          Version 1.4 November, 1987

          Reconfiguration option added, so user no longer needs source
          code.  Just to be sure, maximum length of print control strings
          is increased from 24 to 40.  Help screen prettied up some, too.


          Version 1.5  Also November, 1987

          Reconfiguration is more convenient than in 1.4.  Can be done from
          inside PrnSet (F3), and its screens are more polished.


          Version 2.1  December, 1987

          Rewritten in Turbo Pascal 4; smoothed and slightly shrunk; now
          makes an .LST record automatically if error prevents loading
          data.  Reconfiguration procedure simplified.


          Version 2.2  March, 1988

          Better handling of disk and printer errors.  Reconfiguration also
          recolors E88.EXE if it's on the default drive.

                                       Programmer: R. N. Wisan, March, 1988
                                      37 Clinton Street, Oneonta, NY, 13820
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1303

     Volume in drive A has no label
     Directory of A:\

    SAMPLE   INS       153   2-08-88   5:05p
    SAMPLE   SCR      4000   3-28-88   8:59a
    SCRDES   COM     60087   5-03-88  10:15a
    SCRDES   DOC     16586   5-06-88   8:55a
    FILE1303 TXT      3373   2-23-89   1:29p
    COUNTPGS DOC      3074   4-26-88  10:55p
    COUNTPGS EXE     14368   4-19-88   4:31p
    E88      DOC     86302   2-21-88   9:57p
    E88      EXE     20705   3-11-88   7:23p
    FX-80    DAT      1340   4-20-88  10:51p
    FX-86    DAT      1590   4-20-88  10:51p
    IBM      DAT      1108   4-20-88  10:51p
    LQ-800   DAT      1321   4-20-88  10:52p
    LX-86    DAT      1315   4-20-88  10:52p
    OKI      DAT      1634   4-20-88  10:55p
    PRNSET   DAT      1323   4-20-88  10:29p
    PRNSET   DOC     29473   3-20-88  10:52p
    PRNSET   EXE     39904   3-30-88  11:56p
    README            1254   4-26-88  10:45p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1618   2-21-89  11:07a
    MANUAL   BAT       147  12-15-88  12:39p
           22 file(s)     290713 bytes
                           17408 bytes free
