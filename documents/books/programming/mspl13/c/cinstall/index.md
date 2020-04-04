---
layout: page
title: "Installing and Using MS C 6.0"
permalink: /documents/books/programming/mspl13/c/cinstall/
redirect_from: /pubs/pc/reference/microsoft/mspl13/c/cinstall/
---

The following document is from the [Microsoft Programmer's Library 1.3](../../) CD-ROM.

{% raw %}

```none
Microsoft  C - Installing and Using the Professional Development System








────────────────────────────────────────────────────────────────────────────
    Microsoft (R) C - Installing and Using the Professional Development System

                        FOR MS (R) OS/2 AND MS-DOS (R)
                                OPERATING SYSTEMS
────────────────────────────────────────────────────────────────────────────


                            MICROSOFT CORPORATION








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
(C) Copyright Microsoft Corporation, 1990. All rights reserved.


Printed and bound in the United States of America.


Microsoft, MS, MS-DOS, and CodeView are registered trademarks
and Windows is a trademark of Microsoft Corporation.

386-Max is a trademark of Qualitas, Inc.

BRIEF is a registered trademark of UnderWare, Inc.

IBM is a registered trademark of International Business
Machines Corporation.

UNIX is a registered trademark of American Telephone
and Telegraph Company.



Document No.  LN06516-1189 OEMO711-6Z

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









Chapter 1  The Microsoft(R) C Professional Development System

        Before You Proceed
            System Requirements
            Package Contents
        Features New to Version 6.0
        Why Microsoft Programmer's WorkBench?

Chapter 2  Installing Microsoft C

        Running SETUP
            Supplying SETUP Information
            Correcting Mistakes
            First Screen: Installing Libraries
            Second Screen: Installing Additional Files
            Third Screen: Specifying Directories
            Checking Available Disk Space
            SETUP Options
            Configuring Your System
            Choosing a Target Operating Environment
        Configuring Extended Memory for CodeView
        Customizing Microsoft C

Chapter 3  Using the Programmer's WorkBench

        Starting PWB
            Specifying a Source File
            Command-Line Options
        Using Windows and Menus
            Windows
            Menus
            Dialog Boxes
            Getting Help
        Using the Editor
            Moving Around in a Source File
            Customizing the Editor
        Compiling and Linking
            Building Programs in PWB
            Compiling and Linking from the Command Line
        Debugging Programs
            Using the Browser
            Debugging with CodeView
            Running IO.C
            Debugging IO.C
        Getting More Details

Chapter 4  Using the On-Line Reference

        Structure of the Microsoft Advisor
        Navigating Through the Microsoft Advisor
            Using the Help Menu
            Using the F1 Key
            Using Hyperlinks
            Using Help Windows and Dialog Boxes
            Accessing Different Types of Information
            Specifying Temporary Help Files
        Using QuickHelp
            Using the /HELP Switch
            Using the QH Command



Chapter 1  The Microsoft(R) C Professional Development System
────────────────────────────────────────────────────────────────────────────

The Microsoft C Professional Development System is a collection of tools
designed to increase DOS and OS/2 programming efficiency. The system offers



    ■   A customizable editor that is capable of being extended

    ■   An optimizing and incremental compiler

    ■   An intelligent linker

    ■   A project-oriented Make utility

    ■   A source-level browser

    ■   A complete on-line reference system

    ■   A source-level, window-oriented debugger


The Programmer's WorkBench (PWB) integrates these tools, creating an
environment in which you can edit, compile, link, and debug your programs.

This book is a general introduction to the Microsoft C Professional
Development System. This chapter introduces some of the features of the
Professional Development System. Chapter 2 describes how to install the
Professional Development System. Chapter 3 introduces the Programmer's
WorkBench. Chapter 4 shows how to use the on-line reference system─a
complete reference to the Professional Development System and the C
language, which is available both within PWB and at the OS/2 and DOS command
lines.

────────────────────────────────────────────────────────────────────────────
NOTE

Microsoft documentation uses the term "OS/2" to refer to the OS/2 systems─
Microsoft Operating System/2 (MS(R) OS/2) and IBM(R)  OS/2. Similarly, the
term "DOS" refers to both the MS-DOS(R) and IBM Personal Computer DOS
operating systems. The name of a specific operating system is used when it
is necessary to note features that are unique to the system.
────────────────────────────────────────────────────────────────────────────

If you'd like further information about a topic as you read through this
book, you can consult


    ■   Advanced Programming Techniques

    ■   The C Reference guide

    ■   The on-line reference system (as discussed in Chapter 4)


All of these sources are included in the Microsoft C package; they present
detailed information about the various components of the Professional
Development System.


Before You Proceed

Before installing Microsoft C, take a few minutes to make sure your computer
meets minimum system requirements and that your package is complete.


System Requirements

Microsoft C requires the following configuration:


    ■   An IBM Personal Computer or 100% compatible running DOS version 3.0 or
        later or OS/2 version 1.1 or later.

    ■   An 8088 processor (a minimum of an 8 megahertz, 80286 processor is
        recommended).

    ■   512K (kilobytes) of available memory (RAM) for operating under DOS (1
        megabyte of RAM is recommended).

    ■   3 megabytes of RAM for operating under OS/2 (4 megabytes of RAM are
        recommended).

    ■   At least 384K of extended memory if you want to debug large DOS
        programs.

    ■   One hard-disk drive with a minimum of 8 megabytes of free space.
        (Depending on the options you want, you may need up to 20 megabytes of
        disk space.)

    ■   One 1.2 megabyte, 5.25-inch floppy disk drive or one 720K, 3.5-inch
        floppy disk drive.


Programs compiled with Microsoft C version 6.0 support DOS versions 2.1 and
later.


Package Contents

Check your Microsoft C package to see if everything is there. If any pieces
are missing, contact the retailer from whom you purchased Microsoft C.

In the package, you should find the following items:


    ■   Registration card. There are many advantages to being a registered
        owner of Microsoft C version 6.0, including notification of future
        software releases and easy access to customer assistance. Please take
        the time to fill out and mail the registration card now. (If you are
        already a registered owner of an earlier version of Microsoft C, a
        registration card is not included with the update.)

    ■   Disks. The distribution disk labeled "Setup/Compiler" contains a file
        named PACKING.LST that lists the location and description of all disk
        files in the Microsoft C package. Files on the disks are compacted and
        are uncompressed with the Setup program as they are installed.
        Microsoft C is distributed on 5.25-inch high density disks or 3.5-inch
        disks. If you need 360K disks to install the compiler, please send in
        the 3.5-inch media order card contained in the C 6.0 package or call
        Microsoft Customer Service (1-800-426-9400).

    ■   Installing and Using Microsoft C. It explains how to install and use
        Microsoft C.

    ■   Advanced Programming Techniques. This book discusses advanced topics
        concerning Microsoft C. Part 1, "Improving Program Performance,"
        examines options and methods for producing more efficient code. Part
        2, "Improving Programmer Productivity," describes tools and techniques
        the Professional Development System offers to help you work more
        efficiently. Part 3, "Special Environments," discusses graphics,
        mixed-language programming, and portability. Part 4, "OS/2 Support,"
        discusses developing OS/2 applications with the Professional
        Development System.

    ■   C Reference. This book includes a summary of compiler, linker, editor,
        the Microsoft CodeView(R) debugger, and other tool commands; a brief
        language reference; and a complete list of library functions.

    ■   Product Assistance Request. If you need to contact Microsoft Product
        Support, be sure to fill out this questionnaire before calling.

    ■   Documentation Feedback Card. To help Microsoft improve its
        documentation, a postage-paid survey mailer is included. Please take
        the time to fill out the card with any comments or suggestions.



Features New to Version 6.0

If you've used an earlier version of Microsoft C, you'll find many new
capabilities in version 6.0, and you'll discover that you can perform
familiar operations more quickly:


    ■   Speed up development with the integrated PWB environment, including a
        fast-turnaround incremental compiler and linker.

    ■   Increase program efficiency with global optimization and smaller
        run-time libraries.

    ■   Build programs more easily with the new Make facility (NMAKE) and
        PWB's powerful project capabilities.

    ■   Insert assembly code directly into your C source code with the
        integrated in-line assembler.

    ■   Track down program bugs and logic errors more quickly with the new
        Microsoft CodeView debugger version 3.0. With an 80286 or 80386
        processor and 1 megabyte or more of RAM, you can debug a program of
        any size in real mode.

    ■   Access all C run-time, language, compiler, linker, and utility
        documentation with the Microsoft Advisor and QuickHelp on-line
        reference systems.

    ■   Cross-reference program functions and variables with the PWB Source
        Browser.

    ■   Create OS/2 applications with increased support for dynamic-link
        libraries (DLLs), multiple threads, and improved debugging options.

    ■   Use based pointers to control placement of data in segments and
        generate better code for far-pointer manipulation.

    ■   Pass function parameters more efficiently with the _fastcall calling
        convention.

    ■   Edit source code with PWB's mouse- and window-oriented editor, which
        has all the functionality of the Microsoft Editor.



Why Microsoft Programmer's WorkBench?

The Programmer's WorkBench offers a wide array of features that can cut
development time and increase your productivity.

One feature that sets PWB apart from other development systems is its fully
integrated, mouse- and window-based development environment. Most operations
can be performed with menu selections or single keyboard commands. You never
need to leave PWB to edit, build, debug, and run a program.

PWB is built around the Microsoft Editor. The editor is completely
extensible and can easily be configured to meet your personal needs. The
editor combines advanced features such as macros and regular-expression
search capabilities with the simplicity of a window-based application (see
Figure 1.1).

(This figure may be found in the printed book).

As you develop your program, you can find information in the Microsoft
Advisor on-line reference system instead of paging through manuals. A menu
command provides complete information on the C language and run-time
libraries. The Microsoft Advisor also supplies details on PWB, the compiler,
linker, CodeView, and even the reference system itself. Figure 1.2 shows
summary information on printf.

(This figure may be found in the printed book).

When you're ready to compile the program, you don't need to remember the
full range of command-line compiler options. All of the options are
conveniently available in a PWB dialog box and can be clicked on or off (see
Figure 1.3). Setting options is simply a matter of using the mouse or
keyboard to select compiler, linker, NMAKE, and CodeView switches.

PWB uses the powerful NMAKE tool to speed up development. NMAKE examines
each module of a program to determine whether changes have been made that
require the module to be recompiled. NMAKE then automatically compiles the
modules as necessary and links them. When you're ready to build your
program, you just select a single menu command to start the process. PWB
invokes NMAKE and builds an application, using the options you set.

If any errors are encountered, PWB displays an error window with a full
listing of the compile and link errors (see Figure 1.4). The editor
indicates the source line containing the error, and you can use the on-line
reference system to provide comprehensive information about each error.

(This figure may be found in the printed book).

(This figure may be found in the printed book).

Once a program has been successfully built, you can run it from within PWB
to test it. If you need to make modifications, you can interrupt the program
and return directly to PWB to make the changes.

Another useful PWB feature is the Source Browser. With the Browser you can
examine your code and display information about function and variable
relationships (see Figure 1.5). This option is helpful in tracking program
flow and isolating bugs.

(This figure may be found in the printed book).

For bugs that are more difficult to locate and understand, use PWB's Debug
Build option, and invoke the CodeView debugger directly from PWB. Then you
can step and trace through your code at the source level and examine
variables, registers, and memory (see Figure 1.6).

Once you locate the bug you can exit CodeView and return directly to PWB,
where you can fix the problem. When the code is completely debugged, a final
release program can be built by using PWB's Release Build option.

(This figure may be found in the printed book).






Chapter 2  Installing Microsoft C
────────────────────────────────────────────────────────────────────────────

This chapter describes how to install Microsoft C on your system, configure
extended memory for use with CodeView, and customize components of
Microsoft C.

Files on the disks are compressed; SETUP.EXE is provided for installing
Microsoft C under DOS and OS/2 operating environments. SETUP uncompresses
and copies a variety of files─the compiler, the linker, the Programmer's
WorkBench (PWB), the library manager, libraries, the help system, and
others─from the distribution disks to your hard disk. SETUP also can build
combined libraries from component libraries such as math libraries,
memory-model-specific base libraries, and graphics libraries; and can build
additional libraries as needed.

Before you run the SETUP utility, back up the distribution disks and make
sure you have enough disk space (between 5 and 10 megabytes, depending on
which options you select) to install the Professional Development System.
Then read the first part of the README.DOC file to see whether it has any
information concerning the installation process.

────────────────────────────────────────────────────────────────────────────
NOTE

If you are installing Microsoft C from 3.5-inch disks, SETUP.EXE is found on
the disk labeled "Setup." If you are using 5.25-inch disks, SETUP is on the
disk labeled "Setup and Compiler."

────────────────────────────────────────────────────────────────────────────


Running SETUP

Insert the disk containing the SETUP program in drive A, make that drive the
current drive, then run SETUP.EXE. The program first displays a screen
reminding you to read the documentation before installing Microsoft C (see
Figure 2.1). This initial screen also points out that the default answers to
SETUP's questions are usually good when you first install Microsoft C. Press
ENTER to proceed.

(This figure may be found in the printed book).


Supplying SETUP Information

Before SETUP can install Microsoft C, it needs information about your system
and the type of programming you intend to do. This first stage of SETUP is a
series of questions divided among three screens. Default answers to the
questions appear in brackets; you can press ENTER to accept the defaults, or
you can type in your own answers to override the defaults. Detailed
information on the questions appears at the bottom of each screen. Each
screen concludes by asking if you want to change any of your choices. Press
N and then ENTER to move to the next screen.

────────────────────────────────────────────────────────────────────────────
NOTE

The questions that are displayed on your screen may differ slightly from the
questions that are shown in this chapter. For example, if DOS is specified
as the host operating mode, later questions will refer to DOS.
────────────────────────────────────────────────────────────────────────────


Correcting Mistakes

If you want to change any of your choices, press Y. The questions will be
repeated, but the choices you previously made become the default answers.

To exit the SETUP program at any time without saving default answers, press
CTRL+C.

────────────────────────────────────────────────────────────────────────────
NOTE

The SETUP program doesn't erase any files from the distribution disks. If
you make a mistake during the setup process, just run SETUP again.
────────────────────────────────────────────────────────────────────────────


First Screen: Installing Libraries

On the first SETUP screen (see Figure 2.2), you supply information SETUP
uses to build run-time library files on your hard disk.

(This figure may be found in the printed book).


Selecting the Operating Mode

Microsoft C can run under both OS/2 and DOS, and it can create executable
files for either environment. Select the host operating mode under which
your computer will usually run. Applications intended for OS/2 and DOS use
different libraries. Specify the target operating mode for which you will
most frequently be developing executable files. Both modes may optionally be
selected.


Building Combined Libraries

SETUP can create combined libraries for the memory model, math options, and
operating modes you specify. Combined libraries reduce the amount of time
required for linking.

The component libraries can be left on your hard disk after combined
libraries are built. However, you should delete them to free disk space
unless you plan to build additional combined libraries in the near future.

You have the option of including the graphics libraries GRAPHICS.LIB and
PGCHART.LIB in your combined libraries. GRAPHICS.LIB contains numerous
functions for drawing lines, rectangles, circles, and other shapes.
PGCHART.LIB contains functions for creating presentation-quality,
high-resolution graphs. (Under OS/2 protected mode, you also have the option
of including another library, GRTEXTP.LIB, in your combined library. This
library provides support for OS/2 text-mode functions.) If you choose not to
include these libraries in the combined libraries, they will be copied onto
your disk as separate libraries. If you then use routines from these
libraries, you will need to explicitly specify the libraries when you link.


The first time you install Microsoft C, you should create only one or two
combined libraries. If you need other memory models, math packages, or
operating modes, rerun the SETUP program with the /L option.


Choosing Math Options

The math options you choose determine which math component libraries are
included in your combined libraries. The default provided by SETUP depends
on whether it detects a math coprocessor.

Programs that use the 8087 library run only on a machine equipped with a
math coprocessor. The 80x87 option generates applications that perform fast
floating-point math.

Programs linked with the emulator library will run on any computer, whether
or not it has a coprocessor. If the computer has a coprocessor, the emulator
library uses the coprocessor to perform all floating-point math operations.
Otherwise, the library emulates a coprocessor.

The alternate math library uses an alternate number representation; when a
coprocessor is not present, programs using this library run faster than
programs using the emulator. (Even if a coprocessor is installed, the
alternate math library routines will not use it.) Selecting the alternate
math library sacrifices some accuracy for increased execution speed and
decreased program size.

────────────────────────────────────────────────────────────────────────────
NOTE

You may include all math libraries in your libraries, but doing so triples
the number of combined libraries SETUP builds, thus tripling installation
time and increasing storage requirements. If you intend to install all
possible library configurations, you'll need approximately 6 megabytes of
free space on your hard disk just for libraries. If you install just one
library, you'll need about 3.3 megabytes.
────────────────────────────────────────────────────────────────────────────

For more information on math options, see Chapter 4, "Controlling
Floating-Point Math Operations," in Advanced Programming Techniques.


Choosing Memory Models

Microsoft C supports six standard memory models. Table 2.1 illustrates the
relationship between the available memory models and the limits placed on
their code and data segments.

Table 2.1  Memory Models

╓┌─────────────┌───────────────────┌─────────────────────────────────────────╖
Memory Model  Code Segment Limit  Data Segment Limit
────────────────────────────────────────────────────────────────────────────
Tiny          64K                 64K (CODE + DATA)

Small         64K                 64K

Medium        None                64K

Memory Model  Code Segment Limit  Data Segment Limit
────────────────────────────────────────────────────────────────────────────

Compact       64K                 None

Large         None                None

Huge          None                None

────────────────────────────────────────────────────────────────────────────



For more information on memory models, see Chapter 2, "Managing Memory," in
Advanced Programming Techniques.


Specifying Default Library Names

SETUP normally gives each combined library a name of the form mLIBCfs.LIB,
where m is S, M ,C, or L (memory model); f is A, E, or 7 (math library); and
s is R or P (operating mode).

This question will vary according to the target operating system you
selected. If you chose OS/2, you will be asked whether to use the default
OS/2 library names. If you selected both operating modes, you will be asked
whether to use the default libraries for OS/2 and DOS.

If you selected only one operating mode, or if you selected both but plan to
program in one mode predominantly, you should have SETUP give default names
to all libraries built for that mode.


Second Screen: Installing Additional Files

Your answers to questions on this screen determine whether PWB is installed
(see Figure 2.3).

(This figure may be found in the printed book).


Installing PWB

You may choose not to install PWB if you plan to use only the command-line
version of the compiler and linker. If you install PWB, you can choose to
configure the PWB editor so that it is similar to the BRIEF(R) editor.


Installing the Microsoft Mouse

If you have chosen OS/2 real mode and DOS as the host operating mode, you
are asked whether you want to install the most recent version of the
Microsoft Mouse device driver.


Copying Patch Files

If you have chosen OS/2 real mode and DOS as the host operating mode, you
have the option of installing a patch for dealing with floating-point
exceptions found under PC-DOS version 3.20.


Third Screen: Specifying Directories

On this screen, you specify the directories into which SETUP copies library,
header, and other files (see Figure 2.4). You can choose to override the
default options for directory names. Be sure to enter complete path names
for your own directories. If the specified directories don't exist, SETUP
asks whether you want to create them.

(This figure may be found in the printed book).

The questions about protected-mode executable files and dynamic link
libraries appear only if OS/2 protected mode has been selected as the target
operating mode.

────────────────────────────────────────────────────────────────────────────
NOTE

The questions about executable files concern the location of development
tools, not the executable files you create with Microsoft C.
────────────────────────────────────────────────────────────────────────────


Checking Available Disk Space

Before moving to stage two, SETUP checks your hard disk to see how much free
space is available. If you don't have enough room to install Microsoft C, an
error message informs you how much space is required for the files you've
requested.

If you don't have enough room on your hard disk, you can either delete
existing hard-disk files or reduce the number of requested libraries.

────────────────────────────────────────────────────────────────────────────
NOTE

If you feel that SETUP has incorrectly sized your disk for some reason, you
can disable space checking by using the /NOFREE option.
────────────────────────────────────────────────────────────────────────────


SETUP Options

SETUP has several options: /?, /COPY, /HELP, /LIB, /NOFREE, and /NOHELP.
With the exception of /? and /HELP, you should not use any of the options
the first time you run SETUP. The /? and /HELP options (see Figure 2.5)
present information about the options.

(This figure may be found in the printed book).

The /COPY option uncompresses and copies individual files from the
distribution disks. The /LIB option builds additional combined libraries
after you have already installed Microsoft C, without going through the
entire setup process. /NOFREE instructs SETUP not to check for available
free disk space before uncompressing and copying files. The /NOHELP option
suppresses the SETUP help information displayed at the bottom of the screen.



Configuring Your System

When SETUP has finished creating the combined libraries and placing them in
the directories you specified, it creates files that are used for
configuring your system.

If you selected OS/2 real mode or DOS as the host environment, SETUP creates
three files: NEW-VARS.BAT, NEW-CONF.SYS, and TOOLS.PRE. The files
NEW-VARS.BAT and NEW-CONF.SYS are placed in the directory C:\C600\BIN; the
file TOOLS.PRE is placed in the directory C:\C600\INIT. (These are the
default directory names. If you have overridden them with your own choices,
SETUP places these files in the directories you specified.)

If you selected OS/2 protected mode as the host environment, SETUP creates
two files: NEW-VARS.CMD and TOOLS.PRE. The file NEW-VARS.CMD is placed in
the directory C:\C600\BINP; the file TOOLS.PRE is placed in the directory
C:\C600\INIT. (These are the default directory names. If you have overridden
them with your own choices, SETUP places these files in the directories you
specified.)

To permanently configure your system for Microsoft C, you must add the
respective file contents to your AUTOEXEC.BAT (or STARTUP.CMD), CONFIG.SYS,
and TOOLS.INI files, and reboot your system. You can, however, run
NEW-VARS.BAT or NEW-VARS.CMD to set environment variables before you use
Microsoft C.


Changing AUTOEXEC.BAT or STARTUP.CMD

The NEW-VARS.BAT and NEW-VARS.CMD files contain batch file commands that set
environment variables. Insert these commands into the AUTOEXEC.BAT or
STARTUP.CMD file. Table 2.2 describes the meaning of each variable.

Table 2.2  Environment Variables

╓┌─────────────────────────────────┌─────────────────────────────────────────►
Variable                          Description
─────────────────────────────────────────────────────────────────────────────
PATH                              Path to search for applications

LIB                               Location of run-time libraries

INCLUDE                           Location of include (.H) files

HELPFILES                         Location of help (.HLP) files

INIT                              Location of initialization files

Variable                          Description
─────────────────────────────────────────────────────────────────────────────

TEMP                              Location of PWB/LINK temporary files

─────────────────────────────────────────────────────────────────────────────




Modifying CONFIG.SYS

If the host operating mode is OS/2 real mode or DOS, be sure the  files  and
    buffer  values in CONFIG.SYS are large enough for Microsoft C. The values
in NEW-CONF.SYS are minimums. The values in CONFIG.SYS should be greater
than or equal to these amounts. Additionally, with OS/2, make sure the
LIBPATH=  line of the CONFIG.SYS file specifies the location of the file
MSHELP.DLL. OS/2 users who want to use the CodeView debugger must also
include the statement  IOPL=YES.

To use the extended memory features of CodeView under DOS, set
DEVICE=HIMEM.SYS  (with HIMEM's fully qualified path name). See the section
in this chapter titled "Configuring Extended Memory for CodeView" for
additional information on running CodeView with extended memory in a DOS
environment.


Modifying TOOLS.INI

SETUP creates a file called TOOLS.PRE. This file contains various PWB
settings, such as those that specify libraries. You should add the contents
of the TOOLS.PRE file to your existing TOOLS.INI file; if TOOLS.INI does not
exist, you should rename TOOLS.PRE to TOOLS.INI.

The TOOLS.INI file contains many configuration options, which help you
customize the following utilities in Microsoft C:


    ■   PWB

    ■   The CodeView debugger

    ■   The Microsoft Advisor help system

    ■   The NMAKE utility


You can use the PWB editor or a word processor to change the settings in the
TOOLS.INI file. These are some of the options you can change:


    ■   The colors and the number of lines displayed by CodeView and PWB

    ■   Macros for PWB

    ■   Key assignments for PWB

    ■   Default key settings for PWB

    ■   The location of help files used by the Microsoft Advisor

    ■   Options for NMAKE


A complete table of TOOLS.INI settings is available in on-line help and the
C Reference.


Choosing a Target Operating Environment

In many cases you will program primarily for either the OS/2 protected mode
or the DOS 3.x - OS/2 real mode and use one combined library. Allowing SETUP
to make either DOS or OS/2 the default environment is the easiest method,
but you can also manually choose a target environment.


Choosing Defaults for a Single Mode

Start by deciding which operating mode will be the default environment. Then
give the combined library for that mode the default combined-library name.
The composition of library names is explained in the section "Specifying
Default Library Names."

For example, the following steps will create a protected-mode executable
file using the small memory model and the emulation floating-point library:



    1.  Use SETUP to create SLIBCEP.LIB, the combined library for the small
        memory model, floating-point emulation, and protected mode.

    2.  Rename SLIBCEP.LIB as SLIBCE.LIB (the same name without P), the
        default combined library name for the small memory model and
        floating-point emulation library.


At this point you can use PWB or invoke the command-line compiler, CL,
without specifying the target operating environment for your application.
(In this example, you still need to supply the appropriate PWB or CL options
to select a memory model and floating point options.) If you don't specify a
memory-model option or floating-point option on the command line, the linker
links SLIBCE.LIB, creating an executable file that runs in OS/2 protected
mode.

The same general procedure works for real mode, other memory models, and
floating-point libraries: Create the appropriate operating mode and combined
library, and give it the appropriate default combined-library name.


Selecting a Mode at Compile Time

If you need the flexibility of programming for both operating modes, you
should use SETUP to create the combined libraries that you need for each
model. Once you have created the combined libraries, you can select a model
either by using the PWB options found in the C Compiler Options dialog box
or the CL options listed in Table 2.3.

Table 2.3  Operating Environment Options

╓┌───────┌───────────────────────────────────────────────────┌───────────────►
Option  Environment                                         Library Selected
─────────────────────────────────────────────────────────────────────────────
/Lp     OS/2 protected mode                                 mLIBCfP.LIB

/Lr     DOS 3.x - OS/2 real mode                            mLIBCfR.LIB

Option  Environment                                         Library Selected
─────────────────────────────────────────────────────────────────────────────

/Lc     DOS 3.x (synonym for /Lr)                           mLIBCfR.LIB

─────────────────────────────────────────────────────────────────────────────



Using these options causes CL to substitute one of these library names for
the default combined-library name in the object module's library-search
record.

These options automatically set the /NODEFAULTLIBRARYSEARCH linker option,
which overrides the default library (the syntax is /NOD:libraryname). For
example, if you are programming for the OS/2 protected mode with the small
memory model and floating-point emulation, and you supply the /Lp option for
CL, the compiler passes the following option to the linker:

    /NOD:slibce slibcep


Configuring Extended Memory for CodeView

Extended memory refers to memory at physical addresses above 1 megabyte that
can be accessed by an 80x86 CPU in protected mode.

As previously mentioned, in order to use the extended memory features of
CodeView under a DOS environment, you must set  DEVICE=HIMEM.SYS  (with
HIMEM's fully qualified path name) in the CONFIG.SYS file. A sample entry of
how to implement HIMEM is found in the NEW-CONF.SYS file that SETUP creates.


────────────────────────────────────────────────────────────────────────────
NOTE

HIMEM.SYS is an implementation of the XMS 2.x standard. The complete XMS
source and specification are available from the Microsoft Information
Center; call 1-800-426-9400.
────────────────────────────────────────────────────────────────────────────

In addition, there are several factors to consider when using CodeView under
DOS with extended memory:


    ■   At least 384K of extended memory should be set aside for use with
        HIMEM.SYS.

    ■   Other memory managers such as 386-Max(tm) or QEMM may not work in
        conjunction with HIMEM.SYS. You should use only one memory manager.

    ■   Older versions of HIMEM.SYS may present problems. Use the most recent
        version included on the distribution disks.

    ■   Many RAM disk (VDISK) and disk cache programs are incompatible with
        HIMEM.SYS. The HIMEM.SYS compatible RAMDRIVE RAM disk and SMARTDRV
        disk cache programs are provided on the distribution disks. If you are
        operating under Microsoft Windows(tm) , the SMARTDRV application
        shipped with the Professional Development System is incompatible with
        Windows 2.11, and is compatible only with Windows 3.0.

    ■   Check the documentation of installed terminate-and-stay-resident (TSR)
        programs to see if they are compatible with HIMEM/XMS 2.x. You can
        incrementally install each TSR until you find a potential offender.


If you choose to install the HIMEM, RAMDRIVE, and SMARTDRV files, SETUP
places them in the C:\C600\BIN directory.

────────────────────────────────────────────────────────────────────────────
NOTE

Extended memory should not be confused with expanded memory. Expanded memory
refers to bank-switched memory that overcomes the 640K RAM limitation found
in the 8088 processor.
────────────────────────────────────────────────────────────────────────────


Customizing Microsoft C

In addition to modifying the TOOLS.INI file, Microsoft C can be customized
in other ways. For example, a variety of editor functions and options can be
set within PWB by using the Editor Settings command on the Options menu.

For more information about customizing PWB, refer to Chapter 3 or see
Chapter 8, "Customizing the Microsoft Programmer's WorkBench," in Advanced
Programming Techniques. More information about customizing NMAKE and other
utilities can also be found in Advanced Programming Techniques.






Chapter 3  Using the Programmer's WorkBench
────────────────────────────────────────────────────────────────────────────

This chapter introduces the Programmer's WorkBench (PWB)─a powerful
integrated tool designed to make writing and debugging programs easier. PWB
is a window-oriented programming environment that incorporates a text
editor, a compiler, a linker, a debugger, a Make utility, a source-code
browser, and an on-line help database. PWB provides an alternative to
switching between command-linebased programs: You can edit, compile, link
and debug from within an integrated environment. To demonstrate various
features of PWB, this chapter provides a sample program for you to compile,
link, and debug.

This chapter explains how to start PWB and then introduces the following
elements of PWB:


    ■   Windows and menus. You can quickly find the command you need with the
        menu system. The section "Using Windows and Menus" explains how to
        open and close windows and how to navigate through the menus.

    ■   Programmer's editor. Features such as "bookmarks," macros, customized
        key commands, and enhanced search capabilities decrease the amount of
        time you spend writing code.

    ■   Integrated compiler and linker. You can compile, link, and run a
        program without ever leaving the editor. PWB's integrated environment
        and project-management facilities save you hours of development time.

    ■   Integrated browser and debugger. With the Source Browser, you can
        quickly find a data declaration or function definition within your
        source code, and find references to all functions and variables in a
        multi-module program. With the CodeView debugger, you can set
        breakpoints, examine variables and machine registers, and step through
        execution of your program one line at a time.



Starting PWB

To run PWB for the first time, type

    PWB

at the command line. (If errors occur, PWB displays error messages. See the
README.DOC file for further information.)

You can immediately begin writing source code in the new, untitled window
that appears. PWB maintains a history of the files you have opened. The next
time you run PWB, it opens the last file you worked on.


Specifying a Source File

You can open an existing source file by entering its name on the command
line after the PWB command. If PWB can't find the specified file in the
current directory, it asks if you want to create a new file. You can also
open an existing source file with the Open command in the File menu.


Command-Line Options

PWB has several command-line options that you can issue when you start the
program.

Option                            Action
────────────────────────────────────────────────────────────────────────────
/e string                         The string represents a series of PWB
                                    commands that will be executed at
                                    start-up.

/t file                           Indicates the specified file is
                                    temporary, and should not be kept in the
                                    file history. You must precede the name
                                    of each temporary file with a /t.

/D                                Prevents all PWB initialization and
                                    status files from being read at
                                    start-up.

/DS                               Prevents the CURRENT.STS file from being
                                    read.

/DT                               Prevents the TOOLS.INI file from being
                                    read at
                                    start-up.

/r                                Turns on the global "no-edit mode,"
                                    which gives all files opened with PWB
                                    Read Only status.

/m bookmark                       Positions the cursor at the file
                                    location designated by bookmark.

/?                                Lists the command-line options for
                                    starting up PWB.


Using Windows and Menus

This section introduces the PWB environment and describes how to control
windows and choose commands from the menus. Terms used to describe elements
of the PWB environment are also presented.

────────────────────────────────────────────────────────────────────────────
NOTE

You can enter commands in PWB with the keyboard or a Microsoft (or fully
compatible) Mouse. Unless the Right mouse button is specifically mentioned,
"clicking" means that you press and release the Left mouse button once.

────────────────────────────────────────────────────────────────────────────


Windows

Figure 3.1 shows parts of a typical PWB screen. Some of the elements provide
information only. For example, if CAPS LOCK is on, the letter  C  appears in
the lower right corner of the screen; the letter  C  is informational. Other
parts perform actions triggered by a specific keystroke or mouse action. For
example, if you click the button in the upper left corner of a window, the
window closes. The button is active rather than informational.

(This figure may be found in the printed book).

The parts of a PWB screen and their use are listed in Table 3.1 below.

Table 3.1  Parts of a PWB Screen

╓┌─────────────────────┌─────────────────────────────────────────────────────╖
Name                  Use
────────────────────────────────────────────────────────────────────────────
Menu bar              Lists names of available menus.

Close button          Closes window (appears only if more than one window
                        is displayed).

Name                  Use
────────────────────────────────────────────────────────────────────────────

Title bar             Shows name of file currently being edited.

Windows               Contain source code or display information
                        associated with on-line help.

Maximize button       Enlarges or restores window to its original size.

Screen number         Indicates number of help screen in the on-line help
                        database.

Scroll bars           Indicate cursor position in the current file and
                        allow cursor movement.

Reference bar         Lists shortcut keystrokes (keyboard users) and
                        directs PWB commands (mouse users); summar izes menu
                        contents and displays other information.

File-type indicator   Indicates type of file. C: C source. text: any other
Name                  Use
────────────────────────────────────────────────────────────────────────────
File-type indicator   Indicates type of file. C: C source. text: any other
                        user-created file. pseudo: file-like means of
                        displaying data.

Line and column       Shows current line and column of text cursor.
indicators

Status indicators     A: Meta condition is on.
                        B: Background compile in OS/2.
                        C: CAPS LOCK is on.
                        L: A CR isn't used to terminate a line.
                        M: File has been modified.
                        N: NUM LOCK is on.
                        O: Overtype is on.
                        R: The file is set to Read Only status.
                        T: File is temporary.
                        X: A macro is recording.

────────────────────────────────────────────────────────────────────────────
Name                  Use
────────────────────────────────────────────────────────────────────────────
────────────────────────────────────────────────────────────────────────────




Menus

The menu bar contains seven or more menus which can be accessed at any time.
A brief description of the selected menu command is displayed in the
reference bar. To get further information about what a menu does, invoke the
on-line help system by using the ALT and ARROW keys to highlight a menu
title or menu command, then press F1; or point the mouse cursor at the menu
command and click the Right mouse button.

PWB has the following menus:

(Please refer to the printed      The File menu allows you to clear the
book)                             Source window, load an existing source
                                    file, merge a file with the file in
                                    memory, display the next file in the
                                    file list specified at start-up, save
                                    the current file, save the current file
                                    under a different name, print the
                                    selection or current file contents,
                                    temporarily exit to DOS or OS/2, or
                                    permanently exit PWB. Additionally, a
                                    list of recently opened source files is
                                    displayed at the bottom of the menu.

(Please refer to the printed      The Edit menu allows you to delete, cut,
book)                             copy, and paste text. Anchors can be set
                                    in the text as reference points for
                                    selection. Box, stream, and line mode
                                    determine how text will be selected with
                                    the cursor. Read Only status protects
                                    source files. Commands to record, play,
                                    and edit recorded macros are also
                                    available in this menu. These items are
                                    discussed further in the section "Using
                                    the Editor."

(Please refer to the printed      The View menu controls the active
book)                             window. A window can be closed, sized,
                                    and split vertically or horizontally
                                    with the menu commands.

(Please refer to the printed      The Search menu invokes commands that
book)                             find or change text in source files.
                                    Commands to search the source file for
                                    compilation errors are also available.
                                    Commonly accessed text can be identified
                                    with "bookmarks." Once a bookmark is
                                    associated with a certain position in
                                    the source file, the Go To Mark command
                                    moves the cursor to that location.

(Please refer to the printed      The Make menu is used for compiling or
book)                             building (to "build" means to compile
                                    and link) programs. From this menu, you
                                    also create or edit program lists, which
                                    name the components of multi-module
                                    programs.

(Please refer to the printed      The Run menu is used to execute your
book)                             compiled program. Compiled programs can
                                    be debugged with CodeView using the
                                    Debug command. The Run menu also has
                                    options for issuing DOS or OS/2 commands
                                    and adding applications as PWB menu
                                    items (for example, the Customize Menu
                                    command).

(Please refer to the printed      The items in the Options menu control
book)                             the integrated environment. The
                                    Environment command temporarily changes
                                    path names for libraries, include files,
                                    and help files. Both Key Assignments and
                                    Editor Settings customize the operation
                                    of the PWB editor. The Build Options
                                    command saves current build options,
                                    determines what type of program will be
                                    built (OS/2, DOS) with the Initial Build
                                    option, and specifies whether the
                                    program is built as a debug or release
                                    version. The Browse, C Compiler,
                                    CodeView, LINK, and NMAKE commands
                                    configure their respective applications.

(Please refer to the printed      The commands in the optional Browse menu
book)                             are used to scan through data
                                    declarations and functions once a
                                    program has been compiled. Program call
                                    trees, references to variables, and
                                    symbol relationships can be shown in the
                                    Browser window. Menu items are disabled
                                    unless you have compiled your program
                                    with options that generate a Browser
                                    database.

(Please refer to the printed      The optional Help menu accesses the
book)                             on-line reference system. For more
                                    information, see Chapter 4, "Using the
                                    On-Line Reference."


Choosing Menu Commands

Choose a command from a menu by "pulling down" or "opening" the menu.

To choose a command from the keyboard:


    1.  Press the ALT key to activate the menu bar.

    2.  Press the highlighted character in the menu name (such as F for File),
        or use the right and left ARROW keys to select a menu. The left and
        right ARROW keys only select the menu; they do not open it.

    3.  Press the highlighted character in the command name (such as S for
        Save in the File menu), or use the up and down ARROW keys to highlight
        the command and then press ENTER.


To choose a command with the mouse:


    1.  Open the menu by clicking the menu name.

    2.  Click the command.



Closing Menus

If you open a menu and then decide you don't want to issue a command, you
can close the menu in any of these ways:


    ■   Press the ESC key

    ■   Click the mouse somewhere outside of the menu

    ■   Press ALT twice



Using Shortcut Keys

Certain menu items are followed by the names of keys or key combinations.
These are "shortcut keys" for commonly used commands. Instead of issuing a
command by opening a menu, press the shortcut key to issue the command.

────────────────────────────────────────────────────────────────────────────
NOTE

The reference bar at the bottom of the screen displays common shortcut keys.
You can click any of these buttons to execute the indicated command.
────────────────────────────────────────────────────────────────────────────


Shaded Commands

When a command within a menu is in grayed type, it is "disabled," or
unavailable for use; some condition prevents the command from being used.
For example, when PWB is first run, and no programs have been compiled or
linked, the Next Error and Previous Error commands in the Search menu are
both disabled.


Ellipses

If a command is followed by three periods (an ellipsis), it means more
information must be provided before the command is executed. You provide
this information in a dialog box that appears when you issue the command. If
a command is not followed by an ellipsis, it is executed immediately.


Dialog Boxes

Some menu commands cause dialog boxes to appear. For example, Figure 3.2
shows the dialog box opened by the Search menu's Find command.

(This figure may be found in the printed book).

────────────────────────────────────────────────────────────────────────────
NOTE

Dialog boxes usually offer shortcut keys. Shortcut keys are identified by
highlighted letters, and can be activated by pressing the corresponding key.
────────────────────────────────────────────────────────────────────────────

Dialog boxes can contain one or more of the items in the following list.
Press ALT and the item's highlighted letter or press the TAB or SHIFT+TAB
keys to move among items in a dialog box. Dialog items can be set either
with keyboard commands or with the mouse.

Item                              Description
────────────────────────────────────────────────────────────────────────────
Option buttons ()                 Offer a list of choices; only one option
                                    can be chosen. Use the ARROW keys to
                                    move between the choices. In Figure 3.2,
                                    three option buttons set the direction
                                    of the search (Forward, Backward, Find
                                    All).

Check box [X]                     A yes/no switch. If the box is empty,
                                    the option is turned off. If it contains
                                    the letter X, the feature is on. Press
                                    the SPACEBAR or use the up and down
                                    ARROW keys to turn a check box on or
                                    off.

Text box [. . . . .]              Accepts text that you enter. In Figure
                                    3.2, Find Text requires you to type in
                                    the text to search for.

Command buttons                   Pass commands to the dialog box
< OK >                            (enclosed in angle brackets). The OK
                                    button means to use the current
                                    settings. The Cancel button exits the
                                    dialog box and does not change the
                                    current settings. If one of the command
                                    buttons is highlighted, press ENTER to
                                    execute that command. Clicking a command
                                    button also executes it. If a button
                                    contains an ellipsis, it indicates that
                                    another dialog box will appear when the
                                    command is carried out.

List boxes                        Display lists of information, such as
                                    the contents of the current disk
                                    directory, inside a list box. If the
                                    number of items exceeds the list box
                                    space, press the ARROW keys and
                                    PGUP/PGDN or click the scroll bar to
                                    move around the list.


Getting Help

PWB uses the Microsoft Advisor on-line help system to provide information
about PWB, the compiler, the linker, the CodeView debugger, other utilities,
and topics relating to the C language. Information can be displayed at any
time and at any point you're using PWB or CodeView. For a complete
discussion of the on-line reference, see Chapter 4.


Menu Help

To get information about a PWB menu command, choose the command with the
ARROW key, then press F1; or point the mouse cursor at the menu command and
click with the Right mouse button. A help window then appears with
information about the command.


Dialog-Box Help

Many dialog boxes have a help button that provides additional information
about the dialog box and its contents. To display the information, click the
Help button with the mouse or press F1.


The Help Menu

You can also use the commands listed in the Help menu to display an index of
all help topics, a table of contents, and information about using the
on-line reference system itself.

Choose the Contents command to display a global contents screen for the
entire help system. The main contents lists information divided by topic,
such as PWB, CodeView, or the C language. From the main contents, you can
navigate to a selected topic's table of contents by clicking that topic.

Choose the Index command to display a main index where you can move to other
indexes for different components of the Microsoft C help database.


Using the Editor

The program editor is an important part of the PWB environment. This section
provides a brief overview of its major functions, and assumes you are using
the default key assignments.


Moving Around in a Source File

Many of the keys within the editor work as you would expect them to. For
example:


    ■   The PGDN and PGUP keys advance forward or back within the file.

    ■   The HOME key moves the cursor to the beginning of the current line.

    ■   The END key moves the cursor to the end of the current line.

    ■   The ARROW keys move the cursor one character or one line at a time.

────────────────────────────────────────────────────────────────────────────
NOTE

For a complete list of editor commands, refer to the on-line help system's
PWB Function Quick Reference section on the PWB global contents screen.
────────────────────────────────────────────────────────────────────────────




If you click in the shaded area on either side of the scroll box (position
marker) in the scroll bar, you move the cursor one full window at a time in
that direction. If you click on the scroll-bar arrows, you move the cursor
one row or column in the corresponding direction. If you click and drag the
scroll box, you move the cursor to the corresponding position within the
file.


Defining a Block

To define a block with the PWB editor using the keyboard:


    1.  Move the cursor to the beginning of the block.

    2.  Hold down the SHIFT key and move the cursor to the end of the block.

    3.  Use the other cursor keys (HOME, END, CTRL+RIGHT, and so on) while
        you're holding down SHIFT to extend the block.


To define a block with the PWB editor using the mouse:


    1.  Move the cursor to the beginning of the block.

    2.  While holding down the left button, move to the end of the block.


Once a block has been defined, it can be erased (press DEL), or placed into
the Clipboard, a temporary buffer, by cutting (press SHIFT+DEL) or by
copying (press CTRL+INS). Once in the Clipboard, the block can be inserted
at a cursor location (press SHIFT+INS). While a block is defined, anything
you type will delete the highlighted block and then insert the typed
characters.

Three text-selection modes are available in the Edit menu:


    1.  Box mode selects text in a rectangular area whose opposite corners are
        the starting and ending cursor positions.

    2.  Line mode selects entire lines of text from the starting cursor
        position to the ending cursor position.

    3.  Stream mode selects all text from the starting cursor position to the
        ending cursor location.


Selecting a mode from the Edit menu changes the menu item to a new mode. The
mode displayed in the menu is the next available text-selection mode.

You can also toggle through the selection modes during text selection by
clicking the Right mouse button while you hold down the Left mouse button.


Setting Bookmarks

You can set bookmarks anywhere in your source code with the Define Mark
command in the Search menu. Move the cursor to the location you want to
mark, then choose Define Mark.

In the dialog box that appears, type the name you want to give the bookmark.
The source file name and the row and column are already entered. Press ENTER
to save the bookmark for the current session. To permanently save a
bookmark, you must use the Add To Mark File option. Permanent bookmarks can
be loaded with the Set Mark File command in the Search menu.

To move the cursor to a bookmark, choose the Go To Mark command from the
Search menu. A list of all bookmarks is displayed. Select the bookmark from
the list using the ARROW keys or click the selected bookmark with the Left
mouse button. Press ENTER to go to the bookmark.


Setting Anchors

An anchor is a temporary marker that identifies a cursor position somewhere
in the text. Use anchors to select large blocks of text.

To set an anchor, move the cursor to the desired location and use the Set
Anchor command in the Edit menu. Use the Select To Anchor command in the
Edit menu to select all text between the current cursor position and the
anchor. Only one anchor may be set at a time.


Searching for and Changing Text

You can search for a string of text by using the Find command in the Search
menu. Type the string you want to look for, then use the check boxes to set
options such as wraparound search and case sensitivity. The Files button
allows you to specify a list of files to be searched for the designated
string.

Once a string has been located, use the Repeat Last Find command in the
Search menu (or press the shortcut key, F3) to move to the next occurrence
of the string. If you specified several files to search, press SHIFT+F3 to
move to the next occurrence of the string.

To modify several instances of a string in the source file, use the Change
command in the Search menu. Enter the target string, the replacement string,
and the search options.

PWB also supports the search and replace of text patterns using regular
expressions. Both UNIX(R) and non-UNIX regular expression syntaxes are
supported. For further information, see the on-line reference system.

────────────────────────────────────────────────────────────────────────────
NOTE

Multi-file searches run a built-in GREP facility, and text that is found may
be scanned with the Next Error and Previous Error commands.
────────────────────────────────────────────────────────────────────────────


Creating Macros

Editing tasks that you perform frequently can be saved as macros. A macro is
the record of a sequence of commands and/or literal text. Each macro has a
key combination that is used to "play back" the recorded actions.

For example, suppose several programmers are working on a file and need to
keep track of who made what changes. A macro can be used to insert a comment
with the programmer's name.

To create such a macro, choose the Set Record command in the Edit menu and
enter a macro name and associated key combination. For this example, call
the macro  modname  and let the key combination be CTRL+J. (Any key
combination can be used for a macro.) After you've named the macro, choose
the Record On command from the Edit menu. A bullet will appear to the left
of the menu command and an X in the status line, indicating all keystrokes
and menu commands are being recorded. Then type the following:

    /* j. courtney coded this */

To stop the recording, choose Record On once again, which causes the bullet
to disappear. This action associates all the recorded actions with the
previously selected macro. Now, each time you press the CTRL+J key
combination for the macro, the comment you typed is instantly inserted at
the cursor position.

You save macros to the TOOLS.INI file when you save the <record> pseudofile
which can be reached by the Edit Macro command in the Edit menu. They may be
changed or deleted by modifying the file. See the section "Customizing PWB"
in on-line help for additional information about macros.


Customizing the Editor

You can customize the PWB editor to meet your needs. Editor settings can be
modified, keyboard commands can be assigned, and command sets from other
editors can be emulated. In addition, customized extensions to the editor
can be written in C. See the on-line reference system and Chapter 8,
"Customizing PWB," in Advanced Programming Techniques, for complete details.



Changing Editor Settings

The PWB editor has a variety of settings you can customize, such as word
wrap, color, and width of tab stops.

View or modify the settings by choosing the Editor Settings command from the
Options menu. A pseudofile named <assign> appears. (The title bar says
"Current Assignments and Settings," but the name <assign> appears in the
File menu's list of files.) This file displays numerous editor settings in
the format setting:value, where setting is the name of the setting, and
value is a Boolean, numeric, or text value. You can learn about a setting by
positioning the cursor on it and pressing F1.

To change the value of a setting, enter a new value. The change does not
take effect until you move the cursor to a different line. To save the
changed assignments, press SHIFT+F2 (if the default keyboard assignments are
in effect) or choose the Save command in the File menu. If you do not save,
the assignments will be temporary and will last only for the duration of the
PWB session.

To return to your source file, press F2.


Modifying Keyboard Assignments

You can easily change all PWB keyboard assignments. Functions such as
delete, home, and copy can be reassigned by choosing the Key Assignments
command from the Options menu.

A pseudofile named <assign> appears. (The title bar says "Current
Assignments and Settings," but the name <assign> appears in the File menu's
list of files.) This file lists PWB functions and the keys to which they are
assigned. These appear in the format function:keyname. You can learn about a
PWB function by positioning the cursor on the function name and pressing F1.
A list of unused keys follows the assignment list.

To assign a new key to a function, replace keyname with the name of the new
key. The change does not take effect until you move the cursor to a
different line.

When you move the cursor to a different line, the line with the new
assignment is highlighted. To make the assignment permanent, save the file
by pressing SHIFT+F2 or by choosing the Save command in the File menu. This
updates the TOOLS.INI file, where changes to key assignments are stored.

To remove a key from a given function, assign the unassigned function to the
key.


Using Advanced Editor Features

Most of the standard editing features in PWB are intuitive and easy to use.
However, there are also many advanced editing options that allow you to
customize and control the editor beyond simple menu commands.

The PWB editor incorporates all of the powerful features found in the
Microsoft Editor. A variety of functions and switches can be set to further
customize the PWB editor and enhance its performance. A complete list of
editor functions and settings is available in the on-line reference system.


New or altered functions and settings can be added to the TOOLS.INI file so
they are immediately loaded when PWB starts up. Or, they can be
interactively entered while you are working in the PWB environment.

For example, to interactively assign a key command to the editor's curdate
function, which enters the current date at the cursor, first press ALT+A,
then type the following into the argument dialog box:

    Curdate:SHIFT+CTRL+T

Press ALT+= to assign the key to the function.

Now, whenever you press SHIFT+CTRL+T, the current date will instantly be
inserted at the editor's cursor position.

For detailed information about advanced PWB editor features, refer to the
Microsoft C Reference and the on-line reference system.


Reconfiguring the Editor

If you wish to use another set of editing commands, PWB comes with an
additional .INI file containing key assignments for the BRIEF editor. You
can add the contents of the file to TOOLS.INI, or you can simulate other
editors' command sets by using the customization techniques previously
described.


Using Another Editor

If you prefer to use another word processor or text editor, choose the Run
menu's Customize Menu command. This command is used to add other programs
(including word processors) to the Run menu so that you can run them from
within the PWB environment. Through the dialog box you can specify directory
paths and arguments to pass, and assign a key-command equivalent to run the
editor. When you exit the program, you return to PWB.


Compiling and Linking

PWB uses a project-oriented approach to compiling and linking programs.
After a source file has been created and a program list associated with it,
PWB produces a makefile. A "program list" is a list of all of the source
files that make up the program; the "makefile" contains information about
the source files that compose the project. Whenever a multi-module program
is compiled or linked, the NMAKE utility examines the makefile and
determines which part of the project will be affected.

The process of creating an executable file by compiling and linking is known
as "building." When you build an application, the source code is first
compiled on a module-by-module basis into .OBJ files, and then linked with
the appropriate libraries.

Makefiles are especially useful with multi-module programs, because only
those source files that have changed are recompiled. This results in faster
build times, since existing source files that haven't been changed are not
recompiled. After you set a program list, building is a one-step process in
PWB.


Building Programs in PWB

This section illustrates how to build programs under the PWB environment. To
start, type in this sample program:

    /* IO.C: String input and output */

    #include <stdio.h>

    main()
    {
        char date[30];

        printf( "Enter today's date: \n" );
        gets( date );
        printf( "Sample program run on %s\n", date );
    }

This simple program uses the  printf  and  gets  library functions to prompt
for, and then print, today's date.


Saving the Program

To save the source file, pull down the File menu and choose either Save or
Save As. If the file is new or you choose Save As, a dialog box prompts you
for a file name (see Figure 3.3). If you choose Save with an existing file,
PWB automatically saves the file under the name listed in the title bar of
the source window. To save a copy of a file under a different name, choose
Save As.

(This figure may be found in the printed book).

Type in the new name of the source file, IO.C.


Setting and Clearing the Program List

The Set Program List command in the Make menu tells PWB which makefile to
use in building a program. It clears the current makefile setting, instructs
PWB to use the makefile you have specified, and specifies which Browser
(.BSC) file is associated with the current project.

After you have saved the source file IO.C, choose the Set Program List
command in the Make menu. In the dialog box that appears, type the base file
name (IO), then press ENTER (see Figure 3.4). PWB automatically provides a
.MAK extension.

(This figure may be found in the printed book).

If the makefile does not exist, PWB asks if you want to create a new
makefile; answer yes to this dialog box. Another dialog box titled Edit
Program List appears, listing all files in the current directory. From the
list, select the files you want to include in the project (in this example,
just IO.C).

Press TAB until the cursor is within the list box containing the directory
of files (another box lists the directory names). Use the ARROW keys to move
to the IO.C file. Press ENTER and the file name appears in the program list
below. Once the file is selected, press TAB until the Save List command
button is highlighted, and then press ENTER.

If you have a mouse, click IO.C once and then click the Add/Delete button
(or just double-click IO.C). Once the file appears in the program list,
click the Save List command button to save the makefile.

PWB automatically determines the contents of the makefile based on the files
you selected. You can edit the .MAK text file to change or add additional
commands.

If you want to create a new program or instruct PWB to "forget" about the
current program, use the Clear Program List command in the Make menu. This
action clears the current program list setting. You can then specify a new
program to build with Set Program List.


Setting Build Options

Before compiling the program, you must specify the type of program you will
be building. This is done with the Build Options command in the Options
menu. Build Options calls a dialog box, whose Set Initial Build Options
button presents a series of predefined compiler settings for creating
programs (such as bound EXE, DOS EXE, DOS COM) and OS/2 .DLL libraries. Once
an initial build option has been chosen, its settings can be changed with
the C Compiler Options command in the Options menu.

To specify an existing build option:


    1.  Choose the Build Options command from the Options menu

    2.  Select the Set Initial Build Options button

    3.  Use the mouse or the ARROW keys to select a build option from the list
        and press ENTER


To save your own group of build option settings:


    1.  Select the appropriate settings in the C Compiler Options dialog box

    2.  Choose the Build Options command from the Options menu

    3.  Select the Save Current Build Options button

    4.  Type a description of the options and press ENTER


The settings are now available through the Set Initial Build Options dialog
box.


Compiling and Linking the Program

You can set a variety of compiler directives in the Options menu. The C
Compiler Options command provides options for memory model, processor type,
and other global settings that affect overall compilation (see Figure 3.5).


(This figure may be found in the printed book).

From within the C Compiler Options dialog box, you can use the Set Debug
Options and Set Release Options buttons to easily create debug and release
versions of your program.

When you select the Set Debug Options button, a dialog box appears in which
you can set parameters such as stack checking, optimization, and debug
information. These settings also apply to programs built with the Debug
Build option, which you select from the dialog box displayed by the Build
Options command. Use debug settings when you are in the development phase
and actively debugging your program. When the Release Build option is
checked in the Build Options dialog box, the parameters specified in the Set
Release Options dialog box apply.

Similar debug and release options are also available for the linker with the
LINK Options command in the Options menu (see Figure 3.6). You can display
the options in both the C Compiler Options and LINK Options dialog boxes
with the Show Debug Options and Show Release Options buttons.

(This figure may be found in the printed book).

The Set Release Options button in the C Compiler Options dialog box offers
the same choices as Set Debug Options, but Set Release applies them to a
final version of the program. Use these settings when your program is
completely debugged and ready for release.

For this example, use the default settings in the C Compiler Options dialog
box.

Before building the sample program, make sure that its name appears after
the Compile File and Build commands in the Make menu. If the name does not
appear after the Build command, choose the Set Program List command in the
Make menu to set the makefile as the current project.

To build the program, choose the Build command in the Make menu. If a
compile or link error occurs, the build terminates, and the error appears in
the Compile Results window. Use the on-line reference system to explain
unknown errors by selecting the error and pressing F1. If you are using OS/2
and errors occur, you will be informed and asked if you want to see the
compile log.


Running the Program

After the program has been built, the name of your executable file is
appended to the Execute command in the Run menu. Choose Execute to run the
program. When the program is finished running, press any key to return to
PWB.


Building from Multiple Source Files

You can build most applications from more than one source file. This section
demonstrates how to create a multi-module program.

First, edit the IO.C program:

    /* IO.C: Illustrates external functions */

    #include <stdio.h>

    void outsider(void); /* Add this function. */
    void sample(void);   /* Add this function. */

    main()
    {
        char date[30];

        sample();   /* Call new function. */
        outsider(); /* Call new function. */
        printf( "Enter today's date: \n" );
        gets( date );
        printf( "Sample program run on %s\n", date );
    }

    /* Implement the new sample function. */
    void sample(void)
    {
        printf( "A sample function.\n" );
    }

The  main  function calls two new functions defined within the program:
sample  and  outsider.

Save the changed file and then choose New from the File menu. Type in a
second source file:

    /* IOB.C: Second module for IO.C */

    #include <stdio.h>

    void outsider(void);

    void outsider(void)
    {
        printf( "This line is from the file IOB.C.\n" );
    }

Save it as IOB.C. The two source files are combined to produce a
multi-module program.


Multiple Modules and the Program List

Since the example program now uses two source files, the makefile must be
changed to tell PWB which files should be compiled. Choose the Edit Program
List command from the Make menu, add the IOB.C file to the list, and save
it. When you create multimodule programs, the order of the file names added
is inconsequential.

────────────────────────────────────────────────────────────────────────────
NOTE

A program list can include source files (with the .C extension), assembler
files (.ASM), object files (.OBJ), library files (.LIB), definition files
(.DEF), and resource files (.RC). For example, if you didn't include the
graphics libraries in the combined library when you ran the SETUP program,
you can place GRAPHICS.LIB in the program list to gain access to graphics
functions under DOS.
────────────────────────────────────────────────────────────────────────────

At this point you can compile and link the program.

When you choose the Rebuild All command from the Make menu, every .C file in
the program list is compiled into a .OBJ file. Then all of the .OBJ files
are linked with .LIB files to create one .EXE file.

If you choose the Build command, the NMAKE utility checks the time and date
stamps on the source and object files. If the source code has not changed
since the last time a Build command was executed, unchanged files are not
recompiled. Consequently, the Build command is often faster than Rebuild
All.


Compiling and Linking from the Command Line

You are not restricted to using the PWB environment to create executable
programs. Programs can be compiled and linked with Microsoft C at the DOS or
OS/2 command line.

The CL.EXE program may be used to compile and link programs. PWB
automatically executes CL, or you can manually execute it at the command
line. Simply enter CL followed by a space and the name of the source file to
create a .EXE program.

In addition, a variety of command-line options can be used. For example,

    CL /AM IO.C

causes the program to be compiled using the medium memory model instead of
the default small model. Any compiler options should appear before the names
of the files to be compiled.

You can find a complete list of compiler and linker options in the C
Reference or by typing

    CL /HELP

to invoke the on-line reference system.

You can also use CL to build multi-module programs by specifying all source
files to be compiled:

    CL IO.C IOB.C

This command builds a program called IO.EXE, because IO.C is listed first.

Another way to build a multi-module program is to compile the two files and
then manually link them:

    CL /c IO.C
    CL /c IOB.C
    LINK IO.OBJ IOB.OBJ

The /c option instructs CL to compile but not link. Once the .OBJ files have
been created, use the linker to create the executable file.

Since a makefile named IO.MAK has already been created using PWB, you can
also use the NMAKE utility to build IO.EXE. Simply pass it the name of the
makefile:

    NMAKE /F IO.MAK

If you don't provide /F and a file name, NMAKE searches for a file named
MAKEFILE.

For a complete list of compiler, linker, and NMAKE options, see Advanced
Programming Techniques, the C Reference, or the on-line reference system.


Debugging Programs

PWB has a variety of resources available for debugging programs. They range
from simple compile- and link-error messages to sophisticated source
browsing and source- or assembly-level debugging.

When compile-time errors occur, the cursor moves to the line that caused the
first error and a brief description of the error appears in the reference
bar. Use the Next Error and Previous Error commands in the Search menu to
move the cursor to the lines where other errors occurred.

To view a complete list of errors, choose the Compile Results command from
the View menu. Use the Set Error command in the Search menu to select the
error under the cursor as the current error. This command synchronizes the
source and error windows so that the source-code line that contains the
error appears in the source window.

The Microsoft Advisor can be used to display on-line help about the error.
In the Compile Results window, move the cursor to the error number and press
F1.

PWB incorporates a source-code browser and interfaces with the CodeView
debugger. The Browser displays information about function and data
relationships. CodeView is a window-oriented symbolic debugger that lets you
step through your code and examine variables and data as the program
executes.

Before a program can take advantage of the Browser or CodeView, the
appropriate debug or browse switches must be set with the C Compiler Options
and Browse Options commands in the Options menu. As an example, build one of
the sample programs previously listed with the debug options to experiment
with the Browser and CodeView.


Using the Browser

The commands on the Browse menu are referred to collectively as the PWB
Source Browser. These commands allow you to search a database comprising
selected files, to get a list of references and definitions, build a call
tree and outline, or create a list of relationships among program symbols.
Figure 3.7 shows the functions called by  main  in IO.C.

(This figure may be found in the printed book).

Before using these commands, you must define the database the Source Browser
is going to search.

To define a database:


    1.  Generate a program list using the Set Program List command in the Make
        menu. The files contained in the program list make up the database.

    2.  Choose Browse Options from the Options menu. You must select the
        Generate Browse Information field in the dialog box to create the
        Source Browser database. The rest of the fields on this dialog box
        offer you choices of how to build the database; they are optional.

    3.  Build your program using the commands in the Make Menu. When you build
        the program, a file with the same program-list root name and a .BSC
        (Browser Source Cache) extension is created. This file contains
        reference information that the Browser uses.


Once you have completed these steps, Browse Menu commands are ready for you
to use.


    ■   The Goto Definition command provides a list of symbols and variables
        that occur within include files and modules. You can immediately open
        the file at the line number where the definition occurred by selecting
        the <OK> button.

    ■   The Goto Reference command displays a list of files and line numbers
        where  symbols and variables have been referenced in include files and
        modules.

    ■   The View Relationships command provides detailed information about
        various portions of your program. You can examine functions, macros,
        types, and variables by their use, definition, or inclusion in include
        files and modules.

    ■   The List References command displays references to functions, macros,
        types, and variables. You can move the cursor to a reference, and then
        use the Goto Definition or Goto Reference commands to show occurrences
        of the reference.

    ■   The Call Tree command displays a tree structure of function calls
        within the program.


For additional information about the Browser, refer to the on-line reference
system.

────────────────────────────────────────────────────────────────────────────
NOTE

You can create a Browser information file with the CL (command-line)
compiler by using the /FR or /Fr options. This creates a .SBR file which can
be converted to a .BSC file with the PWBRMAKE.EXE utility.
────────────────────────────────────────────────────────────────────────────


Debugging with CodeView

PWB provides access to the Microsoft CodeView debugger. After a program has
been built, CodeView can be used to step through the source code, displaying
output, registers, and variables as each line is executed (see Figure 3.8).
You can set breakpoints and watchpoints to further aid in debugging.
CodeView uses the Microsoft Advisor to provide on-line help about its
operation and options, in addition to information about any C keywords in
the program you are debugging.

(This figure may be found in the printed book).

────────────────────────────────────────────────────────────────────────────
NOTES

CodeView version 3.0 is compatible with releases of OS/2 later than version
1.0. If you encounter problems exiting CodeView, you either have an older
version of OS/2 or the wrong version of the DOSCALLS.DLL file.

If you use CodeView from the OS/2 DOS compatibility box, be sure the /S
(Swap Screen in Buffers) option is set in the CodeView Options dialog box.
If the option is not set, the mouse cursor is not displayed while you are
debugging.

────────────────────────────────────────────────────────────────────────────


Preparing a Debug Build

It's easy to create a debug version of a program so it can be examined with
CodeView.

First, choose C Compiler Options from the Options menu, then select the Set
Debug Options button. This dialog box contains a variety of settings for a
debug build. Although most of the dialog box options can be set to your
preference, you must check the CodeView option under the Debug Information
heading, which is on by default. In addition, code optimization options,
which are off by default, should be unchecked so that code movement does not
affect debugging.

The CodeView Options command in PWB's Options menu provides a variety of
choices for configuring CodeView. These include two-monitor debugging,
memory allocation, and the number of lines on the screen. For now, use the
default settings initially displayed.

In order for the compiler to build a program that contains the necessary
CodeView information, you must check the Debug option, set in the dialog box
displayed by the Build Options command in the Options menu. In addition, the
CodeView option, which is on by default, must be selected in the Set Debug
Options dialog box.

To demonstrate how CodeView works, set the debug options as listed above,
then rebuild the IO.C program using the Rebuild All command in the Make
menu.


Examining the Program

After your program has been built with the appropriate debug options, choose
the Debug command from the Run menu. PWB immediately transfers control to
the CodeView debugger, loading the current project as indicated in the
program list.

When you switch from PWB to CodeView, the program appears in the source
window. Choose the Source command in the Options menu or type the  S+
command in CodeView's command window to display the code in C, the  S-
command for assembly language, or the  S&  command for a combination of the
two. With C or mixed-source options, a line number appears to the left of
each line of source code as a reference.

In addition to the source code, commands in the View menu show windows
displaying memory, registers, and local variables. CodeView windows are
similar to PWB windows in that they can be scrolled, sized, and closed.
Multiple windows can appear on the screen at once, displaying a variety of
information. A list of shortcut keys and buttons appears at the bottom of
the screen.


Setting Watch Expressions and Breakpoints

Watch expressions and breakpoints are optional CodeView settings that
display variable values and interrupt execution of the program.

A "watch expression" is a variable within the program that CodeView
continually watches. Watch expressions are displayed with the Watch command
in the View menu. As the value of a variable changes, the value changes in
the watch window.

To add a variable to the watch expression list, select the variable and
choose the Add Watch command from the Watch menu or use the W command in the
command window. You can optionally enter the variable name in the dialog
box. Watch expressions are removed with the Delete Watch command in the
watch menu or with the Y command in the command window.

To set a watch variable in the IO.C file, use the cursor to highlight the
date  variable in the CodeView source window. Then choose the Add Watch
command from the Watch menu. The  date  variable appears in the Expression
text box. Press ENTER or click the OK button to store the watch variable.

CodeView also incorporates a temporary watch option called a QuickWatch.
Highlight a variable in the source window with the mouse or cursor. Choose
the QuickWatch command from the Watch menu. A dialog box appears with the
current value of the variable. You can add any QuickWatch variable to the
watch window with the Add Watch dialog option.

You can expand any structures or arrays that are set as watch expressions
(identified with a "+" in the watch window) to show individual elements.
Position the cursor on the variable name and either double-click the Left
mouse button or press ENTER (see Figure 3.9).

(This figure may be found in the printed book).

A "breakpoint" is an instruction that tells CodeView to interrupt execution
at a certain location or when an expression becomes true.

Use breakpoints to gain control of the program before an error occurs and to
quickly move to a part of the program you want to trace. When CodeView stops
at a breakpoint, you can then single-step or trace through instructions
until you find the problem.

Set a breakpoint by positioning the cursor on the line at which you want the
program to stop and then pressing F9. Alternatively, you can choose the Set
Breakpoint command from the Watch menu. A dialog box presents a series of
options for setting types of breakpoints. Breakpoints are modified or
deleted with the Edit Breakpoints command in the Watch menu.

Set a breakpoint in the IO.C file by moving the cursor in the CodeView
source window to the line that reads

    printf( "A sample function.\n" );

From the Watch menu, choose the Set Breakpoint command. The number of the
line the cursor appears on is displayed in the dialog box. Press ENTER or
click the OK button with the mouse to store the breakpoint. After the
breakpoint has been set, the line it occurs on is highlighted.


Running the Program

CodeView runs your program and displays each source line as it executes. If
an error occurs, CodeView stops at the instruction that caused the error.
CodeView also halts execution at breakpoints.

If a program requires arguments to be passed from the command line, these
arguments can be entered with the Set Runtime Arguments command in the Run
menu.

Table 3.2 lists several CodeView commands for running a program.

Table 3.2  CodeView Run Commands

╓┌─────┌───────┌─────────────────────────────────────────────────────────────►
Key   Name    Use
─────────────────────────────────────────────────────────────────────────────
Key   Name    Use
─────────────────────────────────────────────────────────────────────────────
F5    Go      Executes the program to the next breakpoint, error, or end of
                the program

F8    Trace   Executes a single line

F10   Step    Executes a single line, but doesn't trace into
                functions

─────────────────────────────────────────────────────────────────────────────



Run commands can be entered by pressing the appropriate key or clicking the
commands at the bottom of the screen. With the Trace and Step commands, each
line is highlighted as it is executed. The Go command executes each line
until it stops at an error, a breakpoint, or the end of the program. If you
choose the Animate command, each line is highlighted as it executes. To
force the run commands to start at the beginning of the program, use the
Restart command in the Run menu.

The Screen Swap setting in the Options menu controls display of the output.
If the option is turned on, CodeView switches to the output screen after
each line executes, and then switch back to the source window. You can turn
the option off during portions of your program that don't access the screen
to reduce the distracting flicker of switching screens. If you want to view
the output screen longer, choose the Output command from the View menu.
Press any key to exit the output screen and return to CodeView.

In addition to single-stepping through a program, the Animate command in the
Run menu automatically steps through the program, highlighting each line as
it proceeds.


Running IO.C

To demonstrate some of these commands with the IO.C program, make the source
window active by pressing F6 or by clicking its title bar, then choose the
Restart command from the Run menu. This command clears memory and prepares
the program to start execution at the first line of  main.

Press F5 or select the Go button at the bottom of the screen to start the
program. The program executes until it reaches the breakpoint set at the
sample  function.

Use F10 or the Step button to execute each statement until you come to the
outsider  function. If you press F8 or the Trace button at the  outsider
function, CodeView traces through each statement of the function. If you use
the Step button or F10, CodeView executes the function without tracing
through it and moves on to the next program statement.

Continue stepping through the program until you reach the  gets ( date )
statement. Press F10; CodeView switches to the output screen and prompts you
to enter a date. Type today's date and press ENTER. CodeView regains control
and moves to the next statement.

Since  date  was set as a watch variable and now contains data, use the
mouse or press F6 to make the watch window active. Move the cursor to  date
and press ENTER. This expands the display of the array and shows all of the
elements. Press ENTER again while the cursor is on  date  to contract the
array.

Because  date  is also a local variable, it is shown in the local window
with all variables local to the current function. You can expand or contract
data in the local and the watch windows .

Another way to view the contents of  date  is to put the cursor on it in the
CodeView source window and choose QuickWatch from the Watch menu. The  date
variable is immediately displayed in its expanded form. Press ENTER or click
the OK button to leave the dialog box.

Press F10 to finish stepping through the program. A dialog box informs you
that the program has completed execution normally. Press ENTER to clear the
dialog box and complete your debugging session.


Debugging IO.C

To see how CodeView deals with a bug in a program, use the Exit command in
the File menu to return to PWB, then add this function to the IO.C program,
and call it from  main:

    void bounds_error(void)
    {
        int loop, the_num[10];

        for(loop = 0; loop < 15; loop++)
        the_num[loop] = loop; }

Set the appropriate debug options, rebuild the program, and return to
CodeView.

Use the F8 Trace command to execute the program. The program runs until it
reaches the  for  statement in the  bounds_error  function, where the array
bounds are exceeded. The output window reports an error while a CodeView
dialog box indicates the program has terminated. At this point you can
return to PWB, locate the error, and correct it.


Getting More Details

PWB, the compiler, the linker, NMAKE, and CodeView all have other features
and options that go beyond the scope of this introduction.

Refer to Advanced Programming Techniques for information about PWB, NMAKE,
CodeView, and other tools, and the C Reference for a comprehensive listing
of all commands and options for the applications included with Microsoft C.


In addition, information about any component of the Professional Development
System can be accessed through the Microsoft Advisor reference system. For a
complete discussion of the on-line reference, see Chapter 4.






Chapter 4  Using the On-Line Reference
────────────────────────────────────────────────────────────────────────────

Microsoft C offers two types of on-line reference systems:


    ■   The Microsoft Advisor, found within the Programmer's WorkBench (PWB)
        and CodeView environments.

    ■   The QuickHelp program, accessed from the OS/2 or DOS command line.


Both systems provide the same information on important C topics and
utilities provided with the Professional Development System, which include
the C language, run-time libraries, CodeView, and PWB.

The first section of this chapter, "Structure of the Microsoft Advisor,"
outlines the structure and contents of the on-line reference database. The
second section, "Navigating Through the Microsoft Advisor," takes you on a
quick tour of the system. The third section, "Using QuickHelp," explains how
to use the QuickHelp program and how it differs from the Microsoft Advisor.



Structure of the Microsoft Advisor

The Microsoft Advisor can be compared to a librarian managing a collection
of books. Each book, or help file, has its own table of contents, index, and
pages of information. The Advisor organizes the help files with a global
contents and index. All of the files are listed, and their specific tables
of contents and indexes can be accessed through the global references. The
global contents screen is shown in Figure 4.1.

(This figure may be found in the printed book).

You can access a variety of information from the on-line reference system.
Information regarding the C language, run-time libraries, errors, and the
reference system itself is available.


Navigating Through the Microsoft Advisor

You request information about a topic in a window by positioning the cursor
over it and pressing F1 or clicking the Right mouse button once. The help
system then searches through the help files for information about the topic.
If it finds the topic, the help system displays information in the help
window. If help cannot be found for a particular word or symbol, a message
informs you that no information is associated with the topic. Sometimes, a
topic with the same name occurs in several help files. In such cases, a
dialog box is displayed in which you can select the context of the topic.


Using the Help Menu

The simplest method for accessing the on-line reference is by using the
commands found in the Help menu. All of these commands present information
in the Help window.

Command                           Description
────────────────────────────────────────────────────────────────────────────
Index                             Displays the global index of help-file
                                    categories (see Figure 4.2).

Contents                          Displays the global contents screen for
                                    the categories found in the help files.

Topic:                            Provides information about the topic
                                    that the cursor is currently positioned
                                    over. If information about the topic is
                                    available, the topic's name is appended
                                    to the Topic: command. Otherwise, this
                                    menu option is grayed.

Help on Help                      Displays information about using the
                                    on-line reference itself.

Next                              Is useful if a topic with the same name
                                    appears in more than one help file. This
                                    option locates the next occurrence of
                                    the topic name and displays the
                                    information associated with it.

(This figure may be found in the printed book).


Using the F1 Key

You can use the F1 key to get information about any menu command or PWB
dialog box, as well as information on C keywords, operators, and run-time
library functions.


Menu Help

To view information about a menu item, first pull down the menu, then


    ■   Use the cursor keys to highlight the command, and press F1, or

    ■   Move the mouse cursor on the command and click the Right mouse button


Figure 4.3 shows the help information for the Cut command in the Edit menu.


(This figure may be found in the printed book).


Keyword and Library-Function Help

To view information about a C keyword, operator, or run-time library
function,


    ■   Put the cursor on the keyword or function name, and press F1, or

    ■   Click the command with the Right mouse button



Dialog-Box Help

To view information about a PWB dialog box, simply press F1 while the dialog
box is displayed, or click on the help button.


Using Hyperlinks

Hyperlinks are cross-references that connect related topic information.

Hyperlinks enclosed by the < and > characters are called "buttons." Navigate
through the on-line help system by using these buttons.

You can press TAB to move to the next hyperlink button within the current
help window. SHIFT+TAB moves back to the previous button. Typing any letter
moves the cursor to the next button that begins with the letter; holding
SHIFT down and typing a letter moves the cursor backward.

The Microsoft Advisor also recognizes C keywords, library functions,
constants defined by Microsoft C, and similar identifiers as hyperlinks, but
they are unmarked hyperlinks. Unmarked hyperlinks are recognized by the
Microsoft Advisor wherever they appear in the help-information text or in
your source code. However, an unmarked hyperlink is not delimited with the <
and > characters, and you can't move to it with the TAB key. An unmarked
hyperlink can only be executed by placing the cursor on it and pressing F1,
or pointing to it with the mouse cursor and clicking the Right mouse button.


You can access a hyperlink in several ways. First move either the mouse or
text cursor to a hyperlink, then either


    ■   Press F1

    ■   Click the Right mouse button

    ■   Click the Left mouse button twice (double-click)


Highlighted button hyperlinks can also be executed by pressing ENTER or
SPACEBAR.

Any of these actions displays information about the topic the cursor is
positioned on. If the topic isn't a hyperlink, a message informs you that no
information on the topic could be found.

────────────────────────────────────────────────────────────────────────────
NOTE

CodeView uses the Right mouse button differently in the source window.
Clicking the Right button in the source window executes the program to the
line the mouse was clicked on. However, once the help window is displayed,
the Right mouse button can be used to select hyperlinks.
────────────────────────────────────────────────────────────────────────────


Using Help Windows and Dialog Boxes

The Microsoft Advisor displays information in windows or dialog boxes. Help
windows and dialog boxes function the same as other windows and dialog boxes
found in PWB and CodeView. For a complete description of windows and dialog
boxes, refer to Chapter 3, "Using the Programmer's WorkBench."


Using the Help Window

The help window displays various contents, indexes, and information about
selected topics. Some screens of information are larger than the help
window; information beyond the window borders can be viewed by using the
scroll bars or the cursor-movement keys. The  - u -  symbol indicates the
end of information in the help window.

Navigating with Hyperlink Buttons - At the top of the help window is a row
of buttons that are useful for moving through the reference system:

Button                            Description
────────────────────────────────────────────────────────────────────────────
< Up >                            Moves upward in the hierarchy of help
                                    screens. Since information is ordered in
                                    a logical way, moving from the general
                                    to the specific, this command is useful
                                    for moving up the information tree.

< Contents >                      Displays the global contents screen.
                                    This command is useful because it always
                                    returns you to a known point in the
                                    on-line help system hierarchy.

< Index >                         Displays the global index list.
                                    Selecting an item from the list displays
                                    the index for that category.

< Back >                          Moves you to the last on-line help
                                    screen you saw.

Screens on a particular topic frequently are physically grouped together in
a help file. You can press CTRL+F1 to display information about the next
physical topic in the help file.

Viewing the Previous Help Screen - The Microsoft Advisor remembers the last
20 help screens you've accessed. To return to a previous screen, use the <
Back > button or hold down the ALT key and press F1 as many times as
necessary to return to the screen you want to see. The help screen that
appears is active; you can ask for help on any of its hyperlinks or topics.


You can always return to the global contents screen by pressing SHIFT+F1.

Copying and Pasting Help Information - Any text that appears in the help
window can easily be copied to another window. For example, to test an
example program from the help window, you only have to copy it to the source
window and compile it.

To copy and paste using the keyboard, follow these steps:


    1.  Move the cursor to the beginning or the end of the text you want to
        select. Hold down the SHIFT key and move the cursor to the other end
        of the text. The text is now highlighted.

    2.  Execute the Copy command: Press ALT to activate the menus, E for Edit,
        then C for Copy. Note that the menu lists the shortcut command
        (CTRL+INS), which can be substituted for ALT+E, then C.

    3.  Press F6 to switch to another window. Position the cursor where you
        want to insert the text, and execute the Paste command: ALT+E then P,
        or use the SHIFT+INS shortcut. The text from the help window is
        inserted at the current cursor position.


To copy and paste using the mouse, follow these steps:


    1.  Click the Left mouse button and drag the cursor (hold down the button
        while moving the mouse) to select the text you want to copy.

    2.  Choose Copy from the Edit menu (or press CTRL+INS).

    3.  Move the mouse cursor to the location where you want to insert the
        text, and click once. Then choose Paste from the Edit menu. The text
        from the help window is inserted at the current cursor position.


Closing the Help Window - Once you're through working with the reference
system, you can close the active help window and return to the source window
by


    ■   Pressing ESC

    ■   Clicking the Close button in the upper left corner of the window with
        the Left mouse button



Using Help Dialog Boxes

Help dialog boxes contain information about menu commands and their dialog
boxes. A help dialog box differs from a help window in that it is displayed
over the source window and any other windows that are displayed. Unlike the
help window, a help dialog box must be closed before you can execute any
menu commands. The Cancel button in the lower right portion of the dialog
box closes the help dialog box.

To view information about any PWB dialog box, you can


    ■   Press F1

    ■   Click the Help button in the dialog box with the Left mouse button


Either of these commands causes a help dialog box to appear. To close a help
dialog box,


    ■   Press ESC

    ■   Click the dialog box's Cancel button by using the Left mouse button



Accessing Different Types of Information

This section presents some strategies for accessing the different types of
information available within the on-line reference system.


Keyword Information

To get information about any keyword, operator, symbolic constant, or
library function, display the appropriate index for the keyword, select the
keyword's first letter from the index, then scroll down the list of entries
and select the topic's hyperlink. If you know the exact name of a keyword,
it is often quicker to simply type it in the source window and press F1 to
locate it through an index.

Information about keywords can also be viewed by using the arg command and
entering the keyword with F1 in the arg command dialog box. Assuming that
you have the arg function assigned to  alt+a, the following series of
keystrokes displays help on the printf function:

    alt+a printf F1

Figure 4.4 shows the information screen that then appears.

(This figure may be found in the printed book).

When information about a function is shown in the help window, two
additional hyperlink buttons are displayed.


    ■   < Description > provides a detailed explanation of the function. When
        the information is displayed, the button changes to < Summary >. Click
        this button to return to the summarized information about the
        function.

    ■   < Example > displays C source code that provides an example of how the
        function is used.



Topical Information

The on-line reference system is useful when you want an overview of the
available reference topics, or when you only have a general idea of what
information you need. Start with the global contents screen, then select any
hyperlinks that relate to the topic. You can traverse the hyperlinks until
you locate the necessary information.


Menu and Dialog-Box Information

You can get information about any menu command or dialog box by pressing F1
when the menu command is highlighted or the dialog box is displayed. This is
helpful when you are first learning to use the Professional Development
System and are not completely familiar with all of the features.


Error Information

The Microsoft Advisor provides information about compiler and linker error
messages.

To find the meaning of an error message using the keyboard,


    1.  Press F6 to move the cursor to the error window

    2.  Position the cursor on the error number

    3.  Press F1


or with the mouse,


    1.  Position the mouse cursor on the error number

    2.  Click the Right mouse button


Help on error messages is also available directly from the PWB source window
by entering the arg command with the error number and its alphabetic prefix,
and then pressing F1.


Specifying Temporary Help Files

You can temporarily load other help files using the Environment command in
the PWB Options menu. The Microsoft Advisor searches help files you specify
in this text box before it searches the standard Development System help
files as specified by the HELPFILES environment variable. Use the help files
text box to override (for the current session only) the help-file path
defined in the HELPFILES variable. When programming with mixed languages,
you may want to temporarily load the help files for each of the languages
you're using.


Using QuickHelp

QuickHelp is a separate application that provides access to any help file.
It uses the same help files as the Microsoft Advisor, and presents
information about topics in the same way. QuickHelp is designed for the
developer who prefers using command-line utilities or another editor, and
doesn't have access to the Microsoft Advisor through PWB.

Major utilities and applications that come with the Microsoft C package
invoke QuickHelp and display related information if you use the /HELP
switch. You can also use QuickHelp from the command line, as explained in
the following sections. Once you are in the QuickHelp program, select which
help file you want to view.


Using the /HELP Switch

You can get immediate information on major components of Microsoft C by
using the /HELP switch.

For example, to learn about the LIB utility, enter

    LIB /HELP

QuickHelp will run and immediately display information about LIB.


Using the QH Command

You can also run QuickHelp by typing QH at the DOS or OS/2 command line.
Specify an application to get help about, such as

    QH LIB.EXE

In addition to information about programs, QuickHelp can also display
information about run-time errors. You can type the error number with its
alphabetic prefix after the QH command at the DOS or OS/2 command line.


Opening and Closing Help Files

If no file name is specified when QuickHelp is run, it looks for the
environment variable HELPFILES, and opens all listed .HLP files. If the
HELPFILES variable isn't present, all .HLP files in directories specified by
the PATH environment variable are loaded.

Choose the List Database command on the File menu to view a list of all the
currently open help files.

To open additional help files,


    ■   Choose the Open Database command from the File menu.

    ■   Type the fully qualified path name of the help file to be opened in
        the dialog box that appears. You can specify all help files in a
        directory with *.HLP.

    ■   Press ENTER or click the OK button with the Left mouse button.


To close an open help file,


    ■   Choose the Close Database command from the File menu.

    ■   Use the mouse or keyboard to select which help file you would like to
        close from the list of help files displayed in the menu



Displaying a Topic

You can view information about a topic by using the Search command in the
View menu. When topic information is displayed, it is shown in the same
format as information presented by the Microsoft Advisor.

To display a topic from any of the open help files,


    ■   Choose the Search command from the View menu

    ■   Type the topic you want information about in the Search dialog box
        (the search is not case sensitive)

    ■   Press ENTER or click the OK button with the Left mouse button


QuickHelp begins searching for the topic in the open help files. If the
topic cannot be found, a dialog box informs you that the search failed. If
the search is successful, information about the topic is displayed in the
QuickHelp window.


Navigating Through Topics

A series of commands on the View menu allow you to selectively display
topics. These commands include the following:

Command                           Description
────────────────────────────────────────────────────────────────────────────
View History                      Displays a list of all the topics that
                                    have recently been displayed. You can
                                    view a topic in the list by selecting it
                                    and clicking the Right mouse button or
                                    pressing ENTER.

View Last                         Displays the last topic you looked at.

View Back                         Moves backward one topic in the help
                                    file.

View Next                         Displays the next topic in the help
                                    file.


Using the QuickHelp Window

The QuickHelp window (see Figure 4.5) is similar in function to the
Microsoft Advisor help window, described earlier in this chapter.
Information that doesn't fully fit in a window can be scrolled, and
hyperlinks are used to display additional information.

(This figure may be found in the printed book).

The main differences between the two windows are


    ■   Information presented in QuickHelp cannot selectively be copied. See
        the section "Copying and Pasting in QuickHelp" that follows for more
        information.

    ■   The QuickHelp window cannot be closed.

    ■   Any information that appears on the screen can be sent to a printer by
        using the Print command in the File menu.



Copying and Pasting in QuickHelp

In order to transfer information, you must first specify a new file with the
Rename Paste File command in the File menu. Once the file is specified,
choose either the Current Window or the Current Topic command in the Paste
menu to transfer the text to that file. Be sure to specify a new file when
you paste, since QuickHelp overwrites text in an existing file.


More About QuickHelp

In addition to the features mentioned above, QuickHelp has a variety of
other options such as changing the appearance of the help window, searching
for text within topics, and controlling the function of the Right mouse
button.

To learn more about QuickHelp's features, make sure the QH.HLP file is
loaded, then do one of the following:


    ■   Press F1 to view QuickHelp's on-line reference

    ■   Choose a menu command and press F1 or click the Right mouse button to
        get information about it

    ■   Refer to the C Reference guide for a list of QuickHelp options
```

{% endraw %}
