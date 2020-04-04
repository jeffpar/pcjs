---
layout: page
title: "MS MASM 6.0 White Paper"
permalink: /documents/books/programming/mspl13/masm/mwhite/
redirect_from: /pubs/pc/reference/microsoft/mspl13/masm/mwhite/
---

The following document is from the [Microsoft Programmer's Library 1.3](../../) CD-ROM.

{% raw %}

```none
Microsoft  Macro Assembler - White Paper








────────────────────────────────────────────────────────────────────────────
                Microsoft (R) Macro Assembler - White Paper

                                Version 6.0
────────────────────────────────────────────────────────────────────────────


                For MS (R) OS/2 and MS-DOS (R) Operating Systems








Microsoft Corporation

This technical overview is for informational purposes
only. MICROSOFT MAKES NO WARRANTIES, EXPRESS OR IMPLIED, IN THIS SUMMARY.

(C) Copyright Microsoft Corporation, 1991.
All rights reserved.
Printed in the United States of America.

Microsoft, the Microsoft logo, MS, MS-DOS, and CodeView
are registered trademarks and Making it all make sense and
Windows are trademarks of Microsoft Corporation.

U.S. Patent No. 4,955,066

i486 is a trademark of Intel Corporation.

IBM is a registered trademark of International Business
Machines Corporation.




Table of Contents
────────────────────────────────────────────────────────────────────────────



Product Overview

        Revolutionary New Assembler
        Programmer's WorkBench
        Integrated Documentation

The MASM 6.0 Assembler

        Faster Assembly
        Built-In Jump Extensions and Optimizations
        Convenient Format for Procedures and Procedure Prototypes
        Automatic Conversion of C Header Files to MASM Include Files
        New Data Types
        Enhanced Macro Capabilities
        Easy-To-Use Decision and Loop Constructs
        Expanded DOS and OS/2 Support
        New 80486 and FLAT Model Support
        Improved Support for Multiple-Module Programming
        Complete BNF Language Definition

Programmer's WorkBench

        Full-Featured Editor
        Enhanced CodeView(R) Debugger
        Powerful Source Browser
        Information-Packed Online Reference System

Integrated Documentation

        Microsoft Advisor Online Reference System
        Installing and Using the Professional Development System
        Microsoft Macro Assembler Programmer's Guide
        Microsoft Macro Assembler Reference

Conclusion


System Requirements




Product Overview
────────────────────────────────────────────────────────────────────────────

The Microsoft Macro Assembler has long been the industry standard for fast
and efficient assemblers. Writing assembly-language code, however, has been
slow and tedious work. The new features of the Microsoft Macro Assembler
version 6.0 Professional Development System (hereafter referred to as MASM
6.0) make it easy for you to be fast and efficient when you program. For the
first time, you get the convenience of high-level language coding as well as
the 50 to 300% performance boost that assembly language provides over
high-level language routines.

Why? Because MASM 6.0 is not an evolutionary product that adds a few new
features. Instead it is a revolutionary new version of MASM that reduces
your coding time, simplifies code maintenance, and delivers exceptional
performance.


Revolutionary New Assembler

Further details on these and other time-saving new features begin on page 5.


MASM 6.0 boosts your productivity by handling numerous repetitive
programming tasks for you, making other tasks easier, and providing many new
capabilities. For example, MASM 6.0


    ■   Increases assembly speed, eliminates phase errors and unnecessary NOP
        statements, and generates optimal code for jumps by using n-pass
        assembly technology

    ■   Checks argument types and automatically generates the code to push
        arguments when you use PROTO to define a procedure prototype and
        INVOKE to call the procedure

    ■   Simplifies external symbol declaration and include-file development

    ■   Allows macro functions, macros with variable numbers of arguments, and
        other powerful new macro capabilities

    ■   Increases the functionality of structures and types by allowing nested
        structures, pointer types, and unions

    ■   Converts your C-language header files to MASM include files with the
        H2INC utility

    ■   Introduces intuitive language constructs─.IF, .WHILE, and .REPEAT─that
        automatically generate optimized instructions for run-time decisions
        and loops

    ■   Generates DOS* or OS/2= module-initialization code automatically

    ■   Provides new extensions to simplified segment directives that make it
        easier to set up complicated segment models

    ■   Implements the 80486 instruction set and supports flat model for
        32-bit operating systems

    ■   Supports tiny memory model so you can produce .COM executable files

    ■   Automates assembling and linking with a one-step build process

    ■   Allows Windows programs to relocate code segments, since you can use
        the new LROFFSET operator to generate a loader-resolved offset

    ■   Includes the Microsoft Advisor with online help for MASM and utilities


    * DOS refers to the MS-DOS(R) and PC DOS operating systems.  = Herein
OS/2 refers to the operating system jointly developed by Microsoft and IBM.



Programmer's WorkBench

The Programmer's WorkBench (PWB) is a complete, self-contained development
environment. With PWB, you can write, edit, get help on, build, debug, and
execute your programs without ever leaving the environment. PWB provides
access to all your Microsoft utilities and compilers such as Microsoft C
version 6.0, Basic version 7.1, and COBOL version 4.0. See Figure 1.

(This figure may be found in the printed book.)

PWB includes the Source Browser for navigating through your program's code
and data structures. The powerful keyboard or mouse-driven editor has
extensive macro capabilities. And the Microsoft Advisor provides online
help. See page 11 for more about PWB.

The Microsoft CodeView(R) window-oriented debugger, also accessible from
within PWB, can debug larger programs than before. You can also view several
source-code and memory locations simultaneously.


Integrated Documentation

MASM 6.0 includes three manuals and online help.

MASM 6.0 provides both online and printed documentation. The Microsoft
Advisor, the online reference system, contains information on how to use
MASM 6.0, PWB, CodeView, LINK, NMAKE, the editor, and all other utilities.

For a quick start on using MASM 6.0 and PWB, read Installing and Using the
Microsoft Professional Development System. This manual shows how to install
the assembler, manage multiple-module projects with PWB, and access online
help.

The documentation also includes a revised Programmer's Guide. This manual
illustrates all the new language features of MASM 6.0 and explains the
advanced features of CodeView, PWB, and other MASM 6.0 utilities.

The Microsoft Macro Assembler Reference provides quick access to syntax and
command-line options for the assembler and utilities. See page 14 for more
information about MASM 6.0 documentation.



The MASM 6.0 Assembler
────────────────────────────────────────────────────────────────────────────

The MASM 6.0 assembler increases your productivity in several ways. The
highlevel-language interface for procedures simplifies multiple-module,
mixed-language, and OS/2 programming. Macros are more straightforward to
write and maintain. Code-generating directives shorten programming time. And
new options maximize compatibility with MASM 5.1.

MASM 6.0's new features are designed to be as intuitive as
high-level-language statements. With MASM 6.0, your code will be noticeably
easier to write, read, and maintain.


Faster Assembly

More efficient assembling means greatly improved performance.

MASM 6.0 eliminates phase errors and assembler-generated NOP statements by
using n-pass assembly and highly efficient memory-management techniques.
With n-pass assembly, the first pass is similar to that of traditional
assemblers. During this pass, however, MASM 6.0 keeps enough information on
each instruction so that, should any instruction change size on subsequent
passes, the assembler can make appropriate adjustments. Because this
algorithm allows instructions to shrink or grow, MASM 6.0 never generates
NOP statements or phase errors.

MASM 6.0 continues passing over internal representations of code until every
instruction is of optimal length. As a result, it generates optimized code
for all instructions, including jumps. And because it references the source
files only once, it assembles two to three times faster than MASM 5.1.


Built-In Jump Extensions and Optimizations

MASM 6.0 generates optimal encodings.

Built-in "smart" jump extensions and optimizations simplify your
programming. You do not have to specify a distance operator to take
advantage of automatic optimization for unconditional jumps. The assembler
automatically determines the smallest encoding possible for the direct
unconditional jump. Additionally, MASM 6.0 optimizes far calls when the
destination is in the current segment by pushing the CS register and
generating a NEAR call. This is functionally equivalent, but is faster and
one byte smaller.

MASM 6.0 also lengthens conditional jumps automatically. If the conditional
jump specifies or implicitly requires a distance other than SHORT, MASM
automatically generates the necessary comparison and unconditional jump to
the destination. You can control these optimizations with the OPTION
directive and with menu or command-line options.

For example, the destination for this jump is more than 128 bytes away:

    mov     ax, cx
            jz      skip
            .
            .            ; (More than 128 bytes of code here)
            .
    skip:

Note the unconditional jump in the assembler-generated code:

    mov     ax, cx
            jnz     temp$1
            jmp     skip
    temp$1:
            .
            .            ; (More than 128 bytes of code here)
            .
    skip:

The listing file shows the generated instructions and the resulting warning
message:

    002C  8B C1             mov       ax, cx
    002E  75 03 E9 00C0     jz        skip
    jumptest.asm(63): warning A6003: conditional jump lengthened


Convenient Format for Procedures and Procedure Prototypes

The new INVOKE and PROTO directives create a high-level interface for
procedures to simplify your MASM, OS/2, mixed-language, and Microsoft
Windows(tm) graphicalenvironment programming. The PROTO directive defines
procedure prototypes. Like C-language function prototypes, MASM prototypes
inform the assembler of types and numbers of arguments so the assembler can
check for errors in the procedure call. The INVOKE directive calls the
procedure, converting arguments to the expected type and pushing parameters
according to the correct calling conventions. The VARARG keyword allows a
variable number of arguments to be passed to the procedure (see Figure 2).

(This figure may be found in the printed book.)

In addition to the new directives for procedure prototypes and procedure
calls, MASM 6.0 provides new support for the customizing of setup and
teardown for procedure stack frames. You can write procedure prologue and
epilogue code for Windows programs or for other special calling conventions,
and call them repeatedly─as easily as you can call a macro.


Automatic Conversion of C Header Files to MASM Include Files

H2INC helps port a program prototyped in C to MASM.

The H2INC utility translates C header files into MASM-compatible include
files. Now you can more easily write programs that mix C code and MASM code
with global data structures. H2INC translates data declarations, function
prototypes, and simple #define directives, but not C statements that compile
into data or executable code.

This example shows several C declarations and the MASM code that H2INC
produces:

C Code                         H2INC Translation
────────────────────────────────────────────────────────────────────────────
#define CORNERS 4              CORNERS EQU 4t

int my_var;                    EXTERNDEF C my_var:SWORD

struct tagName {               tagName  STRUCT 2t
        int i;                    i                 SWORD   ?
        };                        tagName  ENDS

long pascal my_func3 (int x);  @proto_0 TYPEDEF PROTO PASCAL :SWORD
                                my_func3 PROTO @proto_0


Because MASM supports many new high-level data types, data-type information
is not lost when you translate C data to MASM, as the next section explains.



New Data Types

New MASM data types  resemble those in high-level languages.

Now you can use high-level data types in assembly language. Types and
pointers can be defined with TYPEDEF in the same way they can be defined in
C. In addition, the CodeView debugger recognizes all MASM 6.0 data types, as
well as pointers and the type of data they point to.

MASM 6.0 also supports signed types defined with SBYTE, SWORD, and SDWORD;
floating-point data types defined with REAL4, REAL8, and REAL10; and
binary-coded decimals defined with TBYTE. CodeView displays values of type
REAL4, REAL8, and REAL10 as floating-point numbers, not hexadecimal fields.


Enhanced syntax for defining and using structures, and implementing nested
structures and unions, mean these types closely mirror their C counterparts.



Enhanced Macro Capabilities

Macros are more straightforward to write and maintain.

The new directives in MASM 6.0 make complex macros cleaner and easier to
write by accommodating variable numbers of arguments, macro functions,
definitions of text equates, and loop constructs:


    ■   Variable, required, and default arguments. MASM 5.1 ignores extra
        arguments passed to macros. MASM 6.0 provides the VARARG keyword for
        simplifying macro calls by allowing a macro to process any number of
        arguments. Specifying required or default arguments allows better
        error checking.

    ■   Macro functions. At assembly time, macro functions can return a text
        value using EXITM. Predefined macro string functions can concatenate
        strings, return the size of a string, find a substring in a string, or
        return the position of a substring within a string.

    ■   Text equates. The TEXTEQU directive for defining text macros allows
        greater functionality and consistency than EQU provides. For example,
        TEXTEQU can assign the value returned by a macro function to a text
        equate.

    ■   Directives for loops in macros. Now there are more ways to implement
        loops inside macros. Within a macro definition, WHILE repeats assembly
        as long as a condition remains true. Other macro loop directives─FOR,
        FORC, and REPEAT─also generate loops in macros.


This macro function takes one required argument and accepts a variable
number of arguments:

    @ArgI MACRO index:REQ, arglist:VARARG
        LOCAL count, retstr
        count = 0
        FOR arg, <arglist>
            count = count + 1
            IF count EQ index
                retstr TEXTEQU <arg>
            ENDIF
        ENDM
        EXITM retstr
    ENDM


Easy-To-Use Decision and Loop Constructs

Code-generating directives shorten programming time.

The high-level control structures new to MASM 6.0─.IF, .WHILE, and .REPEAT─
automatically generate MASM loop and compare instructions. These new
directives are similar to the if, while, and repeat statements of C or
Pascal. They make your assembly modules easy to code, read, and maintain.
You can also use the new .BREAK and .CONTINUE directives to interrupt loop
execution. See Figure 3.

(This figure may be found in the printed book.)

In the listing file, asterisks mark the automatically generated code:

    0017  B9 000A          mov    cx, 10
                            .REPEAT
    001A           *@C0001:
    001A  B4 08            mov    ah, 08h
    001C  CD 21            int    21h
                            .BREAK .IF al == 13
    001E  3C 0D    *       cmp    al, 00Dh
    0020  74 10    *       je     @C0003
                            .CONTINUE .IF (al < '0') || (al > '9')
    0022  3C 30    *       cmp    al, '0'
    0024  72 0A    *       jb     @C0002
    0026  3C 39    *       cmp    al, '9'
    0028  77 06    *       ja     @C0002

    002A  8A D0            mov     dl, al
    002C  B4 02            mov     ah, 02h
    002E  CD 21            int     21h
                            .UNTILCXZ
    0030           *@C0002:
    0030  E2 E8    *        loop   @C0001
    0032           *@C0003:


Expanded DOS and OS/2 Support

You no longer have  to write repetitive module-initialization code.

The new .STARTUP and .EXIT directives eliminate the need to write repetitive
module-initialization and exit code for DOS and OS/2 modules. If you specify
OS_DOS or OS_OS2 as your target operating system in the .MODEL statement,
the assembler automatically generates the appropriate code.

Also new to MASM 6.0 is tiny-model support for producing .COM executables
under DOS. And for Windows programming, the LROFFSET operator generates a
loaderresolved offset to allow Windows to relocate code segments.


New 80486 and FLAT Model Support

You can design code for the next generation of systems today.

MASM 6.0 supports all the new i486 instructions. And for 32-bit operating
systems, the assembler provides flat memory model. Flat model provides four
gigabytes of linear addressing space, eliminating the need for segmentation
considerations when programming for 386-compatible operating systems.


Improved Support for Multiple-Module Programming

One directive replaces PUBLIC and EXTRN.

MASM 6.0 simplifies external declarations for shared data and procedures in
multiple-module and mixed-language programs. The new EXTERNDEF directive
declares procedures and symbols as both public and external. EXTERNDEF makes
it easy to maintain global definitions in include files shared by all source
modules within a project.


Complete BNF Language Definition

The BNF clearly  defines MASM syntax.

MASM 6.0 includes a complete language grammar in an augmented BNF format.
BNF stands for Backus-Naur Form, a standard format for language grammars.
You can use the BNF to determine the exact syntax for any language
component. The BNF grammar clearly defines recursive definitions and shows
all the available options for each language element.

An excerpt from the grammar:

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
────────────────────────────────────────────────────────────────────────────
procDir                           procId PROC « pOptions » « <
                                    macroArgList > »
                                    « usesRegs » « procParmList »

procId                            id

────────────────────────────────────────────────────────────────────────────

id                                alpha
                                    | id alpha
                                    | id decdigit

pOptions                          « distance » « langType » « oVisibility
                                    »

distance                          nearfar
                                    | NEAR16 | NEAR32 | FAR16 | FAR32

langType                          C | PASCAL | FORTRAN | BASIC
                                    | SYSCALL | STDCALL

oVisibility                       PUBLIC | PRIVATE | EXPORT

macroArgList                      macroArg
                                    | macroArgList , macroArg

macroArg                          % constExpr
────────────────────────────────────────────────────────────────────────────
macroArg                          % constExpr
                                    | % textMacroId
                                    | % macroFuncId ( macroArgList )
                                    | string
                                    | arbitraryText
                                    | < arbitraryText >

usesRegs                          USES regList

regList                           register
                                    | regList register

procParmList                      « « , « ;; » » parmList »
                                    « « , « ;; » » parmId :VARARG»





Programmer's WorkBench
────────────────────────────────────────────────────────────────────────────

Now you can write, edit, build, debug, and run programs in one environment.


The PWB environment provides an intuitive interface and easy access to the
assembler, to your MASM 6.0 files, to utilities, to other Microsoft
compilers, and to online reference documentation. You can switch from
editing to debugging to looking up statement syntax by selecting a menu or
dialog-box item.

With PWB 1.1, you select the main source language of your project from
languages you have installed under PWB. The main language you choose
determines the build options available. PWB then simplifies program
assembling and building by providing background assembly (under OS/2),
automatic makefile generation, and automatic dependency checking.

Predefined defaults for build options include DOS executable files, Windows
applications, OS/2 Presentation Manager applications, and OS/2 dynamic-link
libraries (DLLs).

Figure 4 shows how easily you can set MASM assembler options from within
PWB. Notice that you can select target options instead of typing a series of
command-line options.

(This figure may be found in the printed book.)

PWB minimizes editing and debugging time, as well as build time, by
incorporating an editor, debugger, source browser, and online reference
system.


Full-Featured Editor

The PWB Editor is a full-featured programmer's editor with all the
capabilities that professionals expect:


    ■   Multiple windows

    ■   Mouse and keyboard support

    ■   Fast file navigation and bookmarks

    ■   Convenient and powerful search capability

    ■   Multiple levels of Undo/Redo

    ■   Flexible configuration options

    ■   Recordable macros


You can select any of these editor functions from menus or with key
combinations. The Microsoft Advisor provides instructions for using the
editor.


Enhanced CodeView(R) Debugger

In addition to its improved user interface, the CodeView debugger gives you
a dynamic record and replay feature for recreating debugging sessions. It
reduces debugging effort by providing complete access to pointers, arrays,
structures, and coprocessor status.

CodeView adds other key improvements:


    ■   Multiple source and memory windows

    ■   Improved debugging for DLLs and multithread programs

    ■   New capability for debugging .COM files under DOS

    ■   No restrictions on sizes of DOS programs for debugging under CodeView


A system with an 80286 or 80386 processor and at least 384K of extended
memory can now run CodeView in extended memory, using less than 12K of
conventional memory. CodeView also supports the LIM 4.0 Expanded Memory
Specification (EMS) and can use Virtual Control Program Interface (VCPI)
memory if it's available. VCPI is an applications programming interface
(API) provided by various drivers, including HIMEM.SYS, which is included
with MASM 6.0.


Powerful Source Browser

MASM 6.0 includes the Source Browser made popular with the Microsoft C 6.0,
Basic 7.1, and COBOL 4.0 compilers. You can use the Browser to find any
symbol definition, find all references to that symbol, and see where
variables are used or from where functions are called. See Figure 5.

(This figure may be found in the printed book.)

With the Browser's View Relationship menu option, you can easily determine
information about a module such as which module calls it and what data it
uses.

The Source Browser provides far more information about your program than the
CREF utility (available with previous versions of MASM) provides. And, as
you browse through the structure of your code, the Source Browser creates a
browse history. At the end of the process, you can see where you have been.



Information-Packed Online Reference System

All online help can be accessed from one location.

The productivity benefits of detailed online documentation are now available
to MASM 6.0 users. In addition to extensive indexes and cross-references,
the Microsoft Advisor online reference system provides hypertext links
between related concepts. It includes information on all phases of project
development, from editing to using the OS/2 programming interface. The
Advisor is available either through PWB or from the command line with
QuickHelp.

The Microsoft Advisor includes


    ■   Information on using PWB's integrated development environment

    ■   Explanations of PWB dialog boxes and menu choices

    ■   How-to and quick-reference information for all installed languages and
        utilities (see Figure 6)

    ■   Complete explanations of error messages for all utilities


(This figure may be found in the printed book.)

The next section describes the online information available for the
assembler.

You can add your own information to the online database using the HELPMAKE
utility included in MASM 6.0. Similarly, vendors who develop tools for
Microsoft language products can add the documentation for those tools to the
Advisor.



Integrated Documentation
────────────────────────────────────────────────────────────────────────────

The MASM 6.0 documentation provides comprehensive information to get you
started, how-to information on all the tools, examples of the new language
features, and topical information for advanced users. The documentation set
includes three manuals and the online reference system, the Microsoft
Advisor.


Microsoft Advisor Online Reference System

You can access the Microsoft Advisor from the PWB environment or from
QuickHelp using the command line. Figure 7 shows the Advisor table of
contents screen. In addition to the features listed on page 13, the Advisor
includes MASM-specific information such as


    ■   Syntax and timing information for all instructions

    ■   Complete documentation for DOS and BIOS function calls

    ■   Sample code you can insert into your programs

    ■   Help on all error messages


Help is context-sensitive─you can look up any item by placing the cursor on
the word and pressing the F1 key or clicking a mouse button.

(This figure may be found in the printed book.)


Installing and Using the Professional Development System

Read Installing and Using the Professional Development System to get started
using MASM 6.0. This short book includes information on installing the
Professional Development System, configuring your system, using PWB and the
CodeView debugger, building multiple-module programs, and navigating through
the Advisor.


Microsoft Macro Assembler Programmer's Guide

The Programmer's Guide is a complete guide to new MASM features.

The Programmer's Guide provides the information you need to write
assemblylanguage programs for this new assembler. New language features are
discussed throughout the Programmer's Guide rather than in a separate update
manual.

The Programmer's Guide shows how to use NMAKE, HELPMAKE, CodeView, and
H2INC. It also explains how to customize the PWB editor, develop OS/2 and
dual-mode applications, create dynamic-link libraries, write memory-resident
(TSR) software, and create mixed-language programs.

Appendix A explains how to update MASM 5.1 code. Other appendixes cover the
BNF grammar, assembly listings, reserved words, error messages, and default
segment names. The glossary defines language and utility terminology.


Microsoft Macro Assembler Reference

The popular Microsoft Macro Assembler Reference again furnishes complete
information on all MASM instructions (including those for the i486
processor) with syntax, timings, and encoding information. It also includes
a quick reference for directives, operators, predefined symbols, keycodes,
and command-line syntax for the assembler and all utilities. Figure 8 shows
an excerpt from the Reference containing information on BSF/BSR
instructions.

(This figure may be found in the printed book.)



Conclusion
────────────────────────────────────────────────────────────────────────────

MASM 6.0 can revolutionize your approach to assembly-language programming.
Never before has there been an assembler that decreases your programming
time and effort so significantly while enhancing your productivity and
providing faster assembly.

Simplified programming means greater productivity.

This new assembler simplifies assembly-language programming─from declaring
external symbols, writing procedure calls, and developing multilanguage
programs to coding macros, loops, and decision constructs.

MASM 6.0 sets new standards in virtually every area important to the
professional developer who needs to write, debug, and maintain assembly
routines or modules. The full-featured editor, debugger, and source browser
of this multilanguage development system can significantly increase your
productivity.

The improvements in speed and capability over previous versions of MASM are
substantial. The clear advantage in ease of use and increased productivity
makes MASM 6.0 the obvious choice for your assembly-language projects.



System Requirements
────────────────────────────────────────────────────────────────────────────

Microsoft Macro Assembler version 6.0 requires the following configuration:



    ■   A personal computer running DOS version 3.0 or later or OS/2 version
        1.1 or later.

    ■   640K (kilobytes) of available memory (RAM) for operating under DOS (1
        megabyte of RAM is recommended).

    ■   3 megabytes of RAM for operating under OS/2 (4 megabytes are
        recommended).

    ■   At least 384K of extended memory to debug large DOS programs.

    ■   One hard-disk drive with at least 4 megabytes of free space.
        Installation of all files provided with MASM 6.0 requires
        approximately 6.2 megabytes of disk space. The setup program checks to
        see if there is enough space available, and also prompts you to decide
        whether or not to install online help and sample code.

    ■   One floppy-disk drive. For OS/2, either a 1.2 megabyte, 5.25-inch
        drive or a 720K, 3.5-inch drive. For DOS, either a 1.2 megabyte,
        5.25-inch drive; a 360K, 5.25-inch drive; or a 720K, 3.5-inch drive.
        (1.2 megabyte disks and 720K floppy disks are shipped in separate
        boxes. 360K floppy disks are available on request.)
```

{% endraw %}
