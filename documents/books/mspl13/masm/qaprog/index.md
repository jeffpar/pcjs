---
layout: page
title: "QuickAssembler 2.01 Programmer's Guide"
permalink: /documents/books/mspl13/masm/qaprog/
redirect_from: /pubs/pc/reference/microsoft/mspl13/masm/qaprog/
---

The following document is from the [Microsoft Programmer's Library 1.3](../../) CD-ROM.

{% raw %}

```none
Microsoft(R) QuickAssembler Programmer's Guide Version 2.01


════════════════════════════════════════════════════════════════════════════


Microsoft(R) QuickAssembler Programmer's Guide Version 2.01


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

    (C)Copyright Microsoft Corporation, 1989. All rights reserved.
    Simultaneously published in the U.S. and Canada.

    Printed and bound in the United States of America.

    Microsoft, MS, MS-DOS, GW-BASIC, QuickC, and XENIX are registered
    trademarks of Microsoft Corporation.

    IBM is a registered trademark of International Business Machines
    Corporation.

    Intel is a registered trademark of Intel Corporation.

    Document No. LN0114-201-R00-0689
    Part No. 06792
    10  9  8  7  6  5  4  3  2  1





────────────────────────────────────────────────────────────────────────────
Table of Contents

Introduction

Chapter 1  The QuickAssembler Interface
        1.1  Creating the Program
        1.2  Building and Running a Program
        1.3  Assembling from the Command Line
        1.4  Choosing C or Assembler Defaults
        1.5  Using the Quick Advisor (Help)
        1.6  Debugging Assembly Code
                1.6.1  Debugging .COM Files
                1.6.2  Specifying Expressions
                1.6.3  Tracing Execution
                1.6.4  Modifying Registers and Flags
        1.7  Viewing a Listing File

Chapter 2  Introducing 8086 Assembly Language
        2.1  Programming the 8086 Family
        2.2  Instructions, Directives, and Operands
                2.2.1  The Name Field
                2.2.2  The Operation Field
                2.2.3  The Operand Field
                2.2.4  The Comment Field
                2.2.5  Entering Numbers in Different Bases
                2.2.6  Line-Continuation Character
        2.3  8086-Family Instructions
                2.3.1  Data-Manipulation Instructions
                    2.3.1.1  The MOV Instruction
                    2.3.1.2  The ADD Instruction
                    2.3.1.3  The SUB Instruction
                    2.3.1.4  The INC and DEC Instructions
                    2.3.1.5  The AND Instruction
                    2.3.1.6  The MUL Instruction
                2.3.2  Control-Flow Instructions
                    2.3.2.1  The JMP Instruction
                    2.3.2.2  The CMP Instruction
                    2.3.2.3  The Conditional Jump Instructions
        2.4  Declaring Simple Data Objects
        2.5  8086-Family Registers
                2.5.1  The General-Purpose Registers
                    2.5.1.1  The AX Register
                    2.5.1.2  The BX Register
                    2.5.1.3  The CX Register
                    2.5.1.4  The DX Register
                2.5.2  The Index Registers
                2.5.3  The Pointer Registers
                    2.5.3.1  The BP Register
                    2.5.3.2  The SP Register
                    2.5.3.3  The IP Register
                2.5.4  The Flags Register
        2.6  Addressing Modes
                2.6.1  Immediate Operands
                2.6.2  Register Operands
                2.6.3  Direct Memory Operands
                2.6.4  Indirect Memory Operands
        2.7  Segmented Addressing and Segment Registers

Chapter 3  Writing Assembly Modules for C Programs
        3.1  A Skeleton for Procedure Modules
                3.1.1  The .MODEL Directive
                3.1.2  The .CODE Directive
                3.1.3  The PROC Directive
                3.1.4  The ENDP and END Statements
        3.2  Instructions Used in This Chapter
        3.3  Decimal Conversion Example
        3.4  Decimal Conversion with Far Data Pointers
                3.4.1  Writing a Model-Independent Procedure
                3.4.2  Accessing Far Data through ES
        3.5  Hexadecimal Conversion Example

Chapter 4  Writing Stand-Alone Assembly Programs
        4.1  A Skeleton for Stand-Alone Programs
                4.1.1  The .MODEL Directive
                4.1.2  The .STACK, .CODE, and .DATA Directives
                4.1.3  The .STARTUP Directive
        4.2  Instructions Used in This Chapter
        4.3  A Program That Says Hello
        4.4  Inside the Stack Segment
        4.5  Inside the Data Segment
        4.6  Inside the Code Segment
        4.7  Making the Program Repeat Itself
        4.8  Creating .COM Files
        4.9  Creating .COM Files with Full Segment Definitions

Chapter 5  Defining Segment Structure
        5.1  Simplified Segment Directives
                5.1.1  Understanding Memory Models
                5.1.2  Specifying DOS Segment Order
                5.1.3  Defining Basic Attributes of the Module
                5.1.4  Defining Simplified Segments
                    5.1.4.1  How to Use Simplified Segments
                    5.1.4.2  How Simplified Segments Are Implemented
                5.1.5  Using Predefined Segment Equates
                5.1.6  Simplified Segment Defaults
                5.1.7  Default Segment Names
        5.2  Full Segment Definitions
                5.2.1  Setting the Segment-Order Method
                5.2.2  Defining Full Segments
                    5.2.2.1  Controlling Alignment with Align Type
                    5.2.2.2  Defining Segment Combinations with Combine Type
                    5.2.2.3  Controlling Segment Structure with Class Type
        5.3  Defining Segment Groups
        5.4  Associating Segments with Registers
        5.5  Initializing Segment Registers
                5.5.1  Initializing the CS and IP Registers
                5.5.2  Initializing the DS Register
                5.5.3  Initializing the SS and SP Registers
                5.5.4  Initializing the ES Register
        5.6  Nesting Segments

Chapter 6  Defining Constants, Labels, and Variables
        6.1  Constants
                6.1.1  Integer Constants
                    6.1.1.1  Specifying Integers with Radix Specifiers
                    6.1.1.2  Setting the Default Radix
                6.1.2  Packed Binary Coded Decimal Constants
                6.1.3  Real-Number Constants
                6.1.4  String Constants
                6.1.5  Determining Floating-Point Format
        6.2  Assigning Names to Symbols
        6.3  Using Type Specifiers
        6.4  Defining Code Labels
                6.4.1  Near-Code Labels
                6.4.2  Anonymous Labels
                6.4.3  Procedure Labels
                6.4.4  Code Labels Defined with the LABEL Directive
        6.5  Defining and Initializing Data
                6.5.1  Variables
                    6.5.1.1  Integer Variables
                    6.5.1.2  Binary Coded Decimal Variables
                    6.5.1.3  String Variables
                    6.5.1.4  Real-Number Variables
                6.5.2  Arrays and Buffers
                6.5.3  Labeling Variables
                6.5.4  Pointer Variables
        6.6  Setting the Location Counter
        6.7  Aligning Data

Chapter 7  Using Structures and Records
        7.1  Structures
                7.1.1  Declaring Structure Types
                7.1.2  Defining Structure Variables
                7.1.3  Using Structure Operands
        7.2  Records
                7.2.1  Declaring Record Types
                7.2.2  Defining Record Variables
                7.2.3  Using Record Operands and Record Variables
                7.2.4  Record Operators
                    7.2.4.1  The MASK Operator
                    7.2.4.2  The WIDTH Operator
                7.2.5  Using Record-Field Operands

Chapter 8  Creating Programs from Multiple Modules
        8.1  Declaring Symbols Public
        8.2  Declaring Symbols External
        8.3  Using Multiple Modules
        8.4  Declaring Symbols Communal
        8.5  Specifying Library Files

Chapter 9  Using Operands and Expressions
        9.1  Using Operands with Directives
        9.2  Using Operators
                9.2.1  Calculation Operators
                    9.2.1.1  Arithmetic Operators
                    9.2.1.2  Structure-Field-Name Operator
                    9.2.1.3  Index Operator
                    9.2.1.4  Shift Operators
                    9.2.1.5  Bitwise Logical Operators
                9.2.2  Relational Operators
                9.2.3  Segment-Override Operator
                9.2.4  Type Operators
                    9.2.4.1  PTR Operator
                    9.2.4.2  SHORT Operator
                    9.2.4.3  THIS Operator
                    9.2.4.4  HIGH and LOW Operators
                    9.2.4.5  SEG Operator
                    9.2.4.6  OFFSET Operator
                    9.2.4.7  .TYPE Operator
                    9.2.4.8  TYPE Operator
                    9.2.4.9  LENGTH Operator
                    9.2.4.10  SIZE Operator
                9.2.5  Operator Precedence
        9.3  Using the Location Counter
        9.4  Using Forward References
                9.4.1  Forward References to Labels
                9.4.2  Forward References to Variables
        9.5  Strong Typing for Memory Operands

Chapter 10  Assembling Conditionally
        10.1  Using Conditional-Assembly Directives
                10.1.1  Testing Expressions with IF and IFE Directives
                10.1.2  Testing the Pass with IF1 and IF2 Directives
                10.1.3  Testing Symbol Definition with IFDEF and IFNDEF Directi
                10.1.4  Verifying Macro Parameters with IFB and IFNB Directives
                10.1.5  Comparing Macro Arguments with IFIDN and IFDIF Directiv
                10.1.6  ELSEIF Directives
        10.2  Using Conditional-Error Directives
                10.2.1  Generating Unconditional Errors with .ERR, .ERR1, and .
                        Directives
                10.2.2  Testing Expressions with .ERRE or .ERRNZ Directives
                10.2.3  Verifying Symbol Definition with .ERRDEF and .ERRNDEF
                        Directives
                10.2.4  Testing for Macro Parameters with .ERRB and .ERRNB
                        Directives
                10.2.5  Comparing Macro Arguments with .ERRIDN and .ERRDIF
                        Directives

Chapter 11  Using Equates, Macros, and Repeat Blocks
        11.1  Using Equates
                11.1.1  Redefinable Numeric Equates
                11.1.2  Nonredefinable Numeric Equates
                11.1.3  String Equates
                11.1.4  Predefined Equates
        11.2  Using Macros
                11.2.1  Defining Macros
                11.2.2  Calling Macros
                11.2.3  Using Local Symbols
                11.2.4  Exiting from a Macro
        11.3  Text-Macro String Directives
                11.3.1  The SUBSTR Directive
                11.3.2  The CATSTR Directive
                11.3.3  The SIZESTR Directive
                11.3.4  The INSTR Directive
                11.3.5  Using String Directives Inside Macros
        11.4  Defining Repeat Blocks
                11.4.1  The REPT Directive
                11.4.2  The IRP Directive
                11.4.3  The IRPC Directive
        11.5  Using Macro Operators
                11.5.1  Substitute Operator
                11.5.2  Literal-Text Operator
                11.5.3  Literal-Character Operator
                11.5.4  Expression Operator
                11.5.5  Macro Comments
        11.6  Using Recursive, Nested, and Redefined Macros
                11.6.1  Using Recursion
                11.6.2  Nesting Macro Definitions
                11.6.3  Nesting Macro Calls
                11.6.4  Redefining Macros
                11.6.5  Avoiding Inadvertent Substitutions
        11.7  Managing Macros and Equates
                11.7.1  Using Include Files
                11.7.2  Purging Macros from Memory

Chapter 12  Controlling Assembly Output
        12.1  Sending Messages to the Standard Output Device
        12.2  Controlling Page Format in Listings
                12.2.1  Setting the Listing Title
                12.2.2  Setting the Listing Subtitle
                12.2.3  Controlling Page Breaks
                12.2.4  Naming the Module
        12.3  Controlling the Contents of Listings
                12.3.1  Suppressing and Restoring Listing Output
                12.3.2  Controlling Listing of Conditional Blocks
                12.3.3  Controlling Listing of Macros

Chapter 13  Loading, Storing, and Moving Data
        13.1  Transferring Data
                13.1.1  Copying Data
                13.1.2  Exchanging Data
                13.1.3  Looking Up Data
                13.1.4  Transferring Flags
        13.2  Converting between Data Sizes
                13.2.1  Extending Signed Values
                13.2.2  Extending Unsigned Values
        13.3  Loading Pointers
                13.3.1  Loading Near Pointers
                13.3.2  Loading Far Pointers
        13.4  Transferring Data to and from the Stack
                13.4.1  Pushing and Popping
                13.4.2  Using the Stack
                13.4.3  Saving Flags on the Stack
                13.4.4  Saving All Registers on the Stack
        13.5  Transferring Data to and from Ports

Chapter 14  Doing Arithmetic and Bit Manipulations
        14.1  Adding
                14.1.1  Adding Values Directly
                14.1.2  Adding Values in Multiple Registers
        14.2  Subtracting
                14.2.1  Subtracting Values Directly
                14.2.2  Subtracting with Values in Multiple Registers
        14.3  Multiplying
        14.4  Dividing
        14.5  Calculating with Binary Coded Decimals
                14.5.1  Unpacked BCD Numbers
                14.5.2  Packed BCD Numbers
        14.6  Doing Logical Bit Manipulations
                14.6.1  AND Operations
                14.6.2  OR Operations
                14.6.3  XOR Operations
                14.6.4  NOT Operations
        14.7  Shifting and Rotating Bits
                14.7.1  Multiplying and Dividing by Constants
                14.7.2  Moving Bits to the Least-Significant Position
                14.7.3  Adjusting Masks
                14.7.4  Shifting Multiword Values

Chapter 15  Controlling Program Flow
        15.1  Jumping
                15.1.1  Jumping Unconditionally
                15.1.2  Jumping Conditionally
                        15.1.2.1  Comparing and Jumping
                        15.1.2.2  Jumping Based on Flag Status
                        15.1.2.3  Testing Bits and Jumping
        15.2  Looping
        15.3  Using Procedures
                15.3.1  Calling Procedures
                15.3.2  Defining Procedures
                15.3.3  Passing Arguments on the Stack
                15.3.4  Declaring Parameters with the PROC Directive
                15.3.5  Using Local Variables
                15.3.6  Creating Locals Automatically
                15.3.7  Variable Scope
                15.3.8  Setting Up Stack Frames
        15.4  Using Interrupts
                15.4.1  Calling Interrupts
                15.4.2  Defining and Redefining Interrupt Routines
        15.5  Checking Memory Ranges

Chapter 16  Processing Strings
        16.1  Setting Up String Operations
        16.2  Moving Strings
        16.3  Searching Strings
        16.4  Comparing Strings
        16.5  Filling Strings
        16.6  Loading Values from Strings
        16.7  Transferring Strings to and from Ports

Chapter 17  Calculating with a Math Coprocessor
        17.1  Coprocessor Architecture
                17.1.1  Coprocessor Data Registers
                17.1.2  Coprocessor Control Registers
        17.2  Emulation
        17.3  Using Coprocessor Instructions
                17.3.1  Using Implied Operands in the Classical-Stack Form
                17.3.2  Using Memory Operands
                17.3.3  Specifying Operands in the Register Form
                17.3.4  Specifying Operands in the Register-Pop Form
        17.4  Coordinating Memory Access
        17.5  Transferring Data
                17.5.1  Transferring Data to and from Registers
                        17.5.1.1  Real Transfers
                        17.5.1.2  Integer Transfers
                        17.5.1.3  Packed BCD Transfers
                17.5.2  Loading Constants
                17.5.3  Transferring Control Data
        17.6  Doing Arithmetic Calculations
        17.7  Controlling Program Flow
                17.7.1  Comparing Operands to Control Program Flow
                        17.7.1.1  Compare
                        17.7.1.2  Compare and Pop
                17.7.2  Testing Control Flags after Other Instructions
        17.8  Using Transcendental Instructions
        17.9  Controlling the Coprocessor

Chapter 18  Controlling the Processor
        18.1  Controlling Timing and Alignment
        18.2  Controlling the Processor
        18.3  Processor Directives

Appendix A  Mixed-Language Mechanics
        A.1  Writing the Assembly Procedure
                A.1.1  Setting Up the Procedure
                A.1.2  Entering the Procedure
                A.1.3  Allocating Local Data (Optional)
                A.1.4  Preserving Register Values
                A.1.5  Accessing Parameters
                A.1.6  Returning a Value (Optional)
                A.1.7  Exiting the Procedure
        A.2  Calls from Modules Using C Conventions
        A.3  Calls from Non-C Modules
        A.4  Calling High-Level Languages from Assembly Language
        A.5  Using Full Segment Definitions

Appendix B  Using Assembler Options with QCL
        B.1  Specifying the Segment-Order Method
        B.2  Checking Code for Tiny Model
        B.3  Selecting Case Sensitivity
        B.4  Defining Assembler Symbols
        B.5  Displaying Error Lines on the Screen
        B.6  Creating Code for a Floating-Point Emulator
        B.7  Creating Listing Files
        B.8  Enabling One-Pass Assembly
        B.9  Listing All Lines of Macro Expansions
        B.10  Creating a Pass 1 Listing
        B.11  Specifying an Editor-Oriented Listing
        B.12  Suppressing Tables in the Listing File
        B.13  Adding a Line-Number Index to the Listing
        B.14  Listing False Conditionals
        B.15  Controlling Display of Assembly Statistics
        B.16  Setting the Warning Level

Appendix C  Reading Assembly Listings
        C.1  Reading Code in a Listing
        C.2  Reading a Macro Table
        C.3  Reading a Structure and Record Table
        C.4  Reading a Segment and Group Table
        C.5  Reading a Symbol Table
        C.6  Reading Assembly Statistics
        C.7  Reading a Pass 1 Listing

Index



────────────────────────────────────────────────────────────────────────────
Introduction


    If you're a C programmer who has been wanting to try out the full power of
    assembly language, this is the product for you.

    Microsoft(R) QuickC(R) with QuickAssembler is a package you install along
    with Microsoft QuickC Version 2.0 in order to create a single powerful
    environment in which you can develop C, assembly, and mixed-language
    programs. What's more, QuickAssembler is an integrated environment,
    containing tools for editing, assembling, compiling, and linking.
    Integrated tools help you achieve faster development of assembly-language
    programs.

    Each MS-DOS(R) and IBM(R) PC-DOS computer is driven by one of the
    processors in the 8086 family. A processor is the central motor of a
    computer. It responds to its own numeric language, called "machine code."
    Assembly language is very close to machine code, but it lets you use
    meaningful keywords and variable names instead of difficult-to-remember
    numeric codes. As a result, assembly language is convenient to use, but
    gives you the ultimate in ability to control hardware and optimize code.

    To support the low-level operations of assembly language, QuickAssembler
    expands the general power of the QuickC environment. Increased debugging
    capabilities let you change flag settings and modify registers──including
    registers of the 8087 math coprocessor. Furthermore, the Quick Advisor
    (the on-line Help system) is expanded to provide help on QuickAssembler
    keywords as well as DOS and ROM-BIOS services.

    A Note about Operating-System Terms

    Microsoft documentation uses the term "OS/2" to refer to the OS/2 system──
    Microsoft Operating System/2 (MS(R) OS/2) and IBM OS/2. Similarly, the
    term "DOS" refers to both the MS-DOS and IBM Personal Computer DOS
    operating systems. The name of a specific operating system is used when it
    is necessary to note features unique to that system.


General Features

    QuickAssembler does not replace the QuickC in-line assembler, which you
    can continue to use inside .C files. The joint QuickC/QuickAssembler
    environment puts both QuickAssember and the in-line assembler at your
    disposal. But Microsoft QuickAssembler supports a number of features
    beyond those supported by the in-line assembler:

    ■  You can write stand-alone assembly programs. These programs begin and
        end with assembly code and do not include the C start-up code. Unlike
        programs written from within C modules, useful stand-alone assembly
        programs can be 1K (kilobyte) or even smaller.

    ■  You can use the assembler's rich set of macro-definition capabilities,
        which go far beyond the macro capabilities supported by C. An
        assembly-language macro can handle variable parameter lists, recursion,
        and repeated operations. These macros are roughly as powerful and
        flexible as procedure calls, but execute faster.

    ■  Your assembly modules can be shared by many different programs. Since
        an assembly-language module is in its own file, you can write the
        module once and link it to any program you want.

    ■  QuickAssembler is a full implementation of 8086 assembly language. You
        can use the full set of the Microsoft Macro Assembler 5.1 directives
        and operators.

    In addition, QuickAssembler provides the best set of keywords yet
    available for simplifying tedious programming tasks, such as initializing
    registers at the beginning of a program or determining how to access
    parameters on the stack. (Part 1 of this manual focuses on the use of
    these keywords.)

    QuickAssembler for QuickC is a DOS-based product, and it does not include
    the following extensions to 8086 assembly language:

    ■  80386 extended registers and special instructions

    ■  80387 extended instructions

    ■  OS/2 protected-mode operation

    QuickAssembler does support the 80286 extended instruction set, as well as
    the 8087 and 80287 coprocessors. The 80386 processor can run all
    QuickAssembler programs; the only limitation is that QuickAssembler does
    not support extended capabilities of the 80386.

    The Microsoft Macro Assembler supports 80386 extended features and
    development of protected-mode applications.


System Requirements

    In addition to a computer with one of the 8086-family processors, you must
    have Version 2.1 or later of the MS-DOS or IBM PC-DOS operating system.
    You can also run QuickAssembler in the 3.x compatibility box of OS/2
    systems. Your computer system must have approximately 512K of memory. A
    hard-disk setup is strongly recommended.

    To enable the use of QuickAssembler, you should first choose Full Menus
    from the Options menu.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  The 8086 family is a set of processors that all support the same
    basic instruction set. This family includes the 8088, 8086, 80188, 80186,
    80286, and 80386 chips. All of these processors support the entire
    instruction set of the 8086 itself; some support additional instructions.
    Rather than list the entire set of chips, this manual often discusses the
    core instruction set by referring only to the 8086.
    ──────────────────────────────────────────────────────────────────────────


Installing QuickAssembler

    If you purchased QuickC and QuickAssembler together, the installation
    procedure described in Up and Running automatically installs both
    products. A few of the questions shown in that booklet are reworded in the
    install program to make more sense for the joint QuickC/QuickAssembler
    installation.

    If you purchased QuickAssembler separately, run the installation program
    on the QuickAssembler distribution disks. The first screen asks you the
    following questions:

    Source of assembler files [A:]:
    Installing on a hard disk drive [Y]:
    Copy QuickAssembler documentation files [Y]:
    Copy sample Assembler programs [N]:

    Do you want to change any of the above options? [N]

    As with the QuickC installation program, the default responses are
    indicated in brackets ([]). Each of these questions is accompanied by an
    explanation at the bottom of the screen. To accept a default response,
    press ENTER. If you enter an incorrect response, just answer no (N) to the
    last question.

    The second screen asks you the following questions:

    Directory for QuickC executable files [C:\QC2\BIN]:
    Directory for Sample files [C:\QC2\SAMPLES]:

    Do you want to change any of the above options? [N]

    The QuickAssembler installation program replaces some of the existing
    QuickC files. QuickAssembler must be installed in the directory that
    currently contains QC.EXE. Make sure you enter the location of your
    current QuickC executable files. If you're not sure, press CTRL+C to stop
    the installation and examine your setup.


Getting Information about Assembly Language

    The combined paper and on-line documentation with QuickAssembler gives you
    a complete reference to the language. This manual provides three basic
    kinds of information:

    ■  Part 1, "Introducing QuickAssembler," provides a basic introduction to
        programming in assembly language. Chapter 1 describes how the
        interface changes when you install QuickAssembler. Chapter 2 gives a
        general background to 8086 architecture and assembly-language concepts.
        Chapters 3 and 4 demonstrate how to use special QuickAssembler
        keywords to simplify programming. Even if you have used assembly
        language before, you should take a look at these chapters.

    ■  Parts 2 ("Using Directives") and 3 ("Using Instructions") give a
        reference to the use of directives and instructions. This material is
        much less tutorial than Part 1, but it does illustrate the use of each
        directive and instruction in context.

    ■  The appendixes explain low-level mixed-language techniques, the use of
        assembly options with the QCL driver, and how to read listing files.

    This manual does not teach systems programming or advanced programming
    techniques. Even with the tutorial material provided in this manual, you
    may want to purchase other books on assembly language, such as the ones
    listed in the next section.

    In addition, this manual assumes you understand certain basic concepts of
    programming, such as modules, variables, and pointers. If you need more
    background in one of these topics, you should first read the appropriate
    sections in C For Yourself. Part 1 of this manual often explains concepts
    by comparing a language feature to C.

    The Quick Advisor (the on-line Help system) is an integral part of the
    overall documentation. As explained in Section 1.5, "Using the Quick
    Advisor (Help)," QuickAssembler provides help on all keywords──in
    particular, you get instant reference information on each instruction,
    including timing, encoding, and flag settings. The Help Contents and Index
    screens also provide information on each DOS service.


Books on Assembly Language

    The following books may be useful in learning to program in assembly
    language:

    Duncan, Ray. Advanced MS-DOS. Redmond, WA: Microsoft Corporation, 1986.

    An intermediate book on writing C and assembly-language programs that
    interact with MS-DOS (includes DOS and BIOS function descriptions)

    Jourdain, Robert. Programmer's Problem Solver for the IBM PC, XT and AT.
    New York: Brady Communications Company, Inc., 1986.

    Reference of routines and techniques for interacting with hardware
    devices through DOS, BIOS, and ports (high-level routines in BASIC and
    low- or medium-level routines in assembler)

    Lafore, Robert. Assembly Language Primer for the IBM PC & XT. New York:
    Plume/Waite, 1984.

    An introduction to assembly language, including some information on DOS
    function calls and IBM-type BIOS

    Metcalf, Christopher D., and Sugiyama, Marc B. COMPUTE!'s Beginner's Guide
    to Machine Language on the IBM PC & PCjr. Greensboro, NC: COMPUTE!
    Publications, Inc., 1985.

    Beginning discussion of assembly language, including information on the
    instruction set and MS-DOS function calls

    Microsoft MS-DOS Programmer's Reference. Redmond, WA: Microsoft Press,
    1986, 1987.

    Reference manual for MS-DOS

    Morgan, Christopher, and the Waite Group. Bluebook of Assembly Routines
    for the IBM PC. New York: New American Library, 1984.

    Sample assembly routines that can be integrated into assembly or
    high-level-language programs

    Norton, Peter. The Peter Norton Programmer's Guide to the IBM PC. Redmond,
    WA: Microsoft Press, 1985.

    Information on using IBM-type BIOS and MS-DOS function calls

    Scanlon, Leo J. IBM PC Assembly Language: A Guide for Programmers. Bowie,
    MD: Robert J. Brady Co., 1983.

    An introduction to assembly language, including information on DOS
    function calls

    Schneider, Al. Fundamentals of IBM PC Assembly Language. Blue Ridge
    Summit, PA: Tab Books Inc., 1984.

    An introduction to assembly language, including information on DOS
    function calls

    These books are listed for your convenience only. Microsoft Corporation
    does not endorse these books (with the exception of those published by
    Microsoft) or recommend them over others on the same subjects.


Document Conventions

    The following document conventions are used throughout this manual:

    Example of          Description
    Convention
    ──────────────────────────────────────────────────────────────────────────
    SAMPLE2.ASM         Uppercase letters indicate file names, segment names,
                        registers, and terms used at the DOS-command level.

    .MODEL              Boldface type indicates assembly-language directives,
                        instructions, type specifiers, and predefined equates,
                        as well as keywords in other programming languages.

    placeholders        Italic letters indicate placeholders for information
                        you must supply, such as a file name. Italics are also
                        occasionally used for emphasis in the text.

    target              This font is used to indicate example programs, user
                        input, and screen output.

    SHIFT               Names of keys on the keyboard appear in small capital
                        letters. Notice that a plus (+) indicates a
                        combination of keys. For example, CTRL+E means to hold
                        down the CTRL key while pressing the E key.

    [[argument ]]       Items inside double square brackets are optional.

    {register | memory} Braces and a vertical bar indicate a choice between
                        two or more items. You must choose one of the items
                        unless double square brackets surround the braces.

    Repeating           Three dots following an item indicate that more items
    elements...         having the same form may appear.

    Program             A column of three dots tells you that part of a
    .                   program has been intentionally omitted.
    .
    .
    Fragment

    "processor flag"    The first time a new term is defined, it is enclosed
                        in quotation marks.

    Color Graphics      The first time an acronym is used, it is spelled out.
    Adapter (CGA)


Getting Assistance or Reporting Problems

    If you need help or feel you have discovered a problem in the software,
    please provide the following information to help us locate the problem:

    ■  The version of DOS you are running (use the DOS VER command)

    ■  Your system configuration (the type of machine you are using, its total
        memory, and its total free memory at assembler execution time, as well
        as any other information you think might be useful)

    ■  The assembly command line used (or the link command line if the problem
        occurred during linking)

    ■  Any object files or libraries you linked with if the problem occurred
        at link time

    If your program is very large, please try to reduce its size to the
    smallest possible program that still produces the problem.

    Use the Product Assistance Request form at the back of this manual to send
    this information to Microsoft.

    If you have comments or suggestions regarding any of the manuals
    accompanying this product, please indicate them on the Document Feedback
    card at the back of this manual.

    If you are not already a registered QuickAssembler owner, you should fill
    out and return the Registration Card. This enables Microsoft to keep you
    informed of updates and other information about the assembler.



────────────────────────────────────────────────────────────────────────────
PART 1:  Using Assembler Programs


    Part 1 of the Programmer's Guide (comprising Chapters 1-4) will help
    you start using assembly language quickly.

    Chapter 1 summarizes all the differences between the standard QuickC
    interface and the expanded QuickC/QuickAssembler interface. Read this
    chapter to learn how to enter, assemble, and run an assembly-language
    program.

    Read Chapter 2 if you are new to 8086 assembly language or need to review
    basic concepts. Chapter 2 explains the architecture of 8086-family
    processors, as well as how to write simple code and data statements.

    Whether or not you're new to assembly language, you'll want to read
    Chapters 3 and 4, which show the use of QuickAssembler's simplified
    keywords in useful examples. These keywords make programming easier.




────────────────────────────────────────────────────────────────────────────
Chapter 1:  The QuickAssembler Interface


    After you install Microsoft QuickC with QuickAssembler, you'll have a
    single environment for both compiling and assembling. You can create C
    programs, assembly-language programs, and programs that combine both
    languages.

    The environment completely supports the standard QuickC features,
    including all editing commands as well as mouse, keyboard, and menu
    techniques. This manual assumes you have read QuickC Up and Running and
    have used the on-line Help system to learn how to use each menu. Refer to
    these sources of information for basic help on using the interface.

    The combined QuickC/QuickAssembler interface provides some new menu
    selections and dialog boxes to support development of assembly-language
    programs. This chapter describes the new features, focusing on areas where
    the interface adds new functionality: creating a program, building a
    program, getting help, debugging, and viewing a listing file. To enable
    all the features described in this chapter, you should first choose Full
    Menus from the Options menu if you are not already using full menus.


1.1  Creating the Program

    Start the environment with the QC command, regardless of whether you're
    creating a C or assembly-language source file. You can type QC by itself
    or QC followed by the name of a file.

    By default, QC assumes that a file name on the command line has a .C
    extension. You'll learn how to change this behavior later (by choosing
    Display from the Options menu), but for now, make sure you include the
    .ASM file extension when you want to create an assembly-language module:

    QC SAMPLE.ASM

    If the file is new, the QuickC/QuickAssembler environment asks you if you
    would like to create the file.

    Once inside the QuickC/QuickAssembler environment, you can enter a program
    by using all the QuickC editing commands. You can get started by entering
    the following stand-alone assembly program. By default, QuickAssembler is
    not case sensitive (except for external symbols), so you can enter
    statements as uppercase or lowercase.

                .MODEL  small
                .STACK
                .CODE
                .STARTUP
                mov   ah,2
                mov   dl,7
                int   21h
                mov   ax,4c00h
                int   21h
                END

    Enter the program above in a file with a .ASM extension. No other modules
    and no special assembly or link flags are required. When run, the program
    beeps and exits.

    For now, you may just want to run the program to see how the
    QuickC/Quick-Assembler environment works. However, you can read the rest
    of this section to get a brief explanation of why the program works.

    The four statements are directives──nonexecutable statements that give
    basic structure to the program by declaring a memory model, stack segment,
    and code segment.

    The next five statements perform the actions of the program. The first
    three set up a call to a DOS function that prints the beep character. (The
    QuickAssembler Advisor, which you access through the Help menu, provides
    information on each DOS function.) The first three statements are shown
    below, with comments:

                mov   ah,2     ; Move 2 to AH (select Print function)
                mov   dl,7     ; Move 7 to DL (select Beep character)
                int   21h      ; Call DOS function

    The next two statements, shown below with comments, call DOS to exit
    gracefully. Unlike C programs, assembly-language programs must make an
    explicit function call to exit, or else cause the processor to execute
    meaningless instructions beyond the end of the program.

                mov   ax,4c00h ; Move 4c00h to AX (select Exit
                                ;   function and 0 return code)
                int   21h      ; Call DOS function

    The last statement ends the module.


1.2  Building and Running a Program

    Once inside the QuickC/QuickAssembler environment, you build an
    assembly-language program the same way you build a C program. Choose the
    Go command from the Run menu, or press the F5 key.

    The environment assembles and links the program if it needs to be built.
    Then, if there are no errors, it executes the program. You can also
    assemble a program by using the Make menu. The Compile File command
    assembles your file rather than compiling it, assuming the current file
    has a .ASM extension.

    To help you create assembly-language programs, the QuickC/QuickAssembler
    interface adds the following extensions to QuickC:

    ■  A program list can now have .ASM files as well as .C, .OBJ, and .LIB
        files if you work with multiple modules.

    ■  The Make dialog box from the Options menu has a new option button:
        Assembler Flags.

    ■  The Assembler Flags dialog box lets you control how .ASM files are
        assembled.

    If your program has multiple modules, you can add .ASM files to the
    program list as well as other kinds of files. When you build the program,
    the environment compiles each .C file module that needs to be built and
    assembles each .ASM module that needs to be built.

    For example, the program list in Figure 1.1 creates a mixed-language
    program with both C and assembly-language source files.

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 1.2 of the manual                  │
    └────────────────────────────────────────────────────────────────────────┘

    The environment sets the default file extension by looking at the
    extension of the last file loaded. If the last file loaded had a .ASM
    extension, the File List field now displays all the .ASM files for the
    current directory. If the last file loaded had a .C extension, the File
    List field displays all .C files.

    You can alter this behavior by choosing Display from the Options menu, as
    explained in Section 1.4, "Choosing C or Assembler Defaults." In any
    case, you can always control which files are displayed by entering a
    wildcard expression, such as *.asm, in the File Name field.

    The environment lets you set assembler options as well as compiler
    options. When you open the Options menu and choose Make, the dialog box
    shown in Figure 1.2 appears.

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 1.2 of the manual                  │
    └────────────────────────────────────────────────────────────────────────┘

    This dialog box contains one new field: Assembler Flags. When you choose
    this field, a new dialog box, shown in Figure 1.3, appears.

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 1.2 of the manual                  │
    └────────────────────────────────────────────────────────────────────────┘

    By setting flags in the Assembler Flags dialog box, you control the action
    of the assembler whenever it builds a program. These settings have no
    effect on .C modules, but do affect how each .ASM module is assembled.

    This dialog box contains a Debug Flags section, which has options that
    apply only to Debug builds, and a Global Flags section, which has options
    that apply to every build. Choose the Help button for an explanation of
    each option.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  You control the type of build operation (Debug or Release) by
    choosing the appropriate option button in the dialog box shown in Figure
    1.2. You can return to that dialog box by choosing the OK or Cancel
    command button. By choosing Debug (the default), you can use all of the
    QuickC debugging commands while running the program. By choosing Release,
    you produce a program that cannot be debugged but is somewhat smaller.
    ──────────────────────────────────────────────────────────────────────────

    The Custom Flags section lets you enter additional options. In the three
    Custom Flags text boxes, you can type any of the assembly options accepted
    by the QCL driver. See Appendix B for a description of these options. The
    next section describes how to use the QCL driver to assemble programs.


1.3  Assembling from the Command Line

    You can run QuickAssembler from the command line, just as you can run
    QuickC. One utility, QCL, invokes both the assembler and compiler. You can
    even use it to compile, assemble, and link mixed-language programs in one
    step. However, make sure you use the version of QCL copied during
    QuickAssembler installation.

    If you type a file name that has a .C extension, QCL invokes the C
    compiler. For example, the following command compiles and links the file
    SAMPLE1.C:

    QCL SAMPLE1.C

    If you type a file name that has a .ASM extension, QCL invokes the
    QuickAssembler. For example, the following command assembles and links the
    file SAMPLE2.ASM:

    QCL SAMPLE2.ASM

    In any case, QCL links all resulting object files to create a .EXE file,
    unless you specify /c on the command line. (You can also create a .COM
    file if the program is written entirely in assembly language.) For
    example, the following command compiles SAMPLE1.C and assembles
    SAMPLE2.ASM, but does not link the resulting object files:

    QCL /c SAMPLE1.C /Cl SAMPLE2.ASM

    As always, you can specify .LIB files and .OBJ files on the QCL command
    line. A file with no extension is assumed to have a .OBJ extension by
    default. For example, the following QCL command compiles M1.C, assembles
    M2.ASM (with lowercase symbols preserved), and links M1.OBJ, M2.OBJ, and
    M3.OBJ. Finally, QCL searches M4.LIB for any unresolved references.

    QCL /Cx  M1.C  M2.ASM  M3  M4.LIB

    You can specify a number of QuickAssembler options, in addition to the
    ones provided specifically for C. See Appendix B, "Using Assembler
    Options with QCL," for a description of all these options.


1.4  Choosing C or Assembler Defaults

    At all times, you can use the QuickC/QuickAssembler environment to create
    either C modules or assembly-language modules. However, there are some
    details of operation that make it a little easier to work with one
    language or another.

    For example, one consideration is whether the dialog box starts by
    displaying all the C files in the directory (*.c) or all the
    assembly-language files (*.asm) when you choose the Open command from the
    File menu. You can control this behavior by choosing Display from the
    Options menu. Figure 1.4 shows the dialog box that appears.

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 1.4 of the manual                  │
    └────────────────────────────────────────────────────────────────────────┘

    In the Language section of this dialog box, select either C, Assembler, or
    Auto. The Auto selection uses C or Assembler defaults, depending on what
    file was last loaded into the active window. For example, if you load the
    PROG.ASM file into the source window, all the defaults (described below)
    change to assembly-language settings.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  When you first use QuickAssembler, the environment starts up in Auto
    mode. Thereafter, it looks at the settings in QC.INI to determine what
    mode to start in; this feature has the effect of saving display-mode
    settings between sessions.
    ──────────────────────────────────────────────────────────────────────────

    The following items change when the display mode changes──either because
    you change the mode manually or because you are in Auto mode and load a
    different kind of file:

    ■  For commands on the File menu, the default file name changes to *.c or
        *.asm.

    ■  The Include command on the View menu responds to .H files if the
        display mode is C, or .INC files if the display mode is Assembler.

    ■  The Index and Contents items from the Help menu bring up lists of
        topics for either C or Assembly, as determined by the display mode.

    Auto display mode assumes C defaults until you load a .ASM file. When you
    start the environment with the QC command, QC assumes that file names on
    the command line have .C extensions, unless the environment is in
    Assembler display mode.


1.5  Using the Quick Advisor (Help)

    QuickAssembler extends the number of topics you can get information on,
    and updates QCENV.HLP so you can get context-sensitive help on the new
    menu items and dialog boxes. In addition, you still continue to get help
    on all of the C-language topics. The new topics, added for use with
    assembly language, are shown below:

    ■  QuickAssembler instructions

    ■  QuickAssembler directives and operators

    ■  DOS and ROM-BIOS services

    You can get help on assembly-language topics by using one of two different
    methods:

    1. Topical Help (press F1)

    2. The Help menu

    At all times, the expanded environment provides topical Help for both
    assembler and C keywords. Place the cursor on the keyword, then press F1.
    You can also get topical Help by moving the mouse cursor to the desired
    word and clicking the Right mouse button. The display mode (described in
    the previous section) determines whether C help files or assembly help
    files are searched first.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  If the keyword starts with a dot (.), do not place the cursor on the
    dot or click on the dot to get topical Help. Place the cursor on the
    keyword or click on the keyword.
    ──────────────────────────────────────────────────────────────────────────

    QuickAssembler keywords include instructions, directives, and operators.
    Chapter 2, "Introducing 8086 Assembly Language" provides information on
    each of these concepts. An "instruction" is a specific action that the
    processor executes. Instructions are the primary building blocks of an
    assembly-language program.

    The Help screens on instructions are particularly useful, because they
    provide detailed information on timing, syntax, and processor flags. This
    manual features a topical discussion of instructions, but provides only
    limited information on timing and flags. To write the most efficient
    assembly-language programs, you should refer often to the on-line Help for
    instructions.

    To get help on DOS or ROM-BIOS services, select Contents or Index from the
    Help menu. These menu items give you help on assembly-language topics
    rather than C topics whenever the display mode (described in the previous
    section) is set to Assembler.

    The Help system offers other paths to get to information on DOS and BIOS
    functions. Move the mouse cursor to an interrupt number (such as 21H or
    33) and click the Right mouse button, or move the cursor to the number and
    press F1. The Help system responds by showing a screen listing of all the
    functions accessed through that interrupt number. You can then go to the
    specific Help screen you want. You can also get help on interrupt
    functions by selecting context-sensitive help for the INT keyword.

    You call these DOS and BIOS functions by using the INT instruction, as
    described in Chapter 4. These services perform basic input and output
    functions for you, giving you access to DOS and to hardware.

    By default, the Smart Help display option is on. This option makes the
    system more flexible by ignoring the presence or absence of a leading
    underscore (_) in front of a name. Consequently, pressing F1 while on
    _printf gives you help for the printf function.


1.6  Debugging Assembly Code

    You can run a Debug build by choosing Debug in the dialog box opened by
    the Options menu's Make command. Debug is the default setting, so you
    probably won't need to choose it.

    You can use all of QuickC's debugging commands with programs written in
    assembly language. But keep in mind these considerations:

    ■  You must use an extra file with a .DBG file extension to debug programs
        in .COM format.

    ■  You must use C syntax to specify expressions to watch or modify, even
        when you debug assembly code. In addition, you can use the BY, WO, and
        DW memory operators, register names, and the colon (:) operator. The
        colon operator helps to specify segmented addresses.

    ■  When you trace execution of an assembly-language module, the behavior
        of the environment changes. Screen swapping is turned on by default,
        and the first line of code is never highlighted.

    ■  You can alter flag values and registers from within the environment.

    Sections 1.6.1-1.6.4 discuss each debugging feature in turn.


1.6.1  Debugging .COM Files

    Section 4.8, "Creating .COM Files," explains how to use tiny memory
    model, along with a linker flag, to generate a program in the .COM-file
    format. A .COM file has a total size limitation of 64K, but is slightly
    smaller and loads faster than a similar .EXE file.

    When you run a Debug build that creates a .COM file, the linker places
    debugging information in a separate file with the same base name as the
    program and with a .DBG extension. If you delete the .DBG file, you cannot
    debug your program until you run another Debug build.

    Otherwise, all the considerations that apply to debugging .EXE files apply
    to .COM files as well.


1.6.2  Specifying Expressions

    The Debug menu provides two commands──Watch Value and Watchpoint──that let
    you specify an expression for the QuickC/QuickAssembler environment to
    dynamically update and display. The environment displays the updated
    values in the Watch window. When you choose one of these commands, a
    dialog box appears, prompting you to enter an expression. Figure 1.5 shows
    the dialog box for the Watch Value command.

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 1.6.2 of the manual                │
    └────────────────────────────────────────────────────────────────────────┘

    You can enter any combination of variable names, constants, and C-language
    syntax. You cannot enter assembly-language keywords. However, the
    environment does recognize all valid register names (including names of
    both 8-bit and 16-bit registers). See Chapter 2, "Introducing 8086
    Assembly Language," for information on registers.

    In addition to register names, the expanded environment supports the
    optional use of the colon operator (:) for specifying segmented addresses:

    segment:offset

    In the syntax display above, segment can be a constant or a register;
    offset can be any expression. The QuickC/QuickAssembler environment
    combines the segment and offset addresses to determine a physical address,
    as described in Section 2.7, "Segmented Addressing and Segment
    Registers."

    The following examples demonstrate the use of the colon in valid
    expressions. Note that you use C-language syntax to specify hexadecimal
    numbers:

    0xb000:0x0000
    es:0x0100
    es:(array[2])
    ss:bp

    The QuickC/QuickAssembler environment considers a segmented-address
    expression to be a pointer to a character, which the Watch window
    evaluates by displaying the character pointed to. However, you can use
    QuickC type specifiers to alter how an expression is displayed. For
    example, the Watch window evaluates the following expression by displaying
    the numeric value of the address es:(warray+3):

    es:(warray+3),p

    You can use the three memory operators──BY, WO, and DW──to view the byte,
    word, or doubleword of memory at a given address.

    With pointer expressions and registers, BY returns the byte pointed to by
    the expression. (Segmented addresses are pointer expressions, as are
    procedure parameters declared with PTR.) With nonpointer variables, BY
    returns the byte at the same address as the variable. WO and DW work the
    same way, but return a word or doubleword, respectively.

    The rest of this section demonstrates how to use the three memory
    operators to specify useful expressions.

    To watch the contents of a register, enter just the register's name. To
    examine the value that the register points to, enter the BY, WO, and DW
    operators followed by the register name.

    Example             Value Specified
    ──────────────────────────────────────────────────────────────────────────
    bx                  The contents of the BX register

    BY bx               The byte pointed to by the BX register

    WO bx               The word pointed to by the BX register

    DW es:si            The doubleword pointed to by the SI register, relative
                        to the segment address in ES


    To watch the value of a variable, enter the variable's name. To watch the
    byte, word, or doubleword at the same address as the variable, use the BY,
    WO, and DW operators. In this context, these operators function as the
    QuickAssembler PTR operator does: they change the size of data to be
    examined. They are similar, but not identical, to C type casts. In the
    following examples, assume that Var is a word variable defined with DW:

    Example             Value Specified
    ──────────────────────────────────────────────────────────────────────────
    Var                 The variable Var (the word at the address of Var)

    BY Var              The byte at the address of Var

    DW Var              The doubleword at the address of Var


    You can use BY, WO, and DW to specify an array element, but you must
    understand that expressions in the Debug window are treated like C
    expressions rather than assembler expressions. As a result, the syntax you
    use to watch a memory location in the Debug window is often different from
    the syntax in your assembly source. For example, assume you have the
    following data and code:

    warr        DW     1, 2, 3, 4, 5, 6
                .
                .
                .
                mov    bx,0
                mov    cx,5

    loop1:      add    ax,warr[bx]
                add    bx,2
                loop   loop1

    You cannot watch the assembler expression warr[bx] directly. However, you
    can put an equivalent C expression in the Debug window:

    WO (char*)&warr + bx

    The address-of operator is necessary to make the C debugger look at the
    MASM array as a C array──that is, as an address. The value must cast to a
    character pointer because the debugger looks at it as a scaled C index
    rather than an unscaled assembler index. In this case, the assembler code
    adds 2 to the pointer BX to adjust for the variable size. You must tell
    the debugger to ignore its normal word scaling.

    Expressions are only scaled when there is a variable in the expression. In
    the expression WO BP+6 the 6 is not scaled──the expression means, "look at
    the word six bytes beyond the address that is in BP." However, in the
    expression WO &warr+6, the 6 is scaled because of the word size of the
    variable. Note that the variable size, not the expression type ( BY, WO,
    or DW), determines the size of scaling.

    If you are comfortable with C, you can also use C expressions to look at
    assembler expressions. Here are some examples you might find useful:

    Example             Value Specified
    ──────────────────────────────────────────────────────────────────────────
    &Var                The address of Var

    es:0x81,s           The string at es:[81h] (the DOS command line when a
                        program is started)

    &Arr[3]             The third element of an array (note that the 3 will be
                        scaled)

    *(&Arr+3)           Equivalent to the previous expression



1.6.3  Tracing Execution

    The Run menu's Trace Into, Animate, and Step Over commands execute one
    statement of your program at a time. These commands are fully functional
    with assembly-language programs. However, debugging commands behave
    differently when you trace execution of an assembly-language module, as
    summarized below:

    ■  By default, screen swapping is on.

    ■  If the main module of the program is an assembly-language module, the
        first line of the program is never highlighted.

    ■  The Calls menu does not function unless you write your program
        according to certain guidelines.

    The rest of this section elaborates on these differences.

    When you trace execution of an assembly-language module, screen swapping
    is turned on. The environment does not support an Auto screen-swapping
    mode for assembly-language programs because it cannot detect when a
    program writes to the screen. Therefore, when executing a .ASM file, the
    environment equates the Auto screen-swapping selection with screen
    swapping turned on.

    You can always turn screen swapping off manually by choosing the Run/Debug
    command from the Options menu. When a dialog box appears, choose the Off
    option button in the Screen Swapping field.

    Screen swapping causes the environment to switch to a full output screen
    each time the program executes code. The effect is particularly noticeable
    when you choose the Animate command. Leaving screen swapping on preserves
    program output. However, if large portions of your program do not write to
    the video display, you may want to turn screen swapping off temporarily.

    The second debugging feature that operates differently for assembly-
    language programs is current-line highlighting. When you restart a
    program, the environment does not highlight the first line of code. The
    debugging facility does not know which line of code is the first to be
    executed, since this information is stored in the executable-file header.
    After you execute a trace, the second program line is highlighted, and
    thereafter current-line highlighting works as you would expect.

    The third feature that operates differently is the Calls command from the
    Debug menu. To ensure that the command works with assembly-language
    modules, either use the PROC directive with an argument list or local
    variables, as described in Chapter 3, "Writing Assembly Modules for C
    Programs," or else set up the framepointer (the BP register) as described
    in Appendix A, "Mixed-Language Mechanics." Both these methods set up a
    stack frame for each procedure, using the standard Microsoft methods. The
    environment checks stack frames to see what procedures have been called,
    and with what parameters.


1.6.4  Modifying Registers and Flags

    With the expanded QuickC/QuickAssembler environment, you can get much
    greater use from the Registers window. The Registers window displays more
    information than it does in the simple QuickC environment, and you can
    also use the window to alter register and flag values.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  By default, the environment does not display the Registers window.
    To open this window, choose the Window command from the View menu. A
    dialog box appears that lists all windows. Move the cursor to Registers
    and press the ENTER key, or move the mouse cursor to Registers and double
    click the Left mouse button. To close the window, repeat the procedure.
    ──────────────────────────────────────────────────────────────────────────

    The Registers window displays the contents of both 8086 and 8087
    registers. You can remove 8087 registers from the Registers window by
    choosing Display from the Options menu. When the dialog box appears, turn
    the Show 8087 option button off. The environment only displays 8087
    registers if you have a math coprocessor or have a program that calls
    floating-point emulator routines from a high-level language.

    You can alter values in the window by either using the mouse or the
    keyboard. To alter a value, you first select the item you want to change:

    ■  To alter a value with the mouse, select an item by clicking the Left
        mouse button.

    ■  To alter a value with the keyboard, first place the cursor on an item
        in the window. (Press TAB or SHIFT+TAB to cycle quickly through the
        items.) Then select the item by pressing the ENTER key. The List field
        has no function in this context and should be ignored.

    Choosing a flag toggles the flag to the opposite setting. Choosing a
    register brings up a dialog box. Type the new value for the register and
    press ENTER.


1.7  Viewing a Listing File

    When you assemble a module with the Debug build setting (the default),
    QuickAssembler can create a listing file. Choose the type of listing by
    using the Assembler Flags dialog box. (To access this dialog box, choose
    Make from the Options menu, then choose Assembler Flags.) You should also
    make sure that the One Pass Assembly option is not selected.

    A QuickAssembler listing file shows precisely how the assembler translated
    each line of code during the last program build. Each instruction in the
    source code is listed next to its corresponding numeric code (machine
    instruction).

    Listing files are particularly useful if your program uses macro calls or
    include files. The listing file displays each statement generated by a
    macro call and each line of code copied from an include file. Tables at
    the end of the listing file give information on macros, symbols,
    structures, groups, and records. Part 2 of this manual describes each of
    these features of assembly language.

    To view the listing file, assemble the source code at least once. You can
    view the listing file for the current module by choosing the Listing
    command from the View menu. You can also view the file with the CTRL+F2
    shortcut key.

    The listing file is then displayed in the Source window, as shown in
    Figure 1.6. You can page through this file by using all the normal
    cursor-movement commands. When you want to return to the previous file,
    press F2 or use the File menu. You can also leave the listing file by
    choosing the Listing command again; this action causes the environment to
    switch to the original line of source code that generated the current line
    of code. In particular, if you are in a listing file and move the cursor
    to a line generated from an include file (.INC), the Listing command
    switches directly to that include file.

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 1.7 of the manual                  │
    └────────────────────────────────────────────────────────────────────────┘

    Normally, you would choose the Listing command when in a .LST file or in a
    .ASM file with a corresponding .LST file (previously generated by a
    program build). If you are not in either of these types of files, the
    environment responds by displaying a dialog box for opening a file; *.lst
    is the default file name.



────────────────────────────────────────────────────────────────────────────
Chapter 2:  Introducing 8086 Assembly Language


    Assembly-language programs control hardware directly, giving you the
    ability to write the fastest, smallest programs possible and to execute
    any operation. But assembly-language programming also requires an
    understanding of the architecture of 8086-family processors.

    Assembly language is close to machine code──the processor's numeric
    language of 1's and 0's. Each QuickAssembler instruction corresponds to an
    8086 instruction but consists of a meaningful name (mnemonic) instead of a
    number. For example, the ADD instruction computes the sum of two items.
    QuickAssembler translates this instruction to produce a numeric code, such
    as 10000010 binary. The processor responds to this code when you run the
    program.

    This process of translation is called "assembling." Before you can
    assemble a program, you need to understand the basic concepts of the
    processor and of assembly language. This chapter presents these concepts.


2.1  Programming the 8086 Family

    If you have programmed in C, you can get a good grasp of 8086 assembly
    language by focusing on the differences between the two languages:

    1. A C statement may combine many complex operations, but each line of
        assembly language specifies just one limited action called an
        "instruction." QuickAssembler also supports a number of nonexecutable
        statements called "directives," which provide structure to the program,
        declare data objects, and provide other information.

        Sections 2.2-2.4 explain the basics of writing instructions and
        directives.

    2. C programs deal with memory locations (known as variables), but
        assembly-language programs must deal with registers as well. A
        "register" is a special memory location inside the processor itself,
        having a permanent name rather than a numeric address.

        Section 2.5, "8086-Family Registers," describes the use of each
        register.

    3. A data object in a C program can be arbitrarily complicated.
        Assembly-language statements work on objects accessed through four
        specific modes: immediate, register, direct memory, and indirect
        memory. Each mode has specific properties and limitations imposed by
        the processor.

        Section 2.6, "Addressing Modes," explains each of these four modes and
        gives examples.

    4. The processor combines two 16-bit addresses to access each memory
        location. This mechanism is called "segmented addressing." Assembly
        language often requires a more complete understanding of segmented
        addressing than C does.

        Section 2.7, "Segmented Addressing and Segment Registers," explains
        the full implications of segmented addressing.

    Of the features listed above, segmented addressing is unique to the 8086
    family. The 8086 is further distinguished from other processors by its set
    of string operations, which permit fast initialization and copying of
    blocks of data. You can read more about the string operations in Chapter
    16, "Processing Strings."


2.2  Instructions, Directives, and Operands

    The 8086-family processors understand only one kind of statement: an
    instruction. QuickAssembler understands two kinds of statements:
    instructions and directives.

    As explained above, an instruction corresponds to a specific action that
    the processor executes at run time. The fundamental task of the assembler
    is to correctly translate each of these statements to specific
    machine-code instructions.

    As nonexecutable statements, directives are not translated to machine
    actions. However, they give information to the assembler that affects how
    other statements are translated. For example, some of the most important
    directives declare data. These directives, in turn, help the assembler
    correctly interpret instructions that refer to the data.

    The rest of this section explains each part of an assembly-language
    statement; the general syntax applies to both instructions and directives.
    The section ends by stating the basics of entering numbers in different
    radixes.

    Syntax

    Each line of source code consists of a blank line or a statement. Each
    statement is an instruction or directive, and can contain as many as 512
    characters. Statements can have up to four fields, as shown below:

    [[name]] [[operation]] [[operands]] [[;comment]]

    Each field (except the comment field) must be separated from the other
    fields by a space or tab character. You can enter statements in uppercase
    or lowercase letters. By default, QuickAssembler is not case sensitive,
    but it does preserve case for external variables──thus providing
    compatibility with C, which is case sensitive. You can control case
    sensitivity by using the Assembler Flags dialog box.

    As a convention, sample code in this manual uses uppercase letters for
    directives, hexadecimal letter digits, and segment definitions.


2.2.1  The Name Field

    The name field labels the statement with a symbolic name that other parts
    of the program can reference. The meaning of the name depends on the type
    of statement.

    One of the most important uses of this field occurs in data declarations.
    These declarations are much like variable declarations in C. The statement
    defines the type and initial value. You use the name elsewhere in the
    program, when you want to access the data.

    QuickAssembler is different from C, however, in that the symbolic name
    occurs in the first field. For example, the following DB directive
    (Declare Bytes) associates the name string with a series of characters:

    string      DB    "Hello, world"

    In instructions, the name field functions like a program label in C: it
    provides a target for a jump or call instruction elsewhere in the program.

    To label an instruction, follow the name field with a colon (:). You can
    place the name on the same line as the rest of the instruction or, to
    improve readability, on a separate line. The following example shows the
    latter case:

    top:                    ; This label marks the top of the loop
                mov   ax,1  ; This is first instruction in the loop

    There are other ways to label instructions. See Section 6.4, "Defining
    Code Labels," for more information on how to declare labels.


2.2.2  The Operation Field

    The operation field states the action of the statement. This field
    determines the fundamental type of the statement──instruction or
    directive. It also determines what additional syntax, if any, is required.
    Some operations require an entry in the name field; most do not. If the
    operation is an instruction, it strictly determines how many and what kind
    of operands are legal.

    This field contains exactly one item──an instruction or directive
    mnemonic. "Mnemonics" are abbreviated, easy-to-remember names that each
    symbolize a different operation (for instance, ADD, SUB, and OR). Examples
    of directive mnemonics include EQU (Equate) and DB (Declare Bytes).


2.2.3  The Operand Field

    The operand field lists the objects on which the statement operates.
    Multiple operands are separated by commas. These objects can be registers,
    constants, or memory locations. A memory location is typically represented
    as a variable, although it can also be expressed as a numeric address or
    complex expression.

    Registers and constants require no previous declaration. To refer to a
    variable, however, you should first declare the name with a data
    directive, such as DB (Declare Bytes). The following example declares the
    variable count and then uses it in an instruction:

    count      DB      7       ; Declare count as a byte variable
                .
                .
                .
                inc     count   ; count = count + 1

    In the first statement, count appears in the name field and the number 7
    appears in the operand field. The DB directive associates count with the
    address of a byte initialized to 7. In the second statement, count appears
    in the operand field. The INC instruction (increment) adds 1 to count,
    thus increasing the value of the data to 8.

    The next section gives more information on how to declare memory locations
    as data types. Section 2.6, "Addressing Modes," gives a complete
    description of all the different methods for specifying operands.


2.2.4  The Comment Field

    The comment field lets you add text that appears in source code but is
    ignored by the assembler. You can enter any text you want in this field.
    Typically, you would use it to document the purpose of the statement. The
    purpose of an assembly-language statement is not always self-explanatory,
    and for this reason, programs often contain at least one comment for each
    instruction.

    Single-line comments always begin with a semicolon (;). You can also
    create a multiline comment by one of two methods. You can enter successive
    comment lines as shown below:

                add     count,5    ; Add 5 to count.
                                    ;   ADD is the operation.
                                    ;   count and 5 are operands.
                sub     Sum,12     ; Subtract 12 from Sum.
                                    ;   SUB is the operation.
                                    ;   Sum and 12 are operands.

    You can also use the COMMENT directive, which lets you enter multiline
    comments without using the semicolon. This directive has the following
    syntax:

    COMMENT delimiter [[text]]
    text
    [[text]] delimiter [[text]]

    All text between the first delimiter and the line containing a second
    delimiter is ignored by the assembler. The delimiter character is the
    first nonblank character after the COMMENT directive. The text includes
    the comments up to and including the line containing the next occurrence
    of the delimiter.

    Example

                COMMENT + The plus
                        sign is the delimiter. The
                        assembler ignores the statement
                        following the last delimiter
    +           mov     ax,1   (ignored)


2.2.5  Entering Numbers in Different Bases

    As with C, you can enter assembly-language constants as decimal,
    hexadecimal, or octal. You can also enter binary constants. By default,
    all constants are decimal, but you specify a different default with the
    RADIX directive.

    Hexadecimal constants appear frequently in assembly-language programs. To
    indicate a hexadecimal constant, add an uppercase or lowercase H suffix.
    If the first digit is one of the letters A-F, prefix the constant with a
    leading 0 to indicate that the number is not a symbolic name.

    Examples

    100H
    10FAh
    0be03H
    0FFh

    You may often want to enter binary constants as well, particularly when
    constructing bit masks. To indicate a binary constant, simply add an
    uppercase or lowercase B suffix.

    For more information on using different bases and using the RADIX
    directive, see Section 6.1.1.2, "Setting the Default Radix."


2.2.6  Line-Continuation Character

    You can create program lines that extend over more than one physical line
    by using the backslash (\) as a line-continuation character. The backslash
    must be the last character on the line. Comments cannot follow it. A
    backslash is not considered a continuation character if it occurs in a
    comment.

    Example

    BigProc     PROC FAR \
                USES DS SI DI, \
                IntArg:WORD, \
                String:FAR PTR BYTE, \
                Ptr:FAR PTR BIGSTRUC, \
                Long:DWORD
                .
                .
                .

                ret
    BigProc     ENDP

    In this example, the line continuation-character is used to specify
    multiple procedure arguments with the extended PROC syntax. All the
    arguments must be placed on a single logical line, but they would go past
    the edge of the editor screen if not placed on separate lines. The
    continuation character is also useful for long macro calls and data
    initializations.


2.3  8086-Family Instructions

    The 8086-family processors support more than 80 instructions, but you
    don't need to memorize the entire instruction set. Once inside the
    expanded QuickC environment, you can get instant information on any
    instruction. Move the cursor to an instruction keyword on the screen, then
    press F1. To find the appropriate instruction for the action you want to
    perform, refer to Part 3 of this book, which provides a topical survey of
    instructions.

    Many programs can be written with just a few of the most common
    instructions. Sections 2.3.1 and 2.3.2 introduce some of these
    instructions, grouping them into two sets: instructions that manipulate
    data and instructions that control program flow. The programs in Chapters
    3 and 4 use these same instructions to illustrate basic concepts of 8086
    assembly language.


2.3.1  Data-Manipulation Instructions

    The first group of instructions manipulate data. Each causes the processor
    to copy data or perform a calculation at run time. Some of the simpler C
    statements translate directly into a single instruction, so this section
    uses C statements for illustration. Here are the six basic data-
    manipulation instructions introduced in this section:

    ■  MOV (move data)

    ■  ADD (add second operand to first)

    ■  SUB (subtract second operand from first)

    ■  INC (increment operand)

    ■  DEC (decrement operand)

    ■  MUL (integer multiplication)

    The processor supports a great many other data-manipulation instructions,
    which are covered in Part 3 of this manual.


2.3.1.1  The MOV Instruction

    The MOV instruction, probably the most frequently used 8086 instruction,
    copies data from one location to another. The instruction leaves the
    source data unaffected, so it is more a copy than a move. The MOV
    instruction takes two operands:

    MOV destination,source

    The instruction copies the value of the source to the destination. It
    might seem more logical to place the source operand first, until you
    consider that C and BASIC assignments use the same order. For example, the
    instruction

    mov   count,5

    places the value 5 at the memory location count and thus performs the same
    action as the C statement

    count = 5;

    The destination operand is similar to an "lvalue" in C. Instructions that
    have two operands always interpret the leftmost operand as the
    destination, or lvalue. The destination is the operand that the
    instruction can alter; thus, it can't be a constant. Another limitation on
    instructions with two operands is that the operands cannot both be memory
    locations.


2.3.1.2  The ADD Instruction

    The ADD instruction, like MOV, takes two operands: a destination and a
    source. The processor adds the two operands together, storing the result
    in the destination (on the left). This action will be familiar to C
    programmers, since the instruction

    add  sum,10

    adds 10 to the memory location sum and thus performs the same action as
    the C statement

    sum += 10;

    The 8086 does not perform automatic scaling for pointer addition as C
    does. The program itself must perform scaling for all pointer arithmetic.


2.3.1.3  The SUB Instruction

    The SUB instruction is the counterpart of ADD: it subtracts the source
    operand from the destination operand, storing the result in the
    destination (on the left). Thus, the instruction

    sub  total,7

    performs the same action as the C statement

    total -= 7;


2.3.1.4  The INC and DEC Instructions

    The INC (Increment) and DEC (Decrement) instructions add and subtract 1,
    respectively. They are similar to, but faster than, ADD and SUB, and are
    provided because adding and subtracting by 1 are such common operations.
    The instruction

    inc   count

    performs the same action as the C statement

    count++;


2.3.1.5  The AND Instruction

    The AND instruction is one of several bitwise logic operations supported
    by the 8086. AND provides an efficient way to mask out bits. The
    instruction

    and   stuff,0FFF0h

    masks out the four lowest bits of stuff, as does the C statement

    stuff &= 0x0FFF0;


2.3.1.6  The MUL Instruction

    The MUL instruction multiplies two items, but one of these items is an
    "implied operand"──that is, an operand you do not specify. For example,
    the 16-bit version of the MUL instruction takes one explicit 16-bit
    operand:

    mul   factor

    The other operand is the AX register. The processor multiplies factor by
    the value of AX, storing the low 16 bits of the result in AX. The
    description of the AX register in Section 2.5.1, "The General-Purpose
    Registers," gives more information on MUL.


2.3.2  Control-Flow Instructions

    The control-flow instructions enable the program to execute loops and to
    make decisions. Some of these instructions transfer control of the program
    to a new address. The conditional jump instructions let you provide
    program logic: they look at the result of a previous operation, and then
    decide whether to jump or not. Here are the five basic control-flow
    instructions introduced in this section:

    ■  JMP (Jump unconditionally)

    ■  CMP (Compare──subtract without storing result)

    ■  JE (Jump If Equal)

    ■  JA (Jump If Above)

    ■  JB (Jump If Below)

    The processor supports a number of other control-flow instructions,
    including several conditional jumps. See Section 15.1.2, "Jumping
    Conditionally," for a description of these instructions.


2.3.2.1  The JMP Instruction

    The JMP instruction causes the processor to jump to a new program address.
    Like the C goto statement, JMP takes one operand: a label associated with
    another statement. The instruction

    jmp   begin

    jumps to the label begin, and thus performs the same action as the C
    statement

    goto begin;


2.3.2.2  The CMP Instruction

    The CMP instruction, like SUB, performs a subtraction. But CMP doesn't
    store the result; instead, it just sets processor flags in preparation for
    a conditional jump (such as JE, JA, or JB).

    A "processor flag" is a bit that resides in the processor and indicates
    whether a specific condition is on or off. For example, the Zero flag
    indicates that the result of the last operation produced zero. The JE
    instruction (Jump If Equal) checks this one flag only, jumping if it is
    set. Other conditional jumps determine a result by checking a combination
    of flag settings. See Section 2.5.4, "The Flags Register," for a
    description of all the flags.

    Many instructions, including SUB, set processor flags. However, some of
    these instructions have strong side effects. Use ADD or SUB to prepare for
    a conditional jump when convenient. But use CMP when you need to make a
    simple comparison without altering data.


2.3.2.3  The Conditional Jump Instructions

    The JE, JA, and JB instructions are conditional jumps (meaning Jump On
    Equal, Jump If Above, and Jump If Below, respectively). Like JMP, they
    each take one argument: a program label to which to jump. Unlike JMP, they
    cause the processor to jump only when certain flag settings are detected.
    The result is that when you use CMP in combination with a conditional jump
    instruction, you create an if-then relationship similar to an if statement
    in a high-level language. Consider the following instructions:

                cmp     sum,10       ; Compare sum to 10
                ja      top          ; If sum > 10, jump to top

    This logic is a little different from a C program. The first instruction
    makes the comparison. The second states, "If the result of the previous
    instruction was above zero, then jump." Taken together, these two
    instructions perform the same action as the C statement

    if( sum > 10 )
        goto top;

    Of course, most C programmers do not use many goto statements. Typically,
    you would test for a condition and execute a series of statements if the
    condition is true, as in the following code:

    if( sum >= 10 )
    {
        sum = 1;
        count += 2;
        delta = 5;
    }

    To implement this code in assembly language, test for the opposite
    condition, then jump past statements if they should not be executed. For
    example, the following code executes the three statements inside the if
    block only if sum is greater than or equal to 10:

    TopOfBlock:
                cmp     sum,10           ; Compare sum to 10
                jb      SumNotGreater    ; If sum < 10, do NOT do
                                        ;   next three statements
                mov     sum,1            ; sum = 1
                add     count,2          ; count = count + 2
                mov     delta,5          ; delta = 5
    SumNotGreater:

    ──────────────────────────────────────────────────────────────────────────
    NOTE  JA (Jump If Above) and JB (Jump If Below) each work properly when
    you compare unsigned integers. To compare signed integers, use JG (Jump If
    Greater) and JL (Jump If Less Than). See Section 15.1.2, "Jumping
    Conditionally," for a complete list of conditional jump instructions.
    ──────────────────────────────────────────────────────────────────────────


2.4  Declaring Simple Data Objects

    This section describes how to declare global variables──often called
    "static" because each corresponds to a fixed memory location.

    Programs generally require data. If you wrote a program in machine code,
    you'd have to reserve locations in memory for data, determine the address
    of each data object, and remember these addresses whenever you operated on
    memory. Fortunately, the assembler reserves memory locations for you and
    associates each location with a symbolic name.

    You use data directives to tell the assembler how to allocate and refer to
    memory. The most common data directives for characters and integers are:

    Directive           Description
    ──────────────────────────────────────────────────────────────────────────
    DB                  Declare byte (either a small integer or a character)

    DW                  Declare word (2-byte integer)

    DD                  Declare doubleword (4-byte integer)


    To use these directives, place the name of the variable first, then enter
    the data directive. The third column (operand field) contains one or more
    initial values. Use a question mark to indicate an item with no initial
    value.

    aByte       DB    1    ; aByte is a 1-byte integer, initialized to 1
    area        DW    500  ; area is a 2-byte integer, initialized to 500
    population  DD    ?    ; population is a 4-byte integer, no initial value

    These directives correspond roughly to the following C statements:

    char    aByte = 1;
    int     area = 500;
    long    population;

    Assembly data declarations are different from C declarations, however, in
    that assembly data declarations are not declared signed or unsigned.
    Instead, you must remember whether you intend to treat a variable as
    signed or unsigned, and choose the appropriate operations.

    Data directives reserve memory in the object file. They also associate
    each variable with a name and a size attribute.

    The assembler uses this information to correctly assemble instructions
    that operate on variables. For example, at the machine-code level, the INC
    instruction can be encoded to increment either a byte or a word of data.
    The way the assembler encodes the instruction

                inc     myvar

    depends on whether myvar was declared as a byte or word. (If it was
    declared a doubleword, the instruction is illegal.) Another important use
    of size attributes is in checking the validity of two operands. For
    example, the following instruction causes the assembler to print a warning
    message, because aByte and bx do not share the size attribute:

                mov     bx,aByte    ; Move aByte into a word register

    Moving a byte into a word location is not possible. After issuing the
    warning, the assembler adjusts the instruction as if it were written as
    follows:

                mov     bx,WORD PTR aByte  ; Move the word at aByte to BX

    The PTR operator temporarily modifies the size attribute of the object
    that follows it. PTR can be used with a number of different data types, as
    shown below:

    Keywords            Refers to
    ──────────────────────────────────────────────────────────────────────────
    BYTE PTR object     The byte at address of object

    WORD PTR object     The word at address of object

    DWORD PTR object    The doubleword at address of object


    However, this adjustment may not produce the action you really want. The
    PTR operator is not quite the same as a type cast in C. The C (int) type
    cast manipulates data so that it represents the same value, but in a
    different format. WORD PTR does no data manipulation──it simply causes the
    instruction to operate on the word at the given address. In the example
    above, the use of WORD PTR causes two adjacent bytes of data to be loaded
    from memory into BX. If what you really want is to move a single byte of
    data to BX, but convert it to a word, use the following code:

                mov     bl,aByte            ; Lower byte of BX = aByte
                sub     bh,bh               ; Higher byte of BX = 0

    The example above only works properly when handling unsigned numbers. When
    working with signed quantities, use the CBW instruction, as described in
    Section 13.2.1, "Extending Signed Values."

    By far the most common use of WORD PTR is in operations on objects 32 bits
    or longer. An 8086 instruction can operate only on a byte or a word. You
    use WORD PTR to tell the assembler to operate on one word at a time. For
    example, the following code uses two moves to copy the 32-bit integer X to
    a similar integer, Y:

    X     DD      80000               ; X is a long integer = 80,000
    Y     DD      ?                   ; Y is a long integer
        .
        .
        .
        mov     ax, WORD PTR X      ; Move word at X to word at Y
        mov     WORD PTR Y, ax      ;   (using AX as intermediate register)
        mov     ax, WORD PTR X[2]   ; Move word 2 bytes past X to
        mov     WORD PTR Y[2], ax   ;   word 2 bytes past Y

    Brackets ([ ]) are used with arrays as well as portions of large data
    objects as shown here; they also let you add a displacement to an address.
    The use of brackets is further explained in the next few paragraphs.

    Assembly language makes almost no distinction between simple variables and
    arrays. You refer to the first element of an array just as you would a
    simple variable──index brackets are optional. To declare an array or
    string, just give a series of initial values:

    warray      DW      ?,?,?,?
    xarray      DW      1,2,3,4
    mystring    DB      "Hello, there."

    To refer to the first element of warray, type warray into your program (no
    brackets required). To refer to the next element, use either of these two
    forms, each of which refers to the object two bytes past the beginning of
    warray:

    warray+2
    warray[2]

    When used with a variable name, the brackets do nothing but add a number
    to the address. If warray refers to the address 2400h, then warray[2]
    refers to the address 2402h. However, the brackets have an additional
    function when used with registers. See Section 2.6.4, "Indirect Memory
    Operands," for more information.

    In assembly language, array indexes are zero-based, as in C; but unlike C,
    they are unscaled. The number inside brackets always represents an
    absolute distance in bytes.

    In practical terms, the fact that indexes are unscaled means that if the
    size of an element is larger than one byte, you must multiply the index of
    the element by its size (in this case, 2), then add the result to the
    address of the array. Thus, the expression warray[4] represents the third
    element, which is 4 bytes past the beginning of the array. Similarly, the
    expression warray[6] represents the fourth element.

    In general, the numeric offset required to access an array element can be
    calculated as shown in the following formula:

    Nth element of Array = Array[(N-1) * size of element]


2.5  8086-Family Registers

    A "register" is a special memory location inside the processor itself.
    Operations on registers execute faster than operations on main memory. The
    processor has a limited number of registers. Moreover, many operations on
    the 8086 are impossible without the use of registers at some point. For
    example, you cannot copy data between two memory locations without first
    moving it into a register.

    Figure 2.1 shows the registers common to all the 8086-family processors.
    The 8086 registers can be grouped by function into the following sets:
    general-purpose registers, index registers, pointer registers, and segment
    registers. Each set corresponds to a different ending letter (X, I, P, or
    S). The registers in each set are as follows:

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 2.5 of the manual                  │
    └────────────────────────────────────────────────────────────────────────┘

    ■  The four general-purpose registers are AX, BX, CX, and DX. These
        registers exist for the general use of the program. You can use these
        registers to store temporary values and perform calculations.

    ■  The two index registers are SI (Source Index) and DI (Destination
        Index). These registers can also be used for general storage, but are
        less flexible than the general-purpose registers. SI and DI have a
        special purpose in string instructions.

    ■  The pointer registers are IP (Instruction Pointer), SP (Stack Pointer),
        and BP (Base Pointer). These registers should not be confused with BX,
        which is the register normally used for pointer indirection. IP, SP,
        and BP each have a special purpose in conjunction with procedure calls.
        SP and BP should be altered with care; IP cannot be altered or
        referenced directly at all.

    ■  The segment registers are CS, DS, SS, and ES. This section does not
        describe these registers. You generally don't alter or reference them
        except when starting the program or accessing data from multiple
        segments. Section 2.7, "Segmented Addressing and Segment Registers,"
        describes each segment register and how it is important to programs.

    In addition, there is a flags register that indicates the status of the
    process.


2.5.1  The General-Purpose Registers

    The general-purpose registers have many important uses in an 8086
    assembly-language program, including:

    ■  Storing the values most frequently used. Operations on registers are
        much faster than operations on memory. Therefore, place the program's
        principal values in registers. In larger programs, you will probably
        have too many variables to place them all into registers. You can,
        however, place a value in a register while it is in heavy use.

    ■  Supporting operations with two or more variables. Direct
        memory-to-memory operations are illegal with 8086 processors. To
        operate on two memory locations, you need to first load one of the
        values into a register.

    ■  Enabling use of all the instructions. Many instructions require the use
        of a particular register. For example, the MUL instruction always works
        with the AX register (or AL, if you specify a byte operand).

    ■  Passing or returning values in a procedure or interrupt call.

    Each of the general-purpose registers──AX, BX, CX, and DX──can be accessed
    as single 16-bit registers, or as two 8-bit registers. As shown in Figure
    2.1, the AH, BH, CH, and DH registers represent the high-order 8 bits of
    the corresponding registers. Similarly, AL, BL, CL, and DL represent the
    low-order 8 bits.

    This design lets you operate directly on two-byte and one-byte objects. It
    also lets you load a two-byte object and then manipulate one byte at a
    time.

    Each of the general-purpose registers has special uses, discussed below.


2.5.1.1  The AX Register

    The AX (Accumulator) register is ideal for repeated calculations. It
    accumulates totals as well as the results of multiplication and division.
    Using AX can add speed to your program, because some instructions have
    special encodings optimized for use with AX.

    Multiplication instructions always use AX. In the 16-bit version of the
    MUL instruction, you specify one 16-bit value. The processor multiplies
    this value by the contents of AX and stores the 16 least significant
    binary digits of the result in AX. (The 16 most significant digits are
    stored in DX.)

    The following example multiplies base times height, and stores the result
    in area. These instructions are sufficient if the result does not exceed
    the limit for two-byte numbers (otherwise, the DX register will contain
    the overflow):

    base     DW     5       ; base is a word, initialized to 5
    height   DW     3       ; height is a word, initialized to 3
    area     DW     ?       ; area stores 16-bit (word) product
            .
            .
            .
            mov    ax,base ; AX = base
            mul    height  ; AX = AX * height
            mov    area,ax ; area = result

    AX has a similar use in division instructions (DIV and IDIV). See Section
    14.4, "Dividing," for examples of division. Also, in port I/O
    instructions, AX holds the data to write to a port and receives data read
    from a port.

    By convention, AX has another special use. Microsoft high-level languages
    expect AX to contain a function's return value. If the return value is
    longer than four bytes, the high-level languages expect DX:AX to point to
    the location of the return value.


2.5.1.2  The BX Register

    The BX (Base) register has great importance as a pointer or address
    register. All 16-bit registers can hold addresses, but not all registers
    can be used to retrieve the contents of an address. In C this operation is
    called "pointer dereferencing," or "indirection." The C source code to
    implement this action might look like this:

    value = *pVar;

    The following assembly code achieves the same effect:

                mov     bx,pVar      ; BX = pVar
                mov     value,[bx]   ; value = object pointed to by BX

    The brackets around BX in the second instruction direct QuickAssembler to
    consider BX a pointer to the actual operand. The item [bx] is an example
    of an indirect memory operand. See Section 2.6.4, "Indirect Memory
    Operands," for more information.


2.5.1.3  The CX Register

    The CX (Count) register has special meaning to instructions with a
    repeat-operation feature. The contents of CX indicate how many times to
    repeat execution. Loops, string operations, certain jump instructions, and
    shifts and rotates all use CX this way.

    A common instruction that uses CX to repeat execution is LOOP, which is
    analogous to the C for statement. This instruction subtracts one from CX,
    then jumps to the given label if CX is not equal to 0. Thus, the following
    loop executes 20 times:

                mov     cx,20
    top:
                .
                .
                .
                loop    top

    In the case of shifts and rotates, CL (the lower byte of CX) indicates how
    many bit positions to shift. See Section 14.7, "Shifting and Rotating
    Bits," for more information. Also, when an instruction has a REP (repeat)
    prefix, the value in CX determines how many times the instruction is
    executed.


2.5.1.4  The DX Register

    The DX (Data) register often is used only for storage of temporary values.
    However, DX has a special function in some versions of the multiplication,
    division, and port instructions. Each of these uses is closely related to
    AX. In fact, DX is located next to AX in the actual physical layout of the
    8086 chip. (Figure 2.1 places the registers in the order AX, BX, CX, and
    DX merely for ease of reference.)

    When you multiply 16-bit values with MUL, DX holds the high 16 bits of the
    32-bit result. The following example is a variation of the one given for
    AX. In this example, Area is a 32-bit value (a long integer), and it
    stores the entire 32-bit result of the MUL instruction:

    base        DW     500                 ; base is a word, initialized to 500
    height      DW     300                 ; height is a word, initialized to 3
    area        DD     ?                   ; area stores doubleword product
                .
                .
                .
                mov    ax,base             ; AX = base
                mul    height              ; DX:AX = AX * height
                mov    WORD PTR area[0],ax ; Store low 16 bits
                mov    WORD PTR area[2],dx ; Store high 16 bits

    By convention, Microsoft high-level languages use both DX and AX to return
    four-byte values from procedures. The high 16 bits are placed in DX.


2.5.2  The Index Registers

    The two index registers are SI (Source Index) and DI (Destination Index).
    These registers are similar to the general-purpose registers, but cannot
    be accessed one byte at a time. Index registers are efficient places to
    store general data, pointers, array indexes, and pointers to blocks of
    memory. They have the following special uses:

    ■  You can use both SI and DI for pointer indirection, as you can BX and
        BP. "Pointer indirection" is the process of retrieving the value that a
        pointer points to.

    ■  You can use SI or DI to hold an array index. Indirect memory operands
        can combine this index with a base address stored in BX or BP.

    ■  You prepare for string instructions, which execute highly efficient
        block operations, by loading SI with a source address and DI with a
        destination address.

    See Chapter 16, "Processing Strings," for information on how to use
    string instructions.

    When you write a procedure to be called by C, be careful to leave SI and
    DI in the same state they were in before C called your procedure.
    Microsoft QuickC allocates register variables in SI and DI.


2.5.3  The Pointer Registers

    The pointer registers──BP, SP, and IP──are all special-purpose registers
    that help implement procedure calls. The processor alters SP (Stack
    Pointer) and IP (Instruction Pointer) whenever you call a procedure, and
    you can use BP (Base Pointer) to access parameters placed on the stack.

    Despite their names, pointer registers are not good places to store
    pointer variables or other general program data; you should generally use
    BX, SI, and DI for that purpose.


2.5.3.1  The BP Register

    You can use BP (Base Pointer) to retrieve the contents pointed to by an
    address. However, by default, the BP register points into the stack
    segment rather than the data segment. Therefore, BP is typically used to
    access items on the stack.

    The "stack" is the area of memory that holds parameters, local variables,
    and return addresses for each procedure being executed. Although you can
    store general data in BP, it is commonly used to access parameters of the
    current procedure.

    When you use the PROC statement with a parameter list as explained in the
    next chapter, avoid altering the value of BP. The PROC directive generates
    instructions that set BP to point to the procedure's local stack area, and
    then use BP to access parameters and local data. If BP changes, all your
    references to parameters will be wrong.

    To learn how to set BP yourself, see Section 15.3.3, "Passing Arguments
    on the Stack," or Appendix A, "Mixed-Language Mechanics."


2.5.3.2  The SP Register

    The SP (Stack Pointer) register points to the current location within the
    stack segment. As you add or remove items from the stack, the processor
    changes the value of SP, so that SP always points to the top of the stack.

    The processor stack works like a stack of dishes: you push items onto the
    top of the stack as you need to save them, then pop them off the stack
    when you're ready to use them again. The stack is a last-in-first-out
    mechanism. You can only remove the item currently at the top of the stack.
    Items must be removed in the reverse order they were placed there.

    The processor automatically pushes and pops return addresses for you when
    you call or return from a procedure. A "return address" is the place a
    procedure or routine returns to when done. You can also place other values
    on the stack by using the PUSH and POP instructions.

    The PUSH instruction saves the value of a register or memory location by
    placing it on the stack. POP removes the value from the stack and places
    it back in the original location. (You can also pop the contents into some
    other location if you wish.) Use these instructions when you need to
    preserve a value. In the following example, BX holds an important value,
    but the program needs temporary use of BX:

                push    bx             ; Save BX on the stack
                mov     bx,pointer     ; Load pointer into BX
                mov     value,[bx]     ; value = *pointer
                pop     bx             ; Pop old value back into BX

    The stack also holds parameters and local variables during procedure
    calls. Sections 13.4.2, "Using the Stack," and 15.3.3, "Passing
    Arguments on the Stack," provide more information on using the stack.
    Appendix A, "Mixed-Language Mechanics," explains how to manipulate the
    stack to make room for local variables──one of the few times you should
    change the value of SP directly.


2.5.3.3  The IP Register

    You cannot adjust the IP (Instruction Pointer) register directly; it can
    only be adjusted indirectly, through control-flow instructions. For this
    reason, Quick-Assembler does not even recognize IP as a keyword.

    The IP register contains the address of the next instruction to execute.
    The instructions that control program flow (calls, jumps, loops, and
    interrupts) automatically set the instruction pointer to the proper value.
    The processor pushes the address of the next instruction onto the stack
    when you call a procedure. The processor pops this instruction into IP
    when the procedure returns. Normally, the processor increments IP to point
    to the next instruction in memory.


2.5.4  The Flags Register

    The flags register, shown in Figure 2.2, is a 16-bit register made up of
    bits that each indicate some specific condition. Most of the flags help
    determine the behavior of conditional jump instructions. Many
    instructions──most notably CMP──set these flags in a meaningful way. Other
    flags (Trap, Interrupt Enable, and Direction) do not affect conditional
    jump instructions but control the processor's general operation.

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 2.5.4 of the manual                │
    └────────────────────────────────────────────────────────────────────────┘

    The nine flags common to all 8086-family processors are summarized below,
    progressing from the low-order to high-order flags. In these descriptions,
    the term "set" means the bit value is 1, and "cleared" means the bit value
    is 0.

    Instructions actively set and clear various flags. For example, if the
    result of a SUB or CMP instruction is zero, it sets the Zero flag. This
    flag setting can, in turn, affect subsequent instructions──in particular,
    conditional jumps. Some instructions do not set the flags at all, or have
    random effects on some flags. Consult on-line Help for each instruction to
    see precisely how it affects flag settings.

    Flag                Description
    ──────────────────────────────────────────────────────────────────────────
    Carry               Is set if an operation generates a carry to or a
                        borrow from a destination operand. (Operation viewed
                        as unsigned.)

    Parity              Is set if the low-order bits of the result of an
                        operation contain an even number of set bits.

    Auxiliary Carry     Is set if an operation generates a carry to or a
                        borrow from the low-order four bits of an operand.
                        This flag is used for binary coded decimal arithmetic.

    Zero                Is set if the result of an operation is 0.

    Sign                Equal to the high-order bit of the result of an
                        operation (0 is positive, 1 is negative).

    Trap                If set, the processor generates a single-step
                        interrupt after each instruction. Debugging programs,
                        including the QuickC/QuickAssembler debugging
                        facility, use this feature to execute a program one
                        instruction at a time.

    Interrupt Enable    If set, interrupts will be recognized and acted on as
                        they are received. The bit can be cleared to
                        temporarily turn off interrupt processing.

    Direction           Can be set to make string operations process down from
                        high addresses to low addresses, or can be cleared to
                        make string operations process up from low addresses
                        to high addresses.

    Overflow            Is set if the result of an operation is too large or
                        small to fit in the destination operand. (Operation
                        viewed as signed.)


    The Carry and Overflow flags are similar, but have one major difference:
    the Carry flag is set according to the rules of unsigned operations, and
    the Overflow flag is set according to the rules of signed operations. A
    signed operation uses two's complement arithmetic to represent negative
    numbers. One of the features of this system is that a number is negative
    if the most significant bit is set. Unsigned operations do not view any
    number as negative.

    Thus, the same ADD operation can be viewed as adding FFFFH to FFFEH
    (unsigned) or -1 to -2 (signed). This operation would set the Carry flag
    (because the maximum unsigned value is FFFFH), but not the Overflow flag.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  This manual does not describe the details of two's-complement
    arithmetic. For more information, see one of the references listed in the
    Introduction.
    ──────────────────────────────────────────────────────────────────────────

    Each of the conditional jump instructions responds to a particular flag or
    combination of flags. For example, the JZ (Jump If Zero) instruction jumps
    if the Zero flag is set. The JBE (Jump If Below or Equal) jumps if either
    the Zero flag or the Carry flag is set. For a description of all the
    conditional jump instructions, see Section 15.1.2, "Jumping
    Conditionally."


2.6  Addressing Modes

    You can specify several kinds of operands: immediate, register, direct
    memory, and indirect memory. Each type of operand corresponds to a
    different addressing mode. The "addressing mode" is the method that the
    processor uses to calculate the actual value of the operand at run time.

    You don't specify addressing modes explicitly. You simply give an operand,
    and the assembler determines the corresponding addressing mode.

    The four types of operands are summarized below, and described at length
    in the rest of this section.

    Operand Type        Description
    ──────────────────────────────────────────────────────────────────────────
    Immediate           A constant value contained in the instruction itself

    Register            A 16-bit or 8-bit register

    Direct memory       A fixed location in memory

    Indirect memory     A memory location determined at run time by using the
                        address stored in one or two registers


    Direct memory and indirect memory operands are closely related. Syntax
    displays in this manual, as well as in on-line Help, often refer to memory
    operands. You can use either type of memory operand wherever memory is
    specified. From the processor's viewpoint, the only difference between
    these types of operands is how the address is determined. The address
    specified in the memory operand is called the "effective address" of the
    instruction.

    Most two-operand instructions require operands of the same size. When one
    of the operands is a register, QuickAssembler adjusts the size of the
    other, if possible, to be the size of the register──either 8 or 16 bits.
    An instruction that operates on AX and BL is illegal, since these
    registers are different sizes.

    If the sizes conflict, you can sometimes use the PTR operator to override
    the size attribute of an operand.

    Sections 2.6.1-2.6.4 discuss each of the four operand types (and
    corresponding addressing modes) in detail.


2.6.1  Immediate Operands

    An "immediate operand" is a constant value on which the instruction
    operates directly. This is the only addressing mode that involves no
    further access of registers or memory. The data follows the instruction
    right inside the executable code, thus giving rise to the name
    "immediate."

    Use immediate operands for the same reasons you would use a literal or
    symbolic constant in C. The value of an immediate operand never changes.

    An immediate operand can be a symbolic constant declared with the EQU
    operand. This operand is often used for the same purpose as the C #define
    directive. For example, consider the constant declaration:

    magic       EQU     7243

    You could use this the same way as the C statement:

    #define magic  7243

    Chapter 11, "Using Equates, Macros, and Repeat Blocks," tells more about
    defining constants with the EQU or = operator.

    An immediate operand can also be an expression made up of constants. For
    example, the following code directs QuickAssembler to calculate the
    difference between two ASCII values, then use this difference as the
    source (rightmost) operand:

                mov     bigdiff,'a'-'A'

    The assembler interprets the one-byte strings 'a' and 'A' as the ASCII
    values 97 and 65. The assembler calculates the difference──in this case,
    32──and places the resulting value into the object code. At run time, this
    value is fixed. Each time the instruction is executed, the processor moves
    the value 32 into the memory location bigdiff. This instruction is
    precisely equivalent to, but more readable than, the following:

                mov     bigdiff,32

    One-byte and two-byte strings can be immediate operands. Larger strings
    cannot be processed by a single 8086 instruction. Chapter 3, "Writing
    Assembly Modules for C Programs," explains how to process longer strings,
    one character at a time.

    The OFFSET and SEG operators turn variable names (which normally are
    memory operands) into immediate operands. These operators are similar to
    the address operator (&) in C. In Chapter 4, "Writing Stand-Alone
    Assembly Programs," you'll see how to use the OFFSET operator to treat an
    address as immediate data.

    When an instruction has two operands, you cannot place immediate data in
    the destination (leftmost) operand. (The OUT instruction is the one
    exception.)

    Examples

    var         DW        ?
    college     DW        1636
    nine        EQU       5+4           ; Declare nine as symbolic constant
                .
                .
                .
                mov       var,nine      ; Move immediate data to memory
                mov       bx,'ab'       ; Move ASCII values for 'a' and 'b'
                                        ;   into BH and BL
                mov       college,1701  ; Move immediate data to memory
                mov       ax,1+2+3+4    ; Move immediate data to AX
                mov       ax,OFFSET var ; Move address of var to AX
                int       21h           ; Immediate data is single operand
                                        ;   21 hexadecimal (33 decimal)


2.6.2  Register Operands

    A register operand consists of one of the 20 register names. The processor
    operates directly on the data stored in the register. "Register-direct"
    mode refers to the direct use of the value of the register rather than a
    memory location. Registers can also be used indirectly, to point to memory
    locations as described in Section 2.6.4, "Indirect Memory Operands."

    Most instructions can take one or more register operands. You generally
    can use any of the general-purpose registers with these instructions,
    although some instructions require specific registers. The use of segment
    registers (CS, DS, SS, and ES) is restricted. You can refer to segment
    registers only under special circumstances.

    Table 2.1 shows all the valid register names for 8086 processors. You can
    use any of these names as a register-direct operand.

    Table 2.1 Register Operands

    Register Type         Register
                        Name
    ──────────────────────────────────────────────────────────────────────────
    8-bit high registers  AH          BH          CH          DH

    8-bit low registers   AL          BL          CL          DL

    16-bit general        AX          BX          CX          DX
    purpose
    16-bit pointer and    SP          BP          SI          DI
    index
    16-bit segment        CS          DS          SS          ES

    ──────────────────────────────────────────────────────────────────────────


    Section 2.5, "8086-Family Registers," discusses registers in more detail.
    Limitations on register use for specific instructions are discussed in
    sections on the specific instructions throughout Part 3, "Using
    Instructions."

    Examples

            mov         ds,ax         ; Both operands are register direct
            mov         stuff,dx      ; Source operand is register direct
            mov         ax,1          ; Destination is register direct
            mul         bx            ; Single operand, register direct


2.6.3  Direct Memory Operands

    A direct memory operand specifies a fixed address in main memory
    containing the data to operate on. At the machine level, a direct memory
    operand is a numeric address. In your QuickAssembler source code, you
    usually represent a direct memory operand by entering a symbolic name
    previously declared with a data directive such as DB (Declare Bytes).

    A direct memory operand is similar to a simple variable in C or an array
    element with a constant index. Any object in memory can be a direct memory
    operand as long as the exact location is fixed in the executable code. The
    data at the location can change, but the location itself is the same each
    time the processor executes the instruction. This fact gives direct memory
    operands a static character. For more dynamic operations, use indirect
    memory operands.

    Examples

                mov     ax,count    ; Source operand is direct memory
                mov     count,ax    ; Destination operand is direct memory
                inc     total       ; Single operand is direct memory

    Typically, a direct memory operand is a simple label. As with immediate
    operands, you can specify a direct memory operand by entering an
    expression. As long as the address can be determined at assembly time, the
    operand is direct memory.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  Technically, a program address is not determined until link time (in
    the case of near addresses) or load time (in the case of segment
    addresses). These adjustments are necessary to support multiple modules
    and to enable the program to run anywhere in memory. However, you can
    ignore these details. If the assembler can determine the operand's address
    relative to the rest of the module, the operand is direct memory.
    ──────────────────────────────────────────────────────────────────────────

    The following example uses an expression that translates to a direct
    memory operand. This example could be used to load the value of DX into
    the third element of an array of bytes. QuickAssembler considers area[2]
    as equivalent to area+2.

                mov   area[2],dx   ; Move DX to memory location 2 bytes
                                    ;   past the address of "area"

    In the statement above, the assembler calculates an address by adding 2 to
    the address of area. The resulting address will be the same no matter what
    values are stored in registers. At run time, the address is fixed. Thus,
    the operand is direct memory.

    You can use a numeric constant as a direct memory operand. Normally,
    Quick-Assembler interprets a numeric constant as an immediate operand. To
    ensure interpretation as a memory operand, prefix the number with a
    segment register and colon (:). Brackets are optional. The following
    instructions each load AX with the contents of memory address 100
    hexadecimal in the data segment:

                mov     ax,ds:[100h]
                mov     ax,ds:100h

    Section 2.7, "Segmented Addressing and Segment Registers," provides more
    information on segment registers and the use of the colon (:). By default,
    the processor assumes that data references lie in the segment pointed to
    by DS.


2.6.4  Indirect Memory Operands

    With indirect memory operands, the processor calculates the address of the
    data at execution time, by referring to the contents of one or two
    registers. Since values in the registers can change at run time, indirect
    memory operands provide the most dynamic method for accessing data.

    Indirect memory operands make possible run-time operations such as pointer
    indirection, dynamic indexing of array elements──including indexing of
    multi-dimensional arrays──and dynamic accessing of members of a structure.
    All these operations are similar to operations in high-level languages.
    The major difference is that assembly language requires you to use one of
    several specific registers: BX, BP, SI, and DI.

    You indicate an indirect memory operand by using at least one pair of
    brackets. Use of the index operator ([ ]) is explained in more detail in
    Section 9.2.1.3.

    When you place a register name in brackets, the processor uses the data
    pointed to by the register. For example, the following instruction
    accesses the data at the address contained in BX, and then moves this data
    into AX:

                mov     ax,[bx]

    When you specify more than one register, the processor adds the contents
    together to determine the effective address (the address of the data to
    operate on). One register must be a base register (BX or BP), and the
    other must be an index register (SI or DI):

                mov     ax,[bx+si]

    You can specify one or more displacements. A "displacement" is a constant
    value to add to the effective address. A simple use of a displacement is
    to add a base address to a register:

                mov     ax,table[si]

    In the example above, the displacement table is the address of an array;
    SI holds an index to an array element. (Unlike C, an assembly-language
    index always indicates the distance in bytes between the beginning of the
    array and the element.) Each time the instruction executes, it may load a
    different element into AX. The value of SI determines which array element
    to load.

    Each displacement can be an address or numeric constant. If there is more
    than one displacement, the assembler adds them all together at assembly
    time, and places the total displacement into the executable code. For
    example, in the statement

                mov     ax,table[bx][di]+6

    both table and 6 are displacements. The assembler adds the value of table
    to 6 to get the total displacement.

    Table 2.2 shows the modes in which registers can be used to specify
    indirect memory operands.

    Table 2.2 Indirect Addressing Modes

    Mode                Syntax                  Description
    ──────────────────────────────────────────────────────────────────────────
    Register indirect   [BX] [BP] [DI] [DI]     Effective address is contents
                                                of register

    ──────────────────────────────────────────────────────────────────────────
    Based or indexed    displacement[BX]        Effective address is contents
                        displacement[BP]        of register plus displacement
                        displacement[DI]
                        displacement[SI]
    ──────────────────────────────────────────────────────────────────────────
    Based indexed       [BX][DI] [BP][DI]       Effective address is contents
                        [BX][SI] [BP][SI]       of base register plus contents
                                                of index register

    ──────────────────────────────────────────────────────────────────────────
    Based indexed with  displacement[BX][DI]    Effective address is the sum
    displacement        displacement[BP][DI]    of base register, index
                        displacement[BX][SI]    register, plus displacement
                        displacement[BP][SI]
    ──────────────────────────────────────────────────────────────────────────


    You can enclose each register in its own pair of brackets, or you can
    place the registers in the same pair of brackets separated by a plus sign
    (+). The period (.) is normally used with structures, but it also
    indicates addition. The following statements are equivalent:

                mov     ax,table[bx][di]
                mov     ax,table[bx+di]
                mov     ax,[table+bx+di]
                mov     ax,[bx][di].table
                mov     ax,[bx][di]+table
                mov     ax,table[di][bx]


2.7  Segmented Addressing and Segment Registers

    "Segmented addressing" is the internal mechanism that enables the
    processor to address up to one megabyte of main memory. This mechanism
    accesses each physical memory location by combining two 16-bit addresses.
    The two addresses can be represented in source code as follows:

    segment:offset

    The first 16-bit address is the "segment address." The second 16-bit
    address is the "offset address." In effect, the segment address selects a
    64K region of memory, and the offset address selects a byte within this
    region. Here's how it works:

    1. The processor shifts the segment address left by four places, producing
        a 20-bit address ending in four zeros. This operation has the effect of
        multiplying the segment address by 16.

    2. The processor adds this 20-bit address to the 16-bit offset address.
        The offset address is not shifted.

    3. The processor uses the resulting 20-bit address, often called the
        "physical address," to access an actual location in the one-megabyte
        address space.

    Figure 2.3 illustrates this process. The 8086-family processors were
    developed to use this mechanism because 16 bits (the size of an 8086
    register) can only address 64K at a time. However, the combined 20-bit
    address is sufficient to address a full megabyte. Note that DOS and ROM
    BIOS reserve part of this area, so that no more than 640K is available for
    program addresses.

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 2.7 of the manual                  │
    └────────────────────────────────────────────────────────────────────────┘

    A "segment" consists of a series of addresses that share the same segment
    address, but different offsets. Segments can be no more than 64K in size.
    To create large programs, you need to divide your program into multiple
    segments. Even with smaller programs, it is convenient to have separate
    code, data, and stack segments. (With tiny-model programs, the linker
    combines these segments into a single physical segment.)

    The following example helps illustrate segmented-address calculations
    further. The processor calculates the address 53C2:107A by multiplying the
    segment portion of the address by 16 (10H), and then adding the offset
    portion, as shown below:

        53C20h           Segment times 10h

    +   107Ah           Offset

        54C9Ah           Physical address

    The use of segmented architecture doesn't mean that you have to specify
    two addresses every time you access memory. The 8086-family processors use
    four segment registers, which simplify programming in the following ways:

    ■  Normally, you don't specify a segment address when you access data.
        Every data reference is relative to one of the four segment
        registers──CS, DS, SS, or ES──so the segment address is implied.

    ■  Most of the time, you don't need to tell the processor which segment
        register to use. By default, the processor uses CS for code addresses,
        DS for data addresses, and SS for stack addresses, except where
        otherwise noted in this section.

    ■  You initialize segment registers at the beginning of your program. Once
        initialized, you can continue to use the segment addresses stored in
        those registers.

    If the program uses medium, large, huge, or compact model, you may need to
    periodically reload one or more of the segment registers. These memory
    models let you use more than 64K of code or 64K of data.

    However, if the program uses small or tiny model, you never reload a
    segment register except in the following situations: to access a special
    hardware-defined location in memory, such as the video-display area, or to
    access far memory allocated to the program by DOS function 48H.

    Although each memory operand has a default segment register (usually DS,
    unless the operand uses BP), you can specify another segment register by
    using the segment override operator (:). The following example loads the
    variable far_away residing in the segment pointed to by ES:

                mov     ax,es:far_away

    For more information on this operator, see Section 9.2.3,
    "Segment-Override Operator."

    The CS Register

    The processor always uses the CS (Code Segment) register as the segment
    address of the next instruction to execute; IP (Instruction Pointer) holds
    the offset address. CS:IP represents the full address of the next
    instruction.

    Near jumps and procedure calls alter the value of IP. Far jumps and
    procedure calls alter both CS and IP. You never alter CS directly because
    the far jump and call instructions do so automatically. Furthermore, DOS
    initializes CS for you at the beginning of the program.

    The DS Register

    By default, the processor uses the DS (Data Segment) register as the
    segment address for program data. String instructions and indirect memory
    operands present some exceptions to this rule. With indirect memory
    operands, the use of BP anywhere in the operand causes SS to be the
    default segment register. Otherwise, DS is the default.

    All the Microsoft standard memory models place the most frequently used
    data in an area pointed to by DS. This area is commonly called the
    "default data area," and it can be no larger than 64K. These memory models
    use the ES register to access data outside the default data area. Your own
    programs can either use this technique, or else reload DS whenever you
    enter a new module. The standard method has the advantage of providing
    fast access to the most frequently used data.

    The SS Register

    When the processor accesses data on the stack, it uses the SS (Stack
    Segment) register as the segment register. (See the description of SP in
    Section 2.5.3 for more information about the stack.) Thus, SS:SP always
    points to the current stack position. Indirect memory operands involving
    BP also use SS as the default segment register.

    The Microsoft standard memory models set SS equal to DS. This setting
    makes some programming tasks easier. In particular, it lets you address
    stack or data addresses with either register. If you have to reload DS,
    you can always access items in the default data area by using an SS
    override.

    The ES Register

    The ES (Extra Segment) register is convenient for accessing data outside
    of the default data area. As demonstrated in Section 3.4, "Decimal
    Conversion with Far Data Pointers," you access far data by loading ES with
    the desired segment address, and then giving a segment override. Section
    13.3.2, "Loading Far Pointers," provides further information.

    ES also plays a role in string instructions. With these instructions, the
    DI (Destination Index) register is always relative to the segment address
    in ES.



────────────────────────────────────────────────────────────────────────────
Chapter 3:  Writing Assembly Modules for C Programs


    As a C programmer, you can take advantage of the superior speed and
    compactness of assembly-language routines. You can write most of your
    program in C, then write time-critical routines in assembly language.

    This chapter presents QuickAssembler programming techniques for
    interfacing to C. You can use similar techniques to interface with other
    languages. By using C with assembly language, however, you gain the
    advantage of being able to develop the entire program from within the
    integrated environment.

    If you've read Chapter 2, read this chapter to see how to use assembly
    language in a complete example module. If you skipped over Chapter 2, you
    may want to refer to it occasionally for basic concepts, such as
    instructions and registers.


3.1  A Skeleton for Procedure Modules

    Let's start by looking at the skeleton of a module with one procedure. The
    "skeleton" consists of statements that give basic structure to the module.
    Within this structure, you can supply most any instructions you want.
    Later sections of this chapter flesh out the skeleton by supplying useful
    code.

    The following skeleton assumes that the module is called by a small-model
    C program, and consists of one procedure which takes a single parameter, a
    pointer to a byte:

                .MODEL  small,c
                .CODE

    dectoint    PROC    Array:PTR BYTE
    ;
    ;   (supply executable code here)
    ;
    dectoint    ENDP
                END

    Some features of the skeleton change when you write different procedures.
    Other parts may remain the same. In particular, you'll need to add a PROC
    and ENDP statement each time you add another procedure to the module.

    Before looking at a full program example, let's examine each part of the
    skeleton.


3.1.1  The .MODEL Directive

    The .MODEL directive gives general information about the module. It uses
    the following syntax:

    .MODEL memorymodel [[,langtype [[,stacktype]]]]

    The last two fields are optional. Commas are field separators and are only
    required if you use more than one field. Usually, you'll want to enter
    values in the first two fields.

    The memorymodel and langtype fields correspond to the memory model and
    language, respectively, of the calling module. If your C program declares
    your procedure to be of type pascal or fortran, use Pascal, BASIC, or
    FORTRAN in the langtype field. These keywords specify the use of the non-C
    calling and naming conventions. Otherwise, specify C as the langtype.
    Although the langtype field is optional, you should supply it since the
    PROC features described later in this chapter require it.

    Don't use the stacktype field unless the calling C program is compiled
    with SS not equal to DS, in which case you should type in farStack.
    (QuickC does not generate code that sets SS not equal to DS, but other
    versions of Microsoft C do support this option.) The default is nearStack,
    which assumes SS is equal to DS.


3.1.2  The .CODE Directive

    The .CODE directive marks the beginning of the code segment, which is the
    section of your program that contains the actual steps to execute:

                .CODE

    Statements that follow this directive are considered part of the code
    segment. The segment continues to the end of the module or the next
    segment directive. Typically, the code segment consists of instructions
    and procedure definitions. It can also contain macro calls.

    Some procedures work with static data. In Chapter 4, "Writing Stand-Alone
    Assembly Programs," you'll see how to declare a data segment in which you
    can place data declarations.


3.1.3  The PROC Directive

    Use the PROC directive to define a procedure. The name of the procedure
    appears in the first column:

    dectoint    PROC    Array:PTR BYTE

    Because the .MODEL statement specified C-language conventions, the
    assembler prefixes the name dectoint with an underscore (_), and places
    the name into object code as a public code label.

    If your procedure alters registers that should be preserved, the optional
    USES keyword automatically generates code to push the value of these
    registers on the stack and pop them when the procedure returns. Procedures
    called by C should not corrupt the value of SI, DI, or the segment
    registers CS, DS, or SS. (The value of BP is automatically preserved.) The
    following example shows how to preserve SI and DI for a procedure that
    changes these registers:

    dectoint    PROC    USES si di, Array:PTR BYTE

    The last part of the statement declares one or more parameters. In this
    case, the procedure declares a single parameter, Array, as a pointer to a
    byte. The most common parameter types you can declare are listed below:

    Declaration         Meaning
    ──────────────────────────────────────────────────────────────────────────
    WORD                Word (two bytes)

    DWORD               Doubleword (four bytes)

    PTR BYTE            Pointer to a byte; most commonly, a pointer to a
                        character string

    PTR WORD            Pointer to a word; typically, the address of an array
                        of integers

    PTR DWORD           Pointer to a doubleword


    For example, the following procedure definition declares a procedure named
    MidStr, which takes as parameters two pointers to character strings and
    one integer:

    MidStr      PROC    Str1:PTR BYTE, Str2:PTR BYTE, Index:WORD

    References to parameters are really references to locations on the stack.
    C modules pass parameters by pushing them on the stack just before calling
    the procedure. The BP register serves as a framepointer (a pointer to the
    procedure's stack area), and each parameter is an offset from BP. The
    exact offset of each parameter depends on the memory model and calling
    convention, both established by the .MODEL directive.

    When you use QuickAssembler procedure definitions, the assembler automates
    the work of referring to parameters. Instead of setting up the
    framepointer or calculating parameter offsets, you simply refer to
    parameters by name. You can also use these names with debugging commands.

    Appendix A, "Mixed-Language Mechanics," shows the actual code that
    establishes BP as the framepointer. It also shows how to calculate
    parameter offsets.

    Section 6.4.3, "Procedure Labels," gives the complete syntax and rules
    for using the PROC statement.


3.1.4  The ENDP and END Statements

    The module ends with two statements: ENDP, which declares the end of a
    procedure, and END, which declares the end of the module:

    dectoint    ENDP
                END

    You can place any number of procedures in the same module. Each time you
    end a procedure, use ENDP. However, END should only occur once, at the end
    of the module.


3.2  Instructions Used in This Chapter

    The instructions below were introduced in Chapter 2, "Introducing 8086
    Assembly Language." They are summarized here briefly for review. The first
    group of instructions manipulates data:

    Instruction               Description
    ──────────────────────────────────────────────────────────────────────────
    MOV destination, source   Copies value of source to destination

    ADD destination, source   Adds source to destination, storing result in
                            destination

    SUB destination, source   Subtracts source from destination, storing
                            result in destination

    INC destination           Increment──adds 1 to destination

    DEC destination           Decrement──subtracts 1 from destination

    MUL source                Multiplies source by AX (if operand is 16 bits),
                            storing high 16 bits in DX and low 16 bits in AX


    The second group of instructions controls the flow of program execution:

    Instruction         Description
    ──────────────────────────────────────────────────────────────────────────
    CMP destination,    Compare──subtracts source from destination, ignoring
    source              result but setting processor flags appropriately

    JE label            Jumps to label if result of last operation was equal
                        to zero

    JAE label           Jumps to label if result of last operation was equal
                        to or above zero (unsigned operations)

    JMP label           Jumps unconditionally to label



3.3  Decimal Conversion Example

    This section uses a decimal-conversion example to illustrate the use of
    some basic instructions and directives. It features an assembly module
    that takes a pointer to a null-terminated string of characters as input
    and returns an unsigned integer value. This chapter assumes that the value
    is unsigned.

    You can compute the value of a decimal string by multiplying each digit by
    a power of 10:

    2035 = 2 x 10 cubed + 0 x 10 squared + 3 x 10 + 5

    One way to calculate the value of the number is to calculate each power of
    10 separately, then multiply each digit by the corresponding power. For
    example, you can calculate 10 cubed, and then multiply by 2.

    A much more efficient algorithm combines the calculations for powers of
    10. The algorithm adds each digit to a running total, then multiplies the
    total by 10 after every digit but the last. The following pseudo-code
    represents this algorithm, and assumes that the first character in the
    string is the most significant digit:

    initialize total to 0
    while there's another digit
        add value of digit to total
        advance to next digit
        if no more digits
            we're done
        else
            multiply total by 10

    A simple C program that calls the procedure might look like this:

    extern  unsigned int  dectoint( char * );
    main()
    {
        char    digits[81];

        gets( digits );
        printf( "Numeric value is: %d", dectoint( digits ) );
    }

    The procedure itself could be written in C as:

    unsigned int dectoint( char *Array)
    {
        unsigned int total = 0;       /* Initialize total */

        while( *Array != '\0' )       /* While there's another digit
        {
            total += *Array - '0';    /* Add value to total */
            Array++;                  /* Advance to next digit */
            if( *Array == '\0' )      /* If no more digits,  */
                break;                /*   we're done    */
            total *= 10;              /* Else, multiply by 10 */
        }
        return( total );
    }

    This chapter shows how to write the same procedure in assembly language.
    The assembly-language version will be faster because it can make strategic
    use of registers and choose optimal instructions. You can write a main
    module with C code, place the assembly routine in a separate module with a
    .ASM extension, then link them together by creating a program list.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  You can build mixed-language programs by placing both .C and .ASM
    files in a program list. Place the main module first. In the Assembler
    Flags dialog box, make sure that you select either Preserve Case or
    Preserve Extrn (the default). From the QCL command line, use the /Cl
    (preserve case) or /Cx (preserve case of external symbols) option. QC
    calls the linker with case sensitivity on, so C and assembler symbols must
    match exactly.
    ──────────────────────────────────────────────────────────────────────────

    Before writing the assembly procedure, we first need to develop a strategy
    for using registers.

    The AX (Accumulator) register is ideal for keeping the running total. The
    algorithm changes this total through both addition and multiplication. The
    MUL instruction requires the use of AX. By keeping the total in AX at all
    times, the procedure avoids having to constantly reload this register.

    The BX register should be used to access the individual digits. The
    procedure receives the address of the digit string, and then retrieves
    each ASCII byte through pointer indirection. BX is one of the few
    registers that supports this operation. SI and DI could also be used this
    way, but C-generated code requires that SI and DI be preserved. BX can be
    freely altered.

    The procedure needs to allocate two more registers: one for holding the
    multiplication factor (10), and another for adjusting the binary value of
    the digit. The procedure uses CX and DX for these purposes. In this case,
    CX and DX are interchangeable. However, we use CX for multiplication now,
    because in the hex conversion example, CX will be needed for a special
    kind of multiplication──shifting bits. We use DX as an intermediate
    location to receive a byte and then add a word to AX.

    The complete assembly-language module is shown below:

                .MODEL  small,c
                .CODE

    dectoint    PROC    Array:PTR BYTE

                sub     ax,ax               ; ax = 0
                mov     bx,Array            ; bx = Array
                mov     cx,10               ; factor = CX = 10
                sub     dx,dx               ; dx = 0
                cmp     BYTE PTR [bx],0     ; Compare byte to NULL
                je      done                ; If byte=0 we're done
    top:
                mov     dl,BYTE PTR [bx]    ; Get next digit
                sub     dl,'0'              ; Convert numeral
                add     ax,dx               ; Add to total
                inc     bx                  ; Point to next byte
                cmp     BYTE PTR [bx],0     ; Compare byte to NULL
                je      done                ; If byte=0 we're done
                mul     cx                  ; AX = AX * 10
                jmp     SHORT top           ; Goto top of loop
    done:
                ret                         ; Exit procedure
    dectoint    ENDP
                END

    We'll examine each section of the module in turn. The first three
    statements are directives that form part of the module's skeleton. The
    PROC directive, when used with one or more parameters as it is here,
    generates code to set the framepointer (BP) properly so that you can
    access parameters.

                .MODEL  small,c
                .CODE

    dectoint    PROC    Array:PTR BYTE

    The rest of the module consists of instructions──the actual core of the
    program. The first four instructions initialize the registers AX, BX, CX,
    and DX. Note that when initializing a register to 0, the procedure uses
    SUB in preference to MOV. Any value subtracted from itself leaves zero in
    the destination operand. Although the result is the same, the SUB
    instruction is smaller and faster because it involves no immediate data.

                sub     ax,ax               ; ax = 0
                mov     bx,Array            ; bx = Array
                mov     cx,10               ; factor = CX = 10
                sub     dx,dx               ; dx = 0

    The next two instructions handle a special case──that of a string
    containing no digits at all. Recall that the procedure is passed a
    null-terminated string. The operand BYTE PTR [bx] is a memory operand
    referring to the byte pointed to by BX. If the string is empty, Array
    points to a null byte. The two instructions test for a 0 (null) value and
    jump to the end of the procedure if 0 is detected:

                cmp     BYTE PTR [bx],0     ; Compare byte to NULL
                je      done                ; If byte=0 we're done

    In the CMP instruction above, the BYTE PTR operator is strictly required,
    because otherwise the assembler would have no way of knowing whether to
    compare 0 to the byte or a word pointed to by BX. However, when one of the
    operands is a register (as is the case with the MOV instruction below),
    the BYTE PTR operator is optional.

    The next eight instructions consist of a loop executed once for every
    digit character in the string. The label top indicates the top of the
    loop, and the first three instructions add the value of the digit to AX:

    top:
                mov     dl,BYTE PTR [bx]    ; Get next digit
                sub     dl,'0'              ; Convert numeral
                add     ax,dx               ; Add to total

    The first instruction above retrieves the digit. The next instruction
    converts the digit's ASCII value to the numeric value by subtracting the
    value of the character '0' (48 decimal). This statement works because the
    ASCII character set places all digit characters in sequence from 0 to 9.
    Finally, the procedure adds the resulting value to the running total
    stored in AX. Note that the operands in each case are the same size. The
    first two instructions above access DL, the low byte of DX.

    The next three instructions advance to the next byte in the string, and
    test it for equality to zero. Getting the next byte is just a matter of
    adding the value 1 to BX (with the INC instruction), so that BX points to
    the next byte. The other two instructions are identical to previous
    instructions that tested for zero value.

                inc     bx                  ; Point to next byte
                cmp     BYTE PTR [bx],0     ; Compare byte to NULL
                je      done                ; If byte=0 we're done

    If the next byte is a null byte, the processor jumps to the end of the
    program. Otherwise, the processor continues executing the bottom of the
    loop, which multiplies the current total by 10 (stored in CX), and then
    jumps to the top:

                mul     CX                  ; AX = AX * 10
                jmp     SHORT top           ; Goto top of loop

    Notice the operator SHORT used with the jmp instruction. This optional
    operator makes the encoded instruction smaller and faster, but it can be
    used only if the destination of the jump is less than 128 bytes away.
    SHORT is explained in more detail in Section 9.2.4.2.

    The loop is now complete. The rest of the module exits and marks the end
    of the segment and the module. The RET statement causes the assembler to
    generate instructions to do the following: restore the stack, restore the
    framepointer (BP), and return properly for the memory model (small) and
    calling convention (C).

    done:
                ret                         ; Exit procedure
    dectoint    ENDP
                END

    Microsoft high-level languages always look for function return values in
    AX, if two bytes long, or in DX and AX, if four bytes long. If the return
    value is longer than four bytes, DX:AX points to the value returned. If
    the return value is one byte, AL contains the value.

    The C module that calls this procedure looks in AX for the return
    value──as does all high-level-language code that calls a function
    returning a two-byte value. In this case, AX already contains the results
    of the calculation. No further action is required.


3.4  Decimal Conversion with Far Data Pointers

    This section uses the same basic algorithm introduced in the last section,
    but presents coding techniques for different memory models.

    The .MODEL directive resolves all differences in the size of code
    addresses. However, when you use memory models that use far data pointers
    (compact, large, and huge), you must make some additional adjustments.

    The program below shows the module rewritten for large memory model. This
    example works for compact model if large in the first line is replaced
    with compact.

                .MODEL  large,c
                .CODE

    dectoint    PROC    USES ds, Array:PTR BYTE

                sub     ax,ax               ; ax = 0
                lds     bx,Array            ; ds:bx = Array
                mov     cx,10               ; factor = CX = 10
                sub     dx,dx               ; dx = 0
                cmp     BYTE PTR [bx],0     ; Compare byte to NULL
                je      done                ; If byte=0 we're done
    top:
                mov     dl,BYTE PTR [bx]    ; Get next digit
                sub     dl,'0'              ; Convert numeral
                add     ax,dx               ; Add to total
                inc     bx                  ; Point to next byte
                cmp     BYTE PTR [bx],0     ; Compare byte to NULL
                je      done                ; If byte=0 we're done
                mul     cx                  ; AX = AX * 10
                jmp     SHORT top           ; Goto top of loop
    done:
                ret                         ; Exit procedure
    dectoint    ENDP
                END

    This procedure is the same as the one in the last section, except for two
    lines. The PROC directive now includes a USES clause, and the LDS
    instruction replaces the first MOV instruction.

    The procedure loads the DS register with the segment address of Array,
    thus causing subsequent data references to be relative to the new segment
    address. However, procedures called from C must preserve DS. The PROC
    statement, therefore, includes USES ds, which generates code to place DS
    on the stack.

    The LDS instruction (Load Data Segment) does the actual loading of the DS
    register. This instruction is similar to the MOV instruction:

                mov     bx,Array            ; bx = Array
                                            ;   2-byte data pointer
                lds     bx,Array            ; ds:bx = Array
                                            ;   4-byte data pointer

    The LDS instruction accomplishes two moves. First, it loads the offset
    portion of the pointer into the specified register (BX). Second, it loads
    the segment portion of the pointer into DS.

    ──────────────────────────────────────────────────────────────────────────
    NOTE   For the LDS and LES instructions to work properly, the segment
    portion must be stored in the upper word of the four-byte (far) pointer. C
    meets this requirement by always pushing the segment portion of the
    pointer on the stack first. (The stack grows downward.) In your own
    programs, you declare far pointers with the DD directive. You initialize
    them by loading a segment address into the upper word of the pointer
    variable and an offset address into the lower word.
    ──────────────────────────────────────────────────────────────────────────


3.4.1  Writing a Model-Independent Procedure

    In the case of this procedure, the use of the LDS instruction is most
    convenient. Once DS is loaded with the new segment address, all subsequent
    memory references are automatically correct. No further adjustments are
    needed.

    The simplicity of this technique makes it easy to write a module that is
    completely independent of memory models. This module can then be linked
    with any C program. To adjust memory model, you simply change the .MODEL
    directive, and recompile. In fact, the memory model itself can even be
    specified with a compile flag so that source code never need change.

    The model-independent version contains only a few lines different from the
    previous example:

    %           .MODEL  mem,c
                .CODE

    dectoint    PROC    USES ds, Array:PTR BYTE

                sub     ax,ax               ; ax = 0
                IF      @DataSize
                lds     bx,Array            ; ds:bx = Array
                ELSE
                mov     bx,Array            ; bx = Array
                ENDIF

    The .MODEL directive operates on an undefined variable, mem. You define
    this variable on the QCL command line or in the Assembler Flags dialog
    box. For example, to assemble with QCL in compact model, enter the
    following text in the defines text box:

    /Dmem=compact

    The IF, ELSE, and ENDIF directives cause conditional assembly. The
    @DataSize predefined macro is equal to 1 (true) if the memory model uses
    far data pointers, and 0 (false) otherwise. The statement IF @DataSize
    begins a conditional-assembly block that assembles the LDS instruction if
    the memory model uses far data pointers; it assembles the MOV instruction
    otherwise.

    For more information on conditional assembly, see Chapter 10, "Assembling
    Conditionally."

    The USES clause is retained for all memory models, since even with small
    model it does no harm. However, to increase efficiency, you may wish to
    include the PROC statement inside conditional-assembly blocks.


3.4.2  Accessing Far Data through ES

    The LDS instruction is inconvenient if you need to access items in the
    default data segment, because you have no guarantee that DS still points
    to that area of memory. Therefore, it's sometimes more efficient to leave
    DS alone and use the ES register to access far data.

    The standard C memory models all use the LES instruction to access far
    data. You can also use this method, but it is not required, since it has
    no effect on the interface between modules. Give the LES instruction to
    load a far data pointer, which will load the ES register with the new
    segment address. Then give the ES override whenever you refer to data in
    the far segment. This method requires alteration of all instructions that
    access the string data:

                les     bx,Array            ; es:bx = Array
                .
                .
                .
                cmp     es:BYTE PTR [bx],0  ; Compare byte to NULL

    Once ES is loaded with the segment address of far data, access objects in
    the default data area (the segment containing near data) as you normally
    would. Use the ES override to access the far data.


3.5  Hexadecimal Conversion Example

    The following example builds on the decimal example in Section 3.3,
    adding the additional logic needed to convert hexadecimal rather than
    decimal strings.

    Hexadecimal conversion can use an algorithm similar to the one used
    earlier for decimal conversion, with these adjustments made:

    ■  The procedure multiplies the running total by 16, not 10.

    ■  The procedure converts the letters A-F to numeric values, in addition
        to converting the numerals 0-9.

    You could make the first adjustment by loading CX with 16 instead of 10. A
    much more efficient method is to use the SHL (Shift Left) instruction to
    shift an object's bits left by four places. This effectively multiplies
    the object by 16.

    The second adjustment requires more complex logic. Hexadecimal digits can
    consist of either letters or numerals. The procedure must consider three
    different cases──one for each sequence of hexadecimal characters:

    Range of Characters Conversion Required
    ──────────────────────────────────────────────────────────────────────────
    0-9                 Convert to face value. Subtract ASCII value of '0'.

    A-F, and a-f        Convert to values 10-15. Convert all letters to
                        uppercase, then subtract ASCII value of 'A' and add
                        10.


    We convert all letters to uppercase in an optimized fashion by taking
    advantage of the ASCII coding sequence. Uppercase letters are coded as 41H
    onward. Lowercase letters are coded as 61H onward. Consequently, each
    lowercase letter differs from the corresponding uppercase letter by
    exactly one bit. We use the AND instruction, with the immediate operand
    0DFH, to mask out this bit. This operation has the effect of setting the
    third highest bit to 0.

            0110 0001  61h = 'a'     0100 0001  41h = 'A'
    AND      1101 1111  DFh           1101 1111  DFh
            ======================   ======================
    result   0100 0001  41h = 'A'     0100 0001  41h = 'A'

            0110 0010  62h = 'b'     0100 0010  42h = 'B'
    AND      1101 1111  DFh           1101 1111  DFh
            ======================   ======================
    result   0100 0010  42h = 'B'     0100 0010  42h = 'B'

    The beauty of the operation is that it converts lowercase letters to
    uppercase, but leaves uppercase letters alone. If the third highest bit is
    already 0 (as is the case with uppercase letters), doing an AND operation
    with 0DFH has no effect. This operation removes the need to handle
    lowercase letters as a separate case.

    The revised algorithm does the following:

    initialize total to zero
    while there's another digit
        move byte to temporary location
        if ascii value < 'A'
            Subtract '0'
        else
            Convert lowercase to uppercase
            Subtract 'A'-10
        add byte value to total
        advance to next digit
        if no more digits
            we're done
        else
            shift total left by four bits

    The assembly-language code below implements this algorithm. The code tests
    for each range, performing a different conversion for each case. Note the
    use of JB (Jump If Below), which jumps to the specified label if the
    previous comparison or subtraction produced a negative value──that is, if
    the first operand is less than the second.

                .MODEL  small,c
                .CODE

    hextoint    PROC    Array:PTR BYTE

                sub     ax,ax             ; ax = 0
                mov     bx,Array          ; bx = Array
                mov     cl,4              ; Prepare to shift left by 4
                sub     dx,dx             ; dx = 0
                cmp     BYTE PTR [bx],0   ; Compare byte to NULL
                je      done              ; if byte=0 we're done
    top:
                mov     dl,BYTE PTR [bx]  ; Move byte to DL
                cmp     dl,'A'            ; ASCII value >= 'A'?
                jae     isletter          ; If so, goto isletter
                sub     dl,'0'            ; Convert ascii to numeric
                jmp     addbyte           ; Go add value of byte
    isletter:
                and     dl,0DFh           ; Convert to uppercase
                sub     dl,'A'-10         ; Convert ascii to numeric
    addbyte:
                add     ax,dx             ; Add value to total
                inc     bx                ; Point to next byte
                cmp     BYTE PTR [bx],0   ; Compare byte to NULL
                je      done              ; If byte=0 we're done
                shl     ax,cl             ; AX = AX * 16
                jmp     SHORT top         ; Goto top of loop
    done:
                ret
    hextoint    ENDP
                END

    The beginning of the procedure initializes the CL register to 4. This step
    is necessary, because you can use the SHL instruction (Shift Left) in only
    two ways: you can shift by exactly one bit, or you can shift by the number
    of places indicated in CL. Clearly, using CL is more efficient than a
    sequence of four shift instructions.

    The main loop reads a character, tests it, and makes one basic decision:
    is the character a letter or not? This test takes advantage of the ASCII
    coding sequence. If the value of the character is equal to or greater than
    'A', it cannot be one of the digits 0-9. The procedure uses the JAE
    instruction (Jump If Above or Equal) to test for this condition.

    top:
                mov     dl,BYTE PTR [bx]  ; Move byte to DL
                cmp     dl,'a'            ; ASCII value >= 'A'?
                jae     isletter          ; If so, goto isletter

    If the character is a letter, the procedure first converts the letter to
    uppercase──using an AND instruction that converts lowercase letters but
    leaves uppercase letters unchanged. The following instruction can then
    properly handle all letters the same way, regardless of their original
    case:

    isletter:
                and     dl,0DFh           ; Convert to uppercase
                sub     dl,'A'-10         ; Convert ascii to numeric

    For simplicity, the procedure accepts invalid letters. You could easily
    enhance it to verify that the letters are hexadecimal.



────────────────────────────────────────────────────────────────────────────
Chapter 4:  Writing Stand-Alone Assembly Programs


    With QuickAssembler, you can write stand-alone assembly programs to
    produce small, efficient utilities. For example, you might write a utility
    in assembly language to count the number of lines or paragraphs in a file.
    These programs start and end with assembly code and generally do not
    involve any links to high-level languages.

    Stand-alone assembly programs can yield remarkably small .EXE files. They
    require relatively little space, because they do not include the start-up
    code for a high-level language. And often you can make your assembly
    program even smaller by converting it to a .COM file as shown in this
    chapter. Some useful .COM files take up less than 100 bytes of memory.

    This chapter first describes the directives you need to write stand-alone
    assembly programs, reviews instructions used in the chapter's examples,
    and then presents a simple stand-alone program. Next, Sections 4.4-4.6
    look closely at each segment of the program: stack, data, and code.
    Finally, the chapter describes how to create a program in the .COM format.


4.1  A Skeleton for Stand-Alone Programs

    This chapter uses the simplified segment directives described in the
    previous chapter, and introduces three more directives──.STACK, .DATA, and
    .STARTUP. The simplified segment directives produce programs using the
    Microsoft standard segment format.

    This format is not required, since your stand-alone program need not be
    compatible with a high-level-language module. However, the standard format
    is convenient because you can specify a number of different memory models,
    and you are freed from having to specify segment names, attributes, and
    register assumptions.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  Occasionally, you may need a customized segment structure. Linking
    assembly code to a non-Microsoft language is the most common situation
    that requires customized segments. QuickAssembler lets you use full
    segment definitions any time you need to customize segments. However, you
    should find that simplified segment directives support the vast majority
    of assembly-language programming you do──even when you write .COM files.
    ──────────────────────────────────────────────────────────────────────────

    The skeleton for the programs in this chapter includes a stack, data, and
    code segment. Note that one of the directives, .MODEL, will change when
    you alter the memory model. The other statements remain the same.

                .MODEL   small               ; Use small memory model

                .STACK   100h                ; Declare 256-byte stack

                .DATA
    ;
    ;    (place data declarations here)
    ;
                .CODE
                .STARTUP                     ; Set up DS, SS, and SP registers
    ;
    ;    (place executable code here)
    ;
                END

    Sections 4.1.1-4.1.3 examine each of the statements in this skeleton more
    closely.


4.1.1  The .MODEL Directive

    The .MODEL directive performs the same role that it did in the previous
    chapter; it defines the overall attributes of the module. Note, however,
    that with a stand-alone program, a language type is not always required. A
    language type is useful when a module contains one or more procedures.
    Otherwise, you need only type .MODEL followed by a memory model:

                .MODEL   small               ; Use small memory model

    The memory model can be TINY, SMALL, MEDIUM, COMPACT, LARGE, or HUGE. Most
    of these memory models may be familiar to you if you have used QuickC. For
    a complete description of each memory model, see Section 5.1.1.

    The TINY memory model is new; it alone results in the creation of a .COM
    file rather than a .EXE file. Section 4.8, "Creating .COM Files," gives a
    complete example featuring the use of tiny memory model.

    Generally, to change memory model you change the .MODEL directive. You
    also change the way you load and use data pointers, as described in
    Chapter 3, "Writing Assembly Modules for C Programs." With these changes
    made, many programs can readily be reassembled for a new memory model.
    (However, as you'll see in Chapter 5, "Defining Segment Structure," you
    cannot use .FARDATA segments in tiny, small, or medium model, and this may
    require further revision of code in some cases.)


4.1.2  The .STACK, .CODE, and .DATA Directives

    Each of the segment directives──.STACK, .CODE, and .DATA──declares the
    beginning of a segment.

    The code and data segments begin with .CODE and .DATA, respectively. Each
    of these segments continues to the next segment directive or the end of
    the program. The data segment contains data and symbolic constant
    declarations. The code segment contains instructions.

    However, the stack segment consists of only one line:

    .STACK [[size]]

    By default, QuickAssembler interprets size according to the current radix,
    which by default is decimal. You can specify a hexadecimal constant by
    using the H suffix. (Example: 200h.) The size argument is optional. If you
    leave it out, the assembler creates a stack 1024 bytes long.

    Unless the program is written in tiny memory model, you should always
    declare a stack segment in your main module. Section 4.4, "Inside the
    Stack Segment," explains the purpose of this segment.


4.1.3  The .STARTUP Directive

    Unlike C programs, assembly-language programs have to initialize register
    values. Specifically, the program has to initialize DS, the Data Segment
    register; CS and IP, which point to the first instruction to execute; and
    SS and SP, the stack registers.

    By far the easiest way to initialize all these registers is to just
    include .STARTUP, a simple directive that takes no arguments:

                .STARTUP         ; Set up DS, SS, and SP registers

    When you use this directive, the assembler generates code to initialize
    your registers the way Microsoft high-level languages do. The generated
    code is similar to some of the instructions in the C start-up code. The
    directive takes care of minimal start-up, but many programs will need to
    do additional start-up tasks, such as releasing unused memory.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  The start-up sequence adjusts SS and SP so that SS is equal to DS.
    This starting condition gives you some advantages. If you later have to
    alter the value of DS, you can always access a data object as an indirect
    operand using BP, or through an SS segment override. To avoid this
    starting sequence, so that the stack and data are separate physical
    segments, use the farStack keyword with the .MODEL directive, as described
    in Section 5.1.3.
    ──────────────────────────────────────────────────────────────────────────


4.2  Instructions Used in This Chapter

    This section summarizes the instructions used in this chapter. Because the
    program examples are simple, only a very few of the 80-odd instructions of
    the 8086 are featured here.

    This chapter features four instructions:

    Instruction         Description
    ──────────────────────────────────────────────────────────────────────────
    MOV destination,    Moves source to destination
    source
    INT number          Generates the indicated interrupt signal, causing
                        processor to call a memory-resident interrupt routine

    DEC destination     Decrement──subtracts 1 from destination

    JNZ label           Jump If Not Zero──jumps to label if result of last
                        operation was not zero


    Most of the instructions above were introduced in Chapter 2, "Introducing
    8086 Assembly Language." The new instruction is INT.

    The INT instruction generates a software interrupt signal, causing the
    processor to call an interrupt service routine usually residing in a DOS
    or ROM-BIOS memory area. This call is much like a procedure call; the
    processor executes a specific function and returns to the program when the
    routine is complete.

    There are two major differences between an interrupt call and a procedure
    call. First, instead of calling a procedure you have written, an INT
    instruction calls a DOS system routine or ROM-BIOS service. These
    low-level routines carry out a variety of basic operations, such as
    reading the keyboard, writing to the screen, or using the file system.
    Most DOS services are accessed through interrupt 21H (33 decimal).

    The second major difference is syntactic. You follow the INT keyword by an
    interrupt number (in the range 0 to 255), rather than a procedure name. In
    many cases, you further specify the interrupt routine by loading AH with a
    function number.


4.3  A Program That Says Hello

    The following sample program prints Hello world and then successfully
    exits back to DOS. You can use this program as a template and insert your
    own code and data.

                .MODEL  small                ; Use small model

                .STACK  100h                 ; Allocate 256-byte stack

                .DATA
    message     DB    "Hello, world.",13,10  ; Message to print
    lmessage    EQU   $ - message            ; Determine length of message
                .CODE
                .STARTUP                     ; Use standard startup code

                mov   bx,1                   ; Load 1 - file handle
                                            ;   for standard output
                mov   cx,lmessage            ; Load length of message
                mov   dx,OFFSET message      ; Load address of message
                mov   ah,40h                 ; Load no. of DOS Write function
                int   21h                    ; Call interrupt 21H (DOS)

                mov   ax,4c00h               ; Load no. of DOS Exit function
                                            ;   in AH, and 0 exit code in AL
                int   21h                    ; Call interrupt 21H (DOS)

                END

    The first statement determines the memory model of the program:

                .MODEL  small                ; Use small model

    This statement specifies small memory model, which places code and data in
    two separate segments, each of which cannot exceed 64K.

    The next few sections consider the rest of this program──stack, data, and
    code.


4.4  Inside the Stack Segment

    The stack segment is the easiest to create, because with simplified
    segment directives you enter only one statement:

                .STACK  100h                  ; Allocate 256-byte stack

    Each processor or interrupt call uses up stack space. The stack stores
    return addresses, parameters, and local variables for each procedure
    called. When a procedure or interrupt routine returns, the stack space it
    used is restored. The more procedure calls your program makes without
    returning, the more stack area it requires. Programs that nest many
    procedures or use recursion (in which a procedure calls itself repeatedly)
    may require large stacks. Unfortunately, there is no formula for
    determining how large a stack is needed.

    A 256-byte stack (100 hexadecimal) is adequate for most small programs.
    For this sample program, which makes one interrupt call but no procedure
    calls, 256 bytes provides an ample margin of error.

    You can also create a stack by using full segment definitions. See Section
    5.2, "Full Segment Definitions," for more information.


4.5  Inside the Data Segment

    A single keyword declares the beginning of the segment:

                .DATA

    QuickAssembler considers all statements following this line to lie in the
    data segment, up until the next segment declaration or END directive. The
    END directive marks the end of the source file.

    The next two statements are directives that declare a string of characters
    and a symbolic constant:

    message     DB     "Hello, world.",13,10  ; Message to print
    lmessage    EQU    $ - message            ; Determine length of message

    The first statement above declares a series of bytes. The label message is
    a symbolic name that QuickAssembler associates with the string's starting
    address.

    The assembler allocates 15 bytes in the data segment, and initializes
    these bytes to the ASCII values for H, e, l, l, o, and so forth. The
    values 13 and 10 indicate a carriage return and line feed, respectively,
    causing the program to move the cursor to the beginning of the next line
    when it prints the string.

    The second directive in the data segment declares a symbolic constant
    equal to the length of the string:

    lmessage    EQU    $ - message            ; Determine length of message

    Again, the item in the first column, lmessage, is the label of the
    statement. The EQU directive equates the label with the value of the
    operand itself. EQU does not allocate memory.

    The operand field contains $ - message, which in this case equals 15. We
    could just as easily have entered 15 in the operand field. However, the
    item $ - message is guaranteed to be equal to the length of the string,
    even if you later rewrite the initial string value.

    The dollar sign ($) is the "location counter," which represents the
    current address of the statement. QuickAssembler translates the full
    expression as "Take the current address ($) and subtract the address of
    message." The current address is one byte after the end of the string.
    Thus, $ - message is automatically equal to the length of the string.


4.6  Inside the Code Segment

    A single keyword declares the beginning of the code segment:

                .CODE

    The code segment consists of all statements between .CODE and the END
    statement, which marks the end of the source code. In this example, all
    the statements in the code segment, aside from .STARTUP, are instructions.

    The program has three basic tasks. Each instruction helps carry out one of
    these operations:

    1. Initialize registers

    2. Call a DOS function to print the message

    3. Call a DOS function to exit the program gracefully

    The .STARTUP directive initializes registers. If you write a main module
    without this directive, you must explicitly initialize DS, CS, and IP.
    Furthermore, if you want SS to equal DS (which gives some programming
    advantages), you must adjust both SS and SP.

    To see how to initialize registers without the use of .STARTUP, see
    Chapter 5, "Defining Segment Structure."

    After registers are initialized, a series of five instructions makes the
    call to DOS that prints the message:

                mov   bx,1                   ; Load 1 - file handle for
                                            ;   standard output
                mov   cx,lmessage            ; Load length of message
                mov   dx,OFFSET message      ; Load address of message
                mov   ah,40h                 ; Load no. of DOS Write function
                int   21h                    ; Call interrupt 21H (DOS)

    The first four instructions prepare for the DOS call. Interrupt calls
    generally use registers to receive parameters. Unlike procedure calls,
    they do not reference the stack for this information. The DOS Write
    function uses the following registers to receive data:

    Register            Data
    ──────────────────────────────────────────────────────────────────────────
    AH                  Selects the DOS function. 40H is the Write function.

    BX                  File handle to which to write. The number 1 is a
                        reserved file handle that always corresponds to
                        standard output. "Standard output" is normally
                        synonymous with the computer screen, unless you
                        redirect program output. If you were writing to a
                        file, you would first open the file and use the file
                        handle returned by the DOS open-file function.

    CX                  Length of the message. The second statement in the
                        data segment determined this length.

    DS:DX               The beginning address of the actual message text.
                        Remember that DS was loaded earlier with the address
                        of the data segment, so it does not need to be
                        reloaded now.


    This procedure uses the OFFSET operator to load DX with the address of the
    message. Although variables are translated to addresses, the processor
    normally interprets a variable address as a memory operand──that is, the
    processor operates on the data at the address, not the address itself.

    The OFFSET operator extracts the offset portion of the address and turns
    it into an immediate operand. If the OFFSET operator was not used the DOS
    routine would not receive the address of message, but would instead
    receive the value of the first byte. The OFFSET operator is similar to the
    address operator (&) in C. Use it whenever you need to pass an address
    rather than a value.

    After the interrupt service returns, the AX register contains the number
    of bytes written. The programs in this chapter do not use this return
    value, but a more sophisticated program might. In particular, if AX
    (number of bytes written) is less than CX (number of bytes requested to be
    written), then an error has occurred.

    Each DOS function has its own conventions for receiving data in different
    registers. Consult the Microsoft MS-DOS Programmer's Reference for a
    complete description of each function. The Assembler Contents selection
    from the Help menu also describes the major DOS functions.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  Each DOS function has conventions for getting and returning values
    in registers and flags. Bear in mind that values placed in any of these
    registers may change. If you need to preserve register values before
    making a DOS call, use the PUSH and POP instructions. See Section 13.4.1,
    "Pushing and Popping," for more information on how to preserve register
    values.
    ──────────────────────────────────────────────────────────────────────────

    The INT instruction makes the actual call to DOS. The interrupt number for
    the majority of DOS functions is 21H. You use different interrupt numbers
    to call ROM-BIOS services.

    The final two instructions cause the program to terminate operation and
    return control to DOS. High-level language programmers can ignore the need
    to exit a program explicitly, if they like. But when you write a
    stand-alone assembly program, you don't have this luxury. The program must
    exit explicitly. Otherwise, the processor continues to execute random
    instructions after the end of the program, making the system appear to
    crash.

    The DOS Exit function (service 4CH) is the preferred method for exiting
    back to DOS. This function uses two register values:

    Register            Data
    ──────────────────────────────────────────────────────────────────────────
    AH                  Selects the DOS function. 4CH is the Exit function.

    AL                  Exit code. Batch files can use this exit code as an
                        "errorlevel" indicator. An exit code of 0 usually
                        indicates no error.


    A single instruction loads both registers:

                mov   ax,4c00h                   ; Load number of DOS Exit func
                                                ;   in AH, and 0 exit code in

    A single MOV instruction actually moves data into two registers──AH and
    AL. AH is loaded with 4CH, the function number for the DOS exit function,
    and AL is loaded with 0, an exit code indicating no error.

    Finally, another INT instruction calls DOS.

                int   21h                        ; Call interrupt 21H (DOS)


4.7  Making the Program Repeat Itself

    Once you understand the template for writing stand-alone programs, you can
    alter the sample program given above and generate your own code. This
    section alters the sample program so that it prints out a different
    message, and prints it ten times.

    The new sample program is listed below:

                .MODEL  small                    ; Use small model

                .STACK  100h                     ; Allocate 256-byte stack

                .DATA
    message     DB    "Hello, ten times.",13,10  ; Message to print
    lmessage    EQU   $ - message                ; Determine length of message
    count       DW    10

                .CODE
                .STARTUP                         ; Use standard startup code

                mov   bx,1                       ; Load 1 - file handle for
                                                ;   standard output
                mov   cx,lmessage                ; Load length of message
                mov   dx,OFFSET message          ; Load address of message
    printit:    mov   ah,40h                     ; Load no. of DOS Write functi
                int   21h                        ; Call interrupt 21H (DOS)

                dec   count                      ; count = count-1
                jnz   printit                    ; if count > 0, print again

                mov   ax,4c00h                   ; Load DOS 4C function number
                                                ;   in AH, and 0 exit code in
                int   21h                        ; Call interrupt 21H (DOS)

                END

    Note the following changes:

    ■  The string data is different.

    ■  The data segment includes a new variable, count.

    ■  One of the instructions is now labeled printit.

    ■  Two additional instructions decrement count, then loop back to the
        label printit if count is greater than zero.

    The string data is longer than before, and QuickAssembler must allocate
    more bytes than in the previous version of the program. However, the EQU
    statement that follows guarantees that the assembler still calculates
    string length correctly:

    message     DB    "Hello, ten times.",13,10 ; Message to print
    lmessage    EQU   $ - message               ; Determine length of message

    The new variable is actually a memory location of word size (two bytes).
    QuickAssembler allocates another two bytes in the data segment, and
    initializes these bytes:

    count       DW    10

    The label count becomes associated with the address of the data, and the
    number 10 is the initial value placed at this memory location. However,
    the value can change.

    The instruction mov ah,40h now has a label, because the program needs to
    return here to repeat the print operation. Not all instructions need a
    label──only those that the program may need to jump to directly.

    The two new instructions cause the program to repeat the print operation
    ten times:

                dec   count                     ; count = count-1
                jnz   printit                   ; if count > 0, print again

    The DEC instruction subtracts 1 from the memory location count, and sets
    processor flags according to the result of the operation. JNZ then jumps
    to the specified label if the result was not zero. The combined effect of
    these two instructions is to repeat the previous instructions (from
    printit onward) ten times. To change the number of repetitions, initialize
    count with a different value.

    Note that the DOS print function returns a value in the register
    AX──specifically, the number of bytes written. The program jumps back to
    printit so that AH is reloaded before the call to DOS.

    You can optimize this program further by using a register instead of the
    memory location count. For example, to use the register SI as the counter,
    follow these steps:

    ■  Remove the declaration of count.

    ■  Initialize SI to 10 at the beginning of the program with the
        instruction mov si,10.

    ■  Decrement SI instead of count near the bottom of the loop.

    With this program, it's safe to use SI as the counter, since SI is not
    needed for any other purpose. However, some programs make special use of
    SI. In these cases, it may be more efficient to place the count in a
    variable.


4.8  Creating .COM Files

    You can use QuickAssembler to produce .COM files as well as .EXE files.
    (However, these programs cannot contain any C modules.) Most of the memory
    models, ranging from small to large, produce a .EXE file. The tiny memory
    model is special because it alone supports creation of a .COM file.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  To produce a .COM file, you must not only use tiny memory model, but
    also select Generate COM File from the Linker Flags dialog box (choose
    Make from the Options menu), or else give the /TINY linker option on the
    QCL command line.
    ──────────────────────────────────────────────────────────────────────────

    Each .COM file has only one physical segment and is limited in size to a
    total of 64K. A .COM file has no executable-file header or
    relocation-table entries. Because DOS doesn't have to examine a file
    header or adjust relocatable segment addresses, it loads the .COM file
    slightly faster.

    DOS initializes all segment registers (including DS) to point to the first
    available memory address. The Stack Pointer, SP, is set to 64K above the
    start of the program. Unlike .EXE files, .COM files have no definite stack
    area. Instead, the stack starts at offset address FFFE hexadecimal and
    continues to grow downward until it overlaps code and data areas. At that
    point, program failure is likely.

    Simplified segment directives in QuickAssembler now provide direct support
    for .COM files. The template is, in fact, smaller than the template for a
    .EXE file.

    The code below shows the example in Section 4.3, "A Program That Says
    Hello," revised to produce a .COM file:

                .MODEL  tiny                 ; Produce a .COM file

                .DATA
    message     DB    "Hello, world.",13,10  ; Message to print
    lmessage    EQU   $ - message            ; Determine length of message
                .CODE
                .STARTUP
                mov   bx,1                   ; Load 1 - file handle for
                                            ;   standard output
                mov   cx,lmessage            ; Load length of message
                mov   dx,OFFSET message      ; Load address of message
                mov   ah,40h                 ; Load no. of DOS Write function
                int   21h                    ; Call interrupt 21H (DOS)

                mov   ax,4c00h               ; Load no. of DOS Exit function
                                            ;   in AH, and 0 exit code in AL
                int   21h                    ; Call interrupt 21H (DOS)

                END

    A tiny-model program could be produced by simply taking the small-model
    version from earlier in the chapter, and changing the first line to the
    following:

                .MODEL tiny

    The code would then run correctly. However, the sample code in this
    section takes advantage of tiny model by eliminating the stack segment.
    DOS initializes the SS (Stack Segment) register and SP (Stack Pointer)
    register for you, so you need not declare a stack. The assembler ignores
    stack segments in tiny model.

    The program still includes the .STARTUP directive. With tiny model, all
    this directive does is generate the statement ORG 100h.

    ──────────────────────────────────────────────────────────────────────────
    NOTE   The statement ORG 100h is necessary for programs in the .COM
    format, and must appear just before the first line of executable code. ORG
    100h starts the location counter at 100 hexadecimal, reflecting the way
    that DOS loads .COM files into memory. (DOS reserves the first 256 bytes
    for the Program Segment Prefix (PSP).) See Section 6.6, "Setting the
    Location Counter," for more information on the ORG directive.
    ──────────────────────────────────────────────────────────────────────────

    With tiny-model programs, QuickAssembler lets you define separate code and
    data segments, but combines these segments into a single physical segment,
    called a "group." QuickAssembler places the code segment first regardless
    of how you write your source code. The resulting .COM file assumes a
    single segment address for the whole program (as required by the structure
    of a .COM file), and execution automatically begins at the proper address.
    Finally, Quick-Assembler directs the linker to output a file in the .COM
    format rather than the .EXE format.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  "Groups" are a standard concept in 8086 assembly language. You can
    place a series of segments into a group. The total size must not exceed
    64K. The linker responds by combining all the segments into a single
    physical segment in which all addresses share the same segment address.
    For a fuller explanation of groups and segments, see Chapter 5.
    ──────────────────────────────────────────────────────────────────────────

    When you write .COM files, you must observe some important restrictions.
    You cannot use program-defined segment addresses. Similarly, you have no
    access to defined segment addresses, such as @data and @code.

    Because .COM files lack relocation-table entries, DOS cannot adjust
    segment addresses at load time. The program must use absolute segment
    addresses or else assume the loading segment address that DOS assigns. The
    principal restriction is that you cannot refer to program-defined segment
    addresses. Therefore, memory references can be of three kinds:

    1. Any memory location within the 64K program area. For these memory
        references, you do not load a new value into any of the segment
        registers.

    2. Hard-coded locations in memory that have special meaning at the system
        or hardware level. A video-page address, such as B800:0000, is such a
        special segment address.

    3. An address returned to you by a DOS or ROM-BIOS function. For example,
        DOS function 48H, Allocate Memory, returns a pointer to a block of
        dynamically allocated memory.


4.9  Creating .COM Files with Full Segment Definitions

    You don't generally need to use full segment definitions to create .COM
    files. However, when you do use these directives with programs written in
    .COM format, you need to follow certain rules. The assembler automatically
    follows most of these rules when you use simplified segment directives.

    The guidelines for .COM format are listed below:

    ■  Place the entire program into one physical segment. It's possible to
        divide your program into separate logical segments, then group them
        into one physical segment with the GROUP directive. Simplified segment
        directives, in fact, use this technique with tiny model.

        However, you must ensure that code, not data, appears at the beginning
        of the .COM file. A number of different factors affect segment
        ordering, so it may be hard to ensure that the code segment appears
        first. Thus, creating just one segment is the more reliable method.

        In contrast, when you use simplified segment directives with tiny
        model, the assembler always places the code segment at the beginning of
        the .COM file.

    ■  Use the ASSUME directive to inform the assembler that all segment
        registers will point to the beginning of the segment. At load time, DOS
        sets all segment registers to this address. The ASSUME directive
        informs the assembler of this fact so that it can correctly calculate
        offset addresses. This directive is not necessary when you use
        simplified segment directives.

    ■  Use the ORG directive to set the location counter. At load time, DOS
        sets the starting address to 100H. The first 100H bytes are reserved
        for the Program Segment Prefix (PSP). The statement ORG 100h is
        necessary for the assembler to assign addresses in a way consistent
        with run-time conditions. Otherwise, jump instructions and data
        references will be wrong.

        When you use simplified segments directives with tiny model, the
        assembler automatically sets the location counter to 100H.

    ■  Use the END statement to take one argument: a starting address. This
        argument is not necessary if you use the .STARTUP simplified segment
        directive, because the program automatically begins execution wherever
        you place .STARTUP.

    The modified procedure is shown below:

    _TEXT       SEGMENT 'CODE'                 ; Define code segment
                ASSUME  cs:_TEXT,ds:_TEXT,ss:_TEXT
                ORG     100h
    start:      jmp     begin

    message     DB      "Hello, world.",13,10  ; Message to print
    lmessage    EQU     $ - message            ; Determine length of message
    begin:      mov     bx,1                   ; Load 1 - file handle
                                                ;   for standard output
                mov     cx,lmessage            ; Load length of message
                mov     dx,OFFSET message      ; Load address of message
                mov     ah,40h                 ; Load no. of DOS Write function
                int     21h                    ; Call interrupt 21H (DOS)

                mov     ax,4c00h               ; Load no. of DOS Exit function
                                                ;   in AH, and 0 exit code in AL
                int     21h                    ; Call interrupt 21H (DOS)

    _TEXT       ENDS
                END     start

    The first three statements are new. The SEGMENT statement defines the
    beginning of a segment named _TEXT. (Instead of using the name _TEXT, you
    can choose any other valid symbolic name.) The ASSUME statement then
    informs the assembler that the CS, DS, and SS segment registers will all
    point to the beginning of this segment at run time. Finally, the ORG
    statement informs the assembler that the instruction pointer will be set
    to 100H.

    _TEXT       SEGMENT                        ; Define code segment
                ASSUME  cs:_TEXT,ds:_TEXT,ss:_TEXT
                ORG     100h

    The body of the procedure now includes code and data together in the same
    segment. The first item in the segment must be an instruction, because
    .COM files always begin execution at the start of the file. Attempting to
    execute data would almost certainly cause program failure. Since there is
    no separate data segment, the first instruction jumps around the data
    declarations.

    start:      jmp     begin

    message     DB      "Hello, world.",13,10  ; Message to print
    lmessage    EQU     $ - message            ; Determine length of message
    begin:      mov     bx,1                   ; Load 1 - file handle for
                                                ;   standard output

    Another way to write a program for .COM format is to place data
    declarations after the end of the instructions. However, the assembler
    often produces better results if you place data declarations early in the
    source file. That way, you avoid forward references to data.

    The source file ends by giving an argument to the END statement. This
    statement is necessary because the program does not use the .STARTUP
    directive. The argument to END must be the label of the first instruction
    executed:

                END     start



────────────────────────────────────────────────────────────────────────────
PART 2:  Using Directives


    Part 2 of the Programmer's Guide (comprising Chapters 5-12) describes
    the directives and operators recognized by the Microsoft QuickAssembler.
    Directives are nonexecutable statements that give general information to
    the assembler. Some of the more important directives declare program
    structure, define data, and create macros. Operators indicate calculations
    to be performed at assembly time.

    Chapters 5-8 present the basic directives you need to write a program,
    including segment, data, multimodule, and structure directives. Chapter
    9 deals specifically with operators. Chapter 10 describes conditional
    assembly, and Chapter 11 presents macros, a technique for replacing a
    series of frequently used instructions with a single statement. The
    directives that control your output are covered in Chapter 12.




────────────────────────────────────────────────────────────────────────────
Chapter 5:  Defining Segment Structure


    A segment is an area in memory up to 64K in size, in which all locations
    share the same segment address. The 8086 assembly-language modules use
    segments for two reasons:

    ■  Segments provide a convenient means for dividing a program into its
        major divisions──code, data, constant data, and stack.

    ■  The architecture of the 8086 requires some use of segments. Every
        reference to memory must be relative to one of the four segment
        registers, as described in Section 2.7, "Segmented Addressing and
        Segment Registers." Segment definitions make it possible for
        QuickAssembler to assume the use of the same segment register for a
        large number of different addresses.

    You can define segments by using simplified segment directives or full
    segment definitions.

    In most cases, simplified segment directives are a better choice. They are
    easier to use and more consistent, yet you seldom sacrifice any
    functionality by using them. Simplified segment directives automatically
    define the segment structure required when combining assembler modules
    with modules prepared with Microsoft high-level languages.

    Although more difficult to use, full segment definitions give more
    complete control over segments. A few complex programs may require full
    segment definitions in order to get unusual segment orders and types.

    This chapter describes both methods. If you choose to use simplified
    segment directives, you will probably not need to read about full segment
    definitions.


5.1  Simplified Segment Directives

    Simplified segment directives provide an easy way to write
    assembly-language programs. They handle some of the difficult aspects of
    segment definition automatically, and assume the same conventions adopted
    by Microsoft high-level languages.

    When you write stand-alone assembler programs, the simplified segment
    directives make programming easier. The Microsoft conventions are flexible
    enough to work for most kinds of programs.

    When you write assembler routines to be linked with Microsoft high-level
    languages, the simplified segment directives ensure against mistakes that
    would make your modules incompatible. The names are automatically defined
    consistently and correctly.

    The simplified segment directives automatically generate the same ASSUME
    and GROUP statements used by Microsoft high-level languages. You can learn
    more about the ASSUME and GROUP directives in Sections 5.3 and 5.4.

    However, for most programs you do not need to understand these directives.
    Simply use the simplified segment directives in the format shown in the
    examples.


5.1.1  Understanding Memory Models

    To use simplified segment directives, you must declare a memory model for
    your program. The memory model specifies the default size of data and code
    used in a program.

    Microsoft high-level languages require that each program have a default
    size (or memory model). Any assembly-language routine called from a
    high-level language program should have the same memory model as the
    calling program. The C compiler provided with QuickAssembler supports all
    models except tiny. If you use assembly modules with a different compiler,
    the compiler documentation should tell what memory models are supported.

    The most commonly used memory models are described below:

    Model               Description
    ──────────────────────────────────────────────────────────────────────────
    Tiny                All data and code fit in a single physical segment
                        (group). Tiny-model programs can be converted to
                        .COM-file format with the Generate COM File option in
                        the Linker Flags dialog box (or the linker /TINY
                        option used with QCL). Tiny-model programs have
                        restrictions described in Chapter 4, "Writing
                        Stand-Alone Assembly Programs."

    Small               All data fits within a single 64K segment, and all
                        code fits within a 64K segment. Therefore, all code
                        and data can be accessed as near. This is the most
                        common model for stand-alone assembler programs. C is
                        the only Microsoft language that supports this model.

    Medium              All data fits within a single 64K segment, but code
                        may be greater than 64K. Therefore, data is near, but
                        code is far. Most recent versions of Microsoft
                        high-level languages support this model.

    Compact             All code fits within a single 64K segment, but the
                        total amount of data may be greater than 64K (although
                        no array can be larger than 64K). Therefore, code is
                        near, but data is far. C is the only Microsoft
                        high-level language that supports this model.

    Large               Both code and data may be greater than 64K (although
                        no array can be larger than 64K). Therefore, both code
                        and data are far. All Microsoft high-level languages
                        support this model.

    Huge                Both code and data may be greater than 64K. In
                        addition, any individual data array can be larger than
                        64K. From the standpoint of QuickAssembler, this
                        memory model is almost equivalent to large model (the
                        only exception is the meaning of the predefined equate
                        @DataSize). If you want to support arrays larger than
                        64K, you must provide the program logic to support
                        these arrays.


    Stand-alone assembler programs can have any model. Tiny and small model
    are adequate for most programs written entirely in assembly language.
    Since near data or code can be accessed more quickly, the smallest memory
    model that can accommodate your code and data is usually the most
    efficient.

    Mixed-model programs use the default size for most code and data but
    override the default for particular data items. Stand-alone assembler
    programs can be written as mixed-model programs by making specific
    procedures or variables near or far. Some Microsoft high-level languages
    have NEAR, FAR, and HUGE keywords that enable you to override the default
    size of individual data or code items.


5.1.2  Specifying DOS Segment Order

    The DOSSEG directive specifies that segments be ordered according to the
    DOS segment-order convention. This is the convention used by Microsoft
    high-level-language compilers.

    Syntax

    DOSSEG

    Using the DOSSEG directive enables you to maintain a consistent, logical
    segment order without actually defining segments in that order in your
    source file. Without this directive, the final segment order of the
    executable file depends on a variety of factors, such as segment order,
    class name, and order of linking. These factors are described in Section
    5.2, "Full Segment Definitions."

    Since segment order is not crucial to the proper functioning of most
    stand-alone assembler programs, you can simply use the DOSSEG directive
    and ignore the whole issue of segment order.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  Using the DOSSEG directive (or the /DOSSEG linker option) has two
    side effects. The linker generates symbols called _end and _edata. You
    should not use these names in programs that contain the DOSSEG directive.
    Also, the linker increases the offset of the first byte of the code
    segment by 16 bytes in small and compact models. This is to give proper
    alignment to executable files created with Microsoft compilers.
    ──────────────────────────────────────────────────────────────────────────

    If you want to use the DOS segment-order convention in stand-alone
    assembler programs, you should use the DOSSEG argument in the main module.
    Modules called from the main module need not use the DOSSEG directive.

    You do not need to use the DOSSEG directive for modules called from
    Microsoft high-level languages, since the compiler already defines DOS
    segment order.

    Under the DOS segment-order convention, segments have the following order:

    1. All segment names having the class name 'CODE'

    2. Any segments that do not have class name 'CODE' and are not part of the
        group DGROUP

    3. Segments that are part of DGROUP, in the following order:

        a. Any segments of class BEGDATA (this class name is reserved for
        Microsoft use)

        b. Any segments not of class BEGDATA, BSS, or STACK

        c. Segments of class BSS

        d. Segments of class STACK

    Using the DOSSEG directive has the same effect as using the /DOSSEG linker
    option.

    The directive works by writing to the comment record of the object file.
    The Intel(R) title for this record is COMENT. If the linker detects a
    certain sequence of bytes in this record, it automatically puts segments
    in the DOS order.


5.1.3  Defining Basic Attributes of the Module

    The .MODEL directive defines attributes that affect the entire module:
    memory model, default calling and naming conventions, and stack type. This
    directive should appear before any other simplified segment directive.

    Syntax

    .MODEL memorymodel[[[[,language]],stacktype]]

    Each of the three fields defines a basic attribute. The memorymodel field
    defines the segment structure of the module. The language field defines
    the default calling and naming conventions assumed by PROC statements.
    These conventions correspond to the high-level language you specify. The
    stacktype field determines whether or not the assembler assumes that the
    SS register is equal to the DS register.

    The memorymodel field can be TINY, SMALL, MEDIUM, COMPACT, LARGE, or HUGE.
    The assembler defines segments the same way for large and huge models, but
    the @DataSize equate (explained in Section 5.1.5, "Using Predefined
    Segment Equates") gives a different value for these two models.

    If you write an assembler routine for a high-level language, the
    memorymodel field should match the memory model used by the compiler or
    interpreter. If you write a stand-alone assembler program, you can use any
    model. Section 5.1.1 describes each memory model.

    The optional language field tells the assembler to follow the naming,
    calling, and return conventions appropriate to the indicated language. In
    addition, if you use the language argument, the assembler automatically
    makes all procedure names public. You can use C, Pascal, FORTRAN, or BASIC
    as the language argument. The last three are equivalent, since these
    languages share the same naming and calling conventions.

    Note that although the language field is optional, you will not be able to
    use the high-level language features of the PROC directive if you do not
    give it. Normally, you should specify a language with .MODEL. If you use C
    for the language argument, all public and external names are by default
    prefixed with an underscore (_) in the .OBJ file. Specifying any other
    language has no effect on the names.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  The assembler does not truncate names in order to match the
    conventions of specific languages, such as FORTRAN or Pascal. Moreover,
    using the C type specifier does not cause the assembler to preserve case.
    To preserve lowercase names in public symbols, choose one of the assembler
    flags that preserves case (Preserve Extrn or Preserve Case), or assemble
    with /Cx or /Cl on the QCL command line. Within the environment, the
    Preserve Extrn flag is on by default.
    ──────────────────────────────────────────────────────────────────────────

    See Appendix A for an explanation of how the different calling
    conventions are implemented. You should also note that each language has
    different defaults for passing parameters by value or by reference.
    Depending on which method is used, a high-level language passes a
    parameter either as a value or as a pointer to the value.

    The optional stacktype field determines whether or not the assembler
    assumes that SS is equal to DS. The default value is nearStack, which
    assumes that SS is part of the default data area, so that SS is equal to
    DS, and SP is set to the top of the data area. You can also use farStack,
    which assumes that the stack segment is in a separate physical segment
    from the default data area.

    If you write a module called from QuickC, you should always use the
    default (in other words, just leave the field blank), since QuickC always
    assumes DS equals SS. If you write modules for a compiler (such as the
    Microsoft Optimized C Compiler) that supports customized memory models,
    use farStack for models in which SS does not equal DS. If you write a
    stand-alone assembler program, you can choose either setting. If you use
    the .STARTUP directive, the assembler automatically generates the proper
    code for setting up the indicated stack type.

    If you write a stand-alone module without using .STARTUP, you should
    exercise caution. If you initialize DS but do not adjust SS and SP (as
    described in Section 5.5.3, "Initializing the SS and SP Registers), use
    the farStack keyword. If you do adjust SS and SP as described in Section
    5.5.3, you can use the default value, nearStack.

    Example 1

                DOSSEG
                .MODEL  small,c

    This statement defines default segments for small-model programs and
    creates the ASSUME and GROUP statements used by small-model programs. The
    segments are automatically ordered according to the Microsoft convention.
    The example statements might be used at the start of the main (or only)
    module of a stand-alone assembler program.

    Example 2

                .MODEL  large,pascal

    This statement defines default segments for large-model programs and
    creates the ASSUME and GROUP statements used by large-model programs. It
    does not automatically order segments according to the Microsoft
    convention. The example statement might be used at the start of an
    assembly module that would be called from a large-model Pascal program or
    a C program in which the Pascal calling convention was specified.

    Example 3

                .MODEL  small,c,farStack

    This statement defines default segments for a small-model program and
    creates the appropriate ASSUME and GROUP statements. In addition, this
    statement makes all procedures public, and directs the assembler to prefix
    an underscore to the beginning of each public name, so that the naming
    convention is compatible with C. If you later use the PROC statement to
    declare parameters, the assembler will assume that the parameters are
    placed on the stack in the order specified by the C calling convention. In
    addition, the statement uses farStack, indicating that SS is not equal to
    DS.

    The last example would be appropriate for a module called by a C module
    with a customized memory model, compiled with a setting that did not
    assume SS equal to DS. Note that QuickC does not support customized memory
    models.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  The assembler does not normally display the code generated by the
    high-level-language support features. You can see the code produced by
    these features by using the .LALL directive or the /LA command-line
    option.
    ──────────────────────────────────────────────────────────────────────────

    To write procedures for use with more than one language and memory model,
    you can use text macros for the memory model and language arguments, and
    define the values from the command line or in the Assembler Flags dialog
    box. For example, the following .MODEL directive uses text macros for the
    memorymodel and language arguments:

    %           .MODEL memmodel,lang  ; Use % to evaluate memmodel, lang

    The values of the two text macros can be defined from the command line
    using the /D switch:

    QCL /Dmemmodel=MEDIUM /Dlang=C /AM /Cx main.c proc.asm


5.1.4  Defining Simplified Segments

    Each of the directives .CODE, .STACK, .DATA, .DATA?, .CONST, .FARDATA,
    .FARDATA?, and .STARTUP indicate the start of a segment. They also end the
    immediately preceding segment definition.

    Syntax

    .CODE [[name]]       Code segment
    .STACK [[size]]      Stack segment
    .DATA                Initialized near-data segment
    .DATA?               Uninitialized near-data segment
    .CONST               Constant-data segment
    .FARDATA [[name]]    Initialized far-data segment
    .FARDATA? [[name]]   Uninitialized far-data segment
    .STARTUP             Code to initialize segment registers

    For segments that take an optional name, the base file name of the source
    module is used if you do not specify a value yourself.

    Each new segment directive ends the previous segment. The END directive
    closes the last segment in the source file.


5.1.4.1  How to Use Simplified Segments

    The .CODE, .DATA, and .STACK directives create the three basic segments
    that programs generally need to have. Chapter 4, "Writing Stand-Alone
    Assembly Programs," demonstrates how to use these directives to write
    code, data, and stack segments. Chapter 4 also explains the purpose of
    each of these segments.

    The .STARTUP directive initializes segment registers to the appropriate
    segment values. Chapter 4 describes the use of .STARTUP, and Section
    5.5 tells more about how .STARTUP works and what code it generates.

    When you write a mixed-language program, you generally don't need to
    declare a stack segment, because the start-up code in the C main module
    creates a stack for you. When you write a stand-alone program, you should
    declare a stack segment in the main module only.

    Your programs can also use the .DATA? and .CONST directives to create
    segments for uninitialized and constant data, respectively. With
    stand-alone assembler programs, the use of these directives is optional,
    because you can place all data in the segment defined by .DATA if you
    want. With mixed-language programs, use .DATA? and .CONST to ensure
    compatibility with the way C handles uninitialized and constant data. Once
    you define these segments, it is up to you to place the appropriate data
    in each segment.

    If your program is written in compact, large, or huge model, you can use
    the .FARDATA and .FARDATA? directives to define additional data segments.
    All the data in the other data segments (defined by .DATA, .DATA?, and
    .CONST) must not exceed a total of 64K across all modules. In addition,
    the stack segment is also placed into this 64K area unless you specify
    farStack with the .MODEL directive.

    Data in the .FARDATA and .FARDATA? segments takes slightly longer to
    access. However, there is generally much more room in these segments for
    data definitions. For each module, the .FARDATA and .FARDATA? directives
    each create a separate physical segment that can be up to 64K in size. The
    recommended procedure is to use .FARDATA for initialized data, and
    .FARDATA? for uninitialized data, although this is optional.

    With medium, large, and huge model, you can use the name attribute to
    create multiple code segments within a source module. With compact, large,
    and huge model, you can also use the name attribute to create multiple
    far-data segments.

    Example 1

                DOSSEG
                .MODEL  small,c
                .STACK  100h
                .DATA
    ivariable   DB      5
    iarray      DW      50 DUP (5)
    string      DB      "This is a string"
    uarray      DW      50 DUP (?)
                EXTRN   xvariable:WORD
                .CODE
                .STARTUP
                EXTRN   xprocedure:NEAR
                call    xprocedure
                .
                .
                .
                END

    This code uses simplified segment directives for a small-model,
    stand-alone assembler program. Notice that initialized data, uninitialized
    data, and a string constant are all defined in the same data segment. See
    Section 5.1.7, "Default Segment Names," for an equivalent version that
    uses full segment definitions.

    Example 2

                .MODEL, large,c
                .FARDATA?
    fuarray     DW      10 DUP (?)         ; Far uninitialized data
                .CONST
    string      DB      "This is a string" ; String constant
                .DATA
    niarray     DB      100 DUP (5)        ; Near initialized data
                .FARDATA
                EXTRN   xvariable:FAR
    fiarray     DW      100 DUP (10)       ; Far initialized data
                .CODE   TASK
                EXTRN   xprocedure:PROC
    task        PROC
                .
                .
                .
                ret
    task        ENDP
                END

    This example uses simplified segment directives to create a module that
    might be called from a large-model, high-level-language program. Notice
    that different types of data are put in different segments to conform to
    Microsoft compiler conventions. See Section 5.1.7, "Default Segment
    Names," for an equivalent version using full segment definitions.


5.1.4.2  How Simplified Segments Are Implemented

    When you use the simplified segment directives described above, the
    assembler defines segments in a way compatible with Microsoft high-level
    languages.

    This section makes a number of references to groups and ASSUME statements.
    Both of these concepts arise from the need to deal with the 8086 segmented
    architecture. A "group" consists of one or more segments, totaling no more
    than 64K. When multiple segments are placed into a group, the linker
    combines these segments into a single physical segment. All addresses in
    the physical segment are adjusted so that they share the same segment
    address. Use of groups is convenient because it removes the need to
    constantly reload the DS register.

    The ASSUME directive is described at greater length in Section 5.4,
    "Associating Segments with Registers." This directive informs the
    assembler where a segment register will point to at run time so that the
    assembler can correctly calculate offset addresses relative to the value
    in the appropriate segment register.

    Unless you use tiny model, the code segment (defined with .CODE) is placed
    in its own physical segment, separate from all the data and stack
    segments. With medium, large, or huge model, you can define multiple code
    segments within one source model by using .CODE repeatedly, each time with
    a different name attribute. When you use this technique, each .CODE
    directive generates a new ASSUME statement so that the assembler knows
    where CS points to at run time.

    Segments defined with the .STACK, .CONST, .DATA, or .DATA? directives are
    placed in a group called DGROUP. Segments defined with the .FARDATA or
    .FARDATA? directives are not placed in any group. See Section 5.3 for
    more information on segment groups. When initializing the DS register to
    access data in a group-associated segment, the value of DGROUP should be
    loaded into DS. The .STARTUP directive does this initialization
    automatically.

    The .MODEL directive generates ASSUME statements to inform the assembler
    that at run time, DS, SS, and ES will all point to the beginning of
    DGROUP. You don't need to write these ASSUME statements yourself.

    If you specify farStack with the .MODEL directive, the stack is placed in
    a separate physical segment and the .MODEL directive generates an ASSUME
    statement to inform the assembler that SS does not point to the same
    segment address that DS does.


5.1.5  Using Predefined Segment Equates

    Several equates are predefined for you. You can use the equate names at
    any point in your code to represent the equate values. You should not
    assign equates having these names. The predefined equates are listed
    below:

    Name                Value
    ──────────────────────────────────────────────────────────────────────────
    @CodeSize and       If the .MODEL directive has been used, the value of
    @DataSize           @CodeSize is 0 for the models that use near-code
                        labels (tiny, small, and compact) or 1 for models that
                        use far-code labels (medium, large, and huge). The
                        value of @DataSize is 0 for models that use near-data
                        labels (tiny, small, and medium), 1 for compact and
                        large models, and 2 for huge models. These values can
                        be used in conditional-assembly statements.

                IF      @DataSize
                les     bx,pointer             ; Load far pointer
                mov     ax,es:WORD PTR [bx]
                ELSE
                mov     bx,WORD PTR pointer    ; Load near pointer
                mov     ax,WORD PTR [bx]
                ENDIF

    @CurSeg             This name has the segment name of the current segment.
                        This value may be convenient for ASSUME statements,
                        segment overrides, or other cases in which you need to
                        access the current segment. It can also be used to end
                        a segment.

    @FileName           This value represents the base name of the current
                        source file. For example, if the current source file
                        is TASK.ASM, the value of @FileName is TASK. This
                        value can be used in any name you would like to change
                        if the file name changes. For example, it can be used
                        as a procedure name:


    @FileName   PROC
                .
                .
                .
    @FileName   ENDP

    @Model              As with the @CodeSize and @DataSize predefined
                        equates, you must first use the .MODEL directive
                        before using the @Model equate. The value of @Model is
                        1 for tiny model, 2 for small, 3 for compact, 4 for
                        medium, 5 for large, and 6 for huge. @Model can be
                        used in conditional-assembly statements.

    Segment equates     For each of the primary segment directives, there is a
                        corresponding equate with the same name, except that
                        the equate starts with an "at sign" (@) instead of a
                        period. For example, the @code equate represents the
                        segment name defined by the .CODE directive.
                        Similarly, @fardata represents the .FARDATA segment
                        name and @fardata? represents the .FARDATA? segment
                        name. The @data equate represents the group name
                        shared by all the near-data segments. It can be used
                        to access the segments created by the .DATA, .DATA?,
                        .CONST, and .STACK segments.

                        These equates can be used in ASSUME statements and at
                        any other time a segment must be referred to by name.


    ──────────────────────────────────────────────────────────────────────────
    NOTE  Although predefined equates are part of the simplified segment
    system, the @CurSeg and @FileName equates are also available when using
    full segment definitions. If you use the /Cl option or set Preserve Case
    in the Assembler Flags dialog box, predefined equates will be case
    sensitive with the exact names shown above.
    ──────────────────────────────────────────────────────────────────────────


5.1.6  Simplified Segment Defaults

    Although your program can combine full segment definitions and simplified
    segment directives, the .MODEL directive enables certain features of
    simplified segment directives that change defaults. Defaults that change
    are listed below:

    ■  If you do not use the .MODEL directive, the default size for the PROC
        directive is always NEAR. If you use the .MODEL directive, the PROC
        directive is associated with the specified memory model: NEAR for tiny,
        small, and compact models and FAR for medium, large, and huge models.
        See Section 6.4.3, "Procedure Labels," for further discussion of the
        PROC directive.

    ■  If you use the .MODEL directive, the OFFSET operator returns an offset
        relative to the beginning of a group, whenever a data item is defined
        within a group. If you do not use the .MODEL directive, the OFFSET
        operator always returns an offset relative to the beginning of the
        segment. The simplified segment directives .DATA, .DATA?, and .STACK
        all create segments that are part of the group DGROUP.

        For example, assume the variable test1 was declared in a segment
        defined with the .DATA directive and test2 was declared in a segment
        defined with the .FARDATA directive. The statement


                    mov     ax,OFFSET test1

        loads the address of test1 relative to DGROUP. The statement


                    mov     ax,OFFSET test2

        loads the address of test2 relative to the segment defined by the
        .FARDATA directive. See Section 5.3 for more information on groups.


5.1.7  Default Segment Names

    If you use the simplified segment directives by themselves, you do not
    need to know the names assigned for each segment. However, it is possible
    to mix full segment definitions with simplified segment directives.
    Therefore, some programmers may wish to know the actual names assigned to
    all segments.

    Table 5.1 shows the default segment names created by each directive.

    Table 5.1 Default Segments and Types for Standard Memory Models

    Model     Directive Name      Align     Combine   Class       Group
    ──────────────────────────────────────────────────────────────────────────
    Tiny      .CODE     _TEXT     WORD      PUBLIC    'CODE'      DGROUP

            .DATA     _DATA     WORD      PUBLIC    'DATA'      DGROUP

            .CONST    CONST     WORD      PUBLIC    'CONST'     DGROUP

            .DATA?    _BSS      WORD      PUBLIC    'BSS'       DGROUP

    ──────────────────────────────────────────────────────────────────────────
    Small     .CODE     _TEXT     WORD      PUBLIC    'CODE'

            .DATA     _DATA     WORD      PUBLIC    'DATA'      DGROUP

            .CONST    CONST     WORD      PUBLIC    'CONST'     DGROUP

            .DATA?    _BSS      WORD      PUBLIC    'BSS'       DGROUP

            .STACK    STACK     PARA      STACK     'STACK'     DGROUP

    ──────────────────────────────────────────────────────────────────────────
    Medium    .CODE     name_TEXT WORD      PUBLIC    'CODE'

            .DATA     _DATA     WORD      PUBLIC    'DATA'      DGROUP

            .CONST    CONST     WORD      PUBLIC    'CONST'     DGROUP

            .DATA?    _BSS      WORD      PUBLIC    'BSS'       DGROUP

            .STACK    STACK     PARA      STACK     'STACK'     DGROUP

    ──────────────────────────────────────────────────────────────────────────
    Compact   .CODE     _TEXT     WORD      PUBLIC    'CODE'

            .FARDATA  FAR_DATA  PARA      private   'FAR_DATA'

            .FARDATA? FAR_BSS   PARA      private   'FAR_BSS'

            .DATA     _DATA     WORD      PUBLIC    'DATA'      DGROUP

            .CONST    CONST     WORD      PUBLIC    'CONST'     DGROUP

            .DATA?    _BSS      WORD      PUBLIC    'BSS'       DGROUP

            .STACK    STACK     PARA      STACK     'STACK'     DGROUP

    ──────────────────────────────────────────────────────────────────────────
    Large or  .CODE     name_TEXT WORD      PUBLIC    'CODE'

    huge      .FARDATA  FAR_DATA  PARA      private   'FAR_DATA'

            .FARDATA? FAR_BSS   PARA      private   'FAR_BSS'

            .DATA     _DATA     WORD      PUBLIC    'DATA'      DGROUP

            .CONST    CONST     WORD      PUBLIC    'CONST'     DGROUP

            .DATA?    _BSS      WORD      PUBLIC    'BSS'       DGROUP

            .STACK    STACK     PARA      STACK     'STACK'     DGROUP

    ──────────────────────────────────────────────────────────────────────────


    The name used as part of far-code segment names is the file name of the
    module. The default name associated with the .CODE directive can be
    overridden in medium and large models. The default names for the .FARDATA
    and .FARDATA? directives can always be overridden.

    The segment and group table at the end of listings always shows the actual
    segment names. However, the GROUP and ASSUME statements generated by the
    .MODEL directive are not shown in listing files. For a program that uses
    all possible segments, group statements equivalent to the following would
    be generated:

    DGROUP      GROUP    _DATA,CONST,_BSS,STACK

    For tiny model, the following would be generated:

                ASSUME   cs:DGROUP,ds:DGROUP,ss:DGROUP

    For small and compact models, the following would be generated:

                ASSUME   cs:_TEXT,ds:DGROUP,ss:DGROUP

    For medium, large, and huge models, the following statement is given:

                ASSUME   cs: name_TEXT,ds:DGROUP,ss:DGROUP

    Example 1

                EXTRN   xvariable:WORD
                EXTRN   xprocedure:NEAR
    DGROUP      GROUP   _DATA,_BSS
                ASSUME  cs:_TEXT,ds:DGROUP,ss:DGROUP
    _TEXT       SEGMENT WORD PUBLIC 'CODE'
    start:      mov     ax,DGROUP                    ; Initialize data segment
                mov     ds,ax
                cli
                mov     ss,ax                        ; Move DGROUP into SS

                add     sp,OFFSET STACK              ; Adjust SP to top of stac
                sti
                .
                .
                .
    TEXT        ENDS
    _DATA       SEGMENT WORD PUBLIC 'DATA'
    ivariable   DB      5
    iarray      DW      50 DUP (5)
    string      DB      "This is a string"
    uarray      DW      50 DUP (?)
    _DATA       ENDS
    STACK       SEGMENT PARA STACK 'STACK'
                DB      100h DUP (?)
    STACK       ENDS
                END     start

    This example is equivalent to Example 1 in Section 5.1.4, "Defining
    Simplified Segments." Notice that the segment order must be different in
    this version to achieve the segment order specified by using the DOSSEG
    directive in the first Section 5.1.4 example. The external variables are
    declared at the start of the source code in this example. With simplified
    segment directives, external variables can be declared in the segment in
    which they are used. The code generated by .STARTUP is discussed in more
    detail in Section 5.5.3.

    Example 2

    DGROUP      GROUP   _DATA,CONST,STACK
                ASSUME  cs:TASK_TEXT,ds:FAR_DATA,ss:STACK
                EXTRN   xprocedure:FAR
                EXTR    xvariable:FAR
    FAR_BSS     SEGMENT PARA 'FAR_DATA'
    fuarray     DW      10 DUP (?)         ; Far uninitialized data
    FAR_BSS     ENDS
    CONST       SEGMENT WORD PUBLIC 'CONST'
    string      DB      "This is a string" ; String constant
    CONST       ENDS
    _DATA       SEGMENT WORD PUBLIC 'DATA'
    niarray     DB      100 DUP (5)        ; Near initialized data
    _DATA       ENDS
    FAR_DATA    SEGMENT WORD 'FAR_DATA'
    fiarray     DW      100 DUP (10)
    FAR_DATA    ENDS
    TASK_TEXT   SEGMENT WORD PUBLIC 'CODE'
    task        PROC    FAR
                .
                .
                .
                ret
    task        ENDP
    TASK_TEXT   ENDS
                END

    This example is equivalent to Example 2 in Section 5.1.4, "Defining
    Simplified Segments." Notice that the segment order is the same in both
    versions. The segment order shown here is written to the object file, but
    it is different in the executable file. The segment order specified by the
    compiler (the DOS segment order) overrides the segment order in the module
    object file.


5.2  Full Segment Definitions

    If you need complete control over segments, you may want to give complete
    segment definitions. The section below explains all aspects of segment
    definitions, including how to order segments and how to define all the
    segment types.


5.2.1  Setting the Segment-Order Method

    The order in which QuickAssembler writes segments to the object file can
    be either sequential or alphabetical. If the sequential method is
    specified, segments are written in the order in which they appear in the
    source code. If the alphabetical method is specified, segments are written
    in the alphabetical order of their segment names.

    The default is sequential. If no segment-order directive or option is
    given, segments are ordered sequentially. The segment-order method is only
    one factor in determining the final order of segments in memory. The
    DOSSEG directive (see Section 5.1.2, "Specifying DOS Segment Order") and
    class type (see Section 5.2.2.3, "Controlling Segment Structure with
    Class Type") can also affect segment order.

    The ordering method can be set by using the .ALPHA or .SEQ directive in
    the source code. The method can also be set using the /s (sequential) or
    /a (alphabetical) assembler options (see Appendix B, Section B.1,
    "Specifying the Segment-Order Method"). The directives have precedence
    over the options. For example, if the source code contains the .ALPHA
    directive, but the /s option is given on the command line, the segments
    are ordered alphabetically.

    Changing the segment order is an advanced technique. In most cases, you
    can simply leave the default sequential order in effect. If you are
    linking with high-level-language modules, the compiler automatically sets
    the segment order. The DOSSEG directive also overrides any segment-order
    directives or options.

    ──────────────────────────────────────────────────────────────────────────
    NOTE   Some previous versions of the IBM Macro Assembler ordered segments
    alphabetically by default. If you have trouble assembling and linking
    source-code listings from books or magazines, try using the /a option.
    Listings written for previous IBM versions of the assembler may not work
    without this option. The distinction between ENDS as the end of a segment
    and ENDS as the end of a structure is also made by the content of the
    program.
    ──────────────────────────────────────────────────────────────────────────

    Example 1

                .SEQ
    DATA        SEGMENT WORD PUBLIC 'DATA'
    DATA        ENDS
    CODE        SEGMENT WORD PUBLIC 'CODE'
    CODE        ENDS

    Example 2

                .ALPHA
    DATA        SEGMENT WORD PUBLIC 'DATA'
    DATA        ENDS
    CODE        SEGMENT WORD PUBLIC 'CODE'
    CODE        ENDS

    In Example 1, the DATA segment is written to the object file first because
    it appears first in the source code. In Example 2, the CODE segment is
    written to the object file first because its name comes first
    alphabetically.


5.2.2  Defining Full Segments

    The beginning of a program segment is defined with the SEGMENT directive,
    and the end of the segment is defined with the ENDS directive.

    Syntax

    name SEGMENT [[align]] [[combine]] [[use]] [['class']]
    statements
    name ENDS

    The name defines the name of the segment. This name can be unique, or it
    can be the same name given to other segments in the program. Segments with
    identical names are treated as the same segment. For example, if it is
    convenient to put different portions of a single segment in different
    source modules, the segment is given the same name in both modules.

    The optional align, combine, use, and 'class' types give the linker and
    the assembler instructions on how to set up and combine segments. Types
    can be specified in any order; it is not necessary to enter all types, or
    any type, for a given segment.

    Defining segment types is an advanced technique. Beginning
    assembly-language programmers might try using the simplified segment
    directives discussed in Section 5.1.

    ──────────────────────────────────────────────────────────────────────────
    NOTE   Don't confuse the PAGE align type and the PUBLIC combine type with
    the PAGE and PUBLIC directives. The distinction should be clear from
    context since the align and combine types are only used on the same line
    as the SEGMENT directive.
    ──────────────────────────────────────────────────────────────────────────


5.2.2.1  Controlling Alignment with Align Type

    The optional align type defines the range of memory addresses from which a
    starting address for the segment can be selected. The align type can be
    any one of the following:

    Align Type          Meaning
    ──────────────────────────────────────────────────────────────────────────
    BYTE                Uses the next available byte address

    WORD                Uses the next available word address (2 bytes per
                        word)

    DWORD               Uses the next available doubleword address (4 bytes
                        per doubleword)

    PARA                Uses the next available paragraph address (16 bytes
                        per paragraph)

    PAGE                Uses the next available page address (256 bytes per
                        page)


    If no align type is given, PARA is used by default.

    The linker uses the alignment information to determine the relative start
    address for each segment. DOS uses the information to calculate the actual
    start address when the program is loaded.

    Align types are illustrated in Figure 5.1 in the next section.


5.2.2.2  Defining Segment Combinations with Combine Type

    The optional combine type defines how to combine segments having the same
    name. The combine type can be any one of the following:

    Combine Type        Meaning
    ──────────────────────────────────────────────────────────────────────────
    PUBLIC              Concatenates all segments having the same name to form
                        a single, contiguous segment. The total size of the
                        resulting segment is equal to the sum of all
                        contributing segments.

                        All instruction and data addresses in the new segment
                        are relative to a single segment register, and all
                        offsets are adjusted to represent the distance from
                        the beginning of the segment.

    STACK               Concatenates all segments having the same name to form
                        a single, contiguous segment. This combine type is the
                        same as the PUBLIC combine type, except that all
                        addresses in the new segment are relative to the SS
                        segment register. The total size of the resulting
                        segment is equal to the sum of all contributing
                        segments.

                        The Stack Pointer (SP) register is initialized to the
                        length of the segment. The stack segment of your
                        program should normally use the STACK type, since this
                        automatically initializes the SS register, as
                        described in Section 5.5.3. If you create a stack
                        segment and do not use the STACK type, you must give
                        instructions to initialize the SS and SP registers.

                        For each individual segment, all initialized data is
                        placed at the high end of the resulting stack segment.
                        Consequently, if more than one stack segment contains
                        initialized data, the linker overwrites this data as
                        it links in each segment. Note that stack data cannot
                        be initialized with simplified segment directives.

    COMMON              Creates overlapping segments by placing the start of
                        all segments having the same name at the same address.

                        The length of the resulting area is the length of the
                        longest segment. All addresses in the segments are
                        relative to the same base address. If variables are
                        initialized in more than one segment having the same
                        name and COMMON type, the most recently initialized
                        data replaces any previously initialized data.

    MEMORY              Concatenates all segments having the same name to form
                        a single, contiguous segment.

                        The Microsoft Overlay Linker treats MEMORY segments
                        exactly the same as PUBLIC segments. QuickAssembler
                        allows you to use MEMORY type even though LINK does
                        not recognize a separate MEMORY type. This feature is
                        compatible with other linkers that may support a
                        combine type conforming to the Intel definition of
                        MEMORY type.

    AT address          Causes all label and variable addresses defined in the
                        segment to be relative to address.

                        The address can be any valid expression but must not
                        contain a forward reference──that is, a reference to a
                        symbol defined later in the source file. An AT segment
                        typically contains no code or initialized data.
                        Instead, it represents an address template that can be
                        placed over code or data already in memory, such as a
                        screen buffer or other absolute memory locations
                        defined by hardware. The linker will not generate any
                        code or data for AT segments, but existing code or
                        data can be accessed by name if it is given a label in
                        an AT segment. Section 6.6, "Setting the Location
                        Counter," shows an example of a segment with AT
                        combine type.


    If no combine type is given, the segment has private type. Segments having
    the same name are not combined. Instead, each segment receives its own
    physical segment when loaded into memory.

    ──────────────────────────────────────────────────────────────────────────
    NOTE   Although a given segment name can be used more than once in a
    source file, each segment definition using that name must have either
    exactly the same attributes, or attributes that do not conflict. If types
    are given for an initial segment definition, subsequent definitions for
    that segment need not specify any types.

    Normally, you should provide at least one stack segment (having STACK
    combine type) in a program. If no stack segment is declared, LINK displays
    a warning message. You can ignore this message if you have a specific
    reason for not declaring a stack segment. For example, you would not have
    a separate stack segment in a program in the .COM format.
    ──────────────────────────────────────────────────────────────────────────

    Example

    The following source-code shell illustrates one way in which the combine
    and align types can be used. Figure 5.1 shows the way LINK would load the
    sample program into memory.

                NAME module_1

    ASEG        SEGMENT BYTE PUBLIC 'CODE'
    start:      .
                .
                .
    ASEG        ENDS

    BSEG        SEGMENT WORD COMMON 'DATA'
                .
                .
                .
    BSEG        ENDS

    CSEG        SEGMENT PARA STACK 'STACK'
                .
                .
                .
    CSEG        ENDS

    DSEG        SEGMENT AT 0B800H
                .
                .
                .
    DSEG        ENDS
                END start

                NAME module_2

    ASEG        SEGMENT BYTE PUBLIC 'CODE'
                .
                .
                .
    ASEG        ENDS

    BSEG        SEGMENT WORD COMMON 'DATA'
                .
                .
                .
    BSEG        ENDS

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 5.2.2.2 of the manual              │
    └────────────────────────────────────────────────────────────────────────┘


5.2.2.3  Controlling Segment Structure with Class Type

    Class type is a means of associating segments that have different names,
    but similar purposes. It can be used to control segment order and to
    identify the code segment.

    The class name must be enclosed in single quotation marks ('). Class names
    are not case sensitive unless the /Cl or /Cx option is used during
    assembly.

    All segments belong to a class. Segments for which no class name is
    explicitly stated have the null class name. LINK imposes no restriction on
    the number or size of segments in a class. The total size of all segments
    in a class can exceed 64K.

    ──────────────────────────────────────────────────────────────────────────
    NOTE   The names assigned for class types of segments should not be used
    for other symbol definitions in the source file. For example, if you give
    a segment the class name 'CONSTANT', you should not give the name constant
    to variables or labels in the source file.
    ──────────────────────────────────────────────────────────────────────────

    The linker expects segments having the class name CODE or a class name
    with the suffix CODE to contain program code. You should always assign
    this class name to segments containing code.

    Class type is one of two factors that control the final order of segments
    in an executable file. The other factor is the order of the segments in
    the source file (with the /s option or the .SEQ directive) or the
    alphabetical order of segments (with the /a option or the .ALPHA
    directive).

    These factors control different internal behavior, but both affect the
    final order of segments in the executable file. The sequential or
    alphabetical order of segments in the source file determines the order in
    which the assembler writes segments to the object file. The class type can
    affect the order in which the linker writes segments from object files to
    the executable file.

    Segments having the same class type are loaded into memory together,
    regardless of their sequential or alphabetical order in the source file.

    ──────────────────────────────────────────────────────────────────────────
    NOTE   The DOSSEG directive (see Section 5.1.2, "Specifying DOS Segment
    Order") overrides all other factors in determining segment order.
    ──────────────────────────────────────────────────────────────────────────

    Example

    A_SEG       SEGMENT 'SEG_1'
    A_SEG       ENDS

    B_SEG       SEGMENT 'SEG_2'
    B_SEG       ENDS

    C_SEG       SEGMENT 'SEG_1'
    C_SEG       ENDS

    When QuickAssembler assembles the preceding program fragment, it writes
    the segments to the object file in sequential or alphabetical order,
    depending on whether the /a option or the .ALPHA directive was used. In
    the example above, the sequential and alphabetical order are the same, so
    the order will be A_SEG, B_SEG, C_SEG in either case.

    When the linker writes the segments to the executable file, it first
    checks to see if any segments have the same class type. If they do, it
    writes them to the executable file together. Thus, A_SEG and C_SEG are
    placed together because they both have class type 'SEG_1'. The final order
    in memory is A_SEG, C_SEG, B_SEG.

    Since LINK processes modules in the order it receives them on the command
    line, you may not always be able to easily specify the order in which you
    want segments to be loaded. For example, assume your program has four
    segments that you want loaded in the following order: _TEXT, _DATA, CONST,
    and STACK.

    The _TEXT, CONST, and STACK segments are defined in the first module of
    your program, but the _DATA segment is defined in the second module. LINK
    will not put the segments in the proper order because it first loads the
    segments encountered in the first module.

    You can avoid this problem by starting your program with dummy segment
    definitions in the order you wish to load your real segments. The dummy
    segments can either go at the start of the first module, or they can be
    placed in a separate include file that is called at the start of the first
    module. You can then put the actual segment definitions in any order or
    any module you find convenient.

    For example, you might call the following include file at the start of the
    first module of your program:

    _TEXT       SEGMENT WORD PUBLIC 'CODE'
    _TEXT       ENDS
    _DATA       SEGMENT WORD PUBLIC 'DATA'
    _DATA       ENDS
    CONST       SEGMENT WORD PUBLIC 'CONST'
    CONST       ENDS
    STACK       SEGMENT PARA STACK 'STACK'
    STACK       ENDS

    The DOSSEG directive may be more convenient for defining segment order if
    you are willing to accept the DOS segment-order conventions.

    Once a segment has been defined, you do not need to specify the align,
    combine, use, and class types on subsequent definitions. For example, if
    your code defined dummy segments as shown above, you could define an
    actual data segment with the following statements:

    _DATA       SEGMENT
                .
                .
                .
    _DATA       ENDS


5.3  Defining Segment Groups

    A group is a collection of segments associated with the same starting
    address. You may wish to use a group if you want several types of data to
    be organized in separate segments in your source code, but want them all
    to be accessible from a single, common segment register at run time.

    Syntax

    name GROUP segment [[,segment]]...

    The name is the symbol assigned to the starting address of the group. All
    labels and variables defined within the segments of the group are relative
    to the start of the group, rather than to the start of the segments in
    which they are defined.

    The segment can be any previously defined segment or a SEG expression (see
    Section 9.2.4.5).

    Segments can be added to a group one at a time. For example, you can
    define and add segments to a group one by one.

    The GROUP directive does not affect the order in which segments of a group
    are loaded. Loading order depends on each segment's class, or on the order
    in which object modules are given to the linker.

    Segments in a group need not be contiguous. Segments that do not belong to
    the group can be loaded between segments that do. The only restriction is
    that the distance (in bytes) between the first byte in the first segment
    of the group and the last byte in the last segment must not exceed 65,535
    bytes.

    ──────────────────────────────────────────────────────────────────────────
    NOTE   When the .MODEL directive is used, the offset of a group-relative
    segment refers to the ending address of the segment, not the beginning.
    For example, the expression OFFSET STACK evaluates to the end of the stack
    segment.
    ──────────────────────────────────────────────────────────────────────────

    Group names can be used with the ASSUME directive (discussed in Section
    5.4, "Associating Segments with Registers") and as an operand prefix with
    the segment-override operator (discussed in Section 9.2.3).

    Example

    DGROUP      GROUP   ASEG,CSEG
                ASSUME  ds:DGROUP

    ASEG        SEGMENT WORD PUBLIC 'DATA'
                .
    asym        .
                .
    ASEG        ENDS

    BSEG        SEGMENT WORD PUBLIC 'DATA'
                .
    bsym        .
                .
    BSEG        ENDS

    CSEG        SEGMENT WORD PUBLIC 'DATA'
                .
    csym        .
                .
    CSEG        ENDS
                END

    Figure 5.2 shows the order of the example segments in memory. They are
    loaded in the order in which they appear in the source code (or in
    alphabetical order if the .ALPHA directive or /s option is specified).

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 5.3 of the manual                  │
    └────────────────────────────────────────────────────────────────────────┘

    Since ASEG and CSEG are declared part of the same group, they have the
    same base despite their separation in memory. This means that the symbols
    asym and csym have offsets from the beginning of the group, which is also
    the beginning of ASEG. The offset of bsym is from the beginning of BSEG,
    since it is not part of the group. This sample illustrates the way LINK
    organizes segments in a group. It is not intended as a typical use of a
    group.


5.4  Associating Segments with Registers

    Many of the assembler instructions assume a default segment. For example,
    JMP instructions assume the segment associated with the CS register; PUSH
    and POP instructions assume the segment associated with the SS register;
    MOV instructions assume the segment associated with the DS register.

    When the assembler needs to reference an address, it must know what
    segment the address is in. It does this by using the default segment or
    group addresses assigned with the ASSUME directive.

    ──────────────────────────────────────────────────────────────────────────
    NOTE   Using the ASSUME directive to tell the assembler which segment to
    associate with a segment register is not the same as telling the
    processor. The ASSUME directive only affects assembly-time assumptions.
    You may need to use instructions to change run-time assumptions.
    Initializing segment registers at run time is discussed in Section 5.5.
    ──────────────────────────────────────────────────────────────────────────

    Syntax

    ASSUME segmentregister:name [[,segmentregister:name]]...
    ASSUME segmentregister:NOTHING
    ASSUME NOTHING

    The name must be the name of the segment or group that is to be associated
    with segmentregister. Subsequent instructions that assume a default
    register for referencing labels or variables automatically assume that if
    the default segment is segmentregister, the label or variable is in the
    name segment or group.

    The ASSUME directive can define a segment for each of the segment
    registers. The segmentregister can be CS, DS, ES, or SS. The name must be
    one of the following:

    ■  The name of a segment defined in the source file with the SEGMENT
        directive

    ■  The name of a group defined in the source file with the GROUP directive

    ■  The keyword NOTHING

    ■  A SEG expression (see Section 9.2.4.5, "SEG Operator")

    ■  A string equate that evaluates to a segment or group name (but not a
        string equate that evaluates to a SEG expression)

    The keyword NOTHING cancels the current segment selection. For example,
    the statement ASSUME NOTHING cancels all register selections made by
    previous ASSUME statements.

    Usually, a single ASSUME statement defines all four segment registers at
    the start of the source file. However, you can use the ASSUME directive at
    any point to change segment assumptions.

    Using the ASSUME directive to change segment assumptions is often
    equivalent to changing assumptions with the segment-override operator (:)
    (see Section 9.2.3). The segment-override operator is more convenient for
    one-time overrides, whereas the ASSUME directive may be more convenient if
    previous assumptions must be overridden for a sequence of instructions.

    Example

                DOSSEG
                .MODEL  large       ; DS automatically assumed to @data
                .STACK  100h
                .DATA
    d1          DW      7
                .FARDATA
    d2          DW      9

                .CODE
    start:      mov     ax,@data    ; Initialize near data
                mov     ds,ax
                mov     ax,@fardata ; Initialize far data
                mov     es,ax
                .
                .
                .

    ; Method 1 for series of instructions that need override
    ; Use segment override for each statement

                mov     ax,es:d2
                .
                .
                .
                mov     es:d2,bx

    ; Method 2 for series of instructions that need override
    ; Use ASSUME at beginning of series of instructions

                ASSUME  es:@fardata
                mov     cx,d2
                .
                .
                .
                mov     d2,dx


5.5  Initializing Segment Registers

    Assembly-language programs must initialize segment values for each segment
    register before instructions that reference the segment register can be
    used in the source program.

    Initializing segment registers is different from assigning default values
    for segment registers with the ASSUME statement. The ASSUME directive
    tells the assembler what segments to use at assembly time. Initializing
    segments gives them an initial value that will be used at run time.

    The .STARTUP directive generates all the initialization code described in
    this section. This directive must be preceded by the .MODEL directive. If
    the .MODEL directive was followed by the farStack attribute, .STARTUP does
    not adjust SS and SP. Otherwise, it assumes the nearStack default, which
    sets SS equal to DS as described in Section 5.5.3, "Initializing the SS
    and SP Registers." When you use this default, the combined stack and near
    data must not exceed 64K.

    If you use .STARTUP, you don't need to enter any of the code in this
    section, except for the END statement. (However, if you use .STARTUP, you
    don't need to specify a starting address.) Make sure that you place the
    .STARTUP directive at the point you want your program to start executing,
    because the assembler automatically initializes CS:IP to point to the
    beginning of the code generated by .STARTUP.


5.5.1  Initializing the CS and IP Registers

    The CS and IP registers are initialized by specifying a starting address
    with the END directive.

    Syntax

    END [[startaddress]]

    The startaddress is a label or expression identifying the address where
    you want execution to begin when the program is loaded. Normally, a label
    for the start address should be placed at the address of the first
    instruction in the code segment.

    The CS segment is initialized to the value of startaddress. The IP
    register is normally initialized to 0. You can change the initial value of
    the IP register by using the ORG directive (see Section 6.6, "Setting the
    Location Counter") just before the startaddress label. For example,
    programs in the .COM format use ORG 100h to initialize the IP register to
    256 (100 hexadecimal).

    If a program consists of a single source module, the start address is
    required for that module. If a program has several modules, all modules
    must terminate with an END directive, but only one of them can define a
    start address.

    ──────────────────────────────────────────────────────────────────────────
    WARNING   One, and only one, module must define a start address. If you do
    not specify a start address, none is assumed. Neither QuickAssembler nor
    LINK will generate an error message, but your program will probably start
    execution at the wrong address.
    ──────────────────────────────────────────────────────────────────────────

    Example

    ; Module 1
                .CODE
    start:      .                  ; First executable instruction
                .
                .
                EXTRN   task:NEAR
                call    task
                .
                .
                .
                END     start      ; Starting address defined in main module

    ; Module 2
                PUBLIC  task
                .CODE
    task        PROC
                .
                .
                .
    task        ENDP
                END                ; No starting address in secondary module

    If Module 1 and Module 2 are linked into a single program, it is essential
    that only the calling module define a starting address.


5.5.2  Initializing the DS Register

    The DS register must be initialized to the address of the segment that
    will be used for data.

    The address of the segment or group for the initial data segment must be
    loaded into the DS register. This is done in two statements because a
    memory value cannot be loaded directly into a segment register. The
    segment-setup lines typically appear at the start or very near the start
    of the code segment.

    Example 1

    _DATA       SEGMENT WORD PUBLIC 'DATA'
                .
                .
                .
    _DATA       ENDS
    _TEXT       SEGMENT BYTE PUBLIC 'CODE'
                ASSUME  cs:_TEXT,ds:_DATA
    start:      mov     ax,_DATA           ; Load start of data segment
                mov     ds,ax              ; Transfer to DS register
                .
                .
                .
    _TEXT       ENDS
                END     start

    If you are using the Microsoft naming convention and segment order, the
    address loaded into the DS register is not a segment address but the
    address of DGROUP, as shown in Example 2. With simplified segment
    directives, the address of DGROUP is represented by the predefined equate
    @data.

    Example 2

                DOSSEG
                .MODEL  SMALL
                .DATA
                .
                .
                .
                .CODE
    start:      mov     ax,@data          ; Load start of DGROUP (@data)
                mov     ds,ax             ; Transfer to DS register
                .
                .
                .
                END     start


5.5.3  Initializing the SS and SP Registers

    At load time, DOS sets SS to the segment address of the last segment
    having combine type STACK, and SP to the size of the stack. (The linker
    actually determines the value of SS:SP and places this value in the
    executable-file header. DOS sets SS and SP as indicated in the file
    header.)

    If you use a stack segment with combine type STACK or use the .STACK
    directive, the program automatically loads with SS and SP initialized, as
    described above.

    However, this basic initialization does not set SS equal to DS. If the
    program contains the statement ASSUME SS:DGROUP, it will be prone to
    errors. The following code resets SS and SP so that SS has the same value
    as DS. The code then adjusts SP upward so that SS:SP points to the
    same physical address it did before. Since hardware interrupts use
    the same stack as the program, you should turn off interrupts while
    changing the stack. Most 8086-family processors turn off interrupts
    automatically when you adjust SS or SP, but early versions of the 8088 do n

    Example 1

                .MODEL  small
                .STACK  100h               ; Initialize "STACK"
                .DATA
                .
                .
                .
                .CODE
    start:      mov     ax,@data           ; Load segment location
                mov     ds,ax              ;   into DS register
                cli                        ; Turn off interrupts
                mov     ss,ax              ; Load same value as DS into SS
                mov     sp,OFFSET STACK    ; Give SP new stack size
                sti                        ; Turn interrupts back on
                .
                .
                .

    This example reinitializes SS so that it has the same value as DS, and it
    adjusts SP to reflect the new stack offset. Microsoft high-level-language
    compilers do this so that stack variables in near procedures can be
    accessed relative to either SS or DS.

    However, this code only works correctly if you use .MODEL and you declare
    a stack segment in just one module. The following code handles the more
    general case. The .STARTUP directive generates this code:

    Example 2

    start_label:
                mov     dx,DGROUP    ; Move DGROUP into DS and DX
                mov     ds,dx
                mov     bx,ss        ; BX = STACK - DGROUP
                sub     bx,dx        ;
                shl     bx,1         ; Multiply difference by 16
                shl     bx,1         ;   and leave result in BX
                shl     bx,1
                shl     bx,1
                cli
                mov     ss,dx        ; Move DGROUP into SS
                add     sp,bx        ; Adjust SP upward by
                sti                  ;   (STACK - DGROUP) * 16

    The code above sets SS and SP so that SS equals DS. This code works
    correctly no matter how many modules declare a stack segment.


5.5.4  Initializing the ES Register

    The ES register is not automatically initialized. If your program uses the
    ES register, you must initialize it by moving the appropriate segment
    value into the register.

    Example

                ASSUME  es:@fardata        ; Tell the assembler
                mov     ax,@fardata        ; Tell the processor
                mov     es,ax


5.6  Nesting Segments

    Segments can be nested. When QuickAssembler encounters a nested segment,
    it temporarily suspends assembly of the enclosing segment and begins
    assembly of the nested segment. When the nested segment has been
    assembled, Quick-Assembler continues assembly of the enclosing segment.

    Nesting of segments makes it possible to mix segment definitions in
    programs that use simplified segment directives for most segment
    definitions. When a full segment definition is given, the new segment is
    nested in the simplified segment in which it is defined.

    Example 1

    ; Macro to print message on the screen
    ; Uses full segment definitions - segments nested

    message     MACRO   text
                LOCAL   symbol
    _DATA       SEGMENT WORD PUBLIC 'DATA'
    symbol      DB      &text
                DB      13,10,"$"
    _DATA       ENDS
                mov     ah,09h
                mov     dx,OFFSET symbol
                int     21h
                ENDM

    _TEXT       SEGMENT BYTE PUBLIC 'CODE'
                .
                .
                .
                message "Please insert disk"

    In the example above, a macro called from inside of the code segment
    (_TEXT) allocates a variable within a nested data segment (_DATA). This
    has the effect of allocating more data space on the end of the data
    segment each time the macro is called. The macro can be used for messages
    appearing only once in the source code.

    Example 2

    ; Macro to print message on the screen
    ; Uses simplified segment directives - segments not nested

    message     MACRO   text
                LOCAL   symbol
                .DATA
    symbol      DB      &text
                DB      13,10,"$"
                .CODE
                mov     ah,09h
                mov     dx,OFFSET symbol
                int     21h
                ENDM

                .CODE
                .
                .
                .
                message "Please insert disk"

    Although Example 2 has the same practical effect as Example 1,
    Quick-Assembler handles the two macros differently. In Example 1, assembly
    of the outer (code) segment is suspended rather than terminated. In
    Example 2, assembly of the code segment terminates, assembly of the data
    segment starts and terminates, and then assembly of the code segment is
    restarted.



────────────────────────────────────────────────────────────────────────────
Chapter 6:  Defining Constants, Labels, and Variables


    This chapter explains how to define constants, labels, variables, and
    other symbols that refer to instruction and data locations within
    segments.

    Constants are important in QuickAssembler, just as they are in other
    languages. You can use constants as immediate operands in instructions and
    as initial values in data declarations. QuickAssembler supports a number
    of useful radixes (including binary and hexadecimal), as described in
    Section 6.1.

    QuickAssembler lets you use symbols as well as constants. Sections 6.2,
    "Assigning Names to Symbols," and 6.3, "Using Type Specifiers," present
    the basic principles of generating symbolic names.

    Most symbols are either code labels or variable names. Section 6.4,
    "Defining Code Labels," and Section 6.5, "Defining and Initializing
    Data," describe how to define these symbols.

    This chapter tells you how to assign labels and most kinds of variables.
    (Multifield variables, such as structures and records, are discussed in
    Chapter 7, "Using Structures and Records.") Chapter 6 also discusses
    related directives, including those that control the location counter
    directly. The assembler uses the location counter to assign addresses to
    symbols.


6.1  Constants

    Constants can be used in source files to specify numbers or strings that
    are set or initialized at assembly time. The assembler recognizes four
    types of constant values:

    1. Integers

    2. Packed binary coded decimals

    3. Real numbers

    4. Strings


6.1.1  Integer Constants

    Integer constants represent integer values. They can be used in a variety
    of contexts in assembly-language source code. For example, they can be
    used in data declarations and equates, or as immediate operands.

    Packed decimal integers are a special kind of integer constant that can
    only be used to initialize binary coded decimal (BCD) variables. They are
    described in Sections 6.1.2, "Packed Binary Coded Decimal Constants," and
    6.5.1.2, "Binary Coded Decimal Variables."

    Integer constants can be specified in binary, octal, decimal, or
    hexadecimal values. Table 6.1 shows the legal digits for each of these
    radixes. For hexadecimal radix, the digits can be either uppercase or
    lowercase letters.

    Table 6.1 Digits Used with Each Radix

    Radix           Base            Digits
    ──────────────────────────────────────────────────────────────────────────
    Binary          2               0 1

    Octal           8               0 1 2 3 4 5 6 7

    Decimal         10              0 1 2 3 4 5 6 7 8 9

    Hexadecimal     16              0 1 2 3 4 5 6 7 8 9 A B C D E F

    ──────────────────────────────────────────────────────────────────────────


    The radix for an integer can be defined for a specific integer by using
    radix specifiers, or a default radix can be defined globally with the
    .RADIX directive.


6.1.1.1  Specifying Integers with Radix Specifiers

    The radix for an integer constant can be given by putting one of the
    following radix specifiers after the last digit of the number:

    Radix               Specifier
    ──────────────────────────────────────────────────────────────────────────
    Binary              B

    Octal               Q or O

    Decimal             D

    Hexadecimal         H


    Radix specifiers can be given in either uppercase or lowercase letters;
    sample code in this manual uses lowercase letters.

    Hexadecimal numbers must always start with a decimal digit (0-9). If
    necessary, put a leading 0 at the left of the number to distinguish
    between symbols and hexadecimal numbers that start with a letter. For
    example, 0ABCh is interpreted as a hexadecimal number, but ABCh is
    interpreted as a symbol. The hexadecimal digits A through F can be either
    uppercase or lowercase letters. Sample code in this manual uses uppercase
    letters.

    If no radix is given, the assembler interprets the integer by using the
    current default radix. The initial default radix is decimal, but you can
    change the default with the .RADIX directive.

    Examples

    n360        EQU    01011010b + 132q + 5Ah + 90d  ; 4 * 90
    n60         EQU    00001111b +  17o + 0Fh + 15d  ; 4 * 15


6.1.1.2  Setting the Default Radix

    The .RADIX directive sets the default radix for integer constants in the
    source file.

    Syntax

    .RADIX expression

    The expression must evaluate to a number in the range 2-16. It defines
    whether the numbers are binary, octal, decimal, hexadecimal, or numbers of
    some other base.

    Numbers given in expression are always considered decimal, regardless of
    the current default radix. The initial default radix is decimal.

    Note that the .RADIX directive does not affect real numbers initialized as
    variables with the DD, DQ, or DT directive. Initial values for real-number
    variables declared with these directives are always evaluated as decimal
    unless a radix specifier is appended.

    Also, the .RADIX directive does not affect the optional radix specifiers,
    B and D, used with integer numbers. When the letters B or D appear at the
    end of any integer, they are always considered to be a radix specifier
    even if the current radix is 16.

    For example, if the input radix is 16, the number 0ABCD will be
    interpreted as 0ABC decimal, an illegal number, instead of as 0ABCD
    hexadecimal, as intended. Type 0ABCDh to specify 0ABCD in hexadecimal.
    Similarly, the number 11B will be treated as 11 binary, a legal number,
    but not as 11B hexadecimal as intended. Type 11Bh to specify 11B in
    hexadecimal.

    Examples

                .RADIX  16         ; Set default radix to hexadecimal
                .RADIX  2          ; Set default radix to binary


6.1.2  Packed Binary Coded Decimal Constants

    When an integer constant is used with the DT directive, the number is
    interpreted by default as a packed binary coded decimal (BCD) number. You
    can use the D radix specifier to override the default and initialize
    10-byte integers as binary-format integers.

    The syntax for specifying binary coded decimals is exactly the same as for
    other integers. However, the assembler encodes binary coded decimals in a
    completely different way. See Section 6.5.1.2, "Binary Coded Decimal
    Variables," for complete information on storage of binary coded decimals.

    Examples

    positive    DT     1234567890  ; Encoded as 00000000001234567890h
    negative    DT     -1234567890 ; Encoded as 80000000001234567890h


6.1.3  Real-Number Constants

    A real number is a number consisting of an integer part, a fractional
    part, and an exponent. Real numbers are usually represented in decimal
    format.

    Syntax

    [[+ | -]] integer.fraction[[E[[+ | -]]exponent]]

    The integer and fraction parts combine to form the value of the number.
    This value is stored internally as a unit and is called the mantissa. It
    may be signed. The optional exponent follows the exponent indicator (E).
    It represents the magnitude of the value and is stored internally as a
    unit. If no exponent is given, 1 is assumed. If an exponent is given, it
    may be signed.

    During assembly, the assembler converts real-number constants given in
    decimal format to a binary format. The sign, exponent, and mantissa of the
    real number are encoded as bit fields within the number. See Section
    6.5.1.4, "Real-Number Variables," for an explanation of how real numbers
    are encoded.

    You can specify the encoded format directly using hexadecimal digits (0-9
    or A-F). The number must begin with a decimal digit (0-9) and cannot be
    signed. It must be followed by the real-number designator (R). This
    designator is used the same as a radix designator except it specifies that
    the given hexadecimal number should be interpreted as a real number.

    Real numbers can only be used to initialize variables with the DD, DQ, and
    DT directives. They cannot be used in expressions. The maximum number of
    digits in the number and the maximum range of exponent values depend on
    the directive. The number of digits for encoded numbers used with DD, DQ,
    and DT must be 8, 16, and 20 digits, respectively. (If a leading 0 is
    supplied, the number must be 9, 17, or 21 digits.) See Section 6.5.1.4,
    "Real-Number Variables," for an explanation of how real numbers are
    encoded.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  Real numbers will be encoded differently depending upon whether you
    use the .MSFLOAT directive. By default, real numbers are encoded in the
    IEEE format. The .MSFLOAT directive overrides the default and specifies
    Microsoft Binary format. See Section 6.5.1.4, "Real-Number Variables,"
    for a description of these formats.
    ──────────────────────────────────────────────────────────────────────────

    Example

    ; Real numbers
    shrt        DD     25.23
    long        DQ     2.523E1
    ten_byte    DT     2523.0E-2

    ; Assumes .MSFLOAT
    mbshort     DD     81000000r             ; 1.0 as Microsoft Binary short
    mblong      DQ     8100000000000000r     ; 1.0 as Microsoft Binary long

    ; Assumes default IEEE format
    ieeeshort   DD     3F800000r             ; 1.0 as IEEE short
    ieeelong    DQ     3FF0000000000000r     ; 1.0 as IEEE long

    ; The same regardless of processor directives
    temporary   DT     3FFF8000000000000000r ; 1.0 as 10-byte temporary real


6.1.4  String Constants

    A string constant consists of one or more ASCII characters enclosed in
    single or double quotation marks. Strings are interpreted as lists of
    characters having the ASCII values of the characters in the string.

    Syntax

    'characters'
    "characters"

    String constants are case sensitive. A string constant consisting of a
    single character is sometimes called a character constant.

    Single quotation marks must be encoded twice when used literally within
    string constants that are also enclosed by single quotation marks.
    Similarly, double quotation marks must be encoded twice when used in
    string constants that are also enclosed by double quotation marks.

    Examples

    char        DB      'a'
    char2       DB      "a"
    message     DB      "This is a message."
    warn        DB      'Can"t find file.'          ; Can't find file.
    warn2       DB      "Can't find file."          ; Can't find file.
    string      DB      "This ""value"" not found." ; This "value" not found.
    string2     DB      'This "value" not found.'   ; This "value" not found.


6.1.5  Determining Floating-Point Format

    The .MSFLOAT directive disables all coprocessor instructions and specifies
    that initialized real-number variables be encoded in the Microsoft Binary
    format. Without this directive, initialized real-number variables are
    encoded in the IEEE format. This is a change from Versions 4.0 and earlier
    of the Microsoft Macro Assembler, which used Microsoft Binary format by
    default and required a coprocessor directive or the /R option to specify
    IEEE format. .MSFLOAT must be used for programs that require real-number
    data in the Microsoft Binary format. Section 6.5.1.4, "Real-Number
    Variables," describes real-number data formats and the factors to consider
    in choosing a format.


6.2  Assigning Names to Symbols

    A symbol is a name that represents a value. Symbols are one of the most
    important elements of assembly-language programs. Elements that must be
    represented symbolically in assembly-language source code include
    variables, address labels, macros, segments, procedures, records, and
    structures. Constants, expressions, and strings can also be represented
    symbolically.

    Symbol names are combinations of letters (both uppercase and lowercase),
    digits, and special characters. The QuickAssembler recognizes the
    following character set:

    A-Z a-z 0-9

    ? @ _ $ : . [ ] ( ) < > { } + - / *

    & % ! ' ~ | \ = # ^ ; , ` "

    Letters, digits, and some characters can be used in symbol names, but some
    restrictions on how certain characters can be used or combined are listed
    below:

    ■  A name can have any combination of uppercase and lowercase letters.
        Within the QC integrated environment, the default behavior (Preserve
        Extrn) is for the assembler to convert all symbol names to uppercase
        unless they are public or external. When you use simplified segment
        directives, all procedure labels declared with PROC are automatically
        public.

        When you use QCL, all lowercase letters are converted to uppercase by
        the assembler, unless you give the /Cl assembly option, or you declare
        the name with a PROC, PUBLIC, or EXTRN directive and you give the /Cx
        option. The /Cl and /Cx options correspond to the assembler flags
        Preserve Case and Preserve Extrn, respectively, within the QC
        environment.

    ■  Digits may be used within a name, but not as the first character.

    ■  A name can be given any number of characters, but only the first 31 are
        used. All other characters are ignored.

    ■  The following characters may be used at the beginning of a name or
        within a name: underscore (_), question mark (?), dollar sign ($), and
        at sign (@).

    ■  The period (.) is an operator and cannot be used within a name, but it
        can be used as the first character of a name.

    ■  A name may not be the same as any reserved name. Note that two special
        characters, the question mark (?) and the dollar sign ($), are reserved
        names and therefore can't stand alone as symbol names.

    A reserved name is any name with a special, predefined meaning to the
    assembler. Reserved names include instruction and directive mnemonics,
    register names, and operator names. All uppercase and lowercase letter
    combinations of these names are treated as the same name.

    The following is a list of names that are always reserved by the
    assembler. Using any of these names for a symbol results in an error.

    $                 DWORD               GE                  %OUT
    *                 ELSE                GROUP               PAGE
    +                 ELSEIF              GT                  PROC
    -                 ELSEIF1             HIGH                PTR
    .                 ELSEIF2             IF                  PUBLIC
    /                 ELSEIFB             IF1                 PURGE
    =                 ELSEIFDEF           IF2                 QWORD
    ?                 ELSEIFDIF           IFB                 .RADIX
    []                ELSEIFDIFI          IFDEF               RECORD
    .186              ELSEIFE             IFDIF               REPT
    .286              ELSEIFIDN           IFE                 .SALL
    .286P             ELSEIFIDNI          IFIDN               SEG
    .287              ELSEIFNB            IFNB                SEGMENT
    .386              ELSEIFNDEF          IFNDEF              .SEQ
    .386P             END                 INCLUDE             .SFCOND
    .387              ENDIF               INCLUDELIB          SHL
    .8086             ENDM                IRP                 SHORT
    .8087             ENDP                IRPC                SHR
    ALIGN             ENDS                LABEL               SIZE
    .ALPHA            EQ                  .LALL               SIZESTR
    AND               EQU                 LE                  .STACK
    ASSUME            .ERR                LENGTH              .STARTUP
    BYTE              .ERR1               .LFCOND             STRUC
    CATSTR            .ERR2               .LIST               SUBSTR
    .CODE             .ERRB               LOCAL               SUBTTL
    COMM              .ERRDEF             LOW                 TBYTE
    COMMENT           .ERRDIF             LT                  .TFCOND
    .CONST            .ERRE               MACRO               THIS
    .CREF             .ERRIDN             MASK                TITLE
    .DATA             .ERRNB              MOD                 TYPE
    .DATA?            .ERRNDEF            .MODEL              .TYPE
    DB                .ERRNZ              NAME                WIDTH
    DD                EVEN                NE                  WORD
    DOSSEG            EXITM               NEAR                .XALL
    DQ                EXTRN               NOT                 .XCREF
    DS                FAR                 OFFSET              .XLIST
    DT                .FARDATA            OR                  XOR

    In addition to the names listed above, instruction mnemonics and register
    names are considered reserved names. Instructions can vary depending on
    the processor directives given in the source file. For example, ENTER is
    recognized as a reserved word if you have enabled 286 instructions with
    the .286 directive. Section 18.3 describes processor directives.
    Instruction mnemonics for each processor are listed in the on-line Help
    system. Register names are listed in Section 2.6.2, "Register Operands."


6.3  Using Type Specifiers

    Some statements require type specifiers to give the size or type of an
    operand. There are two kinds of type specifiers: those that specify the
    size of a variable or other memory operand, and those that specify the
    distance of a label.

    The type specifiers that give the size of a memory operand are listed
    below with the number of bytes specified by each:

    Specifier           Number of Bytes
    ──────────────────────────────────────────────────────────────────────────
    BYTE                1

    WORD                2

    DWORD               4

    QWORD               8

    TBYTE               10


    In some contexts, ABS can also be used as a type specifier that indicates
    an operand is a constant rather than a memory operand.

    The type specifiers that give the distance of a label are listed below:

    Specifier           Description
    ──────────────────────────────────────────────────────────────────────────
    FAR                 The label references both the segment and offset of
                        the label.

    NEAR                The label references only the offset of the label.

    PROC                The label has the default type (NEAR or FAR) of the
                        current memory model. The default size is always NEAR
                        if you use full segment definitions. If you use
                        simplified segment directives (see Section 5.1), the
                        default type is NEAR for small and compact models or
                        FAR for medium, large, and huge models.


    Directives that use type specifiers include LABEL, PROC, EXTRN, and COMM.
    Operators that use type specifiers include PTR and THIS.


6.4  Defining Code Labels

    Code labels give symbolic names to the addresses of instructions in the
    code segment. These labels can be used as the operands to jump, call, and
    loop instructions to transfer program control to a new instruction.


6.4.1  Near-Code Labels

    Near-label definitions create instruction labels that have NEAR type.
    These instruction labels can be used to access the address of the label
    from other statements.

    Syntax

    name:

    The name must be followed by a colon (:). The segment containing the
    definition must be the one that the assembler currently associates with
    the CS register. The ASSUME directive is used to associate a segment with
    a segment register (see Section 5.4, "Associating Segments with
    Registers"). A near label can appear on a line by itself or on a line with
    an instruction.

    Near-code labels have different behavior depending on whether they are
    used in a procedure with the extended PROC syntax. When the extended PROC
    feature is used (which requires that .MODEL and a language must be
    specified), near labels are local to the procedure. This functionality is
    explained in Section 15.3.7, "Variable Scope."

    If the full segments are used or if the language argument is not supplied
    to the .MODEL directive, near labels are known throughout the module in
    which they occur. The same label name can be used in different modules as
    long as each label is only referenced by instructions in its own module.
    If a label must be referenced by instructions in another module, it must
    be given a unique name and declared with the PUBLIC and EXTRN directives,
    as described in Chapter 8, "Creating Programs from Multiple Modules."

    Examples

                cmp    ax,5        ; Compare with 5
                ja     bigger
                jb     smaller
                .                  ; Instructions if AX = 5
                .
                .
                jmp    done
    bigger:     .                  ; Instructions if AX > 5
                .
                .
                jmp    done
    smaller:    .                  ; Instructions if AX < 5
                .
                .
    done:


6.4.2  Anonymous Labels

    The assembler provides a way to generate automatic labels for jump
    instructions. To define a label, use two at signs (@@) followed by a colon
    (:). To jump to the nearest preceding anonymous label, use @B (back) in
    the jump instruction's operand field; to jump to the nearest following
    anonymous label, use @F (forward) in the operand field.

    You can use two at signs (@@) to define any number of anonymous labels in
    your program. The items @B and @F always refer to the nearest occurrences
    of @@, so there is never any conflict between different anonymous labels.

    Anonymous labels are best used for conditionally executing a few lines of
    code. The advantage is that you do not need to continually think up new
    label names. The disadvantage is that they do not provide a meaningful
    name. You should mark major divisions of a program with actual named
    labels.

    The following example shows a typical sequence of code with a
    jump-to-label instruction:

    ; DX is 20, unless CX is less than -20, then make DX 30
                mov    dx,20
                cmp    cx,-20
                jge    greatequ
                mov    dx,30
    greatequ:

    Here are the same lines rewritten to use an anonymous label:

    ; DX is 20, unless CX is less than -20, then make DX 30
                mov    dx,20
                cmp    cx,-20
                jge    @F
                mov    dx,30
    @@:


6.4.3  Procedure Labels

    The easiest way to declare a procedure is to use the PROC and ENDP
    directives. The former declares the beginning of the procedure, and the
    latter declares the end.

    The PROC directive has the following syntax:

    label PROC [[NEAR|FAR]]
    statements
    RET [[constant]]
    label ENDP

    The label assigns a symbol to the procedure. The distance can be NEAR or
    FAR. Any RET instructions within the procedure automatically have the same
    distance (NEAR or FAR) as the procedure.

    The syntax shown here is always available. In addition, there is an
    extended PROC syntax available if you use .MODEL and specify a language.
    The extended PROC syntax is explained in Section 15.3.4, "Declaring
    Parameters with the PROC Directive."

    The ENDP directive labels the address where the procedure ends. Every
    procedure label must have a matching ENDP label to mark the end of the
    procedure. QuickAssembler generates an error message if it does not find
    an ENDP directive to match each PROC directive.

    When the PROC label definition is encountered, the assembler sets the
    label's value to the current value of the location counter and sets its
    type to NEAR or FAR. If the label has FAR type, the assembler also sets
    its segment value to that of the enclosing segment. If you have specified
    full segment definitions, the default distance is NEAR. If you are using
    simplified segment directives, the default distance is the distance
    associated with the declared memory model──that is, NEAR for small and
    compact models or FAR for medium, large, and huge models.

    The procedure label can be used in a CALL instruction to direct execution
    control to the first instruction of the procedure. Control can be
    transferred to a NEAR procedure label from any address in the same segment
    as the label. Control can be transferred to a FAR procedure label from an
    address in any segment.

    Procedure labels must be declared with the PUBLIC and EXTRN directives if
    they are located in one module but called from another module, as
    described in Chapter 8, "Creating Programs from Multiple Modules."

    Example

                call   task        ; Call procedure
                .
                .
                .
    task        PROC   NEAR        ; Start of procedure
                .
                .
                .
                ret
    task        ENDP               ; End of procedure


6.4.4  Code Labels Defined with the LABEL Directive

    The LABEL directive provides an alternative method of defining code
    labels.

    Syntax

    name LABEL distance

    The name is the symbol name assigned to the label. The distance can be a
    type specifier, such as NEAR, FAR, or PROC. PROC means NEAR or FAR,
    depending on the default memory model, as described in Section 5.1.3,
    "Defining Basic Attributes of the Module." You can use the LABEL directive
    to define a second entry point into a procedure. FAR code labels can also
    be the destination of far jumps or of far calls that use the RETF
    instruction (see Section 15.3.2, "Defining Procedures").

    Example

    task        PROC   FAR         ; Main entry point
                .
                .
                .
    task1       LABEL  FAR         ; Secondary entry point
                .
                .
                .
                ret
    task        ENDP               ; End of procedure


6.5  Defining and Initializing Data

    The data-definition directives enable you to allocate memory for data. At
    the same time, you can specify the initial values for the allocated data.
    Data can be specified as numbers, strings, or expressions that evaluate to
    constants. The assembler translates these constant values into binary
    bytes, words, or other units of data. The encoded data is written to the
    object file at assembly time.


6.5.1  Variables

    Variables consist of one or more named data objects of a specified size.

    Syntax

    [[name]] directive initializer [[,initializer]]...

    The name is the symbol name assigned to the variable. If no name is
    assigned, the data is allocated; but the starting address of the variable
    has no symbolic name.

    The size of the variable is determined by directive. The directives that
    can be used to define single-item data objects are listed below:

    Directive           Meaning
    ──────────────────────────────────────────────────────────────────────────
    DB                  Defines byte

    DW                  Defines word (2 bytes)

    DD                  Defines doubleword (4 bytes)

    DQ                  Defines quadword (8 bytes)

    DT                  Defines 10-byte variable


    The optional initializer can be a constant, an expression that evaluates
    to a constant, or a question mark (?). The question mark is the symbol
    indicating that the value of the variable is undefined. You can define
    multiple values by using multiple initializers separated by commas, or by
    using the DUP operator, as explained in Section 6.5.2, "Arrays and
    Buffers."

    Simple data types can allocate memory for integers, strings, addresses, or
    real numbers.


6.5.1.1  Integer Variables

    When defining an integer variable, you can specify an initial value as an
    integer constant or as a constant expression. QuickAssembler generates an
    error if you specify an initial value too large for the specified
    variable.

    Integer values for all sizes except 10-byte variables are stored in binary
    form. They can be interpreted as either signed or unsigned numbers. For
    instance, the hexadecimal value 0FFCD can be interpreted either as the
    signed number -51 or the unsigned number 65,485.

    The processor cannot tell the difference between signed and unsigned
    numbers. Some instructions are designed specifically for signed numbers.
    It is the programmer's responsibility to decide whether a value is to be
    interpreted as signed or unsigned, and then to use the appropriate
    instructions to handle the value correctly.

    Figure 6.1 shows various integer storage formats.

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 6.5.1.1 of the manual              │
    └────────────────────────────────────────────────────────────────────────┘

    The directives for defining integer variables are listed below with the
    sizes of integer they can define:

    Directive           Size of Directive
    ──────────────────────────────────────────────────────────────────────────
    DB (bytes)          Allocates unsigned numbers from 0 to 255 or signed
                        numbers from -128 to 127.

    DW (words)          Allocates unsigned numbers from 0 to 65,535 or signed
                        numbers from -32,768 to 32,767. The bytes of a word
                        integer are stored in the format shown in Figure 6.1.
                        Note that in assembler listings and in most debuggers
                        the bytes of a word are shown in the opposite
                        order──high byte first──since this is the way most
                        people think of numbers.

                        Word values can be used directly in 8086-family
                        instructions. They can also be loaded, used in
                        calculations, and stored with 8087-family
                        instructions.

    DD (doublewords)    Allocates unsigned numbers from 0 to 4,294,967,295 or
                        signed numbers from -2,147,483,648 to 2,147,483,647.
                        The words of a doubleword integer are stored in the
                        format shown in Figure 6.1.

                        These 32-bit values (called long integers) can be
                        loaded, used in calculations, and stored with
                        8087-family instructions. Some calculations can be
                        done on these numbers directly with 16-bit 8086-family
                        processors; others involve an indirect method of doing
                        calculations on each word separately (see Chapter 14,
                        "Doing Arithmetic and Bit Calculations").

    DQ (quadwords)      Allocates 64-bit integers. The doublewords of a
                        quadword integer are stored in the format shown in
                        Figure 6.1.

                        These values can be loaded, used in calculations, and
                        stored with 8087-family instructions. You must write
                        your own routines to use them with 16-bit 8086-family
                        processors.

    DT                  Allocates 10-byte (80-bit) integers if the D radix
                        specifier is used.

                        By default, DT allocates packed binary coded decimal
                        (BCD) numbers, as described in Section 6.5.1.2,
                        "Binary Coded Decimal Variables." If you define binary
                        10-byte integers, you must write your own routines to
                        use routines in calculations.


    Example

    integer     DB     16          ; Initialize byte to 16
    expression  DW     4*3         ; Initialize word to 12
    empty       DQ     ?           ; Allocate uninitialized long integer
                DB     1,2,3,4,5,6 ; Initialize six unnamed bytes
    long        DD     4294967295  ; Initialize double word to 4,294,967,295
    tb          DT     2345d       ; Initialize 10-byte binary integer


6.5.1.2  Binary Coded Decimal Variables

    Binary coded decimal (BCD) numbers provide a method of doing calculations
    on large numbers without rounding errors. They are sometimes used in
    financial applications. There are two kinds: packed and unpacked.

    Unpacked BCD numbers are stored one digit to a byte, with the value in the
    lower four bits. They can be defined with the DB directive. For example,
    an unpacked BCD number could be defined and initialized as shown below:

    unpackedr   DB     1,5,8,2,5,2,9       ; Initialized to 9,252,851
    unpackedf   DB     9,2,5,2,8,5,1       ; Initialized to 9,252,851

    Whether least-significant digits can come either first or last depends on
    how you write the calculation routines that handle the numbers.
    Calculations with unpacked BCD numbers are discussed in Section 14.5.1.

    Packed BCD numbers are stored two digits to a byte, with one digit in the
    lower four bits and one in the upper four bits. The leftmost bit holds the
    sign (0 for positive or 1 for negative).

    Packed BCD variables can be defined with the DT directive as shown below:

    packed      DT     9252851             ; Allocate 9,252,851

    The 8087-family processors can do fast calculations with packed BCD
    numbers, as described in Chapter 17, "Calculating with a Math
    Coprocessor." The 8086-family processors can also do some calculations
    with packed BCD numbers, but the process is slower and more complicated.
    See Section 14.5.2 for details.


6.5.1.3  String Variables

    Strings are normally initialized with the DB directive. The initializing
    value is specified as a string constant. Strings can also be initialized
    by specifying each value in the string. For example, the following
    definitions are equivalent:

    version1    DB     97,98,99            ; As ASCII values
    version2    DB     'a','b','c'         ; As characters
    version3    DB     "abc"               ; As a string

    One- and two-character strings can also be initialized with any of the
    other data-definition directives. The last (or only) character in the
    string is placed in the byte with the lowest address. Either 0 or the
    first character is placed in the next byte. The unused portion of such
    variables is filled with zeros.

    Examples

    function9   DB     'Hello',13,10,'$'   ; Use with DOS INT 21h
                                            ;   function 9
    asciiz      DB     "\ASM\TEST.ASM",0   ; Use as ASCIIZ string

    message     DB     "Enter file name: " ; Use with DOS INT 21h
    l_message   EQU    $-message           ;   function 40h
    a_message   EQU    OFFSET message

    str1        DB     "ab"                ; Stored as 61 62
    str2        DD     "ab"                ; Stored as 62 61 00 00
    str3        DD     "a"                 ; Stored as 61 00 00 00


6.5.1.4  Real-Number Variables

    Real numbers must be stored in binary format. However, when initializing
    variables, you can specify decimal or hexadecimal constants and let the
    assembler automatically encode them into their binary equivalents.
    QuickAssembler can use two different binary formats for real numbers: IEEE
    or Microsoft Binary. You can specify the format by using directives (IEEE
    is the default).

    This section tells you how to initialize real-number variables, describes
    the two binary formats, and explains real-number encoding.

    Initializing and Allocating Real-Number Variables

    Real numbers can be defined by initializing them either with real-number
    constants or with encoded hexadecimal constants. The real-number
    designator (R) must follow numbers specified in encoded format.

    The directives for defining real numbers are listed below with the sizes
    of the numbers they can allocate:

    Directive           Size
    ──────────────────────────────────────────────────────────────────────────
    DD                  Allocates short (32-bit) real numbers in either the
                        IEEE or Microsoft Binary format.

    DQ                  Allocates long (64-bit) real numbers in either the
                        IEEE or Microsoft Binary format.

    DT                  Allocates temporary or 10-byte (80-bit) real numbers.
                        The format of these numbers is similar to the IEEE
                        format. They are always encoded the same regardless of
                        the real-number format. Their size is nonstandard and
                        incompatible with most Microsoft high-level languages.
                        Temporary-real format is provided for those who want
                        to initialize real numbers in the format used
                        internally by 8087-family processors.


    The 8086-family microprocessors do not have any instructions for handling
    real numbers. You must write your own routines, use a library that
    includes real-number calculation routines, or use a coprocessor. The
    8087-family coprocessors can load real numbers in the IEEE format; they
    can also use the values in calculations and store the results back to
    memory, as explained in Chapter 17, "Calculating with a Math
    Coprocessor."

    Examples

    shrt        DD      98.6                ; QuickAsm automatically encodes
    long        DQ      5.391E-4            ;   in current format
    ten_byte    DT      -7.31E7
    eshrt       DD      87453333r           ; 98.6 encoded in Microsoft
                                            ;   Binary format
    elong       DQ      3F41AA4C6F445B7Ar   ; 5.391E-4 encoded in IEEE format

    The real-number designator (R) used to specify encoded numbers is
    explained in Section 6.1.3, "Real-Number Constants."

    Selecting a Real-Number Format

    QuickAssembler can encode four-byte and eight-byte real numbers in two
    different formats: IEEE and Microsoft Binary. Your choice depends on the
    type of program you are writing. The four primary alternatives are listed
    below:

    1. If your program requires a coprocessor for calculations, you must use
        the IEEE format.

    2. Most high-level languages use the IEEE format. If you are writing
        modules that will be called from such a language, your program should
        use the IEEE format. All versions of the C, FORTRAN, and Pascal
        compilers sold by Microsoft and IBM use the IEEE format.

    3. If you are writing a module that will be called from early versions of
        Microsoft or IBM BASIC, your program should use the Microsoft Binary
        format. Versions that support only the Microsoft Binary format include:

        ■  Microsoft QuickBASIC through Version 2.01

        ■  Microsoft BASIC Compiler through Version 5.3

        ■  IBM BASIC Compiler through Version 2.0

        ■  Microsoft GW-BASIC(R) interpreter (all versions)

        ■  IBM BASICA interpreter (all versions)

        Microsoft QuickBASIC Version 3.0 supported both the Microsoft Binary
        and IEEE formats as options. Current and future versions of Microsoft
        QuickBASIC and the Microsoft and IBM BASIC compilers support only the
        IEEE format.

    4. If you are creating a stand-alone program that does not use a
        coprocessor, you can choose either format. The IEEE format is better
        for overall compatibility with high-level languages. The Microsoft
        Binary format may be necessary for compatibility with existing source
        code.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  When you interface assembly-language modules with high-level
    languages, the real-number format only matters if you initialize
    real-number variables in the assembly module. If your assembly module does
    not use real numbers, or if all real numbers are initialized in the
    high-level-language module, the real-number format does not make any
    difference.
    ──────────────────────────────────────────────────────────────────────────

    By default, QuickAssembler assembles real-number data in the IEEE format.
    If you wish to use the Microsoft Binary format, you must put the .MSFLOAT
    directive at the start of your source file before initializing any
    real-number variables.

    Real-Number Encoding

    The IEEE format for encoding four- and eight-byte real numbers is
    illustrated in Figure 6.2. Although this figure places the
    most-significant bit first for illustration, low bytes actually appear
    first in memory.

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 6.5.1.4 of the manual              │
    └────────────────────────────────────────────────────────────────────────┘

    The parts of the real numbers are described below:

    1. Sign bit (0 for positive or 1 for negative) in the upper bit of the
        first byte.

    2. Exponent in the next bits in sequence (8 bits for short real number or
        11 bits for long real number).

    3. All except the first set bit of mantissa in the remaining bits of the
        variable. Since the first significant bit is known to be set, it need
        not be actually stored. The length is 23 bits for short real numbers
        and 52 bits for long real numbers.

    The Microsoft Binary format for encoding real numbers is illustrated in
    Figure 6.3.

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 6.5.1.4 of the manual              │
    └────────────────────────────────────────────────────────────────────────┘

    The three parts of real numbers are described below:

    1. Biased exponent (8 bits) in the high-address byte. The bias is 81H for
        short real numbers and 401H for long real numbers.

    2. Sign bit (0 for positive or 1 for negative) in the upper bit of the
        second-highest byte.

    3. All except the first set bit of mantissa in the remaining 7 bits of the
        second-highest byte and in the remaining bytes of the variable. Since
        the first significant bit is known to be set, it need not be actually
        stored. The length is 23 bits for short real numbers and 55 bits for
        long real numbers.

    QuickAssembler also supports the 10-byte temporary-real format used
    internally by 8087-family coprocessors. This format is similar to IEEE
    format. The size is nonstandard and is not used by Microsoft compilers or
    interpreters. Since the coprocessors can load and automatically convert
    numbers in the more standard 4-byte and 8-byte formats, the 10-byte format
    is seldom used in assembly-language programming.

    The temporary-real format for encoding real numbers is illustrated in
    Figure 6.4.

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 6.5.1.4 of the manual              │
    └────────────────────────────────────────────────────────────────────────┘

    The four parts of the real numbers are described below:

    1. Sign bit (0 for positive or 1 for negative) in the upper bit of the
        first byte.

    2. Exponent in the next bits in sequence (15 bits for 10-byte real).

    3. The integer part of mantissa in the next bit in sequence (bit 63).

    4. Remaining bits of mantissa in the remaining bits of the variable. The
        length is 63 bits.

    Notice that the 10-byte temporary-real format stores the integer part of
    the mantissa. This differs from the 4-byte and 8-byte formats, in which
    the integer part is implicit.


6.5.2  Arrays and Buffers

    Arrays, buffers, and other data structures consisting of multiple data
    objects of the same size can be defined with the DUP operator. This
    operator can be used with any of the data-definition directives described
    in this chapter.

    Syntax

    count DUP (initialvalue[[,initialvalue]]...)

    The count sets the number of times to define initialvalue. The initial
    value can be any expression that evaluates to an integer value, a
    character constant, or another DUP operator. It can also be the undefined
    symbol (?) if there is no initial value.

    Multiple initial values must be separated by commas. If multiple values
    are specified within the parentheses, the sequence of values is allocated
    count times. For example, the statement

                DB     5 DUP ("Text ")

    allocates the string "Text " five times for a total of 25 bytes.

    DUP operators can be nested up to 17 levels. The initial value (or values)
    must always be placed within parentheses.

    Examples

    array       DD     10 DUP (1)                 ; 10 doublewords
                                                ;   initialized to 1

    buffer      DB     256 DUP (?)                ; 256 byte buffer

    masks       DB     20 DUP (040h,020h,04h,02h) ; 80 byte buffer
                                                ;   with bit masks
                DB     32 DUP ("I am here ")      ; 320 byte buffer with
                                                ;   signature for debugging
    three_d     DD     5 DUP (5 DUP (5 DUP (0)))  ; 125 doublewords
                                                ;   initialized to 0

    Note that QuickAssembler sometimes generates different object code when
    the DUP operator is used rather than when multiple values are given. For
    example, the statement

    test1       DB      ?,?,?,?,?  ; Indeterminate

    is "indeterminate." It causes QuickAssembler to write five zero-value
    bytes to the object file. The statement

    test2       DB      5 DUP (?)  ; Undefined

    is "undefined." It causes QuickAssembler to increase the offset of the
    next record in the object file by five bytes. Therefore, an object file
    created with the first statement will be larger than one created with the
    second statement.

    In most cases, the distinction between indeterminate and undefined
    definitions is trivial. The linker adjusts the offsets so that the same
    executable file is generated in either case. However, the difference is
    significant in segments with the COMMON combine type. If COMMON segments
    in two modules contain definitions for the same variable, one with an
    indeterminate value and one with an explicit value, the actual value in
    the executable file varies depending on link order. If the module with the
    indeterminate value is linked last, the 0 initialized for it overrides the
    explicit value. You can prevent this by always using undefined rather than
    indeterminate values in COMMON segments. For example, use the first of the
    following statements:

    test3       DB      1 DUP (?)  ; Undefined - doesn't initialize
    test4       DB      ?          ; Indeterminate - initializes 0

    If you use the undefined definition, the explicit value is always used in
    the executable file regardless of link order.


6.5.3  Labeling Variables

    The LABEL directive can be used to define a variable of a given size at a
    specified location. It is useful if you want to refer to the same data as
    variables of different sizes.

    Syntax

    name LABEL type

    The name is the symbol assigned to the variable, and type is the variable
    size. The type can be any one of the following type specifiers: BYTE,
    WORD, DWORD, QWORD, or TBYTE. It can also be the name of a previously
    defined structure.

    Examples

    warray      LABEL   WORD       ; Access array as 50 words
    darray      LABEL   DWORD      ; Access same array as 25 doublewords
    barray      DB      100 DUP(?) ; Access same array as 100 bytes


6.5.4  Pointer Variables

    The assembler lets you explicitly allocate pointers. A pointer (address)
    variable is either two or four bytes in size; consequently, any word or
    doubleword data definition can create a pointer variable. However,
    declaring pointer variables explicitly gives more accurate debugging
    information to the environment.

    Pointer-variable definitions have the following form:

    symbol [[DW | DD]] type PTR initialvalue

    The type can consist of the name of a record, structure, or one of the
    standard types described in Section 6.3, "Using Type Specifiers."

    Example

    string      DB  "from swerve of shore to bend of bay", 0
    pstring     DW  BYTE PTR string  ; Declares a near pointer to string.
    fpstring    DD  BYTE PTR string  ; Declares a far pointer to string.

    In this example, near (two-byte) and far (four-byte) pointers are declared
    and initialized to the value of a null terminated string. This is the
    format used in C language, and the pointer variables in the example could
    be used in C functions that process strings.

    Using an explicit pointer declaration generates debugging information,
    causing the variable to be viewed as a pointer during debugging.
    Consequently, the environment properly interprets the variable when you
    enter it as a Watch expression. No special syntax is required.

    This use of PTR is distinct from the use of PTR to alter the type of a
    variable during an instruction. The assembler uses the context of the
    program to determine which way you are using the PTR keyword.


6.6  Setting the Location Counter

    As the assembler encounters labels and data declarations, it needs to know
    what address to assign. This function is fulfilled by the location
    counter, which indicates the offset address corresponding to the current
    line of source code. This value is generally equal to the value that IP
    will have at run time.

    The assembler increments the location counter as it processes each
    statement. However, you can set the location counter directly by using the
    ORG directive.

    Syntax

    ORG expression

    Subsequent code and data offsets begin at the new offset specified set by
    expression. The expression must resolve to a constant number. In other
    words, all symbols used in the expression must be known on the first pass
    of the assembler.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  The value of the location counter, represented by the dollar sign
    ($), can be used in the expression, as described in Section 9.3, "Using
    the Location Counter."
    ──────────────────────────────────────────────────────────────────────────

    Example 1

    ; Labeling absolute addresses

    STUFF       SEGMENT AT 0        ; Segment has constant value 0
                ORG     410h        ; Offset has constant value 410h
    equipment   LABEL   WORD        ; Value at 0000:0410 labeled "equipment"
                ORG     417h        ; Offset has constant value 417h
    keyboard    LABEL   WORD        ; Value at 0000:0417 labeled "keyboard"
    STUFF       ENDS

                .CODE
                .
                .
                .
                ASSUME  ds:STUFF    ; Tell the assembler
                mov     ax,STUFF    ; Tell the processor
                mov     ds,ax

                mov     dx,equipment
                mov     keyboard,ax

    Example 1 illustrates one way of assigning symbolic names to absolute
    addresses.

    Example 2

    ; Format for .COM files

    _TEXT       SEGMENT
                ASSUME   cs:_TEXT,ds:_TEXT,ss:_TEXT,es:_TEXT
                ORG      100h        ; Skip 100h bytes of DOS header

    entry:      jmp      begin       ; Jump over data
    variable    DW       ?           ; Put more data here
                .
    begin:      .                    ; First line of code
                .                    ; Put more code here
    _TEXT       ENDS
                END      entry

    Example 2 illustrates how the ORG directive is used to initialize the
    starting execution point in .COM files.


6.7  Aligning Data

    Some operations are more efficient when the variable used in the operation
    is lined up on a boundary of a particular size. The EVEN and ALIGN
    directives can be used to pad the object file so that the next variable is
    aligned on a specified boundary.

    Syntax 1

    EVEN

    Syntax 2

    ALIGN number

    The EVEN directive always aligns on the next even byte. The ALIGN
    directive aligns on the next byte that is a multiple of number. The number
    must be a power of 2. For example, use ALIGN 2 or EVEN to align on word
    boundaries, or use ALIGN 4 to align on doubleword boundaries.

    If the value of the location counter is not on the specified boundary when
    an ALIGN directive is encountered, the location counter is incremented to
    a value on the boundary. If the location counter is already on the
    boundary, the directive has no effect.

    When the assembler increments the location counter, it also pads the
    skipped memory locations by inserting certain values. If the segment is a
    data segment, the assembler always pads these locations with zeros. If the
    segment is a code segment, the assembler pads skipped memory locations
    with a two-byte no-op instruction (instruction that performed no
    operation) where possible:

                xchg  bx,bx

    This instruction, which assembles as 87D8 hexadecimal, does nothing, but
    it executes faster than two NOP instructions. Where there is no room for
    the two-byte no-op, the assembler inserts the one-byte NOP instruction.

    The ALIGN and EVEN directives give no efficiency improvements on
    processors that have an 8-bit data bus (such as the 8088). These
    processors always fetch data one byte at a time, regardless of the
    alignment. However, using EVEN can speed certain operation on processors
    that have a 16-bit data bus (such as the 8086), since the processor can
    fetch a word if the data is word aligned, but must do two memory fetches
    if the data is not word aligned.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  The ALIGN directive is a new feature of recent versions of Microsoft
    assemblers, starting with 5.0. In previous versions, data could be word
    aligned by using the EVEN directive, but other alignments could not be
    specified.

    The EVEN directive should not be used in segments with BYTE align type.
    Similarly, the number specified with the ALIGN directive should be no
    greater than the size of the align type of the current segment (thus
    ensuring that number is a divisor of the align type of the segment).
    ──────────────────────────────────────────────────────────────────────────

    Example

                DOSSEG
                .MODEL  small,c
                .STACK  100h
                .DATA
                .
                .
                .
                ALIGN   2                   ; For faster data access
    stuff       DW      66,124,573,99,75
                .
                .
                .
                ALIGN   2                   ; For faster data access
    evenstuff   DW      ?,?,?,?,?
                .CODE
    start:      mov     ax,@data            ; Load segment location
                mov     ds,ax               ;   into DS
                mov     es,ax               ;   and ES registers

                mov     cx,5                ; Load count
                mov     si,OFFSET stuff     ; Point to source
                mov     di,OFFSET evenstuff ;   and destination
                ALIGN   2                   ; Align for faster loop access
    mloop:      lodsw                       ; Load a word
                inc     ax                  ; Make it even by incrementing
                and     ax,NOT 1            ;   and turning off first bit
                stosw                       ; Store
                loop    mloop               ; Again
                .
                .
                .

    In this example, the words at stuff and evenstuff are forced to word
    boundaries. This makes access to the data faster with processors that have
    a 16-bit data bus. Without this alignment, the initial data might start on
    an odd boundary and the processor would have to fetch half of each word at
    a time.

    Similarly, the alignment in the code segment speeds up repeated access to
    the code at the start of the loop. The sample code sacrifices program size
    in order to achieve moderate improvements on the 8086 and 80286. There is
    no speed advantage on the 8088.



────────────────────────────────────────────────────────────────────────────
Chapter 7:  Using Structures and Records


    QuickAssembler can define and use two kinds of multifield variables:
    structures and records.

    "Structures" are templates for data objects made up of smaller data
    objects. A structure can be used to define structure variables, which are
    made up of smaller variables called fields. Fields within a structure can
    be different sizes, and each can be accessed individually.

    "Records" are templates for data objects whose bits can be described as
    groups of bits called fields. A record can be used to define record
    variables. Each bit field in a record variable can be used separately in
    constant operands or expressions. The processor cannot access bits
    individually at run time, but bit fields can be used with logical bit
    instructions to change bits indirectly.

    This chapter describes structures and records and tells how to use them.


7.1  Structures

    A structure variable is a collection of data objects that can be accessed
    symbolically as a single data object. Objects within the structure can
    have different sizes and can be accessed symbolically.

    There are two steps in using structure variables:

    1. Declare a structure type. A structure type is a template for data. It
        declares the sizes and, optionally, the initial values for objects in
        the structure. By itself the structure type does not define any data.
        The structure type is used by QuickAssembler during assembly but is not
        saved as part of the object file.

    2. Define one or more variables having the structure type. For each
        variable defined, memory is allocated to the object file in the format
        declared by the structure type.

    The structure variable can then be used as an operand in assembler
    statements. The structure variable can be accessed as a whole by using the
    structure name, or individual fields can be accessed by using structure
    and field names.


7.1.1  Declaring Structure Types

    The STRUC and ENDS directives mark the beginning and end of a type
    declaration for a structure.

    Syntax

    name STRUC
    fielddeclarations
    name ENDS

    The name declares the name of the structure type. It must be unique. The
    fielddeclarations declare the fields of the structure. Any number of field
    declarations may be given. They must follow the form of data definitions
    described in Section 6.5, "Defining and Initializing Data." Default
    initial values may be declared individually or with the DUP operator.

    The names given to fields must be unique within the source file where they
    are declared. When variables are defined, the field names will represent
    the offset from the beginning of the structure to the corresponding field.

    When declaring strings in a structure type, make sure the initial values
    are long enough to accommodate the largest possible string. Strings
    smaller than the field size can be placed in the structure variable, but
    larger strings will be truncated.

    A structure declaration can contain both field declarations and comments.
    Conditional-assembly statements are allowed in structure declarations; no
    other kinds of statements are allowed. Since the STRUC directive is not
    allowed inside structure declarations, structures cannot be nested.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  The ENDS directive that marks the end of a structure has the same
    mnemonic as the ENDS directive that marks the end of a segment. The
    assembler recognizes the meaning of the directive from context. Make sure
    each SEGMENT directive and each STRUC directive has its own ENDS
    directive.
    ──────────────────────────────────────────────────────────────────────────

    Example

    student     STRUC                ; Structure for student records
    id          DW     ?             ; Field for identification #
    sname       DB     "Last, First Middle    "
    scores      DB     10 DUP (100)  ; Field for 10 scores
    student     ENDS

    Within the sample structure student, the fields id, sname, and scores have
    the offset values 0, 2, and 24, respectively.


7.1.2  Defining Structure Variables

    A structure variable is a variable with one or more fields of different
    sizes. The sizes and initial values of the fields are determined by the
    structure type with which the variable is defined.

    Syntax

    [[name]] structurename <[[initialvalue [[,initialvalue]]...]]>

    The name is the name assigned to the variable. If no name is given, the
    assembler allocates space for the variable, but does not give it a
    symbolic name. The structurename is the name of a structure type
    previously declared by using the STRUC and ENDS directives.

    An initialvalue can be given for each field in the structure. Its type
    must not be incompatible with the type of the corresponding field. The
    angle brackets (< >) are required even if no initial value is given. If
    initial values are given for more than one field, the values must be
    separated by commas.

    If the DUP operator (see Section 6.5.2, "Arrays and Buffers") is used to
    initialize multiple structure variables, only the angle brackets and
    initial values, if given, need to be enclosed in parentheses. For example,
    you can define an array of structure variables as shown below:

    war         date    365 DUP (<,,1940>)

    You need not initialize all fields in a structure. If an initial value is
    left blank, the assembler automatically uses the default initial value of
    the field, which was originally determined by the structure type. If there
    is no default value, the field is undefined.

    Examples

    The following examples use the student type declared in the example in
    Section 7.1.1, "Declaring Structure Types":

    s1          student <>           ; Uses default values of type


    s2          student <1467,"White, Robert D.",>
                                    ; Override default values of first two
                                    ;   fields--use default value of third

    sarray      student 100 DUP (<>) ; Declare 100 student variables
                                    ;   with default initial values

    Note that you cannot initialize any structure field that has multiple
    values if this field was given a default initial value when the structure
    was declared. For example, assume the following structure declaration:

    stuff       STRUC
    buffer      DB     100 DUP (?)      ; Can't override
    crlf        DB     13,10            ; Can't override
    query       DB     'Filename: '     ; String <= can override
    endmark     DB     36               ; Can override
    stuff       ENDS

    The buffer and crlf fields cannot be overridden by initial values in the
    structure definition because they have multiple values. The query field
    can be overridden as long as the overriding string is no longer than query
    (10 bytes). A longer string would generate an error. The endmark field can
    be overridden by any byte value.


7.1.3  Using Structure Operands

    Like other variables, structure variables can be accessed by name. Fields
    within structure variables can also be accessed by using the syntax shown
    below:

    Syntax

    variable.field

    The variable must be the name of a structure (or an operand that resolves
    to the address of a structure). The field must be the name of a field
    within that structure. The variable is separated from the field by a
    period. The period is discussed as a structure-field-name operator in
    Section 9.2.1.2.

    The address of a structure operand is the sum of the offsets of variable
    and field. The address is relative to the segment or group in which the
    variable is declared.

    Examples

    date        STRUC                       ; Declare structure
    month       DB      ?
    day         DB      ?
    year        DW      ?
    date        ENDS

                .DATA
    yesterday   date    <9,30,1987>         ; Declare structure
    today       date    <10,1,1987>         ;   variables
    tomorrow    date    <10,2,1987>

                .CODE
                .
                .
                .
                mov     al,yesterday.day    ; Use structure variables
                mov     ah,today.month      ;   as operands
                mov     tomorrow.year,dx
                mov     bx,OFFSET yesterday ; Load structure address
                mov     ax,[bx].month       ; Use as indirect operand
                .
                .
                .


7.2  Records

    A record variable is a byte or word variable in which specific bit fields
    can be accessed symbolically. Bit fields within the record can have
    different sizes.

    There are two steps in declaring record variables:

    1. Declare a record type. A record type is a template for data. It
        declares the sizes and, optionally, the initial values for bit fields
        in the record. By itself, the record type does not define any data. The
        record type is used by Quick-Assembler during assembly but is not saved
        as part of the object file.

    2. Define one or more variables having the record type. For each variable
        defined, memory is allocated to the object file in the format declared
        by the type.

    The record variable can then be used as an operand in assembler
    statements. The record variable can be accessed as a whole by using the
    record name, or individual fields can be specified by using the record
    name and a field name combined with the field-name operator. A record type
    can also be used as a constant (immediate data).


7.2.1  Declaring Record Types

    The RECORD directive declares a record type for an 8-bit or 16-bit record
    that contains one or more bit fields.

    Syntax

    recordname RECORD field [[,field]]...

    The recordname is the name of the record type to be used when creating the
    record. The field declares the name, width, and initial value for the
    field.

    The syntax for each field is shown below:

    Syntax

    fieldname:width[[=expression]]

    The fieldname is the name of a field in the record, width is the number of
    bits in the field, and expression is the initial (or default) value for
    the field.

    Any number of field combinations can be given for a record, as long as
    each is separated from its predecessor by a comma. The sum of the widths
    for all fields must not exceed 16 bits.

    The width must be a constant. If the total width of all declared fields is
    larger than eight bits, the assembler uses two bytes. Otherwise, only one
    byte is used.

    If expression is given, it declares the initial value for the field. An
    error message is generated if an initial value is too large for the width
    of its field. If the field is at least seven bits wide, you can use an
    ASCII character for expression. The expression must not contain a forward
    reference to any symbol.

    In all cases, the first field you declare goes into the most significant
    bits of the record. Successively declared fields are placed in the
    succeeding bits to the right. If the fields you declare do not total
    exactly 8 bits or exactly 16 bits, the entire record is shifted right so
    that the last bit of the last field is the lowest bit of the record.
    Unused bits in the high end of the record are initialized to 0.

    Example 1

    color       RECORD  blink:1,back:3,intense:1,fore:3

    Example 1 creates a byte record type color having four fields: blink,
    back, intense, and fore. The contents of the record type are shown below:

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 7.2.1 of the manual                │
    └────────────────────────────────────────────────────────────────────────┘

    Since no initial values are given, all bits are set to 0. Note that this
    is only a template maintained by the assembler. No data is created.

    Example 2

    cw          RECORD   r1:3=0,ic:1=0,rc:2=0,pc:2=3,r2:2=1,masks:6=63

    Example 2 creates a record type cw having six fields. Each record declared
    by using this type occupies 16 bits of memory. The bit diagram below shows
    the contents of the record type:

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 7.2.1 of the manual                │
    └────────────────────────────────────────────────────────────────────────┘

    Default values are given for each field. They can be used when data is
    declared for the record.


7.2.2  Defining Record Variables

    A record variable is an 8-bit or 16-bit variable whose bits are divided
    into one or more fields.

    Syntax

    [[name]] recordname <[[initialvalue [[,initialvalue]]...]]>

    The name is the symbolic name of the variable. If no name is given, the
    assembler allocates space for the variable, but does not give it a
    symbolic name. The recordname is the name of a record type that was
    previously declared by using the RECORD directive.

    An initialvalue for each field in the record can be given as an integer, a
    character constant, or an expression that resolves to a value compatible
    with the size of the field. Angle brackets (< >) are required even if no
    initial value is given. If initial values for more than one field are
    given, the values must be separated by commas.

    If the DUP operator (see Section 6.5.2, "Arrays and Buffers") is used to
    initialize multiple record variables, only the angle brackets and initial
    values, if given, need to be enclosed in parentheses. For example, you can
    define an array of record variables as shown below:

    xmas        color   50 DUP (<1,2,0,4>)

    You do not have to initialize all fields in a record. If an initial value
    is left blank, the assembler automatically uses the default initial value
    of the field. This is declared by the record type. If there is no default
    value, each bit in the field is cleared.

    Sections 7.2.3, "Using Record Operands and Record Variables," and 7.2.4,
    "Record Operators," illustrate ways to use record data after it has been
    declared.

    Example 1

    color       RECORD  blink:1,back:3,intense:1,fore:3 ; Record declaration
    warning     color   <1,0,1,4>                       ; Record definition

    The definition above creates a variable named warning whose type is given
    by the record type color. The initial values of the fields in the variable
    are set to the values given in the record definition. The initial values
    would override the default record values, had any been given in the
    declaration. The contents of the record variable are shown below:

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 7.2.2 of the manual                │
    └────────────────────────────────────────────────────────────────────────┘

    Example 2

    color       RECORD  blink:1,back:3,intense:1,fore:3 ; Record declaration
    colors      color   16 DUP (<>)                     ; Record declaration

    Example 2 creates an array named colors containing 16 variables of type
    color. Since no initial values are given in either the declaration or the
    definition, the variables have undefined (0) values.

    Example 3

    cw          RECORD   r1:3=0,ic:1=0,rc:2=0,pc:2=3,r2:2=1,masks:6=63
    newcw       cw       <,,2,,,>

    Example 3 creates a variable named newcw with type cw. The default values
    set in the type declaration are used for all fields except the rc field.
    This field is set to 2. The contents of the variable are shown below:

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 7.2.2 of the manual                │
    └────────────────────────────────────────────────────────────────────────┘


7.2.3  Using Record Operands and Record Variables

    A record operand refers to the value of a record type. It should not be
    confused with a record variable. A record operand is a constant; a record
    variable is a value stored in memory. A record operand can be used with
    the following syntax:

    Syntax

    recordname <[[value[[,value]]...]]>

    The recordname must be the name of a record type declared in the source
    file. The optional value is the value of a field in the record. If more
    than one value is given, each value must be separated by a comma. Values
    can include expressions or symbols that evaluate to constants. The
    enclosing angle brackets (<>) are required, even if no value is given. If
    no value for a field is given, the default value for that field is used.

    Example

                .DATA
    color       RECORD  blink:1,back:3,intense:1,fore:3 ; Record declaration
    window      color   <0,6,1,6>                       ; Record definition

                .CODE
                .
                .
                .
                mov     ah,color <0,3,0,2>              ; Load record operand
                                                        ;   (constant value 32h
                mov     bh,window                       ; Load record variable
                                                        ;   (memory value 6Eh)

    In this example, the record operand color <0,3,0,2> and the record
    variable warning are loaded into registers. The contents of the values are
    shown below:

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 7.2.3 of the manual                │
    └────────────────────────────────────────────────────────────────────────┘


7.2.4  Record Operators

    The WIDTH and MASK operators are used exclusively with records to return
    constant values representing different aspects of previously declared
    records.


7.2.4.1  The MASK Operator

    The MASK operator returns a bit mask for the bit positions in a record
    occupied by the given record field. A bit in the mask contains a 1 if that
    bit corresponds to a field bit. All other bits contain 0.

    Syntax

    MASK {recordfieldname | record}

    The recordfieldname may be the name of any field in a previously defined
    record. The record may be the name of any previously defined record. The
    NOT operator is sometimes used with the MASK operator to reverse the bits
    of a mask.

    Example

                .DATA
    color       RECORD  blink:1,back:3,intense:1,fore:3
    message     color   <0,5,1,1>
                .CODE
                .
                .
                .
                mov     ah,message           ; Load initial   0101 1001
                and     ah,NOT MASK back     ; Turn off   AND 1000 1111
                                            ; "back"         ---------
                                            ;                0000 1001
                or      ah,MASK blink        ; Turn on     OR 1000 0000
                                            ; "blink"        ---------
                                            ;                1000 1001
                xor     ah,MASK intense      ; Toggle     XOR 0000 1000
                                            ; "intense"      ---------
                                            ;                1000 0001


7.2.4.2  The WIDTH Operator

    The WIDTH operator returns the width (in bits) of a record or record
    field.

    Syntax

    WIDTH {recordfieldname | record}

    The recordfieldname may be the name of any field defined in any record.
    The record may be the name of any defined record.

    Note that the width of a field is the number of bits assigned for that
    field; the value of the field is the starting position (from the right) of
    the field.

    Examples

                .DATA
    color       RECORD  blink:1,back:3,intense:1,fore:3

    wblink      EQU     WIDTH blink        ; "wblink"   = 1   "blink"   = 7
    wback       EQU     WIDTH back         ; "wback"    = 3   "back"    = 4
    wintense    EQU     WIDTH intense      ; "wintense" = 1   "intense" = 3
    wfore       EQU     WIDTH fore         ; "wfore"    = 3   "fore"    = 0
    wcolor      EQU     WIDTH color        ; "wcolor"   = 8

    prompt      color   <1,5,1,1>

                .CODE
                .
                .
                .
                IF      (WIDTH color) GE 8 ; If color is 16 bit, load
                mov     ax,prompt          ;   into 16-bit register
                ELSE                       ; else
                mov     al,prompt          ;   load into low 8-bit register
                xor     ah,ah              ;   and clear high 8-bit register
                ENDIF


7.2.5  Using Record-Field Operands

    Record-field operands represent the location of a field in its
    corresponding record. The operand evaluates to the bit position of the
    low-order bit in the field and can be used as a constant operand. The
    field name must be from a previously declared record.

    Record-field operands are often used with the WIDTH and MASK operators, as
    described in Sections 7.2.4.1 and 7.2.4.2.

    Example

                .DATA
    color       RECORD  blink:1,back:3,intense:1,fore:3  ; Record declaration
    cursor      color   <1,5,1,1>                        ; Record definition
                .CODE
                .
                .
                .

    ; Rotate "back" of "cursor" without changing other values

                mov     al,cursor        ; Load value from memory
                mov     ah,al            ; Save a copy for work      1101 1001=
                and     al,NOT MASK back ; Mask out old bits     AND 1000 1111=
                                        ;   to save old cursor      ---------
                                        ;                           1000 1001=
                mov     cl,back          ; Load bit position
                shr     ah,cl            ; Shift to right            0000 1101=
                inc     ah               ; Increment                 0000 1110=

                shl     ah,cl            ; Shift left again          1110 0000=
                and     ah,MASK back     ; Mask off extra bits   AND 0111 0000=
                                        ;   to get new cursor       ---------
                                        ;                           0110 0000
                or      ah,al            ; Combine old and new    OR 1000 1001
                                        ;                           ---------
                mov     cursor,ah        ; Write back to memory      1110 1001

    This example illustrates several ways in which record fields can be used
    as operands and in expressions.



────────────────────────────────────────────────────────────────────────────
Chapter 8:  Creating Programs from Multiple Modules


    Most medium and large assembly-language programs are created from several
    source files or modules. When several modules are used, the scope of
    symbols becomes important. This chapter discusses the scope of symbols and
    explains how to declare global symbols that can be accessed from any
    module. It also tells you how to specify a module that will be accessed
    from a library.

    Symbols, such as labels and variable names, can be either local or global
    in scope. By default, all symbols are local; they are specific to the
    source file in which they are defined. Symbols must be declared global if
    they must be accessed from modules other than the one in which they are
    defined.

    To declare symbols global, they must be declared public in the source
    module in which they are defined. They must also be declared external in
    any module that must access the symbol. If the symbol represents
    uninitialized data, it can be declared communal──meaning that the symbol
    is both public and external. The PUBLIC, EXTRN, and COMM directives are
    used to declare symbols public, external, and communal, respectively.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  The term "local" often has a different meaning in assembly language
    than in many high-level languages. Local symbols in compiled languages are
    symbols that are known only within a procedure (called a function,
    routine, subprogram, or subroutine, depending on the language). You can
    use QuickAssembler to generate these kinds of variables, as explained in
    Section 15.3.6, "Creating Locals Automatically."

    By default, the assembler converts all lowercase letters in names declared
    with the PUBLIC, EXTRN, and COMM directives to uppercase letters before
    copying the name to the object file. To preserve lowercase names in public
    symbols, choose Preserve Case or Preserve Extrn from the Assembler Flags
    dialog box, or assemble with /Cx or /Cl on the QCL command line. This
    should be done when preparing assembler modules to be linked with modules
    from C and other case-sensitive languages.
    ──────────────────────────────────────────────────────────────────────────


8.1  Declaring Symbols Public

    The PUBLIC directive is used to declare symbols public so that they can be
    accessed from other modules. If a symbol is not declared public, the
    symbol name is not written to the object file. The symbol has the value of
    its offset address during assembly, but the name and address are not
    available to the linker.

    If the symbol is declared public, its name is associated with its offset
    address in the object file. During linking, symbols in different
    modules──but with the same name──are resolved to a single address.

    Public symbol names are also used by some symbolic debuggers (such as
    SYMDEB) to associate addresses with symbols.

    Syntax

    PUBLIC declaration [[,declaration]]...

    Each declaration has the following syntax:

    [[lang]] name

    The optional lang field contains a language specifier that overrides the
    language specified by the .MODEL directive. With this statement, the
    language specifier determines naming conventions for the variable that it
    precedes. The specifier can be C, FORTRAN, Pascal, or BASIC. The C naming
    convention prefixes each variable with an underscore (_); the other
    conventions do not. If you specify lang with the .MODEL directive, all
    procedures are automatically public. However, you must use the PUBLIC
    directive for any data that you want to access from other modules.

    Note that using the C type specifier does not preserve case. You must
    choose one of the assembler flags or options that preserve case.

    The name must be the name of a variable, label, or numeric equate defined
    within the current source file. PUBLIC declarations can be placed anywhere
    in the source file. Equate names, if given, can only represent one-byte or
    two-byte integer or string values. Text macros (or text equates) cannot be
    declared public.

    Note that although absolute symbols can be declared public, aliases for
    public symbols may cause errors. For example, the following statements are
    illegal:

                PUBLIC  lines      ; Declare absolute symbol public
    lines       EQU     rows       ; Declare alias for lines
    rows        EQU     25         ; Illegal - Assign value to alias

    Example

                .MODEL  small,c
                PUBLIC  true,status,first,clear
    true        EQU     -1        ; Public constant
                .DATA
    status      DB      1         ; Public variable
                .CODE
                .
                .
                .
    first       LABEL   FAR       ; Public label
    clear       PROC              ; Procedure names are automatically public
                .                 ;   with .MODEL model, lang
                .
                .
    clear       ENDP


8.2  Declaring Symbols External

    If a symbol undeclared in a module must be accessed by instructions in
    that module, it must be declared with the EXTRN directive.

    This directive tells the assembler not to generate an error, even though
    the symbol is not in the current module. The assembler assumes that the
    symbol occurs in another module. However, the symbol must actually exist
    and must be declared public in some module. Otherwise, the linker
    generates an error.

    Syntax

    EXTRN declaration [[,declaration]]...

    Each declaration has the following syntax:

    [[lang]]name:type

    The optional lang field contains a language specifier that overrides the
    language specified by the .MODEL directive. With this statement, the
    language specifier determines naming conventions for the variable that it
    precedes. The specifier can be C, FORTRAN, Pascal, or BASIC. The C naming
    convention prefixes each variable with an underscore (_); the other
    conventions do not.

    Note that using the C type specifier does not preserve case. You must
    choose one of the assembler flags or options that preserve case.

    The EXTRN directive defines an external variable, label, or symbol of the
    specified name and type. The type must match the type given to the item in
    its actual definition in some other module. It can be any one of the
    following:

    Description         Types
    ──────────────────────────────────────────────────────────────────────────
    Distance specifier  NEAR, FAR, or PROC

    Size specifier      BYTE, WORD, DWORD, QWORD, or TBYTE

    Absolute            ABS


    The ABS type is for symbols that represent constant numbers, such as
    equates declared with the EQU and = directives (see Section 11.1, "Using
    Equates").

    The PROC type represents the default type for a procedure. For programs
    that use simplified segment directives, the type of an external symbol
    declared with PROC will be NEAR for small or compact model, or FAR for
    medium, large, or huge model. Section 5.1.3, "Defining Basic Attributes
    of the Model," tells you how to declare the memory model using the .MODEL
    directive. If full segment definitions are used, the default type
    represented by PROC is always NEAR.

    Although the actual address of an external symbol is not determined until
    link time, the assembler assumes a default segment for the item, based on
    where the EXTRN directive is placed in the source code. Placement of EXTRN
    directives should follow these rules:

    ■  NEAR code labels (such as procedures) must be declared in the code
        segment from which they are accessed.

    ■  FAR code labels can be declared anywhere in the source code. It may be
        convenient to declare them in the code segment from which they are
        accessed if the label may be FAR in one context or NEAR in another.

    ■  Data must be declared in the segment in which it occurs. This may
        require that you define a dummy data segment for the external
        declaration.

    ■  Absolute symbols can be declared anywhere in the source code.

    Example 1

                EXTRN   max:ABS,act:FAR     ; Constant or FAR label anywhere
                DOSSEG
                .MODEL  small,c
                .STACK  100h
                .DATA
                EXTRN   nvar:BYTE           ; NEAR variable in near data
                .FARDATA
                EXTRN   fvar:WORD           ; FAR variable in far data

                .CODE
                .STARTUP
                EXTRN   task:PROC           ; PROC or NEAR in near code
                ASSUME  es:SEG fvar         ; Tell assembler
                mov     ax,SEG fvar         ; Tell processor that ES
                mov     es,ax               ;   has far data segment

                .
                .
                .
                mov     ah,nvar             ; Load external NEAR variable
                mov     bx,fvar             ; Load external FAR variable
                mov     cx,max              ; Load external constant
                call    task                ; Call procedure (NEAR or FAR)
                jmp     act                 ; Jump to FAR label
                END

    The example above shows how each type of external symbol could be declared
    and used in a small-model program that uses simplified segment directives.
    Notice the use of the PROC type specifier to make the external-procedure
    memory model independent. The jump and its external declaration are
    written so that they will be FAR regardless of the memory model. Using
    these techniques, you can change the memory model without breaking code.

    Example 2

                EXTRN   max:ABS,act:FAR     ; Constant or FAR label anywhere
    STACK       SEGMENT PARA STACK 'STACK'
                DB      100h DUP (?)
    STACK       ENDS
    _DATA       SEGMENT WORD PUBLIC 'DATA'
                EXTRN   nvar:BYTE           ; NEAR variable in near data
    _DATA       ENDS
    FAR_DATA    SEGMENT PARA 'FAR_DATA'
                EXTRN   fvar:WORD           ; FAR variable in far data
    FAR_DATA    ENDS

    DGROUP      GROUP   _DATA,STACK
    _TEXT       SEGMENT BYTE PUBLIC 'CODE'
                EXTRN   task:NEAR           ; NEAR procedure in near code
                ASSUME  cs:_TEXT,ds:DGROUP,ss:STACK
    start:      mov     ax,DGROUP           ; Load segment
                mov     ds,ax               ;   into DS
                ASSUME  es:SEG fvar         ; Tell assembler
                mov     ax,SEG fvar         ; Tell processor that ES
                mov     es,ax               ;   has far data segment
                .
                .
                .
                mov     ah,nvar             ; Load external NEAR variable
                mov     bx,fvar             ; Load external FAR variable
                mov     cx,max              ; Load external constant
                call    task                ; Call NEAR procedure
                jmp     act                 ; Jump to FAR label
    _TEXT       ENDS
                END     start

    Example 2 shows a fragment similar to the one in Example 1, but with full
    segment definitions. Notice that the types of code labels must be declared
    specifically. If you wanted to change the memory model, you would have to
    specifically change each external declaration and each call or jump.


8.3  Using Multiple Modules

    The following source files illustrate a program that uses public and
    external declarations to access instruction labels. The program consists
    of two modules called hello and display.

    The hello module is the program's initializing module. Execution starts at
    the instruction labeled start in the hello module. After initializing the
    data segment, the program calls the procedure display in the display
    module, where a DOS call is used to display a message on the screen.
    Execution then returns to the address after the call in the hello module.

    The hello module is shown below:

                TITLE   hello
                DOSSEG
                .MODEL  small,c
                .STACK  256

                .DATA
                PUBLIC  message, lmessage
    message     DB      "Hello, world.",13,10
    lmessage    EQU     $ - message

                .CODE
                EXTRN   display:PROC       ; Declare in near code segment
                .STARTUP
                call    display            ; Call other module
                mov     ax,04C00h          ; Terminate with exit code 0
                int     21h                ; Call DOS
                END

    The display module is shown below:

                TITLE   display
                EXTRN   lmessage:ABS       ; Declare anywhere
                .MODEL  small
                .DATA
                EXTRN   message:BYTE       ; Declare in near data segment

                .CODE
    display     PROC
                mov     bx,1               ; File handle for standard output
                mov     cx,lmessage        ; Message length
                mov     dx,OFFSET message  ; Message address
                mov     ah,40h             ; Write function
                int     21h                ; Call DOS
                ret

    display     ENDP
                END

    The sample program is a variation of the HELLO.ASM program used in the
    examples in Chapter 4, "Writing Stand-Alone Assembly Programs," except
    that it uses an external procedure to display to the screen. Notice that
    all symbols defined in one module but used in another are declared PUBLIC
    in the defining module and declared EXTRN in the using module.

    For instance, message and lmessage are declared PUBLIC in the program
    HELLO.ASM and declared EXTRN in DISPLAY.ASM. The procedure display is
    declared EXTRN in HELLO.ASM. The symbol display is automatically public in
    the simplified segment version, but you would have to specifically declare
    it PUBLIC if you used full segments.

    To create an executable file for these modules, you can add both files to
    the environment's Program List dialog box. You can also assemble the
    modules with the following command line:

    QCL hello.asm display.asm

    The output is placed in the executable file HELLO.EXE.

    For each source module, QuickAssembler writes a module name to the object
    file. The module name is used by some debuggers and by the linker when it
    displays error messages. With QuickAssembler, the module name is always
    the base name of the source module file.

    For compatibility, QuickAssembler recognizes the NAME directive. However,
    NAME has no effect. Arguments to the directive are ignored.


8.4  Declaring Symbols Communal

    Communal variables are uninitialized variables that are both public and
    external. They are often declared in include files.

    If a variable must be used by several assembly routines, you can declare
    the variable communal in an include file, and then include the file in
    each of the assembly routines. Although the variable is declared in each
    source module, it exists at only one address. Using a communal variable in
    an include file and including it in several source modules is an
    alternative to defining the variable and declaring it public in one source
    module and then declaring it external in other modules.

    If a variable is declared communal in one module and public in another,
    the public declaration takes precedence and the communal declaration has
    the same effect as an external declaration.

    Syntax

    COMM definition[[,definition]]...

    Each definition has the following syntax:

    [[NEAR | FAR]] [[lang]] label:size[[:count]]

    A communal variable can be NEAR or FAR. If neither is specified, the type
    will be that of the default memory model. If you use simplified segment
    directives, the default type is NEAR for small and medium models, or FAR
    for compact, large, and huge models. If you use full segment definitions,
    the default type is NEAR.

    The optional lang field can be C, BASIC, FORTRAN, or Pascal. The use of
    the C keyword turns on the C naming convention──the assembler prefixes the
    name of the variable with an underscore (_). The use of any of the other
    language types turns off the C naming convention, even if you specified C
    with the .MODEL directive. Note that the use of C does not preserve case.
    You must choose one of the assembler flags or options that preserve case.

    The label is the name of the variable. The size can be BYTE, WORD, DWORD,
    QWORD, TBYTE, or the name of a structure. The count is the number of
    elements. If no count is given, one element is assumed. Multiple variables
    can be defined with one COMM statement by separating each definition with
    a comma.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  C variables declared outside functions (except static variables) are
    communal unless explicitly initialized; they are the same as
    assembly-language communal variables. If you are writing assembly-language
    modules for C, you can declare the same communal variables in C include
    files and in QuickAssembler include files.
    ──────────────────────────────────────────────────────────────────────────

    QuickAssembler cannot tell whether a communal variable has been used in
    another module. Allocation of communal variables is handled by LINK. As a
    result, communal variables have the following limitations that other
    variables declared in assembly language do not have:

    ■  Communal variables cannot be initialized. Under DOS, initial values are
        not guaranteed to be 0 or any other value. The variables can be used
        for data, such as file buffers, that is not given a value until run
        time.

    ■  Communal variables are not guaranteed to be allocated in the sequence
        in which they are declared. Assembly-language techniques that depend on
        the sequence and position in which data is defined should not be used
        with communal variables. For example, the following statements do not
        work:


                    COMM    wbuffer:WORD:128
        lbuffer     EQU     $ - buffer        ; "lbuffer" won't have desired val

        bbuffer     LABEL   BYTE              ; "bbuffer" won't have desired add
                    COMM    wbuffer:WORD:40

    ■  If a communal variable references a variable that is allocated and
        declared public inside a module, the variable has the segment of the
        allocated instance. If all references to the variable are communal, the
        variable will be placed in one of the segments described below.

        Near communal variables are placed in a segment called c_common, which
        is part of DGROUP. This group is created and initialized automatically
        if you use simplified segment directives. If you use full segment
        definitions, you must create a group called DGROUP and use the ASSUME
        directive to associate it with the DS register.

        Far communal variables are placed in a segment called FAR_BSS. This
        segment has combine type private and class type 'FAR_BSS'. This means
        that multiple segments with the same name can be created. Such segments
        cannot be accessed by name. They must be initialized indirectly using
        the SEG operator. For example, if a far communal variable (with word
        size) is called comvar, its segment can be initialized with the
        following lines:

                ASSUME  ds:SEG comvar      ; Tell the assembler
                mov     ax,SEG comvar      ; Tell the processor
                mov     ds,ax
                mov     bx,comvar          ; Use the variable

    Example 1

                .DATA
                COMM    temp:BYTE:128

    ASCIIZ      MACRO   address         ;; Name of address for string
                mov     temp,128        ;; Insert maximum length
                mov     dx,OFFSET temp  ;; Address of string buffer
                mov     ah,0Ah          ;; Get string
                int     21h
                mov     dl,temp[1]      ;; Get length of string
                xor     dh,dh
                mov     bx,dx
                mov     temp[bx+2],0    ;; Overwrite CR with null
    address     EQU     OFFSET temp+2
                ENDM

    Example 1 shows an include file that declares a buffer for temporary data.
    The buffer is then used in a macro in the same include file. An example of
    how the macro could be used in a source file is shown below:

                DOSSEG
                .MODEL  small,c
                INCLUDE communal.inc
                .STACK
                .DATA
    message     DB      "Enter file name: $"
                .CODE
                .STARTUP
                .
                .
                .

                mov     dx,OFFSET message      ; Load offset of file prompt
                mov     ah,09h                 ; Display prompt
                int     21h

                ASCIIZ  place                  ; Get file name and
                                                ;   return address as "place"

                mov     al,00000010b           ; Load access code
                mov     dx,place               ; Load address of ASCIIZ string
                mov     ah,3Dh                 ; Open the file
                int     21h
                .
                .
                .

    Note that once the macro is written, the user does not need to know the
    name of the temporary buffer or how it is used in the macro.

    Example 2

    date        STRUC

    month     DB   ?
    day       DB   ?
    year      DB   ?

    date        ENDS

                .DATA
                COMM   today:date
                .
                .
                .

    The example above uses the COMM directive to make the structure variable
    today a communal variable.


8.5  Specifying Library Files

    The INCLUDELIB directive instructs the linker to link with a specified
    library file. If you are writing a program that calls library routines,
    you can use this directive to specify the library file in the assembly
    source file rather than in the LINK command line.

    Syntax

    INCLUDELIB libraryname

    The libraryname is written to the comment record of the object file. The
    Intel title for this record is COMENT. At link time, the linker reads this
    record and links with the specified library file.

    The libraryname must be a file name rather than a complete file
    specification. If you do not specify an extension, the default extension
    .LIB is assumed. LINK searches directories for the library file in the
    following order:

    1. The current directory

    2. Any directories given in the library field of the LINK command line

    3. Any directories listed in the LIB environment variable

    Example

                INCLUDELIB graphics

    This statement passes a message from QuickAssembler telling LINK to use
    library routines from the file GRAPHICS.LIB. If this statement is included
    in a source file called DRAW.ASM, the program might be linked with the
    following command line:

    LINK draw;

    Without the INCLUDELIB directive, the program would have to be linked with
    the following command line:

    LINK draw,,,graphics;



────────────────────────────────────────────────────────────────────────────
Chapter 9:  Using Operands and Expressions


    Operands are the arguments that define values to be acted on by
    instructions or directives. Operands can be constants, variables,
    expressions, or keywords, depending on the instruction or directive and
    the context of the statement.

    A common type of operand is an expression. An expression consists of
    several operands that are combined to describe a value or memory location.
    Operators indicate the operations to be performed when combining the
    operands of an expression.

    Expressions are evaluated at assembly time. By using expressions, you can
    instruct the assembler to calculate values that would be difficult or
    inconvenient to calculate when you are writing source code.

    This chapter discusses operands, expressions, and operators as they are
    evaluated at assembly time. See Section 2.6, "Addressing Modes," for a
    discussion of the addressing modes that can be used to calculate operand
    values at run time. This chapter also discusses the location-counter
    operand, forward references, and strong typing of operands.


9.1  Using Operands with Directives

    Each directive requires a specific type of operand. Most directives take
    string or numeric constants, or symbols or expressions that evaluate to
    such constants.

    The type of operand varies for each directive, but the operand must always
    evaluate to a value that is known at assembly time. This differs from
    instructions, whose operands may not be known at assembly time and may
    vary at run time. Operands used with instructions are discussed in Section
    2.6, "Addressing Modes."

    Some directives, such as those used in data declarations, accept labels or
    variables as operands. When a symbol that refers to a memory location is
    used as an operand to a directive, the symbol represents the address of
    the symbol rather than its contents. This is because the contents may
    change at run time and are therefore not known at assembly time.

    Example 1

                ORG     100h               ; Set address to 100h
    var         DB      10h                ; Address of "var" is 100h
                                            ; Value of "var" is 10h
    pvar        DW      var                ; Address of "pvar" is 101h
                                            ; Value of "pvar" is
                                            ;   address of "var" (100h)

    In Example 1, the operand of the DW directive in the third statement
    represents the address of var (100h) rather than its contents (10h). The
    address is relative to the start of the segment in which var is defined.

    Example 2

                TITLE   doit               ; String
    _TEXT       SEGMENT BYTE PUBLIC 'CODE' ; Key words
                INCLUDE \include\bios.inc  ; Pathname
                .RADIX  16                 ; Numeric constant
    tst         DW      a / b              ; Numeric expression
                PAGE    +                  ; Special character
    sum         EQU     x * y              ; Numeric expression
    here        LABEL   WORD               ; Type specifier

    Example 2 illustrates the different kinds of values that can be used as
    directive operands.


9.2  Using Operators

    The assembler provides a variety of operators for combining, comparing,
    changing, or analyzing operands. Some operators work with integer
    constants, some with memory values, and some with both. Operators cannot
    be used with floating-point constants since QuickAssembler does not
    recognize real numbers in expressions.

    It is important to understand the difference between operators and
    instructions. Operators handle calculations of constant values that are
    known at assembly time. Instructions handle calculations of values that
    may not be known until run time. For example, the addition operator (+)
    handles assembly-time addition, while the ADD and ADC instructions handle
    run-time addition.

    This section describes the different kinds of operators used in
    assembly-language statements and gives examples of expressions formed with
    them. In addition to the operators described in this chapter, you can use
    the DUP operator (Section 6.5.2, "Arrays and Buffers"), the record
    operators (Section 7.2.4, "Record Operators"), and the macro operators
    (Section 11.4, "Using Macro Operators").


9.2.1  Calculation Operators

    QuickAssembler provides the common arithmetic operators as well as several
    other operators for adding, shifting, or doing bit manipulations. The
    sections below describe operators that can be used for doing numeric
    calculations.


9.2.1.1  Arithmetic Operators

    QuickAssembler recognizes a variety of arithmetic operators for common
    mathematical operations. Table 9.1 lists the arithmetic operators.

    Table 9.1 Arithmetic Operators

    Operator      Syntax                        Meaning
    ──────────────────────────────────────────────────────────────────────────
    +             +expression                   Positive (unary)

    -             -expression                   Negative (unary)

    *             expression1 * expression2     Multiplication

    /             expression1 / expression2     Integer division

    MOD           expression1 MOD expression2   Remainder (modulus)

    +             expression1 + expression2     Addition

    -             expression1 - expression2     Subtraction

    ──────────────────────────────────────────────────────────────────────────


    For all arithmetic operators except the addition operator (+) and the
    subtraction operator (-), the expressions operated on must be integer
    constants.

    The addition and subtraction operators can be used to add or subtract an
    integer constant and a memory operand. The result can be used as a memory
    operand.

    The subtraction operator can also be used to subtract one memory operand
    from another, but only if the operands refer to locations within the same
    segment. The result will be a constant, not a memory operand.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  The unary plus and minus operators (used to designate positive or
    negative numbers) are not the same as the binary plus and minus operators
    (used to designate addition or subtraction). The unary plus and minus
    operators have a higher level of precedence, as described in Section
    9.2.5, "Operator Precedence."
    ──────────────────────────────────────────────────────────────────────────

    Example 1

    intgr       =       14  *  3           ; = 42
    intgr       =       intgr /  4         ; 42 / 4 = 10
    intgr       =       intgr  MOD  4      ; 10 mod 4 = 2
    intgr       =       intgr +  4         ; 2 + 4 = 6
    intgr       =       intgr -  3         ; 6 - 3 = 3
    intgr       =       -intgr - 8         ; -3 - 8 = -11
    intgr       =       -intgr - intgr     ; 11 - -11 = 22

    Example 1 illustrates arithmetic operators used in integer expressions.

    Example 2

                ORG     100h
    a           DB      ?                  ; Address is 100h
    b           DB      ?                  ; Address is 101h
    mem1        EQU     a + 5              ; mem1 = 100h + 5 = 105h
    mem2        EQU     a - 5              ; mem2 = 100h - 5 = 0FBh
    const       EQU     b - a              ; const = 101h - 100h = 1

    Example 2 illustrates arithmetic operators used in memory expressions.


9.2.1.2  Structure-Field-Name Operator

    The structure-field-name operator (.) indicates addition. It is used to
    designate a field within a structure.

    Syntax

    variable.field

    The variable is a memory operand (usually a previously declared structure
    variable), and field is the name of a field within the structure. See
    Section 7.1, "Structures," for more information.

    Example

                .DATA
    date        STRUC                      ; Declare structure
    month     DB      ?
    day       DB      ?
    year      DW      ?
    date        ENDS
    yesterday   date    <12,31,1987>       ; Define structure variables
    today       date    <1,1,1988>

                .CODE
                .
                .
                .
                mov     bh,yesterday.day   ; Load structure variable
                mov     bx,OFFSET today    ; Load structure variable address
                inc     [bx].year          ; Use in indirect memory operand


9.2.1.3  Index Operator

    The index operator ([ ]) indicates addition. It is similar to the addition
    (+) operator. When used with a register, the index operator also indicates
    that the operand is an indirect memory operand rather than a
    register-direct operand.

    Syntax

    [[expression1]][expression2]

    In most cases expression1 is simply added to expression2. The limitations
    of the addition operator for adding memory operands also apply to the
    index operator. For example, two direct memory operands cannot be added.
    The expression label1[label2] is illegal if both are memory operands.

    The index operator has an extended function in specifying indirect memory
    operands. Section 2.6.4 explains the use of indirect memory operands. The
    index brackets must be outside the register or registers that specify the
    indirect displacement. However, any of the three operators that indicate
    addition (the addition operator, the index operator, or the
    structure-field-name operator) may be used for multiple additions within
    the expression.

    For example, the following statements are equivalent:

                mov     ax,table[bx][di]
                mov     ax,table[bx+di]
                mov     ax,[table+bx+di]
                mov     ax,[table][bx][di]

    The following statements are illegal because the index operator does not
    enclose the registers that specify indirect displacement:

                mov     ax,table+bx+di     ; Illegal - no index operator
                mov     ax,[table]+bx+di   ; Illegal - registers not
                                            ;   inside index operator

    The index operator is typically used to index elements of a data object,
    such as variables in an array or characters in a string.

    Example 1

                mov     al,string[3]       ; Get 4th element of string
                add     ax,array[4]        ; Add 5th element of array
                mov     string[7],al       ; Load into 8th element of string

    Example 1 illustrates the index operator used with direct memory operands.

    Example 2

                mov     ax,[bx]            ; Get element BX points to
                add     ax,array[si]       ; Add element SI points to
                mov     string[di],al      ; Load element DI points to
                cmp     cx,table[bx][di]   ; Compare to element BX and DI point

    Example 2 illustrates the index operator used with indirect memory
    operands.


9.2.1.4  Shift Operators

    The SHR and SHL operators can be used to shift bits in constant values.
    Both perform logical shifts. Bits on the right for SHL and on the left for
    SHR are zero-filled as their contents are shifted out of position.

    Syntax

    expression SHR count
    expression SHL count

    The expression is shifted right or left by count number of bits. Bits
    shifted off either end of the expression are lost. If count is greater
    than or equal to 16, the result is 0.

    Do not confuse the SHR and SHL operators with the processor instructions
    having the same names. The operators work on integer constants only at
    assembly time. The processor instructions work on register or memory
    values at run time. The assembler can tell the difference between
    instructions and operands from context.

    Examples

    mov     ax,01110111b SHL 3 ; Load 01110111000b
    mov     ah,01110111b SHR 3 ; Load 01110b


9.2.1.5  Bitwise Logical Operators

    The bitwise operators perform logical operations on each bit of an
    expression. The expressions must resolve to constant values. Table 9.2
    lists the logical operators and their meanings.

    Table 9.2 Logical Operators

    Operator      Syntax                        Meaning
    ──────────────────────────────────────────────────────────────────────────
    NOT           NOT expression                Bitwise complement

    AND           expression1 AND expression2   Bitwise AND

    OR            expression1 OR expression2    Bitwise inclusive OR

    XOR           expression1 XOR expression2   Bitwise exclusive XOR

    ──────────────────────────────────────────────────────────────────────────


    Do not confuse the NOT, AND, OR, and XOR operators with the processor
    instructions having the same names. The operators work on integer
    constants only at assembly time. The processor instructions work on
    register or memory values at run time. The assembler can tell the
    difference between instructions and operands from context.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  Although calculations on expressions using the AND, OR, and XOR
    operators are done using 17-bit numbers, the results are truncated to 16
    bits.
    ──────────────────────────────────────────────────────────────────────────

    Examples

        mov     ax,NOT 11110000b            ; Load 1111111100001111b
        mov     ah,NOT 11110000b            ; Load 00001111b
        mov     ah,01010101b AND 11110000b  ; Load 01010000b
        mov     ah,01010101b OR  11110000b  ; Load 11110101b
        mov     ah,01010101b XOR 11110000b  ; Load 10100101b


9.2.2  Relational Operators

    The relational operators compare two expressions and return true (-1) if
    the condition specified by the operator is satisfied, or false (0) if it
    is not. The expressions must resolve to constant values. Relational
    operators are typically used with conditional directives. Table 9.3 lists
    the operators and the values they return if the specified condition is
    satisfied.

    Table 9.3 Relational Operators

    Operator      Syntax                        Returned Value
    ──────────────────────────────────────────────────────────────────────────
    EQ            expression1 EQ expression2    True if expressions are equal

    NE            expression1 NE expression2    True if expressions are not
                                                equal

    LT            expression1 LT expression2    True if left expression is
                                                less than right

    LE            expression1 LE expression2    True if left expression is
                                                less than or equal to right

    GT            expression1 GT expression2    True if left expression is
                                                greater than right

    GE            expression1 GE expression2    True if left expression is
                                                greater than or equal to right

    ──────────────────────────────────────────────────────────────────────────


    Note that the EQ and NE operators treat their arguments as 16-bit numbers.
    Numbers specified with the 16th bit set are considered negative. For
    example, the expression -1 EQ OFFFFh is true, but the expression -1 NE
    OFFFFh is false.

    The LT, LE, GT, and GE operators treat their arguments as 17-bit numbers,
    in which the 17th bit specifies the sign. For example, OFFFFh is 65,535,
    not -1. The expression 1 GT -1 is true, but the expression 1 GT OFFFFh is
    false.

    Examples

            mov     ax,4 EQ 3  ; Load false( 0)
            mov     ax,4 NE 3  ; Load true  (-1)
            mov     ax,4 LT 3  ; Load false( 0)
            mov     ax,4 LE 3  ; Load false( 0)
            mov     ax,4 GT 3  ; Load true (-1)
            mov     ax,4 GE 3  ; Load true(-1)


9.2.3  Segment-Override Operator

    The segment-override operator (:) forces the address of a variable or
    label to be computed relative to a specific segment.

    Syntax

    segment:expression

    The segment can be specified in several ways. It can be one of the segment
    registers: CS, DS, SS, or ES. It can also be a segment or group name. In
    this case, the name must have been previously defined with a SEGMENT or
    GROUP directive and assigned to a segment register with an ASSUME
    directive. The expression can be a constant, expression, or a SEG
    expression. See Section 9.2.4.5 for more information on the SEG operator.

    Note that when a segment override is given with an indexed operand, the
    segment must be specified outside the index operators. For example,
    es:[di] is correct, but [es:di] generates an error.

    Examples

                mov     ax,ss:[bx+4]       ; Override default assume (DS)
                mov     al,es:082h         ; Load from ES

                ASSUME  ds:FAR_DATA        ; Tell the assembler and
                mov     bx,FAR_DATA:count  ;   load from a far segment

    As shown in the last two statements, a segment override with a segment
    name is not enough if no segment register is assumed for the segment name.
    You must use the ASSUME directive to assign a segment register, as
    explained in Section 5.4, "Associating Segments with Registers."


9.2.4  Type Operators

    This section describes the assembler operators that specify or analyze the
    types of memory operands and other expressions.


9.2.4.1  PTR Operator

    The PTR operator specifies the type for a variable or label.

    Syntax

    type PTR expression

    The operator forces expression to be treated as having type. The
    expression can be any operand. The type can be BYTE, WORD, DWORD, QWORD,
    or TBYTE for memory operands. It can be NEAR, FAR, or PROC for labels.

    The PTR operator is typically used with forward references to define
    explicitly what size or distance a reference has. If it is not used, the
    assembler assumes a default size or distance for the reference. See
    Section 9.4 for more information on forward references.

    The PTR operator is also used to enable instructions to access variables
    in ways that would otherwise generate errors. For example, you could use
    the PTR operator to access the high-order byte of a WORD size variable.
    The PTR operator is required for FAR calls and jumps to forward-referenced
    labels.

    Example 1

                .DATA
    stuff       DD      ?
    buffer      DB      20 DUP (?)

                .CODE
                .
                .
                .
                call    FAR PTR task            ; Call a far procedure
                jmp     FAR PTR place           ; Jump far

                mov     bx,WORD PTR stuff[0]    ; Load a word from a
                                                ;   doubleword variable
                add     ax,WORD PTR buffer[bx]  ; Add a word from a byte variab

    The PTR operator can be used to specify the size of an indirect register
    operand for a CALL or JMP instruction. However, the size cannot be
    specified with NEAR or FAR. Use WORD or DWORD instead. Examples are shown
    below:

    Example 2

            jmp     WORD PTR [bx]           ; Legal near jump
            call    NEAR PTR [bx]           ; Illegal near call
            call    DWORD PTR [bx]          ; Legal far call
            jmp     FAR PTR [bx]            ; Illegal far jump

    This limitation only applies to indirect register operands. NEAR or FAR
    can be applied to operands associated with labels, as shown in Example 1.
    Furthermore, use NEAR or FAR with an indirect operand that combines a
    register with a label.


9.2.4.2  SHORT Operator

    The SHORT operator sets the type of a specified label to SHORT. Short
    labels can be used in JMP instructions whenever the distance from the
    label to the instruction is less than 128 bytes.

    Syntax

    SHORT label

    Instructions using short labels are a byte smaller than identical
    instructions using the default near labels. See Section 9.4.1, "Forward
    References to Labels," for information on using the SHORT operator with
    jump instructions.

    Example

                jmp     again              ; Jump 128 bytes or more
                .
                .
                .
                jmp     SHORT again        ; Jump less than 128 bytes
                .
                .
                .
    again:


9.2.4.3  THIS Operator

    The THIS operator creates an operand whose offset and segment values are
    equal to the current location-counter value and whose type is specified by
    the operator.

    Syntax

    THIS type

    The type can be BYTE, WORD, DWORD, QWORD, or TBYTE for memory operands. It
    can be NEAR, FAR, or PROC for labels.

    The THIS operator is typically used with the EQU or equal-sign (=)
    directive to create labels and variables. The result is similar to using
    the LABEL directive.

    Example

    tag1        EQU     THIS BYTE  ; Both represent the same variable
    tag2        LABEL   BYTE

    check1      EQU     THIS NEAR  ; All represent the same address
    check2      LABEL   NEAR
    check3:
    check4      PROC    NEAR
    check4      ENDP


9.2.4.4  HIGH and LOW Operators

    The HIGH and LOW operators return the high and low bytes, respectively, of
    an expression.

    Syntax

    HIGH expression
    LOW expression

    The HIGH operator returns the high-order eight bits of expression; the LOW
    operator returns the low-order eight bits. The expression must evaluate to
    a constant. You cannot use the HIGH and LOW operators on the contents of a
    memory operand since the contents may change at run time.

    Examples

    stuff       EQU     0ABCDh
                mov     ah,HIGH stuff      ; Load 0ABh
                mov     al,LOW stuff       ; Load 0CDh

    The HIGH and LOW operators work reliably only with constants and with
    offsets to external symbols. HIGH and LOW operations are not supported for
    offsets to local symbols.


9.2.4.5  SEG Operator

    The SEG operator returns the segment address of an expression.

    Syntax

    SEG expression

    The expression can be any label, variable, segment name, group name, or
    other memory operand. The SEG operator cannot be used with constant
    expressions. The returned value can be used as a memory operand.

    Example

                .DATA
    var         DB      ?
                .CODE
                .
                .
                .
                ASSUME  ds:SEG var         ; Assume segment of variable
                mov     ax,SEG var         ; Get address of segment
                mov     ds,ax              ;   where variable is declared


9.2.4.6  OFFSET Operator

    The OFFSET operator returns the offset address of an expression.

    Syntax

    OFFSET expression

    The expression can be any label, variable, or other direct memory operand.
    Constant expressions return meaningless values. The value returned by the
    OFFSET operand is an immediate (constant) operand.

    If the MODEL directive is used, the value returned by the OFFSET operator
    is relative to a group, whenever the data item is declared in a segment
    that is part of a group. The OFFSET operator returns the number of bytes
    between the beginning of the group and the data object. If the object is
    declared in a segment not part of a group, OFFSET returns the number of
    bytes between the beginning of the segment and the data object.

    If the MODEL directive is not used, OFFSET returns a value relative to the
    beginning of the segment, regardless of whether the segment is part of a
    group.

    If full segment definitions are given, the returned value is a memory
    operand equal to the number of bytes between the item and the beginning of
    the segment in which it is defined.

    The segment-override operator (:) can be used to force OFFSET to return
    the number of bytes between the item in expression and the beginning of a
    named segment or group. This is the method used to generate valid offsets
    for items in a group when full segment definitions are used. For example,
    the statement

                mov     bx,OFFSET DGROUP:array

    is not the same as

                mov     bx,OFFSET array

    if array is not in the first segment in DGROUP.

    Example

                .DATA
    string      DB      "This is it."
                .CODE
                .
                .
                .
                mov     dx,OFFSET string   ; Load offset of variable


9.2.4.7  .TYPE Operator

    The .TYPE operator returns a byte that defines the mode and scope of an
    expression.

    Syntax

    .TYPE expression

    If expression is not valid, .TYPE returns 0. Otherwise, .TYPE returns a
    byte having the bit setting shown in Table 9.4. The .TYPE operator sets
    all bits except bit 6. Future versions of the assembler may reserve a use
    for this bit.

    Table 9.4 .TYPE Operator and Variable Attributes

    Bit Position  If Bit = 0                    If Bit = 1
    ──────────────────────────────────────────────────────────────────────────
    0             Not program related           Program related

    1             Not data related              Data related

    2             Not a constant value          Constant value

    3             Addressing mode is not direct Addressing mode is direct

    4             Not a register                Expression is a register

    5             Not defined                   Defined

    7             Local or public scope         External scope

    ──────────────────────────────────────────────────────────────────────────


    The .TYPE operator is typically used in macros in which different kinds of
    arguments may need to be handled differently.

    Example

    display     MACRO   string
                IF      ((.TYPE string) SHL 14) NE 8000h
                IF2
                %OUT    Argument must be a variable
                ENDIF
                ENDIF
                mov     dx,OFFSET string
                mov     ah,09h
                int     21h
                ENDM

    This macro checks to see if the argument passed to it is data related (a
    variable). It does this by shifting all bits except the relevant bits (1
    and 0) to the left so that they can be checked. If the data bit is not
    set, an error message is generated.


9.2.4.8  TYPE Operator

    The TYPE operator returns a number that represents the type of an
    expression.

    Syntax

    TYPE expression

    If expression evaluates to a variable, the operator returns the number of
    bytes in each data object in the variable. Each byte in a string is
    considered a separate data object, so the TYPE operator returns 1 for
    strings.

    If expression evaluates to a structure or structure variable, the operator
    returns the number of bytes in the structure. If the expression is a
    label, the operator returns 0FFFFH for NEAR labels and 0FFFEH for FAR
    labels. If the expression is a constant, the operator returns 0.


9.2.4.9  LENGTH Operator

    The LENGTH operator returns the number of data elements in an array or
    other variable defined with the DUP operator.

    Syntax

    LENGTH variable

    The returned value is the number of elements of the declared size in
    variable. If the variable was declared with nested DUP operators, only the
    value given for the outer DUP operator is returned. If the variable was
    not declared with the DUP operator, the value returned is always 1.

    Example

    array       DD      100 DUP(0FFFFFFh)
    table       DW      100 DUP(1,10 DUP(?))
    string      DB      'This is a string'
    var         DT      ?
    larray      EQU     LENGTH array       ; 100 - number of elements
    ltable      EQU     LENGTH table       ; 100 - inner DUP not counted
    lstring     EQU     LENGTH string      ; 1 - string is one element
    lvar        EQU     LENGTH var         ; 1
                .
                .
                .
                mov     cx,LENGTH array    ; Load number of elements
    again:      .                          ; Perform some operation on
                .                          ;   each element
                .
                loop    again


9.2.4.10  SIZE Operator

    The SIZE operator returns the total number of bytes allocated for an array
    or other variable defined with the DUP operator.

    Syntax

    SIZE variable

    The returned value is equal to the value of LENGTH variable times the
    value of TYPE variable. If the variable was declared with nested DUP
    operators, only the value given for the outside DUP operator is
    considered. If the variable was not declared with the DUP operator, the
    value returned is always TYPE variable.

    Example

    array       DD      100 DUP(1)
    table       DW      100 DUP(1,10 DUP(?))
    string      DB      'This is a string'
    var         DT      ?
    sarray      EQU     SIZE array         ; 400 - elements times size
    stable      EQU     SIZE table         ; 200 - inner DUP ignored
    sstring     EQU     SIZE string        ; 1 - string is one element
    svar        EQU     SIZE var           ; 10 - bytes in variable
                .
                .
                .
                mov     cx,SIZE array      ; Load number of bytes
    again:      .                          ; Perform some operation on
                .                          ;   each byte
                .
                loop    again


9.2.5  Operator Precedence

    Expressions are evaluated according to the following rules:

    ■  Operations of highest precedence are performed first.

    ■  Operations of equal precedence are performed from left to right.

    ■  The order of evaluation can be overridden by using parentheses.
        Operations in parentheses are always performed before any adjacent
        operations.

    The order of precedence for all operators is listed in Table 9.5.
    Operators on the same line have equal precedence.

    Table 9.5 Operator Precedence

    Precedence         Operators
    ──────────────────────────────────────────────────────────────────────────
    (Highest)

    1                  LENGTH, SIZE, WIDTH, MASK, (), [],<>

    2                  . (structure-field-name operator)

    3                  :

    4                  PTR, OFFSET, SEG, TYPE, THIS

    5                  HIGH, LOW

    6                  +,- (unary)

    7                  *,/, MOD, SHL, SHR

    8                  +, - (binary)

    9                  EQ, NE, LT, LE, GT, GE

    10                 NOT

    11                 AND

    12                 OR, XOR

    13                 SHORT, .TYPE

    (Lowest)

    ──────────────────────────────────────────────────────────────────────────


    Examples

    a           EQU     8 / 4 * 2          ; Equals 4
    b           EQU     8 / (4 * 2)        ; Equals 1
    c           EQU     8 + 4 * 2          ; Equals 16
    d           EQU     (8 + 4) * 2        ; Equals 24
    e           EQU     8 OR 4 AND 2       ; Equals 8
    f           EQU     (8 OR 4) AND 3     ; Equals 0


9.3  Using the Location Counter

    The location counter is a special operand that, during assembly,
    represents the address of the statement currently being assembled. At
    assembly time, the location counter keeps changing, but when used in
    source code, it resolves to a constant representing an address.

    The location counter has the same attributes as a near label. It
    represents an offset that is relative to the current segment and is equal
    to the number of bytes generated for the segment to that point.

    Example 1

    string      DB      "Who wants to count every byte in a string, "
                DB      "especially if you might change it later."
    lstring     EQU     $-string   ; Let the assembler do it

    Example 1 shows one way of using the location-counter operand in
    expressions relating to data.

    Example 2

                cmp     ax,bx
                jl      shortjump  ; If ax < bx, go to "shortjump"
                .                  ;   else if ax >= bx, continue
                .
    shortjump:  .

                cmp     ax,bx
                jge     $+5        ; If ax >= bx, continue
                jmp     longjump   ;   else if ax < bx, go to "longjump"
                .                  ; This is "$+5"
                .
    longjump:   .

    Example 2 illustrates how you can use the location counter to do
    conditional jumps of more than 128 bytes. The first part shows the normal
    way of coding jumps of less than 128 bytes, and the second part shows how
    to code the same jump when the label is more than 128 bytes away.


9.4  Using Forward References

    The assembler permits you to refer to labels, variable names, segment
    names, and other symbols before they are declared in the source code. Such
    references are called forward references.

    The assembler handles forward references by making assumptions about them
    on the first pass and then attempting to correct the assumptions, if
    necessary, on the second pass. Checking and correcting assumptions on the
    second pass takes processing time, so source code with forward references
    assembles more slowly than source code with no forward references.

    In addition, the assembler may make incorrect assumptions that it cannot
    correct, or corrects at a cost in program efficiency.


9.4.1  Forward References to Labels

    Forward references to labels may result in incorrect or inefficient code.

    In the statement below, the label target is a forward reference:

                jmp     target             ; Generates 3 bytes in 16-bit segmen
                .
                .
                .
    target:

    Since the assembler processes source files sequentially, target is unknown
    when it is first encountered. It could be one of three types: short (-128
    to 127 bytes from the jump), near (-32,768 to 32,767 bytes from the jump),
    or far (in a different segment than the jump). QuickAssembler assumes that
    target is a near label, and assembles the number of bytes necessary to
    specify a near label: one byte for the instruction and two bytes for the
    operand.

    If, on the second pass, the assembler learns that target is a short label,
    it will need only two bytes: one for the instruction and one for the
    operand. However, it will not be able to change its previous assembly and
    the three-byte version of the assembly will stand. If the assembler learns
    that target is a far label, it will need five bytes. Since it can't make
    this adjustment, it will generate a phase error.

    You can override the assembler's assumptions by specifying the exact size
    of the jump. For example, if you know that a JMP instruction refers to a
    label less than 128 bytes from the jump, you can use the SHORT operator,
    as shown below:

                jmp     SHORT target       ; Generates 2 bytes
                .
                .
                .
    target:

    Using the SHORT operator makes the code smaller and slightly faster. If
    the assembler has to use the three-byte form when the two-byte form would
    be acceptable, it will generate a warning message if the warning level is
    2. (The warning level can be set with the /W option, as described in
    Appendix B, Section B.16.) You can ignore the warning, or you can go
    back to the source code and change the code to eliminate the forward
    references.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  The SHORT operator in the example above would not be needed if
    target were located before the jump. The assembler would have already
    processed target and would be able to make adjustments based on its
    distance.
    ──────────────────────────────────────────────────────────────────────────

    If you use the SHORT operator when the label being jumped to is more than
    128 bytes away, QuickAssembler generates an error message. You can either
    remove the SHORT operator, or try to reorganize your program to reduce the
    distance.

    If a far jump to a forward-referenced label is required, you must override
    the assembler's assumptions with the FAR and PTR operators, as shown
    below:

                jmp     FAR PTR target     ; Generates 5 bytes
                .
                .
                .
    target:                                ; In different segment

    If the type of a label has been established earlier in the source code
    with an EXTRN directive, the type does not need to be specified in the
    jump statement.


9.4.2  Forward References to Variables

    When QuickAssembler encounters code referencing variables that have not
    yet been defined in pass 1, it makes assumptions about the segment where
    the variable will be defined. If on pass 2 the assumptions turn out to be
    wrong, an error will occur.

    These problems usually occur with complex segment structures that do not
    follow the Microsoft segment conventions. The problems never appear if
    simplified segment directives are used.

    By default, QuickAssembler assumes that variables are referenced to the DS
    register. If a statement must access a variable in a segment not
    associated with the DS register, and if the variable has not been defined
    earlier in the source code, you must use the segment-override operator to
    specify the segment.

    The situation is different if neither the variable nor the segment in
    which it is defined has been defined earlier in the source code. In this
    case, you must assign the segment to a group earlier in the source code.
    QuickAssembler will then know about the existence of the segment even
    though it has not yet been defined.


9.5  Strong Typing for Memory Operands

    The assembler carries out strict syntax checks for all instruction
    statements, including strong typing for operands that refer to memory
    locations. This means that when an instruction uses two operands with
    implied data types, the operand types must match. Warning messages are
    generated for nonmatching types.

    For example, in the following fragment, the variable string is incorrectly
    used in a move instruction:

                .DATA
    string      DB      "A message."
                .CODE
                .
                .
                .
                mov     ax,string[1]

    The ax register has WORD type, but string has BYTE type. Therefore, the
    statement generates the following warning message:

    Operand types must match

    To avoid all ambiguity and prevent the warning error, use the PTR operator
    to override the variable's type, as shown below:

                mov     ax,WORD PTR string[1]

    You can ignore the warnings if you are willing to trust the assembler's
    assumptions. When a register and memory operand are mixed, the assembler
    assumes that the register operand is always the correct size. For example,
    in the statement

                mov     ax,string[1]

    the assembler assumes that the programmer wishes the word size of the
    register to override the byte size of the variable. A word starting at
    string[1] will be moved into AX. In the statement

                mov     string[1],ax

    the assembler assumes that the programmer wishes to move the word value in
    AX into the word starting at string[1]. However, the assembler's
    assumptions are not always as clear as in these examples. You should not
    ignore warnings about type mismatches unless you are sure you understand
    how your code will be assembled.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  Some assemblers (including early versions of the IBM Macro
    Assembler) do not do strict type checking. For compatibility with these
    assemblers, type errors are warnings rather than severe errors. Many
    assembly-language program listings in books and magazines are written for
    assemblers with weak type checking. Such programs may produce warning
    messages, but assemble correctly. You can use the /W option to turn off
    type warnings if you are sure the code is correct.
    ──────────────────────────────────────────────────────────────────────────



────────────────────────────────────────────────────────────────────────────
Chapter 10:  Assembling Conditionally


    QuickAssembler provides two types of conditional directives,
    conditional-assembly and conditional-error directives.
    Conditional-assembly directives test for a specified condition and
    assemble a block of statements if the condition is true. Conditional-error
    directives test for a specified condition and generate an assembly error
    if the condition is true.

    Both kinds of conditional directives test assembly-time conditions. They
    cannot test run-time conditions. Only expressions that evaluate to
    constants during assembly can be compared or tested.

    Since macros and conditional-assembly directives are often used together,
    you may need to refer to Chapter 11, "Using Equates, Macros, and Repeat
    Blocks," to understand some of the examples in this chapter. In
    particular, conditional directives are frequently used with the operators
    described in Section 11.5, "Using Macro Operators."


10.1  Using Conditional-Assembly Directives

    The conditional-assembly directives include the following:

    ELSE          IFB          IFIDN
    ENDIF         IFDEF        IFIDNI
    IF            IFDIF        IFNB
    IF1           IFDIFI       IFNDEF
    IF2           IFE

    The IF directives and the ENDIF and ELSE directives can be used to enclose
    the statements to be considered for conditional assembly.

    Syntax

    IFcondition
    statements
    [[ELSEIFcondition
    statements]]
    .
    .
    .
    [[ELSE
    statements]]
    ENDIF

    The statements following the IF directive can be any valid statements,
    including other conditional blocks. The ELSEIF and ELSE blocks are
    optional. The conditional block can contain any number of ELSEIF blocks.
    (The ELSEIF directives are listed in Section 10.1.6.) ENDIF ends the
    block.

    The statements following the IF directive are assembled only if the
    corresponding condition is true. If the condition is not true and an
    ELSEIF directive is used, the assembler checks to see if the corresponding
    condition is true. If so, it assembles the statements following the ELSEIF
    directive. If no IF or ELSEIF conditions are satisifed, the statements
    following the ELSE directive are assembled.

    IF statements can be nested up to 20 levels. A nested ELSE or ELSEIF
    directive always belongs to the nearest preceding IF statement that does
    not have its own ELSE directive.


10.1.1  Testing Expressions with IF and IFE Directives

    The IF and IFE directives test the value of an expression and grant
    assembly based on the result.

    Syntax

    IF expression
    IFE expression

    The IF directive grants assembly if the value of expression is true
    (nonzero). The IFE directive grants assembly if the value of expression is
    false (0). The expression must evaluate to a constant value and must not
    contain forward references.

    Example

                IF      debug GT 20
                push    debug
                call    adebug
                ELSEIF  debug GT 10
                call    bdebug
                ELSE
                call    cdebug
                ENDIF

    In this example, a different debug routine will be called, depending on
    the value of debug.


10.1.2  Testing the Pass with IF1 and IF2 Directives

    The IF1 and IF2 directives test the current assembly pass and grant
    assembly only on the pass specified by the directive. Multiple passes of
    the assembler are discussed in Appendix C, Section C.7, "Reading a Pass
    1 Listing."

    Syntax

    IF1
    IF2

    The IF1 directive grants assembly only on pass 1. The IF2 directive grants
    assembly only on pass 2. The directives take no arguments. If you turn on
    the One-Pass Assembly option, the IF2 directive produces an error.

    Macros usually only need to be processed once. You can enclose blocks of
    macros in IF1 blocks to prevent them from being reprocessed on the second
    pass.

    Example

                IF1                ; Define on first pass only
    dostuff     MACRO   argument
                .
                .
                .
                ENDM
                ENDIF


10.1.3  Testing Symbol Definition with IFDEF and IFNDEF Directives

    The IFDEF and IFNDEF directives test whether a symbol has been defined and
    grant assembly based on the result.

    Syntax

    IFDEF name
    IFNDEF name

    The IFDEF directive grants assembly only if name is a defined label,
    variable, or symbol. The IFNDEF directive grants assembly if name has not
    yet been defined.

    The name can be any valid name. Note that if name is a forward reference,
    it is considered undefined on pass 1, but defined on pass 2.

    Example

                IFDEF   buffer
    buff        DB      buffer DUP(?)
                ENDIF

    In this example, buff is allocated only if buffer has been previously
    defined.

    One way to use this conditional block is to leave buffer undefined in the
    source file and define it if needed by using the /Dsymbol option (see
    Appendix B, Section B.4, "Defining Assembler Symbols") when you start
    QuickAssembler. For example, if the conditional block is in TEST.ASM, you
    could start the assembler with the following command line:

    QCL /Dbuffer=1024 test.asm

    You could also define the symbol buffer by entering buffer=1024 in the
    Defines field of the Assembler Flags dialog box.

    The command line would define the symbol buffer. As a result, the
    conditional-assembly block would allocate buff. However, if you didn't
    need buff, you could use the following command line:

    QCL test.asm


10.1.4  Verifying Macro Parameters with IFB and IFNB Directives

    The IFB and IFNB directives test to see if a specified argument was passed
    to a macro and grant assembly based on the result.

    Syntax

    IFB <argument >
    IFNB <argument>

    These directives are always used inside macros, and they always test
    whether a real argument was passed for a specified dummy argument. The IFB
    directive grants assembly if argument is blank. The IFNB directive grants
    assembly if argument is not blank. The arguments can be any name, number,
    or expression. Angle brackets (< >) are required.

    Example

    Write       MACRO   buffer,bytes,handle
                IFNB    <handle>
                mov     bx,handle        ; (1=stdout,2=stderr,3=aux,4=printer)
                ELSE
                mov     bx,1             ; Default standard out
                ENDIF
                mov     dx,OFFSET buffer ; Address of buffer to write to
                mov     cx,bytes         ; Number of bytes to write
                mov     ah,40h
                int     21h
                ENDM

    In this example, a default value is used if no value is specified for the
    third macro argument.


10.1.5  Comparing Macro Arguments with IFIDN and IFDIF Directives

    The IFIDN and IFDIF directives compare two macro arguments and grant
    assembly based on the result.

    Syntax

    IFIDN[[I]] <argument1>,<argument2>
    IFDIF[[I]] <argument1>,<argument2>

    These directives are always used inside macros, and they always test
    whether real arguments passed for two specified arguments are the same.
    The IFIDN directive grants assembly if argument1 and argument2 are
    identical. The IFDIF directive grants assembly if argument1 and argument2
    are different. The arguments can be names, numbers, or expressions. They
    must be enclosed in angle brackets and separated by a comma.

    The optional I at the end of the directive name specifies that the
    directive is case insensitive. Arguments that are spelled the same will be
    evaluated the same, regardless of case. If the I is not given, the
    directive is case sensitive.

    Example

    divide8     MACRO   numerator,denominator
                IFDIFI  <numerator>,<al>        ;; If numerator isn't AL
                mov     al,numerator            ;;   make it AL
                ENDIF
                xor     ah,ah
                div     denominator
                ENDM

    In this example, a macro uses the IFDIFI directive to check one of the
    arguments and take a different action, depending on the text of the
    string. The sample macro could be enhanced further by checking for other
    values that would require adjustment (such as a denominator passed in AL
    or passed in AH).


10.1.6  ELSEIF Directives

    The assembler includes an ELSEIF conditional-assembly directive
    corresponding to each of the IF directives. The ELSEIF directives provide
    a more compact and better structured way of writing some sequences of ELSE
    and IF directives. QuickAssembler supports the following directives:

    ELSEIF           ELSEIFDEF           ELSEIFIDN
    ELSEIF1          ELSEIFDIF           ELSEIFIDNI
    ELSEIF2          ELSEIFDIFI          ELSEIFNB
    ELSEIFB          ELSEIFE             ELSEIFNDEF

    The following macro contains nested IF and ELSE blocks:

    ; Macro to load register for high-level-language return
    FuncRet MACRO arg,length
            LOCAL tmploc
            IF length EQ 1
                mov al,arg
            ELSE
                IF length EQ 2
                mov ax,arg
                ELSE
                IF length EQ 4
                    .DATA
            tmploc   DW     ?
                    DW     ?
                    .CODE
                    mov ax,WORD PTR arg
                    mov tmploc,ax
                    mov ax,WORD PTR arg+2
                    mov tmploc+2,ax
                    mov dx,SEG tmploc
                    mov ax,OFFSET tmploc
                ELSE
                    %OUT Error in FuncRet expansion
                    .ERR
                ENDIF
                ENDIF
            ENDIF
            ENDM

    The macro can be rewritten as follows, using the ELSEIF directives:

    FuncRet MACRO arg,length
            LOCAL tmploc
            IF length EQ 1
                    mov al,arg
            ELSEIF length EQ 2
                    mov ax,arg
            ELSEIF length EQ 4
                    .DATA

            tmploc   DW     ?
                    DW     ?
                    .CODE
                    mov ax,WORD PTR arg
                    mov tmploc,ax
                    mov ax,WORD PTR arg+2
                    mov tmploc+2,ax
                    mov dx,SEG tmploc
                    mov ax,OFFSET tmploc
            ELSE
                    %OUT Error in FuncRet expansion
                    .ERR
            ENDIF
            ENDM


10.2  Using Conditional-Error Directives

    Conditional-error directives can be used to debug programs and check for
    assembly-time errors. By inserting a conditional-error directive at a key
    point in your code, you can test assembly-time conditions at that point.
    You can also use conditional-error directives to test for boundary
    conditions in macros.

    The conditional-error directives and the error messages they produce are
    listed in Table 10.1.

    Table 10.1 Conditional-Error Directives

    Directive       Number          Message
    ──────────────────────────────────────────────────────────────────────────
    .ERR1           2087            Forced error - pass1

    .ERR2           2088            Forced error - pass2

    .ERR            2089            Forced error

    .ERRE           2090            Forced error - expression equals 0

    .ERRNZ          2091            Forced error - expression not equal 0

    .ERRNDEF        2092            Forced error - symbol not defined

    .ERRDEF         2093            Forced error - symbol defined

    .ERRB           2094            Forced error - string blank

    .ERRNB          2095            Forced error - string not blank

    .ERRIDN [[I]]   2096            Forced error - strings identical

    .ERRDIF [[I]]   2097            Forced error - strings different

    ──────────────────────────────────────────────────────────────────────────


    Like other severe errors, those generated by conditional-error directives
    cause the assembler to return exit code 7. If a severe error is
    encountered during assembly, QuickAssembler will delete the object module.
    All conditional-error directives except ERR1 generate severe errors.


10.2.1  Generating Unconditional Errors
        with .ERR, .ERR1, and .ERR2 Directives

    The .ERR, .ERR1, and .ERR2 directives force an error where the directives
    occur in the source file. The error is generated unconditionally when the
    directive is encountered, but the directives can be placed within
    conditional-assembly blocks to limit the errors to certain situations.

    Syntax

    .ERR
    .ERR1
    .ERR2

    The .ERR directive forces an error regardless of the pass. The .ERR1 and
    .ERR2 directives force the error only on their respective passes. The
    .ERR1 directive appears only on the screen or in the listing file if you
    use the /D option to request a pass 1 listing.

    You can place these directives within conditional-assembly blocks or
    macros to see which blocks are being expanded.

    Example

    IFDEF       dos
                .
                .
                .
    ELSEIFDEF   xenix
                .
                .
                .
                ELSE
                .ERR
                %OUT dos or xenix must be defined
                ENDIF
                ENDIF

    This example makes sure that either the symbol dos or the symbol xenix is
    defined. If neither is defined, the nested ELSE condition is assembled and
    an error message is generated. Since the .ERR directive is used, an error
    would be generated on each pass. You could use .ERR1 or .ERR2 to check if
    you want the error to be generated only on the corresponding pass.


10.2.2  Testing Expressions with .ERRE or .ERRNZ Directives

    The .ERRE and .ERRNZ directives test the value of an expression and
    conditionally generate an error based on the result.

    Syntax

    .ERRE expression
    .ERRNZ expression

    The .ERRE directive generates an error if expression is false (0). The
    .ERRNZ directive generates an error if expression is true (nonzero). The
    expression must evaluate to a constant value and must not contain forward
    references.

    Example

    buffer      MACRO   count,bname
                .ERRE   count LE 128       ;; Allocate memory, but
    bname       DB      count DUP(0)       ;;   no more than 128 bytes
                ENDM
                .
                .
                .
                buffer  128,buf1           ; Data allocated - no error
                buffer  129,buf2           ; Error generated

    In this example, the .ERRE directive is used to check the boundaries of a
    parameter passed to the macro buffer. If count is less than or equal to
    128, the expression being tested by the error directive will be true
    (nonzero) and no error will be generated. If count is greater than 128,
    the expression will be false (0) and the error will be generated.


10.2.3  Verifying Symbol Definition with .ERRDEF and .ERRNDEF Directives

    The .ERRDEF and .ERRNDEF directives test whether a symbol is defined and
    conditionally generate an error based on the result.

    Syntax

    .ERRDEF name
    .ERRNDEF name

    The .ERRDEF directive produces an error if name is defined as a label,
    variable, or symbol. The .ERRNDEF directive produces an error if name has
    not yet been defined. If name is a forward reference, it is considered
    undefined on pass 1, but defined on pass 2.

    Example

                .ERRNDEF publevel
                IF       publevel LE 2
                PUBLIC   var1, var2
                ELSE
                PUBLIC   var1, var2, var3
                ENDIF

    In this example, the .ERRNDEF directive at the beginning of the
    conditional block makes sure that a symbol being tested in the block
    actually exists.


10.2.4  Testing for Macro Parameters with .ERRB and .ERRNB Directives

    The .ERRB and .ERRNB directives test whether a specified argument was
    passed to a macro and conditionally generate an error based on the result.

    Syntax

    .ERRB <argument>
    .ERRNB <argument>

    These directives are always used inside macros, and they always test
    whether a real argument was passed for a specified dummy argument. The
    .ERRB directive generates an error if argument is blank. The .ERRNB
    directive generates an error if argument is not blank. The argument can be
    any name, number, or expression. Angle brackets (<>) are required.

    Example

    work        MACRO   realarg,testarg
                .ERRB   <realarg>       ;; Error if no parameters
                .ERRNB  <testarg>       ;; Error if more than one parameter
                .
                .
                .
                ENDM

    In this example, error directives are used to make sure that one, and only
    one, argument is passed to the macro. The .ERRB directive generates an
    error if no argument is passed to the macro. The .ERRNB directive
    generates an error if more than one argument is passed to the macro.


10.2.5  Comparing Macro Arguments with .ERRIDN and .ERRDIF Directives

    The .ERRIDN and .ERRDIF directives compare two macro arguments and
    conditionally generate an error based on the result.

    Syntax

    .ERRIDN[[I]] <argument1>,<argument2>
    .ERRDIF[[I]] <argument1>,<argument2>

    These directives are always used inside macros, and they always compare
    the real arguments specified for two parameters. The .ERRIDN directive
    generates an error if the arguments are identical. The .ERRDIF directive
    generates an error if the arguments are different. The arguments can be
    names, numbers, or expressions. They must be enclosed in angle brackets
    and separated by a comma.

    The optional I at the end of the directive name specifies that the
    directive is case insensitive. Arguments that are spelled the same will be
    evaluated the same regardless of case. If the I is not given, the
    directive is case sensitive.

    Example

    addem       MACRO    ad1,ad2,sum
                .ERRIDNI <ax>,<ad2>    ;; Error if ad2 is "ax"
                mov      ax,ad1        ;; Would overwrite if ad2 were AX
                add      ax,ad2
                mov      sum,ax        ;; Sum must be register or memory
                ENDM

    In this example, the .ERRIDNI directive is used to protect against passing
    the AX register as the second parameter, since this would cause the macro
    to fail.



────────────────────────────────────────────────────────────────────────────
Chapter 11:  Using Equates, Macros, and Repeat Blocks


    This chapter explains how to use equates, macros, and repeat blocks.
    "Equates" are constant values assigned to symbols so that the symbol can
    be used in place of the value. "Macros" are a series of statements that
    are assigned a symbolic name (and, optionally, parameters) so that the
    symbol can be used in place of the statements. "Repeat blocks" are a
    special form of macro used to do repeated statements.

    Both equates and macros are processed at assembly time. They can simplify
    writing source code by allowing the user to substitute mnemonic names for
    constants and repetitive code. By changing a macro or equate, a programmer
    can change the effect of statements throughout the source code.

    In exchange for these conveniences, the programmer loses some
    assembly-time efficiency. Assembly may be slightly slower for a program
    that uses macros and equates extensively than for the same program written
    without them. However, the program without macros and equates usually
    takes longer to write and is more difficult to maintain.


11.1  Using Equates

    The equate directives enable you to use symbols that represent numeric or
    string constants. QuickAssembler recognizes three kinds of equates:

    1. Redefinable numeric equates

    2. Nonredefinable numeric equates

    3. String equates (also called text macros)


11.1.1  Redefinable Numeric Equates

    Redefinable numeric equates are used to assign a numeric constant to a
    symbol. The value of the symbol can be redefined at any point during
    assembly time. Although the value of a redefinable equate may be different
    at different points in the source code, a constant value will be assigned
    for each use, and that value will not change at run time.

    Redefinable equates are often used for assembly-time calculations in
    macros and repeat blocks.

    Syntax

    name=expression

    The equal-sign (=) directive creates or redefines a constant symbol by
    assigning the numeric value of expression to name. No storage is allocated
    for the symbol. The symbol can be used in subsequent statements as an
    immediate operand having the assigned value. It can be redefined at any
    time.

    The expression can be an integer, a constant expression, a one- or
    two-character string constant, or an expression that evaluates to an
    address. The name must be either a unique name or a name previously
    defined by using the equal-sign (=) directive.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  Redefinable equates must be assigned numeric values. String
    constants longer than two characters cannot be used.
    ──────────────────────────────────────────────────────────────────────────

    Example

    counter     =       0                  ; Initialize counter
    array       LABEL   BYTE               ; Label array of increasing numbers
                REPT    100                ; Repeat 100 times
                DB      counter            ; Initialize number
    counter     =       counter + 1        ; Increment counter
                ENDM

    This example redefines equates inside a repeat block to declare an array
    initialized to increasing values from 0 to 100. The equal-sign directive
    is used to increment the counter symbol for each loop. See Section 11.4
    for more information on repeat blocks.


11.1.2  Nonredefinable Numeric Equates

    Nonredefinable numeric equates are used to assign a numeric constant to a
    symbol. The value of the symbol cannot be redefined.

    Nonredefinable numeric equates are often used for assigning mnemonic names
    to constant values. This can make the code more readable and easier to
    maintain. If a constant value used in numerous places in the source code
    needs to be changed, the equate can be changed in one place rather than
    throughout the source code.

    Syntax

    name EQU expression

    The EQU directive creates constant symbols by assigning expression to
    name. The assembler replaces each subsequent occurrence of name with the
    value of expression. Once a numeric equate has been defined with the EQU
    directive, it cannot be redefined. Attempting to do so generates an error.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  String constants can also be defined with the EQU directive, but the
    syntax is different, as described in Section 11.1.3, "String Equates."
    ──────────────────────────────────────────────────────────────────────────

    No storage is allocated for the symbol. Symbols defined with numeric
    values can be used in subsequent statements as immediate operands having
    the assigned value.

    Examples

    column      EQU     80                 ; Numeric constant 80
    row         EQU     25                 ; Numeric constant 25
    screenful   EQU     column * row       ; Numeric constant 2000
    line        EQU     row                ; Alias for "row"

                .DATA
    buffer      DW      screenful

                .CODE
                .
                .
                .
                mov     cx,column
                mov     bx,line


11.1.3  String Equates

    String equates (or text macros) are used to assign a string constant to a
    symbol. String equates can be used in a variety of contexts, including
    defining aliases and string constants.

    Syntax

    name EQU{string | <string>}

    The EQU directive creates constant symbols by assigning string to name.
    The assembler replaces each subsequent occurrence of name with string.
    Symbols defined to represent strings with the EQU directive can be
    redefined to new strings. Symbols cannot be defined to represent strings
    with the equal-sign (=) directive.

    An alias is a special kind of string equate. It is a symbol that is
    equated to another symbol or keyword.

    If you want an equate to be a string equate, you should use angle brackets
    to force the assembler to evaluate it as a string. If you do not use angle
    brackets, the assembler will try to guess from context whether a numric or
    string equate is appropriate. This can lead to unexpected results. For
    example, the statement

    rt          EQU      run-time

    would be evaluated as run minus time, even though the user might intend to
    define the string run-time. If run and time were not already defined as
    numeric equates, the statement would generate an error. Using angle
    brackets solves this problem. The statement

    rt          EQU      <run-time>

    is evaluated as the string run-time.

    Examples

    ;String equate definitions
    pi          EQU      <3.1415>           ; String constant "3.1415"
    prompt      EQU      <'Type Name: '>    ; String constant "'Type Name: '",
    WPT         EQU      <WORD PTR>         ; String constant for "WORD PTR"
    argl        EQU      <[bp+4]>           ; String constant for "[bp+4]"

    ; Use of string equates
                .DATA
    message     DB       prompt             ; Allocate string "Type Name:"
    pie         DQ       pi                 ; Allocate real number 3.1415

                .CODE
                .
                .
                .
                inc      WPT parm1          ; Increment word value of
                                            ;   argument passed on stack

    Section 11.3, "Text-Macro String Directives," describes directives that
    enable you to manipulate strings. They are particularly powerful when you
    use them from within macros and repeat blocks, described later.


11.1.4  Predefined Equates

    The assembler includes several predefined equates. The ones related to
    segments are described in Section 5.1.5, "Using Predefined Segment
    Equates." In addition, the following equates are available: @WordSize,
    @Cpu, and @Version.

    The @WordSize equate returns the size of a word for the current segment.
    With QuickAssembler, this value is always equal to 2. However, other
    versions of the assembler can assign a different value to @WordSize when
    working with 80386 extended features.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  If you set the Preserve Case assembler flag or use the /Cl option,
    QuickAssembler considers predefined equates to be case-sensitive. The
    case-sensitive names of predefined equates are @WordSize, @Cpu, @Version,
    @CurSeg, @FileName, @CodeSize, @DataSize, @Model, @data, @data?, @fardata,
    @fardata?, and @code.
    ──────────────────────────────────────────────────────────────────────────

    The @Cpu equate returns a 16-bit value containing information about the
    selected processor. You select a processor by using one of the processor
    directives, such as the .286 directive. You can use the @Cpu text macro to
    control assembly of processor-specific code. Individual bits in the value
    returned by @Cpu indicate information about the selected processor.

    Bit                 If Bit = 1
    ──────────────────────────────────────────────────────────────────────────
    0                   8086 processor

    1                   80186 processor

    2                   80286 processor

    8                   8087 coprocessor instructions enabled

    10                  80287 coprocessor instructions enabled


    Because the processors are upwardly compatible, selecting a
    higher-numbered processor automatically sets the bits indicating
    lower-numbered processors. For example, selecting an 80286 processor
    automatically sets the 80186 and 8086 bits.

    Bits 4 through 6, 9, and 12 through 15 are reserved for future use and
    should be masked off when testing. Bits 3, 7, and 11 have special meaning
    to Versions 5.1 and later of the Microsoft Macro Assembler: bit 3
    indicates an 80386 processor, bit 7 indicates privilege mode enabled, and
    bit 11 indicates that 80387 coprocessor instructions are enabled.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  The @Cpu equate only provides information about the processor
    selected during assembly by one of the processor directives. It does not
    provide information about the processor actually used when a program is
    run.
    ──────────────────────────────────────────────────────────────────────────

    The following example uses the @Cpu text macro to select more efficient
    instructions available only on the 80186 processor and above:

    ; Use the 186/286/386 pusha instruction if possible
    P186        EQU (@Cpu AND 0002h)           ; Only test 186 bit--286 and
                                                ;   386 set 186 bit as well
                .
                .
                .

                IF P186                         ; Non-zero if 186 processor
                    pusha                        ;   or above
                ELSE
                    push ax                      ; Do what the single
                    push cx                      ;   pusha instruction does
                    push dx
                    push bx
                    push sp
                    push bp
                    push si
                    push di
                ENDIF

    The @Version equate returns the version of the assembler in use. With the
    @Version equate, you can write macros that take appropriate actions for
    different versions of the assembler. Currently, the @Version equate
    returns 520 as a string of three characters.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  Although the version number of QuickAssembler is 2.01, the @Version
    equate returns 520 rather than 201. The number 520 was selected because
    QuickAssembler is an enhancement of Version 5.1 of the Microsoft Macro
    Assembler. The @Version equate was first assembled for Version 5.1.
    ──────────────────────────────────────────────────────────────────────────

    You can use the IF and IFE conditional assembly directives to test for
    different versions of the assembler and to assemble different code
    depending on the version.

    IFNDEF       @Version
        %OUT MASM 5.0 or earlier has no extended PROC or .STARTUP
    ELSEIF       @Version EQ 510
        %OUT MASM 5.1 has extended PROC, but not .STARTUP
    ELSEIF       @Version EQ 520
        %OUT QuickAssembler 2.01 has extended PROC and .STARTUP
    ELSE
        %OUT Future assembler
    ENDIF


11.2  Using Macros

    Macros enable you to assign a symbolic name to a block of source
    statements and then to use that name in your source file to represent the
    statements. Parameters can also be defined to represent arguments passed
    to the macro.

    Macro expansion is a text-processing function that occurs at assembly
    time. Each time QuickAssembler encounters the text associated with a macro
    name, it replaces that text with the text of the statements in the macro
    definition. Similarly, the text of parameter names is replaced with the
    text of the corresponding actual arguments.

    A macro can be defined any place in the source file as long as the
    definition precedes the first source line that calls the macro. Macros and
    equates are often kept in a separate file and made available to the
    program through an INCLUDE directive (see Section 11.7.1, "Using Include
    Files") at the start of the source code.

    Often a task can be done by using either a macro or procedure. For
    example, the addup procedure shown in Section 15.3.3, "Passing Arguments
    on the Stack," does the same thing as the addup macro in Section 11.2.1,
    "Defining Macros." Macros are expanded on every occurrence of the macro
    name, so they can increase the length of the executable file if called
    repeatedly. Procedures are coded only once in the executable file, but the
    increased overhead of saving and restoring addresses and parameters can
    make them slower.

    The section below tells how to define and call macros. Repeat blocks, a
    special form of macro for doing repeated operations, are discussed
    separately in Section 11.4.


11.2.1  Defining Macros

    The MACRO and ENDM directives are used to define macros. MACRO designates
    the beginning of the macro block, and ENDM designates the end of the macro
    block.

    Syntax

    name MACRO [[parameter [[,parameter]]...]]
    statements
    ENDM

    The name must be unique and a valid symbol name. It can be used later in
    the source file to invoke the macro.

    The parameters (sometimes called dummy parameters) are names that act as
    placeholders for values to be passed as arguments to the macro when it is
    called. Any number of parameters can be specified, but they must all fit
    on one line. If you give more than one parameter, you must separate them
    with commas, spaces, or tabs. Commas can always be used as separators;
    spaces and tabs may cause ambiguity if the arguments are expressions.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  This manual uses the term "parameter" to refer to a placeholder for
    a value that will be passed to a macro or procedure. Parameters appear in
    macro or procedure definitions. The term "argument" is used to refer to an
    actual value passed to the macro or procedure when it is called.
    ──────────────────────────────────────────────────────────────────────────

    Any valid assembler statements may be placed within a macro, including
    statements that call or define other macros. Any number of statements can
    be used. The parameters can be used any number of times in the statements.
    Macros can be nested, redefined, or used recursively, as explained in
    Section 11.6, "Using Recursive, Nested, and Redefined Macros."

    QuickAssembler assembles the statements in a macro only if the macro is
    called and only at the point in the source file from which it is called.
    The macro definition itself is never assembled.

    A macro definition can include the LOCAL directive, which lets you define
    labels used only within a macro, or the EXITM directive, which allows you
    to exit from a macro before all the statements in the block are expanded.
    These directives are discussed in Sections 11.2.3, "Using Local Symbols,"
    and 11.2.4, "Exiting from a Macro." Macro operators can also be used in
    macro definitions, as described in Section 11.5, "Using Macro Operators."

    Example

    addup       MACRO   ad1,ad2,ad3
                mov     ax,ad1      ;; First parameter in AX
                add     ax,ad2      ;; Add next two parameters
                add     ax,ad3      ;;   and leave sum in AX
                ENDM

    This example defines a macro named addup, which uses three parameters to
    add three values and leave their sum in the AX register. The three
    parameters will be replaced with arguments when the macro is called.


11.2.2  Calling Macros

    A macro call directs QuickAssembler to copy the statements of the macro to
    the point of the call and to replace any parameters in the macro
    statements with the corresponding actual arguments.

    Syntax

    name [[argument [[,argument]]...]]

    The name must be the name of a macro defined earlier in the source file.
    The arguments can be any text. For example, symbols, constants, and
    registers are often given as arguments. Any number of arguments can be
    given, but they must all fit on one logical line. You can use the
    continuation character (\) to continue long macro calls on multiple
    physical lines. Multiple arguments must be separated by commas, spaces, or
    tabs.

    QuickAssembler replaces the first parameter with the first argument, the
    second parameter with the second argument, and so on. If a macro call has
    more arguments than the macro has parameters, the extra arguments are
    ignored. If a call has fewer arguments than the macro has parameters, any
    remaining parameters are replaced with a null (empty) string.

    You can use conditional statements to enable macros to check for null
    strings or other types of arguments. The macro can then take appropriate
    action to adjust to different kinds of arguments. See Chapter 10,
    "Assembling Conditionally," for more information on using
    conditional-assembly and conditional-error directives to test macro
    arguments.

    Example

    addup       MACRO   ad1,ad2,ad3        ; Macro definition
                mov     ax,ad1             ;; First parameter in AX
                add     ax,ad2             ;; Add next two parameters
                add     ax,ad3             ;;   and leave sum in AX
                ENDM
                .
                .
                .
                addup   bx,2,count         ; Macro call

    When the addup macro is called, QuickAssembler replaces the parameters
    with the actual parameters given in the macro call. In the example above,
    the assembler would expand the macro call to the following code:

                mov     ax,bx
                add     ax,2
                add     ax,count

    This code could be shown in an assembler listing, depending on whether the
    .LALL, .XALL, or .SALL directive was in effect (see Section 12.3,
    "Controlling the Contents of Listings").


11.2.3  Using Local Symbols

    The LOCAL directive can be used within a macro to define symbols that are
    available only within the defined macro.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  In this context, the term "local" is not related to the public
    availability of a symbol, as described in Chapter 8, "Creating Programs
    from Multiple Modules," or to variables that are defined to be local to a
    procedure, as described in Section 15.3.5, "Using Local Variables." Local
    simply means that the symbol is not known outside the macro where it is
    defined.
    ──────────────────────────────────────────────────────────────────────────

    Syntax

    LOCAL localname [[,localname]]...

    The localname is a temporary symbol name that is to be replaced by a
    unique symbol name when the macro is expanded. At least one local name is
    required for each LOCAL directive. If more than one local symbol is given,
    the names must be separated with commas. Once declared, local name can be
    used in any statement within the macro definition.

    QuickAssembler creates a new actual name for localname each time the macro
    is expanded. The actual name has the following form:

    ??number

    The number is a hexadecimal number in the range 0000 to 0FFFF. You should
    not give other symbols names in this format, since doing so may produce a
    symbol with multiple definitions. In listings, the local name is shown in
    the macro definition, but the actual name is shown in expansions of macro
    calls.

    Nonlocal labels may be used in a macro; but if the macro is used more than
    once, the same label will appear in both expansions, and QuickAssembler
    will display an error message, indicating that the file contains a symbol
    with multiple definitions. To avoid this problem, use only local labels
    (or redefinable equates) in macros.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  The LOCAL directive in macro definitions must precede all other
    statements in the definition. If you try another statement (such as a
    comment directive) before the LOCAL directive, an error will be generated.
    ──────────────────────────────────────────────────────────────────────────

    Example

    power       MACRO   factor,exponent    ;; Use for unsigned only
                LOCAL   again,gotzero      ;; Declare symbols for macro
                xor     dx,dx              ;; Clear DX
                mov     cx,exponent        ;; Exponent is count for loop
                mov     ax,1               ;; Multiply by 1 first time
                jcxz    gotzero            ;; Get out if exponent is zero
                mov     bx,factor
    again:      mul     bx                 ;; Multiply until done
                loop    again
    gotzero:
                ENDM

    In this example, the LOCAL directive defines the local names again and
    gotzero as labels to be used within the power macro. These local names
    will be replaced with unique names each time the macro is expanded. For
    example, the first time the macro is called, again will be assigned the
    name ??0000 and gotzero will be assigned ??0001. The second time through,
    again will be assigned ??0002 and gotzero will be assigned ??0003, and so
    on.


11.2.4  Exiting from a Macro

    Normally, QuickAssembler processes all the statements in a macro
    definition and then continues with the next statement after the macro
    call. However, you can use the EXITM directive to tell the assembler to
    terminate macro expansion before all the statements in the macro have been
    assembled.

    When the EXITM directive is encountered, the assembler exits the macro or
    repeat block immediately. Any remaining statements in the macro or repeat
    block are not processed. If EXITM is encountered in a nested macro or
    repeat block, QuickAssembler returns to expanding the outer block.

    The EXITM directive is typically used with conditional directives to skip
    the last statements in a macro under specified conditions. Often macros
    using the EXITM directive contain repeat blocks or are called recursively.

    Example

    allocate    MACRO   times      ; Macro definition
    x           =       0
                REPT    times      ;; Repeat up to 256 times
                IF      x GT 0FFh  ;; Is x > 255 yet?
                EXITM              ;; If so, quit
                ELSE
                DB      x          ;; Else allocate x
                ENDIF
    x           =       x + 1      ;; Increment x
                ENDM
                ENDM

    This example defines a macro that allocates a variable amount of data, but
    no more than 255 bytes. The macro contains an IF directive that checks the
    expression x - 0FFh. When the value of this expression is true (x-255 =
    0), the EXITM directive is processed and expansion of the macro stops.


11.3  Text-Macro String Directives

    The assembler includes four text-macro string directives that let you
    manipulate literal strings or text-macro values. You use the four
    directives in much the same way you use the equal-sign (=) directive. For
    example, the following line assigns the first three characters (abc) of
    the literal string to the label three by using the SUBSTR directive:

    three       SUBSTR  <abcdefghijklmnopqrstuvwxyz>,1,3

    Each of the directives assigns its value──depending on the directive──to a
    numeric label or a text macro. The following list summarizes the four
    directives and the type of label that the directives should be used with:

    Directive           Description
    ──────────────────────────────────────────────────────────────────────────
    SUBSTR              Returns a substring of its text macro or literal
                        string argument. SUBSTR requires a text-macro label.

    CATSTR              Concatenates a variable number of strings (text macros
                        or literal strings) to form a single string. CATSTR
                        requires a text-macro label.

    SIZESTR             Returns the length, in characters, of its argument
                        string. SIZESTR requires a numeric label.

    INSTR               Returns an index indicating the starting position of a
                        substring within another string. INSTR requires a
                        numeric label.


    Strings used as arguments in the directives must be text enclosed in angle
    brackets (< >), previously defined text macros, or expressions starting
    with a percent sign (%). Numeric arguments can be numeric constants or
    expressions that evaluate to constants during assembly.

    The next four sections describe the directives in more detail.


11.3.1  The SUBSTR Directive

    The SUBSTR directive returns a substring from a given string.

    Syntax

    textlabel SUBSTR string,start[[, length]]

    The SUBSTR directive takes the following arguments:

    Argument            Description
    ──────────────────────────────────────────────────────────────────────────
    textlabel           The text label the result is assigned to.

    string              The string the substring is extracted from.

    start               The starting position of the substring. The first
                        character in the string has a position of one.

    length              The number of characters to extract. If omitted,
                        SUBSTR returns all characters to the right of position
                        start, including the character at position start.


    In the following lines, the text macro freg is assigned the first two
    characters of the text macro reglist:

    reglist     EQU     <ax,bx,cx,dx>
                .
                .
                .
    freg        SUBSTR  reglist,1,2   ; freg = ax


11.3.2  The CATSTR Directive

    The CATSTR directive concatenates a series of strings.

    Syntax

    textlabel CATSTR string[[, string]]...

    The CATSTR directive takes the following arguments:

    Argument            Description
    ──────────────────────────────────────────────────────────────────────────
    textlabel           The text label the result is assigned to

    string              The string or strings concatenated and assigned to
                        textlabel


    The following lines concatenate the two literal strings and assign the
    result to the text macro lstring:

    lstring     CATSTR   <a b c>, <d e f>,       ; lstring = a b c d e f


11.3.3  The SIZESTR Directive

    The SIZESTR directive assigns the length of its argument string to a
    numeric label.

    Syntax

    numericlabel SIZESTR string

    The SIZESTR directive takes the following arguments:

    Argument            Description
    ──────────────────────────────────────────────────────────────────────────
    numericlabel        The numeric label that the assembler assigns the
                        string length to

    string              The string whose length is returned


    The following lines set slength to 8──the length of the text macro
    tstring:

    tstring     EQU      <ax bx cx>
                .
                .
                .
    slength     SIZESTR  tstring                 ; slength = 8

    A null string has a length of zero.


11.3.4  The INSTR Directive

    The INSTR directive returns the position of a string within another
    string. The directive returns 0 if the string is not found. The first
    character in a string has a position of one.

    Syntax

    numericlabel INSTR [[start,]]string1, string2

    The INSTR directive takes the following arguments:

    Argument            Description
    ──────────────────────────────────────────────────────────────────────────
    numbericlabel       The numeric label the substring's position is assigned
                        to.

    start               The starting position for the search. When omitted,
                        the INSTR directive starts searching at the first
                        character. The first character in the string has a
                        position of one.

    string1             The string being searched.

    string2             The string to look for.


    The following lines set colpos to the character position of the first
    colon in segarg:

    segarg      EQU    <ES:AX>
                .
                .
                .
    colpos      INSTR  segarg,<:> ; colpos = 3


11.3.5  Using String Directives Inside Macros

    The following example uses the text-macro string directives CATSTR, INSTR,
    SIZESTR, and SUBSTR. It defines two macros, SaveRegs and RestRegs, that
    save and restore registers on the stack. The macros are written so that
    RestRegs restores only the most recently saved group of registers.

    The SaveRegs macro uses a text macro, regpushed, to keep track of the
    registers pushed onto the stack. The RestRegs macro uses this string to
    restore the proper registers. Each time the SaveRegs macro is invoked, it
    adds a pound sign (#) to the string to mark the start of a new group of
    registers. The RestRegs macro restores the most recently saved group by
    finding the first pound sign in the string, creating a substring
    containing the saved register names, and then looping and generating PUSH
    instructions.

    ; Initialize regpushed to the null string
    regpushed       EQU     <>

    ; SaveRegs
    ; Loops and generates a push for each argument register.
    ; Saves each register name in regpushed.

    SaveRegs        MACRO   r1,r2,r3,r4,r5,r6,r7,r8,r9
        regpushed    CATSTR  <#>,regpushed   ;; Mark a new group of regs
                    IRP reg,<r1,r2,r3,r4,r5,r6,r7,r8,r9>
                        IFNB <reg>
                        push reg          ;; Push and record a register
        regpushed          CATSTR    <reg>,<,>,regpushed
                        ELSE
                        EXITM             ;; Quit on blank argument
                        ENDIF
                    ENDM
                    ENDM

    ; RestRegs
    ; Generates a pop for each register in the most recently saved groups

    RestRegs        MACRO
        numloc       INSTR  regpushed,<#>    ;; Find location of #
        reglist      SUBSTR regpushed,1,numloc-1 ;; Get list of registers to pop
        reglen       SIZESTR regpushed       ;; Adjust numloc if # is notlast
                    IF reglen GT numloc     ;; item in the string
                        numloc = numloc + 1
                    ENDIF
        regpushed    SUBSTR regpushed,numloc ;; Remove list from regpushed
        %            IRP reg,<reglist>       ;; Generate pop for each register
                    IFNB <reg>
                        pop reg
                    ENDIF
                    ENDM
                    ENDM

    The following lines from a listing file show the sample code that the
    macros would generate (a 2 marks lines generated by the macros):

    SaveRegs      ax,bx
    2                     push ax           ;
    2                     push bx           ;
    SaveRegs      cx
    2                     push cx           ;
    SaveRegs      dx
    2                     push dx           ;
    RestRegs
    2                     pop dx
    RestRegs
    2                     pop cx
    RestRegs
    2                     pop bx
    2                     pop ax


11.4  Defining Repeat Blocks

    Repeat blocks are a special form of macro that allows you to create blocks
    of repeated statements. They differ from macros in that they are not
    named, and thus cannot be called. However, like macros, they can have
    parameters that are replaced by actual arguments during assembly. Macro
    operators, symbols declared with the LOCAL directive, and the EXITM
    directive can be used in repeat blocks. Like macros, repeat blocks are
    always terminated by an ENDM directive.

    Repeat blocks are frequently placed in macros in order to repeat some of
    the statements in the macro. They can also be used independently, usually
    for declaring arrays with repeated data elements.

    Repeat blocks are processed at assembly time and should not be confused
    with the REP instruction, which causes string instructions to be repeated
    at run time, as explained in Chapter 16, "Processing Strings."

    Three different kinds of repeat blocks can be defined by using the REPT,
    IRP, and IRPC directives. The difference between them is in how the number
    of repetitions is specified.


11.4.1  The REPT Directive

    The REPT directive is used to create repeat blocks in which the number of
    repetitions is specified with a numeric argument.

    Syntax

    REPT   expression
    statements
    ENDM

    The expression must evaluate to a numeric constant (a 16-bit unsigned
    number). It specifies the number of repetitions. Any valid assembler
    statements may be placed within the repeat block.

    Example

    alphabet    LABEL   BYTE
    x           =       0          ;; Initialize
                REPT    26         ;; Specify 26 repetitions
                DB      'A' + x    ;; Allocate ASCII code for letter
    x           =       x + 1      ;; Increment
                ENDM

    This example repeats the equal-sign (=) and DB directives to initialize
    ASCII values for each uppercase letter of the alphabet.


11.4.2  The IRP Directive

    The IRP directive is used to create repeat blocks in which the number of
    repetitions, as well as parameters for each repetition, is specified in a
    list of arguments.

    Syntax

    IRP parameter,<argument[[,argument]]...>
    statements
    ENDM

    The assembler statements inside the block are repeated once for each
    argument in the list enclosed by angle brackets (< >). The parameter is a
    name for a placeholder to be replaced by the current argument. Each
    argument can be text, such as a symbol, string, or numeric constant. Any
    number of arguments can be given. If multiple arguments are given, they
    must be separated by commas. The angle brackets (< >) around the argument
    list are required. The parameter can be used any number of times in the
    statements.

    When QuickAssembler encounters an IRP directive, it makes one copy of the
    statements for each argument in the enclosed list. While copying the
    statements, it substitutes the current argument for all occurrences of
    parameter in these statements. If a null argument (< >) is found in the
    list, the dummy name is replaced with a blank value. If the argument list
    is empty, the IRP directive is ignored and no statements are copied.

    Example

    numbers     LABEL   BYTE
                IRP     x,<0,1,2,3,4,5,6,7,8,9>
                DB      10 DUP(x)
                ENDM

    This example repeats the DB directive 10 times, allocating 10 bytes for
    each number in the list. The resulting statements create 100 bytes of
    data, starting with 10 zeros, followed by 10 ones, and so on.


11.4.3  The IRPC Directive

    The IRPC directive is used to create repeat blocks in which the number of
    repetitions, as well as arguments for each repetition, is specified in a
    string.

    Syntax

    IRPC parameter,string
    statements
    ENDM

    The assembler statements inside the block are repeated as many times as
    there are characters in string. The parameter is a name for a placeholder
    to be replaced by the current character in the string. The string can be
    any combination of letters, digits, and other characters. It should be
    enclosed with angle brackets (< >) if it contains spaces, commas, or other
    separating characters. The parameter can be used any number of times in
    these statements.

    When QuickAssembler encounters an IRPC directive, it makes one copy of the
    statements for each character in the string. While copying the statements,
    it substitutes the current character for all occurrences of parameter in
    these statements.

    Example 1

    ten         LABEL   BYTE
                IRPC    x,0123456789
                DB      x
                ENDM

    Example 1 repeats the DB directive 10 times, once for each character in
    the string 0123456789. The resulting statements create 10 bytes of data
    having the values 0-9.

    Example 2

                IRPC    letter,ABCDEFGHIJKLMNOPQRSTUVWXYZ
                DB      '&letter'          ; Allocate uppercase letter
                DB      '&letter'+20h      ; Allocate lowercase letter
                DB      '&letter'-40h      ; Allocate number of letter
                ENDM

    Example 2 allocates the ASCII codes for uppercase, lowercase, and numeric
    versions of each letter in the string. Notice that the substitute operator
    (&) is required so that letter will be treated as an argument rather than
    a string. See Section 11.5.1, "Substitute Operator," for more
    information.


11.5  Using Macro Operators

    Macro and conditional directives use the following special set of macro
    operators:

    Operator            Definition
    ──────────────────────────────────────────────────────────────────────────
    &                   Substitute operator

    <>                  Literal-text operator

    !                   Literal-character operator

    %                   Expression operator

    ;;                  Macro comment


    When used in a macro definition, a macro call, a repeat block, or as the
    argument of a conditional-assembly directive, these operators carry out
    special control operations, such as text substitution.


11.5.1  Substitute Operator

    The substitute operator (&) enables substitution of macro parameters to
    take place, even when the parameter occurs within a larger word or within
    a quoted string.

    Syntax

    You can use the substitute operator in any one of three different ways:

    name1&name2
    name&
    &name

    The assembler responds by analyzing name1 and name2 separately, then
    joining them together. If either name1 or name2 is a parameter, the
    assembler replaces each parameter by an actual argument before joining the
    names. You can join any number of names with the substitute operator, so
    that items such as a&b&c are valid.

    The last two forms are useful when a parameter name appears within a
    quoted string. The assembler responds by substituting the actual argument
    for the parameter; when not next to an ampersand (&), the assembler
    considers the parameter name just part of the string data.

    Example

    declare     MACRO   x,y
    xy          DW      0
    x&y         DW      0
    x&str       DB      'x and y params are &x and &y'
                ENDM

    The example above demonstrates how the presence or absence of the
    substitute operator affects macro substitution. Given the macro definition
    above, the statement

                declare foot,ball

    is expanded to

    xy          DW
    football    DW      0
    footstr     DB      'x and y params are foot and ball'

    In the first statement of the macro, xy is not identified with either of
    the parameters x or y; instead, xy forms a distinct name. No substitution
    takes place. In the second statement, the assembler interprets x&y by
    analyzing x and y as separate names, performing the appropriate parameter
    substitution in each case, and then joining the resulting names together.

    When you use the substitute operator with nested macros and repeat blocks,
    the assembler applies the following rules to expressions outside of
    quotes:

    1. Perform parameter substitution as described above.

    2. Remove exactly one of the substitute operators (&) from the group. The
        assembler strips off an operator whether or not a parameter was
        substituted.

    The number of ampersands (&) you use should never be greater than the
    number of levels of nesting. If you use too few ampersands, proper
    substitution will not take place. If you use too many ampersands, text
    such as x&y will remain after macro expansion is complete. Such
    expressions are invalid.

    When an ampersand appears inside quotes, the assembler removes ampersands
    on either side of a macro parameter when substitution is possible. When
    substitution is not possible (because the parameter name is not defined at
    the current level of nesting), the assembler leaves the ampersand as it
    is. With this method, parameter substitution automatically takes place at
    the appropriate level of nesting.


11.5.2  Literal-Text Operator

    The literal-text operator (< >) directs QuickAssembler to treat a list as
    a single string rather than as separate arguments.

    Syntax

    <text >

    The text is considered a single literal element even if it contains
    commas, spaces, or tabs. The literal-text operator is most often used in
    macro calls and with the IRP directive to ensure that values in a
    parameter list are treated as a single parameter.

    The literal-text operator can also be used to force QuickAssembler to
    treat special characters, such as the semicolon or the ampersand,
    literally. For example, the semicolon inside angle brackets <;> becomes a
    semicolon, not a comment indicator.

    QuickAssembler removes one set of angle brackets each time the parameter
    is used in a macro. When using nested macros, you will need to supply as
    many sets of angle brackets as there are levels of nesting.

    Example

                work    1,2,3,4,5          ; Passes five parameters to "work"

                work    <1,2,3,4,5>        ; Passes one five-element
                                            ;   parameter to "work"

    When the IRP directive is used inside a macro definition and when the
    argument list of the IRP directive is also a parameter of the macro, you
    must use the literal-text operator (< >) to enclose the macro parameter.

    For example, in the following macro definition, the parameter x is used as
    the argument list for the IRP directive:

    init        MACRO   x
                IRP     y,<x>
                DB      y
                ENDM
                ENDM

    If this macro is called with

                init    <0,1,2,3,4,5,6,7,8,9>

    the macro removes the angle brackets from the parameter so that it is
    expanded as 0,1,2,3,4,5,6,7,8,9. The brackets inside the repeat block are
    necessary to put the angle brackets back on. The repeat block is then
    expanded as shown below:

                IRP     y,<0,1,2,3,4,5,6,7,8,9>
                DB      y
                ENDM


11.5.3  Literal-Character Operator

    The literal-character operator (!) forces the assembler to treat a
    specified character literally rather than as a symbol.

    Syntax

    !character

    The literal-character operator is used with special characters, such as
    the semicolon or ampersand, when meaning of the special character must be
    suppressed. Using the literal-character operator is the same as enclosing
    a single character in brackets. For example, !! is the same as <!>.

    Example

    errgen      MACRO   y,x
                PUBLIC  err&y
    err&y       DB      'Error &y: &x'
                ENDMW

                .
                .
                .
                errgen  103,<Expression !> 255>

    The example macro call is expanded to allocate the string Error 103:
    Expression > 255. Without the literal-character operator, the greater-than
    symbol would be interpreted as the end of the argument and an error would
    result.


11.5.4  Expression Operator

    The expression operator (%) causes the assembler to treat the argument
    following the operator as an expression.

    Syntax

    %text

    QuickAssembler computes the expression's value and replaces text with the
    result. The expression can be either a numeric expression or a text
    equate. Additional arguments after an argument that uses the expression
    operator must be preceded by a comma, not a space or tab.

    The expression operator is typically used in macro calls when the
    programmer needs to pass the result of an expression rather than the
    actual expression to a macro.

    Example

    printe      MACRO   exp,val
                IF1                        ;; On pass 1 only
                %OUT    exp = val          ;; Display expression and result
                ENDIF                      ;;   to screen
                ENDM

    sym1        EQU     100
    sym2        EQU     200
    msg         EQU     <"Hello, World.">

                printe  <sym1 + sym2>,%(sym1 + sym2)
                printe  msg,%msg

    In the first macro call, the text literal sym1 + sym2 = is passed to the
    parameter exp, and the result of the expression is passed to the parameter
    val. In the second macro call, the equate name msg is passed to the
    parameter exp, and the text of the equate is passed to the parameter val.
    As a result, Quick-Assembler displays the following messages:

    sym1 + sym2 = 300
    msg = "Hello, World."

    The %OUT directive, which sends a message to the screen, is described in
    Section 12.1, "Sending Messages to the Standard Output Device"; the IF1
    directive is described in Section 10.1.2, "Testing the Pass with IF1 and
    IF2 Directives."

    You can also use the expression operator (%) to substitute the values of
    text macros for the macro names anywhere a text-macro name appears. When
    the expression operator is the first item on a line and is followed by one
    or more blanks or tabs, the line is scanned for text macros and the values
    of the macros are substituted. Using the expression operator, you can
    force substitution of text macros wherever they appear in a line. The
    assembler re-scans the line until all substitutions have been made.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  Text macros are always evaluated when they appear in the name or
    operation fields. The expression operator is required to evaluate a text
    macro only when the macro appears in the operand field.
    ──────────────────────────────────────────────────────────────────────────

    This use of the expression operator eliminates the need to do a macro call
    in order to evaluate a text macro. For example, the following macro uses a
    separate macro, popregs, to evaluate the text macro regpushed:

    regpushed   EQU     <ax,bx,cx>
                .
                .
                .
    RestRegs    MACRO
                popregs %regpushed
                ENDM

    popregs     MACRO   reglist
                IRP     reg,<reglist>
                    pop  reg
                ENDM
                ENDM

    The use of the expression operator to evaluate text macros in a line makes
    the popregs macro unnecessary:

    regpushed   EQU     <ax,bx,cx>
                .
                .
                .
    RestRegs    MACRO
    %         IRP     reg,<regpushed>   ;; % operator makes
                                        ;;   separate macro unnecessary
                    pop  reg
                ENDM
                ENDM

    You cannot use the EQU directive to assign a value to a text macro in a
    line evaluated with the expression operator. For example, the following
    lines generate an error:

    strpos      EQU  <[si]+12>
    .
    .
    .
    % wpstrpos  EQU  <WORD PTR strpos>

    On pass 1, wpstrpos is defined as a text macro that is expanded on pass 2.
    Thus, on pass 2 the second EQU directive becomes

    WORD PTR [si]+12     EQU  <WORD PTR [si]+12>

    and generates an error.

    Instead, use the CATSTR directive to assign values to text macros (see
    Section 11.3, "Text-Macro String Directives," for more information about
    CATSTR and other text-macro string directives). The previous example
    should be rewritten as follows:

    strpos      EQU  <[si]+12>
    .
    .
    .
    wpstrpos    CATSTR  <WORD PTR >, strpos

    If the text macro evaluates to a valid name, there is no error when you
    use EQU. The following lines do not generate an error, but define two
    names, one (numlabel) with the value 5, the other (tmacro) with the value
    <numlabel>:

    tmacro      EQU  <numlabel>
    % tmacro    EQU  5

    You can also use the substitution operator (&) with text macros just as
    you would inside a macro:

    SegName          EQU   <MySeg>
    .
    .
    .
    % SegName&_text  SEGMENT PUBLIC 'CODE'

    The final line, after expanding the text macro, becomes:

    MySeg_text       SEGMENT PUBLIC 'CODE'

    The substitution operator separates the text-macro name from the text that
    immediately follows it. The name appears to the assembler as segName_text
    without the substitution operator, and the assembler fails to recognize
    the text macro.


11.5.5  Macro Comments

    A macro comment is any text in a macro definition that does not need to be
    copied in the macro expansion. A double semicolon (;;) is used to start a
    macro comment.

    Syntax

    ;;text

    All text following the double semicolon (;;) is ignored by the assembler
    and will appear only in the macro definition when the source listing is
    created.

    The regular comment operator (;) can also be used in macros. However,
    regular comments may appear in listings when the macro is expanded. Macro
    comments will appear in the macro definition, but not in macro expansions.
    Whether or not regular comments are listed in macro expansions depends on
    the use of the .LALL, .XALL, and .SALL directives, as described in Section
    12.2.3, "Controlling Page Breaks."


11.6  Using Recursive, Nested, and Redefined Macros

    The concept of replacing macro names with predefined macro text is simple,
    but in practice it has many implications and potentially unexpected side
    effects. The following sections discuss advanced macro features (such as
    nesting, recursion, and redefinition) and point out some side effects of
    macros.


11.6.1  Using Recursion

    Macro definitions can be recursive: that is, they can call themselves.
    Using recursive macros is one way of doing repeated operations. The macro
    does a task, and then calls itself to do the task again. The recursion is
    repeated until a specified condition is met.

    Example

    pushall     MACRO   reg1,reg2,reg3,reg4,reg5,reg6
                IFNB    <reg1>         ;; If parameter not blank
                push    reg1           ;;   push one register and repeat
                pushall reg2,reg3,reg4,reg5,reg6
                ENDIF
                ENDM
                .
                .
                .
    pushall     ax,bx,si,ds
    pushall     cs,es

    In this example, the pushall macro repeatedly calls itself to push a
    register given in a parameter until no parameters are left to push. A
    variable number of parameters (up to six) can be given.


11.6.2  Nesting Macro Definitions

    One macro can define another. QuickAssembler does not process nested
    definitions until the outer macro has been called. Therefore, nested
    macros cannot be called until the outer macro has been called at least
    once. Macro definitions can be nested to any depth. Nesting is limited
    only by the amount of memory available when the source file is assembled.
    Using a macro to create similar macros can make maintenance easier. If you
    want to change all the macros, change the outer macro and it automatically
    changes the others.

    Example

    shifts      MACRO   opname             ; Define macro that defines macros
    opname&s    MACRO   operand,rotates
                IF      rotates LE 4
                REPT    rotates
                opname  operand,1          ;; One at a time is faster
                ENDM                       ;;   for 4 or less on 8088/8086
                ELSE
                mov     cl,rotates         ;; Using CL is faster
                opname  operand,cl         ;;   for more than 4 on 8088/8086
                ENDIF
                ENDM
                ENDM

                shifts  ror                ; Call macro to new macros
                shifts  rol
                shifts  shr
                shifts  shl
                shifts  rcl
                shifts  rcr
                shifts  sal
                shifts  sar
                .
                .
                .
                shrs    ax,5               ; Call defined macros
                rols    bx,3

    This macro, when called as shown, creates macros for multiple shifts with
    each of the shift and rotate instructions. All the macro names are
    identical except for the instruction. For example, the macro for the SHR
    instruction is called shrs; the macro for the ROL instruction is called
    rols. If you want to enhance the macros by doing more parameter checking,
    you can modify the original macro. Doing so will change the created macros
    automatically. This macro uses the substitute operator, as described in
    Section 11.5.1.


11.6.3  Nesting Macro Calls

    Macro definitions can contain calls to other macros. Nested macro calls
    are expanded like any other macro call, but only when the outer macro is
    called.

    Example

    ex          MACRO   text,val   ; Inner macro definition
                IF2
                %OUT    The expression (text) has the value: &val
                ENDIF
                ENDM

    express     MACRO   expression ; Outer macro definition
                ex      <expression>,%(expression)
                ENDM
                .
                .
                .
                express <4 + 2 * 7 - 3 MOD 4>

    The two sample macros enable you to print the result of a complex
    expression to the screen by using the %OUT directive, even though that
    directive expects text rather than an expression (see Section 12.1,
    "Sending Messages to the Standard Output Device"). Being able to see the
    value of an expression is convenient during debugging.

    Both macros are necessary. The express macro calls the ex macro, using
    operators to pass the expression both as text and as the value of the
    expression. With the call in the example, the assembler sends the
    following line to the standard output:

    The expression (4 + 2 * 7 - 3 MOD 4) has the value: 15

    You could get the same output by using only the ex macro, but you would
    have to type the expression twice and supply the macro operators in the
    correct places yourself. The express macro does this for you
    automatically. Notice that expressions containing spaces must still be
    enclosed in angle brackets. Section 11.5.2, "Literal-Text Operator,"
    explains why.


11.6.4  Redefining Macros

    Macros can be redefined. You do not need to purge the macro before
    redefining it. The new definition automatically replaces the old
    definition. If you redefine a macro from within the macro itself, make
    sure there are no statements or comments between the ENDM directive of the
    nested redefinition and the ENDM directive of the original macro.

    Example

    getasciiz   MACRO
                .DATA
    max         DB      80
    actual      DB      ?
    tmpstr      DB      80 DUP (?)
                .CODE
                mov     ah,0Ah
                mov     dx,OFFSET max
                int     21h
                mov     bl,actual
                xor     bh,bh
                mov     tmpstr[bx],0
    getasciiz   MACRO
                mov     ah,0Ah
                mov     dx,OFFSET max
                int     21h
                mov     bl,actual
                xor     bh,bh
                mov     tmpstr[bx],0
                ENDM
                ENDM

    This macro allocates data space the first time it is called, and then
    redefines itself so that it doesn't try to reallocate the data on
    subsequent calls.


11.6.5  Avoiding Inadvertent Substitutions

    QuickAssembler replaces all parameters when they occur with the
    corresponding argument, even if the substitution is inappropriate. For
    example, if you use a register name, such as AX or BH, as a parameter,
    QuickAssembler replaces all occurrences of that name when it expands the
    macro. If the macro definition contains statements that use the register,
    not the parameter, the macro will be incorrectly expanded. QuickAssembler
    will not warn you about using reserved names as macro parameters.

    QuickAssembler does give a warning if you use a reserved name as a macro
    name. You can ignore the warning, but be aware that the reserved name will
    no longer have its original meaning. For example, if you define a macro
    called ADD, the ADD instruction will no longer be available. Your ADD
    macro takes its place.


11.7  Managing Macros and Equates

    Macros and equates are often kept in a separate file and read into the
    assembler source file at assembly time. In this way, libraries of related
    macros and equates can be used by many different source files.

    The INCLUDE directive is used to read an include file into a source file.
    Memory can be saved by using the PURGE directive to delete the unneeded
    macros from memory.


11.7.1  Using Include Files

    The INCLUDE directive inserts source code from a specified file into the
    source file from which the directive is given.

    Syntax

    INCLUDE filespec

    The filespec must specify an existing file containing valid assembler
    statements. When the assembler encounters an INCLUDE directive, it opens
    the specified source file and begins processing its statements. When all
    statements have been read, QuickAssembler continues with the statement
    immediately following the INCLUDE directive.

    The filespec can be given either as a file name, or as a complete or
    relative file specification, including drive or directory name.

    If a complete or relative file specification is given, QuickAssembler
    looks for the include file only in the specified directory. If a file name
    is given without a directory or drive name, QuickAssembler looks for the
    file in the following order:

    1. If paths are specified with the /I option, QuickAssembler looks for the
        include file in the specified directory or directories.

    2. QuickAssembler looks for the include file in the current directory.

    3. If an INCLUDE environment variable is defined, QuickAssembler looks for
        the include file in the directory or directories specified in the
        environment variable.

    Nested INCLUDE directives are allowed. QuickAssembler marks included
    statements with the letter "C" in assembly listings.

    Directories can be specified in INCLUDE path names with either the
    backslash (\) or the forward slash (/). This is for XENIX(R)
    compatibility.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  Any standard code can be placed in an include file. However, include
    files are usually used only for macros, equates, and standard segment
    definitions. Standard procedures are usually assembled into separate
    object files and linked with the main source modules.
    ──────────────────────────────────────────────────────────────────────────

    Examples

    INCLUDE fileio.mac                   ; File name only; use with
                                        ;   /I or environment
    INCLUDE b:\include\keybd.inc         ; Complete file specification

    INCLUDE /usr/jons/include/stdio.mac  ; Path name in XENIX format

    INCLUDE masm_inc\define.inc          ; Partial path name in DOS format
                                        ;   (relative to current directory)


11.7.2  Purging Macros from Memory

    The PURGE directive can be used to delete a currently defined macro from
    memory.

    Syntax

    PURGE macroname[[,macroname]]...

    Each macroname is deleted from memory when the directive is encountered at
    assembly time. Any subsequent call to that macro causes the assembler to
    generate an error.

    The PURGE directive is intended to clear memory space no longer needed by
    a macro. If a macro has been used to redefine a reserved name, the
    reserved name is restored to its previous meaning.

    The PURGE directive can be used to clear memory if a macro or group of
    macros is needed only for part of a source file.

    It is not necessary to purge a macro before redefining it. Any
    redefinition of a macro automatically purges the previous definition.
    Also, a macro can purge itself as long as the PURGE directive is on the
    last line of the macro.

    The PURGE directive works by redefining the macro to a null string.
    Therefore, calling a purged macro does not cause an error. The macro name
    is simply ignored.

    Examples

                GetStuff
                PURGE   GetStuff

    These examples call a macro and then purge it. You might need to purge
    macros in this way if your system does not have enough memory to keep all
    of the macros needed for a source file in memory at the same time.




────────────────────────────────────────────────────────────────────────────
Chapter 12:  Controlling Assembly Output


    QuickAssembler has two ways of communicating results. It can write
    information to a listing or object file, or it can display messages to the
    standard output device (normally the screen).

    Both kinds of output can be controlled by menu commands and by source-file
    statements. This chapter explains the directives that directly control
    output through source-file statements.


12.1  Sending Messages to the Standard Output Device

    The %OUT directive instructs the assembler to display text to the program
    output window.

    Syntax

    %OUT text

    The text can be any line of ASCII characters. If you want to display
    multiple lines, you must use a separate %OUT directive for each line.

    The directive is useful for displaying messages at specific points of a
    long assembly. It can be used inside conditional-assembly blocks to
    display messages when certain conditions are met.

    The %OUT directive generates output for both assembly passes. The IF1 and
    IF2 directives can be used for control when the directive is processed.
    Macros that enable you to output the value of expressions are shown in
    Section 11.6.3, "Nesting Macro Calls."

    Example

                IF1
                %OUT    First Pass - OK
                ENDIF

    This sample block could be placed at the end of a source file so that the
    message First Pass - OK would be displayed at the end of the first pass,
    but ignored on the second pass.


12.2  Controlling Page Format in Listings

    QuickAssembler provides several directives for controlling the page format
    of listings. These directives include the following:

    Directive           Action
    ──────────────────────────────────────────────────────────────────────────
    TITLE               Sets title for listings

    SUBTTL              Sets title for sections in listings

    PAGE                Sets page length and width, and controls page and
                        section breaks



12.2.1  Setting the Listing Title

    The TITLE directive specifies a title to be used on each page of assembly
    listings. In editor-based listing files (the default inside the QC
    environment), the title is only printed once, at the top of the file.

    Syntax

    TITLE text

    The text can be any combination of characters up to 60 in length. The
    title is printed flush left on the second line of each page of the
    listing.

    If no TITLE directive is given, the title will be blank. No more than one
    TITLE directive per module is allowed.

    Example

                TITLE Graphics Routines

    This example sets the listing title. A page heading that reflects this
    title is shown below:

    Microsoft (R) QuickC with QuickAssembler Version 2.01     9/25/89 12:00:00
    Graphics Routines
    Page     1-2


12.2.2  Setting the Listing Subtitle

    The SUBTTL directive specifies the subtitle used on each page of assembly
    listings. In editor-based listing files (the default inside the QC
    environment), the subtitle is ignored.

    Syntax

    SUBTTL text

    The text can be any combination of characters up to 60 in length. The
    subtitle is printed flush left on the third line of the listing pages.

    If no SUBTTL directive is used, or if no text is given for a SUBTTL
    directive, the subtitle line is left blank.

    Any number of SUBTTL directives can be given in a program. Each new
    directive replaces the current subtitle with the new text. SUBTTL
    directives are often used just before a PAGE + statement, which creates a
    new section (see Section 12.2.3, "Controlling Page Breaks").

    Example

                SUBTTL Point Plotting Procedure
                PAGE    +

    The example above creates a section title and then creates a page break
    and a new section. A page heading that reflects this title is shown below:

    Microsoft (R) QuickC with QuickAssembler Version 2.01     9/25/89 12:00:00
    Graphics Routines
    Page     3-1
    Point Plotting Procedure


12.2.3  Controlling Page Breaks

    The PAGE directive can be used to designate the line length and width for
    the program listing, to increment the section and adjust the section
    number accordingly, or to generate a page break in the listing. In
    editor-based listing files (the default inside the QC environment),
    page-break directives are ignored, except for the page width specifier.

    Syntax

    PAGE [[[[length]],width]]
    PAGE +

    If length and width are specified, the PAGE directive sets the maximum
    number of lines per page to length and the maximum number of characters
    per line to width. The length must be in the range of 10-255 lines. The
    default page length is 50 lines. The width must be in the range of 60-132
    characters. The default page width is 80 characters. With editor-based
    listing files, the default page width is 255. To specify the width without
    changing the default length, use a comma before width.

    If no argument is given, PAGE starts a new page in the program listing by
    copying a form-feed character to the file and generating new title and
    subtitle lines.

    If a plus sign follows PAGE, a page break occurs, the section number is
    incremented, and the page number is reset to 1. Program-listing page
    numbers have the following format:

    section-page

    The section is the section number within the module, and page is the page
    number within the section. By default, section and page numbers begin with
    1-1. The SUBTTL directive and the PAGE directive can be used together to
    start a new section with a new subtitle. See Section 12.2.2, "Setting the
    Listing Subtitle," for an example.

    Example 1

                PAGE

    Example 1 creates a page break.

    Example 2

                PAGE 58,90

    Example 2 sets the maximum page length to 58 lines and the maximum width
    to 90 characters.

    Example 3

                PAGE ,132

    Example 3 sets the maximum width to 132 characters. The current page
    length (either the default of 50 or a previously set value) remains
    unchanged.

    Example 4

                PAGE +

    Example 4 creates a page break, increments the current section number, and
    sets the page number to 1. For example, if the preceding page was 3-6, the
    new page would be 4-1.


12.2.4  Naming the Module

    The assembler automatically uses the base file name of the source file as
    the name of the module. This name is used to identify error messages when
    you run the assembler from the command line.


12.3  Controlling the Contents of Listings

    QuickAssembler provides several directives for controlling what text will
    be shown in listings. The directives that control the contents of listings
    are shown below:

    Directive           Action
    ──────────────────────────────────────────────────────────────────────────
    .LIST               Lists statements in program listing

    .XLIST              Suppresses listing of statements

    .LFCOND             Lists false-conditional blocks in program listing

    .SFCOND             Suppresses false-conditional listing

    .TFCOND             Toggles false-conditional listing

    .LALL               Includes macro expansions in program listing

    .SALL               Suppresses listing of macro expansions

    .XALL               Excludes comments from macro listing



12.3.1  Suppressing and Restoring Listing Output

    The .LIST and .XLIST directives specify which source lines are included in
    the program listing.

    Syntax

    .LIST
    .XLIST

    The .XLIST directive suppresses copying of subsequent source lines to the
    program listing. The .LIST directive restores copying. The directives are
    typically used in pairs to prevent a particular section of a source file
    from being copied to the program listing.

    The .XLIST directive overrides other listing directives, such as .SFCOND
    or .LALL.

    Example

                .XLIST         ; Listing suspended here
                .
                .
                .
                .LIST          ; Listing resumes here
                .
                .
                .


12.3.2  Controlling Listing of Conditional Blocks

    The .SFCOND, .LFCOND, and .TFCOND directives control whether
    false-conditional blocks should be included in assembly listings.

    Syntax

    .SFCOND
    .LFCOND
    .TFCOND

    The .SFCOND directive suppresses the listing of any subsequent conditional
    blocks whose condition is false. The .LFCOND directive restores the
    listing of these blocks. Like .LIST and .XLIST, conditional-listing
    directives can be used to suppress listing of conditional blocks in
    sections of a program.

    The .TFCOND directive toggles the current status of listing of conditional
    blocks. This directive can be used in conjunction with the /Sx option of
    the assembler. By default, conditional blocks are not listed on start-up.
    However, they will be listed on start-up if the /Sx option is given. This
    means that using /Sx reverses the meaning of the first .TFCOND directive
    in the source file. The /Sx option is discussed in Appendix B, Section
    B.14, "Listing False Conditionals."

    Example

    test1       EQU     0          ; Defined to make all conditionals false

                                    ; /Sx not used      /Sx used
                .TFCOND
                IFNDEF  test1      ; Listed            Not listed
    test2       DB      128
                ENDIF
                .TFCOND
                IFNDEF  test1      ; Not listed        Listed
    test3       DB      128
                ENDIF
                .SFCOND
                IFNDEF  test1      ; Not listed        Not listed

    test4       DB      128
                ENDIF
                .LFCOND
                IFNDEF  test1      ; Listed            Listed
    test5       DB      128
                ENDIF

    In the example above, the listing status for the first two conditional
    blocks would be different, depending on whether the /X option was used.
    The blocks with .SFCOND and .LFCOND would not be affected by the /X
    option.


12.3.3  Controlling Listing of Macros

    The .LALL, .XALL, and .SALL directives control the listing of the expanded
    macro calls. The assembler always lists the full macro definition. The
    directives only affect expansion of macro calls.

    Syntax

    .LALL
    .XALL
    .SALL

    The .LALL directive causes QuickAssembler to list all the source
    statements in a macro expansion, including normal comments (preceded by a
    single semicolon) but not macro comments (preceded by a double semicolon).

    The .XALL directive causes QuickAssembler to list only those source
    statements in a macro expansion that generate code or data. For instance,
    comments, equates, and segment definitions are ignored.

    The .SALL directive causes QuickAssembler to suppress listing of all macro
    expansions. The listing shows the macro call, but not the source lines
    generated by the call.

    The .XALL directive is in effect when QuickAssembler first begins
    execution.

    Example

    tryout      MACRO   param
                                    ;; Macro comment
                                    ; Normal comment
    it          EQU     3          ; No code or data
                ASSUME  es:_DATA   ; No code or data
                DW      param      ; Generates data
                mov     ax,it      ; Generates code
                ENDM
                .
                .
                .
                .LALL
                tryout  6          ; Call with .LALL

                .XALL
                tryout  6          ; Call with .XALL

                .SALL
                tryout  6          ; Call with .SALL

    The macro calls in the example generate the following listing lines:

                                    .LALL
                                    tryout  6         ; Call with .LALL
                        1                           ; Normal comment
    = 0003               1 it      EQU     3         ; No code or data
                        1         ASSUME  es:_TEXT  ; No code or data
    0015  0006           1         DW      6         ; Generates data
    0017  B8 0003        1         mov     ax,it     ; Generates code


                                    .XALL
                                    tryout  6         ; Call with .XALL
    001A  0006           1         DW      6         ; Generates data
    001C  B8 0003        1         mov     ax,it     ; Generates code


                                    .SALL
                                    tryout  6         ; Call with .SALL

    Notice that the macro comment is never listed in macro expansions. Normal
    comments are listed only with the .LALL directive.



────────────────────────────────────────────────────────────────────────────
PART 3:  Using Instructions


    Part 3 of the Programmer's Guide (comprising Chapters 13-18) explains
    how to use instructions in assembly-language source code. Instructions
    constitute the actual steps of your program and are translated into
    machine-code statements that the processor executes at run time.

    Part 3 is organized topically, with related instructions discussed
    together. Chapter 13 explains the instructions for moving data from one
    location to another. The instructions for performing calculations on
    numbers and bits are covered in Chapter 14.

    The 8086-family processors provide four major types of instructions for
    controlling program flow, as described in Chapter 15. Chapter 16
    explains the instructions and techniques for processing strings. The
    8087-family coprocessors and their instructions are explained in Chapter
    17. Finally, Chapter 18 summarizes the instructions available for
    processor control.




────────────────────────────────────────────────────────────────────────────
Chapter 13:  Loading, Storing, and Moving Data


    The 8086-family processors provide several instructions for loading,
    storing, or moving various kinds of data. Among the types of transferable
    data are variables, pointers, and flags. Data can be moved to and from
    registers, memory, ports, and the stack. This chapter explains the
    instructions for moving data from one location to another.


13.1  Transferring Data

    Moving data is one of the most common tasks in assembly-language
    programming. Data can be moved between registers or between memory and
    registers. Immediate data can be loaded into registers or into memory.

    Furthermore, all memory-to-memory operations are illegal. To move data
    from one memory location to another, you must first move the data to an
    intermediate register.


13.1.1  Copying Data

    The MOV instruction is the most common method of moving data. This
    instruction can be thought of as a copy instruction, since it always
    copies the source operand to the destination operand. Immediately after a
    MOV instruction, the source and destination operands both contain the same
    value. The old value in the destination operand is destroyed.

    Syntax

    MOV {register | memory},{register | memory | immediate}

    Example 1

                mov     ax,7       ; Immediate to register
                mov     mem,7      ; Immediate to memory direct
                mov     mem[bx],7  ; Immediate to memory indirect

                mov     mem,ds     ; Segment register to memory
                mov     mem,ax     ; Register to memory direct
                mov     mem[bx],ax ; Register to memory indirect

                mov     ax,mem     ; Memory direct to register
                mov     ax,mem[bx] ; Memory indirect to register
                mov     ds,mem     ; Memory to segment register

                mov     ax,bx      ; Register to register
                mov     ds,ax      ; General register to segment register
                mov     ax,ds      ; Segment register to general register

    The statements in Example 1 illustrate each type of memory move that can
    be done with a single instruction. Example 2 illustrates several common
    types of moves that require two instructions.

    Example 2

    ; Move immediate to segment register
                mov     ax,DGROUP  ; Load immediate to general register
                mov     ds,ax      ; Store general register to segment register

    ; Move memory to memory
                mov     ax,mem1    ; Load memory to general register
                mov     mem2,ax    ; Store general register to memory

    ; Move segment register to segment register
                mov     ax,ds      ; Load segment register to general register
                mov     es,ax      ; Store general register to segment register


13.1.2  Exchanging Data

    The XCHG (Exchange) instruction exchanges the data in the source and
    destination operands. Data can be exchanged between registers or between
    registers and memory.

    Syntax

    XCHG {register | memory},{register | memory}

    Examples

                xchg    ax,bx      ; Put AX in BX and BX in AX
                xchg    memory,ax  ; Put "memory" in AX and AX in "memory"


13.1.3  Looking Up Data

    The XLAT (Translate) instruction is used to load data from a table in
    memory. The instruction is useful for translating bytes from one coding
    system to another.

    Syntax

    XLAT[[B]] [[[[segment:]]memory]]

    The BX register must contain the address of the start of the table. By
    default, the DS register contains the segment of the table, but a segment
    override can be used to specify a different segment. The operand need not
    be given except when specifying a segment override.

    Before the XLAT instruction is called, the AL register should contain a
    value that points into the table (the start of the table is considered 0).
    After the instruction is called, AL will contain the table value pointed
    to. For example, if AL contains 7, the 8th byte of the table will be
    placed in the AL register.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  For compatibility with Intel 80386 mnemonics, QuickAssembler
    recognizes XLATB as a synonym for XLAT. In the Intel syntax, XLAT requires
    an operand; XLATB does not allow one. Quick-Assembler never requires an
    operand, but always allows one.
    ──────────────────────────────────────────────────────────────────────────

    Example

                ; Table of Hexadecimal digits
    hex         DB      "0123456789ABCDEF"
    convert     DB      "You pressed the key with ASCII code "
    key         DB      ?,?,"h",13,10,"$"
                .CODE
                .
                .
                .
                mov     ah,8               ; Get a key in AL
                int     21h                ; Call DOS
                mov     bx,OFFSET hex      ; Load table address
                mov     ah,al              ; Save a copy in high byte
                and     al,00001111b       ; Mask out top character
                xlat                       ; Translate
                mov     key[1],al          ; Store the character
                mov     cl,12              ; Load shift count
                shr     ax,cl              ; Shift high character into position
                xlat                       ; Translate
                mov     key,al             ; Store the character
                mov     dx,OFFSET convert  ; Load message
                mov     ah,9               ; Display it
                int     21h                ; Call DOS

    This example looks up hexadecimal characters in a table in order to
    convert an eight-bit binary number to a string representing a hexadecimal
    number.


13.1.4  Transferring Flags

    The 8086-family processors provide instructions for loading and storing
    flags in the AH register.

    Syntax

    LAHF
    SAHF

    The status of the lower byte of the flags register can be saved to the AH
    register with LAHF and then later restored with SAHF. If you need to save
    and restore the entire flags register, use PUSHF and POPF, as described in
    Section 13.4.3, "Saving Flags on the Stack."

    SAHF is often used with a coprocessor to transfer coprocessor control
    flags to processor control flags. Section 17.7, "Controlling Program
    Flow," explains and illustrates this technique.


13.2  Converting between Data Sizes

    Since moving data between registers of different sizes is illegal, you
    must take special steps if you need to extend a register value to a larger
    register or register pair.

    The procedure is different for signed and unsigned values. The processor
    cannot tell the difference between signed and unsigned numbers; the
    programmer has to understand this difference and program accordingly.


13.2.1  Extending Signed Values

    The CBW (Convert Byte to Word) and CWD (Convert Word to Doubleword)
    instructions are provided to sign-extend values. Sign-extending means
    copying the sign bit of the unextended operand to all bits of the extended
    operand.

    Syntax

    CBW
    CWD

    The CBW instruction converts an 8-bit signed value in AL to a 16-bit
    signed value in AX. The CWD instruction is similar except that it
    sign-extends a 16-bit value in AX to a 32-bit value in the DX:AX register
    pair. Both instructions work only on values in the accumulator register.

    Example

                .DATA
    mem8        DB      -5
    mem16       DW      -5
                .CODE
                .
                .
                .
                mov     al,mem8    ; Load 8-bit -5 (FBh)
                cbw                ; Convert to 16-bit -5 (FFFBh) in AX

                mov     ax,mem16   ; Load 16-bit -5 (FFFBh)
                cwd                ; Convert to 32-bit -5 (FFFF:FFFBh)
                                    ;   in DX:AX


13.2.2  Extending Unsigned Values

    To extend unsigned numbers, set the value of the upper register to 0.

    Example

                .DATA
    mem8        DB      251
    mem16       DW      251
                .CODE
                .
                .
                .
                mov     al,mem8    ; Load 251 (FBh) from 8-bit memory
                xor     ah,ah      ; Zero upper half (AH)

                mov     ax,mem16   ; Load 251 (FBh) from 16-bit memory
                xor     dx,dx      ; Zero upper half (DX)


13.3  Loading Pointers

    The 8086-family processors provide several instructions for loading
    pointer values into registers or register pairs. They can be used to load
    either near or far pointers.


13.3.1  Loading Near Pointers

    The LEA instruction loads a near pointer into a specified register.

    Syntax

    LEA register,memory

    The destination register may be any general-purpose register. The source
    operand may be any memory operand. The effective address of the source
    operand is placed in the destination register.

    The LEA instruction can be used to calculate the effective address of a
    direct memory operand, but this is usually not efficient, since the
    address of a direct memory operand is a constant known at assembly time.
    For example, the following statements have the same effect, but the second
    version is faster:

                lea     dx,string        ; Load effective address - slow
                mov     dx,OFFSET string ; Load offset - fast

    The LEA instruction is more useful for calculating the address of indirect
    memory operands:

                lea     dx,string[si]    ; Load effective address


13.3.2  Loading Far Pointers

    The LDS and LES instructions load far pointers.

    Syntax

    LDS register,memory
    LES register,memory

    The memory address being pointed to is specified in the source operand,
    and the register where the offset will be stored is specified in the
    destination operand.

    The address must be stored in memory with the segment in the upper word
    and the offset in the lower word. The segment register where the segment
    will be stored is specified in the instruction name. For example, LDS puts
    the segment in DS, and LES puts the segment in ES. The instructions are
    often used with string instructions, as explained in Chapter 16,
    "Processing Strings."

    Example

                .DATA
    string      DB      "This is a string."
    fpstring    DD      string             ; Far pointer to string
    pointers    DD      100 DUP (?)
                .CODE
                .
                .
                .
                les     di,fpstring        ; Put address in ES:DI pair
                lds     si,pointers[bx]    ; Put address in DS:SI pair


13.4  Transferring Data to and from the Stack

    A "stack" is an area of memory for storing temporary data. Unlike other
    segments in which data is stored starting from low memory, data on the
    stack is stored in reverse order starting from high memory.

    Initially, the stack is an uninitialized segment of a finite size. As data
    is added to the stack at run time, the stack grows downward from high
    memory to low memory. When items are removed from the stack, it shrinks
    upward from low memory to high memory.

    The stack has several purposes in the 8086-family processors. The CALL,
    INT, RET, and IRET instructions automatically use the stack to store the
    calling addresses of procedures and interrupts (see Sections 15.3, "Using
    Procedures," and 15.4, "Using Interrupts"). You can also use the PUSH and
    POP instructions and their variations to store values on the stack.


13.4.1  Pushing and Popping

    In 8086-family processors, the SP (Stack Pointer) register always points
    to the current location in the stack. The PUSH and POP instructions use
    the SP register to keep track of the current position in the stack.

    The values pointed to by the BP and SP registers are relative to the SS
    (Stack Segment) register. The BP register is often used to point to the
    base of a frame of reference (a stack frame) within the stack.

    Syntax

    PUSH {register | memory}
    POP {register | memory}
    PUSH immediate                 (80186-80386 only)

    The PUSH instruction is used to store a two-byte operand on the stack. The
    POP instruction is used to retrieve a previously pushed value. When a
    value is pushed onto the stack, the SP register is decreased by 2. When a
    value is popped off the stack, the SP register is increased by 2. Although
    the stack always contains word values, the SP register points to bytes.
    Thus, SP changes in multiples of 2.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  The 8088 and 8086 processors differ from later Intel processors in
    how they push and pop the SP register. If you give the statement push sp
    with the 8088 or 8086, the word pushed will be the word in SP after the
    push operation.
    ──────────────────────────────────────────────────────────────────────────

    Figure 13.1 illustrates how pushes and pops change the SP register.

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 13.4.1 of the manual               │
    └────────────────────────────────────────────────────────────────────────┘

    The PUSH and POP instructions are almost always used in pairs. Words are
    popped off the stack in reverse order from the order in which they are
    pushed onto the stack. You should normally do the same number of pops as
    pushes to return the stack to its original status. However, it is possible
    to return the stack to its original status by subtracting the correct
    number of words from the SP register.

    Values on the stack can be accessed by using indirect memory operands with
    BP as the base register.

    Example

                mov     bp,sp              ; Set stack frame
                push    ax                 ; Push first;  SP = BP + 2
                push    bx                 ; Push second; SP = BP + 4
                push    cx                 ; Push third;  SP = BP + 6
                .
                .
                .
                mov     ax,[bp+6]          ; Put third in AX
                mov     bx,[bp+4]          ; Put second in BX
                mov     cx,[bp+2]          ; Put first in CX
                .
                .
                .
                sub     sp,6               ; Restore stack pointer
                                            ;   two bytes per push

    80186/286/386 Only

    Starting with the 80186 processor, the PUSH instruction can be given with
    an immediate operand. For example, the following statement is legal on the
    80186, 80286, and 80386 processors:

                push    7                  ; 3 clocks on 80286

    This statement is faster than the following equivalent statements, which
    are required on the 8088 or 8086:

                mov     ax,7               ; 2 clocks on 80286
                push    ax                 ; 3 clocks on 80286


13.4.2  Using the Stack

    The stack can be used to store temporary data. For example, in the
    Microsoft calling convention, the stack is used to pass arguments to a
    procedure. The arguments are pushed onto the stack before the call. The
    procedure retrieves and uses them. Then the stack is restored to its
    original position at the end of the procedure. The stack can also be used
    to store variables that are local to a procedure. Both of these techniques
    are discussed in Section 15.3, "Using Procedures."

    Another common use of the stack is to store temporary data when there are
    no free registers available or when a particular register must hold more
    than one value. For example, the CX register usually holds the count for
    loops. If two loops are nested, the outer count is loaded into CX at the
    start. When the inner loop starts, the outer count is pushed onto the
    stack and the inner count loaded into CX. When the inner loop finishes,
    the original count is popped back into CX.

    Example

                mov     cx,10      ; Load outer loop counter
    outer:      .
                .                  ; Start outer loop task
                .
                push    cx         ; Save outer loop value
                mov     cx,20      ; Load inner loop counter
    inner:      .
                .                  ; Do inner loop task
                .
                loop    inner
                pop     cx         ; Restore outer loop counter
                .
                .                  ; Continue outer loop task
                .
                loop    outer


13.4.3  Saving Flags on the Stack

    Flags can be pushed and popped onto the stack using the PUSHF and POPF
    instructions.

    Syntax

    PUSHF
    POPF

    These instructions are sometimes used to save the status of flags before a
    procedure call and then to restore the same status after the procedure.
    They can also be used within a procedure to save and restore the flag
    status of the caller.

    Example

                pushf
                call    systask
                popf


13.4.4  Saving All Registers on the Stack

    80186/286/386 Only

    Starting with the 80186 processor, the PUSHA and POPA instructions were
    implemented to push or pop all the general-purpose registers with one
    instruction.

    Syntax

    PUSHA
    POPA

    These instructions can be used to save the status of all registers before
    a procedure call and then to restore them after the return. Using PUSHA
    and POPA instructions is significantly faster and takes fewer bytes of
    code than pushing and popping each register individually.

    The registers are pushed in the following order: AX, CX, DX, BX, SP, BP,
    SI, and DI. The SP word pushed is the value before the first register is
    pushed. The registers are popped in the opposite order.

    Example

                pusha
                call    systask
                popa


13.5  Transferring Data to and from Ports

    "Ports" are the gateways between hardware devices and the processor. Each
    port has a unique number through which it can be accessed. Ports can be
    used for low-level communication with devices, such as disks, the video
    display, or the keyboard. The OUT instruction is used to send data to a
    port; the IN instruction receives data from a port.

    Syntax

    IN accumulator,{portnumber | DX}
    OUT {portnumber | DX},accumulator

    When using the IN and OUT instructions, the number of the port can either
    be an eight-bit immediate value or the DX register. You must use DX for
    ports with a number higher than 256. The value to be received from the
    port must be in the accumulator register (AX for word values or AL for
    byte values).

    When using the IN instruction, the number of the port is given as the
    source operand and the value to be sent to the port is the destination
    operand. When using the OUT instruction, the number of the port is given
    as the destination operand and the value to be sent to the port is the
    source operand.

    In applications programming, most communication with hardware is done with
    DOS or ROM-BIOS calls. Ports are more often used in systems programming.
    Since systems programming is beyond the scope of this manual and since
    ports differ depending on hardware, the IN and OUT instructions are not
    explained in detail here.

    Example

    ; Actual values are hardware dependent
    sound       EQU     61h        ; Port to chip that controls speaker
    timer       EQU     42h        ; Port to chip that pulses speaker
    on          EQU     00000011b  ; Bits 0 and 1 turn on speaker

                in      al,sound   ; Get current port setting
                or      al,on      ; Turn on speaker and connect timer
                out     sound,al   ; Put value back in port

                mov     al,50      ; Start at 50
    sounder:    out     timer,al   ; Send byte to timer port...

                mov     cx,2000    ; Loop 2000 times to delay
    hold:       loop    hold

                dec     al         ; Go down one step
                jnz     sounder    ; Repeat for each step

                in      al,sound   ; Get port value
                and     al,NOT on  ; Turn it back off
                out     sound,al   ; Put it back in port

    This example creates a sound of ascending frequency on the IBM PC and
    IBM-compatible computers. The technique of making sound or the port values
    used may be different on other hardware.

    80186/286/386 Only

    Starting with the 80186 processor, instructions were implemented to send
    strings of data to and from ports. The instructions are INS, INSB, INSW,
    OUTS, OUTSB, and OUTSW. The operation of these instructions is much like
    the operation of other string instructions. They are discussed in Section
    16.7, "Transferring Strings to and from Ports."



────────────────────────────────────────────────────────────────────────────
Chapter 14:  Doing Arithmetic and Bit Manipulations


    The 8086-family processors provide instructions for doing calculations on
    byte, word, and doubleword values. Operations include addition,
    subtraction, multiplication, and division. You can also do calculations at
    the bit level. This includes the AND, OR, XOR, and NOT logical operations.
    Bits can also be shifted or rotated to the right or left.

    This chapter tells you how to use the instructions that do calculations on
    numbers and bits.


14.1  Adding

    The ADD, ADC, and INC instructions are used for adding and incrementing
    values.

    Syntax

    ADD {register | memory},{register | memory | immediate}
    ADC {register | memory},{register | memory | immediate}
    INC {register | memory}

    These instructions can work directly on 8-bit or 16-bit values. They can
    also be used in combination to do calculations on values that are too
    large to be held in a single register (such as 32-bit values). When used
    with AAA and DAA, they can be used to do calculations on binary coded
    decimal (BCD) numbers, as described in Section 14.5.


14.1.1  Adding Values Directly

    The ADD and INC instructions are used for adding to values in registers or
    memory.

    The INC instruction takes a single register or memory operand. The value
    of the operand is incremented. The value is treated as an unsigned
    integer, so the carry flag is not updated for signed carries.

    The ADD instruction adds values given in source and destination operands.
    The destination can be either a register or a memory operand. Its contents
    will be destroyed by the operation. The source operand can be an
    immediate, memory, or register operand. Since memory-to-memory operations
    are never allowed, the source and destination operands can never both be
    memory operands.

    The result of the operation is stored in the source operand. The operands
    can be either 8-bit or 16-bit, but both must be the same size.

    An addition operation can be interpreted as addition of either signed
    numbers or unsigned numbers. It is the programmer's responsibility to
    decide how the addition should be interpreted and to take appropriate
    action if the sum is too large for the destination operand. When an
    addition overflows the possible range for signed numbers, the overflow
    flag is set. When an addition overflows the range for unsigned numbers,
    the carry flag is set.

    There are two ways to take action on an overflow: you can use the JO or
    JNO instruction to direct program flow to or around instructions that
    handle the overflow (see Section 15.1.2.3, "Testing Bits and Jumping").
    You can also use the INTO instruction to trigger the overflow interrupt
    (interrupt 4) if the overflow flag is set. This requires writing an
    interrupt handler for interrupt 4, since the DOS overflow routine simply
    returns without taking any action. Section 15.4.2, "Defining and
    Redefining Interrupt Routines," gives a sample of an overflow interrupt
    handler.

    Example

                .DATA
    mem8        DB      39
                .CODE
                .
                .
                .                  ;                  unsigned  signed
                mov     al,26      ; Start with register   26     26
                inc     al         ; Increment              1      1
                add     al,76      ; Add immediate       + 76     76
                                    ;                     ----   ----
                                    ;                      103    103
                add     al,mem8    ; Add memory          + 39     39
                                    ;                     ----   ----
                mov     ah,al      ; Copy to AH           142   -114+overflow
                add     al,ah      ; Add register         142
                                    ;                     ----
                                    ;                       28+carry

    This example shows 8-bit addition. When the sum exceeds 127, the overflow
    flag is set. A JO (Jump On Overflow) or INTO (Interrupt On Overflow)
    instruction at this point could transfer control to error-recovery
    statements. When the sum exceeds 255, the carry flag is set. A JC (Jump On
    Carry) instruction at this point could transfer control to error-recovery
    statements.


14.1.2  Adding Values in Multiple Registers

    The ADC (Add with Carry) instruction makes it possible to add numbers
    larger than can be held in a single register.

    The ADC instruction adds two numbers in the same fashion as the ADD
    instruction, except that the value of the carry flag is included in the
    addition. If a previous calculation has set the carry flag, then 1 will be
    added to the sum of the numbers. If the carry flag is not set, the ADC
    instruction has the same effect as the ADD instruction.

    When adding numbers in multiple registers, the carry flag should be
    ignored for the least-significant portion, but taken into account for the
    most-significant portion. This can be done by using the ADD instruction
    for the least-significant portion and the ADC instruction for
    most-significant portion.

    You can add and carry repeatedly inside a loop for calculations that
    require more than two registers. Use the ADC instruction in each
    iteration, but turn off the carry flag with the CLC (Clear Carry Flag)
    instruction before entering the loop so that it will not be used for the
    first iteration. You could also do the first add outside the loop.

    Example

                .DATA
    mem32       DD      316423
                .CODE
                .
                .
                .
                mov     ax,43981             ; Load immediate     43981
                sub     dx,dx                ;   into DX:AX
                add     ax,WORD PTR mem32[0] ; Add to both     + 316423
                adc     dx,WORD PTR mem32[2] ;   memory words    ------
                                            ; Result in DX:AX   360404


14.2  Subtracting

    The SUB, SBB, DEC, and NEG instructions are used for subtracting and
    decrementing values.

    Syntax

    SUB {register | memory},{register | memory | immediate}
    SBB {register | memory},{register | memory | immediate}
    DEC {register | memory}
    NEG {register | memory}

    These instructions can work directly on 8-bit or 16-bit values. They can
    also be used in combination to do calculations on values too large to be
    held in a single register. When used with AAA and DAA, they can be used to
    do calculations on BCD numbers, as described in Section 14.5,
    "Calculating with Binary Coded Decimals."


14.2.1  Subtracting Values Directly

    The SUB and DEC instructions are used for subtracting from values in
    registers or memory. A related instruction, NEG (Negate), reverses the
    sign of a number.

    The DEC instruction takes a single register or memory operand. The value
    of the operand is decremented. The value is treated as an unsigned
    integer, so the carry flag is not updated for signed borrows.

    The NEG instruction takes a single register or memory operand. The sign of
    the value of the operand is reversed. The NEG instruction should only be
    used on signed numbers.

    The SUB instruction subtracts the values given in the source operand from
    the value of the destination operand. The destination can be either a
    register or a memory operand. It will be destroyed by the operation. The
    source operand can be an immediate, memory, or register operand. It will
    not be destroyed by the operation. Since memory-to-memory operations are
    never allowed, the source and destination operands cannot both be memory
    operands.

    The result of the operation is stored in the source operand. The operands
    can be either 8-bit or 16-bit, but both must be the same size.

    A subtraction operation can be interpreted as subtraction of either signed
    numbers or unsigned numbers. It is the programmer's responsibility to
    decide how the subtraction should be interpreted and to take appropriate
    action if the result is too small for the destination operand. When a
    subtraction overflows the possible range for signed numbers, the carry
    flag is set. When a subtraction underflows the range for unsigned numbers
    (becomes negative), the sign flag is set.

    Example

                .DATA
    mem8        DB      122
                .CODE
                .
                .
                .                  ;                   signed  unsigned
                mov     al,95      ; Load register         95     95
                dec     al         ; Decrement          -   1  -   1
                sub     al,23      ; Subtract immediate -  23  -  23
                                    ;                     ----   ----
                                    ;                       71     71
                sub     al,mem8    ; Subtract memory    - 122  - 122
                                    ;                     ----   ----
                                    ;                    -  51    205+sign

                mov     ah,119     ; Load register        119
                sub     al,ah      ;   and subtract     -  51
                                    ;                     ----
                                    ;                       86+overflow

    This example shows 8-bit subtraction. When the result goes below 0, the
    sign flag is set. A JS (Jump On Sign) instruction at this point could
    transfer control to error-recovery statements. When the result goes below
    -128, the carry flag is set. A JC (Jump On Carry) instruction at this
    point could transfer control to error-recovery statements.


14.2.2  Subtracting with Values in Multiple Registers

    The SBB (Subtract with Borrow) instruction makes it possible to subtract
    from numbers larger than can be held in a single register.

    The SBB instruction subtracts two numbers in the same fashion as the SUB
    instruction except that the value of the carry flag is included in the
    subtraction. If a previous calculation has set the carry flag, then 1 will
    be subtracted from the result. If the carry flag is not set, the SBB
    instruction has the same effect as the SUB instruction.

    When subtracting numbers in multiple registers, the carry flag should be
    ignored for the least-significant portion, but taken into account for the
    most-significant portion. This can be done by using the SUB instruction
    for the least-significant portion and the SBB instruction for
    most-significant portions.

    You can subtract and borrow repeatedly inside a loop for calculations that
    require more than two registers. Use the SBB instruction in each
    iteration, but turn off the carry flag with the CLC (Clear Carry Flag)
    instruction before entering the loop so that it will not be used for the
    first iteration. You could also do the first subtraction outside the loop.

    Example

                .DATA
    mem32a     DD      316423
    mem32b     DD      156739
                .CODE
                .
                .
                .
                mov     ax,WORD PTR mem32a[0]  ; Load mem32        316423
                mov     dx,WORD PTR mem32a[2]  ;   into DX:AX
                sub     ax,WORD PTR mem32b[0]  ; Subtract low      156739
                sbb     dx,WORD PTR mem32b[2]  ;   then high       ------
                                                ; Result in DX:AX   159684


14.3  Multiplying

    The MUL and IMUL instructions are used to multiply numbers. The MUL
    instruction should be used for unsigned numbers; the IMUL instruction
    should be used for signed numbers. This is the only difference between the
    two.

    Syntax

    MUL {register | memory}
    IMUL {register | memory}

    The multiply instructions require that one of the factors be in the
    accumulator register (AL for 8-bit numbers or AX for 16-bit numbers). This
    register is implied; it should not be specified in the source code. Its
    contents will be destroyed by the operation.

    The other factor to be multiplied must be specified in a single register
    or memory operand. The operand will not be destroyed by the operation,
    unless it is DX, AX, AH, or AL. A number may be squared by loading it into
    the accumulator, and then executing a multiplication instruction with the
    accumulator as the operand.

    Note that multiplying two 8-bit numbers will produce a 16-bit number. If
    the product is a 16-bit number, it will be placed in AX and the overflow
    and carry flags will be set.

    Similarly, multiplying two 16-bit numbers will produce a 32-bit number in
    the DX:AX register pair. If the product is a 32-bit number, the
    least-significant bits will be in AX, the most-significant bits will be in
    DX, and the overflow and carry flags will be set.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  Multiplication is one of the slower operations on 8086-family
    processors (especially the 8086 and 8088). Multiplying by certain common
    constants is often faster when done by shifting bits (see Section 14.7.1,
    "Multiplying and Dividing by Constants").
    ──────────────────────────────────────────────────────────────────────────

    Examples

                .DATA
    mem16       DW      -30000
                .CODE
                .
                .
                .                  ; 8-bit unsigned multiply
                mov     al,23      ; Load AL                   23
                mov     bl,24      ; Load BL                 * 24
                mul     bl         ; Multiply BL            -----
                                    ; 16-bit signed multiply
                mov     ax,50      ; Load AX                   50
                                    ;                       -30000
                imul    mem16      ; Multiply memory        -----
                                    ; Product in DX:AX    -1500000
                                    ;   overflow and carry set

    80186/286/386 Only

    Starting with the 80186 processor, the IMUL instruction has two additional
    syntaxes that allow for 16-bit multiples that produce a 16-bit product.

    Syntax

    IMUL register16, immediate
    IMUL register16, memory16, immediate

    You can specify a 16-bit immediate value as the source instruction and a
    word register as the destination operand. The product appears in the
    destination operand. The 16-bit result will be placed in the destination
    operand. If the product is too large to fit in 16 bits, the carry and
    overflow flags will be set. In this context, IMUL can be used for either
    signed or unsigned multiplication, since the 16-bit product is the same.

    You can also specify three operands for IMUL. The first operand must be a
    16-bit register operand, the second a 16-bit memory operand, and the third
    a 16-bit immediate operand. The second and third operands are multiplied
    and the product stored in the first operand.

    With both of these syntaxes, the carry and overflow flags will be set if
    the product is too large to fit in 16 bits. The IMUL instruction with
    multiple operands can be used for either signed or unsigned
    multiplication, since the 16-bit product is the same in either case. If
    you need to get a 32-bit result, you must use the single-operand version
    of MUL or IMUL.

    Examples

                imul    dx,456     ; Multiply DX times 456
                imul    ax,[bx],6  ; Multiply the value pointed to by BX
                                    ;   times 6 and put the result in AX


14.4  Dividing

    The DIV and IDIV instructions are used to divide integers. Both a quotient
    and a remainder are returned. The DIV instruction should be used for
    unsigned integers; the IDIV instruction should be used for signed
    integers. This is the only difference between the two.

    Syntax

    DIV {register | memory}
    IDIV {register | memory}

    To divide a 16-bit number by an 8-bit number, put the number to be divided
    (the dividend) in the AX register. The contents of this register will be
    destroyed by the operation. Specify the dividing number (the divisor) in
    any 8-bit memory or register operand (except AL or AH). This operand will
    not be changed by the operation. After the multiplication, the result
    (quotient) will be in AL and the remainder will be in AH.

    To divide a 32-bit number by a 16-bit number, put the dividend in the
    DX:AX register pair. The least-significant bits go in AX. The contents of
    these registers will be destroyed by the operation. Specify the divisor in
    any 16-bit memory or register operand (except AX or DX). This operand will
    not be changed by the operation. After the division, the quotient will be
    in AX and the remainder will be in DX.

    To divide a 16-bit number by a 16-bit number, you must first sign-extend
    or zero-extend (see Section 13.2, "Converting between Data Sizes") the
    dividend to 32 bits; then divide as described above. You cannot divide a
    32-bit number by another 32-bit number.

    If division by zero is specified, or if the quotient exceeds the capacity
    of its register (AL or AX), the processor automatically generates an
    interrupt 0. By default, the program terminates and returns to DOS. This
    problem can be handled in two ways: check the divisor before division and
    go to an error routine if you can determine it to be invalid, or write
    your own interrupt routine to replace the processor's interrupt 0 routine.
    See Section 15.4 for more information on interrupts.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  Division is one of the slower operations on 8086-family processors
    (especially the 8086 and 8088). Dividing by common constants that are
    powers of two is often faster when done by shifting bits, as described in
    Section 14.7.1, "Multiplying and Dividing by Constants."
    ──────────────────────────────────────────────────────────────────────────

    Examples

                .DATA

    mem16       DW      -2000
    mem32       DD      500000
                .CODE
                .
                .                            ; Divide 16-bit unsigned by 8-bit
                .
                mov     ax,700               ; Load dividend          700
                mov     bl,36                ; Load divisor      DIV   36
                div     bl                   ; Divide BL            -----
                                            ; Quotient in AL          19
                                            ; Remainder in AH            16

                                            ; Divide 32-bit signed by 16-bit

                mov     ax,WORD PTR mem32[0] ; Load into DX:AX
                mov     dx,WORD PTR mem32[2] ;                     500000
                idiv    mem16                ;                  DIV -2000
                                            ; Divide memory       ------
                                            ; Quotient in AX        -250
                                            ; Remainder in DX             0

                                            ; Divide 16-bit signed by 16-bit

                mov     ax,WORD PTR mem16    ; Load into AX         -2000
                cwd                          ; Extend to DX:AX
                mov     bx,-421              ;                   DIV -421
                idiv    bx                   ; Divide by BX         -----
                                            ; Quotient in AX           4
                                            ; Remainder in DX            -316


14.5  Calculating with Binary Coded Decimals

    The 8086-family processors provide several instructions for adjusting BCD
    numbers. The BCD format is seldom used for applications programming in
    assembly language. Programmers who wish to use BCD numbers usually use a
    high-level language. However, BCD instructions are used to develop
    compilers, function libraries, and other systems tools.

    Since systems programming is beyond the scope of this manual, this section
    provides only a brief overview of calculations on the two kinds of BCD
    numbers, unpacked and packed.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  Intel mnemonics use the term "ASCII" to refer to unpacked BCD
    numbers and "decimal" to refer to packed BCD numbers. Thus AAA (ASCII
    Adjust After Addition) adjusts unpacked numbers, while DAA (Decimal Adjust
    After Addition) adjusts packed numbers.
    ──────────────────────────────────────────────────────────────────────────


14.5.1  Unpacked BCD Numbers

    Unpacked BCD numbers are made up of bytes containing a single decimal
    digit in the lower four bits of each byte. The 8086-family processors
    provide instructions for adjusting unpacked values with the four
    arithmetic operations──addition, subtraction, multiplication, and
    division.

    To do arithmetic on unpacked BCD numbers, you must do the eight-bit
    arithmetic calculations on each digit separately. The result should always
    be in the AL register. After each operation, use the corresponding BCD
    instruction to adjust the result. The ASCII-adjust instructions do not
    take an operand. They always work on the value in the AL register.

    When a calculation using two one-digit values produces a two-digit result,
    the ASCII-adjust instructions put the first digit in AL and the second in
    AH. If the digit in AL needs to carry to or borrow from the digit in AH,
    the carry and auxiliary carry flags are set.

    The four ASCII-adjust instructions are described below:

    Instruction         Description
    ──────────────────────────────────────────────────────────────────────────
    AAA                 Adjusts after an addition operation. For example, to
                        add 9 and 3, use the following lines:


    mov     ax,9    ; Load 9
    mov     bx,3    ;   and 3 as unpacked BCD
    add     al,bl   ; Add 09h and 03h to get 0Ch
    aaa             ; Adjust 0Ch in AL to 02h,
                    ;   increment AH to 01h, set carry
                    ; Result 12 unpacked BCD in AX

    AAS                 Adjusts after a subtraction operation. For example, to
                        subtract 4 from 13, use the following lines:


    mov     ax,103h ; Load 13
    mov     bx,4    ;   and 4 as unpacked BCD
    sub     al,bl   ; Subtract 4 from 3 to get FFh (-1)
    aas             ; Adjust 0FFh in AL to 9,
                    ;   decrement AH to 0, set carry
                    ; Result 9 unpacked BCD in AX

    AAM                 Adjusts after a multiplication operation. Always use
                        MUL, not IMUL. For example, to multiply 9 times 3, use
                        the following lines:


    mov     ax,903h ; Load 9 and 3 as unpacked BCD
    mul     ah      ; Multiply 9 and 3 to get 1Bh
    aam             ; Adjust 1Bh in AL
                    ;   to get 27 unpacked BCD in AX

    AAD                 Adjusts before a division operation. Unlike other BCD
                        instructions, this one converts a BCD value to a
                        binary value before the operation. After the
                        operation, the quotient must still be adjusted by
                        using AAM. For example, to divide 25 by 2, use the
                        following lines:


    mov     ax,205h ; Load 25
    mov     bl,2    ;   and 2 as unpacked BCD
    aad             ; Adjust 0205h in AX
                    ;   to get 19h in AX
    div     bl      ; Divide by 2 to get
                    ;   quotient 0Ch in AL
                    ;   remainder 1 in AH
    aam             ; Adjust 0Ch in AL
                    ;   to 12 unpacked BCD in AX
                    ;   (remainder destroyed)

    Notice that the remainder is lost. If you need the remainder, save it in
    another register before adjusting the quotient. Then move it back to AL
    and adjust if necessary.


    Multidigit BCD numbers are usually processed in loops. Each digit is
    processed and adjusted in turn. In addition to their use for processing
    unpacked BCD numbers, the ASCII-adjust instructions can be used in
    routines that convert between different number bases.

    Example

                mov     al,79      ; Load 79 (04Fh)
                aam                ; Adjust to BCD (0709h)
                add     ah,'0'     ; Adjust to ASCII characters
                add     al,'0'     ;   (3739h)
                mov     dx,ax      ; Copy to DX
                xchg    dl,dh      ; Trade for most significant digit
                mov     ah,2       ; DOS display character function
                int     21h        ; Call DOS
                mov     dl,dh      ; Load least significant digit
                int     21h        ; Call DOS

    The example converts an eight-bit binary number to hexadecimal and
    displays it on the screen. The routine could be enhanced to handle large
    numbers.


14.5.2  Packed BCD Numbers

    Packed BCD numbers are made up of bytes containing two decimal digits: one
    in the upper four bits and one in the lower four bits. The 8086-family
    processors provide instructions for adjusting packed BCD numbers after
    addition and subtraction. You must write your own routines to adjust for
    multiplication and division.

    To do arithmetic on packed BCD numbers, you must do the eight-bit
    arithmetic calculations on each byte separately. The result should always
    be in the AL register. After each operation, use the corresponding BCD
    instruction to adjust the result. The decimal-adjust instructions do not
    take an operand. They always work on the value in the AL register.

    Unlike the ASCII-adjust instructions, the decimal-adjust instructions
    never affect AH. The auxiliary carry flag is set if the digit in the lower
    four bits carries to or borrows from the digit in the upper four bits. The
    carry flag is set if the digit in the upper four bits needs to carry to or
    borrow from another byte.

    The decimal-adjust instructions are described below:

    Instruction         Description
    ──────────────────────────────────────────────────────────────────────────
    DAA                 Adjusts after an addition operation. For example, to
                        add 88 and 33, use the following lines:


                mov     ax,8833h ; Load 88 and 33 as packed BCD
                add     al,ah    ; Add 88 and 33 to get 0BBh
                daa              ; Adjust 0BBh to 121 packed BCD:
                                ;   1 in carry and 21 in AL

    DAS                 Adjusts after a subtraction operation. For example, to
                        subtract 38 from 83, put 83 in AL and 38 in AH in
                        packed BCD format. Then use the following lines to
                        subtract them:


                mov     ax,3883h ; Load 83 and 38 as packed BCD
                sub     al,ah    ; Subtract 38 from 83 to get 04Bh
                das              ; Adjust 04Bh to 45 packed BCD:
                                ;   0 in carry and 45 in AL


    Multidigit BCD numbers are usually processed in loops. Each byte is
    processed and adjusted in turn.


14.6  Doing Logical Bit Manipulations

    The logical instructions do Boolean operations on individual bits. The
    AND, OR, XOR, and NOT operations are supported by the 8086-family
    instructions.

    AND compares two bits and sets the result if both bits are set. OR
    compares two bits and sets the result if either bit is set. XOR compares
    two bits and sets the result if the bits are different. NOT reverses a
    single bit. Table 14.1 shows a truth table for the logical operations.

    Table 14.1 Values Returned by Logical Operations

    X           Y           NOT X       X AND Y     X OR Y      X XOR Y
    ──────────────────────────────────────────────────────────────────────────
    1           1           0           1           1           0

    1           0           0           0           1           1

    0           1           1           0           1           1

    0           0           1           0           0           0

    ──────────────────────────────────────────────────────────────────────────


    The syntax of the AND, OR, and XOR instructions is the same. The only
    difference is the operation performed. For all instructions, the target
    value to be changed by the operation is placed in one operand. A mask
    showing the positions of bits to be changed is placed in the other
    operand. The format of the mask differs for each logical instruction. The
    destination operand can be register or memory. The source operand can be
    register, memory, or immediate. However, the source and destination
    operands cannot both be memory operands.

    Either of the values can be in either operand. However, the source operand
    will be unchanged by the operation, while the destination operand will be
    destroyed by it. Your choice of operands depends on whether you want to
    save a copy of the mask or of the target value.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  The logical instructions should not be confused with the logical
    operators. They specify completely different behavior. The instructions
    control run-time bit calculations. The operators control assembly-time bit
    calculations. Although the instructions and operators have the same name,
    the assembler can distinguish them from context.
    ──────────────────────────────────────────────────────────────────────────


14.6.1  AND Operations

    The AND instruction does an AND operation on the bits of the source and
    destination operands. The original destination operand is replaced by the
    resulting bits.

    Syntax

    AND {register | memory},{register | memory | immediate}

    The AND instruction can be used to clear the value of specific bits
    regardless of their current settings. To do this, put the target value in
    one operand and a mask of the bits you want to clear in the other. The
    bits of the mask should be 0 for any bit positions you want to clear and 1
    for any bit positions you want to remain unchanged.

    Example 1

                mov     ax,035h      ; Load value                  00110101
                and     ax,0FBh      ; Mask off bit 2          AND 11111011
                                    ;                             --------
                                    ; Value is now 31h            00110001
                and     ax,0F8h      ; Mask off bits 2,1,0     AND 11111000
                                    ;                             --------
                                    ; Value is now 30h            00110000

    Example 2

                mov     ah,7         ; Get character without echo
                int     21h
                and     al,11011111b ; Convert to uppercase by clearing bit 5
                cmp     al,'Y'       ; Is it Y?
                je      yes          ; If so, do Yes stuff
                .                    ;   else do No stuff
                .
    yes:        .

    Example 2 illustrates how to use the AND instruction to convert a
    character to uppercase. If the character is already uppercase, the AND
    instruction has no effect, since bit 5 is always clear in uppercase
    letters. If the character is lowercase, clearing bit 5 converts it to
    uppercase.


14.6.2  OR Operations

    The OR instruction does an OR operation on the bits of the source and
    destination operands. The original destination operand is replaced by the
    resulting bits.

    Syntax

    OR {register | memory},{register | memory | immediate}

    The OR instruction can be used to set the value of specific bits
    regardless of their current settings. To do this, put the target value in
    one operand and a mask of the bits you want to clear in the other. The
    bits of the mask should be 1 for any bit positions you want to set and 0
    for any bit positions you want to remain unchanged.

    Example

                mov     ax,035h    ; Move value to register      00110101
                or      ax,08h     ; Mask on bit 3            OR 00001000
                                    ;                             --------
                                    ; Value is now 3Dh            00111101
                or      ax,07h     ; Mask on bits 2,1,0       OR 00000111
                                    ;                             --------
                                    ; Value is now 3Fh            00111111

    Another common use for OR is to compare an operand to 0:

                or      bx,bx      ; Compare to 0
                                    ;   2 bytes, 2 clocks on 8088
                jg      positive   ; BX is positive
                jl      negative   ; BX is negative
                                    ; BX is zero

    The first statement has the same effect as the following statement, but is
    faster and smaller:

                cmp     bx,0       ; 3 bytes, 3 clocks on 8088


14.6.3  XOR Operations

    The XOR (Exclusive OR) instruction does an XOR operation on the bits of
    the source and destination operands. The original destination operand is
    replaced by the resulting bits.

    Syntax

    XOR {register | memory},{register | memory | immediate}

    The XOR instruction can be used to toggle the value of specific bits
    (reverse them from their current settings). To do this, put the target
    value in one operand and a mask of the bits you want to toggle in the
    other. The bits of the mask should be 1 for any bit positions you want to
    toggle and 0 for any bit positions you want to remain unchanged.

    Example

                mov     ax,035h    ; Move value to register      00110101
                xor     ax,08h     ; Mask on bit 3           XOR 00001000
                                    ;                             --------
                                    ; Value is now 3Dh            00111101
                xor     ax,07h     ; Mask on bits 2,1,0      XOR 00000111
                                    ;                             --------
                                    ; Value is now 3Ah            00111010

    Another common use for the XOR instruction is to set a register to 0:

                xor     cx,cx      ; 2 bytes, 3 clocks on 8088

    This sets the CX register to 0. When the XOR instruction takes identical
    operands, each bit cancels itself, producing 0. The statement

                mov     cx,0       ; 3 bytes, 4 clocks on 8088

    is the obvious way of doing this, but it is larger and slower. The
    statement

                sub     cx,cx      ; 2 bytes, 3 clocks on 8088

    is also smaller than the MOV version. The only advantage of using MOV is
    that it does not affect any flags.


14.6.4  NOT Operations

    The NOT instruction does a NOT operation on the bits of a single operand.
    It is used to toggle the value of all bits at once.

    Syntax

    NOT {register | memory}

    The NOT instruction is often used to reverse the sense of a bit mask from
    masking certain bits on to masking them off. Use the NOT instruction if
    the value of the mask is not known until run time; use the NOT operator
    (see Section 9.2.1.5, "Bitwise Logical Operators") if the mask is a
    constant.

    Example

                .DATA
    masker      DB      00010000b  ; Value may change at run time
                .CODE
                .
                .
                .
                mov     ax,0D743h  ; Load 0D7h to AH, 43h to AL  01000011
                or      al,masker  ; Turn on bit 4 in AL      OR 00010000
                                    ;                             --------
                                    ; Result is 53h               01010011

                not     masker     ; Reverse sense of mask       11101111
                and     ah,masker  ; Turn off bit 4 in AH    AND 11010111
                                    ;                             --------
                                    ; Result is 0C7h              11000111


14.7  Shifting and Rotating Bits

    The 8086-family processors provide a complete set of instructions for
    shifting and rotating bits. Bits can be moved right (toward the
    most-significant bits) or left (toward the 0 bit). Values shifted off the
    end of the operand go into the carry flag.

    Shift instructions move bits a specified number of places to the right or
    left. The last bit in the direction of the shift goes into the carry flag,
    and the first bit is filled with 0 or with the previous value of the first
    bit.

    Rotate instructions move bits a specified number of places to the right or
    left. For each bit rotated, the last bit in the direction of the rotate
    operation is moved into the first bit position at the other end of the
    operand. With some variations, the carry bit is used as an additional bit
    of the operand. Figure 14.1 illustrates the eight variations of shift and
    rotate instructions for eight-bit operands. Notice that SHL and SAL are
    identical.

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 14.7 of the manual                 │
    └────────────────────────────────────────────────────────────────────────┘

    Syntax

    SHL {register | memory},{CL | 1} SHR {register | memory},{CL | 1} SAL
    {register | memory},{CL | 1} SAR {register | memory},{CL | 1} ROL
    {register | memory},{CL | 1} ROR {register | memory},{CL | 1} RCL
    {register | memory},{CL | 1} RCR {register | memory},{CL | 1}

    The format of all the shift instructions is the same. The destination
    operand should contain the value to be shifted. It will contain the
    shifted operand after the instruction. The source operand should contain
    the number of bits to shift or rotate. It can be the immediate value 1 or
    the CL register. No other value or register is accepted on the 8088 and
    8086 processors.

    80186/286/386 Only

    Starting with the 80186 processor, eight-bit immediate values larger than
    1 can be given as the source operand for shift or rotate instructions, as
    shown below:

                shr     bx,4       ;  9 clocks, 3 bytes on 80286

    The following statements are equivalent if the program must run the 8088
    or 8086:

                mov     cl,4       ;  2 clocks, 3 bytes on 80286
                shr     bx,cl      ;  9 clocks, 2 bytes on 80286
                                    ; 11 clocks, 5 bytes


14.7.1  Multiplying and Dividing by Constants

    Shifting right by one has the effect of dividing by two; shifting left by
    one has the effect of multiplying by two. You can take advantage of this
    to do fast multiplication and division by common constants. The easiest
    constants are the powers of two. Shifting left twice multiplies by four,
    shifting left three times multiplies by eight, and so on.

    SHR is used to divide unsigned numbers. SAR can be used to divide signed
    numbers, but SAR rounds negative numbers down──IDIV always rounds up. Code
    that divides by using SAR must adjust for this difference. Multiplication
    by shifting is the same for signed and unsigned numbers, so either SAL or
    SHL can be used. Both instructions do the same operation.

    Since the multiply and divide instructions are the slowest on the 8088 and
    8086 processors, using shifts instead can often speed operations by a
    factor of 10 or more. For example, on the 8088 or 8086 processor, the
    following statements take four clocks:

                xor     ah,ah      ; Clear AH
                shl     ax,1       ; Multiply byte in AL by 2

    The following statements have the same effect, but take between 74 and 81
    clocks on the 8088 or 8086:

                mov     bl,2       ; Multiply byte in AL by 2
                mul     bl

    The same statements take 15 clocks on the 80286. See the on-line Help
    system for complete information on timing of instructions.

    Shift instructions can be combined with add or subtract instructions to do
    multiplication by common constants. These operations are best put in
    macros so that they can be changed if the constants in a program change.

    Example 1

    mul_10      MACRO   factor      ; Factor must be unsigned
                mov     ax,factor   ; Load into AX
                shl     ax,1        ; AX = factor * 2
                mov     bx,ax       ; Save copy in BX
                shl     ax,1        ; AX = factor * 4
                shl     ax,1        ; AX = factor * 8
                add     ax,bx       ; AX = (factor * 8) + (factor * 2)
                ENDM                ; AX = factor * 10

    Example 2

    div_u512    MACRO   dividend    ; Dividend must be unsigned
                mov     ax,dividend ; Load into AX
                shr     ax,1        ;   AX = dividend / 2 (unsigned)
                xchg    al,ah       ; xchg is like rotate right 8
                                    ;   AL = (dividend / 2) / 256
                cbw                 ; Clear upper byte
                ENDM                ;   AX = (dividend / 512


14.7.2  Moving Bits to the Least-Significant Position

    Sometimes a group of bits within an operand needs to be treated as a
    single unit──for example, to do an arithmetic operation on those bits
    without affecting other bits. This can be done by masking off the bits and
    then shifting them into the least-significant positions. After the
    arithmetic operation is done, the bits are shifted back to the original
    position and merged with the original bits by using OR. See Section
    7.2.5, "Using Record-Field Operands," for an example of this operation.


14.7.3  Adjusting Masks

    Masks for logical instructions can be shifted to new bit positions. For
    example, an operand that masks off a bit or group of bits can be shifted
    to move the mask to a different position.

    Example

                .DATA
    masker      DB      00000010b  ; Mask that may change at run time
                .CODE
                .
                .
                .
                mov     cl,2       ; Rotate two at a time
                mov     bl,57h     ; Load value to be changed    01010111b
                rol     masker,cl  ; Rotate two to left          00001000b
                or      bl,masker  ; Turn on masked values       ---------
                                    ; New value is 05Fh           01011111b
                rol     masker,cl  ; Rotate two more             00100000b
                or      bl,masker  ; Turn on masked values       ---------
                                    ; New value is 07Fh           01111111b

    This technique is useful only if the mask value is unknown until run time.


14.7.4  Shifting Multiword Values

    Sometimes it is necessary to shift a value that is too large to fit in a
    register. In this case, you can shift each part separately, passing the
    shifted bits through the carry flag. The RCR or RCL instructions must be
    used to move the carry value from the first register to the second.

    RCR and RCL can also be used to initialize the high or low bit of an
    operand. Since the carry flag is treated as part of the operand (like
    using a nine-bit operand), the flag value before the operation is crucial.
    The carry flag may be set by a previous instruction, or you can set it
    directly using the CLC (Clear Carry Flag), CMC (Complement Carry Flag),
    and STC (Set Carry Flag) instructions.

    Example

                .DATA
    mem32       DD      500000
                .CODE
                .
                .                            ; Divide 32-bit unsigned by 16
                .
                mov     cx,4                 ; Shift right 4        500000
    again:      shr     WORD PTR mem32[2],1  ; Shift into carry  DIV    16
                rcr     WORD PTR mem32[0],1  ; Rotate carry in      ------
                loop    again                ;                       31250



────────────────────────────────────────────────────────────────────────────
Chapter 15:  Controlling Program Flow


    The 8086-family processors provide a variety of instructions for
    controlling the flow of a program. The four major types of program-flow
    instructions are jumps, loops, procedure calls, and interrupts.

    This chapter tells you how to use these instructions and how to test
    conditions for the instructions that change program flow conditionally.


15.1  Jumping

    Jumps are the most direct method of changing program control from one
    location to another. At the internal level, jumps work by changing the
    value of the IP (Instruction Pointer) register from the address of the
    current instruction to a target address.

    Jumps can be short, near, or far. QuickAssembler automatically handles
    near and short jumps, although it may not always generate the most
    efficient code if the label being jumped to is a forward reference. The
    size and control of jumps are discussed in Section 9.4.1, "Forward
    References to Labels."


15.1.1  Jumping Unconditionally

    The JMP instruction is used to jump unconditionally to a specified
    address.

    Syntax

    JMP {register | memory}

    The operand should contain the address to be jumped to. Unlike conditional
    jumps, whose target address must be short (within 128 bytes), the target
    address for unconditional jumps can be short, near, or far. See Section
    9.4.1 for more information on specifying the distance for conditional
    jumps.

    If a conditional jump must be greater than 128 bytes, the construction
    must be reorganized. This can be done by reversing the sense of the
    conditional jump and adding an unconditional jump, as shown in Example 1.

    Example 1

                cmp     ax,7       ; If AX is 7 and jump is short
                je      close      ;   then jump close

                cmp     ax,6       ; If AX is 6 and jump is near
                jne     close      ;   then test opposite and skip over
                jmp     distant    ; Now jump
                .
                .
                .
    close:                         ; Less than 128 bytes from jump
                .
                .
                .
    distant:                       ; More than 128 bytes from jump

    An unconditional jump can be used as a form of conditional jump by
    specifying the address in a register or indirect memory operand. The value
    of the operand can be calculated at run time, based on user interaction or
    other factors. You can use indirect memory operands to construct jump
    tables that work like C switch statements, BASIC ON GOTO statements, or
    Pascal case statements.

    Example 2

                .CODE
                .
                .
                .
                jmp     process            ; Jump over data
    ctl_tbl     LABEL   WORD               ;   (required in overlay procedures)
                DW      extended           ; Null key (extended code)
                DW      ctrla              ; Address of CONTROL-A key routine
                DW      ctrlb              ; Address of CONTROL-B key routine
    process:    mov     ah,8h              ; Get a key
                int     21h
                cbw                        ; Convert AL to AX
                mov     bx,ax              ; Copy
                shl     bx,1               ; Convert to address

                jmp     ctl_tbl[bx]        ; Jump to key routine

    extended:   mov     ah,8h              ; Get second key of extended
                int     21h
                .                          ; Use another jump table
                .                          ;   for extended keys
                .
    ctrla:      .                          ; CONTROL-A routine here
                .
                .
                jmp     next

    ctrlb:      .                          ; CONTROL-B routine here
                .
                .
                jmp     next
                .
                .
    next:       .                          ; Continue

    In Example 2, an indirect memory operand points to addresses of routines
    for handling different keystrokes. Notice that the jump table is placed in
    the code segment. This technique is optional in stand-alone assembler
    programs, but it may be required for procedures called from some
    languages.


15.1.2  Jumping Conditionally

    The most common way of transferring control in assembly language is with
    conditional jumps. This is a two-step process: first test the condition,
    and then jump if the condition is true or continue if it is false.

    Syntax

    Jcondition label

    Conditional-jump instructions take a single operand containing the address
    to be jumped to. The distance from the jump instruction to the specified
    address must be short (less than 128 bytes). If a longer distance is
    specified, an error will be generated telling the distance of the jump in
    bytes. See Section 15.1.1, "Jumping Unconditionally," for information on
    arranging longer conditional jumps.

    Conditional-jump instructions (except JCXZ) use the status of one or more
    flags as their condition. Thus, any statement that sets a flag under
    specified conditions can be the test statement. The most common test
    statements use the CMP or TEST instructions. The jump statement can be any
    one of 31 conditional-jump instructions.

    Because conditional jumps cannot refer to labels more than 128 bytes away,
    they are often used in combination with unconditional jumps, which have no
    such limitation. For example, the following statement is valid as long as
    target is not far away:

                jz      target     ; If previous operation resulted in
                                    ;   zero, jump to target

    Once target becomes too distant, the following sequence must be used to
    enable a longer jump. Note that this sequence is logically equivalent to
    the example above:

                jnz     skip       ; If previous operation resulted in NOT zero
                                    ;   jump to "skip"
                jmp     target     ; Otherwise, jump to target
    skip:

    The instructions above first test for the logical inverse of the desired
    condition. If the test condition (in this case, equality to zero) is not
    true, the jump to target is avoided. Yet if a zero condition is true, the
    program falls through to the instruction jmp target, which can jump any
    distance. The effect, of course, is to jump to target if the previous
    operation resulted in zero.

    The problem with this technique is that if used often, you may have to
    think up a label name just to jump around one instruction. Anonymous
    labels, described in Section 6.4.2, let you avoid having to invent so
    many label names. For example, you could use an anonymous label to rewrite
    the example above:

                jnz     @F      ; If previous operation resulted in NOT zero,
                                ;   jump forward to next @ label
                jmp     target  ; Otherwise, jump to target
    @:


15.1.2.1  Comparing and Jumping

    The CMP instruction is specifically designed to test for conditional
    jumps. It does not change the destination operand, so it can be used to
    compare two values without changing either of them. Instructions that
    change operands (such as SUB or AND) can also be used to test conditions.

    The CMP instruction compares two operands and sets flags based on the
    result. It is used to test the following relationships: equal; not equal;
    greater than; less than; greater than or equal; or less than or equal.

    Syntax

    CMP {register | memory},{register | memory | immediate}

    The destination operand can be memory or register. The source operand can
    be immediate, memory, or register. However, they cannot both be memory
    operands.

    The jump instructions that can be used with CMP are made up of mnemonic
    letters combined to indicate the type of jump. The letters are shown
    below:

    Letter              Meaning
    ──────────────────────────────────────────────────────────────────────────
    J                   Jump

    G                   Greater than (for unsigned comparisons)

    L                   Less than (for unsigned comparisons)

    A                   Above (for signed comparisons)

    B                   Below (for signed comparisons)

    E                   Equal

    N                   Not


    The mnemonic names always refer to the relationship that the first operand
    of the CMP instruction has to the second operand of the CMP instruction.
    For instance, JG tests whether the first operand is greater than the
    second. Several conditional instructions have two names. You can use
    whichever name seems more mnemonic in context.

    Comparisons and conditional jumps can be thought of as statements in the
    following format:

    IF (value1 relationship value2) THEN GOTO truelabel:

    Statements of this type can be coded in assembly language by using the
    following syntax:

    CMP value1,value2
    Jrelationship truelabel
    .
    .
    .
    truelabel:

    Table 15.1 lists conditional-jump instructions for each relationship and
    shows the flags that are tested in order to see if relationship is true.

    Table 15.1 Conditional-Jump Instructions Used after Compare

    Jump Condition  Signed        Jump if:    Unsigned      Jump if:
                    Compare                   Compare
    ──────────────────────────────────────────────────────────────────────────
    = Equal         JE            ZF = 1      JE            ZF = 1

    ╪ Not equal     JNE           ZF = 1      JNE           ZF = 1

    > Greater than  JG or JNLE    ZF = 0 and  JA or JNBE    CF = 0 and ZF = 0
                                SF = OF
    <= Less than or JLE or JNG    ZF = 1 and  JBE or JNA    CF = 1 or ZF = 1
    equal                         SF ╪ OF
    < Less than     JL or JNGE    SF ╪ OF     JB or JNAE    CF = 1

    >= Greater than JGE or JNL    SF = OF     JAE or JNB    CF = 0
    or equal
    ──────────────────────────────────────────────────────────────────────────


    Internally, the CMP instruction is exactly the same as the SUB
    instruction, except that the destination operand is not changed. The flags
    are set according to the result that would have been generated by a
    subtraction.

    Example 1

    ; If CX is less than -20, then make DX 30, else make DX 20

                cmp     cx,-20     ; If signed CX is smaller than -20
                jl      less       ;   then do stuff at "less"
                mov     dx,20      ; Else set DX to 20
                jmp     skip       ; Finished
    less:       mov     dx,30      ; Then set DX to 30
    skip:

    Example 1 shows the basic form of conditional jumps. Notice that in
    assembly language, if-then-else constructions are usually written in the
    form if-else-then.

    This theme has many variations. For example, you may find it more mnemonic
    to code in the if-then-else format. However, you must then use the
    opposite jump condition, as shown in Example 2.

    Example 2

    ; If CX is greater than or equal to -20, then make DX 20, else make DX 30

                cmp     cx,-20     ; If signed CX is smaller than -20
                jnl     notless    ;   else do stuff at "notless"
                mov     dx,30      ; Then set DX to 30
                jmp     continue   ; Finished
    notless:    mov     dx,20      ; Else set DX to 20
    continue:

    The then-if-else format shown in Example 3 is often more efficient. Do the
    work for the most likely case, and then compare for the opposite
    condition. If the condition is true, you are finished.

    Example 3

    ; DX is 20, unless CX is less than -20, then make DX 30

                mov     dx,20      ; DX is 20
                cmp     cx,-20     ; If signed CX is greater than -20
                jge     greatequ   ;   then done
                mov     dx,30      ; Else set DX to 30
    greatequ:

    This example avoids the unconditional jump used in Examples 1 and 2 and
    thus is faster even if the less likely condition is true.


15.1.2.2  Jumping Based on Flag Status

    The CMP instruction is the most mnemonic way to set the flags for
    conditional jumps, but any instruction that changes flags can be used as
    the test condition. The conditional-jump instructions listed below enable
    you to jump based on the condition of flags rather than on relationships
    of operands. Some of these instructions have the same effect as
    instructions listed in Table 15.1.

    Instruction         Action
    ──────────────────────────────────────────────────────────────────────────
    JO                  Jumps if the overflow flag is set

    JNO                 Jumps if the overflow flag is clear

    JC                  Jumps if the carry flag is set (same as JB)

    JNC                 Jumps if the carry flag is clear (same as JAE)

    JZ                  Jumps if the zero flag is set (same as JE)

    JNZ                 Jumps if the zero flag is clear (same as JNE)

    JS                  Jumps if the sign flag is set

    JNS                 Jumps if the sign flag is clear

    JP                  Jumps if the parity flag is set

    JNP                 Jumps if the parity flag is clear

    JPE                 Jumps if parity is even (parity flag set)

    JPO                 Jumps if parity is odd (parity flag clear)

    JCXZ                Jumps if CX is 0


    Notice that JCXZ is the only conditional jump based on the condition of a
    register (CX) rather than flags. Since JCXZ is usually used with loop
    instructions, it is discussed in more detail in Section 15.2, "Looping."

    Example 1

                add     ax,bx      ; Add two values
                jo      overflow   ; If value too large, adjust
                .
                .
                .
    overflow:                      ; Adjustment routine here

    Example 2

                sub     ax,dx      ; Subtract
                jnz     skip       ; If the result is not zero, continue
                call    zhandler   ;   else do special case
    skip:


15.1.2.3  Testing Bits and Jumping

    Like the CMP instruction, the TEST instruction is designed to test for
    conditional jumps. However, specific bits are compared rather than entire
    operands.

    Syntax

    TEST {register | memory},{register | memory | immediate}

    The destination operand can be memory or register. The source operand can
    be immediate, memory, or register. However, they cannot both be memory
    operands.

    Normally, one of the operands is a mask in which the bits to be tested are
    the only bits set. The other operand contains the value to be tested. If
    all the bits set in the mask are clear in the operand being tested, the
    zero flag will be set. If any of the flags set in the mask are also set in
    the operand, the zero flag will be cleared.

    The TEST instruction is actually the same as the AND instruction, except
    that neither operand is changed. If the result of the operation is 0, the
    zero flag is set, but the 0 is not actually written to the destination
    operand.

    You can use the JZ and JNZ instructions to jump after the test. JE and JNE
    are the same and can be used if you find them more mnemonic.

    Example

                .DATA
    bits        DB      ?
                .CODE
                .
                .
                .
    ; If bit 2 or bit 4 is set, then call taska

                                    ; Assume "bits" is 0D3h       11010011
                test    bits,10100b  ; If 2 or 4 is set        AND 00010100
                jz      skip1        ; Else continue               --------
                call    taska        ; Then call taska             00010000
    skip1:                           ; Jump not taken
                .
                .
                .
    ; If bits 2 and 4 are clear, then call taskb

                                    ; Assume "bits" is 0E9h       11101001
                test    bits,10100b   ; If 2 and 4 are clear    AND 00010100
                jnz     skip2         ; Else continue               --------
                call    taskb         ; Then call taskb             00000000
    skip2:                           ; Jump not taken


15.2  Looping

    The 8086-family processors have several instructions specifically designed
    for creating loops of repeated instructions. In addition, you can create
    loops using conditional jumps.

    Syntax

    LOOP label
    LOOPE label
    LOOPZ label
    LOOPNE label
    LOOPNZ label
    JCXZ label

    The LOOP instruction is used for loops with a set number of iterations.
    For example, it can be used in constructions similar to the "for" loops of
    BASIC, C, and Pascal, and the "do" loops of FORTRAN.

    A single operand specifies the address to jump to each time through the
    loop. The CX register is used as a counter for the number of times to
    loop. On each iteration, CX is decremented. When CX reaches 0, control
    passes to the instruction after the loop.

    The LOOPE, LOOPZ, LOOPNE, and LOOPNZ instructions are used in loops that
    check for a condition. For example, they can be used in constructions
    similar to the "while" loops of BASIC, C, and Pascal; the "repeat" loops
    of Pascal; and the "do" loops of C.

    The LOOPE (also called LOOPZ) instruction can be thought of as meaning
    "loop while equal." Similarly, the LOOPNE (also called LOOPNZ) instruction
    can be thought of as meaning "loop while not equal." A single short memory
    operand specifies the address to loop to each time through. The CX
    register can specify a maximum number of times to go through the loop. The
    CX register can be set to a number that is out of range if you do not want
    a maximum count.

    The JCXZ instruction is often used in loop structures. For example, it may
    be used in loops that check a condition at the start of the loop rather
    than at the end. Unlike the loop instruction, JCXZ does not decrement CX,
    so the programmer must use another statement to decrement the count. You
    can also use JCX2 with string instructions, as described in Chapter 16,
    "Processing Strings."

    Example 1

    ; For 0 to 200 do task

                mov     cx,200             ; Set counter
    next:       .                          ; Do the task here
                .
                .
                loop    next               ; Do again
                                            ; Continue after loop

    This loop has the same effect as the following statements:

    ; For 0 to 200, do task

                mov     cx,200             ; Set counter
    next:       .
                .                          ; Do the task here
                .
                dec     cx
                cmp     cx,0
                jne     next               ; Do again
                                            ; Continue after loop

    The first version is more efficient as well as easier to understand.
    However, there are situations in which you must use conditional-jump
    instructions rather than loop instructions. For example, conditional jumps
    are often required for loops that test several conditions.

    If the counter in CX is variable because of previous instructions, you
    should use the JCXZ instruction to check for 0, as shown in Example 2.
    Otherwise, if CX is 0, it will be decremented to -1 in the first iteration
    and will continue through 65,535 iterations before it reaches 0 again.

    Example 2

    ; For 0 to CX do task

                                            ; CX counter set previously
                jcxz    done               ; Check for 0
    next:       .                          ; Do the task here
                .
                .
                loop    next               ; Do again
    done:                                  ; Continue after loop


15.3  Using Procedures

    A "procedure" is a program subdivision that typically executes a specific
    task. Once you write a procedure, you can execute it from anywhere in the
    program. This technique lets you avoid writing the same block of code over
    and over, thus saving space.

    Even if you execute it only once, writing a procedure can be a useful way
    of dividing a large program into manageable units. You can place a
    procedure in its own source module and test it separately.
    Assembly-language procedures are comparable to functions in C;
    subprograms, functions, and subroutines in BASIC; procedures and functions
    in Pascal; or routines and functions in FORTRAN.

    Two instructions control the use of assembly-language procedures. The CALL
    instruction can appear anywhere in a program. It temporarily transfers
    program control to a specified procedure. The RET instruction appears at
    the end of a procedure. It returns control back to the location that
    issued the call.

    These instructions use the stack to properly return from each call. The
    instruction immediately following the CALL instruction is called the
    "return address," and the procedure should return to this location when
    done. CALL pushes the return address onto the stack; RET pops this address
    off the stack and transfers program control there.

    Along with the RET instruction (which terminates a procedure), two
    directives help define a procedure. The PROC and ENDP directives normally
    mark the beginning and end of a procedure definition, as described in
    Section 15.3.2, "Defining Procedures."

    In addition, the PROC directive can save you time and effort by automating
    the following tasks:

    ■  Preserving register values that should not change, but that the
        procedure might otherwise alter

    ■  Setting up a framepointer, so that you can access parameters placed on
        the stack

    ■  Creating text macros, so that your source code can refer to each
        parameter by a meaningful name

    Section 15.3.4, "Declaring Parameters with the PROC Directive," describes
    how to use these features. Section 15.3.3, "Passing Arguments on the
    Stack," gives background information on the technique for accessing
    parameters.

    When you write procedures, you can create local variables, which exist
    only during execution of the procedure. The advantage of these variables
    is that they use memory dynamically, taking up space only in the procedure
    that uses them. Section 15.3.5, "Using Local Variables," describes the
    basic technique for allocating and accessing local variables. Section
    15.3.6, "Creating Locals Automatically," describes how to make the
    assembler generate the necessary code for you.


15.3.1  Calling Procedures

    The CALL instruction saves the address following the instruction on the
    stack and passes control to a specified address.

    Syntax

    CALL {register | memory}

    The address is usually specified as a direct memory operand. However, the
    operand can also be a register or indirect memory operand containing a
    value calculated at run time. This enables you to write call tables
    similar to the jump table illustrated in Section 15.1.2.1, "Comparing and
    Jumping."

    Calls can be near or far. Near calls push only the offset portion of the
    calling address. Far calls push both the segment and offset. You must give
    the type of far calls to forward-referenced labels using the FAR type
    specifier and the PTR operator. For example, use the following statement
    to make a far call to a label that has not been earlier defined or
    declared external in the source code:

                call    FAR PTR task


15.3.2  Defining Procedures

    Procedures are defined by labeling the start of the procedure and placing
    an ENDP directive at the end. The code should not fall through past the
    end of the procedure. Exit the procedure with a RET, RETF, RETN, or IRET
    instruction. There are several variations of this syntax.

    Syntax 1

    label PROC [[NEAR|FAR]] RET [[constant]] label ENDP

    Procedures are normally defined by using the PROC directive at the start
    of the procedure and the ENDP directive at the end. The RET instruction is
    normally placed immediately before the ENDP directive. The size of the RET
    instruction automatically matches the size defined by the PROC directive.

    The syntax shown is always available. In addition, there is an extended
    PROC syntax available if you use .MODEL and specify a language. The
    extended PROC syntax is explained in Section 15.3.4, "Declaring
    Parameters with the PROC Directive." These language features automate many
    of the details of accessing parameters and saving registers.

    Syntax 2

    label:
    statements
    RETN [[constant]]

    Syntax 3

    label LABEL FAR
    statements
    RETF [[constant]]

    The RET instruction can be extended to RETN (Return Near) or RETF (Return
    Far) to override the default size. This enables you to define and use
    procedures without the PROC and ENDP directives, as shown in Syntax 2 and
    Syntax 3, above. However, with this method, the programmer is responsible
    for making sure the size of the CALL matches the size of the RET.

    The RET instruction (and its RETF and RETN variations) allows a constant
    operand that specifies a number of bytes to be added to the value of the
    SP register after the return. This operand can be used to adjust for
    arguments passed to the procedure before the call, as shown in the example
    in Section 15.3.5, "Using Local Variables."

    Example 1

                call    task          ; Call is near because procedure is near
                .                     ; Return comes to here
                .
                .
    task        PROC    NEAR          ; Define "task" to be near
                .
                .                     ; Instructions of "task" go here
                .
                ret                   ; Return to instruction after call
    task        ENDP                  ; End "task" definition

    Example 1 shows the recommended way of making calls with QuickAssembler.
    Example 2 shows another method that programmers who are used to other
    assemblers may find more familiar.

    Example 2

                call    NEAR PTR task ; Call is declared near
                .                     ; Return comes to here
                .
                .
    task:                             ; Procedure begins with near label
                .
                .                     ; Instructions go here
                .
                retn                  ; Return declared near

    This method gives more direct control over procedures, but the programmer
    must make sure that calls have the same size as corresponding returns.

    For example, if a call is made with the statement

                call    NEAR PTR task

    the assembler does a near call. This means that one word (the offset
    following the calling address) is pushed onto the stack. If the return is
    made with the statement

                retf

    two words are popped off the stack. The first will be the offset, but the
    second will be whatever happened to be on the stack before the call. Not
    only will the popped value be meaningless, but the stack status will be
    incorrect, causing the program to fail.


15.3.3  Passing Arguments on the Stack

    Procedure arguments can be passed in various ways. For example, values can
    be passed to a procedure in registers or in variables. However, the most
    common method of passing arguments is to use the stack. Microsoft
    languages have a specific convention for doing this.

    This section describes how a procedure accesses the parameters passed to
    it on the stack. Each parameter is accessed as an offset from BP, and you
    must calculate this offset. However, if you use the PROC directive to
    declare parameters, the assembler calculates these offsets for you and
    lets you refer to parameters by name. The next section explains how to use
    PROC this way.

    The arguments are pushed onto the stack before the call. After the call,
    the procedure retrieves and processes them. At the end of the procedure,
    the stack is adjusted to account for the arguments.

    Although the same basic method is used for all Microsoft high-level
    languages, the details vary. For instance, in some languages, pointers to
    the arguments are passed to the procedure; in others, the arguments
    themselves are passed. The order in which arguments are passed (whether
    the first argument is pushed first or last) also varies according to the
    language. Finally, in some languages, the stack is adjusted by the RET
    instruction in the called procedure; in others, the code immediately
    following the CALL instruction adjusts the stack. See Appendix A,
    "Mixed-Language Mechanics," for details on calling conventions.

    Example

    ; C-style procedure call and definition

                mov     ax,10      ; Load and
                push    ax         ;   push constant as third argument
                push    arg2       ; Push memory as second argument
                push    cx         ; Push register as first argument
                call    addup      ; Call the procedure
                add     sp,6       ; Destroy the pushed arguments
                .                  ;   (equivalent to three pops)
                .
                .
    addup       PROC    NEAR       ; Return address for near call
                                    ;   takes two bytes
                push    bp         ; Save base pointer - takes two bytes
                                    ;   so arguments start at 4th byte
                mov     bp,sp      ; Load stack into base pointer
                mov     ax,[bp+4]  ; Get first argument from
                                    ;   4th byte above pointer
                add     ax,[bp+6]  ; Add second argument from
                                    ;   6th byte above pointer
                add     ax,[bp+8]  ; Add third argument from
                                    ;   8th byte above pointer
                pop     bp         ; Restore BP
                ret                ; Return result in AX
    addup       ENDP

    The example shows one method of passing arguments to a procedure. This
    method is similar to the way procedures are called in the C language.
    Figure 15.1 shows the stack condition at key points in the process.

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 15.3.3 of the manual               │
    └────────────────────────────────────────────────────────────────────────┘

    ──────────────────────────────────────────────────────────────────────────
    NOTE  Arguments passed on the stack in assembler routines cannot be
    accessed by name in debugging commands, unless you declare parameters with
    the PROC directive, as explained in the next section.
    ──────────────────────────────────────────────────────────────────────────


15.3.4  Declaring Parameters with the PROC Directive

    This section describes how to use the PROC directive in order to automate
    the parameter-accessing techniques described in the last section.

    The PROC directive lets you specify registers to be saved, define
    arguments to the procedure, and set up text macros so that you can refer
    to parameters by name (rather than as an offset to BP). For example, the
    following PROC directive could be placed at the beginning of a procedure
    called from BASIC that takes a single argument passed by value and that
    uses (and must save) the DI and SI registers:

    myproc      PROC  FAR BASIC USES DI SI, arg1:WORD

    Note that you must use the .MODEL directive and specify a language in
    order to use the extended features of PROC, including the lang type,
    reglist, and arguments.

    Syntax

    label PROC [[NEAR|FAR]] [[lang]] [[USES reglist]] [[arguments]]

    The NEAR and FAR keywords indicate whether you invoke the procedure with a
    near call or a far call, as described in Section 15.3.2, "Defining
    Procedures."

    The following list describes the other parts of the PROC directive:

    Argument            Description
    ──────────────────────────────────────────────────────────────────────────
    label               The name of the procedure. The assembler automatically
                        adds an underscore to the beginning of the name if you
                        specify C as the language in the .MODEL directive or
                        if you specify C as the lang.

    lang                An optional language specifier that overrides language
                        conventions specified by the .MODEL directive. The
                        language type may be C, Pascal, FORTRAN, or BASIC.

                        The language type determines the calling convention
                        used to access parameters and restore the stack. It
                        also determines whether an underscore is prefixed to
                        the procedure name, as required by the C naming
                        convention. Note that use of the C specifier does not
                        preserve lowercase letters in the procedure name. To
                        guarantee compatibility with C naming conventions,
                        choose Preserve Case or Preserve Extrn from the
                        Assembler Flags dialog box, or assemble with /Cl or
                        /Cx from the QCL command line.

    reglist             A list of registers that the procedure uses and that
                        should be saved on entry. Registers in the list must
                        be separated by blanks or tabs. The assembler
                        generates code to push these registers on the stack.
                        When you exit, the assembler generates code to pop the
                        saved register values off the stack.

    arguments           The list of arguments passed to the procedure on the
                        stack. See the discussion below for the syntax of the
                        argument.


    The arguments indicate each of the procedure's arguments and are separated
    from the reglist argument by a comma if there is a list of registers. Each
    argument has the following syntax:

    argname [[ :[[[[NEAR|FAR]]PTR]]type]]

    If you have more than one argument, separate each by a comma.

    The argname is the name of the argument. The type is the type of the
    argument and may be WORD, DWORD, QWORD, TBYTE, or the name of a structure
    defined by a STRUC structure declaration (see Chapter 6, "Defining
    Labels, Constants, and Variables" for more information about types). If
    you omit type, the default is the WORD type.

    The FAR, NEAR, PTR, and type arguments are all optional. If you omit all
    of them, the assembler assumes the variable is a WORD type. If you use
    only the type argument, the assembler assumes the variable has the
    indicated type.

    ──────────────────────────────────────────────────────────────────────────
    Note  If you are writing a routine to be called from BASIC, FORTRAN, or
    Pascal, and the routine returns a function value, you must declare an
    additional parameter if you return anything other than a two- or four-byte
    integer. See Appendix A, "Mixed-Language Mechanics," for more
    information.
    ──────────────────────────────────────────────────────────────────────────

    The PTR type generates debugging information so that the variable is
    treated as a pointer during debugging. The assembler assumes specific
    sizes for the variable, depending on the combination of NEAR, FAR, and PTR
    arguments you specify. The lines below show some example combinations of
    NEAR, FAR, PTR, and type:

    myproc      PROC var1:PTR WORD, var2:PTR DWORD
                .
                .
                .
    myproc      ENDP

    proc2       PROC var3:FAR PTR WORD, var4:NEAR PTR BYTE
                .
                .
                .
    proc2       ENDP

    If you omit NEAR or FAR, the default data size established by .MODEL is
    used. All PTR declarations are translated into a word-size variable if the
    data size is near or a doubleword variable if the data size is far.

    For example, the following declarations of procvar produce the same code
    for the variable name, although they generate different debugging
    information:

    aproc       PROC procvar:PTR WORD

    aproc       PROC procvar:PTR DWORD

    aproc       PROC procvar:PTR BYTE

    Specifying a particular type changes only the debugging information, not
    the code produced for accessing the argument.

    If you specify a NEAR PTR or FAR PTR argument, as in the declarations of
    var3 and var4, the assembler ignores the memory model you selected and
    assigns a WORD type for a NEAR PTR argument and a DWORD type for a FAR PTR
    argument.

    The assembler does not generate any code to get the value or values the
    pointer references; your program must still explicitly treat the argument
    as a pointer. For example, the procedure in Section 5.1 can be rewritten
    for use with BASIC so that it gets its argument by near reference (the
    BASIC default):

    ; Call from BASIC as a FUNCTION returning an integer

                .MODEL medium, basic
                .CODE
    myadd       PROC   arg1:NEAR PTR WORD, arg2:NEAR PTR WORD

                mov    bx,arg1  ; Load first argument
                mov    ax,[bx]
                mov    bx,arg2  ; Add second argument
                add    ax,[bx]

                ret

    myadd       ENDP
                END

    In the example above, even though the arguments are declared as near
    pointers, you still must code two move instructions in order to get the
    values of the arguments──the first move gets the address of the argument;
    the second move gets the argument.

    You can use conditional-assembly directives to make sure that your pointer
    arguments are loaded correctly for the memory model. For example, the
    following version of myadd treats the arguments as far arguments if
    necessary:

                .MODEL   medium,c                        ;Could be any model
                .CODE
    myadd       PROC     arg1:PTR WORD,   arf2:PTR WORD

                IF       @DataSize
                        les     bx,arg1                 ;Far arguments
                        mov     ax,es:[bx]
                        les     bx,arg2
                        add     ax,es:[bx]
                ELSE
                        mov     bx,arg1                 ;Near arguments
                        mov     ax,[bx]
                        mov     bx,arg2
                        add     ax,[bx]
                ENDIF

                ret
    myadd       ENDP

                END

    ──────────────────────────────────────────────────────────────────────────
    Note  When you use the high-level-language features and the assembler
    encounters a RET instruction, it automatically generates instructions to
    pop saved registers, remove local variables from the stack, and, if
    necessary, remove arguments. The assembler does not generate this code if
    you use a RETF or RETN instruction. It generates this code for each RET
    instruction it encounters. You can save code by having only one exit and
    jumping to it from various points.
    ──────────────────────────────────────────────────────────────────────────


15.3.5  Using Local Variables

    In high-level languages, local variables are known only within a
    procedure. In Microsoft languages, these variables are usually stored on
    the stack. Assembly-language programs can use the same technique. These
    variables should not be confused with labels or variable names that are
    local to a module, as described in Chapter 8, "Creating Programs from
    Multiple Modules."

    ──────────────────────────────────────────────────────────────────────────
    NOTE  If your procedure has relatively few variables, you can usually
    write the most efficient code by placing these values in registers. Local
    (stack) data is efficient when you have a large amount of local data for
    the procedure.
    ──────────────────────────────────────────────────────────────────────────

    This section outlines the standard methods for creating local variables.
    The next section shows how to use the LOCAL directive to make the
    assembler generate local variables for you automatically. When you use
    this directive, the assembler generates the same instructions as those
    used in this section, but hides some of the details from you.

    If you want to use LOCAL right away, you may want to skip directly to the
    next section. However, this section gives useful background.

    Local variables are created by saving stack space for the variable at the
    start of the procedure. The variable can then be accessed by its position
    in the stack. At the end of the procedure, the stack pointer is restored
    to restore the memory used by local variables.

    Example

                push    ax         ; Push one argument
                call    task       ; Call
                .
                .
                .
    arg         EQU     <[bp+4]>   ; Name for argument
    loc         EQU     <[bp-2]>   ; Name for local variable

    task        PROC    NEAR
                push    bp         ; Save base pointer
                mov     bp,sp      ; Load stack into base pointer
                sub     sp,2       ; Save two bytes for local variable
                .
                .
                .
                mov     loc,3      ; Initialize local variable
                add     ax,loc     ; Add local variable to AX
                sub     arg,ax     ; Subtract local from argument
                .                  ; Use "loc" and "arg" in other operations
                .
                .
                mov     sp,bp      ; Adjust for stack variable
                pop     bp         ; Restore base
                ret     2          ; Return result in AX and pop
    task        ENDP               ;   two bytes to adjust stack

    In this example, two bytes are subtracted from the SP register to make
    room for a local word variable. This variable can then be accessed as
    [bp-2]. In the example, this value is given the name loc with a text
    equate. Notice that the instruction mov sp,bp is given at the end to
    restore the original value of SP. The statement is only required if the
    value of SP is changed inside the procedure (usually by allocating local
    variables). The argument passed to the procedure is returned with the
    RET instruction. Contrast this to the example in Section 15.3.3,
"Passing Arguments on the Stack," in which the calling code adjusts for
    the argument. Figure 15.2 shows the state of the stack at key points in
    the process.

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 15.3.5 of the manual               │
    └────────────────────────────────────────────────────────────────────────┘

    ──────────────────────────────────────────────────────────────────────────
    NOTE  Local variables created in assembler routines cannot be accessed by
    name with debugging commands, unless you declare local variables with the
    LOCAL directive, as explained in the next section.
    ──────────────────────────────────────────────────────────────────────────


15.3.6  Creating Locals Automatically

    This section describes how to automate the techniques for local-variable
    creation described in the last section.

    You can use the LOCAL directive to save time and effort when working with
    local variables. When you use this directive, simply list the variables
    you want to create, giving a type for each one. The assembler calculates
    how much space is required on the stack. It also generates instructions to
    properly decrement SP (as described in the previous section) and to later
    reset SP when you return from the procedure.

    The LOCAL directive can only be used inside procedures created with the
    extended PROC directive. This means that you must first use .MODEL and
    specify a language.

    When you create local variables this way, your source code can then refer
    to each local variable by name rather than as an offset. Moreover, the
    assembler generates debugging information for each local variable, so that
    you can enter the name of the local variable as part of a Watch
    expression.

    The procedure in Section 15.3.5 can be generated more simply with the
    following code:

    task        PROC        NEAR     arg:WORD
                LOCAL       loc:WORD
                .
                .
                .
                mov         loc,3         ; Initialize local variable
                add         ax,loc        ; Add local variable to AX
                sub         arg,ax        ; Subtract local from argument
                .                         ; Use "Loc" and "arg" in other operat
                .
                .
                ret
    task        ENDP

    The LOCAL directive has the following syntax:

    LOCAL vardef [[,vardef]]...

    Each vardef has the form:

    label[[[count]]][[:[[[[NEAR | FAR]]PTR]]type]]]]...

    The LOCAL directive arguments are as follows:

    Argument            Description
    ──────────────────────────────────────────────────────────────────────────
    label               The name given to the local variable. The assembler
                        automatically defines a text macro you may use to
                        access the variable.

    count               The number of elements of this name and type to
                        allocate on the stack. Using count allows you to
                        allocate a simple array on the stack. The brackets
                        around count are required. If this field is omitted,
                        one data object is assumed.

    type                The type of variable to allocate. The type argument
                        may be one of the following: WORD, DWORD, QWORD,
                        TBYTE, or the name of a structure defined by a STRUC
                        structure declaration.


    The assembler sets aside space on the stack, following the same rules as
    for procedure arguments.

    The assembler does not initialize local variables. Your program must
    include code to perform any necessary initializations. For example, the
    following code fragment sets up a local array and initializes it to zero:

    arraysz     EQU   20

    aproc       PROC
                LOCAL var1[arraysz]:WORD, var2:WORD
                .
                .
                .
    ; Initialize local array to zero
                mov   cx,arraysz
                xor   ax,ax
                xor   di,di           ; Use di as array index
    repeat:     mov   var1[di],ax
                inc   di
                inc   di
                loop  repeat
    ; Use the array...
                .
                .
                .
                ret
    aproc


15.3.7  Variable Scope

    When you use the extended form of the .MODEL directive, the assembler
    makes all identifiers inside a procedure local to the procedure. Labels
    ending with a colon (:), procedure arguments, and local variables declared
    in a LOCAL directive are undefined outside of the procedure. Variables
    defined outside of any procedure are available inside a procedure. For
    example, in the following fragment, var1 can be used in proc1 and proc2,
    while var2──because it is defined in proc2──is not available to proc1:

            .MODEL medium,c
                .DATA
    var1        DW     256          ; Available to proc1 and proc2

                .CODE
    proc1       PROC
                .
                .
                .
    exit:       ret
    proc1       ENDP

    proc2       PROC
                LOCAL   var2:WORD   ; This var2 only available in proc2
                .
                .
                .
    exit:       ret
    proc2       ENDP

    If proc1 contained a LOCAL directive defining var2, that var2 would be a
    completely different variable than the var2 in proc2.

    Notice that both procedures contain the label exit. Because labels are
    local when you use the language option on the .MODEL directive, you may
    use the same labels in different procedures. You can make a label in a
    procedure global (make it available outside the procedure) by ending it
    with two colons:

    proc3       PROC
                .
                .
                .
    label1::
                .
                .
                .
    proc3       ENDP

    In the preceding example, label1 is available throughout the file
    containing proc3.


15.3.8  Setting Up Stack Frames

    80186/286/386 Only

    Starting with the 80186 processor, the ENTER and LEAVE instructions are
    provided for setting up a stack frame. These instructions do the same
    thing as the multiple instructions at the start and end of procedures in
    the Microsoft calling conventions (see the examples in Section 15.3.3,
    "Passing Arguments on the Stack").

    The PROC statement takes advantage of these instructions if you enable the
    extended instruction set with the .186 or .286 directive.

    Syntax

    ENTER framesize, nestinglevel
    statements
    LEAVE

    The ENTER instruction takes two constant operands. The framesize (a 16-bit
    constant) specifies the number of bytes to reserve for local variables.
    The nestinglevel (an 8-bit constant) specifies the level at which the
    procedure is nested. This operand should always be 0 when writing
    procedures for BASIC, C, and FORTRAN. The nestinglevel can be greater than
    0 with Pascal and other languages that enable procedures to access the
    local variables of calling procedures.

    The LEAVE instruction reverses the effect of the last ENTER instruction by
    restoring BP and SP to their values before the procedure call.

    Example 1

    task        PROC    NEAR
                enter   6,0        ; Set stack frame and reserve 6
                .                  ;   bytes for local variables
                .                  ; Do task here
                .
                leave              ; Restore stack frame
                ret                ; Return
    task        ENDP

    Example 1 has the same effect as the code in Example 2.

    Example 2

    task        PROC    NEAR
                push    bp         ; Save base pointer
                mov     bp,sp      ; Load stack into base pointer
                sub     sp,6       ; Reserve 6 bytes for local variables
                .
                .                  ; Do task here
                .

                mov     sp,bp      ; Restore stack pointer
                pop     bp         ; Restore base
                ret                ; Return
    task        ENDP

    The code in Example 1 takes fewer bytes, but is slightly slower. See
    on-line Help on instructions for exact comparisons of size and timing.


15.4  Using Interrupts

    "Interrupts" are a special form of routines that are called by number
    instead of by address. They can be initiated by hardware devices as well
    as by software. Hardware interrupts are called automatically whenever
    certain events occur in the hardware.

    Interrupts can have any number from 0 to 255. Most of the interrupts with
    lower numbers are reserved for use by the processor, DOS, or the ROM BIOS.

    The programmer can call existing interrupts with the INT instruction.
    Interrupt routines can also be defined or redefined to be called later.
    For example, an interrupt routine that is called automatically by a
    hardware device can be redefined so that its action is different.

    DOS defines several interrupt handlers. Two that are sometimes used by
    applications programmers are listed below:

    Interrupt           Description
    ──────────────────────────────────────────────────────────────────────────
    0                   Divide overflow. Called automatically when the
                        quotient of a divide operation is too large for the
                        source operand or when a divide by zero is attempted.

    4                   Overflow. Called by the INTO instruction if the
                        overflow flag is set.


    Interrupt 21H is the normal method of using DOS functions. To call a
    function, place the function number in AH, put arguments in registers as
    appropriate, then call the interrupt. For complete documentation of DOS
    functions, see the Microsoft MS-DOS Programmer's Reference, one of the
    many other books on DOS functions, or the on-line Help system.

    DOS has several other interrupts, but they should not normally be called.
    Some (such as 20H and 27H) have been replaced by DOS functions. Others are
    used internally by DOS.

    You can also access ROM-BIOS services through interrupt calls. See the
    on-line Help system for a description of all these services.


15.4.1  Calling Interrupts

    Interrupts are called with the INT instruction.

    Syntax

    INT interruptnumber
    INTO

    The INT instruction takes an immediate operand with a value between 0 and
    255.

    When calling DOS and ROM-BIOS interrupts, a function number is usually
    placed in the AH register. Other registers may be used to pass arguments
    to functions. Some interrupts and functions return values in certain
    registers. Register use varies for each interrupt.

    When the instruction is called, the processor takes the following six
    steps:

    1. Looks up the address of the interrupt routine in the interrupt
        descriptor table. In real mode, this table starts at the lowest point
        in memory (segment 0, offset 0) and consists of four bytes (two segment
        and two offset) for each interrupt. Thus, the address of an interrupt
        routine can be found by multiplying the number of the interrupt by 4.

    2. Pushes the flags register, the current code segment (CS), and the
        current instruction pointer (IP).

    3. Clears the trap (TF) and interrupt enable (IF) flags.

    4. Jumps to the address of the interrupt routine, as specified in the
        interrupt description table.

    5. Executes the code of the interrupt routine until it encounters an IRET
        instruction.

    6. Pops the instruction pointer, code segment, and flags.

    Figure 15.3 illustrates how interrupts work.

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 15.4.1 of the manual               │
    └────────────────────────────────────────────────────────────────────────┘

    The INTO (Interrupt On Overflow) instruction is a variation of the INT
    instruction. It calls interrupt 04H if called when the overflow flag is
    set. By default, the routine for interrupt 4 simply consists of an IRET so
    that it returns without doing anything. However, you can write your own
    overflow interrupt routine. Using INTO is an alternative to using JO (Jump
    On Overflow) to jump to an overflow routine. Section 15.4.2, "Defining
    and Redefining Interrupt Routines," gives an example of this.

    The CLI (Clear Interrupt Flag) and STI (Set Interrupt Flag) instructions
    can be used to turn interrupts on or off. You can use CLI to turn
    interrupt processing off so that an important routine cannot be stopped by
    a hardware interrupt. After the routine has finished, use STI to turn
    interrupt processing back on. Interrupts received while interrupt
    processing was turned off by CLI are saved and executed when STI turns
    interrupts back on.

    Example 1

    ; DOS call (Display String)

                mov     ah,09h             ; Load function number
                mov     dx,OFFSET string   ; Load argument
                int     21h                ; Call DOS

    Example 2

    ; BIOS call (Read Character from Keyboard)

                xor     ah,ah              ; Load function number 0 in AH
                int     16h                ; Call BIOS
                                            ; Return scan code in AH
                                            ; Return ascii code in AL

    Example 1 is a call to a DOS function.

    Example 2 is a ROM-BIOS call that works on IBM Personal Computers and
    IBM-compatible computers. See the on-line Help system for complete
    information on DOS and BIOS calls.


15.4.2  Defining and Redefining Interrupt Routines

    You can write your own interrupt routines, either to replace an existing
    routine or to use an undefined interrupt number.

    Syntax

    label PROC FAR[[USES reglist]]
    statements
    IRET
    label ENDP

    An interrupt routine can be written like a procedure by using the PROC and
    ENDP directives. The only differences are that the routine should always
    be defined as far and the routine should be terminated by an IRET
    instruction instead of a RET instruction.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  Since the assembler doesn't know whether you are going to terminate
    with a RET or an IRET, it is possible to use the full extended PROC syntax
    (described in Section 15.3.4) for interrupt procedures. However, making
    interrupt procedures NEAR or specifying arguments for them makes no sense.
    The USES keyword does correctly generate code to save and restore a
    register list in interrupt procedures.
    ──────────────────────────────────────────────────────────────────────────

    Your program should replace the address in the interrupt descriptor table
    with the address of your routine. DOS calls are provided for this task.
    Another common technique is to jump to the old interrupt routine and let
    it do the IRET instruction.

    It is usually a good idea to save the old address and restore it before
    your program ends.

    Interrupt routines you may want to replace include the processor's
    divide-overflow (0H) and overflow (04H) interrupts. You can also replace
    DOS interrupts, such as the critical-error (24H) and CONTROL+C (23H)
    handlers. Interrupt routines can be part of device drivers. Writing
    interrupt routines is usually a systems task. The example below
    illustrates a simple routine. For complete information, see the Microsoft
    MS-DOS Programmer's Reference or one of the other reference books on DOS.

    Example

                .DATA
    message     DB      "Overflow - result set to 0",13,10,"$"
    vector      DD      ?
                .CODE
                .STARTUP

                mov     ax,3504h              ; Load interrupt 4 and call DOS
                int     21h                   ;   get interrupt vector function
                mov     WORD PTR vector[2],es ; Save segment
                mov     WORD PTR vector[0],bx ;   and offset

                push    ds                    ; Save DS
                mov     ax,cs                 ; Load segment of new routine
                mov     ds,ax
                mov     dx,OFFSET overflow    ; Load offset of new routine
                mov     ax,2504h              ; Load interrupt 4 and call DOS
                int     21h                   ;   set interrupt vector function
                pop     ds                    ; Restore
                .
                .
                .
                add     ax,bx                 ; Do addition (or multiplication)
                into                          ; Call interrupt 4 if overflow
                .
                .
                .
                lds     dx,vector             ; Load original interrupt address
                mov     ax,2504h              ; Restore interrupt number 4
                int     21h                   ;   with DOS set vector function
                mov     ax,4C00h              ; Terminate function
                int     21h

    overflow    PROC    FAR
                sti                           ; Enable interrupts
                                            ;   (turned off by INT)
                mov     ah,09h                ; Display string function
                mov     dx,OFFSET message     ; Load address
                int     21h                   ; Call DOS
                xor     ax,ax                 ; Set AX to 0
                xor     dx,dx                 ; Set DX to 0
                iret                          ; Return
    overflow    ENDP
                END     start

    In this example, DOS functions are used to save the address of the initial
    interrupt routine in a variable and to put the address of the new
    interrupt routine in the interrupt table. Once the new address has been
    set, the new routine is called any time the interrupt is called. The
    sample interrupt handler sets the result of a calculation that causes an
    overflow (either in AX or AX:DX) to 0. It is good practice to restore the
    original interrupt address before terminating the program.


15.5  Checking Memory Ranges

    80186/286/386 Only

    Starting with the 80186 processor, the BOUND instruction can check to see
    if a value is within a specified range. This instruction is usually used
    to check a signed index value to see if it is within the range of an
    array. BOUND is a conditional interrupt instruction like INTO. If the
    condition is not met (the index is out of range), an interrupt 5 is
    executed.

    Syntax

    BOUND register16, memory32

    To use it for this purpose, the starting and ending values of the array mu
    st be stored as 16-bit values in the low and high words of a doubleword me
    mory operand. This operand is given as the source operand. The index value
    to be checked is given as the destination operand. If the index value is
    out of range, the instruction issues interrupt 5. This means that the oper
    ating system or the program must provide an interrupt routine for interrup
    t 5. DOS does not provide such a routine, so you must write your own. See
    Section 15.4, "Using Interrupts," for more information.

    Example

                .DATA
    bottom      EQU     0
    top         EQU     19
    dbounds     LABEL   DWORD              ; Allocate boundaries
    wbounds     DW      bottom,top         ;   initialized to bounds
    array       DB      top+1 DUP (?)      ; Allocate array
                .CODE
                .
                .
                .                          ; Assume index in DI
                bound   di,dbounds         ; Check to see if it is in range
                                            ;   if out of range, interrupt 5
                mov     dx,array[di]       ; If in range, use it



────────────────────────────────────────────────────────────────────────────
Chapter 16:  Processing Strings


    The 8086-family processors have a full set of instructions for
    manipulating strings. In the discussion of these instructions, the term
    "string" refers not only to the common definition of a string──a sequence
    of bytes containing characters──but to any sequence of bytes or words

    The following instructions are provided for 8086-family string functions:

    Instruction         Description
    ──────────────────────────────────────────────────────────────────────────
    MOVS                Moves string from one location to another

    SCAS                Scans string for specified values

    CMPS                Compares values in one string with values in another

    LODS                Loads values from a string to accumulator register

    STOS                Stores values from accumulator register to a string

    INS                 Transfers values from a port to memory

    OUTS                Transfers values from memory to a port


    All these instructions use registers in the same way and have a similar
    syntax. Most are used with the repeat instruction prefixes: REP, REPE,
    REPNE, REPZ, and REPNZ.

    This chapter first explains the general format for string instructions and
    then tells you how to use each instruction.


16.1  Setting Up String Operations

    The string instructions all work in a similar way. Once you understand the
    gen-eral procedure, it is easy to adapt the format for a particular string
    operation. The five steps are listed below:

    1. Make sure the direction flag indicates the direction in which you want
        the string to be processed. If the direction flag is clear, the string
        will be pro-cessed up (from low addresses to high addresses). If the
        direction flag is set, the string will be processed down (from high
        addresses to low addresses). The CLD instruction clears the flag, while
        STD sets it. Under DOS, the direction flag will normally be cleared if
        your program has not changed it.

    2. Load the number of iterations for the string instruction into the CX
        register. For instance, if you want to process a 100-byte string, load
        100. If a string instruction will be terminated conditionally, load the
        maximum number of iterations that can be done without an error.

    3. Load the starting offset address of the source string into DS:SI and
        the starting address of the destination string into ES:DI. Some string
        instructions take only a destination or source (shown in Table 16.1
        below). Normally, the segment address of the source string should be
        DS, but you can use a segment override with the string instruction to
        specify a different segment. You cannot override the segment address
        for the destination string. Therefore, you may need to change the value
        of ES.

    4. Choose the appropriate repeat-prefix instruction. Table 16.1 shows the
        repeat prefixes that can be used with each instruction.

    5. Put the appropriate string instruction immediately after the repeat
        prefix (on the same line).

    String instructions have two basic forms, as shown below:

    Syntax 1

    [[repeatprefix]] stringinstruction[[ES:[[destination,]]]]
    [[[[segmentregister:]]source]]

    The string instruction can be given with the source and/or destination as
    operands. The size of the operand or operands indicates the size of the
    objects to be processed by the string. Note that the operands only specify
    the size. The actual values to be worked on are the ones pointed to by
    DS:SI and/or ES:DI. No error is generated if the operand is not the same
    as the actual source or destination. One important advantage of this
    syntax is that the source operand can have a segment override. The
    destination operand is always relative to ES and cannot be overridden.

    Syntax 2

    [[repeatprefix]] stringinstructionB
    [[repeatprefix]] stringinstructionW

    The letter B or W appended to stringinstruction indicates bytes or words.
    With a letter appended to a string instruction, no operand is allowed.

    For instance, MOVS can be given with byte operands to move bytes or with
    word operands to move words. As an alternative, MOVSB can be given with no
    operands to move bytes, or MOVSW can be given with no operands to move
    words.

    Note that instructions that specify the size in the name never accept
    operands. Therefore, the following statement is illegal:

                lodsb     es:0               ; Illegal - no operand allowed

    Instead, the statement must be coded as shown below:

                lods      BYTE PTR es:0      ; Legal - use type specifier

    If a repeat prefix is used, it can be one of the following instructions:

    Instruction         Description
    ──────────────────────────────────────────────────────────────────────────
    REP                 Repeats for a specified number of iterations. The
                        number is given in CX.

    REPE or REPZ        Repeats while equal. The maximum number of iterations
                        should be specified in CX.

    REPNE or REPNZ      Repeats while not equal. The maximum number of
                        iterations should be specified in CX.


    REPE is the same as REPZ, and REPNE is the same as REPNZ. You can use
    whichever name you find more mnemonic. The prefixes ending with E are used
    in syntax listings and tables in the rest of this chapter.

    Table 16.1 lists each string instruction with the type of repeat prefix it
    uses and whether the instruction works on a source, a destination, or
    both.

    Table 16.1 Requirements for String Instructions

    Instruction   Repeat Prefix   Source/Destination  Register Pair
    ──────────────────────────────────────────────────────────────────────────
    MOVS          REP             Both                DS:SI, ES:DI

    SCAS          REPE/REPNE      Destination         ES:DI

    CMPS          REPE/REPNE      Both                ES:DI, DS:SI

    LODS          None            Source              DS:SI

    STOS          REP             Destination         ES:DI

    INS           REP             Destination         ES:DI

    OUTS          REP             Source              DS:SI

    ──────────────────────────────────────────────────────────────────────────


    At run time, a string instruction preceded by a repeat sequence causes the
    processor to take the following steps:

    1. Checks the CX registers and exits from the string instruction if CX is
        0.

    2. Performs the string operation once.

    3. Increases SI and/or DI if the direction flag is cleared. Decreases SI
        and/or DI if the direction flag is set. The amount of increase or
        decrease is 1 for byte operations, 2 for word operations.

    4. Decrements CX (no flags are modified).

    5. If the string instruction is SCAS or CMPS, checks the zero flag and
        exits if the repeat condition is false──that is, if the flag is set
        with REPE or REPZ or if it is clear with REPNE or REPNZ.

    6. Goes to the next iteration (step 1).

    Although string instructions (except LODS) are most often used with repeat
    prefixes, they can also be used by themselves. In this case, the SI and/or
    DI registers are adjusted as specified by the direction flag and the size
    of operands. However, you must decrement the CX register and set up a loop
    for the repeated action.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  Although you can use a segment override on the source operand, a
    segment override combined with a repeat prefix can cause problems in
    certain situations. If an interrupt occurs during the string operation,
    the segment override is lost and the rest of the string operation
    processes incorrectly. Segment overrides can be used safely when
    interrupts are turned off.
    ──────────────────────────────────────────────────────────────────────────


16.2  Moving Strings

    The MOVS instruction is used to move data from one area of memory to
    another.

    Syntax

    [[REP]] MOVS [[ES:]]destination,[[segmentregister:]]source
    [[REP]] MOVSB
    [[REP]] MOVSW

    To move the data, load the count and the source and destination addresses
    into the appropriate registers. Then use REP with the MOVS instruction.

    Example 1

                .MODEL  small
                .DATA
    source      DB      10 DUP ('0123456789')
    destin      DB      100 DUP (?)
                .CODE
                mov     ax,@data           ; Load same segment
                mov     ds,ax              ;   to both DS
                mov     es,ax              ;   and ES
                .
                .
                .
                cld                        ; Work upward
                mov     cx,100             ; Set iteration count to 100
                mov     si,OFFSET source   ; Load address of source
                mov     di,OFFSET destin   ; Load address of destination
                rep     movsb              ; Move 100 bytes

    Example 1 shows how to move a string by using string instructions. For
    comparison, Example 2 shows a much less efficient way of doing the same
    operation without string instructions.

    Example 2

                .MODEL  small
                .DATA
    source      DB      10 DUP ('0123456789')
    destin      DB      100 DUP (?)
                .CODE
                .                          ; Assume ES = DS
                .
                .
                mov     cx,100             ; Set iteration count to 100
                mov     si,OFFSET source   ; Load offset of source
                mov     di,OFFSET destin   ; Load offset of destination
    repeat:     mov     al,[si]            ; Get a byte from source
                mov     [di],al            ; Put it in destination
                inc     si                 ; Increment source pointer
                inc     di                 ; Increment destination pointer
                loop    repeat             ; Do it again

    Both examples illustrate how to move byte strings in a small-model program
    in which DS already points to the segment containing the variables. In
    such programs, ES can be set to the same value as DS.

    There are several variations on this. If the source string was not in the
    current data segment, you could load the starting address of its segment
    into ES. Another option would be to use the MOVS instruction with operands
    and give a segment override on the source operand. For example, you could
    use the following statement if ES pointed to both the source and the
    destination strings:

                rep     movs destin,es:source

    It is sometimes faster to move a string of bytes as words. You must adjust
    for any odd bytes, as shown in Example 3. Assume the source and
    destination are already loaded.

    Example 3

                mov     cx,count           ; Load count
                shr     cx,1               ; Divide by 2 (carry will be set
                                            ;   if count is odd)
                rep     movsw              ; Move words
                rcl     cx,1               ; If odd, make CX 1
                rep     movsb              ; Move odd byte if there is one


16.3  Searching Strings

    The SCAS instruction is used to scan a string for a specified value.

    Syntax

    [[REPE | REPNE]] SCAS [[ES:]]destination
    [[REPE | REPNE]] SCASB
    [[REPE | REPNE]] SCASW

    SCAS and its variations work only on a destination string, which must be
    pointed to by ES:DI. The value to scan for must be in the accumulator
    register──AL for bytes, AX for words.

    The SCAS instruction works by comparing the value pointed to by DI with
    the value in the accumulator. If the values are the same, the zero flag is
    set. Thus, the instruction only makes sense when used with one of the
    repeat prefixes that checks the zero flag.

    If you want to search for the first occurrence of a specified value, use
    the REPNE or REPNZ instruction. If the value is found, ES:DI will point to
    the value immediately after the first occurrence. You can decrement DI to
    make it point to the first matching value.

    If you want to search for the first value that does not have a specified
    value, use REPE or REPZ. If the value is found, ES:DI will point to the
    position after the first nonmatching value. You can decrement DI to make
    it point to the first non-matching value.

    After a REPNE SCAS, the zero flag will be cleared if no match was found.
    After a REPE SCAS, the zero flag will be set if no nonmatch was found.

    Example

                .DATA
    string      DB      "The quick brown fox jumps over the lazy dog"
    lstring     EQU     $-string           ; Length of string
    pstring     DD      string             ; Far pointer to string
                .CODE
                .
                .
                .
                cld                        ; Work upward
                mov     cx,lstring         ; Load length of string
                les     di,pstring         ; Load address of string
                mov     al,'z'             ; Load character to find
                repne   scasb              ; Search
                jnz     notfound           ; CX is 0 if not found
                .                          ; ES:DI points to character
                .                          ;   after first 'z'
                .
    notfound:                              ; Special case for not found

    This example assumes that ES is not the same as DS, but that the address
    of the string is stored in a pointer variable. The LES instruction is used
    to load the far address of the string into ES:DI.


16.4  Comparing Strings

    The CMPS instruction is used to compare two strings and point to the
    address where a match or nonmatch occurs.

    Syntax

    [[REPE | REPNE]] CMPS [[segmentregister:]]source,[[ES:]],destination
    [[REPE | REPNE]] CMPSB
    [[REPE | REPNE]] CMPSW

    The count and the addresses of the strings are loaded into registers, as
    described in Section 16.1, "Setting Up String Operations." Either string
    can be considered the destination or source string unless a segment
    override is used. Notice that unlike other instructions, CMPS requires
    that the source be on the left.

    The CMPS instruction works by comparing, in turn, each value pointed to by
    DI with the value pointed to by SI. If the values are the same, the zero
    flag is set. Thus, the instruction makes sense only when used with one of
    the repeat prefixes that checks the zero flag.

    If you want to search for the first match between the strings, use the
    REPNE or REPNZ instruction. If a match is found, ES:DI and DS:SI will
    point to the position after the first match in the respective strings. You
    can decrement DI or SI to point to the match. (Conversely, you would
    increment DI or SI if the direction flag was set.)

    If you want to search for a nonmatch, use REPE or REPZ. If a nonmatch is
    found, ES:DI and DS:SI will point to the position after the first nonmatch
    in the respective strings. You can decrement DI or SI to point to the
    nonmatch.

    After a REPNE CMPS, the zero flag will be cleared if no match was found.
    After a REPE CMPS, the zero flag will be set if no nonmatch was found.

    Example

                .MODEL  large
                .DATA
    string1     DB      "The quick brown fox jumps over the lazy dog"
                .FARDATA
    string2     DB      "The quick brown dog jumps over the lazy fox"
    lstring     EQU     $-string2
                .CODE
                mov     ax,@data           ; Load data segment
                mov     ds,ax              ;   into DS
                mov     ax,@fardata        ; Load far data segment
                mov     es,ax              ;   into ES
                .
                .
                .
                cld                        ; Work upward
                mov     cx,lstring         ; Load length of string
                mov     si,OFFSET string1  ; Load offset of string1
                mov     di,OFFSET string2  ; Load offset of string2
                repe    cmpsb              ; Compare
                jnz     allmatch           ; CX is 0 if no nonmatch
                dec     si                 ; Adjust to point to nonmatch
                dec     di                 ;   in each string
                .
                .
    allmatch:   .                          ; Special case for all match

    This example assumes that the strings are in different segments. Both
    segments must be initialized to the appropriate segment register.


16.5  Filling Strings

    The STOS instruction is used to store a specified value in each position
    of a string.

    Syntax

    [[REP]] STOS [[ES:]]destination
    [[REP]] STOSB
    [[REP]] STOSW

    The string is considered the destination, so it must be pointed to by
    ES:DI. The length and address of the string must be loaded into registers,
    as described in Section 16.1, "Setting Up String Operations." The value
    to store must be in the accumulator register──AL for bytes, AX for words.

    For each iteration specified by the REP instruction prefix, the value in
    the accumulator is loaded into the string.

    Example

                .MODEL  small
                .DATA
    destin      DB      100 DUP ?
                .CODE
                .                          ; Assume ES = DS
                .
                .
                cld                        ; Work upward
                mov     ax,'aa'            ; Load character to fill
                mov     cx,50              ; Load length of string
                mov     di,OFFSET destin   ; Load address of destination
                rep     stosw              ; Store 'a' into array

    This example loads 100 bytes containing the character 'a'. Notice that
    this is done by storing 50 words rather than 100 bytes. This makes the
    code faster by reducing the number of iterations. You would have to adjust
    for the last byte if you wanted to fill an odd number of bytes.


16.6  Loading Values from Strings

    The LODS instruction is used to load a value from a string into a
    register.

    Syntax

    LODS [[segmentregister:]]source
    LODSB
    LODSW

    The string is considered the source, so it must be pointed to by DS:SI.
    The value is always loaded from the string into the accumulator
    register──AL for bytes, AX for words.

    Unlike other string instructions, LODS is not normally used with a repeat
    prefix since there is no reason to move a value repeatedly to a register.
    However, LODS does adjust the SI register as specified by the direction
    flag and the size of operands. The programmer must code the instructions
    to use the value after it is loaded.

    Example 1

                .DATA
    stuff       DB      0,1,2,3,4,5,6,7,8,9
                .CODE
                .
                .
                .
                cld                          ; Work upward
                mov     cx,10                ; Load length
                mov     si,OFFSET stuff      ; Load offset of source
                mov     ah,2                 ; Display character function
    get:        lodsb                        ; Get a character
                add     al,'0'               ; Convert to ASCII
                mov     dl,al                ; Move to DL
                int     21h                  ; Call DOS to display character
                loop    get                  ; Repeat

    Example 1 loads, processes, and displays each byte in a string of bytes.

    Example 2

                .DATA
    buffer      DB      80 DUP(?)            ; Create buffer for argument strin
                .CODE
    start:      mov     ax,@data             ; Initialize DS
                mov     ds,ax
                                            ; On start-up ES points to PSP
                cld                          ; Work upward
                mov     cl,BYTE PTR es:[80h] ; Load length of arguments
                xor     ch,ch
                mov     di,OFFSET buffer     ; Load offset of buffer
                mov     si,82h               ; Load position of argument string
                mov     dx,es                ; Exchange ES and DS
                mov     ax,ds
                mov     es,ax
                mov     ds,dx
    another:    lodsb                        ; Get a character
                cmp     al,'a'               ; Is it high enough to be upper?
                jb      noway                ; No? Check
                cmp     al,'z'               ; Is it low enough to be letter?
                ja      noway
                sub     al,32                ; Yes? Convert to uppercase

    noway:      stosb
                loop    another              ; Repeat
                mov     dx,es                ; Restore ES and DS
                mov     ax,ds
                mov     es,ax
                mov     ds,dx

    Example 2 copies the command arguments from position 82H in the DOS
    Program Segment Prefix (PSP) while converting them to uppercase. See the
    Microsoft MS-DOS Programmer's Reference or one of the many other books on
    DOS for information about the PSP. Notice that both LODSB and STOSB are
    used without repeat prefixes.


16.7  Transferring Strings to and from Ports

    80186/286/386 Only

    The INS instruction reads a string from a port to memory, and the OUTS
    instruction writes a string from memory to a port.

    Syntax

    OUTS DX,[[segmentregister:]]source
    OUTSB
    OUTSW

    INS [[ES:]]destination,DX
    INSB
    INSW

    The INS and OUTS instructions require that the number of the port be in
    DX. The port cannot be specified as an immediate value, as it can be with
    IN and OUT.

    To move the data, load the count into CX. The string to be transferred by
    INS is considered the destination string, so it must be pointed to by
    ES:DI. The string to be transferred by OUTS is considered the source
    string, so it must be pointed to by DS:SI.

    If you specify the source or destination as an operand, DX must be
    specified. Otherwise, DX is assumed and should be omitted.

    If you need to process the string as it is transferred (for instance, to
    check for the end of a null-terminated string), you must set up the loop
    yourself instead of using the REP instruction prefix.

    Example

                .DATA
    count       EQU     100
    buffer      DB      count DUP (?)
    inport      DW      ?
                .CODE
                .                          ; Assume ES = DS
                .
                .
                cld                        ; Work upward
                mov     cx,count           ; Load length to transfer
                mov     di,OFFSET buffer   ; Load address of destination
                mov     dx,inport          ; Load port number
                rep     insb               ; Transfer the string
                                            ;   from port to buffer



────────────────────────────────────────────────────────────────────────────
Chapter 17:  Calculating with a Math Coprocessor


    The 8087-family coprocessors are used to do fast mathematical
    calculations. When used with real numbers, packed binary coded decimal
    (BCD) numbers, or long integers, they do calculations many times faster
    than the same operations done with 8086-family processors.

    This chapter explains how to use the 8087-family processors to transfer
    and process data. The approach taken is from an applications standpoint.
    Features that would be used by systems programmers (such the flags used
    when writing exception handlers) are not explained. This chapter is
    intended as a reference, not a tutorial.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  This manual does not attempt to explain the mathematical concepts
    involved in using certain coprocessor features. It assumes that you will
    not need to use a feature unless you understand the mathematics involved.
    For example, you need to understand logarithms to use the FYL2X and
    FYL2XP1 instructions.
    ──────────────────────────────────────────────────────────────────────────


17.1  Coprocessor Architecture

    The math coprocessor works simultaneously with the main processor.
    However, since the coprocessor cannot handle device input or output, most
    data originates in the main processor.

    The main processor and the coprocessor have their own registers, which are
    completely separate and inaccessible to the other. They exchange data
    through memory, since memory is available to both.

    Ordinarily you follow these three steps when using the coprocessor:

    1. Load data from memory to coprocessor registers.

    2. Process the data.

    3. Store the data from coprocessor registers back to memory.

    Step 2, processing the data, can occur while the main processor is
    handling other tasks. Steps 1 and 3 must be coordinated with the main
    processor so that the processor and coprocessor do not try to access the
    same memory at the same time, as explained in Section 17.5, "Transferring
    Data."


17.1.1  Coprocessor Data Registers

    The 8087-family coprocessors have eight 80-bit data registers. Unlike
    8086-family registers, the coprocessor data registers are organized as a
    stack. As data is pushed into the top register, previous data items move
    into higher-numbered registers. Register 0 is the top of the stack;
    register 7 is the bottom. The syntax for specifying registers is shown
    below:

    ST[[(number)]]

    The number must be a digit between 0 and 7, or a constant expression that
    evaluates to a number from 0 to 7. If number is omitted, register 0 (top
    of stack) is assumed.

    All coprocessor data is stored in registers in the temporary-real format.
    This is the 10-byte IEEE format described in Section 6.5.1.4,
    "Real-Number Variables." The registers and the register format are shown
    in Figure 17.1.

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 17.1.1 of the manual               │
    └────────────────────────────────────────────────────────────────────────┘

    Internally, all calculations are done on numbers of the same type. Since
    temporary-real numbers have the greatest precision, lower-precision
    numbers are guaranteed not to lose precision as a result of calculations.
    The instructions that transfer values between the main processor and the
    coprocessor automatically convert numbers to and from the temporary-real
    format.


17.1.2  Coprocessor Control Registers

    The 8087-family coprocessors have seven 16-bit control registers. The most
    useful control registers are made up of bit fields or flags. Some flags
    control coprocessor operations, while others maintain the current status
    of the coprocessor. In this sense, they are much like the 8086-family
    flags registers.

    You do not need to understand these registers to do most coprocessor
    operations. Control flags are set by default to the values appropriate for
    most programs. Errors and exceptions are reported in the status-word
    register. However, the coprocessor already has a default system for
    handling exceptions. Applications programmers can usually accept the
    defaults. Systems programmers may want to use the status-word and
    control-word registers when writing exception handlers, but such problems
    are beyond the scope of this manual.

    Figure 17.2 shows the overall layout of the control registers, including
    the control word, status word, tag word, instruction pointer, and operand
    pointer. The format of each of the registers is not shown, since these
    registers are generally of use only to systems programmers. The exception
    is the condition-code bits of the status-word register. These bits are
    explained in Section 17.7, "Controlling Program Flow."

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 17.1.2 of the manual               │
    └────────────────────────────────────────────────────────────────────────┘

    The control registers are explained in more detail in the on-line Help
    system.


17.2  Emulation

    You can write assembly-language procedures that use the emulator library
    when called from QuickC. First write the procedure by using coprocessor
    instructions, then assemble it using the /E option, and finally link it
    with your high-level-language modules. When compiling modules, use the
    compiler options that specify emulation.

    Some coprocessor instructions are not emulated by Microsoft emulation
    libraries. Which instructions are emulated varies depending on the
    language and version. If you use a coprocessor instruction that is not
    emulated, the program will generate a run-time error when it tries to
    execute the unemulated instruction. You cannot use a Microsoft emulation
    library with stand-alone assembler programs, since the library depends on
    the compiler start-up code.

    See Appendix B, Section B.6, "Creating Code for a Floating-Point
    Emulator," for information on the /E option. See Appendix A,
    "Mixed-Language Mechanics," for information on writing assembly-language
    procedures for high-level languages.


17.3  Using Coprocessor Instructions

    Coprocessor instructions are readily recognizable because, unlike all
    8086-family instruction mnemonics, they start with the letter F.

    Most coprocessor instructions have two operands, but in many cases, one or
    both operands are implied. Often, one operand can be a memory operand; in
    this case, the other operand is always implied as the stack-top register.
    Coprocessor instructions can never have immediate operands, and with the
    exception of the FSTSW instruction (see Section 17.5.2, "Loading
    Constants"), they cannot have processor registers as operands. As with
    8086-family instructions, memory-to-memory operations are never allowed.
    One operand must be a coprocessor register.

    Instructions usually have a source and a destination operand. The source
    specifies one of the values to be processed. It is never changed by the
    operation. The destination specifies the value to be operated on and
    replaced with the result of the operation. If two operands are specified,
    the first is the destination and the second is the source.

    The stack organization of registers gives the programmer flexibility to
    think of registers either as elements on a stack or as registers much like
    8086-family registers. Table 17.1 lists the variations of coprocessor
    instructions along with the syntax for each.

    Table 17.1 Coprocessor Operand Forms

    Instruction Form  Implied Syntax    Operands      Example
    ──────────────────────────────────────────────────────────────────────────
    Classical-stack   Faction           ST(1), ST     fadd

    Memory            Faction memory    ST            fadd memloc

    Register          Faction ST(num),  fadd st(5),st Faction ST, ST(num)
                    ST                              fadd st,st(3)

    Register pop      FactionP ST(num),               faddp st(4),st
                    ST
    ──────────────────────────────────────────────────────────────────────────


    Not all instructions accept all operand variations. For example, load and
    store instructions always require the memory form. Load-constant
    instructions always take the classical-stack form. Arithmetic instructions
    can usually take any form.

    Some instructions that accept the memory form can have the letter I
    (integer) or B (BCD) following the initial F to specify how a memory
    operand is to be interpreted. For example, FILD interprets its operand as
    an integer and FBLD interprets its operand as a BCD number. If no type
    letter is included in the instruction name, the instruction works on real
    numbers.


17.3.1  Using Implied Operands in the Classical-Stack Form

    The classical-stack form treats coprocessor registers like items on a
    stack. Items are pushed onto or popped off the top elements of the stack.
    Since only the top item can be accessed on a traditional stack, there is
    no need to specify operands. The first register (and the second if there
    are two operands) is always assumed.

    In arithmetic operations (see Section 17.6), the top of the stack (ST) is
    the source operand, and the second register (ST(1)) is the destination.
    The result of the operation goes into the destination operand, and the
    source is popped off the stack. The effect is that both of the values used
    in the operation are destroyed and the result is left at the top of the
    stack.

    Instructions that load constants always use the stack form (see Section
    17.5.1, "Transferring Data to and from Registers"). In this case, the
    constant created by the instruction is the implied source, and the top of
    the stack (ST) is the destination. The source is pushed into the
    destination.

    Note that the classical-stack form with its implied operands is similar to
    the register-pop form, not to the register form. For example, fadd, with
    the implied operands ST(1),ST, is equivalent to faddp st(1),st, rather
    than to fadd st(1),st.

    Example

                fld1               ; Push 1 into first position
                fldpi              ; Push pi into first position
                fadd               ; Add pi and 1 and pop

    The status of the register stack after each instruction is shown below:

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 17.3.1 of the manual               │
    └────────────────────────────────────────────────────────────────────────┘


17.3.2  Using Memory Operands

    The memory form treats coprocessor registers like items on a stack. Items
    are pushed from memory onto the top element of the stack, or popped from
    the top element to memory. Since only the top item can be accessed on a
    traditional stack, there is no need to specify the stack operand. The top
    register (ST) is always assumed. However, the memory operand must be
    specified.

    Memory operands can be used in load and store instructions (see Section
    17.5.1, "Transferring Data to and from Registers"). Load instructions
    push source values from memory to an implied destination register (ST).
    Store instructions pop source values from an implied source register (ST)
    to the destination in memory. Some versions of store instructions pop the
    register stack so that the source is destroyed. Others simply copy the
    source without changing the stack.

    Memory operands can also be used in calculation instructions that operate
    on two values (see Section 17.6, "Doing Arithmetic Calculations"). The
    memory operand is always the source. The stack top (ST) is always the
    implied destination. The result of the operation replaces the destination
    without changing its stack position.

    Example

                .DATA
    m1          DD      1.0
    m2          DD      2.0
                .CODE
                .
                .
                .
                fld     m1         ; Push m1 into first position
                fld     m2         ; Push m2 into first position
                fadd    m1         ; Add m2 to first position
                fstp    m1         ; Pop first position into m1
                fst     m2         ; Copy first position to m2

    The status of the register stack and the memory locations used in the
    instructions is shown below:

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 17.3.2 of the manual               │
    └────────────────────────────────────────────────────────────────────────┘


17.3.3  Specifying Operands in the Register Form

    The register form treats coprocessor registers as traditional registers.
    Registers are specified the same as 8086-family instructions with two
    register operands. The only limitation is that one of the two registers
    must be the stack top (ST).

    In the register form, operands are specified by name. The second operand
    is the source; it is not affected by the operation. The first operand is
    the destination; its value is replaced with the result of the operation.
    The stack position of the operands does not change.

    The register form can only be used with the FXCH instruction and with
    arithmetic instructions that do calculations on two values. With the FXCH
    instruction, the stack top is implied and need not be specified.

    Example

                fadd    st(1),st   ; Add second position to first -
                                    ;   result goes in second position
                fadd    st,st(2)   ; Add first position to second -
                                    ;   result goes in first position
                fxch    st(1)      ; Exchange first and second positions

    The status of the register stack if the registers were previously
    initialized to 1.0, 2.0, and 3.0 is shown below:

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 17.3.3 of the manual               │
    └────────────────────────────────────────────────────────────────────────┘


17.3.4  Specifying Operands in the Register-Pop Form

    The register-pop form treats coprocessor registers as a modified stack.
    This form has some of the aspects of both a stack and registers. The
    destination register can be specified by name, but the source register
    must always be the stack top.

    The result of the operation will be placed in the destination operand, and
    the stack top will be popped off the stack. The effect is that both values
    being operated on will be destroyed and the result of the operation will
    be saved in the specified destination register. The register-pop form is
    only used for instructions that do calculations on two values.

    Example

                faddp   st(2),st   ; Add first and third positions and pop -
                                    ;   first position destroyed
                                    ;   third moves to second and holds result

    The status of the register stack if the registers were already initialized
    to 1.0, 2.0, and 3.0 is shown below:

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 17.3.4 of the manual               │
    └────────────────────────────────────────────────────────────────────────┘


17.4  Coordinating Memory Access

    Problems of coordinating memory access can occur when the coprocessor and
    the main processor both try to access a memory location at the same time.
    Since the processor and coprocessor work independently, they may not
    finish working on memory in the order in which you give instructions.
    There are two separate cases, and they are handled in different ways.

    In the first case, if a processor instruction is given and then followed
    by a coprocessor instruction, the coprocessor must wait until the
    processor is finished before it can start the next instruction. This is
    handled automatically by Quick-Assembler for the 8088 and 8086 or by the
    processor for the 80186 and 80286.

    ──────────────────────────────────────────────────────────────────────────
    Coprocessor Differences  To synchronize operations between the 8088 or
    8086 processor and the 8087 coprocessor, each 8087 instruction must be
    preceded by a WAIT instruction. This is not necessary for the 80287. If
    you use the .8087 directive, QuickAssembler inserts WAIT instructions
    automatically. However, if you use the .286 directive, QuickAssembler
    assumes the instructions are for the 80287 or 80387 and does not insert
    the WAIT instructions. If your code will never need to run on an 8086 or
    8088 processor, you can make your programs shorter and more efficient by
    using the .286 directive.
    ──────────────────────────────────────────────────────────────────────────

    In the second case, if a coprocessor instruction that accesses memory is
    followed by a processor instruction attempting to access the same memory
    location, memory access is not automatically synchronized. For instance,
    if you store a coprocessor register to a variable and then try to load
    that variable into a processor register, the coprocessor may not be
    finished. Thus, the processor gets the value that was in memory before the
    coprocessor finished, rather than the value stored by the coprocessor. Use
    the WAIT or FWAIT instruction (they are mnemonics for the same
    instruction) to ensure that the coprocessor finishes before the processor
    begins.

    Example

    ; Coprocessor instruction first - Wait needed

                fist    mem32                ; Store to memory
                fwait                        ; Wait until coprocessor is done
                mov     ax,WORD PTR mem32    ; Move to register
                mov     dx,WORD PTR mem32[2]

    ; Processor instruction first - No wait needed

                mov     WORD PTR mem32,ax    ; Load memory
                mov     WORD PTR mem32[2],dx
                fild    mem32                ; Load to register


17.5  Transferring Data

    The 8087-family coprocessors have separate instructions for each of the
    following types of transfers:

    1. Transferring data between memory and registers, or between different
        registers

    2. Loading certain common constants into registers

    3. Transferring control data to and from memory


17.5.1  Transferring Data to and from Registers

    Data-transfer instructions transfer data between main memory and the
    coprocessor registers, or between different coprocessor registers. Two
    basic principles govern data transfers:

    ■  The instruction determines whether a value in memory will be considered
        an integer, a BCD number, or a real number. The value is always
        considered a temporary-real number once it is transferred to the
        coprocessor.

    ■  The size of the operand determines the size of a value in memory.
        Values in the coprocessor always take up 10 bytes.

    The adjustments between formats are made automatically. Notice that
    floating-point numbers must be stored in the IEEE format, not in the
    Microsoft Binary format. Data is automatically stored correctly by
    default. It is stored incorrectly and the coprocessor instructions
    disabled if you use the .MSFLOAT directive. Data formats for real numbers
    are explained in Section 6.5.1.4, "Real-Number Variables."

    Data is transferred to stack registers by using load commands. These
    commands push data onto the stack from memory or coprocessor registers.
    Data is removed by using store commands. Some store commands pop data off
    the register stack into memory or coprocessor registers, whereas others
    simply copy the data without changing it on the stack.


17.5.1.1  Real Transfers

    The following instructions are available for transferring real numbers:

    Syntax              Description
    ──────────────────────────────────────────────────────────────────────────
    FLD mem             Pushes a copy of mem into ST. The source must be a 4-,
                        8-, or 10-byte memory operand. It is automatically
                        converted to the temporary-real format.

    FLD ST(num)         Pushes a copy of the specified register into ST.

    FST mem             Copies ST to mem without affecting the register stack.
                        The destination can be a 4- or 8-byte memory operand.
                        It is automatically converted from temporary-real
                        format to short real or long real format, depending on
                        the size of the operand. It cannot be stored in the
                        10-byte-real format.

    FST ST(num)         Copies ST to the specified register. The current value
                        of the specified register is replaced.

    FSTP mem            Pops a copy of ST into mem. The destination can be a
                        4-, 8-, or 10-byte memory operand. It is automatically
                        converted from temporary-real format to the
                        appropriate real-number format, depending on the size
                        of the operand.

    FSTP ST(num)        Pops ST into the specified register. The current value
                        of the specified register is replaced.

    FXCH [[ST(num)]]    Exchanges the value in ST with the value in ST(num).
                        If no operand is specified, ST(0) and ST(1) are
                        exchanged.



17.5.1.2  Integer Transfers

    The following instructions are available for transferring binary integers:

    Syntax              Description
    ──────────────────────────────────────────────────────────────────────────
    FILD mem            The source must be a 2-, 4-, or 8-byte integer memory
                        operand. It is interpreted as an integer and converted
                        to temporary-real format.

    FIST mem            Copies ST to mem. The destination must be a 2- or
                        4-byte memory operand. It is automatically converted
                        from temporary-real format to a word or a doubleword,
                        depending on the size of the operand. It cannot be
                        converted to a quadword integer.

    FISTP mem           Pops ST into mem. The destination must be a 2-, 4-, or
                        8-byte memory operand. It is automatically converted
                        from temporary-real format to a word, doubleword, or
                        quadword integer, depending on the size of the
                        operand.



17.5.1.3  Packed BCD Transfers

    The following instructions are available for transferring BCD integers:

    Syntax              Description
    ──────────────────────────────────────────────────────────────────────────
    FBLD mem            Pushes a copy of mem into ST. The source must be a
                        10-byte memory operand. It should contain a packed BCD
                        value, although no check is made to see that the data
                        is valid.

    FBSTP mem           Pops ST into mem. The destination must be a 10-byte
                        memory operand. The value is rounded to an integer if
                        necessary and converted to a packed BCD value.


    The following examples illustrate instructions described throughout this
    section:

    Example 1

                fld     m1                 ; Push m1 into first item
                fld     st(2)              ; Push third item into first
                fst     m2                 ; Copy first item to m2
                fxch    st(2)              ; Exchange first and third items
                fstp    m1                 ; Pop first item into m1

    Assuming that registers ST and ST(1) were previously initialized to 3.0
    and 4.0, the status of the register stack is shown below:

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 17.5.1.3 of the manual             │
    └────────────────────────────────────────────────────────────────────────┘

    Example 2

                .DATA
    shortreal   DD      100 DUP (?)
    longreal    DQ      100 DUP (?)
                .CODE
                .                      ; Assume array shortreal has been
                .                      ;   filled by previous code
                .
                mov     cx,100         ; Initialize loop
                xor     si,si          ; Clear pointer into shortreal
                xor     di,di          ; Clear pointer into longreal
    again:      fld     shortreal[si]  ; Push shortreal
                fstp    longreal[di]   ; Pop longreal
                add     si,4           ; Increment source pointer
                add     di,8           ; Increment destination pointer
                loop    again          ; Do it again

    Example 2 illustrates one way of doing run-time type conversions.


17.5.2  Loading Constants

    Constants cannot be given as operands and loaded directly into coprocessor
    registers. You must allocate memory and initialize the variable to a
    constant value. The variable can then be loaded by using one of the load
    instructions described in Section 17.5.1, "Transferring Data to and from
    Registers."

    However, special instructions are provided for loading certain constants.
    You can load 0, 1, pi, and several common logarithmic values directly.
    Using these instructions is faster and often more precise than loading the
    values from initialized variables.

    The instructions that load constants all have the stack top as the implied
    destination operand. The constant to be loaded is the implied source
    operand. The instructions are listed below:

    Syntax              Description
    ──────────────────────────────────────────────────────────────────────────
    FLDZ                Pushes 0 into ST

    FLD1                Pushes 1 into ST

    FLDPI               Pushes the value of pi into ST

    FLDL2E              Pushes the value of log2^e into ST

    FLDL2T              Pushes log2^10 into ST

    FLDLG2              Pushes log10^2 into ST

    FLDLN2              Pushes loge^2 ST



17.5.3  Transferring Control Data

    The coprocessor data area, or parts of it, can be stored to memory and
    later loaded back. One reason for doing this is to save a snapshot of the
    coprocessor state before going into a procedure, and restore the same
    status after the procedure. Another reason is to modify coprocessor
    behavior by storing certain data to main memory, operating on the data
    with 8086-family instructions, and then loading it back to the coprocessor
    data area.

    You can choose to transfer the entire coprocessor data area, the control
    registers, or just the status or control word. Applications programmers
    seldom need to load anything other than the status word.

    All the control-transfer instructions take a single memory operand. Load
    instructions use the memory operand as the destination; store instructions
    use it as the source. The coprocessor data area is the implied source for
    load instructions and the implied destination for store instructions.

    Each store instruction has two forms. The "wait form" checks for unmasked
    numeric-error exceptions and waits until they have been handled. The
    "no-wait" form (which always begins with FN) ignores unmasked exceptions.
    The instructions are listed below:

    Syntax                      Description
    ──────────────────────────────────────────────────────────────────────────
    FLDCW mem2byte              Loads control word

    F[[N]]STCW mem2byte         Stores control word

    F[[N]]STSW mem2byte         Stores status word

    FLENV mem14byte             Loads environment

    F[[N]]STENV mem14byte       Stores environment

    FRSTOR mem94byte            Restores state

    F[[N]]SAVE mem94byte        Saves state


    80287/80387 Only

    Starting with the 80287 coprocessor, the FSTSW and FNSTSW instructions can
    store data directly to the AX register. This is the only case in which
    data can be transferred directly between processor and coprocessor
    registers, as shown below:

                fstsw   ax


17.6  Doing Arithmetic Calculations

    The math coprocessors offer a rich set of instructions for doing
    arithmetic. Most arithmetic instructions accept operands in any of the
    formats discussed in Section 17.3, "Using Coprocessor Instructions."

    When using memory operands with an arithmetic instruction, make sure you
    indicate in the name whether you want the memory operand to be treated as
    a real number or an integer. For example, use FADD to add a real number to
    the stack top or FIADD to add an integer to the stack top. You do not need
    to specify the operand type in the instruction if both operands are stack
    registers, since register values are always real numbers. You cannot do
    arithmetic on BCD numbers in memory. You must use FBLD to load the numbers
    into stack registers.

    The arithmetic instructions are listed below.

    Addition

    The following instructions add the source and destination and put the
    result in the destination:

    Syntax              Description
    ──────────────────────────────────────────────────────────────────────────
    FADD                Classical-stack form. Adds ST and ST(1) and pops the
                        result into ST. Both operands are destroyed.

    FADD ST(num),ST     Register form with stack top as source. Adds the two
                        register values and replaces ST(num) with the result.

    FADD ST,ST(num)     Register form with stack top as destination. Adds the
                        two register values and replaces ST with the result.

    FADD mem            Real-memory form. Adds a real number in mem to ST. The
                        result replaces ST.

    FIADD mem           Integer-memory form. Adds an integer in mem to ST. The
                        result replaces ST.

    FADDP ST(num),ST    Register-pop form. Adds the two register values and
                        pops the result into ST(num).


    Normal Subtraction

    The following instructions subtract the source from the destination and
    put the difference in the destination. Thus, the number being subtracted
    from is replaced by the result.

    Syntax              Description
    ──────────────────────────────────────────────────────────────────────────
    FSUB                Classical-stack form. Subtracts ST from ST(1) and pops
                        the result into ST. Both operands are destroyed.

    FSUB ST(num),ST     Register form with stack top as source. Subtracts ST
                        from ST(num) and replaces ST(num) with the result.

    FSUB ST,ST(num)     Register form with stack top as destination. Subtracts
                        ST(num) from ST and replaces ST with the result.

    FSUB mem            Real-memory form. Subtracts the real number in mem
                        from ST. The result replaces ST.

    FISUB mem           Integer-memory form. Subtracts the integer in mem from
                        ST. The result replaces ST.

    FSUBP ST(num),ST    Register-pop form. Subtracts ST from ST(num) and pops
                        the result into ST(num). Both operands are destroyed.


    Reversed Subtraction

    The following instructions subtract the destination from the source and
    put the difference in the destination. Thus, the number subtracted is
    replaced by the result.

    Syntax              Description
    ──────────────────────────────────────────────────────────────────────────
    FSUBR               Classical-stack form. Subtracts ST(1) from ST and pops
                        the result into ST. Both operands are destroyed.

    FSUBR ST(num),ST    Register form with stack top as source. Subtracts
                        ST(num) from ST and replaces ST(num) with the result.

    FSUBR ST,ST(num)    Register form with stack top as destination. Subtracts
                        ST from ST(num) and replaces ST with the result.

    FSUBR mem           Real-memory form. Subtracts ST from the real number in
                        mem. The result replaces ST.

    FISUBR mem          Integer-memory form. Subtracts ST from the integer in
                        mem. The result replaces ST.

    FSUBRP ST(num),ST   Register-pop form. Subtracts ST(num) from ST and pops
                        the result into ST(num). Both operands are destroyed.


    Multiplication

    The following instructions multiply the source and destination and put the
    product in the destination:

    Syntax              Description
    ──────────────────────────────────────────────────────────────────────────
    FMUL                Classical-stack form. Multiplies ST by ST(1) and pops
                        the result into ST. Both operands are destroyed.

    FMUL ST(num),ST     Register form with stack top as source. Multiplies the
                        two register values and replaces ST(num) with the
                        result.

    FMUL ST,ST(num)     Register form with stack top as destination.
                        Multiplies the two register values and replaces ST
                        with the result.

    FMUL mem            Real-memory form. Multiplies a real number in mem by
                        ST. The result replaces ST.

    FIMUL mem           Integer-memory form. Multiplies an integer in mem by
                        ST. The result replaces ST.

    FMULP ST(num),ST    Register-pop form. Multiplies the two register values
                        and pops the result into ST(num). Both operands are
                        destroyed.


    Normal Division

    The following instructions divide the destination by the source and put
    the quotient in the destination. Thus, the dividend is replaced by the
    quotient.

    Syntax              Description
    ──────────────────────────────────────────────────────────────────────────
    FDIV                Classical-stack form. Divides ST(1) by ST and pops the
                        result into ST. Both operands are destroyed.

    FDIV ST(num),ST     Register form with stack top as source. Divides
                        ST(num) by ST and replaces ST(num) with the result.

    FDIV ST,ST(num)     Register form with stack top as destination. Divides
                        ST by ST(num) and replaces ST with the result.

    FDIV mem            Real-memory form. Divides ST by the real number in
                        mem. The result replaces ST.

    FIDIV mem           Integer-memory form. Divides ST by the integer in mem.
                        The result replaces ST.

    FDIVP ST(num),ST    Register-pop form. Divides ST(num) by ST and pops the
                        result into ST(num). Both operands are destroyed.


    Reversed Division

    The following instructions divide the source by the destination and put
    the quotient in the destination. Thus, the divisor is replaced by the
    quotient.

    Syntax              Description
    ──────────────────────────────────────────────────────────────────────────
    FDIVR               Classical-stack form. Divides ST by ST(1) and pops the
                        result into ST. Both operands are destroyed.

    FDIVR ST(num),ST    Register form with stack top as source. Divides ST by
                        ST(num) and replaces ST(num) with the result.

    FDIVR ST,ST(num)    Register form with stack top as destination. Divides
                        ST(num) by ST and replaces ST with the result.

    FDIVR mem           Real-memory form. Divides the real number in mem by
                        ST. The result replaces ST.

    FIDIVR mem          Integer-memory form. Divides the integer in mem by ST.
                        The result replaces ST.

    FDIVRP ST(num),ST   Register-pop form. Divides ST by ST(num) and pops the
                        result into ST(num). Both operands are destroyed.


    Other Operations

    The following instructions all use the stack top (ST) as an implied
    destination operand. The result of the operation replaces the value in the
    stack top. No operand should be given.

    Syntax              Description
    ──────────────────────────────────────────────────────────────────────────
    FABS                Sets the sign of ST to positive.

    FCHS                Reverses the sign of ST.

    FRNDINT             Rounds ST to an integer.

    FSQRT               Replaces the contents of ST with its square root.

    FSCALE              Scales by powers of 2 by adding the value of ST(1) to
                        the exponent of the value in ST. This effectively
                        multiplies the stack-top value by 2 to the power
                        contained in ST(1). Since the exponent field is an
                        integer, the value in ST(1) should normally be an
                        integer.

    FPREM               Calculates the partial remainder by performing modulo
                        division on the top two stack registers. The value in
                        ST is divided by the value in ST(1). The remainder
                        replaces the value in ST. The value in ST(1) is
                        unchanged. Since this instruction works by repeated
                        subtractions, it can take a lot of execution time if
                        the operands are very different in magnitude. FRPEM is
                        sometimes used with trigonometric functions.

    FXTRACT             Breaks a number down into its exponent and mantissa
                        and pushes the mantissa onto the register stack.
                        Following the operation, ST contains the value of the
                        original mantissa and ST(1) contains the value of the
                        unbiased exponent.


    Example

                .DATA
    a           DD      3.0
    b           DD      7.0
    c           DD      2.0
    posx        DD      0.0
    negx        DD      0.0

                .CODE
                .
                .
                .
    ; Solve quadratic equation - no error checking
                fld1               ; Get constants 2 and 4
                fadd    st,st      ; 2 at bottom
                fld     st         ; Copy it
                fmul    a          ; = 2a

                fmul    st(1),st   ; = 4a
                fxch               ; Exchange
                fmul    c          ; = 4ac

                fld     b          ; Load b
                fmul    st,st      ; = b^2
                fsubr              ; = b^2 - 4ac
                                    ; Negative value here produces error
                fsqrt              ; = square root(b^2 - 4ac)
                fld     b          ; Load b
                fchs               ; Make it negative
                fxch               ; Exchange

                fld     st         ; Copy square root
                fadd    st,st(2)   ; Plus version = -b + root((b^2 - 4ac)
                fxch               ; Exchange
                fsubp   st(2),st   ; Minus version = -b - root((b^2 - 4ac)

                fdiv    st,st(2)   ; Divide plus version
                fstp    posx       ; Store it
                fdivr              ; Divide minus version
                fstp    negx       ; Store it

    This example solves quadratic equations. It does no error checking and
    fails for some values because it attempts to find the square root of a
    negative number. You could enhance the code by using the FTST instruction
    (see Section 17.7.1, "Comparing Operands to Control Program Flow") to
    check for a negative number or 0 just before the square root is
    calculated. If b^2 - 4ac is negative or 0, the code can jump to routines
    that handle special cases for no solution or one solution, respectively.


17.7  Controlling Program Flow

    The math coprocessors have several instructions that set control flags in
    the status word. The 8087-family control flags can be used with
    conditional jumps to direct program flow in the same way that 8086-family
    flags are used. Since the coprocessor does not have jump instructions, you
    must transfer the status word to memory so that the flags can be used by
    8086-family instructions.

    An easy way to use the status word with conditional jumps is to move its
    upper byte into the lower byte of the processor flags. For example, use
    the following statements:

                fstsw   mem16      ; Store status word in memory
                fwait              ; Make sure coprocessor is done
                mov     ax,mem16   ; Move to AX
                sahf               ; Store upper word in flags

    As noted in Section 17.5.3, "Transferring Control Data," you can save
    several steps by loading the status word directly to AX on the 80287.

    Figure 17.3 shows how the coprocessor control flags line up with the
    processor flags. C3 overwrites the zero flag, C2 overwrites the parity
    flag, and C0 overwrites the carry flag. C1 overwrites an undefined bit, so
    it cannot be used directly with conditional jumps, although you can use
    the TEST instruction to check C1 in memory or in a register. The sign and
    auxiliary-carry flags are also overwritten, so you cannot count on them
    being unchanged after the operation.

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section 17.7 of the manual                 │
    └────────────────────────────────────────────────────────────────────────┘

    See Section 15.1.2 for more information on using conditional-jump
    instructions based on flag status.


17.7.1  Comparing Operands to Control Program Flow

    The 8087-family coprocessors provide several instructions for comparing
    operands. All these instructions compare the stack top (ST) to a source
    operand, which may either be specified or implied as ST(1).

    The compare instructions affect the C3, C2, and C0 control flags. The C1
    flag is not affected. Table 17.2 shows the flags set for each possible
    result of a comparison or test.

    Variations on the compare instructions allow you to pop the stack once or
    twice, and to compare integers and zero. For each instruction, the stack
    top is always the implied destination operand. If you do not give an
    operand, ST(1) is the implied source. Some compare instructions allow you
    to specify the source as a memory or register operand.

    Table 17.2 Control-Flag Settings after Compare or Test

    After FCOM      After FTEST       C3        C2          C0
    ──────────────────────────────────────────────────────────────────────────
    ST > source     ST is positive    0         0           0

    ST < source     ST is negative    0         0           1

    ST = source     ST is 0           1         0           0

    Not comparable  ST is NAN or      1         1           1
                    projective
                    infinity
    ──────────────────────────────────────────────────────────────────────────


    The compare instructions are listed below.


17.7.1.1  Compare

    These instructions compare the stack top to the source. The source and
    destination are unaffected by the comparison.

    Syntax              Description
    ──────────────────────────────────────────────────────────────────────────
    FCOM                Compares ST to ST(1).

    FCOM ST(num)        Compares ST to ST(num).

    FCOM mem            Compares ST to mem. The memory operand can be a four-
                        or eight-byte real number.

    FICOM mem           Compares ST to mem. The memory operand can be a two-
                        or four-byte integer.

    FTST                Compares ST to 0. The control registers will be
                        affected as if ST had been compared to 0 in ST(1).
                        Table 17.2 above shows the possible results.



17.7.1.2  Compare and Pop

    These instructions compare the stack top to the source and then pop the
    stack. Thus, the destination is destroyed by the comparison.

    Syntax              Description
    ──────────────────────────────────────────────────────────────────────────
    FCOMP               Compares ST to ST(1) and pops ST off the register
                        stack.

    FCOMP ST(num)       Compares ST to ST(num) and pops ST off the register
                        stack.

    FCOMP mem           Compares ST to mem and pops ST off the register stack.
                        The operand can be a four- or eight-byte real number.

    FICOMP mem          Compares ST to mem and pops ST off the register stack.
                        The operand can be a two- or four-byte integer.

    FCOMPP              Compares ST to ST(1) and then pops the stack twice.
                        Both the source and destination are destroyed by the
                        comparison.


    Example

                IFDEF   c287
                .287
                ENDIF
                .DATA
    down        DD      10.35      ; Sides of a rectangle
    across      DD      13.07
    diameter    DD      12.93      ; Diameter of a circle
    status      DW      ?
                .CODE
                .
                .
                .
    ; Get area of rectangle
                fld     across     ; Load one side
                fmul    down       ; Multiply by the other

    ; Get area of circle
                fld1               ; Load one and
                fadd    st,st      ;   double it to get constant 2
                fdivr   diameter   ; Divide diameter to get radius
                fmul    st,st      ; Square radius
                fldpi              ; Load pi
                fmul               ; Multiply it

    ; Compare area of circle and rectangle
                fcompp             ; Compare and throw both away
                IFNDEF  c287
                fstsw   status     ; Load from coprocessor to memory
                fwait              ; Wait for coprocessor
                mov     ax,status  ; Memory to register
                ELSE
                fstsw   ax         ;   (for 287+, skip memory)
                ENDIF
                sahf               ;   to flags
                jp      nocomp     ; If parity set, can't compare
                jz      same       ; If zero set, they're the same
                jc      rectangle  ; If carry set, rectangle is bigger
                jmp     circle     ;   else circle is bigger

    nocomp:     .                  ; Error handler
                .
    same:       .                  ; Both equal
                .
    rectangle:  .                  ; Rectangle bigger
                .
    circle:     .                  ; Circle bigger

    Notice how conditional blocks are used to enhance 80287 code. If you
    define the symbol c287 from the command line by using the /D symbol option
    (see Section B.4, "Defining Assembler Symbols"), the code is smaller and
    faster, but does not run on an 8087.


17.7.2  Testing Control Flags after Other Instructions

    In addition to the compare instructions, the FXAM and FPREM instructions
    affect coprocessor control flags.

    The FXAM instruction sets the value of the control flags based on the type
    of the number in the stack top (ST). This instruction is used to identify
    and handle special values, such as infinity, zero, unnormal numbers,
    denormal numbers, and NANs (not a number). Certain math operations are
    capable of producing these special-format numbers. A description of them
    is beyond the scope of this manual. The possible settings of the flags are
    shown in the on-line Help system.

    FPREM also sets control flags. Since this instruction must sometimes be
    repeated to get a correct remainder for large operands, it uses the C2
    flag to indicate whether the remainder returned is partial (C2 is set) or
    complete (C2 is clear). If the bit is set, the operation should be
    repeated.

    FPREM also returns the least-significant three bits of the quotient in C0,
    C3, and C1. These bits are useful for reducing operands of periodic
    transcendental functions, such as sine and cosine, to an acceptable range.
    The technique is not explained here. The possible settings for each flag
    are shown in the on-line Help system.


17.8  Using Transcendental Instructions

    The 8087-family coprocessors provide a variety of instructions for doing
    transcendental calculations, including exponentiation, logarithmic
    calculations, and some trigonometric functions.

    Use of these advanced instructions is beyond the scope of this manual.
    However, the instructions are listed below for reference. All
    transcendental instructions have implied operands──either ST as a
    single-destination operand, or ST as the destination and ST(1) as the
    source.

    Instruction         Description
    ──────────────────────────────────────────────────────────────────────────
    F2XM1               Calculates 2^x-1, where x is the value of the stack
                        top. The value x must be between 0 and .5, inclusive.
                        Returning 2^x-1 instead of 2^x allows the instruction
                        to return the value with greater accuracy. The
                        programmer can adjust the result to get 2^x.

    FYL2X               Calculates Y times log2 X, where X is in ST and Y is
                        in ST(1). The stack is popped, so both X and Y are
                        destroyed, leaving the result in ST. The value of X
                        must be positive.

    FYL2XP1             Calculates Y times log2 (X+1), where X is in ST and Y
                        is in ST(1). The stack is popped, so both X and Y are
                        destroyed, leaving the result in ST. The absolute
                        value of X must be between 0 and the square root of 2
                        divided by 2. This instruction is more accurate than
                        FYL2X when computing the log of a number close to 1.

    FPTAN               Calculates the tangent of the value in ST. The result
                        is a ratio Y/X, with Y replacing the value in ST and X
                        pushed onto the stack so that after the instruction,
                        ST contains Y and ST(1) contains X. The value being
                        calculated must be a positive number less than pi/4.
                        The result of the FPTAN instruction can be used to
                        calculate other trigonometric functions, including
                        sine and cosine.

    FPATAN              Calculates the arctangent of the ratio Y/X, where X is
                        in ST and Y is in ST(1). The stack is popped, so both
                        X and Y are destroyed, leaving the result in ST. Both
                        X and Y must be positive numbers less than infinity,
                        and Y must be less than X. The result of the FPATAN
                        instruction can be used to calculate other inverse
                        trigonometric functions, including arcsine and
                        arccosine.



17.9  Controlling the Coprocessor

    Additional instructions are available for controlling various aspects of
    the coprocessor. With the exception of FINIT, these instructions are
    generally used only by systems programmers. They are summarized below, but
    not fully explained or illustrated. Some instructions have a wait version
    and a no-wait version. The no-wait versions have N as the second letter.

    Syntax              Description
    ──────────────────────────────────────────────────────────────────────────
    F[[N]]INIT          Resets the coprocessor and restores all the default
                        conditions in the control and status words. It is a
                        good idea to use this instruction at the start and end
                        of your program. Placing it at the start ensures that
                        no register values from previous programs affect your
                        program. Placing it at the end ensures that register
                        values from your program will not affect later
                        programs.

    F[[N]]CLEX          Clears all exception flags and the busy flag of the
                        status word. It also clears the error-status flag on
                        the 80287, or the interrupt-request flag on the 8087.

    FINCSTP             Adds 1 to the stack pointer in the status word. Do not
                        use to pop the register stack. No tags or registers
                        are altered.

    FDECSTP             Subtracts 1 from the stack pointer in the status word.
                        No tags or registers are altered.

    FREE ST(num)        Marks the specified register as empty.

    FNOP                Copies the stack top to itself, thus padding the
                        executable file and taking up processing time without
                        having any effect on registers or memory.


    8087 Only

    The 8087 has the instructions FDISI, FNDISI, FENI, and FNENI. These
    instructions can be used to enable or disable interrupts. The 80287
    coprocessor permits these instructions, but ignores them. Applications
    programmers will not normally need these instructions. Systems programmers
    should avoid using them so that their programs are portable to all
    coprocessors.



────────────────────────────────────────────────────────────────────────────
Chapter 18:  Controlling the Processor


    The 8086-family processors provide instructions for processor control.
    These instructions are available on all 8086-family processors.

    System-control instructions have limited use in applications programming.
    They are primarily used by systems programmers who write operating systems
    and other control software. Since systems programming is beyond the scope
    of this manual, the systems-control instructions are summarized, but not
    explained in detail, in the sections below.

    This chapter ends with a description of all the directives that enable the
    instruction sets for the various processors in the 8086 family.


18.1  Controlling Timing and Alignment

    The NOP instruction takes up one byte of memory but does not have any
    effect when executed. The purpose of this instruction is generally to fill
    up space in the code segment; primarily, it is used to pad executable code
    for alignment.

    Although NOP has no effect, it does take a few clock cycles to execute. In
    a sense, NOP does do something──it is exactly equivalent to the following
    instruction:

                xchg    ax,ax       ; Exchange AX with itself

    Because NOP does use up some clock time, you can use it in timing loops by
    executing it many times. However, when writing a program for use on
    different machines, avoid using this technique. Timing loops that use NOP
    take different lengths of time on different machines. A better way to
    control timing is to use the DOS Get Time function, since it is based on
    the computer's internal clock rather than on the speed of the processor.

    QuickAssembler automatically inserts NOP instructions for padding when you
    use the ALIGN or EVEN directive (see Section 6.7, "Aligning Data") to
    align data or code on a given boundary.


18.2  Controlling the Processor

    The LOCK, WAIT, ESC, and HLT instructions control different aspects of the
    processor.

    These instructions can be used to control processes handled by external
    coprocessors. The 8087-family coprocessors are the coprocessors most
    commonly used with 8086-family processors, but 8086-based machines can
    work with other coprocessors if they have the proper hardware and control
    software.

    These instructions are summarized below:

    Instruction         Description
    ──────────────────────────────────────────────────────────────────────────
    LOCK                Locks out other processors until a specified
                        instruction is finished. This is a prefix that
                        precedes the instruction. It can be used to make sure
                        that a coprocessor does not change data being worked
                        on by the processor.

    WAIT                Instructs the processor to do nothing until it
                        receives a signal that a coprocessor has finished with
                        a task being performed at the same time. See Section
                        17.4, "Coordinating Memory Access," for information
                        on using WAIT or its coprocessor equivalent, FWAIT,
                        with the 8087-family coprocessors.

    ESC                 Provides an instruction and possibly a memory operand
                        for use by a coprocessor. QuickAssembler automatically
                        inserts ESC instructions when required for use with
                        8087-family coprocessors.

    HLT                 Stops the processor until an interrupt is received. It
                        can be used in place of an endless loop if a program
                        needs to wait for an interrupt.



18.3  Processor Directives

    Processor and coprocessor directives define the instruction set that is
    recognized by QuickAssembler. They are listed and explained below:

    Directive           Description
    ──────────────────────────────────────────────────────────────────────────
    .8086               The .8086 directive enables assembly of instructions
                        for the 8086 and 8088 processors and the 8087
                        coprocessor. It disables assembly of the instructions
                        unique to the 80186, 80286, and 80386 processors.

                        This is the default mode and is used if no instruction
                        set directive is specified. Using the default
                        instruction set ensures that your program can be used
                        on all 8086-family processors. However, if you choose
                        this directive, your program will not take advantage
                        of the more powerful instructions available on more
                        advanced processors.

    .186                The .186 directive enables assembly of the 8086
                        processor instructions, 8087 coprocessor instructions,
                        and the additional instructions for the 80186
                        processor.

    .286                The .286 directive enables assembly of the 8086
                        instructions plus the additional nonprivileged
                        instructions of the 80286 processor. It also enables
                        80287 coprocessor instructions. If privileged
                        instructions were previously enabled, the .286
                        directive disables them.

                        This directive should be used for programs that will
                        be executed only by an 80186, 80286, or 80386
                        processor. For compatibility with early versions of
                        the Macro Assembler, the .286C directive is also
                        available. It is equivalent to the .286 directive.

    .8087               The .8087 directive enables assembly of instructions
                        for the 8087 math coprocessor and disables assem-bly
                        of instructions unique to the 80287 coprocessor. It
                        also specifies the IEEE format for encoding
                        floating-point variables.

                        This is the default mode and is used if no coprocessor
                        directive is specified. This directive should be used
                        for programs that must run with either the 8087,
                        80287, or 80387 coprocessors.

    .287                The .287 directive enables assembly of instructions
                        for the 8087 floating-point coprocessor and the
                        additional instructions for the 80287. It also
                        specifies the IEEE format for encoding floating-point
                        variables.

                        Coprocessor instructions are optimized if you use this
                        directive rather than the .8087 directive. Therefore,
                        you should use it if you know your program will never
                        need to run under an 8087 coprocessor. See Section
                        17.4, "Coordinating Memory Access," for an
                        explanation.


    If you do not specify any processor directives, QuickAssembler uses the
    following defaults:

    1. 8086/8088 processor instruction set

    2. 8087 coprocessor instruction set

    3. IEEE format for floating-point variables

    Normally, the processor and coprocessor directives can be used at the
    start of the source file to define the instruction sets for the entire
    assembly. However, it is possible to use different processor directives at
    different points in the source file to change assumptions for a section of
    code. For instance, you might have processor-specific code in different
    parts of the same source file. You can also turn privileged instructions
    on and off or allow unusual combinations of the processor and coprocessor.

    There are two limitations on changing the processor or coprocessor:

    1. The directives must be given outside segments. You must end the current
        segment, give the processor directive, and then open another segment.
        See Section 5.1.5, "Using Predefined Segment Equates," for an example
        of changing the processor directives with simplified segment
        directives.

    2. You can specify a lower-level coprocessor with a higher-level
        coprocessor, but an error message will be generated if you try to
        specify a lower-level processor with a higher-level coprocessor.

    The coprocessor directives have the opposite effect of the .MSFLOAT
    directive. .MSFLOAT turns off coprocessor instruction sets and enables the
    Microsoft Binary format for floating-point variables. Any coprocessor
    instruction turns on the specified coprocessor instruction set and enables
    IEEE format for floating-point variables.

    Examples

    ; .MSFLOAT affects the source file until turned off
                .MSFLOAT
                .8087              ; Ignored

    ; Illegal - can't use 8086 with 80287
                .8086
                .287



────────────────────────────────────────────────────────────────────────────
Appendix A:  Mixed-Language Mechanics


    The QuickAssembler PROC statement automates most details of interfacing to
    QuickC, as well as to other Microsoft high-level languages. When you use
    PROC with a parameter list or USES clause as described in Section 15.3.4,
    or when you use the LOCAL directive, the assembler generates code that
    properly enters and exits the procedure. The assembler also determines the
    location of each parameter on the stack for you. You refer to each
    parameter by a meaningful name, and the assembler translates each
    parameter name into the actual memory reference.

    The main purpose of this appendix is to show you what code the assembler
    generates when you use the LOCAL directive or expanded features of the
    PROC directive. However, you can write this code yourself rather than
    letting the assembler generate it. Doing so requires significant extra
    work, but it does give you complete control over your procedure.

    Using simplified segment directives is the easiest way to interface with a
    Microsoft high-level language (including QuickC). The simplified segment
    directives generate segment definitions similar to the ones generated by
    high-level languages and guarantee compatibility in the use of segment
    names and conventions. If you want to use full segment definitions, see
    Chapter 5, "Defining Segment Structure," for a description of the
    segments used in Microsoft languages.


A.1  Writing the Assembly Procedure

    The Microsoft BASIC, C, FORTRAN, and Pascal compilers use roughly the same
    interface for procedure calls. This section describes the interface, so
    that you can call assembly procedures using essentially the same methods
    as Microsoft compiler-generated code. Procedures written with these
    methods can be called recursively.

    The standard assembly-interface method consists of these steps:

    1. Setting up the procedure

    2. Entering the procedure

    3. Allocating local data (optional)

    4. Preserving register values

    5. Accessing parameters

    6. Returning a value (optional)

    7. Exiting the procedure

    The PROC statement, when used with a parameter list or USES clause,
    automates steps 1 and 2, and simplifies step 5 for you. The LOCAL
    directive automates step 3, and the USES clause automates step 4. Finally,
    if you use any of these features, the assembler automatically generates
    all the proper code to exit (step 7) wherever it encounters a RET
    directive. (However, the RETF and RETN statements never generate automatic
    code.)

    Sections A.1.1-A.1.7 describe these steps.


A.1.1  Setting Up the Procedure

    The linker cannot combine the assembly procedure with the calling program
    unless compatible segments are used and unless the procedure itself is
    declared properly. The following points may be helpful:

    1. Use the .MODEL directive at the beginning of the source file; this
        directive automatically causes the appropriate kind of returns to be
        generated (NEAR for small or compact model, FAR otherwise). Modules
        called from Pascal should be declared as .MODEL LARGE; modules called
        from BASIC should be .MODEL MEDIUM.

    2. Use the simplified segment directives: .CODE to declare the code
        segment and .DATA to declare the data segment. (Having a code segment
        is sufficient if you do not have data declarations.)

    3. Tie procedure label must be public. This makes the procedure available
        to be called by other modules. If you specify a language type with the
        .MODEL directive, the assembler automatically makes all procedure names
        public, but you must use the PUBLIC directive if you don't specify the
        language. Also, any data you want to make public to other modules must
        be declared as PUBLIC.

    4. Global data or procedures accessed by the routine (but defined in other
        modules) must be declared EXTRN.


A.1.2  Entering the Procedure

    Two instructions begin the procedure:

                push    bp
                mov     bp,sp

    This sequence establishes BP as the framepointer. The framepointer is used
    to access parameters and local data, which are located on the stack. SP
    cannot be used for this purpose because it is not an index or base
    register. Also, the value of SP may change as more data is pushed onto the
    stack. However, the value of the base register (BP) will remain constant
    throughout the procedure, so that each parameter can be addressed as a
    fixed displacement from the location pointed to by BP.

    The instruction sequence above first saves the value of BP, since it will
    be needed by the calling procedure as soon as the current procedure
    terminates. Then BP is loaded with the value of SP in order to capture the
    value of the stack pointer at the time of entry to the procedure.

    The PROC statement generates these two lines of code automatically if you
    use a parameter list, LOCAL directive, or USES clause.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  If you alter the direction flag with the STD instruction, make sure
    you reset this flag with the CLD instruction before you exit.
    ──────────────────────────────────────────────────────────────────────────


A.1.3  Allocating Local Data (Optional)

    Local variables are also called dynamic, stack, or automatic variables.

    An assembly procedure can use the same technique for implementing local
    data used by high-level languages. To set up local data space, decrease
    the contents of SP in the third instruction of the procedure. (To ensure
    correct execution, you should always increase or decrease SP by an even
    amount.) Decreasing SP reserves space on the stack for the local data. The
    space must be restored at the end of the procedure.

                push   bp
                mov    bp,sp
                sub    sp,space

    In the code above, space is the total size in bytes of the local data.
    Local variables are then accessed as fixed, negative displacements from
    the location pointed to by BP.

    Example

                push   bp
                mov    bp,sp
                sub    sp,4
                .
                .
                .
                mov    WORD PTR [bp-2],0
                mov    WORD PTR [bp-4],0

    The example above uses two local variables, each of which is two bytes in
    size. SP is decreased by 4, since there are four bytes total of local
    data. Later, each of the variables is initialized to 0. These variables
    are never formally declared with any assembler directive; the programmer
    must keep track of them manually.

    The LOCAL directive uses this same method for creating local variables.
    However, when you use LOCAL, you can refer to a local variable by a
    symbolic name rather than by a reference, such as WORD PTR [bp-2].


A.1.4  Preserving Register Values

    A procedure called from any of the Microsoft high-level languages should
    preserve the values of SI, DI, SS, and DS (in addition to BP, which is
    already saved). Therefore, push any of these register values that the
    procedure alters. If the procedure does not change the value of any of
    these registers, the registers do not need to be pushed.

    The recommended method (used by high-level languages) is to save registers
    after the framepointer is set and local data (if any) is allocated.

                push   bp           ; Save old framepointer
                mov    bp,sp        ; Establish current framepointer
                sub    sp,4         ; Allocate local data space
                push   si           ; Save SI and DI
                push   di
                .
                .
                .

    In the example above, DI and SI (in that order) must be popped from the
    stack before the end of the procedure.

    The USES clause in a PROC statement causes the assembler to generate this
    same code.


A.1.5  Accessing Parameters

    When you use PROC with a parameter list, the assembler calculates the
    location of each parameter on the stack. This section shows how the
    assembler determines these locations. If you do not use a parameter list,
    you must calculate parameter locations yourself and refer to them
    explicitly by their offsets from BP. Otherwise, you can refer to each
    parameter by the name you gave it in the parameter list.

    To write instructions that can access parameters, consider the general
    picture of the stack frame after a procedure call, as illustrated in
    Figure A.1.

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section A.1.5 of the manual                │
    └────────────────────────────────────────────────────────────────────────┘

    When determining the order of parameters on the stack, note that the C
    calling convention (the default for QuickC) specifies that parameters are
    passed in the reverse order they appear in source code. The non-C calling
    convention (which you can specify in QuickC with the pascal or fortran
    keyword) specifies that parameters are passed in the same order they
    appear in source code.

    The stack frame for the procedure is established by the following
    sequence:

    1. The calling program pushes each of the parameters on the stack, after
        which SP points to the last parameter pushed.

    2. The calling program issues a CALL instruction, which causes the return
        address (the place in the calling program to which control will
        ultimately return) to be placed on the stack. This address may be
        either two bytes long (for near calls) or four bytes long (for far
        calls). SP now points to this address.

    3. The first instruction of the called procedure saves the old value of
        BP, with the instruction push bp. SP now points to the saved copy of
        BP.

    4. BP is used to capture the current value of SP, with the instruction mov
        bp,sp. BP therefore now points to the old value of BP.

    5. Whereas BP remains constant throughout the procedure, SP may be
        decreased to provide room on the stack for local data or saved
        registers.

    In general, the displacement (from the location pointed to by BP) for a
    parameter X is equal to:

    2 + size of return address + total size of parameters between X and BP

    For example, consider a FAR procedure that has received one parameter, a
    two-byte address. The displacement of the parameter would be:

    Argument's displacement =  2 + size of return address
                            =  2 + 4
                            =  6

    The argument can thus be loaded into BX with the following instruction:

                mov     bx,[bp+6]

    Once you determine the displacement of each parameter, you may want to use
    string equates or structures so that the parameter can be referenced with
    a single identifier name in your assembly source code. For example, the
    parameter above at BP+6 can be conveniently accessed if you put the
    following statement at the beginning of the assembly source file:

    Arg1        EQU     <[bp+6]>

    You could then refer to this parameter as Arg1 in any instruction. Use of
    this feature is optional.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  Microsoft high-level languages always push segment addresses before
    pushing offset addresses. Furthermore, when pushing arguments larger than
    two bytes, high-order words are always pushed before low-order words.

    This standard for pushing segment addresses before pushing offset
    addresses facilitates the use of the LES and LDS instructions, as
    described in Chapter 3, "Writing Assembly Modules for C Programs."
    ──────────────────────────────────────────────────────────────────────────


A.1.6  Returning a Value (Optional)

    The assembler does not generate code to return a value. If you want your
    procedure to return a value, you must take care of the details yourself.

    Microsoft BASIC, C, FORTRAN, and Pascal share similar conventions for
    receiving return values. The conventions are the same when the data type
    to be returned is simple (that is, not an array or structured type) and is
    no more than four bytes long. This includes all NEAR and FAR address types
    (in other words, all pointers and all parameters passed by reference).

    Data Size           Returned in Register
    ──────────────────────────────────────────────────────────────────────────
    1 byte              AL

    2 bytes             AX

    4 bytes             High-order portion (or segment address) in DX;
                        low-order portion (or offset address) in AX


    When the return value is larger than four bytes, a procedure called by C
    must allocate space for the return value and then place its address in
    DX:AX. You can create space for the return value by simply declaring it in
    a data segment.

    If your assembly procedure uses the non-C calling convention, it must use
    a special convention in order to return floating-point values, records,
    user-defined types and arrays, and values larger than four bytes. This
    convention is presented below.

    BASIC/FORTRAN/Pascal Long Return Values

    To create an interface for long return values, modules using the non-C
    calling convention take the following actions before they call your
    procedure:

    1. The calling modules create space, somewhere in the stack segment, to
        hold the actual return value.

    2. When the call to your procedure is made, an extra parameter is passed
        containing the offset address of the actual return value. This
        parameter is placed immediately above the return address. (In other
        words, this parameter is the last one pushed.)

    3. The segment address of the return value is contained in both SS and DS.

    The extra parameter (containing the offset address of the return value) is
    always located at BP+6. Furthermore, its presence automatically increases
    the displacement of all other parameters by 2, as shown in Figure A.2.

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section A.1.6 of the manual                │
    └────────────────────────────────────────────────────────────────────────┘

    Your assembly procedure will successfully return a long value if you
    follow these steps:

    1. Put the data for the return value at the location pointed to by the
        return value offset.

    2. Copy the return-value offset (located at BP+6) to AX, and copy SS to
        DX. This is necessary because the calling module expects DX:AX to point
        to the return value.

    3. Exit the procedure as described in the next section.


A.1.7  Exiting the Procedure

    Several steps may be involved in terminating the procedure:

    1. If any of the registers SS, DS, SI, or DI have been saved, these must
        be popped off the stack in the reverse order that they were saved.

    2. If local data space was allocated at the beginning of the procedure, SP
        must be restored with the instruction mov sp,bp.

    3. Restore BP with pop bp. This step is always necessary.

    4. Finally, return to the calling program with ret. If the BASIC, FORTRAN,
        or Pascal calling convention is in use, you can use the ret n form of
        the instruction to adjust the stack with respect to the parameters that
        were pushed by the caller. (If the procedure is called by a C module,
        the calling module will perform this adjustment.)

    Examples

                pop    bp
                ret

    The example above shows the simplest possible exit sequence. No registers
    were saved, no local data space was allocated, and the C calling
    convention is in use.

                pop    di           ; Pop saved regs
                pop    si
                mov    sp,bp        ; Remove local data space
                pop    bp           ; Restore old framepointer
                ret    6            ; Exit, and restore 6 byte of args

    The example above shows an exit sequence for a procedure that has
    previously saved SI and DI, allocated local data space, and uses a non-C
    calling convention. The procedure must therefore use ret 6 (where n is 6)
    to restore the six bytes of parameters on the stack.

    Assuming you use one of the automated features described above (such as a
    parameter list or LOCAL directive), the assembler generates all the code
    to properly exit from a procedure whenever it encounters a RET
    instruction. However, the assembler does not generate any exit code when
    you use the directives RETN or RETF.


A.2  Calls from Modules Using C Conventions

    Most of the details below are automated when you use simplified segment
    directives and the expanded features of the PROC directive. Make sure to
    declare both a language type and a memory model with the .MODEL directive.

    This section reviews all the steps taken when you use the C language type.
    In addition to the steps outlined in Section A.1, the assembler observes
    the following rules to set up an interface to C.

    Follow these rules if you want to manually establish this interface:

    1. Declare procedures called from C as FAR if the C module is compiled in
        large, huge, or medium model, and NEAR if the C module is compiled in
        small or compact model (although the near and far keywords can override
        these defaults). The correct declaration for the procedure is made
        implicitly when you use the .MODEL directive. Note that tiny memory
        model is not supported by QuickC 2.0.

    2. Observe the C calling convention.

        a. Return with a simple ret instruction. Do not restore the stack with
        ret size, since the calling C routine will restore the stack itself
        as soon as it resumes control.

        b. Parameters are placed on the stack in the reverse order that they
        appear in the C source code. The first parameter will be lowest in
        memory (because it is placed on the stack last and the stack grows
        downward).

        c. By default, C parameters are passed by value, except for arrays,
        which are passed by reference. As a rule, do not expect an address
        to be placed on the stack, unless the C code specifically refers to
        a pointer or array in the function call or prototype.

        3. Observe the C naming convention.

        Include an underscore (_) in front of any name that will be shared
        publicly with C. C recognizes only the first eight characters of any
        name, so do not make names shared with C longer than eight characters.
        Also, if you plan to link with the /NOIGNORECASE option, remember that
        C is case sensitive and does not convert names to uppercase. To
        preserve lowercase names in public symbols, choose Preserve Case or
        Preserve Extrn from the Assembler Flags dialog box, or assemble with
        the /Cl or /Cx option on the QCL command line.

    In the example program below, C calls an assembly procedure that
    calculates "A x 2^B," where A and B are the first and second parameters,
    respectively. The calculation is performed by shifting the bits in A to
    the left, B times.

    extern int power2( int, int ),

    main  ()
    {
        printf( "3 times 2 to the power of 5 is %d\n",
                    power2( 3, 5 ) );
    }

    The C program uses an extern declaration to create an interface with the
    assembly procedure. No special keywords are required because the assembly
    procedure will use the C calling convention.

    To understand how to write the assembly procedure, consider how the
    parameters are placed on the stack, as illustrated in Figure A.3.

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section A.2 of the manual                  │
    └────────────────────────────────────────────────────────────────────────┘

    The return address is two bytes long, assuming that the C module is
    compiled in small or compact model. If the C module is compiled in large,
    huge, or medium model, the addresses of Arg 1 and Arg 2 are each increased
    by 2, to BP+6 and BP+8, respectively, because the return address will be
    four bytes long.

    Arg 1 (parameter 1) is lower in memory than Arg 2, because C pushes
    arguments in the reverse order that they appear. Each argument is passed
    by value.

    The assembly procedure can be written as follows:

                .MODEL      small
                .CODE
                PUBLIC      _power2
    _power2           PROC
                push                bp      ; Entry sequence - save old BP
                mov         bp,sp           ; Set stack framepointer

                mov         ax,[bp+4]       ; Load Arg1 into AX
                mov         cx,[bp+6]       ; Load Arg2 into CX
                shl         ax,cl           ; AX = AX * (2 to power of CX)
                                            ; Leave return value in AX

                pop         bp              ; Exit sequence - restore old BP
                ret                         ; Return
    _power2           ENDP
                END

    The example above assumes that the C module is compiled in small model.
    The parameter offsets and the .MODEL directive will change for different
    models.

    Note that ret without a size variable is used, since the caller will
    adjust the stack upon return from the call.


A.3  Calls from Non-C Modules

    In your C programs you can specify the pascal or fortran function type.
    These keywords are equivalent: they both specify use of non-C calling and
    naming conventions. Furthermore, you may want to interface to languages
    other than C (which you can do by linking .OBJ files together outside the
    environment). In all these cases, make sure you specify BASIC, FORTRAN, or
    Pascal as the language type with the .MODEL directive. Alternately, you
    can specify the language as part of the procedure if you are using the
    extended PROC directive.

    This section reviews all the steps taken when you use a non-C language
    type. In addition to the steps outlined in Section A.1, the assembler
    observes the following rules to set up an interface to a language using a
    non-C calling convention.

    Follow these rules if you want to manually establish an interface to a
    high-level language:

    1. If the procedure is called from Microsoft BASIC, Pascal, or FORTRAN,
        make sure to declare the procedure as FAR, or use the .MODEL directive
        to specify medium or large memory model. BASIC always uses medium
        memory model; Pascal uses large memory model.

    2. Observe the non-C calling convention.

        a. Upon exit, the procedure must reset SP to the value it had before
        the parameters were placed on the stack. This is accomplished with
        the instruction ret size, where size is the total size in bytes of
        all the parameters.

        b. Parameters are placed on the stack in the same order in which they
        appear in the high-level language source code. The first parameter
        will be highest in memory (because it is placed on the stack first
        and the stack grows downward).

        c. Each language has different defaults for passing parameters by value
        or reference. When a language passes by reference, it places a data
        pointer on the stack. When it passes by value, it places a complete
        copy of the parameter on the stack. Consult your language
        documentation for the details of when the language passes by value
        or reference. (In C, the default is by value except for arrays.)

        3. Observe the language naming convention.

        Microsoft BASIC, FORTRAN, and Pascal output symbolic names in uppercase
        characters, which is also the default behavior of the assembler. Each
        language recognizes a different number of characters in a name. For
        example, BASIC recognizes up to 40 characters of a name, whereas the
        assembler recognizes only the first 31.

    In the following example program, QuickBASIC 4.0 calls an assembly
    procedure that calculates "A x 2B," where A and B are the first and second
    parameters, respectively. The calculation is performed by shifting the
    bits in A to the left, B times. (Note: with earlier versions of BASIC, you
    need to rewrite the example so that it calls a subprogram, not a
    function.)

    ' BASIC program
    DEFINT A-Z
    PRINT "3 times 2 to the power of 5 is ";
    PRINT Power2(3,5)
    END

    To understand how to write the assembly procedure, consider how the
    parameters are placed on the stack, as illustrated in Figure A.4.

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section A.3 of the manual                  │
    └────────────────────────────────────────────────────────────────────────┘

    The return address is four bytes long because procedures called from BASIC
    must be FAR. Arg 1 (parameter 1) is higher in memory than Arg 2 because
    BASIC pushes arguments (parameters) in the same order in which they
    appear. Also, each argument is passed as a two-byte offset address, the
    BASIC default.

    The assembly procedure can be written as follows:

                .MODEL      medium
                .CODE
                PUBLIC      Power2
    Power2      PROC
                push        bp              ; Entry sequence - save old BP
                mov         bpsp            ; Set stack framepointer

                mov         bx,[bp+8]       ; Load Arg1 into
                mov         ax,[bx]         ;   AX
                mov         bx,[bp]         ; Load Arg2 into
                mov         cx,[bx]         ;   CX
                shl         ax,cl           ; AX = AX * (2 to power of CX)
                                            ; Leave return value in AX

                pop         bp              ; Exit sequence - restore old BP
                ret         4               ; Return, and restore 4 bytes
    Power2      ENDP
                END

    Note that each parameter must be loaded in a two-step process because the
    address of each is passed rather than the value. Also, note that the stack
    is restored with the instruction ret 4, since the total size of the
    parameters is four bytes.


A.4  Calling High-Level Languages from Assembly Language

    Many high-level-language routines assume that certain initialization code
    has previously been executed; you can ensure that the proper
    initialization is performed by starting in a high-level-language module,
    and then calling an assembly procedure. The assembly procedure can then
    call high-level-language routines as needed, as shown in Figure A.5.

    ┌────────────────────────────────────────────────────────────────────────┐
    │ This figure can be found in Section A.4 of the manual                  │
    └────────────────────────────────────────────────────────────────────────┘

    To execute an assembly call to a high-level language, you need to observe
    the following guidelines:

    1. Push each parameter onto the stack, observing the calling convention of
        the high-level language. Constants, such as offset addresses, must
        first be loaded into a register before being pushed.

    2. With long parameters, always push the segment or high-order portion of
        the parameter first, regardless of the calling convention.

    3. If you are using the BASIC/FORTRAN/Pascal calling convention with a
        function that returns a noninteger value, allocate an additional
        two-byte parameter. This additional parameter should contain the offset
        of the location where you want the value returned and must be pushed on
        the stack last.

    4. Execute a call. The call must be far unless the high-level-language
        routine is small model.

    5. If the routine used the C calling convention, after the call you must
        immediately clear the stack of parameters with the instruction add sp,
        size, where size is the total size in bytes of all parameters that were
        pushed.


A.5  Using Full Segment Definitions

    If you use the simplified segment directives by themselves, you do not
    need to know the names assigned for each segment. However, if you choose
    to use full segment definitions, you should use the SEGMENT, GROUP,
    ASSUME, and ENDS directives equivalent to the simplified segment
    directives.

    The following example shows the C-assembly program from Section A.3,
    without the simplified segment directives:

    _TEXT       SEGMENT     WORD PUBLIC 'CODE'
                ASSUME      cs:_TEXT
                PUBLIC      _Power2
    _Power2     PROC
                push        bp             ; Entry sequence - save BP
                mov         bp,sp          ; Set stack frame

                mov         ax,[bp+4]      ; Load Arg1 into AX
                mov         cx,[bp+6]      ; Load Arg2 into CX
                shl         ax,cl          ; AX = AX * (2 to power of CX)
                                            ; Leave return value in AX

                pop         bp             ; Exit sequence - restore BP
                ret                        ; Return
    _Power2     ENDP
    _TEXT       ENDS
                END



────────────────────────────────────────────────────────────────────────────
Appendix B:  Using Assembler Options with QCL


    You can use the QCL driver for both compiling and assembling. The driver
    compiles .C files and assembles .ASM files. Unless the /c option is given,
    the QCL driver then links together all resulting .OBJ files, as well as
    any .OBJ files specified on the command line. The default file extension
    is .OBJ.

    If you acquired QuickAssembler as an upgrade, make sure you use the
    version of QCL that came with the QuickAssembler package. This driver
    program is an updated and expanded version, and it supports assembly
    options in addition to all the compile options listed in the QuickC Tool
    Kit.

    The following options may affect work with .ASM files, but are not
    described here because they work precisely the same way as described in
    the QuickC Tool Kit:

    Option              Action
    ──────────────────────────────────────────────────────────────────────────
    /help               Print help listing for QCL

    /link flags         Specify linker flags

    /Fefile             Specify output file

    /Fofile             Name object file

    /Z{d|i}             Generate debugging information.


    The /c, /D, and /W options are documented in the QuickC Tool Kit, but are
    also documented here because their meaning and usage change somewhat for
    assembly-language files.

    In addition to the linker options documented in the QuickC Tool Kit, QCL
    supports one other option, /TINY. This option causes the linker to output
    a .COM file, if possible. The linker can only create a .COM file if the
    program is entirely written in assembly language, and all the modules
    observe the rules for the .COM format. (The easiest way to do this is to
    use tiny memory model as described in Chapter 5.) The following example
    generates a .COM file:

    QCL /AT TINYPROG.ASM /link /TINY

    The /AT option causes the assembler to check the assembly code for
    adherence to the .COM format. The /TINY linker option causes the linker to
    generate a .COM file.

    The QuickAssembler version of QCL supports the following options in
    addition to the ones supported for use with C-language modules:

    Option              Action
    ──────────────────────────────────────────────────────────────────────────
    /a                  Writes segments in alphabetical order

    /AT                 Requires program to use tiny memory model; gives error
                        messages for code that violates requirements of .COM
                        format

    /C{l|u|x}           Determines case sensitivity (l=preserve case,
                        u=convert to upper, x=preserve case of external and
                        public symbols)

    /D                  Defines symbols

    /Ez                 Displays error lines on screen

    /Flfile             Generates an assembly-listing file with given file
                        name

    /FPi                Creates code for emulated floating-point instructions

    /l                  Generates an assembly-listing file

    /P1                 Enables one-pass assembly

    /s                  Writes segments in source-code order (reverses effect
                        of /a)

    /Sa                 Lists all lines of macro expansions (assumes /Flfile
                        or /l is given)

    /Sd                 Adds pass 1 information to listing (assumes /Flfile or
                        /l is given)

    /Se                 Creates editor-oriented listing file; the resulting
                        listing has no page breaks or page headings (assumes
                        /Flfile or /l is given)

    /Sn                 Suppresses symbol-table in listing (assumes /Flfile or
                        /l is given)

    /Sq                 Generates an editor-based listing file with a
                        source-line index at the end (assumes Flfile or /l is
                        given)

    /Sx                 Suppresses listing of false conditionals (assumes
                        Flfile or /l is given)

    /t                  Suppresses messages if assembly is successful

    /v                  Displays extra statistics during assembly

    /w                  Equivalent to /W0

    /W{0|1|2}           Sets warning-message level



B.1  Specifying the Segment-Order Method

    Syntax

    /s           Default
    /a

    The /a option directs QuickAssembler to place the assembled segments in
    alphabetical order before copying them to the object file. The /s option
    directs the assembler to write segments in the order in which they appear
    in the source code.

    Source-code order is the default. If no option is given, QuickAssembler
    copies the segments in the order encountered in the source file. The /s
    option is provided for compatibility with the XENIX(R) operating system
    and for overriding a default option in the QuickAssembler environment
    variable.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  Some previous versions of the IBM Macro Assembler ordered segments
    alphabetically by default. Listings in some books and magazines have been
    written with these early versions in mind. If you have trouble assembling
    and linking a listing taken from a book or magazine, try using the /a
    option.
    ──────────────────────────────────────────────────────────────────────────

    The order in which segments are written to the object file is only one
    factor in determining the order in which they will appear in the
    executable file. The significance of segment order and ways to control it
    are discussed in Sections 5.2.1, "Setting the Segment-Order Method" and
    5.2.2.2, "Defining Segment Combinations with Combine Type."

    Example

    QCL /a file.asm

    The example above creates an object file, FILE.OBJ, whose segments are
    arranged in alphabetical order. If the /s option were used instead, or if
    no option were specified, the segments would be arranged in sequential
    order.


B.2  Checking Code for Tiny Model

    Syntax

    /AT

    The /AT option causes the assembler to enforce the requirements of .COM
    format. If the .MODEL directive is used, /AT generates an error unless the
    directive specifies tiny memory model. If the .MODEL directive is not
    used, the /AT option generates an error if any program-defined segments
    are referenced (since these references violate conditions of .COM format).

    The use of /AT alone does not generate a .COM file. You must also use the
    /TINY linker option, as in the following example:

    QCL /AT TINYPROG.ASM /link /TINY


B.3  Selecting Case Sensitivity

    Syntax

    /Cu          Default
    /Cl
    /Cx

    The /Cl option directs the assembler to make all names case sensitive. The
    /Cx option directs the assembler to make public and external names case
    sensitive. The /Cu option directs the assembler to convert all names to
    uppercase.

    By default, QuickAssembler converts all names to uppercase (/Cu).

    If case sensitivity is turned on, all names that have the same spelling
    but use letters of different cases are considered distinct. For example,
    with the /Cl option, DATA and data are different. They would also be
    different with the /Cx option if they were declared external or public.
    Public and external names include any label, variable, or symbol names
    defined by using the EXTRN, PUBLIC, or COMM directives (see Chapter 8,
    "Creating Programs from Multiple Modules").

    If you use the /Zi or /Zd option (these cause QCL to include debugging
    information), the /Cx, /Cl, and /Cu options affect the case of the
    symbolic data that will be available to a symbolic debugger.

    The /Cl and /Cx options are typically used when object modules created
    with QuickAssembler are to be linked with object modules created by a
    case-sensitive compiler such as the Microsoft C compiler. If case
    sensitivity is important, you should also use the linker /NOI option.

    Example

    QCL /Cx module.asm

    This example shows how to use the /Cx option with QuickAssembler to
    assemble a file with case-sensitive public symbols.


B.4  Defining Assembler Symbols

    Syntax

    /Dsymbol[[=value]]

    The /D option, when given with a symbol argument, directs QuickAssembler
    to define a symbol that can be used during the assembly as if it were
    defined as a text equate in the source file. Multiple symbols can be
    defined in a single command line.

    The value can be any text string that does not include a space, comma, or
    semicolon. If value is not given, the symbol is assigned a null string.

    Example

    QCL /Dwide /Dmode=3 file,,;

    This example defines the symbol wide and gives it a null value. The symbol
    could then be used in the following conditional-assembly block:

                IFDEF wide
                PAGE 50,132
                ENDIF

    When the symbol is defined in the command line, the listing file is
    formatted for a 132-column printer. When the symbol is not defined in the
    command line, the listing file is given the default width of 80 (see the
    description of the PAGE directive in Section 12.2, "Controlling Page
    Format in Listings").

    The example also defines the symbol mode and gives it the value 3. The
    symbol could then be used in a variety of contexts, as shown below:

                IF      mode LT 15         ; Use in expression
    scrmode     DB      mode               ; Initialize to mode
                ELSE
    scrmode     DB      15                 ; Initialize to 15
                ENDIF


B.5  Displaying Error Lines on the Screen

    Syntax

    /Ez

    The /Ez option directs QuickAssembler to display lines containing errors
    on the screen. Normally, when the assembler encounters an error, it
    displays only an error message describing the problem. When you use the
    /Ez option in the command line, the assembler displays the source line
    that produced the error in addition to the error message. QuickAssembler
    assembles faster without the /Ez option, but you may find the convenience
    of seeing the incorrect source lines worth the slight cost in processing
    speed.

    Example

    QCL /Ez file.asm


B.6  Creating Code for a Floating-Point Emulator

    Syntax

    /FPi 87 /FPi

    The /FPi and /FPi87 options control how instructions for a math
    coprocessor (such as the 8087, 80287, or 80387) are assembled. The /FPi
    option tells the assembler to generate code for a coprocessor emulator
    library. The /FPi87 option tells the assembler to generate code for a
    coprocessor. These options are different than most other QuickAssembler
    options in that the default for C files is /FPi, but the default for
    assembler files is /FPi87. They are also different in that the options
    must be specified separately for each file.

    An emulator library uses the instructions of a coprocessor if one is
    present; otherwise, the library executes interrupts that emulate
    coprocessor instructions. Emulator libraries are available for QuickC and
    other high-level language compilers, including Microsoft Pascal, BASIC,
    and FORTRAN compilers.

    With QuickAssembler, you should specify /FPi only for assembly modules
    that will be linked with a main C module, since the emulator code requires
    the start-up code generated by the C compiler. A stand-alone assembler
    program generated with /FPi will execute emulator interrupts, but the
    program will not work because the interrupts will not be initialized. If
    you are programming in the QC environment and you want the emulator
    library to be used with an assembler module, you must specify /FPi in the
    Global Custom Flags field of the Assembler Flags dialog box (reached from
    the Options menu). This will affect all assembly modules in the program
    list.

    To the applications programmer, writing code for the emulator is like
    writing code for a coprocessor. The instruction sets are the same (except
    as noted in Chapter 17, "Calculating with a Math Coprocessor"). However,
    at run time the coprocessor instructions are used only if there is a
    coprocessor available on the machine. If there is no coprocessor, the
    slower code from the emulator library is used instead.

    The /FPi87 option specifies that coprocessor instructions should be
    generated directly. It does not need to be given directly for assembly
    modules, since it is the default, but it must be specified for C modules.
    Programs that use this option can be run only on a system that has a
    coprocessor. If the program contains a main C module, it will fail with a
    warning if the system has no coprocessor. If the program is a stand-alone
    assembler program, you should write the code to check for a coprocessor
    and terminate with an error message if no coprocessor exists.

    Example

    QCL calc.c /FPi /Cx math.asm

    The example above assembles MATH.ASM with the /FPi option and compiles the
    C source file CALC.C. The resulting object files are then linked together
    to produce the file CALC.EXE. The C compiler generates emulator code for
    floating-point instructions. The FORTRAN, BASIC, and Pascal compilers
    generate similar code.


B.7  Creating Listing Files

    Syntax

    /l
    /Flfile

    The /l option directs QuickAssembler to create a listing file. Files
    specified with this option always have the base name of the source file
    plus a .LST extension. You cannot specify any other file name. The /Fl
    option has the same purpose as /l, but lets you specify any file name as
    the listing file. The default file name is the base file name plus a .LST
    extension.

    Example

    QCL /l prog.asm

    This example causes the assembler to generate the file PROG.LST during
    assembly.


B.8  Enabling One-Pass Assembly

    Syntax

    /P1

    The /P1 option causes the assembler to attempt translation of source code
    in one pass. If successful, the translation is significantly faster than
    the default two-pass assembly. Assembly modules cannot be successfully
    assembled with this option if they contain conditional-assembly directives
    that make references to pass 1 or pass 2.

    ──────────────────────────────────────────────────────────────────────────
    NOTE  One-pass assembly is not compatible with the generation of listing
    files or the /a option for specifying alphabetical segment order.
    ──────────────────────────────────────────────────────────────────────────

    If the assembler generates a message reporting that one-pass assembly is
    not possible, simply assemble the file again without using this option.

    Example

    QCL /P1 file.asm


B.9  Listing All Lines of Macro Expansions

    Syntax

    /Sa

    The /Sa option causes the listing file to contain all statements generated
    by the assembler. It overrides directives that limit listings such as
    .XLIST, .XALL, and .SFCOND. It forces display of all statements generated
    automatically by simplified segment directives and the extended PROC
    syntax. The /Sa option has no effect unless /l or /Fl is also specified.

    Example

    QCL /l /Sa file.asm


B.10  Creating a Pass 1 Listing

    Syntax

    /Sd

    The /Sd option causes the listing file to contain the results of both
    assembler passes. A pass 1 listing is typically used to locate phase
    errors. Phase errors occur when the assembler makes assumptions about the
    program in pass 1 that are not valid in pass 2. The /Sd option has no
    effect unless /l or /Fl is also specified.

    Example

    QCL /l /Sd file.asm


B.11  Specifying an Editor-Oriented Listing

    Syntax

    /Se

    The /Se option causes the assembler to generate the listing file in a
    format suited to text editors. This format does not contain page breaks or
    page headings. The default behavior, which is designed for files output to
    a printer, assumes a page break and heading at periodic intervals. The /Se
    option has no effect unless /l or /Fl is also specified.

    Example

    QCL /l /Se file.asm


B.12  Suppressing Tables in the Listing File

    Syntax

    /Sn

    The /Sn option tells the assembler to omit all tables from the end of the
    listing file. If this option is not chosen, QuickAssembler includes tables
    of macros, structures, records, segments and groups, and symbols. The code
    portion of the listing file is not changed by the /Sn option. The /Sn
    option has no effect unless /l or /Fl is also specified.

    Example

    QCL /l /Sn file.asm


B.13  Adding a Line-Number Index to the Listing

    Syntax

    /Sq

    The /Sq option generates an editor-based listing file just as the /Se
    option does, but it also adds a source-line index to the end of the
    listing file. This index contains pairs of corresponding line numbers for
    the listing file and appropriate source files. The QuickC/QuickAssembler
    environment uses this information to let you move from a source file to
    the corresponding position in a listing file.

    When you create a listing file from within the QuickC/QuickAssembler
    environment, QC.EXE automatically passes this option to the assembler. The
    /Sq option has no effect unless /l or /Fl is also specified.

    Example

    QCL /l /Sq file.asm


B.14  Listing False Conditionals

    Syntax

    /Sx

    The /Sx option directs QuickAssembler to copy to the assembly listing all
    statements forming the body of conditional-assembly blocks whose condition
    is false. If you do not give the /Sx option in the command line,
    QuickAssembler suppresses all such statements. The /Sx option lets you
    display conditionals that do not generate code. Conditional-assembly
    directives are explained in Chapter 12, "Controlling Assembly Output."

    The .LFCOND, .SFCOND, and .TFCOND directives can override the effect of
    the /Sx option, as described in Section 12.3.2, "Controlling Listing of
    Conditional Blocks." The /Sx option does not affect the assembly listing
    unless you direct the assembler to create an assembly-listing file.

    Example

    QCL /Sx file,,;

    Listing of false conditionals is turned on when FILE.ASM is assembled.
    Directives in the source file can override the /Sx option to change the
    status of false-conditional listing.


B.15  Controlling Display of Assembly Statistics

    Syntax

    /v
    /t

    The /v and /t options specify the level of information displayed to the
    screen at the end of assembly (/v is a mnemonic for verbose; /t is a
    mnemonic for terse).

    If neither option is given, QuickAssembler outputs a line telling the
    amount of symbol space free and the number of warnings and errors.

    If the /v option is given, QuickAssembler also reports the number of lines
    and symbols processed.

    If the /t option is given, QuickAssembler does not output anything to the
    screen unless errors are encountered. This option may be useful in batch
    or make files if you do not want the output cluttered with unnecessary
    messages.

    If errors are encountered, they will be displayed whether these options
    are given or not.


B.16  Setting the Warning Level

    Syntax

    /W{0 | 1 | 2}
    /w

    The /W option sets the assembler warning level. QuickAssembler gives
    warning messages for assembly statements that are ambiguous or
    questionable but not necessarily illegal. Some programmers purposely use
    practices that generate warnings. By setting the appropriate warning
    level, they can turn off warnings if they are aware of the problem and do
    not wish to take action to remedy it. The /w option is equivalent to /W0.

    QuickAssembler has three levels of errors, as shown in Table B.1.

    Table B.1 Warning Levels

    Level           Type            Description
    ──────────────────────────────────────────────────────────────────────────
    0               Severe errors   Illegal statements

    1               Serious         Ambiguous statements or questionable
                    warnings        programming practices

    2               Advisory        Statements that may produce inefficient
                    warnings        code

    ──────────────────────────────────────────────────────────────────────────


    The default warning level is 1. A higher warning level includes all of the
    messages reported by a lower level. Level 2 includes severe errors,
    serious warnings, and advisory warnings. If severe errors are encountered,
    no object file is produced.

    Warning level 0 reports error messages in the range 1000-2999. Warning
    level 1 reports warning and error messages in the ranges 1000-2999 and
    4000-4999. Warning level 2 reports all warning and error messages,
    including those numbered 5000 and above.



────────────────────────────────────────────────────────────────────────────
Appendix C:  Reading Assembly Listings


    QuickAssembler creates an assembly listing of your source file whenever
    you give an assembly-listing option on the QCL command line or select a
    listing file option in the Assembler Flags dialog box. The assembly
    listing contains both the statements in the source file and the object
    code (if any) generated for each statement. The listing also shows the
    names and values of all labels, variables, and symbols in your source
    file.

    The assembler creates tables for macros, structures, records, segments,
    groups, and other symbols. These tables are placed at the end of the
    assembly listing (unless you suppress them with the QCL /Sn option).
    QuickAssembler lists only the types of symbols encountered in the program.
    All symbol names will be shown in uppercase letters unless you choose
    Preserve Case or Preserve Extrn from the Assembler Flags dialog box or use
    a QCL option (/Cx or /Cl) that supports case sensitivity.


C.1  Reading Code in a Listing

    The assembler lists the code generated from the statements of a source
    file. Each line has the syntax shown below:

    offset [[code]] statement

    The offset is the offset from the beginning of the current segment to the
    code. If the statement generates code or data, code shows the numeric
    value in hexadecimal if the value is known at assembly time. If the value
    is calculated at run time, the assembler indicates what action is
    necessary to compute the value. The statement is the source statement
    shown exactly as it appears in the source file, or as expanded by a macro.

    If any errors occur during assembly, each error message and error number
    will appear directly below the statement where the error occurred. An
    example of an error line and message is shown below:

    0012  E8 001C R                            call    doit
    test.ASM(46): error A2071: Forward needs override or FAR

    The assembler uses the symbols and abbreviations in Table C.1 to indicate
    addresses that need to be resolved by the linker or values that were
    generated in a special way.

    Table C.1 Symbols and Abbreviations in Listings

    Character          Meaning
    ──────────────────────────────────────────────────────────────────────────
    R                  Relocatable address (linker must resolve)

    E                  External address (linker must resolve)

    ----               Segment/group address (linker must resolve)

    =                  EQU or equal-sign (=) directive

    nn:                Segment override in statement

    nn/                REP or LOCK prefix instruction

    nn[xx]             DUP expression: nn copies of the value xx

    n                  Macro-expansion nesting level (+ if more than nine)

    C                  Line from include file

    ──────────────────────────────────────────────────────────────────────────


    Example

    The sample listing shown in this section is produced using the /Se option,
    which produces an editor-oriented listing. The QuickC/QuickAssembler
    environment always produces this kind of listing. The editor-oriented
    environment produces no page headings and is thus ideal for viewing within
    the environment or another editor. If you are using QCL to generate a
    listing file that you intend to print, you may want to generate a
    printer-oriented listing file by giving the /Sp option:

    QCL /l /Sp listdemo.asm

    The code portion of the resulting listing is shown below. The tables
    normally seen at the end of the listing are explained later, in Sections
    C.2-C.7.

    Microsoft(R) QuickC with QuickAssembler Version 2.01 Listing features demo

                                            PAGE    65,132
                                            TITLE   Listing features  demo
                                C          INCLUDE dos.mac
                                C  StrAlloc    MACRO   name,text
                                C  name        DB      &text
                                C              DB      13d,10d
                                C  l&name      EQU     $-name
                                C              ENDM

    = 0080                         larg    EQU     80h

                                            DOSSEG
                                            .MODEL  small

    0100                                   .STACK  256

                                    color   RECORD  b:1,r:3=1,i:1=1,f:3=7

                                    date    STRUC
    0000  05                       month   DB      5
    0001  07                       day     DB      7
    0002  07C3                     year    DW      1987
    0004                           date    ENDS

    0000                                   .DATA
    0000  1F                       text    color   <>
    0001  09                       today   date    <9,22,1987>
    0002  16
    0003  07C3

    0005  0064[                    buffer  DW      100 DUP(?)
                ????



                                            StrAlloc ending,"Finished."
    00CD  46 69 6E 69 73 68 65  1  ending        DB      "Finished."
    00D6  0D 0A                 1              DB      13d,10d

    0000                                   .CODE

    0000  B8 ---- R                start:  mov     ax,@DATA
    0003  8E D8                            mov     ds,ax

    0005  B8 0063                          mov     ax,'c'
    0008  26: 8B 0E 0080                   mov     cx,es:larg
    000D  BF 0052                          mov     di,82
    0010  F2/ AE                           repne   scasb
    0012  57                               push    di

                                            EXTRN   work:NEAR
    0013  E8 0000 E                        call    work

    0016  B8 170C                          mov     ax,4C00
    listdemo.ASM(40): error A2107: Non-digit in number
    0019  CD 21                            int     21h

    001B                                   END     start


C.2  Reading a Macro Table

    A macro table at the end of a listing file gives the names and sizes (in
    lines) of all macros called or defined in the source file. The macros
    appear in alphabetical order.

    Example

    Macros:

                    N a m e                 Lines

    STRALLOC . . . . . . . . . . . .           3


C.3  Reading a Structure and Record Table

    All structures and records declared in the source file are given at the
    end of the listing file. The names are listed in alphabetical order. Each
    name is followed by the fields in the order in which they are declared.

    Example

    Structures and Records:

                    N a m e                 Width   # fields
                                            Shift   Width   Mask    Initial

    COLOR  . . . . . . . . . . . . .        0008    0004
    B  . . . . . . . . . . . . . .        0007    0001    0080    0000
    R  . . . . . . . . . . . . . .        0004    0003    0070    0010
    I  . . . . . . . . . . . . . .        0003    0001    0008    0008
    F  . . . . . . . . . . . . . .        0000    0003    0007    0007
    DATE . . . . . . . . . . . . . .        0004    0003
    MONTH  . . . . . . . . . . . .        0000
    DAY  . . . . . . . . . . . . .        0001
    YEAR . . . . . . . . . . . . .        0002

    The first row of headings only applies to the record or structure itself.
    For a record, the "Width" column shows the width in bits while the "#
    fields" column tells the total number of fields.

    The second row of headings applies only to fields of the record or
    structure. For records, the "Shift" column lists the offset (in bits) from
    the low-order bit of the record to the low-order bit in the field. The
    "Width" column lists the number of bits in the field. The "Mask" column
    lists the maximum value of the field, expressed in hexadecimal. The
    "Initial" column lists the initial value of the field, if any. For each
    field, the table shows the mask and initial values as if they were placed
    in the record and all other fields were set to 0.

    For a structure, the "Width" column lists the size of the structure in
    bytes. The "# fields" column lists the number of fields in the structure.
    Both values are in hexadecimal.

    For structure fields, the "Shift" column lists the offset in bytes from
    the beginning of the structure to the field. This value is in hexadecimal.
    The other columns are not used.


C.4  Reading a Segment and Group Table

    Segments and groups used in the source file are listed at the end of the
    program with their size, align type, combine type, and class. If you used
    simplified segment directives in the source file, the actual segment names
    generated by QuickAssembler will be listed in the table.

    Example

    Segments and Groups:

                    N a m e                 Size    Align   Combine Class

    DGROUP . . . . . . . . . . . . .        GROUP
    _DATA  . . . . . . . . . . . .        00D8    WORD    PUBLIC  'DATA'
    STACK  . . . . . . . . . . . .        0800    PARA    STACK   'STACK'
    _TEXT  . . . . . . . . . . . . .        0018    BYTE    PUBLIC  'CODE'

    The "Name" column lists the names of all segments and groups. Segment and
    group names are given in alphabetical order, except that the names of
    segments belonging to a group are placed under the group name in the order
    in which they were added to the group.

    The "Size" column lists the byte size (in hexadecimal) of each segment.
    The size of groups is not shown.

    The "Align" column lists the align type of the segment.

    The "Combine" column lists the combine type of the segment. If no explicit
    combine type is defined for the segment, the listing shows NONE,
    representing the private combine type. If the "Align" column contains AT,
    the "Combine" column contains the hexadecimal address of the beginning of
    the segment.

    The "Class" column lists the class name of the segment. For a complete
    explanation of the align, combine, and class types, see Section 5.2.2,
    "Defining Full Segments."


C.5  Reading a Symbol Table

    All symbols (except names for macros, structures, records, and segments)
    are listed in a symbol table at the end of the listing.

    Example

    Symbols:

                    N a m e              Type     Value   Attr

    BUFFER . . . . . . . . . . . . .     L WORD  0005    _DATA   Length = 0064

    ENDING . . . . . . . . . . . . .     L BYTE  00CD    _DATA

    LARG . . . . . . . . . . . . . .     NUMBER  0080
    LENDING  . . . . . . . . . . . .     NUMBER  000B

    START  . . . . . . . . . . . . .     L NEAR  0000    _TEXT

    TEXT . . . . . . . . . . . . . .     L BYTE  0000    _DATA
    TODAY  . . . . . . . . . . . . .     L DWORD 0001    _DATA

    WORK . . . . . . . . . . . . . .     L NEAR  0000    _TEXT   External

    @CODE  . . . . . . . . . . . . .     TEXT  _TEXT
    @CODESIZE  . . . . . . . . . . .     TEXT  0
    @DATA  . . . . . . . . . . . . .     TEXT  DGROUP
    @DATASIZE  . . . . . . . . . . .     TEXT  0
    @FARDATA . . . . . . . . . . . .     TEXT  FAR_DATA
    @FARDATA?  . . . . . . . . . . .     TEXT  FAR_BSSk
    @FILENAME  . . . . . . . . . . .     TEXT  listdemo
    @MODEL . . . . . . . . . . . . .     TEXT  1
    @VERSION . . . . . . . . . . . .     TEXT  520

    The "Name" column lists the names in alphabetical order. The "Type" column
    lists each symbol's type. A type is given as one of the following:

    Type                Definition
    ──────────────────────────────────────────────────────────────────────────
    L NEAR              A near label

    L FAR               A far label

    N PROC              A near procedure label

    F PROC              A far procedure label

    NUMBER              An absolute label

    ALIAS               An alias for another symbol

    TEXT                A text equate

    BYTE                One byte

    WORD                One word (two bytes)

    DWORD               Doubleword (four bytes)

    QWORD               Quadword (eight bytes)

    TBYTE               Ten bytes

    number              Length in bytes of a structure variable


    The length of a multiple-element variable, such as an array or string, is
    the length of a single element, not the length of the entire variable. For
    example, string variables are always shown as L BYTE.

    If the symbol represents an absolute value defined with an EQU or
    equal-sign (=) directive, the "Value" column shows the symbol's value. The
    value may be another symbol, a string, or a constant numeric value (in
    hexadecimal), depending on whether the type is ALIAS, TEXT, or NUMBER. If
    the symbol represents a variable, label, or procedure, the "Value" column
    shows the symbol's hexadecimal offset from the beginning of the segment in
    which it is defined.

    The "Attr" column shows the attributes of the symbol. The attributes
    include the name of the segment (if any) in which the symbol is defined,
    the scope of the symbol, and the code length. A symbol's scope is given
    only if the symbol is defined using the EXTRN and PUBLIC directives. The
    scope can be external, global, or communal. The code length (in
    hexadecimal) is given only for procedures. The "Attr" column is blank if
    the symbol has no attribute.

    The text equates shown at the end of the sample table are the ones defined
    automatically when you use simplified segment directives (see Section
    5.1.1, "Understanding Memory Models").


C.6  Reading Assembly Statistics

    Data on the assembly, including the number of lines and symbols processed
    and the errors or warnings encountered, is shown at the end of the
    listing.

    Example

    48 Source  Lines
        52 Total   Lines
        53 Symbols

    45570 + 310654 Bytes symbol space free

        0 Warning Errors
        1 Severe  Errors


C.7  Reading a Pass 1 Listing

    When you specify the /Sd option in the QCL command line or select Pass One
    Information from the Assembler Flags dialog box, the assembler puts a pass
    1 listing in the assembly-listing file. The listing file shows the results
    of both assembler passes. Pass 1 listings are useful in analyzing phase
    errors.

    The following example illustrates a pass 1 listing for a source file that
    assembled without error on the second pass.

    0017  7E 00               jle     label1
    PASS_CMP.ASM(20) : error 9 : Symbol not defined LABEL1
    0019  BB 1000             mov     bx,4096
    001C             label1:

    During pass 1, the JLE instruction to a forward reference produces an
    error message and the value 0 is encoded as the operand. QuickAssembler
    displays this error because it has not yet encountered the symbol label1.

    Later in pass 1, label1 is defined. Therefore, the assembler knows about
    label1 on pass 2 and can fix the pass 1 error. The pass 2 listing is shown
    below:

    0017  7E 03               jle     label1
    0019  BB 1000             mov     bx,4096
    001C             label1:

    The operand for the JLE instruction is now coded as 3 instead of 0 to
    indicate that the distance of the jump to label1 is three bytes.

    Since QuickAssembler generated the same number of bytes for both passes,
    there was no error. Phase errors occur if the assembler makes an
    assumption on pass 1 that it cannot change on pass 2. If you get a phase
    error, you can examine the pass 1 listing to see what assumptions the
    assembler made.



═══════════════════════════════════════════════════════════════════════════
Index


Symbols

(brackets)
    with arrays
    index operator
    with registers
+ (plus sign), to separate registers
_ (underscore)

Numbers

10-byte temporary-real format
.186 directive
.286 directive
.287 directive
.8086 directive
8086-family processors
    assembly language
    calculating physical addresses (figure)
    flags (figure)
    instructions
    registers (figure)
.8087 directive
8087-family registers, modifying

A

/a option
AAA instruction
AAD instruction
AAM instruction
AAS instruction
ABS type
Absolute segments
Accumulator
ADC instruction
ADD instruction
Adding
Addressing modes
    contrasted with C
    defined
    direct memory
    immediate
    indirect memory
    listed
    register
Advisor, Quick
Advisory warnings
AH register
AL register
Aliases
ALIGN directive
Align type
Alignment, of segments
.ALPHA directive
& (ampersand), operator
Ampersand (&), operator
AND instruction
AND operator
\la (angle brackets), operator
Angle brackets (\la), operator
Animate command
Arguments
    macros
    passing on stack
    repeat blocks
Arithmetic operators (table)
Arrays
    accessing elements of
    boundary checking
    defining
    specifying elements
ASCII character set
    converting numerals to face value
    name for unpacked BCD numbers
Assembler display mode
Assembler Flags dialog box (figure)
Assembler options, summary
Assembly
    calling from C
    parameters, accessing
    passing by
    near reference
    value
    warning levels (table)
Assembly listing
    addresses
    false conditionals
    macros
    page breaks
    page length
    page width
    reading
    subtitle
    suppressing
    title
Assembly-language books
ASSUME directive
(at sign)
    symbol names, used in
/AT option
AT combine type
Attributes of variables
Auto display mode
Automatic variables
Auxiliary-carry flag
AX register

B

Base register
Based operands
Based-indexed operands
BASIC
    calling convention
    for loops
    nestinglevel
    ON GOTO statements
    stack
    frame (figure)
    long return values (figure)
BCD (binary coded decimal) numbers
    calculations with
    constants
    defining of
    transfer instructions (list)
    variables initialized
BH register
Binary integers, transfer instructions (list)
Binary radix
Binary to decimal conversion
BIOS functions
    calling with interrupts
    on-line help
Bit fields
Bit mask
Bits, rotating and shifting (figure)
Bitwise operators
BL register
Boolean bit operations
BOUND instruction
Boundary-checking array
BP register
Brackets ()
    with arrays
    index operator
    with registers
Buffers
Bugs, reporting
Building programs
    within environment
    QCL driver
BY memory operator
BYTE align type
BYTE type specifier

C

C compiler
C display mode
C language
    assembly call (figure)
    calling convention
    if statement
    interfacing with
    loops
    memory models and
    nestinglevel value
    passing by value
    return value
    stack frame (figure)
    switch statements
C register variables
CALL instruction
Call tables
Calling convention
Calls command
Carry flag
Case sensitivity
    compilers
    lack of
    options
    preserving
CATSTR directive
CBW instruction
CH register
Character constant
Character set
/Cl option
/Cl option
CL register
    defined
    use in shifting bits
Class type
Classical-stack operands, coprocessor
CLC instruction
CLD instruction
CLI instruction
CMP instruction
CMPS instruction
.CODE directive
CODE class name
Code equate
Code Segment register
Code segments
    developing programs with
    initializing
(colon), operator
    definition
(colon), operator
    in Debug expressions
.COM file, assembling
.COM format
    debugging
    example
    with full segment definitions
    initializing
    with linker
    restrictions on
    tiny memory model
Combine type
COMENT object record
COMM directive
Command line, QC
COMMENT directive
COMMON combine type
Communal symbols
Compact memory model
Compare instructions
Comparing
    register to zero
    strings
Concatenating strings
Conditional assembly
Conditional directives
    assembly directives
    assembly passes
    error directives
    macro arguments
    nesting
    operators
    symbol definition
    value of true and false
Conditional-error directives (table)
Conditional-jump instructions
    based on flag status (table)
    defined
    logic
    used after Compare (table)
.CONST directive
Constants
    as direct memory operands
    integer
    loading instructions (list)
    multiplying and dividing by
    packed binary coded decimal
    real number
    string
    use of
Control data, coprocessor
Control registers, coprocessor (figure)
Control-flag settings (table)
Control-flow instructions
Controlling program flow
Converting
    binary to decimal
    data sizes
Coprocessors
    architecture
    control data
    control flags (figure)
    control instructions (list)
    control registers (figure)
    data registers (figure)
    directives (list)
    emulator
    loading data
    loading pi
    no-wait instructions
    operand forms (table)
    storing data
Copying data
Count register
Cpu equate
CS register
/Cu option
Current-line highlighting
Custom flags
Customer support
CWD instruction
/Cx option
/Cx option
CX register

D

D
DAA instruction
DAS instruction
.DATA directive
.DATA? directive
Data conversion
Data equate
Data pointer, using far
Data registers, coprocessor (figure)
Data segments
    defining
    developing programs with
    initializing
    registers
Data-definition directives
Data-manipulation instructions
DataSize equate
DB directive
.DBG files
DD directive
Debug expression operators
Debug flags
Debugging
    commands
    local variables
DEC instruction
Decimal conversion example
Decimal, packed BCD numbers
Decimal radix
Declaring
    far pointers
    strings
Decrementing
Defaults
    file extension
    QCL driver
    radix
    segment names
    segment registers
    simplified segment
    stack size
    types
Defining symbols from command line
Dereferencing, pointer
Destination operand
Destination string
DGROUP group name
    COMM directive, with
    DOSSEG, with
    simplified segments, with
DH register
DI register
DIF
Direction flag
Directives
    .186
    .286
    .287
    .8086
    .8087
    ALIGN
    .ALPHA
    ASSUME
    CATSTR
    .CODE
    COMM
    COMMENT
    .CONST
    .DATA
    .DATA?
    data definition (list)
    data (list)
    DB
    DD
    defined
    DOSSEG
    DQ
    DT
    DW
    ELSE
    ELSEIF
    EQU
    equal sign (=)
    .ERR
    .ERR1
    .ERR2
    .ERRB
    .ERRDEF
    .ERRDIF
    .ERRE
    .ERRIDN
    .ERRNB
    .ERRNDEF
    .ERRNZ
    EVEN
    EXITM
    EXTRN
    .FARDATA
    .FARDATA?
    full segment
    global
    GROUP
    IF
    IF1
    IF2
    IFB
    IFDEF
    IFDIF
    IFE
    IFIDN
    IFNB
    IFNDEF
    INCLUDE
    INCLUDELIB
    INSTR
    instruction set
    IRP
    IRPC
    LABEL
    .LALL
    .LFCOND
    .LIST
    LOCAL
    MACRO
    .MODEL
    .MSFLOAT
    NAME
    on-line help
    ORG
    %OUT
    PAGE
    PROC
    PUBLIC
    PURGE
    .RADIX
    RECORD
    REPT
    .SALL
    SEGMENT
    .SEQ
    .SFCOND
    simplified segment
    SIZESTR
    .STACK
    .STARTUP
    string-manipulation (list)
    STRUC
    SUBSTR
    SUBTTL
    .TFCOND
    TITLE
    .XALL
    .XLIST
Directives
Displacement
Display dialog box (figure)
Display mode
DIV instruction
Divide overflow interrupt
Dividing
    by constants
    integers
DL register
DM
Document conventions
Documentation feedback card
$ (dollar sign)
    location counter symbol
    symbol names, used in
Dollar sign ($)
    location counter symbol
    symbol names, used in
DOS
    returning to
    version requirements
DOS functions
    calling with interrupts
    Exit, registers used (list)
    on-line help
    segment-order convention
    Write, registers used (list)
/DOSSEG linker option
DOSSEG directive
DP
DQ directive
DS
DS register
/Dsymbol option
DT directive
Dummy parameters
    macros
    repeat blocks
Dummy segment definitions
DUP operator
DW directive
DW memory operator
DWORD type specifier
DX register
Dynamic variables

E

Effective address
Elements, array
ELSE directive
ELSEIF directives
Emulator, coprocessor
Encoded real numbers
END directive
ENDIF directive
ENDM directive
ENDP directive
ENDS directive
ENTER instruction
Environment variable, INCLUDE
EQ operator
EQU directive
= (equal sign), directive
Equal sign (=), directive
Equates
    defined
    nonredefinable
    predefined. See predefined equates
    redefinable
    string
.ERR directive
.ERR1 directive
.ERR2 directive
.ERRB directive
.ERRDEF directive
.ERRDIF directive
.ERRE directive
.ERRIDN directive
.ERRNB directive
.ERRNDEF directive
.ERRNZ directive
Error lines, displaying
ES register
ESC instruction
EVEN directive
! (exclamation point), operator
Exclamation point (!), operator
Execution, tracing
Exit function, DOS
Exiting a program
EXITM directive
Exponent, part of real-number constant
Exponentiation, with 8087-family coprocessors
Expression operator (%)
Expressions
    in Debug commands
    defined
External names
External symbols
Extra segment
EXTRN directive
/Ez option

F

F2XM1 instruction
FABS instruction
FADD instruction
FADDP instruction
False conditionals, listing
Far data pointers
    decimal conversion with
    loading
FAR type specifier
.FARDATA? directive
.FARDATA directive
Fardata equate
Fardata? equate
farStack
farStack keyword
Fatal errors
FBLD instruction
FBSTP instruction
FCHS instruction
FCOM instruction
FCOMP instruction
FCOMPP instruction
FDIV instruction
FDIVP instruction
FDIVR instruction
FDIVRP instruction
FIADD instruction
FICOM instruction
FICOMP instruction
FIDIV instruction
FIDIVR instruction
Fields
    assembler statements
    bit
    records
    structures
File extensions, default
File menu, defaults
Filename equate
Files
    .COM
    .DBG
    include
    listing
    specifications
FIMUL instruction
Finishing execution
FINIT instruction
First-in-first-out (FIFO)
FIST instruction
FISTP instruction
FISUB instruction
FISUBR instruction
/Fl option
Flags
    8086-family processors (figure)
    altering within environment
    build
    control, settings after compare or test (table)
    coprocessor, processor control (figure)
    loading and storing
    register, summary (table)
FLD instruction
FLD1 instruction
FLDCW instruction
FLDL2E instruction
FLDL2T instruction
FLDLG2 instruction
FLDLN2 instruction
FLDPI instruction
FLDZ instruction
Floating-point numbers
FMUL instruction
FMULP instruction
For loops, emulating high-level-language statement
FORTRAN
    compiler
    do loops, emulating
    nestinglevel
    return value (figure)
Forward references
    defined
    during a pass
    labels
    variables
FPATAN instruction
/FPi option
FPREM instruction
FPTAN instruction
Fraction
Framepointer
FRNDINT instruction
FSCALE instruction
FSQRT instruction
FST instruction
FSTCW instruction
FSTP instruction
FSTSW instruction
FSUB instruction
FSUBP instruction
FSUBR instruction
FSUBRP instruction
FTST instruction
Full segment definitions
Function return values
FXAM instruction
FXCH instruction
FXTRACT instruction
FYL2X instruction
FYL2XP1 instruction

G

GE operator
General-purpose registers
Global directives
    defined
    illustrated
Global flags
Global scope
Global symbols
GROUP directive
Group-relative segments
Groups
    assembly listing
    defined
    illustrated
    size restriction
GT operator

H

Hardware interrupts
Help menu
Help on DOS and BIOS functions
Help topics
Hexadecimal conversion example
Hexadecimal radix
    in Debug expressions
    specifier
HIGH operator
High-level languages
    interfacing with
    memory model
HLT instruction
Huge memory model

I

/I option
IDIV instruction
IEEE format
If blocks, run-time
IF directives
IF1 directive
IF2 directive
IFB directive
IFDEF directive
IFDIF directive
IFE directive
IFIDN directive
IFNB directive
IFNDEF directive
Immediate operands
Implied operands
IMUL instruction
IN instruction
INC instruction
INCLUDE directive
INCLUDE environment variable
Include files
    assembly listings
    using
    View menu command
INCLUDELIB directive
Incrementing
Indeterminate operand
Index checking
Index, Help menu selection
Index operator
Index registers
Indexed operands
Indirect addressing modes (table)
Indirection, pointer
Initializing
    segment registers
    variables
INS instruction
INSTR directive
Instruction-pointer register (IP)
Instructions
    AAA
    AAD
    AAM
    AAS
    ADC
    ADD
    addition (list)
    AND
    bit test
    BOUND
    CALL
    CBW
    CLC
    CLD
    CLI
    CMP
    CMPS
    compare
    conditional-jump
    control-flow
    CWD
    DAA
    DAS
    data-manipulation
    DEC
    defined
    DIV
    ESC
    F2XM1
    FABS
    FADD
    FADDP
    FBLD
    FBSTP
    FCHS
    FCOM
    FCOMP
    FCOMPP
    FDIV
    FDIVP
    FDIVR
    FDIVRP
    FIADD
    FICOM
    FICOMP
    FIDIV
    FIDIVR
    FILD
    FIMUL
    FINIT
    FIST
    FISTP
    FISUB
    FISUBR
    FLD
    FLD1
    FLDCW
    FLDL2E
    FLDL2T
    FLDLG2
    FLDLN2
    FLDPI
    FLDZ
    FMUL
    FMULP
    FPATAN
    FPREM
    FPTAN
    FRNDINT
    FSCALE
    FSQRT
    FST
    FSTCW
    FSTP
    FSTSW
    FSUB
    FSUBP
    FSUBR
    FSUBRP
    FTST
    FXAM
    FXCH
    FXTRACT
    FYL2X
    FYL2XP1
    HLT
    IDIV
    IMUL
    IN
    INC
    INS
    INT
    INTO
    IRET
    JC
    Jcondition
    JCXZ
    JMP
    LAHF
    LDS
    LEA
    LEAVE
    LES
    LOCK
    LODS
    logical
    LOOP
    LOOPNE
    LOOPNZ
    MOV
    MOVS
    MUL
    multiplication (list)
    NEG
    NOP
    normal division (list)
    normal subtraction (list)
    NOT
    on-line help
    OR
    OUT
    OUTS
    POP
    POPA
    POPF
    program-flow
    PUSH
    PUSHA
    PUSHF
    REP
    REPE
    REPNE
    REPNZ
    REPZ
    RET
    RETF
    RETN
    reversed division (list)
    reversed subtraction (list)
    SAHF
    SBB
    SCAS
    STD
    STI
    STOS
    SUB
    TEST
    timing of
    WAIT
    XCHG
    XLAT
    XOR
Instructions
instructions
    AND
    LDS
    LES
    SHL
Instruction-set directives
INT instruction
Integer formats (figure)
Integers
Interrupt-enable flag
Interrupts
    defined
    operation of (figure)
    using
INTO instruction
IP register
IRET instruction
IRP directive
IRPC directive

J

JC instruction
Jcondition instruction
JCXZ instruction
JMP instruction
JO instruction
Jump tables
Jumping conditionally

K

Keywords, on-line help for

L

/l option
LABEL directive
Labels
    macros, in
    near-code
    procedures
LAHF instruction
.LALL directive
Language type
    COMM directive
    EXTRN directive
    .MODEL directive
    PROC statement
    PUBLIC directive
Large memory model
LDS instruction
LE operator
LEA instruction
Learning assembly language
LEAVE instruction
LENGTH operator
LES instruction
.LFCOND directive
Line-continuation character
.LIST directive
Listing
    controlling contents of
    false conditionals
    format
    addresses
    described
    EQU directive
    errors
    groups
    include files
    LOCK directive
    macro expansions
    macros
    Pass 1, reading
    records
    REP directive
    segment override
    segments
    structures
    symbols
    macros
    subtitles in
    suppressing output
    symbols and abbreviations in (table)
Listing files
    creating
    editor-oriented
    example
    index to source code
    macro expansion
    Pass 1
    setting title
    suppressing tables
    View menu
    viewing
Literal-character operator (!)
Literal-text operator (\la)
Loading
    constants to coprocessor
    coprocessor data
    far pointers
    values from strings
LOCAL directive
    declaring stack variables
    symbols declared with
    using
Local symbols
    defined
    in macros
Local variables
    in procedures
    on stack (figure)
Location counter ($)
LOCK directive, assembly listing
LOCK instruction
LODS instruction
Logarithms
Logical bit operations (table of values)
Logical instructions
Logical operators
    vs. logical instructions
    (table)
LOOP instruction
Looping
    overview
    without use of CX
LOOPNE instruction
LOOPNZ instruction
LOW operator
LT operator

M

Machine code
Macro comment operator (\sc\sc)
MACRO directive
Macro expansions, assembly listings
Macros
    argument testing
    arguments
    assembly listing
    calling
    compared to procedures
    defined
    efficiency penalty
    exiting early
    expansions in listing
    local symbols
    nested
    operators
    parameters
    recursive
    redefining
    removing from memory
    string-manipulation directives (list)
    text
    viewing listing of
Make dialog box (figure)
MASK operator
Masking bits
Masking out a bit
Masks, adjusting
Math coprocessors
Medium memory model
Memory access, coordinating
MEMORY combine type
Memory models
    assembly procedure with
    default segments, types (table)
    described (list)
Memory operands
    coprocessor
    defined
Memory requirements
Memory-model-independent procedures
Messages
    to screen
    suppressing
Microsoft Binary format
Microsoft Binary Real format
Microsoft segment model
Mixed-language interface
    C
    entry sequences
    exit sequences
    local data
    register considerations
    return value
Mixed-language programs
    building
    C and assembler
    program list (figure)
.MODEL directive
Model equate
Modular programming
Modulo division
MOV instruction
MOVS instruction
.MSFLOAT directive
MUL instruction
Multiple modules
Multiplying
    by 16
    by constants
    instructions
Multiword values, shifting

N

NAME directive
Names
    assigning
    external
    public
    reserved
Naming convention
NE operator
Near pointers
Near reference parameters, assembly
NEAR type specifier
nearStack
nearStack keyword
NEG instruction
Negating
Nesting
    conditional
    DUP operators
    include files
    macros
    procedures for Pascal
    segments
Nonredefinable equates
NOP instruction
NOT instruction
NOT operator
No-wait coprocessor instructions
Null class type
Null string

O

Object records
Octal radix
OFFSET operator
    with group-relative segments
    with .MODEL directive
    overview
ON GOSUB, emulating BASIC statement
One-pass assembly option
Operands
    based
    based indexed
    classical stack
    coprocessor
    defined
    destination
    direct memory
    immediate
    implied
    indeterminate
    indexed
    indirect memory
    location counter
    memory
    record field
    records
    register
    register indirect
    relocatable
    source
    strong typing
    structures
    types (list)
    undefined
Operators
    AND
    arithmetic
    bitwise
    calculation
    defined
    DUP
    EQ
    expression (%)
    GE
    GT
    HIGH
    index
    LE
    LENGTH
    literal character (!)
    literal text
    logical (table)
    LOW
    LT
    macro comment (\sc\sc)
    macro (list)
    MASK
    NE
    NOT
    OFFSET
    OR
    precedence (table)
    PTR
    relational (table)
    SEG
    segment override (:). See
    (segment-override operator)
    shift
    SHL
    SHORT
    SHR
    SIZE
    structure-field name
    substitute (&)
    THIS
    TYPE
    .TYPE
    WIDTH
    XOR
Options
    /a
    /AT
    /Cl
    /Cu
    /Cx
    /DOSSEG linker
    /Dsymbol
    /Ez
    /Fl
    /FPi
    /I
    /l
    /P1
    /s
    /Sa
    /Sd
    /Se
    setting inside environment
    /Sn
    /Sq
    summary
    /Sx
    /t
    /v
    /W
    /w
Options menu
OR instruction
OR operator
ORG directive
%OUT directive
OUT instruction
Output messages to screen
OUTS instruction
Overflow flag
Overflow interrupt

P

/P1 option
Packed BCD numbers
Packed decimal integers
Packed decimal numbers
PAGE align type
Page breaks in assembly listings
PAGE directive
Page format, in listings
PARA align type
Parameter list, in PROC statement
Parameters
    assembly, accessing from
    defining in procedures
    macros
    repeat blocks
    types, common (list)
Parity flag
Partial remainder
Pascal
    case statements, emulating
    compiler
    for loops
    nestinglevel
    repeat loops, emulating
    return value (figure)
Pass 1 listing
Passing by
    near reference, assembly
    value
    assembly
    C
% (percent sign), expression operator
Percent sign (%), expression operator
. (period)
Period (.)
Phase errors
Pi, loading to coprocessor
Plus sign (+), to separate registers
Pointer indirection
Pointer registers
Pointers
    defining
    loading
POP instruction
POPA instruction
POPF instruction
Ports
    defined
    getting strings from
    sending strings to
Precedence of operators
Predefined equates
    CodeSize
    Cpu
    CurSeg
    DataSize
    FileName
    Model
    segment
    Version
    WordSize
Preserving register values
PROC directive
PROC type specifier
Procedure arguments, on stack (figure)
Procedures
    compared to macros
    defining labels
    using
Processor directives
Product assistance report
Program list (figure)
Program-flow instructions
PTR operator
    declaring parameters with
    declaring pointers with
    syntax
    used with data types
PUBLIC combine type
PUBLIC directive
Public names
Public symbols
PURGE directive
PUSH instruction
PUSHA instruction
PUSHF instruction

Q

QC environment
    building programs
    debugging commands
    described
    on-line help
    starting
QC register variables
QCL driver
    introduction
    options (list)
? (question mark)
Question mark (?)
Quick Advisor
QuickAssembler
    assembly interfaces, writing
    environment
    See QC environment
QuickBASIC compiler
QuickC, interfacing with
QWORD type specifier

R

.RADIX directive
Radixes
    binary
    default
    specifiers (table)
Real numbers
    arithmetic calculations
    designator (R)
    directives for defining (list)
    encoding
    format
    transfer instructions (list)
RECORD directive
Record operands
    compared to variables (figure)
    using
Record type
    contents (figure)
    declaring
Record variables
    compared to operands (figure)
    contents (figure)
    defining
Records
    assembly listing
    declarations
    defining
    field operands
    fields
    initializing
    MASK operator
    object
    WIDTH operator
Recursive macros
Redefinable equates
Redefining
    interrupts
    macros
Register stacks
    classical-stack form (figure)
    data transfer (figure)
    memory form (figure)
    register form (figure)
    register-pop form (figure)
Register variables, in C
Registers
    accumulator
    AH
    AL
    altering within environment
    AX
    BH
    BL
    BP
    BX
    CH
    CL
    coprocessor
    CS
    CX
    defined
    DH
    DI
    DL
    DS
    DX
    ES
    flags
    general purpose
    index
    IP
    operands
    operands, coprocessor
    pointer
    preserving value of
    register-pop operands, coprocessor
    segment
    setting to zero
    SI
    SP
    SS
    strategy for using
    types of
    uses of
    watching contents of
Registers window
Relational operators (table)
REP directive, assembly listing
REP instruction
REPE instruction
Repeat blocks
    arguments
    defined
    parameters
    repeat for each argument
    repeat for each character of string
    repeat for specified count
Repeating
    instructions, execution of
    using 8086-family string functions
REPNE instruction
REPNZ instruction
Reporting problems
REPT directive
REPZ instruction
Reserved names
RET instruction
RETF instruction
RETN instruction
Return value, offset (figure)
Rotating bits (figure)

S

/s option
/Sa option
SAHF instruction
.SALL directive
SBB instruction
Scaling by powers of two
Scaling factor
SCAS instruction
Screen swapping
\sc\sc (semicolons), operator
/Sd option
/Se option
Search paths, include files
Searching strings
Sections in assembly listings
SEG operator
SEGMENT directive
Segment register
Segmented addressing
Segment-order method
(Segment-override operator)
    definition
    OFFSET operator, with
    string instructions, with
    XLAT instructions, with
(segment-override operator)
    used with ES
Segments
    absolute
    align type
    align type (figure)
    assembly listing
    combine type
    (figure)
    (list)
    defined
    extra
    group-relative offset
    groups
    defining
    structure (figure)
    MEMORY
    nesting
    ordering
    override, assembly listings
    override operator (:). See
    (segment-override operator)
    registers
    types
Semicolons (\sc\sc), operator
.SEQ directive
Serious warnings
Severe errors
.SFCOND directive
Shift operators
Shifting
    bits
    multiword values
SHL instruction
SHL operator
SHORT operator
SHR operator
SI register
Sign flag
Signed numbers
Simplified segment defaults
SIZE operator
SIZESTR directive
Small memory model
    defining attributes
    described
    setting up procedures
Smart help
/Sn option
Source files, include
Source modules
Source operand
Source string
SP register
Specifying calling convention
/Sq option
Square root
SS register
.STACK directive
Stack
    allocating
    defined
    frame
    local variables on (figure)
    near and far types
    operands, coprocessor
    procedure arguments on (figure)
    registers
    segment
    status, after pushes and pops (figure)
    trace. See Calls command
    type
    use of
    variables
STACK combine type
Stand-alone programs
.STARTUP directive
Statement fields
Statistics
STD instruction
Step Over command
STI instruction
STOS instruction
String directives (list)
Strings
    comparing
    constants
    declaring
    defined
    destination strings
    equates
    filling
    instructions, requirements for (table)
    loading values from
    moving
    null
    ports, transfer from and to
    searching
    source
    structures, in
    variables
Strong typing
STRUC directive
Structure type
Structure-field-name operator
Structures
    assembly listing
    declarations
    definitions
    fields
    initializing
    operands
    overview
    variables
SUB instruction
Substitute operator (&)
SUBSTR directive
Substring directive
Subtitles in listings
Subtracting values
SUBTTL directive
/Sx option
Symbols
    assembly listing
    communal
    defined
    defining from command line
    external
    global
    location counter
    public
    relocatable operands
    scope
SYMDEB
System requirements

T

/t option
TBYTE type specifier
Temporary real format (figure)
TER
Terminating execution
TEST instruction
Text macros
.TFCOND directive
THIS operator
/TINY linker option
Tiny memory model
Tiny model option
TITLE directive
Trace Into command
Tracing execution
Transcendental calculations
Transferring
    BCD integers
    binary integers
    real numbers
Trap flag
Trigonometric functions
Tutorial books, assembly language
Type
    ABS
    align
    class
    combine
    null class
    operand matching
    operators, described
    PROC
    record
    structure
TYPE operator
Type specifiers (list)
.TYPE operator

U

Undefined operand
Underscore (_)
Unpacked BCD numbers
Unsigned numbers
Updates
USES, in PROC statement

V

/v option
Value parameters, C
Variables
    automatic
    communal
    defined
    dynamic
    external
    floating point
    initializing
    integer
    local
    public
    real number
    record
    string
    structure
    watching value of
Version equate
View menu Include command

W

/W option
/w option
WAIT instruction
Warning levels
Watch Value command
Watch Value dialog box (figure)
Watchpoint command
Weak typing in other assemblers
While, emulating high-level-language statement
WIDTH operator
Width, structures
WO memory operator
WORD align type
WORD PTR, in example
WORD type specifier
WordSize equate
Write function, DOS

X

.XALL directive
XCHG instruction
XENIX compatibility
    pathnames, with / (forward slash)
    /sI
XLAT instruction
.XLIST directive
XOR instruction
XOR operator

Z

Zero flag
```

{% endraw %}
