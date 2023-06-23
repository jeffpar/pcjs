---
layout: page
title: MS QuickBASIC 4.5 Language Reference
permalink: /documents/books/mspl13/basic/qblang/
redirect_from: /pubs/pc/reference/microsoft/mspl13/basic/qblang/
---

The following document is from the [Microsoft Programmer's Library 1.3](../../) CD-ROM.

{% raw %}

```none
Microsoft QuickBASIC: Language Reference


════════════════════════════════════════════════════════════════════════════


Microsoft(R) QuickBASIC BASIC: Language Reference

For IBM(R) Personal Computers and Compatibles


════════════════════════════════════════════════════════════════════════════


Information in this document is subject to change without notice and does
not represent a commitment on the part of Microsoft Corporation. The
software described in this document is furnished under a license agreement
or nondisclosure agreement. The software may be used or copied only in
accordance with the terms of the agreement. It is against the law to copy
the software on any medium except as specifically allowed in the license or
nondisclosure agreement. No part of this manual may be reproduced or
transmitted in any form or by any means, electronic or mechanical, including
photocopying and recording, for any purpose without the express written
permission of Microsoft.

(C)Copyright Microsoft Corporation 1987, 1988. All rights reserved.
Simultaneously published in the U.S. and Canada.

Printed and bound in the United States of America. Microsoft, MS, MS-DOS,
CodeView, and XENIX are registered trademarks of Microsoft Corporation.

AT&T is a registered trademark of American Telephone and Telegraph Company.

Hercules is a registered trademark and InColor is a trademark of Hercules
Computer Technology.

IBM and PC/AT are registered trademarks and PC/XT is a trademark of
International Business Machines Corporation.

Intel is a registered trademark of Intel Corporation.

Olivetti is a registered trademark of Ing. C. Olivetti.

Document No. 410700018-450-R00-1188



────────────────────────────────────────────────────────────────────────────
Table of Contents

Introduction
        Document Conventions
        Reference Page Format

PART 1  LANGUAGE FUNDAMENTALS

Chapter 1  Language Elements
        1.1  Character Set
        1.2  The BASIC Program Line
        1.2.1   Using Line Identifiers
        1.2.2   BASIC Statements
        1.2.3   BASIC Line Length

Chapter 2  Data Types
        2.1  Data Types
        2.1.1   Elementary Data Types──String
        2.1.2   Elementary Data Types──Numeric
            2.1.2.1   Integer Numbers
            2.1.2.2   Floating-Point Numbers
        2.1.3   User-Defined Data Types
        2.2  Constants
        2.2.1   Literal Constants
        2.2.2   Symbolic Constants
        2.3  Variables
        2.3.1   Variable Names
        2.3.2   Declaring Variable Types
            2.3.2.1   Type-Declaration Suffix
            2.3.2.2   AS Declaration Statements
            2.3.2.3   DEFtype Declaration Statements
            2.3.2.4   Declaring Array Variables
        2.3.3   Variable Storage Allocation
        2.4  Scope of Variables and Constants
        2.4.1   Global Variables and Constants
        2.4.2   Local Variables and Constants
        2.4.3   Sharing Variables
        2.4.4   DEF FN Functions
        2.4.5   Summary of Scope Rules
        2.5  Static and Dynamic Arrays
        2.6  Automatic and Static Variables
        2.7  Type Conversion

Chapter 3  Expressions and Operators
        3.1  Expressions and Operators Defined
        3.2  Hierarchy of Operations
        3.3  Arithmetic Operators
        3.3.1   Integer Division
        3.3.2   Modulo Arithmetic
        3.3.3   Overflow and Division by Zero
        3.4  Relational Operators
        3.5  Logical Operators
        3.6  Functional Operators
        3.7  String Operators

Chapter 4  Programs and Modules
        4.1  Modules
        4.2  Procedures
        4.2.1   FUNCTION Procedures
        4.2.2   SUB Procedures
        4.2.3   DEF FN Functions
        4.3  Passing by Reference and Passing by Value
        4.4  Recursion

PART 2  STATEMENT AND FUNCTION REFERENCE

        ABS Function
        ASC Function
        ATN Function
        BEEP Statement
        BLOAD Statement
        BSAVE Statement
        CALL Statement (BASIC)
        CALL, CALLS Statement (Non-BASIC)
        CALL ABSOLUTE Statement
        CALL INT86OLD Statements
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
        CVSMBF, CVDMBF Functions
        CVI, CVS, CVL, CVD Functions
        DATA Statement
        DATE$ Function
        DATE$ Statement
        DECLARE Statement (BASIC)
        DECLARE Statement (Non-BASIC)
        DEF FN Statement
        DEF SEG Statement
        DEFtype Statements
        DIM Statement
        DO...LOOP Statement
        DRAW Statement
        END Statement
        ENVIRON Statement
        ENVIRON$ Function
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
        IF...THEN...ELSE Statement
        INKEY$ Function
        INP Function
        INPUT$ Function
        INPUT Statement
        INPUT # Statement
        INSTR Function
        INT Function
        IOCTL$ Function
        IOCTL Statement
        KEY (n) Statements
        KEY Statements
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
        ONevent Statements
        ON...GOSUB, ON...GOTO Statement
        ON UEVENT GOSUB Statement
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
        PLAY ON, OFF, and STOP StatementsP
        PMAP Function
        POINT Function
        POKE Statement
        POS Function
        PRESET Statement
        PRINT Statement
        PRINT USING Statement
        PRINT #, PRINT # USING Statements
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

Appendix A  Keyboard Scan Codes and ASCII Character Codes
        A.1  Keyboard Scan Codes
        A.2  ASCII Character Codes

Appendix B  Error Messages
        B.1  Error-Message Display
        B.2  Invocation, Compile-Time, and Run-Time Error Messages
        B.3  LINK Error Messages
        B.4  LIB Error Messages

Index

Figures
        2.1  BASIC Numeric Representations
        R.1  WINDOW and WINDOW SCREEN

Tables
        2.1  Types of Numeric Constants
        2.2  Variable-Type Memory Requirements
        3.1  Relational Operators and Their Functions
        3.2  BASIC Logical Operators
        3.3  Values Returned by Logical Operations
        R.1  INT86OLD and INT86XOLD Register Values
        R.2  FILEATTR Mode Codes
        R.3  Values for Bits per Pixel per Plane and for Planes
        R.4  Keyboard Scan Codes
        R.5  SCREEN Color and Attribute Ranges
        R.6  MDPA Screen Modes
        R.7  Hercules Screen Modes
        R.8  CGA Screen Modes
        R.9  EGA Screen Modes
        R.10 Default Attributes: SCREEN 10, Monochrome Display
        R.11 Color Values: SCREEN 10, Monochrome Display
        R.12 VGA Screen Modes
        R.13 MCGA Screen Modes
        R.14 Default Attributes and Colors for SCREEN Modes 1 and 9
        R.15 Default Attributes and Colors for SCREEN Modes 2 and 11
        R.16 Default Attributes and Colors for SCREEN Modes 0, 7, 8, 9,
            12, and 13



────────────────────────────────────────────────────────────────────────────
Introduction

    Microsoft(R) QuickBASIC 4.5 is a powerful programming language for either
    commercial applications or quick development of single-use programs.
    QuickBASIC is compatible with BASICA, adding advanced features such as
    user-defined data types and recursive procedures to the elements that have
    traditionally made BASIC an ideal language for new programmers.

    The Microsoft BASIC Language Reference describes the QuickBASIC
    programming language. Use this manual as a printed reference guide while
    you are programming to find the syntax or effect of particular statements
    and functions. You can also use this book to explore BASIC by reading
    about unfamiliar statements and trying them in the short example programs
    provided.

    The BASIC Language Reference has these parts:

    ■ Part 1, "Language Fundamentals," describes the elements of the BASIC
    language: characters, program lines, data types, constants, variables,
    modules, programs, and procedures.

    ■ Part 2, "Statement and Function Reference," contains reference material
    on each BASIC statement and function, organized alphabetically.

    ■ The appendixes list the keyboard scan and ASCII character codes and
    provide quick reference information on error messages.

    This volume is a companion to the other books supplied with QuickBASIC
    Version 4.5. Learning to Use Microsoft QuickBASIC explains how to use the
    QuickBASIC environment and introduces BASIC programming. Programming in
    BASIC contains more advanced programming information.


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
                            Keywords are a required part of statement syntax,
    Example of Convention    Description
    ──────────────────────────────────────────────────────────────────────────
                            Keywords are a required part of statement syntax,
                            unless they are enclosed in double brackets as
                            explained below. In programs you write, you must
                            enter keywords exactly as shown. However, you can
                            use uppercase letters or lowercase letters.

    CALL NewProc(arg1!,      This kind of type is used for program examples,
    var2%)                   program output, and error messages within the
                            text.

    ¢INCLUDE: BC.BI          A column of three dots indicates that part of the
    .                      example program has been intentionally omitted.
    .
    .
    CHAIN "PROG1"
    END

    ' Make one pass          The apostrophe (single right quotation mark)
                            marks the beginning of a comment in sample
    Example of Convention    Description
    ──────────────────────────────────────────────────────────────────────────
                            marks the beginning of a comment in sample
                            programs.

    filespec                 Italic letters indicate placeholders for
                            information you must supply, such as a file name.
                            Italics are also occasionally used in the text
                            for emphasis.

    «optional-item»          Items inside chevrons are optional.

    {choice1 | choice2}      Braces and a vertical bar indicate a choice among
                            two or more items. You must choose one of the
                            items unless all of the items are also enclosed
                            in double square brackets.

    repeating elements...    Three dots following an item indicate that more
                            items having the same form may appear.

    ALT+F1                   Capital letters are used for the names of keys
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
                            Other machines may use different names.
    Example of Convention    Description
    ──────────────────────────────────────────────────────────────────────────
                            Other machines may use different names.

    "defined term"           Quotation marks usually indicate a new term
                            defined in the text.

    Video Graphics Array     Acronyms are usually spelled out the first time
    (VGA)                    they are used.
    ──────────────────────────────────────────────────────────────────────────


    The syntax below (for the "LOCK...UNLOCK" statements) illustrates many of
    the typographic conventions in this manual:

    LOCK«#»filenumber«,{record | «start» TO end }»
    .
    .
    .
    UNLOCK«#»filenumber«,{record | «start» TO end }»

────────────────────────────────────────────────────────────────────────────
NOTE
    Throughout this manual, the term "DOS" refers to both the MS-DOS(R) and
    IBM Personal Computer DOS operating systems. The name of a specific
    operating system is used when it is necessary to note features that are
    unique to that system. The term "BASICA" refers to interpreted versions of
    BASIC in general.
────────────────────────────────────────────────────────────────────────────


Reference Page Format

    Each statement and function description in Part 2, "Statement and
    Function Reference," uses the following format:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Heading                  Function
    ──────────────────────────────────────────────────────────────────────────
    Action                   Summarizes what the statement or function does.

    Syntax                   Gives the correct syntax for the statement or
    Heading                  Function
    ──────────────────────────────────────────────────────────────────────────
    Syntax                   Gives the correct syntax for the statement or
                            function.

    Remarks                  Describes arguments and options in detail and
                            explains how to use the statement or function.

    Differences from BASICA  Optional section that tells whether or not the
                            given statement or function is new, enhanced, or
                            different from the same statement in the
                            Microsoft BASIC 2.0 Interpreter described in the
                            IBM Personal Computer BASICA reference manual.

    See Also                 Mentions related statements and functions (also
                            an optional section).

    Example                  Gives sample commands, programs, and program
                            segments illustrating the use of the statement or
                            function (also an optional section).

    Heading                  Function
    ──────────────────────────────────────────────────────────────────────────

    ──────────────────────────────────────────────────────────────────────────





────────────────────────────────────────────────────────────────────────────
PART 1  LANGUAGE FUNDAMENTALS
────────────────────────────────────────────────────────────────────────────

    Part 1 describes aspects of the BASIC language. Chapter 1 gives
    information on the BASIC character set and the structure of a BASIC
    program line. Chapter 2 discusses data types, constants, variables, and
    arrays. Chapter 3 talks about BASIC operators and expressions. Chapter
    4 explains how to use modules and procedures in BASIC programming. This
    chapter also describes the relationship between programs and modules and
    discusses the SUB and FUNCTION procedures available in QuickBASIC.



────────────────────────────────────────────────────────────────────────────
Chapter 1   Language Elements

        1.1  Character Set
        1.2  The BASIC Program Line
        1.2.1   Using Line Identifiers
        1.2.2   BASIC Statements
        1.2.3   BASIC Line Length

    This chapter discusses some of the fundamental elements of the QuickBASIC
    version of the BASIC language. As in virtually all programming languages,
    characters from the BASIC character set form labels, keywords, variables,
    and operators. These then combine to form the statements that make up a
    program.

    ■ The BASIC character set and the special meanings of some characters

    ■ The format of a line in a BASIC program

    ■ Line labels

    ■ Executable and nonexecutable statements

    ■ Program line length

    Chapter 2, "Data Types," and Chapter 3, "Expressions and Operators,"
    discuss other parts of statements, including expressions.


1.1  Character Set

    The Microsoft BASIC character set consists of alphabetic characters,
    numeric characters, and special characters.

    The alphabetic characters in BASIC are the uppercase letters (A-Z) and
    lowercase letters (a-z) of the alphabet.

    The BASIC numeric characters are the digits 0-9. The letters A-F and a-f
    can be used as parts of hexadecimal numbers. The characters in Table 1.1
    have special meanings in BASIC statements and expressions.

    Table 1.1   BASIC Character Set

╓┌─┌──────────────────┌──────────────────────────────────────────────────────╖
    Character          Name
    ──────────────────────────────────────────────────────────────────────────
    ENTER              Terminates input of a line
                        Blank (or space)
    !                  Exclamation point (single-precision data-type suffix)
    #                  Number sign (double-precision data-type suffix)
    $                  Dollar sign (suffix for string data type)
    %                  Percent (suffix for integer data type)
    &                  Ampersand (suffix for long-integer data type)
    '                  Single quotation mark (apostrophe)
    (                  Left parenthesis
    )                  Right parenthesis
    *                  Asterisk (multiplication symbol)
    +                  Plus sign
    ,                  Comma
    -                  Minus sign
    .                  Period (decimal point)
    Character          Name
    ──────────────────────────────────────────────────────────────────────────
    .                  Period (decimal point)
    /                  Slash (division symbol)
    :                  Colon
    ;                  Semicolon
    <                  Less than
    =                  Equal sign (relational operator or assignment symbol)
    >                  Greater than
    ?                  Question mark
    @                  At symbol
    [                  Left bracket
    ]                  Right bracket
    \                  Backslash (integer division symbol)
    ^                  Up arrow or caret (exponentiation symbol)
    _                  Underscore (line continuation)
    ──────────────────────────────────────────────────────────────────────────



1.2  The BASIC Program Line

    BASIC program lines have the following syntax:

    [[line-identifier]] [[statement]] [[: statement]]...[[comment]]

1.2.1  Using Line Identifiers

    BASIC supports two types of line-identifiers──line numbers and
    alpha-numeric line labels:

    1. A line number may be any combination of digits from 0 to 65,529. The
        following are examples of valid line numbers:

        1
        200
        300PRINT "hello"    '300 is the line number.
        65000

        Using 0 as a line number is not recommended. Error- and event-trapping
        statements (ON ERROR and ONevent) interpret the presence of line number
        0 to mean that trapping is disabled (stopped). For example, the
        following statement disables error trapping but does not branch to line
        0 if an error occurs:

        ON ERROR GOTO 0

        In addition, RESUME 0 continues execution on the line where the error
        occurred, not at line number 0.

    2. An alphanumeric line label may be any combination of from 1 to 40
        letters and digits, starting with a letter and ending with a colon.
        BASIC keywords are not permitted. The following are valid alphanumeric
        line labels:

        Alpha:
        ScreenSub:
        Test3A:

        Case is not significant. The following line labels are equivalent:

        alpha:
        Alpha:
        ALPHA:

    Line numbers and labels may begin in any column, as long as they are the
    first characters other than blanks or tabs on the line. Blanks and tabs
    are also allowed between an alphanumeric label and the colon following it.
    A line can have only one label.

    BASIC does not require each line in a source program to have the same type
    of identifier, either a line number or label. You may mix alphanumeric
    labels and line numbers in the same program, and you may use alphanumeric
    labels as objects of any BASIC statement where line numbers are permitted,
    except as the object of an IF...THEN statement. In IF...THEN statements,
    BASIC permits only a line number, unless you explicitly use a GOTO
    statement. For example, the form of the following statement is correct:

    IF A = 10 THEN 500

    However, if the object of the IF...THEN statement is a line label, a GOTO
    statement is required:

    IF A = 10 THEN GOTO IncomeData

    If you are trapping errors, the ERL function returns only the last line
    number located before the error. Neither RESUME nor RESUME NEXT requires
    line labels or line numbers. See the entries for ERL and RESUME for more
    information.

    Line numbers do not determine the order in which statements are executed
    in QuickBASIC. For example, QuickBASIC executes statements in the
    following program in the order 100, 10, 5:

    100 PRINT "The first line executed."
    10 PRINT "The second line executed."
    5 PRINT "The third and final line executed."

    Some older BASICs, such as BASICA, would execute the lines in numerical
    order: 5, 10, 100.

1.2.2  BASIC Statements

    A BASIC statement is either "executable" or nonexecutable." An executable
    statement advances the flow of a program's logic by telling the program
    what to do next (telling it to read input, write output, add two numbers
    together and store the resulting value in a variable, open a file, branch
    to another part of the program, or take some other action). In contrast, a
    nonexecutable statement does not advance the flow of a program's logic.
    Instead, nonexecutable statements perform tasks such as allocating storage
    for variables, declaring and defining variable types, and designating
    variables to be shared among all the procedures in a source file.

    The following BASIC statements are nonexecutable:

    ■ COMMON

    ■ CONST

    ■ DATA

    ■ DECLARE

    ■ DEFtype

    ■ DIM (static arrays only)

    ■ OPTION BASE

    ■ SHARED

    ■ STATIC

    ■ TYPE...END TYPE

    Another type of nonexecutable statement is a "comment" used to clarify a
    program's operation and purpose. A comment is introduced by the REM
    statement or a single quote character ('). The following lines are
    equivalent:

    PRINT "Quantity remaining" : REM Print report label.
    PRINT "Quantity remaining"     ' Print report label.

    More than one BASIC statement can be placed on a line, but colons (:) must
    separate statements, as illustrated below:

    FOR I=1 TO 5 : PRINT "G'day, mate." : NEXT I

1.2.3  BASIC Line Length

    If you enter your programs using QuickBASIC's built-in editor, you are
    limited to lines of 256 characters. The QuickBASIC editor does not
    recognize the underscore character (_) as a line continuation.

    If you use your own editor, you may use an underscore as the last
    character to create a program line, like the following, that extends
    across more than one physical line:

    IF (TestChar$ = " " OR TestChar$ = ".") AND _
    LineNumber < 23 AND NOT EOF(FileNumber) THEN

    When QuickBASIC loads your program, the underscores are removed and the
    continued lines are joined to form a single line. The line-length limit is
    relaxed in this case. Underscores cannot be used to continue DATA or REM
    statements.



────────────────────────────────────────────────────────────────────────────
Chapter 2   Data Types

        2.1  Data Types
        2.1.1   Elementary Data Types──String
        2.1.2   Elementary Data Types──Numeric
            2.1.2.1   Integer Numbers
            2.1.2.2   Floating-Point Numbers
        2.1.3   User-Defined Data Types
        2.2  Constants
        2.2.1   Literal Constants
        2.2.2   Symbolic Constants
        2.3  Variables
        2.3.1   Variable Names
        2.3.2   Declaring Variable Types
            2.3.2.1   Type-Declaration Suffix
            2.3.2.2   AS Declaration Statements
            2.3.2.3   DEFtype Declaration Statements
            2.3.2.4   Declaring Array Variables
        2.3.3   Variable Storage Allocation
        2.4  Scope of Variables and Constants
        2.4.1   Global Variables and Constants
        2.4.2   Local Variables and Constants
        2.4.3   Sharing Variables
        2.4.4   DEF FN Functions
        2.4.5   Summary of Scope Rules
        2.5  Static and Dynamic Arrays
        2.6  Automatic and Static Variables
        2.7  Type Conversion

    This chapter contains seven sections that provide the following
    information about the data types, constants, and variables in BASIC:

    ■ The elementary data types (string and numeric)

    ■ The formation of literal and symbolic constants

    ■ The rules for naming a BASIC variable and for determining a variable's
    type, and how BASIC allocates variable storage

    ■ The scope rules that BASIC follows to decide to which object a variable
    name refers

    ■ The difference between static and dynamic arrays

    ■ The use of automatic and static variables in SUB and FUNCTION procedures

    ■ The conversions from one numeric type to another that BASIC may perform
    when doing calculations


2.1  Data Types

    Every variable in BASIC has a data type that determines what can be stored
    in the variable. There are two categories of data in BASIC: string data
    and numeric data. Each category includes elementary data types. The next
    section summarizes the elementary data types.

2.1.1  Elementary Data Types──String

    The two kinds of strings are as follows:

    ■ Variable-length string

    A variable-length string is a sequence of up to 32,767 characters. The
    codes for these characters range from 0-127 for American Standard Code
    for Information Interchange (ASCII) characters, and from 128-255 for
    non-ASCII characters (see Appendix A, "Keyboard Scan Codes and ASCII
    Character Codes").

    ■ Fixed-length string

    A fixed-length string contains a declared number of characters.
    Fixed-length strings can be no longer than 32,767 characters.
    Fixed-length strings, like variable-length strings, contain characters
    with codes ranging from 0-255.

2.1.2  Elementary Data Types──Numeric

    BASIC has two types of integers and two types of floating-point values.
    Figure 2.1 shows the internal (memory) formats of these four different
    numeric types. The following table summarizes the types:

    Numeric Type             Description
    ──────────────────────────────────────────────────────────────────────────
    Integer (2 bytes)        Integers are stored as signed 16-bit binary
                            numbers ranging in value from -32,768 to +32,767.

    Long integer (4 bytes)   "Long" integers are stored as signed 32-bit
                            binary numbers ranging in value from
                            -2,147,483,648 to +2,147,483,647.

    Single-precision         "Single-precision" numbers are accurate to seven
    floating point (4 bytes) decimal places, and have ranges of -3.402823E+38
                            to -1.40129E-45 for negative values and
                            1.40129E-45 to 3.402823E+38 for positive values.

    Double-precision         "Double-precision" numbers are accurate to 15 or
    floating point (8 bytes) 16 digits and have an extended range:
                            -1.797693134862316E+308 to -4.94065E-324 for
                            negative numbers and 4.94065E-324 to
                            1.797693134862316E+308 for positive values.
    ──────────────────────────────────────────────────────────────────────────

    2.1.2.1  Integer Numbers


        Integer
        1514                     0
    ┌─┬───────────────────────┐
    │ │                       │
    └─┴───────────────────────┘
        │
    sign

    Long integer
    31 30                               0
    ┌─┬─────────────────────────────────┐
    │ │                                 │
    └─┴─────────────────────────────────┘

    Single-precision real
    31 30  23 22                        0
    ┌─┬─────┬───────────────────────────┐
    │ │     │                           │
    └─┴─────┴───────────────────────────┘
        │ └─┬─┘│└──────────┬──────────────┘
        │   │  │           │
    sign  │Implied    Mantissa
            │  bit
            │
        Exponent

    Double Precision real
    63 62   52 51
    ┌─┬───────┬───────────────────────────────────────────────────────┐
    │ │       │                                                       │
    └─┴───────┴───────────────────────────────────────────────────────┘
        │ └─┬───┘│└──────────────────────┬──────────────────────────────┘
        │   │    │                       │
    sign  │Implied                  Mantissa
            │  bit
            │
        Exponent

            Figure 2.1 BASIC Numeric Representations

    All BASIC integers are represented as two's complement values, the most
    common way of representing integers on a computer. Integers use 16 bits (2
    bytes) and long integers use 32 bits (4 bytes).

    In two's complement representation, positive values are represented as
    straightforward binary numbers. For example, BASIC would store an integer
    value of 4 as a sequence of the following 16 bits:

    0000000000000100

    Negative values are represented as the two's complement of the
    corresponding positive value. To form the two's complement (the negative)
    of the integer value 4, first take the representation above and change all
    ones to zeroes and all zeroes to ones:

    1111111111111011

    Then add one to the result:

    1111111111111100

    The final result is how BASIC represents -4 as a binary number.

    Because of the way two's complement numbers are formed, every combination
    of bits representing a negative value has a 1 as the leftmost bit.

    2.1.2.2  Floating-Point Numbers

    QuickBASIC Version 4.5 uses IEEE-format floating-point numbers rather than
    the Microsoft Binary format used in earlier versions. (IEEE is an acronym
    for Institute of Electrical and Electronics Engineers, Inc.) IEEE format
    gives more accurate results and makes it possible to use an 8087 or 80287
    math coprocessor.

    Floating-point values are represented in a different format from integers.
    In floating-point format each number consists of three parts: the sign,
    the exponent, and the mantissa. You can think of this format as a
    variation of scientific notation. In scientific notation, the number 1000
    would be represented as 1.0 x 10^3. To save space, you could just remember
    the exponent, 3, and the mantissa, 1.0, and reconstruct the value later by
    raising 10 to the power 3 and multiplying by the mantissa. Floating-point
    notation works by saving just the exponent and the mantissa. The only
    difference from scientific notation is that in this format the exponent
    represents a power of 2, not a power of 10.

    In a single-precision number, the sign takes 1 bit, the exponent takes 8
    bits, and the mantissa uses the remaining 23 bits and an additional
    implied bit. Double-precision values occupy 8 bytes or 64 bits: 1 bit for
    the sign, 11 bits for the exponent, and an implied bit and 52 actual bits
    for the mantissa.

    The following program (included on the QuickBASIC distribution disks in
    the file FLPT.BAS) can be used to examine the internal format of
    single-precision values:

    DECLARE FUNCTION MHex$ (X AS INTEGER)
    ' Display how a given real value is stored in memory.

    DEFINT A-Z
    DIM Bytes(3)
    CLS
    PRINT "Internal format of IEEE number (in hexadecimal)"
    PRINT
    DO

    ' Get the value.
    INPUT "Enter the value (END to end): ", A$
    IF UCASE$(A$) = "END" THEN EXIT DO
    RealValue! = VAL(A$)
    ' Convert the real value to a long without changing any of
    ' the bits.
    AsLong& = CVL(MKS$(RealValue!))
    ' Make a string of hex digits, and add leading zeroes.
    Strout$ = HEX$(AsLong&)
    Strout$ = STRING$(8 - LEN(Strout$), "0") + Strout$
    ' Save the sign bit, and then eliminate it so it doesn't
    ' affect breaking out the bytes.
    SignBit&=AsLong& AND &H80000000&
    AsLong&=AsLong& AND &H7FFFFFFF&
    ' Split the real value into four separate bytes.
    ' --the AND removes unwanted bits; dividing by 256 shifts
    ' the value right 8 bit positions.
    FOR I = 0 TO 3
        Bytes(I) = AsLong& AND &HFF&
        AsLong& = AsLong&  256&
    NEXT I
    ' Display how the value appears in memory.
    PRINT
    PRINT "Bytes in Memory"
    PRINT "  High    Low"
    FOR I = 1 TO 7 STEP 2
        PRINT " "; MID$(Strout$, I, 2);
    NEXT I
    PRINT:PRINT
    ' Set the value displayed for the sign bit.
    Sign = ABS(SignBit& <> 0)

    ' The exponent is the right seven bits of byte 3 and the
    ' leftmost bit of byte 2. Multiplying by 2 shifts left and
    ' makes room for the additional bit from byte 2.
    Exponent = Bytes(3) * 2 + Bytes(2)  128

    ' The first part of the mantissa is the right seven bits
    ' of byte 2. The OR operation makes sure the implied bit
    ' is displayed by setting the leftmost bit.
    Mant1 = (Bytes(2) OR &H80)
    PRINT " Bit 31    Bits 30-23  Implied Bit & Bits 22-0"
    PRINT "Sign Bit  Exponent Bits     Mantissa Bits"
    PRINT TAB(4); Sign; TAB(17); MHex$(Exponent);
    PRINT TAB(33); MHex$(Mant1);MHex$(Bytes(1));MHex$(Bytes(0))
    PRINT

    LOOP

    ' MHex$ makes sure we always get two hex digits.
    FUNCTION MHex$ (X AS INTEGER) STATIC
        D$ = HEX$(X)
        IF LEN(D$) < 2 THEN D$ = "0" + D$
        MHex$ = D$
    END FUNCTION

    Output

    Enter the value (END to end): 4

    Bytes in Memory
    High    Low
    40 80 00 00

    Bit 31    Bits 30-23  Implied Bit & Bits 22-0
    Sign Bit  Exponent Bits     Mantissa Bits
        0           81              800000

    The program displays the sign, exponent, and mantissa of the
    single-precision value. The mantissa's implied bit is automatically
    included. All values are printed out in hexadecimal values (base 16
    numbers), which are a shorthand way of writing binary numbers. Each
    hexadecimal digit represents a pattern of 4 bits: 0 hexadecimal represents
    0000 binary, 8 hexadecimal represents 1000, and F hexadecimal (a digit for
    the value 15 in decimal) represents 1111.

    Looking at the output from the program, the decimal value 4 is represented
    in memory as a series of 4 bytes:

    40 80 00 00

    These 4 bytes break down into a single-sign bit of 0, a 1-byte exponent of
    &H81, and a mantissa of &H800000.

    The exponent value of &H81 represents a biased exponent, not the true
    exponent. With a biased exponent, a fixed value (a "bias") is added to the
    true exponent and the result is stored as part of the number. For
    single-precision values, the bias is &H7F or 127. Double-precision values
    use a bias of &H3FF or 1023. Using a biased exponent avoids having to use
    one of the exponent bits to represent the sign. In the output, 4 is a
    power of 2, so the true exponent is 2. Adding the bias (&H7F) gives the
    stored exponent value of &H81.

    A normalized mantissa refers to a mantissa that is multiplied by 2
    (shifted to the left) and the exponent decreased until the leftmost bit is
    a 1. By eliminating leading zeroes from the mantissa, more significant
    bits can be stored. In memory, the mantissa for a value of 4 is all
    zeroes. This is so because the mantissa is normalized and the leftmost bit
    is assumed.

    Because the mantissa is always normalized, the leftmost bit is always a 1.
    And because the leftmost bit is always a 1, there is no reason to store it
    as part of the number. BASIC thus stores 23 bits (number 22 to 0) for the
    mantissa of a single-precision number but also includes a 24th, implied
    bit that is always a 1.

    There is an implied "binary point" (analogous to a decimal point) to the
    right of the implied bit. The binary point indicates that bits 22 to 0 in
    the mantissa are really a binary fraction. Thus, in the example, the
    mantissa is really a single 1 (the implied bit) followed by a zero binary
    fraction (bits 22 to 0). The mantissa of 1 multiplied by 2 taken to the
    power of the exponent, 2, is 1 x 2^2, or 4.

2.1.3  User-Defined Data Types

    BASIC lets you define new data types using the TYPE statement. A
    user-defined type is an aggregate type made up of elementary BASIC types.
    For example, the following TYPE statement defines a type, SymTabEntry:

    TYPE SymTabEntry
        Identifier AS STRING*40
        LineNumber AS LONG
        Value      AS LONG
    END TYPE

    The new type contains a fixed-length string and two long integers. A
    variable of a user-defined type occupies only as much storage as the sum
    of its components. A SymTabEntry takes up 48 bytes: 40 bytes for the
    fixed-length string and 4 bytes each for the two long integers.

    You may use any of the BASIC data types (except variable-length strings)
    in a user-defined type: short and long integers, single- and
    double-precision floating-point values, and fixed-length strings. However,
    user-defined types cannot include arrays.


2.2  Constants

    Constants are predefined values that do not change during program
    execution. There are two general types of constants: literal constants
    (such as numbers and strings) and symbolic constants.

2.2.1  Literal Constants

    BASIC has two kinds of literal constants: string and numeric. A string
    constant is a sequence of up to 32,767 alphanumeric characters enclosed by
    double quotation marks. These alphanumeric characters can be any of the
    characters (except the double quote character and any carriage-return and
    line-feed sequences) whose ASCII codes fall within the range 0-255. This
    range includes both the actual ASCII characters (0-127) and the extended
    characters (128-255). The following are all valid string constants:

    "HELLO"
    "$25,000.000"
    "Number of Employees"

    Numeric constants are positive or negative numbers. There are four types
    of numeric constants: integer, long integer, fixed point, and floating
    point. Table 2.1 below describes these types and provides examples.

    Fixed-point and floating-point numeric constants can be either
    single-precision or double-precision numbers. Single-precision numeric
    constants are stored with 7 digits of precision (plus the exponent).
    Double-precision numbers are stored with 15 or 16 digits of precision
    (plus the exponent).

    A single-precision constant is any numeric constant that has one of the
    following properties:

    ■ Exponential form denoted by "E"

    ■ A trailing exclamation mark (!)

    ■ A value containing a decimal point that does not have either a "D" in
    the exponent or a trailing number sign (#) and that has fewer than 15
    digits

    ■ A value without a decimal point that has fewer than 15 digits but cannot
    be represented as a long-integer value

    A double-precision constant is any numeric constant that has one of the
    following properties:

    ■ Exponential form denoted by "D"

    ■ A trailing number sign (#)

    ■ A decimal point, no "E" in the exponent or trailing exclamation mark
    (!), and more than 15 digits

    Table 2.1   Types of Numeric Constants

╓┌─┌──────────────────┌─────────────────┌──────────────────┌─────────────────╖
    Type               Subtype           Description        Examples
    ──────────────────────────────────────────────────────────────────────────
    Integer            Decimal           One or more        68 +407 -1
                                        decimal digits
                                        (0-9) with an
                                        optional sign
                                        prefix (+ or -).
                                        The range for
                                        integer decimal
                                        constants is
                                        -32,768 to
                                        +32,767.

    Integer            Hexadecimal       One or more        &H76 &H32F
                                        hexadecimal digits
    Type               Subtype           Description        Examples
    ──────────────────────────────────────────────────────────────────────────
                                        hexadecimal digits
                                        (0-9, a-f, or A-F)
                                        with the prefix &H
                                        or &h. The range
                                        for integer
                                        hexadecimal
                                        constants is &h0
                                        to &hFFFF.

    Integer            Octal             One or more octal  &o347 &1234
                                        digits (0-7) with
                                        the prefix &O, &o,
                                        or &. The range
                                        for integer octal
                                        constants is &o0
                                        to &o177777.

    Long integer       Decimal           One or more        95000000 -400141
                                        decimal digits
    Type               Subtype           Description        Examples
    ──────────────────────────────────────────────────────────────────────────
                                        decimal digits
                                        (0-9) with an
                                        optional sign
                                        prefix (+ or -)
                                        and the suffix &.
                                        The range for long
                                        decimal constants
                                        is -2,147,483,648
                                        to +2,147,483,647.

    Long integer       Hexadecimal       One or more        &H0& &H1AAAAA&
                                        hexadecimal digits
                                        (0-9, a-f, or A-F)
                                        with the prefix &H
                                        or &h and the
                                        suffix &. The
                                        range for long
                                        hexadecimal
                                        constants is &h0&
    Type               Subtype           Description        Examples
    ──────────────────────────────────────────────────────────────────────────
                                        constants is &h0&
                                        to &hFFFFFFFF&.

    Long integer       Octal             One or more octal  &o347& &555577733&
                                        digits (0-7) with
                                        the prefix &O, &o,
                                        or & and the
                                        suffix &. The
                                        range for long
                                        octal constants is
                                        &o0& to
                                        &o37777777777&.

    Fixed point                          Positive or        9.0846
                                        negative real
                                        numbers──numbers
                                        containing decimal
                                        points.

    Type               Subtype           Description        Examples
    ──────────────────────────────────────────────────────────────────────────

    Floating point     Single precision  Positive or        2235.988E-7 2359E6
                                        negative numbers
                                        represented in
                                        exponential form
                                        (similar to
                                        scientific
                                        notation). A
                                        single-precision
                                        floating-point
                                        constant is an
                                        optionally signed
                                        integer or
                                        fixed-point number
                                        (the mantissa)
                                        followed by the
                                        letter E and an
                                        optionally signed
                                        integer (the
    Type               Subtype           Description        Examples
    ──────────────────────────────────────────────────────────────────────────
                                        integer (the
                                        exponent). The
                                        constant's value
                                        is the mantissa
                                        multiplied by the
                                        power of ten
                                        represented by the
                                        exponent. The
                                        range for
                                        single-precision
                                        constants is
                                        -3.37E+38 to
                                        3.37E+38.

    Floating point     Double precision  Double-precision   4.35D-10
                                        floating-point
                                        constants have the
                                        same form as
                                        single-precision
    Type               Subtype           Description        Examples
    ──────────────────────────────────────────────────────────────────────────
                                        single-precision
                                        floating-point
                                        constants, but use
                                        D, rather than E,
                                        to indicate the
                                        exponent.
                                        Double-precision
                                        constants have a
                                        range of
                                        -1.67D+308 to
                                        1.67D+308.
    ──────────────────────────────────────────────────────────────────────────


    Numeric constants in BASIC cannot contain commas. The following are
    examples of numeric constants:

    Single Precision         Double Precision
    ──────────────────────────────────────────────────────────────────────────
    46.8                     345692811.5375901
    -1.09E-6                 -1.09432D-06
    3489.0                   3489.0#
    22!                      987654321.1234567
    ──────────────────────────────────────────────────────────────────────────

2.2.2  Symbolic Constants

    BASIC provides symbolic constants that can be used in place of numeric or
    string values. The following fragment declares two symbolic constants and
    uses one to dimension an array:

    CONST MAXCHARS%=254, MAXBUF%=MAXCHARS%+1
    DIM Buffer%(MAXBUF%)

    The name of a symbolic constant follows the same rules as a BASIC variable
    name. You may include a type-declaration character (%, #, !, or $) in the
    name to indicate its type, but this character is not part of the name. For
    example, after the following declaration, the names N!, N#, N$, N%, and N&
    cannot be used as variable names because they have the same name as the
    constant:

    CONST N=45

    A constant's type is determined either by an explicit type-declaration
    character or the type of the expression. Symbolic constants are unaffected
    by DEFtype statements.

    If you omit the type-declaration character, the constant is given a type
    based on the expression. Strings always yield a string constant. With
    numeric expressions, the expression is evaluated and the constant is given
    the simplest type that can represent it. For example, if the expression
    gives a result that can be represented as an integer, the constant is
    given an integer type.

    See Section 2.4 below, "Scope of Variables and Constants," for
    information about the scope of constants. See the entry for CONST in Part
    2, "Statement and Function Reference," for more information about where
    and how to use symbolic constants.


2.3  Variables

    A variable is a name that refers to an object──a particular number,
    string, or record. (A record is a variable declared to be a user-defined
    type.) Simple variables refer to a single number, string, or record. Array
    variables refer to a group of objects, all of the same type.

    A numeric variable, whether simple or array, can be assigned only a
    numeric value (either integer, long integer, single precision, or double
    precision); a string variable can be assigned only a character-string
    value. You can assign one record variable to another only if both
    variables are the same user-defined type. However, you can always assign
    individual elements of a record to a variable of the corresponding type.

    The following list shows some examples of variable assignments:

    Variable Assignment      Example
    ──────────────────────────────────────────────────────────────────────────
    A constant value         A = 4.5

    The value of another     B$ = "ship of fools" A$ = B$ Profits =
    string or numeric        NetEarnings
    variable
    The value of a record    TYPE EmployeeRec EName AS STRING*25 SocSec AS
    element                  STRING*9 END TYPE DIM CurrentEmp AS EmployeeRec .
                            . . OutSocSec$=CurrentEmp.SocSec

    The value of one record  TYPE FileBuffer EName AS STRING*25 JobClass AS
    variable to another of   INTEGER END TYPE DIM Buffer1 AS FileBuffer DIM
    the same type            Buffer2 AS FileBuffer . . . Buffer2=Buffer1

    The value obtained by    CONST PI = 3.141593 Conversion = 180/PI TempFile$
    combining other          = FileSpec$+".BAK"
    variables, constants,
    and operators
    ──────────────────────────────────────────────────────────────────────────

    See Chapter 3, "Expressions and Operators," for more information on the
    operators used in BASIC for combining variables and constants. In any
    case, the variable must always match the type of data (numeric or string)
    assigned to it.

    Before a variable is assigned a value, its value is assumed to be zero
    (for numeric variables) or null (for string variables). All fields in a
    record, including string fields, are initialized to zero.

2.3.1  Variable Names

    A BASIC variable name may contain up to 40 characters. The characters
    allowed in a variable name are letters, numbers, the decimal point, and
    the type-declaration characters (%, &, !, #, and $).

    The first character in a variable name must be a letter. If a variable
    begins with FN, it is assumed to be a call to a DEF FN function. (As a
    general rule, the use of a FUNCTION is preferred over a DEF FN.)

    A variable name cannot be a reserved word, but embedded reserved words are
    allowed. For example, the following statement is illegal because LOG is a
    reserved word (BASIC is not case sensitive):

    Log = 8

    However, the following statement is legal:

    TimeLog = 8

    Reserved words include all BASIC commands, statements, function names, and
    operator names (see Appendix E, "BASIC Reserved Words," in Programming in
    BASIC for a complete list of reserved words).

    Variable names must also be distinct from both SUB and FUNCTION procedure
    names and symbolic constant (CONST) names.

2.3.2  Declaring Variable Types

    Simple variables can be numeric, string, or record variables. You may
    specify simple variable types by the use of a type-declaration suffix, in
    an AS declaration statement, or in a DEFtype declaration statement.
    Variables may also be declared as arrays.

    2.3.2.1  Type-Declaration Suffix

    Append one of the following type-declaration suffixes to the variable
    name:

    % & ! # $

    The dollar sign ($) is the type-declaration character for string
    variables; that is, it "declares" that the variable represents a string
    and that you can assign a string constant to it of up to 32,767
    characters, as in the example below.

    A$ = "SALES REPORT"

    Numeric-variable names can declare integer values (denoted by the %
    suffix), long-integer values (denoted by the & suffix), single-precision
    values (denoted by the ! suffix), or double-precision values (denoted by
    the # suffix). Single precision is the default for variables without a
    type suffix.

    There is no type-declaration character for a user-defined type.

    2.3.2.2  AS Declaration Statements

    Declare the variable in a declaration having the form

    declare variablename AS type

    where declare can be either DIM, COMMON, REDIM, SHARED, or STATIC, and
    type can be either INTEGER, LONG, SINGLE, DOUBLE, STRING, or a
    user-defined type. For example, the following statement declares the
    variable A as having a long-integer type:

    DIM A AS LONG

    String variables declared in an AS STRING clause can be either
    variable-length strings or fixed-length strings. Variable-length strings
    are "expandable": their length depends on the length of any string
    assigned to them. Fixed-length strings have a constant length, specified
    by adding * number to the AS STRING clause, where number is the length of
    the string in bytes. For example:

    ' String1 can have a variable length:
    DIM String1 AS STRING

    ' String2 has a fixed length of 7 bytes:
    DIM String2 AS STRING*7

    String1  = "1234567890"
    String2  = "1234567890"
    PRINT String1
    PRINT String2

    Output

    1234567890
    1234567

    For more on fixed-length and variable-length strings, see Chapter 4,
    "String Processing," in Programming in BASIC. Declare record variables by
    using the name of the user type in the AS clause:

    TYPE InventoryItem
        Description AS STRING*25
        Number AS STRING*10
        Quantity AS LONG
        OrderPoint AS LONG
    END TYPE
    DIM CurrentItem AS InventoryItem, PreviousItem AS InventoryItem

    Use the format variablename.elementname to refer to individual elements of
    the new variable, as in the following example:

    IF CurrentItem.Description = "Ergonomic Desk Chair" THEN
        PRINT CurrentItem.Number; CurrentItem.Quantity
    END IF

    If you declare a variable with an AS clause, every declaration of the
    variable must use the AS clause. For example, in the following fragment
    the AS clause is required in the COMMON statement because AS was also used
    in the DIM statement:

    CONST MAXEMPLOYEES=250
    DIM EmpNames(MAXEMPLOYEES) AS STRING
    COMMON EmpNames() AS STRING
    .
    .
    .

    2.3.2.3  DEFtype Declaration Statements

    Use the BASIC statements DEFINT, DEFLNG, DEFSTR, DEFSNG, and DEFDBL to
    declare the types for certain variable names. By using one of these
    DEFtype statements, you can specify that all variables starting with a
    given letter or range of letters are one of the elementary variable types,
    without using the trailing declaration character.

    DEFtype statements only affect variable names in the module in which they
    appear. See the DEFtype statement reference pages in Part 2, "Statement
    and Function Reference," for more information.

    The type-declaration suffixes for variable names, the type names accepted
    in AS type declarations, and the memory (in bytes) required for each
    variable type to store the variable's value are listed in Table 2.2.

    Table 2.2   Variable-Type Memory Requirements

╓┌─┌──────────────────┌─────────────────┌──────────────────┌─────────────────╖
                        AS Type           Variable           Size
    Suffix             Name              Type               of Data
                        AS Type           Variable           Size
    Suffix             Name              Type               of Data
    ──────────────────────────────────────────────────────────────────────────
    %                  INTEGER           Integer            2

    &                  LONG              Long integer       4

    !                  SINGLE            Single precision   4

    #                  DOUBLE            Double precision   8

    $                  STRING            Variable-length    Takes 4 bytes for
                                        string             descriptor, 1 byte
                                                            for each character
                                                            in string

    $                  STRING*num        Fixed-length       Takes num bytes
                                        string
    None               Declared          Record variable    Takes as many
                        user-defined type                    bytes as the
                                                            individual
                        AS Type           Variable           Size
    Suffix             Name              Type               of Data
    ──────────────────────────────────────────────────────────────────────────
                                                            individual
                                                            elements require
    ──────────────────────────────────────────────────────────────────────────


    2.3.2.4  Declaring Array Variables

    An array is a group of objects referenced with the same variable name. The
    individual values in an array are elements. Array elements are also
    variables and can be used in any BASIC statement or function that uses
    variables. You "dimension" an array when you use it the first time or when
    you declare the name, type, and number of elements in the array.

    Each element in an array is referred to by an array variable subscripted
    with an integer or an integer expression. (You may use noninteger numeric
    expressions as array subscripts; however, they are rounded to integer
    values.) The name of an array variable has as many subscripts as there are
    dimensions in the array. For example, V(10) refers to a value in a
    one-dimensional array, while T$(1,4) refers to a value in a
    two-dimensional string array.

    The default upper subscript value for any array dimension is 10. The
    maximum subscript value and the number of dimensions can be set by using
    the DIM statement. (See the reference pages for DIM in Part 2, "Statement
    and Function Reference," for more information.) The maximum number of
    dimensions for an array is 60. The maximum number of elements per
    dimension is 32,767.

    You may have arrays of any simple variable type, including records. To
    declare an array of records, first declare the data type in a TYPE
    statement and then dimension the array:

    TYPE TreeNode
        LeftPtr AS INTEGER
        RightPtr AS INTEGER
        DataField AS STRING*20
    END TYPE
    DIM Tree(500) AS TreeNode

    Each element of the array Tree is a record of type TreeNode. To use a
    particular element of a record in an array, use form
    variablename.elementname (dot notation form):

    CONST MAXEMPLOYEES=500

    TYPE EmployeeRec
        EName  AS STRING*25
        SocSec AS STRING*9
    END TYPE
    DIM Employees(MAXEMPLOYEES) AS EmployeeRec
    .
    .
    .
    PRINT Employees(I).EName;" ";Employees(I).SocSec

    Array names are distinct from simple variable names. The array variable T
    and the simple variable T in the following example are two different
    variables:

    DIM T(11)
    T = 2 : T(0) = 1                   'T is simple variable.
    FOR I% = 0 TO 10                   'T(0) is element of array.
        T(I% + 1) = T * T(I%)
    NEXT

    Array elements, like simple variables, require a certain amount of memory,
    depending on the variable type. See Table 2.2 for information on the
    memory requirements for storing individual array elements.

    To find the total amount of memory required by an array, multiply the
    number of elements by the bytes per element required for the array type.
    For example, consider the following two arrays:

    DIM Array1(1 TO 100) AS INTEGER
    DIM Array#(-5 TO 5)

    The first array, Array1, has 100 integer elements, so its values take 200
    bytes of memory. The second array, Array2, has 11 double-precision
    elements, so its values require 88 bytes of memory. Because BASIC must
    store information about the array along with the array's values, arrays
    take more memory than just the space for the values.

2.3.3  Variable Storage Allocation

    BASIC stores different kinds of variables in different areas in memory.
    You need to worry about where variables are stored only if you are either
    doing mixed-language programming or using one of the following BASIC
    statements or functions:

    ■ CALL, CALLS (non-BASIC procedures)

    ■ DECLARE (non-BASIC procedures)

    ■ SADD

    ■ SETMEM

    ■ VARPTR

    ■ VARSEG

    ■ VARPTR$

    BASIC stores variables either in an area called DGROUP or as far objects.
    (DGROUP is the name of the default data segment, the segment referenced
    when DEF SEG is used without an address.) Variables stored in DGROUP can
    be referenced by using near addresses or pointers. A near address consists
    of a single value or offset from the beginning of a segment or block of
    memory. Far objects are referenced by using far addresses or pointers. A
    far address consists of two parts: the starting address of a segment or
    block of memory and the offset within the segment. See the entries for the
    statements listed above for information about getting and using far
    pointers.

    Whether a variable is stored in DGROUP or as a far object depends first on
    whether it is a simple variable or an array. All simple variables are
    stored in DGROUP. Array storage is a little more complex and is slightly
    different between programs run as .EXE files and programs run within the
    QuickBASIC environment.

    In programs run as .EXE files, array variables are stored as follows:

    ■ All static arrays are stored in DGROUP and can be referenced with near
    addresses.

    ■ All dynamic arrays of variable-length strings are also stored in DGROUP
    and can also be referenced with near addresses.

    ■ All other dynamic arrays are stored as far objects and require far
    addresses.

    See Section 2.5 for a description of static and dynamic arrays. In
    programs run within the QuickBASIC environment, array variable storage
    follows these rules:

    ■ All static arrays in a COMMON block are stored in DGROUP and can be
    referenced with near addresses.

    ■ All arrays of variable-length strings are also stored in DGROUP and can
    also be referenced with near addresses.

    ■ All other arrays are stored as far objects and require far addresses.

    Because BASIC attempts to make the most efficient use of memory
    possible, several different things may cause a variable's memory
    location to change. These include a reference to a string literal or
    expression, the invocation of a DEF FN or FUNCTION, the use of a BASIC
    string or memory-related function, and a reference to an implicitly
    dimensioned array.

    To generate accurate results and because BASIC variables may move, use the
    results of VARPTR, VARSEG, VARTPR$, or SADD immediately after a function
    call that affects a variable.


2.4  Scope of Variables and Constants

    Any time a variable appears, BASIC follows a set of rules in determining
    to which object the variable refers. These rules describe a variable's
    scope──the range of statements over which the variable is defined.

    The BASICA interpreter has a very simple scope rule: a variable exists
    when you first use it and persists until the program ends. The scope of a
    variable is from its first use through the end of the program.

    In QuickBASIC, you can control the scope of variables and symbolic
    constants──which helps you write compact, well-defined SUB and FUNCTION
    procedures that don't interfere with each other. You can also make some
    variables available to all procedures in a module, and thereby share
    important data structures among procedures.

    You may think of variables and constants as having one of two scopes:
    global or local. Global variables, once declared, may be used anywhere in
    a module to refer to some single object. Local variables are local to some
    part of the module, the module-level code or one of the procedures. In
    addition, variables can be shared in such a way that they aren't quite
    global, nor are they completely local.

    The rest of this section discusses global and local scope, and shared
    variables. The following skeleton of a program is used in this discussion.
    The program, a main program and two procedures, replaces runs of blanks in
    a file with tab characters──a simple first step in compressing a file.
    (The program is included on the QuickBASIC release disks in the file
    ENTAB.BAS.)

    DEFINT a-z
    DECLARE FUNCTION ThisIsATab(Column AS INTEGER)

    CONST MAXLINE=255, TABSPACE=8
    CONST NO=0, YES=NOT NO
    DIM SHARED TabStops(MAXLINE)
    .
    .
    .
    ' Set the tab positions (uses the global array TabStops).
    CALL SetTabPos
    .
    .
    .
        IF ThisIsATab(CurrentColumn) THEN
            PRINT CHR$(9);
            LastColumn=CurrentColumn
        END IF
    .
    .
    .

    '==================SUB SetTabPos=========================
    ' Set the tab positions in the array TabStops.
    '
    SUB SetTabPos STATIC
        FOR I=1 TO MAXLINE
        TabStops(I)=((I MOD TABSPACE)=1)
        NEXT I
    END SUB

    '===============FUNCTION ThisIsATab======================
    ' Answer the question, "Is this a tab position?"
    '
    FUNCTION ThisIsATab(LastColumn AS INTEGER) STATIC
        IF LastColumn>MAXLINE THEN
        ThisIsATab=YES
        ELSE
        ThisIsATab=TabStops(LastColumn)
        END IF
    END FUNCTION

2.4.1  Global Variables and Constants

    Both variables and symbolic constants can be global in BASIC programs. A
    global variable or global symbolic constant is defined for the entire
    module. For a variable, the only way to make it global is to declare it in
    the module-level code with the SHARED attribute in a DIM, REDIM, or COMMON
    statement. A symbolic constant is a global constant if it is declared in
    the module-level code using a CONST statement.

    In the sample program, the array TabStops is a global variable. Because
    TabStops is declared in a DIM statement with the SHARED attribute, it is
    shared with every procedure in the module. Notice that both procedures in
    the program (ThisIsATab and SetTabPos) use TabStops by making a reference
    to it. Global variables do not require any additional declarations to be
    used in procedures in the module. Similarly, the symbolic constants
    MAXLINE and TABSPACE are global constants. If you use the name of a global
    variable or constant in a procedure, you are referring to the global
    variable and not a local variable of the same name.

────────────────────────────────────────────────────────────────────────────
NOTE
    The SHARED statement allows procedures to share variables with the
    module-level code. This is not the same as making the variable global. See
    Section 2.4.3 below, "Sharing Variables," for more information.
────────────────────────────────────────────────────────────────────────────

2.4.2  Local Variables and Constants

    A local variable or constant exists only within a procedure or the
    module-level code. If the name of a local variable is used in another
    procedure in a module, the name represents a different variable and refers
    to a different object.

    The sample program ENTAB.BAS above includes many local variables. The
    variables CurrentColumn and LastColumn are local to the module-level code.
    The variable I is local to the subprogram SetTabPos. Finally, the variable
    LastColumn in the parameter list of ThisIsATab can be thought of as a
    local variable because it is a formal parameter. (Remember, however, that
    a formal parameter stands for the actual argument passed to the procedure.
    See Section 4.3, "Passing by Reference and Passing by Value," for
    additional information.)

    It is simplest to think of a local variable as any variable that isn't
    global. Any variable that appears in module-level code or in a procedure
    is local if it isn't declared in a DIM, REDIM, or COMMON statement with
    the SHARED attribute. (There is one exception. See Section 2.4.3,
    "Sharing Variables," below.) Even if a variable appears in one of these
    statements, you may still use a local variable of the same name in a
    procedure by declaring the variable in a STATIC statement. If the sample
    program had a DIM SHARED statement declaring I to be a global variable in
    the main program, you could make I a local variable in SetTabPos by adding
    a STATIC statement just after the SUB statement:

    SUB SetTabPos STATIC
    STATIC I
    .
    .
    .

    Any symbolic constant declared inside a SUB or FUNCTION procedure is a
    local constant. For example, in the following fragment, ENDOFLIST is a
    local symbolic constant that exists only in the function FindElement:
    FUNCTION FindElement(X())
    CONST ENDOFLIST = -32767
    .
    .
    .
    END FUNCTION

────────────────────────────────────────────────────────────────────────────
NOTE
    The STATIC statement not only declares a variable to be local: it also
    directs the compiler to save the value of the variable between procedure
    calls. Do not use STATIC statements in recursive procedures if you do not
    want a variable's value saved between calls. See Section 2.6, "Automatic
    and STATIC Variables," for more information.
────────────────────────────────────────────────────────────────────────────

2.4.3  Sharing Variables

    You can share variables among parts of a module without making the
    variables global by using the SHARED statement. For example, to share
    TabStops without making it a global variable, you would remove the SHARED
    attribute in the module-level code and add SHARED statements to the two
    procedures:

    DIM TabStops(MAXLINE)
    .
    .
    .
    SUB SetTabPos STATIC
    SHARED TabStops()
    .
    .
    .
    FUNCTION ThisIsATab(LastColumn AS INTEGER) STATIC
    SHARED TabStops()
    .
    .
    .

    The SHARED statements indicate that the name TabStops in both procedures
    refers to the same variable defined at the module level.

2.4.4  DEF FN Functions

    The DEF FN function is an exception to the BASIC scope rules. Every
    variable in a DEF FN function that isn't in its parameter list is part of
    the module-level code. To make a variable local to a DEF FN, you must
    declare the variable in a STATIC statement. The STATIC statement in the
    following DEF FN function makes the variable I local:

    CONST NO = 0, YES = NOT NO

    DEF FNIsThereAZ (A$)
    STATIC I
        FOR I = 1 TO LEN(A$)
        IF UCASE$(MID$(A$, I, 1)) = "Z" THEN
            FNIsThereAZ = YES
            EXIT DEF
        END IF
        NEXT I
        FNIsThereAZ = NO
    END DEF

    Remember, as a general rule a FUNCTION is preferred over a DEF FN because
    of the improved portability and increased modularity the FUNCTION
    provides.

2.4.5  Summary of Scope Rules

    The following list summarizes BASIC's scope rules:

    ■ A variable declared in a DIM, REDIM, or COMMON statement with the SHARED
    attribute is a global variable. Any SUB or FUNCTION procedure can refer
    to the variable.

    ■ A symbolic constant is global if it is declared in a CONST statement in
    the module-level code. Symbolic constants declared in a SUB or FUNCTION
    are local.

    ■ A variable is a local variable if it appears in a procedure and is not
    declared as a global variable. You can use the name of a global variable
    as a local variable in a procedure by declaring it in the procedure with
    the STATIC statement or by using it as a formal parameter.

    ■ The SHARED statement lets you share a variable with the module-level
    code and other procedures with equivalent SHARED statements without
    making the variable a global variable.

    ■ All variables in a DEF FN function are part of the module-level code
    unless they are either explicitly made local in a STATIC statement or
    are formal parameters.


2.5  Static and Dynamic Arrays

    You can get better control of your program's use of memory by controlling
    when storage is set aside for arrays. Storage for arrays can be set aside
    when the program is compiled or when the program is running. Arrays given
    storage when the program is compiled are static arrays. Dynamic arrays
    have storage set aside when the program is run. The storage taken by
    dynamic arrays can be eliminated while the program is not running in order
    to free memory for other uses. See the entries for DIM, ERASE, and REDIM
    in Part 2, "Statement and Function Reference," for specific information
    about manipulating dynamic arrays.

    How an array is declared can determine whether the array is static or
    dynamic. By default, arrays dimensioned with constant subscripts or arrays
    that are implicitly dimensioned are static arrays. Arrays dimensioned with
    variable subscripts or that are first declared in a COMMON statement are
    dynamic arrays. In a SUB or FUNCTION not declared static, all arrays are
    dynamic.

    You can also use the ¢STATIC and ¢DYNAMIC metacommands to control how
    array storage is allocated. However, the ¢STATIC metacommand cannot force
    arays to be static in a procedure not declared static; in such a procedure
    all arrays are dynamic. See Appendix F, "Metacommands," in Programming in
    BASIC for more information.

    In some cases, you can allow more space for strings by replacing static
    arrays with dynamic arrays. In programs run as .EXE files, the space for
    static arrays is allocated from DGROUP, an area where strings are stored.
    On the other hand, dynamic arrays, other than variable-length string
    arrays, do not take any space in DGROUP; they are stored as far objects
    and require far addresses.


2.6  Automatic and Static Variables

    BASIC procedures can use both automatic and static variables. Automatic
    variables are initialized at the start of each call to the FUNCTION or
    SUB; static variables retain values between calls.

    You can control whether the default is automatic or static by using or
    omitting the STATIC keyword in the SUB or FUNCTION statement. If you omit
    STATIC, then the default for variables is automatic. When you use STATIC,
    the default for all variables in the procedure is static: the values of
    the variables are saved between procedure calls.

    You can make selected variables in a procedure static by making the
    default automatic (omitting STATIC from the SUB or FUNCTION statement) and
    using the STATIC statement. The following program uses a FUNCTION that has
    two static variables: Start% and SaveStr$. The other variables are
    automatic. The FUNCTION takes a string and returns one token──a string of
    characters──until the end of the string is reached. On the first call,
    StrTok$ makes a local copy of the string Srce$ in the static variable
    SaveStr$. After the first call, StrTok$ returns additional tokens from the
    string using the static variable Start% to remember where it left off. All
    of the other variables (BegPos%, Ln%, etc.) are automatic. (This program
    is included on the QuickBASIC distribution disks under the file name
    TOKEN.BAS.)

    DECLARE FUNCTION StrTok$(Source$,Delimiters$)

    LINE INPUT "Enter string: ",P$
    ' Set up the characters that separate tokens.
    Delimiters$=" ,;:().?"+CHR$(9)+CHR$(34)
    ' Invoke StrTok$ with the string to tokenize.
    Token$=StrTok$(P$,Delimiters$)
    WHILE Token$<>""
        PRINT Token$
        ' Call StrTok$ with a null string so it knows this
        ' isn't the first call.
        Token$=StrTok$("",Delimiters$)
    WEND

    FUNCTION StrTok$(Srce$,Delim$)
    STATIC Start%, SaveStr$

        ' If first call, make a copy of the string.
        IF Srce$<>"" THEN
        Start%=1 : SaveStr$=Srce$
        END IF

        BegPos%=Start% : Ln%=LEN(SaveStr$)
        ' Look for start of a token (character that isn't
        ' delimiter).
        WHILE(BegPos%<=Ln% AND INSTR(Delim$,MID$(SaveStr$,BegPos%,1))<>0)
        BegPos%=BegPos%+1
        WEND
        ' Test for token start found.
        IF BegPos% > Ln% THEN
        StrTok$="" : EXIT FUNCTION
        END IF
        ' Find the end of the token.
        End%=BegPos%
        WHILE(End%<=Ln%AND INSTR(Delim$,MID$(SaveStr$,End%,1))=0)
        End%=End%+1
        WEND

    StrTok$=MID$(SaveStr$,BegPos%,End%-BegPos%)
        ' Set starting point for search for next token.
        Start%=End%

    END FUNCTION

    Output

    Enter string: Allen spoke: "What's a hacker, anyway?"
    Allen
    spoke
    What's
    a
    hacker
    anyway


2.7  Type Conversion

    When necessary, BASIC converts a numeric constant from one type to
    another, according to the following rules:

    ■ If a numeric constant of one type is set equal to a numeric variable of
    a different type, the numeric constant is stored as the type declared in
    the variable name, as in the following example:

    A% = 23.42
    PRINT A%

    Output

    23

    If a string variable is set equal to a numeric value, or vice versa, an
    error message is generated that reads Type Mismatch.

    ■ During expression evaluation, the operands in an arithmetic or
    relational operation are converted to the same degree of precision, that
    of the most precise operand, as each operation is performed. Also, the
    result of an arithmetic operation is returned to the final degree of
    precision, as in this example:

    X% = 2 : Y! = 1.5 : Z# = 100
    A! = X% / Y!
    PRINT A! * Z#

    Output

    133.3333373069763

    Although the preceding result is displayed in double precision (because
    of the double-precision variable Z#), it has only single-precision
    accuracy because the assignment to A! forced the result of X% / Y! to be
    reduced to single-precision accuracy. This explains the nonsignificant
    digits (73069763) after the fifth decimal place. Contrast this with the
    output from the following example in which the intermediate result of X%
    / Y! is retained in double-precision:

    X% = 2 : Y# = 1.5 : Z# = 100
    PRINT X% / Y# * Z#

    Output

    133.3333333333333

    ■ Logical operators such as AND and NOT convert their operands to long
    integers if necessary. Operands must be in the range -2,147,483,648 to
    +2,147,483,647 or an Overflow error message is generated. See Chapter
    3, "Expressions and Operators," for more information on logical
    operators.

    ■ When a floating-point value is converted to an integer, the fractional
    portion is rounded, as in this example:

    Total% = 55.88
    PRINT Total%

    Output

    56



────────────────────────────────────────────────────────────────────────────
Chapter 3   Expressions and Operators

        3.1  Expressions and Operators Defined
        3.2  Hierarchy of Operations
        3.3  Arithmetic Operators
        3.3.1   Integer Division
        3.3.2   Modulo Arithmetic
        3.3.3   Overflow and Division by Zero
        3.4  Relational Operators
        3.5  Logical Operators
        3.6  Functional Operators
        3.7  String Operators

    This chapter discusses how to combine, modify, compare, or get information
    about expressions by using the operators available in BASIC.

    Anytime you do a calculation or manipulate a string, you are using
    expressions and operators. This chapter describes how expressions are
    formed, discusses the order in which BASIC uses operators, and concludes
    by describing the following five kinds of operators:

    ■ Arithmetic operators, used to perform calculations

    ■ Relational operators, used to compare strings and numeric values

    ■ Logical operators, used to test complex conditions or manipulate
    individual bits

    ■ Functional operators, used to supplement simpler operators

    ■ String operators, used to combine and compare strings


3.1  Expressions and Operators Defined

    An expression can be a string or numeric constant, a variable, or a single
    value obtained by combining constants, variables, and other expressions
    with operators. Operators perform mathematical or logical operations on
    values. The operators provided by BASIC can be divided into five
    categories, as follows:

    1. Arithmetic

    2. Relational

    3. Logical

    4. Functional

    5. String


3.2  Hierarchy of Operations

    The BASIC operators have an order of precedence: when several operations
    take place within the same program statement, some operations are done
    before others. Operations are executed in the following order:

    1. Arithmetic operations

        a. Exponentiation (^)

        b. Negation (-)

        c. Multiplication and division (*,/)

        d. Integer division (\)

        e. Modulo arithmetic (MOD)

        f. Addition and subtraction (+,-)

    2. Relational operations (=, >, <, <>, <=, >=)

    3. Logical operations

        a. NOT

        b. AND

        c. OR

        d. XOR

        e. EQV

        f. IMP

    An exception to the order of operations listed above occurs when an
    expression has adjacent exponentiation and negation operators. In this
    case, the negation is done first. For example, the following statement
    prints the value .0625 (equivalent to 4^-2), not -16 (equivalent to
    -(4^2)):

    PRINT 4 ^ - 2

    If the operations are different and are of the same level, the leftmost
    one is executed first and the rightmost last, as explained below.

    A = 3 + 6 / 12 * 3 - 2    'A = 2.5

    The order of operations in the preceding example is as follows:

    Operation                Result
    ──────────────────────────────────────────────────────────────────────────
    6 / 12                   0.5
    0.5 * 3                  1.5
    3 + 1.5                  4.5
    4.5 - 2                  2.5
    ──────────────────────────────────────────────────────────────────────────

    In a series of additions or a series of multiplications, there is no fixed
    evaluation order. Either 3 + 5 or 5 + 6 may be calculated first in the
    following statement:

    C = 3 + 5 + 6

    Usually this does not cause problems. However, it may cause a problem if
    you have a series of FUNCTION procedure calls:

    C = Incr(X) + Decr(X) + F(X)

    If any of the three FUNCTION procedures modify X or change shared
    variables, the result depends on the order in which BASIC does the
    additions. You can avoid the situation by assigning the results of the
    FUNCTION calls to temporary variables and then performing the addition:

    T1 = Incr(X) : T2 = Decr(X) : T3 = F(X)
    C = T1 + T2 + T3


3.3  Arithmetic Operators

    Parentheses change the order in which arithmetic operations are performed.
    Operations within parentheses are performed first. Inside parentheses, the
    usual order of operation is maintained. Here are some sample algebraic
    expressions and their BASIC counterparts:

    Algebraic Expression     BASIC Expression
    ──────────────────────────────────────────────────────────────────────────
    X - Y
    -----                    (X-Y)/Z
    Z

    XZ
    ---                      X*Y/Z
    Z

    X + Y
    -----                    (X+Y)/Z
    Z

    (X<^>2)<^>Y              (X^2)^Y

    X<^>YZ                   X^(Y*Z)

    X(-Y)                    X*(-Y)
    ──────────────────────────────────────────────────────────────────────────

    :BTGenerally, two consecutive operators must be separated by parentheses.
    Exceptions to this rule are * - , * +, ^ -, and ^ + . The last expression
    in the right-hand column above could also be written X*-Y.

    See the preceding section for information about the order in which
    arithmetic operations are performed.

3.3.1  Integer Division

    Integer division is denoted by the backslash (\) instead of the forward
    slash (/), which indicates floating-point division. Before integer
    division is performed, operands are rounded to integers or long integers,
    and thus must be greater than -2,147,483,648.5 and less than
    +2,147,483,647.5. The quotient of an integer division is truncated to an
    integer, as illustrated below:

    PRINT 10\4, 10/4, -32768.499\10, -32768.499/10

    Output

    2             2.5          -3276         -3276.8499

3.3.2  Modulo Arithmetic

    Modulo arithmetic is denoted by the modulus operator MOD. Modulo
    arithmetic provides the remainder, rather than the quotient, of an integer
    division, as in this example:

    X% = 10.4\4
    REMAINDER% = INT(10.4) - 4*X%
    '10\4 = 2, with remainder 2
    PRINT REMAINDER%, 10.4 MOD 4

    Output

    2             2

3.3.3  Overflow and Division by Zero

    Dividing by zero, raising zero to a negative power, and arithmetic
    overflow produce run-time errors. These errors can be trapped by an
    error-trapping routine. See Chapter 6, "Error and Event Trapping," in
    Programming in BASIC for more information about writing error-trapping
    routines.


3.4  Relational Operators

    Relational operators are used to compare two values, as shown in Table
    3.1. The result of the comparison is either "true" (nonzero) or "false"
    (zero). This result can then be used to make a decision regarding program
    flow. Although BASIC treats any nonzero value as true, true is usually
    represented by -1.

    Table 3.1   Relational Operators and Their Functions

    Operator           Relation Tested                      Expression
    ──────────────────────────────────────────────────────────────────────────
    =                  Equality☼                            X = Y
    < >                Inequality                           X < > Y
    <                  Less than                            X < Y
    >                  Greater than                         X > Y
    <=                 Less than or equal to                X <= Y
    =                  Greater than or equal to             X >= Y
    ──────────────────────────────────────────────────────────────────────────

    When arithmetic and relational operators are combined in one expression,
    the arithmetic operations are always done first. For example, the
    following expression is true if the value of X + Y is less than the value
    of (T - 1)/Z:

    X + Y < (T - 1)/Z

    Be careful using relational operators with single- and double-precision
    values. Calculations may give extremely close but not identical results.
    In particular, avoid testing for identity between two values. For example,
    the PRINT statement in the following IF statement is not executed unless
    A! is exactly equal to 0.0:

    IF A! = 0.0 THEN PRINT "Exact result."

    When A! is an extremely small value, for example 1.0E-23, the PRINT
    statement is not executed.

    In addition, a compiled program (an .EXE file) may give different results
    than the same program run in the QuickBASIC environment. Files with the
    .EXE extension23 contain more efficient code that may change the way
    single- and double-precision values are compared. For example, the
    following fragment prints Equal when run in the environment, but prints
    Not Equal when compiled:

    B!=1.0
    A!=B!/3.0
    IF A!=B!/3.0 THEN PRINT "Equal" ELSE PRINT "Not Equal"

    Because the .EXE file version makes more extensive use of a math
    coprocessor chip (or coprocessor emulation), A! and B!/3.0 are slightly
    different values.

    You can avoid problems in comparisons by performing calculations outside
    comparisons. The following rewritten fragment produces the same results in
    the environment and as an .EXE file:

    B!=1.0
    A!=B!/3.0
    Tmp!=B!/3.0
    IF A!=Tmp! THEN PRINT "Equal" ELSE PRINT "Not Equal"


3.5  Logical Operators

    Logical operators perform tests on multiple relations, bit manipulations,
    or Boolean operations and return a true (nonzero) or false (zero) value to
    be used in making a decision.

■ Examples

    IF D < 200 AND F < 4 THEN 80

    WHILE I > 10 OR K < 0
    .
    .
    .
    WEND

    IF NOT P THEN PRINT "Name not found"

    There are six logical operators in BASIC; they are listed in Table 3.2 in
    order of precedence:

    Table 3.2   BASIC Logical Operators

    Operator                 Meaning
    ──────────────────────────────────────────────────────────────────────────
    NOT                      Logical complement
    AND                      Conjunction
    OR                       Disjunction (inclusive "or")
    XOR                      Exclusive "or"
    EQV                      Equivalence
    IMP                      Implication
    ──────────────────────────────────────────────────────────────────────────

    Each operator returns results as indicated in Table 3.3. A "T" indicates
    a true value and an "F" indicates a false value. Operators are listed in
    order of operator precedence.

    Table 3.3   Values Returned by Logical Operations

    Values of                  Value Returned by Logical Operator
                                X        X        X         X        X
                        NOT      AND      OR       XOR       EQV      IMP
    X        Y          X        Y        Y        Y         Y        Y
    ──────────────────────────────────────────────────────────────────────────
    T        T          F        T        T        F         T        T
    T        F          F        F        T        T         F        F
    F        T          T        F        T        T         F        T
    F        F          T        F        F        F         T        T
    ──────────────────────────────────────────────────────────────────────────

    In an expression, logical operations (also known as Boolean operations)
    are performed after arithmetic and relational operations. The operands of
    logical operators must be in the range -2,147,483,648 to +2,147,483,647.
    Operands are converted to integers (or, if necessary, long integers)
    before the logical operation is done. (If the operands are not in this
    range, an error results.) If the operands are either 0 or -1, logical
    operators return 0 or -1 as the result, as in the following example. (Note
    the similarity of the output from this program to Table 3.3: "T" becomes
    -1 and "F" becomes 0.)

■ Example

    PRINT " X       Y      NOT     AND     OR      ";
    PRINT "XOR     EQV     IMP"
    PRINT
    I = 10 : J = 15
    X = (I = 10) : Y = (J = 15)  'X is true (-1); Y is true (-1)
    CALL TruthTable (X,Y)
    X = (I > 9) : Y = (J > 15)   'X is true (-1); Y is false (0)
    CALL TruthTable (X,Y)
    X = (I <> 10) : Y = (J < 16) 'X is false (0); Y is true (-1)
    CALL TruthTable (X,Y)
    X = (I < 10) : Y = (J < 15)  'X is false (0); Y is false (0)
    CALL TruthTable (X,Y)
    END

    SUB TruthTable(X,Y) STATIC
    PRINT X "    " Y "    ";NOT X "   " X AND Y "     " X OR Y;
    PRINT "    " X XOR Y "    " X EQV Y "    " X IMP Y
    PRINT
    END SUB

    Output

    X      Y     NOT    AND     OR     XOR    EQV    IMP

    -1     -1      0     -1     -1      0     -1     -1

    -1      0      0      0     -1     -1      0      0

    0     -1     -1      0     -1     -1      0     -1

    0      0     -1      0      0      0     -1     -1

    Logical operators compare each bit of the first operand with the
    corresponding bit in the second operand to compute the bit in the result;
    in these "bit-wise" comparisons, a 0 bit is equivalent to a "false" value
    (F) in Table 3.3, while a 1 bit is equivalent to a "true" value (T).

    It is possible to use logical operators to test bytes for a particular bit
    pattern. For example, the AND operator can be used to mask all but one of
    the bits of a status byte, while the OR operator can be used to merge two
    bytes to create a particular binary value.

■ Example

    PRINT 63 AND 16

    PRINT -1 AND 8

    PRINT 10 OR 9

    PRINT 10 XOR 10,           'Always 0

    PRINT NOT 10, NOT 11, NOT 0     'NOT X = -(X + 1)

    Output

    16
    8
    11
    0          -11           -12           -1

    The first PRINT statement uses AND to combine 63 (111111 binary) and 16
    (10000). When BASIC calculates the result of an AND, it combines the
    numbers bit by bit, producing a one only when both bits are one. Because
    the only bit that is a one in both numbers is the fifth bit, only the
    fifth bit in the result is a one. The result is 16, or 10000 in binary. In
    the second PRINT statement, the numbers -1 (binary 1111111111111111) and 8
    (binary 1000) are combined using another AND operation. The only bit that
    is a one in both numbers is the fourth bit, so the result is 8 decimal or
    1000 binary. The third PRINT statement uses an OR to combine 10 (binary
    1010) and 9 (binary 1001). An OR produces a one bit whenever either bit is
    a one, so the result of the OR in the third PRINT is 11 (binary 1011). The
    XOR in the fourth PRINT combines the number 10 (1010 binary) with itself.
    The result is a zero because an XOR produces a one only when either, but
    not both, bits are one.

    Performing a NOT on a number changes all one bits to zeros and all zero
    bits to ones. Because of the way two's complement numbers work, taking the
    NOT of a value is the same as adding one to the number and then negating
    the number. In the final PRINT statement, the expression NOT 10 yields a
    result of -11.


3.6  Functional Operators

    A function is used in an expression to call a predetermined operation to
    be performed on an operand. For example, SQR is a functional operator used
    twice in the following assignment statement:

    A = SQR (20.25) + SQR (37)

    BASIC incorporates two kinds of functions: intrinsic and user-defined.
    Many predefined (intrinsic) functions are built into the language.
    Examples are the SQR (square root) and SIN (sine) functions.

    You may define your own functions with the FUNCTION...END FUNCTION
    construction and the older, obsolete DEF FN...END DEF construction. Such
    functions are defined only for the life of the program (unless they are in
    a Quick library) and are not part of the BASIC language. In addition to
    FUNCTION and DEF FN, BASIC allows you to define subprograms with SUB. For
    more information on defining your own functions and subprograms, see the
    appropriate entries in Chapter 4, "Programs and Modules," and Part 2,
    "Statement and Function Reference," in this manual, as well as Chapter 2,
    "SUB and FUNCTION Procedures," in Programming in BASIC.


3.7  String Operators

    A string expression consists of string constants, string variables, and
    other string expressions combined by string operators. There are two
    classes of string operations: concatenation and string function.

    The act of combining two strings is called concatenation. The plus symbol
    (+) is the concatenation operator for strings. For example, the following
    program fragment combines the string variables A$ and B$ to produce the
    output shown:

    A$ = "FILE": B$ = "NAME"
    PRINT A$ + B$
    PRINT "NEW " + A$ + B$

    Output

    FILENAME
    NEW FILENAME

    Strings can be compared using the following relational operators (see
    Table 3.1):

    < > = < > <= >=

    Note that these are the same relational operators used with numbers.

    String comparisons are made by taking corresponding characters from each
    string and comparing their ASCII codes. If the ASCII codes are the same
    for all the characters in both strings, the strings are equal. If the
    ASCII codes differ, the lower code number precedes the higher. If the end
    of one string is reached during string comparison, the shorter string is
    smaller if they are equal up to that point. Leading and trailing blanks
    are significant. The following are examples of true string expressions:

    "AA" < "AB"
    "FILENAME" = "FILE"+"NAME"
    "X&" > "X#"
    "CL " > "CL"
    "kg" > "KG"
    "SMYTH" < "SMYTHE"
    B$ < "9/12/78"              'where B$ = "8/12/85"

    String comparisons can be used to test string values or to alphabetize
    strings. All string constants used in comparison expressions must be
    enclosed in quotation marks. See Appendix A, "Keyboard Scan Codes and
    ASCII Character Codes," for more information about the ASCII codes.



────────────────────────────────────────────────────────────────────────────
Chapter 4   Programs and Modules

        4.1  Modules
        4.2  Procedures
        4.2.1   FUNCTION Procedures
        4.2.2   SUB Procedures
        4.2.3   DEF FN Functions
        4.3  Passing by Reference and Passing by Value
        4.4  Recursion

    This chapter discusses the largest parts of a program──modules and
    procedures. The chapter describes how modules are organized and how BASIC
    procedures communicate with other parts of a program.

    Specifically, the chapter explains how to

    ■ Organize modules

    ■ Understand different kinds of QuickBASIC procedures

    ■ Pass arguments to a procedure

    ■ Write recursive code


4.1  Modules

    BASIC programs consist of one or more modules. A module is a source file
    that can be separately compiled. Declarations, executable statements──any
    BASIC statement──can appear in a module.

    A module may contain SUB and FUNCTION procedures, as well as code not
    directly part of a SUB or FUNCTION. Statements that are not part of a SUB
    or FUNCTION are called module-level code. Module-level code includes
    declarative statements like DIM and TYPE as well as error- and
    event-handling code.

    A program has one special module, the main module. The main module
    contains the entry point of the program (the place where the program
    starts running). Each program contains only one main module; module-level
    code it contains corresponds to what is often called the main program.


4.2  Procedures

    This section discusses the two newer QuickBASIC procedures: FUNCTION
    procedures and SUB procedures. It also covers the older DEF FN function
    and compares it with the newer procedures.

    See Chapter 2, "SUB and FUNCTION Procedures," in Programming in BASIC for
    examples and information about when to use different kinds of procedures.

4.2.1  FUNCTION Procedures

    FUNCTION procedures provide a powerful alternative to DEF FN functions.
    Like DEF FN functions, FUNCTION procedures are used in expressions and
    directly return a single value. There are, however, important differences.

    FUNCTION procedures pass values by reference, so a FUNCTION procedure can
    return additional values by changing variables in its argument list. In
    addition, FUNCTION procedures can be used recursively──a function can call
    itself (see Section 4.4 below for more information).

    Unlike DEF FN functions, a FUNCTION procedure may be used outside the
    module in which it is defined. You must include a DECLARE statement if you
    use a FUNCTION defined in another module. QuickBASIC automatically
    generates DECLARE statements for FUNCTION procedures defined and used in
    the same module. You can also enter the DECLARE yourself:

    DECLARE FUNCTION Log10(X)

    INPUT "Enter a number: ",Num
    PRINT "10 ^ Log10(";Num;") is" 10.0^Log10(Num)
    END
    ' Function to find log base 10 of a number using
    ' BASIC's built-in natural logarithm function.
    FUNCTION Log10 (X) STATIC
        Log10=LOG(X)/LOG(10.0)
    END FUNCTION

    FUNCTION procedures also differ from DEF FN functions in that they are not
    part of the module-level code.

4.2.2  SUB Procedures

    Unlike DEF FN functions and FUNCTION procedures, SUB is invoked as a
    separate statement:

    ' Print a message in the middle of the screen.
    CLS
    CALL PrntMsg(12,40,"Hello!")
    END

    ' Print message at the designated row and column.
    SUB PrntMsg(Row%,Col%,Message$) STATIC
        ' Save current cursor position.
        CurRow%=CSRLIN
        CurCol%=POS(0)
        ' Print the message at the location.
        LOCATE Row%,Col% : PRINT Message$;
        ' Restore cursor location.
        LOCATE CurRow%,CurCol%
    END SUB

    SUB procedures can be used to return multiple values to a calling routine
    and are not invoked as part of an expression.

    All SUB arguments are passed by reference. This allows SUB procedures to
    return values by changing variables in the argument list──the only way a
    SUB can return a value.

    You can invoke SUB procedures without using the CALL keyword if the SUB is
    declared:

    DECLARE SUB PrntMsg (Row%,Col%,Msg$)

    ' Print a message in the middle of the screen.
    CLS
    PrntMsg 12,40,"Hello!"    'Note the missing parentheses.
    END
    .
    .
    .

    SUB procedures can be used recursively──that is, you can write a SUB
    procedure that calls itself.

4.2.3  DEF FN Functions

    DEF FN functions are always part of a program's module-level code. For
    this reason, their use is more limited than that of SUB or FUNCTION
    procedures. Like FUNCTION procedures, DEF FN functions return single
    values and are used like built-in BASIC functions:

    ' Function to find log base 10 of a number using
    ' BASIC's built-in natural logarithm function.
    DEF FNLog10 (X)
        FNLog10=LOG(X)/LOG(10.0)
    END DEF

    INPUT "Enter a number: ",Num
    PRINT "10 ^ Log10(";Num;") is" 10.0^FNLog10(Num)
    END

    DEF FN function arguments are passed by value (see Section 4.3 below for
    more information). The name of a DEF FN function always begins with FN. In
    addition, DEF FN functions cannot be used recursively and must be defined
    before they are used. DEF FN functions cannot be called from outside the
    module in which they are defined.


4.3  Passing by Reference and Passing by Value

    BASIC uses two different ways of passing arguments to a procedure. The
    phrase "passing by reference," used with SUB and FUNCTION procedures,
    means the address of each argument is passed to the procedure by placing
    the address on the stack. The phrase "passing by value," used in DEF FN
    functions, indicates that the value of the argument is placed on the
    stack, rather than the address. Because the procedure does not have access
    to the variable when an argument is passed by value, the procedure cannot
    change the variable's value.

    Sometimes passing an argument by value to a SUB or FUNCTION is more
    convenient. You can simulate a pass by value by using an expression in the
    SUB call or FUNCTION invocation:

    Xcoordinate=Transform((A#))

    Because(A#) is an expression, BASIC calculates its value, A#, and passes
    the address of a temporary location containing the value. An address is
    still passed, but because it is the address of a temporary location, the
    action simulates a pass by value.


4.4  Recursion

    QuickBASIC lets you write recursive SUB or FUNCTION procedures (procedures
    that call themselves). For example, the following program uses a recursive
    FUNCTION to reverse a string of characters:

    DECLARE FUNCTION Reverse$ (StringVar$)

    LINE INPUT "Enter string to reverse: ", X$
    PRINT Reverse$(X$)

    END

    FUNCTION Reverse$ (S$)

        C$ = MID$(S$, 1, 1)
        IF C$ = "" THEN
        ' The first character is null, so return
        ' null--there's no more string left.
        Reverse$ = ""
        ELSE
        ' The reverse of a nonnull string is the first
        ' character appended to the reverse of the remaining
        ' string.
        Reverse$ = Reverse$(MID$(S$, 2)) + C$
        END IF

    END FUNCTION

    Output

    Enter string to reverse: abcdefgh...tuvwxyz
    zyxwvut...hgfedcba

    Reverse$ reverses a string by first testing for the simplest case──a null
    string. If the string is null, then a null string is returned. If the
    string is not null──there are characters──then Reverse$ simplifies the
    problem. The reverse of a non-null string is the rest of the string (C$)
    with the first character of the string concatenated to it. So Reverse$
    calls itself to reverse the rest of the string and when this is done
    concatenates the first character to the reversed string.

    Recursion can use a lot of memory because automatic variables inside the
    FUNCTION or SUB must be saved in order to restart the procedure when the
    recursive call is finished. Because automatic variables are saved on the
    stack, you may need to increase the stack size with the CLEAR statement to
    keep from running out of stack space. Use the FRE function to determine by
    how many bytes you need to adjust the stack size.



────────────────────────────────────────────────────────────────────────────
PART 2  STATEMENT AND FUNCTION REFERENCE
────────────────────────────────────────────────────────────────────────────

    Part 2 is a dictionary of BASIC statements and functions. Each entry
    includes information on the statement's action or effect and its syntax.
    The statement's arguments, options, and typical usage are explained
    further under "Remarks."

    The "See Also" sections refer you to related statements. Differences from
    BASICA are included where appropriate. Finally, a sample program (or a
    reference to one) is included for each QuickBASIC statement or function so
    you can see exactly how it works.


────────────────────────────────────────────────────────────────────────────
ABS Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the absolute value of a numeric expression

■ Syntax

    ABS(numeric-expression)

■ Remarks

    The absolute value function returns the unsigned magnitude of its
    argument. For example, ABS(-1) and ABS(1) are both 1.

■ Example

    The following example finds an approximate value for a cube root. It uses
    ABS to find the difference between two guesses to see if the current guess
    is accurate enough.

    DEFDBL A-Z

    FUNCTION CubeRoot(Value,Precision) STATIC
    '  Make the first two guesses.
        X1=0.0# : X2=Value

    '  Go until the difference between two guesses is
    '  less than the required precision.

        DO UNTIL ABS(X1-X2) < Precision
        X=(X1+X2)/2.0#
        ' Adjust the guesses.
        IF X*X*X-Value < 0.0# THEN
            X1=X
        ELSE
            X2=X
        END IF
        LOOP
        CubeRoot=X
    END FUNCTION

    INPUT "Enter a value: ",X
    PRINT "The cube root is ";CubeRoot(X,.0000001#)

■ Output

    Enter a value: 27
    The cube root is  2.999999972060323


────────────────────────────────────────────────────────────────────────────
ASC Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns a numeric value that is the ASCII code for the first character in
    a string expression

■ Syntax

    ASC(stringexpression)

■ Remarks

    If stringexpression is null, ASC produces a run-time error message
    (Illegal function call).

■ See Also

    CHR$; Appendix A, "Keyboard Scan Codes and ASCII Character Codes"

■ Example

    The following example uses ASC to calculate a hash value──an index value
    for a table or file──from a string:

    CONST HASHTABSIZE=101

    FUNCTION HashValue(S$,Size) STATIC

        TmpVal=0
        FOR I=1 TO LEN(S$)
        ' Convert the string to a number by summing the values
        ' of individual letters.
        TmpVal=TmpVal+ASC(MID$(S$,I,1))
        NEXT I
        ' Divide the sum by the size of the table.
        HashValue=TmpVal MOD Size

    END FUNCTION

    INPUT "Enter a name: ",Nm$
    PRINT "The hash value is ";HashValue(Nm$,HASHTABSIZE)

■ Output

    Enter a name: Bafflegab
    The hash value is  66


────────────────────────────────────────────────────────────────────────────
ATN Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the arctangent of a numeric expression (the angle whose tangent is
    equal to the numeric expression)

■ Syntax

    ATN(numeric-expression)

■ Remarks

    The numeric-expression can be of any numeric type.

    The result is given in radians and is in the range -π/2 to π/2 radians,
    where π=3.141593. ATN is evaluated by default in single precision unless
    numeric-expression is a double-precision value. Then ATN is evaluated in
    double precision.

■ Example

    The following example first finds the tangent of π/4 and then takes the
    arctangent of the value. The result is π/4.

    CONST PI=3.141592653

    PRINT ATN(TAN(PI/4.0)), PI/4.0

■ Output

    .78539816325  .78539816325


────────────────────────────────────────────────────────────────────────────
BEEP Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Sounds the speaker

■ Syntax

    BEEP

■ Remarks

    The BEEP statement makes a sound through the loudspeaker. This statement
    makes the same sound as the following statement:

    PRINT CHR$(7)

■ Example

    The following example uses BEEP to indicate an error in the response:

    DO
        INPUT "Continue (Y or N)";Response$
        R$=UCASE$ (MID$ (Response$,1,1))
        IF R$="Y" OR R$="N" THEN EXIT DO
        BEEP
    LOOP


────────────────────────────────────────────────────────────────────────────
BLOAD Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Loads a memory-image file, created by BSAVE, into memory from an input
    file or device

■ Syntax

    BLOAD filespec «,offset»

■ Remarks

    The BLOAD statement takes the following arguments:

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    filespec                 A string expression containing the file
                            specification. Input devices other than the
                            keyboard (KYBD:) are supported.

    offset                   The offset of the address where loading is to
                            start.
    ──────────────────────────────────────────────────────────────────────────

    The BLOAD statement allows a program or data saved as a memory-image file
    to be loaded anywhere in memory. A memory-image file is a byte-for-byte
    copy of what was originally in memory.

────────────────────────────────────────────────────────────────────────────
NOTE
    Programs written in earlier versions of BASIC no longer work if they use
    VARPTR to access numeric arrays.
────────────────────────────────────────────────────────────────────────────

    The starting address for loading is determined by the specified offset and
    the most recent DEF SEG statement. If offset is omitted, the segment
    address and offset contained in the file (the address used in the BSAVE
    statement) are used. Thus, the file is loaded at the address used when
    saving the file.

    If you supply an offset, the segment address used is the segment set by
    the most recently executed DEF SEG statement. If there has been no DEF SEG
    statement, the BASIC data segment (DS) is used as the default.

    If the offset is a single-precision or double-precision number it is
    coerced to an integer. If the offset is a negative number in the range -1
    to -32,768, it is treated as an unsigned 2-byte offset.

────────────────────────────────────────────────────────────────────────────
NOTE
    Because BLOAD does not perform an address-range check, it is possible to
    load a file anywhere in memory. You must be careful not to write over
    BASIC or the operating system. Since different screen modes use memory
    differently, do not load graphic images in a screen mode other than the
    one used when they were created. Also, because BASIC program code and data
    items are not always stored in the same locations as they were in BASICA,
    do not use BLOAD with files created by BASICA programs.
────────────────────────────────────────────────────────────────────────────

■ Differences From Basica

    BLOAD does not support the cassette device.

■ See Also

    BSAVE, DEF SEG, VARPTR, VARSEG

■ Example

    This example uses BLOAD to retrieve a drawing saved in a disk file using
    BSAVE. See the example for BSAVE to see how the drawing was saved.

    DIM Cube(1 TO 675)

    ' Set the screen mode--the mode should be the same as the
    ' mode used to create the original drawing.
    SCREEN 1

    ' Load the drawing into the array Cube.
    DEF SEG=VARSEG(Cube(1)) ' Get the array's segment.
    BLOAD "magcube.grh",VARPTR(Cube(1))
    DEF SEG   ' Restore the default segment.
    ' Put the drawing on the screen.
    PUT (80,10),Cube


────────────────────────────────────────────────────────────────────────────
BSAVE Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Transfers the contents of an area of memory to an output file or device

■ Syntax

    BSAVE filespec,offset,length

■ Remarks

    The BSAVE statement has the following arguments:

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    filespec                 A string expression containing the file or device
                            name. Output devices other than the console
                            (SCRN: and CONS:) are supported.

    offset                   The offset of the starting address of the area in
                            memory to be saved.

    length                   The number of bytes to save. This is a numeric
                            expression returning an unsigned integer in the
                            range 0-65,535.
    ──────────────────────────────────────────────────────────────────────────

    The BSAVE statement allows data or programs to be saved as memory-image
    files on disk. A memory-image file is a byte-for-byte copy of what is in
    memory along with control information used by BLOAD to load the file.

────────────────────────────────────────────────────────────────────────────
NOTE
    Programs written in earlier versions of BASIC no longer work if they use
    VARPTR to access numeric arrays.
────────────────────────────────────────────────────────────────────────────

    The starting address of the area saved is determined by the offset and the
    most recent DEF SEG statement.

    If no DEF SEG statement is executed before the BSAVE statement, the
    program uses the default BASIC data segment (DS). Otherwise, BSAVE begins
    saving at the address specified by the offset and by the segment set in
    the most recent DEF SEG statement.

    If the offset is a single- or double-precision floating-point value, it is
    coerced to an integer. If the offset is a negative number in the range -1
    to -32,768, it is treated as an unsigned 2- byte offset.

────────────────────────────────────────────────────────────────────────────
NOTE
    Because different screen modes use memory differently, do not load graphic
    images in a screen mode other than the one used when the images were
    created.
────────────────────────────────────────────────────────────────────────────

■ Differences From Basica

    BSAVE does not support the cassette device.

■ See Also

    BLOAD

■ Example

    This example draws a graphic and then saves it as a memory-image file. See
    the example for the BLOAD statement to see how the file would be
    retrieved.

    ' This program draws on the screen, stores the drawing in an
    ' array, and then saves the drawing in a disk file using BSAVE.
    '
    DIM Cube(1 TO 675)

    SCREEN 1
    ' Draw a white box.
    LINE (140,25)-(140+100,125),3,b
    ' Draw the outline of a magenta cube inside the box.
    DRAW "C2 BM140,50 M+50,-25 M+50,25 M-50,25"
    DRAW "M-50,-25 M+0,50 M+50,25 M+50,-25 M+0,-50 BM190,75 M+0,50"
    ' Save the drawing in the array Cube.
    GET (140,25)-(240,125),Cube
    ' Store the drawing in a disk file. Note: 2700 is the number
    ' of bytes in Cube (4 bytes per array element * 675).
    DEF SEG=VARSEG(Cube(1)) ' Set segment to array's segment.
    BSAVE "magcube.grh",VARPTR(Cube(1)),2700
    DEF SEG   ' Restore BASIC segment.


────────────────────────────────────────────────────────────────────────────
CALL Statement (BASIC Procedures)
────────────────────────────────────────────────────────────────────────────

■ Action

    Transfers control to a BASIC SUB

■ Syntax 1

    CALL name«( argumentlist )»

■ Syntax 2

    name« argumentlist »

■ Remarks

    The CALL statement takes the following arguments:

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    name                     The name, limited to 40 characters, of the BASIC
                            SUB being called. The name must appear in a SUB
                            statement if the SUB is in the same module.

    argumentlist             The variables or constants passed to the
                            subprogram. Arguments in the list are separated
                            by commas. Arguments passed by reference can be
                            changed by the subprogram.
    ──────────────────────────────────────────────────────────────────────────

    If the argumentlist includes an array argument, the array is specified by
    the array name followed by empty parentheses:

    DIM IntArray(1 TO 20)
    .
    .
    .
    CALL ShellSort(IntArray())

    When you use the CALL statement, the CALL keyword is optional. However, if
    you omit the CALL keyword, you must declare the procedure in a DECLARE
    statement. Notice also that when you omit the CALL keyword, you also omit
    the parentheses around the argument list. See Chapter 2 , "SUB and
    FUNCTION Procedures," in Programming in BASIC for more information.

    Arguments are passed by reference: the subprogram is given the address of
    the argument. This allows subprograms to change the argument values. BASIC
    can also pass arguments by value. The following statement calls a
    subprogram and passes a single argument by value:

    CALL SolvePuzzle((StartValue))

    Because StartValue is in parentheses, BASIC evaluates it as an expression.
    The result is stored in a temporary location, and the address of the
    temporary location is passed to the SUB. Any change made by the subprogram
    SolvePuzzle is made only to the temporary location and not to the
    variable.

■ See Also

    CALL, CALLS (Non BASIC); CALL ABSOLUTE; DECLARE (BASIC)

■ Example

    The program below copies a series of files into a new file, the last file
    in the series entered from the command line. In the program, the BASIC
    subprogram PRINTOUT is called after first splitting the command line into
    separate file names and storing them in the array FILE$. The PRINTOUT
    subprogram copies the contents of the files to the final file in the list
    and to the standard output device (default is to your screen).

    DEFINT A-Z
    CONST MAXFILES=5, ARRAYDIM=MAXFILES+1
    DIM File$(1 TO ARRAYDIM)
    ' Separate command line into arguments.
    CALL Comline (Numargs,File$(),ARRAYDIM)
    ' Test for too many or too few files.
    IF Numargs < 3 OR Numargs >MAXFILES THEN
    ' Too many or too few files.
        PRINT "Use more than 3 and fewer than";MAXFILES;"files"
    ELSE
    ' Send all files to Printout.
        CALL Printout(File$(),Numargs)
    END IF
    END


    ' See the example under COMMAND$ for the definition of
    ' Comline. Comline would appear here.

    SUB Printout(F$(1),N) STATIC
        ' Open target file.
        OPEN F$(N) FOR OUTPUT AS #3
        ' Loop executes once for each file.
        ' Copy the first N-1 files onto the Nth file.
        FOR File = 1 TO N-1
        OPEN F$(File) FOR INPUT AS #1
        DO WHILE NOT EOF(1)
            'Read file.
            LINE INPUT #1, Temp$
            'Write data to target file.
            PRINT #3, Temp$
            PRINT Temp$                 'Write file to standard
        LOOP                           'output.
        CLOSE #1
        NEXT
        CLOSE
    END SUB


────────────────────────────────────────────────────────────────────────────
CALL, CALLS Statement (Non-BASIC Procedures)
────────────────────────────────────────────────────────────────────────────

■ Action

    Transfers control to a procedure written in another language

■ Syntax 1

    CALL name «(call-argumentlist)»

■ Syntax 2

    name «call-argumentlist»

■ Syntax 3

    CALLS name «(calls-argumentlist)»

■ Remarks

    The following list describes the parts of the CALL statement:

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    name                     The name of the procedure being called. A name is
                            limited to 40 characters.

    call-argumentlist        The variables or constants passed to the
                            procedure. The syntax of a call-argumentlist is
                            described below.

    calls-argumentlist       A list containing the variables and constants
                            that CALLS passes to the procedure. Entries are
                            separated by commas. Note that these arguments
                            are passed by reference as far addresses, using
                            the segment and offset of the variable. You
                            cannot use BYVAL or SEG in a calls-argumentlist.
    ──────────────────────────────────────────────────────────────────────────

    A call-argumentlist has the following syntax:

    ««{BYVAL|SEG}»argument»«,«{BYVAL|SEG}»argument»...

    If argument is an array, parentheses are required:

    ««{BYVAL|SEG}»argument«()»»«,«{BYVAL|SEG}»argument»...

    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
    BYVAL                    Indicates the argument is passed by value, rather
                            than by near reference (the default)

    SEG                      Passes the argument as a segmented (far) address

    argument                 A BASIC variable, array, or constant passed to
                            the procedure
    ──────────────────────────────────────────────────────────────────────────

    CALLS is the same as using CALL with a SEG before each argument: every
    argument in a CALLS statement is passed as a segmented address.

────────────────────────────────────────────────────────────────────────────
NOTE
    The syntax described above does not correctly invoke a BASIC
    procedure──only procedures in other languages. See also the separate entry
    for CALL (BASIC).
────────────────────────────────────────────────────────────────────────────

    If the argument list of either statement includes an array argument, the
    array is specified by the array name and a pair of parentheses:

    DIM IntArray(20) AS INTEGER
    .
    .
    .
    CALL ShellSort(IntArray() AS INTEGER)

    When you use the CALL statement, the CALL keyword is optional. However,
    when you omit CALL, you must declare the procedure in a DECLARE statement.
    Notice also that when you omit CALL, you also omit the parentheses around
    the argument list. See Chapter 2, "SUB and FUNCTION Procedures," in
    Programming in BASIC for more information about invoking procedures
    without the CALL keyword.

    The result of the BYVAL keyword differs from BASIC's pass by value:

    CALL Difference (BYVAL A,(B))

    For the first argument, only the value of A is passed to Difference. In
    contrast, (B) is evaluated, a temporary location is created for the value,
    and the address of the temporary location is passed to Difference. You can
    use BASIC's pass by value for an argument, but you must write the
    procedure in the other language so the procedure accepts an address.

────────────────────────────────────────────────────────────────────────────
NOTE
    If name refers to an assembly-language procedure, it must be a PUBLIC name
    (symbol). PUBLIC names beginning with "$" and "_" may conflict with names
    used by the BASIC run-time system. Duplicate names cause a linker error
    message (symbol already defined) to be generated.
────────────────────────────────────────────────────────────────────────────

    Be careful using the SEG keyword to pass arrays because BASIC may move
    variables in memory before the called routine begins execution. Anything
    in an argument list that causes memory movement may create problems. You
    can safely pass variables using SEG if the CALL statement's argument list
    contains only simple variables, arithmetic expressions, or arrays indexed
    without the use of intrinsic or user-defined functions.

    See Section 2.3.3, "Variable Storage Allocation," for a list of things
    that cause variable movement and for information about when to use near or
    far addresses for variables.

■ Differences From Basica

    Assembly-language programs invoked from BASICA that have string arguments
    must be changed because the string descriptor is now four bytes long. The
    four bytes are the low byte and high byte of the length followed by the
    low byte and high byte of the address.

    To locate the routine being called, the BASICA CALLS statement uses the
    segment address defined by the most recently executed DEF SEG statement.
    There is no need to use DEF SEG with the CALLS statement because all
    arguments are passed as far (segmented) addresses.

■ See Also

    CALL (BASIC); DECLARE (BASIC); DECLARE (Non-BASIC)

■ Example

    See the example for VARPTR.


────────────────────────────────────────────────────────────────────────────
CALL ABSOLUTE Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Transfers control to a machine-language procedure

■ Syntax

    CALL ABSOLUTE («argumentlist,»integervariable)

■ Remarks

    The CALL ABSOLUTE statement takes the following arguments:

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    argumentlist             Optional arguments passed to a machine-language
                            procedure.

    integervariable          An integer variable containing a value that is
                            the offset from the beginning of the current code
                            segment, set by DEF SEG, to the starting location
                            of the procedure. The integervariable argument is
                            not passed to the procedure. Your program may
                            need to execute a DEF SEG statement before
                            executing CALL ABSOLUTE to set the code segment
                            for the called routine.

                            Using a noninteger value for integervariable
                            produces unpredictable results.
    ──────────────────────────────────────────────────────────────────────────

    Arguments in argumentlist are passed to the machine-language program as
    offsets (near pointers) from the current data segment. Although arguments
    are passed as offsets, the machine-language program is invoked with a far
    call.

────────────────────────────────────────────────────────────────────────────
NOTE
    The CALL ABSOLUTE statement is provided to maintain compatibility with
    earlier versions of BASIC. Mixed-language programming using the CALL
    statement extensions and the new DECLARE statement provide a simpler way
    to use assembly language with BASIC.

    In order to use CALL ABSOLUTE you must start QuickBASIC with the correct
    Quick library, link your program with QB.LIB, or use the QB.QLB Quick
    library. See the disk-contents list for the locations of these files.
────────────────────────────────────────────────────────────────────────────

■ Differences From Basica

    Assembly-language programs that are invoked from BASICA and that have
    string arguments must be changed because string descriptors are now four
    bytes long. The four bytes are the low byte and high byte of the string
    length followed by the low byte and high byte of the string address.

■ See Also

    CALL, CALLS (Non-BASIC)

■ Example

    The following example uses CALL ABSOLUTE to execute a machine-language
    program stored in an array:

    CONST nASMBYTES=14
    ' This program prints a message indicating whether or not
    ' a math coprocessor is installed.
    ' It uses a machine-language program stored in an array
    ' to get the information from the operating system.
    'AsmBytes is a label; nASMBYTES is a symbolic constant.
    DEFINT A-Z
    DIM AsmProg(1 TO (nASMBYTES/2))

    ' The machine-language program stored as data to read into
    ' the array.
    DATA &H55              :'PUSH BP       Save base pointer.
    DATA &H8B, &HEC        :'MOV  BP,SP    Get our own.
    DATA &HCD, &H11        :'INT  11H      Make the ROM-BIOS call.
    DATA &H8B, &H5E, &H06  :'MOV  BX,[BP+6] Get argument address.
    DATA &H89, &H07        :'MOV  [BX],AX  Save list in argument.
    DATA &H5D              :'POP  BP       Restore base pointer.
    DATA &HCA, &H02, &H00  :'RET  2        Pop argument off stack
                            '              and make far return.
    ' Get the starting offset of the array.
    P=VARPTR(AsmProg(1))
    ' Poke the machine-language program into the array.
    DEF SEG=VARSEG(AsmProg(1)) ' Change the segment.
    Restore AsmBytes
    FOR I=0 TO nASMBYTES-1
        READ J
        POKE(P+I),J
    NEXT I

    ' Execute the program. The program expects a single integer
    ' argument.
    CALL ABSOLUTE(X%,VARPTR(AsmProg(1)))
    DEF SEG   ' Restore the segment.
    ' X% now contains bit-encoded equipment list returned by DOS.
    ' Mask off all but the coprocessor bit (bit 2).
    CoProcessor=X% AND &H2
    ' Print the appropriate message.
    IF CoProcessor=2 THEN
    PRINT "Math coprocessor present."
    ELSE
    PRINT "No math coprocessor."
    END IF
    END


────────────────────────────────────────────────────────────────────────────
CALL INT86OLD Statements
────────────────────────────────────────────────────────────────────────────

■ Action

    Allows programs to perform DOS system calls

■ Syntax

    CALL INT86OLD (int_no,in_array(),out_array())
    CALL INT86XOLD (int_no,in_array(),out_array())

■ Remarks

    The CALL INTERRUPT statement provides an easier way to make DOS system
    calls. See the entry for CALL INTERRUPT for more information. The
    following list describes the arguments to INT86OLD and INT86XOLD:

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    int_no                   The DOS interrupt to perform. It is an integer
                            between 0 and 255. See your DOS documentation for
                            the interrupt numbers.

    in_array()               An integer array specifying the register values
                            when the interrupt is performed.

                            INT86OLD uses an eight-element array, while
                            INT86XOLD uses a ten-element array. Table R.1
                            lists the array elements and the corresponding
                            registers.

    out_array()              Contains the postinterrupt register values. It
                            has the same structure as in_array.
    ──────────────────────────────────────────────────────────────────────────

    If an error occurs, int_no = -1 and values in out_array are unchanged.
    Errors are caused by int_no not being in the range 0-255.

    Table R.1   INT86OLD and INT86XOLD Register Values

    Array Element            Register
    ──────────────────────────────────────────────────────────────────────────
    in_array(x)              AX
    in_array(x+1)            BX
    in_array(x+2)            CX
    in_array(x+3)            DX
    in_array(x+4)            BP
    in_array(x+5)            SI
    in_array(x+6)            DI
    in_array(x+7)            FLAGS
    in_array(x+8)☼           DS
    in_array(x+9)☼           ES
    ──────────────────────────────────────────────────────────────────────────

    The INT86OLD and INT86XOLD routines alter all registers except BP and DS.

    INT86OLD and INT86XOLD provide compatibility with older programs using
    INT86 and INT86X. Like the INT86 and INT86X routines, INT86OLD and
    INT86XOLD are distributed in a Quick library (QB.QLB) and in a
    conventional library (QB.LIB) on the distribution disks. The disks also
    contain a header file (QB.BI) for use with the procedures. See the
    disk-contents list for specific information.

    Note that INT86OLD and INT86XOLD do not require the use of VARPTR. Also,
    the register values are stored in the arrays beginning with the first
    array element.

■ Example

    The following example uses INT86OLD to open a file and place some text in
    it:

    ' Include header file for INT86OLD, etc.
    ' ¢INCLUDE:'QB.BI'

    DIM INARY%(7),OUTARY%(7)          'Define input and output
                                    'arrays for INT86.
    '
    ' Define register-array indices to
    ' make program easier to understand.
    CONST AX=0, BX=1, CX=2, DX=3, BP=4, SI=5, DI=6, FL=7
    '
    INARY%(AX) = &H3C00               'DOS function to create a file.
    INARY%(CX) = 0                    'DOS attribute for created file.
    INARY%(DX) = SADD("FOO.TXT"+CHR$(0))
                                    'Pointer to file-name string
                                    'with zero byte termination.

    CALL INT86OLD(&H21,INARY%(),OUTARY%())
                                    'Perform the creation.
    '
    INARY%(BX) = OUTARY%(AX)   'Move created file handle for write.
    INARY%(AX) = &H4000
            'DOS function to write to file.
    TEXT$ = "hello, world"+CHR$(13)+CHR$(10)
                                    'Define text to write to file.

    INARY%(CX) = LEN(TEXT$)       'Get length of text string.
    INARY%(DX) = SADD(TEXT$)      'Get address of text string.
    CALL INT86OLD(&H21,INARY%(),OUTARY%())
                                    'Perform the write.
    '
    INARY%(AX) = &H3E00
            'DOS function to close a file.
    CALL INT86OLD(&H21,INARY%(),OUTARY%())
                                    'Perform the close.


────────────────────────────────────────────────────────────────────────────
CALL INTERRUPT Statements
────────────────────────────────────────────────────────────────────────────

■ Action

    Allows BASIC programs to perform DOS system calls

■ Syntax

    CALL INTERRUPT (interruptnum,inregs,outregs)
    CALL INTERRUPTX (interruptnum,inregs,outregs)

■ Remarks

    The following list describes the arguments for the CALL INTERRUPT and CALL
    INTERRUPTX statements:

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    interruptnum             The DOS interrupt number. It is an integer
                            between 0 and 255. See your DOS documentation for
                            information about interrupts.

    inregs                   The inregs variable contains the register values
                            used when the interrupt is performed. It is
                            declared as type RegType. The user-defined type
                            RegType is described below.

    outregs                  The outregs variable contains the register values
                            after the interrupt is performed. It is declared
                            as type RegType. The user-defined type RegType is
                            described below.
    ──────────────────────────────────────────────────────────────────────────

    The CALL INTERRUPT and CALL INTERRUPTX statements replace the INT86 and
    INT86X routines used in earlier versions of BASIC. They provide a more
    convenient way for BASIC programs to use DOS interrupts and services.

    The register values before and after the interrupt are passed in variables
    declared as type RegType. The following statement defines the RegType
    user-defined type:

    TYPE RegType
        AX AS INTEGER
        BX AS INTEGER
        CX AS INTEGER
        DX AS INTEGER
        BP AS INTEGER
        SI AS INTEGER

    DI AS INTEGER
        FLAGS AS INTEGER
        DS AS INTEGER
        ES AS INTEGER
    END TYPE

    Each element of the type corresponds to a CPU register.

    INTERRUPTX uses the values in the DS and ES registers. To use the current
    values of these registers, set the record elements to -1.

    CALL INTERRUPT and CALL INTERRUPTX are available in a Quick Library
    (QB.QLB) and in a conventional library (QB.LIB) on your distribution
    disks. There is also a header file (QB.BI) on the disks with the necessary
    declarations for using these procedures. See the disk-contents list for
    specific information.

    To use CALL INTERRUPT or CALL INTERRUPTX when running a program within the
    QuickBASIC environment, the Quick library QB.QLB must be loaded with
    QuickBASIC.

■ Example

    The following program uses CALL INTERRUPT to change a file's attribute
    list so the file does not appear when you use the DIR command from DOS:

    DECLARE SUB TestError (AXReg%, flags%)
    ' ¢INCLUDE: 'QB.BI'

    DEFINT A-Z
    DIM InRegs AS RegType, OutRegs AS RegType

    ' Get the file name and action to perform.
    CLS
    PRINT "Hidden File Program": PRINT
    INPUT "Enter file name: ", FileName$
    DO
        INPUT "Hide or unhide (H or U): ", Action$
        Action$ = UCASE$(Action$)
    LOOP WHILE Action$ <> "H" AND Action$ <> "U"

    ' Tack a null (zero) byte onto the end of the string for the
    ' DOS function.
    FileName$ = FileName$ + CHR$(0)

    ' Get the current file attribute.
    ' Current attribute comes back in OutRegs.AX.
    InRegs.ax = &H4300
    InRegs.dx = SADD(FileName$)
    CALL INTERRUPT(&H21, InRegs, OutRegs)
    CALL TestError(OutRegs.ax, OutRegs.flags)

    ' Change the hidden attribute bit in the old attribute value.
    IF Action$ = "U" THEN
        InRegs.cx = OutRegs.cx AND &HFD
    ELSE
        InRegs.cx = OutRegs.cx OR &H2
    END IF

    ' Set AX to indicate the Change Attribute DOS function.
    InRegs.ax = &H4301
    CALL INTERRUPT(&H21, InRegs, OutRegs)
    CALL TestError(OutRegs.ax, OutRegs.flags)

    END
    ' If carry flag set, print error message and end program.
    SUB TestError (AXReg, flags) STATIC
        IF (&H1 AND flags) <> 0 THEN
        ' Get the error number out of AX.
        SELECT CASE AXReg AND &HF
            CASE 2
                PRINT "File not found."
            CASE 3
                PRINT "Path not found."
            CASE 5
                PRINT "Access denied."
            CASE ELSE
                PRINT "Unrecognized error."
        END SELECT
        END
        END IF
    END SUB


────────────────────────────────────────────────────────────────────────────
CDBL Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Converts a numeric expression to a double-precision number

■ Syntax

    CDBL(numeric-expression)

■ Remarks

    The numeric-expression may be any numeric expression. This function has
    the same effect as assigning the numeric expression to a double-precision
    variable.

    Note that the results of CDBL are no more accurate than the original
    expression. The added digits of precision are not significant unless the
    expression is calculated with double-precision accuracy.

■ Example

    The following example demonstrates how the precision of the numeric
    expression affects the result of using CDBL:

    X = 7/9
    X# = 7/9
    PRINT X
    'Both X# and CDBL(X) will be accurate to only 7 decimal
    'places, because 7/9 is evaluated in single precision.
    PRINT X#
    PRINT CDBL(X)
    'Accurate to 15 decimal places.
    PRINT 7#/9#

■ Output

    .7777778
    .7777777910232544
    .7777777910232544
    .7777777777777778


────────────────────────────────────────────────────────────────────────────
CHAIN Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Transfers control from the current program to another program

■ Syntax

    CHAIN filespec

■ Remarks

    The filespec is a string expression that identifies the program to which
    control is passed. The filespec may include a path specification. Programs
    running within the QuickBASIC environment assume a .BAS extension (if no
    extension is given) and cannot chain to executable files (files with a
    .COM or .EXE extension). Programs running outside the QuickBASIC
    environment assume an .EXE extension and cannot chain to QuickBASIC source
    files (files with a .BAS extension).

    You can pass variables between programs using the COMMON statement to set
    up a blank COMMON block. See the entry for COMMON.

    If you are compiling a program outside the QuickBASIC environment, note
    that the BCOM45.LIB library does not support COMMON. There are two ways to
    use COMMON with chained programs outside the environment:

    ■ Use the default (BRUN45.EXE) by compiling the programs using the option
    in the Make EXE dialog box called EXE Requiring BRUN45.EXE.

    ■ Use BRUN45.LIB by compiling from the command line without the /O option.

    The behavior of CHAIN and RUN is almost identical. The principal
    differences are that RUN closes all open files and does not support COMMON
    data blocks.

────────────────────────────────────────────────────────────────────────────
NOTE
    When programs use BRUN45.LIB, files are left open during chaining unless
    they are explicitly closed with a CLOSE statement.
────────────────────────────────────────────────────────────────────────────

■ Differences From Basica

    BASICA assumes the extension .BAS. QuickBASIC assumes an extension of
    either .BAS or .EXE, depending on whether the program is run within the
    environment or compiled and run outside the environment. If you omit the
    file extension, CHAIN works the same in both QuickBASIC and BASICA.

    BASIC does not support the ALL, MERGE, or DELETE options available in
    BASICA, nor does it allow you to specify a line number.

    Without the line-number option, execution always starts at the beginning
    of the chained-to program. Thus, a chained-to program that chains back to
    a carelessly written chaining program can cause an endless loop.

■ See Also

    CALL (BASIC), COMMON, RUN

■ Example

    See example for the COMMON statement.


────────────────────────────────────────────────────────────────────────────
CHDIR Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Changes the current default directory for the specified drive

■ Syntax

    CHDIR pathspec

■ Remarks

    The pathspec is a string expression identifying the directory that is to
    become the default directory. The pathspec must have fewer than 64
    characters. It has the following syntax:

    «drive:»«\»directory«\directory»...

    The argument drive: is an optional drive specification. If you omit drive,
    CHDIR changes the default directory on the current drive.

    CHDIR differs from the CHDIR command in DOS in two ways:

    1. The BASIC statement cannot be shortened to CD.

    2. There is no form of the CHDIR statement that returns the current
        directory.

────────────────────────────────────────────────────────────────────────────
    The CHDIR statement changes the default directory but not the default
    drive. For example, if the default drive is C, then the following CHDIR
    statement changes the default directory on drive D, but the default drive
    is still C:
────────────────────────────────────────────────────────────────────────────

    CHDIR "D:\TMP"

■ See Also

    MKDIR, RMDIR

■ Examples

    ' Makes \HOME\SALES the current directory on the default
    ' drive.
    CHDIR "\HOME\SALES"

    'Changes the current directory to USERS on drive B; it does
    'not, however, change the default drive to B.
    CHDIR "B:USERS"


────────────────────────────────────────────────────────────────────────────
CHR$ Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns a one-character string whose ASCII code is the argument

■ Syntax

    CHR$(code)

■ Remarks

    CHR$ is commonly used to send a special character to the screen or
    printer. For example, you can send a form feed (CHR$(12)) to clear the
    screen and return the cursor to the home position.

    CHR$ can also be used to include a double quote (") in a string:

    Msg$=CHR$(34)+"Quoted string"+CHR$(34)

    This line adds a double-quote character to the beginning and the end of
    the string.

■ See Also

    ASC; Appendix A, "Keyboard Scan Codes and ASCII Character Codes"

■ Example

    The following example uses CHR$ to display graphics characters in the
    extended character set:

    DEFINT A-Z
    ' Display two double-sided boxes.
    CALL DBox(5,22,18,40)
    CALL DBox(1,4,4,50)
    END

    ' Subroutine to display boxes on the screen.
    '
    ' Parameters
    '  Urow%, Ucol% : Row and column of upper-left corner.
    '  Lrow%, Lcol% : Row and column of lower-right corner.
    ' Use constants for the extended character set graphic
    ' characters.
    CONST ULEFTC=201, URIGHTC=187, VERTICAL=186, HORIZONTAL=205
    CONST LLEFTC=200, LRIGHTC=188

    SUB DBox (Urow%, Ucol%, Lrow%, Lcol%) STATIC

        ' Draw top of box, starting with the upper left corner.
        LOCATE Urow%, Ucol% : PRINT CHR$(ULEFTC);
        LOCATE ,Ucol%+1 : PRINT STRING$(Lcol%-Ucol%,CHR$(HORIZONTAL));
        LOCATE ,Lcol% : PRINT CHR$(URIGHTC);

        ' Draw the body of the box.
        FOR I=Urow%+1 TO Lrow%-1
        LOCATE I,Ucol% : PRINT CHR$(VERTICAL);
        LOCATE  ,Lcol% : PRINT CHR$(VERTICAL);
        NEXT I

        ' Draw the bottom of the box.
        LOCATE Lrow%, Ucol% : PRINT CHR$(LLEFTC);
        LOCATE ,Ucol%+1 : PRINT STRING$(Lcol%-Ucol%,CHR$(HORIZONTAL));
        LOCATE ,Lcol% : PRINT CHR$(LRIGHTC);

    END SUB


────────────────────────────────────────────────────────────────────────────
CINT Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Converts a numeric expression to an integer by rounding the expression's
    fractional part

■ Syntax

    CINT(numeric-expression)

■ Remarks

    If numeric-expression is not in the range -32,768 to 32,767, the function
    produces a run-time error message that reads Overflow.

    CINT differs from the FIX and INT functions, which truncate, rather than
    round, the fractional part. See the example for the INT function for an
    illustration of the differences among these functions.

■ See Also

    CDBL, CSNG, FIX, INT

■ Example

    The following example converts an angle in radians to an angle in degrees
    and minutes:

    'Set up constants for converting radians to degrees.
    CONST PI=3.141593, RADTODEG=180./PI
    INPUT "Angle in radians = ",Angle  'Get the angle in radians.
    Angle = Angle * RADTODEG    'Convert radian input to degrees.
    Min = Angle - INT(Angle)    'Get the fractional part.
    'Convert fraction to value between 0 and 60.
    Min = CINT(Min * 60)
    Angle = INT(Angle)          'Get whole number part.
    IF Min = 60 THEN       '60 minutes = 1 degree.
        Angle = Angle + 1
        Min = 0
    END IF
    PRINT "Angle equals" Angle "degrees" Min "minutes"

■ Output

    Angle in radians = 1.5708
    Angle equals 90 degrees 0 minutes


────────────────────────────────────────────────────────────────────────────
CIRCLE Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Draws an ellipse or circle with a specified center and radius

■ Syntax

    CIRCLE «STEP» (x,y),radius«,«color»«,«start»«,«end»«,aspect»»»»

■ Remarks

    The following list describes the parts of the CIRCLE statement:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
    STEP                     The STEP option specifies that x and y are
                            offsets relative to the current graphics cursor
                            position.

    x,y                      The x- and y-coordinates for the center of the
    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
    x,y                      The x- and y-coordinates for the center of the
                            circle or ellipse.

    radius                   The radius of the circle or ellipse in the
                            current coordinate system.

    color                    The attribute of the desired color. See the
                            entries for the COLOR and SCREEN statements for
                            more information. The default color is the
                            foreground color.

    start, end               The start and end angles, in radians, for the arc
                            to draw. The start and end arguments are used to
                            draw partial circles or ellipses. The arguments
                            may range in value from -2π radians to 2π
                            radians, where π = appx. 3.141593. The default
                            value for start is 0 radians. The default value
                            for end is 2π radians.

    Part                     Description
    ──────────────────────────────────────────────────────────────────────────

                            If start or end is negative, then CIRCLE draws a
                            radius to that point on the arc and treats the
                            angle it were positive.

                            The start angle can be less than the end angle.
                            If you specify end but not start, the arc is
                            drawn from 2π to end; if you specify start but
                            not end, the statement draws an arc from start to
                            zero.

    aspect                   The aspect ratio, or the ratio of the y-radius to
                            the x-radius. The default value for aspect is the
                            value required to draw a round circle in the
                            screen mode. This value is calculated as follows:

                            4 * (ypixels/xpixels)/3

                            where xpixels by ypixels is the screen
    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
                            where xpixels by ypixels is the screen
                            resolution. For example, in screen mode 1, where
                            the resolution is 320 x 200, the default for
                            aspect is 4 * (200/320)/3, or 5/6.

                            If the aspect ratio is less than one, radius is
                            the x-radius. If aspect is greater than one,
                            radius is equal to the y-radius.
    ──────────────────────────────────────────────────────────────────────────


    To draw a radius to angle 0 (a horizontal line segment to the right), do
    not give the angle as -0; use a very small nonzero value instead as shown:

    ' Draws a pie-shaped one-quarter wedge of a circle:
    SCREEN 2
    CIRCLE (200,100),60,,-.0001,-1.57

    You may omit an argument in the middle of the statement, but you must
    include the argument's commas. In the following statement, the color
    argument has been omitted:

    CIRCLE STEP (150,200),94,,0.0,6.28

    If you omit the last argument, you do not include the commas.

    The last point that CIRCLE references, after drawing, is the center of the
    ellipse or circle. You may use coordinates that are outside the screen or
    viewport.

    You may show coordinates as absolutes, or you may use the STEP option to
    show the position of the center point in relation to the previous point of
    reference. For example, if the previous point of reference is (10,10),
    then the following statement causes a circle to be drawn with radius 75
    and center offset 10 from the current x coordinate and 5 from the current
    y coordinate. The circle's center is (20,15).

    CIRCLE STEP (10,5), 75

■ Example

    The following program first draws a circle with the upper left quarter
    missing. It then uses relative coordinates to position a second circle
    within the missing quarter circle. Finally, it uses a different aspect
    ratio to draw a small ellipse inside the small circle.

    CONST PI=3.141593
    SCREEN 2

    ' Draw a circle with the upper-left quarter missing.
    ' Use negative numbers so radii are drawn.
    CIRCLE (320,100), 200,, -PI, -PI/2

    ' Use relative coordinates to draw a circle within the missing
    ' quarter.
    CIRCLE STEP (-100,-42),100

    ' Draw a small ellipse inside the circle.
    CIRCLE STEP(0,0), 100,,,, 5/25

    ' Display the drawing until a key is pressed.
    LOCATE 25,1 : PRINT "Press any key to end.";
    DO
    LOOP WHILE INKEY$=""


────────────────────────────────────────────────────────────────────────────
CLEAR Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Reinitializes all program variables, closes files, and sets the stack size

■ Syntax

    CLEAR «,,stack»

■ Remarks

    The CLEAR statement performs the following actions:

    ■ Closes all files and releases the file buffers

    ■ Clears all COMMON variables

    ■ Sets numeric variables and arrays to zero

    ■ Sets all string variables to null

    ■ Reinitializes the stack and, optionally, changes its size

    The stack parameter sets aside stack space for your program. QuickBASIC
    takes the amount of stack space it requires, adds the number of bytes
    specified by stack, and sets the stack size to the result.

────────────────────────────────────────────────────────────────────────────
NOTE
    Two commas are used before stack to keep QuickBASIC compatible with
    BASICA. BASICA included an additional argument that set the size of the
    data segment. Because QuickBASIC automatically manages the data segment,
    the first parameter is no longer required .
────────────────────────────────────────────────────────────────────────────

    If your program has deeply nested subroutines or procedures, or if you use
    recursive procedures, you may want to use a CLEAR statement to increase
    the stack size. You may also want to increase the stack size if your
    procedures have a large number of arguments.

    Clearing the stack destroys the return addresses placed on the stack
    during the execution of a GOSUB. This makes it impossible to execute a
    RETURN statement correctly and produces a RETURN without GOSUB run-time
    error message. Using a CLEAR statement in a SUB or FUNCTION produces a
    run-time error message that reads Illegal function call.

■ Differences From Basica

    BASICA programs using CLEAR may require modification. In BASICA programs,
    any DEF FN functions or data types declared with DEFtype statements are
    lost after a CLEAR statement. In compiled programs, this information is
    not lost because these declarations are fixed at compile time.

■ See Also

    FRE, SETMEMGT

■ Example

    The following statement clears all program variables and sets aside 2,000
    bytes on the stack for the program:

    CLEAR ,,2000


────────────────────────────────────────────────────────────────────────────
CLNG Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Converts a numeric expression to a long (4-byte) integer by rounding the
    fractional part of the expression

■ Syntax

    CLNG(numeric-expression)

■ Remarks

    If numeric-expression is not in the range -2,147,483,648 to 2,147,483,647,
    the function produces an error message that reads Overflow.

■ Example

    The following example shows how CLNG rounds before converting the number:

    A=32767.45
    B=32767.55
    PRINT CLNG(A); CLNG(B)

■ Output

    32767  32768


────────────────────────────────────────────────────────────────────────────
CLOSE Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Concludes I/O to a file or device

■ Syntax

    CLOSE ««#» filenumber «,«#» filenumber»...»

■ Remarks

    The CLOSE statement complements the OPEN statement.

    The filenumber is the number under which the file was opened. A CLOSE
    statement with no arguments closes all open files and devices.

    The association of a file with a file number ends when a CLOSE statement
    is executed. You may then reopen the file using the same or a different
    file number. Once you close a file, you may use that file's number for any
    unopened file.

    A CLOSE for a file or device that was opened for sequential output writes
    the final buffer of output to that file or device.

    CLOSE releases all buffer space associated with the closed file or files.

    The CLEAR, END, RESET, RUN, and SYSTEM statements automatically close all
    files.

■ Example

    See the example for CALL (BASIC).


────────────────────────────────────────────────────────────────────────────
CLS Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Clears the screen

■ Syntax

    CLS «{0 | 1 | 2}»

■ Remarks

    There are several ways to use the CLS statement, as described in the
    following list:

    Statement                Description
    ──────────────────────────────────────────────────────────────────────────
    CLS 0                    Clears the screen of all text and graphics.

    CLS 1                    Clears only the graphics viewport if a VIEW
                            statement has been executed. Otherwise, CLS 1
                            clears the entire screen.

    CLS 2                    Clears only the text viewport, leaving the bottom
                            screen line (line 25, 30, 43, or 60 depending on
                            the screen mode) unchanged.

    CLS                      Clears either the graphics viewport or the text
                            viewport. If the graphics viewport is active,
                            then CLS with no argument clears only the
                            viewport. If the graphics viewport is inactive,
                            then CLS clears the text viewport and refreshes
                            the function key display line (the bottom screen
                            line).
    ──────────────────────────────────────────────────────────────────────────

    The CLS statement also returns the cursor to the home position in the top
    left corner of the screen.

■ See Also

    VIEW, VIEW PRINT, WINDOW

■ Example

    The following program draws random circles in a graphics viewport and
    prints in a text viewport. The graphics viewport is cleared after 30
    circles have been drawn. The program clears the text viewport after
    printing to it 45 times.

    RANDOMIZE TIMER
    SCREEN 1
    ' Set up a graphics viewport with a border.
    VIEW (5,5)-(100,80),3,1
    ' Set up a text viewport.
    VIEW PRINT 12 TO 24
    ' Print a message on the screen outside the text viewport.
    LOCATE 25,1 : PRINT "Press any key to stop."
    Count=0

    DO
        ' Draw a circle with a random radius.
        CIRCLE (50,40),INT((35-4)*RND+5),(Count MOD 4)
        ' Clear the graphics viewport every 30 times.
        IF (Count MOD 30)=0 THEN CLS 1
        PRINT "Hello. ";
        ' Clear the text viewport every 45 times.
        IF (Count MOD 45)=0 THEN CLS 2
        Count=Count+1
    LOOP UNTIL INKEY$<>""


────────────────────────────────────────────────────────────────────────────
COLOR Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Selects display colors

■ Syntax

    COLOR «foreground»«,«background»«,border»»         Screen mode 0
    COLOR «background»«,palette»                       Screen mode 1
    COLOR «foreground»«,background»                    Screen modes 7-10
    COLOR «foreground»                                 Screen modes 12-13

■ Remarks

    With the COLOR statement, you can set the foreground and background colors
    for the display. In screen mode 0 a border color can also be selected. In
    screen mode 1 no foreground color can be selected, but one of two
    four-color palettes can be selected for use with graphics statements. In
    screen modes 12-13 only the foreground color can be set.

    The values of foreground in screen modes 7-10, 12, and 13 are attribute
    numbers (not color numbers) and display the color assigned to that
    attribute. See the PALETTE statement for a description of attributes.

    The COLOR statement does not determine the range of available colors. The
    combination of adapter, display, and the mode set by the SCREEN statement
    determine the color range. See the SCREEN statement for more information.

    The different syntaxes and their effects in different screen modes are
    described below:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Screen Mode              Description
    ──────────────────────────────────────────────────────────────────────────
    Screen Mode              Description
    ──────────────────────────────────────────────────────────────────────────
    0                        Modifies the current default text foreground and
                            background colors and the screen border. The
                            foreground color must be an integer expression in
                            the range 0-31. It determines the "foreground"
                            color in text mode──the default color of text.
                            Sixteen colors can be selected with the integers
                            0-15. You can select a blinking version of a
                            color by adding 16 to the color number. For
                            example, a blinking color 7 is equal to 7 + 16,
                            or 23.

                            The background color is an integer expression in
                            the range 0-7 and is the color of the background
                            for each text character. Blinking background
                            colors are not supported.

                            The border color──the color used to draw the
                            screen border──is an integer expression in the
                            range 0-15. The IBM Enhanced Graphics Adapter
    Screen Mode              Description
    ──────────────────────────────────────────────────────────────────────────
                            range 0-15. The IBM Enhanced Graphics Adapter
                            (EGA), the IBM Video Graphics Array adapter
                            (VGA), and the IBM Multicolor Graphics Array
                            adapter (MCGA) do not support the border
                            argument.

    1                        In mode 1, the COLOR statement has a unique
                            syntax that includes a palette argument that is
                            an odd or even integer expression in the range 0
                            to 255. This argument determines which of two
                            sets of colors to use when displaying particular
                            color numbers.

                            The default colors for the palette parameter are
                            equivalent to the following PALETTE statements on
                            a system equipped with an EGA:

                            COLOR ,0     'Same as the next three
                                        'PALETTE statements.
    Screen Mode              Description
    ──────────────────────────────────────────────────────────────────────────
                                        'PALETTE statements.
                            PALETTE 1,2  'Attribute 1 = color 2 (green)
                            PALETTE 2,4  'Attribute 2 = color 4 (red)
                            PALETTE 3,6  'Attribute 3 = color 6 (yellow)

                            COLOR ,1     'Same as the next three
                                        'PALETTE statements.
                            PALETTE 1,3  'Attribute 1 = color 3 (cyan)
                            PALETTE 2,5  'Attribute 2 = color 5 (magenta)
                            PALETTE 3,7  'Attribute 3 = color 7 (white)

                            Note that in screen mode 1, a COLOR statement
                            overrides previous PALETTE statements.

    2                        An Illegal function call message results if COLOR
                            is used in this mode.

    7-10                     In these modes, no border color can be specified.
                            The graphics background is given by the
    Screen Mode              Description
    ──────────────────────────────────────────────────────────────────────────
                            The graphics background is given by the
                            background color number, which must be in the
                            range of valid color numbers for the screen mode.
                            The foreground color argument is the default
                            line-drawing color. In screen modes 7 to 10
                            foreground is an attribute number, while
                            background is a color number. See the SCREEN
                            statement for more details.

    11                       Use the PALETTE statement to set color in screen
                            mode 11.

    12, 13                   No background color can be specified in these
                            modes. The foreground argument is the attribute
                            used for the foreground graphics color. The
                            attribute must be in the correct range for the
                            screen mode. See the SCREEN statement for more
                            information.
    ──────────────────────────────────────────────────────────────────────────
    Screen Mode              Description
    ──────────────────────────────────────────────────────────────────────────
    ──────────────────────────────────────────────────────────────────────────


    Arguments that are outside the valid ranges produce error messages that
    read Illegal function call.

    The foreground can be the same color as the background, making displayed
    characters invisible. The default background is black, or color number 0
    for all display hardware configurations and all screen modes.

    In screen modes 12 and 13 you can set the background color by assigning a
    color to attribute 0 with a PALETTE statement. For example, to make the
    background color 8224 (a light violet), you would use the following
    PALETTE statement:

    PALETTE 0,8224

    In screen mode 11 you can set both the foreground and background color by
    assigning a color to attribute 0 with a PALETTE statement.

    With an EGA, VGA, or MCGA installed, the PALETTE statement gives you
    flexibility in assigning different display colors to the actual
    color-number ranges for the foreground, background, and border colors
    discussed above. See the PALETTE statement reference pages for more
    details.

■ See Also

    PAINT, PALETTE, SCREEN

■ Examples

    The following series of examples show COLOR statements and their effects
    in the various screen modes:

    SCREEN 0
    'foreground=1, background=2, border=3
    COLOR  1, 2, 3

    SCREEN 1
    'background=1, even palette number
    COLOR  1,0
    'background=2, odd palette number
    COLOR  2,1


────────────────────────────────────────────────────────────────────────────
COM Statements
────────────────────────────────────────────────────────────────────────────

■ Action

    Enables, disables, or inhibits event trapping of communications activity
    on a specified port

■ Syntax

    COM(n) ON
    COM(n) OFF
    COM(n) STOP

■ Remarks

    The parameter n is the number of the communications port; n can be either
    1 or 2.

    The COM ON statement enables communications event trapping. If a character
    arrives at a communications port after a COM ON statement, then the
    subroutine specified in the ON COM statement is executed.

    COM OFF disables communications event trapping. No communications trapping
    takes place until another COM ON statement is executed. Events occurring
    while trapping is off are ignored.

    COM STOP inhibits communications event trapping so no trapping takes place
    until a COM ON statement is executed. Events occurring while trapping is
    inhibited are remembered and processed when the next COM ON statement is
    executed.

    See Chapter 6, "Error and Event Trapping," in Programming in BASIC for an
    outline of event trapping.

■ See Also

    ON event

■ Example

    See the event-trapping examples in Chapter 6, "Error and Event Trapping,"
    in Programming in BASIC for an illustration of how to do event trapping.


────────────────────────────────────────────────────────────────────────────
COMMAND$ Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the command line used to invoke the program

■ Syntax

    COMMAND$

■ Remarks

    The COMMAND$ function returns the complete command line entered after your
    BASIC program name, including optional parameters. COMMAND$ removes all
    leading blanks from the command line and converts all letters to uppercase
    (capital letters). The COMMAND$ function can be used in stand-alone
    executable files or, if you are executing from the QuickBASIC environment,
    by using the /CMD command line option or by selecting Modify COMMAND$ on
    the Run menu.

■ Example

    The Comline subprogram in the following example breaks the command line
    into separate arguments and stores them in an array. Each argument is
    separated from adjoining arguments by one or more blanks or tabs on the
    command line.

    ' Default variable type is integer in this module.
    DEFINT A-Z

    ' Declare the Comline subprogram, as well as the number and
    ' type of its parameters.
    DECLARE SUB Comline(N, A$(),Max)

    DIM A$(1 TO 15)
    ' Get what was typed on the command line.
    CALL Comline(N,A$(),10)
    ' Print out each part of the command line.
    PRINT "Number of arguments = ";N
    PRINT "Arguments are: "
    FOR I=1 TO N : PRINT A$(I) : NEXT I

    ' Subroutine to get command line and split into arguments.
    ' Parameters:  NumArgs : Number of command line args found.
    '              Args$() : Array in which to return arguments.
    '              MaxArgs : Maximum number of arguments array
    '                        can return.

    SUB Comline(NumArgs,Args$(),MaxArgs) STATIC
    CONST TRUE=-1, FALSE=0

        NumArgs=0 : In=FALSE
    ' Get the command line using the COMMAND$ function.
        Cl$=COMMAND$
        L=LEN(Cl$)

    ' Go through the command line a character at a time.
        FOR I=1 TO L
        C$=MID$(Cl$,I,1)
        'Test for character being a blank or a tab.
        IF (C$<>" " AND C$<>CHR$(9)) THEN
        ' Neither blank nor tab.
        ' Test to see if you're already
        ' inside an argument.
            IF NOT In THEN
        ' You've found the start of a new argument.
        ' Test for too many arguments.
                IF NumArgs=MaxArgs THEN EXIT FOR
                NumArgs=NumArgs+1
                In=TRUE
            END IF
        ' Add the character to the current argument.
            Args$(NumArgs)=Args$(NumArgs)+C$
        ELSE
        ' Found a blank or a tab.
        ' Set "Not in an argument" flag to FALSE.
            In=FALSE
        END IF
        NEXT I

    END SUB

    The following is a sample command line and output for a stand-alone
    executable file (assumes program name is arg.exe):

    arg one  two   three    four     five      six

■ Output

    Number of arguments =  6
    Arguments are:
    ONE
    TWO
    THREE
    FOUR
    FIVE
    SIX


────────────────────────────────────────────────────────────────────────────
COMMON Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Defines global variables for sharing between modules or for chaining to
    another program

■ Syntax

    COMMON «SHARED»  «/blockname/» variablelist

■ Remarks

    The following list describes the parts of the COMMON statement:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
    SHARED                   An optional attribute indicating that the
                            variables are to be shared with all SUB or
                            FUNCTION procedures in the module. SHARED can
                            eliminate the need for a SHARED statement inside
                            SUB or FUNCTION procedures.

    blockname                A valid BASIC identifier (up to 40 characters)
                            used to identify a group of variables. Use a
                            blockname to share only specific groups of
                            variables. When a blockname is used, the COMMON
                            block is a named COMMON block. When blockname is
                            omitted, the block is a blank COMMON block. Items
                            in a named COMMON block are not preserved across
                            a chain to a new program. See "Using Named
                            COMMON" and "Using COMMON with Chain," below.

    Part                     Description
    ──────────────────────────────────────────────────────────────────────────

    variablelist             A list of variables to be shared between modules
                            or chained-to programs. The same variable may not
                            appear in more than one COMMON statement in a
                            module.
    ──────────────────────────────────────────────────────────────────────────


    A variablelist has the following syntax:

    variable«( )»«AS type»«, variable«( )»«AS type»»...

    The following list describes the parts of a variablelist:

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    variable                 Any valid BASIC variable name.

    AS type                  Declares variable to be of type type. The type
                            may be INTEGER, LONG, SINGLE, DOUBLE, STRING, or
                            a user-defined type.
    ──────────────────────────────────────────────────────────────────────────

────────────────────────────────────────────────────────────────────────────
NOTE
    Older versions of BASIC required the number of dimensions to appear after
    the name of a dynamic array in a COMMON statement. The number of
    dimensions is no longer required, although QuickBASIC accepts the older
    syntax to maintain compatibility with earlier versions.
────────────────────────────────────────────────────────────────────────────

    A COMMON statement establishes storage for variables in a special area
    that allows them to be shared between modules or with other programs
    invoked with a CHAIN statement.

    Because COMMON statements establish global variables for an entire
    program, they must appear before any executable statements. All statements
    are executable, except the following:

    ■ COMMON

    ■ CONST

    ■ DATA

    ■ DECLARE

    ■ DEFtype

    ■ DIM (for static arrays)

    ■ OPTION BASE

    ■ REM

    ■ SHARED

    ■ STATIC

    ■ TYPE...END TYPE

    ■ All metacommands

    Variables in COMMON blocks are matched by position and type, not by name.
    Thus, variable order is significant in COMMON statements. In the following
    fragment, it is the order of the variables in the COMMON statements that
    links the variables, not the names:

    ' Main program.
    COMMON A, D, E
    A = 5 : D = 8 : E = 10
    .
    .
    .

    ' Common statement in another module.
    COMMON A, E, D           'A = 5, E = 8, D = 10
    .
    .
    .

    Both static and dynamic arrays are placed in COMMON by using the array
    name followed by parentheses. A static array must be dimensioned with
    integer-constant subscripts in a DIM statement preceding the COMMON
    statement. A dynamic array must be dimensioned in a later DIM or REDIM
    statement. The elements of a dynamic array are not allocated in the COMMON
    block. Only an array descriptor is placed in common. (See Chapter 2,
    "Data Types," in this manual and Appendix F, "Metacommands," in
    Programming in BASIC for more information about static and dynamic
    arrays.)

    The size of a common area can be different from that in another module or
    chained program if a blank COMMON block has been used. When a BASIC
    program shares COMMON blocks with a routine in the user library, the
    calling program may not redefine the COMMON block to a larger size.

    Errors caused by mismatched COMMON statements are subtle and difficult to
    find. An easy way to avoid this problem is to place COMMON declarations in
    a single "include" file and use the ¢INCLUDE metacommand in each program.
    See Appendix F, "Metacommands," in Programming in BASIC for a discussion
    of ¢INCLUDE.

    The following program fragment shows how to use the ¢INCLUDE metacommand
    to share a file containing COMMON statements among programs:

    'This file is menu.bas.
    '¢INCLUDE:'COMDEF.BI'
    .
    .
    .
    CHAIN "PROG1"
    END


    'This file is prog1.bas.
    '¢INCLUDE:'COMDEF.BI'
    .
    .
    .
    END


    'This file is comdef.bi.
    DIM A(100),B$(200)
    COMMON I,J,K,A()
    COMMON A$,B$(),X,Y,Z
    'End comdef.bi.

    The next three sections discuss using named COMMON blocks, using the
    SHARED keyword, and using COMMON when chaining programs.

    USING NAMED COMMON

    A named COMMON block provides a convenient way to group variables so that
    different modules have access only to the common variables that they need.

    The following program, which calculates the volume and density of a
    rectangular prism, uses named COMMON blocks to share different sets of
    data with two subprograms. The subprogram VOLUME needs to share only the
    variables representing the lengths of the sides (in COMMON block SIDES).
    The subprogram DENSITY also needs variables representing the weight (in
    COMMON block WEIGHT).

    'Main program.
    DIM S(3)
    COMMON /Sides/ S()
    COMMON /Weight/ C

    C=52
    S(1)=3:S(2)=3:S(3)=6
    CALL Volume
    CALL Density
    END

    'Subprogram VOLUME in a separate module.
    DIM S(3)
    COMMON SHARED /Sides/ S()

    SUB Volume STATIC
        Vol=S(1)*S(2)*S(3)
        PRINT "The volume is "; Vol
    END SUB


    'Subprogram DENSITY in a separate module.
    DIM S(3)
    COMMON SHARED /Sides/ S()
    COMMON SHARED /Weight/ W

    SUB Density STATIC
        Vol=S(1)*S(2)*S(3)
        Dens=W/Vol
        PRINT "The density is "; Dens
    END SUB

────────────────────────────────────────────────────────────────────────────
NOTE
    Named COMMON blocks are not preserved across chained programs. Use blank
    COMMON blocks to pass variables to a chained program.
────────────────────────────────────────────────────────────────────────────

    USING COMMON WITH CHAIN

    The COMMON statement provides the only way to pass the values of variables
    directly to a chained program. To pass variables, both programs must
    contain COMMON statements. Remember that variable order and type are
    significant, not variable names. The order and type of variables must be
    the same for all COMMON statements communicating between chaining
    programs.

    Although the order and type of variables is critical for making sure the
    right values are passed, the COMMON blocks do not have to be the same
    size. If the COMMON block in the chained-to program is smaller than the
    COMMON block in the chaining program, the extra COMMON variables in the
    chaining program are ignored. If the size of the COMMON block in the
    chained-to program is larger, then additional COMMON numeric variables are
    initialized to zero. Additional string variables are initialized to null
    strings.

    Static arrays passed in COMMON by the chaining program must be declared as
    static in the chained-to program. Similarly, dynamic arrays placed in
    common by the chaining program must be dynamic in the chained-to program.

────────────────────────────────────────────────────────────────────────────
NOTE
    To use COMMON with CHAIN when you are compiling outside the BASIC
    environment, you must use the BRUN45.EXE module. This module is used when
    you compile from the command line without the /O option or when you use
    the option from the Make EXE dialog box called EXE Requiring BRUN45.EXE.
────────────────────────────────────────────────────────────────────────────

■ See Also

    CALL (BASIC), CHAIN, FUNCTION, SUB

■ Examples

    The following example uses a COMMON statement to pass variables between
    two chained programs. The first program reads in a series of numeric
    values, stores the values in an array, and then chains to the other
    program. The second program finds and prints the average of the values.

    DIM Values(1 TO 50)
    COMMON Values(), NumValues

    PRINT "Enter values one per line. Enter END to quit."
    NumValues=0
    DO
        INPUT "-> ",N$
        IF I>=50 OR UCASE$(N$)="END" THEN EXIT DO
        NumValues=NumValues+1
        Values(NumValues)=VAL(N$)
    LOOP

    CHAIN "average"

    The program named average appears as follows (notice that average is an
    entirely separate program):

    DIM X(1 TO 50)
    COMMON X(), N

    IF N>0 THEN
        Sum=0
        FOR I=1 TO N
        Sum=Sum+X(I)
        NEXT I
        PRINT "The average of the values is";Sum/N
    END IF


────────────────────────────────────────────────────────────────────────────
CONST Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Declares symbolic constants for use in place of numeric or string values

■ Syntax

    CONST constantname = expression «,constantname = expression»...

■ Remarks

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    constantname             A name following the same rules as a BASIC
                            variable name. You may add to the name a
                            type-declaration character (%, &, !, #, or $) to
                            indicate its type, but this character is not part
                            of the name.

    expression               An expression consisting of literals (such as
                            1.0), other constants, or any of the arithmetic
                            and logical operators except exponentiation (^).
                            You may also use a single literal string such as
                            "Error on input". You cannot use string
                            concatenation, variables, user-defined functions,
                            or intrinsic functions like SIN or CHR$ in
                            expressions assigned to constants.
    ──────────────────────────────────────────────────────────────────────────

    If you use a type-declaration character in the name, you may omit the
    character when the name is used, as shown in the following example:

    CONST MAXDIM% = 250
    .
    .
    .
    DIM AccountNames$(MAXDIM)

    If you omit the type-declaration character, the constant is given a type
    based on the expression in the CONST statement. Strings always yield a
    string constant. With numeric expressions, the expression is evaluated and
    the constant is given the simplest type that can represent the constant.
    For example, if the expression gives a result that can be represented as
    an integer, the constant is given an integer type.

────────────────────────────────────────────────────────────────────────────
NOTE
    Names of constants are not affected by DEFtype statements such as DEFINT.
    A constant's type is determined either by an explicit type-declaration
    character or by the type of the expression.
────────────────────────────────────────────────────────────────────────────

    Constants must be defined before they are referenced. The following
    example produces an error because the constant ONE is not defined before
    it is used to define TWO (constants are defined from left to right):

    CONST TWO = ONE + ONE, ONE = 1

    Constants declared in a SUB or FUNCTION are local to the SUB or FUNCTION.
    A constant declared outside a procedure is defined throughout the module.
    You can use constants anywhere that you would use an expression.

    A common programming practice is to use a statement like the following
    (recall that any nonzero value represents "true"):

    TRUE=-1

    Constants offer several advantages over using variables for constant
    values:

    ■ Constants need to be defined only once for an entire module.

    ■ Constants cannot be inadvertently changed.

    ■ In stand-alone programs, using constants produces more efficient code
    than using variables.

    ■ Constants make programs easier to modify.

■ Examples

    The following program uses the CONST statement to declare symbolic
    constants for the ASCII values of nonprinting characters such as tab and
    line feed:

    ' This program counts words, lines, and characters.
    ' A word is any sequence of nonblank characters.
    DEFINT a-z

    CONST BLANK = 32, ENDFILE = 26, CR = 13, LF = 10
    CONST TABC = 9, YES = -1, NO = 0

    ' Get the file name from the command line.
    FileName$=COMMAND$
    IF FileName$="" THEN
        INPUT "Enter input file name: ",FileName$
        IF FileName$="" THEN END
    END IF

    OPEN FileName$ FOR INPUT AS #1

    Words=0
    Lines=0
    Characters=0

    ' Set a flag to indicate you're not looking at a
    ' word, then get the first character from the file.
    InaWord=NO
    DO UNTIL EOF(1)
        C=ASC(INPUT$(1,#1))
        Characters=Characters+1
        IF C=BLANK or C=CR or C=LF or C=TABC THEN

    ' If the character is a blank, carriage return,
    ' line feed, or tab, you're not in a word.
        IF C=CR THEN Lines=Lines+1
        InaWord=NO
        ELSEIF InaWord=NO THEN

    ' The character is a printing character,
    ' so this is the start of a word.
    ' Count the word and set the flag.
        InaWord=YES
        Words=Words+1
        END IF

    LOOP
    PRINT Characters, Words, Lines
    END

    Constants also make programs easier to modify. The following program
    fragment declares a single constant to dimension a series of arrays. To
    increase or decrease the size of the arrays, it is necessary to change
    only the value in the CONST statement.

    CONST MAXCUSTOMERS = 250
    .
    .
    .
    DIM  AccountNumber$(MAXCUSTOMERS), Balance(MAXCUSTOMERS)
    DIM  Contact$(MAXCUSTOMERS), PastDueAmount(MAXCUSTOMERS)
    .
    .
    .

────────────────────────────────────────────────────────────────────────────
NOTE
    Using a variable here, instead of a symbolic constant, makes the arrays
    dynamic arrays. Using a symbolic constant, as in the previous example,
    declares these arrays as static arrays. See Chapter 2, "Data Types," in
    this manual and Appendix F, "Metacommands," in Programming in BASIC for
    more information about static and dynamic arrays.
────────────────────────────────────────────────────────────────────────────


────────────────────────────────────────────────────────────────────────────
COS Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the cosine of an angle given in radians

■ Syntax

    COS(numeric-expression)

■ Remarks

    The expression, numeric-expression, can be any numeric type.

    By default, the cosine is calculated in single precision. If
    numeric-expression is a double-precision value, the cosine is calculated
    in double precision.

    You can convert an angle measurement from degrees to radians by
    multiplying the degrees by π/180, where π = 3.141593.

■ See Also

    ATN, SIN, TAN

■ Example

    The following program plots the graph of the polar equation r = nq for
    values of n from 0.1-1.1. This program uses the conversion factors x =
    cos(q) and y = sin(q) to change polar coordinates to Cartesian x,y
    coordinates. The figure plotted is sometimes known as the Spiral of
    Archimedes.

    CONST PI = 3.141593
    'Gray background.
    SCREEN 1 : COLOR 7
    'Define window large enough for biggest spiral.
    WINDOW (-4,-6)-(8,2)
    'Draw line from origin to the right.
    LINE (0,0)-(2.2*PI,0),1
    'Draw ten spirals.
    FOR N = 1.1 TO .1 STEP -.1
        'Plot starting point.
        PSET (0,0)
        FOR Angle = 0 TO 2*PI STEP .04
        'Polar equation for spiral.
        R = N * Angle
        'Convert polar coordinates to Cartesian coordinates.
        X = R * COS(Angle)
        Y = R * SIN(Angle)
        'Draw line from previous point to new point.
        LINE -(X,Y),1
        NEXT
    NEXT


────────────────────────────────────────────────────────────────────────────
CSNG Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Converts a numeric expression to a single-precision value

■ Syntax

    CSNG(numeric-expression)

■ Remarks

    The CSNG function has the same effect as assigning the numeric-expression
    to a single-precision variable.

    CSNG rounds the value, if necessary, before converting it.

■ See Also

    CDBL, CINT

■ Example

    The following example shows how CSNG rounds before converting the value:

    A#=975.3421115#
    B#=975.3421555#
    PRINT A#; CSNG(A#); B#; CSNG(B#)

■ Output

    975.3421115  975.3421  975.3421555  975.3422


────────────────────────────────────────────────────────────────────────────
CSRLIN Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the current line (row) position of the cursor

■ Syntax

    CSRLIN

■ Remarks

    To return the current column position, use the POS function.

■ See Also

    LOCATE, POS

■ Example

    The following program uses a subprogram that prints a message on the
    screen without disturbing the current cursor position:

    ' Move cursor to center of screen, then print message.
    ' Cursor returned to center of screen.
        LOCATE 12,40
        CALL MsgNoMove("A message not to be missed.",9,35)
        INPUT "Enter anything to end: ",A$

    ' Print a message without disturbing current
    ' cursor position.
    SUB MsgNoMove (Msg$,Row%,Col%) STATIC

        ' Save the current line.
        CurRow%=CSRLIN
        ' Save the current column.
        CurCol%=POS(0)
        ' Print the message at the given position.
        LOCATE Row%,Col% : PRINT Msg$;
        ' Move the cursor back to original position.
        LOCATE CurRow%, CurCol%

    END SUB


────────────────────────────────────────────────────────────────────────────
CVSMBF, CVDMBF Functions
────────────────────────────────────────────────────────────────────────────

■ Action

    Converts strings containing Microsoft Binary format numbers to IEEE-format
    numbers

■ Syntax

    CVSMBF (4-byte-string)
    CVDMBF (8-byte-string)

■ Remarks

    The CVSMBF and CVDMBF functions allow you to read old random-access files
    containing real numbers stored as strings in Microsoft Binary format.
    These functions convert the string read from the old file to an
    IEEE-format number:

    Function                 Description
    ──────────────────────────────────────────────────────────────────────────
    CVSMBF                   Converts 4-byte-string containing a Microsoft
                            Binary format number to a single-precision
                            IEEE-format number.

    CVDMBF                   Converts 8-byte-string containing a Microsoft
                            Binary format number to a double-precision
                            IEEE-format number.
    ──────────────────────────────────────────────────────────────────────────

    The example below shows you how to read data from an old file by using
    CVSMBF and user-defined types for records. See Appendix B, "Differences
    from Previous Versions of QuickBASIC," in Programming in BASIC for more
    information about converting old data files.

■ See Also

    FIELD; MKSMBF$, MKDMBF$

■ Example

    The following program reads records from a random-access file containing
    Microsoft Binary format real numbers stored as strings. Each record
    contains a student's name and a test score.

    ' Define a user type for the data records.
    TYPE StudentRec
        NameField AS STRING*20
        Score AS STRING*4
    END TYPE

    ' Define a variable of the user type.
    DIM Rec AS StudentRec

    ' Open the file.
    OPEN "TESTDAT.DAT" FOR RANDOM AS #1 LEN=LEN(Rec)

    Max=LOF(1)/LEN(Rec)

    ' Read and print all of the records.
    FOR I=1 TO Max
        ' Read a record into the user-type variable Rec.
        GET #1,I,Rec
        ' Convert the score from a string containing a Microsoft
        ' Binary format number to an IEEE-format number.
        ScoreOut=CVSMBF(Rec.Score)
        ' Display the name and score.
        PRINT Rec.NameField,ScoreOut
    NEXT I

    CLOSE #1


────────────────────────────────────────────────────────────────────────────
CVI, CVS, CVL, CVD Functions
────────────────────────────────────────────────────────────────────────────

■ Action

    Converts strings containing numeric values to numbers

■ Syntax

    CVI(2-byte-string)
    CVS(4-byte-string)
    CVL(4-byte-string)
    CVD(8-byte-string)

■ Remarks

    CVI, CVS, CVL, and CVD are used with a FIELD statement to read real
    numbers from a random-access file. The functions take strings defined in
    the FIELD statement and convert them to a value of the corresponding
    numeric type. The functions are the inverse of MKI$, MKS$, MKL$, and MKD$:

    Function                 Description
    ──────────────────────────────────────────────────────────────────────────
    CVI                      Converts 2-byte-string created with MKI$ back to
                            an integer.

    CVS                      Converts 4-byte-string created with MKS$ back to
                            a single-precision number.

    CVL                      Converts 4-byte-string created with MKL$ back to
                            a long integer.

    CVD                      Converts 8-byte-string created with MKD$ back to
                            a double-precision number.
    ──────────────────────────────────────────────────────────────────────────

────────────────────────────────────────────────────────────────────────────
NOTE
    The new BASIC record variables provide a more efficient and convenient way
    of reading and writing random-access files. See Chapter 3, "File and
    Device I/O," in Programming in BASIC for a complete example.
────────────────────────────────────────────────────────────────────────────

■ See Also

    FIELD; LSET; MKD$, MKI$, MKL$, MKS$

■ Example

    The following program illustrates the use of MKS$ and CVS:

    OPEN "ACCOUNT.INF" FOR RANDOM AS #2 LEN = 29
    FIELD #2, 25 AS Name$, 4 AS Check$

    Format$ = "$$#####.##"
    DO
        PRINT
        DO
        INPUT "Enter account # to update: ",Rec%
        GET #2, Rec%   'Get the record
        PRINT "This is the account for "; Name$
        INPUT "Is this the account you wanted"; R$
        LOOP WHILE UCASE$(MID$(R$,1,1)) <> "Y"

        'Convert string to single-precision number.
        Checkamt!  = CVS(Check$)
        PRINT
        PRINT "The opening balance for this account is";
        PRINT USING Format$; Checkamt!
        PRINT "Enter the checks and cash withdrawals for this"
        PRINT "account below. Enter 0 when finished."

        DO
        INPUT Checkout! : Checkamt! = Checkamt! - Checkout!
        LOOP UNTIL Checkout! = 0

        PRINT
        PRINT "Enter the deposits for this account below."
        PRINT "Enter 0 when finished."

        DO
        INPUT Checkin! : Checkamt! = Checkamt! + Checkin!
        LOOP UNTIL Checkin! = 0

        PRINT
        PRINT "The closing balance for this account is";
        PRINT USING Format$; Checkamt!
        'Convert single-precision number to string.
        LSET Check$ = MKS$(Checkamt!)
        PUT #2, Rec%   'Store the record.
        INPUT "Update another"; R$

    LOOP UNTIL UCASE$(MID$(R$,1,1)) <> "Y"
    CLOSE #2
    END


────────────────────────────────────────────────────────────────────────────
DATA Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Stores the numeric and string constants used by a program's READ
    statements

■ Syntax

    DATA constant1 «,constant2»...

■ Remarks

    The constant1, constant2, and so on in a DATA statement can be any valid
    numeric or string constant.

    Names of symbolic constants (defined in a CONST statement) appearing in
    DATA statements are interpreted as strings, rather than names of
    constants. For example, in the following program fragment the second data
    item is a string, "PI", and not the value 3.141593:

    CONST PI=3.141593
    .
    .
    .
    DATA 2.20, PI,45,7
    .
    .
    .

    A DATA statement may contain as many constants as will fit on a line. The
    constants are separated by commas. You may use any number of DATA
    statements.

────────────────────────────────────────────────────────────────────────────
NOTE
    String constants in DATA statements require double quotes only if they
    contain commas, colons, or significant leading or trailing spaces.
────────────────────────────────────────────────────────────────────────────

    Null data items (indicated by a missing value) can appear in a data list:

    DATA 1,2,,4,5

    When a null item is read into a numeric variable, the variable has the
    value 0. When a null item is read into a string variable, the variable has
    the null string value ("").

    When working in the QuickBASIC environment, DATA statements can only be
    entered in the module-level code. QuickBASIC moves all DATA statements not
    in the module-level code to the module-level code when it reads a source
    file. READ statements using the DATA statements can appear anywhere in the
    program.

    DATA statements are used in the order in which they appear in the source
    file. You may think of the items in several DATA statements as one
    continuous list of items, regardless of how many items are in a statement
    or where the statement appears in the program.

    You may reread DATA statements by using the RESTORE statement.

■ See Also

    READ RESTORE

■ Examples

    The following example displays the current date by converting the date
    returned by the DATE$ function:

    ' Get the date.
    C$ = DATE$
    ' Use VAL to split the month off the string returned by
    ' DATE$.
    FOR I% = 1 TO VAL(C$)
        READ Month$
    NEXT
    DATA January, February, March, April, May, June, July
    DATA August, September, October, November, December

    ' Get the day.
    Day$ = MID$(C$,4,2)
    IF LEFT$(Day$,1) = "0" THEN Day$ = RIGHT$(Day$,1)
    ' Get the year.
    Year$ = RIGHT$(C$,4)

    PRINT "Today is " Month$ " " Day$ ", " Year$

■ Output

    Today is September 21, 1988

    The following example shows how null data items are handled:

    DATA abc,,def
    DATA 1,,2
    READ A$, B$, C$         'B$ = ""
    PRINT A$, B$, C$
    PRINT
    READ A, B, C            'B = 0
    PRINT A, B, C

    OUTPUT

    abc                    def
    1            0         2


────────────────────────────────────────────────────────────────────────────
DATE$ Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns a string containing the current date

■ Syntax

    DATE$

■ Remarks

    The DATE$ function returns a ten-character string in the form mm-dd-yyyy,
    where mm is the month (01-12), dd is the day (01-31), and yyyy is the year
    (1980-2099).

■ See Also

    DATE$ Statement

■ Example

    Note that the DATE$ function in the following example prints a zero in
    front of the month:

    PRINT DATE$

■ Output

    09-21-88


────────────────────────────────────────────────────────────────────────────
DATE$ Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Sets the current date

■ Syntax

    DATE$ = stringexpression

■ Remarks

    The DATE$ statement is the complement of the DATE$ function.

    The stringexpression must have one of the following forms, where mm
    (01-12) and dd (01-31) are the month and day, and yy and yyyy (1980-2099)
    are the year:

    mm-dd-yy
    mm-dd-yyyy
    mm/dd/yy
    mm/dd/yyyy

■ Example

    The following program sets the current date from an input numeric date:

    PRINT "Enter the date below (default year is 1989)."
    INPUT "    Month:   ",Month$
    INPUT "    Date:    ",Day$
    INPUT "    Year:    ",Year$
    IF Year$ = "" THEN Year$ = "89"
    DATE$ = Month$ + "/" + Day$ + "/" + Year$


────────────────────────────────────────────────────────────────────────────
DECLARE Statement (BASIC Procedures)
────────────────────────────────────────────────────────────────────────────

■ Action

    Declares references to BASIC procedures and invokes argument type checking

■ Syntax

    DECLARE {FUNCTION | SUB } name «(«parameterlist»)»

■ Remarks

    The DECLARE statement uses the following arguments:

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    name                     The procedure's name. The name is limited to 40
                            characters. FUNCTION names can end in one of the
                            type-declaration characters (%, &, !, #, or $) to
                            indicate the type of value returned.

    parameterlist            A list of parameters indicating the number and
                            type of arguments used when calling the
                            procedure. Syntax is shown below. Only the number
                            and the type of the arguments are significant.
    ──────────────────────────────────────────────────────────────────────────

    For calls within BASIC, the DECLARE statement is required only if you call
    SUB procedures without the CALL keyword, or if you invoke a FUNCTION
    defined in another module. See Chapter 2, "SUB and FUNCTION Procedures,"
    in Programming in BASIC, for more information about invoking subprograms
    without CALL.

    A DECLARE statement also causes the compiler to check the number and type
    of arguments used to invoke the procedure. QuickBASIC automatically
    generates DECLARE statements when you save your program while you are
    working in the environment. The DECLARE statement can appear only in
    module-level code (not in a SUB or FUNCTION) and affects the entire
    module.

    The parameterlist serves as a prototype for checking the number and type
    of the arguments in SUB and FUNCTION calls. It has the following syntax:

    variable«AS type» «,variable«AS type»»...

    A variable is any valid BASIC variable name. If the variable is an array,
    it may be followed by the number of dimensions in parentheses:

    DECLARE SUB DisplayText (A(2) AS STRING)
    DIM Text$(100,5)
    .
    .
    .
    CALL DisplayText(Text$())

    The number of dimensions is optional.

    The type is either INTEGER, LONG, SINGLE, DOUBLE, STRING, or a
    user-defined type. Again, only the number and types of arguments are
    significant.

────────────────────────────────────────────────────────────────────────────
NOTE
    You cannot have fixed-length strings in DECLARE statements because only
    variable-length strings can be passed to SUB and FUNCTION procedures.
    Fixed-length strings can appear in an argument list but are converted to
    variable-length strings before being passed.
────────────────────────────────────────────────────────────────────────────

    A variable's type can also be indicated by including an explicit type
    character (%, &, !, #, or $) or by relying on the default type.

    The form of the parameter list determines whether or not argument checking
    is done, as shown in the following list:

    Declaration                          Meaning
    ──────────────────────────────────────────────────────────────────────────
    DECLARE SUB First                    You may only omit the parentheses if
                                        the SUB or FUNCTION is separately
                                        compiled. No argument checking is
                                        done.

    DECLARE SUB First ()                 First has no parameters. Arguments in
                                        a CALL to First are flagged as an
                                        error. An empty parameter list
                                        indicates that the SUB or FUNCTION
                                        has no parameters.

    DECLARE SUB First (X AS LONG)        First has one long-integer parameter.
                                        The number and type of the arguments
                                        in each CALL or invocation are
                                        checked when the parameter list
                                        appears in the DECLARE.
    ──────────────────────────────────────────────────────────────────────────

■ See Also

    CALL, CALLS (Non-BASIC); FUNCTION; SUB

■ Example

    In the following example, the DECLARE statement allows Sort to be invoked
    without the CALL keyword:

    ' Generate 20 random numbers, store them in an array, and sort.
    ' The sort subprogram is called without the CALL keyword.
    DECLARE SUB Sort(A(1) AS SINGLE, N AS INTEGER)
    DIM Array1(1 TO 20)

    ' Generate 20 random numbers.
    RANDOMIZE TIMER
    FOR I=1 TO 20
        Array1(I)=RND
    NEXT I

    ' Sort the array and call Sort without the CALL keyword.
    ' Notice the absence of parentheses around the arguments in
    ' the call to Sort.
    Sort Array1(), 20%

    ' Print the sorted array.
    FOR I=1 TO 20
        PRINT Array1(I)
    NEXT I
    END

    ' Sort subroutine.
    SUB Sort(A(1), N%) STATIC

        FOR I= 1 TO N%-1
        FOR J=I+1 TO N%
            IF A(I)>A(J) THEN SWAP A(I), A(J)
        NEXT J
        NEXT I

    END SUB


────────────────────────────────────────────────────────────────────────────
DECLARE Statement (Non-BASIC Procedures)
────────────────────────────────────────────────────────────────────────────

■ Action

    Declares calling sequences for external procedures written in other
    languages

■ Syntax 1

    DECLARE FUNCTION name «CDECL» «ALIAS "aliasname"»«(«parameterlist»)»

■ Syntax 2

    DECLARE SUB name «CDECL» «ALIAS "aliasname"»«(«parameterlist»)»

■ Remarks

    The following list describes the parts of the DECLARE statement:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
    FUNCTION                 Indicates that the external procedure returns a
    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
    FUNCTION                 Indicates that the external procedure returns a
                            value and can be used in an expression.

    SUB                      Indicates that the external procedure is invoked
                            in the same way as a BASIC SUB.

    name                     The name used in the BASIC program to invoke the
                            procedure. Names may have up to 40 characters.
                            FUNCTION names can include an explicit type
                            character (%, &, !, #, or $) indicating the type
                            of value the FUNCTION returns.

    CDECL                    Indicates that the procedure uses the C-language
                            argument order. CDECL passes the arguments from
                            right to left, rather than using the BASIC
                            convention of left to right.

                            CDECL also affects the name used in searches of
                            object files and libraries. If there is no ALIAS
    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
                            object files and libraries. If there is no ALIAS
                            in the DECLARE, the name of the procedure (name)
                            is converted to lowercase, the type-declaration
                            character is removed, and an underscore is added
                            to the beginning. This becomes the name used when
                            searching libraries and external files. If CDECL
                            is used with an ALIAS, the aliasname is used.

    ALIAS                    Indicates that the procedure has another name in
                            the .OBJ or library file.

    aliasname                The name the procedure has in the file or
                            library.
    ──────────────────────────────────────────────────────────────────────────


    A parameterlist has the following syntax:

    «{BYVAL|SEG}» variable «AS type» «,«{BYVAL|SEG}» variable «AS type»»...

    The following list describes the parts of a parameterlist:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
    BYVAL                    BYVAL indicates that the parameter is passed by
                            value, rather than by reference. Reference is the
                            default. BYVAL can be used only with INTEGER,
                            LONG, SINGLE, and DOUBLE parameters.

                            When BYVAL appears in front of a parameter, the
                            actual argument is converted to the type
                            indicated in the DECLARE statement before being
                            passed.

    SEG                      Indicates the parameter is passed as a segmented
                            address (far pointer).

    variable                 A valid BASIC variable name. Only the variable's
                            type is significant. If the variable is an array
    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
                            type is significant. If the variable is an array
                            it may be followed by the number of dimensions in
                            parentheses (to maintain compatibility with older
                            versions of BASIC):

                            DECLARE SUB EigenValue (A(2) AS DOUBLE)

                            The number of dimensions is optional.

    AS type                  Indicates the variable's type. The type element
                            may be either INTEGER, LONG, SINGLE, DOUBLE,
                            STRING, ANY, or a user type. You can also
                            indicate the variable's type by including an
                            explicit type character (%, &, !, #, or $) in the
                            variable name or by relying on the default type.

                            When declaring external procedures written in
                            other languages, you can use the ANY keyword in
                            the AS clause. ANY overrides type checking for
    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
                            the AS clause. ANY overrides type checking for
                            that argument. You cannot use ANY with arguments
                            passed by value.
    ──────────────────────────────────────────────────────────────────────────


────────────────────────────────────────────────────────────────────────────
NOTE
    When neither BYVAL nor SEG is used, arguments are passed as near addresses
    (offsets).
────────────────────────────────────────────────────────────────────────────

    This form of the DECLARE statement lets you reference procedures written
    in other languages. The DECLARE statement also causes the compiler to
    check the number and type of arguments used to invoke the procedure. A
    DECLARE statement can appear only in module-level code and affects the
    entire source file. The form of the parameter list determines whether or
    not argument type checking is done:

    Declaration                          Meaning
    ──────────────────────────────────────────────────────────────────────────
    DECLARE SUB First CDECL              No argument checking is done when
                                        there is no parameter list.

    DECLARE SUB First CDECL ()           First has no parameters. Arguments in
                                        a CALL to First are flagged as an
                                        error. Empty parentheses indicate
                                        that the SUB or FUNCTION has no
                                        parameters.

    DECLARE SUB First CDECL (X AS LONG)  First takes one long integer
                                        argument. When a parameter list
                                        appears, the number and type of the
                                        arguments are checked in each
                                        invocation.
    ──────────────────────────────────────────────────────────────────────────

    A procedure that appears in a DECLARE statement can be invoked without the
    CALL keyword. See the entry for DECLARE (BASIC) for more information.

────────────────────────────────────────────────────────────────────────────
NOTE
    You cannot have fixed-length strings in DECLARE statements because only
    variable-length strings can be passed to SUB and FUNCTION procedures.
    Fixed-length strings can appear in an argument list but are converted to
    variable-length strings before being passed.
────────────────────────────────────────────────────────────────────────────

    Be careful when using the SEG keyword to pass arrays because BASIC may
    move variables in memory before the called routine begins execution.
    Anything in a CALL statement's argument list that causes memory movement
    may create problems. You can safely pass variables using SEG if the CALL
    statement's argument list contains only simple variables, arithmetic
    expressions, or arrays indexed without the use of intrinsic or
    user-defined functions.

    See Section 2.3.3, "Variable Storage Allocation," for a list of things
    that cause variable movement and for information about when to use near or
    far addresses for variables.

■ See Also

    CALL, CALLS (Non-BASIC); DECLARE (BASIC)

■ Example

    The following example shows a BASIC program that calls a short C function.
    The C program would be separately compiled and stored in a Quick library
    or explicitly linked to form the .EXE file.

    DEFINT a-z

    ' The function addone uses C argument passing and takes
    ' a single integer argument passed by value.
    DECLARE FUNCTION addone CDECL (BYVAL n AS INTEGER)

    INPUT x
    y=addone(x)
    PRINT "x and y are ";x;y

    END

    /* C function addone. Returns one more than the value of its
        integer argument. */
    int far addone(n)
    int n;
    {
        return(++n);
    }


────────────────────────────────────────────────────────────────────────────
DEF FN Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Defines and names a function

■ Syntax 1

    DEF FNname«(parameterlist)» = expression

■ Syntax 2

    DEF FNname«(parameterlist)»
    .
    .
    .
    FNname = expression
    .
    .
    .
    END DEF

■ Remarks

    The DEF FN statement takes the following arguments:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    name                     A legal variable name, up to 40 characters long.
                            This name, combined with FN, is the name of the
    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
                            This name, combined with FN, is the name of the
                            function. The name can include an explicit
                            type-declaration character to indicate the type
                            of value returned. Names that are the same except
                            for the type-declaration character are distinct
                            names. For example, the following are names of
                            three different DEF FN functions:

                            FNString$

                            FNString%

                            FNString#

                            To return a value from a DEF FN function, assign
                            the value to the full function name:

                            FNString$ = "No answer."

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────

    parameterlist            A list of variable names, separated by commas.
                            The syntax is explained below. When the function
                            is called, BASIC assigns the value of each
                            argument to its corresponding parameter. Function
                            arguments are passed by value. DEF FN functions
                            do not accept arrays, records, or fixed-length
                            strings as arguments.

    expression               In both syntaxes, expression is evaluated and the
                            result is the function's value. In Syntax 1,
                            expression is the entire body of the function and
                            is limited to one logical line.

                            When no expression is assigned to the name, the
                            default return values are zero for a numeric DEF
                            FN function, and the null string ("") for a
                            string DEF FN function.
    ──────────────────────────────────────────────────────────────────────────
    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    ──────────────────────────────────────────────────────────────────────────


    A parameterlist has the following syntax:

    variable «AS type» «, variable «AS type»»...

    A variable is any valid BASIC variable name. The type is INTEGER, LONG,
    SINGLE, DOUBLE, or STRING. You may also indicate a variable's type by
    including a type-declaration character (%, &, !, #, or $) in the name.

────────────────────────────────────────────────────────────────────────────
NOTE
    The FUNCTION procedure offers greater flexibility and control than the DEF
    FN function. See the entry for FUNCTION and Chapter 2, "SUB and FUNCTION
    Procedures," in Programming in BASIC for more information.
────────────────────────────────────────────────────────────────────────────

    You must define a DEF FN function with a DEF FN statement before the
    function is used. Calling a DEF FN function before it is defined produces
    an error message that reads Function not defined. DEF FN function
    definitions cannot appear inside other DEF FN definitions. In addition,
    DEF FN functions cannot be recursive.

    You must use the EXIT DEF statement to leave a multiline DEF FN early. DEF
    FN functions can only be used in the module in which they are defined.
    They cannot be referenced from other modules.

    A DEF FN function may share variables with the module-level code.
    Variables not in the parameterlist are global──their values are shared
    with the calling program. To keep a variable value local to a function
    definition, declare it in a STATIC statement. See Chapter 2, "Data
    Types," for a discussion of local and global variables.

    DEF FN can return either numeric or string values. DEF FN returns a string
    value if name is a string variable name, and a numeric value if name is a
    numeric variable name. Assigning a numeric value to a string function name
    or assigning a string value to a numeric function name produces the error
    message Type mismatch.

    If the function is numeric, DEF FNname returns a value with the precision
    specified by name. For example, if name specifies a double-precision
    variable, then the value returned by DEF FNname is double precision,
    regardless of the precision of expression. Because BASIC may rearrange
    arithmetic expressions for greater efficiency, avoid using DEF FN
    functions that change program variables in expressions that may be
    reordered. The following example may give different results:

    DEF FNShort
        I=10
        FNShort=1
    END DEF
    I=1 : PRINT FNShort + I + I

    If BASIC reorders the expression so FNShort is called after calculating
    (I+I), the result is 3 rather than 21. You can usually avoid this problem
    by isolating the DEF FN function call:

    I = 1 : X = FNShort : PRINT X + I + I

    Doing I/O operations in DEF FN functions used in I/O statements or doing
    graphics operations in DEF FN functions in graphics statements may cause
    similar problems.

■ See Also

    EXIT, FUNCTION, STATIC

■ Example

    The following example uses a DEF FN function to calculate the factorial of
    an input number (the factorial of 3 is 3*2*1):

    DEF FNFactorial#(X)
        STATIC Tmp#, I
        Tmp#=1
        FOR I=2 TO X
        Tmp#=Tmp#*I
        NEXT I
        FNFactorial#=Tmp#
    END DEF

    INPUT "Enter a number: ",Num
    PRINT Num "factorial is" FNFactorial#(Num)

■ Output

    Enter a number: 3
    3 factorial is 6


────────────────────────────────────────────────────────────────────────────
DEF SEG Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Sets the current segment address for a subsequent PEEK function or a
    BLOAD, BSAVE, CALL ABSOLUTE, or POKE statement

■ Syntax

    DEF SEG «=address»

■ Remarks

    For BLOAD, BSAVE, CALL ABSOLUTE, PEEK, and POKE, address is used as the
    segment. The address is a numeric expression returning an unsigned integer
    in the range 0-65,535. A value outside this range produces the error
    message Illegal function call. The previous segment is retained if an
    error occurs. If you omit address, the BASIC data segment is used.

    Be sure to separate DEF and SEG with a space. Otherwise, BASIC interprets
    the statement to mean "assign a value to the variable DEFSEG."

■ Differences From Basica

    In QuickBASIC, the CALL and CALLS statements do not use the segment
    address set by DEF SEG.

■ Example

    The following program uses DEF SEG, PEEK, and POKE statements to turn the
    CAPS LOCK on and off:

────────────────────────────────────────────────────────────────────────────
NOTE
    This program contains hardware-specific instructions. It works correctly
    on IBM PC, PC/XT(R), and PC/AT(R) computers.
────────────────────────────────────────────────────────────────────────────

    DECLARE SUB CapsOn ()
    DECLARE SUB CapsOff ()
    DECLARE SUB PrntMsg (R%,C%,M$)

    CLS

    ' Turn Caps Lock on.
    CapsOn
    PrntMsg 24,1,"<Caps Lock On>"

    ' Prompt for input to show keyboard has changed.
    LOCATE 12,10
    LINE INPUT "Enter a string (all characters are caps): ",S$

    ' Turn Caps Lock off.
    CapsOff
    PrntMsg 24,1,"              "

    PrntMsg 25,1,"Press any key to continue..."
    DO WHILE INKEY$="" : LOOP
    CLS
    END

    ' Turn Caps Lock on.
    SUB CapsOn STATIC
        ' Set segment to low memory.
        DEF SEG = 0
        ' Set Caps Lock on (turn on bit 6 of &H0417).
        POKE &H0417,PEEK(&H0417) OR &H40
        ' Restore segment.
        DEF SEG
    END SUB

    ' Turn Caps Lock off.
    SUB CapsOff STATIC
        DEF SEG=0
        ' Set Caps Lock off (turn off bit 6 of &H0417).
        POKE &H0417,PEEK(&H0417) AND &HBF
        DEF SEG
    END SUB

    ' Print message at Row%, Col% without changing cursor.
    SUB PrntMsg (Row%, Col%, Message$) STATIC
        ' Save current cursor position.
        CurRow%=CSRLIN : CurCol%=POS(0)
        LOCATE Row%,Col% : PRINT Message$;
        ' Restore cursor position.
        LOCATE CurRow%,CurCol%
    END SUB


────────────────────────────────────────────────────────────────────────────
DEFtype Statements
────────────────────────────────────────────────────────────────────────────

■ Action

    Set the default data type for variables, DEF FN functions, and FUNCTION
    procedures

■ Syntax

    DEFINT letterrange «,letterrange»...
    DEFSNG letterrange «,letterrange»...
    DEFDBL letterrange «,letterrange»...
    DEFLNG letterrange «,letterrange»...
    DEFSTR letterrange «,letterrange»...

■ Remarks

    The letterrange has the form:

    letter1«-letter2»

    where letter1 and letter2 are any of the uppercase or lowercase letters of
    the alphabet. Names beginning with the letters in letterrange have the
    type specified by the last three letters of the statement: integer (INT),
    long integer (LNG), single precision (SNG), double precision (DBL), or
    string (STR). For example, in the following program fragment, Message is a
    string variable:

    DEFSTR A-Q
    .
    .
    .
    Message="Out of stack space."

    The case of the letters in letterrange is not significant. All of the
    following statements are equivalent:

    DEFINT I-N
    DEFINT i-n
    DEFINT i-N

    A type-declaration character (%, &, !, #, or $) always takes precedence
    over a DEFtype statement. DEFtype statements do not affect record
    elements.

────────────────────────────────────────────────────────────────────────────
NOTE
    I!, I#, I&, I$, and I% are all distinct variables, and each may hold a
    different value.
────────────────────────────────────────────────────────────────────────────

■ Differences From Basica

    BASICA handles DEFtype statements differently. BASICA scans a statement
    each time before executing it. If the statement contains a variable
    without an explicit type (indicated by !, #, &, $, or %), the interpreter
    uses the current default type.

    In the example below, when BASICA interprets line 20, it determines that
    the current default type for variables beginning with I is integer. Line
    30 changes the default type to single precision. When BASICA loops back to
    line 20, it rescans the line and uses IFLAG as a single-precision
    variable.

    10  DEFINT I
    20  PRINT IFLAG
    30  DEFSNG I
    40  GOTO 20

    In contrast, QuickBASIC scans the text only once; once a variable appears
    in a program line, its type cannot be changed.

■ Example

    See the example for the ABS function.


────────────────────────────────────────────────────────────────────────────
DIM Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Declares a variable and allocates storage space

■ Syntax

    DIM «SHARED» variable«(subscripts)»«AS type»«,variable«(subscripts)»«AStype

■ Remarks

    The following list describes the parts of the DIM statement:

    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
    SHARED                   The optional SHARED attribute allows all
                            procedures in a module to share arrays and simple
                            variables. This differs from the SHARED
                            statement, which affects only variables within a
                            single SUB or FUNCTION.

    variable                 A BASIC variable name.

    subscripts               The dimensions of the array. Multiple dimensions
                            can be declared. The subscript syntax is
                            described below.

    AS type                  Declares variable to be an elementary or
                            user-defined type. The elementary types are
                            INTEGER, LONG, SINGLE, DOUBLE, and STRING
                            (variable or fixed).
    ──────────────────────────────────────────────────────────────────────────

    Subscripts in DIM statements have the following form:

    «lower TO» upper «, «lower TO» upper»...

    The TO keyword provides a way to indicate both the lower and the upper
    bounds of an array's subscripts. The following statements are equivalent
    (if there is no OPTION BASE statement):

    DIM A(8,3)
    DIM A(0 TO 8, 0 TO 3)
    DIM A(8,0 TO 3)

    With the TO keyword, you are no longer restricted to positive subscripts.
    You can use TO to specify any range of subscripts from -32,768 to 32,767:

    DIM A(-4 TO 10)
    DIM B(-99 TO -5,-3 TO 0)

    If you use an array in your program without including the array in a DIM
    statement, the maximum value of each subscript of the array is 10. If you
    use a subscript that is greater than the specified maximum, an error
    message appears that says Subscript out of range.

    The DIM statement initializes all elements of numeric arrays to zero and
    all the elements of string arrays to null strings. The fields of record
    variables are initialized to zero, including fixed-string fields. The
    maximum number of dimensions allowed in a DIM statement is 60.

    If you try to dimension an array variable with a DIM statement after you
    have referred to the array, an error message results that reads Array
    already dimensioned. It is good programming practice to put the required
    DIM statements at the beginning of a program, outside of any loops.

    STATIC AND DYNAMIC ARRAYS

    How you declare an array also determines whether it is static (allocated
    when the program is translated) or dynamic (allocated when the program is
    run).

    ■ An array declared first in a COMMON statement is dynamic.

    ■ Implicitly dimensioned arrays are static.

    ■ Arrays dimensioned with numeric constants or CONST statement constants
    are static.

    ■ Arrays dimensioned with variables as subscripts are dynamic.

    The following list shows the different combinations and results:

    Statement                Result
    ──────────────────────────────────────────────────────────────────────────
    DIM A(0 TO 9)            The array A is allocated as a static array if
                            ¢DYNAMIC is not in effect.

    DIM A(MAXDIM)            If MAXDIM is defined in a CONST statement, A is a
                            static array. If MAXDIM is a variable, then the
                            array is a dynamic array and is only allocated
                            when the program reaches the DIM statement.
    ──────────────────────────────────────────────────────────────────────────

    See Appendix F, "Metacommands," in Programming in BASIC and Chapter 2,
    "Data Types," in this manual for more information about static and dynamic
    arrays.

────────────────────────────────────────────────────────────────────────────
NOTE
    If the array size exceeds 64K, if the array is not dynamic, and if the /AH
    option was not used, you may get an error message that reads Subscript out
    of range or one that reads Array too big. Reduce the size of the array or
    make the array dynamic and use the /AH command-line option.
────────────────────────────────────────────────────────────────────────────

    TYPE DECLARATIONS

    In addition to declaring the dimensions of an array, the DIM statement may
    also be used to declare the type of a variable. For example, this
    statement declares the variable to be an integer, even though there is no
    type declaration character or DEFINT statement:

    DIM NumberOfBytes AS INTEGER

    The DIM statement provides a mechanism for declaring specific variables to
    be records. In the following example, the variable TopCard is declared as
    a record variable:

    TYPE Card
        Suit AS STRING*9
        Value AS INTEGER
    END TYPE

    DIM TopCard AS Card

    You may also declare arrays of records:

    TYPE Card
        Suit AS STRING*9
        Value AS INTEGER
    END TYPE

    DIM Deck(1 TO 52) AS Card

    See Appendix F, "Metacommands," in Programming in BASIC and Chapter 2,
    "Data Types," in this manual for more information.

■ Differences From Basica

    BASICA executes a DIM statement when it encounters the statement in the
    program. The array is only allocated when the statement is executed, so
    all arrays in BASICA are dynamic.

■ See Also

    ERASE, OPTION BASE, REDIM, SHARED

■ Example

    The following example finds and prints the maximum and minimum of a set of
    values:

    ' Find the maximum and minimum of up to 20 values.
    '
    ' Dimension an array to hold the values.
    CONST MAXDIM=20
    DIM A(1 TO MAXDIM)
    ' Use DIM to set up two integer variables.
    ' All other variables are SINGLE.
    DIM NumValues AS INTEGER, I AS INTEGER

    ' Get the values.
    NumValues=0
    PRINT "Enter values one per line. Type END to end."

    DO
        INPUT A$
        IF UCASE$(A$)="END" OR NumValues>=MAXDIM THEN EXIT DO
        NumValues=NumValues+1
        A(NumValues)=VAL(A$)
    LOOP

    ' Find the maximum and minimum values.
    IF NumValues>0 THEN
        Max=A(1)
        Min=A(1)
        FOR I=1 TO NumValues
        IF A(I)>Max THEN Max=A(I)
        IF A(I)<Min THEN Min=A(I)
        NEXT I

        PRINT "The maximum is ";Max;" The minimum is ";Min
    ELSE
        PRINT "Too few values."
    END IF

■ Output

    Enter values one per line. Type END to end.
    ? 23.2
    ? 11.3
    ? 1.6
    ? end
    The maximum is  23.2  The minimum is  1.6


────────────────────────────────────────────────────────────────────────────
DO...LOOP Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Repeats a block of statements while a condition is true or until a
    condition becomes true

■ Syntax 1

    DO «statementblock » LOOP «{WHILE | UNTIL} booleanexpression»

■ Syntax 2

    DO «{WHILE | UNTIL} booleanexpression» «statementblock » LOOP

■ Remarks

    The following list describes the arguments of the DO...LOOP statement:

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    statementblock           One or more BASIC statements to be repeated

    booleanexpression        Any expression that evaluates to true (nonzero)
                            or false (zero)
    ──────────────────────────────────────────────────────────────────────────

    You can use a DO...LOOP statement instead of a WHILE...WEND statement. The
    DO...LOOP is more versatile because it can test for a condition at the
    beginning or at the end of a loop.

■ Examples

    The first two examples below show you how placement of the condition
    affects the number of times the block of statements is executed. The third
    example illustrates testing at the end of a loop and presents a sort
    subprogram where an ending test is appropriate.

    In the following example, the test is done at the beginning of the loop.
    Because I is not less than 10, the body of the loop (the statement block)
    is never executed.

    ' DO...LOOP with test at the top of the loop.
    ' Output shows that loop was not executed.
    I = 10
    PRINT "Value of I at beginning of loop is  ";I
    DO WHILE I < 10
        I = I + 1
    LOOP
    PRINT "Value of I at end of loop is  ";I

■ Output

    Value of I at beginning of loop is  10
    Value of I at end of loop is  10

    The following example tests I at the end of the loop, so the statement
    block executes at least once.

    ' DO...LOOP with test at the bottom of the loop.
    ' Output shows loop was executed once.
    I = 10
        DO
        PRINT "Value of I at beginning of loop is  ";I
        I = I + 1
        LOOP WHILE I < 10
        PRINT "Value of I at end of loop is  ";I

■ Output

    Value of I at beginning of loop is  10
    Value of I at end of loop is 11

    The following sort subprogram tests at the end of the loop because the
    entire array must be examined at least once to see if it is in order. In
    general, test at the end of a loop only if you know that you always want
    the statement block executed at least once.

    ' Bubble sort subroutine
    '        Exes is array to sort
    '        N is number of elements in Exes
    '
    '        Note: sort assumes the first element of
    '              Exes is Exes(1).

    ' Set up a special value to indicate no exchanges.
    CONST NOEXCH=-1

    SUB sort(Exes(1),N) STATIC

    Limit=N
    DO

        Exchange=NOEXCH
        FOR I=1 TO Limit-1     ' Make one pass over the array.
        IF Exes(I) > Exes(I+1) THEN
            SWAP Exes(I),Exes(I+1)   'Exchange array elements.
            Exchange=I               'Record location of most
        END IF                      'recent exchange.
        NEXT I
        Limit=Exchange      'Sort on next pass only to where
                            'last exchange was done.
    LOOP UNTIL Exchange=NOEXCH  'Sort until no elements
                                'are exchanged.

    END SUB


────────────────────────────────────────────────────────────────────────────
DRAW Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Draws an object defined by stringexpression

■ Syntax

    DRAW stringexpression

■ Remarks

    The DRAW statement combines many of the capabilities of the other graphics
    statements into a graphics macro language, as described below under
    "Cursor-Movement Commands" and "Angle, Color, and Scale-Factor Commands."
    This macro language defines a set of characteristics that can be used to
    describe an image. These characteristics include motion (up, down, left,
    right), color, rotation angle, and scale factor. The stringexpression
    consists of these macro commands.

    CURSOR-MOVEMENT COMMANDS

    The following prefix commands can precede any of the movement commands:

    Prefix                   Description
    ──────────────────────────────────────────────────────────────────────────
    B                        Move, but do not plot any points.
    N                        Move, but return to original position when done.
    ──────────────────────────────────────────────────────────────────────────

    The following commands specify movement in units. The default unit size is
    one point; this unit size can be modified by the S command, which sets the
    scale factor. (S is described in "Angle, Color, and Scale-Factor
    Commands.") If no argument is supplied, the cursor is moved one unit.

    Each of the movement commands initiates movement from the current graphics
    position, which is usually the coordinate of the last graphics point
    plotted with another graphics macro-language command. The current position
    defaults to the center of the screen when a program is run.

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Movement                 Description
    ──────────────────────────────────────────────────────────────────────────
    U «n»                    Move up n units.

    D «n»                    Move down n units.

    L «n»                    Move left n units.

    R «n»                    Move right n units.

    E «n»                    Move diagonally up and right n units.

    F «n»                    Move diagonally down and right n units.

    Movement                 Description
    ──────────────────────────────────────────────────────────────────────────

    G «n»                    Move diagonally down and left n units.

    H «n»                    Move diagonally up and left n units.

    M x,y                    Move absolute or relative. If x is preceded by a
                            plus (+) or minus (-), the movement is relative
                            to the current point; that is, x and y are added
                            to (or subtracted from) the coordinates of the
                            current graphics position and connected with that
                            position by a line.

                            If no sign precedes x, the movement is absolute;
                            that is, a line is drawn from the current cursor
                            position to the point with coordinates x,y.
    ──────────────────────────────────────────────────────────────────────────


    ANGLE, COLOR, AND SCALE-FACTOR COMMANDS

    The following commands let you change the appearance of a drawing by
    rotating it, changing colors, or scaling it:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Command                  Description
    ──────────────────────────────────────────────────────────────────────────
    A n                      Set angle of rotation n. The value of n may range
                            from 0 to 3, where 0 is 0°, 1 is 90°, 2 is 180°,
                            and 3 is 270°. Figures rotated 90° or 270° are
                            scaled so they appear the same size using 0° or
                            180° on a monitor screen with a standard screen
                            width-to-height ratio of 4/3.

    TA n                     Turn an angle of n degrees; n must be in the
                            range -360 to 360. If n is positive, rotation is
                            counterclockwise; if n is negative, rotation is
                            clockwise. The following example uses TA to draw
                            spokes:

                            SCREEN 1
    Command                  Description
    ──────────────────────────────────────────────────────────────────────────
                            SCREEN 1
                            FOR D=0 TO 360  STEP 10
                                DRAW "TA="+VARPTR$(D)+"NU50"
                            NEXT D

    C n                      Set color to n. See COLOR, PALETTE, and SCREEN
                            statements for discussions of valid colors,
                            numbers, and attributes.

    S n                      Set scale factor n, which may range from 1 to
                            255. The scale factor multiplied by the distances
                            given with U, D, L, R, or relative M commands
                            gives the actual distance traveled.

    P paintcolor,            The paintcolor is the paint color for a figure's
    bordercolor              interior, while bordercolor is the paint color
                            for the figure's border. Tile painting (painting
                            an area with a graphic pattern) is not supported
                            in DRAW.
    Command                  Description
    ──────────────────────────────────────────────────────────────────────────
                            in DRAW.

    X stringexpression       Execute substring. This powerful command allows
                            you to execute a second substring from a string.
                            You may have one string expression execute
                            another, which executes a third, and so on.
                            Numeric arguments can be constants like 123 or
                            variable names.
                            QuickBASIC requires the "X" +
                            VARPTR$(stringexpression) form of this command.
                            (See "Differences from BASICA" below.)
    ──────────────────────────────────────────────────────────────────────────


■ Differences From Basica

    The DRAW statement requires modification of BASICA programs when used with
    QuickBASIC. Specifically, the compiler requires the VARPTR$ form for
    variables. Statements such as the following:

    DRAW "XA$"

    DRAW "TA = ANGLE"

    (where A$ and ANGLE are variables) must be changed as follows:

    DRAW "X" + VARPTR$(A$)

    DRAW "TA =" + VARPTR$(ANGLE)

    when using the compiler.

    The compiler does not support the Xstringexpression command. However, you
    may execute a substring by appending the character form of the address to
    X. For example, the following two statements are equivalent. The first
    statement works when within the environment and when using the compiler;
    the second works only within the environment.

    DRAW "X" + VARPTR$(A$)
    DRAW "XA$"

■ Examples

    The following program draws a triangle's outline in magenta and paints the
    interior cyan:

    SCREEN 1
    DRAW "C2"             'Set color to magenta.
    DRAW "F60 L120 E60"   'Draw a triangle.
    DRAW "BD30"           'Move down into the triangle.
    DRAW "P1,2"           'Paint interior.

    The following example shows different ways of using the M macro command:
    with absolute movement and relative movement; using string-variable
    arguments; and using numeric-variable arguments:

    SCREEN 2
    'Absolute movement
    DRAW "M 50,80"
    DRAW "M 80,50"
    'Relative movement
    DRAW "M+40,-20"
    DRAW "M-40,-20"
    DRAW "M-40,+20"
    DRAW "M+40,+20"
    'Using a string variable.
    X$ = "400" : Y$ = "190"
    DRAW "M" + X$ + "," + Y$
    'Using numeric variables (note the two "=" signs).
    A = 300 : B = 120
    DRAW "M="+VARPTR$(A)+",="+VARPTR$(B)

    The following example draws a clock on the screen using the TIME$
    function:

    ' Declare procedure.
    DECLARE SUB Face (Min$)

    ' Select 640 x 200 pixel high-resolution graphics screen.
    SCREEN 2

    DO

        ' Clear the screen.
        CLS

        ' Get the string containing the minutes value.
        Min$ = MID$(TIME$,4,2)

        ' Draw the clock face.
        Face Min$

        ' Wait until the minute changes or a key is pressed.
        DO

        ' Print the time at the top of the screen.
        LOCATE 2,37
        PRINT TIME$

        ' Test for a key press.
        Test$ = INKEY$
        LOOP WHILE Min$ = MID$(TIME$,4,2) AND Test$ = ""

    ' End the program when a key is pressed.
    LOOP WHILE Test$ = ""
    END
    ' Draw the clock face.
    SUB Face (Min$) STATIC
        LOCATE 23,30
        PRINT "Press any key to end"
        CIRCLE (320,100),175

        ' Convert strings to numbers.
        Hr = VAL(TIME$)
        Min = VAL(Min$)

        ' Convert numbers to angles.
        Little = 360 - (30 * Hr + Min/2)
        Big = 360 - (6*Min)

        ' Draw the hands.
        DRAW "TA=" + VARPTR$(Little) + "NU40"
        DRAW "TA=" + VARPTR$(Big) + "NU70"
    END SUB


────────────────────────────────────────────────────────────────────────────
END Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Ends a BASIC program, procedure, or block

■ Syntax

    END «{DEF | FUNCTION | IF | SELECT | SUB | TYPE}»

■ Remarks

    There are several ways to use the END statement, as described in the
    following list:

    Statement                Description
    ──────────────────────────────────────────────────────────────────────────
    END DEF                  Ends a multiline DEF FN function definition. You
                            must use END DEF with a multiline DEF FN.

    END FUNCTION             Ends a FUNCTION procedure definition. You must
                            use END FUNCTION with FUNCTION.

    END IF                   Ends a block IF...THEN...ELSE statement. You must
                            use END IF with block IF...THEN...ELSE.

    END SELECT               Ends a SELECT CASE block. You must use END SELECT
                            with a SELECT CASE statement.

    END SUB                  Ends a BASIC subprogram. You must use END SUB
                            with SUB.

    END TYPE                 Ends a user-defined type definition. You must use
                            END TYPE with TYPE.
    ──────────────────────────────────────────────────────────────────────────

    By itself, the END statement stops program execution and closes all files.
    In a stand-alone program, END returns control to the operating system.
    When running inside the QuickBASIC environment, END returns you to that
    environment.

    The compiler always assumes an END statement at the conclusion of any
    program, so omitting an END statement at the end of a program still
    produces proper program termination. You may place END statements anywhere
    in the program to end program execution.

■ See Also

    DEF FN; FUNCTION; IF...THEN...ELSE; SELECT CASE; SUB; TYPE

■ Example

    The following example uses a subprogram to query the user about continuing
    some action. If the user enters n or N the subprogram ends the program.

    DO
    .
    .
    .
    CALL ContinueQuery
    LOOP

    SUB ContinueQuery STATIC
        DO
        INPUT "Continue (Y or N)"; Response$
        R$=UCASE$(LEFT$(Response$,1))
        IF R$="N" THEN END
        IF R$="Y" THEN EXIT DO
        BEEP
        LOOP
    END SUB


────────────────────────────────────────────────────────────────────────────
ENVIRON$ Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Retrieves an environment string from the DOS environment-string table

■ Syntax

    ENVIRON$ (environmentstring)
    ENVIRON$ (n)

■ Remarks

    The environmentstring is a string constant or variable containing the name
    of an environment variable. The argument n is a numeric expression.

    If you specify an environmentstring name, but it cannot be found in the
    environment-string table, or there is no text following it, then ENVIRON$
    returns a null string. Otherwise, ENVIRON$ returns the text following the
    equal sign in the environment-string table.

    If you specify a numeric argument (n), the nth string in the
    environment-string table is returned. In this case, the string includes
    all of the text, including the environmentstring name. If the nth string
    does not exist, ENVIRON$ returns a null string. The n argument can be any
    numeric expression; it is rounded to an integer.

■ Example

    The following example prints the current environment-string table
    settings:

    I = 1
    DO WHILE ENVIRON$(I) <> ""
        PRINT ENVIRON$(I)
        I = I + 1
    LOOP

■ Output

    COMSPEC=C:\COMMAND.COM
    TMP=c:\tmp
    PATH=C:\TOOLS;C:\BIN
    PROMPT=¢ec4$l¢ec7$p¢ec4$g¢ec7¢eb1
    INIT=c:\tools
    LIB=c:\lib
    INCLUDE=c:\include


────────────────────────────────────────────────────────────────────────────
ENVIRON Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Modifies a parameter in the DOS environment-string table

■ Syntax

    ENVIRON stringexpression

■ Remarks

    The stringexpression must be of the form parameterid=text, or the form
    parameterid text. Everything to the left of the equal sign or space is
    assumed to be a parameter, and everything to the right, text.

    If the parameterid has not previously existed in the environment-string
    table, it is appended to the end of the table. If a parameterid exists in
    the table when the ENVIRON statement is executed, it is deleted and the
    new parameterid is appended to the end of the table.

    The text string is the new parameter text. If the text is a null string
    ("") or a semicolon (";"), then the existing parameter is removed from the
    environment-string table and the remaining body of the table is
    compressed.

    DOS discards the environment-string table modified by this function when
    your program ends. The environment-string table is the same as it was
    before your program ran.

    You may use this statement to change the PATH parameter for a "child"
    process (a program or command started by a SHELL statement) or to pass
    parameters to a child by inventing a new environment parameter.

    Errors in environment-string tables include parameters that are not
    strings and lack of free space. An Out of memory error message is printed
    when no more space can be allocated to the environment-string table. The
    amount of free space in the table is usually quite small.

■ See Also

    ENVIRON$, SHELL

■ Example

    The following example changes the value of the PATH environment variable
    to that shown:

    'Change value of PATH environment variable.
    ENVIRON "PATH=A:\SALES;A:\ACCOUNTING"


────────────────────────────────────────────────────────────────────────────
EOF Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Tests for the end-of-file condition

■ Syntax

    EOF(filenumber)

■ Remarks

    The EOF function returns -1 (true) if the end of a sequential file has
    been reached. Use the EOF function to test for end-of-file while inputting
    data. In this way you may avoid the Input past end error message.

    When EOF is used with random-access or binary files, it returns "true" if
    the last executed GET statement was unable to read an entire record. This
    happens because of an attempt to read beyond the end of the file.

    EOF cannot be used with the BASIC devices SCRN:, KYBD:, CONS:, and LPTn:.

    When you use EOF with a communications device, the definition of the
    end-of-file condition is dependent on the mode (ASCII or binary) in which
    you opened the device. In ASCII mode, EOF is false until you receive
    CTRL+Z, after which it remains true until you close the device. In binary
    mode, EOF is true when the input queue is empty (LOC(n)=0). It becomes
    "false" when the input queue is not empty.

■ Example

    The fragment below reads single-precision values from a file until all
    values have been read:

    DIM M(0 TO 2000)

    OPEN "DATA" FOR INPUT AS 1
    C = 0
    DO WHILE NOT EOF(1) AND C <= 2000
        INPUT #1, M(C)
        C = C+1
    LOOP
    .
    .
    .


────────────────────────────────────────────────────────────────────────────
ERASE Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Reinitializes the elements of static arrays; deallocates dynamic arrays

■ Syntax

    ERASE arrayname «,arrayname...»

■ Remarks

    The arrayname arguments are the names of arrays to erase. ERASE has
    different effects on static and dynamic arrays.

    The ERASE statement sets the elements of a static array to zeros in the
    case of a numeric array or null strings ("") in the case of a string
    array. If the array is an array of records, the ERASE statement sets all
    elements of each record to zeros, including fixed-string elements.

    However, using ERASE on a dynamic array frees the memory used by the
    array. Before your program can refer to the dynamic array again, it must
    first redimension the array with a DIM or REDIM statement. Redimensioning
    an array with a DIM statement without first erasing it produces a
    duplicate definition run-time error message that reads Array already
    dimensioned. The ERASE statement is not required when arrays are
    redimensioned with REDIM.

    See Chapter 2, "Data Types," in this manual and Appendix F,
    "Metacommands," in Programming in BASIC for more information on declaring
    dynamic and static arrays.

■ See Also

    DIM, REDIM

■ Example

    The following program fragment shows the use of ERASE with the ¢DYNAMIC
    and ¢STATIC metacommands:

    REM ¢DYNAMIC
    DIM A(100,100)
    .
    .
    .

    'This deallocates array A.
    ERASE A
    'Redimension array A.
    REDIM A(5,5)
    REM ¢STATIC
    DIM B(50,50)
    .
    .
    .
    'This sets all elements of B equal to zero.
    'B still has the dimensions assigned by DIM.
    ERASE B


────────────────────────────────────────────────────────────────────────────
ERDEV, ERDEV$ Functions
────────────────────────────────────────────────────────────────────────────

■ Action

    Provides device-specific status information after an error

■ Syntax

    ERDEV
    ERDEV$

■ Remarks

    ERDEV is an integer function that returns an error code from the last
    device to declare an error. ERDEV$ is a string function that returns the
    name of the device generating the error. Because ERDEV and ERDEV$ return
    meaningful information only after an error, they are usually used in error
    handlers specified by an ON ERROR statement.

    ERDEV and ERDEV$ cannot be used on the left side of an assignment.

    ERDEV is set by the critical error handler (interrupt 24H) when DOS
    detects an error that prevents continuing.

    The value of ERDEV is a bit-encoded value containing the DOS error
    information. The lower eight bits (first byte) contain the DOS error code,
    a value from 0 to 12. The upper eight bits (second byte) contain bits 15,
    14, 13, XX, 3, 2, 1, and 0, in that order, of the device-attribute word.
    XX indicates the bit is always zero. See the Microsoft MS-DOS Programmer's
    Reference for more information about device-attribute words.

■ See Also

    ERR, ERL; ON ERROR

■ Example

    The following example prints the values of ERDEV and ERDEV$ when an error
    occurs:

    DEFINT A-Z

    ' Indicate first line of error handler.
    ON ERROR GO TO ErrorHandler

    ' Attempt to open the file.
    OPEN "A:JUNK.DAT" FOR INPUT AS #1

    END

    ' Error handling routine.
    ' Prints values of ERDEV and ERDEV$ and dies.

    ErrorHandler:
        PRINT "ERDEV value is ";ERDEV
        PRINT "Device name is ";ERDEV$
        ON ERROR GOTO 0

■ Output

    Running the program with drive A unlatched produces the following output
    (2 is the error code for "Drive not ready"):

    ERDEV value is  2
    Device name is A:


────────────────────────────────────────────────────────────────────────────
ERR, ERL Functions
────────────────────────────────────────────────────────────────────────────

■ Action

    Return error status

■ Syntax

    ERR
    ERL

■ Remarks

    After an error, the function ERR returns the code for the error, and the
    ERL function returns the line number where the error occurred. Because ERR
    and ERL return meaningful values only after an error, they are usually
    used in error-handling routines to determine the error and the corrective
    action.

    Because ERL and ERR are functions, you cannot use them on the left-hand
    side of an assignment statement. However, you may indirectly set them with
    the ERROR statement.

■ Differences From Basica

    The ERL function returns only the line number, not line label, located
    before the line producing the error. If your program has no line numbers,
    ERL always returns 0.

■ See Also

    ERDEV, ERROR, ON ERROR, RESUME

■ Example

    See the example for ON ERROR.


────────────────────────────────────────────────────────────────────────────
ERROR Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Simulates the occurrence of a BASIC error or allows the user to define
    error codes

■ Syntax

    ERROR integerexpression

■ Remarks

    The integerexpression represents the error code. It must be greater than 0
    and less than or equal to 255. If the integerexpression is an error code
    already used by BASIC, then the ERROR statement simulates the occurrence
    of that error and prints the corresponding error message.

    To define your own error code, use a value that is greater than any used
    by the standard BASIC error codes. (Start at 255 and work down to maintain
    compatibility with future Microsoft BASIC error codes.)

    If an ERROR statement specifies a code for which no error message has been
    defined, the message Unprintable error is printed. Executing an ERROR
    statement for which there is no error-handling routine causes an error
    message to be printed and execution to halt.

■ See Also

    ERR, ERL; ON ERROR; RESUME

■ Example

    The following fragment uses an ERROR statement to trap a user input error:

    ON ERROR GOTO Handler
    OpenFile:
        INPUT "Name of file to update";FileSpec$
        IF FileSpec$ = "" THEN END
        OPEN FileSpec$ FOR INPUT AS #1
        PRINT "The first five lines of ";FILESPEC$;" are:" : PRINT
        FOR I = 1 TO 5
            LINE INPUT #1, Temp$
            PRINT Temp$
        NEXT
        PRINT : INPUT "Is this the correct file";R$
        'Define error 200.
        IF LEFT$(R$,1) <> "y" THEN ERROR 200
        .
        .
        .
        END

    Handler:        'Error-handling routine.
        Number = ERR
        'Run-time error for "file not found."
        IF Number = 53 THEN
            CLOSE #1
            PRINT "File not in this directory"
            PRINT "Enter new file spec ([d:]xxx...xxx) or"
            PRINT "press <RETURN> to end program"
            RESUME OpenFile
        ELSEIF Number = 200 THEN
    'User entered "n"
            CLOSE #1
            RESUME OpenFile
        ELSE
            ERROR Number       'Error other than 53 or 200.
            ON ERROR GOTO 0    'Print message, disable error
        END IF                 'handling, and stop program.

■ Output

    Name of file to update? c:novelallenadv.txt
    File not in this directory
    Enter new file spec ([d:]xxx...xxx) or
    press <RETURN> to end program
    Name of file to update? c:toryallenadv.txt
    The first five lines of c:toryallenadv.txt are:

    Allen gripped the microphone. Small beads
    of perspiration glistened on his forehead
    like cheap pearls. He knew that what he
    said would change his life and the lives
    of those he loved. In a trembling voice,

    Is this the correct file? y


────────────────────────────────────────────────────────────────────────────
EXIT Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Exits a DEF FN function, DO...LOOP or FOR...NEXT loop, FUNCTION, or SUB

■ Syntax

    EXIT {DEF | DO | FOR | FUNCTION | SUB }

■ Remarks

    There are several ways to use the EXIT statement as described in the
    following list:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Statement                Description
    ──────────────────────────────────────────────────────────────────────────
    EXIT DEF                 Causes an immediate exit from the executing DEF
                            FN function. Program execution continues where
                            the DEF FN function was invoked.

    EXIT DO                  Provides an alternative exit from a DO...LOOP.
                            Can be used only inside a DO...LOOP statement;
                            EXIT DO transfers control to the statement
                            following the LOOP statement. When used within
                            nested DO...LOOP statements, transfers out of the
                            immediately enclosing loop.

    Statement                Description
    ──────────────────────────────────────────────────────────────────────────

    EXIT FOR                 Provides another way to exit a FOR...NEXT loop.
                            May appear only in a FOR...NEXT loop; transfers
                            control to the statement following the NEXT
                            statement. When used within nested FOR...NEXT
                            loops, transfers out of the immediately enclosing
                            loop.

    EXIT FUNCTION            Causes an immediate exit from a FUNCTION
                            procedure. Program execution continues where the
                            FUNCTION was invoked. Can only be used in a
                            FUNCTION procedure.

    EXIT SUB                 Immediately exits a SUB procedure. Program
                            execution continues with the statement after the
                            CALL statement. Can only be used in a SUB
                            procedure.
    ──────────────────────────────────────────────────────────────────────────

    Statement                Description
    ──────────────────────────────────────────────────────────────────────────


    None of the EXIT statements define the end of the structure in which they
    are used. EXIT statements only provide an alternative exit from the
    structure.

■ See Also

    DEF FN; DO...LOOP; FOR...NEXT; FUNCTION; SUB

■ Examples

    See the third example for STATIC for a use of EXIT SUB.

    The following subprogram is an extended RTRIM$ that removes trailing
    blanks, tabs, carriage returns, and line feeds from a string. The
    subprogram begins looking at the end of the string and uses EXIT FOR to
    jump out of the loop when the first printing character is found.

    ' Rtrim removes trailing blanks, tabs, carriage returns,
    ' and line feeds from a string.
    SUB Rtrim(S$) STATIC

    J=0

    ' Begin at the end of the string and find the first
    ' character that isn't a blank, tab, carriage return, or
    ' line feed.
    FOR I=LEN(S$) TO 1 STEP -1
        C$=MID$(S$,I,1)
        IF C$<>" " AND C$<>CHR$(9) AND C$<>CHR$(10) AND C$<>CHR$(13) THEN
        J=I
        EXIT FOR
        END IF
    NEXT I

    ' Remove the unwanted trailing characters.
    S$=LEFT$(S$,J)

    END SUB


────────────────────────────────────────────────────────────────────────────
EXP Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Calculates the exponential function

■ Syntax

    EXP(x)

■ Remarks

    The EXP function returns e (the base of natural logarithms) to the power
    of x. The exponent x must be less than or equal to 88.02969. A value of x
    greater than 88.02969 produces an Overflow error message.

    The calculation of EXP is performed in single precision by default; if the
    argument x is double precision, EXP is calculated in double precision.

■ See Also

    LOG

■ Example

    The following program uses the EXP function to calculate the growth of a
    bacterial colony over a 15-day period. Since the growth of the population
    is related to its ever-changing size, its growth is exponential.

    INPUT "Initial bacterial population"; Colony0
    INPUT "Growth rate per day as a percentage of population"; Rate
    R = Rate/100 : Form$="##          ###,###"
    PRINT : PRINT "Day        Population"
    FOR T = 0 TO 15 STEP 5
        PRINT USING Form$; T, Colony0 * EXP(R*T)
    NEXT

■ Output

    Initial bacterial population? 10000
    Growth rate per day as a percentage of population? 10

    Day        Population
    0           10,000
    5           16,487
    10           27,183
    15           44,817


────────────────────────────────────────────────────────────────────────────
FIELD Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Allocates space for variables in a random-access file buffer

■ Syntax

    FIELD «#»filenumber, fieldwidth AS stringvariable...

■ Remarks

    The following list describes the FIELD statement's arguments:

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    filenumber               The number used in the file's OPEN statement

    fieldwidth               The width of the field in the record

    stringvariable           The string variable that contains the date read
                            from a record or data that is used in an
                            assignment when information is written to a
                            record
    ──────────────────────────────────────────────────────────────────────────

    The total number of bytes that you allocate in a FIELD statement must not
    exceed the record length that you had specified when opening the file.
    Otherwise, an error message is generated that reads FIELD overflow. (The
    default record length is 128 bytes.)

    Any number of FIELD statements may be executed for the same file. All
    FIELD statements that have been executed remain in effect at the same
    time.

    All field definitions for a file are removed when the file is closed; that
    is, all strings defined as fields associated with the file are set to
    null.

    Do not use a variable name defined as a field in an INPUT or assignment
    statement if you wish the variable to remain a field. Once a variable name
    is a field, it points to the correct place in the random-access file
    buffer. If a subsequent INPUT or assignment statement with that variable
    name is executed, the variable's pointer no longer refers to the
    random-access record buffer, but to string space.

────────────────────────────────────────────────────────────────────────────
NOTE
    BASIC's record variables and extended OPEN statement syntax provide a more
    convenient way to use random-access files. See Chapter 3, "File and Device
    I/O," in Programming in BASIC for an extended discussion of using record
    variables for file I/O.
────────────────────────────────────────────────────────────────────────────

■ Differences From Basica

    When a random-access file is closed with a CLOSE or RESET statement in a
    compiled program, all variables that are fields associated with that file
    are reset to null strings. When a random-access file is closed in a BASICA
    program, variables that are fields retain the last value assigned to them
    by a GET statement.

■ See Also

    GET, LSET, OPEN, PUT, RSET

■ Example

    This example illustrates a random-access file buffer with multiple
    definitions. In the first FIELD statement, the 67-byte buffer is broken up
    into five separate variables for name, address, city, state, and zip code.
    In the second FIELD statement, the same buffer is assigned entirely to one
    variable, PLIST$. The remainder of this example checks to see if ZIP$,
    which contains the zip code, falls within a certain range; if it does, the
    complete address string is printed.

    ' Define field and record lengths with constants.
    CONST LNAML=25, ADDRL=25, CTYL=10, STL=2, ZIPL=5
    CONST RECLEN=LNAML+ADDRL+CTYL+STL+ZIPL

    OPEN "MAILLIST" FOR RANDOM AS #1 LEN=RECLEN

    FIELD #1, LNAML AS Lnam$, ADDRL AS Addr$, CTYL AS Cty$, STL AS St$,
    ZIPL AS Zip$
    FIELD #1, RECLEN AS Plist$

    GET #1, 1
    ' Read the file, looking for zip codes in the range 85699 to
    ' 85801.
    DO WHILE NOT EOF(1)
        Zcheck$ = Zip$
        IF (Zcheck$ >= "85699" AND Zcheck$ <= "85801") THEN
        Info$ = Plist$
        PRINT LEFT$(Info$,25)
        PRINT MID$(Info$,26,25)
        PRINT RIGHT$(Info$,17)
        END IF
        GET #1
    LOOP


────────────────────────────────────────────────────────────────────────────
FILEATTR Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns information about an open file

■ Syntax

    FILEATTR(filenumber,attribute)

■ Remarks

    The FILEATTR function takes the following arguments:

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    filenumber               The number of an open file. This is the same
                            number used in the OPEN statement. You can use a
                            numeric expression as long as it evaluates to the
                            number of an open file.

    attribute                Indicates the type of information to return. When
                            attribute is 1, FILEATTR returns a code
                            indicating a file's mode (see below). When
                            attribute is 2, FILEATTR returns the file's DOS
                            file handle.
    ──────────────────────────────────────────────────────────────────────────

    Table R.2 lists the return values and corresponding file modes when
    attribute is 1.

    Table R.2   FILEATTR Mode Codes

    Return Value             Mode
    ──────────────────────────────────────────────────────────────────────────
    1                        INPUT

    2                        OUTPUT

    4                        RANDOM

    8                        APPEND

    32                       BINARY
    ──────────────────────────────────────────────────────────────────────────

■ See Also

    OPEN

■ Example

    The following example opens two files and prints out the DOS file handles
    and modes returned by FILEATTR:


    OPEN "tempfile.dat" FOR APPEND AS #1
    OPEN "tempfl2.dat" FOR RANDOM AS #2

    PRINT "Number Handle Mode"
    PRINT TAB(2);1;TAB(10);FILEATTR(1,2);TAB(15);FILEATTR(1,1)
    PRINT TAB(2);2;TAB(10);FILEATTR(2,2);TAB(15);FILEATTR(2,1)
    END

■ Output

    Number Handle Mode
    1       5    8
    2       6    4


────────────────────────────────────────────────────────────────────────────
FILES Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Prints the names of files residing on the specified disk

■ Syntax

    FILES «filespec»

■ Remarks

    The filespec is a string variable or constant that includes either a file
    name or a path name, and an optional device designation.

    If you omit filespec, the FILES statement lists all the files in the
    current directory. You may use the DOS wild card characters──question
    marks (?) or asterisks (*). A question mark matches any single character
    in the file name or extension. An asterisk matches one or more characters
    starting at that position.

    If you use a filespec without an explicit path, the current directory is
    the default.

    Note that, regardless of the path name contained in filespec, the header
    printed by FILES is always the current directory.

■ Examples

    The following statements illustrate the use of FILES:

    FILES              'Shows all files on the current directory.

    FILES "*.BAS"      'Shows all files with the extension .BAS.

    FILES "B:*.*"      'Shows all files on drive B.

    FILES "B:"         'Equivalent to "B:*.*".

    FILES "TEST?.BAS"  'Shows all five-letter files whose names
                        'start with "TEST" and end with the .BAS
                        'extension.

    FILES "\SALES"     'If SALES is a directory, this statement
                        'displays all files in SALES; if SALES is
                        'a file in the current directory, this
                        'statement displays the name SALES.


────────────────────────────────────────────────────────────────────────────
FIX Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the truncated integer part of x

■ Syntax

    FIX(x)

■ Remarks

    The x is a numeric expression. FIX(x) is equivalent to SGN(x)*INT(ABS(x)).
    The difference between FIX and INT is that for negative x, FIX returns the
    first negative integer greater than x, while INT returns the first
    negative integer less than x.

■ See Also

    CINT, INT

■ Example

    The following four statements illustrate the differences between INT and
    FIX:


    PRINT INT(-99.8)
    PRINT FIX(-99.8)
    PRINT INT(-99.2)
    PRINT FIX(-99.2)

■ Output

    -100
    -99
    -100
    -99


────────────────────────────────────────────────────────────────────────────
FOR...NEXT Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Repeats a group of instructions a specified number of times

■ Syntax

    FOR counter = start TO end «STEP increment»
    .
    .
    .
    NEXT «counter «,counter...»»

■ Remarks

    The FOR statement takes the following arguments:

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    counter                  A numeric variable used as the loop counter. The
                            variable cannot be an array element or a record
                            element.

    start                    The initial value of the counter.

    end                      The final value of the counter.

    increment                The amount the counter is incremented each time
                            through the loop. If you do not specify STEP,
                            increment defaults to one.
    ──────────────────────────────────────────────────────────────────────────

    A FOR...NEXT loop executes only if start and end are consistent with
    increment. If end is greater than start, increment must be positive. If
    end is less than start, increment must be negative. This is checked at
    run-time by comparing the sign of (end - start) with the sign of step. If
    both have the same sign, the FOR...NEXT loop is entered. If not, the
    entire loop is skipped over.

    Within the FOR...NEXT loop, the program lines following the FOR statement
    are executed until the NEXT statement is encountered. Then counter is
    changed by the amount specified by STEP, and compared with the final
    value, end.

    If counter is less than or equal to end, control returns to the statement
    after the FOR statement and the process repeats. If counter is greater
    than end, the loop is exited; execution continues with the statement
    following the NEXT statement. (If STEP is negative, the loop repeats until
    counter is less than end.)

    If start and end have the same value, the loop executes once, regardless
    of the value of STEP. If STEP is zero, the loop repeats indefinitely.

    Avoid changing the value of counter within the loop. Changing the loop
    counter is poor programming practice; it makes the program more difficult
    to read and debug.

    You can nest FOR...NEXT loops; that is, you can place a FOR...NEXT loop
    within another FOR...NEXT loop. To ensure that nested loops work properly,
    give each loop a unique variable name as its counter. The NEXT statement
    for the inside loop must appear before the NEXT statement for the outside
    loop. The following construction is correct:

    FOR I = 1 TO 10
        FOR J = 1 TO 10
        FOR K = 1 TO 10
        .
        .
        .
        NEXT K
        NEXT J
    NEXT I

    A NEXT statement with the form

    NEXT K, J, I

    is equivalent to the following sequence of statements:

    NEXT K
    NEXT J
    NEXT I

    The EXIT FOR statement is a convenient alternative exit from FOR...NEXT
    loops. See the EXIT FOR statement.

────────────────────────────────────────────────────────────────────────────
NOTE
    If you omit the variable in a NEXT statement, the NEXT statement matches
    the most recent FOR statement. If a NEXT statement is encountered before
    its corresponding FOR statement, an error message is generated that reads
    NEXT without FOR.
────────────────────────────────────────────────────────────────────────────

■ Differences From Basica

    Unlike BASICA, QuickBASIC supports double-precision control values (start,
    end, and counter) in its FOR...NEXT loops. However, if the control values
    fall within the range for integers, you should use integer control values
    for maximum speed.

■ Example

    The following example prints the first 11 columns of Pascal's triangle:


    'Print the first MAXCOL columns of Pascal's Triangle, in which
    'each number is the sum of the number immediately above it
    'and the number immediately below it in the preceding column.

    CONST MAXCOL=11
    DIM A(MAXCOL,MAXCOL)
    FOR M = 1 TO MAXCOL
        A(M,1) = 1 : A(M,M) = 1 'Top and bottom of each column is 1.
    NEXT

    FOR M = 3 TO MAXCOL
        FOR N = 2 TO M-1
        A(M,N) = A(M-1,N-1) + A(M-1,N)
        NEXT
    NEXT
    Startrow = 13                'Go to the middle of the screen.
    FOR M = 1 TO MAXCOL
        Col = 6 * M
        Row = Startrow
        FOR N = 1 TO M
        LOCATE Row,Col : PRINT A(M,N)
        Row = Row + 2        'Go down 2 rows to print next number.
        NEXT
        PRINT
        Startrow = Startrow - 1  'Next column starts 1 row above
    NEXT                        'preceding column.

■ Output


                                                    1
                                                1
                                            1         10
                                        1         9
                                1         8         45
                            1         7         36
                        1         6         28        120
                    1         5         21        84
            1         4         15        56        210
        1         3         10        35        126
    1         2         6         20        70        252
        1         3         10        35        126
            1         4         15        56        210
                    1         5         21        84
                        1         6         28        120
                            1         7         36
                                1         8         45
                                        1         9
                                            1         10
                                                1
                                                    1


────────────────────────────────────────────────────────────────────────────
FRE Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the amount of available memory

■ Syntax 1

    FRE(numeric-expression)

■ Syntax 2

    FRE(stringexpression)

■ Remarks

    The FRE function returns the following values when it has a numeric
    argument (numeric-expression):

    Argument                 Value Returned
    ──────────────────────────────────────────────────────────────────────────
    -1                       The size, in bytes, of the largest nonstring
                            array that could be dimensioned

    -2                       The amount, in bytes, of unused stack space
                            available to the program

    Any other numeric value  The size of the next free block of string storage
    ──────────────────────────────────────────────────────────────────────────

    When the argument is a string expression (stringexpression), FRE returns
    the size, in bytes, of the free string storage. Before FRE returns the
    number of free bytes, it compacts the free string storage into a single
    block.

────────────────────────────────────────────────────────────────────────────
NOTE
    FRE(-2) returns meaningful values only when a program is executing. Values
    returned by FRE(-2) are not accurate when the function is called from the
    Immediate window, during program tracing, or when watching a variable.
────────────────────────────────────────────────────────────────────────────

■ Example

    The following example shows some of the values FRE returns before and
    after dimensioning an array:

    ' ¢DYNAMIC
    PRINT "Before dimensioning arrays:  " FRE(""),FRE(0),FRE(-1)
    DIM LARGE%(150,150), BIG$(5000)
    PRINT "After dimensioning arrays:   " FRE(""),FRE(0),FRE(-1)

■ Output

    The actual values FRE will return on your own computer may be different.

    Before dimensioning arrays:   58420       58420       322120
    After dimensioning arrays:    38404       38404       276496


────────────────────────────────────────────────────────────────────────────
FREEFILE Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the next free BASIC file number

■ Syntax

    FREEFILE

■ Remarks

    The FREEFILE function returns the next valid unused file number.

    You can use this function to avoid having SUB or FUNCTION procedures use
    file numbers that are already in use.

■ Example

    The example below uses FREEFILE to obtain a file number for opening a
    file:

    INPUT "Enter file name ", Filename$
    Filenum = FREEFILE
    OPEN Filename$ for Input as Filenum
    PRINT Filename$;" Opened as File # "; Filenum

■ Output

    Enter file name: Data.dat

    Data.dat Opened as File # 1


────────────────────────────────────────────────────────────────────────────
FUNCTION Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Declares the name, the parameters, and the code that form the body of a
    FUNCTION procedure

■ Syntax

    FUNCTION name «(parameterlist)»«STATIC»
    .
    .
    .
    name = expression
    .
    .
    .
    END FUNCTION

■ Remarks

    The following list describes the parts of the FUNCTION statement:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Part                     Description
    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
    name                     The name of the function. FUNCTION names follow
                            the same rules as BASIC variable names and can
                            include a type-declaration character (%, &, !, #,
                            or $). Note that the type of the name determines
                            the type of value the function returns. For
                            example, to create a function that returns a
                            string, you would include a dollar sign in the
                            name or give it a name defined as a string name
                            by a DEFSTR statement.

    parameterlist            The list of variables, separated by commas,
                            passed to the FUNCTION. The parameters are passed
                            by reference, so any change to a parameter's
                            value inside the function changes its value in
                            the calling program.

    STATIC                   Indicates that the function's local variables are
                            to be saved between calls. Without STATIC, the
                            local variables are allocated each time the
    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
                            local variables are allocated each time the
                            function is invoked, and the variables' values
                            are lost when the function returns to the calling
                            program. The STATIC attribute does not affect
                            variables that are used in a FUNCTION but
                            declared outside the FUNCTION in DIM or COMMON
                            statements by use of the SHARED attribute.

    expression               The return value of the function. A FUNCTION
                            returns a value by assigning a value to the
                            function name. If no value is assigned to the
                            FUNCTION name, the FUNCTION returns a default
                            value: a numeric function returns a value of
                            zero, and a string function returns the null
                            string ("").
    ──────────────────────────────────────────────────────────────────────────


    A parameterlist has the following syntax:
    variable«( )»« AS type»«, variable«( )»« AS type»...»

    A variable is any valid BASIC variable. The optional type can be either
    INTEGER, LONG, SINGLE, DOUBLE, STRING, or a user-defined type.

    Earlier versions of BASIC required the number of dimensions in parentheses
    after an array name. The number of dimensions is no longer required. Only
    the parentheses are required to indicate the parameter is an array. For
    example, the following statement indicates that both Keywords$ and
    KeywordTypes are arrays:

    FUNCTION ParseLine(Keywords$(),KeywordTypes())

    A FUNCTION procedure is like a SUB procedure: it can accept parameters,
    perform a series of statements, and change the values of its parameters.
    Unlike a SUB, a FUNCTION is used in an expression in the same manner as a
    BASIC intrinsic function.

    Like SUB procedures, FUNCTION procedures use local variables. Any variable
    not in the parameter list is local to the FUNCTION unless it is declared
    as a shared variable in a SHARED statement, or unless the variable appears
    in a DIM or COMMON statement with the SHARED attribute.

    To return a value from a function, assign the value to the function name.
    For example, in a function named BinarySearch, you might assign the value
    of the constant FALSE to the name to indicate the value was not found:

    FUNCTION BinarySearch(...)
    CONST FALSE=0
    .
    .
    .

    ' Value not found. Return a value of FALSE.

        IF Lower>Upper THEN
        BinarySearch=FALSE
        EXIT FUNCTION
        END IF
    .
    .
    .
    END FUNCTION

    Using the STATIC keyword slightly increases execution speed. STATIC is not
    usually used with recursive FUNCTION procedures. See the examples below.

    The EXIT FUNCTION statement provides an alternative exit from a FUNCTION.
    See the EXIT statement.

    Because BASIC may rearrange arithmetic expressions to attain greater
    efficiency, avoid using FUNCTION procedures that change program variables
    in arithmetic expressions. Also avoid using FUNCTION procedures that
    perform I/O in I/O statements.

    QuickBASIC FUNCTION procedures are recursive──they can call themselves to
    perform a given task. See the second example below and Chapter 4,
    "Programs and Modules."

■ See Also

    DECLARE (BASIC), DEF FN, EXIT, STATIC, SUB

■ Examples

    The following example uses a function to count the number of vowels in a
    string:

    ' Function definition.
    FUNCTION NumVowels (A$) STATIC
        Num = 0
        ' Go through A$ a character at a time.
        FOR I = 1 TO LEN (A$)
        C$ = UCASE$ (MID$(A$,I,1))
        IF INSTR ("AEIOU",C$)<> 0 THEN
            ' Find a vowel--count it.
            Num = Num + 1
        END IF
        NEXT I
        NumVowels = Num
    END FUNCTION

    A$ = "The ultimate answer to the ultimate question is 42"
    PRINT CHR$(34)+A$+CHR$(34)
    PRINT "The number of vowels in the string is :";NumVowels (A$)

■ Output

    "The ultimate answer to the ultimate question is 42"
    The number of vowels in the string is : 18

    The following example uses a recursive function (a function that calls
    itself) to find the length of a string. Notice that the STATIC keyword is
    not used.

    FUNCTION StrLen(X$)
        IF X$ = "" THEN
        ' The length of a null string is zero.
        StrLen=0
        ELSE
        ' Non-null string--make a recursive call.
        ' The length of a non-null string is 1
        ' plus the length of the rest of the string.
        StrLen=1+StrLen(MID$(X$,2))
        END IF
    END FUNCTION

    LINE INPUT "Enter a string: ",InString$
    PRINT "The string length is"; StrLen(InString$)

■ Output

    Enter a string: Once upon a time
    The string length is 16


────────────────────────────────────────────────────────────────────────────
GET Statement──Graphics
────────────────────────────────────────────────────────────────────────────

■ Action

    Stores graphic images from the screen

■ Syntax

    GET «STEP»(x1,y1) - «STEP»(x2,y2),arrayname«(indices)»

■ Remarks

    The list below describes the parts of the GET statement:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
    x1,y1,x2,y2              Coordinates marking a rectangular area on the
                            screen. The placeholders x1, y1, x2, and y2 are
                            numeric expressions that are the coordinates of
                            diagonally opposite corners of the rectangle.

    STEP                     Keyword indicating that coordinates are relative
                            to the most recently plotted point. For example,
                            if the last point plotted were (10,10), then the
                            actual coordinates referred to by STEP (5,10)
                            would be (5+10,10+10) or (15,20). If the second
                            coordinate pair in a GET statement has a STEP
                            argument, it is relative to the first coordinate
    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
                            argument, it is relative to the first coordinate
                            pair in the statement.

    arrayname                Name assigned to the array that holds the image.
                            This array can be of any numeric type; its
                            dimensions must be large enough to hold the
                            entire image.

    indices                  Numeric constants or variables indicating the
                            element of the array where the saved image
                            starts.
    ──────────────────────────────────────────────────────────────────────────


    The GET statement transfers a screen image into the array specified by
    arrayname. The PUT statement, associated with GET, transfers the image
    stored in the array onto the screen.

    The following formula gives the required size of the array in bytes:

    4 + INT(((x2 - x1 + 1) * (bits-per-pixel-per-plane) + 7)/8) * planes *
    ((y2 - y1) + 1)

    The bits-per-pixel-per-plane and planes values depend on the specification
    set in the SCREEN statement. Table R.3 shows the number of bits per pixel
    per plane and the number of planes for each screen mode.

    Table R.3   Values for Bits per Pixel per Plane and for Planes

╓┌─┌────────────────────────┌───────────────────────┌────────────────────────╖
                            Bits per Pixel
    Screen Mode              per Plane               Planes
    ──────────────────────────────────────────────────────────────────────────
    1                        2                       1

    2                        1                       1

    7                        1                       4

    8                        1                       4
                            Bits per Pixel
    Screen Mode              per Plane               Planes
    ──────────────────────────────────────────────────────────────────────────
    8                        1                       4

    9                        1                       2 (if 64K of EGA memory)

                                                    4 (if > 64K EGA memory)

    10                       1                       2

    11                       1                       1

    12                       1                       4

    13                       8                       1
    ──────────────────────────────────────────────────────────────────────────


    The bytes per element of an array are as follows:

    ■ Two bytes for an integer array element

    ■ Four bytes for a long-integer array element

    ■ Four bytes for a single-precision array element

    ■ Eight bytes for a double-precision array element

    For example, suppose you wanted to use the GET statement to store an image
    in high resolution (SCREEN 2). If the coordinates of the upper-left corner
    of the image are (0,0), and the coordinates of the lower- right corner are
    (32,32), then the required size of the array in bytes is 4 + INT((33 * 1 +
    7)/8) * 1 * (33), or 169. This means an integer array with 85 elements
    would be large enough to hold the image.

    Unless the array type is integer or long, the contents of an array after a
    GET appear meaningless when inspected directly. Examining or manipulating
    noninteger arrays containing graphics images may cause run-time errors.

    One of the most useful things that can be done with GET and PUT is
    animation. See Chapter 5, "Graphics," in Programming in BASIC for a
    discussion of animation.

■ See Also

    PUT (Graphics)

■ Example

    See the example for BSAVE.


────────────────────────────────────────────────────────────────────────────
GET Statement──File I/O
────────────────────────────────────────────────────────────────────────────

■ Action

    Reads from a disk file into a random-access buffer or variable

■ Syntax

    GET «#»filenumber«,«recordnumber»«,variable»»

■ Remarks

    The following list describes the GET statement's arguments:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    filenumber               The number used in the OPEN statement to open the
                            file.

    recordnumber             For random-access files, the number of the record
                            to be read. For binary-mode files, the byte
                            position in the file where reading starts. The
                            first record or byte position in a file is 1. If
                            you omit recordnumber, the next record or byte
                            (the one after the last GET or PUT, or the one
                            pointed to by the last SEEK) is read into the
                            buffer. The largest possible record number is
                            2^31-1, or 2,147,483,647.
    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
                            2^31-1, or 2,147,483,647.

    variable                 The variable used to receive input from the file.
                            If you use a variable, you do not need to use
                            CVD, CVL, CVI, or CVS to convert record fields to
                            numbers. You may not use a FIELD statement with
                            the file if you use the variable argument.

                            For random-access files, you can use any variable
                            as long as the length of the variable is less
                            than or equal to the length of the record.
                            Usually, a record variable defined to match the
                            fields in a data record is used. For binary-mode
                            files, you can use any variable. The GET
                            statement reads as many bytes as there are in the
                            variable.

                            When you use a variable-length string variable,
                            the statement reads as many bytes as there are
    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
                            the statement reads as many bytes as there are
                            characters in the string's value. For example,
                            the following two statements read 10 bytes from
                            file number 1:

                            VarStrings$=STRING$ (10, " ")

                            GET #1,,VarString$

                            See the examples and Chapter 3, "File and Device
                            I/O," in Programming in BASIC for more
                            information about using variables rather than
                            FIELD statements for random-access files. A
                            record cannot be longer than 32,767 bytes.
    ──────────────────────────────────────────────────────────────────────────


    You may omit the recordnumber, the variable, or both. If you omit the
    recordnumber but include the variable, you must still include the commas:

    GET #4,,FileBuffer

    If you omit both arguments, you do not include the commas:

    GET #4

    The GET and PUT statements allow fixed-length input and output for BASIC
    communications files. Use GET carefully because if there is a
    communications failure, GET waits indefinitely for recordnumber
    characters.

────────────────────────────────────────────────────────────────────────────
NOTE
    When you use GET with the FIELD statement, you can use either INPUT # or
    LINE INPUT # after a GET statement to read characters from the
    random-access file buffer. You may use the EOF function after GET to see
    if the GET went beyond the end of the file.
────────────────────────────────────────────────────────────────────────────

■ See Also

    CVI, CVS, CVL, CVD; FIELD; INPUT #;
    LINE INPUT #; LSET; MKD$, MKI$, MKL$, MKS$;
    PUT (File I/O); RSET; TYPE

■ Example

    The following program opens the file TESTDAT.DAT for random access and
    displays the contents on the screen:

    '  Read and display the contents of a file containing a
    '  name of up to 20 characters and a test score.

    '  Define record fields.
    TYPE TestRecord
        NameField  AS STRING*20
        ScoreField AS SINGLE
    END TYPE

    '  Open the test data file.
    DIM FileBuffer AS TestRecord
    OPEN "TESTDAT.DAT" FOR RANDOM AS #1 LEN=LEN(FileBuffer)

    '  Calculate number of records in the file.
    Max=LOF(1)/LEN(FileBuffer)

    '  Read and print contents of each record.
    FOR I=1 TO Max
        GET #1,I,FileBuffer
        PRINT FileBuffer.NameField,FileBuffer.ScoreField
    NEXT I

    CLOSE #1


────────────────────────────────────────────────────────────────────────────
GOSUB...RETURN Statements
────────────────────────────────────────────────────────────────────────────

■ Action

    Branches to, and returns from, a subroutine

■ Syntax

    GOSUB {linelabel1 | linenumber1 }
    .
    .
    .
    RETURN «linelabel2 | linenumber2 »

■ Remarks

    The GOSUB...RETURN statements take the following arguments:

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    linelabel1, linenumber1  The line number or line label that is the first
                            line of the subroutine.

    linelabel2, linenumber2  The line label or line number where the
                            subroutine returns.
    ──────────────────────────────────────────────────────────────────────────

────────────────────────────────────────────────────────────────────────────
NOTE
    BASIC's SUB and FUNCTION procedures provide a more well-structured
    alternative to GOSUB... RETURN subroutines.
────────────────────────────────────────────────────────────────────────────

    In addition to RETURN with no argument, BASIC supports RETURN with a line
    label or line number allowing a return from a subroutine to the statement
    having the specified line number or label, instead of returning to the
    statement after the GOSUB statement. Use this line-specific type of return
    with care.

    You may call a subroutine any number of times in a program. You may also
    call a subroutine from within another subroutine. How deeply you can nest
    subroutines is limited only by the available stack space (you may increase
    the stack space with the CLEAR statement). Subroutines that call
    themselves (recursive subroutines) can easily run out of stack space.
    RETURN with a line label or line number can only return control to a
    statement in the module-level code, not procedure-level code. See the
    example program.

    A subroutine may contain more than one RETURN statement. Simple RETURN
    statements (without the linelabel2, linenumber2 option) in a subroutine
    make BASIC branch back to the statement following the most recent GOSUB
    statement.

    Subroutines may appear anywhere in the program, but it is good programming
    practice to make them readily distinguishable from the main program. To
    prevent inadvertent entry into a subroutine, precede it with a STOP, END,
    or GOTO statement that directs program control around the subroutine.

────────────────────────────────────────────────────────────────────────────
IMPORTANT
    The preceding discussion of subroutines applies only to the targets of
    GOSUB statements, not subprograms delimited by SUB statements. Entering
    and exiting SUB blocks with GOSUB...RETURN statements is not supported.
────────────────────────────────────────────────────────────────────────────

■ See Also

    RETURN, SUB

■ Example

    The following example shows the use of RETURN linelabel statements in
    module-level code:

    PRINT "in module-level code"
    GOSUB Sub1
    PRINT "this line in main routine should be skipped"
    Label1:
        PRINT "back in module-level code"
        END

    Sub1:
        PRINT "in subroutine one"
        GOSUB Sub2
        PRINT "this line in subroutine one should be skipped"
    Label2:
        PRINT "back in subroutine one"
        RETURN Label1

    Sub2:
        PRINT "in subroutine two"
        RETURN Label2

■ Output

    in module-level code
    in subroutine one
    in subroutine two
    back in subroutine one
    back in module-level code


────────────────────────────────────────────────────────────────────────────
GOTO Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Branches unconditionally to the specified line

■ Syntax

    GOTO {linelabel | linenumber}

■ Remarks

    The GOTO statement provides a way to branch unconditionally to another
    line (linelabel or linenumber). A GOTO statement can branch only to
    another statement at the same level of a program. You cannot use GOTO to
    enter or exit a SUB, FUNCTION, or multiline DEF FN function. You can,
    however, use GOTO to control program flow within any of these program
    structures.

    It is good programming practice to use structured control statements
    (DO...LOOP, FOR, IF..THEN...ELSE, SELECT CASE) instead of GOTO statements
    because a program with many GOTO statements is difficult to read and
    debug.

■ Example

    The following program prints the area of the circle with the input radius:

    PRINT "Input 0 to end."
    Start:
        INPUT R
        IF R = 0 THEN
        END
        ELSE
        A = 3.14 * R^2
        PRINT "Area =";A
        END IF
    GOTO Start

■ Output

    Input 0 to end.
    ? 5
    Area = 78.5
    ? 0


────────────────────────────────────────────────────────────────────────────
HEX$ Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns a string that represents the hexadecimal value of the decimal
    argument expression

■ Syntax

    HEX$(expression)

■ Remarks

    The argument expression is rounded to an integer or, if the expression is
    outside the integer range, a long integer before the HEX$ function
    evaluates it.

■ See Also

    OCT$

■ Example

    The following example prints the hexadecimal representation of an input
    value:

    INPUT X
    A$ = HEX$(X)
    PRINT X "decimal is " A$ " hexadecimal"

■ Output

    ? 32
    32 decimal is 20 hexadecimal









────────────────────────────────────────────────────────────────────────────
IF...THEN...ELSE Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Allows conditional execution, based on the evaluation of a Boolean
    expression

■ Syntax 1 (Single Line)

    IF booleanexpression THEN thenpart «ELSE elsepart»

■ Syntax 2 (Block)

    IF booleanexpression1 THEN
        «statementblock-1»
    «ELSEIF booleanexpression2 THEN
        «statementblock-2»»
    .
    .
    .
    «ELSE
        «statementblock-n»»
    END IF

■ Remarks

    The single-line form of the statement is best used for short,
    straightforward tests where only one action is taken.

    The block form provides several advantages:

    ■ The block form provides more structure and flexibility than the
    single-line form by allowing conditional branches across several lines.

    ■ With the block form, more complex conditions can be tested.

    ■ The block form lets you use longer statements and structures within the
    THEN...ELSE portion of the statement.

    ■ The block form allows your program's structure to be guided by logic
    rather than by how many statements fit on a line.

    Programs that use block-form IF...THEN...ELSE are usually easier to read,
    maintain, and debug.

    The single-line form is never required. Any program using single-line
    IF...THEN...ELSE statements can be written using block form.

    SINGLE-LINE IF...THEN...ELSE

    The following list describes the parts of the single-line form:

    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
    booleanexpression        Any expression that evaluates to true (nonzero)
                            or false (zero).

    thenpart, elsepart       The statements or branches performed when
                            booleanexpression is true (thenpart) or false
                            (elsepart). Both parts have the same syntax,
                            which is described below.
    ──────────────────────────────────────────────────────────────────────────

    The thenpart and the elsepart both have the following syntax:

    {statements | «GOTO» linenumber | GOTO linelabel }

    The following list describes the parts of the thenpart and elsepart
    syntax:

    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
    statements               One or more BASIC statements, separated by colons

    linenumber               A valid BASIC program line number

    linelabel                A valid BASIC line label
    ──────────────────────────────────────────────────────────────────────────

    Note that GOTO is optional with a line number but is required with a line
    label.

    The thenpart is executed if the booleanexpression is true; if the
    booleanexpression is false, the elsepart is executed. If the ELSE clause
    is not present, control passes to the next statement in the program.

    You can have multiple statements with a condition, but they must be on the
    same line and separated by colons:

    IF A > 10 THEN A=A+1:B=B+A:LOCATE 10,22:PRINT B,A

    BLOCK IF...THEN...ELSE

    The following list describes the parts of the block IF...THEN...ELSE:

    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
    booleanexpression1,      Any expression that evaluates to true (nonzero)
    booleanexpression2       or false (zero)

    statementblock-1,        One or more BASIC statements on one or more lines
    statementblock-2,
    statementblock-n
    ──────────────────────────────────────────────────────────────────────────

    In executing a block-form IF, QuickBASIC tests booleanexpression1, the
    first Boolean expression. If the Boolean expression is true (nonzero), the
    statements following THEN are executed. If the first Boolean expression is
    false (zero), QuickBASIC begins evaluating each ELSEIF condition in turn.
    When QuickBASIC finds a true condition, the statements following the
    associated THEN are executed. If none of the ELSEIF conditions are true,
    the statements following the ELSE are executed. After the statements
    following a THEN or ELSE are executed, the program continues with the
    statement following the END IF.

    The ELSE and ELSEIF blocks are both optional. You can have as many ELSEIF
    clauses as you would like in a block IF. Any of the statement blocks can
    contain nested block IF statements.

    QuickBASIC looks at what appears after the THEN keyword to determine
    whether or not an IF statement is a block IF. If anything other than a
    comment appears after THEN, the statement is treated as a single-line IF
    statement.

    A block IF statement must be the first statement on a line. The ELSE,
    ELSEIF, and END IF parts of the statement can only have a line number or
    line label in front of them. The block must end with an END IF statement.

    For more information, see Chapter 1, "Control-Flow Structures," in
    Programming in BASIC.

■ See Also

    SELECT CASE

■ Examples

    The following program fragments demonstrate the use of single-line and
    block IF...THEN...ELSE and illustrate the differences. The first example
    demonstrates the single-line IF...THEN...ELSE form:

    DO
    INPUT "Enter a number greater than 0 and less than 10,000:",X
    IF X>=0 AND X<10000 THEN EXIT DO ELSE PRINT X;"out of range"
    LOOP
    IF X<10 THEN Y=1 ELSE IF X<100 THEN Y=2 ELSE IF X<1000 THEN Y=3 ELSE
    Y=4
    PRINT "The number has";Y;"digits"

    In the second example the block IF...THEN...ELSE makes the code more
    readable and more powerful:

    DO
        INPUT "Enter a number greater than 0 and less than 100,000:",X
        IF X>0 AND X<100000 THEN
        EXIT DO
        ELSE
        PRINT X;"out of range"
        END IF
    LOOP
    IF X<10 THEN
        Y=1
    ELSEIF X<100 THEN
        Y=2
    ELSEIF X<1000 THEN
        Y=3
    ELSEIF X<10000 THEN
        Y=4
    ELSE
        Y=5
    END IF
    PRINT "The number has";Y;"digits"


────────────────────────────────────────────────────────────────────────────
INKEY$ Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Reads a character from the keyboard

■ Syntax

    INKEY$

■ Remarks

    The INKEY$ function returns a one- or two-byte string containing a
    character read from the standard input device. A null string is returned
    if no character is waiting there. A one-character string contains the
    actual character read from the keyboard, while a two-character string
    indicates an extended code, the first character of which is hexadecimal
    00. For a complete list of these codes, see Appendix A, "Keyboard Scan
    Codes and ASCII Character Codes."

    The standard input device is usually the keyboard. INKEY$ does not echo
    characters to the screen; instead, all characters are passed through to
    the program except for these:

    ■ CTRL+BREAK, which halts program execution

    ■ CTRL+ALT+DEL, which does a system reboot

    ■ CTRL+NUMLOCK, which causes program execution to pause

    ■ PRTSC, which prints the screen

■ Example

    The following program fragment shows a common use of INKEY$──pausing until
    the user presses a key:

    PRINT "Press any key to continue..."
    DO
    LOOP WHILE INKEY$=""


────────────────────────────────────────────────────────────────────────────
INP Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the byte read from an I/O port

■ Syntax

    INP(port)

■ Remarks

    The port must be an integer in the range 0-65,535. The INP function
    complements the OUT statement.

    The INP and OUT statements give a BASIC program direct control over the
    hardware in a system through the I/O ports. These statements must be used
    carefully because they directly manipulate the system hardware.

■ See Also

    OUT, WAIT

■ Example

    See the example for the OUT statement.


────────────────────────────────────────────────────────────────────────────
INPUT Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Allows input from the keyboard during program execution

■ Syntax

    INPUT«;»«"promptstring"{; | ,}» variablelist

■ Remarks

    The following list describes the parts of the INPUT statement:

    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
    ;                        A semicolon immediately after INPUT keeps the
                            cursor on the same line after the user presses
                            ENTER.

    promptstring             A string constant printed before the prompt
                            character.

    ;                        Prints a question mark at the end of the
                            promptstring.

    ,                        Prints the promptstring without a question mark.

    variablelist             A list of variables, separated by commas, to
                            accept the input values. See the discussion
                            below.
    ──────────────────────────────────────────────────────────────────────────

    The INPUT statement causes the program to pause and wait for data. You can
    then enter the required data at the keyboard.

    The data that you enter is assigned to the variables in variablelist. The
    number of data items that you supply must be the same as the number of
    variables in the list. The first character encountered after a comma that
    is not a space, carriage return, or line feed is assumed to be the start
    of a new item.

    The variable names in the list may be numeric- or string-variable names
    (including subscripted variables), array elements, or elements of records.
    The type of each data item that you input must agree with the type of the
    variable. (Strings input to an INPUT statement need not be surrounded by
    quotation marks.) If this first character is a quotation mark ("), the
    string item will consist of all characters read between the first
    quotation mark and the second. This means a quoted string may not contain
    a quotation mark as a character. If the first character of the string is
    not a quotation mark, the string is an unquoted string and terminates on a
    comma, carriage return, or line feed.

    Input stored in elements of a record must be input as single elements:

    TYPE Demograph
        FullName AS STRING*25
        Age  AS INTEGER
    END TYPE

    DIM Person AS Demograph
    INPUT "Enter name and age: ";Person.FullName,Person.Age

    Responding to an INPUT statement with too many or too few items, or with
    the wrong type of value (for example, numeric instead of string), produces
    this error message:

    Redo from start

    No assignment of input values is made until you give an acceptable
    response.

    It is possible to edit a line of input before you press ENTER. The
    following list describes the key combinations that allow you to move the
    cursor, delete text, and insert text on the input line:


╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Keys                     Action
    ──────────────────────────────────────────────────────────────────────────
    CTRL+\ or RIGHT          Moves cursor one character to the right.

    Keys                     Action
    ──────────────────────────────────────────────────────────────────────────

    CTRL+] or LEFT           Moves cursor one character to the left.

    CTRL+F or CTRL+RIGHT     Moves cursor one word to the right.

    CTRL+B or CTRL+LEFT      Moves cursor one word to the left.

    CTRL+K or HOME           Moves cursor to the beginning of the input line.

    CTRL+N or END            Moves cursor to the end of the input line.

    CTRL+R or INS            Toggles insert mode on and off. When insert mode
                            is on, character above and those to the right of
                            the cursor are shifted to the right as new
                            characters are entered.

    CTRL+I or TAB            Tabs right and inserts (insert mode on), or
                            overwrites (insert mode off).

    Keys                     Action
    ──────────────────────────────────────────────────────────────────────────

    DEL                      Deletes the character at the cursor.

    CTRL+H or BACKSPACE      Deletes the character to the left of the cursor,
                            unless the cursor is at the beginning of the
                            input, in which case it deletes the character at
                            the cursor.

    CTRL+E or CTRL+END       Deletes to the end of the line.

    CTRL+U or ESC            Deletes entire line, regardless of cursor
                            position.

    CTRL+M or RETURN         Stores input line.

    CTRL+T                   Toggles function key label display on and off at
                            bottom of screen.

    CTRL+BREAK or CTRL+C     Terminates input (exits compiled program).
    Keys                     Action
    ──────────────────────────────────────────────────────────────────────────
    CTRL+BREAK or CTRL+C     Terminates input (exits compiled program).
    ──────────────────────────────────────────────────────────────────────────


■ Example

    The following example calculates the area of a circle from an input
    radius:

    PI = 3.141593 : R = -1
    PRINT "Enter radius (0 to end)."
    DO WHILE R
        PRINT
        INPUT;"If radius = ", R
        IF R > 0 THEN
            A = PI*R^2
            PRINT ", the area of the circle =" A
        END IF
    LOOP

■ Output

    Enter radius (0 to end).

    If radius = 3, the area of the circle = 28.27434

    If radius = 4, the area of the circle = 50.26549

    If radius = 0


────────────────────────────────────────────────────────────────────────────
INPUT # Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Reads data items from a sequential device or file and assigns them to
    variables

■ Syntax

    INPUT #filenumber, variablelist

■ Remarks

    The filenumber is the number used when the file was opened for input. The
    variablelist contains the names of the variables that are assigned values
    read from the file. (The variable type must match the type specified by
    the variable name.)

    The data items in the file should appear just as they would if you were
    entering data in response to an INPUT statement. Separate numbers with a
    space, carriage return, line feed, or comma. Separate strings with a
    carriage return or linefeed (leading spaces are ignored). The end-of-file
    character will end either a numeric or string entry.

    If BASIC is scanning the sequential data file for a string item, it will
    also ignore leading spaces, carriage returns, and line feeds. If
    end-of-file is reached when a numeric or string item is being INPUT, the
    item is terminated.

■ See Also

    INPUT, INPUT$

■ Example

    The following program reads a series of test scores from a sequential file
    and calculates the average score:

    DEFINT A-Z

    OPEN "class.dat" FOR INPUT AS #1

    DO WHILE NOT EOF(1)
        Count=Count+1
        INPUT #1,Score
        Total=Total+Score
        PRINT Count;Score
    LOOP
    PRINT
    PRINT "Total students:";Count;" Average score:";Total/Count

    END

■ Output

    1  97
    2  84
    3  63
    4  89
    5  100

    Total students: 5  Average score: 86.6


────────────────────────────────────────────────────────────────────────────
INPUT$ Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns a string of characters read from the specified file

■ Syntax

    INPUT$(n«,«#»filenumber»)

■ Remarks

    The n is the number of characters (bytes) to read from the file. The
    filenumber is the number that was used in opening the file.

    If the file is opened for random access, the argument n must be less than
    or equal to the record length set by the LEN clause in the OPEN statement
    (or less than or equal to 128 if the record length is not set). If the
    given file is opened for binary or sequential access, then n must be less
    than or equal to 32,767.

    If the filenumber is not specified, the characters are read from the
    standard input device. (If input has not been redirected, the keyboard is
    the standard input device).

    You can use the DOS redirection symbols (<, >, or >>) or the pipe symbol
    (|) to redefine the standard input or standard output for an executable
    file created with BASIC. (See your operating system manual for a complete
    discussion of redirection and pipes.)

    No characters are echoed on the screen. All control characters are passed
    through except CTRL+BREAK, which interrupts execution of the function.

■ Example

    The following program prints a file on the screen. It uses INPUT$ to read
    one character at a time, then converts the character, as necessary, and
    displays it.

    'ASCII codes for tab, and line feed.
    CONST HTAB = 9, LFEED = 10

    INPUT "Display which file"; Filename$
    OPEN Filename$ FOR INPUT AS #1
    CLS
    DO WHILE NOT EOF(1)

        ' Input a single character from the file.
        S$=INPUT$(1,#1)
        ' Convert the character to an integer and
        ' turn off the high bit so WordStar(R) files
        ' can be displayed.
        C=ASC(S$) AND &H7F
        ' Is it a printable character?
        IF (C >= 32 AND C <= 126) OR C = HTAB OR C = LFEED THEN
            PRINT CHR$(C);
        END IF

    LOOP
    END


────────────────────────────────────────────────────────────────────────────
INSTR Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the character position of the first occurrence of a string in
    another string

■ Syntax

    INSTR(«start,»stringexpression1,stringexpression2)

■ Remarks

    The following list describes the INSTR function arguments:

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    start                    An optional offset that sets the position for
                            starting the search; start must be in the range
                            1-32,767. If start is not given, the INSTR
                            function begins the search at the first character
                            of stringexpression1.

    stringexpression1        The string being searched.

    stringexpression2        The string to look for.
    ──────────────────────────────────────────────────────────────────────────

    The arguments stringexpression1 and stringexpression2 can be string
    variables, string expressions, or string literals. The value returned by
    INSTR depends on these conditions:

    Condition                            Value Returned
    ──────────────────────────────────────────────────────────────────────────
    stringexpression2 found in           The position at which the match is
    stringexpression1                    found

    start greater than length of         0
    stringexpression1
    stringexpression1 is null string     0

    stringexpression2 cannot be found    0

    stringexpression2 is null string     start (if given); otherwise, 1
    ──────────────────────────────────────────────────────────────────────────

    Use the LEN function to find the length of stringexpression1.

■ Example

    The following fragment uses INSTR and UCASE$ to look for Mr., Mrs., or Ms.
    in a name in order to deduce the person's sex:

    ' Get a name.
    DO
        INPUT "Enter name: ", Nm$
    LOOP UNTIL LEN(Nm$)>=3

    ' Convert lowercase letters to uppercase.
    Nm$ = UCASE$(Nm$)

    ' Look for MS., MRS., or MR. to set Sex$.
    IF INSTR(Nm$,"MS.") > 0 OR INSTR(Nm$,"MRS.") > 0 THEN
        Sex$ = "F"
    ELSEIF INSTR(Nm$,"MR.") > 0 THEN
        Sex$ = "M"
    ELSE
        ' Can't deduce sex, so query user.
        DO
            INPUT "Enter sex (M/F): ", Sex$
            Sex$ = UCASE$(Sex$)
        LOOP WHILE Sex$ <> "M" AND Sex$ <> "F"
    END IF

■ Output

    Enter name: Elspeth Brandtkeep
    Enter sex (M/F): x
    Enter sex (M/F): F


────────────────────────────────────────────────────────────────────────────
INT Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the largest integer less than or equal to numeric-expression

■ Syntax

    INT(numeric-expression)

■ Remarks

    The INT function removes the fractional part of its argument.

■ See Also

    CINT, FIX

■ Example

    The following example compares the output from the three functions that
    convert numeric data to integers:

    PRINT "  N","INT(N)","CINT(N)","FIX(N)" : PRINT
    FOR I% = 1 TO 6
        READ N
        PRINT N, INT(N), CINT(N), FIX(N)
    NEXT
    DATA  99.3, 99.5, 99.7, -99.3, -99.5, -99.7

■ Output

    N           INT(N)        CINT(N)       FIX(N)

    99.3          99            99            99
    99.5          99            100           99
    99.7          99            100           99
    -99.3         -100          -99           -99
    -99.5         -100          -100          -99
    -99.7         -100          -100          -99


────────────────────────────────────────────────────────────────────────────
IOCTL$ Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Receives a control data string from a device driver

■ Syntax

    IOCTL$ («#» filenumber)

■ Remarks

    The filenumber is the BASIC file number used to open the device. The
    IOCTL$ function is most frequently used to test whether an IOCTL statement
    succeeded or failed or to obtain current status information.

    You could use IOCTL$ to ask a communications device to return the current
    baud rate, information on the last error, logical line width, and so on.
    The exact information returned would depend on the specific device driver.

    The IOCTL$ function works only if all three of the following conditions
    are met:

    1. The device driver is installed.

    2. The device driver states that it processes IOCTL strings. See the
        documentation for the driver. You can also test for IOCTL support
        through DOS function &H44 by using interrupt &H21 and the CALL
        INTERRUPT routine. See the CALL INTERRUPT statement for more
        information.

    3. BASIC performs an OPEN statement on a file on that device.

────────────────────────────────────────────────────────────────────────────
NOTE
    BASIC devices (LPT1:, COM1:, COM2:, SCRN:, CONS:) and DOS block devices
    (A: through Z:) do not support IOCTL.
────────────────────────────────────────────────────────────────────────────

■ See Also

    IOCTL

■ Example

    The following example opens the device driver ENGINE and uses the IOCTL$
    function to test for raw data mode being set:

    OPEN "\DEV\ENGINE" FOR OUTPUT AS #1
    IOCTL #1, "RAW"     'Tells the device that the data is raw.
    ' If the character driver "ENGINE" responds "false" from
    ' the raw data mode in the IOCTL statement, then the file
    ' is closed.
    IF IOCTL$(1) = "0" THEN CLOSE 1


────────────────────────────────────────────────────────────────────────────
IOCTL Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Transmits a control data string to a device driver

■ Syntax

    IOCTL «#»filenumber, string

■ Remarks

    The filenumber is the BASIC file number used to open the device. The
    string is the command sent to the device. Commands are specific to the
    device driver. See the documentation for the device driver to find out
    what the valid IOCTL commands are. An IOCTL control data string can be up
    to 32,767 bytes long.

    The IOCTL statement works only if all three of the following conditions
    are met:

    1. The device driver is installed.

    2. The device driver states that it processes IOCTL strings. See the
        documentation for the driver. You can also test for IOCTL support
        through DOS function &H44 by using interrupt &H21 and the CALL
        INTERRUPT routine. See the Microsoft MS-DOS Programmer's Reference and
        the CALL INTERRUPT statement for more information.

    3. BASIC performs an OPEN on a file on that device, and the file is still
        open.

    Most standard DOS device drivers do not process IOCTL strings, and you
    must determine if the specific driver accepts the command.

■ See Also

    IOCTL$

■ Example

    If you wanted to set the page length to 66 lines per page on LPT1, your
    statement might look like this:

    OPEN "\DEV\LPT1" FOR OUTPUT AS 1
    IOCTL #1, "PL66"


────────────────────────────────────────────────────────────────────────────
KEY Statements
────────────────────────────────────────────────────────────────────────────

■ Action

    Assign soft-key string values to FUNCTION keys, then display the values
    and enable or disable the FUNCTION key display line

■ Syntax

    KEY n, stringexpression
    KEY LIST
    KEY ON
    KEY OFF

■ Remarks

    The placeholder n is a number representing the FUNCTION key. The values
    for n are 1 to 10 for the FUNCTION keys, and 30 and 31 for FUNCTION keys
    F11 and F12 on 101-key keyboards. The stringexpression is a string of up
    to 15 characters that is returned when the FUNCTION key is pressed. If the
    stringexpression is longer than 15 characters, the extra characters are
    ignored.

    The KEY statement allows you to designate special "soft-key"
    functions──strings that are returned when FUNCTION keys are pressed.

    Assigning a null string to a soft key disables the FUNCTION key as a soft
    key.

    If the FUNCTION key number is not in the correct range, an error message
    is displayed that reads Illegal function call, and the previous key string
    expression is retained.

    You may display soft keys with the KEY ON, KEY OFF, and KEY LIST
    statements:

    Statement                Action
    ──────────────────────────────────────────────────────────────────────────
    KEY ON                   Displays the first six characters of the soft-key
                            string values on the bottom line of the screen.

    KEY OFF                  Erases the soft-key display from the bottom line,
                            making that line available for program use. It
                            does not disable the FUNCTION keys.

    KEY LIST                 Displays all soft-key values on the screen, with
                            all 15 characters of each key displayed.
    ──────────────────────────────────────────────────────────────────────────

    If a soft key is pressed, the effect is the same as if the user typed the
    string associated with the soft key. INPUT$, INPUT, and INKEY$ can all be
    used to read the string produced by pressing the soft key.

■ Examples

    The following examples show how to assign a string to a soft key and how
    to disable a soft key:

    KEY 1,"MENU"+CHR$(13)  'Assigns to soft key 1 the string
                            '"MENU" followed by a carriage return.

    KEY 1,""
    'Disables soft key 1.

    The following program uses KEY statements to set up one-key equivalents of
    menu selections. For example, pressing F1 is the same as entering the
    string Add:

    DIM KeyText$(3)
    DATA Add, Delete, Quit
    ' Assign soft-key strings to F1 to F3.
    FOR I=1 TO 3
        READ KeyText$(I)
        KEY I, KeyText$(I)+CHR$(13)
    NEXT I
    ' Print menu.
    PRINT "                 Main Menu" : PRINT
    PRINT "           Add to list (F1)"
    PRINT "           Delete from list (F2)"
    PRINT "           Quit (F3)" : PRINT
    ' Get input and respond.
    DO
        LOCATE 7,1 : PRINT SPACE$(50);
        LOCATE 7,1 : INPUT "             Enter your choice:",R$
        SELECT CASE R$
        CASE "Add", "Delete"
            LOCATE 10,1 : PRINT SPACE$(15);
            LOCATE 10,1 : PRINT R$;
        CASE "Quit"
            EXIT DO
        CASE ELSE
            LOCATE 10,1 : PRINT "Enter first word or press key."
        END SELECT
    LOOP


────────────────────────────────────────────────────────────────────────────
KEY (n) Statements
────────────────────────────────────────────────────────────────────────────

■ Action

    Start or stop trapping of specified keys

■ Syntax

    KEY(n) ON
    KEY(n) OFF
    KEY(n) STOP

■ Remarks

    The argument n is the number of a FUNCTION key, a cursor-direction key, or
    a user-defined key. (See the KEY statement for information on assigning
    soft-key values to FUNCTION keys.) The values of n are as follows:

    Value                    Key
    ──────────────────────────────────────────────────────────────────────────
    1-10                     The FUNCTION keys F1-F10
    11                       UP
    12                       LEFT
    13                       RIGHT
    14                       DOWN
    15-25                    User-defined keys
    30-31                    The FUNCTION keys F11-F12 on 101-key keyboards
    ──────────────────────────────────────────────────────────────────────────

    LEFT, RIGHT, UP, and DOWN refer to the direction keys.

    You can enable trapping of combination keys by using a variation of the
    KEY statement:

    KEY n, CHR$(keyboardflag) + CHR$(scancode)

    The argument n is in the range 15-25 to indicate a user-defined key. The
    keyboardflag can be any combination of the following hexadecimal values:

    Value                    Key
    ──────────────────────────────────────────────────────────────────────────
    &H00                     No keyboard flag
    &H01-&H03                Either SHIFT key
    &H04                     CTRL
    &H08                     ALT
    &H20                     NUMLOCK
    &H40                     CAPSLOCK
    &H80                     101-key keyboard extended keys
    ──────────────────────────────────────────────────────────────────────────

    You can add the values together to test for multiple shift states. A
    keyboardflag value of &H12 would test for both CTRL and ALT being pressed,
    for example.

    Because key trapping assumes the left and right SHIFT keys are the same,
    you can use either &H01, &H02, or &H03 to indicate a SHIFT key. The
    scancode argument is a number identifying one of the 83 keys to trap, as
    shown in Table R.4.

    Table R.4   Keyboard Scan Codes


╓┌─┌───────────┌────────────┌───────────┌───────────┌────────────┌───────────╖
                Code                     Code                     Code
    Key         in Hex       Key         in Hex      Key          in Hex
    ──────────────────────────────────────────────────────────────────────────
    ESC         01           CTRL        1D          SPACEBAR     39
    ! or 1      02           A           1E          CAPS LOCK    3A
    # or 3      04           D           20          F2           3C
                Code                     Code                     Code
    Key         in Hex       Key         in Hex      Key          in Hex
    ──────────────────────────────────────────────────────────────────────────
    # or 3      04           D           20          F2           3C
    $ or 4      05           F           21          F3           3D
    % or 5      06           G           22          F4           3E
    ^ or 6      07           H           23          F5           3F
    & or 7      08           J           24          F6           40
    * or 8      09           K           25          F7           41
    ( or 9      0A           L           26          F8           42
    ) or 0      0B           : or ;      27          F9           43
    _ or -      0C           " or '      28          F10          44
    + or =      0D           ~ or `      29          NUM LOCK     45
    LEFT        0E           LEFT SHIFT  2A          SCROLL LOCK  46
    TAB         0F           | or \      2B          HOME or 7    47
    Q           10           Z           2C          UP or 8      48
    W           11           X           2D          PGUP or 9    49
    E           12           C           2E          -            4A
    R           13           V           2F          LEFT or 4    4B
    T           14           B           30          5            4C
    Y           15           N           31          RIGHT or 6   4D
                Code                     Code                     Code
    Key         in Hex       Key         in Hex      Key          in Hex
    ──────────────────────────────────────────────────────────────────────────
    Y           15           N           31          RIGHT or 6   4D
    U           16           M           32          +            4E
    I           17           < or ,      33          END or 1     4F
    O           18           > or .      34          DOWN or 2    50
    P           19           ? or /      35          PGDN or 3    51
    { or [      1A           RIGHT SHIFT 36          INS or 0     52
    } or ]      1B           PRTSC or *  37          DEL or .     53
    RETURN      1C           ALT         38
    ──────────────────────────────────────────────────────────────────────────


────────────────────────────────────────────────────────────────────────────
NOTE
    The scan codes in Table R.4 are equivalent to the first column of the
    scan code table in Appendix A, "Keyboard Scan Codes and ASCII Character
    Codes." The codes in the other columns of the table in the appendix should
    not be used for key trapping.
────────────────────────────────────────────────────────────────────────────

    The KEY(n) ON statement enables soft-key or cursor-direction-key event
    trapping by an ON KEY statement. If you specify a nonzero line number in
    the ON KEY statement while trapping is enabled, BASIC checks to see if you
    have pressed KEY(n). If you have, BASIC executes the GOSUB clause in the
    ON KEY statement. The text that would normally be associated with a
    FUNCTION key is not input.

    When you are working in the environment, QuickBASIC tests between
    statements for key presses. In stand-alone programs, you can specify
    checking between lines.

    KEY(n) OFF disables the event trap; even if an event takes place, it is
    not remembered. KEY(n) STOP inhibits the event trap; that is, if you press
    the specified key your action is remembered and an ON KEY event trap is
    executed as soon as a KEY(n) ON statement is executed.

■ See Also

    ON event

■ Example

    This example traps the DOWN direction key and CTRL+S (control key and
    lowercase "s"). To trap the combination of the CTRL key and uppercase "s,"
    you need to trap CTRL+SHIFT and CTRL+CAPS LOCK+S.

    I = 0
    PRINT "Press DOWN direction key to end."
    KEY 15,CHR$(&H04)+CHR$(&H1f)
    KEY(15) ON              'Trap CTRL+s.
    KEY(14) ON              'Trap DOWN direction key.
    ON KEY(15) GOSUB Keytrap
    ON KEY(14) GOSUB Endprog
    Idle: GOTO Idle        'Endless loop

    Keytrap:   'Counts the number of times CTRL+s pressed.
        I = I + 1
    RETURN

    Endprog:
        PRINT "CTRL+s trapped"; I; "times"
        END
    RETURN


────────────────────────────────────────────────────────────────────────────
KILL Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Deletes a file from disk

■ Syntax

    KILL filespec

■ Remarks

    The KILL statement is similar to the DOS ERASE or DEL commands.

    KILL is used for all types of disk files: program files, random data
    files, and sequential data files. The filespec may contain question marks
    (?) or asterisks (*) used as wild cards. A question mark matches any
    single character in the file name or extension. An asterisk matches one or
    more characters starting at its position.

    You can use KILL only to delete files. To delete directories, use the
    RMDIR command. Using KILL to delete a file that is currently open produces
    an error message that reads File already open.

────────────────────────────────────────────────────────────────────────────
WARNING
    Be extremely careful when using wild cards with KILL. You can delete files
    unintentionally with the wild card characters.
────────────────────────────────────────────────────────────────────────────

■ Examples

    The following examples show the effect of wild-card characters when used
    with KILL:

    KILL "DATA1?.DAT"           'Kills any file with a six-character
                                'base name starting with DATA1 and
                                'also with the extension .DAT.

    KILL "DATA1.*"              'Kills any file with the base name
                                'DATA1 and any extension.

    KILL "\GREG\*.DAT"        'Kills any file with the extension
                                '.DAT in a subdirectory called GREG.

    The following program deletes the file specified in the command line:

    DEFINT A-Z
    ON ERROR GOTO Errorhandle 'Set up error handling.
    FileName$ = COMMAND$      'Get file name.
    KILL FileName$
    END

    Errorhandle:
        Number = ERR
        IF Number = 53 THEN
            PRINT "Couldn't delete " FileName$ ;
            PRINT "; file does not exist in current directory"
        ELSE
            PRINT "Unrecoverable error:";Number
            ON ERROR GOTO 0   'ON ERROR GOTO zero aborts program.
        END IF
    RESUME NEXT


────────────────────────────────────────────────────────────────────────────
LBOUND Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the lower bound (smallest available subscript) for the indicated
    dimension of an array

■ Syntax

    LBOUND(array«,dimension»)

■ Remarks

    The LBOUND function is used with the UBOUND function to determine the size
    of an array. LBOUND takes the following arguments:

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    array                    The name of the array being dimensioned

    dimension                An integer ranging from 1 to the number of
                            dimensions in array: indicates which dimension's
                            lower bound is returned
    ──────────────────────────────────────────────────────────────────────────

    For an array dimensioned as follows, LBOUND returns the values listed
    below:

    DIM A(1 TO 100, 0 TO 50, -3 TO 4)

    Invocation               Value Returned
    ──────────────────────────────────────────────────────────────────────────
    LBOUND(A,1)              1
    LBOUND(A,2)              0
    LBOUND(A,3)              -3
    ──────────────────────────────────────────────────────────────────────────

    The default lower bound for any dimension is either 0 or 1, depending on
    the setting of the OPTION BASE statement. If OPTION BASE is 0, the default
    lower bound is 0, and if OPTION BASE is 1, the default lower bound is 1.

    Arrays dimensioned using the TO clause in the DIM statement may have any
    integer value as a lower bound.

    You may use the shortened syntax LBOUND(array) for one-dimensional arrays,
    since the default value for dimension is 1. Use the UBOUND function to
    find the upper limit of an array dimension.

■ See Also

    UBOUND

■ Example

    The LBOUND and UBOUND functions may be used to determine the size of an
    array passed to a subprogram, as in the following program fragment:

    CALL Prntmat(Array())
    .
    .
    .
    ' Print a matrix (two-dimensional array).
    SUB Prntmat(A(2)) STATIC
        ' Outer loop controls row (dimension 1).
        FOR I% = LBOUND(A,1) TO UBOUND(A,1)
        ' Inner loop controls column (dimension 2).
        FOR J% = LBOUND(A,2) TO UBOUND(A,2)
            PRINT A(I%,J%);" ";
        NEXT J%
        PRINT:PRINT
        NEXT I%
    END SUB


────────────────────────────────────────────────────────────────────────────
LCASE$ Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns a string expression with all letters in lowercase

■ Syntax

    LCASE$ (stringexpression)

■ Remarks

    The LCASE$ function takes a string variable, string constant, or string
    expression as its single argument. LCASE$ works with both variable- and
    fixed-length strings.

    LCASE$ and UCASE$ are helpful in string comparison operations where tests
    need to be case insensitive.

■ See Also

    UCASE$

■ Example

    The following example converts uppercase characters in a string to
    lowercase characters:

    ' Program to convert to lowercase.
        READ Word$
        PRINT LCASE$(Word$);
        DATA "THIS IS THE STRING in lowercase."

■ Output

    this is the string in lowercase.


────────────────────────────────────────────────────────────────────────────
LEFT$ Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns a string consisting of the leftmost n characters of a string

■ Syntax

    LEFT$(stringexpression,n)

■ Remarks

    The argument stringexpression can be any string variable, any string
    constant, or any string expression.

    The argument n is a numeric expression in the range 0-32,767 indicating
    how many characters are to be returned.

    If n is greater than the number of characters in stringexpression, the
    entire string is returned. To find the number of characters in
    stringexpression, use LEN(stringexpression).

    If n is zero, the null string (length zero) is returned.

■ See Also

    MID$, RIGHT$

■ Example

    The following example prints the leftmost five characters of A$:

    A$="BASIC LANGUAGE"
    B$=LEFT$(A$,5)
    PRINT B$

■ Output

    BASIC


────────────────────────────────────────────────────────────────────────────
LEN Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the number of characters in a string or the number of bytes
    required by a variable

■ Syntax

    LEN(stringexpression)
    LEN(variable)

■ Remarks

    In the first form, LEN returns the number of characters in the argument
    stringexpression. The second syntax returns the number of bytes required
    by a BASIC variable. This syntax is particularly useful for determining
    the correct record size of a random-access file.

■ Example

    The following example prints the sizes of BASIC variables of several
    different types and also prints the length of a string:

    TYPE EmpRec
        EmpName AS STRING*20
        EmpNum AS INTEGER
    END TYPE
    DIM A AS INTEGER, B AS LONG, C AS SINGLE, D AS DOUBLE
    DIM E AS EmpRec

    PRINT "Integer:" LEN(A)
    PRINT "Long:" LEN(B)
    PRINT "Single:" LEN(C)
    PRINT "Double:" LEN(D)
    PRINT "EmpRec:" LEN(E)
    PRINT "A string:" LEN("A string.")
    END

■ Output

    Integer: 2
    Long: 4
    Single: 4
    Double: 8
    EmpRec: 22
    A string: 9


────────────────────────────────────────────────────────────────────────────
LET Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Assigns the value of an expression to a variable

■ Syntax

    «LET»variable=expression

■ Remarks

    Notice that the word LET is optional. The equal sign in the statement is
    enough to inform QuickBASIC that the statement is an assignment statement.

    LET statements can be used with record variables only when both variables
    are the same user-defined type. Use the LSET statement for assigning
    record variables of different user-defined types.

■ See Also

    LSET

■ Examples

    Corresponding lines perform the same function in these two examples:

    LET D=12
    LET E=12-2
    LET F=12-4
    LET SUM=D+E+F
    .
    .
    .

    or

    D=12
    E=12-2
    F=12-4
    SUM=D+E+F
    .
    .
    .


────────────────────────────────────────────────────────────────────────────
LINE Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Draws a line or box on the screen

■ Syntax

    LINE ««STEP» (x1,y1)»-«STEP» (x2,y2) «,«color»«,«B«F»»«,style»»»

■ Remarks

    The coordinates (x1,y1) and (x2,y2) specify the endpoints of the line;
    note that the order in which these endpoints appear is unimportant, since
    a line from (10,20) to (120,130) is the same as a line from (120,130) to
    (10,20).

    The STEP option makes the specified coordinates relative to the most
    recent point, instead of absolute, mapped coordinates. For example, if the
    most recent point referred to by the program is (10,10), then

    LINE -STEP (10,5)

    draws a line from (10,10) to the point with x-coordinate equal to 10 + 10
    and y-coordinate equal to 10 + 5, or (20,15).

    You may establish a new most recent point by initializing the screen with
    the CLS and SCREEN statements. Using the PSET, PRESET, CIRCLE, and DRAW
    statements will also establish a new most recent point.

    Variations of the STEP argument are shown below. For the following
    examples, assume that the last point plotted was (10,10):

╓┌─┌────────────────────────────────────────────────┌────────────────────────╖
    Statement                                        Description
    ──────────────────────────────────────────────────────────────────────────
    LINE -(50,50)                                    Draws from (10,10) to
                                                    (50,50)

    LINE -STEP(50,50)                                Draws from (10,10) to
                                                    (60,60); that is, to 10
                                                    plus offset 50

    LINE (25,25)-STEP(50,50)                         Draws from (25,25) to
                                                    (75,75); that is, to 25
                                                    plus offset 50

    Statement                                        Description
    ──────────────────────────────────────────────────────────────────────────

    LINE STEP(25,25)-STEP(50,50)                     Draws from (35,35) to
                                                    (85,85); that is, from 10
                                                    plus offset 25 to that
                                                    point plus offset 50

    LINE STEP(25,25)-(50,50)                         Draws from (35,35) to
                                                    (50,50); that is, from 10
                                                    plus offset 25 to
                                                    absolute 50
    ──────────────────────────────────────────────────────────────────────────


    The color is the number of the color in which the line is drawn. (If the B
    or BF options are used, the box is drawn in this color.) See the SCREEN
    statement for information on valid colors.

    The B option draws a box with the points (x1,y1) and (x2,y2) specifying
    diagonally opposite corners.

    The BF option draws a filled box. This option is similar to the B option;
    BF also paints the interior of the box with the selected color.

    The style is a 16-bit integer mask used to put pixels on the screen. Using
    the style argument is called "line styling." With line styling, LINE reads
    the bits in style from left to right. If a bit is 0, then no point is
    plotted; if the bit is 1, a point is plotted. After plotting a point, LINE
    selects the next bit position in style.

    Because a 0 bit in style does not change the point on the screen, you may
    want to draw a background line before using styling so you can have a
    known background. Style is used for normal lines and boxes, but has no
    effect on filled boxes.

    When coordinates specify a point that is not in the current viewport, the
    line segment is clipped to the viewport.

    See Chapter 5, "Graphics," in Programming in BASIC for more information on
    the LINE statement.

■ See Also

    SCREEN

■ Examples

    The following examples are different LINE statements that assume a screen
    320 pixels wide by 200 pixels high:

    SCREEN 1                          'Sets up the screen mode.

    LINE -(X2,Y2)                     'Draws a line (in the
                                    'foreground color) from
                                    'the most recent point
                                    'to  X2,Y2.

    LINE(0,0)-(319,199)               'Draws a diagonal line across
                                    'the screen (downward).


    LINE(0,100)-(319,100)             'Draws a horizontal line
                                    'across the screen.

    LINE(10,10)-(20,20),2             'Draws a line in color 2.

    FOR X=0 to 319                    'Draws an alternating pattern
        LINE(X,0)-(X,199),X AND 1     '(line on/line off) on mono-
    NEXT                              'chrome display.

    LINE (0,0)-(100,100),,B           'Draws a box in the fore-
                                    'ground color (note that the
                                    'color is not included).

    LINE STEP(0,0)-STEP(200,200),2,BF 'Draws a filled box in color
                                    '2 (coordinates are given as
                                    'offsets with the STEP option).

    LINE(0,0)-(160,100),3,,&HFF00     'Draws a dashed line from
                                    'the upper lefthand corner to
                                    'the center of the screen in
                                    'color 3.


────────────────────────────────────────────────────────────────────────────
LINE INPUT Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Inputs an entire line (up to 255 characters) to a string variable, without
    the use of delimiters

■ Syntax

    LINE INPUT«;» «"promptstring";» stringvariable

■ Remarks

    The promptstring is a string constant displayed on the screen before input
    is accepted. A question mark is not printed unless it is part of the
    promptstring. All input from the end of promptstring to the carriage
    return is assigned to stringvariable.

    A semicolon immediately after the LINE INPUT statement keeps the cursor on
    the same line after the user presses ENTER.

    LINE INPUT uses the same editing characters as INPUT.

■ See Also

    INPUT

■ Example

    The following program enables the user to enter text in a notes file. The
    LINE INPUT statement allows you to enter any characters, including those
    (such as a comma) that are delimiters in a regular INPUT statement.

    'Opens and writes lines to a notes file until you
    'enter a blank line.
    DO
        CLS
        PRINT "Enter text. To stop, press <RETURN> without ";
        PRINT "entering any new text." : PRINT
        OPEN "NOTES.TXT" FOR OUTPUT AS #1

        ' Take lines until a blank line is entered.
        DO
            LINE INPUT "->";Inline$
            IF Inline$ <> "" THEN PRINT #1, Inline$
        LOOP WHILE Inline$ <> ""
        CLS : CLOSE #1

    ' Echo the notes back and see if they are correct.
        OPEN "NOTES.TXT" FOR INPUT AS #1
        PRINT "You entered: " : PRINT
        DO WHILE NOT EOF(1)
            LINE INPUT #1, Inline$
            PRINT Inline$
        LOOP
        CLOSE #1
        PRINT : INPUT "Is this correct (Y/N)"; R$

    LOOP WHILE UCASE$(R$)="N"
    END


────────────────────────────────────────────────────────────────────────────
LINE INPUT # Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Reads an entire line without delimiters from a sequential file to a string
    variable

■ Syntax

    LINE INPUT #filenumber,stringvariable

■ Remarks

    The filenumber is the number used to open the file. The stringvariable is
    the variable the line is assigned to.

    The LINE INPUT # statement reads all characters in the sequential file up
    to a carriage return. It then skips over the carriage-return and line-feed
    sequence. The next LINE INPUT # reads all characters up to the next
    carriage return.

    LINE INPUT # is especially useful if each line of a data file has been
    broken into fields or a text file is being read a line at a time.

■ See Also

    INPUT$, LINE INPUT

■ Example

    The following uses LINE INPUT # to echo data input to a file:

    OPEN "LIST" FOR OUTPUT AS #1
    PRINT "CUSTOMER INFORMATION:"
    ' Get customer information.
    DO
        PRINT
        INPUT "   LAST NAME:  ", LName$
        INPUT "   FIRST NAME: ", FrName$
        INPUT "   AGE:        ", Age$
        INPUT "   SEX:        ", Sex$
        Sex$=UCASE$(Sex$)
        WRITE #1, LName$, FrName$, Age$, Sex$
        INPUT "Add another"; R$
    LOOP WHILE UCASE$(R$)="Y"
    CLOSE #1


    ' Echo the file back.
    OPEN "LIST" FOR INPUT AS #1
    CLS
    PRINT "Records in file:" : PRINT
    DO WHILE NOT EOF(1)
        LINE INPUT #1, REC$
    'Read records from file with
        PRINT REC$          'LINE INPUT #. Print the
                            'records on the screen.
    LOOP

■ Output

    CUSTOMER INFORMATION:


        LAST NAME:  Saintsbury
        FIRST NAME: Aloysius
        AGE:        35
        SEX:        m
    Add another? y

        LAST NAME:  Frangio
        FIRST NAME: Louisa
        AGE:        27
        SEX:        f
    Add another? n

    Records in file:

    "Saintsbury","Aloysius","35","M"
    "Frangio","Louisa","27","F"


────────────────────────────────────────────────────────────────────────────
LOC Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the current position within the file

■ Syntax

    LOC(filenumber)

■ Remarks

    The filenumber is the number used in the OPEN statement to open the file.
    With random-access files, the LOC function returns the number of the last
    record read from or written to the file. With sequential files, LOC
    returns the current byte position in the file, divided by 128. With binary
    mode files, LOC returns the position of the last byte read or written.

    For a COM device, LOC(filenumber) returns the number of characters in the
    input queue waiting to be read. The value returned depends on whether the
    device was opened in ASCII or binary mode. In ASCII mode, the low-level
    routines stop queuing characters as soon as end-of-file is received. The
    end-of-file itself is not queued and cannot be read. An attempt to read
    the end-of-file produces an error message that reads Input past end of
    file. In binary mode, the end-of-file character is ignored and the entire
    file can therefore be read.

    The LOC function cannot be used on the SCRN:, KYBD:, or LPTn: devices.

■ See Also

    OPEN COM

■ Example

    The following line stops the program if the current file position is
    beyond 50:

    IF LOC(1) > 50 THEN STOP


────────────────────────────────────────────────────────────────────────────
LOCATE Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Moves the cursor to the specified position

■ Syntax

    LOCATE«row»«,«column»«,«cursor»«,«start»«,stop»»»»

■ Remarks

    The following list describes the LOCATE statement's arguments:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Argument                 Description
    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    row                      The number of a row on the screen; row is a
                            numeric expression returning an integer. If row
                            is not specified, then the line (row) does not
                            change.

    column                   The number of a column on the screen; column is a
                            numeric expression returning an integer. If
                            column is not specified, then the column location
                            does not change.

    cursor                   A Boolean value indicating whether the cursor is
                            visible or not. A value of 0 (zero) indicates
                            cursor off; a value of 1 indicates cursor on.

    start                    The starting scan line of cursor on the screen.
                            It must be a numeric expression returning an
                            integer.

    stop                     The ending scan line of cursor on the screen. It
    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    stop                     The ending scan line of cursor on the screen. It
                            must be a numeric expression returning an
                            integer.
    ──────────────────────────────────────────────────────────────────────────


    You may omit any argument from the statement except that if stop is
    specified, start must also be specified. When you omit the row or column,
    LOCATE leaves the cursor at the row or column where it was moved by a
    previous LOCATE or a previous input or output statement, whichever
    occurred most recently. When you omit other arguments, QuickBASIC assumes
    the previous value for the argument.

    Note that the start and stop lines are the CRT scan lines that specify
    which pixels on the screen are lit. A wider range between the start and
    stop lines produces a taller cursor, such as one that occupies an entire
    character block. When start is greater than stop, LOCATE produces a
    two-part cursor. If the start line is given but the stop line is omitted,
    stop assumes the same value as start.

    The last line on the screen is reserved for the soft-key display and is
    not accessible to the cursor unless the soft-key display is off (KEY OFF)
    and LOCATE is used with PRINT to write on the line.

■ See Also

    CSRLIN, POS

■ Examples

    The following statements show the effects on the cursor of different
    LOCATE statements:

    LOCATE 1,1    'Moves cursor to upper-left corner of the screen.

    LOCATE,,1     'Makes the cursor visible; position remains
                'unchanged.

    LOCATE,,,7    'Position and cursor visibility remain unchanged;
                'sets the cursor to display at the bottom of
                'the character box starting and ending on
                'scan line 7.

    LOCATE 5,1,1,0,7     'Moves the cursor to line 5, column 1;
                        'turns cursor on; cursor covers entire
                        'character cell starting at scan line
                        '0 and ending on scan line 7.

    The following example prints a menu on the screen, then waits for input in
    the allowable range (1-4). If a number outside that range is entered, the
    program continues to prompt for a selection.

    CONST FALSE=0, TRUE=NOT FALSE
    DO
        CLS
        PRINT "MAIN MENU" : PRINT
        PRINT "1)  Add Records"
        PRINT "2)  Display/Update/Delete a Record"
        PRINT "3)  Print Out List of People Staying at Hotel"
        PRINT "4)  End Program"
        ' Change cursor to a block.
        LOCATE ,,1,1,12
        LOCATE 12,1
        PRINT "What is your selection?";
        DO
            CH$ = INPUT$(1)
        LOOP WHILE (CH$ < "1" OR CH$ > "4")
        PRINT CH$

    ' Call the appropriate subprogram.
        SELECT CASE VAL(CH$)
            CASE 1
            CALL Add
            CASE 2
            CALL Search
            CASE 3
            CALL Hotel
            CASE 4
            CALL Quit
        END SELECT
    LOOP WHILE NOT ENDPROG
    .
    .
    .
    END


────────────────────────────────────────────────────────────────────────────
LOCK...UNLOCK Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Controls access by other processes to all or part of an opened file

■ Syntax

    LOCK «#» filenumber «,{record | «start» TO end}»
    .
    .
    .
    UNLOCK «#» filenumber «,{record | «start» TO end}»

■ Remarks

    These statements are used in networked environments where several
    processes might need access to the same file. The LOCK and UNLOCK
    statements take the following arguments:

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    filenumber               The number with which the file was opened.

    record                   The number of the record or byte to be locked;
                            record can be any number from 1 to 2,147,483,647
                            (equivalent to 2^31-1). A record may be up to
                            32,767 bytes in length.

    start                    The number of the first record or byte to be
                            locked.

    end                      The number of the last record or byte to be
                            locked.
    ──────────────────────────────────────────────────────────────────────────

    For binary-mode files, the arguments record, start, and end represent the
    number of a byte relative to the beginning of the file. The first byte in
    a file is byte 1. For random-access files, the arguments record, start,
    and end are the number of a record relative to the beginning of the file.
    The first record is record 1.

    The LOCK and UNLOCK statements are always used in pairs. The arguments to
    LOCK and UNLOCK must match exactly when you use them. See the second
    example below.

    If you specify just one record, then only that record is locked or
    unlocked. If you specify a range of records and omit a starting record
    (start), then all records from the first record to the end of the range
    (end) are locked or unlocked. LOCK with no record arguments locks the
    entire file, while UNLOCK with no record arguments unlocks the entire
    file.

    If the file has been opened for sequential input or output, LOCK and
    UNLOCK affect the entire file, regardless of the range specified by start
    and end. LOCK and UNLOCK only function at run time if you are using
    versions of DOS that support networking (version 3.1 or later). In
    addition, each terminal (or the network setup programs) must run the DOS
    SHARE.EXE program to enable locking operations. Earlier versions of DOS
    return an error message that reads Advanced feature unavailable if LOCK
    and UNLOCK are executed.

────────────────────────────────────────────────────────────────────────────
NOTE
    Be sure to remove all locks with an UNLOCK statement before closing a file
    or terminating your program. Failing to remove locks produces
    unpredictable results. The arguments to LOCK and UNLOCK must match
    exactly.
────────────────────────────────────────────────────────────────────────────

    If you attempt to access a file that is locked, the following error
    messages may appear:

    Bad record number
    Permission denied

■ Examples

    These examples assume a random-access file. The following statement locks
    the entire file opened as number 2:

    LOCK #2

    The following statement locks only record 32 in file number 2:

    LOCK #2, 32

    The following statement locks records 1-32 in file number 2:

    LOCK #2, TO 32

    The two UNLOCK statements below unlock the records locked by the preceding
    LOCK statements:

    LOCK #1, 1 TO 4
    LOCK #1, 5 TO 8
    UNLOCK #1, 1 TO 4
    UNLOCK #1, 5 TO 8

    The following UNLOCK statement is illegal because the range in an UNLOCK
    statement must exactly match the range in the corresponding LOCK
    statements (no error is reported, but the statements produce unpredictable
    results):

    LOCK #1, 1 TO 4
    LOCK #1, 5 TO 8
    UNLOCK #1, 1 TO 8

    The following program fragment opens a file and allows a user to lock an
    individual record before updating the information in that record. When the
    user is done, the program unlocks the locked record. (Unlocking the locked
    records allows other processes to use the data in the file.)

    TYPE AccountRec
        Payer AS STRING*15
        Address AS STRING*20
        Place AS STRING*20
        Owe AS SINGLE
    END TYPE
    DIM CustRec AS AccountRec

    OPEN "MONITOR" SHARED AS #1 LEN = LEN(CustRec)

    DO
        CLS:LOCATE 10,10
        INPUT "Customer Number?   #"; Number%
        ' Lock the current record so another process
        ' doesn't change it while you're using it.
        LOCK #1, Number%
        GET #1, Number%
        LOCATE 11,10: PRINT "Customer: ";CustRec.Payer
        LOCATE 12,10: PRINT "Address:  ";CustRec.Address
        LOCATE 13,10: PRINT "Currently owes: $";CustRec.Owe
        LOCATE 15,10: INPUT "Change (+ or -)", Change!
        CustRec.Owe=CustRec.Owe+Change!
        PUT #1, Number%
        ' Unlock the record.
        UNLOCK #1, Number%
        LOCATE 17,10: INPUT "Update another? ", Continue$
        Update$ = UCASE$(LEFT$(Continue$,1))
    LOOP WHILE Update$="Y"


────────────────────────────────────────────────────────────────────────────
LOF Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the length of the named file in bytes

■ Syntax

    LOF(filenumber)

■ Remarks

    The argument filenumber is the number used in the OPEN statement. When a
    file is opened in any mode, the LOF function returns the size of the file
    in bytes.

    LOF cannot be used with the BASIC devices SCRN:, KYBD:, CONS:, and LPTn:.
    When used on a device opened as a file with the statement OPEN COM, the
    LOF function returns the number of bytes free in the output buffer.

■ Example

    See the example for the GET statement.


────────────────────────────────────────────────────────────────────────────
LOG Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the natural logarithm of a numeric expression

■ Syntax

    LOG(n)

■ Remarks

    The numeric expression, n, must be greater than zero. The natural
    logarithm is the logarithm to the base e. The constant e is approximately
    equal to 2.718282.

    The LOG function calculates the natural logarithm with single-precision
    accuracy, unless the argument n is a double-precision value. In this case
    LOG is calculated with double-precision accuracy.

    You may calculate base-10 logarithms by dividing the natural logarithm of
    the number by the logarithm of 10. The following FUNCTION calculates
    base-10 logarithms:

    FUNCTION Log10(X) STATIC
        Log10=LOG(X)/LOG(10.#)
    END FUNCTION

■ Example

    The following example first prints the value of e and then prints the
    natural logarithms of e taken to the first, second, and third powers:

    PRINT EXP(1),
    FOR I = 1 TO 3
        PRINT LOG(EXP(1)^I),
    NEXT

■ Output

    2.718282       1       2       3


────────────────────────────────────────────────────────────────────────────
LPOS Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the current position of the line printer's print head within the
    printer buffer

■ Syntax

    LPOS(n)

■ Remarks

    The argument n is the index of the printer being tested. For example,
    LPT1: would be tested with LPOS(1), while LPT2: would be tested with
    LPOS(2), and so on.

    The LPOS function does not necessarily give the physical position of the
    print head because it does not expand tab characters. In addition, some
    printers may buffer characters.

■ Example

    The following program prompts the user for team names and the names of
    players on each team. It then prints the players and their teams on the
    printer.

    LPRINT"Team Members"; TAB(76); "TEAM" : LPRINT
    INPUT "How many teams"; TEAMS
    INPUT "How many players per team";PPT
    PRINT
    FOR T = 1 TO TEAMS
        INPUT "Team name: ", TEAM$
        FOR P = 1 TO PPT
            INPUT "   Enter player name: ", PLAYER$
            LPRINT PLAYER$;
            IF P < PPT THEN
                IF LPOS(0) > 55 THEN     'Print a new line if print
                                        'head past column 55.
                    LPRINT : LPRINT "     ";
                ELSE
                    LPRINT ", ";           'Otherwise, print a comma.
                END IF
            END IF
        NEXT P
        LPRINT STRING$(80-LPOS(0)-LEN(TEAM$),"."); TEAM$
    NEXT T


────────────────────────────────────────────────────────────────────────────
LPRINT, LPRINT USING Statements
────────────────────────────────────────────────────────────────────────────

■ Action

    Prints data on the printer LPT1:

■ Syntax 1

    LPRINT «expressionlist» «{;|,}»

■ Syntax 2

    LPRINT USING formatstring; expressionlist «{;|,}»

■ Remarks

    These statements function in the same way as the PRINT and PRINT USING
    statements except that output goes to the line printer and the filenumber
    option is not permitted.

    The LPRINT statement assumes an 80-character-wide printer. This width can
    be changed with a WIDTH LPRINT statement.

────────────────────────────────────────────────────────────────────────────
WARNING
    Since the LPRINT statement uses the LPT1 printer device, you should not
    use LPRINT in a program that also contains an OPEN LPT1 statement. Using
    these two statements together produces unpredictable results.
────────────────────────────────────────────────────────────────────────────

■ Differences From Basica

    An LPRINT CHR$(13) statement actually outputs both CHR$(13) and CHR$(10).
    This feature was created to provide compatibility with BASICA.

■ See Also

    PRINT, PRINT USING, WIDTH

■ Example

    See examples for PRINT, PRINT USING.


────────────────────────────────────────────────────────────────────────────
LSET Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Moves data from memory to a random-access file buffer (in preparation for
    a PUT statement), copies one record variable to another, or left-justifies
    the value of a string in a string variable

■ Syntax

    LSET {stringvariable=stringexpression | stringexpression1=
    stringexpression2}

■ Remarks

    The stringvariable is usually a random-access file field defined in a
    FIELD statement, although it can be any string variable. The
    stringexpression is the value assigned to the variable.

    If stringexpression requires fewer bytes than were defined for
    stringvariable in the FIELD statement, the LSET function left-justifies
    the string in the field (RSET will right-justify the string). Spaces are
    used to pad the extra positions. If the string is too long for the field,
    both LSET and RSET truncate characters from the right. Numeric values must
    be converted to strings before they are justified with the LSET or RSET
    statements.

────────────────────────────────────────────────────────────────────────────
NOTE
    You may also use LSET or RSET with a string variable not defined in a
    FIELD statement to left-justify or right-justify a string in a given
    field. For example, the program lines

    A$=SPACE$(20)
    RSET A$=N$

    will right-justify the string N$ in a 20-character field. This can be
    useful for formatting printed output.

────────────────────────────────────────────────────────────────────────────

    You can use LSET to assign one record variable to another. The following
    example copies the contents of RecTwo to RecOne:

    TYPE TwoString
        StrFld AS STRING * 2
    END TYPE

    TYPE ThreeString
        StrFld AS STRING * 3
    END TYPE
    DIM RecOne AS TwoString, RecTwo AS ThreeString
    .
    .
    .
    LSET RecOne = RecTwo

    Notice that LSET is used to assign record variables of differing types.
    Record variables of the same type can be assigned using LET. Also, because
    RecOne is only two bytes long, only two bytes are copied from RecTwo. LSET
    copies only the number of bytes in the shorter of the two record
    variables.

■ See Also

    LET; MKD$, MKI$, MKL$, MKS$; PUT (File I/O); RSET

■ Example

    The first line of the following example converts the single-precision
    numeric variable AMT to a 4-byte string and stores that string in A$,
    left-justified. The second line converts the integer numeric variable
    COUNT% to a 2-byte string and stores that string in D$, right-justified.

    LSET A$ = MKS$(AMT)
    RSET D$ = MKI$(COUNT%)


────────────────────────────────────────────────────────────────────────────
LTRIM$ Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns a copy of a string with leading spaces removed

■ Syntax

    LTRIM$(stringexpression)

■ Remarks

    The stringexpression can be any string expression.

■ See Also

    RTRIM$

■ Example

    This program copies a file to a new file, removing all leading and
    trailing spaces:

    CLS
    ' Get the file names.
    INPUT "Enter input file name:",InFile$
    INPUT "Enter output file name:",OutFile$

    OPEN InFile$ FOR INPUT AS #1
    OPEN OutFile$ FOR OUTPUT AS #2

    ' Read, trim, and write each line.
    DO WHILE NOT EOF(1)
        LINE INPUT #1,LineIn$
        ' Remove leading and trailing blanks.
        LineIn$=LTRIM$(RTRIM$(LineIn$))
        PRINT #2, LineIn$
    LOOP

    CLOSE #1,#2

    END


────────────────────────────────────────────────────────────────────────────
MID$ Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns a substring of a string

■ Syntax

    MID$(stringexpression,start«,length»)

■ Remarks

    The MID$ function takes the following arguments:

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    stringexpression         The string expression that the substring is
                            extracted from. This can be any string
                            expression.

    start                    The character position in stringexpression where
                            the substring starts.

    length                   The number of characters to extract.
    ──────────────────────────────────────────────────────────────────────────

    The arguments start and length must be in the range 1 to 32,767. If length
    is omitted or if there are fewer than length characters to the right of
    the start character, the MID$ function returns all characters to the right
    of the start character.

    If start is greater than the number of characters in stringexpression,
    MID$ returns a null string.

    Use the LEN function to find the number of characters in stringexpression.

■ See Also

    LEFT$, LEN, MID$ Statement, RIGHT$

■ Example

    The following program converts a binary number to a decimal number. Digits
    are extracted from the binary number (input as a string) using MID$.

    INPUT "Binary number = ",Binary$   'Input binary number as
                                        'string.
    Length = LEN(Binary$)              'Get length of string.
    Decimal = 0

    FOR K = 1 TO Length
        'Get individual digits from string, from left to right.
        Digit$ = MID$(Binary$,K,1)
        'Test for valid binary digit.
        IF Digit$="0" OR Digit$="1" THEN
        'Convert digit characters to numbers.
        Decimal = 2*Decimal + VAL(Digit$)
        ELSE
        PRINT "Error--invalid binary digit: ";Digit$
        EXIT FOR
        END IF
    NEXT
    PRINT "Decimal number =" Decimal

■ Output

    Binary number = 10110
    Decimal number = 22


────────────────────────────────────────────────────────────────────────────
MID$ Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Replaces a portion of a string variable with another string

■ Syntax

    MID$(stringvariable,start«,length»)=stringexpression

■ Remarks

    The MID$ statement has the following arguments:

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    stringvariable           The string variable being modified.

    start                    A numeric expression giving the position in
                            stringvariable where the replacement starts.

    length                   The length of the string being replaced. The
                            length is a numeric expression.

    stringexpression         The string expression that replaces part of the
                            stringvariable.
    ──────────────────────────────────────────────────────────────────────────

    The arguments start and length are integer expressions. The argument
    stringvariable is a string variable, but stringexpression can be a string
    variable, a string constant, or a string expression.

    The optional length refers to the number of characters from the argument
    stringexpression that are used in the replacement. If length is omitted,
    all of stringexpression is used. However, regardless of whether length is
    omitted or included, the replacement of characters never goes beyond the
    original length of stringvariable.

■ See Also

    MID$ Function

■ Example

    The following example uses the MID$ statement to get characters from a
    string:

    Test$ = "Paris, France"
    PRINT Test$
    MID$(Test$,8)="Texas "
    PRINT Test$

■ Output

    Paris, France
    Paris, Texas


────────────────────────────────────────────────────────────────────────────
MKDIR Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Creates a new directory

■ Syntax

    MKDIR pathname

■ Remarks

    The pathname is a string expression specifying the name of the directory
    to be created. The pathname must be a string of less than 128 characters.

    The MKDIR statement works like the DOS command MKDIR; the syntax in BASIC
    cannot, however, be shortened to MD, as in DOS.

■ See Also

    CHDIR, RMDIR

■ Example

    The following fragment creates a new directory (if the directory does not
    exist) and copies files into that directory:

    ON ERROR GOTO Errorhandler
    PRINT "This program creates a new directory named MONTHS"
    PRINT "in this directory, then creates files in that directory"
    MKDIR "MONTHS"
    DO
        INPUT "Filename"; File$
        IF File$ = "" THEN END
        OPEN "MONTHS\" + File$ FOR OUTPUT AS #1
        .
        .
        .
        CLOSE #1
    LOOP

    Errorhandler:
        'Error 75 means MONTHS directory already exists
        IF ERR = 75 THEN RESUME NEXT
        ON ERROR GOTO 0


────────────────────────────────────────────────────────────────────────────
MKSMBF$, MKDMBF$ Functions
────────────────────────────────────────────────────────────────────────────

■ Action

    Converts an IEEE-format number to a string containing a Microsoft Binary
    format number.

■ Syntax

    MKSMBF$(single-precision-expression)
    MKDMBF$(double-precision-expression)

■ Remarks

    These functions are used to write real numbers to random-access files
    using Microsoft Binary format. They are particularly useful for
    maintaining data files created with older versions of BASIC.

    The MKSMBF$ and MKDMBF$ functions convert real numbers in IEEE-format to
    strings so they can be written to the random-access file.

    To write a real number to a random-access file in Microsoft Binary format,
    convert the number to a string using MKSMBF$ (for a single-precision
    number) or MKDMBF$ (for a double-precision number). Then store the result
    in the corresponding field (defined in the FIELD statement) and write the
    record to the file using the PUT statement.

■ Example

    The following example uses MKSMBF$ to store real values in a file as
    Microsoft Binary format numbers:

    ' Read a name and a test score from the console.
    ' Store as a record in a random-access file.
    ' Scores are written out as
    ' Microsoft Binary format single-precision values.

    TYPE Buffer
        NameField AS STRING * 20
        ScoreField AS STRING * 4
    END TYPE

    DIM RecBuffer AS Buffer
    OPEN "TESTDAT.DAT" FOR RANDOM AS #1 LEN=LEN(RecBuffer)

    PRINT "Enter names and scores, one name and score per line."
    PRINT "Enter END, 0 to end input."

    INPUT NameIn$, Score

    I=0

    ' Read pairs of names and scores from the console
    ' until the name is END.

    DO WHILE UCASE$(NameIn$) <> "END"
        I=I+1
        RecBuffer.NameField=NameIn$

    ' Convert the score to a string.
        RecBuffer.ScoreField=MKSMBF$(Score)
        PUT #1,I,RecBuffer
        INPUT NameIn$, Score
    LOOP

    PRINT I;" records written."

    CLOSE #1


────────────────────────────────────────────────────────────────────────────
MKD$, MKI$, MKL$, MKS$ Functions
────────────────────────────────────────────────────────────────────────────

■ Action

    Converts numeric values to string values

■ Syntax

    MKI$(integerexpression)
    MKS$(single-precision-expression)
    MKL$(long-integer-expression)
    MKD$(double-precision-expression)

■ Remarks

    The MKI$, MKS$, MKL$, and MKD$ functions are used with FIELD and PUT
    statements to write real numbers to a random-access file. The functions
    take numeric expressions and convert them to strings that can be stored in
    the strings defined in the FIELD statement. The functions are the inverse
    of CVI, CVS, CVL, and CVD.

    Function                 Description
    ──────────────────────────────────────────────────────────────────────────
    MKI$                     Converts an integer to a two-byte string

    MKS$                     Converts a single-precision value to a four-byte
                            string

    MKL$                     Converts a long-integer value to a four-byte
                            string

    MKD$                     Converts a double-precision value to an
                            eight-byte string
    ──────────────────────────────────────────────────────────────────────────

────────────────────────────────────────────────────────────────────────────
NOTE
    BASIC record variables provide a more efficient and convenient way of
    reading and writing random-access files. See Chapter 3, "File and Device
    I/O," in Programming in BASIC for a discussion of the new method.
────────────────────────────────────────────────────────────────────────────

■ See Also

    CVI, CVS, CVL, CVD; FIELD; PUT

■ Example

    See the example for the CVI, CVS, CVL, CVD statements.


────────────────────────────────────────────────────────────────────────────
NAME Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Changes the name of a disk file or directory

■ Syntax

    NAME oldfilename AS newfilename

■ Remarks

    The NAME statement is similar to the DOS RENAME command. NAME can move a
    file from one directory to another but cannot move a directory.

    The arguments oldfilename and newfilename are string expressions each of
    which contains a file or directory name and an optional path. If the path
    in newfilename is different from the path in oldfilename, the NAME
    statement changes the pathname as well as renames the file as indicated.

    A file named oldfilename must exist and the newfilename must not be in
    use. Both files must be on the same drive. Using NAME with different drive
    designations in the old and new file names produces an error message that
    reads Rename across disks.

    After a NAME statement, the file or directory exists on the same disk, in
    the same disk space, but with the new name.

    Using NAME on an open file causes a run-time error message reading File
    already open. You must close an open file before renaming it.

■ Examples

    The following statements show NAME used with and without a path
    specification:

    'Changes the name of file ACCTS to LEDGER.
    NAME "ACCTS" AS "LEDGER"

    'Moves file CLIENTS from directory X to directory \XYZ\P.
    NAME "\X\CLIENTS" AS "\XYZ\P\CLIENTS"


────────────────────────────────────────────────────────────────────────────
OCT$ Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns a string representing the octal value of the numeric argument

■ Syntax

    OCT$(numeric-expression)

■ Remarks

    The numeric-expression may be of any type. The numeric-expression is
    rounded to an integer or long integer before the OCT$ function evaluates
    it.

■ See Also

    HEX$

■ Example

    The following line prints the octal representation of 24:

    PRINT OCT$(24)

■ Output

    30


────────────────────────────────────────────────────────────────────────────
ON event Statements
────────────────────────────────────────────────────────────────────────────

■ Action

    Indicates the first line of an event-trapping subroutine

■ Syntax

    ON event GOSUB {linenumber | linelabel }

■ Remarks

    The ON event statement lets you specify a subroutine that is executed
    whenever an event occurs on a specified device. The following list
    describes the parts of the statement:

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    event                    Specifies the event that causes a branch to the
                            event-trapping subroutine. An event is a
                            condition on a specific device. See below for
                            more information about specific devices.

    linenumber linelabel     The number or label of the first line in the
                            event-trapping subroutine. This line must be in
                            the module-level code.
    ──────────────────────────────────────────────────────────────────────────

    A linenumber of 0 disables event trapping and does not specify line 0 as
    the start of the subroutine.

    The following list describes the events that can be trapped:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Event                    Description
    ──────────────────────────────────────────────────────────────────────────
    COM(n)                   Branches to the subroutine when characters are
                            received at a communications port. The integer
                            expression n indicates one of the serial ports,
                            either 1 or 2.

    KEY(n)                   Branches to the subroutine when a specified key
                            is pressed. The integer expression n is the
                            number of a function key, direction key, or
                            user-defined key. See Appendix A, "Keyboard Scan
                            Codes and ASCII Character Codes," and the KEY
                            statement for more information about these
                            values.

    PEN                      Branches to the subroutine when a lightpen is
                            activated.
    Event                    Description
    ──────────────────────────────────────────────────────────────────────────
                            activated.

    PLAY(queuelimit)         Branches when the number of notes in the music
                            buffer goes from queuelimit to queuelimit-1. The
                            value of queuelimit is an integer expression from
                            1 to 32.

                            A PLAY event-trapping subroutine can be used with
                            a PLAY statement to play music in the background
                            while a program is running.

    STRIG(n)                 Branches to the event-trapping subroutine when a
                            joystick trigger is pressed. The integer
                            expression n is the joystick trigger number: 0
                            for the lower button and 4 for the upper button
                            on the first joystick; 2 for the lower button and
                            6 for the upper button on the second joystick.

    TIMER(n)                 Branches to the subroutine when n seconds have
    Event                    Description
    ──────────────────────────────────────────────────────────────────────────
    TIMER(n)                 Branches to the subroutine when n seconds have
                            passed. The integer expression n is in the range
                            1 to 86,400 (1 second to 24 hours).
    ──────────────────────────────────────────────────────────────────────────


    The ON event statement only specifies the start of an event-trapping
    subroutine. Another set of statements determines whether or not the
    subroutine is called. This set of statements turns event trapping on or
    off and determines how events are handled when trapping is off. The
    following list describes these statements in a general way. See the
    entries for particular statements for more specific information.

    Event                    Description
    ──────────────────────────────────────────────────────────────────────────
    event ON                 Enables event trapping. Event trapping occurs
                            only after an event ON statement is executed.

    event OFF                Disables event trapping. No trapping takes place
                            until the execution of another event ON
                            statement. Events occurring while trapping is off
                            are ignored.

    event STOP               Inhibits event trapping so no trapping takes
                            place until an event ON statement is executed.
                            Events occurring while trapping is inhibited are
                            remembered and processed when an event ON
                            statement is executed.
    ──────────────────────────────────────────────────────────────────────────

    When an event trap occurs (the subroutine is called), BASIC performs an
    automatic event STOP that prevents recursive traps. The RETURN from the
    trapping subroutine automatically performs an event ON statement unless an
    explicit event OFF is performed inside the subroutine.

────────────────────────────────────────────────────────────────────────────
NOTE
    Because of the implicit event STOP and event ON statements, the events
    during execution of the trapping subroutine are remembered and processed
    when the trapping subroutine ends.
────────────────────────────────────────────────────────────────────────────

    The RETURN linenumber or RETURN linelabel forms of RETURN can be used to
    return to a specific line number from the trapping subroutine. Use this
    type of return with care, however, because any other GOSUB, WHILE, or FOR
    statements active at the time of the trap remain active. This may produce
    error messages such as NEXT without FOR. In addition, if an event occurs
    in a procedure, a RETURN linenumber or RETURN linelabel statement cannot
    get back into the procedure──the line number or label must be in the
    module-level code.

    The next three sections contain additional information about the ON COM,
    ON KEY, and ON PLAY statements.

    USING ON COM

    If your program receives data using an asynchronous communications
    adapter, the BASIC command-line option /C can be used to set the size of
    the data buffer.

    USING ON KEY

    Keys are processed in the following order:

    1. The line printer's echo-toggle key is processed first. Making this key
        a user-defined key trap does not prevent characters from being echoed
        to the line printer when pressed.

    2. Function keys and the cursor-direction keys are examined next. Defining
        a FUNCTION key or DIRECTION key as a user-defined key trap has no
        effect because these keys are predefined.

    3. Finally, the user-defined keys are examined.

    The ON KEY statement can trap any key, including BREAK or system reset.
    This makes it possible to prevent accidentally breaking out of a program
    or rebooting the machine.

────────────────────────────────────────────────────────────────────────────
NOTE
    When a key is trapped, the key event is destroyed. You cannot subsequently
    use INPUT or INKEY$ statements to find out which key caused the trap.
    Because there is no way to know which key press caused the branch to the
    trap, you must set up a subroutine for each key if you want to assign
    different functions to particular keys.
────────────────────────────────────────────────────────────────────────────

    USING ON PLAY

    The following three rules apply to the use of ON PLAY:

    1. A play event trap occurs only when music is playing in the background.
        Play event traps do not occur when music is running in the foreground.

    2. A play event trap does not occur if the background music queue has
        already gone from having queuelimit to queuelimit-1 notes when a PLAY
        ON is executed.

    3. If queuelimit is a large number, event traps may occur often enough to
        slow down the program.

■ Differences From Basica

    If you use BC from the DOS prompt, you must use /V or /W if a program
    contains ON event statements to allow the compiler to function correctly
    when event-trapping subroutines are included in a program. BASICA does not
    require additional options.

■ See Also

    COM, KEY (n), PEN ON, PLAY ON, RETURN, STRIG ON, TIMER ON

■ Examples

    The following example plays continuous music by calling an event-handling
    subroutine whenever the music buffer goes from three to two notes:

    '  Call subroutine Background when the music buffer goes from
    '  3 to 2 notes.
    ON PLAY(3) GOSUB Background
    '  Turn on event trapping for PLAY.
    PLAY ON

    '  Define a string containing the melody.
    Lizzie$="o3 L8 E D+ E D+ E o2 B o3 D C L2 o2 A"
    '  Play the melody for the first time.
    PLAY "MB X" + VARPTR$(Lizzie$)

    '  Continue until a key is pressed.
    LOCATE 2,1 : PRINT "Press any key to stop.";
    DO WHILE INKEY$=""
    LOOP

    END

    ' PLAY event-handling subroutine.
    Background:
        ' Increment and print a counter each time.
        Count% = Count% + 1
        LOCATE 1,1 : PRINT "Background called ";Count%;"time(s)";
        ' Execute another PLAY to fill the buffer.
        PLAY "MB X" + VARPTR$(Lizzie$)
        RETURN

    The following example draws a polygon every three seconds with a random
    shape (three to seven sides), size, and location:

    SCREEN 1
    DEFINT A-Z
    DIM X(6), Y(6)
    TIMER ON            'Enable timer event trapping.
    ON TIMER(3) GOSUB Drawpoly    'Draw a new polygon every
                                'three seconds.
    PRINT "Press any key to end program"
    INPUT "Press <RETURN> to start",Test$

    DO
    LOOP WHILE INKEY$=""     'End program if any key pressed.

    END

    Drawpoly:
        CLS            'Erase old polygon.
        N = INT(5*RND + 2)      'N is random number from 2 to 6.
        FOR I = 0 TO N
        X(I) = INT(RND*319)   'Get coordinates of vertices of
        Y(I) = INT(RND*199)   'polygon.
        NEXT
        PSET (X(N),Y(N))
        FOR I = 0 TO N
        LINE -(X(I),Y(I)),2   'Draw new polygon.
        NEXT
        RETURN


────────────────────────────────────────────────────────────────────────────
ON ERROR Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Enables error handling and specifies the first line of the error-handling
    routine

■ Syntax

    ON ERROR GOTO line

■ Remarks

    The line argument is the line number or line label of the first line in
    the error-handling routine. This line must appear in module-level code.

    If line cannot be found in the module where the error occurred, or if
    there is no ON ERROR GOTO statement, a backward search is made through the
    modules that invoked the module with the error. If an active error handler
    is found, it is used. If no active error handler is found, an error
    message is printed and program execution halts. The specific error message
    depends on the type of error.

    Only modules in the invocation path are searched. Modules outside the path
    are not searched, even if there is no active error handler in the search
    path.

    A line number of 0 disables error handling. It does not specify line 0 as
    the start of the error-handling code, even if the program contains a line
    numbered 0. Subsequent errors print an error message and halt the program.
    Once error handling is enabled, any error that can be trapped causes a
    jump to the specified error-handling routine.

    Inside an error handler, executing an ON ERROR statement with a line
    number of 0 halts program execution and prints the error message for the
    error that caused the trap. This is a convenient way to halt a program in
    response to errors that cannot be processed by the error-handling routine.

    Note that an error-handling routine is not a SUB or FUNCTION procedure or
    a DEF FN function. An error-handling routine is a module-level block of
    code marked by a line label or line number.

────────────────────────────────────────────────────────────────────────────
NOTE
    Errors occurring within an error-handling routine are not trapped. These
    errors halt program execution after printing an error message.
────────────────────────────────────────────────────────────────────────────

■ Differences From Basica

    Compiling from the BC command line requires additional options when you
    use ON ERROR GOTO. BASICA does not require any additional options. If a
    program contains ON ERROR GOTO or RESUME linenumber statements, you must
    use the On Error /E compile option when compiling from the BC command
    line. If a program contains the statements RESUME, RESUME NEXT, or RESUME
    0, you must also use the Resume Next /X compile option when compiling from
    the command line. No compile options are required when compiling within
    the QuickBASIC environment.

■ See Also

    ERR, ERL; ERROR; RESUME

■ Example

    The following program gets a file name from the user and displays the file
    on the screen. If the file cannot be opened, an error-handling routine
    traps the error and starts the program again at the prompt for the file
    name.

    DEFINT A-Z

    ' Establish the error-handling routine.
    ON ERROR GOTO ErrorHandler

    CLS

    ' Get a file name.
    INPUT "Enter the file to display: ",filename$
    ' Open the file.
    OPEN filename$ FOR INPUT AS #1

    ' Display the file on the screen.
    DO WHILE NOT EOF(1)
        LINE INPUT #1, aline$
        PRINT aline$
    LOOP

    END

    ' Error handling routine handles only "Bad file name,"
    ' aborts on any other error.

    CONST BADFILENAME=64

    ErrorHandler:
        IF ERR=BADFILENAME THEN
        ' Get another file name.
        PRINT "File "; UCASE$(filename$); " not found."
        INPUT "Enter the file to display: ",filename$
        RESUME
        ELSE
        ' Some other error, so print message and abort.
        PRINT "Unrecoverable error--";ERR
        ON ERROR GOTO 0
        END IF


────────────────────────────────────────────────────────────────────────────
ON...GOSUB, ON...GOTO Statements
────────────────────────────────────────────────────────────────────────────

■ Action

    Branches to one of several specified lines, depending on the value of an
    expression

■ Syntax 1

    ON expression GOSUB {line-number-list | line-label-list }

■ Syntax 2

    ON expression GOTO {line-number-list | line-label-list }

■ Remarks

    The expression argument can be any numeric expression (expression is
    rounded to an integer before the ON...GOSUB or ON...GOTO is evaluated).
    The line-number-list or line-label-list consists of a list of line numbers
    or line labels, separated by commas. The value of expression determines
    which line the program branches to. For example, if the value is 3, the
    third line specified in the list is the destination of the branch.

    The value of expression should be greater than or equal to 1 and less than
    or equal to the number of items in the list. If the value falls outside
    this range, one of the following results occurs:

    Value                                            Result
    ──────────────────────────────────────────────────────────────────────────
    Number equal to 0 or greater than number of      Control drops to the next
    items in list                                    BASIC statement.

    Negative number or a number greater than 255     An error message appears
                                                    that reads Illegal
                                                    function call.
    ──────────────────────────────────────────────────────────────────────────

    You may mix line numbers and labels in the same list.

────────────────────────────────────────────────────────────────────────────
NOTE
    The ON...GOTO statement accepts a maximum of 60 line labels or line
    numbers. The SELECT CASE statement provides a more powerful, convenient,
    and flexible way to do multiple branches.
────────────────────────────────────────────────────────────────────────────

■ See Also

    GOSUB, RETURN, SELECT CASE

■ Example

    The following program fragment causes program control to branch to one of
    the four subroutines listed, depending on the value of Chval:

    DO
        CLS
        PRINT "1) Display attendance at workshops."
        PRINT "2) Calculate total registration fees paid."
        PRINT "3) Print mailing list."
        PRINT "4) End program."
        PRINT : PRINT "What is your choice?"
        DO
            Ch$=INKEY$
        LOOP WHILE Ch$=""
        Chval = VAL(Ch$)
        IF Chval > 0 AND Chval < 5 THEN
            ON Chval GOSUB Shop, Fees, Mailer, Progend
        END IF
    LOOP
    END
    .
    .
    .


────────────────────────────────────────────────────────────────────────────
ON UEVENT GOSUB Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Defines the event-handler for a user-defined event

■ Syntax

    ON UEVENT GOSUB { linenumber | linelabel }

■ Remarks

    The linenumber or linelabel argument is the number or label of the first
    line in the event-handling routine. ON UEVENT GOSUB lets your program
    branch to an event-handling routine when a user-defined event occurs. The
    event is usually a hardware interrupt.

    This gives user-defined events one of the features enjoyed by the COM,
    KEY, and other events in BASIC. Once these events have been defined with
    an ON event statement, they act like interrupts. The program does not need
    to poll for the event.

    Likewise, once ON UEVENT GOSUB and UEVENT ON have been executed, the
    user-defined event automatically triggers execution of the BASIC routine
    to handle it. The program does not have to poll.

    At least two (and sometimes three) pieces of code are needed to set up a
    user-defined event. The first is the interrupt service routine. The second
    is an initialization routine to insert the address of the service routine
    into the interrupt vector table. The third is the routine your BASIC
    program calls to retrieve the data (if any) collected by the interrupt
    service routine.

    If the initialization routine "steals" an interrupt used by another
    service routine, the original address must be restored before your program
    terminates.

    These routines are usually written in assembly language. However, any
    language whose compiler can generate interrupt service routines and whose
    object code can be linked with BASIC may be used.

    There are four steps in creating a user-defined event:

    1. Write an event-handling routine and add it to your BASIC program.

    2. Execute the ON UEVENT GOSUB statement to specify the user-event
        handling routine.

    3. Execute the UEVENT ON statement to enable user-event trapping.

    4. Call the interrupt-initialization routine to insert the address of the
        interrupt service routine into the interrupt vector table.

    You're now ready for the interrupt when it occurs. The interrupt transfers
    execution to the interrupt service routine. The service routine collects
    and stores the data the user wants. It then calls SetUEvent.

    SetUEvent sets a flag checked by QuickBASIC before going to the next BASIC
    statement (or label if executing compiled code using /W instead of /V).
    When the flag is set, control transfers to the event-handling routine
    designated in ON UEVENT GOSUB.

    The SetUEvent procedure is a part of BASIC, and is automatically included
    in compiled applications or when running QuickBASIC with the /L
    command-line option. Your interrupt service routine must call SetUEvent;
    it is the only way to alert your program that the event has occurred. You
    can call SetUEvent from any language, not just from assembly language.

    SetUEvent is not a function; it cannot return a value to BASIC. If you
    wish to return a value, you must write a function for your BASIC program
    to call. (It would usually be called by your event-handling routine.) This
    function must be described in a DECLARE statement so your BASIC program
    can find and use it.

    Although ON UEVENT GOSUB ties an event-handling routine to a user-defined
    event, it does not enable the event trap. The UEVENT statement is used to
    enable, disable, and suspend user-defined event trapping.

■ See Also

    UEVENT

■ Example

    The following example illustrates the use of ON UEVENT GOSUB:

    DECLARE SUB test (a)
    ON UEVENT GOSUB Event1
    UEVENT ON
    INPUT "Enter a number";a
    CALL test(a)
    END
    Event1:
    PRINT "Got to the event handler"
    RETURN
    SUB test(a)
    IF a=5 THEN CALL SetUEvent
    END SUB


────────────────────────────────────────────────────────────────────────────
OPEN Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Enables I/O to a file or device

■ Syntax 1

    OPEN file «FOR mode1» «ACCESS access» «lock» AS
    «#» filenum «LEN=reclen»

■ Syntax 2

    OPEN  mode2,«#»filenum, file «,reclen»

■ Remarks

    The file is a string expression that specifies an optional device,
    followed by a file name or path name conforming to the DOS file-naming
    conventions.

    You must open a file before any I/O operation can be performed on it. OPEN
    allocates a buffer for I/O to the file or device and determines the mode
    of access used with the buffer.

    SYNTAX 1

    In the first syntax, mode1 is one of the following:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Mode                     Description
    ──────────────────────────────────────────────────────────────────────────
    OUTPUT                   Specifies sequential output mode.

    Mode                     Description
    ──────────────────────────────────────────────────────────────────────────

    INPUT                    Specifies sequential input mode.

    APPEND                   Specifies sequential output mode and sets the
                            file pointer to the end of file and the record
                            number to the last record of the file. A PRINT #
                            or WRITE # statement then extends (appends to)
                            the file.

    RANDOM                   Specifies random-access file mode, the default
                            mode. In RANDOM mode, if no ACCESS clause is
                            present, three attempts are made to open the file
                            when the OPEN statement is executed. Access is
                            attempted in the following order:

                            1. Read/write

                            2. Write-only

    Mode                     Description
    ──────────────────────────────────────────────────────────────────────────

                            3. Read-only

    BINARY                   Specifies binary file mode. In binary mode, you
                            may read or write information to any byte
                            position in the file using GET and PUT.
                            In binary mode, if no ACCESS clause is present,
                            three attempts are made to open the file. The
                            attempts follow the same order as those for
                            RANDOM files.
    ──────────────────────────────────────────────────────────────────────────


    If mode1 is omitted, the default random-access mode is assumed.

    The access expression specifies the operation performed on the opened
    file. If the file is already opened by another process and the specified
    type of access is not allowed, the OPEN fails and an error message is
    generated that reads Permission denied. The ACCESS clause works in an OPEN
    statement only if you are using a version of DOS that supports networking
    (DOS Versions 3.0 or later). In addition, you must run the SHARE.EXE
    program (or the network startup program must run it) to perform any
    locking operation. If ACCESS is used with OPEN, earlier versions of DOS
    return an error message that reads Advanced feature unavailable.

    The access argument can be one of the following:

    Access Type              Description
    ──────────────────────────────────────────────────────────────────────────
    READ                     Opens the file for reading only.

    WRITE                    Opens the file for writing only.

    READ WRITE               Opens the file for both reading and writing. This
                            mode is valid only for RANDOM and BINARY files
                            and files opened for APPEND.
    ──────────────────────────────────────────────────────────────────────────

    The lock clause works in a multiprocessing environment to restrict access
    by other processes to an open file. The lock types are as follows:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Lock Type                Description
    ──────────────────────────────────────────────────────────────────────────
    Default                  If locktype is not specified, the file may be
                            opened for reading and writing any number of
                            times by this process, but other processes are
                            denied access to the file while it is opened.

    SHARED                   Any process on any machine may read from or write
                            to this file. Do not confuse the SHARED lock type
                            with the SHARED statement or the SHARED attribute
                            appearing in other statements.

    LOCK READ                No other process is granted read access to this
                            file. This access is granted only if no other
                            process has a previous READ access to the file.

    LOCK WRITE               No other process is granted write access to this
                            file. This lock is granted only if no other
                            process has a previous WRITE access to the file.
    Lock Type                Description
    ──────────────────────────────────────────────────────────────────────────
                            process has a previous WRITE access to the file.

    LOCK READ WRITE          No other process is granted either read or write
                            access to this file. This access is granted only
                            if READ or WRITE access has not already been
                            granted to another process, or if a LOCK READ or
                            LOCK WRITE is not already in place.
    ──────────────────────────────────────────────────────────────────────────


    When the OPEN is restricted by a previous process, it generates error 70,
    Permission denied, under DOS.

    The filenum (file number) argument is an integer expression whose value is
    between 1 and 255. When an OPEN is executed, the file number is associated
    with the file as long as it is open. Other I/O statements may use the
    number to refer to the file.

    The reclen (record length) argument is an integer expression that, if
    included, sets the record length (number of characters in one record) for
    random-access files. For sequential files, the default length for records
    is 512 bytes; for random-access files, the default is 128 bytes. The value
    of reclen cannot exceed 32,767 bytes. If the file mode is binary, then the
    LEN clause is ignored.

    For sequential files, reclen need not correspond to an individual record
    size, since a sequential file may have records of different sizes. When
    used to open a sequential file, reclen specifies the number of characters
    to be loaded into the buffer before the buffer is written to, or read
    from, the disk. A larger buffer means more room taken from BASIC, but
    faster file I/O. A smaller buffer means more room in memory for BASIC, but
    slower I/O. The default buffer size is 512 bytes.

    SYNTAX 2

    In the second form of the OPEN syntax, mode2 is a string expression the
    first character of which must be one of the following:

    Mode                     Description
    ──────────────────────────────────────────────────────────────────────────
    O                        Specifies sequential output mode.

    I                        Specifies sequential input mode.

    R                        Specifies random-access file input/output mode.

    B                        Specifies binary file mode.

    A                        Specifies sequential output mode and sets the
                            file pointer to the end of the file and the
                            record number to the last record of the file. A
                            PRINT # or WRITE # statement extends (appends to)
                            the file.
    ──────────────────────────────────────────────────────────────────────────

────────────────────────────────────────────────────────────────────────────
NOTE
    The second form of the OPEN syntax does not support any of the access and
    file-sharing options found in the first syntax and is supported for
    compatibility with programs written in earlier versions of BASIC.
────────────────────────────────────────────────────────────────────────────

    The following devices are supported by BASIC and can be named and opened
    with the file argument: KYBD:, SCRN:, COMn:, LPTn:, CONS:.

    The BASIC file I/O system allows you to take advantage of user-installed
    devices. (See your DOS manual for information on character devices.)

    Character devices are opened and used in the same manner as disk files.
    However, characters are not buffered by BASIC as they are for disk files.
    The record length for the device files is set to one.

    BASIC only sends a carriage return at the end of a line. If the device
    requires a line feed, the driver must provide it. When writing device
    drivers, keep in mind that other BASIC users will want to read and write
    control information. The writing and reading of device-control data is
    handled by the IOCTL statement and IOCTL$ function.

    None of the BASIC devices directly supports binary mode. However, the line
    printer devices (LPT1:, LPT2:) can be opened in binary mode by adding the
    BIN keyword:

    OPEN "LPT1:BIN" FOR OUTPUT AS #1

    Opening a printer in BIN mode eliminates printing a carriage return at the
    end of a line.

────────────────────────────────────────────────────────────────────────────
NOTE
    In INPUT, RANDOM, and BINARY modes you can open a file under a different
    file number without first closing the file. In OUTPUT or APPEND mode you
    must close a file before opening it with a different file number.
────────────────────────────────────────────────────────────────────────────

■ See Also

    FREEFILE

■ Examples

    The following statement opens MAILING.DAT as file number 1 and allows data
    to be added without destroying what is already in MAILING.DAT:

    OPEN "MAILING.DAT" FOR APPEND AS #1

    If you wrote and installed a device driver named ROBOT, then the OPEN
    statement might appear as

    OPEN "\DEV\ROBOT" FOR OUTPUT AS #1

    To open the printer for output, you could use either of the following two
    lines. (The first line uses the BASIC device LPT1: while the second line
    uses the DOS device LPT1.)

    OPEN "LPT1:" FOR OUTPUT AS #1

    OPEN "LPT1" FOR OUTPUT AS #1

    The following statement opens the file RECORDS in random-access mode, for
    reading only. The statement locks the file for writing, but allows reading
    by other processes while the OPEN is in effect.

    OPEN "RECORDS" FOR RANDOM ACCESS READ LOCK WRITE AS #1

    The following example opens the file named INVEN for input as file number
    2:

    OPEN "I",2,"INVEN"


────────────────────────────────────────────────────────────────────────────
OPEN COM Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Opens and initializes a communications channel for I/O

■ Syntax

    OPEN "COMn: optlist1 optlist2" «FOR mode» AS «#»filenum «LEN=reclen»

■ Remarks

    COMn: is the name of the device to be opened. The n argument is the number
    of a legal communications device, such as COM1: or COM2:. The first list
    of options, optlist1, has the following form:

    «speed»«,«parity» «,«data»«,«stop»»»»

    The following list describes the possible options:

    Option                   Description
    ──────────────────────────────────────────────────────────────────────────
    speed                    The "baud" rate (baud means "bits per second") of
                            the device to be opened. Valid speeds are 75,
                            110, 150, 300, 600, 1200, 1800, 2400, 4800, and
                            9600. The default is 300 bps.

    parity                   The parity of the device to be opened. Valid
                            entries for parity are: N (none), E (even), O
                            (odd), S (space), or M (mark).

    data                     The number of data bits per byte. Valid entries
                            are 5, 6, 7, or 8.

    stop                     The number of stop bits. Valid entries are 1,
                            1.5, or 2.
    ──────────────────────────────────────────────────────────────────────────

    Options from this list must be entered in the order shown; moreover, if
    any options from optlist2 are chosen, comma placeholders must still be
    used even if none of the options from optlist1 are chosen. For example:

    OPEN "COM1: ,,,,CD1500" FOR INPUT AS #1

    If you set the data bits per byte to eight, you must specify no parity
    (N). Because QuickBASIC uses complete bytes (eight bits) for numbers, you
    must specify eight data bits when transmitting or receiving numeric data.

    The choices for optlist2 are described in the following list. The argument
    m is given in milliseconds; the default value for m is 1000.

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Option                   Description
    ──────────────────────────────────────────────────────────────────────────
    ASC                      Opens the device in ASCII mode. In ASCII mode,
    Option                   Description
    ──────────────────────────────────────────────────────────────────────────
    ASC                      Opens the device in ASCII mode. In ASCII mode,
                            tabs are expanded to spaces, carriage returns are
                            forced at end-of-line, and CTRL+Z is treated as
                            end-of-file. When the channel is closed, CTRL+Z
                            is sent over the RS-232 line.

    BIN                      Opens the device in binary mode. This option
                            supersedes the LF option. BIN is selected by
                            default unless ASC is specified.
                            In the BIN mode, tabs are not expanded to spaces,
                            a carriage return is not forced at the
                            end-of-line, and CTRL+Z is not treated as
                            end-of-file. When the channel is closed, CTRL+Z
                            will not be sent over the RS-232 line.

    CD«m»                    Controls the timeout on the Data Carrier Detect
                            line (DCD). If DCD is low for more than m
                            milliseconds, a device timeout occurs.

    Option                   Description
    ──────────────────────────────────────────────────────────────────────────

    CS«m»                    Controls the timeout on the Clear To Send line
                            (CTS). If CTS is low (there is no signal) for
                            more than m milliseconds, a device timeout
                            occurs.

    DS«m»                    Controls the timeout on the Data Set Ready line
                            (DSR). If DSR is low for more than m
                            milliseconds, a device timeout occurs.

    LF                       Allows communication files to be printed on a
                            serial line printer. When LF is specified, a
                            line-feed character (0AH) is automatically sent
                            after each carriage-return character (0DH). This
                            includes the carriage return sent as a result of
                            the width setting. Note that INPUT and LINE
                            INPUT, when used to read from a COM file that was
                            opened with the LF option, stop when they see a
                            carriage return, ignoring the line feed.
    Option                   Description
    ──────────────────────────────────────────────────────────────────────────
                            carriage return, ignoring the line feed.

    OP«m»                    Controls how long the statement waits for the
                            open to be successful. The parameter m is a value
                            in the range 0 to 65,535 representing the number
                            of milliseconds to wait for the communications
                            lines to become active. If OP is specified
                            without a value, the statement waits
                            indefinitely. If OP is omitted, OPEN COM waits
                            for ten times the maximum value of the CD or DS
                            timeout values.

    RB«n»                    Sets the size of the receive buffer to n bytes.
                            If n is omitted, or the option is omitted, the
                            current value is used. The current value can be
                            set by the /C option on the QuickBASIC or BC
                            command line. The default is 512 bytes. The
                            maximum size is 32,767 bytes.

    Option                   Description
    ──────────────────────────────────────────────────────────────────────────

    RS                       Suppresses detection of Request To Send (RTS).

    TB«n»                    Sets the size of the transmit buffer to n bytes.
                            If n is omitted, or the option is omitted, the
                            current value is used. The default size is 512
                            bytes.
    ──────────────────────────────────────────────────────────────────────────


    The options from the list above can be entered in any order, but they must
    be separated from one another by commas. For CS«m», DS«m», and CD«m», if
    there is no signal within m milliseconds, a timeout occurs. The value for
    m may range from 0 to 65,535, with 1000 as the default value. (The CD
    default is 0.) If m is equal to 0 for any of these options the option is
    ignored. The CTS line is checked whenever there is data in the transmit
    buffer if the CS option is specified. The DSR and DCD lines are
    continuously checked for timeouts if the corresponding options (DS, CD)
    are specified.

    The mode argument is one of the following string expressions:

    Mode                     Description
    ──────────────────────────────────────────────────────────────────────────
    OUTPUT                   Specifies sequential output mode
    INPUT                    Specifies sequential input mode
    RANDOM                   Specifies random-access mode
    ──────────────────────────────────────────────────────────────────────────

    If the mode expression is omitted, it is assumed to be random-access
    input/output. The filenum is the number used to open the file. The OPEN
    COM statement must be executed before a device can be used for
    communication using an RS-232 interface.

    If the device is opened in RANDOM mode, the LEN option specifies the
    length of an associated random-access buffer. The default value for length
    is 128. You can use any of the random-access I/O statements, such as GET
    and PUT, to treat the device as if it were a random-access file. The OPEN
    COM statement performs the following steps in opening a communications
    device:

    1. The communications buffers are allocated and interrupts are enabled.

    2. The Data Terminal Ready line (DTR) is set high.

    3. If either of the OP or DS options is nonzero, the statement waits up to
        the indicated time for the Data Set Ready line (DSR) to be high. If a
        timeout occurs, the process goes to step 6.

    4. The Request To Send line (RTS) is set high if the RS option is not
        specified.

    5. If either of the OP or CD options is nonzero, OPEN COM waits up to the
        indicated time for the Data Carrier Detect line (DCD) to be high. If a
        timeout occurs, the process goes to step 6. Otherwise, OPEN COM has
        succeeded.

    6. The open has failed due to a timeout. The process deallocates the
        buffers, disables interrupts, and clears all of the control lines.

────────────────────────────────────────────────────────────────────────────
NOTE
    Use a relatively large value for the OP option compared to the CS, DS, or
    CD options. If two programs are attempting to establish a communications
    link, they both need to attempt an OPEN during at least half of the time
    they are executing.
────────────────────────────────────────────────────────────────────────────

    Any syntax errors in the OPEN COM statement produce an error message that
    reads Bad file name.

■ Example

    The following program fragment opens communications channel 1 in
    random-access mode at a speed of 9600 baud, no parity bit, eight data
    bits, and one stop bit. Input/output will be in the binary mode. Other
    lines in the program can now access channel 1 as file number 2.

    OPEN "COM1:9600,N,8,1,BIN" AS 2


────────────────────────────────────────────────────────────────────────────
OPTION BASE Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Declares the default lower bound for array subscripts

■ Syntax

    OPTION BASE n

■ Remarks

    The OPTION BASE statement is never required. It is used to change the
    default lower bound for array subscripts.

    The value of n must be either 0 or 1. The default base is 0. If the
    following statement

    OPTION BASE 1

    is executed, the lowest value an array subscript can have is 1.

────────────────────────────────────────────────────────────────────────────
NOTE
    The TO clause in the DIM statement provides an easier, more flexible way
    to control the range of an array's subscripts. If the lower bound of an
    array subscript is not explicitly set, then OPTION BASE can be used to
    change the default lower bound to 1.
────────────────────────────────────────────────────────────────────────────

    The OPTION BASE statement can be used only once in a module (source file)
    and can only appear in the module-level code. An OPTION BASE statement
    must be used before any arrays are dimensioned.

    Chained programs may have an OPTION BASE statement if no arrays are passed
    in COMMON between them or if the specified base is identical in the
    chained programs. The chained-to program inherits the OPTION BASE value of
    the chaining program if OPTION BASE is omitted in the latter.

■ See Also

    DIM, LBOUND, REDIM

■ Example

    The following statement overrides the default value of zero, so the lowest
    value a subscript in an array can have in this program is 1:


    OPTION BASE 1
    DIM A(20)
    PRINT LBOUND(A), UBOUND(A)

■ Output

    1               20


────────────────────────────────────────────────────────────────────────────
OUT Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Sends a byte to a machine I/O port

■ Syntax

    OUT port, data

■ Remarks

    The following list describes the arguments of the OUT statement:

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    port                     The number of the port. The number must be an
                            integer expression in the range 0-65,535.

    data                     The data to be sent to the port. It must be an
                            integer expression in the range 0-255.
    ──────────────────────────────────────────────────────────────────────────

    The OUT and INP statements give a BASIC program direct control over the
    hardware in a system through the I/O ports. These statements must be used
    carefully because they directly manipulate the hardware.

■ See Also

    INP, WAIT

■ Example

    The following example uses OUT and INP to control the timer and speaker to
    produce a note. (This example is specific to the IBM PC and close
    compatibles and produces unpredictable results on other machines.)

    ' Play a scale using the speaker and timer.
    CONST WHOLE=5000!, QRTR=WHOLE/4.
    CONST C=523.0, D=587.33, E=659.26, F=698.46, G=783.99, A=880.00
    CONST B=987.77, C1=1046.50
    CALL Sounds(C,QRTR) : CALL Sounds(D,QRTR)
    CALL Sounds(E,QRTR) : CALL Sounds(F,QRTR)
    CALL Sounds(G,QRTR) : CALL Sounds(A,QRTR)
    CALL Sounds(B,QRTR) : CALL Sounds(C1,WHOLE)

    ' Use ports 66, 67, and 97 to control the timer and speaker
    ' to produce a sound.
    SUB Sounds (Freq!,Length!) STATIC

    ' Divide the clock frequency by the sound frequency to
    ' get the number of "clicks" the clock must produce.
        Clicks%=CINT(1193280!/Freq!)
        LoByte%=Clicks% AND &H00FF
        HiByte%=Clicks%\256
    ' Tell timer that data is coming.
        OUT 67,182
    ' Send the low byte followed by the high byte of the count.
        OUT 66,LoByte%
        OUT 66,HiByte%
    ' Turn the speaker on by setting bits 0 and 1 of the PPI chip.
    ' Get the current value, and turn the bits on.
        SpkrOn%=INP(97) OR &H03
        OUT 97,SpkrOn%
    ' Leave the speaker on for a while.
        FOR I!=1 TO Length! : NEXT I!
    ' Turn the speaker off.
        SpkrOff%=INP(97) AND &HFC
        OUT 97,SpkrOff%

    END SUB


────────────────────────────────────────────────────────────────────────────
PAINT Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Fills a graphics area with the color or pattern specified

■ Syntax

    PAINT «STEP» (x,y)«,«paint» «,«bordercolor» «,background»»»

■ Remarks

    The following list describes the parts of the PAINT statement:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
    STEP                     Defines coordinates to be relative to the most
                            recently plotted point. For example, if the last
                            point plotted were (10,10), then the coordinates
                            referred to by STEP (4,5) would be (4+10, 5+10)
                            or (14,15).

    (x,y)                    The coordinates where painting begins. The point
                            must be inside or outside a figure, not on the
                            border itself. If this point is inside, the
                            figure's interior is painted; if the point is on
                            the outside, the background is painted.

    paint                    A numeric or string expression. If paint is a
                            numeric expression, then the number must be a
                            valid color attribute. The corresponding color is
    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
                            valid color attribute. The corresponding color is
                            used to paint the area. If you do not specify
                            paint, the foreground color attribute is used.
                            (See the COLOR, PALETTE, and SCREEN statements
                            for discussions of valid colors, numbers, and
                            attributes.)

                            If the paint argument is a string expression,
                            then PAINT does "tiling," a process that paints a
                            pattern rather than a solid color. Tiling is
                            similar to "line styling," which creates dashed
                            lines rather than solid lines.

    bordercolor              A numeric expression identifying the color
                            attribute to use to paint the border of the
                            figure. When the border color is encountered,
                            painting of the current line stops. If the border
                            color is not specified, the paint argument is
                            used.
    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
                            used.

    background               A string value giving the "background tile slice"
                            to skip when checking for termination of the
                            boundary. Painting is terminated when adjacent
                            points display the paint color. Specifying a
                            background tile slice allows you to paint over an
                            already painted area. When you omit background
                            the default is CHR$ (0).
    ──────────────────────────────────────────────────────────────────────────


    Painting is complete when a line is painted without changing the color of
    any pixel, in other words, when the entire line is equal to the paint
    color. The PAINT command permits coordinates outside the screen or
    viewport.

    Tiling

    "Tiling" is the design of a PAINT pattern that is eight bits wide and up
    to 64 bytes long. In the tile string, each byte masks eight bits along the
    x-axis when putting down points. The syntax for constructing this tile
    mask is

    PAINT (x,y), CHR$(arg1)+CHR$(arg2)+...+CHR$(argn)

    The arguments to CHR$ are numbers between 0 and 255, represented in binary
    form across the x axis of the tile. There can be up to 64 of these CHR$
    elements; each generates an image not of the assigned character, but of
    the bit arrangement of the code for that character. For example, the
    decimal number 85 is binary 01010101; the graphic image line on a
    black-and-white screen generated by CHR$(85) is an eight-pixel line, with
    even-numbered points white and odd-numbered points black. That is, each
    bit equal to 1 turns the associated pixel on and each bit equal to 0 turns
    the associated bit off in a black-and-white system. The ASCII character
    CHR$(85), which is U, is not displayed in this case.

    When supplied, background defines the "background tile slice" to skip when
    checking for boundary termination. You cannot specify more than two
    consecutive bytes that match the tile string in the tile background slice.
    Specifying more than two consecutive bytes produces an error message that
    reads Illegal function call.

    Tiling can also be done to produce various patterns of different colors.
    See Chapter 5, "Graphics," in Programming in BASIC for a complete
    description of how to do tiling.

■ See Also

    CHR$, CIRCLE, DRAW, LINE, SCREEN

■ Example

    The following program draws a magenta fish with a cyan tail:

    CONST PI=3.1415926536
    CLS
    SCREEN 1

    CIRCLE (190,100),100,1,,,.3   'Outline fish body in cyan.
    CIRCLE (265,92),5,1,,,.7      'Outline fish eye in cyan.
    PAINT (190,100),2,1           'Fill in fish body with magenta.

    LINE (40,120)-STEP (0,-40),2  'Outline
    LINE -STEP (60,+20),2         '   tail in
    LINE -STEP (-60,+20),2        '      magenta.
    PAINT (50,100),1,2            'Paint tail cyan.

    CIRCLE (250,100),30,0,PI*3/4,PI* 5/4,1.5  'Draw
    gills in black.
    FOR Y = 90 TO 110 STEP 4
        LINE (40,Y)-(52,Y),0       'Draw comb in tail.
    NEXT


────────────────────────────────────────────────────────────────────────────
PALETTE, PALETTE USING Statements
────────────────────────────────────────────────────────────────────────────

■ Action

    Changes one or more of the colors in the palette

■ Syntax

    PALETTE «attribute,color»
    PALETTE USING array-name «(array-index)»

■ Remarks

    The PALETTE statement takes the following arguments:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    attribute                The palette attribute to be changed.

    color                    The display color number to be assigned to the
                            attribute. The color must be a long integer
                            expression for the IBM Video Graphics Array
                            adapter (VGA) and IBM Multicolor Graphics Array
                            adapter (MCGA) in screen modes 11 to 13. Integer
                            or long-integer expressions may be used with the
    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
                            or long-integer expressions may be used with the
                            IBM Enhanced Graphics Adapter (EGA).

    array-name               An array containing the color numbers to be
                            assigned to the attributes available in the
                            current screen mode. The VGA and MCGA adapters
                            require a long integer array in screen modes 11
                            to 13. With the EGA this can be either an integer
                            or long-integer array.

    array-index              The index of the first array element to use in
                            setting the palette.
    ──────────────────────────────────────────────────────────────────────────


    The PALETTE statement works only on systems equipped with the EGA, VGA, or
    MCGA adapters.

    The statement provides a way of mapping display colors (the actual binary
    values used by the adapter) to color attributes (a smaller set of values).
    All BASIC graphics statements such as CIRCLE, COLOR, DRAW, or LINE use
    color attributes rather than display-color values.

    When a program enters a screen mode, the attributes are set to a series of
    default color values. (See the SCREEN statement for a list of the default
    colors.) In the EGA, VGA, and MCGA adapters these default values have been
    selected so the display shows the same colors, even though the EGA uses
    different color values.

    With the palette statement you can assign different colors to the
    attributes, giving you greater control over the colors on the display. A
    PALETTE statement with no arguments sets the palette back to the default
    color values.

    When you execute a PALETTE statement with arguments, the adapter
    subsequently uses the display color (indicated by color) whenever the
    value attribute appears in a statement like DRAW or LINE that specifies a
    color. Changing the display color assigned to an attribute changes the
    color on the screen immediately.

    For example, assume that the current palette contains colors 0, 1, 2, and
    3 in the four attributes numbered 0, 1, 2, and 3. The DRAW statement

    DRAW "C3L100"

    selects attribute 3, and draws a line of 100 pixels using the display
    color associated with attribute 3, in this case also 3. If the statement

    PALETTE 3,2

    is executed, then the color associated with attribute 3 is changed to
    color 2. All text or graphics currently on the screen displayed using
    attribute 3 are instantaneously changed to color 2. Text or graphics
    subsequently displayed with attribute 3 are also displayed in color 2. The
    new palette of colors contains 0, 1, 2, and 2.

    With the USING option, all entries in the palette can be modified in one
    PALETTE statement. The array-name argument is the name of an integer or
    long-integer array and the array-index specifies the index of the first
    array element in the array-name to use in setting the palette. Each
    attribute in the palette is assigned a corresponding color from this
    array. The array must be dimensioned large enough to set all the palette
    entries after array-index. For example, if you are assigning colors to all
    16 attributes, and the index of the first array element that is given in
    your PALETTE USING statement is 5, then the array must be dimensioned to
    hold at least 20 elements (since the number of elements from 5-20,
    inclusive, is 16):

    DIM PAL%(20)
    .
    .
    .
    PALETTE USING PAL%(5)

    A color argument of -1 in the array leaves the attribute unchanged. All
    other negative numbers are invalid values for color.

    You can use the COLOR statement to set the default foreground color and
    the background display color. The foreground color argument specifies the
    way text characters appear on the display screen. Under a common initial
    palette setting, points colored with the attribute 0 appear black on the
    display screen. Using the PALETTE statement, you could, for example,
    change the mapping of attribute 0 from black to white. Table R.5 lists
    attribute and color ranges for various adapter types and screen modes.

    Table R.5   Screen Color and Attribute Ranges

╓┌─┌───────────┌────────────────────────┌───────────┌────────────┌───────────╖
    Screen      Monitor                              Attribute    Color
    Mode        Attached                 Adapter     Range        Range
    ──────────────────────────────────────────────────────────────────────────
    0           Monochrome               MDPA        0-15         N/A☼
                Monochrome               EGA         0-15         0-2
                Color                    CGA         0-15         N/A
                Color/Enhanced☼          EGA         0-15         0-63
                N/A                      VGA         0-15         0-63
                N/A                      MCGA        0-15         N/A
    1           Color                    CGA         0-3          N/A
                Color/Enhanced☼          EGA         0-3          0-15
                N/A                      VGA         0-3          0-15
                N/A                      MCGA        0-3          N/A
    2           Color                    CGA         0-1          N/A
                Color/Enhanced☼          EGA         0-1          0-15
    Screen      Monitor                              Attribute    Color
    Mode        Attached                 Adapter     Range        Range
    ──────────────────────────────────────────────────────────────────────────
                Color/Enhanced☼          EGA         0-1          0-15
                N/A                      VGA         0-1          0-15
                N/A                      MCGA        0-1          N/A
    7           Color/Enhanced☼          EGA         0-15         0-15
                N/A                      VGA         0-15         0-15
    8           Color/Enhanced☼          EGA         0-15         0-15
                N/A                      VGA         0-15         0-15
    9           Enhanced☼                EGA☼        0-3          0-63
                Enhanced☼                EGA☼        0-15         0-63
                N/A                      VGA         0-16         0-63
    10          Monochrome               EGA         0-3          0-8
                N/A                      VGA         0-3          0-8
    11          N/A                      VGA         0-1          0-262,143☼
                N/A                      MCGA        0-1          0-262,143☼
    12          N/A                      VGA         0-15         0-262,143☼
    13          N/A                      VGA         0-255        0-262,143☼
                N/A                      MCGA        0-255        0-262,143☼
    ──────────────────────────────────────────────────────────────────────────
    Screen      Monitor                              Attribute    Color
    Mode        Attached                 Adapter     Range        Range
    ──────────────────────────────────────────────────────────────────────────
    ──────────────────────────────────────────────────────────────────────────


    The VGA uses a different way of calculating color values from the EGA. To
    calculate a color value, select the intensities of red, green, and blue.
    The intensity of a color is a number from 0 (low intensity) to 63 (high
    intensity). Then use the following formula to calculate the actual color
    number:

    color number = 65536 * blue + 256 * green + red

    Because there are gaps in the range of color numbers, you should use the
    formula rather than just select a number.

    When used with the IBM Analog Monochrome Monitor, the VGA color values are
    converted to a gray-scale value by taking a weighted sum of the red, blue,
    and green intensities as follows:

    gray value = 11% blue + 59% green + 30% red

    For example if the blue, green, and red intensities are 45, 20, and 20,
    the gray value would be .11*45+.59*20+.30*20 or 22 (the fraction in the
    result is dropped).

    See the SCREEN statement for the list of colors available for various
    screen-mode, monitor, and graphics-adapter combinations.

────────────────────────────────────────────────────────────────────────────
NOTE
    Because of their wide range of colors, the VGA and MCGA adapters require a
    long-integer array in the PALETTE USING statement in screen modes 11 to
    13.
────────────────────────────────────────────────────────────────────────────

■ See Also

    CIRCLE, COLOR, DRAW, LINE, SCREEN

■ Examples

    The following lines show the different forms of the PALETTE and PALETTE
    USING statements:

    PALETTE 0,2          'Changes all points colored with attribute 0 to
                        'color 2.

    PALETTE USING A%(0)  'Changes each palette entry. Since the
                        'array is initialized to zero when it
                        'is first declared, all attributes are
                        'now mapped to display color zero. The
                        'screen will now appear as one single
                        'color. However, it will still be
                        'possible to execute BASIC statements.

    PALETTE              'Sets each palette entry to its appropriate
                        'initial display color. Actual initial colors
                        'depend on your screen-hardware configuration.


────────────────────────────────────────────────────────────────────────────
PCOPY Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Copies one screen page to another

■ Syntax

    PCOPY sourcepage, destinationpage

■ Remarks

    The sourcepage is an integer expression in the range 0 to n, where n is
    the maximum number of pages determined by the current video-memory size
    and the size per page for the current screen mode.

    The destinationpage has the same requirements as the sourcepage.

    See the SCREEN statement for more information about the number of pages
    available in different modes.

■ See Also

    CLEAR, SCREEN

■ Example

    The following example copies the contents of page 1 to page 2:

    PCOPY 1,2


────────────────────────────────────────────────────────────────────────────
PEEK Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the byte stored at a specified memory location

■ Syntax

    PEEK(address)

■ Remarks

    The returned value is an integer in the range 0-255. The argument address
    is a value in the range 0-65,535. The argument address is treated as the
    offset from the current default segment (as set by the DEF SEG statement).

    If the argument is a single- or double-precision floating-point value or a
    long integer, it is converted to a two-byte integer.

    The PEEK function complements the POKE statement.

■ See Also

    DEF SEG, POKE, VARPTR

■ Example

    See the example for DEF SEG.


────────────────────────────────────────────────────────────────────────────
PEN Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Reads the lightpen coordinates

■ Syntax

    PEN(n)

■ Remarks

    The argument n indicates what value is to be returned. It is a numeric
    expression in the range 0-9.

────────────────────────────────────────────────────────────────────────────
NOTE
    The PEN function does not work when the mouse driver is enabled because
    the mouse driver uses the PEN function's BIOS calls. Use mouse function 14
    to disable the driver's lightpen emulation. Mouse function 13 turns
    emulation back on. See your mouse manual for more information.
────────────────────────────────────────────────────────────────────────────

    The following list describes the values for n and the corresponding values
    returned by PEN:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Argument                 Value Returned
    ──────────────────────────────────────────────────────────────────────────
    0                        The most recent pen use: -1 if pen was down since
                            last poll, 0 if not

    1                        The x pixel coordinate where pen was last pressed

    2                        The y pixel coordinate where pen was last pressed

    3                        The current pen-switch value: -1 if down, 0 if up

    Argument                 Value Returned
    ──────────────────────────────────────────────────────────────────────────

    4                        The last known valid x pixel coordinate

    5                        The last known valid y pixel coordinate

    6                        The character row position where pen was last
                            pressed

    7                        The character column position where pen was last
                            pressed

    8                        The last known character row where the pen was
                            positioned

    9                        The last known character column where the pen was
                            positioned
    ──────────────────────────────────────────────────────────────────────────


■ Example

    The following example produces an endless loop to print the current
    pen-switch status (UP/DOWN):

    CLS
    PEN ON
    DO
        P = PEN(3)
        LOCATE 1,1 : PRINT "PEN IS ";
        IF P THEN PRINT "DOWN" ELSE PRINT "UP"
        X = PEN(4) : Y = PEN(5)
        PRINT "X =" X, "Y =" Y
    LOOP


────────────────────────────────────────────────────────────────────────────
PEN ON, OFF, and STOP Statements
────────────────────────────────────────────────────────────────────────────

■ Action

    Enables, disables, or suspends lightpen-event trapping

■ Syntax

    PEN ON
    PEN OFF
    PEN STOP

■ Remarks

    The PEN ON statement enables lightpen-event trapping by using an ON PEN
    statement. The pen is initially off. A lightpen event occurs whenever the
    lightpen is activated by pressing the tip to the screen or pressing the
    touch ring. A PEN ON statement must be executed before any read-pen
    function calls. If a read-pen function is called when the pen is off, an
    error message results that reads Illegal function call.

    The PEN OFF statement disables lightpen event trapping. The PEN STOP
    statement suspends lightpen event trapping; a pen event is remembered and
    trapped as soon as event trapping is enabled.

    To speed program execution, the pen should be turned off by using a PEN
    OFF statement when pen trapping is not needed.

────────────────────────────────────────────────────────────────────────────
NOTE
    The lightpen requires an IBM Color Graphics Adapter.
────────────────────────────────────────────────────────────────────────────

■ See Also

    ON event, PEN Function

■ Example

    See the example for the PEN function.


────────────────────────────────────────────────────────────────────────────
PLAY Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Plays music as specified by a string

■ Syntax

    PLAY commandstring

■ Remarks

    The commandstring is a string expression containing one or more of the
    commands listed below.

    The PLAY statement uses a concept similar to DRAW in that it embeds a
    music macro language (described below) in one statement. A set of
    commands, used as part of the PLAY statement, specifies a particular
    action.

    In compiled programs, you should use the VARPTR$(variable) form for
    variables. For example, the BASICA statements

    PLAY "XA$"
    PLAY "O=I"

    should be written for the compiler like this:

    PLAY "X" + VARPTR$(A$)
    PLAY "O=" + VARPTR$(I)

    The commandstring music macros are described as follows:

    Octave Commands          Action
    ──────────────────────────────────────────────────────────────────────────
    o n                      Sets the current octave. There are seven octaves,
                            numbered 0-6.

    >                        Increases octave by 1. Octave cannot go beyond 6.

    <                        Decreases octave by 1. Octave cannot drop below
                            0.

    Tone Commands            Action
    ──────────────────────────────────────────────────────────────────────────
    A-G                      Plays a note in the range A-G. The "#" symbol or
                            the "+" symbol after a note specifies sharp; a
                            "-" specifies flat.

    N n                      Plays note n. The range for n is 0-84 (in the
                            seven possible octaves, there are 84 notes); n =
                            0 means a rest.

    Duration Commands        Action
    ──────────────────────────────────────────────────────────────────────────
    L n                      Sets the length of each note. L4 is a quarter
                            note, L1 is a whole note, etc. The range for n is
                            1-64.
                            The length may also follow the note when a change
                            of length only is desired for a particular note.
                            In this case, A16 is equivalent to L16A.

    MN                       Sets "music normal" so that each note will play
                            7/8 of the time determined by the length (L).

    ML                       Sets "music legato" so that each note will play
                            the full period set by length (L).

    MS                       Sets "music staccato" so that each note will play
                            3/4 of the time determined by the length (L).

    Tempo Commands           Action
    ──────────────────────────────────────────────────────────────────────────
    P n                      Specifies a pause, ranging from 1-64. This option
                            corresponds to the length of each note, set with
                            L n.

    T n                      Sets the "tempo," or the number of L4 quarter
                            notes in one minute. The range for n is 32-255.
                            The default for n is 120.

    Operation Commands       Action
    ──────────────────────────────────────────────────────────────────────────
    MF                       Sets music (PLAY statement) and SOUND to run in
                            the foreground. That is, each subsequent note or
                            sound will not start until the previous note or
                            sound has finished. This is the default setting.

    MB                       Music (PLAY statement) and SOUND are set to run
                            in the background. That is, each note or sound is
                            placed in a buffer, allowing the BASIC program to
                            continue executing while the note or sound plays
                            in the background. The maximum number of notes
                            that can be played in the background at one time
                            is 32.

    Suffixes                 Action
    ──────────────────────────────────────────────────────────────────────────
    # or +                   Follows a specified note and turns it into a
                            sharp.

    -                        Follows a specified note and turns it into a
                            flat.

    .                        A period after a note causes the note to play 3/2
                            times the length determined by L (length) times T
                            (tempo). The period has the same meaning as in a
                            musical score. Multiple periods can appear after
                            a note. Each period adds a length equal to one
                            half the length of the previous period. The
                            command A. plays 1 + 1/2 or 3/2 times the length;
                            A.. plays 1 + 1/2 + 1/4 or 7/4 times the length;
                            and so on. Periods can appear after a pause (P).
                            In this case, the pause length is scaled in the
                            same way notes are scaled.

    Substring Command        Action
    ──────────────────────────────────────────────────────────────────────────
    "X" + VARPTR$(string)    Executes a substring.
    ──────────────────────────────────────────────────────────────────────────

    Because of the slow clock-interrupt rate, some notes will not play at
    higher tempos (L64 at T255, for example).

■ Examples

    The following example uses ">" to play the scales from octave 0 to octave
    6, then reverses with "<" to play the scales from octave 6 to octave 0:

    SCALE$ = "CDEFGAB"
    PLAY "o0 X" + VARPTR$(SCALE$)
    FOR I = 1 TO 6
        PLAY ">X" + VARPTR$(SCALE$)
    NEXT
    PLAY "o6 X" + VARPTR$(SCALE$)
    FOR I = 1 TO 6
        PLAY "<X" + VARPTR$(SCALE$)
    NEXT

    The following example plays the beginning of the first movement of
    Beethoven's Fifth Symphony:

    LISTEN$ = "T180 o2 P2 P8 L8 GGG L2 E-"
    FATE$ = "P24 P8 L8 FFF L2 D"
    PLAY LISTEN$ + FATE$


────────────────────────────────────────────────────────────────────────────
PLAY Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the number of notes currently in the background-music queue

■ Syntax

    PLAY (n)

■ Remarks

    The argument n is a dummy argument and may be any numeric value.

    PLAY(n) will return 0 when the user is in music-foreground mode.

■ See Also

    ON event; PLAY Statement; PLAY ON, OFF, and STOP

■ Example

    See the examples for the ON event statements.


────────────────────────────────────────────────────────────────────────────
PLAY ON, OFF, and STOP Statements
────────────────────────────────────────────────────────────────────────────

■ Action

    PLAY ON enables play event trapping, PLAY OFF disables play event
    trapping, and PLAY STOP suspends play event trapping.

■ Syntax

    PLAY ON
    PLAY OFF
    PLAY STOP

■ Remarks

    These statements are used with the ON PLAY statement to trap play events.
    When a PLAY OFF statement is executed, the event-trapping subroutine is
    not performed and the event is not remembered.

    A PLAY STOP statement does not perform the event-trapping subroutine, but
    the subroutine is performed as soon as a PLAY ON statement is executed.

    When a play event trap occurs (that is, the GOSUB is performed), an
    automatic PLAY STOP is executed so that recursive traps cannot take place.
    The RETURN from the trapping subroutine automatically performs a PLAY ON
    statement unless an explicit PLAY OFF was performed inside the subroutine.

■ Example

    See the entry for the ON event statements for an example of play event
    trapping.


────────────────────────────────────────────────────────────────────────────
PMAP Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Maps view-coordinate expressions to physical locations or maps physical
    expressions to a view-coordinate location

■ Syntax

    PMAP (expression, function)

■ Remarks

    The argument expression indicates the coordinate of the point to be
    mapped. The argument function can have one of the four following values:

    Value                    Description
    ──────────────────────────────────────────────────────────────────────────
    0                        Maps view-coordinate expression to physical
                            x-coordinate

    1                        Maps view-coordinate expression to physical
                            y-coordinate

    2                        Maps physical expression to view x-coordinate

    3                        Maps physical expression to view y-coordinate
    ──────────────────────────────────────────────────────────────────────────

    The four PMAP functions allow the user to find equivalent point locations
    between the view coordinates created with the WINDOW statement and the
    physical coordinate system of the screen or viewport as defined by the
    VIEW statement.

■ See Also

    VIEW, WINDOW

■ Example

    The following fragment uses PMAP to convert coordinate values from view to
    screen coordinates and from screen coordinates to view coordinates:

    SCREEN 2
    'Coordinates of upper-left corner of window defined in follow-
    'ing statement are (80,100); coordinates of lower-right corner
    'are 200,200.
    WINDOW SCREEN (80,100) - (200,200)

    'If physical screen coordinates are (0,0) in the upper-left
    'corner and (639,199) in the lower-right corner, then the
    'following statements will return the screen coordinates
    'equivalent to the view coordinates 80,100.
    X = PMAP(80,0)          'X = 0
    Y = PMAP(100,1)         'Y = 0

    'The following statements will return the screen coordinates
    'equivalent to the view coordinates 200,200.
    X = PMAP(200,0)         'X = 639
    Y = PMAP(200,1)         'Y = 199

    'The following statements will return the view coordinates
    'equivalent to the screen coordinates 639,199.
    X = PMAP(639,2)         'X = 200
    Y = PMAP(199,3)         'Y = 200


────────────────────────────────────────────────────────────────────────────
POINT Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Reads the color number of a pixel from the screen or returns the pixel's
    coordinates

■ Syntax

    POINT (x,y)
    POINT (number)

■ Remarks

    The coordinates x and y refer to the pixel being evaluated by the POINT
    function. When called with two coordinates, POINT returns the color number
    of the indicated pixel. If the specified pixel is out of range, POINT
    returns the value -1.

    POINT with one argument (as explained in the list below) allows the user
    to retrieve the current graphics-cursor coordinates.

    Argument                 Value Returned
    ──────────────────────────────────────────────────────────────────────────
    0                        The current physical x-coordinate.

    1                        The current physical y-coordinate.

    2                        The current view x-coordinate. This returns the
                            same value as the POINT(0) function if the WINDOW
                            statement has not been used.

    3                        The current view y-coordinate. This returns the
                            same value as the POINT(1) function if the WINDOW
                            statement has not been used.
    ──────────────────────────────────────────────────────────────────────────

■ Example

    The following example redraws the ellipse drawn with the CIRCLE statement,
    using POINT to find the border of the ellipse by testing for a change in
    color:

    DEFINT X,Y
    INPUT "Enter angle of tilt in degrees (0 to 90): ",Ang
    SCREEN 1         'Medium resolution screen.
    Ang = (3.1415926#/180)*Ang      'Convert degrees to radians.
    Cs = COS(Ang) : Sn = SIN(Ang)
    CIRCLE (45,70),50,2,,,2         'Draw ellipse.
    PAINT (45,70),2                 'Paint interior of ellipse.

    FOR Y = 20 TO 120
        FOR X = 20 TO 70
        'Check each point in rectangle enclosing ellipse.
        IF POINT(X,Y) <> 0 THEN
            'If the point is in the ellipse, plot a corresponding
            'point in the "tilted" ellipse.
            Xnew = (X*Cs - Y*Sn) + 200 : Ynew = (X*Sn + Y*Cs)
            PSET(Xnew,Ynew),2
        END IF
        NEXT
    NEXT
    END


────────────────────────────────────────────────────────────────────────────
POKE Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Writes a byte into a memory location

■ Syntax

    POKE address,byte

■ Remarks

    The expression address is a value that represents the address of the
    memory location; address must be in the range 0-65,535. The expression
    byte is the data byte to be written; it is an integer value in the range
    0-255.

    The address is treated as the offset from the current default segment (as
    set by the DEF SEG statement). If the argument is a single- or
    double-precision floating-point value or a long integer, it is converted
    to a two-byte integer.

    The complementary function to POKE is PEEK.

────────────────────────────────────────────────────────────────────────────
WARNING
    Use POKE carefully. If used incorrectly, it can cause BASIC or the
    operating system to fail.
────────────────────────────────────────────────────────────────────────────

■ See Also

    DEF SEG, PEEK, VARPTR

■ Example

    See the example for the DEF SEG statement.


────────────────────────────────────────────────────────────────────────────
POS Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the current horizontal position of the cursor

■ Syntax

    POS(0)

■ Remarks

    The leftmost cursor position is numbered 1. To return the current
    vertical-line position of the cursor, use the CSRLIN function.

■ See Also

    CSRLIN, LPOS

■ Example

    The following example uses POS to start input on a new line after every 40
    characters:

    PRINT "This program starts a new line after every forty"
    PRINT "characters are printed. Press <CTRL-C> to end."
    PRINT
    DO
        DO WHILE POS(0) < 41   'Stay on same line until 40 characters
        DO                  'printed.
            Char$=INKEY$
        LOOP WHILE Char$=""
        'If input is key combination CTRL-C then end; otherwise,
        'print the character.
        IF ASC(Char$) = 3 THEN END ELSE PRINT Char$;
        LOOP
        PRINT                  'Print a new line.
    LOOP


────────────────────────────────────────────────────────────────────────────
PRESET Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Draws a specified point on the screen

■ Syntax

    PRESET «STEP»(xcoordinate,ycoordinate) «,color»

■ Remarks

    PRESET works exactly like PSET, except that if the color is not specified,
    the background color is selected. The following list describes the parts
    of the PRESET statement:

    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
    STEP                     Indicates that the given x- and y-coordinates are
                            relative, not absolute. The coordinates are
                            treated as distances from the most recent cursor
                            location, not distances from the (0,0) screen
                            coordinate.
                            For example, if the most recent point referenced
                            were (10,10),
                            PRESET STEP (10,5)
                            would reference the point at (20,15).

    xcoordinate              The x-coordinate of the pixel that is to be set.

    ycoordinate              The y-coordinate of the pixel that is to be set.

    color                    The color attribute for the specified point.
    ──────────────────────────────────────────────────────────────────────────

    If a coordinate is outside the current viewport, no action is taken, nor
    is an error message given.

■ See Also

    PSET

■ Example

    The following example draws a line 20 pixels long. The line then moves
    across the screen from left to right:


    SCREEN 1 : COLOR 1,1 : CLS
    FOR I = 0 TO 299 STEP 3
        FOR J = I TO 20+I
            PSET (J,50),2                  'Draw the line in new location.
        NEXT
        FOR J = I TO 20+I
            PRESET (J,50)                  'Erase the line.
        NEXT
    NEXT


────────────────────────────────────────────────────────────────────────────
PRINT Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Outputs data on the screen

■ Syntax

    PRINT «expressionlist» «{, | ;}»

■ Remarks

    If expressionlist is omitted, a blank line is printed. If expressionlist
    is included, the values of the expressions are printed on the screen. The
    expressions in the list may be numeric or string expressions. (String
    literals must be enclosed in quotation marks.)

    A printed number is always followed by a space. If the number is positive,
    it is also preceded by a space; if the number is negative, it is preceded
    by a minus sign (-).

    There are two formats that PRINT uses to display single- and
    double-precision numbers: fixed point and floating point. If PRINT can
    represent a single-precision number in the fixed-point format with seven
    or fewer digits and no loss of accuracy, then it uses the fixed-point
    format; otherwise, it uses the floating-point format. For example, the
    number 1.1E-6 is output as .0000011, but the number 1.1E-7 is output as
    1.1E-7.

    Similarly, if PRINT can represent a double-precision number in the
    fixed-point format with 16 or fewer digits and no loss of accuracy, then
    it uses the fixed-point format; otherwise, it uses the floating-point
    format. For example, the number 1.1D-15 is output as .0000000000000011,
    but the number 1.1D-16 is output as 1.1D-16.

    The PRINT statement supports only elementary BASIC data types (integers,
    long integers, single-precision real numbers, double-precision real
    numbers, and strings). To print information in a record, use the PRINT
    statement with individual record elements as in the following fragment:

    TYPE MyType
        Word AS STRING*20
        Count AS LONG
    END TYPE
    DIM Myrec AS MyType

    PRINT Myrec.Word

    PRINT POSITIONS

    The position of each printed item is determined by the punctuation used to
    separate the items in the list. BASIC divides the line into print zones of
    14 spaces each. In the expression list, a comma makes the next value print
    at the start of the next zone. A semicolon makes the next value print
    immediately after the last value. Typing one or more spaces or tabs
    between expressions has the same effect as typing a semicolon.

    If a comma or a semicolon terminates the list of expressions, the next
    PRINT statement prints on the same line, after spacing accordingly. If the
    expression list ends without a comma or a semicolon, a carriage-return and
    line-feed sequence is printed at the end of the line. If the printed line
    is wider than the screen width, BASIC goes to the next physical line and
    continues printing.

■ Examples

    In the following example, the commas in the PRINT statement print each
    value at the beginning of the next print zone:

    X=5
    PRINT X+5, X-5, X*(-5), X^5
    END

■ Output

    10            0            -25            3125

    In the following example, the semicolon at the end of the first PRINT
    statement makes the first two PRINT statements print on the same line. The
    last PRINT statement prints a blank line before the next prompt.

    DO
        INPUT "Input X (input 0 to end): ", X
        IF X = 0 THEN
        EXIT DO
        ELSE
        PRINT X "squared is" X^2 "and";
        PRINT X "cubed is" X^3
        PRINT
        END IF
    LOOP

■ Output

    Input X (input 0 to end): 9
    9 squared is 81 and 9 cubed is 729

    Input X (input 0 to end): 21
    21 squared is 441 and 21 cubed is 9261

    Input X (input 0 to end): 0

    In the following example, the semicolons in the PRINT statement print each
    value immediately after the preceding value. (Remember, a space always
    follows a number and a space precedes a positive number.)

    FOR X=1 TO 5
    J=J+5
    K=K+10
    PRINT J;K;
    NEXT X

■ Output

    5  10  10  20  15  30  20  40  25  50


────────────────────────────────────────────────────────────────────────────
PRINT #, PRINT # USING Statements
────────────────────────────────────────────────────────────────────────────

■ Action

    Writes data to a sequential file

■ Syntax

    PRINT #filenumber,«USING stringexpression;» expressionlist «{, | ;}»

■ Remarks

    The filenumber is the number specified when the file was opened for
    output. The stringexpression consists of formatting characters as
    described under PRINT USING. The expressions in expressionlist are the
    numeric or string expressions to be written to the file. Spaces, commas,
    and semicolons in the expressionlist have the same meaning they have in a
    PRINT statement.

    If you omit expressionlist, the PRINT # statement prints a blank line in
    the file.

    PRINT # works like PRINT and writes an image of the data to the file, just
    as the data would be displayed on the terminal screen. For this reason, be
    careful to delimit the data so it is output correctly. If you use commas
    as delimiters, the blanks between print fields are also written to the
    file.

    For more information, see Chapter 3, "File and Device I/O," in Programming
    in BASIC.

■ See Also

    PRINT; PRINT USING; WRITE#

■ Example

    The following example shows the effects of omitting and of including
    delimiters in data written out with PRINT #:

    A$ = "CAMERA, AUTOFOCUS" : B$= "September 20, 1985"
    : C$ = "42"
    Q$ = CHR$(34)
    OPEN "INVENT.DAT" FOR OUTPUT AS #1 'Open INVENT.DAT for writing
    'Write A$, B$, C$ without delimiters.
    PRINT #1, A$ B$ C$
    'Write A$, B$, C$ with delimiters.
    PRINT #1, Q$ A$ Q$ Q$ B$ Q$ Q$ C$ Q$
    CLOSE #1
    OPEN "INVENT.DAT" FOR INPUT AS #1  'Open INVENT.DAT for reading.
    FOR I% = 1 TO 2                    'Read first two records and
        INPUT #1, First$,Second$,Third$ 'print.
        PRINT First$ TAB(30) Second$ TAB(60) Third$ : PRINT
    NEXT
    CLOSE #1

■ Output

    CAMERA           AUTOFOCUSSeptember 20         198542

    CAMERA, AUTOFOCUS      September 20, 1985            42


────────────────────────────────────────────────────────────────────────────
PRINT USING Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Prints strings or numbers using a specified format

■ Syntax

    PRINT USING formatstring; expressionlist «{, | ;}»

■ Remarks

    The formatstring is a string literal (or variable) containing literal
    characters to print (such as labels) and special formatting characters.
    These formatting characters determine the field and the format of the
    printed strings or numbers. Spaces, commas, and semicolons in the
    expressionlist have the same meaning they do in a PRINT statement.

    The expressionlist contains the string expressions or numeric expressions
    to be printed, separated by semicolons.

    When PRINT USING is used to print strings, you may use one of three
    formatting characters to format the string field, as described in the
    following list:

    Character                Description
    ──────────────────────────────────────────────────────────────────────────
    !                        Only the first character in the given string is
                            to be printed.

    \    \                   Prints 2 + n characters from the string, where n
                            is the number of spaces between the two
                            backslashes. If the backslashes are typed with no
                            spaces, two characters are printed. With one
                            space, three characters are printed, and so on.
                            If the field is longer than the string, the
                            string is left-justified in the field and padded
                            with spaces on the right.

    &                        Indicates a variable-length string field. When
                            the field is specified with the ampersand (&),
                            the string is output without modification.
    ──────────────────────────────────────────────────────────────────────────

    When PRINT USING is used to print numbers, the following special
    characters can be used to format the numeric field:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Character                Description
    ──────────────────────────────────────────────────────────────────────────
    #                        Represents each digit position. Digit positions
                            are always filled. If the number to be printed
                            has fewer digits than positions specified, the
                            number is right-justified (preceded by spaces) in
                            the field.

    .                        Prints a decimal point. A decimal point may be
                            inserted at any position in the field. If the
                            format string specifies that a digit is to
                            precede the decimal point, the digit is always
                            printed (as 0, if necessary). If necessary,
    Character                Description
    ──────────────────────────────────────────────────────────────────────────
                            printed (as 0, if necessary). If necessary,
                            numbers are rounded.

    +                        Causes the sign of the number (plus or minus) to
                            be printed before the number (if it appears at
                            the beginning of the format string) or after (if
                            it appears at the end of the format string).

    -                        Causes a negative number to be printed with a
                            trailing minus sign if it appears at the end of
                            the format string.

    **                       Causes leading spaces in the numeric field to be
                            filled with asterisks. The double asterisk also
                            specifies positions for two more digits.

    $$                       Causes a dollar sign to be printed to the
                            immediate left of the formatted number. The $$
                            specifies two more digit positions, one of which
    Character                Description
    ──────────────────────────────────────────────────────────────────────────
                            specifies two more digit positions, one of which
                            is the dollar sign.

    **$                      Combines the effects of the double-asterisk and
                            double-dollar-sign symbols. Leading spaces are
                            asterisk-filled and a dollar sign is printed
                            before the number. The **$ symbols specify three
                            more digit positions, one of which is the dollar
                            sign. When negative numbers are printed, the
                            minus sign appears to the immediate left of the
                            dollar sign.

    ,                        If the comma appears to the left of the decimal
                            point in a format string, it causes a comma to be
                            printed to the left of every third digit left of
                            the decimal point. If it appears at the end of
                            the format string, it is printed as part of the
                            string. A comma specifies another digit position.
                            The comma has no effect if used with exponential
    Character                Description
    ──────────────────────────────────────────────────────────────────────────
                            The comma has no effect if used with exponential
                            (^^^^ or ^^^^^) format.

    ^^^^                     Specifies exponential format. You can also use
                            five carets (^^^^^) to allow E+xxx to be printed
                            for larger numbers. Any decimal point position
                            may be specified. The significant digits are
                            left-justified and the exponent is adjusted.
                            Unless a leading +, trailing +, or - is
                            specified, one digit position is used to the left
                            of the decimal point to print a space or a minus
                            sign.

    _                        An underscore in the format string prints the
                            next character as a literal character. A literal
                            underscore is printed as the result of two
                            underscores ( __ ) in the format string.

    %                        If the number to be printed is larger than the
    Character                Description
    ──────────────────────────────────────────────────────────────────────────
    %                        If the number to be printed is larger than the
                            specified numeric field, a percent sign (%) is
                            printed in front of the number. If rounding
                            causes the number to exceed the field, a percent
                            sign is printed in front of the rounded number.
                            If the number of digits specified exceeds 24, an
                            error message results that reads Illegal function
                            call.
    ──────────────────────────────────────────────────────────────────────────


■ Examples

    The following example shows the results of using the three
    string-formatting characters:

    'Using the three string-formatting characters to modify the
    'appearance of printed output.
    A$ = "LOOK" : B$ = "OUT"
    PRINT USING "!";A$;B$
    PRINT USING "\  \";A$;B$        'Two spaces between back-
                                    'slashes, will print four
                                    'characters from A$.
    PRINT USING "\   \";A$;B$;"!!"  'Three spaces, will print
    PRINT USING "!";A$;             'A$ and a blank.
    PRINT USING "&";B$

■ Output

    LO
    LOOKOUT
    LOOK OUT  !!
    LOUT

    The following example shows the effects of different combinations of
    numeric formatting characters:

    'Format and print numeric data.
    PRINT USING "##.##";.78
    PRINT USING "###.##";987.654
    PRINT USING "##.##   ";10.2,5.3,66.789,.234
    PRINT USING "+##.##   ";-68.95,2.4,55.6,-.9
    PRINT USING "##.##-   ";-68.95,22.449,-7.01
    PRINT USING "**#.#   ";12.39,-0.9,765.1
    PRINT USING "$$###.##";456.78
    PRINT USING "**$##.##";2.34
    PRINT USING "####,.##";1234.5
    PRINT USING "##.##^^^^";234.56
    PRINT USING ".####^^^^-";-888888
    PRINT USING "+.##^^^^";123
    PRINT USING "+.##^^^^^";123
    PRINT USING "_!##.##_!";12.34
    PRINT USING "##.##";111.22
    PRINT USING ".##";.999

■ Output

    0.78
    987.65
    10.20    5.30   66.79    0.23
    -68.95    +2.40   +55.60    -0.90
    68.95-   22.45     7.01-
    *12.4   *-0.9   765.1
    $456.78
    ***$2.34
    1,234.50
    2.35E+02
    .8889E+06-
    +.12E+03
    +.12E+003
    !12.34!
    %111.22
    %1.00


────────────────────────────────────────────────────────────────────────────
PSET Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Draws a point on the screen

■ Syntax

    PSET «STEP»(xcoordinate,ycoordinate) «,color»

■ Remarks

    The following list describes the parts of the PSET statement:

    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
    STEP                     Indicates that the given xcoordinate and
                            ycoordinate are relative, not absolute. The
                            coordinates are treated as distances from the
                            most recent cursor location, not distances from
                            the (0,0) screen coordinate.

                            For example, if the most recent point referenced
                            were (10,10) then

                            PSET STEP (10,5)

                            would reference the point at (20,15).

    xcoordinate              The x-coordinate of the pixel that is to be set.

    ycoordinate              The y-coordinate of the pixel that is to be set.

    color                    The color attribute for the specified point.
    ──────────────────────────────────────────────────────────────────────────

    If a coordinate is outside the current viewport, no action is taken nor is
    an error message given. PSET allows the color to be left off the command
    line. If it is omitted, the default is the foreground color.

■ See Also

    PRESET

■ Example

    The following example draws a line from (0,0) to (100,100) and then erases
    that line by writing over it with the background color:

    SCREEN 2  'Draw a line from (0,0) to (100,100).
    FOR I=0 TO 100
        PSET (I,I)
    NEXT I
    FOR I=0 TO 100 'Now erase that line.
        PSET STEP (-1,-1),0
    NEXT I


────────────────────────────────────────────────────────────────────────────
PUT Statement──Graphics
────────────────────────────────────────────────────────────────────────────

■ Action

    Places a graphic image obtained by a GET statement onto the screen

■ Syntax

    PUT «STEP» (x, y), arrayname«(indices)» «,actionverb»

■ Remarks

    The parts of the PUT statement are described as follows:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
    STEP                     Indicates that the given x- and y-coordinates are
                            relative, not absolute. The coordinates are
                            treated as distances from the most recent cursor
                            location, not distances from the (0,0) screen
                            coordinate.

                            For example, if the most recent point referenced
                            were (10,10) then the statement

                            PUT STEP (10,5),Ball

                            would put the object stored in Ball at (20,15).
    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
                            would put the object stored in Ball at (20,15).

    (x,y)                    Coordinates specifying the top-left corner of the
                            rectangle enclosing the image to be placed in the
                            current output window.

    arrayname                The name of the array that holds the image. See
                            the entry for GET (Graphics) for the formula that
                            computes the size of this array. The array can be
                            a multidimensional array.

    indices                  Specifies that the image is retrieved starting
                            from the designated array element, rather than at
                            the first array element.

    actionverb               The actionverb determines the interaction between
                            the stored image and the one already on the
                            screen.
    ──────────────────────────────────────────────────────────────────────────
    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
    ──────────────────────────────────────────────────────────────────────────


    The different values for actionverb are described in the following list.
    The default for actionverb is XOR.

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Verb                     Description
    ──────────────────────────────────────────────────────────────────────────
    PSET                     Transfers the data point-by-point onto the
                            screen. Each point has the exact color attribute
                            it had when it was taken from the screen with
                            GET.

    PRESET                   The same as PSET except that a negative image
                            (for example, black on white) is produced.

    AND                      Used when the image is to be transferred over an
                            existing image on the screen. The resulting image
    Verb                     Description
    ──────────────────────────────────────────────────────────────────────────
                            existing image on the screen. The resulting image
                            is the result of a logical AND of the stored
                            image and the screen; points that had the same
                            color in both the existing image and the stored
                            image remain the same color, while those points
                            that do not have the same color in both the
                            existing image and the stored image do not.

    OR                       Used to superimpose the image onto an existing
                            image; the stored image does not erase the
                            previous screen contents. The resulting image is
                            the product of a logical OR of the stored image
                            and the screen image.

    XOR                      A special mode often used for animation. XOR
                            causes the points on the screen to be inverted
                            where a point exists in the array image. This
                            behavior is exactly like that of the cursor: when
                            an image is placed on the screen against a
    Verb                     Description
    ──────────────────────────────────────────────────────────────────────────
                            an image is placed on the screen against a
                            complex background twice, the background is
                            restored. This allows you to move an object
                            around the screen without erasing the background.
    ──────────────────────────────────────────────────────────────────────────


    See Chapter 5, "Graphics," in Programming in BASIC for a detailed
    description of doing animation with the PUT statement.

■ See Also

    GET (Graphics), PRESET, PRINT, PSET

■ Example

    The following example creates a moving white ball that ricochets off the
    sides of the screen until you press a key to end the program:

    DEFINT A-Z
    DIM Ball(84)     'Dimension integer array large enough
                    'to hold ball.
    SCREEN 2         '640 pixels by 200 pixels screen resolution.
    INPUT "Press any key to end; press <ENTER> to start",Test$
    CLS
    CIRCLE (16,16),14       'Draw and paint ball.
    PAINT (16,16),1
    GET (0,0)-(32,32),Ball
    X = 0 : Y = 0
    Xdelta = 2 : Ydelta = 1

    DO

        'Continue moving in same direction as long as ball is within
        'the boundaries of the screen - (0,0) to (640,200).

        X = X + Xdelta : Y = Y + Ydelta
        IF INKEY$<>"" THEN END  ' Test for key press.

        'Change X direction if ball hits left or right edge.
        IF (X < 1 OR X > 600) THEN
        Xdelta = -Xdelta
        BEEP
        END IF
        'Change Y direction if ball hits top or bottom edge.
        IF (Y < 1 OR Y > 160) THEN
        Ydelta = -Ydelta
        BEEP
        END IF
        'Put new image on screen, simultaneously erasing old image.
        PUT (X,Y),Ball,PSET

    LOOP
    END


────────────────────────────────────────────────────────────────────────────
PUT Statement──File I/O
────────────────────────────────────────────────────────────────────────────

■ Action

    Writes from a variable or a random-access buffer to a file

■ Syntax

    PUT «#»filenumber«,«recordnumber»«,variable»»
    PUT «#»filenumber«,{recordnumber|recordnumber, variable|,variable}»

■ Remarks

    The following list describes the parts of the PUT statement:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    filenumber               The number used in the OPEN statement to open the
                            file.

    recordnumber             For random-mode files, the number of the record
                            to be written. For binary-mode files, the byte
                            position in the file where writing is done. The
    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
                            position in the file where writing is done. The
                            first record in a file is record 1. If you omit
                            recordnumber, the next record or byte (the one
                            after the last GET or PUT statement, or the one
                            pointed to by the last SEEK) is written to. The
                            largest possible record number is 2^31-1 or
                            2,147,483,647.

    variable                 The variable containing the output to be written
                            to the file. The PUT statement writes as many
                            bytes to the file as there are bytes in the
                            variable.

                            If you use a variable, you do not need to use
                            MKI$, MKL$, MKS$, or MKD$ to convert numeric
                            fields before writing. You may not use a FIELD
                            statement with the file if you use the variable
                            argument.

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────

                            For random-access files, you can use any variable
                            as long as the length of the variable is less
                            than or equal to the length of the record.
                            Usually, a record variable defined to match the
                            fields in a data record is used.

                            For binary-mode files, you can use any variable.

                            When you use a variable-length string variable,
                            the statement writes as many bytes as there are
                            characters in the string's value. For example,
                            the following two statements write 15 bytes to
                            file number 1:

                            VarString$=STRING$ (15, "X") PUT #1,,VarString$

                            See the examples below and Chapter 3, "File and
                            Device I/O," in Programming in BASIC, for more
    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
                            Device I/O," in Programming in BASIC, for more
                            information about using variables rather than
                            FIELD statements for random-access files.

                            A record cannot contain more than 32,767 bytes.
    ──────────────────────────────────────────────────────────────────────────


    You can omit the recordnumber, the variable, or both. If you omit only the
    recordnumber, you must still include the commas:

    PUT #4,,FileBuffer

    If you omit both arguments, you do not include the commas:

    PUT #4

    The GET and PUT statements allow fixed-length input and output for BASIC
    communications files. Be careful using GET and PUT for communications
    because PUT writes a fixed number of characters and may wait indefinitely
    if there is a communications failure.

────────────────────────────────────────────────────────────────────────────
NOTE
    When using a file buffer defined by a FIELD statement, LSET, RSET, PRINT
    #, PRINT # USING, and WRITE # may be used to put characters in the
    random-file buffer before executing a PUT statement. In the case of WRITE
    # , BASIC pads the buffer with spaces up to the carriage return. Any
    attempt to read or write past the end of the buffer causes an error
    message that reads FIELD overflow.
────────────────────────────────────────────────────────────────────────────

■ See Also

    CVI, CVS, CVL, CVD;
    GET (File I/O);LSET; MKD$,
    MKI$, MKL$, MKS$

■ Example

    The following example reads names and test scores from the console and
    stores the names and scores in a random-access file:


    ' Read a name and a test score from the console.
    ' Store each name and score as a record in a
    ' random-access file.

    ' Define record fields.
    TYPE TestRecord
        NameField  AS STRING*20
        ScoreField AS SINGLE
    END TYPE

    ' Open the test data file.
    DIM FileBuffer AS TestRecord
    OPEN "TESTDAT.DAT" FOR RANDOM AS #1 LEN=LEN(FileBuffer)

    ' Read pairs of names and scores from the console.

    I=0
    DO
        I=I+1
        INPUT "Name ? ",FileBuffer.NameField
        INPUT "Score? ",FileBuffer.ScoreField
        INPUT "-->More (y/n)? ",Resp$
        PUT #1,I,FileBuffer
    LOOP UNTIL UCASE$(MID$(Resp$,1,1))="N"

    PRINT I;" records written."

    CLOSE #1


────────────────────────────────────────────────────────────────────────────
RANDOMIZE Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Initializes (reseeds) the random-number generator

■ Syntax

    RANDOMIZE«expression»

■ Remarks

    If you omit expression, BASIC pauses and asks for a value by printing

    Random Number Seed (-32768 to 32767)?

    before executing the RANDOMIZE statement. When you use the argument
    expression, QuickBASIC uses this value to initialize the random-number
    generator.

    If the random-number generator is not reseeded, the RND function returns
    the same sequence of random numbers each time the program is run. To
    change the sequence of random numbers every time the program is run, place
    a RANDOMIZE statement at the beginning of the program and change the
    argument with each run.

    A convenient way to initialize the random-number generator is to use the
    TIMER function. Using TIMER ensures a new series of random numbers each
    time you use the program. See the example below.

■ See Also

    RND, TIMER

■ Example

    The following program simulates rolling two dice. The RANDOMIZE statement
    initializes the random-number generator so the program produces different
    numbers each time.

    ' Use the timer as the seed for the number generator.
    RANDOMIZE TIMER

    DO
        ' Simulate rolling two dice using RND.
        D1=INT(RND*6)+1
        D2=INT(RND*6)+1
        ' Report the roll.
        PRINT "You rolled a";D1;"and a";D2;"for a total of";D1+D2
        INPUT "Roll again (Y/N)";Resp$
        PRINT
    LOOP UNTIL UCASE$(MID$(Resp$,1,1))="N"

    END

■ Output

    You rolled a 3 and a 5 for a total of 8
    Roll again (Y/N)? y

    You rolled a 4 and a 1 for a total of 5
    Roll again (Y/N)? y

    You rolled a 5 and a 6 for a total of 11
    Roll again (Y/N)? n


────────────────────────────────────────────────────────────────────────────
READ Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Reads values from a DATA statement and assigns the values to variables

■ Syntax

    READ variablelist

■ Remarks

    A variablelist is a series of valid BASIC variables separated by commas.
    READ statements are always used with DATA statements. READ assigns DATA
    values to variables on a one-to-one basis. These variables may be numeric
    or string. Attempting to read a string value into a numeric variable
    produces a run-time syntax error. Reading a numeric value into a string
    variable does not produce an error, but stores the value as a string of
    numerals.

    Values read into integer variables are rounded before the value is
    assigned to the variable. Reading a numeric value too large for a variable
    produces a run-time error.

    String values read into fixed-length string variables are truncated if the
    string is too long. String values shorter than the string-variable length
    are left-justified and padded with blanks.

    Only individual elements of a record variable may appear in a READ
    statement. See example below.

    A single READ statement may use one or more DATA statements (they will be
    used in order); several READ statements may use the same DATA statement.
    If there are more variables in variablelist than there are values in the
    DATA statement or statements, an error message is printed that reads Out
    of DATA. If there are fewer variables than the number of elements in the
    DATA statement or statements, subsequent READ statements begin reading
    data at the first unread element. If there are no subsequent READ
    statements, the extra items are ignored.

    Use the RESTORE statement to reread DATA statements.

■ See Also

    DATA, RESTORE

■ Example

    The following fragment shows how a READ statement can be used to read
    information into the user-defined type named Employee:

    TYPE Employee
        FullName AS STRING*35
        SocSec AS STRING*9
        JobClass AS INTEGER
    END TYPE

    DIM ThisEmp AS Employee
    DATA "Julia Magruder","300-32-3403",3
    DATA "Amelie Reeves Troubetzkoy","777-29-3206",7
    .
    .
    .
    READ ThisEmp.FullName, ThisEmp.SocSec, ThisEmp.JobClass
    .
    .
    .

    See also the examples for DATA and RESTORE.


────────────────────────────────────────────────────────────────────────────
REDIM Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Changes the space allocated to an array that has been declared ¢DYNAMIC

■ Syntax

    REDIM «SHARED» variable(subscripts)«AS type» «,variable(subscripts)«AS typ
    e»»...

■ Remarks

    The REDIM statement has the following arguments:

    Arguments                Description
    ──────────────────────────────────────────────────────────────────────────
    SHARED                   The optional SHARED attribute allows a module to
                            share variables with all the procedures in the
                            module; this differs from the SHARED statement,
                            which affects only the variables within a single
                            module. SHARED can only be used in REDIM
                            statements in the module-level code.

    variable                 A BASIC variable name.

    subscripts               The dimensions of the array. Multiple dimensions
                            can be declared. The subscript syntax is
                            described below.

    AS type                  Declares variable as an elementary or
                            user-defined type. The elementary types are
                            INTEGER, LONG, SINGLE, DOUBLE, and STRING.
    ──────────────────────────────────────────────────────────────────────────

    Subscripts in REDIM statements have the following form:

    «lower TO» upper «, «lower TO» upper»...

    The TO keyword provides a way to indicate both the lower and the upper
    bounds of an array's subscripts. The arguments lower and upper are numeric
    expressions specifying the lowest and highest value for the subscript. See
    the DIM statement for more information about using the TO keyword.

    The REDIM statement changes the space allocated to an array that has been
    declared dynamic. See Chapter 2, "Data Types," for more information about
    both static and dynamic arrays.

    When a REDIM statement is compiled, all arrays declared in the statement
    are treated as dynamic. At run time, when a REDIM statement is executed,
    the array is deallocated (if it is already allocated) and then reallocated
    with the new dimensions. Old array-element values are lost because all
    numeric elements are reset to 0 and all string elements are reset to null
    strings. Although you may change the size of an array's dimensions with
    the REDIM statement, you may not change the number of dimensions. For
    example, the following statements are legal:

    ' ¢DYNAMIC
    DIM A(50,50)
    ERASE A
    REDIM A(20,15)    'Array A still has two dimensions.

    However, the following statements are not legal and produce an error
    message that reads Wrong number of dimensions:

    ' ¢DYNAMIC
    DIM A(50,50)
    ERASE A
    REDIM A(5,5,5)   'Changed number of dimensions from
                    'two to three.

■ See Also

    DIM, ERASE, LBOUND, OPTION BASE, SHARED, UBOUND

■ Example

    The following program fragment shows one way to use REDIM to allocate an
    array of records when the records are needed and later to free the memory
    that the records use:

    TYPE KeyElement
        Word AS STRING*20
        Count AS INTEGER
    END TYPE

    ' Make arrays dynamic.
    ' ¢DYNAMIC
    .
    .
    .
    ' Allocate an array of records when you need it.
    REDIM Keywords(500) AS KeyElement
    Keywords(99).Word="ERASE"
    Keywords(99).Count=2
    PRINT Keywords(99).Word,Keywords(99).Count
    .
    .
    .
    ' Free the space taken by Keywords when you're finished.
    ERASE Keywords
    .
    .
    .
    END


────────────────────────────────────────────────────────────────────────────
REM Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Allows explanatory remarks to be inserted in a program

■ Syntax 1

    REM remark

■ Syntax 2

    ' remark

■ Remarks

    REM statements are not compiled, but they appear exactly as entered when
    the program is listed. You may branch from a GOTO or GOSUB statement to a
    REM statement. Execution continues with the first executable statement
    after the REM statement.

    A single quotation mark can be used instead of the REM keyword. If the REM
    keyword follows other statements on a line, it must be separated from the
    statements by a colon.

    REM statements are also used to introduce metacommands (see Appendix F,
    "Metacommands," in Programming in BASIC for more information).

────────────────────────────────────────────────────────────────────────────
NOTE
    Do not use the single quotation form of the REM statement in a DATA
    statement because it will be considered valid data.
────────────────────────────────────────────────────────────────────────────

■ Examples

    The following two lines are equivalent (notice that the colon is not
    required with the single quote):

    FOR I=1 TO 23 : Array(I)=1 : NEXT I : REM Initialize the array.
    FOR I=1 TO 23 : Array(I)=1 : NEXT I   ' Initialize the array.


────────────────────────────────────────────────────────────────────────────
RESET Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Closes all disk files

■ Syntax

    RESET

■ Remarks

    The RESET statement closes all open disk files and writes data still in
    the file buffers to disk. All files must be closed before a disk is
    removed from its drive.

■ See Also

    CLOSE, END, SYSTEM

■ Example

    There are no programming examples for the RESET statement.


────────────────────────────────────────────────────────────────────────────
RESTORE Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Allows DATA statements to be reread from a specified line

■ Syntax

    RESTORE «{linenumber | linelabel }»

■ Remarks

    After executing a RESTORE statement without a specified linenumber or
    linelabel, the next READ statement gets the first item in the first DATA
    statement in the program.

    If linenumber or linelabel is specified, the next READ statement gets the
    first item in the specified DATA statement. If a line is specified, the
    line number or line label must be in the module-level code. (Note that in
    the QuickBASIC environment, DATA statements are automatically moved to the
    module-level code.)

■ See Also

    DATA, READ

■ Example

    The RESTORE statement in the following fragment (from a program that
    generates random bridge hands) allows the program to reread the prompts in
    the DATA statement so the user can enter new boundary conditions for the
    different suits:

    DEFINT A-Z
    DIM X(13), Param(5,2)
    DATA Spades, Hearts, Diamonds, Clubs, Points

    CALL GetParameters(Param())

    DO
    .
    .
    .
        INPUT "Repeat with same parameters"; Ch$
        IF UCASE$(Ch$) <> "Y" THEN
        INPUT "Repeat with new parameters"; Ch$
        IF UCASE$(Ch$) <> "Y" THEN
            EXIT DO
        ELSE
            RESTORE
            CALL GetParameters(Param())
        END IF
        END IF
    LOOP

    END

    SUB GetParameters(Param(2)) STATIC
        CLS
        FOR I = 0 TO 4
        READ SUIT$
        PRINT SUIT$ " (low, high)";
        INPUT Param(I,0), Param(I,1)
        NEXT
    END SUB

■ Output

    Spades (low, high)? 5,10
    Hearts (low, high)? 5,10
    Diamonds (low, high)? 6,8
    Clubs (low, high)? 6,8
    Points (low, high)? 5,15
    .
    .
    .
    Repeat with same parameters? n
    Repeat with new parameters? y
    Spades (low, high)? 4,8
    Hearts (low, high)? 4,8
    .
    .
    .


────────────────────────────────────────────────────────────────────────────
RESUME Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Continues program execution after an error-trapping routine has been
    invoked

■ Syntax

    RESUME «0»
    RESUME NEXT
    RESUME  { linenumber | linelabel }

■ Remarks

    The different forms of the RESUME statement redirect program flow as
    described in the following list:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Statement                Where Execution Resumes
    ──────────────────────────────────────────────────────────────────────────
    RESUME «0»               At the last statement executed in the module
                            containing the error handler.

                            If an active error handler is found in the module
                            where the error occurs, execution resumes with
                            the statement that caused the error.

    RESUME NEXT              At the statement immediately following the last
                            statement executed in the module containing the
                            error handler.

                            If an active error handler is found in the module
                            where the error occurs, execution resumes with
                            the statement immediately following the statement
                            that caused the error.

    Statement                Where Execution Resumes
    ──────────────────────────────────────────────────────────────────────────

    RESUME linenumber        At linenumber.

    RESUME linelabel         At linelabel.
    ──────────────────────────────────────────────────────────────────────────


    A RESUME statement that is not in an error-handling routine produces the
    error message RESUME without error. Reaching the end of an error-handling
    routine without finding RESUME produces the error message No RESUME.

    The line specified in a RESUME { linenumber | linelabel } statement must
    be defined at module level. As a rule, avoid using a line number or line
    label with a RESUME statement. Omitting the line number allows your
    program to continue no matter where the error occurred.

────────────────────────────────────────────────────────────────────────────
NOTE
    Programs containing error-handling routines must be compiled with either
    the /E (On Error) or /X (Resume Next) options when you are compiling from
    the BC command line. No options are required when compiling in the
    QuickBASIC environment, or using the Make EXE command from the QuickBASIC
    Run menu.
────────────────────────────────────────────────────────────────────────────

■ DIFFERENCES FROM BASICA

    In BASICA, if an error occurs in a DEF FN function, both RESUME and RESUME
    NEXT attempt to resume program execution at the line containing the
    function.

■ See Also

    ERR, ERL; ERROR; ON ERROR

■ Example

    This example has an error-handling routine starting at line 900. In
    BASICA, this routine would cause an error message (No negative arguments)
    to be printed for I= -1 and -2. The routine would then end. In BASIC, the
    error-handling routine prints its message when I= -1, then resumes at the
    beginning of the FOR...NEXT loop with I reset to 4, as seen below.

    10 ON ERROR GOTO 900
    20 DEF FNTEST(A) = 1 - SQR(A)
    30 FOR I = 4 TO -2 STEP -1
    40     PRINT I,FNTEST(I)
    50 NEXT
    60 END

    900 'Error-handling routine
    910     PRINT "No negative arguments"
    920 RESUME NEXT

■ Output

    4      -1
    3      -.7320509
    2      -.4142136
    1       0
    0       1
    -1      No negative arguments
    4      -1
    3      -.7320509
    2      -.4142136
    .
    .
    .


────────────────────────────────────────────────────────────────────────────
RETURN Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns control from a subroutine

■ Syntax

    RETURN «{linenumber | linelabel }»

■ Remarks

    Without a line label or number, RETURN continues execution where an event
    occurred (for event handling) or at the statement following the GOSUB (for
    subroutine calls). GOSUB and RETURN without a line number can be used
    anywhere in a program, but the GOSUB and corresponding RETURN must be at
    the same level.

    The linenumber or linelabel in the RETURN statement causes an
    unconditional return from a GOSUB subroutine to the specified line. RETURN
    with a line label or line number can only return control to a statement in
    the module-level code.

    A RETURN statement cannot be used to return control to a calling program
    from a subprogram defined by SUB. Use EXIT SUB.

────────────────────────────────────────────────────────────────────────────
NOTE
    BASIC's SUB procedures provide a more well-structured alternative to GOSUB
    subroutines.
────────────────────────────────────────────────────────────────────────────

■ See Also

    EXIT, GOSUB, ON event

■ Example

    See the example for the GOSUB statement.


────────────────────────────────────────────────────────────────────────────
RIGHT$ Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the rightmost n characters of a string

■ Syntax

    RIGHT$(stringexpression,n)

■ Remarks

    The argument stringexpression can be any string variable, string constant,
    or string expression. If n is equal to the number of characters in the
    argument stringexpression, then the RIGHT$ function returns
    stringexpression. If n = 0, RIGHT$ returns the null string (length zero).

■ See Also

    LEFT$, MID$

■ Example

    This program converts names that have been input in the form "Firstname
    [Middlename] Lastname" to the form "Lastname, Firstname [Middlename]":

    LINE INPUT "Name: "; Nm$
    I = 1 : Sppos = 0
    DO WHILE I > 0
        I = INSTR(Sppos+1,Nm$," ")   'Get position of next space.
        IF I > 0 THEN Sppos = I
    LOOP

    'SPPOS now points to the position of the last space.
    IF Sppos = 0 THEN
        PRINT Nm$                    'There was just a last name.
    ELSE
        'Everything after last space.
        Lastname$ = RIGHT$(Nm$,LEN(Nm$)-Sppos)
        'Everything before last space.
        Firstname$ = LEFT$(Nm$,Sppos-1)
        PRINT Lastname$ ", " Firstname$
    END IF
    END


────────────────────────────────────────────────────────────────────────────
RMDIR Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Removes an existing directory

■ Syntax

    RMDIR pathname

■ Remarks

    The pathname is the name of the directory that is to be deleted. The
    pathname must be a string of less than 128 characters. The directory to be
    removed must be empty except for the working directory ('.') and the
    parent directory ('..'); otherwise, one of two error messages is printed,
    either Path not found or Path/File access error.

    RMDIR works like the DOS command of the same name; the syntax in BASIC
    cannot be shortened to RD, as in DOS.

■ See Also

    CHDIR, MKDIR

■ Example

    The following example illustrates the use of the RMDIR statement:

    CHDIR "C:\SALES\TEMP"         'Move to \TEMP subdirectory in \SALES.
    KILL "*.*"                    'Remove all files in \TEMP.
    CHDIR ".."                    'Move back up to \SALES.
    RMDIR "TEMP"                  'Remove \TEMP subdirectory.


────────────────────────────────────────────────────────────────────────────
RND Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns a single-precision random number between 0 and 1

■ Syntax

    RND«(n)»

■ Remarks

    The value of n determines how RND generates the next random number:

    Argument                 Number Returned
    ──────────────────────────────────────────────────────────────────────────
    n < 0                    Always returns the same number for any given n

    n > 0 or n omitted       Returns the next random number in the sequence

    n = 0                    Returns the last number generated
    ──────────────────────────────────────────────────────────────────────────

    Even if n>0, the same sequence of random numbers is generated each time
    the program is run unless you initialize the random-number generator each
    time you run the program. (See the RANDOMIZE statement entry for more
    information about initializing the random-number generator.)

    To produce random integers in a given range, use the formula

    INT ((upperbound - lowerbound + 1)*RND + lowerbound)

    where upperbound is the highest number in the range, and lowerbound is the
    lowest number in the range.

■ Example

    See the examples for the RANDOMIZE and TYPE statements.


────────────────────────────────────────────────────────────────────────────
RSET Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Moves data from memory to a random-access file buffer (in preparation for
    a PUT statement) or right-justifies the value of a string in a string
    variable

■ Syntax

    RSET stringvariable=stringexpression

■ Remarks

    The stringvariable is usually a random-access file field defined in a
    FIELD statement, although it can be any string variable. The
    stringexpression is the value assigned to the variable.

    If stringexpression requires fewer bytes than were defined for
    stringvariable in the FIELD statement, the RSET statement right-justifies
    the string in the field (LSET left-justifies the string). Spaces are used
    to pad the extra positions. If the string is too long for the field, both
    LSET and RSET truncate characters from the right. Numeric values must be
    converted to strings before they are justified with the RSET or LSET
    statements.

    The RSET statement can be used with string variables unrelated to FIELD
    statements. When used with a fixed-length string variable, the value is
    right-justified and left-padded with blanks.

    When RSET is used with a variable-length string, the string is treated as
    a fixed field. The length of the field is the length of the value the
    variable had before the RSET statement. See the example below.

■ See Also

    FIELD; LSET; MKD$, MKI$, MKL$, MKS$; PUT

■ Example

    The following example shows the effects of using RSET to assign values to
    fixed- and variable-length strings:

    DIM TmpStr2 AS STRING * 10
    PRINT "         1         2         3"
    PRINT "123456789012345678901234567890"
    ' Use RSET on null variable-length string of length.
    ' Nothing prints because TmpStr$ is a zero-length field.
    TmpStr$ = ""
    RSET TmpStr$ = "Another"
    PRINT TmpStr$
    ' Use RSET on variable-length string with a value.
    TmpStr$ = SPACE$(20)
    RSET TmpStr$ = "Another"
    PRINT TmpStr$

    ' Use RSET on fixed-length string of length 10.
    RSET TmpStr2 = "Another"
    PRINT TmpStr2

■ Output

    1         2         3
    123456789012345678901234567890

                Another
        Another


────────────────────────────────────────────────────────────────────────────
RTRIM$ Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns a string with trailing (right-hand) spaces removed

■ Syntax

    RTRIM$(stringexpression)

■ Remarks

    The stringexpression can be any string expression. The RTRIM$ function
    works with both fixed- and variable-length string variables.

■ See Also

    LTRIM$

■ Example

    The example shows the effects of the RTRIM$ function on fixed- and
    variable-length strings. See also the example for the LTRIM$ function.

    DIM FixStr AS STRING * 10
    PRINT "         1         2"
    PRINT "12345678901234567890"
    FixStr = "Twine"
    PRINT FixStr + "*"
    PRINT RTRIM$(FixStr) + "*"
    VarStr$ = "Braided" + SPACE$(10)
    PRINT VarStr$ + "*"
    PRINT RTRIM$(VarStr$) + "*"

■ Output

    1         2
    12345678901234567890
    Twine     *
    Twine*
    Braided          *
    Braided*


────────────────────────────────────────────────────────────────────────────
RUN Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Restarts the program currently in memory or executes a specified program

■ Syntax

    RUN «{ linenumber | filespec }»

■ Remarks

    The RUN statement accepts the following arguments:

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    linenumber               The numeric label of the line where execution
                            begins. If no argument is given, execution begins
                            at the first executable line of code.

    filespec                 A string expression naming the program file to
                            load and run. The current program is cleared from
                            memory before the specified program is loaded.
    ──────────────────────────────────────────────────────────────────────────

    The line where execution begins must be in the module-level code.
    Therefore, a RUN statement in a SUB or FUNCTION procedure must point to
    labels at module level. If no line label is given, execution always starts
    with the first executable line of the program's main module.

    During compilation, if linenumber cannot be found in the module-level
    code, compilation halts and the error message Label not defined appears.

    Program lines can have line numbers or alphanumeric labels, such as
    OpenWindow:. If an alphanumeric label is the target of a RUN statement,
    execution halts, and the error message Type mismatch appears. Note that
    the QuickBASIC syntax checker does not warn you if you give the RUN
    statement an alphanumeric label instead of a line number.

    You do not need to specify the file name extension in filespec. The .BAS
    extension is assumed in the QuickBASIC environment, and the .EXE extension
    is assumed when running compiled, stand-alone programs. If the program you
    wish to run has a different extension, you must give the extension. If the
    program name has no extension, the file name given must end with a period.

    For example,

    RUN "CATCHALL"

    would execute CATCHALL.EXE from a BC-compiled program, and CATCHALL.BAS
    from within QuickBASIC.

    Programs running within the QuickBASIC environment must call only
    QuickBASIC program files. The file is loaded and run as if it were a
    QuickBASIC program; if it is not in the QuickBASIC program format,
    execution halts. The error message that appears varies, depending on the
    file's contents. Likewise, programs compiled with BC must not invoke
    QuickBASIC source files, as these run only within the QuickBASIC
    environment.

    An executable file need not have been written in QuickBASIC. Any
    executable file may be run.

    When running a program under QuickBASIC, if an executable file matching
    the file name in filespec cannot be found, the error message File not
    found appears, and control returns to QuickBASIC. When running a program
    compiled by BC, the error message File not found in module programname
    appears, and control returns to DOS.

    When the invoked program completes execution, control does not return to
    the invoking program. If the invoking program ran outside QuickBASIC,
    control returns to DOS. If the invoking program ran under QuickBASIC,
    control returns to QuickBASIC.

    If you edit a QuickBASIC program containing a RUN statement, then run the
    program before saving the changes, QuickBASIC asks if you wish to save the
    new version of the program before RUN clears it from memory.

    RUN closes all files and clears program memory before loading the
    designated program.The BC compiler does not support the R option from
    BASICA. (This option keeps all open data files open.) If you want to run a
    different program, but leave open files open, use the CHAIN statement.

■ See Also

    CHAIN

■ Examples

    The following example shows how RUN linenumber resets all numeric
    variables to 0. As the line number following RUN increases in lines 60,
    70, 80, and 90, the variables in the earlier statements lose their
    assigned values.

    10 A = 9
    20 B = 7
    30 C = 5
    40 D = 4
    50 PRINT A,B,C,D
    60 IF A = 0 THEN 70 ELSE RUN 20
    70 IF B = 0 THEN 80 ELSE RUN 30
    80 IF C = 0 THEN 90 ELSE RUN 40
    90 IF D = 0 THEN END ELSE RUN 50

■ Output

    9   7   5   4
    0   7   5   4
    0   0   5   4
    0   0   0   4
    0   0   0   0


────────────────────────────────────────────────────────────────────────────
SADD Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the address of the specified string expression

■ Syntax

    SADD(stringvariable)

■ Remarks

    The SADD function returns the address of a string as an offset (near
    pointer) from the current data segment. The offset is a two-byte integer.
    SADD is most often used in mixed-language programming.

    The argument may be a simple string variable or a single element of a
    string array. You may not use fixed-length string arguments.

    Use this function with care because strings can move in the BASIC string
    space (storage area) at any time. SADD works only with string variables
    stored in DGROUP.

────────────────────────────────────────────────────────────────────────────
NOTE
    Do not add characters to the beginning or end of a string passed using
    SADD and LEN. Adding characters may produce a run-time error.
────────────────────────────────────────────────────────────────────────────

■ See Also

    CALL, CALLS (Non-BASIC); DECLARE (Non-BASIC); FRE; PEEK; POKE;
    VARPTR; VARPTR$; VARSEG

■ Example

    The following example uses SADD and LEN to pass a string to a function
    written in C. The C function returns the ASCII value of a character at a
    given position in the string. The C program would be separately compiled
    and stored in a Quick library or explicitly linked to form an .EXE file.
    Note that BYVAL is the default for C.

    ' Pass a string to a C function using SADD and LEN.
    DEFINT A-Z
    ' Declare the function;
    DECLARE FUNCTION MyAsc CDECL (BYVAL A%, BYVAL B%, BYVAL C%)

    A$="abcdefghijklmnopqrstuvwxyz"
    PRINT "Enter a character position (1-26). Enter 0 to Quit."
    DO

    ' Get a character position.
        INPUT N
    ' End if the position is less than zero.
        IF N<=0 THEN EXIT DO
    ' Call C function; the function returns the ASCII code of the
    ' character at position N in A$.
        AscValue=MyAsc(SADD(A$),LEN(A$),N)
        PRINT "ASCII value: ";AscValue;"Character: ";CHR$(AscValue)

    LOOP
    END

    /* C function to return the ASCII value of the character
        at position pos in string c of length len.          */

    int far myasc(c,len,pos)
    char near *c;
    int len, pos;
    {

        if(pos>len) return(c[--len]);/* Avoid indexing off end. */
        else if (pos<1) return(c[0]);/* Avoid indexing off start. */
        else
        return(c[--pos]);/* pos is good. Return the character at
                            pos-1 because C arrays (strings) are
                            zero-indexed. */
    }

■ Output

    Enter a character position (1-26). Enter -1 to Quit.
    ? 24
    ASCII value:  120 Character: x
    ? -1


────────────────────────────────────────────────────────────────────────────
SCREEN Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Reads a character's ASCII value or its color from a specified screen
    location

■ Syntax

    SCREEN(row,column«,colorflag»)

■ Remarks

    The following list describes the SCREEN function's arguments:

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    row                      The row number of the screen location. The row is
                            a numeric expression that evaluates to an
                            unsigned integer.

    column                   The column number of the screen location. The
                            column is a numeric expression that evaluates to
                            an unsigned integer.

    colorflag                A numeric expression. When colorflag is nonzero,
                            SCREEN returns the number of the color at the
                            screen location. If the colorflag is zero or
                            absent, the ASCII code of the character at the
                            location is returned as an integer.
    ──────────────────────────────────────────────────────────────────────────

■ Examples

    If the character at (10,10) in the following examples is A, then the
    function would return 65, the ASCII code for A:

    X=SCREEN(10,10)

    The following example returns the color attribute of the character in the
    upper-left corner of the screen:

    X=SCREEN(1,1,1)


────────────────────────────────────────────────────────────────────────────
SCREEN Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Sets the specifications for the display screen

■ Syntax

    SCREEN «mode» «,«colorswitch»
    »«,«apage» »«,«vpage»»

■ Remarks

    The SCREEN statement selects a screen mode appropriate for a particular
    combination of display and adapter. Later sections describe the available
    modes for specific adapters. The following list describes the arguments of
    the SCREEN statement:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    mode                     An integer constant or expression indicating the
                            screen mode. The valid modes are described below
                            for each of the supported adapters.

    colorswitch              Determines whether color is displayed on
                            composite monitors. The colorswitch is a numeric
                            expression in the range 0-255. When it is true
                            (nonzero), color is disabled and only
                            black-and-white images are displayed. When
                            colorswitch is false (zero), images are in color.
                            The colorswitch argument's meaning is inverted in
                            screen mode 0. In screen modes 2 and up,
                            colorswitch is ignored.

    apage                    A numeric expression that is the number of the
                            screen page that text output or graphics commands
                            write to. Tables below indicate valid values for
                            apage with various adapters.
    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
                            apage with various adapters.

    vpage                    A numeric expression that is the number of the
                            screen page being displayed. Tables below
                            indicate valid values for vpage with various
                            adapters.
    ──────────────────────────────────────────────────────────────────────────


    The next two subsections summarize the screen modes and discuss the modes
    available with specific combinations of adapters and displays. The final
    subsection summarizes attributes and colors.

    SUMMARY OF SCREEN MODES

    The following paragraphs briefly summarize each of the screen modes. The
    color adapters referred to are the IBM Color Graphics Adapter (CGA), the
    IBM Enhanced Graphics Adapter (EGA), the IBM Video Graphics Array (VGA)
    and the IBM Multicolor Graphics Array (MCGA). The Hercules(R) Graphics
    Card, Graphics Card Plus and InColor(R) adapters are supported, but only
    with monochrome monitors. The next subsection supplies detailed
    information about the effects of a screen mode when used with a specific
    combination of display and adapter.

────────────────────────────────────────────────────────────────────────────
NOTE
    Many screen modes support more than one combination of rows and columns on
    the screen. See the entry for the WIDTH statement for more information
    about changing the number of rows and columns on the display.
────────────────────────────────────────────────────────────────────────────

    Screen 0

    ■ Text mode only

    ■ Either 40 x 25, 40 x 43, 40 x 50, 80 x 25, 80 x 43, or 80 x 50 text
    format with character-box size of 8 x 8 (8 x 14, 9 x 14, or 9 x 16 with
    EGA or VGA)

    ■ Assignment of 16 colors to 2 attributes

    ■ Assignment of 16 colors to any of 16 attributes (with CGA or EGA)

    ■ Assignment of 64 colors to any of 16 attributes (with EGA or VGA)

    Screen 1

    ■ 320 x 200 pixel medium-resolution graphics

    ■ 40 x 25 text format with character-box size of 8 x 8

    ■ Assignment of 16 colors to 4 attributes with EGA or VGA

    ■ Supports CGA, EGA, VGA, and MCGA

    Screen 2

    ■ 640 x 200 pixel high-resolution graphics

    ■ 80 x 25 text format with character-box size of 8 x 8

    ■ Assignment of 16 colors to 2 attributes with EGA or VGA

    ■ Supports CGA, EGA, VGA, and MCGA Screen 3

    ■ Hercules adapter required

    ■ Monochrome monitor only

    ■ 720 x 348 pixel resolution, monochrome

    ■ 80 x 25 text format with character-box size of 9 x 14; bottom two scan
    lines of 25th row not visible

    ■ Two screen pages (one only if a second display adapter is installed)

    ■ PALETTE statement not supported

────────────────────────────────────────────────────────────────────────────
NOTE
    The Hercules driver (MSHERC.COM) must be loaded for the Hercules card to
    function. This file is supplied with QuickBASIC. Type MSHERC before
    running QuickBASIC. If a compatible color adapter is also installed (eg,
    CGA), type MSHERC /H instead. This limits the Hercules card to one screen
    page but permits normal operation of the color adapter. If the Hercules
    driver is not loaded, the Hercules card operates like an IBM Monochrome
    Display Adapter (MDA).
────────────────────────────────────────────────────────────────────────────

    Screen 4

    ■ 640 x 400 pixel high-resolution graphics

    ■ 80 x 25 text format with character-box size of 8 x 16

    ■ Assignment of 1 of 16 colors as the foreground color (selected by the
    COLOR statement); background fixed at black

    ■ Supports Olivetti(R) Personal Computers, models M24, M240, M28, M280,
    M380, M380/C, and M380/T, and AT&T(R) Personal Computers 6300 series

────────────────────────────────────────────────────────────────────────────
WARNING
    Olivetti personal computers running in DOS-compatibility mode under
    Microsoft Operating System/2 should avoid this screen mode.
────────────────────────────────────────────────────────────────────────────

    Screen 7

    ■ 320 x 200 pixel medium-resolution graphics

    ■ 40 x 25 text format with character-box size of 8 x 8

    ■ Multiple screen pages

    ■ Assignment of 16 colors to any of 16 attributes

    ■ EGA or VGA required

    Screen 8

    ■ 640 x 200 pixel high-resolution graphics

    ■ 80 x 25 text format with character-box size of 8 x 8

    ■ Multiple screen pages

    ■ Assignment of 16 colors to any of 16 attributes

    ■ EGA or VGA required

    Screen 9

    ■ 640 x 350 pixel enhanced-resolution graphics

    ■ 80 x 25 or 80 x 43 text format with character-box size of 8 x 14 or 8 x
    8

    ■ Assignment of either 64 colors to 16 attributes (more than 64K of EGA or
    VGA memory) or 16 colors to 4 attributes (64K of EGA or VGA memory)

    ■ Multiple screen pages

    ■ EGA or VGA required

    Screen 10

    ■ Monochrome only

    ■ 640 x 350 pixel enhanced-resolution graphics

    ■ 80 x 25 or 80 x 43 text format with character-box size of 8 x 14 or 8 x
    8

    ■ Multiple screen pages

    ■ Assignment of up to nine pseudocolors to 4 attributes (refer to Tables
    R.9 and R.10 in the next section)

    ■ EGA or VGA required

    Screen 11

    ■ 640 x 480 pixel very high-resolution graphics

    ■ 80 x 30 or 80 x 60 text format with character-box size of 8 x 16 or 8 x
    8

    ■ Assignment of up to 256K colors to 2 attributes

    ■ VGA or MCGA required

    Screen 12

    ■ 640 x 480 pixel very-high-resolution graphics

    ■ 80 x 30 or 80 x 60 text format with character-box size of 8 x 16 or 8 x
    8

    ■ Assignment of up to 256K colors to 16 attributes

    ■ VGA required

    Screen 13

    ■ 320 x 200 pixel medium-resolution graphics

    ■ 40 x 25 text format with character-box size of 8 x 8

    ■ Assignment of up to 256K colors to up to 256 attributes

    ■ VGA or MCGA required

    SCREEN MODES, ADAPTERS, AND DISPLAYS

    This section describes the screen modes for specific combinations of
    adapters and displays. The IBM Monochrome Display and Printer Adapter
    (MDPA) can be used only with a monochrome display. Only screen mode 0,
    text mode, can be used with the MDPA. Table R.6 summarizes the effect of
    using screen mode 0 with an MDPA.

    Table R.6   MDPA Screen Modes

    Screen      Rows and
    Mode        Columns      Attributes  Colors      Resolution   Pages
    ──────────────────────────────────────────────────────────────────────────
    0           80x25        16          3           720x350      1
    ──────────────────────────────────────────────────────────────────────────

    Table R.7 summarizes the screen modes available with Hercules adapters.

    Table R.7   Hercules Screen Modes

    Screen      Rows and
    Mode        Columns      Attributes  Colors      Resolution   Pages
    ──────────────────────────────────────────────────────────────────────────
    0           80x25        16          1           720x348      2
    3           80x25        16          1           720x348      2
    ──────────────────────────────────────────────────────────────────────────

    The IBM Color Graphics Adapter (CGA) and Color Display are typically
    paired. This combination permits running text-mode programs and both
    medium-resolution and high-resolution graphics programs.

    Table R.8 summarizes the screen modes available with the CGA.

    Table R.8   CGA Screen Modes

    Screen         Rows and
    Mode           Columns        Colors        Resolution     Pages
    ──────────────────────────────────────────────────────────────────────────
    0              40x25          16            320x200        8
                    80x25          16            640x200        4
    1              40x25          4             320x200        1
    2              80x25          2             640x200        1
    ──────────────────────────────────────────────────────────────────────────

    The IBM Enhanced Graphics Adapter (EGA) may be used with either the IBM
    Color Display or the Enhanced Color Display. In screen modes 0, 1, 2, 7,
    and 8, these pairings produce similar results, except for the following
    possible differences:

    1. The border color cannot be set on an Enhanced Color Display when it is
        in 640 x 350 text mode.

    2. The text quality is better on the Enhanced Color Display (an 8 x 14
        character box for Enhanced Color Display versus an 8 x 8 character box
        for Color Display).

    Screen mode 9 takes full advantage of the capabilities of the Enhanced
    Color Display and provides for the highest resolution possible for the
    EGA/Enhanced Color Display configuration. Programs written for this mode
    will not work for any other hardware configuration except the VGA. Table
    R.9 summarizes the screen modes that can be used with an EGA.

    Table R.9   EGA Screen Modes

╓┌─┌───────┌─────────┌────────┌──────────┌───────┌──────────┌─────────┌──────╖
    Screen  Rows and                                         Page
    Mode    Columns   Display  Attributes Colors  Resolution Size      Pages
                    ☼
    ──────────────────────────────────────────────────────────────────────────
    0       40x25     C        16         16      320x200    N/A       8
            40x25     E        16         64      320x350    N/A       8
            40x43     E        16         64      320x350    N/A       8☼
            80x25     C        16         16      640x200    N/A       8☼
            80x25     E        16         64      640x350    N/A       8☼
            80x25     C        16         16      640x200    N/A       8☼
            80x25     M        16         3       720x350    N/A       8☼
            80x43     E        16         64      640x350    N/A       4☼
            80x43     M        16         3       720x350    N/A       4☼
    Screen  Rows and                                         Page
    Mode    Columns   Display  Attributes Colors  Resolution Size      Pages
                    ☼
    ──────────────────────────────────────────────────────────────────────────
            80x43     M        16         3       720x350    N/A       4☼
    1       40x25     N/A      4          16      320x200    16K       1
    2       80x25     N/A      2          16      640x200    16K       1
    7       40x25     N/A      16         16      320x200    32K       ☼
    8       80x25     N/A      16         16      640x200    64K       ☼
    9☼      80x25     E        4          64      640x350    64K       1
            80x43     E        4          64      640x350    64K       1
            80x25     E        16         64      640x350    128K      ☼
            80x43     E        16         64      640x350    128K      ☼
    10      80x25     M        4          9       640x350    64K       ☼
            80x43     M        4          9       640x350    64K       ☼
    ──────────────────────────────────────────────────────────────────────────


    Only the EGA and VGA can be paired with the IBM Monochrome Display to run
    programs in screen mode 10. This mode can be used to display monochrome
    graphics at a very high resolution.

    The following two tables summarize the default attributes and colors for
    screen mode 10 used with a monochrome display.

    Table R.10   Default Attributes: Screen Mode 10, Monochrome Display

    Attribute                Displayed
    Value                    Pseudocolor
    ──────────────────────────────────────────────────────────────────────────
    0                        Off
    1                        On, normal intensity
    2                        Blink
    3                        On, high intensity
    ──────────────────────────────────────────────────────────────────────────

    Table R.11   Color Values: Screen Mode 10, Monochrome Display

    Color                    Displayed
    Value                    Pseudocolor
    ──────────────────────────────────────────────────────────────────────────
    0                        Off
    1                        Blink, off to on
    2                        Blink, off to high intensity
    3                        Blink, on to off
    4                        On
    5                        Blink, on to high intensity
    6                        Blink, high intensity to off
    7                        Blink, high intensity to on
    8                        High intensity
    ──────────────────────────────────────────────────────────────────────────

    The IBM Video Graphics Array (VGA) adapter offers significantly enhanced
    text and graphics in all screen modes. Table R.12 summarizes the modes
    available with the VGA.

    Table R.12   VGA Screen Modes

╓┌─┌──────────┌─────────┌──────────┌─────────┌──────────┌─────────┌──────────╖
                Rows and                                  Page
    Mode       Columns   Attributes Colors    Resolution Size      Pages
    ──────────────────────────────────────────────────────────────────────────
    0          40x25     16         64        360x400    N/A       8
                Rows and                                  Page
    Mode       Columns   Attributes Colors    Resolution Size      Pages
    ──────────────────────────────────────────────────────────────────────────
    0          40x25     16         64        360x400    N/A       8
                40x43     16         64        320x350    N/A       8
                40x50     16         64        320x400    N/A       4
                80x25     16         64        720x400    N/A       8
                80x43     16         64        640x350    N/A       4
                80x43     16         3         720x350    N/A       4
                80x50     16         64        640x400    N/A       4
                80x50     16         3         720x400    N/A       4
    1          40x25     4          16        320x200    16K       1
    2          80x25     2          16        640x200    16K       1
    7          40x25     16         16        320x200    32K       ☼
    8          80x25     16         16        640x200    64K       ☼
    9          80x25     16         64        640x350    128K      ☼
                80x43     16         64        640x350    128K      ☼
    10         80x25     4          9         640x350    64K       ☼
                80x43     4          9         640x350    64K       ☼
    11         80x30     2          256K      640x480    64K       1
                80x60     2          256K      640x480    64K       1
                Rows and                                  Page
    Mode       Columns   Attributes Colors    Resolution Size      Pages
    ──────────────────────────────────────────────────────────────────────────
                80x60     2          256K      640x480    64K       1
    12         80x30     16         256K      640x480    256K      1
                80x60     16         256K      640x480    256K      1
    13         40x25     256        256K      320x200    64K       1
    ──────────────────────────────────────────────────────────────────────────


    See the PALETTE statement for a description of how the VGA calculates
    color values.

    The IBM Multicolor Graphics Array (MCGA) combines the modes of the CGA
    with the very high resolution and 256K color modes of the VGA to provide
    enhanced text and graphics in all modes. Table R.13 summarizes the modes
    supported by the MCGA.

    Table R.13   MCGA Screen Modes

                Rows and                                  Page
    Mode       Columns   Attributes Colors    Resolution Size      Pages
    ──────────────────────────────────────────────────────────────────────────
    0          40x25     16         N/A       320x400    N/A       8
                80x25     16         N/A       640x400    N/A       8
    1          40x25     4          N/A       320x200    16K       1
    2          80x25     2          N/A       640x200    16K       1
    11         80x30     2          256K      640x480    64K       1
                80x60     2          256K      640x480    64K       1
    13         40x25     256        256K      320x200    64K       1
    ──────────────────────────────────────────────────────────────────────────

    The MCGA uses the same color values as the VGA. See the PALETTE statement
    for a description of how the MCGA calculates color values.

    ATTRIBUTES AND COLORS

    For various screen modes and display hardware configurations, different
    attribute and color settings exist. (See the PALETTE statement for a
    discussion of attribute and color number.) The majority of these attribute
    and color configurations are summarized in Tables R.14-R.16.

    Table R.14   Default Attributes and Colors for Screen Modes 1 and 9☼

    Attributes   Color Display                  Monochrome Display
                Number☼        Color           Number☼       Color
    ──────────────────────────────────────────────────────────────────────────
    0            0              Black           0             Off
    1            11             Light cyan      2             High intensity
    2            13             Light magenta   2             High intensity
    3            15             High-intensity  0             Off
                                white
    ──────────────────────────────────────────────────────────────────────────

    Table R.15   Default Attributes and Colors for Screen Modes 2 and 11

    Attributes   Color Display                  Monochrome Display
                Number☼        Color           Number☼Color
    ──────────────────────────────────────────────────────────────────────────
    0            0              Black           0             Off
    1            15             High-intensity  0             Off
                                white
    ──────────────────────────────────────────────────────────────────────────

    Table R.16   Default Attributes and Colors for Screen Modes 0, 7, 8, 9☼,
    12, and 13

╓┌─┌──────────────┌────────────┌───────────────┌─────────────┌───────────────╖
    Attributes     Color Display                Monochrome Display
                    Number☼      Color           Number☼       Color
    ──────────────────────────────────────────────────────────────────────────
    0              0            Black           0             Off
    1              1            Blue                          Underlined☼
    2              2            Green           1             On☼
    3              3            Cyan            1             On☼
    4              4            Red             1             On☼
    5              5            Magenta         1             On☼
    6              6            Brown           1             On☼
    7              7            White           1             On☼
    8              8            Gray            0             Off
    9              9            Light blue                    High intensity
                                                            Underlined
    10             10           Light green     2             High intensity
    11             11           Light cyan      2             High intensity
    Attributes     Color Display                Monochrome Display
                    Number☼      Color           Number☼       Color
    ──────────────────────────────────────────────────────────────────────────
    11             11           Light cyan      2             High intensity
    12             12           Light red       2             High intensity
    13             13           Light magenta   2             High intensity
    14             14           Yellow          2             High intensity
    15             15           High-intensity  0             Off
                                white
    ──────────────────────────────────────────────────────────────────────────


■ Example

    See the LINE, CIRCLE, and DRAW statements for examples of the SCREEN
    statement.


────────────────────────────────────────────────────────────────────────────
SEEK Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the current file position

■ Syntax

    SEEK(filenumber)

■ Remarks

    The filenumber is the number used in the OPEN statement to open the file.
    SEEK returns a value in the range 1 to 2,147,483,647 (equivalent to
    2^31-1).

    SEEK returns the number of the next record read or written when used on
    RANDOM mode files. For files opened in BINARY, OUTPUT, APPEND, or INPUT
    mode, SEEK returns the byte position in the file where the next operation
    is to take place. The first byte in a file is 1.

    When used on a device that does not support SEEK, the function returns
    zero. The BASIC devices (SCRN:, CONS:, KYBD:, COMn:, and LPTn:) do not
    support SEEK.

    See Chapter 3, "File and Device I/O," in Programming in BASIC for more
    information.

■ See Also

    GET (File I/O), OPEN, PUT (File I/O), SEEK Statement

■ Example

    The following code fragment prints a message indicating whether the last
    read or write was done in the first, second, or final third of the file:

    SELECT CASE (SEEK(1))
        CASE IS < .333*LOF(1)
        PRINT "In first third of file."
        CASE .333*LOF(1) TO .667*LOF(1)
        PRINT "In second third of file."
        CASE IS >= .667*LOF(1)
        PRINT "In last third of file."
        CASE ELSE
    END SELECT


────────────────────────────────────────────────────────────────────────────
SEEK Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Sets the position in a file for the next read or write

■ Syntax

    SEEK «#»filenumber,position

■ Remarks

    The filenumber is an integer number used in the OPEN statement to open the
    file.

    The position is a numeric expression indicating where the next read or
    write is done. The position must be in the range 1 to 2,147,483,647
    (equivalent to 2^31-1). For files opened in RANDOM mode, position is the
    number of a record in the file.

    For files opened in BINARY, INPUT, OUTPUT, or APPEND modes, position is
    the number of a byte from the beginning of the file. The first byte in a
    file is 1. After a SEEK, the next file I/O operation starts at that byte
    in the file.

────────────────────────────────────────────────────────────────────────────
NOTE
    Record numbers on a GET or PUT override the file positioning done by SEEK.
────────────────────────────────────────────────────────────────────────────

    Performing a file write after doing a SEEK beyond the end of a file
    extends the file. A SEEK to a negative or zero position produces an error
    message that reads Bad record number.

    When used on a device that does not support SEEK, BASIC ignores SEEK and
    leaves the file position unchanged. The BASIC devices (SCRN:, CONS:,
    KYBD:, COMn:, and LPTn:) do not support SEEK.

    See Chapter 3, "File and Device I/O," in Programming in BASIC for more
    information.

■ See Also

    GET (File I/O), OPEN, PUT (File I/O), SEEK Function

■ Example

    The following code fragment uses a combination of the SEEK function and
    SEEK statement to back up the file position and rewrite a record if a
    variable is true (nonzero):

    CONST FALSE=0, TRUE=NOT FALSE
    .
    .
    .
    IF ReWriteFlag = TRUE THEN
        ' Back up file by the length of the record variable that
        ' is used to write to the file.
        SEEK #1, SEEK(1)-LEN(RecordVar)
        PUT #1,,RecordVar
    END IF


────────────────────────────────────────────────────────────────────────────
SELECT CASE Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Executes one of several statement blocks depending on the value of an
    expression

■ Syntax

    SELECT CASE testexpression
    CASE expressionlist1

        «statementblock-1»

    «CASE expressionlist2

        «statementblock-2»»
    .
    .
    .

    «CASE ELSE

        «statementblock-n»»

    END SELECT

■ Remarks

    The following list describes the parts of the SELECT CASE statement:

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    testexpression           Any numeric or string expression.

    statementblock-1,        The elements statementblock-1 to statementblock-n
    statementblock-2,        consist of any number of statements on one or
    statementblock-n         more lines.

    expressionlist1,         These elements can have any of the three
    expressionlist2          following forms: expression«,expression...»
                            expression TO expression IS relational-operator
                            expression
    ──────────────────────────────────────────────────────────────────────────

    The following list describes the parts of an expressionlist:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    expression               Any numeric or string expression. The type of the
                            expression must match the type of the expression
                            being tested.

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────

    relational-operator      Any of the following operators:

                            Symbol                  Meaning

                            <                       Less than

                            <=                      Less than or equal to

                            >                       Greater than

                            >=                      Greater than or equal to

                            <>                      Not equal

                            =                       Equal

    ──────────────────────────────────────────────────────────────────────────

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────


    If the testexpression matches the expressionlist associated with a CASE
    clause, then the statement block following that CASE clause is executed up
    to the next CASE clause or, for the last one, up to END SELECT. Control
    then passes to the statement following END SELECT.

    If you use the TO keyword to indicate a range of values, the smaller value
    must appear first. For example, the statements associated with the line
    CASE -1 TO -5 are not executed if the testexpression is -4. The line
    should be written as CASE -5 TO -1.

    You may use a relational operator only if the IS keyword appears. If CASE
    ELSE is used, its associated statements are executed only if the
    testexpression does not match any of the other CASE selections. It is a
    good idea to have a CASE ELSE statement in your SELECT CASE block to
    handle unforeseen testexpression values.

    When there is no CASE ELSE statement and no expression listed in the CASE
    clauses matches testexpression, program execution continues normally. No
    error occurs.

    You may use multiple expressions or ranges in each CASE clause. For
    example, the following line is valid:

    CASE 1 TO 4, 7 TO 9, 11, 13, IS > MaxNumber%

    You may also specify ranges and multiple expressions for strings:

    CASE "everything", "nuts" TO "soup", TestItem$

    CASE matches strings that are exactly equal to everything, the current
    value of TestItem$, or that fall between nuts and soup in alphabetical
    order.

    Strings are evaluated according to the ASCII values of their characters.
    Lowercase letters have larger ASCII values than uppercase letters, so

    nuts  >  Nuts  >  NUTS

    If an expression appears in more than one CASE clause, only the statements
    associated with the first appearance of the expression are executed.

    SELECT CASE statements may be nested. Each SELECT CASE statement must have
    a matching END SELECT statement.

■ Example

    In the following program, the SELECT CASE statement is used to take
    different actions based on the input value:

    ' Program demonstrates various forms of CASE items
        INPUT "Enter acceptable level of risk (1-10): ", Total
        SELECT CASE Total

            CASE IS >= 10
                PRINT "Maximum risk and potential return"
                PRINT "Choose stock investment plan"

            CASE  6 TO 9
                PRINT "High risk and potential return"
                PRINT "Choose corporate bonds"

            CASE  2 TO 5
                PRINT "Moderate risk and return"
                PRINT "Choose mutual fund"

            CASE 1
                PRINT "No risk, low return"
                PRINT "Choose IRA"

            CASE ELSE
                PRINT "RESPONSE OUT OF RANGE"

        END SELECT

■ Output

    Enter acceptable level of risk (1-10): 10
    Maximum risk and potential return
    Choose stock investment plan

    Enter acceptable level of risk (1-10): 0
    RESPONSE OUT OF RANGE


────────────────────────────────────────────────────────────────────────────
SETMEM Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Changes the amount of memory used by the far heap──the area where far
    objects and internal tables are stored

■ Syntax

    SETMEM(numeric-expression)

■ Remarks

    The SETMEM function increases or decreases the far heap by the number of
    bytes indicated by numeric-expression. If the numeric-expression is
    negative, SETMEM decreases the far heap by the indicated number of bytes.
    When the numeric-expression is positive, SETMEM attempts to increase the
    far heap space by the number of bytes.

    SETMEM returns the total number of bytes in the far heap. If the
    numeric-expression is zero, SETMEM returns the current size of the far
    heap. If SETMEM cannot change the far heap by the requested number of
    bytes, it reallocates as many bytes as possible.

    SETMEM can be used in mixed-language programming to decrease the far heap
    space so procedures in other languages can dynamically allocate far
    memory. A first call to SETMEM trying to increase the far heap has no
    effect because BASIC allocates as much memory as possible to the far heap
    when a program starts.

■ Example

    The following program outlines how SETMEM could be used to free memory for
    a C function that uses malloc to get dynamic memory. The C function is
    separately compiled and then put in a Quick library or linked to the BASIC
    program. The C function is compiled using the large memory model, so calls
    to malloc use the far space freed by the BASIC program.

    DEFINT A-Z
    DECLARE SUB CFunc CDECL (BYVAL X AS INTEGER)

    ' Decrease the size of the far heap so CFunc can use
    ' malloc to get dynamic memory.
    BeforeCall=SETMEM(-2048)

    ' Call the C function.
    CFunc(1024%)

    ' Return the memory to the far heap; use a larger value so
    ' all space goes back into the heap.
    AfterCall=SETMEM(3500)

    IF AfterCall <= BeforeCall THEN PRINT "Memory not reallocated."

    END

    void far cfunc(bytes)
    int bytes;
    {
        char *malloc();
        char *workspace;

        /* Allocate working memory using amount BASIC freed. */
        workspace=malloc((unsigned) bytes);

        /* Working space would be used here. */

        /* Free memory before returning to BASIC. */
        free(workspace);
    }


────────────────────────────────────────────────────────────────────────────
SGN Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Indicates the sign of a numeric expression

■ Syntax

    SGN(numeric-expression)

■ Remarks

    The SGN function returns a value depending on the sign of its argument:

    If numeric-expression > 0, then SGN(numeric-expression) returns 1.

    If numeric-expression = 0, then SGN(numeric-expression) returns 0.

    If numeric-expression < 0, then SGN(numeric-expression) returns -1.

■ Example

    The following program calculates and prints the solution for a quadratic
    (or for a second-degree) equation. The program uses the sign of a test
    expression to determine how to calculate the solution.

    CONST NoRealSoln=-1, OneSoln=0, TwoSolns=1
    ' Input coefficients of quadratic equation:
    ' ax^2 + bx + c = 0.
    INPUT;"a = ",   A
    INPUT;",  b = ",B
    INPUT ",  c = ",C
    Test = B^2 - 4*A*C
    SELECT CASE SGN(Test)
        CASE  NoRealSoln
        PRINT "This equation has no real-number solutions."
        CASE  OneSoln
        PRINT "This equation has one solution: ";
        PRINT -B/(2*A)
        CASE  TwoSolns
        PRINT "This equation has two solutions: ";
        PRINT (-B + SQR(Test))/(2*A) " and ";
        PRINT (-B - SQR(Test))/(2*A)
    END SELECT

■ Output

    a = 12,  b = -5,  c = -2
    This equation has two solutions:  .6666667          -.25


────────────────────────────────────────────────────────────────────────────
SHARED Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Gives a SUB or FUNCTION procedure access to variables declared at the
    module level without passing them as parameters

■ Syntax

    SHARED variable «AS type» «, variable «AS type»»...

■ Remarks

    The argument variable is either an array name followed by () or a variable
    name. The AS clause can be used to indicate the variable's type. The type
    argument can be INTEGER, LONG, SINGLE, DOUBLE, STRING, fixed-length string
    (STRING*length), or a user-defined type.

    By using either the SHARED statement in a SUB or FUNCTION procedure, or
    the SHARED attribute with COMMON or DIM in the module-level code, you can
    use variables in a procedure without passing them as parameters. The
    SHARED attribute shares variables among all procedures in a module, while
    the SHARED statement shares variables between a single procedure and the
    module-level code.

────────────────────────────────────────────────────────────────────────────
NOTE
    The SHARED statement only shares variables within a single compiled
    module. It does not share variables with programs in the Quick library or
    with procedures compiled separately and linked to the program. The SHARED
    statement only shares variables between the module-level code and a SUB or
    FUNCTION in the same module.
────────────────────────────────────────────────────────────────────────────

    The SHARED statement can appear only in a SUB or FUNCTION. For more
    information see Chapter 2, "SUB and FUNCTION Procedures," in Programming
    in BASIC and Chapter 4, "Programs and Modules," in this manual.

■ See Also

    COMMON, DIM, SUB

■ Example

    The following program calls a subprogram named CONVERT that converts the
    input decimal number to its string representation in the given new base.
    The string N$ is shared by the subprogram and the main program.

    DEFINT A-Z
    DO
        INPUT "Decimal number (input number <= 0 to quit): ",Decimal
        IF Decimal <= 0 THEN EXIT DO
        INPUT "New base: ",Newbase
        N$ = ""
        PRINT Decimal "base 10 equals ";
        DO WHILE Decimal > 0
        CALL Convert (Decimal,Newbase)
        Decimal = Decimal\Newbase
        LOOP
        PRINT N$ " base" Newbase
        PRINT
    LOOP

    SUB Convert (D,Nb) STATIC
    SHARED N$
        ' Take the remainder to find the value of the current
        ' digit.
        R = D MOD Nb
        ' If the digit is less than ten, return a digit (0...9).
        ' Otherwise, return a letter (A...Z).
        IF R < 10 THEN Digit$ = CHR$(R+48) ELSE Digit$ = CHR$(R+55)
        N$ = RIGHT$(Digit$,1) + N$
    END SUB

■ Output

    Decimal number (input number <= 0 to quit): 256
    New base: 2
    256 base 10 equals 100000000 base 2

    Decimal number (input number <= 0 to quit): 31
    New base: 16
    31 base 10 equals 1F base 16

    Decimal number (input number <= 0 to quit): -1


────────────────────────────────────────────────────────────────────────────
SHELL Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Exits the BASIC program, runs a .COM, .EXE, or .BAT program or a DOS
    command, and returns to the program at the line following the SHELL
    statement

■ Syntax

    SHELL «commandstring»

■ Remarks

    The commandstring must be a valid string expression containing the name of
    a program to run and any program options.

    Any .COM file, .EXE file, .BAT program, or DOS function that runs under
    the SHELL statement is called a "child process." Child processes are
    executed by the SHELL statement, loading and running a copy of COMMAND.COM
    with the /C option automatically; this option allows any parameters in
    commandstring to be passed to the child process. It also allows
    redirection of standard input and output, and execution of built-in
    commands such as DIR, PATH, and SORT.

    The program name in commandstring may have any extension you wish. If no
    extension is supplied, COMMAND.COM looks for a .COM file, then an .EXE
    file, and finally, a .BAT file. If COMMAND.COM is not found, SHELL issues
    an error message that reads File not found. BASIC does not generate an
    error if COMMAND.COM cannot find the file specified in commandstring.

    Any text separated from the program name by at least one blank is treated
    as program parameters by COMMAND.COM. BASIC remains in memory while the
    child process is running. When the child process finishes, BASIC
    continues.

    SHELL with no commandstring gives you a new COMMAND.COM shell. You may now
    do anything that COMMAND.COM allows. Enter the DOS command EXIT when you
    are ready to return to BASIC.

■ Examples

    This example shows how a SHELL statement starts up a new COMMAND.COM:

    SHELL   'Get a new COMMAND.COM.

■ Output

    The IBM Personal Computer DOS
    Version 3.20 (C)Copyright International
    Business Machines Corp 1981, 1986 (C)Copyright
    Microsoft Corp 1981, 1986

    D:\QB4>

    The following example copies all files modified on a certain date from a
    specified directory:

    ' This program copies all files in this directory modified
    ' on a certain date to the drive and directory you specify.

    DECLARE FUNCTION GetName$ (DirLine$)
    LINE INPUT "Enter target drive and directory: ",PathSpec$
    SHELL "DIR > DIRFILE"
    'Store directory listing in DIRFILE.
    DO
        OPEN "DIRFILE" FOR INPUT AS #1
        INPUT "Enter date (MM-DD-YY): ",MDate$
        PRINT

        ' Read DIRFILE, test for input date.
        DO
        LINE INPUT #1, DirLine$
        ' Test directory line to see if date matches and the line
        ' is not one of the special directories ( . or .. ).
        IF INSTR(DirLine$,MDate$) > 0 AND LEFT$(DirLine$,1) <> "." THEN
            FileSpec$ = GetName$(DirLine$)
            ' Make sure we don't move our temporary file.
            IF FileSpec$ <> "DIRFILE" THEN
                ' Build the DOS command line to copy the file.
                DoLine$ = "COPY " + FileSpec$ + "  " + PathSpec$
                PRINT DoLine$
                ' Copy the file.
                SHELL DoLine$
            END IF
        END IF
        LOOP UNTIL EOF(1)

    CLOSE #1
        PRINT "New date?"
        R$ = INPUT$(1)
        CLS
    LOOP UNTIL UCASE$(R$) <> "Y"
    ' KILL "DIRFILE".
    END

    ' This function gets the file name and extension from
    ' the directory-listing line.
    FUNCTION GetName$ (DirLine$) STATIC
        BaseName$ = RTRIM$(LEFT$(DirLine$,8))

        ' Check for extension.
        ExtName$  = RTRIM$(MID$(DirLine$,10,3))

        IF ExtName$ <> "" THEN
        BaseName$ = BaseName$ + "." + ExtName$
        END IF

        GetName$ = BaseName$
    END FUNCTION

■ Output

    Enter target drive and directory: c:\bas\temp
    Enter date (MM-DD-YY): 6-11-87

    COPY CONF.DAT  c:\bas\temp
    COPY TEST.BAS  c:\bas\temp
    COPY TEMPFILE  c:\bas\temp

    New date? n


────────────────────────────────────────────────────────────────────────────
SIN Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the sine of the angle x, where x is in radians

■ Syntax

    SIN(x)

■ Remarks

    When x is a double-precision value, the SIN function is calculated with
    double-precision accuracy. When x is not double precision, SIN is
    calculated with single-precision accuracy.

■ See Also

    ATN, COS, TAN

■ Example

    The example plots the graph of the polar equation r = 1 + sin n (Θ). This
    figure is sometimes known as a cardioid, owing to its resemblance to a
    heart when n equals 1.

    CONST PI = 3.141593
    SCREEN 1 : COLOR 1,1      'Medium resolution, blue background.
    WINDOW (-3,-2)-(3,2)      'Convert screen to Cartesian
                            'coordinates.
    INPUT "Number of petals = ", N
    CLS
    PSET (1,0)         'Set initial point.
    FOR Angle = 0 TO 2*PI STEP .02
        R = 1 + SIN(N*Angle)   'Polar equation for "flower."
        X = R * COS(Angle)     'Convert polar coordinates to
        Y = R * SIN(Angle)     'Cartesian coordinates.
        LINE -(X,Y)         'Draw line from previous point to
                            'new point.
    NEXT


────────────────────────────────────────────────────────────────────────────
SLEEP Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Suspends execution of the calling program

■ Syntax

    SLEEP  « seconds »

■ Remarks

    The optional argument seconds determines the number of seconds the program
    is suspended. The SLEEP statement suspends the program until one of the
    following events occurs:

    ■ The time period in the seconds argument elapses.

    ■ A key is pressed.

    ■ An enabled event occurs.

    If seconds is zero or not specified, the program is suspended
    indefinitely. Only an enabled event or a keystroke can interrupt an
    indefinite suspension.

    SLEEP responds only to keystrokes that occur after it executes. SLEEP
    ignores characters in the keyboard buffer that were typed before it
    executed.

    An event (such as ON COM or ON TIMER) cannot interrupt a SLEEP suspension
    unless its trapping is active when the event occurs. This means that
    trapping must have been initialized with an ON event statement, turned on
    with an event ON statement, and not have been disabled with an event OFF
    statement or an event STOP statement.

■ See Also

    WAIT

■ Example

    The following program suspends execution for 10 seconds. There is no ON
    event statement, so the only way to interrupt the suspension before 10
    seconds have passed is to press a key.

    PRINT "Taking a 10 second nap..."
    SLEEP 10
    PRINT "Awake!"
    END


────────────────────────────────────────────────────────────────────────────
SOUND Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Generates sound through the speaker

■ Syntax

    SOUND frequency,duration

■ Remarks

    The frequency is the desired frequency in hertz (cycles/second). It must
    be a numeric expression returning an integer in the range 37-32,767.

    The duration is the duration in clock ticks. (There are 18.2 clock ticks
    per second regardless of CPU speed.) The duration must be a numeric
    expression returning an unsigned integer in the range 0-65,535.

    If the duration is zero, any current SOUND statement that is running is
    turned off. If no SOUND statement is running, a SOUND statement with a
    duration of zero has no effect.

■ SEE ALSO

    PLAY

■ Example

    This program fragment produces a rising and descending glissando:

    FOR I = 440 TO 1000 STEP 5
        SOUND I, I/1000
    NEXT
    FOR I = 1000 TO 440 STEP -5
    SOUND I, I/1000
    NEXT


────────────────────────────────────────────────────────────────────────────
SPACE$ Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns a string of spaces of length n

■ Syntax

    SPACE$(n)

■ Remarks

    The expression n is rounded to an integer and must be in the range
    0-32,767.

■ See Also

    SPC

■ Example

    This example illustrates the use of SPACE$:

    FOR I=1 TO 5
        X$=SPACE$(I)
        PRINT X$;I
    NEXT I

■ Output

    1
    2
        3
        4
        5


────────────────────────────────────────────────────────────────────────────
SPC Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Skips n spaces in a PRINT statement

■ Syntax

    SPC(n)

■ Remarks

    SPC may only be used with PRINT and LPRINT statements. The argument n must
    be in the range 0-32,767. A semicolon (;) is assumed to follow the SPC(n)
    command.

■ See Also

    SPACE$

■ Example

    This example illustrates the use of SPC:

    PRINT "OVER";SPC(15) "THERE"

■ Output

    OVER               THERE


────────────────────────────────────────────────────────────────────────────
SQR Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the square root of n

■ Syntax

    SQR(n)

■ Remarks

    The argument n must be >= 0.

■ Example

    The following program plots the graphs of y = √-x for -9 <= x < 0 and of y
    = √x for 0 <= x <= 9:

    SCREEN 1 : COLOR 1         'Low-resolution color graphics mode.
    WINDOW (-9,-.25)-(9,3.25)  'Convert screen to Cartesian
                                'coordinates.
    LINE (-9,0)-(9,0)          'Draw X-axis.
    LINE (0,-.25)-(0,3.25)     'Draw Y-axis.

    FOR X = -9 TO 9
        LINE(X,.04)-(X,-.04)   'Put tick marks on X-axis.
    NEXT

    FOR Y = .25 TO 3.25 STEP .25
        LINE (-.08,Y)-(.12,Y)  'Put tick marks on Y-axis.
    NEXT

    PSET (-9,3)                'Plot the first point of function.
    FOR X = -9 TO 9 STEP .25
        Y = SQR(ABS(X))
        'SQR argument cannot be negative.
        LINE -(X,Y),2          'Draw a line to the next point.
    NEXT


────────────────────────────────────────────────────────────────────────────
STATIC Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Makes simple variables or arrays local to either a DEF FN function, a
    FUNCTION, or a SUB and preserves values between calls

■ Syntax

    STATIC variablelist

■ Remarks

    A STATIC statement variablelist has the following syntax:

    variable«( )»«AS type» «, variable«( )»«AS type»»...

    The variablelist takes the following arguments:

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    variable                 Either a variable name or an array name.

    AS type                  Declares the type of variable. The type argument
                            can be INTEGER, LONG, SINGLE, DOUBLE, STRING, or
                            a user-defined type.
    ──────────────────────────────────────────────────────────────────────────

    The STATIC statement can appear only in a SUB, FUNCTION, or DEF FN
    function. Earlier versions of BASIC required the number of dimensions in
    parentheses after an array name. In QuickBASIC, the number of dimensions
    is optional.

    Variables declared in a STATIC statement override variables of the same
    name shared by DIM or COMMON statements in the module-level code.
    Variables in a STATIC statement also override global constants of the same
    name.

    Usually, variables used in DEF FN functions are global to the module;
    however, you can use the STATIC statement inside a DEF FN statement to
    declare a variable as local to only that function.

────────────────────────────────────────────────────────────────────────────
NOTE
    The STATIC attribute on SUB and FUNCTION statements declares the default
    for variables to be static. Variables having the same name as variables
    shared by the module-level code are still shared. In contrast, the STATIC
    statement makes specific variables static and overrides any variables
    shared by the module-level code. The ¢STATIC metacommand affects how
    memory is allocated for arrays. See Chapter 2, "Data Types," for a
    discussion of the differences among these statements and attributes.
────────────────────────────────────────────────────────────────────────────

■ See Also

    COMMON, DEF FN, DIM, FUNCTION, SHARED, SUB

■ Examples

    This example contrasts the STATIC and SHARED statements within a
    subprogram AUGMENT. The variables R and N are both local to this
    subprogram, while the variables REP and NUM are shared between the main
    program and the subprogram. The STATIC R,N statement ensures that R and N
    retain the last values assigned to them each time the main program calls
    the subprogram.

    Rep = 0 : Num = 0
    PRINT "Before loop, REP = ";Rep;", NUM = ";Num;
    PRINT ", R = ";R;", N = ";N
    FOR I = 1 TO 10
        CALL Augment
    NEXT
    PRINT "After loop, REP = ";Rep;", NUM = ";Num;
    PRINT ", R = ";R;", N = ";N
    END

    SUB Augment STATIC
    SHARED Rep,Num    'Shared with main program.
    STATIC R,N        'Not shared with main program.
        R = R + 1      'Both R and N initially equal 0.
        N = N + 2
        Rep = R
        Num = N
    END SUB

■ Output

    Before loop, REP = 0 , NUM = 0 , R = 0 , N = 0
    After loop, REP = 10 , NUM = 20 , R = 0 , N = 0

    The following program searches for every occurrence of a certain string
    expression (stored in the variable OLD$) in the specified file and
    replaces that string with the string stored in NW$. The name of the file
    with these changes is the old filename with the extension .NEW. The
    program also prints the number of substitutions and the number of lines
    changed.

    INPUT "Name of file";F1$
    INPUT "String to replace";Old$
    INPUT "Replace with";Nw$
    Rep = 0 : Num = 0
    M = LEN(Old$)
    OPEN F1$ FOR INPUT AS #1
    CALL Extension
    OPEN F2$ FOR OUTPUT AS #2

    DO WHILE NOT EOF(1)
        LINE INPUT #1, Temp$
        CALL Search
        PRINT #2, Temp$
    LOOP

    CLOSE
    PRINT "There were ";Rep;" substitutions in ";Num;" lines."
    PRINT "Substitutions are in file ";F2$
    END
    SUB Extension STATIC
    SHARED F1$,F2$
        Mark = INSTR(F1$,".")
        IF Mark = 0 THEN
        F2$ = F1$ + ".NEW"
        ELSE
        F2$ = LEFT$(F1$,Mark - 1) + ".NEW"
        END IF
    END SUB

    SUB Search STATIC
    SHARED Temp$,Old$,Nw$,Rep,Num,M
    STATIC R
        Mark = INSTR(Temp$,Old$)
        WHILE Mark
        Part1 = LEFT$(Temp$,Mark - 1)
        Part2 = MID$(Temp$,Mark + M)
        Temp$ = Part1$ + Nw$ + Part2$
        R = R + 1
        Mark = INSTR(Temp$,Old$)
        WEND
        IF Rep = R THEN
            EXIT SUB
        ELSE
            Rep = R
            Num = Num + 1
        END IF
    END SUB

■ Output

    Name of file? CHAP1.S
    String to replace? CHAPTER 1
    Replace with? INTRODUCTION
    There were 23 substitutions in 19 lines.
    Substitutions are in file CHAP1.NEW

    The file CHAP1.NEW now contains every line in CHAP1.S, with each
    occurrence of the string CHAPTER 1 replaced by INTRODUCTION.


────────────────────────────────────────────────────────────────────────────
STICK Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the x- and y-coordinates of the two joysticks

■ Syntax

    STICK(n)

■ Remarks

    The argument n is a numeric expression whose value is an unsigned integer
    in the range 0 to 3:

    Argument                 Value Returned
    ──────────────────────────────────────────────────────────────────────────
    0                        The x-coordinate of joystick A

    1                        The y-coordinate of joystick A when STICK(0) was
                            last called

    2                        The x-coordinate of joystick B when STICK(0) was
                            last called

    3                        The y-coordinate of joystick B when STICK(0) was
                            last called
    ──────────────────────────────────────────────────────────────────────────

    The x- and y-coordinates have a range of 1 to 200. You must use STICK(0)
    before you use STICK(1), STICK(2), or STICK(3). STICK(0) not only returns
    the x-coordinate of joystick A, it also records the other joystick
    coordinates. These recorded coordinates are returned by calling
    STICK(1)-STICK(3).

■ Example

    The following fragment prints the coordinates of joystick B:

    TEMP = STICK(0)
    PRINT STICK(2), STICK(3)


────────────────────────────────────────────────────────────────────────────
STOP Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Terminates the program

■ Syntax

    STOP

■ Remarks

    STOP statements can be used anywhere in a program to terminate execution.

    When running in the QuickBASIC environment, the STOP statement leaves
    files open and does not exit to the operating system. In contrast, a STOP
    statement in a stand-alone .EXE file does close all files and return to
    the operating system.

    If you use the /D, /E, or /X compile options on the bc command line, the
    STOP statement prints the number of the line where execution stopped, if
    your program has line numbers. If there is no line number associated with
    the STOP statement, the most recent line number is printed. If your
    program has no line numbers, then the line number printed is 0.

    In the past, STOP statements were used for debugging. QuickBASIC's new
    debugging features make this use of STOP unnecessary.

■ Example

    There is no programming example for the STOP statement.


────────────────────────────────────────────────────────────────────────────
STR$ Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns a string representation of the value of a numeric expression

■ Syntax

    STR$(numeric-expression)

■ Remarks

    If numeric-expression is positive, the string returned by the STR$
    function contains a leading blank. The VAL function complements STR$.

■ See Also

    VAL

■ Example

    The following example contains a FUNCTION that uses the STR$ function to
    convert a number to its string representation. The FUNCTION then strips
    out the leading and trailing blanks that BASIC prints with numeric output.

    FUNCTION NumRemBlanks$(X) STATIC
        X$ = STR$(X)
        NumRemBlanks$ = LTRIM$(RTRIM$(X$))
    END FUNCTION

    PRINT "Enter 0 to end."
    DO
        INPUT "Find cosine of: ",Num
        IF Num = 0 THEN EXIT DO
        PRINT "COS(" NumRemBlanks$(Num) ") = " COS(Num)
    LOOP

■ Output

    Enter 0 to end.
    Find cosine of: 3.1
    COS(3.1) = -.9991351
    Find cosine of: 0


────────────────────────────────────────────────────────────────────────────
STRIG Function and Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the status of a specified joystick trigger

■ Syntax 1 (Function)

    STRIG(n)

■ Syntax 2 (Statement)

    STRIG {ON | OFF}

■ Remarks

    The STRIG function is used to test the joystick trigger status. In
    previous versions of BASIC, the statement STRIG ON enables testing of the
    joystick triggers; STRIG OFF disables joystick trigger testing. QuickBASIC
    ignores STRIG ON and STRIG OFF statements──the statements are provided for
    compatibility with earlier versions.

    The numeric expression n is an unsigned integer in the range 0-7,
    indicating the joystick and trigger to check. The following list describes
    the values returned by the STRIG(n) function for different values of n:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Argument                 Value Returned
    ──────────────────────────────────────────────────────────────────────────
    0                        Returns -1 if the lower button on joystick A has
                            been pressed since the last STRIG(0) call;
                            otherwise returns 0

    1                        Returns -1 if the lower button on joystick A is
                            currently down; otherwise returns 0

    2                        Returns -1 if the lower button on joystick B has
    Argument                 Value Returned
    ──────────────────────────────────────────────────────────────────────────
    2                        Returns -1 if the lower button on joystick B has
                            been pressed since the last STRIG(2) call;
                            otherwise returns 0

    3                        Returns -1 if the lower button on joystick B is
                            currently down; otherwise returns 0

    4                        Returns -1 if the upper button on joystick A has
                            been pressed since the last STRIG(4) call;
                            otherwise returns 0

    5                        Returns -1 if the upper button on joystick A is
                            currently down; otherwise returns 0

    6                        Returns -1 if the upper button on joystick B has
                            been pressed since the last STRIG(6) call;
                            otherwise returns 0

    7                        Returns -1 if the upper button on joystick B is
    Argument                 Value Returned
    ──────────────────────────────────────────────────────────────────────────
    7                        Returns -1 if the upper button on joystick B is
                            currently down; otherwise returns 0
    ──────────────────────────────────────────────────────────────────────────


    You can also use event trapping to get information from the joystick by
    using the ON STRIG statement (see the ON event statement). You cannot use
    the STRIG function inside a joystick event trap because the event that
    caused the trap is destroyed.

■ Differences From Basica

    If you are compiling from the BC command line, you must use the /V or /W
    option if a program contains a STRIG statement.

■ See Also

    ON event; STRIG ON, OFF, and STOP

■ Example

    The following example illustrates STRIG:

    'Wait for trigger A to be pressed.
    DO
        GotATrig = STRIG(0)
    LOOP UNTIL GotATrig
    'As long as trigger A is down, beep.
    DO
        GotATrig = STRIG(1)
        BEEP
    LOOP WHILE GotATrig


────────────────────────────────────────────────────────────────────────────
STRIG ON, OFF, and STOP Statements
────────────────────────────────────────────────────────────────────────────

■ Action

    Enables, disables, or inhibits trapping of joystick activity

■ Syntax

    STRIG(n) ON
    STRIG(n) OFF
    STRIG(n) STOP

■ Remarks

    The argument, n, is a numeric expression indicating the joystick button to
    trap:

    Value                    Button
    ──────────────────────────────────────────────────────────────────────────
    0                        Lower button, joystick A
    2                        Lower button, joystick B
    4                        Upper button, joystick A
    6                        Upper button, joystick B
    ──────────────────────────────────────────────────────────────────────────

    The STRIG(n) ON statement enables joystick event trapping by an ON STRIG
    statement (see the ON event statement). While trapping is enabled, and if
    a nonzero line number is specified in the ON STRIG statement, BASIC checks
    between every statement to see if the joystick trigger has been pressed.

    The STRIG(n) OFF statement disables event trapping. If a subsequent event
    occurs (i.e., if the trigger is pressed), it will not be remembered when
    the next STRIG ON is executed.

    The STRIG(n) STOP statement inhibits event trapping. If an event occurs it
    is remembered, and the event trap takes place as soon as trapping is
    reenabled.

■ See Also

    ON event, STRIG

■ Example

    There is no programming example for the STRIG statement.


────────────────────────────────────────────────────────────────────────────
STRING$ Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns a string whose characters all have a given ASCII code or whose
    characters are all the first character of a string expression

■ Syntax

    STRING$(m,n)
    STRING$(m,stringexpression)

■ Remarks

    The STRING$ function has the following arguments:

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    m                        A numeric expression indicating the length of the
                            string to return.

    n                        The ASCII code of the character to use to build
                            the string. It is a numeric expression that
                            evaluates to an integer value in the range 0-255.

    stringexpression         The string expression whose first character is
                            used to build the return string.
    ──────────────────────────────────────────────────────────────────────────

■ Examples

    The following example uses STRING$ to create part of a report heading:

    Dash$ = STRING$(10,45)
    PRINT Dash$;"MONTHLY REPORT";Dash$

■ Output

    ----------MONTHLY REPORT----------

    The following program uses STRING$ to generate a bar graph:

    PRINT TAB(7);"Daily Mean Temperature in Seattle" :
    PRINT
    'Get data for each month and graph.
    FOR Month = 1 TO 12 STEP 2
        READ Month$, Temp
        'Print Temp-35 stars.
        PRINT Month$;" +"; STRING$(Temp-35,"*")
        PRINT "    |"
    NEXT Month

    'Print horizontal line.
    PRINT "    +";
    FOR X = 1 TO 7
        PRINT "----+";
    NEXT X
    PRINT

    'Print temperature labels.
    FOR X = 4 TO 39 STEP 5
        PRINT TAB(X); X+31;
    NEXT X
    PRINT

    DATA Jan, 40, Mar, 46, May, 56
    DATA Jul, 66, Sep, 61, Nov, 46

■ Output

    Daily Mean Temperature in Seattle

    Jan +*****
        |
    Mar +***********
        |
    May +*********************
        |
    Jul +*******************************
        |
    Sep +**************************
        |
    Nov +***********
        |
        +----+----+----+----+----+----+----+
        35   40   45   50   55   60   65   70


────────────────────────────────────────────────────────────────────────────
SUB Statements
────────────────────────────────────────────────────────────────────────────

■ Action

    Marks the beginning and end of a subprogram

■ Syntax

    SUB globalname«(parameterlist)» «STATIC»
    .
    .
    .
    «EXIT SUB»
    .
    .
    .
    END SUB

■ Remarks

    The SUB statement takes the following arguments:

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    globalname               A variable name up to 40 characters long. This
                            name cannot appear in any other FUNCTION or SUB
                            statement in the same program or the user
                            library.

    parameterlist            Contains the names of simple variables and arrays
                            passed to the subprogram when the SUB is invoked.
                            Each name is separated from the preceding name by
                            a comma. Note that these variables and arrays are
                            passed by reference, so any change to an
                            argument's value in the subprogram also changes
                            its value in the calling program. See below for a
                            complete description of the syntax.
    ──────────────────────────────────────────────────────────────────────────

    A SUB parameterlist has the following syntax:

    variable«( )» «AS type» «, variable«( )» «AS type»»...

    A variable is a BASIC variable name. Previous versions of BASIC required
    the number of dimensions in parentheses after an array name. In
    QuickBASIC, the number of dimensions is not required. The argument type is
    the type of the variable. The type argument can be INTEGER, LONG, SINGLE,
    DOUBLE, STRING, or a user-defined type. You may not use a fixed-length
    string, or an array of fixed-length strings, as a parameter. However, you
    may use a simple fixed-length string as an argument in a CALL
    statement──QuickBASIC converts a simple fixed-length string argument to a
    variable-length string argument before passing the string to a SUB.

    A subprogram is a separate procedure, like a FUNCTION. However, a SUB
    cannot be used in an expression, unlike a FUNCTION.

    SUB and END SUB mark the beginning and end of a subprogram. You may also
    use the optional EXIT SUB statement to exit a subprogram.

    Subprograms are called by a CALL statement or by using the subprogram name
    followed by the argument list. See the entry for the CALL statement.
    QuickBASIC subprograms can be recursive──they can call themselves to
    perform a given task. See the second example below and Section 4.4,
    "Recursion."

    The STATIC attribute indicates that all variables local to the SUB are
    static──their values are saved between calls. Using the STATIC keyword
    slightly increases execution speed. STATIC is not usually used with
    recursive subprograms. See the examples below.

    Any subprogram variables or arrays are considered local to that subprogram
    unless they are explicitly declared as shared variables in a SHARED
    statement. You cannot define SUB procedures, DEF FN functions, or FUNCTION
    procedures inside a SUB procedure.

────────────────────────────────────────────────────────────────────────────
NOTE
    You cannot use GOSUB, GOTO, or RETURN to enter or exit a subprogram.
────────────────────────────────────────────────────────────────────────────

    See Chapter 2, "SUB and FUNCTION Procedures," in Programming in BASIC for
    more information.

■ See Also

    CALL (BASIC), DECLARE (BASIC), SHARED, STATIC

■ Examples

    In this example, the main program calls a subprogram, LINESEARCH, which
    searches for the given string, P$, in each line of input from file F$.
    When the subprogram finds P$ in a line, it prints the line, along with the
    number of the line. Notice that the value of Num is saved between calls
    because the STATIC keyword is used on the SUB statement.

    INPUT "File to be searched";F$
    INPUT "Pattern to search for";P$
    OPEN F$ FOR INPUT AS #1
    DO WHILE NOT EOF(1)
        LINE INPUT #1, Test$
        CALL Linesearch(Test$,P$)
    LOOP

    SUB Linesearch(Test$,P$) STATIC
        Num = Num + 1
        X = INSTR(Test$,P$)
        IF X > 0 THEN PRINT "Line #";Num;": ";Test$
    END SUB

■ Output

    File to be searched? search.bas
    Pattern to search for? SUB
    Line # 9 : SUB Linesearch(Test$,P$) STATIC
    Line # 13 : END SUB

    The following example uses a recursive SUB to solve the classic Tower of
    Hanoi puzzle for a variable number of disks. For large numbers of disks,
    the stack size must be increased using the CLEAR statement.

    DECLARE SUB Hanoi (N%, Srce%, Dest%, Hold%)
    DEFINT A-Z
    DIM SHARED MoveCount

    MoveCount = 0
    CLS
    PRINT "Tower of Hanoi Puzzle"
    INPUT "Enter number of disks: ", Disks

    ' Call the recursive Hanoi SUB to solve the puzzle.
    CALL Hanoi(Disks, 1, 3, 2)

    PRINT "Puzzle complete in"; MoveCount; "moves."

    END

    ' Move N disks from Srce to Dest using Hold as holding peg.
    SUB Hanoi (N, Srce, Dest, Hold)
        IF N <= 1 THEN
        ' Only 1 disk. Move it directly to Dest.
        PRINT "Move a disk from"; Srce; "to"; Dest
        MoveCount = MoveCount + 1
        ELSE
        ' More than one disk.
        ' Move the N-1 disks to Hold, using Dest as holding peg.
        CALL Hanoi(N - 1, Srce, Hold, Dest)
        ' Move the Nth disk directly to Dest.
        PRINT "Move a disk from"; Srce; "to"; Dest:
        MoveCount = MoveCount + 1
        ' Move the N-1 disks to Dest, using Srce as holding peg.
        CALL Hanoi(N - 1, Hold, Dest, Srce)
        END IF
    END SUB

■ Output

    Tower of Hanoi Puzzle
    Enter number of disks: 3
    Move a disk from 1 to 3
    Move a disk from 1 to 2
    Move a disk from 3 to 2
    Move a disk from 1 to 3
    Move a disk from 2 to 1
    Move a disk from 2 to 3
    Move a disk from 1 to 3
    Puzzle complete in 7 moves.


────────────────────────────────────────────────────────────────────────────
SWAP Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Exchanges the values of two variables

■ Syntax

    SWAP variable1,variable2

■ Remarks

    Any type of variable can be swapped (integer, long, single precision,
    double precision, string, or record). However, the two variables must be
    exactly the same type or an error message appears (Type mismatch). For
    example, trying to swap an integer with a single-precision value produces
    Type mismatch.

■ Example

    The following subroutine (ShellSort) sorts the elements of a string array
    in descending order using a Shell sort. ShellSort uses SWAP to exchange
    array elements that are out of order.

    ' Sort the word list using a Shell sort.
    SUB ShellSort (Array$(), Num%) STATIC
        Span% = Num% \ 2
        DO WHILE Span% > 0
        FOR I% = Span% TO Num% - 1

            J% = I% - Span% + 1
        FOR J% = (I% - Span% + 1) TO 1 STEP -Span%

        IF Array$(J%) <= Array$(J% + Span%) THEN EXIT FOR
        ' Swap array elements that are out of order.
        SWAP Array$(J%), Array$(J% + Span%)
    NEXT J%

        NEXT I%
        Span% = Span% \ 2
        LOOP
    END SUB


────────────────────────────────────────────────────────────────────────────
SYSTEM Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Closes all open files and returns control to the operating system

■ Syntax

    SYSTEM

■ Remarks

    When a SYSTEM command is executed, all files are closed and BASIC exits to
    the operating system (for stand-alone executable programs) or stops
    program execution (if the program is run in the QuickBASIC environment).

────────────────────────────────────────────────────────────────────────────
NOTE
    A program containing a SYSTEM statement exits to the operating system if
    run from the QuickBASIC command line with the /RUN option. Entering a
    SYSTEM statement in the Immediate window terminates QuickBASIC.
────────────────────────────────────────────────────────────────────────────

■ Differences From Basica

    END and SYSTEM are distinct in BASICA but act identically in QuickBASIC.

■ Example

    There is no programming example for the SYSTEM statement.


────────────────────────────────────────────────────────────────────────────
TAB Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Moves the print position

■ Syntax

    TAB(column)

■ Remarks

    The argument, column, is a numeric expression that is the column number of
    the new print position. If the current print position is already beyond
    column, the TAB function moves the print position to that column on the
    next line. Column 1 is the leftmost position, and the rightmost position
    is the current line width of the output device minus one. If column is
    greater than the output width, TAB wraps the output and the print position
    becomes 1 + (column MOD width). If column is less than 1, TAB moves the
    print position to column 1.

    TAB can only be used in PRINT and LPRINT statements.

■ See Also

    WIDTH

■ Examples

    The following example uses TAB to locate columns of output:

    FOR I = 1 TO 4
        READ A$,B$
        PRINT A$ TAB(25) B$
    NEXT
    DATA NAME, AMOUNT,,, G.T. JONES, $25.00, H.L. STEVENS, $32.25

■ Output

    NAME                    AMOUNT

    G.T. JONES              $25.00
    H.L. STEVENS            $32.25

    The following example shows the effects of different values used as
    arguments to TAB:

    'Assumes 80-column screen width.
    PRINT TAB(1287); "one"
    PRINT TAB(255); "two"
    PRINT TAB(-5); "three"
    PRINT "123456789012345678901234567890" TAB(20) "four"

■ Output

        one
                two
    three
    123456789012345678901234567890
                        four


────────────────────────────────────────────────────────────────────────────
TAN Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the tangent of the angle x, where x is in radians

■ Syntax

    TAN(x)

■ Remarks

    TAN is calculated with single-precision accuracy unless x is a
    double-precision value, in which case TAN is calculated with
    double-precision accuracy.

■ Differences From Basica

    In BASICA, if TAN overflows, the interpreter displays the Overflow error
    message, returns machine infinity as the result, and continues execution.

    If TAN overflows, QuickBASIC does not display machine infinity and
    execution halts (unless the program has an error-handling routine).

■ Example

    The following example computes the height of an object using the distance
    from the object and the angle of elevation. The program draws the triangle
    produced by the base and the computed height.

    SCREEN 2

    INPUT "LENGTH OF BASE: ",Baselen
    INPUT "ANGLE OF ELEVATION (DEGREES,MINUTES): ",Deg,Min

    Ang = (3.141593/180)*(Deg + Min/60)   'Convert to radians.
    Height = Baselen*TAN(Ang)      'Calculate height.
    PRINT "HEIGHT =" Height
    H = 180 - Height
    B = 15 + Baselen

    LINE (15,180)-(B,180):LINE -(B,H)       'Draw triangle.
    LINE -(10,180)
    LOCATE 24,1 : PRINT "Press any key to continue...";
    DO
    LOOP WHILE INKEY$=""


────────────────────────────────────────────────────────────────────────────
TIME$ Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the current time from the operating system

■ Syntax

    TIME$

■ Remarks

    The TIME$ function returns an eight-character string in the pattern
    hh:mm:ss, where hh is the hour (00-23), mm is minutes (00-59), and ss is
    seconds (00-59). A 24-hour clock is used; therefore, 8:00 PM is shown as
    20:00:00.

    To set the time, use the TIME$ statement.

■ See Also

    TIME$ Statement, TIMER

■ Example

    The following example converts the 24-hour time returned by TIME$ to a
    12-hour time:

    'Convert the 24-hour clock used by TIME$ to
    '12-hour output followed by "AM" or "PM."
    T$ = TIME$
    Hr = VAL(T$)
    IF Hr < 12 THEN Ampm$ = " AM" ELSE Ampm$ = " PM"
    IF Hr > 12 THEN Hr = Hr - 12
    PRINT "The time is" STR$(Hr) RIGHT$(T$,6) Ampm$

■ Output

    The time is 11:26:31 AM


────────────────────────────────────────────────────────────────────────────
TIMER Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the number of seconds elapsed since midnight

■ Syntax

    TIMER

■ Remarks

    The TIMER function can be used with the RANDOMIZE statement to generate a
    random number. It can also be used to time programs or parts of programs.

■ Example

    The following program searches for the prime numbers from 3 to 10,000
    using a variation of the Sieve of Eratosthenes. The TIMER function is used
    to time the program.

    DEFINT A-Z
    CONST UNMARK = 0, MARKIT = NOT UNMARK
    DIM Mark(10000)
    Start! = TIMER
    Num = 0
    FOR N = 3 TO 10000 STEP 2
        IF NOT Mark(N) THEN
        'PRINT N,   'To print the primes, remove the
                    'remark delimiter in front of the
                    'PRINT statement.
        Delta = 2*N
        FOR I = 3*N TO 10000 STEP Delta
            Mark(I) = MARKIT
        NEXT
        Num = Num + 1
        END IF
    NEXT
    Finish! = TIMER
    PRINT : PRINT "Program took"; Finish!-Start!;
    PRINT "seconds to find the"; Num; "primes"
    END

■ Output

    Program took .1601563 seconds to find the 1228 primes


────────────────────────────────────────────────────────────────────────────
TIMER ON, OFF, and STOP Statements
────────────────────────────────────────────────────────────────────────────

■ Action

    Enables, disables, or inhibits timer event trapping

■ Syntax

    TIMER ON
    TIMER OFF
    TIMER STOP

■ Remarks

    TIMER ON enables timer event trapping by an ON TIMER statement (see the
    statement ON event). While trapping is enabled, a check is made after
    every statement to see if the specified time has elapsed. If it has, the
    ON TIMER event-handling routine is executed.

    TIMER OFF disables timer event trapping. If an event takes place, it is
    not remembered if a subsequent TIMER ON is executed.

    TIMER STOP disables the timer event trapping. However, if an event occurs,
    it is remembered and the ON TIMER event-handling routine is executed as
    soon as trapping is reenabled with TIMER ON.

■ See Also

    ON event

■ Example

    The following example displays the time of day on line 1, and updates the
    display once a minute:

    TIMER ON
    ON TIMER(60) GOSUB Display
    DO WHILE INKEY$ = "" : LOOP
    END

    Display:
        Oldrow = CSRLIN       'Save current row.
        Oldcol = POS(0)       'Save current column.
        LOCATE 1,1 : PRINT TIME$;
        LOCATE Oldrow,Oldcol   'Restore row & column.
    RETURN


────────────────────────────────────────────────────────────────────────────
TIME$ Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Sets the time

■ Syntax

    TIME$=stringexpression

■ Remarks

    The stringexpression must be in one of the following forms:

    Form                     Description
    ──────────────────────────────────────────────────────────────────────────
    hh                       Sets the hour; minutes and seconds default to 00
    hh:mm                    Sets the hour and minutes; seconds default to 00
    hh:mm:ss                 Sets the hour, minutes, and seconds
    ──────────────────────────────────────────────────────────────────────────

    A 24-hour clock is used, so 8:00 PM would be entered as 20:00:00.

    This statement complements the TIME$ function, which returns the current
    time.

■ See Also

    TIME$ Function

■ Example

    The following example sets the current time to 8:00 AM:

    TIME$="08:00:00"


────────────────────────────────────────────────────────────────────────────
TRON/TROFF Statements
────────────────────────────────────────────────────────────────────────────

■ Action

    Traces the execution of program statements

■ Syntax

    TRON
    TROFF

■ Remarks

    In the QuickBASIC environment, executing a TRON statement has the same
    effect as selecting Trace On from the Debug menu──each statement is
    highlighted on the screen as it executes.

    The TROFF statement turns off the program trace.

    The TRON and TROFF statements only display line numbers when compiled with
    the Debug option or the /D option on the BC command line.

────────────────────────────────────────────────────────────────────────────
NOTE
    The debugging features of the QuickBASIC environment make these statements
    unnecessary.
────────────────────────────────────────────────────────────────────────────

■ Example

    There is no programming example for the TRON statement.


────────────────────────────────────────────────────────────────────────────
TYPE Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Defines a data type containing one or more elements

■ Syntax

    TYPE usertype
        elementname AS typename
        elementname AS typename
    .
    .
    .
    END TYPE

■ Remarks

    The TYPE statement takes the following arguments:

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    usertype                 A name given to the user-defined data type.
                            Follows the same rules as a BASIC variable name.

    elementname              The name of an element of the user-defined data
                            type. Follows the same rules as a BASIC variable
                            name. Cannot be the name of an array.

    typename                 May be any of the following BASIC data types:
                            INTEGER, LONG, SINGLE, DOUBLE, fixed-length
                            string (see note below), or user-defined type.
    ──────────────────────────────────────────────────────────────────────────

────────────────────────────────────────────────────────────────────────────
NOTE
    Strings in user types must be fixed-length strings. String lengths are
    indicated by an asterisk and a numeric constant. For example, the
    following line defines an element named Keyword in a user-defined type as
    a string with length 40:

    Keyword AS STRING*40

────────────────────────────────────────────────────────────────────────────

    A user-defined type must be declared in a TYPE declaration before it can
    be used in the program. Although a user-defined type can only be declared
    in the module-level code, you may declare a variable to be of a
    user-defined type anywhere in the module, even in a SUB or FUNCTION.

    Use the DIM, REDIM, COMMON, STATIC, or SHARED statements to declare a
    variable to be of a user-defined type.

■ Example

    The following example simulates a deck of cards by using a user-defined
    type. The program builds a deck of cards (an array of user-defined type
    Card), shuffles the deck, and displays the first five cards.

    ' This program uses a user-defined type to
    ' simulate a deck of cards.

    ' Define the Card type--an integer value and a string
    ' representing the suit.
    TYPE Card
        Value AS INTEGER
        Suit AS STRING*9
    END TYPE

    DEFINT A-Z
    ' Define the Deck as a 52-element array of Cards.
    DIM Deck(1 TO 52) AS Card

    ' Build, shuffle, and deal the top five cards.
    CALL BuildDeck(Deck())
    CALL Shuffle(Deck())
    FOR I%=1 TO 5
        CALL ShowCard(Deck(I%))
    NEXT I%

    ' Build the deck--fill the array of Cards with
    ' appropriate values.
    SUB BuildDeck(Deck(1) AS Card) STATIC
    DIM Suits(4) AS STRING*9

        Suits(1)="Hearts"
        Suits(2)="Clubs"
        Suits(3)="Diamonds"
        Suits(4)="Spades"
    ' This loop controls the suit.
        FOR I%=1 TO 4
        ' This loop controls the face value.
        FOR J%=1 TO 13
            ' Figure out which card (1...52) you're creating.
            CardNum%=J%+(I%-1)*13
            ' Place the face value and suit into the Card.
            Deck(CardNum%).Value=J%
            Deck(CardNum%).Suit=Suits(I%)
        NEXT J%
        NEXT I%

    END SUB

    ' Shuffle a deck (an array containing Card elements).
    SUB Shuffle(Deck(1) AS Card) STATIC

        RANDOMIZE TIMER
    ' Shuffle by transposing 1000 randomly selected pairs of cards.
        FOR I%=1 TO 1000
        CardOne%=INT(52*RND+1)
        CardTwo%=INT(52*RND+1)
        ' Notice that SWAP works on arrays of user types.
        SWAP Deck(CardOne%),Deck(CardTwo%)
        NEXT I%

    END SUB

    ' Display a single card by converting and printing the
    ' face value and the suit.
    SUB ShowCard (SingleCard AS Card) STATIC

        SELECT CASE SingleCard.Value
        CASE 13
            PRINT "King ";
        CASE 12
            PRINT "Queen";
        CASE 11
            PRINT "Jack ";
        CASE  1
            PRINT "Ace  ";
        CASE ELSE
            PRINT USING "  ## ";SingleCard.Value;
        END SELECT

        PRINT " ";SingleCard.Suit

    END SUB

■ Output

        3  Clubs
        4  Hearts
        3  Diamonds
    Jack  Clubs
        8  Spades


────────────────────────────────────────────────────────────────────────────
UBOUND Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the upper bound (largest available subscript) for the indicated
    dimension of an array

■ Syntax

    UBOUND(array«,dimension»)

■ Remarks

    The argument dimension is an integer from 1 to the number of dimensions in
    array. For an array dimensioned as follows, UBOUND returns the values
    listed below:

    DIM A(1 TO 100, 1 TO 50, -3 TO 4)

    Invocation               Value Returned
    ──────────────────────────────────────────────────────────────────────────
    UBOUND(A,1)              100
    UBOUND(A,2)              50
    UBOUND(A,3)              4
    ──────────────────────────────────────────────────────────────────────────

    You can use the shortened syntax UBOUND(array) for one-dimensional arrays
    since the default value for dimension is 1. Use the LBOUND function to
    find the lower limit of an array dimension.

■ See Also

    LBOUND

■ Example

    LBOUND and UBOUND can be used together to determine the size of an array
    passed to a subprogram, as in the following program fragment:

    CALL PRNTMAT(ARRAY())
    .
    .
    .
    SUB PRNTMAT(A()) STATIC
        FOR I% = LBOUND(A,1) TO UBOUND(A,1)
        FOR J% = LBOUND(A,2) TO UBOUND(A,2)
            PRINT A(I%,J%);" ";
            NEXT J%
        PRINT:PRINT
        NEXT I%
    END SUB


────────────────────────────────────────────────────────────────────────────
UCASE$ Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns a string expression with all letters in uppercase

■ Syntax

    UCASE$ (stringexpression)

■ Remarks

    The stringexpression argument can be any string expression. The UCASE$
    function works with both variable- and fixed-length strings. The UCASE$
    and LCASE$ statements are helpful in making string comparisons case
    insensitive.

■ See Also

    LCASE$

■ Example

    The following program contains a FUNCTION, YesQues, that returns a Boolean
    value depending on how the user responds. The program YesQues uses UCASE$
    to make a case-insensitive test of the user's response.

    DEFINT A-Z

    FUNCTION YesQues(Prompt$,Row,Col) STATIC
        OldRow=CSRLIN
        OldCol=POS(0)
        ' Print prompt at Row, Col.
        LOCATE Row,Col : PRINT Prompt$ "(Y/N):";
        DO
        ' Get the user to press a key.
        DO
            Resp$=INKEY$
        LOOP WHILE Resp$=""
        Resp$=UCASE$(Resp$)
        ' Test to see if it's yes or no.
        IF Resp$="Y" OR Resp$="N" THEN
            EXIT DO
        ELSE
            BEEP
        END IF
        LOOP
        ' Print the response on the line.
        PRINT Resp$;
        ' Move the cursor back to the old position.
        LOCATE OldRow,OldCol
        ' Return a Boolean value by returning the result of a test.
        YesQues=(Resp$="Y")
    END FUNCTION

    DO
    LOOP WHILE NOT YesQues("Do you know the frequency?",12,5)


────────────────────────────────────────────────────────────────────────────
UEVENT Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Enables, disables, or suspends event trapping for a user-defined event

■ Syntax

    UEVENT ON
    UEVENT OFF
    UEVENT STOP

■ Remarks

    The effects of the UEVENT statements are like that of other event-trapping
    statements. When UEVENT ON is executed, the event-trapping routine is
    enabled. Occurrences of the event trigger execution of the event-handling
    routine.

    When UEVENT OFF is executed, the event-trapping routine is disabled. Any
    occurrences of the event are ignored.

    When UEVENT STOP is executed, the event-trapping routine is suspended. An
    event occurrence is remembered and the event-trapping routine performed as
    soon as a UEVENT ON statement is executed.

■ See Also

    ON UEVENT

■ Example

    See the example for ON UEVENT.


────────────────────────────────────────────────────────────────────────────
UNLOCK Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Releases locks applied to parts of a file

■ Syntax

    UNLOCK «#» filenumber «,{record | «start» TO end}»

■ Remarks

    The UNLOCK statement is used only after a LOCK statement. See the LOCK
    statement for a complete discussion.

    For binary-mode files, the arguments record, start, and end represent the
    number of a byte relative to the beginning of the file. The first byte in
    a file is byte 1.

    For random-access files, these arguments are the number of a record
    relative to the beginning of the file. The first record is record 1.

■ See Also

    LOCK

■ Example

    See the example for LOCK.


────────────────────────────────────────────────────────────────────────────
Creating a User-Defined Event
────────────────────────────────────────────────────────────────────────────

    In previous versions of QuickBASIC, the only events that could be trapped
    were those already defined in the language: COM, KEY, PEN, PLAY, STRIG and
    TIMER. There was no way to define your own event.

    QuickBASIC 4.5 allows you to define your own event trap. When the event
    occurs, BASIC calls the routine that handles the trap, just as if the
    event were part of the QuickBASIC language.

    A user-defined event has three elements. The first is a routine that
    detects the event. The second is this routine's call to the BASIC
    procedure SetUEvent, which traps the event. The third is BASIC's call to a
    routine that handles the event.

    You create a user-defined event by writing two pieces of code. The first
    is the routine that detects the event. (The event could be a hardware
    interrupt, or perhaps an altered data value at a special memory location.)
    This routine can be written in BASIC, or other languages, such as C and
    assembler. (BASIC routines can be included in the main module. Code
    written in other languages must be separately compiled and added to a
    Quick Library.)

    The event-detecting routine must block; that is, it must sit waiting for
    the event. (A routine that does not block would have to be called
    repeatedly to see if the event has occurred. This defeats the purpose of a
    user-defined event, as it is no different from conventional polling.) When
    the event occurs, it calls the BASIC routine SetUEvent. It is this call
    that traps the event. BASIC then calls the event handler.

    The event handler is the second piece of code. The advantage of separating
    event trapping from event handling is that the handling can be tailored to
    the needs of the moment; the same event can be handled differently in
    different parts of the program.

    Let's consider a simple example to see how this works. Our hypothetical
    programmer has designed an interface board for home monitoring and
    control. One of its features is a mailbox alarm: opening the mailbox door
    closes a switch that sets the most-significant bit at a specific buss
    address.

    Here is a simple BASIC routine to monitor this switch. (The segment and
    address quantities are for illustration only. They are in the video RAM
    space, and probably wouldn't be useful for other kinds of interfaces.)

    MailBoxOpened:

        DEF SEG = &h9000              ' set the address segment
        value% = PEEK (&h1234)        ' read value at address in that segment
        IF value% THEN CALL SetUEvent ' tell BASIC event has occurred
        DEF SEG                       ' return to BASIC data segment

■ RETURN

    Value% is either zero, or has its MSB set. In the latter case it is
    logically "true" (indicating that the mailbox was opened), and the
    SetUEvent routine is called. This routine (which is part of BASIC) tells
    BASIC that the expected event has occurred, and it is time to execute the
    event-handling routine. All event-detecting routines, regardless of the
    languages they are written in, must call SetUEvent.

    If the event-detecting routine is in a language other than BASIC, the
    Quick Library containing it has to be loaded before a QuickBASIC program
    that uses it can run or be compiled. Include a DECLARE SUB statement in
    the module calling the event-detection routine, so that BASIC knows how to
    find it.

    Now let's write an event-handling routine to tell our programmer his mail
    has arrived:

    MailCame:

        PRINT "Ta-Dah! Your day is made! The mail came!"

■ RETURN

    All that's left is to tell BASIC about the user-defined event handler,
    using the ON UEVENT statement. ON UEVENT works just like ON EVENT; it
    associates the user-defined event with the event-handling routine:

    ON UEVENT GOSUB MailCame  ' associate the handler routine with user event
    UEVENT ON                 ' initiate user-event trapping
        .
        .
        .
    CALL MailBoxOpened        ' call the routine that looks for the event
        .
        .
        .
    END

    Note that ON UEVENT deals only with the event-handler; it is not concerned
    with event-detection. Once the UEVENT ON statement has been executed, any
    call to SetUEvent will trigger the specified event-handler, regardless of
    how or where the call is issued.

    Here is a summary of the steps in creating and using a user-defined event
    handler:

    1. Write the routine that detects the event. When the event occurs, the
        routine must call the BASIC routine SetUEvent.

    2. If the event-detecting routine is in BASIC, place it after the END
        statement in the module where it will be called.

        If the event-detecting routine is not in BASIC, compile it and include
        it in a BASIC Quick Library. The module(s) that call this routine must
        include a DECLARE SUB statement so that BASIC can find the routine.

    3. Write the routine that handles the event.

    4. Use the ON UEVENT statement to tell BASIC the name of the
        event-handling routine associated with the user-defined event.

    5. Use the UEVENT ON statement to initiate trapping. (UEVENT OFF and
        UEVENT STOP may be used to terminate or postpone trapping.)

    6. Call the event-detecting routine. When the event occurs, BASIC will
        call the event-handling routine named in the ON UEVENT statement.


────────────────────────────────────────────────────────────────────────────
VAL Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the numeric value of a string of digits

■ Syntax

    VAL(stringexpression)

■ Remarks

    The stringexpression is a sequence of characters that can be interpreted
    as a numeric value. The VAL function stops reading the string at the first
    character that it cannot recognize as part of a number. The VAL function
    also strips leading blanks, tabs, and line feeds from the argument string.
    For example,

    VAL("    -33/LP")

    returns the value -33.

■ See Also

    STR$

■ Example

    The following program prints the names and addresses of people with
    specific telephone area codes:

    INPUT "Search for which area: ", Targetarea
    OPEN "MAIL.DAT" FOR INPUT AS #1
    DO WHILE NOT EOF(1)
        INPUT #1, Nm$, Phonenum$, Street$, Citystate$
        'VAL reads everything up to the first non-numeric
        'character ("-" in this case).
        Area = VAL(Phonenum$)
        IF Area = Targetarea THEN
        PRINT : PRINT Nm$
        PRINT Street$
        PRINT Citystate$
        END IF
    LOOP
    CLOSE : END



────────────────────────────────────────────────────────────────────────────
VARPTR, VARSEG Functions
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns the address of a variable

■ Syntax

    VARPTR(variablename)
    VARSEG(variablename)

■ Remarks

    The variablename may be any BASIC variable, including a record variable or
    record element. The VARPTR function returns an unsigned integer that is
    the offset of the variable within its segment. The VARSEG function returns
    an unsigned integer that is the segment part of the variable's address. If
    variablename is not defined before either VARPTR or VARSEG is called, the
    variable is created and its address is returned. When variablename is a
    string variable, VARPTR and VARSEG return the location of the first byte
    of the string descriptor.

────────────────────────────────────────────────────────────────────────────
NOTE
    Because many BASIC statements change the locations of variables in memory,
    use the values returned by VARPTR and VARSEG immediately after the
    functions are used. See Section 2.3.3, "Variable Storage Allocation," for
    a list of things that cause variable locations to move.
────────────────────────────────────────────────────────────────────────────

    VARPTR and VARSEG are often used with BLOAD, BSAVE, CALL ABSOLUTE, CALL
    INTERRUPT, PEEK, POKE, or when passing arrays to procedures written in
    other languages.

    When using VARPTR or VARSEG to get the address of an array, use the first
    element of the array as the argument:

    DIM A(150)
    .
    .
    .
    ArrAddress=VARPTR(A(1))

    You may no longer use VARPTR to get the address of a file's buffer. Use
    the function FILEATTR to get information about a file. In addition,
    programs written in earlier versions of BASIC that used VARPTR to access
    numeric arrays may no longer work. You must now use a combination of
    VARPTR and VARSEG. For example, the following QuickBASIC Version 3.0
    fragment no longer works correctly:

    DIM Cube(675)
    .
    .
    .
    BSAVE "graph.dat",VARPTR(Cube(1)),2700

    The fragment would be rewritten as follows:

    DIM Cube(675)
    .
    .
    .
    ' Change segment to segment containing Cube.
    DEF SEG=VARSEG(Cube(1))
    BSAVE "graph.dat",VARPTR(Cube(1)),2700
    ' Restore BASIC segment.
    DEF SEG

    You may use VARPTR alone to get the address of a variable stored in
    DGROUP. You must use both VARPTR and VARSEG to get the complete address of
    a variable stored as a far object. See Section 2.3.3, "Variable Storage
    Allocation," for rules to determine when a variable is stored in DGROUP.

    The VARSEG function combined with VARPTR replaces the PTR86 subprogram
    used in previous versions of QuickBASIC.

■ See Also

    BLOAD, BSAVE, CALL ABSOLUTE, CALL INTERRUPT, DEF SEG, PEEK, POKE

■ Example

    See the entries for BLOAD, BSAVE, CALL ABSOLUTE, and CALL INTERRUPT for
    examples of how to use VARPTR and VARSEG with those statements.

    The following program illustrates how to use VARPTR and VARSEG to pass a
    BASIC array to a C function. The C function would be separately compiled
    and then placed in a Quick library or linked to the BASIC main program.

    ' BASIC program passing an array to C function.
    DECLARE SUB AddArr CDECL (BYVAL Offs%, BYVAL Segm%, BYVAL Num%)
    DIM A(1 TO 100) AS INTEGER
    ' Fill the array with the numbers 1 to 15.
    FOR I=1 TO 15
        A(I)=I
    NEXT I

    ' Call the C function. AddArr expects a far address (segment
    ' and offset). Because CDECL puts things on the stack from
    ' right to left, put the offset ( VARPTR(A(1)) ) first in the
    ' list, followed by the segment ( VARSEG(A(1)) ).
    CALL AddArr(VARPTR(A(1)),VARSEG(A(1)),15%)

    ' Print the modified array.
    FOR I=1 TO 15
        PRINT A(I)
    NEXT I

    END

    /* Add one to the first num elements of array arr.*/
    void far addarr(arr,num)
    int far *arr;
    int num;
    {
        int i;
        for(i=0;i<num;i++) arr[i]++;
    }


────────────────────────────────────────────────────────────────────────────
VARPTR$ Function
────────────────────────────────────────────────────────────────────────────

■ Action

    Returns a string representation of a variable's address as needed for use
    in DRAW and PLAY statements

■ Syntax

    VARPTR$(variablename)

■ Remarks

    The variablename is the name of a variable in the program. If variablename
    is an array element, then the array must be dimensioned before the VARPTR$
    function is used. The array must be an array of variable-length strings.

────────────────────────────────────────────────────────────────────────────
NOTE
    To guarantee correct results, use the value of VARPTR$ immediately after
    invoking the function.
────────────────────────────────────────────────────────────────────────────

■ Differences From Basica

    In QuickBASIC programs, VARPTR$ must be used in the DRAW and PLAY
    statements to execute substrings containing variables. BASICA supports
    both the VARPTR$ syntax and the syntax containing just the variable name.

■ See Also

    DRAW, PLAY

■ Example

    See the DRAW and PLAY statement for examples.


────────────────────────────────────────────────────────────────────────────
VIEW Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Defines screen limits for graphics output

■ Syntax

    VIEW ««SCREEN» (x1,y1)-(x2,y2) «,«color» «,border»»»

■ Remarks

    The list below describes the parts of the VIEW statement:

╓┌─┌────────────────────────┌────────────────────────────────────────────────╖
    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
    SCREEN                   When SCREEN is used, the x-and y-coordinates are
                            absolute to the screen, not relative to the
                            border of the physical viewport. Only graphics
                            within the viewport are plotted. When SCREEN is
    Part                     Description
    ──────────────────────────────────────────────────────────────────────────
                            within the viewport are plotted. When SCREEN is
                            omitted, all points are plotted relative to the
                            viewport (x1 and x2 are added to coordinates
                            before plotting the point).

    (x1,y1) - (x2,y2)        Indicates a rectangular area on the screen. The
                            placeholders x1, y1, x2, and y2 are numeric
                            expressions that are the coordinates of
                            diagonally opposite corners of the area.

    color                    The color attribute of the color used to fill the
                            area. If you omit color, the area is not filled.

    border                   Any numeric expression in this area draws a line
                            around the viewport if space is available. If you
                            omit border, no border is drawn.
    ──────────────────────────────────────────────────────────────────────────


    The VIEW statement defines a "physical viewport," or a rectangular section
    of the screen into which graphics can be mapped. All coordinates used in
    the statement must be within the physical bounds of the screen.

    If VIEW is given with no arguments, the entire screen is defined as the
    viewport. RUN and SCREEN also define the entire screen as the viewport and
    disable any viewports defined with VIEW.

■ Examples

    The following example contrasts the output after VIEW and VIEW SCREEN are
    executed:

    SCREEN 1
    'SCREEN option makes all screen coordinates absolute.
    VIEW SCREEN (10,10)-(200,100)
    'This line will not be visible, since its end
    'points are outside the viewport.
    LINE (5,5)-(100,5)
    PRINT "Press any key to continue."
    SUSPEND$ = INPUT$(1)
    'Wait for a key to be pressed.

    'No SCREEN option - all screen coordinates relative to
    'this viewport.
    VIEW (10,10)-(200,100)
    'This line is now visible, since its end points
    'are added to (10,10).
    LINE (5,5)-(100,5)

    You may use multiple VIEW statements. If the newly described viewport is
    not wholly within the previous viewport, the screen can be reinitialized
    with the VIEW statement and the new viewport can be defined. If the new
    viewport is entirely within the previous one, as in the following example,
    the intermediate VIEW statement is not necessary. This example opens three
    viewports, each smaller than the previous one. In each case, the points of
    the line that lie outside the viewport borders are clipped and do not
    appear on the screen.

    SCREEN 1
    CLS
    VIEW
    'Make the viewport cover most of the screen.
    VIEW (10,10) - (300,180),,1
        CLS
        LINE (0,0) - (310,190),1
        LOCATE 1,11: PRINT "A big viewport"
    VIEW SCREEN (50,50)-(250,150),,1
        CLS
    'Note CLS clears only viewport.
        LINE (300,0)-(0,199),1
        LOCATE 9,9: PRINT "A medium viewport"
    VIEW SCREEN (80,80)-(200,125),,1
        CLS
        CIRCLE (150,100),20,1
        LOCATE 11,9: PRINT "A small viewport"


────────────────────────────────────────────────────────────────────────────
VIEW PRINT Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Sets the boundaries of the screen text viewport

■ Syntax

    VIEW PRINT «topline TO bottomline»

■ Remarks

    The topline argument is the number of the upper line in the viewport; the
    bottomline is the number of the lower line.

    Without topline and bottomline parameters, the VIEW PRINT statement
    initializes the whole screen area as the text viewport. The number of
    lines in the screen depends on the screen mode and whether or not the /H
    option was used when QuickBASIC was started. See the entry for the WIDTH
    statement and Chapter 3, "File and Device I/O," in Programming in BASIC,
    for more information.

    Statements and functions that operate within the defined text viewport
    include CLS, LOCATE, PRINT, and the SCREEN function.

■ See Also

    CLS, LOCATE, PRINT, SCREEN Function, VIEW

■ Example

    See the example for CLS.


────────────────────────────────────────────────────────────────────────────
WAIT Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Suspends program execution while monitoring the status of a machine input
    port

■ Syntax

    WAIT portnumber,and-expression«,xor-expression»

■ Remarks

    The following list describes the arguments of the WAIT statement:

    Argument                 Description
    ──────────────────────────────────────────────────────────────────────────
    portnumber               An integer expression in the range 0-255 that is
                            the number of the port

    and-expression           An integer expression combined with data from the
                            port through an AND operation

    xor-expression           An integer expression combined with data from the
                            port using an XOR operation
    ──────────────────────────────────────────────────────────────────────────

    The WAIT statement suspends execution until a specified bit pattern is
    read from a designated input port. The data read from the port is
    combined, using an XOR operation, with xor-expression, if it appears. The
    result is then combined with the and-expression using an AND operation. If
    the result is zero, BASIC loops back and reads the data at the port again.
    If the result is nonzero, execution continues with the next statement. If
    xor-expression is omitted, it is assumed to be 0.

────────────────────────────────────────────────────────────────────────────
WARNING
    It is possible to enter an infinite loop with the WAIT statement if the
    input port fails to develop a nonzero bit pattern. In this case, you must
    manually restart the machine.
────────────────────────────────────────────────────────────────────────────

■ Example

    The following example illustrates the WAIT statement:

    WAIT 32,2


────────────────────────────────────────────────────────────────────────────
WHILE...WEND Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Executes a series of statements in a loop, as long as a given condition is
    true

■ Syntax

    WHILE condition
    .
    .
    .
    «statements»
    .
    .
    .
    WEND

■ Remarks

    If the condition is true (that is, if it does not equal zero), then any
    intervening statements are executed until the WEND statement is
    encountered. BASIC then returns to the WHILE statement and checks
    condition. If it is still true, the process is repeated. If it is not true
    (or if it equals zero), execution resumes with the statement following the
    WEND statement.

────────────────────────────────────────────────────────────────────────────
NOTE
    QuickBASIC's DO...LOOP statement provides a more powerful and flexible
    loop-control structure.
────────────────────────────────────────────────────────────────────────────

    WHILE...WEND loops may be nested to any level. Each WEND matches the most
    recent WHILE. An unmatched WHILE statement causes an error message that
    reads WHILE without WEND. An unmatched WEND statement causes an error
    message that reads WEND without WHILE.

────────────────────────────────────────────────────────────────────────────
NOTE
    Do not branch into the body of a WHILE...WEND loop without executing the
    WHILE. This may cause run-time errors or program problems that are
    difficult to locate.
────────────────────────────────────────────────────────────────────────────

■ See Also

    DO...LOOP

■ Example

    The following fragment performs a bubble sort on the array A$. The second
    line makes the variable Exchange true by assigning it a nonzero value and
    thereby forces one pass through the WHILE...WEND loop (this construction
    is unnecessary with DO...LOOP). When there are no more swaps, all elements
    of A$ are sorted, the variable Exchange is false (equal to zero), and the
    program continues execution with the line following the WEND statement.

    ' Bubble sort of array A$.
    CONST FALSE=0, TRUE=NOT FALSE
    Max = UBOUND(A$)
    Exchange=TRUE  ' Force first pass through the array.

    WHILE Exchange ' Sort until no elements are exchanged.
        Exchange=FALSE
        ' Compare the array elements by pairs. When two
        ' are exchanged, force another pass by setting Exchange
        ' to TRUE.
        FOR I = 2 TO Max
        IF A$(I-1) > A$(I) THEN
            Exchange=TRUE
            SWAP A$(I-1),A$(I)
        END IF
        NEXT
    WEND

    .
    .
    .


────────────────────────────────────────────────────────────────────────────
WIDTH Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Assigns an output-line width to a file or device or changes the number of
    columns and lines displayed on the screen

■ Syntax

    WIDTH «columns»«,lines»
    WIDTH {#filenumber | device},width
    WIDTH LPRINT width

■ Remarks

    Both files and devices can be assigned an output-line width. The different
    forms of the WIDTH statement are explained in the following list:

╓┌─┌────────────────────────────────────┌────────────────────────────────────╖
    Syntax                               Description
    ──────────────────────────────────────────────────────────────────────────
    Syntax                               Description
    ──────────────────────────────────────────────────────────────────────────
    WIDTH «columns»«,lines»              Sets the number of columns and lines
                                        to display on the screen.

                                        The value of columns must be either
                                        40 or 80. The default value is 80.

                                        The value of lines may be 25, 30, 43,
                                        50, or 60, depending on both the
                                        display adapter used and the screen
                                        mode.

                                        The number of lines displayed when
                                        the program started will determine
                                        the default value. See the SCREEN
                                        statement for more information.

    WIDTH #filenumber, width             Sets to width the line width of an
                                        output device opened as a file (for
                                        example, LPT1: or CONS:). The
    Syntax                               Description
    ──────────────────────────────────────────────────────────────────────────
                                        example, LPT1: or CONS:). The
                                        filenumber argument is the number
                                        associated with the file in the OPEN
                                        statement.

                                        This form permits altering the width
                                        while a file is open, since the
                                        statement takes place immediately.

    WIDTH device,width                   Sets to width the line width of
                                        device (a device file name). The
                                        device should be a string expression
                                        (for example, "CONS:").

                                        Note that this width assignment is
                                        deferred until the next OPEN
                                        statement affecting the device; the
                                        assignment does not affect output for
                                        an already open file.
    Syntax                               Description
    ──────────────────────────────────────────────────────────────────────────
                                        an already open file.

    WIDTH LPRINT width                   Sets to width the line width of the
                                        line printer for use by subsequent
                                        LPRINT statements.
    ──────────────────────────────────────────────────────────────────────────


■ See Also

    SCREEN Statement

■ Example

    In the following example, the record width for file #1 (the lineprinter)
    is set to different widths:

    OPEN "LPT1:" FOR OUTPUT AS #1
    Test$ = "1234567890"
    WIDTH #1, 3
    PRINT #1, Test$
    WIDTH #1, 4
    PRINT #1, Test$
    CLOSE

■ Output

    123
    456
    789
    0
    1234
    5678
    90


────────────────────────────────────────────────────────────────────────────
WINDOW Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Defines the dimensions of the current viewport

■ Syntax

    WINDOW ««SCREEN» (x1,y1)-(x2,y2)»

■ Remarks

    The WINDOW statement allows the user to create a customized coordinate
    system to draw lines, graphs, or objects without being constrained by the
    screen's physical coordinates (the dimensions of the screen). This is done
    by redefining the screen-border coordinates with the "view coordinates"
    (x1, y1) and (x2, y2). These view coordinates are single-precision
    numbers.

    WINDOW defines the section of the view coordinate system that is mapped to
    the physical coordinates of the screen. All subsequent graphics statements
    use these new view coordinates and are displayed within the current
    viewport. (The size of the viewport can be changed with the VIEW
    statement.)

    Either the RUN statement or WINDOW with no arguments disables the window
    transformation. The WINDOW SCREEN variant inverts the normal Cartesian
    direction of the y-coordinate, so y values go from negative to positive
    from top to bottom.

    Figure R.1 shows the effects of WINDOW and WINDOW SCREEN on a line drawn
    in screen mode 2. Notice the change in the coordinates of the screen
    corners.

■ Examples

    The following example illustrates two lines with the same end-point
    coordinates. The first is drawn on the default screen, and the second is
    on a redefined window.

    SCREEN 2
    LINE (100,100) - (150,150), 1
    LOCATE 2,20 : PRINT "The line on the default screen"
    WINDOW SCREEN (100,100) - (200,200)
    LINE (100,100) - (150,150), 1
    LOCATE 8,18 : PRINT"& the same line on a redefined window"

                                Increasing X
                            ─────────────────────────►
                        │ ┌─────────────────────────┐
                        │ │(0,0)             (639,0)│
                Increasing│ │                         │
                    Y     │ │                         │
                        │ │                         │
                        │ │                         │
                        │ │                         │
                        │ │                         │
                        │ │(0,199)         (639,199)│
                        ▼ └─────────────────────────┘
                                        /  \
                                    /       \
                                    /            \
            WINDOW (-25,-15)   /        WINDOW SCREEN (-25,-15)-(5,10)
            LINE (-15,-10)-(-5,-5)      LINE  (-15,-10)-(-5,-5)
                            /                           \
                        /                                \
                        /                                     \
                    /                                          \      Increas
                ┌─────────────────────────┐                     ───────────────
                │(-25,10)           (5,10)│                   │  ┌─────────────
            │ │                         │                   │  │(-25,-15)
    Increasing│ │                 (0,0)   │        Increasing │  │
        Y     │ │                         │            Y      │  │      ∙\(-15,
            │ │           (-5,-5)∙      │                   │  │         \
            │ │              /          │                   │  │           \∙
            │ │            /            │                   │  │
            │ │  (-15,-10)∙             │                   │  │
            │ │(-25,-15)         (5,-15)│                   │  │
                └─────────────────────────┘                   │  │(-25,10)
                ─────────────────────────►                    ▼  └─────────────
                        Increasing X

    Figure R.1 WINDOW and WINDOW SCREEN

    The following example shows how changing the window size changes the size
    of a figure drawn on the screen. The effect is one of zooming in and out;
    as the window gets smaller, the figure appears larger on the screen, until
    parts of it are finally clipped because they lie outside the window. As
    the window gets larger, the figure appears smaller on the screen.

    PRINT "Press ENTER to start."
    INPUT;"",A$
    SCREEN 1 : COLOR 7              'Grey screen.
    X = 500 : Xdelta = 50

    DO
        DO WHILE X < 525 AND X > 50
        X = X + Xdelta            'Change window size.
        CALL Zoom(X)
        FOR I = 1 TO 1000         'Delay loop.
            IF INKEY$ <> "" THEN END   'Stop if key pressed.
        NEXT
        LOOP
        X = X - Xdelta
        Xdelta = -Xdelta             'Reverse size change.
    LOOP

    SUB Zoom(X) STATIC
        CLS
        WINDOW (-X,-X)-(X,X)         'Define new window.
        LINE (-X,-X)-(X,X),1,B       'Draw window border.
        CIRCLE (0,0),60,1,,,.5       'Draw ellipse with x-radius 60.
        PAINT (0,0),1                'Paint ellipse.
    END SUB


────────────────────────────────────────────────────────────────────────────
WRITE Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Sends data to the screen

■ Syntax

    WRITE «expressionlist»

■ Remarks

    If expressionlist is omitted, a blank line is written. If expressionlist
    is included, the values of the expressions are written to the screen. The
    expressions in the list may be numeric and/or string expressions. They
    must be separated by commas.

    When the printed items are written, each item is separated from the last
    by a comma. Printed strings are delimited by quotation marks. After the
    last item in the list is printed, BASIC inserts a carriage-return and
    line-feed. The WRITE statement writes numeric values without leading or
    trailing spaces.

■ See Also

    PRINT

■ Example

    The following example shows the difference between the PRINT and WRITE
    statements:

    A=80 : B=90 : C$="That's all." : D=-1.0E-13
    WRITE A,B,C$,D
    PRINT A,B,C$,D

■ Output

    80,90,"That's all.",-1E-13
    80            90           That's all.  -1E-13


────────────────────────────────────────────────────────────────────────────
WRITE # Statement
────────────────────────────────────────────────────────────────────────────

■ Action

    Writes data to a sequential file

■ Syntax

    WRITE #filenumber,expressionlist

■ Remarks

    The filenumber is the number used in the OPEN statement. The file must be
    opened in OUTPUT or APPEND mode. The expressions in the argument
    expressionlist are string and/or numeric expressions, separated by commas.
    If you omit the expressionlist, the WRITE # statement writes a blank line
    to the file.

    The WRITE # statement, unlike the PRINT # statement, inserts commas
    between items as they are written to the file. You do not have to put
    explicit delimiters in the list. A new line is inserted once the last item
    in the list has been written to the file.

    If WRITE # attempts to write data to a sequential file restricted by a
    LOCK statement, an error message appears that reads Permission denied
    unless the error is trapped by the program. All of BASIC's usual
    error-handling routines can trap and examine this error.

■ See Also

    LOCK, OPEN, PRINT #, WRITE

■ Example

    The output from the following program illustrates the difference between
    the WRITE # and PRINT # statements:

    A$ = "VCR, remote control" : B$ = "$399.00"
    OPEN  "PRICES" FOR OUTPUT AS #1       'Open PRICES for writing.
    PRINT #1,A$,B$   'Store A$ and B$ in first record with PRINT #.
    WRITE #1,A$,B$   'Store A$ and B$ in second record with WRITE #.
    CLOSE #1

■ Output

    VCR, remote control         $399.00
    "VCR, remote control","$399.00"


════════════════════════════════════════════════════════════════════════════
Glossary


CONTROL FLOW

FOR...NEXT  Repeats statements between FOR and NEXT a specific number of
    times.

EXIT FOR  alternative exit from FOR...NEXT

DO...LOOP  Repeats statements between DO and LOOP, while (until) a condition
    is(becomes) true.

EXIT DO  alternative exit from DO...LOOP

WHILE...WEND  Repeats statements between WHILE and WEND while a given
    condition is true.

IF...THEN...ELSE... END IF  Conditionally executes or branches todifferent
    statements.

SELECT CASE  Conditionally executes statements based on value of a variable.

GOSUB...RETURN  Transfers contol to a specific line in a module; control
    returns to the line following GOSUB. (Old style; SUB is a more powerful
    alternative.)

RUN  Restarts current program, or loads and runs another program.

CHAIN "program"  Passes execution to program specified, then returns.

SLEEP  Suspends program execution.

WAIT  Suspends program execution while monitoring status of a machine input
    port.


PROCEDURES

SUB...END SUB  Mark the beginning and end of a SUBprocedure.

EXIT SUB  alternative exit from a SUB procedure

FUNCTION... END FUNCTION  Mark the beginning and end of aFUNCTION procedure.

EXIT FUNCTION  alternative exit from aFUNCTION procedure

DEF FN...END DEF  Mark the beginning and end of a DEF FN function. (Old
    style; FUNCTION is a more powerful alternative.)

EXIT DEF  alternative exit from aDEF FN function

CALL, CALLS  Transfers control to a BASIC SUB procedure, or a procedure
    written in another language and compiled separately.


STANDARD I/O

BEEP  Makes the speaker beep.

SOUND  Makes a sound of specified frequency and duration.

PRINT [USING]  Outputs [formatted] text to the screen.

WIDTH  Sets screen width and number of lines.

INKEY$  Reads a character from the keyboard.

INP (n)  Returns the value read from I/O port n.

INPUT  Reads string and/or numerical input from the keyboard and stores it
    in a list ofvariables.

INPUT$  Reads characters from the keyboard into a string variable.

LINE INPUT  Reads an entire line (up to 255 chars) into a string variable.

LOCATE  Moves cursor to a specified screen row and column.

SPC  Skips spaces in printed output.

TAB  Skips to a specified display column.

CSRLIN  Returns row number of cursor.

POS  Returns line number of cursor.

LPOS  Returns position of line printer's print head within the printer
    buffer.

VIEW PRINT  Sets top and bottom rows for displaying print.

LPRINT [USING]  Prints [formatted] data on LPT1: printer.

OPEN COMn:  Opens and initializes a communications channel for I/O.

OUT  Sends a byte to a machine I/O port.

PEN  Returns the light pen coordinates.

STICK  Returns the x and y coordinates of the two joysticks.

STRIG  Returns the status of a specified joystick trigger (fire button).

READ  Returns values from a DATA statement and assigns them to variables.

RESTORE  Allows DATA statements to be reread from a specified line.


FILE I/O

OPEN  Opens a file for reading or writing records.

CLOSE  Ends I/O operations to a file.

RESET  Closes all disk files.

PRINT [USING] #  Stores a [formatted] list of variables in a file.

WRITE #  Stores a list of variables as record fields in a file.

FIELD  Allocates space for variables in a random-access file buffer.

WIDTH  Specifies a standard length for each record in a file.

PUT  Stores contents of a variable in a file.

INPUT #  Reads fields from a record; assigns each to a variable.

INPUT$  Reads a string of characters from a file.

LINE INPUT #  Reads a record and stores it in a string variable.

GET  Reads data from a file; assigns data to elements of a variable.

FREEFILE  Returns the next available file number.

EOF  Tests whether the end of a disk file has been reached.

FILEATTR  Returns a number indicating the mode in which a file was opened.

LOC  Gives the current position within a file.

LOF  Gives the number of bytes in an open file.

SEEK (function)  Gives the location where the next file I/O operation will
    occur.

SEEK (statement)  Sets the byte position for the next file I/O operation.

IOCTL  Transmits a control data string to a device driver.

IOCTL$  Receives a control data string from a device driver.

LOCK...UNLOCK  Controls access by other processes to all or part of an open
    file.


STRING PROCESSING

LEFT$  Returns characters from the left side of the string.

RIGHT$  Returns characters from the right side of the string.

MID$ function  Returns characters from anywhere in the string.

MID$ statement  Replaces part of a string with another string.

LTRIM$  Strips leading blanks from string.

RTRIM$  Strips trailing blanks from string.

INSTR  Searches for a string within another string.

LCASE$  Converts a string to all lower-case letters.

UCASE$  Converts a string to all upper-case letters.

LSET  Left-justifies a fixed-length string.

RSET  Right-justifies a fixed-length string.

STR$  Returns the string representation of the decimal value of a numeric
    expression.

HEX$  Returns the string representation of the hex value of a numeric
    expression.

VAL  Returns the numeric value of a stringexpression.

SPACE$  Returns a string of blanks.

STRING$  Returns a string of one repeatedcharacter.

LEN  Returns the number of characters in a string.

ASC  Returns the ASCII value of a character.

CHR$  Returns the character with the given ASCII value.

SADD  Returns the address of the specifiedstring expression.


GRAPHICS

SCREEN  Specifies a BASIC screen mode.

PSET  Sets a pixel to the foreground color.

PRESET  Sets a pixel to the background color.

LINE  Draws a straight line or a box.

CIRCLE  Draws a circle or an ellipse.

DRAW  Combines BASIC graphics features into a graphics macro language.

WINDOW  Sets the logical coordinates for a screen viewport.

VIEW  Specifies a viewport rectangle for graphics output.

PMAP  Maps pixel physical coordinates to logical coordinates.

POINT  Returns physical or logical coordinates of cursor, or color number of
    pixel.

COLOR  Sets default colors for graphics output.

PALETTE  Assigns colors to color numbers.

PAINT  Fills an area with color or a pattern.

GET  Saves a rectangular area of graphics screen in memory.

PUT  Displays graphics stored by GET.

PCOPY  Copies one screen storage page to another.


ERROR AND EVENT TRAPPING

ON ERROR GOTO line  Program branches to line number or line label when error
    occurs.

RESUME  Returns control after executing error-handling routine.

ERR  Returns code for run-time error.

ERL  Returns line number on which erroroccurred.

ERDEV  Returns code for last device which caused an error.

ERDEV$  Returns name of last device which caused an error.

ERROR  Simulates occurrence of a BASIC error.

ON event GOSUB line  Branches to routine labelled with line, whenever event
    occurs.

event ON  Enables trapping of event.

event OFF



────────────────────────────────────────────────────────────────────────────
Appendix A  Keyboard Scan Codes and ASCII Character Codes

        A.1  Keyboard Scan Codes
        A.2  ASCII Character Codes

A.1  Keyboard Scan Codes

    The table on the next page shows the DOS keyboard scan codes. These codes
    are returned by the INKEY$ function.

    Key combinations with NUL in the Char column return two bytes──a null byte
    (&H00) followed by the value listed in the Dec and Hex columns. For
    example, pressing ALT+F1 returns a null byte followed by a byte containing
    104 (&H68).

┌────────┬───────┬────────────┬─────────────┬─────────────┬──────────────┐
│        │       │            │ASCII or     │ASCII or     │   ASCII or   │
│        │Scan   │ ASCII or   │Extended     │Extended     │   Extended   │
│  Key   │Code   │ Extended   │with SHIFT   │with CTRL    │   with ALT   │
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

┌──────────────────────┐   ┌────────────┐   ┌────────────┐   ┌────────────┐
│Ctrl Dec Hex Char Code│   │Dec Hex Char│   │Dec Hex Char│   │Dec Hex Char│
├────┬───┬───┬────┬────┤   ├───┬───┬────┤   ├───┬───┬────┤   ├───┬───┬────┤
│ ^@ │  0│00 │    │ NUL│   │ 32│ 20│    │   │ 64│40 │ @  │   │ 96│60 │ `  │
│ ^A │  1│01 │ ☺  │ SOH│   │ 33│ 21│ !  │   │ 65│41 │ A  │   │ 97│61 │ a  │
│ ^B │  2│02 │ ☻  │ STX│   │ 34│ 22│ "  │   │ 66│42 │ B  │   │ 98│62 │ b  │
│ ^C │  3│03 │ ♥  │ ETX│   │ 35│ 23│ #  │   │ 67│43 │ C  │   │ 99│63 │ c  │
│ ^D │  4│04 │ ♦  │ EOT│   │ 36│ 24│ $  │   │ 68│44 │ D  │   │100│64 │ d  │
│ ^E │  5│05 │ ♣  │ ENQ│   │ 37│ 25│ %  │   │ 69│45 │ E  │   │101│65 │ e  │
│ ^F │  6│06 │ ♠  │ ACK│   │ 38│ 26│ &  │   │ 70│46 │ F  │   │102│66 │ f  │
│ ^G │  7│07 │ •  │ BEL│   │ 39│ 27│ '  │   │ 71│47 │ G  │   │103│67 │ g  │
│ ^H │  8│08 │ ◘  │ BS │   │ 40│ 28│ (  │   │ 72│48 │ H  │   │104│68 │ h  │
│ ^I │  9│09 │    │ HT │   │ 41│ 29│ )  │   │ 73│49 │ I  │   │105│69 │ i  │
│ ^J │ 10│0A │    │ LF │   │ 42│ 2A│ *  │   │ 74│4A │ J  │   │106│6A │ j  │
│ ^K │ 11│0B │    │ VT │   │ 43│ 2B│ +  │   │ 75│4B │ K  │   │107│6B │ k  │
│ ^L │ 12│0C │    │ FF │   │ 44│ 2C│ ,  │   │ 76│4C │ L  │   │108│6C │ l  │
│ ^M │ 13│0D │    │ CR │   │ 45│ 2D│ -  │   │ 77│4D │ M  │   │109│6D │ m  │
│ ^N │ 14│0E │ ♫  │ SO │   │ 46│ 2E│ .  │   │ 78│4E │ N  │   │110│6E │ n  │
│ ^O │ 15│0F │    │ SI │   │ 47│ 2F│ /  │   │ 79│4F │ O  │   │111│6F │ o  │
│ ^P │ 16│10 │ ►  │ DLE│   │ 48│ 30│ 0  │   │ 80│50 │ P  │   │112│70 │ p  │
│ ^Q │ 17│11 │ ◄  │ DC1│   │ 49│ 31│ 1  │   │ 81│51 │ Q  │   │113│71 │ q  │
│ ^R │ 18│12 │ ↕  │ DC2│   │ 50│ 32│ 2  │   │ 82│52 │ R  │   │114│72 │ r  │
│ ^S │ 19│13 │ ‼  │ DC3│   │ 51│ 33│ 3  │   │ 83│53 │ S  │   │115│73 │ s  │
│ ^T │ 20│14 │ ¶  │ DC4│   │ 52│ 34│ 4  │   │ 84│54 │ T  │   │116│74 │ t  │
│ ^U │ 21│15 │ §  │ NAK│   │ 53│ 35│ 5  │   │ 85│55 │ U  │   │117│75 │ u  │
│ ^V │ 22│ 16│ ▬  │ SYN│   │ 54│ 36│ 6  │   │ 86│ 56│ V  │   │118│ 76│ v  │
│ ^W │ 23│ 17│ ↨  │ ETB│   │ 55│ 37│ 7  │   │ 87│ 57│ W  │   │119│ 77│ w  │
│ ^X │ 24│ 18│ ↑  │ CAN│   │ 56│ 38│ 8  │   │ 88│ 58│ X  │   │120│ 78│ x  │
│ ^Y │ 25│ 19│ ↓  │ EM │   │ 57│ 39│ 9  │   │ 89│ 59│ Y  │   │121│ 79│ y  │
│ ^Z │ 26│ 1A│    │ SUB│   │ 58│ 3A│ :  │   │ 90│ 5A│ Z  │   │122│ 7A│ z  │
│ ^[ │ 27│ 1B│ ←  │ ESC│   │ 59│ 3B│ ;  │   │ 91│ 5B│ [  │   │123│ 7B│ {  │
│ ^\ │ 28│ 1C│ ∟  │ FS │   │ 60│ 3C│ <  │   │ 92│ 5C│ \  │   │124│ 7C│ |  │
│ ^} │ 29│ 1D│ ↔  │ GS │   │ 61│ 3D│ =  │   │ 93│ 5D│ ]  │   │125│ 7D│ }  │
│ ^^ │ 30│ 1E│   │ RS │   │ 62│ 3E│ >  │   │ 94│ 5E│ ^  │   │126│ 7E│ ~  │
│ ^_ │ 31│ 1F│ ▼  │ US │   │ 63│ 3F│ ?  │   │ 95│ 5F│ _  │   │127│ 7F│    │
└────┴───┴───┴────┴────┘   └───┴───┴────┘   └───┴───┴────┘   └───┴───┴────┘

┌────────────┐       ┌────────────┐       ┌────────────┐       ┌────────────┐
│Dec Hex Char│       │Dec Hex Char│       │Dec Hex Char│       │Dec Hex Char│
├───┬───┬────┤       ├───┬───┬────┤       ├───┬───┬────┤       ├───┬───┬────┤
│128│ 80│ Ç  │       │160│ A0│ á  │       │192│ C0│ └  │       │224│ E0│ α  │
│129│ 81│ ü  │       │161│ A1│ í  │       │193│ C1│ ┴  │       │225│ E1│ ß  │
│130│ 82│ é  │       │162│ A2│ ó  │       │194│ C2│ ┬  │       │226│ E2│ Γ  │
│131│ 83│ â  │       │163│ A3│ ú  │       │195│ C3│ ├  │       │227│ E3│ π  │
│132│ 84│ ä  │       │164│ A4│ ñ  │       │196│ C4│ ─  │       │228│ E4│ Σ  │
│133│ 85│ à  │       │165│ A5│ Ñ  │       │197│ C5│ ┼  │       │229│ E5│ σ  │
│134│ 86│ å  │       │166│ A6│ ª  │       │198│ C6│ ╞  │       │230│ E6│ µ  │
│135│ 87│ ç  │       │167│ A7│ º  │       │199│ C7│ ╟  │       │231│ E7│ τ  │
│136│ 88│ ê  │       │168│ A8│ ¿  │       │200│ C8│ ╚  │       │232│ E8│ Φ  │
│137│ 89│ ë  │       │169│ A9│ ⌐  │       │201│ C9│ ╔  │       │233│ E9│ Θ  │
│138│ 90│ è  │       │170│ AA│ ¬  │       │202│ CA│ ╩  │       │234│ EA│ Ω  │
│139│ 91│ ï  │       │171│ AB│ ½  │       │203│ CB│ ╦  │       │235│ EB│ δ  │
│140│ 92│ î  │       │172│ AC│ ¼  │       │204│ CC│ ╠  │       │236│ EC│ ∞  │
│141│ 93│ ì  │       │173│ AD│ ¡  │       │205│ CD│ ═  │       │237│ ED│ φ  │
│142│ 94│ Ä  │       │174│ AE│ «  │       │206│ CE│ ╬  │       │238│ EE│ ε  │
│143│ 95│ Å  │       │175│ AF│ »  │       │207│ CF│ ╧  │       │239│ EF│ ∩  │
│144│ 96│ É  │       │176│ B0│ ░  │       │208│ D0│ ╨  │       │240│ F0│ ≡  │
│145│ 97│ æ  │       │177│ B1│ ▒  │       │209│ D1│ ╤  │       │241│ F1│ ±  │
│146│ 98│ Æ  │       │178│ B2│ ▓  │       │210│ D2│ ╥  │       │242│ F2│ ≥  │
│147│ 99│ ô  │       │179│ B3│ │  │       │211│ D3│ ╙  │       │243│ F3│ ≤  │
│148│ 9A│ ö  │       │180│ B4│ ┤  │       │212│ D4│ ╘  │       │244│ F4│ ⌠  │
│149│ 9B│ ò  │       │181│ B5│ ╡  │       │213│ D5│ ╒  │       │245│ F5│ ⌡  │
│150│ 96│ û  │       │182│ B6│ ╢  │       │214│ D6│ ╓  │       │246│ F6│ ÷  │
│151│ 97│ ù  │       │183│ B7│ ╖  │       │215│ D7│ ╫  │       │247│ F7│ ≈  │
│152│ 98│ ÿ  │       │184│ B8│ ╕  │       │216│ D8│ ╪  │       │248│ F8│ °  │
│153│ 99│ Ö  │       │185│ B9│ ╣  │       │217│ D9│ ≈  │       │249│ F9│ ∙  │
│154│ 9A│ Ü  │       │186│ BA│ ║  │       │218│ DA│ ┌  │       │250│ FA│ ·  │
│155│ 9B│ ¢  │       │187│ BB│ ╗  │       │219│ DB│ █  │       │251│ FB│ √  │
│156│ 9C│ £  │       │188│ BC│ ╝  │       │220│ DC│ ▄  │       │252│ FC│ ⁿ  │
│157│ 9D│ ¥  │       │189│ BD│ ╜  │       │221│ DD│ ▌  │       │253│ FD│ ²  │
│158│ 9E│ ₧  │       │190│ BE│ ╛  │       │222│ DE│ ▐  │       │254│ FE│ ■  │
│159│ 9F│ ƒ  │       │191│ BF│ ┐  │       │223│ DF│ ▀  │       │255│ FF│    │
└───┴───┴────┘       └───┴───┴─┴──┘       └───┴───┴────┘       └───┴───┴────┘


A.2  ASCII Character Codes

╓┌─┌───────────┌────────────┌───────────┌────────────────────────────────────╖
                    Number
    Char        Dec          Hex         Control
    ──────────────────────────────────────────────────────────────────────────
                0            00H         NUL (Null)
    ☺           1            01H         SOH (Start of heading)
    ☻           2            02H         STX (Start of text)
    ♥           3            03H         ETX (End of text)
    ♦           4            04H         EOT (End of transmission)
    ♣           5            05H         ENQ (Enquiry)
    ♠           6            06H         ACK (Acknowledge)
    •           7            07H         BEL (Bell)
                    Number
    Char        Dec          Hex         Control
    ──────────────────────────────────────────────────────────────────────────
    •           7            07H         BEL (Bell)
    ◘           8            08H         BS (Backspace)
                9            09H         HT (Horizontal tab)
                10           0AH         LF (Linefeed)
    ♂           11           0BH         VT (Vertical tab)
                12           0CH         FF (Formfeed)
                13           0DH         CR (Carriage return)
    ♫           14           EH          SO (Shift out)
                15           0FH         SI (Shift in)
    ►           16           10H         DLE (Data link escape)
    ◄           17           11H         DC1 (Device control 1)
    ↕           18           12H         DC2 (Device control 2)
    ‼           19           13H         DC3 (Device control 3)
    ¶           20           14H         DC4 (Device control 4)
    §           21           15H         NAK (Negative acknowledge)
    ▬           22           16H         SYN (Synchronous idle)
    ↨           23           17H         ETB (End transmission block)
    ↑           24           18H         CAN (Cancel)
                    Number
    Char        Dec          Hex         Control
    ──────────────────────────────────────────────────────────────────────────
    ↑           24           18H         CAN (Cancel)
    ↓           25           19H         EM (End of medium)
                26           1AH         SUB (Substitute)
    ←           27           1BH         ESC (Escape)
    ∟           28           1CH         FS (File separator)
    ↔           29           1DH         GS (Group separator)
                30           1EH         RS (Record separator)
    ▼           31           1FH         US (Unit separator)
                32           20H
    !           33           21H
    "           34           22H
    #           35           23H
    $           36           24H
    %           37           25H
    &           38           26H
    '           39           27H
    (           40           28H
    )           41           29H
                    Number
    Char        Dec          Hex         Control
    ──────────────────────────────────────────────────────────────────────────
    )           41           29H
    *           42           2AH
    +           43           2BH
    ,           44           2CH
    -           45           2DH
    .           46           2EH
    /           47           2FH
    0           48           30H
    1           49           31H
    2           50           32H
    3           51           33H
    4           52           34H
    5           53           35H
    6           54           36H
    7           55           37H
    8           56           38H
    9           57           39H
    :           58           3AH
                    Number
    Char        Dec          Hex         Control
    ──────────────────────────────────────────────────────────────────────────
    :           58           3AH
    ;           59           3BH
    <           60           3CH
    =           61           3DH
    >           62           3EH
    ?           63           3FH
    @           64           40H
    A           65           41H
    B           66           42H
    C           67           43H
    D           68           44H
    E           69           45H
    F           70           46H
    G           71           47H
    H           72           48H
    I           73           49H
    J           74           4AH
    K           75           4BH
                    Number
    Char        Dec          Hex         Control
    ──────────────────────────────────────────────────────────────────────────
    K           75           4BH
    L           76           4CH
    M           77           4DH
    N           78           4EH
    O           79           4FH
    P           80           50H
    Q           81           51H
    R           82           52H
    S           83           53H
    T           84           54H
    U           85           55H
    V           86           56H
    W           87           57H
    X           88           58H
    Y           89           59H
    Z           90           5AH
    [           91           5BH
    \           92           5CH
                    Number
    Char        Dec          Hex         Control
    ──────────────────────────────────────────────────────────────────────────
    \           92           5CH
    ]           93           5DH
    ^           94           5EH
    _           95           5FH
    g           96           60H
    a           97           61H
    b           98           62H
    c           99           63H
    d           100          64H
    e           101          65H
    f           102          66H
    g           103          67H
    h           104          68H
    i           105          69H
    j           106          6AH
    k           107          6BH
    l           108          6CH
    m           109          6DH
                    Number
    Char        Dec          Hex         Control
    ──────────────────────────────────────────────────────────────────────────
    m           109          6DH
    n           110          6EH
    o           111          6FH
    p           112          70H
    q           113          71H
    r           114          72H
    s           115          73H
    t           116          74H
    u           117          75H
    v           118          76H
    w           119          77H
    x           120          78H
    y           121          79H
    z           122          7AH
    {           123          7BH
    |           124          7CH
    }           125          7DH
    ~           126          7EH
                    Number
    Char        Dec          Hex         Control
    ──────────────────────────────────────────────────────────────────────────
    ~           126          7EH
                127          7FH         DEL (Delete)
    Ç           128          80H
    ü           129          81H
    é           130          82H
    â           131          83H
    ä           132          84H
    à           133          85H
    å           134          86H
    ç           135          87H
    ê           136          88H
    ë           137          89H
    è           138          8AH
    ï           139          8BH
    î           140          8CH
    ì           141          8DH
    Ä           142          8EH
    Å           143          8FH
                    Number
    Char        Dec          Hex         Control
    ──────────────────────────────────────────────────────────────────────────
    Å           143          8FH
    É           144          90H
    æ           145          91H
    Æ           146          92H
    ô           147          93H
    ö           148          94H
    ò           149          95H
    û           150          96H
    ù           151          97H
    ÿ           152          98H
    Ö           153          99H
    Ü           154          9AH
    ¢           155          9BH
    £           156          9CH
    ¥           157          9DH
    ₧           158          9EH
    ƒ           159          9FH
    á           160          A0H
                    Number
    Char        Dec          Hex         Control
    ──────────────────────────────────────────────────────────────────────────
    á           160          A0H
    í           161          A1H
    ó           162          A2H
    ú           163          A3H
    ñ           164          A4H
    Ñ           165          A5H
    ª           166          A6H
    º           167          A7H
    ¿           168          A8H
    ⌐           169          A9H
    ¬           170          AAH
    ½           171          ABH
    ¼           172          ACH
    ¡           173          ADH
    «           174          AEH
    »           175          AFH
    ░           176          B0H
    ▒           177          B1H
                    Number
    Char        Dec          Hex         Control
    ──────────────────────────────────────────────────────────────────────────
    ▒           177          B1H
    ▓           178          B2H
    │           179          B3H
    ┤           180          B4H
    ╡           181          B5H
    ╢           182          B6H
    ╖           183          B7H
    ╕           184          B8H
    ╣           185          B9H
    ║           186          BAH
    ╗           187          BBH
    ╝           188          BCH
    ╜           189          BDH
    ╛           190          BEH
    ┐           191          BFH
    └           192          C0H
    ┴           193          C1H
    ┬           194          C2H
                    Number
    Char        Dec          Hex         Control
    ──────────────────────────────────────────────────────────────────────────
    ┬           194          C2H
    ├           195          C3H
    ─           196          C4H
    ┼           197          C5H
    ╞           198          C6H
    ╟           199          C7H
    ╚           200          C8H
    ╔           201          C9H
    ╩           202          CAH
    ╦           203          CBH
    ╠           204          CCH
    ═           205          CDH
    ╬           206          CEH
    ╧           207          CFH
    ╨           208          D0H
    ╤           209          D1H
    ╥           210          D2H
    ╙           211          D3H
                    Number
    Char        Dec          Hex         Control
    ──────────────────────────────────────────────────────────────────────────
    ╙           211          D3H
    ╘           212          D4H
    ╒           213          D5H
    ╓           214          D6H
    ╫           215          D7H
    ╪           216          D8H
    ┘           217          D9H
    ┌           218          DAH
    █           219          DBH
    ▄           220          DCH
    ▌           221          DDH
    ▐           222          DEH
    ▀           223          DFH
                224          E0H
    ß           225          E1H
    Γ           226          E2H
    π           227          E3H
    Σ           228          E4H
                    Number
    Char        Dec          Hex         Control
    ──────────────────────────────────────────────────────────────────────────
    Σ           228          E4H
    σ           229          E5H
    µ           230          E6H
    τ           231          E7H
    Φ           232          E8H
    Θ           233          E9H
    Ω           234          EAH
    δ           235          EBH
    ∞           236          ECH
    φ           237          EDH
    ε           238          EEH
    ∩           239          EFH
    ≡           240          F0H
    ±           241          F1H
    ≥           242          F2H
    ≤           243          F3H
    ⌠           244          F4H
    ⌡           245          F5H
                    Number
    Char        Dec          Hex         Control
    ──────────────────────────────────────────────────────────────────────────
    ⌡           245          F5H
    ÷           246          F6H
    ≈           247          F7H
    °           248          F8H
    ∙           249          F9H
    ·           250          FAH
    √           251          FBH
    ⁿ           252          FCH
    ²           253          FDH
    ■           254          FEH
                255          FFH
    ──────────────────────────────────────────────────────────────────────────





────────────────────────────────────────────────────────────────────────────
Appendix B  Error Messages

        B.1  Error-Message Display
        B.2  Invocation, Compile-Time, and Run-Time Error Messages
        B.3  LINK Error Messages
        B.4  LIB Error Messages
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

    Section B.2 lists alphabetically the invocation, compile-time, and
    run-time error messages, along with any error codes that are assigned.
    Table B.1 lists the run-time error messages and error codes in numerical
    order. Section B.3 lists the Microsoft Overlay Linker error messages, and
    Section B.4, the Microsoft Library Manager error messages.


B.1  Error-Message Display

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

    Error n in line linenumber of module module-name at address segment:offset

    An ERR code is listed for some errors. If an error occurs, the value
    returned by ERR is set to the appropriate code when an error-trapping
    subroutine is entered. (Error-trapping routines are entered via the ON
    ERROR statement.) The ERR value remains unchanged until a RESUME statement
    returns control to the main program. See Chapter 6, "Error and Event
    Trapping," in Programming in BASIC for more information.

    Table B.1 lists the error codes in numerical order. See the alphabetical
    listing for explanations of the errors.

    Table B.1   Run-Time Error Codes

╓┌─┌───────────┌────────────────────────┌───────────┌────────────────────────╖
    Code        Description              Code        Description
    ──────────────────────────────────────────────────────────────────────────
    2           Syntax error             53          File not found

    3           RETURN without GOSUB     54          Bad file mode

    4           Out of DATA              55          File already open

    5           Illegal function call    56          FIELD statement active

    6           Overflow                 57          Device I/O error

    7           Out of memory            58          File already exists

    9           Subscript out of range   59          Bad record length

    10          Duplicate definition     61          Disk full

    11          Division by zero         62          Input past end of file

    Code        Description              Code        Description
    ──────────────────────────────────────────────────────────────────────────

    13          Type mismatch            63          Bad record number

    14          Out of string space      64          Bad file name

    16          String formula too       67          Too many files
                complex

    19          No RESUME                68          Device unavailable

    20          RESUME without error     69          Communication-buffer
                                                    overflow

    24          Device timeout           70          Permission denied

    25          Device fault             71          Disk not ready

    27          Out of paper             72          Disk-media error

    Code        Description              Code        Description
    ──────────────────────────────────────────────────────────────────────────

    39          CASE ELSE expected       73          Advanced feature
                                                    unavailable

    40          Variable required        74          Rename across disks

    50          FIELD overflow           75          Path/File access error

    51          Internal error           76          Path not found

    52          Bad file name or number

    ──────────────────────────────────────────────────────────────────────────


    QYInvocation Error


B.2  Invocation, Compile-Time, and Run-Time Error Messages

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
    Reduce the size of the array or use the ¢DYNAMIC metacommand. You may also
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
    your program into parts and use the CHAIN statement or use the ¢DYNAMIC
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
    ¢DYNAMIC metacommand at the top of your program. If you have documents
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

¢INCLUDE-file access error

    The include file named in the ¢INCLUDE metacommand cannot be located.
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

¢Metacommand error

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

    ■ Use the ¢DYNAMIC metacommand to create dynamic arrays. Dynamic array
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
    ¢DYNAMIC metacommand at the top of your program. If you have documents
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

Statement cannot occur within $INCLUDE file

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

    The number of lines in the line list following an ON...GOTO or ON...GOSUB
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
    such as CALL ALPHA((X)), where X is a user-defined type. (Compile-time
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


B.3  LINK Error Messages

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

╓┌─┌───────────┌─────────────────────────────────────────────────────────────╖
    Number      LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
    L1001       option : option name ambiguous A unique option name did not
                appear after the option indicator (/). For example, the
                command LINK /N main;

                generates this error, since LINK cannot tell which of the
                three options beginning with the letter "N" was intended.

    L1002       option : unrecognized option name
    Number      LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
    L1002       option : unrecognized option name

                An unrecognized character followed the option indicator (/),
                as in the following example: LINK /ABCDEF main;

    L1003       /QUICKLIB, /EXEPACK incompatible

                You specified two options that cannot be used together:
                /QUICKLIB and /EXEPACK.

    L1004       option : invalid numeric value

                An incorrect value appeared for one of the LINK options. For
                example, a character string was given for an option that
                requires a numeric value.

    L1006       option : stack size exceeds 65535 bytes

                The value given as a parameter to the /STACKSIZE option
    Number      LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
                The value given as a parameter to the /STACKSIZE option
                exceeds the maximum allowed.

    L1007       option : interrupt number exceeds 255

                For the /OVERLAYINTERRUPT option, a number greater than 255
                was given as a value.

    L1008       option : segment limit set too high

                The limit on the number of segments allowed was set to greater
                than 3072 using the /SEGMENTS option.

    L1009       number : CPARMAXALLOC : illegal value

                The number specified in the /CPARMAXALLOC option was not in
                the range 1-65,535.

    L1020       no object modules specified
    Number      LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
    L1020       no object modules specified

                No object-file names were specified to LINK.

    L1021       cannot nest response files

                A response file occurred within a response file.

    L1022       response line too long

                A line in a response file was longer than 127 characters.

    L1023       terminated by user

                You entered CTRL+C or CRTL+BREAK.

    L1024       nested right parentheses

                The contents of an overlay were typed incorrectly on the
    Number      LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
                The contents of an overlay were typed incorrectly on the
                command line.

    L1025       nested left parentheses

                The contents of an overlay were typed incorrectly on the
                command line.

    L1026       unmatched right parenthesis

                A right parenthesis was missing from the contents
                specification of an overlay on the command line.

    L1027       unmatched left parenthesis

                A left parenthesis was missing from the contents specification
                of an overlay on the command line.

    L1043       relocation table overflow
    Number      LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
    L1043       relocation table overflow

                More than 32,768 long calls, long jumps, or other long
                pointers appeared in the program. Try replacing long
                references with short references, where possible, and recreate
                the object module.

    L1045       too many TYPDEF records

                An object module contained more than 255 TYPDEF records. These
                records describe communal variables. This error can appear
                only with programs produced by the Microsoft FORTRAN Compiler
                or other compilers that support communal variables. (TYPDEF is
                a DOS term. It is explained in the Microsoft MS-DOS
                Programmer's Reference and in other reference books on DOS.)

    L1046       too many external symbols in one module

                An object module specified more than the limit of 1023
    Number      LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
                An object module specified more than the limit of 1023
                external symbols. Break the module into smaller parts.

    L1047       too many group, segment, and class names in one module

                The program contained too many group, segment, and class
                names. Reduce the number of groups, segments, or classes, and
                recreate the object file.

    L1048       too many segments in one module

                An object module had more than 255 segments. Split the module
                or combine segments.

    L1049       too many segments

                The program had more than the maximum number of segments. Use
                the /SEGMENTS option, which has a default value of 128, to
                specify the maximum legal number of segments. The default is
    Number      LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
                specify the maximum legal number of segments. The default is
                128 in the /SEGMENTS option, which specifies the maximum legal
                number. Relink using the /SEGMENTS option with an appropriate
                number of segments.

    L1050       too many groups in one module

                LINK encountered over 21 group definitions (GRPDEF) in a
                single module. Reduce the number of group definitions or split
                the module. (Group definitions are explained in the Microsoft
                MS-DOS Programmer's Reference and in other reference books on
                DOS.)

    L1051       too many groups

                The program defined more than 20 groups, not counting DGROUP.
                Reduce the number of groups.

    L1052       too many libraries
    Number      LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
    L1052       too many libraries

                An attempt was made to link with more than 32 libraries.
                Combine libraries, or use modules that require fewer
                libraries.

    L1053       out of memory for symbol table

                There is no fixed limit to the size of the symbol table.
                However, it is limited by the amount of available memory.
                Combine modules or segments and recreate the object files.
                Eliminate as many public symbols as possible.

    L1054       requested segment limit too high

                LINK did not have enough memory to allocate tables describing
                the number of segments requested. (The default is 128 or the
                value specified with the /SEGMENTS option.) Try linking again
                using the /SEGMENTS option to select a smaller number of
    Number      LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
                using the /SEGMENTS option to select a smaller number of
                segments (for example, use 64 if the default was used
                previously), or free some memory by eliminating resident
                programs or shells.

    L1056       too many overlays

                The program defined more than 63 overlays.

    L1057       data record too large

                A LEDATA record (in an object module) contained more than 1024
                bytes of data. This is a translator error. (LEDATA is a DOS
                term, which is explained in the Microsoft MS-DOS Programmer's
                Reference and in other DOS reference books.) Note which
                translator (compiler or assembler) produced the incorrect
                object module and the circumstances. Please report this error
                to Microsoft Corporation using the Product Assistance Request
                form included with the documentation.
    Number      LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
                form included with the documentation.

    L1063       out of memory for CodeView information

                Too many linked object (".OBJ") files contain debugging
                information. Turn off the Produce Debug Code option in the
                Make EXE file dialog box.

    L1070       segment size exceeds 64K

                A single segment contained more than 64K of code or data. Try
                compiling and linking using the large model.

    L1071       segment _TEXT larger than 65520 bytes

                This error is likely to occur only in small-model C programs,
                but it can occur when any program with a segment named _TEXT
                is linked using the /DOSSEG option. Small-model C programs
                must reserve code addresses 0 and 1; this range is increased
    Number      LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
                must reserve code addresses 0 and 1; this range is increased
                to 16 for alignment purposes.

    L1072       common area longer than 65536 bytes

                The program had more than 64K of communal variables. This
                error occurs only with programs produced by compilers that
                support communal variables.

    L1080       cannot open list file

                The disk or the root directory was full. Delete or move files
                to make space.

    L1081       out of space for run file

                The disk on which the executable file was being written was
                full. Free more space on the disk and restart LINK.

    Number      LINK Error Message
    ──────────────────────────────────────────────────────────────────────────

    L1083       cannot open run file

                The disk or the root directory was full. Delete or move files
                to make space.

    L1084       cannot create temporary file

                The disk or root directory was full. Free more space in the
                directory and restart LINK.

    L1085       cannot open temporary file

                The disk or the root directory was full. Delete or move files
                to make space.

    L1086       scratch file missing

                An internal error has occurred. Note the circumstances of the
    Number      LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
                An internal error has occurred. Note the circumstances of the
                problem and contact Microsoft Corporation using the Product
                Assistance Request form included with the documentation.

    L1087       unexpected end-of-file on scratch file

                The disk with the temporary output file from LINK was removed.

    L1088       out of space for list file

                The disk where the listing file is being written is full. Free
                more space on the disk and restart LINK.

    L1089       filename : cannot open response file LINK could not find the
                specified response file. This usually indicates a typing
                error.

    L1090       cannot reopen list file

    Number      LINK Error Message
    ──────────────────────────────────────────────────────────────────────────

                The original disk was not replaced at the prompt. Restart
                LINK.

    L1091       unexpected end-of-file on library

                The disk containing the library probably was removed. Replace
                the disk containing the library and run LINK again.

    L1093       object not found

                One of the object files specified in the input to LINK was not
                found. Restart LINK and specify the object file.

    L1101       invalid object module

                One of the object modules was invalid. If the error persists
                after recompiling, please contact Microsoft Corporation using
                the Product Assistance Request form included with the
    Number      LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
                the Product Assistance Request form included with the
                documentation.

    L1102       unexpected end-of-file

                An invalid format for a library was encountered.

    L1103       attempt to access data outside segment bounds

                A data record in an object module specified data extending
                beyond the end of a segment. This is a translator error. Note
                which translator (compiler or assembler) produced the
                incorrect object module and the circumstances in which it was
                produced. Please report this error to Microsoft Corporation
                using the Product Assistance Request form included with the
                documentation.

    L1104       filename : not valid library

    Number      LINK Error Message
    ──────────────────────────────────────────────────────────────────────────

                The specified file was not a valid library file. This error
                causes LINK to abort.

    L1113       unresolved COMDEF; internal error

                Note the circumstances of the failure and contact Microsoft
                Corporation using the Product Assistance Request form included
                with the documentation.

    L1114       file not suitable for /EXEPACK; relink without

                For the linked program, the size of the packed load image plus
                packing overhead was larger than that of the unpacked load
                image. Relink without the /EXEPACK option.

    L1115       /QUICKLIB, overlays incompatible

                You specified overlays and used the /QUICKLIB option. These
    Number      LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
                You specified overlays and used the /QUICKLIB option. These
                cannot be used together.

    L2001       fixup(s) without data

                A FIXUPP record occurred without a data record immediately
                preceding it. This is probably a compiler error. (See the
                Microsoft MS-DOS Programmer's Reference for more information
                on FIXUPP.)

    L2002       fixup overflow near number in frame seg segname target seg
                segname target offset number The following conditions can
                cause this error:

                ■ A group is larger than 64K.

                ■ The program contains an intersegment short jump or
                intersegment short call.

    Number      LINK Error Message
    ──────────────────────────────────────────────────────────────────────────

                ■ The name of a data item in the program conflicts with the
                name of a library subroutine included in the link.

                ■ An EXTRN declaration in an assembly-language source file
                appeared inside the body of a segment, as in the following
                example:

                code   SEGMENT public 'CODE'
                        EXTRN   main:far
                start  PROC    far
                        call    main
                        ret
                start  ENDP
                code   ENDS

                The following construction is preferred:

                EXTRN   main:far
    Number      LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
                EXTRN   main:far
                code   SEGMENT public 'CODE'
                start  PROC    far
                        call    main
                        ret
                start  ENDP
                code   ENDS

                Revise the source file and recreate the object file. (See the
                Microsoft MS-DOS Programmer's Reference for information about
                frame and target segments.

    L2003       intersegment self-relative fixup at offset in segment segname

                You tried to make a near call or jump to a far entry in
                segment segname at offset. Change the call or jump to far or
                make the entry near.

    L2004       LOBYTE-type fixup overflow
    Number      LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
    L2004       LOBYTE-type fixup overflow

                A LOBYTE fixup generated an address overflow. (See the
                Microsoft MS-DOS Programmer's Reference for more information.)

    L2005       fixup type unsupported

                A fixup type occurred that is not supported by the Microsoft
                linker. This is probably a compiler error. Note the
                circumstances of the failure and contact Microsoft Corporation
                using the Product Assistance Request form included with the
                documentation.

    L2011       name : NEAR/HUGE conflict

                Conflicting NEAR and HUGE attributes were given for a communal
                variable. This error can occur only with programs produced by
                compilers that support communal variables.

    Number      LINK Error Message
    ──────────────────────────────────────────────────────────────────────────

    L2012       name : array-element size mismatch

                A far communal array was declared with two or more different
                array-element sizes (for instance, an array was declared once
                as an array of characters and once as an array of real
                numbers). This error occurs only with compilers that support
                far communal arrays.

    L2013       LIDATA record too large

                A LIDATA record contains more than 512 bytes. This error is
                usually caused by a compiler error.

    L2024       name : symbol already defined

                LINK has found a public-symbol redefinition. Remove extra
                definition(s).

    Number      LINK Error Message
    ──────────────────────────────────────────────────────────────────────────

    L2025       name : symbol defined more than once

                Remove the extra symbol definition from the object file.

    L2029       unresolved externals One or more symbols were declared to be
                external in one or more modules, but they were not publicly
                defined in any of the modules or libraries. A list of the
                unresolved external references appears after the message, as
                shown in the following example: unresolved externals
                EXIT in file(s):
                MAIN.OBJ (main.for)
                OPEN in file(s):
                MAIN.OBJ (main.for)

                The name that comes before in file(s) is the unresolved
                external symbol. On the next line is a list of object modules
                that have made references to this symbol. This message and the
                list are also written to the map file, if one exists.
    Number      LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
                list are also written to the map file, if one exists.

    L2041       stack plus data exceed 64K

                The total size of near data and the stack exceeds 64K. Reduce
                the stack size to control the error. LINK tests for this
                condition only if the /DOSSEG option is enabled. This option
                is automatically enabled by the library startup module.

    L2043       Quick library support module missing

                You did not specify, or LINK could not find, the object module
                or library required for creating a Quick library. In the case
                of QuickBASIC, the library provided is BQLB45.LIB.

    L2044       name : symbol multiply defined, use /NOE

                LINK has found a possible public-symbol redefinition. This
                error is often caused by redefining a symbol defined in a
    Number      LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
                error is often caused by redefining a symbol defined in a
                library. Relink using the /NOEXTDICTIONARY option. This error
                in combination with error L2025 for the same symbol indicates
                a real redefinition error.

    L4011       PACKCODE value exceeding 65500 unreliable

                Packcode segment sizes that exceed 65,500 bytes may be
                unreliable on the Intel(R) 80286 processor.

    L4012       load-high disables EXEPACK

                The /HIGH and /EXEPACK options cannot be used at the same
                time.

    L4015       /CODEVIEW disables /DSALLOCATE

                The /CODEVIEW and /DSALLOCATE options cannot be used at the
                same time.
    Number      LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
                same time.

    L4016       /CODEVIEW disables /EXEPACK

                The /CODEVIEW and /EXEPACK options cannot be used at the same
                time.

    L4020       name : code-segment size exceeds 65500

                Code segments of 65,501-65,536 bytes in length may be
                unreliable on the Intel 80286 processor.

    L4021       no stack segment

                The program did not contain a stack segment defined with STACK
                combine type. This message should not appear for modules
                compiled with Microsoft QuickBASIC, but it could appear for an
                assembly-language module. Normally, every program should have
                a stack segment with the combine type specified as STACK. You
    Number      LINK Error Message
    ──────────────────────────────────────────────────────────────────────────
                a stack segment with the combine type specified as STACK. You
                can ignore this message if you have a specific reason for not
                defining a stack or for defining one without the STACK combine
                type. Linking with versions of LINK earlier than Version 2.40
                might cause this message, since these linkers search libraries
                only once.

    L4031       name : segment declared in more than one group

                A segment was declared to be a member of two different groups.
                Correct the source file and recreate the object files.

    L4034       more than 239 overlay segments; extra put in root

                The program designates more than 239 segments to go in
                overlays. When this error occurs, segments beginning with
                number 234 are placed in the root, the permanently resident
                portion.

    Number      LINK Error Message
    ──────────────────────────────────────────────────────────────────────────

    L4045       name of output file is name

                The prompt for the run-file field gave an inaccurate default
                because the /QUICKLIB option was not used early enough. The
                output will be a Quick library with the name given in the
                error message.

    L4050       too many public symbols for sorting

                The number of public symbols exceeds the space available for
                sorting the symbols as requested by the /MAP option. The
                symbols are left unsorted.

    L4051       filename : cannot find library

                LINK could not find the specified file. Enter a new file name,
                a new path specification, or both.

    Number      LINK Error Message
    ──────────────────────────────────────────────────────────────────────────

    L4053       VM.TMP : illegal file name; ignored VM.TMP appeared as an
                object-file name. Rename the file and rerun LINK.

    L4054       filename : cannot find file

                LINK could not find the specified file. Enter a new file name,
                a new path specification, or both.

    ──────────────────────────────────────────────────────────────────────────



B.4  LIB Error Messages

    Error messages generated by the Microsoft Library Manager, LIB, have one
    of the following formats: {filename | LIB} : fatal error U1xxx:
    messagetext {filename | LIB} : error U2xxx: messagetext {filename | LIB} :
    warning U4xxx: messagetext

    The message begins with the input-file name (filename), if one exists, or
    with the name of the utility. If possible, LIB prints a warning and
    continues operation. In some cases errors are fatal, and LIB terminates
    processing.

    LIB may display the following error messages:


    Number      LIB Error Message<
    ──────────────────────────────────────────────────────────────────────────
    U1150       page size too small

                The page size of an input library was too small, which
                indicates an invalid input .LIB file.

    U1151       syntax error : illegal file specification

                A command operator such as a minus sign (-) was given without
                a following module name.

    U1152       syntax error : option name missing

                A forward slash (/) was given without an option after it.

    U1153       syntax error : option value missing

                The /PAGESIZE option was given without a value following it.

    U1154       option unknown

                An unknown option was given. Currently, LIB recognizes only
                the /PAGESIZE option.

    U1155       syntax error : illegal input

                The given command did not follow correct LIB syntax as
                specified in Appendix G, "Compiling and Linking from DOS."

    U1156       syntax error

                The given command did not follow correct LIB syntax as
                specified in Appendix G, "Compiling and Linking from DOS."

    U1157       comma or new line missing

                A comma or carriage return was expected in the command line
                but did not appear. This may indicate an inappropriately
                placed comma, as in the line that follows:
                LIB math.lib,-mod1+mod2;

                The line should have been entered as follows:
                LIB math.lib -mod1+mod2;

    U1158       terminator missing

                Either the response to the "Output library" prompt or the last
                line of the response file used to start LIB did not end with a
                carriage return.

    U1161       cannot rename old library

                LIB could not rename the old library to have a .BAK extension
                because the .BAK version already existed with read-only
                protection. Change the protection on the old .BAK version.

    U1162       cannot reopen library

                The old library could not be reopened after it was renamed to
                have a .BAK extension.

    U1163       error writing to cross-reference file

                The disk or root directory was full. Delete or move files to
                make space.

    U1170       too many symbols

                More than 4609 symbols appeared in the library file.

    U1171       insufficient memory

                LIB did not have enough memory to run. Remove any shells or
                resident programs and try again, or add more memory.

    U1172       no more virtual memory

                Note the circumstances of the failure and notify Microsoft
                Corporation using the Product Assistance Request form included
                with the documentation.

    U1173       internal failure

                Note the circumstances of the failure and notify Microsoft
                Corporation using the Product Assistance Request form included
                with the documentation.

    U1174       mark: not allocated

                Note the circumstances of the failure and notify Microsoft
                Corporation using the Product Assistance Request form included
                with the documentation.

    U1175       free: not allocated

                Note the circumstances of the failure and notify Microsoft
                Corporation using the Product Assistance Request form included
                with the documentation.

    U1180       write to extract file failed

                The disk or root directory was full. Delete or move files to
                make space.

    U1181       write to library file failed

                The disk or root directory was full. Delete or move files to
                make space.

    U1182       filename : cannot create extract file

                The disk or root directory was full, or the specified extract
                file already existed with read-only protection. Make space on
                the disk or change the protection of the extract file.

    U1183       cannot open response file

                The response file was not found.

    U1184       unexpected end-of-file on command input

                An end-of-file character was received prematurely in response
                to a prompt.

    U1185       cannot create new library

                The disk or root directory was full, or the library file
                already existed with read-only protection. Make space on the
                disk or change the protection of the library file.

    U1186       error writing to new library

                The disk or root directory was full. Delete or move files to
                make space.

    U1187       cannot open VM.TMP

                The disk or root directory was full. Delete or move files to
                make space.

    U1188       cannot write to VM

                Note the circumstances of the failure and notify Microsoft
                Corporation using the Product Assistance Request form.

    U1189       cannot read from VM

                Note the circumstances of the failure and notify Microsoft
                Corporation using the Product Assistance Request form.

    U1190       interrupted by user

                The user pressed CTRL+C or CTRL+BREAK.

    U1200       name : invalid library header

                The input library file had an invalid format. It was either
                not a library file, or it had been corrupted.

    U1203       name : invalid object module near location

                The module specified by name was not a valid object module.

    U2152       filename : cannot create listing

                The directory or disk was full, or the cross-reference-listing
                file already existed with read-only protection. Either make
                space on the disk or change the protection of the
                cross-reference-listing file.

    U2155       modulename : module not in library; ignored

                The specified module was not found in the input library.

    U2157       filename : cannot access file

                LIB was unable to open the specified file.

    U2158       libraryname : invalid library header; file ignored

                The input library had an incorrect format.

    U2159       filename : invalid format hexnumber; file ignored

                The signature byte or word hexnumber of the given file was not
                one of the following recognized types: Microsoft library,
                Intel library, Microsoft object, or XENIX(R) archive.

    U4150       modulename : module redefinition ignored

                A module was specified to be added to a library but a module
                with the same name was already in the library. Or, a module
                with the same name was found more than once in the library.

    U4151       symbol : symbol redefined in module modulename, redefinition
                ignored

                The specified symbol was defined in more than one module.

    U4153       number : page size too small; ignored

                The value specified in the /PAGESIZE option was less than 16.

    U4155       modulename : module not in library

                A module to be replaced is not in the library. LIB adds the
                module to the library.

    U4156       libraryname : output-library specification ignored

                An output library was specified in addition to a new library
                name. For example, specifying
                LIB new.lib+one.obj,new.lst,new.lib

                where new.lib does not already exist causes this error.

    U4157       Insufficient memory, extended dictionary not created.

                LIB was unable to create the extended dictionary. The library
                is still valid, but LINK cannot take advantage of extended
                dictionaries to link faster.

    U4158       Internal error, extended dictionary not created.

                LIB was unable to create the extended dictionary. The library
                is still valid, but LINK cannot take advantage of extended
                dictionaries to link faster.




────────────────────────────────────────────────────────────────────────────
Index


Symbols

' (apostrophe)
    entering
+ (concatenation operator)

A

ABS function
ALIAS, use in DECLARE statement
Alphanumeric line labelsLine labels
Angle measurement
    degrees to radians, converting from
    radians to degrees, converting from
Animation
Apostrophe (')
    entering
Arctangent, ATN function
Argument passing
Arithmetic operators
Arithmetic overflow
Arrays
    dimensioning
    dynamic
    ERASE statement
    REDIM statement
    elements
    INT86OLD statements
    LBOUND function
    location in memory
    of records
    static, ERASE statement
    subscripts, specifying
    changing lower bound for
    described
    maximum value for
    number of
    UBOUND function
    variables
AS clause
ASC function
ASCII character codes
    special character
    string expression
    (table)
Assembly language subroutines
    calling
    name, PUBLIC symbol
    string descriptor length
Assignment statements
ATN function
AT&T displays
Automatic variables

B

Background music
.BAS files
BASIC
    error codes
    run-time errors
BASICA, differences from
    BLOAD statement
    BSAVE statement
    CALL ABSOLUTE statement
    CALL statement
    CLEAR statement
    COM statement
    DEF SEG statement
    DEF type statements
    DIM statement
    DRAW statement
    ERL function
    FIELD statement
    RESUME statement
    STRIG function
    SYSTEM statement
    TAN function
    VARPTR$ function
basica, Differences From
    Chain Statement
    For...Next Statement
BEEP statement
Binary mode
    functions
    FILEATTR
    LOC
    statements
    GET (File I/O)
    LOCK
    OPEN
    PUT (File I/O)
    SEEK
BLOAD statement
Block IF...THEN...ELSE statement
Bold text, indicating keywords
Boolean operations
BSAVE statement
Built-in functions
BYVAL, use in DECLARE statement

C

CALL ABSOLUTE statement
CALL INT86OLD statement
CALL INT86XOLD statement
CALL INTERRUPT statement
CALL INTERRUPTX statement
CALL statement (BASIC procedures)
CALL statement (non-BASIC procedures)
    described
    location of arguments
Calling conventions
CALLS statement
    described
    location of arguments
Cardioid
Carriage return
CASE clause
Case, line labels
CDBL function
CDECL, use in DECLARE statement
CGA adapter
CHAIN statement
Chaining programs, statements for
    CHAIN
    COMMON
    RUN
Chainingprograms, statements for
    COMMON
Characters recognized by BASIC
CHDIR statement
CHR$ function
CINT function
CIRCLE statement
CLEAR statement
CLNG function
CLOSE statement
CLS statement
/CMD option
Color Graphics AdapterCGA adapter
COLOR statement
COM devices
COM statements
COMMAND$ function
COMMAND.COM
Commandline, passing to BASIC program
Comments
    introducing
    REM statement
COMMON statement
    blank
    chaining programs
    declaring variables
    named
    order of variables
    SHARED attribute
Compile-time error messages
Concatenation operator(+)
CONST statement
Constants
    global
    local
    scope rules
    symbolic
Control-flow statements
    CALL
    CALL ABSOLUTE
    CALLS
    CHAIN
    DEF FN
    DO...LOOP
    FOR...NEXT
    FUNCTION
    GOSUB...RETURN
    GOTO
    IF...THEN...ELSE
    ON GOSUB
    ON GOTO
    RETURN
    SELECT CASE
    WHILE...WEND
COS function
Cosine, COS function
CSNG function
CSRLIN function
CVD function
CVDMBF function
CVI function
CVL function
CVS function
CVSMBF function

D

DATA statement
Data types
    double-precision floating-point numeric
    fixed-length string
    four-byte integer numeric
    integer numeric
    long-integer numeric
    single-precision floating-point numeric
    specifying
    two-byte integer numeric
    TYPE statement
    variable-length string
Date and time
    functions
    DATE$
    TIME$
    statements
    DATE$
    TIME$
DATE$ function
DATE$ statement
Debugging statements
Declarations
    CONST statement
    DECLARE statement (BASIC procedures)
    DECLARE statement (non-BASIC procedures)
    DEF type statements
    DIM statement
    fixed-length strings
    simple variables
    variable types
DECLARE statements
    described
    location of arguments
DEF FN functions
    BASIC, used in
    exit from, alternative
    variable scope
DEF FN statement
DEF SEG statement
DEF type statements
Default data segments
DEFDBL statement
DEFINT statement
DEFLNG statement
DEFSNG statement
DEFSTR statement
Device errors
Devices, handling
    functions
    IOCTL$
    LPOS
    PEN
    statements
    IOCTL
    OPEN COM
    OUT
    WAIT
Device-status information
DGROUP, defined
DIM statement
    description
    SHARED attribute
    variable types
Directory statements
    CHDIR
    FILES
    MKDIR
    NAME
    RMDIR
Display memory, PCOPY statement
Division by zero
DO UNTIL statement
DO WHILE statement
Document conventions
DO...LOOP statement
    exit from, alternative
    flow control
DOS
    environment variables
    interrupts
DOS-level commands
Double precision
    numbers
    converting to
    description
    PRINT, displayed by
    variables
DRAW statement
    description
DRAWstatement
    VARPTR$ function, using
¢DYNAMIC arrays
    described
    location in memory
Dynamic arrays
    ERASE statement
    REDIM statement

E

EGA adapter
    COLOR statement
    PALETTE statement
    SCREEN statement
EGAadapter
    COLOR statement
END CASE clause
END DEF statement
END FUNCTION statement
END IF statement
END SELECT statement
END statement
END SUB statement
END TYPE statement
Enhanced Graphics AdapterEGA adapter
ENVIRON$ function
ENVIRON statement
Environment variables
Environment-string table
EOF function
ERASE statement
ERDEV function
ERDEV$ function
ERL function
    described
    line labels with
ERR code
ERR function
Error codes
Error handling
    error line number
    statements
    ERDEV
    ERR, ERL
    ERROR
    ON ERROR
    RESUME
Error messages
    compile-time
    described
    invocation
    LIB
    LINK
    run-time
ERROR statement
Error trapping
    ERROR statement
    line 0, using
Event-trapping statements
    COM
    KEY(n)
    ON event
    ON UEVENT
    PEN ON, OFF, and STOP
    PLAY ON, OFF, and STOP
    TIMER ON, OFF, and STOP
    UEVENT
.EXE files
EXIT DEF statement
EXIT DO statement
EXIT FOR statement
EXIT FUNCTION statement
EXIT statement
    description
    multiline functions, use in
    subprograms, use in
EXIT SUB statement
EXP function
Expressions
    conversion of operands
    definition

F

Far addresses
FIELD statement
File access
    LOCK statement
    UNLOCK statement
File conversion
File handling
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
    UNLOCK
File names, described
FILEATTR function
Files
    attributes
    binary mode, statements and functions
    FILEATTR
    GET
    LOC
    LOCK
    OPEN
    PUT
    SEEK function
    SEEK statement
    random access, statements and functions
    EOF
    FIELD
    GETIO
    KILL
    LOC
    LOCK
    LSET
    MKI$, MKS$, MKD$, MKL$
    OPEN
    PUT
    RSET
    SEEK function
    SEEK statement
    sequential, statements and functions
    EOF
    INPUT #
    KILL
    LINE INPUT #
    LOC
    LOF
    OPEN
    PRINT #
    WRITE #
FILES statement
FIX function
Fixed-point constants
Floating point
    double precision
    constants
    range
    numbers
    single precision, range
Formatting output
FOR...NEXT statements
    description
    exit from, alternative
FRE function
FREEFILE function
FUNCTION procedures
    DECLARE statements
    exit from, alternative
    module organization
    STATIC keyword
FUNCTION statements
Functional operators
Functions
    built-in
    intrinsic
    user-defined
    variables, declaring as local

G

GET statements
    FIELD statement
    File I/O
    Graphics
Global constants
Global variables
GOSUB statement
GOTO statement
    description
    line labels, using
    subroutines, use with
Graphics
    functions
    PMAP
    POINT
    macro language
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
    PALETTE USING
    PRESET
    PSET
    PUT
    VIEW
    WINDOW

H

Hercules adapters
HEX$ function
Hexadecimal numbers
Hierarchy, of operators

I

IEEE-format numbers
IF...THEN...ELSE statements
    description
    GOTO statement, when required
    line labels
INKEY$ function
INP function
INPUT$ function
Input functions
    COMMAND$
    INP
    INPUT$
INPUT # statement
INPUT statement
    description
    FIELD statement
    line editor commands
Input statements
    DATA
    INPUT
    INPUT #
    LINE INPUT
    LINE INPUT #
    READ
    RESTORE
    WAIT
INSTR function
INT function
INT86, INT86X replacements
    CALL INT86OLD statements
    CALL INTERRUPT statements
Integers
    constants
    decimal
    hexadecimal
    octal
    converting to
    division
    FIX function
Intrinsic functions
Invocation error messages
I/O ports
IOCTL$ function
IOCTL statement
Italic text, showing placeholders

J

Joysticks

K

KEY OFF statement
Keyboard scan codes
KEY(n) statements
KILL statement

L

LBOUND function
LCASE$ function
LEFT$ function
LEN function
LET statement
LIB error messages
Line 0, effect on error trapping
Line feed
LINE INPUT # statement
LINE INPUT statement
Line labels
    alphanumeric
    case, significance of
    GOTO statement, use with
    RESUME statement
    use of
Line numbers
    example of
    restrictions
    RESUME statement
    use of
Line printer
LINE statement
Line styling
Line-editor commands
LINK error messages
LOC function
Local constants
Local variables
LOCATE statement
LOCK statement
LOF function
LOG function
Logical operators
    description
    type conversion
Long integers
    constants
    converting to
Loops
LPOS function
LPRINT statement
    description
    SPC function
LPRINT USING statement
LSET statement
LTRIM$ function

M

Main module
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
MCGA adapter
    COLOR statement
    PALETTE statement
    SCREEN statement
MDPA adapter, PALETTE statement
Memory management
    functions
    FRE
    SETMEM
    statements
    CLEAR
    DEF SEG
    ERASE
    PCOPY
Microsoft Binary format numbers
MID$ function
MID$ statement
Mixed-language programming
    ALIAS, use of
    BYVAL, use of
    CALL, CALLS statement (non-BASIC)
    CDECL, use of
    DECLARE statement (non-BASIC)
    SADD function
    SEG, use of
    variable storage allocation
    VARPTR function
MKD$ function
MKDIR statement
MKI$ function
MKL$ function
MKS$ function
MKSMBF$ function
MOD, module arithmetic operator
Module-level code
Modules
Modulo arithmetic
Modulus operator
MulticolorGraphics Array adapterMCGA
Multiline functions, run-time features, nesting
Music
    background
    macro language

N

NAME statement
Near addresses
NEXT statement
Notational conventions
Numeric constants
Numeric conversions
    CVD function
    CVI function
    CVL function
    CVS function
    double precision
    integer
    single precision
Numeric functions
    CDBL
    CINT
    CLNG
    CSNG
    CVD
    CVI
    CVL
    CVS
    FIX
    INT
    RND
    SGN

O

OCT$ function
Octal conversion
Olivetti
    displays
    OS/2 warning
ON COM statement
ON ERROR statement
    description
    line 0, effect of
    line labels
ON event statements
ON KEY statement
ON PEN statement
ON PLAY statement
ON STRIG statement
ON TIMER statement
ON UEVENT statement
ON...GOSUB statement
ON...GOTO statement
OPEN COM statement
OPEN statement
Operators
    arithmetic
    concatenation
    definition
    functional
    logical
    precedence
    relational
    string
OPTION BASE statement
OUT statement
Output
    functions
    LPOS
    POS
    TAB
    line width
    statements
    BEEP
    CLS
    LPRINT
    OUT
    PRINT
    PRINT #
    PRINT # USING
    PRINT USING
    PUT
    WRITE
    WRITE #
Overflow

P

PAINT statement
PALETTE statement
PALETTE USING statement
Passing arguments
PCOPY statement
PEEK function
PEN function
PEN OFF statement
PEN ON statement
PEN STOP statement
Physical coordinates
    mapping to logical coordinates
    view
Physicalviewport
PLAY function
PLAY OFF statement
PLAY ON statement
PLAY statement
    description
    VARPTR$ function,using
PLAY STOP statement
PMAP function
POINT function
POKE statement
POS function
Precedence of operators
PRESET statement
PRINT # statement
PRINT statement
    description
    SPC function
PRINT # USING statement
PRINT USING statement
Procedures
Program suspension
Program termination
PSET statement
PUBLIC symbol
PUT statements
    FIELD statement
    File I/O
    Graphics

R

Random numbers
Random-access files, statements and functions
    EOF
    FIELD
    GET
    KILL
    LOC
    LOCK
    MKD$, MKI$, MKL$, MKS$
    OPEN
    PUT
    SEEK function
    SEEK statement
    storing data in buffer
RANDOMIZE statement
READ statement
Real numbers
Record elements, reference
Record variables
Records
    arrays of
    variable length
Recursion
REDIM statement
    description
    SHARED attribute
    variables, declaring
Referencing record elements
Register values, INT86OLD, INT86XOLD
Relational operators
REM statement
RESET statement
RESTORE statement
RESUME NEXT statement
RESUME statement
    alphanumeric line labels
    BASICA, differences from
    description
    RESUME 0, effect of
RETURN statement
    description
    EXIT statement, not equivalent to
    GOSUB statement
RIGHT$ function
RMDIR statement
RND function
RSET statement
RTRIM$ function
RUN statement
Run-time error messages

S

SADD function
    described
    movement of variables
Scan codes, keyboard
Scope
SCREEN 10, using
Screen functions
    CSRLIN
    POS
    SCREEN
Screen statements
    CLS
    COLOR
    LOCATE
    PCOPY
    SCREEN
    VIEW PRINT
Screenstatements
    WIDTH
SEEK
    function
    statement
SEG, use in DECLARE statement
SELECT CASE statement
Sequential files, statements and functions
    EOF
    INPUT #
    KILL
    LINE INPUT #
    LOC
    LOF
    OPEN
    PRINT #
    WRITE #
SETMEM function
    described
    movement of variables
SetUEvent routine
SGN function
SHARED statement
    described
    variables
    declaring
    local
    sharing
Shared variables
    among modules
    within a module
Shell escape
SHELL statement
Simple variables
    declaring
    location in memory
SIN function
Sine, SIN function
Single-precision numbers
    converting to
    PRINT, displayed by
    types of constants
SLEEP statement
SOUND statement
Source files
SPACE$ function
SPC function
Special characters
Spiral of Archimedes
SQR function
Statements
¢STATIC arrays
    described
    location in memory
Static arrays, ERASE statement
STATIC keyword
STATIC statement
    description
    variables
    declaring
    local
    STATIC, creating
STICK function
STOP statement
Storage requirements, variables
STR$ function
STRIG function
STRIG OFF statement
STRIG ON statement
STRIG(n) statements
String
    concatenation
    constants
    descriptor length
    functions
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
    operators
    processing
    statements
    LSET
    MID$
    RSET
    variables
STRING$ function
String-space compaction
SUB procedures
    DECLARE statements
    exit from, alternative
    STATIC keyword
    using
SUB statement
Subprograms
    CALL statement
    CALLS statement
    CHAIN statement
    SUB statement
    user library, example
    variables
Subroutines
Subscripts, specifying
    lower bound for
    maximum value for
    number of
SWAP statement
Symbolic constants
    CONST
    use of
Syntax notation
    choices
    optional items
    placeholders
System calls
SYSTEM statement

T

TAB function
TAN function
Tangent, TAN function
Tiling
TIME$ function
TIME$ statement
TIMER function
TIMER OFF statement
TIMER ON statement
TIMER STOP statement
Timing function
Trigonometric functions
    ATN
    COS
    SIN
    TAN
TROFF statement
TRON statement
Type conversion
    logical operators
    rules for
TYPE statements
Typeface
    key names
    keywords
    placeholders
    program
Type-mismatch error message
Typographic conventions

U

UBOUND function
UCASE$ function
UEVENT statement
UNLOCK statement
User-defined data types
User-defined events
User-defined functions

V

VAL function
Variable-length records
Variable-length strings, location in memory
Variables
    array
    automatic
    data type
    definition
    global
    function definitions
    subprograms
    using
    local
    function definitions
    subprograms
    using
    names
    length
    rules
    record
    scope
    shared variables
    STATIC variables
    storage allocation
    storage requirements
    string
    type-declaration suffixes
VARPTR function
    described
    movement of variables
VARPTR$ function
    described
    movement of variables
VARSEG function
    described
    movement of variables
VGA adapter
    COLOR statement
    PALETTE statement
    SCREEN statement
VGAadapter
    COLOR statement
Video GraphicsArray adapterVGA adapter
Video memory
View coordinates
    mapping to physical coordinates
    WINDOW statement
VIEW PRINT statement
VIEW statement

W

WAIT statement
WEND statement
WHILE statement
WIDTH statement
WINDOW statement
WRITE # statement
WRITE statement
```

{% endraw %}
