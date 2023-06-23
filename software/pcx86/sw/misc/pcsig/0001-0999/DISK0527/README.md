---
layout: page
title: "PC-SIG Diskette Library (Disk #527)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0527/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0527"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BASIC WINDOWING TOOLBOX FOR PROGRAMERS"

    BASIC WINDOWING TOOLBOX (B-WINDOW) is a collection of functions that
    give windowing capability to a BASIC programmer.  Windows can be opened
    over sections of the screen and, when closed, the overwritten section
    of the screen is restored.  With B-WINDOW, BASIC programs look more
    visually exciting and professional.  B-WINDOW works with both QuickBASIC
    and interpreted BASIC.  Special windowing cursor control and string
    character display, and border drawing are included.  Everything happens
    at top speed because B-WINDOW was written in C, converted to assembler,
    and hand-optimized.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## B-WINDOW.DOC

{% raw %}
```













                     BASIC WINDOWING TOOLBOX VERSION 2.3
                     ----- --------- ------- ------- ---















           (C) Copyright Christopher McVicar 1985,1986,1987,1988


































                                                   BASIC WINDOWING TOOLBOX
   -----------------------------------------------------------------------


   CONTENTS

        What is BASIC WINDOWING TOOLBOX? .....................  1
        Technical Overview of BASIC WINDOWING TOOLBOX ........  1
        BASIC WINDOWING TOOLBOX files ........................  2
        Compatibility with BASIC .............................  4
        Using with compiled BASIC ............................  5
        Using with Interpreted BASIC .........................  5
        Overview of functions ................................  6
        Function parameters ..................................  6
        Text display .........................................  7
        Character attributes .................................  8
        Window border types .................................. 10
        BASIC WINDOWING TOOLBOX functions
          Initializing windowing ............................. 11
          Determine video type ............................... 11
          Defining a window .................................. 12
          Opening a window ................................... 12
          Closing a window ................................... 14
          Deallocating window buffer space ................... 14
          Scrolling contents of window ....................... 15
          Displaying a string in a window .................... 15
          Displaying a character ............................. 16
          Get input string (QB only) ......................... 17
          Get cursor X position .............................. 18
          Get cursor Y position .............................. 18
          Go to X, Y position ................................ 18
          Setting foreground color ........................... 19
          Setting background color ........................... 20
          Drawing a border ................................... 20
          Enabling error window display ...................... 21
          Disabling error window display ..................... 21
        Miscellaneous functions
          Changing which printer is "LPT1:" .................. 22
          Altering printer time-out .......................... 23
        Error handling ....................................... 23
        Error messages ....................................... 24
        REGISTERING BASIC WINDOWING TOOLBOX .................. 25
        ImagePrint ........................................... 26
        Restrictions ......................................... 27
        Disclaimer ........................................... 27
        ORDER FORM ........................................... 28






        IBM, PC-DOS are trademarks of International Business Machines.
        Compaq is a trademark of Compaq Computer Corp.
        QuickBASIC, Microsoft, MS-DOS are trademarks of Microsoft Corp.











                                                   BASIC WINDOWING TOOLBOX
   -----------------------------------------------------------------------


   WHAT IS BASIC WINDOWING TOOLBOX?

        BASIC WINDOWING TOOLBOX (B-WINDOW) is a collection of functions
        that give windowing capability to a BASIC programmer using an IBM
        Personal Computer or compatible. With B-WINDOW you can write
        BASIC programs that look much more visually exciting and profes-
        sional.  Windows can be opened over sections of the screen and
        when the windows are closed, the original contents of the screen
        reappears.  Special windowing cursor control, string and character
        display and border drawing are included.  And everything happens
        at top speed because B-WINDOW is written in assembler.

        B-WINDOW is User-Supported Software. Feel free to make copies of
        the distribution version of B-WINDOW and give them to your
        friends.

        The distribution version of B-WINDOW has full windowing support
        for BASIC interpreters (BASIC, BASICA, GWBASIC, etc.), as well as
        a QuickBASIC Version 4 library file QBV4.QLB, which allows you to
        experiment with B-WINDOW in the QuickBASIC integrated environment.

        Registering for the full windowing package gives you:

             1) QBV4.OBJ - B-WINDOW object file that you can use with
                 QuickBASIC Version 4 to make stand-alone programs.

             2) BWIN20BC.OBJ - B-WINDOW object file you can link with
                 earlier BASIC compiler programs.

             3) QBV4.ASM - Assembler source code for QBV4.OBJ, allowing
                you to add your own windowing functions, change the
                window buffer size, etc.

        Registration costs only $20, and you can pay with MasterCard or
        Visa. See the Section "REGISTERING BASIC WINDOWING TOOLBOX" for
        details.


   TECHNICAL OVERVIEW OF BASIC WINDOWING TOOLBOX

        Both interpreted and compiled BASIC are supported by either
        BLOADing a windowing support file if you are using an
        interpreter, or linking to it if you are using a BASIC compiler.
        The BLOADable windowing support file is called "B-WIN20I.BIN",
        and the linkable B-WINDOW files have an extension of ".OBJ".

        An array of bytes, in each windowing support file, called the
        window buffer, is used to store each defined window, plus the
        section of the screen that each window overlays. The window
        buffer size is normally 20000 bytes in the supplied files. A
        larger window buffer allows more active window definitions;
        smaller means a smaller program. When a window is defined,
        storage is automatically allocated in the window buffer.



                                                                         1





                                                   BASIC WINDOWING TOOLBOX
   -----------------------------------------------------------------------


        An IBM Personal Computer's screen, in 80 column alphanumeric
        mode, which is the mode B-WINDOW works in, uses 4000 bytes (80 x
        25 x 2) of video RAM. Each character on the screen has a trailing
        attribute byte that indicates if the character is bright or dark,
        blinking, etc. For example, a 20000 byte window buffer, which is
        the default size, is enough to create two windows the size of the
        screen (8000 bytes each: 4000 bytes to save old screen, 4000 for
        window), plus have 4000 bytes left over.

        A window's width and height is specified when it is defined. When
        it is opened, it can be located at any location on the screen, as
        long as it doesn't stray outside of the screen's boundaries. If
        you have specified a border for a window, the writable area of
        the window is reduced to fit inside the border. For example, if
        you defined a window that had a width of 20 and a height of 10,
        and had a border, the writable coordinates would be 0..17 in the
        horizontal direction and 0..7 in the vertical direction. The
        upper left corner of the writable area of a window is at
        horizontal (X) coordinate 0 and vertical (Y) coordinate 0.

        B-WINDOW allows deallocation of window storage so you can have as
        many windows as you like by deallocating and redefining them as
        needed. The only restriction is that only as many windows as can
        be defined in the window buffer can be visible at any one time.

        If no windows are open, the windowing functions WSCROLL, WWRITE,
        WDSP1, WGETCX, WGETCY and WGOTOXY are relative to the standard
        80x25 screen.

        No more than one version of a defined window can be open at any
        one time, regardless of screen placement. This is because each
        window's storage contains information about the section of screen
        it overlaid and opening a second version of the same window would
        overwrite that information.

        When a window is closed, the cursor will return to the location
        it occupied before the window was opened. If a window is
        reopened, the cursor will move to the position it occupied when
        the window was previously open.


   BASIC WINDOWING TOOLBOX FILES

        Be sure to make a backup of the B-WINDOW files before running or
        altering any of the diskette files.

        All B-WINDOW ".BAS" files are in ASCII format so you can copy
        them to a printer or view them with an ordinary text editor.








                                                                         2





                                                   BASIC WINDOWING TOOLBOX
   -----------------------------------------------------------------------


        The files on the B-WINDOW distribution diskette are:

          B-WINDOW.DOC

            The B-WINDOW documentation file. It has been pre-formatted
            for 8 1/2 x 11 paper, 66 lines per page.

          BASIC Compiler files:

              QBDEMO.EXE

                 Compiled B-WINDOW demonstration. The BASIC source file
                 is QBDEMO.BAS, which was linked to QBV4.OBJ. Just type
                 "QBDEMO" to run it.

              QBDEMO.BAS

                 QuickBASIC source code example of B-WINDOW functions.

              QBV4.QLB

                 Quick library for QuickBASIC Version 4. To use the .QLB
                 file with the QBDEMO.BAS program, use the "/L" command:

                      QB QBDEMO.BAS /LQBV4.QLB

          BASIC Interpreter files:

              B-WINI.MRG

                 Use BASIC's MERGE command to add this file to your
                 program if you are using B-WINDOW with standard
                 interpreted BASIC. e.g.:

                      MERGE "B-WINI.MRG"

                 It contains BASIC program code to set up the correct
                 entry offsets for the B-WINDOW functions, BLOADs the
                 B-WINDOW support file (".BIN" file name extension), and
                 calls WINIT to initialize the windowing functions. Line
                 numbers start at 60000, so if your program already uses
                 line numbers in this range, be sure to renumber your
                 program's lines before the MERGE. To execute the BASIC
                 program code contained in B-WINI.MRG, add the lines:

                      CLEAR,&h8000
                      GOSUB 60060

                 to the very beginning of your program. See the
                 demonstration program BWDEMOI.BAS for an example
                 of how this is done.





                                                                         3





                                                   BASIC WINDOWING TOOLBOX
   -----------------------------------------------------------------------


              B-WIN20I.BIN

                 BLOADable B-WINDOW support file used with standard
                 interpreted BASIC. It has a 20000 byte window buffer.
                 The demonstration program BWDEMOI.BAS uses it.

              BWDEMOI.BAS

                 B-WINDOW demonstration program that BLOADs B-WIN20I.BIN.
                 B-WINI.MRG has already been merged into it. Before running
                 it make sure the file B-WIN20I.BIN is on the default
                 drive.

        In addition, there may be a file called B-WREAD.ME on the disk.
        If this file exists, it contains the latest changes, notes, etc.

        The files on a B-WINDOW REGISTERED diskette include all of the
        above files, plus:

              QBV4.OBJ

                 Linkable windowing support file for QuickBASIC Version
                 4. You can use this file to create stand-alone programs.
                 It has a 20,000 byte windowing buffer.

              QBV4.ASM

                 The assembler source code file for B-WINDOW. You can add
                 your own functions, or change the windowing buffer size.

              BWIN20BC.OBJ

                 Linkable windowing support file for use with earlier
                 BASIC compilers that are limited to 64K for all code and
                 data, as well as QuickBASIC version 1, 2 and 3. It has a
                 20,000 byte windowing buffer.


   COMPATIBILITY WITH BASIC

        The B-WINDOW linkable object files are compatible with the
        standard IBM or Microsoft BASIC compilers, versions 1.00 and up.
        They are also compatible with the Microsoft QuickBASIC compiler
        versions 1 through 4.

        B-WINDOW is compatible with standard interpreted BASIC as
        supplied for an IBM Personal Computer or close compatible, such
        as a Compaq.








                                                                         4





                                                   BASIC WINDOWING TOOLBOX
   -----------------------------------------------------------------------


   USING WITH COMPILED BASIC

        The process for using B-WINDOW functions in compiled BASIC
        programs is quite simple. Just place the line:

             CALL WINIT(STATUS%)

        at the very beginning of your program. This sets up some
        windowing data pointers and must NOT be omitted. You can then
        CALL the various B-WINDOW functions.

        The file QBDEMO.BAS is a demonstration of windowing functions. It
        was compiled by QuickBASIC Version 4, and linked with QBV4.OBJ:

             BC      QBDEMO.BAS,QBTEST.OBJ /O;
             LINK    QBDEMO.OBJ QBV4.OBJ;

        The QBV4.QLB library file can be used with QuickBASIC in the
        integrated environment. To load the QBV4.QLB library:

             QB QBDEMO.BAS /LQBV4.QLB

        If you have an older BASIC compiler, compile your BASIC source:

             BASCOM TESTPROG /O           - std. BASIC compiler
                 or
             QB TESTPROG /O;              - QuickBASIC compiler

        then link the resulting ".OBJ" file with the BWIN20BC.OBJ file.
        For example:

             LINK TESTPROG + BWIN20BC;


   USING WITH INTERPRETED BASIC

        The file BWDEMOI.BAS is an example of windowing with interpreted
        BASIC. You can run it by loading your interpreter and typing:

             RUN "BWDEMOI.BAS"

        To use the B-WINDOW functions in your interpreted BASIC program
        you must:

         (1) Have approximately 55-60K of available string space. When
             you first enter BASIC, a message stating how much free RAM
             you have will appear.  The message should say something like
             "55000 BYTES FREE" or "60000 BYTES FREE".

         (2) Merge the file B-WINI.MRG with your BASIC program. e.g.

                MERGE "B-WINI.MRG"




                                                                         5





                                                   BASIC WINDOWING TOOLBOX
   -----------------------------------------------------------------------


             The BASIC program code in B-WINI.MRG automatically BLOADs
             the windowing support file into BASIC's string space.

             B-WINI.MRG'es line numbers start at 60000, so if your
             program already uses line numbers in this range be sure to
             renumber your program's lines before the MERGE.

         (3) Add the lines:

                CLEAR,&H8000
                GOSUB 60060

             to the very beginning of your program to initialize B-
             WINDOW. DO NOT NEGLECT TO DO THIS.  The CLEAR command limits
             BASIC to the lower half of the available string space.  The
             subroutine call executes the code in B-WINI.MRG.

        You can now use the B-WINDOW functions in your BASIC program.

        Because BASIC initializes all variables when a new variable is
        created, you must never alter your BASIC program and then jump
        directly to a line number that by-passes the B-WINDOW initiali-
        zation "GOSUB 60060" line. If you do this, all of the B-WINDOW
        function entry point offsets will have been set to zero, so you
        will jump to offset zero and probably crash your computer.



  OVERVIEW OF FUNCTIONS

        YOU MUST ALWAYS CALL THE WINDOWING FUNCTION "WINIT" BEFORE USING
        ANY OF B-WINDOW's FUNCTIONS. Do NOT neglect to do this, as
        several important data pointers are initialized. If you are using
        interpreted BASIC, the merge file B-WINI.MRG does this for you.
        B-WINDOW automatically selects 80 column alphanumeric screen mode.

        The four major windowing functions are:

          (1) Defining a window with WDEF.
          (2) Opening a window with WOPEN.
          (3) Closing the most recently opened window with WCLOSE.
          (4) Deallocating window(s) and releasing window buffer
              space with WKILL.


   FUNCTION PARAMETERS

        A function's parameters are the variables contained between the
        parentheses immediately following the name of the function being
        called. For example, in the statement "CALL ABC (X, Y)", the
        parameters are X and Y. Most of the B-WINDOW function parameters
        are values being sent from your BASIC program, but a few B-WINDOW
        functions return a value through one of the parameters.



                                                                         6





                                                   BASIC WINDOWING TOOLBOX
   -----------------------------------------------------------------------


        ALL PARAMETERS USED BY B-WINDOW FUNCTIONS MUST EITHER BE A
        STRING, OR AN INTEGER. STRING NAMES ARE FOLLOWED BY A DOLLAR SIGN
        ("$") AND INTEGER NAMES ARE FOLLOWED BY A PERCENT SIGN ("%"). The
        B-WINDOW functions assume they are being sent integers for all
        numeric values and, as the internal data storage format of other
        BASIC numeric variable types vary considerably, using anything
        other than integers results in erratic program behavior.

        Most BASICs won't accept constants or complex expressions as
        numeric function parameters: (QuickBASIC Version 4 will)

             100 CALL FUNCT (12)     'Wrong - a constant
             110 CALL FUNCT (X%+Y%)  'Wrong - a complex expression
             120 CALL FUNCT (X%)     'OK

        All function calls must include all parameters, even if they are
        only dummy place-holders. For example, if a window has been
        defined without a border, the window opening function WOPEN must
        include all 9 parameters, even though the border type speci-
        fications are ignored. SPECIFYING TOO MANY OR TOO FEW FUNCTION
        PARAMETERS IS A SERIOUS ERROR AND WILL CAUSE YOUR PROGRAM TO
        CRASH. BASIC pushes function parameters onto the stack before
        calling a function and the called function must clear the
        parameters from the stack before it returns to BASIC. For
        example, if a function expects 4 parameters and only gets 3, then
        the stack will be unbalanced when 4 parameters are cleared from
        it.


   TEXT DISPLAY

        WWRITE is the B-WINDOW screen writing function. It does not
        attempt to interpret and act on any characters, including carriage
        returns and line feeds. The only action taken is to wrap-around in
        the active window if the cursor is at the right side of the window
        and to scroll up if the bottom of the window is reached. Any extra
        text handling will have to be added by you. The advantage is that
        you can write any character to a window with WWRITE.

        Any standard BASIC output functions that involve outputting
        carriage returns or line feeds to the screen MUST be avoided when
        a window is open. The standard BASIC output functions know
        nothing about the windowing environment and can easily write
        across a window's border. Functions like PRINT can be used with
        care, providing the user (1) first positions the cursor in a
        window with WGOTOXY (2) never sends a carriage return or line
        feed to the screen and (3) avoids writing across a window's
        border.








                                                                         7





                                                   BASIC WINDOWING TOOLBOX
   -----------------------------------------------------------------------


   CHARACTER ATTRIBUTES

        The windowing functions WFGCOLOR and WBGCOLOR select the
        foreground and background character attribute values for text
        display. In 80 column alphanumeric mode, which is the mode
        B-WINDOW works in, each character visible on your screen has
        another attribute byte associated with it that determines whether
        the visible character will blink, what color it is, etc. The
        following table explains the different values of the character
        attribute byte for both WFGCOLOR and WBGCOLOR.

      IF YOU HAVE A MONOCHROME ADAPTER:

            There are two foreground display modes that can be selected
            by WFGCOLOR -

              Attribute byte value:          Result:

                        0                 black foreground
                        7                 white foreground

              If you add 16 to either of the above, the character(s)
              will blink. If you add 8 to either of the above, the
              character(s) will be high intensity (if your monitor
              recognizes the intensity signal).

            There are two background display modes that can be selected
            by WBGCOLOR -

              Attribute byte value:          Result:

                        0                 black background
                        7                 white background

            Monochrome adapter attribute examples:

              100 ATTRIB%=7 : CALL WFGCOLOR (ATTRIB%) 'white foreground
              110 ATTRIB%=0 : CALL WBGCOLOR (ATTRIB%) 'black background

              100 ATTRIB%=7+8+16 'white foreground, bright, blinking
              110 CALL WFGCOLOR (ATTRIB%)


      IF YOU HAVE A CGA, EGA, VGA:

            There are 16 possible foreground colors that can be selected
            by WFGCOLOR.

              Attribute byte value:     Result:

                        0                Black
                        1                Blue
                        2                Green
                        3                Cyan


                                                                         8





                                                   BASIC WINDOWING TOOLBOX
   -----------------------------------------------------------------------


                        4                Red
                        5                Magenta
                        6                Brown
                        7                White
                        8                Gray
                        9                Light Blue
                       10                Light Green
                       11                Light Cyan
                       12                Light Red
                       13                Light Magenta
                       14                Yellow
                       15                Bright white

            Add 16 to the any of the above foreground color values to
            make the character blink.

            There are 8 possible background colors that can be
            selected by WBGCOLOR. The background is the area around a
            character.

              Attribute byte value:          Result:

                        0                Black background
                        1                Blue background
                        2                Green background
                        3                Cyan background
                        4                Red background
                        5                Magenta background
                        6                Brown background
                        7                White background

            Color Graphics Adapter attribute examples:

              100 ATTRIB% = 0
              110 CALL WBGCOLOR (ATTRIB%) 'black background

              100 ATTRIB%=6 : CALL WBGCOLOR (ATTRIB%) 'brown background
              110 ATTRIB%=14 : CALL WFGCOLOR (ATTRIB%) 'yellow foreground

              100 ATTRIB%= 8+16
              110 CALL WFGCOLOR (ATTRIB%) 'Gray, blinking foreground


        To select standard white-on-black (B-WINDOW default) for either a
        monochrome or color screen, specify 7 as the character foreground
        attribute and 0 as the background attribute.










                                                                         9





                                                   BASIC WINDOWING TOOLBOX
   -----------------------------------------------------------------------


   WINDOW BORDER TYPES

        If you defined a window as having a border, when you open that
        window you can select one of six types of borders. The six types
        of borders are:

            (a) type = 0   The border is not visible because it is made
                           up of spaces. You cannot write on a border,
                           even one that is blank, using WWRITE or WDSP1.

            (b) type = 1   Both the top, bottom and sides of the border
                           are made up of single lines.

            (c) type = 2   Both the top, bottom and sides of the border
                           are made up of double lines.

            (d) type = 3   The top and bottom edges of the border are
                           made up of double lines, and the sides are
                           made up of single lines.

            (e) type = 4   The top and bottom edges of the border are
                           made up of single lines, and the sides are
                           made up of double lines.

            (f) type = 5   Both the top, bottom and sides of the border
                           are made up of solid block shapes.

        Another type of border is available if you have a color monitor
        or a monochrome monitor that recognizes the color intensity
        signal. If you select the same color for both the background and
        foreground of a window's border, then a thick border will
        surround the window.
























                                                                        10





                                                   BASIC WINDOWING TOOLBOX
   -----------------------------------------------------------------------


   BASIC WINDOWING TOOLBOX FUNCTIONS

    WINIT - Initialize B-WINDOW

        Usage:

          CALL WINIT (STATUS%)

        Called with:
            Nothing
        Returns:
            STATUS% = 1 if success, 0 if error

        Example:

            100 CALL WINIT (STATUS%)
            110 IF STATUS% = 0 THEN PRINT "Windowing initialization error"

        WINIT sets up pointers to the window buffer, detects the type of
        monitor (color or monochrome) and selects 80 column alphanumeric
        mode.

        YOU MUST CALL WINIT BEFORE CALLING ANY OTHER B-WINDOW FUNCTIONS.
        Failure to do this can cause random sections of memory to be
        overwritten.

        If you are using standard interpreted BASIC, you don't have to
        call WINIT because the merge file B-WINI.MRG does it for you.


    WSCRNTYPE - Get video card type

        Usage:

          CALL WSCRNTYPE (TYPE%)

        Called with:
            Nothing
        Returns:
            TYPE% = 0 if MONO, 1 if CGA, 2 if EGA

        Example:

            100 CALL WSCRNTYPE (TYPE%)
            200 IF TYPE% = 0 THEN VIDBASE = &hb000 ELSE VIDBASE = &hb800

        You can use this function to determine whether or not to use
        color on the screen.








                                                                        11





                                                   BASIC WINDOWING TOOLBOX
   -----------------------------------------------------------------------


    WDEF - Define a window

        Usage:

          CALL WDEF (WNUM%, WID%, HGT%, BORDER%)

        Called with:
            WID%     = Width of window, including optional border.
            HGT%     = Height of window, including optional border.
            BORDER%  = Set this equal to 1 if a border is desired, 0 for
                       no border.
        Returns:
            WNUM%    = 0 if error, window access number otherwise.

        Example:

            100 WID% = 40 : HGT% = 15 : BORDER% = 1
            110 CALL WDEF (WNUM%, WID%, HGT%, BORDER%)
            120 IF WNUM% = 0 THEN PRINT "Error defining window"
            130 REM Use WNUM% to open window later

        Define a window and reserve storage for it in the window buffer.
        A window must be defined before it can be opened.

        The window's width and height include a border, if a border is
        specified. If the window has a border, then the writable area of
        the window is reduced to fit inside the border. For example, a
        bordered window that has a width of 30 and a height of 8 has
        writable coordinates of 0..27 in the horizontal (X) direction
        and 0..5 in the vertical (Y) direction. If the window didn't
        have a border, the X and Y ranges would be 0..29 and 0..7
        respectively.

        You cannot define a window larger than the standard screen. Also,
        a window must be big enough so that at least one writable
        character position is on the window. In other words, the window
        must not be smaller than three columns by three rows if a border
        is specified and one column by one row if no border is specified.

        If you have called WERRDISPLAYOFF, be sure to check the returned
        status for 0, the error condition. Errors occur if the window is
        too small, too big, or if there is not enough room for the window
        in the window buffer.


    WOPEN - Open a window previously defined by WDEF

        Usage:

          CALL WOPEN (STATUS%, WNUM%, X%, Y%, CLR%, WBGC%,
                      BTYPE%, BFGC%, BBGC%))





                                                                        12





                                                   BASIC WINDOWING TOOLBOX
   -----------------------------------------------------------------------


        Called with:
            WNUM%    = Window access number returned by a previous WDEF
            X%       = Horizontal coordinate of upper left corner
            Y%       = Vertical coordinate of upper left corner
            CLR%     = Pre-clear window if set to 1, retain
                       previous contents if set to 0
            WBGC%    = Window background color
            BTYPE%   = Border type
            BFGC%    = Border foreground color
            BBGC%    = Border background color
        Returns:
            STATUS%  = 1 if success, 0 if error

        Example:

            100 X% = 3          'upper left corner of window is 4th
            101 '                column from far left of std. screen
            110 Y% = 4          'upper left corner of window is 5th
            111 '                row down from top of std. screen
            120 CLR% = 0        'don't clear previous text from window
            130 WBGC% = 2       'window background color is green
            140 BTYPE% = 1      'single lines
            150 BFGC% = 4       'red border foreground
            160 BBGC% = 1       'blue border background
            170 CALL WOPEN (STATUS%, WNUM%, X%, Y%, CLR%, WBGC%,
                            BTYPE%, BFGC%, BBGC%))
            180 IF STATUS% = 0 THEN PRINT "Window open error"

        (line 170 wrapped for purpose of documentation formatting only)

        Open a window that has been previously defined by a call to WDEF.
        If a window is being opened for the first time, then the contents
        of the window are initialized to spaces. If the window is being
        opened again, the previous contents of the window will be erased,
        unless "CLR%" is set to 0.

        "X%" and "Y%" are absolute locations on the standard 80x25 screen
        and specify the location of the upper left corner of the window
        to be opened.

        See the Section "WINDOW BORDER TYPES" for a listing of the
        six border types.

        If you have called WERRDISPLAYOFF, be sure to check the returned
        status for 0, the error condition. Errors occur if wnum is too
        small or big, if the window is already open, or if the window
        won't fit on the screen at the X,Y location specified.









                                                                        13





                                                   BASIC WINDOWING TOOLBOX
   -----------------------------------------------------------------------


    WCLOSE - Close a window

        Usage:

          CALL WCLOSE

        Called with:
            Nothing
        Returns:
            Nothing

        Example:

            100 CALL WCLOSE

        Close the most recently opened window and restore the previously
        overwritten section of screen. Windows close in the reverse order
        in which they were opened.

        When a window is closed, the cursor will return to the location
        it previously occupied before the window was opened.

        If all windows are already closed, WCLOSE will simply return.
        Extra WCLOSE calls are ignored and do not generate an error.


    WKILL - Deallocate window buffer space

        Usage:

          CALL WKILL (STATUS%, WNUM%)

        Called with:
            WNUM%   = Number of window to kill
        Returns:
            STATUS% = 1 if success, 0 if error

        Example:

            100 'Define 3 windows
            110 WID% = 48 : HGT% = 5 : BDR% = 1
            120 CALL WDEF (WNUM1%, WID%, HGT%, BDR%)
            130 WID% = 30 : HGT% = 10 : BDR% = 0
            140 CALL WDEF (WNUM2%, WID%, HGT%, BDR%)
            150 WID% = 35 : HGT% = 20 : BDR% = 1
            160 CALL WDEF (WNUM3%, WID%, HGT%, BDR%)
            170 'Deallocate WNUM2%. Also de-allocate WNUM3%
            180 'because it was defined after WNUM2%, but not
            190 'WNUM1%, because it was defined before WNUM2%
            200 CALL WKILL (STATUS%, WNUM2%)
            210 IF STATUS% = 0 THEN PRINT "Deallocation error"

        Deallocate a window, and all subsequently defined windows,
        freeing up window buffer space. The window definition, and all


                                                                        14





                                                   BASIC WINDOWING TOOLBOX
   -----------------------------------------------------------------------


        subsequent definitions, will no longer exist. Using WKILL allows
        you to display an unlimited number of windows because the window
        buffer can be cleared and reused.

        When WKILL is called, all of the open windows on the screen are
        automatically closed. This is done because the deallocated
        window(s) may be partially or fully hidden under a window that is
        not being deallocated. The windows defined before the deallocated
        window will still be in the window buffer, however.

        If you have called WERRDISPLAYOFF, be sure to check the returned
        status for 0, the error condition. Errors occur if wnum is too
        small or too big or if no window is associated with wnum.


    WSCROLL - Scroll contents of window

        Usage:

          CALL WSCROLL (DIR%, NUM%)

        Called with:
            DIR% = Direction of scroll; 0 = up, 1 = down
            NUM% = Number of lines to scroll
        Returns:
            Nothing

        Example:

            100 'Scroll current window down 3 lines
            110 DIR% = 1
            120 NUM% = 3
            130 CALL WSCROLL (DIR%, NUM%)

        The current window is scrolled in "DIR%" direction for "NUM%"
        lines. If no windows are open, the standard 80x25 screen will
        scroll. The current window's background color (set by WOPEN) will
        be the attribute of the blanked area.


    WWRITE - Display a string in a window

        Usage:

          CALL WWRITE (STR$)

        Called with:
            STR$    = String to be displayed
        Returns:
            Nothing

        Example:
            100 STR$ = "String to be displayed"
            110 CALL WWRITE (STR$)


                                                                        15





                                                   BASIC WINDOWING TOOLBOX
   -----------------------------------------------------------------------


        Display string in current window at location set by WGOTOXY. If
        the right hand side of a window is reached, the cursor will wrap-
        around to the next line. If the cursor reaches the bottom of the
        current window, the contents of the window will scroll up 1 line.
        WWRITE leaves the cursor 1 character position to the right of the
        last character in the string.

        If no windows are open, WWRITE writes to the standard 80x25
        screen.

        No control characters are recognized, so any character can be
        displayed. The length of the string cannot exceed 255 characters.

        Previous calls to WFGCOLOR (foreground) and WBGCOLOR (background)
        determine the attributes of the text displayed by WWRITE.


    WDSP1 - Display 1 character

        Usage:

          CALL WDSP1 (X%, Y%, CH%)

        Called with:
            X%      = X position within current window
            Y%      = Y position within current window
            CH%     = ASCII value of character to display
        Returns:
            Nothing

        Example:

            100 REM display "Q" on screen at 40,10
            110 X% = 40 : Y% = 10 : CH% = ASC ("Q")
            120 CALL WDSP1 (X%, Y%, CH%)

        Display a single character at an X, Y location relative to the
        currently open window. WDSP1 leaves the cursor at the same X, Y
        location as the displayed character. If no windows are open, the
        X and Y coordinates correspond to absolute locations on the
        standard 80x25 screen.

        Previous calls to WFGCOLOR (foreground) and WBGCOLOR (background)
        determine the attributes of the text displayed by WWRITE.

        Though WDSP1 doesn't return a status to your BASIC code, if "X%"
        or "Y%" are outside of the current window and WERRDISPLAYOFF has
        not been called, an error window will open and an error message
        will display.







                                                                        16





                                                   BASIC WINDOWING TOOLBOX
   -----------------------------------------------------------------------


    WGETSTR - Get input string
    (THIS FUNCTION IS AVAILABLE WITH THE QBV4 FILES ONLY)

        Usage:

          CALL WGETSTR (S$)

        Called with:
            S$ = string to edit
        Returns:
            S$ = updated string

        Example:

            100 X% = 10 : Y% = 10
            200 CALL WGOTOXY(X%, Y%)
            300 S$ = "Default string "
            400 CALL WGETSTR(S$)
            500 'discard trailing NULL
            600 S$ = LEFT$(S$, INSTR(S$, CHR$(0)) - 1)

        This function allows you to edit a string within a window. If no
        windows are open, then the function can be used on the standard
        80x25 screen.

        Because BASIC string lengths mustn't be altered, WGETSTR marks
        the end of the string, after you have edited it, with a NULL
        character. It is your responsibility to truncate the string at
        the NULL (see line 600 above) if necessary.

        The trailing NULL character isn't displayed, so you must define a
        string that is one character longer than the field you wish to
        edit (thus the trailing space in the string on line 300 above).

        The editing keys are:

            <CR>        - finish editing and return
            BACKSPACE   - erase character to left of cursor and move
                          cursor left
            DEL         - delete the character at the cursor
            HOME        - move to the start of the string
            END         - move to the end of the string
            Left & Right
            arrows      - move one position to the left or right

        If the first keystroke is a printable character, the remainder of
        the string will be automatically erased.

        You define the location of the editing field with WGOTOXY. If the
        string would over-write a window's border, the editing area is
        reduced to fit inside the current window.

        Previous calls to WFGCOLOR (foreground) and WBGCOLOR (background)
        determine the attributes of the text displayed by WWRITE.


                                                                        17





                                                   BASIC WINDOWING TOOLBOX
   -----------------------------------------------------------------------


    WGETCX - Get cursor horizontal (X) position

        Usage:

          CALL WGETCX (XPOS%)

        Called with:
            Nothing
        Returns:
            XPOS% = cursor X position

        Example:

            100 CALL WGETCX (XPOS%)
            110 PRINT "The cursor X position is: ";XPOS%

        This function returns the current X position of the cursor,
        relative to the upper left corner (0, 0) of the writable part of
        the current window. If no windows are open, the X position is
        relative to the upper left corner of the standard 80x25 screen.


    WGETCY - Get cursor vertical (Y) position

        Usage:

          CALL WGETCY (YPOS%)

        Called with:
            Nothing
        Returns:
            YPOS% = cursor Y position

        Example:

            100 CALL WGETCY (YPOS%)
            110 PRINT "The cursor Y position is: ";YPOS%

        This function returns the current Y position of the cursor,
        relative to the upper left corner (0, 0) of the writable part of
        the current window. If no windows are open, the Y position is
        relative to the upper left corner of the standard 80x25 screen.


    WGOTOXY - Go to X, Y position

        Usage:

          CALL WGOTOXY (X%, Y%)

        Called with:
            X% = Horizontal position (column)
            Y% = Vertical position (row)



                                                                        18





                                                   BASIC WINDOWING TOOLBOX
   -----------------------------------------------------------------------


        Returns with:
            Nothing

        Example:

            100 X% = 20 : Y% = 15
            110 CALL WGOTOXY (X%, Y%)

        Go to specified X, Y location on the writable part of the
        current window. If you specified a border when you defined and
        opened the window, the writable part of the window is reduced to
        fit inside the border. For example, if you specified a window
        that was 10 x 10, and it had a border, then the allowable
        horizontal (X) and vertical (Y) coordinates for WGOTOXY would be
        between 0..7.

        If there are no windows open, the X, Y coordinates refer to the
        standard 80x25 screen.

        Though WGOTOXY doesn't return a status to your BASIC code, if
        "X%" or "Y%" are outside of the current window and WERRDISPLAYOFF
        has not been called, an error window will open and an error
        message will display.


    WFGCOLOR - Set text foreground color

        Usage:

          CALL WFGCOLOR (ATTRIB%)

        Called with:
            ATTRIB% = foreground display attribute
        Returns with:
            Nothing

        Example:

            100 ATTRIB% = 6+16 'blinking brown
            110 CALL WFGCOLOR (ATTRIB%)

        Set the foreground color for text displayed by WWRITE, WDSP1 and
        WBORDER. See the Section "CHARACTER ATTRIBUTES" for a listing of
        the display attributes available.

        Though WFGCOLOR doesn't return a status to your BASIC code, if
        "ATTRIB%" is outside of the range of allowable foreground values
        (0..31) and WERRDISPLAYOFF has not been called, an error window
        will open and an error message will display.







                                                                        19





                                                   BASIC WINDOWING TOOLBOX
   -----------------------------------------------------------------------


    WBGCOLOR - Set text background color

        Usage:

          CALL WBGCOLOR (ATTRIB%)

        Called with:
            ATTRIB% = background display attribute
        Returns with:
            Nothing

        Example:

            100 ATTRIB% = 5 'magenta
            110 CALL WBGCOLOR (ATTRIB%)

        Set the background color for text displayed by WWRITE, WDSP1 and
        WBORDER. See the Section "CHARACTER ATTRIBUTES" for a listing of
        the display attributes available.

        Though WBGCOLOR doesn't return a status to your BASIC code, if
        "ATTRIB%" is outside of the range of allowable background values
        (0..7) and WERRDISPLAYOFF has not been called, an error window
        will open and an error message will display.


    WBORDER - Draw border on screen

        Usage:

          CALL WBORDER (STATUS%, X%, Y%, WID%, HGT%, BTYPE%)

        Called with:
            X%    = Horizontal position
            Y%    = Vertical position
            WID%  = Width of border
            HGT%  = Height of border
            BTYPE% = Type of border
        Returns with:
            STATUS% = 1 if success, 0 if error

        Example:

            100 X% = 10: Y% = 5 : WID% = 40 : HGT% = 8 : BTYPE% = 5
            110 CALL WBORDER (STATUS%, X%, Y%, WID%, HGT%, BTYPE%)
            120 IF STATUS% = 0 THEN PRINT "Error drawing border"

        Draw a border around an area of the screen. X and Y are absolute
        coordinates, relative to the standard 80x25 screen. The upper
        leftmost coordinate of the standard screen is (0, 0) and the
        lower rightmost coordinate of the standard screen is (79, 24).

        Borders created by WBORDER are not windows. You can close a
        window, which may or may not have a window border, but you cannot


                                                                        20





                                                   BASIC WINDOWING TOOLBOX
   -----------------------------------------------------------------------


        close a WBORDER border because it is written onto the standard
        80x25 screen.

        See the Section "WINDOW BORDER TYPES" for a listing of the six
        border types.

        The foreground and background colors of the border's characters
        are determined by previous calls to WFGCOLOR and WBGCOLOR. If you
        set both the background and foreground colors to the same value,
        then the border will appear quite thick.

        If you have called WERRDISPLAYOFF, be sure to check the returned
        status for 0, the error condition. An error occurs if the border
        type is not one of the types specified or if the border will not
        fit on the standard 80x25 screen.


    WERRDISPLAYON - Enable error window display

        Usage:

          CALL WERRDISPLAYON

        Called with:
            Nothing
        Returns with:
            Nothing

        Example:

            100 CALL WERRDISPLAYON

        Turn on the display of windowing errors. If an error is detected
        by a B-WINDOW function, an error window will open and an error
        message will be displayed. Re-edit your BASIC program and remove
        the cause of the windowing error.

        Note that the functions WLPTSELECT and WLPTIMOUT return a status
        flag only. They never generate a visible error message.

        The display of windowing errors is the default state. You have to
        call WERRDISPLAYON only if you had previously called
        WERRDISPLAYOFF.


    WERRDISPLAYOFF - Disable error window display

        Usage:

          CALL WERRDISPLAYOFF

        Called with:
          Nothing



                                                                        21





                                                   BASIC WINDOWING TOOLBOX
   -----------------------------------------------------------------------


        Returns with:
          Nothing

        Example:

            100 CALL WERRDISPLAYOFF

        Turn off the display of windowing errors. If you call
        WERRDISPLAYOFF, the only way to check for windowing errors is to
        check the returned status.


    WLPTSELECT - Change which printer corresponds to "LPT1:"

        Usage:

          CALL WLPTSELECT (STATUS%, PRTR%)

        Called with:
            PRTR% = The new printer port to correspond to "LPT1:"
        Returns with:
            STATUS% = 1 if success, 0 if error

        Example:

            100 LPRINT "This will come out on LPT1"
            110 PRTR% = 2
            120 CALL WLPTSELECT (STATUS%, PRTR%)
            130 LPRINT "This will come out on LPT2"
            140 'Back to original port mapping..
            150 PRTR% = 1
            160 CALL WLPTSELECT (STATUS%, PRTR%)
            170 LPRINT "Back to LPT1 again"

        The standard BASIC commands LLIST and LPRINT send all output to
        the first line printer LPT1. If you have more than one printer,
        using WLPTSELECT you can direct all of the output normally sent
        to LPT1 to the other printer(s).

        Be sure to change the physical port address that LPT1 maps to
        back to its original value before exiting a program that uses
        WLPTSELECT, unless you want the port reassignment to persist
        until you reboot your computer. If you don't restore the original
        port address of LPT1, the next time your windowing program runs
        WINIT will read your modified version of the port address table
        and you will not be able to select the original port corresponding
        to LPT1 because the port address will have been overwritten.

        Be sure to check the returned status for 0, the error condition.
        An error occurs if "PRTR%" is not in the range 1..3 or if there
        is no physical port installed on your computer corresponding to
        your port selection. WLPTIMOUT does NOT generate an error message
        window. Checking the returned status is the only way to check for
        errors.


                                                                        22





                                                   BASIC WINDOWING TOOLBOX
   -----------------------------------------------------------------------


    WLPTIMOUT - Alter printer time-out

        Usage:

          CALL WLPTIMOUT (STATUS%, PRTR%, TVAL%)

        Called with:
            PRTR% = Printer port to alter
            TVAL% = New timer value for this printer
        Returns with:
            STATUS% = 1 if success, 0 if error

        An IBM Personal Computer use a software time-out value when
        waiting for a printer to come on-line and start accepting data.
        This time-out value can be altered to increase or decrease the
        amount of time your computer will wait before giving up on
        sending to a printer. A standard IBM Personal Computer has a
        time-out value of 20. The allowable range for "TVAL%" is
        1..255. The allowable range for "PRTR%" is from 1 (LPT1) to 3
        (LPT3).

        If you have a very slow printer and it keeps timing out when you
        are printing from your word processor, etc., then you can use
        this facility of B-WINDOW to increase the printer time-out value.
        The new time-out value will persist until you reboot your
        computer, or you call WLPTIMOUT again.

        Note that some clones of IBM Personal Computers do not use the
        same memory location as the Personal Computer for the printer
        time-out count. This function will not work on these computers.

        Be sure to check the returned status for 0, the error condition.
        An error occurs if "PRTR%" is not in the range 1..3, or if
        "TVAL%" is not in the range 1..255. WLPTIMOUT does NOT generate
        an error message window. Checking the returned status is the only
        way to check for errors.


   ERROR HANDLING

        You can control the action taken when a windowing error occurs
        through calls to WERRDISPLAYOFF and WERRDISPLAYON. If you call
        WERRDISPLAYON (the default state) then, if an error occurs, the
        program will display an error message window. The name of the
        windowing function and what is wrong with what you are asking the
        function to do will be indicated in the window. Your program will
        then pause, waiting for you to press a key. When you press a key,
        your program will continue. Break out (CTRL+BREAK) of your
        program as soon as possible and correct the error. Often the
        problem is as simple as mixing the X and Y coordinates up, or
        using a non-integer numeric variable.

        If you call WERRDISPLAYOFF, for all B-WINDOW windowing functions
        that return a status value (1 = success, 0 = error), be sure to


                                                                        23





                                                   BASIC WINDOWING TOOLBOX
   -----------------------------------------------------------------------


        check that no error has occurred. If a windowing function returns
        an error value, do not ignore it. Terminate your program and
        check for the cause of the error.

        WLPTIMOUT and WLPTSELECT return a status value only. They are not
        windowing functions, and will not display an error message
        window.


   ERROR MESSAGES

        If a windowing error occurs and you haven't called
        WERRDISPLAYOFF, B-WINDOW will usually display an error message
        window. It contains an error message consisting of the name of
        the B-WINDOW function where the error occurred, followed by a
        brief description of the error. The following is a listing of all
        error messages and their meanings:

      "BORDER - Incorrect border type"

        The border types range from 0 (spaces) to 5 (block characters).
        You have specified a border type value outside of this range. See
        the Section "WINDOW BORDER TYPES" for a description of the
        borders available.

      "BORDER - Won't fit on screen"

        There is no virtual screen extending beyond the visible portion
        of your computer's screen, so a border must be entirely visible.

      "WDEF - Window too small"

        A window must be large enough to have at least one writable
        character position. Note that if you define a window with a
        border, then the minimum window size is 3 columns by 3 rows
        because the border will take up 2 character positions vertically
        and horizontally.

      "WDEF - Window too large"

        As with borders, a window must be entirely visible when opened.
        Therefore, the largest window possible is as large as the
        standard 80x25 screen.

      "WDEF - Too many windows"

        The maximum number of windows that can be defined is 30.

      "WDEF - No window buffer freespace"

        You have used up all of the window buffer with your window
        definitions. You must choose a larger window buffer version of
        B-WINDOW or use WKILL to free up window buffer space.



                                                                        24





                                                   BASIC WINDOWING TOOLBOX
   -----------------------------------------------------------------------


      "WOPEN - Window number out of range"

        You have tried to open a window using a window access number
        outside of the range 1..30. The window access number is the value
        returned by WDEF.

      "WOPEN - Window already open"

        Only one copy of a defined window can be open at any one time.
        You can however, close a window and then immediately reopen it at
        a different location.

      "WOPEN - Window not defined"

        You have forgotten to use WDEF to define the window you wish to
        open or the window access number sent to WOPEN is incorrect.

      "WOPEN - Window won't fit on screen"

        The window won't fit on the screen where you want to put it and
        still be entirely visible.

      "WGOTOXY - Cursor out of range"
                  or
      "WDSP1 - Cursor out of range"

        You have specified coordinates outside of the currently active
        area when locating the cursor. Remember that all coordinates
        start with zero and that a window defined with a border has 2
        less writable positions in both the horizontal and vertical
        directions than a window defined without a border.

      "WFGCOLOR - Color out of range"
                   or
      "WBGCOLOR - Color out of range"

        You have specified a character attribute that is not in the range
        0..31 for foreground colors, or 0..7 for background colors.


   REGISTERING BASIC WINDOWING TOOLBOX

        If you use B-WINDOW, please register and show your support for
        our efforts. $20 is a small price to pay for all that B-WINDOW
        offers. And please don't give anyone a registered copy of
        B-WINDOW.

        The distribution version of B-WINDOW has one library file
        (QBV4.QLB) that is compatible with QuickBASIC Version 4. This
        file is usable only in the interactive environment.

        A B-WINDOW REGISTERED disk has the QBV4 file in ".OBJ" format for
        linking to your QuickBASIC program, as well as the assembler
        source code file QBV4.ASM. Also included is BWIN20BC.OBJ,


                                                                        25





                                                   BASIC WINDOWING TOOLBOX
   -----------------------------------------------------------------------


        suitable for linking with BASIC programs compiled by earlier
        BASIC compilers.

        You can register at the following address:

            Christopher McVicar
            P. O. Box 647
            Avon, Connecticut  06001
            Ph: (203) 678-8771

        The above price includes domestic postage. Add $3 dollars for
        overseas postage. There is no surcharge for USA orders shipped to
        Canada or Mexico. Connecticut residents must pay 7 1/2% sales
        tax. MasterCard and Visa accepted. Use the order form at the end
        of this documentation, or order by phone.

        B-WINDOW is sent on a DOS 2.0 formatted double-sided floppy
        diskette.


   IMAGEPRINT

        Another User-Supported product is ImagePrint, a software package
        that allows your IBM Graphics Printer/Proprinter/Epson/compatible
        dot matrix printer to produce excellent print quality.

        Most print quality enhancing programs and so-called letter
        quality printers only make two print-head passes to form
        characters, and the results show it. Our sophisticated font
        design process, combined with three print-head passes, gives a
        print quality nothing else matches.

        Text can be formatted and individual characters can be bold,
        italic, double width, half-high, 17.1 or 12 or 10 cpi,
        superscripted or subscripted, and underlined. Fonts can be
        dynamically switched during printing and each font contains an
        entire IBM Graphics Printer's character set, so you don't need an
        IBM Graphics Printer to print ASCII characters 128-255. Both 80
        and 136 column versions of ImagePrint are included on a
        REGISTRATION diskette.

        REGISTERED ImagePrint, with a total of 6 fonts and support for
        both 80 and 136 column printers, is available for $20.

        The above prices include postage. Connecticut residents must pay
        7 1/2% sales tax. We accept MasterCard and Visa. Use the order
        form at the end of this documentation, or order by phone.









                                                                        26





                                                   BASIC WINDOWING TOOLBOX
   -----------------------------------------------------------------------


   RESTRICTIONS

        The BASIC WINDOWING TOOLBOX (B-WINDOW) software package is
        Copyright (C) Christopher McVicar 1985,1986,1987,1988.

        You may freely copy the distribution version of B-WINDOW and give
        it to your friends or acquaintances.  You must not charge more
        than $7 for this service, to cover the cost of reproducing a
        diskette.

        The distribution version of B-WINDOW is a single entity. No files
        may be deleted or modified, whether B-WINDOW is copied onto
        another diskette, transmitted by a telecommunications link, or
        any other means of transfer.

        The ONLY source of REGISTERED B-WINDOW is Christopher McVicar.
        Anyone selling or giving away the B-WINDOW source code and/or the
        ".OBJ" files for use with BASIC compilers, is breaking the law.

        No-one may sell or represent B-WINDOW, or a derivative of
        B-WINDOW that uses any or all of the B-WINDOW code, as their own
        "windowing toolbox" product.

        Registered users may use B-WINDOW without any other restrictions.


   DISCLAIMER

        Users of B-WINDOW do so at their own risk. No representations as
        to B-WINDOW's suitability for any purpose are made. Users of
        B-WINDOW are entirely responsible for loss or damage of any kind
        caused by B-WINDOW.
























                                                                        27





                      B-WINDOW REGISTRATION/ORDER FORM
                                (IMAGE V2.3)

     ____________________________________________________________________

                            Christopher McVicar
                               P. O. Box 647
                           Avon, Connecticut 06001
                             Ph: (203) 678-8771

     ____________________________________________________________________



       Name                        ___________________________________

       Company                     ___________________________________

       Address                     ___________________________________

       Address                     ___________________________________

       City, State, Zip            ___________________________________

       Phone number                ___________________________________



       __ B_WINDOW REGISTRATION diskette                   $20.00
          (Latest version, compiler support files,
           assembler source code)

       __ ImagePrint REGISTRATION diskette                 $20.00
          (Latest version, 80 & 136 column printers,
           total of 6 fonts)

       __ Overseas Postage (air mail)                       $3.00

           Connecticut residents add 7 1/2% sales tax   __________


                                        Total Enclosed  __________


    Payment is by:

       __ Check

       __ Visa     __MasterCard


    Card number _______________________________ Expiration date ________

    Card Holder Signature ______________________________________________

    Card Holder Name (Please Print) ____________________________________







```
{% endraw %}

