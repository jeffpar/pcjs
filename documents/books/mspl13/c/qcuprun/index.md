---
layout: page
title: "QuickC 2.5 Up and Running"
permalink: /documents/books/mspl13/c/qcuprun/
redirect_from: /pubs/pc/reference/microsoft/mspl13/c/qcuprun/
---

The following document is from the [Microsoft Programmer's Library 1.3](../../) CD-ROM.

{% raw %}

```none
Microsoft  QuickC  Compiler - UP AND RUNNING








────────────────────────────────────────────────────────────────────────────
                Microsoft (R) QuickC (R) Compiler - UP AND RUNNING

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


Microsoft, MS, MS-DOS, CodeView, and QuickC are registered
trademarks of Microsoft Corporation.

Amdek is a registered trademark of Amdek Corporation.

BRIEF is a registered trademark of UnderWare, Inc.

COMPAQ is a registered trademark of Compaq Computer Corporation.

Epsilon is a trademark of Lugaru Software, Inc.

Hercules is a registered trademark of Hercules Computer
Technology.

IBM is a registered trademark of International Business
Machines Corporation.

Norton Guides is a trademark of Peter Norton Computing.

WordStar is a registered trademark of MicroPro International
Corporation.

Document No. SY10424-0290
OEM D703-2Z
10 9 8 7 6 5 4 3 2 1






Table of Contents
────────────────────────────────────────────────────────────────────────────



Introduction
        Read This Manual First
        Features New to Version 2.5

Chapter 1  Unpacking QuickC(R)

        System Requirements
        The QuickC Package

Chapter 2  Installing QuickC

        A Quick Overview
        Running SETUP
            SETUP Stage One
            SETUP Stage Two
            SETUP Stage Three

Chapter 3  Using QuickC

        The QuickC Environment
        Using Windows and Menus
            Getting Started
            Using the Mouse and Keyboard
            Windows
            Menus
            Dialog Boxes
        Using the Editor
            Moving Around in a Source File
            Customizing the Editor
            Using Another Editor
        Compiling and Linking
            Building within the QuickC Environment
            Building from Multiple Source Files
            Compiling and Linking from the Command Line
        The Debugger

Chapter 4  Getting Help

        Structure of the Microsoft Advisor
        Navigating through the Microsoft Advisor
            Using the Help Menu
            Using the F1 Key
            Using Hyperlinks
            Using Help Windows and Dialog Boxes
            Accessing Different Types of Information

Chapter 5  Where to Go from Here


Appendix A  Editor Functions


Appendix B  QuickC Differences

        QuickC Version 2.0 Additions
        QuickC Version 2.5 Additions and Changes
            Interface and Environment Changes
            Language and Compiler Changes


Introduction
────────────────────────────────────────────────────────────────────────────

Welcome to the Microsoft(R) QuickC(R) Compiler version 2.5, a powerful and
sophisticated yet easy-to-use integrated environment for writing programs in
the C language.

In recent years, the popularity of C has grown tremendously. C programs
often can be ported from one computer to another. C programs are fast. C
source code is compact and concise. The language encourages, but does not
enforce, modular and structured programming styles. For these and other
reasons, many programmers and professional software developers prefer C to
any other language.

Microsoft QuickC combines the power of C with an environment that makes C
easy to learn and to use. You can write code, compile and link it, run the
program, and debug it, all without leaving the QuickC environment.


Read This Manual First

This manual contains all the information you need to install and begin using
QuickC on your computer. There are five chapters:

Unpacking QuickC - Chapter 1 lists the system requirements (hardware that
you provide) and the contents of this package (software and documentation
that we provide).

Installing QuickC - Before you can start using QuickC, you must install it.
Although the installation process is quick and easy, you may want more
information about libraries and memory models. Chapter 2 guides you through
installation and provides answers to commonly asked questions.

Using QuickC - Chapter 3 explains how to run QuickC and introduces the
window and menu environment. Next, it presents an example of a typical
development cycle: writing, compiling, linking, running, and debugging a
short program.

Getting Help - The Microsoft QuickC Advisor (online help) provides important
reference information at the click of a button or press of a key. Chapter 4
illustrates the many facets of QuickC's powerful online help system.

Where to Go from Here - Once you have unpacked QuickC, installed it on your
system, and compiled a sample program, you will probably want to investigate
QuickC further. Chapter 5 provides some suggestions on what to do next.


Features New to Version 2.5

If you have used an earlier version of QuickC, you'll find a variety of new
features in version 2.5. These features include


    ■   Language compatibility with Microsoft C version 6.0

    ■   Increased ANSI standard C compatibility

    ■   Support for the tiny memory model (.COM files)

    ■   Enhanced C for Yourself

    ■   New Quickwatch debugging feature

    ■   Customized color window support


For a comprehensive list of new features, refer to Appendix B.






Chapter 1  Unpacking QuickC(R)
────────────────────────────────────────────────────────────────────────────

You're probably eager to install the QuickC Compiler immediately. But you
should first take a few minutes to make sure your system meets minimum
requirements and to determine that your package is complete.


System Requirements

QuickC requires the following minimum configuration:


    ■   An IBM(R) Personal Computer or compatible running DOS version 2.1 or
        later.

    ■   One hard-disk drive and one floppy-disk drive.

    ■   448K (kilobytes) of available memory (512K is recommended for medium
        to large projects).

────────────────────────────────────────────────────────────────────────────
NOTE

Microsoft documentation uses the term "DOS" to refer to both the Microsoft
and the IBM Disk Operating Systems (MS-DOS(R) and PC-DOS).
────────────────────────────────────────────────────────────────────────────





The QuickC Package

Check your QuickC package to see if everything is there. If any pieces are
missing, contact the retailer from whom you bought QuickC. In the package,
you should find the following items:

Registration card: there are many advantages to being a registered owner of
QuickC version 2.5, including notification of future software releases and
easy access to customer assistance. Please take the time to fill out and
mail the registration card now.

Disks: eight 5.25-inch floppy disks or four 3.5-inch floppy disks. The
distribution disk labeled "Setup" contains a file named PACKING.LST that
lists the location and description of all disk files in the Microsoft QuickC
package.

Up and Running: the book you're reading now. It explains how to install and
use QuickC.

C for Yourself: this book is written for programmers who know at least one
language (such as BASIC or Pascal) but who don't know C. Part 1, "Learning
C," is a tutorial that explains how to program in C. Many examples are
included. Part 2, "Using C," examines further the library functions that
perform input and output, the functions that create graphics, and new
features such as real coordinate graphics, presentation graphics, fonts, and
in-line assembly. The appendixes summarize the C language and QuickC library
functions.

Microsoft QuickC Tool Kit: this book explains the individual tools and
utilities that accompany QuickC. Beginners probably won't need to refer to
this book while they're learning the fundamentals of C. Advanced C
programmers should turn to this book for detailed information about
compiling, linking, creating libraries, maintaining multiple-module
programs, and more.






Chapter 2  Installing QuickC
────────────────────────────────────────────────────────────────────────────

This chapter tells you how to install the QuickC Compiler on your system.
The SETUP.EXE program on the Setup distribution disk performs the
installation.

SETUP.EXE does two things. First, it copies several programs (the compiler,
the linker, the library manager, the help system, and others) from the
distribution disks to your hard disk. Second, it creates one or more
combined libraries. You can't program in C without a library.

This chapter also explains why it's necessary to build combined libraries
and how the components fit together.

If you follow the instructions, when you finish the chapter you'll have a
working version of QuickC on your system and you'll be ready to start
programming in C.


A Quick Overview

There are four steps to installing QuickC:


    1.  Make backup copies of all distribution disks.

    2.  Read the first section of the README.DOC file for information on
        installing QuickC. If there are any corrections to this book, they're
        listed at the beginning of README.DOC.

    3.  Run SETUP.EXE, which is an interactive program. The questions you
        answer determine the QuickC environment that is installed. Default
        answers are listed in brackets. At the bottom of each screen is a
        brief synopsis of what each question means.

    4.  Adjust your system and environment variables. SETUP.EXE creates two
        files: NEW-VARS.BAT and NEW-CONF.SYS. Add the information from the
        NEW-VARS.BAT file to your AUTOEXEC.BAT file. If you'd prefer not to
        make the changes permanent, you can run NEW-VARS.BAT as a batch file.
        Change your CONFIG.SYS file if the  files  value and  buffers  value
        are currently smaller than the values in NEW-CONF.SYS. After modifying
        these files, reboot.


The process is not difficult and each screen provides helpful guidance. If
you have enough DOS and programming experience to complete these four steps
without further assistance, we encourage you to do so. (If you get stuck,
return to this chapter.) You may then skip ahead to Chapter 3, "Using
QuickC."

────────────────────────────────────────────────────────────────────────────
NOTE

If you make a mistake during the setup process, just run the program again.
SETUP.EXE never erases files from the distribution disks.
────────────────────────────────────────────────────────────────────────────


Running SETUP

Before you run SETUP, back up the distribution disks using the DOS COPY
command or the DISKCOPY program. Then read the first part of the README.DOC
file by loading it into a word processor or by using the TYPE command:

    TYPE README.DOC | MORE

When you are ready to install QuickC, insert the Setup disk in drive A and
then change to that drive (type  A: ). At the DOS command line, type

    SETUP

────────────────────────────────────────────────────────────────────────────
NOTE

The following instructions assume that you plan to install QuickC on a
system that has at least one floppy-disk drive and one hard-disk drive.
────────────────────────────────────────────────────────────────────────────


Correcting Mistakes

Each setup screen ends by asking if you want to change any of the options.
If you press Y, you can correct any of the answers you entered.

To exit the SETUP program at any time, press CTRL+C.


Understanding Libraries

Compared to other programming languages, C is very lean. It contains only a
few dozen keywords and operators. To print something on the screen, for
example, you call the printf function, which is not a keyword or an
operator. It's not included in the C language proper. Strictly speaking,
printf is a "library function."

When you link a program, the linker looks in the current library for any
functions that were not defined in the program. If your source file calls
printf, for example, the linker looks in the library for the machine code
that executes the function, adds it to the executable program, and resolves
any references to printf.

A library, then, is just a set of commonly used functions that have been
gathered into one place. The American National Standards Institute (ANSI)
defines a great number of library functions (including printf). Microsoft
QuickC adds even more. In C, the keywords and operators number in the
dozens, while the library functions number in the hundreds. Incidentally,
you can add your own heavily used functions to the library (or combine them
into a separate library) if you wish. See Microsoft QuickC Tool Kit for more
information on using the Library Manager (LIB.EXE).

One of the key jobs performed by SETUP.EXE is building at least one large
"combined library." Individual smaller parts of the library are called
"component libraries." The two component libraries you must have are the
memory model library and the math package library. The two additional
component libraries containing graphics functions are optional.

You'll ultimately use one of the combined libraries when you compile and
link a program.


SETUP Options

SETUP has two options for shortcuts: /H and /L. You should not use these
options the first time you run SETUP.

Use the /L option after you have already installed QuickC and you want to
build additional combined libraries without going through the entire setup
process.

Combined libraries are described above (see "Understanding Libraries"). If
you wish to add more libraries in the future, use the /L option:

    SETUP /L

The /H option suppresses the SETUP help information sent to the screen. If
you install QuickC again, you can bypass the help information by using the
/H option:

    SETUP /H


SETUP Stage One

Before SETUP can install QuickC, it needs some information about your system
and the type of programming you intend to do. This first stage of SETUP is a
series of questions split into three screens.


First Screen: The Libraries

The first screen asks these questions:

    Source of disk images [A:]:
    Math Options: Emulator [Y]:8087 [N]:
    Memory Models:Small[Y]:Medium[N]:Compact[N]:Large[N]:
    Delete the component libraries when finished [Y]:
    Include in combined libraries: GRAPHICS.LIB [N]:PGCHART.LIB [N]

    Do you want to change any of the above options [Y]:

The questions appear on the screen one at a time. An explanation of each
option appears at the bottom of the screen, unless you added the /H option
when you ran SETUP. Answer the questions by typing in your responses and
pressing ENTER.

Each question ends with a default answer inside square brackets ([Y], for
example). Press ENTER to accept the default. If you are unsure of the proper
reply for any of these questions, consider the default a good place to
start. If you later find you would have preferred to make another choice,
you can always run SETUP again.

Each screen concludes by asking if you want to change any of your choices.
When you're satisfied, press N (the default answer is Y, which returns you
to the first question on the screen). If you start over, the default answers
become the choices you made previously.


Which Disk Drive?

The first question on the first screen asks where you're starting from (the
drive containing the distribution disks):

    Source of disk images [A:]:


Which Math Library?

Your answer to the second question determines which math component libraries
will be included in the combined library:

    Math Options: Emulator [Y]:    8087 [N]:

Some computers contain an 8087 or 80287 math coprocessor chip and some
don't.

If your machine is equipped with a coprocessor, linking your programs with
the combined library tailored for the 8087 will speed up all floating-point
calculations. However, these programs will run only on a machine that has an
8087 or 80287 chip.

Programs linked with the emulator library, on the other hand, will run on
any computer, whether it has a coprocessor or not. The emulator library does
check for the presence of a math coprocessor. If the computer has a
coprocessor, it performs all floating-point math operations. If no
coprocessor is installed, the emulator library "emulates" (imitates) the
actions of a coprocessor.

If you're not sure which math library to include, choose the emulator
library because it's the most flexible.

You may include both math libraries, but doing so doubles the number of
combined libraries SETUP builds, thus doubling the time it takes to install
QuickC. If you intend to install all possible library configurations, you'll
need approximately 6 megabytes of available space on your hard disk. If you
install just one library, you'll need about 2.7 megabytes of free space.


Which Memory Model?

The next question asks which memory models you plan to use:

    Memory Models: Small [Y]:   Medium [N]:   Compact [N]:   Large [N]:

The small memory model is the default. If you're in a hurry to install
QuickC, accept the default answer by pressing ENTER four times and bypass
the explanation below. Should you discover that you need additional memory
for your programs, you can run the SETUP program again. If you're curious
about memory models, read on.

The 8086 processor and its relatives access memory in 64K blocks called
"segments." To move outside of the current 64K segment requires additional
machine instructions. Also, an address within the 64K segment can be
specified with only two bytes. If you wish to access more than 64K of memory
locations, their addresses must include additional bytes (which makes
pointer variables longer and program execution slower).

C programs have two parts: the code (machine instructions) and the data
(variables and constants). If you write programs that fit either the code or
the data entirely within one 64K segment of memory, the program will execute
faster and use less memory. However, if you need to use multiple memory
segments for the code or the data, you may, although the program will run
more slowly.

The various configurations of memory usage are called "memory models."
QuickC supports six standard memory models. Table 2.1 illustrates the
relationship between the six available memory models and the limits placed
on their code and data segments.

Table 2.1  Memory Models

╓┌─────────────┌────────────────────────┌────────────────────────────────────╖
Memory Model  Code Segment Limit       Data Segment Limit
────────────────────────────────────────────────────────────────────────────
Tiny          64K total Code and Data  ─
Small         64K                      64K
Medium        None                     64K
Compact       64K                      None
Large         None                     None
Huge          None                     None
────────────────────────────────────────────────────────────────────────────


For a great many applications, the small memory model suffices. The tiny
memory model is similar to the small model except it is limited to 64K per
program (including both code and data) and it produces .COM files instead of
.EXE files. If you're working on a large database manager, you might want
one of the models that provides unlimited data segments (compact, large, or
huge). If you're writing a program with many functions, you might want to
remove the limit on the code segment (medium, large, or huge).

The huge memory model uses the same library as the large model, so the SETUP
program offers only four choices. The difference between large and huge is
that

the huge model allows individual arrays to exceed 64K, whereas the large
model limits arrays to 64K.

Any or all of these memory models may be selected, but SETUP.EXE will build
a separate combined library for each model. For example, if you choose the
small memory model and the math emulator, the library file SLIBCE.LIB is
created. If you choose the medium model and the 8087 math package,
MLIBC7.LIB is created. The small memory model libraries start with the
letter "S," medium with "M," compact with "C," and large with "L."
Similarly, the emulator math package is shown by a final "E" in the file
name, the 8087 package by a "7."

Given four memory models and two math packages, you can create a total of
eight combined libraries. But the more combined libraries you create, the
more space they'll take on your hard disk and the longer the installation
process will take.

The first time you install QuickC, create only one or two combined
libraries. If you find a need for other memory models or math packages, just
run the SETUP program again.


Include Graphics Libraries?

The graphics library GRAPHICS.LIB contains numerous functions for drawing
lines, rectangles, circles, and other shapes. If you plan to write programs
that use these functions, press Y to answer the first of these two
questions:

    Include in combined libraries:GRAPHICS.LIB[N]: PGCHART.LIB[N]:

However, if you plan to write programs that use text output only, then you
probably don't need GRAPHICS.LIB taking up room on your disk. Press N to
omit the graphics library. (If you very rarely need graphics functions, you
can omit the graphics library and, whenever you need the functions,
explicitly link the graphics library GRAPHICS.LIB. See the Microsoft QuickC
Tool Kit manual for more information about linking with a specific library.)


The PGCHART.LIB library contains presentation graphics functions for
creating high-resolution graphs (line graphs, bar charts, column charts,
scatter diagrams, and pie charts). Again, if you want to display such
graphics in your programs, press Y to include this component library. If
you'll use presentation graphics rarely or not at all, press N to omit this
library.


Second Screen: Extra Files

The next screen asks the following questions about copying additional files
to your hard disk:

    Install Microsoft Mouse [Y]:
    Copy documentation files [Y]:
    Copy the DOS patch files [N]:
    Copy sample C programs [N]:
    Copy the QuickC tutorial files [N]:

    Do you want to change any of the above options [Y]:

SETUP will copy these extra files to your hard disk if you want them.

As before, each of these questions is accompanied by an explanation at the
bottom of your screen to help you decide if these files would be useful.


Third Screen: The Directories

The final set of questions asks for the names of directories in which to
store the various files.

    Directory for Executable files [C:\QC25\BIN]:
    Directory for Libraries [C:\QC25\LIB]:
    Directory for Include files [C:\QC25\INCLUDE]:
    Directory for Sample files [C:\QC25\SAMPLES]:
    Directory for Tutorial files [C:\QC25\TUTORIAL]:

    Do you want to change any of the above options [Y]:

You don't have to choose any of the default options. You might decide you
want your executable programs in C:\QC25\BIN and your source files in
C:\C_CODE, for example. Type in the names of directories you want SETUP to
use (including the drive name in the path). If the directories don't exist,
SETUP asks if you want to create them.

QuickC can be used in conjunction with the Microsoft C Professional
Development System version 6.0. To use QuickC with Microsoft C, choose the
directories where Microsoft C stores executable files, libraries, and header
files: their default names are C:\C600\BIN, C:\C600\LIB, and
C:\C600\INCLUDE; corresponding QuickC directories are C:\QC25\BIN,
C:\QC25\LIB, and C:\QC25\INCLUDE.


Checking the Available Disk Space

Before moving on to stage two, the SETUP program checks your hard disk to
see how much free space is available. If you don't have enough room to
install QuickC (the amount needed varies according to the options you've
chosen), an error message tells you how much space is required for the files
you've requested. If you attempt to install all possible libraries, you'll
need approximately 6 megabytes. If you install just one combined library,
you'll need roughly 2.7 megabytes.

If you don't have enough room on your hard disk, you have two choices.
First, you can delete files from the hard disk until there's enough room for
the libraries you want to create. Second, you can reduce the number of
libraries you request (or you can choose not to copy the samples and
documentation files) to cut down the amount of space you need. Either way,
you'll have to run SETUP again.


SETUP Stage Two

Now that you've specified your system and programming needs, SETUP goes to
work. This stage requires you to swap the distribution disks in and out of
the drive. Insert the disks as SETUP asks for them and press ENTER. If you
put in the wrong disk, SETUP will ask again for the proper disk.

At this point, all SETUP needs is the go-ahead from you. It starts building
the combined libraries you requested, placing them in the directories you
specified.


SETUP Stage Three

When SETUP finishes creating the combined libraries, it creates two files:
NEW-VARS.BAT and NEW-CONF.SYS. To install these files permanently, you must
now adjust the DOS environment and modify both your AUTOEXEC.BAT and
CONFIG.SYS files.

────────────────────────────────────────────────────────────────────────────
NOTE

If you use other languages that have their own LINK.EXE program, you may not
want to put the QuickC linker in your path. If this is the case, you can
modify CONFIG.SYS and run NEW-VARS.BAT each time you use QuickC.
────────────────────────────────────────────────────────────────────────────


Changing AUTOEXEC.BAT

The file NEW-VARS.BAT created by SETUP might look something like this:

    PATH=C:\QC25\BIN;C:\DOS;C:\MYEXE;C:\WIN386;C:\WORD
    set LIB=C:\QC25\LIB
    set INCLUDE=C:\QC25\INCLUDE

PATH is a system variable that tells your computer where to find executable
programs. The LIB and INCLUDE variables tell QuickC where to find the
libraries and the include files.

To make the change permanent, load your current AUTOEXEC.BAT file into an
editor or word processor (you'll find AUTOEXEC.BAT in the root directory),
add the new path names, and save the modified file.

You can edit the AUTOEXEC.BAT file with the QuickC editor if you wish.
Change to the directory containing the QC.EXE program (for example, type  CD
\QC25\BIN ) and type  QC \AUTOEXEC.BAT (the backslash indicates that the
file is in the root directory). Then use the File menu Merge command to
merge NEW-VARS.BAT into AUTOEXEC.BAT.

In most cases, it is best to change the AUTOEXEC.BAT file and reboot.
How-ever, if you use other languages and other compilers, you may wish to
leave the AUTOEXEC.BAT file alone and run the NEW-VARS.BAT file before each
QuickC session.

If you want to use the 8087 math library instead of the emulator library,
use the /FPi87 option as a custom flag within the QuickC Linker Flags dialog
box or at the command line using QCL. If you compile and link from the
QuickC environment, either add the line below to your AUTOEXEC.BAT file or
type it at the command line:

    SET CL=/FPi87

To maintain compatibility between the QuickC and Microsoft C compilers, the
CL environment variable is used. If you include options that the Microsoft C
compiler recognizes but QuickC doesn't, QuickC issues an error message.


Modifying CONFIG.SYS

The NEW-CONF.SYS file might look like this:

    files=20
    buffers=10

You need to be sure that the  files  and  buffer  values are large enough to
contain QuickC. Load your CONFIG.SYS file into an editor or word processor
(again, it should be in the root directory), change the two lines that refer
to files and buffers, and save the modified file. If your current CONFIG.SYS
file has higher numbers ( files = 30, for example), you can leave the higher
value in effect. The numbers in NEW-CONF.SYS are minimums; you may safely
use higher values.

────────────────────────────────────────────────────────────────────────────
NOTE

Merely changing the AUTOEXEC.BAT and CONFIG.SYS files does not affect the
current DOS environment. To put the changes into effect, you must reboot
your machine by powering off and then on or by pressing CTRL+ALT+DEL.
────────────────────────────────────────────────────────────────────────────

After installing QuickC, changing the files, and rebooting, you can proceed
to Chapter 3, "Using QuickC."






Chapter 3  Using QuickC
────────────────────────────────────────────────────────────────────────────

If you followed the instructions in Chapter 2, "Installing QuickC," you now
have a working version of the QuickC Compiler and are ready to write your
first program. This chapter introduces the QuickC environment─a powerful
tool to help you write and test programs.

In this chapter you'll work through a sample compiling and linking session.
When you finish, you will have written, saved, built, and tested a working
program.

If you'd prefer to experiment on your own or if you've previously used an
older version of QuickC, you can skip this chapter (or skim through it). We
strongly suggest, however, that if you do nothing else, review the next
chapter, "Getting Help." In addition, we recommend that all QuickC users run
the LEARN program, which teaches how to use the QuickC environment.


The QuickC Environment

QuickC is a window-based programming environment that integrates a text
editor, a compiler, a linker, a debugger utility, a make utility, and an
on-line help database. This chapter introduces and describes the following
aspects of QuickC:

Windows and Menus - The menu system allows you to quickly find the command
or action you need. The first part of this chapter explains how to open and
close windows and how to navigate the menus. It also defines certain terms
used throughout the chapter.

Editor - When you're writing source code, you'll spend a lot of time using
the QuickC editor. If you know WordStar(R) commands, you'll know how to use
the QuickC editor. If you'd prefer to customize the editor, you can use the
MKKEY utility, which is explained in the "Customizing the Editor" section.

Compiler/Linker - You can compile, link, and test a program without ever
leaving the editor. QuickC's integrated environment saves you hours of
development time. This part of the chapter defines and illustrates the
various compiling and linking options.

Debugger - The debugger allows you to set breakpoints, to monitor the status
of key variables, and to trace program execution line by line. This section
of the chapter provides a brief overview of the debugger utility. The LEARN
program includes a lesson that provides more details about the new, advanced
debugging enhancements.


Using Windows and Menus

Even if you've never used windows and menus before, you'll find the QuickC
programming environment easy to learn.

This section introduces the QuickC environment. You'll learn how to control
windows and to choose commands from the menus.


Getting Started

To run QuickC, type

    QC

at the DOS prompt. You'll immediately enter the QuickC editor.

If you enter a file name after the  QC  command, for example,

    QC MYFILE

QuickC automatically adds the extension .C that marks a C source file.
Typing the line above causes QuickC to load MYFILE.C.

If QuickC can't find the file you specified in the current directory, it
asks if you want to create a new file.

If you do not enter a file name after the  QC  command, QuickC opens an
empty file named UNTITLED.C, which you can rename later or save with another
name.


Command-Line Options

Depending on your particular hardware, you may be required to include one of
the following options on the command line after the  QC  command but before
the file name, for example,  QC /b MYPROG.

Option                            Hardware
────────────────────────────────────────────────────────────────────────────
/b                                For black-and-white systems, including
                                    Hercules(R) monochrome monitors, LCD
                                    screens, and black-and- white monitors.

/g                                For AT-compatible systems that refresh
                                    the screen at a slower rate than the
                                    standard AT (including some COMPAQ(R)
                                    systems).

/h                                For systems equipped with EGA-, VGA-, or
                                    MCGA-compatible graphics cards capable
                                    of displaying more than 25 lines of text.
                                    EGA cards can display 43 lines of text,
                                    VGA cards can display 50. You can use a
                                    Microsoft (or fully compatible) mouse
                                    with this option. If you encounter
                                    problems, contact the manufacturer of
                                    the mouse.

/k                                Loads a key file with customized QuickC
                                    editor
                                    commands.

/nohi                             For systems that don't support
                                    high-intensity colors (including LCD
                                    monochrome monitors and some Amdek(R)
                                    color monitors).


Using the Mouse and Keyboard

You can enter all commands from the keyboard. If you own a Microsoft (or
fully compatible) Mouse, you can choose to use either the keyboard or the
mouse to enter commands. When this book explains a command, the two options
are marked with icons of a key or a mouse as follows:

Press the ALT key.

Click the File menu, then click Save.

Unless the right button is specifically mentioned, "clicking" means that you
click the mouse's left button once.


Windows

The system of windows and menus is simple to use and intuitive. Many
programmers can learn how to use the QuickC environment without learning the
terms that describe the various menus and buttons. In addition, if you're
confused about windows or menus, you can almost always call up a help window
that explains how a menu works (see Chapter 4, "Getting Help"). However, if
you want to read further in this chapter, you'll have to understand the
terms that are used.

Figure 3.1 shows a typical QuickC screen, with labels that describe its
parts. Some of the parts provide information only. For example, if the CAPS
LOCK key is on, a letter  C  appears in the bottom right corner. The letter
C  is informational (it tells you the CAPS LOCK key is on). Other parts of a
window perform actions triggered by a specific key or mouse action. For
example, if you click the little box in the upper-left corner of a window,
the window closes. The box is not informational; it's active.

(This figure may be found in the printed book.)

The parts of a window, their status, and their use are listed in Table 3.1.


Table 3.1  Parts of a Window

╓┌────────────────┌─────────────────────┌────────────────────────────────────╖
Name             Status                Use
────────────────────────────────────────────────────────────────────────────
Close button     Active                Closes the current window (the
                                        source window cannot be closed).
                                        Appears in upper-left corner.

Menu bar         Active                Lists names of the available menus.

Title bar        Informational         Shows name of the window (the
                                        source window title bar lists the
                                        file currently being edited).

Source window    Active                Contains source code for the
                                        program you're writing. Seven other
                                        windows are supported: Debug, Help,
                                        Locals, Registers, Notepad, Output,
                                        and Errors.

Maximize button  Active                Shrinks or enlarges the current
                                        window.

Name             Status                Use
────────────────────────────────────────────────────────────────────────────

Reference bar    Informational/        Lists shortcut keystrokes (keyboard
                    Active                users) and direct commands to
                                        QuickC (mouse users).



Table   3.1 (continued)

╓┌───────────────────────┌──────────────┌────────────────────────────────────╖
Name                    Status         Use
────────────────────────────────────────────────────────────────────────────
Scroll bars             Active         Indicate your position in the
                                        current file. If you click in the
                                        gray area on either side of the
                                        position marker, you move in that
                                        direction. If you click the arrows,
                                        you move one line (or one character)
                                        in that direction. If you click and
Name                    Status         Use
────────────────────────────────────────────────────────────────────────────
                                        in that direction. If you click and
                                        drag the position indicator, you
                                        can move anywhere within the file.

Line/Column             Informational  Show the current line and column of
indicators                             the text cursor.
                                        C means CAPS LOCK is on.
                                        N means NUM LOCK is on.

File status indicators  Informational  R means the file is set to Read
                                        Only status.
                                        D means Debugging History is on.
                                        I means the debugging history
                                        includes user input.

────────────────────────────────────────────────────────────────────────────




Using the Menu Bar

To choose a command from a menu, you "pull down" or "open" the menu and
choose the command you want:


    1.  Press the ALT key to activate the menu bar.

    2.  Press the highlighted character in the menu name (F = File, for
        example).

    3.  Press the highlighted character in the item name (in the File menu, S
        = Save, for example).


Or follow these steps:


    1.  Press the ALT key.

    2.  Use the RIGHT and LEFT arrow keys to move to the menu you want.

    3.  Use the UP and DOWN arrow keys to highlight the command.

    4.  Press ENTER.


Or:


    1.  Open the menu by clicking the menu name.

    2.  Click the command.



Making the Menu Disappear

If at any point you decide that you don't want to choose a command from a
menu, you can make the menu disappear:

Press the ESC key.

Click somewhere on the screen outside of the menu.


Shortcut Keys

In the menus below, you'll notice that certain menu items are followed by
names of keys. These are the "shortcut keys" for heavily used commands. For
example, the Run menu Restart command is followed by SHIFT+F5, which means
that instead of opening the Run menu and choosing the Restart command, you
can instead hold down the SHIFT key and press F5.

────────────────────────────────────────────────────────────────────────────
NOTE

The reference bar displays commonly used shortcut keys. In addition, the
inside front cover of this book lists the important shortcut keys for easy
reference.
────────────────────────────────────────────────────────────────────────────


Menus

The menu bar contains ten menus, which you can pull down at any time. If you
don't know what a menu does, invoke the online help system by highlighting
the menu title (or highlighting a command within a menu) and pressing F1 or
clicking the right mouse button. QuickC uses the following menus:

╓┌────────────────────────────────────┌──────────────────────────────────────╖
────────────────────────────────────────────────────────────────────────────
(Please refer to the printed book.)  The File menu controls files,
                                        allowing you to clear the source
                                        window (New), load an existing source
                                        file (Open), append a file to the
                                        source code in memory (Merge), save
                                        the current file (Save), rename the
                                        current file (Save As), print the
                                        source code (Print), temporarily quit
                                        to DOS (DOS Shell) and return to
                                        QuickC by typing EXIT at the command
                                        line, or permanently exit QuickC
────────────────────────────────────────────────────────────────────────────
                                        line, or permanently exit QuickC
                                        (Exit).

(Please refer to the printed book.)  From the Edit menu you manipulate
                                        text by deleting, cutting, copying,
                                        and pasting lines of code. You can
                                        also set Read Only status to protect
                                        source files.

(Please refer to the printed book.)  The View menu controls the visible
                                        screen. You can rapidly switch
                                        between multiple modules (Source),
                                        read through include files (Include)
                                        make visible the output screen
                                        (Output Screen), expand the source
                                        window (Maximize), or open and close
                                        the various windows (Windows).

(Please refer to the printed book.)  The Search menu invokes the commands
                                        that find or replace text or
────────────────────────────────────────────────────────────────────────────
                                        that find or replace text or
                                        functions in source files. It also
                                        moves to a specified line and
                                        searches for the next source line
                                        that caused a compiler error.

(Please refer to the printed book.)  The Make menu allows you to compile
                                        (Compile) or to compile and link
                                        (Build) programs. From this menu, you
                                        also create or edit program lists
                                        that name the components of a
                                        multimodule program.

(Please refer to the printed book.)  Once a program is compiled and
                                        residing in memory, use the Run menu
                                        to run it. You can run it from
                                        beginning to end, selectively run
                                        individual sections, or trace through
                                        the program line by line.

────────────────────────────────────────────────────────────────────────────

(Please refer to the printed book.)  If your program contains logic errors,
                                        the Debug menu allows you to set
                                        breakpoints, watchpoints, and watch
                                        values. In addition, you can keep
                                        track of variables and their changing
                                        values. (This feature means there's
                                        no need to sprinkle printf functions
                                        throughout your program just to watch
                                        variables as they change values.)

(Please refer to the printed book.)  The Utility menu allows you to run
                                        DOS commands and programs from within
                                        the QuickC environment. You can run
                                        the online QuickC tutorial ("Learn
                                        QuickC"), or if you find that you use
                                        certain programs often, you may want
                                        to add them to the Utility menu
                                        (Customize Menu). For example, you
                                        can add your favorite program editor
────────────────────────────────────────────────────────────────────────────
                                        can add your favorite program editor
                                        to this menu if you wish.

(Please refer to the printed book.)  The items on the Options menu control
                                        the integrated environment. For
                                        example, the Options menu Color
                                        command allows you to change the
                                        colors used on the screen. The
                                        Options menu Make command controls
                                        flags that affect the actions of the
                                        compiler and linker.

(Please refer to the printed book.)  The Help menu is one route to the
                                        online help system. For more about
                                        this topic, see Chapter 4, "Getting
                                        Help."




Short Menus and Full Menus

If you open the Options menu, you'll see one of the two menus below:

╓┌────────────────────────────────────┌──────────────────────────────────────╖
────────────────────────────────────────────────────────────────────────────
(Please refer to the printed book.)  (Please refer to the printed book.)


When six commands are listed under Options and a dot appears beside Full
Menus, it means full menus are turned on. When the Options menu holds only
two commands and Full Menus has no dot, short menus are in effect.

To change from full menus to short menus or vice versa, choose the Full
Menus command. The command is a toggle button; that is, it changes from on
to off, or off to on, when pressed.

The short menus contain all the commands you need to write, compile, and run
a C program. The short menus may seem easier to use, especially for
beginners. If you prefer to see every possible option, you should enable
Full Menus. The choice is yours.

────────────────────────────────────────────────────────────────────────────
NOTE

When you set preferences from the Options menu─full menus, memory models,
compile options, and so on─your choices are saved in the current directory
in a file called QC.INI. If you set an option, it stays set from one QuickC
session to the next, or until you change it.
────────────────────────────────────────────────────────────────────────────


Shaded Commands

When a command within a menu is shaded, it is unavailable. You can't use it.


For example, when you first run QuickC and haven't yet compiled or linked a
program, you can open the Search menu and see that both Next Error and
Previous Error are shaded. You haven't done anything to generate errors, so
there are no errors to view.


Ellipses

When a command is followed by three periods (an ellipsis), it means QuickC
needs more information before it executes the command. If a command is not
followed by an ellipsis, choosing the command causes it to execute
immediately.

For example, the File menu contains both the Save and Save As... commands.
Choosing Save causes QuickC to save the current file with the current name
(the file name appearing at the top of the source window). Choosing Save
As... causes a dialog box to appear (see the following section). Within that
dialog box, you type the new name for your file.


Dialog Boxes

Very often, invoking a menu command causes a dialog box to appear. For
example, Figure 3.2 shows the dialog box opened by the Options menu Display
command.

(This figure may be found in the printed book.)

────────────────────────────────────────────────────────────────────────────
NOTE

Dialog boxes usually offer a set of shortcut keys. Press ALT to see which
keys are active within a dialog box.
────────────────────────────────────────────────────────────────────────────

Dialog boxes can contain one or more of the items on the following list. Use
the TAB key to move between the various items in a dialog box.

Option Buttons ()                 Option buttons offer a list of choices,
                                    of which you choose only one. Use the
                                    arrow keys to move between the choices.
                                    In Figure 3.2, four option buttons allow
                                    you to pick the screen color you prefer.
                                    These are sometimes called "radio
                                    buttons" because they're similar to the
                                    buttons on a car radio: pushing in one
                                    button causes the others to pop out.

Check Box [X]                     A check box is a yes/no switch. If the
                                    box is empty, the feature is turned off.
                                    If it contains a letter X, the feature
                                    is on. Press the SPACEBAR to turn a
                                    check box on or off. Use the TAB key to
                                    move between check boxes.

Text Box [          ]             A text box contains text that you enter.
                                    In Figure 3.2, the setting for Tab Stops
                                    requires you to type in the number of
                                    spaces to be inserted when you press the
                                    TAB key.

Command Buttons                   Command buttons enclosed in angle
< OK >                            brackets pass commands to the dialog box.
                                    The OK button means you're satisfied
                                    with the choices you've made. The Cancel
                                    button allows you to exit the dialog box
                                    with no changes. If one of the command
                                    buttons is highlighted, pressing ENTER
                                    invokes that command.

List Boxes                        Certain dialog boxes display the current
                                    disk directory inside a list box. If the
                                    number of files is too large for the
                                    list box, you may use the arrow keys and
                                    PGUP/PGDN (keyboard) or click the scroll
                                    bar to move around the list (mouse).


Using the Editor

QuickC's program editor is an important part of the QuickC environment. This
part of the chapter provides a brief overview of its many functions.


Moving Around in a Source File

Many of the keys within the editor act as you would expect. The PGDN and
PGUP keys advance you forward or back within the source code. The HOME key
moves the cursor to the beginning of the current line. The END key moves the
cursor to the end of the current line. The arrow keys move the cursor one
character at a time. QuickC also has a command for moving around in a source
file: The Go to command in the Search menu moves the cursor to a specified
line number.

────────────────────────────────────────────────────────────────────────────
NOTE

For a complete list of editor commands, use online help. Open the Help menu,
choose the Contents command, then get help about the Keyboard under the
Orientation heading.
────────────────────────────────────────────────────────────────────────────

You can invoke many of the editor commands in two different ways. For
example, to move one word to the right, you can press either CTRL+RIGHT or
CTRL+F. The second choice is part of the WordStar-compatible command set. If
you're familiar with WordStar commands, you already know how to use the
QuickC editor. There is one difference you should know: you don't use
separate commands to mark the beginning and end of a block of text.


Defining a Block

While you're working on a C program, you may want to delete a large block of
text or copy it to another place in the program. To do this, you must define
the block:

Move the cursor to the beginning of the block. Hold down the SHIFT key and
move to the end of the block. Use the other editing keys (HOME, END,
CTRL+RIGHT, and so on) while you're holding down SHIFT to extend the block.


Move the mouse cursor to the beginning of the block. While holding down the
left button, move to the end of the block.

After defining a block, you can do several things: use the DELETE key to
erase it or use SHIFT+DEL to copy it into the Paste buffer (then use
SHIFT+INS to insert the buffer into the source file at the current cursor
location).

While a block is defined, anything you type will replace the defined text.

You can also press the TAB key to indent the entire block an additional tab
setting or SHIFT+TAB to remove all tab settings.


Customizing the Editor

If you'd prefer to use another set of editing commands, QuickC comes with
four "key" files, which are files that define the keystrokes for editor
commands, along with a utility for making your own key file. The four key
files are QC.KEY, ME.KEY, BRIEF.KEY, and EPSILON.KEY. Refer to Appendix A
for a complete list of the commands they control (for example, the QuickC
and Microsoft editors use CTRL+E to move the cursor up, while Epsilon(tm)
uses CTRL+P).

To change to a new key file, use the /k: option when you run QuickC. For
example, to load the BRIEF.KEY file, enter this line, using just the file
name and not the fully qualified path:

    QC /k:BRIEF.KEY

Your preference is automatically saved in the QC.INI file. In future editing
sessions, you won't need to specify the key file.


Creating Your Own Key File

The MKKEY program allows you to make your own key file. You must use three
options: -c, -i, and -o. The first (-c) specifies the type of conversion:
ASCII to binary (ab) or binary to ASCII (ba). The two others specify the
input file (-i) and the output file (-o).

To modify the default QC.KEY file, you first convert it to an editable ASCII
file:

    MKKEY -c ba -i QC.KEY -o MYEDITOR.TXT

You can use any text editor (including QuickC's) to edit the file named
MYEDITOR.TXT, which lists the keystrokes that perform certain actions. For
example, you press CTRL+G to delete a character. The line in MYEDITOR.TXT
looks like this:

    Del : CTRL+G

You could change that command to any other keystroke (CTRL+D, for example),
as long as the key isn't already assigned to another function. Elsewhere in
the file, CTRL+D is assigned to CharRight, so you'd have to delete or change
that line if you wanted to use CTRL+D for the Del function.

When you're satisfied with the new functions, you must convert the ASCII
file to binary, so that it can be loaded into the QuickC editor:

    MKKEY -c ab -i MYEDITOR.TXT -o MYEDITOR.KEY

Finally, to load the new key file, use the /k: option described above.

────────────────────────────────────────────────────────────────────────────
NOTE

If you customize the QuickC editor by creating a key file, you are not
allowed to assign functions to CTRL+@.
────────────────────────────────────────────────────────────────────────────


Using Another Editor

If you'd prefer to use your favorite word processor or text editor for
writing programs, use the Customize Menu command in the Utility menu. This
allows you to run any other program (including word processors) from within
the QuickC environment. When you exit the program, you'll return to QuickC.


To use another editor, choose the Customize Menu command in the Utility
menu. Highlight the Custom &Editor item and select the Edit button. List the
path and the name of the editor in the Path Name text box. (It isn't
necessary to include the .EXE extension.) For example, you could list
\BIN\B,\EDITORS\EPS or MYDIR\M. If you're using Brief, Epsilon, or the
Microsoft Editor, read the appropriate section below.


Brief

Type the following in the Arguments text box:

    -m"editat $LINE $COL" $FILE

Add the following macro to your Brief macro file:

    ;*** editat ─ interface to QC Utility.Edit menu
    ; SYNOPSIS
    ; b -m"editat $LINE $COL" $FILE
    ; DESCRIPTION
    ; editat positions Brief at the specified line and column in the
    ; current file.  It is invoked from the command line (i.e -m).
    ;*

    (macro editat
        (
        (int line col)

        (get_parm 0 line)
        (get_parm 1 col)
        (move_abs line col)
        )
    )


Epsilon

Type the following in the Arguments text box:

    $FILE +$LINE


M Editor

Type the following in the Arguments text box:

    /e "Arg \"$LINE\" Mark" $FILE


Compiling and Linking

Your ultimate goal in writing C programs is to create an executable program.
To convert a C source file to a runnable program, you must compile and link
it. This section introduces the commands that compile and link programs, a
process called "building."

When QuickC builds a program, it performs two steps:


    1.  It compiles the .C source file into an object (.OBJ) file.

    2.  It links the object file with other object files or libraries to
        create an executable (.EXE) file.


Although you have the option of going through these two steps, it's
generally easier and more convenient to build a program with a single
command.


Building within the QuickC Environment

This section illustrates how to compile and link a C program. First, type in
this program and use the Save As command in the File menu to save the file
as HI.C:

    /* HI.C: Prints hello and a name */

    #include <stdio.h>

    main()
    {
        char name[80];

        printf( "Type your name, please.\n" );
        gets( name );
        printf( "Hello, %s\n", name );
    }

The output of this simple program tells you to type your name. You enter any
string of characters, and it says hello to you.

The program calls two library functions: printf and gets. For more
information about what these functions do, use the online help system.
Position the cursor on the function name and press F1. To close the Help
window, press ESC. Online help is explained in greater detail in the next
chapter.

────────────────────────────────────────────────────────────────────────────
NOTE

By default, QuickC names a new file UNTITLED.C. You should always explicitly
name your file before you compile.
────────────────────────────────────────────────────────────────────────────


Compiling and Linking

To build a program, open the Make menu and choose Build Program. Or use one
of these shortcuts:

Press SHIFT+F5 to build the program.

Click the <Shift+F5=Restart> button on the reference bar at the bottom of
the screen.

A dialog box appears on the screen to show you how far the compiler and
linker have progressed. The compiler or linker may halt if anything goes
wrong. When the source file contains errors, the Errors window appears and
the offending line is highlighted in the source window.

Note that incremental linking uses expanded memory, as defined by the
Lotus-Intel-Microsoft (LIM) specification versions 3.2 and higher, if it is
available. If you have installed additional memory on an 80286 or 80386
system, you may encounter problems when linking incrementally, especially if
you have configured the board to use both extended and expanded memory. In
particular, your computer may lock up if you use incremental linking in
conjunction with a Talltrees AT3 expanded memory board. (Other boards may or
may not be subject to this problem.) If this happens, you have several
choices:


    ■   Contact the manufacturer of the memory board for information on
        solving this problem.

    ■   Remove the Expanded Memory Manager (EMM) device driver and continue to
        link incrementally.

    ■   Disable extended memory (used by VDISK) and continue to link
        incrementally.

    ■   Leave the memory device driver in place, but turn off incremental
        linking. From the QuickC environment, choose the Make command in the
        Options menu and select the Linker Flags button. From the command
        line, avoid the /Li option.

    ■   Contact Microsoft Product Support for additional suggestions.



Running the Program

When the program has been built, the reference bar displays several new
items, including  <F5=Run>. To run the program, open the Run menu and choose
Go. Or use the shortcuts:

Press F5.

Click  <F5=Run>  on the reference bar.


Compiling, Linking, and Running

It's not necessary to press SHIFT+F5 (to build the program) before you press
F5 (to run it). If you simply press F5, the QuickC editor knows if the
source code in memory has changed. If it has changed, you'll be asked if you
want to rebuild the program.


Viewing the Output Window

When you choose Go from the Run menu (or press F5), the output is
automatically directed to the output screen. To see this output:

Press F4 to toggle between the two screens.

Open the View window and choose Output Screen. Click once to return to the
source window.

If you'd prefer to have both the Output and source windows visible at the
same time, choose the Windows command from the View menu and then choose
Output.


Saving the Program

To save the source file using the current name, go to the File menu and
choose either Save or Save As. If you use Save, QuickC automatically saves
the file under the name listed on the top line of the source window. If you
prefer to use another name, choose Save As. The following dialog box
appears:

(This figure may be found in the printed book.)

Type in the new name of the source file. If you don't add an extension,
QuickC automatically adds .C (HI becomes HI.C, for example).


Building from Multiple Source Files

Now we'll make things a little more complicated by writing a multiple-module
program.

First, edit the HI.C program, adding a few lines:

    /* HIA.C: Illustrates external functions */

    #include <stdio.h>

    main()
    {
        char name[80];

        welcome();
        outsider();
        printf( "Type your name, please.\n" );
        gets( name );
        printf( "Hello, %s\n", name );
    }
    welcome()
    {
        printf( "Welcome to the program.\n" );
    }

The  main  function calls two new functions:  welcome  and  outsider. Unlike
    printf  and  gets, which are library functions,  welcome  and outsider are
functions defined within the program. Note the definition of  welcome  below
the  main  function.

Don't compile the program yet. Save it as HIA.C and then choose New from the
File menu. Type in this second program:

    /* HIB.C: Second program for HIA.C */

    outsider()
    {
        printf( "This line is from the HIB.C file.\n" );
    }

Save it as HIB.C. Now there are two source files on your disk: HIA.C and
HIB.C.

There are several reasons to split a file into multiple modules. If you
write a function that's used in several programs, you can give it its own
source file. If you write long programs, splitting the file up makes editing
easier. In addition, the Build Program command takes less time because it
recompiles only the source files you've changed, instead of the entire
program.


Creating a Program List

Since the example program now uses two source files, we must create a
program list (also called a "make file") that tells QuickC which source
files should be compiled.

Open the Make menu and choose Set Program List (you must have Full Menus
enabled). Type the name HIA.MAK as the name of the file containing the
program list (the MAK extension is used for make files), and when QuickC
asks if it should create the file, press ENTER.

The following dialog box appears:

(This figure may be found in the printed book.)

Now you must add both HIA.C and HIB.C to the list of programs.

Press TAB until the cursor is within the list box containing the directory
of C source files (another list box lists the directory names). Use the
arrow keys to move to the HIA.C file. Press ENTER and the file name will
appear in the program list below. Repeat this action to add HIB.C to the
program list. (A second option is to type the file names in the text box at
the top of the screen.) When you're finished, press TAB until the Save List
command button is highlighted, and then press ENTER.

Click HIA.C once and click the Add/Delete button (or just double-click
HIA.C). Do the same for HIB.C. When both programs appear in the program
list, click the Save List command button to save the make file.

This program list tells QuickC that several source files are to be combined
into one program.

────────────────────────────────────────────────────────────────────────────
NOTE

Within a program list, you can include source files (ending with the .C
extension), object files (.OBJ), or libraries (.LIB). For example, if you
didn't include graphics in the combined library when you ran the SETUP
program, you can place GRAPHICS.LIB in the program list to gain access to
graphics functions.
────────────────────────────────────────────────────────────────────────────

Notice that the base name of the program list (HIA.MAK) matches the name of
one of the source files (HIA.C). Because the names match, when you load
HIA.C in the future, QuickC will ask if you wish to use the program list
HIA.MAK. You don't have to give the source file and the make file the same
names, but it's a good idea to do so.

The order that you list the files is inconsequential. It doesn't matter
which file is first or second.

When you choose the Rebuild All command from the Make menu, every .C file in
the program list is compiled into a .OBJ file. Then all of the .OBJ files
are linked with .LIB files to create one .EXE file.

However, if you press SHIFT+F5 or choose the Build Program command, QuickC
checks the time and date stamps on the source and object files. If the
source code has not changed since the last time a Build Program command
executed, there's no need to recompile the unchanged .OBJ files. Any files
that have changed are recompiled; the others are not. This means the Build
command is often faster than the Rebuild All command when you have multiple
source files.


About Directories

You can change directories whenever you open or save a file:

Press TAB until the cursor is within the Drives/Dirs: list box containing
the directory names (see Figure 3.4). Use the arrow keys to move to the
desired directory, and press ENTER.

Double-click the name of the desired directory.

To move to the parent directory, select the two periods (..) at the top of
the list.

When you exit QuickC, you return to the directory you started (the default
directory), regardless of how many other directories you may have accessed.


QuickC puts all object (.OBJ) files and executable (.EXE) files in the
default directory. For example, suppose you run QuickC from the C:\ZEBRA
directory and open the file TAPIR.C from the C:\AARDVARK directory. Because
ZEBRA is the default directory, the files TAPIR.OBJ and TAPIR.EXE are
created in the ZEBRA directory when you compile the program. If you prefer
to keep all related files in the AARDVARK directory, choose the Run DOS
Command from the Utility menu and type

    CHDIR \AARDVARK

The CHDIR directory command redirects the object and executable files to the
other directory.


Compiling and Linking from the Command Line

If you're new to the C language, you can skip this section. You don't need
to know how to compile and link from the command line; you can do everything
within the QuickC environment.

However, if you want to, you can exit the QuickC environment to build
programs from the DOS prompt. This gives you slightly more control over the
various options. In addition, if you're building a series of related
executable programs, you can either put the compile and link commands in a
batch file or create your own make file. Either method is faster than
building programs individually.

The program that builds from the command line is called QCL.EXE (the C and L
in the file name stand for "Compile" and "Link"). To build the HI.EXE
program, type this:

    QCL HI.C

You can include a variety of command-line options between QCL and the file
name. For example,

    QCL /AM HI.C

forces the linker to use the medium memory model (the default is the small
model). If you try this example, you must have a medium memory model library
installed. You will find a complete list of compiler and linker options in
the Microsoft QuickC Tool Kit manual (or type  QCL /help).

QCL can also build multiple-module programs. Since HIA.C and HIB.C are two
parts of a multiple-module program, the following line does not build a
program:

    QCL HIA.C

The compiler works correctly, creating a .OBJ file, but when the linker
looks for the  outsider  function (which is in HIB.C), it fails and returns
the error unresolved external.

One solution is to specify both source files:

    QCL HIA.C HIB.C

The example above builds a program called HIA.EXE because HIA.C is listed
first.

Another solution is to compile the two files and then link them yourself:

    QCL /c HIA.C
    QCL /c HIB.C
    QLINK HIA.OBJ HIB.OBJ

The /c option tells the QCL program to compile but not link. It must be
entered as a lowercase character.

Since you created a make file called HIA.MAK, which contained the program
list, you can also use the NMAKE program to build HIA.EXE. Simply pass it
the name of the make file:

    NMAKE /F HIA.MAK

For a complete list of compiler, linker, and NMAKE options, see Microsoft
QuickC Tool Kit.

The -qc option allows you to run the QuickC compiler from Microsoft C
Professional Development System version 6.0. To use the QuickC compiler from
Microsoft C use the command line

    CL = B1 qccom -qc

QuickC ships with the QLINK linker, a subset of LINK.


The Debugger

When you make obvious mistakes like misspelling a function name or
forgetting to end a line with a semicolon, your code causes a compile-time
error. The compiler (or linker) refuses to continue until you fix the
mistake.

Other mistakes cause run-time errors. Attempting to divide by zero is one
such example.

Still other mistakes are called logic errors. When a program includes a
logic error, it may run, but it eventually acts unpredictably or yields
incorrect results.

QuickC's built-in debugger helps you track down and correct logic errors. In
the Run menu, you'll find Trace Into and Step Over, which execute the
program in memory line by line. Trace Into follows functions when they're
called; Step Over lets you execute a function without showing its inner
workings.

You can use the Debug menu to set watchpoints and breakpoints and run a
program up to the breakpoint.

The Watch Value command from the Debug menu is also useful. You enter one or
more variable names and then monitor their values as you step through the
program. There's no need to place printf statements at various points in a
program just to monitor the value of a variable. The Quickwatch command
gives you even faster access to variables or expressions you want to watch.


If you turn on Debugging History, the debugger records everything that
happens during the session. Later, you can review the events and watch for
the logic error.

The online tutorial includes a lesson explaining how to use the debugger,
with a special section devoted to using Debugging History. If you're
interested in exploring this topic, run the LEARN program from the command
line or choose the Learn QuickC command from the Utility menu. You can also
consult online help for detailed information about the debugger.

────────────────────────────────────────────────────────────────────────────
IMPORTANT

The CodeView debugger cannot handle files that have been incrementally
compiled or incrementally linked. If you plan to examine QuickC programs
with CodeView, be sure the incremental compiling and linking options are
turned off. From the command line, use QCL without the /Gi or /Li options.
From the QuickC environment, use the Make command from the Options menu to
turn off incremental compiling and linking and to turn on CodeView info.
This restriction applies only to CodeView. QuickC's built-in debugger can
handle incrementally compiled and linked programs.
────────────────────────────────────────────────────────────────────────────






Chapter 4  Getting Help
────────────────────────────────────────────────────────────────────────────

The QuickC Compiler environment offers a complete online reference system
called the Microsoft Advisor. The Microsoft Advisor provides information on
the C language, run-time libraries, and utilities provided with QuickC.

The first section of this chapter, "Structure of the Microsoft Advisor,"
outlines the structure and contents of the help database. The second
section, "Navigating through the Microsoft Advisor," takes you on a quick
tour of the system.


Structure of the Microsoft Advisor

The Microsoft Advisor can be compared to a librarian managing a collection
of books. Each book, or help file, has its own table of contents, index, and
pages of information. The Advisor organizes the books with an overall table
of contents and index. All of the books are listed, and their specific
tables of contents and indexes can be accessed through the overall
references. The global contents screen is shown in Figure 4.1.

(This figure may be found in the printed book.)

You can access a variety of information from the online reference system.
Information regarding the C language, run-time libraries, errors, and the
reference system itself can all be displayed.


Navigating through the Microsoft Advisor

You request information about a topic in a window by positioning the cursor
over it and pressing F1. The help system then searches through the help
files for information about the topic. If it finds the topic, the help
system displays information in the Help window. If help cannot be found for
a particular word or symbol, a message informs you that no information is
associated with the topic. Sometimes, a topic with the same name occurs in
several help files. In such cases, a dialog box is displayed in which you
can select the context of the topic.


Using the Help Menu

The simplest method for accessing the online reference is with the commands
found in the Help menu. All of these commands present information in the
Help window.

Command                           Description
────────────────────────────────────────────────────────────────────────────
Index                             Displays the alphabetical index of
                                    help-file categories (see Figure 4.2).

Contents                          Displays the global contents screen for
                                    the categories found in the help files.

Topic:                            Provides information about the topic
                                    that the cursor is currently positioned
                                    over. If information about the topic is
                                    available, the topic's name is appended
                                    to the Topic: command. Otherwise, this
                                    menu option is grayed.

Help on Help                      Displays information about using the
                                    online reference itself.

(This figure may be found in the printed book.)

────────────────────────────────────────────────────────────────────────────
NOTE

SHIFT+F1 is the shortcut key for the Help on Help menu command. If you have
a terminate-and-stay-resident (TSR) utility such as the Norton Guides(tm)
installed and you invoke that program with SHIFT+F1, then you can't use
SHIFT+F1 as a shortcut to Help on Help. Choose Help on Help from the Help
menu instead, or change the key that invokes the TSR.
────────────────────────────────────────────────────────────────────────────


Using the F1 Key

You can use the F1 key to get information about any menu command or QuickC
dialog box, as well as information on C keywords, operators, and library
functions.


Menu Help

To view information about a menu item, first pull down the menu, then

Use the cursor keys to highlight the command and press F1.

Move the mouse cursor on the command and click the Right mouse button.

Figure 4.3 shows the help information for the Cut command in the Edit menu.


(This figure may be found in the printed book.)


Keyword and Library-Function Help

To view information about a C keyword, operator, or run-time library
function,

Put the cursor on the keyword or function name and press F1.

Click on the command with the Right mouse button.


Dialog-Box Help

To view information about a QuickC dialog box, simply press F1 while the
dialog box is displayed, or click on the Help button.


Using Hyperlinks

Hyperlinks are cross-references that connect related topic information.

Hyperlinks enclosed by the < and > characters are called "buttons." Navigate
through the online help system by using these buttons.

You can press TAB to move to the next hyperlink button within the current
help window. SHIFT+TAB moves back to the previous button. Typing any letter
moves the cursor to the next button that begins with the letter; holding
SHIFT down and typing a letter moves the cursor backward.

The Microsoft Advisor also recognizes C keywords, library functions,
constants defined by QuickC, and similar identifiers as hyperlinks, but they
are unmarked hyperlinks. Unmarked hyperlinks are recognized by the Microsoft
Advisor wherever they appear in the help-information text or in your source
code. However, an unmarked hyperlink is not delimited with the < and >
characters, and you can't move to it with the TAB key. An unmarked hyperlink
can only be executed by placing the cursor on it and pressing F1, or
pointing to it with the mouse cursor and clicking the Right mouse button.

You can access a hyperlink in several ways. First move either the mouse or
text cursor to a hyperlink, then

Press F1.

Click the Left mouse button twice (double-click). Then click the Right mouse
button once.

Highlighted button hyperlinks can also be executed by pressing ENTER or the
SPACEBAR.

Any of these actions displays information about the topic the cursor is
positioned on. If the topic isn't a hyperlink, a message informs you that no
information on the topic could be found.


Using Help Windows and Dialog Boxes

The Microsoft Advisor displays information in windows or dialog boxes. Help
windows and dialog boxes function the same as other QuickC windows and
dialog boxes. For a complete description of windows and dialog boxes, refer
to Chapter 3, "Using QuickC."


Using the Help Window

The help window displays various contents, indexes, and information about
selected topics. Some screens of information are larger than the help
window; information beyond the window borders can be viewed by using the
scroll bars or the arrow keys. The  -  -  symbol indicates the end of
information in the help  window.


Navigating with Hyperlink Buttons

At the top of the Help window is a group of hyperlink buttons that are
useful for moving through the reference system:

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
                                    online help system hierarchy.

< Index >                         Displays the index list. Selecting a
                                    letter from the list displays the index
                                    for entries beginning with that
                                    letter.

< Back >                          Moves you to the last online help screen
                                    you saw.

Screens on a particular topic frequently are physically grouped together in
a help file. You can press CTRL+F1 to display information about the next
physical topic in the help file.


Viewing the Previous Help Screen

The Microsoft Advisor remembers the last 20 help screens you've accessed. To
return to a previous screen, use the "Back" button or hold down the ALT key
and press F1 as many times as necessary to return to the screen you want to
see. The help screen that appears is active; you can ask for help on any of
its hyperlinks or topics.

You can always return to the global contents screen by pressing SHIFT+F1.


Copying and Pasting Information

Any text that appears in the help window can easily be copied to another
window. For example, to test an example program from the help window, you
only have to copy it to the source window and compile it.

To copy and paste with the keyboard, follow these steps:


    1.  Move the cursor to the beginning or the end of the text you want to
        select. Hold down the SHIFT key and move the cursor to the other end
        of the text. The text is now highlighted.

    2.  Execute the Copy command: press ALT to activate the menus, E for Edit,
        then C for Copy. Note that the menu lists the shortcut command
        (CTRL+INS), which can be substituted for ALT+E, then C.

    3.  Press F6 to switch to another window. Position the cursor where you
        want to insert the text, and execute the Paste command: ALT+E, then P,
        or use the SHIFT+INS shortcut. The text from the help window is
        inserted at the current cursor position.


To copy and paste using the mouse, follow these steps:


    1.  Click the Left mouse button and drag the cursor (hold the button down
        while moving the mouse) to select the text you want to copy.

    2.  Choose Copy from the Edit menu (or press CTRL+INS).

    3.  Move the mouse cursor to the location where you want to insert the
        text, and click once. Then choose Paste from the Edit menu. The text
        from the help window is inserted at the current cursor position.



Closing the Help Window

Once you're through working with the online reference system, close the
active help window and return to the source window:

Press ESC.

Click the Close button in the upper left corner of the window with the Left
mouse button.


Using Help Dialog Boxes

Help dialog boxes contain information about menu commands and their dialog
boxes. A help dialog box differs from a help window in that it is displayed
over the source window and any other windows that are displayed. Unlike the
help window, a help dialog box must be closed before you can execute any
menu commands. The Cancel button in the lower right portion of the dialog
box closes the help dialog box.

To view information about any QuickC dialog box, you can

Press F1.

Click the Help button in the dialog box with the Left mouse button.

Either of these commands causes a help dialog box to appear. To close a help
dialog box,

Press F1.

Click the dialog box's Cancel button by using the Left mouse button.


Accessing Different Types of Information

This section presents some strategies for accessing the different types of
information available within the online reference system.


Keyword Information

To get information about any keyword, operator, symbolic constant, or
library function, go to the index, select the keyword's first letter, then
scroll down the list of entries and select the topic hyperlink. If you know
the exact name of a keyword, it is often quicker to simply type it in the
source window and press F1 than to locate it through an index.

Figure 4.4 shows the information screen for the printf function.

(This figure may be found in the printed book.)

When information about a function is displayed in the help window, two
additional hyperlink buttons are displayed.


    ■   <Description> provides a detailed explanation of the function. When
        the information is displayed, the button changes to <Summary>,
        allowing you to return to the summarized information about the
        function.

    ■   <Example> displays C source code that provides an example of how the
        function is used. The code can be pasted into the source window to
        compile.



Topical Information

The online reference system is useful when you want an overview of the
available reference topics, or when you only have a general idea of what
information you need. Start with the global contents screen, then select any
hyperlinks that appear to relate to the topic. You can traverse the
hyperlinks until you locate the necessary information.


Menu and Dialog-Box Information

You can get information about any menu command or dialog box by pressing F1
when the menu command is highlighted or the dialog box is displayed. This is
helpful when you are first learning to use QuickC, and may not be completely
familiar with all of the features.


Error Information

The Microsoft Advisor provides information about compiler and linker error
messages.

To find the meaning of an error message using the keyboard,


    1.  Press F6 to move the cursor to the error window

    2.  Position the cursor on the error number

    3.  Press F1


Or:


    1.  Position the mouse cursor on the error number

    2.  Click the Right mouse button







Chapter 5  Where to Go from Here
────────────────────────────────────────────────────────────────────────────

You've installed the QuickC Compiler on your system and tried a sample
editing session. What you do next depends on your level of experience. You
can experiment, or you can further investigate some of the other books in
this package.


Read README.DOC

The README.DOC file lists all known corrections and additions to the printed
manuals. Before you continue, please read this file. You can view it from
within online help or you can use the QuickC editor (type  QC README.DOC  to
read the file).


For All Programmers

The QuickC environment has been designed with you, the programmer, in mind.
You'll find writing, compiling, and debugging QuickC programs faster and
easier than ever. To learn more about the editor, compiler, linker, and
debugger, you should run the disk-based tutorial on the QuickC distribution
disk labeled "Learning the Microsoft QuickC Integrated Environment."

The \QC2\TUTORIAL directory holds the tutorial program, LEARN.COM. The LEARN
program contains four lessons:


    1.  How to Use This Tutorial

    2.  Getting Around in QuickC

    3.  Creating Programs in QuickC

    4.  Debugging in QuickC


You can run LEARN from the command line or choose the Learn QuickC command
from the Utility menu.

QuickC searches the current path and runs the first LEARN.COM program it
finds. If it finds a LEARN.COM for another program, such as Microsoft Word,
QuickC will run that LEARN program instead of the one for QuickC.

If this happens while you are working from the command line, either switch
to the \QC2\TUTORIAL directory and type LEARN, and press ENTER, or run the
NEW-VARS batch file.

────────────────────────────────────────────────────────────────────────────
NOTE

Since most of the changes to QuickC 2.5 are language additions that don't
affect the QuickC environment or the operation of the compiler or linker,
the LEARN tutorial program has not been updated to include changes found in
version 2.5.
────────────────────────────────────────────────────────────────────────────


For Programmers New to the C Language

The book C for Yourself was written for people who already know how to
program (in BASIC, Pascal, or some other language) but have never used C.
Part 1, "Learning C," covers everything from functions to flow control and
from data types to pointers. If you've never programmed in C or if you need
a refresher course, start with C for Yourself.

The introduction in C for Yourself lists several additional books that
newcomers to C may find helpful.

Another good source of information about how C works is the online help
system. Prototypes, explanations, and examples for any function are
immediately available at the press of a key. You may ask for help about a
specific topic or browse through the contents screen.


For C Programmers New to QuickC

Appendix A of C for Yourself  is a quick reference to the QuickC
implementation of C. Both the proposed ANSI standard and the original
Kernighan & Ritchie standard are supported.

Appendix B of C for Yourself summarizes the most useful QuickC library
functions, listing the header files to include, values to pass, and values
returned.

For specific details on the compiling, linking, library, and other support
programs, see Microsoft QuickC Tool Kit.


For QuickC Programmers New to Version 2.5

If you've used an older version of QuickC, you should read Appendix B of
this book. It lists features that were added to both QuickC version 2.0 and
the current 2.5 version.

Advanced C topics and features unique to QuickC are covered in C for
Yourself. Part 2, "Using C," includes detailed information about the new
functions such as real coordinate graphics, presentation graphics, fonts,
and in-line assembly. If you've previously used version 1.0 of QuickC, we
recommend that you read through Part 2 of C for Yourself. In addition,
Appendix B, "C Library Guide," summarizes commonly used functions in the
QuickC run-time library.


Additional Tools

QuickC offers more than just an integrated editor, compiler, and linker.
Additional utilities include the QCL program (for compiling from the DOS
command line), the LINK program (for linking object modules), the NMAKE
program (for automating the compile/link process and maintaining programs),
and the LIB program (for creating your own libraries).

Microsoft QuickC Tool Kit explains how to use these advanced tools to best
advantage. Part 1, "Tool Kit Tutorial," is a tutorial that explains
step-by-step how these programs work. Part 2, "Reference to QuickC Tools,"
is a complete and exhaustive reference guide that summarizes the many
options.






Appendix A  Editor Functions
────────────────────────────────────────────────────────────────────────────

This appendix has two parts. The first part, Table A.1, lists the keystrokes
that invoke commands within the QuickC Compiler Editor and three other
editors. The second part, Table A.2, lists the editor functions
alphabetically and defines them.

Each editor has its own .KEY file. Chapter 3, "Using QuickC," explains how
to use the /k: option to load one of the four .KEY files supplied with
QuickC. It also contains directions for using MKKEY.EXE to customize the
commands within a .KEY file. Functions are not assigned default values. If
you omit Backspace from your customized .KEY file, you will be unable to
backspace.

Note that in Table A.1 below, the plus sign indicates that both keys should
be held down. For example, CTRL+H means that you hold down the CTRL key
while you press H. When keys are pressed separately, they are separated with
a comma. For example, ESC, D means that you press (and release) ESC and then
press the D key.

The CAPS LOCK key affects individual keystrokes, but not CTRL or ALT
sequences. Holding down the SHIFT key defines a block of text.

Table   A.1 Editor Keystrokes

╓┌──────────┌──────────────────┌─────────────┌──────────┌────────────────────╖
Function   QuickC             Microsoft     BRIEF(R)   Epsilon
────────────────────────────────────────────────────────────────────────────
Backspace  CTRL+H             CTRL+H        CTRL+H     ─

BegLine    CTRL+Q, CTRL+S     ─             ─          ─
            CTRL+Q, S

BegPgm     CTRL+HOME          ALT+A, PGUP   CTRL+PGUP  CTRL+HOME
            CTRL+Q, CTRL+R                              ESC, <
            CTRL+Q, R

Cancel     ESC                ESC           ESC        F12

Function   QuickC             Microsoft     BRIEF(R)   Epsilon
────────────────────────────────────────────────────────────────────────────

Cancel2    F12                F12           F12        ESC

Change     CTRL+Q, CTRL+A     CTRL+L        ALT+T      ESC, %
            CTRL+Q, A          CTRL+\



Table   A.1 (continued)

╓┌─────────────────┌─────────────────┌──────────────┌──────────┌─────────────►
Function          QuickC            Microsoft      BRIEF(R)   Epsilon
─────────────────────────────────────────────────────────────────────────────
CharLeft          CTRL+S            CTRL+S         LEFT       CTRL+B
                    LEFT                                        LEFT

CharRight         CTRL+D            CTRL+D         RIGHT      CTRL+F
                    RIGHT                                       RIGHT

Function          QuickC            Microsoft      BRIEF(R)   Epsilon
─────────────────────────────────────────────────────────────────────────────

Del               DEL               DEL            DEL        DEL
                    CTRL+G            CTRL+G                    CTRL+D

DelWord           CTRL+T                                      ALT+D
                                                                ESC, D

DoEsc             ESC               ─              ─          ─

DoQuoteCharacter  CTRL+P            CTRL+P         ALT+Q      CTRL+Q

DoTab             TAB               TAB            TAB        TAB
                    ALT+TAB                                     ALT+TAB

EndLine           END               END            END        END
                    CTRL+Q, CTRL+D                              CTRL+E
                    CTRL+Q, D

EndPgm            CTRL+END          ALT+A, PGDN    CTRL+PGDN  CTRL+END
Function          QuickC            Microsoft      BRIEF(R)   Epsilon
─────────────────────────────────────────────────────────────────────────────
EndPgm            CTRL+END          ALT+A, PGDN    CTRL+PGDN  CTRL+END
                    CTRL+Q, CTRL+C                              ESC, >
                    CTRL+Q, C

EndScn            CTRL+Q, CTRL+X    ALT+A, DOWN    CTRL+DOWN  ─
                    CTRL+Q, X

EraseEol          CTRL+Q, CTRL+Y    ALT+A, CTRL+Y  ALT+K      CTRL+K
                    CTRL+Q, Y

Find              CTRL+Q, CTRL+F    ─              ALT+S      CTRL+S
                    CTRL+Q, F

GotoBookmark0     CTRL+Q, 0         ─              ─          ─

GotoBookmark1     CTRL+Q, 1         ─              ─          ─



Table   A.1 (continued)

╓┌───────────────┌───────────────┌───────────┌──────────┌────────────────────╖
Function        QuickC          Microsoft   BRIEF(R)   Epsilon
────────────────────────────────────────────────────────────────────────────
GotoBookmark2   CTRL+Q, 2       ─           ─          ─

GotoBookmark3   CTRL+Q, 3       ─           ─          ─

HomeLine        HOME            HOME        HOME       HOME
                                                        CTRL+A

HomeScn         CTRL+Q, CTRL+E  ALT+A, UP   CTRL+HOME  ─
                CTRL+Q, E

KillLine        CTRL+Y          CTRL+Y      ALT+D      ─

LineDown        DOWN            DOWN        DOWN       DOWN
                CTRL+X          CTRL+X                 CTRL+N

LineUp          UP              UP          UP         UP
Function        QuickC          Microsoft   BRIEF(R)   Epsilon
────────────────────────────────────────────────────────────────────────────
LineUp          UP              UP          UP         UP
                CTRL+E          CTRL+E                 CTRL+P

MatchBrace      CTRL+]          ─           ─          CTRL+]

Menu            ALT             F11         ALT        ALT

Menu2           F11             ALT+M       F11        F11

NewLine         CTRL+M          CTRL+M      CTRL+M     CTRL+M

NextLine        CTRL+J          ─           ─          CTRL+J

PageDown        PGDN            PGDN        PGDN       PGDN
                CTRL+C          CTRL+C                 CTRL+V

PageLeft        CTRL+PGUP       ─           ─          CTRL+PGUP

PageRight       CTRL+PGDN       ─           ─          CTRL+PGDN
Function        QuickC          Microsoft   BRIEF(R)   Epsilon
────────────────────────────────────────────────────────────────────────────
PageRight       CTRL+PGDN       ─           ─          CTRL+PGDN

PageUp          PGUP            PGUP        PGUP       PGUP
                CTRL+R          CTRL+R                 ALT+V
                                                        ESC, V

ResetState      CTRL+K, CTRL+U  ─           ─          ─
                CTRL+Q, CTRL+U
                CTRL+U

ScrollDown      CTRL+Z,         CTRL+Z      CTRL+D     CTRL+Z CTRL+DOWN
                CTRL+DOWN



Table   A.1 (continued)

╓┌─────────────────┌─────────────────┌─────────────────┌───────────┌─────────►
Function          QuickC            Microsoft         BRIEF(R)    Epsilon
Function          QuickC            Microsoft         BRIEF(R)    Epsilon
─────────────────────────────────────────────────────────────────────────────
ScrollUp          CTRL+UP           CTRL+W            CTRL+U      CTRL+UP
                    CTRL+W                                          ESC, Z
                                                                    F4

SearchNext        CTRL+L            ─                 ─           ─

SetBookMark0      CTRL+K, 0         ─                 ALT+M       ─

SetBookMark1      CTRL+K, 1         ─                 ─           ─

SetBookMark2      CTRL+K, 2         ─                 ─           ─

SetBookMark3      CTRL+K, 3         ─                 ─           ─

SplitLine         CTRL+N            CTRL+N            ─           CTRL+O

ToggleInsertMode  INS               INS               ALT+I       INS
                    CTRL+V            CTRL+V

Function          QuickC            Microsoft         BRIEF(R)    Epsilon
─────────────────────────────────────────────────────────────────────────────

Undo              CTRL+Q, CTRL+L    ALT+H             ALT+U       ─
                    CTRL+Q, L

WordLeft          CTRL+LEFT         CTRL+LEFT         CTRL+LEFT   CTRL+LEFT
                    CTRL+A            CTRL+A                        ALT+B
                                                                    ESC, B

WordRight         CTRL+RIGHT        CTRL+RIGHT        CTRL+RIGHT  CTRL +RIGHT
                    CTRL+F            CTRL+F                        ALT+F
                                                                    ESC, F

─────────────────────────────────────────────────────────────────────────────



Table   A.2 Function Definitions

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Function                          Description
────────────────────────────────────────────────────────────────────────────
Backspace                         Moves the cursor left and erases the
                                    character in that position.

Beep                              Causes the computer to beep, usually
                                    when an unassigned key is pressed.

BegLine                           Moves the cursor to the beginning of the
                                    line (column 1), ignoring any
                                    indentation.

BegPgm                            Moves the cursor to the beginning of the
                                    program (line 1, column 1).

Cancel                            Closes help windows and cancels dialog
                                    boxes.

Cancel2                           Cancels dialog boxes.

Change                            Searches for selected text and changes
Function                          Description
────────────────────────────────────────────────────────────────────────────
Change                            Searches for selected text and changes
                                    it to something else.

CharLeft                          Moves the cursor one character left.

CharRight                         Moves the cursor one character right.

Del                               Deletes the character under the cursor.

DelWord                           Deletes the word from the current cursor
                                    position to the next white-space
                                    character.

DoEsc                             Cancels the current selected text.

DoQuoteCharacter                  Inserts the next typed character into
                                    the text (except carriage returns,
                                    linefeeds, and nulls). This allows you
                                    to insert characters such as CTRL+C.
Function                          Description
────────────────────────────────────────────────────────────────────────────
                                    to insert characters such as CTRL+C.

DoTab                             Indents the entire defined block by one
                                    tab setting. A shifted DoTab removes the
                                    tabs from a block.

Endline                           Moves the cursor to the last nonspace
                                    character in the current line.

EndPgm                            Moves the cursor to column 1 of the last
                                    line in the current file.

EndScn                            Moves the cursor to the bottom line of
                                    the current screen. The current column
                                    is
                                    maintained.

EraseEol                          Erases all characters from the cursor
                                    position to the end of the line. The
Function                          Description
────────────────────────────────────────────────────────────────────────────
                                    position to the end of the line. The
                                    characters are placed in the insert
                                    buffer.

Find                              Searches from the current cursor
                                    position to the end of the file for
                                    defined text.

GotoBookmark0                     Moves the cursor to bookmark 0.

GotoBookmark1                     Moves the cursor to bookmark 1.

GotoBookmark2                     Moves the cursor to bookmark 2.

GotoBookmark3                     Moves the cursor to bookmark 3.



Table   A.2 (continued)

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Function                          Description
────────────────────────────────────────────────────────────────────────────
HomeLine                          Moves the cursor to the first nonspace
                                    character on the line.

HomeScn                           Moves the cursor to line 1 of the
                                    current screen, maintaining the current
                                    column
                                    position.

IgnoreChar                        Does nothing. In addition, the editor
                                    doesn't beep as it would for undefined
                                    keys.

KillLine                          Erases everything on the current line
                                    and places the line in the insert buffer.

LineDown                          Moves the cursor to the next line.

Function                          Description
────────────────────────────────────────────────────────────────────────────

LineUp                            Moves the cursor to the previous line.

MatchBrace                        Finds matching (parentheses), [square
                                    brackets], or {curly braces}. The editor
                                    searches for opening or closing braces,
                                    depending on which type the cursor is
                                    resting on.

Menu                              Activates the menu bar.

Menu2                             Activates the menu bar.

NewLine                           Splits the current line into two lines
                                    at the cursor position. The new line is
                                    automatically indented to match the line
                                    above.

PageDown                          Moves forward one screen.
Function                          Description
────────────────────────────────────────────────────────────────────────────
PageDown                          Moves forward one screen.

PageLeft                          Moves left one screen.

PageRight                         Moves one screen to the right (each line
                                    on a screen may contain up to 255
                                    characters).

PageUp                            Moves back one screen.

ResetState                        Cancels prefix tables.

ScrollDown                        Scrolls down one line at a time,
                                    maintaining the current cursor position.

ScrollUp                          Scrolls the text up one line at a time,
                                    maintaining the current cursor position.

SearchNext                        Repeats the Find command.
Function                          Description
────────────────────────────────────────────────────────────────────────────
SearchNext                        Repeats the Find command.

SetBookMark0                      Sets bookmark 0. You may later return to
                                    this position with GotoBookMark0.

SetBookMark1                      Sets bookmark 1.

SetBookMark2                      Sets bookmark 2.

SetBookMark3                      Sets bookmark 3.



Table   A.2 (continued)

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Function                          Description
────────────────────────────────────────────────────────────────────────────
SplitLine                         Splits a line in two (like NewLine), but
Function                          Description
────────────────────────────────────────────────────────────────────────────
SplitLine                         Splits a line in two (like NewLine), but
                                    leaves the cursor at the end of the
                                    first line instead of the beginning of
                                    the second.

ToggleInsertMode                  Toggles between insert mode and overtype
                                    mode.

Undo                              Cancels any commands that might have
                                    been performed on the current line. Undo
                                    works only when the cursor remains on
                                    the line being edited.

WordLeft                          Moves the cursor to the previous word.

WordRight                         Moves the cursor to the next word.

────────────────────────────────────────────────────────────────────────────

Function                          Description
────────────────────────────────────────────────────────────────────────────








Appendix B  QuickC Differences
────────────────────────────────────────────────────────────────────────────

The QuickC Compiler version 2.5 incorporates a variety of new features. If
you've used version 1.0, you'll find many new features were added to version
2.0, in addition to those added in the current 2.5 release.

This appendix summarizes some of the significant differences between QuickC
versions 1.0 and 2.0, and offers a comprehensive guide to the changes found
in version 2.5. For detailed information about a feature, consult the online
help, C for Yourself, or Microsoft QuickC Tool Kit.


QuickC Version 2.0 Additions

Additions to version 2.0 include


    ■   Expanded and improved online help system invoked by pressing F1

    ■   New presentation and real-coordinates graphics functions

    ■   Small, medium, compact, large, and huge memory models

    ■   Support of in-line assembly-language routines

    ■   New Local Variables, Notepad, and Registers windows

    ■   Text cut and paste support

    ■   Command line compiling and linking with QC.EXE and QCL.EXE

    ■   Incremental compilation

    ■   MKKEY utility for customizing editor key commands



QuickC Version 2.5 Additions and Changes

Additions and changes to version 2.5 affect both the QuickC environment and
the C language implementation. The following sections list those changes.


Interface and Environment Changes

This section describes changes to the QuickC user interface and programming
environment.


    ■   The Go To command in the Search menu moves to a specified line number
        in the source.

    ■   The Quickwatch command in the Debug menu gives faster access in
        viewing variables and expressions.

    ■   The Color command in the Options menu allows you to select four
        different sets of colors and to change the color of items such as
        menus, borders, and buttons.

    ■   Tabs can now be treated as spaces or actual tab characters.



Language and Compiler Changes

This section describes changes to the QuickC implementation of the C
language and changes in the compiler's behavior.


Memory Models


    ■   QuickC 2.5 now supports the tiny memory model, which produces .COM
        rather than .EXE files. In the tiny memory model, all of your
        program's code and data must fit in a single 64K segment.
        Additionally, tiny programs do not support graphics.

    ■   QuickC 2.5 supports custom memory models, such as huge-compact, with
        the /A compiler option. Refer to Microsoft QuickC Tool Kit for
        additional information.



Constants


    ■   Both long and unsigned long values are allowed in switch expressions
        and case constants. Previous versions of QuickC allow only char and
        int values in this context.

    ■   QuickC supports unsigned long decimal constants. It is now possible to
        initialize unsigned long variables with values larger than MAX_LONG
        using decimal (rather than hexadecimal or octal) constants.

    ■   The constant NULL is now defined as  ((void *)0). Previous versions of
        QuickC defined NULL as 0x0000 in small and medium models and
        0x00000000L in compact and large models.



Keywords


    ■   Storage classes or types (or both) are now required on variable
        declarations. QuickC previously assumed that untyped variables (such
        as  a;) were integers. This declaration now generates a warning.

    ■   The volatile keyword, which was previously implemented only
        syntactically, is now also implemented semantically.

    ■   To identify implementation-defined keywords as non-ANSI, an underscore
        has been added. Thus, far, near, huge, cdecl, fortran, interrupt, and
        pascal have been changed to _far, _near, _huge, _cdecl, _fortran,
        _interrupt, and _pascal. QuickC still accepts the obsolescent versions
        of these keywords, unless you use the /Za (disable extensions) option.

    ■   A new pseudo-instruction, _emit, has been added for use with the
        in-line assembler. It allows you to define a single immediate byte at
        the current location in the current text segment.

    ■   The const and volatile qualifiers must be placed after the name of the
        type they qualify. Consult online help for more information about
        const and volatile.

    ■   The new _fastcall function attribute causes QuickC to pass function
        arguments in processor registers instead of on the stack. This results
        in faster functions when a QuickC program is built with Microsoft C
        version 6.0.



Locale-Specific Information


    ■   The LOCALE.H header file is new to version 2.5. It declares functions
        and structures for describing conventions, such as the currency
        symbol, that vary from one country to the next.



Based Objects


    ■   QuickC 2.5 supports the following new keywords and operators, which
        are used to declare and manipulate based objects: _based, _segment,
        _segname, and :> (the based operator). Based object support is
        included in QuickC 2.5 for the sake of compatibility with Microsoft C
        version 6.0. Please refer to Chapter 2, "Managing Memory," in the
        Microsoft C Professional Development System Advanced Programming
        Techniques guide for further details.



Data Types


    ■   QuickC version 2.0 recognizes long double and double as different
        types, with both types stored in memory as 64-bit quantities.

        Because the 80x87 family of math coprocessors supports an 80-bit
        floating-point type, QuickC version 2.5 stores long double variables
        in the 80x87 10-byte (80-bit) form.

        Certain library functions have been modified to handle the long double
        type. The printf and scanf family of functions supports long double
        values identified by a trailing l in the format specifier. The library
        contains new versions of the transcendental functions as well as
        intrinsic forms that accept long double arguments. These are
        identified by a trailing l in the function name (e.g., cosl).

    ■   Integer promotion rules have changed. Earlier versions of QuickC
        attempted to preserve an expression's unsigned nature as much as
        possible. Version 2.5 attempts to preserve the expression's value.

        In version 2.0, an unsigned char promotes to an unsigned int; an
        unsigned int promotes to an unsigned long.

        In version 2.5, an unsigned char promotes to a signed int; an unsigned
        int promotes to a signed long.

    ■   Shift operators now give a result that is of the same type as the left
        operand. QuickC previously yielded a result that was of the same type
        as the largest of the two values.



Preprocessor


    ■   QuickC 2.5 allows longer macro expansions (up to 12K). In low memory
        conditions, the macro expansion space may be limited to 6K.

    ■   The data_seg pragma has been deleted.

    ■   Version 2.0 of QuickC treated conditional compilation expressions as
        signed long values. Version 2.5 evaluates these expressions using the
        same rules as are used for all other expressions in C.



Structures, Unions, Arrays, and Bit Fields


    ■   If a structure or union is nested inside another structure or union,
        you can declare it without using a variable name. This rule simplifies
        references to inner members of such nested constructs.

    ■   QuickC now allows an unsized or zero-sized array as the last member of
        a structure. Unsized arrays can appear only as the last member of a
        structure. Structures containing unsized array declarations can be
        nested within other structures as long as no element of the enclosing
        structure follows the unsized array. Arrays of such structures are not
        allowed.

    ■   QuickC now allows longer string literals (up to 2K).

    ■   You may declare signed as well as unsigned bit fields.

    ■   Bit fields are permitted in unions.



Memory Management


    ■   The memory-management routine sbrk has been deleted.

    ■   The _fmalloc function attempts to allocate far memory. In previous
        versions of QuickC, _fmalloc called _nmalloc if far memory was not
        available. Now it returns a null pointer if far memory isn't
        available, even if near memory is available.

    ■   Previous versions of QuickC placed the command-line argument strings
        and environment strings in the near heap. Now they are allocated
        through malloc. Because malloc maps to _fmalloc in the compact and
        large memory models, environment strings and command-line argument
        strings are in far memory in those memory models.



Miscellaneous


    ■   QuickC supports a new warning level (4), which provides even more
        stringent error checking than the warning levels in version 2.0. You
        can set this warning level from the command line, by supplying the /W4
        compiler option, or from the QuickC environment, with the Compiler
        Flags button shown with the Make command in the Options menu. At
        warning level 4, QuickC generates warnings for nonportable (non-ANSI)
        constructs and for undefined or implementation-defined constructs.

    ■   The printf and scanf format specifier modifiers N, F, h, and l have
        changed. Consult online help for additional information.

    ■   In QuickC 2.0, a prototype or definition that returns a float value
        actually returns a double value. Version 2.5 interprets such a
        function as returning a float value.

    ■   QuickC version 2.5 does not align a char variable to an even address
        unless the variable is local. Likewise, a literal constant string is
        not aligned as in QuickC 2.0.

    ■   To maintain ANSI compatibility and portability between QuickC and
        other systems, QuickC now supports trigraphs such as  ??=  equivalent
        to  #.
```

{% endraw %}
