---
layout: page
title: "QuickC 2.5 Tool Kit"
permalink: /documents/books/mspl13/c/qctools/
redirect_from: /pubs/pc/reference/microsoft/mspl13/c/qctools/
---

The following document is from the [Microsoft Programmer's Library 1.3](../../) CD-ROM.

{% raw %}

```none
Microsoft QuickC Compiler - TOOL KIT








────────────────────────────────────────────────────────────────────────────
                    Microsoft(R) QuickC(R) Compiler - TOOL KIT

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
(C) Copyright Microsoft Corporation, 1988, 1990. All rights reserved.


Printed and bound in the United States of America.


Microsoft, MS, MS-DOS, CodeView, QuickC, and XENIX are
registered trademarks and Windows is a trademark of Microsoft Corporation.

COMPAQ is a registered trademark of Compaq Computer Corporation.

Hercules is a registered trademark and InColor is a trademark
of Hercules Computer Technology.

Intel is a registered trademark of Intel Corporation.

IBM is a registered trademark of International Business
Machines Corporation.

Document No. SY10425-0290
    OEM D703-2Z
10 9 8 7 6 5 4 3 2 1






Table of Contents
────────────────────────────────────────────────────────────────────────────



Introduction
        About This Manual
        Elsewhere in This Package
        Key to Document Conventions


PART I  Tool Kit Tutorial
────────────────────────────────────────────────────────────────────────────


Chapter 1  Creating Executable Programs

        1.1   Compiling and Linking: An Overview
        1.2   Using the QCL Command
        1.3   Specifying File Names
        1.4   Controlling Compiling and Linking with QCL Options
            1.4.1    Compiling without Linking
            1.4.2    Compiling Only Modified Functions
            1.4.3    Optimizing Programs
            1.4.4    Naming Output Files
            1.4.5    Turning Off Language Extensions
            1.4.6    Debugging and Syntax Checking
            1.4.7    Controlling the Preprocessor
            1.4.8    Compiling for Specific Hardware
            1.4.9    Choosing Memory Models
            1.4.10   Controlling the Linking Process
            1.4.11   Other QCL Options
        1.5   Invoking the Linker Directly: The QLINK Command
            1.5.1    Giving Input to the QLINK Command
            1.5.2    QLINK Options

Chapter 2  Maintaining Software Libraries with LIB

        2.1   Why Use a Library?
        2.2   The LIB Command
        2.3   Listing the Contents of a Library
        2.4   Modifying the Contents of a Library
            2.4.1    Modifying the Library
            2.4.2    Adding a Module
            2.4.3    Deleting a Module
            2.4.4    Replacing a Module
            2.4.5    Copying and Moving Modules from a Library
        2.5   Creating a New Library
        2.6   Other Ways of Using LIB

Chapter 3  Maintaining Programs with NMAKE

        3.1   How NMAKE Works
        3.2   Building a Simple Description File
            3.2.1    Description Blocks
            3.2.2    The CC Macro
        3.3   Invoking NMAKE
            3.3.1    Invoking NMAKE from the DOS Command Line
            3.3.2    Invoking NMAKE with a Response File
        3.4   NMAKE Options
            3.4.1    Controlling Input
            3.4.2    Controlling Execution
            3.4.3    Controlling Output
        3.5   Building Complex Description Files
            3.5.1    Using Special Characters to Modify Commands
            3.5.2    Using Macros
            3.5.3    Using Inference Rules
            3.5.4    Using Directives
        3.6   Other NMAKE Features


PART II  Reference to QuickC Tools
────────────────────────────────────────────────────────────────────────────


Chapter 4  QCL Command Reference

        4.1   The QCL Command Line
        4.2   How the QCL Command Works
        4.3   QCL Options
            4.3.1    /A Options (Memory Models)
            4.3.2    /batch (Compile in Batch Mode)
            4.3.3    /c (Compile without Linking)
            4.3.4    /C (Preserve Comments during Preprocessing)
            4.3.5    /D (Define Constants and Macros)
            4.3.6    /E (Copy Preprocessor Output to Standard Output)
            4.3.7    /EP (Copy Preprocessor Output to Standard Output)
            4.3.8    /F (Set Stack Size)
            4.3.9    /Fe (Rename Executable File)
            4.3.10   /Fm (Create Map File)
            4.3.11   /Fo (Rename Object File)
            4.3.12   /FP Options (Select Floating-Point-Math Package)
            4.3.13   /G0, /G1, /G2 (Generate Instructions for 8086, 80186,
                        or 80286 Processor)
            4.3.14   /Gc, /Gd (Use FORTRAN/Pascal or C Calling Convention)
            4.3.15   /Ge, /Gs (Turn Stack Checking On or Off)
            4.3.16   /Gi (Use Incremental Compilation)
            4.3.17   /Gr (Register Calling Convention)
            4.3.18   /Gt (Set Data Threshold)
            4.3.19   /Gw,
                        /GW (Generate Code for Windows(tm) Function Calls)
            4.3.20   /HELP (List the Compiler Options)
            4.3.21   /I (Search Directory for Include Files)
            4.3.22   /J (Change Default char Type)
            4.3.23   /Lc, Lr (Compile for Real Mode)
            4.3.24   /Li (Link Incrementally)
            4.3.25   /Ln (Link without C Run-Time Startup Code)
            4.3.26   /ND, /NT (Name the Data or Code Segments)
            4.3.27   /nologo (Suppress Display of Sign-On Banner)
            4.3.28   /O Options (Optimize Program)
            4.3.29   /P (Create Preprocessor-Output File)
            4.3.30   /Ta, /Tc (Specify Assembly Language or C Source File)
            4.3.31   /U, /u (Remove Predefined Names)
            4.3.32   /V (Set Version String)
            4.3.33   /W, /w (Set Warning Level)
            4.3.34   /X (Ignore Standard Include Directory)
            4.3.35   /Ze, /Za (Enable or Disable Language Extensions)
            4.3.36   /Zi, /Zd (Compile for Debugging)
            4.3.37   /Zl (Remove Default-Library Name from Object File)
            4.3.38   /Zp (Pack Structure Members)
            4.3.39   /Zr (Check Pointers)
            4.3.40   /Zs (Check Syntax Only)
            4.3.41   Giving Options with the CL Environment Variable
        4.4   Controlling Stack and Heap Allocation

Chapter 5  QLINK

        5.1   Overview
        5.2   Invoking QLINK
            5.2.1    Command Line
            5.2.2    Prompts
            5.2.3    Response File
            5.2.4    How QLINK Searches for Libraries
        5.3   QLINK Memory Requirements
        5.4   QLINK Options
            5.4.1    /BA (Running in Batch Mode)
            5.4.2    /CO (Link for Debugging)
            5.4.3    /CP (Set the Maximum Allocation Space)
            5.4.4    /DO (Order Segments)
            5.4.5    /DS (Load Data at High Address)
            5.4.6    /E (Pack Executable Files)
            5.4.7    /F (Optimize Far Calls)
            5.4.8    /HE (View the Options List)
            5.4.9    /HI (Place Executable in High Memory)
            5.4.10   /INC (Prepare for ILINK)
            5.4.11   /INF (Display Linker-Process Information)
            5.4.12   /LI (Include Line Numbers in Map File)
            5.4.13   /M (List Public Symbols)
            5.4.14   /NOD (Ignore Default Libraries)
            5.4.15   /NOE (Ignore Extended Dictionary)
            5.4.16   /NOF (Disable Far-Call Optimization)
            5.4.17   /NOG (Preserve Compatibility)
            5.4.18   /NOI (Employ Case Sensitivity)
            5.4.19   /NOL (Suppress Sign-On Banner)
            5.4.20   /NON (Order Segments without Nulls)
            5.4.21   /NOP (Disable Segment Packing)
            5.4.22   /O (Set the Overlay Interrupt)
            5.4.23   /PACKC (Pack Contiguous Segments)
            5.4.24   /PACKD (Pack Contiguous Data)
            5.4.25   /PADC (Pad Code Segments)
            5.4.26   /PADD (Pad Data Segments)
            5.4.27   /PAU (Pause during Linking)
            5.4.28   /SE (Set Maximum Number of Segments)
            5.4.29   /ST (Set Stack Size)
            5.4.30   /T (Create a .COM File)
        5.5   Linker Operation
            5.5.1    Alignment of Segments
            5.5.2    Frame Number
            5.5.3    Order of Segments
            5.5.4    Combined Segments
            5.5.5    Groups
            5.5.6    Fixups
        5.6   Using Overlays
            5.6.1    Restrictions on Overlays
            5.6.2    Overlay-Manager Prompts

Chapter 6  LIB

        6.1   Invoking LIB
            6.1.1    Command Line
            6.1.2    Prompts
            6.1.3    Response File
        6.2   LIB Commands
            6.2.1    Creating a Library File
            6.2.2    Add Command (+)
            6.2.3    Delete Command (-)
            6.2.4    Replace Command (- +)
            6.2.5    Copy Command (*)
            6.2.6    Move Command (- *)

Chapter 7  NMAKE

        7.1   Overview of NMAKE
            7.1.1    Using a Command Line to Invoke NMAKE
        7.2   NMAKE Description Files
            7.2.1    Description Blocks
            7.2.2    Comments
            7.2.3    Macros
            7.2.4    Inference Rules
            7.2.5    Directives
            7.2.6    Pseudotargets
        7.3   Command-Line Options
        7.4   Using a Response File to Invoke NMAKE
        7.5   The TOOLS.INI File
        7.6   In-Line Files
        7.7   NMAKE Operations Sequence

Appendix A  Exit Codes

        A.1   Exit Codes with NMAKE
        A.2   Exit Codes with DOS Batch Files
        A.3   Exit Codes for Programs
            A.3.1    QLINK Exit Codes
            A.3.2    LIB Exit Codes
            A.3.3    NMAKE Exit Codes

Appendix B  Working with QuickC Compiler Memory Models

        B.1   Near, Far, and Huge Addressing
        B.2   Using the Standard Memory Models
            B.2.1    Creating Tiny-Model Programs
            B.2.2    Creating Small-Model Programs
            B.2.3    Creating Medium-Model Programs
            B.2.4    Creating Compact-Model Programs
            B.2.5    Creating Large-Model Programs
            B.2.6    Creating Huge-Model Programs
        B.3   Using the _near, _far, and _huge Keywords
            B.3.1    Library Support for _near, _far, and _huge
            B.3.2    Declaring Data with _near, _far, and _huge
            B.3.3    Declaring Functions with the _near and _far Keywords
            B.3.4    Pointer Conversions

Appendix C  Hardware-Specific Utilities

        C.1   Fixing Keyboard Problems with FIXSHIFT
        C.2   Using Hercules Graphics
            C.2.1    Support for Cards and Display Characteristics
            C.2.2    The MSHERC Driver
            C.2.3    Using a Mouse
            C.2.4    Setting Hercules Graphics Mode
        C.3   The Mouse Driver

Appendix D  Error Messages

        D.1   Compiler Errors
            D.1.1    Fatal Error Messages
            D.1.2    Compilation Error Messages
            D.1.3    Warning Messages
            D.1.4    Compiler Limits
        D.2   Command-Line Errors
            D.2.1    Command-Line Error Messages
            D.2.2    Command-Line Warning Messages
        D.3   Run-Time Errors
            D.3.1    Math Error Messages
            D.3.2    Run-Time Error Messages
        D.4   QLINK Error Messages
            D.4.1    Fatal Error Messages
            D.4.2    Error Messages
            D.4.3    Warning Messages
        D.5   LIB Error Messages
            D.5.1    LIB Fatal Error Messages
            D.5.2    LIB Warning Messages
        D.6   NMAKE Error Messages
            D.6.1    Fatal Error Messages
            D.6.2    Compilation Error Message
            D.6.3    Warning Messages

Glossary


Index




Introduction
────────────────────────────────────────────────────────────────────────────

The Microsoft(R) QuickC(R) Compiler Tool Kit is a set of utility programs
that you can use to develop your own programs outside the QuickC integrated
environment. These tools include


    ■   QCL, the Microsoft QuickC compiler, which compiles QuickC source
        programs and invokes QLINK (see below) to link object files

    ■   QLINK, the QuickC linker, which combines object files that you've
        created with the Microsoft QuickC compiler (or any other Microsoft
        language product) into executable programs

    ■   LIB, the Microsoft Library Manager, which combines object files into
        libraries

    ■   NMAKE, the Microsoft Program-Maintenance Utility, which maintains
        large programs that consist of separate modules

    ■   The special-purpose utilities, including MSHERC (which provides
        support for Hercules(R) graphics adapters) and FIXSHIFT (which fixes a
        bug in certain keyboards that makes them incompatible with QuickC and
        some other programs)


The Tool Kit provides an alternative to the QuickC environment by letting
you compile and link from the command line. You may find that it's easiest
to use the integrated environment during the early stages of program
development, when you're still tinkering with programs and you need to
compile, run, and debug programs fast. Then, when you're fine-tuning and
maintaining your code, use the tools from the Tool Kit for additional
control and flexibility.

────────────────────────────────────────────────────────────────────────────
NOTE

Microsoft documentation uses the term "OS/2" to refer to the OS/2
systems─Microsoft Operating System/2 (MS(R) OS/2) and IBM(R) OS/2.
Similarly, the term "DOS" refers to both the MS-DOS(R) and IBM Personal
Computer DOS operating systems. The name of a specific operating system is
used when it is necessary to note features that are unique to that system.
────────────────────────────────────────────────────────────────────────────


About This Manual

If you're new to Microsoft language products, this book will teach you how
to get the most out of the tools provided in this package. Experienced users
of Microsoft languages will be able to find information about existing
utilities quickly, as well as learn about the utilities provided with QuickC
(including the NMAKE utility and the hardware-specific support utilities
documented in Appendix C, "Hardware-Specific Utilities").

Part 1 of the manual is a tutorial that illustrates the ways you'll use the
QCL, QLINK, LIB, and NMAKE utilities for everyday programming work. Each
chapter describes the most common options of each utility.

Part 2 is a reference to the Tool Kit. Each chapter describes a tool in
detail, showing the syntax of the command line and describing all of the
tool's options and their effects.

Appendixes of this manual list the exit codes returned by each tool, explain
the use of QuickC memory models, describe the MSHERC and FIXSHIFT utilities,
and describe the error messages associated with each tool.

Following the appendixes is a glossary, which defines the terms introduced
in this manual, as well as other C-specific terms you may find helpful.


Elsewhere in This Package

As you're reading this manual, you may want to refer to other manuals or
online documentation for information about other parts of the product. This
manual assumes that you've installed the QuickC compiler software as
described in Up and Running. If you haven't yet installed the software,
install it now.

Read C for Yourself if you're new to C programming and want to learn how to
write C programs. That manual includes an appendix that summarizes the C
language and common C library routines.

Insert the disk titled "Learning the QuickC Environment" and type  learn  if
you want to learn how to use the QuickC integrated environment. The lesson
titled "Basic Skills" shows how to get online help for any command or option
within the environment or for any part of the C language or run-time
library.


Key to Document Conventions

This book uses the following document conventions:

Examples                          Description
────────────────────────────────────────────────────────────────────────────
STDIO.H, PATH, C:\BIN, QCL,       Uppercase letters indicate file names,
NMAKE, DX, _TEXT                  segment names, registers, and terms used
                                    at the DOScommand level.

_cdecl, int, printf, alloc_text,  Boldface letters indicate C keywords,
#undef, DosCreateThread           operators,
                                    language-specific characters, and
                                    library functions, as well as OS/2
                                    functions.

QCL A.C B.C C.OBJ                 This font is used for examples, user
                                    input, program output, and error
                                    messages in text.

if (expression)                   Italic letters indicate placeholders for
statement1                        information you must supply, such as a
                                    file name. Italics are also occasionally
                                    used for emphasis in the text.

«option»                          Items inside double square brackets are
                                    optional.

#pragma pack {1 | 2}              Braces and a vertical bar indicate a
                                    choice among two or more items. You must
                                    choose one of these items unless double
                                    square brackets surround the braces.

QCL options «file...»             Three dots following an item indicate
                                    that more items having the same form may
                                    appear.

    while()                          A column of three dots tells you that
{                                 part of the example program has been
    .                              intentionally omitted.
    .
    .
}

CTRL+ENTER                        Small capital letters are used for the
                                    names of keys on the keyboard. When you
                                    see a plus sign (+) between two key
                                    names, you should hold down the first
                                    key while pressing the second. The
                                    carriagereturn key, sometimes appearing
                                    as a bent arrow on the keyboard, is
                                    called ENTER.

Color Graphics                    The first time an acronym is used, it is
Adapter (CGA)                     often spelled out.

"argument"                        Quotation marks enclose a new term the
                                    first time it is defined in text.






PART I  Tool Kit Tutorial
────────────────────────────────────────────────────────────────────────────

The Microsoft QuickC Compiler Tool Kit is divided into two parts. Part 1 is
a tutorial designed to get you started with the QuickC tools. It does not
cover the tools in detail, but instead gives you a "quick start" on the
options and procedures that you are most likely to need. If you are new to
the QuickC Compiler, consult Part 1 to learn how to use the Tool Kit and to
become familiar with the most useful options of each tool. After you've
gained some experience with the tools, turn to Part 2, "Reference to QuickC
Tools," for the "nuts and bolts" of each tool.

Part 1 starts with QCL and LINK, the fundamental tools you must use to
create executable programs outside the QuickC environment. It goes on to the
Library Manager (LIB), with which you can create libraries of compiled code.
The part concludes with NMAKE, a program-maintenance utility that helps you
automate the process of rebuilding software.






Chapter 1  Creating Executable Programs
────────────────────────────────────────────────────────────────────────────

Version 2.5 of the Microsoft QuickC Compiler environment is designed for
maximum convenience and efficiency. If you prefer, however, you can also
create programs from the DOS command line. The QuickC Compiler provides two
programs for this purpose: QCL and QLINK.

This chapter introduces the basic concepts and the most common options of
the QCL and QLINK commands. See Chapter 4, "QCL Command Reference," in Part
2 of this manual for a complete description of all the QCL options (listed
alphabetically). See Chapter 5, "QLINK," also in Part 2, for a complete
explanation of how QLINK works.


1.1  Compiling and Linking: An Overview

The first step in creating a QuickC program is to enter the source code
using an editor and save it in a file. This file is known as a C "source
file." You can enter separate parts of the program in different source files
and compile these source files separately.

Once you've saved your C source file(s), two steps are required to convert
it to an executable file:


    1.  Compiling. During this step, the QuickC compiler converts the C source
        files to object files. An object file contains binary code but is not
        yet in execut-able form.

    2.  Linking. During this step, the linker takes the object files created
        during compilation, combines them with standard libraries plus any
        other object files and libraries you specify, and creates an
        executable file that can be run under DOS.


You can use the QCL command to perform both compiling and linking. On the
QCL command line, give the names of any C source files that you want to
compile and the names of any additional object files or libraries that you
want to link. As an example, consider the following simple command:

    QCL SAMPLE.C EXAMPLE.C

This command tells QCL to compile and link the source files SAMPLE.C and
EXAMPLE.C. The QCL command performs these two steps:


    1.  QCL compiles the source files SAMPLE.C and EXAMPLE.C and creates
        object files. The object files created by QCL have the same base name
        as the source files, plus the extension .OBJ.

    2.  The linker links the object files that were created in the compiling
        step with the default library, SLIBCE.LIB. (QLINK uses this particular
        library because there are no command-line options that specify
        otherwise. See Section 4.3.1, "/A Options," for the names of the other
        possible libraries.) QLINK then creates the final executable file,
        SAMPLE.EXE, giving it the base name of the first source file specified
        on the command line (SAMPLE), plus the extension .EXE.


The two steps described above are illustrated in Figure 1.1.

(This figure may be found in the printed book.)

Figure 1.1 and the command it illustrates give a simple demonstration of
what QCL can do. You can also use QCL to compile and link any combination of
source files, object files, and additional libraries. The following section
explains the syntax of the QCL command, which you can use to control more
complex compile/link operations.


1.2  Using the QCL Command

The QCL command, which you'll use for most compiling and linking operations,
has the following format:

(This figure may be found in the printed book.)

The items in italics are different pieces of input (described below) that
you must give on the QCL command line:


    ■   The options are QCL options, which control some aspect of the
        compiling or linking process. They may appear anywhere on the command
        line and in most cases affect any files that appear later on the
        command line. The most commonly used QCL options are described in
        Section 1.4, "Controlling Compiling and Linking with QCL Options." See
        Chapter 4, "QCL Command Reference," for complete information on all
        QCL options.

    ■   The sourcefiles are the names of the C source files that you are
        compiling.  Normally, these file names have .C extensions.

    ■   The objfiles are the names of additional object files that you want to
        link into your program. QCL compiles the source files, then links the
        resulting object files with objfiles. For example, given the command

        QCL MAIN.C AUX.OBJ


        QCL compiles MAIN.C, creating the object file MAIN.OBJ. QCL then tells
        the linker to link MAIN.OBJ and AUX.OBJ to create the executable file
        named MAIN.EXE.

        If you give a file name with any extension other than .C or .LIB, or
        with no extension, QCL assumes you are giving it the name of an object
        file. For example, in the command

        QCL OBJECT1 OBJECT2.OBJ

        the QCL command assumes OBJECT1 has the .OBJ extension and tells the
        linker to link OBJECT1.OBJ and OBJECT2.OBJ.



    ■   The libraries are the names of libraries that you want to link with.
        These names must have .LIB extensions.

        Ordinarily, you don't need to give a library name unless your program
        calls functions that are stored in libraries other than the standard
        combined C libraries (which you created during installation). If you
        use libraries created

        by a company other than Microsoft, or if you have created a private
        library of functions and your program calls functions in this library,
        you must give the private-library name on the QCL command line. For
        example, the command

        QCL MAIN.C MYLIB.LIB

        tells QCL to compile MAIN.C, creating the object file MAIN.OBJ. Then
        QCL tells the linker to link MAIN.OBJ with functions in the default
        combined library SLIBCE.LIB and the MYLIB.LIB library given on the
        command line.

    ■   The linkoptions are linker options, which control some aspects of the
        linking process. Linker options are described in Section 1.4.10,
        "Controlling the Linking Process."

    ■   If you're not sure that your program will fit in available memory, you
        can indicate that certain parts of the program will become "overlays."
        That is, they will be stored on disk and read into
        memory─overlaid─only when needed.  To specify overlays, enclose the
        modules you want to overlay in parentheses on the QCL command line.
        For example, the command

        QCL RESIDNT.C (ONCALL.C) MAIN.C


        creates a program named RESIDNT.EXE with an overlay module named
        ONCALL.OBJ. Whenever control passes to ONCALL.OBJ, it is read into
        memory from disk. (See Section 5.6, "Using Overlays," for more
        information about overlays and restrictions on their use.)



1.3  Specifying File Names

A DOS file name has two parts: the "base name," which includes up to eight
characters before the period (.), and the "extension," which includes the
period and up to three characters following the period. The extension
identifies the type of the file. The QCL command uses the extension of each
file name to determine how to process the corresponding file, as explained
in Table 1.1.

    Uppercase and lowercase

In file names, any combination of uppercase and lowercase letters is legal.
For example, SHUTTLE.C and Shuttle.c represent the same file.

    Path names

Any file name can include a path name. When a file name includes a path
name, QCL assumes the file to be in that path. You can supply either a full
path name or a partial path name. A full path name includes a drive name and
one or more directory names. A partial path name is the same as a full path
name but omits the drive name, which QCL assumes to be the current drive.

If you don't give a path name, QCL assumes that all source and object files
given on the command line are in the current directory.


Examples

    QCL MAIN.C AUX.C OBJECT1.OBJ OBJECT2 OBJECT3.MOD

This command line compiles the files MAIN.C and AUX.C, creating object files
named MAIN.OBJ and AUX.OBJ. These object files are then linked with the
object files OBJECT1.OBJ, OBJECT2.OBJ, and OBJECT3.MOD to form an executable
file named MAIN.EXE (since the base name of the first file on the command
line is MAIN). Note that QCL assumes the extension .OBJ for OBJECT2 because
no extension is given on the command line.

    QCL TEAPOT.C \MSG\ERROR C:\GRAPHICS\GRAPHICS.LIB

This command line tells QCL to compile the file TEAPOT.C and to link the
resulting object file with \MSG\ERROR.OBJ and the library GRAPHICS.LIB. QCL
assumes the extension .OBJ for the file \MSG\ERROR because none was
specified. It looks for the library in the \GRAPHICS directory on drive C:.


Table   1.1 Interpretation of File Extensions

╓┌──────────────────────────────┌─────────────┌──────────────────────────────╖
Extension                      Assumed Type  Processing
────────────────────────────────────────────────────────────────────────────
.C                             C source      QCL compiles the file.

.OBJ                           Object        QCL tells the linker to link
                                                the file.

.LIB                           Library       The linker links this library
                                                with the object files QCL
                                                created from source files and
                                                the object files given on the
                                                command line.

Any other extension or none    Object        QCL tells the linker to link
                                                the file. You must end the
                                                file name with a period (.)
                                                if the file name has no
Extension                      Assumed Type  Processing
────────────────────────────────────────────────────────────────────────────
                                                if the file name has no
                                                extension. Otherwise, QCL
                                                assumes the extension .OBJ.

────────────────────────────────────────────────────────────────────────────




1.4  Controlling Compiling and Linking with QCL Options

The QCL command offers a variety of options that control the compiling and
linking processes and modify the files created during each stage. For
example, you can specify QCL options to rename output files, to control the
operation of the QuickC preprocessor, to take advantage of an 80286
processor or a math coprocessor, or to optimize your program for speed or
size.

QCL options can begin with either a forward slash ( / ) or a dash (-). In
this book, the slash is used.

────────────────────────────────────────────────────────────────────────────
Important

Except as noted, QCL options are case sensitive, so you must use the exact
combination of uppercase and lowercase letters shown in this book.
────────────────────────────────────────────────────────────────────────────

Some QCL options require arguments. For example, you may be required to give
a number or a file name as part of a QCL option. For some options, you must
put a space between the option and the argument; for others, you must place
the argument immediately after the option. The description of each option
gives its exact syntax.

The following sections list the most commonly used QCL options by type. See
Chapter 4, "QCL Command Reference," for a complete list of QCL options or
for more information about the effects of an option described in this
chapter.

    Help with QCL options

If you need help with QCL options, use the following command:

    QCL /HELP

This command displays a list of commonly used QCL options with a brief
description of each option. Unlike other QCL options, /HELP is not case
sensitive; you can type any combination of lowercase and uppercase letters.



1.4.1  Compiling without Linking

When you compile with the /c option, QCL compiles the source files you give
on the command line but ignores any object files or libraries that you give
on the command line. Because QCL does not invoke the linker when you give
this option, it does not create an executable file.

You can use this option in the following cases:


    ■   To compile separate modules that you want to put in a library using
        the LIB utility (described in Chapter 2 of this book)

    ■   To link in a separate step as described later in this chapter (for
        example, in an NMAKE file)



Example

    QCL /c SPELL.C THESRS.C

The example above compiles the C source files SPELL.C and THESRS.C, creating
the object files SPELL.OBJ and THESRS.OBJ. Because the /c option keeps QCL
from invoking the linker, this command doesn't create an executable file.


1.4.2  Compiling Only Modified Functions

The /Gi option allows you to compile programs much faster than usual. It
speeds compilation by telling QCL to compile only the parts of each C source
file that have changed since the file was last compiled. This process is
called "incremental compilation."

Information about the incremental compilation of each source file is
maintained in an MDT (Module Description Table) file. One MDT file can
contain this information for more than one source file.

If you give a file-name argument following the /Gi option, the compiler
writes the change information for all the source files into that single MDT
file. Do not put spaces between the /Gi option and the file name.

If you specify the /Gi option without a file name, the compiler creates an
MDT file for each C source file that you give on the command line. Each MDT
file has the base name of the source file and the .MDT extension.

Generally, when you compile with /Gi, only the changed functions in each C
source file are recompiled. The entire file is recompiled only if a change
affects the entire program.

See Section 4.3.16 in Part 2, "Reference to QuickC Tools," for details about
incremental compilation and the /Gi option.


Example

    QCL /GiASC.MDT alpha.c num.c

The example above compiles the changed portions of the files ALPHA.C and
NUM.C. It creates a single .MDT file named ASC.MDT into which it writes
change information for both source files.


1.4.3  Optimizing Programs

"Optimizing" a program is the process of making the program, or a part of
the program, as fast or as small as possible. The following QCL options can
help with this process:


Option                            Effect
────────────────────────────────────────────────────────────────────────────
/O, /Ot                           Optimizes the program for execution time
                                    rather than code size. The compiler
                                    makes the executable file faster, but it
                                    does not make the file size as small as
                                    possible.

/Ol                               Optimizes loops in your program. This
                                    option makes the executable file run
                                    faster.

/Gs                               Turns off stack-checking routines in
                                    your program. This option reduces the
                                    size of the executable file, but it may
                                    cause stack-overflow errors to go
                                    undetected.

/Ox                               Performs all possible speed
                                    optimizations. This option combines the
                                    effects of the /Ot, /Ol, and /Gs
                                    options.

/Od                               Does not optimize your program. This
                                    option speeds compilation, although it
                                    may result in a slightly slower
                                    executable file.

You may combine the /O options on the command line, specifying more than one
letter following /O. For instance, /Olt optimizes loops and execution time.
If the letters conflict, QCL uses the last one in the list.


1.4.4  Naming Output Files

Use the following options to name the object and executable files that QCL
creates. Note that file names must immediately follow the options, with no
intervening spaces.

Option                            Effect
────────────────────────────────────────────────────────────────────────────
/Foobjfile                        Gives the name objfile to the object
                                    file. You can give more than one /Fo
                                    option; each option applies to the next
                                    C source-file name on the command line.
                                    For example,

                                    QCL /FoOBJ1 SRC1.C SRC2.C

                                    compiles SRC1.C, creating an object file
                                    named OBJ1.OBJ, then compiles SRC2.C,
                                    creating an object file named SRC2.OBJ.

                                    If you give objfile without an extension,
                                    QCL automatically appends the .OBJ
                                    extension to the file name. If you give
                                    a complete path name with objfile, QCL
                                    creates the object file in that path.
                                    For example,

                                    QCL /Fo\MODS\OBJ1.OBJ SRC1.C

                                    compiles SRC1.C, creating an object file
                                    named OBJ1.OBJ in the \MODS directory.
                                    If you give only a drive or directory
                                    specification, the specification must
                                    end with a backslash ( \ ) so that QCL
                                    can distinguish it from a file name.

/Feexefile                        Gives the name exefile to the executable
                                    file. If you give exefile without an
                                    extension, QCL automatically appends the
                                    .EXE extension to the file name. If you
                                    give a complete path name with exefile,
                                    QCL creates the executable file in that
                                    path. If you give a path specification
                                    without a file name, the path
                                    specification must end with a backslash
                                    ( \ ) so that QCL can distinguish it
                                    from a file name.

If you don't tell it otherwise, QCL names output files as follows:

Type of File                      Default
────────────────────────────────────────────────────────────────────────────
Object                            Same base names as the original C source
                                    files with extensions of .OBJ. For
                                    example, if you compile a C source file
                                    named LEX.C, QCL creates an object file
                                    named LEX.OBJ.

Executable                        Same base name as the first file name on
                                    the command line plus an extension of
                                    .EXE. For example,

                                    QCL LEX.C GENCOD.OBJ OPTIMIZ

                                    creates an executable file named LEX.EXE
                                    by compiling LEX.C (creating LEX.OBJ),
                                    then linking LEX.OBJ, GENCOD.OBJ, and
                                    OPTIMIZ.OBJ.


1.4.5  Turning Off Language Extensions

QuickC supports keywords and syntax that are additions to the standard C
language. The /Za option tells the compiler to treat such Microsoft-specific
keywords as ordinary identifiers and to display error messages if your
programs use any other extended-language features.

Compile with the /Za option if you plan to port your programs to
environments that don't recognize Microsoft extensions to the C language, or
if you want to ensure that your programs are strictly compatible with the
ANSI (American National Standards Institute) definition of the C language.
Microsoft extensions include the _near, _far, _huge, _cdecl, _fortran, and
_pascal keywords, as well as several usages of standard C constructs that
are not defined in the ANSI standard. (See Section 4.3.35, "/Ze, /Za," in
Part 2 for more information about these extensions.)


1.4.6  Debugging and Syntax Checking

Several QCL options are useful when you want the compiler to check the
syntax of your program, or when you want to track down logic errors using
the debugger built into the QuickC environment (or other Microsoft
debuggers). These options fall into three categories:


    1.  Checking syntax

    2.  Setting warning levels

    3.  Compiling for a debugger



1.4.6.1  Checking Syntax

If you want to make sure that your program is free from syntax errors
without compiling and linking the program, compile it with the /Zs option.
This option tells the QCL command to display error messages if your program
has syntax errors. QCL doesn't create object or executable files.


1.4.6.2  Setting Warning Levels

You may get warning messages during compilation if your program has problems
that aren't serious enough to stop the compiling process. You can easily
identify a warning message because it begins with the word "warning" and has
"C4" as the first two characters in the error number.

The "warning level" options, /w and /W0 through /W4, allow you to suppress
warning messages for certain classes of problems. In general, the lower the
warning level, the less strict the compiler is about flagging possible
errors in your program. You might want to use a lower warning level if
you're intentionally using the flexibility of C in some operations and you
want to suppress warnings about these operations.

The warning-level options are described below:

Option                            Effect
────────────────────────────────────────────────────────────────────────────
/W0, /w                           Turns off all warning messages.

/W1                               Displays severe warning messages. (This
                                    is the level of warnings you get by
                                    default.)

/W2                               Displays all /W1 warnings plus warnings
                                    for problems such as functions without a
                                    declared return type, functions that
                                    have a return type other than void and
                                    don't have a return statement, and data
                                    conversions that cause loss of precision.

/W3                               Displays all /W2 warnings, plus warnings
                                    for function calls that precede their
                                    function prototypes in the source code.

/W4                               Displays all /W3 warnings, plus warnings
                                    for any non-ANSI constructs. The /W4
                                    option is similar to the /Za option,
                                    which gives error messages and aborts
                                    the compilation if non-ANSI features are
                                    used.

/WX                               Treats all warnings as fatal errors. If
                                    there are any warning messages, the
                                    compilation aborts and no object file is
                                    produced.

Appendix D lists all warning messages in order of error number. The
description of each message indicates the warning level that must be set in
order for the message to appear.


1.4.6.3  Compiling for a Debugger

You must compile your program with one or more of the following QCL options
if you plan to debug it within the QuickC environment or with another
Microsoft debugger:

Option                            Effect
────────────────────────────────────────────────────────────────────────────
/Zi                               Puts information needed for debugging
                                    into the program. Use /Zi if you plan to
                                    debug your program with the QuickC
                                    debugger or with the Microsoft
                                    CodeView(R) window-oriented debugger
                                    provided with other Microsoft language
                                    products.

/Zd                               Puts limited symbolic information in the
                                    object file. Use /Zd if you plan to
                                    debug your program with SYMDEB, the
                                    Microsoft Symbolic Debug Utility that
                                    was shipped with earlier versions of
                                    Microsoft language products.

/Zr                               Checks for null or out-of-range pointers
                                    in your program. Optional if you plan to
                                    debug with the QuickC debugger.


1.4.7  Controlling the Preprocessor

The QCL command provides several options that control the operation of the
QuickC preprocessor. These options allow you to define macros and manifest
(symbolic) constants from the command line, change the search path for
include files, and stop compilation of a source file after the preprocessing
stage to produce a preprocessed source-file listing.


1.4.7.1  Defining Constants

The C preprocessor directive #define defines a name for a constant or for C
program text. Wherever the name appears in your program, the preprocessor
substitutes the text you've defined for that name.

You can use the /D option to define constants from the QCL command line.
This option has the form

/Didentifier=string

or

/Didentifier=number

The identifier is the name you're defining; string or number is the text or
numeric value that is substituted for the name. The string must be in double
quotation marks if it includes spaces.

You can leave off the equal sign and the string or number. If you do, the
identifier is defined and its value is set to 1. You can use this format
when you need to define an identifier but do not care what its value is. For
example, /DCREATE defines an identifier named CREATE and sets it equal to 1.


If you've defined a number for identifier, you can "turn off" the definition
by using the following form of the /D option:

/Didentifier=

When you compile with this form, the identifier is no longer defined within
your program and no value is substituted for it.

QCL allows you to define up to 15 constants using the /D option for each
constant. You may be able to define as many as 20, depending on the other
options you specify. (See Section 1.4.7.4, "Removing Predefined
Identifiers," for more information about the number of constants you are
allowed to define.)


1.4.7.2  Searching for Include Files

The QuickC preprocessor directive

#include filename

tells the QuickC preprocessor to insert the contents of filename in your
source program, beginning at the line where the directive appears. Include
files pro-vided with Microsoft QuickC contain prototypes of standard C
library functions and the constants used by these functions. If filename is
enclosed in angle brackets (< >), the preprocessor looks for the file in the
directories given by the INCLUDE environment variable. If filename is
enclosed in quotation marks (" "), the preprocessor looks for the file first
in the current directory and then in the directories specified by the
INCLUDE variable. (Enter the SET command at the DOS prompt to see the
INCLUDE variable and the directories it specifies.)

Use the following options to override the usual search order without
changing the value of the INCLUDE variable:

Option                            Effect
────────────────────────────────────────────────────────────────────────────
/X                                Tells the preprocessor not to search for
                                    include files in the directory given by
                                    the INCLUDE variable.

/I directory                      Tells the compiler to search the given
                                    directory for include files before it
                                    searches the directories given by the
                                    INCLUDE environment variable. You can
                                    give more than one /I option, each
                                    specifying a directory. Directories are
                                    searched in the order in which they
                                    appear on the command line.


1.4.7.3  Creating Preprocessor Listings

If you want to see output from the QuickC preprocessor, give one or more of
the following options on the QCL command line:

Option                            Effect
────────────────────────────────────────────────────────────────────────────
/E                                Writes preprocessor output to the
                                    standard output device (your screen,
                                    unless you redirect output to another
                                    device or to a file). The /E option also
                                    inserts #line directives in the output.
                                    The #line directives renumber the lines
                                    of the preprocessed file so that, if you
                                    recompile the preprocessed file, the
                                    errors generated during later stages of
                                    processing refer to the original source
                                    file rather than to the preprocessed
                                    file.

/P                                Writes preprocessor output to a file and
                                    inserts #line directives in the output
                                    file. The preprocessor gives the file
                                    the base name of your C source file and
                                    an extension of .I.

/EP                               Writes preprocessed output to the
                                    standard output device but does not
                                    insert #line directives.

/C                                Leaves comments in the preprocessed
                                    output. Normally, the preprocessor
                                    strips comments from the source file.
                                    This option has an effect only if you
                                    also give the /E, /P, or /EP option.


1.4.7.4  Removing Predefined Identifiers

The QuickC compiler automatically defines certain identifiers, which
represent conditions such as the current operating system or memory model.
Your programs may use these identifiers along with the QuickC preprocessor
directives #if, #ifdef, #ifndef, #else, #elif, and #endif to tell the
compiler to "conditionally compile" portions of the program. For example,
the #ifdef directive tells the compiler to compile subsequent code only if a
given identifier is defined. Similarly, the #ifndef directive tells the
compiler to compile subsequent code only if a given identifier is not
defined. (For more information about preprocessor directives, see Chapter 7,
"Preprocessor Directives," in C For Yourself.)

The predefined identifiers are as follows: _QC, MSDOS, M_I86, M_I86mM,
M_I8086, M_I286, NO_EXT_KEYS, and _CHAR_UNSIGNED. (For more information on
how and when these identifiers are defined, see Table 4.5, "Predefined
Names," in Section 4.3.31.) If you don't use these identifiers for
conditional compilation, you might want to remove their definitions from the
program. For each predefined identifier that you remove, you can define an
additional identifier (over the default limit of 15) with the /D option on
the QCL command line.

The following options turn off predefined identifiers:

Option                            Effect
────────────────────────────────────────────────────────────────────────────
/U identifier                     Turns off the definition of identifier

/u                                Turns off the definition of all
                                    predefined identifiers


1.4.8  Compiling for Specific Hardware

QuickC creates executable programs that run on any processor in the 8086
family, including the 8086/8088, 80186, 80286, 80386, and 80486.

If your programs will always run on machines with 80186 or 80286 or higher
processors, or on machines with coprocessors, you can compile your programs
with the following options to take advantage of the specific hardware
configuration:

Option                            Effect
────────────────────────────────────────────────────────────────────────────
/G1                               Uses the 80186 instruction set for your
                                    program. You cannot run the program on
                                    machines with 8088 or 8086 processors.

/G2                               Uses the 80286 instruction set for your
                                    program. You cannot run the program on
                                    machines with 8088, 8086, or 80186
                                    processors.

/FPi87                            Handles math for floating-point types (
                                    float and double) by generating
                                    instructions for an 8087 or 80287 math
                                    coprocessor. This reduces the size of
                                    your program; however, the program must
                                    be run on a system with a coprocessor
                                    present.

The /G2 and /FPi87 options are the most commonly used options for
hardware-specific compilation, but others are available. See Sections 4.3.12
and 4.3.13 for details.


1.4.9  Choosing Memory Models

The "memory model" your program uses determines how many 64K (kilobytes)
segments the compiler allocates for its data and code. Ordinarily, you don't
need to choose the memory model explicitly if your program's code can fit
into one 64K segment and your program's data can fit into one 64K segment.
This memory allocation, called the small memory model, is the default used
by the QCL command.

If your program exceeds the default limit for code or data, you must use one
of the other memory models. The following list summarizes the options for
the memory model:

Option                            Effect
────────────────────────────────────────────────────────────────────────────
/AT                               Tiny model: provides one 64K segment for
                                    both data and code. The compiler
                                    produces a .COM file instead of a .EXE
                                    file.

/AS                               Small model: provides one 64K segment
                                    for data and one 64K segment for code.
                                    No one data item can exceed 64K. This is
                                    the most efficient model for QuickC
                                    programs. QCL uses this option
                                    automatically if you don't give a
                                    memory-model option, so you never need
                                    to give this option explicitly.

/AM                               Medium model: provides one 64K segment
                                    for data and multiple 64K segments for
                                    code. No one data item can exceed 64K.
                                    This is the most efficient model if your
                                    program exceeds the 64K default limit
                                    for code.

/AC                               Compact model: provides multiple 64K
                                    segments for data and one 64K segment
                                    for code. No one data item can exceed
                                    64K. This is the most efficient model if
                                    your program exceeds the 64K default
                                    limit for data.

/AL                               Large model: provides multiple 64K
                                    segments for data and for code. No one
                                    data item can exceed 64K.

/AH                               Huge model: same as large model, except
                                    that individual data items can be larger
                                    than 64K.

Although memory models give you additional flexibility in dealing with large
programs, you must use them with care to avoid problems in your programs.
See Section 4.3.1 or Appendix B for further information about the use of
memory models.


1.4.10  Controlling the Linking Process

Several QCL options control the linking process rather than the compiling
process. You've already encountered one of these options: the /Fe option,
which renames the executable file. Here are the others:

Option                            Effect
────────────────────────────────────────────────────────────────────────────
/Fm «mapfile»                     Creates a map file showing program
                                    segments in order of appearance in the
                                    program. If you give mapfile without an
                                    extension, QCL automatically appends the
                                    .MAP extension to the file name. If you
                                    give a complete path name with mapfile,
                                    QCL creates the map file in that path.
                                    For example,

                                    QCL /Fm\MODS\MAP1.MAP SRC1.C

                                    compiles and links SRC1.C, creating a
                                    map file named MAP1.MAP in the \MODS
                                    directory. If the path specification
                                    lacks a file name, it must end with a
                                    backslash ( \ ) to distinguish it from a
                                    file name.

                                    The mapfile argument is optional; if you
                                    don't specify a new name, the linker
                                    gives the map file the same base name as
                                    the executable file, with an extension
                                    of .MAP. For example,

                                    QCL /Fm  MOD1.C MOD2.C

                                    creates an executable file named
                                    MOD1.EXE and a map file named MOD1.MAP.

/F number                         Sets the stack size to the given number
                                    of bytes. The number may be in decimal,
                                    octal, or hexadecimal. (As in C programs,
                                    octal numbers start with the prefix 0
                                    and hexadecimal numbers with the prefix
                                    0x.) If you don't give this option, the
                                    executable file uses a 2K stack. Use
                                    this option if your program gets
                                    stack-overflow errors at run time.

See Sections 4.3.8 - 4.3.10 for detailed information on these options and on
map files.

    The /link option

Another way of controlling the linking process is to use the /link option on
the QCL command line. The /link option allows you to specify QLINK command
options─not QCL options─without invoking the linker separately. On the QCL
command line, the /link option must follow the source and object files and
all QCL options. QCL passes directly to the linker the options that follow
/link. These options are described in Section 1.5.2, as well as in Section
5.4.


Example

    QCL /FPi87 /Fm SRC1.C SRC2 /link /INF

In the example, the /Fm and /FPi87 options apply to the QCL command and the
/INF option applies only to the linker. As a result of this command line,
QCL compiles SRC1.C to run on an 8087 or 80287 processor, then passes
SRC1.OBJ and SRC2.OBJ to the linker. The /Fm option to QCL causes the linker
to create a map file named SRC1.MAP. The /INF option, which applies only to
the linker and not to QCL, causes the linker to display information about
the linking process.


1.4.11  Other QCL Options

QCL supports a large number of options besides the ones already described,
which control all aspects of the compilation process. Some of the more
commonly used options are described below:

Option                            Effect
────────────────────────────────────────────────────────────────────────────
/Gc                               Calling-convention option. Uses the
                                    FORTRAN/Pascal naming and calling
                                    conventions for functions in the program.
                                    Compile with this option if you want to
                                    call routines that use the Microsoft
                                    Pascal or Microsoft FORTRAN calling
                                    conventions or if you need to save space
                                    in the executable file. (See Section
                                    4.3.14 for more information about the
                                    effects of this option.)

/Gt«number»                       Threshold option. Tells the compiler to
                                    allocate data items larger than number
                                    in a new data segment. If you give this
                                    option with no number, QCL allocates
                                    items larger than 256 bytes in their own
                                    segment. If you don't give this option,
                                    QCL allocates items larger than 32,767
                                    bytes in their own segment.

                                    This option applies if you compile with
                                    the compact (/AC), large (/AL), or huge
                                    (/AH) memory model. See Appendix B for
                                    more information about memory models and
                                    allocation.

/NTtextsegname                    Name-text-segment option. Assigns the
                                    given name to the text segment. The
                                    space is optional between /NT and
                                    textsegname. The text segment contains
                                    the program code for the entire program
                                    (if you compile with the /AS option, the
                                    /AT option, the /AC option, or no
                                    memory-model option) or for the module
                                    you are compiling (if you compile with
                                    the /AM, /AL, or /AH option).

/Zl                               Library options. Tells the compiler not
                                    to put the name of the appropriate
                                    combined library in the object file. Use
                                    this option to compile modules that you
                                    want to put in a library with the LIB
                                    utility.

/Zp«number»                       Pack option. Stores structure members
                                    after the first on number-byte
                                    boundaries. The number argument, if
                                    given, may be 1, 2, or 4; if it isn't
                                    given, QCL assumes a value of 2. This
                                    option may reduce the size of executable
                                    files, although it may also slow program
                                    execution.

See Section 4.3 for descriptions of all the QCL options.


1.5  Invoking the Linker Directly: The QLINK Command

If you are building a large program composed of many source files, you may
prefer to compile the source files in one step, and then link the resulting
object files in a separate step. For example, in the first step, you would
compile your C source files as shown below:

    QCL /c SOURCE1.C SOURCE2.C

Then, in the second step, you would link the resulting object files, plus
any additional object files or libraries, as shown below:

    QCL SOURCE1 SOURCE2 GRAPHICS.LIB

As illustrated in the second step, if you give only object files or
libraries on the QCL command line, the QCL command simply passes the object
files and libraries to the linker.

Instead of using the QCL command to link, you can invoke the linker directly
by entering the QLINK command. Because the linker prompts you for any input
it needs, using QLINK makes it easier to specify file names and options; you
don't need to enter everything on the command line, although you may do so
if you wish.

The remainder of this section explains how to use the QLINK command to link
object files and libraries.


1.5.1  Giving Input to the QLINK Command

The simplest way to invoke the linker directly is to give the command

    QLINK

If you don't give any other information on the command line, QLINK prompts
you for input. The following list shows how to respond to each prompt:

Prompt                            Response
────────────────────────────────────────────────────────────────────────────
Object Modules:                   The names of all object files that you
                                    want to link, separated by plus signs.
                                    If all the names do not fit on one line,
                                    type a plus sign as the last character
                                    on the line. QLINK repeats the prompt on
                                    the next line, and you can type
                                    additional object-file names.

                                    Type a library name in response to this
                                    prompt if you want to include the entire
                                    library in the executable file. Make
                                    sure the library name has an extension
                                    of .LIB. (If you type the library name
                                    in response to the "Libraries:" prompt
                                    below, QLINK places in the executable
                                    file only the library modules that are
                                    called in your source files.)

Run File:                         The name of the executable file that you
                                    want to create. If you press ENTER
                                    without typing a name, QLINK uses the
                                    base name of the first object file you
                                    gave plus the extension .EXE. This name
                                    is shown in brackets in the prompt.

List File:                        The name of the map file, which shows
                                    segments in your program. If you press
                                    ENTER without typing a name, QLINK
                                    doesn't create a map file. If you enter
                                    a name without an extension, QLINK adds
                                    the .MAP extension automatically.

Libraries:                        The names of libraries other than the
                                    standard combined libraries that you
                                    want to link with the object files. If
                                    you enter a library name without an
                                    extension, QLINK assumes the extension
                                    .LIB. If you enter more than one library
                                    name, put a plus sign between each
                                    library name and the next.

You can supply linker options as part of the response to any prompt. See
Section 1.5.2, "QLINK Options," for a list of commonly used options.

    Input on the command line

If you prefer, you can give all your input to QLINK on the command line. The
QLINK command line has the form shown below:

(This figure may be found in the printed book.)

Commas must appear as shown above to separate the names of the different
files. You may type a semicolon to terminate the command line anywhere after
the list of object files. The semicolon tells QLINK to use defaults for the
remaining files. QLINK options may appear anywhere on the command line.

The prompts previously described correspond to the command line as follows:
"Object Modules" is equivalent to objfiles, "Run File" to exefile, "List
File" to mapfile, and "Libraries" to libraries.

    Input in a response file

QLINK allows you one other alternative for providing input. You can enter
responses for all prompts in a file, then invoke QLINK with the following
command:

    QLINK @responsefile

Replace responsefile with the name of the file that contains your responses.
The responses should look the same as if you were typing them in response to
prompts. For example, type all object-file names on the first line, the
executable-file name on the second line, and the map-file name on the third
line. Use a plus sign at the end of a line to continue a response on the
next line. Leave a blank line in the file if you want QLINK to use the
default for a prompt. Place QLINK options at the end of any response or
place them on one or more separate lines.


1.5.2  QLINK Options

QLINK options allow you to control the operation of the linker. If you're
using the QCL command to link, give these options after the /link option on
the command line. If you're using the QLINK command to link, these options
may appear anywhere on the command line. QLINK options must be preceded by a
slash.

Not all QLINK options are applicable to QuickC programs. Some options are
useful only for assembly-language programs. This section describes only the
options that are useful for QuickC programs. See Chapter 5, "QLINK," for a
complete list of options.

    Case sensitivity

QLINK options are not case sensitive, so you can type any combination of
uppercase and lowercase letters for each option.

    Abbreviations

Because some QLINK options have long names, QLINK allows you to abbreviate
each name. The abbreviation must include enough continuous letters to
distinguish the option from others. Letters that you can leave off are
surrounded by brackets in the following sections. In general, this book
refers to QLINK options by their shortest possible abbreviations.

    Numerical parameters

Some QLINK options take numbers as parameters. You may specify the numbers
in decimal, hexadecimal, or octal. As in C programs, hexadecimal numbers are
identified by the prefix 0x and octal numbers by the prefix 0.

    Help with QLINK options

If you need help with QLINK options, use the following command:

    QLINK /help

The linker responds by displaying a list of all the available options.


1.5.2.1  Controlling the Linking Process with Options

Use the QLINK options described below to control the linking process:

Option                            Effect
────────────────────────────────────────────────────────────────────────────
/BA«TCH»                          Tells the linker to continue processing
                                    if it can't find one of the files you've
                                    given, rather than stop processing and
                                    prompt you. Also prevents QLINK from
                                    displaying its program banner and
                                    echoing the contents of response files
                                    on standard output.

                                    Use this option in batch files or NMAKE
                                    description files if you're building
                                    large executable files and don't want
                                    the linker to stop processing if it
                                    can't find a file it needs.

/INC«REMENTAL»                    Prepares the program for subsequent
                                    incremental linking, which links only
                                    the object files that have changed since
                                    the last link. This is significantly
                                    faster than regular linking. The /PADC
                                    and /PADD options, used for padding code
                                    and data, should also be specified when
                                    you use this option. This option is
                                    incompatible with the tiny memory model
                                    and with the /E (Pack .EXE file) option.


/INF«ORMATION»                    Tells the linker to display information
                                    about the linking process, including the
                                    linking phase and the name of each
                                    object file being linked.

/M«AP»                            Includes a full public-symbol listing in
                                    the map file.

/NOD«EFAULTLIBRARYSEARCH» «:      Tells the linker not to search the
filename»                         standard C combined libraries to find C
                                    library functions. If you use this
                                    option, you should explicitly specify
                                    the name of a standard combined library.


/PAU«SE»                          Tells the linker to pause before it
                                    creates the executable file and to
                                    display a message. This allows you to
                                    insert a new disk to hold the executable
                                    file.

                                    If you're running on a machine without a
                                    hard disk, you might want to create the
                                    executable file on a different removable
                                    disk. In this case, you would swap the
                                    current disk for the new disk before
                                    creating the executable file. If QLINK
                                    displays the message

                                    Temporary file  tempfile  has been
                                    created.

                                    Do not change diskette in drive  letter.

                                    you should terminate your link session,
                                    copy the temporary file named tempfile
                                    to the disk where you want to create the
                                    executable file, and enter the QLINK
                                    command again.


1.5.2.2  Optimizing the Executable File

The following QLINK options make the executable file faster, smaller, or
both:

Option                            Effect
────────────────────────────────────────────────────────────────────────────
/E«XEPACK»                        Compresses the executable file. This
                                    option reduces the program's size and
                                    load time. However, you cannot use the
                                    QuickC or CodeView debugger to debug the
                                    program.

/F«ARCALLTRANSLATION»             Reduces the size of the executable file
                                    and increases its speed by optimizing
                                    far calls to procedures in the same
                                    segment as the calling procedure.

/PACKC«ODE»«:number»              Given with the /F option, improves the
                                    efficiency of medium-, large-, and
                                    huge-model programs by grouping
                                    neighboring code segments.

/PACKD«ATA»«:number»              Improves the efficiency of compact- and
                                    large-model programs by grouping
                                    neighboring data segments.


1.5.2.3  Modifying the Executable File

You can use the following QLINK options to modify the executable file (for
example, to specify the maximum number of segments or set the stack size):

Option                            Effect
────────────────────────────────────────────────────────────────────────────
/CP«ARMAXALLOC»:number            Sets the maximum number of 16-byte
                                    paragraphs needed by the program to
                                    number. The number may be any decimal,
                                    octal, or hexadecimal number in the
                                    range 1- 65,535 decimal.

/SE«GMENTS»:number                Sets the maximum number of segments a
                                    program can have to number. The number
                                    may be any value in the range 1-3,072
                                    decimal. If you don't give this option,
                                    a program may have no more than 128
                                    segments.

/ST«ACK»:number                   Sets the stack size to number bytes. The
                                    number may be any decimal, octal, or
                                    hexadecimal number in
                                    the range 1- 65,535 decimal. If
                                    you don't give this option, the stack
                                    is 2K.


1.5.2.4  Other QLINK Options

The QLINK options described in this chapter are those most typically used
when linking QuickC programs. The linker supports additional options,
including several that apply only to assembly-language programs. For
complete information on all QLINK options, see Chapter 5, "QLINK," in Part 2
of this manual.






Chapter 2  Maintaining Software Libraries with LIB
────────────────────────────────────────────────────────────────────────────

The Microsoft Library Manager (LIB) lets you create and maintain object-code
libraries. You can use the library manager to


    ■   List the contents of a library

    ■   Modify the contents of an existing library

    ■   Copy object code from the library

    ■   Create a new library


This chapter gives you an introduction to libraries and then explains how to
perform each of the tasks listed above.


2.1  Why Use a Library?

    Object modules

An "object-code library" is an organized collection of object code; that is,
a library contains functions and data that are already assembled or compiled
and are ready for linking. The structure of a library supports the mass
storage of common procedures─procedures called by a variety of programs.
Each library consists of components. These components, called "object
modules" (or sometimes just "modules"), can be added, deleted, changed, or
copied. When you give the linker a library as input, the linker efficiently
scans the library and uses only the modules needed by the program.

Object-code libraries are typically used for one of three purposes:


    1.  To support high-level languages. Languages, including C, BASIC, and
        FORTRAN, perform input/output and floating-point operations by calling
        standard support routines. Because the support routines are available
        in a  library, the compiler never needs to regenerate code for these
        routines. Libraries that contain standard support routines are called
        "standard libraries."

    2.  To perform complex and specialized activities, such as data-base
        management or advanced graphics. Libraries containing such routines
        are often sold by third-party software vendors or are provided by the
        makers of the compiler (in the case of graphics libraries for the
        Microsoft QuickC Compiler).

    3.  To support your own work. If you have created routines that you find
        useful for a variety of programs, you may want to put these routines
        in a library. That way, these routines do not need to be recoded or
        recompiled. You save development time by using work you have already
        done.



2.2  The LIB Command

The LIB command has the form shown below:

(Please refer to the printed book.)

(This figure may be found in the printed book.)

The items in italics are different pieces of input (described below) that
you must give on the LIB command line:


    ■   The oldlibrary field gives the name of a library. Object-code
        libraries typically have names that end with .LIB. You specify a
        library in this field whenever you use LIB.

    ■   The options field specifies one or more LIB options. For most tasks,
        you won't need to use any of these options. The options are described
        in Chapter 6, "LIB," in Part 2 of this manual.

    ■   The commands field gives the commands that modify the contents of the
        library. Commands are described in Section 2.4, "Modifying the
        Contents of a Library."

    ■   The listfile field specifies a file into which LIB puts a list of the
        library's contents. The next section tells how to list the contents of
        a library.

    ■   The newlibrary field specifies a name for the modified library if the
        commands you give change an existing library. See Section 6.1.1.5,
        "Output Library," for more information on this field.



2.3  Listing the Contents of a Library

You can use LIB to obtain a symbol listing for any object-code library.
Listings are useful because they give the exact names of modules and of
"public symbols," which are names of functions and global variables that can
be referenced throughout the program. You may need a listing if you want to
modify a library, as described in the next section.

To list the contents of a library, you need to use only the oldlibrary field
and the listfile field. Use a semicolon (;) to terminate the command so that
LIB does not prompt you for additional input.

In the oldlibrary field, give the name of the library you want to examine.
You can enter a full path name or a file name without a path. If you do not
include a file extension, LIB assumes the default .LIB extension. Typically,
object-code libraries have a .LIB extension.

In the listfile field, give the name of the file in which you want the
listing to be placed. If you enter the name of a file that does not yet
exist, LIB creates the file. If you enter the name of a file that already
exists, LIB replaces the current contents of the file with the new listing.


For example, the following command line directs LIB to place a listing of
the contents of MYLIB.LIB into the file LISTING.TXT:

    LIB MYLIB, LISTING.TXT;

The listing file summarizes the contents of the entire library. Each listing
file contains two kinds of information, in this order:


    1.  A list of public symbols with corresponding modules for each

    2.  A list of modules with corresponding symbols for each


Modules, which are basic to the operation of LIB, are discussed in the next
section. For a more detailed description of listing files, see Section
6.1.1.4, "Cross-Reference-Listing File," in Part 2 of this manual.


2.4  Modifying the Contents of a Library

You can use LIB to alter the contents of any object-code library. There are
a number of reasons why you might want to do so. For example, if you work
with higher-level-language libraries, you may want to replace a standard
routine with

your own version of the routine. Or you may want to add a new routine to the
standard library so your routine is available along with the standard
routines.

LIB operations involve "object files" and object modules:

Item                              Description
────────────────────────────────────────────────────────────────────────────
Object file                       An independent file containing object
                                    code corresponding to one source file.
                                    An object file normally has a .OBJ file
                                    extension.

Object module                     A self-contained unit within a library,
                                    consisting of one or more routines. An
                                    object module in a library is in almost
                                    all respects identical to the
                                    corresponding object file. The object
                                    module, however, has no file extension
                                    or path because it is not a separate
                                    file.

The sections that follow discuss both items extensively. Remember: a unit of
object code in a library is called an object module; the corresponding unit
of code outside a library is stored in a file called an object file.


2.4.1  Modifying the Library

To modify an object-code library, carry out the following steps:


    1.  To add or replace an object module, first compile or assemble the new
        code. If the procedure you want to add is part of a program, copy the
        source code into its own file and compile or assemble it separately.

    2.  Add, delete, or replace the module with the command line

        LIB oldlibrary commands;

        in which commands consists of one or more LIB commands that use the
        syntax shown later in this section.


Note that in step 2 above, the command line does not use all the LIB fields.
You can, however, include a listfile if you want a file listing. You can
also use the newlibrary field to preserve old library contents. If you enter
a newlibrary, LIB places the updated library contents in newlibrary and
leaves the contents of oldlibrary unchanged. Otherwise, LIB updates the
contents of oldlibrary and saves the old contents in the file
oldlibrary.BAK.

You can use the library as input to the linker once the contents change. Any
routines you have added or replaced become part of the library and can be
called by your programs.


2.4.2  Adding a Module

To add an object file to a library, use the command

+file

in which file is the name of the object file you want to add as a module.
You can specify a complete path name for file if the object file is not in
the current directory. If the file-name extension is .OBJ, you can leave off
the extension; LIB assumes the .OBJ extension by default. LIB adds the
object module at the end of the library. The library contains only the base
name of the module without the .OBJ extension.

For example, the following command line adds the module PRINTOUT to the
library MYLIB.LIB, by copying the contents of the object file
\SOURCE\PRINTOUT.OBJ:

    LIB MYLIB +\SOURCE\PRINTOUT;

You can also add the entire contents of one library to another by specifying
a library name for file. Remember to enter a complete file name (including
extension) because LIB assumes that files in the commands field have the
.OBJ extension. For example, the following command line adds the complete
contents of the library SMALL.LIB to the library SUPER.LIB:

    LIB SUPER +SMALL.LIB;


2.4.3  Deleting a Module

To delete an object module from a library, use the command

-module

in which module is the name of a module already stored in the library. For
example, the following command deletes the module DELETEME from the library
BIGLIB.LIB:

    LIB BIGLIB -DELETEME;


2.4.4  Replacing a Module

To replace an object module within a library, use the command

- +module

in which module is the name of a module that is currently stored in the
library. The old copy of module is deleted from the library. The current
contents of  module.OBJ are copied into the library. For example, to replace
the QuickC small-model library version of printf() with your own version,
execute these steps:


    1.  Write your own version of printf(), and compile or assemble it.

    2.  Make sure that the resulting object file is named PRINTF.OBJ and that
        PRINTF.OBJ is located in the current directory. (If you look at a
        listing of the library, you will see that the public symbol for the
        printf() function is _printf(). The name of the module, however, is
        printf(). If you have any doubt about the exact name of an object
        module, get a listing of the library before trying to modify the
        library.)

    3.  Issue the following command line:

        LIB SLIBCE -+PRINTF;



You can combine any number of operations in the commands field. Spaces
between the commands are acceptable but not necessary. For example, the
following command line adds a new module (NEWFUN), replaces a current module
(OLDFUN), and deletes another current module (BYENOW):

    LIB MYLIB +NEWFUN -+OLDFUN -BYENOW;

In the example above, the files NEWFUN.OBJ and OLDFUN.OBJ serve as input for
the modules NEWFUN and OLDFUN, respectively.


2.4.5  Copying and Moving Modules from a Library

You can extract any object module from a library. The extracted object
module is copied into a .OBJ file with the same name as the module. For
example, if you extract a module named OLDFUN, LIB copies it into the object
file named OLDFUN.OBJ. If a file with that name already exists, its contents
are overwritten.

To copy a module into a .OBJ file, use the command

*module

in which module is the name of the module you wish to copy from the library.
The module is placed in the file module.OBJ.

For example, the following command line copies the printf() module from the
Microsoft QuickC small-model library and places the contents of this module
into the object file PRINTF.OBJ:

    LIB SLIBCE *PRINTF;

You can move a module out of a library with the following command:

-*module

Moving a module is similar to copying a module, in that LIB copies the
contents of the module into a file named module.OBJ. The move command (-*),
however, deletes the module from the library after copying it.


2.5  Creating a New Library

When you use LIB, creating a new object-code library is easy. You simply
combine two techniques:


    1.  In the oldlibrary field, enter the name of a file that does not yet
        exist.

    2.  In the command field, use the add command (+file) to list entries for
        the new library. (Technically, this step is not required; however, if
        you do not use the add command, the library will be empty.)


For example, if the file NEWLIB.LIB does not yet exist, the following
command line creates this file:

    LIB NEWLIB +MYPROC +MYFUN +PRINTIT;

The object files MYPROC, MYFUN, and PRINTIT provide the input for the new
library.


2.6  Other Ways of Using LIB

This chapter has covered the basic operations of the LIB utility so that you
can quickly begin to create and maintain your own libraries. For a complete
description of LIB, see Chapter 6, "LIB," in Part 2 of this manual. Some
additional features described in that chapter include the following:


    ■   How to make LIB case sensitive so that it treats Print and PRINT as
        two different module names.

    ■   How to specify alignment of modules within a library.

    ■   How to let LIB prompt you for command fields, rather than requiring
        you to enter them all on a single command line.

    ■   How to use a response file to give input to LIB. Response files are
        useful for giving unusually long command lines or for giving the same
        command line repeatedly.







Chapter 3  Maintaining Programs with NMAKE
────────────────────────────────────────────────────────────────────────────

The Microsoft Program-Maintenance Utility (NMAKE) helps to automate software
development and maintenance. Following instructions that you supply, NMAKE
determines whether a program is out-of-date and, if so, how to update it.
Your instructions list all the sources, include files, and libraries the
program depends on and specify the commands to update the program.

NMAKE, however, is not limited to updating programs. It can also perform
other actions, such as building distribution disks, cleaning up directories,
and so forth. Any procedure that requires the latest version of several
files is a good candidate for NMAKE. By using NMAKE for these operations
instead of performing them manually, you can avoid the headaches of invalid
source modules, old libraries, and forgotten include files.

You can use NMAKE in the following situations:


    ■   In program development, to update an executable file whenever any of
        the source or object files has changed

    ■   In library management, to rebuild a library whenever any of the
        modules in the library has changed

    ■   In a networking environment, to update the local copy of a file that
        is stored on the network whenever the master copy has changed


This chapter describes what NMAKE does, defines the terms you need to
understand, and tells you how to use NMAKE to manage your QuickC Compiler
projects. For detailed information, see Chapter 7, "NMAKE," in Part 2 of
this manual.


3.1  How NMAKE Works

NMAKE relies on a "description file" (sometimes called a "makefile") to
determine which files to update, when to update them, and what operations to
perform. The description file for a QuickC program lists the source and
header files needed to build each object file, and all the object files
needed to build the executable program. The description file tells NMAKE
whether changes have been made to source, header, or object files. If source
or header files have been changed, NMAKE recompiles the object file; if any
object files have been changed, NMAKE relinks the program. The description
file also contains the QCL commands that must be executed to build the
object files and the program.

Description files are made of several elements:


    ■   Description blocks, which tell NMAKE how to build files. See Section
        3.2.1, "Description Blocks," for further information.

    ■   Macros, similar to C macros, which provide a shorthand notation that
        allows you to change certain values when the file is processed. See
        Section 3.5.2, "Using Macros," for further information.

    ■   Inference rules, which tell NMAKE what to do in the absence of
        explicit commands. See Section 3.5.3, "Using Inference Rules," for
        further information.

    ■   Directives, which provide conditionals and other structuring
        techniques. See Section 3.5.4, "Using Directives," for further
        information.


A simple description block

All of these elements need not be present in every description file. For
many applications, a description file consisting of a single description
block is adequate. The example below shows a description file with only one
description block:

    program.exe : program.obj  sub1.obj #update program
    QCL program.obj sub1.obj

The first line of the description block is called the "dependency line." It
identifies the "target" to be updated (PROGRAM.EXE) and the "dependents"
that make up the target (PROGRAM.OBJ, SUB1.OBJ). If any of the dependents
has changed since the target was last modified, NMAKE rebuilds the target.
When NMAKE executes this description, it checks the date on which each of
the object files was last modified. If either has been modified since the
executable program was created, NMAKE executes the second line, which is
called the "command line." The QCL command in the above example relinks the
program.

What about the C source files?

Note that the target is an executable file (.EXE) and its dependents are
object files (.OBJ). You might wonder why the C source files PROGRAM.C and
SUB1.C do not appear in the description block. The reason is that NMAKE

assumes that .OBJ files depend on C source files and knows that it must
compile PROGRAM.C and SUB1.C to create PROGRAM.OBJ and SUB1.OBJ. How and why
NMAKE works this way are advanced topics covered in Section 3.5.3, "Using
Inference Rules." You don't need to understand inference rules to create
description files and use NMAKE.

Of course, if you prefer, you can make your target-executable files depend
on the C source files and use the QCL command to compile and link the
sources. It is usually preferable, however, to list the object files as
dependents.

The next section in this chapter, "Building a Simple Description File,"
shows how to construct description files, such as the one above, that
consist of a single block.


3.2  Building a Simple Description File

Before you invoke NMAKE, you need to create a description file. Since a
description file is simply a text file, you can use any text editor
(including the one in the QuickC environment) to create one. NMAKE places no
restrictions on the name of the description file, but always looks for a
file named MAKEFILE in the current directory unless you tell it otherwise.
See Section 3.3, "Invoking NMAKE," for more information on how NMAKE
identifies the description file.

Depending on the size of the project you are maintaining, your description
file may contain one or more description blocks. This section describes the
components of a description block and shows you how to build description
files that consist only of description blocks.


3.2.1  Description Blocks

Description blocks are the basic elements of description files. A
description block tells NMAKE how to update a target from a group of
dependents. Every description block consists of a dependency line, any
number of command lines, and optional comments. Figure 3.1 shows the
components of a description block.

(This figure may be found in the printed book.)


3.2.1.1  Dependency Lines

A dependency line typically lists one target and one or more of its
dependents. A colon (:) separates the target from the dependents.

Targets

The name of the target goes at the beginning of the line, with no tabs or
spaces preceding it. NMAKE creates the target in the current directory
unless you include a drive and path specification in its name. A dependency
line may contain more than one target, but at least one space must separate
each pair of names. Below are some example target names:

    test1.exe :

    c:\cprogs\test1.exe :

    test1.exe test2.exe :

The first example specifies the target TEST1.EXE in the current directory.
In the second, the target is built in the directory C:\CPROGS. The last
example lists two targets to be built from the same set of dependents.

Pseudotargets

All the targets shown above are executable files. A target, however, need
not be an executable file; in fact, it need not be a file at all. NMAKE
allows you to specify the following:

    UPDATE :

In this case, UPDATE is considered a "pseudotarget" because it is not a file
but simply a label for a set of dependents and commands. Pseudotargets are
useful for updating directories and copying groups of files. NMAKE always
considers pseudotargets out-of-date.

Specifying dependents

List the names of the dependent files on the same line as the target but
after the colon. Separate the dependent names by one or more spaces. A
target can have any number of dependents. If the names of all the dependents
do not fit on one line, use a backslash ( \ ) to end the line and continue
the list on the next line. This is NMAKE's standard method of line
continuation.

Dependent names, like target names, can contain drive and path
specifications. If you do not include a drive or path specification, NMAKE
looks for the dependents in the current directory. For example:

    mycprog.exe : mycprog.obj  \public\src\graphics.obj

    UPDATE : *.c \inc\*.h

The first example shows two dependents for MYCPROG.EXE. One of them is
MYCPROG.OBJ, for which NMAKE searches the current directory. The other is
GRAPHICS.OBJ, for which NMAKE searches the \PUBLIC\SRC directory. The second
example shows that the pseudotarget UPDATE depends on all the .C files in
the current directory and all the header files in the /INC directory.

Search paths for dependents

You can direct NMAKE to search for dependents in a sequence of other
directories by adding a search path enclosed in braces. NMAKE searches the
directories specified by the path if it cannot find the file in the current
directory. Separate each pair of directories in the path with a semicolon.
The backslash at the end of the path is optional. Consider the following:

    program.exe : program.obj {\me\cwork; q:\src\}tables.obj

This line lists two dependents for PROGRAM.EXE. The first, PROGRAM.OBJ, is
assumed to be in the current directory. For TABLES.OBJ, a search path is
specified. The search path causes NMAKE to look first in the current
directory, then in \ME\CWORK, and then in Q:\SRC until it finds the file. If
it cannot find the file, all is not lost; it relies on its inference rules
to build the file. (See Section 3.5.3 in this chapter for more information
on inference rules. For a more detailed description, see Section 7.2.4,
"Inference Rules.")


3.2.1.2  Command Lines

The command lines in a description block give the commands to be carried out
if a target is out-of-date with respect to any of its dependents. Commands
can be the names of programs, batch files, or any DOS commands─in short, any
command that can be issued on the DOS command line.

Rules for specifying commands

In the typical format of a description file, the commands are on separate
lines from the target and its dependents, one command per line. Each line
must start with one or more spaces or tab characters. If you forget the
space or tab, NMAKE assumes you are specifying a dependency line (or a
macro) and displays an error message. You may find it helpful to use a tab
to indent the line, making it easy to identify the commands that apply to
each target. (This book uses that convention.) For example:

    program.exe : program.obj sub.obj
    qcl program.obj sub.obj

The command line in the example above invokes QCL to link the two dependent
files into a single executable image.

If you prefer, however, you can put your commands on the same line as the
target and dependents. In that case, a semicolon must precede each command
to separate it from the previous item on the line, whether that item is a
dependent or another command. The following has the same effect as the
previous example:

    program.exe : program.obj sub.obj ; qcl program.obj sub.obj

If a command is too long to fit on one line, you can split it across two or
more lines with a backslash ( \ ), in the same way that you split a long
dependency list. For example:

    program.exe : program.obj sub1.obj sub2.obj sub3.obj
    qcl program.obj sub1.obj sub2.obj  \
        sub3.obj

Be sure that every line that is part of a command begins with a space or
tab.


3.2.1.3  Comments

You can put comments in your description files by using the number sign (#).
NMAKE ignores all the text between the number sign and the beginning of the
next line. Comments may appear anywhere in an NMAKE description file except
on a command line. You can place comment lines between the command lines,
but the number sign that starts the comment must be the first character on
the line with no spaces or tabs preceding it. The following example shows
the use of comments:

    #makefile for program.exe
    program.exe : program.obj sub1.obj sub2.obj
    qcl program.obj sub1.obj sub2.obj
    # program

The first comment documents the purpose of the file. The second causes NMAKE
to treat the word  program  as a comment. When NMAKE executes this
description, it will rebuild PROGRAM.EXE but will not run it.


3.2.1.4  Escape Characters

Some characters, such as the number sign (#), have a special meaning when
they appear in an NMAKE description file. If you want NMAKE to interpret a
character literally, and not with its special NMAKE meanings, you must
precede the character with the caret (^). The caret is an "escape
character," which means that when it immediately precedes a special
character, it causes the character to lose its special meaning.

For example, the number sign (#) denotes the start of a comment. To use it
in a file name, you must precede it with a caret to "escape" its special
meaning, as follows:

    winning^#.txt

NMAKE interprets the example as the file name  winning#.txt .

The following characters have special significance to NMAKE, so you must
precede them with a caret whenever you want NMAKE to interpret them
literally:

# ( ) $ ^ \ { } ! @

NMAKE ignores a caret that precedes any other character. In addition, carets
that appear within quotation marks are not treated as escape characters.


Examples

Assume you are developing a program named HANDLE. Your directories are
organized so that all your source files and object files are stored under
the current directory and your include files are in the \INC directory.
Consider the following description file:

    handle.exe : main.obj comm.obj \inc\comm.h
    QCL /Fehandle.exe main.obj comm.obj
    handle

The dependency line say that HANDLE.EXE should be updated if any of three
files change. Two of these files (MAIN.OBJ and COMM.OBJ) are object files;
the third (COMM.H) is an include file. If NMAKE determines that it must
create a new version of the target, it executes the QCL command. The QCL /Fe
option specifies the name HANDLE.EXE for the executable program. NMAKE
executes the new version of HANDLE.EXE after creating it.

If the current directory contains only the files for HANDLE.EXE, and none
for any other programs, the description file could be rewritten as follows:


    handle.exe : *.obj \inc\comm.h
    QCL /Fehandle.exe *.obj
    handle

NMAKE expands the wild cards in the dependent names when it starts to build
the target.


3.2.2  The CC Macro

The sample description files presented so far have contained only
description blocks─no macros, directives, or inference rules. For the most
part, you can get by without any of these features.

Before you use NMAKE with QuickC, however, you need to know about one
particular macro, CC. The predefined macro CC tells NMAKE which C compiler
to use when it tries to create .OBJ files from .C files. Recall that NMAKE
knows that .OBJ files depend on .C files, which is why only .OBJ files
appear in the examples up to this point. NMAKE implicitly compiles .C files
into .OBJ files, using the compiler specified by the CC macro.

As you may be aware, NMAKE is provided with both Microsoft C Professional
Development System and QuickC. For that reason, CC is predefined to invoke
the C compiler included with the Professional Development System, CL. You
must redefine CC to invoke QCL, the QuickC compiler.

To redefine the CC macro, add this line at the top of your description file:


    CC = qcl

No spaces or tabs can precede CC; it must be the first item on the line. The
spaces around the equal sign are optional.

Continuing with the example in Section 3.2.1.4, the description file would
look like the following:

    CC = qcl
    handle.exe : *.obj \inc\comm.h
    QCL /Fehandle.exe *.obj
    handle

This description block has the same effect as the earlier ones, except that
if any .OBJ files in the current directory must be updated from .C files, it
ensures that NMAKE will use the QuickC compiler to do it. The QCL command in
the example is independent of the CC macro; the command line explicitly
invokes QuickC to link the object files into an executable file.

Redefining CC in the TOOLS.INI file

As an alternative, you can redefine CC in TOOLS.INI, the
tools-initialization file. The TOOLS.INI file contains environment variables
and initial (default) settings for various utility programs. You may already
have a TOOLS.INI file; if not, you can create one with any text editor.

Items that apply to NMAKE appear in the file following the [nmake] tag. To
change the definition of the CC macro, add the following line after the tag:


    CC=qcl

Whenever you invoke NMAKE, the utility looks for TOOLS.INI first in the
current directory and then in the directory specified by the INIT
environment variable. To see what INIT is set to, type the SET command at
DOS command level.


3.3  Invoking NMAKE

You can invoke NMAKE in either of two ways:


    1.  By giving the NMAKE command and all options, macros, and targets on
        the DOS command line

    2.  By giving the NMAKE command and the name of a response file that
        contains all the options, macros, and targets


This section describes both methods.


3.3.1  Invoking NMAKE from the DOS Command Line

Under most circumstances you'll probably issue the NMAKE command from the
DOS command line. The command has the following format:

(This figure may be found in the printed book.)

The items in italics are optional arguments and are described below:


    ■   The options modify the action of the NMAKE command. The most commonly
        used NMAKE options are described in the section titled "NMAKE
        Options"; the complete set is covered in Chapter 7.

    ■   The macrodefinitions give text to replace macro names in the
        description file. Section 3.5.2, "Using Macros," introduces macros and
        explains how and when to use them. See Section 7.2.3, "Macros," for
        details.

    ■   The targets field lists one or more targets for NMAKE to build. If you
        do not specify a target, NMAKE builds only the first one in the file.
        You can find more information on targets in Section 3.2.1,
        "Description Blocks," and in Section 7.2.1. Because all the arguments
        are optional, the simplest form of the NMAKE command is just


    NMAKE

The default file MAKEFILE

When you invoke NMAKE with the preceding command, it looks in the current
directory for a file named MAKEFILE to use as the description file. If no
such file exists, it displays an error message.

You can specify an alternate description file by using the /F option,
described below in Section 3.4.1, "Controlling Input."


3.3.2  Invoking NMAKE with a Response File

For more complicated updates, and whenever the NMAKE command line exceeds
the DOS limit of 128 characters, you will need to create a response file.
The response file contains the options, targets, and macros you would type
on the DOS command line. It is not the same as the NMAKE description file;
instead, it is comparable to a QLINK or LIB response file.

To invoke NMAKE with a response file, issue the following command:

    NMAKE @responsefile

For responsefile, use the name of the file that contains the options,
targets, and macros you would otherwise type on the NMAKE command line.


3.4  NMAKE Options

NMAKE provides a rich set of options that control the descriptions it reads
as input, the details of its execution, and the messages it displays on
output. The following sections describe some of the most useful NMAKE
options. Section 7.3 covers all the options in detail.

Options immediately follow the NMAKE command on the DOS command line and
precede the name of the description file, if you supply one. NMAKE accepts
options in uppercase or lowercase letters, with either a slash ( / ) or a
dash (-) to introduce each option. For example, -F, /F, -f, and /f all
represent the same option. In options that take file-name arguments, for
example, /F and /X, the file name and the option must be separated by a
space.


3.4.1  Controlling Input

You can specify the description file from which NMAKE will take its input
with the /F option. This option has the following form:

/F filename

If you specify the /F option, NMAKE uses filename as the name of the
description file. The space separating /F and filename is required. In place
of a file name, you can enter a dash (-) to tell NMAKE to read the
description from standard input, typically your keyboard.

If you omit the /F option, NMAKE looks for a file named MAKEFILE in the
current directory. If no such file exists, it displays an error message.

────────────────────────────────────────────────────────────────────────────
NOTE

Unless you use the /F option, NMAKE always searches for the file MAKEFILE in
the current directory. Therefore, you should explicitly specify /F to avoid
unintentionally using MAKEFILE.
────────────────────────────────────────────────────────────────────────────

The following is an example of the /F option:

    NMAKE /F hello.mak

This command invokes the NMAKE utility and specifies HELLO.MAK, in the
current directory, as the description file.


3.4.2  Controlling Execution

The following options change the way NMAKE interprets the description file:


Option                            Effect
────────────────────────────────────────────────────────────────────────────
/A                                Builds all of the targets requested,
                                    even if they are not out-of-date.

/I                                Ignores exit codes returned by commands
                                    executed within a description file.
                                    NMAKE continues processing the
                                    description file despite the errors.

/N                                Displays the commands from the
                                    description file but does not execute
                                    them. Use this option to determine which
                                    targets are out-of-date without
                                    rebuilding them. You can also use it in
                                    debugging description files.

/T                                "Touches" any target files that are
                                    outdated. Touching a file causes its
                                    date of modification to be changed to
                                    the current date. It has no effect on
                                    the contents of the file.


3.4.3  Controlling Output

As NMAKE runs, it displays each command that it executes. It displays a
diagnostic message if it cannot find a file or command needed to complete a
description block or if any command returns an error. You can change the
type and number of messages that NMAKE returns by using the options below:

Option                            Effect
────────────────────────────────────────────────────────────────────────────
/C                                Suppresses the Microsoft copyright
                                    message and all nonfatal or warning
                                    messages.

/D                                Displays the modification date of each
                                    target or dependent file when it checks
                                    the date.

/P                                Prints all macro definitions and target
                                    descriptions.

/S                                Executes "silently"; does not display
                                    commands as they are executed.

/X filename                       Sends all error output to filename. A
                                    space must separate /X from filename.
                                    Specifying a dash (-) instead of a file
                                    name sends error output to the standard
                                    output device.


Examples

The following command invokes NMAKE with PHYSICS.MAK as the description
file:

    NMAKE /F physics.mak /N

The /N option tells NMAKE to read, but not to execute, any of the commands
within the file PHYSICS.MAK. NMAKE checks the modification dates on the
files and displays the commands it would execute if the /N option were not
present. Use this option to find out ahead of time what files are
out-of-date so you can estimate how long a build might take. You can also
use it in debugging description files.

After using the /N option to check what NMAKE would do, you might invoke it
with the command line below:

    NMAKE /F physics.mak /C /S

The /C option suppresses the NMAKE copyright message and any warning
messages. The /S option suppresses the display of commands. You will,
however, still see the copyright messages for any commands that NMAKE
invokes and the output those commands generate.





3.5  Building Complex Description Files

Most software projects can be maintained using the features already
described. However, description files for large projects may become
complicated and cumbersome, especially if each module is dependent on many
source and include files. Using NMAKE's advanced features, you can shorten
your description files and make them more powerful at the same time.

This section covers several of NMAKE's advanced features:


    ■   Special characters on command lines

    ■   Macros

    ■   Inference rules

    ■   Directives


Figure  shows a more complicated description file than those presented so
far.

(This figure may be found in the printed book.)


3.5.1  Using Special Characters to Modify Commands

NMAKE recognizes three special characters that modify its treatment of
commands. These characters give you additional control over the execution of
individual commands, whereas NMAKE's options apply to all the commands in
the description file.

The characters go before the command name and can be separated from the name
by one or more spaces, though they need not be. At least one space or tab
must precede the character on the line. To use two or three special
characters with a single command, put them one after the other on the
command line. The special characters are as follows:

Character                         Action
────────────────────────────────────────────────────────────────────────────
Dash (-)                          Turns off error checking for the command
                                    it precedes so that NMAKE continues
                                    executing if an error occurs. A dash
                                    followed by a number suspends error
                                    checking for error levels at the number
                                    and below.

At sign (@)                       Suppresses display of the command when
                                    it is
                                    executed.

Exclamation point (!)             Causes the command to be executed
                                    iteratively, once for each dependent
                                    file, if it uses one of the macros for
                                    dependent names. (The macros are
                                    described in the Section 3.5.2.)

Note that the dash (-) has the same effect as the /I option. Also, the "at"
sign (@) is similar to the /S option.


Examples

    beatles.exe : john.asm paul.c george.c ringo.c
    -QCL /c paul.c george.c ringo.c
    MASM john
    QLINK john paul george ringo, beatles.exe;

In the example above, the dash preceding the QCL command means that NMAKE
will attempt to execute the MASM and QLINK commands even if  errors occur
during compilation.

    beatles.exe : john.asm paul.c george.c ringo.c
    -@QCL /c paul.c george.c ringo.c
    MASM john
    @QLINK john paul george ringo, beatles.exe;

The description in this example has the same effect as that in the previous
example, except that neither the QCL nor the QLINK command is displayed when
it is executed.


3.5.2  Using Macros

You can use macros to streamline your description files. A "macro" is a name
that replaces other text in the description file in the same way that a
macro defined in a QuickC #define directive replaces other text in a
program. Wherever the name appears in the description file, NMAKE
substitutes the text associated with it. To change the meaning of the name,
you simply change the text assigned to it in the macro definition.

Macros are most useful in two situations:


    1.  To replace all or part of a file name so that a single NMAKE
        description file can be used to update more than one program.

    2.  To supply options for commands within the NMAKE description file. For
        example, you might define a macro to represent your usual debug
        options for the QCL command. Then, to compile with a different set of
        options, you need not edit the description file. You merely change the
        macro definition.


NMAKE provides two types of macros: predefined macros and macros you define.
This section shows how to use them.


3.5.2.1  Defining Your Own Macros

A "macro definition" tells NMAKE what text to substitute for a macro. You
can put macro definitions in the description file, on the NMAKE command
line, or in your TOOLS.INI file. In the description file, each macro
definition must be on a separate line. On the command line, macro
definitions follow any NMAKE options and precede any targets. In the
TOOLS.INI file, macro definitions appear in a section following the [nmake]
tag, each on a separate line, as described previously in Section 3.2.2, "The
CC Macro."

No matter where you put them, macro definitions take the following form:

macroname = string

The macroname is the name you use in the description file. A macro name can
consist of any alphanumeric characters and the underscore ( _ ) character.
The string is the text that replaces the macro name when the description
file is processed.

Macros on the command line

On the NMAKE command line, white space cannot appear on either side of the
equal sign because it causes DOS to treat the macro name and its definition
as separate tokens. In addition, if string contains any embedded white
space, you must enclose it in double quotation marks, as follows:

    my_macro="this string"

Alternatively, you can enclose the entire macro definition─macroname and
string─in double quotation marks. In that case, spaces can surround the
equal sign because DOS treats all the characters within quotation marks as a
single token. Thus, the following is also acceptable:

    "my_macro = this string"

Macros in the description file

In a description file, define each macro on a new line. The definition must
start at the beginning of the line with no preceding white space. NMAKE
ignores any white space surrounding the equal sign. Quotation marks are
unnecessary as well; if you use them, they will become part of the string.

This example defines a macro named  pname  and another named  t:

    pname = mycprog.exe

    t = this

To use a macro within a command or dependency line, specify its name in
parentheses preceded by a dollar sign ($), as follows:

$(macroname)

If you need to use a literal dollar sign in a description file, type it
twice ($$) or use the caret (^) escape character.

The lines below show how to refer to the macros defined in the previous
example. Note that if the name of a macro is only one character long, you
can omit the parentheses.

    $(pname)

    $t

Once you've defined a macro, the only way to remove its definition is to use
the !UNDEF directive. See Section 3.5.4, "Using Directives," for more
information.


Examples

A common use of macros is to specify the options for a command. For example,
the following description block uses the macro  copts  to represent QCL
options.

    picture.exe : picture.c graphics.c fileio.c
    qcl $(copts)  picture.c graphics.c fileio.c

Assuming the description file is named PICTURE.MAK, the command line might
be the following:

    NMAKE /F picture.mak copts="/C /P"

At execution time, NMAKE substitutes  /C /P  wherever  $(copts)  appears in
the description file. The result is the same as if the following description
were used:

    picture.exe : picture.c graphics.c fileio.c
    qcl /C /P  picture.c graphics.c fileio.c

Note that the /P option causes QuickC to create a preprocessor listing, and
the /C option retains the comments from the source files in the preprocessor
listing.


3.5.2.2  Predefined Macros

Some macros are predefined by NMAKE. You have already seen one of these, CC.
Some of the other predefined macros are described below. For a complete
list, see Section 7.2.3.3.

Macros for Program Names (CC, AS, MAKE)   - The CC macro, already
introduced, represents the C compiler command that NMAKE executes to create
object files from C source files. The AS macro is similar. It stands for the
name of the assembler that NMAKE executes when it needs to create object
files from .ASM sources. Both of these macros are predefined by NMAKE. You
can change their definitions in the description file, in the TOOLS.INI file,
or on the NMAKE command line. Their default definitions are

    CC = cl
    AS = masm

These two macros are primarily used in inference rules. (See Section 3.5.3,
"Using Inference Rules," or Section 7.2.4, "Inference Rules," for more
information.)

The MAKE macro is defined as the command you use to invoke NMAKE. Use this
macro, rather than the NMAKE command itself, to invoke NMAKE recursively
within a description file. Recursion is typically used in building large
software projects, such as compilers, and frequently involves the use of
conditional directives. (An example of the recursive use of NMAKE appears
later in this chapter in Section 3.5.4.2, "Conditional Directives.")

Macros for Target Names ($@, $*) - The $@ macro represents the full name of
the target, and the $* macro represents the base name of the target, which
is the full name with the extension deleted. These two macros are typically
used in inference rules, but for the sake of discussion, this section will
show their use in description files.

Consider the following description block:

    $(target) : picture.obj graphics.obj fileio.obj
    QLINK picture.obj graphics.obj fileio.obj, $@;
    $*

Assume NMAKE is invoked with the following command:

    NMAKE target=trees.exe

The command line supplies text for the macro  target, which sets the full
name of the target to  trees.exe. At execution time, NMAKE substitutes the
text for the macro as explained in Section 3.5.2. However, this file goes
one step further. Instead of repeating the user-defined  $(target)  macro as
the output of the QLINK command, it uses the predefined $@ macro. This macro
stands for the full name of the target and therefore has the same meaning as
    $(target). Thus, the QLINK command links the object files into  trees.exe.
In the last line of the file, the $* macro stands for the base name of the
target. This line causes  trees.exe  to be executed as a program.

NMAKE automatically substitutes for these macros. It picks up the target
name from its position on the dependency line in the description file. You
cannot assign a value to a predefined macro on the command line.

NMAKE provides additional predefined macros that you can use to specify
target names. See Section 7.2.3.3, "Predefined Macros," for details.

Macros for Dependent Names ($**, $?) - These macros signify the names of one
or more dependents. The $** macro represents the complete list of dependent
files for the target. The $? macro represents only the dependents that are
out-of-date relative to the target. These two macros are commonly used with
the special characters that modify commands to prevent NMAKE from doing any
more work than necessary.

The example below shows the description file from the previous section using
macros for the dependent names:

    $(target) : picture.obj graphics.obj fileio.obj
    QLINK $**, $@;
    $*

The first line of the example defines all the dependents for the target. On
the next line, the QLINK command links all the dependents, represented by
$**, into a single executable image. Finally, the target is run as a
program.

NMAKE provides additional predefined macros that you can use to specify
dependent names. See Section 7.2.3.3, "Predefined Macros," for details.


3.5.2.3  Precedence of Macro Definitions

Because macros can be defined in so many places, it is quite possible to
give a macro more than one definition. Sometimes this is desirable. For
instance, you may wish to override a macro definition for a single execution
of the description file.

NMAKE's precedence rules determine which macro definition it uses.
Precedence depends on where the macro is defined. Listed below is the order
of precedence from highest to lowest priority:


    1.  Macros defined on the NMAKE command line.

    2.  Macros defined in the description file and in files included in the
        description file with the !INCLUDE directive (see Section 3.5.4,
        "Using Directives").

    3.  Macros inherited from environment variables.

    4.  Macros defined in the TOOLS.INI file.

    5.  Macros defined by NMAKE, such as CC and AS.


Figure  shows how macros defined on the command line take priority over
those in the description file.

In addition, you can force environment variables to override assignments in
the description file, using the /E option.


3.5.3  Using Inference Rules

Most of the description blocks shown so far in this chapter contain commands
to update the target from its dependents. Under certain conditions, however,
NMAKE will follow a set of rules, called "inference rules," to create the
target. Like macros, several inference rules are predefined, and NMAKE
allows you to define your own.

(This figure may be found in the printed book.)

If you supply a description block that does not contain any commands, or if
the dependents of your target do not exist, NMAKE relies on inference rules.
Whether predefined or user defined, inference rules are based on the
file-name extensions of the target and dependent files. In short, they tell
NMAKE how to create a file with a particular extension from a file with the
same base name and a different extension.

Below is a simple inference rule:

    .c.exe :
    QCL $*.c

This rule defines how to make a file with the .EXE extension from a file
with the same base name and the .C extension. The first line says that the
rule tells how to go from a file with the .C extension to a file with the
.EXE extension. The second line gives the command that creates the .EXE
file─in this case, the QCL command. The $* macro represents the base name of
the target with the extension deleted.

An inference rule looks very similar to a description block, with two
exceptions:


    1.  An inference rule lists two file-name extensions instead of target
        names.

    2.  Inference rules do not list dependents.


If the inference rule shown in the example above were in effect, NMAKE would
use it for the following description block:

    zfile.exe : zfile.c

NMAKE applies the inference rule for three reasons:


    1.  The description block does not contain any commands.

    2.  The file-name extensions of the target file and its dependent match
        those in the rule.

    3.  The base name of the target and dependent are the same.


The combination of the inference rule and the description block above has
the same effect as the following description block:

    zfile.exe : zfile.c
    QCL zfile.c


3.5.3.1  Predefined Inference Rules

NMAKE has three predefined inference rules. The predefined rules make use of
the default macros CC and AS, along with several of the predefined macros
that have already been presented.

From .C to .OBJ

One predefined rule builds .OBJ files from .C files:

    .c.obj:
    $(CC) $(CFLAGS) /c $*.c

When NMAKE applies this rule, it substitutes the current values of the
macros CC and CFLAGS for $(CC) and $(CFLAGS). (The CFLAGS macro lists
options for the C compiler.) It then looks for a C source file with the same
name as the target and compiles the source file without linking. This is the
rule NMAKE uses for the examples in this chapter that list .OBJ files─not C
source files─as dependents.

With the description block below, NMAKE would use this inference rule if it
needed to create or update one or more of the .OBJ files listed in the
dependency list:

    menu.exe : menu.obj funcs.obj draw.obj
    QLINK menu funcs draw;

If the current directory contains .C source files with the same base names
as the .OBJ files in the example, NMAKE compiles them according to the
inference rule.

From .C to .EXE

Another predefined rule, shown below, builds .EXE files from .C files:

    .c.exe:
    $(CC) $(CFLAGS) $*.c

This rule causes NMAKE to use the same files as the previous rule but to
link the output into an executable image. Continuing with the example, NMAKE
would use this rule if the description file contained the following:

    menu.exe : menu.c

Note that the files FUNCS.C and DRAW.C are not shown here. NMAKE would not
create .EXE files for them because their base names are different from that
of the .EXE file that NMAKE is trying to create.

From .ASM to .OBJ

The third predefined rule builds .OBJ files from .ASM files:

    .asm.obj:
    $(AS) $(AFLAGS) $*;

This rule tells NMAKE to look for an assembly-language source file with the
same name as the target file and to invoke the Macro Assembler to create an
object file. (The AFLAGS macro lists options for the assembler command.)
NMAKE would use this inference rule under the same conditions as the first
rule. For example:

    menu.exe : menu.obj funcs.obj draw.obj
    QLINK menu funcs draw;

If the current directory contains .ASM files with the same base names as any
of the .OBJ files, NMAKE uses this final inference rule.


3.5.3.2  Defining Inference Rules

The predefined inference rules are adequate for most situations.
Nevertheless, NMAKE allows you to define your own inference rules in the
description file or in your TOOLS.INI file . You can also define them in a
separate file that you include in your description file. (See Section
3.5.4.1 for information on the !INCLUDE directive.) Inference rules cannot
be defined on the NMAKE command line.

To define an inference rule, use a statement in the following form :

.fromext.toext:  command    .

The first line defines the types of files to which the rule applies. It
contains the extension of the "from" file first, and then the extension of
the "to" file. The second and subsequent lines give the commands that NMAKE
must execute to create a file with the "to" file extension from a file that
has the same base name and the "from" file extension. You can specify one or
more commands, just as in a description block.

Specifying a path for .fromext or .toext

Sometimes you may want to associate a directory with each type of file. For
instance, some programmers organize all their source files in one directory
and their object files in another. NMAKE allows you to precede each of the
extensions with a path, as follows:

{frompath}.fromext{topath}.toext

The example below shows a rule that starts with source files in one
directory and creates object files in a different directory:

    {\usr\graphics\source}.c{\usr\graphics\obj}.obj

You can specify only one path for each extension. If you need to pull source
files from several different directories and place all the object files in
one directory, you must define a separate inference rule for each source
directory.


3.5.3.3  Precedence of Inference Rules

Like macros, inference rules can be defined in several places; the location
of an inference rule's definition establishes its precedence. NMAKE applies
inference rules in the following order, from highest to lowest priority:


    1.  Inference rules defined in the description file or in files included
        in the description file by the !INCLUDE directive (described in
        Section 3.5.4.1)

    2.  Inference rules defined in the TOOLS.INI file

    3.  Predefined inference rules



3.5.4  Using Directives

Directives provide additional control over the execution of commands, beyond
what you can do with macros and inference rules. Using directives, you can


    ■   Include the contents of another file in your description file

    ■   Conditionally execute a command or group of commands

    ■   Issue error messages from within a description file


In effect, directives let you build description files that act like DOS
batch files. Such description files are especially useful for large software
projects in which the work is divided among several people. A description
file can compile each source file, build any necessary libraries, and link
the entire program. If errors occur anywhere in the process, the description
file can issue diagnostic messages, possibly take corrective action, or
terminate execution.

Each directive begins on a new line in the description file. A directive
starts with an exclamation point (!) as the first character on the line.
NMAKE allows, but does not require, spaces between the name of the directive
and the exclamation point.

The sections that follow describe several of the NMAKE directives. For
information on all the directives, see Section 7.2.5.


3.5.4.1  The !INCLUDE Directive

The !INCLUDE directive is similar to the #include preprocessor directive in
QuickC. When NMAKE encounters !INCLUDE, it reads the contents of another
description file before continuing with the current description file. Use
the !INCLUDE directive to include a standard set of inference rules or
macros in your description files. For example:

    !INCLUDE rules.mak

The !INCLUDE directive in this example tells NMAKE to begin reading from the
file RULES.MAK in the current directory and to evaluate the contents of
RULES.MAK as part of the current description file.

If you enclose the file name in angle brackets (<>), NMAKE searches for the
file in the directories specified by the INCLUDE environment variable.


3.5.4.2  Conditional Directives (!IF, !ELSE, !ENDIF)

The conditional directives allow you to specify blocks of commands to be
executed depending on the value of a constant expression. A conditional
block has the following form:

!IF expression  statements !ELSE  statements !ENDIF

If the value of expression is nonzero (true), NMAKE executes the statements
between the !IF directive and the !ELSE directive. If the value of the
constant expression is zero (false), NMAKE executes the statements between
the !ELSE directive and the !ENDIF directive.

Expressions

The expression may consist of integer constants, string constants, or
program invocations that return constants. Integer constants can use the C
unary operators for numerical negation (-), logical negation (!), and one's
complement arithmetic (~); or the C binary operators, including arithmetic
operators, bitwise operators, and logical operators. (See Table  for a
complete list.) For string constants, only the equality (==) and inequality
(!=) operators are valid. You can use parentheses to group expressions
wherever necessary. Program invocations, when used in conditionals, must be
enclosed in square brackets.

Recursion

Conditional directives are commonly used to test whether a program executed
successfully. The program can be a DOS command, a program you have written,
or even NMAKE itself. In the following description block, note the use of
the $(MAKE) macro to invoke the program recursively:

    $(target) : picture.obj fileio.obj error.obj
    # Try to build pix.lib
    !IF ![$(MAKE) /f pix.mak]
    QLINK $**,$(target),,pix.lib;
    COPY pix.lib \mylibs
    !ELSE
    #Build didn't work, so link with old version
    QLINK $**,$(target),,\mylibs\pix.lib;
    !ENDIF

In this case, the expression is the value returned by another invocation of
NMAKE. NMAKE, like many programs, returns the value 0 if it executes
successfully and a nonzero errorlevel code otherwise. This is the opposite
of the usual conditional test, which considers zero to be true and nonzero
to be false. Therefore, the !IF directive must test the logical negation of
the expression; that is, it uses the exclamation-point operator outside the
square brackets.

If the library  pix.lib  is built successfully, NMAKE executes the QLINK and
COPY commands on the two lines immediately following the !IF directive.

If the library cannot be built successfully, NMAKE executes the command
following the !ELSE directive. This command links all the dependents (named
by the special $** macro) with an old version of the library.


3.5.4.3  Testing for Macro Definitions (!IFDEF, !IFNDEF, !UNDEF)

The !IFDEF and !IFNDEF directives test whether a macro is defined and
execute a block of statements depending on the result. You use these two
directives with the !ELSE and !ENDIF directives to construct conditional
blocks, as described in the previous section.

The description block below shows the use of !IFDEF and !IFNDEF directives:


    $(target) : picture.obj fileio.obj error.obj
    # Macro $(newlib) is defined to use new pix.lib
    !IFDEF newlib
    QLINK $**,$(target),,pix.lib;
    !ELSE
    # Just link with existing version
    QLINK $**,$(target),,\mylibs\pix.lib;
    !ENDIF

When NMAKE encounters the !IFDEF directive, it checks whether or not  newlib
    has been defined. If so, it executes the QLINK command on the next line. If
not, it executes the QLINK command following the !ELSE directive.

NMAKE considers a macro to be defined if its name appears to the left of an
equal sign anywhere in the description file or on the NMAKE command line.
So, if the MAKEFILE file contains the above description, both of the
commands below would result in execution of the statements following the
!IFDEF directive:

    NMAKE newlib=true target=eliot.exe

    NMAKE newlib= target=eliot.exe

Even though the second command line sets  newlib  to the null string,
newlib  is still considered defined because its name appears to the left of
the equal sign.

The !IFNDEF directive acts in exactly the same way as !IFDEF, except that
the statements following it are executed only if the macro is not defined.

Once you have defined a macro, the only way to remove its definition is to
use the !UNDEF directive. You might want to remove a macro definition before
including another file, as in the following example:

    !UNDEF opts
    !INCLUDE newlib.mak

The !UNDEF directive ensures that the macro  opts  is not defined when the
file NEWLIB.MAK is processed.


3.5.4.4  The !ERROR Directive

The !ERROR directive causes NMAKE to print some text, then quit processing
the description file. This directive is commonly used in conditionals to
terminate execution when fatal errors occur. For example, when NMAKE comes
across the conditional

    !IF "$(continue)" == "n"
    !ERROR  Could not continue because of errors.
    !ELSE
    QLINK $**, $@;
    !ENDIF

it tests the value of the  continue  macro. If  continue  holds the string
"n", NMAKE displays the text that follows the !ERROR directive then stops
execution. If  continue  holds any other value, NMAKE executes the QLINK
command that follows the !ELSE directive.


3.6  Other NMAKE Features

This chapter has covered a subset of NMAKE designed to get you started. In
addition to having the features described in this chapter, the NMAKE utility
lets you


    ■   Specify additional command-line options

    ■   Specify more than one set of dependents for a target

    ■   Create description files that build more than one target, and specify
        the target to build at invocation

    ■   Use additional predefined macros

    ■   Substitute text within macros

    ■   Use additional directives

    ■   Generate response files for use with other programs

    ■   Use predefined pseudotargets, which provide special rules and
        information


As you become more familiar with NMAKE, and as your software projects grow,
you will probably need to use some of these features. See Chapter 7 for more
information.






PART II  Reference to QuickC Tools
────────────────────────────────────────────────────────────────────────────

Part 2 of the QuickC Tool Kit is a reference to the tools. Here you will
find complete information on all the options of the utilities. Refer to Part
2 when you have a specific question about one of the tools or when you've
gained experience with the utilities and need to know more about them.

The QCL, LINK, LIB, and NMAKE utilities are covered in greater detail in
Part 2 than in Part 1. In particular, these chapters describe additional
options that work with programs written in other languages (such as Pascal,
FORTRAN, and assembler) or with special hardware.






Chapter 4  QCL Command Reference
────────────────────────────────────────────────────────────────────────────

This chapter describes in detail the QCL command, which you can use to
compile and link QuickC Compiler programs. It explains the rules for giving
input on the QCL command line, describes the options to QCL in alphabetical
order, and shows how to change the stack space allocated to a program.

The chapter provides reference material for programmers who are familiar
with the Microsoft QuickC Compiler in general and the QCL command in
particular. If you are new to the QuickC Compiler, see Chapter 1, "Creating
Executable Programs," in Part 1 of this manual for an introductory approach.



4.1  The QCL Command Line

The QCL command line has the following format:

    QCL «option...» file... «option|file»... «/link «lib... link-opt...» »

The following list describes input to the QCL command:

Entry                             Meaning
────────────────────────────────────────────────────────────────────────────
option                            One or more QCL options; see Section 4.3,
                                    "QCL Options," for descriptions.

file                              The name of one or more source files,
                                    object files, or libraries. You must
                                    specify at least one file name. QCL
                                    compiles source files and passes the
                                    names of the object files and libraries
                                    to the linker.

lib                               One or more library names. QCL passes
                                    the names of these libraries to the
                                    linker for processing.

link-opt                          One or more of the linker options
                                    described in
                                    Chapter 5, "QLINK." The QCL command
                                    passes
                                    these options to the linker for
                                    processing.

    Maximum command-line length

You can specify any number of options, file names, and library names, as
long as the length of the command line does not exceed 128 characters.

    Specifying file names

Any combination of uppercase and lowercase letters is legal in file names.
Any file name can include a full or partial path name. A full path name
includes a drive name and one or more directory names. A partial path name
omits the drive name, which QCL assumes to be the current drive. If you
don't specify any path name, QCL assumes the file is in the current
directory.

QCL determines how to process each file depending on its file-name
extension, as follows:

Extension                         Processing
────────────────────────────────────────────────────────────────────────────
.C                                QCL assumes the file is a C source file
                                    and compiles it.

.OBJ                              QCL assumes the file is an object file
                                    and passes its name to the linker.

.LIB                              QCL assumes the file is a library and
                                    passes its name to the linker. The
                                    linker links this library with the
                                    object files QCL created from source
                                    files and the object files given on the
                                    command line.

Any other extension               QCL assumes the file is an object file
or no extension                   and passes its name to the linker.


4.2  How the QCL Command Works

The QCL command follows the procedure described below to create an
executable file from one or more C source files:


    1.  QCL compiles each source file, creating an object file for each. In
        each object file, QCL places the name of the appropriate standard
        combined library. The memory model and floating-point-math package
        used to compile the program determine this library name. See Section
        4.3.1, "/A Options," for more information on the library names.

    2.  QCL invokes the linker, passing the names of the object files it has
        created plus any object files or libraries given on the command line.
        QCL also specifies the options listed in the LINK environment
        variable. If you use /link to specify linker options on the QCL
        command line, these options apply as well. If conflicts occur, options
        that follow /link override those in the LINK environment variable.

    3.  The linker links the object files and libraries named by QCL to create
        a single executable file.

        Before it creates the executable file, the linker resolves "external
        references" in the object files. An external reference is a function
        call in one object file that refers to a function defined in another
        object file or in a library. To resolve an external reference, the
        linker searches for the called function in the following locations in
        the order shown:



    a.  The object files passed by QCL

    b.  The libraries given on the QCL command line, if any

    c.  The libraries named in the object files



Example

Assume that you are compiling three C source files: MAIN.C, MOD1.C, and
MOD2.C. Each file includes a call to a function defined in a different file:



    ■   MAIN.C calls the function named  mod1()  in MOD1.C and the function
        named  mod2()  in MOD2.C.

    ■   MOD1.C calls the standard-library functions printf and scanf.

    ■   MOD2.C calls graphics functions named  myline()  and  mycircle(),
        which are defined in a library named MYGRAPH.LIB.


First, compile with a command line of the following form:

    QCL MAIN.C MOD1.C MOD2.C /link MYGRAPH.LIB

QCL first compiles the C source files and creates the object files MAIN.OBJ,
MOD1.OBJ, and MOD2.OBJ. QCL then places the name of the standard library
SLIBCE.LIB in each object file.

Next, QCL passes the names of the C source files to the linker. Finally, the
linker resolves the external references as follows:


    1.  In MAIN.OBJ, the reference to the  mod1()  function is resolved using
        the definition in MOD1.OBJ and the reference to the  mod2()  function
        is resolved using the definition in MOD2.OBJ.

    2.  In MOD1.OBJ, the references to printf and scanf are resolved using the
        definitions in SLIBCE.LIB. The linker uses this library because it
        finds the library name within MOD1.OBJ.

    3.  In MOD2.OBJ, the references to myline and mycircle are resolved using
        the definitions in MYGRAPH.LIB.



4.3  QCL Options

Options to the QCL command consist of either a forward slash ( / ) or a dash
(-) followed by one or more letters. Certain QCL options take arguments; in
some of these options, a space is required between the option and the
argument, and in others, no space is allowed. The spacing rules for the
options are given in their descriptions.

────────────────────────────────────────────────────────────────────────────
Important
QCL options (except for the /HELP option) are case-sensitive. For example,
/C and /c are two different options.
────────────────────────────────────────────────────────────────────────────

    Command-line order

Options can appear anywhere on the QCL command line. With a few exceptions
(/c, /Fe), each QCL option applies to the files that follow it on the
command line and does not affect files preceding it on the command line.

You can also define QCL options in the CL environment variable; these
options are used every time you invoke QCL. (See Section 4.3.41, "Giving
Options with the CL Environment Variable.")

The remainder of this section describes all the QCL options in alphabetical
order. If an option can take one or more arguments, its format is shown
under an "Option" heading before its description. See Chapter 1, "Creating
Executable Programs," for descriptions of the various categories of QCL
options and the more commonly used options belonging to each category.


4.3.1  /A Options (Memory Models)

Every program's code and data are stored in blocks called "segments." The
memory model of the program determines the organization of these segments.
(See Section 4.3.26 and Appendix B for more information on segments.) The

memory model also determines what kind of executable file is generated. All
models produce a .EXE file, except for the tiny model which produces a .COM
file. QCL offers the memory-model options described in Table 4.1.


Table 4.1  Memory Models

╓┌───────────┌─────────────┌──────────────┌──────────────┌───────────────────╖
QCL         Memory        Data           Code           Long
Option      Model         Segments       Segments       Form
────────────────────────────────────────────────────────────────────────────
/AT         Tiny          One segment    One segment    none
                            for both data  for both data
                            and code       and code

/AS         Small         One            One            /Asnd

/AM         Medium        One            One code       /Alnd
                                            segment per
                                            module
QCL         Memory        Data           Code           Long
Option      Model         Segments       Segments       Form
────────────────────────────────────────────────────────────────────────────
                                            module

/AC         Compact       Multiple data  One            /Asfd
                            segments;
                            data items
                            must be
                            smaller than
                            64K

/AL         Large         Multiple data  One code       /Alfd
                            segments;      segment per
                            data items     module
                            must be
                            smaller than
                            64K

/AH         Huge          Multiple data  One code       /Alhd
                            segments;      segment per
QCL         Memory        Data           Code           Long
Option      Model         Segments       Segments       Form
────────────────────────────────────────────────────────────────────────────
                            segments;      segment per
                            data items     module
                            can be larger
                            than 64K

────────────────────────────────────────────────────────────────────────────



    Default memory model

By default, the QuickC compiler uses the small memory model.

    Uses of memory models

Generally, memory models with multiple code segments can accommodate larger
programs than can memory models with one code segment. Also, memory models
with multiple data segments can accommodate more data-intensive programs
than can memory models with one data segment. Programs with multiple code or
data segments, however, are usually slower than programs with a single code
or data segment. It is often more efficient to compile with the smallest
possible memory model and use the near, far, and huge keywords to override
the default addressing conventions for any data items or functions that
can't be accommodated in that model. (Consult Appendix B for more
information about these keywords and their interactions with standard memory
models.)

    Customized memory models

QCL also supports customized memory models, in which different features from
standard memory models are combined. You specify a customized memory model
with the /Astring option, where string is composed of three letters that
specify the code pointer size, the data pointer size, and the stack and data
segment setup, respectively. All three letters must be present, but they can
appear in any order. The allowable letters appear in Table 4.2.

Table 4.2  Customized Memory Model Codes

╓┌───────────────┌─────────┌─────────────────────────────────────────────────╖
Group           Code      Description
────────────────────────────────────────────────────────────────────────────
Code pointers   s         Small
                l         Large

Data pointers   n         Near
                f         Far
                h         Huge

Segment setup   d         SS == DS
                u         SS != DS; DS loaded for each function entry
                w         SS != DS; DS not loaded at function entry

────────────────────────────────────────────────────────────────────────────



As examples, the customized representations of the standard memory models
appear in the last column of Table 4.1.

The segment setup codes can also be given as separate options, when used to
modify a standard memory model. For example, the options /AS /Au specify the
small model, plus they force DS to be loaded at function entry.

    Memory models  and default libraries

The memory-model and math options used to compile the program determine the
library that the linker searches to resolve external references. The library
name is mLIBCf.LIB, where the memory-model option determines m: S for small
(default) or tiny model, M for medium model, C for compact model, or L for
large or huge model. The math option (see Section 4.3.12, "/FP Options")
determines f: E for emulator (default) or 7 for 8087/80287 option.


4.3.2  /batch (Compile in Batch Mode)

The /batch option assumes that QCL is being executed from a batch file.
Normally, if QCL cannot find one of the programs needed to complete the
compilation, it displays a prompt requesting that the appropriate disk be
inserted. If you specify the /batch option, QCL simply terminates
compilation with an error.


4.3.3  /c (Compile without Linking)

The /c option tells the QCL command to compile all C source files given on
the command line, creating object files, but not to link the object files.
QCL does not produce an executable file. Regardless of its position on the
command line, this option applies to all source files on the command line.


Example

    QCL FIRST.C SECOND.C /c THIRD.OBJ

This example compiles FIRST.C, creating the object file FIRST.OBJ, and
SECOND.C, creating the object file SECOND.OBJ. No processing is performed
with THIRD.OBJ because QCL skips the linking step.


4.3.4  /C (Preserve Comments during Preprocessing)

The /C (for "comment") option preserves comments during preprocessing. If
you don't specify this option, the preprocessor strips comments from a
source file since they do not serve any purpose in later stages of
compiling.

This option is valid only if the /E, /P, or /EP option is also used.


Example

    QCL /P /C SAMPLE.C

This example produces a listing named SAMPLE.I. The listing file contains
the original source file, including comments, with all preprocessor
directives expanded or replaced.


4.3.5  /D (Define Constants and Macros)


Option

    /D identifier  «=«{string|number}»»

Use the /D option to define constants or macros for your source file.

The identifier is the name of the constant or macro. It may be defined as a
string or as a number. The string must be enclosed in quotes if it includes
spaces.

If you leave out both the equal sign and the string or number, the
identifier is assumed to be defined, and its value is set to 1. For example,
    /DSET  is sufficient to define a macro named  SET  with a value of 1.

Use the /D option in combination with the #if directive to conditionally
compile source files.

    Removing definitions

If you have defined a numeric constant, using the equal sign with no number
removes the definition of that constant from the source file. For example,
to remove all occurrences of  RELEASE, use the following option:

    /DRELEASE=

Note that the identifier argument is case sensitive. For example, the /D
option above would have no effect on a constant named  release  that is
defined in the source file.

Defining macros and constants with the /D option has the same effect as
using a #define preprocessor directive at the beginning of your source file.
The identifier is defined until either an #undef directive in the source
file removes the definition or the compiler reaches the end of the file.

    Duplicate definitions

If an identifier defined in a /D option is also defined within the source
file, QCL uses the definition on the command line until it encounters the
redefinition of the identifier in the source file, as illustrated in Figure
4.1.

(This figure may be found in the printed book.)

The /D option has the same effect as the Define text box in the QuickC
environment.


Example

    #if !defined(RELEASE)
    _nheapchk();
    #endif

This code fragment calls a function to check the near heap unless the
constant  RELEASE  is defined. While the program is under development, you
can leave  RELEASE  undefined and perform heap checking to find bugs.
Assuming the program name is BIG.C, you would compile with the following
command:

    QCL BIG.C

After you have found all of the bugs in the program, you can define  RELEASE
    in a /D option so that the program will run faster, as follows:

    QCL /DRELEASE BIG.C


4.3.6  /E (Copy Preprocessor Output to Standard Output)

The /E option copies output from the preprocessor to the standard output
(usually your terminal). This output is identical to the original source
file except that all

preprocessor directives are carried out, macro expansions are performed, and
comments are removed. You normally use the /E option with the /C option (see
Section 4.3.4), which preserves comments in the preprocessed output. DOS
redirection can be used to save the output in a disk file.

The /E option also places a #line directive at the beginning and end of each
included file and around lines removed by preprocessor directives that
specify conditional compilation.

Use this option when you want to resubmit the preprocessed listing for
compilation. The #line directives renumber the lines of the preprocessed
file so that errors generated during later stages of processing refer to the
line numbers of the original source file rather than to the preprocessed
file.

The /E option suppresses compilation. QCL does not produce an object file or
map file, even if you specify the /Fo or /Fm option on the QCL command line.



Example

    QCL /E /C ADD.C > PREADD.C

The command above creates a preprocessed file with inserted #line directives
from the source file ADD.C. The output is redirected to the file PREADD.C.


4.3.7  /EP (Copy Preprocessor Output to Standard Output)


The /EP option is similar to the /E option: it preprocesses the C source
file and copies preprocessor output to the standard output. Unlike the /E
option, however, the /EP option does not add #line directives to the output.


Preprocessed output is identical to the original source file except that all
preprocessor directives are carried out, macro expansions are performed, and
comments are removed. You can use the /EP option with the /C option (see
Section 4.3.4), which preserves comments in the preprocessed output.

The /EP option suppresses compilation; QCL does not produce an object file
or map file, even if you specify the /Fo or /Fm option on the QCL command
line.


Example

    QCL /EP /C ADD.C

The command above creates a preprocessed file from the source file ADD.C. It
preserves comments but does not insert #line directives. The output appears
on the screen.


4.3.8  /F (Set Stack Size)


Option

    /F number

The /F option sets the program stack size to number bytes, where number is a
hexadecimal number in the range 0001 to FFFF. Decimal and octal numbers are
not allowed. If you don't specify this option, a stack size of 2K is used by
default.

You may want to increase the stack size if your program gets stack-overflow
diagnostic messages. Conversely, if your program uses the stack very little,
you may want to decrease the size of your program by reducing the stack
size. In general, if you modify the stack size, do not use the /Gs option to
suppress stack checking.


4.3.9  /Fe (Rename Executable File)


Option

    /Feexefile

By default, QCL names the executable file with the base name of the first
file (source or object) on the command line plus the extension .EXE. The /Fe
option lets you give the executable file a different name or create it in a
different directory.

Because QCL creates only one executable file, you can give the /Fe option
anywhere on the command line. If more than one /Fe option appears, QCL gives
the executable file the name specified in the last /Fe option on the command
line.

The /Fe option applies only in the linking stage. If you specify the /c
option to suppress linking, /Fe has no effect.

    Path names and extensions

The exefile argument must appear immediately after the option with no
intervening spaces. The exefile argument can be a file specification, a
drive name, or a path specification. If exefile is a drive name or path
specification, the QCL command creates the executable file in the given
location, using the default name (base name of the first file plus .EXE). A
path specification must end with a backslash ( \ ) so that QCL can
distinguish it from an ordinary file name.

You are free to supply any name and any extension you like for exefile. If
you give a file name without an extension, QCL automatically appends the
.EXE extension.


Examples

    QCL /FeC:\BIN\PROCESS *.C

The example above compiles and links all source files with the extension .C
in the current directory. The resulting executable file is named PROCESS.EXE
and is created in the directory C:\BIN.

    QCL /FeC:\BIN\ *.C

The preceding example is similar to the first example except that the
executable file, instead of being named PROCESS.EXE, is given the same base
name as the first file compiled. The executable file is created in the
directory C:\BIN.


4.3.10  /Fm (Create Map File)


Option

    /Fm «mapfile»

The /Fm option produces a map file. The map file contains a list of segments
in order of their appearance within the load module.

    Path names and extensions

The mapfile argument must follow the /Fm option immediately with no
intervening spaces. The mapfile can be a file specification, a drive name,
or a path specification. It can also be omitted.

If you give just a path specification as the mapfile argument, the path
specification must end with a backslash ( \ ) so that QCL can distinguish it
from an ordinary file name. For example, to create a map file in the path
C:\LIST, the appropriate /Fm option is /FmC:\LIST\ .

If you do not specify a name for the map file or if you supply only a drive
name or path, QCL uses the base name of the first source or object file on
the command line plus the extension .MAP.

A fragment of a sample map file is shown below:

    Start  Stop   Length Name                   Class
    00000H 01E9FH 01EA0H _TEXT                  CODE
    01EA0H 01EA0H 00000H C_ETEXT                ENDCODE
    .
    .
    .

    Segment information

The information in the  Start  and  Stop  columns shows the 20-bit address
(in hexadecimal) of each segment, relative to the beginning of the load
module. The load module begins at location zero. The  Length  column gives
the length of the segment in bytes. The  Name  column gives the name of the
segment, and the  Class  column gives information about the segment type.

    Group information

The starting address and name of each group appear after the list of
segments. A sample group listing is shown below:

    Origin   Group
    01EA:0   DGROUP

In this example, DGROUP is the name of the data group. DGROUP is used for
all near data (that is, all data not explicitly or implicitly placed in
their own data segment) in Microsoft QuickC programs.

    Global symbols

The map file shown below contains two lists of global symbols: the first
list is sorted in ASCII-character order by symbol name and the second is
sorted by symbol address. The notation  Abs  appears next to the names of
absolute symbols (symbols containing 16-bit constant values that are not
associated with program addresses).

    Address         Publics by Name

    01EA:0096       STKHQQ
    0000:1D86       _brkctl
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
    0000:00DA       _exp16
    0000:0113       __chkstk
    0000:0129       __astart
    0000:01C5       __cintDIV
    .
    .
    .

Global symbols in a map file usually have one or more leading underscores
because the QuickC compiler adds an underscore to the beginning of variable
names. Many of the global symbols that appear in the map file are symbols
used internally by the QuickC compiler and the standard libraries.

The addresses of the external symbols show the location of the symbol
relative to zero (the beginning of the load module).

    Program entry point

Following the lists of symbols, the map file gives the program entry point,
as shown in the following example:

    Program entry point at 0000:0129

────────────────────────────────────────────────────────────────────────────
NOTE
If you use the /Fm option with the /Gi option (for incremental compilation),
QCL produces a segmented-executable map file rather than a DOS executable
map file. The segment addresses in the file are different from those in DOS
map files, and the file itself has a different format.
────────────────────────────────────────────────────────────────────────────


4.3.11  /Fo (Rename Object File)


Option

    /Foobjfile

By default, QCL gives each object file it creates the base name of the
corresponding source file plus the extension .OBJ. The /Fo option lets you
give different names to object files or create them in a different
directory. If you are compiling more than one source file, you can use the
/Fo option with each source file to rename the corresponding object file.

Keep the following rules in mind when using this option:


    ■   The objfile argument must appear immediately after the option, with no
        intervening spaces.

    ■   Each /Fo option applies only to the next source file on the command
        line.


    Path names and extensions

You are free to supply any name and any extension you like for objfile.
However, it is recommended that you use the conventional .OBJ extension
since the linker and the LIB library manager use .OBJ as the default
extension when processing object files.

If you do not give a complete object-file name with the /Fo option (that is,
if you do not give an object-file name with a base and an extension), QCL
names the object file according to the following rules:


    ■   If you give an object-file name without an extension (such as TEST),
        QCL automatically appends the .OBJ extension.

    ■   If you give an object-file name with a blank extension (such as
        TEST.), QCL leaves the extension blank.

    ■   If you give only a drive or directory specification following the /Fo
        option, QCL creates the object file on that drive or directory and
        uses the default file name (the base name of the source file plus
        .OBJ).


You can use this option to create the object file in another directory or on
another disk. When you give only a directory specification, the directory
specification must end with a backslash ( \ ) so that QCL can distinguish
between a directory specification and a file name.


Examples

    QCL /FoB:\OBJECT\ THIS.C

In the example above, QCL compiles the source file THIS.C and gives the
resulting object file the name THIS.OBJ (by default). The directory
specification B: \OBJECT\ tells QCL to create THIS.OBJ in the directory
named \OBJECT on drive B.

    QCL /Fo\OBJECT\ THIS.C THAT.C /Fo\SRC\NEWTHOSE.OBJ THOSE.C

In the example above, the first /Fo option tells the compiler to create the
object file THIS.OBJ (the result of compiling THIS.C) in the \OBJECT
directory. The second /Fo option tells the compiler to create the object
file NEWTHOSE.OBJ (the result of compiling THOSE.C) in the \SRC directory.
The compiler also creates the object file THAT.OBJ (the result of compiling
THAT.C) in the current directory.


4.3.12  /FP Options (Select Floating-Point-Math Package)

The /FPi and /FPi87 options specify how your program handles
floating-point-math operations.


4.3.12.1  /FPi (Emulator)


Use the /FPi option if you do not know whether an 8087 or 80287 math
coprocessor will be available at run time. Programs compiled with /FPi work
as follows:


    ■   If a coprocessor is present at run time, the program uses the
        coprocessor.

    ■   If no coprocessor is present or if the NO87 environment variable has
        been set, the program uses the emulator.


The /FPi option generates in-line instructions for an 8087 or 80287
coprocessor and places the name of the emulator library (mLIBCE.LIB) in the
object file. At link time, you can specify an 8087/80287 library
(mLIBC7.LIB) instead. If you do not choose a floating-point option, QCL uses
the /FPi option by default.

    Interrupt fixups

This option works whether or not a coprocessor is present because the QuickC
compiler does not generate "true" in-line 8087/80287 instructions. Instead,
it generates software interrupts to library code. The library code, in turn,
fixes up the interrupts to use either the emulator or the coprocessor,
depending on whether a coprocessor is present. The fixups can be removed by
linking the file RMFIXUP.OBJ with the C program. Linking this file with
QuickC programs can save execution time (the time required to fix up all the
interrupts the first time). However, a C program linked with RMFIXUP.OBJ
will run only if a coprocessor is present.


4.3.12.2  /FPi87 (Coprocessor)

The /FPi87 option includes the name of an 8087/80287 library (mLIBC7.LIB) in
the object file. At link time, you can override this option and specify an
emulator library (mLIBCE.LIB) instead so that the program will run on
computers without coprocessors.


If you use the /FPi87 option and link with mLIBC7.LIB, an 8087 or 80287
coprocessor must be present at run time; otherwise, the program fails and
the following error message is displayed:

    run-time error R6002
    - floating point not loaded

If you compile with /FPi87 and link with mLIBCE.LIB, you can set the NO87
environment variable to suppress the use of the coprocessor (see Section
4.3.12.5).

Compiling with the /FPi87 option results in the smallest, fastest programs
possible for handling floating-point arithmetic.


4.3.12.3  Library Considerations for Floating-Point Options

You may want to use libraries in addition to the default library for the
floating-point option you have chosen on the QCL command line. For example,
you may want to create your own libraries or object files, then link them at
a later time with object files that you have compiled using different QCL
options.

You must be sure that you use only one standard combined C library when you
link. You can control which library QLINK uses in one of two ways:


    1.  Make sure the first object file passed to the linker has the name of
        the desired library. For example, if you want to use an 8087/80287
        library, give the /FPi87 option before the first source-file name on
        the QCL command line; or, give the name of an object file compiled
        with /FPi87 as the first file name on the command line. All
        floating-point calls in this object file refer to the 8087/80287
        library.

    2.  Give the /NOD (no default-library search) option after the /link
        option on the QCL command line. Then specify the name of the library
        you want to use on the QCL command line. The /NOD option overrides the
        library names embedded in the object files. Because the linker
        searches libraries given on the command line before it searches
        libraries named in object files, all floating-point calls will refer
        to the libraries you specify.


    Removing library names

Another complication might arise if you create your own libraries: normally,
each module in the library you create contains a standard-library name, and
the linker tries to search the standard libraries named in the modules when
it links with your library.

The safest course, especially when you are distributing libraries to others,
is to use the /Zl option when you compile the object files that make up your
libraries. The /Zl option tells the compiler not to put library names in the
object files. Later, when you link other object files with your library, the
standard library used for linking will depend only on the floating-point and
memory-model options used to compile those object files.


Examples

    QCL CALC.C ANOTHER SUM

In the example above, no floating-point option is given, so QCL compiles the
source file CALC.C with the default floating-point option, /FPi. The /FPi
option generates in-line instructions and selects the small-model-emulator
combined library (SLIBCE.LIB), which is the default.

    QCL /FPi87 CALC.C ANOTHER.OBJ SUM.OBJ /link SLIBCE.LIB /NOD

In the example above, QCL compiles CALC.C with the /FPi87 option, which
selects the SLIBC7.LIB library. The /link option, however, overrides the
default library specification: the /NOD option suppresses the search for the
default library, and the alternate math library (SLIBCE.LIB) is specified.
QLINK uses SLIBCE.LIB when it creates the resulting executable file,
CALC.EXE.


4.3.12.4  Compatibility between Floating-Point Options

Each time you compile a source file, you can specify a floating-point
option. When you link two or more source files to produce an executable
program file, you are responsible for ensuring that floating-point
operations are handled in a consistent way.


Example

    QCL /AM CALC.C ANOTHER SUM /link MLIBC7.LIB /NOD

The preceding example compiles the program CALC.C with the medium-model
option (/AM). Because no floating-point option is specified, the default
(/FPi) is used. The /FPi option generates in-line 8087/80287 instructions
and specifies the emulator library MLIBCE.LIB in the object file. The /link
field specifies the /NOD option and the name of the medium-model 8087/80287
library, MLIBC7.LIB. Specifying the 8087/80287 library forces the program to
use an 8087 coprocessor; the program fails if a coprocessor is not present.



4.3.12.5  The NO87 Environment Variable

Programs compiled with the /FPi option automatically use an 8087 or 80287
coprocessor at run time if one is installed. You can override this and force
the use of the emulator instead by setting an environment variable named
NO87.

    Coprocessor-suppression message

If NO87 is set to any value when the program is executed, the program will
use the emulator even if a coprocessor is present. When this occurs, the
NO87 setting is displayed on the standard output as a message. The message
is displayed only if a coprocessor is present and its use is suppressed; if
no coprocessor is present, no message appears. If you want to force use of
the emulator, but don't want a message to appear, set NO87 equal to one or
more spaces. The variable is still considered to be defined.

Note that the presence or absence of the NO87 definition determines whether
use of the coprocessor is suppressed. The actual value of the NO87 setting
is used only for the message.

The NO87 variable takes effect with any program linked with an emulator
library (mLIBCE.LIB). It has no effect on programs linked with 8087/80287
libraries (mLIBC7.LIB).


Examples

    SET NO87=Use of coprocessor suppressed

The example above causes the message  Use of coprocessor suppressed  to
appear when a program that would use an 8087 or 80287 coprocessor is
executed on a computer that has such a coprocessor.

    SET NO87=space

The example above sets the NO87 variable to the space character. Use of the
coprocessor is still suppressed, but no message is displayed.


4.3.12.6  Standard Combined Libraries

Table 4.3 shows each combination of memory-model and floating-point options
and the corresponding library name that QCL embeds in the object file.

Table 4.3  QCL Options and Default Libraries

╓┌──────────────────────┌────────────────────┌───────────────────────────────╖
Floating-Point Option  Memory-Model Option  Default Library
────────────────────────────────────────────────────────────────────────────
/FPi87                 /AT or /AS           SLIBC7.LIB
                        /AM                  MLIBC7.LIB
                        /AC                  CLIBC7.LIB
                        /AL or /AH           LLIBC7.LIB
Floating-Point Option  Memory-Model Option  Default Library
────────────────────────────────────────────────────────────────────────────
                        /AL or /AH           LLIBC7.LIB
/FPi                   /AT or /AS           SLIBCE.LIB
                        /AM                  MLIBCE.LIB
                        /AC                  CLIBCE.LIB
                        /AL or /AH           LLIBCE.LIB
────────────────────────────────────────────────────────────────────────────



4.3.13  /G0, /G1, /G2 (Generate Instructions for 8086, 80186, or 80286
Processor)


If you are writing programs for a machine with an 80186 or 80286 processor,
you can use the /G1 or the /G2 option, respectively, to enable the
instruction set for those processors. When you use either of these options,
the compiler automatically defines the identifier M_I286.

Although it is sometimes advantageous to enable the appropriate instruction
set, you may not always wish to do so. If you have an 80286 processor, for
example, but you want your program to be able to run on an 8086, do not
compile with the /G2 option.

The /G0 option enables the instruction set for the 8086/8088 processor. You
do not have to specify this option explicitly because QCL uses the 8086/8088
instruction set by default. Programs compiled with this option will also run
on machines with 80186 and 80286 processors but will not take advantage of
any processor-specific instructions. When you specify the /G0 option, the
compiler automatically defines the identifier M_I8086.

If your program includes in-line assembler code that uses a mnemonic
instruction supported only by the 80186/87 or 80286/87 processors, you must
compile with the /G1 or the /G2 option, respectively; compiling with /G0
results in an error. Note that you cannot use 80186 or 80286 mnemonics as
labels, even if you are compiling for an 8086/8088.

These options apply to all file names that follow on the command line until
another /G0, /G1 or /G2 option appears.


4.3.14  /Gc, /Gd (Use FORTRAN/Pascal or C Calling Convention)

The _fortran, _pascal, and _cdecl keywords along with the /Gc and /Gd
options, allow you to control the function-calling and naming conventions so
that your QuickC programs can call and be called by functions that are
written in FORTRAN or Pascal.

    Parameter-passing conventions

Because functions in QuickC programs can take a variable number of
arguments, QuickC must handle function calls differently from languages such
as Pascal and FORTRAN. Pascal and FORTRAN normally push actual parameters to
a function in left-to-right order so that the last argument in the list is
the last one pushed on the stack. In contrast, because QuickC functions do
not always know the number of actual parameters, they must push their
arguments from right to left, so that the first argument in the list is the
last one pushed.

    Stack-cleanup conventions

Another difference between QuickC programs and FORTRAN or Pascal programs is
that in QuickC programs, the calling function must remove the arguments from
the stack. In Pascal and FORTRAN programs, the called function must remove
the arguments. If the code for removing arguments is in the called function
(as in Pascal and FORTRAN), it appears only once; if it is in the calling
function (as in QuickC), it appears every time there is a function call.
Because a typical program has more function calls than functions, the
Pascal/FORTRAN method results in slightly smaller, more efficient programs.


    The _pascal and _fortran keywords

The QuickC compiler can generate the Pascal/FORTRAN calling convention in
one of several ways. The first is through the use of the _pascal and
_fortran keywords. When these keywords are applied to functions, or to
pointers to functions, they indicate a corresponding Pascal or FORTRAN
function (or a function that uses the Pascal/FORTRAN calling convention).
Therefore, the correct calling convention must be used. In the following
example,  sort  is declared as a function using the alternative calling
convention:

    short pascal sort(char *, char *);

The _pascal and _fortran keywords can be used interchangeably. Use them when
you want to use the left-to-right calling sequence for selected functions
only.

    The /Gc option

The second method for generating the Pascal/FORTRAN calling convention is to
use the /Gc option. If you use the /Gc option, the entire module is compiled
using the alternative calling convention. You might use this method to make
it possible to call all the functions in a QuickC module from another
language or to gain the performance and size improvement provided by this
calling convention.

When you use /Gc to compile a module, the compiler assumes that all
functions called from that module use the Pascal/FORTRAN calling convention,
even if the functions are defined outside that module. Therefore, using /Gc
would normally mean that you cannot call or define functions that take
variable numbers of parameters and that you cannot call functions such as
the QuickC library functions that use the QuickC calling sequence. In
addition, if you compile with the /Gc option, either you must declare the
main function in the source program with the _cdecl keyword, or you must
change the start-up routine so that it uses the correct naming and calling
conventions when calling main.

    The _cdecl keyword

The _cdecl keyword in QuickC is the "inverse" of the _fortran and _pascal
keywords. When applied to a function or function pointer, it indicates that
the associated function is to be called using the normal QuickC calling
convention. This allows you to write QuickC programs that take advantage of
the more efficient Pascal/FORTRAN calling convention while still having
access to the entire QuickC library, other QuickC objects, and even
user-defined functions that accept variable-length argument lists. The
_cdecl keyword takes precedence over the /Gc option.

For convenience, the _cdecl keyword has already been applied to
run-timelibrary function declarations in the include files distributed with
the QuickC compiler. Therefore, your QuickC programs can call the library
functions freely, no matter which calling conventions you compile with. Just
make sure to use the appropriate include file for each library function the
program calls.

    The /Gd option

The /Gd option has the same effect as the _cdecl keyword. It specifies that
the entire module should use the C calling convention. This option is on by
default.

    Naming conventions

Use of the _pascal and _fortran keywords, or the /Gc option, also affects
the naming convention for the associated item (or, in the case of /Gc, all
items): the name is converted to uppercase letters, and the leading
underscore that QuickC normally prefixes is not added. The _pascal and
_fortran keywords can be applied to data items and pointers, as well as to
functions; when applied to data items or pointers, these keywords force the
naming convention described above for that item or pointer.

The _pascal, _fortran, and _cdecl keywords, like the _near, _far, and _huge
keywords, are disabled by use of the /Za option. If this option is given,
these names are treated as ordinary identifiers, rather than keywords.


Examples

    int _cdecl var_print(char*,...);

In the example above,  var_print  is declared with a variable number of
arguments using the normal right-to-left QuickC function-calling convention
and naming conventions. The _cdecl keyword overrides the left-to-right
calling sequence set by the /Gc option if the option is used to compile the
source file in which this declaration appears. If this file is compiled
without the /Gc option, _cdecl has no effect since it is the same as the
default QuickC convention.

    float *pascal nroot(number, root);

The example above declares  nroot  to be a function returning a pointer to a
value of type float. The function  nroot uses the default calling sequence
(left-to-right) and naming conventions for Microsoft FORTRAN and Pascal
programs.


4.3.15  /Ge, /Gs (Turn Stack Checking On or Off)

    Stack probes

A "stack probe" is a short routine called on entry to a function to verify
that the program stack has enough room to allocate local variables required
by the function. The stack-probe routine is called at every function-entry
point. Ordinarily, the stack-probe routine generates a stack-overflow
message if the required stack space is not available. When stack checking is
turned off, the stack-probe routine is not called, and stack overflow can
occur without being diagnosed (that is, no stack-overflow message is
printed).

The QuickC compiler uses stack probes to guard against possible execution
errors. These stack probes are used whenever the /Ge option (the default) is
in effect. You can remove the stack probes by using either the /Gs option or
the check_stack pragma, which will reduce the size of a program and speed up
execution slightly. Note that the /Gs option and the check_stack pragma have
no effect on standard C library routines, only on the functions you compile.


    When to use the /Gs option

Use the /Gs option when you want to turn off stack checking for an entire
module, if you know that the program does not exceed the available stack
space. For example, stack probes may not be needed for programs that make
very few function calls or that have only modest local-variable
requirements. In the absence of the /Gs option, stack checking is on. The
/Gs option should be used with great care. Although it can make programs
smaller and faster, it may mean that the program will not be able to detect
certain execution errors.

    When to use  the check_stack pragma

Use the check_stack pragma when you want to turn stack checking on or off
only for selected routines, leaving the default (as determined by the
presence or absence of the /Gs option) for the rest. When you want to turn
off stack checking, put the following line before the definition of the
function you don't want to check:

    #pragma check_stack (off)

Note that the preceding line disables stack checking for all routines that
follow it in the source file, not just the routines on the same line. To
reinstate stack checking, insert the following line:

    #pragma check_stack (on)

If you don't give an argument for the check_stack pragma, stack checking
reverts to the behavior specified on the command line: disabled if the /Gs
option is given, or enabled if it is not. The interaction of the check_stack
pragma with the /Gs option is summarized in Table 4.4.

Table 4.4  Using the check_stack Pragma

╓┌────────────────────────┌────────────────────────┌─────────────────────────╖
                            Compiled with /Gs
Syntax                   Option?                  Action
────────────────────────────────────────────────────────────────────────────
#pragma check_stack()    Yes                      Turns off stack checking
                                                    for routines that follow

#pragma check_stack()    No                       Turns on stack checking
                            Compiled with /Gs
Syntax                   Option?                  Action
────────────────────────────────────────────────────────────────────────────
#pragma check_stack()    No                       Turns on stack checking
                                                    for routines that follow

#pragma check_stack(on)  Yes or no                Turns on stack checking
                                                    for routines that follow

#pragma                   Yes or no                Turns off stack checking
check_stack(off)                                  for routines that follow

────────────────────────────────────────────────────────────────────────────



────────────────────────────────────────────────────────────────────────────
NOTE
For versions of Microsoft QuickC prior to 2.0, the check_stack pragma had a
different format: check_stack(+) to enable stack checking and check_stack(-)
to disable stack checking. Although the Microsoft QuickC compiler still
accepts this format, its use is discouraged because it may not be supported
in future versions.
────────────────────────────────────────────────────────────────────────────


Example

    QCL /Gs FILE.C

This example optimizes the file FILE.C by removing stack probes with the /Gs
option. If you want stack checking for only a few functions in FILE.C, you
can use the check_stack pragma before and after the definitions of functions
you want to check.


4.3.16  /Gi (Use Incremental Compilation)


Option

    /Gi«mdtname»

When you specify the /Gi option, QCL compiles only those functions in each C
source file that have changed since the last time the source file was
compiled. The process of compiling only the changed functions in a source
file is known as "incremental compilation." Because the compiler does not
need to handle the entire source file, incremental compilation is
considerably faster than regular compilation. However, the object files
created and the code generated when you compile incrementally may be larger.


If you specify any of the optimization (/Ostring) options on the same line
with /Gi, the compiler ignores the /Gi option.

If you own the Microsoft C Optimizing Compiler version 5.1 or earlier, and
you wish to use the CodeView debugger, do not use the /Gi option or the
related /Li option (for incremental linking). You can use the QuickC
integrated debugger, or the CodeView debugger included with the Microsoft C
Professional Development System version 6.0, on programs compiled with /Gi
and /Li.

    Module-description table (MDT)

The compiler tracks changes for incremental compilation in a file known as a
"module-description table," or MDT. A single MDT can contain change
information for multiple source files. If you specify mdtname, the compiler
saves change information for all source files in a single MDT named mdtname.
If you do not specify mdtname, the compiler creates one MDT for each source
file named on the command line. Each MDT has the base name of the source
file and the .MDT extension.

The types of changes made to a source file determine whether the compiler
can incrementally compile a source file and whether the compiler creates or
updates the corresponding MDT.

    Incrementally compile, update MDT

Except as noted below, if changes are confined to function bodies, the QCL
command compiles only those changed functions and the "global regions" of
the source file. Global regions are the parts of the source file between the
closing curly brace (}) of one function and the opening curly brace ({) of
the next function (see Figure 4.2). The compiler also updates the MDT to
reflect changes to the source file.

(This figure may be found in the printed book.)

If a global region of the source file has changed, QCL recompiles from the
point at which the change occurred. A change in a global region is any
change in the storage-class specifier, type specifier, function declarator,
or formal-parameter declarations of a function. Similarly, if a file
specified in an #include directive has a more recent modification date than
the including object module, QCL recompiles the source file from the point
at which the #include directive appears. In addition, if a function is
defined within an include file, the source file is recompiled from the start
of the function.

    Compile whole program, don't update MDT

The compiler must recompile an entire source file, but does not update its
MDT, in both of these cases:


    ■   A function definition appears within an include file.

    ■   The compiler does not have enough memory to create the MDT.


    Using function prototypes

For fastest compilation with /Gi, use a prototype for each function in your
program. A function prototype lists the name and type of the function and
the name and type of each of its parameters. (See Chapter 2, "Functions," in
C for Yourself for more information.) The C include files that Microsoft
supplies contain prototypes for all the functions in the C run-time library.
The information in the prototypes lets the compiler check the number and
type of arguments to the function.

If you use the /Gi option and your program contains functions without
corresponding prototypes, the compiler issues the following level 3 warning
message:

    no function prototype given

    Compilation errors

When the /Gi option is given and errors occur during compilation, the
compiler still creates a partial object file; that is, it generates object
code up to the point at which the error occurs. It places a record in each
object file indicating that the object file is invalid. If you try to link
one of these object files, the linker issues the following error message:

    invalid object due to aborted incremental compile

    Incremental linking

When the compiler can perform incremental compilation, it invokes a special
form of the linker that performs "incremental linking." Like incremental
compiling, incremental linking links only the object files that have changed
since the previous link. No library searches are performed; the assumption
is that the libraries are exactly the same as in the previous link.
Incremental linking is considerably faster than regular linking. If any of
the changes to the program prevent QuickC from performing an incremental
link, it automatically performs a full link. If you specify the /c option
along with the /Gi option, QCL performs incremental compilation, but does
not invoke any linker.

────────────────────────────────────────────────────────────────────────────
NOTE

If you use the /Gi option with the /Fm option (which produces a map file),
the map file is a segmented-executable map file rather than a DOS-executable
map file. The segment addresses in the file are different from those in DOS
map files, and the file itself has a different format.
────────────────────────────────────────────────────────────────────────────


Examples

For the following examples, assume there are three C source files named
MOD1.C, MOD2.C, and MOD3.C .

    QCL /Gi MOD1.C MOD2.C MOD3.C

The example above incrementally compiles and links the three C source files.
Three MDTs are created or updated: MOD1.MDT, MOD2.MDT, and MOD3.MDT.

    QCL /GiMYMDT.MDT MOD1.C MOD2.C MOD3.C

The example above has the same effect as the example preceding it, except
that the compiler creates or updates only one MDT named MYMDT.MDT. This MDT
includes all change-control information for the three C source files.


4.3.17  /Gr (Register Calling Convention)

Normally, your program passes parameters to functions on the stack. The /Gr
option causes your program to pass parameters in registers instead. This
calling convention decreases execution time if you are using the Microsoft C
Professional Development System version 6.0, but it gives no advantage if
you are using QuickC. Therefore, you should use the /Gr option only if you
plan on using the C Professional Development System for your final
compilation.

This method of parameter passing is not appropriate for all functions. The
/Gr option enables it for all eligible functions, and the _fastcall keyword
enables it on a function-by-function basis. The _fastcall keyword cannot be
used with the _cdecl or _pascal keywords.

Because the 80x86 processor has a limited number of registers, only the
first three parameters are passed in registers; the remaining parameters are
passed using the FORTRAN/Pascal calling convention (see the /Gc option).

Note that the compiler allocates different registers for variables declared
as register and for passing arguments using the register calling convention.
Passing arguments in registers does not conflict with any register variables
that you may have declared.

────────────────────────────────────────────────────────────────────────────
IMPORTANT

Exercise caution when using the register calling convention for any function
written in in-line assembly language. Your use of registers in assembly
language could conflict with the compiler's use of registers for storing
parameters.
────────────────────────────────────────────────────────────────────────────


4.3.17.1  The _fastcall Calling Convention

The following section describes the details of the _fastcall calling
convention. This information is for assembly-language programmers who are
interested in using either the in-line assembler or the Microsoft Macro
Assembler to write functions declared as _fastcall.

────────────────────────────────────────────────────────────────────────────
WARNING

The register usage documented here applies only to Microsoft QuickC version
2.5 and Microsoft C Professional Development System version 6.0. It may
change in future releases of either compiler.
────────────────────────────────────────────────────────────────────────────


4.3.17.2  Argument-Passing Convention

The _fastcall register calling convention is "strongly typed": the compiler
allocates arguments to registers according to the argument's data types.
Strong typing allows the compiler to generate better code. Because the
compiler chooses registers depending on the type of the argument and not in
a strict linear order, the calling program and called function must agree on
the types of the arguments in order to communicate data correctly.

For each type of argument, there is a list of register candidates. Each
argument is put in the first register candidate that does not already
contain an argument. If no suitable register remains unused, the arguments
are pushed onto the stack in left-to-right order. The following list shows
the basic types and the register candidate for each:

Type                              Register Candidates
────────────────────────────────────────────────────────────────────────────
character                         AL, DL, BL

unsigned character                AL, DL, BL

integer                           AX, DX, BX

unsigned integer                  AX, DX, BX

long integer                      DX:AX

unsigned long integer             DX:AX

near pointer                      BX, AX, DX

Structures and unions are always pushed onto the stack, as are all
floating-point types.


4.3.17.3  Return Value Convention

The _fastcall return value convention is based on the size of the return
value, except with floating-point types. All floating point types are
returned on the top of the numeric coprocessor stack (whether real or
emulated). The following list shows how values 4 bytes or smaller, including
unions and structures, are returned from a _fastcall function.

Size                              Return Convention
────────────────────────────────────────────────────────────────────────────
1 Byte                            AL Register

2 Bytes                           AX Register

4 Bytes                           DX, AX Registers (for pointers, the
                                    segment is returned in DX, the offset in
                                    AX; for long integers, the
                                    most-significant byte is returned in DX,
                                    leastsignificant byte in AX)

The method for returning values 4 bytes or smaller is the same as for
functions declared as _cdecl. To return structures and unions larger than 4
bytes, the calling function passes a hidden parameter after the rest of the
parameters have been pushed. This parameter is a near pointer, based in the
segment specified by the stack register (SS), to a buffer in which the value
is to be returned. A far pointer to SS:hidden-param is returned in DX:AX.
This is the same convention for returning structures as _pascal.


4.3.17.4  Stack Adjustment Convention

When a function declared as _cdecl terminates, the calling program clears
the stack of the parameters it passed. However, functions declared as
_fastcall must pop the parameters off the stack themselves. The calling
function does not adjust the stack after function return.


4.3.17.5  Register Preservation Requirement

All functions must preserve the DS, BP, SI, and DI registers. Your _fastcall
function can modify the values in AX, DX, and BX.

────────────────────────────────────────────────────────────────────────────
NOTE

The compiler can make significant optimizations by keeping certain values in
registers. One such value is the base for variables declared as _based. This
value is normally stored in the ES register. By declaring functions as
_fastcall, you guarantee that the ES register is preserved and that ES does
not have to be reloaded.
────────────────────────────────────────────────────────────────────────────


4.3.18  /Gt (Set Data Threshold)


Option

    /Gt«number»

The /Gt option causes all data items whose size is greater than or equal to
number bytes to be allocated in a new data segment.

If you specify number, it must follow the /Gt option immediately with no
intervening spaces. If you use /Gt without a number, the default threshold
value is 256. If you don't use the /Gt option, the default threshold value
is 32,767.

Use this option with programs that have more than 64K of initialized static
and global data in small data items.

By default, the compiler allocates all static and global data items within
the default data segment in the tiny, small and medium memory models. In
compact-, large-, and huge-model programs, only initialized static and
global data items are assigned to the default data segment.

────────────────────────────────────────────────────────────────────────────
NOTE

You can use the /Gt option only if you are creating a compact-, large-, or
huge-model program because tiny-, small-, and medium-model programs have
only one data segment.
────────────────────────────────────────────────────────────────────────────


4.3.19  /Gw, /GW (Generate Code for Windows(tm) Function Calls)

The /Gw option instructs the compiler to generate entry/exit code sequences
for call-back functions in Windows applications. The /GW option is similar,
but it generates a more efficient entry sequence and is intended for use
with non-call-back functions. See the Microsoft Windows(tm) Software
Development Kit for more information.


4.3.20  /HELP (List the Compiler Options)


Option

    /HELP
    /help

This option displays a list of the most commonly used compiler options. QCL
processes all information on the line containing the /help option and
displays the command list.

Unlike all the other QCL options, /HELP is not case sensitive. Any
combination of uppercase and lowercase letters is acceptable. For example,
/hELp is a valid form of this option. The option has no abbreviation.


4.3.21  /I (Search Directory for Include Files)



Option

/Idirectory

You can add to the list of directories searched for include files by using
the /I (for "include") option. This option causes the compiler to search the
directory you specify before searching the directories given by the INCLUDE
environment variable. That way, you can give a particular file special
handling without changing the compiler environment you normally use.

The space between /I and directory is optional. To search more than one
directory, you can give additional /I options on the QCL command line. The
directories are searched in order of their appearance on the command line.

The directories are searched only until the specified include file is found.
If the file is not found in the given directories or the standard places,
the compiler prints an error message and stops processing. When this occurs,
you must restart compilation with a corrected directory specification.


Examples

    QCL /I \INCLUDE /I\MY\INCLUDE MAIN.C

In the example above, QCL looks for the include files requested by MAIN.C in
the following order: first in the directory \INCLUDE, then in the directory
\MY\INCLUDE, and finally in the directory or directories assigned to the
INCLUDE environment variable.

    QCL /X /I \ALT\INCLUDE MAIN.C

In the example above, the compiler looks for include files only in the
directory \ALT\INCLUDE. First the /X option tells QCL to consider the list
of standard places empty; then the /I option specifies one directory to be
searched.


4.3.22  /J (Change Default char Type)

In Microsoft QuickC, the char type is signed by default, so if a char value
is widened to int type, the result is sign-extended.

You can change this default to unsigned with the /J option, causing the char
type to be zero-extended when widened to int type. If a char value is
explicitly declared signed, however, the /J option does not affect it, and
the value is sign-extended when widened to int type. This option is useful
when working with character data that eventually will be translated into a
language other than English.

When you specify /J, the compiler automatically defines the identifier
_CHAR_UNSIGNED, which is used with #ifndef in the LIMITS.H include file to
define the range of the default char type.


4.3.23  /Lc, Lr (Compile for Real Mode)

The /Lc and /Lr options are synonymous. Both options compile the program for
OS/2 real mode or for the DOS environment. If you compile with /Lc or /Lr,
you must make sure the linker uses the appropriate real-mode library; either
use /NOD to tell the linker not to search for the default library, or rename
the appropriate real-mode library so that it has the default name.


4.3.24  /Li (Link Incrementally)

The /Li option specifies incremental linking, causing QCL to invoke ILINK
instead of QLINK for linking the object files. When you link incrementally,
the linker pads all _near functions to a 40-byte boundary by default. Note
that QCL automatically invokes the incremental linker when you use the /Gi
option for incremental compilation, unless you also specify the /c option to
prevent linking.


4.3.25  /Ln (Link without C Run-Time Startup Code)

If you are using the tiny memory model (see the /AT option for QCL), you
will be creating a .COM file (see the /T option for QLINK). Normally, QCL
tells QLINK to link tiny- model programs with CRTCOM.LIB; this file contains
startup code needed by any .COM program written in C. Programs that are
written in assembly language do not need this code. Use the /Ln option to
keep QLINK from linking with this startup code.


4.3.26  /ND, /NT (Name the Data or Code Segments)


Options

    /NDdatasegment
    /NTcodesegment

The /ND option renames a data segment in a QuickC program, and the /NT
option renames a code segment. The name can be any combination of letters
and digits. The space between the option and the argument is optional.

Each object file produced by the QuickC compiler has its code and its data
stored separately, in blocks called "segments." A segment that contains
program instructions is called a "code segment," while a segment that
contains program data is

called a "data segment." An object file may have one or more of each kind of
segment. When object files are linked into a program, these segments are
combined and reorganized. The program's memory model determines how many
code segments and how many data segments the resulting program has (see
Appendix B).

Every segment in every object file has a name. The linker uses this name to
determine which segments are combined during linking, and how the segments
are arranged in the .EXE file. (Note that the segments in the group named
DGROUP are an exception.) By using the /ND and /NT options, you can control
how segments are combined and arranged.

The QuickC compiler normally gives the code and data segments default names.
These default names are determined by the memory model chosen for the
program, as follows:


    ■   Tiny- and small-model programs. The code segment is named _TEXT and
        the data segment is named _DATA. These names are the same for all
        object files. During linking with the tiny model, all the code and
        data are placed in one segment. During linking with the small model,
        all code segments from all object files are placed in one segment, and
        all data segments are placed in another segment.

    ■   Medium-model programs. The code segment for each object file is given
        a distinct name, consisting of the module base name plus the suffix
        _TEXT. The data segment is named _DATA.

    ■   Compact-model programs. All data items that are smaller than the
        threshold size (specified by the /Gt option) are placed in the default
        data segment, _DATA. If they are larger than the threshold, they are
        placed in a segment having a distinct name consisting of the
        object-file name plus a suffix (_DATA, _CONST, or _BSS). The code
        segment is named _TEXT.

    ■   Large- and huge-model programs. The code and data from each object
        file are placed in separate segments with distinct names. Each code
        segment is given the name of the object file plus the suffix _TEXT.
        All data items smaller than the threshold size are placed in the
        default data segment, _DATA, and those that are larger are placed in a
        segment with a unique name.


The /ND option creates three new segments with the names datasegment,
datasegment_BSS, and datasegment_CONST, and combines them into a group named
datasegment_GROUP. The program then treats the named segment as the default;
that is, it assumes that the data register (DS) contains the address of the
segment, so that it can access the segment's contents using near pointers
instead of far. In doing so, your program no longer assumes that the address
in the stack segment register (SS) is the same as the address in the data
register (DS). You must therefore use the _loadds modifier for function
declarations or the /Au segment setup option to ensure that DS is loaded on
entry to a function.

The /NT option gives the code segment the specified name. In general, you
should not use the /NT option with the tiny, small and compact memory
models. Doing so may cause fixup-overflow errors at link time (see Section
5.5.6 for more information).


4.3.27  /nologo (Suppress Display of Sign-On Banner)

The /nologo option suppresses the display of the sign-on banner when QCL is
invoked.


4.3.28  /O Options (Optimize Program)


Option

    /O string

The /O options give you control over the optimizing procedures that the
compiler performs. The string consists of one or more of the letters "d,"
"l," "t," and "x." The list below shows how each of these affects
optimization:

Letter                            Optimizing Procedure
────────────────────────────────────────────────────────────────────────────
/Od                               Turns off all optimization

/Ol                               Enables loop optimization

/O, /Ot                           Favors execution speed during
                                    optimization
                                    (the default)

/Ox                               Maximizes optimization

    The letters can appear in any order. More than one /O option can be given;
the compiler uses the last one on the command line if any conflict arises.
Each option applies to all source files that follow on the command line.


4.3.28.1  /Od (Turn Off Optimization)

The /Od (for "debug") option tells the compiler to turn off all
optimizations in the program. This option speeds compilation because the
compiler does not take time to perform optimizations.

Use the /Od option when you compile with the /Zi option (described in
Section 4.3.36) to include debugging information. The /Od option does not
reorganize code, thus making it easier to debug.


4.3.28.2  /Ol (Optimize Loops)

The /Ol option tells the compiler to perform loop optimizations, which store
frequently used loop variables in registers. The /Ox option implicitly turns
on the /Ol option.


4.3.28.3  /O and /Ot (Minimize Execution Time)

When you do not use any of the /O options, the QCL command automatically
favors program execution speed in the optimization. The /O and /Ot options
have the same effect as this default.

Wherever the compiler has a choice between producing smaller (but perhaps
slower) and larger (but perhaps faster) code, the compiler generates faster
code. For example, when you specify the /Ot option, the compiler generates
intrinsic functions to perform shift operations on long operands.


4.3.28.4  /Ox (Use Maximum Optimization)

The /Ox option is a shorthand way to combine optimizing options to produce
the fastest possible program. Its effect is the same as using the following
options on the same command line:

    /Olt /Gs

That is, the /Ox option performs loop optimizations, favors execution time
over code size, and removes stack probes.


Example

    QCL /Ol FILE.C

This command tells the compiler to perform loop optimizations when it
compiles FILE.C. The compiler favors program speed over program size because
the /Ot option is also specified by default.


4.3.29  /P (Create Preprocessor-Output File)

The /P writes preprocessor output to a file with the same base name as the
source file but with the .I extension. The preprocessed listing file is
identical to the original source file except that all preprocessor
directives are carried out and macro expansions are performed. You normally
use the /P option with the /C option (discussed in Section 4.3.4), which
preserves comments in the preprocessed output.

The /P option suppresses compilation; QCL does not produce an object file or
listing, even if you specify the /Fo or /Fm option on the QCL command line.



Example

    QCL /P MAIN.C

The example above creates the preprocessed file MAIN.I from the source file
MAIN.C.


4.3.30  /Ta, /Tc (Specify Assembly Language or C Source File)


Options

    /Tc filename
    /Ta filename

The /Tc option specifies that filename is a C source file, even if it
doesn't have the extension .C. The /Ta option specifies that filename is an
assembly language file, even if it doesn't have the extension .ASM. You must
have installed the Microsoft Macro Assembler in order to use the /Ta option.
This option causes QCL to invoke the Macro Assembler to assemble the file.
The space between the option and the filename is optional.

If this option does not appear, QCL assumes that files with the .C extension
are C source files, files with the .ASM extension are assembly language
files, files with the .LIB extension are libraries, and files with any other
extension or with no extension are object files.

If you need to specify more than one source file with an extension other
than .C, you must specify each source file in a separate /Tc option. The
same is true with regard to assembly language files and the /Ta option.


Example

In the example below, the QCL command compiles the three source files
MAIN.C, TEST.PRG, and COLLATE.PRG.

    QCL MAIN.C /Tc TEST.PRG /Tc COLLATE.PRG PRINT.PRG

Because the file PRINT.PRG is given without a /Tc option, QCL treats it as
an object file. Therefore, after compiling the three source files, QCL links
the object files MAIN.OBJ, TEST.OBJ, COLLATE.OBJ, and PRINT.PRG.


4.3.31  /U, /u (Remove Predefined Names)


Options

    /U name
    /u

The /U (for "undefine") option turns off the definition of one of the names
that the QuickC compiler predefines. The /u option turns off the definitions
of all predefined names except for the name of the memory model. These
options do not apply to user-defined names.

These names are useful in writing portable programs. For instance, they can
be used with compiler directives to conditionally compile parts of a
program, depending on the processor and operating system being used. The
predefined identifiers and their meanings are listed in Table 4.5.

One or more spaces can separate /U and name. You can specify more than one
/U option on the same command line.

The /u option turns off the definitions of all predefined names except
M_I86mM, which identifies the memory model. You can use the /U option to
remove the definition of M_I86mM. If you do, however, you must explicitly
define the NULL constant in your program since the definition of NULL in the
STDIO.H and STDDEF.H files depends on the memory model in use.

    Limits on command-line definitions

The /U and /u options are useful if you need to give more than the maximum
number of definitions (23 if you use either the /Za or the /J option, 22 if
you use both options, or 24 otherwise) on the command line, or if you have
other uses for the predefined names. For each predefined name you remove,
you can substitute a definition of your own on the command line. When the
definitions of all six predefined names are removed, you can specify up to
30 command-line definitions. However, because MS-DOS limits the number of
characters you can type on a command line the number of definitions you can
specify in practice is probably fewer than 30.


Example

    QCL /UMSDOS /UM_I86 WORK.C

This example removes the definitions of two predefined names. Note that the
/U option must be given twice to do this.


4.3.32  /V (Set Version String)


Option

    /V string

The /V option embeds a text string in the object file. This string can label
an object file with a version number or a copyright notice. If the specified
string contains white-space characters, it must be enclosed in double
quotation marks (" "). A backslash must precede any embedded double
quotation marks.

Table 4.5  Predefined Names

╓┌────────────────┌────────────────────────────┌─────────────────────────────╖
Syntax           Purpose                      When Defined
────────────────────────────────────────────────────────────────────────────
_CHAR_UNSIGNED   Indicates that the char      When the /J option is given
                    type is unsigned by default.

M_I86            Identifies target machine    Always
                    as a member of the Intel(R)
                    family.

M_I86mM          Identifies memory model,     Always
                    where m is either T (tiny
                    model), S (small model), C
                    (compact model), M (medium
Syntax           Purpose                      When Defined
────────────────────────────────────────────────────────────────────────────
                    (compact model), M (medium
                    model), L (large model), or
                    H (huge model). If huge
                    model is used, both M_I86LM
                    and M_I86HM are defined.

M_I8086          Identifies target machine    When the /G0 option is given
                    as an 8086.                  and by default

M_I286           Identifies target machine    When the /G1 or /G2 option
                    as an 80286.                 is given

_MSC_VER         Identifies version of        Always
                    Microsoft C currently
                    supported. Equal to 600.

MSDOS            Identifies target operating  Always
                    system as MS-DOS.

Syntax           Purpose                      When Defined
────────────────────────────────────────────────────────────────────────────

NO_EXT_KEYS      Indicates that               When the /Za option is given
                    Microsoft-specific language
                    extensions and extended
                    keywords are disabled.

_QC              Identifies compiler as       Always
                    Microsoft QuickC.

────────────────────────────────────────────────────────────────────────────




4.3.33  /W, /w (Set Warning Level)


Options

    /W{0|1|2|3|4|X}
    /w

You can control the number of warning messages produced by the compiler by
using the /w, /W0, /W1, /W2, /W3, /W4, or /WX option. Compiler warning
messages are any messages beginning with C4; see Appendix D, "Error
Messages," for a complete list of these messages.

Warnings indicate potential problems (rather than actual errors) with
statements that may not be compiled as you intend.

The /W options affect only source files given on the command line; they do
not apply to object files.

The following list describes the warning-level options:

Option                            Action
────────────────────────────────────────────────────────────────────────────
/w                                Turns off all warning messages. Use this
                                    option when you compile programs that
                                    deliberately include questionable
                                    statements. The /W0 option applies to
                                    the remainder of the command line or
                                    until the next occurrence of a /W option
                                    on the command line.

/w0                               Same as /w.

/W1                               The default. Displays severe warning
                                    messages.

/W2                               Displays an intermediate level of
                                    warning messages. Level-2 warnings may
                                    or may not indicate serious problems.
                                    They include warnings such as the
                                    following:

                                    ■ Use of functions with no declared
                                    return type

                                    ■ Failure to put return statements in
                                    functions with non-void return types

                                    ■ Data conversions that would cause loss
                                    of data or precision

/W3                               Displays a higher level of warning
                                    messages, including warnings about
                                    function calls that precede their
                                    function prototypes in the source code.

/W4                               Displays the highest level of warning
                                    messages, including warnings about the
                                    use of non-ANSI features and extended
                                    keywords.

/WX                               Treats all warnings as fatal errors. If
                                    there are any warning messages, the
                                    compilation aborts and QCL does not
                                    produce an object file.

────────────────────────────────────────────────────────────────────────────
NOTE
The descriptions of the warning messages in Appendix D indicate the warning
level that must be set (that is, the number for the appropriate /W option)
for the message to appear.
────────────────────────────────────────────────────────────────────────────


Example

    QCL /W4 CRUNCH.C PRINT.C

This example enables all possible warning messages when the source files
CRUNCH.C and PRINT.C are compiled.


4.3.34  /X (Ignore Standard Include Directory)

You can prevent the QuickC compiler from searching the standard places for
include files by using the /X (for "exclude") option. When QCL sees the /X
option, it does not search the current directory or any directories
specified in the INCLUDE environment variable.

You can use this option with the /I option to define the location of include
files that have the same names as include files found in other directories
but that contain different definitions. See Section 4.3.21 for an example of
/X used with /I.


4.3.35  /Ze, /Za (Enable or Disable Language Extensions)

Microsoft QuickC supports the ANSI C standard. In addition, it offers a
number of features beyond those specified in the ANSI C standard. These
features are enabled when the /Ze (default) option is in effect and disabled
when the /Za option is in effect. They include the following:



    ■   The _cdecl, _far, _fortran, _huge, _near, and _pascal keywords

    ■   Use of casts to produce lvalues:

        int *p;
        ((long *)p)++;


        The preceding example could be rewritten to conform with the ANSI C
        standard:

        p = (int *)((long *)p + 1);

    ■   Redefinitions of extern items as static:

        extern int foo();
        static int foo()
        {}


    ■   Use of trailing commas (,) rather than an ellipsis (...) in function
        declarations to indicate variable-length argument lists:

        int printf(char *,);


    ■   Benign typedef redefinitions within the same scope:

        typedef int INT;
        typedef int INT;


    ■   Use of mixed character and string constants in an initializer:

        char arr[5] = {'a', 'b', "cde"};


    ■   Use of bit fields with base types other than unsigned int or signed
        int

    ■   Use of single-line comments, which are introduced with two slash
        characters:

        // This is a single-line comment.


    ■   Casting of a function pointer to a data pointer:

        int (* pfunc) ();
        int *pdata;

        pdata = (int *) pfunc;


        To perform the same cast while maintaining ANSI compatibility, you
        must cast the function pointer to an int before casting it to a data
        pointer:

        pdata = (int *) (int) pfunc;


Use the /Za option if you plan to port your program to other environments.
The /Za option tells the compiler to treat extended keywords as simple
identifiers and disable the other extensions listed above.

When you specify /Za, the compiler automatically defines the identifier
NO_EXT_KEYS. In the include files provided with the QuickC run-time library,
this identifier is used with #ifndef to control use of the _cdecl keyword on
library function prototypes. For an example of this conditional compilation,
see the file STDIO.H.


4.3.36  /Zi, /Zd (Compile for Debugging)

The /Zi option produces an object file containing full symbolic-debugging
information for use with the QuickC debugger and the CodeView
window-oriented debugger. This object file includes full symbol-table
information and line numbers.

The /Zd option produces an object file containing line-number records
corresponding to the line numbers of the source file. Use /Zd if you plan to
debug with the SYMDEB debugger. Also use this option when you want to reduce
the size of an executable file that you will be debugging with the CodeView
debugger and when you do not need to use the expression evaluator during
debugging.


Example

    QCL /c /Zi TEST.C

This command produces an object file named TEST.OBJ that contains line
numbers corresponding to the lines in TEST.C.


4.3.37  /Zl (Remove Default-Library Name from Object File)

Ordinarily, QCL puts the name of the default library (SLIBCE.LIB) in the
object file so that the linker can automatically find the correct library to
link with the object file.

The /Zl option tells the compiler not to place the default-library name in
the object file. As a result, the object file is slightly smaller.

Use the /Zl option when you are using the LIB utility (described in Chapters
2 and 6) to build a library. You can use /Zl to compile the object files you
plan to put in your library, thereby omitting the default-library names from
your object modules. Although the /Zl option saves only a small amount of
space for a single object file, the total amount of space saved is
significant in a library containing many object modules.


Example

    QCL ONE.C /Zl TWO.C

The example above creates the following two object files:


    1.  An object file named ONE.OBJ that contains the name of the C library
        SLIBCE.LIB

    2.  An object file named TWO.OBJ that contains no default-library
        information


When ONE.OBJ and TWO.OBJ are linked, the default-library information in
ONE.OBJ causes the default library to be searched for any unresolved
references in either ONE.OBJ or TWO.OBJ.


4.3.38  /Zp (Pack Structure Members)


Option

    /Zp«{1|2|4}»

When storage is allocated for structures, structure members are ordinarily
stored as follows:


    ■   Items of type char or unsigned char, or arrays containing items of
        these types, are byte aligned.

    ■   Structures are word aligned; structures of odd size are padded to an
        even number of bytes.

    ■   All other types of structure members are word aligned.


To conserve space or to conform to existing data structures, you may want to
store structures more or less compactly. The /Zp option and the pack pragma
control how structure data are packed into memory.

Use the /Zp option to specify the same packing for all structures in a
module. When you give the /Zpn option, where n is 1, 2, or 4, each structure
member after the first is stored on n-byte boundaries depending on the
option you choose. If you use the /Zp option without an argument, structure
members are packed on two-byte boundaries.

On some processors, the /Zp option may result in slower program execution
because of the time required to unpack structure members when they are
accessed. For example, on an 8086 processor, this option can reduce
efficiency if members with int or long type are packed in such a way that
they begin on odd-byte boundaries.

Use the pack pragma in your source code to pack particular structures on
boundaries different from the packing specified on the command line. Give
the pack(n) pragma, where n is 1, 2, or 4, before structures that you want
to pack differently. To reinstate the packing given on the command line,
give the pack() pragma with no arguments.

Table 4.6 shows the interaction of the /Zp option with the pack pragma.

Table 4.6  Using the pack Pragma

╓┌─────────────────────┌─────────────────────────┌───────────────────────────╖
                        Compiled with /Zp
Syntax                Option?                   Action
────────────────────────────────────────────────────────────────────────────
#pragma pack()        Yes                       Reverts to packing
                                                specified on the command
                                                line for structures that
                                                follow

#pragma pack()        No                        Reverts to default packing
                                                for structures that follow

#pragma pack(n)       Yes or no                 Packs the following
                                                structures to the given
                                                byte boundary until
                                                changed or disabled

────────────────────────────────────────────────────────────────────────────
                        Compiled with /Zp
Syntax                Option?                   Action
────────────────────────────────────────────────────────────────────────────
────────────────────────────────────────────────────────────────────────────




Example

    QCL /Zp PROG.C

This command causes all structures in the program PROG.C to be stored
without extra space for alignment of members on int boundaries.


4.3.39  /Zr (Check Pointers)

The /Zr option checks for null or out-of-range pointers in your program. A
run-time error occurs if you try to run a program with such pointers.

    #pragma check_pointer

If you compile with the /Zr option, you can use the check_pointer pragma
within your source file to turn checking on or off only for selected
pointers leaving the default (see below) for the remaining pointers in the
program. When you want to turn on pointer checking, put the following line
before the usage of the pointer you want to check:

    #pragma check_pointer (on)

This line turns on pointer checking for all pointers that follow it in the
source file, not just the pointers on the following line. To turn off
pointer checking, insert the following line:

    #pragma check_pointer (off)

If you don't give an argument for the check_pointer pragma, pointer checking
reverts to the behavior specified on the command line: turned on if the /Zr
option is given or turned off otherwise.


Example

    QCL /Zr prog.c

This command causes QCL to check for null or out-of-range pointers in the
file prog.c. All pointers in the file are checked except those to which a
check_pointer(off) pragma applies.


4.3.40  /Zs (Check Syntax Only)

The /Zs option tells the compiler to check only the syntax of the source
files that follow the option on the command line. This option provides a
quick way to find and correct syntax errors before you try to compile and
link a source file.

When you give the /Zs option, the compiler does not generate code or produce
object files, object listings, or executable files. The compiler, however,
does display error messages if the source file has syntax errors.


Example

    QCL /Zs TEST*.C

This command causes the compiler to perform a syntax check on all source
files in the current working directory that begin with TEST and end with the
.C extension. The compiler displays messages for any errors found.


4.3.41  Giving Options with the CL Environment Variable

Use the CL environment variable to specify files and options without giving
them on the command line. This variable has the following format:

    SET CL=« «option» ... «file» ...» «/link « link-libinfo» »

Use this variable if you usually give a large number of files and options
when you compile. Ordinarily, DOS limits the command line to 128 characters.
The files and options that you define with the CL environment variable,
however, do not count toward this limit. Therefore, you can define the files
and options you use most often with the CL variable and then give only the
files and options you need for specific purposes on the command line.

The information defined in the CL variable is treated as though it appeared
before the information given on the QCL command line, as illustrated in
Figure 4.3.

(This figure may be found in the printed book.)

Note that if you have given an option in the CL environment variable, you
generally cannot turn off or change the option from the command line. You
must reset the CL environment variable and omit the file or option that you
do not want to use.

Also note that you cannot use CL to set options that use an equal sign (for
example, the /Didentifier= string option), and you cannot use wild-card
characters in file names to specify multiple files with CL.


Examples

In the following example, the CL environment variable tells the QCL command
to use the /Zp, /Ox, and /I options during compilation and then to link with
the object file \LIB\BINMODE.OBJ.

    SET CL=/Zp /Ox /I\INCLUDE\MYINCLS \LIB\BINMODE.OBJ
    QCL INPUT.C

With CL defined as shown, the QCL command above has the same effect as the
command line

    QCL /Zp /Ox /I\INCLUDE\MYINCLS \LIB\BINMODE.OBJ INPUT.C

That is, both specify structure packing on two-byte boundaries; perform
maximum optimizations; search for include files in the \INCLUDE\MYINCLS
directory; and suppress translation of carriage-return-line-feed character
combinations for the source file INPUT.C.

In the following example, the CL environment variable tells the QCL command
to compile and link the source files FILE1.C and FILE2.C.

    SET CL=FILE1.C FILE2.C
    QCL FILE3.OBJ

The QCL command line above has the same effect as the command line

    QCL FILE1.C FILE2.C FILE3.OBJ

The following example illustrates how to turn off the effects of a QCL
option defined in the environment.

    SET CL=/Za
    QCL FILE1.C /Ze FILE2.C

In this example, the CL environment variable is set to the /Za option, which
tells the compiler not to recognize Microsoft extensions to the C language.
This option causes Microsoft-specific keywords to be treated as ordinary
identifiers rather than reserved words. The QCL command specifies the
inverse option, /Ze, which tells the compiler to treat language extensions
as reserved words. Since the effect is the same as compiling with the
command line

    QCL /Za FILE1.C /Ze FILE2.C

FILE1.C is compiled with language extensions turned off and FILE2.C is
compiled with language extensions enabled.


4.4  Controlling Stack and Heap Allocation

The "stack" and the "heap" are two important memory areas that are allocated
for QuickC programs. The stack is used for all local data (that is, data
that are defined within a function); the heap is used for all dynamically
allocated data (that is, data allocated by one of the alloc family of
functions).

Programs compiled and linked with QuickC run with a fixed stack size (the
default size is 2,048 bytes). The stack resides above static data, and the
heap uses whatever space is left above the stack. For some programs,
however, a fixed-stack model may not be ideal; a model where the stack and
heap compete for space is more appropriate.

Linking with the mVARSTCK.OBJ object files (where m is the first letter of
the library you choose) gives you such a model: when the heap runs out of
memory, it tries to use available stack space until it runs into the top of
the stack. When the allocated space in the heap is freed, it is once again
made available to the stack. Note that the stack cannot grow beyond the
last-allocated heap item in the stack, or, if there are no heap items in the
stack, beyond the size it was given at link time. Furthermore, while the
heap can employ unused stack space, the reverse is not true: the stack
cannot employ unused heap space.

You can change the model used to allocate heap space by linking your program
with one of the mVARSTCK.OBJ object files. These files are the small-,
medium-, compact-, and large-model versions of a routine that allows the
memory-allocation functions (malloc, calloc, _expand, _fmalloc, _nmalloc,
and realloc) to allocate items in unused stack space if they run out of
other memory. (If you use the huge memory model, link with the large-model
object file LVARSTCK.OBJ.)

When you link your program with one of the mVARSTCK.OBJ files, do not
suppress stack checking with the #check_stack pragma, or with the /Gs or /Ox
option. Stack overflow can occur more easily in programs that link with the
variable-stack object files, possibly causing errors that would be difficult
to detect.


Example

    QCL TEST.C SVARSTCK

This command line compiles TEST.C and then links the resulting object module
with SVARSTCK.OBJ, the variable-stack object file for small-model programs.







Chapter 5  QLINK
────────────────────────────────────────────────────────────────────────────

This chapter describes in detail the operation of the Microsoft QuickC
Compiler linker (QLINK) and includes an alphabetical reference to the QLINK
options.


5.1  Overview

The QuickC linker (QLINK) combines object files into a single executable
file. It can be used with object files compiled or assembled for 8086/8088,
80286, 80386, or 80486 machines. The format of input to the linker is the
Microsoft Relocatable Object-Module Format (OMF), which is based on the
Intel 8086 OMF.

The output file from QLINK (that is, the executable file) is not bound to
specific memory addresses. Thus, the operating system can load and execute
this file at any convenient address. QLINK can produce executable files
containing up to one megabyte of code and data.


5.2  Invoking QLINK

Instead of using the QCL command to invoke the linker, you can use the QLINK
command to invoke QLINK directly. You can specify the input required for
this command in one of three ways:


    1.  By placing it on the command line.

    2.  By responding to prompts.

    3.  By specifying a file containing responses to prompts. This type of
        file is known as a "response file."


Regardless of how you invoke QLINK, you can press CTRL+C at any time to
terminate a QLINK operation and exit to DOS.

You can use any combination of uppercase and lowercase letters for the file
names you specify on the QLINK command line or give in response to the QLINK
command prompts.

If you specify file names without extensions, QLINK uses the following
default file-name extensions:

File Type                         Default Extension
────────────────────────────────────────────────────────────────────────────
Object                            .OBJ

Executable                        .EXE

Map (or "Listing")                .MAP

Library                           .LIB

You can override the default extension for a particular command-line field
or prompt by specifying a different extension. To enter a file name that has
no extension, type the name followed by a period.


5.2.1  Command Line

Use the following form of the QLINK command to specify input on the command
line:

    QLINK «linkoptions» objfiles «,  «exefile» «, «mapfile» «, «libraries» » »
    » «;»

Commas must separate command-line fields. You can omit the text from any
field (except the required objfiles), but you must include the comma. A
semicolon can end the command line after any field causing QLINK to use
defaults for the remaining fields. See Section 5.2.1.6 for details of QLINK
defaults.

The command-line fields are explained below.


5.2.1.1  QLINK Options

You can specify command-line options after any field but before the comma
that terminates the field. You do not have to give any options when you run
the linker. Linker options are described in Section 5.4.


5.2.1.2  Object Files

The objfiles field allows you to specify the names of the object files you
are linking. You must specify at least one object-file name. A space or plus
sign (+) must separate each pair of object-file names. QLINK automatically
supplies the .OBJ extension when you give a file name without an extension.
If your object file has

a different extension or if it appears in another directory or on another
disk, you must give the full name─including the extension and path name─for
the file to be found. If QLINK cannot find a given object file and the drive
associated with the object file is a removable-disk (floppy) drive, then
QLINK displays a message and waits for you to change disks.

You can also specify one or more libraries in the objfiles field. To enter a
library in this field, make sure that you include the .LIB extension;
otherwise, QLINK assumes the .OBJ extension. Libraries entered in this field
are called "load libraries." QLINK automatically links in every object
module in a load library; it does not search for unresolved external
references first. The effect of entering a load library is exactly the same
as if you had entered the names of all the library's object modules in the
objfiles field. This feature is useful if you are developing software using
many object files and wish to avoid typing the name of each file on the
QLINK command line.


5.2.1.3  Executable File

The exefile field allows you to specify the name of the executable file. If
the file name you give does not have an extension, QLINK automatically adds
.EXE as the extension. You can give any file name you like. However, if you
are specifying an extension, you should always use .EXE because DOS expects
executable files to have either this extension or the .COM extension.


5.2.1.4  Map File

The mapfile field allows you to specify the name of the map file if you are
creating one. To include public symbols and their addresses in the map file,
specify the /MAP option on the QLINK command line.

If you specify a map-file name without an extension, QLINK automatically
adds a .MAP extension. QLINK creates the map file in the current working
directory unless you specify a path name for the map file.


5.2.1.5  Libraries

The libraries field allows you to specify the name of one or more libraries
that you want linked with the object file(s). When QLINK finds the name of a
library in this field, it treats the library as a "regular library"; QLINK
links in only those object modules needed to resolve external references.

Each time you compile a source file for a high-level language, the compiler
places the name of one or more libraries in the object file that it creates;
the linker automatically searches for a library with this name (see Section
5.2.4). Because of this, you do not need to give library names on the QLINK
command line unless you want to search libraries other than the default
libraries or libraries in different locations.

When you link your program with a library, the linker pulls into your
executable file any library modules that your program references. If the
library modules have external references to other library modules, the
linker links your program with those other library modules as well.


5.2.1.6  Choosing Defaults

If you include a comma (to indicate where a field would be) but do not put a
file name before the comma, then QLINK selects the default for that field.
However, if you use a comma to include the mapfile field (but do not include
a name), then QLINK creates a map file. This file has the same base name as
the executable file. Use NUL for the map-file name if you do not want to
produce a map file.

You can also select default responses by using a semicolon (;). The
semicolon tells QLINK to use the defaults for all remaining fields. QLINK
ignores anything after the semicolon. If you do not give all file names on
the command line or if you do not end the command line with a semicolon, the
linker prompts you for the files you omitted. See Section 5.2.2 for a
description of these prompts.

The list below summarizes the linker's defaults for each field:

Field                             Default
────────────────────────────────────────────────────────────────────────────
linkoptions                       Assumes no options.

exefile                           Creates a file with the base name of the
                                    first object file and a .EXE extension.

mapfile                           Does not create a map file unless you
                                    include the mapfile field. The field may
                                    be empty, as in the following command
                                    line:
                                    QLINK myfile yourfile, ourfile, ;
                                    If you include the field, but not a file
                                    name, QLINK creates a map file with the
                                    base name of the executable file and the
                                    .MAP extension. Thus the example creates
                                    a map file named OURFILE.MAP.

libraries                         Searches only the default libraries
                                    specified in the object files.

If you do not specify a drive or directory for a file, the linker assumes
that the file is on the current drive and directory. If you want the linker
to create files in a location other than the current drive and directory,
you must specify the new drive and directory for each such file on the
command line.


Examples

    QLINK SPELL+TEXT+DICT+THES, ,SPELLIST, XLIB.LIB

The command line above causes QLINK to load and link the object files
SPELL.OBJ, TEXT.OBJ, DICT.OBJ, and THES.OBJ, and to search for unresolved
references in the library file, XLIB.LIB, and the default libraries. By
default, QLINK gives the executable file that it produces the name
SPELL.EXE. QLINK also produces a map file, SPELLIST.MAP. Note that a
semicolon is not required because a library is specified.

    QLINK SPELL,,;

The QLINK command line shown above produces a map file SPELL.MAP because a
comma appears as a placeholder for the mapfile specification on the command
line.

    QLINK SPELL,;

QLINK SPELL;

The two command lines above do not produce a map file because commas do not
appear as placeholders for the mapfile specification.

    QLINK MAIN+GETDATA+PRINTIT, , MAIN;

The command above causes QLINK to link the three files MAIN.OBJ,
GETDATA.OBJ, and PRINTIT.OBJ into an executable file. QLINK also produces a
map file named MAIN.MAP.


5.2.2  Prompts

If you want the linker to prompt you for input, start QLINK by entering

    QLINK

at the DOS prompt. QLINK also displays prompts if you type an incomplete
command line that does not end with a semicolon or if a response file is
missing any required responses (see Section 5.2.3) .

QLINK prompts you for the input it needs by displaying the following lines,
one at a time. The items in square brackets are the defaults QLINK applies
if you press ENTER in response to the prompt. (You must supply at least one
object-file name for the "Object Modules" prompt.) QLINK waits for you to
respond to each prompt before it displays the next one.

    Object Modules [.OBJ]:
    Run File [basename.EXE]:
    List File [NUL.MAP]:
    Libraries [.LIB]:

Note that the default for the  Run File  prompt is the base name of the
first object file with the .EXE extension.

The responses you give to the QLINK command prompts correspond to the fields
on the QLINK command line as follows:

Prompt                            Command-Line Field
────────────────────────────────────────────────────────────────────────────
"Object Modules"                  objfiles

"Run File"                        exefile

"List File"                       mapfile

"Libraries"                       libraries

    Continuation character (+)

If you type a plus sign (+) as the last character on a response line, the
same prompt appears on the next line; you can then continue typing
responses. The plus sign must appear at the end of a complete file or
library name, path name, or drive name.

    Choosing defaults

To select the default response to the current prompt, press ENTER without
giving a file name. The next prompt appears.

To select default responses to the current prompt and all remaining prompts,
type a semicolon (;) and press ENTER. You can enter the semicolon by itself,
or place it after your response to the current prompt. After you type a
semicolon, you cannot respond to any of the remaining prompts for that link
session. This option saves time when you want the default responses. Note,
however, that because there is no default response for that prompt, you
cannot enter only a semicolon in response to the "Object Modules" prompt;
the linker requires the name of at least one object file.

The following list shows the defaults for the other linker prompts:

Prompt                            Default
────────────────────────────────────────────────────────────────────────────
"Run File"                        The name of the first object file
                                    submitted at the "Object Modules" prompt,
                                    with the .EXE extension replacing the
                                    .OBJ extension

"List File"                       The special file name NUL.MAP, which
                                    tells QLINK not to create a map file

"Libraries"                       The default libraries encoded in the
                                    object files (see Section 5.2.4)


5.2.3  Response File

A response file contains responses to the QLINK prompts. The responses must
be in the same order as the QLINK prompts discussed in the previous section.
Each new response must appear on a new line or must begin with a comma;
however, you can extend long responses across more than one line by typing a
plus sign (+) as the last character of each incomplete line. You can give
options at the end of any response or place them on one or more separate
lines.

QLINK treats the input from the response file just as if you had entered it
in response to prompts or on a command line. It treats any new-line
character in the response file as if you had pressed ENTER in response to a
prompt or included a comma in a command line. (This mechanism is illustrated
in Figure 5.1.) For compatibility with OS/2 versions of the linker, it is
recommended that all linker response files end with a semicolon after the
last line.

(This figure may be found in the printed book.)

To use the linker with a response file, create the response file, then type
the following command:

    QLINK @responsefile

Here responsefile specifies the name or path name of the response file for
the linker. You can also enter the name of a response file, preceded by an
"at" sign (@), after any QLINK command prompt or at any position in the
QLINK command line; in this case, the response file completes the remaining
input.

    Options and command characters

You can use options and command characters in the response file in the same
way you would use them in responses you type at the keyboard. For example,
if you type a semicolon on the line of the response file corresponding to
the "Run File" prompt, QLINK uses the default responses for the executable
file and for the remaining prompts.

    Prompts

When you enter the QLINK command with a response file, each QLINK prompt is
displayed on your screen with the corresponding response from your response
file. If the response file does not include a line with a file name,
semicolon, or carriage return for each prompt, QLINK displays the
appropriate prompt and waits for you to enter a response. When you type an
acceptable response, QLINK continues.


Example

Assume that the following response file is named SPELL.LNK:

    SPELL+TEXT+DICT+THES
    /PAUSE /MAP
    SPELLIST
    XLIB.LIB;

You can type the following command to run QLINK and tell it to use the
responses in SPELL.LNK:

    QLINK @SPELL.LNK

The response file tells QLINK to load the four object files SPELL, TEXT,
DICT, and THES. QLINK produces an executable file named SPELL.EXE and a map
file named SPELLIST.MAP. The /PAUSE option tells QLINK to pause before it
produces the executable file so that you can swap disks, if necessary. The
/MAP option tells QLINK to include public symbols and addresses in the map
file. QLINK also links any needed routines from the library file XLIB.LIB.
The semicolon is included after the library name for compatibility with the
OS/2 version of the linker.


5.2.4  How QLINK Searches for Libraries

QLINK searches for libraries that are specified in either of the following
ways:


    ■   In the libraries field on the command line or in response to the
        "Libraries" prompt.

    ■   By an object file. The QuickC compiler writes the name of a default
        combined library in each object file it creates.

────────────────────────────────────────────────────────────────────────────
NOTE

The material in this section does not apply to libraries that QLINK finds in
the objfiles field, either on the command line or in response to the "Object
Modules" prompt. Those libraries are treated simply as a series of object
files, and QLINK does not conduct extensive searches in such cases.
────────────────────────────────────────────────────────────────────────────




    Library name with path specification

If the library name includes a path specification, QLINK searches only that
directory for the library. Libraries specified by object files (that is,
default libraries) normally do not include a path specification.

    Library name without path specification

If the library name does not include a path specification, QLINK searches
the following locations, in the order shown, to find the library file:


    1.  The current directory

    2.  Any path specifications or drive names that you give on the command
        line or type in response to the "Libraries" prompt, in the order in
        which they appear

    3.  The locations given by the LIB environment variable


Because object files created by the QuickC compiler contain the names of all
the standard libraries you need, you are not required to specify a library
on the QLINK command line or in response to the QLINK "Libraries" prompt
unless you want to do one of the following:


    ■   Add the names of additional libraries to be searched

    ■   Search for libraries in different locations

    ■   Override the use of one or more default libraries


For example, if you have developed your own customized libraries, you might
want to include one or more of them as additional libraries at linking time.



5.2.4.1  Searching Additional Libraries

You can tell QLINK to search additional libraries by specifying one or more
library files on the command line or in response to the "Libraries" prompt.
QLINK searches these libraries in the order you specify before it searches
default libraries.

QLINK automatically supplies the .LIB extension if you omit it from a
library-file name. If you want to link a library file that has a different
extension, be sure to specify the extension.


5.2.4.2  Searching Different Locations for Libraries

You can tell QLINK to search additional locations for libraries by giving a
drive name or path specification in the libraries field on the command line
or in response to the "Libraries" prompt. Each path must end with a
backslash. You can specify up to 32 additional paths. If you give more than
32 paths, QLINK ignores the additional paths without displaying an error
message.


5.2.4.3  Overriding Libraries Named in Object Files

If you do not want to link with the library whose name is included in the
object file, you can give the name of a different library instead. You might
need to specify a different library name in the following cases:


    ■   You assigned a custom name to a standard library when you set up your
        libraries

    ■   You want to link with a library that supports a different math package
        than the math package you gave on the compiler command line (or the
        default)


If you specify a new library name on the QLINK command line, the linker
searches the new library to resolve external references before it searches
the library specified in the object file.

If you want the linker to ignore the library whose name is included in the
object file, you must use the /NOD option. This option tells QLINK to ignore
the default-library information that is encoded in the object files created
by high-level-language compilers. Use this option with caution; see Section
5.4.14 for more information.


Example

    QLINK

    Microsoft(R) QuickC Linker  Version 4.10.
    Copyright(C) Microsoft Corp 1989.  All rights reserved.

    Object Modules [.OBJ]: SPELL TEXT DICT THES
    Run File [SPELL.EXE]:
    List File [NUL.MAP]:
    Libraries [.LIB]: C:\TESTLIB\ NEWLIBV3

This example links four object files to create an executable file named
SPELL.EXE. QLINK searches NEWLIBV3.LIB before searching the default
libraries to resolve references. To locate NEWLIBV3.LIB and the default
libraries, the linker searches the current working directory, then the
C:\TESTLIB\ directory, and finally the locations given by the LIB
environment variable.


5.3  QLINK Memory Requirements

QLINK uses available memory for the link session. If the files to be linked
create an output file that exceeds available memory, QLINK creates a
temporary disk file to serve as memory. Depending on the DOS version, QLINK
handles this temporary file in one of the following ways:


    ■   For the purpose of creating a temporary file, the linker uses the
        directory specified by the TMP environment variable. If the TMP
        variable is set to C:\TEMPDIR, for example, then QLINK puts the
        temporary file in C:\TEMPDIR.

        If there is no TMP environment variable or if the directory specified
        by TMP does not exist, then QLINK puts the temporary file in the
        current directory.

    ■   If the linker is running on DOS version 3.0 or later, it uses a DOS
        system call to create a temporary file with a unique name in the
        temporary-file directory.

    ■   If the linker is running on a version of DOS prior to version 3.0, it
        creates a temporary file named VM.TMP.


When the linker creates a temporary disk file, you see the message

    Temporary file tempfile has been created.
    Do not change diskette in drive, letter.

In the message displayed above, tempfile is ".\" followed by either VM.TMP
or a name generated by DOS, and letter is the drive containing the temporary
file.

If you are running QuickC on a removable-disk system, the message

    Do not change diskette

appears. After this message appears, do not remove the disk from the
specified drive until the link session ends. If you remove the disk, the
operation of QLINK is unpredictable, and you may see the following message:


    unexpected end-of-file on scratch file

If this happens, rerun the link session. The temporary file created by QLINK
is a working file only. QLINK deletes it at the end of the link session.

────────────────────────────────────────────────────────────────────────────
NOTE

Do not give any of your own files the name VM.TMP. The linker displays an
error message if it encounters an existing file with this name.
────────────────────────────────────────────────────────────────────────────


5.4  QLINK Options

This section explains how to use linker options to specify and control the
tasks performed by QLINK.

When you use the QLINK command line to invoke QLINK, you can put options at
the end of the line or after individual fields on the line. However, options
must immediately precede the comma that separates each field from the next.


If you respond to the individual prompts for the QLINK command, you can
specify linker options at the end of any response. When you use more than
one option, you can either group the options at the end of a single response
or distribute the options among several responses. Every option must begin
with the slash character ( / ), even if other options precede it on the same
line.

In a response file, options can appear on a line by themselves or after
individual response lines.

    Abbreviations

Because linker options are named according to their functions, some of their
names are quite long. You can abbreviate the options to save space and
effort. Be sure that your abbreviation is unique so that the linker can
determine which option you want. The minimum legal abbreviation for each
option is indicated in the syntax description of the option.

Abbreviations must begin with the first letter of the name and must be
continuous through the last letter typed. No gaps or transpositions are
allowed. Options can be entered in uppercase or lowercase letters.

    Numeric arguments

Some linker options take numeric arguments. A numeric argument can be any of
the following:


    ■   A decimal number from 0 to 65,535.

    ■   An octal number from 00 to 0177777. QLINK interprets a number as octal
        if it starts with 0. For example, the number 10 is interpreted as a
        decimal number, but the number 010 is interpreted as an octal number,
        equivalent to 8 in decimal.

    ■   A hexadecimal number from 0X0 to 0XFFFF. QLINK interprets a number as
        hexadecimal if it starts with 0X. For example, 0X10 is a hexadecimal
        number, equivalent to 16 in decimal.


    LINK environment variable

You can use the LINK environment variable to cause certain options to be
used each time you link. The linker checks the environment variable for
options if the variable exists.

The linker expects to find options listed in the variable exactly as you
would type them on the command line. It does not accept any other arguments;
for instance, including file names in the environment variable causes the
error message

    unrecognized option name

Each time you link, you can specify options in addition to those in the LINK
environment variable. If you enter the same option both on the command line
and in the environment variable, the linker ignores the redundant option. If
the options conflict, however, the command-line option overrides the effect
of the environment variable option. For example, the command-line option
/SE:512 cancels the effect of the environment-variable option /SE:256.

────────────────────────────────────────────────────────────────────────────
NOTE

The only way to prevent an option in the environment variable from being
used is to reset the environment variable itself.
────────────────────────────────────────────────────────────────────────────


Example

    >SET LINK=/NOI /SE:256 /CO

    >QLINK TEST;

    >QLINK /NOD /CO PROG;

In the example above, the file TEST.OBJ is linked with the options /NOI,
/SE:256, and /CO. The file PROG.OBJ is then linked with the option /NOD, in
addition to /NOI, /SE:256, and /CO. Note that the second /CO option is
ignored.


5.4.1  /BA (Running in Batch Mode)


Option

    /BA«TCH»

By default, the linker prompts you for a new path name whenever it can't
find a library it has been directed to use. It also prompts you if it cannot
find an object file that it expects to find on a removable disk. If you use
the /BA option, however, the linker does not prompt you for any libraries or
object files that it cannot find. Instead, the linker generates an error or
warning message, if appropriate.

In addition, when you use /BA, the linker does not display its copyright
banner, nor does it echo commands from response files. This option does not
prevent the linker from prompting for command-line arguments. You can
prevent such prompting only by using a semicolon on the command line or in a
response file.

Using this option may result in unresolved external references. It is
intended primarily for use with batch or NMAKE files that link many
executable files with a single command and to prevent linker operation from
halting.

────────────────────────────────────────────────────────────────────────────
NOTE

In previous versions of the linker included with QuickC, the /BATCH option
was abbreviated to /B.
────────────────────────────────────────────────────────────────────────────


5.4.2  /CO (Link for Debugging)


Option

    /CO«DEVIEW»

Use the /CO option to prepare for debugging with the integrated QuickC
debugger or the CodeView window-oriented debugger. This option tells the
linker to prepare a special executable file containing symbolic data and
line-number information.

Object files linked with the /CO option must first be compiled with the /Zi
option, which is described in Section 4.3.36.

You can run this executable file outside the CodeView debugger; the extra
data in the file are ignored. To keep file size to a minimum, however, use
the special-format executable file only for debugging; then you can link a
separate version without the /CO option after you've debugged the program.


5.4.3  /CP (Set the Maximum Allocation Space)


Option

    /CP«ARMAXALLOC»:number

The /CP option sets the maximum number of 16-byte paragraphs needed by the
program when it is loaded into memory. The operating system uses this value
when allocating space for the program before loading it. The option is
useful when you want to execute another program from within your program and
you need to reserve space for that other program.

QLINK normally requests the operating system to set the maximum number of
paragraphs to 65,535. Since this represents more memory than could be
available under DOS, the operating system always denies the request and
allocates the largest contiguous block of memory it can find. If you specify
the /CP option, the operating system allocates no more space than the option
specifies. This means any additional space in memory is free for other
programs.

The number can be any integer value in the range 1-65,535. If number is less
than the minimum number of paragraphs needed by the program, QLINK ignores
your request and sets the maximum value equal to whatever the minimum value
happens to be. The minimum number of paragraphs needed by a program is

never less than the number of paragraphs of code and data in the program. To
free more memory for programs compiled in the medium and large memory
models, link with /CP:1; this leaves no space for the near heap.


5.4.4  /DO (Order Segments)


Option

    /DO«SSEG»

The /DO option forces a special ordering on segments. This option is
automatically enabled by a special object-module record in Microsoft QuickC
libraries. If you are linking to one of these libraries, then you do not
need to specify this option.

This option is also enabled by assembly modules that use the Microsoft Macro
Assembler directive .DOSSEG.

The /DO option forces segments to be ordered as follows:


    1.  All segments with a class name ending in CODE

    2.  All other segments outside DGROUP

    3.  DGROUP segments, in the following order:



    a.  Any segments of class BEGDATA (this class name reserved for Microsoft
        use)

    b.  Any segments not of class BEGDATA, BSS, or STACK

    c.  Segments of class BSS

    d.  Segments of class STACK


When the /DO option is in effect, the linker initializes two special
variables as follows:

    _edata = DGROUP : BSS
    _end   = DGROUP : STACK

The variables _edata and _end have special meanings for the Microsoft C and
FORTRAN compilers, so it is not wise to give these names to your own program
variables. Assembly modules can reference these variables but should not
change them.


5.4.5  /DS (Load Data at High Address)


Option

    /DS«ALLOCATE»

QLINK normally loads all data starting at the low end of the data segment.
At run time, the DS (data segment) register is set to the lowest possible
address to allow the entire data segment to be used.

Use the /DS option to tell QLINK to load all data starting at the high end
of the data segment instead of at the low end. In this case, the DS register
is set at run time to the lowest data-segment address that contains program
data.

You can use the /DS option with the /HI option (see Section 5.4.9) to take
advantage of unused memory within the data segment.

────────────────────────────────────────────────────────────────────────────
WARNING

This option should be used only with assembly-language programs.
────────────────────────────────────────────────────────────────────────────


5.4.6  /E (Pack Executable Files)


Optionspecific types>

    /E«XEPACK»

The /E option directs QLINK to remove sequences of repeated bytes (typically
null characters) and to optimize the load-time-relocation table before
creating the executable file. (The load-time-relocation table is a table of
references, relative to the start of the program. Each reference changes
when the executable image is loaded into memory and an actual address for
the entry point is assigned.)

Executable files linked with this option may be smaller, and thus load
faster, than files linked without this option. Programs with many load-time
relocations (about 500 or more) and long streams of repeated characters are
usually shorter if packed. The /E option, however, does not always save a
significant amount of disk space and may sometimes increase file size. QLINK
notifies you if the packed file is larger than the unpacked file.

Note that you cannot use the QuickC debugger, the Symbolic Debug Utility
(SYMDEB), or the CodeView window-oriented debugger to debug packed files.
The /E option strips symbolic information needed by the debuggers from the
input file and issues a warning message to notify you.


5.4.7  /F (Optimize Far Calls)


Option

    /F«ARCALLTRANSLATION»

The /F option directs the linker to optimize far calls to procedures that
lie in the same segment as the caller. Using the /F option may result in
slightly faster code and smaller executable-file size. It should be used
with the /PACKC option (see Section 5.4.23) for significant results. By
default, the /F option is off. Furthermore, once you have enabled it, you
can disable it for one or more object files by using the /NOF option (see
Section 5.4.16).

For example, a medium- or large-model program may include a machine
instruction that makes a far call to a procedure in the same segment.
Because both the instruction and the procedure it calls have the same
segment address, only a near call is truly necessary. A near-call
instruction does not require an entry in the relocation table; a far-call
instruction does. In this situation, use of /F (together with /PACKC)
results in a smaller executable file because the relocation table is
smaller. Such files load faster.

When /F has been specified, the linker optimizes code by removing the
following instruction:

    call FAR label

and substituting the sequence

    push    cs
    call    NEAR label
    nop

Upon execution, the called procedure still returns with a far-return
instruction. Because both the code segment and the near address are on the
stack, however, the far return is executed correctly. The  nop  (no-op)
instruction appears so that exactly five bytes replace the five-byte
far-call instruction; the linker may in some cases place nop at the
beginning of the sequence.

The /F option has no effect on programs that make only near calls. Of the
high-level Microsoft languages, only tiny-, small-, and compact-model C
programs use near calls.

────────────────────────────────────────────────────────────────────────────
IMPORTANT

There is a small risk involved with the /F option: the linker may mistakenly
translate a byte in a code segment that happens to have the far-call opcode
(9A hexadecimal). If a program linked with /F inexplicably fails, then you
may want to try linking with this option off. Object files produced by
Microsoft high-level languages, however, should be safe from this problem
because relatively little immediate data is stored in code segments.

In general, assembly-language programs are also relatively safe for use with
the /F option, as long as they do not involve advanced system-level code,
such as might be found in operating systems or interrupt handlers.
────────────────────────────────────────────────────────────────────────────


5.4.8  /HE (View the Options List)


Option

    /HE«LP»

The /HE option causes QLINK to display a list of its options on the screen.
This gives you a convenient reminder of the options.

When you use this option, QLINK ignores any other input you give and does
not create an executable file.


5.4.9  /HI (Place Executable in High Memory)


Option

    /HI«GH»

The /HI option tells QLINK to place the executable file as high as possible
in memory. Without the /HI option, QLINK places the executable file as low
in memory as possible.

────────────────────────────────────────────────────────────────────────────
WARNING

This option should be used only with assembly-language programs.
────────────────────────────────────────────────────────────────────────────


5.4.10  /INC (Prepare for ILINK)


Option

    /INC«REMENTAL»

Use this option to prepare a program for subsequent incremental linking with
ILINK. In incremental linking, only the object files that have changed since
the last link are linked. This process is much faster than performing
regular linking with QLINK, but it produces larger executable files. The use
of this option produces a .SYM file and a .ILK file, each containing extra
information needed by ILINK. This option requires that the file ILINKSTB.OVL
be in the current directory or the current path.

Incremental linking is possible only when small changes have been made to
object files. If large changes have been made, ILINK invokes QLINK to
perform a full link.

Incremental linking has no advantage over regular linking in the beginning
of the development process, when large amounts of code are being added. You
should use ILINK later in the development process, when only small changes
are being made to certain modules. When you have finished all changes and
are ready to produce the final .EXE file, you should use QLINK to produce
the smallest possible file.

Incremental linking is not compatible with the /T (see Section 5.4.30) or /E
(see Section 5.4.6) options.


5.4.10.1  Incremental Violations

ILINK can generate two kinds of errors: real errors and incremental
violations. Real errors are errors such as undefined symbols that cannot be
resolved by a full link. If ILINK detects a real error, it displays an error
message.

Incremental violations are caused by code changes that go beyond the scope
of incremental linking. When an incremental violation occurs, ILINK invokes
QLINK automatically. The following sections describe the incremental
violations.


Changing Libraries

An incremental violation occurs when a library changes. Furthermore, if an
altered module shares a code segment with a library, ILINK needs access to
the library as well as the altered module.

If you add a function, procedure, or subroutine call to a library that has
never been called before, ILINK invokes QLINK automatically.


Exceeding Code/Data Padding

An incremental violation occurs if two or more modules contribute to the
same physical segment and either module exceeds its padding. The padding
allows the module to increase in size by the specified number of bytes
before another full link is required. See Section 5.4.25, "/PADC" and
Section 5.4.26, "/PADD."


Moving or Deleting Data Symbols

An incremental violation occurs if a data symbol is moved or deleted. To add
new data symbols without requiring a full link, add the new symbols at the
end of all other data symbols in the module.


Deleting Code Symbols

You can move or add code symbols, but an incremental violation occurs if you
delete any code symbols from a module. Code symbols can be moved within a
module but cannot be moved between modules.


Adding Debugging Information

If you are using the CodeView debugger from the Microsoft C Professional
Development System version 6.0, you must include CodeView information in
your modules when you first specify /INC to prepare for incremental linking.
If you add the CodeView information later in the development process, an
incremental violation occurs the next time you use ILINK.

An incremental violation will also occur if you try to link object files
that include CodeView information for the Microsoft C Optimizing Compiler
version 5.1.


5.4.10.2  ILINK options

The options that ILINK accepts are described in the following list:

Option                            Action
────────────────────────────────────────────────────────────────────────────
/A                                Directs ILINK to check for changes in
                                    the object files since the last linking
                                    process.

/C                                Specifies case sensitivity.

/E "command"                      Specifies command to be executed if
                                    incremental linking fails. The quotation
                                    marks are required if there are any
                                    embedded spaces in the command. The
                                    default is /E "QLINK /INC".

/HE                               Provides help about the incremental
                                    linker.

/I                                Specifies that ILINK should attempt only
                                    an incremental link and not a regular
                                    link. If the incremental link fails, a
                                    fatal error follows the incremental
                                    violation error.

/NOL                              Causes ILINK to suppress the sign-on
                                    banner.

/V                                Directs ILINK to list all changed
                                    modules.

/X                                Prevents ILINK from allocating memory
                                    from an expanded memory manager if one
                                    is present.

In very unusual cases, linking with /INC may cause the following warning to
be generated:

    frame-relative fix-up, frame ignored near 'offset' in segment 'segment'

If this occurs, do not use this option or ILINK.


5.4.11  /INF (Display Linker-Process Information)


Option

    /INF«ORMATION»

The /INF option tells the linker to display information about the linking
process, including the phase of linking and the names of the object files
being linked. Use this option if you want to determine the locations of the
object files being linked and the order in which they are linked.

Output from this option is sent to the standard error output.


Example

The following is a sample of the linker output when the /INF option is
specified on the QLINK command line:

    **** PASS ONE ****
    HSTGM.OBJ(hstgm.c)
    **** LIBRARY SEARCH ****
    \qc\lib\SLIBCE.LIB(CRT0)
    \qc\lib\SLIBCE.LIB(CRT0DAT)
    \qc\lib\SLIBCE.LIB(CRT0MSG)
    \qc\lib\SLIBCE.LIB(CRT0FP)
    \qc\lib\SLIBCE.LIB(CHKSTK)
    \qc\lib\SLIBCE.LIB(CHKSUM)
    .
    .
    .

    **** ASSIGN ADDRESSES ****
    **** PASS TWO ****
    HSTGM.OBJ(hstgm.c)
    \qc\lib\SLIBCE.LIB(CRT0)
    \qc\lib\SLIBCE.LIB(CRT0DAT)
    \qc\lib\SLIBCE.LIB(CRT0MSG)
    \qc\lib\SLIBCE.LIB(CRT0FP)
    \qc\lib\SLIBCE.LIB(CHKSTK)
    \qc\lib\SLIBCE.LIB(CHKSUM)
    **** WRITING EXECUTABLE ****

    Segments              31
    Groups                1
    Bytes in symbol table  32784


5.4.12  /LI (Include Line Numbers in Map File)


Option

    /LI«NENUMBERS»

You can include the line numbers and associated addresses of your source
program in the map file by using the /LI option. Use this option if you will
be debugging with the SYMDEB debugger included with earlier releases of
Microsoft language products.

Ordinarily, the map file does not contain line numbers. To produce a map
file with line numbers, you must give QLINK an object file (or files) with
line-number information. The /Zd option of the QCL command (see Section
4.3.36) directs the compiler to include line numbers in the object file. If
you give QLINK an object file without line-number information, the /LI
option has no effect.

The /LI option forces QLINK to create a map file even if you did not
explicitly tell the linker to create a map file. By default, QLINK gives the
file the same base name as the executable file plus the extension .MAP. You
can override the default name by specifying a new map file on the QLINK
command line or in response to the "List File" prompt.


5.4.13  /M (List Public Symbols)


Option

    /M«AP»

You can list all public (global) symbols defined in the object file(s) by
using the /M option. When you invoke QLINK with the /M option, the map file
contains a list of all the symbols sorted by name and a list of all the
symbols sorted by address. If you do not use this option, the map file
contains only a list of segments.

When you use this option, the default for the mapfile field or "List File"
prompt response is no longer NUL. Instead, the default is a name that
combines the base name of the executable file with a .MAP extension. You can
still specify NUL in the mapfile field (which indicates that QLINK should
not generate a map file); if you do, the /M option has no effect.

────────────────────────────────────────────────────────────────────────────
NOTE

In earlier versions of QLINK, number specified the maximum number of public
symbols that QLINK could sort; the current version of QLINK sorts the
maximum number of symbols that can be sorted in available memory.
────────────────────────────────────────────────────────────────────────────


5.4.14  /NOD (Ignore Default Libraries)


Option

    /NOD«EFAULTLIBRARYSEARCH» «:filename»

The /NOD option tells QLINK not to search any library specified in the
object file to resolve external references. If you specify filename, then
QLINK searches all libraries specified in the object file except for
filename.

In general, higher-level-language programs do not work correctly without a
stan-dard library. Therefore, if you use the /NOD option, you should
explicitly specify the name of a standard library in the libraries field.


5.4.15  /NOE (Ignore Extended Dictionary)


Option

    /NOE«XTDICTIONARY»

The /NOE option prevents the linker from searching the extended dictionary,
which is an internal list of symbol locations that the linker maintains.
Normally, the linker consults this list to speed up library searches. The
/NOE option therefore slows down the linker. You often need this option when
a library symbol is redefined. Use /NOE if the linker issues the following
error message:

    symbol name multiply defined


5.4.16  /NOF (Disable Far-Call Optimization)


Option

    /NOF«ARCALLTRANSLATION»

Normally you don't need to specify this option because QLINK doesn't
ordinarily perform far-call optimization (translation). However, if an
environment variable such as LINK (or CL) turns on far-call translation
automatically, you can use /NOF to turn far-call translation off again.


5.4.17  /NOG (Preserve Compatibility)


Option

    /NOG«ROUPASSOCIATION»

The /NOG option causes the linker to ignore group associations when
assigning addresses to data and code items. It is provided primarily for
compatibility with previous versions of the linker (versions 2.02 and
earlier) and early versions of Microsoft language compilers.

────────────────────────────────────────────────────────────────────────────
WARNING

This option should be used only with assembly-language programs.
────────────────────────────────────────────────────────────────────────────


5.4.18  /NOI (Employ Case Sensitivity)


Option

    /NOI«GNORECASE»

By default, QLINK treats uppercase letters and lowercase letters as
equivalent. Thus ABC, abc, and Abc are considered the same name. When you
use the /NOI option, the linker distinguishes between uppercase letters and
lowercase letters and considers ABC, abc, and Abc to be three separate
names. Because names in some high-level languages are not case sensitive,
this option can have minimal importance. In Microsoft QuickC, however, case
is significant. If you plan to link your files from other high-level
languages with QuickC routines, you may need to use this option.


5.4.19  /NOL (Suppress Sign-On Banner)


Option

    /NOL«OGO»

This option suppresses the QLINK sign-on banner display.


5.4.20  /NON (Order Segments without Nulls)


Option

    /NON«ULLSDOSSEG»

This option arranges segments in the executable file in the same order they
are arranged by the /DO«SSEG» option, but it doesn't insert 16 null bytes at
the beginning of the _TEXT segment (if it is defined). The null bytes are
normally inserted by the /DO option to provide proper alignment.

The /NON option overrides the /DO option when both are used. Therefore, you
can use /NON to override the /DO comment record commonly found in standard
Microsoft libraries.


5.4.21  /NOP (Disable Segment Packing)


Option

    /NOP«ACKCODE»

Normally you don't need to specify this option because QLINK doesn't
ordinarily perform code-segment packing. However, if an environment variable
such as LINK (or CL) turns on code-segment packing automatically, you can
use /NOP to turn segment packing off again.


5.4.22  /O (Set the Overlay Interrupt)


Option

    /O«VERLAYINTERRUPT»:number

By default, the interrupt number used for passing control to overlays is 63
(3F hexadecimal). The /O option allows you to select a different interrupt
number.

The number can be a decimal number from 0 to 255, an octal number from octal
0 to octal 0377, or a hexadecimal number from hexadecimal 0 to hexadecimal
FF. Numbers that conflict with DOS interrupts can be used; however, their
use is not advised.

In general, you should not use /O with programs. The exception to this
guideline would be a program that uses overlays and spawns another program
that also uses overlays. In this case, each program should use a separate
overlay-interrupt number, meaning that at least one of the programs should
be compiled with /O.


5.4.23  /PACKC (Pack Contiguous Segments)


Option

    /PACKC«ODE»«:number»

The /PACKC option affects code segments only in medium- and large-model
programs. It should be used with the /F option. You don't need to understand
the details of the /PACKC option in order to use it. You only need to know
that this option, used in conjunction with /F, produces slightly faster and
more compact code. The packing of code segments provides more opportunities
for far-call optimization, which is enabled with /F. The /PACKC option is
off by default; if on, it can be turned off with the /NOP option.

The /PACKC option directs the linker to group neighboring code segments.
Segments in the same group are assigned the same segment address; the offset
addresses of items are adjusted upward accordingly. In other words, the
/PACKC option does not change the physical address of any items.

The number field specifies the maximum size of groups formed by /PACKC. The
linker stops adding segments to a group as soon as it cannot add another
segment without exceeding number. At that point, the linker starts forming a
new group. The default for number is 65,530.

You can safely use /PACKC with programs developed with the QuickC compiler.
The /PACKC option, however, should not be used with assembly programs that
make assumptions about the relative order of code segments. For example, the
following assembly code attempts to calculate the distance between CSEG1 and
CSEG2. This code would produce incorrect results when used with /PACKC
because /PACKC causes the two segments to share the same segment address.
Therefore, the procedure would always return 0.

    CSEG1    SEGMENT PARA PUBLIC 'CODE'
    .
    .
    .
    CSEG1    ENDS

    CSEG2    SEGMENT PARA PUBLIC 'CODE'
            ASSUME  cs:CSEG2

    ; Return the length of CSEG1 in AX.

    codsize  PROC   NEAR
            mov    ax,CSEG2    ; Load para address of CSEG1
            sub    ax,CSEG1    ; Load para address of CSEG2
            mov    cx,4        ; Load count, and convert
            shl    ax,cl       ;   distance from paragraphs
                                ;   to bytes
    codsize  ENDP

    CSEG2    ENDS


5.4.24  /PACKD (Pack Contiguous Data)


Option

    /PACKD«ATA»«:number»

The /PACKD option tells QLINK to group neighboring data segments. It works
like the code packing option (/PACKC) except that it packs data segments.
Use this option if your program uses a large number of very small data
segments, since it combines them and reduces the system overhead required
for using them. You should use this option if you use the compact or large
memory models.

The number field specifies the maximum size of a data segment grouped by
/PACKD. If you omit number, QLINK uses the default value of 65,536. QLINK
stops adding segments to a group as soon as it cannot add another segment
without exceeding number. At this point, QLINK forms a new group.


5.4.25  /PADC (Pad Code Segments)


Option

    /PADC«ODE»:padsize

The /PADC option adds filler bytes to the end of each code module, in
preparation for subsequent incremental linking with ILINK. The padsize field
specifies the number of filler bytes. You can specify padsize in decimal,
octal, or hexadecimal format. This option and the related /PADD option are
used in conjunction with incremental linking (see Section 5.4.10).

These filler bytes provide space for expansion if ILINK updates the module
later. If the updates involve increasing the amount of code, ILINK uses the
space occupied by the filler bytes, instead of resizing the entire .EXE
file. If the module outgrows the space available, an incremental violation
occurs, and ILINK invokes QLINK to perform a full link. You can use code
padding with small-, compact-, and mixed-model programs.

If you don't specify the /PADC option, QLINK doesn't add any bytes to the
code segment. The optimum amount of padding to specify depends on how much
your code changes from one link to the next. If you expect to add only a
little code, choose a relatively small amount of padding (32 to 64 bytes).
If ILINK issues the message

    padding exceeded

and performs a full link more often than desired, increase the padding size.
Remember that the total size of a code segment, including padding bytes,
cannot exceed 64K.


5.4.26  /PADD (Pad Data Segments)


Option

    /PADD«ATA»:padsize

The /PADD option adds filler bytes to the end of each code module, in
preparation for incremental linking with ILINK later. The padsize field
specifies the number of filler bytes. You can specify padsize in decimal,
octal, or hexadecimal format. This option and the related /PADC option are
used in conjunction with incremental linking (see Section 5.4.10).

These filler bytes provide space for expansion if ILINK updates the module
later. If the updates involve increasing the amount of data, ILINK uses the
space occupied by the filler bytes, instead of resizing the entire .EXE
file. If the module outgrows the space available, an incremental violation
occurs and ILINK invokes QLINK to perform a full link.

QLINK normally adds 16 filler bytes. This amount of padding should be
sufficient in most cases, since public variables are added less frequently
than code. If ILINK issues the message

    padding exceeded

and performs a full link more often than desired, increase the padding size.
Remember that the total size of a data segment, including padding bytes,
cannot exceed 64K.


5.4.27  /PAU (Pause during Linking)


Option

    /PAU«SE»

The /PAU option tells QLINK to pause before it writes the executable (.EXE)
file to disk. Use this option if you want to create the executable file on
its own removable (floppy) disk. Without the /PAU option, QLINK performs the
linking session from beginning to end without stopping.

If you specify the /PAU option, QLINK displays the following message before
it creates the file:

    About to generate .EXE file
    Change diskette in drive letter and press <ENTER>

The letter corresponds to the current drive. QLINK resumes processing when
you press ENTER.

────────────────────────────────────────────────────────────────────────────
NOTE

Do not remove the disk that will receive the listing file or the disk used
for the temporary file.
────────────────────────────────────────────────────────────────────────────

Depending on how much memory is available, QLINK may create a temporary disk
file during processing (see Section 5.3, "QLINK Memory Requirements") and
display the following message:

    Temporary file tempfile has been created.
    Do not change diskette in drive, letter

If QLINK creates the file on the disk you plan to swap, press CTRL+C to
terminate the QLINK session. Rearrange your files so that the temporary file
and the executable file can be written to the same disk, then try linking
again.


5.4.28  /SE (Set Maximum Number of Segments)


Option

    /SE«GMENTS»:number

The /SE option controls the number of segments that the linker allows a
program to have. The default is 128, but you can set number to any value
(decimal, octal, or hexadecimal) in the range 1-3,072 (decimal).

For each segment, the linker must allocate some space to keep track of
segment information. By using a relatively low segment limit as a default
(128), the linker is able to link faster and allocate less storage space.

When you set the segment limit higher than 128, the linker allocates
additional space for segment information. This option allows you to raise
the segment limit for programs with a large number of segments. For programs
with fewer than 128 segments, you can keep the storage requirements of the
linker at the lowest level possible by setting number to reflect the actual
number of segments in the program. If the number of segments allocated is
too high for the amount of memory available to the linker, QLINK issues the
following error message:

    segment limit set too high

If this occurs, relink the object files, specifying a lower segment limit.


5.4.29  /ST (Set Stack Size)


Option

    /ST«ACK»:number

The /ST option allows you to specify the size of the stack for your program.
The number is any positive value (decimal, octal, or hexadecimal) up to
65,535 (decimal). It represents the size, in bytes, of the stack. If you do
not use this option, the stack size is 2K.

If your program returns a stack-overflow message, you may need to increase
the size of the stack. In contrast, if your program uses the stack very
little, you can save some space by decreasing the stack size.


5.4.30  /T (Create a .COM File)


Option

    /T«INY»

The /T option causes QLINK to create a .COM file instead of a .EXE file. It
can be used for programs that use the tiny memory model. The result is the
same as if you had linked a .EXE file from a tiny-model program, and then
used the EXE2BIN program to convert it to a .COM file. (See The MS-DOS
Programmer's Reference Manual for more information on .COM files and the
EXE2BIN program.)

When you use the /T option, the linker normally produces an output file with
the .COM extension. If you specify a file name with a different extension,
the linker applies the extension you specify. Note that the "Run File"
prompt shows the .EXE extension if you have not yet given the /T option.
After you give the option, the linker issues a warning message that the
extension of the output file is .COM.

Not every program can be linked using .COM format. When you specify the /T
option, QLINK automatically sets the /F option to optimize far calls; this
provides the best chance that a .COM format file can be generated.

The following restrictions apply to programs written for the .COM format:


    ■   The program must consist of only one physical segment. If you have
        written an assembly-language program, you can declare more than one
        segment. However, the segments must be in the same group.

    ■   The program cannot perform load-time relocations, and therefore cannot
        have any far-segment references. Specifically, segment addresses
        cannot be used as immediate data for instructions. You cannot, for
        example, use the instruction

                mov    ax, CODESEG


        The linker issues an error if it detects such references.


When you give the /CO option in combination with /T, QLINK creates a
separate file with debugger information rather than embedding debugger
information in the .COM file. QLINK gives this file the base name of the
.COM file plus the .DBG extension, and places it in the current directory.

The /T option is incompatible with the /INC option.

────────────────────────────────────────────────────────────────────────────
NOTE

This option was called the /BI«NARY» option in previous versions of the
linker included with QuickC.
────────────────────────────────────────────────────────────────────────────


5.5  Linker Operation

QLINK performs the following steps to combine object files and produce an
executable file:


    1.  Reads the object files submitted

    2.  Searches the given libraries, if necessary, to resolve external
        references

    3.  Assigns addresses to segments

    4.  Assigns addresses to public symbols

    5.  Reads code and data in the segments

    6.  Reads all relocation references in object files

    7.  Performs fixups

    8.  Outputs an executable file (executable image and relocation
        information)


Steps 5, 6, and 7 are performed concurrently: in other words, QLINK moves
back and forth between these steps before it progresses to step 8.

The "executable image" contains the code and data that constitute the
executable file. The "relocation information" is a list of references,
relative to the start of the program. The references change when the
executable image is loaded into memory and an actual address for the entry
point is assigned.

The following sections explain the process QLINK uses to concatenate
segments and resolve references to items in memory.


5.5.1  Alignment of Segments

QLINK uses a segment's alignment type to set the starting address for the
segment. The alignment types are BYTE, WORD, PARA, and PAGE. These
correspond to starting addresses at byte, word, paragraph, and page
boundaries, representing addresses that are multiples of 1, 2, 16, and 256,
respectively. The default alignment is PARA.

When QLINK encounters a segment, it checks the alignment type before copying
the segment to the executable file. If the alignment is WORD, PARA, or PAGE,
QLINK checks the executable image to see if the last byte copied ends on the
appropriate boundary. If not, QLINK pads the image with null bytes.


5.5.2  Frame Number

QLINK computes a starting address for each segment in the program. The
starting address is based on the segment's alignment and the sizes of the
segments already copied to the executable file (as described in the previous
section). The starting address consists of an offset and a "canonical frame
number." The canonical frame number specifies the address of the first
paragraph in memory that contains one or more bytes of the segment. (A
paragraph is 16 bytes of memory; therefore, to compute a physical location
in memory, multiply the frame number by 16 and add the offset.) The offset
is the number of bytes from the start of the paragraph to the first byte in
the segment. For BYTE and WORD alignments, the offset may be nonzero. The
offset is always zero for PARA and PAGE alignments. (An offset of zero means
that the physical location is an exact multiple of 16.)

You can find the frame number for each segment in the map file created by
QLINK. The first four digits of the segment's start address give the frame
number in hexadecimal. For example, a start address of 0C0A6 indicates the
frame number 0C0A.


5.5.3  Order of Segments

QLINK copies segments to the executable file in the same order that it
encounters them in the object files. This order is maintained throughout the
program unless QLINK encounters two or more segments that have the same
class name. Segments having identical segment names are copied as a
contiguous block to the executable file.

The /DO option may change the way in which segments are ordered (see Section
5.4.4).


5.5.4  Combined Segments

QLINK uses combine types to determine whether two or more segments that
share the same segment name should be combined into one large segment. The
valid combine types are PUBLIC, STACK, COMMON, and PRIVATE.

If a segment has combine type PUBLIC, QLINK automatically combines it with
any other segments that have the same name and belong to the same class.
When QLINK combines segments, it ensures that the segments are contiguous
and that all addresses in the segments can be accessed using an offset from
the same frame address. The result is the same as if the segment were
defined as a whole in the source file.

QLINK preserves each individual segment's alignment type. This means that
even though the segments belong to a single large segment, the code and data
in the segments do not lose their original alignment. If the combined
segments exceed 64K, QLINK displays an error message.

If a segment has combine type STACK, QLINK carries out the same combine
operation as for PUBLIC segments. The only exception is that STACK segments
cause QLINK to copy an initial stack-pointer value to the executable file.
This stack-pointer value is the offset to the end of the first stack segment
(or combined stack segment) encountered.

If a segment has combine type COMMON, QLINK automatically combines it with
any other segments that have the same name and belong to the same class.
When QLINK combines COMMON segments, however, it places the start of each
segment at the same address, creating a series of overlapping segments. The
result is a single segment no larger than the largest segment combined.

A segment has combine type PRIVATE only if no explicit combine type is
defined for it in the source file. QLINK does not combine private segments.



5.5.5  Groups

Groups allow segments to be addressed relative to the same frame address.
When QLINK encounters a group, it adjusts all memory references to items in
the group so that they are relative to the same frame address.

Segments in a group do not have to be contiguous, belong to the same class,
or have the same combine type. The only requirement is that all segments in
the group fit within 64K.

Groups do not affect the order in which the segments are loaded. Unless you
use class names and enter object files in the right order, there is no
guarantee that the segments will be contiguous. In fact, QLINK may place
segments that do not belong to the group in the same 64K of memory. QLINK
does not explicitly check whether all the segments in a group fit within 64K
of memory; however, QLINK is likely to encounter a fixup-overflow error if
they do not.


5.5.6  Fixups

Once the linker knows the starting address of each segment in the program
and has established all segment combinations and groups, QLINK can "fix up"
any unresolved references to labels and variables. To fix up unresolved
references, QLINK computes the appropriate offset and segment address and
replaces the temporary values generated by the assembler with the new
values.

QLINK carries out fixups for the types of references shown in Table 5.1.

The size of the value to be computed depends on the type of reference. If
QLINK discovers an error in the anticipated size of a reference, it displays
a fixupoverflow message. This can happen, for example, if a program attempts
to use a 16-bit offset to reach an instruction that is more than 64K away.
It can also occur if all segments in a group do not fit within a single 64K
block of memory.


5.6  Using Overlays

You can direct QLINK to create an overlaid version of a program. In an
overlaid version of a program, specified parts of the program (overlays) are
loaded only if and when they are needed. These parts share the same space in
memory. Only code is overlaid; data are never overlaid. Programs that use
overlays usually require less memory, but they run more slowly because of
the time needed to read and reread the code from disk into memory.

Table 5.1  QLINK Fixups

╓┌──────────────────────┌─────────────────────────┌──────────────────────────╖
Type                   Location of Reference     QLINK Action
────────────────────────────────────────────────────────────────────────────
Short                  In JMP instructions that  Computes a signed,
                        attempt to pass control   eight-bit number for the
                        to labeled instructions   reference, and displays
                        in the same segment or    an error message if the
                        group. The target         target instruction
                        instruction must be no    belongs to a different
                        more than 128 bytes from  segment or group (has a
                        the point of reference.   different frame address),
                                                    or if the target is more
                                                    than 128 bytes away in
                                                    either
                                                    direction.

Near self-relative     In instructions that      Computes a 16-bit offset
                        access data relative to   for the reference and
                        the same segment or       displays an error if the
                        group.                    data are not in the same
                                                    segment or group.

Type                   Location of Reference     QLINK Action
────────────────────────────────────────────────────────────────────────────

Near segment-relative  In instructions that      Computes a 16-bit offset
                        attempt to access data    for the reference, and
                        in a specified segment    displays an error message
                        or group, or relative to  if the offset of the
                        a specified segment       target within the
                        register.                 specified frame is
                                                    greater than 64K or less
                                                    than 0, or if the begin-
                                                    ning of the canonical
                                                    frame of the target is
                                                    not addressable.

Long                   In CALL instructions      Computes a 16-bit frame
                        that attempt to access    address and 16-bit offset
                        an instruction in         for this reference, and
                        another segment or group.  displays an error message
                                                    if the computed offset is
                                                    greater than 64K or less
Type                   Location of Reference     QLINK Action
────────────────────────────────────────────────────────────────────────────
                                                    greater than 64K or less
                                                    than 0, or if the begin-
                                                    ning of the canonical
                                                    frame of the target is
                                                    not addressable.

────────────────────────────────────────────────────────────────────────────



You specify overlays by enclosing them in parentheses in the list of object
files that you submit to the linker. Each module in parentheses represents
one overlay. For example, you could give the following object-file list in
the objfiles field of the QLINK command line:

    a + (b+c) + (e+f) + g + (i)

In this example, the modules  (b+c),  (e+f), and  (i)  are overlays. The
remaining modules, and any drawn from the run-time libraries, constitute the
resident part (or root) of your program. Overlays are loaded into the same
region of memory, so only one can be resident at a time. Duplicate names in
different overlays are not supported, so each module can appear only once in
a program.

The linker replaces calls from the root to an overlay and from an overlay to
another overlay with an interrupt (followed by the module identifier and
offset). By default, the interrupt number is 63 (3F hexadecimal). You can
use the /O option of the QLINK command to change the interrupt number.

You can use the CodeView debugger with overlaid modules. In fact, in the
case of large programs, you may need to use overlays to leave sufficient
room for the debugger to operate. However, the QuickC debugger cannot debug
overlaid modules.


5.6.1  Restrictions on Overlays

You can overlay only modules to which control is transferred and returned by
a standard 8086 long (32-bit) call/return instruction. Therefore, because
calls to subroutines modified with the near attribute are short (16-bit)
calls, you cannot overlay modules containing near subroutines if other
modules call those subroutines. You cannot use long jumps with the longjmp
library function. Also, the linker does not produce overlay modules that can
be called indirectly through function pointers. When a function is called
through a pointer, the called function must be in the same overlay or root.



5.6.2  Overlay-Manager Prompts

The overlay manager is part of the language's run-time library. If you
specify overlays during linking, the code for the overlay manager is
automatically linked with the other modules of your program. Even with
overlays, the linker produces only one .EXE file. At run time, the overlay
manager opens the .EXE file each time it needs to extract new overlay
modules. The overlay manager first searches for the file in the current
directory; then, if it does not find the file, the manager searches the
directories listed in the PATH environment variable. When it finds the file,
the overlay manager extracts the overlay modules specified by the root
program. If the overlay manager cannot find an overlay file when needed, it
prompts you for the file name.

For example, assume that an executable program called PAYROLL.EXE uses
overlays and does not exist in either the current directory or the
directories specified by PATH. If you run PAYROLL.EXE (by entering a
complete path specification), the overlay manager displays the following
message when it attempts to load overlay files:

    Cannot find PAYROLL.EXE
    Please enter new program spec:

You can then enter the drive or directory, or both, where PAYROLL.EXE is
located. For example, if the file is located in directory \EMPLOYEE\DATA\
on drive B, you could enter B:\EMPLOYEE\DATA\ or you could enter
\EMPLOYEE\DATA\ if the current drive is B.

If you later remove the disk in drive B and the overlay manager needs to
access the overlay again, it does not find PAYROLL.EXE and displays the
following message:

    Please insert diskette containing B:\EMPLOYEE\DATA\PAYROLL.EXE
    in drive B: and strike any key when ready.

After reading the overlay file from the disk, the overlay manager displays
the following message:

    Please restore the original diskette.
    Strike any key when ready.

Execution of the program then continues.






Chapter 6  LIB
────────────────────────────────────────────────────────────────────────────

The Microsoft Library Manager (LIB) helps you create and maintain objectcode
libraries. An object-code library is a collection of separately compiled or
assembled object files combined into a single file. Object-code libraries
provide a convenient source of commonly used routines. A program that calls
library routines is linked with the library to produce the executable file.
Only the necessary routines, not all library routines, are linked into the
executable file.

Library files are usually identified by their .LIB extension, although other
extensions are allowed. In addition to accepting DOS object files and
library files, LIB can read the contents of 286 XENIX(R) archives and
Intel-style libraries and combine their contents with DOS libraries.

You can use the LIB utility to


    ■   Create a new library file

    ■   Add object files or the contents of a library to an existing library

    ■   Delete library modules

    ■   Replace library modules

    ■   Copy library modules to object files



6.1  Invoking LIB

To invoke LIB, type the LIB command on the DOS command line. You can specify
the input required in one of three ways:


    1.  Type it on the command line.

    2.  Respond to prompts.

    3.  Specify a response file (a file containing responses to prompts).


The three sections below present the three methods of invoking LIB. Section
6.1.1 describes the input fields in detail and is relevant to all three
methods.

To terminate the library session at any time and return to DOS, press
CTRL+C.


6.1.1  Command Line

You can start LIB and specify all the necessary input from the command line.
In this case, the LIB command line has the following form:

    LIB oldlibrary «options» «commands» «,«listfile» «,« newlibrary» » » «;»

The individual components of the command line are discussed in the sections
that follow.

Type a semicolon (;) anywhere a comma appears to tell LIB to use the default
responses for the remaining fields. The semicolon should be the last
character on the command line.

Typing a semicolon after the oldlibrary field causes LIB to perform a
consistency check on the library─no other action is performed. LIB displays
any consistency errors it finds and returns to the operating-system level.


Examples

    LIB GRAPHIC;

The example above causes LIB to perform a consistency check on the library
file GRAPHIC.LIB.

    LIB GRAPHIC ,SYMBOLS.LST;

This example tells LIB to perform a consistency check on the library file
GRAPHIC.LIB and to create SYMBOLS.LST, a cross-reference-listing file.

    LIB GRAPHIC +STAR;

The example above uses the add-command symbol (+) to instruct LIB to add the
file STAR to the library GRAPHIC.LIB. The semicolon at the end of the
command line causes LIB to use the default responses for the remaining
fields. As a result, no listing file is created and the original library
file is renamed GRAPHIC.BAK. The modified library is GRAPHIC.LIB.

    LIB GRAPHIC -*JUNK *STAR, ,SHOW

This last example instructs LIB to move the module JUNK from the library
GRAPHIC.LIB to an object file called JUNK.OBJ. The module JUNK is removed
from the library in the process. The module STAR is copied from the library
to an object file called STAR.OBJ; the module remains in the library. No
cross-reference-listing file is produced. The revised library is called
SHOW.LIB. It contains all the modules in GRAPHIC.LIB except JUNK, which was
removed by using the move-command symbol (-*). The original library,
GRAPHIC.LIB, remains unchanged.


6.1.1.1  Library File

Use the oldlibrary field to specify the name of the library to be modified.
The LIB utility assumes that the file-name extension is .LIB, since this is
usually the case. If your library file has the .LIB extension, you can omit
it. Otherwise, include the extension. You must give LIB the path name of a
library file if it is in another directory or on another disk.

There is no default for the oldlibrary field. This field is required and LIB
issues an error message if you do not give a file name.

    Consistency check

If you type a library name and follow it immediately with a semicolon (;),
LIB performs only a consistency check on the given library. A consistency
check tells you whether all the modules in the library are in usable form.
No changes are made to the library. It is usually not necessary to perform
consistency checks because LIB automatically checks object files for
consistency before adding them to the library. The LIB utility prints a
message if it finds an invalid object module; no message appears if all
modules are intact.


6.1.1.2  LIB Options

LIB has five options. Specify options on the command line following the
required library-file name and preceding any commands.


Option

    /I«GNORECASE»

The /I option tells LIB to ignore case when comparing symbols, which is the
default. Use this option when you are combining a library that is case
sensitive (created with the /NOI option) with others that are not case
sensitive. The resulting library will not be case sensitive. The /NOI option
is described later in this section.


Option

    /NOE«XTDICTIONARY»

The /NOE option tells LIB not to generate an extended dictionary. The
extended dictionary is an extra part of the library that helps the linker
process libraries faster.

Use the /NOE option if you get either the error message  insufficient memory
    or  no more virtual memory, or if the extended dictionary causes problems
with the linker. See Section 5.4.15 for more information on how the linker
uses the extended dictionary.


Option

    /NOI«GNORECASE»

The /NOI option tells LIB not to ignore case when comparing symbols; that
is, /NOI makes LIB case sensitive. By default, LIB ignores case. Using this
option allows symbols that are the same except for case, such as Spline and
SPLINE, to be put in the same library.

Note that when you create a library with the /NOI option, LIB "marks" the
library internally to indicate that /NOI is in effect. Earlier versions of
LIB did not mark libraries in this way. If you combine multiple libraries
and any one of them is marked /NOI, then /NOI is assumed to be in effect for
the output library.


Option

    /NOL«OGO»

The /NOL option suppresses the display of the sign-on banner when LIB is
first invoked. This option can be used for batch file operation.


Option

    /PA«GESIZE»:number

The /PA option specifies the library-page size of a new library or changes
the library-page size of an existing library. The number specifies the new
page size. It must be an integer value representing a power of 2 between the
values 16 and 32,768.

A library's page size affects the alignment of modules stored in the
library. Modules in the library are always aligned to start at a position
that is a multiple of the page size (in bytes) from the beginning of the
file. The default page size for a new library is 16 bytes; for an existing
library, the default is its current page size. Because of the indexing
technique used by the LIB utility, a library with a large page size can hold
more modules than a library with a smaller page size. For each module in the
library, however, an average of number/2 bytes of storage space is wasted.
In most cases, a small page size is advantageous; you should use a small
page size unless you need to put a very large number of modules in a
library.

Another consequence of the indexing technique is that the page size
determines the maximum possible size of the library file. Specifically, this
limit is number * 65,536. For example, /PA:16 means that the library file
must be smaller than 1 megabyte (16 * 65,536 bytes).


6.1.1.3  Commands

The commands field allows you to specify the command symbols for
manipulating modules. In this field, type a command symbol followed
immediately by a module name or an object-file name. The command symbols are
the following:

Symbol                            Action
────────────────────────────────────────────────────────────────────────────
+                                 Adds an object file or library to the
                                    library

-                                 Deletes a module from the library

- +                               Replaces a module in the library

*                                 Copies a module from the library to an
                                    object file

- *                               Moves a module (copies the module and
                                    then
                                    deletes it)

Note that LIB does not process commands in left-to-right order; it uses its
own precedence rules for processing, as described in Section 6.2. You can
specify more than one operation in the commands field, in any order. LIB
makes no changes to oldlibrary if you leave this field blank.


6.1.1.4  Cross-Reference Listing File

The listfile field allows you to specify a file name for a cross-reference
listing file. You can give the listing file any name and any extension. To
create it outside your current directory, supply a path specification. Note
that the LIB utility does not assume any defaults for this field on the
command line. If you do not specify a name for the file, the file is not
created.

A cross-reference listing file contains the following two lists:


    1.  An alphabetical list of all public symbols in the library.

        Each symbol name is followed by the name of the module in which it is
        defined. The example output below shows that the public symbol  ADD
        is contained in the module  junk  and the public symbols  CALC,  MAKE,
        and  ROLL  are contained in the module  dice:

        ADD...............junk              CALC..............dice
        MAKE..............dice              ROLL..............dice

    2.  A list of the modules in the library.

        Under each module name is an alphabetical listing of the public
        symbols defined in that module. The example output below shows that
        the module  dice  contains the public symbols  CALC,  MAKE, and  ROLL
        and the module  junk  contains the public symbol  ADD:


    dice             Offset: 00000010H  Code and data size: 621H
    CALC              MAKE              ROLL

    junk             Offset: 00000bc0H  Code and data size: 118H
    ADD


6.1.1.5  Output Library

If you specify a name in the newlibrary field, LIB gives this name to the
modified library it creates. You need not give a name unless you specify
commands to change the library.

If you leave this field blank, the original library is renamed with a .BAK
extension, and the modified library receives the original name.


6.1.2  Prompts

If you want to respond to individual prompts to give input to LIB, start the
LIB utility at the DOS command level by typing LIB. The library manager
prompts you for the input it needs by displaying the following four
messages, one at a time:

    Library name:
    Operations:
    List file:
    Output library:

LIB waits for you to respond to each prompt before printing the next prompt.
If you notice that you have entered an incorrect response to a previous
prompt, press CTRL+C to exit LIB and begin again.

The responses to the LIB command prompts correspond to fields on the LIB
command line (Section 6.1.1), as follows:

Prompt                            Corresponding Command-Line Field
────────────────────────────────────────────────────────────────────────────
"Library name"                    The oldlibrary field and the options. To
                                    perform a consistency check on the
                                    library, type a semicolon (;)
                                    immediately after the library name.

                                    If the library you name does not exist,,
                                    LIB displays the following prompt:

                                    Library does not exist. Create? (y/n)

                                    Type  y  to create the library file, or
                                    n  to terminate the session. This
                                    message does not appear if a command, a
                                    comma, or a semicolon immediately
                                    follows the library name.

"Operations"                      The commands field.

"List file"                       The listfile field.

"Output library"                  The newlibrary field. This prompt
                                    appears only if you specify at least one
                                    operation at the "Operations" prompt.

    Extending lines

If you have many operations to perform during a library session, use the
ampersand symbol (&) to extend the operations line. Type the symbol after
the name of an object module or object file; do not put the ampersand
between a command symbol and a name.

The ampersand causes LIB to display the "Operations" prompt again, allowing
you to specify more operations.

    Default responses

Press ENTER to choose the default response for the current prompt. Type a
semicolon (;) and press ENTER after any response except "Library name" to
select default responses for all remaining prompts.

The following list shows the defaults for LIB prompts:

Prompt                            Default
────────────────────────────────────────────────────────────────────────────
"Operations"                      No operation; no change to library file

"List file"                       NULL; tells LIB not to create a listing
                                    file

"Output library"                  Current library name


6.1.3  Response File

Using a response file lets you conduct the library session without typing
responses to prompts at the keyboard. To run LIB with a response file, you
must first create the response file. Then type the following at the DOS
command line:

    LIB @responsefile

The responsefile is the name of a response file. Specify a path name if the
response file is not in the current directory.

You can also type @responsefile at any position on a command line or after
any of the prompts. The input from the response file is treated exactly as
if it had been entered on a command line or after the prompts. A new-line
character in the response file is treated the same as pressing the ENTER key
in response to a prompt.

A response file uses one text line for each prompt. Responses must appear in
the same order as the command prompts appear. Use command symbols in the
response file the same way you would use responses typed on the keyboard.
You can type an ampersand (&) at the end of the response to the "Operations"
prompt, for instance, and continue typing operations on the next line. This
mechanism is illustrated in Figure 6.1.

(This figure may be found in the printed book.)

When you run LIB with a response file, the prompts are displayed with the
responses. If the response file does not contain responses for all the
prompts, LIB uses the default responses.


Example

    GRAPHIC
    +CIRCLE+WAVE-WAVE*FLASH
    GRAPHIC.LST

Assume that a response file named RESPONSE in the directory B:\ PROJ
contains the above lines and you invoke LIB with the command shown below:

    LIB @B:\PROJ\RESPONSE

LIB deletes the module WAVE from the library GRAPHIC.LIB, copies the module
FLASH into an object file named FLASH.OBJ, and appends the object files
CIRCLE.OBJ and WAVE.OBJ as the last two modules in the library. LIB also
creates a cross-reference listing file named GRAPHIC.LST.


6.2  LIB Commands

The LIB utility can perform a number of library-management functions,
including creating a library file, adding an object file as a module to a
library, deleting modules from a library, replacing a module in the library
file, copying a module to a separate object file, and moving a module out of
a library and into an object file.

For each library session, LIB reads and interprets commands in the order
listed below. It determines whether a new library is being created or an
existing library is being examined or modified.


    1.  LIB processes any deletion and move commands.

        LIB does not actually delete modules from the existing file. Instead,
        it marks the selected modules for deletion, creates a new library
        file, and copies only the modules not marked for deletion into the new
        library file.

    2.  LIB processes any addition commands.

        Like deletions, additions are not performed on the original library
        file. Instead, the additional modules are appended to the new library
        file. (If there were no deletion or move commands, a new library file
        would be created in the addition stage by copying the original library
        file.)


As the LIB utility carries out these commands, it reads the object modules
in the library, checks them for validity, and gathers the information
necessary to build a library index and a listing file. When you link a
library with other object files, the linker uses the library index to search
the library.

LIB never makes changes to the original library; it copies the library and
makes changes to the copy. Therefore, if you press CTRL+C to terminate the
session, you do not lose your original library. Therefore, when you run LIB,
make sure your disk has enough space for both the original library file and
the copy.

Once an object file is incorporated into a library, it becomes an object
module. The LIB utility makes a distinction between object files and object
modules: an object file exists as an independent file while an object module
is part of a library file. An object file has a full path name, including a
drive designation, directory path name, and file-name extension (usually
.OBJ). Object modules have only a name. For example, B:\RUN\SORT.OBJ is an
object-file name, while SORT is an object-module name.


6.2.1  Creating a Library File

To create a new library file, give the name of the library file you want to
create in the oldlibrary field of the command line or at the "Library name"
prompt. LIB supplies the .LIB extension.

If the name of the new library file is the same as the name of an existing
library file, LIB assumes that you want to change the existing file. If the
name of the new library file is the same as the name of a file that is not a
library, LIB issues an error message.

When you give the name of a file that does not currently exist, LIB displays
the following prompt:

    Library does not exist. Create? (y/n)

Type  y  to create the file, or  n  to terminate the library session. This
message does not appear if the name is followed immediately by a command, a
comma, or a semicolon.

You can specify a page size for the library by specifying the /P option when
you create the library (see Section 6.1.1.2). The default page size is 16
bytes.

Once you have given the name of the new library file, you can insert object
modules into the library by using the add-command symbol (+).


6.2.2  Add Command (+)

Use the add-command symbol (+) to add an object module to a library. Give
the name of the object file to be added, without the .OBJ extension,
immediately following the plus sign.

LIB uses the base name of the object file as the name of the object module
in the library. For example, if the object file B:\CURSOR.OBJ is added to a
library file, the name of the corresponding object module is CURSOR.

Object modules are always added to the end of a library file.

    Combining libraries

You can also use the plus sign to combine two libraries. When you give a
library name following the plus sign, a copy of the contents of that library
is added to the library file being modified. You must include the .LIB
extension when you give a library-file name. Otherwise, LIB uses the default
.OBJ extension when it looks for the file. If both libraries contain a
module with the same name, LIB ignores the second module of that name. For
information on replacing modules, see Section 6.2.4.

LIB adds the modules of the library to the end of the library being changed.
Note that the added library still exists as an independent library, since
LIB copies the modules without deleting them.

In addition to allowing DOS libraries as input, LIB also accepts 286 XENIX
archives and Intel-format libraries. Therefore, you can use LIB to convert
libraries from either of these formats to the DOS format.


Examples

    LIB mainlib +flash;

This command adds the file FLASH.OBJ to the library MAINLIB.LIB.

    LIB math +trig.lib;

The command above adds the contents of the library TRIG.LIB to the library
MATH.LIB. The library TRIG.LIB is unchanged after this command is executed.



6.2.3  Delete Command (-)

Use the delete-command symbol (-) to delete an object module from a library.
After the minus sign, give the name of the module to be deleted. Module
names do not have path names or extensions.


Example

    LIB mainlib -flash;

The command shown above deletes the module flash from the library
MAINLIB.LIB.


6.2.4  Replace Command (- +)

Use the replace-command symbol (- +) to replace a module in a library.
Following the symbol, give the name of the module to be replaced. Module
names do not have path names or extensions.

To replace a module, LIB first deletes the existing module, then appends an
object file that has the same name as the module. The object file is assumed
to have the .OBJ extension and to reside in the current directory; if it
does not, give the object-file name with an explicit extension or path.


Example

    LIB mainlib -+flash;

This command replaces the module flash in the MAINLIB.LIB library with the
contents of FLASH.OBJ from the current directory. Upon completion of this
command, the file FLASH.OBJ still exists, and the flash module is updated in
MAINLIB.LIB.


6.2.5  Copy Command (*)

Use the copy-command symbol (*) followed by a module name to copy a module
from the library into an object file of the same name. The module remains in
the library. When LIB copies the module to an object file, it adds the .OBJ
extension to the module name and places the file in the current directory.


Example

    LIB mainlib *flash;

This command copies the module flash from the MAINLIB.LIB library to a file
called FLASH.OBJ in the current directory. Upon completion of this command,
MAINLIB.LIB still contains the module flash.


6.2.6  Move Command (- *)

Use the move-command symbol (-*) to move an object module from the library
file to an object file. This operation is equivalent to copying the module
to an object file, then deleting the module from the library.


Example

    LIB mainlib -*flash;

This command moves the module flash from the MAINLIB.LIB library to a file
called FLASH.OBJ in the current directory. Upon completion of this command,
MAINLIB.LIB no longer contains the module flash.




Chapter 7  NMAKE
────────────────────────────────────────────────────────────────────────────

NMAKE (the Microsoft Program-Maintenance Utility) is a sophisticated command
processor that can save time and simplify project management. By determining
which project files depend on others, NMAKE can automatically execute the
commands needed to update your project when any project file has changed.

The advantage of using NMAKE over simple batch files is that NMAKE does only
what is needed. You don't waste time rebuilding files that are already
up-to-date. NMAKE also has advanced features, such as macros, that help you
manage complex projects.


7.1  Overview of NMAKE

NMAKE works by comparing the times and dates of two sets of files, which are
called targets and dependents. A target is normally a file that you want to
create, such as an executable file. A dependent is a file used to create a
target, such as a C source file.

When you run NMAKE, it reads a description file that you supply. The
description file consists of one or more blocks. Each block typically lists
a target, the target's dependents, and the command that builds the target.
NMAKE compares the date and time of the target to those of its dependents.
If any dependent has changed more recently than the target, NMAKE updates
the target by executing the command listed in the block.

NMAKE's main purpose is to help you update applications quickly and simply.
However, because it can execute any command, it is not limited to compiling
and linking. NMAKE can also make backups, move files, and do many other
project management tasks.


7.1.1  Using a Command Line to Invoke NMAKE

When you run NMAKE, you can supply the description-file name and other
arguments using the following syntax:

    NMAKE «options» «macrodefinitions» «targets »

All of the command-line fields are optional. If you don't supply any
arguments, NMAKE looks for a default description file named MAKEFILE and
follows various other defaults that are described in this chapter.

The options field lists NMAKE options, which are described in Section 7.3,
"Command-Line Options." To specify the description file, specify the /F
option in this field.

The macrodefinitions field lists macro definitions, which allow you to
replace text in the description file. Macros are described in Section 7.2.3.


The targets field lists targets to build. If you do not list any targets,
NMAKE builds only the first target in the description file.


Example

    NMAKE /S "program = sample" sort.exe search.exe

The command supplies four arguments: an option (/S), a macro definition
("program = sample"), and two target specifications (sort.exe search.exe).

Because the command does not specify a description file, NMAKE looks for the
default description file, MAKEFILE. The /S option tells NMAKE to suppress
the display of commands as they are executed. The macro definition performs
a text substitution throughout the description file, replacing every
instance of  program  with  sample. The target specifications tell NMAKE to
update the targets SORT.EXE and SEARCH.EXE.


7.2  NMAKE Description Files

You must always supply NMAKE with a description file. In addition to
description blocks, which tell NMAKE how to build your project's target
files, the description file can contain comments, macros, inference rules,
and directives. This section describes all the elements of description
files.


7.2.1  Description Blocks

Description blocks form the heart of the description file. Figure 7.1
illustrates a typical NMAKE description block, including the three parts:
targets, dependents, and commands.

(This figure may be found in the printed book.)

    A target is a file that you want to build.

The targets part of the description block lists one or more files to build.
The line that lists targets and dependents is called the dependency line.

The example in Figure 7.1 tells NMAKE to build a single target, MYAPP.EXE.
Although single targets are common, you can also list multiple targets;
separate each target name with a space. If the rightmost target name is one
character long, put a space between the name and the colon.

The target is normally a file, but it can also be a "pseudotarget," a name
that allows you to build groups of files or execute a group of commands. See
Section 7.2.6, "Pseudotargets."

    A dependent is a file used to build a target.

The dependents part of the description block lists one or more files from
which the target is built. It is separated from the targets part by a colon.
The example in Figure 7.1 lists two dependents:

    myapp.exe : myapp.obj another.obj

The example tells NMAKE to build the target MYAPP.EXE whenever MYAPP.OBJ, or
ANOTHER.OBJ has changed more recently than MYAPP.EXE.

If any dependents of a target are listed as targets in other description
blocks, NMAKE builds those files before it builds the original target.
Essentially, NMAKE evaluates a "dependency tree" for the entire description
file. It builds files in the order needed to update the original target,
never building a target until all files that depend on it are up-to-date.

The dependent list can also include a list of directories in which NMAKE
should search for dependents. The directory list is enclosed in curly braces
( {} ) and precedes the dependent list. NMAKE searches the current directory
first, then the directories you list:

    forward.exe : {\src\alpha;d:\proj}pass.obj

In the line above, the target, FORWARD.EXE, has one dependent: PASS.OBJ. The
directory list specifies two directories:

    {\src\alpha;d:\proj}

NMAKE begins searching for PASS.OBJ in the current directory. If it is not
found, NMAKE searches the \SRC\ALPHA directory, then the D:\PROJ directory.
If NMAKE cannot find a dependent in the current directory or a listed
directory, it looks for an inference rule that describes how to create the
dependent (see Section 7.2.4, "Inference Rules").

    The commands part of a  description block can contain  one or more
commands.

The commands part of the description block lists the command(s) NMAKE should
use to build the target. This can be any command that you can execute from
the command line. The example in Fig 7.1 tells NMAKE to build MYAPP.EXE
using the following QLINK command:

    QLINK /F /PACKC myapp another

Notice that the line above is indented. NMAKE uses indentation to
distinguish between the dependency line and command line. If the command
appears on a separate line, as here, it must be indented at least one space
or tab. The dependency line must not be indented (it cannot start with a
space or tab).

Many targets are built with a single command, but you can place more than
one command after the dependency line. A long command can span several lines
if each line ends with a backslash ( \ ).

You can also place the command at the end of the dependency line. Separate
the command from the rightmost dependent with a semicolon.

To use CD, CHDIR, or SET in a description block, place the command on a
separate line:

    DIR
    CD \mydir


7.2.1.1  Wild Cards

You can use DOS wild-card characters (* and ?) to specify target and
dependent file names. NMAKE expands wild cards in target names when it reads
the description file. It expands wild cards in the dependent names when it
builds the target. For example, the following description block compiles all
source files with the .C extension:

    bondo.exe : *.c
        CL *.c


7.2.1.2  Command Modifiers

Command modifiers provide extra control over the command listed in a
description block. They are special characters that appear in front of a
command. You can use more than one modifier for a single command. The
characters are listed in the following list:

Character                         Action
────────────────────────────────────────────────────────────────────────────
@(At sign)                        Prevents NMAKE from displaying the
                                    command as it executes. In the example
                                    below, NMAKE does not display the ECHO
                                    command line:

                                    sort.exe : sort.obj
                                    @ECHO sorting

                                    The output of the ECHO command appears
                                    as usual.

- (Dash)                          Turns off error checking for the command.
                                    If the dash is followed by a number,
                                    NMAKE stops only if the error level
                                    returned by the command is greater than
                                    the number. In the following example, if
                                    the program  sample  returns an error
                                    code, NMAKE does not stop but continues
                                    to execute commands:

                                    light.lst : light.txt
                                    -sample light.txt

! (Exclamation point)             Executes the command for each dependent
                                    file if the command uses the predefined
                                    macros $? or $**. The $? macro refers to
                                    all dependent files that are out-of-date
                                    with respect to the target. The $**
                                    macro refers to all dependent files in
                                    the description block (see Section 7.2.3,
                                    "Macros"). For example,

                                    print:hop.asm skip.bas jump.c
                                    !print $** lpt1:

                                    generates the following commands:

                                    print hop.asm lpt1:
                                    print skip.bas lpt1:
                                    print jump.c lpt1:


7.2.1.3  Using Control Characters as Literals

Occasionally, you may need to list a file name containing a character that
NMAKE uses as a control character. These characters are:

# ( ) $ ^ \ { } ! @ -

To use an NMAKE control character as a literal character, place a caret (^)
in front of it. For example, say that you define a macro that ends with a
backslash:

    exepath=c:\bin\

The line above is intended to define a macro named  exepath  with the value
c:\bin\. But the second backslash causes unexpected results. Since the
back-slash is the NMAKE line-continuation character, the line actually
defines the macro  exepath  as  c:\bin  followed by whatever appears on the
next line of the description file. You can solve the problem by placing a
caret in front of the second backslash:

    exepath=c:\bin^\

You can also use a caret to place a literal newline character in a
description file. This feature can be useful in macro definitions:

    XYZ=abc^
    def

NMAKE interprets the example as if you assigned the C-style string  abc\ndef
    to the  XYZ  macro. This effect differs from using the backslash ( \ ) to
continue a line. A newline character that follows a backslash is replaced
with a space.

Carets that precede noncontrol characters are ignored. The line

    ign^ore : these ca^rets

is interpreted as

    ignore : these carets

A caret that appears in quotation marks is treated as a literal caret
character.


7.2.1.4  Listing a Target in Multiple Description Blocks

    You can specify more than one description block for the same target by
placing two colons (::) after the target. This feature can be useful for
building a complex target, such as a library, that contains components
created with different commands.


Examples

    target.lib :: a.asm b.asm c.asm
        CL a.asm b.asm c.asm
        LIB target -+a.obj -+b.obj -+c.obj;
    target.lib :: d.c e.c
        CL /c d.c e.c
        LIB target -+d.obj -+e.obj;

Both description blocks above update the library named TARGET.LIB. If any of
the assembly-language files have changed more recently than the library,
NMAKE executes the commands in the first block to assemble the source files
and update the library. Similarly, if any of the C-language files have
changed, NMAKE executes the second group of commands, which compile the C
files and update the library.

If you use a single colon in the example above, NMAKE issues an error
message. It is legal, however, to use single colons if commands are listed
in only one block. In this case, dependency lines are cumulative. For
example,

    target: jump.bas
    target: up.c
        echo Building target...

is equivalent to

    target: jump.bas up.c
        echo Building target...


7.2.2  Comments

You can place comments in a description file by preceding them with a number
sign (#):

    # This comment appears on its own line
    huey.exe : huey.obj dewey.obj # Comment on the same line
        link huey.obj dewey.obj;

A comment extends to the end of the line in which it appears. Command lines
cannot contain comments.


7.2.3  Macros

    Macros allow you to do text replacements throughout the description file.

Macros offer a convenient way to replace a string in the description file
with another string. The text is automatically replaced each time you run
NMAKE. Macros are useful in a variety of tasks, including the following:


    ■   To create a standard description file for several projects. The macro
        represents the file names used in commands. These file names are then
        defined when you run NMAKE. When you switch to a different project,
        you can change file names throughout the description file by changing
        a single macro.

    ■   To control the options that NMAKE passes to the compiler or linker.
        When you specify options in a macro, you can change options throughout
        the description file in one easy step.


You can define your own macros or use predefined macros. This section begins
by describing user-defined macros.


7.2.3.1  User-Defined Macros

You can define a macro with:

    macroname = string

The macroname can be any combination of letters, digits, and the underscore
( _ ) character. Macro names are case sensitive. NMAKE interprets  MyMacro
and  MYMACRO  as different macro names.

The string can be any string, including a null string. For example,

    command = QLINK

defines a macro named  command  and assigns it the string  QLINK.

You can define macros in the description file or on the command line. In the
description file, you must define each macro on a separate line; the line
cannot start with a space or tab. The string can contain embedded spaces,
and NMAKE ignores spaces on either side of the equal sign. You do not need
to enclose string in quotation marks (if you do, they become part of the
string).

Slightly different rules apply when you define a macro on the command line,
because of the way that the command line handles spaces. You must enclose
string in quotation marks if it contains embedded spaces. No spaces can
surround the equal sign. You can also enclose the entire macro definition,
macroname and string, in quotation marks. For example,

    NMAKE "program=sample"

defines the macro  program, assigning it the value  sample.

Once you have defined a macro, you can "undefine" it with the !UNDEF
directive (see Section 7.2.5, "Directives").


7.2.3.2  Invoking Macros

    You invoke a macro by enclosing its name in parentheses preceded by a
dollar sign ($). (The parentheses are optional if macroname is one character
long.) For example, you can invoke the  command  macro defined above as

    $(command)

When NMAKE runs, it replaces every occurrence of  $(command)  with  QLINK.
The following description file defines and uses three macros:

    program = sample
    c = QLINK
    options =

    $(program).exe : $(program).obj
        $c  $(options)  $(program).obj;

NMAKE interprets the description block as

    sample.exe : sample.obj
        QLINK    sample.obj;

NMAKE replaces every occurrence of  $(program)  with  sample, every instance
of  $c  with  QLINK, and every instance of  $(options) with a null string.
Because  c  is only one character long, you do not need to enclose it in
parentheses.

If you invoke a macro that is not defined, NMAKE treats the macro as a null
string.

Occasionally, you may need to use the dollar sign ($) as a literal
character. Use two dollar signs ($$), or precede one with a caret (^$).


7.2.3.3  Predefined Macros

NMAKE provides several predefined macros, which represent various file names
and commands. Predefined macros are useful in their own right, and they are
also employed in predefined inference rules, which are described later in
Section 7.2.4.3. NMAKE predefined macros are described in the following
list:

Macro                             Meaning
────────────────────────────────────────────────────────────────────────────
$@                                The current target's full name.

$*                                The current target's base name (full
                                    name minus the file extension).

$**                               The dependents of the current target.

$?                                The dependents that are out-of-date with
                                    respect to the current target.

$$@                               The target that NMAKE is currently
                                    evaluating. You can use this macro only
                                    to specify a dependent.

$<                                The dependent file that is out-of-date
                                    with respect to the current target
                                    (evaluated only for inference rules).

$(CC)                             The command to invoke the C compiler. By
                                    default, $(CC) is predefined as  CC = cl,
                                    which invokes the optimizing compiler.

$(AS)                             The command that invokes the Microsoft
                                    Macro
                                    Assembler. NMAKE predefines this macro
                                    as
                                    AS = masm.

$(AFLAGS)                         The options for the assembler. By
                                    default, this macro is set to the null
                                    string. If redefined, it will be used by
                                    the predefined inference rules.

$(CFLAGS)                         The options for the C compiler. By
                                    default, this macro is set to the null
                                    string. If redefined, it will be used by
                                    the predefined inference rules.

$(MAKE)                           The name with which the NMAKE utility is
                                    invoked. This macro is used to invoke
                                    NMAKE recursively. It causes the line on
                                    which it appears to be executed even if
                                    the /N option is on. You can redefine
                                    this macro if you want to execute
                                    another
                                    program.

                                    The $(MAKE) macro is useful for building
                                    different versions of a program. The
                                    following description file invokes NMAKE
                                    recursively to build targets in the
                                    VERS1 and VERS2 directories:

                                    all :vers1 vers2
                                    vers1  :
                                    cd vers1
                                    $(MAKE)
                                    cd  . .
                                    vers2 :
                                    cd vers2
                                    $(MAKE)
                                    cd . .

                                    The example changes to the VERS1
                                    directory, then invokes NMAKE
                                    recursively, causing NMAKE to process
                                    the file MAKEFILE in that directory.
                                    Then it changes to the VERS2 directory
                                    and invokes NMAKE again, processing the
                                    file MAKEFILE in that directory.

                                    Deeply recursive build procedures can
                                    exhaust NMAKE's run-time stack, causing
                                    a run-time error. To eliminate the error,
                                    use the EXEHDR utility to increase
                                    NMAKE's run-time stack. The following
                                    command, for example, gives NMAKE.EXE a
                                    stack size of 16,384 (0x4000) bytes:

                                    exehdr /stack:0x4000 nmake.exe

$(MAKEFLAGS)                      The NMAKE options currently in effect.
                                    If you invoke NMAKE recursively, you
                                    should use the
                                    command:

                                    $(MAKE)  $(MAKEFLAGS).

                                    The following flags are not preserved: A,
                                    C, D, F, P, R, S, X. You cannot redefine
                                    this macro.

$(MAKEDIR)                        The directory from which NMAKE is
                                    invoked.

Like user-defined macro names, predefined macro names are case sensitive.
NMAKE interprets  CC  and  cc  as different macro names.

    Macro modifiers allow you to specify parts of predefined macros
representing file names.

You can append characters to the first six macros in the preceding list to
modify their meaning. Appending a D specifies the directory part of the file
name only, an F specifies the file name, a B specifies just the base name,
and an R specifies the complete file name without the extension. If you add
one of these characters, you must enclose the macro name in parentheses.
(The predefined macros $$@ and $** are the only exceptions to the rule that
macro names more than one character long must be enclosed in parentheses.)

For example, assume that $@ has the value C:\SOURCE\PROG\SORT.OBJ. The list
below shows the effect of combining the special characters with $@:

Macro                             Value
────────────────────────────────────────────────────────────────────────────
$(@D)                             C:\SOURCE\PROG

$(@F)                             SORT.OBJ

$(@B)                             SORT

$(@R)                             C:\SOURCE\PROG\SORT


Examples

    trig.lib : sin.obj cos.obj arctan.obj
            !LIB trig.lib -+$?;

In the example above, the macro $? represents the names of all dependents
that are more recent than the target. The exclamation point causes NMAKE to
execute the LIB command once for each dependent in the list. As a result,
the LIB command is executed up to three times, each time replacing a module
with a newer version.

    # Include files depend on versions in current directory
    DIR=c:\include
    $(DIR)\globals.h : globals.h
    COPY globals.h $@
    $(DIR)\types.h : types.h
    COPY types.h $@
    $(DIR)\macros.h : macros.h
    COPY macros.h $@

The example above shows the use of NMAKE to update a group of include files.
Each of the files GLOBALS.H, TYPES.H, and MACROS.H in the directory
C:\INCLUDE depends on its counterpart in the current directory. If one of
the include files is out-of-date, NMAKE replaces it with the file of the
same name from the current directory.


7.2.3.4  Substitution within Macros

Just as macros allow you to substitute text in a description file, you can
also substitute text within a macro itself. Use the following form:

    $(macroname:string1 = string2)

    You can replace text in a macro, as well as in the description file.

Every occurrence of string1 is replaced by string2 in the macro macroname.
Do not put any spaces or tabs between macroname and the colon. Spaces
between the colon and string1 are made part of string1. If string2 is a null
string, all occurrences of string1 are deleted from the macroname macro.

The following description file illustrates macro substitution:

    SRCS = prog.c sub1.c sub2.c
    prog.exe : $(SRCS:.c=.obj)
            QLINK  $**;

    DUP : $(SRCS)
            !COPY $** c:\backup

The predefined macro $** stands for the names of all the dependent files
(see the list in Section 7.2.3.3). If you invoke the example file with a
command line that specifies both targets, NMAKE executes the following
commands:

    QLINK prog.obj sub1.obj sub2.obj;

    COPY prog.c c:\backup
    COPY sub1.c c:\backup
    COPY sub2.c c:\backup

The macro substitution does not alter the definition of the  SRCS  macro;
rather, it simply replaces the listed characters. When NMAKE builds the
target PROG.EXE, it gets the definition for the predefined macro $** (the
dependent list) from the dependency line, which specifies the macro
substitution in  SRCS. The same is true for the second target,  DUP. In this
case, however, no macro substitution is requested;  SRCS  retains its
original value, and $** represents the names of the C source files. (In the
example above, the target  DUP  is a pseudotarget; Section 7.2.6 describes
pseudotargets.)

You can also perform substitution in the following predefined macros: $@,
$*, $**, $?, and $. The principle is the same as for other macros. The
command in the following description block substitutes within a predefined
macro:

    target.abc : depend.xyz
        echo $(@:targ=blank)

If dependent  depend.xyz  is out-of-date relative to target  target.abc,
NMAKE executes the command

    echo blanket.abc

The example uses the predefined macro $@, which equals the full name of the
current target ( target.abc). It substitutes  blank  for  targ  in the
target, resulting in  blanket.abc. Note that you do not put the usual dollar
sign in front of the predefined macro. The example uses

    $(@:targ=blank)

instead of

    $($@:targ=blank)

to substitute within the predefined macro $@.


7.2.3.5  Inherited Macros

When NMAKE executes, it creates macros equivalent to every current
environment variable. These are called "inherited" macros because they have
the same names and values as the corresponding environment variables. (The
inherited macro is all uppercase, however, even if the corresponding
environment variable is not.)

Inherited macros can be used like other macros. You can also redefine them.
The following example redefines the inherited macro  PATH:

    PATH = c:\tools\bin

    sample.obj : sample.c
        CL /c sample.c

    Inherited macros take their definitions from environment variables.

No matter what value PATH had in the DOS environment, it has the value
c:\tools\bin  when NMAKE executes the CL command in this description block.
Redefining the inherited macro does not affect the original environment
variable; when NMAKE terminates, PATH has its original value.

The /E option enforces macro inheritance. If you supply this option, NMAKE
ignores any attempt to redefine a macro that derives from an environment
variable.


7.2.3.6  Precedence among Macro Definitions

If you define the same macro in more than one place, NMAKE uses the macro
with the highest precedence. The precedence from highest to lowest is as
follows:


    1.  Macros defined on the command line

    2.  Macros defined in a description file or include file

    3.  Inherited macros

    4.  Macros defined in the TOOLS.INI file

    5.  Predefined macros such as CC and AS


The /E option defeats any attempt to redefine inherited macros. If you run
NMAKE with this option, macros inherited from environment variables override
any same-named macros in the description file.


7.2.4  Inference Rules

Inference rules are templates that NMAKE uses to create files with a given
extension. For instance, when NMAKE encounters a description block with no
commands, it tries to apply an inference rule that specifies how to create
the target from the dependent files, given the two extensions. Similarly, if
a dependent file does not exist, NMAKE tries to apply an inference rule that
specifies how to create the missing dependent from another file with the
same base name.

    Inference rules tell NMAKE how to create files with a certain extension.

Inference rules provide a convenient shorthand for common operations. For
instance, you can use an inference rule to avoid repeating the same command
in several description blocks.

You can define your own inference rules or use predefined inference rules.
This section begins by describing user-defined inference rules.


7.2.4.1  User-Defined Inference Rules

You can define inference rules in the description file or in the TOOLS.INI
file. An inference-rule definition lists two file extensions and one or more
commands. For instance, the following inference rule tells NMAKE how to
build a .OBJ file using a .C file:

    .C.OBJ:
        QCL /c $<

The first line lists two extensions. The second extension (.OBJ) specifies
the type of the desired file and the first (.C) specifies the type of the
desired file's dependent. The second line lists the command used to build
the desired file. Here, the predefined macro $ represents the name of a
dependent that is out-of-date relative to the target.

NMAKE could apply the above inference rule to the following description
block:

    sample.obj :

The description block lists only a target, SAMPLE.OBJ. Both the dependent
and the command are missing. However, given the target's base name and
extension, plus the above inference rule, NMAKE has enough information to
build the target. NMAKE first looks for a .C file with the same base name as
the target. If SAMPLE.C exists, NMAKE compares its date to that of
SAMPLE.OBJ (the comparison is triggered by the predefined macro $). If
SAMPLE.C has changed more recently, NMAKE compiles it using the QCL command
listed in the inference rule:

    QCL /c sample.c

────────────────────────────────────────────────────────────────────────────
NOTE

NMAKE applies an inference rule only if the base name of the file it is
trying to create matches the base name of a file that already exists. Thus,
inference rules are useful only when there is a one-to-one correspondence
between the desired file and its dependent. You cannot define an inference
rule that replaces several modules in a library, for example.
────────────────────────────────────────────────────────────────────────────


7.2.4.2  Extension Search Paths

If an inference rule does not specify a search path, as in the example
above, NMAKE looks for files in the current directory. You can specify a
single path for each of the extensions, using the following form:

    {frompath}. fromext{topath}. toext:
            commands

NMAKE searches in the frompath directory for files with the fromext
extension. It uses commands to create files with the toext extension in the
topath directory.


7.2.4.3  Predefined Inference Rules

NMAKE provides predefined inference rules to perform these common
development tasks:


    ■   Creating a .OBJ file by compiling a .C file

    ■   Creating a .OBJ file by assembling a .ASM file

    ■   Creating a .EXE file by compiling a .C file and linking the resulting
        .OBJ file


Table 7.1 describes the predefined inference rules.

Table   7.1 Predefined Inference Rules

╓┌───────────────┌─────────────────────────┌─────────────────────────────────╖
Inference Rule  Command                   Default Action
────────────────────────────────────────────────────────────────────────────
.C.OBJ          $(CC) $(CFLAGS) /C $*.C   CL /C $*.C
.ASM.OBJ        $(AS) $(AFLAGS) $*;       MASM $*;
.C.EXE          $(CC) $(CFLAGS) $*.C      CL $*.C
────────────────────────────────────────────────────────────────────────────


For example, say that you have the following description file:

    sample.exe :

Like the previous example, this description block lists a target without any
dependents or commands. NMAKE looks at the target's extension (.EXE) and

checks for an inference rule that describes how to create a .EXE file. The
last rule in Table 7.1 provides this information:

    .c.exe:
        $(CC) $(CFLAGS) $*.c

To apply this rule, NMAKE first looks for a file with the same base name as
the target (SAMPLE) and the .C extension. If SAMPLE.C exists in the current
directory, NMAKE executes the command line given in the rule. The command
compiles SAMPLE.C and links the resulting file SAMPLE.OBJ to create
SAMPLE.EXE.


7.2.4.4  Precedence among Inference Rules

If the same inference rule is defined in more than one place, NMAKE uses the
rule with the highest precedence. The precedence from highest to lowest is


    1.  Inference rules defined in the description file

    2.  Inference rules defined in the TOOLS.INI file

    3.  Predefined inference rules


NMAKE uses a predefined inference rule only if no user-defined inference
rule exists for the desired operation.


7.2.5  Directives

Directives allow you to write description files that are similar to batch
files. Directives can execute commands conditionally, display error
messages, include other files, and turn on or off certain options.

    NMAKE directives are similar to C preprocessor directives.

A directive begins with an exclamation point (!), which must appear at the
beginning of the line. You can place spaces between the exclamation point
and the directive keyword. The following list describes NMAKE directives:

Directive                         Description
────────────────────────────────────────────────────────────────────────────
!CMDSWITCHES                      Turns on or off one of four NMAKE
{+| -}opt...                      options:
                                    /D, /I, /N, and /S. If no options are
                                    specified, the
                                    options are reset to the way they were
                                    when NMAKE started. Turn an option on by
                                    preceding it with a plus sign (+), or
                                    turn it off by preceding it with a minus
                                    sign (-). Using this keyword updates the
                                    MAKEFLAGS macro.

!ELSE                             Executes the statements between the
                                    !ELSE and  !ENDIF keywords if the
                                    statements preceding the !ELSE keyword
                                    were not executed.

!ENDIF                            Marks the end of the !IF keyword.

!ERROR text                       Causes text to be printed and then stops
                                    execution.

!IF constantexpression            Executes the statements between the !IF
                                    keyword
                                    and the next !ELSE or !ENDIF keyword if
                                    constant
                                    expression evaluates to a nonzero value.

!IFDEF macroname                  Executes the statements between the
                                    !IFDEF keyword and the next !ELSE or
                                    !ENDIF keyword if macroname is defined.
                                    NMAKE considers a macro with a null
                                    value to be defined.

!IFNDEF macroname                 Executes the statements between the
                                    !IFNDEF keyword and the next !ELSE or
                                    !ENDIF keyword if macroname is not
                                    defined.

!INCLUDE filename                 Reads and evaluates the file filename
                                    before continuing with the current
                                    description file. If filename is
                                    enclosed by angle brackets (< >), NMAKE
                                    searches for the file in the directories
                                    specified by the
                                    INCLUDE macro. Otherwise, it looks only
                                    in the
                                    current directory. The INCLUDE macro is
                                    initially set to the value of the
                                    INCLUDE environment
                                    variable.

!UNDEF macroname                  Marks macroname as being undefined in
                                    NMAKE's symbol table.

The constantexpression used with the !IF directive can consist of integer
constants, string constants, or program invocations. Integer constants can
use the C unary operators for numerical negation (-), one's complement (~),
and logical negation (!). They can also use any of the C binary operators
listed below:

Operator                          Description
────────────────────────────────────────────────────────────────────────────
+                                 Addition

-                                 Subtraction

*                                 Multiplication

/                                 Division

%                                 Modulus

&                                 Bitwise AND

|                                 Bitwise OR

^^                                Bitwise XOR

&&                                Logical AND

||                                Logical OR

<<                                Left shift

>>                                Right shift

==                                Equality

!=                                Inequality

<                                 Less than

>                                 Greater than

<=                                Less than or equal to

>=                                Greater than or equal to

You can group expressions using parentheses. NMAKE treats numbers as decimal
unless they start with 0 (octal) or 0x (hexadecimal). Use the equality (==)
operator to compare two strings for equality or the inequality (!=) operator
to compare for inequality. Enclose strings within quotes. Program
invocations must be in square brackets ([ ]).


Example

    !INCLUDE <infrules.txt>
    !CMDSWITCHES +D
    winner.exe:winner.obj
    !IFDEF debug
    !  IF "$(debug)"=="y"
        QLINK /CO winner.obj;
    !  ELSE
        QLINK winner.obj;
    !  ENDIF
    !ELSE
    !  ERROR Macro named debug is not defined.
    !ENDIF

In the example above, the !INCLUDE directive causes NMAKE to insert the file
INFRULES.TXT into the description file. The !CMDSWITCHES directive turns on
the /D option, which displays the dates of the files as they are checked. If
WINNER.EXE is out-of-date with respect to WINNER.OBJ, the !IFDEF directive
checks to see if the macro  debug  is defined. If it is defined, the !IF
directive checks to see if it is set to  y. If it is, the linker is invoked
with the /CO option; otherwise it is invoked without. If the  debug  macro
is not defined, the !ERROR directive prints the message and NMAKE stops.


7.2.6  Pseudotargets

Pseudotargets are useful for building a group of files or executing a group
of commands.

A pseudotarget is similar to a target, but it is not a file. It is a name
that serves as a "handle" for building a group of files or executing a group
of commands. In the following example,  UPDATE  is a pseudotarget.

    UPDATE: *.*
    !COPY $** a:\product

When NMAKE evaluates a pseudotarget, it always considers the dependents to
be out-of-date. In the example, NMAKE copies each of the dependent files to
the specified drive and directory.

Like macro names, pseudotarget names are case sensitive. Predefined
pseudotarget names are all uppercase.

Predefined pseudotargets provide special rules in a description file. You
can use their names on the command line, in a description file, or in the
TOOLS.INI file. You need not specify them as targets; NMAKE uses the rules
they define no matter where they appear. NMAKE's predefined pseudotargets
are described in the following list:

Pseudotarget                      Action
────────────────────────────────────────────────────────────────────────────
.IGNORE :                         Ignores exit codes returned by programs
                                    called from the description file. Same
                                    effect as invoking NMAKE with the /I
                                    option.

.PRECIOUS : target(s)...          Tells NMAKE not to delete target(s) if
                                    the commands that build it are quit or
                                    interrupted. Using this pseudotarget
                                    overrides the NMAKE default. By default,
                                    NMAKE deletes the target if it cannot be
                                    sure the target is built successfully.

.SILENT :                         Does not display lines as they are
                                    executed. Same effect as invoking NMAKE
                                    with the /S option.

.SUFFIXES : list...               Lists file suffixes for NMAKE to try
                                    when building a target file for which no
                                    dependents are specified. This list is
                                    used together with inference rules. See
                                    Section 7.2.4, "Inference Rules."

                                    When NMAKE finds a target without any
                                    dependents, it searches the current
                                    directory for a file with the same base
                                    name as the target and a suffix from the
                                    list. If NMAKE finds such a file, and if
                                    an inference rule applies to the file,
                                    then NMAKE treats the file as a
                                    dependent of the target. The order of
                                    the suffixes in the list defines the
                                    order in which NMAKE searches for the
                                    file. The list is predefined as follows:

                                    .SUFFIXES: .obj .exe .c .asm

                                    To add suffixes to the list, specify
                                    .SUFFIXES : followed by the new suffixes.
                                    To clear the list, specify
                                    .SUFFIXES:


7.3  Command-Line Options

NMAKE accepts a number of options. You can specify options in uppercase or
lowercase and use either a slash or dash. For example, -A, /A, -a, and /a
all represent the same option. The NMAKE options are described in the
following list:

Option                            Action
────────────────────────────────────────────────────────────────────────────
/A                                Builds all of the requested targets even
                                    if they are not out-of-date.

/C                                Suppresses nonfatal error or warning
                                    messages and the NMAKE logo display.

/D                                Displays the modification date of each
                                    file.

/E                                Causes environment variables to override
                                    macro definitions in description files.
                                    See Section 7.2.3, "Macros."

/F filename                       Specifies filename as the name of the
                                    description file. If you supply a dash
                                    (-) instead of a file name, NMAKE gets
                                    input from the standard input device
                                    instead of the description file.

/HELP                             Displays NMAKE command syntax.

/I                                Ignores return codes from commands
                                    listed in the description file. NMAKE
                                    processes the whole description file
                                    even if errors occur.

/N                                Displays, but does not execute, the
                                    description file's commands. This option
                                    is useful for debugging
                                    description files and checking which
                                    targets are
                                    out-of-date.

/NOLOGO                           Suppresses the NMAKE logo display.

/P                                Displays all macro definitions and
                                    target descriptions on the standard
                                    output device.

/Q                                Returns zero if the target is up-to-date
                                    and nonzero if it is not. This option is
                                    useful when running NMAKE from a batch
                                    file.

/R                                Ignores inference rules and macros that
                                    are predefined or defined in the
                                    TOOLS.INI file.

/S                                Suppresses the display of commands
                                    listed in the description file.

/T                                Changes the modification dates for
                                    out-of-date target files to the current
                                    date.

/X filename                       Sends all error output to filename,
                                    which can be a file or a device. If you
                                    supply a dash (-) instead of a file name,
                                    the error output is sent to the standard
                                    output device.


Examples

    NMAKE /f sample.mak /c targ1 targ2

The command in the above example specifies two NMAKE options.

The /f option tells NMAKE to read the description file SAMPLE.MAK. The /c
option tells NMAKE not to display nonfatal error messages and warnings. The
command lists two targets (targ1  and  targ2) to update.

    NMAKE  /D /N targ1

In the example above, NMAKE updates the target  targ1. The /D option
displays the modification date of each file; the /N option displays the
commands without executing them.


7.4  Using a Response File to Invoke NMAKE

Occasionally, you may need to give NMAKE a long list of command-line
arguments that exceeds the maximum length of a command line (128 characters
in DOS). To do this, place the command arguments in a file, then give the
name of the file when you run NMAKE.

For instance, say that you create a file named UPDATE, which consists of
this line:

    /S "program = sample" sort.exe search.exe

If you start NMAKE with the command

    NMAKE @update

NMAKE reads its command-line arguments from UPDATE. The at sign (@) tells
NMAKE to read arguments from the file. The effect is the same as if you
typed the arguments directly on the command line:

    NMAKE /S "program = sample" sort.exe search.exe

Within the file, line breaks between arguments are treated as spaces. Macro
definitions that contain spaces must be enclosed in quotation marks, just as
if you typed them on the command line. You can continue a macro definition
across multiple lines by ending each line except the last with a backslash (
\ ):

    /S "program \
    = sample" sort.exe search.exe

This file is equivalent to the first example. The backslash in the example
allows the macro definition ("program = sample") to span two lines.


7.5  The TOOLS.INI File

You can customize NMAKE by placing commonly used macros and inference rules
in the TOOLS.INI initialization file. Settings for NMAKE must follow a line
that begins with  [NMAKE]. This part of the initialization file can contain
macro definitions, .SUFFIXES lists, and inference rules. For example,

    [NMAKE]
    CC=cl
    CFLAGS=-Gc -Gs -W3 -Olt
    .c.obj:
        $(CC) -c $(CFLAGS) $*.c

If TOOLS.INI contains the code above, NMAKE reads and applies the lines
following  [NMAKE]. The example defines the macros CC and CFLAGS and
redefines the inference rule for making .OBJ files from .C sources.

NMAKE looks for TOOLS.INI in the current directory. If it is not found
there, NMAKE searches the directory specified by the INIT environment
variable.


7.6  In-Line Files

NMAKE can write "in-line files," which can contain any text you specify. One
use for in-line files is to write a response file for another utility such
as LIB. (Response files are useful when you need to supply a program with a
long list of arguments that exceeds the maximum length of the command line.)


Use this syntax to create an in-line file:

    target : dependents
        command << «filename»
    inlinetext
    <<«KEEP | NOKEEP»

All of the text between the two sets of double angle brackets () is placed
in the in-line file. The filename is optional. If you don't supply filename,
NMAKE gives the in-line file a unique name. NMAKE places the in-line file in
the current directory or, if the TMP environment variable is defined, in the
directory specified by TMP.

The in-line file can be temporary or permanent. If you don't specify
otherwise, or if you specify NOKEEP, it is temporary. Specify KEEP to retain
the file.

The following example creates a LIB response file named LIB.LRF:

    math.lib : add.obj sub.obj mul.obj div.obj
    LIB @<<lib.lrf
    math.lib
    -+add.obj-+sub.obj-+mul.obj-+div.obj
    listing
    <<KEEP

The resulting response file tells LIB which library to use, the commands to
execute, and the listing file to produce:

    math.lib
    -+add.obj-+sub.obj-+mul.obj-+div.obj
    listing

The in-line file specification can create more than one in-line file. For
instance,

    target.abc : depend.xyz
        cat <<file1 <<file2
    I am the contents of file1.
    <<KEEP
    I am the contents of file2.
    <<KEEP

The example creates two in-line files named FILE1 and FILE2; then NMAKE
executes the command:

    CAT file1 file2

The KEEP keywords tell NMAKE not to delete FILE1 and FILE2 when done.


7.7  NMAKE Operations Sequence

If you are writing a complex description file, you may need to know the
exact order of steps that NMAKE follows. This section describes those steps
in order.

When you run NMAKE from the command line, its first task is to find the
description file, following these steps:


    1.  If NMAKE is invoked with the /F option, it uses the file name
        specified in the option.

    2.  If /F is not specified, NMAKE looks for a file named MAKEFILE in the
        current directory. If such a file exists, it is used as a description
        file.

    3.  If NMAKE still has not found a description file, it returns an error.


NMAKE stops searching for a description file as soon as it finds one, even
if other potential description files exist. If you specify /F, NMAKE uses
the file specified by that option even if MAKEFILE exists in the current
directory.

    If you do not specify targets, NMAKE updates only the first target in the
description file.

Next, NMAKE updates every target listed on the command line. If none is
listed, NMAKE updates only the first target in the description file.NMAKE
then applies macro definitions and inference rules in the following order,
from highest to lowest priority:


    1.  Macros defined on the command line

    2.  Macros defined in a description file or include file

    3.  Inherited macros

    4.  Macros defined in the TOOLS.INI file

    5.  Predefined macros such as CC and AS


The /E option causes inherited macros to override macros defined on the
command line. The /R option causes NMAKE to ignore macros and inference
rules that are predefined or defined in TOOLS.INI. If a macro is defined
more than once in any file, the last definition is used.

NMAKE updates the specified targets in the order in which they appear on the
command line. For each target, NMAKE checks the date and time of each
dependent and, if the dependent has changed more recently than the target,
performs the commands needed to update the target. If the dependents are
themselves targets that are out-of-date, NMAKE updates them first, in the
order they appear in the description block. If you specify a pseudotarget,
or if you use the /A option, NMAKE updates the target even if it is not
out-of-date with respect to its dependents.

If the target has no explicit dependents, NMAKE looks in the current
directory for one or more files whose extensions are in the .SUFFIXES list.
If it finds such files, NMAKE treats them as dependents and updates the
target according to the commands.

If no commands are given to update the target or if the dependents cannot be
found, NMAKE applies inference rules to build the target. By default, it
tries to build .EXE files from .OBJ files; it also tries to build .OBJ files
from .C and .ASM sources. In practice, this means you should specify .OBJ
files as dependents, because NMAKE compiles your source files when it can't
find the .OBJ files.

NMAKE normally quits processing the description file when a command  returns
an error. In addition, if it cannot tell that the target was built
successfully, NMAKE deletes the partially created target. If you use the /I
commandline option, NMAKE ignores exit codes and attempts to continue
processing. The .IGNORE pseudotarget has the same effect. To prevent NMAKE
from  deleting the partially created target, specify the target name in the
.PRECIOUS pseudotarget.

Alternatively, you can use the dash (-) command modifier to ignore the error
code for an individual command. An optional number after the dash tells
NMAKE to continue if the command returns an error code that is less than or
equal to the number, and to stop if the error code is greater than the
number.

You can help document errors by using the !ERROR directive to print
descriptive text. The directive causes NMAKE to print some text, then stop,
even if you use /I, .IGNORE, or the dash (-) modifier.






Appendix A  Exit Codes
────────────────────────────────────────────────────────────────────────────

Most of the utilities return an exit code (sometimes called an "errorlevel"
code) that can be used by DOS batch files or other programs such as NMAKE.
If the program finishes without errors, it returns exit code 0. The code
returned is nonzero if the program encounters an error. This appendix
discusses several uses for exit codes and lists the exit codes that can be
returned by each utility.


A.1  Exit Codes with NMAKE

The Microsoft Program-Maintenance Utility (NMAKE) automatically stops
execution if a program executed by one of the commands in the NMAKE
description file encounters an error. (Invoke NMAKE with the /I option to
disable this behavior for the entire description file. Or, place a minus
sign (-) in front of a command to disable it for that command only.) The
exit code returned by the program is displayed as part of the error message.


For example, assume the NMAKE description file TEST contains the following
lines:

    TEST.OBJ :     TEST.C
        QCL /c TEST.C

If the source code in TEST.C contains a program error (not a warning error),
you would see the following message the first time you use NMAKE with the
description file TEST:

    "nmake: fatal error U1077: return code 2"

This error message indicates that the command  QCL /c TEST.C  in the NMAKE
description file returned exit code 2.

You can also test exit codes in NMAKE description files with the !IF
directive.


A.2  Exit Codes with DOS Batch Files

If you prefer to use DOS batch files instead of NMAKE description files, you
can test the code returned with the IF command. The following sample batch
file, called COMPILE.BAT, illustrates how to do this:

    QCL /c %1.C
    IF NOT ERRORLEVEL 1 QLINK %1;
    IF NOT ERRORLEVEL 1 %1

You can execute this sample batch file with the following command:

    COMPILE TEST

DOS then executes the first line of the batch file, substituting TEST for
the parameter %1, as in the following command line:

    QCL /c TEST.C

It returns exit code 0 if the compilation is successful, or a higher code if
the compiler encounters an error. In the second line, DOS tests to see if
the code returned by the previous line is 1 or higher. If it is not (that
is, if the code is 0), DOS executes the following command:

    QLINK TEST;

QLINK also returns a code, which is tested by the third line. If this code
is 0, the TEST program is executed.

The compiler returns the following exit codes:

Code                              Meaning
────────────────────────────────────────────────────────────────────────────
0                                 No error

Nonzero number                    Program or system-level error


A.3  Exit Codes for Programs

An exit code 0 always indicates execution of the program with no fatal
errors. Warning errors also return exit code 0. NMAKE can return several
codes indicating different kinds of errors, while other programs return only
one code to indicate that an error occurred.


A.3.1  QLINK Exit Codes

The linker returns the following exit codes:

Code                              Meaning
────────────────────────────────────────────────────────────────────────────
0                                 No error.

2                                 Program error. Commands or files given
                                    as input to the linker produced the
                                    error.

4                                 System error. The linker encountered one
                                    of the
                                    following problems: 1) ran out of space
                                    on output
                                    files; 2) was unable to reopen the
                                    temporary file;
                                    3) experienced an internal error; 4) was
                                    interrupted by the user.


A.3.2  LIB Exit Codes

The Microsoft Library Manager (LIB) returns the following exit codes:

Code                              Meaning
────────────────────────────────────────────────────────────────────────────
0                                 No error.

2                                 Program error. Commands or files given
                                    as input to the utility produced the
                                    error.

4                                 System error. The library manager
                                    encountered one of the following
                                    problems: 1) ran out of memory; 2)
                                    experienced an internal error; 3) was
                                    interrupted by the user.


A.3.3  NMAKE Exit Codes

NMAKE returns the following exit codes:

Code                              Meaning
────────────────────────────────────────────────────────────────────────────
0                                 No error

2                                 Program error

4                                 System error─out of memory

If a program called by a command in the NMAKE description file produces an
error, the exit code is displayed in the NMAKE error message.






Appendix B  Working with QuickC Compiler Memory Models
────────────────────────────────────────────────────────────────────────────

You can gain greater control over the way your program uses memory by
specifying the memory model for the program. You do not need to specify a
memory model except in the following cases:


    ■   Your program has more than 64K of code or more than 64K of static
        data.

    ■   Your program contains individual arrays that need to be larger than
        64K.


In these cases, you have the following options:


    1.  If you are compiling with the QCL command, you can specify one of the
        other standard memory models (medium, compact, large, or huge) using
        one of the /A options.

    2.  You can create a mixed-model program using the _near, _far, and _huge
        keywords.

    3.  You can combine method 2 with method 1.



B.1  Near, Far, and Huge Addressing

The terms "near," "far," and "huge" are crucial to understanding the concept
of memory models. These terms indicate how data can be accessed in the
segmented architecture of the 8086 family of microprocessors (8086, 80186,
and 80286).

    Segments

DOS loads the code and data allocated by your program into segments in
physical memory. Each segment can be up to 64K long. Separate segments are
always allocated for the program code and data, except for tiny-model
programs, in which only one segment is allocated for both code and data. For
other memory models, the minimum number of segments allocated for a program
is two. These two segments are called the default segments. The small memory
model uses only the two default segments. The other memory models discussed
in this appendix allow more than one code segment per program, or more than
one data segment per program, or both.

    Near addresses

In the 8086 family of microprocessors, all memory addresses consist of two
parts:


    1.  A 16-bit number that represents the base address of a memory segment

    2.  Another 16-bit number that gives an offset within that segment


The architecture of the 8086 microprocessor is such that code can be
accessed within the default code or data segment by using just the 16-bit
offset value. This is possible because the segment addresses for the default
segments are always known. This 16-bit offset value is called a "near
address"; it can be accessed with a "near pointer." Because only 16-bit
arithmetic is required to access any near item, near references to code or
data are smaller and more efficient.

    Far addresses

When data or code lie outside the default segments, the address must use
both the segment and offset values. Such addresses are called "far
addresses"; they can be accessed by using "far pointers" in a C program.
Accessing far data or code items is more expensive in terms of program speed
and size, but using them en-ables your programs to address all memory,
rather than just the standard 64K code and data segments.

    Huge addresses

There is a third type of address used with the Microsoft QuickC Compiler:
the "huge address." A huge address is similar to a far address in that both
consist of a segment value and an offset value; but the two differ in the
way address arithmetic is performed on pointers. Because items (both code
and data) referenced by far pointers are still assumed to lie completely
within the segment in which they start, pointer arithmetic is done only on
the offset portion of the address. This gain in pointer arithmetic
efficiency is achieved, however, by limiting the size of any single item to
64K. With data items, huge pointers overcome this size limitation: pointer
arithmetic is performed on all 32 bits of the data item's address, thus
allowing data items referenced by huge pointers to span more than one
segment, provided they conform to the rules outlined in Section B.2.6,
"Creating Huge-Model Programs."

The rest of this chapter deals with the various methods you can use to
control whether your program makes near or far calls to access code or data.



B.2  Using the Standard Memory Models

The libraries created by the SETUP program support six standard memory
models. Using the standard memory models is the simplest way to control how
your program accesses code and data in memory.

When you use the standard memory models, the compiler handles library
support for you. The library corresponding to the memory model you specify
is used automatically. All memory models, except the tiny and huge models,
have their own libraries. The tiny model uses the same library as the small
model, and the huge model uses the same library as the large model.

The advantage of using standard models for your programs is simplicity. In
the standard models, memory management is specified by compiler options;
since the standard models do not require the use of extended keywords, they
are the best way to write code that can be ported to other systems
(particularly systems that do not use segmented architectures).

The disadvantage of using standard memory models exclusively is that they
may not produce the most efficient code. For example, if you have an
otherwise small-model program containing a large array that pushes the total
data size for your program over the 64K limit for small model, it may be to
your advantage to declare the one array with the _far keyword, while keeping
the rest of the program small model, as opposed to using the standard
compact memory model for the entire program. For maximum flexibility and
control over how your program uses memory, you can combine the
standard-memory-model method with the _near, _far, and _huge keywords,
described in Section B.3.

The /A options for QCL are used to specify one of the six standard memory
models (tiny, small, medium, compact, large, or huge) at compile time. These
memory-model options are discussed in the next six sections.

Note that in the following sections, which describe the different
memory-model addressing conventions, it is important to keep in mind two
common features of all six models:


    1.  No single source module can generate 64K or more of code.

    2.  No single data item can exceed 64K, unless it appears in a huge-model
        program or it has been declared with the _huge keyword.



B.2.1  Creating Tiny-Model Programs

The /AT option tells the compiler to create a program that occupies one
segment, which contains both code and data. A tiny-model program, including
code and data, cannot exceed 64K in size. Thus the tiny model produces the
smallest programs, though they offer no speed advantage over small-model
programs.

The tiny memory model produces .COM files instead of .EXE files. To produce
.COM files, specify the /T option when linking. This will link the object
files with CRTCOM.LIB, which contains code needed by .COM files.

Figure B.1 illustrates how memory is set up for the tiny memory model.

(This figure may be found in the printed book.)


B.2.2  Creating Small-Model Programs

The /AS option tells the compiler to create a program that occupies the two
default segments─one for code and one for data.

Small-model programs are typically QuickC programs that are short or have a
limited purpose. Because code and data for these programs are each limited
to 64K, the total size of a small-model program can never exceed 128K. Most
programs fit easily into this model.

Because programs compiled within the QuickC environment use the small memory
model by default, you should give the /AS option in cases where you use the
QCL command to compile a module for use within the QuickC environment.

By default, both code and data items in small-model programs are accessed
with near addresses. This makes small-model programs faster than those using
the memory models described in the following sections. You can override the
defaults by using the _far or _huge keyword for data or by using the _far
keyword for code.

The QCL command and the compiler in the QuickC environment create
small-model programs automatically if you do not specify a memory model. The
/AS option is provided for completeness; you never need to give it
explicitly.

Figure B.2 illustrates how memory is set up for the small memory model.

(This figure may be found in the printed book.)


B.2.3  Creating Medium-Model Programs

The /AM option provides a single segment for program data and multiple
segments for program code. Each source module is given its own code segment.


Medium-model programs are typically QuickC programs that have a large number
of program statements (more than 64K of code), but a relatively small amount
of data (less than 64K). Program code can occupy any amount of space and is
given as many segments as needed; total program data cannot be greater than
64K.

By default, code items in medium-model programs are accessed with far
addresses, and data items are accessed with near addresses. You can override
the default by using the _far or _huge keyword for data and the _far keyword
for code.

The medium model provides a useful trade-off between speed and space, since
most programs refer more frequently to data items than to code. Figure B.3
illustrates how memory is set up for the medium memory model.

(This figure may be found in the printed book.)


B.2.4  Creating Compact-Model Programs

The /AC option directs the compiler to allow multiple segments for program
data but only one segment for the program code.

Compact-model programs are typically QuickC programs that have a large
amount of data but a relatively small number of program statements. Program
data can occupy any amount of space and are given as many segments as
needed.

By default, code items in compact-model programs are accessed with near
addresses, and data items are accessed with far addresses. You can override
the defaults by using the _near or _huge keyword for data or by using the
_far keyword for code.

In the medium and compact models, NULL must be used carefully in certain
situations. NULL actually represents a null data pointer. In the small,
large, and huge memory models, where code and data pointers are the same
size, it can be used with either. This is not the case, however, in medium
and compact memory models, where code and data pointers are different sizes.
Consider the following example:

    void func1(char *dp)
    {
    .
    .
    .
    }

    void func2(char (*fp)(void))
    {
    .
    .
    .
    }

    main()
    {
    func1(NULL);
    func2(NULL);
    }

This example passes a 16-bit pointer to both  func1  and  func2  if compiled
using the medium model, and a 32-bit pointer to both  func1  and  func2  if
compiled using the compact model. To override this behavior, add prototypes
to the beginning of the program to indicate the types, or use an explicit
cast on the argument to  func1  (compact model) or  func2  (medium model).

Figure B.4 illustrates how memory is set up for the compact memory model.

(This figure may be found in the printed book.)


B.2.5  Creating Large-Model Programs

The /AL option allows the compiler to create multiple segments, as needed,
for both code and data. No one data item, however, can exceed 64K.

Large-model programs are typically very large C programs that use a large
amount of data storage during normal processing.

By default, both code and data items in large-model programs are accessed
with far addresses. You can override the defaults by using the _near or
_huge keyword for data or by using the _near keyword for code.

Figure B.5 illustrates how memory is set up for the large and huge memory
models.

(This figure may be found in the printed book.)


B.2.6  Creating Huge-Model Programs

The /AH option is similar to the /AL option, except that the restriction on
the size of individual data items is removed for arrays.

    Restrictions

Some size restrictions do apply to elements of huge arrays where the array
is larger than 64K. To provide efficient addressing, array elements are not
permitted to cross segment boundaries. This has the following implications:



    ■   No array element can be larger than 64K. For instance, this might
        occur when an array has elements that are structures or arrays.

    ■   For any array larger than 128K, all elements must have a size in bytes
        equal to a power of 2 (that is, 2 bytes, 4 bytes, 8 bytes, 16 bytes,
        and so on). If the array is 128K or smaller, however, its elements may
        be any size, up to and including 64K.


    Pointer subtraction

In huge-model programs, care must be taken when using the sizeof operator or
when subtracting pointers. The C language defines the value returned by the
sizeof operator to be an unsigned int value, but the size in bytes of a huge
array is an unsigned long value. To solve this discrepancy, the QuickC
compiler produces the correct size of a huge array when a type cast like the
following is used:

    (unsigned long)sizeof(huge_item)

Similarly, the C language defines the result of subtracting two pointers as
an int value. When subtracting two huge pointers, however, the result may be
a long int value. The QuickC compiler gives the correct result when a type
cast like the following is used:

    (long)(huge_ptr1 - huge_ptr2)


B.3  Using the _near, _far, and _huge Keywords

One limitation of the predefined memory-model structure is that when you
change memory models, all data and code address sizes are subject to change.
The QuickC compiler, however, lets you override the default addressing
convention for a given memory model and access items with a near, far, or
huge pointer. This is done with the _near, _far, and _huge keywords. These
special type

modifiers can be used with a standard memory model to overcome addressing
limitations for particular data or code items, or to optimize access to
these items without changing the addressing conventions for the program as a
whole. Table B.1 explains how the use of these keywords affects the
addressing of code or data, or pointers to code or data.

Table B.1  Addressing of Code and Data Declared with _near and

╓┌────────┌──────────────────────────┌──────────────────────────┌────────────╖
Keyword  Pointer Data               Function                   Arithmetic
────────────────────────────────────────────────────────────────────────────
_near    Resides in default data    Assumed to be in current   16 bits
            segment; referenced with   code segment; referenced
            16-bit addresses           with 16-bit addresses
            (pointers to data are 16   (pointers to functions
            bits)                      are 16 bits)

_far     May be anywhere in         Not assumed to be in       16 bits
            memory─not assumed to      current code segment;
            reside in current data     referenced with 32-bit
            segment; referenced with   address (pointers to
            32-bit addresses           functions are 32 bits)
            (pointers to data are 32
            bits)

Keyword  Pointer Data               Function                   Arithmetic
────────────────────────────────────────────────────────────────────────────

_huge    May be anywhere in         Not applicable to code     32 bits
            memory─not assumed to
            reside in current data
            segment; individual data
            items (arrays) can exceed
            64K in size; referenced
            with 32-bit addresses
            (pointers to data are 32
            bits)

────────────────────────────────────────────────────────────────────────────



────────────────────────────────────────────────────────────────────────────
NOTE
The _near, _far, and _huge keywords are not a standard part of the C
language; they are meaningful only for systems that use a segmented
architecture similar to that of the 8086 microprocessors. Keep this in mind
if you want your code to be ported to other systems.
────────────────────────────────────────────────────────────────────────────

In the Microsoft QuickC compiler, the words _near, _far, and _huge are C
keywords by default. To treat these keywords as ordinary identifiers, you
must do one of the following:


    ■   For programs compiled within the QuickC environment, compile with the
        MS Extensions option turned off.

    ■   For programs compiled with the QCL command, give the /Za option at
        compile time.


These options are useful if you are compiling programs with compilers in
which _near, _far, and _huge are not keywords─for instance, if you are
porting a program in which one of these words is used as a label.


B.3.1  Library Support for _near, _far, and _huge

When using the _near, _far, and _huge keywords to modify addressing
conventions for particular items, you can usually use one of the standard
libraries (tiny, small, compact, medium, large, or huge) with your program.
The large-model libraries are also appropriate for use with huge-model
programs. However, you must use care when calling library routines. In
general, you cannot pass far pointers, or the addresses of far data items,
to a small-model library routine. (Some exceptions to this statement are the
library routines halloc and hfree, and the printf family of functions.) Of
course, you can always pass the value of a far item to a small-model library
routine, as shown in the following example:

    long _far time_val;

    time(&time_val);  /* Illegal */
    printf("%ld\n", time_val); /* Legal */

If you use the _near, _far, or _huge keyword, it is strongly recommended
that you use function prototypes with argument-type lists to ensure that all
pointer arguments are passed to functions correctly (see Section B.3.4).


B.3.2  Declaring Data with _near, _far, and _huge

The _near, _far, and _huge keywords modify either objects or pointers to
objects. When using them to declare data or code (or pointers to data or
code), keep the following rules in mind:


    ■   The keyword always modifies the object or pointer immediately to its
        right. In complex declarators, think of the _far keyword and the item
        immediately to its right as being a single unit. For example, in the
        declarator

        char _far* *p;


        p  is a pointer (whose size depends on the memory model specified) to
        a far pointer to char.

    ■   If the item immediately to the right of the keyword is an identifier,
        the keyword determines whether the item will be allocated in the
        default data segment ( _near) or a separate data segment ( _far or
        _huge). For example,

        char _near a;


        allocates  a  as an item of type char with a near address.

    ■   If the item immediately to the right of the keyword is a pointer, the
        keyword determines whether the pointer will hold a near address (16
        bits), a far address (32 bits), or a huge address (also 32 bits). For
        example,

        char _far *p;


        allocates  p  as a far pointer (32 bits) to an item of type char.



Examples

The examples in this section show data declarations using the _near, _far,
and _huge keywords.

    char a[3000];    /* small-model program */
    char _far b[30000];

The first declaration in the example above allocates the array  a  in the
default data segment. By contrast, the array  b  in the second declaration
may be allocated in any far data segment. Since these declarations appear in
a small-model program, array  a  probably represents frequently used data
that were deliberately placed in the default segment for fast access. Array
b  probably represents seldom used data that might make the default data
segment exceed 64K and force the programmer to use a larger memory model if
the array were not declared with the _far keyword. The second declaration
uses a large array because it is more likely that a programmer would want to
specify the address-allocation size for items of substantial size.

    char a[3000];    /* large-model program */
    char _near b[3000];

In the example above, access speed would probably not be critical for array
a. Even though it may or may not be allocated within the default data
segment, it is always referenced with a 32-bit address. Array  b  is
explicitly allocated within the default data segment to improve speed of
access in this memory model (large).

    char _huge a[100000];  /* illegal in QuickC */
    extern char huge a[];

Both declarations in the example above are illegal. QuickC does not support
static huge data.

    char _huge *hp;   /* small-model program */

    hp = halloc(100000,1);
    hp[0] = 'a';

In the small-model program above,  hp  is declared as a pointer to huge
data. Any pointer arithmetic for  hp  (such as  hp++) would be performed
using 32-bit arithmetic. You can simulate a huge array through the pointer
hp  by using the huge data allocation function halloc.

    char *pa;    /* small-model program */
    char _far *pb;

The pointer  pa  is declared as a near pointer to an item of type char in
the example above. The pointer is near by default since the example appears
in a small-model program. By contrast,  pb  is allocated as a far pointer to
an item of type char;  pb  could be used to point to, and step through, an
array of characters stored in a segment other than the default data segment.
For example,  pa  might be used to point to array  a  in the first example,
while  pb  might be used to point to array  b.

    char _far * *pa;    /* small-model program */
    char _far * *pa;    /* large-model program */

The pointer declarations in the example above illustrate the interaction
between the memory model chosen and the _near, _far, and _huge keywords.
Although the declarations for  pa  are identical, in a small-model program
pa  is declared as a near pointer to an array of far pointers to type char,
while in a large-model program,  pa  is declared as a far pointer to an
array of far pointers to type char.

    char _far * _near *pb;   /* any model */
    char _far * _far *pb;

In the first declaration in this final example,  pb  is declared as a near
pointer to an array of far pointers to type char; in the second declaration,
    pb  is declared as a far pointer to an array of far pointers to type char.
Note that, in this example, the _far and _near keywords override the
model-specific addressing conventions shown in the fifth example; the
declarations for  pb  would have the same effect, regardless of the memory
model.


B.3.3  Declaring Functions with the _near and _far Keywords

The rules for using the _near, _far, and _huge keywords for functions are
similar to those for using them with data, as listed below:


    ■   The keyword always modifies the function or pointer immediately to its
        right. See Chapter 2, "Functions," of C for Yourself, for more
        information about rules for evaluating complex declarations.

    ■   If the item immediately to the right of the keyword is a function,
        then the keyword determines whether the function will be allocated as
        near or far. For example,

        char _far fun( );


        defines  fun  as a function called with a 32-bit address and returning
        type char.

    ■   If the item immediately to the right of the keyword is a pointer to a
        function, then the keyword determines whether the function will be
        called using a near (16-bit) or far (32-bit) address. For example,

        char (_far * pfun)( );


        defines  pfun  as a far pointer (32 bits) to a function returning type
        char.

    ■   Function declarations must match function definitions.

    ■   The _huge keyword cannot be applied to functions.



Examples

    void char _far fun(void);            /* small model */
    void char _far fun(void)
            {
            .
            .
            .
            }

In the example above,  fun  is declared as a function returning type char.
The _far keyword in the declaration means that  fun  must be called with a
32-bit call.

    static char _far * _near fun( );      /* large model */
    static char _far * _near fun( )
            {
            .
            .
            .
            }

In the large-model example above,  fun  is declared as a near function that
returns a far pointer to type char. Such a function might be seen in a
large-model program as a helper routine that is used frequently, but only by
the routines in its own module. Because all routines in a given module share
the same code segment, the function could always be accessed with a near
call. However, you could not pass a pointer to  fun  as an argument to
another function outside the module in which  fun  was declared.

    void _far *fun(void);               /* small model */
    void (_far * pfun) ( ) = fun;

The small-model example above declares  pfun  as a far pointer to a function
that has return type void, and then assigns the address of  fun  to  pfun.
In fact, pfun  could be used to point to any function accessed with a far
call. Note that if the function pointed to by  pfun  has not been declared
with the _far keyword, or if it is not far by default, then calling that
function through  pfun  would cause the program to fail.

    double _far * (_far fun)( );      /* compact model */
    double _far * (_far *pfun)( ) = fun;

The final example above declares  pfun  as a far pointer to a function that
returns a far pointer to type double, and then assigns the address of  fun
to  pfun. This might be used in a compact-model program for a function that
is not used frequently and thus does not need to be in the default code
segment. Both the function and the pointer to the function must be declared
with the _far keyword.


B.3.4  Pointer Conversions

Passing pointers as arguments to functions may cause automatic conversions
in the size of the pointer argument because passing a pointer to a function
forces the pointer size to the larger of the following two sizes:


    1.  The default pointer size for that type, as defined by the memory model
        used during compilation.

        For example, in medium-model programs, data pointer arguments are near
        by default and code pointer arguments are far by default.

    2.  The type of the argument.


If a function prototype with argument types is given, the compiler performs
type checking and enforces the conversion of actual arguments to the
declared type of the corresponding formal argument. However, if no
declaration is present or the argument-type list is empty, the compiler
converts pointer arguments automatically to either the default type or the
type of the argument, whichever is largest. To avoid mismatched arguments,
you should always use a prototype with the argument types.


Examples

    /* This program produces unexpected results in compact-,
    ** large-, or huge-model programs.
    */

    main( )

    {
    int _near *x;
    char _far *y;
    int z = 1;

    test_fun(x, y, z);   /*x coerced to far pointer*/

    }

    int test_fun(ptr1, ptr2, a)
    int _near *ptr1;
    char _far *ptr2;
    int a;

    {
    printf("Value of a = %d\n", a);
    }

If the preceding example is compiled as a small-model program (default for
QCL) or medium-model program (with the /AM option on the QCL command line),
the size of pointer argument  x  is 16 bits, the size of pointer argument  y
    is 32 bits, and the value printed for  a  is 1. However, if the preceding
example is compiled with the /AC, /AL, or /AH option, both  x  and  y  are
automatically converted to far pointers when they are passed to  test_fun.
Because  ptr1, the first parameter of  test_fun, is defined as a
near-pointer argument, it takes only 16 bits of the 32 bits passed to it.

The next parameter,  ptr2, takes the remaining 16 bits passed to  ptr1, plus
16 bits of the 32 bits passed to it. Finally, the third parameter,  a, takes
the leftover 16 bits from  ptr2, instead of the value of  z  in the  main
function. This shifting process does not generate an error message because
both the function call and the function definition are legal; in this case,
the program does not work as intended because the value assigned to  a  is
not the value intended.

To pass  ptr1  as a near pointer, you should include a forward declaration
that specifically declares this argument for  test_fun  as a near pointer,
as shown below:

    /* First, declare test_fun so the compiler knows in advance
    ** about the near pointer argument:
    */
    int test_fun(int _near*, char _far *, int);


    main( )

    {
    int _near *x;
    char _far *y;
    int z = 1;

    test_fun(x, y, z);   /* now, x will not be coerced
            ** to a far pointer; it will be
            ** passed as a near pointer,
            ** no matter what memory
            ** model is used
            */
    }

    int test_fun(ptr1, ptr2, a)
    int _near *ptr1;
    char _far *ptr2;
    int a;

    {
    printf("Value of a = %d\n", a);
    }

Note that it would not be sufficient to reverse the definition order for
test_fun  and  main  in the first example to avoid pointer coercions; the
pointer arguments must be declared in a forward declaration, as in the
second example.






Appendix C  Hardware-Specific Utilities
────────────────────────────────────────────────────────────────────────────

This appendix describes three utility programs provided with the Microsoft
QuickC Compiler. These utilities support special hardware that some QuickC
users may have. The utilities are


    ■   The FIXSHIFT utility, which fixes a bug associated with some COMPAQ(R)
        and compatible keyboards

    ■   The MSHERC driver, which supports the Hercules display adapter

    ■   The MOUSE driver, which supports the Microsoft mouse



C.1  Fixing Keyboard Problems with FIXSHIFT

On the keyboards of some COMPAQ and compatible computers, the arrow keys are
not part of the numeric keypad. Because of a bug in the ROM BIOS, the QuickC
editor (and other software not supplied by Microsoft) may not operate
correctly on these machines. The FIXSHIFT utility fixes this bug.

To correct the problem, copy FIXSHIFT.COM to the directory that contains the
QuickC program files, and type the following command:

    fixshift

Any combination of uppercase and lowercase letters is acceptable for this
command. When FIXSHIFT executes, it first prompts you to press the DOWN key
to ascertain whether the BIOS has the bug. If not, FIXSHIFT displays a
message telling you so, then exits. You need not run FIXSHIFT again. If your
machine's BIOS has the bug, FIXSHIFT displays additional prompts that guide
you through the appropriate actions.

FIXSHIFT requires approximately 450 bytes of memory. It fixes only the BIOS
bug and has no effect on other programs that you run. You can include the
FIXSHIFT command in your AUTOEXEC.BAT file to correct the problem each time
you start the computer.


C.2  Using Hercules Graphics

This section briefly summarizes the support that Microsoft QuickC provides
for the Hercules display adapter. For more information, see your Hercules
documentation. Note that the graphics demonstration program GRDEMO.C
supports Hercules graphics.


C.2.1  Support for Cards and Display Characteristics

QuickC supports the Hercules Graphics Card, Graphics Card Plus, InColor
Card, and other cards that are 100 percent compatible.

Only monochrome text and graphics are supported. In monochrome, the screen
resolution is 720 x 348 pixels. The character box is 9 x 14 pixels. Text
dimensions are 80 columns by 25 rows, but the bottom two scan lines of the
25th row are not visible.


C.2.2  The MSHERC Driver

MSHERC.COM is the driver for Hercules graphics. You must load the driver
before running programs that use Hercules graphics. To load the driver, type
the following command:

    MSHERC

To load the driver when you start the machine, put the MSHERC command in
your AUTOEXEC.BAT file.

If you have both a Hercules monochrome card and a color video card, you
should invoke MSHERC.COM with the /H (/HALF) option, as follows:

    MSHERC /H

The /H option causes the driver to use one instead of two graphics pages.
This prevents the two video cards from trying to use the same area of
memory. You need not use the /H option if you have only a Hercules card.

If you are developing a commercial application that uses graphics, you
should include MSHERC.COM with your product; you are free to include this
file without an explicit licensing agreement.

────────────────────────────────────────────────────────────────────────────
NOTE

MSHERC.COM is identical to QBHERC.COM, the Hercules driver shipped with
Microsoft QuickBASIC version 4.0, and the Microsoft BASIC Compiler version
6.0.
────────────────────────────────────────────────────────────────────────────


C.2.3  Using a Mouse

To use a mouse with the Hercules adapter, follow the special instructions
for Hercules cards in the Microsoft Mouse Programmer's Reference Guide.
(This manual must be ordered separately; it is not supplied with either
Microsoft QuickC or the Microsoft Mouse package.)


C.2.4  Setting Hercules Graphics Mode

The graphics include file GRAPH.H sets manifest constants needed for
Hercules graphics operation. In GRAPH.H, the constant _HERCMONO sets the
video mode to 720 x 348 pixels in monochrome. GRAPH.H also includes the
constant _HGC in the section labeled "videoconfig adapter values."


C.3  The Mouse Driver

The Microsoft Mouse is optional software and is not required for QuickC. If
you use the mouse, however, you must have version 6.10 or later of the
MOUSE.COM driver; otherwise, QuickC will not operate correctly. If you have
an earlier release, you need to use the MOUSE.COM driver provided with
QuickC. See your Microsoft Mouse manual for installation instructions. If
you update the driver, be sure to delete any outdated MOUSE.SYS drivers from
your CONFIG.SYS file.




2094



Appendix D  Error Messages
────────────────────────────────────────────────────────────────────────────

This appendix lists error messages you may encounter as you develop a
program and gives a brief description of actions you can take to correct the
errors. The following list tells where to find error messages for the
various components of the Microsoft QuickC Compiler:

Component                         Section
────────────────────────────────────────────────────────────────────────────
The Microsoft QuickC Compiler     "Compiler Errors"

The command line used to invoke   "Command-Line Errors"
the Microsoft QuickC Compiler

The Microsoft C                   "Run-Time Errors"
run-time libraries
and other run-time situations

The Microsoft QuickC linker,      "QLINK Error Messages"
QLINK

The Microsoft Library Manager,    "LIB Error Messages"
LIB

The Microsoft                     "NMAKE Error Messages"
Program-Maintenance Utility,
NMAKE

Note that the compiler, command-line, and run-time error messages are listed
alphabetically by category in this appendix.

See "Compiler Limits" in the "Compiler Errors" section for information about
compiler limits; see "Run-Time Limits" in the "Run-Time Errors" section for
information about run-time limits.


D.1  Compiler Errors

The error messages produced by the QuickC Compiler fall into three
categories:


    1.  Fatal error messages

    2.  Compilation error messages

    3.  Warning messages


The messages for each category are listed below in numerical order, with a
brief explanation of each error. To look up an error message, first
determine the message category, then find the error number. Each message
that is generated within the QuickC environment appears in the error window;
QuickC moves the cursor to the line that caused the error. Each message
generated by compiling with the QCL command gives the file name and line
number where the error occurs.


Fatal Error Messages

Fatal error messages indicate a severe problem, one that prevents the
compiler from processing your program any further. These messages have the
following format:

filename(line) : fatal error C1xxx : messagetext

After the compiler displays a fatal error message, it terminates without
producing an object file or checking for further errors.


Compilation Error Messages

Compilation error messages identify actual program errors. These messages
appear in the following format:

filename(line) : error C2xxx : messagetext

The compiler does not produce an object file for a source file that has
compilation errors in the program. When the compiler encounters such errors,
it attempts to recover from the error. If possible, it continues to process
the source file and produce error messages. If errors are too numerous or
too severe, the compiler stops processing.


Warning Messages

Warning messages are informational only; they do not prevent compilation or
linking. These messages appear in the following format:

filename(line) : warning C4xxx : messagetext

You can use the /W option to control the level of warnings that the compiler
generates.


D.1.1  Fatal Error Messages

The following messages identify fatal errors. The compiler cannot recover
from a fatal error; it terminates after displaying the error message.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
C1000                             UNKNOWN FATAL ERROR Contact Microsoft
                                    Product Support Services

                                    An unknown error condition was detected
                                    by the compiler.

                                    Note the circumstances of the error and
                                    notify Microsoft Corporation by
                                    following the instructions in the
                                    Microsoft Product Assistance Request
                                    form at the back of C for Yourself,
                                    included in the QuickC version 2.5
                                    package.

C1001                             Internal Compiler Error (compiler file '
                                    filename', line n) Contact Microsoft
                                    Product Support Services

                                    The compiler detected an internal
                                    inconsistency.

                                    Note the circumstances of the error and
                                    notify Microsoft Corporation by
                                    following the instructions in the
                                    Microsoft Product Assistance Request
                                    form at the back of C for Yourself,
                                    included in the QuickC version 2.5
                                    package. Note the file name and line
                                    number where the error occurred; an
                                    internal file and line number are
                                    provided in addition to the file and
                                    line number of your source file.

C1002                             compiler is out of heap space in Pass 2

                                    The compiler ran out of dynamic memory
                                    space. Usually this means the program
                                    has too many symbols and/or complex
                                    expressions.

                                    One of the following may be a solution:

                                    ■ Divide the file into several smaller
                                    source files.

                                    ■ Break expressions into smaller
                                    subexpressions.

                                    ■ Remove other programs or drivers
                                    running in the system which could be
                                    consuming significant amounts of memory.

                                    ■ Compile without using NMAKE.

C1003                             error count exceeds n; stopping
                                    compilation

                                    Errors in the program were too numerous
                                    or too severe to allow recovery, and the
                                    compiler must terminate.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
C1004                             unexpected end-of-file found

                                    The default disk drive did not contain
                                    sufficient space for the compiler to
                                    create temporary files. The space
                                    required is approximately two times the
                                    size of the source file.

                                    This message also appears when the #if
                                    directive occurs without a corresponding
                                    closing #endif directive while the #if
                                    test directs the compiler to skip the
                                    section.

C1005                             string too big for buffer

                                    A string in a compiler intermediate file
                                    overflowed a buffer.

C1006                             write error on compiler intermediate
                                    file

                                    The compiler was unable to create the
                                    intermediate files used in the
                                    compilation process.

C1007                             unrecognized flag 'string' in 'option'

                                    The string in the command-line option
                                    was not a valid option.

C1008                             no input file specified

                                    The compiler was not given a file to
                                    compile.

C1009                             compiler limit : macros nested too
                                    deeply

                                    Too many macros were being expanded at
                                    the same time.

                                    This error occurs when a macro
                                    definition contains macros to be
                                    expanded and those macros contain other
                                    macros.

                                    Try splitting the nested macros into
                                    simpler macros.

C1010                             compiler limit : macro expansion too big

                                    The expansion of a macro exceeded the
                                    available space.

                                    Produce a preprocessor listing using the
                                    /P option and check to see if the
                                    expanded text is too large.

                                    Try to split up the macros into simpler
                                    macros, or to remove nonessential space
                                    and tab characters from macro
                                    definitions used in the expansion.

C1011                             compiler limit : 'identifier' : macro
                                    definition too big

                                    The macro definition was longer than
                                    allowed.

                                    Split the definition into shorter
                                    definitions.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
C1012                             unmatched parenthesis nesting - missing
                                    'character'

                                    The parentheses in a preprocessor
                                    directive were not matched. The missing
                                    character is either a left or right
                                    parenthesis.

C1014                             too many include files

                                    Nesting of #include directives exceeded
                                    the 10-level limit.

                                    Up to 10 open files may be included by
                                    the use of nested directives. The .C
                                    file containing the directive is counted
                                    as one of the files.

C1016                             #if[n]def expected an identifier

                                    An identifier must be specified with the
                                    #ifdef and #ifndef directives.

C1017                             invalid integer constant expression

                                    The expression in an #if directive
                                    either did not exist or did not evaluate
                                    to a constant.

C1018                             unexpected '#elif'

                                    The #elif directive is legal only when
                                    it appears within an #if, #ifdef, or
                                    #ifndef construct.

C1019                             unexpected '#else'

                                    The #else directive is legal only when
                                    it appears within an #if, #ifdef, or
                                    #ifndef construct.

C1020                             unexpected '#endif'

                                    An #endif directive appeared without a
                                    matching #if, #ifdef, or #ifndef
                                    directive.

C1021                             invalid preprocessor command 'string'

                                    The characters following the number sign
                                    (#) did not form a valid preprocessor
                                    directive.

C1022                             expected '#endif'

                                    An #if, #ifdef, or #ifndef directive was
                                    not terminated with an #endif directive.

C1023                             cannot open source file 'filename'

                                    The given file either did not exist,
                                    could not be opened, or was not found.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
C1023                             (continued)

                                    Make sure the environment settings are
                                    valid and that the correct path name for
                                    the file is specified.

                                    If this error appears without an error
                                    message, the compiler has run out of
                                    file handles. Increase the number of
                                    file handles by changing the FILES
                                    setting in CONFIG.SYS to allow a larger
                                    number of open files. FILES=20 is the
                                    recommended setting.

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
                                    file handles. Increase the number of
                                    file handles by changing the FILES
                                    setting in CONFIG.SYS to allow a larger
                                    number of open files. FILES=20 is the
                                    recommended setting.

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
                                    into separate segments. In tiny-, small-
                                    or medium-model programs, consider
                                    explicitly allocating some variables
                                    outside of DGROUP by using _based or
                                    _far.

C1028                             'segment' : segment allocation exceeds
                                    64K

                                    More than 64K of far data were allocated
                                    to the given segment. A single module
                                    can have only 64K of far data.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
C1028                             (continued)

                                    There are several ways to correct this
                                    situation:

                                    ■ Break the declarations into separate
                                    modules.

                                    ■ Reduce the amount of data used by the
                                    program.

                                    ■ Compile the program with the Microsoft
                                    C Optimizing Compiler.

C1031                             compiler limit : function calls nested
                                    too deeply

                                    The program exceeded the dynamic
                                    compiler limit on nested function calls.
                                    Split the nested call, saving the return
                                    value from one of the nested functions
                                    in a temporary variable.

C1032                             cannot open object listing file '
                                    filename'

                                    There are several possible causes for
                                    this error:

                                    ■ The given name is not valid.

                                    ■ The file cannot be opened for lack of
                                    space.

                                    ■ A read-only file with the given name
                                    already exists.

C1033                             cannot open assembly language output
                                    file 'filename'

                                    There are several possible causes for
                                    this error:

                                    ■ The given name is not valid.

                                    ■ The file cannot be opened for lack of
                                    space.

                                    ■ A read-only file with the given name
                                    already exists.

C1035                             expression too complex, please simplify

                                    The compiler was unable to generate code
                                    for a complex expression. Break the
                                    expression into simpler subexpressions
                                    and recompile.

C1036                             cannot open source listing file '
                                    filename'

                                    There are several possible causes for
                                    this error:

                                    ■ The given name is not valid.

                                    ■ The file cannot be opened for lack of
                                    space.

                                    ■ A read-only file with the given name
                                    already exists.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
C1037                             cannot open object file 'filename'

                                    There are several possible causes for
                                    this error:

                                    ■ The given name is not valid.

                                    ■ The file cannot be opened for lack of
                                    space.

                                    ■ A read-only file with the given name
                                    already exists.

C1039                             unrecoverable heap overflow in Pass 3

                                    The post-optimizer compiler pass
                                    overflowed the heap and could not
                                    continue.

                                    One of the following may be a solution:

                                    ■ Break up the function containing the
                                    line that caused the error.

                                    ■ Recompile with the /Od option,
                                    removing optimization.

                                    ■ Remove other programs or drivers
                                    running in the system which could be
                                    consuming significant amounts of memory.

                                    ■ Compile without using NMAKE.

C1040                             unexpected end-of-file in source file '
                                    filename'

                                    The compiler detected an unexpected
                                    end-of-file condition while creating a
                                    source listing or mingled source/object
                                    listing.

C1041                             cannot open compiler intermediate file -
                                    no more files

                                    The compiler could not create
                                    intermediate files for use in the
                                    compilation process because no more file
                                    handles were available.

                                    Increase the number of file handles by
                                    changing the FILES setting in your
                                    CONFIG.SYS file to allow a larger number
                                    of open files. FILES=20 is the
                                    recommended setting.

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

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
C1043                             (continued)

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

C1045                             floating point overflow

                                    The compiler generated a floating-point
                                    exception while doing constant
                                    arithmetic on floating-point items at
                                    compile time, as in the following
                                    example:

                                    float fp_val = 1.0e100;

                                    In this example, the double-precision
                                    constant  1.0e100  exceeds the maximum
                                    allowable value for a floating-point
                                    data item.

C1047                             limit of 'option' exceeded at 'string'

                                    The given option was specified too many
                                    times. The given string is the argument
                                    to the option that caused the error.

                                    If the environment variable CL has been
                                    set, options in the CL variable are read
                                    before options specified on the command
                                    line.

C1048                             unknown option 'character' in 'option'

                                    The given character was not a valid
                                    letter for the option.

                                    For example, the line

                                    #pragma optimize("z", on)

                                    causes the following error:

                                    unknown option 'z' in '#pragma optimize'

C1049                             invalid numerical argument 'string'

                                    A numerical argument was expected
                                    instead of the given string.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
C1050                             'segment' : code segment too large

                                    A code segment grew to within 36 bytes
                                    of 64K during compilation.

                                    A 36-byte pad is used because of a bug
                                    in some 80286 chips that can cause
                                    programs to exhibit unusual behavior
                                    when, among other conditions, the size
                                    of a code segment is within 36 bytes of
                                    64K.

C1052                             compiler limit : #if/#ifdef nested too
                                    deeply

                                    The program exceeded the maximum of 32
                                    nesting levels for #if and #ifdef
                                    directives.

C1053                             compiler limit : struct/union nested too
                                    deeply

                                    A structure or union definition was
                                    nested to more than 15 levels.

                                    Break the structure or union into two
                                    parts by defining one or more of the
                                    nested structures using typedef.

C1054                             compiler limit : initializers nested too
                                    deeply

                                    The compiler limit on the nesting of
                                    initializers was exceeded. The limit
                                    depends on the combination of types
                                    being initialized and may range from 10
                                    to 15 levels.

                                    Simplify the data type being initialized
                                    to reduce the levels of nesting, or
                                    assign initial values in separate
                                    statements after the declaration.

C1055                             compiler limit : out of keys

                                    The file being compiled contained too
                                    many symbols.

                                    Try to separate it into two files that
                                    can be compiled independently.

C1056                             compiler limit : out of macro expansion
                                    space

                                    The compiler overflowed an internal
                                    buffer during the expansion of a macro.

                                    Simplify the macro and/or shorten its
                                    text.

C1057                             unexpected end-of-file in macro
                                    expansion (missing ')'?)

                                    The compiler has encountered the end of
                                    the source file while gathering the
                                    arguments of a macro invocation. Usually
                                    this is the result of a missing closing
                                    parenthesis on the macro invocation.

C1059                             compiler is out of near heap space

                                    The compiler ran out of storage for
                                    items that it stores in the "near"
                                    (default data segment) heap.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
C1059                             (continued)

                                    One of the following may be a solution:

                                    ■ Eliminate unnecessary include files,
                                    especially unneeded function prototypes.

                                    ■ Split the function existing at the
                                    given line number into two or more
                                    functions.

                                    ■ Split the current file into two or
                                    more files and  compile them separately.

C1060                             compiler is out of far heap space

                                    The compiler ran out of storage for
                                    items that it stores in the far heap.
                                    Usually this is the result of having too
                                    many symbols.

                                    One of the following may be a solution:

                                    ■ Eliminate unnecessary include files,
                                    especially unneeded #define directives
                                    and function prototypes.

                                    ■ Eliminate some global variables.

                                    ■ Split the current file into two or
                                    more files and compile them separately.

                                    ■ Remove other programs or drivers
                                    running in the system which could be
                                    consuming significant amounts of memory.

C1061                             compiler limit : blocks nested too
                                    deeply

                                    Nested blocks in the program exceeded
                                    the nesting limit allowed by the
                                    compiler.

                                    Rewrite the program, putting one or more
                                    nested blocks into a separate function.

C1062                             error writing to preprocessor output
                                    file

                                    The compilation command included the /P
                                    option to produce a preprocessor output
                                    file, but not enough room was available
                                    to hold the file.

C1063                             compiler limit : compiler stack overflow

                                    The program was too complex and caused
                                    the compiler stack to overflow.

                                    Simplify the program, making it more
                                    modular, and recompile.

C1064                             compiler limit : token overflowed
                                    internal buffer

                                    The compiler read an identifier that is
                                    longer than the internal buffer used for
                                    identifier names.

                                    Shorten the name and recompile.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
C1068                             cannot open file 'filename'

                                    The compiler cannot open the given file.

                                    There are several possible causes for
                                    this error:

                                    ■ The file does not exist.

                                    ■ The file is marked read-only.

                                    ■ Not enough file handles exist.

C1069                             write error on file 'filename'

                                    An error occurred while the compiler
                                    tried to write to the file. One possible
                                    cause of this error is insufficient disk
                                    space.

C1070                             mismatched #if/#endif pair in file '
                                    filename'

                                    The preprocessor found the #if, #ifdef,
                                    or #ifndef directive, but did not find a
                                    corresponding #endif directive in the
                                    same source file.

C1071                             unexpected end-of-file found in comment

                                    The compiler found the end of a file
                                    while scanning a comment.

                                    Probably a comment was not terminated.
                                    Start at the end of the file and search
                                    backward for the beginning of a comment.
                                    A comment begins with  /*  and ends with
                                    */, as in

                                    /* This is a comment */

                                    A comment cannot be split across files.

C1072                             'filename' : cannot read file

                                    The compiler encountered an error when
                                    trying to read a file.

                                    Check the file-access attributes and be
                                    sure the disk does not have a bad sector.

C1090                             'segment' : data allocation exceeds 64K

                                    The size of the named segment exceeds
                                    64K.

                                    This error occurs with _based allocation.

C1126                             'identifier' : automatic allocation
                                    exceeds 'size'

                                    The space allocated for the local
                                    variables of a function exceeded the
                                    given limit.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
C1127                             'segment' : segment redefinition

                                    A segment was overwritten by another
                                    with the same name.

                                    For example, compiling in large model
                                    with

                                    #pragma alloc_text("TEXT", func1)

                                    creates two segments, the default
                                    segment  module_TEXT  and the specified
                                    segment  _TEXT. However, in small model,
                                    the default segment is  _TEXT, and the
                                    specified segment  _TEXT  will overwrite
                                    the default segment.


D.1.2  Compilation Error Messages

The messages listed below indicate that your program has errors. When the
compiler encounters any of the errors listed in this section, it continues
parsing the program (if possible) and outputs additional error messages.
However, no object file is produced.

Number                            Compilation Error Message
────────────────────────────────────────────────────────────────────────────
C2000                             UNKNOWN ERROR Contact Microsoft Product
                                    Support Services

                                    The compiler detected an unknown error
                                    condition.

                                    Note the circumstances of the error and
                                    notify Microsoft Corporation by
                                    following the instructions in the
                                    Microsoft Product Assistance Request
                                    form at the back of C for Yourself,
                                    included in the QuickC version 2.5
                                    package.

C2001                             newline in constant

                                    A string constant was continued onto a
                                    second line without either a backslash
                                    or closing and opening quotes.

                                    To break a string constant onto two
                                    lines in the source file:

                                    ■ End the first line with the
                                    line-continuation character, a backslash
                                    (\ ).

or

                                    ■ Close the string on the first line
                                    with a double quotation mark, and open
                                    the string on the next line with another
                                    quotation mark.

                                    It is not sufficient to end the first
                                    line with \n, the escape sequence for
                                    embedding a newline character in a
                                    string constant.

Number                            Compilation Error Message
────────────────────────────────────────────────────────────────────────────
C2001                             (continued)

                                    The following two examples demonstrate
                                    causes of this error:

                                    printf("Hello,
                                    world");

                                    or

                                    printf("Hello,\n
                                    world");

                                    The following two examples show ways to
                                    correct this error:

                                    printf("Hello,\
                                    world");

                                    or

                                    printf("Hello,"
                                    " world");

                                    Note that any spaces at the beginning of
                                    the next line after a line-continuation
                                    character are included in the string
                                    constant. Note, also, that neither
                                    solution actually places a newline
                                    character into the string constant. To
                                    embed this character:

                                    printf("Hello,\n\
                                    world");

                                    or

                                    printf("Hello,\
                                    \nworld");

                                    or

                                    printf("Hello,\n"
                                        "world");

                                    or

                                    printf("Hello,"
                                    "\nworld");

C2003                             expected 'defined id'

                                    An identifier was expected after the
                                    preprocessor operator defined.

C2004                             expected 'defined(id)'

                                    An identifier was expected after the
                                    left parenthesis following the
                                    preprocessor operator defined.

Number                            Compilation Error Message
────────────────────────────────────────────────────────────────────────────
C2005                             #line expected a line number, found '
                                    token'

                                    A #line directive lacked the required
                                    line-number specification.

C2006                             #include expected a file name, found '
                                    token'

                                    An #include directive lacked the
                                    required file-name specification.

C2007                             #define syntax

                                    An identifier was expected following
                                    #define in a preprocessing directive.

C2008                             'character' : unexpected in macro
                                    definition

                                    The given character was found
                                    immediately following the name of the
                                    macro.

C2009                             reuse of macro formal 'identifier'

                                    The given identifier was used more than
                                    once in the formal-parameter list of a
                                    macro definition.

C2010                             'character' : unexpected in macro
                                    formal-parameter list

                                    The given character was used incorrectly
                                    in the formal-parameter list of a macro
                                    definition.

C2012                             missing name following '<'

                                    An #include directive lacked the
                                    required file-name specification.

C2013                             missing '>'

                                    The closing angle bracket (>) was
                                    missing from an #include directive.

C2014                             preprocessor command must start as first
                                    non-white-space

                                    Non-white-space characters appeared
                                    before the number sign (#) of a
                                    preprocessor directive on the same line.

C2015                             too many characters in constant

                                    A character constant contained more than
                                    one character.

                                    Note that an escape sequence (for
                                    example, \t for tab) is converted to a
                                    single character.

C2016                             no closing single quotation mark

                                    A newline character was found before the
                                    closing single quotation mark of a
                                    character constant.

Number                            Compilation Error Message
────────────────────────────────────────────────────────────────────────────
C2017                             illegal escape sequence

                                    An escape sequence appeared where one
                                    was not expected.

                                    An escape sequence (a backslash (\)
                                    followed by a number or letter) may
                                    occur only in a character or string
                                    constant.

C2018                             unknown character 'hexnumber'

                                    The ASCII character corresponding to the
                                    given hexadecimal number appeared in the
                                    source file but is an illegal character.

                                    One possible cause of this error is
                                    corruption of the source file. Edit the
                                    file and look at the line on which the
                                    error occurred.

C2019                             expected preprocessor directive, found '
                                    character'

                                    The given character followed a number
                                    sign (#), but it was not the first
                                    letter of a preprocessor directive.

C2021                             expected exponent value, not 'character'

                                    The given character was used as the
                                    exponent of a floating-point constant
                                    but was not a valid number.

C2022                             'number' : too big for character

                                    The octal number following a backslash
                                    (\) in a character or string constant
                                    was too large to be represented as a
                                    character.

C2025                             'identifier' : enum/struct/union type
                                    redefinition

                                    The given identifier had already been
                                    used for an enumeration, structure, or
                                    union tag.

C2026                             'identifier' : member of enum
                                    redefinition

                                    The given identifier has already been
                                    used for an enumeration constant, either
                                    within the same enumeration type or
                                    within another visible enumeration type.

C2027                             use of undefined enum/struct/union '
                                    identifier'

                                    The given identifier referred to a
                                    structure or union type that was not
                                    defined.

C2028                             struct/union member needs to be inside a
                                    struct/union

                                    Structure and union members must be
                                    declared within the structure or union.

Number                            Compilation Error Message
────────────────────────────────────────────────────────────────────────────
C2028                             (continued)

                                    This error may be caused by an
                                    enumeration declaration containing a
                                    declaration of a structure member, as in
                                    the following example:

                                    enum a {
                                            january,
                                            february,
                                            int march;    /* Illegal
                                    structure declaration */
                                            };

C2030                             'identifier' : struct/union member
                                    redefinition

                                    The identifier was used for more than
                                    one member of the same structure or
                                    union.

C2031                             'identifier' : function cannot be
                                    struct/union member

                                    The given function was declared to be a
                                    member of a structure or union.

                                    To correct this error, use a pointer to
                                    the function instead.

C2033                             'identifier' : bit field cannot have
                                    indirection

                                    The given bit field was declared as a
                                    pointer (*), which is not allowed.

C2034                             'identifier' : type of bit field too
                                    small for number of bits

                                    The number of bits specified in the
                                    bit-field declaration exceeded the
                                    number of bits in the given base type.

C2035                             struct/union 'identifier' : unknown size

                                    The given structure or union had an
                                    undefined size.

                                    Usually this occurs when referencing a
                                    declared but not defined structure or
                                    union tag.

                                    For example, the following causes this
                                    error:

                                    struct s_tag *ps;
                                    ps = &my_var;
                                    *ps = 17; /* This line causes the error
                                    */

C2037                             left of 'operator' specifies undefined
                                    struct/union 'identifier'

                                    The expression before the
                                    member-selection operator ( -> or .)
                                    identified a structure or union type
                                    that was not defined.

C2038                             'identifier' : not struct/union member

                                    The given identifier was used in a
                                    context that required a structure or
                                    union member.

Number                            Compilation Error Message
────────────────────────────────────────────────────────────────────────────
C2041                             illegal digit 'character' for base '
                                    number'

                                    The given character was not a legal
                                    digit for the base used.

C2042                             signed/unsigned keywords mutually
                                    exclusive

                                    The keywords signed and unsigned were
                                    both used in a single declaration, as in
                                    the following example:

                                    unsigned signed int i;

C2043                             illegal break

                                    A break statement is legal only within a
                                    do, for, while, or switch statement.

C2044                             illegal continue

                                    A continue statement is legal only
                                    within a do, for, or while statement.

C2045                             'identifier' : label redefined

                                    The label appeared before more than one
                                    statement in the same function.

C2046                             illegal case

                                    The keyword case may appear only within
                                    a switch statement.

C2047                             illegal default

                                    The keyword default may appear only
                                    within a switch statement.

C2048                             more than one default

                                    A switch statement contained more than
                                    one default label.

C2049                             case value 'value' already used

                                    The case VALUE was already used in this
                                    switch statement.

C2050                             nonintegral switch expression

                                    A switch expression did not evaluate to
                                    an integral value.

C2051                             case expression not constant

                                    Case expressions must be integral
                                    constants.

C2052                             case expression not integral

                                    Case expressions must be integral
                                    constants.

Number                            Compilation Error Message
────────────────────────────────────────────────────────────────────────────
C2054                             expected '(' to follow 'identifier'

                                    The context requires parentheses after
                                    the function IDENTIFIER.

                                    One cause of this error is omitting an
                                    equal sign (=) on a complex
                                    initialization, as in the following
                                    example:

                                    int array1[]    /* Missing = */
                                    {
                                    1,2,3
                                    };

C2055                             expected formal-parameter list, not a
                                    type list

                                    An argument-type list appeared in a
                                    function definition instead of a formal-
                                    parameter list.

C2056                             illegal expression

                                    An expression was illegal because of a
                                    previous error, which may not have
                                    produced an error message.

C2057                             expected constant expression

                                    The context requires a constant
                                    expression.

C2058                             constant expression is not integral

                                    The context requires an integral
                                    constant expression.

C2059                             syntax error : 'token'

                                    The token caused a syntax error.

C2060                             syntax error : end-of-file found

                                    The compiler expected at least one more
                                    token.

                                    Some causes of this error include:

                                    ■ Omitting a semicolon, as in

        int *p

                                    ■ Omitting a closing brace (}) from the
                                    last function, as in

    main()  {

Number                            Compilation Error Message
────────────────────────────────────────────────────────────────────────────
C2061                             syntax error : identifier 'identifier'

                                    The identifier caused a syntax error.

C2062                             type 'type' unexpected

                                    The compiler did not expect the given
                                    type to appear here, possibly because it
                                    already had a required type.

C2063                             'identifier' : not a function

                                    The given identifier was not declared as
                                    a function, but an attempt was made to
                                    use it as a function.

C2064                             term does not evaluate to a function

                                    An attempt was made to call a function
                                    through an expression that did not
                                    evaluate to a function pointer.

C2065                             'identifier' : undefined

                                    An attempt was made to use an identifier
                                    that was not defined.

C2066                             cast to function type is illegal

                                    An object was cast to a function type,
                                    which is illegal.

                                    However, it is legal to cast an object
                                    to a function pointer.

C2067                             cast to array type is illegal

                                    An object was cast to an array type.

C2068                             illegal cast

                                    A type used in a cast operation was not
                                    legal for this expression.

C2069                             cast of void term to nonvoid

                                    The void type was cast to a different
                                    type.

C2070                             illegal sizeof operand

                                    The operand of a sizeof expression was
                                    not an identifier or a type name.

C2071                             'identifier' : illegal storage class

                                    The given storage class cannot be used
                                    in this context.

C2072                             'identifier' : initialization of a
                                    function

                                    An attempt was made to initialize a
                                    function.

Number                            Compilation Error Message
────────────────────────────────────────────────────────────────────────────
C2075                             'identifier' : array initialization
                                    needs curly braces

                                    There were no braces around the given
                                    array initializer.

C2076                             'identifier' : struct/union
                                    initialization needs curly braces

                                    There were no braces around the given
                                    structure or union initializer.

C2077                             nonscalar field initializer 'identifier'

                                    An attempt was made to initialize a
                                    bit-field member of a structure with a
                                    non- scalar value.

C2078                             too many initializers

                                    The number of initializers exceeded the
                                    number of objects to be initialized.

C2079                             'identifier' uses undefined struct/union
                                    'name'

                                    The identifier was declared as structure
                                    or union type name, which had not been
                                    defined.

C2080                             illegal far _fastcall function

                                    A far _fastcall function may not be
                                    compiled with the /Gw option, or with
                                    the /Gq option if stack checking is
                                    enabled.

C2082                             redefinition of formal parameter '
                                    identifier'

                                    A formal parameter to a function was
                                    redeclared within the function body.

C2084                             function 'function' already has a body

                                    The function has already been defined.

C2085                             'identifier' : not in formal-parameter
                                    list

                                    The identifier was declared in a
                                    function definition, but not in the
                                    formal- parameter list.

                                    A common cause of this error is the
                                    omission of a semicolon at the end of a
                                    function prototype, as in the following
                                    example:

                                    void func1( void )
                                    void main( void )
                                    {
                                    }

                                    With the semicolon missing, the compiler
                                    assumes that  func1  is a function
                                    definition, not a prototype, and that
                                    the function  main  is being defined
                                    within the function  func1. It generates
                                    C2085 on the identifier  main.

Number                            Compilation Error Message
────────────────────────────────────────────────────────────────────────────
C2086                             'identifier' : redefinition

                                    The given identifier was defined more
                                    than once, or a subsequent declaration
                                    differed from a previous one.

                                    The following are ways to cause this
                                    error:

                                    int a;
                                    char a;
                                    main()
                                    {
                                    }

                                    or

                                    main()
                                    {
                                        int a;
                                        int a;
                                    }

                                    However, the following does not cause
                                    this error:

                                    int a;
                                    int a;
                                    main()
                                    {
                                    }

C2087                             'identifier' : missing subscript

                                    The definition of an array with multiple
                                    subscripts was missing a subscript value
                                    for a dimension other than the first
                                    dimension.

                                    The following is an example of an
                                    illegal definition:

                                    int func(a)
                                        char a[10][];
                                        { }

                                    The following is an example of a legal
                                    definition:

                                    int func(a)
                                        char a[][5];
                                        { }

C2090                             function returns array

                                    A function cannot return an array. It
                                    can return a pointer to an array.

Number                            Compilation Error Message
────────────────────────────────────────────────────────────────────────────
C2091                             function returns function

                                    A function cannot return a function. It
                                    can return a pointer to a function.

C2092                             array element type cannot be function

                                    Arrays of functions are not allowed.
                                    Arrays of pointers to functions are
                                    allowed.

C2093                             cannot use address of automatic variable
                                    as static initializer

                                    The program tried to use the address of
                                    an automatic variable in the initializer
                                    of a static item, as in the following
                                    example:

                                    func()
                                    {
                                        int i;
                                        static int *ip=&i;
                                        .
                                        .
                                        .
                                    }

C2094                             label 'identifier' was undefined

                                    The function did not contain a statement
                                    labeled with the given identifier.

C2095                             'function' : actual has type void :
                                    parameter 'number'

                                    An attempt was made to pass a void
                                    argument to a function. The given number
                                    indicates which argument was in error.

                                    Formal parameters and arguments to
                                    functions cannot have type void. They
                                    can, however, have type void * (pointer
                                    to void).

C2096                             struct/union comparison illegal

                                    Two structures or unions cannot be
                                    compared. Individual members of
                                    structures and unions can be compared.

C2097                             illegal initialization

                                    One of the following initializations was
                                    attempted:

                                    ■ A variable using a nonconstant value

                                    ■ A short address with a long address

                                    ■ A local struct/union/array with a
                                    nonconstant expression when compiling
                                    with the /Za option

Number                            Compilation Error Message
────────────────────────────────────────────────────────────────────────────
C2097                             (continued)

                                    ■ An expression containing a comma
                                    operator

                                    ■ An expression that is neither constant
                                    nor symbolic

C2098                             nonaddress expression

                                    An address was expected as the
                                    initialization expression.

C2099                             nonconstant initializer

                                    An initializer used a nonconstant offset.

C2100                             illegal indirection

                                    The indirection operator (*) was applied
                                    to a nonpointer value.

C2101                             '&' on constant

                                    The address-of operator (&) did not have
                                    an lvalue as its operand.

C2102                             '&' requires lvalue

                                    The address-of operator (&) must be
                                    applied to an lvalue expression.

C2103                             '&' on register variable

                                    An attempt was made to take the address
                                    of a register variable.

C2104                             '&' on bit field ignored

                                    An attempt was made to take the address
                                    of a bit field.

C2105                             'operator' needs lvalue

                                    The given operator did not have an
                                    lvalue operand.

C2106                             'operator' : left operand must be lvalue

                                    The left operand of the given operator
                                    was not an lvalue.

C2107                             illegal index, indirection not allowed

                                    A subscript was applied to an expression
                                    that did not evaluate to a pointer.

C2108                             nonintegral index

                                    A nonintegral expression was used in an
                                    array subscript.

C2109                             subscript on nonarray

                                    A subscript was used on a variable that
                                    was not an array.

Number                            Compilation Error Message
────────────────────────────────────────────────────────────────────────────
C2110                             pointer + pointer

                                    An attempt was made to add one pointer
                                    to another using the plus (+) operator.

C2111                             pointer + nonintegral value

                                    An attempt was made to add a nonintegral
                                    value to a pointer.

C2112                             illegal pointer subtraction

                                    An attempt was made to subtract pointers
                                    that did not point to the same type.

C2113                             pointer subtracted from nonpointer

                                    The right operand in a subtraction
                                    operation using the minus (-) operator
                                    was a pointer, but the left operand was
                                    not.

C2114                             'operator' : pointer on left; needs
                                    integral right

                                    The left operand of the given operator
                                    was a pointer; the right operand must be
                                    an integral value.

C2115                             'identifier' : incompatible types

                                    An expression contained incompatible
                                    types.

C2117                             'operator' : illegal for struct/union

                                    Structure and union type values are not
                                    allowed with the given operator.

C2118                             negative subscript

                                    A value defining an array size was
                                    negative.

C2119                             typedef types both define indirection

                                    Two typedef types were used to declare
                                    an item and both typedef types had
                                    indirection.

                                    For example, the declaration of  p  in
                                    the following example is illegal:

                                    typedef int *p_int;
                                    typedef short *p_short;
                                    p_short p_int p;    /* Illegal */

C2120                             void illegal with all types

                                    The void type was used in a declaration
                                    with another type.

C2121                             'operator' : bad left/right operand

                                    The left or right operand of the given
                                    operator was illegal for that operator.

Number                            Compilation Error Message
────────────────────────────────────────────────────────────────────────────
C2124                             divide or mod by zero

                                    A constant expression was evaluated and
                                    found to have a zero denominator.

C2125                             'identifier' : allocation exceeds 64K

                                    The given item exceeded the size limit
                                    of 64K.

C2127                             parameter allocation exceeds 32K

                                    The storage space required for the
                                    parameters to a function exceeded the
                                    limit of 32K.

C2128                             'identifier' : huge array cannot be
                                    aligned to segment boundary

                                    The given huge array was large enough to
                                    cross two segment boundaries, but could
                                    not be aligned to both boundaries to
                                    prevent an individual array element from
                                    crossing a boundary.

                                    If the size of a huge array causes the
                                    array to cross two boundaries, the size
                                    of each array element must be a power of
                                    two, so that a whole number of elements
                                    will fit between two segment boundaries.

C2129                             static function 'function' not found

                                    A forward reference was made to a static
                                    function that was never defined.

C2130                             #line expected a string containing the
                                    file name, found 'token'

                                    The optional token following the line
                                    number on a #line directive was not a
                                    string.

C2131                             more than one memory attribute

                                    More than one of the keywords _near,
                                    _far, _huge, or _based were applied to
                                    an item, as in the following example:

                                    typedef int _near nint;
                                    nint _far a;    /* Illegal */

C2132                             syntax error : unexpected identifier

                                    An identifier appeared in a
                                    syntactically illegal context.

C2133                             'identifier' : unknown size

                                    An attempt was made to declare an
                                    unsized array as a local variable.

Number                            Compilation Error Message
────────────────────────────────────────────────────────────────────────────
C2134                             'identifier' : struct/union too large

                                    The size of a structure or union
                                    exceeded the 64K compiler limit.

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

C2137                             empty character constant

                                    The illegal empty-character constant ('')
                                    was used.

C2138                             unmatched close comment '*/'

                                    The compiler detected an open-comment
                                    delimiter (/*) without a matching
                                    close-comment delimiter (*/). This error
                                    usually indicates an attempt to use
                                    illegal nested comments.

C2139                             type following 'identifier' is illegal

                                    Two types were used in the same
                                    declaration.

                                    For example:

                                    int double a;

C2140                             argument cannot be function type

                                    A function was declared as a formal
                                    parameter of another function, as in the
                                    following example:

                                    int func1(a)
                                        int a( );

C2141                             value out of range for enum constant

                                    An enumeration constant had a value
                                    outside the range of values allowed for
                                    type int.

C2142                             ellipsis requires three periods

                                    The compiler detected a token consisting
                                    of two periods ( .. ) and assumed that
                                    an ellipsis ( ... ) was intended.

Number                            Compilation Error Message
────────────────────────────────────────────────────────────────────────────
C2143                             syntax error : missing 'token1' before '
                                    token2'

                                    The compiler expected token1 to appear
                                    before token2.

                                    This message may appear if a required
                                    closing brace, right parenthesis, or
                                    semicolon is missing.

C2144                             syntax error : missing 'token' before
                                    type 'type'

                                    The compiler expected the given token to
                                    appear before the given type name.

                                    This message may appear if a required
                                    closing brace, right parenthesis, or
                                    semicolon is missing.

C2145                             syntax error : missing 'token' before
                                    identifier

                                    The compiler expected the given token to
                                    appear before an identifier.

                                    This message may appear if a semicolon
                                    (;) does not appear after the last
                                    declaration of a block.

C2146                             syntax error : missing 'token' before
                                    identifier 'identifier'

                                    The compiler expected the given token to
                                    appear before the given identifier.

C2147                             unknown size

                                    An attempt was made to increment an
                                    index or pointer to an array whose base
                                    type has not yet been declared.

C2148                             array too large

                                    An array exceeded the maximum legal size
                                    of 64K.

                                    Either reduce the size of the array, or
                                    declare it with _huge.

C2149                             'identifier' : named bit field cannot
                                    have 0 width

                                    The given named bit field had zero width.
                                    Only unnamed bit fields are allowed to
                                    have zero width.

C2150                             'identifier' : bit field must have type
                                    int, signed int, or unsigned int

                                    The ANSI C standard requires bit fields
                                    to have types of int, signed int, or
                                    unsigned int. This message appears only
                                    when compiling with the /Za option.

C2151                             more than one language attribute

                                    More than one keyword specifying a
                                    calling convention for a function was
                                    given.

Number                            Compilation Error Message
────────────────────────────────────────────────────────────────────────────
C2152                             'identifier' : pointers to functions
                                    with different attributes

                                    An attempt was made to assign a pointer
                                    to a function declared with one calling
                                    convention (_cdecl, _fortran, _pascal,
                                    or _fastcall) to a pointer to a function
                                    declared with a different calling
                                    convention.

C2153                             hex constants must have at least 1 hex
                                    digit

                                    The hexadecimal constants 0x, 0X and \x
                                    are illegal. At least one hexadecimal
                                    digit must follow the "x" or "X".

C2154                             'segment' : does not refer to a segment
                                    name

                                    A _based allocated variable must be
                                    allocated in a segment unless it is
                                    extern and uninitialized.

C2156                             pragma must be outside function

                                    A pragma that must be specified at a
                                    global level, outside a function body,
                                    occurred within a function.

                                    For example, the following causes this
                                    error:

                                    main()
                                    {
                                    #pragma optimize("l", on)
                                    }

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

C2159                             more than one storage class specified

                                    A declaration contained more than one
                                    storage class, as in

                                    extern static int i;

C2160                             ## cannot occur at the beginning of a
                                    macro definition

                                    A macro definition began with a
                                    token-pasting operator (##), as in

                                    #define mac(a,b) ##a

Number                            Compilation Error Message
────────────────────────────────────────────────────────────────────────────
C2161                             ## cannot occur at the end of a macro
                                    definition

                                    A macro definition ended with a
                                    token-pasting operator (##), as in

                                    #define mac(a,b) a##

C2162                             expected macro formal parameter

                                    The token following a stringizing
                                    operator (#) was not a formal-parameter
                                    name.

                                    For example:

                                    define print(a) printf(#b)

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

C2165                             'keyword' : cannot modify pointers to
                                    data

                                    The _fortran, _pascal, _cdecl, or
                                    _fastcall keyword was used illegally to
                                    modify a pointer to data, as in the
                                    following example:

                                    char _pascal *p;

C2166                             lvalue specifies 'const' object

                                    An attempt was made to modify an item
                                    declared with const type.

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

Number                            Compilation Error Message
────────────────────────────────────────────────────────────────────────────
C2170                             'identifier' : not declared as a
                                    function, cannot be intrinsic

                                    The intrinsic pragma was used for an
                                    item other than a function, or for a
                                    function that does not have an intrinsic
                                    form.

C2171                             'operator' : illegal operand

                                    The given unary operator was used with
                                    an illegal operand type, as in the
                                    following example:

                                    int (*fp)();
                                    double d,d1;
                                    .
                                    .
                                    .
                                    fp++;
                                    d = ~d1;

C2172                             'function' : actual is not a pointer :
                                    parameter 'number'

                                    An attempt was made to pass an argument
                                    that was not a pointer to a function
                                    that expected a pointer. The given
                                    number indicates which argument was in
                                    error.

C2173                             'function' : actual is not a pointer :
                                    parameter 'number1',  parameter list '
                                    number2'

                                    An attempt was made to pass a nonpointer
                                    argument to a function that expected a
                                    pointer.

                                    This error occurs in calls that return a
                                    pointer to a function. The first number
                                    indicates which argument was in error;
                                    the second number indicates which
                                    argument list contained the invalid
                                    argument.

C2174                             'function' : actual has type void :
                                    parameter 'number1',  parameter list '
                                    number2'

                                    An attempt was made to pass a void
                                    argument to a function. Formal
                                    parameters and arguments to functions
                                    cannot have type void. They can, however,
                                    have type void * (pointer to void).

                                    This error occurs in calls that return a
                                    pointer to a function. The first number
                                    indicates which argument was in error;
                                    the second number indicates which
                                    argument list contained the invalid
                                    argument.

Number                            Compilation Error Message
────────────────────────────────────────────────────────────────────────────
C2175                             'function' : unresolved external

                                    The given function is not defined in the
                                    source file, or built into the QuickC
                                    programming environment, or present in
                                    the Quick library (if any) that was
                                    loaded.

                                    This error occurs only for single-module
                                    programs created in the QuickC
                                    environment. To solve this problem,
                                    either define the function in the source
                                    file, load a Quick library containing
                                    the function, or (if the function is a
                                    standard C library function) create a
                                    program list for the program.

                                    This error can also occur if you are
                                    using graphics functions and did not
                                    build GRAPHICS.LIB or PGCHART.LIB into
                                    your combined library during the SETUP
                                    operation. If this is the case, add
                                    GRAPHICS.LIB or PGCHART.LIB to your
                                    program list and rebuild your program.

C2176                             static huge data not supported

                                    Declarations of _huge arrays are not
                                    supported in QuickC. Declare a _huge
                                    pointer to the data item, and allocate
                                    such an array dynamically using halloc(
                                    ).

C2177                             constant too big

                                    Information was lost because a constant
                                    value was too large to be represented in
                                    the type to which it was assigned.

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

C2180                             controlling expression has type 'void'

                                    The controlling expression in an if,
                                    while, for, or do statement had void
                                    type. The expression was either a
                                    function with void return type or an
                                    expression cast to void.

C2182                             'identifier' : has type 'void'

                                    The given variable was declared with the
                                    void keyword. The void keyword can be
                                    used only in function declarations.

Number                            Compilation Error Message
────────────────────────────────────────────────────────────────────────────
C2185                             'identifier' : illegal _based allocation

                                    A _based allocated variable that
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
                                    _segname("string") where string is any
                                    segment name or reserved segment name
                                    except "_STACK".

C2187                             cast of near function pointer to far
                                    function pointer

                                    An attempt was made to cast a near
                                    function pointer as a far function
                                    pointer.

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

                                    The /ML command-line option requires
                                    alternate math. QuickC does not support
                                    alternate math. The /ML option is
                                    allowed with only when no floating-point
                                    code is used.

Number                            Compilation Error Message
────────────────────────────────────────────────────────────────────────────
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

                                    For example, the following causes this
                                    error when compiled with /Za:

                                    main()
                                    {
                                        static int func1();
                                    }

C2205                             'identifier' : cannot initialize extern
                                    block-scoped variables

                                    A variable with extern storage class may
                                    not be initialized in a function.

C2206                             'function' : typedef cannot be used for
                                    function definition

                                    A typedef was used to define a function
                                    type.

                                    For example:

                                    typedef int functyp();
                                    functyp func1
                                        { }

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
                                    only when compiling with the /Za option;
                                    otherwise, it is a warning.

C2209                             type cast in _based construct must be
                                    (_segment)

                                    The only type allowed within a cast in a
                                    _based declarator is (_segment).

C2210                             'identifier' : must be near/far data
                                    pointer

                                    The base in a _based declarator may not
                                    be an array, a function, or a _based
                                    pointer.

Number                            Compilation Error Message
────────────────────────────────────────────────────────────────────────────
C2211                             (_segment) applied to function
                                    identifier 'function'

                                    The item cast in a _based declarator
                                    must not be a function.

C2212                             'identifier' : _based not available for
                                    functions/pointers to functions

                                    Functions cannot be _based allocated.
                                    Use the alloc_text pragma.

C2213                             'identifier' : illegal argument to
                                    _based

                                    A symbol used as a base must have type
                                    _segment or be a near or far pointer.

C2214                             pointers based on void require the use
                                    of :>

                                    A _based pointer based on void cannot be
                                    dereferenced. Use the base (:>) operator
                                    to create an address that can be
                                    dereferenced.

C2215                             :> operator only for objects based on
                                    void

                                    The right operand of the base (:>)
                                    operator must be a pointer based on void,
                                    as in

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

                                    Some causes for this error include the
                                    following:

                                    ■ An _interrupt function explicitly
                                    declared as near. Interrupt functions
                                    must
                                    be far.

                                    ■ An _interrupt function or a function
                                    with a variable number of arguments,
                                    when that function is declared with the
                                    _fortran, _pascal, or _fastcall
                                    attribute. Functions declared with the
                                    _interrupt attribute or with a variable
                                    number of arguments must use the C
                                    calling conventions. Remove the
                                    _fortran, _pascal, or _fastcall
                                    attribute from the function declaration.

Number                            Compilation Error Message
────────────────────────────────────────────────────────────────────────────
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

                                    The left operand of the member-selection
                                    (.) operator must be a struct/union type.
                                    It cannot be a pointer to a struct/union
                                    type.

                                    This error usually means that a '->'
                                    operator must be used.

C2222                             '->' : left operand has struct/union
                                    type, use '.'

                                    The left operand of the '->' operator
                                    must be a pointer to a struct/union type.
                                    It cannot be a struct/union type.

                                    This error usually means that a
                                    member-selection (.) operator must be
                                    used.

C2223                             left of '-> member' must point to
                                    struct/union

                                    The left operand of the '->' operator is
                                    not a pointer to a struct/union type.

                                    This error can occur when the left
                                    operand is an undefined variable.
                                    Undefined variables have type int.

C2224                             left of '.member' must have struct/union
                                    type

                                    The left operand of the member-selection
                                    (.) operator is not a struct/union type.

                                    This error can occur when the left
                                    operand is an undefined variable.
                                    Undefined variables have type int.

Number                            Compilation Error Message
────────────────────────────────────────────────────────────────────────────
C2225                             'tagname' : first member of struct is
                                    unnamed

                                    The struct with the given tag started
                                    with an unnamed member (an alignment
                                    member). All struct definitions must
                                    start with a named member.

C2400                             in-line syntax error in 'context', found
                                    'token'

                                    The given token caused a syntax error
                                    within the given context.

C2401                             'identifier' : register must be base in
                                    'context'

                                    The register used within an indirect
                                    memory operand must be a base register
                                    in this context.

C2402                             'identifier' : register must be index in
                                    'context'

                                    The register used within an indirect
                                    memory operand must be an index register
                                    in this context.

C2403                             'identifier' : register must be
                                    base/index in 'context'

                                    The register used within an indirect
                                    memory operand must be either a base or
                                    index register in this context.

C2404                             'identifier' : illegal register in '
                                    context'

                                    This register in this context is illegal.

C2405                             illegal short forward reference with
                                    offset

                                    Short forward references must refer only
                                    to a label. An additional offset cannot
                                    be used.

C2406                             'identifier' : name undefined in '
                                    context'

                                    The identifier used with the SIZE or
                                    LENGTH operator, or as a specifier with
                                    the member-selection operator (.), was
                                    not defined.

C2407                             illegal float register in 'context'

                                    An NDP register was specified in an
                                    illegal context.

C2408                             illegal type on PTR operator in 'context
                                    '

                                    The first argument of the PTR operator
                                    was not a legal type specification.

C2409                             illegal type used as operator in '
                                    context'

                                    A type was used within the given context
                                    as an operator.

Number                            Compilation Error Message
────────────────────────────────────────────────────────────────────────────
C2410                             'identifier' : ambiguous member name in
                                    'context'

                                    The given identifier within the given
                                    context is a member of more than one
                                    structure or union.

                                    Use a struct/union specifier in the
                                    operand that caused the error. A struct/
                                    union specifier is an identifier with
                                    structure or union type, either a
                                    typedef name or a variable of the same
                                    type as the structure or union being
                                    referenced. The specifier token must be
                                    the left operand of the first
                                    member-selection (.) operator on the
                                    operand.

C2411                             'identifier' : illegal struct/union
                                    member in 'context'

                                    Either the given identifier used with
                                    this context is not a member of a
                                    visible structure or union, or the
                                    identifier is not a member of the
                                    structure or union specified with the
                                    member-selection (.) operator.

C2412                             'identifier' : case insensitive label
                                    redefined

                                    The given label was defined more than
                                    once within the current function. Change
                                    the spelling of the label and its
                                    references.

C2413                             'token' : illegal align size

                                    The alignment size used with the ALIGN
                                    directive was either missing or outside
                                    the valid range.

C2414                             illegal number of operands

                                    The operating code does not support the
                                    number of operands used.

                                    Check an assembly reference manual to
                                    determine the correct number of operands
                                    for this instruction.

                                    It is possible that the instruction is
                                    supported with a different number of
                                    operands on a later processor. The
                                    problem can be solved by compiling with
                                    the /G1 or /G2 option, but then only
                                    machines with the newer processor will
                                    be able to execute the extended
                                    instruction.

C2415                             improper operand type

                                    The operating code does not use operands
                                    of this type.

                                    Check an assembly reference manual to
                                    determine the correct types of operands
                                    for this instruction.

                                    It is possible that the instruction is
                                    supported with additional operand types
                                    on a later processor. The problem can be
                                    solved by compiling with the /G1 or /G2
                                    option, but then only machines with the
                                    newer processor will be able to execute
                                    the extended instruction.

Number                            Compilation Error Message
────────────────────────────────────────────────────────────────────────────
C2416                             'identifier' : illegal opcode for
                                    processor

                                    The instruction is legal on a later
                                    processor but not on the current
                                    processor.

                                    Check an assembly reference manual to
                                    determine which processors support this
                                    operating code.

                                    The problem can be solved by compiling
                                    with the /G1 or /G2 option, but then
                                    only machines with the newer processor
                                    will be able to execute the extended
                                    instruction.

C2417                             divide by zero in 'context'

                                    The second argument to the division (/)
                                    operator used within the given context
                                    is zero.

C2418                             'identifier' : not in a register

                                    An in-line assembler instruction
                                    referenced a variable with register
                                    storage class that has not actually been
                                    allocated in a register.

                                    To correct this, remove the register
                                    keyword from the variable definition,
                                    and make sure that this instruction is
                                    legal with a memory operand.

C2419                             mod by zero in 'context'

                                    The second argument to the MOD operator
                                    used within the given context is zero.

C2420                             'identifier' : illegal symbol in '
                                    context'

                                    The given identifier is illegal within
                                    the given context.

C2421                             PTR operator used with register in '
                                    context'

                                    The PTR operator must not be used with a
                                    register operand.

C2422                             illegal segment override in 'context'

                                    An illegal segment override was used
                                    within the given context.

C2424                             'token' : improper expression in '
                                    context'

                                    The given token was used to form an
                                    improper expression within the given
                                    context.

C2425                             'token' : nonconstant expression in '
                                    context'

                                    The given token was used to form a
                                    nonconstant expression within the given
                                    context.

Number                            Compilation Error Message
────────────────────────────────────────────────────────────────────────────
C2426                             'token' : illegal operator in 'context'

                                    The given token must not be used as an
                                    operator within the given context. For
                                    example, index operators may not be
                                    nested.

C2427                             'identifier' : jump referencing label is
                                    out of range

                                    A branch to the specified label is
                                    farther than allowed.

                                    For example, if the following condition
                                    causes this error:

                                                        jz label1
                                                        inc AX
                                    .
                                    .
                                    .
                                                label1: inc CX

                                    then the error can be corrected by
                                    either removing excess code between the
                                    branch and the label or inverting the
                                    jump, as in

                                            jnz label2
                                            jmp label1
                                    label2: inc AX
                                    .
                                    .
                                    .
                                    label1: inc CX

C2429                             'label' : illegal far label reference

                                    FAR PTR may not be used on jumps or
                                    calls to labels. Far references to
                                    functions are allowed as long as the
                                    function has been declared.


D.1.3  Warning Messages

The messages listed in this section indicate potential problems but do not
hinder compiling and linking. The number in parentheses at the end of a
warning message description gives the minimum warning level that must be set
for the message to appear.

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
C4000                             UNKNOWN WARNING Contact Microsoft
                                    Product Support Services

                                    The compiler detected an unknown error
                                    condition.

                                    Note the circumstances of the error and
                                    notify Microsoft Corporation by
                                    following the instructions in the
                                    Microsoft Product Assistance Request
                                    form at the back of C for Yourself,
                                    included in the QuickC version 2.5
                                    package. (1)

C4001                             nonstandard extension used - 'extension'

                                    The given nonstandard language extension
                                    was used when the /Ze option was
                                    specified.

                                    If the /Za option has been specified,
                                    this condition generates a syntax error.
                                    (1,4)

C4002                             too many actual parameters for macro '
                                    identifier'

                                    The number of actual arguments specified
                                    with the given identifier was greater
                                    than the number of formal parameters
                                    given in the macro definition of the
                                    identifier.

                                    The additional actual parameters are
                                    collected but ignored during expansion
                                    of the macro. (1)

C4003                             not enough actual parameters for macro '
                                    identifier'

                                    The number of actual arguments specified
                                    with the given identifier was less than
                                    the number of formal parameters given in
                                    the macro definition of the identifier.

                                    When a formal parameter is referenced in
                                    the definition and the corresponding
                                    actual parameter has not been provided,
                                    empty text is substituted in the macro
                                    expansion. (1)

C4004                             missing ')' after 'defined'

                                    The closing parenthesis was missing from
                                    an #if defined phrase.

                                    The compiler assumes a right parenthesis,
                                    after the first identifier it finds. It
                                    then attempts to compile the remainder
                                    of the line, which may result in another
                                    warning or error. (1)

                                    The following example causes this
                                    warning and a fatal error:

                                    #if defined( ID1 ) || ( ID2 )

                                    The compiler assumed a right parenthesis
                                    after ID1, then found a mismatched
                                    parenthesis in the remainder of the line.
                                    The following avoids this problem:

                                    #if defined( ID1 ) || defined( ID2 )

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
C4005                             'identifier' : macro redefinition

                                    The given identifier was defined twice.
                                    The compiler assumed the new macro
                                    definition.

                                    To eliminate the warning, either remove
                                    one of the definitions or use an #undef
                                    directive before the second definition.

                                    This warning is caused in situations
                                    where a macro is defined both on the
                                    command line and in the code with a
                                    #define directive. (1)

C4006                             #undef expected an identifier

                                    The name of the identifier whose
                                    definition was to be removed was not
                                    given with the #undef directive. The
                                    #undef was ignored. (1)

C4007                             'identifier' : must be 'attribute'

                                    The attribute of the given function was
                                    not explicitly stated. The compiler
                                    forced the attribute.

                                    For example, the function main must have
                                    the _cdecl attribute. (2)

C4008                             'identifier' : _fastcall attribute on
                                    data ignored

                                    The _fastcall attribute on the given
                                    data identifier was ignored. (2)

C4009                             string too big, trailing characters
                                    truncated

                                    A string exceeded the compiler limit of
                                    2,047 on string size. The excess
                                    characters at the end of the string were
                                    truncated.

                                    To correct this problem, break the
                                    string into two or more strings. (1)

C4011                             identifier truncated to 'identifier'

                                    Only the first 31 characters of an
                                    identifier are significant. The
                                    characters after the limit were
                                    truncated.

                                    This may mean that two identifiers that
                                    are different before truncation may have
                                    the same identifier name after
                                    truncation. (1)

C4015                             'identifier' : bit-field type must be
                                    integral

                                    The given bit field was not declared as
                                    an integral type. The compiler assumed
                                    the base type of the bit field to be
                                    unsigned.

                                    Bit fields must be declared as unsigned
                                    integral types. (1)

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
C4016                             'function' : no function return type,
                                    using int as default

                                    The given function had not yet been
                                    declared or defined, so the return type
                                    was unknown. A default return type of
                                    int was assumed. (3)

C4017                             cast of int expression to far pointer

                                    A far pointer represents a full
                                    segmented address. On an 8086/8088
                                    processor, casting an int value to a far
                                    pointer may produce an address with a
                                    meaningless segment value.

                                    The compiler extended the int expression
                                    to a four-byte value. (1)

C4020                             'function' : too many actual parameters

                                    The number of arguments specified in a
                                    function call was greater than the
                                    number of parameters specified in the
                                    function prototype or function
                                    definition.

                                    The extra parameters were passed
                                    according to the calling convention used
                                    on the function. (1)

C4021                             'function' : too few actual parameters

                                    The number of arguments specified in a
                                    function call was less than the number
                                    of parameters specified in the function
                                    prototype or function definition.

                                    Only the provided actual parameters are
                                    passed. If the called function
                                    references a variable that has not been
                                    passed, the results are undefined and
                                    may be unexpected. (1)

C4022                             'function' : pointer mismatch :
                                    parameter 'number'

                                    The pointer type of the given parameter
                                    was different from the pointer type
                                    specified in the argument-type list or
                                    function definition.

                                    The parameter will be passed without
                                    change. Its value will be interpreted as
                                    a pointer within the called function. (1)

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
                                    the call will be generated correctly. (1)

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
C4024                             'function' : different types : parameter
                                    'number'

                                    The type of the given parameter in a
                                    function call did not agree with the
                                    type given in the argument-type list or
                                    function definition.

                                    The parameter will be passed without
                                    change. The function will interpret the
                                    parameter's type as the type expected by
                                    the function. (1)

C4026                             function declared with formal argument
                                    list

                                    The function was declared to take
                                    arguments, but the function definition
                                    did not declare formal parameters.

                                    Subsequent calls to this function will
                                    assume the function takes no arguments.
                                    (1)

C4027                             function declared without formal
                                    argument list

                                    The function was declared to take no
                                    arguments (the argument-type list
                                    consisted of the word void), but formal
                                    parameters were declared in the function
                                    definition, or arguments were given in a
                                    call to the function. Subsequent calls
                                    to this function will assume the
                                    function takes parameters of the types
                                    of the given formal arguments. (1)

C4028                             parameter 'number' declaration different

                                    The type of the given parameter did not
                                    agree with the corresponding type in the
                                    argument-type list or with the
                                    corresponding formal parameter.

                                    The original declaration was used. (1)

C4029                             declared parameter list different from
                                    definition

                                    The types in the argument list given in
                                    a function declaration did not agree
                                    with the types of the formal parameters
                                    given in the function definition.

                                    The parameter list of the definition is
                                    used instead of the parameter list of
                                    the declaration. (1)

C4030                             first parameter list longer than the
                                    second

                                    A function was declared more than once
                                    with different parameter lists.

                                    The first declaration was used. (1)

C4031                             second parameter list is longer than the
                                    first

                                    A function was declared more than once
                                    with different parameter lists.

                                    The first declaration was used. (1)

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
C4032                             unnamed struct/union as parameter

                                    The type of the structure or union being
                                    passed as an argument was not named, so
                                    the declaration of the formal parameter
                                    cannot use the name and must declare the
                                    type.

                                    The parameter was commented out.

                                    This warning occurs only when using the
                                    /Zg option for generating function
                                    prototypes. (1)

C4033                             function must return a value

                                    A function is expected to return a value
                                    unless it is declared as void.

                                    An undefined value will be returned when
                                    this function is called. (1)

C4034                             sizeof returns 0

                                    The sizeof operator was applied to an
                                    operand that yielded a size of zero.

                                    This warning is informational. (1)

C4035                             'function' : no return value

                                    A function declared to return a value
                                    did not do so.

                                    An undefined value will be returned when
                                    this function is called. (3)

C4040                             memory attribute on 'identifier' ignored

                                    The _near, _far, _huge, or _based
                                    keyword has no effect in the declaration
                                    of the given identifier and is ignored.

                                    One cause of this warning is a huge
                                    array that is not declared globally.
                                    Declare huge arrays outside of main. (1)

C4042                             'identifier' : has bad storage class

                                    The storage class specified for
                                    identifier cannot be used in this
                                    context. (1)

                                    The default storage class for this
                                    context was used in place of the illegal
                                    class:

                                    ■ If identifier was a function, the
                                    compiler assumed extern class.

                                    ■ If identifier was a formal parameter
                                    or local variable, the compiler assumed
                                    auto class.

                                    ■ If identifier was a global variable,
                                    the compiler assumed the variable was
                                    declared with no storage class.

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
C4044                             _huge on 'identifier' ignored, must be
                                    an array

                                    The compiler ignored the _huge memory
                                    attribute on the given identifier. Only
                                    arrays may be declared with the _huge
                                    memory attribute. On pointers, _huge
                                    must be used as a modifier, not as a
                                    memory attribute. (1)

C4045                             'identifier' : array bounds overflow

                                    Too many initializers were present for
                                    the given array. The excess initializers
                                    were ignored. (1)

C4047                             'operator' : different levels of
                                    indirection

                                    An expression involving the specified
                                    operator had inconsistent levels of
                                    indirection.

                                    If both operands are of arithmetic type,
                                    or if both are not (such as array or
                                    pointer), then they are used without
                                    change. If one is near and one is far,
                                    the near operand is extended using the
                                    value of DS. If one is arithmetic and
                                    one is not, the arithmetic operand is
                                    converted to the type of the other
                                    operand. (1)

                                    For example, the following code causes
                                    this warning but is compiled without
                                    change:

                                    char **p;
                                    char *q;
                                    p = q;   /* Warning */

C4048                             array's declared subscripts different

                                    An expression involved pointers to
                                    arrays of different size.

                                    The pointers were used without
                                    conversion. (1)

C4049                             'operator' : indirection to different
                                    types

                                    The pointer expressions used with the
                                    given operator had different base types.
                                    The expressions were used without
                                    conversion. (1)

                                    For example, the following code causes
                                    this warning:

                                    struct ts1 *s1;
                                    struct ts2 *s2;
                                    s2 = s1;   /* Warning */

C4050                             'operator' : different code attributes

                                    The function-pointer expressions used
                                    with operator had different code
                                    attributes. The attribute involved is
                                    either _export or_loadds.

                                    This is a warning and not an error,
                                    because _export and _loadds affect only
                                    entry sequences and not calling
                                    conventions. (4)

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
C4051                             type conversion, possible loss of data

                                    Two data items in an expression had
                                    different base types, causing the type
                                    of one item to be converted. During the
                                    conversion, a data item was truncated.
                                    (2)

C4053                             at least one void operand

                                    An expression with type void was used as
                                    an operand.

                                    The expression was evaluated using an
                                    undefined value for the void operand. (1)

C4054                             insufficient memory may affect
                                    optimization

                                    Not enough memory was available to do
                                    all requested optimizations. This
                                    message appears if available memory is
                                    within 64K of the absolute minimum that
                                    will accommodate the executable file. (1)

C4056                             floating-point overflow

                                    The compiler generated a floating-point
                                    exception while doing constant
                                    arithmetic on floating-point items at
                                    compile time. (2)

                                    For example:

                                    float fp_val = 1.0e100;

                                    In this example, the floating-point
                                    constant  1.0e100  exceeds the maximum
                                    allowable value for a double-precision
                                    data item.

C4058                             address of automatic (local) variable
                                    taken, DS!= SS

                                    The program was compiled with the
                                    default data segment (DS) not equal to
                                    the stack segment (SS), and the program
                                    tried to point to an automatic (local)
                                    variable with a near pointer.

                                    Dereferencing a pointer to that address
                                    will give an unpredictable result. (1)

C4059                             segment lost in conversion

                                    The conversion of a far pointer (a full
                                    segmented address) or _based pointer to
                                    a near pointer (a segment offset) or
                                    _based pointer resulted in the loss of
                                    the segment address. (2)

C4061                             long/short mismatch in argument :
                                    conversion supplied

                                    The base types of the actual and formal
                                    arguments of a function were different.
                                    The actual argument is converted to the
                                    type of the formal parameter. (1)

C4062                             near/far mismatch in argument :
                                    conversion supplied

                                    The pointer sizes of the actual and
                                    formal arguments of a function were
                                    different. The actual argument is
                                    converted to the type of the formal
                                    parameter. (1)

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
C4063                             'function' : function too large for
                                    post-optimizer

                                    Not enough space was available to
                                    optimize the given function. (2)

                                    One of the following may be a solution:

                                    ■ Recompile with fewer optimizations.

                                    ■ Divide the function into two or more
                                    smaller functions.

C4065                             recoverable heap overflow in
                                    post-optimizer - some optimizations may
                                    be missed

                                    Some optimizations were skipped because
                                    not enough space was available for
                                    optimization. (2)

                                    One of the following may be a solution:

                                    ■ Recompile with fewer optimizations.

                                    ■ Divide the function into two or more
                                    smaller functions.

C4066                             local symbol-table overflow - some local
                                    symbols may be missing in listings

                                    The listing generator ran out of heap
                                    space for local variables, so the source
                                    listing may not contain symbol-table
                                    information for all local variables. (2)

C4067                             unexpected characters following '
                                    directive' directive - newline expected

                                    Extra characters following a
                                    preprocessor directive were ignored.
                                    This warning appears only when compiling
                                    with the /Za option. (1)

                                    For example, the following code causes
                                    this warning:

                                    #endif    NO_EXT_KEYS

                                    To remove the warning, compile with /Ze
                                    or use comment delimiters:

                                    #endif    /* NO_EXT_KEYS */

C4068                             unknown pragma

                                    The compiler did not recognize a pragma
                                    and ignored it. (1)

C4069                             conversion of near pointer to long
                                    integer

                                    The compiler converted a 16-bit near
                                    pointer to a long integer by extending
                                    the high-order word with the current
                                    data-segment value, not with zeros. (2)

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
C4071                             'function' : no function prototype given

                                    The given function was called before the
                                    compiler found the corresponding
                                    function prototype.

                                    The function will be called using the
                                    default rules for calling a function
                                    without a prototype. (2)

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
                                    general-purpose registers. (1)

C4073                             scoping too deep, deepest scoping merged
                                    when debugging

                                    Declarations appeared at a static
                                    nesting level greater than 13. As a
                                    result, all declarations beyond this
                                    level will seem to appear at the same
                                    level. (1)

C4076                             'type' : may be used on integral types
                                    only

                                    The signed or unsigned type modifier was
                                    used with a nonintegral type. The given
                                    qualifier was ignored. (1)

                                    The following example causes this
                                    warning:

                                    unsigned double x;

C4077                             unknown check_stack option

                                    An unknown option was given with the old
                                    form of the check_stack pragma. With the
                                    old form, the argument to the pragma
                                    must be empty, +, or -. (1)

                                    For example, the following causes this
                                    warning:

                                    #pragma check_stack yes

                                    The following code corrects this
                                    situation:

                                    #pragma check_stack +    /* Old form */


                                    or

                                    #pragma check_stack (on) /* New form */

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
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
                                    (1)

C4079                             unexpected token 'token'

                                    An unexpected separator token was found
                                    in the argument list of a pragma.

                                    The remainder of the pragma was ignored.
                                    (1)

C4080                             expected identifier for segment name,
                                    found 'token'

                                    The first argument in the argument list
                                    for the alloc_text pragma is missing a
                                    segment name. This happens if the first
                                    token in the argument list is not an
                                    identifier.

                                    The pragma was ignored. (1)

C4081                             expected a comma, found 'token'

                                    A comma was missing between two
                                    arguments of a pragma.

                                    The pragma was ignored. (1)

C4082                             expected an identifier, found 'token'

                                    An identifier was missing from the
                                    argument list.

                                    The remainder of the pragma was ignored.
                                    (1)

C4083                             expected '(', found 'token'

                                    A left parenthesis was missing from a
                                    pragma's argument list.

                                    The pragma was ignored. (1)

                                    The following example causes this
                                    warning:

                                    #pragma check_pointer on)

C4084                             expected a pragma keyword, found 'token'

                                    The token following #pragma was not
                                    recognized as a directive.

                                    The pragma was ignored. (1)

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
C4084                             (continued)

                                    The following example causes this
                                    warning:

                                    #pragma (on)

C4085                             expected [on | off]

                                    The pragma expected an on or off
                                    parameter, but the specified parameter
                                    was unrecognized or missing.

                                    The pragma was ignored. (1)

C4086                             expected [1 | 2 | 4]

                                    The pragma expected a parameter of
                                    either 1, 2, or 4, but the specifed
                                    parameter was unrecognized or missing.
                                    (1)

C4087                             'function' : declared with void
                                    parameter list

                                    The given function was declared as
                                    taking no parameters, but a call to the
                                    function specified actual parameters.

                                    The extra parameters were passed
                                    according to the calling convention used
                                    on the function. (1)

                                    The following example causes this
                                    warning:

                                    int f1(void);
                                        f1(10);

C4088                             'function' : pointer mismatch :
                                    parameter 'number', parameter list '
                                    number'

                                    The argument passed to the given
                                    function had a different level of
                                    indirection from the given parameter in
                                    the function definition.

                                    The parameter will be passed without
                                    change. Its value will be interpreted as
                                    a pointer within the called function. (1)

C4089                             'function' : different types : parameter
                                    'number', parameter list 'number'

                                    The argument passed to the given
                                    function did not have the same type as
                                    the given parameter in the function
                                    definition.

                                    The parameter will be passed without
                                    change. The function will interpret the
                                    parameter's type as the type expected by
                                    the function. (1)

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
C4090                             different const/volatile qualifiers

                                    A pointer to an item declared as const
                                    was assigned to a pointer that was not
                                    declared as const. As a result, the
                                    const item pointed to could be modified
                                    without being detected.

                                    The expression was compiled without
                                    modification. (1)

                                    The following example causes this
                                    warning:

                                    const char *p = "abcde";
                                    int str(char *s);
                                    str(p);

C4091                             no symbols were declared

                                    The compiler detected an empty
                                    declaration, as in the following
                                    example:

                                    int ;

                                    The declaration was ignored. (2)

C4092                             untagged enum/struct/union declared no
                                    symbols

                                    The compiler detected an empty
                                    declaration using an untagged structure,
                                    union, or enumerated variable.

                                    The declaration was ignored. (2)

                                    For example, the following code causes
                                    this warning:

                                    struct {
                                    .
                                    .
                                    .
                                    };

C4093                             unescaped newline in character constant
                                    in inactive code

                                    The constant expression of an #if, #elif,
                                    #ifdef, or #ifndef preprocessor
                                    directive evaluated to 0, making the
                                    code that follows inactive. Within that
                                    inactive code, a newline character
                                    appeared within a set of single or
                                    double quotation marks.

                                    All text until the next double quotation
                                    mark was considered to be within a
                                    character constant. (3)

C4095                             expected ')', found 'token'

                                    More than one argument was given for a
                                    pragma that can take only one argument.

                                    The compiler assumed the expected
                                    parenthesis and ignored the remainder of
                                    the line. (1)

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
C4096                             'attribute1' must be used with '
                                    attribute2'

                                    The use of attribute2 requires the use
                                    of attribute1.

                                    For example, using a variable number of
                                    arguments (...) requires that _cdecl be
                                    used. Also, _interrupt functions must be
                                    _far and _cdecl.

                                    The compiler assumed attribute1 for the
                                    function. (2)

C4098                             void function returning a value

                                    A function declared with a void return
                                    type also returned a value.

                                    A function was declared with a void
                                    return type but was defined as a value.

                                    The compiler assumed the function
                                    returns a value of type int. (1)

C4100                             'identifier' : unreferenced formal
                                    parameter

                                    The given formal parameter was never
                                    referenced in the body of the function
                                    for which it was declared.

                                    This warning is informational. (3)

C4101                             'identifier' : unreferenced local
                                    variable

                                    The given local variable was never used.

                                    This warning is informational. (4)

C4102                             'label' : unreferenced label

                                    The given label was defined but never
                                    referenced.

                                    This warning is informational. (3)

C4104                             'identifier' : near data in same_seg
                                    pragma, ignored

                                    The given near variable was specified in
                                    a same_seg pragma.

                                    The identifier was ignored. (1)

C4105                             'identifier' : code modifiers only on
                                    function or pointer to function

                                    The given identifier was declared with a
                                    code modifier that can be used only with
                                    a function or function pointer.

                                    The code modifier was ignored. (1)

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
C4106                             pragma requires integer between 1 and
                                    127

                                    An integer constant in the range 1-127
                                    must be specified with the page and skip
                                    pragmas.

                                    The compiler assumed 1 was specified. (1)

C4107                             pragma requires integer between 15 and
                                    255

                                    An integer constant in the range 15-255
                                    must be specified with the pagesize
                                    pragma.

                                    The compiler assumed 63 was specified.
                                    (1)

C4108                             pragma requires integer between 79 and
                                    132

                                    An integer constant in the range 79-132
                                    must be specified with the linesize
                                    pragma.

                                    The compiler assumed 79 was specified.
                                    (1)

C4109                             unexpected identifier 'identifier'

                                    The pragma contained an unexpected token.

                                    The pragma was ignored. (1)

C4110                             unexpected token 'int constant'

                                    The pragma contained an unexpected
                                    integer constant.

                                    The pragma was ignored. (1)

C4111                             unexpected token 'string'

                                    The pragma contained an unexpected
                                    string.

                                    The pragma was ignored. (1)

C4112                             macro name 'name' is reserved, 'command'
                                    ignored

                                    The given command attempted to define or
                                    undefine the predefined macro name or
                                    the preprocessor operator 'defined'. The
                                    given command is displayed as either
                                    #define or #undef, even if the attempt
                                    was made using command-line options.

                                    The command was ignored. (1)

C4113                             function parameter lists differed

                                    A function pointer was assigned to a
                                    function pointer, but the parameter
                                    lists of the functions do not agree.

                                    The expression was compiled without
                                    modification. (1)

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
C4114                             same type qualifier used more than once

                                    A type qualifier (const, volatile,
                                    signed, or unsigned) was used more than
                                    once in the same type.

                                    The second occurrence of the qualifier
                                    was ignored. (1)

C4115                             'tag' : type definition in formal
                                    parameter list

                                    The given tag was used to define a
                                    struct, union, or enum in the formal
                                    parameter list of a function.

                                    The compiler assumed the definition was
                                    at the global level. (1)

C4116                             (no tag) : type definition in formal
                                    parameter list

                                    A struct, union, or enum type with no
                                    tag was defined in the formal parameter
                                    list of a function.

                                    The compiler assumed the definition was
                                    at the global level. (1)

C4118                             pragma not supported

                                    A pragma that the compiler does not
                                    support was used. The pragma was ignored.

                                    This warning appears at level 1, except
                                    on #pragma comment( ), which causes a
                                    level 3 warning. (1, 3)

C4119                             different bases 'name1' and 'name2'
                                    specified

                                    The _based pointers in the expression
                                    have different symbolic bases. There may
                                    be truncation or loss in the code
                                    generated. (1)

C4120                             _based/unbased mismatch

                                    The expression contains a conversion
                                    between a _based pointer and another
                                    pointer that is unbased. Some
                                    information may have been truncated.

                                    This warning commonly occurs when a
                                    _based pointer is passed to a function
                                    that accepts a near or far pointer. (1)

C4123                             different base expressions specified

                                    The expression contains a conversion
                                    between _based pointers, but the base
                                    expressions of the _based pointers are
                                    different. Some of the _based
                                    conversions may be unexpected. (1)

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
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
                                    declared under these conditions. (1)

C4125                             decimal digit terminates octal escape
                                    sequence

                                    An octal escape sequence in a character
                                    or string constant was terminated with a
                                    decimal digit.

                                    The compiler evaluated the octal number
                                    without the decimal digit, and assumed
                                    the decimal digit was a character. (4)

                                    The following example causes this
                                    warning:

                                    char array1[] = "\709";

                                    If the digit 9 was intended as a
                                    character and was not a typing error,
                                    correct the example as follows:

                                    char array[] = "\0709";  /* String
                                    containing "89" */

C4126                             'flag' : unknown memory model flag

                                    The flag used with the /A option was not
                                    recognized and was ignored. (1)

C4127                             conditional expression is constant

                                    The controlling expression of an if
                                    statement or while loop evaluates to a
                                    constant.

                                    As a result, the code in the body of the
                                    if statement or while loop is either
                                    always executed or never executed.

                                    This warning is informational. (4)

C4128                             storage-class specifier after type

                                    A storage-class specifier (auto, extern,
                                    register, static) appears after a type
                                    in a declaration. The compiler assumed
                                    the storage class specifier occurred
                                    before the type.

                                    New-style code places the storage-class
                                    specifier first. (4)

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
C4129                             'character' : unrecognized character
                                    escape sequence

                                    The character following a backslash in a
                                    character or string constant was not
                                    recognized as a valid escape sequence.

                                    As a result, the backslash is ignored
                                    and not printed, and the character
                                    following the backslash is printed.

                                    To print a single backslash (\), specify
                                    a double backslash (\\). (4)

C4130                             'operator' : logical operation on
                                    address of string constant

                                    The operator was used with the address
                                    of a string literal. Unexpected code was
                                    generated. (4)

                                    For example, the following code causes
                                    this warning:

                                    char *pc;
                                    pc = "Hello";
                                    if (pc == "Hello") ...

                                    The if statement compares the value
                                    stored in the pointer  pc  to the
                                    address of the string  "Hello", which is
                                    separately allocated each time it occurs
                                    in the code. It does not compare the
                                    string pointed to by  pc  with the
                                    string  "Hello".

                                    To compare strings, use the strcmp
                                    function.

C4131                             'function' : uses old-style declarator

                                    The function declaration or definition
                                    is not a prototype. (4)

                                    New-style function declarations are in
                                    prototype form.

                                    ■ Old style:

                                        int addrec( name, id )
                                        char *name;
                                        int id;
                                        { }

                                    ■ New style:

                                        int addrec( char *name, int id )
                                        { }

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
C4132                             'object' : const object should be
                                    initialized

                                    The value of a const object cannot be
                                    changed, so the only way to give the
                                    const object a value is to initialize it.

                                    It is not possible to assign a value to
                                    object. (4)

C4135                             conversion between different integral
                                    types

                                    Information was lost between two
                                    integral types. (4)

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
                                    between two floating types. (4)

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
                                    treated as float type, use the  F  (or
                                    f  ) suffix on the constant to prevent
                                    the following warning:

                                    floatvar = 1.0F;

C4137                             'function' : no return value from
                                    floating-point function

                                    The given function had no return
                                    statement.

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
C4137                             (continued)

                                    A long double function returns its value
                                    on the floating-point stack or the
                                    emulated stack. If the function does not
                                    return a value, a run-time
                                    floating-point stack underflow may occur.
                                    (1)

C4138                             '*/' found outside of comment

                                    The compiler found a closing comment
                                    delimiter (*/) without a preceding
                                    opening delimiter. It assumed a space
                                    between the asterisk (*) and the forward
                                    slash ( / ). (1)

                                    The following example causes this
                                    warning:

                                    int */*Comment*/ptr;

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
                                    expression to zero, as in

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
                                    constant and compiled with the /J option,
                                    the compiler cast the value to an
                                    unsigned char. (1)

                                    For example, '\x1ff' is out of range for
                                    a character. Note that the following
                                    code causes this warning:

                                    printf("\x7Bell\n");

                                    The number  7Be  is a legal hex number,
                                    but is too large for a character. To
                                    correct this example, use three hex
                                    digits:

                                    printf("\x007Bell\n");

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
C4140                             'function' redefined : preceding
                                    references may be invalid

                                    The compiler issues this warning if a
                                    function definition changes between
                                    incremental compilations.

                                    References previous to the redefinition
                                    use the previous definition. Subsequent
                                    references use the new definition. (1)

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
                                    with _far, and then was called from the
                                    text segment.

                                    The compiler generated a near call.

                                    Although this is a warning message
                                    rather than an error message, the
                                    resulting code will not work correctly.
                                    (1)

C4186                             string too long - truncated to 40
                                    characters

                                    The string argument for a title or
                                    subtitle pragma exceeded the maximum
                                    allowable length and was truncated. (1)

C4200                             local variable 'identifier' used without
                                    having been initialized

                                    A reference was made to a local variable
                                    that had not been assigned a value. As a
                                    result, the value of the variable is
                                    unpredictable.

                                    This warning is given only when
                                    compiling with global register
                                    allocation turned on (/Oe). (1)

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
C4201                             local variable 'identifier' may be used
                                    without having been initialized

                                    A reference was made to a local variable
                                    that might not have been assigned a
                                    value. As a result, the value of the
                                    variable may be unpredictable.

                                    This warning is given only when
                                    compiling with the global register
                                    allocation turned on (/Oe). (3)

C4202                             unreachable code

                                    The flow of control can never reach the
                                    indicated line.

                                    This warning is given only when
                                    compiling with one of the global
                                    optimizations (/Oe, /Og, or /Ol). (4)

C4203                             'function' : function too large for
                                    global optimizations

                                    The named function was too large to fit
                                    in memory and be compiled with the
                                    selected optimization. The compiler did
                                    not perform any global optimizations
                                    (/Oe, /Og, or /Ol). Other /O
                                    optimizations, such as /Oa and /Oi, are
                                    still performed. (1)

                                    One of the following may remove this
                                    warning:

                                    ■ Recompile with fewer optimizations.

                                    ■ Divide the function into two or more
                                    smaller functions.

C4204                             'function' : in-line assembler precludes
                                    global optimizations

                                    The use of in-line assembly in the named
                                    function prevented the specified global
                                    optimizations (/Oe, /Og, or /Ol) from
                                    being performed. (3)

C4205                             statement has no effect

                                    The indicated statement will have no
                                    effect on the program execution. (4)

                                    Some examples of statements with no
                                    effect:

                                    1;
                                    a + 1;
                                    b == c;

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
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
                                    (4)

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

                                    An array index legally may be the value
                                    of the last expression in a series of
                                    expressions separated by the comma (,)
                                    operator. However, the intent may have
                                    been to use the expressions to specify
                                    multiple indexes into a multidimensional
                                    array. (4)

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
                                    debugging information. (2)

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
C4300                             (continued)

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
                                    level 1. (2)

C4323                             potential divide by 0

                                    The second operand in a divide operation
                                    evaluated to zero at compile time,
                                    giving undefined results. (3)

                                    The 0 operand may have been generated by
                                    the compiler, as in the following
                                    example:

                                    func1() { int i,j,k; i /= j && k; }

C4324                             potential mod by 0

                                    The second operand in a remainder
                                    operation evaluated to zero at compile
                                    time, giving undefined results. (3)

C4401                             'identifier' : member is bit field

                                    The identifier is a bit field. A
                                    bit-field member cannot be accessed
                                    within in-line assembly code. The last
                                    packing boundary before the bit-field
                                    member was used. (1)

C4402                             must use PTR operator

                                    A type was used on an operand without a
                                    PTR operator.

                                    The compiler assumed a PTR operator was
                                    used. (1)

C4403                             illegal PTR operator

                                    A type was used on an operand with the
                                    PTR operator.

                                    The compiler assumed a PTR operator was
                                    not used. (1)

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
C4404                             period on directive ignored

                                    The period preceding the directive was
                                    ignored. (3)

C4405                             'identifier' : identifier is reserved
                                    word

                                    The identifier is a reserved word. Use
                                    of it in this way may cause
                                    unpredictable results. (1)

C4406                             operand on directive ignored

                                    The directive does not take any operands,
                                    but an operand was specified.

                                    The compiler ignored the operand. (1)

C4407                             operand size conflict

                                    The size of the operands should match
                                    but did not.

                                    If the first operand was a register or
                                    the second operand as immediate, the
                                    size of the first operand was used.
                                    Otherwise, the size of the second
                                    operand was used. (2)

C4409                             illegal instruction size

                                    The instruction did not have a form with
                                    the specified size. The smallest legal
                                    size was used. (1)

C4410                             illegal size for operand

                                    One of the operands on this instruction
                                    had an incorrect size. The smallest
                                    legal size for the operand was used. (1)

C4411                             'identifier' : symbol resolves to
                                    displacement register

                                    The identifier is a local symbol that
                                    resolves to a displacement register and
                                    therefore may be used on an operand with
                                    another symbol.

                                    This warning is informational. (1)

C4413                             'function' : redefined, preceding
                                    references may be invalid

                                    The compiler issues this warning if a
                                    function definition changes between
                                    incremental compilations. (1)

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
C4413                             (continued)

                                    The following example illustrates this:

                                    main()
                                    {
                                    func1();
                                    }
                                    int func1()
                                    {
                                    }

                                    If this program is compiled with the /Gi
                                    option, then the  func1  definition is
                                    changed to  long func1, and the compiler
                                    issues this message to warn that calls
                                    to  func1  may be of the wrong type.

                                    Be sure that function calls reference
                                    the correct type. If not, recompile
                                    without /Gi. To avoid the problem
                                    altogether, use function prototypes.

C4414                             'function' : short jump to function
                                    converted to near

                                    Short jumps generate a one-byte
                                    instruction. The instruction includes a
                                    short offset that represents the
                                    distance between the jump and the
                                    function definition. The compiler must
                                    generate a special record for the jump,
                                    which requires the JMP instruction to be
                                    either NEAR or FAR, but not SHORT. The
                                    compiler made the conversion. (3)

                                    For example, the following code causes
                                    this warning:

                                    main()
                                    {
                                        _asm jmp SHORT main
                                    }


D.1.4  Compiler Limits

To operate the Microsoft QuickC Compiler, you must have sufficient disk
space available for the compiler to create temporary files used in
processing. The space required is approximately two times the size of the
source file.

Table D.1 summarizes the limits imposed by the QuickC Compiler. If your
program exceeds one of these limits, an error message will inform you of the
problem.

Table D.1  Limits Imposed by the QuickC Compiler

╓┌──────────────┌────────────────────────┌───────────────────────────────────╖
Program Item   Description              Limit
────────────────────────────────────────────────────────────────────────────
Constants      Maximum size of a        ─
                constant is determined
Program Item   Description              Limit
────────────────────────────────────────────────────────────────────────────
                constant is determined
                by its type; see Table
                4.1, "Basic Data Types,"
                in the C for Yourself
                manual for details

Identifiers    Maximum length of an     31 bytes (additional characters
                identifier               are discarded)

Declarations   Maximum level of         10 levels
                nesting for
                structure/union
                definitions

Preprocessor   Maximum size of a        1,024 bytes
directives     macro definition

                Maximum length of an     256 bytes
                actual preprocessor
Program Item   Description              Limit
────────────────────────────────────────────────────────────────────────────
                actual preprocessor
                argument

                Maximum number of        20 paths
                search paths for
                include files

                Maximum number of macro  30 definitions
                definitions in
                /D options

                Maximum number of        31 parameters
                formal parameters to a
                macro definition

                Maximum length of an     256 bytes
                actual preprocessor
                argument

Program Item   Description              Limit
────────────────────────────────────────────────────────────────────────────

                Maximum level of         32 levels
                nesting for #if, #ifdef,
                and
                #ifndef directives

                Maximum level of         10 levels
                nesting for include
                files, counting the
                open
                source file

                Maximum number of        20 paths
                search paths for
                include files

────────────────────────────────────────────────────────────────────────────



The compiler does not set explicit limits on the length of a string or on
the number and complexity of declarations, definitions, and statements in an
individual function or in a program. If the compiler encounters a function
or program that is too large or too complex to be processed, it produces an
error message to that effect.


D.2  Command-Line Errors

Messages that indicate errors on the command line used to invoke the
compiler have one of the following formats:

    command line error D2xxx: messagetext     Error
    command line warning D4xxx: messagetext      Warning

The compiler issues a warning message and, if possible, continues
processing. In some cases, command-line errors are fatal and the compiler
terminates processing.


D.2.1  Command-Line Error Messages

When the QCL compiler encounters any of the errors listed in this section,
it terminates, producing no object file.

Number                            Command-Line Message
────────────────────────────────────────────────────────────────────────────
D2000                             UNKNOWN ERROR Contact Microsoft Product
                                    Support Services

                                    An unexpected error occurred in the QCL
                                    driver.

                                    Note the circumstances of the error and
                                    notify Microsoft Corporation by
                                    following the instructions in the
                                    Microsoft Product Assistance Request
                                    form at the back of C for Yourself,
                                    included in the QuickC version 2.5
                                    package.

D2002                             conflict in memory-model specification

                                    More than one memory-model specification
                                    was encountered.

                                    The following is an example of a command
                                    line that causes this error:

                                    qcl /AS /AM program.c

                                    If the CL environment variable is
                                    currently set for a memory-model option,
                                    and the CL command is given with another
                                    memory-model option, this error will
                                    occur.

Number                            Command-Line Message
────────────────────────────────────────────────────────────────────────────
D2003                             missing source file name

                                    The QCL command line contains options
                                    but no source-file name.

                                    Note that the QCL command by itself,
                                    with no options or source-file
                                    specification, will print a brief
                                    message about the command-line syntax.

D2008                             limit of 'option' exceeded at 'string'

                                    The limit of the /D, /I, or /U option
                                    was exceeded.

                                    Reduce the number of identifiers you
                                    define or undefine, or the number of
                                    directories to search for include files,
                                    to less than 30 each.

D2011                             only one floating-point option allowed

                                    Both of the floating-point options, /FPi
                                    and /FPi87, were specified.

                                    Specify only one of the floating-point
                                    options.

D2012                             too many linker flags on command line

                                    More than 128 options were passed to the
                                    linker.

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
                                    uppercase letter. If the letter is
                                    lowercase, the option is interpreted as
                                    an incomplete specification of a
                                    customized memory model. For example:

                                    qcl /As

                                    A single lowercase letter can be used
                                    only if it is a segment setup option,
                                    and is used in combination with a
                                    standard memory model.

D2016                             'option1' and 'option2' are incompatible

                                    Two incompatible command-line options
                                    were specified.

Number                            Command-Line Message
────────────────────────────────────────────────────────────────────────────
D2018                             cannot open linker response file

                                    The compiler cannot open a response file
                                    to specify the object-file names for the
                                    linker.

                                    Set the TMP environment variable to a
                                    valid drive and directory, where the
                                    compiler can create a temporary response
                                    file for the linker.

D2019                             cannot overwrite the source/object file,
                                    'filename'

                                    The input-file name was specified as an
                                    output-file name. The compiler will not
                                    allow the source or object file to be
                                    overwritten by one of the compiler
                                    output files.

D2020                             'option' option requires extended
                                    keywords to be enabled (/Ze)

                                    Either the /Gr or /Gc option was
                                    specified on the command line in
                                    combination with the /Za option, which
                                    disables extended keywords.

                                    The /Gr option requires the extended
                                    keyword _fastcall to be enabled, and the
                                    /Gc option requires the extended
                                    keywords _pascal and _fortran. Extended
                                    keywords are enabled by default, or if
                                    the /Ze option is specified.

D2021                             invalid numerical argument 'number'

                                    A number greater than 65,534 was
                                    specified as a numerical argument.

D2022                             cannot open help file, QCL.MSG

                                    The /HELP option was given, but the file
                                    containing the command-line options was
                                    not in the current directory or in any
                                    of the directories specified by the PATH
                                    environment variable.

D2027                             could not execute 'component'

                                    The QCL driver was unable to execute one
                                    of the compiler components or the linker,
                                    possibly for one of the following
                                    reasons:

                                    ■ There is not enough memory to load the
                                    component.

                                    ■ The given component is for the wrong
                                    operating system.

                                    ■ The given component is corrupted.

D2031                             too many flags/files on command line

                                    There are more than 128 arguments
                                    combined from the command line and the
                                    CL environment variable.

                                    Reduce the number of arguments. You can
                                    do this by compiling fewer files at one
                                    time.


D.2.2  Command-Line Warning Messages

The messages listed in this section indicate potential problems, but the
errors do not hinder compilation and linking.

Number                             Command-Line Warning Message
────────────────────────────────────────────────────────────────────────────
D4000                             UNKNOWN WARNING Contact Microsoft
                                    Product Support Services

                                    An unexpected warning occurred in the
                                    QCL driver.

                                    Note the circumstances of the error and
                                    notify Microsoft Corporation by
                                    following the instructions in the
                                    Microsoft Product Assistance Request
                                    form at the back of C for Yourself,
                                    included in the QuickC version 2.5
                                    package.

D4002                             ignoring unknown flag 'option'

                                    The command-line option specified by
                                    option is not recognized by the QCL
                                    driver.

D4003                             different processors selected for code
                                    generation

                                    More than one /Gn option was specified
                                    with conflicting specifications. The
                                    last processor selector on the command
                                    line is used.

                                    For example, the following command line
                                    can cause this error:

                                    qcl /G2 /G0 program.c

                                    In this example, the /G0 processor
                                    selector is used.

D4005                             could not locate 'component'; Please
                                    enter new file name (full path) or
                                    CTRL+C to quit:

                                    The QCL driver was unable to find the
                                    program specified by component in the
                                    search path.

D4007                             /C ignored (must also specify /P or /E
                                    or /EP)

                                    The /C option must be used in
                                    conjunction with one of the preprocessor
                                    output flags (/P, /E, or /EP).

                                    Note that the /C option is different
                                    from the /c option. Arguments to the QCL
                                    driver are case sensitive.

Number                             Command-Line Warning Message
────────────────────────────────────────────────────────────────────────────
D4009                             threshold only for far/huge data,
                                    ignored

                                    The /Gt option cannot be used in memory
                                    models that have near data pointers. It
                                    can be used only in compact, large, and
                                    huge models, or a customized memory
                                    model that uses far data pointers.

D4014                             invalid value 'number1' for 'option';
                                    default 'number2' is used

                                    An invalid value was given for an option
                                    that only accepts certain specific
                                    values. The value actually used by the
                                    compiler is number2.

                                    The following example can cause this
                                    warning:

                                    qcl /Zp3 program.c

                                    In this example, 3 is an invalid value.
                                    In the /Zpn option, the value n of may
                                    be 1, 2, or 4 only.

D4020                             unsupported switch 'option'

                                    The given option is not supported by QCL.


D.3  Run-Time Errors

Run-time error messages fall into four categories:


    1.  Floating-point exceptions generated by the 8087/287 hardware or the
        emulator.

    2.  Error messages generated by the run-time library to notify you of
        serious errors.

    3.  Error messages generated by program calls to error-handling routines
        in the C run-time library─the abort, assert, and perror routines.
        These routines print an error message to standard error output
        whenever the program calls the given routine.

    4.  Error messages generated by calls to math routines in the C run-time
        library. On error, the math routines return an error value, and some
        print a message to the standard error output. See the online help or
        the Microsoft C Run-Time Library Reference (sold separately) for
        descriptions of the math routines and corresponding error messages.



D.3.1  Math Error Messages

The error messages below correspond to floating-point exceptions generated
by the 8087/287/387 hardware. Refer to the Intel documentation for your
processor for a detailed discussion of hardware exceptions. These errors may
also be detected by the floating-point emulator or alternate math library.

Using C's default 8087/287 control-word settings, the following exceptions
are masked and do not occur:

Exception                         Default Masked Action
────────────────────────────────────────────────────────────────────────────
Denormal                          Exception masked

Underflow                         Result goes to 0.0

Inexact                           Exception masked

The following errors do not occur with code generated by the Microsoft
QuickC Compiler or provided in the standard C library:

    Square root
    Stack underflow
    Unemulated

A floating-point error message takes the following general form:

    run-time error M61nn: MATH
    - floating-point error: messagetext

The floating-point exceptions are listed and described below.

Number                            Math Error Message
────────────────────────────────────────────────────────────────────────────
M6101                             invalid

                                    An invalid operation occurred. This
                                    error usually occurs when operating on a
                                    NAN (not a number) or infinity.

                                    This error terminates the program with
                                    exit code 129.

Number                            Math Error Message
────────────────────────────────────────────────────────────────────────────
M6102                             denormal

                                    A very small floating-point number was
                                    generated which may no longer be valid
                                    due to loss of significance. Denormals
                                    are normally masked, causing them to be
                                    trapped and operated upon.

                                    This error terminates the program with
                                    exit code 130.

M6103                             divide by 0

                                    An attempt was made to divide by zero in
                                    a floating-point operation.

                                    This error terminates the program with
                                    exit code 131.

M6104                             overflow

                                    An overflow occurred in a floating-point
                                    operation.

                                    This error terminates the program with
                                    exit code 132.

M6105                             underflow

                                    An underflow occurred in a
                                    floating-point operation. An underflow
                                    is normally masked, with the
                                    underflowing value replaced by 0.0.

                                    This error terminates the program with
                                    exit code 133.

M6106                             inexact

                                    Loss of precision occurred in a
                                    floating-point operation. This exception
                                    is normally masked because almost any
                                    floating-point operation can cause loss
                                    of precision.

                                    This error terminates the program with
                                    exit code 134.

M6107                             unemulated

                                    An attempt was made to execute an
                                    8087/287/387 instruction that is invalid
                                    or is not supported by the emulator.

                                    This error terminates the program with
                                    exit code 135.

M6108                             square root

                                    The operand in a square-root operation
                                    was negative.

                                    This error terminates the program with
                                    exit code 136.

                                    Note that the sqrt function in the C
                                    run-time library checks the argument
                                    before performing the operation and
                                    returns an error value if the operand is
                                    negative.

Number                            Math Error Message
────────────────────────────────────────────────────────────────────────────
M6110                             stack overflow

                                    A floating-point expression caused a
                                    stack overflow on the 8087/287/387
                                    coprocessor or the emulator.
                                    Stack-overflow exceptions are trapped up
                                    to a limit of seven levels in addition
                                    to the eight levels normally supported
                                    by the 8087/287/387 coprocessor.

                                    This error terminates the program with
                                    exit code 138.

M6111                             stack underflow

                                    A floating-point operation resulted in a
                                    stack underflow on the 8087/287/387
                                    coprocessor or the emulator.

                                    This error is often caused by a call to
                                    a long double function that does not
                                    return a value. For example, the
                                    following gives this error when compiled
                                    and run:

                                    long double ld() {};
                                    main ()
                                    {
                                    ld();
                                    }

                                    This error terminates the program with
                                    exit code 139.


D.3.2  Run-Time Error Messages

The following messages may be generated at run time when your program has
serious errors.

A run-time error message takes the following general form:

    run-time error R6nnn- messagetext

Number                            Run-Time Error Message
────────────────────────────────────────────────────────────────────────────
R6000                             stack overflow

                                    The program has run out of stack space.
                                    This can occur when a program uses a
                                    large amount of local data or is heavily
                                    recursive.

                                    Recompile using the /F compiler option,
                                    or relink using the linker /STACK option
                                    to allocate a larger stack.

Number                            Run-Time Error Message
────────────────────────────────────────────────────────────────────────────
R6001                             null pointer assignment

                                    The contents of the NULL segment have
                                    changed in the course of program
                                    execution. The program has written to
                                    this area, usually by an inadvertent
                                    assignment through a null pointer.

                                    The NULL segment is a location in low
                                    memory that is not normally used. The
                                    contents of the NULL segment are checked
                                    upon program termination. If a change is
                                    detected, the error message is printed
                                    and the exit code is 255.

                                    Note that the program can contain null
                                    pointers without causing this error. The
                                    error appears only when the program
                                    writes to memory through a null pointer.
                                    It reflects a potentially serious error
                                    in the program. Although a program that
                                    produces this error may appear to
                                    operate correctly, it may cause problems
                                    in the future and may fail to run in a
                                    different operating environment.

R6002                             floating-point support not loaded

                                    The program needs the floating-point
                                    library, but the library was not loaded.

                                    This occurs in two situations:


    1.  The program was compiled or linked with an option (such as /FPi87)
        that required an 8087/287/387 coprocessor, but the program was run on
        a machine that did not have a coprocessor installed.

            Either recompile the program with the /FPi option or install a
        coprocessor.

    2.  A format string for one of the routines in the printf or scanf
        families contains a floating-point format specification, and there are
        no floating-point values or variables in the program. The compiler
        attempts to minimize the size of a program by loading floating-point
        support only when necessary. Floating-point format specifications
        within format strings are not detected, so the necessary
        floating-point routines are not loaded.

        Use a floating-point argument to correspond to the floating-point
        format specification, or perform a floating-point assignment elsewhere
        in the program. This causes floating-point support to be loaded.

R6003                             integer divide by 0

                                    An attempt was made to divide an integer
                                    by 0, giving an undefined result.


Number                            Run-Time Error Message
────────────────────────────────────────────────────────────────────────────

R6005                             not enough memory on exec

                                    Not enough memory remained to load the
                                    program being spawned.

                                    This error occurs when a child process
                                    spawned by one of the exec library
                                    routines fails and the operating system
                                    could not return control to the parent
                                    process.

R6006                             invalid format on exec

                                    The file to be executed by one of the
                                    exec functions was not in the correct
                                    format for an executable file.

                                    This error occurs when a child process
                                    spawned by one of the exec library
                                    routines fails and the operating system
                                    could not return control to the parent
                                    process.

R6007                             invalid environment on exec

                                    During a call to one of the exec
                                    functions, the operating system found
                                    that the child process was given an
                                    invalid environment block.

                                    This error occurs when a child process
                                    spawned by one of the exec library
                                    routines fails and the operating system
                                    could not return control to the parent
                                    process.

R6008                             not enough space for arguments

                                    There was enough memory to load the
                                    program but not enough room for the argv
                                    vector.

                                    There are several ways to correct this
                                    problem:

                                    ■ Increase the amount of memory
                                    available to the program.

                                    ■ Reduce the number and size of
                                    command-line arguments.

                                    ■ Reduce the environment size, removing
                                    unnecessary variables.

                                    ■ Rewrite either the _setargv or the
                                    _setenvp routine.

R6009                             not enough space for environment

                                    There was enough memory to load the
                                    program but not enough room for the envp
                                    vector.


Number                            Run-Time Error Message
────────────────────────────────────────────────────────────────────────────

R6009                             (continued)

                                    There are several ways to correct this
                                    problem:

                                    ■ Increase the amount of memory
                                    available to the program.

                                    ■ Reduce the number and size of
                                    command-line arguments.

                                    ■ Reduce the environment size, removing
                                    unnecessary variables.

                                    ■ Rewrite either the _setargv or the
                                    _setenvp routine.

R6010                             abnormal program termination

                                    This error is displayed by the abort( )
                                    routine. The program terminates with
                                    exit code 3, unless an abort( ) signal
                                    handler has been defined by using the
                                    signal( ) function.

R6012                             illegal near-pointer use

                                    A null near pointer was used in the
                                    program.

                                    This error occurs only if pointer
                                    checking is in effect. Pointer checking
                                    is set with the /Zr option or the
                                    check_pointer pragma.

R6013                             illegal far-pointer use

                                    An out-of-range far pointer was used in
                                    the program.

                                    This error occurs only if pointer
                                    checking is in effect. Pointer checking
                                    is set with the /Zr option or the
                                    check_pointer pragma.




D.4  QLINK Error Messages

This section lists and describes error messages generated by the QuickC
linker (QLINK), and the special incremental linker (ILINK) that is invoked
when you compile QuickC programs with the /Gi or /Li option. Note that in
most cases, QuickC invokes QLINK if ILINK fails.

Fatal errors cause the linker to stop execution. Fatal error messages have
the following format:

    location  : error L1 xxx : messagetext

For QLINK, fatal error numbers range from L1000 to L1199. For ILINK, the
incremental linker, fatal error numbers range from L1200 to L1249.

Nonfatal errors indicate problems in the executable file. QLINK produces the
executable file. Nonfatal error messages have the following format:

    location  : error L2xxx : messagetext

Nonfatal errors generated by ILINK are numbered from L1250 to L1299.

Warnings indicate possible problems in the executable file. QLINK produces
the executable file. Warnings have the following format:

    location  : warning L4xxx : messagetext

Warning numbers less than L4200 apply to QLINK. Those numbers greater than
L4200 apply to ILINK.

In all three kinds of messages, location is the input file associated with
the error, or  QLINK  if there is no input file. If the input file is an
.OBJ or .LIB file, and a module name is associated with the error, the
module name is enclosed in parentheses, as shown in the following examples:


    SLIBC.LIB(_file)
    MAIN.OBJ(main.c)
    TEXT.OBJ

The following error messages may appear when you link object files.


D.4.1  Fatal Error Messages

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
L1001                             'option' : option name ambiguous

                                    A unique option name did not appear
                                    after the option indicator.

                                    An option is specified by a
                                    forward-slash indicator ( / ) and a name.
                                    The name can be specified by an
                                    abbreviation of the full name, but the
                                    abbreviation must be unambiguous.

                                    For example, many options begin with the
                                    letter N, so the following command
                                    causes this error:

                                    QLINK /N main;

L1002                             'option' : unrecognized option name

                                    An unrecognized name followed the option
                                    indicator.

                                    An option is specified by a
                                    forward-slash indicator ( / ) and a name.
                                    The name can be specified by a legal
                                    abbreviation of the full name.

                                    For example, the following command
                                    causes this error:

                                    QLINK /NODEFAULTLIBSEARCH main

L1003                             /QUICKLIB, /EXEPACK incompatible

                                    The linker cannot be given both the /Q
                                    option and the /E option.

L1004                             'value' : invalid numeric value

                                    An incorrect value appeared for one of
                                    the linker options. For example, a
                                    character string was given for an option
                                    that requires a numeric value.

L1005                             'option' : packing limit exceeds 65536
                                    bytes

                                    The value supplied with the /PACKCODE or
                                    /PACKDATA option exceeds the limit of
                                    65,536 bytes.

L1006                             /STACKSIZE : stack size exceeds 65535
                                    bytes

                                    The value given as a parameter to the
                                    /STACK option exceeds the maximum
                                    allowed.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
L1007                             /OVERLAYINTERRUPT : interrupt number
                                    exceeds 255

                                    A number greater than 255 was given as
                                    the /OVERLAYINTERRUPT option value.

                                    Check The MS-DOS Encyclopedia or other
                                    DOS technical manual for information
                                    about interrupts.

L1008                             /SEGMENTS : segment limit set too high

                                    The /SEGMENTS option specified a limit
                                    on the number of definitions of logical
                                    segments that was impossible to satisfy.

L1009                             'value' : CPARMAXALLOC : illegal value

                                    The value specified in the /CPARMAXALLOC
                                    option was not in the range  1-65,535.

L1020                             no object modules specified

                                    No object-file names were specified to
                                    the linker.

L1021                             cannot nest response files

                                    A response file occurred within a
                                    response file.

L1022                             response line too long

                                    A line in a response file was longer
                                    than 255 characters.

L1023                             terminated by user

                                    CTRL+C was entered.

L1024                             nested right parentheses

                                    The contents of an overlay were typed
                                    incorrectly on the command line.

L1025                             nested left parentheses

                                    The contents of an overlay were typed
                                    incorrectly on the command line.

L1026                             unmatched right parenthesis

                                    A right parenthesis was missing from the
                                    contents specification of an overlay on
                                    the command line.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
L1027                             unmatched left parenthesis

                                    A left parenthesis was missing from the
                                    contents specification of an overlay on
                                    the command line.

L1030                             missing internal name

                                    An IMPORTS statement specified an
                                    ordinal in the module-definition file
                                    without including the internal name of
                                    the routine.

                                    The name must be given if an ordinal is
                                    specified.

L1031                             module description redefined

                                    A DESCRIPTION statement in the
                                    module-definition file was specified
                                    more than once.

L1032                             module name redefined

                                    The module name was specified more than
                                    once (in a NAME or LIBRARY statement).

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

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
L1043                             relocation table overflow

                                    More than 32,768 long calls, long jumps,
                                    or other long pointers appeared in the
                                    program.

                                    Try replacing long references with short
                                    references where possible, and recreate
                                    the object module.

L1044                             imported-name table overflow

                                    The size of the imported-names table
                                    exceeds 65,535 bytes.

                                    An entry in the imported-names table is
                                    made for each new name given in the
                                    IMPORTS section, including the module
                                    names, and consists of the name plus one
                                    byte.

                                    Reduce the number of imports.

L1045                             too many TYPDEF records

                                    An object module contained more than 255
                                    TYPDEF records. These records describe
                                    communal variables.

                                    This error can appear only with programs
                                    produced by the Microsoft FORTRAN
                                    Compiler or other compilers that support
                                    communal variables. (TYPDEF is a DOS
                                    term. It is explained in the Microsoft
                                    MS-DOS Programmer's Reference and in
                                    other reference books on DOS.)

L1046                             too many external symbols in one module

                                    An object module specified more than the
                                    limit of 1,023 external symbols.

                                    Break the module into smaller parts.

L1047                             too many group, segment, and class names
                                    in one module

                                    The program contained too many group,
                                    segment, and class names.

                                    Reduce the number of groups, segments,
                                    or classes. Recreate the object file.

L1048                             too many segments in one module

                                    An object module had more than 255
                                    segments.

                                    Split the module or combine segments.

L1049                             too many segments

                                    The program had more than the maximum
                                    number of segments.

                                    Use the /SEGMENTS option when linking to
                                    specify the maximum legal number of
                                    segments. The range of possible settings
                                    is 0-3,072. The default is 128.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
L1050                             too many groups in one module

                                    QLINK encountered more than 21 group
                                    definitions (GRPDEF) in a single  module.

                                    Reduce the number of group definitions
                                    or split the module. (Group definitions
                                    are explained in the Microsoft MS-DOS
                                    Programmer's Reference and in other
                                    reference books on DOS.)

L1051                             too many groups

                                    The program defined more than 20 groups,
                                    not counting DGROUP.

                                    Reduce the number of groups.

L1052                             too many libraries

                                    An attempt was made to link with more
                                    than 32 libraries.

                                    Combine libraries, or use modules that
                                    require fewer libraries.

L1053                             out of memory for symbol table

                                    The program had more symbolic
                                    information (such as public, external,
                                    segment, group, class, and file names)
                                    than could fit in available memory.

                                    Try freeing memory by linking from the
                                    DOS command level instead of from a
                                    makefile or the QuickC environment.
                                    Otherwise, combine modules or segments
                                    and try to eliminate as many public
                                    symbols as possible.

L1054                             requested segment limit too high

                                    QLINK did not have enough memory to
                                    allocate tables describing the number of
                                    segments requested. The number of
                                    segments is the default of 128 or the
                                    value specified with the /SEGMENTS
                                    option.

                                    Try linking again by using the /SEGMENTS
                                    option to select a smaller number of
                                    segments (for example, use 64 if the
                                    default was used previously), or free
                                    some memory by eliminating resident
                                    programs or shells.

L1056                             too many overlays

                                    The program defined more than 63
                                    overlays.

L1057                             data record too large

                                    An LEDATA record (in an object module)
                                    contained more than 1,024 bytes of data.
                                    This is a translator error. (LEDATA is a
                                    DOS term explained in the Microsoft
                                    MS-DOS Programmer's Reference and in
                                    other DOS reference books.)

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
L1057                             (continued)

                                    Note which translator (compiler or
                                    assembler) produced the incorrect object
                                    module. Please report the circumstances
                                    of the error to Microsoft Corporation by
                                    following the instructions in the
                                    Microsoft Product Assistance Request
                                    form at the back of C for Yourself,
                                    included in the QuickC version 2.5
                                    package.

L1061                             out of memory for /INCREMENTAL

                                    The linker ran out of memory when trying
                                    to process the additional information
                                    required for ILINK support.

                                    Disable incremental linking.

L1062                             too many symbols for /INCREMENTAL

                                    The program had more symbols than can be
                                    stored in the .SYM file.

                                    Reduce the number of symbols or disable
                                    incremental linking.

L1063                             out of memory for CodeView information

                                    The linker was given too many object
                                    files with debug information, and the
                                    linker ran out of space to store them.

                                    Reduce the number of object files that
                                    have full debug information by compiling
                                    some files with either /Zd instead of
                                    /Zi or with no CodeView option at all.

L1064                             out of memory

                                    The linker was not able to allocate
                                    enough memory from the operating system
                                    to link the program.

                                    Reduce the size of the program in terms
                                    of code, data, and symbols.

L1070                             'segment' : segment size exceeds 64K

                                    A single segment contained more than 64K
                                    of code or data.

                                    Try changing the memory model to use far
                                    code or data as appropriate. If the
                                    program is in C, use the /NT option or
                                    the #pragma alloc_text to build smaller
                                    segments.

L1071                             segment _TEXT larger than 65520 bytes

                                    This error is likely to occur only in
                                    small-model C programs, but it can occur
                                    when any program with a segment named
                                    _TEXT is linked using the /DOSSEG option
                                    of the QLINK command.

                                    Small-model C programs must reserve code
                                    addresses 0 and 1; this range is
                                    increased to 16 for alignment purposes.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
L1071                             (continued)

                                    Try compiling and linking using the
                                    medium or large model. If the program is
                                    in C, use the /NT option or the #pragma
                                    alloc_text to build smaller segments.

L1072                             common area longer than 65536 bytes

                                    The program had more than 64K of
                                    communal variables. This error can occur
                                    in a multi-module program when the total
                                    size of communal variables for all
                                    modules exceeds 64K.

L1074                             'group' : group larger than 64K

                                    The given group exceeds the limit of
                                    65,535 bytes.

                                    Reduce the size of the group, or remove
                                    any unneeded segments from the group.
                                    Refer to the map file for a listing of
                                    segments.

L1078                             file-segment alignment too small

                                    The segment-alignment size given with
                                    the /ALIGNMENT:number option was too
                                    small.

                                    Try increasing the number.

L1080                             cannot open list file

                                    The disk or the root directory was full.

                                    Delete or move files to make space.

L1081                             out of space for run file

                                    The disk on which the .EXE file was
                                    being written was full.

                                    Free more space on the disk and restart
                                    the linker.

L1083                             cannot open run file

                                    One of the following has occurred:

                                    ■ The disk or the root directory was
                                    full. Delete or move files to make space.

                                    ■ Another process has opened the file as
                                    a read-only file.

L1084                             cannot create temporary file

                                    The disk or root directory was full.

                                    Free more space in the directory and
                                    restart the linker.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
L1085                             cannot open temporary file

                                    The disk or the root directory was full.

                                    Delete or move files to make space.

L1086                             scratch file missing

                                    An internal error has occurred.

                                    Note the circumstances of the error and
                                    notify Microsoft Corporation by
                                    following the instructions in the
                                    Microsoft Product Assistance Request
                                    form at the back of C for Yourself,
                                    included in the QuickC version 2.5
                                    package.

L1087                             unexpected end-of-file on scratch file

                                    The disk with the temporary
                                    linker-output file was removed.

L1088                             out of space for list file

                                    The disk where the listing file was
                                    being written is full.

                                    Free more space on the disk and restart
                                    the linker.

L1089                             'filename' : cannot open response file

                                    The linker could not find the specified
                                    response file.

                                    Check that the name of the response file
                                    is spelled correctly.

L1090                             cannot reopen list file

                                    The original disk was not replaced at
                                    the prompt.

                                    Restart the linker.

L1091                             unexpected end-of-file on library

                                    The disk containing the library was
                                    probably removed.

                                    Replace the disk containing the library
                                    and run the linker again.

L1092                             cannot open module-definition file

                                    The linker could not open the
                                    module-definition file specified on the
                                    command line or in the response file.

L1093                             'filename' : object not found

                                    One of the object files specified in the
                                    linker input was not found.

                                    Restart the linker and specify the
                                    object file.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
L1094                             'filename' : cannot open file for
                                    writing

                                    The linker was unable to open the file
                                    with write permission.

                                    Check file permissions.

L1095                             'filename' : out of space on file

                                    The linker ran out of disk space for the
                                    specified output file.

                                    Delete or move files to make space.

L1100                             stub .EXE file invalid

                                    The file specified in the STUB statement
                                    is not a valid real-mode executable file.

L1101                             invalid object module

                                    One of the object modules was invalid.

                                    Check that the correct version of the
                                    linker is being used.

                                    If the error persists after recompiling,
                                    note the circumstances of the error and
                                    notify Microsoft Corporation by
                                    following the instructions in the
                                    Microsoft Product Assistance Request
                                    form at the back of C for Yourself,
                                    included in the QuickC version 2.5
                                    package.

L1102                             unexpected end-of-file

                                    An invalid format for a library was
                                    encountered.

L1103                             attempt to access data outside segment
                                    bounds

                                    A data record in an object module
                                    specified data extending beyond the end
                                    of a segment. This is a translator error.

                                    Note which translator (compiler or
                                    assembler) produced the incorrect object
                                    module and the circumstances in which it
                                    was produced. Please report this error
                                    to Microsoft Corporation by following
                                    the instructions in the Microsoft
                                    Product Assistance Request form at the
                                    back of one of your manuals.

L1104                             'filename' : not valid library

                                    The specified file was not a valid
                                    library file. This error causes the
                                    linker to abort.

L1105                             invalid object due to aborted
                                    incremental compile

                                    Delete the object file, recompile the
                                    program, and relink.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
L1113                             unresolved COMDEF; internal error

                                    Note the circumstances of the error and
                                    notify Microsoft Corporation by
                                    following the instructions in the
                                    Microsoft Product Assistance Request
                                    form at the back of one of your manuals.

L1114                             file not suitable for /EXEPACK; relink
                                    without

                                    For the linked program, the size of the
                                    packed load image plus packing overhead
                                    was larger than that of the unpacked
                                    load image.

                                    Relink without the /EXEPACK option.

L1115                             'option' : option incompatible with
                                    overlays

                                    The given option is not compatible with
                                    overlays.

                                    Remove the option or else do not use
                                    overlaid modules.

L1123                             'segment' : segment defined for both 16-
                                    and 32-bit

                                    This error can occur when a segment is
                                    defined as a 32-bit assembly-language
                                    module and as a 16-bit segment in a C
                                    module (16 bits is the default in
                                    QuickC).

                                    Define the segment as either 16-bit or
                                    32-bit.

L1127                             far segment references not allowed with
                                    /TINY

                                    The /TINY option (causing the linker to
                                    produce a .COM file) was used with
                                    modules that have a far segment
                                    reference.

                                    Far segment references are not
                                    compatible with the .COM file format.
                                    High-level-language modules cause this
                                    error (unless the language supports the
                                    tiny memory model). Assembly code
                                    referencing a segment address also
                                    produces this error.

                                    For example:

                                    mov     ax, seg mydata

L1200                             .SYM seek error

                                    The .SYM file could not be properly read.

                                    Try performing a full link with the
                                    /INCREMENTAL option.

L1201                             .SYM read error

                                    The .SYM file could not be properly read.

                                    Try performing a full link with the
                                    /INCREMENTAL option.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
L1202                             .SYM write error

                                    The disk is full, or the .SYM file
                                    already exists and has the READONLY
                                    attribute.

L1203                             map for segment 'segment' exceeds 64K

                                    The symbolic information associated with
                                    the given segment exceeds 64K, which is
                                    greater than ILINK can handle.

L1204                             .ILK write error

                                    The disk is full, or the .SYM file
                                    already exists and has the READONLY
                                    attribute.

L1205                             fix-up overflow at 'offset' in segment
                                    'segment'

                                    A FIXUPP object record with the given
                                    location referred to a target too far
                                    away to be correctly processed.

                                    This message indicates an error in
                                    translation by the compiler or assembler.

L1206                             .ILK seek error

                                    The .ILK file is corrupted.

                                    Perform a full link.

                                    If the error persists, note the
                                    circumstances of the error and notify
                                    Microsoft Corporation by following the
                                    instructions in the Microsoft Product
                                    Assistance Request form at the back of C
                                    for Yourself, included in the QuickC
                                    version 2.5 package.

L1207                             .ILK file too large

                                    The .ILK file is too large for ILINK to
                                    process.

                                    Perform a full link, or reduce the
                                    number of modules in the project. The
                                    size limit for a .ILK file is 64K.

L1208                             invalid .SYM file

                                    The .SYM file is invalid.

                                    Delete the file and perform a full link.

                                    If the problem persists, note the
                                    circumstances of the error and notify
                                    Microsoft Corporation by following the
                                    instructions in the Microsoft Product
                                    Assistance Request form at the back of C
                                    for Yourself, included in the QuickC
                                    version 2.5 package.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
L1209                             .OBJ close error

                                    The operating system returned an error
                                    when ILINK attempted to close one of the
                                    .OBJ files.

L1210                             .OBJ read error

                                    The .OBJ file has an unreadable
                                    structure.

                                    Try rebuilding the .OBJ file and
                                    performing a full link. This message
                                    indicates an error in translation by the
                                    compiler or assembler.

L1211                             too many LNAMEs

                                    An object module has more than 255 LNAME
                                    records.

                                    There may be too many logical segment
                                    definitions with different class names,
                                    or too many group definitions.

L1212                             too many SEGDEFs

                                    The given object module has more than
                                    100 SEGDEF records. A SEGDEF record
                                    defines logical segments.

L1213                             too many GRPDEFs

                                    The given object module has more than 10
                                    GRPDEF records. A GRPDEF record defines
                                    physical segments.

L1214                             too many COMDEFs

                                    The total number of COMDEF and EXTDEF
                                    records exceeded the limit.

                                    The limit on the total of COMDEF records
                                    (communal data variables) and EXTDEF
                                    records (external references) is 1,023.

                                    Use fewer communal or external variables.

L1215                             too many EXTDEFs

                                    The total number of COMDEF and EXTDEF
                                    records exceeded the limit.

                                    The limit on the total of COMDEF records
                                    (communal data variables) and EXTDEF
                                    records (external references) is 1,023.

                                    Use fewer communal or external variables.

L1216                             symbol 'symbol' multiply defined

                                    The given symbol is defined more than
                                    once.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
L1217                             internal error #3

                                    Note the circumstances of the error and
                                    notify Microsoft Corporation by
                                    following the instructions in the
                                    Microsoft Product Assistance Request
                                    form at the back of C for Yourself,
                                    included in the QuickC version 2.5
                                    package.

L1218                             .EXE file too big, change alignment

                                    The segment-sector alignment value in
                                    the .EXE file is too small to express
                                    the size of one of the segments.

                                    Perform a full link and increase the
                                    alignment value with the /ALIGNMENT
                                    option to QLINK.

L1219                             too many library files

                                    The number of libraries (.LIB files)
                                    exceeded ILINK's limit of 32 libraries.

                                    Reduce the number of libraries.

L1220                             seek error on library

                                    A library (.LIB file) is corrupted.

                                    Perform a full link and check the .LIB
                                    files.

L1221                             library close error

                                    The operating system returned an error
                                    when ILINK attempted to close one of the
                                    libraries (.LIB files).

                                    Perform a full link.

                                    If the error persists, note the
                                    circumstances of the error and notify
                                    Microsoft Corporation by following the
                                    instructions in the Microsoft Product
                                    Assistance Request form at the back of C
                                    for Yourself, included in the QuickC
                                    version 2.5 package.

L1222                             error closing .EXE file

                                    The operating system returned an error
                                    when ILINK attempted to close the
                                    exe-cutable file.

                                    Perform a full link.

                                    If the error persists, note the
                                    circumstances of the error and notify
                                    Microsoft Corporation by following the
                                    instructions in the Microsoft Product
                                    Assistance Request form at the back of C
                                    for Yourself, included in the QuickC
                                    version 2.5 package.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
L1223                             cannot update time on 'filename'

                                    The operating system returned an error
                                    when ILINK attempted to update the time
                                    on the given file. Possibly the file had
                                    the READONLY attribute set.

L1224                             invalid flag 'character'

                                    The syntax on the ILINK command line was
                                    incorrect.

L1225                             only one /E command allowed

                                    The ILINK command line contained more
                                    than one /E option specification.

L1226                             terminated by user

                                    CTRL+C or CTRL+BREAK was pressed,
                                    interrupting ILINK.

L1227                             file 'filename' write protected

                                    The .EXE, .ILK, or .SYM file that ILINK
                                    attempted to update has the  READONLY
                                    attribute.

L1228                             file 'filename' missing

                                    ILINK could not find one of the .OBJ
                                    files specified on the command line.

L1229                             invalid .OBJ format

                                    Possible causes of this error include
                                    the following:

                                    ■ Error in compiler translation

                                    ■ Corrupted object file

                                    ■ Invalid object file (possibly text
                                    file)

                                    ■ Missing or unreadable object file

L1230                             invalid 'filename' record: position = '
                                    address'

                                    The given .OBJ file has an invalid
                                    format or one unrecognized by ILINK.
                                    This message may indicate an error in
                                    translation by the compiler or assembler.

L1231                             file 'filename' was not full linked

                                    An .OBJ file specified in the ILINK
                                    command line was not in the list of
                                    files in the most recent full link.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
L1232                             cannot run 'program'

                                    ILINK is unable to execute a program
                                    specified for execution with the /E
                                    command-line option.

                                    Make sure the program is in the search
                                    path and is a .EXE or .COM file.

L1233                             'program' returned 'returncode'

                                    The given program was specified with the
                                    /E option. When ILINK executed this
                                    program, it terminated with the given
                                    nonzero return code. ILINK cannot
                                    continue to the next commands, if any.

L1234                             error creating 'filename'

                                    ILINK was unable to create the batch
                                    file for executing the /E commands.

                                    Make sure the environment variable TMP
                                    or TEMP points to a directory that
                                    exists and can be written to.

L1235                             error writing to 'filename'

                                    An error occurred while ILINK was
                                    writing the batch file for executing the
                                    /E commands.

                                    Make sure the drive for TMP or TEMP or
                                    the current drive has enough free space.

L1236                             file name exceeds 260

                                    A file name can only have 260 characters.

                                    Reduce the length of the file name.

L1237                             /I given, cannot proceed

                                    The use specified in the command-line /I
                                    option is preventing ILINK from calling
                                    QLINK in case of incremental violation.

L1238                             project file missing

                                    No project name was specified on the
                                    ILINK command line.

                                    Check the syntax of the command line.
                                    The project file must be listed after
                                    any options and before an optional
                                    module list.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
L1240                             far references in STRUC fields not
                                    supported

                                    ILINK currently does not support STRUC
                                    definitions like the following:

                                    extrn   func:FAR
                                        rek     STRUC
                                        far_adr DD      func    ;
                                    Initialized far address
                                                                ;   within a
                                    STRUC
                                        rek     ENDS

                                    To use ILINK, change the code to get rid
                                    of the far address within the STRUC.

L1241                             too many defined segments

                                    ILINK has a limit of 255 physical
                                    segments (that is, segments defined in
                                    the object module as opposed to groups
                                    or logical segments).

                                    To use ILINK, reduce the number of
                                    segments.

L1242                             too many modules

                                    The program exceeds ILINK's limit of
                                    1,024 modules.

                                    Reduce the number of modules.

L1243                             cannot link 64K-length segments

                                    The program has a segment larger than
                                    65,535 bytes.

L1244                             cannot link iterated segments

                                    ILINK cannot handle programs linked with
                                    the /EXEPACK linker option.

L1245                             forward reference in STRUCT field not
                                    supported

                                    An .OBJ file contains a near fix-up (one
                                    that does not force a .EXE fix-up) whose
                                    target is a symbol in a .OBJ file which
                                    ILINK cannot find. This is called a
                                    "breaking" error.

                                    Change the code by removing the forward
                                    reference. Do this by reversing the
                                    order of the .OBJ files and performing a
                                    full link.


D.4.2  Error Messages

Number                            Error Message
────────────────────────────────────────────────────────────────────────────
L2000                             imported starting address

                                    The program starting address as
                                    specified in the END statement in a MASM
                                    file is an imported routine.

L2002                             fix-up overflow at 'number' in segment '
                                    segment'

                                    This error message will be followed by
                                    either

                                    target external 'symbol'

                                    or

                                    frm seg name1, tgt seg name2, tgt offset
                                    number

                                    A fix-up overflow is an attempted
                                    reference to code or data that is
                                    impossible because the source location
                                    (where the reference is made "from") and
                                    the target address (where the reference
                                    is made "to") are too far apart. Usually
                                    the problem is corrected by examining
                                    the source location.

                                    Revise the source file and recreate the
                                    object file. (For information about
                                    frame and target segments, see the
                                    Microsoft MS-DOS Programmer's Reference.)

L2003                             intersegment self-relative fix-up at '
                                    number' in segment 'segment'

                                    The program issued a near call or jump
                                    to a label in a different segment.

                                    This error most often occurs when
                                    specifically declaring an external
                                    procedure to be near that should be
                                    declared as far.

L2005                             fix-up type unsupported at 'number' in
                                    segment 'segment'

                                    A fix-up type occurred that is not
                                    supported by the linker. This is
                                    probably a compiler error.

                                    Note the circumstances of the error and
                                    notify Microsoft Corporation by
                                    following the instructions in the
                                    Microsoft Product Assistance Request
                                    form at the back of C for Yourself,
                                    included in the QuickC version 2.5
                                    package.

L2010                             too many fix-ups in LIDATA record

                                    The number of far relocations (pointer-
                                    or base-type) in an LIDATA record
                                    exceeds the limit imposed by the linker.

                                    This is typically produced by the DUP
                                    statement in a .ASM file. The limit is
                                    dynamic: a 1,024-byte buffer is shared
                                    by relocations and the contents of the
                                    LIDATA record; there are eight bytes per
                                    relocation.

                                    Reduce the number of far relocations in
                                    the DUP statement.

Number                            Error Message
────────────────────────────────────────────────────────────────────────────
L2011                             'identifier' : NEAR/HUGE conflict

                                    Conflicting NEAR and HUGE attributes
                                    were given for a communal variable.

L2012                             'arrayname' : array-element size
                                    mismatch

                                    A far communal array was declared with
                                    two or more different array-element
                                    sizes (for instance, an array was
                                    declared once as an array of characters
                                    and once as an array of real numbers).
                                    This error occurs only with the
                                    Microsoft FORTRAN Compiler and any other
                                    compiler that supports far communal
                                    arrays.

L2013                             LIDATA record too large

                                    An LIDATA record contained more than 512
                                    bytes. This is probably a compiler error.

                                    Note the circumstances of the error and
                                    notify Microsoft Corporation by
                                    following the instructions in the
                                    Microsoft Product Assistance Request
                                    form at the back of C for Yourself,
                                    included in the QuickC version 2.5
                                    package.

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

L2024                             'symbol' : special symbol already
                                    defined

                                    The program defined a symbol name
                                    already used by the linker for one of
                                    its own low-level symbols. For example,
                                    the linker generates special symbols
                                    used in overlay support and other
                                    operations.

                                    Choose another name for the symbol to
                                    avoid conflict.

L2025                             'symbol' : symbol defined more than once

                                    The same symbol has been found in two
                                    different object files.

L2026                             entry ordinal 'number', name 'name' :
                                    multiple definitions for same ordinal

                                    The given exported name with the given
                                    ordinal number conflicted with a
                                    different exported name previously
                                    assigned to the same ordinal. Only one
                                    name can be associated with a particular
                                    ordinal.

Number                            Error Message
────────────────────────────────────────────────────────────────────────────
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
                                    STACKSIZE module definition-file
                                    statement, exceeds 64K.

                                    Reduce near-data allocation, HEAPSIZE,
                                    or stack.

L2029                             'symbol' : unresolved external

                                    A symbol was declared to be external in
                                    one or more modules, but it was not
                                    publicly defined in any module or
                                    library.

                                    The name of the unresolved external
                                    symbol is given, then a list of object
                                    modules which contain references to this
                                    symbol. This message and the list are
                                    written to the map file, if one exists.

L2041                             stack plus data exceed 64K

                                    If the total of near data and requested
                                    stack size exceeds 64K, the program will
                                    not run correctly. The linker checks for
                                    this condition only when /DOSSEG is
                                    enabled, which is the case in the
                                    library start-up module for Microsoft
                                    Language Libraries.

                                    This is a fatal QLINK error.

L2043                             Quick library support module missing

                                    The required module QUICKLIB.OBJ was
                                    missing.

                                    The module QUICKLIB.OBJ must be linked
                                    in when creating a Quick library.

L2044                             'symbol' : symbol multiply defined, use
                                    /NOE

                                    The linker found what it interprets as a
                                    public-symbol redefinition, probably
                                    because a symbol defined in a library
                                    was redefined.

                                    Relink with the /NOEXTDICTIONARY (/NOE)
                                    option. If error L2025 results for the
                                    same symbol, then this is a genuine
                                    symbol-redefinition error.

L2045                             'segment' : segment with > 1 class name
                                    not allowed with /INC

                                    The program defined a segment more than
                                    once, giving the segment different class
                                    names. Different class names for the
                                    same segment are not allowed when
                                    linking with the /INCREMENTAL (/INC)
                                    option.

Number                            Error Message
────────────────────────────────────────────────────────────────────────────
L2045                             (continued)

                                    Normally, this error should never appear
                                    unless programming with MASM. For
                                    example, the two MASM statements

                                    _BSS segment 'BSS'
                                    _BSS segment 'DATA'

                                    have the effect of defining two distinct
                                    segments with the same name but
                                    different classes. This situation is
                                    incompatible with the /INCREMENTAL
                                    option.

L2048                             Microsoft Overlay Manager module not
                                    found

                                    Overlays were designated, but the
                                    Microsoft Overlay Manager module was not
                                    found. This module is defined in the
                                    default library.

L2049                             no segments defined

                                    No code or initialized data was defined
                                    in the program. The resulting executable
                                    file is not likely to be valid.

L2050                             16/32-bit attribute conflict - segment:
                                    'segment' in group: 'group'

                                    A group cannot contain both 16-bit and
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
                                    symbol. The error message and the list
                                    are written to the map file, if one
                                    exists.

                                    This error occurs when a prototype for
                                    an externally defined function is
                                    omitted from a program that is compiled
                                    with the _fastcall option (/Gr). The
                                    calling convention for _fastcall does
                                    not match the assumptions that are made
                                    when a prototype is not included for an
                                    external function.

                                    Either include a prototype for the
                                    function, or compile without the /Gr
                                    option.


D.4.3  Warning Messages

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
L4000                             seg disp. included near 'offset' in
                                    segment 'segment'

                                    This is the warning generated by the
                                    /WARNFIXUP option. See Section 5.5.6,
                                    "Fixups," for more information.

L4001                             frame-relative fix-up, frame ignored
                                    near 'offset' in segment 'segment'

                                    A reference was made relative to a
                                    segment that is different from the
                                    target segment of the reference.

                                    For example, if _id1 is defined in
                                    segment _TEXT, the instruction call

                                    DGROUP:_id1

                                    produces this warning. The frame  DGROUP
                                    is ignored, so the linker treats the
                                    call as if it were call

                                    _TEXT:_id1.

L4002                             frame-relative absolute fix-up near '
                                    offset' in segment 'segment'

                                    A reference was made relative to a
                                    segment that was different from the
                                    target segment of the reference, and
                                    both segments are absolute (defined with
                                    AT).

                                    The linker treats the executable file as
                                    if the file were to run in real mode
                                    only.

L4003                             intersegment self-relative fix-up at '
                                    offset' in segment 'segment' pos: '
                                    offset' target external 'name'

                                    The linker found an intersegment
                                    self-relative fixup.

                                    This error may be caused by compiling a
                                    small-model program with the /NT option.

L4004                             possible fix-up overflow at 'offset' in
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

L4010                             invalid alignment specification

                                    The number specified in the /ALIGNMENT
                                    option must be a power of 2 in the range
                                    2-32,768.

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
L4011                             PACKCODE value exceeding 65500
                                    unreliable

                                    The packing limit specified with the
                                    /PACKCODE option was between 65,500 and
                                    65,536. Code segments with a size in
                                    this range are unreliable on some
                                    steppings of the 80286 processor.

L4012                             /HIGH disables /EXEPACK

                                    The /HIGH and /EXEPACK options cannot be
                                    used at the same time.

L4015                             /CODEVIEW disables /DSALLOCATE

                                    The /CODEVIEW and /DSALLOCATE options
                                    cannot be used at the same time.

L4016                             /CODEVIEW disables /EXEPACK

                                    The /CODEVIEW and /EXEPACK options
                                    cannot be used at the same time.

L4017                             'option' : unrecognized option name;
                                    option ignored

                                    An unrecognized character followed the
                                    option indicator ( / ).

                                    An example of this warning is

                                    QLINK /ABCDEF main;

L4019                             /TINY disables /INCREMENTAL

                                    A .COM file always requires a full link
                                    and cannot be incrementally linked.

                                    The /TINY and /INCREMENTAL options are
                                    incompatible. When they are used
                                    together, the linker ignores the
                                    /INCREMENTAL option.

L4020                             'segment' : code-segment size exceeds
                                    65500

                                    Code segments between 65,501 and 65,536
                                    bytes in length may be unreliable on the
                                    Intel 80286 processor.

L4021                             no stack segment

                                    The program did not contain a stack
                                    segment defined with the STACK combine
                                    type.

                                    Normally, every program should have a
                                    stack segment with the combine type
                                    specified as STACK. This message may be
                                    ignored if there is a specific reason
                                    for not defining a stack or for defining
                                    one without the STACK combine type.
                                    Linking with versions of LINK earlier
                                    than 2.40 might cause this message,
                                    since these linkers search libraries
                                    only once.

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
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

L4029                             'segment' : DGROUP segment converted to
                                    type DATA

                                    The given logical segment in the group
                                    DGROUP was defined as a code segment.

                                    DGROUP cannot contain code segments
                                    because the linker always considers
                                    DGROUP to be a data segment. The name
                                    DGROUP is predefined as the automatic
                                    data segment.

                                    The linker converts the named segment to
                                    type "data."

L4030                             'segment' : segment attributes changed
                                    to conform  with automatic data segment

                                    The given logical segment in the group
                                    DGROUP was given sharing attributes
                                    (SHARED/NONSHARED) that differed from
                                    the automatic data attributes as
                                    declared by the DATA instance
                                    specification (SINGLE/MULTIPLE). The
                                    attributes are converted to conform to
                                    those of DGROUP.

                                    The name DGROUP is predefined as the
                                    automatic data segment. DGROUP cannot
                                    contain code segments because the linker
                                    always considers DGROUP to be a data
                                    segment.

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
L4031                             'segment' : segment declared in more
                                    than one group

                                    A segment was declared to be a member of
                                    two different groups.

                                    Correct the source file and recreate the
                                    object files.

L4032                             'segment' : code-group size exceeds
                                    65500 bytes

                                    The given code group has a size between
                                    65,500 and 65,536 bytes, a size that is
                                    unreliable on some steppings of the
                                    80286 processor.

L4034                             more than 239 overlay segments; extra
                                    put in root

                                    The link command line or response file
                                    designated too many segments to go into
                                    overlays.

                                    The limit on the number of segments that
                                    can go into overlays is 239. Segments
                                    starting with the 240th segment are
                                    assigned to the permanently resident
                                    portion of the program (the root).

L4036                             no automatic data segment

                                    The application did not define a group
                                    named DGROUP.

                                    DGROUP has special meaning to the linker,
                                    which uses it to identify the auto-
                                    matic or default data segment used by
                                    the operating system.

                                    This warning will not be issued if DATA
                                    NONE is declared.

L4040                             stack size ignored for /TINY

                                    The linker ignores stack size if the
                                    /TINY option is given and if the stack
                                    segment has been defined in front of the
                                    code segment.

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
                                    the

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
L4045                             (continued)

                                    linker to use an extension other than
                                    .EXE. The output-file specifications and
                                    corresponding extensions are listed
                                    below:

Output -File Specification        Extension
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
                                    compiler #pragma alloc_text( ) and the
                                    program is built as an overlaid program,
                                    you can access the symbolic information
                                    for only the first code segment in
                                    overlay. Symbolic information for the
                                    rest of the code segments in overlay is
                                    not accessible.

L4050                             too many public symbols for sorting

                                    The linker uses the stack and all
                                    available memory in the near heap to
                                    sort public symbols for the /MAP option.
                                    If the number of public symbols exceeds
                                    the space available for them, this
                                    warning is issued; the symbols are not
                                    sorted in the map file, but are listed
                                    in an arbitrary order.

                                    Reduce the number of symbols.

L4051                             'filename' : cannot find library

                                    The linker could not find the specified
                                    library file, possibly for one of the
                                    following reasons:

                                    ■ The specified file does not exist.
                                    Enter the name or full path
                                    specification of a library file.

                                    ■ The LIB environment variable is not
                                    set correctly. Check for typographical
                                    errors, incorrect directory listings,
                                    and the presence of a space, semicolon,
                                    or hidden character at the end of the
                                    line.

                                    ■ An earlier version of the linker is
                                    being run. Check the path environment
                                    variable, and delete or rename earlier
                                    linkers.

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
L4053                             VM.TMP : illegal file name; ignored

                                    VM.TMP appeared as an object-file name.

                                    Rename the file and rerun the linker.

L4054                             'filename' : cannot find file

                                    The linker could not find the specified
                                    file.

                                    Enter a new file name, a new path
                                    specification, or both.

L4201                             fix-up frame relative to an (as yet)
                                    undefined symbol - assuming ok

                                    A reference was made relative to a
                                    segment that is different from the
                                    target segment of the reference.

                                    This error occurs in either of the
                                    following situations:

                                    ■ A frame-relative fixup.

For example, if _id1 is defined in segment _TEXT, the instruction call
DGROUP:_id1 produces this warning. The frame DGROUP is ignored, so the
linker treats the call as if it were call _TEXT:_id1.

                                    ■ A frame-relative absolute fixup.

Both segments are absolute (defined with AT). The linker treats the
executable file as if the file were to run in real mode only.

L4202                             module contains TYPEDEFs - ignored

                                    The .OBJ file contains type definitions.
                                    ILINK ignores these records.

L4203                             module contains BLKDEFs - ignored

                                    The .OBJ file contains records no longer
                                    supported by Microsoft language
                                    compilers.

L4204                             old .EXE free information lost

                                    The free list in the .EXE file has been
                                    corrupted. The free list represents
                                    "holes" in the .EXE file made available
                                    when segments moved to new locations.

L4205                             file 'filename' has no useful
                                    contribution

                                    The given module makes no contribution
                                    to any segment.

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
L4206                             main entry point moved

                                    The program starting address changed.

                                    Try performing a full link.

L4250                             'number' undefined symbols

                                    A number of symbols were referred to in
                                    fix-ups but never publicly defined in
                                    the program. The given number indicates
                                    how many of these undefined symbols were
                                    found.

L4251                             invalid module reference 'library'

                                    The program makes a dynamic-link
                                    reference to a dynamic-link library that
                                    is not recognized or declared by the
                                    .EXE file.

L4252                             file 'filename' does not exist

                                    ILINK could not find the given file.

L4253                             symbol 'symbol' deleted

                                    A symbol was deleted from an
                                    incrementally linked module.

L4254                             new segment definition 'segment'

                                    A segment was added to the program.

L4255                             changed segment definition 'segment'

                                    The segment contribution changed for the
                                    given module. It contributed to a
                                    segment to which it did not previously
                                    contribute, or a segment contribution
                                    was removed.

L4256                             segment 'segment' grew too big

                                    The given segment grew beyond the
                                    padding for the given module.

L4257                             new group definition 'group'

                                    A new group was defined via the GROUP
                                    directive in assembly language or via
                                    the /ND compiler option for a C program.

L4258                             group 'group' changed to include '
                                    segment'

                                    The list of segments included in the
                                    given group changed.

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
L4259                             symbol 'symbol' changed

                                    The given data symbol moved (is now at a
                                    new address).

L4260                             cannot add new communal data symbol '
                                    symbol'

                                    A new communal data symbol was added as
                                    an uninitialized variable in C or with
                                    the COMM feature in MASM.

L4261                             communal variable 'identifier' grew too
                                    big

                                    The given communal variable changed size
                                    too much.

L4262                             invalid symbol type for 'symbol'

                                    A symbol that was previously a code
                                    symbol became a data symbol or vice
                                    versa.

L4263                             new CodeView symbolic information

                                    A module previously compiled without /Zi
                                    was compiled with /Zi.

L4264                             new line-number information

                                    A module previously compiled without /Zi
                                    or /Zd was compiled with /Zi or /Zd.

L4265                             new public CodeView information

                                    New information on public symbol
                                    addresses was added.

L4266                             invalid .EXE file

                                    The .EXE file is invalid.

                                    Make sure the linker is current.

                                    If the error persists, note the
                                    circumstances of the error and notify
                                    Microsoft Corporation by following the
                                    instructions in the Microsoft Product
                                    Assistance Request form at the back of C
                                    for Yourself, included in the QuickC
                                    version 2.5 package.

L4267                             invalid .ILK file

                                    The .ILK file is invalid.

                                    Make sure the linker is current.

                                    If the error persists, note the
                                    circumstances of the error and notify
                                    Microsoft Corporation by following the
                                    instructions in the Microsoft Product
                                    Assistance Request form at the back of C
                                    for Yourself, included in the QuickC
                                    version 2.5 package.

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
L4268                             .SYM/.ILK mismatch

                                    The .SYM and .ILK files are out of sync.

                                    Make sure the linker is current.

                                    If the error persists, note the
                                    circumstances of the error and notify
                                    Microsoft Corporation by following the
                                    instructions in the Microsoft Product
                                    Assistance Request form at the back of C
                                    for Yourself, included in the QuickC
                                    version 2.5 package.

L4269                             library 'library' has changed

                                    The given library has changed.

L4270                             entry table expansion not implemented

                                    The program call tree changed in such a
                                    way that ILINK could not process it
                                    correctly. This problem is caused by new
                                    calls to a routine from another routine
                                    that did not call it before.

                                    Perform a full link.

L4272                             .ILK read error

                                    The .ILK file does not exist or was not
                                    in the expected format.

L4273                             out of memory

                                    ILINK ran out of memory for processing
                                    the input.

                                    If ILINK is being run through the NMAKE
                                    utility, try running ILINK outside of
                                    NMAKE. Otherwise, perform a full link.


D.5  LIB Error Messages

Error messages generated by the Microsoft Library Manager, LIB, have one of
the following formats:

    {filename |  LIB} :  fatal error U1xxx: messagetext
    {filename |  LIB} :  warning U4xxx: messagetext

The message begins with the input-file name (filename), if one exists, or
with the name of the utility. If possible, LIB prints a warning and
continues operation. In some cases, errors are fatal and LIB terminates
processing. LIB may display the following error messages.


D.5.1  LIB Fatal Error Messages

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
U1150                             page size too small

                                    The page size of an input library was
                                    too small, which indicates an invalid
                                    input .LIB file.

U1151                             syntax error : illegal file
                                    specification

                                    A command operator such as a minus sign
                                    (-) was given without a following module
                                    name.

U1152                             syntax error : option name missing

                                    A forward slash ( / ) was given without
                                    an option after it.

U1153                             syntax error : option value missing

                                    The /PAGESIZE option was given without a
                                    value following it.

U1154                             option unknown

                                    An unknown option was given. Currently,
                                    LIB recognizes the /PAGESIZE,
                                    /NOEXTDICTIONARY, /NOIGNORECASE, and
                                    /IGNORECASE options.

U1155                             syntax error : illegal input

                                    The given command did not follow correct
                                    LIB syntax as specified in Chapter 6,
                                    "LIB."

U1156                             syntax error

                                    The given command did not follow correct
                                    LIB syntax as specified in Chapter 6,
                                    "LIB."

U1157                             comma or newline missing

                                    A comma or carriage return was expected
                                    in the command line but did not appear.
                                    This may indicate an inappropriately
                                    placed comma, as in the following line:

                                    LIB math.lib,-mod1+mod2;

                                    The line should have been entered as
                                    follows:

                                    LIB math.lib -mod1+mod2;

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
U1158                             terminator missing

                                    Either the response to the "Output
                                    library" prompt or the last line of the
                                    response file used to start LIB did not
                                    end with a carriage return.

U1161                             cannot rename old library

                                    LIB could not rename the old library to
                                    have a .BAK extension because the .BAK
                                    version already existed with read-only
                                    protection.

                                    Change the protection on the old .BAK
                                    version.

U1162                             cannot reopen library

                                    The old library could not be reopened
                                    after it was renamed to have a .BAK
                                    extension.

U1163                             error writing to cross-reference file

                                    The disk or root directory was full.

                                    Delete or move files to make space.

U1170                             too many symbols

                                    More than 4,609 symbols appeared in the
                                    library file.

U1171                             insufficient memory

                                    LIB did not have enough memory to run.

                                    Remove any shells or resident programs
                                    and try again, or add more memory.

U1172                             no more virtual memory

                                    The current library exceeds the 512K
                                    limit imposed by LIB.

                                    Reduce the number of object modules.

U1173                             internal failure

                                    Note the circumstances of the failure
                                    and notify Microsoft Corporation by
                                    using the Microsoft Product Assistance
                                    Request form at the back of C for
                                    Yourself, included in the QuickC version
                                    2.5 package.

U1174                             mark: not allocated

                                    Note the circumstances of the failure
                                    and notify Microsoft Corporation by
                                    using the Microsoft Product Assistance
                                    Request form at the back of C for
                                    Yourself, included in the QuickC version
                                    2.5 package.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
U1175                             free: not allocated

                                    Note the circumstances of the failure
                                    and notify Microsoft Corporation by
                                    using the Microsoft Product Assistance
                                    Request form at the back of C for
                                    Yourself, included in the QuickC version
                                    2.5 package.

U1180                             write to extract file failed

                                    The disk or root directory was full.

                                    Delete or move files to make space.

U1181                             write to library file failed

                                    The disk or root directory was full.

                                    Delete or move files to make space.

U1182                             'filename' : cannot create extract file

                                    The disk or root directory was full, or
                                    the specified extract file already
                                    existed with read-only protection.

                                    Make space on the disk or change the
                                    protection of the extract file.

U1183                             cannot open response file

                                    The response file was not found.

U1184                             unexpected end-of-file on command input

                                    An end-of-file character was received
                                    prematurely in response to a prompt.

U1185                             cannot create new library

                                    The disk or root directory was full, or
                                    the library file already existed with
                                    read-only protection.

                                    Make space on the disk or change the
                                    protection of the library file.

U1186                             error writing to new library

                                    The disk or root directory was full.

                                    Delete or move files to make space.

U1187                             cannot open VM.TMP

                                    The disk or root directory was full.

                                    Delete or move files to make space.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
U1188                             cannot write to VM

                                    Note the circumstances of the failure
                                    and notify Microsoft Corporation by
                                    using the Microsoft Product Assistance
                                    Request form at the back of C for
                                    Yourself, included in the QuickC version
                                    2.5 package.

U1189                             cannot read from VM

                                    Note the circumstances of the failure
                                    and notify Microsoft Corporation by
                                    using the Microsoft Product Assistance
                                    Request form at the back of C for
                                    Yourself, included in the QuickC version
                                    2.5 package.

U1200                             'name' : invalid library header

                                    The input library file had an invalid
                                    format. It was either not a library file,
                                    or it had been corrupted.

U1203                             'name' : invalid object module near '
                                    location'

                                    The module specified by name was not a
                                    valid object module.

U2152                             'filename' : cannot create listing

                                    The directory or disk was full, or the
                                    cross-reference listing file already
                                    existed with read-only protection.

                                    Make space on the disk or change the
                                    protection of the cross-reference
                                    listing file.

U2155                             'modulename' : module not in library;
                                    ignored

                                    The specified module was not found in
                                    the input library.

U2157                             'filename' : cannot access file

                                    LIB was unable to open the specified
                                    file.

U2158                             'libraryname' : invalid library header;
                                    file ignored

                                    The input library had an incorrect
                                    format.

U2159                             'filename' : invalid format 'hexnumber';
                                    file ignored

                                    The signature byte or word hexnumber of
                                    the given file was not one of the
                                    following recognized types: Microsoft
                                    library, Intel library, Microsoft object,
                                    or XENIX archive.


D.5.2  LIB Warning Messages

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
U4150                             'modulename' : module redefinition
                                    ignored

                                    A module was specified to be added to a
                                    library, but a module with the same name
                                    was already in the library, or a module
                                    with the same name was found more than
                                    once in the library.

U4151                             'name' : symbol defined in module name,
                                    redefinition ignored

                                    The specified symbol was defined in more
                                    than one module.

U4153                             number1 : number2 : page size too small;
                                    ignored

                                    The value specified in the /PAGESIZE
                                    option was less than 16.

U4155                             'modulename' : module not in library

                                    A module specified to be replaced does
                                    not already exist in the library. LIB
                                    adds the module anyway.

U4156                             output-library specification ignored

                                    An output library was specified in
                                    addition to a new library name. For
                                    example, specifying

                                    LIB new.lib+one.obj,new.lst,new.lib

                                    where  new.lib  does not already exist
                                    causes this error.

U4157                             insufficient memory, extended dictionary
                                    not created

                                    Insufficient memory prevented LIB from
                                    creating an extended dictionary. The
                                    library is still valid, but the linker
                                    will not be able to take advantage of
                                    the extended dictionary to speed linking.

U4158                             internal error, extended dictionary not
                                    created

                                    An internal error prevented LIB from
                                    creating an extended dictionary. The
                                    library is still valid, but the linker
                                    will not be able to take advantage of
                                    the extended dictionary to speed linking.


D.6  NMAKE Error Messages

Error messages from the NMAKE utility have one of the following formats:

    {filename |  NMAKE} :  fatal error U1xxx: messagetext
    {filename |  NMAKE} :  warning U4xxx: messagetext

The message begins with the input-file name (filename) and line number, if
one exists, or with the name of the utility.

NMAKE generates the following error messages.


D.6.1  Fatal Error Messages

Number                            Fatal<|>Error<|>Message
────────────────────────────────────────────────────────────────────────────
U1000                             syntax error: ')' missing in macro
                                    invocation

                                    A left parenthesis (( ) appeared without
                                    a matching right parenthesis ( )) in a
                                    macro invocation. The correct form is $(
                                    name), or $n for one-character names.

U1001                             syntax error: illegal character '
                                    character' in macro

                                    A nonalphanumeric character other than
                                    an underscore (_) appeared in a macro.

U1002                             syntax error: invalid macro invocation
                                    '$'

                                    A single dollar sign ($) appeared
                                    without a macro name associated with it.

                                    The correct form is $(name). To use a
                                    dollar sign in the file, type it twice (
                                    $$) or precede it with a caret (^).

U1003                             syntax error: '=' missing in macro

                                    The equal sign (=) was missing in a
                                    macro definition.

                                    The correct form is

                                    name = value

U1004                             syntax error: macro name missing

                                    A macro invocation appeared without a
                                    name.

                                    The correct form is

                                    $(name)

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
U1005                             syntax error: text must follow ':' in
                                    macro

                                    A string substitution was specified for
                                    a macro, but the string to be changed in
                                    the macro was not specified.

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

U1017                             unknown directive '!directive'

                                    The directive specified is not one of
                                    the recognized directives.

U1018                             directive and/or expression part missing

                                    The directive was incompletely specified.

                                    The expression part is required.

U1019                             too many nested if blocks

                                    Note the circumstances of the error and
                                    notify Microsoft Corporation by
                                    following the instructions in the
                                    Microsoft Product Assistance Request
                                    form at the back of C for Yourself,
                                    included in the QuickC version 2.5
                                    package.

U1020                             end-of-file found before next directive

                                    A directive, such as !ENDIF, was missing.

U1021                             syntax error: else unexpected

                                    An !ELSE directive was found that was
                                    not preceded by !IF, !IFDEF, or !IFNDEF,
                                    or the directive was placed in a
                                    syntactically incorrect place.

U1022                             missing terminating character for
                                    string/program invocation : 'char'

                                    The closing double quotation mark (") in
                                    a string comparison in a directive was
                                    missing, or the closing bracket ( ] ) in
                                    a program invocation in a directive was
                                    missing.

U1023                             syntax error present in expression

                                    An expression is invalid.

                                    Check the allowed operators and operator
                                    precedence.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
U1024                             illegal argument to !CMDSWITCHES

                                    An unrecognized command switch was
                                    specified.

U1031                             file name missing (or macro is null)

                                    An include directive was found, but the
                                    name of the file to be included was
                                    missing, or the macro expanded to
                                    nothing.

U1033                             syntax error: 'string' unexpected

                                    The specified string is not part of the
                                    valid syntax for a makefile.

U1034                             syntax error: separator missing

                                    The colon (:) that separates target(s)
                                    and dependent(s) is missing.

U1035                             syntax error: expected ':' or '='
                                    separator

                                    Either a colon (:), implying a
                                    dependency line, or an equal sign (=),
                                    implying a macro definition, was
                                    expected.

U1036                             syntax error: too many names to left of
                                    '='

                                    Only one string is allowed to the left
                                    of a macro definition.

U1037                             syntax error: target name missing

                                    A colon (:) was found before a target
                                    name was found.

                                    At least one target is required.

U1038                             internal error: lexer

                                    Note the circumstances of the error and
                                    notify Microsoft Corporation by
                                    following the instructions in the
                                    Microsoft Product Assistance Request
                                    form at the back of C for Yourself,
                                    included in the QuickC version 2.5
                                    package.

U1039                             internal error: parser

                                    Note the circumstances of the error and
                                    notify Microsoft Corporation by
                                    following the instructions in the
                                    Microsoft Product Assistance Request
                                    form at the back of C for Yourself,
                                    included in the QuickC version 2.5
                                    package.

U1040                             internal error: macro expansion

                                    Note the circumstances of the error and
                                    notify Microsoft Corporation by
                                    following the instructions in the
                                    Microsoft Product Assistance Request
                                    form at the back of C for Yourself,
                                    included in the QuickC version 2.5
                                    package.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
U1041                             internal error: target building

                                    Note the circumstances of the error and
                                    notify Microsoft Corporation by
                                    following the instructions in the
                                    Microsoft Product Assistance Request
                                    form at the back of C for Yourself,
                                    included in the QuickC version 2.5
                                    package.

U1042                             internal error: expression stack
                                    overflow

                                    Note the circumstances of the error and
                                    notify Microsoft Corporation by
                                    following the instructions in the
                                    Microsoft Product Assistance Request
                                    form at the back of C for Yourself,
                                    included in the QuickC version 2.5
                                    package.

U1043                             internal error : temp file limit
                                    exceeded

                                    Note the circumstances of the error and
                                    notify Microsoft Corporation by
                                    following the instructions in the
                                    Microsoft Product Assistance Request
                                    form at the back of C for Yourself,
                                    included in the QuickC version 2.5
                                    package.

U1044                             internal error : too many levels of
                                    recursion building a target

                                    Note the circumstances of the error and
                                    notify Microsoft Corporation by
                                    following the instructions in the
                                    Microsoft Product Assistance Request
                                    form at the back of C for Yourself,
                                    included in the QuickC version 2.5
                                    package.

U1045                             'internal error message'

                                    Note the circumstances of the error and
                                    notify Microsoft Corporation by
                                    following the instructions in the
                                    Microsoft Product Assistance Request
                                    form at the back of C for Yourself,
                                    included in the QuickC version 2.5
                                    package.

U1050                             'user-specified text'

                                    The message specified with the !ERROR
                                    directive is displayed.

U1051                             out of memory

                                    The program ran out of space in the far
                                    heap.

                                    Split the description file into smaller
                                    and simpler pieces.

U1052                             file 'filename' not found

                                    The file was not found.

                                    The file name may not be properly
                                    specified in the makefile.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
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

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
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

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
U1070                             cycle in macro definition 'macroname'

                                    A circular definition was detected in
                                    the macro definition specified.

                                    Circular definitions are invalid.

U1071                             cycle in dependency tree for target '
                                    targetname'

                                    A circular dependency was detected in
                                    the dependency tree for the specified
                                    target.

                                    Circular dependencies are invalid.

U1072                             cycle in include files : 'filename'

                                    A circular inclusion was detected in the
                                    include file specified. The named file
                                    includes a file which eventually
                                    includes the named file.

U1073                             don't know how to make 'targetname'

                                    The specified target does not exist, and
                                    there are no commands to execute or
                                    inference rules given for it.

U1074                             macro definition too long

                                    The value of a macro definition would
                                    overflow an internal buffer.

U1075                             string too long

                                    The text string would overflow an
                                    internal buffer.

U1076                             name too long

                                    The macro name, target name, or
                                    build-command name would overflow an
                                    internal buffer.

                                    Macro names may not exceed 128
                                    characters.

U1077                             'program' : return code 'value'

                                    The given program invoked from NMAKE
                                    failed, returning the error code value.

U1078                             constant overflow at 'directive'

                                    A constant in the directive's expression
                                    was too big.

U1079                             illegal expression : divide by zero
                                    present

                                    An expression tried to divide by zero.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
U1080                             operator and/or operand out of place :
                                    usage illegal

                                    The expression incorrectly used an
                                    operator or operand.

                                    Check the allowed set of operators and
                                    their order of precedence.

U1081                             'program' : program not found

                                    NMAKE could not find the given program
                                    in order to run it.

                                    Make sure that the program is in the
                                    current path and has the correct
                                    extension.

U1082                             'command' : cannot execute command : out
                                    of memory

                                    NMAKE cannot execute the given command
                                    because there is not enough memory.

                                    Free memory and run NMAKE again.

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

U1085                             cannot mix implicit and explicit rules

                                    A regular target was specified along
                                    with the target for a rule.

                                    A rule has the form

                                    .fromext.toext

U1086                             inference rule cannot have dependents

                                    Dependents are not allowed when an
                                    inference rule is being defined.

U1087                             cannot have : and :: dependents for same
                                    target

                                    A target cannot have both a single-colon
                                    (:) and a double-colon (::) dependency.

U1088                             invalid separator '::' on inference rule

                                    Inference rules can use only a
                                    single-colon (:) separator.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
U1089                             cannot have build commands for
                                    pseudotarget 'targetname'

                                    Pseudotargets (for example, .PRECIOUS or
                                    .SUFFIXES) cannot have build commands
                                    specified.

U1090                             cannot have dependents for pseudotarget
                                    'targetname'

                                    The specified pseudotarget (for example,
                                    .SILENT or .IGNORE) cannot have a
                                    dependent.

U1091                             invalid suffixes in inference rule

                                    The suffixes being used in the inference
                                    rule are not part of the .SUFFIXES list.

U1092                             too many names in rule

                                    An inference rule cannot have more than
                                    one pair of extensions as a target.

U1093                             cannot mix special pseudotargets

                                    It is illegal to list two or more
                                    pseudotargets together.

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
                                    exceeded the length limit of 128
                                    characters.

                                    If the command is a QLINK command line,
                                    use a response file.

U1096                             cannot open file 'filename'

                                    The given file could not be opened,
                                    either because the disk was full or
                                    because the file has been set to be
                                    read-only.

Number                            Fatal Error Message
────────────────────────────────────────────────────────────────────────────
U1097                             extmake syntax usage error, no dependent

                                    No dependent was given.

                                    In extmake syntax, the target under
                                    consideration must have either an
                                    implicit dependent or an explicit
                                    dependent.

U1098                             extmake syntax in 'string' incorrect

                                    The part of the string shown contains an
                                    extmake syntax error.


D.6.2  Compilation Error Message

Number                            Compilation Error Message
────────────────────────────────────────────────────────────────────────────
U2001                             no more file handles (too many files
                                    open)

                                    NMAKE could not find a free file handle.

                                    One of the following may be a solution:

                                    ■ Reduce recursion in the build
                                    procedures.

                                    ■ Increase the number of file handles by
                                    changing the FILES setting in CONFIG.SYS
                                    to allow a larger number of open files.
                                    FILES = 20 is the recommended setting.


D.6.3  Warning Messages

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

Number                            Warning Message
────────────────────────────────────────────────────────────────────────────
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
                                    target; therefore the target was
                                    incomplete. Because the target was not
                                    specified in the .PRECIOUS list, NMAKE
                                    has deleted it.

U4009                             duplicate in-line file 'filename'

                                    The given file name is the same as the
                                    name of an earlier in-line file.

                                    Reusing this name caused the earlier
                                    file to be overwritten. This will
                                    probably cause unexpected results.







Glossary
────────────────────────────────────────────────────────────────────────────

The definitions in this glossary are intended primarily for use with this
manual. Neither individual definitions nor the list of terms is
comprehensive.

8087 or 80287 coprocessor
See "math coprocessor."

ANSI (American National Standards Institute)
The national institute responsible for defining programming-language
standards to promote portability of these languages between different
computer systems.

argument
A value passed to a function. In the QuickC Compiler Tool Kit, a string or
value that modifies the effects of a compiler, linker, or utility option.

arithmetic conversion
Conversion operations performed on items of integral and floating-point
types used in expressions.

ASCII (American Standard Code for Information Interchange)
A set of 256 codes that many computers use to represent letters, digits,
special characters, and other symbols. Only the first 128 of these codes are
standardized; the remaining 128 are special characters that are defined by
the computer manufacturer.

base name
The portion of the file name that precedes the file-name extension. For
example,  samp  is the base name of the file  samp.c.

batch file
A text file containing DOS commands that can be invoked from the DOS com-
mand line.

block
A sequence of declarations, definitions, and statements enclosed within
braces ({ }).

canonical frame number
Part of the starting address for a segment. The canonical frame number
specifies the address of the first paragraph in memory that contains one or
more bytes of the segment.

child process
A new process started by a currently running process.

compact memory model
A memory model that allows for more than one data segment and only one code
segment.

constant expression
Any expression that evaluates to a constant. A constant may involve integer
constants, character constants, floating-point constants, enumeration
constants, type casts to integral and floating-point types, and other
constant expressions.

coprocessor
See "math coprocessor."

declaration
A construct that associates the name and the attributes of a variable,
function, or type.

definition
A construct that initializes and allocates storage for a variable or that
specifies the name, formal parameters, body, and the return type of a
function.

dependency line
A line in an NMAKE description file that defines one or more targets and the
files they depend on.

dependents
The files that, when modified, cause NMAKE to update a target.

description block
A dependency line in an NMAKE description file and all the statements
(commands, comments, and directives) that apply to it.

description file
The text file that NMAKE reads to determine what to do. A description file
is sometimes called a makefile.

directive
An instruction to the C preprocessor to perform a specific action on
source-program text before compilation. For the NMAKE utility, an
instruction that gives information about which commands to execute or how to
execute them.

emulator
A floating-point-math package that provides software emulation of the
operations of a math coprocessor.

environment variable
A variable stored in the environment table that provides DOS with
information (where to find executable files and library files, where to
create temporary files, etc.).

errorlevel code
See "exit code."

escape character
A character that, when used immediately preceding a special character,
causes the special character to lose its special meaning.

executable image
The code and data that make up an executable file; that is, a compiled,
linked program that DOS can execute.

exit code
A code returned by a program to DOS indicating whether the program ran
successfully.

expression
A combination of operands and operators that yields a single value.

external level
The parts of a C program outside the function declarations.

formal parameters
Variables that receive values passed to a function when the function is
called.

function
A collection of declarations and statements that has a unique name and can
return a value.

function body
A statement block containing the local variable declarations and statements
of a function.

function call
An expression that passes control and arguments (if any) to a function.

function declaration
A declaration that establishes the name, return type, and storage class of a
function that is defined explicitly elsewhere in the program.

function definition
A definition that specifies a function's name, its formal parameters, the
declarations and statements that define what it does, and (optionally) its
return type and storage class.

function prototype
A function declaration that includes a list of the names and types of formal
parameters in the parentheses following the function name.

global region
The area of a source file between the beginning of the file and the first
curly brace of a function, or between the ending curly brace of a function
and the beginning curly brace of another function. If no edits have occurred
within a global region, incremental compilation is usually possible.

heap
An area of memory set aside for dynamic allocation by a program.

huge memory model
A memory model that allows for more than one code segment. Individual data
items may exceed 64K in length.

include file
A text file that is merged into another text file through use of the
#include preprocessor directive.

incremental compilation
The compilation mode, specified by the /Gi option to the QCL command, in
which only changed functions are recompiled.

incremental linking
The process of linking with ILINK instead of QLINK, in which only changed
modules are relinked. This process requires that the /INC option to the
QLINK command be specified first. The actual use of ILINK is then specified
by the /Gi and /Li options to the QCL command.

inference rule
A template that the NMAKE utility follows to update a target in the absence
of explicit commands.

internal level
The parts of a C program within function declarations.

keyword
A word with a special, predefined meaning for the QuickC compiler.

large memory model
A memory model that allows for more than one segment of code and more than
one segment of data, but with no individual data items exceeding 64K.

level
See "internal level"; "external level."

library
A file containing compiled modules. Also called an object-code library. The
linker extracts modules from the library and combines them with object files
to create executable program files. A load library is a library specified in
the object-files field as input to the linker. The linker links every module
in a load library into the executable file.

load-time-relocation table
A table of references, relative to the start of the program, that are
resolved when the program is loaded into memory.

loop optimization
Optimization that reduces the amount of code executed for each loop
iteration in a program, thereby increasing the speed with which the loop
executes.

lvalue
An expression (such as a variable name) that refers to a memory location and
is required as the left-hand operand of an assignment operation or as the
single operand of a unary operator.

macro
An identifier defined in a #define preprocessor directive to represent
another series of tokens. For the NMAKE utility, a name defined on the
command line or in a description file to represent another string.

math coprocessor
Hardware products that provide very fast and very precise floating-point
number processing. Examples include the Intel 8087 and 80287 coprocessors.

medium memory model
A memory model that allows for more than one code segment and only one data
segment.

member
One of the elements of a structure or union.

memory model
One of the models that specifies how memory is set up for program code and
data. (For descriptions of standard memory models, see "tiny memory model";
"small memory model"; "medium memory model"; "compact memory model"; "large
memory model"; "huge memory model.")

module-description table (MDT)
A file created or updated during incremental compilation that saves
information about changes to a source file.

NAN (not a number)
The 8087 or 80287 coprocessor generates NANs when the result of an operation
cannot be represented in the IEEE format. For example, if you try to add two
positive numbers whose sum is larger than the maximum value permitted by the
processor, the coprocessor returns a NAN instead of the sum.

newline character
The character used to mark the end of a line in a text file, or the escape
sequence (\n) used to represent this character.

null character
The ASCII character encoded as the value 0, represented as an escape
sequence (\0) in a source file.

null pointer
A pointer to nothing, expressed as the value 0.

object code
Relocatable machine code, created by a compiler.

object file
A file containing relocatable machine code, created as the result of
compiling a source file.

object module
A component of a library. An object file becomes an object module when it is
loaded into a library.

operand
A constant or variable value that is manipulated in an expression.

operator
One or more symbols that specify how the operand or operands of an
expression are manipulated.

overlay
Part of a program that is read into memory from disk only if and when it is
needed.

parent process
A process that generates a child process using one of the spawn, exec, or
system families of run-time-library functions.

pointer
A variable containing the address of another variable, function, or
constant.

pragma
An instruction to the compiler to perform an action at compile time.

precedence
The relative position of an operator in the hierarchy that determines the
order in which expressions are evaluated.

preprocessor
A text processor that manipulates the contents of a C source file during the
first phase of compilation.

preprocessor directive
See "directive."

prototype
See "function prototype."

pseudotarget
A target, in an NMAKE description file, that is not a file but is used as a
label for performing a set of commands.

QCL
The command that invokes the Microsoft QuickC compiler to compile and link
programs.

relocatable
Not containing absolute addresses; therefore, eligible to be placed in
memory at any location.

response file
A file that contains command-line arguments or responses to program prompts.
Response files may be used as input to QLINK, LIB, and NMAKE.

run time
The time during which a previously compiled and linked program is executing.


run-time library
A file containing the routines needed to implement certain functions of the
Microsoft QuickC language.

scope
The parts of a program in which an item can be referenced by name. The scope
of an item may be limited to the file, function, block, or function
prototype in which it appears.

segment
An area of memory, less than or equal to 64K long, that usually contains
either code or data. In the tiny memory model, a segment may contain both.

small memory model
A memory model that allows for only one code segment and only one data
segment.

source file
A text file containing C-language code.

stack
A dynamically shrinking and expanding area of memory in which data items are
stored in consecutive order and removed on a last in, first out basis.

stack probe
A short routine called on entry to a function to verify that there is enough
room in the program stack to allocate local variables required by the
function and, if so, to allocate those variables.

static
A storage class that allows variables to keep their values even after the
program exits the block in which the variable is declared.

string
An array of characters, terminated by a null character (\0).

string constant
A string of characters and escape sequences enclosed in double quotation
marks (" "). Every string constant is an array of elements of type char.

subscript expression
An expression, usually used to reference array elements, representing an
address that is offset from a specified base address by a given number of
positions.

target
The object of an NMAKE description block.

tiny memory model
A memory model that allows for only one segment, which contains both code
and data, and that produces a .COM file.

type cast
An operation in which a value of one type is converted to a value of a
different type.

type checking
An operation in which the compiler verifies that the operands of an operator
are valid or that the actual arguments in a function call are of the same
types as the corresponding formal parameters in the function definition and
function prototype.

type declaration
A declaration that defines the name and members of a structure or union
type, or the name and enumeration set of an enumeration type.

unary expression
An expression consisting of a single operand preceded or followed by a unary
operator.

unary operator
An operator that takes a single operand. Unary operators in the C language
are the complement operators (- ~ !), indirection operator (*), increment
(++) and decrement (- -) operators, address-of operator (&), and sizeof
operator. The unary plus operator (+) is legal but has no effect.

unresolved reference
A reference to a global or external variable or function that cannot be
found, either in the modules being linked or in the libraries that are
linked with those modules.

white-space character
A space, tab, line-feed, carriage-return, form-feed, vertical-tab, or
new-line character.

wild card
One of the DOS characters (? and *) that can be expanded into one or more
characters in file-name references.





INDEX
──────────────────────────────────────────────────────────────────────────



{} (braces), NMAKE character
:: (double colon), NMAKE separator
-* (minus sign-asterisk), LIB command symbol
    command-line example
    described
    list
-+ (minus sign-plus sign), LIB command symbol
$@ macro
$* macro
$? macro
$@ macro
$* macro
$? macro
$< macro
$? macro
* (asterisk), LIB command symbol
@ (at sign), NMAKE special character
\ (backslash), NMAKE continuation character
^ (caret), NMAKE escape character
: (colon)
    NMAKE separator
    QLINK command symbol
, (comma)
    LIB command symbol
    QLINK command symbol
- (dash)
    NMAKE special character
    QCL option character
$ (dollar sign), NMAKE macros, used in
! (exclamation point)
    NMAKE directives, used in
    NMAKE special character
/ (forward slash), option character (QCL)
- (minus sign), LIB command symbol
# (number sign), NMAKE comment character
+ (plus sign)
    LIB command symbol
    QLINK command symbol
; (semicolon);LIB command symbol
; (semicolon);NMAKE command separator
; (semicolon);QLINK command symbol
$** macro
80186 processor
80286 processor
8087/80287 coprocessor, suppressing use of
$$@ macro

    A
/A option
    ILINK
    NMAKE
&(ampersand), LIB continuation symbol
/AC option (QCL)
Addresses
    components
    far
    huge
    near
    segment start
AFLAGS, NMAKE macro
/AH option (QCL)
/AL option (QCL)
Alignment types
/AM option (QCL)
Ampersand (&), LIB continuation symbol
Archives, XENIX
Argument-type list
    defined
Arguments
    QLINK options
    variable number of
/AS option (QCL)
AS, NMAKE macro
Assembly-language files, specifying
Asterisk (*), LIB command symbol
/Astring option (QCL)
/AT option (QCL)
At sign (@), NMAKE special character

    B
/BA option (QLINK)
Backslash (\), NMAKE continuation character
Batch files, exit codes
/batch option (QCL)
BEGDATA class name
Braces ({}), NMAKE character
BSS class name

    C
/C option
    ILINK
    NMAKE
/c option
    QCL
/C option
    QCL
Calling conventions
Canonical frame number
    see Frame number; see
Caret (^), NMAKE escape character
Case sensitivity
    QLINK
CC, NMAKE macro
_cdecl keyword
    /Za option, used with
    defined
    include files, used in
CFLAGS, NMAKE macro
char type, changing default
_CHAR_UNSIGNED predefined identifier
check_pointer pragma
check_stack pragma
Class names
!CMDSWITCHES directive (NMAKE)
/CO option (QLINK)
CODE class name
Code segment
colon (:)
    NMAKE separator
Colon (:)
    QLINK command symbol
.COM file, creating
.COM files, creating
Combine types
    COMMON
    PRIVATE
    PUBLIC
    STACK
Comma (, )
    LIB command symbol
    QLINK command symbol
Command line
    error messages
    LIB
    NMAKE
    defining macros on
    described
    rules for
    special characters
    QLINK
Commands
    CL, defined. See QCL command
    NMAKE description file
    QCL, described
Comments
    NMAKE description file
    preserving
COMMON combine type
Compact memory model
    see Memory models, compact; see
Compatibility, floating-point options
Compilation
    conditional
    defined
    error messages
    incremental
    suppressing
Compiler error messages
    categories
    command line
    compilation
    fatal
    warning
Compiler limits
Compiler options
    see QCL options; see
Consistency checking, LIB
Controlling
    data loading
    executable-file loading
    number of segments
    preprocessor
    stack size
Conversion, pointer arguments
Coprocessor, 8087/80287, suppressing use of
/CP option (QLINK)
Cross-reference listing file, LIB
Customized memory models. See Memory models, customized

    D
/D option
    NMAKE
    QCL
Dash (-)
    NMAKE special character
    QCL option character
Data segment
_DATA segment
Data segment
Debugging
    /CODEVIEW option (QLINK)
    /Zi and /Zd options
    incrementally linked programs
    QCL option for
Declarations, maximum level of nesting
Defaults
    LIB responses
    libraries
    ignoring
    suppressing selection
    NMAKE, MAKEFILE
    QLINK responses
Dependency lines
Dependents
    described
    directory searches
    macros for
    specifying
Description blocks
    defined
    described
    inference rules, used with
    multiple for one target
Description files (NMAKE)
    backslash as continuation character
    command lines
    comments
    described
    error handling
    macro definitions in
    omitting commands from
    specifying
DGROUP segments
Directives (NMAKE)
    !CMDSWITCHES
    !ELSE
    !ENDIF
    !ERROR
    !IF
    !IFDEF
    !IFNDEF
    !INCLUDE
    !UNDEF
    defined
    described
    using
/DO option (QLINK)
Document conventions
Dollar sign ($), NMAKE macros
.DOSSEG directive
/DS option (QLINK)
DS register

    E
/E option
    ILINK
    NMAKE
    QCL
    QLINK
80186 processor
80286 processor
8087/80287 coprocessor, suppressing use of
_edata linker variable
!ELSE directive (NMAKE)
Emulator, floating-point
_end linker variable
!ENDIF directive (NMAKE)
Environment variables
    CL
    INCLUDE
    LIB
    LINK
    NO87
    TMP
/EP option (QCL)
!ERROR directive (NMAKE)
Error handling, NMAKE
Error level codes
    see Exit codes; see
Error messages
    compiler
    categories
    command line
    compilation
    correctable
    fatal
    warning
    floating-point exceptions
    ILINK
    LIB
    NMAKE
    QLINK
    run-time
    types of
Escape character, NMAKE
Exceptions, listed
Exclamation point (!)
    NMAKE directives, used in
    NMAKE special character
Executable files
    contents
    creating
    extensions
    loading
    naming
    default
    QCL
    QLINK
    packing
    QLINK, specifying with
    prompts
    response file
Executable image
Execution-time optimization
Exit codes
    DOS batch files, used with
    error level
    NMAKE
    programs for
    using
Expressions
Extensions
    .SUFFIXES list
    default, QLINK
    executable files
    inference rules
    libraries
    LIB, used with
    QLINK, used with
    listing files, defaults for
    map files
    object files

    F
/F option
    NMAKE
    QCL
    QLINK
Far calls
_far keyword
    /Za option, used with
    default addressing conventions
    effects
    data declarations
    function declarations
    library routines, used with
    restriction for in-memory programs
    small-model programs
Far pointers
_fastcall keyword
Fatal error messages
/Fe option (QCL)
File names
    extensions
    path names
    uppercase and lowercase letters in
Files
    see also ; see also
    object
    defined
    RMFIXUP.OBJ
    source, defined
    temporary, space requirements
FIXSHIFT utility
Fixups
Floating-point
    operations
    error messages
    exceptions
    options
/Fm option (QCL)
/Fo option (QCL)
_fortran keyword
Forward slash (/), QCL option character
/FPi option (QCL)
/FPi87 option (QCL)
Frame number
Functions
    arguments, variable number of
    calling conventions
    declaring near and far

    G
/G0 option (QCL)
/G1 option (QCL)
/G2 option (QCL)
/Gc option (QCL)
/Gd option (QCL)
/Ge option (QCL)
/Gi option (QCL)
Global region
Global symbols
    see Public symbols; see
/Gr option (QCL)
Graphics, Hercules
Groups
    DGROUP
    linking procedures, used in
/Gs option (QCL)
/Gt option (QCL)
/Gw option (QCL)
/GW option (QCL)

    H
/HE option (QLINK)
/HELP option
    ILINK
    NMAKE
    QCL
Hercules display adapter
/HI option (QLINK)
Huge arrays
_huge keyword
    default addressing conventions
    described
Huge memory model
    see Memory models; see

    I
/I option
    ILINK
    NMAKE
    QCL
Identifiers
    length, maximum
    predefined
    listed
    MSDOS
    M_I286
    M_I8086
    M_I86
    M_I86xM
    NO_EXT_KEYS
    removing definitions of
    _CHAR_UNSIGNED
!IF directive (NMAKE)
!IFDEF directive (NMAKE)
!IFNDEF directive (NMAKE)
.IGNORE pseudotarget
Ignoring
    case, QLINK
    default libraries, QLINK
ILINK
    command
    error messages
    options
In-line instructions
/INC option (QLINK)
!INCLUDE directive (NMAKE)
INCLUDE environment variable
    NMAKE, used with
    overriding
Include files
    defined
    directory specification
    search paths
    maximum number of
    specifying
Incremental compilation
Incremental linking
Incremental violations
/INF option (QLINK)
Inference rules
    defined
    defining
    described
    precedence
    predefined
Instruction sets
    80186 processor
    80286 processor
    8086/8088 processor
Invoking
    LIB
    command line
    prompts
    response file
    NMAKE
    command line
    response file
    QCL
    QLINK
    command line
    prompts
    response file

    J
/J option (QCL)

    K
Keywords
    defined
    _cdecl
    _far. See _far keyword
    _fastcall
    _fortran
    _huge. See _huge keyword
    _near. See _near keyword
    _pascal

    L
Language extensions
    disabling
    listed
Large memory model
    see Memory models, large; see
/Lc option (QCL)
/Li option (QCL)
/LI option (QLINK)
LIB command symbols
    asterisk (*)
    listed
    minus sign (-)
    minus sign-asterisk (-*)
    minus sign-plus sign (-+)
    plus sign (+)
LIB
    command syntax
    consistency checking
    default responses
    environment variable
    error messages
    extending lines
    input
    libraries
    combining
    creating
    index
    listing files
    modules
    adding and deleting
    adding
    copying
    deleting
    extracting
    moving
    replacing
    operations, order of
    output
    running
    command line
    prompts
    response file
Libraries
    see also LIB; see also
    8087/80287 coprocessor
    automatic object-file processing
    creating
    /Zl, compiling modules with
    described
    defined
    emulator
    Intel
    load
    mLIBC7.LIB
    mLIBCE.LIB
    modifying
    naming
    object code
    regular
    run time, defined
    search
    order
    paths
    specifying
    QCL command line
    QLINK command line
    QLINK prompts
    QLINK response file
    standard
    listed
    overriding
    selecting
    uses of
Limits
    arguments
    compiler
    macros
/link option (QCL)
Linker utility
    see QLINK; see
Linking
    defined
    incremental
Listing files
    LIB
    preprocessed
Load libraries, QLINK
Loop optimization
/Lr option (QCL)

    M
/M option (QLINK)
Macros
    NMAKE
    $$@
    $*
    $**
    $<
    $?
    $@
    AFLAGS
    AS
    CC
    CFLAGS
    defined
    defining
    dependent names, used for
    inherited
    MAKE
    MAKEDIR
    MAKEFLAGS
    modifiers
    precedence of definitions
    precedence
    predefined
    substitution
    target names, used for
    testing definition
    undefined
    user-defined
    using
    preprocessor, limits
MAKE macro
MAKEDIR macro
MAKEFILE
MAKEFLAGS macro
Map files
    /MAP (/M) option (QLINK)
    /MAP (/M) option, (QLINK)
    contents
    creating
    QCL
    QLINK
    extensions
    format
    frame numbers, obtaining
    line numbers
    naming with QLINK
MDT (module-description table)
MDT
    see Module-description table; see
Medium memory model
    see Memory models, medium; see
Memory addresses
    see Addresses; see
Memory models
    compact
    customized
    default libraries
    default
    defined
    described
    huge
    large
    medium
    mixed
    packing segments
    small
    standard
    tiny
    variable-stack files
Microsoft QLINK
    see QLINK; see
Minus sign (-), LIB command symbol
Minus sign-asterisk (-*), LIB command symbol
    command-line example
    described
    list
Minus sign-plus sign (-+), LIB command symbol
mLIBC7.LIB
MLIBC7.LIB
mLIBCE.LIB
MLIBCE.LIB
Module description table (MDT)
Module-description table (MDT)
Mouse
MSDOS predefined identifier
MSHERC.COM
M_I286 predefined identifier
M_I8086 predefined identifier
M_I86 predefined identifier
M_I86xM predefined identifier

    N
/N option (NMAKE)
Names
    executable files
    code segment, changing
    data segment, changing
    DOS file
    executable files
    map files
    object files
Naming conventions
/ND option (QCL)
_near keyword
    /Za option, used with
    default addressing conventions
    effects in
    data declarations
    function declarations
Near pointer
Nesting, declarations
NMAKE directives
    !CMDSWITCHES
    !ELSE
    !ENDIF
    !ERROR
    !IF
    !IFDEF
    !IFNDEF
    !INCLUDE
    !UNDEF
    defined
    described
    listed
    operators
    using
NMAKE options
    /A
    /C
    /D
    /E
    /F
    /HELP
    /I
    /N
    /NOLOGO
    /P
    /Q
    /R
    /S
    /T
    /X
NMAKE
    command line
    commands
    modifying
    specifying
    comments in description file
    controlling
    execution
    input
    output
    dependency lines
    dependents
    defined
    specifying
    description blocks
    description file
    backslash as continuation character
    command line
    described
    error handling
    specifying
    double-colon (::) separator
    error handling
    error messages
    escape character
    exit codes
    in-line files
    inference rules
    defined
    defining
    precedence
    predefined
    using
    invoking
    macro substitution
    macros. See Macros, NMAKE
    options. See NMAKE options
    pseudotargets
    response files
    special characters
    targets
    command line
    defined
    description blocks
    specifying
    wildcards
NO87 environment variable
/NOD option (QLINK)
    default libraries, overriding
    described
/NOF option (QLINK)
/NOG option (QLINK)
/NOI option
    QLINK
/NOL option
    QLINK
/nologo option (QCL)
/NOLOGO option
    ILINK
    NMAKE
/NON option (QLINK)
/NOP option (QLINK)
NO_EXT_KEYS
/NT option (QCL)
NULL constant
Number sign (#), NMAKE comment character

    O
/O option
    QCL
/O option
    QLINK
Object files
    creating
    default
    extensions
    library names
    names
    defined
    inference rules, specified in
    LIB input
    linking
    QCL command line
    QLINK command line
    QLINK prompts
    QLINK response file
    naming
    /Fo options
    default
    RMFIXUP.OBJ
    variable stack
Object modules
    defined
    libraries
    deleting from
    extracting and deleting from
    including in
    QLINK
    listing (LIB)
/Od option (QCL)
/Oi option (QCL)
/Ol option (QCL)
/On option (QCL)
Optimization
    far calls
    QCL options, used for
Options, LIB
    see LIB options; see
Options, QCL
    see QCL options; see
Options, QLINK
    see QLINK options; see
/Ot option (QCL)
Overlays
    debugging
    defined
    interrupt number, setting
    overlay-manager prompts
    QLINK, specifying
    restrictions
    using
/Ox option (QCL)

    P
/P option
    NMAKE
    QCL
pack pragma
/PACKC option (QLINK)
/PACKD option (QLINK)
Packing
    contiguous segments
    executable files, QLINK
    structure members
/PADC option (QLINK)
/PADD option (QLINK)
Palettes
    defined
Paragraph space
_pascal keyword
Path names, QCL command line
/PAU option (QLINK)
Physical coordinates
    defined
Plus sign (+)
    LIB command symbol
    QLINK command symbol
Pointers
    keywords, _near, _far, _huge
    arguments, size conversion
    checking
    null
    subtracting in huge-model programs
Pragmas
    check_pointer
    check_stack
    pack
.PRECIOUS pseudotarget
Preprocessor
    limits
    listings, creating
    predefined identifiers, removing definitions of
    preserving comments
PRIVATE combine type
Processors
    80186
    80286
    8086/8088
    listings, creating
Pseudotargets
PUBLIC combine type
Public symbols
    LIB
    QCL
    QLINK

    Q
/Q option (NMAKE)
QCL command
    batch mode operation
    command line, described
    exit codes
    file names
    path names
QCL options
    /AC
    /AH
    /AL
    /AM
    /AS
    /Astring
    /AT
    /batch
    /c
    /C
    /c
    /C
    /D
    /E
    /EP
    /F
    /Fe
    /Fm
    /Fo
    /FPi
    /FPi87
    /G0
    /G1
    /G2
    /Gc
    /Gd
    /Ge
    /Gi
    /Gr
    /Gs
    /Gt
    /Gw
    /GW
    /HELP
    /I
    /J
    /Lc
    /Li
    /link
    /Lr
    /ND
    /nologo
    /NT
    /O
    /Od
    /Oi
    /Ol
    /On
    /Ot
    /Ox
    /P
    /Ta
    /Tc
    /U and /u
    /V
    /W options
    /X
    /Za
    /Zd
    /Ze
    /Zi
    /Zl
    /Zp
    /Zr
    /Zs
    8086/8088, 80186, or 80286 processors
    assembly language file, specifying
    C calling convention
    case sensitivity of
    CL environment variable, specified in
    code segments, naming
    command line, order on
    constants
    data segments, naming
    data threshold, setting
    debugging, preparing for
    default char type, changing
    executable files, naming
    floating-point
    coprocessor
    default
    emulator
    in-line instructions
    libraries
    format
    FORTRAN/Pascal calling convention
    include files, searching for
    incremental compilation
    language extensions, disabling
    libraries
    floating-point
    omitting
    standard
    listing
    map files, creating
    memory models
    choosing
    compact
    default libraries
    huge
    large
    medium
    small
    tiny
    variable-stack files
    object files, naming
    optimization
    execution time
    maximum
    summary
    turning off
    option characters
    output files, naming
    predefined identifiers, removing
    preprocessor listings
    creating
    naming
    preserving comments
    register calling convention
    source file, specifying
    stack checking
    structures, packing
    syntax checking
    warning levels
QLINK listing files
    see Map files; see
QLINK options
    .COM file
    /BATCH (/BA)
    /CODEVIEW (/CO)
    /CPARMAXALLOC (/CP)
    /DOSSEG (/DO)
    /DSALLOCATE (/DS)
    /EXEPACK (/E)
    /FARCALLTRANSLATION (/F)
    /HELP (/HE)
    /HIGH (/HI)
    /INCREMENTAL (/INC)
    /INFORMATION (/INF)
    /LINENUMBERS (/LI)
    /MAP (/M)
    /NODEFAULTLIBRARYSEARCH (/NOD)
    default libraries, overriding
    described
    /NODEFAULTLIBRARYSEARCH (NOD)
    described
    /NOFARCALLTRANSLATION (/NOF)
    /NOGROUPASSOCIATION (/NOG)
    /NOIGNORECASE (/NOI)
    /NOLOGO (/NOL)
    /NONULLSDOSSEG (/NON)
    /NOPACKCODE (/NOP)
    /OVERLAYINTERRUPT (/O)
    /PACKCODE (/PACKC)
    /PACKCODE (/PACKC). See also /FARCALLTRANSLATION; /NOPACKCODE
    /PACKDATA (/PACKD)
    /PADCODE (/PADC)
    /PADDATA (/PADD)
    /PAUSE (/PAU)
    /SEGMENTS (/SE)
    /STACK (/ST)
    /TINY (/T)
    abbreviations
    batch mode, running in
    case sensitivity
    command line, specifying on
    compatibility, preserving
    controlling process
    data loading
    debugging
    default libraries, ignoring
    displaying with /HELP (/HE)
    environment variable, using
    executable files
    loading
    modifying
    packing
    format
    line numbers, displaying
    linker prompting, preventing
    map file
    numerical arguments
    optimizing
    ordering segments
    overlay interrupt, setting
    paragraph space, allocating
    pausing
    process information, displaying
    QCL, used with
    segments
    stack size, setting
QLINK
    defaults
    command line
    responses
    environment variable
    error messages
    executable file
    exiting
    file-name conventions
    granularity
    libraries
    load
    overriding
    regular
    search path
    map file
    memory requirements
    modules, moving
    operation
    overlays
    running
    described
    prompts
    QCL command line
    QLINK command line
    response file
    segments
    alignment types
    combine types
    fixups
    frame number
    groups
    ordering
    temporary output file

    R
/R option (NMAKE)
Recursion
References
Register calling convention
Registers, DS
Regular libraries, QLINK command line
Relocatable, defined
Relocation information
Response files
    LIB
    NMAKE
    QLINK
Return codes
    see Exit codes; see
RMFIXUP.OBJ file
Run-time error messages

    S
/S option (NMAKE)
/SE option (QLINK)
Search paths
    dependents
    include files
    libraries
    overlays
Segment lists, map files
Segments
    alignment types
    classes
    combining
    data threshold, effect of
    default names
    default
    defined
    maximum number
    order
    packing
    padding
    setup codes
Semicolon
    LIB command symbol
    NMAKE command separator
    QLINK command symbol
sizeof operator
Small memory model
    see Memory models, small; see
Source files, specifying
Special characters, NMAKE
Special keywords, turning off
/ST option (QLINK)
STACK
    class name
    combine type
Stack
    defined
    probes
    size, setting
    variable
Standard output device
Structures, packing
.SUFFIXES pseudotarget
Swapping disks during linking
Switches
    see Options; see
Symbol tables

    T
/T option (QLINK)
/T option
    NMAKE
/Ta option (QCL)
Targets
    default
    defined
    macros for
    specifying
    description blocks
    multiple description blocks
/Tc option (QCL)
Temporary files
_TEXT segment
Tiny memory model
    see Memory models, tiny; see
TMP environment variable
TOOLS.INI file
    !INCLUDE directive, used with
    described
    ignoring inference rules and macros in
    macros
    redefining CC in

    U
/U and /u options (QCL)
!UNDEF directive (NMAKE)
Uppercase letters, use of

    V
/V option (QCL)
/V option
    ILINK
Variable-stack files
Variables, special
    _edata
    _end
Version string, embedding
VM.TMP file

    W
/W options (QCL)
Warning error messages
    controlling
    described
    format
    listed
Wildcards in NMAKE
Windows functions calls

    X
/X option
    ILINK
    NMAKE
    QCL

    Z
/Za option (QCL)
/Zd option (QCL)
/Ze option (QCL)
/Zi option (QCL)
/Zl option (QCL)
/Zp option (QCL)
/Zr option (QCL)
/Zs option (QCL)
```

{% endraw %}
