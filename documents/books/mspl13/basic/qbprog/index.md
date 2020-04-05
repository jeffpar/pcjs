---
layout: page
title: MS QuickBASIC 4.5 Programming in BASIC
permalink: /documents/books/mspl13/basic/qbprog/
redirect_from: /pubs/pc/reference/microsoft/mspl13/basic/qbprog/
---

The following document is from the [Microsoft Programmer's Library 1.3](../../) CD-ROM.

{% raw %}

```none
Microsoft QuickBASIC:  Programming in BASIC


════════════════════════════════════════════════════════════════════════════


Microsoft(R) QuickBASIC:  Programming in BASIC

For IBM(R) Personal Computers and Compatibles


════════════════════════════════════════════════════════════════════════════


    Information in this document is subject to change without notice and does
    not represent a commitment on the part of Microsoft Corporation. The
    software described in this document is furnished under a license agreement
    or nondisclosure agreement. The software may be used or copied only in
    accordance with the terms of the agreement. It is against the law to copy
    the software on any medium except as specifically allowed in the license
    or nondisclosure agreement. No part of this manual may be reproduced or
    transmitted in any form or by any means, electronic or mechanical,
    including photocopying and recording, for any purpose without the express
    written permission of Microsoft.

    (C)Copyright Microsoft Corporation, 1987, 1988. All rights reserved.

    Simultaneously published in the U.S. and Canada.

    Printed and bound in the United States of America.

    Microsoft, MS, MS-DOS, CodeView, GW-BASIC, and XENIX

    are registered trademarks of Microsoft Corporation.

    Hayes is a registered trademark of Hayes Microcomputer Products, Inc.

    IBM and PS/2 are registered trademarks of International Business Machines
    Corporation.

    Intel is a registered trademark of Intel Corporation.

    ProKey is a trademark of RoseSoft, Inc.

    SideKick and SuperKey are registered trademarks of Borland International,
    Inc.

    WordStar is a registered trademark of MicroPro International Corporation.



────────────────────────────────────────────────────────────────────────────
Contents

Introduction
            The QuickBASIC Language
            The QuickBASIC Environment
            Using This Manual
                Selected Programming Topics
                The Heart of BASIC
                Appendixes
            Document Conventions
            Programming Style in this Manual

PART 1  SELECTED PROGRAMMING TOPICS

Chapter 1  Control-Flow Structures
            1.1  Changing Statement Execution Order
            1.2  Boolean Expressions
            1.3  Decision Structures
                1.3.1  Block IF...THEN...ELSE
                1.3.2  SELECT CASE
                        1.3.2.1  Using the SELECT CASE Statement
                        1.3.2.2  SELECT CASE Versus ON...GOSUB
            1.4  Looping Structures
                1.4.1  FOR...NEXT Loops
                        1.4.1.1  Exiting a FOR...NEXT Loop with EXIT FOR
                        1.4.1.2  Pausing Program Execution with FOR...NEXT
                1.4.2  WHILE...WEND Loops
                1.4.3  DO...LOOP Loops
                        1.4.3.1  Loop Tests: One Way to Exit DO...LOOP
                        1.4.3.2  EXIT DO: An Alternative Way to Exit
                                DO...LOOP
            1.5  Sample Applications
                1.5.1  Checkbook-Balancing Program (CHECK.BAS)
                1.5.2  Carriage-Return and Line-Feed Filter (CRLF.BAS)

Chapter 2  SUB and FUNCTION Procedures
            2.1  Procedures: Building Blocks for Programming
            2.2  Comparing Procedures with Subroutines and Functions
                2.2.1  Comparing SUB with GOSUB
                        2.2.1.1  Local and Global Variables
                        2.2.1.2  Use in Multiple-Module Programs
                        2.2.1.3  Operating on Different Sets of Variables
                2.2.2  Comparing FUNCTION with DEF FN
                        2.2.2.1  Local and Global Variables
                        2.2.2.2  Changing Variables Passed to the Procedure
                        2.2.2.3  Calling the Procedure within Its
                                Definition
                        2.2.2.4  Use in Multiple-Module Programs
            2.3  Defining Procedures
            2.4  Calling Procedures
                2.4.1  Calling a FUNCTION Procedure
                2.4.2  Calling a SUB Procedure
            2.5  Passing Arguments to Procedures
                2.5.1  Parameters and Arguments
                2.5.2  Passing Constants and Expressions
                2.5.3  Passing Variables
                        2.5.3.1  Passing Simple Variables
                        2.5.3.2  Passing an Entire Array
                        2.5.3.3  Passing Individual Array Elements
                        2.5.3.4  Using Array-Bound Functions
                        2.5.3.5  Passing an Entire Record
                        2.5.3.6  Passing Individual Elements of a Record
                2.5.4  Checking Arguments with the DECLARE Statement
                        2.5.4.1  When QuickBASIC Does Not Generate a DECLARE
                                Statement
                        2.5.4.2  Developing Programs outside the QuickBASIC
                                Environment
                        2.5.4.3  Using Include Files for Declarations
                        2.5.4.4  Declaring Procedures in Quick Libraries
                2.5.5  Passing Arguments by Reference
                2.5.6  Passing Arguments by Value
            2.6  Sharing Variables with SHARED
                2.6.1  Sharing Variables with Specific Procedures in a
                        Module
                2.6.2  Sharing Variables with All Procedures in a Module
                2.6.3  Sharing Variables with Other Modules
                2.6.4  The Problem of Variable Aliasing
            2.7  Automatic and STATIC Variables
            2.8  Preserving Values of Local Variables with the STATIC
                Statement
            2.9  Recursive Procedures
                2.9.1  The Factorial Function
                2.9.2  Adjusting the Size of the Stack
            2.10  Transferring Control to Another Program with CHAIN
            2.11  Sample Application: Recursive Directory Search
                    (WHEREIS.BAS)

Chapter 3  File and Device I/O
            3.1  Printing Text on the Screen
                3.1.1  Screen Rows and Columns
                3.1.2  Displaying Text and Numbers with PRINT
                3.1.3  Displaying Formatted Output with PRINT USING
                3.1.4  Skipping Spaces and Advancing to a Specific Column
                3.1.5  Changing the Number of Columns or Rows
                3.1.6  Creating a Text Viewport
            3.2  Getting Input from the Keyboard
                3.2.1  The INPUT Statement
                3.2.2  The LINE INPUT Statement
                3.2.3  The INPUT$ Function
                3.2.4  The INKEY$ Function
            3.3  Controlling the Text Cursor
                3.3.1  Positioning the Cursor
                3.3.2  Changing the Cursor's Shape
                3.3.3  Getting Information about the Cursor's Location
            3.4  Working with Data Files
                3.4.1  How Data Files Are Organized
                3.4.2  Sequential and Random-Access Files
                3.4.3  Opening a Data File
                        3.4.3.1  File Numbers in BASIC
                        3.4.3.2  File Names in BASIC
                3.4.4  Closing a Data File
                3.4.5  Using Sequential Files
                        3.4.5.1  Records in Sequential Files
                        3.4.5.2  Putting Data in a New Sequential File
                        3.4.5.3  Reading Data from a Sequential File
                        3.4.5.4  Adding Data to a Sequential File
                        3.4.5.5  Other Ways to Write Data to a Sequential
                                File
                        3.4.5.6  Other Ways to Read Data from a Sequential
                                File
                3.4.6  Using Random-Access Files
                        3.4.6.1  Records in Random-Access Files
                        3.4.6.2  Adding Data to a Random-Access File
                        3.4.6.7  Reading Data Sequentially
                        3.4.6.8  Using Record Numbers to Retrieve Records
                3.4.7  Binary File I/O
                        3.4.7.1  Comparing Binary Access and Random Access
                        3.4.7.2  Positioning the File Pointer with SEEK
            3.5  Working with Devices
                3.5.1  Differences between Device I/O and File I/O
                3.5.2  Communications through the Serial Port
            3.6  Sample Applications
                3.6.1  Perpetual Calendar (CAL.BAS)
                3.6.2  Indexing a Random-Access File (INDEX.BAS)
                3.6.3  Terminal Emulator (TERMINAL.BAS)

Chapter 4  String Processing
            4.1  Strings Defined
            4.2  Variable- and Fixed-Length Strings
                4.2.1  Variable-Length Strings
                4.2.2  Fixed-Length Strings
            4.3  Combining Strings
            4.4  Comparing Strings
            4.5  Searching for Strings
            4.6  Retrieving Parts of Strings
                4.6.1  Retrieving Characters from the Left Side of a
                        String
                4.6.2  Retrieving Characters from the Right Side of a
                        String
                4.6.3  Retrieving Characters from Anywhere in a String
            4.7  Generating Strings
            4.8  Changing the Case of Letters
            4.9  Strings and Numbers
            4.10 Changing Strings
            4.11 Sample Application: Converting a String to a Number
                    (STRTONUM.BAS)

Chapter 5  Graphics
            5.1  What You Need for Graphics Programs
            5.2  Pixels and Screen Coordinates
            5.3  Drawing Basic Shapes: Points, Lines, Boxes, and Circles
                5.3.1  Plotting Points with PSET and PRESET
                5.3.2  Drawing Lines and Boxes with LINE
                        5.3.2.1  Using the STEP Option
                        5.3.2.2  Drawing Boxes
                        5.3.2.3  Drawing Dotted Lines
            5.4  Drawing Circles and Ellipses with CIRCLE
                5.4.1  Drawing Circles
                5.4.2  Drawing Ellipses
                5.4.3  Drawing Arcs
                5.4.4  Drawing Pie Shapes
                5.4.5  Drawing Shapes to Proportion with the Aspect Ratio
            5.5  Defining a Graphics Viewport
            5.6  Redefining Viewport Coordinates with WINDOW
                5.6.1  The Order of Coordinate Pairs
                5.6.2  Keeping Track of View and Physical Coordinates
            5.7  Using Colors
                5.7.1  Selecting a Color for Graphics Output
                5.7.2  Changing the Foreground or Background Color
                5.7.3  Changing Colors with PALETTE and PALETTE USING
            5.8  Painting Shapes
                5.8.1  Painting with Colors
                5.8.2  Painting with Patterns: Tiling
                        5.8.2.1  Pattern-Tile Size in Different Screen
                                Modes
                        5.8.2.2  Creating a Single-Color Pattern in Screen
                                Mode 2
                        5.8.2.3  Creating a Multicolor Pattern in Screen Mode
                                1
                        5.8.2.4  Creating a Multicolor Pattern in Screen Mode
                                8
            5.9  DRAW: a Graphics Macro Language
            5.10 Basic Animation Techniques
                5.10.1  Saving Images with GET
                5.10.2  Moving Images with PUT
                5.10.3  Animation with GET and PUT
                5.10.4  Animating with Screen Pages
            5.11 Sample Applications
                5.11.1  Bar-Graph Generator (BAR.BAS)
                5.11.2  Color in a Figure Generated Mathematically
                        (MANDEL.BAS)
                5.11.3  Pattern Editor (EDPAT.BAS)

Chapter 6  Error and Event Trapping
            6.1  Error Trapping
                6.1.1  Activating Error Trapping
                6.1.2  Writing an Error-Handling Routine
                        6.1.2.1  Using ERR to Identify Errors
                        6.1.2.2  Returning from an Error-Handling Routine
            6.2  Event Trapping
                6.2.1  Detecting Events by Polling
                6.2.2  Detecting Events by Trapping
                6.2.3  Specifying the Event to Trap and Activating Event
                        Trapping
                6.2.4  Events That BASIC Can Trap
                6.2.5  Suspending or Disabling Event Trapping
                6.2.6  Trapping Keystrokes
                        6.2.6.1  Trapping User-Defined Keys
                        6.2.6.2  Trapping User-Defined Shifted Keys
                6.2.7  Trapping Music Events
            6.3  Error and Event Trapping in SUB or FUNCTION Procedures
            6.4  Trapping across Multiple Modules
                6.4.1  Event Trapping across Modules
                6.4.2  Error Trapping across Modules
            6.5  Trapping Errors and Events in Programs Compiled with BC
            6.6  Sample Application: Trapping File-Access Errors
                (FILERR.BAS)

Chapter 7  Programming with Modules
            7.1  Why Use Modules?
            7.2  Main Modules
            7.3  Modules Containing Only Procedures
            7.4  Creating a Procedures-Only Module
            7.5  Loading Modules
            7.6  Using the DECLARE Statement with Multiple Modules
            7.7  Accessing Variables from Two or More Modules
            7.8  Using Modules During Program Development
            7.9  Compiling and Linking Modules
            7.10 Quick Libraries
                7.10.1  Creating Quick Libraries
            7.11 Tips for Good Programming with Modules

PART 2  HEART OF BASIC

Chapter 8  Statement and Function Summary
            ABS Function
            ASC Function
            ATN Function
            BEEP Statement
            BLOAD Statement
            BSAVE Statement
            CALL Statement (BASIC Procedures)
            CALL, CALLS Statement (Non-BASIC Procedures)
            CALL INT86OLD Statements
            CALL ABSOLUTE Statement
            CALL INTERRUPT Statements
            CDBL Function
            CHAIN Statement
            CHDIR Statement
            CHR$ Function
            CINT Function
            CIRCLE Statement
            CLEAR Statement
            CLNG Function
            CLOSE Statement
            CLS Statement
            COLOR Statement
            COM Statements
            COMMAND$ Function
            COMMON Statement
            CONST Statement
            COS Function
            CSNG Function
            CSRLIN Function
            CVI, CVS, CVL, CVD Functions
            CVSMBF, CVDMBF Functions
            DATA Statement
            DATE$ Function
            DATE$ Statement
            DECLARE Statement (BASIC Procedures)
            DECLARE Statement (Non-BASIC Procedures)
            DEF FN Statement
            DEF SEG Statement
            DEFtype Statements
            DIM Statement
            DO...LOOP Statements
            DRAW Statement
            END Statement
            ENVIRON$ Function
            ENVIRON Statement
            EOF Function
            ERASE Statement
            ERDEV, ERDEV$ Functions
            ERR, ERL Functions
            ERROR Statement
            EXIT Statement
            EXP Function
            FIELD Statement
            FILEATTR Function
            FILES Statement
            FIX Function
            FOR...NEXT Statement
            FRE Function
            FREEFILE Function
            FUNCTION Statement
            GET Statement──File I/O
            GET Statement──Graphics
            GOSUB...RETURN Statements
            GOTO Statement
            HEX$ Function
            IF...THEN...ELSE Statements
            INKEY$ Function
            INP Function
            INPUT$ Function
            INPUT Statement
            INPUT # Statement
            INSTR Function
            INT Function
            IOCTL$ Function
            IOCTL Statement
            KEY Statements
            KEY(n) Statements
            KILL Statement
            LBOUND Function
            LCASE$ Function
            LEFT$ Function
            LEN Function
            LET Statement
            LINE Statement
            LINE INPUT Statement
            LINE INPUT # Statement
            LOC Function
            LOCATE Statement
            LOCK...UNLOCK Statement
            LOF Function
            LOG Function
            LPOS Function
            LPRINT, LPRINT USING Statements
            LSET Statement
            LTRIM$ Function
            MID$ Function
            MID$ Statement
            MKD$, MKI$, MKL$, MKS$ Functions
            MKDIR Statement
            MKSMBF$, MKDMBF$ Functions
            NAME Statement
            OCT$ Function
            ON ERROR Statement
            ON event Statements
            ON UEVENT GOSUB Statement
            ON...GOSUB, ON...GOTO Statements
            OPEN Statement
            OPEN COM Statement
            OPTION BASE Statement
            OUT Statement
            PAINT Statement
            PALETTE, PALETTE USING Statements
            PCOPY Statement
            PEEK Function
            PEN Function
            PEN ON, OFF, and STOP Statements
            PLAY Function
            PLAY Statement
            PLAY ON, OFF, and STOP Statements
            PMAP Function
            POINT Function
            POKE Statement
            POS Function
            PRESET Statement
            PRINT Statement
            PRINT #, PRINT # USING Statements
            PRINT USING Statement
            PSET Statement
            PUT Statement──File I/O
            PUT Statement──Graphics
            RANDOMIZE Statement
            READ Statement
            REDIM Statement
            REM Statement
            RESET Statement
            RESTORE Statement
            RESUME Statement
            RETURN Statement
            RIGHT$ Function
            RMDIR Statement
            RND Function
            RSET Statement
            RTRIM$ Function
            RUN Statement
            SADD Function
            SCREEN Function
            SCREEN Statement
            SEEK Function
            SEEK Statement
            SELECT CASE Statement
            SETMEM Function
            SGN Function
            SHARED Statement
            SHELL Statement
            SIN Function
            SLEEP Statement
            SOUND Statement
            SPACE$ Function
            SPC Function
            SQR Function
            STATIC Statement
            STICK Function
            STOP Statement
            STR$ Function
            STRIG Function and Statement
            STRIG ON, OFF, and STOP Statements
            STRING$ Function
            SUB Statements
            SWAP Statement
            SYSTEM Statement
            TAB Function
            TAN Function
            TIME$ Function
            TIME$ Statement
            TIMER Function
            TIMER ON, OFF, and STOP Statements
            TRON/TROFF Statements
            TYPE Statement
            UBOUND Function
            UCASE$ Function
            UEVENT Statement
            UNLOCK Statement
            VAL Function
            VARPTR, VARSEG Functions
            VARPTR$ Function
            VIEW Statement
            VIEW PRINT Statement
            WAIT Statement
            WHILE...WEND Statement
            WIDTH Statement
            WINDOW Statement
            WRITE Statement
            WRITE # Statement

Chapter 9  Quick-Reference Tables
            9.1  Summary of Control-Flow Statements
            9.2  Summary of Statements Used in BASIC Procedures
            9.3  Summary of Standard I/O Statements
            9.4  Summary of File I/O Statements
            9.5  Summary of String-Processing Statements and Functions
            9.6  Summary of Graphics Statements and Functions
            9.7  Summary of Trapping Statements and Functions

Appendix A  Converting BASICA Programs to QuickBASIC

Appendix B  Differences from Previous Versions of QuickBASIC

Appendix C  Limits in QuickBASIC

Appendix D  Keyboard Scan Codes and ASCII Character Codes

Appendix E  BASIC Reserved Words

Appendix F  Metacommands

Appendix G  Compiling and Linking from DOS

Appendix H  Creating and Using Quick Libraries

Appendix I  Error Messages

Figures
Figure 1.1  Logic of FOR...NEXT Loop with Positive STEP
Figure 1.2  Logic of FOR...NEXT Loop with Negative STEP
Figure 1.3  Logic of WHILE...WEND Loop
Figure 1.4  Logic of DO WHILE...LOOP
Figure 1.5  Logic of DO UNTIL...LOOP
Figure 1.6  Logic of DO...LOOP WHILE
Figure 1.7  Logic of DO...LOOP UNTIL
Figure 2.1  Parameters and Arguments
Figure 3.1  Text Output on Screen
Figure 3.2  Records in Sequential Files
Figure 3.3  Records in a Random-Access File
Figure 5.1  Coordinates of Selected Pixels in Screen Mode 2
Figure 5.2  How Angles Are Measured for CIRCLE
Figure 5.3  The Aspect Ratio In Screen Mode 1
Figure 5.4  WINDOW Contrasted with WINDOW SCREEN
Figure 5.5  Patterned Circle
Figure 6.1  Program Flow of Control with RESUME
Figure 6.2  Program Flow of Control with RESUME NEXT
Figure 7.1  Main Module Showing Module-Level Code and Procedures
Figure H.1  Make Library Dialog Box

Tables
Table 1.1  Relational Operators Used in Basic
Table 1.2  Block IF...THEN...ELSE Syntax and Example
Table 1.3  SELECT CASE Syntax and Example
Table 1.4  FOR...NEXT Syntax and Example
Table 1.5  WHILE...WEND Syntax and Example
Table 1.6  DO...LOOP Syntax and Example: Test at the Beginning
Table 1.7  DO...LOOP Syntax and Example: Test at the End
Table 3.1  Devices Supported by BASIC for I/O
Table 5.1  Color Palettes in Screen Mode 1
Table 5.2  Background Colors in Screen Mode 1
Table 5.3  Binary to Hexadecimal Conversion
Table 5.4  The Effect of Different Action Options in Screen Mode 2
Table 5.5  The Effect of Different Action Options on Color in Screen Mode 1
(Palette 1)
Table 6.1  BC Command-Line Options for Error and Event Trapping
Table 9.1  Statements Used in Looping and Decision-Making
Table 9.2  Statements Used in Procedures
Table 9.3  Statements and Functions Used for Standard I/O
Table 9.4  Statements and Functions Used for Data-File I/O
Table 9.5  Statements and Functions Used for Processing Strings
Table 9.6  Statements and Functions Used for Graphics Output
Table 9.7  Statements andn Functions Used in Error and Event Trapping
Table A.1  Statements Requiring Modification
Table B.1  Features of Microsoft QuickBASIC Version 4.5
Table B.2  Menus with New Commands in QuickBASIC Version 4.5
Table B.3  Editing-Key Changes
Table B.4  QB and BC Options Not Used in QuickBASIC Versions 4.0 or 4.5
Table B.5  Options Introduced in Version 4.0 for the QB and BC Commands
Table B.6  Debugging-Key Changes
Table B.7  Changes to the BASIC Language
Table C.1  QuickBASIC Limits
Table G.1  Input to the BC Command
Table G.2  Input to the LINK Command
Table G.3  Input to the LIB Command
Table I.1  Run-Time Error Codes



────────────────────────────────────────────────────────────────────────────
Introduction

    Microsoft(R) QuickBASIC 4.5 is a major advance in making BASIC both more
    powerful and easier to use. It provides the most advanced BASIC yet
    offered for microcomputers, supported by an operating environment that
    allows you to focus on program creation──not the mechanics of writing or
    debugging.


The QuickBASIC Language

    If you already know how to program in BASICA (or a similar interpreted
    BASIC), you'll appreciate the enhanced language features QuickBASIC
    provides to make it easier to write and maintain your software. For
    example:

    ■ The SELECT CASE statement cleanly transfers control to any block of code
    without the use of nested IF...THEN...ELSE statements. SELECT CASE
    permits an exceptionally wide range of test expressions, so you can
    create exactly the comparison you need.

    ■ QuickBASIC's SUB and FUNCTION procedures allow you to place groups of
    program statements into subprograms that your main program can call
    repeatedly. QuickBASIC's modularity makes it easy to save these
    procedures and reuse them in other programs.

    ■ QuickBASIC procedures are fully recursive──a procedure can call itself
    repeatedly. This simplifies the programming of many numerical and
    sorting algorithms that are best expressed recursively.

    ■ You can define your own data types, made up of any combination of
    integer, real, and string variables. Related variables can be
    conveniently grouped under a single name, which simplifies passing them
    to a procedure or writing them to a file.

    ■ QuickBASIC supports binary file access. Your programs can read and
    manipulate files in any format because binary I/O can directly access
    any byte in the file.

    QuickBASIC is a powerful development tool for professional use. Yet it is
    also the ideal language for beginning and intermediate programmers──people
    who aren't professional programmers but need a language that helps them
    reach their programming goals efficiently.


The QuickBASIC Environment

    QuickBASIC isn't just an outstanding language. It is also an integrated
    programming environment that significantly simplifies writing and
    debugging software:

    ■ As you type in your program, a smart editor checks each line for syntax
    errors. When you are ready to run, press a single key to execute the
    program instantly. If something is wrong, use the full-screen editor to
    correct the problem, then run the program again.

    ■ You can debug your programs without exiting QuickBASIC. The integrated
    debugger lets you examine and alter variables, execute any part of the
    program, or halt execution when a particular condition is met. All these
    things happen within the QuickBASIC environment; you don't have to alter
    the program or add PRINT statements.

    ■ QuickBASIC 4.5 has two new commands to make the debugger even more
    powerful: the Instant Watch command and the Break on Errors command.

    ■ Also new to QuickBASIC 4.5 is the Microsoft QB Advisor, our on-line
    help. The QB Advisor is always at hand, whether you are writing,
    running, or debugging. Just place the cursor on the keyword or
    user-defined name you want to know more about, then press F1. The QB
    Advisor describes the syntax of BASIC statements and functions, explains
    how to use them, and even provides usable programming examples.


Using This Manual

    This manual is in three parts. Part 1, "Selected Programming Topics,"
    provides information on specific programming techniques and strategies.
    Part 2, "Heart of BASIC," and the appendixes contain important reference
    material.

Selected Programming Topics

    Each chapter in this first section focuses on a single programming area.
    Studying this material will help you to quickly master

    ■ Control-flow structures

    ■ SUB and FUNCTION procedures

    ■ File and device input and output

    ■ String processing

    ■ Graphics

    ■ Error and event trapping

    ■ Programming with modules

    The presentation of each topic is straightforward and easy to understand,
    with many short programming examples that demonstrate how each part of
    BASIC works. The progression is from simple to more complex topics, so you
    can work through this material at your own pace without worrying about the
    order in which to study it. The focus throughout is on utility, not
    theory──how you can solve common programming problems with QuickBASIC.

    In addition to the short examples, the chapters contain complete working
    programs that demonstrate the programming principles presented in that
    chapter. For your convenience, these programs are also included on your
    QuickBASIC release disks.

    If you're an experienced BASIC programmer, you'll probably want to browse
    through the table of contents for a topic that catches your interest. If
    you're a novice programmer, though, you should probably work through each
    chapter from beginning to end. If you have never programmed in any
    language, you should start with Chapter 4 of Learning to Use Microsoft
    QuickBASIC, "Interlude: BASIC for Beginners."

    Regardless of your interests or background, these seven chapters will help
    you learn almost everything you need to know to write sophisticated BASIC
    applications.

The Heart of BASIC

    The second part of this manual, the "Heart of BASIC," is a handy,
    two-part quick reference to BASIC statements and functions.

    Chapter 8, "Statement and Function Summary," is an alphabetically
    arranged summary of every BASIC keyword, describing its action or use and
    displaying its syntax. If your memory needs jogging on statement or
    function use, turn to this section.

    In Chapter 9, "Quick-Reference Tables," the most commonly used BASIC
    statements and functions are displayed in six sections in table form, with
    each statement given a brief description. The contents of these sections
    match the material presented in Chapters 1 through 6 of "Selected
    Programming Topics." If you are trying to figure out how to accomplish a
    particular programming task, turn to this section.

Appendixes

    The third section of this manual is a group of appendixes containing
    reference information on

    ■ Converting BASICA programs

    ■ Differences from previous versions

    ■ Limits in QuickBASIC

    ■ Keyboard scan codes and ASCII codes

    ■ BASIC reserved words

    ■ Metacommands

    ■ Compiling and linking from DOS

    ■ Creating and using Quick libraries

    ■ Error messages


Document Conventions

    This manual uses the following typographic conventions:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Example of Convention    Description
    ──────────────────────────────────────────────────────────────────────────
    QB.LIB, ADD.EXE, COPY,   Uppercase (capital) letters indicate file names
    LINK, /X                 and DOS-level commands. Uppercase is also used
                            for command-line options (unless the application
                            accepts only lowercase).

    SUB, IF, LOOP, PRINT,    Bold capital letters indicate language-specific
    WHILE, TIME$             keywords with special meaning to Microsoft BASIC.
    Example of Convention    Description
    ──────────────────────────────────────────────────────────────────────────
    WHILE, TIME$             keywords with special meaning to Microsoft BASIC.
                            Keywords are a required part of statement syntax,
                            unless they are enclosed in double brackets as
                            explained below. In programs you write, you must
                            enter keywords exactly as shown. However, you can
                            use uppercase letters or lowercase letters.

    CALL NewProc(arg1!,      This kind of type is used for program examples,
    var2%)                   program output, and error messages within the
                            text.

    '$INCLUDE:'BC.BI'        A column of three dots indicates that part of the
    .                      example program has been intentionally omitted.
    .
    .
    CHAIN "PROG1"
    END

    ' Make one pass          The apostrophe (single right quotation mark)
    Example of Convention    Description
    ──────────────────────────────────────────────────────────────────────────
    ' Make one pass          The apostrophe (single right quotation mark)
                            marks the beginning of a comment in sample
                            programs.

    filespec                 Italic letters indicate placeholders for
                            information you must supply, such as a file name.
                            Italics are also occasionally used in the text
                            for emphasis.

    [[optional-item]]        Items inside double square brackets are optional.

    {choice1 | choice2}      Braces and a vertical bar indicate a choice among
                            two or more items. You must choose one of the
                            items unless all of the items are also enclosed
                            in double square brackets.

    repeating elements...    Three dots following an item indicate that more
                            items having the same form may appear.

    Example of Convention    Description
    ──────────────────────────────────────────────────────────────────────────

    ALT+F1                   Capital letters are used for the names of keys
                            and key sequences, such as ENTER and CTRL+R.

                            A plus (+) indicates a combination of keys. For
                            example, CTRL+E means to hold down the CTRL key
                            while pressing the E key.

                            The carriage-return key, sometimes marked with a
                            bent arrow, is referred to as ENTER.

                            The cursor movement ("arrow") keys on the numeric
                            keypad are called DIRECTION keys. Individual
                            DIRECTION keys are referred to by the direction
                            of the arrow on the key top (LEFT, RIGHT, UP,
                            DOWN) or the name on the key top (PGUP, PGDN).

                            The key names used in this manual correspond to
                            the names on the IBM(R) Personal Computer keys.
    Example of Convention    Description
    ──────────────────────────────────────────────────────────────────────────
                            the names on the IBM(R) Personal Computer keys.
                            Other machines may use different names.

    "defined term"           Quotation marks usually indicate a new term
                            defined in the text.

    Video Graphics Array     Acronyms are usually spelled out the first time
    (VGA)                    they are used.
    ──────────────────────────────────────────────────────────────────────────


    The syntax below (for the "LOCK...UNLOCK" statements) illustrates many of
    the typographic conventions in this manual:

    LOCK[[#]]filenumber[[,{record|[[start]] TO end}]] . . .
    UNLOCK[[#]]filenumber[[,{record |[[start]] TO end}]]

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    Throughout this manual, the term "DOS" refers to both the MS-DOS(R) and
    IBM Personal Computer DOS operating systems. The name of a specific
    operating system is used when it is necessary to note features that are
    unique to that system. The term "BASICA" refers to interpreted versions
    of BASIC in general.
    ──────────────────────────────────────────────────────────────────────────


Programming Style in this Manual

    The following guidelines were used in writing programs in this manual and
    on the distribution disks. These guidelines are only recommendations for
    program readability; you are not obliged to follow them when writing your
    own programs.

    ■ Keywords and symbolic constants appear in uppercase letters:

    ' PRINT, DO, LOOP, UNTIL are keywords:
    PRINT "Title Page"
    DO LOOP UNTIL Response$ = "N"

    ' FALSE and TRUE are symbolic constants
    ' equal to 0 and -1, respectively:
    CONST FALSE = 0, TRUE = NOT FALSE

    ■ Variable names are in lowercase with an initial capital letter; variable
    names with more than one syllable may contain other capital letters to
    clarify the division:

    NumRecords% = 45
    DateOfBirth$ = "11/24/54"

    ■ Line labels are used instead of line numbers. The use of line labels is
    restricted to event-trapping and error-handling routines, as well as
    DATA statements when referenced with RESTORE:

    ' TimerHandler and ScreenTwoData are line labels:
    ON TIMER GOSUB TimerHandler
    RESTORE ScreenTwoData

    ■ As noted in the preceding section, a single apostrophe (') introduces
    comments:

    ' This is a comment; these two lines
    ' are ignored when the program is running.

    ■ Control-flow blocks and statements in procedures or subroutines are
    indented from the enclosing code:

    SUB GetInput STATIC
        FOR I% = 1 TO 10
            INPUT X
            IF X > 0 THEN
                .
                .
                .
            ELSE
                .
                .
                .
            END IF
        NEXT I%
    END SUB



────────────────────────────────────────────────────────────────────────────
PART 1  SELECTED PROGRAMMING TOPICS
────────────────────────────────────────────────────────────────────────────

    Part 1 introduces the fundamentals of programming in BASIC. Simpler topics
    are covered first.

    Chapter 1 discusses the control-flow structures that direct your
    program's execution. Chapter 2 is about QuickBASIC SUB and FUNCTION
    procedures, two very powerful programming tools. Chapter 3 describes the
    ways you can use QuickBASIC to work with the data your program accepts and
    produces. Chapter 4 covers the use of text strings, and Chapter 5
    presents QuickBASIC's graphics capabilities.

    More advanced topics are covered in the last two chapters. Chapter 6
    looks at error and event trapping, and Chapter 7 tells you how to use
    programming with modules to your advantage.



────────────────────────────────────────────────────────────────────────────
Chapter 1  Control-Flow Structures

    This chapter shows you how to use control-flow structures──specifically,
    loops and decision statements──to control the flow of your program's
    execution. Loops make a program execute a sequence of statements however
    many times you want. Decision statements let the program decide which of
    several alternative paths to take.

    When you are finished with this chapter, you will know how to do the
    following tasks related to using loops and decision statements in your
    BASIC programs:

    ■ Compare expressions using relational operators

    ■ Combine string or numeric expressions with logical operators and
    determine if the resulting expression is true or false

    ■ Create branches in the flow of the program with the statements
    IF...THEN...ELSE and SELECT CASE

    ■ Write loops that repeat statements a specific number of times

    ■ Write loops that repeat statements while or until a certain condition is
    true


1.1  Changing Statement Execution Order

    Left unchecked by control-flow statements, a program's logic flows through
    statements from left to right, top to bottom. While some very simple
    programs can be written with only this unidirectional flow, most of the
    power and utility of any programming language comes from its ability to
    change statement execution order with decision structures and loops.

    With a decision structure, a program can evaluate an expression, then
    branch to one of several different groups of related statements (statement
    blocks) depending on the result of the evaluation. With a loop, a program
    can repeatedly execute statement blocks.

    If you are coming to this version of BASIC after programming in BASICA,
    you will appreciate the added versatility of these additional control-flow
    structures:

    ■ The block IF...THEN...ELSE statement

    ■ The SELECT CASE statement

    ■ The DO...LOOP and EXIT DO statements

    ■ The EXIT FOR statement, which provides an alternative way to exit
    FOR...NEXT loops


1.2  Boolean Expressions

    A Boolean expression is any expression that returns the value "true" or
    "false." BASIC uses Boolean expressions in certain kinds of decision
    structures and loops. The following IF...THEN...ELSE statement contains a
    Boolean expression, X < Y:

    IF X < Y THEN CALL Procedure1 ELSE CALL Procedure2

    In the previous example, if the Boolean expression is true (if the value
    of the variable X is in fact less than the value of the variable Y), then
    Procedure1 is executed; otherwise (if X is greater than or equal to Y),
    Procedure2 is executed.

    The preceding example also demonstrates a common use of Boolean
    expressions: comparing two other expressions (in this case, X and Y) to
    determine the relationship between them. These comparisons are made with
    the relational operators shown in Table 1.1.

    Table 1.1  Relational Operators Used in BASIC
    Operator                 Meaning
    ──────────────────────────────────────────────────────────────────────────
    =                        Equal

    < >                      Not equal

    <                        Less than

    <=                       Less than or equal to

    >                        Greater than

    >=                       Greater than or equal to
    ──────────────────────────────────────────────────────────────────────────

    You can use these relational operators to compare string expressions. In
    this case "greater than," "less than," and so on refer to alphabetical
    order. For example, the following expression is true, since the word
    "deduce" comes alphabetically before the word "deduct":

    "deduce" < "deduct"

    Logical operators

    Boolean expressions also frequently use the "logical operators" AND, OR,
    NOT, XOR, IMP, and EQV. These operators allow you to construct compound
    tests from one or more Boolean expressions. For example,

    expression1 AND expression2

    is true only if expression1 and expression2 are both true. Thus, in the
    following example, the message All sorted is printed only if both the
    Boolean expressions X <= Y and Y <= Z are true:

    IF (X <= Y) AND (Y <= Z) THEN PRINT "All sorted"

    The parentheses around the Boolean expressions in the last example are not
    really necessary, since relational operators such as <= are evaluated
    before logical operators such as AND. However, parentheses make a complex
    Boolean expression more readable and ensure that its components are
    evaluated in the order that you intend.

    BASIC uses the numeric values -1 and 0 to represent true and false,
    respectively. You can see this by asking BASIC to print a true expression
    and a false expression, as in the next example:

    x = 5
    y = 10
    PRINT x < y  ' Evaluate, print a "true"  Boolean expression.
    PRINT x > y  ' Evaluate, print a "false" Boolean expression.

    Output

    -1
    0

    The value -1 for true makes more sense when you consider how BASIC's NOT
    operator works: NOT inverts each bit in the binary representation of its
    operand, changing 1 bits to 0 bits, and 0 bits to 1 bits. Therefore, since
    the integer value 0 (false) is stored internally as a sequence of sixteen
    0 bits, NOT 0 (true) is stored internally as sixteen 1 bits, as shown
    below:

    0000000000000000

    TRUE = NOT FALSE = 1111111111111111

    In the two's-complement method that BASIC uses to store integers, sixteen
    1 bits represent the value -1.

    Note that BASIC outputs -1 when it evaluates a Boolean expression as true;
    however, BASIC considers any nonzero value to be true, as shown by the
    output from the following example:

    INPUT "Enter a value: ", x

    IF x THEN PRINT x "is true."

    Output

    Enter a value: 2
    2 is true.

    The NOT operator in BASIC is a "bitwise" operator. Some programming
    languages, such as C and Pascal, have both a bitwise NOT operator and a
    "logical" NOT operator. The distinction is as follows:

    ■ A bitwise NOT returns false (0) only for the value -1.

    ■ A logical NOT returns false (0) for any true (nonzero) value.

    In BASIC, for any true expression not equal to -1, NOT expression returns
    another true value, as shown by the following list:

    Value of expression      Value of NOT expression
    ──────────────────────────────────────────────────────────────────────────
    1                       -2

    2                       -3

    -2                        1

    -1                        0
    ──────────────────────────────────────────────────────────────────────────

    So beware: NOT expression is false only if expression evaluates to a value
    of -1. If you define Boolean constants or variables for use in your
    programs, use -1 for true.

    You can use the values 0 and -1 to define helpful mnemonic Boolean
    constants for use in loops or decisions. This technique is used in many of
    the examples in this manual, as shown in the following program fragment,
    which sorts the elements of an array named Amount in ascending order:

    ' Define symbolic constants to use in program:
    CONST FALSE = 0, TRUE = NOT FALSE
    .
    .
    .

    DO
        Swaps = FALSE
        FOR I = 1 TO TransacNum - 1
        IF Amount(I) < Amount(I+1) THEN
            SWAP Amount(I), Amount(I+1)
            Swaps = TRUE
        END IF
        NEXT I
    LOOP WHILE Swaps        ' Keep looping while Swaps is TRUE.
    .
    .
    .


1.3  Decision Structures

    Based on the value of an expression, decision structures cause a program
    to take one of the following two actions:

    1. Execute one of several alternative statements within the decision
        structure itself

    2. Branch to another part of the program outside the decision structure

    In BASICA, decision-making is handled solely by the single-line
    IF...THEN[[...ELSE]] statement. In its simplest form (IF...THEN) the
    expression following the IF keyword is evaluated. If the expression is
    true, the program executes the statements following the THEN keyword; if
    the expression is false, the program continues with the next line after
    the IF...THEN statement. Lines 50 and 70 from the following BASICA program
    fragment show examples of IF...THEN:

    30  INPUT A
    40  ' If A is greater than 100, print a message and branch
    45  ' back to line 30; otherwise, go on to line 60:
    50  IF A > 100 THEN PRINT "Too big": GOTO 30
    60  ' If A is equal to 100, branch to line 300;
    65  ' otherwise, go on to line 80:
    70  IF A = 100 THEN GOTO 300
    80  PRINT A/100: GOTO 30
    .
    .
    .

    By adding the ELSE clause to an IF...THEN statement, you can have your
    program take one set of actions (those following the THEN keyword) if an
    expression is true, and another set of actions (those following the ELSE
    keyword) if it is false. The next program fragment shows how ELSE works in
    an IF...THEN...ELSE statement:

    10 INPUT "What is your password"; Pass$
    15 ' If user enters "sword", branch to line 50;
    20 ' otherwise, print a message and branch back to line 10:
    30 IF Pass$="sword" THEN 50 ELSE PRINT "Try again": GOTO 10
    .
    .
    .

    While BASICA's single-line IF...THEN...ELSE is adequate for simple
    decisions, it can lead to virtually unreadable code in cases of more
    complicated ones. This is especially true if you write your programs so
    all alternative actions take place within the IF...THEN...ELSE statement
    itself or if you nest IF...THEN... ELSE statements (that is, if you put
    one IF...THEN...ELSE inside another, a perfectly legal construction). As
    an example of how difficult it is to follow even a simple test, consider
    the next fragment from a BASICA program:

    10 ' The following nested IF...THEN...ELSE statements print
    15 ' different output for each of the following four cases:
    20 '    1) A <= 50, B <= 50     3)  A > 50, B <= 50
    25 '    2) A <= 50, B > 50      4)  A > 50, B > 50
    30
    35 INPUT A, B
    40
    45 ' Note: even though line 70 extends over several physical
    50 ' lines on the screen, it is just one "logical line"
    55 ' (everything typed before the <ENTER> key was pressed).
    60 ' BASICA wraps long lines on the screen.
    65
    70  IF A <= 50 THEN IF B <= 50 THEN PRINT "A <= 50, B <= 50"
    ELSE PRINT "A <= 50, B > 50" ELSE IF B <= 50 THEN PRINT "A >
    50, B <= 50" ELSE PRINT "A > 50, B > 50"

    To avoid the kind of complicated statement shown above, BASIC now includes
    the block form of the IF...THEN...ELSE statement, so that a decision is no
    longer restricted to one logical line. The following shows the same BASICA
    program rewritten to use block IF...THEN...ELSE:

    INPUT A, B
    IF A <= 50 THEN
        IF B <= 50 THEN
        PRINT "A <= 50, B <= 50"
        ELSE
        PRINT "A <= 50, B > 50"
        END IF
    ELSE
        IF B <= 50 THEN
        PRINT "A > 50, B <= 50"
        ELSE
        PRINT "A > 50, B > 50"
        END IF
    END IF

    QuickBASIC also provides the SELECT CASE...END SELECT (referred to as
    SELECT CASE) statement for structured decisions.

    Both the block IF...THEN...ELSE statement and the SELECT CASE statement
    allow the appearance of your code to be based on program logic, rather
    than requiring many statements to be crowded onto one line. This gives you
    increased flexibility while you are programming, as well as improved
    program readability and ease of maintenance when you are done.

1.3.1  Block IF...THEN...ELSE

    Table 1.2 shows the syntax of the block IF...THEN...ELSE statement and
    gives an example of its use.

    Table 1.2  Block IF...THEN...ELSE Syntax and Example
    Syntax                               Example
    ──────────────────────────────────────────────────────────────────────────
    IF condition1 THEN                   IF X > 0 THEN
    [[statementblock-1]]                 PRINT "X is positive"
    [[ELSEIF condition2 THEN               PosNum = PosNum + 1
    [[statementblock-2]]]]             ELSEIF X < 0 THEN
    .                                      PRINT "X is negative"
    .                                      NegNum = NegNum + 1
    .                                    ELSE
    [[ELSE                                 PRINT "X is zero"
    [[statementblock-n]]]]             END IF
    END IF
    ──────────────────────────────────────────────────────────────────────────

    The arguments condition1, condition2, and so on are expressions. They can
    be any numeric expression──in which case true becomes any nonzero value,
    and false is zero──or they can be Boolean expressions, in which case true
    is -1 and false is zero. As explained in Section 1.2, Boolean expressions
    typically compare two numeric or string expressions using one of the
    relational operators such as < or >=.

    Each IF, ELSEIF, and ELSE clause is followed by a block of statements.
    None of the statements in the block can be on the same line as the IF,
    ELSEIF, or ELSE clause; otherwise, BASIC considers it a single-line
    IF...THEN statement.

    BASIC evaluates each of the expressions in the IF and ELSEIF clauses from
    top to bottom, skipping over statement blocks until it finds the first
    true expression. When it finds a true expression, it executes the
    statements corresponding to the expression, then branches out of the block
    to the statement following the END IF clause.

    If none of the expressions in the IF or ELSEIF clauses is true, BASIC
    skips to the ELSE clause, if there is one, and executes its statements.
    Otherwise, if there is no ELSE clause, the program continues with the next
    statement after the END IF clause.

    The ELSE and ELSEIF clauses are both optional, as shown in the following
    example:

    ' If the value of X is less than 100, do the two statements
    ' before END IF; otherwise, go to the INPUT statement
    ' following END IF:

    IF X < 100 THEN
        PRINT X
        Number = Number + 1
    END IF
    INPUT "New value"; Response$
    .
    .
    .

    A single block IF...THEN...ELSE can contain multiple ELSEIF statements, as
    shown below:

    IF C$ >= "A" AND C$ <= "Z" THEN
        PRINT "Capital letter"
    ELSEIF C$ >= "a" AND C$ <= "z" THEN
        PRINT "Lowercase letter"
    ELSEIF C$ >= "0" AND C$ <= "9" THEN
        PRINT "Number"
    ELSE
        PRINT "Not alphanumeric"
    END IF

    At most, only one block of statements is executed, even if more than one
    condition is true. For example, if you enter the word ace as input to the
    next example, it prints the message Input too short but does not print the
    message Can't start with an a:

    INPUT Check$
    IF LEN(Check$) > 6 THEN
        PRINT "Input too long"
    ELSEIF LEN(Check$) < 6 THEN
        PRINT "Input too short"
    ELSEIF LEFT$(Check$, 1) = "a" THEN
        PRINT "Can't start with an a"
    END IF

    IF...THEN...ELSE statements can be nested; in other words, you can put an
    IF...THEN...ELSE statement inside another IF...THEN...ELSE statement, as
    shown here:

    IF X > 0 THEN
        IF Y > 0 THEN
        IF Z > 0 THEN
            PRINT "All are greater than zero."
        ELSE
            PRINT "Only X and Y greater than zero."
        END IF
        END IF
    ELSEIF X = 0 THEN
        IF Y = 0 THEN
        IF Z = 0 THEN
            PRINT "All equal zero."
        ELSE
            PRINT "Only X and Y equal zero."
        END IF
        END IF
    ELSE
        PRINT "X is less than zero."
    END IF

1.3.2  SELECT CASE

    The SELECT CASE statement is a multiple-choice decision structure similar
    to the block IF...THEN...ELSE statement. Block IF...THEN...ELSE can be
    used anywhere SELECT CASE can be used.

    The major difference between the two is that SELECT CASE evaluates a
    single expression, then executes different statements or branches to
    different parts of the program based on the result. In contrast, a block
    IF...THEN...ELSE can evaluate completely different expressions.

    Examples

    The following examples illustrate the similarities and differences between
    the SELECT CASE and IF...THEN...ELSE statements. Here is an example of
    using block IF...THEN...ELSE for a multiple-choice decision:

    INPUT X
    IF X = 1 THEN
        PRINT "One"
    ELSEIF X = 2 THEN
        PRINT "Two"
    ELSEIF X = 3 THEN
        PRINT "Three"
    ELSE
        PRINT "Must be integer from 1-3."
    END IF

    The above decision is rewritten using SELECT CASE below:

    INPUT X
    SELECT CASE X
        CASE 1
        PRINT "One"
        CASE 2
        PRINT "Two"
        CASE 3
        PRINT "Three"
        CASE ELSE
        PRINT "Must be integer from 1-3."
    END SELECT

    The following decision can be made either with the SELECT CASE or the
    block IF...THEN...ELSE statement. The comparison is more efficient with
    the IF...THEN...ELSE statement because different expressions are being
    evaluated in the IF and ELSEIF clauses.

    INPUT X, Y
    IF X = 0 AND Y = 0 THEN
        PRINT "Both are zero."
    ELSEIF X = 0 THEN
        PRINT "Only X is zero."
    ELSEIF Y = 0 THEN
        PRINT "Only Y is zero."
    ELSE
        PRINT "Neither is zero."
    END IF

    1.3.2.1  Using the SELECT CASE Statement

    Table 1.3 shows the syntax of a SELECT CASE statement and an example.

    Table 1.3  SELECT CASE Syntax and Example
    Syntax                               Example
    ──────────────────────────────────────────────────────────────────────────
    SELECT CASE expression               INPUT TestValue
    CASE expressionlist1               SELECT CASE TestValue
        [[statementblock-1]]               CASE 1, 3, 5, 7, 9
    [[CASE expressionlist2                 PRINT "Odd"
        [[statementblock-2]]]]             CASE 2, 4, 6, 8
    .                                      PRINT "Even"
    .                                    CASE IS < 1
    .                                      PRINT "Too low"
    [[CASE ELSE                          CASE IS > 9
        [[statementblock-n]]]]               PRINT "Too high"
    END SELECT                             CASE ELSE
                                            PRINT "Not an integer"
                                        END SELECT

    ──────────────────────────────────────────────────────────────────────────

    The expressionlist arguments following a CASE clause can be one or more of
    the following, separated by commas:

    ■ A numeric expression or a range of numeric expressions

    ■ A string expression or a range of string expressions

    To specify a range of expressions, use the following syntax for the CASE
    statement:

    CASE expression TO expression CASE IS relational-operator expression

    The relational-operator is any of the operators shown in Table 1.1. For
    example, if you use CASE 1 TO 4, the statements associated with this case
    are executed when the expression in the SELECT CASE statement is greater
    than or equal to 1 and less than or equal to 4. If you use CASE IS < 5,
    the associated statements are executed only if expression is less than 5.

    If you are expressing a range with the TO keyword, be sure to put the
    lesser value first. For example, if you want to test for a value between
    -5 and -1, write the CASE statement as follows:

    CASE -5 TO -1

    However, the following statement is not a valid way to specify the range
    from -5 to -1, so the statements associated with this case are never
    executed:

    CASE -1 TO -5

    Similarly, a range of string constants should list the string that comes
    first alphabetically:

    CASE "aardvark" TO "bear"

    Multiple expressions or ranges of expressions can be listed for each CASE
    clause, as in the following lines:

    CASE 1 TO 4, 7 TO 9, WildCard1%, WildCard2%
    CASE IS = Test$, IS = "end of data"
    CASE IS < LowerBound, 5, 6, 12, IS > UpperBound
    CASE IS < "HAN", "MAO" TO "TAO"

    If the value of the SELECT CASE expression appears in the list following a
    CASE clause, only the statements associated with that CASE clause are
    executed. Control then jumps to the first executable statement following
    END SELECT, not the next block of statements inside the SELECT CASE
    structure, as shown by the output from the next example (where the user
    enters 1):

    INPUT x
    SELECT CASE x
        CASE 1
        PRINT "One, ";
        CASE 2
        PRINT "Two, ";
        CASE 3
        PRINT "Three, ";
    END SELECT
    PRINT "that's all"

    Output

    ? 1
    One, that's all

    If the same value or range of values appears in more than one CASE clause,
    only the statements associated with the first occurrence are executed, as
    shown by the next example's output (where the user has entered ABORIGINE):

    INPUT Test$
    SELECT CASE Test$
        CASE "A" TO "AZZZZZZZZZZZZZZZZZ"
        PRINT "An uppercase word beginning with capital A"
        CASE IS < "A"
        PRINT "Some sequence of nonalphabetic characters"
        CASE "ABORIGINE"
        ' This case is never executed since ABORIGINE
        ' falls within the range in the first CASE clause:
        PRINT "A special case"
    END SELECT

    Output

    ? ABORIGINE
    An uppercase word beginning with capital A

    If you use a CASE ELSE clause, it must be the last CASE clause listed in
    the SELECT CASE statement. The statements between a CASE ELSE clause and
    an END SELECT clause are executed only if the expression does not match
    any of the other CASE selections in the SELECT CASE statement. In fact, it
    is a good idea to have a CASE ELSE statement in your SELECT CASE block to
    handle unforeseen values for expression. However, if there is no CASE ELSE
    statement and no match is found in any CASE statement for expression, the
    program continues execution.

    Example

    The following program fragment demonstrates a common use of the SELECT
    CASE statement: it prints a menu on the screen, then branches to different
    subprograms based on the number typed by the user.

    DO                ' Start menu loop.

        CLS                  ' Clear screen.

        ' Print five menu choices on the screen:
        PRINT "MAIN MENU" : PRINT
        PRINT "1)  Add New Names"
        PRINT "2)  Delete Names"
        PRINT "3)  Change Information"
        PRINT "4)  List Names"
        PRINT
        PRINT "5)  EXIT"

        ' Print input prompt:
        PRINT : PRINT "Type your selection (1 to 5):"

        ' Wait for the user to press a key. INPUT$(1)
        ' reads one character input from the keyboard:
        Ch$ = INPUT$(1)

        ' Use SELECT CASE to process response:
        SELECT CASE Ch$

        CASE "1"
            CALL AddData
        CASE "2"
            CALL DeleteData
        CASE "3"
            CALL ChangeData
        CASE "4"
            CALL ListData
        CASE "5"
            EXIT DO         ' The only way to exit the menu loop
        CASE ELSE
            BEEP
        END SELECT

    LOOP                     ' End menu loop.

    END

    ' Subprograms AddData, DeleteData, ChangeData, and ListData:
    .
    .
    .

    1.3.2.2  SELECT CASE Versus ON...GOSUB

    You can use the more versatile SELECT CASE statement as a replacement for
    the old ON expression {GOSUB| GOTO} statement. The SELECT CASE statement
    has many advantages over the ON...GOSUB statement, as summarized below:

    ■ The expression in SELECT CASE expression can evaluate to either a string
    or numeric value. The expression given in the statement ON
    expression{GOSUB| GOTO} must evaluate to a number within the range 0 to
    255.

    ■ The SELECT CASE statement branches to a statement block immediately
    following the matching CASE clause. In contrast, ON expression GOSUB
    branches to a subroutine in another part of the program.

    ■ CASE clauses can be used to test an expression against a range of
    values. When the range is quite large, this is not easily done with ON
    expression{GOSUB| GOTO}, especially as shown in the following fragments.

    In the fragment below, the ON...GOSUB statement branches to one of the
    subroutines 50, 100, or 150, depending on the value input by the user:

    X% = -1
    WHILE X%
        INPUT "Enter choice (0 to quit): ", X%
        IF X% = 0 THEN END
        WHILE X% < 1 OR X% > 12
        PRINT "Must be value from 1 to 12"
        INPUT "Enter choice (0 to quit): ", X%
        WEND
        ON x% GOSUB 50,50,50,50,50,50,50,50,100,100,100,150
    WEND
    .
    .
    .

    Contrast the preceding example with the next one, which uses a SELECT CASE
    statement with ranges of values in each CASE clause:

    DO
        INPUT "Enter choice (0 to quit): ", X%
        SELECT CASE X%
        CASE 0
            END
        CASE 1 TO 8       ' Replaces "subroutine 50"
                            ' in preceding example
        CASE 9 TO 11      ' Replaces "subroutine 100"
                            ' in preceding example
        CASE 12           ' Replaces "subroutine 150"
                            ' in preceding example
        CASE ELSE         ' Input was out of range.
            PRINT "Must be value from 1 to 12"
        END SELECT
    LOOP


1.4  Looping Structures

    Looping structures repeat a block of statements (the loop), either for a
    specified number of times or until a certain expression (the loop
    condition) is true or false.

    Users of BASICA are familiar with two looping structures, FOR...NEXT and
    WHILE...WEND, which are discussed in Sections 1.4.1 and 1.4.2,
    respectively. QuickBASIC has extended the available loop structures with
    the DO...LOOP statement, discussed in Section 1.4.3.

1.4.1  FOR...NEXT Loops

    A FOR...NEXT loop repeats the statements enclosed in the loop a definite
    number of times, counting from a starting value to an ending value by
    increasing or decreasing a loop counter. As long as the loop counter has
    not reached the ending value, the loop continues to execute. Table 1.4
    shows the syntax of the FOR...NEXT statement and gives an example of its
    use.

    Table 1.4  FOR...NEXT Syntax and Example
    Syntax                               Example
    ──────────────────────────────────────────────────────────────────────────
    FOR counter = start TO end [[STEP    FOR I% = 1 to 10
    stepsize]]                             Array%(I%) = I%
    [[statementblock-1]]               NEXT
    [[EXIT FOR
    [[statementblock-2]]]]
    NEXT[[counter]]
    ──────────────────────────────────────────────────────────────────────────

    In a FOR...NEXT loop, the counter variable initially has the value of the
    expression start. After each repetition of the loop, the value of counter
    is adjusted. If you leave off the optional STEP keyword, the default value
    for this adjustment is one; that is, one is added to counter each time the
    loop executes. If you use STEP, then counter is adjusted by the amount
    stepsize. The stepsize argument can be any numeric value; if it is
    negative, the loop counts down from start to end. After the counter
    variable is increased or decreased, its value is compared with end. At
    this point, if either of the following is true, the loop is completed:

    ■ The loop is counting up (stepsize is positive) and counter is greater
    than end.

    ■ The loop is counting down (stepsize is negative) and counter is less
    than end.

    Figure 1.1 shows the logic of a FOR...NEXT loop when the value of
    stepsize is positive.


    ┌────────────────────────────────────┐
    │                                    │
    │   Figure 1.1 can be found on       │
    │   page 20 of the printed manual.   │
    │                                    │
    └────────────────────────────────────┘

    Figure 1.1  Logic of FOR...NEXT Loop with Positive STEP

    Figure 1.2 shows the logic of a FOR...NEXT loop when the value of
    stepsize is negative.


    ┌────────────────────────────────────┐
    │                                    │
    │   Figure 1.2 can be found on       │
    │   page 21 of the printed manual.   │
    │                                    │
    └────────────────────────────────────┘

    Figure 1.2  Logic of FOR...NEXT Loop with Negative STEP

    A FOR...NEXT statement always "tests at the top," so if one of the
    following conditions is true, the loop is never executed:

    ■ Step size is positive, and the initial value of start is greater than
    the value of end:

    ' Loop never executes, because I% starts out greater
    ' than 9:
    FOR I% = 10 TO 9
        .
        .
        .
    NEXT I%

    ■ Step size is negative, and the initial value of start is less than the
    value of end:

    ' Loop never executes, because I% starts out less than 9:
    FOR I% =  -10 TO -9 STEP -1
        .
        .
        .
    NEXT I%

    You don't have to use the counter argument in the NEXT clause; however, if
    you have several nested FOR...NEXT loops (one loop inside another),
    listing the counter arguments can be a helpful way to keep track of what
    loop you are in.

    Here are some general guidelines for nesting FOR...NEXT loops:

    ■ If you use a loop counter variable in a NEXT clause, the counter for a
    nested loop must appear before the counter for any enclosing loop. In
    other words, the following is a legal nesting:

    FOR I = 1 TO 10
        FOR J = -5 TO 0
        .
        .
        .
        NEXT J
    NEXT I

    However, the following is not a legal nesting:

    FOR I = 1 TO 10
        FOR J = -5 TO 0
        .
        .
        .
        NEXT I
    NEXT J

    ■ If you use a separate NEXT clause to end each loop, then the number of
    NEXT clauses must always be the same as the number of FOR clauses.

    ■ If you use a single NEXT clause to terminate several levels of
    FOR...NEXT loops, then the loop-counter variables must appear after the
    NEXT clause in "inside-out" order:

    NEXT innermost-loopcounter,... , outermost-loopcounter

    In this case, the number of loop-counter variables in the NEXT clause
    must be the same as the number of FOR clauses.

    Examples

    The three program fragments below illustrate different ways of nesting
    FOR... NEXT loops to produce the identical output that follows. The first
    example shows nested FOR...NEXT loops with loop counters and separate NEXT
    clauses for each loop:

    FOR I = 1 TO 2
        FOR J = 4 TO 5
        FOR K = 7 TO 8
            PRINT I, J, K
        NEXT K
        NEXT J
    NEXT I

    The following example also uses loop counters but only one NEXT clause for
    all three loops:

    FOR I = 1 TO 2
        FOR J = 4 TO 5
        FOR K = 7 TO 8
            PRINT I, J, K
    NEXT K, J, I

    The final example shows nested FOR...NEXT loops without loop counters:

    FOR I = 1 TO 2
        FOR J = 4 TO 5
        FOR K = 7 TO 8
            PRINT I, J, K
        NEXT
        NEXT
    NEXT

    Output

    1             4             7
    1             4             8
    1             5             7
    1             5             8
    2             4             7
    2             4             8
    2             5             7
    2             5             8

    1.4.1.1  Exiting a FOR...NEXT Loop with EXIT FOR

    Sometimes you may want to exit a FOR...NEXT loop before the counter
    variable reaches the ending value of the loop. You can do this with the
    EXIT FOR statement. A single FOR...NEXT loop can have any number of EXIT
    FOR statements, and the EXIT FOR statements can appear anywhere within the
    loop. The following fragment shows one use for an EXIT FOR statement:

    ' Print the square roots of the numbers from 1 to 30,000.
    ' If the user presses any key while this loop is executing,
    ' control exits from the loop:
    FOR I% = 1 TO 30000
        PRINT SQR(I%)
        IF INKEY$ <> "" THEN EXIT FOR
    NEXT
    .
    .
    .

    EXIT FOR exits only the smallest enclosing FOR...NEXT loop in which it
    appears. For example, if the user pressed a key while the following nested
    loops were executing, the program would simply exit the innermost loop. If
    the outermost loop were still active (that is if the value of I% <= 100),
    control would pass right back to the innermost loop:

    FOR I% = 1 TO 100
        FOR J% = 1 TO 100
        PRINT I% / J%
        IF INKEY$ <> "" THEN EXIT FOR
        NEXT J%
    NEXT I%

    1.4.1.2  Pausing Program Execution with FOR...NEXT

    Many BASICA programs use an empty FOR...NEXT loop such as the following to
    insert a pause in a program:

    .
    .
    .
    ' There are no statements in the body of this loop;
    ' all it does is count from 1 to 10,000
    ' using integers (whole numbers).
    FOR I% = 1 TO 10000: NEXT
    .
    .
    .

    For very short pauses or pauses that do not have to be some exact
    interval, using FOR...NEXT is fine. The problem with using an empty
    FOR...NEXT loop in this way is that different computers, different
    versions of BASIC, or different compile-time options can all affect how
    quickly the arithmetic in a FOR... NEXT loop is performed. So the length
    of a pause can vary widely. QuickBASIC's SLEEP statement now provides a
    better alternative. (See Chapter 8, "Statement and Function Summary," for
    the syntax of SLEEP.)

1.4.2  WHILE...WEND Loops

    The FOR...NEXT statement is useful when you know ahead of time exactly how
    many times a loop should be executed. When you cannot predict the precise
    number of times a loop should be executed, but do know the condition that
    will end the loop, the WHILE...WEND statement is useful. Instead of
    counting to determine if it should keep executing a loop, WHILE...WEND
    repeats the loop as long as the loop condition is true.

    Table 1.5 shows the syntax of the WHILE...WEND statement and an example.

    Table 1.5  WHILE...WEND Syntax and Example
    Syntax                               Example
    ──────────────────────────────────────────────────────────────────────────
    WHILE condition                      INPUT R$
    [[statementblock]]                 WHILE R$ <> "Y" AND R$ <> "N"
    WEND                                   PRINT "Answer must be Y or N."
                                            INPUT R$
                                        WEND
    ──────────────────────────────────────────────────────────────────────────

    Example

    The following example assigns an initial value of ten to the variable X,
    then successively halves that value and keeps halving it until the value
    of X is less than .00001:

    X = 10

    WHILE X > .00001
        PRINT X
        X = X/2
    WEND

    Figure 1.3 illustrates the logic of a WHILE...WEND loop.


    ┌────────────────────────────────────┐
    │                                    │
    │   Figure 1.3 can be found on       │
    │   page 26 of the printed manual.   │
    │                                    │
    └────────────────────────────────────┘

    Figure 1.3  Logic of WHILE...WEND Loop

1.4.3  DO...LOOP Loops

    Like the WHILE...WEND statement, the DO...LOOP statement executes a block
    of statements an indeterminate number of times; that is, exiting from the
    loop depends on the truth or falsehood of the loop condition. Unlike
    WHILE...WEND, DO...LOOP allows you to test for either a true or false
    condition. You can also put the test at either the beginning or the end of
    the loop.

    Table 1.6 shows the syntax of a loop that tests at the loop's beginning.

    Table 1.6  DO...LOOP Syntax and Example: Test at the Beginning
    Syntax                               Example
    ──────────────────────────────────────────────────────────────────────────
    DO[[{WHILE| UNTIL} condition]]       DO UNTIL INKEY$ <> ""
    [[statementblock-1]]                 ' An empty loop that
    [[EXIT DO                            ' pauses until a key
    [[statementblock-2]]]]               ' is pressed
    LOOP                                 LOOP
    ──────────────────────────────────────────────────────────────────────────

    Figures 1.4 and 1.5 illustrate the two kinds of DO...LOOP statements
    that test at the beginning of the loop.


    ┌────────────────────────────────────┐
    │                                    │
    │   Figure 1.4 can be found on       │
    │   page 27 of the printed manual.   │
    │                                    │
    └────────────────────────────────────┘

    Figure 1.4  Logic of DO WHILE...LOOP


    ┌────────────────────────────────────┐
    │                                    │
    │   Figure 1.5 can be found on       │
    │   page 28 of the printed manual.   │
    │                                    │
    └────────────────────────────────────┘

    Figure 1.5  Logic of DO UNTIL...LOOP

    Table 1.7 shows the syntax of a loop that tests for true or false at the
    end of the loop.

    Table 1.7  DO...LOOP Syntax and Example: Test at the End
    Syntax                               Example
    ──────────────────────────────────────────────────────────────────────────
    DO                                   DO
    [[statementblock-1]]                 INPUT "Change: ", Ch
    [[EXIT DO                            Total = Total + Ch
    [[statementblock-2]]]]             LOOP WHILE Ch <> 0
    LOOP[[{WHILE| UNTIL} condition]]
    ──────────────────────────────────────────────────────────────────────────

    Figures 1.6 and 1.7 illustrate the two kinds of DO...LOOP statements
    that test at the end of the loop.


    ┌────────────────────────────────────┐
    │                                    │
    │   Figure 1.6 can be found on       │
    │   page 29 of the printed manual.   │
    │                                    │
    └────────────────────────────────────┘

    Figure 1.6  Logic of DO...LOOP WHILE


    ┌────────────────────────────────────┐
    │                                    │
    │   Figure 1.7 can be found on       │
    │   page 30 of the printed manual.   │
    │                                    │
    └────────────────────────────────────┘

    Figure 1.7  Logic of DO...LOOP UNTIL

    1.4.3.1  Loop Tests: One Way to Exit DO...LOOP

    You can use a loop test at the end of a DO...LOOP statement to create a
    loop in which the statements always execute at least once. With the
    WHILE...WEND statement, you sometimes have to resort to the trick of
    presetting the loop variable to some value in order to force the first
    pass through the loop. With DO...LOOP, such tricks are no longer
    necessary. The examples below illustrate both approaches:

    ' WHILE...WEND loop tests at the top, so assigning "Y"
    ' to Response$ is necessary to force execution of the
    ' loop at least once:
    Response$ = "Y"
    WHILE UCASE$(Response$) = "Y"
        .
        .
        .
        INPUT "Do again"; Response$
    WEND

    ' The same loop using DO...LOOP to test after the
    ' body of the loop:
    DO
        .
        .
        .
        INPUT "Do again"; Response$
    LOOP WHILE UCASE$(Response$) = "Y"

    You can also rewrite a condition expressed with WHILE using UNTIL instead,
    as in the following:

    ' =======================================================
    '                  Using DO WHILE NOT...LOOP
    ' =======================================================

    ' While the end of file 1 has not been reached, read
    ' a line from the file and print it on the screen:
    DO WHILE NOT EOF(1)
        LINE INPUT #1, LineBuffer$
        PRINT LineBuffer$
    LOOP

    ' =======================================================
    '                    Using DO UNTIL...LOOP
    ' =======================================================

    ' Until the end of file 1 has been reached, read
    ' a line from the file and print it on the screen:
    DO UNTIL EOF(1)
        LINE INPUT #1, LineBuffer$
        PRINT LineBuffer$
    LOOP

    1.4.3.2  EXIT DO: An Alternative Way to Exit DO...LOOP

    Inside a DO...LOOP statement, other statements are executed that
    eventually change the loop-test condition from true to false or false to
    true, ending the loop. In the DO...LOOP examples presented so far, the
    test has occurred either at the beginning or the end of the loop. However,
    by using the EXIT DO statement to exit from the loop, you can move the
    test elsewhere inside the loop. A single DO...LOOP can contain any number
    of EXIT DO statements, and the EXIT DO statements can appear anywhere
    within the loop.

    Example

    The following example opens a file and reads it, one line at a time, until
    the end of the file is reached or until it finds the pattern input by the
    user. If it finds the pattern before getting to the end of the file, an
    EXIT DO statement exits the loop.

    INPUT "File to search: ", File$
    IF File$ = "" THEN END

    INPUT "Pattern to search for: ", Pattern$
    OPEN File$ FOR INPUT AS #1

    DO UNTIL EOF(1)    ' EOF(1) returns a true value if the
                        ' end of the file has been reached.
        LINE INPUT #1, TempLine$
        IF INSTR(TempLine$, Pattern$) > 0 THEN

        ' Print the first line containing the pattern and
        ' exit the loop:
        PRINT TempLine$
        EXIT DO
        END IF
    LOOP


1.5  Sample Applications

    The sample applications for this chapter are a checkbook-balancing program
    and a program that ensures that every line in a text file ends with a
    carriage-return and line-feed sequence.

1.5.1  Checkbook-Balancing Program (CHECK.BAS)

    This program prompts the user for the starting checking-account balance
    and all transactions──withdrawals or deposits──that have occurred. It then
    prints a sorted list of the transactions and the final balance in the
    account.

    Statements and Functions Used

    The program demonstrates the following statements discussed in this
    chapter:

    ■ DO...LOOP WHILE

    ■ FOR...NEXT

    ■ EXIT FOR

    ■ Block IF...THEN...ELSE

    Program Listing

    DIM Amount(1 TO 100)
    CONST FALSE = 0, TRUE = NOT FALSE

    CLS
    ' Get account's starting balance:
    INPUT "Type starting balance, then press <ENTER>: ", Balance

    ' Get transactions. Continue accepting input
    ' until the input is zero for a transaction,
    ' or until 100 transactions have been entered:
    FOR TransacNum% = 1 TO 100
        PRINT TransacNum%;
        PRINT ") Enter transaction amount (0 to end): ";
        INPUT "", Amount(TransacNum%)
        IF Amount(TransacNum%) = 0 THEN
        TransacNum% = TransacNum% - 1
        EXIT FOR
        END IF
    NEXT

    ' Sort transactions in ascending order,
    ' using a "bubble sort":
    Limit% = TransacNum%
    DO
        Swaps% = FALSE
        FOR I% = 1 TO (Limit% - 1)

        ' If two adjacent elements are out of order,
        ' switch those elements:
        IF Amount(I%) < Amount(I% + 1) THEN
            SWAP Amount(I%), Amount(I% + 1)
            Swaps% = I%
        END IF
        NEXT I%

        ' Sort on next pass only to where last switch was made:
        Limit% = Swaps%

    ' Sort until no elements are exchanged:
    LOOP WHILE Swaps%

    ' Print the sorted transaction array. If a transaction
    ' is greater than zero, print it as a "CREDIT"; if a
    ' transaction is less than zero, print it as a "DEBIT":
    FOR I% = 1 TO TransacNum%
        IF Amount(I%) > 0 THEN
        PRINT USING "CREDIT: $$#####.##"; Amount(I%)
        ELSEIF Amount(I%) < 0 THEN
        PRINT USING "DEBIT: $$#####.##"; Amount(I%)
        END IF

        ' Update balance:
        Balance = Balance + Amount(I%)
    NEXT I%

    ' Print the final balance:
    PRINT
    PRINT "--------------------------"
    PRINT USING "Final Balance: $$######.##"; Balance
    END

1.5.2  Carriage-Return and Line-Feed Filter (CRLF.BAS)

    Some text files are saved in a format that uses only a carriage return
    (return to the beginning of the line) or a line feed (advance to the next
    line) to signify the end of a line. Many text editors expand this single
    carriage return (CR) or line feed (LF) to a carriage-return and line-feed
    (CR-LF) sequence whenever you load the file for editing. However, if you
    use a text editor that does not expand a single CR or LF to CR-LF, you may
    have to modify the file so it has the correct sequence at the end of each
    line.

    The following program is a filter that opens a file, expands a single CR
    or LF to a CR-LF combination, then writes the adjusted lines to a new
    file. The original contents of the file are saved in a file with a .BAK
    extension.

    Statements and Functions Used

    This program demonstrates the following statements discussed in this
    chapter:

    ■ DO...LOOP WHILE

    ■ DO UNTIL...LOOP

    ■ Block IF...THEN...ELSE

    ■ SELECT CASE...END SELECT

    To make this program more useful, it contains the following constructions
    not discussed in this chapter:

    ■ A FUNCTION procedure named Backup$ that creates the file with the .BAK
    extension.

    See Chapter 2, "SUB and FUNCTION Procedures," for more information on
    defining and using procedures.

    ■ An error-handling routine named ErrorHandler to deal with errors that
    could occur when the user enters a file name. For instance, if the user
    enters the name of a nonexistent file, this routine prompts for a new
    name. Without this routine, such an error would end the program.

    See Chapter 6, "Error and Event Trapping," for more information on
    trapping errors.

    Program Listing

    DEFINT A-Z             ' Default variable type is integer.

    ' The Backup$ FUNCTION makes a backup file with
    ' the same base as FileName$ plus a .BAK extension:
    DECLARE FUNCTION Backup$ (FileName$)

    ' Initialize symbolic constants and variables:
    CONST FALSE = 0, TRUE = NOT FALSE

    CarReturn$ = CHR$(13)
    LineFeed$ = CHR$(10)

    DO
        CLS

        ' Input the name of the file to change:
        INPUT "Which file do you want to convert"; OutFile$

        InFile$ = Backup$(OutFile$)  ' Get backup file's name.

        ON ERROR GOTO ErrorHandler   ' Turn on error trapping.

        NAME OutFile$ AS InFile$     ' Rename input file as
                                    ' backup file.

        ON ERROR GOTO 0              ' Turn off error trapping.

        ' Open backup file for input and old file for output:
        OPEN InFile$ FOR INPUT AS #1
        OPEN OutFile$ FOR OUTPUT AS #2

        ' The PrevCarReturn variable is a flag set to TRUE
        ' whenever the program reads a carriage-return character:
        PrevCarReturn = FALSE

    ' Read from input file until reaching end of file:
        DO UNTIL EOF(1)

        ' This is not end of file, so read a character:
        FileChar$ = INPUT$(1, #1)

        SELECT CASE FileChar$

        CASE CarReturn$        ' The character is a CR.

            ' If the previous character was also a
            ' CR, put a LF before the character:
            IF PrevCarReturn THEN
                FileChar$ = LineFeed$ + FileChar$
            END IF

            ' In any case, set the PrevCarReturn
            ' variable to TRUE:
            PrevCarReturn = TRUE

        CASE LineFeed$         ' The character is a LF.

            ' If the previous character was not a
            ' CR, put a CR before the character:
            IF NOT PrevCarReturn THEN
                FileChar$ = CarReturn$ + FileChar$
            END IF

            ' Set the PrevCarReturn variable to FALSE:
            PrevCarReturn = FALSE

        CASE ELSE              ' Neither a CR nor a LF.

            ' If the previous character was a CR,
            ' set the PrevCarReturn variable to FALSE
            ' and put a LF before the current character:
            IF PrevCarReturn THEN
                    PrevCarReturn = FALSE
                    FileChar$ = LineFeed$ + FileChar$
            END IF

        END SELECT

        ' Write the character(s) to the new file:
        PRINT #2, FileChar$;
        LOOP

        ' Write a LF if the last character in the file was a CR:
        IF PrevCarReturn THEN PRINT #2, LineFeed$;

    CLOSE                        ' Close both files.
        PRINT "Another file (Y/N)?"  ' Prompt to continue.

        ' Change the input to uppercase (capital letter):
        More$ = UCASE$(INPUT$(1))

    ' Continue the program if the user entered a "y" or a "Y":
    LOOP WHILE More$ = "Y"
    END

    ErrorHandler:           ' Error-handling routine
        CONST NOFILE = 53, FILEEXISTS = 58

        ' The ERR function returns the error code for last error:
        SELECT CASE ERR
        CASE NOFILE       ' Program couldn't find file
                            ' with input name.

            PRINT "No such file in current directory."
            INPUT "Enter new name: ", OutFile$
            InFile$ = Backup$(OutFile$)
            RESUME
        CASE FILEEXISTS   ' There is already a file named
                            ' <filename>.BAK in this directory:
                            ' remove it, then continue.
            KILL InFile$
            RESUME
        CASE ELSE         ' An unanticipated error occurred:
                            ' stop the program.
            ON ERROR GOTO 0
        END SELECT

    ' ======================== BACKUP$ =========================
    '   This procedure returns a file name that consists of the
    '   base name of the input file (everything before the ".")
    '   plus the extension ".BAK"
    ' ==========================================================

    FUNCTION Backup$ (FileName$) STATIC

        ' Look for a period:
        Extension = INSTR(FileName$, ".")

        ' If there is a period, add .BAK to the base:
        IF Extension > 0 THEN
        Backup$ = LEFT$(FileName$, Extension - 1) + ".BAK"

        ' Otherwise, add .BAK to the whole name:
        ELSE
        Backup$ = FileName$ + ".BAK"
        END IF
    END FUNCTION



────────────────────────────────────────────────────────────────────────────
Chapter 2  SUB and FUNCTION Procedures

    This chapter explains how to simplify your programming by breaking
    programs into smaller logical components. These components──known as
    "procedures"──can then become building blocks that let you enhance and
    extend the BASIC language itself.

    When you are finished with this chapter, you will know how to perform the
    following tasks with procedures:

    ■ Define and call BASIC procedures

    ■ Use local and global variables in procedures

    ■ Use procedures instead of GOSUB subroutines and DEF FN functions

    ■ Pass arguments to procedures and return values from procedures

    ■ Write recursive procedures (procedures that can call themselves)

    Although you can create a BASIC program with any text editor, the
    QuickBASIC editor makes it especially easy to write programs that contain
    procedures. Also, in most cases QuickBASIC automatically generates a
    DECLARE statement when you save your program. (Using a DECLARE statement
    ensures that only the correct number and type of arguments are passed to a
    procedure and allows your program to call procedures defined in separate
    modules.)


2.1  Procedures: Building Blocks for Programming

    As used in this chapter, the term "procedure" covers both SUB...END SUB
    and FUNCTION...END FUNCTION constructions. Procedures are useful for
    condensing repeated tasks. For example, suppose you are writing a program
    that you eventually intend to compile as a stand-alone application and you
    want the user of this application to be able to pass several arguments to
    the application from the command line. It then makes sense to turn this
    task──breaking the string returned by the COMMAND$ function into two or
    more arguments──into a separate procedure. Once you have this procedure up
    and running, you can use it in other programs. In essence, you are
    extending BASIC to fit your individual needs when you use procedures.

    These are the two major benefits of programming with procedures:

    1. Procedures allow you to break your programs into discrete logical
        units, each of which can be more easily debugged than can an entire
        program without procedures.

    2. Procedures used in one program can be used as building blocks in other
        programs, usually with little or no modification.

    You can also put procedures in your own Quick library, which is a special
    file that you can load into memory when you start QuickBASIC. Once the
    contents of a Quick library are in memory with QuickBASIC, any program
    that you write has access to the procedures in the library. This makes it
    easier for all of your programs both to share and save code. (See Appendix
    H, "Creating and Using Quick Libraries," for more information on how to
    build Quick libraries.)


2.2  Comparing Procedures with Subroutines and Functions

    If you are familiar with earlier versions of BASIC, you might think of a
    SUB...END SUB procedure as being roughly similar to a GOSUB...RETURN
    subroutine. You will also notice some similarities between a FUNCTION...
    END FUNCTION procedure and a DEF FN...END DEF function. However,
    procedures have many advantages over these older constructions, as shown
    in Sections 2.2.1 and 2.2.2 below.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    To avoid confusion between a SUB procedure and the target of a GOSUB
    statement, SUBprocedures are referred to in this manual as
    "subprograms," while statement blocks accessed by
    GOSUB...RETURN statements are referred to as "subroutines."
    ──────────────────────────────────────────────────────────────────────────

2.2.1  Comparing SUB with GOSUB

    Although use of the GOSUB subroutine does help break programs into
    manageable units, SUB procedures have a number of advantages over
    subroutines, as discussed below.

    2.2.1.1  Local and Global Variables

    In SUB procedures, all variables are local by default; that is, they exist
    only within the scope of the SUB procedure's definition. To illustrate,
    the variable named I in the Test subprogram below is local to Test, and
    has no connection with the variable named I in the module-level code:

    I = 1
    CALL Test
    PRINT I  ' I still equals 1.
    END

    SUB Test STATIC
        I = 50
    END SUB

    A GOSUB has a major drawback as a building block in programs: it contains
    only "global variables." With global variables, if you have a variable
    named I inside your subroutine, and another variable named I outside the
    subroutine but in the same module, they are one and the same. Any changes
    to the value of I in the subroutine affect I everywhere it appears in the
    module. As a result, if you try to patch a subroutine from one module into
    another module, you may have to rename subroutine variables to avoid
    conflict with variable names in the new module.

    2.2.1.2  Use in Multiple-Module Programs

    A SUB can be defined in one module and called from another. This
    significantly reduces the amount of code required for a program and
    increases the ease with which code can be shared among a number of
    programs.

    A GOSUB subroutine, however, must be defined and used in the same module.

    2.2.1.3  Operating on Different Sets of Variables

    A SUB procedure can be called any number of times within a program, with a
    different set of variables being passed to it each time. This is done by
    calling the SUB with an argument list. (See Section 2.5, "Passing
    Arguments to Procedures," for more information on how to do this.) In the
    next example, the subprogram Compare is called twice, with different pairs
    of variables passed to it each time:

    X = 4: Y = 5

    CALL Compare (X, Y)

    Z = 7: W = 2
    CALL Compare (Z, W)
    END

    SUB Compare (A, B)
        IF A < B THEN SWAP A, B
    END SUB

    Calling a GOSUB subroutine more than once in the same program and having
    it operate on a different set of variables each time is difficult. The
    process involves copying values to and from global variables, as shown in
    the next example:

    X = 4: Y = 5
    A = X: B = Y
    GOSUB Compare
    X = A: Y = B

    Z = 7 : W = 2
    A = Z : B = W
    GOSUB Compare
    Z = A : W = B
    END

    Compare:
        IF A < B THEN SWAP A, B
    RETURN

2.2.2  Comparing FUNCTION with DEF FN

    While the multiline DEF FN function definition answers the need for
    functions more complex than can be squeezed on a single line, FUNCTION
    procedures give you this capability plus the additional advantages
    discussed below.

    2.2.2.1  Local and Global Variables

    By default, all variables within a FUNCTION procedure are local to it,
    although you do have the option of using global variables. (See Section
    2.6, "Sharing Variables with SHARED," for more information on procedures
    and global variables.)

    In a DEF FN function, variables used within the function's body are global
    to the current module by default (this is also true for GOSUB
    subroutines). However, you can make a variable in a DEF FN function local
    by putting it in a STATIC statement.

    2.2.2.2  Changing Variables Passed to the Procedure

    Variables are passed to FUNCTION procedures by reference or by value. When
    you pass a variable by reference, you can change the variable by changing
    its corresponding parameter in the FUNCTION. For example, after the call
    to GetRemainder in the next program, the value of X is 2, since the value
    of Mis 2 at the end of the FUNCTION:

    X = 89
    Y = 40
    PRINT GetRemainder(X, Y)
    PRINT X, Y                ' X is now 2.
    END

    FUNCTION GetRemainder (M, N)
        GetRemainder = M MOD N
        M = M \ N
    END FUNCTION

    Variables are passed to a DEF FN function only by value, so in the next
    example, FNRemainder changes M without affecting X :

    DEF FNRemainder (M, N)
        FNRemainder = M MOD N
        M = M \ N
    END DEF

    X = 89
    Y = 40
    PRINT FNRemainder(X, Y)

    PRINT X,Y   ' X is still
                ' 89.

    See Sections 2.5.5 and 2.5.6 for more information on the distinction
    between passing by reference and by value.

    2.2.2.3  Calling the Procedure within Its Definition

    A FUNCTION procedure can be "recursive"; in other words, it can call
    itself within its own definition. (See Section 2.9 for more information
    on how procedures can be recursive.) A DEF FN function cannot be
    recursive.

    2.2.2.4  Use in Multiple-Module Programs

    You can define a FUNCTION procedure in one module and use it in another
    module. You need to put a DECLARE statement in the module in which the
    FUNCTION is used; otherwise, your program thinks the FUNCTION name refers
    to a variable. (See Section 2.5.4, "Checking Arguments with the DECLARE
    Statement," for more information on using DECLARE this way.)

    A DEF FN function can only be used in the module in which it is defined.
    Unlike SUB or FUNCTION procedures, which can be called before they appear
    in the program, a DEF FN function must always be defined before it is used
    in a module.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    The name of a FUNCTION procedure can be any valid BASIC variable name,
    except one beginning with the letters FN. The name of a DEF FN function
    must always be preceded by FN.
    ──────────────────────────────────────────────────────────────────────────


2.3  Defining Procedures

    BASIC procedure definitions have the following general syntax:

    {SUB| FUNCTION} procedurename[[(parameterlist)]] [[STATIC]]
    [[statementblock-1]]
    [[EXIT{SUB| FUNCTION}
        [[statementblock-2]]]]
    END{SUB| FUNCTION}

    The following list describes the parts of a procedure definition:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
    {SUB | FUNCTION}         Marks the beginning of a SUB or FUNCTION
                            procedure, respectively.

    procedurename            Any valid variable name up to 40 characters long.
                            The same name cannot be used for both a SUB and a
                            FUNCTION.
    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
                            FUNCTION.

    parameterlist            A list of variables, separated by commas, that
                            shows the number and type of arguments to be
                            passed to the procedure. (Section 2.5.1 explains
                            the difference between parameters and arguments.)

    STATIC                   If you use the STATIC attribute, local variables
                            are STATIC; that is, they retain their values
                            between calls to the procedure.
                            If you omit the STATIC attribute, local variables
                            are "automatic" by default; that is, they are
                            initialized to zeros or null strings at the start
                            of each procedure call.
                            See Section 2.7, "Automatic and STATIC
                            Variables," for more information.

    END{SUB| FUNCTION}       Ends a SUB or FUNCTION definition. To run
                            correctly, every procedure must have exactly one
    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
                            correctly, every procedure must have exactly one
                            END{SUB| FUNCTION} statement.
                            When your program encounters an END SUB or END
                            FUNCTION, it exits the procedure and returns to
                            the statement immediately following the one that
                            called the procedure. You can also use one or
                            more optional EXIT{SUB| FUNCTION} statements
                            within the body of a procedure definition to exit
                            from the procedure.
    ──────────────────────────────────────────────────────────────────────────


    All valid BASIC expressions and statements are allowed within a procedure
    definition except the following:

    ■ DEF FN...END DEF, FUNCTION...END FUNCTION, or SUB...END SUB

    It is not possible to nest procedure definitions or to define a DEF FN
    function inside a procedure. However, a procedure can call another
    procedure or a DEF FN function.

    ■ COMMON

    ■ DECLARE

    ■ DIM SHARED

    ■ OPTION BASE

    ■ TYPE...END TYPE

    Example

    The following example is a FUNCTION procedure named IntegerPower :

    FUNCTION IntegerPower& (X&, Y&) STATIC
        PowerVal& = 1
        FOR I& = 1 TO Y&
        PowerVal& = PowerVal& * X&
        NEXT I&
        IntegerPower& = PowerVal&
    END FUNCTION


2.4  Calling Procedures

    Calling a FUNCTION procedure is different from calling a SUB procedure, as
    shown in the next two sections.

2.4.1  Calling a FUNCTION Procedure

    You call a FUNCTION procedure the same way you use an intrinsic BASIC
    function such as ABS, that is, by using its name in an expression, as
    shown here:

    ' Any of the following statements
    ' would call a FUNCTION named "ToDec" :
    PRINT 10 * ToDec
    X = ToDec
    IF ToDec = 10 THEN PRINT "Out of range."

    A FUNCTION can return values by changing variables passed to it as
    arguments. (See Section 2.5.5, "Passing Arguments by Reference," for an
    explanation of how this is done.) Additionally, a FUNCTION returns a
    single value in its name, so the name of a FUNCTION must agree with the
    type it returns. For example, if a FUNCTION returns a string value, either
    its name must have the dollar sign ($) type-declaration character appended
    to it or it must be declared as having the string type in a preceding
    DEFSTR statement.

    Example

    The following program shows a FUNCTION that returns a string value. Note
    that the type-declaration suffix for strings ($) is part of the procedure
    name.

    Banner$ = GetInput$       ' Call the FUNCTION and assign the
                            ' return value to a string variable.
    PRINT Banner$             ' Print the string.
    END

    ' ======================= GETINPUT$ ========================
    '    The $ type-declaration character at the end of this
    '    FUNCTION name means that it returns a string value.
    ' ==========================================================

    FUNCTION GetInput$ STATIC

        ' Return a string of 10 characters read from the
        ' keyboard, echoing each character as it is typed:
        FOR I% = 1 TO 10
        Char$ = INPUT$(1)     ' Get the character.
        PRINT Char$;          ' Echo the character on the
                                ' screen.
        Temp$ = Temp$ + Char$ ' Add the character to the
                                ' string.
        NEXT
        PRINT
        GetInput$ = Temp$    ' Assign the string to the FUNCTION.
    END FUNCTION

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    The program example above is written for use in the QB environment only.
    It cannot be compiled using the BC command from DOS.
    ──────────────────────────────────────────────────────────────────────────

2.4.2  Calling a SUB Procedure

    A SUB procedure differs from a FUNCTION procedure in that a SUB cannot be
    called by using its name within an expression. A call to a SUB is a
    stand-alone statement, like BASIC's CIRCLE statement. Also, a SUB does not
    return a value in its name as does a FUNCTION. However, like a FUNCTION, a
    SUB can modify the values of any variables passed to it. (Section 2.5.5,
    "Passing Arguments by Reference," explains how this is done.)

    There are two ways to call a SUB procedure:

    1. Put its name in a CALL statement:

        CALL PrintMessage

    2. Use its name as a statement by itself:

        PrintMessage

    If you omit the CALL keyword, don't put parentheses around arguments
    passed to the SUB:

    ' Call the ProcessInput subprogram with CALL and pass the
    ' three arguments First$, Second$, and NumArgs% to it:
    CALL ProcessInput  (First$, Second$, NumArgs%)



    ' Call the ProcessInput subprogram without CALL and pass
    ' it the same arguments (note no parentheses around the
    ' argument list):
    ProcessInput  First$, Second$, NumArgs%


    See Section 2.5 for more information on passing arguments to procedures.

    If your program calls SUB procedures without using CALL, and if you are
    not using QuickBASIC to write the program, you must put the name of the
    SUB in a DECLARE statement before it is called:

    DECLARE SUB CheckForKey
    .
    .
    .
    CheckForKey

    You need to be concerned about this only if you are developing programs
    outside QuickBASIC, since QuickBASIC automatically inserts DECLARE
    statements wherever they are needed when it saves a program.


2.5  Passing Arguments to Procedures

    Sections 2.5.1-2.5.4 explain how to tell the difference between
    parameters and arguments, how to pass arguments to procedures, and how to
    check arguments to make sure they are of the correct type and quantity.

2.5.1  Parameters and Arguments

    The first step in learning about passing arguments to procedures is
    understanding the difference between the terms "parameter" and "argument":

    Parameter                Argument
    ──────────────────────────────────────────────────────────────────────────
    A variable name that     A constant, variable, or expression passed to a
    appears in a SUB,        SUB or FUNCTION when the SUB or FUNCTION is
    FUNCTION, or DECLARE     called
    statement
    ──────────────────────────────────────────────────────────────────────────

    In a procedure definition, parameters are placeholders for arguments. As
    shown in Figure 2.1, when a procedure is called, arguments are plugged
    into the variables in the parameter list, with the first parameter
    receiving the first argument, the second parameter receiving the second
    argument, and so on.


    ┌───────────────────────────────────────────────────────────────────┐
    │                                                                   │
    │                                            Arguments              │
    │                                       ┌────────┴─────────┐        │
    │ Procedure call───────── CALL TestSub   (A%,  B!,  "text")         │
    │                         ∙               │     │      │            │
    │                         ∙               │     │      │            │
    │                         ∙               ↓     ↓      ↓            │
    │ Procedure definition ── SUB TestSub    (P1%,  P2!,   P3$)  STATIC │
    │                                       └────────┬─────────┘        │
    │                                            Parameters             │
    │                                                                   │
    └───────────────────────────────────────────────────────────────────┘

    Figure 2.1  Parameters and Arguments

    Figure 2.1 also demonstrates another important rule: although the names
    of variables in an argument list and a parameter list do not have to be
    the same, the number of parameters and the number of arguments do.
    Furthermore, the type (string, integer numeric, single-precision numeric,
    and so on) should be the same for corresponding arguments and parameters.
    (See Section 2.5.4, "Checking Arguments with the DECLARE Statement," for
    more information on how to ensure that arguments and parameters agree in
    number and type.)

    A parameter list consists of any of the following, all separated by
    commas:

    ■ Valid variable names, except for fixed-length strings

    For example, x$ and x AS STRING are both legal in a parameter list,
    since they refer to variable-length strings. However, x AS STRING * 10
    refers to a fixed-length string 10 characters long and cannot appear in
    a parameter list. (Fixed-length strings are perfectly all right as
    arguments passed to procedures. See Chapter 4, "String Processing," for
    more information on fixed-length and variable-length strings.)

    ■ Array names followed by left and right parentheses

    An argument list consists of any of the following, all separated by
    commas:

    ■ Constants

    ■ Expressions

    ■ Valid variable names

    ■ Array names followed by left and right parentheses

    Examples

    The following example shows the first line of a subprogram definition with
    a parameter list:

    SUB TestSub (A%, Array(), RecVar AS RecType, Cs$)

    The first parameter, A%, is an integer; the second parameter, Array(), is
    a single-precision array, since untyped numeric variables are single
    precision by default; the third parameter, RecVar, is a record of type
    RecType; and the fourth parameter, Cs$, is a string.

    The CALL TestSub line in the next example calls the TestSub subprogram and
    passes it four arguments of the appropriate type:

    TYPE RecType
        Rank AS STRING * 12
        SerialNum AS LONG
    END TYPE

    DIM RecVar AS RecType

    CALL TestSub (X%, A(), RecVar, "Daphne")

2.5.2  Passing Constants and Expressions

    Constants──whether string or numeric──can appear in the list of arguments
    passed to a procedure. Naturally, a string constant must be passed to a
    string parameter and a numeric constant to a numeric parameter, as shown
    in the next example:

    CONST SCREENWIDTH = 80
    CALL PrintBanner (SCREENWIDTH, "Monthly Status Report")
    .
    .
    .
    SUB PrintBanner (SW%, Title$)
        .
        .
        .
    END SUB

    If a numeric constant in an argument list does not have the same type as
    the corresponding parameter in the SUB or FUNCTION statement, then the
    constant is coerced to the type of the parameter, as you can see by the
    output from the next example:

    CALL test(4.6, 4.1)
    END

    SUB test (x%, y%)
        PRINT x%, y%
    END SUB

    Output

    5             4

    Expressions resulting from operations on variables and constants can also
    be passed to a procedure. As is the case with constants, numeric
    expressions that disagree in type with their parameters are coerced into
    agreement, as shown here:

    Checker A! + 25!, NOT BooleanVal%

    ' In the next call, putting parentheses around the
    ' long-integer variable Bval& makes it an expression.
    ' The (Bval&) expression is coerced to a short integer
    ' in the Checker SUB:
    Checker A! / 3.1, (Bval&)
    .
    .
    .
    END

    SUB Checker (Param1!, Param2%)
        .
        .
        .
    END SUB

2.5.3  Passing Variables

    This section discusses how to pass simple variables, complete arrays,
    elements of arrays, records, and elements of records to procedures.

    2.5.3.1  Passing Simple Variables

    In both argument and parameter lists, you can declare the type for a
    simple variable in one of the following three ways:

    1. Append one of the following type-declaration suffixes to the variable
        name: %, &, !, #, or $.

    2. Declare the variable in a declare variablename AS type clause, where
        the placeholder declare can be either DIM, COMMON, REDIM, SHARED, or
        STATIC, and type can be either INTEGER, LONG, SINGLE, DOUBLE, STRING,
        or STRING * n. For example:

        DIM A AS LONG

    3. Use a DEFtype statement to set the default type.

    No matter which method you choose, corresponding variables must have the
    same type in both the argument and parameter lists, as shown in the
    following example.

    Example

    In this example, two arguments are passed to the FUNCTION procedure. The
    first is an integer giving the length of the string returned by the
    FUNCTION, while the second is a character that is repeated to make the
    string.

    FUNCTION CharString$(A AS INTEGER, B$) STATIC
        CharString$ = STRING$(A%, B$)
    END FUNCTION

    DIM X AS INTEGER
    INPUT "Enter a number (1 to 80): ", X
    INPUT "Enter a character: ", Y$

    ' Print a string consisting of the Y$ character, repeated
    ' X number of times:
    PRINT CharString$(X, Y$)
    END

    Output

    Enter a number (1 to 80): 21
    Enter a character: #
    #####################

    2.5.3.2  Passing an Entire Array

    To pass all the elements of an array to a procedure, put the array's name,
    followed by left and right parentheses, in both the argument and parameter
    lists.

    Example

    This example shows how to pass all the elements of an array to a
    procedure:

    DIM Values(1 TO 5) AS INTEGER

    ' Note empty parentheses after array name when calling
    ' procedure and passing array:
    CALL ChangeArray (1, 5, Values())
    CALL PrintArray (1, 5, Values())
    END

    ' Note empty parentheses after P parameter:

    SUB ChangeArray (Min%, Max%, P() AS INTEGER) STATIC
        FOR I% = Min% TO Max%
        P(I%) = I% ^ 3
        NEXT I%
    END SUB

    SUB PrintArray (Min%, Max%, P() AS INTEGER) STATIC
        FOR I% = Min% TO Max%
        PRINT P(I%)
        NEXT I%
        PRINT
    END SUB

    2.5.3.3  Passing Individual Array Elements

    If a procedure does not require an entire array, you can pass individual
    elements of the array instead. To pass an element of an array, use the
    array name followed by the appropriate subscripts inside parentheses.

    Example

    The SqrVal Array(4,2) statement in the following example passes the
    element in row 4, column 2 of the array to the SqrVal subprogram (note how
    the subprogram actually changes the value of this array element):

    DIM Array(1 TO 5,1 TO 3)

    Array(4,2) = -36
    PRINT Array(4,2)
    SqrVal Array(4,2)
    PRINT Array(4,2)     ' The call to SqrVal has changed
                        ' the value of Array(4,2).
    END
    SUB SqrVal(A) STATIC
        A = SQR(ABS(A))
    END SUB

    Output

    -36
    6

    2.5.3.4  Using Array-Bound Functions

    The LBOUND and UBOUND functions are a useful way to determine the size of
    an array passed to a procedure. The LBOUND function finds the smallest
    index value of an array subscript, while the UBOUND function finds the
    largest one. These functions save you the trouble of having to pass the
    upper and lower bounds of each array dimension to a procedure.

    Example

    The subprogram in the following example uses the LBOUND function to
    initialize the variables Row and Col to the lowest subscript values in
    each dimension of A. It also uses the UBOUND function to limit the number
    of times the FOR loop executes to the number of elements in the array.

    SUB PrintOut(A(2)) STATIC
        FOR Row = LBOUND(A,1) TO UBOUND(A,1)
        FOR Col = LBOUND(A,2) TO UBOUND(A,2)
            PRINT A(Row,Col)
        NEXT Col
        NEXT Row
    END SUB

    2.5.3.5  Passing an Entire Record

    To pass a complete record (a variable declared as having a user-defined
    type) to a procedure, complete the following steps:

    1. Define the type (StockItem in this example):

        TYPE StockItem
        PartNumber  AS STRING *  6
        Description AS STRING * 20
        UnitPrice   AS SINGLE
        Quantity    AS INTEGER
        END TYPE

    2. Declare a variable (StockRecord) with that type:

        DIM StockRecord AS StockItem

    3. Call a procedure (FindRecord) and pass it the variable you have
        declared:

        CALL FindRecord(StockRecord)

    4. In the procedure definition, give the parameter the same type as the
        variable:

        SUB FindRecord (RecordVar AS StockItem) STATIC
        .
        .
        .
        END SUB

    2.5.3.6  Passing Individual Elements of a Record

    To pass an individual element in a record to a procedure, put the name of
    the element (recordname.elementname) in the argument list. Be sure, as
    always, that the corresponding parameter in the procedure definition
    agrees with the type of that element.

    Example

    The following example shows how to pass the two elements in the record
    variable StockItem to the PrintTag SUB procedure. Note how each parameter
    in the SUB procedure agrees with the type of the individual record
    elements.

    TYPE StockType
        PartNumber AS STRING * 6
        Descrip AS STRING * 20
        UnitPrice AS SINGLE
        Quantity AS INTEGER
    END TYPE

    DIM StockItem AS StockType

    CALL PrintTag (StockItem.Descrip, StockItem.UnitPrice)
    .
    .
    .
    END

    SUB PrintTag (Desc$, Price AS SINGLE)
        .
        .
        .
    END SUB

2.5.4  Checking Arguments with the DECLARE Statement

    If you are using QuickBASIC to write your program, you will notice that
    QuickBASIC automatically inserts a DECLARE statement for each procedure
    whenever you save the program. Each DECLARE statement consists of the word
    DECLARE, followed by the words SUB or FUNCTION, the name of the procedure,
    and a set of parentheses. If the procedure has no parameters, then the
    parentheses are empty. If the procedure has parameters, then the
    parentheses enclose a parameterlist that specifies the number and type of
    the arguments to be passed to the procedure. This parameterlist has the
    same format as the list in the definition line of the SUB or FUNCTION.

    The purpose of the parameterlist in a DECLARE statement is to turn on
    "type checking" of arguments passed to the procedure. That is, every time
    the procedure is called with variable arguments, those variables are
    checked to be sure they agree with the number and type of the parameters
    in the DECLARE statement.

    QuickBASIC puts all procedure definitions at the end of a module when it
    saves a program. Therefore, if there were no DECLARE statements, when you
    tried to compile this program with the BC command you would run into a
    problem known as "forward reference" (calling a procedure before it is
    defined). By generating a prototype of the procedure definition, DECLARE
    statements allow your program to call procedures that are defined later in
    a module, or in another module altogether.

    Examples

    The next example shows an empty parameter list in the DECLARE statement,
    since no arguments are passed to GetInput$:

    DECLARE FUNCTION GetInput$ ()
    X$ = GetInput$

    FUNCTION GetInput$ STATIC
        GetInput$ = INPUT$(10)
    END FUNCTION

    The next example shows a parameter list in the DECLARE statement, since an
    integer argument is passed to this version of GetInput$ :

    DECLARE FUNCTION GetInput$ (X%)
    X$ = GetInput$ (5)

    FUNCTION GetInput$ (X%) STATIC
        GetInput$ = INPUT$(X%)
    END FUNCTION

    2.5.4.1  When QuickBASIC Does Not Generate a DECLARE Statement

    In certain instances, QuickBASIC does not generate DECLARE statements in
    the module that calls a procedure.

    QuickBASIC cannot generate a DECLARE statement in one module for a
    FUNCTION procedure defined in another module if the module is not loaded.
    In such a case, you must type the DECLARE statement yourself at the
    beginning of the module where the FUNCTION is called; otherwise,
    QuickBASIC considers the call to the FUNCTION to be a variable name.

    QuickBASIC does not generate a DECLARE statement for a SUB procedure in
    another module, whether that module is loaded or not. The DECLARE
    statement is not needed unless you want to call the SUB procedure without
    using the keyword CALL, however.

    QuickBASIC also cannot generate a DECLARE statement for any procedure in a
    Quick library. You must add one to the program yourself.

    2.5.4.2  Developing Programs outside the QuickBASIC Environment

    If you are writing your programs with your own text editor and then
    compiling them outside the QuickBASIC environment with the BC and LINK
    commands, be sure to put DECLARE statements in the following three
    locations:

    1. At the beginning of any module that calls a FUNCTION procedure before
        it is defined:

        DECLARE FUNCTION Hypot (X!, Y!)

        INPUT X, Y
        PRINT Hypot(X, Y)
        END

        FUNCTION Hypot (A, B) STATIC
        Hypot = SQR(A ^ 2 + B ^ 2)
        END FUNCTION

    2. At the beginning of any module that calls a SUB procedure before it is
        defined and does not use CALL when calling the SUB:

        DECLARE SUB PrintString (X, Y)
        INPUT X, Y

        PrintString X, Y     ' Note: no parentheses around
                            ' arguments
        END

        SUB PrintString (A,B) STATIC

        ' Convert the numbers to strings, remove any leading
        ' blanks from the second number, and print:
        PRINT STR$(A) + LTRIM$(STR$(B))
        END SUB

        When you call a SUB procedure with CALL, you don't have to declare the
        SUB first:

        A$ = "466"
        B$ = "123"
        CALL PrintString(A$, B$)
        END

        SUB PrintString (X$, Y$) STATIC
        PRINT VAL(X$) + VAL(Y$)
        END SUB

    3. At the beginning of any module that calls a SUB or FUNCTION procedure
        defined in another module (an "external procedure")

    If your procedure has no parameters, remember to put empty parentheses
    after the name of the procedure in the DECLARE statement, as in the next
    example:

    DECLARE FUNCTION GetHour$ ()
    PRINT GetHour$
    END

    FUNCTION GetHour$ STATIC
        GetHour$ = LEFT$(TIME$,2)
    END FUNCTION

    Remember, a DECLARE statement can appear only at the module level, not the
    procedure level. A DECLARE statement affects the entire module in which it
    appears.

    2.5.4.3  Using Include Files for Declarations

    If you have created a separate procedure-definition module that defines
    one or more SUB or FUNCTION procedures, it is a good idea to make an
    include file to go along with this module. This include file should
    contain the following:

    ■ DECLARE statements for all the module's procedures.

    ■ TYPE...END TYPE record definitions for any record parameters in this
    module's SUB or FUNCTION procedures.

    ■ COMMON statements listing variables shared between this module and other
    modules in the program. (See Section 2.6.3, "Sharing Variables with
    Other Modules," for more information on using COMMON for this purpose.)

    Every time you use the definition module in one of your programs, insert a
    $INCLUDE metacommand at the beginning of any module that invokes
    procedures in the definition module. When your program is compiled, the
    actual contents of the include file are substituted for the $INCLUDE
    metacommand.

    A simple rule of thumb is to make an include file for every module and
    then use the module and the include file together as outlined above. The
    following list itemizes some of the benefits of this technique:

    ■ A module containing procedure definitions remains truly modular──that
    is, you don't have to copy all the DECLARE statements for its procedures
    every time you call them from another module; instead, you can just
    substitute one $INCLUDE metacommand.

    ■ In QuickBASIC, using an include file for procedure declarations
    suppresses automatic generation of DECLARE statements when you save a
    program.

    ■ Using an include file for declarations avoids problems with getting one
    module to recognize a FUNCTION in another module. (See Section 2.5.4.1,
    "When QuickBASIC Does Not Generate a DECLARE Statement," for more
    information.)

    You can take advantage of QuickBASIC's facility for generating DECLARE
    statements when creating your include file. The following steps show you
    how to do this:

    1. Create your module.

    2. Within that module, call any SUB or FUNCTION procedures you have
        defined.

    3. Save the module to get automatic DECLARE statements for all the
        procedures.

    4. Reedit the module, removing the procedure calls and moving the DECLARE
        statements to a separate include file.

    See Appendix F, "Metacommands," for more information on the syntax and
    usage of the $INCLUDE metacommand.

    Example

    The following fragments illustrate how to use a definition module and an
    include file together:

    ' =========================================================
    '                        MODDEF.BAS
    ' This module contains definitions for the PROMPTER and
    ' MAX! procedures.
    ' =========================================================

    FUNCTION Max! (X!, Y!) STATIC
        IF X! > Y! THEN Max! = X! ELSE Max! = Y!
    END FUNCTION

    SUB Prompter (Row%, Column%, RecVar AS RecType) STATIC
        LOCATE Row%, Column%
        INPUT "Description: ", RecVar.Description
        INPUT "Quantity:    ", RecVar.Quantity
    END SUB

    ' =========================================================
    '                        MODDEF.BI
    '  This is an include file that contains DECLARE statements
    '  for the PROMPTER and MAX! procedures (as well as a TYPE
    '  statement defining the RecType user type). Use this file
    '  whenever you use the MODDEF.BAS module.
    ' =========================================================

    TYPE RecType
        Description AS STRING * 15
        Quantity AS INTEGER
    END TYPE

    DECLARE FUNCTION Max! (X!, Y!)
    DECLARE SUB Prompter (Row%, Column%, RecVar AS RecType)

    ' ============================================================
    '                         SAMPLE.BAS
    '   This module is linked with the MODDEF.BAS module, and
    '   calls the PROMPTER and MAX! procedures in MODDEF.BAS.
    ' ============================================================

    ' The next line makes the contents of the MODDEF.BI include
    ' file part of this module as well:
    ' $INCLUDE: 'MODDEF.BI'
    .
    .
    .
    INPUT A, B
    PRINT Max!(A, B)        ' Call the Max! FUNCTION in MODDEF.BAS
    .
    .
    .
    Prompter 5, 5, RecVar   ' Call the Prompter SUB in MODDEF.BAS
    .
    .
    .

    ──────────────────────────────────────────────────────────────────────────
    IMPORTANT
    While it is good programming practice to put procedure declarations in
    an include file, do not put the procedures themselves (SUB...END SUB or
    FUNCTION...END FUNCTION blocks) in an include file. Procedure
    definitions are not allowed inside include files in QuickBASIC Version
    4.5. If you have used include files to define SUB procedures in programs
    written with QuickBASIC Versions 2.0 or 3.0, either put these
    definitions in a separate module or incorporate them into the module
    where they are called.
    ──────────────────────────────────────────────────────────────────────────

    2.5.4.4  Declaring Procedures in Quick Libraries

    A convenient programming practice is to put all the declarations for
    procedures in a Quick library into one include file. With the $INCLUDE
    metacommand you can then incorporate this include file into programs using
    the library. This saves you the trouble of copying all the relevant
    DECLARE statements every time you use the library.

2.5.5  Passing Arguments by Reference

    By default, variables──whether simple scalar variables, arrays and array
    elements, or records──are passed "by reference" to FUNCTION and SUB
    procedures. Here is what is meant by passing variables by reference:

    ■ Each program variable has an address, or a location in memory where its
    value is stored.

    ■ Calling a procedure and passing variables to it by reference calls the
    procedure and passes it the address of each variable. Thus, the address
    of the variable and the address of its corresponding parameter in the
    procedure are one and the same.

    ■ Therefore, if the procedure modifies the value of the parameter, it also
    modifies the value of the variable that is passed.

    If you do not want a procedure to change the value of a variable, pass the
    procedure the value contained in the variable, not the address. This way,
    changes are made only to a copy of the variable, not the variable itself.
    See the next section for a discussion of this alternative way of passing
    variables.

    Example

    In the following program, changes made to the parameter A$ in the Replace
    procedure also change the argument Test$:

    Test$ = "a string with all lowercase letters."
    PRINT "Before subprogram call: "; Test$
    CALL Replace (Test$, "a")
    PRINT "After subprogram call: "; Test$
    END

    SUB Replace (A$, B$) STATIC
        Start = 1
        DO

        ' Look for B$ in A$, starting at the character
        ' with position "Start" in A$:
        Found = INSTR(Start, A$, B$)
        ' Make every occurrence of B$ in A$
        ' an uppercase letter:
        IF Found > 0 THEN
            MID$(A$,Found) = UCASE$(B$)
            Start = Start + 1
        END IF
        LOOP WHILE Found > 0
    END SUB

    Output

    Before subprogram call: a string with all lowercase letters.
    After subprogram call: A string with All lowercAse letters.

2.5.6  Passing Arguments by Value

    Passing an argument "by value" means the value of the argument is passed,
    rather than its address. In BASIC procedures, passing a variable by value
    is simulated by copying the variable into a temporary location, then
    passing the address of this temporary location. Since the procedure does
    not have access to the address of the original variable, it cannot change
    the original variable; it makes all changes to the copy instead.

    You can pass expressions as arguments to procedures, as in the following:

    ' A + B is an expression; the values of A and B
    ' are not affected by this procedure call:
    CALL Mult(A + B, B)

    Expressions are always passed by value (see Section 2.5.2, "Passing
    Constants and Expressions," for more information).

    Example

    One way to pass a variable by value is to enclose it in parentheses, thus
    making it an expression. As you can see from the output that follows,
    changes to the SUB procedure's local variable Y are passed back to the
    module-level code as changes to the variable B. However, changes to X in
    the procedure do not affect the value of A, since A is passed by value.

    A = 1
    B = 1
    PRINT "Before subprogram call, A ="; A; ", B ="; B

    ' A is passed by value, and B is passed by reference:
    CALL Mult((A), B)
    PRINT "After subprogram call, A ="; A; ", B ="; B
    END

    SUB Mult (X, Y) STATIC
        X = 2 * X
        Y = 3 * Y
        PRINT "In subprogram, X ="; X; ", Y ="; Y
    END SUB

    Output

    Before subprogram call, A = 1 , B = 1
    In subprogram, X = 2 , Y = 3
    After subprogram call, A = 1 , B = 3


2.6  Sharing Variables with SHARED

    In addition to passing variables through argument and parameter lists,
    procedures can also share variables with other procedures and with code at
    the module level (that is, code within a module but outside of any
    procedure) in one of the two ways listed below:

    1. Variables listed in a SHARED statement within a procedure are shared
        only between that procedure and the module-level code. Use this method
        when different procedures in the same module need different
        combinations of module-level variables.

    2. Variables listed in a module-level COMMON SHARED, DIM SHARED, or REDIM
        SHARED statement are shared between the module-level code and all
        procedures within that module. This method is most useful when all
        procedures in a module use a common set of variables.

    You can also use the COMMON or COMMON SHARED statement to share variables
    among two or more modules. Sections 2.6.1-2.6.3 discuss these three ways
    to share variables.

2.6.1  Sharing Variables with Specific Procedures in a Module

    If different procedures within a module need to share different variables
    with the module-level code, use the SHARED statement within each
    procedure.

    Arrays in SHARED statements consist of the array name followed by a set of
    empty parentheses ( ):

    SUB JustAnotherSub STATIC
        SHARED ArrayName ()
        .
        .
        .

    If you give a variable its type in an AS type clause, then the variable
    must also be typed with the AS type clause in a SHARED statement:

    DIM Buffer AS STRING * 10
    .
    .
    .
    END

    SUB ReadRecords STATIC
        SHARED Buffer AS STRING * 10
        .
        .
        .
    END SUB

    Example

    In the next example, the SHARED statements in the GetRecords and
    InventoryTotal procedures show the format of a shared variable list:

    ' =========================================================
    '                   MODULE-LEVEL CODE
    ' =========================================================
    TYPE RecType
        Price AS SINGLE
        Desc AS STRING * 35
    END TYPE

    DIM RecVar(1 TO 100) AS RecType   ' Array of records

    INPUT "File name: ", FileSpec$
    CALL GetRecords
    PRINT InventoryTotal
    END

    ' =========================================================
    '                   PROCEDURE-LEVEL CODE
    ' =========================================================
    SUB GetRecords STATIC

    ' Both FileSpec$ and the RecVar array of records
    ' are shared with the module-level code above:
        SHARED FileSpec$, RecVar() AS RecType
        OPEN FileSpec$ FOR RANDOM AS #1
        .
        .
        .
    END SUB

    FUNCTION InventoryTotal STATIC

    ' Only the RecVar array is shared with the module-level
    ' code:
        SHARED RecVar() AS RecType
        .
        .
        .
    END FUNCTION

2.6.2  Sharing Variables with All Procedures in a Module

    If variables are declared at the module level with the SHARED attribute in
    a COMMON, DIM, or REDIM statement (for example, by using a statement of
    the form COMMON SHARED variablelist), then all procedures within that
    module have access to those variables; in other words, the SHARED
    attribute makes variables global throughout a module.

    The SHARED attribute is convenient when you need to share large numbers of
    variables among all procedures in a module.

    Examples

    These statements declare variables shared among all procedures in one
    module:

    COMMON SHARED A, B, C
    DIM SHARED Array(1 TO 10, 1 TO 10) AS UserType
    REDIM SHARED Alpha(N%)

    In the following example, the module-level code shares the string
    arrayStrArray and the integer variables Min and Max with the two SUB
    procedures FillArray and PrintArray :

    ' =========================================================
    '                    MODULE-LEVEL CODE
    ' =========================================================
    DECLARE SUB FillArray ()
    DECLARE SUB PrintArray ()

    ' The following DIM statements share the Min and Max
    ' integer variables and the StrArray string array
    ' with any SUB or FUNCTION in this module:
    DIM SHARED StrArray (33 TO 126) AS STRING * 5
    DIM SHARED Min AS INTEGER, Max AS INTEGER

    Min = LBOUND(StrArray)
    Max = UBOUND(StrArray)

    FillArray               ' Note the absence of argument lists.
    PrintArray
    END
    ' =========================================================
    '                    PROCEDURE-LEVEL CODE
    ' =========================================================
    SUB FillArray STATIC

        ' Load each element of the array from 33 to 126
        ' with a 5-character string, each character of which
        ' has the ASCII code I%:
        FOR I% = Min TO Max
        StrArray(I%) = STRING$(5, I%)
        NEXT

    END SUB

    SUB PrintArray STATIC
        FOR I% = Min TO Max
        PRINT StrArray(I%)
        NEXT
    END SUB

    Partial output

    !!!!!
    """""
    #####
    $$$$$
    %%%%%
    &&&&&
    .
    .
    .

    If you are using your own text editor to write your programs and directly
    compiling those programs outside the QuickBASIC development environment,
    note that variable declarations with the SHARED attribute must precede the
    procedure definition. Otherwise, the value of any variable declared with
    SHARED is not available to the procedure, as shown by the output from the
    next example. (If you are using QuickBASIC to create your programs, this
    sequence is not required, since QuickBASIC automatically saves programs in
    the correct order.)

    DEFINT A-Z

    FUNCTION Adder (X, Y) STATIC
        Adder = X + Y + Z
    END FUNCTION

    DIM SHARED Z
    Z = 2
    PRINT Adder (1, 3)
    END

    Output

    4

    The next example shows how you should save the module shown above, with
    the definition of Adder following the DIM SHARED Z statement:

    DEFINT A-Z

    DECLARE FUNCTION Adder (X, Y)

    ' The variable Z is now shared with Adder:
    DIM SHARED Z
    Z = 2
    PRINT Adder (1, 3)
    END

    FUNCTION Adder (X, Y) STATIC
        Adder = X + Y + Z
    END FUNCTION

    Output

    6

2.6.3  Sharing Variables with Other Modules

    If you want to share variables across modules in your program, list the
    variables in COMMON or COMMON SHARED statements at the module level in
    each module.

    Examples

    The following example shows how to share variables between modules by
    using a COMMON statement in the module that calls the SUB procedures, as
    well as a COMMON SHARED statement in the module that defines the
    procedures. With COMMON SHARED, all procedures in the second module have
    access to the common variables:

    ' =========================================================
    '                      MAIN MODULE
    ' =========================================================

    COMMON A, B
    A = 2.5
    B = 1.2
    CALL Square
    CALL Cube
    END
    ' =========================================================
    '           Module with Cube and Square Procedures
    ' =========================================================

    ' NOTE: The names of the variables (X, Y) do not have to be
    ' the same as in the other module (A, B). Only the types
    ' have to be the same.

    COMMON SHARED X, Y  ' This statement is at the module level.
                        ' Both X and Y are shared with the CUBE
                        ' and SQUARE procedures below.
    SUB Cube STATIC
        PRINT "A cubed   ="; X ^ 3
        PRINT "B cubed   ="; Y ^ 3
    END SUB

    SUB Square STATIC
        PRINT "A squared ="; X ^ 2
        PRINT "B squared ="; Y ^ 2
    END SUB

    The following example uses named COMMON blocks at the module levels and
    SHARED statements within procedures to share different sets of variables
    with each procedure:

    ' =========================================================
    '                        MAIN MODULE
    ' Prints the volume and density of a filled cylinder given
    ' the input values
    ' =========================================================

    COMMON /VolumeValues/ Height, Radius, Volume
    COMMON /DensityValues/ Weight, Density

    INPUT "Height of cylinder in centimeters: ", Height
    INPUT "Radius of cylinder in centimeters: ", Radius
    INPUT "Weight of filled cylinder in grams: ", Weight

    CALL VolumeCalc
    CALL DensityCalc

    PRINT "Volume is"; Volume; "cubic centimeters."
    PRINT "Density is"; Density; "grams/cubic centimeter."
    END

    ' =========================================================
    '     Module with DensityCalc and VolumeCalc Procedures
    ' =========================================================

    COMMON /VolumeValues/ H, R, V
    COMMON /DensityValues/ W, D

    SUB VolumeCalc STATIC

        ' Share the Height, Radius, and Volume variables
        ' with this procedure:
        SHARED H, R, V
        CONST PI = 3.141592653589#
        V = PI * H * (R ^ 2)
    END SUB

    SUB DensityCalc STATIC

        ' Share the Weight, Volume, and Density variables
        ' with this procedure:
        SHARED W, V, D
        D = W / V
    END SUB

    Output

    Height of cylinder in centimeters: 100
    Radius of cylinder in centimeters: 10
    Weight of filled cylinder in grams: 10000
    Volume is 31415.93 cubic centimeters.
    Density is .3183099 grams/cubic centimeter.

2.6.4  The Problem of Variable Aliasing

    "Variable aliasing" is sometimes a problem in long programs containing
    many variables and procedures. Variable aliasing is the situation where
    two or more names refer to the same location in memory. It occurs:

    ■ When the same variable appears more than once in the list of arguments
    passed to a procedure.

    ■ When a variable passed in an argument list is also accessed by the
    procedure by means of the SHARED statement or the SHARED attribute.

    To avoid aliasing problems, double-check variables shared with a procedure
    to make sure they don't also appear in a procedure call's argument list.
    Also, don't pass the same variable twice, as in the next statement:

    ' X is passed twice; this will lead to aliasing problems
    ' in the Test procedure:
    CALL Test(X, X, Y)

    Example

    The following example illustrates how variable aliasing can occur. Here
    the variable A is shared between the module-level code and the SUB
    procedure with the DIM SHARED statement. However, A is also passed by
    reference to the SUB as an argument. Therefore, in the subprogram, A and X
    both refer to the same location in memory. Thus, when the subprogram
    modifies X, it is also modifying A, and vice versa.

    DIM SHARED A
    A = 4
    CALL PrintHalf(A)
    END

    SUB PrintHalf (X) STATIC
        PRINT "Half of"; X; "plus half of"; A; "equals";
        X = X / 2            ' X and A now both equal 2.
        A = A / 2            ' X and A now both equal 1.
        PRINT A + X
    END SUB

    Output

    Half of 4 plus half of 4 equals 2


2.7  Automatic and STATIC Variables

    When the STATIC attribute appears on a procedure-definition line, it means
    that local variables within the procedure are STATIC; that is, their
    values are preserved between calls to the procedure.

    Leaving off the STATIC attribute makes local variables within the
    procedure "automatic" by default; that is, you get a fresh set of local
    variables each time the procedure is called.

    You can override the effect of leaving off the STATIC attribute by using
    the STATIC statement within the procedure, thus making some variables
    automatic and others STATIC (see Section 2.8 for more information).

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    The SHARED statement also overrides the default for variables in a
    procedure (local STATIC or local automatic), since any variable
    appearing in a SHARED statement is known at the module level and thus is
    not local to the procedure.
    ──────────────────────────────────────────────────────────────────────────


2.8  Preserving Values of Local Variables with the STATIC Statement

    Sometimes you may want to make some local variables in a procedure STATIC
    while keeping the rest automatic. List those variables in a STATIC
    statement within the procedure.

    Also, putting a variable name in a STATIC statement is a way of making
    absolutely sure that the variable is local, since a STATIC statement
    overrides the effect of a module-level SHARED statement.

    A STATIC statement can appear only within a procedure. An array name in a
    STATIC statement must be followed by a set of empty parentheses ( ). Also,
    you must dimension any array that appears in a STATIC statement before
    using the array, as shown in the next example:

    SUB SubProg2
        STATIC Array() AS INTEGER
        DIM Array(-5 TO 5, 1 TO 25) AS INTEGER
        .
        .
        .
    END SUB

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    If you give a variable its type in an AS type clause, then the AS type
    clause must appear along with the variable's name in both the STATIC and
    DIM statements.
    ──────────────────────────────────────────────────────────────────────────

    Example

    The following example shows how a STATIC statement preserves the value of
    the string variable Y$ throughout successive calls to TestSub:

    DECLARE SUB TestSub ()
    FOR I% = 1 TO 5
        TestSub              ' Call TestSub five times.
    NEXT I%
    END

    SUB TestSub             ' Note: no STATIC attribute

    ' Both X$ and Y$ are local variables in TestSub (that is,
    ' their values are not shared with the module-level code).
    ' However since X$ is an automatic variable, it is
    ' reinitialized to a null string every time TestSub is
    ' called. In contrast, Y$ is STATIC, so it retains the
    ' value it had from the last call:
        STATIC Y$
        X$ = X$ + "*"
        Y$ = Y$ + "*"
        PRINT X$, Y$
    END SUB

    Output

    *             *
    *             **
    *             ***
    *             ****
    *             *****


2.9  Recursive Procedures

    Procedures in BASIC can be recursive. A recursive procedure is one that
    can call itself or call other procedures that in turn call the first
    procedure.

2.9.1  The Factorial Function

    A good way to illustrate recursive procedures is to consider the factorial
    function from mathematics. One way to define n! ("n factorial") is with
    the following formula:

    n! = n * (n-1) * (n-2) * ... * 2 * 1

    For example, 5 factorial is evaluated as follows:

    5! = 5 * 4 * 3 * 2 * 1 = 120

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    Do not confuse the mathematical factorial symbol (!) used in this
    discussion with the single-precision type-declaration suffix used by
    BASIC.
    ──────────────────────────────────────────────────────────────────────────

    Factorials lend themselves to a recursive definition as well:

    n! = n * (n-1)!

    This leads to the following progression:

    5! = 5 * 4!
    4! = 4 * 3!
    3! = 3 * 2!
    2! = 2 * 1!
    1! = 1 * 0!

    Recursion must always have a terminating condition. With factorials this
    terminating condition occurs when 0! is evaluated──by definition, 0! is
    equal to 1.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    Although a recursive procedure can have STATIC variables by default (as
    in the next example), it is often preferable to let automatic variables
    be the default instead. In this way, recursive calls will not overwrite
    variable values from a preceding call.
    ──────────────────────────────────────────────────────────────────────────

    Example

    The following example uses a recursive FUNCTION procedure to calculate
    factorials:

    DECLARE FUNCTION Factorial# (N%)
    Format$ = "###_! = ###################"
    DO
        INPUT "Enter number from 0 - 20 (or -1 to end): ", Num%
        IF Num% >= 0 AND Num% <= 20 THEN
        PRINT USING Format$; Num%; Factorial#(Num%)
        END IF
    LOOP WHILE Num% >= 0
    END

    FUNCTION Factorial# (N%) STATIC

        IF N% > 0 THEN  ' Call Factorial# again
                        ' if N is greater than zero.
        Factorial# = N% * Factorial#(N% - 1)

        ELSE            ' Reached the end of recursive calls
                        ' (N% = 0), so "climb back up the ladder."
        Factorial# = 1
        END IF
    END FUNCTION

2.9.2  Adjusting the Size of the Stack

    Recursion can eat up a lot of memory, since each set of automatic
    variables in a SUB or FUNCTION procedure is saved on the stack. (Saving
    variables this way allows a procedure to continue with the correct
    variable values after control returns from a recursive call.)

    If you have a recursive procedure with many automatic variables, or a
    deeply nested recursive procedure, you may need to adjust the size of the
    stack with a CLEAR , , stacksize statement, where stacksize is the number
    of bytes from the stack you want to reserve. Otherwise, while your program
    is running you may get the error message Out of stack space.

    The following steps outline one way to estimate the amount of memory a
    recursive procedure needs:

    1. Insert a single quotation mark to temporarily turn the recursive call
        into a comment line so that the procedure will be invoked only once
        when the program runs.

    2. Call the FRE(-2) function (which returns the total unused stack space)
        just before you call the recursive procedure. Also call the FRE(-2)
        function right at the end of the recursive procedure. Use PRINT
        statements to display the returned values.

    3. Run the program. The difference in values is the amount of stack space
        (in bytes) used by one call to the procedure.

    4. Estimate the maximum number of times the procedure is likely to be
        invoked, then multiply this value by the stack space consumed by one
        call to the procedure. The result is totalbytes.

    5. Reserve the amount of stack space calculated in step 4:

        CLEAR , , totalbytes


2.10  Transferring Control to Another Program with CHAIN

    Unlike procedure calls, which occur within the same program, the CHAIN
    statement simply starts a new program. When a program chains to another
    program, the following sequence occurs:

    1. The first program stops running.

    2. The second program is loaded into memory.

    3. The second program starts running.

    The advantage of using CHAIN is that it enables you to split a program
    with large memory requirements into several smaller programs.

    The COMMON statement allows you to pass variables from one program to
    another program in a chain. A common programming practice is to put these
    COMMON statements in an include file, and then use the $INCLUDE
    metacommand at the beginning of each program in the chain.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    Don't use a COMMON /blockname /variablelist statement (a "named COMMON
    block") to pass variables to a chained program, since variables listed
    in named COMMON blocks are not preserved when chaining. Use a blank
    COMMON block (COMMON variablelist) instead.
    ──────────────────────────────────────────────────────────────────────────

    Example

    This example, which shows a chain connecting three separate programs, uses
    an include file to declare variables passed in common among the programs:

    ' ============ CONTENTS OF INCLUDE FILE COMMONS.BI ========
    DIM Values(10)
    COMMON Values(), NumValues

    ' ======================= MAIN.BAS ========================

    ' Read in the contents of the COMMONS.BI file:
    ' $INCLUDE: 'COMMONS.BI'

        ' Input the data:
        INPUT "Enter number of data values (<=10): ", NumValues
        FOR I = 1 TO NumValues
        Prompt$ = "Value ("+LTRIM$(STR$(I))+")? "
        PRINT Prompt$;
        INPUT "", Values(I)
        NEXT I

        ' Have the user specify the calculation to do:
        INPUT "Calculation (1=st. dev., 2=mean)? ", Choice

        ' Now, chain to the correct program:
        SELECT CASE Choice

        CASE 1:             ' Standard Deviation
            CHAIN "STDEV"

        CASE 2:             ' Mean
            CHAIN "MEAN"
        END SELECT
    END

    ' ======================= STDEV.BAS =======================
    ' Calculates the standard deviation of a set of data
    ' =========================================================

    ' $INCLUDE: 'COMMONS.BI'

        Sum   = 0   ' Normal sum
        SumSq = 0   ' Sum of values squared

        FOR I = 1 TO NumValues
        Sum   = Sum   + Values(I)
        SumSq = SumSq + Values(I) ^ 2
        NEXT I

        Stdev = SQR(SumSq / NumValues - (Sum / NumValues) ^ 2)
        PRINT "The Standard Deviation of the samples is: " Stdev
    END

    ' ======================== MEAN.BAS =======================
    ' Calculates the mean (average) of a set of data
    ' =========================================================

    ' $INCLUDE: 'COMMONS.BI'

        Sum = 0

        FOR I = 1 TO NumValues
        Sum = Sum + Values(I)
        NEXT

        Mean = Sum / NumValues
        PRINT "The mean of the samples is: " Mean
    END


2.11  Sample Application: Recursive Directory Search (WHEREIS.BAS)

    The following program uses a recursive SUB procedure, ScanDir, to scan a
    disk for the file name input by the user. Each time this program finds the
    given file, it prints the complete directory path to the file.

    Statements and Functions Used

    This program demonstrates the following statements and keywords discussed
    in this chapter:

    ■ DECLARE

    ■ FUNCTION...END FUNCTION

    ■ STATIC

    ■ SUB...END SUB

Program Listing

DEFINT A-Z

' Declare symbolic constants used in program:
CONST EOFTYPE = 0, FILETYPE = 1, DIRTYPE = 2, ROOT = "TWH"

DECLARE SUB ScanDir (PathSpec$, Level, FileSpec$, Row)

DECLARE FUNCTION MakeFileName$ (Num)
DECLARE FUNCTION GetEntry$ (FileNum, EntryType)

CLS
INPUT "File to look for"; FileSpec$
PRINT
PRINT "Enter the directory where the search should start"
PRINT "(optional drive + directories). Press <ENTER> to "
PRINT "begin search in root directory of current drive."
PRINT
INPUT "Starting directory"; PathSpec$
CLS

RightCh$ = RIGHT$(PathSpec$, 1)

IF PathSpec$ = "" OR RightCh$ = ":" OR RightCh$ <> "\" THEN
    PathSpec$ = PathSpec$ + "\"
END IF

FileSpec$ = UCASE$(FileSpec$)
PathSpec$ = UCASE$(PathSpec$)
Level = 1
Row = 3

' Make the top level call (level 1) to begin the search:
ScanDir PathSpec$, Level, FileSpec$, Row

KILL ROOT + ".*"        ' Delete all temporary files created
                        ' by the program.

LOCATE Row + 1, 1: PRINT "Search complete."
END

' ======================= GETENTRY ========================
'    This procedure processes entry lines in a DIR listing
'    saved to a file.

'    This procedure returns the following values:

'       GetEntry$       A valid file or directory name
'       EntryType       If equal to 1, then GetEntry$
'                       is a file.
'                       If equal to 2, then GetEntry$
'                       is a directory.
' =========================================================

FUNCTION GetEntry$ (FileNum, EntryType) STATIC

    ' Loop until a valid entry or end-of-file (EOF) is read:
    DO UNTIL EOF(FileNum)
        LINE INPUT #FileNum, EntryLine$
        IF EntryLine$ <> "" THEN

            ' Get first character from the line for test:
            TestCh$ = LEFT$(EntryLine$, 1)
            IF TestCh$ <> " " AND TestCh$ <> "." THEN EXIT DO
        END IF
    LOOP

    ' Entry or EOF found, decide which:
    IF EOF(FileNum) THEN         ' EOF, so return EOFTYPE
        EntryType = EOFTYPE       ' in EntryType.
        GetEntry$ = ""

    ELSE                         ' Not EOF, so it must be a
                                ' file or a directory.

        ' Build and return the entry name:
        EntryName$ = RTRIM$(LEFT$(EntryLine$, 8))

        ' Test for extension and add to name if there is one:
        EntryExt$ = RTRIM$(MID$(EntryLine$, 10, 3))
        IF EntryExt$ <> "" THEN
            GetEntry$ = EntryName$ + "." + EntryExt$
        ELSE
            GetEntry$ = EntryName$
        END IF

        ' Determine the entry type, and return that value
        ' to the point where GetEntry$ was called:
        IF MID$(EntryLine$, 15, 3) = "DIR" THEN
            EntryType = DIRTYPE            ' Directory
        ELSE
            EntryType = FILETYPE           ' File
        END IF

    END IF

END FUNCTION

' ===================== MAKEFILENAME$ =====================
'    This procedure makes a file name from a root string
'    ("TWH," defined as a symbolic constant at the module
'    level) and a number passed to it as an argument (Num).
' =========================================================

FUNCTION MakeFileName$ (Num) STATIC

    MakeFileName$ = ROOT + "." + LTRIM$(STR$(Num))

END FUNCTION

' ======================= SCANDIR =========================
'   This procedure recursively scans a directory for the
'   file name entered by the user.

'   NOTE: The SUB header doesn't use the STATIC keyword
'         since this procedure needs a new set of variables
'         each time it is invoked.
' =========================================================

SUB ScanDir (PathSpec$, Level, FileSpec$, Row)

    LOCATE 1, 1: PRINT "Now searching"; SPACE$(50);
    LOCATE 1, 15: PRINT PathSpec$;

    ' Make a file specification for the temporary file:
    TempSpec$ = MakeFileName$(Level)

    ' Get a directory listing of the current directory,
    ' and save it in the temporary file:
    SHELL "DIR " + PathSpec$ + " > " + TempSpec$

    ' Get the next available file number:
    FileNum = FREEFILE

    ' Open the DIR listing file and scan it:
    OPEN TempSpec$ FOR INPUT AS #FileNu

' Process the file, one line at a time:
    DO

        ' Input an entry from the DIR listing file:
        DirEntry$ = GetEntry$(FileNum, EntryType)

        ' If entry is a file:
        IF EntryType = FILETYPE THEN

            ' If the FileSpec$ string matches,
            ' print entry and exit this loop:
            IF DirEntry$ = FileSpec$ THEN
            LOCATE Row, 1: PRINT PathSpec$; DirEntry$;
            Row = Row + 1
            EntryType = EOFTYPE
            END IF

        ' If the entry is a directory, then make a recursive
        ' call to ScanDir with the new directory:
        ELSEIF EntryType = DIRTYPE THEN
            NewPath$ = PathSpec$ + DirEntry$ + "\"
            ScanDir NewPath$, Level + 1, FileSpec$, Row
            LOCATE 1, 1: PRINT "Now searching"; SPACE$(50);
            LOCATE 1, 15: PRINT PathSpec$;
        END IF

    LOOP UNTIL EntryType = EOFTYPE

    ' Scan on this DIR listing file is finished, so close it:
    CLOSE FileNum
END SUB



────────────────────────────────────────────────────────────────────────────
Chapter 3  File and Device I/O

    This chapter shows you how to use BASIC input and output (I/O) functions
    and statements. These statements permit your programs to access data
    stored in files and to communicate with devices attached to your system.

    The chapter includes material on a variety of programming tasks related to
    retrieving, storing, and formatting information. The relationship between
    data files and physical devices such as screens and keyboards is also
    covered.

    When you are finished with this chapter, you will know how to perform the
    following programming tasks:

    ■ Print text on the screen

    ■ Get input from the keyboard for use in a program

    ■ Create data files on disk

    ■ Store records in data files

    ■ Read records from data files

    ■ Read or modify data in files that are not in American Standard Code for
    Information Interchange (ASCII) format

    ■ Communicate with other computers through the serial port


3.1  Printing Text on the Screen

    This section explains how to accomplish the following tasks:

    ■ Display text on the screen with PRINT

    ■ Display formatted text on the screen with PRINT USING

    ■ Skip spaces in a row of printed text with SPC

    ■ Skip to a given column in a row of printed text with TAB

    ■ Change the number of rows or columns appearing on the screen with WIDTH

    ■ Open a text viewport with VIEW PRINT

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    Output that appears on the screen is sometimes referred to as "standard
    output." You can redirect standard output by using the DOS command-line
    symbols > or >>, thus sending output that would have gone to the screen
    to a different output device (such as a printer) or to a disk file. (See
    your DOS documentation for more information on redirecting output.)
    ──────────────────────────────────────────────────────────────────────────

3.1.1  Screen Rows and Columns

    To understand how text is printed on the screen, it helps to think of the
    screen as a grid of "rows" and "columns." The height of one row slightly
    exceeds the height of a line of printed output, while the width of one
    column is just wider than the width of one character. A standard screen
    configuration in text mode (nongraphics) is 80 columns wide by 25 rows
    high. Figure 3.1 shows how each character printed on the screen occupies a
    unique cell in the grid, a cell that can be identified by pairing a row
    argument with a column argument.

    The bottom row of the screen is not usually used for output, unless you
    use a LOCATE statement to display text there. (See Section 3.3,
    "Controlling the Text Cursor," for more information on LOCATE.)

3.1.2  Displaying Text and Numbers with PRINT


┌───────────────────────────────────────────────────────────────────┐
│                                                                   │
│                                                                   │
│        ←──────────────── Columns ──────────────→                  │
│     ┌────────────────────────                                     │
│     │     1   2   3   4   5   6   7   8   9                       │
│  ↑  │   ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬─                    │
│  │  │ 1 │   │   │   │   │   │   │   │   │   │                     │
│  │  │   ├───┼───┼───┼───┼───┼───┼───┼───┼───┼─                    │
│  │  │ 2 │   │   │   │ H │ E │ L │ L │ O │   │                     │
│Rows │   ├───┼───┼───┼──\┼───┼───┼───┼───┼───┼─                    │
│  │  │ 3 │   │   │   │   │\──┼───┼───┼───┼───┼── This output starts│
│  │  │   ├───┼───┼───┼───┼───┼───┼───┼───┼───┼─  in row 2, column 4│
│  │    4 │   │   │   │   │   │   │   │   │   │                     │
│  │      ├───┼───┼───┼───┼───┼───┼───┼───┼───┼─                    │
│  ↓      │   │   │   │   │   │   │   │   │   │                     │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘

Figure 3.1  Text Output on Screen

    By far the most commonly used statement for output to the screen is the
    PRINT statement. With PRINT, you can display numeric or string values, or
    a mixture of the two. In addition, PRINT with no arguments prints a blank
    line.

    The following are some general comments about PRINT:

    ■ PRINT always prints numbers with a trailing blank space. If the number
    is positive, the number is also preceded by a space; if the number is
    negative, the number is preceded by a minus sign.

    ■ The PRINT statement can be used to print lists of expressions.
    Expressions in the list can be separated from other expressions by
    commas, semicolons, one or more blank spaces, or one or more tab
    characters. A comma causes PRINT to skip to the beginning of the next
    "print zone," or block of 14 columns, on the screen. A semicolon (or any
    combination of spaces and/or tabs) between two expressions prints the
    expressions on the screen next to each other, with no spaces in between
    (except for the built-in spaces for numbers).

    ■ Ordinarily, PRINT ends each line of output with a new-line sequence (a
    carriage-return and line-feed). However, a comma or semicolon at the end
    of the list of expressions suppresses this; the next printed output from
    the program appears on the same line unless it is too long to fit on
    that line.

    ■ PRINT wraps an output line that exceeds the width of the screen onto the
    next line. For example, if you try to print a line that is 100
    characters long on an 80-column screen, the first 80 characters of the
    line show up on one row, followed by the next 20 characters on the next
    row. If the 100-character line didn't start at the left edge of the
    screen (for example, if it followed a PRINT statement ending in a comma
    or semicolon), then the line would print until it reached the 80th
    column of one row and continue in the first column of the next row.

    Example

    The output from the following program shows some of the different ways you
    can use PRINT:

    A = 2
    B = -1
    C = 3
    X$ = "over"
    Y$ = "there"

    PRINT A, B, C
    PRINT B, A, C
    PRINT A; B; C
    PRINT X$; Y$
    PRINT X$, Y$;
    PRINT A, B
    PRINT
    FOR I = 1 TO 8
        PRINT X$,
    NEXT

    Output

    2            -1             3
    -1             2             3
    2 -1  3
    overthere
    over          there 2       -1

    over          over          over          over          over
    over          over          over

3.1.3  Displaying Formatted Output with PRINT USING

    The PRINT USING statement gives greater control than PRINT over the
    appearance of printed data, especially numeric data. Through the use of
    special characters embedded in a format string, PRINT USING allows you to
    specify information such as how many digits from a number (or how many
    characters from a string) are displayed, whether or not a plus (+) sign or
    a dollar sign ($) appears in front of a number, and so forth.

    Example

    The example that follows gives you a sample of what can be done with PRINT
    USING. You can list more than one expression after the PRINT USING format
    string. As is the case with PRINT, the expressions in the list can be
    separated from one another by commas, semicolons, spaces, or tab
    characters.

    X = 441.2318

    PRINT USING "The number with 3 decimal places ###.###";X
    PRINT USING "The number with a dollar sign $$##.##";X
    PRINT USING "The number in exponential format #.###^^^^";X
    PRINT USING "Numbers with plus signs +###  "; X; 99.9

    Output

    The number with 3 decimal places 441.232
    The number with a dollar sign $441.23
    The number in exponential format 0.441E+03
    Numbers with plus signs +441  Numbers with plus signs +100

    Consult the QB Advisor for more on PRINT USING.

3.1.4  Skipping Spaces and Advancing to a Specific Column

    By using the SPC(n) statement in a PRINT statement, you can skip n spaces
    in a row of printed output, as shown by the output from the next example:

    PRINT "         1         2         3"
    PRINT "123456789012345678901234567890"
    PRINT "First Name"; SPC(10); "Last Name"

    Output

    1         2         3
    123456789012345678901234567890
    First Name          Last Name

    By using the TAB(n) statement in a PRINT statement, you can skip to the
    nth column (counting from the left side of the screen) in a row of printed
    output. The following example uses TAB to produce the same output as that
    shown above:

    PRINT "         1         2         3"
    PRINT "123456789012345678901234567890"
    PRINT "First Name"; TAB(21); "Last Name"

    Neither SPC nor TAB can be used by itself to position printed output on
    the screen; they can only appear in PRINT statements.

3.1.5  Changing the Number of Columns or Rows

    You can control the maximum number of characters that appear in a single
    row of output by using the WIDTH columns statement. The WIDTH columns
    statement actually changes the size of characters that are printed on the
    screen, so that more or fewer characters can fit on a row. For example,
    WIDTH 40 makes characters wider, so the maximum row length is 40
    characters. WIDTH 80 makes characters narrower, so the maximum row length
    is 80 characters. The numbers 40 and 80 are the only valid values for the
    columns argument.

    On machines equipped with an Enhanced Graphics Adapter (EGA) or Video
    Graphics Adapter (VGA), the WIDTH statement can also control the number of
    rows that appear on the screen as follows:

    WIDTH[[columns]] [[,rows]]

    The value for rows may be 25, 30, 43, 50, or 60, depending on the type of
    display adapter you use and the screen mode set in a preceding SCREEN
    statement.

3.1.6  Creating a Text Viewport

    So far, the entire screen has been used for text output. However, with the
    VIEW PRINT statement, you can restrict printed output to a "text
    viewport," a horizontal slice of the screen. The syntax of the VIEW PRINT
    statement is:

    VIEW PRINT[[topline TO bottomline]]

    The values for topline and bottomline specify the locations where the
    viewport will begin and end.

    A text viewport also gives you control over on-screen scrolling. Without a
    viewport, once printed output reaches the bottom of the screen, text or
    graphics output that was at the top of the screen scrolls off and is lost.
    However, after a VIEW PRINT statement, scrolling takes place only between
    the top and bottom lines of the viewport. This means you can label the
    displayed output at the top and/or bottom of the screen without having to
    worry that the labeling will scroll it off if too many lines of data
    appear. You can also use the CLS 2 statement to clear just the text
    viewport, leaving the contents of the rest of the screen intact. See
    Section 5.5, "Defining a Graphics Viewport," to learn how to create a
    viewport for graphics output on the screen.

    Example

    You can see the effects of a VIEW PRINT statement by examining the output
    from the next example:

    CLS
    LOCATE 3, 1
    PRINT "This is above the text viewport; it doesn't scroll."

    LOCATE 4, 1
    PRINT STRING$(60, "_")       ' Print horizontal lines above
    LOCATE 11, 1
    PRINT STRING$(60, "_")       ' and below the text viewport.

    PRINT "This is below the text viewport."

    VIEW PRINT 5 TO 10             ' Text viewport extends from
                                    ' lines 5 to 10.

    FOR I = 1 TO 20                ' Print numbers and text in
        PRINT I; "a line of text"   ' the viewport.
    NEXT

    DO: LOOP WHILE INKEY$ = ""     ' Wait for a key press.
    CLS 2                          ' Clear just the viewport.
    END

    Output (Before User Presses Key)

    ┌───────────────────────────────────────────────────────────────────┐
    │                                                                   │
    │                                                                   │
    │  This is above the text viewport: it doesn't scroll.              │
    │  ───────────────────────────────────────────────────────────────  │
    │  16 a line of text                                                │
    │  17 a line of text                                                │
    │  18 a line of text                                                │
    │  19 a line of text                                                │
    │  20 a line of text                                                │
    │                                                                   │
    │                                                                   │
    │  ───────────────────────────────────────────────────────────────  │
    │  This is below the text viewport.                                 │
    │                                                                   │
    │                                                                   │
    │                                                                   │
    │                                                                   │
    └───────────────────────────────────────────────────────────────────┘

    Output (After User Presses Key)

    ┌───────────────────────────────────────────────────────────────────┐
    │                                                                   │
    │                                                                   │
    │   This is above the text viewport: it doesn't scroll.             │
    │   ───────────────────────────────────────────────────────────     │
    │                                                                   │
    │                                                                   │
    │                                                                   │
    │   ───────────────────────────────────────────────────────────     │
    │   This is below the text viewport.                                │
    │                                                                   │
    │                                                                   │
    │                                                                   │
    │                                                                   │
    │                                                                   │
    │                                                                   │
    │                                                                   │
    │                                                                   │
    │                                                                   │
    └───────────────────────────────────────────────────────────────────┘


3.2  Getting Input from the Keyboard

    This section shows you how to use the following statements and functions
    to enable your BASIC programs to accept input entered from the keyboard:

    ■ INPUT

    ■ LINE INPUT

    ■ INPUT$

    ■ INKEY$

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    Input typed at the keyboard is often referred to as "standard input."
    You can use the DOS symbol < to direct standard input to your program
    from a file or other input device instead of from the keyboard. (See
    your DOS documentation for more information on redirecting input.)
    ──────────────────────────────────────────────────────────────────────────

3.2.1  The INPUT Statement

    The INPUT statement takes information typed by the user and stores it in a
    list of variables, as shown in the following example:

    INPUT A%, B, C$
    INPUT D$
    PRINT A%, B, C$, D$

    Output

    ? 6.6,45,a string
    ? "two, three"
    7             45           a string      two, three

    Here are some general comments about INPUT:

    ■ An INPUT statement by itself prompts the user with a question mark (?)
    followed by a blinking cursor.

    ■ The INPUT statement is followed by one or more variable names. If there
    are more than one variable, they are separated by commas.

    ■ The number of constants entered by the user after the INPUT prompt must
    be the same as the number of variables in the INPUT statement itself.

    ■ The values the user enters must agree in type with the variables in the
    list following INPUT. In other words, enter a number if the variable is
    designated as having the type integer, long integer, single precision,
    or double precision. Enter a string if the variable is designated as
    having the type string.

    ■ Since constants in an input list must be separated by commas, an input
    string constant containing one or more commas should be enclosed in
    double quotes. The double quotes ensure that the string is treated as a
    unit and not broken into two or more parts.

    If the user breaks any of the last three rules, BASIC prints the error
    message Redo from start. This message reappears until the input agrees in
    number and type with the variable list.

    If you want your input prompt to be more informative than a simple
    question mark, you can make a prompt appear, as in the following example:

    INPUT "What is the correct time (hour, min)"; Hr$, Min$

    This prints the following prompt:

    What is the correct time (hour, min)?

    Note the semicolon between the prompt and the input variables. This
    semicolon causes a question mark to appear as part of the prompt.
    Sometimes you may want to eliminate the question mark altogether; in this
    case, put a comma between the prompt and the variable list:

    INPUT "Enter the time (hour, min): ", Hr$, Min$

    This prints the following prompt:

    Enter the time (hour, min):

3.2.2  The LINE INPUT Statement

    If you want your program to accept lines of text with embedded commas,
    leading blanks, or trailing blanks, yet you do not want to have to remind
    the user to enclose the input in double quotes, use the LINE INPUT
    statement. The LINE INPUT statement, as its name implies, accepts a line
    of input (terminated by pressing the ENTER key) from the keyboard and
    stores it in a single string variable. Unlike INPUT, the LINE INPUT
    statement does not print a question mark by default to prompt for input;
    it does, however, allow you to display a prompt string.

    The following example shows the difference between INPUT and LINE INPUT:

    ' Assign the input to three separate variables:
    INPUT "Enter three values separated by commas: ", A$, B$, C$

    ' Assign the input to one variable (commas not treated
    ' as delimiters between input):
    LINE INPUT "Enter the same three values: ", D$

    PRINT "A$ = "; A$
    PRINT "B$ = "; B$
    PRINT "C$ = "; C$
    PRINT "D$ = "; D$

    Output

    Enter 3 values separated by commas: by land, air, and sea
    Enter the same three values: by land, air, and sea
    A$ = by land
    B$ = air
    C$ = and sea
    D$ = by land, air, and sea

    With both INPUT and LINE INPUT, input is terminated when the user presses
    the ENTER key, which also advances the cursor to the next line. As the
    next example shows, a semicolon between the INPUT keyword and the prompt
    string keeps the cursor on the same line:

    INPUT "First value: ", A
    INPUT; "Second value: ", B
    INPUT "    Third value: ", C

    The following shows some sample input to the preceding program and the
    positions of the prompts:

    First value: 5
    Second value: 4     Third value: 3

3.2.3  The INPUT$ Function

    Both INPUT and LINE INPUT wait for the user to press the ENTER key before
    they store what is typed; that is, they read a line of input, then assign
    it to program variables. In contrast, the INPUT$(number) function doesn't
    wait for the enter key to be pressed; it just reads a specified number of
    characters. For example, the following line in a program reads three
    characters typed by the user, then stores the three-character string in
    the variable Test$:

    Test$ = INPUT$(3)

    Unlike the INPUT statement, the INPUT$ function does not prompt the user
    for data, nor does it echo input characters on the screen. Also, since
    INPUT$ is a function, it cannot stand by itself as a complete statement.
    INPUT$ must appear in an expression, as in the following:

    INPUT x              ' INPUT is a statement.

    PRINT INPUT$(1)      ' INPUT$ is a function, so it must
    Y$ = INPUT$(1)       ' appear in an expression.

    The INPUT$ function reads input from the keyboard as an unformatted stream
    of characters. Unlike INPUT or LINE INPUT, INPUT$ accepts any key pressed,
    including control keys like ESC or BACKSPACE. For example, pressing the
    ENTER key five times assigns five carriage-return characters to the Test$
    variable in the next line:

    Test$ = INPUT$(5)

3.2.4  The INKEY$ Function

    The INKEY$ function completes the list of BASIC's keyboard-input functions
    and statements. When BASIC encounters an expression containing the INKEY$
    function, it checks to see if the user has pressed a key since one of the
    following:

    ■ The last time it found an expression with INKEY$

    ■ The beginning of the program, if this is the first time INKEY$ appears

    If no key has been pressed since the last time the program checked, INKEY$
    returns a null string (""). If a key has been pressed, INKEY$ returns the
    character corresponding to that key.

    Example

    The most important difference between INKEY$ and the other statements and
    functions discussed in this section is that INKEY$ lets your program
    continue doing other things while it checks for input. In contrast, LINE
    INPUT, INPUT$, and INPUT suspend program execution until there is input,
    as show in this example:

    PRINT "Press any key to start. Press any key to end."

    ' Don't do anything else until the user presses a key:
    Begin$ = INPUT$(1)

    I = 1

    ' Print the numbers from one to one million.
    ' Check for a key press while the loop is executing:
    DO
        PRINT I
        I = I + 1

    ' Continue looping until the value of the variable I is
    ' greater than one million or until a key is pressed:
    LOOP UNTIL I > 1000000 OR INKEY$ <> ""


3.3  Controlling the Text Cursor

    When you display printed text on the screen, the text cursor marks the
    place on the screen where output from the program──or input typed by the
    user──will appear next. In the next example, after the INPUT statement
    displays its 12-letter prompt, First name:, the cursor waits for input in
    row 1 at column 13:

    ' Clear the screen; start printing in row one, column one:
    CLS
    INPUT "First name: ", FirstName$

    In the next example, the semicolon at the end of the second PRINT
    statement leaves the cursor in row 2 at column 27:

    CLS
    PRINT

    ' Twenty-six characters are in the next line:
    PRINT "Press any key to continue.";
    PRINT INPUT$(1)

    Sections 3.3.1-3.3.3 show how to control the location of the text cursor,
    change its shape, and get information about its location.

3.3.1  Positioning the Cursor

    The input and output statements and functions discussed so far do not
    allow much control over where output is displayed or where the cursor is
    located after the output is displayed. Input prompts or output always
    start in the far left column of the screen and descend one row at a time
    from top to bottom unless a semicolon is used in the PRINT or INPUT
    statements to suppress the carriage-return and line-feed sequence.

    The SPC and TAB statements, discussed in Section 3.1.4, "Skipping Spaces
    and Advancing to a Specific Column," give some control over the location
    of the cursor by allowing you to move it to any column within a given row.

    The LOCATE statement extends this control one step further. The syntax for
    LOCATE is

    LOCATE[[row]][[,[[column]][[,[[cursor]][[,[[start]][[,stop]]]]]]]]

    Using the LOCATE statement allows you to position the cursor in any row or
    column on the screen, as shown by the output from the next example:

    CLS
    FOR Row = 9 TO 1 STEP -2
        Column = 2 * Row
        LOCATE Row, Column
        PRINT "12345678901234567890";
    NEXT

    Output

    12345678901234567890

        12345678901234567890

            12345678901234567890

                12345678901234567890

                    12345678901234567890

3.3.2  Changing the Cursor's Shape

    The optional cursor, start, and stop arguments shown in the syntax for the
    LOCATE statement also allow you to change the shape of the cursor and make
    it visible or invisible. A value of 1 for cursor makes the cursor visible,
    while a value of 0 makes the cursor invisible. The start and stop
    arguments control the height of the cursor, if it is on, by specifying the
    top and bottom "pixel" lines, respectively, for the cursor. (Any character
    on the screen is composed of lines of pixels, which are dots of light on
    the screen.) If a cursor spans the height of one row of text, then the
    line of pixels at the top of the cursor has the value 0, while the line of
    pixels at the bottom has a value of 7 or 13, depending on the type of
    display adapter you have. (For monochrome the value is 13; for color it is
    7.)

    You can turn the cursor on and change its shape without specifying a new
    location for it. For example, the following statement keeps the cursor
    wherever it is at the completion of the next PRINT or INPUT statement,
    then makes it half a character high:

    LOCATE , , 1, 2, 5    ' Row and column arguments both optional

    The following examples show different cursor shapes produced using
    different start and stop values on a color display. Each LOCATE statement
    shown in the left column is followed by the statement

    INPUT "PROMPT:", X$

    Statement                            Input Prompt and Cursor Shape
    ──────────────────────────────────────────────────────────────────────────
    LOCATE, , 1, 0, 7                    PROMPT:█

    LOCATE, , 1, 0, 3                    PROMPT:▀

    LOCATE, , 1, 4, 7                    PROMPT:▬

    LOCATE, , 1, 6, 2                    PROMPT:(see page 94 of printed
                                        manual)
    ──────────────────────────────────────────────────────────────────────────

    In the preceding examples, note that making the start argument bigger than
    the stop argument results in a two-piece cursor.

3.3.3  Getting Information about the Cursor's Location

    You can think of the functions CSRLIN and POS(n) as the inverses of the
    LOCATE statement: whereas LOCATE tells the cursor where to go, CSRLIN and
    POS(n) tell your program where the cursor is. The CSRLIN function returns
    the current row and the POS(n) function returns the current column of the
    cursor's position.

    The argument n for POS(n) is what is known as a "dummy" argument; that is,
    n is a placeholder that can be any numeric expression. For example, POS(0)
    and POS(1) both return the same value.

    Example

    The following example uses the POS(n) function to print 50 asterisks in
    rows of 13 asterisks:

    FOR I% = 1 TO 50
        PRINT "*";                  ' Print an asterisk and keep
                                    ' the cursor on the same line.
        IF POS(1) > 13 THEN PRINT   ' If the cursor's position
                                    ' is past column 13, advance
                                    ' to the next line.
    NEXT

    Output

    *************
    *************
    *************
    ***********


3.4  Working with Data Files

    Data files are physical locations on your disk where information is
    permanently stored. The following three tasks are greatly simplified by
    using data files in your BASIC programs:

    1. Creating, manipulating, and storing large amounts of data

    2. Accessing several sets of data with one program

    3. Using the same set of data in several different programs

    The sections that follow introduce the concepts of records and fields and
    contrast different ways to access data files from BASIC. When you have
    completed Sections 3.4.1-3.4.7, you should know how to do the following:

    ■ Create new data files

    ■ Open existing files and read their contents

    ■ Add new information to an existing data file

    ■ Change the contents of an existing data file

3.4.1  How Data Files Are Organized

    A data file is a collection of related blocks of information, or
    "records." Each record in a data file is further subdivided into "fields"
    or regularly recurring items of information within each record. If you
    compare a data file with a more old-fashioned way of storing information──
    for example, a folder containing application forms filled out by job
    applicants at a particular company──then a record is analogous to one
    application form in that folder. To carry the comparison one step further,
    a field is analogous to an item of information included on every
    application form, such as a Social Security number.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    If you do not want to access a file using records but instead want to
    treat it as an unformatted sequence of bytes, then read Section 3.4.7,
    "Binary File I/O."
    ──────────────────────────────────────────────────────────────────────────

3.4.2  Sequential and Random-Access Files

    The terms "sequential file" and "random-access file" refer to two
    different ways to store and access data on disk from your BASIC programs.
    A simplified way to think of these two kinds of files is with the
    following analogy: a sequential file is like a cassette tape, while a
    random-access file is like an LP record. To find a song on a cassette
    tape, you have to start at the beginning and fast-forward through the tape
    sequentially until you find the song you are looking for──there is no way
    to jump right to the song you want. This is similar to the way you have to
    find information in a sequential file: to get to the 500th record, you
    first have to read records 1 through 499.

    In contrast, if you want to play a certain song on an LP, all you have to
    do is lift the tone arm of the record player and put the needle down right
    on the song: you can randomly access anything on the LP without having to
    play all the songs before the one you want. Similarly, you can call up any
    record in a random-access file just by specifying its number, greatly
    reducing access time.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    Although there is no way to jump directly to a specific record in a
    sequential file, the SEEK statement lets you jump directly to a specific
    byte in the file (to "fast forward" or "rewind" the tape, to extend the
    preceding analogy). See Section 3.4.7, "Binary File I/O," for more
    information on how to do this.
    ──────────────────────────────────────────────────────────────────────────

3.4.3  Opening a Data File

    Before your program can read, modify, or add to a data file, it must first
    open the file. BASIC does this with the OPEN statement. The OPEN statement
    can be used to create a new file. The following list describes the various
    uses of the OPEN statement:

    ■ Create a new data file and open it so records can be added to it

    ' No file named PRICE.DAT is in the current directory:
    OPEN "Price.Dat" FOR OUTPUT AS #1

    ■ Open an existing data file so new records overwrite any data already in
    the file

    ' A file named PRICE.DAT is already in the current
    ' directory; new records can be written to it, but all
    ' old records are lost:
    OPEN "Price.Dat" FOR OUTPUT AS #1

    ■ Open an existing data file so new records are added to the end of the
    file, preserving data already in the file

    OPEN "Price.Dat" FOR APPEND AS #1

    The APPEND mode will also create a new file if a file with the given
    name does not already appear in the current directory.

    ■ Open an existing data file so old records can be read from it

    OPEN "Price.Dat" FOR INPUT AS #1

    See Section 3.4.5, "Using Sequential Files," for more information about
    the INPUT, OUTPUT, and APPEND modes.

    ■ Open an existing data file (or create a new one if a file with that name
    doesn't exist), then read or write fixed-length records to and from the
    file

    OPEN "Price.Dat" FOR RANDOM AS #1

    See Section 3.4.6, "Using Random-Access Files," for more information
    about this mode.

    ■ Open an existing data file (or create a new one if a file with that name
    doesn't exist), then read data from the file or add new data to the
    file, starting at any byte position in the file

    OPEN "Price.Dat" FOR BINARY AS #1

    See Section 3.4.7, "Binary File I/O," for more information about this
    mode.

    3.4.3.1  File Numbers in BASIC

    The OPEN statement does more than just specify a mode for data I/O for a
    particular file (OUTPUT, INPUT, APPEND, RANDOM, or BINARY); it also
    associates a unique file number with that file. This file number, which
    can be any integer from 1 to 255, is then used by subsequent file I/O
    statements in the program as a shorthand way to refer to the file. As long
    as the file is open, this number remains associated with the file. When
    the file is closed, the file number is freed for use with another file.
    (See Section 3.4.4 for information on how files are closed.) Your BASIC
    programs can open more than one file at a time.

    The FREEFILE function can help you find an unused file number. This
    function returns the next available number that can be associated with a
    file in an OPEN statement. For example, FREEFILE might return the value 3
    after the following OPEN statements:

    OPEN "Test1.Dat" FOR RANDOM AS #1
    OPEN "Test2.Dat" FOR RANDOM AS #2
    FileNum = FREEFILE
    OPEN "Test3.Dat" FOR RANDOM AS #FileNum

    The FREEFILE function is particularly useful when you create your own
    library procedures that open files. With FREEFILE, you don't have to pass
    information about the number of open files to these procedures.

    3.4.3.2  File Names in BASIC

    File names in OPEN statements can be any string expression, composed of
    any combination of the following characters:

    ■ The letters a-z and A-Z

    ■ The numbers 0-9

    ■ The following special characters:

    ( ) { } @ # $ % ^ & ! - _ ' ~

    The string expression can also contain an optional drive specification, as
    well as a complete or partial path specification. This means your BASIC
    program can work with data files on another drive or in a directory other
    than the one where the program is running. For example, the following OPEN
    statements are all valid:

    OPEN "..\Grades.Qtr" FOR INPUT AS #1

    OPEN "a:\salaries\1987.man" FOR INPUT AS #2

    FileName$ = "TempFile"
    OPEN FileName$ FOR OUTPUT AS #3

    BaseName$ = "Invent"
    OPEN BaseName$ + ".DAT" FOR OUTPUT AS #4

    DOS also imposes its own restrictions on file names: you can use no more
    than eight characters for the base name (everything to the left of an
    optional period) and no more than three characters for the extension
    (everything to the right of an optional period). Long file names in BASIC
    programs are truncated in the following fashion:

    File Name in Program     Resulting File Name in DOS
    ──────────────────────────────────────────────────────────────────────────
    Prog@Data@File           PROG@DAT.A@F
                            The BASIC name is more than 11 characters long,
                            so BASIC takes the first 8 letters for the base
                            name, inserts a period (.), and uses the next 3
                            letters as the extension. Everything else is
                            discarded.

    Mail#.Version1           MAIL#.VER
                            The base name (Mail#) is shorter than eight
                            characters, but the extension (Version1) is
                            longer than three, so the extension is shortened
                            to three characters.

    RELEASE_NOTES.BAK        Gives the run-time error message Bad file name.
                            The base name must be shorter than eight
                            characters if you are going to include an
                            explicit extension (.BAK in this case).
    ──────────────────────────────────────────────────────────────────────────

    DOS is not case sensitive, so lowercase letters in file names are
    converted to all uppercase (capital) letters. Therefore, you should not
    rely on the mixing of lowercase and uppercase to distinguish between
    files. For example, if you already had a file on the disk named
    INVESTOR.DAT, the following OPEN statement would overwrite that file,
    destroying any information already stored in it:

    OPEN "Investor.Dat" FOR OUTPUT AS #1

3.4.4  Closing a Data File

    Closing a data file has two important results: first, it writes any data
    currently in the file's buffer (a temporary holding area in memory) to the
    file; second, it frees the file number associated with that file for use
    by another OPEN statement.

    Use the CLOSE statement within a program to close a file. For example, if
    the file Price.Dat is opened with the statement

    OPEN "Price.Dat" FOR OUTPUT AS #1

    then the statement CLOSE #1 ends output to Price.Dat. If Price.Dat is
    opened with

    OPEN "Price.Dat" FOR OUTPUT AS #2

    then the appropriate statement for ending output is CLOSE #2. A CLOSE
    statement with no file-number arguments closes all open files.

    A data file is also closed when either of the following occurs:

    ■ The BASIC program performing I/O ends (program termination always closes
    all open data files).

    ■ The program performing I/O transfers control to another program with the
    RUN statement.

3.4.5  Using Sequential Files

    This section discusses how records are organized in sequential data files
    and then shows how to read data from, or write data to, an open sequential
    file.

    3.4.5.1  Records in Sequential Files

    Sequential files are ASCII (text) files. This means you can use any word
    processor to view or modify a sequential file. Records are stored in
    sequential files as a single line of text, terminated by a carriage-return
    and line-feed (CR-LF) sequence. Each record is divided into fields, or
    repeated chunks of data that occur in the same order in every record.
    Figure 3.2 shows how three records might appear in a sequential file.


    ┌──────────────────────────────────────────────────────────────────┐
    │  Record 1                                                        │
    │  ┌─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┐                     │
    │  │"│M│c│G│u│i│r│e│"│,│"│M│a│n│a│g│e│r│"│,│5│                     │
    │  └─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴───┘                     │
    │  └────────┬────────┘ └────────┬────────┘ └┬┘                     │
    │        Field 1             Field 2     Field 3                   │
    │                                                                  │
    │  Record 2                                                        │
    │  ┌─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┐                             │
    │  │"│R│o│s│s│"│,│"│E│d│i│t│o│r│"│,│7│                             │
    │  └─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┘                             │
    │  └─────┬─────┘ └───────┬───────┘ └┬┘                             │
    │     Field 1         Field 2     Field 3                          │
    │                                                                  │
    │  Record 3                                                        │
    │  ┌─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┐           │
    │  │"│S│h│o│s│t│a│k│o│v│i│c│h│"│,│"│W│r│i│t│e│r│"│,│1│2│           │
    │  └─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┘           │
    │  └─────────────┬─────────────┘ └───────┬───────┘ └─┬─┘           │
    │             Field 1                 Field 2     Field 3          │
    └──────────────────────────────────────────────────────────────────┘

    Figure 3.2  Records in Sequential Files

    Note that each record in a sequential file can be a different length;
    moreover, fields can be different lengths in different records.

    The kind of variable in which a field is stored determines where that
    field begins and ends. (See Sections 3.4.5.2-3.4.5.6 for examples of
    reading and storing fields from records.) For example, if your program
    reads a field into a string variable, then any of the following can signal
    the end of that field:

    ■ Double quotes (") if the string begins with double quotes

    ■ Comma (,) if the string does not begin with double quotes

    ■ CR-LF if the field is at the end of the record

    On the other hand, if your program reads a field into a numeric variable,
    then any of the following can signal the end of that field:

    ■ Comma

    ■ One or more spaces

    ■ CR-LF

    3.4.5.2  Putting Data in a New Sequential File

    You can add data to a new sequential file after first opening it to
    receive records with an OPEN filename FOR OUTPUT statement. Use the WRITE
    # statement to write records to the file.

    You can open sequential files for reading or for writing but not for both
    at the same time. If you are writing to a sequential file and want to read
    back the data you stored, you must first close the file, then reopen it
    for input.

    Example

    The following short program creates a sequential file named Price.Dat,
    then adds data entered at the keyboard to the file. The OPEN statement in
    this program both creates the file and readies it to receive records. The
    WRITE # then writes each record to the file. Note that the number used in
    the WRITE # statement is the same number given to the file name Price.Dat
    in the OPEN statement.

    ' Create a file named Price.Dat
    ' and open it to receive new data:

    OPEN "Price.Dat" FOR OUTPUT AS #1

    DO
        ' Continue putting new records in Price.Dat until the
        ' user presses ENTER without entering a company name:
        INPUT "Company (press <ENTER> to quit): ", Company$

        IF Company$ <> "" THEN

        ' Enter the other fields of the record:
        INPUT "Style: ", Style$
        INPUT "Size: ", Size$
        INPUT "Color: ", Clr$
        INPUT "Quantity: ", Qty

        ' Put the new record in the file
        ' with the WRITE # statement:
        WRITE #1, Company$, Style$, Size$, Clr$, Qty
        END IF
    LOOP UNTIL Company$ = ""

    ' Close Price.Dat (this ends output to the file):
    CLOSE #1
    END

    ──────────────────────────────────────────────────────────────────────────
    WARNING
    If, in the preceding example, you already had a file named Price.Dat on
    the disk, the OUTPUT mode given in the OPEN statement would erase the
    existing contents of Price.Dat before writing any new data to it. If you
    want to add new data to the end of an existing file without erasing what
    is already in it, use the APPEND mode of OPEN. See Section 3.4.5.4,
    "Adding Data to a Sequential File," for more information on this mode.
    ──────────────────────────────────────────────────────────────────────────

    3.4.5.3  Reading Data from a Sequential File

    You can read data from a sequential file after first opening it with the
    statement OPEN filename FOR INPUT. Use the INPUT # statement to read
    records from the file one field at a time. (See Section 3.4.5.6, "Other
    Ways to Read Data from a Sequential File," for information on other
    file-input statements and functions you can use with a sequential file.)

    Example

    The following program opens the Price.Dat data file created in the
    previous example and reads the records from the file, displaying the
    complete record on the screen if the quantity for the item is less than
    the input amount.

    The INPUT #1 statement reads one record at a time from Price.Dat,
    assigning the fields in the record to the variables Company$, Style$,
    Size$, Clr$, and Qty. Since this is a sequential file, the records are
    read in order from the first one entered to the last one entered.

    The EOF (end-of-file) function tests whether the last record has been read
    by INPUT #. If the last record has been read, EOF returns the value -1
    (true), and the loop for getting data ends; if the last record has not
    been read, EOF returns the value 0 (false), and the next record is read
    from the file.

    OPEN "Price.Dat" FOR INPUT AS #1

    INPUT "Display all items below what level"; Reorder

    DO UNTIL EOF(1)
        INPUT #1, Company$, Style$, Size$, Clr$, Qty
        IF Qty < Reorder THEN
        PRINT  Company$, Style$, Size$, Clr$, Qty
        END IF
    LOOP
    CLOSE #1
    END

    3.4.5.4  Adding Data to a Sequential File

    As mentioned earlier, if you have a sequential file on disk and want to
    add more data to the end of it, you cannot simply open the file in output
    mode and start writing data. As soon as you open a sequential file in
    output mode, you destroy its current contents. You must use the append
    mode instead, as shown in the next example:

    OPEN "Price.Dat" FOR APPEND AS #1

    In fact, APPEND is always a safe alternative to OUTPUT, since the append
    mode creates a new file if one with the name specified doesn't already
    exist. For example, if a file named Price.Dat did not reside on disk, the
    example statement above would make a new file with that name.

    3.4.5.5  Other Ways to Write Data to a Sequential File

    The preceding examples all use the WRITE # statement to write records to a
    sequential file. There is, however, another statement you can use to write
    sequential file records: PRINT #.

    The best way to show the difference between these two data-storage
    statements is to examine the contents of a file created with both. The
    following short fragment opens a file named Test.Dat then places the same
    record in it twice, once with WRITE # and once with PRINT #. After running
    this program you can examine the contents of Test.Dat with the DOS TYPE
    commands:

    OPEN "Test.Dat" FOR OUTPUT AS #1
    Nm$ = "Penn, Will"
    Dept$ = "User Education"
    Level = 4
    Age = 25
    WRITE #1, Nm$, Dept$, Level, Age
    PRINT #1, Nm$, Dept$, Level, Age
    CLOSE #1

    Output

    "Penn, Will","User Education",4,25
    Penn, Will    User Education               4             25

    The record stored with WRITE # has commas that explicitly separate each
    field of the record, as well as quotes enclosing each string expression.
    On the other hand, PRINT # has written an image of the record to the file
    exactly as it would appear on screen with a simple PRINT statement. The
    commas in the PRINT # statement are interpreted as meaning "advance to the
    next print zone" (a new print zone occurs every 14 spaces, starting at the
    beginning of a line), and quotes are not placed around the string
    expressions.

    At this point, you may be wondering what difference these output
    statements make, except in the appearance of the data within the file. The
    answer lies in what happens when your program reads the data back from the
    file with an INPUT # statement. In the following example, the program
    reads the record stored with WRITE # and prints the values of its fields
    without any problem:

    OPEN "Test.Dat" FOR INPUT AS #1

    ' Input the first record,
    ' and display the contents of each field:
    INPUT #1, Nm$, Dept$, Level, Age
    PRINT Nm$, Dept$, Level, Age

    ' Input the second record,
    ' and display the contents of each field:
    INPUT #1, Nm$, Dept$, Level, Age
    PRINT Nm$, Dept$, Level, Age

    CLOSE #1

    Output

    Penn, Will    User Education               4             25

    However, when the program tries to input the next record stored with PRINT
    #, it produces the error message Input past end of file. Without double
    quotes enclosing the first field, the INPUT # statement sees the comma
    between Penn and Will as a field delimiter, so it assigns only the last
    name Penn to the variable Nm$. INPUT # then reads the rest of the line
    into the variable Dept$. Since all of the record has now been read, there
    is nothing left to put in the variables level and age. The result is the
    error message Input past end of file.

    If you are storing records that have string expressions and you want to
    read these records later with the INPUT # statement, follow one of these
    two rules of thumb:

    1. Use the WRITE # statement to store the records.

    2. If you want to use the PRINT # statement, remember it does not put
        commas in the record to separate fields, nor does it put quotes around
        strings. You have to put these field separators in the PRINT #
        statement yourself.

    For example, you can avoid the problems shown in the preceding example by
    using PRINT # with quotation marks surrounding each field containing a
    string expression, as in the example below.

    Example

    ' 34 is ASCII value for double-quote character:

    Q$ = CHR$(34)

    ' The next four statements all write the record to the
    ' file with double quotes around each string field:

    PRINT #1, Q$ Nm$ Q$ Q$ Dept$ Q$ Level Age
    PRINT #1, Q$ Nm$ Q$;Q$ Dept$ Q$;Level;Age
    PRINT #1, Q$ Nm$ Q$,Q$ Dept$ Q$,Level,Age
    WRITE #1, Nm$, Dept$, Level, Age

    Output to File

    "Penn, Will""User Education" 4  25
    "Penn, Will""User Education" 4  25
    "Penn, Will"  "User Education"      4             25
    "Penn, Will","User Education",4,25

    3.4.5.6  Other Ways to Read Data from a Sequential File

    In the preceding sections, INPUT # is used to read a record (one line of
    data from a file), assigning different fields in the record to the
    variables listed after INPUT #. This section explores alternative ways to
    read data from sequential files, both as records (LINE INPUT #) and as
    unformatted sequences of bytes (INPUT$).

The LINE INPUT # Statement

    With the LINE INPUT # statement, your program can read a line of text
    exactly as it appears in a file without interpreting commas or quotes as
    field delimiters. This is particularly useful in programs that work with
    ASCII text files.

    The LINE INPUT # statement reads an entire line from a sequential file (up
    to a carriage-return and line-feed sequence) into a single string
    variable.

    Examples

    The following short program reads each line from the file Chap1.Txt and
    then echoes that line to the screen:

    ' Open Chap1.Txt for sequential input:
    OPEN "Chap1.Txt" FOR INPUT AS #1

    ' Keep reading lines sequentially from the file until
    ' there are none left in the file:

    DO UNTIL EOF(1)

        ' Read a line from the file and store it
        ' in the variable LineBuffer$:
        LINE INPUT #1, LineBuffer$

        ' Print the line on the screen:
        PRINT LineBuffer$
    LOOP

    The preceding program is easily modified to a file-copying utility that
    prints each line read from the specified input file to another file,
    instead of to the screen:

    ' Input names of input and output files:

    INPUT "File to copy: ", FileName1$
    IF FileName1$ = "" THEN END
    INPUT "Name of new file: ", FileName2$
    IF FileName2$ = "" THEN END

    ' Open first file for sequential input:
    OPEN FileName1$ FOR INPUT AS #1

    ' Open second file for sequential output:
    OPEN FileName2$ FOR OUTPUT AS #2

    ' Keep reading lines sequentially from first file
    ' until there are none left in the file:
    DO UNTIL EOF(1)

        ' Read a line from first file and store it in the
        ' variable LineBuffer$:
        LINE INPUT #1, LineBuffer$

        ' Write LineBuffer$ to the second file:
        PRINT #2, LineBuffer$

    LOOP

The INPUT$ Function

    Yet another way to read data from sequential files (and, in fact, from any
    file) is to use the INPUT$ function. Whereas INPUT # and LINE INPUT # read
    a line at a time from a sequential file, INPUT$ reads a specified number
    of characters from a file, as shown in the following examples:

    Statement                Action
    ──────────────────────────────────────────────────────────────────────────
    X$ = INPUT$(100, #1)     Reads 100 characters from file number 1 and
                            assigns all of them to the string variable X$

    Test$ = INPUT$(1, #2)    Reads one character from file number 2 and
                            assigns it to the string variable Test$

    ──────────────────────────────────────────────────────────────────────────

    The INPUT$ function without a file number always reads input from standard
    input (usually the keyboard).

    The INPUT$ function does what is known as "binary input"; that is, it
    reads a file as an unformatted stream of characters. For example, it does
    not see a carriage-return and line-feed sequence as signaling the end of
    an input operation. Therefore, INPUT$ is the best choice when you want
    your program to read every single character from a file or when you want
    it to read a binary, or non-ASCII, file.

    Example

    The following program copies the named binary file to the screen, printing
    only alphanumeric and punctuation characters in the ASCII range 32 to 126,
    as well as tabs, carriage returns, and line feeds:

    ' 9 is ASCII value for horizontal tab, 10 is ASCII
    value
    ' for line feed, and 13 is ASCII value for carriage return:
    CONST LINEFEED = 10, CARRETURN = 13, TABCHAR = 9

    INPUT "Print which file: ", FileName$
    IF FileName$ = "" THEN END

    OPEN FileName$ FOR INPUT AS #1

    DO UNTIL EOF(1)
        Character$ = INPUT$(1, #1)
        CharVal = ASC(Character$)
        SELECT CASE CharVal
        CASE 32 TO 126
            PRINT Character$;
        CASE TABCHAR, CARRETURN
            PRINT Character$;
        CASE LINEFEED
            IF OldCharVal <> CARRETURN THEN PRINT Character$;
        CASE ELSE
            ' This is not one of the characters this program
            ' is interested in, so don't print anything.
        END SELECT
        OldCharVal = CharVal
    LOOP

3.4.6  Using Random-Access Files

    This section discusses how records are organized in random-access data
    files, then shows you how to read data from and write data to a file
    opened for random access.

    3.4.6.1  Records in Random-Access Files

    Random-access records are stored quite differently from sequential
    records. Each random-access record is defined with a fixed length, as is
    each field within the record. These fixed lengths determine where a record
    or field begins and ends, as there are no commas separating fields, and no
    carriage-return and line-feed sequences between records. Figure 3.3 shows
    how three records might appear in a random-access file.


                    Record 1                               Record 2
    ┌──────────────────┴──────────────────┐┌─────────────────┴─────────────────
    ┌─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬
    │M│c│G│u│i│r│e│ │ │ │M│a│n│a│g│e│r│5│ │R│o│s│s│ │ │ │ │ │ │E│d│i│t│o│r│ │3│
    └─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴
    └─────────┬─────────┘└─────┬──────┘└─┬┘└────────┬─────────┘└─────┬──────┘└─
            Field 1          Field 2   Field 3     Field 1         Field 2   Fie

    Figure 3.3  Records in a Random-Access File

    If you are storing records containing numbers, using random-access files
    saves disk space when compared with using sequential files. This is
    because sequential files save numbers as a sequence of ASCII characters
    representing each digit, whereas random-access files save numbers in a
    compressed binary format.

    For example, the number 17,000 is represented in a sequential file using
    five bytes, one for each digit. However, if 17,000 is stored in an integer
    field of a random-access record, it takes only two bytes of disk space.

    In general, integers in random-access files take two bytes, long integers
    and single-precision numbers take four bytes, and double-precision numbers
    take eight bytes.

    3.4.6.2  Adding Data to a Random-Access File

    To write a program that adds data to a random-access file, follow these
    steps:

    1. Define the fields of each record.

    2. Open the file in random-access mode and specify the length of each
        record.

    3. Get input for a new record and store the record in the file.

    Each of these steps is now considerably easier than it was in BASICA, as
    you can see from the examples that follow.

Defining Fields

    You can define your own record with a TYPE...END TYPE statement, which
    allows you to create a composite data type that mixes string and numeric
    elements. This is a big advantage over the earlier method of setting up
    records with a FIELD statement, which required that each field be defined
    as a string. By defining a record with TYPE...END TYPE, you eliminate the
    need to use the functions that convert numeric data to strings (MKtype$,
    MKSMBF$, and MKDMBF$) and strings to numeric data (CVtype, CVSMBF, and
    CVDMBF).

    The following fragments contrast these two methods of defining records:

    ■ Record defined with TYPE...END TYPE

    ' Define the RecordType structure:
    TYPE RecordType
        Name AS STRING * 30
        Age AS INTEGER
        Salary AS SINGLE
    END TYPE

    ' Declare the variable RecordVar
    ' as having the type RecordType:
    DIM RecordVar AS RecordType

    .
    .
    .

    ■ Record defined with FIELD

    ' Define the lengths of the fields
    ' in the temporary storage buffer:
    FIELD #1,30 AS Name$,2 AS Age$,4 AS Salary$
    .
    .
    .

Opening the File and Specifying Record Length

    Since the length of a random-access record is fixed, you should let your
    program know how long you want each record to be; otherwise, record length
    defaults to 128 bytes.

    To specify record length, use the LEN = clause in the OPEN statement. The
    next two fragments, which continue the contrasting examples started above,
    show how to use LEN =.

    ■ Specifying the record length for a record that is defined with the
    statement TYPE...END TYPE

    .
    .
    .
    ' Open the random-access file and specify the length
    ' of one record as being equal to the length of the
    ' RecordVar variable:
    OPEN "EMPLOYEE.DAT" FOR RANDOM AS #1 LEN = LEN(RecordVar)
    .
    .
    .

    ■ Specifying record length for a record defined with FIELD

    .
    .
    .
    ' Open the random-access file and specify the length
    ' of a record:
    OPEN "EMPLOYEE.DAT" FOR RANDOM AS #1 LEN = 31
    .
    .
    .

    As you can see, when you use FIELD, you have to add the lengths of each
    field yourself (FirstName$ is 10 bytes, LastName$ is 15 bytes, Age$ is 2
    bytes, Salary$ is 4 bytes, so the record is 10+15+2+4 or 31 bytes long).
    With TYPE...END TYPE, you no longer have to do these calculations.
    Instead, just use the LEN function to calculate the length of the variable
    you have created to hold your records (RecordVar, in this case).

Inputting Data and Storing the Record

    You can input data directly into the elements of a user-defined record
    without having to worry about left- or right-justification of input within
    a field with LSET or RSET. Compare the following two fragments, which
    continue the examples started above, to see the amount of code this
    approach saves you.

    ■ Entering data for a random-access record and storing the record using
    TYPE...END TYPE.

    .
    .
    .

    ' Enter the data:
    INPUT "First name"; RecordVar.FirstName
    INPUT "Last name"; RecordVar.LastName
    INPUT "Age"; RecordVar.Age
    INPUT "Salary"; RecordVar.Salary
    ' Store the record:
    PUT #1, , RecordVar

    .
    .
    .

    ■ Entering data for a random-access record and storing the record using
    FIELD

    .
    .
    .

    ' Enter the data:
    INPUT "First name"; FirstNm$
    INPUT "Last name"; LastNm$
    INPUT "Age"; AgeVal%
    INPUT "Salary"; SalaryVal!

    ' Left justify the data in the storage-buffer fields,
    ' using the MKI$ and MKS$ functions to convert numbers
    ' to file strings:
    LSET FirstName$ = FirstNm$
    LSET LastName$ = LastNm$
    LSET Age$ = MKI$(AgeVal%)
    LSET Salary$ = MKS$(SalaryVal!)

    ' Store the record:
    PUT #1

    .
    .
    .

Putting It All Together

    The following program puts together all the steps outlined above──defining
    fields, specifying record length, inputting data, and storing the input
    data──to open a random-access data file named STOCK.DAT and add records to
    it:

    DEFINT A-Z

    ' Define structure of a single record in the random-access
    ' file. Each record will consist of four fixed-length fields
    ' ("PartNumber", "Description", "UnitPrice", "Quantity"):
    TYPE StockItem
        PartNumber AS STRING *  6
        Description AS STRING * 20
        UnitPrice AS SINGLE
        Quantity AS INTEGER
    END TYPE

    ' Declare a variable (StockRecord) using the above type:
    DIM StockRecord AS StockItem

    ' Open the random-access file, specifying the length of one
    ' record as the length of the StockRecord variable:
    OPEN "STOCK.DAT" FOR RANDOM AS #1 LEN=LEN(StockRecord)

    ' Use LOF() to calculate the number of records already in
    ' the file, so new records will be added after them:
    RecordNumber = LOF(1) \ LEN(StockRecord)

    ' Now, add new records:
    DO

        ' Input data for a stock record from keyboard and store
        ' in the different elements of the StockRecord variable:
        INPUT "Part Number? ", StockRecord.PartNumber
        INPUT "Description? ", StockRecord.Description
        INPUT "Unit Price ? ", StockRecord.UnitPrice
        INPUT "Quantity   ? ", StockRecord.Quantity

        RecordNumber = RecordNumber + 1

        ' Write data in StockRecord to a new record in the file:
        PUT #1, RecordNumber, StockRecord



        ' Check to see if more data are to be read:
        INPUT "More (Y/N)? ", Resp$
    LOOP UNTIL UCASE$(Resp$) = "N"

    ' All done; close the file and end:
    CLOSE  #1
    END

    If the STOCK.DAT file already existed, this program would add more records
    to the file without overwriting any that were already in the file. The
    following key statement makes this work:

    RecordNumber = LOF(1) \ LEN(StockRecord)

    Here is what happens:

    1. The LOF(1) function calculates the total number of bytes in the file
        STOCK.DAT. If STOCK.DAT is new or has no records in it, LOF(1) returns
        the value 0.

    2. The LEN(StockRecord) function calculates the number of bytes in one
        record. (StockRecord is defined as having the same structure as the
        user-defined type StockItem.)

    3. Therefore, the number of records is equal to the total bytes in the
        file divided by the bytes in one record.

    This is another advantage of having a fixed-length record. Since each
    record is the same size, you can always use the above formula to calculate
    the number of records in the file. Obviously, this would not work with a
    sequential file, since sequential records can have different lengths.

    3.4.6.7  Reading Data Sequentially

    Using the technique outlined in the preceding section for calculating the
    number of records in a random-access file, you can write a program that
    reads all the records in that file.

    Example

    The following program reads records sequentially (from the first record
    stored to the last) from the STOCK.DAT file created in the previous
    section:

    ' Define a record structure (type) for random-access
    ' file records:
    TYPE StockItem
        PartNumber AS STRING *  6
        Description AS STRING * 20
        UnitPrice AS SINGLE
        Quantity AS INTEGER
    END TYPE

    ' Declare a variable (StockRecord) using the above type:
    DIM StockRecord AS StockItem

    ' Open the random-access file:
    OPEN "STOCK.DAT" FOR RANDOM AS #1 LEN = LEN(StockRecord)

    ' Calculate number of records in the file:
    NumberOfRecords = LOF(1) \ LEN(StockRecord)

    ' Read the records and write the data to the screen:
    FOR RecordNumber = 1 TO NumberOfRecords

        ' Read the data from a new record in the file:
        GET #1, RecordNumber, StockRecord



        ' Print the data to the screen:
        PRINT "Part Number: ", StockRecord.PartNumber
        PRINT "Description: ", StockRecord.Description
        PRINT "Unit Price : ", StockRecord.UnitPrice
        PRINT "Quantity   : ", StockRecord.Quantity

    NEXT

    ' All done; close the file and end:
    CLOSE #1
    END

    It is not necessary to close STOCK.DAT before reading from it. Opening a
    file for random access lets you write to or read from the file with a
    single OPEN statement.

    3.4.6.8  Using Record Numbers to Retrieve Records

    You can read any record from a random-access file by specifying the
    record's number in a GET statement. You can write to any record in a
    random-access file by specifying the record's number in a PUT statement.
    This is one of the major advantages that random-access files have over
    sequential files, since sequential files do not permit direct access to a
    specific record.

    The sample-application program INDEX.BAS, listed in Section 3.6.2, shows
    a technique that quickly finds a particular record by searching an index
    of record numbers.

    Example

    The following fragment shows how to use GET with a record number:

    DEFINT A-Z           ' Default variable type is integer.
    CONST FALSE = 0, TRUE = NOT FALSE

    TYPE StockItem
        PartNumber AS STRING *  6
        Description AS STRING * 20
        UnitPrice AS SINGLE
        Quantity AS INTEGER
    END TYPE

    DIM StockRecord AS StockItem

    OPEN "STOCK.DAT" FOR RANDOM AS #1 LEN=LEN(StockRecord)

    NumberOfRecords = LOF(1) \ LEN(StockRecord)
    GetMoreRecords = TRUE

    DO
        PRINT "Enter record number for part you want to see ";
        PRINT "(0 to end): ";
        INPUT "", RecordNumber

        IF RecordNumber > 0 AND RecordNumber < NumberOfRecords THEN

        ' Get the record whose number was entered and store
        ' it in StockRecord:
        GET #1, RecordNumber, StockRecord

        ' Display the record:
        .
        .
        .
        ELSEIF RecordNumber = 0 THEN
        GetMoreRecords = FALSE
        ELSE
        PRINT "Input value out of range."
        END IF
    LOOP WHILE GetMoreRecords
    END

3.4.7  Binary File I/O

    Binary access is a third way──in addition to random access and sequential
    access──to read or write a file's data. Use the following statement to
    open a file for binary I/O:

    OPEN file FOR BINARY AS #filenum

    Binary access is a way to get at the raw bytes of any file, not just an
    ASCII file. This makes it very useful for reading or modifying files saved
    in a non-ASCII format, such as Microsoft Word files or executable (.EXE)
    files.

    Files opened for binary access are treated as an unformatted sequence of
    bytes. Although you can read or write a record (a variable declared as
    having a user-defined type) to a file opened in the binary mode, the file
    itself does not have to be organized into fixed-length records. In fact,
    binary I/O does not have to deal with records at all, unless you consider
    each byte in a file as a separate record.

    3.4.7.1  Comparing Binary Access and Random Access

    The binary-access mode is similar to the random-access mode in that you
    can both read from and write to a file after a single OPEN statement.
    (Binary thus differs from sequential access, where you must first close a
    file and then reopen it if you want to switch between reading and
    writing.) Also, like random access, binary access lets you move backwards
    and forwards within an open file. Binary access even supports the same
    statements used for reading and writing random-access files:

    {GET| PUT} [[#]]filenumber, [[position]], variable

    Here, variable can have any type, including a variable-length string or a
    user-defined type, and position points to the place in the file where the
    next GET or PUT operation will take place. (The position is relative to
    the beginning of the file; that is, the first byte in the file has
    position one, the second byte has position two, and so on.) If you leave
    off the position argument, successive GET and PUT operations move the file
    pointer sequentially through the file from the first byte to the last.

    The GET statement reads a number of bytes from the file equal to the
    length of variable. Similarly, the PUT statement writes a number of bytes
    to the file equal to the length of variable. For example, if variable has
    integer type, then GET reads two bytes into variable; if variable has
    single-precision type, GET reads four bytes. Therefore, if you don't
    specify a position argument in a GET or PUT statement, the file pointer is
    moved a distance equal to the length of variable.

    The GET statement and INPUT$ function are the only ways to read data from
    a file opened in binary mode. The PUT statement is the only way to write
    data to a file opened in binary mode.

    Binary access, unlike random access, enables you to move to any byte
    position in a file and then read or write any number of bytes you want. In
    contrast, random access can only move to a record boundary and read a
    fixed number of bytes (the length of a record) each time.

    3.4.7.2  Positioning the File Pointer with SEEK

    If you want to move the file pointer to a certain place in a file without
    actually performing any I/O, use the SEEK statement. Its syntax is

    SEEK filenumber, position

    After a SEEK statement, the next read or write operation in the file
    opened with filenumber begins at the byte noted in position.

    The counterpart to the SEEK statement is the SEEK function, with this
    syntax:

    SEEK(filenumber)

    The SEEK function tells you the byte position where the very next read or
    write operation begins. (If you are using binary I/O to access a file, the
    LOC and SEEK functions give similar results, but LOC returns the position
    of the last byte read or written, while SEEK returns the position of the
    next byte to be read or written.)

    The SEEK statement and function also work on files opened for sequential
    or random access. With sequential access, both the statement and the
    function behave the same as they do with binary access; that is, the SEEK
    statement moves the file pointer to specific byte positions, and the SEEK
    function returns information about the next byte to read or write.

    However, if a file is opened for random access, the SEEK statement can
    move the file pointer only to the beginning of a record, not to a byte
    within a record. Also, when used with random-access files, the SEEK
    function returns the number of the next record rather than the position of
    the next byte.

    Example

    The following program opens a QuickBASIC Quick library, then reads and
    prints the names of BASIC procedures and other external symbols contained
    in the library. This program is in the file named QLBDUMP.BAS on the
    QuickBASIC distribution disks.

    ' This program prints the names of Quick library procedures.
    DECLARE SUB DumpSym (SymStart AS INTEGER, QHdrPos AS LONG)

    TYPE ExeHdr                     ' Part of DOS .EXE header
        other1    AS STRING * 8     ' Other header information
        CParHdr   AS INTEGER        ' Size of header in paragraphs
        other2    AS STRING * 10    ' Other header information
        IP          AS INTEGER      ' Initial IP value
        CS          AS INTEGER      ' Initial (relative) CS value
    END TYPE

    TYPE QBHdr                      ' QLB header
        QBHead    AS STRING * 6     ' QB specific heading
        Magic     AS INTEGER        ' Magic word: identifies file as a Quick li
        SymStart  AS INTEGER        ' Offset from header to first code symbol
        DatStart  AS INTEGER        ' Offset from header to first data symbol
    END TYPE

    TYPE QbSym                      ' QuickLib symbol entry
        Flags     AS INTEGER        ' Symbol flags
        NameStart AS INTEGER        ' Offset into name table
        other     AS STRING * 4     ' Other header information
    END TYPE

    DIM EHdr AS ExeHdr, Qhdr AS QBHdr, QHdrPos AS LONG

    INPUT "Enter Quick library file name: ", FileName$
    FileName$ = UCASE$(FileName$)
    IF INSTR(FileName$,".QLB") = 0 THEN FileName$ = FileName$ + ".QLB"
    INPUT "Enter output file name or press ENTER for screen: ", OutFile$
    OutFile$ = UCASE$(OutFile$)
    IF OutFile$ = "" THEN OutFile$ = "CON"
    OPEN FileName$ FOR BINARY AS #1
    OPEN OutFile$ FOR OUTPUT AS #2

    GET #1, , EHdr                    ' Read the EXE format header.
    QHdrPos = (EHdr.CParHdr + EHdr.CS) * 16 + EHdr.IP + 1

    GET #1, QHdrPos, Qhdr             ' Read the QuickLib format header.
    IF Qhdr.Magic <> &H6C75 THEN PRINT "Not a QB UserLibrary": END

    PRINT #2, "Code Symbols:": PRINT #2,
    DumpSym Qhdr.SymStart, QHdrPos    ' dump code symbols
    PRINT #2,
    PRINT #2, "Data Symbols:": PRINT #2, ""
    DumpSym Qhdr.DatStart, QHdrPos    ' dump data symbols
    PRINT #2,

    END

    SUB DumpSym (SymStart AS INTEGER, QHdrPos AS LONG)
        DIM QlbSym AS QbSym
        DIM NextSym AS LONG, CurrentSym AS LONG

        ' Calculate the location of the first symbol entry,
        ' then read that entry:
        NextSym = QHdrPos + Qhdr.SymStart
        GET #1, NextSym, QlbSym

    DO
        NextSym = SEEK(1)           ' Save the location of the next symbol.
        CurrentSym = QHdrPos + QlbSym.NameStart
        SEEK #1, CurrentSym         ' Use SEEK to move to the name
                                    ' for the current symbol entry.
        Prospect$ = INPUT$(40, 1)   ' Read the longest legal string,
                                    ' plus one additional byte for
                                    ' the final null character (CHR$(0)).

        ' Extract the null-terminated name:
        SName$ = LEFT$(Prospect$, INSTR(Prospect$, CHR$(0)))

        ' Print only those names that do not begin with "__", "$", or "b$"
        ' as these names are usually considered reserved:
        T$ = LEFT$(SName$, 2)
        IF T$ <> "__" AND LEFT$(SName$, 1) <> "$" AND UCASE$(T$) <> "B$" THEN
            PRINT #2, "  " + SName$
        END IF

        GET #1, NextSym, QlbSym     ' Read a symbol entry.
        LOOP WHILE QlbSym.Flags        ' Flags=0 (false) means end of table.

    END SUB


3.5  Working with Devices

    Microsoft BASIC supports device I/O. This means certain computer
    peripherals can be opened for I/O just like data files on disk. Input from
    or output to these devices can be done with the statements and functions
    listed in Table 9.4, "Statements and Functions Used for Data-File I/O,"
    with the exceptions noted in Section 3.5.1, "Differences between Device
    I/O and File I/O." Table 3.1 lists the devices supported by BASIC.

    Table 3.1  Devices Supported by BASIC for I/O
    Name                     Device                  I/O Mode Supported
    ──────────────────────────────────────────────────────────────────────────
    COM1:                    First serial port       Input and output

    COM2:                    Second serial port      Input and output

    CONS:                    Screen                  Output only

    KYBD:                    Keyboard                Input only

    LPT1:                    First printer           Output only

    LPT2:                    Second printer          Output only

    LPT3:                    Third printer           Output only

    SCRN:                    Screen                  Output only

    ──────────────────────────────────────────────────────────────────────────

3.5.1  Differences between Device I/O and File I/O

    Certain functions and statements used for file I/O are not allowed for
    device I/O, while other statements and functions behave differently. These
    are some of the differences:

    ■ The CONS:, SCRN:, and LPTn: devices cannot be opened in the input or
    append modes.

    ■ The KYBD: device cannot be opened in the output or append modes.

    ■ The EOF, LOC, and LOF functions cannot be used with the CONS:, KYBD:,
    LPTn:, or SCRN: devices.

    ■ The EOF, LOC, and LOF functions can be used with the COMn: serial
    device; however, the values these functions return have a different
    meaning than the values they return when used with data files. (See
    Section 3.5.2 for an explanation of what these functions do when used
    with COMn:.)

    Example

    The following program shows how the devices LPT1: or SCRN: can be opened
    for output using the same syntax as that for data files. This program
    reads all the lines from the file chosen by the user and then prints the
    lines on the screen or the printer according to the user's choice.

    CLS
    ' Input the name of the file to look at:
    INPUT "Name of file to display: ", FileNam$

    ' If no name is entered, end the program;
    ' otherwise, open the given file for reading (INPUT):
    IF FileNam$ = "" THEN END ELSE OPEN FileNam$ FOR INPUT AS #1

    ' Input choice for displaying file (Screen or Printer);
    ' continue prompting for input until either the "S" or "P"
    ' keys are pressed:
    DO
        ' Go to row 2, column 1 on the screen and print prompt:
        LOCATE 2, 1, 1
        PRINT "Send output to screen (S), or to printer (P): ";

        ' Print over anything after the prompt:
        PRINT SPACE$(2);

        ' Relocate cursor after the prompt, and make it visible:
        LOCATE 2, 47, 1
        Choice$ = UCASE$(INPUT$(1))     ' Get input.
        PRINT Choice$
    LOOP WHILE Choice$ <> "S" AND Choice$ <> "P"

    ' Depending on the key pressed, open either the printer
    ' or the screen for output:
    SELECT CASE Choice$
        CASE "P"
        OPEN "LPT1:" FOR OUTPUT AS #2
        PRINT "Printing file on printer."
        CASE "S"
        CLS
        OPEN "SCRN:" FOR OUTPUT AS #2
    END SELECT

    ' Set the width of the chosen output device to 80 columns:
    WIDTH #2, 80

    ' As long as there are lines in the file, read a line
    ' from the file and print it on the chosen device:
    DO UNTIL EOF(1)
        LINE INPUT #1, LineBuffer$
        PRINT #2, LineBuffer$
    LOOP

    CLOSE        ' End input from the file and output to the device.
    END

3.5.2  Communications through the Serial Port

    The OPEN "COMn:" statement (where n can be 1 or, if you have two serial
    ports, 2) allows you to open your computer's serial port(s) for serial
    (bit-by-bit) communication with other computers or with peripheral devices
    such as modems or serial printers. The following are some of the
    parameters you can specify:

    ■ Rate of data transmission, measured in "baud" (bits per second)

    ■ Whether or not to detect transmission errors and how those errors will
    be detected

    ■ How many stop bits (1, 1.5, or 2) are to be used to signal the end of a
    transmitted byte

    ■ How many bits in each byte of data transmitted or received constitute
    actual data

    When the serial port is opened for communication, an input buffer is set
    aside to hold the bytes being read from other device. This is because, at
    high baud rates, characters arrive faster than they can be processed. The
    default size for this buffer is 512 bytes, and it can be modified with the
    LEN = numbytes option of the OPEN "COMn:" statement. The values returned
    by the EOF, LOC, and LOF functions when used with a communications device
    return information about the size of this buffer, as shown in the
    following list:

    Function                 Information Returned
    ──────────────────────────────────────────────────────────────────────────
    EOF                      Whether or not any characters are waiting to be
                            read from the input buffer

    LOC                      The number of characters waiting in the input
                            buffer

    LOF                      The amount of space remaining (in bytes) in the
                            output buffer

    ──────────────────────────────────────────────────────────────────────────

    Since every character is potentially significant data, both INPUT # and
    LINE INPUT # have serious drawbacks for getting input from another device.
    This is because INPUT # stops reading data into a variable when it
    encounters a comma or new line (and, sometimes, a space or double quote),
    and LINE INPUT # stops reading data when it encounters a new line. This
    makes INPUT$ the best function to use for input from a communications
    device, since it reads all characters.

    The following line uses the LOC function to check the input buffer for the
    number of characters waiting there from the communications device opened
    as file #1; it then uses the INPUT$ function to read those characters,
    assigning them to a string variable named ModemInput$:

    ModemInput$ = INPUT$(LOC(1), #1)


3.6  Sample Applications

    The sample applications listed in this section include a screen-handling
    program that prints a calendar for any month in any year from 1899 to
    2099, a file I/O program that builds and searches an index of record
    numbers from a random-access file, and a communications program that makes
    your PC behave like a terminal when connected to a modem.

3.6.1  Perpetual Calendar (CAL.BAS)

    After prompting the user to input a month from 1 to 12 and a year from
    1899 to 2099, the following program prints the calendar for the given
    month and year. The IsLeapYear procedure makes appropriate adjustments to
    the calendar for months in a leap year.

    Statements and Functions Used

    This program demonstrates the following screen-handling functions and
    statements discussed in Sections 3.1-3.3:

    ■ INPUT

    ■ INPUT$

    ■ LOCATE

    ■ POS(0)

    ■ PRINT

    ■ PRINT USING

    ■ TAB

    Program Listing

    The perpetual calendar program CAL.BAS is listed below.

    DEFINT A-Z              ' Default variable type is integer.

    ' Define a data type for the names of the months and the
    ' number of days in each:
    TYPE MonthType
        Number AS INTEGER       ' Number of days in the month
        MName AS STRING * 9     ' Name of the month
    END TYPE

    ' Declare procedures used:
    DECLARE FUNCTION IsLeapYear% (N%)
    DECLARE FUNCTION GetInput% (Prompt$, Row%, LowVal%, HighVal%)

    DECLARE SUB PrintCalendar (Year%, Month%)
    DECLARE SUB ComputeMonth (Year%, Month%, StartDay%, TotalDays%)

    DIM MonthData(1 TO 12) AS MonthType

    ' Initialize month definitions from DATA statements below:
    FOR I = 1 TO 12
        READ MonthData(I).MName, MonthData(I).Number
    NEXT

    ' Main loop, repeat for as many months as desired:
    DO
        CLS

        ' Get year and month as input:
        Year = GetInput("Year (1899 to 2099): ", 1, 1899, 2099)
        Month = GetInput("Month (1 to 12): ", 2, 1, 12)

        ' Print the calendar:
        PrintCalendar Year, Month
    ' Another Date?
        LOCATE 13, 1           ' Locate in 13th row, 1st column.
        PRINT "New Date? ";    ' Keep cursor on same line.
        LOCATE , , 1, 0, 13    ' Turn cursor on and make it one
                            ' character high.
        Resp$ = INPUT$(1)      ' Wait for a key press.
        PRINT Resp$            ' Print the key pressed.

    LOOP WHILE UCASE$(Resp$) = "Y"
    END

    ' Data for the months of a year:
    DATA January, 31, February, 28, March, 31
    DATA April, 30, May, 31, June, 30, July, 31, August, 31
    DATA September, 30, October, 31, November, 30, December, 31

    ' ====================== COMPUTEMONTH =====================
    '  Computes the first day and the total days in a month
    ' =========================================================

    SUB ComputeMonth (Year, Month, StartDay, TotalDays) STATIC
        SHARED MonthData() AS MonthType

        CONST LEAP   = 366 MOD 7
        CONST NORMAL = 365 MOD 7

        ' Calculate total number of days (NumDays) since 1/1/1899:

        ' Start with whole years:
        NumDays = 0
        FOR I = 1899 TO Year - 1
        IF IsLeapYear(I) THEN         ' If leap year,
            NumDays = NumDays + LEAP   ' add 366 MOD 7.
        ELSE                          ' If normal year,
            NumDays = NumDays + NORMAL ' add 365 MOD 7.
        END IF
        NEXT

        ' Next, add in days from whole months:
        FOR I = 1 TO Month - 1
        NumDays = NumDays + MonthData(I).Number
        NEXT

        ' Set the number of days in the requested month:
        TotalDays = MonthData(Month).Number

        ' Compensate if requested year is a leap year:
        IF IsLeapYear(Year) THEN

        ' If after February, add one to total days:
        IF Month > 2 THEN
            NumDays = NumDays + 1

        ' If February, add one to the month's days:
        ELSEIF Month = 2 THEN
            TotalDays = TotalDays + 1
        END IF
        END IF

        ' 1/1/1899 was a Sunday, so calculating "NumDays MOD 7"
        ' gives the day of week (Sunday = 0, Monday = 1, Tuesday
        ' = 2, and so on) for the first day of the input month:
        StartDay = NumDays MOD 7
    END SUB

    ' ======================== GETINPUT =======================
    '    Prompts for input, then tests for a valid range
    ' =========================================================

    FUNCTION GetInput (Prompt$, Row, LowVal, HighVal) STATIC

        ' Locate prompt at specified row, turn cursor on and
        ' make it one character high:
        LOCATE Row, 1, 1, 0, 13
        PRINT Prompt$;

        ' Save column position:
        Column = POS(0)

        ' Input value until it's within range:
        DO
        LOCATE Row, Column   ' Locate cursor at end of prompt.
        PRINT SPACE$(10)     ' Erase anything already there.
        LOCATE Row, Column   ' Relocate cursor at end of prompt.
        INPUT "", Value      ' Input value with no prompt.
        LOOP WHILE (Value < LowVal OR Value > HighVal

        ' Return valid input as value of function:
        GetInput = Value

    END FUNCTION

    ' ====================== ISLEAPYEAR =======================
    '   Determines if a year is a leap year or not
    ' =========================================================

    FUNCTION IsLeapYear (N) STATIC

        ' If the year is evenly divisible by 4 and not divisible
        ' by 100, or if the year is evenly divisible by 400,
        ' then it's a leap year:
        IsLeapYear = (N MOD 4=0 AND N MOD 100<>0) OR (N MOD 400=0)
    END FUNCTION

    ' ===================== PRINTCALENDAR =====================
    '   Prints a formatted calendar given the year and month
    ' =========================================================

    SUB PrintCalendar (Year, Month) STATIC
    SHARED MonthData() AS MonthType

        ' Compute starting day (Su M Tu ...)
        ' and total days for the month:
        ComputeMonth Year, Month, StartDay, TotalDays
        CLS
        Header$ = RTRIM$(MonthData(Month).MName) + "," + STR$(Year)

        ' Calculate location for centering month and year:
        LeftMargin = (35 - LEN(Header$)) \ 2

    ' Print header:
        PRINT TAB(LeftMargin); Header$
        PRINT
        PRINT "Su   M   Tu   W   Th    F   Sa"
        PRINT

        ' Recalculate and print tab
        ' to the first day of the month (Su M Tu ...):
        LeftMargin = 5 * StartDay + 1
        PRINT TAB(LeftMargin);

        ' Print out the days of the month:
        FOR I = 1 TO TotalDays
        PRINT USING "##"; I;

        ' Advance to the next line
        ' when the cursor is past column 32:
        IF POS(0) > 32 THEN PRINT
        NEXT

    END SUB

    Output

    ┌───────────────────────────────────────────────────────────────────┐
    │                                                                   │
    │                June, 1988                                         │
    │                                                                   │
    │     Su    M    Tu    W   Th     F    Sa                           │
    │                                                                   │
    │                      1    2     3     4                           │
    │      5    6     7    8    9    10    11                           │
    │     12   13    14   15   16    17    18                           │
    │     19   20    21   22   23    24    25                           │
    │     26   27    28   29   30                                       │
    │                                                                   │
    │                                                                   │
    │     New Date?                                                     │
    │                                                                   │
    └───────────────────────────────────────────────────────────────────┘

3.6.2  Indexing a Random-Access File (INDEX.BAS)

    The following program uses an indexing technique to store and retrieve
    records in a random-access file. Each element of the Index array has two
    parts: a string field (PartNumber) and an integer field (RecordNumber).
    This array is sorted alphabetically on the PartNumber field, which allows
    the array to be rapidly searched for a specific part number using a binary
    search.

    The Index array functions much like the index to a book. When you want to
    find the pages in a book that deal with a particular topic, you look up an
    entry for that topic in the index. The entry then points to a page number
    in the book. Similarly, this program looks up a part number in the
    alphabetically sorted Index array. Once it finds the part number, the
    associated record number in the RecordNumber field points to the record
    containing all the information for that part.

    Statements and Functions Used

    This program demonstrates the following functions and statements used in
    accessing random-access files:

    ■ TYPE...END TYPE

    ■ OPEN...FOR RANDOM

    ■ GET #

    ■ PUT #

    ■ LOF

    Program Listing

    The random-access file indexing program INDEX.BAS is listed below.

    DEFINT A-Z

    ' Define the symbolic constants used globally in the program:
    CONST FALSE = 0, TRUE = NOT FALSE

    ' Define a record structure for random-file records:
    TYPE StockItem
        PartNumber AS STRING * 6
        Description AS STRING * 20
        UnitPrice AS SINGLE
        Quantity AS INTEGER
    END TYPE

    ' Define a record structure for each element of the index:
    TYPE IndexType
        RecordNumber AS INTEGER
        PartNumber AS STRING * 6
    END TYPE

    ' Declare procedures that will be called:
    DECLARE FUNCTION Filter$ (Prompt$)
    DECLARE FUNCTION FindRecord% (PartNumber$, RecordVar AS StockItem)

    DECLARE SUB AddRecord (RecordVar AS StockItem)
    DECLARE SUB InputRecord (RecordVar AS StockItem)
    DECLARE SUB PrintRecord (RecordVar AS StockItem)
    DECLARE SUB SortIndex ()
    DECLARE SUB ShowPartNumbers ()
    ' Define a buffer (using the StockItem type)
    ' and define and dimension the index array:
    DIM StockRecord AS StockItem, Index(1 TO 100) AS IndexType

    ' Open the random-access file:
    OPEN "STOCK.DAT" FOR RANDOM AS #1 LEN = LEN(StockRecord)

    ' Calculate number of records in the file:
    NumberOfRecords = LOF(1) \ LEN(StockRecord)

    ' If there are records, read them and build the index:
    IF NumberOfRecords <> 0 THEN
        FOR RecordNumber = 1 TO NumberOfRecords

        ' Read the data from a new record in the file:
        GET #1, RecordNumber, StockRecord

        ' Place part number and record number in index:
        Index(RecordNumber).RecordNumber = RecordNumber
        Index(RecordNumber).PartNumber = StockRecord.PartNumber
        NEXT

        SortIndex            ' Sort index in part-number order.
    END IF

    DO                      ' Main-menu loop.
        CLS
        PRINT "(A)dd records."
        PRINT "(L)ook up records."
        PRINT "(Q)uit program."
        PRINT
        LOCATE , , 1
        PRINT "Type your choice (A, L, or Q) here: ";

        ' Loop until user presses, A, L, or Q:
        DO
        Choice$ = UCASE$(INPUT$(1))
        LOOP WHILE INSTR("ALQ", Choice$) = 0

        ' Branch according to choice:
        SELECT CASE Choice$
        CASE "A"
        AddRecord StockRecord
        CASE "L"
        IF NumberOfRecords = 0 THEN
            PRINT : PRINT "No records in file yet. ";
            PRINT "Press any key to continue.";
            Pause$ = INPUT$(1)
        ELSE
            InputRecord StockRecord
        END IF
        CASE "Q"          ' End program.
        END SELECT
    LOOP UNTIL Choice$ = "Q"

    CLOSE #1                ' All done, close file and end.
    END

    ' ======================== ADDRECORD ======================
    ' Adds records to the file from input typed at the keyboard
    ' =========================================================

    SUB AddRecord (RecordVar AS StockItem) STATIC
        SHARED Index() AS IndexType, NumberOfRecords
        DO
        CLS
        INPUT "Part Number: ", RecordVar.PartNumber
        INPUT "Description: ", RecordVar.Description

        ' Call the Filter$ FUNCTION to input price & quantity:
        RecordVar.UnitPrice = VAL(Filter$("Unit Price : "))
        RecordVar.Quantity = VAL(Filter$("Quantity   : "))

        NumberOfRecords = NumberOfRecords + 1

        PUT #1, NumberOfRecords, RecordVar

        Index(NumberOfRecords).RecordNumber = NumberOfRecords
        Index(NumberOfRecords).PartNumber = RecordVar.PartNumber
        PRINT : PRINT "Add another? ";
        OK$ = UCASE$(INPUT$(1))
        LOOP WHILE OK$ = "Y"

        SortIndex            ' Sort index file again.
    END SUB

    ' ========================= FILTER ========================
    '       Filters all non-numeric characters from a string
    '       and returns the filtered string
    ' =========================================================

    FUNCTION Filter$ (Prompt$) STATIC
        ValTemp2$ = ""
        PRINT Prompt$;                    ' Print the prompt passed.
        INPUT "", ValTemp1$               ' Input a number as
                                        ' a string.
        StringLength = LEN(ValTemp1$)     ' Get the string's length.
        FOR I% = 1 TO StringLength        ' Go through the string,
        Char$ = MID$(ValTemp1$, I%, 1) ' one character at a time.

        ' Is the character a valid part of a number (i.e.,
        ' a digit or a decimal point)?  If yes, add it to
        ' the end of a new string:
        IF INSTR(".0123456789", Char$) > 0 THEN
            ValTemp2$ = ValTemp2$ + Char$

        ' Otherwise, check to see if it's a lowercase "l",
        ' since typewriter users may enter a one that way:
        ELSEIF Char$ = "l" THEN
            ValTemp2$ = ValTemp2$ + "1" ' Change the "l" to a "1".
        END IF
        NEXT I%

        Filter$ = ValTemp2$               ' Return filtered string.

    END FUNCTION

    ' ======================= FINDRECORD ===================
    '  Uses a binary search to locate a record in the index
    ' ======================================================

    FUNCTION FindRecord% (Part$, RecordVar AS StockItem) STATIC
        SHARED Index() AS IndexType, NumberOfRecords

        ' Set top and bottom bounds of search:
        TopRecord = NumberOfRecords
        BottomRecord = 1

        ' Search until top of range is less than bottom:
        DO UNTIL (TopRecord < BottomRecord)

        ' Choose midpoint:
        Midpoint = (TopRecord + BottomRecord) \ 2

        ' Test to see if it's the one wanted (RTRIM$()
        ' trims trailing blanks from a fixed string):
        Test$ = RTRIM$(Index(Midpoint).PartNumber)

        ' If it is, exit loop:
        IF Test$ = Part$ THEN
        EXIT DO

        ' Otherwise, if what we're looking for is greater,
        ' move bottom up:
        ELSEIF Part$ > Test$ THEN
        BottomRecord = Midpoint + 1

        ' Otherwise, move the top down:
        ELSE
        TopRecord = Midpoint - 1
        END IF
        LOOP

        ' If part was found, input record from file using
        ' pointer in index and set FindRecord% to TRUE:
        IF Test$ = Part$ THEN
        GET #1, Index(Midpoint).RecordNumber, RecordVar
        FindRecord% = TRUE

        ' Otherwise, if part was not found, set FindRecord%
        ' to FALSE:
        ELSE
        FindRecord% = FALSE
        END IF
    END FUNCTION

    ' ======================= INPUTRECORD =====================
    '    First, INPUTRECORD calls SHOWPARTNUMBERS, which prints
    '    a menu of part numbers on the top of the screen. Next,
    '    INPUTRECORD prompts the user to enter a part number.
    '    Finally, it calls the FINDRECORD and PRINTRECORD
    '    procedures to find and print the given record.
    ' =========================================================

    SUB InputRecord (RecordVar AS StockItem) STATIC
        CLS
        ShowPartNumbers      ' Call the ShowPartNumbers SUB.

        ' Print data from specified records
        ' on the bottom part of the screen:
        DO
        PRINT "Type a part number listed above ";
        INPUT "(or Q to quit) and press <ENTER>: ", Part$
        IF UCASE$(Part$) <> "Q" THEN
            IF FindRecord(Part$, RecordVar) THEN
                PrintRecord RecordVar
            ELSE
                PRINT "Part not found."
            END IF
        END IF
        PRINT STRING$(40, "_")
        LOOP WHILE UCASE$(Part$) <> "Q"

        VIEW PRINT   ' Restore the text viewport to entire screen.
    END SUB

    ' ======================= PRINTRECORD =====================
    '                Prints a record on the screen
    ' =========================================================

    SUB PrintRecord (RecordVar AS StockItem) STATIC
        PRINT "Part Number: "; RecordVar.PartNumber
        PRINT "Description: "; RecordVar.Description
        PRINT USING "Unit Price :$$###.##"; RecordVar.UnitPrice
        PRINT "Quantity   :"; RecordVar.Quantity
    END SUB

    ' ===================== SHOWPARTNUMBERS ===================
    ' Prints an index of all the part numbers in the upper part
    ' of the screen
    ' =========================================================

    SUB ShowPartNumbers STATIC
        SHARED Index() AS IndexType, NumberOfRecords

        CONST NUMCOLS = 8, COLWIDTH = 80 \ NUMCOLS

        ' At the top of the screen, print a menu indexing all
        ' the part numbers for records in the file. This menu is
        ' printed in columns of equal length (except possibly the
        ' last column, which may be shorter than the others):
        ColumnLength = NumberOfRecords
        DO WHILE ColumnLength MOD NUMCOLS
        ColumnLength = ColumnLength + 1
        LOOP
        ColumnLength = ColumnLength \ NUMCOLS
        Column = 1
        RecordNumber = 1

    DO UNTIL RecordNumber > NumberOfRecords
        FOR Row = 1 TO ColumnLength
            LOCATE Row, Column
            PRINT Index(RecordNumber).PartNumber
            RecordNumber = RecordNumber + 1
            IF RecordNumber > NumberOfRecords THEN EXIT FOR
        NEXT Row
        Column = Column + COLWIDTH
        LOOP

        LOCATE ColumnLength + 1, 1
        PRINT STRING$(80, "_")       ' Print separator line.

        ' Scroll information about records below the part-number
        ' menu (this way, the part numbers are not erased):
        VIEW PRINT ColumnLength + 2 TO 24
    END SUB

    ' ========================= SORTINDEX =====================
    '                Sorts the index by part number
    ' =========================================================

    SUB SortIndex STATIC


        SHARED Index() AS IndexType, NumberOfRecords

        ' Set comparison offset to half the number of records
        ' in index:
        Offset = NumberOfRecords \ 2

        ' Loop until offset gets to zero:
        DO WHILE Offset > 0
        Limit = NumberOfRecords - Offset
        DO

            ' Assume no switches at this offset:
            Switch = FALSE

            ' Compare elements and switch ones out of order:
            FOR I = 1 TO Limit
                IF Index(I).PartNumber > Index(I + Offset).PartNumber THEN
                    SWAP Index(I), Index(I + Offset)
                    Switch = I
                END IF
            NEXT I

            ' Sort on next pass only to where
            ' last switch was made:
            Limit = Switch
        LOOP WHILE Switch

        ' No switches at last offset, try one half as big:
        Offset = Offset \ 2
        LOOP
    END SUB

    Output

    ┌────────────────────────────────────────────────────────────────────────┐
    │                                                                        │
    │ 0235         0417       0583        8721                               │
    │                                                                        │
    │ ────────────────────────────────────────────────────────────────────── │
    │ Type a part number listed above <or Q to quit> and press <ENTER>: 0417 │
    │ Part Number: 0417                                                      │
    │ Description: oil filter                                                │
    │ Unit Price :   $5.99                                                   │
    │ Quantity   : 12                                                        │
    │                                                                        │
    │ ────────────────────────────────────────                               │
    │ Type a part number listed above <or Q to quit> and press <ENTER>: 8721 │
    │ Part Number: 8721                                                      │
    │ Description: chamois cloth                                             │
    │ Unit Price :   $8.99                                                   │
    │ Quantity   : 23                                                        │
    │                                                                        │
    │ ────────────────────────────────────────                               │
    │ Type a part number listed above <or Q to quit> and press <ENTER>:      │
    │                                                                        │
    └────────────────────────────────────────────────────────────────────────┘

3.6.3  Terminal Emulator (TERMINAL.BAS)

    The following simple program turns your computer into a "dumb" terminal;
    that is, it makes your computer function solely as an I/O device in tandem
    with a modem. This program uses the OPEN "COM1:" statement and associated
    device I/O functions to do the following two things:

    1. Send the characters you type to the modem

    2. Print characters returned by the modem on the screen

    Note that typed characters displayed on the screen are first sent to the
    modem and then returned to your computer through the open communications
    channel. You can verify this if you have a modem with Receive Detect (RD)
    and Send Detect (SD) lights──they will flash in sequence as you type.

    To dial a number, you would have to enter the Attention Dial Touch-Tone
    (ATDT) or Attention Dial Pulse (ATDP) commands at the keyboard (assuming
    you have a Hayes(R)-compatible modem).

    Any other commands sent to the modem would also have to be entered at the
    keyboard.

    Statements and Functions Used

    This program demonstrates the following functions and statements used in
    communicating with a modem through your computer's serial port:

    ■ OPEN "COM1:"

    ■ EOF

    ■ INPUT$

    ■ LOC

    Program Listing

    DEFINT A-Z

    DECLARE SUB Filter (InString$)

    COLOR 7, 1                    ' Set screen color.
    CLS

    Quit$ = CHR$(0) + CHR$(16)    ' Value returned by INKEY$
                                ' when ALT+q is pressed.

    ' Set up prompt on bottom line of screen and turn cursor on:
    LOCATE 24, 1, 1
    PRINT STRING$(80, "_");
    LOCATE 25, 1
    PRINT TAB(30); "Press ALT+q to quit";

    VIEW PRINT 1 TO    23           ' Print between lines 1 & 23.

    ' Open communications (1200 baud, no parity, 8-bit data,
    ' 1 stop bit, 256-byte input buffer):
    OPEN "COM1:1200,N,8,1" FOR RANDOM AS #1    LEN = 256

    DO                              ' Main communications loop.

        KeyInput$ = INKEY$           ' Check the keyboard.

        IF KeyInput$ = Quit$ THEN    ' Exit the loop if the user
        EXIT DO                   ' pressed ALT+q.

        ELSEIF KeyInput$ <> "" THEN  ' Otherwise, if the user has
        PRINT #1, KeyInput$;      ' pressed a key, send the
        END IF                       ' character typed to modem.

        ' Check the modem. If characters are waiting (EOF(1) is
        ' true), get them and print them to the screen:
        IF NOT EOF(1) THEN

        ' LOC(1) gives the number of characters waiting:
        ModemInput$ = INPUT$(LOC(1), #1)

        Filter ModemInput$        ' Filter out line feeds and
        PRINT ModemInput$;        ' backspaces, then print.
        END IF
    LOOP

    CLOSE                           ' End communications.
    CLS
    END

    '
    ' ========================= FILTER ========================
    '               Filters characters in an input string
    ' =========================================================
    '
    SUB Filter (InString$) STATIC

        ' Look for backspace characters and recode
        ' them to CHR$(29) (the LEFT cursor key):
        DO
        BackSpace = INSTR(InString$, CHR$(8))
        IF BackSpace THEN
        MID$(InString$, BackSpace) = CHR$(29)
        END IF
        LOOP WHILE BackSpace

        ' Look for line-feed characters and
        ' remove any found:
        DO
        LnFd = INSTR(InString$, CHR$(10))
        IF LnFd THEN
        InString$=LEFT$(InString$,LnFd-1)+MID$(InString$,LnFd+1)
        END IF
        LOOP WHILE LnFd

    END SUB



────────────────────────────────────────────────────────────────────────────
Chapter 4  String Processing

    This chapter shows you how to manipulate sequences of ASCII characters,
    known as strings. String manipulation is indispensable when you are
    processing text files, sorting data, or modifying string-data input.

    When you are finished with this chapter, you will know how to perform the
    following string-processing tasks:

    ■ Declare fixed-length strings

    ■ Compare strings and sort them alphabetically

    ■ Search for one string inside another

    ■ Get part of a string

    ■ Trim spaces from the beginning or end of a string

    ■ Generate a string by repeating a single character

    ■ Change uppercase letters in a string to lowercase and vice versa

    ■ Convert numeric expressions to string representations and vice versa


4.1  Strings Defined

    A string is a sequence of contiguous characters. Examples of characters
    are the letters of the alphabet (a-z and A-Z), punctuation symbols such as
    commas (,) or question marks (?), and other symbols from the fields of
    math and finance such as plus (+) or percent (%) signs.

    In this chapter, the term "string" can refer to any of the following:

    ■ A string constant

    ■ A string variable

    ■ A string expression

    String constants are declared in one of two ways:

    1. By enclosing a sequence of characters between double quotes, as in the
        following PRINT statement:

        PRINT "Processing the file. Please wait."

        This is known as a "literal string constant."

    2. By setting a name equal to a literal string in a CONST statement, as in
        the following:

        ' Define the string constant MESSAGE:
        CONST MESSAGE = "Drive door open."

        This is known as a "symbolic string constant."

    String variables can be declared in one of three ways:

    1. By appending the string-type suffix ($) to the variable name:

        LINE INPUT "Enter your name: "; Buffer$

    2. By using the DEFSTR statement:

        ' All variables beginning with the letter "B"
        ' are strings, unless they end with one of the
        ' numeric-type suffixes (%, &, !, or #):
        DEFSTR B
        .
        .
        .
        Buffer = "Your name here"  ' Buffer is a string variable

    3. By declaring the string name in an AS STRING statement:

        DIM Buffer1 AS STRING      ' Buffer1 is a variable-
                                ' length string.
        DIM Buffer2 AS STRING*10   ' Buffer2 is a fixed-length
                                ' string 10 bytes long.

    A string expression is a combination of string variables, constants,
    and/or string functions.

    Of course, the character components of strings are not stored in your
    computer's memory in a form generally recognizable to humans. Instead,
    each character is translated to a number known as the ASCII code for that
    character. For example, capital "A" is stored as decimal 65 (or
    hexadecimal 41H), while lowercase "a" is stored as decimal 97 (or
    hexadecimal 61H). See Appendix D, "Keyboard Scan Codes and ASCII
    Character Codes," for a complete list of the ASCII codes for each
    character.

    You can also use the BASIC ASC function to determine the ASCII code for a
    character; for example, ASC("A") returns the value 65. The inverse of the
    ASC function is the CHR$ function. CHR$ takes an ASCII code as its
    argument and returns the character with that code; for example, the
    statement PRINT CHR$(64) displays the character @.


4.2  Variable- and Fixed-Length Strings

    In previous versions of BASIC, strings were always variable length. BASIC
    now supports both variable-length strings and fixed-length strings.

4.2.1  Variable-Length Strings

    Variable-length strings are "elastic"; that is, they expand and contract
    to store different numbers of characters (from none to a maximum of
    32,767). For example, the length of the variable Temp$ in the following
    example varies according to the size of what is stored in Temp$:

    Temp$ = "1234567"

    ' LEN function returns length of string
    '  (number of characters it contains):



    PRINT LEN(Temp$)

    Temp$ = "1234"
    PRINT LEN(Temp$)

    Output

    7
    4

4.2.2  Fixed-Length Strings

    Fixed-length strings are commonly used as record elements in a TYPE...END
    TYPE user-defined data type. However, they can also be declared by
    themselves in COMMON, DIM, REDIM, SHARED, or STATIC statements, as in the
    following statement:

    DIM Buffer AS STRING * 10

    As their name implies, fixed-length strings have a constant length,
    regardless of the length of the string stored in them. This is shown by
    the output from the following example:

    DIM LastName AS STRING * 12
    DIM FirstName AS STRING * 10

    LastName = "Huntington-Ashley"
    FirstName = "Claire"

    PRINT "123456789012345678901234567890"
    PRINT FirstName; LastName
    PRINT LEN(FirstName)
    PRINT LEN(LastName)

    Output

    123456789012345678901234567890
    Claire    Huntington-A
    10
    12

    Note that the lengths of the string variables FirstName and LastName did
    not change, as demonstrated by the values returned by the LEN function (as
    well as the four spaces following the six-letter name, Claire).

    The output from the above example also illustrates how values assigned to
    fixed-length variables are left-justified and, if necessary, truncated on
    the right. It is not necessary to use the LSET function to left-justify
    values in fixed-length strings; this is done automatically. If you want to
    right-justify a string inside a fixed-length string, use RSET, as shown
    here:

    DIM NameBuffer AS STRING * 10
    RSET NameBuffer = "Claire"
    PRINT "1234567890"
    PRINT NameBuffer

    Output

    1234567890
        Claire


4.3  Combining Strings

    Two strings can be combined with the plus (+) operator. The string
    following the plus operator is appended to the string preceding the plus
    operator, as shown in the next example:

    A$ = "first string"
    B$ = "second string"
    C$ = A$ + B$
    PRINT C$

    Output

    first stringsecond string

    The process of combining strings in this way is called "concatenation,"
    which means linking together.

    Note that in the previous example, the two strings are combined without
    any intervening spaces. If you want a space in the combined string, you
    could pad one of the strings A$ or B$, like this:

    B$ = " second string"          ' Leading blank in B$

    Because values are left-justified in fixed-length strings, you may find
    extra spaces when you concatenate them, as in this example:

    TYPE NameType
        First AS STRING * 10
        Last  AS STRING * 12
    END TYPE

    DIM NameRecord AS NameType

    ' The constant "Ed" is left-justified in the variable
    ' NameRecord.First, so there are eight trailing blanks:
    NameRecord.First = "Ed"
    NameRecord.Last  = "Feldstein"

    ' Print a line of numbers for reference:
    PRINT "123456789012345678901234567890"

    WholeName$ = NameRecord.First + NameRecord.Last
    PRINT WholeName$

    Output

    123456789012345678901234567890
    Ed        Feldstein

    The LTRIM$ function returns a string with its leading spaces stripped
    away, while the RTRIM$ function returns a string with its trailing spaces
    stripped away. The original string is unaltered. (See Section 4.6,
    "Retrieving Parts of Strings," for more information on these functions.)


4.4  Comparing Strings

    Strings are compared with the following relational operators:

    Operator                 Meaning
    ──────────────────────────────────────────────────────────────────────────
    < >                      Not equal

    =                        Equal

    <                        Less than

    >                        Greater than

    <=                       Less than or equal to

    >=                       Greater than or equal to
    ──────────────────────────────────────────────────────────────────────────

    A single character is greater than another character if its ASCII value is
    greater. For example, the ASCII value of the letter "B" is greater than
    the ASCII value of the letter "A," so the expression "B" > "A"is true.

    When comparing two strings, BASIC looks at the ASCII values of
    corresponding characters. The first character where the two strings differ
    determines the alphabetical order of the strings. For instance, the
    strings "doorman" and "doormats" are the same up to the seventh character
    in each ("n" and "t"). Since the ASCII value of "n" is less than the ASCII
    value of "t", the expression "doorman" < "doormats"is true. Note that the
    ASCII values for letters follow alphabetical order from A to Z and from a
    to z, so you can use the relational operators listed above to alphabetize
    strings. Moreover, uppercase letters have smaller ASCII values than
    lowercase letters, so in a sorted list of strings, "ASCII" would come
    before "ascii".

    If there is no difference between corresponding characters of two strings
    and they are the same length, then the two strings are equal. If there is
    no difference between corresponding characters of two strings, but one of
    the strings is longer, then the longer string is greater than the shorter
    string. For example "abc" = "abc" and "aaaaaaa" > "aaa" are both true
    expressions.

    Leading and trailing blank spaces are significant in string comparisons.
    For example, the string " test" is less than the string "test", since a
    blank space (" ") is less than a"t"; on the other hand, the string "test "
    is greater than the string "test". Keep this in mind when comparing
    fixed-length and variable-length strings, since fixed-length strings may
    contain trailing spaces.


4.5  Searching for Strings

    One of the most common string-processing tasks is searching for a string
    inside another string. The INSTR(string1, string2) function tells you
    whether or not string2 is contained in string1 by returning the position
    of the first character in string1 (if any) where the match begins, as
    shown in this next example:

    String1$ = "A line of text with 37 letters in it."
    String2$ = "letters"

    PRINT "         1         2         3         4"
    PRINT "1234567890123456789012345678901234567890"
    PRINT String1$
    PRINT String2$
    PRINT INSTR(String1$, String2$)

    Output

    1         2         3         4
    1234567890123456789012345678901234567890
    A line of text with 37 letters in it.
    letters
    24

    If no match is found (that is, string2 is not a substring of string1),
    INSTR returns the value 0.

    A variation of the syntax shown above, INSTR(position, string1, string2),
    allows you to specify where you want the search to start in string1. To
    illustrate, making the following modification to the preceding example
    changes the output:

    ' Start looking for a match at the 30th
    ' character of String1$:
    PRINT INSTR(30, String1$, String2$)

    Output

    1         2         3         4
    1234567890123456789012345678901234567890
    A line of text with 37 letters in it.
    letters
    0

    In other words, the string "letters" does not appear after the 30th
    character of String1$.

    The INSTR(position, string1, string2) variation is useful for finding
    every occurrence of string2 in string1 instead of just the first
    occurrence, as shown in the next example:

    String1$ = "the dog jumped over the broken saxophone."
    String2$ = "the"
    PRINT String1$

    Start      = 1
    NumMatches = 0

    DO
        Match = INSTR(Start, String1$, String2$)
        IF Match > 0 THEN
        PRINT TAB(Match); String2$
        Start      = Match + 1
        NumMatches = NumMatches + 1
        END IF
    LOOP WHILE MATCH

    PRINT "Number of matches ="; NumMatches

    Output

    the dog jumped over the broken saxophone.
    the
                                    the
    Number of matches = 2


4.6  Retrieving Parts of Strings

    Section 4.3, "Combining Strings," shows how to put strings together
    (concatenate them) by using the + operator. Several functions are
    available in BASIC that take strings apart, returning pieces of a string,
    either from the left side, the right side, or the middle of a target
    string.

4.6.1  Retrieving Characters from the Left Side of a String

    The LEFT$ and RTRIM$ functions return characters from the left side of a
    string. The LEFT$(string, number) function returns the specified number of
    characters from the left side of the string. For example:

    Test$ = "Overtly"

    ' Print the leftmost 4 characters from Test$:
    PRINT LEFT$(Test$, 4)

    Output

    Over

    Note that LEFT$, like the other functions described in this chapter, does
    not change the original string Test$; it merely returns a different
    string, a copy of part of Test$.

    The RTRIM$ function returns the left part of a string after removing any
    blank spaces at the end. For example, contrast the output from the two
    PRINT statements in the following example:

    PRINT "a left-justified string      "; "next"
    PRINT RTRIM$("a left-justified string      "); "next"

    Output

    a left-justified string      next
    a left-justified stringnext

    The RTRIM$ function is useful for comparing fixed-length and
    variable-length strings, as in the next example:

    DIM NameRecord AS STRING * 10
    NameRecord = "Ed"

    NameTest$ = "Ed"

    ' Use RTRIM$ to trim all the blank spaces from the right
    ' side of the fixed-length string NameRecord, then compare
    ' it with the variable-length string NameTest$:
    IF RTRIM$(NameRecord) = NameTest$ THEN
        PRINT "They're equal"
    ELSE
        PRINT "They're not equal"
    END IF

    Output

    They're equal

4.6.2  Retrieving Characters from the Right Side of a String

    The RIGHT$ and LTRIM$ functions return characters from the right side of a
    string. The RIGHT$(string, number) function returns the specified number
    of characters from the right side of the string. For example:

    Test$ = "1234567890"

    ' Print the rightmost 5 characters from Test$:
    PRINT RIGHT$(Test$,5)

    Output

    67890

    The LTRIM$ function returns the right part of a string after removing any
    blank spaces at the beginning. For example, contrast the output from the
    next two PRINT statements:

    PRINT "first"; "      a right-justified string"
    PRINT "first"; LTRIM$("      a right-justified string")

    Output

    first      a right-justified string
    firsta right-justified string

4.6.3  Retrieving Characters from Anywhere in a String

    Use the MID$ function to retrieve any number of characters from any point
    in a string. The MID$(string, start, number) function returns the
    specified number of characters from the string, starting at the character
    with position start. For example, the statement

    MID$("**over the hill**", 12, 4)

    starts at the twelfth character (or h) of the string

    **over the hill**

    and returns that character plus the next three characters (hill).

    The following example shows how to use the MID$ function to step through a
    line of text character by character:

    .
    .
    .
    ' Get the number of characters in the string of text:
    Length = LEN(TextString$)

    FOR I = 1 TO Length

    ' Get the first character, then the second, third,
    ' and so forth, up to the end of the string:
    Char$ = MID$(TextString$, I, 1)

    ' Evaluate that character:
    .
    .
    .
    NEXT


4.7  Generating Strings

    The easiest way to create a string of one character repeated over and over
    is to use the intrinsic function STRING$. The STRING$(number, string)
    function produces a new string the specified number of characters long,
    each character of which is the first character of the string argument. For
    example, the statement

    Filler$ = STRING$(27, "*")

    generates a string of 27 asterisks. For characters that cannot be produced
    by typing, such as characters whose ASCII values are greater than 127, use
    the alternative form of this function, STRING$(number, code). This form
    creates a string the specified number of characters long, each character
    of which has the ASCII code specified by the code argument, as in the next
    example:

    ' Print a string of 10 "@" characters
    ' (64 is ASCII code for @):
    PRINT STRING$(10, 64)

    Output

    @@@@@@@@@@@

    The SPACE$(number) function generates a string consisting of the specified
    number of blank spaces.


4.8  Changing the Case of Letters

    You may want to convert uppercase (capital) letters in a string to
    lowercase or vice versa. This conversion would be useful in a
    case-insensitive search for a particular string pattern in a large file
    (in other words, help, HELP, or Help would all be considered the same).
    These functions would also be handy when you are not sure whether a user
    will input text in capital or lowercase letters.

    The UCASE$ and LCASE$ functions make the following conversions to a
    string:

    ■ UCASE$ returns a copy of the string passed to it, with all the lowercase
    letters converted to uppercase.

    ■ LCASE$ returns a copy of the string passed to it, with all the uppercase
    letters converted to lowercase.

    Example

    Sample$ = "* The ASCII Appendix: a table
    of useful codes *"
    PRINT Sample$
    PRINT UCASE$(Sample$)
    PRINT LCASE$(Sample$)

    Output

    * The ASCII Appendix: a table of useful codes *
    * THE ASCII APPENDIX: A TABLE OF USEFUL CODES *
    * the ascii appendix: a table of useful codes *

    Letters that are already uppercase, as well as characters that are not
    letters, remain unchanged by UCASE$; similarly, lowercase letters and
    characters that are not letters are unaffected by LCASE$.


4.9  Strings and Numbers

    BASIC does not allow a string to be assigned to a numeric variable, nor
    does it allow a numeric expression to be assigned to a string variable.
    For example, both of these statements result in an error message reading
    Type mismatch:

    TempBuffer$ = 45
    Counter% = "45"

    Instead, use the STR$ function to return the string representation of a
    number or the VAL function to return the numeric representation of a
    string:

    ' The following statements are both valid:
    TempBuffer$ = STR$(45)
    Counter%  = VAL("45")

    Note that STR$ includes the leading blank space that BASIC prints for
    positive numbers, as this short example shows:

    FOR I = 0 TO 9
        PRINT STR$(I);
    NEXT

    Output

    0 1 2 3 4 5 6 7 8 9

    If you want to eliminate this space, you can use the LTRIM$ function, as
    shown in the example below:

    FOR I = 0 TO 9
        PRINT LTRIM$(STR$(I));
    NEXT

    Output

    0123456789

    Another way to format numeric output is with the PRINT USING statement
    (see Section 3.1, "Printing Text on the Screen").


4.10  Changing Strings

    The functions mentioned in each of the preceding sections all leave their
    string arguments unchanged. Changes are made to a copy of the argument.

    In contrast, the MID$ statement (unlike the MID$ function discussed in
    Section 4.6.3, "Retrieving Characters from Anywhere in a String") changes
    its argument by embedding another string in it. The embedded string
    replaces part or all of the original string, as shown in the following
    example:

    Temp$ = "In the sun."
    PRINT Temp$

    ' Replace the "I" with an "O":
    MID$(Temp$,1) = "O"

    ' Replace "sun." with "road":
    MID$(Temp$,8) = "road"
    PRINT Temp$

    Output

    In the sun.
    On the road


4.11  Sample Application: Converting a String to a Number (STRTONUM.BAS)

    The following program takes a number that is input as a string, filters
    any numeric characters (such as commas) out of the string, then converts
    the string to a number with the VAL function.

    Statements and Functions Used

    This program demonstrates the following string-handling functions
    discussed in this chapter:

    ■ INSTR

    ■ LEN

    ■ MID$

    ■ VAL

    Program Listing

    DECLARE FUNCTION Filter$ (Txt$, FilterString$)

    ' Input a line:
    LINE INPUT "Enter a number with commas: ", A$

    ' Look only for valid numeric characters (0123456789.-)
    ' in the input string:
    CleanNum$ = Filter$(A$, "0123456789.-")

    ' Convert the string to a number:
    PRINT "The number's value = " VAL(CleanNum$)
    END

    ' ========================== FILTER =======================
    '         Takes unwanted characters out of a string by
    '         comparing them with a filter string containing
    '         only acceptable numeric characters
    ' =========================================================

    FUNCTION Filter$ (Txt$, FilterString$) STATIC
        Temp$ = ""
        TxtLength = LEN(Txt$)

        FOR I = 1 TO TxtLength     ' Isolate each character in
        C$ = MID$(Txt$, I, 1)   ' the string.

        ' If the character is in the filter string, save it:
        IF INSTR(FilterString$, C$) <> 0 THEN
            Temp$ = Temp$ + C$
        END IF
        NEXT I

        Filter$ = Temp$
    END FUNCTION



────────────────────────────────────────────────────────────────────────────
Chapter 5  Graphics

    This chapter shows you how to use the graphics statements and functions of
    BASIC to create a wide variety of shapes, colors, and patterns on your
    screen. With graphics, you can add a visual dimension to almost any
    program, whether it's a game, an educational tool, a scientific
    application, or a financial package.

    When you have finished studying this chapter, you will know how to perform
    the following graphics tasks:

    ■ Use the physical-coordinate system of your personal computer's screen to
    locate individual pixels, turn those pixels on or off, and change their
    colors

    ■ Draw lines

    ■ Draw and fill simple shapes, such as circles, ovals, and boxes

    ■ Restrict the area of the screen showing graphics output by using
    viewports

    ■ Adjust the coordinates used to locate a pixel by redefining screen
    coordinates

    ■ Use color in graphics output

    ■ Create patterns and use them to fill enclosed figures

    ■ Copy images and reproduce them in another location on the screen

    ■ Animate graphics output

    Section 5.1 below contains important information on what you'll need to
    run the graphics examples shown in this chapter. Read it first.


5.1  What You Need for Graphics Programs

    To run the graphics examples shown in this chapter, your computer must
    have graphics capability, either built in or in the form of a graphics
    card such as the Color Graphics Adapter (CGA), Enhanced Graphics Adapter
    (EGA), or Video Graphics Array (VGA). You also need a video display
    (either monochrome or color) that supports pixel-based graphics.

    Also, please keep in mind that these programs all require that your screen
    be in one of the "screen modes" supporting graphics output. (The screen
    mode controls the clarity of graphics images, the number of colors
    available, and the part of the video memory to display.) To select a
    graphics output mode, use the following statement in your program before
    using any of the graphics statements or functions described in this
    chapter:

    SCREEN mode

    Here, mode can be either 1, 2, 3, 4, 7, 8, 9, 10, 11, 12, or 13, depending
    on the monitor/adapter combination installed on your computer.

    If you are not sure whether or not the users of your programs have
    hardware that supports graphics, you can use the following simple test:

    CONST FALSE = 0, TRUE = NOT FALSE

    ' Test to make sure user has hardware
    ' with color/graphics capability:
    ON ERROR GOTO Message      ' Turn on error trapping.
    SCREEN 1                   ' Try graphics mode one.
    ON ERROR GOTO 0            ' Turn off error trapping.
    IF NoGraphics THEN END     ' End if no graphics hardware.
    .
    .
    .
    END

    ' Error-handling routine:
    Message:
        PRINT "This program requires graphics capability."
        NoGraphics = TRUE
        RESUME NEXT

    If the user has only a monochrome display with no graphics adapter, the
    SCREEN statement produces an error that in turn triggers a branch to the
    error-handling routine Message. (See Chapter 6, "Error and Event
    Trapping," for more information on error trapping.)


5.2  Pixels and Screen Coordinates

    Shapes and figures on a video display are composed of individual dots of
    light known as picture elements or "pixels" (or sometimes as "pels") for
    short. BASIC draws and paints on the screen by turning these pixels on or
    off and by changing their colors.

    A typical screen is composed of a grid of pixels. The exact number of
    pixels in this grid depends on the hardware you have installed and the
    screen mode you have selected in the SCREEN statement. The larger the
    number of pixels, the higher the clarity of graphics output. For example,
    a SCREEN 1 statement gives a resolution of 320 pixels horizontally by 200
    pixels vertically (320 x 200 pixels), while a SCREEN 2 statement gives a
    resolution of 640 x 200 pixels. The higher horizontal density in screen
    mode 2──640 pixels per row versus 320 pixels per row──gives images a
    sharper, less ragged appearance than they have in screen mode 1.

    Depending on the graphics capability of your system, you can use other
    screen modes that support even higher resolutions (as well as adjust other
    screen characteristics). Consult the QB Advisor for more information.

    When your screen is in one of the graphics modes, you can locate each
    pixel by means of pairs of coordinates. The first number in each
    coordinate pair tells the number of pixels from the left side of the
    screen, while the second number in each pair tells the number of pixels
    from the top of the screen. For example, in screen mode 2 the point in the
    extreme upper-left corner of the screen has coordinates (0, 0), the point
    in the center of the screen has coordinates (320, 100), and the point in
    the extreme lower-right corner of the screen has coordinates (639, 199),
    as shown in Figure 5.1.

    BASIC uses these screen coordinates to determine where to display graphics
    (for example, to locate the end points of a line or the center of a
    circle), as shown in Section 5.3, "Drawing Basic Shapes."

    Graphics coordinates differ from text-mode coordinates specified in a
    LOCATE statement. First, LOCATE is not as precise: graphics coordinates
    pinpoint individual pixels on the screen, whereas coordinates used by
    LOCATE are character positions. Second, text-mode coordinates are given in
    the form "row, column," as in the following:

    ' Move to the 13th row, 15th column,
    ' then print the message shown:
    LOCATE 13, 15
    PRINT "This should appear in the middle of the screen."

    This is the reverse of graphics coordinates, which are given in the form
    "column, row." A LOCATE statement has no effect on the positioning of
    graphics output on the screen.


    ┌──────────────────────────────────────────────────────────────────┐
    │                              x positive                          │
    │              ────────────────────────────────────────────→       │
    │            ┌──────────────────────────────────────────────────┐  │
    │          │ │°(0,0)                °(320,0)            (639,0)°│  │
    │          │ │                                                  │  │
    │          │ │                                                  │  │
    │          │ │                                                  │  │
    │          │ │                                                  │  │
    │   y      │ │                      °(320,100)                  │  │
    │ positive │ │                                                  │  │
    │          │ │                                                  │  │
    │          │ │                                                  │  │
    │          │ │                                                  │  │
    │          │ │                                                  │  │
    │          ↓ │°(0,199)              °(320,199)        (639,199)°│  │
    │            └──────────────────────────────────────────────────┘  │
    └──────────────────────────────────────────────────────────────────┘

    Figure 5.1  Coordinates of Selected Pixels in Screen Mode 2


5.3  Drawing Basic Shapes: Points, Lines, Boxes, and Circles

    You can pass coordinate values to BASIC graphics statements to produce a
    variety of simple figures, as shown in Sections 5.3.1-5.3.2.

5.3.1  Plotting Points with PSET and PRESET

    The most fundamental level of control over graphics output is simply
    turning individual pixels on and off. You do this in BASIC with the PSET
    (for pixel set) and PRESET (for pixel reset) statements. The statement
    PSET (x, y) gives the pixel at location (x, y) the current foreground
    color. The PRESET (x, y) statement gives the pixel at location (x, y) the
    current background color.

    On monochrome monitors, the foreground color is the color that is used for
    printed text and is typically white, amber, or light green; the background
    color on monochrome monitors is typically black or dark green. You can
    choose another color for PSET and PRESET to use by adding an optional
    color argument. The syntax is then:

    PSET (x, y), color

    or

    PRESET (x, y), color

    See Section 5.7 for more information on choosing colors.

    Because PSET uses the current foreground color by default and PRESET uses
    the current background color by default, PRESET without a color argument
    erases a point drawn with PSET, as shown in the next example:

    SCREEN 2          ' 640 x 200 resolution
    PRINT "Press any key to end."

    DO

        ' Draw a horizontal line from the left to the right:
        FOR X = 0 TO 640
        PSET (X, 100)
        NEXT

        ' Erase the line from the right to the left:
        FOR X = 640 TO 0 STEP -1
        PRESET (X, 100)
        NEXT

    LOOP UNTIL INKEY$ <> ""
    END

    While it is possible to draw any figure using only PSET statements to
    manipulate individual pixels, the output tends to be rather slow, since
    most pictures consist of many pixels. BASIC has several statements that
    dramatically increase the speed with which simple figures──such as lines,
    boxes, and ellipses──are drawn, as shown in Sections 5.3.2 and
    5.4.1-5.4.4.

5.3.2  Drawing Lines and Boxes with LINE

    When using PSET or PRESET, you specify only one coordinate pair since you
    are dealing with only one point on the screen. With LINE, you specify two
    pairs, one for each end of a line segment. The simplest form of the LINE
    statement is as follows:

    LINE (x1, y1) - (x2, y2)

    where (x1, y1) are the coordinates of one end of a line segment and (x2,
    y2) are the coordinates of the other. For example, the following statement
    draws a straight line from the pixel with coordinates (10, 10) to the
    pixel with coordinates (150, 200):

    SCREEN 1
    LINE (10, 10)-(150, 200)

    Note that BASIC does not care about the order of the coordinate pairs: a
    line from (x1, y1) to (x2, y2) is the same as a line from (x2, y2) to (x1,
    y1). This means you could also write the preceding statement as:

    SCREEN 1
    LINE (150, 200)-(10, 10)

    However, reversing the order of the coordinates could have an effect on
    graphics statements that follow, as shown in the next section.

    5.3.2.1  Using the STEP Option

    Up to this point, screen coordinates have been presented as absolute
    values measuring the horizontal and vertical distances from the extreme
    upper-left corner of the screen, which has coordinates (0, 0). However, by
    using the STEP option in any of the following graphics statements, you can
    make the coordinates that follow STEP relative to the last point
    referenced on the screen:

    CIRCLE
    GET
    LINE
    PAINT
    PRESET
    PSET
    PUT

    If you picture images as being drawn on the screen by a tiny paintbrush
    exactly the size of one pixel, then the last point referenced is the
    location of this paintbrush, or "graphics cursor," when it finishes
    drawing an image. For example, the following statements leave the graphics
    cursor at the pixel with coordinates (100, 150):

    SCREEN 2
    LINE (10, 10)-(100, 150)

    If the next graphics statement in the program is

    PSET STEP(20, 20)

    then the point plotted by PSET is not in the upper-left quadrant of the
    screen. Instead, the STEP option has made the coordinates (20, 20)
    relative to the last point referenced, which has coordinates (100, 150).
    This makes the absolute coordinates of the point (100 + 20, 150 + 20) or
    (120, 170).

    In the last example, the last point referenced is determined by a
    preceding graphics statement. You can also establish a reference point
    within the same statement, as shown in the next example:

    ' Set 640 x 200 pixel resolution, and make the last
    ' point referenced the center of the screen:
    SCREEN 2

    ' Draw a line from the lower-left corner of the screen
    ' to the upper-left corner:
    LINE STEP(-310, 100) -STEP(0, -200)

    ' Draw the "stair steps" down from the upper-left corner
    ' to the right side of the screen:
    FOR I% = 1 TO 20
        LINE -STEP(30, 0)     ' Draw the horizontal line.
        LINE -STEP(0, 5)      ' Draw the vertical line.
    NEXT

    ' Draw the unconnected vertical line segments from the
    ' right side to the lower-left corner:
    FOR I% = 1 TO 20
        LINE STEP(-30, 0) -STEP(0, 5)
    NEXT

    DO: LOOP WHILE INKEY$ = ""       ' Wait for a keystroke.

    Output

    ┌──────────────────────────────────────────────────────────────────┐
    │ ┌─┐                                                              │
    │ │ └──────┐                                                       │
    │ │        └──────┐                                                │
    │ │               └──────┐                                         │
    │ │                      └──────┐                                  │
    │ │                             └──────┐                           │
    │ │                                    └──────┐                    │
    │ │                                           └──────┐             │
    │ │                                                  └──────┐      │
    │ │                                                                │
    │ │                                                  │             │
    │ │                                           │                    │
    │ │                                    │                           │
    │ │                             │                                  │
    │ │                      │                                         │
    │ │               │                                                │
    │ │        │                                                       │
    │ │ │                                                              │
    └──────────────────────────────────────────────────────────────────┘

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    Note the empty DO loop at the end of the last program. If you are
    running a compiled, stand-alone BASIC program that produces graphics
    output, your program needs some mechanism like this at the end to hold
    the output on the screen. Otherwise, it vanishes from the screen before
    the user has time to notice it.
    ──────────────────────────────────────────────────────────────────────────

    5.3.2.2  Drawing Boxes

    Using the forms of the LINE statement already presented, it is quite easy
    to write a short program that connects four straight lines to form a box,
    as shown here:

    SCREEN 1        ' 320 x 200 pixel resolution

    ' Draw a box measuring 120 pixels on a side:
    LINE (50, 50)-(170, 50)
    LINE -STEP(0, 120)
    LINE -STEP(-120, 0)
    LINE -STEP(0, -120)

    However, BASIC provides an even simpler way to draw a box, using a single
    LINE statement with the B (for box) option. The B option is shown in the
    next example, which produces the same output as the four LINE statements
    in the preceding program:

    SCREEN 1        ' 320 x 200 pixel resolution

    ' Draw a box with coordinates (50, 50) for the upper-left
    ' corner, and (170, 170) for the lower-right corner:
    LINE (50, 50)-(170, 170), , B

    When you add the B option, the LINE statement no longer connects the two
    points you specify with a straight line; instead, it draws a rectangle
    whose opposite corners (upper left and lower right) are at the locations
    specified.

    Two commas precede the B in the last example. The first comma functions
    here as a placeholder for an unused option (the color argument), which
    allows you to pick the color for a line or the sides of a box. (See
    Section 5.7 for more information on the use of color.)

    As before, it does not matter what order the coordinate pairs are given
    in, so the rectangle from the last example could also be drawn with this
    statement:

    LINE (170, 170)-(50, 50), , B

    Adding the F (for fill) option after B fills the interior of the box with
    the same color used to draw the sides. With a monochrome display, this is
    the same as the foreground color used for printed text. If your hardware
    has color capabilities, you can change this color with the optional color
    argument (see Section 5.7.1, "Selecting a Color for Graphics Output").

    The syntax introduced here for drawing a box is the general syntax used in
    BASIC to define a rectangular graphics region, and it also appears in the
    GET and VIEW statements:

    {GET| LINE| VIEW} (x1, y1) - (x2, y2),...

    Here, (x1, y1) and (x2, y2) are the coordinates of diagonally opposite
    corners of the rectangle (upper left and lower right). (See Section 5.5,
    "Defining a Graphics Viewport," for a discussion of VIEW, and Section
    5.10, "Basic Animation Techniques," for information on GET and PUT.)

    5.3.2.3  Drawing Dotted Lines

    The previous sections explain how to use LINE to draw solid lines and use
    them in rectangles; that is, no pixels are skipped. Using yet another
    option with LINE, you can draw dashed or dotted lines instead. This
    process is known as "line styling." The following is the syntax for
    drawing a single dashed line from point (x1, y1) to point (x2, y2) using
    the current foreground color:

    LINE (x1,y1) - (x2,y2), ,[[B]], style

    Here style is a 16-bit decimal or hexadecimal integer. The LINE statement
    uses the binary representation of the line-style argument to create dashes
    and blank spaces, with a 1 bit meaning "turn on the pixel," and a 0 bit
    meaning "leave the pixel off." For example, the hexadecimal integer &HCCCC
    is equal to the binary integer 1100110011001100, and when used as a style
    argument it draws a line alternating two pixels on, two pixels off.

    Example

    The following example shows different dashed lines produced using
    different values for style:

    SCREEN 2        ' 640 x 200 pixel resolution

    ' Style data:
    DATA &HCCCC, &HFF00, &HF0F0
    DATA &HF000, &H7777, &H8888

    Row% = 4
    Column% = 4
    XLeft% = 60
    XRight% = 600
    Y% = 28

    FOR I% = 1 TO 6
        READ Style%
        LOCATE Row%, Column%
        PRINT HEX$(Style%)
        LINE (XLeft%, Y%)-(XRight%,Y%), , , Style%
        Row% = Row% + 3
        Y% = Y% + 24
    NEXT

    Output

    ┌───────────────────────────────────────────────────────────────────┐
    │                                                                   │
    │                                                                   │
    │ CCCC····························································· │
    │                                                                   │
    │ FF00------------------------------------------------------------- │
    │                                                                   │
    │ F0F0••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• │
    │                                                                   │
    │ F000- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - │
    │                                                                   │
    │ 7777───────────────────────────────────────────────────────────── │
    │                                                                   │
    │ 8888............................................................. │
    │                                                                   │
    │                                                                   │
    │                                                                   │
    └───────────────────────────────────────────────────────────────────┘


5.4  Drawing Circles and Ellipses with CIRCLE

    The CIRCLE statement draws a variety of circular and elliptical, or oval,
    shapes. In addition, CIRCLE draws arcs (segments of circles), and
    pie-shaped wedges. In graphics mode you can produce just about any kind of
    curved line with some variation of CIRCLE.

5.4.1  Drawing Circles

    To draw a circle, you need to know only two things: the location of its
    center and the length of its radius (the distance from the center to any
    point on the circle). With this information and a reasonably steady hand
    (or better yet, a compass), you can produce an attractive circle.

    Similarly, BASIC needs only the location of a circle's center and the
    length of its radius to draw a circle. The simplest form of the CIRCLE
    syntax is

    CIRCLE[[STEP]](x, y), radius

    where x, y are the coordinates of the center, and radius is the radius of
    the circle. The next example draws a circle with center (200, 100) and
    radius 75:

    SCREEN 2
    CIRCLE (200, 100), 75

    You could rewrite the preceding example as follows, making the same circle
    but using the STEP option to make the coordinates relative to the center
    rather than to the upper-left corner:

    SCREEN 2       ' Uses center of screen (320,100) as the
                    ' reference point for the CIRCLE statement:
    CIRCLE STEP(-120, 0), 75

5.4.2  Drawing Ellipses

    The CIRCLE statement automatically adjusts the "aspect ratio" to make sure
    that circles appear round and not flattened on your screen. However, you
    may need to adjust the aspect ratio to make circles come out right on your
    monitor, or you may want to change the aspect ratio to draw the oval
    figure known as an ellipse. In either case, use the syntax

    CIRCLE[[STEP]] (x,y), radius, , , , aspect

    where aspect is a positive real number. (See Section 5.4.5 for more
    information on the aspect ratio and how to calculate it for different
    screen modes.)

    The extra commas between radius and aspect are placeholders for other
    options that tell CIRCLE which color to use (if you have a color
    monitor/adapter and are using one of the screen modes that support color),
    or whether to draw an arc or wedge. (See Sections 5.4.3, "Drawing Arcs,"
    and 5.7.1, "Selecting a Color for Graphics Output," for more information
    on these options.)

    Since the aspect argument specifies the ratio of the vertical to
    horizontal dimensions, large values for aspect produce ellipses stretched
    out along the vertical axis, while small values for aspect produce
    ellipses stretched out along the horizontal axis. Since an ellipse has two
    radii──one horizontal x-radius and one vertical y-radius──BASIC uses the
    single radius argument in a CIRCLE statement as follows: if aspect is less
    than one, then radius is the x-radius; if aspect is greater than or equal
    to one, then radius is the y-radius.

    Example

    The following example and its output show how different aspect values
    affect whether the CIRCLE statement uses the radius argument as the
    x-radius or the y-radius of an ellipse:

    SCREEN 1

    ' This draws the ellipse on the left:
    CIRCLE (60, 100), 80, , , , 3

    ' This draws the ellipse on the right:
    CIRCLE (180, 100), 80, , , , 3/10

    Output

    ┌────────────────────────────────────┐
    │                                    │
    │     The output for this example    │
    │     can be found on page 160 of    │
    │     the printed manual.            │
    │                                    │
    └────────────────────────────────────┘

5.4.3  Drawing Arcs

    An arc is a segment of a ellipse, in other words a short, curved line. To
    understand how the CIRCLE statement draws arcs, you need to know how BASIC
    measures angles.

    BASIC uses the radian as its unit of angle measure, not only in the CIRCLE
    statement, but also in the intrinsic trigonometric functions such as COS,
    SIN, or TAN. (The one exception to this use of radians is the DRAW
    statement, which expects angle measurements in degrees. See Section 5.9
    for more information about DRAW.)

    The radian is closely related to the radius of a circle. In fact, the word
    "radian" is derived from the word "radius." The circumference of a circle
    equals 2 * π * radius, where π is equal to approximately 3.14159265.
    Similarly, the number of radians in one complete angle of revolution (or
    360) equals 2 * π, or a little more than 6.28. If you are more used to
    thinking of angles in terms of degrees, here are some common equivalences:

    Angle in Degrees         Angle in Radians
    ──────────────────────────────────────────────────────────────────────────
    360                      2π    (approximately 6.283)

    180                      π    (approximately 3.142)

    90                       π/2  (approximately 1.571)

    60                       π/3  (approximately 1.047)
    ──────────────────────────────────────────────────────────────────────────

    If you picture a clock face on the screen, CIRCLE measures angles by
    starting at the "3:00" position and rotating counterclockwise, as shown in
    Figure 5.2:


    ┌────────────────────────────────────┐
    │                                    │
    │   Figure 5.2 can be found on       │
    │   page 161 of the printed manual.  │
    │                                    │
    └────────────────────────────────────┘

    Figure 5.2  How Angles Are Measured for CIRCLE

    The general formula for converting from degrees to radians is to multiply
    degrees by π/180.

    To draw an arc, give angle arguments defining the arc's limits:

    CIRCLE[[STEP]] (x, y), radius,[[color]], start, end [[, aspect]]

    Example

    The CIRCLE statements in the next example draw seven arcs, with the
    innermost arc starting at the "3:00" position (0 radians) and the
    outermost arc starting at the "6:00" position (3π/2 radians), as you can
    see from the output:

    SCREEN 2
    CLS

    CONST PI = 3.141592653589#      ' Double-precision constant

    StartAngle = 0
    FOR Radius% = 100 TO 220 STEP 20
        EndAngle = StartAngle + (PI / 2.01)
        CIRCLE (320, 100), Radius%, , StartAngle, EndAngle
        StartAngle = StartAngle + (PI / 4)
    NEXT Radius%

    Output

    ┌────────────────────────────────────┐
    │                                    │
    │     The output for this example    │
    │     can be found on page 162 of    │
    │     the printed manual.            │
    │                                    │
    └────────────────────────────────────┘

5.4.4  Drawing Pie Shapes

    By making either of CIRCLE's start or end arguments negative, you can
    connect the arc at its beginning or ending point with the center of the
    circle. By making both arguments negative, you can draw shapes ranging
    from a wedge that resembles a slice of pie to the pie itself with the
    piece missing.

    Example

    This example draws a pie shape with a piece missing:

    SCREEN 2

    CONST RADIUS = 150, PI = 3.141592653589#

    StartAngle = 2.5
    EndAngle = PI

    ' Draw the wedge:
    CIRCLE (320, 100), RADIUS, , -StartAngle, -EndAngle

    ' Swap the values for the start and end angles:
    SWAP StartAngle, EndAngle

    ' Move the center 10 pixels down and 70 pixels to the
    ' right, then draw the "pie" with the wedge missing:
    CIRCLE STEP(70, 10), RADIUS, , -StartAngle, -EndAngle

    Output

    ┌────────────────────────────────────┐
    │                                    │
    │     The output for this example    │
    │     can be found on page 163 of    │
    │     the printed manual.            │
    │                                    │
    └────────────────────────────────────┘

5.4.5  Drawing Shapes to Proportion with the Aspect Ratio

    As discussed in Section 5.4.2, "Drawing Ellipses," BASIC's CIRCLE
    statement automatically corrects the aspect ratio, which determines how
    figures are scaled on the screen. However, with other graphics statements
    you need to scale horizontal and vertical dimensions yourself to make
    shapes appear with correct proportions. For example, although the
    following statement draws a rectangle that measures 100 pixels on all
    sides, it does not look like a square:

    SCREEN 1
    LINE (0, 0)-(100, 100), , B

    In fact, this is not an optical illusion; the rectangle really is taller
    than it is wide. This is because in screen mode 1 there is more space
    between pixels vertically than horizontally. To draw a perfect square, you
    have to change the aspect ratio.

    The aspect ratio is defined as follows: in a given screen mode consider
    two lines, one vertical and one horizontal, that appear to have the same
    length. The aspect ratio is the number of pixels in the vertical line
    divided by the number of pixels in the horizontal line. This ratio depends
    on two factors:

    1. Because of the way pixels are spaced on most screens, a horizontal row
        has more pixels than a vertical column of the exact same physical
        length in all screen modes except modes 11 and 12.

    2. The standard personal computer's video-display screen is wider than it
        is high. Typically, the ratio of screen width to screen height is 4:3.

    To see how these two factors interact to produce the aspect ratio,
    consider a screen after a SCREEN 1 statement, which gives a resolution of
    320 x 200 pixels. If you draw a rectangle from the top of the screen to
    the bottom, and from the left side of the screen three-fourths of the way
    across, you have a square, as shown in Figure 5.3.


    ┌────────────────────────────────────────────────────────────────┐
    │ ┌──────────────────────────────────────────────────────┐       │
    │ │ ┌───────────────────────────────────┬─ - - - - - -   │       │
    │ │ │                                   │      ↑         │       │
    │ │ │                                   │      │         │       │
    │ │ │                                   │      │         │       │
    │ │ │                                   │      │         │       │
    │ │ │ ←────────── 240 pixels───────────→│   200 pixels   │       │
    │ │ │                                   │      │         │       │
    │ │ │                                   │      │         │       │
    │ │ │                                   │      │         │       │
    │ │ │                                   │      │         │       │
    │ │ │                                   │      │         │       │
    │ │ │                                   │      ↓         │       │
    │ │ └───────────────────────────────────┴─ - - - - - - - │       │
    │ │ ←──────────────────320 pixels───────────────────────→│       │
    │ └──────────────────────────────────────────────────────┘       │
    │                                                                │
    └────────────────────────────────────────────────────────────────┘
    Figure 5.3  The Aspect Ratio In Screen Mode 1

    As you can see from the diagram, this square has a height of 200 pixels
    and a width of 240 pixels. The ratio of the square's height to its width
    (200 / 240, or when simplified, 5 / 6) is the aspect ratio for this screen
    resolution. In other words, to draw a square in 320 x 200 resolution, make
    its height in pixels equal to 5 / 6 times its width in pixels, as shown in
    the next example:

    SCREEN 1        ' 320 x 200 pixel resolution

    ' The height of this box is 100 pixels, and the width is
    ' 120 pixels, which makes the ratio of the height to the
    ' width equal to 100/120, or 5/6. The result is a square:
    LINE (50, 50) -STEP(120, 100), , B

    The formula for calculating the aspect ratio for a given screen mode is

    (4 / 3) * (ypixels / xpixels)

    where xpixelsby ypixels is the current screen resolution. In screen mode
    1, this formula shows the aspect ratio to be (4 / 3) * (200 / 320), or 5 /
    6; in screen mode 2, the aspect ratio is (4 / 3) * (200 / 640), or 5 / 12.

    If you have a video display with a ratio of width to height that is not
    equal to 4:3, use the more general form of the formula for computing the
    aspect ratio:

    (screenwidth / screenheight) * (ypixels / xpixels)

    The CIRCLE statement can be made to draw an ellipse by varying the value
    of the aspect argument, as shown above in Section 5.4.2.


5.5  Defining a Graphics Viewport

    The graphics examples presented so far have all used the entire
    video-display screen as their drawing board, with absolute coordinate
    distances measured from the extreme upper-left corner of the screen.

    However, using the VIEW statement you can also define a kind of miniature
    screen (known as a "graphics viewport") inside the boundaries of the
    physical screen. Once it is defined, all graphics operations take place
    within this viewport. Any graphics output outside the viewport boundaries
    is "clipped"; that is, any attempt to plot a point outside the viewport is
    ignored. There are two main advantages to using a viewport:

    1. A viewport makes it easy to change the size and position of the screen
        area where graphics appear.

    2. Using CLS 1, you can clear the screen inside a viewport without
        disturbing the screen outside the viewport.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    Refer to Section 3.1.6 to learn how to create a "text viewport" for
    output printed on the screen.
    ──────────────────────────────────────────────────────────────────────────

    The general syntax for VIEW (note that the STEP option is not allowed with
    VIEW) is

    VIEW[[[[SCREEN]] (x1, y1) - (x2, y2)[[,[[color]], [[border]]]]]]

    where (x1, y1) and (x2, y2) define the corners of the viewport, using the
    standard BASIC syntax for rectangles (see Section 5.3.2.2, "Drawing
    Boxes"). The optional color and border arguments allow you to choose a
    color for the interior and edges, respectively, of the viewport rectangle.
    See Section 5.7 below for more information on setting and changing
    colors.

    The VIEW statement without arguments makes the entire screen the viewport.
    Without the SCREEN option, the VIEW statement makes all pixel coordinates
    relative to the viewport, rather than the full screen. In other words,
    after the statement

    VIEW (50, 60)-(150, 175)

    the pixel plotted with

    PSET (10, 10)

    is visible, since it is 10 pixels below and 10 pixels to the right of the
    upper-left corner of the viewport. Note that this makes the pixel's
    absolute screen coordinates (50 + 10, 60 + 10) or (60, 70).

    In contrast, the VIEW statement with the SCREEN option keeps all
    coordinates absolute; that is, coordinates measure distances from the side
    of the screen, not from the sides of the viewport. Therefore, after the
    statement

    VIEW SCREEN (50, 60)-(150, 175)

    the pixel plotted with

    PSET (10, 10)

    is not visible, since it is 10 pixels below and 10 pixels to the right of
    the upper-left corner of the screen──outside the viewport.

    Examples

    The output from the next two examples should further clarify the
    distinction between VIEW and VIEW SCREEN:

    SCREEN 2

    VIEW (100, 50)-(450, 150), , 1

    ' This circle's center point has absolute coordinates
    ' (100 + 100, 50 + 50), or (200, 100):
    CIRCLE (100, 50), 50

    Output using VIEW

    ┌────────────────────────────────────┐
    │                                    │
    │     The output for this example    │
    │     can be found on page 167 of    │
    │     the printed manual.            │
    │                                    │
    └────────────────────────────────────┘

    SCREEN 2

    ' This circle's center point has absolute coordinates
    ' (100, 50), so only part of the circle appears
    '  within the view port:
    VIEW SCREEN (100, 50)-(450, 150), , 1
    CIRCLE (100, 50), 50

    Output using VIEW SCREEN

    ┌────────────────────────────────────┐
    │                                    │
    │     The output for this example    │
    │     can be found on page 167 of    │
    │     the printed manual.            │
    │                                    │
    └────────────────────────────────────┘

    Note that graphics output located outside the current viewport is clipped
    by the viewport's edges and does not appear on the screen.


5.6  Redefining Viewport Coordinates with WINDOW

    This section shows you how to use the WINDOW statement and your own
    coordinate system to redefine pixel coordinates.

    In Sections 5.2-5.5, the coordinates used to locate pixels on the screen
    represent actual physical distances from the upper-left corner of the
    screen (or the upper-left corner of the current viewport, if it has been
    defined with a VIEW statement). These are known as "physical coordinates."
    The "origin," or reference point, for physical coordinates is always the
    upper-left corner of the screen or viewport, which has coordinates (0, 0).

    As you move down the screen and to the right, x values (horizontal
    coordinates) and y values (vertical coordinates) get bigger, as shown in
    the upper diagram of Figure 5.4. While this scheme is standard for video
    displays, it may seem counterintuitive if you have used other coordinate
    systems to draw graphs. For example, on the Cartesian grid used in
    mathematics, y values get bigger toward the top of a graph and smaller
    toward the bottom.

    With BASIC's WINDOW statement, you can change the way pixels are addressed
    to use any coordinate system you choose, thus freeing you from the
    limitations of using physical coordinates.

    The general syntax for WINDOW is

    WINDOW [[[[SCREEN]] (x1, y1) - (x2, y2)]]

    where y1, y2, x1, and x2 are real numbers specifying the top, bottom,
    left, and right sides of the window, respectively. These numbers are known
    as "view coordinates." For example, the following statement remaps your
    screen so that it is bounded on the top and bottom by the lines y = 10 and
    y = -15 and on the left and right by the lines x = -25 and x = 5 :

    WINDOW (-25, -15)-(5, 10)

    After a WINDOW statement, y values get bigger toward the top of the
    screen. In contrast, after a WINDOW SCREEN statement, y values get bigger
    toward the bottom of the screen. The bottom half of Figure 5.4 shows the
    effects of both a WINDOW statement and a WINDOW SCREEN statement on a line
    drawn in screen mode 2. Note also how both of these statements change the
    coordinates of the screen corners. A WINDOW statement with no arguments
    restores the regular physical-coordinate system.

    Example


    ┌──────────────────────────────────────────────────────────────────────────
    │                               Increasing X
    │                     ─────────────────────────────→
    │                     ┌────────────────────────────┐
    │                   │ │°(0,0)              (639,0)°│
    │                   │ │                            │
    │        Increasing │ │                            │
    │             Y     │ │                            │
    │                   │ │                            │
    │                   │ │                            │
    │                   │ │°(0,199)          (639,199)°│
    │                   ↓ └────────────────────────────┘
    │                                   ^
    │                                 /   \
    │                                /      \
    │       WINDOW (-25, -15) - (5, 10)   WINDOW SCREEN (-25, -15) - (5, 10)
    │       LINE (-15, -10  - (-5, -5)    LINE (-15, -10) - (-5, -5)
    │                            /              \
    │                          /                  \
    │                        /                      \
    │                                                       Increasing X
    │                                                ─────────────────────────→
    │            ┌─────────────────────┐             ┌────────────────────────┐
    │           ↑│°(-25,10)     (5,10)°│            ││°(-25,-15)    (5,-15)°  │
    │           ││                     │            ││        °(-15,-10)      │
    │           ││           (0,0)°    │            ││             \          │
    │ Increasing││                     │  Increasing││              °(-5,-5)  │
    │      Y    ││       (-5,-5)°      │       Y    ││                        │
    │           ││(-15,-10)  /         │            ││                   °    │
    │           ││         °           │            ││               (0,0)    │
    │           ││°(-25,-15)   (5,-15)°│            ││°(-25,10)        (5,10)°│
    │            └─────────────────────┘            ↓└────────────────────────┘
    │            ──────────────────────→
    │                 Increasing X
    └──────────────────────────────────────────────────────────────────────────

    Figure 5.4  WINDOW Contrasted with WINDOW SCREEN

    The following example uses both VIEW and WINDOW to simplify writing a
    program to graph the sine-wave function for angle values from 0 radians to
    p radians (or 0° to 180°). This program is in the file named SINEWAVE.BAS
    on the QuickBASIC distribution disks.

    SCREEN 2

    ' Viewport sized to proper scale for graph:
    VIEW (20, 2)-(620, 172), , 1
    CONST PI = 3.141592653589#

    ' Make window large enough to graph sine wave from
    ' 0 radians to pi radians:
    WINDOW (0, -1.1)-(PI, 1.1)
    Style% = &HFF00                 ' Use to make dashed line.
    VIEW PRINT 23 TO 24  ' Scroll printed output in rows 23, 24.
    DO
        PRINT TAB(20);
        INPUT "Number of cycles (0 to end): ", Cycles
        CLS
        LINE (PI, 0)-(0, 0), , , Style%  ' Draw the x axis.
        IF Cycles > 0 THEN

        ' Start at (0,0) and plot the graph:
        FOR X = 0 TO PI STEP .01
            Y = SIN(Cycles * X)    ' Calculate the y coordinate.
            LINE -(X, Y)           ' Draw a line to new point.
        NEXT X
        END IF
    LOOP WHILE Cycles > 0

    Output

    ┌────────────────────────────────────┐
    │                                    │
    │     The output for this example    │
    │     can be found on page 170 of    │
    │     the printed manual.            │
    │                                    │
    └────────────────────────────────────┘

5.6.1  The Order of Coordinate Pairs

    As with the other BASIC graphics statements that define rectangular areas
    (GET, LINE, and VIEW), the order of coordinate pairs in a WINDOW statement
    is unimportant. The first pair of statements below has the same effect as
    the second pair of statements:

    VIEW (100, 20)-(300, 120)
    WINDOW (-4, -3)-(0, 0)

    VIEW (300, 120)-(100, 20)
    WINDOW (0, 0)-(-4, -3)

5.6.2  Keeping Track of View and Physical Coordinates

    The PMAP and POINT functions are useful for keeping track of physical and
    view coordinates. POINT(number) tells you the current location of the
    graphics cursor by returning either the physical or view coordinates
    (depending on the value for number) of the last point referenced in a
    graphics statement. PMAP allows you to translate physical coordinates to
    view coordinates and vice versa. The physical-coordinate values returned
    by PMAP are always relative to the current viewport.

    Examples

    The following example shows the different values that are returned by
    POINT (number) for number values of 0, 1, 2, or 3:

    SCREEN 2
    ' Define the view-coordinate window:
    WINDOW (-10, -30)-(-5, -10)
    ' Draw a line from the point with view coordinates (-9,-28)
    ' to the point with view coordinates (-6,-24):
    LINE (-9, -28)-(-6, -24)

    PRINT "Physical x-coordinate of the last point = " POINT(0)
    PRINT "Physical y-coordinate of the last point = " POINT(1)
    PRINT
    PRINT "View x-coordinate of the last point  = " POINT(2)
    PRINT "View y-coordinate of the last point  = " POINT(3)

    END

    Output

    Physical x-coordinate of the last point = 511
    Physical y-coordinate of the last point = 139

    View x-coordinate of the last point  = -6
    View y-coordinate of the last point  = -24

    Given the WINDOW statement in the preceding example, the next four PMAP
    statements would print the output that follows:

    ' Map the view x-coordinate -6 to physical x and print:
    PhysX% = PMAP(-6, 0)
    PRINT PhysX%

    ' Map the view y-coordinate -24 to physical y and print:
    PhysY% = PMAP(-24, 1)
    PRINT PhysY%

    ' Map physical x back to view x and print:
    ViewX% = PMAP(PhysX%, 2)
    PRINT ViewX%

    ' Map physical y back to view y and print:
    ViewY% = PMAP(PhysY%, 3)
    PRINT ViewY%

    Output

    511
    139
    -6
    -24


5.7  Using Colors

    If you have a Color Graphics Adapter (CGA), you can choose between the
    following two graphics modes only:

    1. Screen mode 2 has 640 x 200 high resolution, with only one foreground
        and one background color. This is known as "monochrome," since all
        graphics output has the same color.

    2. Screen mode 1 has 320 x 200 medium resolution with 4 foreground colors
        and 16 background colors.

    There is thus a tradeoff between color and clarity in the two screen modes
    supported by most color-graphics display adapter hardware. Depending on
    the graphics capability of your system, you may not have to sacrifice
    clarity to get a full range of color. However, this section focuses on
    screen modes 1 and 2.

5.7.1  Selecting a Color for Graphics Output

    The following list shows where to put the color argument in the graphics
    statements discussed in previous sections of this chapter. This list also
    shows other options (such as BF with the LINE statement or border with the
    VIEW statement) that can have a different colors. (Please note that these
    do not give the complete syntax for some of these statements. This summary
    is intended to show how to use the color option in those statements that
    accept it.)

    PSET (x, y), color
    PRESET (x, y), color
    LINE (x1, y1) - (x2, y2), color [[, B[[F]]]]
    CIRCLE (x, y), radius, color
    VIEW (x1, y1) - (x2, y2), color, border

    In screen mode 1, the color argument is a numeric expression with the
    value 0, 1, 2, or 3. Each of these values, known as an "attribute,"
    represents a different color, as demonstrated by the following program:

    ' Draw an "invisible" line (same color as background):
    LINE (10, 10)-(310, 10), 0

    ' Draw a light blue (cyan) line:
    LINE (10, 30)-(310, 30), 1

    ' Draw a purple (magenta) line:
    LINE (10, 50)-(310, 50), 2

    ' Draw a white line:
    LINE (10, 70)-(310, 70), 3
    END

    As noted in the comments for the preceding example, a color value of 0
    produces no visible output, since it is always equal to the current
    background color. At first glance, this may not seem like such a useful
    color value, but in fact it is useful for erasing a figure without having
    to clear the entire screen or viewport, as shown in the next example:

    SCREEN 1

    CIRCLE (100, 100), 80, 2, , , 3   ' Draw an ellipse.
    Pause$ = INPUT$(1)                ' Wait for a key press.
    CIRCLE (100, 100), 80, 0, , , 3   ' Erase the ellipse.

5.7.2  Changing the Foreground or Background Color

    Section 5.7.1 above describes how to use 4 different foreground colors
    for graphics output. You have a wider variety of colors in screen mode 1
    for the screen's background: 16 in all.

    In addition, you can change the foreground color by using a different
    "palette." In screen mode 1, there are two palettes, or groups of four
    colors. Each palette assigns a different color to the same attribute; so,
    for instance, in palette 1 (the default) the color associated with
    attribute 2 is magenta, while in palette 0 the color associated with
    attribute 2 is red. If you have a CGA, these colors are predetermined for
    each palette; that is, the color assigned to number 2 in palette 1 is
    always magenta, while the color assigned to number 2 in palette 0 is
    always red.

    If you have an Enhanced Graphics Adapter (EGA) or Video Graphics Adapter
    (VGA), you can use the PALETTE statement to choose the color displayed by
    any attribute. For example, by changing arguments in a PALETTE statement,
    you could make the color displayed by attribute 1 green one time and brown
    the next. (See Section 5.7.3, "Changing Colors with PALETTE and PALETTE
    USING," in this manual for more information on reassigning colors.)

    In screen mode 1, the COLOR statement allows you to control both the
    background color and the palette for the foreground colors. Here is the
    syntax for COLOR in screen mode 1:

    COLOR[[background]] [[, palette]]

    The background argument is a numeric expression from 0 to 15, and palette
    is a numeric expression equal to either 0 or 1.

    Table 5.1 shows the colors produced with the 4 different foreground
    numbers in each of the two palettes, while Table 5.2 shows the colors
    produced with the 16 different background numbers.

    Table 5.1  Color Palettes in Screen Mode 1
    Foreground Color Number  Color in Palette 0      Color in Palette 1
    ──────────────────────────────────────────────────────────────────────────
    0                        Current background      Current background color
                            color

    1                        Green                   Cyan (bluish green)

    2                        Red                     Magenta (light purple)

    3                        Brown                   White (light grey on some
                                                    monitors)
    ──────────────────────────────────────────────────────────────────────────

    Table 5.2  Background Colors in Screen Mode 1
╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Background Color Number  Color
    ──────────────────────────────────────────────────────────────────────────
    0                        Black

    1                        Blue

    Background Color Number  Color
    ──────────────────────────────────────────────────────────────────────────

    2                        Green

    3                        Cyan

    4                        Red

    5                        Magenta

    6                        Brown (dark yellow on some monitors)

    7                        White (light grey on some monitors)

    8                        Dark grey (black on some monitors)

    9                        Light blue

    10                       Light green

    Background Color Number  Color
    ──────────────────────────────────────────────────────────────────────────

    11                       Light cyan

    12                       Light red

    13                       Light magenta

    14                       Light yellow (may have greenish tinge on some
                            monitors)

    15                       Bright white or very light grey
    ──────────────────────────────────────────────────────────────────────────


    Example

    The following program shows all combinations of the two color palettes
    with the 16 different background screen colors. This program is in the
    file named COLORS.BAS on the QuickBASIC distribution disks.

    SCREEN 1

    Esc$ = CHR$(27)
    ' Draw three boxes and paint the interior
    ' of each box with a different color:
    FOR ColorVal = 1 TO 3
        LINE (X, Y) -STEP(60, 50), ColorVal, BF
        X = X + 61
        Y = Y + 51
    NEXT ColorVal

    LOCATE 21, 1
    PRINT "Press ESC to end."
    PRINT "Press any other key to continue."

    ' Restrict additional printed output to the 23rd line:
    VIEW PRINT 23 TO 23
    DO
        PaletteVal = 1
        DO

        ' PaletteVal is either 1 or 0:
        PaletteVal = 1 - PaletteVal

        ' Set the background color and choose the palette:
        COLOR BackGroundVal, PaletteVal
        PRINT "Background ="; BackGroundVal;
        PRINT "Palette ="; PaletteVal;

        Pause$ = INPUT$(1)        ' Wait for a keystroke.
        PRINT

        ' Exit the loop if both palettes have been shown,
        ' or if the user pressed the ESC key:
        LOOP UNTIL PaletteVal = 1 OR Pause$ = Esc$

        BackGroundVal = BackGroundVal + 1

    ' Exit this loop if all 16 background colors have
    ' been shown, or if the user pressed the ESC key:
    LOOP UNTIL BackGroundVal > 15 OR Pause$ = Esc$

    SCREEN 0                     ' Restore text mode and
    WIDTH 80                     ' 80-column screen width.

5.7.3  Changing Colors with PALETTE and PALETTE USING

    The preceding section showed how you can change the color displayed by an
    attribute simply by specifying a different palette in the COLOR statement.
    However, this restricts you to two fixed color palettes, with just 4
    colors in each. Furthermore, each attribute can stand for only one of two
    possible colors; for example, attribute 1 can signify only green or cyan.

    With an EGA or VGA, your choices are potentially much broader. (If you
    don't have an EGA or VGA, you may want to skip this section.) For
    instance, depending on the amount of video memory available to your
    computer, with a VGA you can choose from a palette with as many as 256K
    (that's right, over 256,000) colors and assign those colors to 256
    different attributes. Even an EGA allows you to display up to 16 different
    colors from a palette of 64 colors.

    In contrast to the COLOR statement, the PALETTE and PALETTE USING
    statements give you a lot more flexibility in manipulating the available
    color palette. Using these statements, you can assign any color from the
    palette to any attribute. For example, after the following statement, the
    output of all graphics statements using attribute 4 appears in light
    magenta (color 13):

    PALETTE 4, 13

    This color change is instantaneous and affects not only subsequent
    graphics statements but any output already on the screen. In other words,
    you can draw and paint your screen, then switch the palette to achieve an
    immediate change of color, as shown by the following example:

    SCREEN 8
    LINE (50, 50)-(150, 150), 4  ' Draws a line in red.
    SLEEP 1                      ' Pauses program.
    PALETTE 4, 13                ' Attribute 4 now means color
                                ' 13, so the line drawn in the
                                ' last statement is now light
                                ' magenta.

    With the PALETTE statement's USING option, you can change the colors
    assigned to every attribute all at once.

    Example

    The following example uses the PALETTE USING statement to give the
    illusion of movement on the screen by constantly rotating the colors
    displayed by attributes 1 through 15. This program is in the file named
    PALETTE.BAS on the QuickBASIC distribution disks.

    DECLARE SUB InitPalette ()
    DECLARE SUB ChangePalette ()
    DECLARE SUB DrawEllipses ()

    DEFINT A-Z
    DIM SHARED PaletteArray(15)

    SCREEN 8                 ' 640 x 200 resolution; 16 colors

    InitPalette              ' Initialize PaletteArray.
    DrawEllipses             ' Draw and paint concentric ellipses.

    DO                       ' Shift the palette until a key
        ChangePalette         ' is pressed.
    LOOP WHILE INKEY$ = ""

    END


    ' ====================== InitPalette ======================
    '    This procedure initializes the integer array used to
    '    change the palette.
    ' =========================================================

    SUB InitPalette STATIC
        FOR I = 0 TO 15
        PaletteArray(I) = I
        NEXT I
    END SUB
    ' ===================== DrawEllipses ======================
    '    This procedure draws 15 concentric ellipses and
    '    paints the interior of each with a different color.
    ' =========================================================

    SUB DrawEllipses STATIC
        CONST ASPECT = 1 / 3
        FOR ColorVal = 15 TO 1 STEP -1
        Radius = 20 * ColorVal
        CIRCLE (320, 100), Radius, ColorVal, , , ASPECT
        PAINT (320, 100), ColorVal
        NEXT
    END SUB


    ' ===================== ChangePalette =====================
    '  This procedure rotates the palette by one each time it
    '  is called. For example, after the first call to
    '  ChangePalette, PaletteArray(1) = 2, PaletteArray(2) = 3,
    '  . . . , PaletteArray(14) = 15, and PaletteArray(15) = 1
    ' =========================================================

    SUB ChangePalette STATIC
        FOR I = 1 TO 15
        PaletteArray(I) = (PaletteArray(I) MOD 15) + 1
        NEXT I
        PALETTE USING PaletteArray(0) ' Shift the color displayed
                                    ' by each of the attributes.
    END SUB


5.8  Painting Shapes

    Section 5.3.2.2 above shows how to draw a box with the LINE statement's B
    option, then paint the box by appending the F (for fill) option:

    SCREEN 1

    ' Draw a square, then paint the interior with color 1
    ' (cyan in the default palette):
    LINE (50, 50)-(110, 100), 1, BF

    With BASIC's PAINT statement, you can fill any enclosed figure with any
    color you choose. PAINT also allows you to fill enclosed figures with your
    own custom patterns, such as stripes or checks, as shown in Section
    5.8.2, "Painting with Patterns."

5.8.1  Painting with Colors

    To paint an enclosed shape with a solid color, use this form of the PAINT
    statement:

    PAINT[[STEP]](x, y) [[,[[interior]],[[border]]]]

    Here, x, y are the coordinates of a point in the interior of the figure
    you want to paint, interior is the number for the color you want to paint
    with, and border is the color number for the outline of the figure.

    For example, the following program lines draw a circle in cyan, then paint
    the inside of the circle magenta:

    SCREEN 1
    CIRCLE (160, 100), 50, 1
    PAINT (160, 100), 2, 1

    The following three rules apply when painting figures:

    1. The coordinates given in the PAINT statement must refer to a point
        inside the figure.

        For example, any one of the following statements would have the same
        effect as the PAINT statements shown in the two preceding examples,
        since all of the coordinates identify points in the interior of the
        circle:

        PAINT (150, 90), 2, 1
        PAINT (170, 110), 2, 1
        PAINT (180, 80), 2, 1

        In contrast, since (5, 5) identifies a point outside the circle, the
        next statement would paint all of the screen except the inside of the
        circle, leaving it colored with the current background color:

        PAINT (5, 5), 2, 1

        If the coordinates in a PAINT statement specify a point right on the
        border of the figure, then no painting occurs:

        LINE (50, 50)-(150, 150), , B  ' Draw a box.
        PAINT (50, 100)  ' The point with coordinates
                        ' (50, 100) is on the top edge of the
                        ' box, so no painting occurs.

    2. The figure must be completely enclosed; otherwise, the paint color will
        "leak out," filling the entire screen or viewport (or any larger figure
        completely enclosing the first one).

        For example, in the following program, the CIRCLE statement draws an
        ellipse that is not quite complete (there is a small gap on the right
        side); the LINE statement then encloses the partial ellipse inside a
        box. Even though painting starts in the interior of the ellipse, the
        paint color flows through the gap and fills the entire box.

        SCREEN 2
        CONST PI = 3.141592653589#
        CIRCLE (300, 100), 80, , 0, 1.9 * PI, 3
        LINE (200, 10)-(400, 190), , B
        PAINT (300, 100)

    3. If you are painting an object a different color from the one used to
        outline the object, you must use the border option to tell PAINT where
        to stop painting.

        For example, the following program draws a triangle outlined in green
        (attribute 1 in palette 0) and then tries to paint the interior of the
        triangle red (attribute 2). However, since the PAINT statement doesn't
        indicate where to stop painting, it paints the entire screen red.

        SCREEN 1
        COLOR , 0

        LINE (10, 25)-(310, 25), 1
        LINE -(160, 175), 1
        LINE -(10, 25), 1

        PAINT (160, 100), 2

        Making the following change to the PAINT statement (choose red for the
        interior and stop when a border colored green is reached) produces the
        desired effect:

        PAINT (160, 100), 2, 1

        Note that you don't have to specify a border color in the PAINT
        statement if the paint color is the same as the border color.

        LINE (10, 25)-(310, 25), 1
        LINE -(160, 175), 1
        LINE -(10, 25), 1

        PAINT (160, 100), 1

5.8.2  Painting with Patterns: Tiling

    You can use the PAINT statement to fill any enclosed figure with a
    pattern; this process is known as "tiling." A "tile" is the pattern's
    basic building block. The process is identical to laying down tiles on a
    floor. When you use tiling, the argument interior in the syntax for PAINT
    is a string expression, rather than a number. While interior can be any
    string expression, a convenient way to define tile patterns uses the
    following form for interior:

    CHR$(arg1) + CHR$(arg2) + CHR$(arg3) + ... + CHR$(argn)

    Here, arg1, arg2, and so forth are eight-bit integers. See Sections
    5.8.2.2-5.8.2.4 below for an explanation of how these eight-bit integers
    are derived.

    5.8.2.1  Pattern-Tile Size in Different Screen Modes

    Each tile for a pattern is composed of a rectangular grid of pixels. This
    tile grid can have up to 64 rows in all screen modes. However, the number
    of pixels in each row depends on the screen mode.

    Here is why the length of each tile row varies according to the screen
    mode: although the number of bits in each row is fixed at eight (the
    length of an integer), the number of pixels these eight bits can represent
    decreases as the number of color attributes in a given screen mode
    increases. For example, in screen mode 2, which has only 1 color
    attribute, the number of bits per pixel is 1; in screen mode 1, which has
    4 different attributes, the number of bits per pixel is 2; and in the EGA
    screen mode 7, which has 16 attributes, the number of bits per pixel is 4.
    The following formula allows you to compute the bits per pixel in any
    given screen mode:

    bits-per-pixel = log2(numattributes)

    Here, numattributes is the number of color attributes in that screen mode.
    (The on-line QB Advisor has this information.)

    Thus, the length of a tile row is eight pixels in screen mode 2 (eight
    bits divided by one bit per pixel), but only four pixels in screen mode 1
    (eight bits divided by two bits per pixel).

    The next three sections show the step-by-step process involved in creating
    a pattern tile. Section 5.8.2.2 shows how to make a monochrome pattern in
    screen mode 2. Next, Section 5.8.2.3 shows how to make a multicolored
    pattern in screen mode 1. Finally, if you have an EGA, read Section
    5.8.2.4 to see how to make a multicolored pattern in screen mode 8.

    5.8.2.2  Creating a Single-Color Pattern in Screen Mode 2

    The following steps show how to define and use a pattern tile that
    resembles the letter "M":

    1. Draw the pattern for a tile in a grid with 8 columns and however many
        rows you need (up to 64). In this example, the tile has 6 rows; an
        asterisk (*) in a box means the pixel is on:

        ┌──────────────────────────────────────────────────────────────────┐
        │            1 pixel                                               │
        │            ┌──┴───┐                                              │
        │          ┌ ┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐     │
        │ 1 pixel ─┤ │  *  │     │     │     │     │  *  │     │     │     │
        │          └ ├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤     │
        │            │  *  │  *  │     │     │  *  │  *  │     │     │     │
        │            ├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤     │
        │            │  *  │     │  *  │  *  │     │  *  │     │     │     │
        │            ├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤     │
        │            │  *  │     │     │     │     │  *  │     │     │     │
        │            ├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤     │
        │            │  *  │     │     │     │     │  *  │     │     │     │
        │            ├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤     │
        │            │  *  │     │     │     │     │  *  │     │     │     │
        │            ├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤     │
        │            │     │     │     │     │     │     │     │     │     │
        │            └─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘     │
        │                                                                  │
        └──────────────────────────────────────────────────────────────────┘

    2. Next, translate each row of pixels to an eight-bit number, with a 1
        meaning the pixel is on, and a 0 meaning the pixel is off:

        ┌─────────────────────────────────────────────────────────────────┐
        │                                                                 │
        │        ┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐        │
        │        │  1  │  0  │  0  │  0  │  0  │  1  │  0  │  0  │        │
        │        ├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤        │
        │        │  1  │  1  │  0  │  0  │  0  │  1  │  0  │  0  │        │
        │        ├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤        │
        │        │  1  │  0  │  1  │  1  │  0  │  1  │  0  │  0  │        │
        │        ├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤        │
        │        │  1  │  0  │  0  │  0  │  0  │  1  │  0  │  0  │        │
        │        ├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤        │
        │        │  1  │  0  │  0  │  0  │  0  │  1  │  0  │  0  │        │
        │        ├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤        │
        │        │  1  │  0  │  0  │  0  │  0  │  1  │  0  │  0  │        │
        │        ├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤        │
        │        │  0  │  0  │  0  │  0  │  0  │  0  │  0  │  0  │        │
        │        └─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘        │
        │                                                                 │
        │                                                                 │
        └─────────────────────────────────────────────────────────────────┘

    3. Convert the binary numbers given in step 2 to hexadecimal integers:

        10000100 = &H84
        11001100 = &HCC
        10110100 = &HB4
        10000100 = &H84
        10000100 = &H84
        00000000 = &H00

        These integers do not have to be hexadecimal; they could be decimal or
        octal. However, binary to hexadecimal conversion easier. To convert
        from binary to hexadecimal, read the binary number from right to left.
        Each group of four digits is then converted to its hexadecimal
        equivalent, as shown here:

        ┌───────────────────────────────────────────────────────────┐
        │                                                           │
        │                Binary         1010    1001    1111        │
        │                              └─┬──┘  └─┬──┘  └─┬──┘       │
        │                                │       │       │          │
        │                Hexadecimal     A       9       F          │
        │                                                           │
        └───────────────────────────────────────────────────────────┘

        Table 5.3 lists four-bit binary sequences and their hexadecimal
        equivalents.

    4. Create a string by concatenating the characters with the ASCII values
        from step 3 (use the CHR$ function to get these characters):

        Tile$ = CHR$(&H84) + CHR$(&HCC) + CHR$(&HB4)
        Tile$ = Tile$ + CHR$(&H84) + CHR$(&H84) + CHR$(&H00)

    5. Draw a figure and paint its interior, using PAINT and the string
        argument from step 4:

        PAINT (X, Y), Tile$

    Table 5.3  Binary to Hexadecimal Conversion
╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Binary Number            Hexadecimal Number
    ──────────────────────────────────────────────────────────────────────────
    0000                     0

    0001                     1

    0010                     2

    0011                     3

    0100                     4

    0101                     5
    Binary Number            Hexadecimal Number
    ──────────────────────────────────────────────────────────────────────────
    0101                     5

    0110                     6

    0111                     7

    1000                     8

    1001                     9

    1010                     A

    1011                     B

    1100                     C

    1101                     D

    1110                     E
    Binary Number            Hexadecimal Number
    ──────────────────────────────────────────────────────────────────────────
    1110                     E

    1111                     F
    ──────────────────────────────────────────────────────────────────────────


    Example

    The following example draws a circle and then paints the circle's interior
    with the pattern created in the preceding steps:

    SCREEN 2
    CLS
    Tile$ = CHR$(&H84) + CHR$(&HCC) + CHR$(&HB4)
    Tile$ = Tile$ + CHR$(&H84) + CHR$(&H84) + CHR$(&H00)
    CIRCLE STEP(0, 0), 150
    PAINT STEP(0, 0), Tile$

    Output


    ┌────────────────────────────────────┐
    │                                    │
    │   Figure 5.5 can be found on       │
    │   page 184 of the printed manual.  │
    │                                    │
    └────────────────────────────────────┘

    Figure 5.5  Patterned Circle

    5.8.2.3  Creating a Multicolor Pattern in Screen Mode 1

    The following steps show how to create a multicolor pattern consisting of
    alternating diagonal stripes of cyan and magenta (or green and red in
    palette 0):

    1. Draw the pattern for a tile in a grid with four columns (four columns
        because each row of pixels is stored in an eight-bit integer and each
        pixel in screen mode 1 requires two bits) and however many rows you
        need (up to 64). In this example, the tile has four rows, as shown in
        the next diagram:

        ┌──────────────────────────────────────────────────────────────────┐
        │                                                                  │
        │              1 pixel                                             │
        │             ┌────┴───┐                                           │
        │           ┌─┌────────┬────────┬────────┬────────┐                │
        │   1 pixel ┤ │  cyan  │magenta │magenta │magenta │                │
        │           │ │        │        │        │        │                │
        │           └─├────────┼────────┼────────┼────────┤                │
        │             │ magenta│ cyan   │magenta │magenta │                │
        │             │        │        │        │        │                │
        │             ├────────┼────────┼────────┼────────┤                │
        │             │ magenta│ magenta│ cyan   │magenta │                │
        │             │        │        │        │        │                │
        │             ├────────┼────────┼────────┼────────┤                │
        │             │ magenta│ magenta│ magenta│ cyan   │                │
        │             │        │        │        │        │                │
        │             └────────┴────────┴────────┴────────┘                │
        │                                                                  │
        └──────────────────────────────────────────────────────────────────┘

    2. Convert the colors to their respective color numbers in binary
        notation, as shown below (be sure to use two-bit values, so 1 that =
        binary 01 and 2 = binary 10):

        ┌──────────────────────────────────────────────────────────────────┐
        │                                                                  │
        │              2 bits                                              │
        │             ┌───┴────┐                                           │
        │             ┌────────┬────────┬────────┬────────┐                │
        │             │  01    │  10    │  10    │  10    │                │
        │             │        │        │        │        │                │
        │             ├────────┼────────┼────────┼────────┤                │
        │             │  10    │  01    │  10    │  10    │                │
        │             │        │        │        │        │                │
        │             ├────────┼────────┼────────┼────────┤                │
        │             │  10    │  10    │  01    │  10    │                │
        │             │        │        │        │        │                │
        │             ├────────┼────────┼────────┼────────┤                │
        │             │  10    │  10    │  10    │  01    │                │
        │             │        │        │        │        │                │
        │             └────────┴────────┴────────┴────────┘                │
        │                                                                  │
        └──────────────────────────────────────────────────────────────────┘

    3. Convert the binary numbers from step 2 to hexadecimal integers:

        01101010 = &H6A
        10011010 = &H9A
        10100110 = &HA6
        10101001 = &HA9

    4. Create a string by concatenating the characters with the ASCII values
        from step 3 (use the CHR$ function to get these characters):

        Tile$ = CHR$(&H6A) + CHR$(&H9A) + CHR$(&HA6) + CHR$(&HA9)

    5. Draw a figure and paint its interior using PAINT and the string
        argument from step 4:

        PAINT (X, Y), Tile$

    The following program draws a triangle and then paints its interior with
    the pattern created in the preceding steps:

    SCREEN 1

    ' Define a pattern:
    Tile$ = CHR$(&H6A) + CHR$(&H9A) + CHR$(&HA6) + CHR$(&HA9)

    ' Draw a triangle in white (color 3):
    LINE (10, 25)-(310, 25)
    LINE -(160, 175)
    LINE -(10, 25)

    ' Paint the interior of the triangle with the pattern:
    PAINT (160, 100), Tile$

    Note that if the figure you want to paint is outlined in a color that is
    also contained in the pattern, then you must give the border argument with
    PAINT as shown below; otherwise, the pattern spills over the edges of the
    figure:

    SCREEN 1

    ' Define a pattern:
    Tile$ = CHR$(&H6A) + CHR$(&H9A) + CHR$(&HA6) + CHR$(&HA9)

    ' Draw a triangle in magenta (color 2):
    LINE (10, 25)-(310, 25), 2
    LINE -(160, 175), 2
    LINE -(10, 25), 2

    ' Paint the interior of the triangle with the pattern,
    ' adding the border argument (, 2) to tell PAINT
    ' where to stop:
    PAINT (160, 100), Tile$, 2

    Sometimes, after painting a figure with a solid color or pattern, you may
    want to repaint that figure, or some part of it, with a new pattern. If
    the new pattern contains two or more adjacent rows that are the same as
    the figure's current background, you will find that tiling does not work.
    Instead, the pattern starts to spread, finds itself surrounded by pixels
    that are the same as two or more of its rows, then stops.

    You can alleviate this problem by using the background argument with PAINT
    if there are at most two adjacent rows in your new pattern that are the
    same as the old background. PAINT with background has the following
    syntax:

    PAINT[[ STEP]] (x, y) [[,[[ interior]][[,[[ border]][[,background]] ]]]]

    The background argument is a string character of the form CHR$(n) that
    specifies the rows in the pattern tile that are the same as the figure's
    current background. In essence, background tells PAINT to skip over these
    rows when repainting the figure. The next example clarifies how this
    works:

    SCREEN 1

    ' Define a pattern (two rows each of cyan, magenta, white):
    Tile$ = CHR$(&H55) + CHR$(&H55) + CHR$(&HAA)
    Tile$ = Tile$ + CHR$(&HAA) + CHR$(&HFF) + CHR$(&HFF)

    ' Draw a triangle in white (color number 3):
    LINE (10, 25)-(310, 25)
    LINE -(160, 175)
    LINE -(10, 25)

    ' Paint the interior magenta:
    PAINT (160, 100), 2, 3

    ' Wait for a keystroke:
    Pause$ = INPUT$(1)

    ' Since the background is already magenta, CHR$(&HAA) tells
    ' PAINT to skip over the magenta rows in the pattern tile:
    PAINT (160, 100), Tile$, , CHR$(&HAA)

    5.8.2.4  Creating a Multicolor Pattern in Screen Mode 8

    In the EGA and VGA screen modes, it takes more than one eight-bit integer
    to define one row in a pattern tile. In these screen modes, a row is
    composed of several layers of eight-bit integers. This is because a pixel
    is represented three dimensionally in a stack of "bit planes" rather than
    sequentially in a single plane, as is the case with screen modes 1 and 2.
    For example, screen mode 8 has four of these bit planes. Each of the four
    bits per pixel in this screen mode is on a different plane.

    The following steps diagram the process for creating a multicolor pattern
    consisting of rows of alternating yellow and magenta. Note how each row in
    the pattern tile is represented by four parallel bytes:

    1. Define one row of pixels in the pattern tile. Each pixel in the row
        takes four bits, and each bit is in a different plane, as shown below:

        ┌───────────────────────────────────────────────────────────────────────
        │
        │                  Read bits for each
        │                 plane in this order.
        │                ────────────────────────────────→
        │               ↑  ─────────────────────────────────
        │              / / 1 / 1 / 0 / 0 / 0 / 0 / 1 / 1  /────→ CHR$ (&HC3) + /
        │Read bits for/ / 0 / 0 / 1 / 1 / 1 / 1 / 0 / 0  /────→ CHR$ (&H3C) + /
        │each pixel  / / 1 / 1 / 1 / 1 / 1 / 1 / 1 / 1  /────→ CHR$ (&HFF) + /AD
        │in this    / / 0 / 0 / 1 / 1 / 1 / 1 / 0 / 0  /────→ CHR$ (&H3C)  /CHR$
        │order.    / /────────────────────────────────/                   ↓ valu
        │     Magenta ─┘   │   │   │   │   │    │   │                       in t
        │         Magenta ─┘   │   │   │   │    │   │                       orde
        │              Yellow ─┘   │   │   │    │   │
        │                  Yellow ─┘   │   │    │   │   ┌───────────────────────
        │                      Yellow ─┘   │    │   │   │Color   Decimal    Bina
        │                          Yellow ─┘    │   │   │Yellow  14         1110
        │                              Magenta ─┘   │   │Magenta  5         0101
        │                                  Magenta ─┘   └───────────────────────
        │
        └───────────────────────────────────────────────────────────────────────

        Add the CHR$ values for all four bit planes to get one tile byte. This
        row is repeated in the pattern tile, so

        Row$(1) = Row$(2) =
            CHR$(&HC3) + CHR$(&H3C) + CHR$(&HFF) + CHR$(&H3C)

    2. Define another row of pixels in the pattern tile, as follows:

        ┌───────────────────────────────────────────────────────────────────────
        │
        │                  Read bits for each
        │                 plane in this order.
        │                ────────────────────────────────→
        │               ↑  ─────────────────────────────────
        │              / / 0 / 0 / 1 / 1 / 1 / 1 / 0 / 0  /────→ CHR$ (&HC3) + /
        │Read bits for/ / 1 / 1 / 0 / 0 / 0 / 0 / 1 / 1  /────→ CHR$ (&H3C) + /
        │each pixel  / / 1 / 1 / 1 / 1 / 1 / 1 / 1 / 1  /────→ CHR$ (&HFF) + /AD
        │in this    / / 1 / 1 / 0 / 0 / 0 / 0 / 1 / 1  /────→ CHR$ (&H3C)  /CHR$
        │order.    / /────────────────────────────────/                   ↓ valu
        │      Yellow ─┘   │   │   │   │   │    │   │                       in t
        │          Yellow ─┘   │   │   │   │    │   │                       orde
        │             Magenta ─┘   │   │   │    │   │
        │                 Magenta ─┘   │   │    │   │   ┌───────────────────────
        │                     Magenta ─┘   │    │   │   │Color   Decimal    Bina
        │                         Magenta ─┘    │   │   │Yellow  14         1110
        │                               Yellow ─┘   │   │Magenta  5         0101
        │                                   Yellow ─┘   └───────────────────────
        │
        └───────────────────────────────────────────────────────────────────────

        This row is also repeated in the pattern tile, so

        Row$(3) = Row$(4) =
            CHR$(&H3C) + CHR$(&HC3) + CHR$(&HFF) + CHR$(&HC3)

    Example

    The following example draws a box, then paints its interior with the
    pattern created in the preceding steps:

    SCREEN 8
    DIM Row$(1 TO 4)

    ' Two rows of alternating magenta and yellow:
    Row$(1) = CHR$(&HC3) + CHR$(&H3C) + CHR$(&HFF) + CHR$(&H3C)
    Row$(2) = Row$(1)

    ' Invert the pattern (two rows of alternating yellow
    ' and magenta):
    Row$(3) = CHR$(&H3C) + CHR$(&HC3) + CHR$(&HFF) + CHR$(&HC3)
    Row$(4) = Row$(3)

    ' Create a pattern tile from the rows defined above:
    FOR I% = 1 TO 4
        Tile$ = Tile$ + Row$(I%)
    NEXT I%

    ' Draw box and fill it with the pattern:
    LINE (50, 50)-(570, 150), , B
    PAINT (320, 100), Tile$


5.9  DRAW: a Graphics Macro Language

    The DRAW statement is a miniature language by itself. It draws and paints
    images on the screen using a set of one- or two-letter commands, known as
    "macros," embedded in a string expression.

    DRAW offers the following advantages over the other graphics statements
    discussed so far:

    ■ The macro string argument to DRAW is compact: a single, short string can
    produce the same output as several LINE statements.

    ■ Images created with DRAW can easily be scaled──that is, enlarged or
    reduced in size──by using the S macro in the macro string.

    ■ Images created with DRAW can be rotated any number of degrees by using
    the TA macro in the macro string.

    Consult the QB Advisor for more information.

    Example

    The following program gives a brief introduction to the movement macros U,
    D, L, R, E, F, G, and H; the "plot/don't plot" macro B; and the color
    macro C. This program draws horizontal, vertical, and diagonal lines in
    different colors, depending on which DIRECTION key on the numeric keypad
    (UP, DOWN, LEFT, PGUP, PGDN, and so on) is pressed.

    This program is in the file named PLOTTER.BAS on the QuickBASIC
    distribution disks.

    ' Values for keys on the numeric keypad and the spacebar:
    CONST UP = 72, DOWN = 80, LFT = 75, RGHT = 77
    CONST UPLFT = 71, UPRGHT = 73, DOWNLFT = 79, DOWNRGHT = 81
    CONST SPACEBAR = " "

    ' Null$ is the first character of the two-character INKEY$
    ' value returned for direction keys such as UP and DOWN:
    Null$ = CHR$(0)

    ' Plot$ = "" means draw lines; Plot$ = "B" means
    ' move graphics cursor, but don't draw lines:
    Plot$ = ""

    PRINT "Use the cursor movement keys to draw lines."
    PRINT "Press spacebar to toggle line drawing on and off."
    PRINT "Press <ENTER> to begin. Press q to end the program."
    DO : LOOP WHILE INKEY$ = ""

    SCREEN 1

    DO
        SELECT CASE KeyVal$
        CASE Null$ + CHR$(UP)
            DRAW Plot$ + "C1 U2"
        CASE Null$ + CHR$(DOWN)
            DRAW Plot$ + "C1 D2"
        CASE Null$ + CHR$(LFT)
            DRAW Plot$ + "C2 L2"
        CASE Null$ + CHR$(RGHT)
            DRAW Plot$ + "C2 R2"
        CASE Null$ + CHR$(UPLFT)
            DRAW Plot$ + "C3 H2"
        CASE Null$ + CHR$(UPRGHT)
            DRAW Plot$ + "C3 E2"
        CASE Null$ + CHR$(DOWNLFT)
            DRAW Plot$ + "C3 G2"
        CASE Null$ + CHR$(DOWNRGHT)
            DRAW Plot$ + "C3 F2"
        CASE SPACEBAR
            IF Plot$ = "" THEN Plot$ = "B " ELSE Plot$ = ""
        CASE ELSE
            ' The user pressed some key other than one of the
            ' direction keys, the spacebar, or "q," so
            ' don't do anything.
        END SELECT

        KeyVal$ = INKEY$

    LOOP UNTIL KeyVal$ = "q"

    SCREEN 0, 0             ' Restore the screen to 80-column
    WIDTH 80                ' text mode and end.
    END

    Output

    Here's a sample sketch created with this program.

    ┌──────────────────────────────────────────────────────────────────┐
    │                                                                  │
    │                                                                  │
    │        / ────\ │     │ │ ┌────\  │   /        │                  │
    │        │     │ │     │ │ │       │ /          │                  │
    │        │     │ │     │ │ │       /\           │                  │
    │        │     │ │     │ │ │       │  \         │                  │
    │        \────\/ \─────/ │ \─────/ │    \       ▬                  │
    │              \                                                   │
    │        ─────────────────────────────────                         │
    │                                                                  │
    │          ───────────────────────────────                         │
    │                                                                  │
    │             ────────────────────────────                         │
    │                                                                  │
    └──────────────────────────────────────────────────────────────────┘


5.10  Basic Animation Techniques

    Using only the graphics statements covered in earlier sections, you can do
    simple animation of objects on the screen. For instance, you can first
    draw a circle with CIRCLE, then redraw it with the background color to
    erase it, and finally recalculate the circle's center point and draw it in
    a new location.

    This technique works well enough for simple figures, but its disadvantages
    become apparent when animating more complex images. Even though the
    graphics statements are very fast, you can still notice the lag. Moreover,
    it is not possible to preserve the background with this method: when you
    erase the object, you also erase whatever was already on the screen.

    Two statements allow you to do high-speed animation: GET and PUT. You can
    create an image using output from statements such as PSET, LINE, CIRCLE,
    or PAINT, then take a "snapshot" of that image with GET, copying the image
    to memory. With PUT, you can then reproduce the image stored with GET
    anywhere on the screen or viewport.

5.10.1  Saving Images with GET

    After you have created the original image on the screen, you need to
    calculate the x- and y-coordinates of a rectangle large enough to hold the
    entire image. You then use GET to copy the entire rectangle to memory. The
    syntax for the graphics GET statement is

    GET[[STEP]](x1, y1) -[[STEP]](x2, y2), array-name

    where (x1, y1) and (x2, y2) give the coordinates of a rectangle's
    upper-left and lower-right corners. The argument array-name refers to any
    numeric array. The size specified in a DIM statement for array-name
    depends on the following three factors:

    1. The height and width of the rectangle enclosing the image

    2. The screen mode chosen for graphics output

    3. The type of the array (integer, long integer, single precision, or
        double precision)

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    Although the array used to store images can have any numeric type, it is
    strongly recommended that you use only integer arrays. All possible
    graphics patterns on the screen can be represented by integers. This is
    not the case, however, with single-precision or double-precision real
    numbers: some graphics patterns are not valid real numbers, and it could
    lead to unforeseen results if these patterns were stored in a
    real-number array.
    ──────────────────────────────────────────────────────────────────────────

    The formula for calculating the size in bytes of arrayname is

    size-in-bytes = 4 + height * planes * INT((width * bits-per-pixel/planes +
    7)/8)

    where height and width are the dimensions, in number of pixels, of the
    rectangle to get, and the value for bits-per-pixel depends on the number
    of colors available in the given screen mode. More colors mean more bits
    are required to define each pixel. In screen mode 1, two bits define a
    pixel, while in screen mode 2, one bit is enough. (See Section 5.8.2.1
    above, "Pattern-Tile Size in Different Screen Modes," for the general
    formula for bits-per-pixel.) The following list shows the value for planes
    for each of the screen modes:

    Screen Mode                                             Number of Bit
                                                            Planes
    ──────────────────────────────────────────────────────────────────────────
    1, 2, 11, and 13                                        1

    9 (64K of video memory) and 10                          2

    7, 8, 9 (more than 64K of video memory), and 12         4
    ──────────────────────────────────────────────────────────────────────────

    To get the number of elements that should be in the array, divide the
    size-in-bytes by the number of bytes for one element in the array. This is
    where the type of the array comes into play. If it is an integer array,
    each element takes two bytes of memory (the size of an integer), so
    size-in-bytes should be divided by two to get the actual size of the
    array. Similarly, if it is a long integer array, size-in-bytes should be
    divided by four (since one long integer requires four bytes of memory),
    and so on. If it is single precision, divide by four; if it is double
    precision, divide by eight.

    The following steps show how to calculate the size of an integer array
    large enough to hold a rectangle in screen mode 1 with coordinates (10,
    40) for the upper-left corner and (90, 80) for the lower-right corner:

    1. Calculate the height and width of the rectangle:

        RectHeight = ABS(y2 - y1) + 1 = 80 - 40 + 1 = 41
        RectWidth = ABS(x2 - x1) + 1 = 90 - 10 + 1 = 81

        Remember to add one after subtracting y1 from y2 or x1 from x2. For
        example, if x1 = 10 and x2 = 20, then the width of the rectangle is 20
        - 10 + 1, or 11.

    2. Calculate the size in bytes of the integer array:

        ByteSize = 4 + RectHeight * INT((RectWidth * BitsPerPixel + 7) / 8)
                = 4 + 41 * INT((81 * 2 + 7) / 8)
                = 4 + 41 * INT(169 / 8)
                = 4 + 41 * 21
                = 865

    3. Divide the size in bytes by the bytes per element (two for integers)
        and round the result up to the nearest whole number:

        865 / 2 = 433

    Therefore, if the name of the array is Image, the following DIM statement
    ensures that Image is big enough to copy the pixel information in the
    rectangle:

    DIM Image (1 TO 433) AS INTEGER

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    Although the GET statement uses view coordinates after a WINDOW
    statement, you must use physical coordinates to calculate the size of
    the array used in GET. (See Section 5.6 above, "Redefining Viewport
    Coordinates with WINDOW," for more information on WINDOW and how to
    convert view coordinates to physical coordinates.)
    ──────────────────────────────────────────────────────────────────────────

    Note that the steps outlined above give the minimum size required for the
    array; however, any larger size will do. For example, the following
    statement also works:

    DIM Image (1 TO 500) AS INTEGER

    Example

    The following program draws an ellipse and paints its interior. A GET
    statement copies the rectangular area containing the ellipse into memory.
    (Section 5.10.2 below, "Moving Images with PUT," shows how to use the PUT
    statement to reproduce the ellipse in a different location.)

    SCREEN 1

    ' Dimension an integer array large enough
    ' to hold the rectangle:
    DIM Image (1 TO 433) AS INTEGER

    ' Draw an ellipse inside the rectangle, using magenta for
    ' the outline and painting the interior white:
    CIRCLE (50, 60), 40, 2, , , .5
    PAINT (50, 60), 3, 2

    ' Store the image of the rectangle in the array:
    GET (10, 40)-(90, 80), Image

5.10.2  Moving Images with PUT

    While the GET statement allows you to take a snapshot of an image, PUT
    allows you to paste that image anywhere you want on the screen. A
    statement of the form

    PUT (x, y), array-name [[, actionverb]]

    copies the rectangular image stored in array-name back to the screen and
    places its upper-left corner at the point with coordinates (x, y). Note
    that only one coordinate pair appears in PUT.

    If a WINDOW statement appears in the program before PUT, the coordinates x
    and y refer to the lower-left corner of the rectangle. WINDOW SCREEN,
    however, does not have this effect; that is, after WINDOW SCREEN, x and y
    still refer to the upper-left corner of the rectangle.

    For example, adding the next line to the last example in Section 5.10.1
    above causes an exact duplicate of the painted ellipse to appear on the
    right side of the screen much more quickly than redrawing and repainting
    the same figure with CIRCLE and PAINT:

    PUT (200, 40), Image

    Take care not to specify coordinates that would put any part of the image
    outside the screen or active viewport, as in the following statements:

    SCREEN 2
    .
    .
    .
    ' Rectangle measures 141 pixels x 91 pixels:
    GET (10, 10)-(150, 100), Image
    PUT (510, 120), Image

    Unlike other graphics statements such as LINE or CIRCLE, PUT does not clip
    images lying outside the viewport. Instead, it produces an error message
    reading Illegal function call.

    One of the other advantages of the PUT statement is that you can control
    how the stored image interacts with what is already on the screen by using
    the argument actionverb. The actionverb argument can be one of the
    following options: PSET, PRESET, AND, OR, or XOR.

    If you do not care what happens to the existing screen background, use the
    PSET option, since it transfers an exact duplicate of the stored image to
    the screen and overwrites anything that was already there.

    Table 5.4 shows how other options affect the way the PUT statement causes
    pixels in a stored image to interact with pixels on the screen. In this
    table, a 1 means a pixel is on and a 0 means a pixel is off.

    Table 5.4  The Effect of Different Action Options in Screen Mode 2
╓┌─┌──────────────────┌─────────────────┌──────────────────┌─────────────────╖
                                        Pixel on Screen    Pixel on Screen
                        Pixel in          before PUT         after PUT
    Action Option      Stored Image      Statement          Statement
    ──────────────────────────────────────────────────────────────────────────
    PSET               0                 0                  0

                        0                 1                  0

                        1                 0                  1

                        1                 1                  1
                                        Pixel on Screen    Pixel on Screen
                        Pixel in          before PUT         after PUT
    Action Option      Stored Image      Statement          Statement
    ──────────────────────────────────────────────────────────────────────────
                        1                 1                  1

    PRESET             0                 0                  1

                        0                 1                  1

                        1                 0                  0

                        1                 1                  0

    AND                0                 0                  0

                        0                 1                  0

                        1                 0                  0

                        1                 1                  1
                                        Pixel on Screen    Pixel on Screen
                        Pixel in          before PUT         after PUT
    Action Option      Stored Image      Statement          Statement
    ──────────────────────────────────────────────────────────────────────────
                        1                 1                  1

    OR                 0                 0                  0

                        0                 1                  1

                        1                 0                  1

                        1                 1                  1

    XOR                0                 0                  0

                        0                 1                  1

                        1                 0                  1

                        1                 1                  0
                                        Pixel on Screen    Pixel on Screen
                        Pixel in          before PUT         after PUT
    Action Option      Stored Image      Statement          Statement
    ──────────────────────────────────────────────────────────────────────────
                        1                 1                  0
    ──────────────────────────────────────────────────────────────────────────


    As you can see, these options cause a PUT statement to treat pixels the
    same way logical operators treat numbers. The PRESET option is like the
    logical operator NOT in that it inverts the pixels in the stored image,
    regardless of what was on the screen. The options AND, OR, and XOR are
    identical to the logical operators with the same names; for example, the
    logical operation

    1 XOR 1

    gives 0 as its result, just as using the XOR option turns a pixel off when
    both the pixel in the image and the pixel in the background are on.

    The output from the following program shows the same image superimposed
    over a filled rectangle using each of the five options discussed above:

    SCREEN 2

    DIM CircImage (1 TO 485) AS INTEGER

    ' Draw and paint an ellipse then store its image with GET:
    CIRCLE (22, 100), 80, , , , 4
    PAINT (22, 100)
    GET (0, 20)-(44, 180), CircImage
    CLS

    ' Draw a box and fill it with a pattern:
    LINE (40, 40)-(600, 160), , B
    Pattern$ = CHR$(126) + CHR$(0) + CHR$(126) + CHR$(126)
    PAINT (50, 50), Pattern$

    ' Put the images of the ellipse over the box
    ' using the different action options:
    PUT (100, 20), CircImage, PSET
    PUT (200, 20), CircImage, PRESET
    PUT (300, 20), CircImage, AND
    PUT (400, 20), CircImage, OR
    PUT (500, 20), CircImage, XOR

    Output

    ┌────────────────────────────────────┐
    │                                    │
    │     The output for this example    │
    │     can be found on page 199 of    │
    │     the printed manual.            │
    │                                    │
    └────────────────────────────────────┘

    In screen modes supporting color, the options PRESET, AND, OR, and XOR
    produce a more complicated interaction, since color involves more than
    simply turning a pixel on or off. However, the analogy made above between
    these options and logical operators still holds in these modes. For
    example, if the current pixel on the screen is color 1 (cyan in palette 1)
    and the pixel in the overlaid image is color 2 (magenta in palette 1),
    then the color of the resulting pixel after a PUT statement depends on the
    option, as shown for just 2 of the 16 different combinations of image
    color and background color in Table 5.5.

    Table 5.5  The Effect of Different Action Options on Color in Screen Mode
    1 (Palette 1)
                                        Pixel Color on     Pixel Color on
                        Pixel Color in    Screen before      Screen after PUT
    Action Option      Stored Image      PUT Statement      Statement
    ──────────────────────────────────────────────────────────────────────────
    PSET               10 (magenta)      01 (cyan)          10 (magenta)

    PRESET             10 (magenta)      01 (cyan)          01 (cyan)

    AND                10 (magenta)      01 (cyan)          00 (black)

    OR                 10 (magenta)      01 (cyan)          11 (white)

    XOR                10 (magenta)      01 (cyan)          11 (white)
    ──────────────────────────────────────────────────────────────────────────

    In palette 1, cyan is assigned to attribute 1 (01 binary), magenta is
    assigned to attribute 2 (10 binary), and white is assigned to attribute 3
    (11 binary). If you have an EGA, you can use the PALETTE statement to
    assign different colors to the attributes 1, 2, and 3.

5.10.3  Animation with GET and PUT

    One of the most useful things that can be done with the GET and PUT
    statements is animation. The two options best suited for animation are XOR
    and PSET. Animation done with PSET is faster; but as shown by the output
    from the last program, PSET erases the screen background. In contrast, XOR
    is slower but restores the screen background after the image is moved.
    Animation with XOR is done with the following four steps:

    1. Put the object on the screen with XOR.

    2. Recalculate the new position of the object.

    3. Put the object on the screen a second time at the old location, using
        XOR again, this time to remove the old image.

    4. Go to step 1, but this time put the object at the new location.

    Movement done with these four steps leaves the background unchanged after
    step 3. Flicker can be reduced by minimizing the time between steps 4 and
    1 and by making sure that there is enough time delay between steps 1 and
    3. If more than one object is being animated, every object should be
    processed at once, one step at a time.

    If it is not important to preserve the background, use the PSET option for
    animation. The idea is to leave a border around the image when you copy it
    with the GET statement. If this border is as large or larger than the
    maximum distance the object will move, then each time the image is put in
    a new location, the border erases all traces of the image in the old
    location. This method can be somewhat faster than the method using XOR
    described above, since only one PUT statement is required to move an
    object (although you must move a larger image).

    Examples

    The following example shows how to use PUT with the PSET option to produce
    the effect of a ball bouncing off the bottom and sides of a box. Note in
    the output that follows how the rectangle containing the ball, specified
    in the GET statement, erases the filled box and the printed message.

    This program is in the file named BALLPSET.BAS on the QuickBASIC
    distribution disks.

    DECLARE FUNCTION GetArraySize (WLeft, WRight, WTop,
    WBottom)

    SCREEN 2

    ' Define a viewport and draw a border around it:
    VIEW (20, 10)-(620, 190),,1

    CONST PI = 3.141592653589#

    ' Redefine the coordinates of the viewport with view
    ' coordinates:
    WINDOW (-3.15, -.14)-(3.56, 1.01)

    ' Arrays in program are now dynamic:
    ' $DYNAMIC

    ' Calculate the view coordinates for the top and bottom of a
    ' rectangle large enough to hold the image that will be
    ' drawn with CIRCLE and PAINT:
    WLeft = -.21
    WRight = .21
    WTop = .07
    WBottom = -.07

    ' Call the GetArraySize function,
    ' passing it the rectangle's view coordinates:
    ArraySize% = GetArraySize(WLeft, WRight, WTop, WBottom)

    DIM Array (1 TO ArraySize%) AS INTEGER

    ' Draw and paint the circle:
    CIRCLE (0, 0), .18
    PAINT (0, 0)

    ' Store the rectangle in Array:
    GET (WLeft, WTop)-(WRight, WBottom), Array
    CLS
    ' Draw a box and fill it with a pattern:
    LINE (-3, .8)-(3.4, .2), , B
    Pattern$ = CHR$(126) + CHR$(0) + CHR$(126) + CHR$(126)
    PAINT (0, .5), Pattern$

    LOCATE 21, 29
    PRINT "Press any key to end."

    ' Initialize loop variables:
    StepSize = .02
    StartLoop = -PI
    Decay = 1

    DO
        EndLoop = -StartLoop
        FOR X = StartLoop TO EndLoop STEP StepSize

        ' Each time the ball "bounces" (hits the bottom of the
        ' viewport), the Decay variable gets smaller, making
        ' the height of the next bounce smaller:
        Y = ABS(COS(X)) * Decay - .14
        IF Y < -.13 THEN Decay = Decay * .9

        ' Stop if key pressed or Decay less than .01:
        Esc$ = INKEY$
        IF Esc$ <> "" OR Decay < .01 THEN EXIT FOR

        ' Put the image on the screen. The StepSize offset is
        ' smaller than the border around the circle. Thus,
        ' each time the image moves, it erases any traces
        ' left from the previous PUT (and also erases anything
        ' else on the screen):
        PUT (X, Y), Array, PSET
        NEXT X

        ' Reverse direction:
        StepSize = -StepSize
        StartLoop = -StartLoop
    LOOP UNTIL Esc$ <> "" OR Decay < .01

    END

    FUNCTION GetArraySize (WLeft, WRight, WTop, WBottom) STATIC

        ' Map the view coordinates passed to this function to
        ' their physical-coordinate equivalents:
        VLeft = PMAP(WLeft, 0)
        VRight = PMAP(WRight, 0)
        VTop = PMAP(WTop, 1)
        VBottom = PMAP(WBottom, 1)

    ' Calculate the height and width in pixels
        ' of the enclosing rectangle:
        RectHeight = ABS(VBottom - VTop) + 1
        RectWidth = ABS(VRight - VLeft) + 1

        ' Calculate size in bytes of array:
        ByteSize = 4 + RectHeight * INT((RectWidth + 7) \ 8)

        ' Array is integer, so divide bytes by two:
        GetArraySize = ByteSize \ 2 + 1
    END FUNCTION

    Output

    ┌────────────────────────────────────┐
    │                                    │
    │     The output for this example    │
    │     can be found on page 203 of    │
    │     the printed manual.            │
    │                                    │
    └────────────────────────────────────┘

    Contrast the preceding program with the next program, which uses PUT with
    XOR to preserve the screen's background, according to the four steps
    outlined above. Note how the rectangle containing the ball is smaller than
    in the preceding program, since it is not necessary to leave a border.
    Also note that two PUT statements are required, one to make the image
    visible and another to make it disappear. Finally, observe the empty
    FOR...NEXT delay loop between the PUT statements; this loop reduces the
    flicker that results from the image appearing and disappearing too
    rapidly.

    This program is in the file named BALLXOR.BAS on the QuickBASIC
    distribution disks.

    .
    .
    .
    ' The rectangle is smaller than the one in the previous
    ' program, which means Array is also smaller:
    WLeft = -.18
    WRight = .18
    WTop = .05
    WBottom = -.05
    .
    .
    .
    DO
        EndLoop = -StartLoop
        FOR X = StartLoop TO EndLoop STEP StepSize
        Y = ABS(COS(X)) * Decay - .14

        ' The first PUT statement places the image
        ' on the screen:
        PUT (X,Y), Array, XOR

        ' Use an empty FOR...NEXT loop to delay
        ' the program and reduce image flicker:
        FOR I = 1 TO 5: NEXT I

        IF Y < -.13 THEN Decay = Decay * .9
        Esc$ = INKEY$
        IF Esc$ <> "" OR Decay < .01 THEN EXIT FOR

        ' The second PUT statement erases the image and
        ' restores the background:
        PUT (X, Y), Array, XOR
        NEXT X

        StepSize = -StepSize
        StartLoop = -StartLoop
    LOOP UNTIL Esc$ <> "" OR Decay < .01

    END
    .
    .
    .

    Output

    ┌────────────────────────────────────┐
    │                                    │
    │     The output for this example    │
    │     can be found on page 205 of    │
    │     the printed manual.            │
    │                                    │
    └────────────────────────────────────┘

5.10.4  Animating with Screen Pages

    This section describes an animation technique that utilizes multiple pages
    of your computer's video memory.

    Pages in video memory are analogous to pages in a book. Depending on the
    graphics capability of your computer, what you see displayed on the screen
    may only be part of the video memory available──just as what you see when
    you open a book is only part of the book. However, unlike a book, the
    unseen pages of your computer's video memory can be active; that is, while
    you are looking at one page on the screen, graphics output can be taking
    place on the others. It's as if the author of a book were still writing
    new pages even as you were reading the book.

    The area of video memory visible on the screen is called the "visual
    page," while the area of video memory where graphics statements put their
    output is called the "active page." The SCREEN statement allows you to
    select visual and active screen pages with the following syntax:

    SCREEN[[mode]],[[,[[apage]][[, vpage]]]]

    In this syntax, apage is the number of the active page, and vpage is the
    number of the visual page. The active page and the visual page can be one
    and the same (and are by default when the apage or vpage arguments are not
    used with SCREEN, in which case the value of both arguments is 0).

    You can animate objects on the screen by selecting a screen mode with more
    than one video memory page, then alternating the pages, sending output to
    one or more active pages while displaying finished output on the visual
    page. This technique makes an active page visible only when output to that
    page is complete. Since the viewer sees only a finished image, the display
    is instantaneous.

    Example

    The following program demonstrates the technique discussed above. It
    selects screen mode 7, which has two pages, then draws a cube with the
    DRAW statement. This cube is then rotated through successive 15° angles by
    changing the value of the TA macro in the string used by DRAW. By swapping
    the active and visual pages back and forth, this program always shows a
    completed cube while a new one is being drawn.

    This program is in the file named CUBE.BAS on the QuickBASIC distribution
    disks.

    ' Define the macro string used to draw the cube
    ' and paint its sides:
    One$ =  "BR30 BU25 C1 R54 U45 L54 D45 BE20 P1,1 G20 C2 G20"
    Two$ =  "R54 E20 L54 BD5 P2,2 U5 C4 G20 U45 E20 D45 BL5 P4,4"
    Plot$ = One$ + Two$

    APage% = 1      ' Initialize values for the active and visual
    VPage% = 0      ' pages as well as the angle of rotation.
    Angle% = 0

    DO
        SCREEN 7, , APage%, VPage% ' Draw to the active page
                                ' while showing the visual page.

        CLS 1                      ' Clear the active page.

        ' Rotate the cube "Angle%" degrees:
        DRAW "TA" + STR$(Angle%) + Plot$

        ' Angle% is some multiple of 15 degrees:
        Angle% = (Angle% + 15) MOD 360

        ' Drawing is complete, so make the cube visible in its
        ' new position by switching the active and visual pages:
        SWAP APage%, VPage%

    LOOP WHILE INKEY$ = ""        ' A keystroke ends the program.

    END


5.11  Sample Applications

    The sample applications in this chapter are a bar-graph generator, a
    program that plots points in the Mandelbrot Set using different colors,
    and a pattern editor.

5.11.1  Bar-Graph Generator (BAR.BAS)

    This program uses all the forms of the LINE statement presented above in
    Sections 5.3.2.1-5.3.2.3 to draw a filled bar chart. Each bar is filled
    with a pattern specified in a PAINT statement. The input for the program
    consists of titles for the graph, labels for the x- and y-axes, and a set
    of up to five labels (with associated values) for the bars.

    Statements and Functions Used

    This program demonstrates the use of the following graphics statements:

    ■ LINE

    ■ PAINT (with a pattern)

    ■ SCREEN

    Program Listing

    The bar-graph generator program BAR.BAS is listed below.

    ' Define type for the titles:
    TYPE TitleType
        MainTitle AS STRING * 40
        XTitle AS STRING * 40
        YTitle AS STRING * 18
    END TYPE

    DECLARE SUB InputTitles (T AS TitleType)
    DECLARE FUNCTION DrawGraph$ (T AS TitleType, Label$(), Value!(), N%)
    DECLARE FUNCTION InputData% (Label$(), Value!())

    ' Variable declarations for titles and bar data:
    DIM Titles AS TitleType, Label$(1 TO 5), Value(1 TO 5)

    CONST FALSE = 0, TRUE = NOT FALSE

    DO
        InputTitles Titles
        N% = InputData%(Label$(), Value())
        IF N% <> FALSE THEN
        NewGraph$ = DrawGraph$(Titles, Label$(), Value(), N%)
        END IF
    LOOP WHILE NewGraph$ = "Y"

    END

    ' ======================== DRAWGRAPH ======================
    '   Draws a bar graph from the data entered in the
    '   INPUTTITLES and INPUTDATA procedures.
    ' =========================================================

    FUNCTION DrawGraph$ (T AS TitleType, Label$(), Value(), N%) STATIC

        ' Set size of graph:
        CONST GRAPHTOP = 24, GRAPHBOTTOM = 171
        CONST GRAPHLEFT = 48, GRAPHRIGHT = 624
        CONST YLENGTH = GRAPHBOTTOM - GRAPHTOP

        ' Calculate maximum and minimum values:
        YMax = 0
        YMin = 0
        FOR I% = 1 TO N%
        IF Value(I%) < YMin THEN YMin = Value(I%)
        IF Value(I%) > YMax THEN YMax = Value(I%)
        NEXT I%

        ' Calculate width of bars and space between them:
        BarWidth = (GRAPHRIGHT - GRAPHLEFT) / N%
        BarSpace = .2 * BarWidth
        BarWidth = BarWidth - BarSpace

        SCREEN 2
        CLS

        ' Draw y-axis:
        LINE (GRAPHLEFT, GRAPHTOP)-(GRAPHLEFT, GRAPHBOTTOM), 1

        ' Draw main graph title:
        Start% = 44 - (LEN(RTRIM$(T.MainTitle)) / 2)
        LOCATE 2, Start%
        PRINT RTRIM$(T.MainTitle);

        ' Annotate y-axis:
        Start% = CINT(13 - LEN(RTRIM$(T.YTitle)) / 2)
        FOR I% = 1 TO LEN(RTRIM$(T.YTitle))
        LOCATE Start% + I% - 1, 1
        PRINT MID$(T.YTitle, I%, 1);
        NEXT I%

        ' Calculate scale factor so labels aren't bigger than four digits:
        IF ABS(YMax) > ABS(YMin) THEN
        Power = YMax
        ELSE
        Power = YMin
        END IF
        Power = CINT(LOG(ABS(Power) / 100) / LOG(10))
        IF Power < 0 THEN Power = 0

        ' Scale minimum and maximum values down:
        ScaleFactor = 10 ^ Power
        YMax = CINT(YMax / ScaleFactor)
        YMin = CINT(YMin / ScaleFactor)


        ' If power isn't zero then put scale factor on chart:
        IF Power <> 0 THEN
        LOCATE 3, 2
        PRINT "x 10^"; LTRIM$(STR$(Power))
        END IF

        ' Put tic mark and number for Max point on y-axis:
        LINE (GRAPHLEFT - 3, GRAPHTOP) -STEP(3, 0)
        LOCATE 4, 2
        PRINT USING "####"; YMax

        ' Put tic mark and number for Min point on y-axis:
        LINE (GRAPHLEFT - 3, GRAPHBOTTOM) -STEP(3, 0)
        LOCATE 22, 2
        PRINT USING "####"; YMin

        YMax = YMax * ScaleFactor ' Scale minimum and maximum back
        YMin = YMin * ScaleFactor ' up for charting calculations.

        ' Annotate x-axis:
        Start% = 44 - (LEN(RTRIM$(T.XTitle)) / 2)
        LOCATE 25, Start%
        PRINT RTRIM$(T.XTitle);

        ' Calculate the pixel range for the y-axis:
        YRange = YMax - YMin

        ' Define a diagonally striped pattern:
        Tile$ = CHR$(1)+CHR$(2)+CHR$(4)+CHR$(8)+CHR$(16)+CHR$(32)+CHR$(64)+CHR$
    (128)

        ' Draw a zero line if appropriate:
        IF YMin < 0 THEN
        Bottom = GRAPHBOTTOM - ((-YMin) / YRange * YLENGTH)
        LOCATE INT((Bottom - 1) / 8) + 1, 5
        PRINT "0";
        ELSE
        Bottom = GRAPHBOTTOM
        END IF

        ' Draw x-axis:
        LINE (GRAPHLEFT - 3, Bottom)-(GRAPHRIGHT, Bottom)
        ' Draw bars and labels:
        Start% = GRAPHLEFT + (BarSpace / 2)
        FOR I% = 1 TO N%

        ' Draw a bar label:
        BarMid = Start% + (BarWidth / 2)
        CharMid = INT((BarMid - 1) / 8) + 1
        LOCATE 23, CharMid - INT(LEN(RTRIM$(Label$(I%))) / 2)
        PRINT Label$(I%);

        ' Draw the bar and fill it with the striped pattern:
        BarHeight = (Value(I%) / YRange) * YLENGTH
        LINE (Start%, Bottom) -STEP(BarWidth, -BarHeight), , B
        PAINT (BarMid, Bottom - (BarHeight / 2)), Tile$, 1

        Start% = Start% + BarWidth + BarSpace
        NEXT I%
        LOCATE 1, 1
        PRINT "New graph? ";
        DrawGraph$ = UCASE$(INPUT$(1))

    END FUNCTION

    ' ======================== INPUTDATA ======================
    '     Gets input for the bar labels and their values
    ' =========================================================

    FUNCTION InputData% (Label$(), Value()) STATIC

        ' Initialize the number of data values:
        NumData% = 0

        ' Print data-entry instructions:
        CLS
        PRINT "Enter data for up to 5 bars:"
        PRINT "   * Enter the label and value for each bar."
        PRINT "   * Values can be negative."
        PRINT "   * Enter a blank label to stop."
        PRINT
        PRINT "After viewing the graph, press any key ";
        PRINT "to end the program."

        ' Accept data until blank label or 5 entries:
        Done% = FALSE
        DO
        NumData% = NumData% + 1
        PRINT
        PRINT "Bar("; LTRIM$(STR$(NumData%)); "):"
        INPUT ; "        Label? ", Label$(NumData%)

        ' Only input value if label isn't blank:
        IF Label$(NumData%) <> "" THEN
            LOCATE , 35
            INPUT "Value? ", Value(NumData%)

        ' If label is blank, decrement data counter
        ' and set Done flag equal to TRUE:
        ELSE
            NumData% = NumData% - 1
            Done% = TRUE
        END IF
        LOOP UNTIL (NumData% = 5) OR Done%

        ' Return the number of data values input:
        InputData% = NumData%

    END FUNCTION

    ' ====================== INPUTTITLES ======================
    '     Accepts input for the three different graph titles
    ' =========================================================

    SUB InputTitles (T AS TitleType) STATIC
        SCREEN 0, 0          ' Set text screen.
        DO                   ' Input titles.
        CLS
        INPUT "Enter main graph title: ", T.MainTitle
        INPUT "Enter x-axis title    : ", T.XTitle
        INPUT "Enter y-axis title    : ", T.YTitle

        ' Check to see if titles are OK:
        LOCATE 7, 1
        PRINT "OK (Y to continue, N to change)? ";
        LOCATE , , 1
        OK$ = UCASE$(INPUT$(1))
        LOOP UNTIL OK$ = "Y"
    END SUB

    Output

    ┌─────────────────────────────────────────────────────────────────┐
    │    New graph?                                                   │
    │                    LOW TEMPERATURE BY MONTH                     │
    │     15 ┐                                        ┌───────┐       │
    │ C      │                                        │░░░░░░░│       │
    │ e      │                                        │░░░░░░░│       │
    │ l      │                                        │░░░░░░░│       │
    │ s      │                                        │░░░░░░░│       │
    │ i      │                                        │░░░░░░░│       │
    │ u      │                                        │░░░░░░░│       │
    │ s      │                              ┌───────┐ │░░░░░░░│       │
    │        │                              │░░░░░░░│ │░░░░░░░│       │
    │ D      │                              │░░░░░░░│ │░░░░░░░│       │
    │ e    0 ┼┬───────┬─┬───────┬─┬───────┬─┴───────┴─┴───────┴─      │
    │ g      ││░░░░░░░│ │░░░░░░░│ │░░░░░░░│                           │
    │ r      ││░░░░░░░│ │░░░░░░░│ └───────┘                           │
    │ e      ││░░░░░░░│ │░░░░░░░│                                     │
    │ e      ││░░░░░░░│ │░░░░░░░│                                     │
    │ s      │└───────┘ │░░░░░░░│                                     │
    │      -9┘          └───────┘                                     │
    │          January   February    March    April     May           │
    │                              Month                              │
    └─────────────────────────────────────────────────────────────────┘

5.11.2  Color in a Figure Generated Mathematically (MANDEL.BAS)

    This program uses BASIC graphics statements to generate a figure known as
    a "fractal." A fractal is a graphic representation of what happens to
    numbers when they are subjected to a repeated sequence of mathematical
    operations. The fractal generated by this program shows a subset of the
    class of numbers known as complex numbers; this subset is called the
    "Mandelbrot Set," named after Benoit B. Mandelbrot of the IBM Thomas J.
    Watson Research Center.

    Briefly, complex numbers have two parts, a real part and a so-called
    imaginary part, some multiple of the √-1. Squaring a complex number, then
    plugging the real and imaginary parts back into a second complex number,
    squaring the new complex number, and repeating the process causes some
    complex numbers to get very large fairly fast. However, others hover
    around some stable value. The stable values are in the Mandelbrot Set and
    are represented in this program by the color black. The unstable values──
    that is, the ones that are moving away from the Mandelbrot Set──are
    represented by the other colors in the palette. The smaller the color
    attribute, the more unstable the point.

    See A.K. Dewdney's column, "Computer Recreations," in Scientific American,
    August 1985, for more background on the Mandelbrot Set.

    This program also tests for the presence of an EGA card, and if one is
    present, it draws the Mandelbrot Set in screen mode 8. After drawing each
    line, the program rotates the 16 colors in the palette with a PALETTE
    USING statement. If there is no EGA card, the program draws a four-color
    (white, magenta, cyan, and black) Mandelbrot Set in screen mode 1.

    Statements and Functions Used

    This program demonstrates the use of the following graphics statements:

    ■ LINE

    ■ PALETTE USING

    ■ PMAP

    ■ PSET

    ■ SCREEN

    ■ VIEW

    ■ WINDOW

    Program Listing

    DEFINT A-Z           ' Default variable type is integer.

    DECLARE SUB ShiftPalette ()
    DECLARE SUB WindowVals (WL%, WR%, WT%, WB%)
    DECLARE SUB ScreenTest (EM%, CR%, VL%, VR%, VT%, VB%)

    CONST FALSE = 0, TRUE = NOT FALSE ' Boolean constants

    ' Set maximum number of iterations per point:
    CONST MAXLOOP = 30, MAXSIZE = 1000000

    DIM PaletteArray(15)
    FOR I = 0 TO 15: PaletteArray(I) = I: NEXT I

    ' Call WindowVals to get coordinates of window corners:
    WindowVals WLeft, WRight, WTop, WBottom

    ' Call ScreenTest to find out if this is an EGA machine
    ' and get coordinates of viewport corners:
    ScreenTest EgaMode, ColorRange, VLeft, VRight, VTop, VBottom

    ' Define viewport and corresponding window:
    VIEW (VLeft, VTop)-(VRight, VBottom), 0, ColorRange
    WINDOW (WLeft, WTop)-(WRight, WBottom)

    LOCATE 24, 10 : PRINT "Press any key to quit.";

    XLength = VRight - VLeft
    YLength = VBottom - VTop
    ColorWidth = MAXLOOP \ ColorRange

    ' Loop through each pixel in viewport and calculate
    ' whether or not it is in the Mandelbrot Set:
    FOR Y = 0 TO YLength       ' Loop through every line
                                ' in the viewport.
        LogicY = PMAP(Y, 3)     ' Get the pixel's view
                                ' y-coordinate.
        PSET (WLeft, LogicY)    ' Plot leftmost pixel in the line.
        OldColor = 0            ' Start with background color.

        FOR X = 0 TO XLength    ' Loop through every pixel
                                ' in the line.
        LogicX = PMAP(X, 2)  ' Get the pixel's view
                                ' x-coordinate.
        MandelX& = LogicX
        MandelY& = LogicY


        ' Do the calculations to see if this point
        ' is in the Mandelbrot Set:
        FOR I = 1 TO MAXLOOP
            RealNum& = MandelX& * MandelX&
            ImagNum& = MandelY& * MandelY&
            IF (RealNum& + ImagNum&) >= MAXSIZE THEN EXIT FOR
            MandelY& = (MandelX& * MandelY&) \ 250 + LogicY
            MandelX& = (RealNum& - ImagNum&) \ 500 + LogicX
        NEXT I

        ' Assign a color to the point:
        PColor = I \ ColorWidth

        ' If color has changed, draw a line from
        ' the last point referenced to the new point,
        ' using the old color:
        IF PColor <> OldColor THEN
            LINE -(LogicX, LogicY), (ColorRange - OldColor)
            OldColor = PColor
        END IF

        IF INKEY$ <> "" THEN END
        NEXT X

        ' Draw the last line segment to the right edge
        ' of the viewport:
        LINE -(LogicX, LogicY), (ColorRange - OldColor)

        ' If this is an EGA machine, shift the palette after
        ' drawing each line:
        IF EgaMode THEN ShiftPalette
    NEXT Y

    DO
        ' Continue shifting the palette
        ' until the user presses a key:
        IF EgaMode THEN ShiftPalette
    LOOP WHILE INKEY$ = ""

    SCREEN 0, 0             ' Restore the screen to text mode,
    WIDTH 80                ' 80 columns.
    END

    BadScreen:              ' Error handler that is invoked if
        EgaMode = FALSE      ' there is no EGA graphics card
        RESUME NEXT

    ' ====================== ShiftPalette =====================
    '    Rotates the palette by one each time it is called
    ' =========================================================

    SUB ShiftPalette STATIC
        SHARED PaletteArray(), ColorRange

        FOR I = 1 TO ColorRange
        PaletteArray(I) = (PaletteArray(I) MOD ColorRange) + 1
        NEXT I
        PALETTE USING PaletteArray(0)

    END SUB

    ' ======================= ScreenTest ======================
    '    Uses a SCREEN 8 statement as a test to see if user has
    '    EGA hardware. If this causes an error, the EM flag is
    '    set to FALSE, and the screen is set with SCREEN 1.

    '    Also sets values for corners of viewport (VL = left,
    '    VR = right, VT = top, VB = bottom), scaled with the
    '    correct aspect ratio so viewport is a perfect square.
    ' =========================================================

    SUB ScreenTest (EM, CR, VL, VR, VT, VB) STATIC
        EM = TRUE
        ON ERROR GOTO BadScreen
        SCREEN 8, 1
        ON ERROR GOTO 0

        IF EM THEN                   ' No error, SCREEN 8 is OK.
        VL = 110: VR = 529
        VT = 5: VB = 179
        CR = 15                   ' 16 colors (0 - 15)

        ELSE                         ' Error, so use SCREEN 1.
        SCREEN 1, 1
        VL = 55: VR = 264
        VT = 5: VB = 179
        CR = 3                    ' 4 colors (0 - 3)
        END IF

    END SUB

    ' ======================= WindowVals ======================
    '     Gets window corners as input from the user, or sets
    '     values for the corners if there is no input
    ' =========================================================

    SUB WindowVals (WL, WR, WT, WB) STATIC
        CLS
        PRINT "This program prints the graphic representation of"
        PRINT "the complete Mandelbrot Set. The default window"
        PRINT "is from (-1000,625) to (250,-625). To zoom in on"
        PRINT "part of the figure, input coordinates inside"
        PRINT "this window."
        PRINT "Press <ENTER> to see the default window or"
        PRINT "any other key to input window coordinates: ";
        LOCATE , , 1
        Resp$ = INPUT$(1)

        ' User didn't press ENTER, so input window corners:
        IF Resp$ <> CHR$(13) THEN
        PRINT
        INPUT "x-coordinate of upper-left corner: ", WL
        DO
            INPUT "x-coordinate of lower-right corner: ", WR
            IF WR <= WL THEN
            PRINT "Right corner must be greater than left corner."
            END IF
        LOOP WHILE WR <= WL
        INPUT "y-coordinate of upper-left corner: ", WT
        DO
            INPUT "y-coordinate of lower-right corner: ", WB
            IF WB >= WT THEN
            PRINT "Bottom corner must be less than top corner."
            END IF
        LOOP WHILE WB >= WT

        ' User pressed ENTER, so set default values:
        ELSE
        WL = -1000
        WR = 250
        WT = 625
        WB = -625
        END IF
    END SUB

    Output

    The following figure shows the Mandelbrot Set in screen mode 1. This is
    the output you see if you have a CGA and you choose the default window
    coordinates.

    ┌────────────────────────────────────┐
    │                                    │
    │     The output for this example    │
    │     can be found on page 217 of    │
    │     the printed manual.            │
    │                                    │
    └────────────────────────────────────┘

    The next figure shows the Mandelbrot Set with (x, y) coordinates of (-500,
    250) for the upper-left corner and (-300, 50) for the lower-right corner.
    This figure is drawn in screen mode 8, the default for an EGA or VGA.

    ┌────────────────────────────────────┐
    │                                    │
    │     The output for this example    │
    │     can be found on page 217 of    │
    │     the printed manual.            │
    │                                    │
    └────────────────────────────────────┘

5.11.3  Pattern Editor (EDPAT.BAS)

    This program allows you to edit a pattern tile for use with PAINT. While
    you are editing the tile on the left side of the screen, you can check the
    appearance of the finished pattern on the right side of the screen. When
    you have finished editing the pattern tile, the program prints the integer
    arguments used by the CHR$ statement to draw each row of the tile.

    Statements and Functions Used

    This program demonstrates the use of the following graphics statements:

    ■ LINE

    ■ PAINT (with pattern)

    ■ VIEW

    Program Listing

    DECLARE SUB DrawPattern ()
    DECLARE SUB EditPattern ()
    DECLARE SUB Initialize ()
    DECLARE SUB ShowPattern (OK$)

    DIM Bit%(0 TO 7), Pattern$, Esc$, PatternSize%

    DO
        Initialize
        EditPattern
        ShowPattern OK$
    LOOP WHILE OK$ = "Y"

    END

    ' ======================= DRAWPATTERN ====================
    '  Draws a patterned rectangle on the right side of screen
    ' ========================================================

    SUB DrawPattern STATIC
    SHARED Pattern$

        VIEW (320, 24)-(622, 160), 0, 1  ' Set view to rectangle.
        PAINT (1, 1), Pattern$           ' Use PAINT to fill it.
        VIEW                             ' Set view to full screen.

    END SUB

    ' ======================= EDITPATTERN =====================
    '                  Edits a tile-byte pattern
    ' =========================================================

    SUB EditPattern STATIC
    SHARED Pattern$, Esc$, Bit%(), PatternSize%

        ByteNum% = 1         ' Starting position.
        BitNum% = 7
        Null$ = CHR$(0)      ' CHR$(0) is the first byte of the
                            ' two-byte string returned when a
                            ' direction key such as UP or DOWN is
                            ' pressed.
        DO

        ' Calculate starting location on screen of this bit:
        X% = ((7 - BitNum%) * 16) + 80
        Y% = (ByteNum% + 2) * 8

        ' Wait for a key press (flash cursor each 3/10 second):
        State% = 0
        RefTime = 0
        DO

            ' Check timer and switch cursor state if 3/10 second:
            IF ABS(TIMER - RefTime) > .3 THEN
                RefTime = TIMER
                State% = 1 - State%

            ' Turn the border of bit on and off:
                LINE (X%-1, Y%-1) -STEP(15, 8), State%, B
            END IF

            Check$ = INKEY$ ' Check for keystroke.

        LOOP WHILE Check$ = "" ' Loop until a key is pressed.

        ' Erase cursor:
        LINE (X%-1, Y%-1) -STEP(15, 8), 0, B

        SELECT CASE Check$ ' Respond to keystroke.

        CASE CHR$(27)      ' ESC key pressed:
            EXIT SUB        ' exit this subprogram.

    CASE CHR$(32)      ' SPACEBAR pressed:
                            ' reset state of bit.

            ' Invert bit in pattern string:
            CurrentByte% = ASC(MID$(Pattern$, ByteNum%, 1))
            CurrentByte% = CurrentByte% XOR Bit%(BitNum%)
            MID$ (Pattern$, ByteNum%) = CHR$(CurrentByte%)

            ' Redraw bit on screen:
            IF (CurrentByte% AND Bit%(BitNum%)) <> 0 THEN
                CurrentColor% = 1
            ELSE
                CurrentColor% = 0
            END IF
            LINE (X%+1, Y%+1) -STEP(11, 4), CurrentColor%, BF

        CASE CHR$(13)              ' ENTER key pressed: draw
            DrawPattern             ' pattern in box on right.

        CASE Null$ + CHR$(75)      ' LEFT key: move cursor left.

            BitNum% = BitNum% + 1
            IF BitNum% > 7 THEN BitNum% = 0

        CASE Null$ + CHR$(77)      ' RIGHT key: move cursor right.

            BitNum% = BitNum% - 1
            IF BitNum% < 0 THEN BitNum% = 7

        CASE Null$ + CHR$(72)      ' UP key: move cursor up.

            ByteNum% = ByteNum% - 1
            IF ByteNum% < 1 THEN ByteNum% = PatternSize%

        CASE Null$ + CHR$(80)      ' DOWN key: move cursor down.

            ByteNum% = ByteNum% + 1
            IF ByteNum% > PatternSize% THEN ByteNum% = 1

        CASE ELSE
            ' User pressed a key other than ESC, SPACEBAR,
            ' ENTER, UP, DOWN, LEFT, or RIGHT, so don't
            ' do anything.
        END SELECT
        LOOP
    END SUB

    ' ======================= INITIALIZE ======================
    '             Sets up starting pattern and screen
    ' =========================================================

    SUB Initialize STATIC
    SHARED Pattern$, Esc$, Bit%(), PatternSize%

        Esc$ = CHR$(27)              ' ESC character is ASCII 27.

        ' Set up an array holding bits in positions 0 to 7:
        FOR I% = 0 TO 7
        Bit%(I%) = 2 ^ I%
        NEXT I%

        CLS

        ' Input the pattern size (in number of bytes):
        LOCATE 5, 5
        PRINT "Enter pattern size (1-16 rows):";
        DO
        LOCATE 5, 38
        PRINT "  ";
        LOCATE 5, 38
        INPUT "", PatternSize%
        LOOP WHILE PatternSize% < 1 OR PatternSize% > 16

        ' Set initial pattern to all bits set:
        Pattern$ = STRING$(PatternSize%, 255)

        SCREEN 2             ' 640 x 200 monochrome graphics mode

        ' Draw dividing lines:
        LINE (0, 10)-(635, 10), 1
        LINE (300, 0)-(300, 199)
        LINE (302, 0)-(302, 199)

        ' Print titles:
        LOCATE 1, 13: PRINT "Pattern Bytes"
        LOCATE 1, 53: PRINT "Pattern View"

    ' Draw editing screen for pattern:
        FOR I% = 1 TO PatternSize%

        ' Print label on left of each line:
        LOCATE I% + 3, 8
        PRINT USING "##:"; I%

        ' Draw "bit" boxes:
        X% = 80
        Y% = (I% + 2) * 8
        FOR J% = 1 TO 8
            LINE (X%, Y%) -STEP(13, 6), 1, BF
            X% = X% + 16
        NEXT J%
        NEXT I%

        DrawPattern          ' Draw   "Pattern View" box.

        LOCATE 21, 1
        PRINT "DIRECTION keys........Move cursor"
        PRINT "SPACEBAR............Changes point"
        PRINT "ENTER............Displays pattern"
        PRINT "ESC.........................Quits";

    END SUB

    ' ======================== SHOWPATTERN ====================
    '   Prints the CHR$ values used by PAINT to make pattern
    ' =========================================================

    SUB ShowPattern (OK$) STATIC
    SHARED Pattern$, PatternSize%

        ' Return screen to 80-column text mode:
        SCREEN 0, 0
        WIDTH 80

        PRINT "The following characters make up your pattern:"
        PRINT

        ' Print out the value for each pattern byte:
        FOR I% = 1 TO PatternSize%
        PatternByte% = ASC(MID$(Pattern$, I%, 1))
        PRINT "CHR$("; LTRIM$(STR$(PatternByte%)); ")"
        NEXT I%
        PRINT
        LOCATE , , 1
        PRINT "New pattern? ";
        OK$ = UCASE$(INPUT$(1))
    END SUB

    Output

    This is a sample pattern generated by the pattern editor.

    ┌────────────────────────────────────┐
    │                                    │
    │     The output for this example    │
    │     can be found on page 223 of    │
    │     the printed manual.            │
    │                                    │
    └────────────────────────────────────┘



────────────────────────────────────────────────────────────────────────────
Chapter 6  Error and Event Trapping

    This chapter shows how to trap errors and events that occur while a
    program is running. With error trapping, you can protect your program from
    such user errors as entering a string when a numeric value is expected or
    trying to open a file in a nonexistent directory. With event trapping,
    your program can detect and respond to real-time events such as keystrokes
    or data arriving at a COM port.

    When you have completed this chapter, you will know how to perform these
    tasks:

    ■ Activate error trapping or event trapping

    ■ Write a routine to process trapped errors or events

    ■ Return control from an error-handling routine or an event-handling
    routine

    ■ Write a program that traps any keystroke or combination of keystrokes

    ■ Trap errors or events within SUB or FUNCTION procedures

    ■ Trap errors or events in programs composed of more than one module


6.1  Error Trapping

    Error trapping lets your program intercept run-time errors before they
    force the program to halt. Without error trapping, errors during program
    execution (such as trying to open a nonexistent data file) cause BASIC to
    display the appropriate error message, then stop the program. If someone
    is running the stand-alone version of your program, they will have to
    restart the program, losing data entered or calculations performed before
    the error occurred.

    When error trapping is active, the trapped error makes the program branch
    to a user-written "error-handling routine," which corrects the error. If
    you can anticipate errors that might occur when someone else uses your
    program, error trapping will let you handle those errors in a
    "user-friendly" way.

    Sections 6.1.1 and 6.1.2 below show how to activate error trapping, how
    to write a routine to handle errors when they are trapped, and how to
    return control from the error-handling routine after it has dealt with the
    error.

6.1.1  Activating Error Trapping

    You activate error trapping with the statement ON ERROR GOTO line, where
    line is a line number or line label identifying the first line of an
    error-handling routine. Once BASIC has encountered an ON ERROR GOTO line
    statement, any run-time error within the module containing that statement
    causes a branch to the specified line. (If the number or label does not
    exist within the module, a run-time error message reading Label not
    defined appears.)

    An ON ERROR GOTO statement must be executed before error trapping takes
    effect. Therefore, you must position the ON ERROR GOTO statement so that
    program execution reaches it before it is needed. This statement would
    usually be one of the first executable statements in the main module or a
    procedure.

    You cannot use an ON ERROR GOTO 0 statement to branch to an error handler,
    because this statement has a special meaning in error trapping. The ON
    ERROR GOTO 0 statement has two effects, depending on where it appears. If
    it appears outside an error-handling routine, it turns off error trapping.
    If it appears inside an error-handling routine (as it does in the Handler
    routine in the next example), it causes BASIC to print its standard
    message for the given error and stops the program.

    Therefore, even if your program has a line with line-number 0, an ON ERROR
    GOTO 0 statement tells BASIC either to turn off error detection or to
    terminate execution.

6.1.2  Writing an Error-Handling Routine

    An error-handling routine consists of the following three parts:

    1. The line label or line number that is specified in the statement ON
        ERROR GOTO line, which is the first statement the program branches to
        after an error

    2. The body of the routine, which determines the error that caused the
        branch and takes appropriate action for each anticipated error

    3. At least one RESUME or RESUME NEXT statement to return control from the
        routine

    An error handler must be placed where it cannot be executed during the
    normal flow of program execution. For example, an error-handling routine
    in the program's main module might be placed after an END statement.
    Otherwise, a GOTO statement might be needed to skip over it during normal
    execution.

    6.1.2.1  Using ERR to Identify Errors

    Once the program has branched to an error-handling routine, it must
    determine which error caused the branch. To identify the culprit, use the
    ERR function. This function returns a numeric code for the program's most
    recent run-time error. (See Table I.1, "Run-Time Error Codes," for a
    complete list of the error codes associated with run-time errors.)

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    Errors cannot be trapped within an error-handling routine. If an error
    occurs while the error-handling routine is processing another error, the
    program displays the message for the new error and then terminates.
    Event handling is also suspended, but resumes when QuickBASIC returns
    from the error handler. The first event that occurred after event
    handling was suspended is saved.
    ──────────────────────────────────────────────────────────────────────────

    Example

    The following program includes the error-handling routine Handler,
    designed to deal specifically with three different error situations. The
    ERR function, used in a SELECT CASE statement, allows this routine to take
    actions appropriate for each error.

    DATA BASIC, Pascal, FORTRAN, C, Modula, Forth
    DATA LISP, Ada, COBOL

    CONST FALSE = 0, TRUE = NOT FALSE

    EndOfData = FALSE                     ' Set end of data flag.

    ON ERROR GOTO Handler                 ' Activate error trapping.

    OPEN "LPT1:" FOR OUTPUT AS #1 ' Open the printer for output.

    DO
        ' Continue reading items from the DATA statements above,
        ' then printing them on the line printer, until there is
        ' an "Out of DATA" error message signifying no more data:
        READ Buffer$
        IF NOT EndOfData THEN
        PRINT #1, Buffer$
        ELSE
        EXIT DO
        END IF
    LOOP

    CLOSE #1
    END

    Handler:                        ' Error-handling routine

        ' Use ERR to determine which error
        ' caused the branch to "Handler":
        SELECT CASE ERR
        CASE 4

            ' 4 is the code for "Out of DATA" in DATA
            ' statements:
            EndOfData = TRUE
            RESUME NEXT
        CASE 25

            ' 25 is the code for "Device fault" error,
            ' which can be caused by trying to output
            ' to the printer when it's not on:
            PRINT "Turn printer on, then";
            PRINT "press any key to continue"
            Pause$ = INPUT$(1)
            RESUME
        CASE 27

            ' 27 is the code for "Out of paper":
            PRINT "Printer is out of paper. Insert"
            PRINT "paper, then press any key to continue."
            Pause$ = INPUT$(1)

            ' Start reading data from the beginning of first
            ' DATA statement after the paper is inserted:
            RESTORE
            RESUME
        CASE ELSE

            ' An unanticipated error has occurred; display the
            ' message for that error and stop the program:
            ON ERROR GOTO 0
        END SELECT

    6.1.2.2  Returning from an Error-Handling Routine

    The RESUME statement returns control from an error-handling routine. The
    preceding example used the following two variations of RESUME to return
    from Handler:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Statement                Action
    ──────────────────────────────────────────────────────────────────────────
    RESUME                   Causes the program to branch back to the exact
                            statement that caused the error.

                            If the program had to go to another module to
                            find an active error handler, control returns to
                            the last statement executed in that module.

                            The preceding program used RESUME to return to
                            the PRINT statement that attempted to send output
                            to the printer, giving it another chance to print
                            the value in Buffer$ after the printer has
                            (presumably) been turned on.

    RESUME NEXT              Causes the program to branch back to the
                            statement following the one that caused the
    Statement                Action
    ──────────────────────────────────────────────────────────────────────────
                            statement following the one that caused the
                            error.If the program had to go to another module
                            to find an active error handler, control returns
                            to the statement following the last statement
                            executed in that module.

                            The preceding program used the statement RESUME
                            NEXT when recovering from the Out of DATA error.
                            In this case, a simple RESUME would have sent the
                            program into an endless loop, since each time
                            control returned to the READ statement in the
                            main program, another Out of DATA error would
                            result, invoking the error routine over and over
                            again.

    ──────────────────────────────────────────────────────────────────────────


    Figure 6.1 outlines the flow of a program's control during error handling
    with RESUME.


    ┌──────────────────────────────────────────────────────────────────┐
    │          ┌─────────┐                                             │
    │          │  Start  │                                             │
    │          └────┬────┘                                             │
    │               │                                                  │
    │               │                                                  │
    │    ┌──────────▼───────────┐        ┌──────────────────────┐      │
    │ ┌─►│ Statement with error ├───────►│    Error handler     │      │
    │ │  └──────────┬───────────┘        └───────────┬──────────┘      │
    │ │             │                                │                 │
    │ │            ┌┼┐                   ┌───────────▼──────────┐      │
    │ └────────────┘│└───────────────────┤        RESUME        │      │
    │               │                    └──────────────────────┘      │
    │               │                                                  │
    │          ┌────▼────┐                                             │
    │          │   End   │                                             │
    │          └─────────┘                                             │
    └──────────────────────────────────────────────────────────────────┘

    Figure 6.1  Program Flow of Control with RESUME

    Contrast the preceding figure with Figure 6.2, which shows what happens
    in a program using RESUME NEXT.


    ┌──────────────────────────────────────────────────────────────────┐
    │        ┌─────────┐                                               │
    │        │  Start  │                                               │
    │        └────┬────┘                                               │
    │             │                                                    │
    │  ┌──────────▼───────────┐        ┌──────────────────────┐        │
    │  │ Statement with error ├───────►│    Error handler     │        │
    │  └──────────────────────┘        └───────────┬──────────┘        │
    │                                              │                   │
    │  ┌──────────────────────┐        ┌───────────▼──────────┐        │
    │  │ Statement following  │◄───────┤        RESUME        │        │
    │  │the one with the error│        └──────────────────────┘        │
    │  └──────────┬───────────┘                                        │
    │             │                                                    │
    │        ┌────▼────┐                                               │
    │        │   End   │                                               │
    │        └─────────┘                                               │
    └──────────────────────────────────────────────────────────────────┘

    Figure 6.2  Program Flow of Control with RESUME NEXT

    Another variant of RESUME is RESUME line, where line is a line number or
    line label outside any SUB...END SUB, FUNCTION...END FUNCTION, or DEF
    FN...END DEF block. Because line must be outside these blocks, a RESUME
    line statement can produce unexpected effects if it appears in an
    error-handling routine inside a SUB or FUNCTION procedure or a DEF FN
    function. It should generally be avoided in favor of RESUME or RESUME
    NEXT.


6.2  Event Trapping

    Section 6.2.1 below compares two methods your BASIC programs can use to
    detect events: polling and trapping. Sections 6.2.2-6.2.4 then discuss
    the different events BASIC can trap, how to set and activate a trap, and
    how to suspend or deactivate the trap. Sections 6.2.5-6.2.7 provide more
    detailed information on trapping keystrokes and music events.

6.2.1  Detecting Events by Polling

    One way to detect an event and reroute program control to the appropriate
    routine is to use "event polling." In polling, your program stops whatever
    it is currently doing and explicitly checks for an event. For example, the
    following loop keeps checking the keyboard until the user presses either
    the Q or N keys:

    DO
        Test$ = UCASE$(INKEY$)
    LOOP UNTIL Test$ = "N" OR Test$ = "Q"

    Polling works well when you know ahead of time exactly where in the flow
    of the program you want to check for an event.

6.2.2  Detecting Events by Trapping

    But suppose you don't want your program to pause, or you would like it to
    check between every statement (that is, check continuously). In these
    cases, polling is unwieldy or impossible, and trapping becomes the better
    alternative.

    Example

    The following example shows how to use event trapping:

    ' Alert the program that it should branch to "KeySub"
    ' whenever the user presses the F1 function key:
    ON KEY(1) GOSUB KeySub

    ' Turn on trapping for the F1 key. BASIC now checks in the
    ' background for this event until the end of the program,
    ' or until trapping is disabled with KEY(1) OFF
    ' or suspended with KEY(1) STOP:
    KEY(1) ON
    OPEN "Data" FOR INPUT AS #1
    OPEN "Data.Out" FOR OUTPUT AS #2

    DO UNTIL EOF(1)
        LINE INPUT #1, LineBuffer$
        PRINT #2, LineBuffer$
    LOOP

    KeySub:         ' When the user presses F1, the program
        .            ' branches to this procedure.
        .
        .
    RETURN

6.2.3  Specifying the Event to Trap and Activating Event Trapping

    As you can see from the preceding example, three steps are necessary for
    event trapping:

    1. Define a target subroutine that is known as an "event-handling
        subroutine."

    2. Tell the program to branch to the event-handling subroutine when the
        event takes place with an ON event GOSUB statement.

    3. Activate trapping of that event with an ON event GOSUB statement.

    Your program cannot trap a given event until it encounters both an event
    ON and an ON event GOSUB statement.

    An event-handling routine is an ordinary BASIC GOSUB routine: control
    passes to the first line of the routine whenever the event is detected and
    returns to the main level of the module containing the routine with a
    RETURN statement.

    Note the following important differences between the syntax of error
    trapping and the syntax of event trapping:

    Error Trapping                       Event Trapping
    ──────────────────────────────────────────────────────────────────────────
    Activated with the statement ON      Activated with an event ON statement;
    ERROR GOTO, which also specifies     a separate statement, ON event GOSUB,
    the first line of the error-         specifies the first line of the
    handling routine                     event-handling subroutine

    Returns control from the error       Returns control from the event
    routine with one or more RESUME,     subroutine with one or more RETURN
    RESUME NEXT, or RESUME line          statements
    statements
    ──────────────────────────────────────────────────────────────────────────

6.2.4  Events That BASIC Can Trap

    You can trap the following events within a BASIC program:

    BASIC Statement          Event Trapped
    ──────────────────────────────────────────────────────────────────────────
    COM(portnumber)          Data from one of the serial ports (1 or 2)
                            appearing in the communications buffer (the
                            intermediate storage area for data sent to or
                            received from the serial port)

    KEY(keynumber)           The user pressing the given key

    PEN                      The user activating the light pen

    PLAY(queuelimit)         The number of notes remaining to be played in the
                            background dropping below queuelimit

    STRIG(triggernumber)     The user squeezing the trigger of the joystick

    TIMER(interval)          The passage of interval seconds
    ──────────────────────────────────────────────────────────────────────────

6.2.5  Suspending or Disabling Event Trapping

    You can turn off detection and trapping of any event with the event OFF
    statement. Events occurring after an event OFF statement has been executed
    are ignored. If you want to suspend trapping a given event but continue
    detecting it, use the event STOP statement.

    After event STOP, if the event occurs, there is no branch to the
    event-handling routine. However, your program remembers that the event
    occurred, and as soon as trapping is turned back on with event ON,
    branching to the event routine occurs immediately.

    Event-handling routines execute an implicit event STOP statement for a
    given event whenever program control is in the routine; this is followed
    by an implicit event ON for that event when program control returns from
    the routine. For example, if a key-handling routine is processing a
    keystroke, trapping the same key is suspended until the previous keystroke
    is completely processed by the routine. If the user presses the same key
    during this time, this new keystroke is remembered and trapped after
    control returns from the key-handling routine.

    Example

    An event trap interrupts whatever is happening in the program at the
    moment the event occurs. Therefore, if you have a block of statements that
    you do not want interrupted, precede them with event STOP and follow them
    with event ON, as in this example:

    ' Once every minute (60 seconds),
    ' branch to the ShowTime subroutine:
    ON TIMER(60) GOSUB ShowTime

    ' Activate trapping of the 60-second event:
    TIMER ON
    .
    .
    .
    TIMER STOP      ' Suspend trapping.
    .       ' A sequence of lines you don't want interrupted,
    .       ' even if 60 or more seconds elapse
    .

    TIMER ON        ' Reactivate trapping.
    .
    .
    .
    END

    ShowTime:

        ' Get the current row and column position of the cursor,
        ' and store them in the variables Row and Column:
        Row    = CSRLIN
        Column = POS(0)

        ' Go to the 24th row, 20th column, and print the time:
        LOCATE 24, 20
        PRINT TIME$

        ' Restore the cursor to its former position
        ' and return to the main program:
        LOCATE Row, Column
    RETURN

6.2.6  Trapping Keystrokes

    To detect a keystroke and route program control to a key-press routine,
    you need both of the following statements in your program:

    ON KEY(keynumber) GOSUB line
    KEY(keynumber) ON

    Here, the keynumber value corresponds to the following keys:

    Value                    Key
    ──────────────────────────────────────────────────────────────────────────
    1-10                     Function keys F1-F10 (sometimes called "soft
                            keys")

    11                       The UP direction key

    12                       The LEFT direction key

    13                       The RIGHT direction key

    14                       The DOWN direction key

    15-25                    User-defined keys (see Sections 6.2.6.1-6.2.6.2)

    30                       The F11 function key (101-key keyboard only)

    31                       The F12 function key (101-key keyboard only)
    ──────────────────────────────────────────────────────────────────────────

    Examples

    The following two lines cause the program to branch to the KeySub routine
    each time the F2 function key is pressed:

    ON KEY(2) GOSUB KeySub
    KEY(2) ON
    .
    .
    .

    The following four lines cause the program to branch to the DownKey
    routine when the DOWN direction key is pressed and to the UpKey routine
    when the UP direction key is pressed:

    ON KEY(11) GOSUB UpKey
    ON KEY(14) GOSUB DownKey
    KEY(11) ON
    KEY(14) ON
    .
    .
    .

    6.2.6.1  Trapping User-Defined Keys

    In addition to providing the preassigned key numbers 1-14 (plus 30 and 31
    with the 101-key keyboard), BASIC allows you to assign the numbers 15-25
    to any of the remaining keys on the keyboard. To define your own key to
    trap, use these three statements:

    KEY keynumber, CHR$(0) + CHR$(scancode)
    ON KEY(keynumber) GOSUB line
    KEY(keynumber) ON

    Here, keynumber is a value from 15 to 25, and scancode is the scan code
    for that key. (See the first column of the "Keyboard Scan Codes" table in
    Appendix D for these codes.) For example, the following lines cause the
    program to branch to the TKey routine each time the user presses T:

    ' Define key 15 (the scan code for "t" is decimal 20):
    KEY 15, CHR$(0) + CHR$(20)

    ' Define the trap (where to go when "t" is pressed):
    ON KEY(15) GOSUB TKey

    KEY(15) ON                 ' Turn on detection of key 15.

    PRINT "Press q to end."

    DO                         ' Idle loop: wait for user to
    LOOP UNTIL INKEY$ = "q"    ' press "q".

    END

    TKey:                      ' Key-handling subroutine
        PRINT "Pressed t."
    RETURN

    6.2.6.2  Trapping User-Defined Shifted Keys

    You can also set a trap for "shifted" keys. A key is said to be shifted
    when you press it simultaneously with one or more of the special keys
    SHIFT, CTRL, or ALTor if you press it after toggling on the keys NUM LOCK
    or CAPS LOCK.

    This is how to trap the following key combinations:

    KEY keynumber, CHR$(keyboardflag) + CHR$(scancode)
    ON KEY(keynumber) GOSUB line
    KEY(keynumber) ON

    Here, keynumber is a value from 15 to 25; scancode is the scan code for
    the primary key; and keyboardflag is the sum of the individual codes for
    the special keys pressed, as shown in the following list:

    Key                                  Code for keyboardflag
    ──────────────────────────────────────────────────────────────────────────
    SHIFT                                1, 2, or 3
                                        Key trapping assumes the left and
                                        right shift keys are the same, so you
                                        can trap the SHIFT key with 1 (left),
                                        2 (right), or 3 (left + right).

    CTRL                                 4

    ALT                                  8

    NUM LOCK                             32

    CAPS LOCK                            64

    Any extended key on the 101-key      128
    keyboard (in other words, a key
    such as LEFT or DELETE that is not
    on the numeric keypad)
    ──────────────────────────────────────────────────────────────────────────

    For example, the following statements turn on trapping of CTRL+S. Note
    these statements are designed to trap both the CTRL+S (lowercase) and
    CTRL+SHIFT+S (uppercase) key combinations. To trap the uppercase S, your
    program must recognize capital letters produced by holding down the SHIFT
    key, as well as those produced when the CAPS LOCK key is active, as shown
    here:

    ' 31 = scan code for S key
    '  4 = code for CTRL key
    KEY 15, CHR$(4) + CHR$(31)     ' Trap CTRL+S.

    '  5 = code for CTRL key + code for SHIFT key
    KEY 16, CHR$(5) + CHR$(31)     ' Trap CTRL+SHIFT+S.

    ' 68 = code for CTRL key + code for CAPSLOCK
    KEY 17, CHR$(68) + CHR$(31)    ' Trap CTRL+CAPSLOCK+S.

    ON KEY (15) GOSUB CtrlSTrap    ' Tell program where to
    ON KEY (16) GOSUB CtrlSTrap    ' branch (note: same
    ON KEY (17) GOSUB CtrlSTrap    ' subroutine for each key).

    KEY (15) ON                    ' Activate key detection for
    KEY (16) ON                    ' all three combinations.
    KEY (17) ON
    .
    .
    .

    The following statements turn on trapping of CTRL+ALT+DEL:

    ' 12 = 4 + 8 = (code for CTRL key) + (code for ALT key)
    ' 83 = scan code for DEL key
    KEY 20, CHR$(12) + CHR$(83)
    ON KEY(20) GOSUB KeyHandler
    KEY(20) ON
    .
    .
    .

    Note in the preceding example that the BASIC event trap overrides the
    normal effect of CTRL+ALT+DEL (system reset). Using this trap in your
    program is a handy way to prevent the user from accidentally rebooting
    while a program is running.

    If you use a 101-key keyboard, you can trap any of the keys on the
    dedicated keypad by assigning the string

    CHR$(128) + CHR$(scancode)

    to any of the keynumber values from 15 to 25.

    The next example shows how to trap the LEFT direction keys on both the
    dedicated cursor keypad and the numeric keypad.

    ' 128 = keyboard flag for keys on the
    '       dedicated cursor keypad
    '  75 = scan code for LEFT arrow key

    KEY 15, CHR$(128) + CHR$(75)    ' Trap LEFT key on
    ON KEY(15) GOSUB CursorPad      ' the dedicated
    KEY(15) ON                      ' cursor keypad.

    ON KEY(12) GOSUB NumericPad     ' Trap LEFT key on
    KEY(12) ON                      ' the numeric keypad.

    DO: LOOP UNTIL INKEY$ = "q"     ' Start idle loop.
    END

    CursorPad:
        PRINT "Pressed LEFT key on cursor keypad."
    RETURN

    NumericPad:
        PRINT "Pressed LEFT key on numeric keypad."
    RETURN

    ──────────────────────────────────────────────────────────────────────────
    IMPORTANT
    For compatibility, QuickBASIC adopts many conventions of BASICA. One of
    these has to do with the way FUNCTION keys are trapped.
    If you initiate FUNCTION key trapping with an ON KEY (n) GOSUB
    statement, both BASICA and QuickBASIC trap Fn regardless of whether a
    shift key (CTRL, ALT, SHIFT) is also pressed. This means that
    user-defined traps for shifted versions of that FUNCTION key are
    ignored.
    Therefore, if you wish to trap a FUNCTION key in both its shifted and
    unshifted states, you should create a user definition for each state.
    Keys that are only used unshifted can continue to use the ON KEY (n)
    GOSUB statement.
    ──────────────────────────────────────────────────────────────────────────

6.2.7  Trapping Music Events

    When you use the PLAY statement to play music, you can choose whether the
    music plays in the foreground or in the background. If you choose
    foreground music (which is the default) nothing else can happen until the
    music finishes playing. However, if you use the MB (Music Background)
    option in a PLAY music string, the tune plays in the background while
    subsequent statements in your program continue executing.

    The PLAY statement plays music in the background by feeding up to 32 notes
    at a time into a buffer, then playing the notes in the buffer while the
    program does other things. A "music trap" works by checking the number of
    notes currently left to be played in the buffer. As soon as this number
    drops below the limit you set in the trap, the program branches to the
    first line of the specified routine.

    To set a music trap in your program, you need the following statements:

    ON PLAY(limit) GOSUB line
    PLAY ON
    PLAY "MB"
    .
    .
    .
    PLAY musicstring
    [[PLAY musicstring]]
    .
    .
    .

    Here, limit is a number between 1 and 32. For example, this fragment
    causes the program to branch to the MusicTrap subroutine whenever the
    number of notes remaining to be played in the music buffer goes from eight
    to seven:

    ON PLAY(8) GOSUB MusicTrap
    PLAY ON
    .
    .
    .
    PLAY "MB"       ' Play subsequent notes in the background.
    PLAY "o1 A# B# C-"
    .
    .
    .
    MusicTrap:
        ' Music-trap subroutine
        .
        .
        .
    RETURN

    ──────────────────────────────────────────────────────────────────────────
    IMPORTANT
    A music trap is triggered only when the number of notes goes from limit
    to limit-1. For example, if the music buffer in the preceding example
    never contained more than seven notes, the trap would never occur. In
    the example, the trap happens only when the number of notes drops from
    eight to seven.
    ──────────────────────────────────────────────────────────────────────────

    You can use a music-trap subroutine to play the same piece of music
    repeatedly while your program executes, as shown in the next example:

    ' Turn on trapping of background music events:
    PLAY ON

    ' Branch to the Refresh subroutine when there are fewer than
    ' two notes in the background music buffer:
    ON PLAY(2) GOSUB Refresh

    PRINT "Press any key to start, q to end."
    Pause$ = INPUT$(1)

    ' Select the background music option for PLAY:
    PLAY "MB"

    ' Start playing the music, so notes will be put in the
    ' background music buffer:
    GOSUB Refresh

    I = 0

    DO

        ' Print the numbers from 0 to 10,000 over and over until
        ' the user presses the "q" key. While this is happening,
        ' the music will repeat in the background:
        PRINT I
        I = (I + 1) MOD 10001
    LOOP UNTIL INKEY$ = "q"

    END

    Refresh:

        ' Plays the opening motive of
        ' Beethoven's Fifth Symphony:
        Listen$ = "t180 o2 p2 p8 L8 GGG L2 E-"
        Fate$   = "p24 p8 L8 FFF L2 D"
        PLAY Listen$ + Fate$
    RETURN


6.3  Error and Event Trapping in SUB or FUNCTION Procedures

    The most important thing to remember when using error or event trapping
    with BASIC procedures is that either of the following statements can
    appear within a SUB...END SUB or FUNCTION...END FUNCTION block:

    ON ERROR GOTO line ON event GOSUB line

    However, the line referred to in each case must identify a line in the
    module-level code, not another line within the SUB or FUNCTION.

    Example

    The following example shows where to put an error-handling routine that
    processes errors trapped within a SUB procedure:

    CALL ShortSub
    END

    CatchError:
        ' Put the CatchError routine at the module level,
        ' outside the subprogram:
        PRINT "Error" ERR "caught by error handler."
    RESUME NEXT

    SUB ShortSub STATIC
        ON ERROR GOTO CatchError
        ERROR 62
    END SUB

    Output

    Error 62 caught by error handler.


6.4  Trapping across Multiple Modules

    Prior to QuickBASIC 4.5, only events could be trapped across modules. Once
    an event-handling routine was defined and an event trap was activated in
    one module, an occurrence of that event during program execution in any
    other module triggered a branch to the routine.

    Errors could not be trapped across modules. If an error occurred in a
    module lacking an active error handler, program execution would halt, even
    if there were a handler in another module that could have taken care of
    the problem.

    QuickBASIC 4.5 expands the scope of error trapping. Errors, as well as
    events, can be trapped across modules. The next two sections explain how
    this works and the slight remaining differences between event and error
    trapping.

6.4.1  Event Trapping across Modules

    The output from the following program shows that a trap set for the F1
    function key in the main module is triggered even when program control is
    in another module:

    ' =========================================================
    '                      MODULE
    ' =========================================================
    ON KEY (1) GOSUB GotF1Key
    KEY (1) ON
    PRINT "In main module. Press c to continue."

    DO: LOOP UNTIL INKEY$ = "c"

    CALL SubKey

    PRINT "Back in main module. Press q to end."
    DO : LOOP UNTIL INKEY$ = "q"
    END

    GotF1Key:
        PRINT "Handled F1 keystroke in main module."
    RETURN

    ' =========================================================
    '                      SUBKEY MODULE
    ' =========================================================
    SUB SubKey STATIC
        PRINT "In module with SUBKEY. Press r to return."

        ' Pressing F1 here still invokes the GotF1Key
        ' subroutine in the MAIN module:
        DO: LOOP UNTIL INKEY$ = "r"
    END SUB

    Output

    In main module. Press c to continue.
    Handled F1 keystroke in main module.
    In module with SUBKEY. Press r to return.
    Handled F1 keystroke in main module.
    Back in main module. Press q to end.
    Handled F1 keystroke in main module.

6.4.2  Error Trapping across Modules

    Errors can be trapped across multiple modules. If there is no active error
    handler in the module where the error occurred, BASIC looks for one in the
    module from which the active module was invoked, continuing back through
    the sequence of modules called until it finds a module with an active
    error handler. If it cannot find one, an error message is displayed and
    program execution halts.

    Note that BASIC does not search through all modules──only the ones that
    were in the path of invocation leading to the code that produced the
    error.

    An ON ERROR statement must be executed before an error occurs in order for
    BASIC to look for a handler. Therefore, you must put the ON ERROR GOTO
    statement where the flow of a program's control can reach it; for example,
    place it inside a procedure called from the main module (see the examples
    that follow).

    Examples

    The following example shows how to trap errors for a procedure in a Quick
    library. The AdapterType procedure in this library tries all possible
    SCREEN statements to see which graphics screen modes your computer's
    hardware supports. (See Appendix H, "Creating and Using Quick Libraries,"
    for more information on Quick libraries.)

    ' =========== MODULE-LEVEL CODE IN QUICK LIBRARY ==========
    ' The error-handling routines for procedures in this
    ' library must be defined at this level. This level is
    ' executed only when there is an error in the procedures.
    ' =========================================================

    DEFINT A-Z

    CONST FALSE = 0, TRUE = NOT FALSE

    .
    .
    .
    CALL AdapterType
    .
    .
    .
    END

    DitchMe:                        ' Error-handling routine
        DisplayError = TRUE
        RESUME NEXT

    ' ========== PROCEDURE-LEVEL CODE IN QUICK LIBRARY ========
    '          Error trapping is activated at this level.
    ' =========================================================

    SUB AdapterType STATIC

        SHARED DisplayError          ' DisplayError variable is
                                    ' shared with DitchMe error
                                    ' handler in code above.
        DIM DisplayType(1 TO 13)     ' Dimension DisplayType
                                    ' array.

        J = 1                        ' Initialize subscript
                                    ' counter for DisplayType
                                    ' array.

    ON ERROR GOTO DitchMe   ' Set up the error trap.

    FOR Test = 13 TO 1 STEP -1
        SCREEN Test               ' Try a SCREEN statement to
                                    ' see if it causes error.
        IF NOT DisplayError THEN  ' No error, so this is a
                                    ' valid screen mode.
            DisplayType(J) = Test ' Store mode in array.
            J = J + 1             ' Increment the subscript
                                    ' counter.
        ELSE
            DisplayError = FALSE  ' Error; reset DisplayError.
        END IF
        NEXT Test

        SCREEN 0, 0                  ' Set 80-column text mode.
        WIDTH 80
        LOCATE 5, 10
        PRINT "Your computer supports these screen modes:"
        PRINT

        FOR I = 1 TO J               ' Print modes not causing
                                    ' errors.
        PRINT TAB(20); "SCREEN"; DisplayType(I)
        NEXT I

        LOCATE 20, 10
        PRINT "Press any key to continue..."

        DO: LOOP WHILE INKEY$ = ""

    END SUB

    If you want the error-handling routine in each module to do the exactly
    the same thing, you can have each routine invoke a common error-processing
    SUB procedure, as shown in the next example:

    ' =========================================================
    '                       MAIN MODULE
    ' =========================================================

    DECLARE SUB GlobalHandler (ModuleName$)
    DECLARE SUB ShortSub ()

    ON ERROR GOTO LocalHandler
    ERROR 57                ' Simulate occurrence of error 57
                            ' ("Device I/O error").
    ShortSub                ' Call the ShortSub SUB.
    END

    LocalHandler:
        ModuleName$ = "MAIN"
        CALL GlobalHandler(ModuleName$)  ' Call the
                                        ' GlobalHandler SUB.
    RESUME NEXT

    ' =========================================================
    '                     SHORTSUB MODULE
    ' =========================================================

    DECLARE SUB GlobalHandler (ModuleName$)

    LocalHandler:
        ModuleName$ = "SHORTSUB"
        GlobalHandler ModuleName$    ' Call GlobalHandler.
    RESUME NEXT

    SUB ShortSub STATIC
        ON ERROR GOTO LocalHandler
        ERROR 13                     ' Simulate a "Type mismatch" error.
    END SUB


    ' =========================================================
    '                    GLOBALHANDLER MODULE
    ' =========================================================

    SUB GlobalHandler (ModuleName$) STATIC
        PRINT "Trapped error";ERR;"in";ModuleName$;"module"
    END SUB

    Output

    Trapped error 57 in MAIN module.
    Trapped error 13 in SHORTSUB module.


6.5  Trapping Errors and Events in Programs Compiled with BC

    If both of the following statements apply to your program, then you must
    use the appropriate BC command-line option listed below when compiling
    your program:

    ■ You are developing the program outside the QuickBASIC environment──that
    is, you are using another text editor to enter your BASIC source code,
    then creating a stand-alone executable program from this source code
    with the commands BC and LINK.

    ■ Your program contains any of the statements listed in the second column
    below.

    Table 6.1  BC Command-Line Options for Error and Event Trapping
╓┌─┌──────────────┌────────────────────────────┌─────────────────────────────╖
    Command-Line   Statements                   Explanation
    Option
    ──────────────────────────────────────────────────────────────────────────
    /E             ON ERROR GOTO                The /E option tells the
                    RESUME line                  compiler your program does its
                                                own error trapping with ON
                                                ERROR GOTO and RESUME
                                                statements.

    /V             ON event GOSUB               The /V option tells the
                    event ON                     program to check between each
                                                statement to see if the given
                                                event has taken place
    Command-Line   Statements                   Explanation
    Option
    ──────────────────────────────────────────────────────────────────────────
                                                event has taken place
                                                (contrast this with the effect
                                                of /W).

    /W             ON event GOSUB               The /W option tells the
                    event ON                     program to check between each
                                                line to see if the given event
                                                has taken place (contrast this
                                                with the effect of /V).
                                                Since BASIC allows multiple
                                                statements on a single line,
                                                programs compiled with /W may
                                                check less frequently than
                                                those compiled with /V.

    /X             RESUME                       The /X option tells the
                    RESUME NEXT                  compiler you have used one of
                    RESUME 0                     the preceding forms of RESUME
    Command-Line   Statements                   Explanation
    Option
    ──────────────────────────────────────────────────────────────────────────
                    RESUME 0                     the preceding forms of RESUME
                                                in your program to return
                                                control from an error-handling
                                                routine.
    ──────────────────────────────────────────────────────────────────────────


    Example

    The following DOS command lines compile and link a BASIC module named
    RMTAB.BAS, creating a stand-alone program RMTAB.EXE. (As this program is
    compiled without the /O option, it requires the BRUN45.LIB run-time
    library in order to run. See Appendix G, "Compiling and Linking from
    DOS," for more information on compiling and linking.) Since this module
    contains ON ERROR GOTO and RESUME NEXT statements, the /E and /X options
    are required when compiling.

    BC RMTAB , , /E /X;
    LINK RMTAB;


6.6  Sample Application: Trapping File-Access Errors (FILERR.BAS)

    The following program gets as input both a file name and a string to
    search for in the file. It then lists all lines in the given file
    containing the specified string. If a file-access error occurs, it is
    trapped and dealt with in the ErrorProc routine.

    Statements and Functions Used

    This program demonstrates the use of the following error-handling
    statements and functions:

    ■ ERR

    ■ ON ERROR GOTO

    ■ RESUME

    ■ RESUME NEXT

    Program Listing

    ' Declare symbolic constants:
    CONST FALSE = 0, TRUE = NOT FALSE

    DECLARE FUNCTION GetFileName$ ()

    ' Set up the ERROR trap and specify
    ' the name of the error-handling routine:
    ON ERROR GOTO ErrorProc

    DO
        Restart = FALSE
        CLS

        FileName$ = GetFileName$     ' Input file name.

        IF FileName$ = "" THEN
        END                       ' End if <ENTER> pressed.
        ELSE

        ' Otherwise, open the file, assigning it
        ' the next available file number:
        FileNum = FREEFILE
        OPEN FileName$ FOR INPUT AS FileNum
        END IF

    IF NOT Restart THEN

        ' Input search string:
        LINE INPUT "Enter string to locate:", LocString$
        LocString$ = UCASE$(LocString$)

        ' Loop through the lines in the file,
        ' printing them if they contain the search string:
        LineNum = 1
        DO WHILE NOT EOF(FileNum)

            ' Input line from file:
            LINE INPUT #FileNum, LineBuffer$

            ' Check for string, printing the line
            ' and its number if found:
            IF INSTR(UCASE$(LineBuffer$), LocString$) <> 0 THEN
                PRINT USING "#### &"; LineNum, LineBuffer$
            END IF

            LineNum = LineNum + 1
        LOOP

        CLOSE FileNum             ' Close the file.

        END IF
    LOOP WHILE Restart = TRUE

    END

    ErrorProc:

        SELECT CASE ERR

        CASE 64:                  ' Bad file name
            PRINT "** ERROR - Invalid file name"

            ' Get a new file name and try again:
            FileName$ = GetFileName$

            ' Resume at the statement that caused the error:
            RESUME

    CASE 71:                  ' Disk not ready.
            PRINT "** ERROR - Disk drive not ready"
            PRINT "Press C to continue, R to restart, Q to quit: "
            DO
                Char$ = UCASE$(INPUT$(1))
                IF Char$ = "C" THEN
                RESUME           ' Resume where you left off.

                ELSEIF Char$ = "R" THEN
                Restart = TRUE   ' Resume at beginning.
                RESUME NEXT

                ELSEIF Char$ = "Q" THEN
                    END              ' Don't resume at all.
                    END IF
            LOOP

        CASE 53, 76:              ' File or path not found.
            PRINT "** ERROR - File or path not found"
            FileName$ = GetFileName$
            RESUME

        CASE ELSE:                ' Unforeseen error.

            ' Disable error trapping and
            ' print standard system message:
            ON ERROR GOTO 0
        END SELECT

    ' ===================== GETFILENAME$ =======================
    '           Returns a file name from user input
    ' ==========================================================

    FUNCTION GetFileName$ STATIC
        INPUT "Enter file to search (or ENTER to quit):", FTemp$
        GetFileName$ = FTemp$
    END FUNCTION



────────────────────────────────────────────────────────────────────────────
Chapter 7  Programming with Modules

    This chapter shows how you can gain more control over your programming
    projects by dividing them into "modules." Modules provide a powerful
    organizing function by letting you divide a program into logically related
    parts (rather than keeping all the code in one file).

    This chapter will show you how to use modules to:

    ■ Write and test new procedures separately from the rest of the program

    ■ Create libraries of your own SUB and FUNCTION procedures that can be
    added to any new program

    ■ Combine routines from other languages (such as C or MASM) with your
    BASIC programs


7.1  Why Use Modules?

    A module is a file that contains an executable part of your program. A
    complete program can be contained in a single module, or it can be divided
    among two or more modules.

    In dividing up a program into modules, logically related sections are
    placed in separate files. This organization can speed and simplify the
    process of writing, testing, and debugging.

    Dividing your program into modules has these advantages:

    ■ Modules allow procedures to be written separately from the rest of the
    program, then combined with it. This arrangement is especially useful
    for testing the procedures, since they can then be checked outside the
    environment of the program.

    ■ Two or more programmers can work on different parts of the same program
    without interference. This is especially helpful in managing complex
    programming projects.

    ■ As you create procedures that meet your own specific programming needs,
    you can add these procedures to their own module. They can then be
    reused in new programs simply by loading that module.

    ■ Multiple modules simplify software maintenance. A procedure used by many
    programs can be in one library module; if changes are needed, it only
    has to be modified once.


7.2  Main Modules

    The module containing the first executable statement of a program is
    called the "main module." This statement is never part of a procedure,
    because execution cannot begin within a procedure.

    Everything in a module except SUB and FUNCTION procedures is said to be
    "module-level code." In QuickBASIC, the module-level code is every
    statement that can be accessed without switching to a procedure-editing
    window. Figure 7.1 illustrates the relationship between these elements.


7.3  Modules Containing Only Procedures

    A module need not contain module-level code; a module can consist of
    nothing but SUB and FUNCTION procedures. Indeed, this is the most
    important use of modules.

    Modules are often used to "split off" the procedures from the body of the
    program. This makes it easy to divide a project among programmers, for
    example. Also, as you create general-purpose procedures that are useful in
    a variety of programs (such as procedures that evaluate matrices, send
    binary data to a COM port, alter strings, or handle errors), these can be
    stored in modules, then used in new programs simply by loading the
    appropriate module into QuickBASIC.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    If a procedure in a procedures-only module needs an error- or
    event-handling routine or a COMMON SHARED statement, these are inserted
    at module level.
    ──────────────────────────────────────────────────────────────────────────


    ┌───────────────────────────────────────────────────────────────────────┐
    │             Program execution begins here                             │
    │       ┌─ ┌────────────────────────────────────────────┐ ─┐            │
    │       │  │  declarations and definitions              │  │            │
    │       │  │  executable program statement 1            │  │            │
    │       │  │  executable program statement 2            │  │            │
    │       │  │  .                                         │  ├─ Module-   │
    │       │  │  .                                         │  │ level code │
    │       │  │  .                                         │  │            │
    │       │  │  END                                       │  │            │
    │       │  │  error-handling routines                   │  │            │
    │       │  └────────────────────────────────────────────┘ ─┘            │
    │       │  ┌────────────────────────────────────────────┐ ─┐            │
    │       │  │  SUB                                       │  │            │
    │       │  │   statements in first SUB procedure        │  │            │
    │       │  │  ENDSUB                                    │  │            │
    │       │  └────────────────────────────────────────────┘  │            │
    │       │  ┌────────────────────────────────────────────┐  │            │
    │ Main ─┤  │  SUB                                       │  │            │
    │module │  │   statements in second SUB procedure       │  │            │
    │       │  │  ENDSUB                                    │  │            │
    │       │  └────────────────────────────────────────────┘  │            │
    │       │     .                                            │            │
    │       │     .                                            ├─Procedures │
    │       │     .                                            │            │
    │       │  ┌────────────────────────────────────────────┐  │            │
    │       │  │  FUNCTION                                  │  │            │
    │       │  │   statements in first FUNCTION procedure   │  │            │
    │       │  │  ENDFUNCTION                               │  │            │
    │       │  └────────────────────────────────────────────┘  │            │
    │       │  ┌────────────────────────────────────────────┐  │            │
    │       │  │  FUNCTION                                  │  │            │
    │       │  │   statements in second FUNCTION procedure  │  │            │
    │       │  │  ENDFUNCTION                               │  │            │
    │       │  └────────────────────────────────────────────┘  │            │
    │       │     .                                            │            │
    │       │     .                                            │            │
    │       │     .                                            │            │
    │       └─                                                ─┘            │
    │                                                                       │
    └───────────────────────────────────────────────────────────────────────┘

    Figure 7.1  Main Module Showing Module-Level Code and Procedures


7.4  Creating a Procedures-Only Module

    It's easy to create a module that contains only procedures. You can enter
    new procedures in a separate file, or you can move procedures from one
    file to another.

    To create a new module:

    1. Invoke QuickBASIC without opening or loading any files.

    2. Write all the SUB and FUNCTION procedures you wish, but don't enter any
        module-level code. (Any error- or event-trapping routines and BASIC
        declarations needed are exceptions.)

    3. Use the Save As command to name and save this module.

    To move procedures from one module to another:

    1. Load the files containing the procedures you want to move.

    2. If the destination file already exists, use the Load File command from
        the File menu to load it, too. If it doesn't exist, use the Create File
        option from the File menu to make the new file.

    3. Choose the SUBs command from the View menu and use its Move feature to
        transfer the procedures from the old to the new file. This transfer is
        made final when you quit QuickBASIC and respond Yes to the dialog box
        that asks whether you want to save the modified files; otherwise, the
        procedures remain where they were when you started.


7.5  Loading Modules

    In QuickBASIC, you can load as many modules as you wish (limited only by
    the available memory) using the Load File command from the File menu. All
    the procedures in all the loaded modules can be called from any other
    procedure or from module-level code. If a module happens to contain a
    procedure that is never called, no harm occurs.

    Any or all of the loaded modules can contain module-level code. QuickBASIC
    normally begins execution with the module-level code of the first module
    loaded. If you want execution to begin in a different module, use the Set
    Main Module command from the Run menu. Execution normally halts at the end
    of the designated main module; by design, QuickBASIC does not continue
    execution with the module-level code from other modules.

    The ability to choose which module-level code gets executed is useful when
    comparing two versions of the same program. For example, you might want to
    test different user interfaces by putting each in a separate module. You
    can also place test code in a module containing only procedures, then use
    the Set Main Module command to switch between the program and the tests.

    You do not have to keep track of which modules your program uses. Whenever
    you use the Save All command, QuickBASIC creates (or updates) a .MAK file,
    which lists all the modules currently loaded. The next time the main
    module is loaded with the Open Program command, QuickBASIC consults this
    .MAK file and automatically loads the modules listed in it.


7.6  Using the DECLARE Statement with Multiple Modules

    The DECLARE statement has several important functions in QuickBASIC. Using
    a DECLARE statement will

    1. Specify the sequence and data types of a procedure's parameters

    2. Enable type-checking, which confirms, each time a procedure is called,
        that the arguments agree with the parameters in both number and data
        type

    3. Identify a FUNCTION procedure's name as a procedure name, not a
        variable name

    4. Most important of all, enable the main module to call procedures
        located in other modules (or Quick libraries)

    QuickBASIC has its own system for automatically inserting the required
    DECLARE statements into your modules. Section 2.5.4, "Checking Arguments
    with the DECLARE Statement," explains the features and limitations of this
    system.

    Despite QuickBASIC's automatic insertion of the DECLARE statement, you may
    wish to create a separate include file that contains all the DECLARE
    statements required for a program. You can update this file manually as
    you add and delete procedures or modify your argument lists.

    If you write your programs with a text editor (rather than the QuickBASIC
    programming environment) and compile with BC, you must insert DECLARE
    statements manually.


7.7  Accessing Variables from Two or More Modules

    You can use the SHARED attribute to make variables accessible both at
    module level and within that module's procedures. If these procedures are
    moved to another module, however, these variables are no longer shared.

    You could pass these variables to each procedure through its argument
    list. This may be inconvenient, though, if you need to pass a large number
    of variables.

    One solution is to use COMMON statements, which enable two or more modules
    to access the same group of variables. Section 2.6, "Sharing Variables
    with SHARED," explains how to do this.

    Another solution is to use a TYPE...END TYPE statement to combine all the
    variables you wish to pass into a single structure. The argument and
    parameter lists then have to include only one variable name, no matter how
    many variables are passed.

    If you are simply splitting up a program and its procedures into separate
    modules, either of these approaches works well. If, on the other hand, you
    are adding a procedure to a module (for use in other programs), you should
    avoid using a COMMON statement. Modules are supposed to make it easy to
    add existing procedures to new programs; COMMON statements complicate the
    process. If a procedure needs a large group of variables, it may not
    belong in a separate module.


7.8  Using Modules During Program Development

    When you start a new programming project, you should first look through
    existing modules to see if there are procedures that can be reused in your
    new software. If any of these procedures aren't already in a separate
    module, you should consider moving them to one.

    As your program takes shape, newly written procedures automatically become
    part of the program file (that is, the main module). You can move them to
    a separate module for testing or perhaps add them to one of your own
    modules along with other general-purpose procedures that are used in other
    programs.

    Your program may need procedures written in other languages. (For example,
    MASM is ideal for direct interface with the hardware, FORTRAN has almost
    any math function you could want, Pascal allows the creation of
    sophisticated data structures, and C provides both structured code and
    direct memory access.) These procedures are compiled and linked into a
    Quick library for use in your program. You can also write a separate
    module to test Quick library procedures the same way you would test other
    procedures.


7.9  Compiling and Linking Modules

    The end product of your programming efforts is usually a stand-alone .EXE
    file. You can create one in QuickBASIC by loading all of a program's
    modules, then selecting the Make EXE File command from the Run menu.

    You can also compile modules with the BC command-line compiler, then use
    LINK to combine the object code. Object files from code written in other
    languages can be linked at the same time.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    When you use the Make EXE File command, all the module-level code and
    every procedure currently loaded is included in the .EXE file, whether
    or not the program uses this code. If you want your program to be as
    compact as possible, you must unload all unneeded module-level code and
    all unneeded procedures before compiling. The same rule applies when
    using BC to compile from the command line; all unused code should be
    removed from the files.
    ──────────────────────────────────────────────────────────────────────────


7.10  Quick Libraries

    Although Microsoft Quick libraries are not modules, it is important that
    you understand their relationship with modules.

    A Quick library contains nothing but procedures. These procedures can be
    written not only in QuickBASIC, but also in other Microsoft languages as
    well (C, Pascal, FORTRAN, and MASM).

    A Quick library contains only compiled code. (Modules contain QuickBASIC
    source code.) A Quick library is created by linking compiled object code
    (.OBJ files). The code in a Quick library can come from any combination of
    Microsoft languages. Appendix H, "Creating and Using Quick Libraries,"
    explains how to create Quick libraries from object code and how to add new
    object code to existing Quick libraries.

    Quick libraries have several uses:

    ■ They provide an interface between QuickBASIC and other languages.

    ■ They allow designers to hide proprietary software. Updates and utilities
    can be distributed as Quick libraries without revealing the source code.

    ■ They load faster and are usually smaller than modules. If a large
    program with many modules loads slowly, converting the nonmain modules
    into a Quick library will improve loading performance.

    Note, however, that modules are the easiest way to work on procedures
    during development because modules are immediately ready to run after each
    edit; you don't have to recreate the Quick library. If you want to put
    your QuickBASIC procedures in a Quick library, wait until the procedures
    are complete and thoroughly debugged.

    When a Quick library is created, any module-level code in the file it was
    created from is automatically included. However, other modules cannot
    access this code, so it just wastes space. Before converting a module to a
    Quick library, be sure that all module-level statements (except any error
    or event handlers and declarations that are used by the procedures) have
    been removed.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    Quick libraries are not included in .MAK files and must be loaded with
    the / L option when you run QuickBASIC. A Quick library has the file
    extension .QLB. During the process of creating the Quick library,
    another library file with the extension .LIB is created. This file
    contains the same code as the Quick library but in a form that allows it
    to be linked with the rest of the program to create a stand-alone
    application.

    If you use Quick libraries to distribute proprietary code
    (data-manipulation procedures, for example), be sure to include the .LIB
    files so that your customers can create stand-alone applications that
    use these procedures. Otherwise, they will be limited to running
    applications within the QuickBASIC environment.
    ──────────────────────────────────────────────────────────────────────────

7.10.1  Creating Quick Libraries

    You can create a Quick library of QuickBASIC procedures with the Make
    Library command from the Run menu. The Quick library created contains
    every procedure currently loaded, whether or not your program calls it.
    (It also contains all the module-level code.) If you want the Quick
    library to be compact, be sure to remove all unused procedures and all
    unnecessary module-level code first.

    You can create as many Quick libraries as you like, containing whatever
    combination of procedures you wish. However, only one Quick library can be
    loaded into QuickBASIC at a time. (You would generally create
    application-specific Quick libraries, containing only the procedures a
    particular program needs.) Large Quick libraries can be created by loading
    many modules, then using the Make Library command.

    You can also compile one or more modules with the BC command, then link
    the object code files to create a Quick library. Quick libraries of
    procedures written

    in other languages are created the same way. In linking, you are not
    limited to one language; the object-code files from any number of
    Microsoft languages can be combined in one Quick library. Appendix H,
    "Creating and Using Quick Libraries," explains how to convert object-code
    (.OBJ) files into Quick libraries.


7.11  Tips for Good Programming with Modules

    You can use modules in any way you think will improve your program or help
    organize your work. The following suggestions are offered as a guide.

    1. Think and organize first.

        When you start on a new project, make a list of the operations you want
        to be performed by procedures. Then look through your own procedure
        library to see if there are any you can use, either as-is or with
        slight modifications. Don't waste time "reinventing the wheel."

    2. Write generalized procedures with broad application.

        Try to write procedures that are useful in a wide variety of programs.
        Don't, however, make the procedure needlessly complex. A good procedure
        is a simple, finely honed tool, not a Swiss army knife.

        It is sometimes useful to alter an existing procedure to work in a new
        program. This might require modifying programs you've already written,
        but it's worth the trouble if the revised procedure is more powerful or
        has broader application.

    3. When creating your own procedure modules, keep logically separate
        procedures in separate modules.

        It makes sense to put string-manipulation procedures in one module,
        matrix-handling procedures in another, and data-communication
        procedures in a third. This arrangement avoids confusion and makes it
        easy to find the procedure you need.



────────────────────────────────────────────────────────────────────────────
PART 2  HEART OF BASIC
────────────────────────────────────────────────────────────────────────────

    Part 2 provides a quick-reference guide to all statements and functions
    used in this version of BASIC.

    Chapter 8 gives a brief summary of the action of each statement or
    function──organized alphabetically by keyword──and includes syntax lines
    that identify the statement's correct form. Use it when programming to
    remind yourself how each one works.

    Chapter 9 is made up of reference tables that organize commonly used
    statements and functions by programming topic. These tables follow the
    same organization as the first six chapters of this book. Use these tables
    to identify alternative ways to approach particular programming
    objectives.



────────────────────────────────────────────────────────────────────────────
Chapter 8  Statement and Function Summary

    This chapter summarizes QuickBASIC statements and functions. Each
    statement or function name is followed by an action description and a
    syntax line. The syntax line shows exactly what you must enter to use the
    statement.

    Complete details of the typographic conventions used in syntax lines are
    given in the introduction to this manual. In general, items you must type
    exactly as shown are in boldface type; placeholders for items of
    information you must supply are in Italic type. Square brackets indicate
    optional items.

    The QB Advisor (QuickBASIC's on-line language help) provides for each
    statement or function:

    ■ A summary of the statement's action and syntax (the QuickSCREEN)

    ■ Complete details of how to use the statement, including explanations of
    the placeholders

    ■ One of more program examples illustrating statement use

    You can access this information by putting the cursor on any BASIC keyword
    displayed in the QuickBASIC View window and pressing F1.

    The statements and functions in this chapter are grouped by topic in
    Chapter 9, "Quick-Reference Tables." Use Chapter 9 to find out what
    statements are available for a particular programming task.


ABS Function

    Returns the absolute value of a numeric expression

    SYNTAX  ABS(numeric-expression)


ASC Function

    Returns a numeric value that is the ASCII code for the first character in
    a string expression

    SYNTAX  ASC(stringexpression)


ATN Function

    Returns the arctangent of a numeric expression (the angle whose tangent is
    equal to the numeric expression)

    SYNTAX  ATN(numeric-expression)


BEEP Statement

    Sounds the speaker

    SYNTAX  BEEP


BLOAD Statement

    Loads a memory-image file, created by BSAVE, into memory from an input
    file or device

    SYNTAX  BLOAD filespec [[,offset]]


BSAVE Statement

    Transfers the contents of an area of memory to an output file or device

    SYNTAX  BSAVE filespec,offset,length


CALL Statement (BASIC Procedures)

    Transfers control to a BASIC SUB

    SYNTAX 1  CALL name[[(argumentlist )]]

    SYNTAX 2  name[[argumentlist]]


CALL, CALLS Statement (Non-BASIC Procedures)

    Transfers control to a procedure written in another language

    SYNTAX 1  CALL name [[(call-argumentlist )]]

    SYNTAX 2  name [[call-argumentlist]]

    SYNTAX 3  CALLS name [[(calls-argumentlist )]]


CALL INT86OLD Statements

    Allows programs to perform DOS system calls

    SYNTAX  CALL INT86OLD (int_no,in_array(),out_array())
            CALL INT86XOLD (int_no,in_array(),out_array())


CALL ABSOLUTE Statement

    Transfers control to a machine-language procedure

    SYNTAX  CALL ABSOLUTE ([[argumentlist,]]integervariable)


CALL INTERRUPT Statements

    Allows BASIC programs to perform DOS system calls

    SYNTAX  CALL INTERRUPT (interruptnum, inregs, outregs)
            CALL INTERRUPTX (interruptnum, inregs, outregs)


CDBL Function

    Converts a numeric expression to a double-precision number

    SYNTAX  CDBL(numeric-expression)


CHAIN Statement

    Transfers control from the current program to another program

    SYNTAX  CHAIN filespec


CHDIR Statement

    Changes the current default directory for the specified drive

    SYNTAX  CHDIR pathspec


CHR$ Function

    Returns a one-character string whose ASCII code is the argument

    SYNTAX  CHR$(code)


CINT Function

    Converts a numeric expression to an integer by rounding the fractional
    part of the expression

    SYNTAX  CINT(numeric-expression)


CIRCLE Statement

    Draws an ellipse or circle with a specified center and radius

    SYNTAX  CIRCLE[[STEP]]
            (x,y),radius[[,[[color]][[,[[start]][[,[[end]][[,aspect]]]]]]]]


CLEAR Statement

    Reinitializes all program variables, closes files, and sets the stack size

    SYNTAX  CLEAR[[,,stack]]


CLNG Function

    Converts a numeric expression to a long (4-byte) integer by rounding the
    fractional part of the expression

    SYNTAX  CLNG(numeric-expression)


CLOSE Statement

    Concludes I/O to a file or device

    SYNTAX  CLOSE[[[[#]] filenumber [[,[[#]] filenumber]]... ]]


CLS Statement

    Clears the screen

    SYNTAX  CLS[[{0| 1| 2}]]


COLOR Statement

    Selects display colors

    SYNTAX  COLOR[[foreground]][[,[[background]][[,border]]]]  Screen mode 0
            COLOR[[background]][[,palette]]                    Screen mode 1
            COLOR[[foreground]][[,background]]                 Screen modes
                                                                7-10
            COLOR[[foreground]]                                Screen modes
                                                                12-13


COM Statements

    Enables, disables, or inhibits event trapping of communications activity
    on a specified port

    SYNTAX  COM(n) ON COM(n) OFF COM(n) STOP


COMMAND$ Function

    Returns the command line used to invoke the program

    SYNTAX  COMMAND$


COMMON Statement

    Defines global variables for sharing between modules or for chaining to
    another program

    SYNTAX  COMMON[[SHARED]][[/blockname/]] variablelist


CONST Statement

    Declares symbolic constants to use in place of numeric or string values

    SYNTAX  CONST constantname = expression [[,constantname = expression]]...


COS Function

    Returns the cosine of an angle given in radians

    SYNTAX  COS(numeric-expression)


CSNG Function

    Converts a numeric expression to a single-precision value

    SYNTAX  CSNG(numeric-expression)


CSRLIN Function

    Returns the current line (row) position of the cursor

    SYNTAX  CSRLIN


CVI, CVS, CVL, CVD Functions

    Convert strings containing numeric values to numbers

    SYNTAX  CVI(2-byte-string)
            CVS(4-byte-string)
            CVL(4-byte-string)
            CVD(8-byte-string)


CVSMBF, CVDMBF Functions

    Convert strings containing Microsoft Binary format numbers to IEEE-format
    numbers

    SYNTAX  CVSMBF (4-byte-string)
            CVDMBF (8-byte-string)


DATA Statement

    Stores the numeric and string constants used by a program's READ
    statements

    SYNTAX  DATA constant1 [[,constant2]]...


DATE$ Function

    Returns a string containing the current date

    SYNTAX  DATE$


DATE$ Statement

    Sets the current date

    SYNTAX  DATE$ = stringexpression


DECLARE Statement (BASIC Procedures)

    Declares references to BASIC procedures and invokes argument type checking

    SYNTAX  DECLARE{FUNCTION | SUB } name [[([[parameterlist]])]]


DECLARE Statement (Non-BASIC Procedures)

    Declares calling sequences for external procedures written in other
    languages

    SYNTAX 1  DECLARE FUNCTION name [[CDECL]]
            [[ALIAS "aliasname"]][[([[parameterlist]])]]

    SYNTAX 2  DECLARE SUB name [[CDECL]] [[ALIAS
            "aliasname"]][[([[parameterlist]])]]


DEF FN Statement

    Defines and names a function

    SYNTAX 1  DEF FNname[[(parameterlist)]] = expression

    SYNTAX 2  DEF FNname[[(parameterlist)]]
            .
            .
            .
            FNname = expression
            .
            .
            .
            END DEF


DEF SEG Statement

    Sets the current segment address for a subsequent PEEK function or a
    BLOAD, BSAVE, CALL ABSOLUTE, or POKE statement

    SYNTAX  DEF SEG[[=address]]


DEFtype Statements

    Set the default data type for variables, DEF FN functions, and FUNCTION
    procedures

    SYNTAX  DEFINT letterrange [[,letterrange]]...
            DEFSNG letterrange [[,letterrange]]...
            DEFDBL letterrange [[,letterrange]]...
            DEFLNG letterrange [[,letterrange]]...
            DEFSTR letterrange [[,letterrange]]...


DIM Statement

    Declares a variable and allocates storage space

    SYNTAX  DIM[[SHARED]] variable[[(subscripts)]] [[AS type]]
            [[,variable[[(subscripts)]] [[AStype]]]]...


DO...LOOP Statements

    Repeats a block of statements while a condition is true or until a
    condition becomes true

    SYNTAX 1  DO     [[statementblock]]
            LOOP[[{WHILE| UNTIL} booleanexpression]]

    SYNTAX 2  DO[[{WHILE| UNTIL} booleanexpression]]
                    [[statementblock]]
            LOOP


DRAW Statement

    Draws an object defined by stringexpression

    SYNTAX  DRAW stringexpression


END Statement

    Ends a BASIC program, procedure, or block

    SYNTAX  END[[{DEF| FUNCTION | IF| SELECT| SUB | TYPE}]]


ENVIRON$ Function

    Retrieves an environment string from the DOS environment-string table

    SYNTAX  ENVIRON$ (environmentstring)
            ENVIRON$ (n)


ENVIRON Statement

    Modifies a parameter in the DOS environment-string table

    SYNTAX  ENVIRON stringexpression


EOF Function

    Tests for the end-of-file condition

    SYNTAX  EOF(filenumber)


ERASE Statement

    Reinitializes the elements of static arrays; deallocates dynamic arrays

    SYNTAX  ERASE arrayname [[,arrayname...]]


ERDEV, ERDEV$ Functions

    Provides device-specific status information after an error

    SYNTAX  ERDEV
            ERDEV$


ERR, ERL Functions

    Return error status

    SYNTAX  ERR
            ERL


ERROR Statement

    Simulates the occurrence of a BASIC error or allows the user to define
    error codes

    SYNTAX  ERROR integerexpression


EXIT Statement

    Exits a DEF FN function, DO...LOOP or FOR...NEXT loop, FUNCTION, or SUB

    SYNTAX  EXIT{DEF| DO| FOR| FUNCTION| SUB}


EXP Function

    Calculates the exponential function

    SYNTAX  EXP(x)


FIELD Statement

    Allocates space for variables in a random-access file buffer

    SYNTAX  FIELD[[#]]filenumber, fieldwidth AS stringvariable...


FILEATTR Function

    Returns information about an open file

    SYNTAX  FILEATTR(filenumber,attribute)


FILES Statement

    Prints the names of files residing on the specified disk

    SYNTAX  FILES[[filespec]]


FIX Function

    Returns the truncated integer part of x

    SYNTAX  FIX(x)


FOR...NEXT Statement

    Repeats a group of instructions a specified number of times

    SYNTAX  FOR counter = start TO end [[STEP increment]]
            .
            .
            .
            NEXT[[counter[[,counter...]]]]


FRE Function

    Returns the amount of available memory

    SYNTAX 1  FRE(numeric-expression)

    SYNTAX 2  FRE(stringexpression)


FREEFILE Function

    Returns the next free BASIC file number

    SYNTAX  FREEFILE


FUNCTION Statement

    Declares the name, the parameters, and the code that form the body of a
    FUNCTION procedure

    SYNTAX  FUNCTION name [[(parameter-list)]][[STATIC]]
            .
            .
            .
            name = expression
            .
            .
            .
            END FUNCTION


GET Statement──File I/O

    Reads from a disk file into a random-access buffer or variable

    SYNTAX  GET[[#]]filenumber[[,[[recordnumber]][[,variable]]]]


GET Statement──Graphics

    Stores graphic images from the screen

    SYNTAX  GET[[STEP]](x1,y1) -[[STEP]](x2,y2),arrayname[[(indices)]]


GOSUB...RETURN Statements

    Branches to, and returns from, a subroutine

    SYNTAX  GOSUB{linelabel1| linenumber1 }
            .
            .
            .
            RETURN[[linelabel2| linenumber2 ]]


GOTO Statement

    Branches unconditionally to the specified line

    SYNTAX  GOTO{linelabel| linenumber}


HEX$ Function

    Returns a string that represents the hexadecimal value of the decimal
    argument expression

    SYNTAX  HEX$(expression)


IF...THEN...ELSE Statements

    Allows conditional execution, based on the evaluation of a Boolean
    expression

    SYNTAX 1 (SINGLE LINE)  IF booleanexpression THEN thenpart [[ELSE
                            elsepart]]

    SYNTAX 2 (BLOCK)   IF booleanexpression1 THEN
                            [[statementblock-1]]
                        [[ELSEIF booleanexpression2 THEN
                            [[statementblock-2]]]]
                        .
                        .
                        .
                        [[ELSE
                            [[statement-blockn]]]]
                        END IF


INKEY$ Function

    Reads a character from the keyboard

    SYNTAX  INKEY$


INP Function

    Returns the byte read from an I/O port

    SYNTAX  INP(port)


INPUT$ Function

    Returns a string of characters read from the specified file

    SYNTAX  INPUT$(n[[,[[#]]filenumber]])


INPUT Statement

    Allows input from the keyboard during program execution

    SYNTAX  INPUT[[;]][["promptstring"{; | ,}]] variablelist


INPUT # Statement

    Reads data items from a sequential device or file and assigns them to
    variables

    SYNTAX  INPUT # filenumber, variablelist


INSTR Function

    Returns the character position of the first occurrence of a string in
    another string

    SYNTAX  INSTR([[start,]]stringexpression1,stringexpression2)


INT Function

    Returns the largest integer less than or equal to numeric-expression

    SYNTAX  INT(numeric-expression)


IOCTL$ Function

    Receives a control data string from a device driver

    SYNTAX  IOCTL$ ([[#]]filenumber)


IOCTL Statement

    Transmits a control data string to a device driver

    SYNTAX  IOCTL[[#]]filenumber, string


KEY Statements

    Assign soft-key string values to function keys, then display the values
    and enable or disable the FUNCTION key display line

    SYNTAX  KEY n, stringexpression
            KEY LIST
            KEY ON
            KEY OFF


KEY(n) Statements

    Start or stop trapping of specified keys

    SYNTAX  KEY(n) ON
            KEY(n) OFF
            KEY(n) STOP


KILL Statement

    Deletes a file from disk

    SYNTAX  KILL filespec


LBOUND Function

    Returns the lower bound (smallest available subscript) for the indicated
    dimension of an array

    SYNTAX  LBOUND(array[[,dimension]])


LCASE$ Function

    Returns a string expression with all letters in lower-case

    SYNTAX  LCASE$ (stringexpression)


LEFT$ Function

    Returns a string consisting of the leftmost n characters of a string

    SYNTAX  LEFT$(stringexpression,n)


LEN Function

    Returns the number of characters in a string or the number of bytes
    required by a variable

    SYNTAX  LEN(stringexpression)
            LEN(variable)


LET Statement

    Assigns the value of an expression to a variable

    SYNTAX  [[LET]]variable=expression


LINE Statement

    Draws a line or box on the screen

    SYNTAX  LINE[[[[STEP]] (x1,y1)]] -[[STEP]]
            (x2,y2)[[,[[color]][[,[[B[[F]]]][[,style]]]]]]


LINE INPUT Statement

    Inputs an entire line (up to 255 characters) to a string variable, without
    the use of delimiters

    SYNTAX  LINE INPUT[[;]] [["promptstring";]] stringvariable


LINE INPUT # Statement

    Reads an entire line without delimiters from a sequential file to a string
    variable

    SYNTAX  LINE INPUT #filenumber,stringvariable


LOC Function

    Returns the current position within the file

    SYNTAX  LOC(filenumber)


LOCATE Statement

    Moves the cursor to the specified position

    SYNTAX  LOCATE[[row]][[,[[column]][[,[[cursor]][[,[[start,stop]]]]]]]]


LOCK...UNLOCK Statement

    Controls access by other processes to all or part of an opened file

    SYNTAX  LOCK[[#]] filenumber [[,{record | [[start]] TO end}]]
            .
            .
            .
            UNLOCK[[#]] filenumber [[,{record | [[start]] TO end}]]


LOF Function

    Returns the length of the named file in bytes

    SYNTAX  LOF(filenumber)


LOG Function

    Returns the natural logarithm of a numeric expression

    SYNTAX  LOG(n)


LPOS Function

    Returns the current position of the line printer's print head within the
    printer buffer

    SYNTAX  LPOS(n)


LPRINT, LPRINT USING Statements

    Prints data on the printer LPT1:

    SYNTAX 1  LPRINT[[expressionlist]] [[{;|,}]]

    SYNTAX 2  LPRINT USING formatstring; expression-list [[{;|,}]]


LSET Statement

    Moves data from memory to a random-access file buffer (in preparation for
    a PUT statement), copies one record variable to another, or left-justifies
    the value of a string in a string variable

    SYNTAX
            LSET{stringvariable=stringexpression|stringexpression1=stringexpre
            ssion2}


LTRIM$ Function

    Returns a copy of a string with leading spaces removed

    SYNTAX  LTRIM$(stringexpression)


MID$ Function

    Returns a substring of a string

    SYNTAX  MID$(stringexpression,start[[,length]])


MID$ Statement

    Replaces a portion of a string variable with another string

    SYNTAX  MID$(stringvariable,start[[,length]])=stringexpression


MKD$, MKI$, MKL$, MKS$ Functions

    Converts numeric values to string values

    SYNTAX  MKI$(integerexpression)
            MKS$(single-precision-expression)
            MKL$(long-integer-expression)
            MKD$(double-precision-expression)


MKDIR Statement

    Creates a new directory

    SYNTAX  MKDIR pathname


MKSMBF$, MKDMBF$ Functions

    Converts an IEEE-format number to a string containing a Microsoft Binary
    format number

    SYNTAX  MKSMBF$(single-precision-expression)
            MKDMBF$(double-precision-expression)


NAME Statement

    Changes the name of a disk file or directory

    SYNTAX  NAME oldfilename AS newfilename


OCT$ Function

    Returns a string representing the octal value of the numeric argument

    SYNTAX  OCT$(numeric-expression)


ON ERROR Statement

    Enables error handling and specifies the first line of the error-handling
    routine

    SYNTAX  ON ERROR GOTO line


ON event Statements

    Indicates the first line of an event-trapping subroutine

    SYNTAX  ON event GOSUB{linenumber | linelabel }


ON UEVENT GOSUB Statement

    Defines the event-handler for a user-defined event

    SYNTAX  ON UEVENT GOSUB { linenumber| linelabel }


ON...GOSUB, ON...GOTO Statements

    Branches to one of several specified lines, depending on the value of an
    expression

    SYNTAX 1  ON expression GOSUB{line-number-list | line-label-list }

    SYNTAX 2  ON expression GOTO{line-number-list | line-label-list }


OPEN Statement

    Enables I/O to a file or device

    SYNTAX 1  OPEN file[[FOR mode1]] [[ACCESS access]] [[lock]] AS[[#]]
            filenum[[LEN=reclen]]

    SYNTAX 2  OPEN mode2,[[#]]filenum, file [[,reclen]]


OPEN COM Statement

    Opens and initializes a communications channel for I/O

    SYNTAX  OPEN "COMn: optlist1 optlist2" [[FOR mode]] AS[[#]]filenum
            [[LEN=reclen]]


OPTION BASE Statement

    Declares the default lower bound for array subscripts

    SYNTAX  OPTION BASE n


OUT Statement

    Sends a byte to a machine I/O port

    SYNTAX  OUT port, data


PAINT Statement

    Fills a graphics area with the color or pattern specified

    SYNTAX  PAINT[[STEP]] (x,y)[[,[[paint]] [[,[[bordercolor]]
            [[,background]]]]]]


PALETTE, PALETTE USING Statements

    Changes one or more of the colors in the palette

    SYNTAX  PALETTE[[attribute,color]]
            PALETTE USING array-name [[(array-index)]]


PCOPY Statement

    Copies one screen page to another

    SYNTAX  PCOPY sourcepage, destinationpage


PEEK Function

    Returns the byte stored at a specified memory location

    SYNTAX  PEEK(address)


PEN Function

    Reads the lightpen coordinates

    SYNTAX  PEN(n)


PEN ON, OFF, and STOP Statements

    Enables, disables, or suspends lightpen event trapping

    SYNTAX  PEN ON
            PEN OFF
            PEN STOP


PLAY Function

    Returns the number of notes currently in the background-music queue

    SYNTAX  PLAY (n)


PLAY Statement

    Plays music as specified by a string

    SYNTAX  PLAY commandstring


PLAY ON, OFF, and STOP Statements

    PLAY ON enables play event trapping, PLAY OFF disables play event
    trapping, and PLAY STOP suspends play event trapping.

    SYNTAX  PLAY ON
            PLAY OFF
            PLAY STOP


PMAP Function

    Maps view-coordinate expressions to physical locations, or maps physical
    expressions to a view-coordinate location

    SYNTAX  PMAP (expression, function)


POINT Function

    Reads the color number of a pixel from the screen or returns the pixel's
    coordinates

    SYNTAX  POINT (x,y)
            POINT (number)


POKE Statement

    Writes a byte into a memory location

    SYNTAX  POKE address,byte


POS Function

    Returns the current horizontal position of the cursor

    SYNTAX  POS(0)


PRESET Statement

    Draws a specified point on the screen

    SYNTAX  PRESET[[STEP]](xcoordinate,ycoordinate) [[,color]]


PRINT Statement

    Outputs data on the screen

    SYNTAX  PRINT[[expressionlist]] [[{,| ;}]]


PRINT #, PRINT # USING Statements

    Writes data to a sequential file

    SYNTAX  PRINT #filenumber,[[USING stringexpression;]] expressionlist [[{,
            | ;}]]


PRINT USING Statement

    Prints strings or numbers using a specified format

    SYNTAX  PRINT USING formatstring; expressionlist [[{,| ;}]]


PSET Statement

    Draws a point on the screen

    SYNTAX  PSET[[STEP]](xcoordinate,ycoordinate) [[,color]]


PUT Statement──File I/O

    Writes from a variable or a random-access buffer to a file

    SYNTAX  PUT[[#]]filenumber[[,[[recordnumber]][[,variable]]]]
            PUT[[#]]filenumber[[,{recordnumber|recordnumber,
            variable|,variable}]]


PUT Statement──Graphics

    Places a graphic image obtained by a GET statement onto the screen

    SYNTAX  PUT[[STEP]] (x,y), arrayname[[(indices)]] [[,actionverb]]


RANDOMIZE Statement

    Initializes (reseeds) the random-number generator

    SYNTAX  RANDOMIZE[[expression]]


READ Statement

    Reads values from a DATA statement and assigns the values to variables

    SYNTAX  READ variablelist


REDIM Statement

    Changes the space allocated to an array that has been declared $DYNAMIC

    SYNTAX  REDIM[[SHARED]] variable(subscripts)[[AS type]]
            [[,variable(subscripts)[[AS
            type]]]]...


REM Statement

    Allows explanatory remarks to be inserted in a program

    SYNTAX 1  REM remark

    SYNTAX 2  ' remark


RESET Statement

    Closes all disk files

    SYNTAX  RESET


RESTORE Statement

    Allows DATA statements to be reread from a specified line

    SYNTAX  RESTORE[[{linenumber | linelabel }]]


RESUME Statement

    Continues program execution after an error-trapping routine has been
    invoked

    SYNTAX  RESUME[[0]]
            RESUME NEXT
            RESUME { linenumber| linelabel }


RETURN Statement

    Returns control from a subroutine

    SYNTAX  RETURN[[{linenumber | linelabel }]]


RIGHT$ Function

    Returns the rightmost n characters of a string

    SYNTAX  RIGHT$(stringexpression,n)


RMDIR Statement

    Removes an existing directory

    SYNTAX  RMDIR pathname


RND Function

    Returns a single-precision random number between 0 and 1

    SYNTAX  RND[[(n)]]


RSET Statement

    Moves data from memory to a random-access file buffer (in preparation for
    a PUT statement) or right-justifies the value of a string in a string
    variable

    SYNTAX  RSET stringvariable=stringexpression


RTRIM$ Function

    Returns a string with trailing (right-hand) spaces removed

    SYNTAX  RTRIM$(stringexpression)


RUN Statement

    Restarts the program currently in memory or executes a specified program

    SYNTAX  RUN[[{ linenumber | commandline }]]


SADD Function

    Returns the address of the specified string expression

    SYNTAX  SADD(stringvariable)


SCREEN Function

    Reads a character's ASCII value or its color from a specified screen
    location

    SYNTAX  SCREEN(row,column[[,colorflag]])


SCREEN Statement

    Sets the specifications for the display screen

    SYNTAX  SCREEN[[mode]] [[,[[colorswitch]] ]][[,[[apage]] ]][[,[[vpage]]]]


SEEK Function

    Returns the current file position

    SYNTAX  SEEK(filenumber)


SEEK Statement

    Sets the position in a file for the next read or write

    SYNTAX  SEEK[[#]]filenumber,position


SELECT CASE Statement

    Executes one of several statement blocks depending on the value of an
    expression

    SYNTAX  SELECT CASE testexpression
            CASE expressionlist1
                [[statementblock-1]]
            [[CASE expressionlist2
                [[statementblock-2]]]]
            .
            .
            .
            [[CASE ELSE
                [[statementblock-n]]]]
            END SELECT


SETMEM Function

    Changes the amount of memory used by the far heap──the area where far
    objects and internal tables are stored

    SYNTAX  SETMEM(numeric-expression)


SGN Function

    Indicates the sign of a numeric expression

    SYNTAX  SGN(numeric-expression)


SHARED Statement

    Gives a SUB or FUNCTION procedure access to variables declared at the
    module level without passing them as parameters

    SYNTAX  SHARED variable [[AS type]] [[,variable [[AS type]]]]...


SHELL Statement

    Exits the BASIC program, runs a .COM, .EXE, or .BAT program or a DOS
    command, and returns to the program at the line following the SHELL
    statement

    SYNTAX  SHELL[[commandstring]]


SIN Function

    Returns the sine of the angle x, where x is in radians

    SYNTAX  SIN(x)


SLEEP Statement

    Suspends execution of the calling program

    SYNTAX  SLEEP[[ seconds ]]


SOUND Statement

    Generates sound through the speaker

    SYNTAX  SOUND frequency,duration


SPACE$ Function

    Returns a string of spaces of length n

    SYNTAX  SPACE$(n)


SPC Function

    Skips n spaces in a PRINT statement

    SYNTAX  SPC(n)


SQR Function

    Returns the square root of n

    SYNTAX  SQR(n)


STATIC Statement

    Makes simple variables or arrays local to either a DEF FN function, a
    FUNCTION, or a SUB and preserves values between calls

    SYNTAX  STATIC variablelist


STICK Function

    Returns the x and y coordinates of the two joysticks

    SYNTAX  STICK(n)


STOP Statement

    Terminates the program

    SYNTAX  STOP


STR$ Function

    Returns a string representation of the value of a numeric expression

    SYNTAX  STR$(numeric-expression)


STRIG Function and Statement

    Returns the status of a specified joystick trigger

    SYNTAX 1 (FUNCTION)  STRIG(n)

    SYNTAX 2 (STATEMENT)  STRIG{ON| OFF}


STRIG ON, OFF, and STOP Statements

    Enable, disable, or inhibit trapping of joystick activity

    SYNTAX  STRIG(n) ON
            STRIG(n) OFF
            STRIG(n) STOP


STRING$ Function

    Returns a string whose characters all have a given ASCII code or whose
    characters are all the first character of a string expression

    SYNTAX  STRING$(m,n)
            STRING$(m,stringexpression)


SUB Statements

    Marks the beginning and end of a subprogram

    SYNTAX  SUB globalname[[(parameterlist)]] [[STATIC]]
            .
            .
            .
            [[EXIT SUB]]
            .
            .
            .
            END SUB


SWAP Statement

    Exchanges the values of two variables

    SYNTAX  SWAP variable1,variable2


SYSTEM Statement

    Closes all open files and returns control to the operating system

    SYNTAX  SYSTEM


TAB Function

    Moves the print position

    SYNTAX  TAB(column)


TAN Function

    Returns the tangent of the angle x, where x is in radians

    SYNTAX  TAN(x)


TIME$ Function

    Returns the current time from the operating system

    SYNTAX  TIME$


TIME$ Statement

    Sets the time

    SYNTAX  TIME$=stringexpression


TIMER Function

    Returns the number of seconds elapsed since midnight

    SYNTAX  TIMER


TIMER ON, OFF, and STOP Statements

    Enables, disables, or inhibits timer event trapping

    SYNTAX  TIMER ON
            TIMER OFF
            TIMER STOP


TRON/TROFF Statements

    Traces the execution of program statements

    SYNTAX  TRON
            TROFF


TYPE Statement

    Defines a data type containing one or more elements

    SYNTAX  TYPE usertype
                elementname AS    typename
                elementname AS    typename
                .
                .
                .
            END TYPE


UBOUND Function

    Returns the upper bound (largest available subscript) for the indicated
    dimension of an array

    SYNTAX  UBOUND(array[[,dimension]])


UCASE$ Function

    Returns a string expression with all letters in uppercase

    SYNTAX  UCASE$ (stringexpression)


UEVENT Statement

    Enables, disables, or suspends event trapping for a user-defined event

    SYNTAX  UEVENT ON
            UEVENT OFF
            UEVENT STOP


UNLOCK Statement

    Releases locks applied to parts of a file

    SYNTAX  UNLOCK[[#]] filenumber [[,{record | [[start]] TO end}]]


VAL Function

    Returns the numeric value of a string of digits

    SYNTAX  VAL(stringexpression)


VARPTR, VARSEG Functions

    Return the address of a variable

    SYNTAX  VARPTR(variablename)
            VARSEG(variablename)


VARPTR$ Function

    Returns a string representation of a variable's address for use in DRAW
    and PLAY statements

    SYNTAX  VARPTR$(variablename)


VIEW Statement

    Defines screen limits for graphics output

    SYNTAX  VIEW[[[[SCREEN]] (x1,y1)-(x2,y2)[[,[[color]] [[,border]]]]]]


VIEW PRINT Statement

    Sets the boundaries of the screen text viewport

    SYNTAX  VIEW PRINT[[topline TO bottomline]]


WAIT Statement

    Suspends program execution while monitoring the status of a machine input
    port

    SYNTAX  WAIT portnumber,and-expression[[,xor-expression]]


WHILE...WEND Statement

    Executes a series of statements in a loop, as long as a given condition is
    true

    SYNTAX  WHILE condition
            .
            .
            .
            [[statements]]
            .
            .
            .
            WEND


WIDTH Statement

    Assigns an output-line width to a file or device or changes the number of
    columns and lines displayed on the screen

    SYNTAX  WIDTH[[columns]][[,lines]]
            WIDTH{# filenumber | device} , width
            WIDTH LPRINT width


WINDOW Statement

    Defines the logical dimensions of the current viewport

    SYNTAX  WINDOW[[[[SCREEN]] (x1,y1)-(x2,y2)]]


WRITE Statement

    Sends data to the screen

    SYNTAX  WRITE[[expressionlist]]


WRITE # Statement

    Writes data to a sequential file

    SYNTAX  WRITE #filenumber,expressionlist



────────────────────────────────────────────────────────────────────────────
Chapter 9  Quick-Reference Tables

    Each section in this chapter summarizes a group of statements or functions
    that you typically use together. Each group is presented in a table, which
    lists the type of task performed (for example, looping or searching), the
    statement or function name, and the statement action.

    The following topics are summarized in tabular form:

    ■ Control-flow statements

    ■ Statements used in BASIC procedures

    ■ Standard I/O statements

    ■ File I/O statements

    ■ String-processing statements and functions

    ■ Graphics statements and functions

    ■ Trapping statements and functions

    You can use these tables both as a reference guide to what each statement
    or function does and as a way to identify related statements.


9.1  Summary of Control-Flow Statements

    Table 9.1 lists the BASIC statements used to control the flow of a
    program's execution.

    Table 9.1  Statements Used in Looping and Decision-Making
╓┌─┌────────────────────┌────────────────────┌───────────────────────────────╖
    Task                 Statement            Action
    ──────────────────────────────────────────────────────────────────────────
    Looping              FOR...NEXT           Repeats statements between FOR
                                            and NEXT a specific number of
                                            times.

                        EXIT FOR             Provides an alternative way to
                                            exit a FOR...NEXT loop.

                        DO...LOOP            Repeats statements between DO
                                            and LOOP, either until a given
                                            condition is true (DO...LOOP
                                            UNTIL condition), or while a
                                            given condition is true
    Task                 Statement            Action
    ──────────────────────────────────────────────────────────────────────────
                                            given condition is true
                                            (DO...LOOP WHILE condition).

                        EXIT DO              Provides an alternative way to
                                            exit a DO...LOOP loop.

                        WHILE...WEND         Repeats statements between WHILE
                                            and WEND while a given condition
                                            is true (similar to DO WHILE
                                            condition...LOOP).

    Making decisions     IF...THEN...ELSE     Conditionally executes or
                                            branches to different
                                            statements.

                        SELECT CASE          Conditionally executes different
                                            statements.
    ──────────────────────────────────────────────────────────────────────────

    Task                 Statement            Action
    ──────────────────────────────────────────────────────────────────────────



9.2  Summary of Statements Used in BASIC Procedures

    Table 9.2 lists the statements used in BASIC to define, declare, call,
    and pass arguments to BASIC procedures. Table 9.2 also lists the
    statements used to share variables among procedures, modules, and separate
    programs in a chain.

    Table 9.2  Statements Used in Procedures
╓┌─┌────────────────────┌────────────────────┌───────────────────────────────╖
    Task                 Statement            Action
    ──────────────────────────────────────────────────────────────────────────
    Defining a procedure FUNCTION...END       Mark the beginning and end,
                        FUNCTION             respectively, of a FUNCTION
                                            procedure.

                        SUB...END SUB        Mark the beginning and end,
    Task                 Statement            Action
    ──────────────────────────────────────────────────────────────────────────
                        SUB...END SUB        Mark the beginning and end,
                                            respectively, of a SUB
                                            procedure.

    Calling a procedure  CALL                 Transfers control to a BASIC SUB
                                            procedure, or to a procedure
                                            written in another programming
                                            language and compiled
                                            separately. (The CALL keyword is
                                            optional.)

    Exiting from a       EXIT FUNCTION        Provides another way to exit a
    procedure                                 FUNCTION procedure.

                        EXIT SUB             Provides an alternative way to
                                            exit a SUB procedure.

    Referencing a        DECLARE              Declares a FUNCTION or SUB and,
    procedure before it                       optionally, specifies the number
    Task                 Statement            Action
    ──────────────────────────────────────────────────────────────────────────
    procedure before it                       optionally, specifies the number
    is defined                                and type of its parameters.

    Sharing variables    COMMON               Shares variables among separate
    among modules,                            modules. When used with the
    procedures, or                            SHARED attribute, it shares
    programs                                  variables among different
                                            procedures in the same module.
                                            Also, passes variable values
                                            from current program to new
                                            program when control is
                                            transferred with the CHAIN
                                            statement.

                        SHARED               When used with the COMMON, DIM,
                                            or REDIM statement at the module
                                            level (for example, DIM SHARED),
                                            shares variables with every SUB
                                            or FUNCTION in a single module.
    Task                 Statement            Action
    ──────────────────────────────────────────────────────────────────────────
                                            or FUNCTION in a single module.

                                            When used by itself within a
                                            procedure, shares variables
                                            between that procedure and the
                                            module-level code.

    Preserving variable  STATIC               Forces variables to be local to
    values                                    a procedure or DEF FN function
                                            and preserves the value stored
                                            in the variable if the procedure
                                            or function is exited, then
                                            called again.

    Defining a multiline DEF FN...END DEF     Mark the beginning and end,
    function                                  respectively, of a multiline DEF
                                            FN function. (This is the old
                                            style for functions in BASIC──
                                            FUNCTION procedures provide a
    Task                 Statement            Action
    ──────────────────────────────────────────────────────────────────────────
                                            FUNCTION procedures provide a
                                            powerful alternative.)

    Exiting from a       EXIT DEF             Provides an alternative way to
    multiline function                        exit a multiline DEF FN
                                            function.

    Calling a BASIC      GOSUB                Transfers control to a specific
    subroutine                                line in a module. Control is
                                            returned from the subroutine to
                                            the line following the GOSUB
                                            statement with a RETURN
                                            statement. (This is the old
                                            style for subroutines in BASIC──
                                            SUB procedures provide a
                                            powerful alternative.)

    Transferring to      CHAIN                Transfers control from current
    another program                           program in memory to another
    Task                 Statement            Action
    ──────────────────────────────────────────────────────────────────────────
    another program                           program in memory to another
                                            program; use COMMON to pass
                                            variables to the new program.
    ──────────────────────────────────────────────────────────────────────────



9.3  Summary of Standard I/O Statements

    Table 9.3 lists the statements and functions used in BASIC for standard
    I/O (typically, input from the keyboard and output to the screen).

    Table 9.3  Statements and Functions Used for Standard I/O
╓┌─┌────────────────────┌────────────────────┌───────────────────────────────╖
                        Statement or
    Task                 Function             Action
    ──────────────────────────────────────────────────────────────────────────
    Printing text on the PRINT                Outputs text to the screen.
    screen                                    Using PRINT with no arguments
                        Statement or
    Task                 Function             Action
    ──────────────────────────────────────────────────────────────────────────
    screen                                    Using PRINT with no arguments
                                            creates a blank line.

                        PRINT USING          Outputs formatted text to the
                                            screen.

    Changing the width   WIDTH                Changes the width of the screen
    of the output line                        to either 40 columns or 80
                                            columns and, on computers with
                                            an EGA or VGA, controls the
                                            number of lines on the screen
                                            (25 or 43).

                        WIDTH "SCRN:"        Assigns a maximum length to
                                            lines output to the screen when
                                            used before an OPEN "SCRN:"
                                            statement.

                        Statement or
    Task                 Function             Action
    ──────────────────────────────────────────────────────────────────────────

    Getting input from   INKEY$               Reads a character from the
    the keyboard                              keyboard (or a null string if no
                                            character is waiting).

                        INPUT$               Reads a specified number of
                                            characters from the keyboard and
                                            stores them in a single string
                                            variable.

                        INPUT                Reads input from the keyboard
                                            and stores it in a list of
                                            variables.

                        LINE INPUT           Reads a line of input from the
                                            keyboard and stores it in a
                                            single string variable.

                        Statement or
    Task                 Function             Action
    ──────────────────────────────────────────────────────────────────────────

    Positioning the      LOCATE               Moves the cursor to a specified
    cursor on the screen                      row and column.

                        SPC                  Skips spaces in printed output.

                        TAB                  Displays printed output in a
                                            given column.

    Getting information  CSRLIN               Tells which row or line position
    on cursor location                        the cursor is in.

                        POS(n)               Tells which column the cursor is
                                            in.

    Creating a text      VIEW PRINT           Sets the top and bottom rows for
    viewport                                  displaying text output.
    ──────────────────────────────────────────────────────────────────────────
                        Statement or
    Task                 Function             Action
    ──────────────────────────────────────────────────────────────────────────
    ──────────────────────────────────────────────────────────────────────────



9.4  Summary of File I/O Statements

    Table 9.4 lists the statements and functions used in BASIC data-file
    programming.

    Table 9.4  Statements and Functions Used for Data-File I/O
╓┌─┌────────────────────┌────────────────────┌───────────────────────────────╖
                        Statement or
    Task                 Function             Action
    ──────────────────────────────────────────────────────────────────────────
    Creating a new file  OPEN                 Opens a file for retrieving or
    or accessing an                           storing records (I/O).
    existing file
    Closing a file       CLOSE                Ends I/O to a file.
                        Statement or
    Task                 Function             Action
    ──────────────────────────────────────────────────────────────────────────
    Closing a file       CLOSE                Ends I/O to a file.
    Storing data in a    PRINT #              Stores a list of variables as
    file                                      record fields in a previously
                                            opened file.☼
                        PRINT USING #        Similar to PRINT #, except PRINT
                                            USING # formats the record
                                            fields.☼
                        WRITE #              Stores a list of variables as
                                            record fields in a previously
                                            opened file.☼
                        WIDTH                Specifies a standard length for
                                            each record in a file.☼
                        PUT                  Stores the contents of a
                                            user-defined variable in a
                                            previously opened file.☼
    Retrieving data from INPUT #              Reads fields from a record and
    a file                                    assigns each field in the record
                                            to a program variable.☼
                        Statement or
    Task                 Function             Action
    ──────────────────────────────────────────────────────────────────────────
                                            to a program variable.☼
                        INPUT$               Reads a string of characters
                                            from a file.
                        LINE INPUT #         Reads a record and stores it in
                                            a single string variable.☼
                        GET                  Reads data from a file and
                                            assigns the data to elements of
                                            a user-defined variable.☼
    Managing files on    FILES                Prints a listing of the files in
    disk                                      a specified directory.
                        FREEFILE             Returns the next available file
                                            number.
                        KILL                 Deletes a file from the disk.
                        NAME                 Changes a file's name.
    Getting information  EOF                  Tests whether all of the data
    about a file                              have been read from a file.
                        FILEATTR             Returns the number assigned by
                                            the operating system to an open
                        Statement or
    Task                 Function             Action
    ──────────────────────────────────────────────────────────────────────────
                                            the operating system to an open
                                            file and a number that indicates
                                            the mode in which the file was
                                            opened (INPUT, OUTPUT, APPEND,
                                            BINARY, or RANDOM).
                        LOC                  Gives the current position
                                            within a file. With binary
                                            access, this is the byte
                                            position. With sequential
                                            access, this is the byte
                                            position divided by 128. With
                                            random access, this is the
                                            record number of the last record
                                            read or written.
                        LOF                  Gives the number of bytes in an
                                            open file.
                        SEEK (function)      Gives the location where the
                                            next I/O operation will take
                        Statement or
    Task                 Function             Action
    ──────────────────────────────────────────────────────────────────────────
                                            next I/O operation will take
                                            place. With random access, this
                                            is the number of the next record
                                            to be read or written. With all
                                            other kinds of file access, this
                                            is the byte position of the next
                                            byte to be read or written.
    Moving around in a   SEEK (statement)     Sets the byte position for the
    file                                      next read or write operation in
                                            an open file.
    ──────────────────────────────────────────────────────────────────────────



9.5  Summary of String-Processing Statements and Functions

    Table 9.5 lists the statements and functions available in BASIC for
    working with strings.

    Table 9.5  Statements and Functions Used for Processing Strings
╓┌─┌────────────────────┌────────────────────┌───────────────────────────────╖
                        Statement or
    Task                 Function             Action
    ──────────────────────────────────────────────────────────────────────────
    Getting part of a    LEFT$                Returns a given number of
    string                                    characters from the left side of
                                            a string.

                        RIGHT$               Returns a given number of
                                            characters from the right side
                                            of a string.

                        LTRIM$               Returns a copy of a string with
                                            leading blank spaces stripped
                                            away.

                        RTRIM$               Returns a copy of a string with
                                            trailing blank spaces stripped
                                            away.
                        Statement or
    Task                 Function             Action
    ──────────────────────────────────────────────────────────────────────────
                                            away.

                        MID$ (function)      Returns a given number of
                                            characters from anywhere in a
                                            string.

    Searching strings    INSTR                Searches for a string within
                                            another string.

    Converting to        LCASE$               Returns a copy of a string with
    uppercase or                              all uppercase letters (A-Z)
    lowercase letters                         converted to lower-case letters
                                            (a-z); leaves lowercase letters
                                            and other characters unchanged.

                        UCASE$               Returns a copy of a string with
                                            all lowercase letters (a-z)
                                            converted to upper-case letters
                        Statement or
    Task                 Function             Action
    ──────────────────────────────────────────────────────────────────────────
                                            converted to upper-case letters
                                            (A-Z); leaves uppercase letters
                                            and other characters unchanged.

    Changing strings     MID$ (statement)     Replaces part of a string with
                                            another string.

                        LSET                 Left justifies a string within a
                                            fixed-length string.

                        RSET                 Right justifies a string within
                                            a fixed-length string.

    Converting between   STR$                 Returns the string
    numbers and strings                       representation of the value of a
                                            numeric expression.

                        VAL                  Returns the numeric value of a
                        Statement or
    Task                 Function             Action
    ──────────────────────────────────────────────────────────────────────────
                        VAL                  Returns the numeric value of a
                                            string expression.

    Converting numbers   CVtype               Changes numbers stored as
    to data-file                              strings back to Microsoft Binary
    strings, and                              format numbers in programs
    data-file strings to                      working with random-access files
    numbers☼                                  created with older versions of
                                            BASIC.

                        CVtypeMBF            Changes numbers stored as
                                            Microsoft Binary format strings
                                            to IEEE-format numbers.

                        MKtype$              Changes Microsoft Binary format
                                            numbers to strings suitable for
                                            storing in random-access files
                                            created with older versions of
                        Statement or
    Task                 Function             Action
    ──────────────────────────────────────────────────────────────────────────
                                            created with older versions of
                                            BASIC.

                        MKtypeMBF$           Changes IEEE-format numbers to
                                            Microsoft Binary format strings.

    Creating strings of  SPACE$               Returns a string of blank
    repeating characters                      characters of a specified
                                            length.

                        STRING$              Returns a string consisting of
                                            one repeated character.

    Getting the length   LEN                  Tells how many characters are in
    of a string                               a string.

    Working with ASCII   ASC                  Returns the ASCII value of the
    values                                    given character.
                        Statement or
    Task                 Function             Action
    ──────────────────────────────────────────────────────────────────────────
    values                                    given character.

                        CHR$                 Returns the character with the
                                            given ASCII value.
    ──────────────────────────────────────────────────────────────────────────



9.6  Summary of Graphics Statements and Functions

Table 9.6 lists the statements and functions used in BASIC for pixel-based
graphics.

    Table 9.6  Statements and Functions Used for Graphics Output
╓┌─┌────────────────────┌────────────────────┌───────────────────────────────╖
                        Statement or
    Task                 Function             Action
    ──────────────────────────────────────────────────────────────────────────
                        Statement or
    Task                 Function             Action
    ──────────────────────────────────────────────────────────────────────────
    Setting              SCREEN               Specifies a BASIC screen mode,
    screen-display                            which determines screen
    characteristics                           characteristics such as
                                            resolution and ranges for color
                                            numbers.

    Plotting or erasing  PSET                 Gives a pixel on the screen a
    a single point                            specified color using the
                                            screen's foreground color by
                                            default.

                        PRESET               Gives a pixel on the screen a
                                            specified color using the
                                            screen's background color by
                                            default, effectively erasing the
                                            pixel.

    Drawing shapes       LINE                 Draws a straight line or a box.
                        Statement or
    Task                 Function             Action
    ──────────────────────────────────────────────────────────────────────────
    Drawing shapes       LINE                 Draws a straight line or a box.

                        CIRCLE               Draws a circle or ellipse.

                        DRAW                 Combines many of the features of
                                            other BASIC graphics statements
                                            (drawing lines, moving the
                                            graphics cursor, scaling images)
                                            into an all-in-one graphics
                                            macro language.

    Defining screen      VIEW                 Specifies a rectangle on the
    coordinates                               screen (or viewport) as the area
                                            for graphics output.

                        WINDOW               Allows the user to choose new
                                            view coordinates for a viewport
                                            on the screen.
                        Statement or
    Task                 Function             Action
    ──────────────────────────────────────────────────────────────────────────
                                            on the screen.

                        PMAP                 Maps physical pixel coordinates
                                            to view coordinates specified by
                                            the user in the current window,
                                            or vice versa.

                        POINT(number)        Returns the current physical or
                                            view coordinates of the graphics
                                            cursor, depending on the value
                                            for number.

    Using color          COLOR                Sets the default colors used in
                                            graphics output.

                        PALETTE              Assigns different colors to
                                            color numbers. Works only on
                                            systems equipped with an EGA or
                        Statement or
    Task                 Function             Action
    ──────────────────────────────────────────────────────────────────────────
                                            systems equipped with an EGA or
                                            VGA.

                        POINT(x, y)          Returns the color number of a
                                            single pixel whose screen
                                            coordinates are x and y.

    Painting enclosed    PAINT                Fills an area on the screen with
    shapes                                    a color or pattern.

    Animating            GET                  Copies a rectangular area on the
                                            screen by translating the image
                                            to numeric data and storing the
                                            data in a numeric array.

                        PUT                  Displays an image on the screen
                                            that was previously copied with
                                            GET.
                        Statement or
    Task                 Function             Action
    ──────────────────────────────────────────────────────────────────────────
                                            GET.

                        PCOPY                Copies one screen page to
                                            another.
    ──────────────────────────────────────────────────────────────────────────



9.7  Summary of Trapping Statements and Functions

    Table 9.7 lists the statements and functions used by BASIC to trap and
    process errors and events.

    Table 9.7  Statements and Functions Used in Error and Event Trapping
╓┌─┌────────────────────┌────────────────────┌───────────────────────────────╖
    Task                 Statement or         Action
                        Function
    ──────────────────────────────────────────────────────────────────────────
    Task                 Statement or         Action
                        Function
    ──────────────────────────────────────────────────────────────────────────
    Trapping errors      ON ERROR GOTO line   Causes a program to branch to
    while a program is                        the given line, where line
    running                                   refers either to a line number
                                            or line label. Branching takes
                                            place whenever an error occurs
                                            during execution.

                        RESUME               Returns control to the program
                                            after executing an
                                            error-handling routine. The
                                            program resumes at either the
                                            statement causing the error
                                            (RESUME [[0]]), the statement
                                            after the one causing the error
                                            (RESUME NEXT), or the line
                                            identified by line (RESUME
                                            line).

    Task                 Statement or         Action
                        Function
    ──────────────────────────────────────────────────────────────────────────

    Getting error-status ERR                  Returns the code for an error
    data                                      that occurs at run time.

                        ERL                  Returns the number of the line
                                            on which an error occurred (if
                                            program has line numbers).

                        ERDEV                Returns a device-specific error
                                            code for the last device (such
                                            as a printer) for which DOS
                                            detected an error.

                        ERDEV$               Returns the name of the last
                                            device for which DOS detected an
                                            error.

    Defining your own    ERROR                Simulates the occurrence of a
    Task                 Statement or         Action
                        Function
    ──────────────────────────────────────────────────────────────────────────
    Defining your own    ERROR                Simulates the occurrence of a
    error codes                               BASIC error; can also be used to
                                            define an error not trapped by
                                            BASIC.

    Trapping events      ON event GOSUB line  Causes a branch to the
    while a program is                        subroutine starting with line,
    running                                   where line refers either to a
                                            line number or line label,
                                            whenever the given event occurs
                                            during execution.

                        event ON             Enables trapping of the given
                                            event.

                        event OFF            Disables trapping of the given
                                            event.

    Task                 Statement or         Action
                        Function
    ──────────────────────────────────────────────────────────────────────────

                        event STOP           Suspends trapping of the given
                                            event.

                        RETURN               Returns control to the program
                                            after executing an
                                            event-handling subroutine. The
                                            program resumes at either the
                                            statement immediately following
                                            the place in the program where
                                            the event occurred (RETURN), or
                                            the line that is identified by
                                            line (RETURN line).
    ──────────────────────────────────────────────────────────────────────────



────────────────────────────────────────────────────────────────────────────
Appendix A  Converting BASICA Programs to QuickBASIC

    QuickBASIC generally accepts BASIC language statements written for the
    BASIC interpreters used on IBM Personal Computers and compatibles: IBM
    Advanced Personal Computer BASIC Version A3.00 (BASICA) and Microsoft
    GW-BASIC(R). However, a few changes are required because of internal
    differences between QuickBASIC and these BASIC interpreters. Since the
    changes apply equally to both interpreters, this appendix uses the term
    BASICA to refer to both GW-BASIC and BASICA.

    This appendix provides information on:

    ■ Compatible source-file format

    ■ Statements and functions prohibited or requiring modification for
    QuickBASIC use

    ■ Editor differences in handling tabs

    The following sections describe only the changes required to compile and
    run a BASICA program with QuickBASIC Version 4.5. The chapters in this
    book provide information on how to use QuickBASIC features to enhance your
    existing BASICA programs.


A.1  Source-File Format

    QuickBASIC Version 4.5 expects the source file to be in ASCII format or in
    QuickBASIC's own format. If you create a file with BASICA, it must be
    saved with the ,A option; otherwise, BASICA compresses the text of your
    program in a special format that QuickBASIC cannot read. If this happens,
    reload BASICA and resave the file in ASCII format, using the ,A option.
    For example, the following BASICA command saves the file MYPROG.BAS in
    ASCII format:

    SAVE "MYPROG.BAS",A


A.2  Statements and Functions Prohibited in QuickBASIC

    The statements and functions listed below cannot be used in a QuickBASIC
    program because they perform editing operations on the source file,
    interfere with program execution, refer to a cassette device (not
    supported by QuickBASIC), or duplicate support provided by the QuickBASIC
    environment:


    ──────────────────────────────────────────────────────────────────────────
    AUTO                     LIST                    NEW

    CONT                     LLIST                   RENUM

    DEFUSR                   LOAD                    SAVE

    DELETE                   MERGE                   USR

    EDIT                     MOTOR
    ──────────────────────────────────────────────────────────────────────────


A.3  Statements Requiring Modification

    If your BASICA program contains any of the statements listed in Table A.1,
    you probably need to modify your source code before you can run your
    program in QuickBASIC.

    Table A.1  Statements Requiring Modification
╓┌─┌──────────────────┌──────────────────────────────────────────────────────╖
    Statement          Modification
    ──────────────────────────────────────────────────────────────────────────
    BLOAD/BSAVE        Memory locations may be different in QuickBASIC.

    CALL               The argument is the name of the SUB procedure being
                        called.

    CHAIN              QuickBASIC does not support the ALL, MERGE, DELETE, or
                        linenumber options.

    COMMON             COMMON statements must appear before any executable
                        statements.

    DEFtype            DEFtype statements should be moved to the beginning of
                        the BASICA source file.

    Statement          Modification
    ──────────────────────────────────────────────────────────────────────────

    DIM                All DIM statements declaring static arrays must appear
                        at the beginning of QuickBASIC programs.

    DRAW, PLAY         QuickBASIC requires that the VARPTR$ function be used
                        with embedded variables.

    RESUME             If an error occurs in a single-line function,
                        QuickBASIC attempts to resume program execution at the
                        line containing the function.

    RUN                For executable files produced by QuickBASIC, the object
                        of a RUN or CHAIN statement cannot be a .BAS file; it
                        must be an executable file. The R option in BASICA is
                        not supported. While in the QuickBASIC environment, the
                        object of a RUN or CHAIN statement is still a .BAS
                        file.

                        RUN{linenumber| linelabel}, however, is supported in
    Statement          Modification
    ──────────────────────────────────────────────────────────────────────────
                        RUN{linenumber| linelabel}, however, is supported in
                        QuickBASIC; this statement restarts the program at the
                        specified line.
    ──────────────────────────────────────────────────────────────────────────



A.4  Editor Differences in Handling Tabs

    QuickBASIC uses individual spaces (rather than the literal tab character,
    ASCII 9) to represent indentation levels. The Tab Stops option in the
    Option menu's Display dialog box set the number of spaces per indentation
    level. (See Chapter 20, "The Options Menu," in Learning to Use Microsoft
    QuickBASIC for more information.)

    Some text editors use the literal tab character to represent multiple
    spaces when storing text files. The QuickBASIC editor treats literal tab
    characters in such files as follows:

    1. Literal tab characters inside quoted strings appear as the character
        shown for ASCII character 9 in the ASCII table in Appendix D,
        "Keyboard Scan Codes and ASCII Character Codes."

    2. Outside quoted strings, tab characters indent the text following them
        to the next indentation level.

    If you try to change the Tab Stops setting while such a program is loaded,
    QuickBASIC gives the following error message:

    Cannot change tab stops while file is loaded

    This is to prevent you from inadvertently reformatting old source files
    created with other editors. If you load such a file and then decide you
    prefer a different indentation, reset the indentation using the following
    procedure:

    1. Save your file to preserve any changes, then choose the New Program
        command from the File menu.

    2. Choose the Display command from the Options menu and set the Tab Stops
        option as described above.

    3. Choose the Open Program command from the File menu and reload your
        program. When your program is reloaded, the indentations will reflect
        the new setting of the Tab Stops option.

    Note that this procedure works only for old programs. Text created within
    QuickBASIC cannot be reformatted this way.



────────────────────────────────────────────────────────────────────────────
Appendix B  Differences from Previous Versions of QuickBASIC

    QuickBASIC Version 4.5 contains many new features and enhancements over
    previous versions of QuickBASIC. This appendix describes the differences
    between Versions 2.0 and 4.5 of QuickBASIC. Unless otherwise stated,
    differences between Versions 2.0 and 4.5 also apply as differences between
    Versions 3.0 and 4.5. Differences between Versions 4.0 and 4.5 are
    primarily in the QuickBASIC environment.

    This appendix provides information on the following improvements in
    QuickBASIC Version 4.5:

    ■ Product capabilities and features

    ■ Environment enhancements

    ■ Improvements in compiling and debugging capabilities

    ■ Language changes

    ■ File compatibility


B.1  QuickBASIC Features

    This section compares the features of Microsoft QuickBASIC Versions 4.5
    with those of previous versions. The features are listed in Table B.1 and
    described below.

    Table B.1  Features of Microsoft QuickBASIC Version 4.5
╓┌─┌───────────────────────────────┌─────────┌──────────┌─────────┌──────────╖
                                            QuickBASIC Version
    Feature                         2.0       3.0        4.0       4.5
    ──────────────────────────────────────────────────────────────────────────
    On-line QB Advisor (detailed    No        No         No        Yes
    reference)

    Selectable right mouse button   No        No         No        Yes
    function

    Instant Watches for variables   No        No         No        Yes
    and expressions

    Set default search paths        No        No         No        Yes

    User-defined types              No        No         Yes       Yes

    IEEE format, math coprocessor   No        Yes        Yes       Yes
    support

    On-line help                    No        No         Yes       Yes
                                            QuickBASIC Version
    Feature                         2.0       3.0        4.0       4.5
    ──────────────────────────────────────────────────────────────────────────
    On-line help                    No        No         Yes       Yes

    Symbol help                     No        No         No        Yes

    Long (32-bit) integers          No        No         Yes       Yes

    Fixed-length strings            No        No         Yes       Yes

    Syntax checking on entry        No        No         Yes       Yes

    Binary file I/O                 No        No         Yes       Yes

    FUNCTION procedures             No        No         Yes       Yes

    CodeView(R) support             No        No         Yes       Yes

    Compatibility with other        No        No         Yes       Yes
    languages
                                            QuickBASIC Version
    Feature                         2.0       3.0        4.0       4.5
    ──────────────────────────────────────────────────────────────────────────
    languages

    Multiple modules in memory      No        No         Yes       Yes

    ProKey TM, SideKick(R), and     No        Yes        Yes       Yes
    SuperKey(R) compatibility

    Insert/overtype modes           No        Yes        Yes       Yes

    WordStar(R)-style keyboard      No        No         Yes       Yes
    interface

    Recursion                       No        No         Yes       Yes

    Error listings during separate  No        Yes        Yes       Yes
    compilation

    Assembly-language listings      No        Yes        Yes       Yes
                                            QuickBASIC Version
    Feature                         2.0       3.0        4.0       4.5
    ──────────────────────────────────────────────────────────────────────────
    Assembly-language listings      No        Yes        Yes       Yes
    during separate compilation
    ──────────────────────────────────────────────────────────────────────────


B.1.1  Features New to QuickBASIC 4.5

    You can now access on-line help for QuickBASIC's keywords, commands, and
    menus, as well as general topics and your own variables. Examples shown on
    help screens can be copied and pasted directly into your own program,
    reducing development time.

    For mouse users, you can now set the function of the right mouse button
    with the Right Mouse command from the Options menu. Use the function that
    best suits your needs. For more information see Chapter 19, "The Calls
    Menu," in Learning to Use Microsoft QuickBASIC.

    For faster debugging, QuickBASIC now offers an Instant Watch command for
    immediately identifying the value of a variable or the condition (true or
    false) of an expression. For more information see Chapter 18, "The Debug
    Menu," in Learning to Use Microsoft QuickBASIC.

    Version 4.5 also lets you set default search paths to specific types of
    files. This lets you organize your files by type and keep them in separate
    directories. QuickBASIC will search the correct directory after you set
    the new default search path. You can set default paths for executable,
    include, library, and help files.

B.1.2  Features Introduced in QuickBASIC 4.0

    If you are new to QuickBASIC or unfamiliar with Version 4.0, you will want
    to review the following features introduced in QuickBASIC 4.0 and
    supported in the current version.

    B.1.2.1  User-Defined Types

    The TYPE statement allows you to create composite data types from simple
    data elements. Such data types are similar to C-language structures.
    User-defined types are discussed in Chapter 3, "File and Device I/O."

    B.1.2.2  IEEE Format and Math-Coprocessor Support

    Microsoft QuickBASIC provides IEEE-format numbers and math-coprocessor
    support. When no coprocessor is present, QuickBASIC emulates the
    coprocessor.

    Calculations done by programs compiled with QuickBASIC are generally more
    accurate and may produce results different from programs run under BASICA
    or versions of QuickBASIC prior to 4.0. Single-precision IEEE-format
    numbers provide an additional decimal digit of accuracy. When compared to
    Microsoft Binary format double-precision numbers, IEEE-format
    double-precision numbers provide an additional one to two digits in the
    mantissa and extend the range of the exponent.

    There are two ways to use QuickBASIC 4.0 and 4.5 with your old programs
    and existing data:

    1. Use the /MBF option. This way, you can use your old programs and data
        files without rewriting your programs or changing your files.

    2. Modify your data files and use the new QuickBASIC to recompile your
        programs. In the long run, this ensures compatibility with future
        versions of QuickBASIC and may produce faster programs. Only
        random-access files containing binary format real numbers need to be
        changed. Files containing only integers or string data can be used
        without modification. More information on these options is provided
        below.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    If assembly-language procedures that use real numbers are called from
    your program, they must be written so that they use IEEE-format numbers.
    This is the default for Microsoft Macro Assembler (MASM) Version 5.0 and
    later versions. With earlier versions, be sure to use the /R
    command-line option or the 8087 assembler directive.
    ──────────────────────────────────────────────────────────────────────────

    B.1.2.3  Ranges of IEEE-Format Numbers

    IEEE-format numbers have a wider range than Microsoft Binary format
    numbers, as shown in the following list:

    Type of Number           Range of Values
    ──────────────────────────────────────────────────────────────────────────
    Single precision         -3.37 * 10^38 to -8.43 * 10^-37
                            True zero

                            8.43 * 10^-37 to 3.37 * 10^38

    Double precision         -1.67 * 10^308 to -4.19 * 10^-307
                            True zero

                            4.19 * 10^-307 to 1.67 * 10^308
    ──────────────────────────────────────────────────────────────────────────

    Single-precision values are accurate to approximately seven digits.
    Double-precision values are accurate to either 15 or 16 digits.

    Note that double-precision values may have three digits in the exponent.
    This may cause problems in PRINT USING statements.

    B.1.2.4  PRINT USING and IEEE-Format Numbers

    Because double-precision IEEE-format numbers can have larger exponents
    than Microsoft Binary format double-precision numbers, you may need to use
    a special exponential format in PRINT USING statements. Use the new format
    if your program prints values with three-digit exponents. To print numbers
    with three-digit exponents, use five carets (^^^^^) instead of four carets
    to indicate exponential format:

    PRINT USING "+#.######^^^^^", Circumference#

    If an exponent is too large for a field, QuickBASIC replaces the first
    digit with a percent sign (%) to indicate the problem.

B.1.3  Recompiling Old Programs with /MBF

    Old programs and files work with QuickBASIC Version 4.5 without
    modification if you recompile the programs with the /MBF command-line
    option. For example, to compile the program named multrgrs.bas, enter the
    following at the DOS prompt:

    BC multrgrs /MBF;

    Then link the program as you usually do. To recompile using the Make EXE
    File command, be sure to use the /MBF option when you start QuickBASIC.
    Then compile as you normally would.

    The /MBF option converts Microsoft Binary format numbers to IEEE format as
    they are read from a random-access file and converts them back to
    Microsoft Binary format before writing them to a file. This lets you do
    calculations with IEEE-format numbers while keeping the numbers in
    Microsoft Binary format in your files.

B.1.4  Converting Files and Programs

    If you decide to convert your programs and data files rather than use the
    /MBF command-line option, you need to do two things:

    1. Recompile your programs.

    2. Convert your data files.

    Your old QuickBASIC programs should compile without modification. However,
    do not use the /MBF option when recompiling. Your program will not work
    with your new data files if you use the /MBF option.

    Data files containing real numbers need to be converted so that real
    numbers are stored in IEEE format. QuickBASIC Version 4.5 includes eight
    functions that help you do this.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    You do not need to convert your data files if they contain only integer
    and string data. Only files containing real numbers must be converted.
    ──────────────────────────────────────────────────────────────────────────

    Version 4.5 has the familiar CVS, CVD, MKS$, and MKD$ functions for
    reading and writing real numbers from or to random-access files. However,
    these functions now handle real numbers stored in your files in IEEE
    format, not Microsoft Binary format. To handle numbers in Microsoft Binary
    format, Version 4.5 includes the functions CVSMBF, CVDMBF, MKSMBF$, and
    MKDMBF$.

    With these functions, you can write a short program that reads records
    from the old file (using Microsoft Binary format as necessary), converts
    the real-number fields to IEEE format, places the fields in a new record,
    and writes out the new record.

    Examples

    The following program copies an old data file to a new file, making the
    necessary conversions:

    ' Define types for old and new file buffers:
    TYPE Oldbuf
        ObsId AS STRING * 20
        XPos AS STRING * 4
        YPos AS STRING * 4
        FuncVal AS STRING * 8
    END TYPE

    TYPE NewBuf
        ObsId AS STRING * 20
        XPos AS SINGLE
        YPos AS SINGLE
        FuncVal AS DOUBLE
    END TYPE

    ' Declare buffers:
    DIM OldFile AS Oldbuf, NewFile AS NewBuf

    ' Open the old and new data files:
    OPEN "OLDMBF.DAT" FOR RANDOM AS #1 LEN=LEN(OldFile)
    OPEN "NEWIEEE.DAT" FOR RANDOM AS #2 LEN=LEN(NewFile)

    I=1

    ' Read the first old record:
    GET #1,I,OldFile

    DO UNTIL EOF(1)

    ' Move the fields to the new record fields, converting
    ' the real-number fields:
        NewFile.ObsId=OldFile.ObsId
        NewFile.XPos=CVSMBF(OldFile.XPos)
        NewFile.YPos=CVSMBF(OldFile.YPos)
        NewFile.FuncVal=CVDMBF(OldFile.FuncVal)

    ' Write the converted fields to the new file:
        PUT #2,I,NewFile
        I=I+1

    ' Read next record from the old file:
        GET #1,I,OldFile
    LOOP

    CLOSE #1, #2

    Each record in the two files has four fields: an identifier field, two
    fields containing single-precision real numbers, and a final field
    containing a double-precision real number.

    Most of the conversion work is done with the functions CVDMBF and CVSMBF.
    For example, the following program line converts the double-precision
    field:

    NewFile.FuncVal=CVDMBF(OldFile.FuncVal)

    The eight bytes in the record field OldFile.FuncVal are converted from a
    Microsoft Binary format double-precision value to an IEEE-format
    double-precision value by the function CVDMBF. This value is stored in the
    corresponding field in the new record, which is later written to the new
    file by the PUT statement.

B.1.5  Other QuickBASIC Features

    QuickBASIC 4.0 introduced the following features and tools that made
    QuickBASIC a development package appreciated by the professional without
    overwhelming the novice. QuickBASIC 4.5 supports all these same features,
    along with some additional refinements.

    B.1.5.1  Long (32-Bit) Integers

    Long (32-bit) integers eliminate rounding errors in calculations with
    numbers in the range -2,147,483,648 to 2,147,483,647, and they provide
    much faster whole-number calculations in this range than do floating-point
    types.

    B.1.5.2  Fixed-Length Strings

    Fixed-length strings let you incorporate string data into user-defined
    types. See Chapter 4, "String Processing," for more information.

    B.1.5.3  Syntax Checking on Entry

    If syntax checking is turned on, QuickBASIC checks each line as you enter
    it for syntax and duplicate-definition errors. See Chapter 12, "Using the
    Editor," in Learning to Use Microsoft QuickBASIC for an explanation of
    syntax checking and other smart-editor features.

    B.1.5.4  Binary File I/O

    Versions 4.0 and 4.5 provide binary access to files. This is useful for
    reading and modifying files saved in non-ASCII format. The major benefit
    of binary access is that it does not force you to treat a file as a
    collection of records. If a file is opened in binary mode, you can move
    forward or backward to any byte position in the file, then read or write
    as many bytes as you want. Thus, different I/O operations on the same file
    can GET or PUT a varying number of bytes──unlike with random access, where
    the number of bytes is fixed by the predefined length of a single record.

    See Chapter 3, "File and Device I/O," for more information about
    accessing binary files.

    B.1.5.5  FUNCTION Procedures

    FUNCTION procedures allow you to place a function in one module and call
    it from a different module. See Chapter 2, "SUB and FUNCTION Procedures,"
    for more information about using FUNCTION procedures.

    In versions prior to 4.0, a SUB procedure and a variable could have the
    same name. Now, SUB and FUNCTION procedure names must be unique.

    B.1.5.6  Support for the CodeView(R) Debugger

    You can use the command-line tools BC.EXE and LINK.EXE to create
    executable files compatible with the Microsoft CodeView debugger, a
    powerful tool included with the Microsoft Macro Assembler (Version 5.0 or
    later) and with Microsoft C (Version 5.0 or later). Modules compiled with
    BC can be linked with modules compiled with other Microsoft languages in
    such a way that the final executable file can be debugged using the
    CodeView debugger. See Appendix G, "Compiling and Linking from DOS," for
    more information.

    B.1.5.7  Other-Language Compatibility

    QuickBASIC Version 4.5 allows you to call routines written in other
    Microsoft languages using C or Pascal calling conventions. Arguments are
    passed by NEAR or FAR reference, or by value. Other-language code may be
    placed in Quick libraries or linked into executable files.

    The PTR86 routine is not supported in QuickBASIC, Version 4.5; use the
    VARPTR and VARSEG functions instead.

    B.1.5.8  Multiple Modules in Memory

    You can load multiple program modules into memory simultaneously. Versions
    previous to 4.0 permitted only one module to be in memory at a time. Now
    you can edit, execute, and debug multiple-module programs within the
    QuickBASIC environment. See Chapter 2, "SUB and FUNCTION Procedures," and
    Chapter 7, "Programming with Modules," for more information about using
    multiple modules.

    B.1.5.9  ProKey TM, SideKick(R), and SuperKey(R) Compatibility

    You can use ProKey, SideKick, and SuperKey within the QuickBASIC
    environment. Other keyboard-reprogramming or desktop software may not work
    with QuickBASIC. Check with the suppliers or manufacturers of other
    products to find out about the product's compatibility with QuickBASIC
    Version 4.5.

    B.1.5.10  Insert and Overtype Modes

    Pressing INS toggles the editing mode between insert and overtype. When
    overtype mode is on, the cursor changes from a blinking underline to a
    block. Note that INS replaces the CTRL+O insert/overtype toggle in Version
    3.0.

    In insert mode, the editor inserts a typed character at the cursor
    position. In overtype mode, the editor replaces the character under the
    cursor with the character you type. Insert mode is the default mode.

    B.1.5.11  WordStar(R)-Style Keyboard Commands

    QuickBASIC supports many of the key sequences familiar to WordStar users.
    A complete list of WordStar-style key commands appears in Chapter 12,
    "Using the Editor," in Learning to Use Microsoft QuickBASIC.

    B.1.5.12  Recursion

    QuickBASIC Versions 4.0 and 4.5 support recursion, which is the ability of
    a procedure to call itself. Recursion is useful for solving certain
    problems, such as sorting. See Chapter 2, "SUB and FUNCTION Procedures,"
    for more information about using recursion.

    B.1.5.13  Error Listings during Separate Compilation

    QuickBASIC displays descriptive error messages when you compile programs
    using the BC command. Using BC, you can redirect the error messages to a
    file or device to get a copy of the compilation errors. See Appendix G,
    "Compiling and Linking from DOS," for more information about the BC
    command.

    Examples

    The following examples show how to use the BC command line for error
    display:

    Command Line             Action
    ──────────────────────────────────────────────────────────────────────────
    BC TEST.BAS;             Compiles the file named TEST.BAS and displays
                            errors on the screen

    BC TEST.BAS; > TEST.ERR  Compiles the file TEST.BAS and redirects error
                            messages to the file named TEST.ERR
    ──────────────────────────────────────────────────────────────────────────

    B.1.5.14  Assembly-Language Listings during Separate Compilation

    The BC command's /A option produces a listing of the assembly-language
    code produced by the compiler. See Appendix G, "Compiling and Linking
    from DOS," for more information.


B.2  Differences in the Environment

    The QuickBASIC programming environment now provides more flexible command
    selection, additional window options, and more menu commands. Sections
    B.2.1-B.2.5 describes the differences in the programming environment
    between Version 4.5 and earlier versions.

B.2.1  Choosing Commands and Options

    QuickBASIC Version 4.5 gives you flexibility in how you choose commands
    from menus and options from dialog boxes.

    Version 4.5 allows you to select any menu by pressing the ALT key followed
    by a mnemonic key. Each menu command and dialog box option also has its
    own mnemonic key, which immediately executes the command or selects the
    item. The mnemonic keys appear in intense video.

    In Version 4.5 the ENTER key functions the same way as the SPACEBAR did in
    versions 3.0 and earlier. You can press ENTER to execute a command from a
    dialog box.

B.2.2  Windows

    Version 4.5 allows up to two work-area windows (referred to as View
    windows), a Help window, and a separate Immediate window. Versions prior
    to 4.0 supported only two windows: one work area and the error-message
    window.

B.2.3  New Menu

    QuickBASIC Version 4.5 has a new menu, the Options menu. The Options menu
    accesses special QuickBASIC controls that manipulate the screen display
    attributes, the function of the right mouse button, the default path to
    specific file types, syntax checking, and Full Menus control.

B.2.4  Menu Commands

    The Debug and Help menus, which appeared in earlier versions of
    QuickBASIC, have some new commands. Table B.2 lists the new commands in
    these menus, as well as the commands from the new Options menu.

    Table B.2  Menus with New Commands in QuickBASIC Version 4.5
╓┌─┌───────────┌────────────────────────┌────────────────────────────────────╖
    Menu        Command                  Description
    ──────────────────────────────────────────────────────────────────────────
    Debug       Add Watch                Adds variable or expression to Watch
                                        window

                Instant Watch (New)      Immediately checks the value of a
                                        variable or expression

                Watchpoint               Adds a watchpoint to the Watch window

                Delete Watch             Selectively removes item from Watch
                                        window

                Delete All Watch         Removes all items from the Watch
                                        window

                Trace On                 Toggles tracing on and off

                History On               Records last 20 executed statements
    Menu        Command                  Description
    ──────────────────────────────────────────────────────────────────────────
                History On               Records last 20 executed statements

                Toggle Breakpoint        Toggles a breakpoint on the current
                                        line on and off

                Clear All Breakpoints    Removes all breakpoints

                Break on Errors (New)    Halts program execution if an error
                                        occurs, regardless of any error
                                        handling

                Set Next Statement       Sets the next statement to execute
                                        when a suspended program continues
                                        running

    Option      Display (New)            Customizes the screen elements
    (New)
                Set Paths (New)          Alters default search paths for
                                        specific types of files
    Menu        Command                  Description
    ──────────────────────────────────────────────────────────────────────────
                                        specific types of files

                Right Mouse (New)        Selects the function for the right
                                        mouse button

                Syntax Checking          Toggles automatic syntax checking on
                                        and off

                Full Menus (New)         Toggles between Full Menus and Easy
                                        Menus

    Help        Index (New)              Displays an alphabetical list of
                                        QuickBASIC keywords and a brief
                                        description of each

                Contents (New)           Displays a visual outline of contents

                Topic                    Provides information on variables,
                                        keywords
    Menu        Command                  Description
    ──────────────────────────────────────────────────────────────────────────
                                        keywords

                Help on Help (New)       Describes how to use Help and common
                                        keyword shortcuts
    ──────────────────────────────────────────────────────────────────────────


    The Version 3.0 Debug option is removed from the Run menu. In Version 4.5
    you can debug at any time, using the debugging commands in the Debug menu.

B.2.5  Editing-Key Changes

    The QuickBASIC keyboard interface has been extended to include editing key
    sequences similar to those in the WordStar editor. (See Chapter 12, "Using
    the Editor," and Chapter 13, "The Edit Menu," in Learning to Use Microsoft
    QuickBASIC for more information about editing.) The functions performed by
    the QuickBASIC Version 2.0 key sequences listed in Table B.3 are changed
    in QuickBASIC Versions 4.0 and 4.5.

    Table B.3  Editing-Key Changes
                            QuickBASIC              QuickBASIC
    Function                 2.0 Key                 4.5 Key
    ──────────────────────────────────────────────────────────────────────────
    Undo                     SHIFT+ESC               ALT+BKSP

    Cut                      DEL                     SHIFT+DEL

    Copy                     F2                      CTRL+INS

    Paste                    INS                     SHIFT+INS

    Clear                    ──                      DEL

    Overtype                 ──                      INS
    ──────────────────────────────────────────────────────────────────────────


B.3  Differences in Compiling and Debugging

    In the QuickBASIC 4.5 programming environment, compiling and debugging are
    not separate operations. Your program is always ready to run, and you can
    debug your code in several ways while you program. This section describes
    the differences in compiling and debugging features between QuickBASIC
    Versions 4.0 and 4.5 and previous versions.

B.3.1  Command-Line Differences

    QuickBASIC Versions 4.0 and 4.5 support Version 2.0 command-line options
    only for the QB command, not the BC command. To compile a program outside
    of the QuickBASIC environment, use the BC command, which is described in
    Appendix G, "Compiling and Linking from DOS."

    Versions 4.0 and 4.5 do not require any of the Compile options listed in
    Table 4.1 of the Microsoft QuickBASIC Version 2.0 manual. If you attempt
    to invoke QuickBASIC using these as command-line options, an error message
    appears. Similarly, it was necessary to choose certain compiler options
    from the Compile dialog box in Version 3.0; this is now done
    automatically. Table B.4 describes the way in which QuickBASIC now
    supports the functionality of these options.

    Table B.4  QB and BC Options Not Used in QuickBASIC Versions 4.0 or 4.5
    Version 2.0              Version 4.5
    ──────────────────────────────────────────────────────────────────────────
    On Error (/E)            Automatically set whenever an ON ERROR statement
                            is present.

    Debug (/D)               Always on when you run a program within the
                            QuickBASIC environment. When producing executable
                            programs on disk or Quick libraries, use the
                            Produce Debug Code option.

    Checking between         Automatically set whenever an ON event statement
    Statements (/V) and      is present.
    Event Trapping (/W)

    Resume Next (/X)         Automatically set whenever a RESUME NEXT
                            statement is present.

    Arrays in Row Order (/R) Available only when compiling with BC.

    Minimize String Data     The default for QB. To turn off this option, you
    (/S)                     must compile from the command line with BC.
    ──────────────────────────────────────────────────────────────────────────

    The options listed in Table B.5 are now available for the QB and BC
    commands.

    Table B.5  Options Introduced in Version 4.0 for the QB and BC Commands
╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Option                   Description
    ──────────────────────────────────────────────────────────────────────────
    /AH                      Allows dynamic arrays of records, fixed-length
                            strings, and numeric data to be larger than 64K
                            each. If this option is not specified, the
                            maximum size for each array is 64K. Note that
                            this option has no effect on the way data items
                            are passed to procedures. (This option is used
                            with the QB and BC commands.)

    /H                       Displays the highest resolution possible on your
                            hardware. For example, if you have an EGA,
                            QuickBASIC displays 43 lines and 80 columns of
                            text. (This option is used only with the QB
    Option                   Description
    ──────────────────────────────────────────────────────────────────────────
                            text. (This option is used only with the QB
                            command.)

    /MBF                     Converts Microsoft Binary format numbers to IEEE
                            format. See Section B.1.2.3 for more information
                            about this option (used with the QB and BC
                            commands).

    /RUN sourcefile          Runs sourcefile immediately, without first
                            displaying the QuickBASIC programming
                            environment. (This option is used only with the
                            QB command.)
    ──────────────────────────────────────────────────────────────────────────


B.3.2  Separate Compilation Differences

Versions 4.0 and 4.5 do not allow separate compilation with the QB command.
Use the BC command described in Appendix G, "Compiling and Linking from
DOS" to compile and link files without entering the programming environment.

B.3.3  User Libraries and BUILDLIB

    User libraries created for previous versions are not compatible with
    Versions 4.0 and 4.5. You must rebuild the library from the original
    source files.

    User libraries are now called Quick libraries. There is no change in their
    function or use. The file-name extension of these libraries is now .QLB
    instead of .EXE. The BUILDLIB utility is no longer required. Quick
    libraries are now created from within the programming environment or from
    the link command line. See Appendix H, "Creating and Using Quick
    Libraries," for more information on this topic.

B.3.4  Restrictions on Include Files

    Include files can contain SUB or FUNCTION procedure declarations but not
    definitions. If you need to use an old include file with procedure
    definitions in it, use the Merge command from the File menu to insert the
    include file into the current module. When you merge an include file
    containing a SUB procedure, the text of the procedure does not appear in
    the currently active window. To view or edit its text, choose the SUBs
    command from the View menu, then select the procedure name in the list
    box. Once the text is merged, you can run the program.

    Alternatively, you may decide to put your SUB procedure in a separate
    module. In this case, you must take one of the following two steps for any
    shared variables (variables declared in a COMMONSHARED or [[RE]]DIM SHARED
    statement outside the SUB procedure, or in a SHARED statement inside the
    SUB procedure), because variables declared this way are shared only within
    a single module:

    1. Share the variables between the modules by listing them in COMMON
        statements at the module level in both modules.

    2. Pass the variables to the SUB procedure in an argument list.

    See Chapter 2, "SUB and FUNCTION Procedures," and Chapter 7,
    "Programming with Modules," for additional information on modules and
    procedures.

B.3.5  Debugging

    QuickBASIC now helps you debug your programs faster by providing the
    following debugging features:

    1. Multiple breakpoints

    2. Watch expressions, watchpoints, and instant watches

    3. Improved program tracing

    4. Full-screen window that displays program text during single-stepping

    5. The ability to change variable values during execution, then continue

    6. The ability to edit the program, then continue execution without
        restarting

    7. History feature

    8. Calls menu

    9. Symbol help

    The debugging function-key sequences listed in Table B.6 are changed from
    QuickBASIC Version 2.0:

    Table B.6  Debugging-Key Changes
                            QuickBASIC              QuickBASIC
    Function                 Version 2.0 Key         Version 4.5 Key
    ──────────────────────────────────────────────────────────────────────────
    Trace                    ALT+F8                  F8

    Step                     ALT+F9                  F10
    ──────────────────────────────────────────────────────────────────────────

    Note that animation is turned on when you toggle on the Trace On command
    from the Debug menu, then run your program.

    See Chapter 9, "Debugging While You Program," in Learning to Use Microsoft
    QuickBASIC for more information.


B.4  Changes to the BASIC Language

    This section describes enhancements and changes to the BASIC language in
    Version 4.5 and earlier versions of QuickBASIC. Table B.7 lists the
    keywords affected by these changes and shows which version of QuickBASIC
    is affected by each change. A more detailed explanation of the changes
    appears after the table.

    Table B.7  Changes to the BASIC Language
╓┌─┌───────────────────────────────┌─────────┌──────────┌─────────┌──────────╖
                                            QuickBASIC Version
    Keyword                         2.0       3.0        4.0       4.5
    ──────────────────────────────────────────────────────────────────────────
    AS                              No        No         Yes       Yes

    CALL                            No        No         Yes       Yes

    CASE                            No        Yes        Yes       Yes

    CLEAR                           No        No         Yes       Yes
                                            QuickBASIC Version
    Keyword                         2.0       3.0        4.0       4.5
    ──────────────────────────────────────────────────────────────────────────
    CLEAR                           No        No         Yes       Yes

    CLNG                            No        No         Yes       Yes

    CLS                             No        Yes        Yes       Yes

    COLOR                           No        No         Yes       Yes

    CONST                           No        Yes        Yes       Yes

    CVL                             No        No         Yes       Yes

    CVSMBF, CVDMBF                  No        Yes        Yes       Yes

    DECLARE                         No        No         Yes       Yes

    DEFLNG                          No        No         Yes       Yes

                                            QuickBASIC Version
    Keyword                         2.0       3.0        4.0       4.5
    ──────────────────────────────────────────────────────────────────────────

    DIM                             No        No         Yes       Yes

    DO...LOOP                       No        Yes        Yes       Yes

    EXIT                            No        Yes        Yes       Yes

    FILEATTR                        No        No         Yes       Yes

    FREEFILE                        No        No         Yes       Yes

    FUNCTION                        No        No         Yes       Yes

    GET                             No        No         Yes       Yes

    LCASE$                          No        No         Yes       Yes

    LEN                             No        No         Yes       Yes
                                            QuickBASIC Version
    Keyword                         2.0       3.0        4.0       4.5
    ──────────────────────────────────────────────────────────────────────────
    LEN                             No        No         Yes       Yes

    LSET                            No        No         Yes       Yes

    LTRIM$                          No        No         Yes       Yes

    MKL$                            No        No         Yes       Yes

    MKSMBF$, MKDMBF$                No        Yes        Yes       Yes

    OPEN                            No        No         Yes       Yes

    ON UEVENT                       No        No         No        Yes

    PALETTE                         No        No         Yes       Yes

    PUT                             No        No         Yes       Yes

                                            QuickBASIC Version
    Keyword                         2.0       3.0        4.0       4.5
    ──────────────────────────────────────────────────────────────────────────

    RTRIM$                          No        No         Yes       Yes

    SCREEN                          No        No         Yes       Yes

    SEEK                            No        No         Yes       Yes

    SELECT CASE                     No        Yes        Yes       Yes

    SETMEM                          No        No         Yes       Yes

    SLEEP                           No        No         No        Yes

    STATIC                          No        No         Yes       Yes

    TYPE                            No        No         Yes       Yes

    UCASE$                          No        No         Yes       Yes
                                            QuickBASIC Version
    Keyword                         2.0       3.0        4.0       4.5
    ──────────────────────────────────────────────────────────────────────────
    UCASE$                          No        No         Yes       Yes

    UEVENT                          No        No         No        Yes

    VARPTR                          No        No         Yes       Yes

    VARSEG                          No        No         Yes       Yes

    WIDTH                           No        Yes        Yes       Yes
    ──────────────────────────────────────────────────────────────────────────


    The following section explains in more detail the differences in the
    keywords summarized above.

╓┌─┌──────────────────┌──────────────────────────────────────────────────────╖
    Keywords           Explanation
    ──────────────────────────────────────────────────────────────────────────
    Keywords           Explanation
    ──────────────────────────────────────────────────────────────────────────
    AS                 The AS clause allows the use of user-defined types in
                        DIM, COMMON, and SHARED statements and in DECLARE, SUB,
                        and FUNCTION parameter lists.

    CALL               The use of CALL is optional for calling subprograms
                        declared with the DECLARE statement.

    CLEAR              The CLEAR statement no longer sets the total size of
                        the stack; it sets only the stack size required by the
                        program. QuickBASIC sets the stack size to the amount
                        specified by the CLEAR statement plus what QuickBASIC
                        itself requires.

    CLNG               The CLNG function rounds its argument and returns a
                        long (four-byte) integer that is equal to the argument.

    CLS                The CLS statement has been modified to give you greater
                        flexibility in clearing the screen. Note that
                        QuickBASIC no longer clears the screen automatically at
    Keywords           Explanation
    ──────────────────────────────────────────────────────────────────────────
                        QuickBASIC no longer clears the screen automatically at
                        the beginning of each program, as was true in earlier
                        versions.

    COLOR, SCREEN,     The COLOR, SCREEN, PALETTE, and WIDTH statements are
    PALETTE, WIDTH     extended to include screen modes available with the IBM
                        PS/2(R) VGA and Multicolor Graphics Array (MCGA) cards.

    CONST              The CONST statement lets you define symbolic constants
                        to improve program readability and ease program
                        maintenance.

    CVL                The CVL function is used to read long integers stored
                        as strings in random-access data files. CVL converts a
                        four-byte string created with the MKL$ function back to
                        a long integer for use in your BASIC program.

    CVSMBF, CVDMBF     The CVSMBF and CVDMBF functions convert strings
                        containing Microsoft Binary format numbers to
    Keywords           Explanation
    ──────────────────────────────────────────────────────────────────────────
                        containing Microsoft Binary format numbers to
                        IEEE-format numbers. Although QuickBASIC Version 4.5
                        supports these statements, they are considered obsolete
                        since the IEEE-format is now the QuickBASIC standard.

    DECLARE            The DECLARE statement allows you to call procedures
                        from different modules, check the number and type of
                        arguments passed, and call procedures before they are
                        defined.

    DEFLNG             The DEFLNG statement declares all variables, DEF FN
                        functions, and FUNCTION procedures as having the
                        long-integer type. That is, unless a variable or
                        function has been declared in an AS type clause, or it
                        has an explicit type-definition suffix such as % or $,
                        it is a long integer by default.

    DIM                The DIM statement's TO clause lets you specify
                        subscripts of any integer value, giving you greater
    Keywords           Explanation
    ──────────────────────────────────────────────────────────────────────────
                        subscripts of any integer value, giving you greater
                        flexibility in array declarations.

    DO...LOOP          Using DO...LOOP statements gives you more powerful
                        loops that allow you to write programs with better
                        structure.

    EXIT               The use of EXIT {DEF | DO | FOR | FUNCTION | SUB}
                        statements provides convenient exits from loops and
                        procedures.

    FREEFILE, FILEATTR The FREEFILE and FILEATTR functions help you write
                        applications that do file I/O in a multiple-module
                        environment.

    FUNCTION           The FUNCTION...END FUNCTION procedure allows you to
                        define a multiline procedure that you call from within
                        an expression. These procedures behave much like
                        intrinsic functions such as ABS or multiline DEF FN
    Keywords           Explanation
    ──────────────────────────────────────────────────────────────────────────
                        intrinsic functions such as ABS or multiline DEF FN
                        functions from QuickBASIC Versions 1.0-3.0. However,
                        unlike a DEF FN function, a FUNCTION procedure can be
                        defined in one module and called from another. Also,
                        FUNCTION procedures have local variables and support
                        recursion.

    GET, PUT           For I/O operations, the syntax of the GET and PUT
                        statements is expanded to include records defined with
                        TYPE...END TYPE statements. This makes use of the FIELD
                        statement unnecessary.

    LCASE$, UCASE$,    The following string-handling functions are available
    LTRIM$, RTRIM$     in Version 4.5:

                        Function          Return Value
                        LCASE$            A copy of the string with all letters
                                        converted to lowercase
                        UCASE$            A copy of the string with all letters
    Keywords           Explanation
    ──────────────────────────────────────────────────────────────────────────
                        UCASE$            A copy of the string with all letters
                                        converted to uppercase
                        LTRIM$            A copy of the string with all leading
                                        blanks removed
                        RTRIM$            A copy of the string with all
                                        trailing blanks removed
                        LEN               The LEN function has been extended to
                                        return the number of bytes required
                                        by any scalar or record variable,
                                        constant, expression, or array
                                        element.

    LSET               The LSET statement is extended to include record
                        variables as well as string variables. This allows you
                        to assign one record variable to another record
                        variable even when the records are not similar.

    MKL$               The MKL$ function is used to convert long integers to
                        strings that can be stored in random-access data files.
    Keywords           Explanation
    ──────────────────────────────────────────────────────────────────────────
                        strings that can be stored in random-access data files.
                        Use the CVL function to change the string back to a
                        long integer.

    MKSMBF$, MKDMBF$   The MKSMBF$ and MKDMBF$ functions convert IEEE-format
                        numbers to strings containing a Microsoft Binary format
                        number. They are obsolete (but supported) in Version
                        4.5, which uses the IEEE-format.

    ON UEVENT          The ON UEVENT statement directs the program to a
                        specified location when a user-defined event (a UEVENT)
                        occurs. Use it in the same fashion as other
                        event-handling statements.

    OPEN               The OPEN statement now opens two files with the same
                        name for OUTPUT or APPEND as long as the path names are
                        different. For example, the following is now permitted:

                        OPEN "SAMPLE" FOR APPEND AS #1
    Keywords           Explanation
    ──────────────────────────────────────────────────────────────────────────
                        OPEN "SAMPLE" FOR APPEND AS #1
                        OPEN "TMP\SAMPLE" FOR APPEND AS #2

                        A binary file mode has been added to the OPEN statement
                        syntax. See Chapter 3, "File and Device I/O," for
                        information about using this mode.

    SEEK               The SEEK statement and function allow you to position a
                        file at any byte or record. See Chapter 3, "File and
                        Device I/O," for more information.

    SELECT CASE        The use of SELECT CASE statements provides a way to
                        simplify complex condition testing. The CASE clause of
                        the SELECT CASE statement now accepts any expression
                        (including variable expressions) as an argument; in
                        previous versions, only constant expressions were
                        permitted.

    SETMEM             The SETMEM function facilitates mixed-language
    Keywords           Explanation
    ──────────────────────────────────────────────────────────────────────────
    SETMEM             The SETMEM function facilitates mixed-language
                        programming by allowing you to decrease the amount of
                        dynamic memory allocated by BASIC so it can be used by
                        procedures in other languages.

    SLEEP              The SLEEP statement causes the program to pause for an
                        indicated period of time or until the user presses a
                        key or an enabled event occurs. The optional argument
                        indicates the length of the pause (in seconds).

    STATIC             Omitting the STATIC attribute from SUB and FUNCTION
                        statements causes variables to be allocated when the
                        procedures are called, instead of when they are
                        defined. Such variables do not retain their values
                        between procedure calls.

    TYPE               The TYPE...END TYPE statement lets you define a data
                        type containing elements of different fundamental
                        types. This simplifies defining and accessing
    Keywords           Explanation
    ──────────────────────────────────────────────────────────────────────────
                        types. This simplifies defining and accessing
                        random-access file records.

    UEVENT             Enables, suspends, or disables a user-defined event.
    {ON|STOP|OFF}      The UEVENT statements are used in the same way as other
                        event-trapping statements.

    VARPTR             The VARPTR function now returns the 16-bit integer
                        offset of the BASIC variable or array element. The
                        offset is from the beginning of the segment that
                        contains the variable or array element.

    VARSEG             The VARSEG function returns the segment address of its
                        argument. This allows you to set DEF SEG appropriately
                        for use with PEEK, POKE, BLOAD, BSAVE, and CALL
                        ABSOLUTE. It also permits you to get the appropriate
                        segment for use with CALL INTERRUPT when executing
                        operating-system or BIOS interrupts.

    Keywords           Explanation
    ──────────────────────────────────────────────────────────────────────────

    WIDTH              A new argument on the WIDTH statement lets your
                        programs use the extended line modes on machines
                        equipped with EGA, VGA, and MCGA adapter cards.
    ──────────────────────────────────────────────────────────────────────────


    ──────────────────────────────────────────────────────────────────────────
    NOTE
    You can no longer conditionally execute NEXT and WEND statements using
    the single-line IF...THEN...ELSE statement.
    ──────────────────────────────────────────────────────────────────────────


B.5  File Compatibility

    All versions of QuickBASIC are source-code compatible; source code created
    for a previous version compiles under Version 4.5, except as noted in
    Section B.3.4, "Restrictions on Include Files." QuickBASIC 4.5 translates
    QuickBASIC 4.0 binary files. If you encounter difficulty translating other
    binary files, save the program as an ASCII (text) format in QuickBASIC
    4.0, then load it with QuickBASIC 4.5. You must recompile object files and
    user libraries created with previous versions of QuickBASIC.



────────────────────────────────────────────────────────────────────────────
Appendix C  Limits in QuickBASIC

    QuickBASIC and the BC compiler offer programming versatility, but both
    have limitations in order to keep file size and complexity manageable. As
    a result, you may reach these limits in some situations. This appendix
    lists the boundaries you may encounter.

    Table C.1  QuickBASIC Limits
╓┌─┌────────────────────────┌───────────────────────┌────────────────────────╖
                            Maximum                 Minimum
    ──────────────────────────────────────────────────────────────────────────
    Names and Strings
    Variable names           40 characters           1 character
                            Maximum                 Minimum
    ──────────────────────────────────────────────────────────────────────────
    Variable names           40 characters           1 character

    String length            32,767 characters       0 characters

    Integers                 32,767                  -32,768

    Long integers            2,147,483,647           -2,147,483,648

    Single-precision numbers 3.402823 E+38           1.401298 E-45
    (positive)

    Single-precision numbers -1.401298 E-45          -3.402823 E+38
    (negative)

    Double-precision numbers 1.797693134862315 D+308 4.940656458412465 D-324
    (positive)

    Double-precision numbers -4.940656458412465      -1.797693134862315 D+308
    (negative)               D-324
                            Maximum                 Minimum
    ──────────────────────────────────────────────────────────────────────────
    (negative)               D-324

    Arrays
    Array size (all
    elements)
    Static                 65,535 bytes (64K)      1
    Dynamic                Available memory

    Array dimensions         8                       1

    Array subscripts         32,767                  -32,768

    Files and Procedures
    Number of arguments      60 interpreted          0 passed to a procedure

    Nesting of include files 5 levels                0

    Procedure size           65,535 bytes (64K)      0
    (interpreted)
                            Maximum                 Minimum
    ──────────────────────────────────────────────────────────────────────────
    (interpreted)

    Module size (compiled)   65,535 bytes (64K)      0

    Data files open          255                     0 simultaneously

    Data file record number  2,147,483,647           1

    Data file record size    32,767 bytes (32K)      1 byte
    (bytes)

    Data file size           Available disk space    0

    Path names               127 characters          1 character

    Error message numbers    255                     1

    Editing in the Quick-BASIC Environment
    Text box entry           128 characters          0 characters
                            Maximum                 Minimum
    ──────────────────────────────────────────────────────────────────────────
    Text box entry           128 characters          0 characters

    "Search for" string      128                     1

    "Change to" string       40                      0

    Placemarkers             4                       0

    Watchpoints and/or watch 8                       0 expressions

    Number of lines in       10                      0 Immediate window

    Characters in View       255                     0 window on one line

    Length of COMMAND$       124                     0 string
    ──────────────────────────────────────────────────────────────────────────



────────────────────────────────────────────────────────────────────────────
Appendix D  Keyboard Scan Codes and ASCII Character Codes


D.1  Keyboard Scan Codes

    The table on the next page shows the DOS keyboard scan codes. These codes
    are returned by the INKEY$ function.

    Key combinations with NUL in the Char column return two bytes──a null byte
    (&H00) followed by the value listed in the Dec and Hex columns. For
    example, pressing ALT+F1 returns a null byte followed by a byte containing
    104 (&H68).

    ┌────────┬───────┬────────────┬─────────────┬─────────────┬──────────────┐
    │        │       │            │ ASCII or    │  ASCII or   │   ASCII or   │
    │        │ Scan  │ ASCII or   │ Extended    │  Extended   │   Extended   │
    │  Key   │ Code  │ Extended   │ with SHIFT  │  with CTRL  │   with ALT   │
    ├────────┼───────┼────────────┼─────────────┼─────────────┼──────────────┤
    │        │Dec Hex│Dec Hex Char│Dec Hex Char │Dec Hex Char │ Dec Hex Char │
    ├────────┼───────┼────────────┼─────────────┼─────────────┼──────────────┤
    │ESC     │ 1  01 │ 27  1B     │ 27  1B      │ 27  1B      │              │
    │1!      │ 2  02 │ 49  31  1  │ 33  21   !  │             │ 120  78  NUL │
    │2@      │ 3  03 │ 50  32  2  │ 64  40   @  │  3  03 NUL  │ 121  79  NUL │
    │3#      │ 4  04 │ 51  33  3  │ 35  23   #  │             │ 122  7A  NUL │
    │4$      │ 5  05 │ 52  34  4  │ 36  24   $  │             │ 123  7B  NUL │
    │5%      │ 6  06 │ 53  35  5  │ 37  25   %  │             │ 124  7C  NUL │
    │6^      │ 7  07 │ 54  36  6  │ 94  5E   ^  │ 30  IE      │ 125  7D  NUL │
    │7&      │ 8  08 │ 55  37  7  │ 38  26   &  │             │ 126  7E  NUL │
    │8*      │ 9  09 │ 56  38  8  │ 42  2A   *  │             │ 127  7F  NUL │
    │9(      │10  0A │ 57  39  9  │ 40  28   (  │             │ 128  80  NUL │
    │0)      │11  0B │ 48  30  0  │ 41  29   )  │             │ 129  81  NUL │
    │-_      │12  0C │ 45  2D  -  │ 95  5F   -  │ 31  IF      │ 130  82  NUL │
    │=+      │13  0D │ 61  3D  =  │ 43  2B   +  │             │ 131  83  NUL │
    │BKSP    │14  0E │  8  08     │  8  08      │127  7F      │              │
    │TAB     │15  0F │  9  09     │ 15  OF   NUL│             │              │
    │Q       │16  10 │113  71  q  │ 81  51   Q  │ 17  11      │  16  10  NUL │
    │W       │17  11 │119  77  w  │ 87  57   W  │ 23  17      │  17  11  NUL │
    │E       │18  12 │101  65  e  │ 69  45   E  │  5  05      │  18  12  NUL │
    │R       │19   13│114  72   r │ 82  52   R  │ 18  12      │  19  13  NUL │
    │T       │20   14│116  74   t │ 84  54   T  │ 20  14      │  20  14  NUL │
    │Y       │21   15│121  79   y │ 89  59   Y  │ 25  19      │  21  15  NUL │
    │U       │22   16│117  75   u │ 85  55   U  │ 21  15      │  22  16  NUL │
    │I       │23   17│105  69   i │ 73  49   I  │  9  09      │  23  17  NUL │
    │O       │24   18│111  6F   o │ 79  4F   O  │ 15  0F      │  24  18  NUL │
    │P       │25   19│112  70   p │ 80  50   P  │ 16  10      │  25  19  NUL │
    │[{      │26   1A│ 91  5B   [ │123  7B   {  │ 27  1B      │              │
    │]}      │27   1B│ 93  5D   ] │125  7D   }  │ 29  1D      │              │
    │ENTER   │28   1C│ 13  OD   CR│ 13  OD   CR │ 10  OA   LF │              │
    │CTRL    │29   1D│            │             │             │              │
    │A       │30   1E│ 97  61   a │ 65  41   A  │  1  01      │  30  1E  NUL │
    │S       │31   1F│115  73   s │ 83  53   S  │ 19  13      │  31  1F  NUL │
    │D       │32   20│100  64   d │ 68  44   D  │  4  04      │  32  20  NUL │
    │F       │33   21│102  66   f │ 70  46   F  │  6  06      │  33  21  NUL │
    │G       │34   22│103  67   g │ 71  47   G  │  7  07      │  34  22  NUL │
    │H       │35   23│104  68   h │ 72  48   H  │  8  08      │  35  23  NUL │
    │J       │36   24│106  6A   j │ 74  4A   J  │ 10  0A      │  36  24  NUL │
    │K       │37   25│107  6B   k │ 75  4B   K  │ 11  0B      │  37  25  NUL │
    │L       │38   26│108  6C   l │ 76  4C   L  │ 12  0C      │  38  26  NUL │
    │;:      │39   27│ 59  3B   ; │ 58  3A   :  │             │              │
    │'"      │40   28│ 39  27   ' │ 34  22   "  │             │              │
    │`~      │41   29│ 96  60   ` │126  7E   ~  │             │              │
    │L SHIFT │42   2A│            │             │             │              │
    │\|      │43   2B│ 92  5C   \ │124  7C   |  │ 28  1C      │              │
    │Z       │44  2C │122  7A  z  │ 90  5A   Z  │ 26  1A      │  44  2C  NUL │
    │X       │45  2D │120  78  x  │ 88  58   X  │ 24  18      │  45  2D  NUL │
    │C       │46  2E │ 99  63  c  │ 67  43   C  │  3  03      │  46  2E  NUL │
    │V       │47  2F │118  76  v  │ 86  56   V  │ 22  16      │  47  2F  NUL │
    │B       │48  30 │ 98  62  b  │ 66  42   B  │  2  OE      │  48  30  NUL │
    │N       │49  31 │110  6E  n  │ 78  4E   N  │ 14  OD      │  49  31  NUL │
    │M       │50  32 │109  6D  m  │ 77  4D   M  │ 13          │  50  32  NUL │
    │,<      │51  33 │ 44  2C  '  │ 60  3C   <  │             │              │
    │.>      │52  34 │ 46  2E  .  │ 62  3E   >  │             │              │
    │/?      │53  35 │ 47  2F  /  │ 63  3F   ?  │             │              │
    │R SHIFT │54  36 │            │             │             │              │
    │* PRTSC │55  37 │ 42  2A  *  │     INT  5§ │ 16  10      │              │
    │ALT     │56  38 │            │             │             │              │
    │SPACE   │57  39 │ 32  20  SPC│ 32  20   SPC│ 32  20  SPC │  32  20  SPC │
    │CAPS    │58  3A │            │             │             │              │
    │F1      │59  3B │ 59  3B  NUL│ 84  54   NUL│ 94  5E  NUL │ 104  68  NUL │
    │F2      │60  3C │ 60  3C  NUL│ 85  55   NUL│ 95  5F  NUL │ 105  69  NUL │
    │F3      │61  3D │ 61  3D  NUL│ 86  56   NUL│ 96  60  NUL │ 106  6A  NUL │
    │F4      │62  3E │ 62  3E  NUL│ 87  57   NUL│ 97  61  NUL │ 107  6B  NUL │
    │F5      │63  3F │ 63  3F  NUL│ 88  58   NUL│ 98  62  NUL │ 108  6C  NUL │
    │F6      │64  40 │ 64  40  NUL│ 89  59   NUL│ 99  63  NUL │ 109  6D  NUL │
    │F7      │65  41 │ 65  41  NUL│ 90  5A   NUL│100  64  NUL │ 110  6E  NUL │
    │F8      │66  42 │ 66  46  NUL│ 91  5B   NUL│101  65  NUL │ 111  6F  NUL │
    │F9      │67  43 │ 67  43  NUL│ 92  5C   NUL│102  66  NUL │ 112  70  NUL │
    │F10     │68  44 │ 68  44  NUL│ 93  5D   NUL│103  67  NUL │ 113  71  NUL │
    │NUM     │69  45 │            │             │             │              │
    │SCROLL  │70  46 │            │             │             │              │
    │HOME    │71  47 │ 71  47 NUL │ 55  37   7  │119  77  NUL │              │
    │UP      │72  48 │ 72  48 NUL │ 56  38   8  │             │              │
    │PGUP    │73  49 │ 73  49 NUL │ 57  39   9  │132  84  NUL │              │
    │GREY-   │74  4A │ 45  2D  -  │ 45  2D   -  │             │              │
    │LEFT    │75  4B │ 75  4B NUL │ 52  34   4  │115  73  NUL │              │
    │CENTER  │76  4C │            │ 53  35   5  │             │              │
    │RIGHT   │77  4D │ 77  4D NUL │ 54  36   6  │116  74  NUL │              │
    │GREY+   │78  4E │ 43  2B  +  │ 43  2b   +  │             │              │
    │END     │79  4F │ 79  4F NUL │ 49  31   1  │117  75  NUL │              │
    │DOWN    │80  50 │ 80  50 NUL │ 50  32   2  │             │              │
    │PGDN    │81  51 │ 81  51 NUL │ 51  33   3  │118  76  NUL │              │
    │INS     │82  52 │ 82  52 NUL │ 48  30   0  │             │              │
    │DEL     │83  53 │ 83  53 NUL │ 46  2E   .  │             │              │
    └────────┴───────┴────────────┴─────────────┴─────────────┴──────────────┘


D.2  ASCII Character Codes

    ┌─────────────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐
    │Ctrl D   H  Char Code│  │Dec Hex Char│  │Dec Hex Char│  │Dec Hex Char│
    ├───┬───┬───┬────┬────┤  ├───┬───┬────┤  ├───┬───┬────┤  ├───┬───┬────┤
    │^@ │  0│00 │    │ NUL│  │ 32│ 20│    │  │ 64│40 │ @  │  │ 96│60 │ `  │
    │^A │  1│01 │ ☺  │ SOH│  │ 33│ 21│ !  │  │ 65│41 │ A  │  │ 97│61 │ a  │
    │^B │  2│02 │ ☻  │ STX│  │ 34│ 22│ "  │  │ 66│42 │ B  │  │ 98│62 │ b  │
    │^C │  3│03 │ ♥  │ ETX│  │ 35│ 23│ #  │  │ 67│43 │ C  │  │ 99│63 │ c  │
    │^D │  4│04 │ ♦  │ EOT│  │ 36│ 24│ $  │  │ 68│44 │ D  │  │100│64 │ d  │
    │^E │  5│05 │ ♣  │ ENQ│  │ 37│ 25│ %  │  │ 69│45 │ E  │  │101│65 │ e  │
    │^F │  6│06 │ ♠  │ ACK│  │ 38│ 26│ &  │  │ 70│46 │ F  │  │102│66 │ f  │
    │^G │  7│07 │ •  │ BEL│  │ 39│ 27│ '  │  │ 71│47 │ G  │  │103│67 │ g  │
    │^H │  8│08 │ ◘  │ BS │  │ 40│ 28│ (  │  │ 72│48 │ H  │  │104│68 │ h  │
    │^I │  9│09 │    │ HT │  │ 41│ 29│ )  │  │ 73│49 │ I  │  │105│69 │ i  │
    │^J │ 10│0A │    │ LF │  │ 42│ 2A│ *  │  │ 74│4A │ J  │  │106│6A │ j  │
    │^K │ 11│0B │    │ VT │  │ 43│ 2B│ +  │  │ 75│4B │ K  │  │107│6B │ k  │
    │^L │ 12│0C │    │ FF │  │ 44│ 2C│ ,  │  │ 76│4C │ L  │  │108│6C │ l  │
    │^M │ 13│0D │    │ CR │  │ 45│ 2D│ -  │  │ 77│4D │ M  │  │109│6D │ m  │
    │^N │ 14│0E │ ♫  │ SO │  │ 46│ 2E│ .  │  │ 78│4E │ N  │  │110│6E │ n  │
    │^O │ 15│0F │    │ SI │  │ 47│ 2F│ /  │  │ 79│4F │ O  │  │111│6F │ o  │
    │^P │ 16│10 │ ►  │ DLE│  │ 48│ 30│ 0  │  │ 80│50 │ P  │  │112│70 │ p  │
    │^Q │ 17│11 │ ◄  │ DC1│  │ 49│ 31│ 1  │  │ 81│51 │ Q  │  │113│71 │ q  │
    │^R │ 18│12 │ ↕  │ DC2│  │ 50│ 32│ 2  │  │ 82│52 │ R  │  │114│72 │ r  │
    │^S │ 19│13 │ ‼  │ DC3│  │ 51│ 33│ 3  │  │ 83│53 │ S  │  │115│73 │ s  │
    │^T │ 20│14 │ ¶  │ DC4│  │ 52│ 34│ 4  │  │ 84│54 │ T  │  │116│74 │ t  │
    │^U │ 21│15 │ §  │ NAK│  │ 53│ 35│ 5  │  │ 85│55 │ U  │  │117│75 │ u  │
    │^V │ 22│ 16│ ▬  │ SYN│  │ 54│ 36│ 6  │  │ 86│ 56│ V  │  │118│ 76│ v  │
    │^W │ 23│ 17│ ↨  │ ETB│  │ 55│ 37│ 7  │  │ 87│ 57│ W  │  │119│ 77│ w  │
    │^X │ 24│ 18│ ↑  │ CAN│  │ 56│ 38│ 8  │  │ 88│ 58│ X  │  │120│ 78│ x  │
    │^Y │ 25│ 19│ ↓  │ EM │  │ 57│ 39│ 9  │  │ 89│ 59│ Y  │  │121│ 79│ y  │
    │^Z │ 26│ 1A│ →  │ SUB│  │ 58│ 3A│ :  │  │ 90│ 5A│ Z  │  │122│ 7A│ z  │
    │^[ │ 27│ 1B│ ←  │ ESC│  │ 59│ 3B│ ;  │  │ 91│ 5B│ [  │  │123│ 7B│ {  │
    │^\ │ 28│ 1C│ ∟  │ FS │  │ 60│ 3C│ <  │  │ 92│ 5C│ \  │  │124│ 7C│ |  │
    │^} │ 29│ 1D│ ↔  │ GS │  │ 61│ 3D│ =  │  │ 93│ 5D│ ]  │  │125│ 7D│ }  │
    │^^ │ 30│ 1E│   │ RS │  │ 62│ 3E│ >  │  │ 94│ 5E│ ^  │  │126│ 7E│ ~  │
    │^_ │ 31│ 1F│ ▼  │ US │  │ 63│ 3F│ ?  │  │ 95│ 5F│ _  │  │127│ 7F│    │
    └───┴───┴───┴────┴────┘  └───┴───┴────┘  └───┴───┴────┘  └───┴───┴────┘


            ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐
            │Dec Hex Char│  │Dec Hex Char│  │Dec Hex Char│  │Dec Hex Char│
            ├───┬───┬────┤  ├───┬───┬────┤  ├───┬───┬────┤  ├───┬───┬────┤
            │128│ 80│ Ç  │  │160│ A0│ á  │  │192│ C0│ └  │  │224│ E0│ α  │
            │129│ 81│ ü  │  │161│ A1│ í  │  │193│ C1│ ┴  │  │225│ E1│ ß  │
            │130│ 82│ é  │  │162│ A2│ ó  │  │194│ C2│ ┬  │  │226│ E2│ Γ  │
            │131│ 83│ â  │  │163│ A3│ ú  │  │195│ C3│ ├  │  │227│ E3│ π  │
            │132│ 84│ ä  │  │164│ A4│ ñ  │  │196│ C4│ ─  │  │228│ E4│ Σ  │
            │133│ 85│ à  │  │165│ A5│ Ñ  │  │197│ C5│ ┼  │  │229│ E5│ σ  │
            │134│ 86│ å  │  │166│ A6│ ª  │  │198│ C6│ ╞  │  │230│ E6│ µ  │
            │135│ 87│ ç  │  │167│ A7│ º  │  │199│ C7│ ╟  │  │231│ E7│ τ  │
            │136│ 88│ ê  │  │168│ A8│ ¿  │  │200│ C8│ ╚  │  │232│ E8│ Φ  │
            │137│ 89│ ë  │  │169│ A9│ ⌐  │  │201│ C9│ ╔  │  │233│ E9│ Θ  │
            │138│ 90│ è  │  │170│ AA│ ¬  │  │202│ CA│ ╩  │  │234│ EA│ Ω  │
            │139│ 91│ ï  │  │171│ AB│ ½  │  │203│ CB│ ╦  │  │235│ EB│ δ  │
            │140│ 92│ î  │  │172│ AC│ ¼  │  │204│ CC│ ╠  │  │236│ EC│ ∞  │
            │141│ 93│ ì  │  │173│ AD│ ¡  │  │205│ CD│ ═  │  │237│ ED│ φ  │
            │142│ 94│ Ä  │  │174│ AE│ «  │  │206│ CE│ ╬  │  │238│ EE│ ε  │
            │143│ 95│ Å  │  │175│ AF│ »  │  │207│ CF│ ╧  │  │239│ EF│ ∩  │
            │144│ 96│ É  │  │176│ B0│ ░  │  │208│ D0│ ╨  │  │240│ F0│ ≡  │
            │145│ 97│ æ  │  │177│ B1│ ▒  │  │209│ D1│ ╤  │  │241│ F1│ ±  │
            │146│ 98│ Æ  │  │178│ B2│ ▓  │  │210│ D2│ ╥  │  │242│ F2│ ≥  │
            │147│ 99│ ô  │  │179│ B3│ │  │  │211│ D3│ ╙  │  │243│ F3│ ≤  │
            │148│ 9A│ ö  │  │180│ B4│ ┤  │  │212│ D4│ ╘  │  │244│ F4│ ⌠  │
            │149│ 9B│ ò  │  │181│ B5│ ╡  │  │213│ D5│ ╒  │  │245│ F5│ ⌡  │
            │150│ 96│ û  │  │182│ B6│ ╢  │  │214│ D6│ ╓  │  │246│ F6│ ÷  │
            │151│ 97│ ù  │  │183│ B7│ ╖  │  │215│ D7│ ╫  │  │247│ F7│ ≈  │
            │152│ 98│ ÿ  │  │184│ B8│ ╕  │  │216│ D8│ ╪  │  │248│ F8│ °  │
            │153│ 99│ Ö  │  │185│ B9│ ╣  │  │217│ D9│ ≈  │  │249│ F9│ ∙  │
            │154│ 9A│ Ü  │  │186│ BA│ ║  │  │218│ DA│ ┌  │  │250│ FA│ ·  │
            │155│ 9B│ ¢  │  │187│ BB│ ╗  │  │219│ DB│ █  │  │251│ FB│ √  │
            │156│ 9C│ £  │  │188│ BC│ ╝  │  │220│ DC│ ▄  │  │252│ FC│ ⁿ  │
            │157│ 9D│ ¥  │  │189│ BD│ ╜  │  │221│ DD│ ▌  │  │253│ FD│ ²  │
            │158│ 9E│ ₧  │  │190│ BE│ ╛  │  │222│ DE│ ▐  │  │254│ FE│ ■  │
            │159│ 9F│ ƒ  │  │191│ BF│ ┐  │  │223│ DF│ ▀  │  │255│ FF│    │
            └───┴───┴────┘  └───┴───┴─┴──┘  └───┴───┴────┘  └───┴───┴────┘



────────────────────────────────────────────────────────────────────────────
Appendix E  BASIC Reserved Words

    The following is a list of Microsoft BASIC reserved words:

    ──────────────────────────────────────────────────────────────────────────
    ABS               ELSE             LOOP              SEEK
    ACCESS             ELSEIF           LPOS              SEG
    ALIAS              END              LPRINT            SELECT
    AND                ENDIF            LSET              SETMEM
    ANY                ENVIRON          LTRIM$            SGN
    APPEND             ENVIRON$         MID$              SHARED
    AS                 EOF              MKD$              SHELL
    ASC               EQV               MKDIR             SIGNAL
    ATN               ERASE            MKDMBF$           SIN
    BASE               ERDEV            MKI$              SINGLE
    BEEP              ERDEV$           MKL$              SLEEP
    BINARY             ERL              MKS$              SOUND
    BLOAD             ERR              MKSMBF$           SPACE$
    BSAVE             ERROR            MOD                SPC
    BYVAL              EXIT             NAME              SQR
    CALL              EXP              NEXT              STATIC
    CALLS             FIELD            NOT                STEP
    CASE              FILEATTR         OCT$              STICK
    CDBL              FILES            OFF                STOP
    CDECL              FIX              ON                 STR$
    CHAIN             FOR              OPEN              STRIG
    CHDIR             FRE              OPTION            STRING
    CHR$              FREEFILE         OR                 STRING$
    CINT              FUNCTION         OUT               SUB
    CIRCLE            GET              OUTPUT             SWAP
    CLEAR             GOSUB            PAINT             SYSTEM
    CLNG              GOTO             PALETTE           TAB
    CLOSE             HEX$             PCOPY             TAN
    CLS               IF               PEEK              THEN
    COLOR             IMP               PEN               TIME$
    COM               INKEY$           PLAY              TIMER
    COMMAND$          INP              PMAP              TO
    COMMON            INPUT            POINT             TROFF
    CONST             INPUT$           POKE              TRON
    COS               INSTR            POS               TYPE
    CSNG              INT              PRESET            UBOUND
    CSRLIN            INTEGER           PRINT             UCASE$
    CVD               IOCTL            PSET              UEVENT
    CVDMBF            IOCTL$            PUT               UNLOCK
    CVI               IS                RANDOM             UNTIL
    CVL               KEY              RANDOMIZE         USING
    CVS               KILL             READ              VAL
    CVSMBF            LBOUND           REDIM             VARPTR
    DATA              LCASE$           REM               VARPTR$
    DATE$             LEFT$            RESET             VARSEG
    DECLARE           LEN              RESTORE           VIEW
    DEF               LET              RESUME            WAIT
    DEFDBL            LINE             RETURN            WEND
    DEFINT            LIST              RIGHT$            WHILE
    DEFLNG            LOC              RMDIR             WIDTH
    DEFSNG            LOCAL             RND               WINDOW
    DEFSTR            LOCATE           RSET              WRITE
    DIM               LOCK             RTRIM$            XOR
    DO                LOF              RUN
    DOUBLE             LOG              SADD
    DRAW              LONG              SCREEN
    ──────────────────────────────────────────────────────────────────────────



────────────────────────────────────────────────────────────────────────────
Appendix F  Metacommands

    This appendix describes the QuickBASIC metacommands──commands that direct
    QuickBASIC to handle your program in a particular way. The first section
    describes the format used for metacommands. The next two sections describe
    specific metacommands.

    By using the metacommands, you can:

    ■ Read in and compile other BASIC source files at specific points during
    compilation ($INCLUDE)

    ■ Control the allocation of dimensioned arrays ($STATIC and $DYNAMIC)


F.1  Metacommand Syntax

    Metacommands begin with a dollar sign ($) and are always enclosed in a
    program comment. More than one metacommand can be given in one comment.
    Multiple metacommands are separated by white-space characters (space or
    tab). Metacommands that take arguments have a colon between the
    metacommand and the argument:

    REM $METACOMMAND [[ : argument ]]

    String arguments must be enclosed in single quotation marks. White-space
    characters between elements of a metacommand are ignored. The following
    are all valid forms for metacommands:

    REM $STATIC $INCLUDE:  'datadefs.bi'
    REM     $STATIC    $INCLUDE :  'datadefs.bi'
    ' $STATIC $INCLUDE: 'datadefs.bi'
    '     $STATIC    $INCLUDE :  'datadefs.bi'

    Note that no spaces appear between the dollar sign and the rest of the
    metacommand.

    If you want to refer to a metacommand in a description but do not want it
    to execute, place a character that is not a tab or space before the first
    dollar sign on the line. For example, on the following line both
    metacommands are ignored:

    REM x$STATIC $INCLUDE:  'datadefs.bi'


F.2  Processing Additional Source Files: $INCLUDE

    The $INCLUDE metacommand instructs the compiler to temporarily switch from
    processing one file and instead to read program statements from the BASIC
    file named in the argument. When the end of the included file is reached,
    the compiler returns to processing the original file. Because compilation
    begins with the line immediately following the line in which $INCLUDE
    occurred, $INCLUDE should be the last statement on a line. The following
    statement is correct:

    DEFINT I-N   ' $INCLUDE: 'COMMON.BAS'

    There are two restrictions on using include files:

    1. Included files must not contain SUB or FUNCTION statements.

    2. Included files created with BASICA must be saved with the ,A option.


F.3  Dimensioned Array Allocation: $STATIC and $DYNAMIC

    The $STATIC and $DYNAMIC metacommands tell the compiler how to allocate
    memory for arrays. Neither of these metacommands takes an argument:

    'Make all arrays dynamic.

    '$DYNAMIC

    $STATIC sets aside storage for arrays during compilation. When the $STATIC
    metacommand is used, the ERASE statement reinitializes all array values to
    zero (numeric arrays) or the null string (string arrays) but does not
    remove the array. The REDIM statement has no effect on $STATIC arrays.

    $DYNAMIC allocates storage for arrays while the program is running. This
    means that the ERASE statement removes the array and frees the memory it
    took for other uses. You can also use the REDIM statement to change the
    size of a $DYNAMIC array.

    The $STATIC and $DYNAMIC metacommands affect all arrays except implicitly
    dimensioned arrays (arrays not declared in a DIM statement). Implicitly
    dimensioned arrays are always allocated as if $STATIC had been used.



────────────────────────────────────────────────────────────────────────────
Appendix G  Compiling and Linking from DOS

    This appendix explains how to compile and link outside the QuickBASIC
    environment. You might want to do this for some of the following reasons:

    ■ To use a different text editor

    ■ To create executable programs that can be debugged with the Microsoft
    CodeView debugger

    ■ To create listing files for use in debugging a stand-alone executable
    program

    ■ To use options not available within the QuickBASIC environment, such as
    storing arrays in row order

    ■ To link with NOCOM.OBJ or NOEM.OBJ (files supplied with QuickBASIC),
    which reduce the size of executable files in programs that do not use
    the COM statement or are always used with a math coprocessor

    When you finish this appendix you will understand how to

    ■ Compile from the DOS command line with the BC command

    ■ Create executable files and link program object files with the LINK
    command

    ■ Create and maintain stand-alone (.LIB) libraries with the LIB command


G.1  BC, LINK, and LIB

    The Microsoft QuickBASIC package includes BC, LINK, and LIB. The following
    list describes how these special tools are used when compiling and linking
    outside of the QuickBASIC environment:

╓┌─┌──────────────────┌──────────────────────────────────────────────────────╖
    Program            Function
    ──────────────────────────────────────────────────────────────────────────
    BC.EXE             When you choose the Make EXE File or Make Library
                        command from the Run menu, QuickBASIC invokes the BASIC
                        command-line compiler (BC) to produce intermediate
                        program files called object files. These object files
                        will be linked together to form your program or Quick
                        library. BC is also available any time you want to
                        compile programs outside of the QuickBASIC environment.
                        You may prefer to use BC if you want to compile
                        programs you have written with another text editor.
                        However, you only need to use BC from the command line
                        if your program is too large to compile in memory
                        within the QuickBASIC environment or if you want your
                        executable files to be compatible with the Microsoft
                        CodeView debugger.

    LINK.EXE           QuickBASIC uses the Microsoft Overlay Linker (LINK) to
                        link object files produced by BC with the appropriate
    Program            Function
    ──────────────────────────────────────────────────────────────────────────
                        link object files produced by BC with the appropriate
                        libraries to produce an executable file. You can use
                        LINK directly whenever you want to link object files or
                        make Quick libraries.

    LIB.EXE            The Microsoft Library Manager (LIB) creates stand-alone
                        libraries from the object files produced by BC.
                        QuickBASIC itself uses LIB to create such libraries and
                        then uses them when you choose the Make EXE File
                        command from the Run menu.

    ──────────────────────────────────────────────────────────────────────────



G.2  The Compiling and Linking Process

    To create a stand-alone program from a BASIC source file when you are
    outside of the QuickBASIC environment, follow these steps:

    1. Compile each source file, creating an object file.

    2. Link the object files using LINK. LINK includes one or more stand-alone
        libraries and creates an executable file. LINK makes sure that all the
        procedure calls in the source files match up with the procedures in the
        libraries or with procedures in other object files before it creates an
        executable file.

    You can use either of the following methods of compiling and linking:

    ■ Compile and link in separate steps by using the BC and LINK commands.

    ■ Create a batch file containing all the compiling and linking commands.
    This method is most useful if you use the same options whenever you
    compile and link your programs.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    When QuickBASIC compiles and links your program from within the
    environment, the /E linker option is set automatically. However, when
    you use the LINK command outside the QuickBASIC environment, you must
    explicitly specify the /E option to minimize the size of the executable
    file and maximize program-loading speed.
    ──────────────────────────────────────────────────────────────────────────

    When compiling and linking from DOS, the paths you defined in the Options
    menu are not used. To search for include and library files the way you
    specified on the Options menu, you must set the DOS environment variables
    LIB and INCLUDE to point to the appropriate directories. Otherwise the
    compiler and/or linker might generate File not found errors.

    Sections G.3 and G.4 explain how to compile and link in separate steps.


G.3  Compiling with the BC Command

    You can compile with the BC command in either of the following ways:

    ■ Type all information on a single command line, using the following
    syntax:

    BC sourcefile [[,[[objectfile]] [[,[[listingfile]]]]]]
    [[optionslist]][[;]]

    ■ Type

    BC

    and respond to the following prompts:

    Source Filename [.BAS]:
    Object Filename [basename.OBJ]:
    Source Listing: [NUL.LST]:

    Table G.1 shows the input you must give on the BC command line or in
    response to each prompt:

    Table G.1  Input to the BC Command
    Field              Prompt            Input
    ──────────────────────────────────────────────────────────────────────────
    sourcefile         "Source Filename" The name of your source file

    objectfile         "Object Filename" The name of the object file you are
                                        creating

    listingfile        "Source Listing"  The name of the file containing a
                                        source listing. The source-listing
                                        file contains the address of each
                                        line in your source file, the text of
                                        the source file, its size, and any
                                        error messages produced during
                                        compilation.

    optionslist        Gives options     Any of the compiler options described
                        after any         in Section G.3.2, "Using BC Command
                        response          Options"
    ──────────────────────────────────────────────────────────────────────────

G.3.1  Specifying File Names

    The BC command makes certain assumptions about the files you specify,
    based on the path names and extensions you use for the files. The
    following sections describe these assumptions and other rules for
    specifying file names to the BC command.

    G.3.1.1  Uppercase and Lowercase Letters

    You can use any combination of uppercase and lowercase letters for file
    names; the compiler accepts uppercase and lowercase letters
    interchangeably.

    Example

    The BC command considers the following three file names to be equivalent:

    abcde.BAS
    ABCDE.BAS
    aBcDe.Bas

    G.3.1.2  File-Name Extensions

    A DOS file name has two parts: the "base name," which includes everything
    up to (but not including) the period (.), and the "extension," which
    includes the period and up to three characters following the period. In
    general, the extension identifies the type of file (for example, whether
    the file is a BASIC source file, an object file, an executable file, or a
    stand-alone library).

    BC and LINK use the file-name extensions described in the following list:

    Extension                File Description
    ──────────────────────────────────────────────────────────────────────────
    .BAS                     BASIC source file

    .OBJ                     Object file

    .LIB                     Stand-alone library file

    .LST                     Listing file produced by BC

    .MAP                     File of symbols from the linked program

    .EXE                     Executable file

    ──────────────────────────────────────────────────────────────────────────

    G.3.1.3  Path Names

    Any file name can include a full or partial path name. A full path name
    starts with the drive name; a partial path name has one or more directory
    names preceding the file name, but does not include a drive name.

    Giving a full path name allows you to specify files in different paths as
    input to the BC command and lets you create files on different drives or
    in different directories on the current drive.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    For files that you are creating with BC, you can give a path name ending
    in a backslash (\) to create the file in that path. When it creates the
    file, BC uses the default name for the file.
    ──────────────────────────────────────────────────────────────────────────

G.3.2  Using BC Command Options

    Options to the BC command consist of either a forward-slash character (/)
    or a dash (-) followed by one or more letters. (The forward slash and the
    dash can be used interchangeably. In this manual, forward slashes are used
    for options.)

    The BC command-line options are explained in the following list:

╓┌─┌──────────────────┌──────────────────────────────────────────────────────╖
    Option             Description
    ──────────────────────────────────────────────────────────────────────────
    /A                 Creates a listing of the disassembled object code for
                        each source line and shows the assembly-language code
                        generated by the compiler.

    /AH                Allows dynamic arrays of records, fixed-length strings,
                        and numeric data to occupy all of available memory. If
                        this option is not specified, the maximum size is 64K
                        per array. Note that this option has no effect on the
                        way data items are passed to procedures.

    /C:buffersize      Sets the size of the buffer receiving remote data for
                        each communications port when using an asynchronous
    Option             Description
    ──────────────────────────────────────────────────────────────────────────
                        each communications port when using an asynchronous
                        communications adapter. (The transmission buffer is
                        allocated 128 bytes for each communications port and
                        cannot be changed on the BC command line.) This option
                        has no effect if the asynchronous communications card
                        is not present. The default buffer size is 512 bytes
                        total for both ports; the maximum size is 32,767 bytes.

    /D                 Generates debugging code for run-time error checking
                        and enables CTRL+BREAK. This option is the same as the
                        Produce Debug Code option from the Run menu's Make EXE
                        File command within the QuickBASIC environment.

    /E                 Indicates presence of ON ERROR with RESUME linenumber
                        statements. (See also the discussion of the /X option
                        in this list.)

    /MBF               The intrinsic functions MKS$, MKD$, CVS, and CVD are
                        converted to MKSMBF$, MKDMBF$, CVSMBF, and CVDMBF,
    Option             Description
    ──────────────────────────────────────────────────────────────────────────
                        converted to MKSMBF$, MKDMBF$, CVSMBF, and CVDMBF,
                        respectively. This allows your QuickBASIC program to
                        read and write floating-point values stored in
                        Microsoft Binary format.

    /O                 Substitutes the BCOM45.LIB run-time library for
                        BRUN45.LIB. See Chapter 16, "The Run Menu," in Learning
                        to Use Microsoft QuickBASIC for more information about
                        using these libraries.

    /R                 Stores arrays in row-major order. BASIC normally stores
                        arrays in column-major order. This option is useful if
                        you are using other-language routines that store arrays
                        in row order.

    /S                 Writes quoted strings to the object file instead of the
                        symbol table. Use this option when an Out of memory
                        error message occurs in a program that has many string
                        constants.
    Option             Description
    ──────────────────────────────────────────────────────────────────────────
                        constants.

    /V                 Enables event trapping for communications (COM),
                        lightpen (PEN), joystick (STRIG), timer (TIMER), music
                        buffer (PLAY) and function keys (KEY). Use this option
                        to check between statements for an occurrence of an
                        event.

    /W                 Enables event trapping for the same statements as /V,
                        but checks at each line number or label for occurrence
                        of an event.

    /X                 Indicates presence of ON ERROR with RESUME, RESUME
                        NEXT, or RESUME 0.

    /ZD                Produces an object file containing line-number records
                        corresponding to the line numbers of the source file.
                        This option is useful when you want to perform
                        source-level debugging using the Microsoft Symbolic
    Option             Description
    ──────────────────────────────────────────────────────────────────────────
                        source-level debugging using the Microsoft Symbolic
                        Debug Utility (SYMDEB), available with the Microsoft
                        Macro Assembler, Version 4.0.

    /ZI                Produces an object file of debugging information used
                        by the Microsoft CodeView debugger, available with
                        Microsoft C, Version 5.0 and later and Microsoft Macro
                        Assembler, Version 5.0 and later.
    ──────────────────────────────────────────────────────────────────────────


G.4  Linking

    After compiling your program, you must link the object file with the
    appropriate libraries to create an executable program. You can use the
    LINK command in any of the following ways:

    ■ Give the input on a command line of the following form:

    LINK objfile [[,[[exefile]][[,[[mapfile]][[,[[lib]]]]]]
    [[linkopts]][[;]]]]

    The command line cannot be longer than 128 characters.

    ■ Type

    LINK

    and respond to the following prompts:

    Object Modules [.OBJ]:
    Run File [basename.EXE]:
    List File [NUL.MAP]:
    Libraries [.LIB]:

    To give more files for any prompt, type a plus sign (+) at the end of
    the line. The prompt reappears on the next line, and you can continue
    typing input for the prompt.

    ■ Set up a "response file" (a file containing responses to the LINK
    command prompts), and then type a LINK command of the following form:

    LINK @filename

    Here, filename is the name of the response file. You can append linker
    options to any response or give options on one or more separate lines.
    The responses must be in the same order as the LINK command prompts
    discussed above. You can also enter the name of a response file after
    any linker prompt, or at any position in the LINK command line.

    Table G.2 shows the input you must give on the LINK command line, or in
    response to each prompt.

    Table G.2  Input to the LINK Command
╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Field                    Prompt
                            Input
    ──────────────────────────────────────────────────────────────────────────
    objfile                  "Object Modules"
                            One or more object files that you are linking.
                            The object files should be separated by either
    Field                    Prompt
                            Input
    ──────────────────────────────────────────────────────────────────────────
                            The object files should be separated by either
                            plus signs or spaces.

    exefile                  "Run File"
                            Name of the executable file you are creating, if
                            you want to give it a name or extension other
                            than the default. You should always use the .EXE
                            extension, since DOS expects executable files to
                            have this extension.

    mapfile                  "List File"
                            Name of the file containing a symbol map listing,
                            if you are creating one.☼ You can also specify
                            one of the following DOS device names to direct
                            the map file to that device: AUX for an auxiliary
                            device, CON for the console (terminal), PRN for a
                            printer device, or NUL for no device (so that no
                            map file is created). See Section G.4.6.11 for a
    Field                    Prompt
                            Input
    ──────────────────────────────────────────────────────────────────────────
                            map file is created). See Section G.4.6.11 for a
                            sample map file and information about its
                            contents.

    lib                      "Libraries"
                            One or more stand-alone libraries (or directories
                            to be searched for stand-alone libraries)
                            separated by plus signs or spaces. The
                            "Libraries" prompt allows you to specify up to 16
                            libraries; any additional libraries are ignored.
                            See Section G.4.3 for rules for specifying
                            library names to the linker.

    linkopts                 Gives options after any response
                            Any of the LINK options described in Sections
                            G.4.6.2-G.4.6.15. You can specify LINK options
                            anywhere on the command line.

    Field                    Prompt
                            Input
    ──────────────────────────────────────────────────────────────────────────

    ──────────────────────────────────────────────────────────────────────────


    If you are using a response file, each response must follow the rules
    outlined in Table G.2.

G.4.1  Defaults for LINK

    You can choose defaults for any of the information that LINK needs in any
    of the following ways:

    ■ To choose the default for any command-line entry, omit the file name or
    names before the entry and type only the required comma. The only
    exception to this is the default for the mapfile entry: if you use a
    comma as a placeholder for this entry, LINK creates a map file.

    ■ To choose the default for any prompt, press ENTER.

    ■ To choose the defaults for all remaining command-line entries or
    prompts, type a semicolon after any entry or prompt. The only required
    input is one or more object-file names.

    The following list shows the defaults that LINK uses for executable files,
    map files, and libraries:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    File Type                Default
    ──────────────────────────────────────────────────────────────────────────
    Executable               Base name of the first object file given, plus
                            the .EXE extension. To rename the executable
                            file, you are required to specify only the new
                            base name; if you give a file name with no
                            extension, LINK automatically appends the .EXE
                            extension.

    Map                      The special file name NUL.MAP, which tells LINK
                            not to create a map file. To create a map file,
                            you are required to specify only the base name;
    File Type                Default
    ──────────────────────────────────────────────────────────────────────────
                            you are required to specify only the base name;
                            if you give a file name with no extension, LINK
                            automatically appends the .MAP extension.

    Libraries                Libraries named in the given object files. If you
                            choose the Stand-Alone EXE File option,
                            BCOM45.LIB is the default library; otherwise, the
                            default is BRUN45.LIB. If you specify a library
                            other than a default library, you must give only
                            the base name; if you give a library name with no
                            extension, LINK automatically appends the .LIB
                            extension. See Section G.4.3 for information
                            about specifying libraries other than the default
                            libraries.
    ──────────────────────────────────────────────────────────────────────────


    ──────────────────────────────────────────────────────────────────────────
    NOTE
    When linking a stand-alone executable file, if your program does not use
    the COM statement, your program will be about 4K smaller if you link
    with NOCOM.OBJ, a file supplied with QuickBASIC.
    ──────────────────────────────────────────────────────────────────────────

    Examples

    The following example shows a response file. It tells LINK to link
    together the four object modules FRAME, TEXT, TABLE, and LINEOUT. The
    executable file FRAME.EXE and the map file named FRAMESYM.MAP are
    produced. The /PAUSE option causes LINK to pause before producing the
    executable file to permit disk swapping, if necessary. The /MAP option
    tells LINK to include public symbols and addresses in the map file. LINK
    also links any needed routines from the library file GRAF.LIB. See
    Sections G.4.6.2 and G.4.6.11 for more information on /PAUSE and /MAP
    options.

    FRAME TEXT TABLE LINEOUT
    /PAUSE /MAP
    FRAMESYM
    GRAF.LIB

    In the following example, LINK loads and links the object files FRAME.OBJ,
    TEXT.OBJ, TABLE.OBJ, and LINEOUT.OBJ, searching for unresolved references
    in the library file COBLIB.LIB. By default, the executable file is named
    FRAME.EXE. A map file called FRAMESYM.MAP is also produced.

    LINK FRAME+TEXT+TABLE+LINEOUT, ,FRAMESYM, COBLIB.LIB

    The example that follows illustrates how to continue any prompt by typing
    a plus sign (+) at the end of your response. The example links all of the
    given object files, then creates an executable file. Since a semicolon is
    typed as a response to the "Run File" prompt, the executable file is given
    the default name, which is the base name of the first object file given
    (FRAME), plus the .EXE extension. The defaults are also used for the
    remaining prompts. As a result, no map file is created, and the default
    libraries named in the object files are used for linking.

    LINK

    Object Modules [.OBJ]: FRAME TEXT TABLE LINEOUT+
    Object Modules [.OBJ]: BASELINE REVERSE COLNUM+
    Object Modules [.OBJ]: ROWNUM
    Run File [FRAME.EXE]: ;

G.4.2  Specifying Files to LINK

    The rules for specifying file names to the linker are the same as for
    specifying file names to the BC command: uppercase and lowercase letters
    can be used interchangeably, and file names can include path names to tell
    LINK to look for files or create files in the given path. See Section
    G.3.1 for more information.

G.4.3  Specifying Libraries to LINK

    Ordinarily, you do not need to give LINK a stand-alone-library name. When
    the BC command creates object files, it places in each object file the
    name of the correct stand-alone library for that object file. When the
    object file is passed to the linker, LINK looks for a library with the
    same name as the name in the object file and links the object file with
    that library automatically.

    To link object files with a stand-alone library other than the default,
    give the name of the nondefault library to LINK. You can give the library
    name in either of the following ways:

    ■ After the third comma on the LINK command line. Commas follow the list
    of object-file names, the executable-file name, and the listing-file
    name. The final name is the library name.

    ■ In response to the "Libraries" prompt of the LINK command.

    LINK searches libraries you specify to resolve external references before
    it searches default libraries.

    You might want to link with a stand-alone library other than the default
    to

    ■ Link with additional stand-alone libraries.

    ■ Link with libraries in different paths. If you specify a complete path
    name for the library, LINK only looks in that path for the library.
    Otherwise, it looks in the following three locations:

    1. The current working directory

    2. Any paths or drives you specify after the third comma on the LINK
        command line

    3. The locations given by the LIB environment variable

    ■ Ignore the library named in the object file. In this case, you must give
    the LINK option /NOD in addition to specifying the library you want to
    use for linking. See Section G.4.6.8 for more information about the
    /NOD option.

G.4.4  Memory Requirements for LINK

    LINK uses available memory for the linking session. If the files to be
    linked create an output file that exceeds available memory, LINK creates a
    temporary disk file to serve as memory. This temporary file is handled in
    one of the following ways, depending on the DOS version:

    ■ LINK uses the directory specified by the TMP environment variable from
    DOS for the purpose of creating a temporary file. For example, if the
    TMP variable was set to C:\TEMPDIR, then LINK would put the temporary
    file in C:\TEMPDIR.

    If there is no TMP environment variable, or if the directory specified
    by TMP does not exist, then LINK puts the temporary file in the current
    working directory.

    ■ If LINK is running on DOS Version 3.0 or later, it uses a DOS system
    call to create a temporary file with a unique name in the temporary-file
    directory.

    ■ If LINK is running on a version of DOS prior to 3.0, it creates a
    temporary file named VM.TMP.

    When the linker creates a temporary disk file, you see the message

    Temporary file tempfile has been created.
    Do not change diskette in drive, letter

    where tempfile is ".\" followed by either the file name VM.TMP or a name
    generated by DOS, and letter is the drive containing the temporary file.

    The message

    Do not change diskette in drive

    does not appear unless the drive named letter is a floppy-disk drive. If
    this message appears, do not remove the disk from the drive until the
    linking session ends. If you remove the disk, linker operations will be
    unpredictable, and you may see the following message:

    unexpected end-of-file on scratch file

    If you see this message, rerun the linking session.

    The temporary file that LINK creates is a working file only. LINK deletes
    it at the end of the session.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    Do not give any of your own files the name VM.TMP. LINK displays an
    error message if it finds an existing file with this name.
    ──────────────────────────────────────────────────────────────────────────

G.4.5  Linking with Mixed-Language Programs

    You can link mixed-language programs with LINK. However, problems can
    result from linking .OBJ files from within the other language. Different
    assumptions by different linkers can corrupt QuickBASIC files.

    The following sections discuss linking with modules written in Pascal,
    FORTRAN, and assembly language.

    G.4.5.1  Pascal and FORTRAN Modules in QuickBASIC Programs

    Modules compiled with Microsoft Pascal or FORTRAN can be linked with BASIC
    programs, as described in the Microsoft Mixed-Language Programming Guide.
    They can also be incorporated in Quick libraries. However, QuickBASIC
    programs containing code compiled with Microsoft Pascal must allocate at
    least 2K near-heap space for Pascal. The following example does this by
    using the DIM statement to allocate a static array of 2K or greater in a
    named common block called NMALLOC:

    DIM name%(2048) : COMMON SHARED /NMALLOC/ name%()

    The Pascal run-time module assumes it always has at least 2K of near-heap
    space available. If the Pascal code cannot allocate the required space,
    QuickBASIC may crash. This applies to Pascal code in Quick libraries and
    to Pascal code linked into executable files. The situation is similar for
    FORTRAN I/O, which also requires near buffer space, and which can be
    provided by using an NMALLOC common block.

    G.4.5.2  STATIC Array Allocation in Assembly-Language Routines

    Use the SEG or CALLS keywords or far pointers to pass static array data to
    assembly-language routines. You cannot assume data is in a particular
    segment. Alternatively, you can declare all arrays dynamic (still using
    far pointers) since BC and the QuickBASIC environment handle dynamic
    arrays identically.

    G.4.5.3  References to DGROUP in Extended Run-Time Modules

    For mixed-language programs that use the CHAIN command, you should make
    sure that any code built into an extended run-time module does not contain
    any references to DGROUP. (The CHAIN command causes DGROUP to move, but
    does not update references to DGROUP.) This rule applies only to
    mixed-language programs; because BASIC routines never refer to DGROUP, you
    can ignore this caution for programs written entirely in BASIC.

    To avoid this problem, you can use the value of SS, since BASIC always
    assumes that SS coincides with DGROUP.

G.4.6  Using LINK Options

    LINK options begin with the linker's option character, which is the
    forward slash (/).

    Case is not significant in LINK options; for example, /NOI and /noi are
    equivalent.

    You can abbreviate LINK options to save space and effort. The minimum
    valid abbreviation for each option is indicated in the syntax of the
    option. For example, several options begin with the letters "NO";
    therefore, abbreviations for those options must be longer than "NO" to be
    unique. You cannot use "NO" as an abbreviation for the /NOIGNORECASE
    option, since LINK cannot tell which of the options beginning with "NO"
    you intend. The shortest valid abbreviation for this option is /NOI.

    Abbreviations must begin with the first letter of the option and must be
    continuous through the last letter typed. No gaps or transpositions are
    allowed.

    Some LINK options take numeric arguments. A numeric argument can be any of
    the following:

    ■ A decimal number from 0 to 65,535.

    ■ An octal number from 0 to 0177777. A number is interpreted as octal if
    it starts with a zero (0). For example, the number 10 is a decimal
    number, but the number 010 is an octal number, equivalent to 8 in
    decimal.

    ■ A hexadecimal number from 0 to 0xFFFF. A number is interpreted as
    hexadecimal if it starts with a zero followed by an x or an X. For
    example, 0x10 is a hexadecimal number, equivalent to 16 in decimal.

    LINK options affect all files in the linking process, regardless of where
    the options are specified.

    If you usually use the same set of LINK options, you can use the LINK
    environment variable in DOS to specify certain options each time you link.
    If you set this variable, LINK checks it for options and expects to find
    options listed exactly as you would type them on the command line. You
    cannot specify file-name arguments in the LINK environment variable.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    A command-line option overrides the effect of any environment-variable
    option with which it conflicts. For example, the command-line option
    /SE:256 cancels the effect of the environment-variable option /SE:512.
    To prevent an option in the environment variable from being used, you
    must reset the environment variable itself.
    ──────────────────────────────────────────────────────────────────────────

    Example

    In the following example, the file TEST.OBJ is linked with the options
    /SE:256 and /CO. After that, the file PROG.OBJ is linked with the option
    /NOD, as well as with the options /SE:256 and /CO.

    SET LINK=/SE:256 /CO
    LINK TEST;
    LINK /NOD PROG;

    G.4.6.1  Viewing the Options List (/HE)

    /HE[[LP]]

    The /HE option tells LINK to display a list of the available LINK options
    on the screen.

    G.4.6.2  Pausing during Linking (/PAU)

    /PAU[[SE]]

    The /PAU option tells LINK to pause in the link session and display a
    message before it writes the executable file to disk. This allows you to
    insert a new disk to hold the executable file.

    If you specify the /PAUSE option, LINK displays the following message
    before it creates the executable file:

    About to generate .EXE file
    Change diskette in drive letterand press <ENTER>

    The letter corresponds to the current drive. LINK resumes processing when
    you press the ENTER key.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    Do not remove the disk on which the list file is created or the disk
    used for the temporary file. If a temporary file is created on the disk
    you plan to swap, press CTRL+C to terminate the linking session.
    Rearrange your files so that the temporary file and the executable file
    can be written to the same disk. Then try linking again.
    ──────────────────────────────────────────────────────────────────────────

    G.4.6.3  Displaying Linker Process Information (/I)

    /I[[NFORMATION]]

    The /I option displays information about the linking process, including
    the phase of linking and the names of the object files being linked.

    This option helps you determine the locations of the object files being
    linked and the order in which they are linked.

    G.4.6.4  Preventing Linker Prompting (/B)

    /B[[ATCH]]

    The /B option tells LINK not to prompt you for a new path name whenever it
    cannot find a library or object file that it needs. When this option is
    used, the linker simply continues to execute without using the file in
    question.

    This option can cause unresolved external references. It is intended
    primarily to let you use batch or MAKE files to link many executable files
    with a single command if you do not want LINK to stop processing if it
    cannot find a required file. It is also useful when you are redirecting
    the LINK command line to create a file of linker output for future
    reference. However, this option does not prevent LINK from prompting for
    arguments missing from the LINK command line.

    G.4.6.5  Creating Quick Libraries (/Q)

    /Q[[UICKLIB]]

    The /Q option tells LINK to combine the object files you specify into a
    Quick library. When you start the QuickBASIC environment, you can give the
    /L option on the QB command line to load the Quick library. If you use the
    /Q option, be sure to specify BQLB45.LIB in the library list in order to
    include QuickBASIC Quick-library support routines.

    See Appendix H, "Creating and Using Quick Libraries," for more
    information about creating and loading Quick libraries.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    You cannot use the /EXEPACK option with the /Q option.
    ──────────────────────────────────────────────────────────────────────────

    G.4.6.6  Packing Executable Files (/E)

    /E[[XEPACK]]

    The /E option removes sequences of repeated bytes (typically null
    characters) and optimizes the "load-time relocation table" before creating
    the executable file. The load-time relocation table is a table of
    references relative to the start of the program. Each reference changes
    when the executable image is loaded into memory and an actual address for
    the entry point is assigned.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    Executable files linked with this option may be smaller and load faster
    than files linked without this option.
    ──────────────────────────────────────────────────────────────────────────

    G.4.6.7  Disabling Segment Packing (/NOP)

    /NOP[[ACKCODE]]

    The /NOP option is normally not necessary because code-segment packing is
    normally turned off. However, if a DOS environment variable such as LINK
    turns on code-segment packing automatically, you can use the /NOP option
    to turn segment packing back off again.

    G.4.6.8  Ignoring the Usual BASIC Libraries (/NOD)

    /NOD[[EFAULTLIBRARYSEARCH]]

    When it creates an object file, BC includes the names of the "standard"
    libraries──libraries that LINK searches to resolve external references.
    The /NOD option tells LINK not to search any library specified in an
    object file to resolve external references.

    In general, QuickBASIC programs do not work correctly without the standard
    QuickBASIC libraries (BRUN45.LIB and BCOM45.LIB). Thus, if you use the
    /NOD option, you should explicitly give the path name of the required
    standard library.

    G.4.6.9  Ignoring Dictionaries (/NOE)

    /NOE[[XTDICTIONARY]]

    If LINK suspects that a public symbol has been redefined, it prompts you
    to link again with the /NOE option. When you do so, it searches the
    individual object files, rather than "dictionaries" it has created, to
    resolve conflicts. For example, when linking a program with 87.LIB or
    NOCOM.OBJ, you must use the /NOE option.

    G.4.6.10  Setting Maximum Number of Segments (/SE)

    /SE[[GMENTS]]:number

    The /SE option controls the number of segments that LINK allows a program
    to have. The default is 128, but you can set number to any value
    (specified as decimal, octal, or hexadecimal) in the range 1-1024
    (decimal).

    For each segment, LINK must allocate space to keep track of segment
    information. When you set the segment limit higher than 128, LINK
    allocates more space for segment information. For programs with fewer than
    128 segments, you can minimize the amount of storage LINK needs by setting
    number to reflect the actual number of segments in the program. LINK
    displays an error message if this number is too high for the amount of
    memory it has available.

    G.4.6.11  Creating a Map File (/M)

    /M[[AP]]

    The /M option creates a map file. A map file lists the segments of a
    program and the program's public symbols. LINK always tries to allocate
    all of the available memory for sorting public symbols. If the number of
    symbols exceeds the memory limit, then LINK generates an unsorted list.
    The map file mapfile contains a list of symbols sorted by address;
    however, it does not contain a list sorted by name. A sample map file is
    shown below:

    Start  Stop   Length Name                   Class
    00000H 01E9FH 01EA0H _TEXT                  CODE
    01EA0H 01EA0H 00000H C_ETEXT                ENDCODE
    .
    .
    .

    The information in the columns Start and Stop shows the 20-bit address (in
    hexadecimal) of each segment, relative to the beginning of the load
    module. The load module begins at location zero. The column Length gives
    the length of the segment in bytes. The column Name gives the name of the
    segment; the column Class gives information about the segment type. See
    the Microsoft MS-DOS Programmer's Reference for information about groups,
    segments, and classes.

    The starting address and name of each group appear after the list of
    segments. A sample group listing is shown below:

    Origin   Group
    01EA:0   DGROUP

    In this example, DGROUP is the name of the data group.

    The map file shown below contains two lists of global symbols: the first
    list is sorted in ASCII-character order by symbol name; the second, by
    symbol address. The notation Abs appears next to the names of absolute
    symbols (symbols containing 16-bit constant values that are not associated
    with program addresses).

    Many of the global symbols that appear in the map file are symbols used
    internally by the compiler and linker. These symbols usually begin with
    the characters B$ or end with QQ.

    Address         Publics by Name

    01EA:0096       STKHQQ
    0000:1D86       B$Shell
    01EA:04B0       _edata
    01EA:0910       _end
    .
    .
    .
    01EA:00EC       __abrkp
    01EA:009C       __abrktb
    01EA:00EC       __abrktbe
    0000:9876  Abs  __acrtmsg
    0000:9876  Abs  __acrtused
    .
    .
    .
    01EA:0240       ___argc
    01EA:0242       ___argv

    Address         Publics by Value

    0000:0010       _main
    0000:0047       _htoi
    .
    .
    .

    The addresses of the external symbols are in the frame:offset format,
    showing the location of the symbol relative to zero (the beginning of the
    load module).

    Following the lists of symbols, the map file gives the program entry
    point, as shown in the following example:

    Program entry point at 0000:0129

    A map file can also be specified by giving a map-file name on the LINK
    command line or by giving a map-file name in response to the "List File"
    prompt.

    G.4.6.12  Including Line Numbers in a Map File (/LI)

    /LI[[NENUMBERS]]

    The /LI option creates a map file and includes the line numbers and
    associated addresses of the source program. If you are compiling and
    linking in separate steps, this option has an effect only if you are
    linking object files compiled with the /M option.

    G.4.6.13  Packing Contiguous Segments (/PAC)

    /[[NO]]PAC[[KCODE]][[:number]]

    The /PAC option tells LINK to group neighboring code segments. Code
    segments in the same group share the same segment address; all offset
    addresses are then adjusted upward as needed. As a result, many
    instructions that would otherwise have different segment addresses share
    the same segment address.

    If specified, number is the size limit of groups formed by /PAC. LINK
    stops adding segments to a particular group as soon as it cannot add a
    segment to the group without exceeding number. At that point, LINK starts
    forming a new group with the remaining code segments. If number is not
    given, the default is 65,530.

    Although LINK does not pack neighboring segments unless you explicitly ask
    for it, you can use the /NOPACKCODE option to turn off segment packing if,
    for example, you have given the /PAC option in the LINK environment
    variable in DOS.

    G.4.6.14  Using the CodeView Debugger (/CO)

    /CO[[DEVIEW]]

    The /CO option prepares an executable file for debugging using the
    CodeView debugger. If you are compiling and linking in separate steps,
    this option has an effect only if you are linking object files compiled
    with the /ZI option of the BC command. Similarly, it should not be used in
    conjunction with the LINK command's /Q option, because a Quick library
    cannot be debugged with the CodeView debugger.

    G.4.6.15  Distinguishing Case (/NOI)

    /NOI[[GNORECASE]]

    The /NOI option tells LINK to distinguish between uppercase and lowercase
    letters; for example, LINK would consider the names ABC, abc, and Abc to
    be three separate names. When you link, do not specify the /NOI option on
    the LINK command line.

G.4.7  Other LINK Command-Line Options

    Not all options of the LINK command are suitable for use with QuickBASIC
    programs. The following LINK options can be used with Microsoft QuickBASIC
    programs; however, they are never required, since they request actions
    that the BC command or QuickBASIC performs automatically:

╓┌─┌─────────────────────────────┌───────────────────────────────────────────╖
    Option                        Action
    ──────────────────────────────────────────────────────────────────────────
    /CP[[ARMAXALLOC]]:number      Sets the maximum number of 16-byte
                                paragraphs needed by the program when it is
                                loaded into memory to number, an integer
                                between 1 and 65,535, inclusive. The
                                operating system uses this value when
                                allocating space for the program before
                                loading it. Although you can use this option
                                on the LINK command line, it has no effect
                                because, while it is running, your BASIC
                                program controls memory.

    /DO[[SSEG]]                   Forces segments to be ordered using the
                                defaults for Microsoft high-level language
                                products. QuickBASIC programs always use
                                this segment order by default.

    /ST[[ACK]]:number             Specifies the size of the stack for your
    Option                        Action
    ──────────────────────────────────────────────────────────────────────────
    /ST[[ACK]]:number             Specifies the size of the stack for your
                                program, where number is any positive value
                                (decimal, octal, or hexadecimal) up to
                                65,535 (decimal) representing the size, in
                                bytes, of the stack. The standard BASIC
                                library sets the default stack size to 2K.

    /DS[[ALLOCATE]]               Loads all data starting at the high end of
                                the default data segment.

    /HI[[GH]]                     Places the executable file as high in memory
                                as possible.

    /NOG[[ROUPASSOCIATION]]       Tells LINK to ignore group associations when
                                assigning addresses to data and code items.

    /O[[VERLAYINTERRUPT]]:number  Specifies an interrupt number other than
                                0x3F for passing control to overlays.
    ──────────────────────────────────────────────────────────────────────────
    Option                        Action
    ──────────────────────────────────────────────────────────────────────────
    ──────────────────────────────────────────────────────────────────────────


    ──────────────────────────────────────────────────────────────────────────
    NOTE
    Do not use the /DS, /HI, /NOG, or /O options when linking object files
    compiled with BC. They are suitable only for object files created by the
    Microsoft Macro Assembler (MASM).
    ──────────────────────────────────────────────────────────────────────────


G.5  Managing Stand-Alone Libraries: LIB

    The Microsoft Library Manager (LIB) manages the contents of stand-alone
    libraries. A stand-alone library is made up of "object modules"──that is,
    object files combined to form a library. Unlike an object file, an object
    module does not exist independently of its library, and does not have a
    path name or extension associated with its file name. Using LIB, you can:

    ■ Combine object files to create a new library

    ■ Add object files to an existing library

    ■ Delete or replace the object modules of an existing library

    ■ Extract object modules from an existing library and place them in
    separate object files

    ■ Combine the contents of two existing libraries into a new library

    When updating an existing library, LIB performs all of its operations on a
    copy of the library. This mechanism ensures that you have a backup copy of
    any library you update in case of problems with the updated version of the
    library.

G.5.1  Running LIB

    You can give the LIB command input in any of the following ways:

    ■ Specify the input on a command line of the following form:

    LIB oldlib [[/P[[AGESIZE]]:number]]
    [[commands]][[,[[listfile]][[,[[newlib]]]]]][[;]]

    The command line has a maximum length of 128 characters.

    ■ Type

    lib

    and respond to the following prompts:

    Library name:
    Operations:
    List file:
    Output library:

    To give more files for any prompt, type an ampersand (&) at the end of
    the line. The prompt reappears on the next line, and you can continue
    typing input for the prompt.

    ■ Set up a response file, a file with responses to LIB command prompts,
    then type a LIB command of the following form:

    LIB @filename

    Here, filename is the name of the response file. The responses must be in
    the same order as the LIB prompts discussed above. You can also enter the
    name of a response file after any LINK prompt, or at any position in the
    LIB command line.

    Table G.3 shows the input you must give on the LIB command line, or in
    response to each prompt. If you are using a response file, each response
    must follow the rules outlined in this table.

    Table G.3  Input to the LIB Command
╓┌─┌───────────┌────────────────────────┌────────────────────────────────────╖
    Field       Prompt                   Input
    ──────────────────────────────────────────────────────────────────────────
    oldlib      "Library name"           Name of the library you are changing
                                        or creating. If this library does not
                                        exist, LIB asks if you want to create
    Field       Prompt                   Input
    ──────────────────────────────────────────────────────────────────────────
                                        exist, LIB asks if you want to create
                                        it. Type the letter y to create a new
                                        library or the letter n to terminate
                                        LIB. This message is suppressed if
                                        you type command characters, a comma,
                                        or a semicolon after the library
                                        name. A semicolon tells LIB to
                                        perform a consistency check on the
                                        library; in this case, it displays a
                                        message if it finds errors in any
                                        library module.

    /P:number   /P:number after "Library The library page size. This sets the
                name" prompt             page size for the library to number,
                                        where number is an integer power of 2
                                        between 16 and 32,768, inclusive. The
                                        default page size for a new library
                                        is 16 bytes. Modules in the library
                                        are always aligned to start at a
    Field       Prompt                   Input
    ──────────────────────────────────────────────────────────────────────────
                                        are always aligned to start at a
                                        position that is a multiple of the
                                        page size (in bytes) from the
                                        beginning of the file.

    /I          None                     Tells LIB to ignore case when
                                        comparing symbols (default). Use when
                                        combining with libraries that are
                                        case sensitive.

    /NOE        None                     Tells LIB not to generate an extended
                                        dictionary.

    /NOI        None                     Tells LIB to compare case when
                                        comparing symbols (LIB remains case
                                        sensitive).

    commands    "Operations"             Command symbols and object files that
                                        tell LIB what changes to make in the
    Field       Prompt                   Input
    ──────────────────────────────────────────────────────────────────────────
                                        tell LIB what changes to make in the
                                        library.

    listfile    "List file"              Name of a cross-reference-listing
                                        file. No listing file is created if
                                        you do not give a file name.

    newlib      "Output library"         Name of the changed library that LIB
                                        creates as output. If you do not give
                                        a new library name, the original,
                                        unchanged library is saved in a
                                        library file with the same name but
                                        with a .BAK extension replacing the
                                        .LIB extension.
    ──────────────────────────────────────────────────────────────────────────


G.5.2  Usual Responses for LIB

    LIB has its own built-in (default) responses. You can choose these usual
    responses for any of the information that LIB needs, in any the following
    ways:

    ■ To choose the default for any command-line entry, omit the file name or
    names before the entry and type only the required comma. The only
    exception to this is the default for the listfile entry: if you omit
    this entry, LIB creates a cross-reference-listing file.

    ■ To choose the default for any prompt, press ENTER.

    ■ To choose the defaults for all command-line entries or prompts that
    follow an entry or prompt, type a semicolon (;) after that entry or
    prompt. The semicolon should be the last character on the command line.

    The following list shows the defaults that LIB uses for
    cross-reference-listing files and output libraries:

    File               Default
    ──────────────────────────────────────────────────────────────────────────
    Cross-reference    The special file name NUL, which tells the linker not
    listing            to create a cross-reference-listing file

    Output library     The oldlib entry or the response to the "Library name"
                        prompt
    ──────────────────────────────────────────────────────────────────────────

G.5.3  Cross-Reference-Listing Files

    A cross-reference-listing file tracks which routines are contained in a
    stand-alone library and the original object files they came from. A
    cross-reference-listing file contains the following lists:

    ■ An alphabetical list of all public symbols in the library. Each symbol
    name is followed by the name of the module in which it is defined.

    ■ A list of the modules in the library. Under each module name is an
    alphabetical listing of the public symbols defined in that module.

G.5.4  Command Symbols

    To tell LIB what changes you want to make to a library, type a command
    symbol such as +, -, -+, *, or -*, followed immediately by a module name,
    object-file name, or library name. You can specify more than one
    operation, in any order.

    The following list shows each LIB command symbol, the type of file name to
    specify with the symbol, and what the symbol does:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Command                  Meaning
    ──────────────────────────────────────────────────────────────────────────
    +{objfile | lib}         Adds the given object file to the input library
                            and makes that object file the last module in the
                            library, if given with an object-file name. You
                            can use a path name for the object file name.
                            Since LIB automatically supplies the .OBJ
                            extension, you can omit the extension from the
                            object-file name.

                            If given with a library name, the plus sign (+)
                            adds the contents of that library to the input
                            library. The library name must have the .LIB
    Command                  Meaning
    ──────────────────────────────────────────────────────────────────────────
                            library. The library name must have the .LIB
                            extension.

    -module                  Deletes the given module from the input library.
                            A module name does not have a path name or an
                            extension.

    -+module                 Replaces the given module in the input library.
                            Module names have no path names and no
                            extensions. LIB deletes the given module, then
                            appends the object file that has the same name as
                            the module. The object file is assumed to have an
                            .OBJ extension and to reside in the current
                            working directory.

    *module                  Copies the given module from the library to an
                            object file in the current working directory. The
                            module remains in the library file. When LIB
                            copies the module to an object file, it adds the
    Command                  Meaning
    ──────────────────────────────────────────────────────────────────────────
                            copies the module to an object file, it adds the
                            .OBJ extension. You cannot override the .OBJ
                            extension, drive designation, or path name given
                            to the object file. However, you can later rename
                            the file or copy it to whatever location you
                            like.

    -*module                 Moves the given object module from the library to
                            an object file. This operation is equivalent to
                            copying the module to an object file, as
                            described above, then deleting the module from
                            the library.
    ──────────────────────────────────────────────────────────────────────────


    Examples

    The example below uses the replace command symbol (-+) to instruct LIB to
    replace the HEAP module in the library LANG.LIB. LIB deletes HEAP from the
    library, then appends the object file HEAP.OBJ as a new module in the
    library. The semicolon at the end of the command line tells LIB to use the
    default responses for the remaining prompts. This means that no listing
    file is created and that the changes are written to the original library
    file instead of creating a new library file.

    LIB LANG-+HEAP;

    The examples below perform the same function as the first example in this
    section, but in two separate operations, using the add (+) and delete (-)
    command symbols. The effect is the same for these examples because delete
    operations are always carried out before add operations, regardless of the
    order of the operations in the command line. This order of execution
    prevents confusion when a new version of a module replaces an old version
    in the library file.

    LIB LANG-HEAP+HEAP;

    LIB LANG+HEAP-HEAP;

    The example below causes LIB to perform a consistency check of the library
    file FOR.LIB. No other action is performed. LIB displays any consistency
    errors it finds and returns to the operating-system level.

    LIB FOR;

    The following example tells LIB to perform a consistency check on the
    library file LANG.LIB and then create the cross-reference-listing file
    LCROSS.PUB.

    LIB LANG,LCROSS.PUB

    The next example instructs LIB to move the module STUFF from the library
    FIRST.LIB to an object file called STUFF.OBJ. The module STUFF is removed
    from the library in the process. The module MORE is copied from the
    library to an object file called MORE.OBJ; the module remains in the
    library. The revised library is called SECOND.LIB. It contains all the
    modules in the library FIRST.LIB except STUFF, which was removed by using
    the move command symbol (-*). The original library, FIRST.LIB, remains
    unchanged.

    LIB FIRST -*STUFF *MORE, ,SECOND

    The contents of the response file below cause LIB to delete the module
    HEAP from the LIBFOR.LIB library file, extract (without deleting) FOIBLES
    and place it in an object file named FOIBLES.OBJ, and append the object
    files CURSOR.OBJ and HEAP.OBJ as the last two modules in the library.
    Finally, LIB creates the cross-reference-listing file CROSSLST.

    LIBFOR
    +CURSOR+HEAP-HEAP*FOIBLES
    CROSSLST

G.5.5  LIB Options

    LIB has four options. Specify options on the command line following the
    required library-file name and preceding any commands.

    G.5.5.1  Ignoring Case for Symbols

    /I[[GNORECASE]]

    The /I option tells LIB to ignore case when comparing symbols, as LIB does
    by default. Use this option when you are combining a library that is
    marked /NOI (described below) with others that are unmarked and you want
    the new library to be unmarked.

    G.5.5.2  Ignoring Extended Dictionaries

    /NOE[[XTDICTIONARY]]

    The /NOE option tells LIB not to generate an extended dictionary. The
    extended dictionary is an extra part of the library that helps the linker
    process libraries faster.

    Use the /NOE option if you get errors U1171 or U1172, or if the extended
    dictionary causes problems with LINK. See Section G.4.6.9 for more
    information on how LINK uses the extended dictionary.

    G.5.5.3  Distinguishing Case for Symbols

    /NOI[[GNORECASE]]

    The /NOI option tells LIB not to ignore case when comparing symbols; that
    is, /NOI makes LIB case sensitive. By default, LIB ignores case. Using
    this option allows symbols that are the same except for case, such as
    SPLINE and Spline, to be put in the same library.

    Note that when you create a library with the /NOI option, LIB marks the
    library internally to indicate that /NOI is in effect. Earlier version of
    LIB did not mark libraries in this way. If you combine multiple libraries,
    and any one of them is marked /NOI, then /NOI is assumed to be in effect
    for the output library.

    G.5.5.4  Setting Page Size

    /P[[AGESIZE]]:number

    The page size of a library affects the alignment of modules stored in the
    library. Modules in the library are always aligned to start at a position
    that is a multiple of the page size (in bytes) from the beginning of the
    file. The default page size for a newly created library is 16 bytes.

    You can set a different library page size while you are creating a library
    or change the page size of an existing library by adding the following
    option after the oldlib entry on the LIB command line or after the name
    you type in response to the "Library name" prompt:

    The number specifies the new library page size. It must be an integer
    value representing a power of 2 between the values 16 and 32,768.

    The library page size determines the number of modules the library can
    hold. Thus, increasing the page size allows you to include more modules in
    the library. However, the larger the page size, the larger the amount of
    wasted storage space in the library (on the average, pagesize/2 bytes). In
    most cases you should use a small page size unless you need to put a very
    large number of modules in a library.

    The page size also determines the maximum possible size of the library.
    This limit is number * 65,536. For example, if you invoke LIB with the
    option /P:16, the library must be smaller than one megabyte (16 * 65,536
    bytes).



────────────────────────────────────────────────────────────────────────────
Appendix H  Creating and Using Quick Libraries

    This appendix describes how to create and maintain libraries from within
    the QuickBASIC programming environment. A library is a file containing the
    contents of several modules under a single file name. When you finish this
    appendix you will know how to:

    ■ Make libraries from within the QuickBASIC environment

    ■ Load a Quick library when running a QuickBASIC program

    ■ View the contents of a Quick library

    ■ Add routines written in other languages to a Quick library


H.1  Types of Libraries

    QuickBASIC provides tools for creating two different types of libraries,
    which are identified by different file-name extensions:

    Extension                Function
    ──────────────────────────────────────────────────────────────────────────
    .QLB                     The .QLB extension characterizes a Quick library,
                            a special kind of library that permits easy
                            addition of frequently used procedures to your
                            programs. A Quick library can contain procedures
                            written in QuickBASIC or other Microsoft
                            languages such as Microsoft C.

    .LIB                     The .LIB extension characterizes a stand-alone
                            (.LIB) library, one that is created with the
                            Microsoft Library Manager, LIB. When QuickBASIC
                            makes a Quick library, it simultaneously creates
                            a .LIB library containing the same procedures in
                            a somewhat different form.
    ──────────────────────────────────────────────────────────────────────────

    You can generate both types of libraries from within the programming
    environment or from the command line. You can think of a Quick library as
    a group of procedures appended to QuickBASIC when the library is loaded
    with QuickBASIC. Libraries with the .LIB extension are essentially
    independent, compiled procedures. They can either be added to a Quick
    library or linked with a main module to create a file that is executable
    from the DOS command line.

    This appendix discusses the use of command-line utilities for some common
    cases, but you should refer to Appendix G, "Compiling and Linking from
    DOS," for a full explanation of using those utilities.


H.2  Advantages of Quick Libraries

    Quick libraries facilitate program development and maintenance. As
    development progresses on a project and modules become stable components
    of your program, you can add them to a Quick library, then set aside the
    source files for the original modules until you want to improve or
    maintain those source files. Thereafter you can load the library along
    with QuickBASIC, and your program has instant access to all procedures in
    the library.

    Procedures in a Quick library behave like QuickBASIC's own statements. If
    properly declared, a SUB procedure in a Quick library can even be invoked
    without a CALL statement. See Chapter 2, "SUB and FUNCTION Procedures,"
    for more information on calling a SUB procedure with or without the CALL
    keyword.

    Procedures in a Quick library can be executed directly from the Immediate
    window, just like BASIC statements. This means that you can test their
    effects before using them in other programs.

    If you codevelop programs with others, Quick libraries make it easy to
    update a pool of common procedures. If you wish to offer a library of
    original procedures for commercial distribution, all QuickBASIC
    programmers will be able to use them immediately to enhance their own
    work. You could leave your custom Quick library on a bulletin board for
    others to try before purchasing. Because Quick libraries contain no source
    code and can only be used within the QuickBASIC programming environment,
    your proprietary interests are protected while your marketing goals are
    advanced.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    Quick libraries have the same function as user libraries in QuickBASIC
    Versions 2.0 and 3.0. However, you cannot load a user library as a Quick
    library. You must recreate the library from the original source code, as
    described below.
    ──────────────────────────────────────────────────────────────────────────


H.3  Creating a Quick Library

    A Quick library automatically contains all modules, both main and nonmain,
    present in the QuickBASIC environment when you create the new library. It
    also contains the contents of any other Quick library that you loaded when
    starting QuickBASIC. If you load a whole program but only want certain
    modules to be put in the library, you must explicitly unload those you
    don't want. You can unload modules with the File menu's Unload File
    command.

    You can quickly determine which modules are loaded by checking the list
    box of the SUBs command on the View menu. However, this method does not
    show which procedures a loaded library contains. The QLBDUMP.BAS utility
    program, described in Section H.4.3, "Viewing the Contents of a Quick
    Library," allows you to list all the procedures in a library.

    Only whole modules can be put into a library. That is, you cannot select
    one procedure from among many in a module. If you want to enter only
    certain procedures from a module, put the procedures you want in a
    separate module, then put that module into a library.

    A Quick library must be self-contained. A procedure in a Quick library can
    only call other procedures within the same Quick library. Procedure names
    must be unique within the library.

    With large programs, you can reduce loading time by putting as many
    routines as possible in Quick libraries. Putting many routines in Quick
    libraries is also an advantage if you plan to make the program into a
    stand-alone executable file later, since the contents of libraries are
    simply linked without recompiling.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    Your main module may or may not contain procedures. If it does and you
    incorporate those procedures in the library, the entire main module goes
    in the library, too. This does not cause an error message, but the
    module-level code in the library can never be executed unless one of its
    procedures contains a routine (such as ON ERROR) that explicitly passes
    control to the module level. Even if that is the case, much of the
    module-level code may be extraneous. If you organize your procedures in
    modules that are frequently used together, your Quick libraries are
    likely to be less cluttered with useless code.
    ──────────────────────────────────────────────────────────────────────────

H.3.1  Files Needed to Create a Quick Library

    To create a Quick library, make sure that the proper files are available
    before you begin. If you don't have a hard disk, you should keep your
    files and the other programs on several floppy disks. QuickBASIC prompts
    you for a path name when it cannot find a file; when this happens, insert
    the correct disk and respond to the prompt.

    Make sure that the following files are in the current working directory or
    accessible to QuickBASIC through the appropriate DOS environment
    variables:

    File                     Purpose
    ──────────────────────────────────────────────────────────────────────────
    QB.EXE                   Directs the process of creating a Quick library.
                            If you are working only with QuickBASIC modules,
                            you can do everything in one step from within the
                            QuickBASIC environment.

    BC.EXE                   Creates object files from source code.

    LINK.EXE                 Links object files.

    LIB.EXE                  Manages stand-alone libraries of object modules.

    BQLB45.LIB               Supplies routines needed by your Quick library.
                            This library is a stand-alone library that is
                            linked with objects in your library to form a
                            Quick library.
    ──────────────────────────────────────────────────────────────────────────

H.3.2  Making a Quick Library

    Most of the time you create Quick libraries from within the QuickBASIC
    environment. Occasionally, you may want to update a library or include
    routines from other Microsoft languages in your Quick library. In these
    cases, begin by constructing a base library of the non-BASIC routines from
    outside the environment by invoking LINK and LIB directly. Then you can
    add the most current QuickBASIC modules from within QuickBASIC.

H.3.3  Making a Quick Library from within the Environment

    When making a library from within the QuickBASIC environment, the first
    consideration is whether the library to be made is totally new or an
    update of an existing library. If it is to be an update, you should start
    QuickBASIC with the /L command-line option, supplying the name of the
    library to be updated as a command-line argument. At the same time, you
    can also include the name of a program whose modules you want to put in
    the library. In this case QuickBASIC loads all the modules specified in
    that program's .MAK file.

    H.3.3.1  Unloading Unwanted Files

    If you load your program when starting QuickBASIC, be sure to unload any
    modules you don't want in the Quick library, including the main module
    (unless it contains procedures you want in the library).

    Follow these steps to unload modules:

    1. Choose the Unload File command from the File menu.

    2. Select the module you want to unload from the list box, then press
        ENTER.

    3. Repeat steps 1 and 2 until you have unloaded all unwanted modules.

    H.3.3.2  Loading Desired Files

    Alternatively, you can simply start QuickBASIC, with or without a library
    specification, and load the modules you want one at a time from within the
    environment. In this case, you load each module using the Load File
    command from the File menu.

    To load one module at a time with QuickBASIC:

    1. Choose the File menu's Load File command.

    2. Select the name of a module you want to load from the list box.

    3. Repeat steps 1 and 2 until all you have loaded all the modules you
        want.

    H.3.3.3  Creating a Quick Library

    Once you have loaded the previous library (if any) and all the new modules
    you want to include in the Quick library, choose the Make Library command
    from the Run menu. The dialog box shown in Figure H.1 appears.


                                Type Quick-library file name here.
                                │
    ┌────────────────────────────┼─Make Library───────────────────────────┐
    │                          ┌─┼─────────────────────────────────────┐  │
    │ Quick-Library File Name: │                                       │  │
    │                          └───────────────────────────────────────┘  │
    │ [X] Produce Debug Code                                              │
    ├─────────────────────────────────────────────────────────────────────┤
    │ < Make Library >   <Make Library and Exit >   < Cancel >   < Help > │
    └───────────────────────────────┼─────────────────────────────────────┘
                                    │
                                    │Makes a library
                                    and exits to DOS

    Figure H.1 Make Library Dialog Box

    To create a Quick library, perform the following steps:

    1. Enter the name of the library you wish to create in the Quick-Library
        File Name text box.

        If you enter only a base name (that is, a file name with no extension),
        QuickBASIC automatically appends the extension .QLB when it creates the
        library. If you want your library to have no extension, add a
        terminating period (.) to the base name. Otherwise, you may enter any
        base name and extension you like (except the name of a loaded Quick
        library), consistent with DOS file-name rules.

    2. Select the Produce Debug Code check box only if you are specifically
        trying to track a bug you believe to be in a library that you are
        updating. It makes your library larger, slows program execution and
        gives only a small amount of error control, mostly in regard to
        checking of array bounds.

    3. Create the Quick library:

        ■ Choose the Make Library command button if you want to remain in the
        environment after the Quick library is created.

        ■ Choose the Make Library and Exit command button if you want to return
        to the DOS command level after the Quick library is created.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    When you make a Quick library, be aware that if it is ever to be used
    with a nonlibrary module that needs to trap events such as keystrokes,
    then one of the modules in the library must contain at least one
    event-trapping statement. This statement can be as simple as TIMER OFF,
    but without it events are not trapped correctly in the Quick library.
    ──────────────────────────────────────────────────────────────────────────


H.4  Using Quick Libraries

    This section explains how to load a Quick library when you start
    QuickBASIC and how to view the contents of a Quick library. It also gives
    facts that you should remember when procedures within a Quick library
    perform floating-point arithmetic.

H.4.1  Loading a Quick Library

    To load a Quick library, you must specify the name of the desired library
    on the command line when you start QuickBASIC using the following syntax:

    QB[[programname]] /L [[libraryname]]

    If you start QuickBASIC with the /L option and supply the name of a
    library (libraryname), QuickBASIC loads the specified library and places
    you in the programming environment. The contents of the library are now
    available for use. If you start QuickBASIC with the /L option but don't
    specify a library, QuickBASIC loads the library QB.QLB (see Section H.5).

    You can also start QuickBASIC with the /RUN option followed by both a
    program name (programname) and the /L option. In this case, QuickBASIC
    loads both the program and the specified Quick library, then runs the
    program without stopping at the programming environment.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    When using Quick libraries to represent program modules, remember to
    update the .MAK file to keep it consistent with the modules in the
    evolving program. (This is done with the Unload File command from the
    File menu.) If the .MAK file is not up to date, it may cause QuickBASIC
    to load a module containing a procedure definition with the same name as
    one defined in the Quick library, which in turn causes the error message
    Duplicate definition.
    ──────────────────────────────────────────────────────────────────────────

    You can load only one Quick library at a time. If you specify a path,
    QuickBASIC looks where you indicate; otherwise, QuickBASIC searches for
    the Quick library in the following three locations:

    1. The current directory.

    2. The path specified for libraries by the Set Paths command.

    3. The path specified by the LIB environment variable. (See your DOS
        documentation for information about environment variables.)

    Example

    The following command starts QuickBASIC and runs the program REPORT.BAS
    using the routines in the library FIGS.QLB:

    QB /RUN REPORT.BAS /L FIGS.QLB

H.4.2  Floating-Point Arithmetic in Quick Libraries

    BASIC procedures within Quick libraries represent code compiled with the
    BC command-line compiler. These procedures share significant
    characteristics with executable files. For example, both executable files
    and Quick libraries perform floating-point arithmetic faster and with a
    higher degree of accuracy than the same calculations performed within the
    QuickBASIC environment. For more information, see Chapter 16, "The Run
    Menu," in Learning to Use Microsoft QuickBASIC.

H.4.3  Viewing the Contents of a Quick Library

    Because a Quick library is essentially a binary file, you cannot view its
    contents with a text editor to find out what it contains. Your
    distribution disk includes the QLBDUMP.BAS utility, which allows you to
    list all the procedures and data symbols in a given library. Follow these
    steps to view the contents of a Quick library:

    1. Start QuickBASIC.

    2. Load and run QLBDUMP.BAS.

    3. Enter the name of the Quick library you wish to examine in response to
        the prompt. You do not need to include the .QLB extension when you type
        the file name; however, supplying the extension does no harm.

        If the specified file exists and it is a Quick library, the program
        displays a list of all the symbol names in the library. In this
        context, symbol names correspond to the names of procedures in the
        library.

    See Chapter 3, "File and Device I/O," for a commented listing of
    QLBDUMP.BAS.


H.5  The Supplied Library (QB.QLB)

    If you invoke QuickBASIC with the /L option, but do not supply a Quick
    library name, QuickBASIC automatically loads a library named QB.QLB,
    included with the QuickBASIC package. This file contains three routines,
    INTERRUPT, INT86OLD, and ABSOLUTE, that provide software-interrupt support
    for system-service calls and support for CALL ABSOLUTE. To use the
    routines in QB.QLB, you must specify it (or another library into which
    those routines have been incorporated) on the command line when you invoke
    QuickBASIC. If you wish to use these routines along with other routines
    that you have placed in libraries, make a copy of the QB.QLB library and
    use it as a basis for building a library containing all the routines you
    need.


H.6  The .QLB File-Name Extension

    The extension .QLB is just a convenient convention. You can use any
    extension for your Quick library files, or no extension at all. However,
    in processing the /L libraryname option, QuickBASIC assumes that the
    listed libraryname has the .QLB extension if no other extension is
    specified. If your Quick library has no extension, you must put a period
    after the Quick-library name (libraryname.) or QuickBASIC searches for a
    file with your base name and the .QLB extension.


H.7  Making a Library from the Command Line

    After making a library from within the QuickBASIC environment, you will
    notice the appearance of extra files with the extensions .OBJ and .LIB. In
    creating Quick libraries, QuickBASIC actually directs the work of three
    other programs, BC, LINK, and LIB, and then combines what they produce
    into both a Quick library and a stand-alone (.LIB) library. Once the
    process is complete, there is one object (.OBJ) file for each module in
    your Quick library and a single library (.LIB) file containing an object
    module for each object file. The files with the extension .OBJ are now
    extraneous and can be deleted. However, files with the extension .LIB are
    very important and should be preserved. These parallel libraries are the
    files QuickBASIC uses to create executable files of your programs.

    You can use the programs LINK and LIB to create both Quick libraries and
    stand-alone (.LIB) libraries from the command line in batch mode. If you
    want to use routines originally written and compiled in other languages in
    QuickBASIC, you must first put the other-language routines in a Quick
    library via the command line. Once the other-language routines are in the
    library, you can incorporate your BASIC modules from the command line or
    from within the QuickBASIC environment.

    Professional software developers should be sure to deliver both the Quick
    (.QLB) and stand-alone (.LIB) versions of libraries to customers. Without
    the .LIB libraries, end users would not be able to use your library
    routines in executable files produced with QuickBASIC.

    When you create a Quick library using LINK, the library BQLB45.LIB must
    always be specified after the third comma on the LINK command line or in
    response to the "Libraries" prompt.


H.8  Using Routines from Other Languages in a Quick Library

    To place routines from other languages in a Quick library, you must start
    with precompiled or preassembled object files that contain the
    other-language routines you wish to use. Several other languages are
    suitable for this purpose, including Microsoft C, Microsoft Macro
    Assembler, Microsoft Pascal, Microsoft FORTRAN, and any other language
    that creates object files compatible with the Microsoft language family.

H.8.1  Building a Quick Library

    The following is a typical scenario for building a Quick library
    containing routines from other languages:

    1. Suppose you begin with three modules, created in FORTRAN, C, and Macro
        Assembler. First you compile or assemble each module with the proper
        language translator to produce object files called here FOR.OBJ, C.OBJ,
        and ASM.OBJ.

    2. You then link the object files with the LINK option /Q, which instructs
        the linker to produce a Quick library file, as shown in the following
        command line:

        LINK /Q FOR.OBJ C.OBJ ASM.OBJ, MIXED.QLB,,BQLB45.LIB;

        The linker interprets the entry that follows the names of the object
        files (in this case MIXED.QLB) as the file name by which the linked
        modules will be known. Thus, in this case, the Quick library file is
        named MIXED.QLB.

    3. Now create a parallel .LIB library, using the same object files you
        just used to make the Quick library. In this case the first name
        following the LIB command is the name of the .LIB library:

        LIB MIXED.LIB+FOR.OBJ+C.OBJ+ASM.OBJ;

        It is easy to overlook this step when making a library that contains
        other-language routines, but this step is crucial if you hope to use
        the library to create a stand-alone executable file. Without these
        parallel stand-alone (.LIB) libraries, QuickBASIC cannot create an
        executable file containing their routines.

    4. With the other-language routines now in a Quick library and the
        original object files in a stand-alone library having the same base
        name, you can return to the QuickBASIC environment and build as many
        BASIC modules into the library as available memory permits.

    See Appendix G, "Compiling and Linking from DOS," for a complete
    description of the features of LINK and LIB.

H.8.2  Quick Libraries with Leading Zeros in the First Code Segment

    A Quick library containing leading zeros in the first code segment is
    invalid, causing the message Error in loading file filename - Invalid
    format when you try to load it in QuickBASIC. For example, this can occur
    if an assembly-language routine puts data that is initialized to zero in
    the first code segment and it is subsequently listed first on the LINK
    command line when you make a Quick library. If you have this problem, do
    one of the following two things:

    1. Link with a BASIC module first on the LINK command line.

    2. Make sure that, in whatever module comes first on the LINK command
        line, the first code segment starts with a nonzero byte.

H.8.3  The B_OnExit Routine

    QuickBASIC provides a BASIC system-level function, B_OnExit. You can use
    B_OnExit when your other-language routines take special actions that need
    to be undone before leaving the program (intentionally or otherwise) or
    rerunning the program. For example, within the QuickBASIC environment, an
    executing program that calls other-language routines in a Quick library
    may not always run to normal termination. If such routines need to take
    special actions at termination (for example, deinstallation of previously
    installed interrupt vectors), you can guarantee that your termination
    routines will always be called if you include an invocation of B_OnExit in
    the routine. The following example illustrates such a call (for
    simplicity, the example omits error-handling code). Note that such a
    function would be compiled in C in large model.

    #include <malloc.h>

    extern pascal far B_OnExit();  /* Declare the routine   */

    int *p_IntArray;

    void InitProc()
    {
        void TermProc();     /* Declare TermProc function    */

        /* Allocate far space for 20-integer array:          */

        p_IntArray = (int *)malloc(20*sizeof(int));

        /* Log termination routine (TermProc) with BASIC:    */

        B_OnExit(TermProc);
    }

                            /* The TermProc function is      */
    void TermProc()        /* called before any restarting  */
    {                      /* or termination of program.    */

        free(p_IntArray);   /* Release far space allocated   */
    }                      /* previously by InitProc.       */

    If the InitProc function were in a Quick library, the call to B_OnExit
    would insure proper release of the space reserved in the call to malloc,
    should the program crash. The routine could be called several times, since
    the program can be executed several times from the QuickBASIC environment.
    However, the TermProc function itself would be called only once each time
    the program runs.

    The following BASIC program is an example of a call to the InitProc
    function:

    DECLARE SUB InitProc CDECL

    X = SETMEM(-2048)       ' Make room for the malloc memory
                            ' allocation in C function.
    CALL InitProc
    END

    If more than 32 routines are registered, B_OnExit returns NULL, indicating
    there is not enough space to register the current routine. (Note that
    B_OnExit has the same return values as the Microsoft C run-time-library
    routine onexit.)

    B_OnExit can be used with any other-language (including assembly-language)
    routines you place in a Quick library. With programs compiled and linked
    completely from the command line, B_OnExit is optional.


H.9  Memory Considerations with Quick Libraries

    Because a Quick library is essentially an executable file (although it
    cannot be invoked by itself from the DOS command line), it is quite large
    in comparison to the sum of the sizes of its source files. This puts an
    upper limit on the number of routines you can put in a Quick library. To
    determine how large your Quick library can be, add up the memory required
    for DOS, QB.EXE, and your program's main module. An easy way to estimate
    these factors is to boot your machine, start QuickBASIC with your program,
    and enter this command in the Immediate window:

    PRINT FRE (-1)

    This command shows you the number of bytes of free memory. This indicates
    the maximum size for any Quick library associated with this program. In
    most cases the amount of memory required for a Quick library is about the
    same as the size of its disk file. One exception to this rule of thumb is
    a library with procedures that use a lot of strings; such a program may
    require somewhat more memory.


H.10  Making Compact Executable Files

    As discussed above, when QuickBASIC creates a Quick library, it also
    creates a stand-alone (.LIB) library of object modules in which each
    object module corresponds to one of the modules in the Quick library. When
    you make an executable file, QuickBASIC searches the stand-alone (.LIB)
    library for object modules containing the procedures referenced in the
    program.

    If an object module in the library does not contain procedures referenced
    in the program, it is not included in the executable file. However, a
    single module may contain many procedures, and if even one of them is
    referenced in the program all are included in the executable file.
    Therefore, even if a program uses only one of four procedures in a certain
    module, that entire module becomes part of the final executable file.

    To make your executable files as compact as possible, you should maintain
    a library in which each module contains only closely related procedures.
    If you have any doubts about what a library contains, list its contents
    with the utility QLBDUMP.BAS, described in Section H.4.3, "Viewing the
    Contents of a Quick Library."



────────────────────────────────────────────────────────────────────────────
Appendix I  Error Messages

    During development of a BASIC program with QuickBASIC, the following types
    of errors can occur:

    ■ Invocation errors

    ■ Compile-time errors

    ■ Link-time errors

    ■ Run-time errors

    Each type of error is associated with a particular step in the program
    development process. Invocation errors occur when you invoke QuickBASIC
    with the QB or BC commands. Compile-time errors (and warnings) occur
    during compilation, and run-time errors occur when the program is
    executing. Link-time errors occur only when you use the LINK command to
    link object files created with BC or other language compilers.

    Section I.2 lists alphabetically the invocation, compile-time, and
    run-time error messages, along with any error codes that are assigned.
    Table I.1 lists the run-time error messages and error codes in numerical
    order. Section I.3 lists the Microsoft Overlay Linker error messages, and
    Section I.4, the Microsoft Library Manager error messages.


I.1  Error-Message Display

    When a run-time error occurs within the QuickBASIC environment (with
    default screen options), the error message appears in a dialog box and the
    cursor is placed on the line where the error occurred.

    In stand-alone executable programs (that is, programs that are executed by
    entering the base name of the executable file at the system prompt), the
    run-time system prints the error messages followed by an address, unless
    the /D, /E, or /W option is specified on the BC command line. In those
    cases, the error message is followed by the number of the line in which
    the error occurred. The standard forms of this type of error message are
    as follows:

    Error n in module module-name at address segment:offset

    and

    Error n in line linenumber of module module-name at
    address segment:offset

    An ERR code is listed for some errors. If an error occurs, the value
    returned by ERR is set to the appropriate code when an error-trapping
    subroutine is entered. (Error-trapping routines are entered via the ON
    ERROR statement.) The ERR value remains unchanged until a RESUME statement
    returns control to the main program. See Chapter 6, "Error and Event
    Trapping," for more information.

    Table I.1 lists the error codes in numerical order. See the alphabetical
    listing for explanations of the errors.

    Table I.1  Run-Time Error Codes
╓┌─┌────────┌───────────────────────────┌────────┌───────────────────────────╖
    Code     Description                 Code     Description
    ──────────────────────────────────────────────────────────────────────────
    2        Syntax error                53       File not found

    3        RETURN without GOSUB        54       Bad file mode

    4        Out of DATA                 55       File already open

    5        Illegal function call       56       FIELD statement active

    6        Overflow                    57       Device I/O error
    Code     Description                 Code     Description
    ──────────────────────────────────────────────────────────────────────────
    6        Overflow                    57       Device I/O error

    7        Out of memory               58       File already exists

    9        Subscript out of range      59       Bad record length

    10       Duplicate definition        61       Disk full

    11       Division by zero            62       Input past end of file

    13       Type mismatch               63       Bad record number

    14       Out of string space         64       Bad file name

    16       String formula too complex  67       Too many files

    19       No RESUME                   68       Device unavailable

    20       RESUME without error        69       Communication-buffer
    Code     Description                 Code     Description
    ──────────────────────────────────────────────────────────────────────────
    20       RESUME without error        69       Communication-buffer
                                                overflow

    24       Device timeout              70       Permission denied

    25       Device fault                71       Disk not ready

    27       Out of paper                72       Disk-media error

    39       CASE ELSE expected          73       Advanced feature unavailable

    40       Variable required           74       Rename across disks

    50       FIELD overflow              75       Path/File access error

    51       Internal error              76       Path not found

    52       Bad file name or number
    ──────────────────────────────────────────────────────────────────────────
    Code     Description                 Code     Description
    ──────────────────────────────────────────────────────────────────────────
    ──────────────────────────────────────────────────────────────────────────



I.2  Invocation, Compile-Time, and Run-Time Error Messages

Advanced feature unavailable

    You are attempting to use a feature of QuickBASIC that is available with
    another version of BASIC, or supported only under a later version of DOS.
    (Compile-time or run-time error)

    ERR code: 73

Argument-count mismatch

    You are using an incorrect number of arguments with a BASIC subprogram or
    function. (Compile-time error)

Array already dimensioned

    This error can be caused by any of the following:

    ■ More than one DIM statement for the same static array.

    ■ A DIM statement after the initial use of an array. Dynamic arrays must
    be deallocated with the ERASE statement before they can be redimensioned
    with DIM; dynamic arrays may also be redimensioned with the REDIM
    statement.

    ■ An OPTION BASE statement that occurs after an array is dimensioned.

    (Compile-time or run-time error)

Array not defined

    An array is referenced but never defined. (Compile-time error)

Array not dimensioned

    An array is referenced but not dimensioned. If you are compiling the
    program with BC, this error is not "fatal"; the program will execute,
    although program results may be incorrect. (Compile-time warning)

Array too big

    There is not enough user data space to accommodate the array declaration.
    Reduce the size of the array or use the $DYNAMIC metacommand. You may also
    get this error if the array size exceeds 64K, the array is not dynamic,
    and the /AH option is not used. Reduce the size of the array, or make the
    array dynamic and use the /AH command-line option. (Compile-time error)

AS clause required

    A variable declared with an AS clause is referenced without one. If the
    first declaration of a variable has an AS clause, every subsequent DIM,
    REDIM, SHARED, and COMMON statement that references that variable must
    have an AS clause. (Compile-time error)

AS clause required on first declaration

    A variable that has not been declared using an AS clause is being
    referenced with an AS clause. (Compile-time error)

AS missing

    The compiler expects an AS keyword, as in OPEN "FILENAME" FOR INPUT AS #1.
    (Compile-time error)

Asterisk missing

    The asterisk is missing from a string definition in a user type.
    (Compile-time error)

Bad file mode

    This error occurs in the following situations:

    ■ The program tries to use PUT or GET with a sequential file or execute an
    OPEN statement with a file mode other than I, O, or R.

    ■ The program tries to use a FIELD statement with a file not opened for
    random access.

    ■ The program tries to print to a file opened for input.

    ■ The program tries to read from a file opened for output or appending.

    ■ QuickBASIC tries to use an include file previously saved in compressed
    format. Include files must be saved in text format. Reload the include
    file, save it in text format, then try to run the program again.

    ■ You try to load a corrupt binary program.

    (Run-time error)

    ERR code: 54

Bad file name

    An illegal form is used for the file name with LOAD, SAVE, KILL, or OPEN
    (for example, the file name has too many characters). (Run-time error)

    ERR code: 64

Bad file name or number

    A statement or command references a file with a file name or number that
    is not specified in the OPEN statement or is out of the range of file
    numbers specified earlier in the program. (Run-time error)

    ERR code: 52

Bad record length

    A GET or PUT statement that specified a record variable whose length did
    not match the record length specified in the corresponding OPEN statement
    was executed. (Run-time error)

    ERR code: 59

Bad record number

    In a PUT or GET statement, the record number is less than or equal to
    zero. (Run-time error)

    ERR code: 63

BASE missing

    QuickBASIC expected the keyword BASE here, as in OPTION BASE.
    (Compile-time error)

Binary source file

    The file you have attempted to compile is not an ASCII file. All source
    files saved by BASICA should be saved with the ,A option. QuickBASIC also
    uses this message to warn you when you try to use the /ZI or /ZD CodeView
    options with binary source files. (Compile-time error)

Block IF without END IF

    There is no corresponding END IF in a block IF construct. (Compile-time
    error)

Buffer size expected after /C:

    You must specify a buffer size after the /C option. (BC invocation error)

BYVAL allowed only with numeric arguments

    BYVAL does not accept string or record arguments. (Compile-time error)

/C: buffer size too large

    The maximum size of the communications buffer is 32,767 bytes. (BC
    invocation error)

Cannot continue

    While debugging, you have made a change that prevents execution from
    continuing. (Run-time error)

Cannot find file (filename). Input path:

    This error occurs when QuickBASIC cannot find a Quick library or utility
    (BC.EXE, LINK.EXE, LIB.EXE, or QB.EXE) required by the program. Enter the
    correct path name, or press CTRL+C to return to the DOS prompt. (QB
    invocation error)

Cannot generate listing for BASIC binary source files

    You are attempting to compile a binary source file with the BC command and
    the /A option. Recompile without the /A option. (BC invocation error)

Cannot start with `FN'

    You used "FN" as the first two letters of a subprogram or variable name.
    "FN" can only be used as the first two letters when calling a DEF FN
    function. (Compile-time error)

CASE ELSE expected

    No matching case was found for an expression in a SELECT CASE statement.
    (Run-time error)

    ERR code: 39

CASE without SELECT

    The first part of a SELECT CASE statement is missing or misspelled.
    (Compile-time error)

Colon expected after /C

    A colon is required between the option and the buffer size argument. (BC
    invocation error)

Comma missing

    QuickBASIC expects a comma. (Compile-time error)

COMMON and DECLARE must precede executable statements

    A COMMON statement or a DECLARE statement is misplaced. COMMON and DECLARE
    statements must appear before any executable statements. All BASIC
    statements are executable except the following:

    ■ COMMON

    ■ DEFtype

    ■ DIM (for static arrays)

    ■ OPTION BASE

    ■ REM

    ■ TYPE

    ■ All metacommands

    (Compile-time error)

COMMON in Quick library too small

    More common variables are specified in the module than in the currently
    loaded Quick library. (Compile-time error)

COMMON name illegal

    QuickBASIC encountered an illegal /blockname/ specification (for example,
    a blockname that is a BASIC reserved word) in a named COMMON block.
    (Compile-time error).

Communication-buffer overflow

    During remote communications, the receive buffer overflowed. The size of
    the receive buffer is set by the /C command line option or the RB option
    in the OPEN COM statement. Try checking the buffer more frequently (with
    the LOC function) or emptying it more often (with the INPUT$ function).
    (Run-time error)

    ERR code: 69

CONST/DIM SHARED follows SUB/FUNCTION

    CONST and DIM SHARED statements should appear before any subprogram or
    FUNCTION procedure definitions. If you are compiling your program with BC,
    this error is not "fatal"; the program will execute, although the results
    may be incorrect. (Compile-time warning)

Control structure in IF...THEN...ELSE incomplete

    An unmatched NEXT, WEND, END IF, END SELECT, or LOOP statement appears in
    a single-line IF...THEN...ELSE statement. (Compile-time error)

Data-memory overflow

    There is too much program data to fit in memory. This error is often
    caused by too many constants, or too much static array data. If you are
    using the BC command, or the Make EXE File or Make Library commands, try
    turning off any debugging options. If memory is still exhausted, break
    your program into parts and use the CHAIN statement or use the $DYNAMIC
    metacommand. (Compile-time error)

DECLARE required

    An implicit SUB or FUNCTION procedure call appears before the procedure
    definition. (An implicit call does not use the CALL statement.) All
    procedures must be defined or declared before they are implicitly called.
    (Compile-time error)

DEF FN not allowed in control statements

    DEF FN function definitions are not permitted inside control constructs
    such as IF...THEN...ELSE and SELECT CASE. (Compile-time error)

DEF without END DEF

    There is no corresponding END DEF in a multiline function definition.
    (Compile-time error)

DEFtype character specification illegal

    A DEFtype statement is entered incorrectly. DEF can only be followed by
    LNG, DBL, INT, SNG, STR, or (for user-defined functions) a blank space.
    (Compile-time error)

Device fault

    A device has returned a hardware error. If this message occurs while data
    are being transmitted to a communications file, it indicates that the
    signals being tested with the OPEN COM statement were not found in the
    specified period of time. (Run-time error)

    ERR code: 25

Device I/O error

    An I/O error occurred on a device I/O operation. The operating system
    cannot recover from the error. (Run-time error)

    ERR code: 57

Device timeout

    The program did not receive information from an I/O device within a
    predetermined amount of time. (Run-time error)

    ERR code: 24

Device unavailable

    The device you are attempting to access is not on line or does not exist.

    (Run-time error)

    ERR code: 68

Disk full

    There is not enough room on the disk for the completion of a PRINT, WRITE,
    or CLOSE operation. This error can also occur if there is not enough room
    for QuickBASIC to write out an object or executable file. (Run-time error)

    ERR code: 61

Disk-media error

    Disk-drive hardware has detected a physical flaw on the disk. (Run-time
    error)

    ERR code: 72

Disk not ready

    The disk-drive door is open, or no disk is in the drive. (Run-time error)

    ERR code: 71

Division by zero

    A division by zero is encountered in an expression, or an exponentiation
    operation results in zero being raised to a negative power. (Compile-time
    or run-time error)

    ERR code: 11

DO without LOOP

    The terminating LOOP clause is missing from a DO...LOOP statement.
    (Compile-time error)

Document too large

    Your document exceeds QuickBASIC's internal limit. Divide the document
    into separate files.

Duplicate definition

    You are using an identifier that has already been defined. For example,
    you are attempting to use the same name in a CONST statement and as a
    variable definition, or the same name for a procedure and a variable.

    This error also occurs if you attempt to redimension an array. You must
    use DIM or REDIM when redimensioning dynamic arrays. (Compile-time or
    run-time error)

    ERR code: 10

Duplicate label

    Two program lines are assigned the same number or label. Each line number
    or label in a module must be unique. (Compile-time error)

Dynamic array element illegal

    Dynamic array elements are not allowed with VARPTR$. (Compile-time error)

Element not defined

    A user-defined type element is referenced but not defined. For example, if
    the user-defined type MYTYPE contained elements A, B, and C, then an
    attempt to use the variable D as an element of MYTYPE would cause this
    message to appear. (Compile-time error)

ELSE without IF

    An ELSE clause appears without a corresponding IF. Sometimes this error is
    caused by incorrectly nested IF statements. (Compile-time error)

ELSEIF without IF

    An ELSEIF statement appears without a corresponding IF. Sometimes this
    error is caused by incorrectly nested IF statements. (Compile-time error)

END DEF without DEF

    An END DEF statement has no corresponding DEF statement. (Compile-time
    error)

END IF without block IF

    The beginning of an IF block is missing. (Compile-time error)

END SELECT without SELECT

    The end of a SELECT CASE statement appears without a beginning SELECT
    CASE. The beginning of the SELECT CASE statement may be missing or
    misspelled. (Compile-time error)

END SUB or END FUNCTION must be last line in window

    You are attempting to add code after a procedure. You must either return
    to the main module or open another module. (Compile-time error)

END SUB/FUNCTION without SUB/FUNCTION

    You deleted the SUB or FUNCTION statement. (Compile-time error)

END TYPE without TYPE

    An END TYPE statement is used outside a TYPE declaration. (Compile-time
    error)

Equal sign missing

    QuickBASIC expects an equal sign. (Compile-time error)

Error during QuickBASIC initialization

    Several conditions can cause this error. It is most commonly caused when
    there is not enough memory in the machine to load QuickBASIC. If you are
    loading a Quick library, try reducing the size of the library.

    This error may occur when you attempt to use QuickBASIC on unsupported
    hardware. (QB invocation error)

Error in loading file (filename)──Cannot find file

    This error occurs when redirecting input to QuickBASIC from a file. The
    input file is not at the location specified on the command line. (QB
    invocation error)

Error in loading file (filename)──Disk I/O error

    This error is caused by physical problems accessing the disk, for example,
    if the drive door is left open. (QB invocation error)

Error in loading file (filename)──DOS memory-area error

    The area of memory used by DOS has been written to, either by an assembly
    language routine or with the POKE statement. (QB invocation error)

Error in loading file (filename)──Invalid format

    You are attempting to load a Quick library that is not in the correct
    format. This error can occur if you are attempting to use a Quick library
    created with a previous version of QuickBASIC, if you are trying to use a
    file that has not been processed with QuickBASIC's Make Library command or
    the /QU option from LINK, or if you are trying to load a stand-alone
    (.LIB) library with QuickBASIC. (QB invocation error)

Error in loading file (filename)──Out of memory

    More memory is required than is available. For example, there may not be
    enough memory to allocate a file buffer. Try reducing the size of your DOS
    buffers, getting rid of any terminate-and-stay resident programs, or
    eliminating some device drivers. If you have large arrays, try placing a
    $DYNAMIC metacommand at the top of your program. If you have documents
    loaded, then unloading them will free some memory. (Run-time error)

EXIT DO not within DO...LOOP

    An EXIT DO statement is used outside of a DO...LOOP statement.
    (Compile-time error)

EXIT not within FOR...NEXT

    An EXIT FOR statement is used outside of a FOR...NEXT statement.
    (Compile-time error)

Expected: item

    This is a syntax error. The cursor is positioned at the unexpected item.
    (Compile-time error)

Expression too complex

    This error is caused when certain internal limitations are exceeded. For
    example, during expression evaluation, strings that are not associated
    with variables are assigned temporary locations. A large number of such
    strings can cause this error to occur. Try simplifying expressions, and
    assigning strings to variables. (Compile-time error)

Extra file name ignored

    You specified too many files on the command line; the last file name on
    the line is ignored. (BC invocation error)

Far heap corrupt

    The far-heap memory has been corrupted by one of the following:

    ■ The QB compiler does not support a terminate-and-stay-resident program
    resident in DOS.

    ■ The POKE statement modified areas of memory used by QuickBASIC. (This
    may modify the descriptor for a dynamic array of numbers or fixed-length
    strings.)

    ■ The program called an other-language routine that modified areas of
    memory used by QuickBASIC. (This may modify the descriptor for a dynamic
    array of numbers or fixed-length strings.

    (Compile-time error)

FIELD overflow

    A FIELD statement is attempting to allocate more bytes than were specified
    for the record length of a random file. (Run-time error)

    ERR code: 50

FIELD statement active

    A GET or PUT statement referred to a record variable used in a a file with
    space previously allocated by the FIELD statement. GET or PUT with a
    record variable argument may only be used on files where no FIELD
    statements have been executed. (Run-time error)

    ERR code: 56

File already exists

    The file name specified in a NAME statement is identical to a file name
    already in use on the disk. (Run-time error)

    ERR code: 58

File already open

    A sequential-output-mode OPEN statement is issued for a file that is
    already open, or a KILL statement is given for a file that is open.
    (Run-time error)

    ERR code: 55

File not found

    A FILES, KILL, NAME, OPEN or RUN statement references a file that does not
    exist. (Run-time error)

    ERR code: 53

File not found in module module-name at address segment:offset

    A FILES, KILL, NAME, OPEN or RUN statement references a file that does not
    exist. This error message is equivalent to the File not found message, but
    it occurs during execution of compiled programs. The module-name is the
    name of the calling module. The address is the location of the error in
    the code. (Run-time error)

    ERR code: 53

File previously loaded

    You are attempting to load a file that is already in memory. (Compile-time
    error)

Fixed-length string illegal

    You are attempting to use a fixed-length string as a formal parameter.
    (Compile-time error)

FOR index variable already in use

    This error occurs when an index variable is used more than once in nested
    FOR loops. (Compile-time error)

FOR index variable illegal

    This error is usually caused when an incorrect variable type is used in a
    FOR-loop index. A FOR-loop index variable must be a simple numeric
    variable. (Compile-time error)

FOR without NEXT

    Each FOR statement must have a matching NEXT statement. (Compile-time
    error)

Formal parameter specification illegal

    There is an error in a function or subprogram parameter list.
    (Compile-time error)

Formal parameters not unique

    A FUNCTION or SUB declaration contains duplicate parameters, as in this
    example: SUB GetName(A,B,C,A) STATIC. (Compile-time error)

Function already defined

    This error occurs when a previously defined FUNCTION is redefined.
    (Compile-time error)

Function name illegal

    A BASIC reserved word is used as a user-defined FUNCTION name.
    (Compile-time error)

Function not defined

    You must declare or define a FUNCTION before using it. (Compile-time
    error)

GOSUB missing

    The GOSUB is missing from an ON event statement. (Compile-time error)

GOTO missing

    The GOTO is missing from an ON ERROR statement. (Compile-time error)

GOTO or GOSUB expected

    QuickBASIC expects a GOTO or GOSUB statement. (Compile-time error)

Help not found

    Help was requested but not found, and the program contains errors
    prohibiting QuickBASIC from building a variable table. Press F5 to view
    the line that caused the error.

Identifier cannot end with %, &, !, #, or $

    The above suffixes are not allowed in type identifiers, subprogram names,
    or names appearing in COMMON statements. (Compile-time error)

Identifier cannot include period

    User-defined type identifier and record element names cannot contain
    periods. The period should only be used as a record variable separator. In
    addition, a variable name cannot contain a period if the part of the name
    before the period has been used in an identifier AS usertype clause
    anywhere in the program. If you have programs that use the period in
    variable names, it is recommended that you change them to use mixed case
    instead. For example, variable ALPHA.BETA would become AlphaBeta.
    (Compile-time error)

Identifier expected

    You are attempting to use a number or a BASIC reserved word where an
    identifier is expected. (Compile-time error)

Identifier too long

    Identifiers must not be longer than 40 characters. (Compile-time error)

Illegal function call

    A parameter that is out of range is passed to a math or string function. A
    function-call error can also occur for the following reasons:

    ■ A negative or unreasonably large subscript is used.

    ■ A negative number is raised to a power that is not an integer.

    ■ A negative record number is given when using GET file or PUT file.

    ■ An improper or out-of-range argument is given to a function.

    ■ A BLOAD or BSAVE operation is directed to a nondisk device.

    ■ An I/O function or statement (LOC or LOF, for example) is performed on a
    device that does not support it.

    ■ Strings are concatenated to create a string greater than 32,767
    characters in length.

    (Run-time error)

    ERR code: 5

Illegal in direct mode

    The statement is valid only within a program and cannot be used in the
    Immediate window. (Compile-time error)

Illegal in procedure or DEF FN

    The statement is not allowed inside a procedure. (Compile-time error)

Illegal number

    The format of the number does not correspond to a valid number format. You
    have probably made a typographical error. For example, the number 2p3 will
    produce this error. (Compile-time error)

Illegal outside of SUB, FUNCTION, or DEF FN

    This statement is not allowed in module-level code. (Compile-time error)

Illegal outside of SUB/FUNCTION

    The statement is not allowed in module-level code or DEF FN functions.
    (Compile-time error)

Illegal outside of TYPE block

    The element AS type clause is permitted only within a TYPE...END TYPE
    block. (Compile-time error)

Illegal type character in numeric constant

    A numeric constant contains an inappropriate type-declaration character.
    (Compile-time error)

$INCLUDE-file access error

    The include file named in the $INCLUDE metacommand cannot be located.
    (Compile-time error)

Include file too large

    Your include file exceeds QuickBASIC's internal limit. Break the file into
    separate files. (Compile-time error)

Input file not found

    The source file you gave on the command line is not in the specified
    location. (BC invocation error)

INPUT missing

    The compiler expects the keyword INPUT. (Compile-time error)

Input past end of file

    An INPUT statement reads from a null (empty) file or from a file in which
    all data have already been read. To avoid this error, use the EOF function
    to detect the end of file. (Run-time error)

    ERR code: 62

Input runtime module path:

    This prompt appears if the run-time module BRUN45.EXE is not found. Enter
    the correct path specification. This error is severe and cannot be
    trapped. (Run-time error)

Integer between 1 and 32767 required

    The statement requires an integer argument. (Compile-time error)

Internal error

    An internal malfunction occurred in QuickBASIC. Use the Product Assistance
    Request form included with your documentation to report to Microsoft the
    conditions under which the message appeared. (Run-time error)

    ERR code: 51

Internal error near xxxx

    An internal malfunction occurred in QuickBASIC at location xxxx. Use the
    Product Assistance Request form included with your documentation to report
    the conditions under which the message appeared. (Compile-time error)

Invalid character

    QuickBASIC found an invalid character, such as a control character, in the
    source file. (Compile-time error)

Invalid constant

    An invalid expression is used to assign a value to a constant. Remember
    that expressions assigned to constants may contain numeric constants,
    symbolic constants, and any of the arithmetic or logical operators except
    exponentiation. A string expression assigned to a constant may consist
    only of a single literal string. (Compile-time error)

Invalid DECLARE for BASIC procedure

    You are attempting to use the DECLARE statement keywords ALIAS, CDECL, or
    BYVAL with a BASIC procedure. ALIAS, CDECL, and BYVAL can only be used
    with non-BASIC procedures. (Compile-time error)

Label not defined

    A line label is referenced (in a GOTO statement, for example), but does
    not occur in the program. (Compile-time error)

Label not defined: label

    A GOTO linelabel statement refers to a nonexistent line label.
    (Compile-time error)

Left parenthesis missing

    QuickBASIC expected a left parenthesis, or a REDIM statement tried to
    reallocate space for a scalar. (Compile-time error)

Line invalid. Start again

    An invalid file-name character was used following the path characters "\"
    (backslash) or ":" (colon). (BC invocation error)

Line number or label missing

    A line number or label is missing from a statement that requires one, for
    example, GOTO. (Compile-time error)

Line too long

    Lines are limited to 255 characters. (Compile-time error)

LOOP without DO

    The DO starting a DO...LOOP statement is missing or misspelled.
    (Compile-time error)

Lower bound exceeds upper bound

    The lower bound exceeds the upper bound defined in a DIM statement.
    (Compile-time error)

Math overflow

    The result of a calculation is too large to be represented in BASIC number
    format. (Compile-time error)

$Metacommand error

    A metacommand is incorrect. If you are compiling the program with BC this
    error is not "fatal"; the program will execute, although the results may
    be incorrect. (Compile-time warning)

Minus sign missing

    QuickBASIC expects a minus sign. (Compile-time error)

Missing Event Trapping (/W) or Checking Between Statements (/V) option

    The program contains an ON event statement requiring one of these options.
    (Compile-time error)

Missing On Error (/E) option

    When using the BC command, programs containing ON ERROR statements must be
    compiled with the On Error (/E) option. (Compile-time error)

Missing Resume Next (/X) option

    When using the BC command, programs containing RESUME, RESUME NEXT, and
    RESUME 0 statements must be compiled with the Resume Next (/X) option.
    (Compile-time error)

Module level code too large

    Your module-level code exceeds QuickBASIC's internal limit. Try moving
    some of the code into SUB or FUNCTION procedures. (Compile-time error)

Module not found. Unload module from program?

    When loading the program, QuickBASIC did not find the file containing the
    indicated module. QuickBASIC created an empty module instead. You must
    delete the empty module before you can run the program.

Must be first statement on the line

    In block IF...THEN...ELSE constructs, IF, ELSE, ELSEIF, and END IF can be
    preceded only by a line number or label. (Compile-time error)

Name of subprogram illegal

    The error is caused when a subprogram name is a BASIC reserved word, or a
    subprogram name is used twice. (Compile-time error)

Nested function definition

    A FUNCTION definition appears inside another FUNCTION definition, or
    inside an IF...THEN...ELSE clause. (Compile-time error)

NEXT missing for variable

    A FOR statement is missing a corresponding NEXT statement. The variable is
    the FOR-loop index variable. (Compile-time error)

NEXT without FOR

    Each NEXT statement must have a matching FOR statement. (Compile-time
    error)

No line number in module-name at address segment:offset

    This error occurs when the error address cannot be found in the
    line-number table during error trapping. This happens if there are no
    integer line numbers between 0 and 65,527. It may also occur if the
    line-number table has been accidentally overwritten by the user program.
    This error is severe and cannot be trapped. (Run-time error)

No main module. Choose Set Main Module from the Run menu to select one

    You are attempting to run the program after you have unloaded the main
    module. Every program must have a main module. (Compile-time error)

No RESUME

    The end of the program was encountered while the program was in an
    error-handling routine. A RESUME statement is needed to remedy this
    situation. (Run-time error)

    ERR code: 19

Not watchable

    This error occurs when you are specifying a variable in a watch
    expression. Make sure the module or procedure in the active View window
    has access to the variable you want to watch. For example, module-level
    code cannot access variables that are local to a SUB or FUNCTION.
    (Run-time error)

Numeric array illegal

    Numeric arrays are not allowed as arguments to VARPTR$. Only simple
    variables and string array elements are permitted. (Compile-time error)

Only simple variables allowed

    User-defined types and arrays are not permitted in READ and INPUT
    statements. Array elements that are not of a user-defined type are
    permitted. (Compile-time error)

Operation requires disk

    You are attempting to load from, or save to, a nondisk device such as the
    printer or keyboard. (Compile-time error)

Option unknown: option

    You have given an illegal option. (BC invocation error)

Out of DATA

    A READ statement is executed when there are no DATA statements with unread
    data remaining in the program. (Run-time error)

    ERR code: 4

Out of data space

    Try modifying your data space requirements as follows:

    ■ Use a smaller file buffer in the OPEN statement's LEN clause.

    ■ Use the $DYNAMIC metacommand to create dynamic arrays. Dynamic array
    data can usually be much larger than static array data.

    ■ Use fixed-length string arrays instead of variable-length string arrays.

    ■ Use the smallest data type that will accomplish your task. Use integers
    whenever possible.

    ■ Try not to use many small procedures. QuickBASIC must create several
    bytes of control information for each procedure.

    ■ Use CLEAR to modify the size of the stack. Use only enough stack space
    to accomplish your task.

    ■ Do not use source lines longer than 255 characters. Such lines require
    allocation of additional text buffer space.

    (Compile-time or run-time error)

Out of memory

    More memory is required than is available. For example, there may not be
    enough memory to allocate a file buffer. Try reducing the size of your DOS
    buffers, or getting rid of any terminate-and-stay-resident programs, or
    eliminating some device drivers. If you have large arrays, try placing a
    $DYNAMIC metacommand at the top of your program. If you have documents
    loaded, unloading them will free some memory. (BC invocation,
    compile-time, or run-time error)

    ERR code: 7

Out of paper

    The printer is out of paper or is not turned on. (Run-time error)

    ERR code: 27

Out of stack space

    This error can occur when a recursive FUNCTION procedure nests too deeply,
    or there are too many active subroutine, FUNCTION, and SUB calls. You can
    use the CLEAR statement to increase the program's allotted stack space.
    This error cannot be trapped. (Run-time error)

Out of string space

    String variables exceed the allocated amount of string space. (Run-time
    error)

    ERR code: 14

Overflow

    The result of a calculation is too large to be represented within the
    range allowed for either floating-point or integer numbers. (Run-time
    error)

    ERR code: 6

Overflow in numeric constant

    The numeric constant is too large. (Compile-time error)

Parameter type mismatch

    A subprogram or FUNCTION parameter type does not match the DECLARE
    statement argument or the calling argument. (Compile-time error)

Path not found

    During an OPEN, MKDIR, CHDIR, or RMDIR operation, DOS was unable to find
    the path specified. The operation is not completed. (Run-time error)

    ERR code: 76

Path/File access error

    During an OPEN, MKDIR, CHDIR, or RMDIR operation, DOS was unable to make a
    correct connection between the path and file name. The operation is not
    completed. (Compile-time or run-time error)

    ERR code: 75

Permission denied

    An attempt was made to write to a write-protected disk, or to access a
    locked file. (Run-time error)

    ERR code: 70

Procedure already defined in Quick library

    A procedure in the Quick library has the same name as a procedure in your
    program. (Compile-time error)

Procedure too large

    The procedure has exceeded QuickBASIC's internal limit. Make the procedure
    smaller by dividing it into several procedures. (Compile-time error)

Program-memory overflow

    You are attempting to compile a program whose code segment is larger than
    64K. Try splitting the program into separate modules, or use the CHAIN
    statement. (Compile-time error)

Read error on standard input

    A system error occurred while reading from the console or a redirected
    input file. (BC invocation error)

Record/string assignment required

    The string or record variable assignment is missing from the LSET
    statement. (Compile-time error)

Redo from start

    You have responded to an INPUT prompt with the wrong number or type of
    items. Retype your response in the correct form. (Run-time error)

Rename across disks

    An attempt was made to rename a file with a new drive designation. This is
    not allowed. (Run-time prompt)

    ERR code: 74

Requires DOS 2.10 or later

    You are attempting to use QuickBASIC with an incorrect version of DOS. (QB
    invocation or run-time error)

RESUME without error

    A RESUME statement is encountered before an error-trapping routine is
    entered. (Run-time error)

    ERR code: 20

RETURN without GOSUB

    A RETURN statement is encountered for which there is no previous,
    unmatched GOSUB statement. (Run-time error)

    ERR code: 3

Right parenthesis missing

    QuickBASIC expects a right (closing) parenthesis. (Compile-time error)

SEG or BYVAL not allowed in CALLS

    BYVAL and SEG are permitted only in a CALL statement. (Compile-time error)

SELECT without END SELECT

    The end of a SELECT CASE statement is missing or misspelled. (Compile-time
    error)

Semicolon missing

    QuickBASIC expects a semicolon. (Compile-time error)

Separator illegal

    There is an illegal delimiting character in a PRINT USING or WRITE
    statement. Use a semicolon or a comma as a delimiter. (Compile-time error)

Simple or array variable expected

    The compiler expects a variable argument. (Compile-time error)

Skipping forward to END TYPE statement

    An error in the TYPE statement has caused QuickBASIC to ignore everything
    between the TYPE and END TYPE statement. (Compile-time error)

Statement cannot occur within "CLUDE file

    SUB...END SUB and FUNCTION...END FUNCTION statement blocks are not
    permitted in include files. Use the Merge command from the File menu to
    insert the include file into the current module, or load the include file
    as a separate module. If you load the include file as a separate module,
    some restructuring may be necessary because shared variables are shared
    only within the scope of the module. (Compile-time error)

Statement cannot precede SUB/FUNCTION definition

    The only statements allowed before a procedure definition are the
    statements REM and DEFtype. (Compile-time error)

Statement ignored

    You are using the BC command to compile a program that contains TRON and
    TROFF statements without using the /D option. This error is not "fatal" ;
    the program will execute, although the results may be incorrect.
    (Compile-time warning)

Statement illegal in TYPE block

    The only statements allowed between the TYPE and END TYPE statements are
    REM and element AS typename. (Compile-time error)

Statement unrecognizable

    You have probably mistyped a BASIC statement. (Compile-time error)

Statements/labels illegal between SELECT CASE and CASE

    Statements and line labels are not permitted between SELECT CASE and the
    first CASE statement. Comments and statement separators are permitted.
    (Compile-time error)

STOP in module name at address segment:offset

    A STOP statement was encountered in the program. (Run-time error)

String assignment required

    The string assignment is missing from an RSET statement. (Compile-time
    error)

String constant required for ALIAS

    The DECLARE statement ALIAS keyword requires a string-constant argument.
    (Compile-time error)

String expression required

    The statement requires a string-expression argument. (Compile-time error)

String formula too complex

    Either a string formula is too long or an INPUT statement requests more
    than 15 string variables. Break the formula or INPUT statement into parts
    for correct execution. (Run-time error)

    ERR code: 16

String space corrupt

    This error occurs when an invalid string in string space is being deleted
    during heap compaction. The probable causes of this error are as follows:

    ■ A string descriptor or string back pointer has been improperly modified.
    This may occur if you use an assembly-language subroutine to modify
    strings.

    ■ Out-of-range array subscripts are used and string space is inadvertently
    modified. The Produce Debug Code option can be used at compile time to
    check for array subscripts that exceed the array bounds.

    ■ Incorrect use of the POKE and/or DEF SEG statements may modify string
    space improperly.

    ■ Mismatched COMMON declarations may occur between two chained programs.

    (Run-time error)

String variable required

    The statement requires a string-variable argument. (Compile-time error)

SUB or FUNCTION missing

    A DECLARE statement has no corresponding procedure. (Compile-time error)

SUB/FUNCTION without END SUB/FUNCTION

    The terminating statement is missing from a procedure. (Compile-time
    error)

Subprogram error

    This is a SUB or FUNCTION definition error and is usually caused by one of
    the following:

    ■ The SUB or FUNCTION is already defined.

    ■ The program contains incorrectly nested FUNCTION or SUB statements.

    ■ The SUB or FUNCTION does not terminate with an END SUB or END FUNCTION
    statement.

    (Compile-time error)

Subprogram not defined

    A subprogram is called but never defined. (Compile-time error)

Subprograms not allowed in control statements

    Subprogram FUNCTION definitions are not permitted inside control
    constructs such as IF...THEN...ELSE and SELECT CASE. (Compile-time error)

Subscript out of range

    An array element was referenced with a subscript that was outside the
    dimensions of the array, or an element of an undimensioned dynamic array
    was accessed. This message may be generated if the Debug (/D) option was
    specified at compile time. You may also get this error if the array size
    exceeds 64K, the array is not dynamic, and the /AH option was not used.
    Reduce the size of the array, or make the array dynamic and use the /AH
    command-line option. (Run-time error)

    ERR code: 9

Subscript syntax illegal

    An array subscript contains a syntax error: for example, an array
    subscript contains both string and integer data types. (Compile-time
    error)

Syntax error

    Several conditions can cause this error. The most common cause at compile
    time is a mistyped BASIC keyword or argument. At run-time, it is often
    caused by an improperly formatted DATA statement. (Compile-time or
    run-time error)

    ERR code: 2

Syntax error in numeric constant

    A numeric constant is not properly formed. (Compile-time error)

THEN missing

    QuickBASIC expects a THEN keyword. (Compile-time error)

TO missing

    QuickBASIC expects a TO keyword. (Compile-time error)

Too many arguments in function call

    Function calls are limited to 60 arguments. (Compile-time error)

Too many dimensions

    Arrays are limited to 60 dimensions. (Compile-time error)

Too many files

    At compile time, this error occurs when include files are nested more than
    five levels deep. It occurs at run time when the 255-file directory
    maximum is exceeded by an attempt to create a new file with a SAVE or OPEN
    statement. (Compile-time or run-time error)

    ERR code: 67

Too many labels

    The number of lines in the line list following an ON...GOTOor ON...GOSUB
    statement exceeds 255 (Compile-time error) or 59 (Run-time error in
    compiled applications).

Too many named COMMON blocks

    The maximum number of named COMMON blocks permitted is 126. (Compile-time
    error)

Too many TYPE definitions

    The maximum number of user-defined types permitted is 240. (Compile-time
    error)

Too many variables for INPUT

    An INPUT statement is limited to 60 variables. (Compile-time error)

Too many variables for LINE INPUT

    Only one variable is allowed in a LINE INPUT statement. (Compile-time
    error)

Type mismatch

    The variable is not of the required type. For example, you are trying to
    use the SWAP statement with a string variable and a numeric variable.
    (Compile-time or run-time error)

    ERR code: 13

TYPE missing

    The TYPE keyword is missing from an END TYPE statement. (Compile-time
    error)

Type more than 65535 bytes

    A user-defined type cannot exceed 64K. (Compile-time error)

Type not defined

    The usertype argument to the TYPE statement is not defined. (Compile-time
    error)

TYPE statement improperly nested

    User-defined type definitions are not allowed in procedures. (Compile-time
    error)

TYPE without END TYPE

    There is no END TYPE statement associated with a TYPE statement.
    (Compile-time error)

Typed variable not allowed in expression

    Variables that are user-defined types are not permitted in expressions
    such as CALL ALPHA((X)), where Xis a user-defined type. (Compile-time
    error)

Unexpected end of file in TYPE declaration

    There is an end-of-file character inside a TYPE...END TYPE block.

Unprintable error

    An error message is not available for the error condition that exists.
    This may be caused by an ERROR statement that doesn't have a defined error
    code. (Run-time error)

Unrecognized switch error: "QU"

    You are attempting to create an .EXE file or Quick library with an
    incorrect version of the Microsoft Overlay Linker. You must use the linker
    supplied on the QuickBASIC distribution disks to create an .EXE file or
    Quick library. (Compile-time error)

Valid options: [/RUN] file /AH /B /C:buf /G /NOHI /H /L [lib] /MBF /CMD
string

    This message appears when you invoke QuickBASIC with an invalid option.
    (QB invocation error)

Variable-length string required

    Only variable-length strings are permitted in a FIELD statement.
    (Compile-time error)

Variable name not unique

    You are attempting to define the variable x as a user-defined type after
    x.y has been used. (Compile-time error)

Variable required

    QuickBASIC encountered an INPUT, LET, READ, or SHARED statement without a
    variable argument. (Compile-time error)

Variable required

    A GET or PUT statement didn't specify a variable when an operation is
    performed on a file opened in BINARY mode. (Run-time error)

    ERR code: 40

WEND without WHILE

    This error is caused when a WEND statement has no corresponding WHILE
    statement. (Compile-time error)

WHILE without WEND

    This error is caused when a WHILE statement has no corresponding WEND
    statement. (Compile-time error)

Wrong number of dimensions

    An array reference contains the wrong number of dimensions. (Compile-time
    error)


I.3  LINK Error Messages

    This section lists and describes error messages generated by the Microsoft
    Overlay Linker, LINK.

    Fatal errors cause the linker to stop execution. Fatal error messages have
    the following format:

    location : fatal error L1xxx:messagetext

    Nonfatal errors indicate problems in the executable file. LINK produces
    the executable file. Nonfatal error messages have the following format:

    location : error L2xxx: messagetext

    Warnings indicate possible problems in the executable file. LINK produces
    the executable file. Warnings have the following format:

    location : warning L4xxx: messagetext

    In these messages, location is the input file associated with the error,
    or LINK if there is no input file.

    The following error messages may appear when you link object files with
    LINK:

╓┌─┌──────────────┌──────────────────────────────────────────────────────────╖
    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
    L1001          option : option name ambiguous

                    A unique option name did not appear after the option
                    indicator (/). For example, the command

                    LINK /N main;
    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
                    LINK /N main;

                    generates this error, since LINK cannot tell which of the
                    three options beginning with the letter "N" was intended.

    L1002          option : unrecognized option name

                    An unrecognized character followed the option indicator
                    (/), as in the following example:

                    LINK /ABCDEF main;

    L1003          /QUICKLIB, /EXEPACK incompatible

                    You specified two options that cannot be used together:
                    /QUICKLIB and /EXEPACK.

    L1004          option : invalid numeric value

    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────

                    An incorrect value appeared for one of the LINK options.
                    For example, a character string was given for an option
                    that requires a numeric value.

    L1006          option : stack size exceeds 65535 bytes

                    The value given as a parameter to the /STACKSIZE option
                    exceeds the maximum allowed.

    L1007          option : interrupt number exceeds 255

                    For the /OVERLAYINTERRUPT option, a number greater than 255
                    was given as a value.

    L1008          option : segment limit set too high

                    The limit on the number of segments allowed was set to
                    greater than 3072 using the /SEGMENTS option.
    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
                    greater than 3072 using the /SEGMENTS option.

    L1009          number : CPARMAXALLOC : illegal value

                    The number specified in the /CPARMAXALLOC option was not in
                    the range 1-65,535.

    L1020          no object modules specified

                    No object-file names were specified to LINK.

    L1021          cannot nest response files

                    A response file occurred within a response file.

    L1022          response line too long

                    A line in a response file was longer than 127 characters.

    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────

    L1023          terminated by user

                    You entered CTRL+C or CRTL+BREAK

    L1024          nested right parentheses

                    The contents of an overlay were typed incorrectly on the
                    command line.

    L1025          nested left parentheses

                    The contents of an overlay were typed incorrectly on the
                    command line.

    L1026          unmatched right parenthesis

                    A right parenthesis was missing from the contents
                    specification of an overlay on the command line.
    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
                    specification of an overlay on the command line.

    L1027          unmatched left parenthesis

                    A left parenthesis was missing from the contents
                    specification of an overlay on the command line.

    L1043          relocation table overflow

                    More than 32,768 long calls, long jumps, or other long
                    pointers appeared in the program.

                    Try replacing long references with short references, where
                    possible, and recreate the object module.

    L1045          too many TYPDEF records

                    An object module contained more than 255 TYPDEF records.
                    These records describe communal variables. This error can
    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
                    These records describe communal variables. This error can
                    appear only with programs produced by the Microsoft FORTRAN
                    Compiler or other compilers that support communal
                    variables. (TYPDEF is a DOS term. It is explained in the
                    Microsoft MS-DOS Programmer's Reference and in other
                    reference books on DOS.)

    L1046          too many external symbols in one module

                    An object module specified more than the limit of 1023
                    external symbols.

                    Break the module into smaller parts.

    L1047          too many group, segment, and class names in one module

                    The program contained too many group, segment, and class
                    names.

    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────

                    Reduce the number of groups, segments, or classes, and
                    recreate the object file.

    L1048          too many segments in one module

                    An object module had more than 255 segments.

                    Split the module or combine segments

    L1049          too many segments

                    The program had more than the maximum number of segments.
                    Use the /SEGMENTS option, which has a default value of 128,
                    to specify the maximum legal number of segments. The
                    default is 128 in the /SEGMENTS option, which specifies the
                    maximum legal number.

                    Relink using the /SEGMENTS option with an appropriate
    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
                    Relink using the /SEGMENTS option with an appropriate
                    number of segments.

    L1050          too many groups in one module

                    LINK encountered over 21 group definitions (GRPDEF) in a
                    single module.

                    Reduce the number of group definitions or split the module.
                    (Group definitions are explained in the Microsoft MS-DOS
                    Programmer's Reference and in other reference books on
                    DOS.)

    L1051          too many groups

                    The program defined more than 20 groups, not counting
                    DGROUP.

                    Reduce the number of groups.
    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
                    Reduce the number of groups.

    L1052          too many libraries

                    An attempt was made to link with more than 32 libraries.

                    Combine libraries, or use modules that require fewer
                    libraries.

    L1053          out of memory for symbol table

                    There is no fixed limit to the size of the symbol table.
                    However, it is limited by the amount of available memory.

                    Combine modules or segments and recreate the object files.
                    Eliminate as many public symbols as possible.

    L1054          requested segment limit too high

    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────

                    LINK did not have enough memory to allocate tables
                    describing the number of segments requested. (The default
                    is 128 or the value specified with the /SEGMENTS option.)

                    Try linking again using the /SEGMENTS option to select a
                    smaller number of segments (for example, use 64 if the
                    default was used previously), or free some memory by
                    eliminating resident programs or shells.

    L1056          too many overlays

                    The program defined more than 63 overlays.

    L1057          data record too large

                    A LEDATA record (in an object module) contained more than
                    1024 bytes of data. This is a translator error. (LEDATA is
                    a DOS term, which is explained in the Microsoft MS-DOS
    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
                    a DOS term, which is explained in the Microsoft MS-DOS
                    Programmer's Reference and in other DOS reference books.)

                    Note which translator (compiler or assembler) produced the
                    incorrect object module and the circumstances. Please
                    report this error to Microsoft Corporation using the
                    Product Assistance Request form included with the
                    documentation.

    L1063          out of memory for CodeView information

                    Too many linked object (".OBJ") files contain debugging
                    information. Turn off the Produce Debug Code option in the
                    Make EXE file dialog box.

    L1070          segment size exceeds 64K

                    A single segment contained more than 64K of code or data.

    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────

                    Try compiling and linking using the large model.

    L1071          segment _TEXT larger than 65520 bytes

                    This error is likely to occur only in small-model C
                    programs, but it can occur when any program with a segment
                    named _TEXT is linked using the /DOSSEG option. Small-model
                    C programs must reserve code addresses 0 and 1; this range
                    is increased to 16 for alignment purposes.

    L1072          common area longer than 65536 bytes

                    The program had more than 64K of communal variables. This
                    error occurs only with programs produced by compilers that
                    support communal variables.

    L1080          cannot open list file

    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────

                    The disk or the root directory was full.

                    Delete or move files to make space.

    L1081          out of space for run file

                    The disk on which the executable file was being written was
                    full.

                    Free more space on the disk and restart LINK.

    L1083          cannot open run file

                    The disk or the root directory was full.

                    Delete or move files to make space.

    L1084          cannot create temporary file
    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
    L1084          cannot create temporary file

                    The disk or root directory was full.

                    Free more space in the directory and restart LINK.

    L1085          cannot open temporary file

                    The disk or the root directory was full.

                    Delete or move files to make space.

    L1086          scratch file missing

                    An internal error has occurred.

                    Note the circumstances of the problem and contact Microsoft
                    Corporation using the Product Assistance Request form
                    included with the documentation.
    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
                    included with the documentation.

    L1087          unexpected end-of-file on scratch file

                    The disk with the temporary output file from LINK was
                    removed.

    L1088          out of space for list file

                    The disk where the listing file is being written is full.

                    Free more space on the disk and restart LINK.

    L1089          filename : cannot open response file

                    LINK could not find the specified response file.

                    This usually indicates a typing error.

    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────

    L1090          cannot reopen list file

                    The original disk was not replaced at the prompt.

                    Restart LINK.

    L1091          unexpected end-of-file on library

                    The disk containing the library probably was removed.

                    Replace the disk containing the library and run LINK again.

    L1093          object not found

                    One of the object files specified in the input to LINK was
                    not found.

                    Restart LINK and specify the object file.
    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
                    Restart LINK and specify the object file.

    L1101          invalid object module

                    One of the object modules was invalid.

                    If the error persists after recompiling, please contact
                    Microsoft Corporation using the Product Assistance Request
                    form included with the documentation.

    L1102          unexpected end-of-file

                    An invalid format for a library was encountered.

    L1103          attempt to access data outside segment bounds

                    A data record in an object module specified data extending
                    beyond the end of a segment. This is a translator error.

    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────

                    Note which translator (compiler or assembler) produced the
                    incorrect object module and the circumstances in which it
                    was produced. Please report this error to Microsoft
                    Corporation using the Product Assistance Request form
                    included with the documentation.

    L1104          filename : not valid library

                    The specified file was not a valid library file. This error
                    causes LINK to abort.

    L1113          unresolved COMDEF; internal error

                    Note the circumstances of the failure and contact Microsoft
                    Corporation using the Product Assistance Request form
                    included with the documentation.

    L1114          file not suitable for /EXEPACK; relink without
    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
    L1114          file not suitable for /EXEPACK; relink without

                    For the linked program, the size of the packed load image
                    plus packing overhead was larger than that of the unpacked
                    load image.

                    Relink without the /EXEPACK option.

    L1115          /QUICKLIB, overlays incompatible

                    You specified overlays and used the /QUICKLIB option. These
                    cannot be used together.

    L2001          fixup(s) without data

                    A FIXUPP record occurred without a data record immediately
                    preceding it. This is probably a compiler error. (See the
                    Microsoft MS-DOS Programmer's Reference for more
                    information on FIXUPP.)
    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
                    information on FIXUPP.)

    L2002          fixup overflow near number in frame seg segname target seg
                    segname target offset number

                    The following conditions can cause this error:

                    ■ A group is larger than 64K.

                    ■ The program contains an intersegment short jump or
                    intersegment short call.

                    ■ The name of a data item in the program conflicts with the
                    name of a library subroutine included in the link.

                    ■ An EXTRN declaration in an assembly-language source file
                    appeared inside the body of a segment, as in the following
                    example:

    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────

                    code   SEGMENT public 'CODE'
                        EXTRN   main:far
                    start  PROC    far
                        call    main
                        ret
                    start  ENDP
                    code   ENDS

                    The following construction is preferred:

                    EXTRN   main:far
                    code   SEGMENT public 'CODE'
                    start  PROC    far
                        call    main
                        ret
                    start  ENDP
                    code   ENDS

    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────

                    Revise the source file and recreate the object file. (See
                    the Microsoft MS-DOS Programmer's Reference for information
                    about frame and target segments.

    L2003          intersegment self-relative fixup at offset in segment
                    segname

                    You tried to make a near call or jump to a far entry in
                    segment segname at offset.

                    Change the call or jump to far or make the entry near.

    L2004          LOBYTE-type fixup overflow

                    A LOBYTE fixup generated an address overflow. (See the
                    Microsoft MS-DOS Programmer's Reference for more
                    information.)

    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────

    L2005          fixup type unsupported

                    A fixup type occurred that is not supported by the
                    Microsoft linker. This is probably a compiler error.

                    Note the circumstances of the failure and contact Microsoft
                    Corporation using the Product Assistance Request form
                    included with the documentation.

    L2011          name : NEAR/HUGE conflict

                    Conflicting NEAR and HUGE attributes were given for a
                    communal variable. This error can occur only with programs
                    produced by compilers that support communal variables.

    L2012          name : array-element size mismatch

                    A far communal array was declared with two or more
    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
                    A far communal array was declared with two or more
                    different array-element sizes (for instance, an array was
                    declared once as an array of characters and once as an
                    array of real numbers). This error occurs only with
                    compilers that support far communal arrays.

    L2013          LIDATA record too large

                    A LIDATA record contains more than 512 bytes. This error is
                    usually caused by a compiler error.

    L2024          name : symbol already defined

                    LINK has found a public-symbol redefinition. Remove extra
                    definition(s).

    L2025          name : symbol defined more than once

                    Remove the extra symbol definition from the object file.
    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
                    Remove the extra symbol definition from the object file.

    L2029          unresolved externals

                    One or more symbols were declared to be external in one or
                    more modules, but they were not publicly defined in any of
                    the modules or libraries. A list of the unresolved external
                    references appears after the message, as shown in the
                    following example:

                    unresolved externals
                    EXIT in file(s):
                    MAIN.OBJ (main.for)
                    OPEN in file(s):
                    MAIN.OBJ (main.for)

                    The name that comes before in file(s) is the unresolved
                    external symbol. On the next line is a list of object
                    modules that have made references to this symbol. This
    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
                    modules that have made references to this symbol. This
                    message and the list are also written to the map file, if
                    one exists.

    L2041          stack plus data exceed 64K

                    The total size of near data and the stack exceeds 64K.
                    Reduce the stack size to control the error.

                    LINK tests for this condition only if the /DOSSEG option is
                    enabled. This option is automatically enabled by the
                    library startup module.

    L2043          Quick library support module missing

                    You did not specify, or LINK could not find, the object
                    module or library required for creating a Quick library. In
                    the case of QuickBASIC, the library provided is BQLB45.LIB.

    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────

    L2044          name : symbol multiply defined, use /NOE

                    LINK has found a possible public-symbol redefinition. This
                    error is often caused by redefining a symbol defined in a
                    library.

                    Relink using the /NOEXTDICTIONARY option.

                    This error in combination with error L2025 for the same
                    symbol indicates a real redefinition error.

    L4011          PACKCODE value exceeding 65500 unreliable

                    Packcode segment sizes that exceed 65,500 bytes may be
                    unreliable on the Intel(R) 80286 processor.

    L4012          load-high disables EXEPACK

    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────

                    The /HIGH and /EXEPACK options cannot be used at the same
                    time.

    L4015          /CODEVIEW disables /DSALLOCATE

                    The /CODEVIEW and /DSALLOCATE options cannot be used at the
                    same time.

    L4016          /CODEVIEW disables /EXEPACK

                    The /CODEVIEW and /EXEPACK options cannot be used at the
                    same time.

    L4020          name : code-segment size exceeds 65500

                    Code segments of 65,501-65,536 bytes in length may be
                    unreliable on the Intel 80286 processor.

    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────

    L4021          no stack segment

                    The program did not contain a stack segment defined with
                    STACK combine type. This message should not appear for
                    modules compiled with Microsoft QuickBASIC, but it could
                    appear for an assembly-language module.

                    Normally, every program should have a stack segment with
                    the combine type specified as STACK. You can ignore this
                    message if you have a specific reason for not defining a
                    stack or for defining one without the STACK combine type.
                    Linking with versions of LINK earlier than Version 2.40
                    might cause this message, since these linkers search
                    libraries only once.

    L4031          name : segment declared in more than one group

                    A segment was declared to be a member of two different
    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
                    A segment was declared to be a member of two different
                    groups.

                    Correct the source file and recreate the object files.

    L4034          more than 239 overlay segments; extra put in root

                    The program designates more than 239 segments to go in
                    overlays. When this error occurs, segments beginning with
                    number 234 are placed in the root, the permanently resident
                    portion.

    L4045          name of output file is name

                    The prompt for the run-file field gave an inaccurate
                    default because the /QUICKLIB option was not used early
                    enough. The output will be a Quick library with the name
                    given in the error message.

    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────

    L4050          too many public symbols for sorting

                    The number of public symbols exceeds the space available
                    for sorting the symbols as requested by the /MAP option.
                    The symbols are left unsorted.

    L4051          filename : cannot find library

                    LINK could not find the specified file.

                    Enter a new file name, a new path specification, or both.

    L4053          VM.TMP : illegal file name; ignored

                    VM.TMP appeared as an object-file name. Rename the file and
                    rerun LINK.

    L4054          filename : cannot find file
    Number         LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
    L4054          filename : cannot find file

                    LINK could not find the specified file. Enter a new file
                    name, a new path specification, or both.
    ──────────────────────────────────────────────────────────────────────────



I.4  LIB Error Messages

    Error messages generated by the Microsoft Library Manager, LIB, have one
    of the following formats:

    {filename| LIB} : fatal error U1xxx: messagetext
    {filename| LIB} : error U2xxx: messagetext
    {filename| LIB} : warning U4xxx: messagetext

    The message begins with the input-file name (filename), if one exists, or
    with the name of the utility. If possible, LIB prints a warning and
    continues operation. In some cases errors are fatal, and LIB terminates
    processing.

    LIB may display the following error messages:


    Number                   LIB Error Message
    ──────────────────────────────────────────────────────────────────────────
    U1150                    page size too small

                            The page size of an input library was too small,
                            which indicates an invalid input .LIB file.

    U1151                    syntax error : illegal file specification

                            A command operator such as a minus sign (-) was
                            given without a following module name.

    U1152                    syntax error : option name missing

                            A forward slash (/) was given without an option
                            after it.

    U1153                    syntax error : option value missing

                            The /PAGESIZE option was given without a value
                            following it.

    U1154                    option unknown

                            An unknown option was given. Currently, LIB
                            recognizes only the /PAGESIZE option.

    U1155                    syntax error : illegal input

                            The given command did not follow correct LIB
                            syntax as specified in Appendix G, "Compiling
                            and Linking from DOS."

    U1156                    syntax error

                            The given command did not follow correct LIB
                            syntax as specified in Appendix G, "Compiling
                            and Linking from DOS."

    U1157                    comma or new line missing

                            A comma or carriage return was expected in the
                            command line but did not appear. This may
                            indicate an inappropriately placed comma, as in
                            the line that follows:

                            LIB math.lib,-mod1+mod2;

                            The line should have been entered as follows:

                            LIB math.lib -mod1+mod2;

    U1158                    terminator missing

                            Either the response to the "Output library"
                            prompt or the last line of the response file used
                            to start LIB did not end with a carriage return.

    U1161                    cannot rename old library

                            LIB could not rename the old library to have a
                            .BAK extension because the .BAK version already
                            existed with read-only protection.

                            Change the protection on the old .BAK version.

    U1162                    cannot reopen library

                            The old library could not be reopened after it
                            was renamed to have a .BAK extension.

    U1163                    error writing to cross-reference file

                            The disk or root directory was full.

                            Delete or move files to make space.

    U1170                    too many symbols

                            More than 4609 symbols appeared in the library
                            file.

    U1171                    insufficient memory

                            LIB did not have enough memory to run.

                            Remove any shells or resident programs and try
                            again, or add more memory.

    U1172                    no more virtual memory

                            Note the circumstances of the failure and notify
                            Microsoft Corporation using the Product Assistant
                            Request form included with the documentation.

    U1173                    internal failure

                            Note the circumstances of the failure and notify
                            Microsoft Corporation using the Product Assistant
                            Request form included with the documentation.

    U1174                    mark: not allocated

                            Note the circumstances of the failure and notify
                            Microsoft Corporation using the Product
                            Assistance Request form included with the
                            documentation.

    U1175                    free: not allocated

                            Note the circumstances of the failure and notify
                            Microsoft Corporation using the Product
                            Assistance Request form included with the
                            documentation.

    U1180                    write to extract file failed

                            The disk or root directory was full.

                            Delete or move files to make space.

    U1181                    write to library file failed

                            The disk or root directory was full.

                            Delete or move files to make space.

    U1182                    filename : cannot create extract file

                            The disk or root directory was full, or the
                            specified extract file already existed with
                            read-only protection.

                            Make space on the disk or change the protection
                            of the extract file.

    U1183                    cannot open response file

                            The response file was not found.

    U1184                    unexpected end-of-file on command input

                            An end-of-file character was received prematurely
                            in response to a prompt.

    U1185                    cannot create new library

                            The disk or root directory was full, or the
                            library file already existed with read-only
                            protection.

                            Make space on the disk or change the protection
                            of the library file.

    U1186                    error writing to new library

                            The disk or root directory was full.

                            Delete or move files to make space.

    U1187                    cannot open VM.TMP

                            The disk or root directory was full.

                            Delete or move files to make space.

    U1188                    cannot write to VM

                            Note the circumstances of the failure and notify
                            Microsoft Corporation using the Product
                            Assistance Request form.

    U1189                    cannot read from VM

                            Note the circumstances of the failure and notify
                            Microsoft Corporation using the Product
                            Assistance Request form.

    U1190                    interrupted by user

                            The user pressed CTRL+C or CTRL+BREAK.

    U1200                    name : invalid library header

                            The input library file had an invalid format. It
                            was either not a library file, or it had been
                            corrupted.

    U1203                    name : invalid object module near location

                            The module specified by name was not a valid
                            object module.

    U2152                    filename : cannot create listing

                            The directory or disk was full, or the
                            cross-reference-listing file already existed with
                            read-only protection.

                            Either make space on the disk or change the
                            protection of the cross-reference-listing file.

    U2155                    modulename : module not in library; ignored

                            The specified module was not found in the input
                            library.

    U2157                    filename : cannot access file

                            LIB was unable to open the specified file.

    U2158                    libraryname : invalid library header; file
                            ignored

                            The input library had an incorrect format.

    U2159                    filename : invalid format hexnumber; file ignored

                            The signature byte or word hexnumber of the given
                            file was not one of the following recognized
                            types: Microsoft library, Intel library,
                            Microsoft object, or XENIX(R) archive.

    U4150                    modulename : module redefinition ignored

                            A module was specified to be added to a library
                            but a module with the same name was already in
                            the library. Or, a module with the same name was
                            found more than once in the library.

    U4151                    symbol : symbol redefined in module modulename,
                            redefinition ignored

                            The specified symbol was defined in more than one
                            module.

    U4153                    number : page size too small; ignored

                            The value specified in the /PAGESIZE option was
                            less than 16.

    U4155                    modulename: module not in library

                            A module to be replaced is not in the library.
                            LIB adds the module to the library.

    U4156                    libraryname : output-library specification
                            ignored

                            An output library was specified in addition to a
                            new library name. For example, specifying

                            LIB new.lib+one.obj,new.lst,new.lib

                            where new.lib does not already exist causes this
                            error.

    U4157                    Insufficient memory, extended dictionary not
                            created.

                            LIB was unable to create the extended dictionary.
                            The library is still valid, but LINK cannot take
                            advantage of extended dictionaries to link
                            faster.

    U4158                    Internal error, extended dictionary not created.

                            LIB was unable to create the extended dictionary.
                            The library is still valid, but LINK cannot take
                            advantage of extended dictionaries to link
                            faster.



────────────────────────────────────────────────────────────────────────────
Index


Symbols

#
(+)
    operator, combining strings
'
*
* (asterisk)
    AS,
    LIB command symbol
, (comma)
    fields, ending
    variable separator
$ (dollar sign), string-type suffix
" (double quotes), ending
/ (forward slash), LINK option character
(/), LINK option character
- (minus sign)
- (minus sign), LIB command symbol
-* (minus sign-asterisk, LIB
-+ (minus sign-plus sign), LIB command symbol
"" (null string)
+ (plus)
    operator, combining strings
    sign, LIB command
; (semicolon)
    LIB
; (semicolon),
; (semicolon), LIB command symbol
# USING

A

,A option
    BASICA
    #INCLUDE files
/A option (BC)
ABS function
ABSOLUTE
Absolute
ABSOLUTE statement
access, contrasted with
after input
/AH option
ALIAS, DECLARE
aliasing
Aliasing, variable
all in a module
allowable
allowed
Alphabetizing
alternative
among versions
AND
    operator
and functions. See individual statement and function names
    FIELD
    GET
    INPUT #
    PUT
    WRITE #
and GW-BASIC
AND option
    PUT
and replacing
Angle measurements
Animate mode
Animation
    GET and PUT
    graphics statements, simple
    image flicker,
    PALETTE USING
    screen pages
Apostrophe (')
    entering
    introducing comments
(apostrophe), introducing comments
Arc
Arctangent,
Arguments
    correct type and number, checking for
    LINK options
    parameters
    agreement
    distinguished from
    passing
    by
    by value
    described
    limits on
    SUB procedures,
arguments by reference
Array-bound
Array-bound functions
Arrays
    dynamic
    ERASE
    REDIM statement
    elements, passing
    format
    argument list
    FUNCTION statement
    parameter
    parameter list
    SHARED statement
    SUB statement
    LBOUND function
    limits (table)
    lower-bound function
    memory allocation
    procedures
    passing
    passing to
    sharing
    row-order option
    static, ERASE statement
    subscripts,
    subscripts, specifying
    lower
    UBOUND (upper-bound) function
    variables
arrays
    limits
Arrow keys. See DIRECTION keys
ASC function
ASCII
    character
    character codes
    CHR$
    determining
    (table)
    files, reading as sequential
Aspect ratio
    CIRCLE
    correction for
    defined
    screen size, computing for
    squares,
Assembly-language listings
Assignment statements
(asterisk)
    AS, fixed-length string with
Asterisk (*)
    fixed-length
Asterisk (*)
ATN function
attribute
    described
    DIM
    described
    sharing
    REDIM
    variables, making global
Attributes
    colors, assigning
    screen
    screen modes, EGA and VGA
    STATIC
attributes. See Attributes
automatic
Automatic
Automatic variables
AUX (device name)

B

Background color default
Background music
.BAS file, execution by QuickBASIC
BASIC
    error codes
    reserved words
    run-time errors
BASIC, compatibility
BASICA
    compatibility
    QuickBASIC, converting to
/BATCH option (LINK)
Batch file, when to use
Baud rate
BC command
    options
    /V
BC
BC command
    command line, invoking from
    file-name usage
    options
    /A
    /AH
    /C
    /D
    /E
    (list)
    /MBF
    new (table)
    not used (table)
    /O
    /R
    /S
    /V
    /W
    /X
    /ZD
    /ZI
    versions, differences among
BC.EXE
BEEP statement
Binary
    file access
    OPEN statement syntax
    random
    versions, differences among
    input
    numbers, converting to hexadecimal
Binary, differences from
Binary format
    IEEE format, differences from
Binary-access
Binary-access files
    creating
    opening
    reading
    writing to
Bit
Bitwise operators. See Logical operators
Blank COMMON block
BLOAD statement
block
Block IF...THEN...ELSE
Bold text, indicating keywords
B_OnExit routine
Boolean
    constants
    expressions
    definition
    logical operators
    other
    relational operators (table)
bound
bound for
Boxes,
Boxes, LINE statement
BRUN40.LIB, default for linker
BSAVE statement
buffer
BUILDLIB utility
by QuickBASIC
by value
    defined

C

/C option (BC)
CALL
CALL ABSOLUTE
CALL INT86OLD statement
CALL INT86XOLD statement
CALL INTERRUPT
CALL INTERRUPT statement
CALL INTERRUPTX statement
CALL statement
    DECLARE, used with
    described
    optional
    QuickBASIC/interpreter differences
    SUB procedure, calling
calls
CALLS statement
CALLS statement (non-BASIC)
Carriage-return-line-feed
Cartesian coordinates. See View coordinates
Case
    sensitivity
    significance,
CASE clause. See SELECT CASE statement
CASE$ function
CDBL function
CDECL, use in DECLARE statement
CGA
    palette, changing
    screen modes supported by
CHAIN
CHAIN statement
    described
    QuickBASIC/interpreter differences
Chaining programs,
Chaining programs, statements used. See individual
changing number of
changing with
Characters
    how stored
    limits
CHDIR statement
Checking between statements option
Choosing
    commands,
    options, differences among versions
CHR$ function
CINT function
CIRCLE
CIRCLE statement
    arcs
    circles
    described
    ellipses
    pie shapes
Circles, drawing
clause
CLEAR
CLEAR statement
CLNG function
CLOSE statement
CLS statement
/CODEVIEW option (LINK)
codes
    determining with the ASC function
    storing characters in memory
CodeView
COLOR
Color
Color Graphics Adapter. See CGA
COLOR statement
    background color, controlling
    described
    foreground color, controlling
    palette, changing with
    screen mode 1, syntax in
Colors
    background,
    CGA, using with
    clarity, tradeoff with
    foreground,
    foreground, controlling
    graphics statements, specifying in
    PALETTE
    PALETTE,
Columns
    changing
    skipping
COM
COM devices
COM statements
Comma (,)
    ending fields
    variable separator
command
    option
    /MBF
    /RUN option
COMMAND$
command, DRAW
COMMAND$ function
    limits
Command line
    BASIC program passing to
    Quick
command line
command symbol
command-line
Commands
    BC. See BC command
    Linker. See LINK
    versions,
commands
Commands QB. See QB command
Comments
    REM statement
Comments, introducing with apostrophe
COMMON
COMMON block
    blank
    named
COMMON statement
    AS clause
    chaining programs
    QuickBASIC/interpreter differences
    SHARED
    SHARED attribute
    defined
    described
    variables, sharing across
    variables,
compared with
Comparing
Comparing strings
    relational operators, with
Compatibility
    BASICA
    versions,
compatibility among
Compile options
Compile-time error messages
Compiling from DOS
Complex numbers, defined
CON (device name)
Concatenation, defined
CONS
CONST statement
Constants
    input list
    procedures, passing to
    string, literal and symbolic
    symbolic
constants
    format in program examples
    string
contrasted with
Control-flow
Control-flow statements. See individual
    CALL
    CALL ABSOLUTE
    CALLS
    CHAIN
    DO...LOOP
    FUNCTION
    GOSUB...RETURN
    GOTO
    IF...THEN...ELSE
    ON GOTO
    ON...GOTO
    RETURN
    SELECT CASE
Control-flow structures
    BASIC, used in (table)
    decision
    defined
    indenting
    new
Controlling
    linker
    segments
    stack size
controlling
conventions
    BASIC programs
Converting
    BASICA and GW-BASIC programs
    data
    IEEE format, program for
converting to QuickBASIC
Coordinates
    absolute
    STEP, specifying
    VIEW SCREEN, specifying
    physical
    GET
    pixels,
    view
    pixels, locating
    relative
    defined
    STEP
    VIEW
    view
    GET statement
    physical coordinates, translating
    WINDOW,
    viewport,
coordinates. See Coordinates, absolute
    WINDOW statement
coordinates, translating to
COS
(/CP)
/CPARMAXALLOC option (LINK)
creating outside QuickBASIC environment
Cross-reference-file
CSNG function
CSRLIN function
Cursor
    graphics
    text
    defined
    LOCATE, positioning
    location, finding
    shape, changing
cursor
CVD function
CVDMBF
CVDMBF function
CVI function
CVL
CVL function
CVS
CVSMBF function
CVtype statement

D

/D option (BC)
Data
Data files
    closing
    creating
    defined
    file numbers
    file-access errors,
    opening
    organization
    random-access
    reading
    records, adding
    sequential
data, preventing
DATA statement
Data types
    TYPE statement
Data-file buffer
DATE$
Date and time
    functions
    DATE$
    TIME$
    statements
    DATE$
    TIME$
DATE$ statement
Debug option
debugger, debugging with
debugger, LINK option for
Debugging
    /CODEVIEW (LINK) option
    statements
    versions, differences among
Decision
Decision structures
    defined
    IF...THEN...ELSE
    block
    single-line
    SELECT CASE
Declarations. See individual statement names
    CONST
    DECLARE statement (BASIC procedures)
    DECLARE statement (non-BASIC
    DEFtype
    DIM statement
DECLARE
DECLARE statement
    described
    include
    QuickBASIC,
    versions, differences among
    where required
Declaring arrays
    limits
DEF FN functions
    exit from, alternative
    FUNCTION procedure, contrasted with
    local
DEF FN statement
DEF SEG statement
DEFDBL statement
defining with
definitions
DEFINT statement
DEFLNG statement
DEFSNG statement
DEFSTR
DEFtype
    QuickBASIC/interpreter differences
DEFtype
Degrees
    compared with
    converting to radians
deleting from, including, and replacing
Device I/O, contrasted with file I/O
(device name)
Devices
    COM
    CONS
    function
    function handling
    IOCTL$
    PEN
    I/O modes, valid
    KEYBD
    LPT
    names
    SCRN
    statement handling
    IOCTL
    OPEN
    OUT
    WAIT
Device-status information
differences among
Differences among versions
    file compatibility
    (table)
differences among versions
DIM
DIM statement
    AS
    described
    QuickBASIC/interpreter differences
    SHARED attribute
    defined
    example,
    variables,
    TO clause
Dimensioning
DIRECTION
keys, trapping
Directory
Directory statements
    CHDIR
    FILES
    MKDIR
    RMDIR
Display memory, PCOPY statement
displaying
DO UNTIL statement
DO WHILE statement
Document conventions
Dollar
DO...LOOP
DO...LOOP statement
    described
    exit from,
    exit from, alternative
    keyword
    UNTIL
    WHILE
    loop test, location of
    syntax
    WHILE...WEND,
DOS
DOS-level
option (LINK)
/DOSSEG
Dotted lines, drawing
Double quotes ("), ending fields
Double-precision
Double-precision numbers
    size limits
DRAW statement
    described
    figures
    rotating
    scaling
    macro commands in
    QuickBASIC/interpreter differences
    VARPTR$
drawing
Dumb terminal, defined
Dummy arguments, POS function
#DYNAMIC metacommand
Dynamic arrays
    #DYNAMIC metacommand
    ERASE
    REDIM

E

/E option
    BC
    QB
/E option
    BC
Editing, differences
EGA, changing palette
elements
Ellipses, drawing
ELSE clause
ELSEIF clause
END
END DEF
END FUNCTION statement
END IF statement
END SELECT
END statement
END SUB statement
END TYPE statement
End-of-line markers
Enhanced Graphics Adapter. See EGA
key, equivalent to SPACEBAR
ENTER
ENVIRON$ function
ENVIRON statement
environment variable
Environment variables
    described
    LIB
    LINK
    TMP, used by LINK
Environment-string
EOF
EOF function
EQV
ERASE statement
Erasing
ERDEV$
ERDEV$ function
ERL function
ERR
    code
    function
ERR
ERRDEV function
ERRDEV$ function
Error
Error codes
Error messages
    compile-time
    described
    invocation
    LIB
    LINK
    numbers, limits (table)
    redirection
    run-time
ERROR statement
Error trapping
    ERR, identifying errors with
    ERROR statement
    error-handling routine
    file-access errors
    multiple modules
    Quick libraries
    screen modes, inappropriate
    SUB or FUNCTION procedures
    syntax,
Error-handling
Error-handling routines
    parts
    specifying
Error-handling statements
    ERDEV
    ERR, ERL
Error-message window
event
Event polling, event trapping, contrasted with
Event trapping. See specific
    activating
    background music
    described
    disabling
    keystrokes
    multiple modules
    options,
    polling, contrasted with
    routines, event-handling
    statements and functions, summary of (table)
    SUB
    suspending
    syntax, error-trapping
    trappable events
    types
    types of
    COM
    KEY
    PEN
    PLAY
    TIMER
event trapping
    PLAY ON statement
Event trapping, Quick library
Event-handling
Event-handling routine
Event-trapping
Event-trapping option
Event-trapping statements. See individual
    COM
    KEY LIST
    KEY OFF
    ON
    ON event
    PEN ON, OFF, and STOP
    PLAY ON, OFF, and STOP
    TIMER ON, OFF, and STOP
    UEVENT
event-trapping syntax, contrasted with
examples
Executable
/EXEPACK option (LINK)
EXIT
EXIT DEF statement
EXIT DO statement
EXIT FOR statement
EXIT FUNCTION statement
EXIT statement
EXIT SUB statement
Exiting, functions and procedures
EXP function
Expressions
    Boolean
    false
    lists
    procedures, passing to
    true
expressions, comparing with
Expressions, string. See Strings
Extensions, file-name
Extra files produced
extracting and deleting

F

Factorial function
False expressions
FIELD
FIELD statement
    described
    random-access
    TYPE...END
Fields
    defined
    records
    random-access
    sequential
    sequential files, delimited
fields
fields, delimiting
figures with DRAW
File
    names
    characters,
    OPEN statement
    numbers
    CLOSE, freeing with
    FREEFILE, getting with
    freeing
    OPEN statement
    values, allowable
    pointers
file
    LIB
File
File access
    LOCK statement
    UNLOCK
    UNLOCK statement
File conversion
File handling. See statements;individual statement names
    functions
    EOF
    FILEATTR
    FREEFILE
    LOC
    LOF
    SEEK
    statements
    CHDIR
    CLOSE
    FIELD
    GET
    INPUT #
    KILL
    LOCK
    NAME
    OPEN
    RESET
    SEEK
File I/O
    defined
    device I/O contrasted
File names
    case sensitivity
    described
    restrictions
    truncation
file, temporary
File-access
File-access modes
    APPEND
    BINARY
    INPUT
    OUTPUT
    RANDOM
FILEATTR function
File-name extensions
File-naming
File-naming conventions
    BC command
    DOS
    LINK
    Quick libraries
Files
    ASCII format
    attributes
    extra, produced by QuickBASIC
    #INCLUDE
    length,
    limits (table)
    map
    map (LINK)
    random-access,
    random-access, statements
    random-access, statements and functions. See individual statement and
    function names
    sequential,
    sequential, statements and functions. See individual
    INPUT
    WRITE
    versions,
files
    adding to
    advantages of
    appending
    compact
    creating
    format
    number storage
    opening
    packing
    random-access files, contrasted with
    records
    statements and functions
    FIELD
    PRINT #
    PUT
    RSET
    statements not allowed
FILES
files, closing
files, contrasted with
files (LINK)
files, placing in
FILES statement
Filling. See Painting
filling
FIX function
fixed-length string with
Fixed-length strings
    parameter lists
    record
    variable length, contrasted with
    variables, stand-alone
Floating-point
    precision, within Quick libraries
FOR statement
Foreground color
    default
    screen mode 1
form
format
    numbers
    converting from
Formatting text output
FOR...NEXT
FOR...NEXT loops
    described
    execution,
    exit from, alternative
    STEP keyword
FOR...NEXT statement
Forward reference problem
Forward reference problem, DECLARE,
Forward slash
Fractal
FRE function
FRE statement
FREEFILE
FREEFILE function
from, alternative
FUNCTION
function
function
    data, reading
    files
    described
    DRAW, use with
    PLAY, use with
FUNCTION
function, arguments to
function (cosine)
Function keys, trapping
function name
function name
function names
FUNCTION procedures
    calling
    DECLARE statements
    described
    error
    event trapping
FUNCTION statement
    AS
    described
    include files,
    include files, restrictions with
function, using
FUNCTION...END FUNCTION statements. See FUNCTION procedures
Functions. See individual
    user defined
functions
    CDBL
    CVL
    INPUT$
    INT
    SIN

G

GET
GET statement
    described
    file I/O
    binary-access
    random-access
    graphics
    array, calculating size of
    syntax
    records, user-defined
Global variables
    DEF FN function
    FUNCTION procedure
    GOSUB routine
    SHARED attribute
    variable aliasing
GOSUB
GOSUB, contrasted with
GOSUB statement
GOSUB subroutines
    SUB procedures,
GOTO statement
    described
    #INCLUDE metacommand
Graphics. See statements;individual statement names
    functions. See individual statement names
    PALETTE
    PMAP
    POINT
    VIEW
    WINDOW
    statements
    BLOAD
    BSAVE
    CIRCLE
    COLOR
    DRAW
    GET
    LINE
    PAINT
    PALETTE
    PALETTE
    PRESET
    PSET
    PUT
    VIEW
    WINDOW
graphics
Graphics Adapter), changing palette
Graphics cursor. See Cursor, graphics
Graphics screen modes. See Screen modes
graphics statement, with
Graphics statements and functions, summary (table)
Graphics viewport. See Viewport,
GW-BASIC

H

/H option (QB)
handling
    functions. See individual function names
    LPOS
    statements. See individual statement names
    UNLOCK
/HELP option (LINK)
HEX$ function
Hexadecimal
High-resolution-display

I

IEEE
IEEE format
    accuracy
    converting to
    /MBF
    numbers
    converting
    exponential,
    Microsoft
    printing
    ranges
IF...THEN...ELSE
IF...THEN...ELSE statement
    described
    SELECT CASE
IF...THEN...ELSE statement, block
IF...THEN...ELSE statement, block form
(IGN)
/IGNORECASE option (LIB)
Ignore case
    LIB
    LINK
ignoring
Images
    GET, saving to memory with
    PUT, copying to screen with
Immediate window, limits
IMP operator
in
in map files
#INCLUDE metacommand
    COMMON
    description
    procedure declarations
    restrictions
Include
Include files
    COMMON
    procedures
    declaring
    not allowed
/INFORMATION option (LINK)
INKEY$ function
INP function
INPUT
input
    reading
INPUT
INPUT #
INPUT$
Input
INPUT$ function
    data, reading
    communications device
    standard input
    described
    example
    INPUT #, contrasted with
    LINE INPUT #, contrasted with
    modem, communicating with
Input functions. See individual
    COMMAND$
    INKEY$
    INP
Input past end error
INPUT # statement
    described
    example
    INPUT$,
    LINE INPUT #, contrasted with
INPUT statement
    carriage-return-line-feed sequence, suppressing
    defined
    described
    error
    example
    LINE INPUT,
    variable
Input statements. See individual
    DATA
    INPUT
    LINE
    READ
    RESTORE
Input/Output. See I/O
Insert mode, differences
INSTR function
INT function
INT86, INT86X replacements
    CALL
    CALL INT86OLD statements
INT86OLD
Integers
    converting
    converting to
    FIX function
    limits, (table)
Interpreted
INTERRUPT
Interrupt
INTERRUPT statements
Invocation error
I/O
    binary-access
    defined
    devices, from and to
    files, from and to
    ports
    standard
IOCTL$ function
IOCTL statement
Italic text, showing placeholders
items

J

Joysticks

K

Key
KEY LIST
KEY OFF statement
KEY ON statement
KEY statement
Key trapping
    activating
    keys
    DIRECTION
    user-defined
key trapping
KEYBD
Keyboard, reading input from
Keyboard scan codes
KEY(n) statements
Keys
    debugging, differences among versions
    DIRECTION,
    editing, differences among versions
    ENTER
    SPACEBAR
Keywords, format in program examples
KILL statement

L

(QB)
/L option
Labels
Language differences among
Last
Last point referenced
LBOUND function
LCASE$
LCASE$ function
leading blank
LEFT$
LEFT$ function
LEN
LEN function
    described
    sample
    sample program application
    use of
LET statement
letters
    file names
.LIB files. See Libraries, stand-alone
LIB
    case sensitivity
    command
    command symbols
    plus
    plus sign (+)
    default responses
    described
    invoking
    libraries, combining
    library
    library modules
    listing files
    options
    case sensitivity
    dictionary, no extended
    /IGNORECASE (/P)
    /NOEXTDICTIONARY
    /NOIGNORECASE
    page size, specifying
    /PAGESIZE
    response file
    search path
LIB command symbol
LIB error messages
LIB.EXE
Libraries. See Quick libraries
    default,
    default, ignoring
    described
    LINK, specifying for
    search
    stand-alone
    combining
    defined
    described
    LIB
    listing
    modules,
    object
    object modules,
    object modules, deleting from, including,
    parallel
    types, contrasted
    user.
libraries. See Quick Libraries
    CALL INT86OLD statement
    compatibility among versions
    compilation
    contents
    described
    use of
libraries, creating
library, creating from
Library Manager. See LIB
Limits, file size and complexity (table)
/LINENUMBERS option (LINK)
Line
LINE INPUT
LINE INPUT # statement
    described
    INPUT #, contrasted
    INPUT$, contrasted
LINE INPUT statement
    described
Line printer
LINE statement
    coordinate pairs, order of
    described
    lines and boxes, drawing
    sample applications
    syntax
Lines, drawing
(LINK)
LINK. See Libraries
    command line, invoking from
    defaults
    libraries, specifying
    options
    abbreviations
    arguments, numerical
    /BATCH (/B)
    BC, unsuitable for
    case sensitivity
    CodeView
    /CODEVIEW (/CO)
    command line, order
    /CPARMAXALLOC
    default libraries, ignoring
    displaying
    /DOSSEG (/DO)
    /EXEPACK (/E)
    /HELP (/HE)
    /IGNORECASE
    information,
    /INFORMATION (/I)
    line
    /LINENUMBERS (/LI)
    LINK
    linker
    map
    /MAP (/M)
    /NODEFAULTLIBRARYSEARCH
    /NOIGNORECASE
    /NOPACKCODE (/NOP)
    /PACKCODE (/PAC)
    paragraph space, allocating
    /PAUSE
    pausing
    Quick
    /QUICKLIB (/Q)
    segments
    /SEGMENTS
    segments,
    stack
    /STACK (/ST)
    output
    output file, temporary
    Quick libraries, other language routines
    response file
LINK environment variable
LINK error messages
LINK options
Linker. See LINK
LINK.EXE
Linking. See LINK
Linking from DOS
list
list, format of
listing
Listing files, cross-reference (LIB)
Literal constants,
Loading Quick libraries
LOC function
    described
    devices, with
    modem, communicating with
    SEEK,
local
Local variables
LOCATE statement
    cursor
    changing
    positioning
    described
    example
locating
LOCK statement
LOF
LOF function
    described
    devices
    example
    files
LOG function
Logical
Logical coordinates
    physical coordinates,
Logical operators
Long integers
    advantages of
    converting
    converting to
    limits (table)
Looping
Looping structures
    defined
    DO...LOOP
    WHILE...WEND
loops
    nesting
Lowercase
Lowercase letters
    uppercase, converting to
LPOS function
LPRINT statement, SPC function
LPRINT USING statement
LPT devices
LSET
LSET statement
.LST files. See Listing files
LTRIM$ function
    blanks, leading, printing numbers without
    described
    spaces, leading, stripping
    spaces, leading, stripping

M

Macro
Main module
libraries, use with
.MAK files, Quick
Make Library command
making global
Mandelbrot set
.MAP files. See Map files
/MAP option (LINK)
Map
Map files
Map files (LINK)
mapping to
Math functions
    ABS
    ATN
    COS
    CVSMBF
    EXP
    LOG
    MKSMBF$, MKDMBF$
    SIN
    SQR
    TAN
/MBF option
    BC
    QB
option, using with old programs
Memory
    available, calculating
    requirements, Quick libraries
Memory functions
Memory management
    functions. See individual
    FRE
    SETMEM
    statements
    CLEAR
    DEF
    ERASE
    individual
    PCOPY
Menu commands, differences among versions
message, invalid-input
messages
Metacommands
    described
    #DYNAMIC
    #INCLUDE See also #INCLUDE metacommand
    #STATIC
Microsoft
Microsoft Binary format
    numbers
Microsoft Library Manager. See LIB
MID$
    function
MID$
MID$ function
MID$ statement
Minimize String Data option
Mixed-language
Mixed-language programming
    ALIAS, use of
    CALL,
    CDECL,
    DECLARE
    Quick libraries
MKD$ function
MKDIR statement
MKDMBF$ function
MKI$ function
MKL$
MKS$ function
MKSMBF$ function
MKtype statement
MKtype$ statement
MKtypeMBF$ statement
mode 1
Modem, communicating with
modes
    BINARY
    INPUT
    OUTPUT
modes, EGA and VGA
Module-level code
Modules. See Multiple
modules
    event trapping
modules
modules, deleting from, including, and replacing
monochrome
Monochrome screen mode
Moving images with PUT
Multiple
Multiple modules
    advantages
    error
    error trapping
    event trapping
    loading
    main module
    programming style
    Quick libraries
    size limits (table)
    variables,
    variables, sharing
    versions, differences among
Music
    background
    statements
Music
Music event trapping
    ON PLAY GOSUB statement
music option

N

NAME statement
Named COMMON
Named COMMON block
names
Names, devices
nclude files
    nesting limits (table)
New line. See Carriage-return-line-feed sequence
NEXT statement
No extended dictionary, library
NOCOM.OBJ file
(/NOD)
/NODEFAULTLIBRARYSEARCH option (LINK)
/NOEXTDICTIONARY option (LIB)
(/NOI)
/NOIGNORECASE option (LIB)
/NOIGNORECASE option (LINK)
non-BASIC procedures
/NOPACKCODE option (LINK)
NOT
not generated by
NOT operator
notation
    placeholders
Notational
NUL (device name)
Null
NUL.MAP file
number, displaying
number of on screen
Numbers
    positive, printing without leading blank
    random-access files, storage in
    screen,
    screen, printing on
    strings, representing as
numbers
    converting to
Numeric
Numeric conversions
    CVD
    CVI
    CVL function
    CVS function
    double-precision
    integer
    single-precision
Numeric functions. See individual function names
    CINT
    CLNG
    CSNG
    CVD
    CVI
    CVS
    FIX
    RND
    SGN

O

/O option (BC)
Object
    files
    modules
OCT$ function
Octal conversion
of
    STRIG
of, printing
on
ON
ON COM statement
ON ERROR
ON ERROR GOTO statement
    described
    example
    syntax
ON event
ON event GOSUB statements
ON event statements
ON expression statement
ON PEN statement
ON PLAY GOSUB statement
ON PLAY statement
ON statement
ON STRIG
ON TIMER statement
ON UEVENT statement
ON...GOSUB statement
ON...GOTO statement
OPEN
OPEN COM statement
OPEN statement
    described
    file names in
    file-access
    file-access modes
    APPEND
    INPUT
    OUTPUT
    LEN
opening for I/O
operator
Operators
    logical
    relational
    relational,
operators
    string comparisons
option
OPTION BASE statement
option (QB)
option required
Options, BC. See BC command
Options, LIB. See LIB
Options, LINK. See LINK
or FUNCTION procedures, within
OR operator
ordering
OUT statement
Output. See statements;individual function names
    functions. See individual function names
    LPOS
    POS
    TAB
    line
    statements
    BEEP
    CLS
    LPRINT
    OUT
    PRINT
    PRINT
    PRINT #
    PRINT USING
    PUT
    WRITE
    WRITE #
Overlay linker. See LINK
Overtype mode, differences among versions

P

(/P)
/PACKCODE option (LINK)
/PAGESIZE option (LIB)
Page size, library
Pages. See Screen
pages
pages
PAINT
PAINT statement
    argument
    background
    border
    described
    numeric expression
    shapes, filling
    colored
    patterned
    string expression
    tiling
    monochrome, defining
    multicolor, defining
Painting
    colors
    exterior
    interior
    patterns,
    patterns
    described
    multicolor
PALETTE
PALETTE statement
PALETTE USING statement
Palettes
    COLOR, changing with
    PALETTE, changing with
    screen
Paragraph space
Parameter list, defined
Parameters
    arguments
    agreement with
    distinguished from
    DECLARE, format in
    number and
Passing
Passing by reference
Passing by value
    DEF FN, used in
passing to
path
Path names, limits (table)
Pattern tiles, editing on screen
Patterns
    monochrome
    multicolor
    shapes,
    tile size
(/PAU)
/PAUSE option (LINK)
pausing
Pausing program execution, FOR...NEXT statement
PCOPY
PCOPY statement
PEEK function
PEN function
PEN OFF statement
PEN ON statement
PEN STOP
Peripheral devices
Physical coordinates
Pie shapes, drawing
Pixels
    coordinates, locating with
    defined
    PRESET,
    PSET, plotting with
    text
Place markers, limits (table)
planes
PLAY
PLAY function
PLAY OFF statement
PLAY statement
    background
    described
    QuickBASIC/interpreter differences
    VARPTR$ function, using
PLAY STOP
plotting with
Plus
Plus (+)
    sign, LIB command symbol
PMAP function
PMAP statement
POINT function
point referenced
POKE statement
Polling
POS function
Positive numbers, printing without
PRESET
PRESET option, with PUT graphics statement
PRESET statement
    color option, using with
    described
previous
PRINT
PRINT # statement
    described
    record
    WRITE #, contrasted with
PRINT statement
    described
    example
    text, wrapping
PRINT # USING statement
PRINT USING # statement
PRINT USING statement
Print zone
Printing
    numbers
    negative
    positive
    text
    printer,
    screen, to
printing
printing on
PRN
Procedures
    arguments
    passing by reference
    passing by value
    arrays
    benefits
    calling
    constants
    defining
    described
    expressions
    format
    argument-list
    parameter-list
    include files, declarations in
    libraries, user
    limits (table)
    modules, multiple
    moving
    passing
    Quick
    records
    recursive
    statements
    FUNCTION...END
    FUNCTION...END FUNCTION
    SUB...END
    SUB...END SUB
    summary (table)
    statements not allowed
    STATIC variables
    variables
    global
    local
    sharing
    variables,
    variables, automatic
procedures
    DEF FN function, contrasted with
    exit from, alternative
procedures)
procedures
Procedures-only module
Program
    suspension
    termination
program application
programming
    Quick libraries
Programming environment, differences in versions
Programming style
    multiple
Programs
    BASICA, GW-BASIC,
ProKey, using QuickBASIC with
prompting, preventing
PSET
PSET statement
    described
    example
    STEP option
PUT
PUT statement
    described
    file
    file I/O
    binary-access
    random-access
    graphics
    animation
    interaction with background, controlling
    syntax
    records,

Q

QB
QB command
    /AH
    /H option
    /L option
    /MBF
    /MBF option
    /RUN option
    versions, differences among
QB.QLB
    library
    loading, automatic
QLBDUMP.BAS
Quick
Quick libraries
    advantages
    CALL ABSOLUTE statement
    CALL INTERRUPT
    contents
    described
    listing
    reading
    creating
    command line, from
    described
    files needed
    LINK, using
    QuickBASIC, from within
    default
    described
    end user, delivery to
    errors, trapping in
    executable files, making compact
    files
    needed to create
    produced by
    floating-point precision
    include files, declaring procedures with
    loading
    .MAK file, updating
    memory
    mixed languages
    naming
    object code, linking
    routines, other languages
    search
    updating
option (LINK)
/QUICKLIB

R

/R option (BC)
Radians
radians
Random access, contrasted with binary access
Random numbers
Random-access
Random-access files
    opening
    records
    adding
    organizing
    reading
    sequential
    sequential files, contrasted with
    statements
RANDOMIZE statement
READ statement
Record numbers
    limits (table)
    random-access files, indexing in
Record numbers, random-access files
    indexing in
Records
    binary-access files, writing
    data, overwriting
    defined
    defining
    described
    fixed-length
    procedures,
    procedures, passing to
    random-access
    random-access files
    reading
    storing
    writing
    sequential
    sequential files
    appending
    reading
    storing
    variable length
records, defining
Rectangles, specifying coordinates
Recursive
Recursive procedures
REDIM
REDIM statement
    described
    SHARED
    SHARED attribute
reducing
reference
Relational
Relational operators
    Boolean expressions
    SELECT CASE statement
relative
Relative coordinates. See Coordinates,
REM statement
representing as
requirements
RESET statement
Response
Response file
    example
    LINK
RESTORE statement
restrictions with
RESUME
Resume Next option
RESUME NEXT statement
    described
    example
    RESUME,
RESUME statement
    compiler
    compiler option required
    described
    example
    QuickBASIC/interpreter differences
    RESUME NEXT, contrasted with
retrieving
    right side
RETURN statement
RIGHT$ function
RMDIR statement
RND function
Rotating
Rotating figures with DRAW
routine
Routine, B_OnExit
routines
    ERR, identifying errors with
Rows, changing number of
RSET
RSET statement
RTRIM$
RTRIM$ function
/RUN option (QB)
Run menu, Make Library command
RUN statement
    data
Run-time error messages

S

/S option (BC)
SADD function
SAVE statement (BASICA)
Saving
    images, with GET
    programs, ASCII format
Scan codes
    keyboard
    trapping keys, use
Screen
    configuration
    graphics mode
    text mode
    functions
    CSRLIN
    individual function
    POS
    SCREEN
    resolution,
    statements. See individual statement names
    CLS
    COLOR
    LOCATE
    PCOPY
    SCREEN
    VIEW PRINT
    WIDTH
Screen
SCREEN function
Screen modes
Screen pages
SCREEN statement
    aspect ratio, effect on
    described
    example
    screen
    page
    resolution, adjusting
    text mode, rows in
SCRN
Scrolling
(/SE)
Search paths
    libraries
    Quick libraries
Searching
    strings
See Quick libraries
SEEK function
SEEK statement
SEG
/SEGMENTS option (LINK)
Segments
    lists, map files
    number
    order
    packing
SELECT CASE
SELECT CASE statement
    CASE clause
    CASE ELSE clause
    described
    END SELECT
    IF...THEN...ELSE
    ON expression
    routine, error-handling
    syntax
    versions, differences among
Semicolon (;), LIB command symbol
Separate-compilation method. See BC command
sequence
Sequential
Sequential files
    creating
    fields
    opening
    random-access files, contrasted
    records
    statements
    statements and functions
    LINE INPUT #
Serial communication
    defined
    input
    input buffer
Serial ports,
Set Main Module command, differences among versions
SETMEM function
setting
SGN function
shape of
SHARED
SHARED attribute
    COMMON
    DIM
    described
    example
    prohibited
    REDIM
SHARED statement
Shared variables, between modules
sharing
Shell escape (SHELL statement)
Shifted keys, trapping
SideKick,
sign (+)
sign ($), string-type suffix
SIN function
Sine, SIN function
Sine wave, graphing
Single-precision
Single-precision numbers
    size limits (table)
size
size, setting
Skipping
    columns
    spaces
SLEEP statement
Sorting,
Sorting, examples
SOUND statement
Source
Source files
    versions, compatibility among
SPACE$
SPACE$ function
Spaces
    skipping
    trimming
SPC
SPC function
SPC statement
specifying
    maximum value
    number of
specifying values outside
SQR function
Squares, drawing
/STACK option (LINK)
Stack size,
Stack size, recursive procedures, adjusting for
Stand-alone programs,
Standard
Standard input
    defined
    reading
    redirecting
Standard I/O
    statements
Standard output
Standard places, libraries
Statement
    modification required
statement
statement
statement. See Painting
    arcs
    arguments, checking with
    AS clause
    BASIC procedures
    buffer allocation, FIELD statement
    CASE clause
    color option
    coordinates
    described
    exit from, alternative
    FIELD statement
    file numbers in
    file-access modes
    APPEND
    BINARY
    RANDOM
    flow control
    foreground color, controlling
    graphics
    animation
    images, copying to screen
    memory, copying images to
    #INCLUDE metacommand, used with
    INPUT, contrasted with INPUT
    prompting
    SHARED attribute
    prohibited
    single-line form
    SPC function
    STATIC attribute
    SUB procedure, calling
    TYPE...END TYPE, contrasted with
statement and function names
Statement block
statement, block form
statement, contrasted with
statement names
statement (non-BASIC)
statement, use in
Statements. See individual statement names
statements. See Individual statement names; individual statement names
    DEF FN
    described
    ERROR
    FOR...NEXT
    INPUT #
    KEY ON
    KEY(n)
    NAME
    ON ERROR
    ON GOSUB
    ON...GOSUB
    RESUME
    STRIG
    WAIT
    WHILE...WEND
statements and functions
    LINE INPUT #
    LSET
    PRINT #
    RSET
statements used
    CHAIN
    COMMON
#STATIC
    statement
    variables
#STATIC metacommand
    arrays, dimensioned, implicitly
    arrays, memory allocation
STATIC
    attribute
    statement
Static arrays
    ERASE statement
    #STATIC metacommand
STEP
    option
STICK function
Stop bits
STOP statement
STR$ function
STRIG function
STRIG OFF
STRIG ON statement
STRIG(n) statements
STRING
String
    expressions
    defined
    sequential files, delimiting in
    functions. See individual function names
    ASC
    CHR$
    DATE$
    HEX$
    INPUT$
    INSTR
    LCASE$
    LEFT$
    LEN
    LTRIM$
    MID$
    RIGHT$
    RTRIM$
    SADD
    SPACE$
    STR$
    STRING$
    UCASE$
    VAL
    statements. See individual statement names
    LSET
    MID$
    RSET
    variables. See Strings
string
STRING$
string ("")
STRING$ function
String, processing. See Strings
string with AS
String-handling functions, new
Strings
    alphabetizing
    characters,
    characters, retrieving
    left side
    middle
    combining
    comparing
    constants
    defined
    expressions
    fixed-length
    AS STRING
    record elements
    variable length, contrasted
    generating
    limits (table)
    numbers,
    replacing
    spaces,
    spaces, trimming
    right side
    statements and functions, summary of (table)
    substring, searching for
    variable-length
    AS
    defined
    fixed-length,
    maximum
    variables
strings
    fixed- and variable-length
structures
    FOR...NEXT
    IF...THEN...ELSE
    single-line
    looping
    SELECT CASE
styling
SUB
    procedures
    CALL
    DECLARE
    error trapping in
    event trapping in
    exit
    GOSUB, compared
    include
    #INCLUDE metacommand
    variables,
    statement
    AS clause
    described
    include files, not allowed in
    STATIC attribute
SUB procedure. See SUB procedures
SUB statement
SUB...END
Subprograms. See SUB
    CALL statement
    CALLS
    SUB statement
    variables
Subroutines. See GOSUB...RETURN subroutine
subroutines
    drawbacks in using
Subscripts
    arrays, limits (table)
    lower bound, specifying
    maximum value, specifying
    number, specifying
    upper
SuperKey,
support routines
SWAP statement
symbol
Symbol tables,
Symbolic
Symbolic constants
    CONST
    defined
    string
symbols
    asterisk (*)
    minus sign-plus sign (-+)
Syntax
Syntax Checking command, differences
syntax, contrasted with
Syntax notation
    choices
    optional
System
System calls
SYSTEM statement

T

TAB function
TAB statement
(table)
table
Text
    screen, printing on
    wrapping
Text
Text boxes, limits (table)
Tiling. See Painting
Time and date functions. See Date and time, functions
TIME$ function
TIME$ statement
TIMER
TIMER function
TIMER OFF statement
TIMER STOP statement
Timing function
TMP environment variable, LINK, used by
to
translating to
Trapping. See Error trapping, Event trapping
    errors
    events
    multiple modules
    options, command-line, required by compiler
trapping
    activating
    keys
    function
    statements and functions (table)
trapping in
Trigonometric
Trigonometric functions
    ATN
    COS
    TAN
trimming
    left side
TROFF statement
TRON statement
True expressions
TYPE command (DOS)
TYPE, contrasted with
type, declaring
TYPE statement
    described
    FIELD, contrasted with
    versions, differences among
TYPE...END
TYPE...END TYPE statement
    example
    fixed-length strings in
    random-access records, defining
Typeface
    key names
    keywords
    placeholders
    program
types
    specifying
Typographic conventions

U

UBOUND
UBOUND function
UCASE$
UCASE$ function
UEVENT
UEVENT statement
UNLOCK statement
Uppercase letters
    file names
    lowercase, converting
use of
used in BASIC (table)
User
User libraries
User-defined
    data
    events
    types
user-defined
USING
USING, changing with
using QuickBASIC with
using to circumvent
Utility, BUILDLIB

V

/V compiler option
    described
/V option (BC)
    described
    versions, differences among
VAL function
Variable aliasing
variable aliasing
Variable-length strings
    defined
    fixed-length, compared with
    GET statement
    maximum size
    PUT
Variables
    arrays
    described
    elements of, passing
    entire, passing
    automatic
    data type
    global
    described
    function
    sharing
    subprograms
    variable
    local
    described
    function definitions
    subprograms
    multiple modules, sharing
    names
    limits (table)
    program examples, format in
    procedures
    sharing
    sharing all in a module
    procedures, passing to
    programs, sharing
    simple, passing
    STATIC
    string. See Strings
    type, declaring
    values, exchanging, SWAP
variables
variables in
VARPTR$
VARPTR function
    described
    versions, differences among
VARPTR$ function
    described
VARSEG function
    described
    versions, differences among
Version differences, file compatibility
versions
VGA (Video
VIEW
View coordinates
    physical coordinates,
    WINDOW, defining with
VIEW PRINT statement
VIEW SCREEN statement
VIEW statement
Viewport
    graphics
    advantages
    VIEW,
    VIEW SCREEN, defining with
    text
viewport. See Viewport
VM.TMP file

W

/W option (BC)
    described
    versions, differences among
WAIT statement
Watch expressions, limits
Watchpoints, limits (table)
WEND statement
    described
    versions, differences among
WHILE statement
WHILE...WEND
WHILE...WEND statement
    DO...LOOP, contrasted with
    syntax
width
WIDTH
WIDTH statement
    columns, changing number of
    described
    rows,
WINDOW
WINDOW SCREEN statement, WINDOW contrasted with
WINDOW statement
    example
    GET, effect on
Windows
    error-message
    Immediate, limits (table)
    versions, differences among
with
with CLOSE
with the ASC function
WordStar keys, similarity to
Wrapping text
WRITE # statement
    described
    PRINT #, contrasted
WRITE statement

X

/X option
    described
/X option (BC)
    described
    differences among versions
XOR operator
XOR option, PUT graphics

Z

/ZD option (BC)
/ZI option (BC)
```

{% endraw %}