## BWDEMOI.BAS

{% raw %}
```bas
100 'BWDEMOI.BAS  Interpreter B-WINDOW demo
110 '
120 '   This program demonstrates using B-WINDOW with standard
130 '   interpreted BASIC. The windowing file B-WIN20I.BIN is
140 '   BLOADed. Do not compile this program without first making
150 '   it compatible with a B-WINDOW .OBJ (object) file. See the
160 '   B-WINDOW documentation for details.
170 '
180 ' The following 2 lines initialize windowing. Do not forget
190 ' to include these lines at the beginning of your program!
200 ' And do not alter them. (If the "CLEAR" was in the subroutine
210 ' at 60060, the subroutine would never return)
215 '
220 CLEAR,&H8000        'limit BASIC to half way up segment
230 GOSUB 60060
240 '
250 ' Write on screen so window background is visible
260 '
270 S$ = "Window background   "
280 ATTRIB% = 7
290 CALL WFGCOLOR (ATTRIB%)
300 ATTRIB% = 0
310 CALL WBGCOLOR (ATTRIB%)
320 FOR I = 1 TO 88
330   CALL WWRITE (S$)
340 NEXT I
350 '
360 'Define the window
370 '
380 WID%=70 : HGT%=10 : BDR%=1 '1 = true
390 CALL WDEF (WNUM1%, WID%, HGT%, BDR%)
400 '
410 'Open the window
420 '
430 X%=4 : Y%=3 : CLR%=1 : WBGC%=0 : BTYPE%=2 : BFGC%=7 : BBGC%=0
440 CALL WOPEN (STATUS%, WNUM1%, X%, Y%, CLR%, WBGC%, BTYPE%, BFGC%, BBGC%)
450 '
460 'Write in the window
470 '
480 ATTRIB% = W.NORM
490 S$ = "  BWDEMOI.BAS - Demonstration of B-WINDOW in use"
500 CALL WWRITE (S$)
510 X% = 5 : Y% = 2
520 CALL WGOTOXY (X%, Y%)
530 S$ = "- Uses the B-WINI.MRG file"
540 CALL WWRITE (S$)
550 Y% = 3
560 CALL WGOTOXY (X%, Y%)
570 S$ = "- 20000 byte window buffer (B-WIN20I.BIN)"
580 CALL WWRITE (S$)
590 Y% = 4
600 CALL WGOTOXY (X%, Y%)
610 S$ = "- Uses the functions WDEF, WOPEN, WCLOSE, WGOTOXY, WWRITE"
620 CALL WWRITE (S$)
630 Y% = 5
640 CALL WGOTOXY (X%, Y%)
650 S$ = "- Demonstrates reopening windows in a different location"
660 CALL WWRITE (S$)
670 X% = 42 : Y% = 7
680 CALL WGOTOXY (X%, Y%)
690 ATTRIB% = 15
700 CALL WFGCOLOR (ATTRIB%)
710 S$="Press any key to continue"
720 CALL WWRITE (S$)
730 ATTRIB% = 7
740 CALL WFGCOLOR (ATTRIB%)
750 'Wait for a key to be pressed
760 V$=INKEY$ : IF V$="" THEN GOTO 760
770 '
780 ' Close window
790 '
800 CALL WCLOSE
810 '
820 'Reopen window at different location with a different border
830 '
840 X%=8 : Y%=12 : CLR%=0 : WBGC%=0 : BTYPE%=5 : BFGC%=7 : BBGC%=0
850 CALL WOPEN (STATUS%, WNUM1%, X%, Y%, CLR%, WBGC%, BTYPE%, BFGC%, BBGC%)
860 V$=INKEY$ : IF V$="" THEN GOTO 860
870 '
880 ' Close window again
890 '
900 CALL WCLOSE
910 '
920 ' Reopen window again at different location with a different border
930 '
940 X%=0 : Y%=0 : CLR%=0 : WBGC%=0 : BTYPE%=5 : BFGC%=7 : BBGC%=7
950 CALL WOPEN (STATUS%, WNUM1%, X%, Y%, CLR%, WBGC%, BTYPE%, BFGC%, BBGC%)
960 V$=INKEY$ : IF V$="" THEN GOTO 960
970 '
980 ' Close window for last time
990 '
1000 CALL WCLOSE
1010 '
1020 ' Use WGOTOXY on standard 80x25 screen
1030 '
1040 X%=50 : Y%=24
1050 CALL WGOTOXY (X%, Y%)
1060 S$="Press any key to continue"
1070 CALL WWRITE (S$)
1080 V$=INKEY$ : IF V$="" THEN GOTO 1080
1090 CLS
60000 '
60010 ' B-WINI.MRG - B-WINDOW merge file
60020 '
60030 ' Merge this code with BASIC programs using B-WINDOW
60040 ' functions if you are using a BASIC interpreter. DO NOT
60050 ' include this code in a compiled program. See the
60052 ' documentation for details.
60054 '
60056 CLS : STOP 'Terminate main body of BASIC program
60058 '
60060 ' <== Entry point of initialization
60070 '
60110 '
60120 'Find out value of the data segment register DS. Use
60130 'a 16 byte array that can also be used for the WINT86
60140 'function. The short assembler subroutine that is poked
60150 'into the array returns the DS segment register value
60160 '
60170 DEF SEG
60180 W.DS% = 0
60190 DIM WREGARAY%(8)
60200 WPTR = VARPTR(WREGARAY%(0)) 'pointer to start of array
60210 IF WPTR < 0 THEN WPTR = WPTR+65536!
60220 POKE WPTR,&H89:POKE WPTR+1,&HE5                    'mov  bp,sp
60230 POKE WPTR+2,&H8C:POKE WPTR+3,&HD8                  'mov  ax,ds
60240 POKE WPTR+4,&H8B:POKE WPTR+5,&H5E:POKE WPTR+6,&H4  'mov  bx,[bp+4]
60250 POKE WPTR+7,&H89:POKE WPTR+8,&H7                   'mov  [bx],ax
60260 POKE WPTR+9,&HCA:POKE WPTR+10,&H2:POKE WPTR+11,&H0 'retf 2
60270 CALL WPTR(W.DS%)
60280 '
60290 ' Set W.SEGBASE to half way up BASIC string space. The
60300 ' "CLEAR,&H8000" instruction at the beginning of the program
60310 ' created room for the BLOAD.
60320 '
60330 W.SEGBASE = W.DS%+&H800
60340 DEF SEG = W.SEGBASE
60350 '
60360 ' The BLOADed ".BIN" file has a table of entry points
60370 ' for the windowing functions. The following assignments
60380 ' are the offsets of the various functions in the table
60390 '
60400 WINIT = &H0
60410 WDEF = WINIT + 6
60420 WOPEN = WINIT + 12
60430 WCLOSE = WINIT + 18
60440 WKILL = WINIT + 24
60450 WWRITE = WINIT + 30
60460 WDSP1 = WINIT + 36
60470 WSCROLL = WINIT + 42
60480 WGETCX = WINIT + 48
60490 WGETCY = WINIT + 54
60500 WGOTOXY = WINIT + 60
60510 WBORDER = WINIT + 66
60520 WERRDISPLAYON = WINIT + 72
60530 WERRDISPLAYOFF = WINIT + 78
60540 WINT86 = WINIT + 84
60550 WLPTSELECT = WINIT + 90
60560 WLPTIMOUT = WINIT + 96
60570 WFGCOLOR = WINIT + 102
60580 WBGCOLOR = WINIT + 108
60584 WSCRNTYPE = WINIT + 114
60590 '
60680 ' Do NOT change the BLOAD offset!
60690 '
60700 BLOAD "b-win20i.bin", 0   'offset of zero
60710 '
60720 ' WINIT MUST be called before any other windowing functions
60730 '
60740 CALL WINIT (WSTATUS%)
60750 IF WSTATUS% <> 1 THEN PRINT "Windowing initialization error":STOP
60760 '
60770 RETURN 'End of windowing initialization
```
{% endraw %}

