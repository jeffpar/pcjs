---
layout: page
title: "Learning to Use MS QuickBASIC 4.5"
permalink: /documents/books/programming/mspl13/basic/qblearn/
redirect_from: /pubs/pc/reference/microsoft/mspl13/basic/qblearn/
---

The following document is from the [Microsoft Programmer's Library 1.3](../../) CD-ROM.

{% raw %}

```none
Microsoft QuickBASIC: Learning to Use Microsoft QuickBASIC


════════════════════════════════════════════════════════════════════════════


Microsoft(R) QuickBASIC: Learning to Use Microsoft QuickBASIC

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

    (C)Copyright Microsoft Corporation, 1988. All rights reserved.

    Simultaneously published in the U.S. and Canada.

    Printed and bound in the United States of America.

    Microsoft, MS, MS-DOS, CodeView, and GW-BASIC are registered trademarks of
    Microsoft Corporation.

    IBM is a registered trademark of International Business Machines
    Corporation.

    Intel is a registered trademark of Intel Corporation.

    Lotus and 1-2-3 are registered trademarks of Lotus Development
    Corporation.

    WordStar is a registered trademark of MicroPro International Corporation.



────────────────────────────────────────────────────────────────────────────
Contents

Introduction
            Instant Feedback
            Instant Help
            Hardware Requirements
            The QuickBASIC Package
                Printed Documentation
                On-Line Documentation
            Document Conventions
            Requesting Assistance

PART 1  GETTING STARTED

Chapter 1  Setting Up Microsoft(R) QuickBASIC
            The Setup Program
            The Setup Main Menu
            Installation
            QB Express
            Getting Into QuickBASIC
                If You Are a Novice Programmer
                If You Already Know BASIC
            If You Use a Mouse

Chapter 2  Using Menus and Commands
            Starting QuickBASIC
            The QuickBASIC Environment
                The Menu Bar
                The Reference Bar
                Opening Menus
            QuickBASIC's On-Line Help
                Using On-Line Help
                The Help Menu
            Choosing Commands
            Using Dialog Boxes
                Anatomy of a Dialog Box
                Displaying a Dialog Box
                Other Dialog-Box Features
            Issuing Commands Directly
                Shortcut Keys for Commands
                Other Key Combinations
            Exiting from QuickBASIC
            For More Information

Chapter 3  QuickBASIC's Windows
            Windows Available with Easy Menus
            The View Window
                Loading Programs in the View Window
                Moving the Cursor
                Scrolling Text
                Starting a New Program
                Changing Window Sizes
            QuickBASIC's Other Windows
                Moving between Windows
                Executing Code in the Immediate Window
                Monitoring Variables with the Watch Window
                The Help Window
                Context-Sensitive Help
                Hyperlinks
            Exiting from QuickBASIC and Saving Programs
            For More Information

Chapter 4  Interlude: BASIC for Beginners
            What is a Program?
            Comments
            Displaying Words and Numbers on the Screen
            Variables
                Storing Data in Memory
                Variable Types
                Integer Variables
                Floating-Point Variables
                String Variables
            Assigning Values to Variables
            Calculations
                Integer Division and the Remainder Operator
                Precedence of Operations
                Math Functions
            Expressions
            Displaying Variables and Expressions
            Entering Data with the INPUT Statement
            Arrays of Variables
                Declaring Arrays
                Specifying Array Elements
            Logical Relations Used in Decision-Making
                Relational Operators
                Boolean Expressions
                Compound Expressions
            Using Logical Statements to Control Program Flow
            Repeating Program Operations
                The FOR...NEXT Loop
                The DO...LOOP
                The DO WHILE Loop
                The DO UNTIL Loop
            Writing a Simple BASIC Program
            For More Information
                Books about BASIC
                Books about DOS

PART 2  HANDS ON WITH QUICKBASIC

Chapter 5  The QCARDS Program
            Building QCARDS
            Loading a Program When You Start QuickBASIC
            A Quick Tour of QCARDS
                The QCARDS Program
                Declarations and Definitions
                Comments
                Statements Following the END Statement
                Calling QCARDS Procedures from the Immediate Window
                Breaking an Unconditional Loop from QCARDS
                The Module-Level Code
                Structured Programming with Procedures
                A Profile of the Parts of the Program
                Defining a Procedure in QCARDS
            Saving Edited Text
            For More Information

Chapter 6  Editing in the View Window
            The Smart Editor
                Automatic Formatting
                Syntax Checking
                Errors Detected When You Run Your Program
                Help for Error Messages
                Overtyping the Error
                Automatic Procedure Declarations
            Working with Selected Text Blocks
                Cutting or Copying Selected Text
                Pasting a Text Block
                Manipulating Selected Text
            Searching and Replacing Text
                Defining the Symbolic Constant
                Replacing Multiple Occurrences of Text
                Checking Your Work
            For More Information

Chapter 7  Programming with On-Line Help
            Using On-Line Help to Construct Statements
                On-Line Help for Keywords
                Hyperlinks in On-Line Help
                On-Line Help for Program Symbols
            Printing Screens from On-Line Help
            For More Information

Chapter 8  Using Example Code from On-Line Help
            Copying Example Code from On-Line Help
            Indenting a Block of Code
            Copying Large Code Blocks from On-Line Help
            Editing the Block Copied from On-Line Help
            Finishing the QCARDS Code
            Using QCARDS
            For More Information

Chapter 9  Debugging While You Program
            Debugging Commands
                Debug-Menu Commands
                Debugging Commands on the Run Menu
                Function Keys Used in Debugging
            Debugging a Procedure
                Learning about Procedures
                Continuing a Suspended Program
            Isolating a Bug
            Closing the Watch Window
            Automatic Procedure Declarations
            Creating a Stand-Alone Executable File
            Learning about QuickBASIC's Other Menu Items
            For More Information

PART 3  QUICKBASIC MENUS AND COMMANDS

Chapter 10 Getting Around in QuickBASIC
            10.1  Starting QuickBASIC
                    10.1.1  The QB Command
                    10.1.2  The /NOHI Option
                    10.1.3  The QuickBASIC Screen
            10.2  Opening Menus and Choosing Commands
                    10.2.1  Keyboard Technique
                    10.2.2  Using Shortcut Keys
            10.3  Using Dialog Boxes
            10.4  Using Windows
                    10.4.1  Window Types
                    10.4.2  Splitting the View Window (Full Menus Only)
                    10.4.3  Changing the Active Window
                    10.4.4  Changing Window Size
                    10.4.5  Scrolling in the Active Window
            10.5  Using the Immediate Window
                    10.5.1  Statements Not Allowed
                    10.5.2  Doing Calculations
                    10.5.3  Testing Screen Output
                    10.5.4  Invoking Procedures
                    10.5.5  Changing the Values of Variables
                    10.5.6  Simulating Run-Time Errors
            10.6  Using the Watch Window
            10.7  Using the Mouse
            10.8  Using On-Line Help
                    10.8.1  Help Features
                    10.8.2  Hyperlinks
                    10.8.3  Moving in Help Windows
                    10.8.4  Help Files
                    10.8.5  Hard-Disk System
                    10.8.6  Removable-Disk System

Chapter 11 The File Menu
            11.1  New Program Command
            11.2  Open Program Command
                    11.2.1  Specifying a File
                    11.2.2  Listing Directory Contents
            11.3  The Merge Command (Full Menus Only)
            11.4  Save Command (Full Menus Only)
            11.5  Save As Command
            11.6  Save All Command (Full Menus Only)
            11.7  Create File Command (Full Menus Only)
            11.8  Load File Command (Full Menus Only)
            11.9  Unload File Command (Full Menus Only)
            11.10 The Print Command
            11.11 DOS Shell Command (Full Menus Only)
            11.12 Exit Command

Chapter 12 Using the Editor
            12.1  Entering Text
            12.2  Selecting Text
            12.3  Indenting text
            12.4  Using Placemarkers in Text
            12.5  The Smart Editor
                    12.5.1  When Is the Smart Editor On?
                    12.5.2  Automatic Syntax Checking
                    12.5.3  Error Messages
                    12.5.4  Automatic Formatting
            12.6  Entering Special Characters
            12.7  Summary of Editing Commands

Chapter 13 The Edit Menu
            13.1  Understanding the Clipboard
            13.2  Undo Command (Full Menus Only)
            13.3  Cut Command
            13.4  Copy Command
            13.5  Paste Command
            13.6  Clear Command (Full Menus Only)
            13.7  New SUB Command (Full Menus Only)
                    13.7.1  Creating a New SUB Procedure
                    13.7.2  Default Data Types for Procedures
                    13.7.3  Changing a Procedure's Default Type
                    13.7.4  Saving and Naming Procedures
            13.8  New FUNCTION Command (Full Menus Only)

Chapter 14 The View Menu
            14.1  SUBs Command
            14.2  Next SUB Command (Full Menus Only)
            14.3  Split Command (Full Menus Only)
            14.4  Next Statement Command (Full Menus Only)
            14.5  Output Screen Command
            14.6  Included File Command (Full Menus Only)
                    14.6.1  Nesting Include Files
                    14.6.2  Finding Include Files
            14.7  Included Lines Command

Chapter 15 The Search Menu
            15.1  Defining Target Text
            15.2  Find Command
            15.3  Selected Text Command (Full Menus Only)
            15.4  Repeat Last Find Command (Full Menus Only)
            15.5  Change Command
            15.6  Label Command (Full Menus Only)

Chapter 16 The Run Menu
            16.1  Start Command
            16.2  Restart Command
            16.3  Continue Command
            16.4  Modify COMMAND$ Command (Full Menus Only)
            16.5  Make EXE File Command
                    16.5.1  Creating Executable Files
                    16.5.2  Quick Libraries and Executable Files
                    16.5.3  Types of Executable Files
                            16.5.3.1  Programs that Use the Run-Time Module
                            16.5.3.2  Stand-Alone Programs
                    16.5.4  Run-Time Error Checking in Executable Files
                    16.5.5  Floating-Point Arithmetic in Executable Files
            16.6  Make Library Command (Full Menus Only)
                    16.6.1  Unloading and Loading Modules
                    16.6.2  Creating Libraries
            16.7  Set Main Module Command (Full Menus Only)
                    16.7.1  Changing the Main Module
                    16.7.2  The .MAK File

Chapter 17 Debugging Concepts and Procedures
            17.1  Debugging with QuickBASIC
            17.2  Preventing Bugs with QuickBASIC
            17.3  QuickBASIC's Debugging Features
                    17.3.1  Tracing (Full Menus Only)
                    17.3.2  Breakpoints and Watchpoints
                    17.3.3  Watch Expressions
                    17.3.4  Watch Window
                    17.3.5  Immediate Window
                    17.3.6  Other Debugging Features

Chapter 18 The Debug Menu
            18.1  Add Watch Command
            18.2  Instant Watch Command
            18.3  Watchpoint Command (Full Menus Only)
            18.4  Delete Watch Command
            18.5  Delete All Watch Command (Full Menus Only)
            18.6  Trace On Command (Full Menus Only)
            18.7  History On Command (Full Menus Only)
                    18.7.1  History Back
                    18.7.2  History Forward
            18.8  Toggle Breakpoint Command
            18.9  Clear All Breakpoints Command
            18.10 Break on Errors Command (Full Menus Only)
            18.11 Set Next Statement Command

Chapter 19 The Calls Menu (Full Menus Only)
            19.1  Using the Calls Menu
            19.2  Active Procedures

Chapter 20 The Options Menu
            20.1  Display Command
            20.2  Set Paths Command
            20.3  Right Mouse Command (Full Menus Only)
            20.4  Syntax Checking Command(Full Menus Only)
            20.5  Full Menus Command

Chapter 21 The Help Menu
            21.1  Index Command
            21.2  Contents Command
            21.3  Topic Command
            21.4  Help On Help Command

Glossary

Figures
            Figure 2.1  QuickBASIC Invocation Screen
            Figure 2.2  The File Menu
            Figure 2.3  Help Dialog Box for the Help Menu
            Figure 2.4  Open Program Dialog Box
            Figure 2.5  Display Dialog Box
            Figure 2.6  Help on Output Screen Command
            Figure 3.1  Windows Available with Easy Menus
            Figure 3.2  Open Program Dialog Box
            Figure 3.3  Output Screen for Code Lines
            Figure 3.4  Immediate Window Showing Lines Just Entered
            Figure 3.5  Placing Variables in the Watch Window
            Figure 3.6  QuickSCREEN for PRINT Statement
            Figure 3.7  Example Screen for PRINT Statement
            Figure 3.8  Save As Dialog Box
            Figure 4.1  Addresses in Memory
            Figure 4.2  Array Created by the BASIC Statement DIM Price (4)
            Figure 5.1  QCARDS' Interface
            Figure 5.2  Modules and Procedures
            Figure 5.3  SUBs Dialog Box
            Figure 5.4  Save As Dialog Box
            Figure 6.1  Error-Message Dialog Box
            Figure 6.2  Error Message
            Figure 6.3  Help on Error Message
            Figure 6.4  Find Dialog Box
            Figure 6.5  Change Dialog Box
            Figure 6.6  Change, Skip, Cancel Dialog Box
            Figure 7.1  QuickSCREEN for IF...THEN...ELSE Statement
            Figure 7.2  Symbol Help for CardNum
            Figure 7.3  Instant Watch Dialog Box
            Figure 7.4  Print Dialog Box (Help)
            Figure 8.1  Example Screen for DO...LOOP Statement
            Figure 8.2  QuickSCREEN for SELECT CASE Statement
            Figure 8.3  Code Showing Call to AsciiKey Procedure
            Figure 9.1  Selecting the SELECT CASE Choice$ Block
            Figure 9.2  DirectionKey Procedure in View Window
            Figure 9.3  Restart Program Error Message
            Figure 9.4  Setting a Breakpoint
            Figure 9.5  Symbol Help for Symbolic Constant HOME
            Figure 9.6  Error in Naming Symbolic Constant for the ENV
            Key
            Figure 9.7  Make EXE File Dialog Box
            Figure 10.1 Top Half of QuickBASIC Invocation Screen
            Figure 10.2 Bottom Half of QuickBASIC Invocation
            Screen
            Figure 10.3 The File Menu
            Figure 10.4 Load File Dialog Box
            Figure 10.5 Display Dialog Box
            Figure 10.6 QuickBASIC Screen with Five Windows Open
            Figure 10.7 Immediate Window
            Figure 10.8 Simulated Run-Time Error
            Figure 10.9 Watch Window
            Figure 10.10 Help on the PRINT Statement
            Figure 10.11 Dialog Box for Missing Help File
            Figure 11.1 Open Program Dialog Box
            Figure 11.2 Merge Dialog Box
            Figure 11.3 Save Dialog Box
            Figure 11.4 Create File Dialog Box
            Figure 11.5 Load File Dialog Box
            Figure 11.6 Unload File Dialog Box
            Figure 11.7 Print Dialog Box
            Figure 11.8 Exit Dialog Box
            Figure 12.1 Syntax Error Message
            Figure 12.2 Initial Help Screen on the OPEN Keyword
            Figure 13.1 New SUB Dialog Box
            Figure 13.2 New FUNCTION Dialog Box
            Figure 14.1 New SUBs Dialog Box
            Figure 14.2 Move Dialog Box
            Figure 15.1 Find Dialog Box
            Figure 15.2 Change Dialog Box
            Figure 15.3 Change, Skip, Cancel Dialog Box
            Figure 15.4 Label Dialog Box
            Figure 16.1 Modify COMMAND$ Dialog Box
            Figure 16.2 Make EXE File Dialog Box
            Figure 16.3 Make Library Dialog Box
            Figure 16.4 Set Main Module DIalog Box
            Figure 18.1 Add Watch Dialog Box
            Figure 18.2 Instant Watch Dialog Box
            Figure 18.3 Watchpoint Dialog Box
            Figure 18.4 Delete Watch Dialog Box
            Figure 19.1 Sequence of Procedures on Calls Menu
            Figure 20.1 Display Dialog Box
            Figure 20.2 Set Paths Dialog Box
            Figure 20.3 Right Mouse Dialog Box
            Figure 21.1 Index Entries for Help
            Figure 21.2 Table of Contents for Help
            Figure 21.3 Help on the FOR...NEXT Statement
            Figure 21.4 Help on Help Screen

Tables
            Table 10.1  QuickBASIC Shortcut Keys
            Table 10.2  Scrolling
            Table 10.3  Mouse Commands
            Table 10.4  Help Keys
            Table 12.1  QuickBASIC Indentation Controls
            Table 12.2  Editing Commands
            Table 15.1  Search Options
            Table 15.2  Search Restrictions
            Table 17.1  Additional Debugging Features

QCARDS Code Entries
            QCARDS Code Entry 1
            QCARDS Code Entry 2
            QCARDS Code Entry 3
            QCARDS Code Entry 4
            QCARDS Code Entry 5
            QCARDS Code Entry 6
            QCARDS Code Entry 7
            QCARDS Code Entry 8
            QCARDS Code Entry 9
            QCARDS Code Entry 10
            QCARDS Code Entry 11
            Optional QCARDS Code Entry 1
            Optional QCARDS Code Entry 2
            Optional QCARDS Code Entry 3
            QCARDS Code Entry 12
            QCARDS Code Entry 13
            QCARDS Code Entry 14
            QCARDS Code Entry 15
            QCARDS Code Entry 16
            QCARDS Code Entry 17
            QCARDS Code Entry 18
            QCARDS Code Entry 19
            QCARDS Code Entry 20
            QCARDS Code Entry 21
            QCARDS Code Entry 22
            Optional QCARDS Code Entry 4
            QCARDS Code Entry 23
            QCARDS Code Entry 24
            QCARDS Code Entry 25
            QCARDS Code Entry 26
            QCARDS Code Entry 27
            QCARDS Code Entry 28
            QCARDS Code Entry 29
            QCARDS Code Entry 30



────────────────────────────────────────────────────────────────────────────
Introduction

    Microsoft(R) QuickBASIC is a programming environment that includes all the
    tools you need for writing, editing, running, and debugging programs.
    These tools are integrated with a powerful version of the BASIC
    programming language and an on-line help system that explains everything
    about both the environment and the language.


Instant Feedback

    Microsoft QuickBASIC speeds your programming and learning by giving
    virtually instant feedback for your ideas. When you write a program, you
    enter "code" (sequences of QuickBASIC statements) that describe what you
    want the program to do. QuickBASIC checks the validity of each line as you
    enter it, then immediately translates your code into a form the computer
    can execute. If your code contains errors that make it impossible to
    translate, QuickBASIC specifies the error and helps you correct it. As
    soon as your code is correct, you can press a key and immediately run it.
    If your code doesn't run as you expect, you can use QuickBASIC's
    sophisticated debugging tools to track and correct flaws in your code's
    logic.You get the speed and power of a compiled language without the
    tedious cycles of separate editing, compiling, running, and debugging.


Instant Help

    Microsoft QuickBASIC's on-line help system includes two parts. The
    Microsoft QB Advisor contains explanations and runnable examples of every
    statement in the QuickBASIC language. Also, you can get on-line help for
    every aspect of the QuickBASIC environment, all symbols you define in your
    program, and error messages.

    In this manual you will see how to get information on the following with
    on-line help:

    ■ QuickBASIC statements and functions

    ■ Menu and dialog-box items and options

    ■ Special keys and key combinations for editing and debugging

    ■ How to correct errors in your program

    ■ Symbols you define in your programs


Hardware Requirements

    Microsoft QuickBASIC requires an IBM Personal Computer or IBM(R)-PC
    compatible with at least 384 kilobytes (K) of available memory and a
    minimum of 720K disk-drive capacity. A hard disk and 640K of memory are
    recommended for best performance.

    The QuickBASIC environment fully supports any mouse that is compatible
    with the Microsoft Mouse. See Section 10.7 for complete information on
    using your mouse with QuickBASIC.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    Throughout this manual, the term "DOS" refers to both the MS-DOS(R) and
    IBM Personal Computer DOS operating systems. The name of a specific
    operating system is used when it is necessary to note features that are
    unique to that system.
    ──────────────────────────────────────────────────────────────────────────


The QuickBASIC Package

    The Microsoft QuickBASIC package includes two manuals, an extensive
    on-line help system, example programs, and other on-line documentation.
    The next sections describe the contents of the package.

Printed Documentation

    Your Microsoft QuickBASIC package includes two manuals. This manual
    discusses the QuickBASIC programming environment. The first two parts are
    a tutorial on how to use QuickBASIC. The last part is a reference on
    QuickBASIC menus and commands. The following list describes these parts in
    more detail:

    Part                     Content
    ──────────────────────────────────────────────────────────────────────────
    "Getting Started"       General description of how to use QuickBASIC and
                            a brief introduction to BASIC programming.

    "Hands On with           Tutorial introduction to the Easy-Menus version
    QuickBASIC"             of the QuickBASIC environment. The tutorial gives
                            you practice with editing, debugging, and on-line
                            help and guides you in creating your first
                            QuickBASIC application, QCARDS.BAS.

    "QuickBASIC Menus and    Reference to the QuickBASIC environment that
    Commands"               presents detailed information on each command on
                            QuickBASIC's Full Menus. Full Menus provide the
                            complete multiple-module functionality of
                            QuickBASIC. Use this section to extend your
                            knowledge after you feel comfortable with the
                            fundamentals of QuickBASIC.

    "Glossary"              Definitions of terms used in the documentation.
    ──────────────────────────────────────────────────────────────────────────

    This manual provides the following information that you'll need to begin
    programming with QuickBASIC:

    ■ The QuickBASIC environment

    ■ The QuickBASIC implementation of the BASIC language

    ■ The principles of programming

    If you are new to programming, new to the BASIC language, or both, you
    will need to learn the environment, the QuickBASIC version of the BASIC
    language, and general programming skills. You should begin with Chapters
    1-4 in Part 1, "Getting Started." If you already know how to program in
    BASIC, you should be able to get right to programming after reading
    Chapters 1-3 in Part 1.

    In the tutorial in Part 2, "Hands On with QuickBASIC," you will practice
    using some of the QuickBASIC environment's most exciting features. You'll
    use the sophisticated editor, on-line help, and debugging features. When
    you finish the tutorial, you will have built a useful database application
    program, QCARDS.BAS.

    The QuickBASIC package includes another manual, Programming in BASIC,
    which discusses the following:

    ■ Specific, practical programming topics, each illustrated by extensive
    programming examples

    ■ The action and syntax of each QuickBASIC statement and function with
    tables listing the statements and functions by task groups

    ■ Information on topics such as converting interpreted BASIC programs to
    run in QuickBASIC, changes in Version 4.5 from previous versions of
    QuickBASIC, and compiling and linking from DOS

    Use Programming in BASIC for in-depth information on programming topics
    and a synopsis of the BASIC language.

On-Line Documentation

    Microsoft QuickBASIC includes comprehensive on-line help and several disk
    files that provide supplementary information and programming examples.
    These are described in the following list:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Documentation            Purpose
    ──────────────────────────────────────────────────────────────────────────
    On-Line Help             All information needed for programming in
                            QuickBASIC. When you use help commands within the
                            environment, QuickBASIC searches several files to
                            provide the information.

                            The file QB45QCK.HLP includes summaries and
                            syntax descriptions of each QuickBASIC statement
                            and function. The file QB45ADVR.HLP contains
                            comprehensive information on using each statement
    Documentation            Purpose
    ──────────────────────────────────────────────────────────────────────────
                            comprehensive information on using each statement
                            and function, including example code you can copy
                            and run. The file QB45ENER.HLP has explanations
                            of all environment menus, commands, dialog boxes,
                            and error messages.

    README.DOC               A file describing changes to QuickBASIC that
                            occurred after the manuals were printed.

    PACKING.LST              A file describing each file on the QuickBASIC
                            distribution disks.

    LEARN.COM                Microsoft QB Express, a computer-based training
                            program that gives an overview of QuickBASIC.

    Sample programs          All the programs from Programming in BASIC. Check
                            the file called PACKING.LST to locate them. Other
                            sample programs are also included. Many
                            demonstrate advanced programming techniques and
    Documentation            Purpose
    ──────────────────────────────────────────────────────────────────────────
                            demonstrate advanced programming techniques and
                            algorithms.
    ──────────────────────────────────────────────────────────────────────────



Document Conventions

    This manual uses the following document conventions:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Example of Convention    Description
    ──────────────────────────────────────────────────────────────────────────
    QB.LIB, ADD.EXE, COPY,   Uppercase (capital) letters indicate file names
    LINK, /X                 and DOS-level commands. Uppercase is also used
                            for command-line options (unless the application
                            accepts only lowercase).

    SUB, IF, LOOP, PRINT,    Bold capital letters indicate language-specific
    Example of Convention    Description
    ──────────────────────────────────────────────────────────────────────────
    SUB, IF, LOOP, PRINT,    Bold capital letters indicate language-specific
    WHILE, TIME$             keywords with special meaning to Microsoft BASIC.
                            Keywords are a required part of statement syntax,
                            unless they are enclosed in double brackets as
                            explained below. In programs you write, you must
                            enter keywords exactly as shown. However, you can
                            use uppercase letters or lowercase letters.

    CALL Proc(arg1!, var2%)  This kind of type is used for program examples,
                            program output, words you should type in, and
                            error messages within the text.

    CONST FALSE  =  0        A column of three dots indicates that part of the
    .                      example program has been intentionally omitted.
    .
    .
    CHAIN "PROG1"
    END

    Example of Convention    Description
    ──────────────────────────────────────────────────────────────────────────

    ' Make one pass          The apostrophe (single right quotation mark)
                            marks the beginning of a comment in sample
                            programs.

    filespec                 Italic letters indicate placeholders for
                            information, such as a file name, that you must
                            supply. Italics are also occasionally used in the
                            text for emphasis.

    [[optional-item]]        Items inside double square brackets are optional.

    ALT+F1                   Capital letters are used for the names of keys
                            and key sequences, such as ENTER and CTRL+R.

                            A plus (+) indicates a combination of keys. For
                            example, CTRL+E means to hold down the CTRL key
                            while pressing the E key.

    Example of Convention    Description
    ──────────────────────────────────────────────────────────────────────────

                            The carriage-return key, sometimes marked with a
                            bent arrow, is referred to as ENTER.

                            The cursor movement ("arrow") keys on the numeric
                            keypad are called DIRECTION keys. Individual
                            DIRECTION keys are referred to by the direction
                            of the arrow on the key top (LEFT, RIGHT, UP,
                            DOWN) or the name on the key top (PGUP, PGDN).

                            The key names used in this manual correspond to
                            the names on the IBM Personal Computer keys.
                            Other machines may use different names.

    "defined term"           Quotation marks usually indicate a new term
                            defined in the text.

    Video Graphics Array     Acronyms are usually spelled out the first time
    (VGA)                    they are used.
    Example of Convention    Description
    ──────────────────────────────────────────────────────────────────────────
    (VGA)                    they are used.
    ──────────────────────────────────────────────────────────────────────────


    The following syntax block shows how some of these document conventions
    are used in this manual:

    GET[[#]] filenumber [[,[[recordnumber]][[,variable]]]]
    .
    .
    .
    PUT[[#]] filenumber [[,[[recordnumber]][[,variable]]]]


Requesting Assistance

    If you feel you have discovered a problem in the software, please report
    the problem using the Product Assistance Request form at the back of this
    manual.

    If you have comments or suggestions regarding any of the manuals
    accompanying this product, please use the Documentation Feedback form at
    the back of this manual.



────────────────────────────────────────────────────────────────────────────
PART 1  GETTING STARTED
────────────────────────────────────────────────────────────────────────────

    Part 1, "Getting Started," introduces you to the Microsoft QuickBASIC
    environment, then moves on to an introductory discussion on BASIC
    programming. Each major feature of the environment is explained, then
    demonstrated in a brief hands-on exercise. Each chapter ends with a
    section specifying where you can look for more information on each of the
    topics discussed.

    Chapter 1 guides you through installation of QuickBASIC, using the SETUP
    program provided.

    Chapters 2 and 3 introduce you to working with QuickBASIC's Easy Menus,
    dialog boxes, and windows.

    Chapter 4 introduces the BASIC language for novice programmers. Be sure
    you understand everything in this chapter before moving ahead. If you have
    programmed in another language this chapter should provide all you need to
    complete Part 2, "Hands On with QuickBASIC," and start using QuickBASIC
    to write your own programs. If you are new to programming, you may want to
    consult some of the books on BASIC listed at the end of the chapter.



────────────────────────────────────────────────────────────────────────────
Chapter 1  Setting Up Microsoft(R) QuickBASIC

    Your Microsoft QuickBASIC package includes the file SETUP.EXE (on the
    Setup/Microsoft QB Express disk). This program automates installation of
    QuickBASIC, and lets you choose display options to install or update files
    required by QuickBASIC and your hardware.

    This chapter discusses

    ■ Installing Microsoft QuickBASIC

    ■ Using Microsoft QB Express

    ■ Exploring QuickBASIC, depending on your experience level


The Setup Program

    If you do not have a hard disk, be sure you have five formatted, 360K
    removable disks (or an equivalent amount of space on disks of other
    sizes). If you have a hard disk, you need 1.8 megabytes of space available
    to install all QuickBASIC files. To start SETUP

    ►  Place the Setup/Microsoft QB Express disk in your disk drive, and type
        setup at the DOS prompt.

    Each screen in the SETUP program contains the following:

    ■ An explanation of the current screen or the following screen.

    ■ The Setup menu, which you use to choose what you want to do next.
    Generally, the Setup menu on each screen lets you continue, go back a
    screen, examine the options you've chosen, or return to the starting
    screen. To move within the menu and make choices, use the DIRECTION
    keys, then press ENTER when your choice is highlighted.

    ■ A prompt at the bottom of the screen tells you how to move on to the
    next step.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    If you make a mistake when installing QuickBASIC with SETUP, you can go
    back to any previous point and start again from there. You can run SETUP
    as many times as you like.
    ──────────────────────────────────────────────────────────────────────────


The Setup Main Menu

    The items on the Setup Main menu allow you to choose the defaults for all
    options (Easy Setup) and customize the options you choose during setup
    (Full Setup).

    If you are a novice programmer, you should choose Easy Setup. As you learn
    more about QuickBASIC, you can reset these options from within the
    environment without running SETUP again.

    If you are an experienced programmer, Full Setup lets you tailor the
    appearance and certain behaviors of QuickBASIC. Chapter 20, "The Options
    Menu," describes how QuickBASIC handles the search paths and colors you
    choose during setup. (They correspond to the Options menu's Display and
    Set Paths commands.)

    Whether you choose Easy or Full Setup, use the Show Options menu command
    to look at the final settings before completing the installation.


Installation

    After you have decided about options, choose Perform Installation from the
    menu to begin automated installation. QuickBASIC prompts you for each disk
    you need to insert in your disk drive as installation progresses.

    If you have a hard disk, QuickBASIC places the files you need in the
    directories specified in either the Easy Setup or Full Setup options. If
    the directories don't already exist, QuickBASIC creates the directories
    you specify on your hard disk.

    If you do not have a hard disk, you must start the installation phase with
    five formatted removable disks. QuickBASIC prompts you when to install
    each disk. You might want to label the disks, using the same names as
    appear on the original disks.


QB Express

    After installation is complete, return to the Main Setup menu. Even if
    you've used QuickBASIC before, you should choose Exit and Run QB Express
    from the main menu. Microsoft QB Express, a brief computer-based training
    program, introduces the QuickBASIC environment and gives you some practice
    in the things you'll do when you fire up QuickBASIC itself. If you've used
    QuickBASIC before, QB Express alerts you to Version 4.5 enhancements to
    the environment.


Getting Into QuickBASIC

    QuickBASIC is a superb environment in which to learn programming, but it
    is not specifically designed as a "learn to program" environment.
    QuickBASIC provides all the tools you need for programming──editing,
    debugging, and on-line help──plus a powerful version of the BASIC
    language.

    Chapters 2-9 of this book are a tutorial on QuickBASIC. A typewriter icon
    marks all the practice exercises.

If You Are a Novice Programmer

    In learning to use QuickBASIC, you need to distinguish between the tools
    provided by the environment, and the language itself. The best way to
    acquaint yourself with the environment is by reading Chapter 2, "Using
    Menus and Commands," and Chapter 3, "QuickBASIC's Windows." Then, try
    Chapter 4, "Interlude: BASIC for Beginners," which should give you enough
    perspective on BASIC programming to complete Part 2, "Hands On with
    QuickBASIC."

    Part 2, "Hands On with QuickBASIC," is a tutorial that introduces you to
    editing, using on-line help, and debugging in the context of an extended
    program example. In a series of exercises, you will complete the coding of
    QCARDS.BAS, a real application program. Each of these chapters takes one
    to two hours to complete.

    Although "Hands On with QuickBASIC" is not a tutorial on programming,
    QCARDS.BAS provides a good model of program structure. You can also use
    the code from QCARDS in other programs you write. But remember, the
    purpose of the QCARDS tutorial is to teach you quickly how to use the
    tools in the QuickBASIC environment.

    You don't have to understand all the programming techniques to type in the
    QCARDS code. To learn more about programming, read some of the BASIC
    programming texts listed at the end of Chapter 4, "Interlude: BASIC for
    Beginners." Programming in BASIC, included with this package, presents
    extended examples and explanations of selected programming topics.

If You Already Know BASIC

    If you are already familiar with BASIC, you should be able to move quickly
    through Chapter 2, "Using Menus and Commands," and Chapter 3,
    "QuickBASIC's Windows," which teach the fundamentals of menus and windows,
    and opening, clearing, and saving files. You can skip Chapter 4
    completely and move right to Part 2, "Hands On with QuickBASIC," to learn
    the use of QuickBASIC's advanced editing, on-line help, and debugging
    features. Even if you have used a previous version of QuickBASIC, you may
    find some new programming techniques in QCARDS.BAS, the example program
    you will build as you practice advanced environment features. The comments
    in the QCARDS code explain how the program works. If the comments do not
    provide enough information, the programming techniques are discussed in
    Programming in BASIC.


If You Use a Mouse

    QuickBASIC fully supports pointing devices that are compatible with the
    Microsoft Mouse. See Section 10.7 for complete information on using
    QuickBASIC with a mouse.



────────────────────────────────────────────────────────────────────────────
Chapter 2  Using Menus and Commands

    This chapter teaches you how to start Microsoft QuickBASIC and use the
    Easy Menus. A "menu" is a list of commands. In QuickBASIC, you can choose
    between two sets of menus──Easy Menus and Full Menus. Easy Menus, which
    you'll work with here, contain all the commands a novice programmer needs
    to use QuickBASIC. Part 3, "QuickBASIC Menus and Commands" describes the
    advanced commands on the Full Menus.

    When you have completed this chapter, you'll know how to

    ■ Open and use menus and dialog boxes

    ■ Consult QuickBASIC's on-line help to answer questions

    ■ Use function keys and shortcut-key combinations

    This chapter will take one to one and one-half hours to complete.


Starting QuickBASIC

    Start QuickBASIC now:

    1. Type qb at the DOS prompt. The QuickBASIC screen appears.

    2. Press ENTER to display essential information about the QuickBASIC
        environment. You can use PGUP and PGDN to move around in this text.

    3. Press ESC to clear this information from the screen.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    If your computer has a monochrome or liquid-crystal display, or if you
    use a Color Graphics Adapter (CGA) with a black-and-white monitor, see
    Sections 10.1.1, "The QB Command," and 10.1.2, "The /NOHI Option," for
    additional QB invocation options.
        If you start QuickBASIC with the /nohi or /b /nohi option, what are
        referred to as high-intensity letters in this manual may have a
        different appearance.
    ──────────────────────────────────────────────────────────────────────────


The QuickBASIC Environment

    QuickBASIC's programming tools are instantly available. They include
    features for program organization, editing, syntax checking, file
    management, printing, and debugging──even customizing the colors of the
    environment.

The Menu Bar

    The menus on the menu bar at the top of the QuickBASIC screen contain the
    QuickBASIC environment commands (see Figure 2.1). You'll use them as you
    write and modify programs in the View window.


    Menu bar                    Title bar        Scroll bars    View window
    │                               │                ││            │
        File  Edit  View  Search  Run │Debug  Options  ││            │    Help
    ┌┬─────────────────┬────────────└ Untitled ───────┼┼────────────┼─────┤↑├──
    ││ New Program     │                              ││            │
    ││ Open Program... │                              ││            │
    ││ Save As...      │                              ││
    │├─────────────────┤                              ││
    ││ Print...        │                              │└───────────────────────
    │├─────────────────┤                              │
    ││ Exit            │                              │
    │└─────────────────┘                              │
    │                                                 │
    │                                                 │
    │                                                 │
    │                                                 │
    │                                                 │
    │←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒→
    ├─────────────────────────────── Immediate ────────────────────────────────
    │
    │                  │
    F1=Help    Removes│currently loaded program from memory       CN 00001:001
            │         │                                         └─┬─┘└───┬───┘
    Reference bar    Immediate            CAPS LOCK and────────────┘   Row and
                    window              NUM LOCK indicators  column indicator

    Figure 2.1  QuickBASIC Invocation Screen

The Reference Bar

    The reference bar at the bottom of the screen tells which keys to press to
    perform important actions (see Figure 2.1). As you work on a program, the
    reference bar updates information about the environment and your program.
    When a command is highlighted, the reference bar briefly describes how to
    use the command. Row and column counters indicate where you are in your
    program, and CAPS LOCK and NUM LOCK indicators tell how your keyboard is
    set.

Opening Menus

    You can execute most QuickBASIC commands by choosing them from the menus.
    When you press the ALT key, QuickBASIC highlights the file menu, and one
    letter in each menu name appears in high-intensity video. To open a menu,
    press the ALT key, then press the key corresponding to the high-intensity
    letter in the menu name.

    You can open the menus and move among them using the DIRECTION keys (the
    UP, DOWN, LEFT, and RIGHT arrow keys) .

    To open a menu

    1. Press ALT to select the File menu.

        When you "select" (highlight) a menu, its name is shown in a
        reverse-video block. If you press ALT again, the menu name loses the
        highlight.

    2. Press ENTER to open the File menu (see Figure 2.2).


        ┌───────┐
        │ File  │
        ├───────┴──────────┐
        │ New Program      │
        │ Open Program...  │
        │ Save As...       │
        ├──────────────────┤
        │ Print...         │
        ├──────────────────┤
        │ Exit             │
        └──────────────────┘

        Figure 2.2  The File Menu

    ■ Press the UP or DOWN key to select successive commands in an open
        menu.

    ■ Press the RIGHT or LEFT key to open adjacent menus.

    3. Press ESC to close the menu without executing a command. The cursor
        returns to the View window, the part of the screen where you edit your
        program. You can always back out of any situation by pressing ESC.


QuickBASIC's On-Line Help

    If you need additional information about menus or other QuickBASIC
    features, consult on-line help. You can get help on BASIC keywords, the
    elements of the language, the QuickBASIC environment, and error messages.

Using On-Line Help

    There are several ways to get on-line help in QuickBASIC. For help on menu
    names or commands, select the name or command, then press F1. If you want
    help on any part of a program, place the cursor within the word, then
    press F1.

    To move around in on-line help, do the following:

    ■ Press PGDN to see additional screens.

    ■ Press PGUP to move back through screens you have already seen.

    ■ Press ESC to cancel on-line help.

    If you need more information on using any on-line help function, hold down
    the SHIFT key while pressing F1 for a general description of on-line help.

The Help Menu

    Most on-line help is available through the Help menu. Try this to use
    on-line help:

    1. Press ALT to select the File menu without opening it.

    2. Press LEFT to select the Help menu.

    3. Press F1. On-line help displays the information shown in Figure 2.3
        about the Help menu:


        ┌──────────────────────── HELP:  Help Menu ─────────────────────┐
        │ ┌───────────────────────────────────────────────────────────┐ │
        │ │ Use the Help menu to display:                             │ │
        │ │     ■ a list of BASIC language keywords                   │ │
        │ │     ■ a list of general topics about QuickBASIC and the   │ │
        │ │       BASIC programming language                          │ │
        │ │     ■ detailed, context-sensitive information on the      │ │
        │ │       program item shown in a topic cursor                │ │
        │ │                                                           │ │
        │ │ To use the Help menu commands now                         │ │
        │ │     1. Press ESC to return to the Help menu               │ │
        │ │     2. Use the DIRECTION keys to select (highlight) a     │ │
        │ │        command                                            │ │
        │ │     3. Press ENTER to execute the command                 │ │
        │ └───────────────────────────────────────────────────────────┘ │
        ├───────────────────────────────────────────────────────────────┤
        │                          <  OK  >                             │
        └───────────────────────────────────────────────────────────────┘

        Figure 2.3  Help Dialog Box for the Help Menu

    4. Press ENTER when you finish reading the text.

    5. Press DOWN to open the Help menu.

    You can get help with each of the items on the Help menu by moving the
    highlight among the commands with the DIRECTION keys, and pressing F1 for
    explanations.

    If there is no on-line help available for the current item, or if the
    necessary help file is unavailable, QuickBASIC either displays a message,
    beeps, or both.

    The Help menu has the following commands:

    Command                  Action
    ──────────────────────────────────────────────────────────────────────────
    Index                    Displays an alphabetical listing of all
                            QuickBASIC keywords. Place the cursor on a
                            keyword and press F1 to get help on that keyword.

    Contents                 Displays a visual outline of the on-line help's
                            contents. For detailed information on any
                            category listed, place the cursor on the category
                            and press F1.

    Topic                    Displays help for any word at the cursor
                            position. If there is a word at the cursor
                            position, it appears in the Help menu following
                            the Topic command. If there is no word at the
                            cursor position, the Topic command is inactive.

    Help on Help             Explains how to use on-line help.

    ──────────────────────────────────────────────────────────────────────────


Choosing Commands

    To "choose" (execute) a command, select the command by pressing the UP or
    DOWN key, then press ENTER or the high-intensity letter in the command
    name. (If a command has no high-intensity letter, it is not currently
    available for you to use.)

    If a command is followed by three dots (...), a dialog box (description to
    follow) appears when you choose the command. Commands not followed by dots
    execute immediately when you choose them.

    To learn more about a command before choosing it, press F1 for on-line
    help. After you read the help information, press ESC to clear help, then
    press ENTER if you want to choose the command. Try the following steps:

    1. Press ALT, then press O to select the Options menu.

        This key combination opens the Options menu. In this manual,
        combinations of keys are written as key names connected with a plus
        sign. The sequence above is usually shown as ALT+O.

    2. Press DOWN until Full Menus is highlighted.

    3. Press F1 to display on-line help while Full Menus is selected.

    4. Press ESC to clear on-line help.

    5. Press ENTER to turn off Full Menus if the bullet (■) is present. Press
        ESC to close the Options menu without executing any of its commands if
        Full Menus does not have a bullet.

        The Full Menus command is a "toggle." If it is on (that is, if it has a
        bullet), then choosing it turns it off. If it is off (no bullet),
        choosing it turns it on.

    6. Press ALT+O to open the Options menu again. Make sure there is no
        bullet beside Full Menus, then press ESC to close the menu.

    You only need to use DIRECTION keys when you want help with a command. If
    you don't need help, just choose commands by pressing the letter
    corresponding to the high-intensity letter in the command name.


Using Dialog Boxes

    A "dialog box" appears when you choose any menu command followed by three
    dots (...). QuickBASIC uses dialog boxes to prompt you for information it
    needs before executing a command. Dialog boxes also appear when you

    ■ Enter a line of code containing a syntax error

    ■ Run a program that contains an error

    ■ Choose the Help command button in a dialog box

    ■ Request help for a menu or menu command

    ■ Try to end a session without saving your work

Anatomy of a Dialog Box

    Dialog boxes include several devices you can use to give QuickBASIC
    information (see Figure 2.4).


                    ┌─Text box                ┌─List boxes
                    │                         │
                    │                         │
                    │                         │
    ┌───────────────┼────── Open Program ─────┼───────────────────┐
    │              ┌┴─────────────────────────┼─────────────────┐ │
    │   File Name: │*.bas                     │                 │ │
    │              └──────────────────────────┼─────────────────┘ │
    │                                         │                   │
    │   C:\QB4.5\DEMO                         │                   │
    │                  Files               ┌──┴──┐Dirs/Drives     │
    │  ┌────────────────────────────────────┐   ┌───────────────┐ │
    │  │ATEST.BAS      REMLINE.BAS          │   │┌──┐           ↑ │
    │  │BL.BAS         SORTDEMO.BAS         │   │ ∙∙            ░ │
    │  │DEMO1.BAS      TEST.BAS             │   │SOURCE         ░ │
    │  │DEMO2.BAS      TORUS.BAS            │   │[-A-]          ░ │
    │  │DEMO3.BAS      VARHELP.BAS          │   │[-B-]          ░ │
    │  │DEMO4.BAS      VARHELPZ.BAS         │   │[-C-]          ░ │
    │  │HISTOGRM.BAS                        │   │               ░ │
    │  │QBFORMAT.BAS                        │   │               ░ │
    │  │QCARDS.BAS                          │   │               ↓ │
    │  └←░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░→┘   └───────────────┘ │
    ├─────────────────────────────────────────────────────────────┤
    │       <  OK  >         <  Cancel  >         <  Help  >      │
    └──────────┼───────────────────┼───────────────────┼──────────┘
                └────────┬──────────┴───────────────────┘
                        └Command buttons

    Figure 2.4  Open Program Dialog Box

    The following list explains how to use these devices:

    Device                   Description
    ──────────────────────────────────────────────────────────────────────────
    Text box                 Type text, such as a file name, here

    List box                 Select one item from a group of listed items

    Command button           Use to confirm entries, get help, or escape from
                            the dialog box
    ──────────────────────────────────────────────────────────────────────────

Displaying a Dialog Box

    When you first open a dialog box, it contains "default" settings──the
    settings people use most often. After that, when you display a dialog box,
    it reflects the choices you made the last time the box was displayed. The
    angle brackets on the default command button appear in high intensity.
    When you press ENTER, the default command button is chosen. You can use
    ALT key combinations or TAB to move around in a dialog box.

    Follow these steps to open and examine the File menu's Open Program dialog
    box:

    1. Press ESC to close the Options menu if it is still open.

    2. Press ALT+F, then press O to choose the File menu's Open Program
        command.

        The Open Program dialog box (shown in Figure 2.4) appears. It lets you
        load programs from disk files into the View window.

    3. Press F1 to choose the Help command button.

        A help dialog box opens on top of the Open Program dialog box. You can
        use DIRECTION keys to move through the help text.

    4. Press ESC to clear the help dialog box and return the cursor to the
        Open Program dialog box.

    5. Press ALT to turn on the high-intensity letters you can use in
        combination with the ALT key.

    6. Press TAB to move the cursor into the Files list box.

        If there are numerous entries in the list box, you can move among them
        either by pressing DIRECTION keys or the initial letter of the item you
        wish to select.

    7. Press TAB or ALT+D to move the cursor to the Dirs/Drives list box.

    8. Press ESC to close the dialog box without opening a program.

Other Dialog-Box Features

    Other dialog-box features include option buttons and check boxes. You'll
    use these features in the Options menu's Display dialog box (see Figure
    2.5) to change options──such as screen colors, scroll bars, and the
    distance between tab stops──chosen when you installed QuickBASIC.


    ┌──Option buttons.
    │  Move between them                             ┌List boxes.
    │  with UP or DOWN key.                          │Select one item.
    │                                                │
    │ ┌──────────────────────── Display ─────────────┼────────────────┐
    │ │ ┌─────────────────────── Colors ─────────────├──────────────┐ │
    │ │ │                                Foreground  │ Background   │ │
    │ │ │                                         ┌──┴──┐           │ │
    │ │ │ ┌                              ┌─────────┐   ┌─────────┐  │ │
    │ │ │ │ (∙) 1.  Normal Text          │ Black   ↑   │ Black   ↑  │ │
    │ │ │ │                              │ White   ░   │ White   ░  │ │
    └─┼─┼─┤ ( ) 2.  Current Statement    │ Gray    ░   │ Gray    ░  │ │
    │ │ │                              │ BrWhite ░   │ BrWhite ░  │ │
    │ │ │ ( ) 3.  Breakpoint Lines     │         ░   │         ░  │ │
    │ │ └                              │         ↓   │         ↓  │ │
    │ │                                └─────────┘   └─────────┘  │ │
    │ │                                                           │ │
    │ │                                                           │ │
    │ └───────────────────────────────────────────────────────────┘ │
    │                                                               │
    │ ┌────────────────── Display Options ────────────────────────┐ │
    ┌─┼─┼──[X] Scroll Bars                         Tab Stops: 8     │ │
    │ │ └───────────────────────────────────────────────────────────┘ │
    │ ├───────────────────────────────────────────────────────────────┤
    │ │       <  OK  >         <  Cancel  >         <  Help  >        │
    │ └──────────┼──────────────────┼─────────────────────┼───────────┘
    │            └───────────┬──────┴─────────────────────┘
    │                        └─Command buttons.
    └─Check box. Press         Choose to confirm settings,
    SPACEBAR to set.         get help, or escape.

    Figure 2.5  Display Dialog Box

    Option buttons are turned on if a bullet (■) appears within the
    parentheses. Only one option in each group of option buttons can be turned
    on at a time. An X within the brackets indicates that a check box is
    turned on. You can turn on as many check boxes as you like.

    To set options, do the following:

    1. Press ALT+O, then press D to choose the Option menu's Display command.
        The Display dialog box (shown in Figure 2.5) appears.

    2. Press ALT+T to move the cursor to the Tab Stops text box.

        Type a new number if you want to change the number of spaces between
        tab stops while you are editing. For programming, 4 is a good choice.

    3. Press ALT+S to move the cursor to the Scroll Bars check box. Press
        SPACEBAR to put an X in an empty check box or remove the X if the box
        already has one. (Scroll bars, shown on Figure 2.1, are only useful if
        you have a mouse.)

    4. Set the three types of foreground and background colors, as follows:

        a. Press ALT plus the highlighted number (1, 2, or 3) to select the
        option whose colors you want to change.

        b. Press TAB to move to the foreground and background test boxes and
        press UP or DOWN to select the colors.

        c. Repeat the previous process two steps to change the Current
        Statement and Breakpoint Lines options.

    5. Press ENTER to choose the command, confirming any new choices you've
        just made, or press ESC to return all settings to what they were when
        the dialog box was first displayed.

    The Current Statement option determines the attributes of the currently
    executing line in a running program. The Breakpoint Lines option sets the
    color for lines at which you set breakpoints. Note that Breakpoint Lines
    and Current Statement colors show only when you have a program running.


Issuing Commands Directly

    You can use shortcut keys and key combinations to issue commands directly
    without opening menus to choose items. Shortcut keys are available for
    many QuickBASIC tasks.

Shortcut Keys for Commands

    If a command has a shortcut key, it is listed beside the command. For
    example, instead of opening the Edit menu and choosing the Cut, Copy, or
    Paste commands, you can use SHIFT+DEL, CTRL+INS, and SHIFT+INS instead.

Other Key Combinations

    There are other special keys and key combinations. For example, SHIFT+F1
    always displays help on help; and F1 displays on-line help for menu names
    and commands or any keyword or program symbol at the cursor. Other key
    combinations use function keys, keys on the numeric keypad like INS and
    DEL, and many combinations of the SHIFT, ALT, or CTRL keys with other
    keys.

    For example, you can use the RIGHT and LEFT keys to move the cursor right
    and left on the screen. To move the cursor to the next word beyond the
    current cursor position, hold down CTRL and press LEFT or RIGHT.

    Try this exercise to see how common shortcut keys and key combinations
    work:

    1. Press ALT+V to open the View menu.

        The SUBs command is automatically selected. Note the shortcut key (F2)
        to the right of the command name.

    2. Press DOWN to select the Output Screen command. Note that its shortcut
        key is F4.

    3. Press F1 to consult on-line help for an explanation of Output Screen
        (see Figure 2.6).


        ┌────────────────── HELP:  Output Screen Command ──────────────────┐
        │ ┌──────────────────────────────────────────────────────────────┐ │
        │ │ Use the Output Screen command to toggle between the          │ │
        │ │ QuickBASIC environment screen and the program output         │ │
        │ │ screen.                                                      │ │
        │ │                                                              │ │
        │ │ This enables you to refer to the ouput previously            │ │
        │ │ generated by your program while you are editing or           │ │
        │ │ debugging it.                                                │ │
        │ │                                                              │ │
        │ │ Press F4 to toggle between screens with one keystroke.       │ │
        │ └──────────────────────────────────────────────────────────────┘ │
        ├──────────────────────────────────────────────────────────────────┤
        │                             <  OK  >                             │
        └──────────────────────────────────────────────────────────────────┘

        Figure 2.6  Help on Output Screen Command

    4. Press ENTER to close the help screen. ENTER is the shortcut key for the
        default (or currently selected) command button.

    5. Press ESC to close the View menu.


Exiting from QuickBASIC

    When you end a session, QuickBASIC checks to see if you have any unsaved
    work in progress. If you do, a dialog box asks if you want to save your
    work. Because you haven't entered any text in this session, press N if
    this dialog box appears when you do the following:

    ►  Press ALT+F, then press X to choose the File menu's Exit command to
        return to DOS.

    If you made and confirmed changes in the Displays dialog box, they are
    saved in a file called QB.INI when you exit. They become the defaults the
    next time you start QuickBASIC.


For More Information

    For more information on the topics covered in this chapter, see the
    following:

    Where to Look                        What You'll Find
    ──────────────────────────────────────────────────────────────────────────
    Section 10.1.1, "The QB Command,"   Explanations of QuickBASIC's
    and 10.1.2, "The /NOHI Option"      invocation options

    Section 10.8, "Using On-Line Help," Complete description of on-line help
    and Chapter 21, "The Help Menu"

    Section 10.2, "Opening Menus and    More information on menus and dialog
    Choosing Commands," and 10.3,       boxes
    "Using Dialog Boxes"

    Section 10.2.2, "Using Shortcut     A listing of the common shortcut keys
    Keys"

    Section 12.7, "Summary of Editing   A complete list of key combinations
    Commands"                            used for editing
    ──────────────────────────────────────────────────────────────────────────



────────────────────────────────────────────────────────────────────────────
Chapter 3  QuickBASIC's Windows

    In this chapter you will learn how to use Microsoft QuickBASIC's windows
    as you write a short program. You'll learn how to

    ■ Open an existing program and move the cursor

    ■ Activate, move between, and change the window size

    ■ Execute BASIC statements from the Immediate window

    ■ Monitor values of variables with the Watch window

    ■ Use the Help window

    ■ Save programs as files on disk

    This chapter takes about one to one and one-half hours to complete.


Windows Available with Easy Menus

    QuickBASIC is called a "window-oriented" environment because the screen is
    divided into separate areas in which you can perform different tasks. Some
    windows, such as the View window and the Help window, display material
    loaded from disk files. Other windows, such as the Watch window, display
    information QuickBASIC has about the current program. With Easy Menus, the
    windows shown in Figure 3.1 are available.


    Watch window                                                Help window
    │                                                              │
    │ File  Edit  View  Search  Run  Debug  Options                │    Help
    └Untitled X = 10:  0                                           │
    ┌────────────────────── HELP: CLS Statement QuickSCREEN ────────┼─────┤↑├──
    │  ◄QuickSCREEN►     ◄Details►     ◄Example►     ◄Contents►     ◄Index►
    │─────────────────────────────────────────────────────────────────────────
    │CLS - a device I/O statement that clears the display screen
    │
    │Syntax
    │  CLS [{0|1|2}]
    │
    │  = If all arguments are omitted, either the graphics viewport or the
    │    text viewport are cleared, depending upon previous uses of the VIEW
    │    statement.
    │  = 0 clears the screen of all text and graphics.
    │  = 1 clears only the graphics viewport, if it is active.
    │  = 2 clears only the text viewport, leaving the bottom screen line
    │    unchanged.
    ├──────────────────────────────── Untitled ───────────────────────────┤↑├──
    │CLS
    │                                                               │
    │                                                               │
    │                                                               │
    │←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│▒▒▒▒▒▒▒▒▒→
    ├─────────────────────────────── Immediate ─────────────────────│──────────
    │                                                               │
    │                                                               │
    <Shift+F1=Help> <F6=Window> <F2=Subs> <F5=Run> <F8=Step>       │ 00001:003
            │                                                      │
    Immediate window                                            View window

    Figure 3.1  Windows Available with Easy Menus

    Window                   Description
    ──────────────────────────────────────────────────────────────────────────
    View                     The window in which you do most of your
                            programming. When you start QuickBASIC the View
                            window is the "active window," the one containing
                            the editing cursor. When you load a disk file,
                            its contents appear in the View window.

    Immediate                The window at the bottom of the screen. In it you
                            can use single lines of BASIC code to test
                            programming ideas and perform miscellaneous
                            calculations. You can type in the Immediate
                            window, but you cannot load disk files into it.

    Help                     A window that opens at the top of the screen when
                            you press F1 or SHIFT+F1. Information about
                            QuickBASIC keywords, symbols you define in your
                            program, and using help is displayed in the Help
                            window.

    Watch                    A window that opens at the top of the screen when
                            you choose certain commands from the Debug menu.
    ──────────────────────────────────────────────────────────────────────────

    You can have several windows open at a time, but only one can be active at
    a time. By opening multiple windows, you can view different types of
    information simultaneously. For example, you can have program code in the
    View window, then display on-line help for the statement you want to use.


The View Window

    The View window is where you do most of your programming. This section
    explains how to load an existing program from a disk file into the View
    window and move the cursor around in its text. Then you'll clear that
    program and write and run some lines of your own code.

Loading Programs in the View Window

    When you load a file from a disk, its text appears in the View window. To
    load a program

    1. Start QuickBASIC using the QB command you learned in Chapter 2.

    2. Press ESC to clear the Welcome dialog box.

    3. Press ALT+F, then press O to choose the File menu's Open Program
        command.

        QuickBASIC displays a dialog box like the one in Figure 3.2.


        Path-specification line                     Symbol         Name
        gives path to files listed                  for next       of next
        ┌─in Files list box.                          highest        lowest
        │                                           ┌─directory    ┌─directory
        │                 ┌─Text box                │              │
        │                 │           List boxes─┐  │              │
        │                 │                      │  │              │
        │                 │                      │  │              │
        │ ┌───────────────┼────── Open Program ──┼──┼──────────────┼────┐
        │ │              ┌┴──────────────────────┼──┼──────────────┼──┐ │
        │ │   File Name: │                       │  │              │  │ │
        │ │              └───────────────────────┼──┼──────────────┼──┘ │
        │ │                                      │  │              │    │
        └─┼───C:\QB4.5\DEMO                      │  │              │    │
        │                                      │  │  Dirs/Drives │    │
        │  ┌───────────────────────────────────┴┐ │ ┌────────────┼──┐ │
        │  │ATEST.BAS      REMLINE.BAS  ─┐      │ │ │┌──┐        │  ↑ │
        │  │BL.BAS         SORTDEMO.BAS  │      │ └─┼ ∙∙         │  ░ │
        │  │DEMO1.BAS      TEST.BAS      │      │   │SOURCE ─────┘  ░ │
        │  │DEMO2.BAS      TORUS.BAS     │      │   │[-A-]─┐        ░ │
        │  │DEMO3.BAS      VARHELP.BAS   ├────┐ │   │[-B-] ├─────┐  ░ │
        │  │DEMO4.BAS      VARHELPZ.BAS  │    │ │   │[-C-]─┘     │  ░ │
        │  │HISTOGRM.BAS                 │    │ │   │            │  ░ │
        │  │QBFORMAT.BAS                 │    │ │   │            │  ░ │
        │  │QCARDS.BAS                   ┘    │ │   │            │  ↓ │
        │  └←░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│→┘   └────────────┼──┘ │
        ├─────────────────────────────────────┼──────────────────┼────┤
        │       <  OK  >         <  Cancel  > │       <  Help  > │    │
        └─────────────────────────────────────┼──────────────────┼────┘
            List box contains file names having ┘  Available drives┘
                    extension shown in text box

        Figure 3.2  Open Program Dialog Box

        The cursor is in the text box where *.bas is selected. Anything you
        type while *.bas is selected replaces it. The *.bas in the text box
        tells QuickBASIC to list all the files having that extension in the
        Files list box.

    This dialog box has the following features:

    Feature                  Function
    ──────────────────────────────────────────────────────────────────────────
    Text box                 Box for typing text, such as a file name

    Files list box           Box that displays files in the directory
                            specified on the path-specification line

    Dirs/Drives list box     Box that shows the directories above and below
                            the directory specified on the path-specification
                            line and the drives available on your system
    ──────────────────────────────────────────────────────────────────────────

    The files in your list box should include QCARDS.BAS. To open it, type its
    name in the text box, or use the list box to select it, as described here:

    1. Press TAB to move the cursor into the Files list box.

    2. Press DIRECTION keys until the name of the program you want is
        selected. (Press SPACEBAR if the program you want is the first entry. )

    3. Select QCARDS.BAS.

        The name QCARDS.BAS replaces *.bas in the text box.

    4. Press ENTER to load QCARDS.BAS in the View window.

        QCARDS is large (almost 40K), so it may take a few moments to load.
        When it is loaded, the name QCARDS.BAS appears in the View window's
        title bar.

Moving the Cursor

    You can use the DIRECTION keys on the numeric keypad (the LEFT, RIGHT, UP,
    and DOWN arrow keys as well as HOME, END, PGUP, and PGDN) to move the
    cursor in a window. The DIRECTION keys move the cursor a single row or
    column at a time. HOME and END move the cursor to the first or last column
    of the current line. However, you can combine the CTRL key with DIRECTION
    keys to move the cursor in greater increments, as follows:

    Key Combination          Cursor Movement
    ──────────────────────────────────────────────────────────────────────────
    CTRL+RIGHT               Right one word

    CTRL+LEFT                Left one word

    CTRL+HOME                First line of current window

    CTRL+END                 Last line of current window
    ──────────────────────────────────────────────────────────────────────────

Scrolling Text

    A window can contain far more text than is visible within its on-screen
    boundaries. "Scrolling" describes the movement of text into and out of the
    bounded screen area. You can scroll text using the following keys and
    combinations:

    Key Combination          Scrolling Action
    ──────────────────────────────────────────────────────────────────────────
    PGUP                     Up by one whole screen

    PGDN                     Down by one whole screen

    CTRL+PGDN                Right by one whole screen

    CTRL+PGUP                Left by one whole screen
    ──────────────────────────────────────────────────────────────────────────

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    The CTRL+PGDN combination can be disorienting if you don't have text
    between columns 79-159. To confirm your place in a file, check the row
    and column counters in the lower right corner of the reference bar. You
    can press HOME to move the cursor to the first column of the current
    line.
    ──────────────────────────────────────────────────────────────────────────

Starting a New Program

    When you load an existing program from disk, QuickBASIC clears everything
    else from memory before loading the program. In this section, you'll clear
    QCARDS.BAS from QuickBASIC's memory with the New Program command, then
    you'll type in a simple program. As you type in lines of code, notice that
    QuickBASIC capitalizes the keywords in the statements when you press
    ENTER. If you get an error message, press ESC to clear the message, then
    retype the line at the cursor.

    Follow these steps to clear QCARDS.BAS, then write and run some code:

    1. Press ALT+F, then press N to choose the File menu's New Program
        command.

    2. Type the following BASIC statements

        cls
        print "This is my first QuickBASIC program"
        print 2 + 2

    3. Press ALT+R, then press S to choose the Run menu's Start command.

        If you typed everything correctly, QuickBASIC displays the program's
        output on the "output screen," which should look like the screen in
        Figure 3.3.


        ┌────────────────────────────────────────────────────────┐
        │This is my first QuickBASIC program                     │
        │ 4                                                      │
        │                                                        │
        │                                                        │
        │                                                        │
        │                                                        │
        │                                                        │
        │                                                        │
        │                                                        │
        │                                                        │
        │                                                        │
        │                                                        │
        ┌─┤Press any key to continue                               │
        │ └────────────────────────────────────────────────────────┘
        └─Press a key to return to QuickBASIC environment.

        Figure 3.3  Output Screen for Code Lines

        In this program, CLS clears the screen, then the PRINT statement
        displays the quoted text in the upper left corner of the screen.
        Because PRINT can display the results of numeric expressions, the sum
        of the expression 2+2 appears on the next line.

    4. Press a key to return to QuickBASIC's View window.

    5. Press ALT+V, then press U to choose the View menu's Output Screen
        command to take another look at your program's results.

    6. Press a key to return to QuickBASIC's View window.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    You can get help for any keywords you don't understand by placing the
    cursor on the keyword, then pressing F1.
    ──────────────────────────────────────────────────────────────────────────

Changing Window Sizes

    You can easily increase or decrease the size of the windows on your
    screen. To increase the size of the active window, press ALT+PLUS once for
    each line you want to add. To reduce the size by one line, press
    ALT+MINUS. (Use the PLUS and MINUS keys on the numeric keypad.)

    To temporarily expand the active window to full screen, press CTRL+F10.
    You can restore the windows to their previous sizes by pressing this
    toggle again. The following steps illustrate this and prepare the windows
    for the exercise in the next section:

    1. Press ALT+PLUS twice while the cursor is in the View window.

        This adds lines to the View window and compresses the Immediate window
        beneath it.

    2. Press ALT+MINUS seven times to reduce the size of the View window.

        This decreases the number of lines in the View window while increasing
        the size of the Immediate window.

    3. Press CTRL+F10 to expand the size of the current window temporarily to
        full-screen status.

    4. Press CTRL+F10 again to restore the screen to its previous proportions.


QuickBASIC's Other Windows

    When you start QuickBASIC and clear the opening dialog box, the View
    window contains the cursor, so it is the active window. Only one window
    can be active at a time. However, other windows are available. Note that
    the title bar of the active window is highlighted.

Moving between Windows

    To move the cursor down one window, press the F6 key. To move the cursor
    up one window, press SHIFT+F6. If you have used CTRL+F10 to expand the
    current window, F6 and SHIFT+F6 still make the next and previous windows
    active.

Executing Code in the Immediate Window

    The Immediate window at the bottom of the screen can be used as a utility
    window as you program in the View window. For example, if you want to
    clear the output screen, you can execute the CLS statement from the
    Immediate window. You can also use the Immediate window for doing
    calculations, or experimenting with programming ideas and previewing the
    results. When you exit from QuickBASIC, text in the Immediate window is
    lost.

    When you run lines of code in the View window, they are executed
    sequentially. In the Immediate window, a single line of code is executed
    whenever you put the cursor anywhere on that line, then press ENTER.You
    can type in either uppercase or lowercase in the Immediate window. Note
    that QuickBASIC doesn't capitalize keywords in the Immediate window as it
    does in the View window.

    Try the following procedure to execute lines of code in the Immediate
    window:

    1. Press F6 to place the cursor in the Immediate window.

    2. Type the following line:

        cls : print "This line comes from the Immediate window"

        This code consists of two BASIC statements separated by a colon.
        Separating statements with a colon allows you to put more than one
        statement on a line.

    3. Press ENTER to execute the code on this line.

        QuickBASIC displays the output screen.

    4. Press a key to return to the QuickBASIC environment. The cursor is
        placed on the next blank line in the Immediate window.

    5. Type the following line, exactly as shown:

        CurrentTime$ = ""

        This defines a variable named CurrentTime$. The $ tells QuickBASIC it
        is a "string" variable (one consisting of a series of characters). The
        quotation marks have no space between them, so the string has a length
        of zero.

    6. Press ENTER to execute this statement and assign the zero-length string
        to CurrentTime$.

    Next, you'll continue working in the Immediate window and use the BASIC
    TIME$ function to assign a string representing the current time to the
    variable CurrentTime$:

    1. Type the following line (exactly as shown) on the next line in the
        Immediate window:

        CurrentTime$ = time$

    2. Press ENTER to execute the assignment statement you just typed.

    3. Type the following line in the Immediate window, exactly as shown:

        print CurrentTime$

        Figure 3.4 shows how the Immediate window should now look:


        File  Edit  View  Search  Run  Debug  Options                     Hel
        ┌──────────────────────────────── Untitled ───────────────────────────┤↑
        │CLS
        │PRINT "This is my first QuickBASIC program"
        │PRINT 2 + 2
        │
        │
        │
        │
        │
        │
        │
        │
        │
        │
        │
        │
        │
        ├─────────────────────────────── Immediate ─────────────────────────────
        │cls : print "This line comes from the Immediate window"
        │CurrentTime$ = ""
        │CurrentTime$ = time$
        │print CurrentTime$
        │
        <Shift+F1=Help> <F6=Window> <Enter=Execute Line>              CN 00004:

        Figure 3.4  Immediate Window Showing Lines Just Entered

    4. Press ENTER to display the value of CurrentTime$.

        The value of CurrentTime$ is displayed beneath the first line on the
        output screen.

    5. Press a key to return to the environment.

        You can write up to 10 lines of statements in the Immediate window. If
        you type an eleventh line, the first line you typed is lost; if you
        type a twelfth, the second line you typed is lost, and so on. Section
        10.5 illustrates other ways you can use the Immediate window.

Monitoring Variables with the Watch Window

    When a program doesn't behave the way you expect, it is often because a
    variable is acquiring a value you did not anticipate. The Watch window
    lets you monitor the values of expressions while your program is running,
    so you can be sure their values are within the expected range. Try the
    following to see how the Watch window works:

    1. Press F6 to move the cursor to the Immediate window if it is not
        already there.

    2. Press ALT+D, then press A to choose the Debug menu's Add Watch command.

        QuickBASIC displays the Add Watch dialog box.

    3. Type CurrentTime$, then press ENTER.

        The Watch window opens at the top of the screen. It contains the name
        from the View window's title bar, followed by CurrentTime$, the name of
        the variable you just entered (see Figure 3.5). The cursor returns to
        the Immediate window.


        Name from View
        window's title bar     Variable name                       Watch window
        │                         │                                    │
        │ File  Edit  View  Search│ Run  Debug  Options                │    Hel
        └Untitled CurrentTime$:   │                                    │
        ┌─────────┴──────┬──────┴──┼───── Untitled ───────────────────────────┤↑
        │CLS             └─────────┘
        │PRINT "This is my first QuickBASIC program"
        │PRINT 2 + 2
        │
        │
        │
        │
        │
        │
        │
        │
        │
        ├─────────────────────────────── Immediate ─────────────────────────────
        │cls : print "This line comes from the Immediate window"
        │CurrentTime$ = ""
        │CurrentTime$ = time$
        │print CurrentTime$
        │
        <Shift+F1=Help> <F6=Window> <Enter=Execute Line>              CN 00004:

        Figure 3.5  Placing Variables in the Watch Window

    4. Press CTRL+HOME to place the cursor on the first line of the Immediate
        window, then press ENTER to execute each of the lines in the Immediate
        window.

        Look at the Watch window while you press ENTER on each line. As soon as
        the line CurrentTime$ = time$ is executed, you will notice that the
        value for CurrentTime$ appears in the Watch window.

    With the Watch window you can monitor variable values as they change in
    the running program without having to use PRINT statements to display the
    value on the output screen.

The Help Window

    Most on-line help appears in the Help window. There are several ways to
    get help on BASIC keywords, such as PRINT and TIME$, and the QuickBASIC
    environment. You can use the Help menu or press F1 while an item on screen
    (or a menu or command) contains the cursor or is highlighted.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    If you get error messages when you try to access on-line help, check
    Section 10.8.4, "Help Files," for more information on how to set up
    help properly.
    ──────────────────────────────────────────────────────────────────────────

    Context-Sensitive Help

    With context-sensitive help, you can get information about BASIC keywords
    and program symbols. The following steps illustrate the use of
    context-sensitive help:

    1. Press ESC to close the Help menu if it is open.

    2. Use DIRECTION keys to move the cursor anywhere within the word PRINT.

    3. Press F1.

        QuickBASIC displays a QuickSCREEN of the PRINT keyword (see Figure
        3.6).


        File  Edit  View  Search  Run  Debug  Options                     Hel
        Untitled CurrentTime$:
        ┌───────────────────── HELP: PRINT Statement QuickSCREEN ─────────────┤↑
        │  ◄QuickSCREEN►     ◄Details►     ◄Example►     ◄Contents►     ◄Index►
        │───────────────────────────────────────────────────────────────────────
        │PRINT - a device I/O statement that outputs data on the screen
        │
        │Syntax
        │  PRINT [expressionlist][{,|;}]
        │
        │  = If all arguments are omitted, a blank line is printed.
        │  = If expressionlist is included, the values of the expressions are
        │    printed on the screen.
        │  = The expressions in the list may be numeric or string expressions.
        │    (String literals must be enclosed in quotation marks.)
        │  = The optional characters "'" and ";" are details.
        │
        │←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
        ├─────────────────────────────── Untitled ────────────────────────────┤↑
        ├─────────────────────────────── Immediate ─────────────────────────────
        │cls : print "This line comes from the Immediate window"
        │CurrentTime$ = ""
        │CurrentTime$ = time$
        │print CurrentTime$
        <Shift+F1=Help> <F6=Window> <Esc=Cancel> <Ctrl+F1=Next> <Alt+F1=Back>

        Figure 3.6  QuickSCREEN for PRINT Statement

        The QuickSCREEN briefly describes the statement's action, then gives
        the syntax and explains each part of it. At the bottom, the QuickSCREEN
        indicates other uses of the keyword.

    Hyperlinks

    At the top of the screen, several bracketed items, called "hyperlinks,"
    indicate related topics you can investigate. Hyperlinks provide instant
    connections between related topics. At the bottom of the screen, the other
    uses of the keyword are also bracketed as hyperlinks. If you want more
    information on one of them, use the TAB key to move the cursor to the
    hyperlink, then press F1, as explained here.

    1. Press F6 until the cursor appears into the Help window.

    2. Press TAB to move the cursor to the Example hyperlink.

    3. Press F1 to view the Example screen (see Figure 3.7).


        Hyperlinks
        to related topics
        │
        │File  Edit  View  Search  Run  Debug  Options                     Hel
        ┌─┼─────────────── HELP: PRINT Statement Programming Examples ────────┤↑
        │ │◄QuickSCREEN►     ◄Details►     ◄Example►     ◄Contents►     ◄Index►
        │─┼──────────────────────┼─────────────┼──────────────┼────────────┼────
        │ └──────────────────────┴─────────────┴──────────────┴────────────┘
        │PRINT Statement Programming Examples
        │
        │Example 1
        │
        │In the following example, the commas in the PRINT statement
        │print each value at the beginning of the next print zone:
        │
        │X=5
        │PRINT X+5, X-5, X*(-5), X^5
        │END
        │
        │Sample Output
        │
        │←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
        ├─────────────────────────────── Untitled ────────────────────────────┤↑
        ├─────────────────────────────── Immediate ─────────────────────────────
        │cls : print "This line comes from the Immediate window"
        │CurrentTime$ = ""
        │CurrentTime$ = time$
        │print CurrentTime$
        <Shift+F1=Help> <F6=Window> <Esc=Cancel> <Ctrl+F1=Next> <Alt+F1=Back>

        Figure 3.7  Example Screen for PRINT Statement

        You can scroll within the Help window to examine all the PRINT
        examples.

    4. Press ALT+F1 once or twice to return to the screen you linked from.

    5. Repeat steps 1 and 2 to view the information available through the
        other bracketed hyperlinks.

    You can use several successive hyperlinks without returning to the
    previous screen, QuickBASIC keeps track of the last 20 hyperlinks. You can
    use ALT+F1 to go back through the sequence of hyperlinks. When you reach
    the screen from which you started, QuickBASIC beeps if you press ALT+F1.
    You can press ESC any time to clear the Help window completely, even if
    you are several levels down in hyperlink screens.

    For a reminder on which keys or key combinations to use for moving in or
    among Help screens, choose Contents from the Help menu, then choose the
    "Help keys" hyperlink. Also, SHIFT+F1 gives a general explanation of help.

    Even some items that are not bracketed are hyperlinks. Press F1 any time
    you have a question about anything on the QuickBASIC screen. If QuickBASIC
    has more information on it, the information appears in the Help window; if
    no other information is available, QuickBASIC beeps.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    You cannot edit text in the Help window, but you can edit text in the
    View window or Immediate window while the Help window is open. In
    Chapter 8, "Using Example Code from On-Line Help," you'll learn to copy
    text from the Help window and paste it into your program.
    ──────────────────────────────────────────────────────────────────────────


Exiting from QuickBASIC and Saving Programs

    The following steps explain how to exit QuickBASIC and return to the DOS
    command line:

    1. Press ALT+F, then press X to exit from QuickBASIC.

        A dialog box appears asking if you want to save the unsaved material in
        the View window.

    2. Press ENTER to tell QuickBASIC that you want to save the program in the
        View window.

        QuickBASIC displays the Save As dialog box (see Figure 3.8):


                        ┌─Type your program name here
                        │
        ┌────────────────┼───── Save As ──────────────────┐
        │                │                                │
        │             ┌──┴───────────────────────────────┐│
        │ File Name:  │                                  ││
        │             └──────────────────────────────────┘│
        │ C:\QB4.5\DEMO                                   │
        │                                                 │
        │   Dirs/Drives                                   │
        │ ┌──────────────┐      ┌─────── Format ────────┐ │
        │ │..            ↑      │ (∙) QuickBASIC -      │ │
        │ │SOURCE        ░      │      Fast Load and    │ │
        │ │[-A-]         ░      │      Save             │ │
        │ │[-B-]         ░      │                       │ │
        │ │[-C-]         ░      │ ( ) Text -            │ │
        │ │[-U-]         ░      │      Readable by      │ │
        │ │[-Z-]         ↓      │      Other Programs   │ │
        │ └──────────────┘      └───────────────────────┘ │
        ├─────────────────────────────────────────────────┤
        │      < OK >            < Cancel >     < Help >  │
        └─────────────────────────────────────────────────┘

        Figure 3.8  Save As Dialog Box

    3. Type program1 in the text box.

    4. Press ENTER to save the lines in the View window on disk with the file
        name PROGRAM1.BAS.


For More Information

    For more information on the topics covered in this chapter, see the
    following:

    Where to Look                        What You'll Find
    ──────────────────────────────────────────────────────────────────────────
    Chapter 9, "Debugging While You     Debugging techniques and using the
    Program," and Chapter 17,           Watch window
    "Debugging Concepts and Techniques"

    Section 10.5, "Using the Immediate  Ways to use the Immediate window
    Window"

    Chapter 11, "The File Menu"         Opening, clearing, and saving files
                                        in QuickBASIC
    ──────────────────────────────────────────────────────────────────────────



────────────────────────────────────────────────────────────────────────────
Chapter 4  Interlude: BASIC for Beginners

    This chapter introduces the general principles of programming in BASIC.
    The focus is on the fundamentals, so you can start programming quickly.

    If you have never programmed before, you should read this chapter
    carefully. When you finish this chapter, you will be able to write simple
    BASIC programs. You may want to read some intermediate-level books on
    BASIC before tackling advanced programming techniques in the following
    chapters.

    If you already have programming experience with BASIC, you may want to
    skim this chapter to get a general idea of the differences between
    Microsoft BASIC and the BASIC dialect you know.

    Many brief programming examples are given to show how each element of
    BASIC works. The quickest way to learn BASIC is to enter and run these
    examples as you read. You can enter multi-line examples in the View
    window. Or you can enter single-line examples in QuickBASIC's Immediate
    window, then press ENTER to see the resulting output. Study each example
    to understand why it works the way it does. Be sure you grasp the material
    in one section before going on to the next.

    When you have completed this chapter, you will understand how to

    ■ Display words and numbers on the screen

    ■ Define and use variables

    ■ Perform calculations and use BASIC's math functions

    ■ Use arrays of variables

    ■ Execute sections of your program selectively

    ■ Repeat a group of instructions a specific number of times or until a
    condition is met


What is a Program?

    A "program" is a sequence of instructions to the computer, in a language
    both you and the computer understand. Each instruction is called a
    "statement" and usually takes up one line in the program.

    The goal of any program is to perform some useful job, such as word
    processing, bookkeeping, or playing a game. Programming is the process of
    deciding what you want the program to do. Then you select and arrange
    language statements to accomplish the individual tasks needed to reach the
    overall goal. This process is part science, part art. The science comes
    from books; the art is learned by writing your own programs and analyzing
    programs written by others.

    Many BASIC statements have additional features that are not described in
    this chapter. If you want more information about a particular statement or
    language feature, please refer to Chapter 8, "Statement and Function
    Summary," in Programming in BASIC or consult QuickBASIC's on-line help.


Comments

    Comments are an important part of programming. They explain the program to
    others, and remind you why you wrote it the way you did. Comments begin
    with an apostrophe, and can extend to the end of the line, as follows:

    ' This is a comment.

    CLS                   ' The CLS statement clears the screen.

    The apostrophe tells QuickBASIC that everything between the apostrophe and
    the end of the line is a comment.


Displaying Words and Numbers on the Screen

    You are probably familiar with application software such as Lotus(R)
    1-2-3(R) or Microsoft Word. These and most other programs communicate with
    the user by displaying words, numbers, and data on the screen.

    The PRINT statement is BASIC's command for writing on the screen. Two of
    the things PRINT can display are strings and numbers.

    A "string" is any group of characters (letters, numbers, punctuation
    marks) enclosed in quotes. The following example program shows how the
    PRINT statement displays a string:

    1. Start QuickBASIC (if it is not already started) by typing qb and
        pressing ENTER.

    2. Type the following line in the Immediate window, then press ENTER:

        PRINT "Hello, world"

        The output should appear as follows:

        Hello, world

        The quotes that surround a string are not part of the string, so they
        do not appear in the display.

    3. Type CLS in the Immediate window and press ENTER to clear the output
        screen.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    BASIC is not case sensitive; you don't have to enter the examples with
    the cases as shown. QuickBASIC automatically capitalizes words that are
    part of the BASIC language but leaves everything else as you enter it.
    The examples in this chapter are shown the way QuickBASIC formats them,
    and each program's output is shown exactly as it appears on the screen.
    ──────────────────────────────────────────────────────────────────────────

    The PRINT statement can also display numbers as shown in the following
    example program:

    1. Type the following line in the Immediate window, then press ENTER:

        PRINT 63

        The output should appear as follows:

        63

    2. Type CLS in the Immediate window and press ENTER to clear the output
        screen.


Variables

    Programs take data from the outside world (input), then process it to
    produce useful information (output). The input and output data are stored
    in the computer's memory. Variable names are used to keep track of where
    the data are stored.

Storing Data in Memory

    Computer memory is divided into storage locations, each of which has a
    unique "address." The address is a number that gives the memory location,
    the same way your house address shows where you live on a street. Every
    piece of data has its own storage location and matching address (see
    Figure 4.1).


    ┌─────────────────────────────────────────────────────────┐
    │                                                         │
    │   ┌──────┬──────┬──────┬──────┬──────┬──────┬──────┐    │
    │   │ 1230 │ 1231 │ 1232 │ 1233 │ 1234 │ 1235 │ 1236 │    │
    │   └──────┴──────┴──────┴──────┴──────┴──────┴──────┘    │
    │                                                         │
    └─────────────────────────────────────────────────────────┘

    Figure 4.1  Addresses in Memory

    Fortunately, you don't have to keep track of the address for every data
    item. BASIC uses a "variable name" to associate a word of your choice with
    a memory location in the computer.

    BASIC does the associating automatically. Every time you use a variable
    name that BASIC hasn't seen before, BASIC finds an unused memory location
    and associates the new variable name with that address. You can then use
    the variable name without having to know its address.

    The following example program demonstrates this. Note that Hello, world is
    not enclosed in quotes in this example.

    1. Type the following line in the Immediate window, then press ENTER:

        PRINT Hello, world

        The output should appear as follows:

        0             0

    2. Type CLS in the Immediate window and press ENTER to clear the output
        screen.

    When BASIC encounters Hello and world, it has to decide what these words
    are. They aren't keywords (that is, they aren't part of the BASIC
    language), as PRINT is. They aren't strings, because they aren't enclosed
    in quotes. They are definitely not numbers. Therefore, Hello and world
    must be variables.

    Once this decision is made, BASIC sets aside storage space for two new
    variables named Hello and world. New variables are always given an initial
    value of zero, so the PRINT statement displays two zeros.

    A variable name can contain digits, but the name cannot begin with a
    digit. Any word starting with a digit is interpreted as a number.

    Names allowed in BASIC include:

    gerbils
    birthdate
    name3
    ep45lp33

    These are illegal names:

    5remove
    4.3less

Variable Types

    Data do not come in just one form. Programming languages, therefore, need
    different types of variables to hold different types of data. BASIC has
    three categories of variables: integer, floating point, and string.

    Integer Variables

    An integer number is a whole number, without a fractional part. For
    example, 0, -45, and 1278 are integers. Integer numbers are stored in
    integer variables. BASIC has two types of integer variables: integer and
    long integer.

    A variable name ending in % is an integer variable. Integer variables can
    have any whole-number value between -32,768 and 32,767. A variable name
    ending in & is a long-integer variable and can have any whole-number value
    between -2,147,483,648 and 2,147,483,647.

    Floating-Point Variables

    A floating-point number can have a fractional part (though it doesn't have
    to). For example, 0.123, 78.26, 7.0, and 1922.001234 are all
    floating-point numbers. Floating-point numbers are stored in
    floating-point variables. BASIC has two types of floating-point variables:
    single precision and double precision.

    A variable name ending in a letter, a digit, or ! is a single-precision
    floating-point variable. Single-precision floating-point numbers can have
    values ranging from about -3.4 x 10'38 to 3.4 x 10'38 (that's 34 with 37
    zeros following). A single-precision floating-point variable is accurate
    to only about 7 decimal places.

    A variable name ending in # is a double-precision floating-point variable
    and can have values from about -1.7 x 10'308 to 1.7 x 10'308 (that's 17
    with 307 zeros following!). A double-precision floating-point variable can
    hold much larger numbers than a single-precision variable, and it is also
    more accurate── to about 15 decimal places.

    Single-precision floating-point numbers are the kind most often used in
    calculations, since "real-world" applications usually need numbers with
    fractional parts. (Prices are a good example.) Since single-precision
    floating-point variables are so commonly used, they are the "default" data
    type; that is, if a variable name does not end with a "type" character (%,
    &, #, !, or $), it is assumed to be a single-precision floating-point
    variable.

    Note, however, that calculations with integer variables take much less
    computer time than those performed with floating-point variables. Integer
    variables should be used when speed is required.

    The numerical variables in the remaining examples in this chapter are
    marked with the appropriate type suffix, either ! or %. Although most of
    these are single-precision floating-point variables, which need no type
    suffix, they are given the ! suffix for clarity.

    String Variables

    A string variable holds a sequence (a string) of characters. A variable
    name ending in $ is a string variable. Just as a numeric variable is given
    an initial value of 0, a newly defined string variable is assigned an
    initial length of zero. It contains no data at all, not even blank spaces.
    If blank$ has not previously been given a value, the statement

    PRINT blank$

    displays an empty line.


Assigning Values to Variables

    A variable gets its value through an "assignment" statement. An assignment
    statement has three components: the variable that receives a new value; an
    equal sign (=); and the number, string, or calculation whose value the
    variable takes on. These are all valid assignment statements:

    age% = 41
    myname$ = "Willie"
    result! = result3! + leftval! + rightval!

    In the next example program, two strings are combined with the plus sign
    (+) to make a longer string. The result is assigned to a third string.

    1. Choose the File menu's New Program command to clear the View window
        (press ALT+F, then press N).

    2. Type the following example in the View window:

        string1$ = "Hello,"
        string2$ = " there!"
        bigstring$ = string1$ + string2$
        PRINT bigstring$

    3. Choose the Run menu's Start command (press ALT+R, then press S).

        The output should look like the following:

        Hello, there!

    4. Type CLS in the Immediate window and press ENTER to clear the output
        screen.

    Although assignment is shown by the equal sign, it is not the same thing
    as algebraic equality. To BASIC, the assignment statement means: "Perform
    all the calculations and data manipulations on the right side of the equal
    sign. Then give the variable on the left side the result."

    The same variable name can appear on both sides of the assignment
    statement. This occurs most often when you want to change the variable's
    value. Try the following example program:

    1. Choose the File menu's New Program command to clear the View window.

    2. Type the following example in the View window:

        counter% = 6
        PRINT counter%
        counter% = counter% - 1
        PRINT counter%

    3. Choose the Run menu's Start command.

        The output should look like the following:

        6
        5

    4. Type CLS in the Immediate window and press ENTER to clear the output
        screen.

    You cannot assign numeric values to string variables (or vice versa).
    Therefore, the following statements are illegal. Either one halts
    execution and causes the error message Type mismatch when the program
    runs.

    strg$ = 3.14159
    number! = "hi, there"


Calculations

    In BASIC, the mathematical operations of addition, subtraction,
    multiplication, and division are represented by +, -, * (the asterisk),
    and / (the slash), respectively. Exponentiation (raising a number to a
    power) is shown by ' (the caret). You can type each of the following on a
    line in the Immediate window, then press ENTER to see the results of the
    operations:

    Operation                                        Result
    ──────────────────────────────────────────────────────────────────────────
    PRINT 2 + 3                                      5

    PRINT 2 - 3                                      -1

    PRINT 2 * 3                                      6

    PRINT 2 / 3                                      .6666667

    PRINT 2 ' 3                                      8
    ──────────────────────────────────────────────────────────────────────────

Integer Division and the Remainder Operator

BASIC has two math operations you may not have seen before, integer division
and the remainder operator.

    Integer division retains the integer (whole-number) part of the division
    and discards the fractional part. Integer division is represented by \
    (the backslash). You can type each of the following on a line in the
    Immediate window, then press ENTER to see the results of the operations:

    Operation                                        Result
    ──────────────────────────────────────────────────────────────────────────
    PRINT 7 \ 3                                      2

    PRINT 9.6 \ 2.4                                  5
    ──────────────────────────────────────────────────────────────────────────

    Both integer division and the remainder operator round off the numbers to
    be operated on before the calculation is performed. The number 9.6 becomes
    10 and 2.4 becomes 2. Therefore, the result of the second example above is
    5, not 4.

    The remainder operator is the complement of integer division. The
    whole-number part of the division is discarded, and the remainder is
    returned. Remainder division is performed by the BASIC keyword MOD. You
    can type each of the following on a line in the Immediate window, then
    press ENTER to see the results of the operations:

    Operation                                        Result
    ──────────────────────────────────────────────────────────────────────────
    PRINT 7 MOD 3                                    1

    PRINT 11 MOD 4                                   3
    ──────────────────────────────────────────────────────────────────────────

Precedence of Operations

    BASIC evaluates mathematical expressions from left to right, following the
    rules of algebraic precedence: exponentiation is performed first, then
    multiplication and division, then addition and subtraction. The following
    example program illustrates algebraic precedence:

    1. Type the following line in the Immediate window, then press ENTER:

        PRINT 2 * 3 + 2 ' 3 - 2 / 3

        The output should appear as follows:

        13.33333

    2. Type CLS in the Immediate window and press ENTER to clear the output
        screen.

    Parentheses can confirm or override the normal precedence. Try this
    example:

    1. Type the following line in the Immediate window, then press ENTER:

        PRINT (2 * 3) + (2 ' 3) - (2 / 3)

        The output should appear as follows:

        13.33333

    2. Type CLS in the Immediate window and press ENTER to clear the output
        screen.

    The result is the same as in the last example because the precedence of
    operations dictated by the parentheses is no different from the usual
    order. However, the next example program produces a different result:

    1. Type the following line in the Immediate window, then press ENTER:

        PRINT 2 * (3 + 2) ' (3 - 2 / 3)

        The output should appear as follows:

        85.49879

    2. Type CLS in the Immediate window and press ENTER to clear the output
        screen.

    The result here is different because the calculations within parentheses
    are performed first. Within parentheses, the usual precedence still
    applies, of course. The expression (3 - 2 / 3) evaluates as (3 -
    .6666667), not (1 / 3).

    You might want to use parentheses to control the order of calculations,
    rather than depending on precedence. Parentheses prevent errors and make
    your programs easier to understand.

Math Functions

    Along with the addition, subtraction, multiplication, and division
    operators just presented, BASIC provides a number of common math
    functions, described briefly below. To use them, follow the function name
    with the variable or expression you want the function performed on (in
    parentheses). The expression may be any valid combination of variables,
    numbers, and math functions. (Expressions are explained further in the
    following section.)

    Function                 Description
    ──────────────────────────────────────────────────────────────────────────
    ABS                      Returns the absolute value of the expression

    ATN                      Returns the angle (in radians) whose tangent
                            equals the expression

    COS                      Returns the cosine of an angle (in radians)

    EXP                      Returns e to the power of the expression

    LOG                      Returns the logarithm of the expression

    SGN                      Returns -1 if the expression is less than 0;
                            returns 0 if it is 0; returns +1 if it is greater
                            than 0

    SIN                      Returns the sine of an angle (in radians)

    SQR                      Returns the square root of the expression

    TAN                      Returns the tangent of an angle (in radians)
    ──────────────────────────────────────────────────────────────────────────

    The following example program shows the use of the square-root function:

    1. Choose the File menu's New Program command to clear the View window.

    2. Type the following example in the View window:

        adjacent! = 3.0
        opposite! = 4.0
        hypotenuse! = SQR((adjacent! ' 2) + (opposite! ' 2))
        PRINT "the hypotenuse is:"; hypotenuse!

    3. Choose the Run menu's Start command.

        The output should look like the following:

        the hypotenuse is: 5

    4. Type CLS in the Immediate window and press ENTER to clear the output
        screen.


Expressions

    An "expression" is what most people would call a formula. An expression is
    any combination of numbers, strings, variables, functions, and operators
    that can be evaluated. For example, 2 + 2 is a simple expression. It
    evaluates to four. Enter the following statements in the View window to
    assign a variety of simple expressions to variables, as follows:

    1. Choose the File menu's New Program command to clear the View window.

    2. Type the following example in the View window:

        square% = 3 ' 2
        root! = SQR(3 ' 2)
        greeting$ = "Hello," + " world! "
        strange! = 9 + "cats"

        The last statement you typed was illegal.

    3. Choose the Run menu's Start command.

        QuickBASIC displays the error message Type mismatch. You cannot add a
        number (or numerical variable) to a string (or string variable).

    4. Type CLS in the Immediate window and press ENTER to clear the output
        screen.

    Expressions may be as complex as you like, with the results of one
    expression passed to a function, the value returned by a function combined
    with other expressions, and so on.

    Almost any place you can use a number or a string, you can use any
    expression (no matter how complex) that evaluates to a number or a string.
    This means expressions can be used in BASIC's math functions, PRINT
    statements, and assignment statements.


Displaying Variables and Expressions

    The PRINT statement was first shown in this chapter as a way to display
    numbers and strings. The PRINT statement can also display the values of
    variables and expressions. For example, try this:

    1. Type the following lines in the Immediate window, then press ENTER:

        PRINT (2 + 8) / 4 + 1

        The output should appear as follows:

        3.5

    2. Type CLS in the Immediate window and press ENTER to clear the output
        screen.

    The PRINT statement is quite flexible; it can display any combination of
    strings, numbers, variables, and expressions. The items to be displayed
    are separated by semicolons (;) or commas (,). When a semicolon separates
    two items, the second item is displayed immediately after the first, as
    shown in the example program below:

    1. Type the following line in the Immediate window, then press ENTER:

        PRINT "Sum of 5.29 and"; 2.79; "is"; 5.29 + 2.79

        The output should appear as follows:

        Sum of 5.29 and 2.79 is 8.08

    2. Type CLS in the Immediate window and press ENTER to clear the output
        screen.

    Here's another example program to try:

    1. Choose the File menu's New Program command to clear the View window.

    2. Type the following example in the View window:

        number = 36
        PRINT "The sum of"; number; "and 4 is"; number + 4
        PRINT "The square of"; number; "is"; number * number

    3. Choose the Run menu's Start command.

        The output should look like the following:

        The sum of 36 and 4 is 40
        The square of 36 is 1296

    4. Type CLS in the Immediate window and press ENTER to clear the output
        screen.

    If two items in a PRINT statement are separated by a comma, the second
    item is positioned at the next preset tab location. (The tab stops are 14
    columns apart.) Note the difference between the output of the following
    PRINT statement and that of the similar one with semicolons, above:

    1. Enter the following lines in the Immediate window, then press ENTER:

        PRINT "Sum of 5.29 and", 2.79, "is", 5.29 + 2.79

        The output should appear as follows:

        Sum of 5.29 and          2.79         is             8.08

    2. Type CLS in the Immediate window and press ENTER to clear the output
        screen.

    Commas and semicolons can be used in the same PRINT statement to position
    the items any way you like.

    Each PRINT statement normally places its output on a new line, as the
    following example program shows:

    1. Choose the File menu's New Program command to clear the View window.

    2. Type the following example in the View window:

        PRINT "How old are you?"
        PRINT 41

        The output should appear as follows:

        How old are you?
        41

    3. Choose the Run menu's Start command.

    4. Type CLS in the Immediate window and press ENTER to clear the output
        screen.

    If you want to combine the output of several PRINT statements on the same
    line, place a semicolon (;) at the end of each PRINT statement. Change the
    last example program as follows:

    1. Choose the File menu's New Program command to clear the View window.

    2. Type the following example in the View window:

        PRINT "How old are you?";

        PRINT 41

    3. Choose the Run menu's Start command.

        The output should look like the following:

        How old are you? 41

    4. Type CLS in the Immediate window and press ENTER to clear the output
        screen.


Entering Data with the INPUT Statement

    The INPUT statement displays a prompt string, then waits for the user to
    enter some value. The value entered in response to the prompt is assigned
    to the variable specified in the INPUT statement.

    INPUT "enter your age: ", age%
    PRINT age%

    If you typed 39 in response to the enter your age: prompt, the value 39
    would be assigned to the variable age%, and that value would be printed by
    the following PRINT age% statement.

    INPUT also accepts strings:

    INPUT "What is your name? ", yourname$
    PRINT yourname$

    A string variable will accept whatever you type, since all entries──even
    numbers──are actually strings. (When you type 42, you are not typing the
    number 42, but rather the characters 4 and 2. If the input variable is
    numerical, BASIC converts this string into a number. If the input variable
    is a string, the character sequence 42 is simply assigned to the string.)

    A numeric variable, however, can only be assigned a number. If you type
    dog when you should have entered a number, BASIC responds with the message
    Redo from start and a new prompt line.


Arrays of Variables

    If you wanted to keep track of the high temperature for each day in July,
    you could use 31 floating-point variables, named july1, july2, july3, and
    so on through july31.

    However, a group of related but individually named variables is clumsy to
    work with; each variable has to be handled separately. For example, if you
    wanted to prompt the user for each temperature in July, you would have to
    write 31 individual prompt statements.

    INPUT "What is the temp value for July 1? ", july1
        .
        .
        .
    INPUT "What is the temp value for July 31? ", july31

    An analogous problem occurs when you're trying to write a program that
    retrieves the stored data. You wouldn't want to write a program that
    displayed all 31 variable names to be able to retrieve the value for any
    specific one (say, the high temperature for July 4──the value for july4).
    It would be much more convenient if you could just give the computer the
    date (the number 4) and the computer would select the right variable and
    value.

    The solution is to give the entire set of values the same name (july in
    our example) and distinguish the individual values by a numerical index
    called a "subscript." A group of identically named variables distinguished
    by their subscript values is called an "array." (See Figure 4.2 for an
    example.) Arrays can be especially powerful when used in conjunction with
    loops (see the section titled "Repeating Program Operations").


    ┌─────────────────────────────────────────────────────────────────┐
    │                                                                 │
    │  ┌───────────┬───────────┬───────────┬───────────┬───────────┐  │
    │  │ Price (0) │ Price (1) │ Price (2) │ Price (3) │ Price (4) │  │
    │  └───────────┴───────────┴───────────┴───────────┴───────────┘  │
    │                                                                 │
    └─────────────────────────────────────────────────────────────────┘

    Figure 4.2  Array Created by the BASIC Statemenet DIM Price (4)

Declaring Arrays

    An array variable must first be "declared" with a DIM statement, which
    establishes the size of the array. A DIM statement must appear before the
    array variable can be used.

    The value given in the DIM statement specifies the maximum value for the
    variable's subscript. For example, the following statement declares an
    array of 32 floating-point variables named july, whose subscripts run from
    0 to 31:

    DIM july(31)

    DIM also works with string variables:

    DIM stringvar$(250)

Specifying Array Elements

    You can specify the nth member (or "element") of an array simply by
    putting the number n (or a variable or expression with the value n) in
    parentheses following the variable name. In this way the program can
    connect a specific variable with a number entered by the user. For
    example, the fourth element of the july array could be specified by either
    july(4) or──if d% equals four──july(d%) or even july(SQR(16)).

    The following code fragment prompts the user for the date, then prints the
    high temperature for that day in July (assuming that all the temperatures
    have been assigned to the array july).

    DIM july(31)
    INPUT "enter July date: ", date%
    PRINT "high temperature for July"; date%; "was"; july(date%)


Logical Relations Used in Decision-Making

    BASIC can decide whether two numbers or strings are the same or different.
    On the basis of such a decision, an appropriate group of program
    statements can be executed or repeated.

    For example, suppose the standard income-tax deduction is $2500. If your
    itemized deductions are less than $2500, you would take the standard
    deduction. If your itemized deductions are greater than $2500, you would
    itemize. An income-tax program can make this decision and execute either
    the part of the program that performs itemized deductions or the part that
    takes the standard deduction. The user doesn't have to tell the program
    what to do.

    The following sections explain how BASIC makes logical decisions that can
    be used in your programs.

Relational Operators

    Numbers and strings are compared using "relational operators." There are
    six possible relationships, shown by the following operators:

    Relational Operator      Meaning
    ──────────────────────────────────────────────────────────────────────────
    =                        Equal to

    <>                       Not equal to

    >                        Greater than

    <                        Less than

    >=                       Greater than or equal to

    <=                       Less than or equal to

    ──────────────────────────────────────────────────────────────────────────

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    BASIC uses the equal sign (=) both to assign a value to a variable and
    also to indicate logical equality. BASIC knows which usage is intended
    from the context.
    ──────────────────────────────────────────────────────────────────────────

    The following list shows how these relationships are evaluated:

    Relational Operation                 Evaluation
    ──────────────────────────────────────────────────────────────────────────
    7 = 35                               False

    7 <> 6                               True

    6 > 1                                True

    4 < 3                                False

    7 <= 7                               True

    8 >= 7                               True

    apples = oranges                     Depends on values of variables
    ──────────────────────────────────────────────────────────────────────────

    As for the last statement──apples aren't oranges. But if apples and
    oranges were variable names, then the truth or falsity of the statement
    would depend on the values of these variables.

    The following relational operations compare strings. Are they true or
    false?

    "Tarzan" <> "Jane"
    "Y" = "Y"
    "Y" = "y"
    "miss" > "misty"

    Tarzan and Jane are different strings, so the first assertion is true. Y
    and Y are the same character, so the second assertion is true. Y and y are
    not the same character, so the third assertion is false.

    The last statement may be confusing at first; how can one string be
    "larger" or "smaller" than another? It can be, and the decision is made
    this way. The strings are first compared, position by position, until
    BASIC finds characters that don't match. In this example, the fourth
    characters are the first nonmatching characters. The decision of "larger"
    or "smaller" is then based on these differing characters, in the following
    way.

    Within the computer, characters are represented by numbers. Letters coming
    later in the alphabet have numeric values larger than those appearing
    earlier. Since t follows s in the alphabet, t is a "larger" letter, and
    the statement is therefore false; misty is "larger" than miss. This
    ability to determine the relative value of strings makes it easy to write
    a program that can alphabetize a list of words or names.

    In most of these examples, numbers were compared with numbers and strings
    with strings. But any combination of numbers and numerical variables can
    be compared; the same is true for strings and string variables. The only
    things you cannot compare are numerical values with string values because
    the comparison is logically meaningless.

Boolean Expressions

    Logical assertions are called "Boolean expressions" (for George Boole, who
    formulated some of the rules of mathematical logic). Boolean operations
    are concerned with only one thing: is a Boolean expression true or false?
    Unlike mathematical expressions, which evaluate to numbers, Boolean
    expressions evaluate to one of two values: "true" or "false."

    Computers use numbers to represent "true" and "false." To see how BASIC
    codes "true" and "false," enter and run these two lines, as follows:

    1. Choose the File menu's New Program command to clear the View window.

    2. Type the following example in the View window:

        PRINT 5 > 6
        PRINT 6 > 5

    3. Choose the Run menu's Start command.

        The output should look like the following:

        0
        -1

        The display shows 0 on the first line, -1 on the second.

        The number 5 is not greater than 6, so BASIC prints its value for
        "false": 0. The number 6 is greater than 5, so BASIC prints its value
        for "true": -1.

    4. Type CLS in the Immediate window and press ENTER to clear the output
        screen.

Compound Expressions

    In BASIC, a compound Boolean expression is created by connecting two
    Boolean expressions with a "logical operator." The two most commonly used
    logical operators are AND and OR.

    The AND operator requires both expressions to be true if the compound
    expression is to be true. When the OR operator is used, only one of the
    expressions has to be true for the compound expression to be true.

    The following examples are compound expressions that combine two simple
    expressions by using AND or OR:

    Expression                                       Evaluation
    ──────────────────────────────────────────────────────────────────────────
    10 > 5 AND 100 < 200                             True

    3 < 6 AND 7 > 10                                 False

    8 < 7 OR 90 > 80                                 True

    2 < 1 OR 3 > 60                                  False

    "Y" > "N" AND "yes" <> "no"                      True

    "Y" < "N" OR 4 <> 4                              False
    ──────────────────────────────────────────────────────────────────────────

    The NOT operator reverses the truth or falsity of an expression:

    Expression                                       Evaluation
    ──────────────────────────────────────────────────────────────────────────
    NOT (5 > 10)                                     True

    NOT (8 < 7 OR 90 > 80)                           False

    NOT (3 < 6 AND 7 > 10)                           True

    NOT (0)                                          True
    ──────────────────────────────────────────────────────────────────────────

    The logic of the last example may not be immediately obvious. In BASIC,
    false is zero. Therefore, NOT (0) means "not false," or true. Combinations
    of AND, OR, and NOT can be used to build up very complex expressions.
    There is no practical limit to their complexity, except the obvious one of
    writing an expression that is difficult to read.

    When Boolean expressions are evaluated, the precedence of evaluation is
    taken in the same order as arithmetic expressions, with AND equivalent to
    multiplication and OR equivalent to addition. Evaluation goes from left to
    right, with all the simple expressions evaluated first. All the
    AND-connected expressions are evaluated next, followed by the OR-connected
    expressions. As with arithmetic expressions, parentheses can be used to
    control the order of evaluation, rather than relying on the rules of
    precedence.

    See Chapter 1, "Control-Flow Structures," in Programming in BASIC, for
    more explanation of why BASIC considers -1 equivalent to true.

    The next sections show how Boolean expressions are used in programs.


Using Logical Statements to Control Program Flow

    You are always deciding what to do next by evaluating your priorities and
    desires, asking yourself which is most important at the moment. Similarly,
    BASIC has a mechanism that allows your program to select which set of
    operations (that is, which part of the program) will be executed next.

    This mechanism is the IF...THEN...ELSE statement. If a Boolean expression
    is true, the statements following THEN are executed. If the expression is
    false, the statements following ELSE are executed. A Boolean expression
    must be either true or false, so one or the other group of statements has
    to execute. Both cannot execute.

    The process of selecting among two or more possible actions (or sections
    of program code) is called "branching." The analogy is with the way a tree
    branch subdivides into more and more branches.

    This is the syntax of the IF...THEN...ELSE statement:

    IF booleanexpression THEN
        statements to do something
    ELSE
        statements to do something else
    END IF

    Try the following simple example to use the IF...THEN...ELSE statement to
    decide whether a number entered is greater than, less than, or equal to
    100:

    1. Choose the File menu's New Program command to clear the View window.

    2. Type the following example in the View window:

        INPUT "enter a number: ", n

        IF n > 100 THEN
        PRINT n; "is greater than 100"
        ELSE
        PRINT n; "is less than or equal to 100"
        END IF

    3. Choose the Run menu's Start command.

        The logical opposite of "greater than" is "less than or equal to" (not
        "less than"). Run this example with several values for n, including a
        value of 100 to verify that the is less than or equal to 100 statement
        is displayed.

    4. Type CLS in the Immediate window and press ENTER to clear the output
        screen.

    See Chapter 1, "Control-Flow Structures," in Programming in BASIC for a
    more detailed explanation of the IF...THEN...ELSE statement and other
    decision structures available in QuickBASIC.


Repeating Program Operations

    BASIC offers several ways to execute a group of program statements
    repeatedly. You can repeat them a fixed number of times or until a
    particular logical condition is met. If you want to execute a block of
    statements 100 times, you need only type them in once. BASIC's control
    structures then control the repetitions.

    The ability to repeat program statements has many uses. For example, to
    raise a number N to the power P, N must be multiplied by itself P times.
    To enter data for a ten-element array, you must prompt the user ten times.

The FOR...NEXT Loop

    One way to repeat a section of the program is the FOR...NEXT loop. The
    block of program statements between the FOR and NEXT keywords is executed
    repeatedly a specified number of times. Try the following:

    1. Choose the File menu's New Program command to clear the View window.

    2. Type the following example in the View window:

        FOR count% = 1 TO 5
        PRINT "this line is printed 5 times; this is time"; count%
        NEXT count%

    3. Choose the Run menu's Start command.

        The output should look like the following:

        this line is printed 5 times; this is time 1
        this line is printed 5 times; this is time 2
        this line is printed 5 times; this is time 3
        this line is printed 5 times; this is time 4
        this line is printed 5 times; this is time 5

    4. Type CLS in the Immediate window, then press ENTER to clear the output
        screen.

    In the example above, the variable count% is called the "loop variable" or
    "loop counter." The two numbers after the equal sign (separated by the
    keyword TO) are the start and end values for the loop counter. In this
    example, 1 is the start value, and 5 is the end value.

    Before the statements in the FOR...NEXT loop are executed for the first
    time, the loop counter is given the start value (in this case, 1). After
    each execution of the statements in the loop, BASIC automatically
    increments count% by one. This cycle continues until count% is larger than
    the end value (in this case, 5). The statements between the FOR and NEXT
    keywords in this example are therefore executed five times.

    To repeat a FOR...NEXT loop n times, the start and end values would
    normally be 1 and n. This is not a necessity, though. They can have any
    two values that differ by n - 1. For example, using -2 and 2 would also
    cause five repetitions.

    The counter can be the subscript variable for an array. (Accessing each
    element in an array is a common use for a FOR...NEXT loop.) The next
    example prompts the user for the high temperature on each day in July:

    DIM july!(31)

    FOR date% = 1 TO 31
        PRINT "enter the high temp for July"; date%;
        INPUT " ", july!(date%)
    NEXT date%

    Neither the start nor the end value has to be a constant; either or both
    can be a variable. The following example requests start and end values,
    then prints out the square root of every value in that range:

    INPUT "starting value? ", startval%
    INPUT "ending   value? ", endval%
    FOR count% = startval% TO endval%
        PRINT "the square root of"; count%; "is"; SQR(count%)
    NEXT count%

    The increment defaults to a value of one if it isn't specified. The STEP
    statement sets a different increment value, as shown in the following
    procedure:

    1. Choose the File menu's New Program command to clear the View window.

    2. Type the following example in the View window:

        FOR count% = 5 TO 1 STEP -1
        PRINT "this line is printed 5 times; this is time"; count%
        NEXT count%

    3. Choose the Run menu's Start command.

        The output should look like the following:

        this line is printed 5 times; this is time 5
        this line is printed 5 times; this is time 4
        this line is printed 5 times; this is time 3
        this line is printed 5 times; this is time 2
        this line is printed 5 times; this is time 1

    4. Type CLS in the Immediate window, then press ENTER to clear the output
        screen.

    The step value must be consistent with the start and end values. If the
    end value is larger than the start value, the step must be positive. If
    the end value is smaller than the start value, the step must be negative.
    If the step has the wrong sign, the FOR...NEXT loop doesn't execute even
    once; it is skipped over.

The DO...LOOP

    You have just seen one way to repeat a section of the program, the
    FOR...NEXT loop. The FOR...NEXT loop, however, has a serious limitation.
    Although you can specify the starting and ending points, the loop itself
    is fixed; it repeats a specific number of times, no more and no less.

    This caused no problem in the example where you were prompted for the 31
    high temperatures in July, because July always has 31 days. However, there
    are times you can't know how often to repeat a calculation or an
    operation.

    Suppose you were searching through text, one line at a time, for a
    specific word. You don't know which line the word is on (if you did, you
    wouldn't have to search), so you can't specify the number of times to go
    through a FOR...NEXT loop. You need a flexible (rather than fixed) way to
    repeat groups of program statements.

    The DO...LOOP is the more flexible mechanism for repetition needed here.
    Program statements between the DO and LOOP keywords are repeated an
    indefinite number of times. Try the following example:

    1. Choose the File menu's New Program command to clear the View window:

    2. Type the following example in the View window.

        DO
        PRINT "Going around in circles..."
        LOOP

    3. Choose the Run menu's Start command.

        Going around in circles... is printed over and over, without end. (To
        stop the program, press CTRL+BREAK.)

    4. Type CLS in the Immediate window and press ENTER to clear the output
        screen.

    The simple DO...LOOP shown above is endless. BASIC has a way to terminate
    the loop at the right time. All you have to do is specify the logical
    condition you want to cause termination.

    One way to do this is to use a WHILE condition, which tells the computer
    to continue executing the loop WHILE some condition is true. Another is to
    use an UNTIL condition, meaning continue executing the loop UNTIL some
    condition becomes true.

    In a DO WHILE loop, the condition starts off true, and the loop executes
    as long as the condition remains true. In a DO UNTIL loop, the condition
    starts off false, and the loop executes until the condition becomes true.

    The user-defined condition is a Boolean expression. This expression
    usually compares a variable with a constant. When the expression satisfies
    the logical condition set by the programmer (such as the variable
    equalling the constant), the loop terminates. (Any comparison is possible,
    but comparing the loop variable with a number or string is the most
    common.)

    The DO WHILE Loop

    A DO WHILE loop looks like this:

    DO WHILE booleanexpression
        statements to be repeated
    LOOP

    Here is a simple DO WHILE loop that demonstrates how such a loop operates.
    The loop termination condition is for big! to equal little!.

    big! = 256.0
    little! = 1.0
    DO WHILE big! <> little!
        PRINT "big ="; big!; "  little ="; little!
        big! = big! / 2.0
        little! = little! * 2.0
    LOOP

    Two variables, big! and little!, are initialized outside the loop. Within
    the loop, their values are first printed, then big! is divided by 2 and
    little! is multiplied by 2. The process repeats until both are equal to 16
    and the loop terminates.

    The initial values of big! and little! were chosen to guarantee that they
    would eventually be equal. If they are not so chosen, the loop repeats
    indefinitely. (In practice, the program eventually stops regardless of the
    values chosen. The variable little! is repeatedly doubled, ultimately
    becoming so large that its value cannot be represented by a BASIC
    floating-point variable. The program then halts, displaying an Overflow
    error message.)

    Please note that for a DO WHILE loop to execute even once, the Boolean
    expression must be true. If big! and little! started with the same value,
    the expression big! <> little! would be false, and the loop would not
    execute at all; it would be skipped over. Always be sure the variables in
    the Boolean expression have the values you really want before entering the
    loop.

    The DO UNTIL Loop

    A DO UNTIL loop is identical in form to a DO WHILE loop, except it uses
    the keyword UNTIL:

    DO UNTIL booleanexpression
        statements to be repeated
    LOOP

    The loop shown in the last example could also have been written using
    UNTIL, as shown here:

    big! = 256.0
    little! = 1.0
    DO UNTIL big! = little!
        PRINT "big ="; big!; "  little ="; little!
        big! = big! / 2.0
        little! = little! * 2.0
    LOOP

    A DO UNTIL loop continues until the Boolean expression becomes true, so a
    different terminating condition is needed. In this case, it is the
    opposite of the condition in the DO WHILE example above: big! = little!.

    The following is a more practical example of a DO...LOOP. The user is
    repeatedly prompted for a Yes / No response (indicated by Y or N) until it
    is supplied:

    DO UNTIL instring$ = "Y" OR instring$ = "N"
        INPUT "enter Yes or No (Y/N): ", instring$
    LOOP
    PRINT "You typed"; instring$

    Note that y and n are not accepted, since instring$ is compared only with
    uppercase characters.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    In the loop examples given, both the WHILE and UNTIL statements are
    located after DO. It is also possible to place them following the LOOP
    keyword. When that is done, the statements in the loop are executed
    first, then the condition is tested. This assures that the loop will
    always be executed at least once. See Chapter 1, "Control-Flow
    Structures," in Programming in BASIC, for an explanation of how this
    works.
    ──────────────────────────────────────────────────────────────────────────


Writing a Simple BASIC Program

    If you've worked through the examples, you should now know the
    fundamentals of programming in BASIC. To demonstrate your understanding,
    try writing the simple program described below.

    The program computes the average of several numbers. It could be written
    in the following sequence:

    1. Prompt the user for the quantity of numbers to be averaged.

    2. If the quantity is zero or negative, print a warning message and do
        nothing else.

    3. If the quantity is positive, pick a variable name for the running total
        and set it equal to zero.

    4. Prompt for the numbers, one at a time. Tell the user each time which
        value is being entered (number 1, number 2, and so on).

    5. When all the numbers have been entered, compute and print the average
        value.

    This program uses only BASIC language elements that have been explained in
    this chapter, and no programming "tricks" are needed. A solution is given
    below, but please try to create your own program before peeking. This is
    an "open-book" project. If you get stuck, simply reread this chapter to
    find the program statements you need and to see how they are used.

    There are many ways to write a program. If your program works, it's
    correct, even if it differs from the program given here.

    INPUT "How many numbers do you wish to average? ", howmany%

    IF howmany% <= 0 THEN
        PRINT "Not a valid quantity; must be greater than 0."
    ELSE
        total! = 0.0                   ' Set running total to zero.
        FOR count% = 1 TO howmany%
            PRINT "number"; count%;
            INPUT " ", value!
            total! = total! + value!
    ' Add next value to total.
        NEXT count%
        PRINT "The average value is"; total! / howmany%
    END IF


For More Information

    Now you know how to write simple programs in BASIC. There is, however, a
    great deal more to BASIC programming.

    QuickBASIC's manuals and on-line help provide complete information on
    using the QuickBASIC environment and each of the QuickBASIC statements and
    functions. However, the documentation does not include a complete
    introduction to BASIC, and does not teach the general principles of
    programming, or how to use DOS. The following books contain more
    information on those subjects. They are listed for your convenience only.
    With the exception of its own publications, Microsoft Corporation neither
    endorses these books nor recommends them over others on the same subjects.

Books about BASIC

    Craig, John Clark. Microsoft QuickBASIC Programmer's Toolbox. Redmond,
    Wash.: Microsoft Press, 1988.

    Dwyer, Thomas A., and Margot Critchfield. BASIC and the Personal Computer.
    Reading, Mass.: Addison-Wesley Publishing Co., 1978.

    Enders, Bernd, and Bob Petersen. BASIC Primer for the IBM PC & XT. New
    York, N.Y.: New American Library, 1984.

    Feldman, Phil, and Tom Rugg. Using QuickBASIC 4. Carmel, Ind.: Que
    Corporation, 1988.

    Hergert, Douglas. Microsoft QuickBASIC. 2d ed. Redmond, Wash.: Microsoft
    Press, 1988

    The first edition of this book discusses programming techniques
    appropriate for QuickBASIC Versions 2.0 and 3.0. Use the second edition
    for information on programming in QuickBASIC Version 4.0.

    Inman, Don, and Bob Albrecht. Using QuickBASIC. Berkeley, Cal.: Osborne
    McGraw-Hill, 1988.

Books about DOS

    Duncan, Ray. Advanced MS-DOS. Redmond, Wash.: Microsoft Press, 1986.

    Wolverton, Van. Running MS-DOS. 2d ed. Redmond, Wash.: Microsoft Press,
    1985.

    Wolverton, Van. Supercharging MS-DOS. Redmond, Wash.: Microsoft Press,
    1986.



────────────────────────────────────────────────────────────────────────────
PART 2  HANDS ON WITH QUICKBASIC
────────────────────────────────────────────────────────────────────────────

    Part 2, "Hands On with QuickBASIC" is a tutorial in which you finish a
    real application program, QCARDS.BAS. Although QCARDS is a model of good
    structured programming, the purpose of the tutorial is to introduce the
    Microsoft QuickBASIC environment, rather than teach programming
    techniques. The comments that describe each code block may be all you need
    to understand the programming, but you don't have to understand the
    programming concepts used in each section before moving on to the next.
    When you finish the tutorial, you will have used three of QuickBASIC's
    most sophisticated features──the smart editor, on-line help, and
    debugging──in real programming situations. Then you can review the program
    comments and code and use QuickBASIC's on-line help and debugging features
    to understand how each block works.

    Chapter 5 describes the structure of QCARDS, previews its interface, and
    shows you how to enter a SUB...END SUB procedure. In Chapter 6 you'll see
    how the smart editor helps catch and correct programming errors as you
    enter code. Chapters 7 and 8 give you practice in using on-line help the
    way you will use it while writing your own programs. In Chapter 9 you
    will track and fix a bug so QCARDS will run correctly. At the end of
    Chapter 9, QCARDS is fully functional and ready to use.



────────────────────────────────────────────────────────────────────────────
Chapter 5  The QCARDS Program

    This chapter describes QCARDS.BAS, the program on which the rest of the
    tutorial on QuickBASIC is based. You'll add some code in the form of a
    "procedure," a routine you write once and then call from different parts
    of the program, to perform a specific task. In this chapter, you will

    ■ Load a program at the same time you invoke QuickBASIC

    ■ Browse through the QCARDS.BAS code

    ■ Call procedures from the Immediate window

    ■ Create and call a SUB procedure

    This chapter takes about one hour to complete.


Building QCARDS

    As you work through the QuickBASIC tutorial in Chapters 5-9, you'll add
    lines of code to the QCARDS program. The code-entry sequences that are
    part of QCARDS appear under special headings, so you know which ones are
    necessary for finishing the tutorial program. You can save your work as
    you finish each numbered sequence. If you make a mistake during a
    code-entry sequence, just reload the previous saved version and repeat the
    current sequence.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    As you browse through QCARDS, you may notice some errors in the code.
    These errors are intentional. You will fix them as you work through the
    tutorial.
    ──────────────────────────────────────────────────────────────────────────


Loading a Program When You Start QuickBASIC

    You can start QuickBASIC and load a program at the same time by including
    the program name as a command-line "argument." An "argument" is
    information you supply to a command to modify the command.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    If you don't have a hard disk, copy the files QCARDS.BAS and QCARDS.DAT
    to an empty removable disk and use that disk to complete the tutorial.
    ──────────────────────────────────────────────────────────────────────────

    Type the following line at the DOS prompt to start QuickBASIC and have it
    automatically load QCARDS.BAS:

    ►  qb qcards

    When you start QuickBASIC this way, QuickBASIC searches the current
    working directory for a file with the name QCARDS and the extension .BAS.
    If QuickBASIC finds the file, it loads it. If the file is not found,
    QuickBASIC assumes you are starting a new program that you want to name
    QCARDS.BAS.


A Quick Tour of QCARDS

    If you completed the computer-based training called QB Express, you'll
    recognize some of QCARDS. In Chapters 5-9 you'll work with the real
    QCARDS code.

    If you are new to programming, some of this material may seem difficult
    because QCARDS is a real application program. Don't worry──you don't need
    to master all the material in each section before moving on. This tutorial
    is designed to teach the programming tools of the QuickBASIC environment,
    not programming techniques.

    Even if you have programmed in BASIC before, you may learn some powerful
    techniques because QCARDS is a structured program that uses procedures. In
    fact, if you have used a BASIC interpreter (like GW-BASIC(R) or BASICA),
    you're in for a pleasant surprise.

The QCARDS Program

    QCARDS is a database program. It provides a convenient way to work with
    many small collections of information (called records), which are stored
    together in a disk file. QCARDS manages the disk file──opening and closing
    it and updating the records as you modify, add, or delete specific pieces
    of information or whole records. The fun part of QCARDS is the
    "interface," the part of the program where the user interacts with QCARDS
    (see Figure 5.1).


                ┌Records have fields
                │such as street and city                       QCARDS' help┐
    ┌───────────┼──────────────────────────────────────────────────────────┼┐
    │           │                                                          ││
    │           │                                                          ││
    │           ├─────────────────────────────────────┐                    ││
    │         ┌─┼───────────────────────────────────┐═╡                  ┐ ││
    │       ┌─┴─┼─────────────────────────────────┐═╡ │Select card with: │ ││
    │     ┌─┴───┼───────────────────────────────┐═╡ │ │       UP         │ ││
    │ ┌─┌─┴─────┼─────────────────────────────┐═╡ │ │ │       DOWN       │ ││
    │ │ ╞═══════╪═════════════════════════════╡ │ │ │ │       PGUP       ├─┘│
    │ │ │Note:  │_____________________________│ │ │ ├─┘       PGDN       │  │
    ┌─┼─│ │Birth: │__/__/__  Phone: ___-___-____│ │ ├─┘         HOME       │  │
    │ │ │ │Street:│\____________________________│ ├─┘           END        │  │
    │ │ │ │City: _▼__________ ST: ___ Zip: _____├─┘                        ┘  │
    │ │ └ └─────────────────────────────────────┘                             │
    │ │                                                                ┐      │
    │ │Edit Top  Add New  Copy to New  Delete  Find  Sort  Print  Quit ├──┐   │
    │ │                                                                ┘  │   │
    │ └───────────────────────────────────────────────────────────────────┼───┘
    └──Each card represents a record.                QCARDS' command line─┘

    Figure 5.1  QCARDS' Interface

    QCARDS uses the concept of an index-card file to present the data in a
    familiar way. Each card that appears on screen represents a record in the
    database. Each card has several "fields" (separate areas on the card) that
    are used to enter new data or change and reorder existing data.

    Once you understand QCARDS, you can modify the data (and the program
    itself) and use it for any kind of information you wish to store. QCARDS
    is a large program, but it is organized according to structured
    programming principles (that is, it divides complicated tasks into simpler
    ones). This means you can learn its programming techniques gradually. As
    you read the next few sections, scroll down through QCARDS as each part is
    described.

Declarations and Definitions

    QCARDS begins with a short section describing its purpose. Next comes a
    section of declarations and definitions. The declarations and definitions
    use statements like DEFINT, CONST, TYPE...END TYPE, DECLARE, DIM, and
    REDIM. They let QuickBASIC anticipate the amount of space to reserve in
    memory for the program's variables. For example,DEFINT A-Z tells
    QuickBASIC that any variable for which a data type is not explicitly
    declared should be considered an integer.

    CONST statements improve program readability by giving descriptive names
    to values the computer regards only as numbers. For example, the value 0
    (zero) represents the logical condition "false" in QuickBASIC. At about
    line 45, a CONST statement defines the symbolic constant FALSE as the
    value zero. This lets you use the word FALSE to represent the value 0 in
    logical comparisons.

    TYPE...END TYPE constructions declare "aggregate" data types. Aggregate
    data types are those that can include both strings and all types of
    numeric values. For example, once the PERSON data type is declared (at
    about line 56), you can define variables to have this user-defined type.

    Lines that begin with the DECLARE statement allow QuickBASIC to check
    procedure calls to make sure you use them correctly.

Comments

    After the declarations and definitions comes a large section that contains
    mostly comments. Each comment block describes a block of executable
    statements that you will enter as you complete QCARDS. The statements
    define the program's overall flow of control. This section of QCARDS
    concludes with an END statement to mark the end of the program's normal
    execution sequence.

Statements Following the END Statement

    The final section of the program starts after the END statement. Each
    group of statements in this section is preceded by a "label," a name
    followed by a colon. (A QuickBASIC label is similar to line numbers in
    BASIC interpreters.) The statements associated with these labels are
    executed only if other statements (that contain references to the labels)
    are executed. The first label (MemoryErr) labels an error handler. If a
    certain type of error occurs during execution of QCARDS, the statements
    following MemoryErr display a message on the screen, then end the program.
    The remaining labeled sections contain DATA statements that are executed
    when the index cards are drawn on the screen.

Calling QCARDS Procedures from the Immediate Window

    There are two levels of programming in QCARDS. The module level contains
    the program's most general logic. The procedure level contains many
    individual procedures that do the program's detailed work.

    Just as you can use the Immediate Window to see the effects of a BASIC
    statement, you can use it to call a program's procedures. This lets you
    see the effects of a procedure without running the entire program. Each
    procedure performs a specific task. The following steps illustrate how to
    call procedures that display the QCARDS user interface on the output
    screen:

    1. Press F6 to move the cursor into the Immediate window.

    2. Type CLS and press ENTER to clear the output screen. Then press a key
        to return the cursor to the Immediate window.

    3. Type CALL DrawCards and press ENTER.

        QuickBASIC executes the DrawCards procedure. Calling a procedure is
        just like executing a BASIC statement. The procedure performs its task,
        then QuickBASIC waits for the next instruction.

    4. Press a key to return to the Immediate window, then type the following
        on the next line in the Immediate window, exactly as shown:

        CALL ShowCmdLine  : DO : LOOP

    5. Press ENTER to execute the line you just typed.

        The ShowCmdLine procedure adds the QCARDS command line to the parts
        already displayed. This time, however, QuickBASIC does not immediately
        display the

        Press any key to continue

        prompt, because the DO and LOOP statements following ShowCmdLine create
        an unconditional loop (that is, an infinite loop).

Breaking an Unconditional Loop from QCARDS

    While building QCARDS, you will need to escape from unconditional loops
    because QCARDS does not yet respond to key presses. However, QuickBASIC
    checks for one particular key-press combination, CTRL+BREAK, which lets
    you break out of an infinite loop and return to the QuickBASIC
    environment. Note that when you finish adding code to QCARDS, a user will
    be able to press any of the high-intensity letters on the QCARDS command
    line to execute commands. For example, the Q key will terminate the
    program and return control to QuickBASIC because QCARDS will check each
    key the user presses and carry out the requested action. Try this to break
    an unconditional loop:

    ►  Press CTRL+BREAK to return control to QuickBASIC.

        Notice that when you press CTRL+BREAK, the cursor does not return to
        the Immediate window (where the last statement you executed is
        located). Instead, it is placed in the View window.

The Module-Level Code

    Every QuickBASIC program has a module level──it's what QuickBASIC displays
    in the View window when you first open the program. Most of the code you
    will add to QCARDS is called "module-level code." It uses BASIC statements
    and functions (in combination with QCARDS procedures), to carry out the
    program's tasks, which are described in the comments. The module-level
    code you add to QCARDS defines the general way QCARDS interacts with the
    user.

Structured Programming with Procedures

    You can write programs that have only a module level. However, the details
    of each task can obscure the general program logic, making the program
    difficult to understand, debug, and enhance. For ease of understanding and
    debugging, QCARDS delegates most processing tasks to procedures (such as
    DrawCards and ShowCmdLine) that are called when their tasks need to be
    performed. Figure 5.2 illustrates the relationship between module-level
    code and procedures and their execution sequences.


    ┌──────────────────────────────────────────────────────────────────────┐
    ┌─│                        PROGRAM.BAS Module                            │─
    │ └──────────────────────────────────────────────────────────────────────┘
    │   ┌───────────────────────────┐        ┌──────────────────────────────┐
    │ ┌─│     Module-Level Code     ├─┐    ┌─┤     Procedure-Level Code     ├┐
    │ │ └───────────────────────────┘ │    │ └──────────────────────────────┘│
    │ │                               │    │                                 │
    │ │ (Definitions and declarations)│    │                                 │
    │ │  ∙                            │    │                                 │
    │ │  ∙                            │    │                                 │
    │ │  ∙                            │    │                                 │
    │ │ (General execution sequence)  \\  \\                                 │
    │ │  ∙                                                                   │
    │ │  ∙                                                                   │
    │ │  ∙                                   ┌────────────────────────┐      │
    │ │ CALL Procedure1 ════════════════════►│SUB Procedure1          │      │
    │ │  ∙◄═══════════════════════════════╗  │ ∙                      │      │
    │ │  ∙                                ║  │ ∙                      │      │
    │ │  ∙                                ║  │ ∙                      │      │
    │ │ Return Value=Procedure2═════╗     ║  │ReturnValue=Procedure2 ─┼─┐    │
    │ │  ∙◄═══════════════════╗     ║     ║  │ ∙◄─────────────────────┼─┼──┐ │
    │ │  ∙                    ║     ║     ║  │ ∙                      │ │  │ │
    │ │  ∙                    ║     ║     ║  │ ∙                      │ │  │ │
    │ │                       ║     ║     ╚══│END SUB                 │ │  │ │
    │ │                       ║     ║        └────────────────────────┘ │  │ │
    │ │                       ║     ║        ┌────────────────────────┐ │  │ │
    │ │                       ║     ╚═══════►│FUNCTION Procedure2     │◄┘  │ │
    │ │                       ║              │ ∙                      │    │ │
    │ │                       ║              │ ∙                      │    │ │
    │ │                       ║              │ ∙                      │    │ │
    │ │                       ║              │Procedure2=returnval    │    │ │
    │ │                       ║              │ ∙                      │    │ │
    │ │                       ║              │ ∙                      │    │ │
    │ │                       ║              │ ∙                      │    │ │
    │ │                       ╚══════════════│END FUNCTION ───────────┼────┘ │
    │ │                                      └────────────────────────┘      │
    │ │                                                                      │
    │ │ END                           //  // ┌────────────────────────┐      │
    │ │ (Error handlers and labeled   │    │ │Any number of other SUB │      │
    │ │  data)                        │    │ │and FUNCTION procedures │      │
    │ │ ∙                             │    │ │called from module-level│      │
    │ │ ∙                             │    │ │code and from each other│      │
    │ │ ∙                             │    │ └────────────────────────┘      │
    │ │                               │    │                                 │
    │ └───────────────────────────────┘    └─────────────────────────────────┘
    └──────────────────────────────────────────────────────────────────────────

    Figure 5.2  Modules and Procedures

    A procedure is usually a group of statements that performs a single task.
    Procedures are saved as part of the same disk file as the module-level
    code. However, QuickBASIC treats procedures as logically self-contained
    entities, separate from the module-level code and from each other.
    Although every program has a module level, a procedure level does not
    exist until a procedure is actually defined. QuickBASIC executes the
    statements in a procedure only if the procedure is explicitly invoked. You
    can invoke procedures from the module-level code, from other procedures,
    or from the Immediate window.

A Profile of the Parts of the Program

    Even though they are all in the same disk file, QuickBASIC keeps a
    program's procedures separate from the module-level code and from each
    other. Therefore, you can't have a procedure and module-level code (or two
    procedures) in the same window at the same time. To edit these different
    parts of a program, you move them in and out of the View window using the
    View menu's SUBs command. The SUBs dialog box lists all the procedures in
    a program. Try the following to see a profile of all the parts of QCARDS:

    1. Press ALT+V, then press S to choose the View menu's SUBs command.

        The SUBs dialog box lets you access all parts of your program (see
        Figure 5.3). The first entry, QCARDS.BAS, is a file name. It
        represents the program's module-level code.


        Name of module containing                    Procedures are indented
        procedures indented below it                 beneath module name.
        │                                                  │
        ┌┼───────────────────────────────── SUBs ───────────┼───────────────────
        ││                                                  │
        ││Choose program item to edit                       │
        ││┌─────────────────────────────────────────────────┼───────────────────
        │└┼ QCARDS.BAS              PrintLabel              │
        │ │   AsciiKey              Prompt                  │
        │ │   CleanUp               SelectField             │
        │ │   ClearHelp             ShowCards ──────────────┘
        │ │   DrawCards             ShowCmdLine
        │ │   EditCard              ShowEditHelp
        │ │   EditString            ShowTopCard
        │ │   FindCard              ShowViewHelp
        │ │   InitIndex             SortIndex
        │ └─←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒→
        │┌QCARDS.BAS is the Main Module
        ││
        ││  < Edit in Active >                                     < Cancel >
        ├┼──────────────────────────────────────────────────────────────────────
        ││   < Delete > ───────────────────┐                        < Help >
        └┼─────────────────────────────────┼────────────────────────────────────
        │                                 │
        Describes the                   Deletes a file from a program,
        selected item                   or a procedure from its file

        Figure 5.3  SUBs Dialog Box

    2. Press DOWN to select the first entry beneath QCARDS.BAS.

        The first entry beneath QCARDS.BAS is AsciiKey. Each entry indented
        beneath QCARDS.BAS represents a SUB or FUNCTION procedure used by the
        program. All these procedures are saved in the QCARDS.BAS disk file.

    3. Select the DrawCards procedure and press ENTER.

        QuickBASIC displays the code of the DrawCards procedure in the View
        window. Note that the View window's title bar contains

        QCARDS.BAS:DrawCards

        Use DIRECTION keys to scroll around in DrawCards. Its text is the only
        text in the View window.

    4. Press ALT+V, then press S to choose the View Menu's SUBs command and
        select QCARDS.BAS if it is not already selected.

    5. Press ENTER to return the module-level code to the View window.

    QuickBASIC lets you define two types of procedures: SUB and FUNCTION
    procedures. To include the code of a procedure in your program's execution
    sequence, place its name wherever you want its task performed. You invoke
    a SUB procedure by using its name in a CALL statement. FUNCTION procedures
    are used the way QuickBASIC's intrinsic functions (like TIME$) are.
    Procedures are an effective way to code tasks that are performed
    repeatedly.

Defining a Procedure in QCARDS

    You can start learning about procedures by writing simple ones. Do the
    following to see how QuickBASIC automatically segregates each procedure
    from the rest of the program. It also shows you how to define and call a
    simple procedure that you'll use later in QCARDS.

    QCARDS Code Entry 1

    1. Place the cursor at a blank line at the end of the declarations and
        definitions section in the View window (about line 102).

    2. Press ENTER to create another blank line.

    3. Type the words SUB Alarm and press ENTER.

        QuickBASIC opens a new window and starts the procedure with the
        statements SUB Alarm and END SUB. The statement DEFINT A-Z appears
        above the SUB statement because when you create a procedure, it
        inherits the default data type of the module-level code.

        The title bar in the View window now contains the name of the module
        (QCARDS.BAS) plus Alarm, the name of the procedure in the View window.

    4. Type the following comment and code blocks, exactly as shown, between
        the SUB and END SUB statements:

        ' The Alarm procedure uses the SOUND statement to send signals
        ' to the computer's speaker and sound an alarm.
        '
        '
        ' Parameters: None
        '
        ' Output: Sends an alarm to the user

        ' Change the numbers to vary the sound.
        FOR Tone = 600 TO 2000 STEP 40
            SOUND Tone, Tone / 7000
        NEXT Tone

        You can test the procedure and see what it does by calling it from the
        Immediate window.

    5. Move the cursor to the Immediate window. Then type CALL Alarm and press
        ENTER.


Saving Edited Text

    From now on, each time you save your work you will save the program with
    the name of the current chapter. When you save a program with a different
    name, the old version (QCARDS.BAS, in this case) still exists unchanged on
    disk. Therefore, if something makes a succeeding version of the program
    unusable, you can reload the previous version of the program and start
    over again.

    QCARDS Code Entry 2

    1. Press ALT+F, then press A to choose the File menu's Save As command.

        The Save As dialog box appears (see Figure 5.4).


                        ┌─Type your program name here
                        │
        ┌────────────────┼───── Save As ──────────────────┐
        │                │                                │
        │             ┌──┴───────────────────────────────┐│
        │ File Name:  │                                  ││
        │             └──────────────────────────────────┘│
        │ C:\QB4.5\DEMO                                   │
        │                                                 │
        │   Dirs/Drives                                   │
        │ ┌──────────────┐      ┌─────── Format ────────┐ │
        │ │..            ↑      │ (∙) QuickBASIC -      │ │
        │ │SOURCE        ░      │      Fast Load and    │ │
        │ │[-A-]         ░      │      Save             │ │
        │ │[-B-]         ░      │                       │ │
        │ │[-C-]         ░      │ ( ) Text -            │ │
        │ │[-U-]         ░      │      Readable by      │ │
        │ │[-Z-]         ↓      │      Other Programs   │ │
        │ └──────────────┘      └───────────────────────┘ │
        ├─────────────────────────────────────────────────┤
        │      < OK >            < Cancel >     < Help >  │
        └─────────────────────────────────────────────────┘

        Figure 5.4  Save As Dialog Box

    2. Type the name chapter5 in the text box and press ENTER.

        This saves the program QCARDS.BAS as CHAPTER5.BAS on disk. The Alarm
        procedure that you created is saved as part of CHAPTER5.BAS.


For More Information

    For more information on the topics covered in this chapter, see the
    following:

    Where to Look                        What You'll Find
    ──────────────────────────────────────────────────────────────────────────
    Chapter 11, "The File Menu"         Complete information on file
                                        management in QuickBASIC, including
                                        file-format options and special
                                        commands for opening types of files
                                        other than single-file programs.

    Chapter 13, "The Edit Menu" and     Complete information on creating and
    Chapter 14, "The View Menu"         viewing procedures in QuickBASIC.

    Chapter 2, "SUB and FUNCTION         Explanations of BASIC's rules for
    Procedures," in Programming in BASIC creating all types of SUB and
                                        FUNCTION procedures.
    ──────────────────────────────────────────────────────────────────────────



────────────────────────────────────────────────────────────────────────────
Chapter 6  Editing in the View Window

    QuickBASIC's editing features let you write and modify programs quickly,
    easily and accurately. As you edit, QuickBASIC checks your code to make
    sure it is valid BASIC syntax. In this chapter you will use the editing
    tools to

    ■ Discover QuickBASIC's smart editor

    ■ Understand QuickBASIC's automatic text formatting

    ■ Use on-line help to answer questions on the spot

    ■ Use the Edit menu's Cut, Copy, and Paste commands

    ■ Search for and replace text

    You'll enter module-level code in QCARDS. If you have questions about any
    words you are typing, use on-line help (position the cursor on the word
    and press F1). On-line help includes complete descriptions and examples of
    each QuickBASIC statement and function. QuickBASIC also gives information
    on any variable, procedure, or symbolic constant at the cursor when you
    press F1. When you finish, press ESC to close the Help window.

    This chapter requires one to two hours to complete.


The Smart Editor

    One thing that makes editing in QuickBASIC different from using an
    ordinary word processor is its "smart editor." QuickBASIC recognizes
    language keywords and warns you when they are being used incorrectly.
    QuickBASIC also inserts certain types of text into the program for you.
    For example, when you created the Alarm procedure in the last chapter,
    QuickBASIC inserted the DEFINT A-Z and END SUB statements for you when you
    entered the SUB Alarm statement.

Automatic Formatting

    QuickBASIC's smart editor capitalizes keywords and places uniform spacing
    between operators (such as plus and minus signs) and their operands (the
    values they operate on). This makes your program easier to read. The
    following steps illustrate this:

    QCARDS Code Entry 3

    1. Start QuickBASIC and open CHAPTER5.BAS (if it is not open).

    2. Use PGDN and DOWN to move the cursor to the blank line beneath the
        following comment (at about line 106). Check the line counter on the
        reference bar to find the line.

        ' Open data file QCARDS.DAT for random access using file #1

    3. Press ENTER to create a blank line, then type this statement exactly as
        shown, including the initial "comment delimiter" (the apostrophe
        preceding open):

        'open "qcards.dat" for random as #1 len=len(card)

    4. Press ENTER.

        QuickBASIC reads the line as though it were just a comment so no
        formatting is done.

    5. Press UP to place the cursor at the comment delimiter.

    6. Press DEL to delete the comment delimiter.

    7. Press DOWN to move the cursor off the line.

        QuickBASIC converts the keywords (OPEN, FOR, RANDOM, AS, and LEN) to
        capital letters. Spaces are inserted on each side of the equal sign
        (=).

    Since it is easier to type in lowercase letters, lines of code are shown
    in this tutorial with keywords in lowercase. When you type them and press
    ENTER, QuickBASIC capitalizes the keywords for you. Words that aren't
    keywords (such as symbolic constants, procedure names, and variable names)
    appear in mixed case or all uppercase letters.

    The BASIC language is not "case sensitive." It doesn't distinguish between
    two versions of the same word by the case of the letters. For instance,
    the keyword OPEN is the same to the BASIC language as open or OpEn. When
    the smart editor capitalizes keywords, it is just for appearance. The
    variable name Card represents the same memory location as CArd or CaRD.

    The smart editor automatically maintains consistency in the capitalization
    of specific words in a program listing. Conventions used in this manual
    and QuickBASIC's handling of text you enter are summarized in the
    following list:

    Type of Word       Appearance in     QuickBASIC Action
                        Manual
    ──────────────────────────────────────────────────────────────────────────
    BASIC keywords     Lowercase         Converts them to all uppercase
                                        letters when you enter the line

    Variable names and Mixed case        Alters all instances of the name to
    procedure names                      most recent capitalization

    Symbolic constants Uppercase         Changes all instances of the name to
                                        most recent capitalization
    ──────────────────────────────────────────────────────────────────────────

    The following steps illustrate the rules in the table above:

    QCARDS Code Entry 4

    1. Move the cursor to the line below the following comment (at about line
        113):

        ' To count records in file, divide the length of the file by the
        ' length of a single record; use integer division () instead of
        ' normal division (/). Assign the resulting value to LastCard.

    2. Press ENTER to make space, then type the following line exactly as
        shown:

        LastCard=LoF(1)Len(Card)

        Note that the backslash (<|>) operator in BASIC performs integer
        division, rather than normal division.

    3. Press ENTER.

        Keywords are capitalized and spaces are inserted. The previous
        capitalization of card (in the OPEN statement) is updated to Card, to
        conform to the way you just typed it. QuickBASIC assumes that the last
        way you entered the word in the View window is the way you want it
        everywhere. This is done to all occurrences of the word except those
        within comments.

Syntax Checking

    When you move the cursor off any code line you edit (either by pressing
    ENTER or a DIRECTION key), QuickBASIC checks its syntax. If the line is
    not valid BASIC code, QuickBASIC displays a dialog box describing the
    error.

    The following steps show how the smart editor checks your code for syntax
    errors:

    QCARDS Code Entry 5

    1. Move the cursor to the line beneath the following comment block (about
        line 130):

        ' Redefine the Index array to hold the records in the file plus
        ' 20 extra (the extra records allow the user to add cards).
        ' This array is dynamic - this means the number of elements
        ' in Index() varies depending on the size of the file.
        ' Also, Index() is a shared procedure, so it is available to
        ' all SUB and FUNCTION procedures in the program.
        '
        ' Note that an error trap lets QCARDS terminate with an error
        ' message if the memory available is not sufficient. If no
        ' error is detected, the error trap is turned off following the
        ' REDIM statement.

    2. Press ENTER, then type the following lines exactly as shown (including
        errors):

        on error goto MemoryErr
        redim shared Index(1 to LastCard + 20) as PERSOR
        on error goto

    3. Press ENTER after the final line. QuickBASIC displays the following
        error message (see Figure 6.1):


        File  Edit  View  Search  Run  Debug  Calls  Options              Hel
        ┌────────────────────────────── CHAPTER5.BAS ─────────────────────────┤↑
        │' Also, Index() is a shared procedure, so it is available to
        │' all SUB and FUNCTION procedures in the program.
        │
        │ON ERROR GOTO MemoryErr
        │REDIM SHARED Index(1 TO LastCard + 20) AS PERSOR
        │ON ERROR GOTO ▓▓▓▓
        │                  ┌────────────────────────────────────────┐
        │                  │
        │' Note that an err│                                        │or
        │' message if the m│  Expected: 0 or label or line number   │
        │' error is detecte│                                        │ the
        │' REDIM statement.├────────────────────────────────────────┤
        │                  │          < OK >     < Help >           │
        │' Use the block IF└────────────────────────────────────────┘r
        │' to load the records from the disk file QCARDS.DAT into the
        │' array of records called Index() declared earlier. In the IF
        │' part, you will check to see if there are actually records
        │' in the file. If there are, LastCard will be greater than 0.
        │←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
        ├─────────────────────────────── Immediate ─────────────────────────────
        │
        │
        <Shift+F1=Help> <F6=Window> <F2=Subs> <F5=Run> <F8=Step>      CN 00126:

        Figure 6.1  Error-Message Dialog Box

        When you use ON ERROR GOTO to turn off an error trap (as is being done
        here) QuickBASIC expects it to be followed by the number 0.

    4. Press ESC to clear the dialog box.

        QuickBASIC places the cursor at the place the error was detected.

    5. Add a zero at the end of the line so it looks like this:

        ON ERROR GOTO 0

    Once you close an error-message dialog box, QuickBASIC doesn't check that
    statement's syntax again until you actually change the line. If you don't
    edit the line at all, QuickBASIC waits until you run the program before
    reminding you that the error still exists.

Errors Detected When You Run Your Program

    Some errors are not apparent until you actually try to run your code. For
    example, in the REDIM statement you declared the Index() array as type
    PERSOR. This was a misspelling of the name of the user-defined type,
    PERSON, which you saw when you scrolled through the declarations and
    definitions section of QCARDS in Chapter 5 "The QCARDS Program."
    QuickBASIC did not detect this error on entry because it assumes that the
    PERSOR type is declared somewhere, even though it has not yet encountered
    the declaration.

    The following step illustrates how these errors are detected:

    ►  Press ALT+R, then press S to choose the Run menu's Start command to run
        the lines entered so far.

        QuickBASIC displays the error message Type not defined and highlights
        the AS in the REDIM statement as shown in Figure 6.2.


        File  Edit  View  Search  Run  Debug  Calls  Options              Help
    ┌────────────────────────────── CHAPTER5.BAS ─────────────────────────┤↑├──
    │' Also, Index() is a shared procedure, so it is available to
    │' all SUB and FUNCTION procedures in the program.
    │
    │ON ERROR GOTO MemoryErr
    │REDIM SHARED Index(1 TO LastCard + 20) AS PERSOR
    │ON ERROR GOTO 0
    │
    │' Note that an error trap ┌────────────────────────┐h an error
    │' message if the memory av│                        │. If no
    │' error is detected, the e│    Type not defined    │ollowing the
    │' REDIM statement.        │                        │
    │                          ├────────────────────────┤
    │                          │  < OK >     < Help >   │
    │' Use the block IF...THEN.└────────────────────────┘e whether
    │' to load the records from the disk file QCARDS.DAT into the
    │' array of records called Index() declared earlier. In the IF
    │' part, you will check to see if there are actually records
    │' in the file. If there are, LastCard will be greater than 0.
    │←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒→
    ├─────────────────────────────── Immediate ────────────────────────────────
    │
    │
    <Shift+F1=Help> <F6=Window> <F2=Subs> <F5=Run> <F8=Step>      CN 00124:040

    Figure 6.2  Error Message

    Help for Error Messages

    Error-message dialog boxes contain a Help button you can choose to get
    either a description of common causes for the error or the correct syntax
    plus examples of usage.

    1. Press F1 to get on-line help for this error message, then choose the
        Help button in the dialog box.

        The following dialog box appears (see Figure 6.3):


        File  Edit  View  Search  Run  Debug  Calls  Options              Hel
        ┌────────────────────────────── CHAPTER5.BAS ─────────────────────────┤↑
        │' Also, Index() is a shared procedure, so it is available to
        │' all SUB and FUNCTION procedures in the program.
        │
        │ON ERROR GOTO MemoryErr
        │REDIM SHARED Index(1 TO LastCard + 20) AS PERSOR
        │ON ER┌────────────────────────────────────────────────────────────────┐
        │     │ ┌────────────────────────────────────────────────────────────┐ │
        │' Not│ │ No TYPE...END TYPE statement exists in this module for the │ │
        │' mes│ │ user-defined type.                                         │ │
        │' err│ │   ■ Did you misspell the user-defined type name?           │ │
        │' RED│ │   ■ You can use the QuickBASIC Find command to locate all  │ │
        │     │ │                                                            │ │
        │     │ └────────────────────────────────────────────────────────────┘ │
        │' Use├────────────────────────────────────────────────────────────────┤
        │' to │                             < OK >                             │
        │' arr└────────────────────────────────────────────────────────────────┘
        │' part, you will check to see if there are actually records
        │' in the file. If there are, LastCard will be greater than 0.
        │←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
        ├─────────────────────────────── Immediate ─────────────────────────────
        │
        │
        F1=Help  Enter=Execute  Esc=Cancel  Tab=Next Field  Arrow=Next Item

        Figure 6.3  Help on Error Message

        The new dialog box indicates that no TYPE...END TYPE statement was
        found for PERSOR.

    2. Press ESC as many times as necessary to clear the dialog boxes.

    Overtyping the Error

    Overtyping replaces the text at the cursor and moves the cursor right.
    Correct the error by overtyping, as follows:

    QCARDS Code Entry 6

    1. Place the cursor on the second R in PERSOR.

    2. Press INS to change from insert to overtype.

        The INS key is a "toggle." It changes the shape of the cursor from the
        default (a thin blinking line) to a blinking box. When the cursor is a
        thin line, text you type is inserted at the cursor position. When the
        cursor has the box shape, whatever you type "overtypes" (replaces) the
        text at the current cursor position.

    3. Overtype the second R in PERSOR with an N so the line looks like this:

        REDIM SHARED Index(1 TO LastCard + 20) AS PERSON

    4. Press INS to reset the toggle to its default (the thin line).

    5. Type the following on the next blank line to call your Alarm procedure:

        call Alarm

    6. Press ALT+R, then press S to choose the Run menu's Start command to run
        the lines.

        QCARDS doesn't produce any visible output yet, but Alarm produces its
        sound.

    7. Press a key to return to the QuickBASIC environment.

Automatic Procedure Declarations

    When QuickBASIC encounters a procedure invocation in a program, it creates
    the DECLARE statement automatically. Then, it writes the declaration at
    the first line of the file (when you save your program). The following
    steps illustrate this:

    QCARDS Code Entry 7

    1. Press CTRL+HOME to move the cursor to the beginning of the program.

    2. Press ALT+F, then press A to choose the File menu's Save As command.
        The Save As dialog box appears.

    3. Type chapter6 in the text box, then press ENTER to save the program as
        CHAPTER6.BAS. QuickBASIC inserts the declaration on the first line of
        the program, as follows :

        DECLARE SUB Alarm()

    This is a good point to take a break. In the next section you'll move the
    declaration just created and change some of the existing QCARDS code.


Working with Selected Text Blocks

    "Selecting" is the way you highlight a block of text to work with. To
    select a text block directly, place the cursor at the beginning of a
    block, then hold down the SHIFT key while pressing the appropriate
    DIRECTION key.

    Try the following to select a block of text:

    QCARDS Code Entry 8

    1. Start QuickBASIC (if you exited when you took a break) and open
        CHAPTER6.BAS.

    2. Press CTRL+HOME to make sure the cursor is at the program's first line.

        The line should be DECLARE SUB Alarm().

    3. Press SHIFT+DOWN to select this line.

    The only way you can remove the highlight from selected text and return it
    to its unselected state is by pressing one of the DIRECTION keys ( UP,
    DOWN, LEFT, RIGHT), or by pressing F6 to move to a different window.

    ──────────────────────────────────────────────────────────────────────────
    WARNING
    Be cautious with selected text! If you type any character (even the
    SPACEBAR) while a line of text is selected, whatever you type replaces
    all selected text in the active window. The text that was selected is
    then permanently lost.
    ──────────────────────────────────────────────────────────────────────────

Cutting or Copying Selected Text

    The Edit menu has commands that let you move a block of selected text to
    and from a "Clipboard" (a dedicated space in memory). The Cut and Copy
    commands put selected text on the Clipboard. The Paste command copies
    whatever text is on the Clipboard to the current cursor position. If a
    line (or more) of text is selected in the active window when you choose
    the Paste command, the text on the Clipboard replaces the selected text.

    When a menu command is available, it is marked with a high-intensity
    letter. For example, if you open the Edit menu now, the Cut and Copy
    commands are available because there is text selected in the active
    window. However, the Paste command is not available unless you have
    already placed text on the Clipboard. The following steps use the Cut
    command to transfer the text from its current position to the Clipboard:

    QCARDS Code Entry 9

    1. Select the line DECLARE SUB Alarm if it isn't already selected.

    2. Press ALT+E to open the Edit menu if it is not already open.

    3. Press T to choose the Cut command.

    The selected text is transferred to the Clipboard. You can only copy one
    block at a time to the Clipboard because each new block (regardless of its
    size) replaces everything that preceded it on the Clipboard.

    ──────────────────────────────────────────────────────────────────────────
    IMPORTANT
    The shortcut-key combination for Cut is SHIFT+DEL. If you just press DEL
    while text is selected, it is deleted, but not to the Clipboard. You
    cannot recover text deleted with DEL.
    ──────────────────────────────────────────────────────────────────────────

    The Copy command is similar to Cut, but it puts a duplicate of the
    selected text on the Clipboard and leaves the selected block as is.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    Copy leaves the original text block selected, so you have to press a
    DIRECTION key before typing anything or the block will be replaced by
    what you type.
    ──────────────────────────────────────────────────────────────────────────

Pasting a Text Block

    Any text you put on the Clipboard remains there until you either put
    something else on the Clipboard or until you exit from QuickBASIC. Follow
    these steps to move to the procedure-declarations section of QCARDS and
    paste in the declaration for Alarm:

    QCARDS Code Entry 10

    1. Press ALT+S, then press F to choose the Search menu's Find command.

        The Find dialog box appears (see Figure 6.4).


        ┌─────────────────────────Find────────────────────────────────┐
        │            ┌─────────────────────────────────────────────┐  │
        │ Find What: │                                             │  │
        │            └─────────────────────────────────────────────┘  │
        │                                                             │
        │                              ┌────────Search─────────────┐  │
        │ [ ] Match Upper/Lowercase    │( ) 1. Active Window       │  │
        │ [ ] Whole Word               │(∙) 2. Current Module      │  │
        │                              │( ) 3. All Modules         │  │
        │                              └───────────────────────────┘  │
        │                                                             │
        ├─────────────────────────────────────────────────────────────┤
        │        < OK >           < Cancel >        < Help >          │
        └─────────────────────────────────────────────────────────────┘

        Figure 6.4  Find Dialog Box

    2. Type the following line in the text box:

        This space reserved

    3. Press ENTER to start the search.

    4. Press HOME to place the cursor in column 1.

    5. Press SHIFT+END to select the whole line.

    6. Press ALT+E, then press P to choose the Edit menu's Paste command.

        The Paste command is active because there is text on the Clipboard. The
        text from the Clipboard replaces the selected text.

    7. Save the program as CHAPTER6.BAS.

Manipulating Selected Text

    You can manipulate selected text in other ways. For instance, you can
    indent selected text as a block rather than one line at a time. The
    following steps illustrate this:

    QCARDS Code Entry 11

    1. Press ALT+S, then press F to choose the Search menu's Find command.
        Type the following line in the text box, exactly as shown:

        ' Define temporary

        There may be text selected in the text box when the dialog box opens.
        If so, whatever you type replaces the selected text automatically. You
        can remove the selection from the text by pressing a DIRECTION key if
        you want to just change the text in the box rather than completely
        replacing it.

    2. Press ENTER. The cursor should move to the following line:

        ' Define temporary Index() array to illustrate QCARDS screen

    3. Press SHIFT+DOWN twice so both the following lines are selected:

        ' Define temporary Index() array to illustrate QCARDS screen
        REDIM SHARED Index(1) AS PERSON

    4. Press TAB while this text block is selected. The whole block moves
        right by one tab stop.

    5. Press SHIFT+TAB to move the block left by one indentation level.

    6. Press DEL to delete the entire block permanently.

    7. Save the program as usual as CHAPTER6.BAS.

    Note that the text you just deleted was not placed on the Clipboard. This
    is because you deleted it with DEL rather than SHIFT+DEL (the shortcut key
    for the Cut command). The temporary Index() array definition is no longer
    needed because you defined it (with a REDIM statement) in the first part
    of this chapter.


Searching and Replacing Text

────────────────────────────────────────────────────────────────────────────
IMPORTANT
    The remaining sections of this chapter provide practice using QuickBASIC's
    search and replace feature. The code you enter in the optional code-entry
    sections below is not necessary to make QCARDS run. You may want to read
    the rest of the chapter before deciding whether to try the optional
    code-entry sequences. If you make a mistake entering any of the optional
    sequences, the final program won't run properly. If you choose to do any
    of the optional code-entry sequences, you must do all three of them.
────────────────────────────────────────────────────────────────────────────

    In this section, you'll define the symbolic constant DISKFILE$ to
    represent "QCARDS.DAT" the name of the disk file that contains QCARDS'
    data. Then you'll use the Search menu's Change command to replace all
    instances of the text string "QCARDS.DAT" with the symbolic constant. Once
    you define the constant DISKFILE$, you can just change the definition of
    DISKFILE$ if you want to load a different data file in QCARDS (or create a
    new data file).

Defining the Symbolic Constant

    The first thing to do is define the constant. There is already an
    appropriate place to do this in the declarations and definitions section.
    Do the following to find the place and then add the constant:

    Optional QCARDS Code Entry 1

    1. Save CHAPTER6.BAS as OPTIONAL.BAS.

        This way, if you do everything right you can start the next chapter by
        loading OPTIONAL.BAS, then saving it as CHAPTER7.BAS. If you make an
        error in one of the optional sections and find you can't correct it,
        you can start with CHAPTER6.BAS in the next chapter.

    2. Press CTRL+HOME to move to the beginning of QCARDS.

    3. Press ALT+S, then press F to choose the Search menu's Find command.
        Finally, type the following in the text box:

        TMPFILE

    4. Press ENTER to place the cursor at the definition of TMPFILE. It looks
        like this:

        CONST TMPFILE$ = "$$$87y$.$5$"       ' Unlikely file name

    5. Press DOWN to remove selection from TMPFILE.

    6. Press HOME to place the cursor in the leftmost column, then type the
        following line, exactly as shown, but don't press ENTER:

        const DISKFILE$ = "QCARDS.DAT"

    7. Press SHIFT+LEFT until the string "QCARDS.DAT" is completely selected.
        Be sure both quotation marks are included in the selection.

    It's important to make sure the quotation marks are selected because you
    want to replace "QCARDS.DAT" with DISKFILE$.

Replacing Multiple Occurrences of Text

    Using the Change command is much like the Find command, except that
    QuickBASIC lets you substitute specified text when matching text is found
    before it searches for the next match. Next you will change "QCARDS.DAT"
    to DISKFILE$ everywhere except in the definition you wrote in the last
    section. The Search menu's Change command lets you automate the process.

    Optional QCARDS Code Entry 2

    1. Press ALT+S, then press C to choose the Search menu's Change command.
        The Change dialog box's Change command appears (see Figure 6.5):


                    Text you want to      This text will replace the
                    │change goes here.    │text you want to change.
        ┌─────────────┼─────────────────────┼───────────────────────────┐
        │            ┌┼─────────────────────┼────────────────────────┐  │
        │ Find What: │"QCARDS.DAT"          │                        │  │
        │            └──────────────────────┼────────────────────────┘  │
        │            ┌──────────────────────┼────────────────────────┐  │
        │ Change To: │DISKFILE$                                      │  │
        │            └───────────────────────────────────────────────┘  │
        │                                                               │
        │                                                               │
        │ [ ] Match Upper/Lowercase                                     │
        │ [ ] Whole Word                                                │
        │                                                               │
        ├───────────────────────────────────────────────────────────────┤
        │  < Find and Verify >   < Change All >   <Cancel >   < Help >  │
        └───────────────────────────────────────────────────────────────┘

        Figure 6.5  Change Dialog Box

        Because "QCARDS.DAT" is selected in the View window, the Find What text
        box has"QCARDS.DAT"in it.

    2. Press TAB to move the cursor to the Change To text box.

        This is where you enter the text you want to substitute for the search
        text.

    3. Type DISKFILE$ in this text box.

    4. Press ENTER to choose the Find and Verify command button (the default).

    ──────────────────────────────────────────────────────────────────────────
    WARNING
    The second command button, Change All, makes all the changes without
    showing you the occurrences or waiting for confirmation. This option is
    risky unless you are sure you want to change all the occurrences. Even
    then, you may inadvertently change words that contain the search text in
    a way you didn't anticipate. If you have any doubts, use the default
    option Find and Verify. The Cancel button or ESC aborts the search and
    replace operation entirely.
    ──────────────────────────────────────────────────────────────────────────

    The Find and Verify command button highlights each occurrence of the
    search text, then displays the Change, Skip, Cancel dialog box (see Figure
    6.6). In the next section you'll use it to make selective replacements.
    It contains buttons you can choose when you decide whether to replace the
    current occurrence:


    ┌───────────────────────────Change──────────────────────────────┐
    │                                                               │
    ├───────────────────────────────────────────────────────────────┤
    │ < Change >      < Skip >      < Cancel >      < Help >        │
    └───────────────────────────────────────────────────────────────┘

    Figure 6.6  Change, Skip, Cancel Dialog Box

    The Change, Skip, Cancel dialog box should still be on your screen.
    Replace occurrences of "QCARDS.DAT" with DISKFILE$ as follows:

    Optional QCARDS Code Entry 3

    1. Press C to change the first occurrence. It is in the OPEN statement you
        entered earlier in this chapter.

        QuickBASIC moves to the next match. It is in a comment line in the
        CleanUp procedure (check the View window's title bar).

    2. Press C to make the change.

        QuickBASIC moves to the next match. It is also in CleanUp in the line
        KILL "QCARDS.DAT"

    3. Press C to make the change.

        QuickBASIC moves to the next match. It is also in CleanUp in the line
        NAME TMPFILE AS "QCARDS.DAT"

    4. Press C to make the change.

        QuickBASIC moves to the next match. It is in a different procedure,
        InitIndex, in a comment line.

    5. Press C to make the change.

        The final match is at CONST DISKFILE$ = "QCARDS.DAT" where you started.
        You don't want to change this one because this definition is the reason
        you just made all the other changes.

    6. Press S to choose the Skip command button.

        When all occurrences have either been changed or skipped, QuickBASIC
        displays a dialog box containing ChangeComplete.

    7. Press ESC to close the dialog box.

Checking Your Work

    Whenever you make a series of changes throughout a program, you should
    check your work by running the program. If you've made a mistake during
    editing, you can use QuickBASIC's error messages to help you track down
    mistakes. Finish this session with the following procedure:

    1. Press ALT+R, then press S to choose the Run menu's Start command to run
        the lines.

        If you get an error message, try to track down the error and fix it
        before you end the session. Go back over each of the optional QCARDS
        code-entry sections and compare your work with them.

    2. Press a key to return to the QuickBASIC environment.

    3. Save the program. If you renamed it OPTIONAL.BAS, you can just start
        with that file in the next chapter and rename it CHAPTER7.BAS.

    The constant DISKFILE$ now represents QCARDS.DAT in the program. Later you
    may want to modify the program to allow the user to load different files
    while the program is running. If you do, you can't represent the the file
    with the constant DISKFILE$, because the point of a constant is that it
    cannot be changed when the program is running. You would have to remove
    the CONST part of the definition and just make DISKFILE$ an ordinary
    string variable.


For More Information

    For more information on the topics covered in this chapter, see the
    following:

    Chapter                  Topic
    ──────────────────────────────────────────────────────────────────────────
    Chapter 12, "Using the  Complete information on QuickBASIC's editing
    Editor," and Chapter     features, including the commands found on Full
    13, "The Edit Menu"     Menus and editing shortcut-key combinations

    Chapter 2, "SUB and      Defining and using procedures and placement of
    FUNCTION Procedures,"    automatically generated procedure declarations.
    in Programming in BASIC

    Chapter 4, "String       Using strings as symbolic constants
    Processing," in
    Programming in Basic

    Chapter 6, "Error and    Using the ON ERROR statement
    Event Trapping," in
    Programming in BASIC
    ──────────────────────────────────────────────────────────────────────────



────────────────────────────────────────────────────────────────────────────
Chapter 7  Programming with On-Line Help

    You've seen Microsoft QuickBASIC's on-line help features in previous
    chapters. In this chapter you'll use on-line help to guide you in writing
    some code for the QCARDS program. You will

    ■ Use alternative methods to get on-line help for QuickBASIC keywords

    ■ Access information about on-line program symbols through help

    ■ Use hyperlinks to get additional information within the Help window

    This chapter takes about one hour to complete.


Using On-Line Help to Construct Statements

    In this section you'll use the Help menu's Index command to find out how
    to use statements. Do this first:

    QCARDS Code Entry 12

    1. Start QuickBASIC if it is not running and open CHAPTER6.BAS (or
        OPTIONAL.BAS, whichever is appropriate).

    2. Save the program immediately as CHAPTER7.BAS.

On-Line Help for Keywords

    If you know the statement you want to use, you can find it quickly by
    choosing the Index command from the Help menu. You can get information on
    the first code block you'll enter in this chapter (the IF...THEN...ELSE
    statement) by doing the following steps:

    1. Choose the Help menu's Index command (press ALT+H, then press I).

        Index lists all the QuickBASIC keywords. Scroll down through the list
        to see what it contains (use DIRECTION keys), or press the initial
        letter of the keyword you want more information on.

    2. Select IF... THEN (press I).

        QuickBASIC places the cursor in the IF...THEN statement

    3. Get help on IF..THEN (press F1).

        A QuickSCREEN appears (see Figure 7.1). It includes a brief
        description of the statement, the syntax for the block form of
        IF...THEN...ELSE, and a description of the terms used in the block.


        Syntax block
        │
        │ File  Edit  View  Search  Run  Debug  Calls  Options              Hel
        ┌┼────────────── HELP: IF...THEN...ELSE Statement QuickSCREEN ────────┤↑
        ││ ◄QuickSCREEN►     ◄Details►     ◄Example►     ◄Contents►     ◄Index►
        │├──────────────────────────────────────────────────────────────────────
        │IF...THEN...ELSE - a control flow statement that allows conditional
        ││                  execution or branching, based on the evaluation of
        ││                  an expression that must be either true or false
        ││
        │Block IF...THEN...ELSE Syntax
        ││┌IF booleanexpression1 THEN
        │││   [statementblock-1]
        │││[ELSEIF booleanexpression2 THEN
        │└┤   [statementblock-2]
        │ │. . .
        │ │[ELSE
        │ │   [statementblock-n]]
        │ └END IF
        │
        │  ■ booleanexpression is an expression that must return non-zero (true)
        │    or zero (false)
        │  ■ statementblock consists of any number of statements on one or more
        │    lines.
        │
        │←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
        <Shift+F1=Help> <F6=Window> <Esc=Cancel> <Ctrl+F1=Next> <Alt+F1=Back>

        Figure 7.1  QuickSCREEN for IF...THEN...ELSE Statement

    4. Make the Help window fill the whole screen (press CTRL+F10).

    5. Move down to the syntax for the single-line form of IF...THEN...ELSE
        (press PGDN).

    6. Move the cursor back to the top of the QuickSCREEN (press CTRL+HOME).

    7. Restore the View and Immediate windows (press CTRL+F10).

    If you've used the statement before, the QuickSCREEN help information is
    usually sufficient to help you write your code.

Hyperlinks in On-Line Help

    The QuickSCREEN includes four hyperlinks across the top. You can move the
    cursor to any one by pressing the TAB key or the initial letter of the
    word in the hyperlink. The following list describes what is displayed by
    each of the hyperlinks:

    Hyperlink                Information Displayed by Help
    ──────────────────────────────────────────────────────────────────────────
    Details                  Gives full explanation of each syntax element and
                            describes all ways of using the statement

    Example                  Shows code examples that illustrate syntax use

    Contents                 Shows all possible categories of on-line help
                            available in QuickBASIC

    Index                    Lists QuickBASIC keywords alphabetically
    ──────────────────────────────────────────────────────────────────────────

    Try each of the available hyperlinks in turn, pressing ALT+F1 each time to
    return to the original syntax screen.

    If you keep choosing several hyperlinks without returning to the previous
    screen, you can work your way backwards through the hyperlink sequence by
    pressing ALT+F1 repeatedly (up to a limit of 20 links).

    Although you can't type in the Help window, you can size it with ALT+PLUS
    and ALT+MINUS so that the information you need is displayed while you
    enter text in the View window. When you understand the block
    IF...THEN...ELSE statement, implement the programming described in the
    comment block as follows:

    QCARDS Code Entry 13

    1. Place the cursor in the View window (press F6).

    2. Scroll down to the line beneath the following comment block (about line
        145) and create a line of space (press ENTER):

        ' Use the block IF...THEN...ELSE statement to decide whether
        ' to load the records from the disk file QCARDS.DAT into the
        ' array of records called Index() declared earlier. In the IF
        ' part, you will check to see if there are actually records
        ' in the file. If there are, LastCard will be greater than 0
        ' and you can call the InitIndex procedure to load the records
        ' into Index(). LastCard is 0 if there are no records in the
        ' file yet. If there are no records in the file, the ELSE
        ' clause is executed. The code between ELSE and END IF starts
        ' the Index() array at card 1.

    3. Type the following code, exactly as shown:

        if LastCard <> 0 then
            call InitIndex(LastCard)
        else
            Card.CardNum = 1
            Index(1) = Card
            put #1, 1, Card
        end if

    4. Save the program as CHAPTER7.BAS. Then place the cursor back on the
        ELSE keyword.

    5. Run your program up to the line on which the cursor rests (press F7).

        The line at the cursor appears in high-intensity video with the colors
        you chose for the Current Statement option in the Options menu's
        Display dialog box. This means that the program is still running, but
        execution is temporarily suspended.

On-Line Help for Program Symbols

    QuickBASIC provides help for all "symbols" in your program. A symbol is
    anything that is defined, either explicitly or implicitly. For example,
    QuickBASIC keywords are symbols defined by the language. To get help for
    the symbols you define in your programs, place the cursor anywhere in the
    symbol, then press F1. QuickBASIC displays all the information it has
    about the symbol and where it is used in the program. Try this to find out
    about Card.CardNum.

    1. Place the cursor in the word CardNum in Card.CardNum and press F1.

        The Help window shown in Figure 7.2 appears.


        File  Edit  View  Search  Run  Debug  Calls  Options              Hel
        ┌───────────────────────────── HELP: CardNum ─────────────────────────┤↑
        │CardNum is a symbol that is used in your program as follows:
        │
        │┌  C:\QB4.5\DEMO\DIR1\CHAPTER7.BAS ────
        ││  An element of a user defined TYPE:
        ││    TYPE PERSON
        ││      CardNum AS INTEGER
        ││      Names AS STRING * 37
        ││      Note AS STRING * 31
        ││      Month AS INTEGER
        ││      Day AS INTEGER
        ││      Year AS INTEGER
        ││      Phone AS STRING * 12
        ││      Street AS STRING * 29
        ││      City AS STRING * 13
        ││      State AS STRING * 2
        ││      Zip AS STRING * 5
        ││    END TYPE
        ││
        │
        ├────────────────────────────── CHAPTER7.BAS ─────────────────────────┤↑
        │   Card.CardNum = 1
        ├─────────────────────────────── Immediate ─────────────────────────────
        <Shift+F1=Help> <F5=Continue> <F9=Toggle Bkpt> <F8=Step>         00144:

        Figure 7.2  Symbol Help for CardNum

        On-line help describes CardNum as an element of the PERSON user-defined
        type. The help displays the actual TYPE...END TYPE statement. CardNum
        is the first element.

    2. Move the cursor to the left until it is in the word Card on the left
        side of the period, then press F1. On-line help shows that the name
        Card is used many places in QCARDS. The specific instance at the cursor
        when you pressed F1 is described first; it is described as a variable
        of type PERSON.

        Note that in several procedures, Card is also used as a variable name,
        but is a variable of type INTEGER. Also, Card is sometimes described as
        a parameter of type PERSON.

    On-line help makes it easy to track the use of variable names throughout
    your programs. Although on-line help doesn't include the current value of
    a variable, QuickBASIC makes it easy to determine the current value of a
    variable in a suspended program. Here's how:

    1. Close the Help window (press ESC).

    2. Place the cursor anywhere in the word LastCard (about line 150).

    3. Choose the Debug menu's Instant Watch command.

        QuickBASIC displays the Instant Watch dialog box (see Figure 7.3). It
        contains the name of the variable LastCard and its current value. (The
        actual value reflects the number of records in the QCARDS.DAT data
        file.)


        File  Edit  View  Search  Run  Debug  Calls  Options              Hel
        ┌────────────────────────────── CHAPTER7.BAS ─────────────────────────┤↑
        │    CALL InitIndex(LastCard)
        │ELSE
        │    Card.CardNum = 1
        │    Index(1) = Card
        │    PUT #1, 1.┌─────────────────────────────────────────────┐
        │ENDIF         │                                             │
        │              │  ┌───────────── Expression ──────────────┐  │
        │              │  │LastCard                               │  │
        │' Use the Draw│  └───────────────────────────────────────┘  │
        │' and draw the│                                             │
        │' card. Finall│  ┌──────────────── Value ────────────────┐  │
        │' as arguments│  │ 16                                    │  │
        │' ShowCards pl│  └───────────────────────────────────────┘  │
        │' card on the ├─────────────────────────────────────────────┤
        │' information │    < Add Watch >   < Cancel >   < Help >    │
        │              └─────────────────────────────────────────────┘
        │
        │
        │←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
        ├─────────────────────────────── Immediate ─────────────────────────────
        │
        │
        F1=Help  Enter=Execute  Esc=Cancel  Tab=Next Field  Arrow=Next Item

        Figure 7.3  Instant Watch Dialog Box

    4. Clear the Instant Watch dialog box (press ESC).

    Perform the following steps to place the QCARDS cards on the screen and
    the data from QCARDS.DAT on the cards:

    QCARDS Code Entry 14

    1. Place the cursor on the line beneath the following comment (about line
        163):

        ' Use the DrawCards procedure to initialize the screen
        ' and draw the cards. Then, set the first card as the top
        ' card. Finally, pass the variables TopCard and LastCard
        ' as arguments to the ShowCards procedure. The call to
        ' ShowCards places all the data for TopCard on the front
        ' card on the screen, then it places the top-line
        ' information (the person's name) on the remaining cards.

    2. Create a line of space (press ENTER), then type the following code
        lines exactly as shown:

        call DrawCards
        TopCard = 1
        call ShowCards(TopCard, LastCard)

    3. Place the cursor back on the last line you entered (the one beginning
        withCALL ShowCards).

    4. Execute the program to the line at the cursor (press F7).

    5. Choose the View menu's Output Screen command to toggle back and forth
        between the QuickBASIC environment and the QCARDS output screen (press
        F4).

    You can use the same techniques as before to get help for the CALL keyword
    that transfers control to a BASIC SUB procedure. You can also get help for
    the DrawCards and ShowCards procedures and for the variable named TopCard.
    Since the program is still running (though suspended) you can also check
    the values of its variables using the Debug menu's Instant Watch command.


Printing Screens from On-Line Help

    The Print command on the File menu can make hard copies of text from
    on-line help. If you have a printer connected to the parallel port, you
    can print hard copy of any of the help screens as follows:

    1. Choose the Help menu's Index command and move the cursor to the
        DO...LOOP statement entry. Then move that statement's on-line help into
        the Help window (press F1).

    2. Choose the File menu's Print command (press ALT+F, then press P).

        When the Help window is the active window, you can choose the option to
        print either specifically selected text or the whole current help
        screen (see Figure 7.4).


        File  Edit  View  Search  Run  Debug  Calls  Options              Hel
        ┌────────────────── HELP: DO...LOOP Statement QuickSCREEN ────────────┤↑
        │  ◄QuickSCREEN►     ◄Details►     ◄Example►     ◄Contents►     ◄Index►
        │───────────────────────────────────────────────────────────────────────
        │DO...LOOP - a control flow statement that repeats a block of statements
        │while a condition is true or until a condition becomes true
        │
        │Syntax 1               ┌────────── Print ───────────┐
        │  DO [{WHILE | UNTIL} b│                            │
        │    [statementblock]   │     ( ) Selected Text      │
        │  LOOP                 │     (∙) Active Window      │
        │                       │                            │
        │Syntax 2               │                            │
        │  DO                   │                            │
        │    [statementblock]   ├────────────────────────────┤
        │  LOOP [{WHILE | UNTIL}│ < OK > < Cancel > < Help > │
        │                       └────────────────────────────┘
        │  ■ booleanexpression is an expression that will return non-zero (true)
        │    or zero (false).
        │  ■ statementblock is any number of statements on one or more lines whi
        │    are to be executed as long as booleanexpression is true.
        │←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
        ├───────────────────────────── CHAPTER7.BAS ──────────────────────────┤↑
        ├─────────────────────────────── Immediate ─────────────────────────────
        F1=Help  Enter=Execute  Esc=Cancel  Tab=Next Field  Arrow=Next Item

        Figure 7.4  Print Dialog Box (Help)

    3. Print this help screen if you have a printer (press ENTER), otherwise
        clear the dialog box (press ESC). (If you try to print when you don't
        have a printer, a Device unavailable dialog box may be displayed.)

    4. Choose any hyperlinks you'd like to see, then print them out.

    5. Close the Help window (press ESC).

    Use the hard copy of the help text (or on-line help) to understand the
    programming. In the next steps, you'll insert the unconditional loop.

    QCARDS Code Entry 15

    1. Move the cursor to the line below this comment block (about line 178):

        ' Keep the picture on the screen forever with an unconditional
        ' DO...LOOP statement. The DO part of the statement goes on
        ' the next code line. The LOOP part goes just before the END
        ' statement. This loop encloses the central logic that lets
        ' a user interact with QCARDS.

    2. Create a blank line (press ENTER).

    3. Type the word do then press ENTER.

    4. Move the cursor down to the line beneath this comment (at about line
        226):

        ' This is the bottom of the unconditional DO loop.

    5. Create a blank line (press ENTER), then type the word loop

    6. Choose Run menu's Start command.

        You will need to break out of this unconditional DO loop.

    7. Press CTRL+BREAK when you want to suspend execution of the
        unconditional DO loop.

        While execution is suspended, you can use commands like Instant Watch
        to examine the variables. Afterwards, you can continue program
        execution by choosing the Continue command from the Run menu (press
        ALT+R, then press N).

    8. Save the program as CHAPTER7.BAS.


For More Information

    For more information on on-line help, see the following:

    Chapter                  Topic
    ──────────────────────────────────────────────────────────────────────────
    Section 10.8, "Using    Information on QuickBASIC's Help menu commands
    On-Line Help" and        and complete descriptions of all the Help
    Chapter 21, "The Help   features
    Menu"
    ──────────────────────────────────────────────────────────────────────────



────────────────────────────────────────────────────────────────────────────
Chapter 8  Using Example Code from On-Line Help

    You've seen many facets of Microsoft QuickBASIC's on-line help in previous
    chapters. Each QuickSCREEN and Details screen for each statement and
    function contains a hyperlink to one or more code examples. In this
    chapter you will copy example code from on-line help to use in QCARDS.
    You'll use some of these examples as you

    ■ Copy example code from on-line help and paste it into the View window

    ■ Edit text copied from on-line help to work in a specific program

    This chapter takes about one to one and one-half hours to complete.


Copying Example Code from On-Line Help

    When you use on-line help for keywords, the QuickSCREEN describes the
    action and syntax of the keyword. If you have used the statement before,
    the syntax block may give all the information you need to write your code.
    However, if the statement is new to you, the Details and Example screens
    clarify how to use the syntax. In the next several code-entry sequences,
    you'll find an example in on-line help that you can copy and use in
    QCARDS. Example code from on-line help may not be a perfect match for
    QCARDS. Some code that you copy conflicts with code in the program. Don't
    worry──you'll fix it later in the tutorial.

    QCARDS Code Entry 16

    1. Place the cursor on the line following this comment block (about line
        192):

        ' Get user keystroke with a conditional DO...LOOP statement.
        ' Within the loop, use the INKEY$ function to capture a user
        ' keystroke, which is then assigned to a string variable. The
        ' WHILE part of the LOOP line keeps testing the string
        ' variable. Until a key is pressed, INKEY$ keeps returning a
        ' null (that is a zero-length) string, represented by "".
        ' When a key is pressed, INKEY$ returns a string with a
        ' length greater than zero, and the loop terminates.

    2. Create a blank line (press ENTER). Then, type do

    3. Display the QuickSCREEN for the DO keyword (press F1).

        When you press F1 when the cursor is on a blank space, QuickBASIC
        displays context-sensitive help on the symbol at the left of the
        cursor. Note that the cursor remains in the View window.

    4. Move the cursor into the Help window (press F6 twice).

    5. Choose the Example hyperlink (press E, then press F1).

        The example screen appears in the Help window (see Figure 8.1):


        File  Edit  View  Search  Run  Debug  Calls  Options              Help
    ┌───────────── HELP: DO...LOOP Statement Programming Examples ────────┤↑├──
    │  ◄QuickSCREEN►     ◄Details►     ◄Example►     ◄Contents►     ◄Index►
    │─────────────────────────────────────────────────────────────────────────
    │DO...LOOP Statement Programming Examples
    │
    │Following are four examples. The first two examples show you how
    │placement of the condition affects the number of times the block
    │of statements is executed. The third example shows how a loop
    │can be used to pause a program until the user presses a key. The
    │fourth example illustrates testing at the end of a loop and presents
    │a sort subprogram where an ending test is appropriate.
    │
    │DO...LOOP Programming Example 1
    │
    │In the following example, the test is done at the beginning of the
    │loop. Because I is not less than 10, the body of the loop (the
    │statement block) is never executed.
    │
    │' DO...LOOP with test at the top of the loop.
    │' Output shows that loop was not executed.
    │←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒→
    ├───────────────────────────── CHAPTER7.BAS ──────────────────────────┤↑├──
    ├─────────────────────────────── Immediate ────────────────────────────────
    <Shift+F1=Help> <F6=Window> <Esc=Cancel> <Ctrl+F1=Next> <Alt+F1=Back>

    Figure 8.1  Example Screen for DO...LOOP Statement

    The first paragraph of the screen describes the examples below. The
    description of the third example corresponds closely to the task you want
    to code into QCARDS at this point. Follow these steps to place the example
    code on the Clipboard:

    QCARDS Code Entry 17

    1. Scroll down to Example 3. It looks like this:

        ' DO...LOOP with test at the bottom of the loop.
        DO
            Choice$ = INKEY$
        LOOP WHILE Choice$ = ""

    2. Select all four of the above lines.

    3. Choose the Copy command from the Edit menu to place the lines on the
        Clipboard (press ALT+E, then press C).

    4. Close the Help window (press ESC).

    5. Select the DO you typed into the View window just before moving to the
        Help window (press SHIFT+HOME).

    6. Choose the Paste command from the Edit menu (press ALT+E, then press
        P).

        The text from the Clipboard replaces the text that was selected.

    7. Choose the Run menu's Start command to check for errors (press ALT+R,
        then press S), then return to QuickBASIC (press CTRL+BREAK).

    You can use on-line help to check for potential conflicts between the code
    you just copied and QCARDS, as follows:

    1. Place the cursor on Choice$ and press F1.

    2. On-line help shows you that variables named Choice$ now occur twice in
        QCARDS, once in the module-level code and once in the EditString
        procedure. These don't conflict because variables local to a procedure
        are not known at the module level and vice versa.


Indenting a Block of Code

    The loop you just entered is "nested" within the unconditional loop you
    entered earlier (in "QCARDS Code Entry 15," in Chapter 7, "Programming
    with On-Line Help"). This means that it is executed once each time the
    outer loop is executed. Nested code is usually indented one tab stop to
    the right of the code encompassing it to show visually the levels of
    nesting within your program. Here's a reminder of how to indent multiple
    text lines as a block:

    1. Select the three code lines you just entered. They look like this:

        DO
            Choice$ = INKEY$
        LOOP WHILE Choice$ = ""

    2. Move the whole block right one tab stop (press TAB).

    3. Remove the selection from the block (press any DIRECTION key).

    The rest of the code you enter in QCARDS is nested within the
    unconditional DO loop so each block should be similarly indented.


Copying Large Code Blocks from On-Line Help

    The code you copied in the preceding section was short and simple. It
    contained only one variable name, so the likelihood of a conflict with an
    existing symbol in QCARDS was small.

    You can copy larger blocks of example code from on-line help and paste
    them into programs you write. However, the code you copy may conflict with
    code you've already written into your program. In this section you'll copy
    more example code into QCARDS, then customize it significantly. Some of it
    will conflict, but you'll fix it later.

    QCARDS Code Entry 18

    1. Move the cursor to the line beneath the following comment block (about
        line 222):

        ' The ELSE clause is only executed if Choice$ is longer than a
        ' single character (and therefore not a command-line key).
        ' If Choice$ is not an ASCII key, it represents an "extended"
        ' key. (The extended keys include the DIRECTION keys on the
        ' numeric keypad, which is why QCARDS looks for them.) The
        ' RIGHT$ function is then used to trim away the extra byte,
        ' leaving a value that may correspond to one of the DIRECTION
        ' keys. Use a SELECT CASE construction to respond to those key-
        ' presses that represent numeric-keypad DIRECTION keys.

    2. Create a blank line (press ENTER), then type

        select case Choice$

    3. Press HOME, then display help for the SELECT CASE statement (press F1).

    4. The help screen shown in Figure 8.2 appears.


        File  Edit  View  Search  Run  Debug  Calls  Options              Help
    ┌─────────────────── HELP: SELECT Statement QuickSCREEN ──────────────┤↑├──
    │  ◄QuickSCREEN►     ◄Details►     ◄Example►     ◄Contents►     ◄Index►
    │─────────────────────────────────────────────────────────────────────────
    │SELECT CASE - a control flow statement that executes one of several
    │              statement blocks depending on the value of an expression
    │
    │Syntax
    │  SELECT CASE textexpression
    │  [CASE expressionlist1]
    │    [statementblock-1]
    │  [CASE expressionlist2
    │    [statementblock-2] ...
    │
    │  [CASE ELSE
    │    [statementblock-n]]
    │  END SELECT
    │
    │  ■ testexpression is any numeric or string expression.
    │  ■ expressionlist contains one or more expressions of the same type as
    │    testexpression
    ├───────────────────────────── CHAPTER7.BAS ──────────────────────────┤↑├──
    │            SELECT CASE Choice$
    ├─────────────────────────────── Immediate ────────────────────────────────
    <Shift+F1=Help> <F6=Window> <F2=Subs> <F5=Run> <F8=Step>         00214:013

    Figure 8.2  QuickSCREEN for SELECT CASE Statement

    The SELECT CASE statement is commonly used like a switchboard in
    situations where there are numerous possible inputs, and many of them must
    be handled in unique ways. You don't want to take a unique action for each
    key a user might press, but with this kind of structure you can add CASE
    clauses for each key you want to handle. Then you can treat the rest of
    the possible keys as "none of the above" with CASE ELSE.

    In the following steps you'll copy a large piece of code from on-line
    help:

    QCARDS Code Entry 19

    1. Move the cursor into the help window (press SHIFT+F6 twice).

    2. Choose the Example hyperlink at the top of the screen to move the
        examples into the Help window (press E, then press F1).

    3. Choose the Search menu's Find command (press ALT+S, then press F), type
        Example 2 in the text box, then press ENTER.

    4. Scroll down (about 15 lines) to the line: IF LEN(Choice$) = 1 THEN

    5. Select this line, and the next 43 lines, all the way down to END IF.
        (Be careful not to include the final LOOP statement in the selected
        text.)

    6. Choose the Copy command from the Edit menu (press ALT+E, then press C).

    7. Close the Help window (press ESC). This puts the cursor back on SELECT
        CASE in the View window.

    8. Select the line SELECT CASE Choice$ (press SHIFT+END).

    9. Choose the Paste command from the Edit menu (press ALT+E, then press
        P).

        The code pasted after the comment block should appear as follows:

        IF LEN(Choice$) = 1 THEN
            ' Handle ASCII keys
                SELECT CASE ASC(Choice$)
                    CASE ESC
                        PRINT "Escape key"
                        END
                    CASE IS  32, 127
                        PRINT "Control code"
                    CASE 30 TO 29
                        PRINT "Digit: "; Choice$
                    CASE 65 TO 90
                        PRINT "Uppercase letter: "; Choice$
                    CASE 97 TO 122
                        PRINT "Lowercase letter: "; Choice$
                    CASE ELSE
                        PRINT "Punctuation: "; Choice$
                    END SELECT

        ELSE
            ' Convert 2-byte extended code to 1-byte ASCII code and
            ' handle
                Choice$ = RIGHT$(Choice$, 1)

                SELECT CASE Choice$
                    CASE CHR$(DOWN)
                        PRINT "DOWN arrow key"
                    CASE CHR$(UP)
                        PRINT "UP arrow key"
                    CASE CHR$(PGDN)
                        PRINT "PGDN key"
                    CASE CHR$(PGUP)
                        PRINT "PGUP key"
                    CASE CHR$(HOME)
                        PRINT "HOME key"
                    CASE CHR$(ENDKEY)
                        PRINT "END key"
                    CASE CHR$(RIGHT)
                        PRINT "RIGHT arrow key"
                    CASE CHR$(LEFT)
                        PRINT "LEFT arrow key"
                    CASE ELSE
                        BEEP
                END SELECT
        END IF

    Now test your work, then save it:

    QCARDS Code Entry 20

    1. Choose the Run menu's Start command (press ALT+R, then press S).

        As you press keys, their names are printed on the QCARDS output screen.

    2. Return to the QuickBASIC environment (press ESC).

        The ESC key case in the code you copied terminates the program.

    3. Save the program as CHAPTER8.BAS.

    This example code works into QCARDS easily because handling keyboard input
    is a common task. You can copy, then adapt, this type of code for your
    programs.


Editing the Block Copied from On-Line Help

    Examining and analyzing code from other programs is a great way to extend
    your programming skills. Modifying code from on-line help to work in your
    programs can also save you time. Each case in the SELECT CASE...END SELECT
    blocks deals with a key code representing a command the user can choose
    while using QCARDS. The following steps show you how to modify this block:

    QCARDS Code Entry 21

    1. Select the whole first block (below the ' Handle ASCII keys comment,
        about line 225). It looks like this:

        SELECT CASE ASC(Choice$)
                    CASE ESC
                        PRINT "Escape key"
                        END
                    CASE IS < 32, 127
                        PRINT "Control code"
                    CASE 30 TO 29
                        PRINT "Digit: "; Choice$
                    CASE 65 TO 90
                        PRINT "Uppercase letter: "; Choice$
                    CASE 97 TO 122
                        PRINT "Lowercase letter: "; Choice$
                    CASE ELSE
                        PRINT  "Punctuation "; Choice$
                END SELECT

        This block displays the category of ASCII key the user presses. QCARDS
        already has a procedure named AsciiKey that examines the code of the
        key the user presses, then calls other procedures to carry out the
        user's commands.

        When you type in the call to AsciiKey (in the next step), what you type
        replaces this selected block.

    2. Type the following line at the cursor:

        call AsciiKey(Choice$, TopCard, LastCard)

        The AsciiKey procedure is called with three arguments, which convey
        information AsciiKey needs to carry out its tasks. Choice$ contains the
        code for the key the user presses, TopCard contains the number of the
        card at the front of the screen, and LastCard holds the number
        representing the last record in the Index()array.

    3. Indent the line you just entered two tab stops.

        The edited code should look like this (see Figure 8.3):


        File  Edit  View  Search  Run  Debug  Calls  Options              Hel
        ┌────────────────────────────── CHAPTER7.BAS ─────────────────────────┤↑
        │' presses that represent numeric-keypad direction keys.
        │
        │        IF LEN(Choice$) = 1 THEN
        │            ' Handle ASCII keys
        │            CALL AsciiKey(Choice$, TopCard, LastCard)
        │        ELSE
        │            ' Convert extended to ASCII and handle
        │            Choice$ = RIGHT$(Choice$, 1)
        │            '
        │            SELECT CASE Choice$
        │                CASE CHR$(DOWN)
        │                    PRINT "DOWN arrow key"
        │                CASE CHR$(UP)
        │                    PRINT "UP arrow key"
        │                CASE CHR$(PGDN)
        │                    PRINT "PGDN key"
        │                CASE CHR$(PGUP)
        │                    PRINT "PGUP key"
        │←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
        ├─────────────────────────────── Immediate ─────────────────────────────
        │
        │
        <Shift+F1=Help> <F6=Window> <F2=Subs> <F5=Run> <F8=Step>         00209:

        Figure 8.3  Code Showing Call to AsciiKey Procedure

    4. Choose the Run menu's Start command (press ALT+R, then press S).

    Try issuing some of the QCARDS commands. You should be able to edit the
    card at the front of the screen. However, if you press the DIRECTION keys,
    you still just get a description of the key overprinted on the QCARDS
    screen.

    To begin to make QCARDS' DIRECTION keys functional, you'll need to edit
    more of the text you copied from on-line help, as follows:

    QCARDS Code Entry 22

    1. Choose the QCARDS Quit command and return to QuickBASIC (press Q).

    2. Place the cursor in the first column of the line PRINT "DOWN arrow key"

    3. Select the whole line (press SHIFT+END), then replace it by typing this
        line:

        TopCard = TopCard - 1

        This line is executed when the user presses the DOWN key. It decreases
        the value of the card representing the data at the front of the screen
        by one. This is the user's way of telling QCARDS to show the record
        whose number is one less than the current top card.

    4. Indent the line, then edit the rest of the cases so the final block
        looks exactly as follows:

        SELECT CASE Choice$
                CASE CHR$(DOWN)
                        TopCard = TopCard - 1
                CASE CHR$(UP)
                        TopCard = TopCard + 1
                CASE CHR$(PGDN)
                        TopCard = TopCard - CARDSPERSCREEN
                CASE CHR$(PGUP)
                        TopCard = TopCard + CARDSPERSCREEN
                CASE CHR$(HOME)
                        TopCard = LastCard
                CASE CHR$(ENDKEY)
                        TopCard = 1
                CASE ELSE
                        BEEP
            END SELECT

        The final two DIRECTION key cases (RIGHT and LEFT) of the block you
        copied from on-line help are not needed in QCARDS (since the cards
        cannot move sideways), so you can delete those cases.

        The CASE ELSE part of the statement is executed if the QCARDS user
        presses a key with an extended character code for which no other case
        is provided.

    5. Save the program as CHAPTER8.BAS.

    You can replace the BEEP statement used in the CASE ELSE case of the Help
    example with a call to the Alarm procedure you created in Chapter 5, "The
    QCARDS Program." The following steps use the Find command to place an
    earlier call to the Alarm procedure on the Clipboard, then select this
    BEEP statement and replace it with CALL Alarm.

    Optional QCARDS Code Entry 4

    1. Choose the Search menu's Find command (press ALT+S, then press F), type
        CALL Alarm in the text box, and press ENTER.

    2. QuickBASIC searches for and then selects CALL Alarm, which was entered
        in the program in Chapter 5, "The QCARDS Program."

    3. Choose the Edit menu's Cut command (press ALT+E, then press T). (The
        words CALL Alarm are selected, so you don't need to highlight them.)

    4. Choose the Find command again, type BEEP in the text box, and press
        ENTER.

        The match is made with BEEP in the CASE ELSE statement.

    5. Choose the Edit menu's Paste command to replace BEEP with CALL Alarm
        (press ALT+E, then press P).


Finishing the QCARDS Code

    The SELECT CASE block changes the value of TopCard when the user presses
    DIRECTION keys, but doesn't do anything to actually change the information
    displayed on the cards.

    The following code lines take care of three eventualities that can arise
    from certain combinations of DIRECTION key presses, then shows the correct
    data on the cards:

    QCARDS Code Entry 23

    1. Place the cursor on the line beneath the following comment (about line
        252):

        ' Adjust the cards according to the key pressed by the user,
        ' then call the ShowCards procedure to show adjusted stack.

    2. Create an empty line (press ENTER), then type the following code,
        exactly as shown:

        if TopCard < 1 then TopCard = LastCard + TopCard
        if TopCard > LastCard then TopCard = TopCard - LastCard
        if TopCard <= 0 then TopCard = 1

        These three lines use the single line form of IF...THEN to "rotate" the
        card stack. They prevent TopCard from being passed to ShowCards when it
        has a value that is beyond the range of the Index()array.

    3. Now type your final code line:

        CALL ShowCards(TopCard, LastCard)

        The ShowCards procedure places the proper data on the front card, and
        the proper name on each of the cards behind it.

    4. Save the program now as CHAPTER8.BAS.

    5. Choose the Run menu's Start command to run QCARDS (press ALT+R, then
        press S).


Using QCARDS

    The commands on the command line at the bottom of the QCARDS output screen
    are now fully functional. Take a few minutes to try each feature. The
    commands are summarized in the following list:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    QCARDS Command           Result
    ──────────────────────────────────────────────────────────────────────────
    Edit Top                 Lets you change any or all fields of the card at
                            the front of the screen.

    Add New                  Places a "blank card" on the front of the screen
                            for you to fill in.

    Copy to New              Duplicates all fields of the current top card on
                            a new card.
    QCARDS Command           Result
    ──────────────────────────────────────────────────────────────────────────
                            a new card.

    Delete                   Marks the current top card for deletion. Note
                            that it is not actually deleted until you choose
                            Quit. Therefore, if you decide not to delete the
                            card, you can use CTRL+BREAK to break out of the
                            program. When you restart, the card will still be
                            there.

    Find                     Lets you move to one of the fields, then type
                            what you want to search for. If an exact match is
                            found, the card with the exact match is placed in
                            the first position. If no exact match is found,
                            QCARDS beeps.

    Sort                     Orders the cards alphabetically (or numerically)
                            by the field in which you place the cursor. For
                            example, if the cursor is in the zip code (Zip)
                            field, Sort orders the cards in increasing zip
    QCARDS Command           Result
    ──────────────────────────────────────────────────────────────────────────
                            field, Sort orders the cards in increasing zip
                            code order. If you place the cursor in the state
                            (ST) field, the cards are ordered alphabetically
                            by state.

    Print                    Prints out just the name and address fields (for
                            use on a mailing label).

    Quit                     Writes the current Index array to the
                            random-access disk file. If any cards have been
                            marked as deleted, they are removed from the file
                            at this time. Edits to cards and additions to the
                            file are also made when you quit QCARDS. Quit
                            then terminates the QCARDS program.
    ──────────────────────────────────────────────────────────────────────────


    Try the DIRECTION keys too. Most of the DIRECTION keys work. However, by
    copying code from Help, you inadvertently incorporated a naming
    inconsistency that caused a bug in your code. In the next chapter, you'll
    use QuickBASIC's debugging features to remove the bug.


For More Information

    For more information on on-line help, see the following:

    Chapter                  Topic
    ──────────────────────────────────────────────────────────────────────────
    Section 10.8, "Using    Information on QuickBASIC's Help menu commands
    On-Line Help" and        and complete descriptions of all the Help
    Chapter 21, "The Help   features.
    Menu"
    ──────────────────────────────────────────────────────────────────────────



────────────────────────────────────────────────────────────────────────────
Chapter 9  Debugging While You Program

Microsoft QuickBASIC's smart editor keeps your code free of syntax errors as
you enter individual statements. But QuickBASIC has other features that help
you isolate "bugs"──errors in the general logic or specific details of your
program that cause it to behave in unanticipated ways. Some of these
features are on the Debug menu, while others are on the Run menu. Still
others are controlled completely by function keys. These features let you
suspend program execution at any point, control which statements of your
program execute, and monitor the values of variables.

    In this chapter, you'll find a real bug and fix it. You'll practice

    ■ Using QuickBASIC's debugging features

    ■ Defining and calling a procedure that has parameters

    ■ Creating a stand-alone executable file from within QuickBASIC

    This chapter takes about one to one and one-half hours to complete.


Debugging Commands

    Most QuickBASIC debugging commands are on the Debug menu. However, some of
    the most useful debugging features are on the Run menu, or are accessible
    only through function keys.

Debug-Menu Commands

    Commands on the Debug menu let you control program flow and monitor the
    value of variables in a running program.

    Command (and Shortcut    Action
    Key)
    ──────────────────────────────────────────────────────────────────────────
    Add Watch                Places a variable you specify into the Watch
                            window, then continually updates its value.

    Instant Watch (SHIFT+F9) Gives current value of a highlighted variable;
                            optionally, places the variable in Watch window.

    Delete Watch             Deletes the specified variable from Watch window.

    Toggle Breakpoint (F9)   Sets a "breakpoint" at the cursor if one is not
                            currently set there. A breakpoint is a specified
                            location where program execution will halt. If
                            there is a breakpoint currently set at the
                            cursor, choosing Toggle Breakpoint turns it off.

    Clear All Breakpoints    Turns off all breakpoints everywhere in the
                            program.
    ──────────────────────────────────────────────────────────────────────────

Debugging Commands on the Run Menu

    Commands from the Run menu control program execution during debugging.

    Command (and Shortcut    Action
    Key)
    ──────────────────────────────────────────────────────────────────────────
    Start (SHIFT+F5)         Runs the program in the View window beginning
                            with the first statement.

    Restart                  Resets all variables to zero (or zero-length
                            strings), compiles declarations, and sets the
                            first executable statement as the current
                            statement.

    Continue (F5)            Continues execution of a suspended program from
                            the current statement. In a program that is not
                            running, the effect is identical to the Start
                            command.
    ──────────────────────────────────────────────────────────────────────────

Function Keys Used in Debugging

    The following table shows the debugging commands that are controlled only
    by function keys:

    Command                  Action
    ──────────────────────────────────────────────────────────────────────────
    F7                       Executes program to statement at the cursor.

    F8                       Single steps through your program. Each time you
                            press F8, the execution sequence progresses one
                            statement. If the current statement is a
                            procedure invocation, F8 moves the procedure
                            definition into the View window. If the program
                            is not already running, F8 acts the same as the
                            Run menu's Restart command: pressing F8 restarts
                            the program, making the first executable
                            statement the current statement. In a suspended
                            program, F8 executes the current statement in the
                            execution sequence.

    F10                      Single steps through your program. F10 steps over
                            or executes all statements of a procedure as
                            though they were a single statement without
                            moving the procedure definition into the View
                            window. Otherwise, F10 acts the same as F8.
    ──────────────────────────────────────────────────────────────────────────


Debugging a Procedure

    In this section you'll use everything you've learned so far to turn the
    SELECT CASE block that handles DIRECTION keys into a procedure. In Chapter
    5, "The QCARDS Program," you saw how easy it is to define procedures with
    QuickBASIC. The procedure you create in the next code-entry sequence is
    defined with parameters. When it is called, it is called with arguments.

    The following steps tell you how to create a SUB procedure with the name
    DirectionKey. As noted in Chapter 5, when QuickBASIC's smart editor
    processes the word sub followed by a procedure name, it opens a window and
    starts the procedure with the SUB and END SUB statements.

    QCARDS Code Entry 24

    1. Start QuickBASIC if it is not already running, and open CHAPTER8.BAS.

    2. Place the cursor in the leftmost column of the line containing SELECT
        CASE Choice$ (about line 231), then select the whole block (a total of
        16 lines) down to and including END SELECT. It looks like this (see
        Figure 9.1):


        ┌────────────────────────────────────┐
        │                                    │
        │   Figure 9.1 can be found on       │
        │   page 132 of the printed manual.  │
        │                                    │
        └────────────────────────────────────┘

        Figure 9.1  Selecting the SELECT CASE Choice$ Block

    3. Choose the Edit menu's Cut command to delete the text and place it on
        the Clipboard (press ALT+E, then press T).

    4. Create a blank line above the END IF statement, then move the cursor to
        column 1 of the new blank line.

    5. Type

        sub DirectionKey(Choice$, TopCard%, LastCard%)

        then press ENTER.

        Notice that QuickBASIC has started a SUB...END SUB procedure with the
        name you specified, and has moved it into the View window.

    6. Put the cursor on the blank line immediately above the END SUB
        statement (press DOWN).

    7. Choose the Edit menu's Paste command to paste the text block from the
        Clipboard. The procedure should look like Figure 9.2.


        File  Edit  View  Search  Run  Debug  Calls  Options              Help
    ┌──────────────────────── CHAPTER8.BAS:DirectionKey ──────────────────┤↑├──
    │DEFINT A-Z
    │SUB DirectionKey (Choice$, TopCard%, LastCard%)
    │        SELECT CASE Choice$
    │            CASE CHR$(DOWN)
    │                TopCard = TopCard - 1
    │            CASE CHR$(UP)
    │                TopCard = TopCard + 1
    │            CASE CHR$(PGDN)
    │                TopCard = TopCard - CARDPERSCREEN
    │            CASE CHR$(PGUP)
    │                TopCard = TopCard + CARDPERSCREEN
    │            CASE CHR$(HOME)
    │                TopCard = LastCard
    │            CASE CHR$(ENDKEY)
    │                TopCard = 1
    │            CASE ELSE
    │                CALL Alarm
    │        END SELECT
    │
    │END SUB
    │←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒→
    ├─────────────────────────────── Immediate ────────────────────────────────
    <Shift+F1=Help> <F6=Window> <F2=Subs> <F5=Run> <F8=Step>         00003:013

    Figure 9.2  DirectionKey Procedure in View Window

    Now that the procedure is defined, you have to put a CALL statement at the
    place where you deleted the text. The CALL statement makes the statements
    in a SUB procedure part of the program's execution sequence. Do the
    following:

    QCARDS Code Entry 25

    1. Choose the View menu's SUBs command (press F2).

        Note that the fifth entry under CHAPTER8.BAS is now DirectionKey.

    2. Select CHAPTER8.BAS if it isn't already selected. Press ENTER to return
        the cursor to the module-level code.

    3. Move the cursor to the end of the following line (at about line 229):

        Choice$ = RIGHT$(Choice$, 1)

    4. Create a blank line (press ENTER). Then, type the following line at the
        cursor but do not press ENTER:

        call DirectionKey(Choice$, TopCard, LastCard)

    The DirectionKey procedure is more complicated than Alarm because it is
    defined with parameters (the words in parentheses in the SUB statement you
    created earlier) and called with arguments (the words in parentheses in
    the CALL statement). You don't have to use the same names for the
    parameters as you use for the arguments, but it is all right to do so.

    The DirectionKey procedure makes QCARDS' module-level code easier to
    follow because the arithmetic for handling DIRECTION keys is now
    represented by a single statement, rather than 15 lines of statements.
    Using procedures costs almost nothing in terms of execution speed or
    program size, so the added program readability is worth the small effort
    of programming them. Procedures are especially beneficial for tasks that
    are performed repeatedly in a program.

Learning about Procedures

    You can use QuickBASIC's debugging features to learn about procedures. The
    cursor should still be on the call you just typed to Direction Key (about
    line 226). Try the following:

    1. Execute the program up to the call to DirectionKey (press F7).

        QCARDS starts to run. In the following step you will press a DIRECTION
        key while QCARDS is running, causing QuickBASIC to suspend execution at
        the call to DirectionKey.

    2. Press a DIRECTION key (preferably PGUP).

        This returns control to the QuickBASIC environment. The statement CALL
        DirectionKey appears in high-intensity video. It hasn't been executed
        yet──it is the current statement.

    3. Execute the CALL DirectionKey procedure as a single statement (press
        F10). The END IF statement appears in high-intensity video. It is now
        the current statement.

Continuing a Suspended Program

    You don't always have to start suspended programs over from the beginning
    after making edits. Usually you can just choose the Continue command from
    the Run menu to continue execution from the point of suspension. QCARDS
    should run as before. When you press DIRECTION keys, the data on the cards
    should change. Try the following:

    1. Continue program execution (press F5).

    2. Press the END key on the numeric keypad to move the data on the cards
        to the last item. The END key doesn't work. If you did the optional
        code entry in Chapter 8, the Alarm procedure sounds off because the
        END key isn't recognized as one of the cases in the SELECT CASE block.
        (If you didn't do the optional code entry in Chapter 8, QCARDS beeps.)
        You have a bug.

    3. Press the UP, DOWN, PGDN, and PGUP keys. They should all work. So there
        is a bug in the code dealing with the END key.

    4. Return to QuickBASIC (press CTRL+BREAK).

        QuickBASIC returns you to the environment and places the cursor at
        either the Choice$ = INKEY$ statement, or LOOP WHILE Choice$ =
        statement, whichever was executing when you pressed CTRL+BREAK. Right
        now you are stuck in this DO loop. You cannot step past it with F8 or
        F10. You will have to place the cursor on the statement following the
        loop, then use F7 to execute to it.

    5. Move the cursor down (about 27 lines) past the big comment block to the
        following line (at about line 224):

        IF LEN(Choice$) = 1 THEN

    6. Execute the program to the statement at the cursor (press F7). The
        QCARDS screen is displayed.

    7. Press the END key again.

        QuickBASIC returns you to the environment. The line you were on when
        you pressed F7 is highlighted:

        IF LEN(Choice$) = 1 THEN

    Usually when you suspend program execution you can press F5 to continue
    execution from the point of suspension. However, some edits you make to a
    suspended program prevent simple continuation. In the next few QCARDS
    code-entry sequences, QuickBASIC may display a dialog box indicating that
    one of the edits you have made requires restarting the program (see Figure
    9.3). That is normal. Just press ENTER and continue editing.


    ┌──────────────────────────────────────────────────────────────────────────
    │
    │  You will have to restart your program after this edit. Proceed anyway?
    │
    ├──────────────────────────────────────────────────────────────────────────
    │                      < OK >   < Cancel >   < Help >
    └──────────────────────────────────────────────────────────────────────────

    Figure 9.3  Restart Program Error Message


Isolating a Bug

    QuickBASIC's debugging features make coding and logic errors easy to trace
    and fix because they make it easy to understand the line-by-line workings
    of your code. In the next QCARDS code-entry sequence, you'll use single
    stepping to find the bug. You know you pressed a DIRECTION key to suspend
    the program so you can anticipate that execution will move to the ELSE
    block when you execute the statement at the cursor.

    Follow these steps to track down the bug:

    QCARDS Code Entry 26

    1. Execute the IF statement and the one that follows and move the cursor
        to the call to DirectionKey (press F8 twice to single step up to the
        call).

    2. Single step into the DirectionKey procedure (press F8).

        The cursor is placed on the SELECT CASE statement.

    3. Set a breakpoint (see Figure 9.4) at the current line (press F9).


                                                            Breakpoint
                                                                │
        File  Edit  View  Search  Run  Debug  Calls  Options  │           Hel
        ┌─────────────────────── CHAPTER8.BAS:DirectionKey ──────┼────────────┤↑
        │DEFINT A-Z                                              │
        │SUB DirectionKey (Choice$, TopCard%, LastCard%)         │
        │        SELECT CASE Choice$
        │            CASE CHR$(DOWN)
        │                TopCard = TopCard - 1
        │            CASE CHR$(UP)
        │                TopCard = TopCard + 1
        │            CASE CHR$(PGDN)
        │                TopCard = TopCard - CARDPERSCREEN
        │            CASE CHR$(PGUP)
        │                TopCard = TopCard + CARDPERSCREEN
        │            CASE CHR$(HOME)
        │                TopCard = LastCard
        │            CASE CHR$(ENDKEY)
        │                TopCard = 1
        │            CASE ELSE
        │                CALL Alarm
        │        END SELECT
        │←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
        ├─────────────────────────────── Immediate ─────────────────────────────
        │
        │
        <Shift+F1=Help> <F5=Continue> <F9=Toggle Bkpt> <F8=Step>         00017:

        Figure 9.4  Setting a Breakpoint

    4. Continue execution of QCARDS (press F5 twice). When the QCARDS output
        screen appears, press the END key to activate the suspected bug.

        QuickBASIC returns the cursor to the line on which you set the
        breakpoint.

    5. Single step to the CASE ELSE statement (press F8). The CALL Alarm
        statement appears in reverse video.

    6. Move the cursor into the word HOME in the CASE CHR$(HOME) statement,
        then get help (press F1).

        The Help window opens and describes HOME as a symbolic constant with a
        value of 71 (see Figure 9.5).


        File  Edit  View  Search  Run  Debug  Calls  Options              Hel
        ┌─────────────────────────────── HELP: HOME ──────────────────────────┤↑
        │HOME is a symbol that is used in your program as follows:
        │
        │┌  C:\QB4.5\DEMO\DIR1\CHAPTER8.BAS ────
        ││  constant of type: INTEGER   Value = 71
        ││
        │
        │
        ├─────────────────────── CHAPTER8.BAS:DirectionKey ───────────────────┤↑
        │               TopCard = TopCard - CARDPERSCREEN
        │           CASE CHR$(PGUP)
        │               TopCard = TopCard + CARDPERSCREEN
        │           CASE CHR$(HOME)
        │               TopCard = LastCard
        │           CASE CHR$(ENDKEY)
        │               TopCard = 1
        │           CASE ELSE
        │               CALL Alarm
        │       END SELECT
        │←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
        ├─────────────────────────────── Immediate ─────────────────────────────
        │
        │
        <Shift+F1=Help> <F5=Continue> <F9=Toggle Bkpt> <F8=Step>         00012:

        Figure 9.5  Symbol Help for Symbolic Constant HOME

    7. Move the cursor down to the CASE CHR$(ENDKEY) statement, place the
        cursor in the word ENDKEY, and get help (press F1).

        The Help window opens and describes ENDKEY as a variable of type
        INTEGER. But ENDKEY should be a symbolic constant, just like HOME.

    8. Choose the Instant Watch command from the Debug menu.

        The value of ENDKEY is shown as zero.

    9. Press ENTER to place ENDKEY in the Watch window.

    In the program, ENDKEY should be a symbolic constant defined with a CONST
    statement in the declarations and definitions section of the program (just
    like HOME). Try this:

    QCARDS Code Entry 27

    1. Choose the View menu's SUBs command (press ALT+V, then press S), then
        choose the first entry (CHAPTER8.BAS) in the list box to move the
        module-level code of the program into the View window.

    2. Move the cursor to the top of the module-level code (press CTRL+HOME).

    3. Choose the Search menu's Find command, then type HOME in the text box
        and press ENTER.

    HOME is selected in the declarations and definitions section. Beside it,
    you can see the cause of the bug. The symbolic constant used to represent
    the END key is ENDK, whereas the SELECT CASE code you copied from on-line
    help used ENDKEY to represent the END key (see Figure 9.6).


        File  Edit  View  Search  Run  Debug  Calls  Options              Help
    DirectionKey ENDKEY: 0
    ┌────────────────────────────── HELP: ENDKEY ─────────────────────────┤↑├──
    │ENDKEY is a symbol that is used in your program as follows:
    │
    │┌  C:\QB4.5\DEMO\DIR1\CHAPTER8.BAS ────
    ││┌ SUB DirectionKey ───────────────────
    │││  variable of type: INTEGER
    ││
    ├────────────────────────────── CHAPTER8.BAS ─────────────────────────┤↑├──
    │CONST SPACE = 32, ESC = 27, ENTER = 13, TABKEY = 9
    │CONST DOWN = 80, UP = 72, LEFT = 75, RIGHT = 77
    │CONST HOME = 71, ENDK = 79, PGDN = 81, PGUP = 73
    │CONST INS = 82, DEL = 83, NULL = 0
    │CONST CTRLD = 4, CTRLG = 7, CTRLH = 8, CTRLS = 19, CTRLV = 22
    │
    │' Define English names for color-specification numbers. Add BRIGHT to
    │' any color to get bright version.
    │CONST BLACK = 0, BLUE = 1, GREEN = 2, CYAN = 3, RED = 4, MAGENTA = 5
    │CONST YELLOW = 6, WHITE = 7, BRIGHT = 8
    │←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒→
    ├─────────────────────────────── Immediate ────────────────────────────────
    │
    │
    <Shift+F1=Help> <F5=Continue> <F9=Toggle Bkpt> <F8=Step>         00024:007

    Figure 9.6  Error in Naming Symbolic Constant for the ENV Key

    Most of the symbolic-constant names used to represent the DIRECTION keys
    are the same as those shown on the keys themselves, but you can't
    represent the END key with the symbolic constant END, because END is a
    BASIC keyword. The on-line help example used ENDKEY to deal with this
    problem, QCARDS uses ENDK. It doesn't matter which is used, ENDKEY is just
    as good as ENDK. What is important is that the word used in the definition
    be the same as that used elsewhere in the program. Do the following to
    change ENDKEY to ENDK:

    QCARDS Code Entry 28

    1. Choose the Search menu's Change command (press ALT+S, then press C).
        (If you get a message saying you will have to restart your program,
        press ENTER.)

    2. Type ENDKEY in the first text box, then press TAB and type ENDK in the
        second text box.

    3. Start the search (press ENTER). The first match is in the DirectionKey
        procedure.

    4. Make the change (press C). The search ends. That was the only
        occurrence of ENDKEY.


Closing the Watch Window

    When the Watch window is open, QuickBASIC executes more slowly than when
    it is closed. You close the Watch window by repeatedly choosing the Delete
    Watch command from the Debug menu, then choosing variables from the
    resulting dialog box until the Watch window closes. You may also want to
    occasionally choose the Clear All Breakpoints command too.

    1. Choose the Debug menu's Clear All Breakpoints command (press ALT+D,
        then press C).

    2. Choose the Debug menu's Delete Watch command (press ALT+D, then press
        D).

    3. Delete the entry (press ENTER).

    The next step is to run your program and save it. Do the following:

    QCARDS Code Entry 29

    1. Choose the Run menu's Start command. QCARDS should run and recognize
        all the DIRECTION keys as well as all the command-line keys.

    2. Choose Quit from the QCARDS command line, then press a key to continue.

    3. Choose the File menu's Save As command and save the program as
        FINALQ.BAS.

        QCARDS should now be fully functional.


Automatic Procedure Declarations

    When you save a program, QuickBASIC creates a DECLARE statement for any
    new procedure. Generally, you should move such DECLARE statements to the
    declarations and definitions section of your program. QuickBASIC uses
    procedure declarations to check the number, order, and types of the
    arguments you pass to a procedure when you call it. DECLARE statements
    should be toward the end of the declarations and definitions below
    statements such as DEFtype and TYPE...END TYPE. You should copy the
    DECLARE statement for the procedure DirectionKey into the
    procedure-declarations portion of the declarations and definitions (as you
    did with the declaration for Alarm in Chapter 5). Do the following:

    QCARDS Code Entry 30

    1. Move to the beginning of the program (press CTRL+HOME).

    2. Select the entire DECLARE DirectionKey statement (press SHIFT+END).

    3. Delete the selected statement from QCARDS and place it on the Clipboard
        (press ALT+E, then press T).

    4. Move to the SUB procedure declarations section of the program (about
        line 74).

    5. Create a blank line (if necessary) and insert the DECLARE DirectionKey
        statement (press ALT+E,then press P).

    6. Save the program again as FINALQ.BAS.


Creating a Stand-Alone Executable File

    1. Choose the Run menu's Make EXE File command (press ALT+R, then press
        X).

        If a dialog box appears asking if you want to save your files, press
        ENTER. The Make EXE File dialog box appears (see Figure 9.7):


                        Type name of executable file here.
                            │
        ┌───────────────────┼──Make EXE File─────────────────────────────┐
        │               ┌───┼───────────────────────────────────────┐    │
        │EXE File Name: │FINALQ.EXE                                 │    │
        │               └───────────────────────────────────────────┘    │
        │                                   Produce:                     │
        │  [ ] Produce Debug Code           ( ) EXE Requiring BRUN45.EXE │
        │                                   (∙) Stand-Alone EXE File     │
        ├────────────────────────────────────────────────────────────────┤
        │ < Make EXE >   < Make EXE and Exit >   < Cancel >   < Help >   │
        └────────────────────────────────────────────────────────────────┘

        Figure 9.7  Make EXE File Dialog Box

    2. Type QCARDS in the text box.

    3. Choose the Make EXE and Exit option (press ALT+E).

        QuickBASIC creates the EXE file and exits to DOS.

    4. Run QCARDS (type qcards at the DOS prompt and press ENTER).

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    If you don't have a hard disk, QuickBASIC prompts you to insert a disk
    containing BC.EXE, and later prompts you for a path for libraries it
    needs to finish making the executable file. BC.EXE, LINK.EXE and
    BRUN45.LIB are on disk 3 (Utilities 1). BCOM45.LIB is located on disk 4
    (Utilities 2). When asked for a path, type in a full path including both
    drive name and file name.
    ──────────────────────────────────────────────────────────────────────────


Learning about QuickBASIC's Other Menu Items

    The preceding chapters have familiarized you with most of the commands on
    QuickBASIC's Easy Menus. Two commands were not covered. The Options menu's
    Set Paths command lets you change some settings that were made
    automatically by the Setup program you used to install QuickBASIC. The
    View menu's Included Lines command is used only in programs that rely on
    include files. See Sections 20.2, "Set Paths Command," and 14.7,
    "Included Lines Command," for full discussions of these commands.

    Easy Menus provides a very functional programming environment for the
    novice or intermediate BASIC user. QuickBASIC's Full Menus provide
    additional commands needed for advanced or professional programming. For
    example, the Full Menus Debug menu contains commands useful for debugging
    large and complex programs. The Full Menus File menu lets you load
    multiple files simultaneously, so you can create programs using multiple,
    separately compiled source files (modules). The uses of these advanced
    commands are covered in Chapters 10-21 of this manual. The programming
    techniques are discussed in Programming in BASIC.


For More Information

    For more information on the topics discussed in these chapters, see the
    following:

    Chapter                   Topic
    ──────────────────────────────────────────────────────────────────────────
    Chapter 2, "SUB and       Complete information on programming with
    FUNCTION Procedures,"  procedures, including rules for parameters and
    in Programming in BASIC      arguments.

    Chapter 17,  "Debugging  Complete rules for using all QuickBASIC's
    Concepts and              debugging features, including advanced features
    Procedures," Chapter      such as watchpoints and the Calls menu.
    18, "The Debug Menu,"
    and Chapter 19, "The
    Calls Menu"
    ──────────────────────────────────────────────────────────────────────────



────────────────────────────────────────────────────────────────────────────
PART 3  QUICKBASIC MENUS AND COMMANDS
────────────────────────────────────────────────────────────────────────────

    Part 3, "QuickBASIC Menus and Commands," is a reference to the Microsoft
    QuickBASIC menus and commands. Refer to this part when you want detailed
    information on how a command works or situations in which you might use
    the command.

    Chapters 10 and 11 introduce the QuickBASIC environment and working with
    your files. Chapters 12-16 look at the QuickBASIC features that help you
    create, edit, and run your programs. Chapters 17-19 cover general
    debugging techniques and the specific tools available for faster
    debugging. Chapter 20 discusses how you can customize QuickBASIC to your
    personal taste, and Chapter 21 reviews the menu commands for accessing
    the on-line help system.



────────────────────────────────────────────────────────────────────────────
Chapter 10  Getting Around in QuickBASIC

    This chapter introduces the QuickBASIC programming environment and
    illustrates many of its features. The chapter includes the basic
    information you'll need to begin using the QuickBASIC program development
    environment.

    This chapter tells you how to do the following:

    ■ Start QuickBASIC

    ■ Choose commands from menus

    ■ Choose items in dialog boxes

    ■ Scroll listings

    ■ Select text in a dialog box or window

    ■ Change window size

    ■ Use the Immediate window

    ■ Use the Watch window

    ■ Use the mouse

    ■ Use on-line help


10.1  Starting QuickBASIC

    This section discusses starting QuickBASIC with and without special
    options. It also describes the parts of the QuickBASIC screen. If you have
    not already done so, read Chapter 1, "Setting Up QuickBASIC," to set up
    QuickBASIC on your computer.

10.1.1  The QB Command

    To start QuickBASIC, type QB at the DOS prompt.

    The full syntax for the QB command is the following:

    QB [[[[/RUN]] [[programname]] [[/B]] [[/G]] [[/H]] [[/NOHI]]
    [[/C:buffersize]] [[/L[[libraryname]]]] [[MBF]] [[/AH]] [[/CMD string]]]]

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    In this manual, the QB command and its options appear in uppercase
    letters. However, because DOS is not case sensitive, you may use
    lowercase letters as well.
    ──────────────────────────────────────────────────────────────────────────

    The following list describes QuickBASIC's command options. These options
    can be typed on the DOS command line following the QB command and have the
    effects described. Use the options in the order listed.

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Option                   Description
    ──────────────────────────────────────────────────────────────────────────
    /RUN programname         Causes QuickBASIC to load and run programname
                            before displaying it.

    programname              Names the file to be loaded when QuickBASIC
                            starts.

    /B                       Allows the use of a composite (black-and-white)
                            monitor with a color graphics card. The /B option
                            displays QuickBASIC in black and white if you
                            have a color monitor.

    /G                       Sets QuickBASIC to update a CGA screen as fast as
                            possible. The option works only with machines
                            using CGA monitors. If you see "snow" (dots
                            flickering on the screen) when QuickBASIC updates
                            your screen, then your hardware cannot fully
                            support the /G option. If you prefer a "clean"
                            screen, restart QuickBASIC without the option.
    Option                   Description
    ──────────────────────────────────────────────────────────────────────────
                            screen, restart QuickBASIC without the option.

    /H                       Displays the highest resolution possible on your
                            hardware.

    /NOHI                    Allows the use of a monitor that does not support
                            high intensity. See Section 10.1.2 for a
                            description of this option.

    /C:buffersize            Sets the size of the buffer receiving data. This
                            option works only with an asynchronous
                            communications card. The default buffer size is
                            512 bytes; the maximum size is 32,767 bytes.

    /L libraryname           Loads the Quick library that is specified by
                            libraryname. If libraryname is not specified, the
                            default Quick library, QB.QLB, is loaded.

    /MBF                     Causes the QuickBASIC conversion functions to
    Option                   Description
    ──────────────────────────────────────────────────────────────────────────
    /MBF                     Causes the QuickBASIC conversion functions to
                            treat IEEE-format numbers as Microsoft Binary
                            format numbers.

    /AH                      Allows dynamic arrays of records, fixed-length
                            strings, and numeric data to be larger than 64K
                            each.

    /CMD string              Passes string to the COMMAND$ function. This
                            option must be the last option on the line.
    ──────────────────────────────────────────────────────────────────────────


    For example, type

    QB /RUN GRAPHIX /G /AH

    if you want to run a program named GRAPHIX with the following options:

    ■ Load and run Graphix before displaying it

    ■ Quickly update CGA screen

    ■ Allow dynamic arrays to exceed 64K

    Generally, however, you start QuickBASIC by typing QB and pressing ENTER.

10.1.2  The /NOHI Option

    If you type QB at the DOS level, QuickBASIC assumes you have a monitor
    that can display high intensity. However, if you use a monitor that does
    not support high intensity, you will need to tell QuickBASIC how to
    display on your system. Use the list below to determine any options you
    may need.

    Monitor Display                                         Invocation Command
    ──────────────────────────────────────────────────────────────────────────
    16 colors (CGA, EGA or VGA)                             QB
    4-color monochrome (MDA)                                QB
    8 colors (CGA, EGA or VGA)                              QB /NOHI
    4-color black-and-white composite (CGA, EGA or VGA)     QB /B
    2-color black-and-white composite (CGA, EGA or VGA)     QB /B /NOHI
    ──────────────────────────────────────────────────────────────────────────

    Laptop computers frequently use liquid crystal displays (LCDs) that are
    considered 2-color black-and-white composite displays; they require the QB
    /B /NOHI command.

10.1.3  The QuickBASIC Screen

    The first time you type QB and press ENTER from DOS, a dialog box offers
    you the opportunity to review the QuickBASIC Survival Guide. If you press
    ESC to clear the dialog box, you now see the QuickBASIC screen, shown in
    Figures 10.1 and 10.2. Figure 10.1 shows the top half of the QuickBASIC
    invocation screen.


    ┌────────────────────────────────────┐
    │                                    │
    │   Figure 10.1 can be found on      │
    │   page 153 of the printed manual.  │
    │                                    │
    └────────────────────────────────────┘

    Figure 10.1  Top Half of QuickBASIC Invocation Screen

    The following list describes the items shown in Figure 10.1.

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Item                     Description
    ──────────────────────────────────────────────────────────────────────────
    Menu bar                 Names each menu. When you press the ALT key, the
                            highlighted letter indicates which key "pulls
                            down" that menu.

    View window              Displays your program's text.

    Cursor                   Shows where the text you type will appear. The
                            cursor appears in the active window.

    Mouse cursor             Shows current on-screen position of mouse (use
                            with mouse only).
    Item                     Description
    ──────────────────────────────────────────────────────────────────────────
                            with mouse only).

    Title bar                Shows the name of the program or procedure.

    Maximize box             Expands the active window to fill the screen (use
                            with mouse only).

    Scroll arrow             Scrolls the text one character or one line at a
                            time (use with mouse only).

    Scroll box               Shows cursor's relative position within the file
                            or procedure.
    ──────────────────────────────────────────────────────────────────────────


    Figure 10.2 shows the bottom half of the QuickBASIC invocation screen.


    ┌────────────────────────────────────┐
    │                                    │
    │   Figure 10.2 can be found on      │
    │   page 154 of the printed manual.  │
    │                                    │
    └────────────────────────────────────┘

    Figure 10.2  Bottom Half of QuickBASIC Invocation Screen

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Item                     Description
    ──────────────────────────────────────────────────────────────────────────
    Immediate window         Executes QuickBASIC statements directly; they
                            need not be entered as part of a program.

    CAPS LOCK and NUM LOCK   C appears when the CAPS LOCK key is toggled on. N
    indicators               appears when the NUM LOCK key is toggled on.

    Scroll bars              Scrolls text in the currently active window (use
                            with mouse only).

    Reference bar            Contains reference information.
    Item                     Description
    ──────────────────────────────────────────────────────────────────────────
    Reference bar            Contains reference information.
                            The first five items are buttons showing a
                            frequently used shortcut key and the
                            corresponding menu or option. Clicking a button
                            with the mouse gives the same result as pressing
                            the shortcut key shown in the button. Pressing
                            ALT displays four different reference items.

    WordStar-style command   'Q appears when you enter CTRL+Q, a
    indicator                WordStar-style command. 'K appears here when you
                            are setting a place marker (see Section 12.4,
                            "Using Placemarkers in Text"). 'P appears here
                            when you are entering a literal character (see
                            Section 12.6, "Entering Special Characters").

    Line and column counters Give current position of cursor within the text
                            in the active window.
    ──────────────────────────────────────────────────────────────────────────

    Item                     Description
    ──────────────────────────────────────────────────────────────────────────


    When you start QuickBASIC without specifying a program name, you can begin
    to write a program, or you can ask for on-line help. To use the QuickBASIC
    on-line help, press F1 for a general Help window, or use the Help menu for
    more detailed information (see Section 10.8, "Using On-Line Help," and
    Chapter 21, "The Help Menu," for more details).

    To clear a Help window, press the ESC key. Pressing ESC also clears menus,
    dialog boxes, and error messages from the QuickBASIC screen.


10.2  Opening Menus and Choosing Commands

    QuickBASIC commands are organized in pull-down menus on the menu bar.
    Figure 10.3 shows one of these, the File menu.


    ┌──────┐
    │ File │
    ├──────┴──────────┐
    │ New Program     │
    │ Open Program... │
    │ Merge...        │
    │ Save            │
    │ Save As...      │
    │ Save All        │
    ├─────────────────┤
    │ Create File...  │
    │ Load File...    │
    │ Unload File...  │
    ├─────────────────┤
    │ Print...        │
    │ DOS Shell       │
    ├─────────────────┤
    │ Exit            │
    └─────────────────┘

    Figure 10.3  The File Menu

    The QuickBASIC environment is designed for fast, simple operation. You can
    do most operations in QuickBASIC with either of the following techniques:

    ■ Open menus and choose commands with the keyboard or a mouse. (See
    Section 10.7, "Using the Mouse," for a summary of mouse techniques.)

    ■ Execute a command directly with a "shortcut" key, which is one or two
    keystrokes that perform the same task as a menu command.

    Menu commands followed by three dots (...) indicate that more information
    is required before the command can execute. In these cases, a "dialog
    box"──a box that asks you for additional information──appears on the
    screen.

10.2.1  Keyboard Technique

    You can choose any command on a QuickBASIC menu by using the keyboard.

    To open a menu, follow these steps:

    1. Press and release the ALT key. (Notice that after you press the ALT
        key, the first letter of each menu is highlighted.)

    2. Press the first letter of the menu's name.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    The ALT key is a "toggle," so if you press it again, the highlight
    disappears. The "press and release" feature of the ALT key is active
    only within menus. When using key combinations in other circumstances,
    you must hold down the first key while pressing the rest of the
    sequence.
    ──────────────────────────────────────────────────────────────────────────

    This "selects" (highlights) the entire menu and displays the menu's
    commands. A command name contains a highlighted letter whenever it is
    "active" (available).

    If no letter in a command is highlighted and it appears dimmed, you cannot
    choose that command until you take some other action. For example, if you
    are editing a program but have not selected any text to copy or delete,
    the commands Cut and Copy can have no effect. You can use Cut and Copy
    only after you select text. (See Section 12.2 to learn how to select text
    for copying or deleting.)

    To move from one menu to another, do either of the following:

    ■ Close the menu by pressing ESC, then repeat steps 1 and 2 above.

    ■ Press the LEFT or RIGHT direction keys.

    To choose a command, do one of the following:

    ■ Press the key corresponding to the highlighted letter.

    ■ Use the UP or DOWN direction keys to highlight the command you want to
    execute, then press ENTER.

    Some commands take effect immediately and cannot be canceled once chosen.
    However, commands followed by three dots ( ... ) cause QuickBASIC to
    display a dialog box so you can supply additional information. To cancel a
    dialog box, press ESC. See Section 10.3 for a discussion of dialog boxes.

    See Also

    Section 10.7, "Using the Mouse"

10.2.2  Using Shortcut Keys

    In QuickBASIC the function keys (F1-F10) serve as shortcut keys for many
    of the menu functions. Shortcut keys allow you to substitute one or two
    keystrokes for the process of choosing a command through on-screen menus.
    Shortcut keys for menu commands are listed on the menu, next to the
    command. If you are new to programming you may prefer to use only the
    on-screen menus. When you feel comfortable with QuickBASIC commands, you
    may want to use the shortcut keys.

    For example, to run a program, you can choose the Start command from the
    Run menu, or you can bypass the menu and use the shortcut-key combination
    SHIFT+F5. Table 10.1 lists and explains all of the QuickBASIC shortcut
    keys and equivalent menu commands.

    Table 10.1  QuickBASIC Shortcut Keys
╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Programming              Action
    Shortcut Keys            Menu Command
    ──────────────────────────────────────────────────────────────────────────
    SHIFT+F1                 Displays general help information
                            Help on Help command on Help menu

    F1                       Displays help information on the keyword or
                            variable nearest to the left of the cursor
                            Topic command on Help menu

    ALT+F1                   Displays up to 20 previous help screens
                            None

    F2                       Displays a list of loaded SUB or FUNCTION
                            procedures, modules, include files, or document
                            files
                            SUBs command on View menu

    SHIFT+F2                 Displays next procedure in active window
                            Next SUB command on View menu

    Programming              Action
    Shortcut Keys            Menu Command
    ──────────────────────────────────────────────────────────────────────────

    CTRL+F2                  Displays previous procedure in active window
                            None

    F3                       Finds next occurrence of previously specified
                            text
                            Repeat Last Find command on Search menu

    F4                       Toggles display of output screen
                            Output Screen command on View menu

    F5                       Continues program execution from current
                            statement
                            Continue command on Run menu

    SHIFT+F5                 Starts program execution from beginning
                            Start command on Run menu

    Programming              Action
    Shortcut Keys            Menu Command
    ──────────────────────────────────────────────────────────────────────────

    F6                       Makes next window the active window
                            None

    SHIFT+F6                 Makes previous window the active window
                            None

    F7                       Executes program to current cursor position
                            None

    F8                       Executes next program statement, traces through
                            procedure
                            None

    SHIFT+F8                 Steps back in your program through the last 20
                            program statements recorded by the History On or
                            Trace On command
                            None
    Programming              Action
    Shortcut Keys            Menu Command
    ──────────────────────────────────────────────────────────────────────────
                            None

    F9                       Toggles breakpoint
                            Toggle Breakpoint command on Debug menu

    SHIFT+F9                 Displays Instant Watch dialog box
                            Instant Watch command on Debug menu

    F10                      Executes next program statement, traces around
                            procedure
                            None

    SHIFT+F10                Steps forward in your program through the last 20
                            program statements recorded by the History On or
                            Trace On command
                            None

    CTRL+F10                 Toggles between multiple windows and full screen
    Programming              Action
    Shortcut Keys            Menu Command
    ──────────────────────────────────────────────────────────────────────────
    CTRL+F10                 Toggles between multiple windows and full screen
                            for active window
                            None
    ──────────────────────────────────────────────────────────────────────────


    See Also

    Section 12.7, "Summary of Editing Commands"


10.3  Using Dialog Boxes

    QuickBASIC displays a dialog box when it needs additional information
    before it can carry out an action. For example, a dialog box might do the
    following:

    ■ Prompt you for the name of a file

    ■ Display a list of options

    ■ Ask you to verify or cancel a command

    ■ Alert you to an error

    Figures 10.4 and 10.5 illustrate the parts of a dialog box.


    Path-specification    Text box                     List boxes
    line                  │                               ││
    ┌┼────────────────────┼─────── Load File ─────────────┼┼───────────────────
    ││           ┌────────┼───────────────────────────────┼┼─────────────────┐
    ││File Name: │*.bas                                   ││                 │
    ││           └────────────────────────────────────────┼┼─────────────────┘
    │└C:\QB4.5\DEMO                                       ││
    │                        Files                        ││   Dirs/Drives
    │ ┌──────────────────────────────────────────────────┐││ ┌───────────────┐
    │ │ ATEST.BAS        SORTDEMO.BAS                    │││ │ ..            ↑
    │ │ BL.BAS           TEST.BAS                       ─┼┘└─┼ SOURCE        ▒
    │ │ DEMO1.BAS        TORUS.BAS                       │   │ [-A-]         ▒
    │ │ DEMO2.BAS        VARHELP.BAS                     │   │ [-B-]         ▒
    │ │ DEMO3.BAS        VARHELP2.BAS                    │   │ [-C-]         ▒
    │ │ QBFORMAT.BAS                                     │   │               ▒
    │ │ QCARDS.BAS                                       │   │               ▒
    │ │ REMLINE.BAS                                      │   │               ↓
    │ └←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒→┘   └───────────────┘
    │ ┌────────────┬───────────┬────────────┐
    │ │ Load as:  (∙) Module  ( ) Include  ( ) Document
    ├─┼────────────────────────────────────────────────────────────────────────
    │ │         < OK >          < Cancel >          < Help >
    └─┼───────────┼─────────────────┼───────────────────┼──────────────────────
    │           └──────────┬──────┴───────────────────┘
    Option buttons        Command buttons

    Figure 10.4  Load File Dialog Box


    Option buttons
    │
    ┌┼─────────────────────────────── Display ─────────────────────────────────
    ││ ┌────────────────────────────── Colors ──────────────────────────────┐
    ││ │                                           Foreground   Background  │
    ││ │                                          ┌─────────┐  ┌─────────┐  │
    ││ │ ┌(∙) 1.  Normal Text                     │ Black   ↑  │ Black   ↑  │
    ││ │ │                                        │ White   ▒  │ White   ▒  │
    │└─┼─┤( ) 2.  Current Statement               │ Gray    ▒  │ Gray    ▒  │
    │  │ │                                        │ BrWhite ▒  │ BrWhite ▒  │
    │  │ └( ) 3.  Breakpoint Lines                │         ▒  │         ▒  │
    │  │                                          │         ▒  │         ▒  │
    │  │                                          │         ▒  │         ▒  │
    │  │                                          │         ↓  │         ↓  │
    │  │                                          └─────────┘  └─────────┘  │
    │  │                                                                    │
    │  └────────────────────────────────────────────────────────────────────┘
    │
    │  ┌───────────────────────── Display Options ──────────────────────────┐
    │  │    [X] Scroll Bars                             Tab Stops: 8        │
    │  └─────┼──────────────────────────────────────────────────────────────┘
    ├────────┼─────────────────────────────────────────────────────────────────
    │        │     < OK >           < Cancel >           < Help >
    └────────┼─────────────────────────────────────────────────────────────────
            Check box

    Figure 10.5  Display Dialog Box

    To move between different parts of a dialog box, use one of the following
    methods:

    ■ Press the TAB key.

    ■ Hold down the ALT key while pressing the key corresponding to the
    highlighted letter in the item you want selected. When a dialog box
    opens, it usually contains any options set previously.

    The different dialog box components are described in the following list:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Component                Description
    ──────────────────────────────────────────────────────────────────────────
    Path-specification line  Displays the path to the current directory.
                            Change the path by either typing a new path name
                            in the text box or by selecting the appropriate
    Component                Description
    ──────────────────────────────────────────────────────────────────────────
                            in the text box or by selecting the appropriate
                            directory in the Dirs/Drives list box.

    Text box                 Displays typed text.

    List box                 Lists a group of similar items, such as files or
                            procedures available, from which you may choose
                            one. Use the DIRECTION keys to move within list
                            boxes.

    Check box                Toggles an option on or off. Once the cursor is
                            in the checkbox area, press SPACEBAR, or press
                            ALT and then the highlighted letter of the item
                            you want to turn on or off.

                            When an option is on, an X appears in the check
                            box; when it is off, the check box is empty.

    Option button            Selects one of a group of options. Only one of
    Component                Description
    ──────────────────────────────────────────────────────────────────────────
    Option button            Selects one of a group of options. Only one of
                            the group may be chosen at a time. Use the
                            DIRECTION keys to move among option buttons.

    Command button           Executes a command. Once the cursor is in the
                            command button area, use TAB to alter selections.
                            Press either SPACEBAR or ENTER to execute
                            commands.
    ──────────────────────────────────────────────────────────────────────────


    Note that within dialog boxes you must keep the ALT key pressed while
    pressing the high-intensity letter. This procedure is slightly different
    from the one for choosing menu commands, which does not require you to
    hold the ALT key down while pressing the highlighted letter.


10.4  Using Windows

Microsoft QuickBASIC uses windows to contain different types of information.
There are four window types──View, Immediate, Help, and Watch. This section
introduces QuickBASIC's windows and tells how to do the following:

    ■ Change the active window

    ■ Move different parts of programs in and out of an active window

    ■ Change the size of a window

    ■ Scroll text in a window

10.4.1  Window Types

    QuickBASIC uses different windows to perform different functions. The
    following list describes the types of windows in QuickBASIC:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Window                   Description
    ──────────────────────────────────────────────────────────────────────────
    View                     The window that appears at the top of the screen
    Window                   Description
    ──────────────────────────────────────────────────────────────────────────
    View                     The window that appears at the top of the screen
                            when you start QuickBASIC (see Figure 10.1).
                            When you load a program, the code that is outside
                            of any FUNCTION or SUB procedure──known as the
                            "module-level" code──appears in the View window.
                            The View menu contains commands that let you
                            easily move different parts of your program in
                            and out of View windows. For example, to see a
                            FUNCTION or SUB procedure in the View window,
                            choose the SUBs command from the View menu, then
                            select the procedure from the dialog box.

    Immediate                The window at the bottom of the screen when you
                            start QuickBASIC. The Immediate window allows you
                            to execute BASIC statements immediately. (See
                            Section 17.3.5 for more information on the
                            Immediate window.)

    Help                     The window that contains on-line help. You can
    Window                   Description
    ──────────────────────────────────────────────────────────────────────────
    Help                     The window that contains on-line help. You can
                            copy examples from Help windows and paste them
                            into your program.

    Watch                    The window that opens at the top of the screen
                            when you choose certain commands from the Debug
                            menu. It displays the values of variables as your
                            program runs. (See Section 17.3.4 for more
                            information on using the Watch window for
                            debugging.)
    ──────────────────────────────────────────────────────────────────────────


10.4.2  Splitting the View Window (Full Menus Only)

    You can split the View window into upper and lower windows; this allows
    you to view or edit two parts of a program simultaneously. Because the
    View window can be split in two (Full Menus only), you can have a total of
    five windows open at one time (two View windows, the Immediate window, the
    Help window, and the Watch window), as shown in Figure10.6.


    Help window           Watch window                           View windows
    │                         │                                      ││
    │ File  Edit  View  Search│ Run  Debug  Calls  Options           ││ Help
    │DEMO2.BAS NUM:           │                                      ││
    │DEMO2.BAS TOTAL:                                                ││
    ┌┼───────────────── HELP: DECLARE Statement QuickSCREEN ──────────┼┼──┤↑├──
    │└ ◄QuickSCREEN►     ◄Details►     ◄Example►     ◄Contents►     ◄Index►
    │─────────────────────────────────────────────────────────────────┼┼──────
    │DECLARE - a non-executable statement that declares references to ││
    │          BASIC procedures and invokes argument type checking    ││
    │Syntax                                                           ││
    │  DECLARE {FUNCTION | SUB } name [<[parameterlist]>]             ││
    ├─────────────────────────────── DEMO2.BAS ───────────────────────┼┼──┤↑├──
    │DECLARE SUB Bounce (Hi%, Low%)                                   │└
    │DECLARE SUB Fall (Hi%, Low%, Del%)                               │
    │DECLARE SUB Siren (Hi%, Rng%)                                    │
    │DECLARE SUB Klaxon (Hi%, Low%)                                   │
    │←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│▒▒▒▒▒▒▒→
    ├────────────────────────────── SORTDEMO.BAS ─────────────────────┼───┤↑├──
    │' The program also uses SOUND statements to generate different pitches,
    │' depending on the location of the bar being printed. Note that the SOUND
    │' statements delay the speed of each sorting algorithm so you can follow
    │' the progress of the sort. Therefore, the times shown are for comparison
    ├─────────────────────────────── Immediate ────────────────────────────────
    │LOCATE 4,5 : PRINT "TEST"
    │               │
    <Shift+F1=Help>│<F6=Window> <F2=Subs> <F5=Run> <F8=Step>         00001:001
                    │
            Immediate window

    Figure 10.6  QuickBASIC Screen with Five Windows Open

    To split the View window, choose the Split command from the View menu. The
    screen is now divided into two parts. Repeat the process to restore the
    original screen.

    See Also

    Section 14.3 "Split Command"

10.4.3  Changing the Active Window

    The window that contains the cursor is referred to as the "active" window;
    it is the place where text entered from the keyboard appears.

    To make another window active, follow these steps:

    ■ Press F6 to cycle downward through the windows on the screen.

    ■ Press SHIFT+F6 to cycle upward.

10.4.4  Changing Window Size

    You can increase or decrease the size of a window one line at a time or
    expand it to fill the whole screen. To change the size of a window, first
    make it the active window. Then use the following key combinations (hold
    down the first key while pressing the second) to increase or decrease the
    window's size. (Use the PLUS and MINUS keys on the keypad.)

    Key Combination          Result
    ──────────────────────────────────────────────────────────────────────────
    ALT+PLUS (+)             Expands the active window one line.

    ALT+MINUS (-)            Shrinks the active window one line.

    CTRL+F10                 Expands the active window to fill the screen, or,
                            if it already occupies the whole screen, returns
                            the active window to its former size.
                            If the View window is split in two when you press
                            CTRL+F10, pressing CTRL+F10 again restores both
                            windows to the screen.
    ──────────────────────────────────────────────────────────────────────────

10.4.5  Scrolling in the Active Window

    To look at the parts of a file that do not fit within the boundaries of a
    View window, you can move the text ("scroll") up, down, right, or left.

    Once you reach a window's edge, press the appropriate DIRECTION key to
    begin scrolling. For example, to scroll right one character at a time, go
    to the rightmost character on the screen and press the RIGHT key.

    Refer to Table 10.2 for information on scrolling more than one character
    at a time. The rightmost column in this table shows keystrokes that you
    may find more convenient if you prefer WordStar-style commands.

    Table 10.2  Scrolling
                                                            WordStar-Style
    Scrolling Action                     Keystrokes         Equivalents
    ──────────────────────────────────────────────────────────────────────────
    Beginning of line                    HOME               CTRL+Q+S
    End of line                          END                CTRL+Q+D
    Page up                              PGUP               CTRL+R
    Page down                            PGDN               CTRL+C
    Left one window                      CTRL+PGUP          ---
    Right one window                     CTRL+PGDN          ---
    Beginning of file                    CTRL+HOME          CTRL+Q+R
    End of file                          CTRL+END           CTRL+Q+C
    ──────────────────────────────────────────────────────────────────────────

    You can also set place markers anywhere in your program and jump between
    them while editing. See Chapter 12, "Using the Editor," for more
    information.


10.5  Using the Immediate Window

    The Immediate window, the bottom window on the initial QuickBASIC screen,
    allows direct execution of QuickBASIC statements. Use it to refine short
    pieces of program code and see the effect immediately. When you are
    satisfied with the results, you can copy the code into your program.

    Figure 10.7 shows code being tested in the Immediate window.


        File  Edit  View  Search  Run  Debug  Calls  Options              Help
    DEMO2.BAS NUM:
    DEMO2.BAS TOTAL:
    ┌─────────────────────────────── DEMO2.BAS ───────────────────────────┤↑├──
    │DECLARE SUB Bounce (Hi%, Low%)
    │DECLARE SUB Fall (Hi%, Low%, Del%)
    │DECLARE SUB Siren (Hi%, Rng%)
    │DECLARE SUB Klaxon (Hi%, Low%)
    │DEFINT A-Z
    │' QB2 Version of Sound Effects Demo Program
    │'   (works under most other BASIC compilers)
    │
    │' Sound effects menu
    │WHILE Q$ <> "Q"
    │    CLS
    ├─────────────────────────────── Immediate ────────────────────────────────
    │LOCATE 4,5 : PRINT "TEST"
    ││
    ││
    │<Shift+F1=Help> <F6=Window> <Enter=Execute Line>                00001:026
    │
    Code being tested

    Figure 10.7  Immediate Window

    You can enter up to ten separate lines in the Immediate window, then move
    among them with the DIRECTION keys. Each line is limited to 256
    characters. Multiple statements are permitted on one line, but each
    complete statement must be separated from the next by a colon (:). When
    you place the cursor on a line and press ENTER, only the statements on
    that line execute.

    As you write your program, you can make the Immediate window active, type
    and edit statements as you would in the Edit window, then execute them
    immediately. By testing your ideas before incorporating them into a larger
    program, you verify that they function properly.

    The Immediate window is similar to "direct mode" in BASICA, and has the
    following characteristics:

    ■ Any statement or group of statements on a line will be executed when you
    place the cursor anywhere on the line and press ENTER.

    ■ As many as ten lines can be entered in the Immediate window; you can
    execute the lines in any order.

    After you have entered ten lines, each new line scrolls the text in the
    Immediate window up one line.

    ■ A line can have a maximum of 256 characters. Statements can be grouped
    on a line, but must be separated by colons (:).

    ■ Each line is executed independently of all other lines in the window.
    However, changes in one line can affect other lines. For example, the
    following lines contain two assignments to the integer variable x%, so
    the value printed by the second line corresponds to whichever assignment
    line was most recently executed:

    x% = 5
    print x%
    x% = 9

    ■ The Immediate window is expanded when you repeatedly press ALT+PLUS
    while it is the active window. Pressing CTRL+F10 while the Immediate
    window is active expands it to the full screen, but no matter how many
    lines appear, only the first ten are available for use. Press CTRL+F10
    again to return the window to its previous size.

    ■ Code written in the Immediate window is not saved to disk by the Save
    command. Use the Cut or Copy commands from the Edit menu to move the
    contents of the Immediate window into a View window if you want to save
    them with the rest of the file.

    See Also

    Section 17.2, "Preventing Bugs with QuickBASIC"; Section 17.3.5,
    "Immediate Window"

10.5.1  Statements Not Allowed

    Most QuickBASIC statements and functions are allowed in the Immediate
    window. However, an error message will appear if you use the following
    QuickBASIC keywords in the Immediate window:


    ──────────────────────────────────────────────────────────────────────────
    COMMON                   ELSEIF                  OPTION

    CONST                    END DEF                 REDIM

    DATA                     END FUNCTION            SHARED

    DECLARE                  END IF                  $STATIC

    DEF FN                   END SUB                 STATIC

    DEFtype                  END TYPE                SUB

    DIM                      FUNCTION                TYPE

    DYNAMIC                  $INCLUDE                $DYNAMIC

    ──────────────────────────────────────────────────────────────────────────

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    Although the END IF statement is not allowed in the Immediate window,
    you can still use the single-line form of IF...THEN...ELSE there.
    ──────────────────────────────────────────────────────────────────────────

10.5.2  Doing Calculations

    Use the Immediate window to calculate complicated expressions, then
    display results with the PRINT statement. Use any of BASIC's intrinsic
    functions (such as SIN or EXP) in these calculations. Similarly, you can
    use the Immediate window to print the value returned by FRE(-1). This
    tells you the amount of memory available after both QuickBASIC and your
    program are loaded.

10.5.3  Testing Screen Output

    As a program grows in length and complexity, it is useful to test your
    code before incorporating it into your program. Typing code in the
    Immediate window and testing it there first avoids having to run a program
    from the beginning each time you want to modify a small part of code.

    Examples

    You can use the following lines in the Immediate window to test the
    position at which output will be written to the screen:

    row% = 1 : col% = 4*row% : LOCATE row%,col% : PRINT "."

    By changing the value of the variable row%, then pressing ENTER, you can
    position the period in the PRINT statement in different places on the
    screen.

    Sometimes a program can leave the output screen in an undesirable mode
    when it finishes running (for example, a graphics program may end without
    resetting the screen to 80-column text mode). If this happens, use the
    Immediate window to put the screen in the output mode you want. For
    example, the following lines restore the output screen to 80-column text
    mode and close any text viewport (a restricted horizontal slice of the
    screen) set in the program:

    screen 0
    width 80
    view print

10.5.4  Invoking Procedures

    You can isolate the effects of any individual SUB or FUNCTION procedure by
    calling it from the Immediate window. Use the Immediate window to execute
    only those statements between the SUB and END SUB or FUNCTION and END
    FUNCTION statements. For example, entering the following line in the
    Immediate window executes all statements in the procedure SubProgram1,
    including any calls it makes to other procedures:

    call SubProgram1

10.5.5  Changing the Values of Variables

    Use the Immediate window to assign a new value to a variable in a running
    program. Stop the program, assign the variable a new value in the
    Immediate window, and continue execution. The value you assign in the
    Immediate window becomes the variable's value when the program continues
    running.

    Example

    The following steps show how you can use the Immediate window to change a
    variables in a running program:

    1. Type this program in the View window:

        FOR i% = 0 TO 10000
        LOCATE 10, 20 : PRINT i%
        LOCATE 10, 27 : PRINT "  and still counting"
        NEXT i%

    2. Use the Start command on the Run menu to start the program, then use
        CTRL+BREAK to interrupt it.

    3. Type

        i% = 9900

        in the Immediate window and press ENTER.

    4. Press F5 to continue the program.

        The loop now executes from 9900 to 10,000.

    The Immediate window can access variable values only after those variables
    have been assigned values; this occurs after statements containing the
    variables have been executed in the View window. For example, suppose the
    statement you just executed in the View window gave a variable called x% a
    value of 3. You then enter PRINT x% in the Immediate window. The number 3
    will be printed to the screen when you press ENTER.

    Similarly, if the next statement to be executed in the View window is a
    module-level statement, you cannot access the variables of a SUB or
    FUNCTION from the Immediate window.

10.5.6  Simulating Run-Time Errors

    Run-time errors are those that occur while a program is running. Each
    run-time error is associated with a numeric code. If your program uses
    error handling (ON ERROR statements), QuickBASIC returns this numeric code
    to your program.

    One way to find out which error message is associated with a given code is
    to refer to Appendix I, "Error Messages," in Programming in BASIC. Another
    way is to simulate the error itself. You can simulate an error by moving
    to the Immediate window and entering the given number as an argument to
    the ERROR statement. QuickBASIC then displays the dialog box for that
    error, as if the error had actually occurred in a running program. Figure
    10.8 shows an error-message dialog box on the QuickBASIC screen.


                            Error-message dialog box
                                │
        File  Edit  View  Search │Run  Debug  Calls  Options              Help
    ┌───────────────────────────┼─── DEMO1.BAS ───────────────────────────┤↑├──
    │5 DEFINT A-Z               │
    │10 ' BASICA/GWBASIC Version│of Sound Effects Demo Program
    │15 '                       │
    │20 ' Sound effect menu     │
    │25 Q = Z                   │
    │30 WHILE Q >= 1            │
    │35     CLS                 │
    │40     PRINT "Sound effect┌┼──────────────────────┐
    │45     COLOR 15, 0: PRINT ││                      │  "ouncing"
    │50     COLOR 15, 0: PRINT │  File already exists  │  "alling"
    │55     COLOR 15, 0: PRINT │                       │  "laxon"
    │60     COLOR 15, 0: PRINT ├───────────────────────┤  "iren"
    │65     COLOR 15, 0: PRINT │   < OK >   < Help >   │  "uit"
    │70     PRINT : PRINT "Sele└───────────────────────┘
    │75     Q$ = INPUT$(1): Q = I                         Get valid key
    │80     IF Q = 0 GOTO 75
    │85     CLS     ' Take action based on key
    ├─────────────────────────────── Immediate ────────────────────────────────
    │error 58
    ││
    ││
    │<Shift+F1=Help> <F6=Window> <Enter=Execute Line>             C  00001:001
    │
    Error code entered in Immediate window

    Figure 10.8  Simulated Run-Time Error


10.6  Using the Watch Window

    The Watch window is one of QuickBASIC's advanced debugging features. It
    displays variables tracked for debugging purposes. The Watch window opens
    at the top of the screen when you set a watchpoint or add a watch
    expression. (See Section 17.3.2, "Breakpoints and Watchpoints," and
    Section 17.3.3, "Watch Expressions.")

    Figure 10.9 shows the QuickBASIC screen with entries in the Watch window.


    Location where
    you added
    the variable  ┌───Variables (or expressions)       Values (or conditions
    │            │                                         │
    │ File  Edit │View  Search  Run  Debug  Calls  Options │            Help
    │TEST.BAS I:─┤1────────────────────────────────────────┤
    └TEST.BAS J:─┘12───────────────────────────────────────┘
    ┌──────────────────────────────── TEST.BAS ───────────────────────────┤↑├──
    │FOR I = 1 TO 900
    │   FOR J = 1 TO 600
    │      PRINT I
    │      PRINT J
    │   NEXT J
    │NEXT I
    │END
    │←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒→
    ├─────────────────────────────── DEMO1.BAS ───────────────────────────┤↑├──
    │5 DEFINT A-Z
    │10 ' BASICA/GWBASIC Version of Sound Effects Demo Program
    │15 '
    │20 ' Sound effect menu
    │25 Q = Z
    │30 WHILE Q >= 1
    │35     CLS
    │40     PRINT "Sound effects": PRINT
    ├─────────────────────────────── Immediate ────────────────────────────────
    │LOCATE 4,5 : PRINT "TEST"
    │
    <Shift+F1=Help> <F5=Continue> <F9=Toggle Bkpt> <F8=Step>      C  00004:007

    Figure 10.9  Watch Window

    The Watch window opens whenever you choose the Add Watch or Watchpoint
    command, or when you choose Add from the Instant Watch dialog box. Add
    Watch, Watchpoint, and Instant Watch are all on the Debug menu. Each Watch
    window entry contains the following information:

    ■ Location where you added the variable.

    This part of the entry names the module or procedure from which you
    added an expression to the Watch window.

    ■ Variable or expression.

    The variable or expression you want to track.

    ■ Value or condition.

    In Figure 10.9, the variables I and J have values 1 and 12,
    respectively. Since the program is currently executing in TEST.BAS and
    both I and J were added to the Watch window when TEST.BAS was in the
    View window (indicated by the TEST.BAS entry in front of both I and J),
    both of their values appear. If they had been added from a different
    location such as a procedure, then the procedure name would appear in
    the Watch window and Not watchable would appear in the value location
    while the program executed in TEST.BAS.

    See Also

    Section 17.3.4, "Watch Window"; Chapter 18, "The Debug Menu"


10.7  Using the Mouse

    You can use QuickBASIC with a mouse. Terms associated with the mouse and
    used in this manual include the following:

    Mouse Term               Description
    ──────────────────────────────────────────────────────────────────────────
    Mouse cursor             Block cursor that moves on the screen as you move
                            the mouse.

    Click                    Placing the mouse cursor on an item, and pressing
                            and releasing the left mouse button.

    Double click             Placing the cursor on an item and pressing the
                            left mouse button twice in a row.

    Drag                     Placing the mouse cursor at the beginning of what
                            you wish to select. Press the left mouse button
                            and hold it down. Move the pointer to the end of
                            your desired selection and release the button.
                            Use this technique to highlight words, manipulate
                            window sizes, and use scroll bars.
    ──────────────────────────────────────────────────────────────────────────

    To choose commands with the mouse follow these steps:

    1. Point to the menu name and click the left mouse button.

    2. Point to the command you want to select and click the left mouse
        button.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    Use only the left mouse button to choose QuickBASIC menus or commands.
    Clicking the right mouse button is the same as pressing F1 (accessing
    on-line help). For information on how to set the right mouse button to
    execute your program to the line containing the mouse cursor, see
    Section 20.3, "Right Mouse Command."
    ──────────────────────────────────────────────────────────────────────────

    Table 10.3 explains mouse techniques for accomplishing other tasks.

    Table 10.3  Mouse Commands
╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Task                     Mouse Technique
    ──────────────────────────────────────────────────────────────────────────
    Close a menu             Move the mouse cursor off the menu and click the
                            left button.

    Make a window active     Click anywhere in the window.

    Expand or shrink a View  Move the mouse cursor to the title bar and drag
    or Immediate window      the title bar up or down.

    Expand the active window Click the maximize box, at the right of the title
    to occupy the full       bar, or double click the mouse anywhere on the
    screen                   title bar.

    Scroll text              Place the cursor on the scroll box and drag it to
                            a position on the bar that corresponds to the
                            general location in the file you want.
    Task                     Mouse Technique
    ──────────────────────────────────────────────────────────────────────────
                            general location in the file you want.

                            To scroll one page at a time, place the mouse
                            cursor in the scroll bar between the scroll box
                            and the top or bottom of the scroll bar and click
                            the left button.

                            To scroll one line or one character at a time,
                            click the scroll arrows at either end of the
                            scroll bars.

    Select programs and      Double click the file name, click the file name
    files                    and OK in a list box (use this technique with the
                            Open Program, Merge, and Load File commands), or
                            single click to highlight the file name and press
                            ENTER.

    Change directories       Double click a directory name to view its
                            contents. (In most dialog boxes, directories and
    Task                     Mouse Technique
    ──────────────────────────────────────────────────────────────────────────
                            contents. (In most dialog boxes, directories and
                            drives appear in a separate list to the right of
                            the file list.) If the current directory is a
                            subdirectory, two periods (. .) appear in the
                            list. Double click the two periods to move up one
                            directory level.

    Display Instant Watch    Press and hold the SHIFT key while clicking the
    dialog box               right mouse button.
    ──────────────────────────────────────────────────────────────────────────


    ──────────────────────────────────────────────────────────────────────────
    NOTE
    To open a program with the mouse, double click the file name in the list
    box. Clicking an item with a mouse selects that item. Double clicking an
    item in a list box selects the item, confirms all previous choices, and
    closes the dialog box.
    ──────────────────────────────────────────────────────────────────────────


10.8  Using On-Line Help

    QuickBASIC has an extensive on-line help system. Through on-line help, you
    can get information on virtually any QuickBASIC topic, menu, command, or
    keyword.

    See Also

    Chapter 21, "The Help Menu"

10.8.1  Help Features

    QuickBASIC's on-line help consists of two parts: environment help (for
    error messages, menus, and commands) and the Microsoft QB Advisor (for
    language-oriented topics). Press ESC to clear either type of on-line help
    from your screen.

    Environment help appears in dialog boxes; the QB Advisor appears in the
    Help window at the top fo the screen. The following special features are
    available within the QB Advisor:

    ■ Hyperlinks connect related topics; they give you immediate access to all
    related information on a particular topic (see Section 10.8.2).

    ■ Examples can be copied or pasted directly into your program. You may
    resize the Help window, use commands such as PGUP and the DIRECTION
    keys, and scroll. You can even use Find from the Search menu to locate
    specific information within a particular help screen.

    ■ Placemarkers can be used. If you use a particular screen frequently, set
    a placemarker there as you would in program text. Later, you can quickly
    return to the same screen. (See Section 12.4, "Using Placemarkers in
    Text.")

    ■ QuickBASIC remembers up to the last 20 hyperlinks you accessed. Rather
    than repeatedly search through on-line help, you can press ALT+F1 to
    trace back through as many as 20 help screens.

    You can access on-line help in four ways:

    1. Move the cursor to the word in your program you want help on, and press
        F1.

    2. Select the Help button or press F1 when a help dialog box is displayed.

    3. Use hyperlinks from within Help windows to call up more information on
        related topics (see Section 10.8.2).

    4. Select a command from the Help menu.

10.8.2  Hyperlinks

    The QB Advisor provides interconnections called "hyperlinks" between
    related subjects. With a few keystrokes, you can access all of the
    information and related material on a particular topic.

    Hyperlinks appear at the top and bottom of the Help window between
    highlighted (on monochrome monitors) or green (on most color monitors)
    triangles. Any BASIC keyword also forms a hyperlink to that keyword's
    on-line help.

    To use a hyperlink, make the Help window active (press SHIFT+F6), and
    press the TAB key to move the cursor to the hyperlink you want to
    activate. Alternatively, you can enter the first letter of a hyperlink's
    name and the cursor will jump to that hyperlink. Press F1 to call up the
    screen associated with that hyperlink.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    Mouse users can place the mouse cursor on a hyperlink and click the
    right button, provided the right button function is set to invoke
    context-sensitive help (the default setting).
    ──────────────────────────────────────────────────────────────────────────

    Figure 10.10 shows examples of hyperlinks in the PRINT Help screen. The
    Remarks and Example hyperlinks provide additional remarks and examples.


    Inactive hyperlink
    (screen currently     Hyperlinks to additional       Hyperlinks to
    displayed)         ┌─ help on PRINT                  general help topics
    │                 │                                     ┌────┴────┐
    │ File  Edit  View│ Search  Run  Debug  Options         │         │ Help
    ┌┼─────────────────┼── HELP: PRINT Statement QuickSCREEN ├─────────┼──┤↑├──
    │└ ◄QuickSCREEN►   │ ◄Details►     ◄Example►     ◄Contents►     ◄Index►
    │───────────────── └────┴──────────────┘ ─────────────────────────────────
    │PRINT - a device I/O statement that outputs data on the screen
    │
    │Syntax
    │  PRINT [expressionlist][{,|;}]
    │
    │  ■ If expressionlist is omitted, a blank line is printed.
    │  ■ If expressionlist is included, the values of the expressions are
    │    printed on the screen.
    │  ■ The expressions in the list may be numeric or string expressions.
    │    (String literals must be enclosed in quotation marks.)
    │
    │Other Uses of the PRINT Keyword
    │ ┌◄PRINT USING► - to output formatted text to the screen
    │ │◄PRINT #► - to output data to a sequential file
    │←│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒→
    │
    Hyperlinks to related statements

    Figure 10.10  Help on the PRINT Statement

10.8.3  Moving in Help Windows

    You can use the keyboard to move in Help windows. For example, you can use
    the DIRECTION keys. You can also use the key sequences described in Table
    10.4.

    Table 10.4  Help Keys
╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Key Sequence             Description
    ──────────────────────────────────────────────────────────────────────────
    SHIFT+F1                 Displays Help on Help

    ESC                      Clears help from the screen

    TAB                      Moves to next hyperlink

    SHIFT+TAB                Moves to previous hyperlink

    Key Sequence             Description
    ──────────────────────────────────────────────────────────────────────────

    character                Moves to next hyperlink starting with the letter
                            character

    SHIFT+character          Moves to previous hyperlink starting with the
                            letter character

    PGUP                     Displays previous screen (if one exists) of
                            current topic

    PGDN                     Displays next screen (if one exists) of current
                            topic

    CTRL+F1                  Displays help for the topic stored just after the
                            current help topic

    SHIFT+CTRL+F1            Displays help for the topic stored just before
                            the current help topic
    ──────────────────────────────────────────────────────────────────────────
    Key Sequence             Description
    ──────────────────────────────────────────────────────────────────────────
    ──────────────────────────────────────────────────────────────────────────


10.8.4  Help Files

    When you choose any help command, QuickBASIC searches for the appropriate
    help file. QuickBASIC searches the current working directory, then the
    directory specified by the Set Paths command (Options menu), and finally
    any removable disks present in your system. If QuickBASIC cannot find an
    appropriate file, it displays the dialog box shown in Figure 10.11. Copy
    the missing file into the appropriate directory.


    ┌───────────────────────────────────────────────────────┐
    │                                                       │
    │           File QB45QCK.HLP not found.                 │
    │ Put the floppy disk with this file into the drive and │
    │ Retry, or change your Help path in Options+Set Paths. │
    │                                                       │
    ├───────────────────────────────────────────────────────┤
    │              < Retry >    < Cancel >                  │
    └───────────────────────────────────────────────────────┘

    Figure 10.11  Dialog Box for Missing Help File

    If you cannot invoke any form of on-line help, you may be missing all of
    the help files; in this case, you need to check the contents of your
    QuickBASIC directory or rerun the setup procedure. Or you may have
    inadequate memory to display on-line help. This situation can occur if you
    try to run QuickBASIC concurrently with other memory-resident files. In
    this case, remove one or more memory-resident files and start QuickBASIC
    again. You may also have inadequate memory if your machine doesn't meet
    the minimum system requirements (see the introduction to this manual).

10.8.5  Hard-Disk System

    If you use a hard disk, you installed all of the help files in a single
    directory during your setup (see Chapter 1, "Setting Up Microsoft
    QuickBASIC," for more information). The Set Paths command on the Options
    menu specifies the directory path to the help files.

    When you invoke language-oriented help, you will automatically receive the
    QB Advisor.

10.8.6  Removable-Disk System

    Microsoft QuickBASIC provides some language help on the same disk that
    contains QuickBASIC. This file contains statement descriptions and syntax,
    but not the detailed examples available in the QB Advisor.

    To use the QB Advisor on a dual removable-disk system, press either the
    Remarks or Example hyperlinks at the top of the screen. A dialog box asks
    you to insert the Microsoft QB Advisor disk.

    Once you insert the Microsoft QB Advisor disk, you can access more
    detailed help on QuickBASIC's keywords. You may leave the Microsoft QB
    Advisor disk in the drive until QuickBASIC prompts you for another disk.



────────────────────────────────────────────────────────────────────────────
Chapter 11  The File Menu

    The File menu lets you work with files in QuickBASIC. From the File menu
    you can create new files, load existing files, modify files, or remove
    files. You also use the File menu to print files and exit from QuickBASIC.

    The File menu has the following commands:

    ■ New Program. Clears any previously loaded program and lets you begin a
    new program.

    ■ Open Program. Opens a program; lists system files and directories.

    ■ Merge. Merges the contents of two files (Full Menus only).

    ■ Save. Writes the contents of the file in the active View window to a
    disk file (Full Menus only).

    ■ Save As. Saves the current file with the name you specify.

    ■ Save All. Saves all currently loaded files (Full Menus only).

    ■ Create File. Begins either a new program module, an include file, or a
    document file as part of the current program (Full Menus only).

    ■ Load File. Loads an existing file──either a program module, an include
    file or a document file──into memory (Full Menus only).

    ■ Unload File. Removes an entire file from memory (Full Menus only).

    ■ Print. Lets you print all or part of your program.

    ■ DOS Shell. Returns temporarily to the DOS command level (Full Menus
    only).

    ■ Exit. Removes program from memory and returns to the DOS prompt.


11.1  New Program Command

    The New Program command from the File menu clears all previously loaded
    files so you can begin typing a completely new program. If a loaded
    program contains unsaved text, QuickBASIC asks if you want to save it
    before clearing it from memory.

    A program contains one or more BASIC statements that QuickBASIC will
    translate into instructions for your computer. BASIC programs can be
    contained in a single file. However, QuickBASIC also allows you to build
    programs containing multiple self-contained parts ("modules"). Each module
    usually contains procedures that are used to perform specific tasks. One
    such module may be called into several programs. The New Program command
    creates the main module of a multiple-module program. In a single-module
    program, the main module is the only module.

    A program can have four types of files:

    ■ One main module (required)

    ■ Other modules

    ■ Include files

    ■ Document files (including .MAK files)

    Modules can contain the following:

    ■ Module-level code

    ■ SUB procedures

    ■ FUNCTION procedures

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    When you are writing a completely new program, use the New Program
    command. When you are calling up a program that already exists on disk,
    use the Open Program command.
    ──────────────────────────────────────────────────────────────────────────

    See Also

    Section 11.2, "Open Program Command"; Section 11.7, "Create File
    Command"


11.2  Open Program Command

    The Open Program command opens an existing program. The dialog box
    displayed initially lists the files with .BAS extensions in the current
    working directory. You can also list files in other directories and on
    other disks on your system.

    When you choose the Open Program command, the dialog box shown in Figure
    11.1 appears.


    Path of currently     Entry determines which           Symbol for next
    loaded file           files are displayed              highest directory
    ┌┼────────────────────┼─────── Open Program ───────────┼───────────────────
    ││           ┌────────┼────────────────────────────────┼─────────────────┐
    ││File Name: │*.BAS                                    │                 │
    ││           └─────────────────────────────────────────┼─────────────────┘
    │└C:\QB4.5\DEMO                                        │
    │                        Files                         │   Dirs/Drives
    │ ┌──────────────────────────────────────────────────┐ │ ┌───────────────┐
    │ │ ATEST.BAS        TEST.BAS      ─┐                │ └─┼─..            ↑
    │ │ BL.BAS           TORUS.BAS      │                │   │ SOURCE ─┐     ▒
    │ │ DEMO1.BAS        VARHELP.BAS    │                │   │┌[-A-]   │     ▒
    │ │ DEMO2.BAS        VARHELP2.BAS   │                │  ┌┼┤[-B-]   │     ▒
    │ │ DEMO3.BAS                       ├─────┐          │  ││└[-C-]   │     ▒
    │ │ QBFORMAT.BAS                    │     │          │  ││         │     ▒
    │ │ QCARDS.BAS                      │     │          │  ││         │     ▒
    │ │ REMLINE.BAS                     │     │          │  ││         │     ▒
    │ │ SORTDEMO.BAS                   ─┘     │          │  ││         │     ↓
    │ └←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│▒▒▒▒▒▒▒▒▒→┘  │└─────────┼─────┘
    ├─────────────────────────────────────────┼─────────────┼──────────┼───────
    │           < OK >          < Cancel >    │     < Help >│          │
    └─────────────────────────────────────────┼─────────────┼──────────┼───────
                                            │             │          │
                .BAS files in current directory        Drives     Subdirectory

    Figure 11.1  Open Program Dialog Box

    If a program consists of several modules, all of the modules belonging to
    the program are loaded. If a program uses include files (see Section
    2.5.4.3, "Using Include Files for Declarations," and Appendix F,
    "Metacommands," in Programming in BASIC), the include files are compiled,
    but not loaded or displayed.

11.2.1  Specifying a File

    Files are displayed in columns in the Files list box. Directories and
    available drives appear in the Dirs/Drives list to the right of the Files
    list. Use the DIRECTION keys or the scroll bars to scroll in either of the
    list boxes. Note that the Files list box scrolls left and right, and the
    Dirs/Drives list box scrolls up and down.

    The Open Program dialog box provides two ways to specify the file you want
    to load (see Section 10.7, "Using the Mouse," for mouse techniques). Use
    either of the following two methods:

    1. Type the name of the program in the text box and press ENTER.

        If you enter a file name with no extension, QuickBASIC assumes your
        file has the .BAS extension. If you want to load a file that has no
        extension, type a period (.) immediately after the file name.

    2. Press the TAB key to move to the list box, and use the DIRECTION keys
        to move through the list box until the desired file is highlighted.
        Then press ENTER.

        You can also highlight the file name by moving to the list box and
        pressing the first letter of the name of the file you want to load.

    In either case, the text of the program appears in a window with the file
    name in the title bar.

11.2.2  Listing Directory Contents

    You can use the Open Program dialog box to list the contents of any
    directory on your system. When you choose a directory name in the
    Dirs/Drives list box, QuickBASIC lists all the subdirectories and .BAS
    files in the directory you choose. When you enter or choose a file name
    from the Files list box, that file is loaded into memory. The following
    list describes several methods you can use to list contents of
    directories:

    Task                                 Action
    ──────────────────────────────────────────────────────────────────────────
    Listing all files in the current     Type *.* in the text box.
    directory

    Listing files in root directory of   Type A:*.* in the text box.
    drive A

    Listing all files in a subdirectory  Highlight BIN in the Dirs/Drives list
    named BIN                            box and press ENTER. Type *.* in the
                                        text box.

    Listing all files in the current     Type *.BI in the text box.
    directory with the .BI extension

    Listing all files in the directory   Type .. in the text box. Or, press a
    immediately above the current        DIRECTION key or the period (.) to
    directory                            select .. if you are already in the
                                        Dirs/Drives list box. Then type *.*
                                        in the text box.
    ──────────────────────────────────────────────────────────────────────────

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    The "current working directory" is the directory shown by the CD command
    from DOS. In contrast, when you select a directory from a list box, you
    are only listing the files it contains, not changing the current working
    directory at the DOS level. If you want to change the current working
    directory, make the Immediate window active, and use the CHDIR
    statement.
    ──────────────────────────────────────────────────────────────────────────

    See Also

    Section 11.1, "New Program Command"; Section 11.8, "Load File Command"


11.3  The Merge Command (Full Menus Only)

    The Merge command on the File menu inserts the contents of a file at the
    beginning of the line the cursor is on. When you choose the Merge command
    from the File menu, the dialog box shown in Figure 11.2 appears.


    Path of currently     Entry determines which       Symbol for next
    loaded file           files are displayed          highest directory
    ┌┼────────────────────┼────────── Merge ───────────────┼───────────────────
    ││           ┌────────┼────────────────────────────────┼─────────────────┐
    ││File Name: │*.bas                                    │                 │
    ││           └─────────────────────────────────────────┼─────────────────┘
    │└C:\QB4.5\DEMO                                        │
    │                        Files                         │   Dirs/Drives
    │ ┌──────────────────────────────────────────────────┐ │ ┌───────────────┐
    │ │ ATEST.BAS        TEST.BAS      ─┐                │ └─┼ ..            ↑
    │ │ BL.BAS           TORUS.BAS      │                │   │ SOURCE ─┐     ▒
    │ │ DEMO1.BAS        VARHELP.BAS    │                │   │┌[-A-]   │     ▒
    │ │ DEMO2.BAS        VARHELP2.BAS   │                │  ┌┼┤[-B-]   │     ▒
    │ │ DEMO3.BAS                       ├─────┐          │  ││└[-C-]   │     ▒
    │ │ QBFORMAT.BAS                    │     │          │  ││         │     ▒
    │ │ QCARDS.BAS                      │     │          │  ││         │     ▒
    │ │ REMLINE.BAS                     │     │          │  ││         │     ▒
    │ │ SORTDEMO.BAS                   ─┘     │          │  ││         │     ↓
    │ └←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│▒▒▒▒▒▒▒▒▒→┘  │└─────────┼─────┘
    ├─────────────────────────────────────────┼─────────────┼──────────┼───────
    │           < OK >          < Cancel >    │     < Help >│          │
    └─────────────────────────────────────────┼─────────────┼──────────┼───────
                                            │             │          │
                .BAS files in current directory        Drives       Subdirectory

    Figure 11.2  Merge Dialog Box

    The Merge dialog box operates the same way as the Open Program dialog box.
    However, the Merge command inserts the specified file into the current
    file, whereas the Open Program command clears whatever is currently in
    memory, then loads the program.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    QuickBASIC cannot merge binary files; the file brought in with the Merge
    command must be text format.
    ──────────────────────────────────────────────────────────────────────────

    See Also

    Section 11.2, "Open Program Command," and Section 14.1, "SUBs Command,"
    in this manual; Chapter 7, "Programming with Modules," and Appendix B,
    "Differences from Previous Versions of QuickBASIC," in Programming in
    BASIC.


11.4  Save Command (Full Menus Only)

    The Save command saves the contents of the current file (the file being
    displayed in the active View window) to a disk file.

    If the file you are saving already has a name, Save overwrites the version
    on disk. If the file does not have a name, the Save dialog box in Figure
    11.3 appears to ask you for a name.


    Path of
    currently     File name  Subdirectory
    loaded file           │  │
    ┌┼────────────────────┼──┼ Save ───────────────────────┐
    ││           ┌────────┼──┼───────────────────────────┐ │
    ││File Name: │CALC.BAS   │                           │ │
    ││           └───────────┼───────────────────────────┘ │
    │└C:\QB4.5\DEMO          │                             │
    │   Dirs/Drives          │                             │
    │                        │                             │
    │ ┌───────────────┐   ┌──┼──────── Format ───────────┐ │
    │┌┼ ..            ↑   │  │ (∙) QuickBASIC -  ─┐      │ │
    │││ SOURCE ───────────┼──┘      Fast Load and ├───┐  │ │
    │││ [-A-]─┐       ▒   │         Save         ─┘   │  │ │
    │││ [-B-] ├────┐  ▒   │                           │  │ │
    │││ [-C-]─┘    │  ▒   │    ( ) Text -         ─┐  │  │ │
    │││            │  ▒   │         Readable by    ├──│  │ │
    │││            │  ↓   │         Other Programs ┘  │  │ │
    ││└────────────┼──┘   └───────────────────────────┼──┘ │
    ├┼─────────────┼──────────────────────────────────┼────┤
    ││    < OK >   │      < Cancel >          < Help >│    │
    └┼─────────────┼──────────────────────────────────┼────┘
    Symbol for     │                                  │
    next highest   Drives               File-format options
    directory

    Figure 11.3  Save Dialog Box

    See Also

    Section 11.5, "Save As Command"; Section 11.6, "Save All Command"


11.5  Save As Command

    The Save As command saves the current file with the name you specify. It
    is useful for saving a file under a new name and changing the format in
    which the file is saved. If you change the name, the old file still exists
    with the name it had the last time it was saved.

    When you choose Save As from the File menu, a dialog box like that shown
    in Figure 11.3 appears. The Save As dialog box lists the existing name of
    the file you want to save. Enter a new name in the text box to replace the
    old name. The next time you save the file, the new file name will appear
    in the text box.

    The following list describes the file-format options in the Save dialog
    box:

    Option                   Purpose
    ──────────────────────────────────────────────────────────────────────────
    QuickBASIC──Fast Load    Saves a program in QuickBASIC format. A program
    and Save                 saved this way loads faster than one saved as a
                            text file but can be edited only using
                            QuickBASIC. Because it is a non-ASCII file, you
                            will not be able to change it using another text
                            editor. This is QuickBASIC's default format for
                            saving a program. Files classified as document or
                            include files with the Create File or Load File
                            command cannot be saved in this format.

    Text──Readable by Other  Saves your file to disk as a text (ASCII) file.
    Programs                 Text files can be read, modified, or printed by
                            any editor or word processing program that reads
                            ASCII files. Files classified as document or
                            include files are always stored in this format.
    ──────────────────────────────────────────────────────────────────────────

    See Also

    Section 11.4, "Save Command"; Section 11.6, "Save All Command"


11.6  Save All Command (Full Menus Only)

    The Save All command saves all currently loaded files that have changed
    since the last time you saved a file. A currently loaded file is one whose
    name appears in the dialog box of the View menu's SUBs command. Save All
    is useful when you are working with multiple files in memory.

    If the main module you are saving already has a name, Save All overwrites
    the version on disk. If the main module does not have a name, a dialog box
    like that shown in Figure 11.3 asks you for a name. Section 11.5
    explains each of the file-format options.

    When you save a multiple-module program, QuickBASIC creates a special file
    on your disk that contains the names of all the modules in the program.
    The file is given the base name of the main module plus the extension
    .MAK. QuickBASIC uses the .MAK file as a roadmap to the various program
    modules the next time you load the program. For more information on .MAK
    files, see Section 16.7.2.

    See Also

    Section 11.4, "Save Command"; Section 14.1, "SUBs Command"


11.7  Create File Command (Full Menus Only)

    The Create File command on the File menu allows you to begin a new file as
    part of the program currently in memory.

    When you choose the Create File command from the File menu, a dialog box
    appears. To create a new file, type the file name in the text box, select
    the file type, and press ENTER. See Figure 11.4.


            File name
                │
    ┌────────────┼──── Create File ──────────────────┐
    │       ┌────┼─────────────────────────────────┐ │
    │ Name: │CALC.BAS                              │ │
    │       └──────────────────────────────────────┘ │
    │┌──┬──────────────┬───────────────┐             │
    ││ (∙) Module     ( ) Include     ( ) Document   │
    ├┼───────────────────────────────────────────────┤
    ││     < OK >       < Cancel >      < Help >     │
    └┼───────────────────────────────────────────────┘
    │
    File-type options

    Figure 11.4  Create File Dialog Box

    Select the appropriate file type from the following:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    File Type                Description
    ──────────────────────────────────────────────────────────────────────────
    Module                   A discrete program component. A program consists
                            of at least one module. When you make a program
                            out of several modules, each module is saved on
                            disk as a separate file when you save the
    File Type                Description
    ──────────────────────────────────────────────────────────────────────────
                            disk as a separate file when you save the
                            program. Modules are handy if you have long
                            programs or use the same groups of procedures
                            over and over in different programs. QuickBASIC's
                            smart editor checks syntax and formatting in
                            modules.

                            See Section 12.5 in this manual for information
                            on the smart editor. See Chapter 7 in Programming
                            in BASIC for more information on modules.

    Include                  A text file whose statements are compiled into
                            your program when QuickBASIC encounters the
                            file's name following a $INCLUDE metacommand.
                            QuickBASIC's smart editor checks syntax and
                            formatting in include files as it does in
                            modules. Although the contents of the include
                            file are used in your program, the include file
                            itself is not a part of the program. Its name
    File Type                Description
    ──────────────────────────────────────────────────────────────────────────
                            itself is not a part of the program. Its name
                            does not appear in the .MAK file of a
                            multiple-module program.

    Document                 A text file. QuickBASIC does not treat a file
                            opened as a document as BASIC code, so the smart
                            editor does not check document files for syntax
                            and formatting. However, you can edit a document
                            file with the QuickBASIC editor just as you would
                            with a normal word processor. Document file names
                            never appear in the .MAK file of a
                            multiple-module program.
    ──────────────────────────────────────────────────────────────────────────


    Once you have created any of the preceding kinds of files in QuickBASIC,
    you can see the file's name in the list box of the View menu's SUBs dialog
    box.

    While a file's name appears in this list box, you cannot load it again,
    even with a different classification. For example, if you create a file as
    a document, you cannot load it again as an include file until you unload
    the current copy with the Unload File Command (see Section 11.9, "Unload
    File Command").

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    Use the Create File command to add a new module to the program currently
    in memory. Create File differs from Open Program, which loads a file as
    a module after unloading all other files prior to loading the program.
    If no other modules are loaded when you use Create File to create a
    module, it is considered the main module of the program.
    ──────────────────────────────────────────────────────────────────────────

    See Also

    Section 11.1, "New Program Command"; Section 11.2, "Open Program
    Command"; Section 11.8, "Load File Command"; Section 14.1, "SUBs
    Command"


11.8  Load File Command (Full Menus Only)

    The Load File command on the File menu loads single program modules──as
    well as include files and document files──from disk into memory. When you
    choose Load File, a dialog box appears. To load a file, type the file name
    in the text box, select the file type, and press ENTER. See Figure 11.5.


    Path of currently     File to load             .BAS files in
    loaded file           │                        current directory
    ┌┼────────────────────┼──────── Load File ─────┼───────────────────────────
    ││           ┌────────┼────────────────────────┼─────────────────────────┐
    ││File Name: │DEMO1.BAS                        │                         │
    ││           └─────────────────────────────────┼─────────────────────────┘
    │└C:\QB4.5\DEMO                                │
    │                        Files                 │           Dirs/Drives
    │ ┌────────────────────────────────────────────┼─────┐   ┌───────────────┐
    │ │ ATEST.BAS        SORTDEMO.BAS  ─┐          │     │   │ ..            ↑
    │ │ BL.BAS           TEST.BAS       │          │     │   │ SOURCE        ▒
    │ │ DEMO1.BAS        TORUS.BAS      │          │     │   │ [-A-]         ▒
    │ │ DEMO2.BAS        VARHELP.BAS    │          │     │   │ [-B-]         ▒
    │ │ DEMO3.BAS        VARHELP2.BAS   ├──────────┘     │   │ [-C-]         ▒
    │ │ QBFORMAT.BAS                    │                │   │               ▒
    │ │ QCARDS.BAS                      │                │   │               ▒
    │ │ REMLINE.BAS                    ─┘                │   │               ↓
    │ └←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒→┘   └───────────────┘
    │ ┌────────────┬───────────┬────────────┐
    │ │ Load as:  (∙) Module  ( ) Include  ( ) Document
    ├─┼────────────────────────────────────────────────────────────────────────
    │ │         < OK >          < Cancel >          < Help >
    └─┼────────────────────────────────────────────────────────────────────────
    │
    File-type options

    Figure 11.5  Load File Dialog Box

    You must select the correct file type: Module, Include, or Document. See
    Section 11.7, "Create File Command," for more details on specific file
    types.

    Once you have loaded any type of file into QuickBASIC, you can see the
    file name in the list box of the View menu's SUBs dialog box.

    While a file name appears in this list box, you cannot load it again, even
    with a different classification. For example, if you load a file as a
    document, you cannot load it again as an include file until you unload it
    with the Unload File command. See Section 11.9 for more information on
    Unload File.

    If you have procedures in other modules (program files) that you want to
    use in the current program, you can load those modules using Load File.
    Once the file is loaded, you can reference the procedures it contains
    anywhere in the current program.

    Modules from other programs can be added into the program currently in
    memory as follows:

    1. Choose the Load File command from the File menu.

    2. Select the name of the module containing procedures you want to use in
        the current program.

    3. Press ENTER to load the file as a module, since the Module option is
        already chosen.

    4. Repeat steps 1-3 for each module you want to load.

    Save the program using the Save All command once all the modules are
    loaded.

    See Also

    Section 11.1, "New Program Command"; Section 11.7, "Create File Command"


11.9  Unload File Command (Full Menus Only)

    The Unload File command removes an include file, document, or entire
    module from memory. After you unload a module, the disk file containing
    the module still exists; however, when you save your program, the module
    is no longer a part of the program.

    If your program contains more than one module, the name of the unloaded
    module is removed from the program's .MAK file. If you unload the main
    module of a multiple-module program, QuickBASIC prompts you to set a new
    main module before proceeding. Unloading a document or include file leaves
    any other loaded files in memory.

    When you choose the Unload File command, the dialog box shown in Figure
    11.6 appears.


    File to unload
    ┌────────── Unload File ──────────┐
    │  Choose module to unload:       │
    │  ┌───────────────────────────┐  │
    │  │ DEMO1.BAS                 ↑  │
    │  │ DEMO2.BAS                 ▒  │
    │  │ TEST.BAS                  ▒  │
    │  │                           ▒  │
    │  │                           ▒  │
    │  │                           ▒  │
    │  │                           ↓  │
    │  └───────────────────────────┘  │
    │                                 │
    ├─────────────────────────────────┤
    │  < OK >  < Cancel >  < Help >   │
    └─────────────────────────────────┘

    Figure 11.6  Unload File Dialog Box

    Follow these steps to unload a file:

    1. Choose the Unload File command from the File menu.

    2. Select the name of the module, include file, or document that you no
        longer want in the program.

    3. Press ENTER.

    The module is unloaded but still exists as a disk file. You can use Unload
    File to unload any type of file──a program module, include file, or
    document file──from memory.

    See Also

    Section 11.1, "New Program Command"; Section 16.7.2, "The .MAK File"


11.10  The Print Command

    The Print command on the File menu lets you print selected text, text in
    the active window, the entire current module, or all currently loaded
    program modules. To use the Print command, your printer must be connected
    to your computer's LPT1 port.

    When you choose the Print command from the File menu, the dialog box shown
    in Figure 11.7 opens. Select the appropriate option from the Print
    options box to print your file.


        Prints                Prints contents of
        selected text         active window
            │                 │
    ┌─────────┼─ Print ─────────┼──┐
    │         │                 │  │
    │     ( ) Selected Text     │  │
    │     ( ) Active Window─────┘  │
    │     ( ) Current Module──────┐│
    │     ( ) All Modules         ││
    │          │                  ││
    ├──────────┼──────────────────┼┤
    │  < OK > <│Cancel > < Help > ││
    └──────────┼──────────────────┼┘
                │                  │
        Prints all               Prints module in
        loaded modules           active window

    Figure 11.7  Print Dialog Box


11.11  DOS Shell Command (Full Menus Only)

    The DOS Shell command on the File menu lets you return temporarily to the
    DOS command level, where you can execute other programs and DOS commands.
    QuickBASIC remains in memory so you can return to the same place in your
    program, without reloading it.

    QuickBASIC needs to find the COMMAND.COM file before it can execute the
    Shell command. QuickBASIC looks for COMMAND.COM first in the directory
    specified in the COMSPEC environment variable, then in the current
    directory. See your DOS documentation for more information about
    COMMAND.COM and COMSPEC.

    Follow these steps to return to QuickBASIC from the DOS command level:

    1. Type exit

    2. Press ENTER

    The QuickBASIC screen reappears as you left it.


11.12  Exit Command

    The Exit command on the File menu removes QuickBASIC from memory and
    returns you to the DOS prompt.

    When you exit from a new or modified program that has not been saved,
    QuickBASIC displays the dialog box shown in Figure 11.8.


    ┌──────────────────────────────────────────────────────────┐
    │                                                          │
    │  One or more loaded files are not saved. Save them now?  │
    │                                                          │
    ├──────────────────────────────────────────────────────────┤
    │     ┌── < Yes >   < No >   < Cancel >   < Help > ──┐     │
    └─────┼────────────────┼──────────┼──────────────────┼─────┘
        │                │          │                  │
    Saves the      Returns to DOS     Stays in           Provides help on
    file(s)        without saving     QuickBASIC         the dialog box
                    the program        environment

    Figure 11.8  Exit Dialog Box

    To exit from QuickBASIC after the Exit dialog box has been called up, use
    one of these procedures:

    1. To save the program in its current state and then exit, choose Yes or
        press ENTER.

        If this is a new program that you haven't named yet, QuickBASIC
        displays a dialog box similar to the Save dialog box. See Section
        11.4 for more information on this dialog box.

    2. To return to DOS without saving the file in its current state, choose
        No or type N.

    To stay in the QuickBASIC environment (that is, not exit to DOS after
    all), press ESC.

    See Also

    Section 11.5, "Save As Command"; Section 11.11, "DOS Shell Command"



────────────────────────────────────────────────────────────────────────────
Chapter 12  Using the Editor

    This chapter describes how to enter and edit program text using QuickBASIC
    editing commands. Before beginning this chapter, you should be familiar
    with the QuickBASIC screen and the techniques described in Chapter 10,
    "Getting Around in QuickBASIC."

    This chapter includes information on

    ■ Performing simple editing functions such as entering text and moving the
    cursor

    ■ Deleting and inserting text

    ■ Moving and copying blocks of text

    ■ Searching for and replacing characters, words, or a group of words

    ■ Copying text from other files


12.1  Entering Text

    New characters are added to the text either by inserting or overtyping. In
    "insert mode," the QuickBASIC editor inserts each new character to the
    left of the cursor position. In "overtype mode," each new character
    replaces the character under the cursor. You switch between insert mode
    and overtype mode by pressing the INS key or CTRL+V. The cursor is a
    blinking underscore in insert mode and a blinking box in overtype mode.

    When typing a QuickBASIC program, you can enter a line (tell QuickBASIC
    that you have completed one or more BASIC statements) either by pressing
    the ENTER key at the end of the line or by moving the cursor off the line.
    If the Syntax Checking command is on (Options menu, Full Menus only),
    QuickBASIC checks the line for proper statement syntax.


12.2  Selecting Text

    Before you can perform editing functions that manipulate blocks of text
    (copying and deleting), you must indicate the portion of text you wish to
    edit by selecting (highlighting) it. Selecting tells both you and the
    computer which text will be changed by the next command.

    Hold down the SHIFT key while using the DIRECTION keys or any of the
    editing shortcut keys (see Section 10.2.2, "Using Shortcut Keys") to
    select text. For example, press SHIFT+END to select everything from the
    cursor to the end of a line. To remove highlighting, press any DIRECTION
    key.

    ──────────────────────────────────────────────────────────────────────────
    IMPORTANT
    If you begin typing while the text is still selected, what you type
    replaces the selected text.
    ──────────────────────────────────────────────────────────────────────────


12.3  Indenting text

    Indent text to improve the readability and structured appearance of your
    program. Appropriate use of indenting can aid debugging. Use the SPACEBAR
    or TAB key to indent a single line of text. To indent a block of text,
    select the lines you wish to indent, then press TAB.

    Indenting is an integral part of well-structured programs──programs that
    are highly readable, logical and self-explanatory. QuickBASIC offers
    several indentation controls, listed in Table 12.1

    Table 12.1  QuickBASIC Indentation Controls
    Keystrokes               Description
    ──────────────────────────────────────────────────────────────────────────
    (Automatic)              Indents each new line automatically, maintaining
                            the current indentation level.

    HOME                     Cancels automatic indentation on a blank line and
                            moves cursor to the left margin.

    BACKSPACE                Moves indentation back one level.

    CTRL+Q+S                 Moves cursor to the left margin of a line
                            containing indented text.

    SHIFT+TAB                Removes leading spaces for one indentation level.
                            If a block of text is selected, the whole block
                            is moved to the left.
    ──────────────────────────────────────────────────────────────────────────

    The default tab setting is eight spaces. You can change the tab setting as
    follows:

    1. Choose the Display command from the Options menu.

    2. Select the Tab Stops display option.

    3. Enter the new tab-stop setting.

    4. Press ENTER.

    QuickBASIC uses individual spaces (rather than the literal tab character,
    ASCII 9) to represent indentation levels. The Tab Stops option in the
    Option menu's Display dialog box sets the number of spaces per indentation
    level.

    Some text editors use literal tab characters to represent multiple spaces
    when storing text files. Refer to Appendix B, "Differences from Previous
    Versions of BASIC," in Programming in BASIC if you work with files
    originally created with such an editor or if you suspect that your text
    editor uses literal tab characters.

    See Also

    Section 20.1, "Display Command"


12.4  Using Placemarkers in Text

    If you are working on different parts of a large program, you can tell
    QuickBASIC to remember where in the program you are working (set a
    "place-marker"). This makes it possible to jump between different markers
    as needed. You can set up to four placemarkers, numbered 0-3, anywhere in
    your program.

    Follow these steps to use placemarkers:

    ■ Put the cursor on the line you want to mark. Press CTRL+K and then n to
    set placemarker number n.

    ■ Press CTRL+Q and then n to move to placemarker number n.


12.5  The Smart Editor

    QuickBASIC Version 4.5 combines a text editor, a compiler, and a debugger
    into a single "smart editor." The smart editor includes special features
    that make it easier to enter and edit BASIC programs. When the smart
    editor is on, QuickBASIC performs the following actions each time you
    enter a line:

    ■ Checks the line for syntax errors.

    ■ Formats the line as needed.

    ■ Translates the line to executable form, if the syntax is correct. This
    means that each line you enter is ready to run immediately.

12.5.1  When Is the Smart Editor On?

    In most cases, you use the QuickBASIC editor to enter and edit program
    text. If you start QuickBASIC and begin typing, QuickBASIC assumes that
    you want to write BASIC statements and turns on the smart editor. The
    smart editor is also on when you do either of the following:

    ■ Choose New Program or Open Program from the File menu.

    ■ Choose Create File or Load File from the File menu, then select the
    Module or Include option in the dialog box.

    You may occasionally need to edit a text file consisting of something
    other than BASIC statements, such as a QuickBASIC .MAK file or document
    file. For this purpose, you can turn off the smart-editor features and use
    the environment as an ordinary word processor. Do this by choosing Create
    File or Load File from the File menu, then selecting the Document option
    in the dialog box.

12.5.2  Automatic Syntax Checking

    When the smart editor is on, it checks the syntax of each line when it is
    entered. A syntax error indicates that the line contains a statement that
    is not meaningful to QuickBASIC. For instance, this line causes a syntax
    error because the keyword GOTO is not a valid argument for the PRINT
    statement:

    PRINT GOTO

    When an error occurs, QuickBASIC displays an error message. Press ESC or
    SPACEBAR to clear the message from the screen and position the cursor
    where the error occurred. You must correct syntax errors before your
    program will run.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    When you clear a syntax-error message, the cursor is placed on the
    statement that caused the error. Press F1 for on-line help with the
    syntax of the statement.
    ──────────────────────────────────────────────────────────────────────────

    Certain typing mistakes are not recognized as syntax errors when entered.
    For example, no error message appears if you enter the following line
    instead of the PRINT keyword:

    pront

    Although this does not look like a valid BASIC statement, QuickBASIC does
    not flag the error until you try to run the program. Until then,
    QuickBASIC interprets the statement as a call to a SUB procedure named
    pront.

    Syntax checking is always on unless you choose Create File or Load File
    commands and choose the Document option. You can toggle syntax checking
    off and on with the Syntax Checking command from the Options menu. A
    bullet (■) appears next to the command when syntax checking is toggled on.

12.5.3  Error Messages

    QuickBASIC translates statements to executable code as they are entered,
    if there are no syntax errors. If there are syntax errors, QuickBASIC
    displays a dialog box containing the appropriate error message. If
    QuickBASIC displays an error message that puzzles you, you can get further
    information. For more information on the error message, choose the Help
    command button in the dialog box. To get more information on the use of
    the statement that caused the error, choose OK in the dialog box and do
    either of the following steps:

    ■ Choose the Topic command on the Help menu.

    ■ Press F1

    Often you will see the error message Syntax error, but some error messages
    are more specific. For example, suppose you enter the following line,
    which is missing a file name:

    OPEN, I, 1,

    QuickBASIC generates the syntax-error message Expected: expression as
    shown in Figure 12.1:


    Incomplete statement
    │
    │ File  Edit  View  Search  Run  Debug  Options                     Help
    ┌┼─────────────────────────────── Untitled ───────────────────────────┤↑├──
    │OPEN,I, 1,
    │
    │
    │
    │
    │                       ┌────────────────────────┐
    │                       │                        │
    │               ┌────── │  Expected: expression  │ ───────┐
    │               │       │                        │        │
    │               │       ├────────────────────────┤        │
    │               │       │   < OK >    < Help >   │        │
    │               │       └────────────────────────┘        │
    │               │                                         │
    │               │                                         │
    │←▒▒▒▒▒▒▒▒▒▒▒▒▒▒│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒→
    ├───────────────┼─────────────── Immediate ───────────────┼───── ──────────
    │               │                                         │
    │               │                                         │
    <Shift+F1=Help>│<F6=Window> <F2=Subs> <F5=Run> <F8=Step> │    C  00001:005
                    │                                         │
                Type of syntax error                  Provides help on the erro

    Figure 12.1  Syntax Error Message

    In the case above, do the following to get on-line help on the OPEN
    statement:

    1. Choose OK in the dialog box.

    2. Place the cursor in the OPEN keyword.

    3. Press F1.

    The initial on-line help screen is displayed, as shown in Figure 12.2.


    Different usages of OPEN
    │
    │ File  Edit  View  Search  Run  Debug  Calls  Options              Help
    ┌┼───────────── HELP: OPEN (File I/O) Statement QuickSCREEN ──────────┤↑├──
    ││ ◄QuickSCREEN►     ◄Details►     ◄Example►     ◄Contents►     ◄Index►
    │├────────────────────────────────────────────────────────────────────────
    │OPEN - a file I/O statement that enables I/O to a file or device
    ││
    │Syntax
    ││ OPEN file [FOR mode1] [ACCESS access] [lock] AS [#]filenum [LEN=reclen]
    ││┌─
    │││■ file is a string expression that specifies an optional device name,
    │└┤  followed by a file name or path name
    │ │■ filenum is an integer expression whose value is between 1 and 255
    │ └─
    │Other Uses of the OPEN Keyword
    │  ◄OPEN COM► - to open a communications channel
    │
    │See Also  GET  PUT  SEEK  INPUT #  PRINT #  FREEFILE
    │
    ├──────────────────────────────── Untitled ───────────────────────────┤↑├──
    │OPEN,I,1,──────┐
    │←▒▒▒▒▒▒▒▒▒▒▒▒▒▒│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒→
    ├───────────────┼─────────────── Immediate ────────────────────────────────
    │               │
    │               │
    <Shift+F1=Help>│<F6=Window> <F2=Subs> <F5=Run> <F8=Step>       C 00001:003
                    │
            Program text

    Figure 12.2  Initial Help Screen on the OPEN Keyword

    In the screen shown in Figure 12.2, choose the usage you are interested
    in by putting the cursor anywhere on the appropriate line and pressing F1.
    Notice that your program text remains visible on the screen when you are
    using on-line help. To exit on-line help, press ESC.

    See Also

    Chapter 8, "Statement and Function Summary," and Appendix I, "Error
    Messages," in Programming in BASIC.

12.5.4  Automatic Formatting

    In addition to checking for syntax errors, the smart editor automatically
    standardizes the format of each line as you enter it. The editor makes the
    following changes:

    ■ Changes all BASIC keywords to uppercase letters.

    ■ Inserts spaces before and after all BASIC operators.

    ■ Keeps capitalization consistent in all references to variables or
    procedures.

    ■ Adds punctuation where appropriate. For instance, the smart editor
    inserts semicolons between consecutive items in a PRINT statement if you
    do not include them yourself. It also supplies a matching final
    quotation mark to the argument of a PRINT statement if you forget it.

    QuickBASIC keeps track of the names of all variables and procedures in
    your program and capitalizes these names consistently. It changes the
    capitalization of all occurrences of a variable or procedure name to the
    reflect the most recently entered version. For example, if you first name
    a variable MyVar (uppercase M and V), and later enter it as myvar (all
    lowercase), QuickBASIC changes all instances of MyVar to myvar.


12.6  Entering Special Characters

    QuickBASIC has procedures for entering the literal representations of
    special characters, including high-order ASCII characters and the literal
    ASCII characters associated with control sequences. (In general, entering
    such literal characters makes your programs more readable but less
    portable. For portability, use the CHR$ function. See Section 9.5,
    "Summary of String Processing Statements and Functions," in Programming in
    BASIC.)

    High-order ASCII characters are those corresponding to decimal 128-255.
    You can enter them directly in your QuickBASIC program by holding down the
    ALT key while you type the appropriate decimal code on the numeric keypad.
    For example, holding down the ALT key while you enter 205 produces the
    double-line character at the cursor.

    Many of the low-order ASCII characters corresponding to decimal 1-27 are
    associated with both literal characters and special actions. For example,
    the ASCII character represented by ALT+25 is associated with both the
    down-arrow character (<143>) and 'Y (command to delete the current line).
    You may want to enter the down arrow in a PRINT statement. One way to do
    this is to specify decimal 25 as the argument to the CHR$ function. See
    Appendix D, "Keyboard Scan Codes and ASCII Character Codes," in
    Programming in BASIC for decimal equivalents of ASCII characters. However,
    you can also enter the literal character itself by using the following
    method:

    1. Hold down the CTRL key while pressing the letter P.

        This produces the 'P character on the QuickBASIC status bar. While this
        character is displayed, you can enter a CTRL-key sequence to produce
        its literal character.

    2. Hold down the CTRL key again, this time pressing the letter
        corresponding to the literal character you want.

        This enters the literal ASCII character (as opposed to the special
        action of the control sequence) at the cursor.

    For example, if you want to enter the down-arrow (↓) character within the
    quotation marks of a PRINT statement, you can enter it as CTRL+P+Y. If you
    tried to enter it as CTRL+Y or as ALT+25 while 'P was not visible on the
    reference bar, your line would be deleted. Note that you cannot use this
    technique for entering the characters corresponding to the following: 'J,
    'L, 'M, 'U. See Appendix D, "Keyboard Scan Codes and ASCII Character
    Codes," in Programming in BASIC for a complete list of the ASCII
    characters.


12.7  Summary of Editing Commands

    QuickBASIC's editor is designed to be flexible; it supports a keyboard
    interface familiar to users of other Microsoft products such as Microsoft
    Word. Many combinations of the CTRL key with other keys are familiar to
    users of WordStar and similar editors. Table 12.2 summarizes all the
    QuickBASIC editing commands.

    Table 12.2  Editing Commands
╓┌─┌────────────────────────────────────┌──────────────────┌─────────────────╖
                                                            WordStar-Style
                                        Keypad Keys        Key Combinations
    ──────────────────────────────────────────────────────────────────────────
    Moving Cursor
    Character left                       LEFT               CTRL+S
    Character right                      RIGHT              CTRL+D
                                                            WordStar-Style
                                        Keypad Keys        Key Combinations
    ──────────────────────────────────────────────────────────────────────────
    Character right                      RIGHT              CTRL+D
    Word left                            CTRL+LEFT          CTRL+A
    Word right                           CTRL+RIGHT         CTRL+F
    Line up                              UP                 CTRL+E
    Line down                            DOWN               CTRL+X
    First indentation level              HOME               ---
    Column 1 of current line             ---                CTRL+Q+S
    Beginning of next line               CTRL+ENTER         CTRL+J
    End of line                          END                CTRL+Q+D
    Top of window                        ---                CTRL+Q+E
    Bottom of file                       ---                CTRL+Q+X
    Beginning of module/procedure        CTRL+HOME          CTRL+Q+R
    End of module/procedure              CTRL+END           CTRL+Q+C
    Set marker                           ---                CTRL+K n☼
    Move to marker                       ---                CTRL+Q n☼

    Inserting
    Insert mode on or off                INS                CTRL+V
                                                            WordStar-Style
                                        Keypad Keys        Key Combinations
    ──────────────────────────────────────────────────────────────────────────
    Insert mode on or off                INS                CTRL+V
    Line below                           END+ENTER          ---
    Line above                           ---                HOME CTRL+N
    Contents of Clipboard                SHIFT+INS          ---
    Tab at cursor or beginning of each   TAB                CTRL+I
    selected line
    Control character at cursorposition  ---                CTRL+P CTRL+key☼

    Deleting
    Current line, saving in Clipboard    ---                CTRL+Y
    To end of line, saving in Clipboard  ---                CTRL+Q+Y
    Character left                       BKSP               CTRL+H
    Character at cursor                  DEL                CTRL+G
    Word                                 ---                CTRL+T
    Selected text, saving in Clipboard   SHIFT+DEL          ---
    Selected text, not saving in         DEL                CTRL+G
    Clipboard
    Leading spaces for one indentation   SHIFT+TAB          ---
                                                            WordStar-Style
                                        Keypad Keys        Key Combinations
    ──────────────────────────────────────────────────────────────────────────
    Leading spaces for one indentation   SHIFT+TAB          ---
    level of selected lines

    Copying
    Save selected text to Clipboard      CTRL+INS           ---

    Scrolling
    Up one line                          CTRL+UP            CTRL+W
    Down one line                        CTRL+DOWN          CTRL+Z
    Page up                              PGUP               CTRL+R
    Page down                            PGDN               CTRL+C
    Left one window                      CTRL+PGUP          ---
    Right one window                     CTRL+PGDN          ---

    Selecting
    Character left                       SHIFT+LEFT         ---
    Character right                      SHIFT+RIGHT        ---
    Current line☼                        SHIFT+DOWN         ---
                                                            WordStar-Style
                                        Keypad Keys        Key Combinations
    ──────────────────────────────────────────────────────────────────────────
    Current line☼                        SHIFT+DOWN         ---
    Line above                           SHIFT+UP           ---
    Word left                            SHIFT+CTRL+LEFT    ---
    Word right                           SHIFT+CTRL+RIGHT   ---
    Screen up                            SHIFT+PGUP         ---
    Screen down                          SHIFT+PGDN         ---
    Screen left                          SHIFT+CTRL+PGUP    ---
    Screen right                         SHIFT+CTRL+PGDN    ---
    To beginning of module/procedure     SHIFT+CTRL+HOME    ---
    To end of module/procedure           SHIFT+CTRL+END     ---
    ──────────────────────────────────────────────────────────────────────────





────────────────────────────────────────────────────────────────────────────
Chapter 13  The Edit Menu

    The Edit menu controls the functions used to build and manipulate your
    program code (text). Use the Edit menu to cut, copy, and paste text, to
    undo your last edit, and to create SUB and FUNCTION procedures.

    The Edit menu has the following commands:

    ■ Undo. Reverses your last command or action, restoring the current line
    to its previous state (Full Menus only).

    ■ Cut. Deletes selected text and places it on the Clipboard.

    ■ Copy. Places a copy of selected text on the Clipboard.

    ■ Paste. Inserts the contents of the Clipboard at the cursor.

    ■ Clear. Deletes selected text permanently (Full Menus only).

    ■ New SUB. Creates a new SUB procedure in its own window (Full Menus
    only).

    ■ New FUNCTION. Creates a new FUNCTION procedure in its own window (Full
    Menus only).


13.1  Understanding the Clipboard

    The editor in QuickBASIC uses a Clipboard, which is the part of your
    computer's memory used to temporarily store blocks of text you have cut or
    copied. If you have used a word processor to cut, copy, and paste text,
    you are familiar with the Clipboard concept.

    When you use the Cut or Copy command to move, remove, or duplicate a
    section of text, that text is stored in the Clipboard. You can then use
    the Paste command to insert the Clipboard's contents as many times as you
    like; Paste does not alter the contents of the Clipboard. But any time you
    use the Cut or Copy command, the contents of the Clipboard are replaced by
    new contents.


13.2  Undo Command (Full Menus Only)

    The Undo command on the Edit menu reverses any changes made to the current
    line. Once the cursor moves off the line, however, Undo cannot restore the
    line to its previous state.

    Undo works on the current line immediately after you make changes to it.
    Choosing Undo on an unaltered line has no effect.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    Undo cannot restore text deleted with CTRL+Y, which removes an entire
    line. However, a copy of the line is placed on the Clipboard, so you can
    restore it with the Paste command.
    ──────────────────────────────────────────────────────────────────────────

    Shortcut Key

    ALT+BKSP


13.3  Cut Command

    The Cut command removes selected text from the screen and places it on the
    Clipboard. When no text is selected, the Cut command is not available.

    Use Cut and Paste together to relocate lines or blocks of text as follows:

    1. Select the text you wish to move (it may be as many lines as you wish).

    2. Choose the Cut command from the Edit menu.

    3. Move the cursor to the point where you wish to insert the text.

    4. Choose the Paste command from the Edit menu.

    You can use this sequence to move entire blocks of a program from one
    section to another, reducing the time it takes you to write new programs.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    The Clipboard contains only the most recently cut or copied text.
    ──────────────────────────────────────────────────────────────────────────

    Shortcut Key

    SHIFT+DEL

    See Also

    Section 13.4, "Copy Command"; Section 13.5, "Paste Command"; Section
    13.6, "Clear Command"


13.4  Copy Command

    The Copy command places a copy of selected text on the Clipboard, leaving
    the original text unchanged. Copying replaces any previous contents on the
    Clipboard.

    Use the Copy and Paste commands together to duplicate sections or lines of
    program code. For example, you can use the following sequence to speed the
    creation of similar SUB procedures:

    1. Select the text you wish to duplicate (it may be as many lines as you
        wish).

    2. Choose the Copy command from the Edit menu.

    3. Move the cursor to the point at which you wish to insert the text.

    4. Choose the Paste command from the Edit menu.

    5. Customize the copied text for a new line, procedure or section of
        program text.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    The Clipboard contains only the most recently cut or copied text.
    ──────────────────────────────────────────────────────────────────────────

    Shortcut Key

    CTRL+INS

    See Also

    Section 13.3, "Cut Command"; Section 13.5, "Paste Command"


13.5  Paste Command

    The Paste command inserts a copy of the Clipboard's contents to the right
    of the cursor.

    Paste works only when the Clipboard contains text. If you have text
    selected, the Paste command replaces the selected text with the contents
    of the Clipboard. If no text is selected, Paste inserts the contents of
    the Clipboard to the right of the cursor, or above the cursor if the
    Clipboard contents exceed one line.

    Shortcut Key

    SHIFT+INS

    See Also

    Section 13.3, "Cut Command"; Section 13.4, "Copy Command"


13.6  Clear Command (Full Menus Only)

    The Clear command completely removes selected text from your file.

    Cleared text is not transferred onto the Clipboard and cannot be replaced
    by using the Paste command. Pressing the DEL key without text selected
    removes the character to the right of the cursor.

    ──────────────────────────────────────────────────────────────────────────
    WARNING
    Use the Clear command with care; you can restore cleared text only by
    using the Undo command immediately.
    ──────────────────────────────────────────────────────────────────────────

    Shortcut Key

    DEL

    See Also

    Section 13.2, "Undo Command"; Section 13.3, "Cut Command"


13.7  New SUB Command (Full Menus Only)

    The Edit menu's New SUB command creates and names a new SUB procedure as
    part of the module in the active window. The next time you save your
    program, all new procedures are added to the program's module.

    SUB procedures can be defined in the main module or other modules, and can
    be moved from one module to another by using the SUBs command from the
    View menu.

    Use SUB procedures for repetitive operations, including ones which
    manipulate information (arguments) you give the SUB. For example, you
    might define a SUB procedure CenterText, which centers text on the screen.
    If you enter the following line in your program:

    CALL CenterText("Hourly wage")

    the phrase Hourly wage appears in the center of your screen (the actual
    SUB code is omitted here).

    ──────────────────────────────────────────────────────────────────────────
    IMPORTANT
    A procedure name can appear only once in a program. An error occurs if
    the same name appears more than once.
    ──────────────────────────────────────────────────────────────────────────

    See Also

    Chapter 5, "The QCARDS Program," in this manual; Chapter 2, "SUB and
    FUNCTION Procedures," in Programming in BASIC.

13.7.1  Creating a New SUB Procedure

    Create a new SUB procedure by following these steps:

    1. Choose New SUB from the Edit menu. A dialog box appears.

    2. Type the name for the new SUB procedure in the text box, as shown in
        Figure 13.1.


        New SUB name
                │
        ┌─────────┼── New SUB ─────────────┐
        │       ┌─┼──────────────────────┐ │
        │ Name: │Initvar                 │ │
        │       └────────────────────────┘ │
        │                                  │
        ├──────────────────────────────────┤
        │  < OK >   < Cancel >   < Help >  │
        └──────────────────────────────────┘

        Figure 13.1  New SUB Dialog Box

    3. Press ENTER.

    The New SUB command opens a new window with the SUB and END SUB statements
    already in place, ready for you to enter the procedure. When you complete
    the procedure, use the SUBs command from the View menu to return to the
    module-level code, another procedure, or another module.

    Note that if you type SUB subname, QuickBASIC starts the procedure
    immediately, bypassing the need to open the menu or dialog box.

    When you start a new "procedure" (the collective term for SUB and FUNCTION
    procedures) either by typing SUB or FUNCTION followed by the procedure
    name or by using the New SUB or New FUNCTION command from the Edit Menu,
    QuickBASIC displays the procedure in the View window.

13.7.2  Default Data Types for Procedures

    Data type, determined by a DEFtype statement, refers to the type of data a
    particular range of names will have. The DEFtype statement is a generic
    term that collectively refers to the data definition statements DEFINT
    (define integer), DEFSNG (define single precision), DEFDBL (define double
    precision), DEFLNG (define long integer), and DEFSTR (define string). A
    range of letters follows the DEFtype statement, indicating the range of
    names affected by the DEFtype statement. For example, DEFDBL M-Q defines
    all variables with names beginning with letters in the range M-Q to be
    double precision.

    In a new procedure, QuickBASIC automatically inserts a DEFtype statement
    at the top of the View window, ahead of the line containing the SUB
    keyword:

    DEFtype letter1-letter2
    SUB SubName
    END SUB

    or

    DEFtype letter1-letter2
    FUNCTION FunctionName
    END FUNCTION

    In the preceding example, letter1 and letter2 indicate the letter range
    the DEFtype statement affects. Note that you may omit letter2 if you want
    to define only a single letter as a specific data type.

    Which DEFtype is automatically added to the procedure depends on whether
    there are DEFtype statements at the module level. If there are no DEFtype
    statements in the main module, QuickBASIC creates the procedure without a
    DEFtype statement, and the new procedure defaults all variables to single
    precision. If there are one or more DEFtype statements at the module
    level, QuickBASIC includes all DEFtype statements other than DEFSNG in the
    new procedure. Any variable that falls outside of the letter range
    indicated by any of the other DEFtype statements defaults to single
    precision.

13.7.3  Changing a Procedure's Default Type

    If QuickBASIC inserts a DEFtype statement you do not want, you can remove
    it (in which case the default for that procedure becomes single
    precision), or you can change it by overtyping.

    When you have no DEFtype statements in your main module, QuickBASIC omits
    the DEFtype statement in new procedures (and procedure variables default
    to single precision). You can add new DEFtype statements to the procedure
    by placing them in front of the SUB or FUNCTION statement (in insert mode)
    and pressing ENTER.

13.7.4  Saving and Naming Procedures

    When you save a program, QuickBASIC creates a declaration for each
    procedure at the beginning of the module containing the procedure. A
    declaration consists of the DECLARE keyword, followed by the SUB or
    FUNCTION keyword, then the name of the procedure, and a list of its formal
    parameters.

    Procedures are not saved as independent files the way modules are.
    Therefore procedure names are governed by the naming conventions of
    QuickBASIC rather than DOS. They are saved within the module in which they
    are created, or to which they are moved.

    The rules for naming procedures are the same as those for naming
    variables. Procedure names can be any valid BASIC name up to 40 characters
    long. They must be unique. If you give a procedure the same name as a
    variable, the error message Duplicate definition appears.

    See Also

    Section 13.8, "New FUNCTION Command"; Section 14.1, "SUBs Command"


13.8  New FUNCTION Command (Full Menus Only)

    The New FUNCTION command defines (creates and names) a new FUNCTION
    procedure as a part of the module or program in the active window. When
    you save the module, any new procedures become part of that module.

    Create your own FUNCTION procedures whenever you repeatedly calculate
    similar quantities. For example, you might define a FUNCTION procedure
    Volume (X) that calculates the volume of a sphere of radius X. Your
    program then finds the volume of a sphere of any radius very easily:

    SphereVol = Volume (rad)   ' find volume of a sphere of
                                ' radius rad

    QuickBASIC sets the value of X equal to rad when it calculates the volume
    of the sphere. If you need to calculate the volume of a sphere several
    times, such a FUNCTION procedure could save you space, time, and debugging
    efforts.

    ──────────────────────────────────────────────────────────────────────────
    IMPORTANT
    A procedure name can appear only once in a program. An error occurs if
    the same name appears more than once.
    ──────────────────────────────────────────────────────────────────────────

    You can define a new FUNCTION procedure by following these steps:

    1. Choose New FUNCTION from the Edit menu. A dialog box appears.

    2. Type the name for the new FUNCTION procedure in the text box. See
        Figure 13.2.


        New FUNCTION name
                │
        ┌─────────┼ New FUNCTION ──────────┐
        │       ┌─┼──────────────────────┐ │
        │ Name: │Cube                    │ │
        │       └────────────────────────┘ │
        │                                  │
        ├──────────────────────────────────┤
        │  < OK >   < Cancel >   < Help >  │
        └──────────────────────────────────┘

        Figure 13.2  New FUNCTION Dialog Box

    3. Press ENTER.

    QuickBASIC opens a new window with the FUNCTION and END FUNCTION
    statements already in place. When you complete the FUNCTION procedure, use
    the SUBs command from the View menu to return to the previous module.

    Keyboard Shortcut

    Type FUNCTION followed by the name of the new procedure to perform steps
    1-3 in the previous list automatically.

    See Also

    Chapter 5, "The QCARDS Program"; Section 13.7.2, "Default Data Types for
    Procedures"; Section 13.7.3, "Changing a Procedure's Default Type";
    Section 13.7.4, "Saving and Naming Procedures"; Section 14.1, "SUBs
    Command." Also see Chapter 2, "SUB and FUNCTIONS Procedures," in
    Programming in BASIC."



────────────────────────────────────────────────────────────────────────────
Chapter 14  The View Menu

    The View menu gives the available options for viewing program components.
    You also use the View menu to move SUB and FUNCTION procedures, modules,
    include files, and document files in and out of the View window for
    viewing and editing.

    The View menu includes the following commands:

    ■ SUBs. Moves procedures, modules, include files, and document files into
    and out of windows and moves procedures among modules.

    ■ Next SUB. Places the next procedure (alphabetical by name) in the active
    window (Full Menus only).

    ■ Split. Divides the View window horizontally (Full Menus only).

    ■ Next Statement. Moves the cursor to the next statement to be executed
    (Full Menus only).

    ■ Output Screen. Toggles the screen display between the program output and
    the QuickBASIC editor.

    ■ Included File. Loads referenced include files for viewing and editing
    (Full Menus only).

    ■ Included Lines. Displays the contents of referenced include files for
    viewing only.


14.1  SUBs Command

    The SUBs command lets you select among the currently loaded files, their
    procedures (SUB and FUNCTION), include files, and document files. When you
    choose a file or procedure, QuickBASIC displays it in the View window.

    The SUBs dialog box controls file and procedure handling.

    To use the SUBs command, follow these steps:

    1. Choose the SUBs command from the View menu. The SUBs dialog box
        appears, as shown in Figure 14.1.


        Procedures are indented       Modules are listed       Retains active wi
        beneath their modules         in uppercase letters     and places select
        │                              │                      item in new windo
        │                              │                         │
        ┌┼──────────────────────────────┼── SUBs ─────────────────┼─────────────
        ││                              │                         │
        ││Choose program item to edit   │                         │
        ││┌─────────────────────────────┼─────────────────────────┼─────────────
        │││ DEMO1.BAS             ──────┤                         │
        │││ DEMO2.BAS ──────────────────┤                         │
        │││  ┌Bounce                    │                         │
        │└┼──┤Fall                      │                         │
        │ │  │Klaxon                    │                         │
        │ │  └Siren                     │                         │
        │ │ TEST.BAS ───────────────────┘                         │
        │ │                                                       │
        │ │                                                       │
        │ └←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│▒▒▒▒▒▒▒▒▒▒▒▒▒
        │┌DEMO1.BAS is the Main Module                            │
        ││                                                        │
        ││  < Edit in Active >           < Edit in Split > ───────┘   < Cancel >
        ├┼──────────────────────────────────────────────────────────────────────
        ││    < Delete >──┐                   < Move >              ┌──< Help >
        └┼────────────────┼──────────────────────┼──────────────────┼───────────
        │                │                      │                  │
        Describes       Unloads a module     Places procedure     Moves procedur
        item in         from memory or       in active window     from one modul
        highlighted
        box

        Figure 14.1  New SUBs Dialog Box

    2. Highlight the module, procedure, or include file you want to work with
        by pressing the DIRECTION keys. Then you can do one of the following:

    ■ Choose the Edit in Active button to place your selection in the active
        window.

    ■ Choose the Edit in Split button to split the window horizontally; the
        lower (active) window displays the new selection and the upper window
        contains the contents of the previous window. Use F6 to cycle down
        through the windows or SHIFT+F6 to cycle up. To close the extra window
        choose the Split command from the View menu again.

    ■ Choose the Move button to move the selected procedure to a different
        module. A dialog box appears with a list of destination modules. See
        Figure 14.2. (Moving a procedure in a single-module program has no
        effect.)


        Current destination module
        │
        ┌┼─────────────────────────────────┐
        ││ Choose destination module:      │
        ││ ┌────────────────────────────┐  │
        ││ │ DEMO1.BAS                  ↑  │
        │└─┼ TORUS.BAS                  ▒  │
        │  │                            ▒  │
        │  │                            ▒  │
        │  │                            ▒  │
        │  │                            ↓  │
        │  └────────────────────────────┘  │
        │                                  │
        ├──────────────────────────────────┤
        │  < OK >   < Cancel >   < Help >  │
        └──────────────────────────────────┘

        Figure 14.2  Move Dialog Box

    ■ Choose the Delete button to remove the selected procedure completely
        from the module. (Note that deleting a module removes that module and
        all of its associated procedures from memory but keeps the module on
        disk.)

    ■ Choose Cancel to return to the previous active window.

    ■ Choose Help for more information on using the SUBs dialog box.

    You are now ready to work with the module, procedure, or include file you
    selected.

    Shortcut Key

    F2

    See Also

    Section 11.9, "Unload File Command"; Section 14.2, "Next SUB Command";
    Section 16.7, "Set Main Module Command"


14.2  Next SUB Command (Full Menus Only)

    The Next SUB command displays the contents of the next procedure
    (alphabetically by name) in the active window. If the current module
    contains no procedures, choosing Next SUB has no effect. You may cycle
    either forward to the next procedure of backward to the previous one.

    Next SUB is of particular value when working with modules that contain
    only a few procedures. For programs with many procedures, the SUBs command
    is generally faster for moving between program parts.

    Shortcut Keys

    SHIFT+F2 (forward) and CTRL+F2 (backward)

    See Also

    Section 14.1, "SUBs Command"


14.3  Split Command (Full Menus Only)

    The Split command divides the View window horizontally, allowing you to
    work with two parts of a program simultaneously.

    To use the Split command follow these steps:

    1. Choose Split from the View menu.

    2. Press F6 to cycle down through the windows, making the different
        windows active, or SHIFT+F6 to cycle up through the windows.

    3. Choose Split again to fill the screen with the active window and close
        the inactive window.

    You can increase or decrease the size of a window or expand it to fill the
    entire screen. To change the size of a window, make it the active window
    and use the following key combinations (use the PLUS and MINUS keys on the
    numeric keypad):

    Key Combination          Result
    ──────────────────────────────────────────────────────────────────────────
    ALT+PLUS (+)             Expands the active window one line.

    ALT+MINUS (-)            Shrinks the active window one line.

    CTRL+F10                 Expands the active window to fill the screen. If
                            it already fills the screen, the window is
                            returned to its former size.
    ──────────────────────────────────────────────────────────────────────────

    See Also

    Chapter 10, "Getting Around in QuickBASIC"; Section 14.1, "SUBs Command"


14.4  Next Statement Command (Full Menus Only)

    The Next Statement command places the cursor at the next statement to be
    executed but does not execute the statement.

    The Next Statement command is typically used after pausing a program for
    debugging purposes; it allows you to see which statement the Continue
    command will execute first when you choose it. Next Statement is useful
    after moving around in a suspended program to return to the original point
    of suspension.

    See Also

    Section 15.1, "Find Command"; Section 16.3, "Continue Command"; Chapter
    18, "The Debug Menu"


14.5  Output Screen Command

    The Output Screen command causes QuickBASIC to switch between the
    environment and output screens created by your program.

    This command is functional at any time during editing, but is most useful
    after the program sends data to the screen. For example, when you run a
    program that has screen output, QuickBASIC prints the message

    Press any key to continue

    on the bottom of the output screen when the program ends. After returning
    to the QuickBASIC editor, you can switch back and forth between the editor
    and output screens by choosing the Output Screen command. This allows you
    to refer to previous output while editing or debugging your program.

    Shortcut Key

    F4


14.6  Included File Command (Full Menus Only)

    The Included File command loads a file referenced with the $INCLUDE
    metacommand for viewing and editing.

    When the cursor is on a $INCLUDE metacommand line, choosing the Included
    File command loads the text of the include file into the active window for
    editing. QuickBASIC keeps the text of include files separate from the rest
    of the program text. This is similar to the way in which the text of SUB
    or FUNCTION procedures is separated from other program text. However,
    QuickBASIC considers an include file separate from the rest of the
    program.

    You may wish to edit an include file without moving the cursor from the
    line in your program containing the $INCLUDE metacommand. To do so, follow
    these steps:

    1. Split the screen with the Split command from the View menu.

    2. Choose the Load File command from the File menu to load the include
        file. Be sure to select the Include option.

    3. Edit the include file.

    4. Choose Save from the File menu to save any changes made to the include
        file.

    5. Press F6 to move back to the program in the other View window.

    6. Choose the View menu's Split command again to close the extra window.

    Save the include file to incorporate your changes. QuickBASIC prompts you
    if you forget.

14.6.1  Nesting Include Files

    You can have any number of $INCLUDE metacommands in a program. However,
    the "nesting" of include files is limited.

    Nesting occurs when a $INCLUDE metacommand appears within another include
    file. Include files can be nested up to five levels. If you have a
    circular reference in an include file (that is, a $INCLUDE metacommand
    that references itself or a file in which it is referenced), you get the
    error message Too many files when you try to run your program.

14.6.2  Finding Include Files

    When QuickBASIC processes a $INCLUDE metacommand, it searches first for
    the include file in any directory specified in the metacommand, then the
    working directory, and finally any include-file directory indicated by the
    Set Paths command. If you refer to a directory in the $INCLUDE metacommand
    itself, you need to include a full or relative path name. For example, the
    following directs QuickBASIC to look for the include file named
    declares.bi in the directory c:include:

    ' $INCLUDE: 'C:includedeclares.bi'

    This could also be specified with a relative path, as in the following
    line:

    ' $INCLUDE: '..includedeclares.bi'

    Although any extension, including .BAS, is legal for files incorporated
    into your program with the $INCLUDE metacommand, it is recommended that
    include files use some unique extension (such as .BI) to avoid confusion
    with program modules.

    See Also

    Section 14.7, "Included Lines Command"; Section 20.2, "Set Paths
    Command"


14.7  Included Lines Command

    The Included Lines command lets you view, but not edit, the contents of
    referenced include files. This command is a toggle; a bullet (■) appears
    next to the option when it is on. Choosing it again turns it off.

    The Included Lines command lets you look at the include file's contents,
    which appear in high-intensity video beneath the appropriate $INCLUDE
    metacommand. Although you can scroll around in the include file after
    choosing Included Lines, you cannot edit the include file as long as this
    option is on. If you try to edit the include file while Included Lines is
    on, a dialog box appears and asks if you want to edit the include file. If
    you do, QuickBASIC loads the file into memory and places its text in the
    active View window.

    If you try to edit the program file while the Included Lines command is
    on, a dialog box appears asking if you want to turn the Included Lines
    command off. If you press ENTER, the include file disappears, and you can
    then edit the source file in the usual way.

    For editing files referenced with the $INCLUDE metacommand, use the
    Included File command or the Load File command on the File menu (remember
    to choose the Include option).

    See Also

    Section 14.6, "Included File Command"



────────────────────────────────────────────────────────────────────────────
Chapter 15  The Search Menu

    The Search menu lets you find specific text──"target" text──anywhere in a
    program, and replaces it with new text. The Search menu has several uses,
    particularly in long or complex programs. For instance, to move quickly to
    a distant part of your program, you can search for a line label or other
    identifying text you know to be in that section.

    The Search menu has the following commands:

    ■ Find. Searches for and locates the nearest occurrence of designated
    text.

    ■ Selected Text. Searches for text that matches the currently highlighted
    text (Full Menus only).

    ■ Repeat Last Find. Locates the next occurrence of the text specified in
    the previous search (Full Menus only).

    ■ Change. Searches for and then replaces target text with new text.

    ■ Label. Searches for a specified line label (Full Menus only).


15.1  Defining Target Text

    Search procedures require you to specify your target text──the text you
    want to search for. QuickBASIC uses several methods to specify target
    text. The word containing the cursor or closest to the left of the cursor
    becomes the default target text. If the cursor is on a blank line, the
    target text from the previous search becomes the default. You can alter
    default target text by typing new text in the Find or Change dialog boxes.

    All searches begin at the cursor and move forward. If QuickBASIC reaches
    the end of the active window without finding a match, it returns to the
    top of the document and continues the search until it either locates the
    text or reaches the original cursor location. You can also select options
    that extend the search to the entire current module or all modules loaded.


15.2  Find Command

    The Find command searches for and places the cursor on specified text. The
    text may consist of a single character, a word, or any combination of
    words and characters.

    Enter the text you want to find in the text box of the Find dialog box,
    shown in Figure 15.1.


            Text to find
                    │
    ┌──────────────┼────────────── Find ────────────────────────────┐
    │            ┌─┼────────────────────────────────────────────┐   │
    │ Find What: │sum                                           │   │
    │            └──────────────────────────────────────────────┘   │
    │                                                               │
    │ ┌                               ┌─────────────────────────┐   │
    │┌┤[ ] Match Upper/Lowercase      │ ( ) 1. Active Window ─┐ │   │
    │││[ ] Whole Word                 │ (∙) 2. Current Module ├─┼─┐ │
    ││└                               │ ( ) 3. All Modules   ─┘ │ │ │
    ││                                └─────────────────────────┘ │ │
    ├┼────────────────────────────────────────────────────────────┼─┤
    ││        < OK >         < Cancel >         < Help >          │ │
    └┼────────────────────────────────────────────────────────────┼─┘
    │                                                            │
    Search restrictions                                 Search options

    Figure 15.1  Find Dialog Box

    The dialog box also controls the extent of the search (whether the search
    includes the active window, the current module, or all files currently
    loaded in QuickBASIC) and any restrictions on the search.

    To perform a search, do the following:

    1. Choose Find from the Search menu. A dialog box appears.

    2. Enter the text you want to find in the Find What text box. (Any default
        target text appears highlighted.)

    3. Select any search option buttons by pressing the TAB and DIRECTION
        keys. (See Table 15.1 for a list of available options.)

    4. Set any restrictions by pressing the TAB key to select the option and
        SPACEBAR to turn the option on or off. (See Table 15.2 for a list of
        restrictions.)

    5. Press ENTER to begin the search.

    If it cannot locate the target text, QuickBASIC displays the message Match
    not found and leaves the cursor where it was when you started the search.

    Press ENTER or ESC to remove the message and continue.

    The options available with search commands are listed in the following
    table:

    Table 15.1  Search Options
    Option                   Description
    ──────────────────────────────────────────────────────────────────────────
    Active Window            Searches only in the current, active window

    Current Module           Searches only in the current module (including
                            procedures)

    All Modules              Searches all parts of all loaded files
    ──────────────────────────────────────────────────────────────────────────

    The following table lists the restrictions you can set with the Find
    command:

    Table 15.2  Search Restrictions
    Restriction              Description
    ──────────────────────────────────────────────────────────────────────────
    Match Upper/Lowercase    Searches for text that matches exactly. For
                            example, if CHR is the specified text, the Match
                            Upper/Lowercase option finds CHR but not Chr.

    Whole Word               Locates the target as a separate word. Whole
                            words include words surrounded by spaces,
                            punctuation marks, or other characters not
                            considered parts of words. Word parts include
                            A$MIZ, a$MIz, 0$MI9, and !, #, $, %, and &
                            (commonly used in declarations). For example, a
                            whole word search for CHR would locate CHR: but
                            not CHR$ or CHARACTER.
    ──────────────────────────────────────────────────────────────────────────

    See Also

    Section 15.5, "Change Command"


15.3  Selected Text Command (Full Menus Only)

    The Selected Text command on the Search menu searches for text that
    matches text selected in the active window.

    Follow these steps to use the Selected Text command:

    1. Select the text you want to find. The text must fit on one line (256
        characters).

    2. Choose the Selected Text command from the Search Menu.

    QuickBASIC highlights the next occurrence of the selected text and puts
    the cursor at the first character of the string. If there are no other
    occurrences, the screen remains the same.

    Shortcut Key

    CTRL +<FS>

    See Also

    Section 15.2, "Find Command"


15.4  Repeat Last Find Command (Full Menus Only)

    The Repeat Last Find command searches for the next occurrence of the text
    specified in the last search. Text specified in the previous Find or
    Change command becomes the target text of a Repeat Last Find search.

    If you have not used the Find or Change commands and you choose the Repeat
    Last Find command, QuickBASIC uses the word containing the cursor, or the
    word nearest to the left of the cursor, as the default target text.

    Shortcut Key

    F3

    See Also

    Section 15.2, "Find Command"


15.5  Change Command

    The Change command searches for one text string and replaces it with
    another. Either string may consist of a single character, a single word,
    or any combination of words and characters.

    Use the Change dialog box, shown in Figure 15.2, to enter the target
    text, the replacement text, and search attributes and restrictions.


        Text to change   Replacement text
                        │   │
    ┌──────────────────┼───┼───── Change ───────────────────────────┐
    │            ┌─────┼───┼────────────────────────────────────┐   │
    │ Find What: │sum ─┘   │                                    │   │
    │            └─────────┼────────────────────────────────────┘   │
    │            ┌─────────┼────────────────────────────────────┐   │
    │ Change To: │total ───┘                                    │   │
    │            └──────────────────────────────────────────────┘   │
    │                                                               │
    │ ┌                               ┌─────────────────────────┐   │
    │┌┤[ ] Match Upper/Lowercase      │ ( ) 1. Active Window ─┐ │   │
    │││[ ] Whole Word                 │ (∙) 2. Current Module ├─┼─┐ │
    ││└                               │ ( ) 3. All Modules   ─┘ │ │ │
    ││                                └─────────────────────────┘ │ │
    ├┼────────────────────────────────────────────────────────────┼─┤
    ││  < Find and Verify >  < Change All >  < Cancel >  < Help > │ │
    └┼────────────────────────────────────────────────────────────┼─┘
    │                                                            │
    Search restrictions                                 Search options

    Figure 15.2  Change Dialog Box

    To change text, do the following:

    1. Choose Change from the Search menu.

    2. Type the text you want to replace in the Find What text box.

    3. Type the replacement text in the Change To text box.

    4. Select any search options you desire (see Table 15.1).

    5. Set any search restrictions (see Table 15.2).

    6. Choose Find and Verify or Change All to begin replacing text, or Cancel
        to cancel the command.

        ■ Find and Verify finds the target text, then displays four more
        buttons: Change, Skip, Cancel, and Help. Change executes the change,
        Skip searches for the next occurrence (without making any changes),
        and Cancel stops the search and returns to the point at which the
        search began. Help provides more information about the Find and
        Verify dialog box. See Figure 15.3.


                                        Stops search and
        Executes the change          returns to active window
                │                      │
        ┌────────┼──────────────────────┼───────────────────┐
        │        │                      │                   │
        ├────────┼──────────────────────┼───────────────────┤
        │   < Change >   < Skip >   < Cancel >   < Help >   │
        └────────────────────┼───────────────────────┼──────┘
                            │                       │
                    Searches for       Provides help on change
                    next occurrence

        Figure 15.3  Change, Skip, Cancel Dialog Box

        ■ Change All finds and replaces all occurrences of the target text
        without asking for confirmation.

        ■ Cancel returns control to the active window.

        ■ If it cannot locate the target text, QuickBASIC displays the message

        Match not found

        Press ENTER to remove the message and continue.

    ──────────────────────────────────────────────────────────────────────────
    IMPORTANT
    The Undo command on the Edit menu cannot undo a change made with the
    Change command. Use particular caution with Change All since this
    command can drastically alter your program.
    ──────────────────────────────────────────────────────────────────────────

    See Also

    Section 15.2, "Find Command"


15.6  Label Command (Full Menus Only)

    The Label command searches for a line label. Since line labels require a
    colon, QuickBASIC searches for your text-box entry plus a colon.
    QuickBASIC searches only for the target text followed by a colon. For
    example, if you enter mylab as your target text in the Label dialog box,
    QuickBASIC searches for mylab:

    The Label dialog box is shown in Figure 15.4.


                    Name of label
                        │
    ┌────────────────────┼────── Label ─────────────────────────────┐
    │            ┌───────┼──────────────────────────────────────┐   │
    │ Find What: │MyLab ─┘                                      │   │
    │            └──────────────────────────────────────────────┘   │
    │                                                               │
    │ ┌                               ┌─────────────────────────┐   │
    │┌┤[ ] Match Upper/Lowercase      │ ( ) 1. Active Window ─┐ │   │
    │││[X] Whole Word                 │ (∙) 2. Current Module ├─┼─┐ │
    ││└                               │ ( ) 3. All Modules   ─┘ │ │ │
    ││                                └─────────────────────────┘ │ │
    ├┼────────────────────────────────────────────────────────────┼─┤
    ││       < OK >         < Cancel >         < Help >           │ │
    └┼────────────────────────────────────────────────────────────┼─┘
    │                                                            │
    Search restrictions                                 Search options

    Figure 15.4  Label Dialog Box

    See Also

    Section 15.2, "Find Command"; Section 15.3, "Selected Text Command"



────────────────────────────────────────────────────────────────────────────
Chapter 16  The Run Menu

    The Run menu contains commands that let you control program execution
    within QuickBASIC, compile stand-alone programs with the BC compiler, and
    create Quick libraries. This allows you to create and debug your program
    within QuickBASIC, then compile your running program for greater speed. As
    stand-alone applications, your programs can be run from the DOS command
    line──without being loaded into QuickBASIC. You also use the Run menu to
    define main program modules.

    The Run menu has the following commands:

    ■ Start. Runs the currently loaded program from within the QuickBASIC
    environment.

    ■ Restart. Resets all variables to zero and all string expressions to
    zero-length strings, and prepares to execute the first statement in the
    program.

    ■ Continue. Resumes execution of a suspended program at the statement
    where execution was stopped (does not reset variables or expressions).

    ■ Modify COMMAND$. Accesses the string passed to a program via the
    COMMAND$ function from the DOS command line (Full Menus only).

    ■ Make EXE File. Creates an executable file from the currently loaded
    program.

    ■ Make Library. Creates a custom Quick library (Full Menus only).

    ■ Set Main Module. Sets a selected module as the main module (Full Menus
    only).


16.1  Start Command

    The Start command on the Run menu runs the currently loaded program.

    Once you start a program you may stop it by pressing CTRL+BREAK. To
    continue running the program from where you stopped, choose the Continue
    command from the Run menu. To start from the beginning again, choose
    Start.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    If you load a BASICA program, some statements require modification to
    run properly with QuickBASIC. They are described in Appendix
    A,"Converting BASICA Programs to QuickBASIC," in Programming in BASIC.
    ──────────────────────────────────────────────────────────────────────────

    Shortcut Key

    SHIFT+F5

    See Also

    Section 16.2, "Restart Command"; Section16.3, "Continue Command";
    Section 16.5, "Make EXE File Command"


16.2  Restart Command

    The Restart command on the Run menu resets all variables to zero and all
    string expressions to zero-length strings. It prepares your program to
    run, but does not begin execution. Restart also highlights the first
    executable statement in your program.

    Restart is generally used during debugging when you do not want to
    continue execution. It is especially useful if you want to restart a
    program from the beginning and step through program code (using the F8
    key) prior to the first breakpoint or watchpoint. (Breakpoints and
    watchpoints are devices used to halt program execution. See Section 18.3,
    "Watchpoint Command," and Section 18.8, "Toggle Breakpoint Command.") If
    you want to execute to the first breakpoint or watchpoint without stepping
    through code, use the Start command.

    To run your program from a specific location without resetting any
    variables or expressions, use the Continue command on the Run menu or the
    Set Next Statement command on the Debug menu followed by the Continue
    command.

    See Also

    Section 16.1, "Start Command"; Section 16.3, "Continue Command"; Section
    18.11, "Set Next Statement Command"


16.3  Continue Command

    The Continue command continues an interrupted program from the last
    statement executed or starts a program from the beginning.

    The Continue command is particularly useful for debugging. Use Continue to
    run a program from one breakpoint or watchpoint to another. When execution
    stops, you can analyze the code and make any corrections. Once you
    complete the corrections, choose Continue to execute from that point
    forward. If you make a change that prevents continuation from the current
    statement, QuickBASIC stops and asks if you want to continue without the
    change or if you prefer to include the change and restart the program. (If
    you do not want to restart, you can frequently use the Immediate window to
    make temporary changes that will allow the program to continue.)

    Shortcut Key

    F5

    See Also

    Section 16.1, "Start Command"; Section 16.2, "Restart Command"


16.4  Modify COMMAND$ Command (Full Menus Only)

    The Modify COMMAND$ command is a feature helpful to advanced programmers
    who want to access text strings passed to their programs from the DOS
    command line via the COMMAND$ function. You only need the Modify COMMAND$
    command if your program uses the COMMAND$ function.

    In some applications, you may wish to pass information from the DOS
    environment to the application. For example, typing QB DEMO1 lets
    QuickBASIC know that you wish to work within the program DEMO1 in the
    QuickBASIC environment. DEMO1 is information that is passed to QuickBASIC
    from the command line.

    You can pass information to your program from the DOS command-line using
    the COMMAND$ function. Memory is cleared every time the program starts,
    and the information from the DOS command line is lost. In the development
    and debugging process, you will want to test the program without exiting
    to DOS each time you alter the program. The Modify COMMAND$ command tells
    QuickBASIC to substitute what you have entered in the dialog box for the
    string the COMMAND$ function would normally return.

    In the Modify COMMAND$ dialog box, you indicate the string to be returned
    by the COMMAND$ function. See Figure 16.1.


    ┌───────────────────── Modify COMMAND$ ─────────────────────┐
    │                                                           │
    │                Enter text for COMMAND$:                   │
    │                                                           │
    │   ┌───────────────────────────────────────────────────┐   │
    │┌─ │SAMPLE.EXE WHITE GREEN BLUE                        │   │
    ││  └───────────────────────────────────────────────────┘   │
    ├┼──────────────────────────────────────────────────────────┤
    ││      < OK >        < Cancel >        < Help >            │
    └┼──────────────────────────────────────────────────────────┘
    │
    Text the COMMAND$ function will return

    Figure 16.1  Modify COMMAND$ Dialog Box


16.5  Make EXE File Command

    Once your program runs within QuickBASIC, you can use the Make EXE File
    command to make a version of the program that runs directly from the DOS
    command line without being loaded into QuickBASIC. The file for such a
    program is known as an executable file, and has the extension .EXE.
    Entering the base name (name with no extension) of an executable file
    after the DOS prompt runs the program.

    When you create an executable file, QuickBASIC first uses the BASIC
    command-line compiler (BC) to compile your BASIC source code into an
    intermediate file (an object file). QuickBASIC then uses a program called
    the Microsoft Overlay Linker (LINK) to join all the separately compiled
    modules of your program into a single executable file. LINK also combines
    the compiled object files created by BC with the supporting routines your
    program needs to execute properly. These routines are found in the
    run-time libraries BRUN45.LIB or BCOM45.LIB.

16.5.1  Creating Executable Files

    The files in the following list must be available to QuickBASIC when you
    create an executable file. Make sure they are in the current directory or
    available through your PATH or LIB environment variables. You can also use
    the Options menu's Set Paths command to tell QuickBASIC where to search
    for these files. (See Section 20.2, "Set Paths Command," for more
    information on setting environment variables.)

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Program                  Purpose
    ──────────────────────────────────────────────────────────────────────────
    BC.EXE                   Creates linkable object files (files with .OBJ
                            extensions) from your program.

    LINK.EXE                 Links the object files created by BC.

    BRUN45.LIB               Provides supporting routines that allow your
    (Full Menus only)        BASIC program to perform tasks such as accepting
                            input or printing text on the screen. These
                            routines are linked with your program by
    Program                  Purpose
    ──────────────────────────────────────────────────────────────────────────
                            routines are linked with your program by
                            LINK.EXE.


                            The BRUN45.LIB library is the run-time-module
                            library. Programs linked with this library have
                            small executable files, but can only run in
                            combination with BRUN45.EXE, the run-time module.

    BCOM45.LIB               Provides supporting routines like BRUN45.LIB,
                            except that executable files created with this
                            library do not require BRUN45.EXE (run-time
                            module) support. Files created with BCOM45.LIB
                            are larger than those that use BRUN45.EXE, but
                            will run as stand-alone programs.
    ──────────────────────────────────────────────────────────────────────────


    Take the following steps to create an executable file from a program
    loaded in QuickBASIC:

    1. Choose the Make EXE File command from the Run menu. The Make EXE File
        dialog box appears. See Figure 16.2.


                    Name for executable file
                            │
        ┌──────────────────────┼────── Make EXE File ───────────────────────────
        │                ┌─────┼────────────────────────────────────────────────
        │ EXE File Name: │DEMO1.EXE
        │                └──────────────────────────────────────────────────────
        │
        │ ┌─[X] Produce Debug Code             Produce:
        │ │                                 ┌──(∙) EXE Requiring BRUN45.EXE
        │ │                                 ├──( ) Stand-Alone EXE File
        ├─┼─────────────────────────────────┼───────────────────────────────────
        │ │  < Make EXE >     < Make EXE and│Exit >     < Cancel >     < Help >
        └─┼─────────────────────────────────┼───────────────────────────────────
        │                                 │
        Provides additional debugging       Executable-file options
        information when checked

        Figure 16.2  Make EXE File Dialog Box

    2. Type a different base name in the text box if you want to rename your
        file; otherwise, leave the text box alone.

    3. Choose either the EXE Requiring BRUN45.EXE option or the Stand-Alone
        EXE File option.

        See Section 16.5.3, "Types of Executable Files," for a discussion of
        these alternatives.

    4. Choose Produce Debug Code if you want your executable file to include
        additional error-checking and to report error locations at run time.
        Also choose Produce Debug Code if you want your program to respond to
        CTRL+BREAK. Note that Produce Debug Code does not produce
        CodeView(R)-compatible files and results in larger and slower programs.
        See Section 16.5.4, "Run-Time Error Checking in Executable Files," for
        an explanation of errors handled by this option.

    5. Choose either the Make EXE or the Make EXE and EXIT command button:

        ■ The Make EXE command button creates the executable file, and then
        returns you to QuickBASIC.

        ■ The Make EXE and Exit command button creates the executable file, and
        then returns you to the DOS prompt.

16.5.2  Quick Libraries and Executable Files

    If your program uses routines from a Quick library, you must load the
    Quick library when you load your program. If a Quick library is loaded
    when you choose the Make EXE file command, the BC compiler searches for a
    stand-alone (.LIB) library that corresponds to the loaded Quick library
    when it creates an executable file.

    Quick libraries provide fast access to your own custom library of
    procedures, but you can use them only inside the QuickBASIC environment.
    The compiler needs access to the corresponding stand-alone (.LIB) library
    to include the Quick library's procedures in an executable file.
    Therefore, it is a good idea to keep both kinds of libraries──Quick
    libraries and .LIB libraries──in the same directory. You can use the
    Options menu's Set Paths command to tell QuickBASIC where to look for any
    .LIB or Quick libraries it needs when creating an executable file. (The
    Make Library command on the Run menu makes both kinds of libraries
    automatically. See Section 16.6, "Make Library," in this manual and
    Appendix H in Programming in BASIC for more information on creating and
    using Quick libraries.)

16.5.3  Types of Executable Files

    You can create two different types of executable files, depending on
    whether or not you want your executable program to require access to the
    run-time module BRUN45.EXE.

    16.5.3.1  Programs that Use the Run-Time Module

    Programs compiled with the EXE Requiring BRUN45.EXE option need access to
    the run-time module BRUN45.EXE when they run. The run-time module contains
    code needed to implement the BASIC language. Run-time modules provide the
    following advantages over stand-alone programs:

    ■ The executable file is much smaller.

    ■ COMMON variables and open files are preserved across CHAIN statements,
    allowing programs to share data. Stand-alone programs do not preserve
    open files or variables listed in COMMON statements when a CHAIN
    statement transfers control to another program.

    ■ The BRUN45.EXE run-time module resides in memory, so it does not need to
    be reloaded for each program in a series of chained programs.

    16.5.3.2  Stand-Alone Programs

    When you use the Stand-Alone EXE File option, the executable file does not
    require access to the run-time module BRUN45.EXE. However, since files
    created with this option include the support routines found in BRUN45.EXE,
    they are larger than files created with the EXE Requiring BRUN45.EXE
    option. Also, files created with the EXE Requiring BRUN45.EXE option do
    not preserve open files or variables listed in COMMON statements when a
    CHAIN statement transfers control to another program.

    Stand-alone files have the following advantages:

    ■ Slightly faster execution than run-time programs.

    ■ RAM space may be saved if you have small, simple programs that do not
    require all the routines in the run-time module.

    ■ The program does not require the run-time module to run. This allows the
    program to run by itself on any DOS computer.

16.5.4  Run-Time Error Checking in Executable Files

    If you turn on the Produce Debug Code check box in the Make EXE File
    dialog box when you make an executable file, the following conditions are
    checked when the program runs:

    ■ Arithmetic overflow. All arithmetic operations, both integer and
    floating-point, are checked for overflow and underflow.

    ■ Array bounds. Array subscripts are checked to ensure they are within the
    bounds specified in DIM statements.

    ■ Line locations. The generated binary code includes additional tables so
    that run-time error messages indicate the lines on which errors occur.

    ■ RETURN statements. Each RETURN statement is checked for a prior GOSUB
    statement.

    ■ CTRL+BREAK, the keystroke combination to halt program execution. After
    executing each line, the program checks to see if the user pressed
    CTRL+BREAK. If so, the program stops.

    Note that you must compile a program with the Produce Debug Code option
    turned on if you want it to respond to CTRL+BREAK. Otherwise, CTRL+BREAK
    halts a program only when one of the following conditions is met:

    1. A user enters data in response to an INPUT statement's prompt.

    2. The program's code explicitly checks for CTRL+BREAK.

    ──────────────────────────────────────────────────────────────────────────
    WARNING
    If you don't use the Produce Debug Code option, then array-bound errors,
    RETURN without GOSUB errors, and arithmetic overflow errors do not
    generate error messages. Program results may be unpredictable.
    ──────────────────────────────────────────────────────────────────────────

16.5.5  Floating-Point Arithmetic in Executable Files

    When you compile a program into an executable file, the executable file
    does floating-point calculations more quickly and efficiently than the
    same program running in the QuickBASIC environment. Executable files
    optimize for speed and accuracy by changing the order in which they do
    certain arithmetic operations. (They also make greater use of a numeric
    coprocessor chip or emulation of a coprocessor's function.)

    One side effect of this extra accuracy in the results of relational
    operations is that you may notice a difference when comparing single- or
    double-precision values. For example, the following code fragment prints
    Equal when run in the QuickBASIC environment but Not Equal when it is run
    as an executable file:

    B!=1.0
    A!=B!/3.0
    .
    .
    .
    IF A!=B!/3.0 THEN PRINT "Equal" ELSE PRINT "Not Equal"

    This problem results from performing the calculation B!/3.0 inside a
    comparison. The compiled program stores the result of this calculation on
    the math coprocessor chip, which gives it a higher degree of accuracy than
    the value stored in the variable A!, causing the inequality.

    You can avoid such problems in comparisons by doing all calculations
    outside of comparisons. The following rewritten code fragment produces the
    same results when run in the environment and as an executable file:

    B!=1.0
    A!=B!/3.0
    .
    .
    .
    Tmp!=B!/3.0
    IF A!=Tmp! THEN PRINT "Equal" ELSE PRINT "Not Equal"


16.6  Make Library Command (Full Menus Only)

    The Make Library command creates a custom Quick library for use with
    compiled programs. A Quick library can contain procedures that you wish to
    use in more than one program.

    When you make a library with QuickBASIC, consider whether the library is
    new or an update of an existing library. If it is an update, start
    QuickBASIC with the /L command-line option, supplying the name of the
    library to be updated as a command-line argument (for example, QB /L
    Mylib). You can also include the name of a program whose modules you want
    to put in the library. In this case QuickBASIC loads all the modules
    specified in that program's .MAK file. If it is a new library, start
    QuickBASIC first, and use Load File to load the files you want to convert
    into a library.

    If you load your program when starting QuickBASIC, be sure to unload any
    modules you do not want in the Quick library, including the main module
    (unless it contains procedures you want in the library).

16.6.1  Unloading and Loading Modules

    To keep your Quick libraries as compact as possible, remove any
    nonessential modules currently loaded. To remove ("unload") the unwanted
    modules, follow these steps:

    1. Choose the Unload File command from the File menu.

    2. Select the module you want to unload from the list box, then press
        ENTER. The module is unloaded, but still exists as a disk file.

    3. Repeat steps 1 and 2 until you have unloaded all unwanted modules.

    Alternatively, start QuickBASIC with or without a library specification,
    and load only those modules you want. In this case, you load each module
    using the Load File command from the File menu.

    To load one module at a time, follow these steps:

    1. Choose the File menu's Load File command.

    2. Select the name of a module you want to load from the list box.

    3. Repeat steps 1 and 2 until you have loaded all the modules you want.

16.6.2  Creating Libraries

    Once you load the previous library (if any) and the new modules you want
    to include in the Quick library, choose the Make Library command on the
    Run menu. The dialog box shown in Figure 16.3 appears.


                        Name for library
                                │
    ┌────────────────────────────┼─ Make Library ──────────────────────────────
    │                          ┌─┼──────────────────────────────────────────┐
    │ Quick-Library File Name: │prntproc.lib                                │
    │                          └────────────────────────────────────────────┘
    │
    │ ┌─[X] Produce Debug Code
    ├─┼────────────────────────────────────────────────────────────────────────
    │ │ < Make Library >   < Make Library and Exit >   < Cancel >   < Help >
    └─┼────────────────────────────────────────────────────────────────────────
    │
    Provides additional debugging information when checked

    Figure 16.3  Make Library Dialog Box

    To create a Quick library after you have chosen the Make Library command,
    do the following:

    1. Enter the name of the library you wish to create in the Quick-Library
        File Name text box.

        If you enter a base name (that is, a file name with no extension),
        Quick BASIC appends the extension .QLB when it creates the Quick
        library. If you want your library to have no extension, add a
        terminating period (.) to the base name. Otherwise, you may enter any
        unique base name and extension you like, as long as it is consistent
        with DOS file-name rules.

    2. Select the Produce Debug Code check box only if you are specifically
        trying to track a bug you believe to be in a library you are updating.
        It makes your library larger, your program slower, and gives only a
        small amount of error information.

    3. Create the Quick library:

        ■ Choose the Make Library command button if you want to remain in the
        environment after the Quick library is created.

        ■ Choose the Make Library and Exit command button if you want to return
        to the DOS command level after the Quick library is created.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    A Quick library that needs to trap events such as keystrokes must
    contain at least one event-trapping statement in one of its modules.
    This statement can be as simple as TIMER OFF, but without it, events are
    not trapped correctly in the Quick library.
    ──────────────────────────────────────────────────────────────────────────


16.7  Set Main Module Command (Full Menus Only)

    The Set Main Module command lets you select a main module from a list of
    the currently loaded modules.

    In a single-module program, the main module is the program. Therefore, as
    soon as you have typed your first statement and have saved it, you have
    created a main module. In a multiple-module program, the main module
    contains the first statement to be executed when the program is run──it is
    the first entry in any list box (such as the one in the SUBs command
    dialog box) that shows the modules in a program.

    If you start QuickBASIC without specifying a file name, the title bar of
    the View window contains the word Untitled. If you save the contents of
    that View window, even if it is empty, the name under which you save it
    becomes the name of the main module of the program.

    After you name the main module, the name appears in the title bar of the
    View window.

16.7.1  Changing the Main Module

    A module can be part of many different programs, but it can be the main
    module of only one program (the program bearing its name).

    As you are editing your program, you may find that you want to reorganize
    it and have execution begin with a module other than the one currently
    designated as the main module. To do this, follow these steps:

    1. Choose the Set Main Module command from the Run menu. The Set Main
        Module dialog box contains a list of currently loaded modules.

    2. Select the module you want to designate as the main module, and press
        ENTER. See Figure 16.4.


    Becomes new main module
    ┌─────── Set Main Module ───────┐
    │  Choose new main module:      │
    │  ┌─────────────────────────┐  │
    │  │ DEMO1.BAS               ↑  │
    │  │ TEST.BAS                ▒  │
    │  │ TORUS.BAS               ▒  │
    │  │ DEMO2.BAS               ▒  │
    │  │                         ▒  │
    │  │                         ▒  │
    │  │                         ▒  │
    │  │                         ↓  │
    │  └─────────────────────────┘  │
    │                               │
    ├───────────────────────────────┤
    │  < OK >  < Cancel > < Help >  │
    └───────────────────────────────┘

    Figure 16.4  Set Main Module DIalog Box

16.7.2  The .MAK File

    When you save a multiple-module program QuickBASIC creates a special file
    containing the names of all the program modules. This file has the base
    name of the main module plus the extension .MAK.

    When you reload the program, QuickBASIC uses the .MAK file to locate all
    of the modules. For this reason, do not delete a .MAK file. If you move a
    multiple-module program to another directory, you also need to move the
    .MAK file.

    Only program modules are included in a .MAK file. The main program module
    is the first .MAK file entry. QuickBASIC does not add other types of files
    to the .MAK list. If your program relies on include files, the program
    must specify each file as an argument to a $INCLUDE metacommand.

    The .MAK file is a text file. If you wish to edit it, load it into
    QuickBASIC using the Document option of the File menu's Load File command.

    You can remove modules from a program's .MAK file without editing the .MAK
    file directly. With the program loaded, follow the module-unloading
    procedure outlined in Section 16.6.1, "Unloading and Loading Modules."
    When you save the program, the names of any unloaded modules are removed
    from the .MAK file.



────────────────────────────────────────────────────────────────────────────
Chapter 17  Debugging Concepts and Procedures

    This chapter introduces the topic of debugging your programs with
    QuickBASIC. QuickBASIC can help you track down errors that result from
    flaws in the logic of a program.

    This chapter provides the following information on debugging:

    ■ Using QuickBASIC to prevent bugs as you are writing your program

    ■ Debugging terms and concepts

    See Chapter 18, "The Debug Menu," for more information on debugging.


17.1  Debugging with QuickBASIC

    QuickBASIC simplifies debugging with advanced features such as
    breakpoints, watchpoints, instant watch, and watch expressions. Other
    fundamental tools include the STOP, PRINT, CONT, TRON, and TROFF
    statements.

    With QuickBASIC, you do not need to use separate tools or invoke any
    special options to debug your program. When you notice a bug, you can
    start tracking it immediately. The QuickBASIC environment contains
    everything you need.

    Additionally, QuickBASIC does not require you to recompile or relink a
    program after making a change. You can usually run a program to the point
    where a problem occurs, suspend execution, fix the problem, and continue
    running the program as though it never stopped. In QuickBASIC, you debug
    as you program.


17.2  Preventing Bugs with QuickBASIC

    Preventing bugs is the best way to have a bug-free program. Here are three
    ways to prevent bugs:

    1. Design your program carefully.

        An important rule in good program design is to isolate different tasks
        by writing SUB or FUNCTION procedures to perform those tasks. A small
        procedure is much easier to debug than a large program without
        procedures.

        An additional benefit of using procedures is that you can save groups
        of procedures in a separate file called a module, then use them in
        other programs that perform the same tasks. (See Chapter 2, "SUB and
        FUNCTION Procedures," in Programming in BASIC for more information on
        procedures and modules.)

    2. Use the Immediate window.

        As you program, use the Immediate window at the bottom of the
        QuickBASIC screen to isolate and test small pieces of the program. See
        Section 17.3.5 for more information on the Immediate window. When
        these pieces work on their own, move them into the View window.

    3. Run your program often.

        Because QuickBASIC checks and translates each statement to executable
        code (instructions understood by the computer) after you type a line
        and press ENTER, you can continually test-run the program as you add
        new pieces. This helps catch simple bugs that could be difficult to
        track in a finished program.

    Suppose you have written a program that contains the following code:

    DIM Array$(1 TO 20)
    .
    .
    .
    I% = 1
    DO
        INPUT Temp$
        IF Temp$ <> "" THEN
        Array$(I%) = Temp$
        I% = I + 1
        END IF
    LOOP UNTIL Temp$ = "" OR I% > 20

    You believe you have designed a logical loop. Now you can test the code by
    doing the following:

    1. Execute the loop and enter text when prompted. (To end the loop, press
        ENTER instead of entering text.)

    2. Type the following in the Immediate window:

        For I% = 1 to 20: PRINT Array$(I%): NEXT

    Your output will alert you to a flaw in your program──the variable I% is
    not incrementing. Upon closer inspection, you notice that you must change
    the line

    I% = I + 1

    to

    I% = I% + 1

    Along with designing your program carefully, using the Immediate window,
    and running your program often, another debugging technique is setting a
    "watch expression." This allows you to "watch" (monitor) the value of the
    variable I% as you trace through the loop. Section 17.3.3, "Watch
    Expressions," and Section 17.3.4, "Watch Window," tell how to watch an
    expression while a program is executing.


17.3  QuickBASIC's Debugging Features

    This section defines some key debugging terms and concepts. See Chapter
    18, "The Debug Menu," for information on the Debug menu and how to use
    QuickBASIC's debugging commands.

17.3.1  Tracing (Full Menus Only)

    The Trace On command highlights each statement as it executes. If the
    program manipulates the screen, QuickBASIC switches back and forth between
    the highlighted statements and the output screen (this is referred to as
    "animated execution"). For example, with tracing on you can follow
    branching in an IF...THEN...ELSE statement. QuickBASIC's tracing options
    let you run the entire program at once (normal tracing), one statement at
    a time (single stepping), or one procedure at a time (procedure stepping).
    See Section 17.3.6, "Other Debugging Features," for a discussion of
    single stepping and procedure stepping.

    Turning on tracing automatically enables QuickBASIC's History On command.
    History records the last 20 statements executed so you can stop execution
    and trace backward and forward through the 20 previous statements with
    History Back and History Forward. The history feature allows you to answer
    the question, "How did I get here?"

    See Also

    Section 18.6, "Trace On Command"; Section 18.7, "History On Command"

17.3.2  Breakpoints and Watchpoints

    A breakpoint is a location in your program where you want execution to
    pause. With breakpoints, you can set your program to execute only as far
    as you want, letting you test one segment of your program at a time. You
    can also use breakpoints to stop the program at strategic places and then
    examine a variable's value.

    A watchpoint is an expression that stops a program when the expression
    becomes true (nonzero). You might use a watchpoint, for example, if your
    program crashes in a loop that increments X from 1 to 50. A watchpoint of
    X=49 stops the program when X becomes 49. You can then single step the
    program through the forty-ninth loop to locate the particular statement
    that causes the crash.

    Watchpoints appear in the Watch window. The Watch window displays all of
    the current watchpoints and watch expressions.

    See Also

    Section 17.3.4, "Watch Window"; Section 18.1, "Add Watch Command";
    Section 18.8, "Toggle Breakpoint Command"

17.3.3  Watch Expressions

    Watch expressions, which are entered with the Add Watch command, let you
    observe the value of a variable (a number or text string) or the condition
    of an expression (true or false) in an executing program.

    For example, if you want to watch the value of a variable MyVar and an
    expression X=1, QuickBASIC places MyVar and X=1 in the Watch window. As
    the program runs, QuickBASIC displays the changing values of MyVar and the
    condition of X=1 (-1 for true, 0 for false) in the Watch window. If a
    program MYPROG.BAS initially assigns MyVar a value of 10 and X a value of
    1, then the Watch window displays

    MYPROG.BAS  MyVar:  10
    MYPROG.BAS  X=1:    -1

    If the program later changes MyVar to 99 and X to 3, the Watch window will
    then display

    MYPROG.BAS  MyVar:  99
    MYPROG.BAS  X=1:    0

    The Instant Watch command displays the value of the variable or expression
    containing the cursor in a dialog box──you do not need to open the Watch
    window. However, the Instant Watch dialog box does give you the option of
    adding the variable or expression to the Watch window.

    See Also

    Section 17.3.4, "Watch Window"; Section 18.1, "Add Watch Command";
    Section 18.2, "Instant Watch Command"

17.3.4  Watch Window

    The Watch window is the window that opens at the top of the QuickBASIC
    screen to let you track watchpoint conditions or watched expressions
    during program execution.

    The current value or condition (true or false) of a variable or expression
    can be displayed in the Watch window only when the program is executing in
    the part of the program in which the watchpoint or watch expression was
    added. The message Not watchable is displayed at all other times.

    For example, suppose you create a watch expression to monitor the value of
    a variable MyVal while you are working on a procedure called MySub. The
    value of MyVal will appear in the Watch window only when the program
    executes the MySub procedure. At any other time──when execution is in the
    module-level code or other procedures──the message Not watchable appears
    after MyVal in the Watch window.

    Even if a program uses a SHARED statement to share a variable between the
    module level and the procedure level, that variable is watchable only at
    the level that was active when the variable was added to the Watch window.

    Nothing is watchable while a DEF FN function is active.

    See Also

    Section 17.3.3, "Watch Expressions"; Section 18.1, "Add Watch Command";
    Section 18.2, "Instant Watch Command"

17.3.5  Immediate Window

    The Immediate window is the window at the bottom of the screen. In it you
    can execute BASIC statements directly to gain information useful in
    debugging.

    Note, however, that the Immediate window can access information only about
    those variables in the part of the program (module or procedure) that is
    currently active.

    For example, if you suspend a program in a procedure, you may use the
    Immediate window to access local and global variables and expressions
    (indicated by the SHARED statement) but not ones local only to the
    module-level code or another procedure.

    See also

    Section 10.5, "Using the Immediate Window"

17.3.6  Other Debugging Features

    Table 17.1 describes several additional debugging features available in
    QuickBASIC Version 4.5. Some are intended to be used together, while
    others are generally used by themselves.

    Table 17.1  Additional Debugging Features
╓┌─┌──────────────┌──────────────┌───────────────────────────────────────────╖
    Feature        How to Execute Description
    ──────────────────────────────────────────────────────────────────────────
    Break on       Choose from    Locates errors in programs using error
    Feature        How to Execute Description
    ──────────────────────────────────────────────────────────────────────────
    Break on       Choose from    Locates errors in programs using error
    Errors command the Debug menu handling. Break on Errors disables error
                                handling and halts execution when an error
                                occurs. Press SHIFT<|>+<|>F8 (History Back)
                                to see the error-causing statement.

    Execute to     Press F7       Executes from the beginning of a program up
    cursor                        to and including the line containing the
                                cursor, and then halts execution. Use this
                                feature to quickly execute to a
                                problem-causing section of code, and then
                                single step to find the error.

    Set Next       Choose from    Changes the execution sequence of an
    Statement      the Debug menu interrupted program so that the next
    command                       statement to execute will be the one at the
                                cursor. If your program encounters an error
                                that you can correct immediately, use Set
                                Next Statement to tell QuickBASIC to begin
    Feature        How to Execute Description
    ──────────────────────────────────────────────────────────────────────────
                                Next Statement to tell QuickBASIC to begin
                                executing from the corrected line when you
                                choose Continue.

    Single         Press F8       Executes a single statement. This is a
    stepping                      powerful tool for debugging code. By single
                                stepping and using the Watch window
                                together, you can gain a thorough
                                understanding of how each statement affects
                                your variables.

    Procedure      Press F10      Executes a procedure call and the procedure
    stepping                      as a single statement. If you are single
                                stepping and encounter a procedure you know
                                works properly, procedure stepping lets you
                                execute the entire procedure at once (rather
                                than single stepping through it).
    ──────────────────────────────────────────────────────────────────────────

    Feature        How to Execute Description
    ──────────────────────────────────────────────────────────────────────────


    See Also

    Section 18.10, "Break On Errors Command"; Section 18.11, "Set Next
    Statement Command"


────────────────────────────────────────────────────────────────────────────
Chapter 18  The Debug Menu

    The Debug menu controls features that speed program debugging. These
    features let you watch variables and expressions as they change, trace
    program execution, stop the program at specified locations or on specified
    conditions, and alter the restart location of a suspended program.

    The Debug menu contains the following commands:

    ■ Add Watch. Displays the values of variables and expressions in the Watch
    window as a program executes.

    ■ Instant Watch. Displays the value of a variable or expression.

    ■ Watchpoint. Allows you to halt program execution when a condition you
    specify becomes true (Full Menus only).

    ■ Delete Watch. Removes an item from the Watch window.

    ■ Delete All Watch. Removes all entries in the Watch window and closes the
    window (Full Menus only).

    ■ Trace On. Steps through the program in slow motion, highlighting the
    currently executing statement (Full Menus only).

    ■ History On. Records the last 20 lines executed by the program (Full
    Menus only).

    ■ Toggle Breakpoint. Turns breakpoints on and off.

    ■ Clear All Breakpoints. Removes all previously set breakpoints.

    ■ Break on Errors. Sets an implicit breakpoint at the most recent
    error-handling statement (Full Menus only).

    ■ Set Next Statement. Changes the program execution sequence so that the
    next statement executed is the one at the cursor (Full Menus only).


18.1  Add Watch Command

    The Add Watch command displays the values of variables and expressions as
    the program executes. QuickBASIC opens a Watch window at the top of the
    screen to accommodate the variables.

    To use the command, choose Add Watch on the Debug Menu. A dialog box
    appears. Type in the name of the variable or expression you want to watch.
    See Figure 18.1.


                        Variable or expression
                                │
        File  Edit  View  Search │Run  Debug  Calls  Options              Help
    SORTDEMO.BAS Z > 100:     │
    SORTDEMO.BAS Length > 50: │
    ┌───────────────────────────┼── SORTDEMO.BAS ─────────────────────────┤↑├──
    │' Define the data type used│to hold the information for each colored bar:
    │  TYPE SortType            │
    │     Length┌───────────────┼────── Add Watch ───────────────────────┐
    │           │               │                                        │
    │     ColorV│     Enter expression to be added to Watch window:      │
    │     BarStr│               │                                        │
    │  ENDTYPE  │  ┌────────────┼─────────────────────────────────────┐  │
    │           │  │COLORVAL ───┘                                     │  │
    │' Declare g│  └──────────────────────────────────────────────────┘  │
    │  CONST FAL├────────────────────────────────────────────────────────┤
    │  CONST NUM│       < OK >        < Cancel >        < Help >         │
    │           └────────────────────────────────────────────────────────┘
    │' Declare global variables, and allocate storage space for them. SortArray
    │' and SortBackup are both arrays of the data type SortType defined above:
    │←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒→
    ├─────────────────────────────── Immediate ────────────────────────────────
    │
    │
    F1=Help  Enter=Execute  Esc=Cancel  Tab=Next Field  Arrow=Next Item

    Figure 18.1  Add Watch Dialog Box

    Watching a variable in the Watch window avoids repeated use of PRINT
    statements for tracking the variable's value. You can also watch the
    condition (true or false) of an expression in the Watch window. True is
    represented by -1; false by 0. The variables or expressions you are
    watching are easily removed from the Watch window when debugging is
    complete.

    During program execution, a value in the Watch window changes when its
    value in the program changes. Sometimes the message Not watchable may
    appear rather than a value. This means that the debugger cannot currently
    access the variable because program execution is not in the part of the
    program (the procedure- or module-level code) from which the variable was
    added to the Watch window. A variable is watchable only when the program
    is executing in the part of the program from which the variable was added
    to the Watch window.

    Note that if you are interested in only one or two instances of a
    variable's value, it may be easier to use the Instant Watch command,
    described in Section 18.2.

    Example

    The following example calculates the nth number in a sequence known as the
    Fibonacci sequence. In the Fibonacci sequence, each number is the sum of
    the two preceding numbers, beginning with 1 and 2. The first 10 Fibonacci
    numbers are 1, 2, 3, 5, 8, 13, 21, 34, 55, and 89. This example uses the
    Add Watch command and animated tracing (the process of switching back and
    forth between highlighted statements in your program and the output
    screen).

    1. Start QuickBASIC or choose the New Program command from the File menu,
        and type:

        DEFINT A-Z
        INPUT  n
        PRINT Fib(n)
        END

    2. Choose the Add Watch command from the Debug menu, then enter n in the
        text box. This displays the value n has at the module level.

    3. Create a FUNCTION procedure called Fib by choosing the New FUNCTION
        command from the Edit menu and typing Fib in the dialog box. (DEFINT
        A-Z is automatically added above the first line of the FUNCTION
        definition because of the DEFtype statement you typed in step 1.) Now
        enter the procedure as follows:

        FUNCTION Fib(n)
            IF n > 2 THEN
                Fib = Fib(n - 1) + Fib(n - 2)
            ELSE Fib = n
            END IF
        END FUNCTION

    4. Choose the Add Watch command on the Debug menu, and again add n to the
        Watch window. This displays the value of n within the Fib procedure.

    5. Choose the Trace On command on the Debug menu.

    6. Choose Start on the Run menu to execute the program.

    7. Enter 8 after the input prompt. Observe the Watch window to see how n
        changes as the procedure recursively calls itself to calculate the
        eighth number in the Fibonacci sequence.

    8. Choose the Output Screen command (or press F4) to see the program
        results.

    See Also

    Section 17.3.3, "Watch Expressions"; Section 17.3.4, "Watch Window"


18.2  Instant Watch Command

    The Instant Watch command displays the value of a variable or the
    condition of an expression (true or false) in a dialog box.

    Use the command by moving the cursor within (or to the right of) a
    variable or selecting an expression and then choosing Instant Watch on the
    Debug menu. QuickBASIC displays a dialog box with the variable or
    expression in the upper text box and the value or condition (-1 for true,
    0 for false) in the lower text box. See Figure 18.2.


                        Variable or expression
                                │
        File  Edit  View  Search │Run  Debug  Calls  Options              Help
    SORTDEMO.BAS Z > 100:     │
    SORTDEMO.BAS Length > 50: │
    ┌───────────────────────────┼── SORTDEMO.BAS ─────────────────────────┤↑├──
    │' Define the data type used│to hold the information for each colored bar:
    │  TYPE SortTyp┌────────────┼────── Add Watch ─────────────────┐
    │     Length AS│            │                                  │ed
    │              │  ┌─────────┼───────────────────────────────┐  │
    │     ColorVal │  │Colorval─┘                               │  │
    │     BarString│  └─────────────────────────────────────────┘  │ters)
    │  ENDTYPE     │                                               │
    │              │  ┌─────────────────────────────────────────┐  │
    │' Declare glob│  │ 0 ──┐                                   │  │
    │  CONST FALSE │  └─────┼───────────────────────────────────┘  │
    │  CONST NUMOP ├────────┼──────────────────────────────────────┤
    │             T│   < Add│Watch >    < Cancel >    < Help >     │
    │' Declare glob└────────┼──────────────────────────────────────┘. SortArray
    │' and SortBackup are both arrays of the data type SortType defined above:
    │←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒→
    ├───────────────────────┼─────── Immediate ────────────────────────────────
    │                       │
    │                       │
    F1=Help  Enter=Execute │Esc=Cancel  Tab=Next Field  Arrow=Next Item
                            │
                    Value or condition

    Figure 18.2  Instant Watch Dialog Box

    Use the Instant Watch command for debugging assignment statements and for
    checking variables or expressions. If you need to watch a variable or
    expression constantly, use the Add Watch command (or press the Add Watch
    button in the Instant Watch dialog box) to add the item to the Watch
    window.

    The Instant Watch command is convenient for displaying a value or
    condition in a suspended or stopped program.

    Shortcut Key

    SHIFT+F9

    See Also

    Section 17.3.3, "Watch Expressions"; Section 17.3.4, "Watch Window"


18.3  Watchpoint Command (Full Menus Only)

    The Watchpoint command allows you to set a watchpoint──an expression that
    halts program execution when the expression becomes true (for example,
    when the value of a variable X equals 100). QuickBASIC displays the
    watchpoint in the Watch window.

    When you choose the Watchpoint command a dialog box appears. You can enter
    any variable name or expression along with relational operators in the
    Watchpoint text box. See Figure 18.3.


        File  Edit  View  Search  Run  Debug  Calls  Options              Help
    SORTDEMO.BAS Z > 100:
    SORTDEMO.BAS Length > 50:
    ┌────────────────────────────── SORTDEMO.BAS ─────────────────────────┤↑├──
    │' Define the data type used to hold the information for each colored bar:
    │  TYPE SortType
    │     Length┌───────────────────── Watchpoint ───────────────────────┐
    │           │                                                        │
    │     ColorV│        Enter expression (will break when TRUE):        │
    │     BarStr│                                                        │
    │  ENDTYPE  │  ┌──────────────────────────────────────────────────┐  │
    │        ┌──┼──►COLORVAL = 10                                     │  │
    │' Declar│ g│  └──────────────────────────────────────────────────┘  │
    │  CONST │AL├────────────────────────────────────────────────────────┤
    │  CONST │UM│       < OK >        < Cancel >        < Help >         │
    │        │  └────────────────────────────────────────────────────────┘
    │' Declar│ global variables, and allocate storage space for them. SortArray
    │' and So│tBackup are both arrays of the data type SortType defined above:
    │←▒▒▒▒▒▒▒│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒→
    ├────────│────────────────────── Immediate ────────────────────────────────
    │        │
    │        │
    F1=Help │Enter=Execute  Esc=Cancel  Tab=Next Field  Arrow=Next Item
            │
    Condition that will halt the program

    Figure 18.3  Watchpoint Dialog Box

    QuickBASIC's relational operators include =, <>, >, <, >=, and <=. If an
    expression is entered without a relational statement, QuickBASIC assumes
    the relation <> 0. QuickBASIC then suspends execution of the program as
    soon as the expression becomes a nonzero value.

    If you set a watchpoint in a SUB or FUNCTION procedure, the Watch window
    describes the given expression as TRUE or FALSE only when the program is
    executing in that procedure. At all other times the message Not watchable
    will appear beside the watchpoint in the Watch window. Similarly,
    watchpoints at the module level display the message Not watchable when
    execution is in a procedure.

    See Also

    Section 17.3.2, "Breakpoints and Watchpoints"; Section 18.1, "Add Watch
    Command"; Section 18.4, "Delete Watch Command"


18.4  Delete Watch Command

    The Delete Watch command removes an item from the Watch window. The Delete
    Watch dialog box, shown in Figure 18.4, displays the current Watch-window
    items and allows you to select which Watch-window item to delete.


    List of items currently in Watch window
    │
    │  File  Edit  View  Search  Run  Debug  Calls  Options              Help
    │┌SORTDEMO.BAS Z > 100:  0
    └┤SORTDEMO.BAS ColorVal:  0
    └SORTDEMO.BAS Length < 50: -1
    ┌──────────────┌───────────────── Delete Watch ────────────────┐──────┤↑├──
    │' Define the d│  ┌─────────────────────────────────────────┐  │lored bar:
    │  TYPE SortTyp│  │   SORTDEMO.BAS Z > 100:                 ↑  │
    │     Length AS│  │   SORTDEMO.BAS ColorVal:                ▒  │ed
    │              │  │ │ SORTDEMO.BAS Length < 50:             ▒  │
    │     ColorVal │  │ │                                       ▒  │
    │     BarString│  │ │                                       ▒  │ters)
    │  ENDTYPE     │  │ │                                       ▒  │
    │              │  │ │                                       ▒  │
    │' Declare glob│  │ │                                       ▒  │
    │  CONST FALSE │  │ │                                       ↓  │
    │  CONST NUMOP │  └─┼───────────────────────────────────────┘  │
    │             T│    │                                          │
    │' Declare glob├────┼──────────────────────────────────────────┤. SortArray
    │' and SortBack│    │  < OK >     < Cancel >     < Help >      │ned above:
    │←▒▒▒▒▒▒▒▒▒▒▒▒▒└────┼──────────────────────────────────────────┘▒▒▒▒▒▒▒▒▒▒→
    ├───────────────────┼─────────── Immediate ────────────────────────────────
    │                   │
    F1=Help  Enter=Execute  Esc=Cancel  Tab=Next Field  Arrow=Next Item
                        │
                    Item to remove

    Figure 18.4  Delete Watch Dialog Box

    Use the Delete All Watch command to remove all Watch-window items at once.

    See Also

    Section 18.5, "Delete All Watch Command"


18.5  Delete All Watch Command (Full Menus Only)

    The Delete All Watch command in the Debug menu removes all of the
    Watch-window entries and closes the window. You typically use the Delete
    All Watch command when the section of program code you are working on runs
    properly.

    If you want to selectively remove Watch-window items, use the Delete Watch
    command.

    See Also

    Section 18.4, "Delete Watch Command"


18.6  Trace On Command (Full Menus Only)

    The Trace On command steps through the program in slow motion,
    highlighting the executing statement. When this command is active, a
    bullet (■) appears next to the Trace On command on the Debug menu.
    Choosing Trace On again toggles the feature off.

    Trace On is a useful method for determining whether the general flow of
    your program is what you intended, especially if you use it in combination
    with watchpoints, breakpoints, and CTRL+BREAK (which suspends execution).
    Trace On also records the last 20 statements executed, so you can review
    them with the History Back and History Forward commands (see Sections
    18.7.1 and 18.7.2).

    If a program sends output to the screen, running it with Trace On active
    causes the screen to flash back and forth between QuickBASIC and the
    output screen. You can use the Output Screen command from the View menu to
    control which screen appears during program suspension (see Section
    14.5).

    See Also

    Section 18.1, "Add Watch Command"; Section 18.7, "History On Command";
    Section 18.8, "Toggle Breakpoint Command"


18.7  History On Command (Full Menus Only)

    Choose the History On command from the Debug menu to record the last 20
    lines executed by the program the next time it runs. When this command is
    active, a bullet (■) appears next to the History On command on the Debug
    menu. Execution speed is slower with this feature active.

    The History On command allows you to trace backward and forward through
    the last 20 statements executed by the program. This is particularly
    useful when you get a run-time error and you want to see which 20
    statements were executed immediately preceding the error. Checking the
    execution history also lets you review the specific branching of a program
    through nested sequences of conditional structures like IF...THEN...ELSE
    statements. Use History On in conjunction with breakpoints to review
    groups of up to 20 consecutive statements in your program.

    You use History On with the History Back and History Forward commands (see
    Sections 18.7.1 and 18.7.2).

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    The History commands do not execute statements. They just show the
    previous execution sequence.
    ──────────────────────────────────────────────────────────────────────────

18.7.1  History Back

    Activated with SHIFT+F8, History Back steps back in your program through
    the last 20 program statements recorded by either the History On or Trace
    On command.

    When you wish to review the flow of a program, interrupt the program
    execution by pressing CTRL+BREAK; then press SHIFT+F8 to check back
    through the last 20 statements executed. This shows you the program flow
    through statements and is particularly useful for following conditional
    branches.

18.7.2  History Forward

    Activated with SHIFT+F10, History Forward lets you step forward in your
    program through the last 20 program statements. You can use History
    Forward only after using History Back. Because History Back shows the
    reverse execution order, step backward first, and then watch the execution
    sequence using History Forward.

    See Also

    Section 18.6, "Trace On Command"


18.8  Toggle Breakpoint Command

    The Toggle Breakpoint command turns a breakpoint (a specific location in
    the program where execution stops) on and off. The Toggle Breakpoint
    command affects the line containing the cursor. Lines on which breakpoints
    are set appear in reverse video.

    Use a breakpoint to pause at points where you suspect problems in your
    program, then test the values of variables to confirm or refute your
    suspicion (in the Immediate window). Alternately, insert a breakpoint
    prior to a problem area and then use single stepping (see Section 17.3.6,
    "Other Debugging Features," for a description of single stepping) or use
    the Instant Watch command for a detailed view of program flow and variable
    values.

    Clear a breakpoint on the current cursor line by selecting Toggle
    Breakpoint again.

    Shortcut Key

    F9

    See Also

    Section 17.3.2, "Breakpoints and Watchpoints"; Section 18.9, "Clear All
    Breakpoints Command"


18.9  Clear All Breakpoints Command

    The Clear All Breakpoints command removes all breakpoints in a program.
    Remove individual breakpoints (while leaving others in place) with the
    Toggle Breakpoint command.

    You typically use the Clear All Breakpoints command when you know a
    section of program code runs properly.

    See Also

    Section 17.3.2, "Breakpoints and Watchpoints"; Section 18.8, "Toggle
    Breakpoint Command"


18.10  Break on Errors Command (Full Menus Only)

    The advanced debugging command Break on Errors allows you to trace an
    error-causing statement in a program that uses error handling. When
    toggled on (indicated by a bullet beside the command), Break on Errors
    sets an implicit breakpoint after the label specified in the most recently
    executed error-handling (ON ERROR) statement. If you do not use error
    handling, you will not need this command.

    When an error occurs in a program with error handlers, QuickBASIC routes
    execution to the label specified in the appropriate ON ERROR statement. If
    there is no ON ERROR statement that explicitly addresses the type of error
    QuickBASIC encounters, finding the source of the error can be difficult.
    Break on Errors solves this error-finding problem.

    The Break on Errors command enables History On and records the statement
    that caused the error. Choosing History Back (SHIFT+F8) shows you the
    error-causing statement.

    In the following program fragment, an error occurs at the line Y=5/X. This
    example demonstrates how QuickBASIC uses Break on Errors to stop after the
    label specified in the most recent ON ERROR statement:

    ON ERROR GOTO  FirstHandler  'First error handler
    ON ERROR GOTO  NextHandler   'Second error handler
    ON ERROR GOTO  LastHandler   'Third and last error handler
    .
    X = 0
    Y = 5/X
    .
    LastHandler:  'Label in most recently executed error handler
    .             'QuickBASIC stops immediately after label
    .

    With Break on Errors on, an error transfers program flow to LastHandler
    and execution stops. History Back will now show you the statement that
    caused the error.

    See Also

    Section 18.7, "History On Command"


18.11  Set Next Statement Command

    When you want to skip over or rerun a section of a program, halt
    execution, then use the Set Next Statement command.

    The Set Next Statement command changes program execution sequence so that
    the next statement executed is the one at the cursor. QuickBASIC ignores
    any intervening program code. Use the Set Next Statement command with
    care; skipping code can lead to undefined variables and result in errors.

    The effect of the Set Next Statement command is similar to that of a GOTO
    statement, and the same restrictions apply. For example, you cannot branch
    to the middle of a procedure from the module level of a program.

    Note that the Next Statement command on the View menu moves the cursor to
    the next statement to be executed when the program continues to run, while
    the Set Next Statement command on the Debug menu allows you to establish
    (set) the next statement to be executed. Next Statement is used to
    indicate which statement will execute next if no changes are made; Set
    Next Statement allows you to alter this by choosing a new resumption point
    for program execution.

    See Also

    Section 14.4, "Next Statement Command"



────────────────────────────────────────────────────────────────────────────
Chapter 19  The Calls Menu (Full Menus Only)

    The Calls menu is an advanced feature that shows all of the procedure
    calls that led to the current execution location. It lets you do the
    following:

    ■ See the sequence of nested procedure calls your program executed in
    order to arrive at the current procedure.

    ■ Continue your program from the point execution stopped to any listed
    procedure.

    Use the Calls menu to see which procedures execution passed through.
    During debugging, you can use the Calls menu and single stepping
    (described in Section 17.3.6, "Other Debugging Features") together to
    execute up to an error, recreating the same variable values and conditions
    that led to a program crash.

    If your procedures do not call other procedures, the Calls menu shows only
    the name of the main module and any currently executing procedure. In any
    program, the Calls menu displays only the program name prior to running.


19.1  Using the Calls Menu

    The Calls menu shows calls between procedures. The following example
    illustrates the use of the Calls menu for both debugging and executing.

    Suppose you want to write a program to draw histograms (bar charts) on the
    screen, and you want your user to specify the fraction of the screen the
    chart will fill. Since you believe strongly in the use of structured
    programming, you break the process into several procedures.

    Your main module prompts your user for data and then calls a procedure
    DrawHisto to draw the chart. DrawHisto then sends the task of drawing the
    chart's bars to a separate procedure, DrawBars. Since the number of bars
    in the chart can vary (depending on the data your user entered), DrawBars
    farms out the job of calculating how wide each bar will be to the
    procedure CalcBarWidth. However, before CalcBarWidth can determine how
    wide each bar needs to be, it needs to know the width of the histogram.
    So, CalcBarWidth calls the procedure CalcHistoWidth which calculates the
    width of the screen to be used in the histogram.

    During execution, DrawHisto calls DrawBars, DrawBars calls CalcBarWidth,
    and CalcBarWidth calls CalcHistoWidth. If your program stops running
    inCalcHistoWidth, the Calls menu items appear in the order shown in Figure
    19.1.


    ┌──────────────────────────────────────────────────────────────────────────
    │
    │  ┌───────┐
    │  │ Calls │
    │  ├───────┴────────┐
    │  │ CalcHistoWidth─┼─────Procedure in which the program stopped running
    │  │ CalcBarWidth   │
    │  │ DrawBars       │
    │  │ DrawHisto      │
    │  │ HISTOGRM.BAS───┼─────Location of first call
    │  └────────────────┘
    │
    │  HISTOGRM.BAS─→DrawHisto─→DrawBars─→CalcBarWidth─→CalcHistoWidth
    │
    └──────────────────────────────────────────────────────────────────────────

    Figure 19.1  Sequence of Procedures on Calls Menu

    The Calls menu provides you with a "trail" you can follow to understand
    how your program executed to the CalcHistoWidth procedure; it is
    particularly valuable when your program stops in a series of deeply nested
    procedures (as in the histogram example). The order of the items in the
    Calls menu tells you the order in which the procedures were called; the
    item at the top of the list was called by the second item, the second item
    was called by the third item, the third item was called by the fourth
    item, etc. The first menu item is the one that was most recently executed.

    When a procedure crashes, the Calls menu gives you the sequence of
    procedures that led to the crash.

    Suppose the program you write to draw histograms (described earlier in
    this section) crashes in the CalcHistoWidth procedure. The Calls menu can
    help you continue the program or recreate the conditions that led to the
    crash.

    To continue the program through the rest of the CalcHistoWidth procedure,
    follow these steps:

    1. Use the Immediate window to change any variables necessary to allow the
        program to run (that is, correct the error that caused the program to
        crash).

    2. Choose CalcBarWidth from the Calls menu and press ENTER. This places
        the CalcBarWidth procedure in the View window, with the cursor on the
        line just after the line that called CalcHistoWidth.

    3. Press F7. This runs the program from the current execution point (the
        statement where the program crashed) to the current cursor location
        (just after the call to CalcHistoWidth). The remaining code is executed
        in the CalcHistoWidth procedure and stops executing at the cursor in
        CalcBarWidth.

    4. Use the Watch window, Immediate window, or Instant Watch command to
        verify that the variables have the values you desire, or use the Output
        Screen command to check any screen changes. Either way, you can verify
        that the program──with the changes you made in step 1──now runs
        properly.

    To recreate the conditions that led to the crash:

    1. Move the cursor to the beginning of the program and choose the Set Next
        Statement command on the Debug menu. This prepares the program to run.

    2. Choose CalcBarWidth in the Calls menu and press ENTER. QuickBASIC
        displays the CalcBarWidth procedure, with the cursor on the line below
        the call to CalcHistoWidth. Move the cursor to the line above the call
        to CalcHistoWidth.

    3. Press F7. This runs the program from the current execution point (the
        first executable statement in the program) to the current cursor
        location.

    4. Single step (press F8) from CalcBarWidth into CalcHistoWidth until you
        find the error-causing statement.

    5. Use the Instant Watch command or other debugging techniques to resolve
        the error.

    In complex programs, using the Calls menu can simplify debugging.


19.2  Active Procedures

    The procedure at the top of the Calls menu is the currently active
    procedure. The one directly below it is the procedure that called the
    active procedure (and the one to which control returns when QuickBASIC
    leaves the active procedure). You can execute your program to any
    procedure in the Calls menu by choosing the procedure's name and pressing
    F7.

    Consider the procedures shown in Figure 19.1. Since CalcBarWidth is
    high-lighted, pressing ENTER and then F7 executes code from the beginning
    of the program to the statement in CalcBarWidth that follows the call to
    CalcHistoWidth. Note that QuickBASIC tracks only the most recent execution
    with the Calls menu, so that DrawBars would now be at the top of the list
    and CalcBarWidth and CalcHistoWidth would be removed (they were not
    involved in the most recent program execution).

    The Calls menu is a "stack" in that it displays the most recently called
    procedure on the top of the list. The Calls menu displays only the eight
    most recent procedures; any deeper nesting is not displayed until you
    start executing to return through the sequence of procedure calls.

    You can experiment with the characteristics of the call stack using the
    Fibonacci example at the end of Section 18.1, "Add Watch Command."
    Because the Fib procedure is recursive, the number you enter at the prompt
    determines the depth of the call stack and the number of procedures in the
    Calls menu. After interrupting execution (either by using a watchpoint or
    pressing CTRL+BREAK), you can display the Calls menu and use the methods
    described above to see the different iterations of the Fib procedure.
    Since the procedure is recursive, all the procedure names are identical.
    Each one listed represents another instance of the call.



────────────────────────────────────────────────────────────────────────────
Chapter 20  The Options Menu

    The Options menu controls some of QuickBASIC's special features, including
    those that customize the QuickBASIC screen, set default search paths,
    determine the function for the right mouse button, toggle syntax checking
    off and on, and switch between Full Menus and Easy Menus.

    The Option menu commands are listed below:

    ■ Display. Customizes the appearance of the QuickBASIC environment
    (colors, scroll bars, tab stops).

    ■ Set Paths. Sets default search paths depending on file type.

    ■ Right Mouse. Changes effect of clicking the right mouse button (Full
    Menus only).

    ■ Syntax Checking. Toggles syntax checking on and off (Full Menus only).

    ■ Full Menus. Toggles Full Menus on and off.

    When you alter the QuickBASIC environment, either by starting QuickBASIC
    with a command-line option (described in Section 10.1.1, "The QB
    Command") or by using the Options menu, QuickBASIC saves your
    modifications in a file that is called QB.INI. If the file already exists
    when you make changes, it is updated; if it does not exist, QuickBASIC
    creates it. QuickBASIC uses its default settings in the absence of the
    QB.INI file.


20.1  Display Command

    When you choose the Display command, the Display dialog box appears. It
    allows you to set the background color, foreground color, and the number
    of spaces the TAB key advances the cursor in the View window. The dialog
    box also lets you decide whether or not scroll bars appear in the View
    window. See Figure 20.1.


    Types of text to change              Color options for        Color options
    │                                   foreground text          for backgroun
    ┌┼─────────────────────────────── Display ──┼──────────────────────────┼───
    ││ ┌────────────────────────────── Colors ──┼──────────────────────────┼┐
    ││ │                                        │  Foreground   Background ││
    ││ │                                        │ ┌─────────┐  ┌─────────┐ ││
    ││ │ ┌(∙) 1.  Normal Text                   │┌┼─Black   ↑  │ Black   ↑┐││
    ││ │ │                                      └┤│ White   ▒  │ White   ▒├┘│
    │└─┼─┤( ) 2.  Current Statement              ││ Gray    ▒  │ Gray    ▒│ │
    │  │ │                                       └┼─BrWhite ▒  │ BrWhite ▒┘ │
    │  │ └( ) 3.  Breakpoint Lines                │         ▒  │         ▒  │
    │  │                                          │         ▒  │         ▒  │
    │  │                                          │         ▒  │         ▒  │
    │  │                                          │         ↓  │         ↓  │
    │  │                                          └─────────┘  └─────────┘  │
    │  │                                                                    │
    │  └────────────────────────────────────────────────────────────────────┘
    │
    │  ┌───────────────────────── Display Options ──────────────────────────┐
    │  │    [X] Scroll Bars                             Tab Stops: 8        │
    │  └─────┼─────────────────────────────────────────────────────┼────────┘
    ├────────┼─────────────────────────────────────────────────────┼───────────
    │        │     < OK >           < Cancel >           < Help >  │
    └────────┼─────────────────────────────────────────────────────┼───────────
    Turn scroll bars on when checked      Number of spaces the TAB key advances

    Figure 20.1  Display Dialog Box

    Follow these steps to change the background and foreground colors:

    1. Move the cursor to the parentheses preceding the color setting you want
        to change (Normal Text, Current Statement, or Breakpoint Lines).

    2. Press TAB. The cursor moves to the Foreground Color list box. Use the
        DIRECTION keys to select the new foreground color for the item you
        chose in step 1. The list box item you have selected changes to reflect
        the colors you choose.

    3. Press TAB again to move to the Background Color list box, then repeat
        the color selection process in step 2 for the background color.

    4. Press ENTER.

    QuickBASIC now reflects your changes.

    The Display Options portion of the Display dialog box controls the scroll
    bar and TAB key settings. You can turn the View window's scroll bars on
    and off by pressing the SPACEBAR when your cursor is in the Scroll Bars
    check box (the default setting is "on"). The Tab Stops option controls the
    number of spaces the TAB key advances the cursor. Use the setting you find
    most helpful for improving the readability of your programs.


20.2  Set Paths Command

    The Set Paths command changes the default search paths for specified types
    of files.

    You may want to keep all files of a particular type within a single
    directory for organizational purposes. For example, you might wish to keep
    all of QuickBASIC's libraries and any of your own Quick libraries within a
    specific subdirectory or subdirectories of your QuickBASIC disk or
    directory. Since the environment requires access to its libraries, you
    would ordinarily need to provide a path name for each library used.

    The Set Paths dialog box lets you type in a search path (up to 127
    characters) for your files. This saves you from fully qualifying each path
    name every time you access a library or other files not in the current
    working directory.

    For example, suppose you keep all of your include files and programs in a
    directory named QB──BI, which is in a directory named QB──45 on a disk in
    your A drive. You would take the following steps to direct QuickBASIC to
    automatically look in that directory any time it searched for a file with
    the .BI or .BAS extension:

    1. Choose the Set Paths command on the Options menu. A dialog box appears.

    2. Press the TAB key to move the cursor to the Include files text box.

    3. Type in the path name:

        A: QB──45QB──BI

        See Figure 20.2.


                                            Path to directory
                                            containing files
                                                    │
        ┌───────────────────────────── Set Paths ───┼───────────────────────────
        │  Search Path For:                         │
        │ ┌─                 ┌──────────────────────┼───────────────────────────
        │ │Executable files: │                      │
        │ │ (.EXE, .COM)     └──────────────────────┼───────────────────────────
        │ │                                         │
        │ │                  ┌──────────────────────┼───────────────────────────
        │ │Include files:    │A;\QB_45\QB_BI ───────┘
        │ │ (.BI, .BAS)      └──────────────────────────────────────────────────
        │┌┤
        │││                  ┌──────────────────────────────────────────────────
        │││Library files:    │
        │││ (.LIB, .QLB)     └──────────────────────────────────────────────────
        │││
        │││                  ┌──────────────────────────────────────────────────
        │││Help file:        │
        ││└─(.HLP)           └──────────────────────────────────────────────────
        ├┼──────────────────────────────────────────────────────────────────────
        ││            < OK >            < Cancel >            < Help >
        └┼──────────────────────────────────────────────────────────────────────
        │
        File types

        Figure 20.2  Set Paths Dialog Box

    4. Press ENTER.

    ──────────────────────────────────────────────────────────────────────────
    NOTE
    The search paths you enter in the Set Paths dialog box do not change
    paths or environment variables previously set at the DOS level with the
    DOS PATH and SET commands. However, paths set with Set Paths are in
    effect whenever you are using QuickBASIC.
    ──────────────────────────────────────────────────────────────────────────


20.3  Right Mouse Command (Full Menus Only)

    The Right Mouse command lets you change the effect of clicking the right
    mouse button.

    When you choose the Right Mouse command, the dialog box in Figure 20.3
    appears.


                                Functions for
                                right mouse button
    ┌─────────────── Right Mouse ──────────┼─────┐
    │                                      │     │
    │  On right mouse button click:        │     │
    │                                  ──┐ │     │
    │        (∙) Context-sensitive Help  │ │     │
    │                                    ├─┘     │
    │        ( ) Execute up to this line │       │
    │                                  ──┘       │
    ├────────────────────────────────────────────┤
    │     < OK >     < Cancel >     < Help >     │
    └────────────────────────────────────────────┘

    Figure 20.3  Right Mouse Dialog Box

    The Right Mouse dialog box lets you select one of two functions for the
    right mouse button:

    ■ Invoking on-line help (same function as the Topic command on the Help
    menu). This is the default setting.

    ■ Executing the program from the beginning of the program to the current
    cursor location.

    Both functions have advantages in different situations. You may find the
    Help function more useful when you are writing your program, especially if
    you are new to QuickBASIC. During debugging, you may find the execution
    feature more valuable.

    If you use the Context-sensitive Help option, remember that the subject of
    the help is the word containing the cursor.


20.4  Syntax Checking Command(Full Menus Only)

    The Syntax Checking command on the Options menu toggles automatic syntax
    checking on and off.

    QuickBASIC defaults to the "on" setting, indicated by a bullet (■) next to
    the command. To turn syntax checking off, choose the Syntax Checking
    command; the bullet disappears. QuickBASIC records your options when you
    quit. If you exit QuickBASIC with syntax-checking off, it will remain off
    the next time you start QuickBASIC.

    When on, this feature checks the syntax of each line when it is entered.

    See Also

    Section 12.5.2, "Automatic Syntax Checking"


20.5  Full Menus Command

    The Full Menus command toggles QuickBASIC's extended menus on and off.
    When Full Menus is toggled on, a bullet (■) appears next to the command.

    You can use QuickBASIC's menus in either their "easy" or "full" form. In
    their easy form, the menus contain all of the functions necessary to
    create beginning to intermediate-level programs. Some advanced features do
    not appear under Easy Menus in order to simplify the use of the
    environment for programmers new to QuickBASIC. Full Menus include an
    additional item (the Calls menu) and more commands under each of the other
    menus. Once you are comfortable with QuickBASIC and need advanced
    features, use the Full Menus option.

    When you exit, QuickBASIC saves all of the options you have selected,
    including Display options, Search Paths, Syntax Checking, and Full Menus.
    When you next return to QuickBASIC your choices will still be active.



────────────────────────────────────────────────────────────────────────────
Chapter 21  The Help Menu

    Choosing commands on the Help menu is one way to access QuickBASIC's
    on-line help. (For information on other methods of accessing on-line help,
    see Section 10.8, "Using Help.")

    The Help menu contains the following commands:

    ■ Index. Displays an alphabetical list of QuickBASIC keywords and a brief
    description of each.

    ■ Contents. Displays a visual outline of the on-line help contents.

    ■ Topic. Provides syntax and usage information on specific variables and
    QuickBASIC keywords.

    ■ Help On Help. Describes how to use on-line help and common keyboard
    shortcuts.


21.1  Index Command

    The Index command displays an alphabetical list of the QuickBASIC
    keywords. To receive information on a particular keyword, move the cursor
    to the line containing that keyword and press F1. QuickBASIC displays the
    Help window for that keyword.

    You can scroll through the keyword list or jump directly to a specific
    letter in the list. For example, if you type G, QuickBASIC moves the
    cursor to GET, the first keyword beginning with the letter "G." See Figure
    21.1.


    ┌──────────────── HELP: QuickBASIC Language Keyword Index ────────────┤↑├──
    │                                                               ╔═══╗
    │═══════════════════════════════════════════════════════════════╣ G ║
    │                                                               ╚═══╝
    │    GET Statement
    │    GOSUB Statement
    │    GOTO Statement
    │                                                               ╔═══╗
    ╞═══════════════════════════════════════════════════════════════╣ H ║
    │                                                               ╚═══╝
    │    HEX$ Function
    │                                                               ╔═══╗
    ╞═══════════════════════════════════════════════════════════════╣ I ║
    │←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒→

    Figure 21.1  Index Entries for Help

    See Also

    Section 21.3, "Topic Command"


21.2  Contents Command

    The Contents command displays a table of contents for on-line help. It
    provides hints on using the QuickBASIC environment and the BASIC language,
    along with useful tables. From here you can transfer to the subject that
    interests you. See Figure 21.2.


        File  Edit  View  Search  Run  Debug  Calls  Options              Help
    ┌──────────────────────── HELP: Table of Contents ────────────────────┤↑├──
    │  ◄Help on Help►  ◄Contents►  ◄Index►  ◄Product Support►  ◄Copyright►
    │──────────────────────────────────────────────────────────────────────────
    │◄Using QuickBASIC►                   ◄BASIC Programming Language►
    │
    │     ◄Shortcut Key Summary►               ◄Functional Keyword Lists►
    │         ◄Edit Keys►                      ◄Syntax Notation Conventions►
    │         ◄View Keys►
    │         ◄Search Keys►                    ◄Fundamental Building Blocks►
    │         ◄Run and Debug Keys►             ◄Data Types►
    │         ◄Help Keys►                      ◄Expressions and Operators►
    │                                          ◄Modules and Procedures►
    │     ◄Limits to QuickBASIC►               ◄Programs►
    │     ◄VErsion 4.5 Differences►
    │                                          ◄ASCII Character Codes►
    │     ◄Survival Guide►                     ◄Keyboard Scan Codes►
    │
    │←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒→

    Figure 21.2  Table of Contents for Help

    For detailed information on a particular topic, place your cursor on the
    topic and press F1. QuickBASIC displays on-line help on that topic.

    For example, the Table of Contents window shows several entries under
    "Using QuickBASIC." If you move the cursor to "Editing keys" and press F1,
    a screen appears with the most frequently used editing shortcut keys.


21.3  Topic Command

    The Topic command provides specific information on the syntax and usage of
    the QuickBASIC variable, symbol, keyword, menu, command, or dialog box at
    or containing the cursor. When the Topic command is active, the subject on
    which it will provide on-line help appears after the word Topic. Choosing
    the Topic command is the same as pressing F1.

    You can get help on any keyword or variable at any time by typing the word
    or name and immediately choosing the Topic command.

    If you choose the Topic command whenever you encounter a syntax error, you
    can immediately correct the usage of your statement. For example, suppose
    you enter the line below, which is missing the word TO and instead
    contains a comma:

    FOR i% = 1,10

    QuickBASIC flags the syntax error with the message Expected: TO. Press F1
    or the Help button for help on the error itself. For information on the
    keyword FOR, move the cursor to the FOR statement and choose the Topic
    command. QuickBASIC keeps your program code visible at the bottom of the
    screen. See Figure 21.3.


        File  Edit  View  Search  Run  Debug  Calls  Options              Help
    ┌───────────────── HELP: FOR...NEXT Statement QuickSCREEN ────────────┤↑├──
    │  ◄QuickSCREEN►     ◄Detail►      ◄Example►      ◄Contents►     ◄Index►
    │──────────────────────────────────────────────────────────────────────────
    │FOR...NEXT - a control flow statement that repeats a block of
    │             statements a specified number of times
    │Syntax
    │  FOR counter = start TO and [STEP increment]
    │    [statements]
    │  NEXT [counter [,counter...]]
    │
    │  ■ counter is a numeric variable used as the loop counter
    │  ■ start is the initial value and end is the final value of the counter
    │  ■ increment is the amount the counter is incremented each time
    │    through the loop
    │
    │See Also  EXIT FOR  DO...LOOP  WHILE...WEND
    │
    ├──────────────────────────────── Untitled ───────────────────────────┤↑├──
    │FOR i% = 1,10
    │←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒→
    ├─────────────────────────────── Immediate ────────────────────────────────
    │
    │
    <Shift+F1=Help> <F6=Window> <F2=Subs> <F5=Run> <F8=Step>      C  00001:003

    Figure 21.3  Help on the FOR...NEXT Statement

    To copy sample code from the FOR help screen into your program, do the
    following:

    1. Choose the Example hyperlink at the top of the window.

    2. Select the example code and choose Copy from the Edit menu.

    3. Press ESC to close the Help window.

    4. Move the cursor to the place in your program you want the text to
        appear, and choose Paste from the Edit menu.

    You can customize the pasted code or use it as it is.

    Shortcut Key

    F1


21.4  Help On Help Command

    The Help on Help command describes how to use the QuickBASIC on-line help
    system.

    The Help on Help screen gives a description of the main help features. For
    more specific information, press ESC to exit Help on Help, and use the
    Topic command on the Help menu or press F1.


        File  Edit  View  Search  Run  Debug  Calls  Options              Help
    ┌─────────────────────────── HELP: Help on Help ──────────────────────┤↑├──
    │  ◄Help on Help►  ◄Contents►  ◄Index►  ◄Product Support►
    │──────────────────────────────────────────────────────────────────────────
    │  Use Help as follows:
    │
    │    ■ To get help anytime, press F1 or click the right mouse button.
    │    ■ To get help on any part of a BASIC statement, a QuickBASIC menu item
    │      or dialog box, position the cursor there press F1.
    │    ■ To remove the help information from the screen, press ESC.
    │    ■ To scroll help information, press PGDN.
    │
    │  Look for the help display in either
    │    ■ The Help window at the top of the screen
    │    ■ A dialog box which pops up in the center of the screen
    │
    │←▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒→

    Figure 21.4  Help on Help Screen

    Shortcut Key

    SHIFT+F1



────────────────────────────────────────────────────────────────────────────
Glossary

    The purpose of this glossary is to define unique terms used in all the
    manuals that accompany QuickBASIC Version 4.5. Neither the individual
    definitions nor the list of terms is intended to be a comprehensive
    dictionary of computer-science terminology.

8087, 80287, or 80387 coprocessor   Intel(R) hardware products dedicated to
    very fast number processing.

absolute coordinates  Horizontal and vertical distances from the screen's
    upper-left corner, which has the coordinates (0,0). Absolute coordinates
    are measured in pixels. See also "physical coordinates."

address  A location in memory.

algorithm  A step-by-step procedure for solving a problem or computing a
    result.

animation  A QuickBASIC debugging feature in which each line in a running
    program is highlighted as it executes. The Trace On command from the
    Debug menu turns on animation.

argument  A data item supplied to a BASIC statement, function, procedure, or
    program. In the following example, the string "Hello" is an argument to
    the BASIC statement PRINT: "Hello". An argument may be a constant or a
    variable. Arguments are often used to pass information from one part of
    a program to another. Use the COMMAND$ function to make DOS command line
    arguments available to the programs.

arithmetic conversion   Converting numbers between integral and
    floating-point types.

array   A sequentially numbered set of elements with the same type.

array bounds   The upper and lower limits of the dimensions of an array.

ASCII (American Standard Code for Information Interchange)  A set of 256
    codes that many computers use to represent letters, digits, special
    characters, and other symbols. Only the first 128 of these codes are
    standardized; the remaining 128 are special characters that are defined
    by the computer manufacturer.

aspect ratio  The ratio of a video screen's width to its height. This term
    is also frequently used to describe pixels. If you think of a pixel as
    being rectangular, its aspect ratio would be the ratio of its width to
    height. A typical IBM PC display has an aspect ratio of about 4:3.

assignment  The process of transferring a value to a variable name. The
    statement X = 3 assigns x a value of 3.

attributes  Color, intensity, blinking, and other displayed characteristics
    of characters or pixels.

automatic variable  A variable in a SUB or FUNCTION procedure whose value is
    not saved between invocations of the procedure. Automatic variables are
    frequently used in recursive procedures where you do not want values
    saved between calls.

base name  The part of a file name before the extension. For example, SAMPLE
    is the base name of the file SAMPLE.BAS.

binary  A mathematical term referring to the base-two numbering system,
    which uses only two digits: 0 and 1.

binary file  In input/output operations, files or data that contain
    nonprinting characters as well as ordinary ASCII characters. Binary file
    access is the ability to access any byte within a file, treating it as a
    numeric value rather than as text.

BIOS (Basic Input/Output System)  Machine-language programs built into a
    computer. These programs provide the lowest level of operations in a
    computer system. You can use the BIOS programs directly with the
    INTERRUPT and CALL INTERRUPTX statements.

bit  The smallest unit of information used with computers; corresponds to a
    binary digit (either 0 or 1). Eight bits make up one byte.

block  A sequence of declarations, definitions, and statements.

breakpoint  A specified location where program execution will halt during
    debugging. See "watchpoint" for a description of variable breakpoints.

byte  The unit of measure used for computer memory and data storage. One
    byte contains eight bits and can store one character (a letter, number,
    punctuation mark, or other symbol).

call by reference  See "pass by reference."

call by value   See "pass by value."

CGA (Color Graphics Adapter)   A video adapter capable of displaying text
    characters or graphics pixels. Color can also be displayed with the
    appropriate display monitor.

character string  A group of characters enclosed in quotation marks ( " " ).

check box  A pair of brackets on a QuickBASIC dialog box where you turn an
    option on or off. An X appears in the box when the option is on.

choose  To carry out a command by performing an action such as using a
    command button from a dialog box or an item from a menu.

click  To press and release one of the mouse buttons (usually while pointing
    the mouse cursor at an object on the screen).

Clipboard  A storage area that holds copied or cut text. Text does not
    accumulate in the Clipboard: new text added to the Clipboard replaces
    any text that was already there. You can use the Paste command to insert
    text from the Clipboard into a file.

communications port  See "port."

compile  To translate statements into a form that the computer can execute.

compiler  A program that translates statements into a language understood by
    the computer.

constant  A value that does not change during program execution.

current directory  The directory in which DOS looks for files unless
    otherwise instructed.

current drive  The drive containing the disk on which DOS looks for a
    directory or file unless otherwise instructed.

cursor  The blinking line or box on the screen. The cursor indicates the
    current location where text from the keyboard will appear.

data  The numbers and text processed by a computer in doing its work.

data file  A file that contains the data used or generated by a program;
    data can be numbers, text, or a combination of the two.

debugger  A program that helps to locate the source of problems discovered
    during run-time testing of a program.

declaration  A construct that associates the name and characteristics of a
    variable, function, or type.

DEF FN function  The object defined by a single-line DEF FN statement or by
    a DEF FN...END DEF block. (A FUNCTION procedure is generally preferred
    to a DEF FN function because a procedure is more portable and modular.)

default  A setting that is assumed unless you specify otherwise.

default data type  The type that BASIC uses for data unless you use a
    DEFtype statement to specify otherwise. The default type for numeric
    data is single precision.

DEFtype  A name used in these manuals for the group of BASIC statements that
    redefine a program's default variable type (DEFDBL, DEFINT, DEFLNG,
    DEFSNG, DEFSTR).

device  A piece of computer equipment, such as a display or a printer, that
    performs a specific task.

device name  The name by which DOS refers to a device (for example, PRN,
    LPT1, LPT2, or LPT3 for a printer). Device names are treated like file
    names by DOS.

dialog box  A box that appears when you choose a menu command that requires
    additional information.

dimension  The number of subscripts required to specify a single array
    element. For instance, the statement DIM A$(4,12) declares a
    two-dimensional array, while DIM B$(16,4,4) declares a three-dimensional
    array.

DIRECTION keys  A set of keys, found on many computer keyboards, that move
    the cursor left, right, up, or down on the screen. These keys usually
    have arrows on their key tops.

directory  The index of files that DOS maintains on a disk.

document  A way of classifying a file as text when you load it into the
    QuickBASIC editor. Loading a file as a document turns off syntax
    checking, capitalization of keywords, and other smart-editor features.
    You can load a BASIC program as a document if you want to edit it as you
    would with a word processor.

double click  To press the mouse button twice quickly (usually while
    pointing the mouse cursor at an object on the screen).

double precision  A real (floating-point) value that occupies eight bytes of
    memory. Double-precision values are accurate to 15 or 16 digits.

drag  Pointing the mouse cursor at an object on the screen and pressing a
    mouse button, then moving the mouse while holding the button down. The
    object moves in the direction of the mouse movement. When the item is
    where you want it, release the button.

dynamic array  An array whose memory location is allocated when the program
    runs. The locations are not predetermined and can change during the
    course of program execution.

EGA (Enhanced Graphics Adapter)  A video adapter capable of displaying in
    all the modes of the color graphics adapter (CGA) and many additional
    modes. The EGA supports both text and graphics at medium resolution in
    up to 64 colors.

emulator  A floating-point math package that uses software to perform the
    same operations as a hardware math coprocessor.

enabled event  An event for which QuickBASIC actively checks. Events are
    enabled by the ON event statements.

event  An action the computer can be programmed to detect. Events include
    items such as mouse clicks, menu selections, keyboard activity, and time
    passage.

event trapping  To detect and respond to events, for example, to branch to
    an appropriate routine.

executable file  A file with the extension .EXE, .COM, or .BAT. Executable
    files can be run by typing the file name at the DOS prompt.

execute  To run a program or carry out a specific statement in the Immediate
    window.

exponentiation  The raising of a number x to a power y; the number x is
    multiplied by itself y times. For example, 2^3 is 2 * 2 * 2, or 2 raised
    to the power of 3.

expression  A combination of operands and operators that yields a single
    value.

extension  The part of a file name following the period. For example, .DAT
    is the extension in the file name TEST.DAT.

far address  A memory location specified by using a segment (a location of a
    64K block) and an offset from the beginning of the segment. Far
    addresses require four bytes──two for the segment, and two for the
    offset. A far address is also known as a segmented address.

file buffer   An area in memory in which temporary data are stored.
    QuickBASIC keeps a copy of the file in a buffer and changes it as you
    edit. This buffer is copied to disk when you save the file.

filespec  The complete specification of a file. The filespec can include a
    drive letter, path name, file name, and extension.

flags register  A register containing information about the status of the
    central processing unit and the last operation performed.

floating point  Notation, similar to scientific notation, that is a
    convenient method for expressing very large numbers, very small numbers,
    or numbers with fractions. A floating-point number has two parts: an
    exponent and a fractional part known as the mantissa. See "IEEE format."

formal parameters  Variables that receive the arguments passed to a function
    or subprogram. See "parameter."

FUNCTION  A block of statements beginning with FUNCTION and ending with END
    FUNCTIONthat defines a procedure. FUNCTION procedures can be used
    instead of the DEF FN functions used in older forms of BASIC.

function declaration  A declaration that establishes the name and type of a
    function. The function itself is defined explicitly elsewhere in the
    program.

function definition  A statement block that specifies a function's name, its
    formal parameters, and the declarations and statements that define what
    it does (i.e., carry out the function).

global constant  A constant available throughout a program. Symbolic
    constants defined in the module-level code are global constants.

global symbol  A symbol available throughout a program. Function names are
    always global symbols. See also "symbol" and "local symbol."

global variable  A variable available throughout a program. Global variables
    can be declared in COMMON, DIM, or REDIM statements by using the SHARED
    attribute.

heap  An area of random-access memory used by BASIC to store, among other
    things, variables and arrays.

hexadecimal  The base-16 numbering system whose digits are 0 through F (the
    letters A through F represent the digits 10 through 15). Hexadecimal
    numbers are often used in computer programming because they are easily
    converted to and from binary, the base-2 numbering system the computer
    itself uses.

highlight  A reverse-video area in a text box, window, or menu marking the
    current command chosen or the text that has been selected for copying or
    deleting.

hyperlink  A link between two related pieces of information. Hyperlinks
    appear between two triangles in help screens.

I/O redirection  See "redirect."

IEEE format  An international standard method of representing floating-point
    numbers in the computer's hardware. IEEE format gives more accurate
    results than the Microsoft Binary format used in earlier versions of
    QuickBASIC and makes it easier to use a math coprocessor. The acronym
    IEEE stands for Institute of Electrical and Electronics Engineers, the
    organization that developed this standard. See "floating point."

Immediate window  The area at the bottom of the QuickBASIC screen used to
    enter statements and execute them immediately.

include file  A text file that is translated into a program with the
    $INCLUDE metacommand.

input/output (I/O)  A term that refers to the devices and processes involved
    in the computer's reading (input) and writing (output) data.

input  The data that a program reads.

insert mode  A mode for inputting data to the QuickBASIC environment. In
    this mode, you can insert new characters rather than replace characters
    already in the file as they are entered.

integer  A whole number represented inside the machine as a 16-bit two's
    complement binary number. An integer has a range of -32,768 to +32,767.
    See "long integer."

interface  The boundary between two systems or entities, such as a disk
    drive and the computer, or the user and a program.

interpreter  A program that translates and executes one BASIC statement at a
    time. An interpreter translates a statement every time it executes the
    statement. BASICA is a language interpreter. By comparison, a compiler
    translates all statements prior to executing any.

keyword  The name of a BASIC statement, function, or operator. Examples of
    keywords are MOD, OPEN, OR, PRINT, and SIN.

label  An identifying string that marks, precedes, or denotes a specific
    location in a program. Labels are used by GOTO statements.

link  To resolve references among the modules in a program and from the
    program to library routines. The link step results in a complete program
    ready for execution.

list box  A box that lists a series of items. For example, the box that
    lists files in the Open Program dialog box is a list box. See also
    "dialog box."

local constant  A constant whose scope is limited to a particular unit of
    code, such as the module-level code, or a procedure within a module. All
    constants defined in CONST statements inside a procedure are local
    constants. See "global constant."

local symbol  A symbol that has value only within a particular function. A
    function argument or a variable declared as static within a function can
    be a local symbol. See also "global symbol."

local variable  A variable whose scope is confined to a particular unit of
    code, such as the module-level code, or a procedure within a module. All
    variables in a procedure are local unless they appear in a SHARED
    statement within the procedure, or in a COMMON SHARED, DIM SHARED, or
    REDIM SHARED statement at the module level of the module containing the
    procedure definition. See "global constant."

logical device  A symbolic name for a device that the user can cause to be
    mapped to any physical (actual) device.

long integer  A whole number represented inside the machine by a 32-bit
    two's complement value. Long integers have a range of -2,147,483,648 to
    +2,147,483,647. See "integer."

LPT1, LPT2, LPT3  Abbreviations for line printer. The names refer to the
    three ports to which parallel printers can be attached.

main module  The module containing the first executable statement (the
    program's entry point). See "module."

math coprocessor  An optional hardware component, such as an 8087, 80287, or
    80387 chip, that improves the speed of floating-point arithmetic.
    QuickBASIC automatically takes advantage of a math coprocessor if it is
    present, or emulates it in software if it is not. See "floating point."

MCGA (Multicolor Graphics Array)  A printed-circuit card that controls the
    display. The MCGA card, located in the system unit of a computer, shows
    both text and graphics at low to medium resolution in up to 256 colors.

MDA (Monochrome Display Adapter)  A printed-circuit card that controls the
    display. The MDA shows text only at medium resolution in one color.

menu bar  The bar at the top of the QuickBASIC display containing the menu
    titles.

metacommands  Special commands, enclosed in comments in a source file, that
    tell the compiler to take certain actions while it is compiling the
    program. For example, the $INCLUDE metacommand tells the compiler to
    translate statements found in a specified file. See "include file."

Microsoft Binary format  A method of representing floating-point numbers
    internally. Microsoft Binary format is used by versions of QuickBASIC
    prior to Version 3.0. See "floating point" and "IEEE format."

modular programming  An approach to programming in which the program is
    divided into functional blocks, each performing a specific task.

module  A section of program code that is stored in a separate file and can
    be separately compiled. Every program has at least one module (the main
    module).

module-level code  Program statements within any module that are outside
    a FUNCTION or SUB definition. Error- or event-handling code and
    declarative statements such asCOMMON, DECLARE, and TYPE can appear only
    at the module level.

mouse  A pointing device that fits under your hand and rolls in any
    direction on a flat surface. By moving the mouse, you move the mouse
    cursor in a corresponding direction on the screen.

mouse cursor  The reverse-video rectangle that moves to indicate the current
    position of the mouse. The mouse cursor appears only if a mouse is
    installed.

multidimensional array  An array of with more than one subscript, for
    example, x(5,35). A multidimensional array is sometimes referred to as
    an array of arrays.

near address  A memory location specified by using only the offset from the
    start of the segment. A near address requires only two bytes of memory.
    See also "far address."

null character  The ASCII character encoded as the value 0.

object file  A file (with the extension .OBJ) containing relocatable machine
    code produced by compiling a program and used by the linker to generate
    an executable file.

offset  The number of bytes from the beginning of a segment in memory to a
    particular byte in that segment.

operand  A constant or variable value that is manipulated in an expression.

operator  One or more symbols that specify how the operand or operands of an
    expression are manipulated.

output  The result of a program's processing, usually based on some form of
    input data.

output screen  The screen where output appears when you run a program in the
    QuickBASIC environment. The output screen is the same as it would be if
    you ran the debugged program outside of QuickBASIC.

overflow  An error condition that occurs when the value assigned to a
    numeric variable falls outside the allowable range for that variable's
    type.

overlay  Part of a program that is read into memory from disk only if and
    when it is needed.

palette  The displayable colors for a given video mode. The CGA mode
    operates with a set of predetermined palette colors. The EGA, MCGA, and
    VGA color modes operate with a redefinable palette of colors.

parallel port  The port to which the printer is usually attached.

parameter  A variable symbol in a DEF FN, FUNCTION, or SUB statement.
    Parameters are replaced by actual variables and values when you invoke
    the function or subprogram.

pass by reference  To transfer the address of an argument to a SUB or
    FUNCTION. Passing by reference allows a procedure to change the values
    of arguments passed to it.

pass by value  To transfer the value (rather than the address) of an
    argument to a SUB or FUNCTION.

path name  The complete specification that gives the location of a file. A
    path name usually includes a drive letter followed by a colon, one or
    more directory names, and a file name.

physical coordinates  The screen coordinates. The physical coordinates (0,0)
    refer to the upper-left corner of the screen, unless you have defined a
    graphics viewport with a VIEW statement, in which case (0,0) are the
    coordinates of the upper-left corner of the viewport. The range of the
    physical coordinates depends on the display adapter, the monitor, and
    the specifications set by the SCREEN statement. Units are pixels. See
    also "absolute coordinates" and "view coordinates."

place marker  A location in the program code to which you can return by
    pressing a control code.

pointer  See "mouse cursor."

port  An electrical connection through which the computer sends and receives
    data to and from devices or other computers.

precedence  The relative position of an operator in the hierarchy that
    determines the order in which expressions are evaluated.

procedure  A general term for a SUB or FUNCTION. See "FUNCTION" and "SUB."

procedure call  A call to a SUB or FUNCTION.

program  One or more modules linked together to form a complete set of
    executable instructions.

program step  To highlight and execute the next instruction.

prompt  A request displayed by the computer for you to provide some
    information or perform an action.

QB Advisor  The detailed, context-sensitive on-line help on the BASIC
    language.

Quick library  A file produced with the Make Library command or with the /Q
    option of the LINK command. A Quick library contains procedures for use
    in the QuickBASIC environment as the program is developed. Quick
    libraries were known in previous versions of QuickBASIC as user
    libraries; however, user libraries cannot be used as Quick libraries,
    and vice versa.

random-access file  A file that can be read or written in any order. See
    "sequential file."

read-only file  A file whose read-only attribute is set so that its contents
    can be displayed and read, but not changed.

record  A series of fields treated as a meaningful unit in a data file or a
    variable declared as having a user-defined type. See "user-defined
    type."

recursion  The practice of having a subprogram call itself; some algorithms
    can be coded quickly and efficiently by using recursion.

redirect  To specify a device (other than the default device) from which a
    program will receive input or to which it will send output. Normally
    program input comes from the keyboard, and program output goes to the
    screen.

reference bar  The line on the bottom of the QuickBASIC environment screen
    containing frequently used commands and keyboard shortcuts.

relational database  A database in which any field or record can be
    associated with any other field or record.

registers  Areas in the processor where data can be temporarily stored
    during machine-level processing. The registers used in the 8086-family
    of processors are: AX, BX, CX, DX, SP, BP, SI, DI, DS, ES, SS, CS, IP,
    and the flags register. See "flags register."

root directory  The main directory that DOS creates on each disk. The root
    directory is the top directory in a hierarchical file system.

run time  The time during which a program is executing. Run time refers to
    the execution time of a program, rather than to the execution time of
    the compiler or the linker. Some errors──known as run-time errors──can
    be detected only while the program is running.

run-time library  A file containing the routines required to implement
    certain language functions.

run-time module  A module containing most of the routines needed to
    implement a language. In QuickBASIC, the run-time module is an
    executable file named BRUN45.EXE and is, for the most part, a library of
    routines.

scope  The range of statements over which a variable or constant is defined.
    See "global constant," "global variable," "local constant," and "local
    variable."

scroll  To move text up and down, or left and right, to see parts that
    cannot fit within a single screen.

scroll bars  The bars that appear at the right side and bottom of the View
    window and some list boxes. Scroll bars allow you to scroll the contents
    of a View window or text box with the mouse.

segment  An area of memory, less than or equal to 64K, containing code or
    data.

select  To pick items, such as option buttons, in a dialog box. This verb
    also describes the action of highlighting areas of text or graphics to
    edit.

sequential file  A file that can be read or written only in order from first
    byte to last. See "random-access file."

serial port  The communications port (COM1, COM2, COM3, or COM4) to which
    devices, such as a modem or a serial printer, can be attached.

simple variable  A BASIC variable that is not an array. Simple variables can
    be of numeric, string, or user-defined types.

single precision  A real (floating-point) value that occupies four bytes of
    memory. Single-precision values are accurate to seven decimal places.

smart editor  Collective term for QuickBASIC's advanced editing features,
    including syntax checking, automatic keyword capitalization, and
    automatic procedure declaration.

source file  A text file containing BASIC statements. Although all modules
    are source files, not all source files are modules (include files, for
    example).

    QuickBASIC uses source files in two different formats. Source files
    saved in the QuickBASIC format load quickly but cannot be directly read
    or manipulated by an ordinary text editor. Source files saved as text
    files (ASCII files) can be read or changed by any text editor.

stack  An area of random-access memory used by BASIC to store data (e.g.,
    information), such as intermediate results of some arithmetic
    computations, automatic variables in procedures, and procedure
    invocation information.

stand-alone file  An executable file that can be run without a run-time
    file──a compiled program linked with BCOM45.LIB.

standard input  The device from which a program reads its input unless the
    input is redirected. In normal DOS operation, standard input is the
    keyboard.

standard output  The device to which a program sends its output unless
    redirected. In normal DOS operation, standard output is the display.

statement  A combination of one or more BASIC keywords, variables, and
    operators that the compiler or interpreter treats as a single unit. A
    BASIC statement can stand by itself on a single program line. The term
    statement refers to one-line statements such as OPEN or INPUT as well as
    entire multiline compound statements such as IF...END IF or SELECT
    CASE...END SELECT. Parts of compound statements such as ELSE or CASE are
    referred to as clauses.

static array  An array whose memory location is allocated when the program
    is compiled. The memory location of a static array does not change while
    the program runs.

stop bit  A signal used in serial communications that marks the end of a
    character.

string  A sequence of characters, often identified by a symbolic name. In
    this example, Hello is a string: PRINT "Hello". A string may be a
    constant or a variable.

SUB  A unit of code delimited by the SUB and END SUB statements. A SUB
    (usually called a SUB procedure) provides an alternative to the older
    BASIC GOSUB type of subroutine.

subprogram  See "SUB."

subroutine  A unit of BASIC code terminated by the RETURN statement. Program
    control is transferred to a subroutine with a GOSUB statement. (Also
    called a GOSUBblock.)

symbol  A name that identifies a location in memory.

symbolic constant  A constant represented by a symbol rather than the
    literal constant itself. Symbolic constants are defined using the CONST
    statement.

text  Ordinary, printable characters, including the uppercase and lowercase
    letters of the alphabet, the numerals 0 through 9, and punctuation
    marks.

text box  A box in which you type information needed to carry out a command.
    A text box appears within a dialog box.

text editor  A program that you use to create or change text files.

text file  A file containing text only.

tiling  The filling of a figure with a pattern (instead of a solid color) by
    using the graphics statement PAINT.

title bar  A bar, located at the top of a View window, that shows the name
    of the text file or module (and procedure, if appropriate) currently
    displayed in that window.

toggle  A function key or menu selection that turns a feature off, if it is
    on, or turns the feature on, if it is off. When used as a verb, toggle
    means to reverse the status of a feature. For example, the Trace On
    command on the Debug menu toggles tracing on or off.

two's complement  A type of base-2 notation used to represent positive and
    negative in which negative values are formed by complementing all bits
    and adding 1 to the results.

type  The numeric format of a variable. Types include integer, long integer,
    single precision, and double precision. Types may also be user-defined.

type checking  An operation in which the compiler verifies that the operands
    of an operator are valid or that the actual arguments in a function call
    are of the same types as the corresponding formal parameters in the
    function definition.

type declaration  A declaration that defines variable names as members of a
    particular data structure or type.

underflow  An error condition caused when a calculation produces a result
    too small for the computer to handle internally.

unresolved external  A procedure declared in one module, but not defined in
    another module that is linked with it. Unresolved external references
    are usually caused by misspellings or by omitting the name of the module
    containing the procedure from the LINK command line.

user-defined type  A composite data structure that can contain both string
    and numeric variables (similar to a C-language structure or Pascal
    record). User-defined types are defined with TYPE statements. The data
    structure is defined by a TYPE...END TYPE statement.

variable  A value that can──and usually does──change during program
    execution.

view coordinates  Pairs of numbers (for example, x and y) that uniquely
    define any point in two-dimensional space. The numbers x and y can be
    any real numbers. View coordinates can be mapped to the screen with the
    graphics WINDOW statement. View coordinates let you plot data using
    coordinates appropriate to the graph or picture without worrying about
    the actual screen coordinates. See "physical coordinates."

View window  The main editing window and the window into which programs
    load.

VGA (Video Graphics Array)  A printed-circuit card that controls the
    display. A VGA card shows both text and graphics at medium to high
    resolution in up to 256 colors.

Watch window  A window that displays information about variables or
    expressions that you are monitoring during program execution. For each
    watched item, the Watch window displays the item's originating location,
    its name, and its current value if the item is watchable.

watchable  A debugging term that describes whether a variable or expression
    can be watched in the current execution location. An item is watchable
    only during execution of the part of the program from which you entered
    the item in the Watch window.

watchpoint  An expression (such as X = 3) that stops program execution when
    it becomes true. Watchpoints can slow program execution. See
    "breakpoint."

wild card  One of the DOS characters (? and *) that can be expanded into one
    or more characters in file-name references.

window  An area on the screen used to display part of a file or to enter
    statements. Window refers only to the area on the screen, and does not
    refer to what is displayed in the area. The term window also refers to
    the portion of a view coordinate system mapped to the physical
    coordinates by the WINDOW graphics statement. See "Immediate window,"
    "View window,"and "Watch window."


────────────────────────────────────────────────────────────────────────────
Index


Symbols

. (dot) beside command
... (ellipsis dots) with menu item

Numbers

80287
80387
8087

A

Absolute coordinates
Active window
    changing
    changing size
    described
    line and column counters
    switching
Add Watch command
Address
    defined
    near
Advisor. See QB Advisor
Algorithms
ALT key
    described
ALT key
    dialog boxes, use in
    entering high-order ASCII characters
    menus and commands
Altering text
AND operator
Animation
Apostrophe (')
Arguments
Arithmetic
    conversion
    floating point
    overflow
Array bounds
    checking
    defined
Array elements, specifying
Array variables
Arrays
    defined
    dynamic
    multidimensional
    static
Arrow keys. See DIRECTION keys
ASCII characters
    corresponding to control sequences
    entering high-order
    set
Aspect ratio
Assignment
Assignment statement
Attributes
Automatic formatting
Automatic syntax checking

B

/B option (QB)
Bar, menu
Base name
BASIC command-line compiler. See BC
BASICA programs, running with QuickBASIC
BC
BCOM45.LIB
BIOS
Bit, defined
Black-and-white monitors. See Monitors, monochrome
Block
Boolean expressions
    compound
    precedence of evaluation
    simple
Branching
Break on Errors command
Breaking out of programs
Breakpoints
    defined
    deleting
    described
    setting
Breaks, checking at run time
BRUN45.EXE
BRUN45.LIB
Buffer
Bugs
Buttons, right mouse
Byte

C

/C option (QB)
Calculations
    floating point
    Immediate window
Call by reference. See Passing by reference
Call by value. See Passing by value
Calls menu
Calls, procedure
Canceling commands
CAPS LOCK/NUM LOCK indicator
    illus
    described
Case sensitivity
CGA. See Color Graphics Adapter
CHAIN statement
Change command
    described
    dialog box, illus.
Changing
    active window
    default search paths
    main modules
    programs
    screen display
    text
    values of variables
    window size
Character strings
Check boxes
    defined
    described
    illus.
Checking
    syntax
    types
Choosing
    commands
    Easy Menus
    ENTER key
    keyboard
    menus
    mouse
    defined
CHR$ function
Clear All Breakpoints command
Clear command
Clearing
    screens
    View window
Clicking
Clipboard
Closing Help
/CMD option (QB)
Code
    module level
Color Graphics Adapter (CGA), defined
Colors. See Screen colors
Column counter, illus.
Command buttons
    described
    Example
    Help
    illus.
    Make EXE
    Make EXE and Exit
    Make Library and Exit
    Program
    Remarks
COMMAND$ function
Commands
    Add Watch
    availability
    Break on Errors
    canceling
    Change
    choosing
    Easy Menus
    ENTER key
    keyboard
    menus
    mouse
    Clear
    Clear All Breakpoints
    Contents
    Continue
    Copy
    Create File
    Cut
    debugging
    Debug menu
    described
    F10
    F7
    F8
    F9
    function keys
    (table)
    table
    Delete Watch
    Display
    DOS Shell
    editing (table)
    Execute to cursor
    Exit
    Find
    Full Menus
    Help
    Help on Help
    History On
    Include File
    Include Lines
    Index
    Instant Watch
    Label
    Load File
    Make EXE File
    dialog box, illus.
    introduction
    Make Library
    Merge
    New FUNCTION
    New Program
    New SUB
    Next Statement
    Next SUB
    Open Program
    Output Screen
    Paste
    Print
    defined
    dialog box, illus.
    Help
    procedure stepping
    QB
    Repeat Last Find
    Restart
    Right Mouse
    Save
    Save All
    Save As
    Selected Text
    Set Main Module
    Set Next Statement
    Set Paths
    shortcut keys
    single stepping
    Split
    Start
    starting QuickBASIC
    SUBs
    defined
    moving procedures
    Syntax Checking
    Toggle Breakpoint
    Topic
    Trace On
    Undo
    Unload File
Comments, appearing in QCARDS
COMMON statement
Compile
Compiler
Compiler/environment differences
Constants
    defined
    local
    symbolic
Contents command
Context
    debugging
    execution
Context-sensitive help
Continue command
Continuing suspended programs
Control-sequence characters
Conventions, document
Conversion, arithmetic
Coordinates
    absolute
    physical
Coprocessor
Copy command
Copying
    examples from help
    text
Create File command
Creating
    executable files
    FUNCTION procedures
    libraries
    main modules
    new subprograms
    procedures
CTRL key, entering special characters
CTRL+BREAK
Current directory
Current drives
Current Statement option (Display command)
Cursor
    defined
    illus.
    moving
Customizing screen display
Cut command

D

Data
Data types, default
    changing
    defined
    for procedures
Database
Debug menu
    commands (list)
    illus.
    (table)
Debugger
    defined
    symbolic
Debugging
    breakpoints
    commands
    debug menu
    F10
    F7
    F8
    F9
    function keys
    Run menu
    context, illus.
    Continue command
    features
    Immediate window
    introduction
    Next Statement command
    procedures
    watch variables
    Watch window
    while writing code
Debugging features (table)
Decision-making
Declarations
    defined
    procedures, automatic
DECLARE statement, procedure declarations
DEF FN function
    defined
    Watch window
Default
Default data types
    changing in procedures
    for procedures
Default search paths
DEFtype
    defined
    introduction
Delete Watch command
    closing Watch window
    deleting variables
Deleting
    breakpoints
    modules
    text, command summary
    variables from Watch Window
Details command button
Devices
    defined
    logical
    names
Dialog boxes
    clearing
    defined
    illus.
    Merge command
    Print command
    selecting items
    setting options
    text box
DIM statement
Dimensions
DIRECTION keys
    defined
    use with menus
Directories
    changing from within QuickBASIC
    changing search paths
    current
    defined
    listing
    root
Display command
Division
DO statement, Help, illus.
Document
Document conventions
DO...LOOP
    defined
    terminating condition
    UNTIL version
    WHILE version
DOS, returning to
DOS Shell command
Dots, marking command
Double precision
Double-click
Drag
Drives
Duplicating text. See Copying
Dynamic arrays

E

Easy Menus
    commands, choosing
    described
    vs. full
    windows available with
Edit menu
    Clear command
    commands (list)
    Copy command
    Cut command
    New FUNCTION command
    New SUB command
    Syntax Checking command
    Undo command
Editing
    commands (table)
    include files
    material from Help
Editor
    automatic formatting
    entering text
    selecting text
    syntax checking
    text
EGA. See Enhanced Graphics Adapter
Ellipsis dots (...) with menu item
Emptying View window
Emulator
Enabled events
Enhanced Graphics Adapter (EGA)
Entering
    special characters
    text
Environment/compiler differences
Error checking, executable files
ERROR function
Error messages
    clearing
    help for
Errors
    correcting
    running programs
    run-time
    checking
    line numbers
    reporting locations
    simulating
    syntax, checking
    typing
Closing menus, Esc key
ESC key
Event trapping
    defined
    Quick libraries
Events
Example code
    copying from Help
    Help hyperlinks
Example command button
EXE requiring BRUN45.EXE option
    Executable files
Executable files
    creating
    defined
    Quick libraries
    stand-alone
Execute option (QB)
Execute to cursor command
Executing
    all statements of procedures
    commands. See Choosing commands
    programs
    right mouse button
    suspending
    to cursor
Exit command
Exiting QuickBASIC
Expressions
    defined
    simple
    use
    watch

F

F1 key
Falsity, representation
Fibonacci sequence
File menu
    commands (list)
    Create File command
    DOS Shell command
    Exit command
    illus.
    Load File command
    Merge command
    Open Program command
    Print command
    Save All command
    Save As command
    Save command
    Unload File command
Files
    changing default search paths
    data
    executable
    creating
    defined
    error checking in
    Quick libraries
    stand-alone, creating
    include
    defined
    finding
    nesting
    viewing and editing
    viewing only
    inserting in active window
    loading
    .MAK
    merging
    object
    printing
    QB.INI
    read only
    saving
    sequential
    source
    stand-alone
    text
filespec
Find command
    described
    dialog box, illus.
    options (table)
    restrictions (table)
FindingSearching
    include files
    text
Fixed disk based Help
Flags
Floating point
    defined
Floating-point
    arithmetic, executable files
    variables
Floppy disk-based Help
Floppy disk-based QB Advisor
Flow, programs, tracing
Formal parameters
Formats
    IEEE
    Microsoft binary
Formatting, automatic
FOR...NEXT loop
Full Menus
Function declarations
Function definitions
Function keys, debugging
FUNCTION procedures
    creating
    default data type
    naming
    viewing
Functions, conversion option (QB)

G

/G option (QB)
Global symbols
Global variables
GOSUB statement

H

/H option (QB)
Hard disk-based help
Hardware needed for running QuickBASIC
Heap
Help
    command buttons
    constructing statements with
    context sensitive
    copying examples from
    copying syntax blocks from
    described
    editing material from
    error messages
    examples
    files
    floppy-disk system
    hard-disk system
    help with
    hyperlinks
    invoking on line
    keys (table)
    keywords
    command button
    described
    illus.
    listing with Index
    language
    missing Help files
    on-line
    outline of system
    place markers in
    printing text from
    QB Advisor
    right mouse button
    sample programs
    searching for Help files
    Set Paths command for files
    syntax
    trouble evoking
    using
Help menu
    commands (list)
    Contents command
    Help on Help command
    Index command
    introduction
    Topic command
Help On Help command
Help on Help command
Help, on-lineHelp
Help window
    described
    illus.
    moving in
Hexadecimal, defined
Hierarchical filing system (HFS)
Highlight
High-order ASCII characters
High-resolution-display option (QB)
History Back
History Forward
History On command
Hyperlinks

I

IEEE format
IF...THEN...ELSE statement
    defined
    help, illus.
    syntax
Immediate window
    calculations
    calling procedures from
    capacity
    changing, active window
    context
    debugging in
    defined
    described
    illus.
    limits
    running statements in
    run-time error messages
    run-time errors, simulating
    size, changing
    statements not supported
    testing programs
    variable values, changing
Implicit links
#INCLUDE metacommand
Include files
    defined
    finding
    nesting
    viewing and editing
    viewing only
Included File command
Included Lines command
Indentation controls
Indenting
    program blocks
    text
Index command
    described
    screen, illus.
    using
Input
    defined
    standard
INPUT statement
Input/output (I/O), defined
Insert mode
    defined
    described
Inserting
    commands, summary
    text
Installing QuickBASIC
Instant Watch command
    dialog box, illus.
    symbol help
Integer variables
Integers
Interface
Interpreter
I/OInput/output

K

Key combinations
    See also Shortcut keys
    cursor movement
    described
    scrolling
Keyboard
    choosing commands from
    moving in Help windows
Keys
    control (CTRL)
    CTRL+BREAK
    DIRECTION
    F10
    F7
    F8
    F9
    Help (table)
    shortcut
    editing commands
    (table)
Keywords
    capitalization of
    defined
    help

L

/L option (QB)
Label command
Labels
Language help
Leaving QuickBASIC. See Quitting QuickBASIC
Libraries
    creating
    Quick
    creating
    defined
    described
    non-library modules, used with
    run-time
    stand-alone, executable files
line
Line counter, illus.
Line-number checking
Lines, setting attributes
Linker, BRUN45.EXE, advantage of
Linking
Links, implicit
List boxes
    defined
    described
    illus.
    scroll bar, illus.
Listing directories
Load File command
Loading
    files
    modules
Local
    constants
    symbols
    variables
Logical devices
Logical operators
Logical relations
Long integers
Loop counters
Loop variables
Loops
    DO
    FOR...NEXT
LPT1

M

Main modules
.MAK file
Make EXE and Exit command button
Make EXE command button
Make EXE File command, dialog box, illus.
Make Library and Exit command button
Make Library command
Math coprocessor
Math functions
/MBF option (QB)
MCGA. See Multicolor Graphics Array
MDA. See Monochrome Display Adapter
Menu bar
Menu-item description, illus.
Menus
    browsing
    Calls
    clearing
    closing
    commands, choosing
    Debug
    Easy
    described
    vs. full
    File
    commands (list)
    illus.
    Full
    Help
    opening
    Options
    Run
    selecting
    setup
Merge command
Metacommands
    defined
    #INCLUDE
Microsoft Binary format
Microsoft Overlay Linker (LINK)
Modes
    insert
    overtype
Modular programming
Module-level code
    defined
    described
Modules
    defined
    deleting
    existing
    loading and unloading
    main
    changing
    defined
    new
    printing
    run-time
Monitors, monochrome
    use with Color Graphics Adapter
Monochrome Display Adapter (MDA)
Mouse
    compatibility with QuickBASIC
    cursor
    defined
    Hyper Links, using with
    pointer, illus.
    QuickBASIC, using with
    scrolling with
    setting right button
Moving
    procedures
    Help windows
    SUBs command
    View window
    text
Multicolor Graphics Array (MCGA)
Multidimensional arrays
Multiple-module programs

N

Names
    base
    device
    path
Naming procedures
Near address
Nested procedures
Nesting Include files
New FUNCTION command
New Program command
New SUB command
Next Statement command
Next SUB command
NOT operator
Not watchable message
Null characters
NUM LOCK/CAPS LOCK indicator
    illus
    described
Numeric coprocessor. See Coprocessor

O

Object files
    compiling with BC
    defined
Offset
On-line help
    See also Help
Open Program command
Opening
    menus
    programs
    screen, illus.
Operand
Operators
    arithmetic
    defined
    logical
Option boxes, illus.
Option buttons
    described
    illus.
Options Menu
    Right Mouse command
    Set Paths command
Options menu
    commands (list)
    Display command
    Full Menus command
    Set Paths command
    Syntax Checking command
Options, QB command
OR operator
Organizing QuickBASIC files
OutputPRINT statement
    defined
    program, how displayed
    standard
Output screen
    defined
    viewing
Output Screen command
Outputting
    low-order ASCII control sequences
Overflow
Overlay
Overtyping text

P

PACKING.LST
Palette
Parallel ports
Parameters
    defined
    formal
Parentheses, used to establish precedence
Passing by reference
Passing by value
Paste command
Pasting text
Path names
Paths, changing default search
Path-specification line
PGDOWN key
PGUP key
Physical coordinates
Placemarkers
    defined
    using
Pointers
Ports
    parallel
    serial
Precedence
    defined
    introduction
Preventing bugs
Print command
    described
    dialog box, illus.
    Help
PRINT statement
    combining
    numeric expressions
    tabbing
    use
Problems, software, reporting
Procedure declarations, automatic
Procedure stepping
Procedures
    calling from Immediate window
    changing default data type
    creating
    creating FUNCTION
    creating SUB
    debugging
    declaring
    default data types
    defined
    described
    executing all statements of
    naming
    nested
    sequence of
    SUB
    View window, illus.
    viewing
Produce Debug Code check box
Produce debug code check box
Program command button
Program execution, right mouse button
Program statements
Program symbols. See Symbols
Programming environment, described
Programming, modular
Programs
    BASICA, running with QuickBASIC
    blocks, indenting
    continuing
    continuing if suspended
    defined
    executing to cursor
    execution
    continuing
    suspending
    existing, starting
    exiting
    flow, tracing
    instructions
    multiple module
    new, starting
    output
    resetting variables
    restarting
    restarting at first executable statement
    running
    run-time module required with
    sample, on disk
    selecting
    setup
    stand-alone
    starting
    steps
    stopping execution
    structured
    suspending execution
    testing
Prompts, defined

Q

QB AdvisorHelp
QB command
QB Express
QB.INI file
QCARDS program
Quick libraries
    See also Libraries
    defined
    file naming
    updating previous
QuickBASIC
    debugging features
    installing
    keywords
    manuals, how to use
    mouse use
    options
    starting
QuickBASIC environment, returning to
QuickBASIC, Fast Load and Save option
Quick-library loading option (QB)
Quitting QuickBASIC

R

RAM space, saving with executable files
README.DOC
Read-only files
Records
Recursion
Redirection
Reference bar
    described
    illus.
Reference, passing by
Registers
Relational operators
Relational statements
Remote-reception buffer-size option (QB)
RemovingDeleting
    modules
    text
Renaming programs
Repeat Last Find command
Repeat previous search
Repeating program statements
Replacing text
    See also Pasting text
Reserved words. See Keywords
Resetting variables
Restart command
RETURN statement
RETURN without GOSUB error, cause
Right Mouse command
Row/column counters
/RUN option (QB)
Run menu
    debugging commands
    Make EXE File command
    Make Library command
    described
    Set Main Module command
Run time
    defined
    errors
    checking
    hint regarding
    reporting locations
    simulating
Running programs
    debugging commands
    errors in
    new
Run-time libraries
    defined
    executable files
Run-time module
    defined
    programs using

S

Save All command
Save As command
    described
    dialog box, illus.
    Fast Load and Save option
    QuickBASIC option
    Text option
Save command
Saving
    files
    .MAK files
    procedures
Saving programs
Scope
Screen
    clearing
    colors, setting
    display, customizing
    displaying data on
    illus.
    QuickBASIC
Screen-update-speed option (QB)
Scroll arrow, illus.
Scroll bars
    defined
    illus.
    option (Display command)
    setting
Scroll box
Scrolling
    defined
    keyboard commands
    keys, summary of
    mouse
    text in a window
Search menu
    Change command
    commands (list)
    Find command
    Label command
    Repeat Last Find command
    Selected Text command
Search Paths command
Searching
    labels
    procedures
    text
Segments
SELECT CASE statement
    described
    help screen, illus.
Selected Text command
Selecting
    menus
    programs
    text
    cautions
    described
    editing functions
    removing selection
    summary of
Sequence of procedures
Sequential files
Serial ports
Set Main Module command
Set Next Statement command
Set Paths command
Setting
    breakpoints
    screen attributes, currently executing lines
    screen colors
    scroll bars
    tab stops
Setting up QuickBASIC
Setup menu
Setup program
SHARED
Shortcut keys
    commands
    described
    introduction
    (table)
Simple variables
Single precision
Single stepping
Smart editor
    See also Editor
    automatic procedure declarations
    defined
    described
    syntax checking
Source files
SPACEBAR, using in dialog boxes
Special characters, methods for entering
Split command
Splitting windows
Stack
    Calls menu
    defined
Stand-alone EXE File option
Stand-alone files
Stand-alone libraries. See Libraries
Stand-alone programs, advantages
Standard input and output
Start command
StartingLoading
    programs
    at specific statement
    existing
    new
    QuickBASIC
Starting QuickBASIC
    monitors, monochrome
Statement checking. See Syntax checking
Statements
    beginning execution from
    CHAIN
    COMMON
    DECLARE
    defined
    DIM
    DO, Help, illus.
    ERROR
    GOSUB
    IF...THEN...ELSE, help, illus.
    INPUT
    next to execute
    PRINT
    RETURN
    SELECT CASE
    described
    help screen, illus.
    STEP
    using help to construct
Static arrays
STEP statement
Stop bits
Stopping programs
String variables
Strings
    character
    combining
    defined
    passing to QuickBASIC
Structured programming
SUB procedures
    creating
    default data type
    defined
    naming
    viewing
Subprograms
    creating
    defined
Subroutines
SUBS command
    described
    dialog box, illus.
    illus.
    moving procedures
Subscripts, defined
Suspending program execution
Switching active window
Symbol help
Symbolic constants
Symbolic debuggers
Symbols
    defined
    global
    help
    local
    using
Syntax
    checking
    errors, checking
    help
Syntax Checking command
    described
    introduction
    turning off

T

Tab
TAB key, dialog boxes, using in
Tab stops, setting
Testing, programs
Text
    changing
    copying
    defined
    deleting
    editors
    entering
    finding
    indenting
    inserting
    moving
    option, Save As command
    overtyping
    pasting
    removing
    replacing
    searching for
    selecting
Text boxes
    defined
    described
    errors, correcting
    illus.
Text files
Tiling
Title bar
    defined
    described
    illus
Toggle Breakpoint command
Toggles
Tokens
Topic command
Trace On command
Tracing
    backwards
    forward
    introduction
    procedure steps
    program flow
Tracing through Help screens
Trapping events, defined
Truth, representation
Tutorial, how to use
Two's complement
Types
Typing mistakes
Typographic conventions

U

Underflow
Undo command
Unload File command
Unloading modules
Unresolved externals
UNTIL keyword
User-defined types
Using help

V

Value, passing by
Values, changing in running programs
Variables
    arrays
    automatic
    default type
    defined
    deleting from Watch window
    displaying
    floating-point
    global
    help
    illegal assignments
    initialization
    integer
    local
    naming conventions
    resetting
    simple
    string
    types
    values
    changing
    current
    determining
    watch
Video Graphics Array (VGA)
View menu
    commands (list)
    Include File command
    Included Lines command
    Next Statement command
    Next SUB command
    Output Screen command
    Split command
    SUBs command
View window
    clearing
    defined
    described
    illus.
    loading a program in
    moving procedures
    procedures in
    programming in
    splitting
Viewing procedures

W

Watch expressions
Watch variables, debugging
Watch window
    closing
    commands
    debugging programs
    defined
    deleting variables from
    described
    illus.
    monitoring variable values
    placing variable into
    watchpoints
Watchable
Watching expressions, in Watch window
Watchpoints
WHILE keyword
WIndows
    activating
Windows
    active
    changing
    described
    available with Easy Menus
    defined
    Help
    described
    illus.
    moving in
    Immediate
    calculations
    calling procedures from
    capacity
    debugging in
    defined
    described
    illus.
    running statements in
    run-time errors, simulating
    statements not supported
    testing programs
    variable values, changing
    window size, changing
    moving between
    size, changing
    splitting
    View
    defined
    described
    illus.
    loading a program
    procedures in
    programming in
    splitting
    Watch
    closing
    commands
    debugging programs
    defined
    deleting variables from
    described
    monitoring variable values
    placing variable into
    watchpoints
    watch
    described
WordStar-style command indicator, illus.
```

{% endraw %}
