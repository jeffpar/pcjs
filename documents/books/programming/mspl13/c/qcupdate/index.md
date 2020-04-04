---
layout: page
title: "QuickC 2.5 Update"
permalink: /documents/books/programming/mspl13/c/qcupdate/
redirect_from: /pubs/pc/reference/microsoft/mspl13/c/qcupdate/
---

The following document is from the [Microsoft Programmer's Library 1.3](../../) CD-ROM.

{% raw %}

```none
Microsoft  QuickC  Compiler - UPDATE








────────────────────────────────────────────────────────────────────────────
                    Microsoft (R) QuickC (R) Compiler - UPDATE

                                VERSION 2.5
────────────────────────────────────────────────────────────────────────────


                            MICROSOFT CORPORATION








Information in this document is subject to change without notice and does
not represent a commitment on the part of Microsoft Corporation. The
software described in this document is furnished under a license agreement
or nondisclosure agreement. The software may be used or copied only in
accordance with the terms of the agreement. It is against the law to copy
the software on any medium except as specifically allowed in the license or
nondisclosure agreement. No part of this manual may be reproduced or trans-
mitted in any form or by any means, electronic or mechanical, including
photocopying and recording, for any purpose without the express written
permission of Microsoft.
(C) Copyright Microsoft Corporation, 1990. All rights reserved.


Printed and bound in the United States of America.


Microsoft, MS, MS-DOS, QuickC, and CodeView are registered
trademarks of
Microsoft Corporation.



Document No. SY10426-0290

                            OEM D703-2Z

10
    9
    8
    7
    6
    5
    4
    3
    2
    1








Table of Contents
────────────────────────────────────────────────────────────────────────────



Introduction
        Enhancements for QuickC 2.5
        About This Book
        Key to Document Conventions

Chapter 1  User Interface Changes

        1.1   File Menu Changes
        1.2   View Menu Changes
        1.3   Search Menu Changes
        1.4   Make Menu Changes
        1.5   Debug Menu: New Quickwatch Command
        1.6   Options Menu Changes
            1.6.1    Compiler Flags Dialog-Box Changes
            1.6.2    Linker Flags Dialog-Box Changes
            1.6.3    Display Dialog-Box Changes
            1.6.4    New Color Command
        1.7   Help Menu Changes

Chapter 2  Language Differences

        2.1   ANSI Compatibility
            2.1.1    ANSI-Mandated New Features
            2.1.2    Integer Promotion Rules
            2.1.3    Defining NULL as a Pointer
            2.1.4    Shift Operators
            2.1.5    Pointers to Type Definitions
            2.1.6    Identifying Nonstandard Keywords
            2.1.7    Trigraphs
            2.1.8    ANSI Nonconformance
        2.2   New Language Keywords
            2.2.1    In-Line Assembler
            2.2.2    Based Pointers and Objects
            2.2.3    Long Double Types
            2.2.4    The _fastcall Function Attribute (/Gr Option)
        2.3   New Language Features
            2.3.1    Strings and Macros
            2.3.2    Tiny Memory Model (.COM Files)
            2.3.3    Custom Memory Models
            2.3.4    Omitting Names of Nested Structures and Unions
            2.3.5    Unsized Arrays as the Last Member of a Structure
            2.3.6    Improved Warnings
            2.3.7    Macros
        2.4   Changes and Deletions
            2.4.1    Deleted Features
            2.4.2    Conditional Compilation and Signed Values
            2.4.3    The const and volatile Qualifiers
            2.4.4    Memory Allocation
            2.4.5    Memory Used by Command-Line Arguments
            2.4.6    Format Specifiers in printf and scanf
            2.4.7    Functions that Return Float Values
            2.4.8    The char Variable Alignment

Chapter 3  Compiler, Linker, and Utility Changes

        3.1   Compiler Options
        3.2   Linker Options
        3.3   LIB Options
        3.4   NMAKE Options

Chapter 4  Library Changes

        4.1   Buffer-Manipulation Routines
        4.2   Data-Conversion Routines
        4.3   Directory-Control Routines
        4.4   File-Handling Routines
        4.5   Graphics Routines
        4.6   Stream Input and Output Routines
        4.7   Internationalization Routines
        4.8   Math Routines
        4.9   Memory-Allocation Routines
        4.10  Process- and Environment-Control Routines
        4.11  String-Manipulation Routines

Chapter 5  Error-Message Reference

        5.1   Compiler Errors
            5.1.1    Fatal-Error Messages
            5.1.2    Compilation-Error Messages
            5.1.3    Warning Messages
        5.2   Command-Line Error Messages
        5.3   Run-Time Error Message
        5.4   QLINK Error Messages
            5.4.1    Fatal-Error Messages
            5.4.2    Nonfatal-Error Messages
            5.4.3    Warning Messages
        5.5   NMAKE Error Messages
            5.5.1    Fatal-Error Messages
            5.5.2    Compilation-Error Message
            5.5.3    Warning Messages


Introduction
────────────────────────────────────────────────────────────────────────────

The Microsoft(R) QuickC(R) Compiler version 2.5 offers a variety of new
features that support the latest advances in C language technology. The main
enhancements in this version include language compatibility with Microsoft C
version 6.0, increased ANSI compatibility, and improvements to the user
interface.

────────────────────────────────────────────────────────────────────────────
NOTE

The term "DOS" refers to both the MS-DOS(R) and IBM Personal Computer DOS
operating systems. The name of a specific operating system is used when it
is necessary to note features that are unique to that system.
────────────────────────────────────────────────────────────────────────────


Enhancements for QuickC 2.5

Here's a quick summary of the enhancements for QuickC version 2.5. The
following chapters describe these features in more detail.


    ■   Language compatibility with Microsoft C version 6.0

    ■   Increased ANSI standard C compatibility

    ■   Support for the tiny memory model

    ■   Enhanced graphics library

    ■   New Quickwatch debugging feature

    ■   Customized color window support

────────────────────────────────────────────────────────────────────────────
NOTE

Due to the size of the expanded run-time libraries, QuickC 2.5 must be used
with a hard disk.
────────────────────────────────────────────────────────────────────────────




The QuickC Advisor has also been updated to provide information on all
QuickC language, user interface, and compiler features. Consult the Advisor
for detailed information on any of the features mentioned in this book.


About This Book

This book is divided into five chapters:


    ■   Chapter 1, "User Interface Changes," discusses the changes in menus,
        menu commands, dialog boxes, and error messages.

    ■   Chapter 2, "Language Differences," describes the differences between
        QuickC 2.5 and QuickC 2.0.

    ■   Chapter 3, "Compiler, Linker, and Utility Changes," lists the new
        utility and QCL compile and link options.

    ■   Chapter 4, "Library Changes," lists the new library routines and
        summarizes their use.

    ■   Chapter 5, "Error-Message Reference," lists the new QuickC error
        messages.



Key to Document Conventions

This book uses the following document conventions:

Example                           Description
────────────────────────────────────────────────────────────────────────────
COPY TEST.OBJ C:                  Uppercase letters represent DOS commands
                                    and file names.

printf                            Boldface letters indicate standard
                                    features of the C language: keywords,
                                    operators, and standard library
                                    functions.

expression                        Words in italics indicate placeholders
                                    for information you must supply, such as
                                    a file name. Italics are also
                                    occasionally used for emphasis in the
                                    text.

main()                            This typeface is used for example
{                                 programs, program fragments, and the
}                                 names of user-defined functions and
                                    variables. It also indicates user input
                                    and screen output.

CL options «files...»             A horizontal ellipsis following an item
                                    indicates that more items having the
                                    same form may follow.

while( )                          A vertical ellipsis tells you that part
{                                 of the example program has been
    .                              intentionally omitted.
    .
    .
}

SHIFT                             Small capital letters denote names of
                                    keys on the keyboard. A plus sign ( + )
                                    indicates a combination of keys. For
                                    example, SHIFT+F5 tells you to hold down
                                    the SHIFT key while pressing the F5 key.

"array pointer"                   The first time a new term is defined, it
                                    is enclosed in quotation marks. Since
                                    some knowledge of programming is assumed,
                                    common terms such as memory or branch
                                    are not defined.

American National Standards       The first time an acronym appears, it is
Institute (ANSI)                  spelled out.






Chapter 1  User Interface Changes
────────────────────────────────────────────────────────────────────────────

The changes in version 2.5 of the QuickC Compiler environment implement new
features, such as the Quickwatch command, as well as improvements to
existing features. This chapter describes the changes; they are grouped
according to the menu in which they appear.

Remember, you can use online help to get information about all environment
features, including those described in this section.


1.1  File Menu Changes

The following changes are found in the File menu:

Change                            Description
────────────────────────────────────────────────────────────────────────────
Read-only file warning            If you select a read-only file with the
                                    Open command in the File menu, a dialog
                                    box informs you the file is read-only.

Closing notepad files             In QuickC 2.5, closing the Notepad
                                    window saves and frees the file. In
                                    QuickC 2.0, when you load a file in the
                                    Notepad window and then close it, the
                                    file is not freed. The file therefore
                                    cannot be loaded into the Program
                                    window.


1.2  View Menu Changes

The following change is found in the View menu:

Change                            Description
────────────────────────────────────────────────────────────────────────────
Registers window                  The Registers window displayed with the
                                    Windows command in the View menu has
                                    been modified to display information
                                    about the math coprocessor chip and
                                    emulator. Additionally, pressing TAB
                                    moves the cursor forward between
                                    modifiable fields, while pressing
                                    SHIFT+TAB moves the cursor backward
                                    between modifiable fields. Pressing
                                    ENTER or double-clicking the Left mouse
                                    button allows you to modify a register.


1.3  Search Menu Changes

The following changes are found in the Search menu:

Change                            Description
────────────────────────────────────────────────────────────────────────────
New Go to command                 The Go to... command has been added to
                                    the Search menu. This command displays a
                                    dialog box into which you type a desired
                                    line number. Then QuickC moves the
                                    cursor to that line.

Selected text shortcut key        Since the backslash key ( \ ) is not
                                    available on standard European keyboards,
                                    the shortcut key for the Selected Text
                                    command has been changed from CTRL+\ to
                                    CTRL+F3. CTRL+\ is now the shortcut key
                                    for the Find command in the Search menu.
                                    The effect of CTRL+\ can be modified
                                    with the MKKEY utility.




1.4  Make Menu Changes

The following changes are found in the Make menu:

Change                            Description
────────────────────────────────────────────────────────────────────────────
Canceling the build process       With version 2.5, pressing ESC cancels a
                                    compile, but not a link. The dialog box
                                    tells you to press CTRL+BREAK to cancel
                                    both compiling and linking. Previously,
                                    when either the Build or the Rebuild All
                                    command was given, the dialog box said
                                    to press ESC to cancel compiling and
                                    linking.

.H files in the program list      QuickC 2.5 supports adding .H files to
                                    the program list with the Edit Program
                                    List command. QuickC treats all .C files
                                    as dependents of the .H files in the
                                    list. If an include file is modified,
                                    QuickC performs a full rebuild. If you
                                    have hand-edited a makefile to encode .H
                                    file dependencies, then QuickC does not
                                    display these include files as part of
                                    the program list in the Edit Program
                                    List dialog box. If QuickC rewrites the
                                    hand-edited makefile, these include-file
                                    dependencies are not modified.

Alphabetical file                 File names are now displayed
display in the                    alphabetically in the program list and
program list                      in the dialog box displayed by choosing
                                    the Source command in the View menu.
                                    Consequently, names of .LIB files are
                                    displayed at the end of the list,
                                    eliminating the need to scroll over
                                    names of files that cannot be opened
                                    with the Source command.


1.5  Debug Menu: New Quickwatch Command

The Quickwatch command is a new feature in QuickC 2.5. It gives you a faster
view of variables and expressions than does the Watch Value command. To use
Quickwatch


    1.  Move the cursor to the variable you want to watch, or highlight the
        expression you want to watch.

    2.  Choose the Quickwatch command from the Debug menu or press SHIFT+F9


QuickC displays a dialog box with the selected variable or expression along
with the current value. See Figure 1.1.

(This figure may be found in the printed book.)

Instead of placing the cursor on the variable or highlighting the expression
you want to watch, you can select Quickwatch, or press SHIFT+F9, and type an
expression in the text box of the dialog box.

The lower part of the Quickwatch dialog box contains the following buttons:


Zoom Modify Value Evaluate Cancel Add Watch Help

The Zoom button expands or contracts an array or structure. Zoom displays
the values of the array members or structure elements in the List box. To
show levels of expansion in the List box, nested elements are indented one
space. If the expression has already been expanded, the Zoom button
contracts the items. If a variable can be expanded, it has a "+" prefix. If
a variable can be contracted, it has a "-" prefix. If the expression cannot
be expanded or contracted and Zoom is selected, QuickC beeps.

The Evaluate button uses the current expression in the Expression text box
as the new base variable. If the expression can be expanded, the Zoom button
displays items in the List box.

To further expand nested items shown in the List box, select item names with
the mouse or cursor. The item names are copied to the Expression text box,
and the appropriate values are displayed in the Value text box and the List
box. Then you can use the Zoom button to expand or contract the nested
items.

The Add Watch button adds the current expression to the Watch window. If the
expression is already included in the Watch window, Add Watch has no effect.


The Modify Value button changes the value of the expression to the value
entered in the Value text box. When you select Modify Value, QuickC records
and displays the updated value in the List box.

The Cancel button closes the Quickwatch dialog box.

The Help button displays information about using the Quickwatch dialog box.



1.6  Options Menu Changes

The following changes are found in the Options menu:

Change                            Description
────────────────────────────────────────────────────────────────────────────
Run/Debug command-line length     In QuickC 2.5, the Command Line text box
limitation                        in the Run/Debug dialog box accepts up
                                    to 126 characters. A warning message is
                                    displayed if the length of text exceeds
                                    126 characters. QuickC 2.0 accepts up to
                                    256 characters. However, only the first
                                    126 characters are used.

Compiler flags, linker flags,     Numerous changes have been made to the
and display dialog box changes    compiler flags, linker flags, and
                                    display dialog boxes. They are described
                                    in the following sections.

New color command                 Enhanced options for setting colors in
                                    QuickC are described below.


1.6.1  Compiler Flags Dialog-Box Changes

The Compiler Flags dialog box, shown in Figure 1.2, contains the following
modifications:


    ■   The Compiler Flags dialog box, displayed by selecting the Compiler
        Flags button in the Make dialog box, has been modified to support the
        tiny memory model.

    ■   The Warning Level option has been changed from a set of option buttons
        to a text box, and this option now supports warning levels up to 4. If
        you enter an invalid warning level, QuickC displays a warning message.

    ■   In QuickC version 2.5, the Full CodeView check box replaces the Line
        Numbers Only option under Debug Flags in version 2.0. If Full CodeView
        is checked, QuickC generates complete information on the Microsoft
        CodeView(R) debugger. If the option is left unchecked, QuickC
        generates line number information.

    ■   Three Custom Flags text boxes have been added to the dialog box. They
        allow you to specify additional Global, Debug, and Release compiler
        directives.

        (This figure may be found in the printed book.)



1.6.2  Linker Flags Dialog-Box Changes

The Linker Flags dialog box, shown in Figure 1.3, contains the following
changes:


    ■   The Global Flags check boxes contain a new option called Generate .COM
        File. This option uses the tiny memory model to create .COM files.

    ■   A new Memory Needs text box allows you to specify the amount of memory
        to allocate for a program.

    ■   The new Custom Flags text box allows you to specify additional Global
        linker directives, as well as those for Debug and Release versions of
        the program. Enter linker directives in the appropriate text box.

        (This figure may be found in the printed book.)



1.6.3  Display Dialog-Box Changes

The Display dialog box, shown in Figure 1.4, has been changed as follows:


    ■   The Save Before Build check box controls whether files are saved
        before building.

    ■   The Keep Tabs option controls tab settings. If the option is off, tabs
        are converted to the appropriate number of spaces. Then when the file
        is saved, leading spaces are converted back to tabs. If the option is
        on, tabs are always treated as tabs and are never converted to spaces.
        The default for this option is off, which is equivalent to the QuickC
        2.0 method of handling tabs.

    ■   The Show 8087 check box controls whether the 8087 registers are
        displayed in the Registers window.

    ■   When you check the Save Before Build check box, QuickC saves any
        changes in open files before it builds the program.


(This figure may be found in the printed book.)

The Display dialog box no longer contains a color selection option. Expanded
color options are now available through the Color command in the Options
menu.


1.6.4  New Color Command

The Color command in the Options menu gives you greater control over the
appearance of QuickC. Items such as menus, borders, buttons, and text within
windows (such as source, errors, and registers) can all be given unique
colors (see Figure 1.5).

(This figure may be found in the printed book.)

Four predefined color sets are available. All four color sets can be
modified.

Color Set                         Description
────────────────────────────────────────────────────────────────────────────
1                                 Defines the color set for 16-color
                                    display monitors

2                                 Defines the color set for 8-color
                                    displays

3                                 Specifies the color set for monochrome
                                    displays

LCD                               Defines the color set for Liquid Crystal
                                    Displays

You can customize the color of a window item by selecting that item from the
Item list box, then changing the values in the Foreground and Background
list boxes. Changing an item's color modifies it only within the selected
color set.

The Redraw button redraws the screen with the new color values. Color
changes take place when the OK button is pressed.

The Default button restores the normal color values. The default colors for
each set are shown in the following list:

Color Set                         Default
────────────────────────────────────────────────────────────────────────────
1                                 QuickC 2.0 #1

2                                 QuickBasic 4.5 8-color

3                                 QuickC 2.0 #3

LCD                               QuickC 2.0 LCD


1.7  Help Menu Changes

The following changes are found in the Help menu:


    ■   In QuickC 2.5, if a low memory condition exists when you try to access
        online help, a dialog box appears and asks if you want to close the
        current program first, thus freeing enough memory to run help.

    ■   In QuickC 2.0, if there isn't enough memory to access online help,
        QuickC displays an  Out of Memory  error. At this point, the only way
        to get help information is to exit QuickC and start over again.







Chapter 2  Language Differences
────────────────────────────────────────────────────────────────────────────

This chapter describes the language differences between versions 2.5 and 2.0
of the QuickC Compiler. Some of the changes are required by the American
National Standards Institute (ANSI) standard for the C programming language.
Other changes improve or augment the existing capabilities of QuickC and
make it compatible with Microsoft C version 6.0.

The chapter is divided into four sections:


    ■   ANSI Compatibility

    ■   New Language Keywords

    ■   New Language Features

    ■   Changes and Deletions


Many of the changes described in this chapter do not affect code written for
previous versions of QuickC. In some cases, however, you may have to modify
existing code before compiling with version 2.5. Refer to section 2.4,
"Changes and Deletions," for revisions that may impact your program.


2.1  ANSI Compatibility

A number of changes have been made to the compiler to support the ANSI
stan-dard. These include additions that make QuickC programs more portable
and allow you to take advantage of more ANSI features.


2.1.1  ANSI-Mandated New Features

The following ANSI-mandated features are new to QuickC 2.5:


    ■   Both long and unsigned long values are allowed in switch expressions
        and case constants. Previous versions of QuickC allow only char and
        int values in this context.

    ■   QuickC supports unsigned long decimal constants. It is now possible to
        initialize unsigned long variables with values larger than MAX_LONG
        using decimal (rather than hexadecimal or octal) constants.

    ■   You can declare signed as well as unsigned bitfields.

    ■   Bitfields are permitted in unions.

    ■   Storage classes or types (or both) are now required on variable
        declarations. QuickC previously assumed that declarations without a
        specific type were integer declarations. An untyped declaration now
        generates a warning.

    ■   The LOCALE.H header file is new to version 2.5. It declares functions
        and structures for describing conventions, such as the currency
        symbol, that vary from one country to another.

    ■   The semantics for volatile have been implemented. Previously, volatile
        was only syntactically implemented.



2.1.2  Integer Promotion Rules

The ANSI standard changes the method of evaluation of some expressions that
mix signed and unsigned integers. Earlier versions of QuickC attempt to
preserve an expression's unsigned nature as much as possible. Version 2.5
attempts to preserve the expression's value.

In version 2.5, an unsigned char promotes to a signed int; an unsigned int
promotes to a signed long.

In version 2.0, an unsigned char promotes to an unsigned int; an unsigned
int promotes to an unsigned long.

For example:

    main()
    {
    long int li = -256L;
    test( li );
    }

    test( long li )
    {
    if( li < 0xffff )
        puts( "QuickC 2.5 does a signed comparison" );
        else puts( "QuickC 2.0 does an unsigned comparison" );
    }


2.1.3  Defining NULL as a Pointer

The constant NULL is now defined as  ((void *)0). Previous versions of
QuickC define NULL as 0x0000 in the small and medium models and as
0x00000000L in the compact and large models.


2.1.4  Shift Operators

Shift operators now give a result that is of the same type as the left
operand. For example, consider the code fragment

    short short_int;
    long long_int;
    short_int = 0x0001;
    long_int = short_int << 16L;

To adhere to the ANSI standard, QuickC 2.5 maintains the size of the left
operand. The variable  short_int  has 16 bits. Shifting left 16 times
produces a value of 0, which is then assigned to  long_int.

QuickC previously yielded a result that was the size of the "widest" (or
largest) of the two values. In the example above, the short value is
automatically cast to a long because 16L is long. The value assigned to
long_int  is 0x00010000L in QuickC 2.0.


2.1.5  Pointers to Type Definitions

The rules for handling pointers to type definitions have changed subtly. For
example, QuickC 2.5 interprets

    typedef int far f_int;
    f_int *fp_i;

as being equivalent to

    int far *fp_i;

which means  fp_i  is a near variable that is a far pointer to an integer.
The address of the integer contains 32 bits. The size of the address of
fp_i  is memory model dependent.

QuickC 2.0 interprets the declaration as

    int *far fp_i;

where  fp_i  is a far variable that is a near pointer to an integer. The
address of  fp_i  is 32 bits. The size of the integer's address is
indeterminate.

This change in handling pointers to type definitions affects type
definitions containing _near, _far, _based, and other modifiers. Although
these are Microsoft-specific keywords, their new behavior is consistent with
the ANSI standard's requirements for the const and volatile keywords.


2.1.6  Identifying Nonstandard Keywords

The following modifiers are specific to QuickC; they are not part of the
ANSI standard. To identify these implementation-defined keywords as
non-ANSI, an initial underscore has been added.

QuickC 2.5 Keyword                QuickC 2.0 Keyword
────────────────────────────────────────────────────────────────────────────
_far                              far

_huge                             huge

_near                             near

_cdecl                            cdecl

_fortran                          fortran

_interrupt                        interrupt

_pascal                           pascal

The compiler still accepts the obsolescent versions of these keywords,
unless you use the /Za (disable extensions) option.


2.1.7  Trigraphs

To maintain ANSI compatibility with and portability to other systems, QuickC
supports the trigraphs listed below. The compiler interprets each sequence
in the left column as equivalent to the character shown in the right column.


Trigraph                          Character
────────────────────────────────────────────────────────────────────────────
??=                               #

??(                               [

??/                               \

??)                               ]

??'                               ^

??<                               {

??!                               |

??>                               }

??-                               ~


2.1.8  ANSI Nonconformance

Areas in which QuickC version 2.5 does not follow the ANSI standard include
the following:


    ■   QuickC does not support multibyte characters, wide-character constants
        and string constants comprising wide characters, and the related
        library functions and types.

    ■   QuickC contains some extended keywords (such as _near and _far),
        non-ANSI macros and types in header files, and extended library
        function names (such as read and write) that exceed ANSI name-space
        maximums.



2.2  New Language Keywords

This section describes keywords that do not exist in previous versions of
QuickC. Details about the use of these keywords can be found in the online
help.


2.2.1  In-Line Assembler

A new pseudoinstruction, _emit, has been added for use with the in-line
assembler. This pseudoinstruction allows you to define a single immediate
byte at the current location in the current text segment.


2.2.2  Based Pointers and Objects

QuickC 2.5 supports the following new keywords and operators: _based,
_segment, _segname, and :>. They are used to declare and manipulate based
objects.

Based object support is included in QuickC 2.5 for the sake of compatibility
with Microsoft C version 6.0. Refer to Chapter 2, "Managing Memory," in
Microsoft C Advanced Programming Techniques for further details.


2.2.3  Long Double Types

Because the 80x87 family of math coprocessors supports an 80-bit
floating-point type, QuickC version 2.5 stores long double variables in the
80x87 10-byte (80-bit) form.

QuickC version 2.0 recognizes long double and double as different types,
with both types stored in memory as 64-bit quantities.

Certain library functions have been modified to handle the long double type.
The printf and scanf family of functions supports long double values; their
format has the l type prefix. The library contains new versions of the
transcendental functions as well as intrinsic forms that accept long double
arguments. The names of these functions have a trailing l (for example,
cosl).


2.2.4  The _fastcall Function Attribute (/Gr Option)

The new _fastcall function attribute enables QuickC to pass function
arguments in processor registers instead of on the stack. This ability
results in faster function calls when a QuickC program is built with
Microsoft C version 6.0.

You can define fastcall functions in two ways. Use the _fastcall function
attribute to declare an individual function as fastcall:

    int _fastcall FastFunc( void );

Additionally, the /Gr option enables the fastcall function-calling
convention for all functions that are not explicitly prototyped with the
_cdecl, _pascal, or _fortran attributes. Using /Gr on the command line
causes each function in the module to compile as _fastcall unless the
function is declared with a conflicting attribute, or the name of the
function is main.

None of the library functions have the fastcall attribute; their arguments
are passed on the stack, not in registers. If you compile with the /Gr
option, you must include the correct header file for each library function
or write a prototype for the function using the _cdecl attribute.

A fastcall function can receive up to three 16-bit arguments. Arguments are
passed in the AX, BX, and DX registers. Fastcall arguments are passed in the
registers shown below. If you pass one character argument, it is passed in
the AL register. If you pass two character arguments, the second argument is
passed in DL, and so on.

Argument Type                     Registers
────────────────────────────────────────────────────────────────────────────
Character                         AL, DL, BL

Short integer                     AX, DX, BX

Near pointer                      BX, AX, DX

Long integer                      DX:AX

────────────────────────────────────────────────────────────────────────────
WARNING

Future versions of QuickC may pass fastcall arguments in different
registers.
────────────────────────────────────────────────────────────────────────────

If all of the registers for a particular type have already been used, or if
an argument is not one of the types listed above, it is pushed on the stack
as usual. Given an argument list of types long, float, and short, QuickC
passes the long in DX:AX, pushes the float, and passes the short in BX.
Fastcall functions return any floating-point value on the floating-point
processor stack.

The treatment of character arguments is also dependent on prototypes. If
there is no prototype, the argument is promoted to short.

The _fastcall convention is not compatible with any of the following
attributes: _interrupt, _saveregs, _export, _cdecl, _fortran, or _pascal.
Consult online help for more information on these attributes.


2.3  New Language Features

A number of new language features have been implemented in version 2.5 to
maintain compatibility with Microsoft C version 6.0.


2.3.1  Strings and Macros

QuickC now allows longer string literals (up to 2K) and longer macro
expansions (up to 12K). In low memory conditions, the macro expansion space
could be limited to 6K.


2.3.2  Tiny Memory Model (.COM Files)

QuickC 2.5 supports the tiny memory model, which produces .COM files rather
than .EXE files. In the tiny memory model, all of your program code and data
must fit in a single 64K segment.

The /AT option selects the tiny model. This option causes the linker to use
the /NOE and /TINY options. Within the linker, /TINY turns on the
/FARCALLTRANSLATION option to help eliminate far-segment relocations. If you
invoke QLINK separately on your own .OBJ files, link with the CRTCOM library
and make it first in the .OBJ list. The /TINY option is incompatible with
the /INCREMENTAL option.


2.3.3  Custom Memory Models

For most programs, using one of the standard memory models is sufficient. In
special cases, however, you may need to create a customized memory model.
For example, you might want to create a huge-compact model that would allow
huge data items but only one code segment.

You can create a custom memory model with the /A compiler option. /A must be
followed by three letters representing the following memory-model
attributes:


    ■   Code pointer size

    ■   Data pointer size

    ■   Stack- and data-segment setup


Table 2.1 shows the options used for defining code pointers, data pointers,
and stack- and data-segment setup in custom memory models.

Table   2.1 Custom Memory Model Options

╓┌─────────────────────────────────┌───────┌─────────────────────────────────╖
Attribute                         Option  Meaning
────────────────────────────────────────────────────────────────────────────
Code Addresses                    s       Near (16-bit)

                                    l       Far (32-bit)

Data Pointers                     n       Near (6-bit)

                                    f       Far (32-bit)

                                    h       Huge (32-bit normalized)

Stack-and Data-Segment Setup      d       Assume SS==DS (default)

                                    u       Assume SS!=DS; DS is reloaded on
                                            function entry.
Attribute                         Option  Meaning
────────────────────────────────────────────────────────────────────────────
                                            function entry.

                                    w       Assume SS!=DS; DS is not
                                            reloaded on function entry.

────────────────────────────────────────────────────────────────────────────



You must specify all three options, but the letters can follow /A in any
order. To specify the huge-compact model mentioned earlier, for example, you
can use /Ashd, /Ahsd, or some other ordering of the following letters: s
(for near code addresses), h (for huge data pointers), and d (for the
default data- and stacksegment setup).

The easiest way to customize a memory model is to use a standard memory
model and modify the stack-setup option. A stack- and data-segment option
from Table 2.1 overrides the corresponding part of the standard memory-model
configuration; Table 2.2 shows the standard models' equivalents. Since /AS
is the equivalent of /Asnd, then /ASw is the equivalent of /Asnw.

Table   2.2 Standard Memory Model Equivalents

╓┌─────────────────────┌─────────────────────────────────────────────────────╖
Standard              Customized
Memory Model          Equivalent
────────────────────────────────────────────────────────────────────────────
/AT                   none

/AS                   /Asnd

/AM                   /Alnd

/AC                   /Asfd

/AL                   /Alfd

/AH                   /Alhd

────────────────────────────────────────────────────────────────────────────
Standard              Customized
Memory Model          Equivalent
────────────────────────────────────────────────────────────────────────────
────────────────────────────────────────────────────────────────────────────




2.3.4  Omitting Names of Nested Structures and Unions

If a structure or union is nested inside another structure or union, you can
declare the inner one without using a variable name. This rule allows you to
access inner members of such nested constructs using fewer variable names.
The following example demonstrates this technique using nested structures:

    #include.h

    void main( void )
    {
    struct ours
    {
    int mine, yours;
    };

    struct mystruct
    {
    float bobber;
    struct ours;
    char name[9];
    } sample;

    sample.yours = 100;
    printf( "sample.yours: %i\n", sample.yours );
    }

The example declares two structure types. The first structure type, named
ours, contains two int members. The second, named  mystruct, contains three
members, one of which is a structure of type  ours.

The second structure type declares its structure member using only the
structure tag  ours. It does not supply a variable name after the tag:

    struct ours;

Thus, subsequent parts of the program can access members of the nested
structure without specifying a name:

    sample.yours = 100;

In contrast, if the nested structure had been declared using a variable
name, as in

    struct ours var_name;

subsequent statements would have to use that name as well:

    sample.var_name.yours = 100;

As you can see, declaring the nested structure without a variable name saves
some typing. The same rule applies to unions nested inside structures.


2.3.5  Unsized Arrays as the Last Member of a Structure

QuickC now allows an unsized or zero-sized array as the last member of a
structure. The declaration of such a structure would look like this:

    struct var_length
    {
        <set of declarations>;
        <type> array[];
    };

Unsized arrays can appear only as the last member of a structure. Structures
containing unsized array declarations can be nested within other structures
as long as no further members are declared in any enclosing structures.
Arrays of such structures are not allowed.

When you apply the sizeof operator to a variable of this type, or to the
type itself, QuickC assumes the array has the size zero.


2.3.6  Improved Warnings

QuickC version 2.5 supports a new warning level (4), which provides even
more stringent error checking than the warning levels in version 2.0. You
can set this warning level from the command line by supplying the /W4
compiler option, or from the QuickC environment with the Compiler Flags
dialog box shown with the Make command on the Options menu.

At warning level 4, QuickC can generate the following new warnings:


    ■   Nonportable (non-ANSI) constructs

    ■   Undefined or implementation-defined constructs


Consult online help for more information about these warnings.


2.3.7  Macros

The number of macros definable with /D options in QuickC has increased from
20 to 30.


2.4  Changes and Deletions

This section describes QuickC 2.0 features that are changed or deleted in
QuickC 2.5. Note that these changes may affect existing programs.


2.4.1  Deleted Features

The data_seg pragma has been deleted.

The memory management routine sbrk has been deleted.


2.4.2  Conditional Compilation and Signed Values

Version 2.0 of QuickC treats conditional-compilation expressions as signed
long values. Version 2.5 evaluates these expressions using the same rules as
expressions in C. For example, the expression

    #if 0xFFFFFFFFL > 1UL
    .
    .
    .
    #endif

evaluates as true. It is evaluated as false in version 2.0, since the signed
value would be less than the unsigned value.


2.4.3  The const and volatile Qualifiers

The const and volatile qualifiers must be placed after the type they
qualify. The declaration

    int (const *p);

is now treated as a syntax error. Previous versions of QuickC accept this
construction.

The following declarations are legal:

    int const *p_ci;  /* pointer to constant int */
    int const (*p_ci); /* pointer to constant int */
    int *const cp_i;  /* constant pointer to int */
    int (*const cp_i); /* constant pointer to int */

Consult online help for more information about const and volatile.


2.4.4  Memory Allocation

The _fmalloc function attempts to allocate far memory. In version 2.5,
_fmalloc returns a null pointer if far memory isn't available, even if near
memory is available. In previous versions of QuickC, _fmalloc calls _nmalloc
if far memory is not available.


2.4.5  Memory Used by Command-Line Arguments

In QuickC 2.5, the command-line argument strings are allocated through
malloc, which means they are in far memory in the compact and large memory
models. Previous versions of QuickC place the command-line argument strings
and environment strings in the near heap.


2.4.6  Format Specifiers in printf and scanf

The printf format specifier modifiers N, F, h, and l have changed. These
specifiers are documented in online help.

The specifier %Np is a synonym for %hp, but the latter is preferred.
Likewise, %Fp is a synonym for %lp.

For scanf, the modifiers N and F refer to the distance to the object being
read in; that is, whether the pointer itself is allocated near or far. The
modifiers h and l refer to the size of the object (16-bit near pointer or
32-bit far pointer). In these examples,

    scanf("%Nlp", n_fp);
    scanf("%Fhp", f_np);

the first line reads an address that resides in near memory (N) but holds a
32-bit far pointer variable (lp). The second line reads a near pointer value
(hp) into a pointer variable that resides in far memory (F).


2.4.7  Functions that Return Float Values

In QuickC 2.5, a prototype or definition such as

    float funcname();

is interpreted as

    float funcname()

so the function returns a float value.

Whereas version 2.0 interprets it as

    double funcname()

returning a double value.


2.4.8  The char Variable Alignment

QuickC 2.5 does not align char variables on even addresses unless a variable
is local. Similarly, literal constant strings are not aligned as they are in
QuickC version 2.0






Chapter 3  Compiler, Linker, and Utility Changes
────────────────────────────────────────────────────────────────────────────

The QuickC Compiler version 2.5 supports a variety of new compiler, linker,
and utility options. Most of these options provide compatibility with
Microsoft C version 6.0. Since QuickC can be used as a prototyping
environment for programs that will ultimately be compiled with Microsoft C,
the compiler supports the development of programs that run under non-DOS
operating systems. Refer to the Microsoft C version 6.0 documentation for
additional information.

This chapter is divided into sections alphabetically listing compiler,
linker, and utility changes. For detailed information on the options,
consult the online help.


3.1  Compiler Options

The following compiler options are new to QuickC 2.5:

Option                            Instruction
────────────────────────────────────────────────────────────────────────────
/Axxx                             Use custom memory model. The xxx is a
                                    three-letter representation of the
                                    memory-model attributes: code pointer
                                    size, data pointer size, and stack and
                                    data segment setup. You must use all
                                    three letters (in any order) following
                                    /A. See Chapter 2, "Language
                                    Differences," for additional information.

/AT                               Use tiny memory model. This option
                                    creates a program with the .COM
                                    extension. The program has a single 64K
                                    segment for both code and data.

/G1                               Use 80186 instructions.

/Gd                               Use the _cdecl calling convention for
                                    all functions in the module. See Chapter
                                    2, "Language Differences," for more
                                    information.

/Ge                               Generate calls to the stack-checking
                                    routine.

/Gr                               Use the _fastcall calling convention for
                                    functions not explicitly given the
                                    _cdecl, _pascal, or _fortran attribute.
                                    See Chapter 2, "Language Differences,"
                                    for additional information.

/NDdata_segment_name              Name the data segment of a
                                    data_segment_name module. This option is
                                    commonly used to create and compile
                                    modules that contain only data.

/nologo                           Suppress the startup banner display.

/Vstring                          Embed string, which specifies a version
                                    number, in the object file.

/Wx                               Use warning level x, where x is from 0
                                    to 4.

                                    LevelEffect
────────────────────────────────────────────────────────────────────────────
                                    0           Turns off all warnings

                                    1           Reports only severe errors

                                    2           Reports intermediate level
                                                errors

                                    3           Warns about    been
                                                functions      prototyped
                                                that have not

                                    4           Reports        violations
                                                detailed
                                                warnings and
                                                ANSI

/WX                               Treat warnings as errors.


3.2  Linker Options

The following linker options are new to QuickC 2.5:

Option                            Instruction
────────────────────────────────────────────────────────────────────────────
/INC«REMENTAL»                    Prepare the program for subsequent
                                    incremental linking with ILINK.

/NOL«OGO»                         Suppress the sign-on banner when QLINK
                                    starts. This option is incompatible with
                                    the /E and /T
                                    options.

/NON«ULLSDOSSEG»                  Arrange segments in a specified order.
                                    /NON is equivalent to /DO except that
                                    /NON does not insert 16 null bytes at
                                    the beginning of the _TEXT segment.

/PACKC«ODE»                       Use the /PACKC option in place of the
                                    /PAC option.

/PACKD«ATA»                       Group neighboring data segments.

/PADC«ODE»:bytes                  Add filler bytes to the end of each code
                                    module.

/PADD«ATA»:bytes                  Add filler bytes to the end of each data
                                    module.

/T«INY»                           Use the /T (tiny) memory model in place
                                    of the /BI (binary) option.


3.3  LIB Options

The following LIB option is new to QuickC 2.5:

Option                            Instruction
────────────────────────────────────────────────────────────────────────────
/NOL«OGO»                         Suppress the sign-on banner.


3.4  NMAKE Options

The following NMAKE options are new to QuickC 2.5:

Option                            Instruction
────────────────────────────────────────────────────────────────────────────
/NOLOGO                           Suppress the NMAKE sign-on banner.

/HELP                             Display detailed help about NMAKE
                                    options.

/ ?                               Display abbreviated help about NMAKE
                                    options.






Chapter 4  Library Changes
────────────────────────────────────────────────────────────────────────────

The QuickC Compiler version 2.5 incorporates over 100 new library routines
to maintain compatibility with Microsoft C version 6.0. This chapter lists
and briefly summarizes the new library routines by category. For a complete
description of each routine, refer to online help.


4.1  Buffer-Manipulation Routines

Routines preceded by the _f prefix are model-independent versions. The _f
prefix indicates that these routines operate with far pointers.

────────────────────────────────────────────────────────────────────────────
NOTE

The buffer-manipulation routines assume that the direction flag is cleared.
If you are using other functions with the buffer-manipulation functions, you
must ensure that the other functions leave the direction flag alone or
restore it to its original condition.
────────────────────────────────────────────────────────────────────────────

Routine                           Effect
────────────────────────────────────────────────────────────────────────────
_fmemccpy                         Copies the characters from one buffer to
                                    another until a given character or a
                                    given number of characters has been
                                    copied

_fmemchr                          Returns a pointer to the first
                                    occurrence, within a specified number of
                                    characters, of a given character in the
                                    buffer

_fmemcmp                          Compares a specified number of
                                    characters from two buffers

_fmemcpy                          Copies a specified number of characters
                                    from one buffer to another

_fmemicmp                         Compares a specified number of
                                    characters from two buffers without
                                    regard to case sensitivity

_fmemmove                         Copies a specified number of characters
                                    from one buffer to another

_fmemset                          Initializes a specified number of bytes
                                    in the buffer with a given character

_outmem                           Prints text of a specified length from a
                                    memory buffer


4.2  Data-Conversion Routines

Routine                           Effect
────────────────────────────────────────────────────────────────────────────
_strtold                          Converts a string to a long double value


4.3  Directory-Control Routines

Routine                           Effect
────────────────────────────────────────────────────────────────────────────
_chdrive                          Changes the current drive

_getdcwd                          Gets the current working directory for
                                    the specified drive

_getdrive                         Gets the current disk drive


4.4  File-Handling Routines

Routine                           Effect
────────────────────────────────────────────────────────────────────────────
_fullpath                         Makes an absolute path name from a
                                    relative path name


4.5  Graphics Routines

Routine                           Effect
────────────────────────────────────────────────────────────────────────────
_getarcinfo                       Determines the endpoints, expressed in
                                    viewport coordinates, of the most
                                    recently drawn arc or pie

_getgtextvector                   Gets the current orientation for
                                    font-text output

_gettextwindow                    Gets the current text-window boundaries

_getwritemode                     Gets the current logical write mode for
                                    line drawing

_grstatus                         Returns the status of the most recent
                                    graphics function call

_polygon,                         Draws or scan-fills a polygon
_polygon_w,
_polygon_wxy

_scrolltextwindow                 Scrolls the current text window up or
                                    down

_setgtextvector                   Sets the current orientation for
                                    font-text output

_setwritemode                     Sets the logical write mode for line
                                    drawing


4.6  Stream Input and Output Routines

Routine                           Effect
────────────────────────────────────────────────────────────────────────────
_fsopen                           Opens a stream with file sharing


4.7  Internationalization Routines

Routine                           Effect
────────────────────────────────────────────────────────────────────────────
localecov                         Sets members of a structure to
                                    appropriate values for formatting
                                    numeric quantities

setlocale                         Selects the appropriate locale for the
                                    program

strcoll                           Compares strings using locale-specific
                                    information

strftime                          Formats a data and time string

strxfrm                           Transforms a string based on
                                    locale-specific
                                    information


4.8  Math Routines

Routines ending with l support an 80-bit data type for the corresponding
routines. These routines return a long double value.

Routine                           Effect
────────────────────────────────────────────────────────────────────────────
acosl                             Calculates the arccosine

asinl                             Calculates the arcsine

atanl                             Calculates the arctangent from tangent

atan2l                            Calculates the arctangent from x, y

cabsl                             Finds the absolute value of a complex
                                    number

ceill                             Finds the integer ceiling

cosl                              Calculates the cosine

coshl                             Calculates the hyperbolic cosine

expl                              Calculates the exponential function

fabsl                             Finds the absolute value

floorl                            Finds the largest integer less than or
                                    equal to the
                                    argument

fmodl                             Finds the floating-point remainder

frexpl                            Calculates an exponential value

hypotl                            Calculates the hypotenuse of a right
                                    triangle

ldexpl                            Converts the mantissa and exponent to a
                                    floating-point value

logl                              Calculates the natural logarithm

log10l                            Calculates the base-10 logarithm

modfl                             Finds the integral and fractional parts
                                    of the argument

powl                              Calculates a value raised to a power

sinl                              Calculates the sine

sinhl                             Calculates the hyperbolic sine

sqrtl                             Finds the square root

tanl                              Calculates the tangent

tanhl                             Calculates the hyperbolic tangent


4.9  Memory-Allocation Routines

Routines beginning with _b apply to based heaps. Routines with the _n prefix
apply to near heaps. Routines beginning with _f apply to far heaps.

Routine                           Effect
────────────────────────────────────────────────────────────────────────────
_bfreeseg                         Frees a based heap

_bheapseg                         Allocates a based heap

_bcalloc, _fcalloc, _ncalloc      Allocates storage for an array

_bexpand, _fexpand, _nexpand      Expands or shrinks a block of memory

_bfree                            Frees an allocated block

_heapadd, _bheapadd, _fheapadd,   Adds memory to a heap
_nheapadd

_bheapchk, _fheapchk, _nheapchk   Checks a heap for consistency

_heapmin,                         Releases unused memory in a heap
_bheapmin,
_fheapmin,
_nheapmin

_bheapset                         Fills free heap entries with a specified
                                    value

_bheapwalk                        Returns information about each entry in
                                    a heap

_bmalloc                          Allocates a block of memory

_bmsize                           Returns the size of an allocated block

_brealloc, _frealloc, _nrealloc   Reallocates a block to a new size


4.10  Process- and Environment-Control Routines

Routine                           Effect
────────────────────────────────────────────────────────────────────────────
_cexit                            Calls functions registered by atexit and
                                    onexit (if any), then performs complete
                                    exit-termination procedures (such as
                                    flushing buffers) and returns control to
                                    the calling program

_c_exit                           Performs quick exit-termination
                                    procedures and returns control to the
                                    calling program


4.11  String-Manipulation Routines

Routines preceded by the _f prefix are model-independent versions. The _f
prefix indicates that these routines operate with far pointers.

────────────────────────────────────────────────────────────────────────────
NOTE

The string-manipulation routines assume that the direction flag is cleared.
If you are using other functions with the string-manipulation routines, you
must ensure that the other routines leave the direction flag alone or
restore it to its original condition.


────────────────────────────────────────────────────────────────────────────

Routine                           Effect
────────────────────────────────────────────────────────────────────────────
_fstrcat                          Appends one string to another

_fstrchr                          Finds first occurrence of a given
                                    character in a string

_fstrcmp                          Compares two strings

_fstrcpy                          Copies one string to another

_fstrcspn                         Finds first occurrence in a string of a
                                    character from a given character set

_fstrdup, _nstrdup                Duplicates a string

_fstricmp                         Compares two strings without regard to
                                    case

_fstrlen                          Finds the length of a string

_fstrlwr                          Converts a string to lowercase

_fstrncat                         Appends the characters of a string

_fstrncmp                         Compares the characters of two strings

_fstrncpy                         Copies the characters of one string to
                                    another

_fstrnicmp                        Compares the characters of two strings
                                    without regard to case

_fstrnset                         Sets the characters of string to a given
                                    character

_fstrpbrk                         Finds first occurrence of a character
                                    from one string in another

_fstrrchr                         Finds last occurrence of given character
                                    in string

_fstrrev                          Reverses a string

_fstrset                          Sets all the characters of a string to a
                                    given character

_strspn, _fstrspn                 Finds first substring from given a
                                    character set in string

_fstrstr                          Finds first occurrence of a given string
                                    in another

_fstrtok                          Finds next token in a string

_fstrupr                          Converts a string to uppercase






Chapter 5  Error-Message Reference
────────────────────────────────────────────────────────────────────────────

This chapter lists error messages that are new with the QuickC Compiler
version 2.5. Error messages common to versions 2.0 and 2.5 are documented in
the  Microsoft QuickC Tool Kit.


5.1  Compiler Errors

The error messages produced by the C compiler fall into three categories:


    1.  Fatal-error messages

    2.  Compilation-error messages

    3.  Warning messages


New error messages for each category are listed below in numerical order,
with a brief explanation of each error.


5.1.1  Fatal-Error Messages

Fatal-error messages indicate a severe problem, one that prevents the
compiler from processing your program any further. These messages have the
following format:

filename(line) : fatal error C1xxx: messagetext

After the compiler displays a fatal-error message, it terminates without
producing an object file or checking for further errors.

Number                            Fatal-Error Message
────────────────────────────────────────────────────────────────────────────
C1005                             string too big for buffer

                                    A string in a compiler intermediate file
                                    overflowed a buffer.

C1006                             write error on compiler intermediate
                                    file

                                    The compiler was unable to create the
                                    intermediate files used in the
                                    compilation process.

C1011                             compiler limit : 'identifier' : macro
                                    definition too big

                                    The macro definition was longer than
                                    allowed.

                                    Split the definition into shorter
                                    definitions.

C1023                             cannot open source file 'filename'

                                    The given file either did not exist,
                                    could not be opened, or was not found.

                                    Make sure the environment settings are
                                    valid and that the correct path name for
                                    the file is specified.

                                    If this error appears without an error
                                    message, the compiler has run out of
                                    file handles. If in DOS, increase the
                                    number of file handles by changing the
                                    FILES setting CONFIG.SYS to allow a
                                    larger number of open files. FILES=20 is
                                    the recommended setting.

C1024                             cannot open include file 'filename'

                                    The specified file in an #include
                                    preprocessor directive could not be
                                    found.

                                    Make sure settings for the INCLUDE and
                                    TMP environment variables are valid and
                                    that the correct path name for the file
                                    is specified.

                                    If this error appears without an error
                                    message, the compiler has run out of
                                    file handles. If in DOS, increase the
                                    number of file handles by changing the
                                    FILES setting in CONFIG.SYS to allow a
                                    larger number of open files. FILES=20 is
                                    the recommended setting.

C1025                             compiler terminated by user

                                    The compiler was stopped by the user.

C1026                             parser stack overflow, please simplify
                                    your program

                                    The program cannot be processed because
                                    the space required to parse the program
                                    causes a stack overflow in the compiler.

                                    Simplify the program by decreasing the
                                    complexity of expressions. Decrease the
                                    level of nesting in for and switch
                                    statements by putting some of the more
                                    deeply nested statements in separate
                                    functions. Break up very long
                                    expressions involving ',' operators or
                                    function calls.

C1027                             DGROUP data allocation exceeds 64K

                                    More than 64K of variables were
                                    allocated to the default data segment.

                                    For compact-, large-, or huge-model
                                    programs, compile with the QCL command
                                    and use the /Gt option to move items
                                    into separate segments. In small- or
                                    medium-model programs, consider
                                    explicitly allocating some variables
                                    outside of DGROUP by using _based or
                                    _far.

C1033                             cannot open assembly language output
                                    file 'filename'

                                    There are three possible causes for this
                                    error:

                                    ■ The given name is not valid.

                                    ■ The file cannot be opened for lack of
                                    space.

                                    ■ A read-only file with the given name
                                    already exists.

C1036                             cannot open source listing file '
                                    filename'

                                    There are three possible causes for this
                                    error:

                                    ■ The given name is not valid.

                                    ■ The file cannot be opened for lack of
                                    space.

                                    ■ A read-only file with the given name
                                    already exists.

C1040                             unexpected end-of-file in source file '
                                    filename'

                                    The compiler detected an unexpected
                                    end-of-file condition while creating a
                                    source listing or mingled source/object
                                    listing.

C1042                             cannot open compiler intermediate file -
                                    no such file or directory

                                    The compiler could not create
                                    intermediate files for use in the
                                    compilation process because the TMP
                                    environment variable was set to an
                                    invalid directory or path.

C1043                             cannot open compiler intermediate file

                                    The compiler could not create
                                    intermediate files for use in the
                                    compilation process. The exact reason
                                    could not be determined.

                                    One of the following may be a solution:

                                    ■ Make sure that the environment
                                    variable TMP points to a drive and
                                    directory in which a file can be created.

                                    ■ Delete unneeded files in the TMP
                                    directory.

C1044                             out of disk space for compiler
                                    intermediate file

                                    The compiler could not create
                                    intermediate files for use in the
                                    compilation process because no more
                                    space was available.

                                    Make more space available on the disk
                                    pointed to by the TMP environment
                                    variable and then recompile.

C1050                             'segment' : code segment too large

                                    A code segment grew to within 36 bytes
                                    of 64K during compilation.

                                    A 36-byte pad is used because of a bug
                                    in some 80286 chips that can cause
                                    programs to exhibit strange behavior
                                    when, among other conditions, the size
                                    of a code segment is within 36 bytes of
                                    64K.

C1057                             unexpected end-of-file in macro
                                    expansion (missing ')'?)

                                    The compiler has encountered the end of
                                    the source file while gathering the
                                    arguments of a macro invocation. Usually
                                    this is the result of a missing closing
                                    parenthesis, ), on the macro invocation.

C1064                             compiler limit : token overflowed
                                    internal buffer

                                    The compiler read an identifier that is
                                    longer than the internal buffer used for
                                    identifier names.

                                    Shorten the name and recompile.

C1071                             unexpected end-of-file found in comment

                                    The compiler found the end of a file
                                    while scanning a comment.

                                    Probably a comment was not terminated.
                                    Begin at the end of the file and search
                                    backward for the beginning of a comment.
                                    A comment begins with "/*" and ends with
                                    "*/" as in:

                                    /* This is a comment */

                                    A comment may not be split across files.

C1072                             'filename' : cannot read file

                                    The compiler encountered an error when
                                    trying to read a file.

                                    Check the file-access attributes and be
                                    sure the disk does not have a bad sector.

C1090                             'segment' data allocation exceeds 64K

                                    The size of the named segment exceeds
                                    64K.

                                    This error occurs with _based allocation.

C1127                             'segment': segment redefinition

                                    A segment was overwritten by another
                                    with the same name.

                                    For example, compiling in large model
                                    with

                                    #pragma alloc_text("TEXT", func1)

                                    creates two segments: the default
                                    segment "module_TEXT" and the specified
                                    segment "_TEXT". However, in small model,
                                    the default segment is "_TEXT", and the
                                    specified segment "_TEXT" will overwrite
                                    the default segment.


5.1.2  Compilation-Error Messages

The messages listed below indicate that your program has errors. They appear
in the following format:

filename(line) : error C2xxx: messagetext

When the compiler encounters any of the errors listed in this section, it
continues parsing the program (if possible) and outputs additional error
messages. However, no object file is produced.

Number                            Compilation-Error Message
────────────────────────────────────────────────────────────────────────────
C2027                             use of undefined enum/struct/union '
                                    identifier'

                                    The given identifier referred to a
                                    structure or union type that was not
                                    defined.

C2041                             illegal digit 'character' for base '
                                    number'

                                    The given character was not a legal
                                    digit for the base used.

C2080                             illegal far _fastcall function

                                    A far _fastcall function may not be
                                    compiled with the /Gw option, or with
                                    the /GW option, if stack checking is
                                    enabled.

C2121                             'operator' : bad left/right operand

                                    The left or right operand of the given
                                    operator was illegal for that operator.

C2124                             divide or mod by zero

                                    A constant expression was evaluated and
                                    found to have a zero denominator.

C2128                             'identifier' : huge array cannot be
                                    aligned to segment boundary

                                    The given huge array was large enough to
                                    cross two segment boundaries, but could
                                    not be aligned to both boundaries to
                                    prevent an individual array element from
                                    crossing a boundary.

                                    If the size of a huge array causes it to
                                    cross two boundaries, the size of each
                                    array element must be a power of two, so
                                    that a whole number of elements will fit
                                    between two segment boundaries.

C2129                             static function 'function' not found

                                    A forward reference was made to a static
                                    function that was never defined.

C2136                             'function' : prototype must have
                                    parameter types

                                    A function prototype declarator had
                                    formal-parameter names, but no types
                                    were provided for the parameters.

                                    A formal parameter in a function
                                    prototype must either have a type or be
                                    represented by an ellipsis (...) to
                                    indicate a variable number of arguments
                                    and no type checking.

                                    One cause of this error is a misspelling
                                    of a type name in a prototype that does
                                    not provide the names of formal
                                    parameters.

C2154                             'segment' : does not refer to a segment
                                    name

                                    A _based-allocated variable must be
                                    allocated in a segment unless it is
                                    extern and uninitialized.

C2157                             'function' : must be declared before use
                                    in pragma list

                                    The function name in the list of
                                    functions for an alloc_text pragma has
                                    not been declared prior to being
                                    referenced in the list.

C2158                             'identifier' : is a function

                                    The given identifier was specified in
                                    the list of variables in a same_seg
                                    pragma but was previously declared as a
                                    function.

C2163                             'function' : not available as an
                                    intrinsic function

                                    A function specified in the list of
                                    functions for an intrinsic or function
                                    pragma is not one of the functions
                                    available in intrinsic form.

C2164                             'function' : intrinsic function not
                                    declared

                                    The given function was not declared
                                    before being used in an intrinsic pragma.
                                    This error appears only when compiling
                                    with the /Oi option.

C2167                             'function' : too many actual parameters
                                    for intrinsic function

                                    A reference to the intrinsic function
                                    name contained too many actual
                                    parameters.

C2168                             'function' : too few actual parameters
                                    for intrinsic function

                                    A reference to the intrinsic function
                                    name contained too few actual parameters.

C2169                             'function' : intrinsic function, cannot
                                    be defined

                                    An attempt was made to provide a
                                    function definition for a function
                                    already declared as an intrinsic.

C2170                             'identifier' : not declared as a
                                    function, cannot be intrinsic

                                    The intrinsic pragma was used for an
                                    item other than a function, or for a
                                    function that does not have an intrinsic
                                    form.

C2178                             'identifier' : storage class for
                                    same_seg variables must be extern

                                    The given variable was specified in a
                                    same_seg pragma, but it was not declared
                                    with extern storage class.

C2179                             'identifier' : was used in same_seg, but
                                    storage class is no longer extern

                                    The given variable was specified in a
                                    same_seg pragma, but it was redeclared
                                    with a storage class other than extern.

C2185                             'identifier' : illegal _based allocation

                                    A _based-allocated variable that
                                    explicitly has extern storage class and
                                    is uninitialized may not have a base of
                                    any of the following:

                                    ■ (_segment) & var

                                    ■ _segname("_STACK")

                                    ■ (_segment)_self

                                    ■ void

                                    If the variable does not explicitly have
                                    extern storage class or it is
                                    uninitialized, then its base must use
                                    _segname("g") where g is any segment
                                    name or reserved segment name except
                                    "_STACK".

C2189                             #error : 'string'

                                    An #error directive was encountered. The
                                    string is the descriptive text supplied
                                    in the directive.

C2193                             'identifier' : already in a segment

                                    A variable in the same_seg pragma has
                                    already been allocated in a segment,
                                    using _based.

C2194                             'segment' : is a text segment

                                    The given text segment was used where a
                                    data, const, or bss segment was expected.

C2195                             'segment' : is a data segment

                                    The given data segment was used where a
                                    text segment was expected.

C2196                             /ML cannot be used with floating point

                                    The /ML option requires alternate math.
                                    QuickC does not support alternate math.
                                    The /ML option is allowed only when no
                                    floating-point code is used.

C2200                             'function' : function has already been
                                    defined

                                    A function name passed as an argument in
                                    an alloc_text pragma has already been
                                    defined.

C2201                             'function' : storage class must be
                                    extern

                                    A function declaration appears within a
                                    block, but the function is not declared
                                    extern. This causes an error if the /Za
                                    option is in effect.

                                    For example, the following example code
                                    causes this error, when compiled  with
                                    /Za:

                                    main()
                                    {
                                        static int func1();
                                    }

C2207                             'member' in struct/union 'tag' has a
                                    zero-sized array

                                    The given member in the given structure
                                    or union contains an array without a
                                    subscript or with a zero subscript. Such
                                    an array is legal only as the last
                                    member of a structure or union.

C2208                             no members defined using this type

                                    An enum, struct, or union was defined
                                    without any members. This is an error
                                    only when compiling with /Za; otherwise,
                                    it is a warning.

C2209                             type cast in _based construct must be
                                    (_segment)

                                    The only type allowed within a cast in a
                                    _based declarator is (_segment).

C2210                             'identifier' : must be near/far data
                                    pointer

                                    The base in a _based declarator may not
                                    be an array, a function, or a _based
                                    pointer.

C2211                             (_segment) applied to function
                                    identifier 'function'

                                    The item cast in a _based declarator
                                    must not be a function.

C2212                             'identifier' : _based not available for
                                    functions/pointers to functions

                                    Functions cannot be _based-allocated.
                                    Use the alloc_text pragma.

C2213                             'identifier' : illegal argument to
                                    _based

                                    A symbol used as a base must have type
                                    _segment or be a near or far pointer.

C2214                             pointers based on void require the use
                                    of :>

                                    A _based pointer based on void cannot be
                                    dereferenced. Use the :> operator to
                                    create an address that can be
                                    dereferenced.

C2215                             :> operator only for objects based on
                                    void

                                    The right operand of the :> operator
                                    must be a pointer based on void, as in

                                    char _based(void) *cbvpi

C2216                             'attribute1' may not be used with '
                                    attribute2'

                                    The given function attributes are
                                    incompatible.

                                    Some combinations of attributes that
                                    cause this error are

                                    ■ _saveregs and _interrupt

                                    ■ _fastcall and _saveregs

                                    ■ _fastcall and _interrupt

                                    ■ _fastcall and _export

C2217                             'attribute1' must be used with '
                                    attribute2'

                                    The first function attribute requires
                                    the second attribute to be used.

                                    Some causes for this error include

                                    ■ An interrupt function explicitly
                                    declared as near. Interrupt functions
                                    must
                                    be far.

                                    ■ An interrupt function or a function
                                    with a variable number of arguments,
                                    when that function is declared with the
                                    _fortran, _pascal, or _fastcall
                                    attribute. Functions declared with the
                                    _interrupt attribute or with a variable
                                    number of arguments must use the C
                                    calling conventions. Remove the
                                    _fortran, _pascal, or _fastcall
                                    attribute from the function declaration.

C2218                             type in _based construct must be void

                                    The only type allowed within a _based
                                    construct is void.

C2219                             syntax error : type qualifier must be
                                    after '*'

                                    Either const or volatile appeared where
                                    a type or qualifier is not allowed, as
                                    in

                                    int (const *p);

C2220                             warning treated as error - no object
                                    file generated

                                    When the compiler option /WX is used,
                                    the first warning generated by the
                                    compiler causes this error message to be
                                    displayed.

                                    Either correct the condition that caused
                                    the warning, or compile at a lower
                                    warning level or without /WX.

C2221                             '.' : left operand points to
                                    struct/union, use '->'

                                    The left operand of the '.' operator
                                    must be a struct/union type. It cannot
                                    be a pointer to a struct/union type.

                                    This error usually means that a '->'
                                    operator must be used.

C2222                             '->' : left operand has struct/union
                                    type, use '.'

                                    The left operand of the '->' operator
                                    must be a pointer to a struct/union type.
                                    It cannot be a struct/union type.

                                    This error usually means that a '.'
                                    operator must be used.

C2223                             left of '-> member' must point to
                                    struct/union

                                    The left operand of the '->' operator is
                                    not a pointer to a struct/union type.

                                    This error can occur when the left
                                    operand is an undefined variable.
                                    Undefined variables have type int.

C2224                             left of '.member' must have struct/union
                                    type

                                    The left operand of the '.' operator is
                                    not a struct/union type.

                                    This error can occur when the left
                                    operand is an undefined variable.
                                    Undefined variables have type int.

C2225                             'tagname' : first member of struct is
                                    unnamed

                                    The struct with the given tag started
                                    with an unnamed member (an alignment
                                    member). Struct definitions must start
                                    with a named member.

C2418                             'identifier' : not in a register

                                    An in-line assembler instruction
                                    referenced a variable with register
                                    storage class that has not actually been
                                    allocated in a register.

                                    To correct this, remove the register
                                    keyword from the variable definition,
                                    and make sure that this instruction is
                                    legal with a memory operand.

C2429                             'label' : illegal far label reference

                                    FAR PTR may not be used on jumps or
                                    calls to labels. Far references to
                                    functions are allowed as long as the
                                    function has been declared.


5.1.3  Warning Messages

The messages listed in this section indicate potential problems but do not
hinder compiling and linking.

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
C4001                             nonstandard extension used - 'extension'

                                    The given nonstandard language extension
                                    was used when the /Ze option was
                                    specified.

                                    If the /Za option has been specified,
                                    this condition generates a syntax error.

C4007                             'identifier' : must be 'attribute'

                                    The attribute of the given function was
                                    not explicitly stated. The compiler
                                    forced the attribute.

                                    For example, the function main must have
                                    the _cdecl attribute.

C4008                             'identifier' : _fastcall attribute on
                                    data ignored

                                    The _fastcall attribute on the given
                                    data identifier was ignored.

C4023                             'function' : _based pointer passed to
                                    unprototyped function: parameter 'number
                                    '

                                    When in a near data model, only the
                                    offset portion of a _based pointer is
                                    passed to an unprototyped function. If
                                    the function expects a far pointer, the
                                    resulting code will be wrong. In any
                                    data model, if the function is defined
                                    to take a _based pointer with a
                                    different base, the resulting code may
                                    be unpredictable.

                                    If a prototype is used before the call,
                                    the call will be generated correctly.

C4050                             'operator' : different code attributes

                                    The function-pointer expressions used
                                    with operator had different code
                                    attributes. The attribute involved is
                                    either _export or_loadds.

                                    This is a warning and not an error,
                                    because _export and _loadds affect only
                                    entry sequences and not calling
                                    conventions.

C4054                             insufficient memory may affect
                                    optimization

                                    Not enough memory was available to do
                                    all requested optimizations. This
                                    message appears if available memory is
                                    within 64K of the absolute minimum that
                                    will accommodate the executable file.

C4056                             floating-point overflow

                                    The compiler generated a floating-point
                                    exception while doing constant
                                    arithmetic on floating-point items at
                                    compile time.

                                    For example:

                                    float fp_val = 1.0e100;

                                    In this example, the floating-point
                                    constant  1.0e100  exceeds the maximum
                                    allowable value for a double-precision
                                    data item.

C4059                             segment lost in conversion

                                    The conversion of a far pointer (a full
                                    segmented address) or _based pointer to
                                    a near pointer (a segment offset) or
                                    _based pointer resulted in the loss of
                                    the segment address.

C4063                             'function' : function too large for
                                    post-optimizer

                                    Not enough space was available to
                                    optimize the given function.

                                    One of the following may be a solution:

                                    ■ Recompile with fewer optimizations.

                                    ■ Divide the function into two or more
                                    smaller functions.

C4065                             recoverable heap overflow in
                                    post-optimizer - some optimizations may
                                    be missed

                                    Some optimizations were skipped because
                                    not enough space was available for
                                    optimization.

                                    One of the following may be a solution:

                                    ■ Recompile with fewer optimizations.

                                    ■ Divide the function into two or more
                                    smaller functions.

C4066                             local symbol-table overflow - some local
                                    symbols may be missing in listings

                                    The listing generator ran out of heap
                                    space for local variables, so the source
                                    listing may not contain symbol-table
                                    information for all local variables.

C4067                             unexpected characters following '
                                    directive' directive - newline expected

                                    Extra characters followed a preprocessor
                                    directive and were ignored. This warning
                                    appears only when compiling with the /Za
                                    option.

                                    For example, the following code causes
                                    this warning:

                                    #endif    NO_EXT_KEYS

                                    To remove the warning, compile with /Ze
                                    or use comment delimiters:

                                    #endif    /* NO_EXT_KEYS */

C4072                             'function' : no function prototype on
                                    _fastcall function

                                    A _fastcall function was called without
                                    first being prototyped.

                                    Functions that are _fastcall should be
                                    prototyped to guarantee that the
                                    registers assigned at each point of call
                                    are the same as the registers assumed
                                    when the function is defined. A function
                                    defined in the new ANSI style is a
                                    prototype.

                                    A prototype must be added when this
                                    warning appears, unless the function
                                    takes no arguments or takes only
                                    arguments that cannot be passed in the
                                    general- purpose registers.

C4073                             scoping too deep, deepest scoping merged
                                    when debugging

                                    Declarations appeared at a static
                                    nesting level greater than 13. As a
                                    result, all de-clarations beyond this
                                    level will seem to appear at the same
                                    level.

C4078                             case constant 'value' too big for the
                                    type of switch expression

                                    A value appearing in a case statement
                                    was larger than the size of the type in
                                    the switch expression. The compiler
                                    converted the case value to the type of
                                    the switch expression.

                                    A problem can occur when two case
                                    constants have different values before
                                    being cast but the same value afterward.

C4080                             expected identifier for segment name,
                                    found 'token'

                                    The first argument in the argument list
                                    for the alloc_text pragma is missing a
                                    segment name. This happens if the first
                                    token in the argument list is not an
                                    identifier.

                                    The pragma was ignored.

C4081                             expected a comma, found 'token'

                                    A comma (,) was missing between two
                                    arguments of a pragma.

                                    The pragma was ignored.

C4096                             'attribute1' must be used with '
                                    attribute2'

                                    The use of attribute2 requires the use
                                    of attribute1.

                                    For example, using a variable number of
                                    arguments (...) requires that _cdecl be
                                    used. Also, _interrupt functions must be
                                    _far and _cdecl.

                                    The compiler assumed attribute1 for the
                                    function.

C4104                             'identifier' : near data in same_seg
                                    pragma, ignored

                                    The given near variable was specified in
                                    a same_seg pragma.

                                    The identifier was ignored.

C4106                             pragma requires integer between 1 and
                                    127

                                    An integer constant in the range 1-127
                                    must be specified with the page and skip
                                    pragmas.

                                    The compiler assumed 1 was specified.

C4107                             pragma requires integer between 15 and
                                    255

                                    An integer constant in the range 15-255
                                    must be specified with the pagesize
                                    pragma.

                                    The compiler assumed 63 was specified.

C4108                             pragma requires integer between 79 and
                                    132

                                    An integer constant in the range 79-132
                                    must be specified with the linesize
                                    pragma.

                                    The compiler assumed 79 was specified.

C4119                             different bases 'name1' and 'name2'
                                    specified

                                    The _based pointers in the expression
                                    have different symbolic bases. There may
                                    be truncation or loss in the code
                                    generated.

C4120                             _based/unbased mismatch

                                    The expression contains a conversion
                                    between a _based pointer and another
                                    pointer that is unbased. Some
                                    information may have been truncated.

                                    This warning commonly occurs when a
                                    _based pointer is passed to a function
                                    that accepts a near or far pointer.

C4123                             different base expressions specified

                                    The expression contains a conversion
                                    between _based pointers, but the base
                                    expressions of the _based pointers are
                                    different. Some of the _based
                                    conversions may be unexpected.

C4124                             _fastcall with stack checking is
                                    inefficient

                                    The _fastcall keyword is used for
                                    generating fast code, but stack checking
                                    causes slower code to be generated.

                                    Use the /Gs option or the check_stack
                                    pragma to turn off stack checking when
                                    using _fastcall.

                                    This warning is informational and is
                                    issued only for the first function
                                    declared under these conditions.

C4125                             decimal digit terminates octal escape
                                    sequence

                                    An octal escape sequence in a character
                                    or string constant was terminated with a
                                    decimal digit.

                                    The compiler evaluated the octal number
                                    without the decimal digit, and assumed
                                    the decimal digit was a character.

                                    The following example causes this
                                    warning:

                                    char array1[] = "\\709";

                                    If the digit 9 was intended as a
                                    character and was not a typing error,
                                    correct the example as follows:

                                    char array[] = "\\0709";  /* String
                                    containing "89" */

C4126                             'flag' : unknown memory model flag

                                    The flag used with the /A option was not
                                    recognized and was ignored.

C4127                             conditional expression is constant

                                    The controlling expression of an if
                                    statement or while loop evaluates to a
                                    constant.

                                    As a result, the code in the body of the
                                    if statement or while loop is either
                                    always executed or never executed.

                                    This warning is informational.

C4128                             storage-class specifier after type

                                    A storage-class specifier (auto, extern,
                                    register, static) appears after a type
                                    in a declaration. The compiler assumed
                                    the storage class specifier occurred
                                    before the type.

                                    New-style code places the storage-class
                                    specifier first.

C4129                             'character' : unrecognized character
                                    escape sequence

                                    The character following a backslash in a
                                    character or string constant was not
                                    recognized as a valid escape sequence.

                                    As a result, the backslash is ignored
                                    and not printed, and the character
                                    following the backslash is printed.

                                    To print a single backslash ( \ ),
                                    specify a double backslash ( \\ ).

C4130                             'operator' : logical operation on
                                    address of string constant

                                    The operator was used with the address
                                    of a string literal. Unexpected code was
                                    generated.

                                    For example, the following code causes
                                    this warning:

                                    char *pc;
                                    pc = "Hello";
                                    if (pc == "Hello") ...

                                    The if statement compares the value
                                    stored in the pointer pc to the address
                                    of the string  "Hello", which is
                                    separately allocated each time it occurs
                                    in the code. It does not compare the
                                    string pointed to by pc with the string
                                    "Hello".

                                    To compare strings, use the strcmp
                                    function.

C4131                             'function' : uses old-style declarator

                                    The function declaration or definition
                                    is not a prototype.

                                    New-style function declarations are in
                                    prototype form.

                                    ■ old style

                                    int addrec( name, id )
                                    char *name;
                                    int id;
                                    { }

                                    ■ new style

                                    int addrec( char *name, int id )
                                    { }

C4132                             'object' : const object should be
                                    initialized

                                    The value of a const object cannot be
                                    changed, so the only way to give the
                                    const object a value is to initialize it.

                                    It will not be possible to assign a
                                    value to object.

C4135                             conversion between different integral
                                    types

                                    Information was lost between two
                                    integral types.

                                    For example, the following code causes
                                    this warning:

                                    int intvar;
                                    long longvar;
                                    intvar = longvar;

                                    If the information is merely interpreted
                                    differently, this warning is not given,
                                    as in the following example:

                                    unsigned uintvar = intvar;

C4136                             conversion between different floating
                                    types

                                    Information was lost or truncated
                                    between two floating types.

                                    For example, the following code causes
                                    this warning:

                                    double doublevar;
                                    float floatvar;
                                    floatvar = doublevar;

                                    Note that unsuffixed floating-point
                                    constants have type double, so the
                                    following code causes this warning:

                                    floatvar = 1.0;

                                    If the floating-point constant should be
                                    treated as float type, use the F (or f)
                                    suffix on the constant to prevent the
                                    following warning:

                                    floatvar = 1.0F;

C4137                             'function' : no return value from
                                    floating-point function

                                    The given function had no return
                                    statement.

                                    A long double function returns its value
                                    on the floating-point stack or the
                                    emulated stack. If the function does not
                                    return a value, a run-time
                                    floating-point stack underflow may occur.

C4138                             '*/' found outside of comment

                                    The compiler found a closing comment
                                    delimiter (*/) without a preceding
                                    opening delimiter. It assumed a space
                                    between the asterisk (*) and the forward
                                    slash ( / ).

                                    The following example causes this
                                    warning:

                                    int */*comment*/ptr;

                                    In this example, the compiler assumed a
                                    space before the first comment delimiter
                                    ( /* ), and issued the warning but
                                    compiled the line normally. To remove
                                    the warning, insert the assumed space.

                                    Usually, the cause of this warning is an
                                    attempt to nest comments.

                                    To comment out sections of code that may
                                    contain comments, enclose the code in an
                                    #if/#endif block and set the controlling
                                    expression to zero, as in:

                                    #if 0
                                    int my_variable;   /* Declaration
                                    currently not needed */
                                    #endif

C4139                             'hexnumber' : hex escape sequence is out
                                    of range

                                    A hex escape sequence appearing in a
                                    character or string constant was too
                                    large to be converted to a character.

                                    If in a string constant, the compiler
                                    cast the low byte of the hexadecimal
                                    number to a char. If in a char constant,
                                    the compiler made the cast and then sign
                                    extended the result. If in a char
                                    constant and compiled with /J, the
                                    compiler cast the value to an unsigned
                                    char.

                                    For example, ' \\ x1ff ' is out of range
                                    for a character. Note that the following
                                    code causes this warning:

                                    printf("\\x7Bell\\n");

                                    The number  7be  is a legal hex number,
                                    but is too large for a character. To
                                    correct this example, use three hex
                                    digits:

                                    printf("\\x007Bell\\n");

C4140                             'function' redefined : preceding
                                    references may be invalid

                                    The compiler issues this warning if a
                                    function definition changes between
                                    incremental compilations.

                                    References previous to the redefinition
                                    use the previous definition. Subsequent
                                    references use the new definition.

                                    For example:

                                    main()
                                    {
                                    func1 ();
                                    }
                                    int func1 ()
                                    { }

                                    If this program is compiled with the /Gi
                                    option, and later the  func1  definition
                                    is changed to  long func1, the compiler
                                    issues this message to warn that calls
                                    to  func1  may be of the wrong type.

                                    Be sure that function calls reference
                                    the correct type; if not, recompile
                                    without /Gi. To avoid the problem
                                    altogether, use function prototypes.

C4185                             near call to 'function' in different
                                    segment

                                    The given function was specified in an
                                    alloc_text pragma without being declared
                                    with _far, and then was called from text
                                    segment.

                                    The compiler generated a near call.

                                    Although this is a warning message
                                    rather than an error message, the
                                    resulting code will not work correctly.

C4186                             string too long - truncated to 40
                                    characters

                                    The string argument for a title or
                                    subtitle pragma exceeded the maximum
                                    allow-able length and was truncated.

C4200                             local variable 'identifier' used without
                                    having been initialized

                                    A reference was made to a local variable
                                    that had not been assigned a value. As a
                                    result, the value of the variable is
                                    unpredictable.

                                    This warning is given only when
                                    compiling with global register
                                    allocation on (/Oe).

C4201                             local variable 'identifier' may be used
                                    without having been initialized

                                    A reference was made to a local variable
                                    that might not have been assigned a
                                    value. As a result, the value of the
                                    variable may be unpredictable.

                                    This warning is given only when
                                    compiling with the global register
                                    allocation on (/Oe).

C4202                             unreachable code

                                    The flow of control can never reach the
                                    indicated line.

                                    This warning is given only when
                                    compiling with one of the global
                                    optimizations (/Oe, /Og, or /Ol).

C4203                             'function' : function too large for
                                    global optimizations

                                    The named function was too large to fit
                                    in memory and be compiled with the
                                    selected optimization. The compiler did
                                    not perform any global optimiza- tions
                                    (/Oe, /Og, or /Ol). Other /O
                                    optimizations, such as /Oa and /Oi, are
                                    still performed.

                                    One of the following may remove this
                                    warning:

                                    ■ Recompile with fewer optimizations.

                                    ■ Divide the function into two or more
                                    smaller functions.

C4204                             'function' : in-line assembler precludes
                                    global optimizations

                                    The use of in-line assembler in the
                                    named function prevented the specified
                                    global optimizations (/Oe, /Og, or /Ol)
                                    from being performed.

C4205                             statement has no effect

                                    The indicated statement will have no
                                    effect on the program execution.

                                    The following are examples of statements
                                    with no effect:

                                    1;
                                    a + 1
                                    ; b == c;

C4206                             assignment within conditional expression

                                    The test value in a conditional
                                    expression was the result of an
                                    assignment.

                                    This warning is informational.

                                    An assignment has a value (the value at
                                    the left side of the assignment) that
                                    can be used legally in another
                                    expression, including a test expression.
                                    However, the intention may have been to
                                    test a relation instead of an assignment.

                                    For example, the following line, which
                                    causes this warning, assigns  b  to  a
                                    and compares the value of  a  with 0:

                                    if (a = b) ...

                                    However, the following line tests
                                    whether  a  and  b  are equal:

                                    if (a == b) ...

C4209                             comma operator within array index
                                    expression

                                    The value used as an index into an array
                                    was the last one of multiple expressions
                                    separated by the comma operator.

                                    It is legal for an array index to be the
                                    value of the last expression in a series
                                    of expressions separated by the comma
                                    operator. However, the intent may have
                                    been to use the expressions to specify
                                    multiple indexes into a multidimensional
                                    array.

                                    For example, the following line, which
                                    causes this warning, is legal in C, and
                                    specifies the index  c  into array  a:

                                    a[b,c]

                                    However, the following line uses both  b
                                    and  c  as indexes into a two-
                                    dimensional array:

                                    a[b][c]

C4300                             insufficient memory to process debugging
                                    information

                                    The program was compiled with the /Zi
                                    option, but not enough memory was
                                    available to create the required
                                    debugging information.

                                    One of the following may be a solution:

                                    ■ Split the current file into two or
                                    more files and compile them separately.

                                    ■ Remove other programs or drivers
                                    running in the system which could be
                                    consuming significant amounts of memory.

C4301                             loss of debugging information caused by
                                    optimization

                                    Some optimizations, such as code motion,
                                    cause references to nested variables to
                                    be moved. The information about the
                                    level at which the variables are
                                    declared may be lost. As a result, all
                                    declarations will seem to be at nesting
                                    level 1.

C4323                             potential divide by 0

                                    The second operand in a divide operation
                                    evaluated to zero at compile time,
                                    giving undefined results.

                                    The 0 operand may have been generated by
                                    the compiler, as in the following
                                    example:

                                    func1() { int i,j,k; i /= j && k; }

C4324                             potential mod by 0

                                    The second operand in a remainder
                                    operation evaluated to zero at compile
                                    time, giving undefined results.

C4414                             'function' : short jump to function
                                    converted to near

                                    Short jumps generate a one-byte
                                    instruction. The instruction includes a
                                    short offset that represents the
                                    distance between the jump and the
                                    function definition. The compiler must
                                    generate a special record for the jump,
                                    which requires the jump to be either
                                    NEAR or FAR, but not SHORT. The compiler
                                    made the conversion.

                                    For example, the following code causes
                                    this warning:

                                    main()
                                    {
                                        _asm jmp SHORT main
                                    }


5.2  Command-Line Error Messages

Messages that indicate errors on the command line used to invoke the
compiler have one of the following formats:

    command line error D2xxx: messagetext  Error
    command line warning D4xxx: messagetext  Warning

The compiler issues a warning message and, if possible, continues
processing. In some cases, command-line errors are fatal and the compiler
terminates processing.

When the QCL compiler encounters any of the errors listed in this section,
it terminates, producing no object file.

Number                            Command-Line Message
────────────────────────────────────────────────────────────────────────────
D2013                             incomplete model specification

                                    A customized memory model was
                                    incompletely specified with the /Astring
                                    option.

                                    Two types of options begin with /A:

                                    ■ The /Astring customized memory-model
                                    option requires three letters in the
                                    string. The letters specify the
                                    code-pointer size, data-pointer size,
                                    and data-segment setup attributes of the
                                    memory model.

                                    ■ The /Ax option for specifying a
                                    standard memory model requires one
                                    uppercase letter. A lowercase letter is
                                    interpreted to be part of a customized
                                    memory-model specification. For example:

                                    qcl /As

    A single lowercase letter can be used only if it is a segment setup
    option and is used in combination with a standard memory model.

D2030                             INTERNAL COMPILER ERROR in 'component'
                                    Contact Microsoft Product Support
                                    Services

                                    The driver detects an error in the
                                    specified component, which could be P1,
                                    P2, P3, MASM, LINK, or BIND.

                                    Note the circumstances of the error and
                                    notify Microsoft Corporation by
                                    following the instructions in the
                                    Microsoft Product Assistance Request
                                    form at the back of one of your manuals.

D2031                             too many flags/files on command line

                                    There are more than 128 arguments
                                    combined from the command line and the
                                    CL environment variable.

                                    Reduce the number of arguments. You can
                                    do this by compiling fewer files at one
                                    time.


5.3  Run-Time Error Message

The following message may be generated at run time.

A run-time error message takes the following general form:

run-time error R6nnn- messagetext

Number                            Run-Time Error Message
────────────────────────────────────────────────────────────────────────────
R6010                             abnormal program termination

                                    This error is displayed by the abort( )
                                    routine. The program terminates with
                                    exit code 3, unless an abort( ) signal
                                    handler has been defined by using the
                                    signal( ) function.


5.4  QLINK Error Messages

This section lists error messages generated by the QuickC linker (QLINK) and
the special incremental linker (ILINK) that is invoked when you compile
QuickC programs with the /Gi or /Li option. Note that in most cases, QuickC
will invoke QLINK if ILINK fails.

Fatal errors, which cause the linker to stop execution, have the following
format:

    location  : error L1  xxx  :  messagetext

Nonfatal errors, which indicate problems in the executable file, do not
cause QLINK to stop execution; QLINK produces the executable file. Nonfatal
error messages have the following format:

    location  : error L2  xxx  :  messagetext

Warnings indicate possible problems in the executable file. QLINK produces
the executable file. Warnings have the following format:

    location  : warning L4  xxx  :  messagetext

In all three kinds of messages, location is the input file associated with
the error, or  QLINK  if there is no input file. If the input file is an
.OBJ or .LIB file and a module name is associated with the error, the module
name is enclosed in paren-theses, as shown in the following examples:

    SLIBC.LIB(_file)
    MAIN.OBJ(main.c)
    TEXT.OBJ


5.4.1  Fatal-Error Messages

The following error messages may appear when you link object files:

Number                            Run-Time Error Message
────────────────────────────────────────────────────────────────────────────
L1030                             missing internal name

                                    An IMPORTS statement specified an
                                    ordinal in the module-definition file
                                    without including the internal name of
                                    the routine.

                                    The name must be given if the import is
                                    by ordinal.

L1031                             module description redefined

                                    A DESCRIPTION statement in the
                                    module-definition file was specified
                                    more than once.

L1032                             module name redefined

                                    The module name was specified more than
                                    once (in a NAME or LIBRARY  statement).

L1040                             too many exported entries

                                    The program exceeded the limit of 65,535
                                    exported names.

L1041                             resident-name table overflow

                                    The size of the resident-name table
                                    exceeds 65,535 bytes.

                                    An entry in the resident-name table is
                                    made for each exported routine
                                    designated RESIDENTNAME, and consists of
                                    the name plus three bytes of information.
                                    The first entry is the module name.

                                    Reduce the number of exported routines
                                    or change some to nonresident status.

L1042                             nonresident-name table overflow

                                    The size of the nonresident-name table
                                    exceeds 65,535 bytes.

                                    An entry in the nonresident-name table
                                    is made for each exported routine not
                                    designated RESIDENTNAME, and consists of
                                    the name plus three bytes of information.
                                    The first entry is the DESCRIPTION
                                    statement.

                                    Reduce the number of exported routines
                                    or change some to resident status.

L1044                             imported-name table overflow

                                    The size of the imported-names table
                                    exceeds 65,535 bytes.

                                    An entry in the imported-names table is
                                    made for each new name given in the
                                    IMPORTS section, including the module
                                    names, and consists of the name plus one
                                    byte.

                                    Reduce the number of imports.

L1064                             out of memory

                                    The linker was not able to allocate
                                    enough memory from the operating system
                                    to link the program.

                                    Reduce the size of the program in terms
                                    of code, data, and symbols.

L1078                             file-segment alignment too small

                                    The segment-alignment size given with
                                    the /ALIGNMENT:number option was too
                                    small.

                                    Try increasing the number.

L1092                             cannot open module-definition file

                                    The linker could not open the
                                    module-definition file specified on the
                                    command line or in the response file.

L1115                             'option' : option incompatible with
                                    overlays

                                    The given option is not compatible with
                                    overlays.

                                    Remove the option or else do not use
                                    overlaid modules.


5.4.2  Nonfatal-Error Messages

The following nonfatal-error messages may appear when you link object files:


Number                            Error Message
────────────────────────────────────────────────────────────────────────────
L2000                             imported starting address

                                    The program starting address as
                                    specified in the END statement in a MASM
                                    file is an imported routine.

L2022                             'routine' (alias 'internalname') :
                                    export undefined

                                    The internal name of the given exported
                                    routine is undefined.

L2023                             'routine' (alias 'internalname') :
                                    export imported

                                    The internal name of the given exported
                                    routine conflicts with the internal name
                                    of a previously imported routine. The
                                    set of imported and exported names
                                    cannot overlap.

L2026                             entry ordinal 'number', name 'name' :
                                    multiple definitions for same ordinal

                                    The given exported name with the given
                                    ordinal number conflicted with a
                                    different exported name previously
                                    assigned to the same ordinal. Only one
                                    name can be associated with a particular
                                    ordinal.

L2027                             'name' : ordinal too large for export

                                    The given exported name was assigned an
                                    ordinal that exceeded the limit of
                                    65,535.

L2028                             automatic data segment plus heap exceed
                                    64K

                                    The total size of data declared in
                                    DGROUP, plus the value given in HEAPSIZE
                                    in the module-definition file, plus the
                                    stack size given by the /STACK option or
                                    STACKSIZE module-definition file
                                    statement, exceeds 64K.

                                    Reduce near-data allocation, HEAPSIZE,
                                    or stack.

L2049                             no segments defined

                                    No code or initialized data was defined
                                    in the program. The resulting executable
                                    file is not likely to be valid.

L2050                             16/32 bit attribute conflict - segment:
                                    'segment' in group: 'group'

                                    16-bit segments cannot be grouped with
                                    32-bit segments.

L2051                             start address not equal to 0x100 for
                                    /TINY

                                    The program starting address, as
                                    specified in the .COM file, must have a
                                    starting value equal to 100 hex (0x100
                                    or 0x0100). Any other value is illegal.

                                    Put the following line of assembly
                                    source code in front of the code
                                    segment:

                                    ORG 100h

L2052                             'symbol' : unresolved external -
                                    possible calling convention mismatch

                                    A symbol was declared to be external in
                                    one or more modules, but the linker
                                    could not find it publicly defined in
                                    any module or library.

                                    The name of the unresolved external
                                    symbol is given, then a list of object
                                    modules which contain references to this
                                    symbol is given. The error message and
                                    the list are written to the map file, if
                                    one exists.

                                    This error occurs when a prototype for
                                    an externally defined function is
                                    omitted from a program that is compiled
                                    with the Fastcall option (/Ox). The
                                    calling convention for fastcall does not
                                    match the assumptions that are made when
                                    a prototype is not included for an
                                    external function.

                                    Either include a prototype for the
                                    function, or compile without the /Ox
                                    option.


5.4.3  Warning Messages

The following warning messages may appear when you link object files:

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
L4004                             possible fixup overflow at 'offset' in
                                    segment 'segment'

                                    A near call/jump was made to another
                                    segment which was not a member of the
                                    same group as the segment from which the
                                    call/jump was made.

                                    This call/jump can cause an incorrect
                                    address calculation when the distance
                                    between the paragraph address (frame
                                    number) of the segment group and the
                                    target segment is greater than 64K, even
                                    when the distance between the segment
                                    where the call/jump was actually made
                                    and the target segment is less than 64K.

L4017                             'option' : unrecognized option name;
                                    option ignored

                                    An unrecognized character followed the
                                    option indicator (/).

                                    An example of this warning is

                                    QLINK /ABCDEF main;

L4019                             /TINY disables /INCREMENTAL

                                    A .COM file always requires a full link
                                    and cannot be incrementally linked.

                                    The /TINY and /INCREMENTAL options are
                                    incompatible. When they are used
                                    together, the linker ignores
                                    /INCREMENTAL.

L4023                             'routine' ('internalname') : export
                                    internal name conflict

                                    The internal name of the given exported
                                    routine conflicted with the internal
                                    name of a previous import definition or
                                    export definition.

L4024                             'name' : multiple definitions for export
                                    name

                                    The given name was exported more than
                                    once, an action that is not allowed.

L4025                             'modulename'.'importname'('internalname')
                                    : import internal name conflict

                                    The internal name of the given imported
                                    routine (import is either a name or a
                                    number) conflicted with the internal
                                    name of a previous export or import.

L4026                             'modulename'.'importname'('internalname')
                                    : self-imported

                                    The given imported routine was imported
                                    from the module being linked. This is
                                    not supported on some systems.

L4027                             'name' : multiple definitions for import
                                    internal name

                                    The given internal name was imported
                                    more than once. Previous import
                                    definitions are ignored.

L4028                             'segment' : segment already defined

                                    The given segment was defined more than
                                    once in the SEGMENTS statement of the
                                    module-definition file.

L4030                             'segment' : segment attributes changed
                                    to conform with automatic data segment

                                    The given logical segment in the group
                                    DGROUP was given sharing attributes
                                    (SHARED/NONSHARED) that differed from
                                    the automatic data attributes as
                                    declared by the DATA instance
                                    specification (SINGLE/MULTIPLE). The
                                    attri-butes are converted to conform to
                                    those of DGROUP.

                                    The name DGROUP is predefined as the
                                    automatic data segment. DGROUP cannot
                                    contain code segments because the linker
                                    always considers DGROUP to be a data
                                    segment.

L4040                             stack size ignored for /TINY

                                    The linker ignores stack size if /TINY
                                    is given and if the stack segment has
                                    been defined in front of the code
                                    segment.

L4042                             cannot open old version

                                    The file specified in the OLD statement
                                    in the module-definition file could not
                                    be opened.

L4045                             name of output file is 'filename'

                                    The linker had to change the name of the
                                    output file to the given file name.

                                    If the output file is specified without
                                    an extension, the linker assumes the
                                    default extension .EXE. Creating a Quick
                                    library, .DLL file, or .COM file forces
                                    the linker to use an extension other
                                    than .EXE:

Output File Specification         Extension
────────────────────────────────────────────────────────────────────────────
/TINY option                      .COM

/QUICKLIB option                  .QLB

LIBRARY statement in .DEF file    .DLL

L4047                             Multiple code segments in module of
                                    overlaid program incompatible with
                                    /CODEVIEW

                                    When debugging with CodeView, if there
                                    are multiple code segments defined in
                                    one module (.OBJ file) by use of the
                                    compiler #pragma alloc_text() and the
                                    program is built as an overlaid program,
                                    you can access the symbolic information
                                    for only the first code segment in
                                    overlay. Symbolic information for the
                                    rest of the code segments in overlay is
                                    not accessible.


5.5  NMAKE Error Messages

Error messages from the NMAKE utility have one of the following formats:

    {filename |  NMAKE} :  fatal error U1  xxx: messagetext
    {filename |  NMAKE} :  warning U4  xxx: messagetext

The message begins with the input-file name (filename) and line number, if
one exists, or with the name of the utility.


5.5.1  Fatal-Error Messages

NMAKE generates the following error messages:

Number                            Error message
────────────────────────────────────────────────────────────────────────────
U1006                             syntax: missing closing double quotation
                                    mark

                                    An opening double quotation mark (")
                                    appeared without a closing double
                                    quotation mark.

U1007                             double quotation mark not allowed in
                                    name

                                    The specified target name or file name
                                    contained a double quotation mark (").

                                    Double quotation marks can surround a
                                    file name but not be contained within it.

U1045                             'internal error message'

                                    Note the circumstances of the error and
                                    notify Microsoft Corporation by
                                    following the instructions in the
                                    Microsoft Product Assistance Request
                                    form at the back of one of your manuals.

U1051                             out of memory

                                    The program ran out of space in the far
                                    heap.

                                    Split the description file into smaller
                                    and simpler pieces.

U1052                             file 'filename' not found

                                    The file was not found.

                                    The file name may not be properly
                                    specified in the makefile.

U1053                             file 'filename' unreadable

                                    The file cannot be read.

                                    The following are possible causes of
                                    this error:

                                    ■ The file does not have appropriate
                                    attributes for reading.

                                    ■ A bad area exists on disk.

                                    ■ A bad file-allocation table exists.

                                    ■ The file is locked.

U1054                             cannot create in-line file 'filename'

                                    NMAKE failed in its attempt to create
                                    the file given by name.

                                    The following are possible causes of
                                    this error:

                                    ■ The file already exists with a
                                    read-only attribute.

                                    ■ There is insufficient disk space to
                                    create the file.

U1055                             out of environment space

                                    The environment space limit was reached.

                                    Restart the program with a larger
                                    environment space or with fewer
                                    environment variables.

U1056                             cannot find command processor

                                    The command processor was not found.

                                    NMAKE uses COMMAND.COM or CMD.EXE as a
                                    command processor to execute commands.
                                    It looks for the command processor first
                                    by the full path name given by the
                                    COMSPEC environment variable. If COMSPEC
                                    does not exist, NMAKE searches the
                                    directories specified by the PATH
                                    environment variable.

U1057                             cannot delete temporary file 'filename'

                                    NMAKE failed to delete the temporary
                                    in-line file.

U1058                             terminated by user

                                    Execution of NMAKE was aborted by CTRL+C
                                    or CTRL+BREAK.

U1060                             unable to close file : 'filename'

                                    NMAKE encountered an error while closing
                                    a file.

                                    One of the following may have occurred:

                                    ■ The file is a read-only file.

                                    ■ There is a locking or sharing
                                    violation.

                                    ■ The disk is full.

U1061                             /F option requires a file name

                                    The /F command-line option requires the
                                    name of the description file to be
                                    specified.

                                    To use standard input, specify '-' as
                                    the description file name.

U1062                             missing file name with /X option

                                    The /X command-line option requires the
                                    name of the file to which diagnostic
                                    error output should be redirected.

                                    To use standard input, specify '-' as
                                    the output file name.

U1063                             missing macro name before '='

                                    NMAKE detected an equal sign (=) without
                                    a preceding name.

                                    This error can occur in a recursive call
                                    when the macro corresponding to the
                                    macro name expands to nothing.

U1064                             MAKEFILE not found and no target
                                    specified

                                    No description file was found, and no
                                    target was specified.

                                    A description file can be specified
                                    either with the /F option or through the
                                    default file MAKEFILE. Note that NMAKE
                                    can create a target using an inference
                                    rule even if no description file is
                                    specified.

U1065                             invalid option 'option'

                                    The option specified is not a valid
                                    option for NMAKE.

U1066                             option '/N' not supported; use NMAKE

                                    NMAKE's shell program NMK.COM does not
                                    support the /N option.

                                    Use NMAKE /N.

U1083                             target macro '$(macroname)' expands to
                                    nothing

                                    A target was specified as a macro name
                                    that has not been defined or has null
                                    value.

                                    NMAKE cannot process a null target.

U1084                             in-line file not allowed in inference
                                    rules

                                    In-line file syntax is not allowed in
                                    inference rules and can be used only in
                                    a target-dependency block.

U1094                             syntax error : only (no)keep allowed
                                    here

                                    Something other than KEEP or NOKEEP
                                    appeared at the end of the syntax for
                                    creating an in-line file.

                                    The syntax for generating an in-line
                                    file allows an action to be specified
                                    after the second pair of angle brackets.
                                    Valid actions are KEEP and NOKEEP. Other
                                    actions are errors.

                                    The KEEP option specifies that NMAKE
                                    should leave the in-line file on disk.
                                    The NOKEEP option causes NMAKE to delete
                                    the file before exiting. The default is
                                    NOKEEP.

U1095                             expanded command line 'commandline' too
                                    long

                                    After macro expansion, the command line
                                    shown exceeded the length limit for
                                    command lines for the operating system.

                                    DOS permits up to 128 characters on a
                                    command line.

                                    If the command is a QLINK command line,
                                    use a response file.

U1096                             cannot open file 'filename'

                                    The given file could not be opened,
                                    either because the disk was full or
                                    because the file has been set to be
                                    read-only.

U1097                             extmake syntax usage error, no dependent

                                    No dependent was given.

                                    In extmake syntax, the target under
                                    consideration must have either an
                                    implicit dependent or an explicit
                                    dependent.

U1098                             extmake syntax in 'string' incorrect

                                    The part of the string shown contains an
                                    extmake syntax error.


5.5.2  Compilation-Error Message

NMAKE generates the following compilation-error messages:

Number                            Compilation-Error Message
────────────────────────────────────────────────────────────────────────────
U2001                             no more file handles (too many files
                                    open)

                                    NMAKE could not find a free file handle.

                                    One of the following may be a solution:

                                    ■ Reduce recursion in the build
                                    procedures.

                                    ■ Increase the number of file handles by
                                    changing the FILES setting in
                                    CONFIG.SYS to allow a larger number of
                                    open files. FILES =20 is the recommended
                                    setting.


5.5.3  Warning Messages

NMAKE generates the following warning messages:

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
U4001                             command file can be invoked only from
                                    command line

                                    A command file cannot be invoked from
                                    within another command file. Such an
                                    invocation is ignored.

                                    The command file should contain the
                                    entire remaining command line.

U4002                             resetting value of special macro '
                                    macroname'

                                    The value of a macro such as $(MAKE) was
                                    changed within a description file.

                                    The name by which this program was
                                    invoked is not a tagged section in the
                                    TOOLS.INI file.

U4003                             no match found for wild card 'filename'

                                    There are no file names that match the
                                    specified target or dependent file with
                                    the wild-card characters asterisk (*)
                                    and question mark (?).

U4004                             too many rules for target 'targetname'

                                    Multiple blocks of build commands were
                                    specified for a target using single
                                    colons (:) as separators.

U4005                             ignoring rule 'rule' (extension not in
                                    .SUFFIXES)

                                    The rule was ignored because the
                                    suffix(es) in the rule are not listed in
                                    the .SUFFIXES list.

U4006                             special macro undefined : 'macroname'

                                    The special macro name is undefined and
                                    expands to nothing.

U4007                             file name 'filename' too long;
                                    truncating to 8.3

                                    The base name of the file has more than
                                    eight characters, or the extension has
                                    more than three characters. NMAKE
                                    truncates the name to an eight-character
                                    base and a three-character extension.

U4008                             removed target 'target'

                                    Execution of NMAKE was interrupted while
                                    NMAKE was trying to build the given
                                    target, and therefore the target was
                                    incomplete. Because the target was not
                                    specified in the .PRECIOUS list, NMAKE
                                    has deleted it.

U4009                             duplicate in-line file 'filename'

                                    The given file name is the same as the
                                    name of an earlier in-line file.

                                    Reuse of this name caused the earlier
                                    file to be overwritten. This will
                                    probably cause unexpected results.
```

{% endraw %}