## FILES527.TXT

{% raw %}
```
Disk No:  527
Program Title: BASIC WINDOWING TOOLBOX version 2.3
PC-SIG version: 2.5

BASIC WINDOWING TOOLBOX (B-WINDOW) is a collection of functions that
give windowing capability to a BASIC programmer.  Windows can be opened
over sections of the screen and, when closed, the overwritten section of
screen is restored.  With B-WINDOW, BASIC programs look more visually
exciting and professional.  B-WINDOW works with both compiled and
interpreted BASIC.  Special windowing cursor control, and string,
character display and border drawing are included.  Everything happens
at top speed because B-WINDOW was written in C, converted to assembler,
and hand-optimized.

Usage:  BASIC Programming Tool.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $20.00

File Descriptions:

B-WIN20I BIN  Data file.
B-WINDOW DOC  Program documentation file.
B-WINI   MRG  Program for merging BWINDOW programs.
B-WREAD  ME   Information about the program.
BWDEMOI  BAS  Demo file.
QBDEMO   BAS  Source code of QBDEMO.EXE.
QBDEMO   EXE  Demonstration program.
QBV4     QLB  Data file.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║              <<<<  Disk #527 BASIC WINDOWING TOOLBOX  >>>>              ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation to your printer type:                         ║
║                   MANUAL (press enter)                                  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## QBDEMO.BAS

{% raw %}
```bas



     'QBDEMO.BAS:  Demo of compiled QuickBASIC Version 4 with B-WINDOW

     '   Compile this as "QBDEMO.OBJ"
     '   Then link to "QBV4.OBJ" (available, with source code, for $20)
     '            or
     '   Load "QBV4.QLB" when you run QuickBASIC interactively:
     '      QB QBDEMO /LQBV4.QLB


     ' windowing constants

     w.mono% = 0: w.cga% = 1: w.ega% = 2
     w.true% = 1: w.false% = 0: w.error% = 0: w.success% = 1
     ' 6 border types; no border,single line, double line, mixed 1 & 2, block
     w.nobdr% = 0: w.sngln% = 1: w.dbln% = 2:
     w.mxd1% = 3: w.mxd2% = 4: w.blkln% = 5

     ' determine if color or monochrome video card

     CALL wscrntype(stype%)
     IF stype% = w.mono% THEN
        ' set everything to white-on-black if monochrome board

        'window 1    window 2    window 3    window 4
         wbgc1% = 0: wbgc2% = 0: wbgc3% = 0: wbgc4% = 0  ' background color
         bfgc1% = 7: bfgc2% = 7: bfgc3% = 7: bfgc4% = 7  ' foreground color
         bbgc1% = 0: bbgc2% = 0: bbgc3% = 0: bbgc4% = 0  ' background color
         wtc1% = 7:  wtc2% = 7:  wtc3% = 7:  wtc4% = 7   ' window text color
         sfgc1% = 7: sbgc1% = 0                          ' string color
     ELSE
        ' color setup

        'window 1   window 2   window 3   window 4
         wbgc1% = 2: wbgc2% = 5: wbgc3% = 7: wbgc4% = 5
         bfgc1% = 5: bfgc2% = 4: bfgc3% = 1: bfgc4% = 2
         bbgc1% = 2: bbgc2% = 4: bbgc3% = 1: bbgc4% = 2
         wtc1% = 7: wtc2% = 7: wtc3% = 0: wtc4% = 14
         sfgc1% = 12: sbgc1% = 1
     END IF

     ' initialize windowing. do not forget to do this!
     CALL winit(status%)
     IF status% = w.error% THEN PRINT "initialization error": STOP

     ' draw a border on screen
     x% = 8: y% = 5: wid% = 55: hgt% = 7: btype% = w.blkln%
     CALL wborder(status%, x%, y%, wid%, hgt%, btype%)

     ' write on 1st screen
     CALL wgotoxy(18, 7)
     CALL wfgcolor(15)
     CALL wwrite("Basic Windowing Toolbox Version 2.3")
     CALL wgotoxy(15, 8)
     CALL wfgcolor(7)
     CALL wwrite("Compiled QuickBASIC Demonstration Program")
     CALL wgotoxy(12, 9)
     CALL wwrite("Source: QBDEMO.BAS        Linked with: QBV4.OBJ")
     CALL wgotoxy(50, 23)
     CALL wwrite("Press any key to continue")
     GOSUB keypress

     ' define 4 windows

     wid% = 75: hgt% = 15: bdr% = w.true%
     CALL wdef(wnum1%, wid%, hgt%, bdr%)
     wid% = 70: hgt% = 20
     CALL wdef(wnum2%, wid%, hgt%, bdr%)
     wid% = 55: hgt% = 20
     CALL wdef(wnum3%, wid%, hgt%, bdr%)
     wid% = 38: hgt% = 12
     CALL wdef(wnum4%, wid%, hgt%, bdr%)

     ' open window 1

     x% = 0: y% = 9: btype% = w.dbln%: clr% = w.true%
     CALL wopen(status%, wnum1%, x%, y%, clr%, wbgc1%, btype%, bfgc1%, bbgc1%)

     ' write in window 1

     CALL wfgcolor(wtc1%)
     CALL wbgcolor(wbgc1%)
     CALL wgotoxy(0, 2)
     CALL wwrite("Text can be ")
     CALL wfgcolor(wtc1% + 16)
     CALL wwrite("blinking, ")
     CALL wfgcolor(15 + 16)
     CALL wwrite("blinking bright, ")
     CALL wfgcolor(wtc1%)
     CALL wwrite("or just ")
     CALL wfgcolor(15)
     CALL wwrite("bright. ")
     CALL wfgcolor(wtc1%)
     CALL wwrite("All graphics card colors are also available. ")
     IF stype% <> w.mono% THEN
        ' display colors
        x% = 6: y% = 5
        FOR y% = 5 TO 7
           CALL wgotoxy(x%, y%)
           FOR i% = 1 TO 15
              CALL wfgcolor(i%)
              CALL wwrite("████") 'ascii 219, which has no background
           NEXT i%
        NEXT y%
     END IF
     CALL wgotoxy(24, 10)
     CALL wwrite("Press any key to continue")
     GOSUB keypress

     ' open window 2

     x% = 9: y% = 1
     CALL wopen(status%, wnum2%, x%, y%, clr%, wbgc2%, btype%, bfgc2%, bbgc2%)

     ' write lots of text in window 2

     CALL wfgcolor(wtc2%)
     CALL wbgcolor(wbgc2%)
     FOR i = 1 TO 70
        CALL wwrite("Scrolling ")
        CALL wfgcolor(15 + 16)
        CALL wwrite("up ")
        CALL wfgcolor(wtc2%)
        CALL wwrite("in the window ")
     NEXT i
     dir% = 0: num% = 5
     CALL wscroll(dir%, num%)
     CALL wgotoxy(0, 17)
     CALL wwrite("Press any key to continue")
     GOSUB keypress

     ' open window 3

     x% = 0: y% = 3: btype% = w.mxd1%: clr% = w.true%
     CALL wopen(status%, wnum3%, x%, y%, clr%, wbgc3%, btype%, bfgc3%, bbgc3%)

     ' write to window 3

     CALL wfgcolor(wtc3%)
     CALL wbgcolor(wbgc3%)
     CALL wgotoxy(1, 1)
     CALL wwrite("You can define and edit fields:")
     x% = 5
     CALL wgotoxy(x%, 2)
     CALL wwrite("- <CR> to finish with each field")
     CALL wgotoxy(x%, 3)
     CALL wwrite("- Arrow keys to move left and right")
     CALL wgotoxy(x%, 4)
     CALL wwrite("- HOME moves to string start")
     CALL wgotoxy(x%, 5)
     CALL wwrite("- END moves to string end")
     CALL wgotoxy(x%, 6)
     CALL wwrite("- DEL erases cursor position")
     CALL wgotoxy(x%, 7)
     CALL wwrite("- BACKSPACE deletes to left")
     CALL wgotoxy(x%, 8)
     CALL wwrite("- Auto erase if first key is text")
     ' define strings with optional initial value
     s1$ = "Kenneth Page         "
     s2$ = "59 Beech Street      "
     s3$ = "Springfield, AZ 85999"
     CALL wgotoxy(1, 10): CALL wwrite("Name:")
     CALL wgotoxy(1, 12): CALL wwrite("Addr:")
     CALL wgotoxy(1, 14): CALL wwrite("Addr:")
     ' set up string display colors
     CALL wfgcolor(sfgc1%)
     CALL wbgcolor(sbgc1%)
     CALL wgotoxy(7, 10): CALL wwrite(s1$)
     CALL wgotoxy(7, 12): CALL wwrite(s2$)
     CALL wgotoxy(7, 14): CALL wwrite(s3$)
     ' size of editing field on screen is string length-1,
     ' so have at least one extra trailing space
     s1$ = s1$ + " ": s2$ = s2$ + " ": s3$ = s3$ + " "
     CALL wgotoxy(7, 10): CALL wgetstr(s1$)
     CALL wgotoxy(7, 12): CALL wgetstr(s2$)
     CALL wgotoxy(7, 14): CALL wgetstr(s3$)
     ' get rid of trailing NULL in strings
     s1$ = LEFT$(s1$, INSTR(s1$, CHR$(0)) - 1)
     s2$ = LEFT$(s2$, INSTR(s2$, CHR$(0)) - 1)
     s3$ = LEFT$(s3$, INSTR(s3$, CHR$(0)) - 1)
     CALL wfgcolor(wtc3%)
     CALL wbgcolor(wbgc3%)
     CALL wgotoxy(20, 17)
     CALL wwrite("Press any key to continue")
     GOSUB keypress

     ' open window 4

     x% = 30: y% = 6: btype% = w.blkln%: clr% = w.true%
     CALL wopen(status%, wnum4%, x%, y%, clr%, wbgc4%, btype%, bfgc4%, bbgc4%)

     ' write to window 4

     CALL wfgcolor(wtc4%)
     CALL wbgcolor(wbgc4%)
     CALL wgotoxy(0, 1)
     CALL wwrite("Type in characters.  The lines auto-")
     CALL wgotoxy(0, 2)
     CALL wwrite("matically wrap-around when the right")
     CALL wgotoxy(0, 3)
     CALL wwrite("margin is reached.  Carriage return")
     CALL wgotoxy(0, 4)
     CALL wwrite("causes scrolling. Press ")
     CALL wfgcolor(15)
     CALL wwrite("ESC ")
     CALL wfgcolor(wtc4%)
     CALL wwrite("to quit")
     CALL wgotoxy(0, 6)
     v$ = "x"
     WHILE (ASC(v$) <> 27)   '27 = ASCII value for ESCAPE character
       GOSUB keypress
       IF ASC(v$) <> 27 THEN
          ' character was <CR>? (ASCII 13)
          IF ASC(v$) <> 13 THEN
             CALL wwrite(v$)
          ELSE
             dir% = 0: num% = 1: CALL wscroll(dir%, num%)
             CALL wgetcy(y%)
             x% = 0: CALL wgotoxy(x%, y%)
          END IF
       END IF
     WEND

     ' close window 4

     CALL wclose
     GOSUB keypress

     ' close window 3

     CALL wclose
     GOSUB keypress

     ' close window 2

     CALL wclose
     GOSUB keypress

     ' reopen window 2 at a different location

     x% = 0: y% = 5: btype% = w.mxd2%: clr% = w.false%
     CALL wopen(status%, wnum2%, x%, y%, clr%, wbgc2%, btype%, bfgc2%, bbgc2%)
     GOSUB keypress

     ' close window 2 again

     CALL wclose
     GOSUB keypress

     ' close window 1

     CALL wclose
     GOSUB keypress

     ' clear screen

     CALL winit(status%)
     END

     '***************
     ' KEYPRESS
     ' subroutine that waits for the next key press
     '

keypress:
       v$ = ""
       WHILE v$ = ""
          v$ = INKEY$
       WEND
       RETURN

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0527

     Volume in drive A has no label
     Directory of A:\

    B-WIN20I BIN     26770   7-15-88   3:05p
    B-WINDOW DOC     66629   1-23-89   2:38p
    B-WINI   MRG      2567   7-15-88   3:05p
    B-WREAD  ME       3303   7-15-88   3:05p
    BWDEMOI  BAS      5655   7-15-88   3:05p
    QBDEMO   BAS      8293   7-15-88   3:05p
    QBDEMO   EXE     36593   7-15-88   3:05p
    QBV4     QLB     32397   7-15-88   3:05p
    FILES527 TXT      1257   2-08-89   1:45p
    GO       BAT        38  11-25-87  10:57a
    GO       TXT       463   2-08-89  12:23p
    MANUAL   BAT       147   1-19-89   9:21a
           12 file(s)     184112 bytes
                          130048 bytes free
